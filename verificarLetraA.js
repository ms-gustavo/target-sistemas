function verificarLetraA(str) {
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      contador++;
    }
  }

  if (contador > 0) {
    console.log(`A letra 'a' aparece ${contador} vezes na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
}

const stringTeste = "Target Sistemas";
verificarLetraA(stringTeste);
