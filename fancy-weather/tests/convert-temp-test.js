const { assert } = require('chai');

const { toFahrenheit, toCelsius } = require('../user/convert-temperature');

describe('Temperature unit convertation', () => {
    it('Converts from Celsius to Fahrenheit', () => {
        assert.equal(toFahrenheit(0), 32);
    });

    it('Converts from Celsius to Fahrenheit', () => {
        assert.equal(toFahrenheit(5), 41);
    });

    it('Converts from Fahrenheit to Celsius', () => {
        assert.equal(toCelsius(32), 0);
    });

    it('Converts from Fahrenheit to Celsius', () => {
        assert.equal(toCelsius(41), 5);
    });
});
