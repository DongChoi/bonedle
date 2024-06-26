import React from "react";

const DetailCardArr = ({
  guessDetail,
  correctDetail,
  delay,
}: {
  guessDetail: string[];
  correctDetail: string[];
  delay: string;
}) => {
  const guessArray = guessDetail.slice().sort();
  const correctArray = correctDetail.slice().sort();

  let colorHint = "bg-red-400";

  if (guessArray.every((value, index) => value === correctArray[index])) {
    colorHint = "bg-green-400";
  } else if (guessArray.some((value) => correctArray.includes(value))) {
    colorHint = "bg-amber-400";
  }

  return (
    <div className="group [perspective:1000px]">
      <div
        style={{ animationDelay: `${delay}s` }}
        className={`transition-all transform-style-preserve-3d animate-flip`}
      >
        <div className={`h-20 w-full bg-transparent`}></div>
        <div
          className={`flex justify-center items-center absolute border-2 border-slate-950 text-sm inset-0 ${colorHint} rounded [transform:rotateY(180deg)] [backface-visibility:hidden]`}
        >
          {guessArray.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default DetailCardArr;
