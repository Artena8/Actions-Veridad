$(document).ready(function() {
    // Nombre de joueurs max
    var maxChamps = 20;

    $("#addInput").click(function() { //Listener btn add
        var currentChamps = $("#champ-container").children("input").length; // children(filter) IMPORTANT sinon prend le br aussi

        if (currentChamps < maxChamps) { //control
            var newInput = $("<input>").attr({ // nom du champ | attr = attributs (name = ??)
                type: "text",
                name: "champ" + (currentChamps + 1), // autoincrément
                placeholder: "ex : Joueur " + (currentChamps + 1)
            });

            $("#champ-container").append(newInput).append("<br>"); //ajout
        } else {
            alert("Vous avez atteint le nombre maximal de joueurs.");
        }
    });

    $("#deleteInput").click(function() {
        var currentChamps = $("#champ-container").children("input").length;

        if (currentChamps > 1) {
            $("#champ-container :last-child").remove();
            $("#champ-container :last-child").remove();
        } else {
            alert("Vous avez atteint le nombre minimal de joueurs.");
        }
    });
    
});