"use client";

import React, { useEffect, useState } from "react";
import { boneList, boneData } from "@/app/data/bones";
import { Bone, BoneData } from "@/app/types";

const Classic = () => {
  const [guessedBones, setGuessedBones] = useState<string[]>([]);
  const [bone, setBone] = useState<Bone | null>(null);

  const randomizeBone = (): Bone => {
    const randomNumber: number = Math.floor(Math.random() * boneList.length);
    const randomBone: Bone = boneData[boneList[randomNumber]];
    return randomBone;
  };
  useEffect(() => {
    const pickBoneOnMount = () => {
      const randomBone = randomizeBone();
      setBone(randomBone);
      console.log(randomBone);
    };
    pickBoneOnMount();
  }, []);

  return <div>{JSON.stringify(bone)}</div>;
};

export default Classic;
