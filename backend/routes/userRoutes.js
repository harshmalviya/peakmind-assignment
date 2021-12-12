const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

// Auth Routes
router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.use(userController.protect);

router.get("/validateToken", userController.validateToken);

// Comparisons Routes
router.post("/history", userController.postPrevComparisons);
router.get("/history", userController.getPrevComparisons);

module.exports = router;
