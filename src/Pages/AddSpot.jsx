import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

import Swal from "sweetalert2";
const AddSpot = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      country,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // send data to backend
    fetch("https://coffee-server-six-xi.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="dark:bg-gray-800 bg-gray-200 p-20">
      <p className="text-3xl font-extrabold">Add coffee</p>
      <form onSubmit={handleAddCoffee}>
        {/* comment row 1*/}
        <div className="md:flex md:gap-2 mb-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <select
                name="country"
                value={selectedValue}
                onChange={handleSelectChange}
                className="select select-bordered w-full max-w-xs dark:bg-gray-700"
              >
                <option value="">Select an option</option>
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
        {/* comment row SUP*/}
        <div className="md:flex md:gap-2 mb-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                name="supplier"
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                name="taste"
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
        </div>
        {/* comment row category and details*/}
        <div className="md:flex md:gap-2 mb-0">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
        </div>
        {/* comment row photo url*/}
        <div className="md:flex md:gap-2 mb-0">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full dark:bg-gray-700"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-block mt-2 border"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default AddSpot;
