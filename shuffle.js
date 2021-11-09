
// shuffleArray: toma como parametro un arreglo, y genera un random entre las posiciones de cada elemento,
// esto nos sirve para generar una varicion en las posiciones de los elementos del arreglo cada vez que se ejecuta.

const shuffleArray = (d) => {
    for (let c = d.length - 1; c > 0; c--) {
      let b = Math.floor(Math.random() * (c + 1));
      let a = d[c];
      d[c] = d[b];
      d[b] = a;
    }
    return d
 };
 
 //shuffle: se encarga de procesar los arreglos mediante el metodo shuffleArray, para luego asignarle el valor, generando
 // un arreglo de objetos.

const shuffle = () => {
    const abecedary = {};
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    let shuffledArrayLetters = shuffleArray(letters);
    let shuffledArrayValues = shuffleArray(values);
    shuffledArrayLetters.forEach((value, index) => {
        abecedary[value] = shuffledArrayValues[index]
    });
    return abecedary
}

//summarizeTotalLettersIntoWord: toma como parametros el arreglo de objetos generado con el metodo shuffle, que contiene un diccionario 
// con cada letra desordenado ya que no conoceremos el orden y un valor asignado.
  
const summarizeTotalLettersIntoWord = (abecedary, word) => {
    let wordInArray = [...word.toUpperCase()];
    let sum = 0;
    wordInArray.forEach((value) => {
        sum += abecedary[value];
    })
    return sum;
}

//showResults: es el metodo para ejecutar el cual recibe como parametro la palabra que deseamos calcular
// ej. showResults('PALABRA')

const showResults = (word) => {
    const abecedary = shuffle();
    const totalSum = summarizeTotalLettersIntoWord(abecedary, word);
    console.log(`"Secret" dictionary:"`, abecedary);
    console.log(`Total sum of word ${word.toUpperCase()} is: ${totalSum}`);
}

showResults('FERROCARRIL');

// Respuesta

// Secret dictionary: Arreglo de objetos generado
// Total sum of word: el valor de la palabra