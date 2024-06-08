import React from "react";

const PickMode = ({ updateMode }: { updateMode: Function }) => {
  const handleModeClick = (selectedMode: string) => {
    updateMode(selectedMode);
  };
  return (
    <div>
      Pick mode!
      <li>
        {" "}
        <button onClick={() => handleModeClick("classic")}>Classic </button>
      </li>
      <li>
        {" "}
        <button onClick={() => handleModeClick("picture")}>Picture </button>
      </li>
    </div>
  );
};

export default PickMode;
