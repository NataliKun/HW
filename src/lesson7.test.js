import { alertClick, hiddenButton } from "./lesson7";

test('hidenButton', () => {

var input={value:''}
var button={hidden:true} 
hiddenButton(input,button)
expect(button.hidden).toBe(true)
 
})


test('alertClick', () =>{ 
  const append = jest.fn(() => {})
  window.document.createElement = jest.fn(() => {
      return {
          append: append
      }
  })

  window.document.querySelector = jest.fn(() => {
    return {
        append: append
    }
})
  var input={value:'AAAAAAA'}
  var button={hidden:false} 

  alertClick(button, input)

  expect(input.value).toBe("")
  expect(button.hidden).toBe(true)
  expect(window.document.createElement).toBeCalled()
  expect(append).toBeCalledWith('AAAAAAA')
  expect(window.document.querySelector).toBeCalled()
})