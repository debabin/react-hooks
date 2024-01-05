import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <h1>Timer: {seconds} sec</h1>;
};
