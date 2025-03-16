// import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";

export function Destination({ dataStore }) {
  const destinationData = dataStore.destinations;
  return (
    <div className="min-h-screen bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)]  lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <Main destinationData={destinationData} />
    </div>
  );
}

function Main({ destinationData }) {
  const { name, images, description, distance, travel } = destinationData[0];
  return (
    <section className="grid grid-rows-1 text-center lg:text-left lg:place-content-center pt-40 pb-20 lg:py-40 mx-6 md:mx-10">
      <h2 className="text-base lg:text-[1.75rem] text-center md:text-left text-white tracking-[4px] uppercase font-barlow-condensed pb-4 md:pb-6">
        <span className="font-bold tracking-[4.72px] opacity-35">01 </span> pick
        your destination
      </h2>
      <div className="lg:flex lg:pt-20 lg:gap-20">
        <figure>
          <img
            src={images.png}
            className="w-[9.375rem] md:w-[18.75rem] mx-auto lg:w-full rotate-animate"
            alt={`${name}_img`}
          />
        </figure>
        <aside className="max-w-[28.125rem] md:max-w-[32.125rem] lg:max-w-[27.8125rem] mx-auto pt-8 md:pt-15">
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-10 gap-7">
            {destinationData.map((data) => (
              <h3
                className="text-lg md:text-base text-sea font-barlow-condensed tracking-[2px] uppercase cursor-pointer"
                key={data.id}
              >
                {data.name}
              </h3>
            ))}
          </div>
          <h1 className="text-[5rem] lg:text-8xl text-white font-bellefair uppercase mb-4">
            {name}
          </h1>
          <p className="text-base lg:text-lg text-sea leading-[180%] font-barlow">
            {description}
          </p>

          <div className="w-full h-[1px] bg-white opacity-35 my-6 lg:my-10"></div>

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
        </aside>
      </div>
    </section>
  );
}
