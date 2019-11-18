var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', async (req, res) => {
    //res.send(req.query.city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((response)=>res.send(response))
        .catch(() => res.send("Ашипка"))
})

router.get('/coordinates', (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.long}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            console.log(response);
            return response;
        })
        .then((response) => response.json())
        .then((response)=>res.send(response))
})




module.exports = router;
