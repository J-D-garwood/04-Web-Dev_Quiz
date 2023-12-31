//gathering key elements
var start_button = document.querySelector(".start-button");
var body = document.querySelector("body");
var main = document.querySelector("#page-content");
var clock = document.querySelector('#timer')

// Questions
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

//display_banner parameter
var wheth_crr = false

//score values
var score = 0 //holds the score
var timeleft = 75 //holds the timer
var scores = localStorage.getItem("scores")

//timer function
function countdown() {
    var timeInterval = setInterval(function() {
        if (timeleft>0) {
            clock.textContent = 'Time: ' + timeleft;
            timeleft--;
        } 
        else {
            clock.textContent = 'Time: 0';
            while (main.childElementCount>0) {
                main.children[0].remove();
            }
            var endscreen = document.createElement("div")
            endscreen.setAttribute("id","endscreen")
            endscreen.setAttribute("style", "width:800px; margin-left:500px; text-align:left")
            document.getElementById("page-content").appendChild(endscreen)

            var Alldone = document.createElement("h1")
            Alldone.textContent = "All done!"
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
            input_entry.setAttribute("style", "height: 15px; width: 220px;margin-left:5px")
            document.getElementById("inputsect").appendChild(input_entry)

            var submit_button = document.createElement("button")
            submit_button.textContent = "Submit"
            submit_button.setAttribute("style", "margin-left:5px;padding:1px;border-radius:5px;")
            document.getElementById("inputsect").appendChild(submit_button)
            var button_5 = document.querySelector("button")

            button_5.addEventListener("click", HandleFormSubmit)
            clearInterval(timeInterval);
        }
    }, 1000)
}

//"correct"/"incorrect" banner function
function display_banner(correct, extra_left_margin) {
    var banner = document.createElement("div")
    if (correct) {
        banner.textContent = "Correct!!"
    } else {
        banner.textContent = "Incorrect!!"
    }
    if (extra_left_margin) {
        var left_margin = "500px"
    } else {
        var left_margin = "500px"
    }
    banner.setAttribute("style", "width: 400px; margin-top:5px; margin-left:"+left_margin+";padding-top:8px;border-top:2px solid;border-color:grey;color:grey")
    document.getElementById("page-content").appendChild(banner)
    var index = main.childElementCount - 1 
    var tmr = 2
    var timeInterval = setInterval( function() {
        if (tmr === 2) {
            tmr--;
        } else if (tmr === 1) {
            main.children[index].remove();
            tmr--
        } else {
            clearInterval(timeInterval)
        }
    }, 500)
}

//Question Generator w/ questions as parameters
function Generate_Question(Q, a, b, c, d) {
    //loop to remove all main's current child elements
    while (main.childElementCount>0) {
        main.children[0].remove();
    }

    var question = document.createElement("h1");
    question.setAttribute("style", "text-align:left; margin-left:500px;")
    question.textContent = Q;
    document.getElementById("page-content").appendChild(question)

    var answer_list = document.createElement("ul")
    answer_list.setAttribute("id", "answerList")
    answer_list.setAttribute("style","text-align:left;list-style-type:none; margin-left:450px")
    document.getElementById("page-content").appendChild(answer_list)

    var li_a = document.createElement("li")
    var answer_a = document.createElement("button")
    answer_a.setAttribute("style", "margin:2px;padding:2px;border-radius:5px;")
    answer_a.textContent = "1. " + a;
    li_a.appendChild(answer_a)
    document.getElementById("answerList").append(li_a);

    var li_b = document.createElement("li")
    var answer_b = document.createElement("button")
    answer_b.setAttribute("style", "margin:2px;padding:2px;border-radius:5px;")
    answer_b.textContent = "2. " + b;
    li_b.appendChild(answer_b)
    document.getElementById("answerList").append(li_b);

    var li_c = document.createElement("li")
    var answer_c = document.createElement("button")
    answer_c.setAttribute("style", "margin:2px;padding:2px;border-radius:5px;")
    answer_c.textContent = "3. " + c;
    li_c.appendChild(answer_c)
    document.getElementById("answerList").append(li_c);

    var li_d = document.createElement("li")
    var answer_d = document.createElement("button")
    answer_d.setAttribute("style", "margin:2px;padding:2px;border-radius:5px;")
    answer_d.textContent = "4. " + d;
    li_d.appendChild(answer_d)
    document.getElementById("answerList").append(li_d);
}

