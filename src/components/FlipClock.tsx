"use client";

import { useEffect, useState } from "react";
import FlipDigit from "./FlipDigit";

export default function FlipClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Don't render anything until after hydration
  if (time === null) {
    return null;
  }

  const formatTime = (date: Date) => ({
    hours: date.getHours().toString().padStart(2, "0"),
    minutes: date.getMinutes().toString().padStart(2, "0"),
    seconds: date.getSeconds().toString().padStart(2, "0"),
  });

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 lg:gap-10 justify-center items-center sm:items-end text-center">
      <div>
        <div className="flex gap-1 sm:gap-2 md:gap-3">
          {[...hours].map((digit, i) => (
            <FlipDigit key={`h${i}`} digit={digit} />
          ))}
        </div>
        <div className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-semibold">Hours</div>
      </div>

      <div>
        <div className="flex gap-1 sm:gap-2 md:gap-3">
          {[...minutes].map((digit, i) => (
            <FlipDigit key={`m${i}`} digit={digit} />
          ))}
        </div>
        <div className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-semibold">Minutes</div>
      </div>

      <div>
        <div className="flex gap-1 sm:gap-2 md:gap-3">
          {[...seconds].map((digit, i) => (
            <FlipDigit key={`s${i}`} digit={digit} />
          ))}
        </div>
        <div className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-semibold">Seconds</div>
      </div>
    </div>
  );
}
