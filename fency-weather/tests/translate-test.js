const { assert } = require('chai');

const { translate } = require('../user/lang');

describe('Translate content', () => {
    it('Translates humidity to rus', () => {
        assert.equal(translate('ru', 'humidity'), 'Влажность');
    });

    it('Translates humidity to bel', () => {
        assert.equal(translate('be', 'humidity'), 'Вільготнасць');
    });

    it('Translates humidity to en', () => {
        assert.equal(translate('en', 'humidity'), 'Humidity');
    });
});
