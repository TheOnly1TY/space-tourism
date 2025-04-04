import { CTAButton } from "../components/CTAButton";
export function PageNotFound() {
  return (
    <section className="flex items-center flex-col px-6 md:px-10 min-h-screen bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)]  lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <figure>
        <img src="../assets/shared/404_error.png" alt="404_error" />;
      </figure>
      <figcaption className="flex items-center lg:gap-12 flex-col lg:flex-row text-center lg:text-left lg:mb-24">
        <div className="max-w-[28.125rem]" role="content">
          <h1 className="text-2xl md:text-[2.5rem] lg:text-[56px] text-white font-bellefair uppercase pb-4">
            Lost in space...
          </h1>
          <p className="text-base md:text-lg text-sea leading-[180%] font-barlow font-light">
            This page is lost in space! That means it is not where it should be.
            Let&apos;s take you back home so you don&apos;t get lost even more.
          </p>
        </div>
        <div aria-label="button parent">
          <CTAButton
            message="Take me home🚀"
            location="/"
            styles="my-12 lg:m-0"
          />
        </div>
      </figcaption>
    </section>
  );
}
