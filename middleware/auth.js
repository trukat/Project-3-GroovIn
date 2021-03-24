// this allows authentication for users once they're logged in and also giving req.user the verified id
const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) {
      return res.status(401).json({ msg: "No authentication token passed" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return res.status(401).json({ msg: "Token verification failed" });
    }

    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = auth;
