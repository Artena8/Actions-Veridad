// Fonction randomize
function randomChoice(lst) {
  return lst[Math.floor(Math.random() * lst.length)];
}

// Partie select joueurs
var arrayJoueur = ["anna","bannna","caann"];
var Joueur = randomChoice(arrayJoueur);

// init qui commence
var JoueurChoisi = document.getElementById("Joueur");
JoueurChoisi.textContent = "Joueur : " + randomChoice(Joueur);

// chemin fichier avec les actions ou vérité
const cheminFichierVeridad = './veridad.txt';

// Trouver où sera renvoyer l'action
var VeriteChoisie = document.getElementById("Veridad");
// Mettre en array (Veridads) le fichier .txt
var Veridads = [];

// On rentre dans le fichier (TRY CATCH)
fetch(cheminFichierVeridad)
  // On transforme en texte pour ne pas avoir de problème (ex image)
  .then(response => response.text())
  .then(contenu => {
    // On sépare en ligne pour les mettre en elem de l'array
    const lignes = contenu.split('\n');

    // Ecris dans l'array
    lignes.forEach(ligne => {
        Veridads.push(ligne);
    });
    
    // init la 1ere action
    VeriteChoisie.textContent = randomChoice(Veridads);

    // EVENT LISTENER
    const button = document.getElementById("carousel-cell");

    button.addEventListener("click", (event) => {
      // change les var a chaque click
      JoueurChoisi.textContent = "Joueur  " + randomChoice(arrayJoueur);
      VeriteChoisie.textContent = randomChoice(Veridads);
    });
  })
  .catch(err => {
    console.error('Une erreur s\'est produite : ', err);
  });


