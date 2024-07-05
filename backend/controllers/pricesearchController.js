const { MongoClient } = require("mongodb");

const pricesearchController = async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  const database = client.db("oyoclone");
  const collection = database.collection("hotels");

  try {
    const price = req.query.price;
    const finalPrice = Number(price);
    const city = req.query.city;

    // console.log(price);

    // console.log(price);
    // console.log(typeof finalPrice);

    let resultData;

    if (city == "") {
      resultData = await collection
        .find({ price: { $lte: finalPrice } })
        .toArray();
    } else {
      resultData = await collection
        .find({ price: { $lte: finalPrice }, location: city })
        .toArray();
    }

    res.status(200).json({
      searchResult: resultData,
    });
  } catch (error) {
    res.status(400).json({
      errMessage: error,
    });
  }
};

module.exports = { pricesearchController };
