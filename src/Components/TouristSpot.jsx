import SpotCard from "./SpotCard";

const TouristSpot = ({ spots }) => {
  return (
    <div className="w-full border-t border-l dark:border-slate-600 border-slate-300 dark:bg-stone-900 py-10 px-5 rounded-xl mt-10">
      <h2 className="dark:text-amber-400 text-center mb-9 font-bold md:text-3xl text-2xl ">
        Tourist Spots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full my-5 ">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSpot;
