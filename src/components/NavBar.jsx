import { Nav } from "./Nav";
import { Logo } from "./Logo";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <Nav />
    </nav>
  );
}
