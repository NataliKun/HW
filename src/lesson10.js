function date(d){
  const regexp =/\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
  return (regexp.test(d))

}
function mail(str){
    const reg = /[\da-z\.]+@[\da-z]+\.[a-z]+/i;
    return (reg.test(str));
  }
 
 module.exports = {
    "date":date,
    "mail":mail,
};