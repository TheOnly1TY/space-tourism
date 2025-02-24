export function Homepage() {
  return (
    <div className="bg-[url(/assets/home/background-home-mobile.jpg)] p-[1.5rem]">
      <NavBar />
      <Main />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <Nav />
    </nav>
  );
}

function Logo() {
  return (
    <figure>
      <img src="/assets/shared/logo.svg" alt="logo" />;
    </figure>
  );
}
function Nav() {
  return (
    <div>
      <img src="/assets/shared/icon-hamburger.svg" />;
    </div>
  );
}

function Main() {
  return (
    <div>
      <HomeContent />
      <Button />
    </div>
  );
}
function HomeContent() {
  return (
    <div className="text-center">
      <p className="text-base text-[#D0D6F9] uppercase">
        So, you want to travel to
      </p>
      <h1 className="text-[80px] text-white uppercase">Space</h1>
      <p className="text-[15px] text-[#D0D6F9]">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
}
function Button() {
  return <button>explore</button>;
}
