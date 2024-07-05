import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Paymentsuccess = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(4);

  useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  }, []);

  return (
    <>
      <div style={{display: "flex", height: "80vh", justifyContent: "center",alignItems: "center",flexDirection: "column", gap: "10px"}}>
        <h1>Payment Successful</h1>
        {time > 0 ? (
          <p>Redirecting to the home page in {time} seconds...</p>
        ) : (
          navigate("/")
        )}
      </div>
    </>
  );
};

export default Paymentsuccess;
