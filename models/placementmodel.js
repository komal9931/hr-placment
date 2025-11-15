// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/dbconnect"); // your Sequelize connection

// const PlacementData = sequelize.define(
//   "placementdatahr",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     email: { type: DataTypes.STRING, allowNull: false },
//     fullName: { type: DataTypes.STRING, allowNull: false },
//     activeEmail: { type: DataTypes.STRING },
//     contact: { type: DataTypes.STRING },
//     course: { type: DataTypes.STRING },
//     faculty: { type: DataTypes.STRING },
//     counselor: { type: DataTypes.STRING },
//     englishVideos: { type: DataTypes.STRING },
//     portfolioProjects: { type: DataTypes.STRING },
//     portfolioLink: { type: DataTypes.STRING },
//     recordEmail: { type: DataTypes.BOOLEAN, defaultValue: false },
//     testMarks: { type: DataTypes.STRING },
//     normalCV: { type: DataTypes.STRING },
//     digitalCV: { type: DataTypes.STRING },
//     linkedinProfile: { type: DataTypes.STRING },
//     agreeTerms: { type: DataTypes.BOOLEAN, defaultValue: false },
//   },
//   {
//     tableName: "placementdatahr",
//     timestamps: true, // creates createdAt and updatedAt automatically
//   }
// );

// module.exports = PlacementData;

// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/dbconnect"); // Import the instance

// const PlacementData = sequelize.define(
//   "placementdatahr",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     email: { type: DataTypes.STRING, allowNull: false },
//     fullName: { type: DataTypes.STRING, allowNull: false },
//     activeEmail: { type: DataTypes.STRING },
//     contact: { type: DataTypes.STRING },
//     course: { type: DataTypes.STRING },
//     faculty: { type: DataTypes.STRING },
//     counselor: { type: DataTypes.STRING },
//     englishVideos: { type: DataTypes.STRING },
//     portfolioProjects: { type: DataTypes.STRING },
//     portfolioLink: { type: DataTypes.STRING },
//     recordEmail: { type: DataTypes.BOOLEAN, defaultValue: false },
//     testMarks: { type: DataTypes.STRING },
//     normalCV: { type: DataTypes.STRING },
//     digitalCV: { type: DataTypes.STRING },
//     linkedinProfile: { type: DataTypes.STRING },
//     agreeTerms: { type: DataTypes.BOOLEAN, defaultValue: false },
//   },
//   {
//     tableName: "placementdatahr",
//     timestamps: false,
//   }
// );

// module.exports = PlacementData;

// const mongoose = require("mongoose");

// const PlacementSchema = new mongoose.Schema(
//   {
//     id: { type: Number, required: true }, // Sequelize autoIncrement; MongoDB auto _id will still exist
//     email: { type: String, required: true },
//     fullName: { type: String, required: true },
//     activeEmail: { type: String },
//     contact: { type: String },
//     course: { type: String },
//     faculty: { type: String },
//     counselor: { type: String },
//     englishVideos: { type: String },
//     portfolioProjects: { type: String },
//     portfolioLink: { type: String },
//     recordEmail: { type: Boolean, default: false },
//     testMarks: { type: String },
//     normalCV: { type: String },
//     digitalCV: { type: String },
//     linkedinProfile: { type: String },
//     agreeTerms: { type: Boolean, default: false },
//   },
//   {
//     // collection: "placementdatahr", // same table name
//     timestamps: false,
//   }
// );

// // module.exports = mongoose.model("placementdatahr", PlacementDataSchema);
// export default mongoose.models.PlacementData ||
//   mongoose.model("PlacementData", PlacementSchema);

const mongoose = require("mongoose");

const PlacementSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    activeEmail: { type: String },
    contact: { type: String },
    course: { type: String },
    faculty: { type: String },
    counselor: { type: String },
    englishVideos: { type: String },
    portfolioProjects: { type: String },
    portfolioLink: { type: String },
    recordEmail: { type: Boolean, default: false },
    testMarks: { type: String },
    normalCV: { type: String },
    digitalCV: { type: String },
    linkedinProfile: { type: String },
    agreeTerms: { type: Boolean, default: false },
  },
  { timestamps: false }
);

export default mongoose.models.PlacementData ||
  mongoose.model("PlacementData", PlacementSchema);
