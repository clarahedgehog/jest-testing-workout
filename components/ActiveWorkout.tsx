import { Workout } from "@/types/workout";
import Timer from "./Timer";

interface ActiveWorkoutProps {
  workout: Workout;
  goBack: () => void;
}

const ActiveWorkout = ({ workout, goBack }: ActiveWorkoutProps) => {
  return (
    <div className="flex justify-center p-8 lg:px-30">
      <div className="p-8 lg:w-[30%] w-full lg:aspect-video text-center flex flex-col gap-5 border border-emerald-700 relative shadow-xs shadow-emerald-700 rounded-lg h-fit justify-center" >
        <button onClick={() => goBack()} className="text-emerald-700 rounded-md cursor-pointer hover:text-emerald-950 text-left">Go back</button>
        <h3 className="text-2xl font-bold text-emerald-700">{workout.name}</h3>
        <Timer startTime={workout.workTime} />
      </div>
    </div>
  )
}

export default ActiveWorkout