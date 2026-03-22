/**
 * Node.js CLI Calculator App
 *
 * This calculator supports the following operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - square root
 */

/**
 * Performs addition of two numbers.
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} The sum of a and b
 */
function addition(a, b) {
  return a + b;
}

/**
 * Performs subtraction of two numbers.
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} The difference of a and b
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Performs multiplication of two numbers.
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} The product of a and b
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * Performs division of two numbers.
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Performs modulo operation (remainder).
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Raises a number to a power.
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The result of base raised to exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number.
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: node calculator.js <operation> <num1> [num2]');
    console.log('Operations: addition, subtraction, multiplication, division, modulo, power, squareRoot');
    process.exit(1);
  }

  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = args[2] !== undefined ? parseFloat(args[2]) : undefined;

  if (isNaN(num1)) {
    console.error(`Error: '${args[1]}' is not a valid number`);
    process.exit(1);
  }
  if (args[2] !== undefined && isNaN(num2)) {
    console.error(`Error: '${args[2]}' is not a valid number`);
    process.exit(1);
  }

  let result;
  try {
    switch (operation) {
      case 'addition':
        result = addition(num1, num2);
        break;
      case 'subtraction':
        result = subtraction(num1, num2);
        break;
      case 'multiplication':
        result = multiplication(num1, num2);
        break;
      case 'division':
        result = division(num1, num2);
        break;
      case 'modulo':
        result = modulo(num1, num2);
        break;
      case 'power':
        result = power(num1, num2);
        break;
      case 'squareRoot':
        result = squareRoot(num1);
        break;
      default:
        console.error(`Unknown operation: ${operation}`);
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
