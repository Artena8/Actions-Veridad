const cheminFichierVeridad = './veridad.txt';

var VeriteChoisie = document.getElementById("Veridad");
var Veridads = [];

function randomChoice(lst) {
    return lst[Math.floor(Math.random() * lst.length)];
}

fetch(cheminFichierVeridad)
  .then(response => response.text())
  .then(contenu => {
    const lignes = contenu.split('\n');

    lignes.forEach(ligne => {
        Veridads.push(ligne);
    });

    VeriteChoisie.textContent = randomChoice(Veridads);

    const button = document.getElementById("carousel-cell");

    button.addEventListener("click", (event) => {
    VeriteChoisie.textContent = randomChoice(Veridads);
    });
  })
  .catch(err => {
    console.error('Une erreur s\'est produite : ', err);
  });


