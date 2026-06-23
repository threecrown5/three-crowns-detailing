#!/usr/bin/env python3
"""
blur_plates_v2.py
Reads images from public/galleryC/plates/
Writes blurred results to public/galleryC/script_output/

Only searches the bottom 40% / center 70% of each image for plates,
so it won't accidentally blur windows, grilles, or other rectangles.
"""

import os
import cv2
import numpy as np

BASE_DIR    = os.path.join(os.path.dirname(__file__), "public", "galleryC")
INPUT_DIR   = os.path.join(BASE_DIR, "plates")
OUTPUT_DIR  = os.path.join(BASE_DIR, "script_output")
EXTENSIONS  = {".jpg", ".jpeg", ".png", ".webp"}


def blur_plates(img):
    h, w = img.shape[:2]

    # Constrain search to bottom 40% of image, center 70% horizontally
    y_start = int(h * 0.60)
    x_start = int(w * 0.15)
    x_end   = int(w * 0.85)

    region = img[y_start:h, x_start:x_end]
    rh, rw = region.shape[:2]

    gray  = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
    blur  = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.Canny(blur, 50, 150)

    contours, _ = cv2.findContours(edges, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    found = 0
    for cnt in contours:
        x, y, cw, ch = cv2.boundingRect(cnt)
        aspect = cw / float(ch) if ch > 0 else 0

        # Plate aspect ratio: roughly 2:1 to 5:1
        if 2.0 <= aspect <= 5.0:
            area     = cw * ch
            reg_area = rw * rh
            # Plate should be between 1% and 20% of the search region
            if 0.01 < area / reg_area < 0.20:
                # Convert coords back to full image space
                abs_x1 = max(x_start + x - 10, 0)
                abs_y1 = max(y_start + y - 10, 0)
                abs_x2 = min(x_start + x + cw + 10, w)
                abs_y2 = min(y_start + y + ch + 10, h)

                roi = img[abs_y1:abs_y2, abs_x1:abs_x2]
                img[abs_y1:abs_y2, abs_x1:abs_x2] = cv2.GaussianBlur(roi, (61, 61), 30)
                found += 1

    return img, found


def main():
    if not os.path.isdir(INPUT_DIR):
        print(f"Input folder not found: {INPUT_DIR}")
        return

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    files = [f for f in os.listdir(INPUT_DIR)
             if os.path.splitext(f)[1].lower() in EXTENSIONS]

    if not files:
        print("No images found in plates/")
        return

    print(f"Processing {len(files)} images...\n")

    for fname in sorted(files):
        src  = os.path.join(INPUT_DIR, fname)
        dest = os.path.join(OUTPUT_DIR, fname)

        img = cv2.imread(src)
        if img is None:
            print(f"  SKIP (unreadable): {fname}")
            continue

        processed, count = blur_plates(img)
        cv2.imwrite(dest, processed)
        print(f"  {fname} — {count} region(s) blurred")

    print(f"\nDone. Results in public/galleryC/script_output/")


if __name__ == "__main__":
    main()
