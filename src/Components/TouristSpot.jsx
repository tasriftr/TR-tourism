// import SpotCard from "./SpotCard";
// import { FaMountainSun } from "react-icons/fa6";

// const TouristSpot = ({ spots }) => {

//   return (
//     <div className="w-full border-t border-l dark:border-slate-600 border-slate-300 dark:bg-[#242c38] py-10 px-5 rounded-xl mt-10">
//       <div className="dark:text-amber-400  mb-9 font-bold md:text-3xl text-2xl mx-auto flex  w-fit gap-2 items-center">
//         <FaMountainSun></FaMountainSun> <h2>Tourist Spots</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full my-5 ">
//         {spots.map((spot) => (
//           <SpotCard key={spot._id} spot={spot}></SpotCard>
//         ))}
//         <div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TouristSpot;
import { useState } from "react";
import SpotCard from "./SpotCard";
import { FaMountainSun } from "react-icons/fa6";

const TouristSpot = ({ spots }) => {
  const [sortOrder, setSortOrder] = useState("default");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedSpots = [...spots].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.average_cost - b.average_cost;
    } else if (sortOrder === "highToLow") {
      return b.average_cost - a.average_cost;
    }
    return 0; // default order
  });

  return (
    <div className="w-full border-t border-l dark:border-slate-600 border-slate-300 dark:bg-[#242c38] py-10 px-5 rounded-xl mt-10">
      <div className="flex justify-between items-center mb-9  w-full ">
        <div className="dark:text-amber-400 font-bold md:text-3xl text-2xl flex gap-2 items-center mx-auto">
          <FaMountainSun /> <h2>Tourist Spots</h2>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 items-center justify-center mx-auto mb-5">
          <label htmlFor="sort" className="mr-2 dark:text-amber-400">
            Sort by Cost:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            className=" dark:bg-gray-700 dark:text-amber-400  rounded px-2 py-1"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Cost: Low to High</option>
            <option value="highToLow">Cost: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full my-5 ">
        {sortedSpots.map((spot) => (
          <SpotCard key={spot._id + 545} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSpot;
