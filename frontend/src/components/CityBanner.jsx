import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CityBanner = () => {
  const navigate = useNavigate();
  
  const data = [
    "Banglore",
    "Chennai",
    "Delhi",
    "Gurgaon",
    "Hyderabad",
    "Kolkata",
    "Mumbai",
    "Noida",
    "Pune",
    "All Cities",
  ];

  const [search, setsearch] = useState("");

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate(`/hotels?city=${search}`);
  };

  return (
    <>
      <div className="banner">
        {data.map((city) => {
          return <span key={city}>{city}</span>;
        })}
      </div>

      <div className="banner2">
        <div className="heading">
          <h1>Over 174,000+ hotels and homes across 35+ countries</h1>
        </div>

        <div className="inputSearch">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search by city, hotel, or neighborhood"
              onChange={handleSearch}
              value={search}
            />

            <input
              type="text"
              value={"Wed, 17 Jan - Thu, 18 Jan"}
              onChange={() => {
                console.log("");
              }}
            />

            <input
              type="text"
              value={"1 Room, 1 Guest"}
              onChange={() => {
                console.log("");
              }}
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="continue-search">
          <span>Continue your search</span>
          <div className="stored-info">Surat | 17 Jan - 18 Jan | 1 Guest</div>
        </div>
      </div>
    </>
  );
};

export default CityBanner;
