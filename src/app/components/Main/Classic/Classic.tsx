"use client";

import React, { useEffect, useState } from "react";
import { boneList, boneData } from "@/app/data/bones";
import { Bone, BoneData, BoneKey } from "@/app/types";
import GuessForm from "./GuessForm";
import Guess from "./Guess";
import FemurFall from "../FemurFall";
import HintCard from "../HintCard";
import ResetGameButton from "../ResetGameButton";

const Classic = () => {
  const [guesses, setGuesses] = useState<BoneKey[]>([]);
  const [bone, setBone] = useState<Bone | null>(null);
  const [gameActiveStatus, setGameActiveStatus] = useState<Boolean>(false);
  const [congratulate, setCongratulate] = useState<Boolean>(false);
  const resetGameState = (): void => {
    const randomBone = randomizeBone();
    setBone(randomBone);
    setGameActiveStatus(true);
    setGuesses([]);
    setCongratulate(false);
  };
  const randomizeBone = (): Bone => {
    const randomNumber: number = Math.floor(Math.random() * boneList.length);
    const randomBone: Bone = boneData[boneList[randomNumber]];
    return randomBone;
  };

  const handleGuessSubmit = (guessedBone: keyof BoneData): void => {
    if (!guesses.includes(guessedBone)) {
      setGuesses([guessedBone, ...guesses]);
    }
    if (bone && guessedBone === bone.name) {
      setGameActiveStatus(false);
      setCongratulate(true);
      console.log("yay! confetti animation");
    }
  };
  useEffect(() => {
    const pickBoneOnMount = () => {
      const randomBone = randomizeBone();
      setBone(randomBone);
      setGameActiveStatus(true);
    };
    pickBoneOnMount();
  }, []);

  return (
    <div className="flex flex-col  items-center">
      {bone && (
        <HintCard
          hint={bone.other}
          NoOfGuesses={guesses.length}
          congratulate={congratulate}
        />
      )}

      {gameActiveStatus ? (
        <GuessForm handleGuessSubmit={handleGuessSubmit} guesses={guesses} />
      ) : (
        <ResetGameButton resetGameState={resetGameState} />
      )}
      {/* question: is it better to map through the guesses here? or should i pass down all of the guesses and do it there? */}
      {bone && guesses.length > 0 && (
        <div className="flex flex-col">
          <div
            className="flex text-slate-300 text-center mx-auto space-x-10 text-2xl border-b-2 border-slate-300"
            id="details-label-row"
          >
            <div id="detail-label-name" className="w-1/5">
              <span>name</span>
            </div>
            <div id="detail-label-location" className="w-1/5">
              <span>location</span>
            </div>
            <div id="detail-label-shape" className="w-1/5">
              <span>shape</span>
            </div>
            <div id="detail-label-size" className="w-1/5">
              <span>size</span>
            </div>
            <div id="detail-label-articulations" className="w-1/5">
              <span>articulations</span>
            </div>
          </div>
          {/* I HAVE TO THANK ISAAC FROM PHILZ. using index was not enough, 
          I had to use the bone name and it fixed the problem! 
          Problem: when the guesses were being updated, the animation retriggered 
          on the bottom line.
          This happened because react did not know what state was being updated.
          Solution: with an unique key, such as the bone name which does not repeat,
          react new which element was being updated! THANK YOU ISAAC! :). 
          He works at "Xperi"
          */}
          {guesses.map((guess, index) => (
            <Guess
              key={boneData[guess].name}
              guessedBone={boneData[guess]}
              bone={bone}
            />
          ))}
        </div>
      )}
      {congratulate && <FemurFall />}
    </div>
  );
};

export default Classic;
