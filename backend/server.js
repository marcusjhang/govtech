const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Add API
app.post('/api/add', (req, res) => {
    const num1 = parseFloat(req.body.num1) || 0;
    const num2 = parseFloat(req.body.num2) || 0;
    const result = num1 + num2;
    res.json({ result });
});

// Subtract API
app.post('/api/subtract', (req, res) => {
    const num1 = parseFloat(req.body.num1) || 0;
    const num2 = parseFloat(req.body.num2) || 0;
    const result = num1 - num2;
    res.json({ result });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});