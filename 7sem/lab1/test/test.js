/*var assert = require('chai').assert;
const phantom = require('phantom');

describe('Array', function () {
    it('Проверка', async function () {
        this.timeout(10000);

        const meow = await (async function () {
            const instance = await phantom.create();
            const page = await instance.createPage();
            await page.on('onResourceRequested', function (requestData) {
                //console.info('Requesting', requestData.url);
            });

            const status = await page.open('http://localhost:8080');
            const content = await page.property('content');
            //console.log(content);
            var a = await findWeatherDetails();

            var ua = await page.evaluate(function () {
                return document.getElementById('result').textContent;
            });
            await instance.exit();
            return (ua);

        })();

        assert.equal(meow, 'Введи что-ниб');
    });

});*/
