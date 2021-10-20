import {task1 } from'./lesson8';
test('prompt вызываеся, выводит корректный день', () => {

window.prompt = jest.fn(() => {return "21.05.2021"});
window.alert = jest.fn(() => {return ""});

task1()    
expect(window.alert).toBeCalledWith('пятница')

})
test('prompt вызываеся, выводит ошибку, при ошибке формата', () => {
  window.prompt = jest.fn(() => {return "ww.05.2021"});
  window.alert = jest.fn(() => {return ""}); 
  task1()    
  expect(window.alert).toBeCalledWith('неверный формат') 
})

test('prompt вызываеся, выводит ошибку, при ошибке формата', () => {
  window.prompt = jest.fn(() => {return "ww"});
  window.alert = jest.fn(() => {return ""});
    
  task1()    
  expect(window.alert).toBeCalledWith('неверный формат')
})