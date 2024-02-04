const Order = require('../models/buynow.js'); 
const Listing = require("../models/listing");


module.exports.processBuyNowForm = async (req, res) => {
    const newOrder = new Order(req.body.order);
    await newOrder.save();
    req.flash("success", "Order Confirmed!");
    res.redirect("/listings");
};

