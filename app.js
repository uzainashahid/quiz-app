var questions = [

{
    question: "What does HTML stand for?",
    option1: "Hyper Text Markup Language",
    option2: "Home Tool Markup Language",
    option3: "Hyperlinks Text Mark Language",
    correctAnswer: "Hyper Text Markup Language"
},

{
    question: "Who developed JavaScript?",
    option1: "Microsoft",
    option2: "Netscape",
    option3: "Google",
    correctAnswer: "Netscape"
},

{
    question: "Which tag is used for heading?",
    option1: "<h1>",
    option2: "<p>",
    option3: "<div>",
    correctAnswer: "<h1>"
},

{
    question: "What is the correct HTML for adding background color?",
    option1: "<body color='yellow'>",
    option2: "<background>yellow</background>",
    option3: "<body style='background-color:yellow'>",
    correctAnswer: "<body style='background-color:yellow'>"
},

{
    question: "Which symbol is used for ID in CSS?",
    option1: ".",
    option2: "#",
    option3: "*",
    correctAnswer: "#"
}

];



var question = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");

var btn = document.getElementById("btn");

var index = 0;
var score = 0;



function clicked() {

    btn.disabled = false;

}



function checkAnswer() {

    var getOptions =
    document.getElementsByName("options");

    var selectedValue = "";

    for (var i = 0; i < getOptions.length; i++) {

        if (getOptions[i].checked) {

            selectedValue =
            getOptions[i].nextElementSibling.innerText;

        }

    }

    var selectedQuestion =
    questions[index - 1];

    if (selectedQuestion) {

        var correctAnswer =
        selectedQuestion.correctAnswer;

        if (selectedValue === correctAnswer) {

            score++;

        }

    }

}



function nextQuestion() {

    if (index > 0) {

        checkAnswer();

    }

    if (index >= questions.length) {

        var percentage =
        ((score / questions.length) * 100).toFixed(2);

        alert(
        "Quiz Finished\n\nScore : "
        + score +
        "\nPercentage : "
        + percentage + "%");

        return;

    }

    question.innerText =
    questions[index].question;

    opt1.innerText =
    questions[index].option1;

    opt2.innerText =
    questions[index].option2;

    opt3.innerText =
    questions[index].option3;

    var getOptions =
    document.getElementsByName("options");

    for (var i = 0; i < getOptions.length; i++) {

        getOptions[i].checked = false;

    }

    btn.disabled = true;

    index++;

}



nextQuestion();



var minutes = 1;
var seconds = 59;

var timer =
document.getElementById("timer");

var interval =
setInterval(function () {

    timer.innerHTML =
    `${minutes}:${seconds}`;

    seconds--;

    if (seconds < 0) {

        minutes--;
        seconds = 59;

    }

    if (minutes < 0) {

        clearInterval(interval);

        alert("Time Over");

    }

}, 1000);

console.log(question);
console.log(opt1);
console.log(opt2);
console.log(opt3);
console.log(btn);
console.log(timer);