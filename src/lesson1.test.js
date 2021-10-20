import {sum, sumString, sumU} from './lesson1.js';

test('adds 1 + 2 to equal 2 3', () => {
  expect(sum(1, 2)).toBe("2 3");
});
test("Sum two string a b", () =>{
    expect (sumString("av", "asd")).toBe(5);
    expect (sumString(1, "asd")).toBe(4)
});
test("Sum num user", () =>{
    window.prompt = jest.fn(() => {return "123"});
    expect (sumU()).toBe(6);
    window.prompt = jest.fn(() => {return "abc"});
    expect (sumU()).toBe('Ne chislo');
    window.prompt = jest.fn(() => {return "1234"});
    expect (sumU()).toBe("Slishkom mnogo znakov");
});


import {difference, month} from './lesson2';

  test('a b diference', () => {
    expect(difference(1, 2)).toBe(2);
    expect(difference(1, 1)).toBe('equal');
  });

  test("Sum number user", () =>{
    let m = jest.fn(() => {return "1"}); 
    window.prompt = m
    expect (month()).toBe("January");
    window.prompt = jest.fn(() => {return "a"});
    expect (month()).toBe("no number");
    window.prompt = jest.fn(() => {return "1234"});
    expect (month()).toBe("number not correct");
});

import {sum3, mult} from './lesson3';

  test('retrn sum number 50-100', () => {
    expect(sum3()).toBe(3825);
  });

  test('retrn table multiplication 7', () => {
    expect(mult()).toEqual( ["7*1=7", "7*2=14", "7*3=21", "7*4=28", "7*5=35", "7*6=42", "7*7=49", "7*8=56", "7*9=63"]);
  });
  
import {userObj} from './lesson4';

  test('obj admin', () => {
    window.prompt = () => {return "1"};
  expect (userObj()).toBe("admin");
    window.prompt = jest.fn(() => {return "a"});
  expect (userObj()).toBe("ne chislo");
});

import {arrSum, newArr, differenceArr } from'./lesson5';

  test('return arr', () => {
    expect(arrSum()).toBe(55);
  });

  test('return New arr', () => {
    expect(newArr()).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  test('return diference arr', () => {
    expect(differenceArr([1,2,3,4])).toEqual("1 4");
    expect(differenceArr("abc")).toBe("not arr");
    expect(differenceArr([1,2,3,4,'f'])).toEqual('arr not correct');
  });

  import {diff, isWord, pow } from'./lesson6';

  test('more num', () => {
    expect(diff(1,2)).toBe(2);
    expect(diff(1,1)).toBe('equal');
    expect(diff(31,1)).toBe(31);
  });
  test('one word', () => {
    expect(isWord("one")).toBe(true);
    expect(isWord("one two")).toBe(false);
    expect(isWord(1)).toBe("not string");
  });
  test('exponentiation', () => {
    expect(pow(2,3)).toBe(8);
    expect(pow('a',1)).toBe("not number");

  });