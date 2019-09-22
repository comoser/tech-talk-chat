const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const socketio = require('socket.io');

dotenv.config();
const app = express();
const server = require('http').createServer(app);
const io = socketio(server);

app.use(cors());
app.use(bodyParser());

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('CHAT_MESSAGE_SENT', (chatMessageData) => {
        console.log(chatMessageData);
        io.emit('CHAT_MESSAGE_RECEIVED', chatMessageData);
    })
});

app.get('/', (req, res) => {
    res.send({
        status: 200,
        response: 'READY TO LISTEN FOR SOCKET EVENTS'
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
