// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

/*
1. prompt email utente
2. controllo se la email utente sia già nella lista emailIscritti 
    se ce stampo su console -- email presente --
    se non ce stampo su console --email non presente--
3. fine
*/

let emailIscritti = ['luca@email.com', 'marco@email.com', 'mattia@email.com', 'stefano@email.com'];

const emailUtente = prompt('Inserisci la tua EMail');

const emailUtenteLow = emailUtente.toLowerCase();

for (let i = 0 ; i < 3; i++) {

    if (emailUtente == emailIscritti[i]) {

        console.log('email presente! Accesso in corso');

        i += 10;

    }
    else if (emailUtente != emailIscritti[i]) {

        console.log('email non presente!');

        i += 10;

    }
    else{
        
    
    }


};