const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

// Listen for new connections
io.on('connection', (socket) => {
    console.log('a user connected');

    // Handle incoming message
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

// Change the port to 3000 (or any other port you prefer)
const port = process.env.PORT || 3000; 

// Start the server on the new port
http.listen(port, () => {
    console.log(`listening on http://localhost:${5000}`);
});
