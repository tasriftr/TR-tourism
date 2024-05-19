import { useContext } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Vite + React</h1>
      <DarkModeToggle />

      <p className="dark:text-blue-400 text-red-600 text-6xl font-bold">
        hi how are u
      </p>
    </div>
  );
};

export default Home;
