const express = require('express');
const router = express.Router();
// const Listing = require("../models/listing");
const nourishhubController = require("../controllers/nourishhub.js");

router.get(
    "/nourishhub", 
    nourishhubController.renderNourishHUb,
);

module.exports = router;