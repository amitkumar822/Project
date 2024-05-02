import React, { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div className="fixed bottom-10 right-10">
        {isVisible && (
          <div 
            onClick={goToBtn} 
            
          >
            {/* GoToTop */}
            <FaCircleArrowUp className="text-[32px] cursor-pointer dark:text-orange-400 hover:text-green-500 dark:bg-white rounded-[25px] bg-[#242222] text-[#e2e2e7] "/>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoToTop;
