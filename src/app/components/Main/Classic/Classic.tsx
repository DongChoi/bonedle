"use client";

import React, { useEffect, useState } from "react";
import { boneList, boneData } from "@/app/data/bones";
import { Bone, BoneData, BoneKey } from "@/app/types";
import GuessForm from "./GuessForm";
import Guess from "./Guess";

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
    <div>
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
      {guesses.length > 0 && (
        <div className="flex space-x-2" id="details-row">
          <div id="detail-name" className="flex-1">
            <span>name</span>
          </div>
          <div id="detail-location" className="flex-1">
            <span>location</span>
          </div>
          <div id="detail-shape" className="flex-1">
            <span>shape</span>
          </div>
          <div id="detail-size" className="flex-1">
            <span>size</span>
          </div>
          <div id="detail-articulations" className="flex-1">
            <span>articulations</span>
          </div>
        </div>
      )}
      {bone &&
        guesses.map((guess, index) => (
          <Guess key={index} guessedBone={boneData[guess]} bone={bone} />
        ))}
    </div>
  );
};

export default Classic;
