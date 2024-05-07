const mongoose = require ('mongoose');

const mongoURI="mongodb://127.0.0.1:27017/Portfolio";

const connectMongo = async () => {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };

  module.exports = connectMongo;