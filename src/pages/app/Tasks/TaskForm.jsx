import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
const TaskForm = () => {
  return (
    <Box className="bg-white m-5 flex flex-col   rounded-xl">
      <div className="p-5 flex flex-col">
        <div className="py-3">
          <input
            className="border-none text-2xl w-full font-bold outline-none text-gray-500 placeholder:text-gray-300"
            placeholder="What are you working on?"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg  font-bold text-gray-500">Est Pomodoros</p>
          <div className="flex gap-3 items-center">
            <input
              type="text"
              className="text-xl bg-zinc-200 rounded p-2 border-none  w-16  font-bold outline-none text-gray-500"
            />

            <div className="flex gap-1">
              <button className="w-8 h-8 px-3.5 py-3 opacity-90 relative flex justify-center items-center bg-white rounded shadow border border-neutral-200 ">
                <ArrowDropUp
                  fontSize="large"
                  className="absolute text-gray-600"
                />
              </button>
              <button className="w-8 h-8 px-3.5 py-3 opacity-90 relative flex justify-center items-center bg-white rounded shadow border border-neutral-200 ">
                <ArrowDropDown
                  fontSize="large"
                  className="absolute text-gray-600"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 ">
          <div className="underline flex items-center cursor-pointer text-black text-opacity-40 font-bold">
            + Add Note
          </div>
          <div className="underline flex items-center cursor-pointer text-black text-opacity-40 font-bold">
            + Add Project
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 py-5 px-4  bg-zinc-100 rounded-bl-lg rounded-br-lg">
        <Button className=" text-zinc-500 text-sm font-bold" size="large">
          cancel
        </Button>
        <Button
          className="w-20 px-3.5 py-2 opacity-90 bg-neutral-800 rounded shadow border border-neutral-800"
          size="large"
          variant="contained"
        >
          Save
        </Button>
      </div>
    </Box>
  );
};
export default TaskForm;
