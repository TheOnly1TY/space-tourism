import { NavBar } from "../../components/NavBar";
import { CrewBody } from "./CrewBody";

export function Crew() {
  return (
    <div className="min-h-screen bg-[url(/crew/background-crew-mobile.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)]  lg:bg-[url(/crew/background-crew-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <CrewBody />
    </div>
  );
}
