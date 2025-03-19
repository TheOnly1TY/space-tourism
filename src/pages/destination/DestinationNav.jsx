export function DestinationNav({
  destinationData,
  destinationId,
  setDestinationId,
}) {
  const handleDestinationNav = (id) => {
    setDestinationId(id);
  };
  return (
    <nav className=" flex justify-center lg:justify-start mb-6 lg:mb-10 gap-7">
      {destinationData.map((data, id) => (
        <h3
          className={`linep text-lg md:text-base text-sea font-barlow-condensed tracking-[2px] uppercase cursor-pointer ${
            destinationId === id && "text-white line"
          }`}
          key={data.name}
          onClick={() => handleDestinationNav(id)}
        >
          {data.name}
        </h3>
      ))}
    </nav>
  );
}
