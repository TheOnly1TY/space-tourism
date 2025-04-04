import { useSpace } from "../../contexts/SpaceContext";

export function CrewNav() {
  const { crewData, curCrewData, handleCrewNav } = useSpace();
  return (
    <div className="flex gap-5 lg:gap-9">
      {crewData.map((_, index) => (
        <div
          onClick={() => handleCrewNav(index)}
          key={index}
          className={`w-2.5 lg:w-[15px] h-2.5 lg:h-[15px] bg-white opacity-[17.44%] rounded-full cursor-pointer ${
            curCrewData === index && "opacity-[100%]"
          } hover:opacity-50 active:opactity-50`}
        ></div>
      ))}
    </div>
  );
}
