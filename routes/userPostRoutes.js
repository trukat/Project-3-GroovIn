const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  newPost,
  getUserPost,
  deleteUserPost,
  updateUserPost,
} = require("../controllers/UserPostController");

router.post("/", auth, newPost);

router.get("/", auth, getUserPost);

router.delete("/", auth, deleteUserPost);

router.patch("/edit", auth, updateUserPost);

module.exports = router;
