export function task1(){
  let birthdayUser=prompt('введи дату в формате ДД.ММ.ГГГГ.');
  let birthday = birthdayUser.split('.');
  let dateUser=[] ;
  debugger
  if(birthday[2] > 1900 &&
     birthday[2] < 2022 &&
     typeof(+birthday[2]) =='number'){
       dateUser.push(+birthday[2]) ;
  }else{
    alert('неверный формат');
    return;
  }
  if(birthday[1] <= 12 &&
    birthday[1] > 0   &&
    typeof(+birthday[1]) =='number'){
        dateUser.push(+birthday[1]) ;
  }else{
    alert('неверный формат');
    return;
  }
  if(birthday[0] <= 31 &&
     birthday[0] > 0   &&
     typeof( +birthday[0]) =='number'){
      dateUser.push(+birthday[0]) ; 
  }else{
    alert('неверный формат');
    return;
 }

  let date=new Date(dateUser);
  let week =['воскресенье ','понедельник','вторник','среда','четверг','пятница','суббота',];

  let result=week[date.getDay()];
   alert (result);
}

function task2(){
    let date =new Date();
    let sumMin= date.getHours()*60 + date.getMinutes();
    return sumMin;
}
