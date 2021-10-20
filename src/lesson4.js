export function userObj(){
  let user = {
    name: 'John'
  }
  let age =+prompt("age")
  if(!isNaN(age)){
    user.age = age;
    let admin = {... user}
    admin.role ='admin';
    let nameAdmin = admin.name;
    let ageAdmin = admin.age;
    let roleAdmin = admin.role;
   return (nameAdmin, ageAdmin, roleAdmin)
   } else{
      return 'ne chislo';
}}