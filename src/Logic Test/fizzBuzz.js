for (let i = 1; i <= 100; i++)
  console.log(`${i % 3 ? "" : "Fizz"}${i % 5 ? "" : "Buzz"}` || i);

/* Para este ejercicio se realiza con un bucle iterando desde 1 que es i hasta 100,
     por cada iteracion se va sumando uno al indice 'i', se comprueba si i es multiplo de 3 y de 5 con la formula i % 3 == 0 y i % 5 == 0, use un ternario para ambos valores y comparando si la operacion da un numero entero tomara como valor el string vacio, si el numero es 0 (residuo de i / 3 = multiplo de 3) tomara el varlor despues de los : en el caso de 3 'Fizz' y de 5 "Buzz", cuando se da un valor entero toman como valor el string vacio (valor falsy) y comparando con i imprime el valor de i, si los valores son cero imprimira Fizz, Buzz o FizzBuzz cuando es multiplo de 15 y siendo strings (truthly)comparando con i con el condicional || se imprimira el primer valor truthly en este caso los string y caso contratio el 'i' */
