import { useState } from "react";

import dataStore from "../../../data/data.json";
import { NavBar } from "../../components/NavBar";
import { DestinationContent } from "./DestinationContent";
import { DestinationNav } from "./DestinationNav";

export function Destination() {
  return (
    <section className="min-h-screen bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)]  lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <Main />
    </section>
  );
}

function Main() {
  const [destinationId, setDestinationId] = useState(0);
  const destinationData = dataStore.destinations;
  const { name, images } = destinationData[destinationId];

  return (
    <main className="grid grid-rows-1 text-center lg:text-left lg:place-content-center pt-40 pb-20 lg:py-40 mx-6 md:mx-10">
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
        <div
          className="max-w-[28.125rem] md:max-w-[32.125rem] lg:max-w-[27.8125rem] mx-auto pt-8 md:pt-15"
          role="content"
        >
          <DestinationNav
            destinationData={destinationData}
            destinationId={destinationId}
            setDestinationId={setDestinationId}
          />
          <DestinationContent
            destinationData={destinationData[destinationId]}
          />
        </div>
      </div>
    </main>
  );
}
