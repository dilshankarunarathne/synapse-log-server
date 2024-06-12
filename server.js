require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./middleware/dbConnectionMiddleware');

const networkController = require('./routes/networkController');
const singleClientController = require('./routes/singleClientController');

app.use(cors());
app.use(express.json());

app.use('/netlog', networkController);
app.use('/clientlog', singleClientController);

app.listen(3000, () => console.log('Server started on port 3000'));
