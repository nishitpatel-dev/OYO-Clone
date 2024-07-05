const { MongoClient } = require("mongodb");

const searchHotelController = async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  const database = client.db("oyoclone");
  const collection = database.collection("hotels");

  try {
    let arr;
    const seacrhQuery = req.query.val;
    const city = req.query.city;
    // console.log(city);
    // console.log(seacrhQuery);

    if (!Array.isArray(seacrhQuery)) {
      arr = [seacrhQuery];
    }
    // console.log(arr);

    let searchResult;

    if (city == "") {
      searchResult = await collection
        .find({
          "facilities.name": { $in: arr || seacrhQuery },
        })
        .toArray();
    } else {
      searchResult = await collection
        .find({
          "facilities.name": { $in: arr || seacrhQuery },
          location: city,
        })
        .toArray();
    }

    res.status(200).json({
      searchData: searchResult,
    });
  } catch (error) {
    res.status(400).json({
      errMessage: error,
    });
  }
};

module.exports = { searchHotelController };
