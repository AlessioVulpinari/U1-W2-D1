/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA

String: un valore composto da caratteri alfanumerici, 
quindi numeri e lettere, compreso all'interno di un apice o di un doppio apice.
Esempio: "Luca" , "Francesco", "Cane", etc... 

Numerico: un valore composto da caratteri numerici, ovvero caratteri compresi tra lo 0 e il 9.
Esempio: 9 , 125, 10.50, 375078.41, etc...

Booleano: un valore condizionale, ovvero che dipende da una condizione che può avere solo due risultati: vero o falso. 
Esempio: la terra è sferica? -> Si, vero 
la terra è piatta? -> No, falso

Null: un valore nullo, significa che non contiene alcun tipo di dato al suo interno. 

Undefined: una valore non definito, significa che non è stato specificato che cos'è contenuto al suo interno. 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Alessio"
console.log("myName è stato inizializzato con il valore: " + myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number1 = 12
const number2 = 20
const total = number1 + number2

console.log(total)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Vulpinari"
console.log("Ora il valore di myName è: " + myName)

// Prendo la costante Number1, utilizzata nell'esercizio numero 3 e provo ad assegnarle un nuovo valore

// Number1 = 20

// Visul Studio o comunque il nostro ambiente di lavoro non ci segnala nessun tipo di errore se proviamo a fare una cosa del genere
// tuttavia una volta che aprimo il file con il browser, il terminale di quest'ultimo, ci segnarà un errore.
// Allego alla cartella la foto dell'errore in questione. Ma quest'ultima mostra chiaramente che alla linea 71,
// dove abbiamo assegnato a number1 un valore di tipo 20, abbiamo tentato di assegnare ad una costante un'altro
// valore differente da quello di inizializzazione.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"

// nome 1 è diverso da nome 2 perciò questa comparazione risulterà vera
console.log(name1 !== name2)

// utilizziamo il metodo toLowerCase() che normalizza tutti i caratteri di name2 in minuscolo
// ora mettendoli a confronto le due variabili risultano identiche

console.log(name1 === name2.toLowerCase())
