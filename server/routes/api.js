const express = require("express");
const router = express.Router();

const urlController = require("../controllers/urlController");
const userController = require("../controllers/userController");

// URL-related routes
router.post("/shorten", urlController.createShortUrl);
router.get("/:shortUrl", urlController.redirectToUrl);

// User-related routes
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

module.exports = router;
