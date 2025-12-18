const express = require('express');
const usersRoute = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs')

const app = express()

// app.method(path, handler);

app.use(middlewareLogRequest);

app.use('/users', usersRoute);

app.use('/', (req, res) => {
    res.json({
        name: "Don",
        mail: "fataadnan@gmail.com",
    });
})


app.listen(4000, () => {
    console.log('Server berhasil dirunning di port 4000')
})