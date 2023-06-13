var start_button = document.querySelector(".start-button");
var body = document.querySelector("body");
var main = document.querySelector("#page-content");

var q1 = "What does HTML stand for?"
var q1a = "Hyperlinks and Text Markup Language"
var q1b = "Home Tool Markup Language"
var q1c = "Hyper Text Markup Language" //correct answer
var q1d = "Howard Terrence Margaret Lemoine"

var q2 = "Inside which HTML element do we put the JavaScript?"
var q2a = "<scripting>"
var q2b = "<js>"
var q2c = "<script>" //correct answer
var q2d = "<javascript>"

var q3 = "Which is the correct CSS syntax?"
var q3a = "body:color=black;"
var q3b = "{body;color:black;}"
var q3c = "{body:color=black;}"
var q3d = "body {color: black;}" //correct answer

var q4 = "How do you write \"Hello World\" in an alert box?"
var q4a = "msgBox(\"Hello World\");"
var q4b = "msg(\"Hello World\");"
var q4c = "alert(\"Hello World\");" //correct answer
var q4d = "alertBox(\"Hello World\");"

var Highscores = {
    players: [],
    noOfPlayers: 0,
    addNewPlayer: function(name, score) {
        this.noOfPlayers = this.noOfPlayers + 1;
        /*TBC */
    }
}

function Generate_Question(Q, a, b, c, d) {
    //loop to remove all main's current child elements
    while (main.childElementCount>0) {
        main.children[0].remove();
    }

    var question = document.createElement("h1");
    question.textContent = Q;
    document.getElementById("page-content").appendChild(question);

    var answer_a = document.createElement("button")
    answer_a.textContent = "1. " + a;
    document.getElementById("page-content").appendChild(answer_a);

    var answer_b = document.createElement("button")
    answer_b.textContent = "2. " + b;
    document.getElementById("page-content").appendChild(answer_b);

    var answer_c = document.createElement("button")
    answer_c.textContent = "3. " + c;
    document.getElementById("page-content").appendChild(answer_c);

    var answer_d = document.createElement("button")
    answer_d.textContent = "4. " + d;
    document.getElementById("page-content").appendChild(answer_d);
}

function Quiz(event) {
    event.preventDefault();
    console.log("quiz activated")
    scores = []
    /*Generate_Question(q1, q1a, q1b, q1c, q1d);*/
    Generate_Question(q4, q4a, q4b, q4c, q4d);
}

start_button.addEventListener("click",Quiz);