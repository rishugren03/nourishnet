const Listing = require("../models/listing");

module.exports.renderNourishHUb = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("owner");
    res.render('../views/includes/nourishhub.ejs', {listing});
};
