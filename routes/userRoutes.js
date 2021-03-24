const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  register,
  login,
  getUser,
  deleteUser,
} = require("../controllers/UserController");

router.post("/register", register);

router.post("/login", login);

router.get("/", auth, getUser);

router.delete("/", auth, deleteUser);

module.exports = router;
