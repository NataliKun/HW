function eqTri(a,b,c){
if(a*a + b*b == c*c ||
   c*c + b*b == a*a ||
   c*c + a*a == b*b){
    return true;
   
}else {
    return false;
}}

function circle(r){
    let area = Math.PI * (r * r);
    let leng = 2* Math.PI * r;
    return (`${Math.round(area, -1)}, ${Math.round(leng, -1)}`)
  }
  

module.exports = {
    "eqTri":eqTri,
    "circle":circle,
};