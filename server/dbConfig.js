const { MongoClient } = require("mongodb");
const connectionUrl = process.env.MONGODB_URI;

const dbName = process.env.DB_NAME;

console.log(dbName, connectionUrl)

const init = async () => {
  console.log(dbName, connectionUrl);
  let client = await MongoClient.connect(connectionUrl);
  console.log("connected to database!", dbName);
  return client.db(dbName);
};

module.exports = { init };
