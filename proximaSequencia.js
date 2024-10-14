function proximoImpar(serie) {
  let ultimo = serie[serie.length - 1];
  return ultimo + 2;
}

function proximaPotenciaDe2(serie) {
  let ultimo = serie[serie.length - 1];
  return ultimo * 2;
}

function proximoQuadradoPerfeito(serie) {
  let ultimoIndice = Math.sqrt(serie[serie.length - 1]);
  return Math.pow(ultimoIndice + 1, 2);
}

function proximoQuadradoPar(serie) {
  let ultimoIndice = Math.sqrt(serie[serie.length - 1]);
  let proximoPar = ultimoIndice + 2;
  return Math.pow(proximoPar, 2);
}

function proximoFibonacci(serie) {
  let penultimo = serie[serie.length - 2];
  let ultimo = serie[serie.length - 1];
  return penultimo + ultimo;
}

function proximaSequencia(serie) {
  let ultimo = serie[serie.length - 1];
  if (ultimo % 2 === 0) {
    return ultimo + 1;
  } else {
    return ultimo + 1;
  }
}

console.log("a) Próximo número ímpar:", proximoImpar([1, 3, 5, 7]));
console.log(
  "b) Próximo número potência de 2:",
  proximaPotenciaDe2([2, 4, 8, 16, 32, 64])
);
console.log(
  "c) Próximo quadrado perfeito:",
  proximoQuadradoPerfeito([0, 1, 4, 9, 16, 25, 36])
);
console.log("d) Próximo quadrado par:", proximoQuadradoPar([4, 16, 36, 64]));
console.log(
  "e) Próximo número Fibonacci:",
  proximoFibonacci([1, 1, 2, 3, 5, 8])
);
console.log(
  "f) Próximo número da sequência mista:",
  proximaSequencia([2, 10, 12, 16, 17, 18, 19])
);
