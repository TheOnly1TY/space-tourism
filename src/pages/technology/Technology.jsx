import { NavBar } from "../../components/NavBar";
import { TechnologyBody } from "./TechnologyBody";

export function Technology() {
  return (
    <div className="min-h-screen bg-[url(/technology/background-technology-mobile.jpg)] md:bg-[url(/technology/background-technology-tablet.jpg)]  lg:bg-[url(/technology/background-technology-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <TechnologyBody />
    </div>
  );
}
