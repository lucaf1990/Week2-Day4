const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
const characters = [];

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  const nameINeed = starWarsCharacters[i];
  const newobj = { name: nameINeed.name };
  characters.push(newobj);
}
console.log(characters);
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci solo oggetti di personaggi femminili con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/

const femaleCharachters = [];

for (let i = 0; i < starWarsCharacters.length; i++)
  if (starWarsCharacters[i].gender === "female") {
    const objINeed = starWarsCharacters[i];
    const femObj = {
      name: objINeed.name,
      hair_color: objINeed.hair_color,
      eye_color: objINeed.eye_color,
    };
    femaleCharachters.push(femObj);
  }
console.log(femaleCharachters);
/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};
/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato.
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
*/
const coloreOcchi = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  let coloreOcchi = starWarsCharacters[i].eye_color;
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
    case "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
    case "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i]);
      break;
  }
  console.log(coloreOcchi);
}

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/

let i = 0;
let totalMass = 0;

while (i < starWarsCharacters.length) {
  const mass = starWarsCharacters[i].mass;
  totalMass = totalMass + parseInt(mass);
  i++;
  console.log(totalMass);
}

console.log("qulla che chiedi" + totalMass);
/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)


Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

//for (let i = 0; i < starWarsCharacters.length; i++) {
// let totalMass = starWarsCharacters[i].mass;

switch (totalMass) {
  case totalMass < 500:
    console.log("Ship is under loaded");
    break;
  case totalMass === 500:
    console.log("Ship is half loaded");
    break;
  case totalMass > 700:
    console.log("Warning: Load is over 700");
    break;
  case totalMass > 900:
    console.log("Critical Load: Over 900");
    break;
  case totalMass > 1000:
    console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
}
console.log;
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let variavilefornita = 10;
if (typeof variavilefornita === "number") {
  console.log(
    "il valore inserito è un numero, in particolare:",
    variavilefornita
  );
} else {
  console.log("il valore inserito NON è un numero ma è: " + variavilefornita);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num9 = 2221;
if (num9 % 2 !== 0 || -0) {
  console.log("il numero fornito dispari");
} else {
  console.log("IL numero è pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 5;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val <= 5) {
  console.log("Meno o uguale a 5");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "toronto";
console.log("aggiunto la key 'city'", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log("rimozione della key 'lastname'", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log("tolto l'ultimo elemento di skils", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arraydinumeri = [];
console.log(arraydinumeri);
arraydinumeri.push(1);
arraydinumeri.push(2);
arraydinumeri.push(3);
arraydinumeri.push(4);
arraydinumeri.push(5);
arraydinumeri.push(6);
arraydinumeri.push(7);
arraydinumeri.push(8);
arraydinumeri.push(9);
arraydinumeri.push(10);
console.log(arraydinumeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arraydinumeri[arraydinumeri.length - 1] = 100;
console.log(arraydinumeri);
