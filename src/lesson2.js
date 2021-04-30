function difference(a,b){
    if (typeof(a)=='number'&&typeof(b)=='number'){
      if (a>b){
          return a;
      } else if (b>a){
          return b;
      } else {
        return  "equal" ;
      }
    } else{
        return "not number";
    }
}

function month(){
  let num = +prompt('number month');
  let month= ["January","February","March","April","May","June","July","August","September","October","November","December"]
  if(!isNaN(num)){
    if(num<=12 && num%1==0 ){
     return month[num-1]
    } else {
      return "number not correct";
    }
  }else{
    return "no number";
}}
 
module.exports = {
    "difference":difference,
    "month": month,
    
};
