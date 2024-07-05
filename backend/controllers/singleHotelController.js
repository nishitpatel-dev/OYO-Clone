const { MongoClient, ObjectId } = require("mongodb");

const singleHotelController = async (req, res) => {
  const { id } = req.params;

  const client = new MongoClient(process.env.MONGODB_URI);

  const db = client.db("oyoclone");
  const collection = db.collection("hotels");

  if (id) {

    const objectId = new ObjectId(id);

    const singleHotelData = await collection.findOne({ _id: objectId });

    res.status(200).json({
      singleHotel: singleHotelData,
    });
  }

  //   console.log(id);
};

module.exports = { singleHotelController };
