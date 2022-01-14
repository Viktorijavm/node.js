const fs = require('fs/promises');

(async () => {

    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    const drinksList = drinksContent.split('\r\n');

    // Pasirinkimas 1: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.
    // Pasirinkimas 2: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.
    // Pasirinkimas 3: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.

    let i = 0;
    for (const drink of drinksList) {
        const drinkDetails = drink.split(' ');
        const [name, price, count] = drinkDetails;
        const balance = +price * +count;
        const precision = 2;
        const b1 = balance.toFixed(precision);
        const b2 = Math.round(balance * (10 ** precision)) / (10 ** precision);

        console.log(`Pasirinkimas ${++i}: ${name} kurio kaina yra ${price} EUR buvo parduota ${count} kiekis ir bendra apyvarta yra ${b1} EUR.`);
    }

})();

     //let apyvarta = +price * +count;
    //parseFloat= price(desimtainiai)galima su +
    //parseInit = count(sveikieji skaiciai)galima +
    //const a = 3.141592645;
    //console.log(a.toFixed(2));
    //const a = '584';
    //const b = parseInt(a);
    //console.log(typeof b);


//const kaNoriuSuzinoti = 'childrenCount';
//const atsakymasIManoNora = jonas[kaNoriuSuzinoti];
//console/log(atsakymasIManoNora);

