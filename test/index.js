var isHeroku = require('../');

var expect = require('expect.js');
var got = require('got');

describe('isHeroku', function(){

	it('Should return false locally', function(){
		expect(isHeroku()).to.not.be.ok();
	});

	it('Should return true on a Heroku instance', function(){

		// source for that instance: https://github.com/panstav/is-heroku-remote-test

		return got('https://is-heroku-remote-test.herokuapp.com/', { json: true }).then(function(res){
			expect(res.body).to.have.key('result');
			expect(res.body.result).to.be.equal(true);
		});

	});

});