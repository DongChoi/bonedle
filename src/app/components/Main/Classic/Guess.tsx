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
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2" id="guess-row">
        <div id="guess-name" className="flex-1">
          <DetailCard
            guessDetail={guessedBoneName}
            correctDetail={correctBoneName}
          />
        </div>
        <div id="guess-location" className="flex-1 py-2">
          <DetailCard
            guessDetail={guessedBoneLocation}
            correctDetail={correctBoneLocation}
          />
        </div>
        <div id="guess-shape" className="flex-1">
          <DetailCardArr
            guessDetail={guessedBoneShape}
            correctDetail={correctBoneShape}
          />
        </div>
        <div id="guess-size" className="flex-1">
          <DetailCard guessDetail={"array"} correctDetail={"wrong"} />
        </div>
        <div id="guess-articulations" className="flex-1">
          <DetailCardArr
            guessDetail={guessedBoneArticulation}
            correctDetail={correctBoneArticulation}
          />
        </div>
      </div>
    </div>
  );
};

export default Guess;
