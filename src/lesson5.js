export function arrSum(){
    let arr =[1,2,3,4,5,6,7,8,9,10];
    let sum = 0;
    for (let i=0; i<10 ;i++){
       sum += arr[i];
      }
    return sum
  }
export function newArr(){
  let arr =[1,2,3,4,5,6,7,8,9,10];
  let newArr=arr.map((element)=>{
      return element*2;
  })
  return newArr;
}

export function differenceArr(arr){
if(typeof(arr)== "object"){
   if(arr.every(element => typeof(element)=="number" )){
     arr.sort((a,b)=> a-b);
   return `${arr[0]} ${arr[arr.length-1]}`;
   }else{
     return 'arr not correct';
}} else {
    return "not arr";
}}