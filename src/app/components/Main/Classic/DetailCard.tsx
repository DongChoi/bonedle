import React from "react";

const DetailCard = ({
  guessDetail,
  correctDetail,
  delay,
}: {
  guessDetail: string;
  correctDetail: string;
  delay: string;
}) => {
  const colorHint =
    guessDetail === correctDetail ? "bg-green-400" : "bg-red-400";
  const animationDelay = `animation-delay-${delay}`;
  return (
    <div className="group [perspective:1000px]">
      <div
        style={{ animationDelay: `${delay}s` }}
        className={`rounded-xl transition-all  transform-style-preserve-3d animate-flip `}
      >
        <div className={`h-20 w-full bg-transparent`}></div>
        <div
          className={`absolute inset-0 ${colorHint} [transform:rotateY(180deg)] [backface-visibility:hidden]`}
        >
          {guessDetail}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

//TLDR U CANNOT USE duration-${500}, you must use const durationg = `duration-$500}` and then plug in duration

// The most important implication of how Tailwind extracts class names is that it will only find classes that exist as complete unbroken strings in your source files.

// If you use string interpolation or concatenate partial class names together, Tailwind will not find them and therefore will not generate the corresponding CSS:

// Don’t construct class names dynamically

// <div class="text-{{ error ? 'red' : 'green' }}-600"></div>
// In the example above, the strings text-red-600 and text-green-600 do not exist, so Tailwind will not generate those classes. Instead, make sure any class names you’re using exist in full:

// Always use complete class names

// <div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
