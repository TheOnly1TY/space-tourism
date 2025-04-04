import { NavBar } from "../../components/NavBar";
import { HomeBody } from "./HomeBody";

export function Homepage() {
  return (
    <section className="min-h-screen bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)]  lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <HomeBody />
    </section>
  );
}
