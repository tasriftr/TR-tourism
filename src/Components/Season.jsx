import { FaFlag, FaSun } from "react-icons/fa";

import SeasonCard from "./SeasonCard";

const Season = () => {
  const seasons = [
    {
      id: 3087459,
      name: "summer",
      image:
        "https://wallpapers.com/images/hd/green-nature-in-summer-season-zn4vfgoiw54752rg.jpg",
    },
    {
      id: 3087458,
      name: "winter",
      image:
        "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/earth-and-space/seasons/signs-of-winter/Signs-of-Winter.jpg",
    },
    {
      id: 3087457,
      name: "always",
      image: "https://www.surfertoday.com/images/stories/seawater-benefits.jpg",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center mb-9  w-full mt-12">
        <div className="dark:text-amber-400 font-bold md:text-3xl text-2xl flex gap-2 items-center mx-auto">
          <FaSun /> <h2>Seasons</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full my-5">
        {seasons.map((season) => (
          <SeasonCard key={season.id} season={season}></SeasonCard>
        ))}
      </div>
    </>
  );
};

export default Season;
