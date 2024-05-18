import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <DarkModeToggle />
      <div>
        <p className="dark:text-blue-400 text-red-600 text-6xl font-bold">
          hi how are u
        </p>
      </div>
    </>
  );
}

export default App;
