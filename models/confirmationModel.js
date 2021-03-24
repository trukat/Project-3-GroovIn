const mongoose = require("mongoose");

const confirmationSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
});

module.exports = Confirmation = mongoose.model(
  "confirmation",
  confirmationSchema
);
