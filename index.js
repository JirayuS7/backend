var express = require('express')
var cors = require('cors')
const mysql = require('mysql2')
var app = express()

app.use(cors())


    const connection = mysql.createConnection({
        host:  process.env.DB_HOST || 'localhost',
        user:  process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME || 'exnesss'
    })  
// A simple SELECT query
 

app.get('/hello', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/users', function (req, res, next) {
  connection.query('SELECT * FROM `users`', function (error, results, fields) {
    if (error) throw error;

    
    res.json(results);
  });
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})