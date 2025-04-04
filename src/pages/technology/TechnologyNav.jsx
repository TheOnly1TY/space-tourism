export function TechnologyNav({ technologyData, curTechData, setCurTechData }) {
  const handleTechnologyNav = (index) => {
    setCurTechData(index);
  };
  return (
    <div className="flex lg:flex-col gap-5">
      {technologyData.map((_, index) => (
        <span
          onClick={() => handleTechnologyNav(index)}
          className={`w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center text-lg md:text-2xl lg:text-[2rem] border border-[#ffffff40] font-bellefair rounded-full cursor-pointer  ${
            curTechData === index ? "text-[#0B0D17] bg-white" : "text-white"
          }`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
