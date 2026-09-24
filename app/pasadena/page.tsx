import { LocationPage } from "@/components/LocationPage";
import { getLocation } from "@/lib/locations";

export default function PasadenaPage() {
  return <LocationPage location={getLocation("pasadena")} />;
}
