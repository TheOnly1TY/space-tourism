import { Nav } from "./Nav";
import { Logo } from "./Logo";
// import Line from "./Nav";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      {/* <Line /> */}
      <Nav />
    </nav>
  );
}
