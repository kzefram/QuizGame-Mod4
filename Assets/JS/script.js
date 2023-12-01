var quiz = document.getElementById('Quiz');
var start = document.getElementById('start-btn');
var timer = document.getElementById('timer');
var score = 0;
var counter = 60;
var intervalID;

var questions = [
    {
        prompt: " What does HTML stand for?\n(a) Help The Man Live\n(b) However the magistrate loves\n(c) HyperText Mark-up Language\n(d) Hal Tal Misses Love",
        answer: "c"
    },
    {
        prompt: "What does CSS stand for?\n(a) Canada Still Saves\n(b) Cascading Style Sheet\n(c) Casandra Saves Silver\n(d) Can Sally Sing",
        answer: "b"
    },
    {
        prompt: "What does JavaScript do to a website?\n(a) Makes the website dance/functional\n(b) Picks its nose\n(c) Takes over the world\n(d) Babysits",
        answer: "a"
    },
    {
        prompt: "When did HTML begin?\n(a) 1789\n(b) 2021\n(c) 1993\n(d) 2000BCE",
        answer: "c"
    },
    {
        prompt: " When did CSS begin?\n(a) 15BCE\n(b) 1550\n(c) Yesterday\n(d) 1996",
        answer: "d"
    }
]





start.addEventListener('click', function countdown(seconds) {
    console.log("hello");
    let count = seconds;

    intervalID = setInterval(() => {
        console.log(counter)
        document.getElementById('timer').textContent = counter;
        counter--;

        if (counter < 0) {
            cleanInterval(intervalID);
            alert('Ding! Times up!');
        }
    }, 1000)


    for(var i = 0; i < questions.length; i++) {
        let response = window.prompt(questions[i].prompt);
        if(response === questions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("WRONG!");
        }
    }
    alert("you got " + score + "/" + questions.length);
});