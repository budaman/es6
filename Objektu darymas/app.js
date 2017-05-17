var person = new Object();


person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person["firstname"]);
console.log(person.firstname);
//Virsuje yra trys budai kaip pasiekti objekta, labiausiai naudojamas pats paskutinis
/////////////////////////////////////////////////////////////

person.address = new Object();

person.address.street = "Kovo 11 63 Kaunas";
person.address.city = "Kaunas";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]); //rekomenduojama visgi naudoti "." operatoriu
