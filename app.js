const express = require('express');
const app = express();

const path = require('path');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    next();
});

app.options('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-acces-token');
    res.send(200);

})

const usersRouter = require('./routes/users');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/users', usersRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

app.listen(process.env.PORT || 3001);
