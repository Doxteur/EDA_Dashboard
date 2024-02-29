// EventSubscriber.js
import React, { useState, useEffect } from 'react';

const EventSubscriber = () => {
  const [channel, setChannel] = useState('mychannel');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const callbackURL = 'http://localhost:3001/callback'; // Port 3001 for the API

    // Subscribe to the channel when the component mounts
    fetch(`http://localhost:3001/subscribe/${channel}`, {  // Updated port for the API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ callbackURL }),
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error subscribing:', error));

    // Event listener to receive updates when events occur on the channel
    const eventSource = new EventSource(`http://localhost:3001/events/${channel}`);  // Updated port for the API
    eventSource.onmessage = (event) => {
        console.log('Received event:', event.data);
      const eventData = JSON.parse(event.data);
      setEvents(prevEvents => [...prevEvents, eventData]);
    };

    // Clean up event source on component unmount
    return () => {
      eventSource.close();
    };
  }, [channel]);

  return (
    <div>
      <h2>Event Subscriber</h2>
      <p>Subscribed to channel: {channel}</p>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{JSON.stringify(event)}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventSubscriber;
