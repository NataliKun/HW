export function sum3(){
  let result = 0;
  for (let i=50 ; i<101 ; i++){
      result +=i;
  }
  return result
}

export function mult(){
let table =[] 
 for(let i=1 ; i<10 ; i++){
  table.push(`7*${i}=${7*i}`);
 }
  return table;
}