const mongoose = require("mongoose");
const User = require("./user");

const SoilTestSchema = new mongoose.Schema({
  sampleId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  pH: Number,
  moisture: Number,
  nutrients: {
    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
  },
  comments: String,
});

const SoilTest = mongoose.model("SoilTest", SoilTestSchema);
module.exports = SoilTest;
