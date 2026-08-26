"use client"

import Header from "@/components/Header";
import WorkoutSelection from "@/components/WorkoutSelection";
import ActiveWorkout from "@/components/ActiveWorkout";
import { Workout } from "@/types/workout";
import { useState } from "react";

export default function Home() {

  const [startWorkout, setStartWorkout] = useState<boolean>(false)
  const [activeWorkout, setActiveWorkout] = useState<Workout | null>(null)

  const handleClickStart = (workout: Workout): void => {
    setStartWorkout(true);
    setActiveWorkout(workout)
  }

  const handleClickGoBack = (): void => {
    setStartWorkout(false);
    setActiveWorkout(null);
  };

  return (
    <div>
      <Header />
      {!startWorkout && <WorkoutSelection handleClick={handleClickStart} />}
      {startWorkout && activeWorkout && (
        <ActiveWorkout workout={activeWorkout} goBack={handleClickGoBack} />
      )}
    </div>
  );
}