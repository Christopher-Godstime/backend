require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const bodyParser = require("body-parser");
const compression = require("compression");

const morgan = require("morgan");
// const SocketServer = require("./socketServer");

const path = require("path");
const emailRoute = require("./routes/emailRoute");
const app = express();
const helmet = require("helmet");
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(compression());
app.use(cors());
const accessLogstream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogstream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev" || "production"));
// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [process.env.COOKIE_SECRET],
//   })
// );
app.set("view engine", "ejs");
app.use(express.static("utils/email_templates"));

const http = require("http").createServer(app);
// const io = require("socket.io")(http);

// io.on("connection", (socket) => {
//   SocketServer(socket);
// });

app.use("/api/email", emailRoute);

// const URI = process.env.MONGODB_URL;
// mongoose
//   .connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log("Server is running on port", port);
});
