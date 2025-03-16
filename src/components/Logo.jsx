import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to={"/"}>
      <figure className="lg:pl-4 md:mx-4">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </figure>
    </Link>
  );
}
