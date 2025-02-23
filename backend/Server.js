const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TransactionRoutes = require('./routes/TransactionRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', TransactionRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/transactionsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(5000, () => console.log('Server running on port 5000'));
