import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export function Homepage() {
  return (
    <div className="min-h-screen bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)]  lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-no-repeat bg-center bg-cover ">
      <NavBar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row lg:max-w-[69.375rem] mx-auto lg:px-[2rem] pt-35 pb-20 lg:pt-78 md:pb-30 md:pt-68 px-[1.5rem]">
      <HomeContent />
      <Button />
    </div>
  );
}
function HomeContent() {
  return (
    <div className="max-w-[31.25rem] md:max-w-[35.625rem] lg:max-w-[33.75rem] text-center lg:text-left">
      <p className="text-base md:text-[1.75rem] text-[#D0D6F9] tracking-[0.15em] uppercase font-barlow-condensed">
        So, you want to travel to
      </p>
      <h1 className="text-[5rem] md:text-[9rem] text-white uppercase font-bellefair">
        Space
      </h1>
      <p className="text-base md:text-lg text-[#D0D6F9] leading-[180%] font-barlow font-light">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
}
function Button() {
  return (
    <Link to="destination">
      <div className=" flex justify-center items-center mt-24 ">
        <button className="w-36 h-36 md:w-[17rem] md:h-[17rem] md:text-[2rem] text-lg text-[#0B0D17] font-bellefair uppercase bg-white rounded-full glow-button cursor-pointer z-[10]">
          explore
        </button>
      </div>
    </Link>
  );
}
