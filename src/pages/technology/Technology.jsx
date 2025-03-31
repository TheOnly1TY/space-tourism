import { NavBar } from "../../components/NavBar";
import dataStore from "../../../data/data.json";
import { TechnologyContent } from "./TechnologyContent";

export function Technology() {
  return (
    <div className="min-h-screen bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)]  lg:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <Main />
    </div>
  );
}
function Main() {
  const technologyData = dataStore.technology;
  console.log(technologyData);

  return (
    <main className="grid grid-rows-1 text-center lg:text-left lg:place-content-center pt-40 pb-20 lg:py-40 mx-6 md:mx-10">
      <h2 className="text-base lg:text-[1.75rem] text-center md:text-left text-white tracking-[4px] uppercase font-barlow-condensed pb-4 md:pb-6">
        <span className="font-bold tracking-[4.72px] opacity-35">03 </span>{" "}
        space launch 101
      </h2>
      <TechnologyContent technologyData={technologyData[0]} />
    </main>
  );
}
