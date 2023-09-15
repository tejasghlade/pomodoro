
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const Task = () => {
  return (
    <div style={{
        borderLeft : '8px solid black'
    }} className="bg-white flex justify-between items-center p-5 rounded-md border-8 border-red-700">
        <div className="flex items-center gap-2">
          <CheckCircleSharpIcon className="text-gray-300 text-3xl" />
          <div className="font-bold text-neutral-600 text-base   leading-normal">
            JOB
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="font-bold text-zinc-400 ">
            <span className="text-lg">5</span>
            <span className="text-sm">/10</span>
          </div>
          <div  className="rounded border-2 border-black  flex-col justify-center items-center ">
            <MoreVertSharpIcon className="text-neutral-600" />
          </div>
        </div>
      </div>
  )
}
export default Task