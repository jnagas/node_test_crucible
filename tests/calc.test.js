var should = require('should');
var calc = require('../lib/calc');


describe('calc', function() {
  describe('.add', function() {
    it('should return sum of 2 arguments', function() {
      var result = calc.add(1, 2);
      result.should.equal(3);
    });

    it('error', function() {
      var result = calc.add(1, 3);
      result.should.equal(4);
    });
  });
});
