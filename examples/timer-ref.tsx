import React, { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerIdRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
    };
  }, []);

  const stopTimer = () => clearInterval(timerIdRef.current);

  return (
    <>
      <button onClick={stopTimer}>stop timer</button>
      <h1>Timer: {seconds} sec</h1>
    </>
  );
};
