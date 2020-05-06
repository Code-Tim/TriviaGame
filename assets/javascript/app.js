// https://simplestepscode.com/javascript-quiz-tutorial/
// https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//start game and hide button
$(document).ready(function () {
    $('#startGame').on("click", function () {
        console.log('Turtle Time')
        // timer()
        $("#container").hide();
        // timer starts when start button is clicked
        var count = 60;

        var counter = setInterval(function timer() {
            count = count - 1;
            if (count <= 0) {
                clearInterval(counter);
                //counter ended, do something here
                return;
            }

            $("#timer").html(count + " sec"); // watch for spelling

        }, 1000); //1000 will  run it every 1 second


    })
})

var toadallyBogus = 0
var cowabungaDude = 0

function buildQuiz() { }
// variable to store the HTML output
const output = [];
const myQuestions = [
    {
        question: "What is Raphel's choice in weapon?",
        answers: {
            A: "Nunchaku",
            B: "Ninjatos",
            C: "Sai",
            D: "Bo",
        },
        correctAnswer: "Sai"
    },
    {
        question: "Which color was not worn by one of the TMNT?",
        answers: {
            A: "Green",
            B: "Orange",
            C: "Purple",
            D: "Red",
        },
        correctAnswer: "Green"
    },
    {
        question: "Who is the archenemy of the Turtles?",
        answers: {
            A: "Baxter Stockman",
            B: "Krang",
            C: "The Shredder",
            D: "Rocksteady",
        },
        correctAnswer: "The Shredder"
    },
    {
        question: "What is the second half of this quote spoken by Michelangelo? 'Wise man say, Forgiveness is divine, but never pay full price for _________'.?",
        answers: {
            A: "wisdom",
            B: "time",
            C: "sadness",
            D: "late pizza",
        },
        correctAnswer: "late pizza"
    },
    {
        question: "What is the one ingredient the turtles do NOT like on their pizzas?",
        answers: {
            A: "Anchovies",
            B: "Mushrooms",
            C: "Pepperoni",
            D: "Pineapple",
        },
        correctAnswer: "Anchovies"
    },
    {
        question: "What substance took the turtles from normal reptiles to crime-fighting ninjas?",
        answers: {
            A: "Slime",
            B: "Goop",
            C: "Gloop",
            D: "Ooze",
        },
        correctAnswer: "Ooze"
    },
    {
        question: "In the beginning, all of the turtles wore the same color bandana. What color were they?",
        answers: {
            A: "Blue",
            B: "Orange",
            C: "Red",
            D: "Purple",
        },
        correctAnswer: "Red"
    },
    {
        question: "What was the name of the fifth Teenage Mutant Ninja Turtle?",
        answers: {
            A: "Jane Austen",
            B: "Mona Lisa",
            C: "Cleopatra",
            D: "Venus de Milo",
        },
        correctAnswer: "Nunchaku"
    }
];
let currentQuestion = 0
// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here

    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
    }

    // add this question and its answers to the output
    output.push(
        // output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );
}
);

// $('#container').prepend(
//     '<h4>Time Remaining:</h4><span id= "timer">60</span>'
// )

// $('#questions').prepend(
//     '<h4> Questions: </h4><span> </span>'
// )

// $('#start').remove{ }

// $('#previous').click(function ())

//$('#quiz').html(output.join(""))

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');

function showResults() {
    for (let i = 0; i < myQuestions.length; i++) {
        const userAnswerKey = ($(`input[name="question${i}"]:checked`).val())
        const rightAnswer = myQuestions[i].correctAnswer
        const userAnswerValue = (myQuestions[i].answers[userAnswerKey])
        if (userAnswerValue == rightAnswer) {
            console.log("Cowabunga Dude") // change to show results
            cowabungaDude++
            console.log(cowabungaDude)
            // $('#results').append(cowabungaDude)
        } else {
            console.log('Toadally Bogus') // change to show results
            toadallyBogus++
            console.log(toadallyBogus)
            // $('#results').append(toadallyBogus)
        }
    }

    var results = $('#results');
    $(results).append("<p>Cowabunga Dude!!!</p>");
    $(results).append("<p>Correct Answers: " + cowabungaDude + "</p>");
    $(results).append("<p>Incorrect Answers: " + toadallyBogus + "</p>");
    clearInterval(intervalID);

}
// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);