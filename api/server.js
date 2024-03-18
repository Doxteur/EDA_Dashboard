const express = require("express");
const bodyParser = require("body-parser");
const { EventEmitter } = require("events");
const cors = require("cors");

const app = express();
const port = 3001;

// Initialize Express middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize EventEmitter
const eventEmitter = new EventEmitter();

// Subscribe to a channel
app.post("/subscribe/:channel", handleSubscribe);

// Handle events on a channel
app.get("/events/:channel", handleEvents);

// Publish an event to a channel
app.post("/publish/:channel", handlePublish);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

function handleSubscribe(req, res) {
  const { channel } = req.params;
  const { callbackURL } = req.body;
  console.log(`Subscribing to channel ${channel} with callback URL:`, callbackURL);

  eventEmitter.on(channel, (data) => {
    console.log(`Sending data to ${callbackURL}:`, data);
  });

  res.status(200).send(`Subscribed to channel ${channel}`);
}

function handleEvents(req, res) {
  const { channel } = req.params;
  const sendEvent = (data) => res.write(`data: ${JSON.stringify(data)}\n\n`);

  // Set up server-sent events (SSE)
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Listen for events on the channel
  eventEmitter.on(channel, sendEvent);

  // Clean up event listener on client disconnect
  req.on("close", () => {
    eventEmitter.removeListener(channel, sendEvent);
  });
}

function handlePublish(req, res) {
  const { channel } = req.params;
  const eventData = req.body;
  eventEmitter.emit(channel, eventData);

  res.status(200).send(`Event published to channel ${channel}`);
}
