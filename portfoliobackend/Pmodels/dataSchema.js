const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    uniqu: true,
  },
  message: {
    type: String,
    require: true,
  },
  date: {
    type:Date,
    default: Date.now,
  },
});

const Data=mongoose.model("UsersReq",DataSchema);
module.exports=Data;
