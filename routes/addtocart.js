const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../middleware.js");
const cartContoller = require("../controllers/addtocart.js");

router.get(
    "/:id/cart", 
    isLoggedIn, 
    cartContoller.renderAddToCart,
);

module.exports = router;