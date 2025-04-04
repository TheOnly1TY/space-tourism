import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dataStore from "../../data/data.json";

const SpaceContext = createContext();

function SpaceProvider({ children }) {
  const [destinationId, setDestinationId] = useState(0);
  const [curCrewData, setCurCrewData] = useState(0);
  const [curTechData, setCurTechData] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const destinationData = dataStore.destinations;
  const currentDestinationData = destinationData[destinationId];
  const crewData = dataStore.crew;
  const technologyData = dataStore.technology;
  const techData = technologyData[curTechData];

  const location = useLocation();

  // closing the nav after routing to a new page
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

  const handleDestinationNav = (index) => {
    handleAnimateChange(index, setDestinationId);
  };

  const handleCrewNav = (index) => {
    handleAnimateChange(index, setCurCrewData);
  };

  const handleTechnologyNav = (index) => {
    handleAnimateChange(index, setCurTechData);
  };

  const handleAnimateChange = (newId, setterFn) => {
    setIsFading(true);
    setTimeout(() => {
      setterFn(newId);
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
        destinationId,
        destinationData,
        currentDestinationData,
        crewData,
        curCrewData,
        curTechData,
        technologyData,
        techData,
        handleDestinationNav,
        handleCrewNav,
        handleTechnologyNav,
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
