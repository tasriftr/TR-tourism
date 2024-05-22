import { useContext } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../Components/TouristSpot";

const Home = () => {
  const { user } = useContext(AuthContext);
  const spots = useLoaderData();
  console.log(user);
  return (
    <div className="w-full mx-auto">
      <p className="dark:text-blue-400 text-red-600 text-6xl font-bold">
        hi how are u
      </p>
      <p>{user?.email}</p>
      <TouristSpot spots={spots}></TouristSpot>
    </div>
  );
};

export default Home;
