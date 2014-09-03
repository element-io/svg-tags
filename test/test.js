// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	tags = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'svg-tags', function tests() {
	'use strict';

	it( 'should export an array', function test() {
		expect( tags ).to.be.an( 'array' );
	});

});