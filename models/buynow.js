const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require("path");

const buyNowSchema = new mongoose.Schema({
  product: {
    type: String,
    // required: true
  },
  buyerName: {
    type: String,
    required: true
  },
  buyerEmail: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  shippingAddress: {
   type: String,
   require: true,
  },
  // paymentDetails: {
  //   cardNumber: String,
  //   expirationDate: String,
  //   cvv: String
  // },
  orderDate: {
    type: Date,
    required: true,
  }
});

const Order = mongoose.model('Order', buyNowSchema);

module.exports = Order;
