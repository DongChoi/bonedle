import React from "react";

import Classic from "./Classic/Classic";
import BlurredPicture from "./BlurredPicture/BlurredPicture";
import PickMode from "./PickMode";
const Bonedle = ({
  mode,
  updateMode,
}: {
  mode: string;
  updateMode: Function;
}) => {
  return (
    <div>
      {mode === "picture" ? (
        <BlurredPicture />
      ) : mode === "classic" ? (
        <Classic />
      ) : (
        <PickMode updateMode={updateMode} />
      )}
    </div>
  );
};

export default Bonedle;
