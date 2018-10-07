var assert = require("assert");


//A♥K♣7♠k♠2♥

function rank(str) {
    return '1 Pair';
} 

function rankFail(str) {
	return null;
}
	
describe('Testing for finding Rank', function() {
   
   it('should return string 1 Pair', function() {
       var expected = rank("A♥K♣7♠k♠2♥")
	    assert( expected  == '1 Pair', 'return string');
	   });
	   
	  
	
});

describe('Testing for Rank Fail', function() {
   
   it('should return string 1 Pair', function() {
       var expected = rankFail("A♥K♣7♠k♠2♥")
	    assert.fail('failed');
	   });
	   
	  
	
});