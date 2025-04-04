import { useSpace } from "../../contexts/SpaceContext";

import { DestinationContent } from "./DestinationContent";
import { DestinationNav } from "./DestinationNav";

export function DestinationBody() {
  const { isFading, currentDestinationData } = useSpace();
  const { name, images } = currentDestinationData;

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
          <DestinationNav />
          <DestinationContent />
        </div>
      </div>
    </main>
  );
}
