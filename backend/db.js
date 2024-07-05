const mongoose = require('mongoose');

const MongoDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Successfully");
        
    } catch (error) {

        console.log(error);
        
    }
}

module.exports = MongoDB;