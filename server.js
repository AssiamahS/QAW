// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Ticket = require('./models/Ticket'); // Import the Ticket model

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/support_tickets'; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to submit a ticket
app.post('/submit-ticket', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (name && email && subject && message) {
        const newTicket = new Ticket({ name, email, subject, message });

        newTicket.save()
            .then(ticket => {
                console.log('Ticket submitted:', ticket);
                res.json({ success: true, ticketId: ticket._id });
            })
            .catch(err => {
                console.error('Error saving ticket:', err);
                res.status(500).json({ success: false, message: 'Failed to submit ticket' });
            });
    } else {
        res.status(400).json({ success: false, message: 'All fields are required.' });
    }
});

// Serve success.html
app.get('/success.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
