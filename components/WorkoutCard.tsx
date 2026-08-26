import { Workout } from "@/types/workout"

interface WorkoutCardProps {
  workout: Workout;
  handleClick: (workout: Workout) => void;
}

const WorkoutCard = ({ workout, handleClick }: WorkoutCardProps) => {

  return (
    <div data-testid="workout-card" className="p-8 lg:w-[30%] w-full lg:aspect-video text-center flex flex-col gap-5 border border-emerald-700 relative shadow-xs shadow-emerald-700 rounded-lg h-fit justify-center">
      <h3 className="text-2xl font-bold text-emerald-700">{workout.name}</h3>
      <p data-testid="workout-time">Work time: {workout.workTime} seconds</p>
      <button onClick={() => handleClick(workout)} className="bg-emerald-400 text-white rounded-md p-2 cursor-pointer hover:bg-emerald-700">Start workout</button>
    </div>
  )
}

export default WorkoutCard