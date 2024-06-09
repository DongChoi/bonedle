import React from "react";

const DetailCardArr = ({
  guessDetail,
  correctDetail,
}: {
  guessDetail: string[];
  correctDetail: string[];
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
    <div className={`h-16 w-16 ${colorHint}`}>
      {JSON.stringify(guessDetail)}
    </div>
  );
};

export default DetailCardArr;
