import { workouts } from "@/data/workouts"
import { Workout } from "@/types/workout"

interface WorkoutCardProps {
  workout: Workout;
  handleClick: (workout: Workout) => void;
}

const WorkoutCard = ({ workout, handleClick }: WorkoutCardProps) => {

  return (
    <div data-testid="workout-card" className="p-8">
      <h3>{workout.name}</h3>
      <p data-testid="workout-time">Work time: {workout.workTime} seconds</p>
      <button onClick={() => handleClick(workout)}>Start workout</button>
    </div>
  )
}

export default WorkoutCard