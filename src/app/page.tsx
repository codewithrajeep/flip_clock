import FlipClock from "@/components/FlipClock";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300 flex flex-col items-center justify-center gap-10">
      <ModeToggle />
      <FlipClock />
    </main>
  );
}
