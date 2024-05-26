import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProfileStatusAnimation() {
  const percentage = 60; // Assuming user has completed 70% of their profile

  // Function to determine color based on percentage
  const getColor = (percentage) => {
    const red = Math.floor((100 - percentage) * 2.55);
    const green = Math.floor(percentage * 2.55);
    return `rgb(${red}, ${green}, 0)`;
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
        <h1 className="text-4xl mb-8">Profile Completion</h1>
        <div className="w-48 h-48">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: getColor(percentage),
              trailColor: "#d6d6d6",
            })}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileStatusAnimation;
