
var tariffa
var promo


//numero km
var numKm = parseInt(prompt("Prego inserire il numero di chilometri che si intende percorrere"))
//età
var eta = parseInt(prompt("Prego inserire la propria età al momento del viaggio"))

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
//display risultato
document.getElementById("tariffa-revenue").innerHTML = "€ " +  tariffa.toFixed(2);


//Logica display bollino promo
if (eta < 18) {
  promo = "Waw! Promo Young Applicata!" + "<br>" + "Sconto del 20% ai minori di 18 anni"
} else if (eta > 65) {
  promo = "Promo Senior Applicata!" + "<br>" + "Sconto del 40% ai viaggiatori con più di 65 anni"
} else {
  promo = "Questa è la migliore tariffa del giorno!"
}
//display promo
document.getElementById("dichiara-promo").innerHTML = promo
