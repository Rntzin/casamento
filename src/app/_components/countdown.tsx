"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2024-12-16T16:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8 mb-16 px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold font-serif mb-8 relative">
        <span className="relative">FALTAM PARA O GRANDE DIA</span>
        <hr className="border-t border-gray-300 my-4" />
      </h1>
      <div className="text-2xl sm:text-2xl md:text-4xl flex flex-wrap justify-center gap-8 text-center font-semibold mb-12">
        <div className="flex flex-col items-center">
          <p className="mb-2">{timeLeft.days}</p>
          <span className="text-sm">Dias</span>
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl">:</span>{" "}
        <div className="flex flex-col items-center">
          <p className="mb-2">{timeLeft.hours}</p>
          <span className="text-sm">Horas</span>
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl">:</span>
        <div className="flex flex-col items-center">
          <p className="mb-2">{timeLeft.minutes}</p>
          <span className="text-sm">Minutos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
