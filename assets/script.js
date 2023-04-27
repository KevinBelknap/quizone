// list of all questions, choices, and answers
var time = 60
var timerid;

var questionsEL = document.getElementById('question-title')
var choice = document.getElementById('question')
var timer = document.getElementById('timer')
var start = document.getElementById('Start-Quiz')


var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        title:
            'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },





];
function startQuiz() {
    timerid = setInterval(clockTick, 1000)
    timer.textContent = time
    nextquestion()
}

function clockTick() {
    time--
    timer.textContent = time

}

function nextquestion() {
    var currentQuestion = questions[0]

    var titleid = document.getElementById('question-title')

    titleid.textContent = currentQuestion.title
var options = getElementById('choice')
options.textContent = currentQuestion.choices[1]
console.log(options)
}


start.onclick = startQuiz


