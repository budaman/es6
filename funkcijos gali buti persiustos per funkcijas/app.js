var anonymousGreet = function() { //anonymous function....
   console.log('hi');
}

anonymousGreet(); //anonimines funkcijos issikvietimas

function log(a) { //a tampa funkcija, kuri buvo anonimine ir taip galima ta anonimine issikviesti
   a();
}

log(function() {
   console.log("hi");
}); //perduodama funkcija kaip objektas per a kintamaji
