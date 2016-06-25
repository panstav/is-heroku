var isHeroku = require('../');

var expect = require('expect.js');

describe('isHeroku', function(){

	it('Should return false locally', function(){
		expect(isHeroku()).to.not.be.ok();
	});

});