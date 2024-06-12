import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-center bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] delay-1000">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                height={500}
                width={500}
                alt="test image"
                src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              />
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                yes lets go here we go
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
