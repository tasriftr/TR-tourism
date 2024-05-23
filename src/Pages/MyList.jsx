import { FaMountainSun } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../Components/SpotCard";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const spots = useLoaderData();

  return (
    <div className="w-full border-t border-l dark:border-slate-600 border-slate-300 dark:bg-[#242c38] py-10 px-5 rounded-xl mt-10">
      <div className="dark:text-amber-400  mb-9 font-bold md:text-3xl text-2xl mx-auto flex  w-fit gap-2 items-center">
        <FaMountainSun></FaMountainSun> <h2> Added by {user?.name}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full my-5 ">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
