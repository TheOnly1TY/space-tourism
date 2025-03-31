import { NavBar } from "../../components/NavBar";
import { DestinationBody } from "./DestinationBody";
export function Destination() {
  return (
    <section className="min-h-screen bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)]  lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <DestinationBody />
    </section>
  );
}
