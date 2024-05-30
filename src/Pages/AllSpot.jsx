import TouristSpot from "../Components/TouristSpot";
import { useLoaderData } from "react-router-dom";

const AllSpot = () => {
  const spots = useLoaderData();
  return (
    <div className="w-full mx-auto">
      {/* <p className="dark:text-blue-400 text-red-600 text-6xl font-bold">
        hi how are u
      </p> */}

      <TouristSpot spots={spots}></TouristSpot>
    </div>
  );
};

export default AllSpot;
