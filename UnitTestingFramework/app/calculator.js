/**
 *
 * A simple class containing methods for adding and multyplying numbers
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {

  };

  /**
   *
   *
   * @param {Number} numbers numbers to add
   * @return {Number} a sum of given numbers
   * @memberof Calculator
   */
  add(...numbers) {
    if (numbers.length === 0) {
      throw new Error(`There aren't numbers to add!`);
    }
    return numbers.reduce((acc, item) => acc + item);
  };

  /**
   *
   *
   * @param {Number} numbers numbers to multiply
   * @return {Number} a product of given numbers
   * @memberof Calculator
   */
  multiply(...numbers) {
    if (numbers.length === 0) {
      throw new Error(`There aren't numbers to multiply!`);
    }
    return numbers.reduce((acc, item) => acc * item);
  };
};

module.exports = Calculator;
