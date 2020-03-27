
//VARIABILI INPUT --------

//nome utente
var userName = document.getElementById('nome');
//età
var userAge = document.getElementById('eta');
//numero km
var numKm = document.getElementById('km');




//EVENTI SCATENATI DAI PULSANTI ---------------------------

//variabili
var btnCalculate = document.getElementById('calcola');
var boxBiglietto = document.getElementById('biglietto');
var boxForm = document.getElementById('form')

//GENERA-----
btnCalculate.addEventListener('click',
  function() {

    // pesca i valori inseriti in input
    valName = userName.value;
    valAge = userAge.value;
    valKm = numKm.value;


    //prezzo biglietto: #km * 0,21€
    var prezzo = valKm * 0.21;
    prezzo.toFixed(1);
    console.log(prezzo);

    //calcola sconto -20% per i minorenni <18
    var scontoYoung = prezzo - ((prezzo/100)*20);

    //calcola sconto -40% per i minorenni >65
    var scontoSenior = prezzo - ((prezzo/100)*40);

    //condizione campi obbligatori
    var messaggio = document.getElementById('messaggio');
    if (valName == '' || valAge == '' || valKm == '') {
      messaggio.innerHTML = "Prego accertarsi di aver compilato tutti i campi"
      messaggio.style.color = 'red';
      messaggio.style.fontSize = '24px';
    } else {
      //logica calcolo tariffa con applicazione sconti
      var tariffa;

      if (valAge < 18) {
        tariffa = scontoYoung;
      } else if (valAge > 65) {
        tariffa = scontoSenior;
      } else {
        tariffa = prezzo;
      }
      //logica display bollino promo
      var promo;

      if (valAge < 18) {
        promo = "Waw! Promo Young Applicata!" + "<br>" + "Sconto del 20% ai minori di 18 anni";
      } else if (valAge > 65) {
        promo = "Promo Senior Applicata!" + "<br>" + "Sconto del 40% ai viaggiatori con più di 65 anni";
      } else {
        promo = "Questa è la migliore tariffa per te!";
      }

      //display prezzo biglietto
      var tariffaRevenue = document.getElementById("tariffa-revenue");
      tariffaRevenue.innerHTML = "€ " +  tariffa.toFixed(1);

      //display promo
      var dichiaraPromo = document.getElementById("dichiara-promo");
      dichiaraPromo.innerHTML = promo;

      //display nome
      var boxNome = document.getElementById('nome-utente');
      boxNome.innerHTML = valName;

      //visualizza box biglietto
      boxBiglietto.style.display = "flex";
      boxForm.style.display = "none";
    }

  }
)

/*-----------------------*/

//variabili
var btnReset = document.getElementById('btn-reset');

//ANNULLA---
btnReset.addEventListener('click',
  function(){

    //azzera contenuto input
    document.getElementById('nome').value = '';
    document.getElementById('eta').value = '';
    document.getElementById('km').value = '';

    //chiudi box biglietto
    boxBiglietto.style.display = "none";
    boxForm.style.display = "flex";

  }
)
