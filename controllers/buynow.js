const Order = require('../models/buynow.js'); 
const Listing = require("../models/listing");

module.exports.renderBuyNowForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("owner");
    res.render("listings/buynow.ejs", {listing});
};

module.exports.processBuyNowForm = async (req, res) => {
    try {
        // Assuming 'BuyNow' is the name attribute of your form input
        let orderData = req.body.BuyNow;

        // Create a new instance of the Order model with the data
        let order = new Order(orderData);

        // Save the order to the database
        await order.save();

        // Redirect to the listings page after successful save
        res.redirect("/listings");
    } catch (error) {
        // Handle errors, for example, log them and render an error page
        console.error("Error saving order:", error);
        res.render("error.ejs", { error: "Failed to process order." });
    }
};
