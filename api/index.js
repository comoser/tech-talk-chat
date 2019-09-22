const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const socketio = require('socket.io');
const redis = require('redis');

const redisClient = redis.createClient({
    host: 'redis-server'
});
dotenv.config();
const app = express();
const server = require('http').createServer(app);
const io = socketio(server);

app.use(cors());
app.use(bodyParser());

redisClient.on('connect', () => {
    console.log('connected to redis');
});

redisClient.on('error', (err) => {
    console.log('error connecting to redis');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('CHAT_MESSAGE_SENT', (chatMessageData) => {
        redisClient.get('messages', (err, messagesJson) => {
            const messages = messagesJson ? JSON.parse(messagesJson) : [];
            messages.push(chatMessageData);
            redisClient.set('messages', JSON.stringify(messages));
        });
        io.emit('CHAT_MESSAGE_RECEIVED', chatMessageData);
    })
});

app.get('/', (req, res) => {
    res.send({
        status: 200,
        response: 'READY TO LISTEN FOR SOCKET EVENTS',
    });
});

app.get('/history', (req, res) => {
    redisClient.get('messages', (err, data) => {
        res.send({
            status: 200,
            response: JSON.parse(data) || [],
        })
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
