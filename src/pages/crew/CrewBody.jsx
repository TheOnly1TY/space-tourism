import { useState } from "react";
import dataStore from "../../../data/data.json";
import { CrewNav } from "./CrewNav";
export function CrewBody() {
  const [curCrewData, setCurCrewData] = useState(0);
  const crewData = dataStore.crew;
  const { name, bio, images, role } = crewData[curCrewData];

  return (
    <main className="main-content mx-6 md:mx-10">
      <h2 className="heading-text">
        <span className="highlight">02 </span> meet your crew
      </h2>
      <section className="flex justify-center items-center flex-col lg:flex-row lg:gap-10">
        <div
          className="flex flex-col justify-between items-center lg:items-start max-w-[539px] gap-20 md:gap-10 lg:gap-30"
          role="content"
        >
          <div>
            <h3 className="text-lg md:text-2xl lg:text-[2rem] text-white opacity-35 uppercase pt-10">
              {role}
            </h3>
            <h1 className="text-2xl md:text-[2.5rem] lg:text-[56px] text-white font-bellefair uppercase pb-6">
              {name}
            </h1>
            <p className="text-[0.9375rem] md:text-base lg:text-lg text-[#D0D6F9] leading-[180%]">
              {bio}
            </p>
          </div>
          <CrewNav
            crewData={crewData}
            curCrewData={curCrewData}
            setCurCrewData={setCurCrewData}
          />
        </div>
        <figure>
          <img
            src={images.png}
            className="w-[17rem] md:w-[28rem] pt-4 md:pt-8 lg:pt-0"
            alt={`${name} image`}
          />
        </figure>
      </section>
    </main>
  );
}
