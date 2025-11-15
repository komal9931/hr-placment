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

const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconnect"); // Import the instance

const PlacementData = sequelize.define(
  "placementdatahr",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false },
    fullName: { type: DataTypes.STRING, allowNull: false },
    activeEmail: { type: DataTypes.STRING },
    contact: { type: DataTypes.STRING },
    course: { type: DataTypes.STRING },
    faculty: { type: DataTypes.STRING },
    counselor: { type: DataTypes.STRING },
    englishVideos: { type: DataTypes.STRING },
    portfolioProjects: { type: DataTypes.STRING },
    portfolioLink: { type: DataTypes.STRING },
    recordEmail: { type: DataTypes.BOOLEAN, defaultValue: false },
    testMarks: { type: DataTypes.STRING },
    normalCV: { type: DataTypes.STRING },
    digitalCV: { type: DataTypes.STRING },
    linkedinProfile: { type: DataTypes.STRING },
    agreeTerms: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    tableName: "placementdatahr",
    timestamps: false,
  }
);

module.exports = PlacementData;
