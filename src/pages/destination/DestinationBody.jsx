import { useState } from "react";

import dataStore from "../../../data/data.json";
import { DestinationContent } from "./DestinationContent";
import { DestinationNav } from "./DestinationNav";

export function DestinationBody() {
  const [destinationId, setDestinationId] = useState(0);
  const destinationData = dataStore.destinations;
  const { name, images } = destinationData[destinationId];

  return (
    <main className="main-content">
      <h2 className="heading-text">
        <span className="highlight">01 </span> pick your destination
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
