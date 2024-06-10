"use client";

import React, { useEffect, useState } from "react";
import { boneList, boneData } from "@/app/data/bones";
import { Bone, BoneData, BoneKey } from "@/app/types";
import GuessForm from "./GuessForm";
import Guess from "./Guess";
import FemurFall from "../FemurFall";

const Classic = () => {
  const [guesses, setGuesses] = useState<BoneKey[]>([]);
  const [bone, setBone] = useState<Bone | null>(null);
  const [Hint, setHint] = useState<Boolean>(false);

  const randomizeBone = (): Bone => {
    const randomNumber: number = Math.floor(Math.random() * boneList.length);
    const randomBone: Bone = boneData[boneList[randomNumber]];
    return randomBone;
  };

  const showHint = () => {
    setHint(true);
  };

  const handleGuessSubmit = (guessedBone: keyof BoneData): void => {
    if (!guesses.includes(guessedBone)) {
      setGuesses([guessedBone, ...guesses]);
    }
    if (bone && guessedBone === bone.name) {
      console.log("yay! confetti animation");
    }
  };
  useEffect(() => {
    const pickBoneOnMount = () => {
      const randomBone = randomizeBone();
      setBone(randomBone);
    };
    pickBoneOnMount();
  }, []);

  return (
    <div className="flex flex-col  items-center">
      <button
        className={`p-2 rounded-md w-fit border-2 ${
          guesses.length >= 5
            ? "border-amber-500 text-amber-500"
            : "border-slate-700"
        } `}
        onClick={guesses.length >= 5 ? showHint : undefined}
      >
        Hint!
      </button>
      {Hint && bone && JSON.stringify(bone.other)}
      <GuessForm handleGuessSubmit={handleGuessSubmit} guesses={guesses} />
      {/* question: is it better to map through the guesses here? or should i pass down all of the guesses and do it there? */}
      {bone && guesses.length > 0 && (
        <div className="flex flex-col">
          <div className="flex space-x-10 text-2xl" id="details-label-row">
            <div id="detail-label-name" className="">
              <span>name</span>
            </div>
            <div id="detail-label-location" className="">
              <span>location</span>
            </div>
            <div id="detail-label-shape" className="">
              <span>shape</span>
            </div>
            <div id="detail-label-size" className="">
              <span>size</span>
            </div>
            <div id="detail-label-articulations" className="">
              <span>articulations</span>
            </div>
          </div>
          {guesses.map((guess, index) => (
            <Guess key={index} guessedBone={boneData[guess]} bone={bone} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Classic;
