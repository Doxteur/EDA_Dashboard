const express = require('express');
const bodyParser = require('body-parser');
const { EventEmitter } = require('events');

const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
const eventEmitter = new EventEmitter();

app.post('/subscribe/:channel', (req, res) => {
    const { channel } = req.params;
    const { callbackURL } = req.body;
    console.log(`Subscribing to channel ${channel} with callback URL:`, callbackURL);

    eventEmitter.on(channel, (data) => {
        console.log(`Sending data to ${callbackURL}:`, data);
        // Simulate sending data to the callbackURL (adjust as needed)
    });

    res.status(200).send(`Subscribed to channel ${channel}`);
});

// Endpoint for handling events
app.get('/events/:channel', (req, res) => {
    const { channel } = req.params;
    const sendEvent = (data) => res.write(`data: ${JSON.stringify(data)}\n\n`);

    // Set up server-sent events (SSE)
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });

    // Listen for events on the channel
    eventEmitter.on(channel, sendEvent);

    // Clean up event listener on client disconnect
    req.on('close', () => {
        eventEmitter.removeListener(channel, sendEvent);
    });
});

app.post('/publish/:channel', (req, res) => {
    const { channel } = req.params;
    const eventData = req.body;

    eventEmitter.emit(channel, eventData);

    res.status(200).send(`Event published to channel ${channel}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
