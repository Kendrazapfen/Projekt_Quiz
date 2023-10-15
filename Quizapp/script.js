let rightQuestions = 0;     //ordnet der Variablen rightQuestion den Wert 0 zu
let currentQuestion = 0;    //ordnet der Variablen currentQuestion den Wert 0 zu

let AUDIO_SUCCESS = new Audio('audio/lost.mp3');
let AUDIO_FAIL = new Audio('audio/lost.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;      //sucht die ID im html, ersetzt die Gesamtanzahl an Fragen mit der Länge/Azahl der Elemente des JSON
    showQuestion(); 
}

function showQuestion() {
    if (gameIsOver()) { //die Bedingung gameIsOver ist ausgelagert als Funktion
        showEndScreen();
    } else {
        updateToNextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;//Bedingung für den if Teil der shoWQuestion - Funktion; gibt zurück ob aktuelle Frage die Letzte im JSON ist
}
function answer(i) {    //die Funktion hat den Parameter selection
    let rightAnswer = questions[currentQuestion]['right_answer'];
    let question = questions[currentQuestion];// die Variable wird der aktuellen Stelle im JSON questions zugewiesen
    //let selectedQuestionnumber = selection.slice(-1); //dem Parameter wird der gefundenen/geschnittene Teil des arrays zugewiesen
    let idOfRightAnswer = `answer_${question['right_answer']}`; //die Variable erhält dadurch den Wert/Nummer der jeweils richtigen Antwort

    if (rightAnswerSelected(i)) { //wenn die Variable tatsächlich den gleichen Wert wie die richtigen Antwort hat, dann...
        document.getElementById(`answer_${i}`).parentNode.classList.add('bg-success'); //klickt man die richtige Antwort an, wird sie grün; d.h. sie bekommt einen anderen css style
        AUDIO_SUCCESS.play();
        rightQuestions++; //erhöt die Variable jeweils um eine Stelle (wie plus 1)
        
    }
    else {
        document.getElementById(`answer_${i}`).parentNode.classList.add('bg-danger');//klickt man die falsche Antwort an, wird sie rot
        //document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    };
    disabledAnswer();
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = "img/bg b.png";
    document.getElementById('question-body').style = '';
    document.getElementById('end-screen').style = 'display:none;';
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none;';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = "img/trophy.png";
}

function updateToNextQuestion() {
    updateProgressBar();
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function rightAnswerSelected(i){
    let rightAnswer = questions[currentQuestion]['right_answer'];   
    return i == rightAnswer;
}

function disabledAnswer(){
    for (let i  = 1; i  <= 4; i ++) {
        document.getElementById(`answer_${i}`).parentNode.onclick = null;
        }
}