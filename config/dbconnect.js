// // const { Sequelize } = require("sequelize");
// // require("dotenv").config();

// // const sequelize = new Sequelize(
// //   process.env.DB_NAME,
// //   process.env.DB_USER,
// //   process.env.DB_PASSWORD,
// //   {
// //     host: process.env.DB_HOST,
// //     port: process.env.DB_PORT,
// //     dialect: "mysql",
// //     dialectModule: require("mysql2"),
// //     logging: false,
// //   }
// // );

// // async function connection(params) {
// //   try {
// //     await sequelize.authenticate();
// //     console.log("Connection has been established successfully.");
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // connection();

// // module.exports = connection;

// // src/config/dbconnect.js
// const { Sequelize } = require("sequelize");
// require("dotenv").config();
// console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);

// // Create Sequelize instance
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     // host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 3306,
//     dialect: "mysql",
//     dialectModule: require("mysql2"),
//     logging: false,
//   }
// );

// // Test the connection (optional, will log success/failure)
// sequelize
//   .authenticate()
//   .then(() => console.log("✅ Connection has been established successfully."))
//   .catch((err) => console.error("❌ Unable to connect to the database:", err));

// // Export the Sequelize instance directly
// module.exports = sequelize;

// const mongoose = require("mongoose");
// require("dotenv").config();

// console.log("Mongo URI:", process.env.MONGO_URI);

// // Mongoose connection function
// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("✅ MongoDB connection established successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error);
//     process.exit(1); // Stop the server if DB fails
//   }
// }

// connectDB();

// module.exports = mongoose;
import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return; // already connected
  }

  try {
    const uri = process.env.MONGODB_URI;
    console.log("Mongo URI:", uri);

    await mongoose.connect(uri, {
      dbName: "placement",
    });

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw new Error("MongoDB Connection Failed");
  }
}
