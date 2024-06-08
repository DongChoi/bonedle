import React from "react";

const PickMode = ({ updateMode }: { updateMode: Function }) => {
  const handleModeClick = (selectedMode: string) => {
    updateMode(selectedMode);
  };
  return (
    <div>
      Pick mode!
      <li onClick={() => handleModeClick("classic")}>Classic</li>
      <li onClick={() => handleModeClick("picture")}>Picture</li>
    </div>
  );
};

export default PickMode;
