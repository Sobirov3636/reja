const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://sobirov3636:ali@reja.ouh2ajp.mongodb.net/Reja";

mongodb.connect(
  connectionString,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDb connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3005;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
      });
    }
  }
);