//Submit Form Function (Saving new score w/ initals to localstorage and navigating to highscores)
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

//Final page generation w/ input section to save initials
function Quiz_end_from_completion(event) {
    event.preventDefault()

    choice_4 = event.target.textContent
    while (main.childElementCount>0) {
        main.children[0].remove();
    }

    if (choice_4 ==="3. " +q4c) {
        score++;
        wheth_crr = true
    }
    var endscreen = document.createElement("div")
    endscreen.setAttribute("id","endscreen")
    endscreen.setAttribute("style", "width:800px; margin-left:500px; text-align:left")
    document.getElementById("page-content").appendChild(endscreen)
        
    var Alldone = document.createElement("h1")
    Alldone.textContent = "All done!"
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
    submit_button.setAttribute("style", "margin-left:5px;padding:3px;border-radius:5px;")
    submit_button.textContent = "Submit"
    document.getElementById("inputsect").appendChild(submit_button)
    var button_5 = document.querySelector("button")

    display_banner(wheth_crr, false)

    button_5.addEventListener("click", HandleFormSubmit)

    } 

/*Generates Q4*/
function Quiz_q4(event) {
    event.preventDefault();

    choice_3 = event.target.textContent
    if (choice_3 ==="4. " + q3d) {
        score++;
        wheth_crr = true
    } else {
        timeleft = timeleft - 15
    }

    Generate_Question(q4, q4a, q4b, q4c, q4d)
    display_banner(wheth_crr, true)
    var buttons_4 = document.querySelectorAll("button")
    var buttons_41 = buttons_4[0]
    var buttons_42 = buttons_4[1]
    var buttons_43 = buttons_4[2]
    var buttons_44 = buttons_4[3]

    buttons_41.addEventListener("click",Quiz_end_from_completion)
    buttons_42.addEventListener("click",Quiz_end_from_completion)
    buttons_43.addEventListener("click",Quiz_end_from_completion)
    buttons_44.addEventListener("click",Quiz_end_from_completion)
    wheth_crr = false
}

/*Generates Q3*/
function Quiz_q3(event) {
    event.preventDefault();

    choice_2 = event.target.textContent
    if (choice_2 === "3. " +q2c) {
        score++;
        wheth_crr = true
    } else {
        timeleft = timeleft - 15
    }

    Generate_Question(q3, q3a, q3b, q3c, q3d)
    display_banner(wheth_crr, true)
    var buttons_3 = document.querySelectorAll("button")
    var buttons_31 = buttons_3[0]
    var buttons_32 = buttons_3[1]
    var buttons_33 = buttons_3[2]
    var buttons_34 = buttons_3[3]


    buttons_31.addEventListener("click",Quiz_q4)
    buttons_32.addEventListener("click",Quiz_q4)
    buttons_33.addEventListener("click",Quiz_q4)
    buttons_34.addEventListener("click",Quiz_q4)
    wheth_crr = false
}

/*Generates Q2*/
function Quiz_q2(event) {
    event.preventDefault();

    choice_1 = event.target.textContent
    if (choice_1 === "3. " +q1c) {
        score++;
        wheth_crr = true
    } else {
        timeleft = timeleft - 15
    }

    Generate_Question(q2, q2a, q2b, q2c, q2d)
    display_banner(wheth_crr, true)
    var buttons_2 = document.querySelectorAll("button")
    var buttons_21 = buttons_2[0]
    var buttons_22 = buttons_2[1]
    var buttons_23 = buttons_2[2]
    var buttons_24 = buttons_2[3]

    buttons_21.addEventListener("click",Quiz_q3)
    buttons_22.addEventListener("click",Quiz_q3)
    buttons_23.addEventListener("click",Quiz_q3)
    buttons_24.addEventListener("click",Quiz_q3)
    wheth_crr = false
}

/*Generates Q1, starts timer*/
function Quiz_intro_q1(event){
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
