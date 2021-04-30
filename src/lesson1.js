function sum(a,b){
    return `${a*b} ${a+b}`;
}

function sumString(a,b){
  if(typeof(a)=="string" && typeof(b)=="string"){
    let sum =a.length+b.length;
    return sum;
  }else {
      return "not string";
  }
}

function sumU(){
    let num= prompt('vvedi tri chisla');
      if(num.length==3){
        let a=+num[0];
        let b=+num[1];
        let c=+num[2];
        let sum = a+b+c;
          if(!isNaN(sum)){
            return sum
          } else{
            return 'Ne chislo'  ;
          }
      }
      else {
          return 'Slishkom mnogo znakov';
      }
}


module.exports = {
    "sum":sum,
    "sumString":sumString,
    "sumU":sumU

};

