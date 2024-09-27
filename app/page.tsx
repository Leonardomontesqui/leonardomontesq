import { Moon, Sun } from "lucide-react";
import Experience from "../components/(Experience)/Experience";
import Profile from "../components/(Profile)/Profile";
import MusicItem from "@/components/molecules/MusicItem";

export default function Home() {
  return (
    <main className="h-fit md:h-full w-dvh bg-black flex flex-col p-4 items-center gap-6">
      {/* <nav className="sticky top-0 z-50 flex bg-[#121212] py-1.5 px-2 w-fit gap-3 rounded-2xl">
        <Sun size={20} />
        <Moon size={20} />
      </nav> */}

      <Profile />
      <Experience />
      <div className="flex w-full max-w-[592px] bg-[#121212] p-4 gap-4 rounded-2xl flex flex-col">
        <h1 className="text-base font-medium text-[#c5c5c5]">5 songs</h1>
        <ol className="gap-1">
          <MusicItem
            text={"Sin Sentimiento - Grupo Niche"}
            link={"https://www.youtube.com/watch?v=OwbQMh7ItuU"}
            type={"salsa"}
          />
          <MusicItem
            text={"Denver - Jack Harlow"}
            link={"https://youtu.be/i4o57yjyTMc?si=ZHOSQkRypCRU9W_h"}
            type={"hiphop"}
          />
          <MusicItem
            text={"Rosas - La Oreja de Van Goh"}
            link={"https://www.youtube.com/watch?v=enup62u1LEk"}
            type={"pop"}
          />
          <MusicItem
            text={"Nueve y Quince - Aventura"}
            link={"https://www.youtube.com/watch?v=YxwjoBYmlHQ"}
            type={"bachata"}
          />
          <MusicItem
            text={"You Got Me - The Roots"}
            link={"https://www.youtube.com/watch?v=IKc4QLiCG8c"}
            type={"hiphop"}
          />
        </ol>
      </div>
      <p className="text-[#c5c5c5]">Thanks thats all!</p>
    </main>
  );
}
