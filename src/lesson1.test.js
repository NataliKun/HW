const lesson1 = require('./lesson1');

test('adds 1 + 2 to equal 2 3', () => {
  expect(lesson1.sum(1, 2)).toBe("2 3");
});
test("Sum two string a b", () =>{
    expect (lesson1.sumString("av", "asd")).toBe(5);
    expect (lesson1.sumString(1, "asd")).toBe("not string")
});
test("Sum num user", () =>{
    window.prompt = jest.fn(() => {return "123"});
    expect (lesson1.sumU()).toBe(6);
    window.prompt = jest.fn(() => {return "abc"});
    expect (lesson1.sumU()).toBe('Ne chislo');
    window.prompt = jest.fn(() => {return "1234"});
    expect (lesson1.sumU()).toBe("Slishkom mnogo znakov");
});


const lesson2 = require('./lesson2');

  test('a b diference', () => {
    expect(lesson2.difference(1, 2)).toBe(2);
    expect(lesson2.difference(1, 1)).toBe("equal");
    expect(lesson2.difference(1, "a")).toBe("not number");
  });

  test("Sum num user", () =>{
    window.prompt = jest.fn(() => {return "1"});
    expect (lesson2.month()).toBe("January");
    window.prompt = jest.fn(() => {return "a"});
    expect (lesson2.month()).toBe("no number");
    window.prompt = jest.fn(() => {return "1234"});
    expect (lesson2.month()).toBe("number not correct");
});

const lesson3 = require('./lesson3');

  test('retrn sum number 50-100', () => {
    expect(lesson3.sum()).toBe(3825);
  });

  test('retrn table multiplication 7', () => {
    expect(lesson3.mult()).toEqual( ["7*1=7", "7*2=14", "7*3=21", "7*4=28", "7*5=35", "7*6=42", "7*7=49", "7*8=56", "7*9=63"]);
  });
  
const lesson4 = require('./lesson4');

  test('obj admin', () => {
    window.prompt = jest.fn(() => {return "1"});
  expect (lesson4.userObj()).toBe("admin");
    window.prompt = jest.fn(() => {return "a"});
  expect (lesson4.userObj()).toBe("ne chislo");
});

const lesson5 = require('./lesson5');

  test('return arr', () => {
    expect(lesson5.arrSum()).toBe(55);
  });

  test('return New arr', () => {
    expect(lesson5.newArr()).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  test('return diference arr', () => {
    expect(lesson5.differenceArr([1,2,3,4])).toEqual("1 4");
    expect(lesson5.differenceArr("abc")).toBe("not arr");
    expect(lesson5.differenceArr([1,2,3,4,'f'])).toEqual('arr not correct');
  });

const lesson6 = require('./lesson6');

  test('more num', () => {
    expect(lesson6.diff(1,2)).toBe(2);
    expect(lesson6.diff(1,1)).toBe("equal");
    expect(lesson6.diff(1,"e")).toBe("no correct");
  });
  test('one word', () => {
    expect(lesson6.isWord("one")).toBe(true);
    expect(lesson6.isWord("one two")).toBe(false);
    expect(lesson6.isWord(1)).toBe("not string");
  });
  test('exponentiation', () => {
    expect(lesson6.pow(2,3)).toBe(8);
    expect(lesson6.pow('a',1)).toBe("not number");

  });