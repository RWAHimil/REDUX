// import "./App.css";
// import Input from "./Redux/Input";
// import Display from "./Redux/Display";
// import Counter from "./Redux/Counter";

// function App() {
//   return (
//     <>
//       <Input />
//       <Display />
//       <hr />
//       <Counter />
//     </>
//   );
// }

// export default App;

import { useDispatch, useSelector } from "react-redux";
// import { startTimer, stopTimer } from "./actions";
import { startTimer, stopTimer } from "./Redux/Action";

const App = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);

  const handleStartTimer = () => {
    dispatch(startTimer());
  };

  const handleStopTimer = () => {
    dispatch(stopTimer());
  };

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={handleStartTimer}>Start Timer</button>
      <button onClick={handleStopTimer}>Stop Timer</button>
    </div>
  );
};

export default App;
