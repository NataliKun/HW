import {eqTri, circle} from'./lesson9';

test('является ли треугольник прямоугольным', () => {
  expect(eqTri(3,4,5)).toBe(true);
  expect(eqTri(3,4,6)).toBe(false);
  expect(eqTri(3,4,'n')).toBe(false);
});
test('вывести площадь и длину окружности ', () => {
  expect(circle(3)).toBe("28, 19");
  expect(circle('n')).toBe("NaN, NaN");
  });