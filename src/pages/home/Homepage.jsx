import { NavBar } from "../../components/NavBar";
import { HomeContent } from "./HomeContent";
import { CTAButton } from "../../components/CTAButton";

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
      <CTAButton message="explore" location="destination" styles="mt-24" />
    </main>
  );
}
