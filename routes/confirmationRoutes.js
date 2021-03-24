const router = require("express").Router();
const { confirmUser } = require("../controllers/confirmationController");

router.post("/", confirmUser);

module.exports = router;
