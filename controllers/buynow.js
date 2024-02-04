const Order = require('../models/buynow.js'); 
const Listing = require("../models/listing");

module.exports.renderBuyNowForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("owner");
    res.render("listings/buynow.ejs", { listing });
};




