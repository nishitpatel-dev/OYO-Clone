const { MongoClient } = require("mongodb");

const facilitiesController = async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  const database = client.db("oyoclone");
  const collection = database.collection("hotels");

  try {
    const resultData = await collection.distinct("facilities.name");

    res.status(200).json({
      resultData: resultData,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { facilitiesController };
