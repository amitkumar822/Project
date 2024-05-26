import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="mt-20 px-20">
          {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
            return (
                // masker
              <div className=" w-fit flex items-center">
                {index === 1 && (<div className="w-[9vw] h-[5vw] bg-red-500 rounded-lg"></div>)}
                <h1
                className="uppercase text-8xl leading-[5.4vw] tracking-tighter font-semibold"
                key={index}
              >
                {item}
              </h1>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20">
            {["For public and private companies","From the first pitch to IPO"].map((item, index) => (
                <p key={index} className="text-md font-light tracking-tighter leading-none">{item}</p>
            ))}
                {/* Start */}
            <div className="flex items-center gap-5">
                <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md capitalize rounded-full">START THE PROJECT</div>
                <div className=" w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
                    <span className=" rotate-[45deg] cursor-pointer"><FaArrowUpLong /></span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
