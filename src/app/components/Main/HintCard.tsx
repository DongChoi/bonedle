import React from "react";

const HintCard = () => {
  return (
    <div>
      <button className="flex-col text-left border-2 p-4 m-2 w-full rounded-tl-lg">
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
