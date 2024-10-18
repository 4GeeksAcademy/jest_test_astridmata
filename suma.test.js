// archivo: sum.test.js
const {sum, resta} = require('./sum');

test('suma 1 + 2 para obtener 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('resta 10 - 5 para obtener 5', () => {
    expect(resta(10,5)).toBe(5);
  });


