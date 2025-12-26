require('dotenv').config();

const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const middlewareLogRequest = require('./middleware/logs');

const app = express()

// app.method(path, handler);

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoute);
app.use('/products', productsRoute);

app.listen(PORT, () => {
    console.log(`Server berhasil dirunning di port ${PORT}`);
    console.log(`API running on http://localhost:${PORT}`);
    console.log(`Android emulator: http://10.0.2.2:${PORT}`);
})