import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PaymentHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePayment = async () => {
    const data = await fetch(`http://localhost:8000/api/payment?id=${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    const jsonRes = await data.json();
    console.log(jsonRes);

    const getid = await fetch("http://localhost:8000/getid", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const finalId = await getid.json();
    // console.log(finalId);

    const options = {
      key: finalId.key_id, 
      amount: jsonRes.resultData.amount, 
      currency: "INR",
      name: "Nishit Patel",
      description: "Test Transaction",
      order_id: jsonRes.resultData.id,
      callback_url: "http://localhost:8000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  useEffect(() => {
    handlePayment();
  }, []);

  return (
    <>
      <div>Loading...</div>
    </>
  );
};

export default PaymentHotel;
