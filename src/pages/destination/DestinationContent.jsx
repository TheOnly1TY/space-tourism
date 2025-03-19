export function DestinationContent({ destinationData }) {
  const { name, description, distance, travel } = destinationData;
  return (
    <>
      <h1 className="text-[5rem] lg:text-8xl text-white font-bellefair uppercase mb-4">
        {name}
      </h1>
      <p className="text-base lg:text-lg text-sea leading-[180%] font-barlow">
        {description}
      </p>
      <div
        className="w-full h-[1px] bg-white opacity-35 my-6 lg:my-10"
        role="Line"
      ></div>
      <div className="flex flex-col md:flex-row justify-center lg:justify-start text-white gap-6 md:gap-28 lg:gap-22">
        <div>
          <h3 className="text-label">avg. distance</h3>
          <p className="text-value">{distance}</p>
        </div>

        <div>
          <h3 className="text-label">est. travel time</h3>
          <p className="text-value">{travel}</p>
        </div>
      </div>
    </>
  );
}
