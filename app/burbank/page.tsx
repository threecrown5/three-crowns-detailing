import { LocationPage } from "@/components/LocationPage";
import { getLocation } from "@/lib/locations";

export default function BurbankPage() {
  return <LocationPage location={getLocation("burbank")} />;
}
