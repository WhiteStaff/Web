var express = require('express');
var router = express.Router();
const mysql = require("mysql2");

const db_options = {
    host:'maksimdu.beget.tech',
    user: 'maksimdu_sasha',
    database: 'maksimdu_sasha',
    password: 'srK5%9Ra'
};

/* GET users listing. */
router.get('/', (req, res) => {
    const connection = mysql.createConnection(db_options).promise();
    connection.query("SET SESSION wait_timeout = 604800");
    connection.query("SELECT * FROM cities").then(result=>{

        res.send(result[0])});

});

router.post('/', (req, res) => {
    var x = req.body;
    res.setHeader('content-type', 'application/json');
    const connection = mysql.createConnection(db_options).promise();
    connection.query("SET SESSION wait_timeout = 604800");
    console.log(x);
    connection.query("INSERT INTO `cities`(`city`) VALUES (\""+ req.body.cityname + "\")",  function(err) {
        if (err) {
            res.send(err.sqlMessage)
        } else {
            res.send("Add OK")};
    });
})

router.delete('/', async (req, res) => {
    const connection = mysql.createConnection(db_options).promise();
    connection.query("SET SESSION wait_timeout = 604800");
    connection.query("DELETE FROM `cities` WHERE city=\""+ req.body.cityname + "\"");
    res.send("Delete OK");
});


module.exports = router;
