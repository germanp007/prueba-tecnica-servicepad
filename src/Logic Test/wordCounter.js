const wordCounter = (quote) => {
  let splitted = quote
    .toLowerCase()
    .replace(/[^a-z]/g, " ")
    .split(" ");
  let words = {};
  for (let word of splitted) words[word] = words[word] + 1 || 1;
  console.log(words);
};
wordCounter("Hello world");

/* En esta funcion se toma como parametro cualquier string, luego uso el metodo split para agrupar todo el string en un array, con " " comillas y un espacio para que en casa indice este cada palabra, luego podemos iterar con un bucle o algun metodo como forEach(), creamos un objeto vacio y vamos almacenando cada palabra dentro y se va sumando 1 por cada vez que se repide cada una de las palabras, usando el condicional || si la palabra no repite queda en 1 si repite toma el primer valor truthly sumandole 1 a cada palabra*/
