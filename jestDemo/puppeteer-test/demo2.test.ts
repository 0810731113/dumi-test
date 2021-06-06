const sum = require('./demo2');
test('add 1 + 2 to equire 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
  const z = 0;
});

test('zeno', () => {
  const z = 0;
  expect(z).not.toBeNull();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThanOrEqual(3.5);
});

test('两个浮点数相加', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});
