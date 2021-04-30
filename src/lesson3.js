function sum(){
  let result = 0;
  for (i=50 ; i<101 ; i++){
      result +=i;
  }
  return result
}

function mult(){
let table =[] 
 for( i=1 ; i<10 ; i++){
  table.push(`7*${i}=${7*i}`);
 }
  return table;
}




module.exports = {
    "sum":sum,
    "mult": mult,
    
        
};