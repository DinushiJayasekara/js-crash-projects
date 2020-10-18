// Challenge 1 - Your age in days
function ageInDays() {
    var birthDate  = prompt('Which day were you born on?');
    var birthMonth  = prompt('Which month (as a number) were you born in?');
    var birthYear  = prompt('Which year were you born in?');
    var todayDate = new Date();
    var userDate = new Date(birthDate + "/" + birthMonth + "/" + birthYear);
    var age = Math.floor((todayDate.getTime() - userDate.getTime()) / (1000 * 3600 * 24));
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(`You are ${age} days old as of today!`)
    h1.setAttribute('id', 'age');
    h1.appendChild(textAnswer);
    document.getElementById('flexbox-result-1').appendChild(h1);
}

function reset_1() {
    document.getElementById('age').remove();
}

// Challenge 2 - Cat Generator
function catGenerate() {
    var img = document.createElement('img');
    img.setAttribute('src', 'http://www.randomkittengenerator.com/cats/rotator.php');
    document.getElementById('flexbox-result-2').appendChild(img);
}

function reset_2() {
    console.log(document.getElementsByClassName('kitten'));
    document.getElementById('flexbox-result-2').innerHTML = '';
}

// Challenge 3 - Rock, Paper, Scissors
function playRPS(userChoice) {
    var humanChoice, botChoice;
    humanChoice = userChoice.id;
    botChoice = selectChoice(generateRandom());
    results = decideWinner(humanChoice, botChoice);
    message = finalMsg(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function generateRandom() {
    return Math.floor(Math.random() * 3);
}

function selectChoice(number) {
    var arr = ['rock', 'paper', 'scissors'];
    return arr[number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsData = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };
    var humanScore = rpsData[humanChoice][botChoice];
    var botScore = rpsData[botChoice][humanChoice];
    return [humanScore, botScore];
}

function finalMsg([humanScore, botScore]) {
    if(humanScore === 0) {
        return {'message': 'Oh no! You lost 😟', 'color': 'red'}
    } else if(humanScore === 1) {
        return {'message': 'Yay! You won 😎', 'color': 'green'}
    } else {
        return {'message': 'Oh! A draw 😇', 'color': 'yellow'}
    }
}

function rpsFrontEnd(humanChoice, botChoice, finalMsg) {
    var images = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msgDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src="${images[humanChoice]}" height="150" width="150"><br><h5>YOU</h5>`;
    msgDiv.innerHTML = `<h1 style="color: ${finalMsg['color']}">${finalMsg['message']}</h1>`;
    botDiv.innerHTML = `<img src="${images[botChoice]}" height="150" width="150"><br><h5>BOT</h5>`;
    
    document.getElementById('flexbox-result-3').appendChild(humanDiv);
    document.getElementById('flexbox-result-3').appendChild(msgDiv);
    document.getElementById('flexbox-result-3').appendChild(botDiv);
}

function reset_3() {
    location.reload();
}