import { useSpace } from "../../contexts/SpaceContext";
import { TechnologyContent } from "./TechnologyContent";

export function TechnologyBody() {
  const { techData, isFading } = useSpace();
  const { images } = techData;

  return (
    <main className="main-content lg:mx-10">
      <h2 className="text-base lg:text-[1.75rem] text-center md:text-left text-white tracking-[4px] uppercase font-barlow-condensed pb-4 md:pb-6">
        <span className="md:ml-10 font-bold tracking-[4.72px] opacity-35">
          03{" "}
        </span>{" "}
        space launch 101
      </h2>
      <div
        className={`flex justify-center items-center flex-col-reverse lg:flex-row  transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <TechnologyContent />
        <figure>
          <img
            src={images.portrait}
            className="hidden lg:block"
            alt="technology_image"
          />
          <img
            src={images.landscape}
            className="block lg:hidden pt-20 pb-10"
            alt="technology_image"
          />
        </figure>
      </div>
    </main>
  );
}
