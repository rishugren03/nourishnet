const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, validateOrder} = require("../middleware.js");
const buyNowController = require("../controllers/buynow.js");
const orderContoller = require("../controllers/orders.js");



router.get(
    "/:id/buynow", 
    isLoggedIn, 
    buyNowController.renderBuyNowForm,
    validateOrder,
);

router.post(
    "/:id/orders",
    orderContoller.processBuyNowForm,

)

module.exports = router;