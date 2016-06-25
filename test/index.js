var isHeroku = require('../');

var expect = require('expect.js');
var got = require('got');

describe('isHeroku', () => {

	it('Should return false locally', () => {
		expect(isHeroku()).to.not.be.ok();
	});

	it('Should return true on a Heroku instance', () => {

		// source for that instance: https://github.com/panstav/is-heroku-remote-test

		return got('https://is-heroku-remote-test.herokuapp.com/', { json: true }).then(res => {
			expect(res.body).to.have.key('result');
			expect(res.body.result).to.be.equal(true);
		});

	});

});