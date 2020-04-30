// https://simplestepscode.com/javascript-quiz-tutorial/
// https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

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
    quizContainer.innerHTML =
        // output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        ;
}
);
//$('#quiz').html(output.join(""))
