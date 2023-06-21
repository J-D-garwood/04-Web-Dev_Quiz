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

var score = 0 //holds the score
var timeleft = 75 //holds the timer
var scores = localStorage.getItem("scores")
/*if (scores != null) {
    string_scorelist = scores
    score_list = string_scorelist.split(" ")
    score_list_b = score_list.slice(1)
    console.log(score_list_b)
}*/

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeleft>0) {
            clock.textContent = 'Time: ' + timeleft;
            timeleft--;
        } else {
            clock.textContent = 'TIME OUT!';
            clearInterval(timeInterval);

            /*Something goes here */
        }
    }, 1000)
}

function Correct_banner() {
    /*function to display correct banner*/
} 

function inorrect_banner() {
    /*function to display incorrect banner*/
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

function HandleFormSubmit(event) {
    event.preventDefault()
    var initials = document.querySelector("input")
    var player_initials = initials.value.replaceAll(" ", "")
    console.log(player_initials)
    scores = scores + " " + JSON.stringify(score) + player_initials
    localStorage.setItem("scores", scores)
    console.log(scores)
    window.location.replace("./highscores.html")
}


function Quiz_end_from_completion(event) {
    event.preventDefault()
    choice_4 = event.target.textContent
    if (choice_4 ==="3. " +q4c) {
        score++;
    }

    while (main.childElementCount>0) {
        main.children[0].remove();
    }
    var endscreen = document.createElement("div")
    endscreen.setAttribute("id","endscreen")
    endscreen.setAttribute("style", "width:800px; margin:auto; text-align:left")
    document.getElementById("page-content").appendChild(endscreen)

    var Alldone = document.createElement("h1")
    Alldone.textContent = "All done"
    document.getElementById("endscreen").appendChild(Alldone)

    var printedscore = document.createElement("p")
    printedscore.textContent = "your final score was " + JSON.stringify(score)
    document.getElementById("endscreen").appendChild(printedscore)

    var input_sect = document.createElement("div")
    input_sect.setAttribute("id","inputsect")
    input_sect.setAttribute("style", "display:flex; margin-top: 30px")
    document.getElementById("endscreen").appendChild(input_sect)

    var enterinitals = document.createElement("div")
    enterinitals.textContent = "Enter Initials: "
    enterinitals.setAttribute("style", "height: 20px")
    document.getElementById("inputsect").appendChild(enterinitals)

    var input_entry = document.createElement("input")
    input_entry.setAttribute("style", "height: 15px; width: 220px")
    document.getElementById("inputsect").appendChild(input_entry)

    var submit_button = document.createElement("button")
    submit_button.textContent = "Submit"
    document.getElementById("inputsect").appendChild(submit_button)
    var button_5 = document.querySelector("button")

    button_5.addEventListener("click", HandleFormSubmit)
}

function Quiz_end_from_timeout(event) {
    event.preventDefault()
}

/*Generates Q4*/
function Quiz_q4(event) {
    choice_3 = event.target.textContent
    if (choice_3 ==="4. " +q3d) {
        score++;
    } else {
        timeleft = timeleft - 15
    }

    event.preventDefault();
    Generate_Question(q4, q4a, q4b, q4c, q4d)
    var buttons_4 = document.querySelectorAll("button")
    var buttons_41 = buttons_4[0]
    var buttons_42 = buttons_4[1]
    var buttons_43 = buttons_4[2]
    var buttons_44 = buttons_4[3]

    buttons_41.addEventListener("click",Quiz_end_from_completion)
    buttons_42.addEventListener("click",Quiz_end_from_completion)
    buttons_43.addEventListener("click",Quiz_end_from_completion)
    buttons_44.addEventListener("click",Quiz_end_from_completion)
}

/*Generates Q3*/
function Quiz_q3(event) {
    choice_2 = event.target.textContent
    if (choice_2 === "3. " +q2c) {
        score++;
    } else {
        timeleft = timeleft - 15
    }

    event.preventDefault();
    Generate_Question(q3, q3a, q3b, q3c, q3d)
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
    choice_1 = event.target.textContent
    if (choice_1 === "3. " +q1c) {
        score++;
    } else {
        timeleft = timeleft - 15
    }

    event.preventDefault();
    Generate_Question(q2, q2a, q2b, q2c, q2d)
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
    countdown();
    score = 0
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
