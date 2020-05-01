// https://simplestepscode.com/javascript-quiz-tutorial/
// https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Add timer here
var count = 60;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        //counter ended, do something here
        return;
    }

    document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling

}


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
//$('#quiz').html(output.join(""))

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');

function showResults() {
    for (let i = 0; i < myQuestions.length; i++) {
        const userAnswerKey = ($(`input[name="question${i}"]:checked`).val())
        const rightAnswer = myQuestions[i].correctAnswer
        const userAnswerValue = (myQuestions[i].answers[userAnswerKey])
        if (userAnswerValue == rightAnswer) {
            console.log("cowabunga")
        } else {
            console.log('Toadally Bogus')
        }
    }
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
























































// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

//     function showQuestions(questions, quizContainer) {
//         // we'll need a place to store the output and the answer choices
//         const output = [];
//         const answers;

//         // for each question...
//         for (var i = 0; i < questions.length; i++) {

//             // first reset the list of answers
//             answers = [];

//             // for each available answer to this question...
//             for (letter in questions[i].answers) {

//                 // ...add an html radio button
//                 answers.push(
//                     '<label>'
//                     + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                     + '</label>'
//                 );
//             }

//             // add this question and its answers to the output
//             output.push(
//                 '<div class="question">' + questions[i].question + '</div>'
//                 + '<div class="answers">' + answers.join('') + '</div>'
//             );
//         }

//         // finally combine our output list into one string of html and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }


//     function showResults(questions, quizContainer, resultsContainer) {
//         // gather answer containers from our quiz
//         var answerContainers = quizContainer.querySelectorAll('.answers');

//         // keep track of user's answers
//         var userAnswer = '';
//         var numCorrect = 0;

//         // for each question...
//         for (var i = 0; i < questions.length; i++) {

//             // find selected answer
//             userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

//             // if answer is correct
//             if (userAnswer === questions[i].correctAnswer) {
//                 // add to the number of correct answers
//                 numCorrect++;

//                 // color the answers green
//                 answerContainers[i].style.color = 'lightgreen';
//             }
//             // if answer is wrong or blank
//             else {
//                 // color the answers red
//                 answerContainers[i].style.color = 'red';
//             }
//         }

//         // show number of correct answers out of total
//         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//     }
// }

// // show the questions
// showQuestions(questions, quizContainer);




// // when user clicks submit, show results
// submitButton.onclick = function () {
//     showResults(questions, quizContainer, resultsContainer);
// }
























































// var card = $("#quiz-area");



// // Variable that will hold the setInterval
// var timer;

// var game = {

//     correct: 0,
//     incorrect: 0,
//     counter: 120,

//     countdown: function () {
//         game.counter--;
//         $("#counter-number").html(game.counter);
//         if (game.counter === 0) {
//             console.log("TIME UP");
//             game.done();
//         }
//     },

//     start: function () {
//         timer = setInterval(game.countdown, 1000);

//         $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

//         $("#start").remove();

//         for (var i = 0; i < questions.length; i++) {
//             card.append("<h2>" + questions[i].question + "</h2>");
//             for (var j = 0; j < questions[i].answers.length; j++) {
//                 card.append("<input type='radio' name='question-" + i +
//                     "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
//             }
//         }

//         card.append("<button id='done'>Done</button>");
//     },

//     done: function () {

//         $.each($("input[name='question-0']:checked"), function () {
//             if ($(this).val() === questions[0].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         $.each($("input[name='question-1']:checked"), function () {
//             if ($(this).val() === questions[1].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         $.each($("input[name='question-2']:checked"), function () {
//             if ($(this).val() === questions[2].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         $.each($("input[name='question-3']:checked"), function () {
//             if ($(this).val() === questions[3].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         $.each($("input[name='question-4']:checked"), function () {
//             if ($(this).val() === questions[4].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         $.each($("input[name='question-5']:checked"), function () {
//             if ($(this).val() === questions[5].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         $.each($("input[name='question-6']:checked"), function () {
//             if ($(this).val() === questions[6].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         $.each($("input[name='question-7']:checked"), function () {
//             if ($(this).val() === questions[7].correctAnswer) {
//                 game.correct++;
//             }
//             else {
//                 game.incorrect++;
//             }
//         });

//         this.result();

//     },

//     result: function () {

//         clearInterval(timer);

//         $("#sub-wrapper h2").remove();

//         card.html("<h2>All Done!</h2>");
//         card.append("<h3>Correct Answers: " + this.correct + "</h3>");
//         card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
//         card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
//     }
// };

// // CLICK EVENTS

// $(document).on("click", "#start", function () {
//     game.start();
// });


// $(document).on("click", "#done", function () {
//     game.done();
// });






            //     {
            //         question: "Which color was not worn by one of the TMNT?",
            //         answers: ["Green", "Orange", "Purple", "Red"],
            //         correctAnswer: "Green"
            //     }, 
            //     {
            //         question: "Who is the archenemy of the Turtles?",
            //         answers: ["Baxter Stockman", "Krang", "The Shredder", "Rocksteady"],
            //         correctAnswer: "The Shredder"
            //     }, {
            //         question: "What is the second half of this quote spoken by Michelangelo? 'Wise man say, Forgiveness is divine, but never pay full price for _________'.?",
            //         answers: ["wisdom", "time", "sadness", "late pizza"],
            //         correctAnswer: "late pizza"
            //     }, {
            //         question: "What is the one ingredient the turtles do NOT like on their pizzas?" ?,
            //         answers: ["Anchovies", "Mushrooms", "Pepperoni", "Pineapple"],
            //         correctAnswer: "Anchovies"
            //     }, {
            //         question: "What substance took the turtles from normal reptiles to crime-fighting ninjas?",
            //         answers: ["Slime", "Goop", "gloop", "ooze"],
            //         correctAnswer: "ooze"
            //     }, {
            //         question: "In the beginning, all of the turtles wore the same color bandana. What color were they?",
            //         answers: ["Blue", "Red", "Orange", "Purple"],
            //         correctAnswer: "Red"
            //     }, {
            //         question: "What was the name of the fifth Teenage Mutant Ninja Turtle?",
            //         answers: ["Jane Austen", "Mona Lisa", "Cleopatra", "Venus de Milo"],
            //         correctAnswer: "Venus de Milo"
            //     }];
            // }