#!/usr/bin/env python3
"""
blur_plates.py
Run from inside your project folder:
    python3 blur_plates.py

It will blur any rectangular region that looks like a license plate
across every image in public/galleryC/
"""

import os
import cv2
import numpy as np

GALLERY_DIR = os.path.join(os.path.dirname(__file__), "public", "galleryC")
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

def blur_plates(img):
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Enhance edges
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.Canny(blur, 50, 150)

    # Find contours
    contours, _ = cv2.findContours(edges, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for cnt in contours:
        x, y, cw, ch = cv2.boundingRect(cnt)
        aspect = cw / float(ch) if ch > 0 else 0

        # License plates are roughly 2:1 to 5:1 aspect ratio
        # and a reasonable size relative to image
        if 2.0 <= aspect <= 5.5:
            area = cw * ch
            img_area = w * h
            if 0.003 < area / img_area < 0.06:
                # Add padding around detected region
                pad = 8
                x1 = max(x - pad, 0)
                y1 = max(y - pad, 0)
                x2 = min(x + cw + pad, w)
                y2 = min(y + ch + pad, h)

                roi = img[y1:y2, x1:x2]
                # Strong blur
                blurred = cv2.GaussianBlur(roi, (51, 51), 30)
                img[y1:y2, x1:x2] = blurred

    return img


def process_gallery():
    if not os.path.isdir(GALLERY_DIR):
        print(f"Could not find gallery folder at: {GALLERY_DIR}")
        print("Make sure you run this script from inside your project root folder.")
        return

    files = [f for f in os.listdir(GALLERY_DIR)
             if os.path.splitext(f)[1].lower() in EXTENSIONS]

    if not files:
        print("No images found in public/galleryC/")
        return

    print(f"Found {len(files)} images. Processing...\n")

    for fname in files:
        fpath = os.path.join(GALLERY_DIR, fname)
        img = cv2.imread(fpath)
        if img is None:
            print(f"  Skipped (could not read): {fname}")
            continue

        processed = blur_plates(img)
        cv2.imwrite(fpath, processed)
        print(f"  Processed: {fname}")

    print(f"\nDone. {len(files)} images processed in place.")


if __name__ == "__main__":
    process_gallery()
