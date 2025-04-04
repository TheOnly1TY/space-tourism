import { useSpace } from "../../contexts/SpaceContext";

export function DestinationNav({ destinationData }) {
  const { handleAnimateChange, destinationId } = useSpace();
  return (
    <nav className=" flex justify-center lg:justify-start mb-6 lg:mb-10 gap-7">
      {destinationData.map((data, id) => (
        <h3
          className={`lineP text-lg md:text-base text-sea font-barlow-condensed tracking-[2px] uppercase cursor-pointer ${
            destinationId === id && "text-white line"
          } hover:before:absolute hover:before:bottom-[-7px] hover:before:left-0 hover:before:w-full hover:before:h-[3px] hover:before:bg-white/50 hover:text-white`}
          key={data.name}
          onClick={() => handleAnimateChange(id)}
        >
          {data.name}
        </h3>
      ))}
    </nav>
  );
}
