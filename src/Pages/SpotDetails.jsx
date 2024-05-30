import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  CiDollar,
  CiHome,
  CiMap,
  CiMapPin,
  CiSliderVertical,
  CiSquareCheck,
} from "react-icons/ci";
import {
  FaBus,
  FaCanadianMapleLeaf,
  FaFlag,
  FaMailBulk,
  FaRegBuilding,
  FaUser,
} from "react-icons/fa";
import { FaSquareLetterboxd } from "react-icons/fa6";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {
    name,
    country,
    location,
    average_cost,
    short_description,
    seasonality,
    travel_time,
    photo,
    user_name,
    _id,
    totalVisitorsPerYear,
    email,
  } = spot;
  return (
    <div className="flex w-full md:w-11/12 lg:w-9/12 flex-col  shadow-lg   flex-1 justify-between mx-auto  transition-all  mb-11">
      <div className="flex flex-col lg:flex-row">
        <div className="p-5">
          <img className="rounded-md " src={photo} alt="" />
        </div>
        <div className="flex flex-col px-5 gap-2">
          <h3 className="font-web dark:text-amber-400 text-emerald-700 text-2xl font-bold ">
            {name}
          </h3>

          <div className="flex gap-4 text-lg">
            <div className="flex gap-2 items-center dark:text-sky-600 text-sky-800">
              <FaFlag />

              <p>
                <span className="font-semibold"> Country: </span>
                {country}{" "}
              </p>
            </div>
          </div>
          <div className="border-t  border-gray-600 border-dashed"></div>
          <p>"{short_description}"</p>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-200">
              <span className="font-semibold">
                {" "}
                <CiDollar />
              </span>
              <p>
                <span className="font-semibold"> Average Cost: </span>
                {average_cost} USD{" "}
              </p>
            </div>
            <div className="flex gap-1 items-center text-gray-700 dark:text-gray-200">
              <CiHome />
              <p>Status: {user_name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="flex gap-2 items-center text-gray-700 dark:text-gray-200">
                <FaBus />

                <p>
                  {" "}
                  <span className="font-semibold">Travel time: </span>
                  {travel_time} hours
                </p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaCanadianMapleLeaf />

                <p>
                  <span className="font-semibold"> Seasonality: </span>
                  {seasonality}{" "}
                </p>
              </div>
            </div>

            <div className="border-t  border-gray-600 border-dashed mb-1"></div>
            <div className="flex gap-1 items-center   w-fit px-4 py-2 rounded-lg border dark:border-none dark:bg-slate-800 border-gray-400">
              <CiMapPin />

              <p>
                {" "}
                <span className="font-semibold">Location: </span>
                {location}
              </p>
            </div>
            <div className="border-t  border-gray-600 border-dashed mb-1"></div>
            <div>
              <p className="text-xl">Added By</p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 items-center text-gray-700 dark:text-gray-200">
                <FaUser />

                <p>
                  {" "}
                  <span className="font-semibold">User Name: </span>
                  {user_name}
                </p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaSquareLetterboxd />

                <p>
                  <span className="font-semibold"> Email: </span>
                  {email}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-slate-500 rounded-b-xl bg-slate-800 flex flex-col text-gray-200 gap-2 mt-10 py-10">
        <div className="flex  gap-2 px-6  text-center mx-auto mt-5">
          <p className="font-web text-blue-500 text-3xl my-10">
            {" "}
            Total Visitor : {totalVisitorsPerYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
