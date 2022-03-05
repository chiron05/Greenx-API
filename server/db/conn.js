const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/GreenX")
    .then((data) => {
      console.log(`mongoDB conneced with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`mongodb connection unsuccessfull`);
    });
};

module.exports = connectDatabase;
