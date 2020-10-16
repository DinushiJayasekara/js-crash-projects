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