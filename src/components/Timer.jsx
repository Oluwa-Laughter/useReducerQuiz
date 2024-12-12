import { useEffect, useState } from "react";

function Timer({ dispatch, secondsCount }) {
  const mins = Math.floor(secondsCount / 60);
  const secs = secondsCount % 60;
  useEffect(
    function () {
      const interval = setInterval(function () {
        dispatch({ type: "timeTick" });
      }, 1000);

      return () => clearInterval(interval);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
