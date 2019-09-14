let timerStart = 60;
let intervalId;
let answersRight= 0;
let answersWrong= 0;

let questions = [
    {question: 'Which is a starter pokemon?',
      answers: ['Squirtle', 'Catman', 'Mewtwo', 'Tyranitar'],
      correct: 0,
    },

    {question: "Which of the following was NOT one of Voldemort's Horcruxes?",
    answers: ['The Snake', 'Harry', 'The Diary', 'The Sword'],
    correct: 3,
    },

    {question: 'Who starred in Breaking Bad?',
     answers: ['Horatio Sanz', 'Chris Pratt', 'Bryan Cranston', 'Matt Damon'],
     correct: 2,
    },

    {question: "Thor (of Marvel's Avengers) is native to which realm?",
    answers: ['Asgard','Earth', 'Knowhere', 'C-137'],
    correct: 0,
    },

    {question: 'Which robot did WALL-E love?',
     answer: ['C-3PO','EVE', 'T-800','GLaDOS'],
     correct: 1,
}];

$("#start").on("click", function() {

    $(this).hide();

    
    $("#time").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");

    run();
});

$("#question1").html("<h3>" + questions[0].question + "</h3>");
$("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
    + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
    + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
    + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
);

$("#question2").html("<h3>" + questions[1].question + "</h3>");
$("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
    + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
    + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
    + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
);

$("#question3").html("<h3>" + questions[2].question + "</h3>");
$("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
    + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
    + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
    + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
);

$("#question4").html("<h3>" + questions[3].question + "</h3>");
$("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
    + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
    + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
    + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
);

$("#question5").html("<h3>" + questions[4].question + "</h3>");
$("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
    + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
    + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
    + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label> + <br><br>"
);

$("#submit").html("<button id='done' class='btn'>Done</button>");

function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timerStart--;
}

$("#time").html("<h2>Time Remaining: " + timerStart + " Seconds</h2>" + "<br>");
if (timerStart === 0) {
    stop();
    keepingScore();
    displayResults();

}
function stop() {

    
    clearInterval(intervalId);
}


function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + answersRight);
    $("#incorrect").html("Incorrect Answers: " + answersWrong);
    
}

function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();

    if (userAnswer1 == questions[0].answer) {

        answersRight++;
    }
    else {

        answersWrong++;
    }

    if (userAnswer2 == questions[3].answer) {

        answersRight++;
    }
    else {

        answersWrong++;
    }

    if (userAnswer3 == questions[2].answer) {

        answersRight++;
    }
    else {

        answersWrong++;
    }

    if (userAnswer4 == questions[0].answer) {

        answersRight++;
    }
    else {

        answersWrong++;
    }

    if (userAnswer5 == questions[1].answer) {

        answersRight++;
    }
    else {

        answersWrong++;
    }
}


