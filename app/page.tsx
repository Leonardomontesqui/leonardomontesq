import { Moon, Sun } from "lucide-react";
import Experience from "../components/Experience";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <main className="h-fit md:h-full w-dvh bg-black flex flex-col p-4 items-center gap-6">
      {/* <nav className="sticky top-0 z-50 flex bg-[#121212] py-1.5 px-2 w-fit gap-3 rounded-2xl">
        <Sun size={20} />
        <Moon size={20} />
      </nav> */}

      <Profile />
      <Experience />
      <p className="text-[#c5c5c5]">Thanks thats all!</p>
    </main>
  );
}
