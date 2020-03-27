
var tariffa
var promo

//CATTURARE VALORI INSERITI NEGLI INPUT --------

//nome utente
var userName = document.getElementById('nome');
//età
var userAge = document.getElementById('eta');
//numero km
var numKm = document.getElementById('km');



//CALCOLO PREZZO BIGLIETTO ----------------------

//prezzo biglietto: #km * 0,21€
var prezzo = numKm * 0.21;

//calcola sconto -20% per i minorenni <18
var scontoYoung = prezzo - ((prezzo/100)*20);

//calcola sconto -40% per i minorenni >65
var scontoSenior = prezzo - ((prezzo/100)*40);

//logica calcolo tariffa con applicazione sconti
if (eta < 18) {
  tariffa = scontoYoung
} else if (eta > 65) {
  tariffa = scontoSenior
} else {
  tariffa = prezzo
}
//logica display bollino promo
if (eta < 18) {
  promo = "Waw! Promo Young Applicata!" + "<br>" + "Sconto del 20% ai minori di 18 anni"
} else if (eta > 65) {
  promo = "Promo Senior Applicata!" + "<br>" + "Sconto del 40% ai viaggiatori con più di 65 anni"
} else {
  promo = "Questa è la migliore tariffa del giorno!"
}

//display prezzo biglietto
document.getElementById("tariffa-revenue").innerHTML = "€ " +  tariffa.toFixed(2);

//display promo
document.getElementById("dichiara-promo").innerHTML = promo



//EVENTI SCATENATI DAI PULSANTI ---------------------------

//variabili
var calculate = document.getElementById('calcola');
var box-biglietto = document.getElementsById('biglietto');

calculate.addEventListener('click',
  function() {
    box-biglietto.style.display = "flex";
  }

)
