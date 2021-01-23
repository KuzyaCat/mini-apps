const { assert } = require('chai');

const { getSeason } = require('../user/date');

describe('Get current season of the year', () => {
    it('Must return winter', () => {
        assert.equal(getSeason(), 'winter');
    });
});
