require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const { ExpressPeerServer } = require("peer");

const bodyParser = require("body-parser");

// const SocketServer = require("./socketServer");

const path = require("path");
const emailRoute = require("./routes/emailRoute");
const app = express();
app.use(express.json());
app.use(cors());

const http = require("http").createServer(app);

app.use(express.static(path.resolve(__dirname, "./bimbo-frontend/build")));

ExpressPeerServer(http, { path: "/" });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [process.env.COOKIE_SECRET],
//   })
// );
app.set("view engine", "ejs");
app.use(express.static("utils/email_templates"));

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
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./bimbo-frontend/build", "index.html"));
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log("Server is running on port", port);
});
