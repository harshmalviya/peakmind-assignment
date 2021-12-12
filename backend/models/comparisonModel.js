const User = require("./userModel");
const mongoose = require("mongoose");

const comparisonSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A link must belong to a User"],
    select: false
  },
  cryptos: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Comparison = mongoose.model("Comparison", comparisonSchema);

module.exports = Comparison;
