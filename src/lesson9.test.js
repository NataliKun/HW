const lesson9 = require('./lesson9');

test('является ли треугольник прямоугольным', () => {
  expect(lesson9.eqTri(3,4,5)).toBe(true);
  expect(lesson9.eqTri(3,4,6)).toBe(false);
  expect(lesson9.eqTri(3,4,'n')).toBe(false);
});
test('вывести площадь и длину окружности ', () => {
  expect(lesson9.circle(3)).toBe("28, 19");
  expect(lesson9.circle('n')).toBe("NaN, NaN");
  });