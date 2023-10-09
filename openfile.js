// Fonction randomize
function randomChoice(lst) {
  return lst[Math.floor(Math.random() * lst.length)];
}

// Fonction restart animation de la carte
function restartAnimation(carouselCell) {
  carouselCell.classList.remove("flip-in-ver-left");
  void carouselCell.offsetWidth;
  carouselCell.classList.add("flip-in-ver-left");
}

// Partie select joueurs
var Joueurs;

if (window.arrayJoueur && window.arrayJoueur.length > 0) {
  Joueurs = window.arrayJoueur;
} else {
  Joueurs = ["Joueur 1", "Joueur 2", "Joueur 3"];
}

// Initialisation du joueur choisi
var JoueurChoisi = document.getElementById("Joueur");
JoueurChoisi.textContent = "Joueur " + randomChoice(Joueurs);

// Chemin du fichier avec les actions ou vérité
const cheminFichierVeridad = './veridad.txt';

// Trouver où sera renvoyée l'action
var VeriteChoisie = document.getElementById("Veridad");
// Mettre dans un tableau (Veridads) le contenu du fichier .txt
var Veridads = [];

// On rentre dans le fichier (TRY CATCH)
fetch(cheminFichierVeridad)
  // On transforme le contenu en texte
  .then(response => response.text())
  .then(contenu => {
    // On sépare le contenu en lignes pour les mettre dans un tableau
    const lignes = contenu.split('\n');

    // Remplissage de l'array Veridads avec les lignes du fichier
    lignes.forEach(ligne => {
      Veridads.push(ligne);
    });

    // Initialisation de la première action
    VeriteChoisie.textContent = randomChoice(Veridads);

    const button = document.getElementById("carousel-cell"); 

    button.addEventListener("click", (event) => {
      // Change les valeurs à chaque clic
      restartAnimation(button);
      JoueurChoisi.textContent = "Joueur " + randomChoice(Joueurs);
      VeriteChoisie.textContent = randomChoice(Veridads);
    });
  })
  .catch(err => {
    console.error('Une erreur s\'est produite : ', err);
  });
