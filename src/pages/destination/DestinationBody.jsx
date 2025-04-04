import { useState } from "react";

import dataStore from "../../../data/data.json";
import { DestinationContent } from "./DestinationContent";
import { DestinationNav } from "./DestinationNav";

export function DestinationBody() {
  const [isFading, setIsFading] = useState(false);
  const [destinationId, setDestinationId] = useState(0);
  const destinationData = dataStore.destinations;
  const { name, images } = destinationData[destinationId];
  const handleDestinationChange = (newId) => {
    setIsFading(true);
    setTimeout(() => {
      setDestinationId(newId);
      setIsFading(false);
    }, 300);
  };
  return (
    <main className="main-content mx-6 md:mx-10">
      <h2 className="heading-text">
        <span className="highlight">01 </span> pick your destination
      </h2>
      <div
        className={`lg:flex lg:pt-20 lg:gap-20 transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
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
            DestinationChange={handleDestinationChange}
          />
          <DestinationContent
            destinationData={destinationData[destinationId]}
          />
        </div>
      </div>
    </main>
  );
}
