import { Nav } from "./Nav";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";

export function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleIsOpenNav() {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 30);
      setIsNavOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={`fixed lg:w-[52%] flex justify-between items-center lg:pt-8 p-[1.5rem] lg:mt-6  w-full z-[50] ${
        isScrolled && "bg-[#0b0f19] md:bg-transparent"
      }`}
    >
      <Logo />
      <Nav isNavOpen={isNavOpen} />
      <figure
        className=" md:hidden z-30 cursor-pointer"
        onClick={handleIsOpenNav}
      >
        {!isNavOpen ? (
          <img src="/assets/shared/icon-hamburger.svg" />
        ) : (
          <img src="/assets/shared/icon-close.svg" />
        )}
      </figure>
      <div className="hidden lg:flex flex-grow border-t border-white opacity-35 mx-10 z-10" />
    </nav>
  );
}
