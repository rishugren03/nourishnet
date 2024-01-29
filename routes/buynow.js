const express = require("express");
const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn} = require("../middleware.js");
const buyNowController = require("../controllers/buynow.js");
// const multer  = require('multer');
// const {storage} = require("../cloudConfig.js");
// const upload = multer({ storage });


router.get(
    "/:id/buynow", 
    isLoggedIn, 
    buyNowController.renderBuyNowForm,
);

module.exports = router;