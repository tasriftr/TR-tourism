import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

import { FaFlag } from "react-icons/fa";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://tr-tourism.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <div className="flex justify-between items-center mb-9  w-full mt-12">
        <div className="dark:text-amber-400 font-bold md:text-3xl text-2xl flex gap-2 items-center mx-auto">
          <FaFlag /> <h2>Countries</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full my-5">
        {countries.map((country) => (
          <CountryCard
            key={country._id + "abc"}
            country={country}
          ></CountryCard>
        ))}
      </div>
    </>
  );
};

export default Country;
