//apacioje yra js objekto pavyzdys

var ObjectInJS = {
   "firstname": "Mantvydas",
   lastname: "Buda",
   address: true
}



console.log(JSON.stringify(ObjectInJS)); //konvertuoja viska i JSON faila !!!! gerulis dalykas

//apacioje yra JSON objekto pavyzdys, beveik identiskas JS, tik property
//yra kabutyese, o js propertys yra ne kabutese (bet irgi gali buti kabutese)

var jsonValue = JSON.parse('{ "first": "Mantvydas", "second": "Buda", "third": true }');

//CIA pavyzdys kaip objektas transformuojamas i JSON, o po to JSON i objekta,
//IS esmes JSON mazai kuo skiriasi nuo JS objekto tik turi griztesne sintakse


console.log(jsonValue);
