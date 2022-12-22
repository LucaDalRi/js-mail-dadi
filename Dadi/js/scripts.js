// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

/*
1. Genero numero random da 1 a 6 e lo assegno a due variabili (pc, giocatore)
2. Comparo i due numeri e scelgo il più alto 
3. log vincitore 
*/

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

let pc = parseInt(getRandomNum(1,6));
let umano = parseInt(getRandomNum(1,6));

console.log('La Cpu ha il numero ' + pc);
console.log('Umano ha il numero ' + umano);

if (pc > umano) {

    console.log('La Cpu ha vinto!');

}
else if (pc == umano) {

    console.log('Stallo!')

}
else {

    console.log('Umano ha vinto!');

}