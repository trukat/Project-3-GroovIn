const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(fileUpload());
app.post("/api/upload", (req, res) => {
  console.log("hello");
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GrooveIn", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// custom routes
app.use("/user", require("./routes/userRoutes"));
app.use("/post", require("./routes/userPostRoutes"));
app.use("/profile", require("./routes/profileRoutes"));
app.use("/confirmation", require("./routes/confirmationRoutes"));

// otherwise this route is used - should be used once ready to deploy
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`));
