const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn} = require("../middleware.js");
const buyNowController = require("../controllers/buynow.js");


router.get(
    "/:id/buynow", 
    isLoggedIn, 
    buyNowController.renderBuyNowForm,
);

module.exports = router;