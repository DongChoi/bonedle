import React from "react";

interface gameDescriptions {
  [key: string]: string;
}

const gameDescriptions: gameDescriptions = {
  classic: "Get clues on every try",
  picture: "Less blurry with each try",
};

const ButtonGame = ({
  updateMode,
  mode,
}: {
  updateMode: Function;
  mode: string;
}) => {
  const handleModeClick = (selectedMode: string) => {
    updateMode(selectedMode);
  };

  return (
    <div>
      <button className="flex-col text-left border-2 p-4 m-2 w-full rounded-tl-lg">
        <div className="" onClick={() => handleModeClick(mode)}>
          {mode.toUpperCase()}
        </div>
        <p className="text-sm"> {gameDescriptions[mode]}</p>
      </button>
    </div>
  );
};

export default ButtonGame;
