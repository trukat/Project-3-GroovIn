const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost/GrooveIn",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to mongodb");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// custom routes
app.use("/user", require("./routes/userRoutes"));
app.use("/post", require("./routes/userPostRoutes"));
app.use("/profile", require("./routes/profileRoutes"));
app.use("/confirmation", require("./routes/confirmationRoutes"));

// otherwise this route is used - should be used once ready to deploy
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`));
