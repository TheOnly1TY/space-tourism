import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export function Homepage() {
  return (
    <div className="min-h-screen bg-[url(/assets/home/background-home-mobile.jpg)] bg-no-repeat bg-center bg-cover p-[1.5rem]">
      <NavBar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div>
      <HomeContent />
      <Button />
    </div>
  );
}
function HomeContent() {
  return (
    <div className="text-center mt-5">
      <p className="text-base text-[#D0D6F9] tracking-[0.15em] uppercase font-barlow-condensed">
        So, you want to travel to
      </p>
      <h1 className="text-[80px] text-white uppercase font-bellefair m-1">
        Space
      </h1>
      <p className="text-base text-[#D0D6F9] leading-[180%] font-barlow font-light">
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
      <div className="flex justify-center items-center mt-24 ">
        <button className=" w-36 h-36 bg-white rounded-full text-lg text-[#0B0D17] font-bellefair uppercase glow-button">
          explore
        </button>
      </div>
    </Link>
  );
}
