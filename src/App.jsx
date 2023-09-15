import Navbar from "./components/Navbar";
import Pomodoro from "./pages/app";
import Divider from '@mui/material/Divider';

const App = () => {
  return (
    <div className="bg-red-400  flex justify-center flex-col ">
      <div className="w-[40%] mx-auto">
        <Navbar />
        <Divider />
        <Pomodoro />
      </div>
    </div>
  );
};
export default App;
