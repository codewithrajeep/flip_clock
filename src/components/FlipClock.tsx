"use client";

import { useEffect, useState } from "react";
import FlipDigit from "./FlipDigit";

export default function FlipClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => ({
    hours: date.getHours().toString().padStart(2, "0"),
    minutes: date.getMinutes().toString().padStart(2, "0"),
    seconds: date.getSeconds().toString().padStart(2, "0"),
  });

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="flex gap-6 justify-center items-end text-center">
      <div>
        <div className="flex gap-2">
          {[...hours].map((digit, i) => (
            <FlipDigit key={`h${i}`} digit={digit} />
          ))}
        </div>
        <div className="mt-2 text-lg font-semibold">Hours</div>
      </div>

      <div>
        <div className="flex gap-2">
          {[...minutes].map((digit, i) => (
            <FlipDigit key={`m${i}`} digit={digit} />
          ))}
        </div>
        <div className="mt-2 text-lg font-semibold">Minutes</div>
      </div>

      <div>
        <div className="flex gap-2">
          {[...seconds].map((digit, i) => (
            <FlipDigit key={`s${i}`} digit={digit} />
          ))}
        </div>
        <div className="mt-2 text-lg font-semibold">Seconds</div>
      </div>
    </div>
  );
}
