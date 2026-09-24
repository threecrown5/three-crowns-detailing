import { LocationPage } from "@/components/LocationPage";
import { getLocation } from "@/lib/locations";

export default function GlendalePage() {
  return <LocationPage location={getLocation("glendale")} />;
}
