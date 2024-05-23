import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../Components/TouristSpot";
import Country from "../Components/Country";
import Slider from "../Components/Slider";

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
      <Slider></Slider>
      <TouristSpot spots={spots}></TouristSpot>
      <Country></Country>
    </div>
  );
};

export default Home;
