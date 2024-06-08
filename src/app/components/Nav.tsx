import React from "react";

const Nav = ({ updateMode }: { updateMode: Function }) => {
  return (
    <div className="flex justify-center items-center h-16 bg-slate-900 p-4 text-slate-300">
      <button onClick={() => updateMode("")}>Bondedle! </button>
    </div>
  );
};

export default Nav;
