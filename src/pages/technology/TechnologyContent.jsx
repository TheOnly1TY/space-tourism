import { TechnologyNav } from "./TechnologyNav";

export function TechnologyContent({
  technologyData,
  technologyDat,
  curTechData,
  setCurTechData,
}) {
  const { name, description } = technologyData;
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row">
      <TechnologyNav
        curTechData={curTechData}
        setCurTechData={setCurTechData}
        technologyData={technologyDat}
      />
      <div className="md:max-w-[512px] lg:max-w-[491px] mx-6 md:mx-10">
        <h3 className="text-lg md:text-[2rem] text-white opacity-35 uppercase py-3">
          the terminology…
        </h3>
        <h1 className="text-2xl md:text-[2.5rem] lg:text-[56px] text-white font-bellefair uppercase pb-6">
          {name}
        </h1>
        <p className="text-[0.9375rem] md:text-base lg:text-lg text-[#D0D6F9]">
          {description}
        </p>
      </div>
    </div>
  );
}
