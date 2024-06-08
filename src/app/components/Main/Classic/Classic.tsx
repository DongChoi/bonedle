"use client";

import React, { useEffect, useState } from "react";
import { boneList, boneData } from "@/app/data/bones";
import { Bone, BoneData } from "@/app/types";
import GuessForm from "./GuessForm";
import Guess from "./Guess";

const Classic = () => {
  const [guessedBones, setGuessedBones] = useState<Bone[]>([]);
  const [bone, setBone] = useState<Bone | null>(null);

  const randomizeBone = (): Bone => {
    const randomNumber: number = Math.floor(Math.random() * boneList.length);
    const randomBone: Bone = boneData[boneList[randomNumber]];
    return randomBone;
  };

  const handleGuessSubmit = (guessedBone: keyof BoneData): void => {
    setGuessedBones((prevGuesses) => [boneData[guessedBone], ...prevGuesses]);
    if (bone && guessedBone === bone.name) {
      console.log("yay! confetti animation");
    }
  };
  useEffect(() => {
    const pickBoneOnMount = () => {
      const randomBone = randomizeBone();
      setBone(randomBone);
      console.log(randomBone);
    };
    pickBoneOnMount();
  }, []);

  return (
    <div>
      {JSON.stringify(bone)}
      <GuessForm handleGuessSubmit={handleGuessSubmit} />
      {/* question: is it better to map through the guesses here? or should i pass down all of the guesses and do it there? */}
      {bone &&
        guessedBones &&
        guessedBones.map((guessedBone, index) => (
          <Guess key={index} guessedBone={guessedBone} bone={bone} />
        ))}
    </div>
  );
};

export default Classic;
