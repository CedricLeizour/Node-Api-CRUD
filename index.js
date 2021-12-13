const express = require ('express');
const app = express();
require('./models/dbconfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');
const { append } = require('express/lib/response');

app.use(bodyParser.json());
app.use(cors({origin: 'https://cdpn.io'}));
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started : 5500'));