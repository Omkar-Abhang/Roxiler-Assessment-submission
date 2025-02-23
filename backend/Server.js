const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TransactionRoutes = require('./routes/TransactionRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', TransactionRoutes);


// Connect to MongoDB using environment variable
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));