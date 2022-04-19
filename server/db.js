const mongoose = require("mongoose");

const dbname = "Restaurant_project";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://ProjectWAD:Restaurant147@wad-project.61wkb.mongodb.net/${dbname}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
