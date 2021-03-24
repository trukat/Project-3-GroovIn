const router = require("express").Router();
const auth = require("../middleware/auth");
const { editProfile } = require("../controllers/profileController");

router.get("/", editProfile);

module.exports = router;
