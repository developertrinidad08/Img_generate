const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;
const app = express();

// enable body parser
app.use(express.json());
app.use(express.urlencoded({extend:false}));

// set static folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, () => console.log(`Server Started on port ${port}`));
app.set('port',process.env.PORT || 4000 );
