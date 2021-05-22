if (!module) {
  const button= document.querySelector('.button');
  const input= document.querySelector('.text')
  button.hidden=true
  let calc = 0 
  button.addEventListener('click',alertClick);
  input.addEventListener('input', hiddenButton);
} else {
  module.exports = {
    "stackMax": stackMax
  }
}

function alertClick(){
 
  stackMax(document, calc)

  let p = document.createElement("p")
  p.id = calc
  p.append(input.value);
  document.querySelector('body').append(p);
  input.value = '' ;
  button.hidden = true;
  calc +=1;   
}

function hiddenButton(){
  if (input.value==""){
    button.hidden=true
  }else{
    button.hidden=false
  }
}

function stackMax(doc, calc){
  if(calc>4){
    l = doc.getElementById(calc-5)
    // l = doc.querySelector(`#${calc-5}`)  
    l.remove() 
  }
}