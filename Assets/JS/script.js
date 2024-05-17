const question = document.getElementById("Question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
var questioncounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: " What does HTML stand for?",
        choice1: "Help The Man Live",
        choice2: "However the magistrate loves",
        choice3: "HyperText Mark-up Language",
        choice4: "Hal Tal Misses Love",
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        choice1: "Canada Still Saves",
        choice2: "Cascading Style Sheet",
        choice3: "Casandra Saves Silver",
        choice4: "Can Sally Sing",
        answer: 3
    },
    {
        question: "What does JavaScript do to a website?", 
        choice1: "Makes the website dance/functional", 
        choice2: "Picks its nose",
        choice3: "Takes over the world",
        choice4: "Babysits",
        answer: 1
    },
    {
        question: "When did HTML begin?",
        choice1: "1789",
        choice2: "2021",
        choice3: "1993",
        choice4: "2000BCE",
        answer: 3
    },
    {
        question: " When did CSS begin?",
        choice1: "15BCE",
        choice2: "1550",
        choice3: "Yesterday",
        choice4: "1996",
        answer: 4
    }
]

const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 4;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();