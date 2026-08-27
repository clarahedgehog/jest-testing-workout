"use client"

import { useState, useEffect } from "react";

interface TimerProps {
  startTime: number,
}

const Timer = ({ startTime }: TimerProps) => {
  const [startWorkout, setStartWorkout] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<number>(startTime)
  const [isFinished, setIsFinished] = useState<boolean>(false)

  useEffect(() => {
    if (currentTime <= 0) {
      setStartWorkout(false);
      setIsFinished(true)
    }
    if (startWorkout && currentTime > 0) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => prev - 1)
      }, 1000);
      return () => clearInterval(interval)
    }
  }, [startWorkout, currentTime])


  const handleClick = () => {
    if (currentTime === 0) {
      setCurrentTime(startTime)
    }
    setStartWorkout(true)
  };

  const handleReset = () => {
    setCurrentTime(startTime)
    setStartWorkout(false)
    setIsFinished(false)
  }

  return (
    <>
      <div className="flex justify-center">{currentTime}
      </div>
      <div>
        {!isFinished && (
          <button
            onClick={handleClick}
            className="bg-emerald-400 text-white rounded-md p-2 cursor-pointer hover:bg-emerald-700"
          >
            {!startWorkout ? "Start" : "Lets go!!!"}
          </button>
        )}
        {isFinished &&
          <div>
            <div>You did it!</div>
            <button
              onClick={handleReset}
              className="bg-emerald-400 text-white rounded-md p-2 cursor-pointer hover:bg-emerald-700"
            >
              Reset
            </button>
          </div>
        }
      </div >
    </>
  )
}

export default Timer