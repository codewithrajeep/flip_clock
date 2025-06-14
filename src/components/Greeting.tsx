"use client";

import { useEffect, useState } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning 🌄");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon 🌞");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good Evening 🌆");
      } else {
        setGreeting("Good Night 🌆");
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Don't render anything until after hydration
  if (greeting === null) {
    return null;
  }

  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
      Hey&#44; {greeting}
    </h1>
  );
}
