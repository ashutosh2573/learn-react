import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <Card userName="Chai aur code" btnText="Click me" />
      <Card userName="Ashu" btnText="Visit me" />
    </>
  );
}

export default App;
