const Calculator = require('../../app/calculator');
const {assert} = require('chai');

describe('method add positive csenarios', function() {
  let calcul;
  beforeEach(function() {
    calcul = new Calculator();
  });
  afterEach(function() {
    calcul = null;
  });
  it('2 plus 3 equals 5', function() {
    assert.equal(calcul.add(2, 3), 5);
  });
  it('one number to add', function() {
    assert.equal(calcul.add(2), 2);
  });
  it('one of numbers are negative', function() {
    assert.equal(calcul.add(2, -1, 5), 6);
  });
  it('a sum of opposite numbers is zero', function() {
    assert.equal(calcul.add(5, -5), 0);
  });
  it('a sum of negative numbers is negative number', function() {
    assert.equal(calcul.add(-1, -2, -3, -5), -11);
  });
});

describe('method add negative csenarios', function() {
  let calcul;
  beforeEach(function() {
    calcul = new Calculator();
  });
  afterEach(function() {
    calcul = null;
  });
  it('no arguments for adding', function() {
    assert.throws(() => {
      calcul.add();
    }, Error, `There aren't numbers to add!`);
  });
});

