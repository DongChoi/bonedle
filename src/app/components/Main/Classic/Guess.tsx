import { Bone, BoneData } from "@/app/types";
import React from "react";
import DetailCard from "./DetailCard";
import DetailCardArr from "./DetailCardArr";

const Guess = ({ guessedBone, bone }: { guessedBone: Bone; bone: Bone }) => {
  //logic for orange, red, green...

  // const exampleBone = {
  //   femur: {
  //     location: "Lower Limb",
  //     size: "48-53 cm",
  //     shape: ["Long"]
  //     articulations: ["head", "distalCondyles"],
  //     name: "femur",
  //   },
  // };

  const correctBoneName = bone.name;
  const correctBoneLocation = bone.location;
  const correctBoneShape = bone.shape;
  const correctBoneArticulation = bone.articulations;
  const correctBoneSize = bone.size;

  const guessedBoneName = guessedBone.name;
  const guessedBoneLocation = guessedBone.location;
  const guessedBoneShape = guessedBone.shape;
  const guessedBoneArticulation = guessedBone.articulations;
  const guessedBoneSize = guessedBone.size;

  return (
    <div className="flex py-2 space-x-2 w-full" id="guess-row">
      <div id="guess-name" className="flex-grow w-1/5">
        <DetailCard
          guessDetail={guessedBoneName}
          correctDetail={correctBoneName}
          delay={"0"}
          key={guessedBoneName + "0"}
        />
      </div>
      <div id="guess-location" className="flex-grow w-1/5">
        <DetailCard
          guessDetail={guessedBoneLocation}
          correctDetail={correctBoneLocation}
          delay={"1"}
          key={guessedBoneName + "1"}
        />
      </div>
      <div id="guess-shape" className="flex-grow  w-1/5">
        <DetailCardArr
          guessDetail={guessedBoneShape}
          correctDetail={correctBoneShape}
          delay={"2"}
          key={guessedBoneName + "2"}
        />
      </div>

      <div id="guess-size" className="flex-grow w-1/5">
        <DetailCard
          guessDetail={"In Dev"}
          correctDetail={"In Dev"}
          delay={"3"}
          key={guessedBoneName + "3"}
        />
      </div>
      <div id="guess-articulations" className="flex-grow w-1/5">
        <DetailCardArr
          guessDetail={guessedBoneArticulation}
          correctDetail={correctBoneArticulation}
          delay={"4"}
          key={guessedBoneName + "4"}
        />
      </div>
    </div>
  );
};

export default Guess;
