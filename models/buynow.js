const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  // paymentDetails: {
  //   cardNumber: String,
  //   expirationDate: String,
  //   cvv: String
  // },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

const BuyNow = mongoose.model('BuyNow', buyNowSchema);

module.exports = BuyNow;
