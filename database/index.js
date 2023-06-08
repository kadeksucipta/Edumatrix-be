const mongoose = require("mongoose");
// const{dbHost, dbPass, dbName, dbPort, dbUser} = require("../app/config");

mongoose.connect(`mongodb://edumatrix:edumatrix123@ac-iwyuvkr-shard-00-00.pzkkw5k.mongodb.net:27017,ac-iwyuvkr-shard-00-01.pzkkw5k.mongodb.net:27017,ac-iwyuvkr-shard-00-02.pzkkw5k.mongodb.net:27017/?replicaSet=atlas-9we3i2-shard-0&ssl=true&authSource=admin`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));

module.exports = db;