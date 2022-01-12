const fs = require('fs/promises');

(async () => {
    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    const drinksList  = drinksContent.split('\r\n');
    console.log(drinksContent);
    console.log(drinksList);
    let i = 0;
    for (const drink of drinksList){
       // const drinkDetails = drink.split(" ");
        //const drinkName = drinkDetails[0];
        //const drinkPrice = drinkDetails[1];
       // const count = drinkDetails[2];
       const drinkDetails = drink.split(" ");
       const [name, price, count] = drinkDetails;
       let apyvarta = parseFloat(price) * parseInt(count);
       console.log(`Pasirinikimas ${++i}: ${name}, kurio kaina yra ${price} EUR,
        buvo parduota ${count} kiekis ir bendra apyvarta yra ${apyvarta.toFixed(2)} EUR.`); 
    }

     //let apyvarta = +price * +count;
    //parseFloat= price(desimtainiai)galima su +
    //parseInit = count(sveikieji skaiciai)galima +
    //const a = 3.141592645;
    //console.log(a.toFixed(2));
    //const a = '584';
    //const b = parseInt(a);
    //console.log(typeof b);
})();
