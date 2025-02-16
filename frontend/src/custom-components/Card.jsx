import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const startDifference = new Date(startTime) - now;
    const endDifference = new Date(endTime) - now;
    let timeLeft = {};

    if (startDifference > 0) {
      timeLeft = {
        type: "Starts In:",
        days: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((startDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((startDifference / 1000 / 60) % 60),
        seconds: Math.floor((startDifference / 1000) % 60),
      };
    } else if (endDifference > 0) {
      timeLeft = {
        type: "Ends In:",
        days: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((endDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((endDifference / 1000 / 60) % 60),
        seconds: Math.floor((endDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTimeLeft = ({ days, hours, minutes, seconds }) => {
    const pad = (num) => String(num).padStart(2, "0");
    return `${days}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <>
      <Link
        to={`/auction/item/${id}`}
        className="flex flex-col bg-white rounded-sm group sm:basis-56 lg:basis-60 2xl:basis-80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 "
      >
        {/* Image Section */}
        <div className="w-full flex justify-center items-center p-4">
          <img
            src={imgSrc}
            alt={title}
            className="w-full  aspect-[4/3] object-cover rounded-md"
          />
        </div>

        {/* Info Section */}
        <div className="px-4 pt-2 pb-4">
          <h5 className="font-semibold text-lg group-hover:text-[#d6482b] mb-2">
            {title}
          </h5>
          {startingBid && (
            <p className="text-stone-600 font-light">
              Starting Bid:{" "}
              <span className="text-[#fdba88] font-bold ml-1">
                {startingBid}
              </span>
            </p>
          )}
          <p className="text-stone-600 font-light">
            {timeLeft.type}
            {Object.keys(timeLeft).length > 1 ? (
              <span className="text-[#fdba88] font-bold ml-1">
                {formatTimeLeft(timeLeft)}
              </span>
            ) : (
              <span className="text-[#fdba88] font-bold ml-1">Time's up!</span>
            )}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Card;
