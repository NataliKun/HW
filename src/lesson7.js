export function alertClick(button, input){
  let p = document.createElement("p")
  p.append(input.value);
  document.querySelector('body').append(p);
  input.value = '' ;
  button.hidden = true;
}

export function hiddenButton(button, input){
  if (input.value==""){
    button.hidden=true
  }else{
    button.hidden=false
  }
}