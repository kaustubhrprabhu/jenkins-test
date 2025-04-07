const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: 'operational'
    })
});

app.get('/api/ping', (req, res) => {
    res.json({
        message: 'Pong!',
    })
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});