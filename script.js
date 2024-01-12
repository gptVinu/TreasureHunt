var currentQuestionIndex = 0;

function showMessage5() {
    showNextQuestion();
    alert("The next digit of code is : {6}!");
    redirectToTop();
}
function showMessage1() {
    showNextQuestion();
    alert("The next digit of code is : {4}!");
    redirectToTop();
}
function showMessage3() {
    showNextQuestion();
    alert("The next digit of code is : {5}!");
    redirectToTop();
}
function showMessage0() {
    alert("Oops ! Noting avilable here !");
    redirectToTop();
}
function showMessage2() {
    showNextQuestion();
    alert("The next digit of code is : {2}!");
    redirectToTop();
}

function showMessage4() {
    showNextQuestion();
    alert("The next digit of code is : {7}!");
    redirectToTop();
}

function showNextQuestion() {
    var questions = document.querySelectorAll('.q-container');
            
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].style.display = 'none';
        currentQuestionIndex++;
    }

    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].style.display = 'block';
    } else {
        // Last question completed, trigger celebration
        triggerCelebration();
    }
}

function triggerCelebration() {
    var celebration = document.querySelector('.celebration');
    celebration.style.display = 'block';

    // Display sparkle and bomb animations
    for (let i = 0; i < 100; i++) {
        createSparkle();
    }
    for (let i = 0; i < 20; i++) {
        createBomb();
    }

    // Display popup after a delay
    setTimeout(function() {
        showPopup();
    }, 3000); // Adjust the delay as needed
}

function redirectToTop() {
    window.location.href = '#top'; 
}

function showPopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
}

function createSparkle() {
    var sparkle = document.createElement('img');
    sparkle.src = 'sparkle.jpg';
    sparkle.className = 'sparkle';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';

    document.querySelector('.celebration').appendChild(sparkle);
}

function createBomb() {
    var bomb = document.createElement('img');
    bomb.src = 'bomb2.png';
    bomb.className = 'bomb';
    bomb.style.top = Math.random() * window.innerHeight + 'px';
    bomb.style.left = Math.random() * window.innerWidth + 'px';

    document.querySelector('.celebration').appendChild(bomb);
}
