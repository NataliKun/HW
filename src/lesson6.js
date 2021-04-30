function diff(a,b){
if (!isNaN(a) &&!isNaN(b)){
  if(a>b){
    return a;
  }else if(b>a){
    return b ;
  }else{
    return "equal" ; 
  }
}else{
    return "no correct";
}};

function isWord(string){
  if(typeof(string)=="string") {
    if( string.lastIndexOf(" ") == -1 ){
      return true;
    } else{
      return false;
    }
  }else{
    return "not string";
}};

function pow(a,x){
  if (typeof(a)=="number" && typeof(x)=="number"){
    return (a**x);
  }else{
    return "not number";
  }
}
module.exports = {
    "diff":diff,
    "isWord":isWord,
    "pow": pow    
};