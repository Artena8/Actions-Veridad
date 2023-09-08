function randomChoice(lst) {
    return lst[Math.floor(Math.random() * lst.length)];
}

var array = ["a","b","c"];
var Joueur = randomChoice(array);

var JoueurChoisi = document.getElementById("Joueur");
JoueurChoisi.textContent = "Joueur = "+Joueur;