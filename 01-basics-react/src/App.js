import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // usestate send the updates in batches because of fiber architecture
  const addValue = () => {
    //setCounter can also accept callback function
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <button onClick={addValue}>Add Counter</button>
      {counter}
      <button onClick={removeValue}>Remove Counter</button>
    </div>
  );
}

export default App;
