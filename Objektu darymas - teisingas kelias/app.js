var Mantvydas = { // taip pat galima sukurti var person = new Object();, bus tas pats, bet gal taip siek tiek paprasciau ? :)
   firstname: 'Mantvydas',
   lastname: 'Buda',
   address: { //sitoje vietoje sukuriame nauja adresa, lygiai taip pat lyg butu - person.address = new Object();
      street: "Kovo 11-osios, 63-13",
      city: "Kaunas",
      state: "Ny"
   }
};

// var person = new Object();   sitas kodas yra lygiai tas pats kas virsuje
// person.firstname = "Tony";
// person.lastname = "BetKas";

function greet(person) { //person pasiema objekta, vienu metu Mantvydas, kuris jau sukurtas, o kitu, objektas, kuris sukuriamas
   //parametru skiltyje
   console.log(person);
   console.log("Hello " + person.firstname);
}


greet(Mantvydas); //perduodame objekta Mantvydas
greet({ //esme ta,jog cia perduodam objekta visa, funkcijoje ji skaitys akip visa pilna objekta
   firstname: "Vaida"
});

Mantvydas.megstamiausiFilmukuHerojai = { // kaip kuriami nauji objektai su garbanotais skliausteliais
   kempiniukas: "Kalmaras",
   southParkas: "Cartmanas ir Randy",
   simsonai: "Homeris"
}
