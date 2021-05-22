const lesson10 = require('./lesson10');

test('соответствие формату даты', () => {
  expect(lesson10.date('10.11.2020')).toBe(true);
  expect(lesson10.date('2223')).toBe(false);
});
test('корректность mail ', () => {
    expect(lesson10.mail('test@mail.ru')).toBe(true);
    expect(lesson10.mail('TesT2@google.com')).toBe(true);
    expect(lesson10.mail('test')).toBe(false);
  });