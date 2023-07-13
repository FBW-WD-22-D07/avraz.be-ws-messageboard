
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  dates: {
    created: { type: Date, default: Date.now() },
    last_edited: Date
  },
  category: { type: String, enum: ['category1', 'category2', 'category3'] },
  deleted: Boolean
});

module.exports = mongoose.model('Message', messageSchema);
