const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    sold: { type: Boolean, default: false },
    dateOfSale: { type: Date, required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
