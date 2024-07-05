import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          gap: "20px"
        }}
      >
        <h1>404 - Page Not Found</h1>
        <Link to={"/"} style={{background: "red", padding: "15px", color: "white",borderRadius: "10px"}}>Back To Home</Link>
      </div>
    </>
  );
};

export default Errorpage;
