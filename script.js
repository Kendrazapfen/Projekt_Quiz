let rightQuestions = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('audio/win.mp3');
let AUDIO_FAIL = new Audio('audio/lost.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}

function showQuestion() {
    if(currentQuestion>=questions.length){
        document.getElementById('end-screen').style='';
        document.getElementById('question-body').style='display: none;';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = "img/trophy.png";
    }else{
    
        let percent = (currentQuestion+1)/questions.length;
        percent = Math.round(percent*100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;
        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion+1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer1'];
        document.getElementById('answer_2').innerHTML = question['answer2'];
        document.getElementById('answer_3').innerHTML = question['answer3'];
        document.getElementById('answer_4').innerHTML = question['answer4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionnumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionnumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    };

    document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('header-image').src = "img/bg b.png";
    document.getElementById('question-body').style='';
    document.getElementById('end-screen').style='display:none;';
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}
