//To run: mocha -u tdd -R spec qa/tests-unit.js
var fortune = require ('../lib/fortune.js');
var expect = require ('chai').expect;

suite ('Fortune cookie tests', function(){
	
	test('getfortune() should return a fortune', function(){
		expect(typeof fortune.getFortune() === 'string');
		
	});
	
});