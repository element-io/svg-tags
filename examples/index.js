
var tags = require( './../lib' );

console.log( JSON.stringify( tags ) );

/**
* Returns:
*	[
		'a',
		'altGlyph',
		...
	]
*/

console.log( tags.indexOf( 'desc' ) );
// Returns [index]