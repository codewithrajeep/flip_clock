import FlipClock from "@/components/FlipClock";
import { ModeToggle } from "@/components/ModeToggle";
import Greeting from "@/components/Greeting";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8">
      <ModeToggle />
      <Greeting />
      <FlipClock />
    </main>
  );
}
