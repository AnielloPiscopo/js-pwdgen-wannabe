/* ----------------------------------------------------------------
INIZIALIZZAZIONE E DICHIARAZIONE DI VARIABILI E COSTANTI */

// * INIZIALIZZAZIONE

// ? PRELIEVO DAL DOM
const nameInputArea = document.getElementById('name');
const surnameInputArea = document.getElementById('surname');
const favouriteColorInputArea = document.getElementById('favourite-color');
const momentanealCase=document.getElementById('momentaneal-case')



// * DICHIARAZIONE 

// ? DICHIARAZIONE DELLE VARIABILI
let name;
let surname;
let favouriteColor;
let okValue;






/* ----------------------------------------------------------------
MAIN CODE */
alert('Benvenuto!');
alert('Per andare avanti dovrai inserire alcuni dati(il nome , il cognome e il colore preferito) che verrano poi successivamente inseriri nella pagina web che vedi');

okValue = confirm('Hai capito?','');

if(!okValue){
    alert('Refresha la pagina e rileggi le condizioni');
}
else{
    alert('Ok Iniziamo')

    name = prompt("Dimmi il tuo nome",'');
    nameInputArea.value = name;

    surname = prompt("Dimmi il tuo cognome",'');
    surnameInputArea.value = surname;

    favouriteColor = prompt("Dimmi il tuo colore preferito",'');
    favouriteColorInputArea.value = favouriteColor;
}