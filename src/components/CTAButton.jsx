import { Link } from "react-router-dom";
export function CTAButton({ message, location, styles }) {
  return (
    <Link to={`${location}`}>
      <button
        className={` w-36 p-2 h-36 md:w-[17rem] md:h-[17rem] md:text-[2rem] text-lg text-[#0B0D17] font-bellefair uppercase bg-white rounded-full cursor-pointer z-[10] transition-all duration-100 hover:outline-[88px] hover:outline-white/10 active:outline-[88px] active:outline-white/10 ${styles}`}
      >
        {`${message}`}
      </button>
    </Link>
  );
}
