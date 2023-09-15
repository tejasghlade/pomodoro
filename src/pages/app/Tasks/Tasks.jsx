import { Box } from "@mui/material";
import Task from "./Task";
import TaskForm from "./TaskForm";
const Tasks = () => {
  return (
    <Box className=" bg-red-300 bg-opacity-50 rounded-lg  shadow-md w-[100%] p-5">
      <div className="m-5 flex flex-col gap-3">
        <Task />
        <Task />
        <Task />
      </div>
      <TaskForm />
    </Box>
  );
};
export default Tasks;
