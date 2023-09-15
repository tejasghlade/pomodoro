import { Box } from "@mui/material";

const Pomos = () => {
  return (
    <Box className="bg-red-300 gap-5  bg-opacity-50 rounded-lg  shadow-md w-[100%] p-5 flex justify-center items-center">
      <div className="flex items-baseline">
        <span className="text-center text-white text-opacity-70 text-base font-light font-['Segoe UI'] leading-loose">
          Pomos:
        </span>
        <span className=" text-center text-white text-2xl font-bold font-['Arial Rounded MT Bold'] leading-loose">
          13
        </span>
        <span className="text-center text-white text-opacity-70 text-xs font-light font-['Segoe UI'] leading-loose">
          /
        </span>
        <span className=" text-center text-white text-2xl font-bold font-['Arial Rounded MT Bold'] leading-loose">
          220
        </span>
      </div>
      <div className="flex items-baseline">
        <div className="text-center text-white text-opacity-70 text-base font-light font-['Segoe UI'] leading-loose">
          Finish At:
        </div>
        <div className=" text-center text-white text-2xl font-bold font-['Arial Rounded MT Bold'] leading-loose">
          14:53
        </div>

        <div className="text-center text-white text-opacity-70 text-base font-light font-['Segoe UI'] leading-loose">
          ( 362.1 h)
        </div>
      </div>
    </Box>
  );
};
export default Pomos;
