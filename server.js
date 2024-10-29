require('dotenv').config();

const express = require('express');

const cors = require('cors');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const db = require('./middleware/dbConnectionMiddleware');

const networkController = require('./routes/networkController');
const singleClientController = require('./routes/singleClientController');

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use((err, _, res, __) =>
  res.status(err.status).json({ message: err.message })
);

app.use('/netlog', networkController);
app.use('/clientlog', singleClientController);

app.get('/webpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WS: Client connected');
});

app.options('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.post('/log', (req, res) => {
  console.log(req.body);
  // TODO : add client id (time + client id + message)
  const final_log_message = `${new Date().toISOString()} - ${JSON.stringify(req.body.message).replaceAll("\"", "")}`;

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(final_log_message);
    }
});
  
  res.status(200).send('Log message sent to clients');
});

server.listen(3000, () => console.log('Synapse Log Server started on port 3000'));
