import React from "react";

const DetailCard = ({
  guessDetail,
  correctDetail,
}: {
  guessDetail: string;
  correctDetail: string;
}) => {
  const colorHint =
    guessDetail === correctDetail ? "bg-green-400" : "bg-red-400";
  return <div className={`h-16 w-16 ${colorHint}`}>{guessDetail}</div>;
};

export default DetailCard;
