const fibonacci = (n) => {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return console.log(fib[n]);
};

fibonacci(10);

/* Con esta funcion de numeros Fibonacci (suma de todos los numeros hasta llegar anteriores del parametro q se establece) cree una variable con un array de dos indices luego un bucle for standard en el cual uso par ir almacenando en la el valor actual y anterior y a su vez sumandose y dando el total del parametro del numero establecido)*/
