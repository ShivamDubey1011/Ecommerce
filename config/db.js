const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useUnifiedTopology: true,  // Keep this for better connection handling
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);  // Exit the process with failure code if connection fails
  }
};

module.exports = connectDB;
