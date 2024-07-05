import React from "react";
import logo from "/logo2.png";
import image3 from "/image3.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="left-footer">
          <div className="left-image">
            <img src={logo} alt="Logo" />
          </div>
          <div className="left-text">
            <p>World's leading chain of hotels and homes</p>
          </div>
        </div>

        <div className="right-footer">
          <div className="right-text">
            <p>Join our network and grow your business!</p>
          </div>

          <div className="right-button">
            <div className="right-image">
              <img src={image3} alt="Image" style={{height: "24px"}} />
            </div>
            <div className="right-text">
              <span>List your property</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
