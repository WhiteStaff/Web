var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET weather listing. */
router.get('/', async (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((response) => res.send(response))
        .catch(() => res.send("Ашипка"))
})

router.get('/coordinates', async (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.long}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
        .then((response) => {
            if (!response.ok) {
                res.send(response);
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((response) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            console.log("send");
            res.send(response)
        })
})


module.exports = router;
