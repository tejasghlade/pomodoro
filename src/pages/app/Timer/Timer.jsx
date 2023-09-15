import { Box, Chip, Typography, Button } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import SnoozeIcon from "@mui/icons-material/Snooze";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && minutes === 0 && seconds === 0) {
      // Timer is done, reset it
      setIsActive(false);
      // You can add a sound or other action here when the timer is done
    } else if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <Box className=" bg-red-300  bg-opacity-50 rounded-lg  shadow-md w-[100%] p-5">
      <div>
        {/* first tabs */}
        <div className="flex items-center justify-center gap-3">
          <Chip
            className="text-white cursor-pointer hover:text-red-700 group font-sm border-white hover:border-red-700 font-semibold border-2"
            variant="outlined"
            label="Pomodoro"
            icon={<TimerIcon className="text-white group-hover:text-red-700" />}
          />
          <Chip
            className="text-white cursor-pointer hover:text-red-700 group font-sm border-white hover:border-red-700 font-semibold border-2"
            variant="outlined"
            label="Short Break"
            icon={
              <SnoozeIcon className="text-white group-hover:text-red-700" />
            }
          />
          <Chip
            className="text-white cursor-pointer hover:text-red-700 group font-sm border-white hover:border-red-700 font-semibold border-2"
            variant="outlined"
            label="Long Break"
            icon={
              <ShutterSpeedIcon className="text-white group-hover:text-red-700" />
            }
          />
        </div>

        {/* main number Counter */}

        <div className="flex justify-center items-center my-2">
          <Typography
            className="font-bold  text-9xl text-white"
            component="h1"
          >
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Typography>
        </div>

        <div className="flex justify-center items-center my-5 gap-3">
          {/* buttons */}
          <Button
            onClick={!isActive ? startTimer : pauseTimer}
            className="text-xl  text-pink-700 bg-white font-bold "
            variant="contained"
            size="large"
          >
            {!isActive ? "Start" : "Pause"}
          </Button>

          <Button
            onClick={resetTimer}
            className="text-xl  text-pink-700 bg-white font-bold "
            variant="contained"
            size="large"
          >
            Reset
          </Button>
        </div>
      </div>
    </Box>
  );
};
export default Timer;
