const { authUser, registerUser } = require("../controllers/userControllers");

const express = require("express");
const router = express.Router();

router.route("/RegisterScreen").post(registerUser);
router.post("/login", authUser);

module.exports = router;
