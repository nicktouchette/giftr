var mongoose = require('mongoose');

var giftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  recipientType: {
    type: Array,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  description: {
    type: String
  },
  tags: {
    type: Array,
    required: true
  },
  rating: {
    type: Number
  },
  userId: {
    type: String
  },
});

module.exports = mongoose.model('Gift', giftSchema);
