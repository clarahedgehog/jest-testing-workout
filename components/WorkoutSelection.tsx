"use client"
import { workouts } from "@/data/workouts"
import WorkoutCard from "./WorkoutCard"
import { Workout } from "@/types/workout";

interface WorkoutSelectionProps {
  handleClick: (workout: Workout) => void;
}

const WorkoutSelection = ({ handleClick }: WorkoutSelectionProps) => {

  return (
    <div className="p-8 lg:px-30">
      <h2 className="text-center lg:text-3xl text-2xl pb-8">Choose your workout</h2>
      <div data-testid="workout-selection" className="flex flex-wrap justify-center gap-[20px]">
        {workouts && workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            workout={workout}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkoutSelection