import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import Countdown from "./_components/countdown";
import MarriageSection from "./_components/marriage-section";
import { Gift } from "./_components/gift";
import TimelineSection from "./_components/time-line";
import { Header } from "./_components/header";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <Header /> */}
      <IntroSection />
      <AboutSection />
      <Countdown />
      <Gift />
      <TimelineSection />
      <MarriageSection />
    </main>
  );
}
