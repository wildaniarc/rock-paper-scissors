let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
let result_p = document.querySelector('.result p');
let compChoice_p = document.querySelector('#comp-choice p');
const userRock_p = document.getElementById('rock');
const userPaper_p = document.getElementById('paper');
const userScissors_p = document.getElementById('scissors');


function getCompChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function effect() {
    let i = 0;
    const choice = ['👊', '✋', '✌']
    const timeStart = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - timeStart > 1000) {
            clearInterval;
            return;
        }
        compChoice_p.innerHTML = choice[i++];
        if (i == choice.length) i=0;
    }, 100)
}

function convertToEmoji(letter) {
    if (letter === 'Rock') return '👊';
    if (letter === 'Paper') return '✋';
    return '✌';
}

function win(userChoice, compChoice) {
    setTimeout(function() {
        userScore++;
        userScore_span.innerHTML = userScore;
        compChoice_p.innerHTML = convertToEmoji(compChoice);
        const smallUserWord = '(user)'.fontsize(3).sub();
        const smallCompWord = '(comp)'.fontsize(3).sub();
        result_p.innerHTML = `${userChoice}${smallUserWord} beats ${compChoice}${smallCompWord}. You Win!!!`;
    }, 1000);
}

function lost(userChoice, compChoice) {
    setTimeout(function() {
        compScore++;
        compScore_span.innerHTML = compScore;
        compChoice_p.innerHTML = convertToEmoji(compChoice);
        const smallUserWord = '(user)'.fontsize(3).sub();
        const smallCompWord = '(comp)'.fontsize(3).sub();
        result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${compChoice}${smallCompWord}. You Lost...`;
    }, 1000);
}

function draw(userChoice, compChoice) {
    setTimeout(function() {
        compChoice_p.innerHTML = convertToEmoji(compChoice);
        const smallUserWord = '(user)'.fontsize(3).sub();
        const smallCompWord = '(comp)'.fontsize(3).sub();
        result_p.innerHTML = `${userChoice}${smallUserWord} equals ${compChoice}${smallCompWord}. It's a draw.`;
    }, 1000);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    // switch (userChoice + compChoice) {
    //     case 'RockScissors':
    //     case 'PaperRock':
    //     case 'ScissorsPaper':
    //         win(userChoice, CompChoice);
    //         break;
    //     case 'RockPaper':
    //     case 'PaperScissors':
    //     case 'ScissorsRock':
    //         lost(userChoice, CompChoice);
    //         break
    //     case 'RockRock':
    //     case 'PaperPaper':
    //     case 'ScissorsScissors':
    //         draw(userChoice, CompChoice);
    // }
    if (userChoice == compChoice) return draw(userChoice, compChoice);
    if (userChoice =='Rock') return (compChoice == 'Scissors') ? win(userChoice, compChoice) : lost(userChoice, compChoice);
    if (userChoice == 'Paper') return (compChoice == 'Rock') ? win(userChoice, compChoice) : lost(userChoice, compChoice);
    if (userChoice == 'Scissors') return (compChoice == 'Paper') ? win(userChoice, compChoice) : lost(userChoice, compChoice);
}

function main() {
    userRock_p.addEventListener('click', function() {
        effect();
        game('Rock');
    })

    userPaper_p.addEventListener('click', function() {
        effect();
        game('Paper');
    })

    userScissors_p.addEventListener('click', function() {
        effect();
        game('Scissors');
    })
}

main();