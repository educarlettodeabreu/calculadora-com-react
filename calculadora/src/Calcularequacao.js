export function Calcularequacao(equacao) {
  const organizando = equacao.replace(/[+\-*/^√()]/g, " $& ");
  const tokens = organizando.split(" ").filter((item) => item !== "");

  while (tokens.length > 1) {
    if (tokens.includes("(")) {
      const abre = tokens.lastIndexOf("(");
      const fecha = tokens.indexOf(")", abre);

      const conta = tokens.slice(abre + 1, fecha);
      const resultado = Calcularequacao(conta.join(""));
      tokens.splice(abre, fecha - abre + 1, resultado);
    } else if (tokens.includes("√")) {
      const operador = tokens.indexOf("√");
      const numero = parseFloat(tokens[operador + 1]);
      const resultado = Math.sqrt(numero);
      tokens.splice(operador, 2, resultado.toString());
    } else if (tokens.includes("^")) {
      const operador = tokens.indexOf("^");
      const numero = parseFloat(tokens[operador - 1]);
      const potencia = parseFloat(tokens[operador + 1]);
      const resultado = numero ** potencia;
      tokens.splice(operador - 1, 3, resultado.toString());
    } else if (tokens.includes("*")) {
      const operador = tokens.indexOf("*");
      const n1 = parseFloat(tokens[operador - 1]);
      const n2 = parseFloat(tokens[operador + 1]);
      const resultado = n1 * n2;
      tokens.splice(operador - 1, 3, resultado.toString());
    } else if (tokens.includes("/")) {
      const operador = tokens.indexOf("/");
      const n1 = parseFloat(tokens[operador - 1]);
      const n2 = parseFloat(tokens[operador + 1]);
      const resultado = n1 / n2;
      tokens.splice(operador - 1, 3, resultado.toString());
    } else if (tokens.includes("+")) {
      const operador = tokens.indexOf("+");
      const n1 = parseFloat(tokens[operador - 1]);
      const n2 = parseFloat(tokens[operador + 1]);
      const resultado = n1 + n2;
      tokens.splice(operador - 1, 3, resultado.toString());
    } else if (tokens.includes("-")) {
      const operador = tokens.indexOf("-");
      const n1 = parseFloat(tokens[operador - 1]);
      const n2 = parseFloat(tokens[operador + 1]);
      const resultado = n1 - n2;
      tokens.splice(operador - 1, 3, resultado.toString());
    } else {
      throw new Error("Equação inválida");
    }
  }
  return tokens[0];
}
