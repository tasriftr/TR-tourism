import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5300/country")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full my-5">
      {countries.map((country) => (
        <CountryCard key={country._id} country={country}></CountryCard>
      ))}
    </div>
  );
};

export default Country;
