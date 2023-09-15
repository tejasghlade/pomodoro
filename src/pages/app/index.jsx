
import Pomos from "./Pomos/Pomos";
import Tasks from "./Tasks/Tasks";
import Timer from "./Timer/Timer";


const Pomodoro = () => {
  return (
    <div className="flex flex-col gap-10 justify-center  p-10">
      <Timer />
      <Tasks />
      <Pomos />
    </div>
  );
};
export default Pomodoro;
