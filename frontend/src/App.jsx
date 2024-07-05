import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Hotels from "./screens/Hotels";
import SingelHotel from "./components/SingelHotel";
import { Toaster } from "react-hot-toast";
import PaymentHotel from "./components/PaymentHotel";
import Paymentsuccess from "./components/Paymentsuccess";
import Errorpage from "./components/Errorpage";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<SingelHotel />} />
          <Route path="/payment/:id" element={<PaymentHotel />} />
          <Route path="/paymentsuccess" element={<Paymentsuccess />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
