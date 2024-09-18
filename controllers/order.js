const Order = require("../models/orders.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

module.exports.renderBuyNowForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("owner");
  res.render("listings/buynow.ejs", { listing });
};

module.exports.confirmOrder = async (req, res) => {
  try {
    const { quantity, totalPrice, shippingAddress } = req.body.buynow;

    const listing = await Listing.findById(req.params.listingId);
    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("back");
    }

    let newOrder = new Order({
      user: req.user._id,
      buyerEmail: req.user.email,
      listing: listing._id,
      quantity,
      totalPrice,
      shippingAddress,
    });

    let user = await User.findById(req.user._id);
    user.myOrders.push(newOrder);
    await newOrder.save();
    await user.save();

    req.flash("success", "Order Placed");

    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.flash("error", "Something went wrong. Please try again.");
    res.status(500).send("Server error");
  }
};

module.exports.myOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const myOrders = Order.find({ user: userId }).exec();
    if (!myOrders) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.json({ myOrders });
  } catch (error) {
    console.error("Error fetching my orders:", error);
    res.status(500).json({ message: "Server error" });
  }
};
