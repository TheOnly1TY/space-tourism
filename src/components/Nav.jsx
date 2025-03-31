import { NavLink } from "react-router-dom";

const navList = [
  { id: "00", label: "home", path: "/" },
  { id: "01", label: "destination", path: "/destination" },
  { id: "02", label: "crew", path: "/crew" },
  { id: "03", label: "technology", path: "/technology" },
];

// still have to fix width issue for tablet screen

export function Nav({ isNavOpen }) {
  return (
    <div className="md:fixed md:right-0 md:top-0 lg:top-auto">
      <ul
        className={`fixed flex flex-col top-0 pt-39 pl-10 right-0 bottom-0 h-full gap-8 z-20 md:static md:flex-row md:pt-0 md:justify-end md:items-center md:h-24 md:pr-[5rem] md:gap-11 lg:w-[736px] bg-white/5 backdrop-blur-[80px] text-base tracking-[2px] text-white font-barlow-condensed uppercase ${
          isNavOpen ? "left-1/3" : "left-full"
        } transition-all duration-200 ease-in-out`}
      >
        {navList.map((navItem, id) => (
          <>
            <li
              key={id}
              className=" text-base tracking-[2px] font-barlow-condensed uppercase inline-block"
            >
              <NavLink
                to={navItem.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <strong className="tracking-[2.7px]">{navItem.id}</strong>{" "}
                {navItem.label}
              </NavLink>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
