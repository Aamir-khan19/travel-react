import React, { useState } from "react";

const CustomizeItineraryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dateOfArrival: "",
    placesToCover: "",
    noOfPersons: "",
    noOfAdults: "",
    noOfChildren: "",
    childAge: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Customize Your Itinerary
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Mandatory Fields */}
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="date"
            name="dateOfArrival"
            value={formData.dateOfArrival}
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Optional Fields */}
        <div className="space-y-3">
          <input
            type="text"
            name="placesToCover"
            value={formData.placesToCover}
            onChange={handleChange}
            placeholder="Places to Cover"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            name="noOfPersons"
            value={formData.noOfPersons}
            onChange={handleChange}
            placeholder="Number of Persons"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            name="noOfAdults"
            value={formData.noOfAdults}
            onChange={handleChange}
            placeholder="Number of Adults"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            name="noOfChildren"
            value={formData.noOfChildren}
            onChange={handleChange}
            placeholder="Number of Children"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            placeholder="Child Age"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Message"
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className=" w-full font-bold text-lg bg-gradient-to-r from-green-400 to-sky-500 text-white px-4 py-2 rounded-md shadow-md hover:from-green-500 hover:to-sky-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomizeItineraryForm;
