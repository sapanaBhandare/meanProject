const express = require("express");
const cors = require("cors");
const proxy = require('express-http-proxy');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/cart', proxy('http://localhost:7001'));
app.use('/user', proxy('http://localhost:7002'));
app.use('/product', proxy('http://localhost:7003'));
app.listen(7000, () => {
console.log('Gateway is Listening to Port 7000');
});