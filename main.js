const express = require('express');
const axios = require('axios');
const app = express();

// Port the application will run on
const PORT = 3000;

// Endpoint: /app-1 - Returns the instance public IP
app.get('/app-1', async (req, res) => {
    try {
        // Fetch public IP from an external service
        const response = await axios.get('http://169.254.169.254/latest/meta-data/public-ipv4');
        const publicIp = response.data;
        res.send(`Instance Public IP: ${publicIp}`);
    } catch (error) {
        console.error('Error fetching public IP:', error.message);
        res.status(500).send('Unable to fetch public IP.');
    }
});

// Endpoint: /app-2 - Returns "Hello World"
app.get('/app-2', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
