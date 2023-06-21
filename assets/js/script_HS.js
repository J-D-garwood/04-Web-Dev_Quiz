var highscores_list = document.getElementById("highscores-list")
var go_back_btn = document.getElementById("go_back_btn")
var clear_highscores_btn = document.getElementById("clear_highscores_btn")

var highscores = localStorage.getItem("scores")
console.log("|"+highscores+"|")
if (highscores!==null && highscores!=""){
    highscores = highscores.trim().split(" ")
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
function sort_scores(array) {
    for (var i=0;i<(array.length-1);i++){
        var swp = false
        for (var j=0;j<(array.length-i-1);j++){
            if (array[j][0]>array[j+1][0]) {
                var temp = array [j]
                array[j]=array[j+1]
                array[j+1] = temp
                swp = true
            }
        }
    if (!swp) {
        break;
    }
    }
    return(array)
}
console.log(sorted_scores_a)
console.log(sort_scores(sorted_scores_a))
sorted_scores_a = sorted_scores_a.reverse()
/*
    console.log(sorted_scores_a)
    if (sorted_scores_a[0] === [NaN, '']){
        sorted_scores_a = sorted_scores_a.slice(1)
    }*/
    for (i=0;i<highscores.length;i++) {
        var current_HS = document.createElement("div")
        current_HS.setAttribute("style", "background-color:rgb(250, 153, 250);margin:3px")
        current_HS.textContent = JSON.stringify(i+1) + ". " + sorted_scores_a[i][1] + " - " + sorted_scores_a[i][0]
        highscores_list.appendChild(current_HS)
    }
    }
/*
    var sorted_scores_a = []
    for (i=0;i<highscores.length;i++) {
        var score = parseInt(highscores[i][0])
        var initials = highscores[i].slice(1)
        var current_player = [score, initials]
        sorted_scores_a.push(current_player)
    }

    /*INSERT LIST SORTER HERE*
    for (i=0;i<highscores.length;i++) {
        /*** 
}




for (i=0;i<highscores.length;i++) {
    var current_HS = document.createElement("div")
    if (i % 2 !== 0) {
        current_HS.setAttribute("style", "background-color:rgb(250, 153, 250);")
    } else {
        current_HS.setAttribute("style", "background-color:white;")
    }
    current_HS.setAttribute("style", "margin:1px;")
    current_HS.textContent = JSON.stringify(i+1) + ". " + sorted_scores_a[i][1] + " - " + sorted_scores_a[i][0]
    highscores_list.appendChild(current_HS)
}*/

function clear_highscores(event) {
    event.preventDefault()
    while (highscores_list.childElementCount>0) {
        highscores_list.children[0].remove();
    }
    localStorage.setItem("scores", "")
}

function return_to_quiz(event) {
    event.preventDefault()
    window.location.replace("./index.html")
}

clear_highscores_btn.addEventListener("click", clear_highscores)
go_back_btn.addEventListener("click", return_to_quiz)



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
