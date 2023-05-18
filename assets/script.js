const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons'); 
const timer = document.getElementById('timer');
const endContainer = document.getElementById('end-container');
const finalScore = document.getElementById('final-score');
const initialsForm = document.getElementById('initials-form');
const initialsInput = document.getElementById('initials');

let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;
let timerInterval;

// Define the quiz questions and answers
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

// Start the quiz when the start button is clicked
startBtn.addEventListener('click', startQuiz);

// Start the quiz
function startQuiz() {
  startTimer();
  showQuestion();
  let start=document.getElementById('start-btn')
  start.setAttribute('class', 'hidden') 
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = `${timeLeft.toString().padStart(2, '0')}:00`;

    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

// Display the current question and answers
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionContainer.textContent = question.title;
currentQuestionIndex++ 
    for (var i = 0; i < question.choices.length; i++) {

   var choice = question.choices[i];
    console.log(i + 1 + '. ' + choice)
    console.log(choice)
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // display on the page
    questionContainer.appendChild(choiceNode);

  }}

  