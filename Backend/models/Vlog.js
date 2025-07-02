const mongoose = require('mongoose');

const vlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  thumbnail: String, // New field
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vlog', vlogSchema);
