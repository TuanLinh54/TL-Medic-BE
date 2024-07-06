const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('b5qr8vfalrnvjxe4whlk', 'uxbhs6aam2uxkmyp', 'qXofynAxYzmLRIz86uSc', {
  host: 'b5qr8vfalrnvjxe4whlk-mysql.services.clever-cloud.com',
  dialect: 'mysql',
  port: 3306,
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;
