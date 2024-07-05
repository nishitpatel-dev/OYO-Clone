const express = require("express");
const app = express();
const dotenv = require("dotenv");
const MongoDB = require("./db");
const userRoute = require("./routes/userRoute");
const cors = require("cors");

dotenv.config();
app.use(express.json());
MongoDB();

const corsOption = {
  origin: "*",
  methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOption));

app.use("/api/", userRoute);

app.get("/getid", (req, res) => {
  res.status(200).json({
    key_id: process.env.RAZORPAY_KEY,
  });
});

app.listen(8000, () => {
  console.log("Server listened at port 8000");
});
