var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const mock = require("../public/javascripts/mock")
/* GET weather listing. */
router.get('/', async (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
        .then((response) => {
            if (response.status === 404) {
                throw Error("404");
            }
            return response;
        })
        .then((response) => response.json())
        .then((response) => {
            res.send(response)
        })
        .catch((error) => {
            if (error.message === "404")
                res.send(404);
            else {
                console.log("апи снова буянит");
                res.send(mock);
            }
        })
    //if (response.) res.send(mock)})

})
router.get('/coordinates', async (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.long}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
        .then((response) => response.json())
        .then((response) => {
            res.send(response)
        })
        .catch(() => {
            console.log("апи снова буянит");
            res.send(mock)
        })
})


module.exports = router;
