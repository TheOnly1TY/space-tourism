import dataStore from "../../../data/data.json";

import { NavBar } from "../../components/NavBar";

export function Crew() {
  return (
    <div className="min-h-screen bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-tablet.jpg)]  lg:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <Main />
    </div>
  );
}

function Main() {
  const crewData = dataStore.crew;
  const { name, bio, images, role } = crewData[0];

  return (
    <main className="grid grid-rows-1 text-center lg:text-left lg:place-content-center pt-40 pb-20 lg:py-40 mx-6 md:mx-10">
      <h2 className="text-base lg:text-[1.75rem] text-center md:text-left text-white tracking-[4px] uppercase font-barlow-condensed pb-4 md:pb-6">
        <span className="font-bold tracking-[4.72px] opacity-35">02 </span> meet
        your crew
      </h2>
      <section className="flex justify-center items-center flex-col md:flex-row lg:gap-10">
        <div className="max-w-[539px]" role="content">
          <h3 className="text-lg md:text-[2rem] text-white opacity-35 uppercase">
            {role}
          </h3>
          <h1 className="text-2xl md:text-[56px] text-white font-bellefair uppercase">
            {name}
          </h1>
          <p className="text-[15px] md:text-lg text-[#D0D6F9] leading-[180%]">
            {bio}
          </p>
        </div>
        <figure>
          <img src={images.png} alt="crew profile" />
        </figure>
      </section>
    </main>
  );
}

// function CrewNav() {
//   return <div className="w-2.5 h-2.5 bg-[#979797] rounded-full"></div>;
// }
