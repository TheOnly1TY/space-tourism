import { Nav } from "./Nav";
import { Logo } from "./Logo";
import { useSpace } from "../contexts/SpaceContext";

export function NavBar() {
  const { isNavOpen, handleIsOpenNav, isScrolled } = useSpace();
  return (
    <nav
      className={`fixed lg:w-[52%] flex justify-between items-center lg:pt-8 p-[1.5rem] lg:mt-6  w-full z-[50] ${
        isScrolled && "bg-[#0b0f19] md:bg-transparent"
      } `}
    >
      <Logo />
      <Nav isNavOpen={isNavOpen} />
      <figure
        className="md:hidden z-30 cursor-pointer"
        onClick={handleIsOpenNav}
      >
        {!isNavOpen ? (
          <img src="shared/icon-hamburger.svg" />
        ) : (
          <img src="shared/icon-close.svg" />
        )}
      </figure>
      <div className="hidden lg:flex flex-grow border-t border-white opacity-35 mx-10 z-10" />
    </nav>
  );
}
