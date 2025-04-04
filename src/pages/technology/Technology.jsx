import { NavBar } from "../../components/NavBar";
import dataStore from "../../../data/data.json";
import { TechnologyContent } from "./TechnologyContent";
import { useState } from "react";

export function Technology() {
  return (
    <div className="min-h-screen bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)]  lg:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <TechnologyBody />
    </div>
  );
}
function TechnologyBody() {
  const [curTechData, setCurTechData] = useState(0);
  const technologyData = dataStore.technology;
  const techData = technologyData[curTechData];
  const { images } = techData;

  return (
    <main className="main-content lg:mx-10">
      <h2 className="text-base lg:text-[1.75rem] text-center md:text-left text-white tracking-[4px] uppercase font-barlow-condensed pb-4 md:pb-6">
        <span className="md:ml-10 font-bold tracking-[4.72px] opacity-35">
          03{" "}
        </span>{" "}
        space launch 101
      </h2>
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
        <TechnologyContent
          technologyData={techData}
          curTechData={curTechData}
          setCurTechData={setCurTechData}
          technologyDat={technologyData}
        />
        <figure>
          <img
            src={images.portrait}
            className="hidden lg:block"
            alt="technology_image"
          />
          <img
            src={images.landscape}
            className="block lg:hidden pt-20 pb-10"
            alt="technology_image"
          />
        </figure>
      </div>
    </main>
  );
}
