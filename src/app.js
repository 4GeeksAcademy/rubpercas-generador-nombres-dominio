let pronoun = ["the", "our", "your", "my", "some"];
let adj = ["great", "big", "perfect", "correct", "nice"];
let noun = ["jogger", "racoon", "giant", "beast", "ninja"];
let ext = [".com", ".es", ".net", ".io", ".org"];

function generarCombinaciones() {
  const combinaciones = [];

  for (const pronombre of pronoun) {
    for (const adjetivo of adj) {
      for (const nombre of noun) {
        for (const extension of ext) {
          const combinacion = ` ${pronombre}${adjetivo}${nombre}${extension}\n`;
          combinaciones.push(combinacion);
        }
      }
    }
  }
  return combinaciones;
  // console.log(combinaciones);
}

document.getElementById("dominios").innerHTML = generarCombinaciones();
