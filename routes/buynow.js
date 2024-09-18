const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, validateOrder } = require("../middleware.js");
const buyNowController = require("../controllers/order.js");

router.get("/:id/purchase", isLoggedIn, buyNowController.renderBuyNowForm);

router.post(
  "/:listingId/confirm-order",

  buyNowController.confirmOrder,
  validateOrder
);

router.get("/my-orders", buyNowController.myOrders);

module.exports = router;
