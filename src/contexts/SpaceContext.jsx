import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SpaceContext = createContext();

function SpaceProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [destinationId, setDestinationId] = useState(0);

  const [isFading, setIsFading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 30);
      setIsNavOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  function handleIsOpenNav() {
    setIsNavOpen(!isNavOpen);
  }

  const handleAnimateChange = (newId) => {
    setIsFading(true);
    setTimeout(() => {
      setDestinationId(newId);
      setIsFading(false);
    }, 300);
  };

  return (
    <SpaceContext.Provider
      value={{
        handleIsOpenNav,
        isNavOpen,
        isScrolled,
        isFading,
        handleAnimateChange,
        destinationId,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
}

function useSpace() {
  const context = useContext(SpaceContext);
  if (context === undefined)
    throw new Error("spaceContext must be used within a SpaceProvider");

  return context;
}

export { useSpace, SpaceProvider };
