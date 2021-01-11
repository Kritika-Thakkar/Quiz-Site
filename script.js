const quizData = [
    {
        question: "When is Kritika's birthday?",
        a: 'June 11th',
        b: 'Alien?',
        c: 'Jan 27',
        d: 'May 5',
        correct: 'c',
    }, {
        question: "What is Kritika's favourite color?",
        a: 'Yellow',
        b: 'None',
        c: 'Green',
        d: 'Black',
        correct: 'a',
    }, {
        question: 'What year is this?',
        a: '2020',
        b: '2022',
        c: '1885',
        d: '2021',
        correct: 'd',
    }, {
        question: 'Which school did Kritika go to?',
        a: 'DPS',
        b: 'PORPS',
        c: 'KV-AFS',
        d: 'Home schooled?',
        correct: 'b',
    }, {
        question: 'What does Kritika study right now?',
        a: "She's married LOL",
        b: 'Cooking',
        c: 'Engineering',
        d: 'Law',
        correct: 'c',
    }
];

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;
// let answer = undefined;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {
    
    
    const answer = getSelected();
    console.log(answer);  //remove this line if you do not want a list of selected answers in the console 

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You have answered ${score} correctly out of ${quizData.length} questions.</h2>
            <button onclick = "location.reload()" >Do it again?</button>`;
        }
    }

    
});
