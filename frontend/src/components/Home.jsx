import React from "react";
import mainimg from "/main-first.avif";
import mainimg2 from "/banner2.avif";
import firelogo from "/fire.png";
import world from "/world.avif";
import CityBanner from "./CityBanner";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="main-body">
          <CityBanner />

          <div className="image-main">
            <img src={mainimg} alt="Image" />
          </div>

          <div className="image-main">
            <img src={mainimg2} alt="Image" />
          </div>

          <div className="contact">
            <div className="contactheader">
              <img src={firelogo} alt="FireLogo" />

              <div className="contact-content">
                <div>Get access to exclusive deals</div>
                <div>Only the best deals reach your inbox</div>
              </div>
            </div>

            <div className="contactpart">
              <div className="contactmain">
                <span>Your email</span>
                <input type="email" placeholder="e.g., john@email.com" />
              </div>
              <button type="submit">Notify me</button>
            </div>
          </div>

          <div className="world-section">
            <div className="world-image">
              <img src={world} alt="Image" />
            </div>

            <div className="flex-world">
              <div className="world-text">
                <div className="world-text-1">
                  <h3>There's an OYO around. Always.</h3>
                  <p>More Destinations. More Ease. More Affordable.</p>
                </div>

                <div className="coutry-part">
                  <div className="country-number">
                    <span>35+</span>
                    <p>Countries</p>
                  </div>

                  <div className="country-number">
                    <span>174000+</span>
                    <p>Hotels & Homes</p>
                  </div>
                </div>
              </div>
              <div className="country-list">
                <ul>
                  <li>
                    <div style={{ backgroundColor: "green" }}></div>
                    <span>Indonesia</span>
                  </li>

                  <li>
                    <div style={{ backgroundColor: "orange" }}></div>
                    <span>Malaysia</span>
                  </li>

                  <li>
                    <div style={{ backgroundColor: "yellow" }}></div>
                    <span>Denmark</span>
                  </li>

                  <li>
                    <div style={{ backgroundColor: "blue" }}></div>
                    <span>US</span>
                  </li>

                  <li>
                    <div style={{ backgroundColor: "purple" }}></div>
                    <span>UK</span>
                  </li>

                  <li>
                    <div style={{ backgroundColor: "darkblue" }}></div>
                    <span>Netherlands</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
