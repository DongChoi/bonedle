import React from "react";

const ResetGameButton = ({ resetGameState }: { resetGameState: Function }) => {
  const handleButtonClick = () => {
    resetGameState();
  };

  return (
    <div
      className="flex flex-col w-2/3 rounded-t-lg rounded-br-lg border-2 p-4 m-2
 border-amber-500 text-amber-500"
    >
      <button
        onClick={handleButtonClick}
        className="text-left w-full border-amber-500 text-amber-500"
      >
        Play again?
      </button>
    </div>
  );
};

export default ResetGameButton;
