const Listing = require("../models/listing");

module.exports.renderAddToCart = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("owner");
    res.render("listings/addtocart.ejs", { listing });
};
