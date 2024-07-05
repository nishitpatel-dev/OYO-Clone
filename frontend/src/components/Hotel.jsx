import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MainSkeleton from "./MainSkeleton";

const Hotel = () => {
  const [cityData, setcityData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [partLoading, setpartLoading] = useState(false);
  const [facilities, setfacilities] = useState([]);
  const [list, setlist] = useState([]);
  const [price, setPrice] = useState(3515);

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const firstQuery = queryParam.get("city");

  // console.log(queryParam);
  // console.log(firstQuery);

  // console.log(cityData);

  const fetchData = async () => {
    setisLoading(true);

    try {
      let url = "http://localhost:8000/api/hotels";
      if (queryParam.size > 0) {
        url = `http://localhost:8000/api/hotels?city=${firstQuery}`;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const jsonRes = await response.json();

      if (jsonRes.cityData) {
        setcityData(jsonRes.cityData);
        fetchFacilities();
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
      setisLoading(false);
    }
  };

  const fetchFacilities = async () => {
    setisLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/facilities");

      const jsonRes = await response.json();

      // console.log(jsonRes);

      if (jsonRes.resultData) {
        setfacilities(jsonRes.resultData);
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    setpartLoading(true);

    const response = await fetch(
      `http://localhost:8000/api/price?price=${price}&city=${firstQuery}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const jsonRes = await response.json();

    if (jsonRes.searchResult) {
      setcityData(jsonRes.searchResult);
      setpartLoading(false);
    }

    // console.log(jsonRes);
  };

  useEffect(() => {
    fetchData();
  }, [firstQuery]);

  const handlePrice = (e) => {
    // console.log(e.target.value);

    setPrice(e.target.value);
  };

  // For Checkbox

  const handleFacilities = (e) => {
    // console.log(e);

    if (e.target.checked) {
      setlist((prevList) => [...prevList, e.target.id]);
    } else {
      setlist((prevList) => prevList.filter((item) => item != e.target.id));
    }
  };

  const handleFilter = async () => {
    // console.log(list);

    let query;

    if (list.length == 1) {
      query = `http://localhost:8000/api/search?val=${list[0]}&city=${firstQuery}`;
    } else if (list.length == 2) {
      query = `http://localhost:8000/api/search?val=${list[0]}&val=${list[1]}&city=${firstQuery}`;
    } else if (list.length == 3) {
      query = `http://localhost:8000/api/search?val=${list[0]}&val=${list[1]}&val=${list[2]}&city=${firstQuery}`;
    } else {
      query = `http://localhost:8000/api/search?val=AC&val=TV&val=Free Wifi&city=${firstQuery}`;
    }

    setpartLoading(true);

    const response = await fetch(query, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const jsonRes = await response.json();

    // console.log(jsonRes);

    if (jsonRes.searchData) {
      setcityData(jsonRes.searchData);
      setpartLoading(false);
    }
  };

  useEffect(() => {
    if (list.length > 0) {
      handleFilter();
    }
  }, [list]);

  return (
    <>
      <Header />

      {isLoading ? (
        <>
          <div className="hotel-main">
            <div className="filter-hotel">
              <div className="filter-header">
                <Skeleton width={75} height={30} />
              </div>

              <div className="price-range">
                <Skeleton
                  width={50}
                  height={16}
                  style={{ marginBottom: "10px" }}
                />
                <div className="range">
                  <Skeleton
                    width={250}
                    height={16}
                    style={{ marginLeft: "-20px" }}
                  />
                  <Skeleton width={40} height={16} />
                </div>
              </div>

              <div className="filter-facilities">
                <Skeleton width={80} height={16} />
                <div
                  className="facilities-checkboxes"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="checkbox" style={{ display: "flex" }}>
                    <Skeleton width={13} height={13} />
                    <Skeleton
                      width={50}
                      height={13}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>

                  <div className="checkbox" style={{ display: "flex" }}>
                    <Skeleton width={13} height={13} />
                    <Skeleton
                      width={25}
                      height={13}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>

                  <div className="checkbox" style={{ display: "flex" }}>
                    <Skeleton width={13} height={13} />
                    <Skeleton
                      width={40}
                      height={13}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>

                  <div className="checkbox" style={{ display: "flex" }}>
                    <Skeleton width={13} height={13} />
                    <Skeleton
                      width={25}
                      height={13}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>

                  <div className="checkbox" style={{ display: "flex" }}>
                    <Skeleton width={13} height={13} />
                    <Skeleton
                      width={80}
                      height={13}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel-details">
              <MainSkeleton />
              <MainSkeleton />
              <MainSkeleton />
            </div>
          </div>
        </>
      ) : (
        <>
          {partLoading ? (
            <div className="hotel-main">
              <div className="filter-hotel">
                <div className="filter-header">
                  <span>Filters</span>
                </div>

                <div className="price-range">
                  <span>Price : </span>
                  <div className="range">
                    <input
                      type="range"
                      name="range"
                      id="range"
                      min={588}
                      max={3515}
                      onChange={handlePrice}
                    />
                    <span>₹{price}</span>
                  </div>
                  <button type="submit" onClick={handleSearch}>
                      Search
                    </button>
                </div>

                <div className="filter-facilities">
                  <span>Facilities : </span>
                  <div className="facilities-checkboxes">
                    {facilities.map((facility) => {
                      return (
                        <div key={facility}>
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              name={`${facility}`}
                              id={`${facility}`}
                              onChange={handleFacilities}
                            />
                            <label htmlFor={`${facility}`}>{facility}</label>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>
              </div>
              <div className="hotel-details">
                <MainSkeleton />
                <MainSkeleton />
                <MainSkeleton />
              </div>
            </div>
          ) : (
            <div className="hotel-main">
              <div className="filter-hotel">
                <div className="filter-header">
                  <span>Filters</span>
                </div>

                <div className="price-range">
                  <span>Price : </span>
                  <div className="range">
                    <input
                      type="range"
                      name="range"
                      id="range"
                      min={588}
                      max={3515}
                      onChange={handlePrice}
                      defaultValue={3515}
                    />
                    <span>₹{price}</span>
                  </div>
                  <button type="submit" onClick={handleSearch}>
                    Search
                  </button>
                </div>

                <div className="filter-facilities">
                  <span>Facilities : </span>
                  <div className="facilities-checkboxes">
                    {facilities.map((facility) => {
                      return (
                        <div key={facility}>
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              name={`${facility}`}
                              id={`${facility}`}
                              onChange={handleFacilities}
                            />
                            <label htmlFor={`${facility}`}>{facility}</label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="hotel-details">
                {cityData.map((city) => {
                  return (
                    <div className="hotel" key={city._id}>
                      <div className="hotel-image">
                        <div className="main-hotel-image">
                          <img src={city.banner} alt="room" height={250} />
                        </div>

                        <div className="small-images">
                          <img
                            src={city.gallery[0]}
                            alt="room"
                            height={50}
                            className="smallimg"
                          />
                          <img
                            src={city.gallery[1]}
                            alt="room"
                            height={50}
                            className="smallimg"
                          />
                          <img
                            src={city.gallery[2]}
                            alt="room"
                            height={50}
                            className="smallimg"
                          />
                          <img
                            src={city.gallery[3]}
                            alt="room"
                            height={50}
                            className="smallimg"
                          />
                        </div>
                      </div>

                      <div className="hotel-info">
                        <h2>{city.name}</h2>
                        <p>{city.description}</p>

                        <div className="facilities">
                          <h2>Facilities : </h2>
                          <div className="facilities-data">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: city.facilities[0].image,
                              }}
                            />
                            {city.facilities[0].name} ,
                            <div
                              dangerouslySetInnerHTML={{
                                __html: city.facilities[1].image,
                              }}
                            />
                            {city.facilities[1].name}
                          </div>
                        </div>

                        <div className="price-info">
                          <button>{`Price : ₹${city.price}`}</button>
                          <Link to={`/hotels/${city._id}`}>
                            <p>See Details</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Hotel;
