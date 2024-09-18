const mongoose = require("mongoose");
const User = require("./user");
const Listing = require("./listing");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  buyerEmail: {
    type: mongoose.Schema.Types.String,
    unique: true,
    sparse: true,
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Listing,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  // status: {
  //   type: String,
  //   default: "Pending",
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
