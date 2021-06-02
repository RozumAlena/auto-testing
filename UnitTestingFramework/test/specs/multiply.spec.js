const Calculator = require('../../app/calculator');
const {assert} = require('chai');

describe('method multiply positive csenarios', function() {
  let calcul;
  beforeEach(function() {
    calcul = new Calculator();
  });
  afterEach(function() {
    calcul = null;
  });
  it('2 times 3 equals 6', function() {
    assert.equal(calcul.multiply(2, 3), 6);
  });
  it('one number to multiply', function() {
    assert.equal(calcul.multiply(2), 2);
  });
  it('one of numbers are negative', function() {
    assert.equal(calcul.multiply(2, -1, 5), -10);
  });
  it('a number timeszero equals zero', function() {
    assert.equal(calcul.multiply(5, 0), 0);
  });
  it('a multiply of negative numbers is positive number', function() {
    assert.equal(calcul.multiply(-2, -5), 10);
  });
});

describe('method multiply negative csenarios', function() {
  let calcul;
  beforeEach(function() {
    calcul = new Calculator();
  });
  afterEach(function() {
    calcul = null;
  });
  it('no arguments for times', function() {
    assert.throws(() => {
      calcul.multiply();
    }, Error, `There aren't numbers to multiply!`);
  });
});
