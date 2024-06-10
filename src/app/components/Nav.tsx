import Image from "next/image";
import React from "react";

const Nav = ({ updateMode }: { updateMode: Function }) => {
  return (
    <div className="flex justify-center items-center h-32 text-slate-300">
      <button onClick={() => updateMode("")}>
        <Image
          src="/bonedle1.png"
          layout="intrinsic"
          width={500} // Set your desired width
          height={500} // Set your desired height
          objectFit="contain" // Ensures the image keeps its aspect ratio
          alt="Picture of logo"
          // className="h-full w-auto" // Ensure the image fills the parent div
        />
      </button>
    </div>
  );
};

export default Nav;
