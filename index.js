console.clear();

const a = 5;
const b = 7;
const c = 13;

// a+b
// b+c
// c+a

// Rezultata pateikti tokiu sablonu:
// Skaiciau [a] ir skaiciaus [b] suma yra lygu [suma].

console.log(`Skaiciau ${a} ir skaiciaus ${b} suma yra lygu ${a + b}.`);
console.log(`Skaiciau ${c} ir skaiciaus ${b} suma yra lygu ${c + b}.`);
console.log(`Skaiciau ${a} ir skaiciaus ${c} suma yra lygu ${a + c}.`);

const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];

// Rezultata pateikti tokiu sablonu:
// Skaiciu masyvas, kuri sudaro [kiekis] skaiciai, vidurkis yra [vidurkis].


// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';

function inicialai(text) {
    const words = text.split(' ');
    const name = words[0];
    const nameFirstLetter = name[0].toUpperCase();
    const surname = words[1];
    const surnameFirstLetter = surname[0].toUpperCase();
    console.log(`Legendines asmenybes ${name} ${surname} trumpinys yra ${nameFirstLetter}.${surnameFirstLetter}.`);
}

inicialai(s1);
inicialai(s2);
inicialai(s3);
inicialai(s4);


// [Vardas] [Pavarde] yra [amzius] metu amziaus.
const people = [
    { name: 'Jonas', surname: 'Jonaitis', age: 99 },
    { name: 'Maryte', surname: 'Marytaite', age: 87 },
];

function introduce(person) {
    console.log(`${person.name} ${person.surname} yra ${person.age} metu amziaus`);
}

console.log('-------- for');

const forSize = people.length;
for (let i = 0; i < forSize; i++) {
    const person = people[i];
    introduce(person);
}

console.log('-------- while');

let iw = 0;
const whileSize = people.length;
while (iw < whileSize) {
    const person = people[iw];
    introduce(person);
    iw++;
}

console.log('-------- do-while');

let idw = 0;
const doWhileSize = people.length;
do {
    const person = people[idw];
    introduce(person);
    idw++;
} while (idw < doWhileSize);

console.log('-------- for-of');

for (const person of people) {
    introduce(person);
}

console.log('-------- for-in');

for (const i in people) {
    const person = people[i]
    introduce(person);
}

console.log('-------- foreach');

people.forEach((person) => {
    introduce(person);
})