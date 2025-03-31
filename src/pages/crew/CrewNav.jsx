export function CrewNav({ crewData, curCrewData, setCurCrewData }) {
  const handleCrewNav = (index) => {
    setCurCrewData(index);
  };
  return (
    <div className="flex gap-5 lg:gap-9">
      {crewData.map((_, index) => (
        <div
          onClick={() => handleCrewNav(index)}
          key={index}
          className={`w-2.5 lg:w-[15px] h-2.5 lg:h-[15px] bg-white opacity-[17.44%] rounded-full cursor-pointer ${
            curCrewData === index && "opacity-[100%]"
          }`}
        ></div>
      ))}
    </div>
  );
}
