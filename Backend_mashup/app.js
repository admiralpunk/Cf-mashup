const express = require('express');
const morgan = require('morgan');
const router = require(`${__dirname}/routes/mashupRouter`);

const app = express();
const cors = require("cors");

app.use(morgan('dev'));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use('/api/v1/codeforces', router);

module.exports = app;
