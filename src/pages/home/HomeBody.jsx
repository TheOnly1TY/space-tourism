import { CTAButton } from "../../components/CTAButton";
import { HomeContent } from "./HomeContent";

export function HomeBody() {
  return (
    <main className="flex justify-between items-center flex-col lg:flex-row lg:max-w-[69.375rem] mx-auto lg:px-[2rem] pt-35 pb-20 lg:pt-78 md:pb-30 md:pt-68">
      <HomeContent />
      <CTAButton message="explore" location="destination" styles="mt-24" />
    </main>
  );
}
