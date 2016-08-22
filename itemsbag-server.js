
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var mysql = require('mysql');
function getConnection(){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cosmo_world'
    });
    return connection;
};

var lijst = [];

app.listen(3000, function () {
    console.log('content itemsbag app on port 3000');
});

app.use(express.static('public'));


// itemsbag database
app.post('/itemsbag', function (req, res) {
    var connection = getConnection();
    connection.connect();
    var newItem = {
        id: 0,
        itemName: req.body.itemName,
        itemDescr: req.body.itemDescr,
        itemAbi: req.body.itemAbi,
        itemHit: req.body.itemHit,
        itemHeal: req.body.itemHeal
    };
    var query = connection.query(
        'INSERT INTO itemsbag SET ?',
        newItem,
        function (err, result) {
            console.log("added " +  newItem.itemName);
            res.status(100).end();
        });
    connection.end();
});

app.get('/itemsbag', function(req, res) {
    var connection = getConnection();
    connection.connect();
    connection.query(
        'SELECT * from itemsbag order by id desc',
        function(err, rows, fields) {
            if (!err) {
                //console.log(rows);
                res.send(JSON.stringify(rows));
            }
            else {
                console.log('Error while performing Query.');
            }
        });
    connection.end();
});

app.delete('/itemsbag/:itemName', function(req, res) {
    var Name = req.params.itemName;
    var connection = getConnection();
    console.log("deleted " + Name);
    connection.connect();
    connection.query('DELETE from itemsbag where itemName = ?', Name,  function(err, rows, fields) {

        res.status(200).end();
    });
    connection.end();
});


// recipe database
app.post('/recipe', function (req, res) {
    var connection = getConnection();
    connection.connect();
    var newItem = {
        id: 0,
        mixItemName: req.body.mixItemName,
        itemName1: req.body.itemName1,
        itemName2: req.body.itemName2
    };
    var query = connection.query(
        'INSERT INTO recipe SET ?',
        newItem,
        function (err, result) {
            console.log("added " +  newItem.mixItemName);
            res.status(100).end();
        });
    connection.end();
});

app.get('/recipe', function(req, res) {
    var connection = getConnection();
    connection.connect();
    connection.query(
        'SELECT * from recipe order by id desc',
        function(err, rows, fields) {
            if (!err) {
                //console.log(rows);
                res.send(JSON.stringify(rows));
            }
            else {
                console.log('Error while performing Query.');
            }
        });
    connection.end();
});

// app.delete('/itemsbag/:itemName', function(req, res) {
//     var Name = req.params.itemName;
//     var connection = getConnection();
//     console.log("deleted " + Name);
//     connection.connect();
//     connection.query('DELETE from itemsbag where itemName = ?', Name,  function(err, rows, fields) {
//
//         res.status(200).end();
//     });
//     connection.end();
// });


// mixeditems database
app.get('/mixeditems', function(req, res) {
    var connection = getConnection();
    connection.connect();
    connection.query(
        'SELECT * from mixeditems order by id desc',
        function(err, rows, fields) {
            if (!err) {
                //console.log(rows);
                res.send(JSON.stringify(rows));
            }
            else {
                console.log('Error while performing Query.');
            }
        });
    connection.end();
});

app.delete('/mixeditems/:itemName', function(req, res) {
    var Name = req.params.itemName;
    var connection = getConnection();
    console.log("deleted " + Name);
    connection.connect();
    connection.query('DELETE from itemsbag where itemName = ?', Name,  function(err, rows, fields) {

        res.status(200).end();
    });
    connection.end();
});
