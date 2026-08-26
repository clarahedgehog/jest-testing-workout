"use client"
import { workouts } from "@/data/workouts"
import WorkoutCard from "./WorkoutCard"
import { Workout } from "@/types/workout";

interface WorkoutSelectionProps {
  handleClick: (workout: Workout) => void;
}

const WorkoutSelection = ({ handleClick }: WorkoutSelectionProps) => {

  return (
    <div className="p-8">
      <h2 className="text-center text-2xl">Choose your workout</h2>
      <div data-testid="workout-selection">
        <div>
          {workouts && workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkoutSelection