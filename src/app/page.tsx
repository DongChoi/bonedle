"use client";

import Image from "next/image";
import Bonedle from "./components/Main/Bonedle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<string>("");

  // useEffect(() => {
  //     const select = () => {
  //       setController((prevState) => {
  //         const newPointer = prevState.piPointer + 1;
  //         if (newPointer >= 48002) {
  //           return prevState; // Stop incrementing if the limit is reached
  //         }
  //         return {
  //           ...prevState,
  //           piPointer: newPointer,
  //         };
  //       });
  //     };

  //     if (audioRef.current) {
  //       console.log("Setting up event listener");
  //       audioRef.current.addEventListener("ended", handleAudioEnded);
  //     }

  //     return () => {
  //       if (audioRef.current) {
  //         audioRef.current.removeEventListener("ended", handleAudioEnded);
  //       }
  //     };
  //   }, []);

  const updateMode = (selectedMode: string) => {
    setMode(selectedMode);
  };

  return (
    <div className="">
      <Nav updateMode={updateMode} />
      <Bonedle mode={mode} updateMode={updateMode} />
      <Footer />
    </div>
  );
}
