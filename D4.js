/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let area = function (l1 = 0, l2 = 0) {
  return l1 * l2;
};

console.log("questa è l'area: ", area(10, 22));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

let crazySum = function (n1 = 0, n2 = 0) {
  let result = n1 + n2;
  switch (true) {
    case n1 === n2:
      return result * 3;
    default:
      return result;
  }
};

console.log("In questo caso i numeri sono uguali: ", crazySum(10, 10));
console.log("In questo caso i numeri sono diversi: ", crazySum(78, 125));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let crazyDiff = function (n) {
  let result = n - 19;
  let absResult = Math.abs(result); //il metodo Math.abs restituisce il valore assoluto, quindi non negativo (non -15 ma 15 nel caso di 5-20)
  switch (true) {
    case n > 19:
      return absResult * 3;
    default:
      return absResult;
  }
};

console.log(`Se il numero fornito è minore di 19: ${crazyDiff(16)}`);
console.log(`Se il numero fornito è maggiore di 19: ${crazyDiff(22)}`);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let boundary = function (n = 0) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(`Se il numero fornito è maggiore di 20: ${boundary(45)}`);
console.log(`Se il numero fornito è minore di 100: ${boundary(97)}`);
console.log(`Se il numero fornito è uguale a 100: ${boundary(100)}`);
console.log(`Se il numero fornito è 400: ${boundary(400)}`);
console.log(`Se il numero fornito è minore di 20: ${boundary(16)}`);
console.log(`Se il numero fornito è 874: ${boundary(874)}`);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(testo) {
  if (testo.startsWith("EPICODE")) {
    // .startsWith verifica se la stringa testo inizia con la sottostringa specificata, in questo caso "EPICODE".
    return testo;
  } else {
    return "EPICODE " + testo;
  }
}

console.log(epify("mi farà diventare ricco"), "esempio senza una parola iniziale");
console.log(epify("EPICODE è una scuola"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let check3and7 = function (num) {
  if (num % 7 === 0) {
    return "Il numero è un multiplo di 7";
  } else if (num % 3 === 0) {
    return "Il numero è un multiplo di 3";
  } else {
    return "Il numero non è un multiplo di 3 o di 7";
  }
};

console.log(`Se il numero scelto è 49: ${check3and7(49)}`);
console.log(`Se il numero scelto è 15: ${check3and7(15)}`);
console.log(`Se il numero scelto è 25: ${check3and7(25)}`);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let reverseString = function (testo) {
  return testo.split("").reverse().join(""); //split divide ogni lettera e trasforma la stringa in un array, reverse le inverte, joi fa il contrario di split
};

let reverseWord = reverseString("EPICODE");
console.log(reverseWord);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let upperFirst = function (str) {
  let s = str.split(" "); //crea un array splittando ogni parola della stringa
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i][0].toUpperCase() + s[i].substring(1, s[s.length]);
    if (i === s.length - 1) str += s[i];
    else str += s[i] + " ";
  }
  return str;
};

let upper = upperFirst("questa è una frase molto lunga");
console.log(upper);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let cutString = function (str) {
  return str.substring(1, str.length - 1); // con il metodo substring prendo una porzione di stringa,poi gli dico di prendere la pos1, scorrere tutta la length e -1 per l'ultima lettera
};

console.log(cutString("geologo"));
console.log(cutString("avvoltoio"));
console.log(cutString("rinoceronte"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
