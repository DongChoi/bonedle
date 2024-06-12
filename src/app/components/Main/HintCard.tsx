import React from "react";

const HintCard = ({
  showHint,
  NoOfGuesses,
}: {
  showHint: Function;
  NoOfGuesses: number;
}) => {
  const handleShowHintClick = () => {};

  return (
    <div className="w-2/3">
      <button
        onClick={NoOfGuesses >= 5 ? handleShowHintClick : undefined}
        className={`flex-col text-left border-2 p-4 m-2 w-full rounded-tl-lg ${
          NoOfGuesses >= 5
            ? "border-amber-500 text-amber-500"
            : "border-slate-700"
        } `}
      >
        {/* <div className="" onClick={() => handleModeClick(mode)}>
          {mode.toUpperCase()}
        </div>

        <p className="text-sm"> {gameDescriptions[mode]}</p> */}
        Hint!
      </button>
    </div>
  );
};

export default HintCard;
