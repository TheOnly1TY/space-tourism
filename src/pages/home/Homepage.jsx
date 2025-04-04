import { NavBar } from "../../components/NavBar";
import { HomeBody } from "./HomeBody";

export function Homepage() {
  return (
    <section className="min-h-screen bg-[url(/home/background-home-mobile.jpg)] md:bg-[url(/home/background-home-tablet.jpg)]  lg:bg-[url(/home/background-home-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <NavBar />
      <HomeBody />
    </section>
  );
}
