/**
 * Unit tests for the Node.js CLI Calculator App
 *
 * Tests cover:
 * - addition
 * - subtraction
 * - multiplication
 * - division (including division by zero)
 * - modulo (including modulo by zero)
 * - power
 * - square root (including negative numbers)
 */

const assert = require('assert');
const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✓ ${description}`);
    passed++;
  } catch (error) {
    console.error(`  ✗ ${description}`);
    console.error(`    ${error.message}`);
    failed++;
  }
}

// addition tests
console.log('\naddition:');
test('adds two positive numbers', () => {
  assert.strictEqual(addition(2, 3), 5);
});
test('adds a positive and a negative number', () => {
  assert.strictEqual(addition(5, -3), 2);
});
test('adds two negative numbers', () => {
  assert.strictEqual(addition(-4, -6), -10);
});
test('adds zero', () => {
  assert.strictEqual(addition(7, 0), 7);
});

// subtraction tests
console.log('\nsubtraction:');
test('subtracts two positive numbers', () => {
  assert.strictEqual(subtraction(10, 4), 6);
});
test('subtracts and yields a negative result', () => {
  assert.strictEqual(subtraction(3, 7), -4);
});
test('subtracts zero', () => {
  assert.strictEqual(subtraction(5, 0), 5);
});

// multiplication tests
console.log('\nmultiplication:');
test('multiplies two positive numbers', () => {
  assert.strictEqual(multiplication(3, 4), 12);
});
test('multiplies by zero', () => {
  assert.strictEqual(multiplication(5, 0), 0);
});
test('multiplies two negative numbers', () => {
  assert.strictEqual(multiplication(-2, -3), 6);
});
test('multiplies a positive and a negative number', () => {
  assert.strictEqual(multiplication(4, -3), -12);
});

// division tests
console.log('\ndivision:');
test('divides two positive numbers', () => {
  assert.strictEqual(division(10, 2), 5);
});
test('divides and returns a decimal', () => {
  assert.strictEqual(division(7, 2), 3.5);
});
test('throws error on division by zero', () => {
  assert.throws(() => division(5, 0), /Division by zero/);
});

// modulo tests
console.log('\nmodulo:');
test('returns remainder for positive numbers', () => {
  assert.strictEqual(modulo(10, 3), 1);
});
test('returns zero when evenly divisible', () => {
  assert.strictEqual(modulo(9, 3), 0);
});
test('throws error on modulo by zero', () => {
  assert.throws(() => modulo(5, 0), /Modulo by zero/);
});
test('handles negative dividend for modulo', () => {
  assert.strictEqual(modulo(-7, 3), -1);
});

// power tests
console.log('\npower:');
test('raises a number to a positive power', () => {
  assert.strictEqual(power(2, 10), 1024);
});
test('raises a number to the power of zero', () => {
  assert.strictEqual(power(5, 0), 1);
});
test('raises a number to the power of one', () => {
  assert.strictEqual(power(7, 1), 7);
});
test('raises a number to a negative power', () => {
  assert.strictEqual(power(2, -2), 0.25);
});
test('handles fractional power (square root equivalent)', () => {
  assert.strictEqual(power(9, 0.5), 3);
});

// square root tests
console.log('\nsquare root:');
test('calculates square root of a perfect square', () => {
  assert.strictEqual(squareRoot(25), 5);
});
test('calculates square root of 0', () => {
  assert.strictEqual(squareRoot(0), 0);
});
test('calculates square root of a non-perfect square', () => {
  assert.ok(Math.abs(squareRoot(2) - 1.4142135623730951) < 1e-10);
});
test('throws error for negative number square root', () => {
  assert.throws(() => squareRoot(-1), /Cannot calculate square root of a negative number/);
});

// Summary
console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exit(1);
}
