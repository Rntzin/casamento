import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import Countdown from "./_components/countdown";
import MarriageSection from "./_components/marriage-section";
import { Gift } from "./_components/gift";
import TimelineSection from "./_components/time-line";

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <Countdown />
      <Gift />
      <TimelineSection />
      <MarriageSection />
    </>
  );
}
