/* eslint-disable no-undef */
function sum(a, b) {
  return a + b;
}

test('Sum function should return sum of two values', () => {
  expect(sum(5)(2)).toBe(7);
});
