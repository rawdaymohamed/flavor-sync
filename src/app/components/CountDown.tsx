"use client";
import React from "react";
import Countdown from "react-countdown";
const endDate = new Date("2025-03-01");
const CountDown = () => {
  return (
    <div>
      <Countdown
        date={endDate}
        className="font-bold text-5xl text-yellow-300 "
      />
    </div>
  );
};

export default CountDown;
