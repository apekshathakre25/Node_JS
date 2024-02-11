const mongoose = require("mongoose");
//connect to database

const connectToDb = async (url) => {
  return mongoose.connect(url);
  // .then(() => {
  //   console.log("MongoDB Connected");
  // })
  // .catch((err) => {
  //   console.error("MongoDB Connection Error:", err);
  // });
};
module.exports = {
  connectToDb,
};
