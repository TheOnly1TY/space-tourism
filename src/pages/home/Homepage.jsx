import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { HomeContent } from "./HomeContent";

export function Homepage() {
  return (
    <section className="min-h-screen bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)]  lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <Main />
    </section>
  );
}

function Main() {
  return (
    <main className="flex justify-between items-center flex-col lg:flex-row lg:max-w-[69.375rem] mx-auto lg:px-[2rem] pt-35 pb-20 lg:pt-78 md:pb-30 md:pt-68">
      <HomeContent />
      <ExploreButton />
    </main>
  );
}
function ExploreButton() {
  return (
    <Link to="destination">
      <button
        className="w-36 h-36 md:w-[17rem] md:h-[17rem] md:text-[2rem] text-lg text-[#0B0D17] font-bellefair uppercase bg-white rounded-full mt-24 glow-button cursor-pointer z-[10]"
        aria-label="Explore Space"
      >
        explore
      </button>
    </Link>
  );
}
