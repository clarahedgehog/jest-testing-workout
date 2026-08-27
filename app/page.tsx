"use client"

import Header from "@/components/Header";
import WorkoutSelection from "@/components/WorkoutSelection";
import ActiveWorkout from "@/components/ActiveWorkout";
import { Workout } from "@/types/workout";
import { useState } from "react";

export default function Home() {

  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null)

  return (
    <div>
      <Header />
      {!selectedWorkout && (
        <WorkoutSelection handleClick={(workout => setSelectedWorkout(workout))} />
      )}
      {selectedWorkout && (
        <ActiveWorkout workout={selectedWorkout} goBack={() => setSelectedWorkout(null)} />
      )}
    </div>
  );
}