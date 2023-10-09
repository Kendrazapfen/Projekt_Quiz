
let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}

function showQuestion() {
    if(currentQuestion>=questions.length){
        document.getElementById('end-screen').style='';
        document.getElementById('question-body').style='display: none;';
    }else{
    
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
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
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

