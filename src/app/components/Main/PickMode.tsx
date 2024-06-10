import React from "react";
import ButtonGame from "./ButtonGame";

const PickMode = ({ updateMode }: { updateMode: Function }) => {
  return (
    <div className="flex-col items-center  justify-center align-middle text-3xl">
      Guess the bone!
      <ButtonGame updateMode={updateMode} mode={"classic"} />
      <ButtonGame updateMode={updateMode} mode={"picture"} />
    </div>
  );
};

export default PickMode;
