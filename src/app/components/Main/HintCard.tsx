"use client";

import React, { useState } from "react";

const HintCard = ({
  hint,
  NoOfGuesses,
  congratulate,
}: {
  hint: string[];
  NoOfGuesses: number;
  congratulate: Boolean;
}) => {
  const [hintActive, setHintActive] = useState<Boolean>(false);
  const handleRevealHintButtonClick = () => {
    setHintActive(true);
  };
  return (
    <div
      className={`flex flex-col w-2/3 rounded-t-lg rounded-br-lg border-2 p-4 m-2 ${
        NoOfGuesses >= 5
          ? "border-amber-500 text-amber-500"
          : "border-slate-700"
      } `}
    >
      <button
        onClick={
          NoOfGuesses >= 5 && hintActive === false
            ? handleRevealHintButtonClick
            : undefined
        }
        className={` text-left w-full ${
          NoOfGuesses >= 5
            ? "border-amber-500 text-amber-500"
            : "border-slate-700"
        } `}
      >
        Hint!
      </button>
      {(hintActive || congratulate) && (
        <p className="text-sm"> {hint.join(". ")}</p>
      )}
    </div>
  );
};

export default HintCard;
