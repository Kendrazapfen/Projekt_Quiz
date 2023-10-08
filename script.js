let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionnumber = selection.slice(-1);
    let idOfRightAnswer= `answer_${question['right_answer']}`;

    if (selectedQuestionnumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    };

}