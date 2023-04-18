const quizData = [
    {
        question : 'Adın nedir?',
        a: 'ahmet',
        b : 'mehmet',
        c : 'serkan',
        d : 'ali',
        correct: 'c'
    },
    {
        question: 'Kaç yaşındasın?',
        a: '19',
        b: '20',
        c: '21',
        d: '22',
        correct: 'c'
    },
    {
        question: 'who is better?',
        a: 'ismail yk',
        b: 'tıvorlu ismail',
        c: 'taylor swift',
        d: 'the weeknd',
        correct : 'd'
    },
    {
        question: 'which game has better combat system than others?',
        a: 'dark souls',
        b: 'Sekiro',
        c: 'metin2',
        d: 'gta',
        correct: 'b'
    },
    {
        question: 'what do you prefer after dinner?',
        a: 'take a nap',
        b: 'cup of tea',
        c: 'cup of coffee',
        d: 'nothing just laying',
        correct : 'b'
    },
];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');


let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if(answer) {

        if(answer == quizData[currentQuiz].correct){
            score++;
            console.log("10 puan kazandın");
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
            document.querySelector('input[name="answer"]:checked').checked = false;

        }
        else {
            // tod show results
            quiz.innerHTML = `<h2> Congratulations! You answered correctly at ${score}/${quizData.length} questions. </h2>
            <button onclick = "location.reload()"> Başa dön. </button>`;
            
            
        }
    }


});
