//gathering key page elements
var highscores_list = document.getElementById("highscores-list")
var go_back_btn = document.getElementById("go_back_btn")
var clear_highscores_btn = document.getElementById("clear_highscores_btn")

//accessing locally stored highscores w/ and arranging initals and arranging them into an array of length 2 arrays
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

//sorting scores list from lowest to highest
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
//swapping order of scores list to from highest to lowest
sorted_scores_a = sorted_scores_a.reverse()

//writing highscores to the page in order from highest to lowest 
for (i=0;i<highscores.length;i++) {
    var current_HS = document.createElement("div")
    current_HS.setAttribute("style", "background-color:rgb(249, 188, 249);margin:3px")
    current_HS.textContent = JSON.stringify(i+1) + ". " + sorted_scores_a[i][1] + " - " + sorted_scores_a[i][0]
    highscores_list.appendChild(current_HS)
}
    }


//clear highscores button functionality
function clear_highscores(event) {
    event.preventDefault()
    while (highscores_list.childElementCount>0) {
        highscores_list.children[0].remove();
    }
    localStorage.setItem("scores", "")
}

// return player to web page button functionality
function return_to_quiz(event) {
    event.preventDefault()
    window.location.replace("./index.html")
}

//event listeners for both buttons
clear_highscores_btn.addEventListener("click", clear_highscores)
go_back_btn.addEventListener("click", return_to_quiz)



