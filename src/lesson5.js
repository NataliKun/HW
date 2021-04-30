function arrSum(){
    let arr =[1,2,3,4,5,6,7,8,9,10];
    let sum = 0;
    for (i=0; i<10 ;i++){
       sum += arr[i];
      }
    return sum
  }
function newArr(){
  let arr =[1,2,3,4,5,6,7,8,9,10];
  let newArr=arr.map((element)=>{
      return element*2;
  })
  return newArr;
}

function differenceArr(arr){
if(typeof(arr)== "object"){
   if(arr.every(element => typeof(element)=="number" )){
     arr.sort(function(a,b){ 
     return a-b;
     });
 
   return `${arr[0]} ${arr[arr.length-1]}`;
   }else{
     return 'arr not correct';
}} else {
    return "not arr";
}};
  
module.exports = {
    "arrSum":arrSum,
    "newArr": newArr,
    "differenceArr":differenceArr
    
};