import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cart from "./Cart";
import { topResData } from "../data/Top-Restaurant-chains-Data";

function TopResturant() {
  const [slide, setSlide] = React.useState(0);

  const nextSlide = () => {
    if (slide < 18) {
      setSlide(slide + 3);
    }
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };

  // console.log("Slide: ", slide);

  return (
    <div className="max-w-[1126px] mx-auto mt-12">
      <div className="flex my-3 items-center justify-between">
        <div className="md:text-[25px] font-bold ml-3 md:ml-0">
          Top restaurant chains in Bangalore
        </div>
        <div className="flex">
          <div
            onClick={prevSlide}
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7] dark:bg-[#fc8019] hover:bg-green-500 dark:hover:bg-green-500"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7] dark:bg-[#fc8019] hover:bg-green-500 dark:hover:bg-green-500"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden mt-6">
        {topResData.map((data) => (
          <div
            className="cursor-pointer duration-500 ml-6"
            style={{
              transform: `translateX(-${slide * 75}%)`,
            }}
            key={data.id}
          >
            <Cart width="md:w-[273px] w-[19rem]" {...data} />
          </div>
        ))}
      </div>
      <hr className=" mt-20 border-[1.5px] dark:border-[yellow]"/>
    </div>
  );
}

export default TopResturant;
