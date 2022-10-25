import React, { useState, useEffect } from "react";

interface ICountdown {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown = ({ hours = 0, minutes = 0, seconds = 60 }: ICountdown) => {
  const [time, setTime] = useState<ICountdown>({ hours, minutes, seconds });

  const tick = () => {
    if (time.hours === 0 && time.minutes && time.seconds === 0) {
      reset();
    } else if (time.hours === 0 && time.seconds === 0) {
      setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
    } else if (time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <div className="flex justify-center items-center font-semibold">
        <h1 className="px-3 py-1 bg-mainGray text-[black]  text-2xl mx-1">{`${time.hours
          .toString()
          .padStart(2, "0")}`}</h1>
        :
        <h1 className="px-3 py-1 bg-mainGray text-[black]  text-2xl mx-1">{`${time.minutes
          .toString()
          .padStart(2, "0")}`}</h1>
        :
        <h1 className="px-3 py-1 bg-mainGray text-[black] text-2xl mx-1">{`${time.seconds
          .toString()
          .padStart(2, "0")}`}</h1>
      </div>
      <div className="flex justify-center items-center font-semibold">
        <h1 className="px-3 py-1 text-[13px] mx-2">GIỜ</h1>
        <h1 className="px-3 py-1  text-[13px] mx-1">PHÚT</h1>
        <h1 className="px-3 py-1  text-[13px] mx-1">GIÂY</h1>
      </div>
    </div>
  );
};

export default CountDown;
