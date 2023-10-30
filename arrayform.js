let arrayJoueur;

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  arrayJoueur = Array.from(form.querySelectorAll("input[type='text']")).map(input => input.value);
  localStorage.setItem('joueurs', JSON.stringify(arrayJoueur))
});


