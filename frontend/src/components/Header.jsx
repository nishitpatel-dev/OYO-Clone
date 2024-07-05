import logo from "/logo.png";
import PromoCards from "./PromoCards";
import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image3.png";
import image4 from "/image4.png";
import user from "/user-main.png";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-image">
          <Link to={"/"}>
            <img src={logo} alt="logo" height={120} />
          </Link>
        </div>
        <div className="header-info">
          <PromoCards
            imgSrc={image1}
            title={"Become a Member"}
            description={"Additional 10% off on stays"}
          />
          <PromoCards
            imgSrc={image2}
            title={"OYO for Business"}
            description={"Trusted by 5000 Corporates"}
          />
          <PromoCards
            imgSrc={image3}
            title={"List your property"}
            description={"Start earning in 30 mins"}
          />
          <PromoCards
            imgSrc={image4}
            title={"0124-6201611"}
            description={"Call us to Book now"}
          />

          {localStorage.getItem("jwtToken") ? (
            <Link
              to={"/login"}
              onClick={() => {
                localStorage.clear();
              }}
            >
              <div className="promocard">
                <div className="promocards">
                  <span>
                    <img src={user} alt="userimage" height={25} />
                  </span>
                  <div className="promoinfo">
                    <p>{"Logout"}</p>
                    <span>{""}</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div className="promocard">
                <div className="promocards">
                  <span>
                    <img src={user} alt="userimage" height={25} />
                  </span>
                  <div className="promoinfo">
                    <p>{"Login / Signup"}</p>
                    <span>{""}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
