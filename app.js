let pronoun = ["the", "our", "your", "my"];
let adj = ["great", "big", "perfect", "correct", "nice"];
let noun = ["jogger", "racoon", "giant", "beast", "ninja", "bebes", "capcom"];
let ext = [".com", ".es", ".net", ".io", ".org"];

function generarCombinaciones() {
  const combinaciones = [];
  let combinacion = "";

  for (let pronombre of pronoun) {
    for (let adjetivo of adj) {
      for (let nombre of noun) {
        for (let extension of ext) {
          let nounEnd1 = nombre.slice(-2);
          let extBeginning1 = extension.slice(1, 3);
          let nounEnd2 = nombre.slice(-3);
          let extBeginning2 = extension.slice(1, 4);

          if (nounEnd1 === extBeginning1) {
            combinacion = `${pronombre}${adjetivo}${nombre.slice(
              0,
              -2
            )}${extension}`;
          } else if (nounEnd2 === extBeginning2) {
            combinacion = `${pronombre}${adjetivo}${nombre.slice(
              0,
              -3
            )}${extension}`;
          } else {
            combinacion = `${pronombre}${adjetivo}${nombre}${extension}`;
          }
          combinaciones.push(combinacion);
        }
      }
    }
  }

  console.log(combinaciones);
}

generarCombinaciones();
