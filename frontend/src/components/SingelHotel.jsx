import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import roomImg from "/public/hotelimage.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./Header";
import { Helmet } from "react-helmet";

const SingelHotel = () => {
  const [loading, setLoading] = useState(false);
  const [singleHotel, setsingleHotel] = useState({});

  const { id } = useParams();

  const fetchSingleHotel = async () => {
    setLoading(true);

    const response = await fetch(`http://localhost:8000/api/hotels/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const jsonRes = await response.json();

    // console.log(jsonRes.singleHotel);

    setsingleHotel(jsonRes.singleHotel);

    setLoading(false);
  };

  useEffect(() => {
    fetchSingleHotel();
  }, []);

  return (
    <>
      <Helmet>
        <title>{singleHotel.name ? singleHotel.name : "Loading..."}</title>
      </Helmet>
      <Header />
      {loading ? (
        <div className="shotel">
          <Skeleton width={1000} height={450} className="image" />
          <div className="sheading">
            <Skeleton
              width={1000}
              height={30}
              style={{ margin: "20px 20px 20px 0" }}
            />
          </div>

          <div className="spara">
            <Skeleton
              width={1000}
              height={20}
              style={{ margin: "20px 20px 20px 0" }}
            />
          </div>

          <div className="sfacilities">
            <Skeleton width={112} height={30} />
            <div>
              <Skeleton
                width={230}
                height={22}
                style={{ marginBottom: "8px" }}
              />
            </div>
          </div>

          <div className="sbtn">
            <Skeleton
              width={120}
              height={40}
              style={{ margin: "10px 20px 20px 0" }}
            />
            <Skeleton width={112} height={20} style={{ marginTop: "19px" }} />
          </div>
        </div>
      ) : (
        <div className="shotel">
          <img
            src={singleHotel.banner}
            alt="RoomImage"
            height={450}
            width={1000}
            className="image"
          />
          <div className="sheading">
            <h2>{singleHotel.name}</h2>
          </div>

          <div className="spara">
            <p>{singleHotel.description}</p>
          </div>

          <div className="sfacilities">
            <h2>Facilities : </h2>
            <div>
              {singleHotel.facilities ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: singleHotel.facilities[0].image,
                    }}
                  />
                  {singleHotel.facilities[0].name} ,
                  <div
                    dangerouslySetInnerHTML={{
                      __html: singleHotel.facilities[1].image,
                    }}
                  />
                  {singleHotel.facilities[1].name}
                </>
              ) : (
                <p>No Facilities Available</p>
              )}
            </div>
          </div>

          <div className="sbtn">
            <Link to={`/payment/${singleHotel._id}`}>
              <button>Book Now</button>
            </Link>
            <p>Price : ₹{singleHotel.price} /-</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingelHotel;
