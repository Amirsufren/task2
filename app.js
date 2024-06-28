const express = require('express');
const path = require('path');
const tableRoutes = require('./routes/tableRoutes');

const app = express();

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, 'views')));

// Use the table routes for API requests
app.use('/api', tableRoutes);

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
