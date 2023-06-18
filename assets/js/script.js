var start_button = document.querySelector(".start-button");
var body = document.querySelector("body");
var main = document.querySelector("#page-content");
var clock = document.querySelector('#timer')


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

function countdown() {
    var timeleft = 75

    var timeInterval = setInterval(function() {
        if (timeleft>0) {
            clock.textContent = 'Time: ' + timeleft;
            timeleft--;
        } else {
            clock.textContent = '';
            clearInterval(timeInterval);

            /*Something goes here */
        }
    }, 1000)

}

function endquiz() {

}

function Generate_Question(Q, a, b, c, d/*, /*correct_ans*/) {
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

/*Generates Q4*/
function Quiz_q4(event) {
    event.preventDefault();
    Generate_Question(q4, q4a, q4b, q4c, q4d)
    console.log("Quiz Activated - 4")
    var buttons_4 = document.querySelectorAll("button")
    var buttons_41 = buttons_4[0]
    var buttons_42 = buttons_4[1]
    var buttons_43 = buttons_4[2]
    var buttons_44 = buttons_4[3]

    buttons_41.addEventListener("click",Quiz_q4)
    buttons_42.addEventListener("click",Quiz_q4)
    buttons_43.addEventListener("click",Quiz_q4)
    buttons_44.addEventListener("click",Quiz_q4)
}

/*Generates Q3*/
function Quiz_q3(event) {
    event.preventDefault();
    Generate_Question(q3, q3a, q3b, q3c, q3d)
    console.log("Quiz Activated - 3")
    var buttons_3 = document.querySelectorAll("button")
    var buttons_31 = buttons_3[0]
    var buttons_32 = buttons_3[1]
    var buttons_33 = buttons_3[2]
    var buttons_34 = buttons_3[3]

    buttons_31.addEventListener("click",Quiz_q4)
    buttons_32.addEventListener("click",Quiz_q4)
    buttons_33.addEventListener("click",Quiz_q4)
    buttons_34.addEventListener("click",Quiz_q4)
}

/*Generates Q2*/
function Quiz_q2(event) {
    event.preventDefault();
    Generate_Question(q2, q2a, q2b, q2c, q2d)
    console.log("Quiz Activated - 2")
    var buttons_2 = document.querySelectorAll("button")
    var buttons_21 = buttons_2[0]
    var buttons_22 = buttons_2[1]
    var buttons_23 = buttons_2[2]
    var buttons_24 = buttons_2[3]

    buttons_21.addEventListener("click",Quiz_q3)
    buttons_22.addEventListener("click",Quiz_q3)
    buttons_23.addEventListener("click",Quiz_q3)
    buttons_24.addEventListener("click",Quiz_q3)
}

/*Generates Q1, starts countdown*/
function Quiz_intro_q1(event) {
    event.preventDefault();
    countdown()
    console.log("quiz activated")
    Generate_Question(q1, q1a, q1b, q1c, q1d);

    var buttons_1 = document.querySelectorAll("button")
    var buttons_11 = buttons_1[0]
    var buttons_12 = buttons_1[1]
    var buttons_13 = buttons_1[2]
    var buttons_14 = buttons_1[3]

    buttons_11.addEventListener("click",Quiz_q2)
    buttons_12.addEventListener("click",Quiz_q2)
    buttons_13.addEventListener("click",Quiz_q2)
    buttons_14.addEventListener("click",Quiz_q2)
}

/*Activates Quiz*/
start_button.addEventListener("click", Quiz_intro_q1);