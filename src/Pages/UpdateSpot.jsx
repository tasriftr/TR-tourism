import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateSpot = () => {
  const navigate = useNavigate();

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
  } = spot;
  const { user } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState(country);
  const [selectedValueTravel, setSelectedValueTravel] = useState(travel_time);
  const [selectedValueSeasonality, setSelectedValueSeasonality] =
    useState(seasonality);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectChangeTravel = (event) => {
    setSelectedValueTravel(event.target.value);
  };
  const handleSelectChangeSeasonality = (event) => {
    setSelectedValueSeasonality(event.target.value);
  };

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const location = form.location.value;
    const average_cost = form.average_cost.value;
    const short_description = form.short_description.value;
    const seasonality = form.seasonality.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const travel_time = form.travel_time.value;
    const photo = form.photo.value;
    const newSpot = {
      name,
      country,
      location,
      average_cost,
      short_description,
      seasonality,
      travel_time,
      photo,
      totalVisitorsPerYear,
    };
    console.log(newSpot);
    // send data to backend
    fetch(`https://tr-tourism.vercel.app/spot/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            navigate("/"); // Redirect to home page or desired route after successful update
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update. Please try again.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating spot:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div className="dark:bg-gray-800 bg-gray-200 md:p-20 px-16 py-10">
      <p className="text-3xl font-extrabold">Update Tourist Spot</p>
      <form onSubmit={handleUpdateCoffee}>
        {/* comment row 1*/}
        <div className="md:flex md:gap-2 mb-2">
          {/* Tourist spot name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">
                Tourist Spot Name
              </span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
          {/* country */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">Country</span>
            </label>
            <label className="input-group">
              <select
                name="country"
                value={selectedValue}
                onChange={handleSelectChange}
                className="select select-bordered w-full max-w-xs dark:bg-gray-700"
              >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </label>
          </div>
        </div>
        {/* comment row location and avg cost*/}
        {/* location */}
        <div className="md:flex md:gap-2 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">Location</span>
            </label>
            <label className="input-group">
              <input
                name="location"
                defaultValue={location}
                type="text"
                placeholder="Location "
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
          {/* average cost */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">Average Cost</span>
            </label>
            <label className="input-group">
              <input
                name="average_cost"
                defaultValue={average_cost}
                type="text"
                placeholder="Average Cost"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
        </div>
        {/* short description*/}
        <div className="md:flex md:gap-2 mb-8">
          {/* description */}
          <div className="form-control h-36 md:w-full">
            <label className="label">
              <span className="label-text dark:text-white">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                defaultValue={short_description}
                name="short_description"
                type="text"
                placeholder="Short Description"
                className="input input-bordered w-full dark:bg-gray-700 h-32"
              />
            </label>
          </div>
        </div>
        {/* comment row category and details*/}
        <div className="md:flex md:gap-2 mb-2">
          {/* seasonality */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">Seasonality</span>
            </label>
            <label className="input-group">
              <select
                name="seasonality"
                value={selectedValueSeasonality}
                onChange={handleSelectChangeSeasonality}
                className="select select-bordered w-full max-w-xs dark:bg-gray-700"
              >
                <option value="">Select Seasonality</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="always">Always</option>
              </select>
            </label>
          </div>
          {/* travel time */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">Travel Time</span>
            </label>
            <label className="input-group">
              <select
                name="travel_time"
                value={selectedValueTravel}
                onChange={handleSelectChangeTravel}
                className="select select-bordered w-full max-w-xs dark:bg-gray-700"
              >
                <option value="">Select Travel Time</option>
                <option value="1">1 Day</option>
                <option value="2">2 Day</option>
                <option value="3">3 Day</option>
                <option value="4">4 Day</option>
                <option value="5">5 Day</option>
                <option value="6">6 Day</option>
                <option value="7">7 Day</option>
              </select>
            </label>
          </div>
        </div>
        {/* total visitor */}
        <div className="md:flex md:gap-2 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">
                Visitor per Year
              </span>
            </label>
            <label className="input-group">
              <input
                defaultValue={totalVisitorsPerYear}
                name="totalVisitorsPerYear"
                type="text"
                placeholder="Visitor/Year "
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
        </div>
        {/* comment row photo url*/}
        <div className="md:flex md:gap-2 mb-2">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text dark:text-white">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={photo}
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
        </div>
        <p className="mt-5 text-lg">
          User Info{" "}
          <span className="text-sm">
            {" "}
            - You do not need to edit this section
          </span>
        </p>
        <div className="w-full mx-auto border-t border my-2 border-gray-300 "></div>
        {/* user info */}
        <div className="md:flex md:gap-2 mb-2">
          {/* user email */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">User Email</span>
            </label>
            <label className="input-group">
              <input
                name="user_email"
                type="text"
                defaultValue={user?.email}
                className="input input-bordered w-full dark:bg-gray-700"
                disabled
              />
            </label>
          </div>

          {/* user name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text dark:text-white">User Name</span>
            </label>
            <label className="input-group">
              <input
                name="user_name"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered w-full dark:bg-gray-700"
                disabled
              />
            </label>
          </div>
        </div>

        <input
          className="btn w-full dark:bg-blue-900 dark:text-gray-50 border-none mt-5"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateSpot;
