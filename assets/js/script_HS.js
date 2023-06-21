var highscores_list = document.getElementById("highscores-list")


var highscores = localStorage.getItem("scores")
highscores = highscores.split(" ")
if (highscores[0]==="null"){
    highscores = highscores.slice(1)
}

var sorted_scores_a = []
for (i=0;i<highscores.length;i++) {
    var score = parseInt(highscores[i][0])
    var initials = highscores[i].slice(1)
    var current_player = [score, initials]
    sorted_scores_a.push(current_player)
}

/*INSERT LIST SORTER HERE**/


for (i=0;i<highscores.length;i++) {
    var current_HS = document.createElement("div")
    if ((i+1)==1) {
        current_HS.setAttribute("style", "background-colour:purple")
    }
    current_HS.textContent = JSON.stringify(i+1) + ". " + sorted_scores_a[i][1] + " - " + sorted_scores_a[i][0]
    highscores_list.appendChild(current_HS)
}
/*
sorted_scores_b = []
var current_lowest_score = sorted_scores_a[0][0]
for (i=1;i<highscores.length;i++) {
    if (current_lowest_score>sorted_scores_a[i][0]) {
        sorted_scores_a.push(sorted_scores_a[i])

    } 
    current_lowest_score = sorted_scores_a[i][0]
}
console.log(sorted_scores_b)

var current_highest_score = sorted_scores_a[0][0]
sorted_scores_b = []
console.log(sorted_scores_a)
i = 0
while (true) {
    if (sorted_scores_a[i][0]>current_highest_score) {
        sorted_scores_b.push(sorted_scores_a[i])
        current_highest_score = sorted_scores_a[i][0]
    }
    i++;
}
console.log(sorted_scores_a)
console.log(sorted_scores_b)*/
