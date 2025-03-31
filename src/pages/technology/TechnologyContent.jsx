export function TechnologyContent({ technologyData }) {
  const { name, images, description } = technologyData;
  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <h3 className="text-white opacity-35 uppercase">the terminology…</h3>
        <h1 className="text-2xl md:text-[2.5rem] lg:text-[56px] text-white font-bellefair uppercase">
          {name}
        </h1>
        <p className="text-[0.9375rem] md:text-base lg:text-lg text-[#D0D6F9]">
          {description}
        </p>
      </div>
      <img src={images.portrait} />
    </div>
  );
}
