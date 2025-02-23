require("dotenv").config(); // Load environment variables from .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TransactionRoutes = require('./routes/TransactionRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', TransactionRoutes);

// Check if MONGO_URI is loaded
if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is not defined in .env file!");
    process.exit(1);
}

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));