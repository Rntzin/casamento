import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import Countdown from "./_components/countdown";
import MarriageSection from "./_components/marriage-section";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <Countdown />
      <MarriageSection />
    </>
  );
}
