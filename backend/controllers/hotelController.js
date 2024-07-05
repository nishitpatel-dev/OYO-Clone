const { MongoClient } = require("mongodb");

const hotelController = async (req, res) => {
  const data = req.query; //   console.log(data.city);
  const cityName = data.city || "";
  let result;

  const client = new MongoClient(process.env.MONGODB_URI);

  const database = client.db("oyoclone");
  const collection = database.collection("hotels");

  if (cityName.length > 0) {
    result = await collection.find({ location: cityName }).toArray();
  } else {
    result = await collection.find({}).toArray();
  }

  //   console.log(result);

  res.status(200).json({
    cityData: result,
  });
};

module.exports = { hotelController };
