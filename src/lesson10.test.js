import {date, mail} from'./lesson10';

test('соответствие формату даты', () => {
  expect(date('10.11.2020')).toBe(true);
  expect(date('2223')).toBe(false);
});
test('корректность mail ', () => {
    expect(mail('test@mail.ru')).toBe(true);
    expect(mail('TesT2@google.com')).toBe(true);
    expect(mail('test')).toBe(false);
  });