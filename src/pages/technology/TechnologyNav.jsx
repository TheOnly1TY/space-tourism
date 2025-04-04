import { useSpace } from "../../contexts/SpaceContext";

export function TechnologyNav() {
  const { handleTechnologyNav, curTechData } = useSpace();
  const { technologyData } = useSpace();
  return (
    <div className="flex lg:flex-col gap-5">
      {technologyData.map((_, index) => (
        <span
          key={index}
          onClick={() => handleTechnologyNav(index)}
          className={`w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center text-lg md:text-2xl lg:text-[2rem] border border-white/40 font-bellefair rounded-full cursor-pointer  ${
            curTechData === index ? "text-[#0B0D17] bg-white" : "text-white"
          } hover:border-white`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
