const quizData = [
    {
        question: 'this is question 1',
        a: 'option 1',
        b: 'option 2',
        c: 'option 3',
        d: 'option 4',
        correct: 'c',
    }, {
        question: 'this is question 2',
        a: 'option 1',
        b: 'option 2',
        c: 'option 3',
        d: 'option 4',
        correct: 'a',
    }, {
        question: 'this is question 3',
        a: 'option 1',
        b: 'option 2',
        c: 'option 3',
        d: 'option 4',
        correct: 'd',
    }, {
        question: 'this is question 4',
        a: 'option 1',
        b: 'option 2',
        c: 'option 3',
        d: 'option 4',
        correct: 'b',
    }, {
        question: 'this is question 5',
        a: 'option 1',
        b: 'option 2',
        c: 'option 3',
        d: 'option 4',
        correct: 'c',
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert("The quiz is completed! Get yourself a lemonade!");
    }

    loadQuiz();
});
