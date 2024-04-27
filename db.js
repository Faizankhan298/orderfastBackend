const mongoose = require("mongoose");
// const MONGODB_URI = process.env.MONGODB_URI;
const mongoURI =
  "mongodb+srv://fk29837:36VBTqlwm9a6uIx6@cluster0.c4fhcir.mongodb.net/orderfast?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function (err, data) {
      if (err) {
        console.error("Error fetching data from food_items:", err);
        return;
      } else {
        global.food_items = data;
      }
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
