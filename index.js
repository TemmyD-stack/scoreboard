//for Home
let scoreEl = document.getElementById("score-el");
let score = 0;

function add1(){
    score += 1
   scoreEl.textContent = score
}

function add2(){
    
    score += 2
   scoreEl.textContent = score
}
function add3(){
    
    score += 3
   scoreEl.textContent = score
}

//for Guest
let scoreEl2 = document.getElementById("score-el2");
let score2 = 0;

function addOne(){
    score2 = score2 + 1;
    scoreEl2.textContent = score2;
}

function addTwo(){
    score2 += 2;
    scoreEl2.textContent = score2;
}

function addThree(){
    score2 += 3;
   scoreEl2.textContent = score2;
}

//reset button
function reset(){
    score = 0;
    score2 = 0;
    scoreEl.textContent = score;
    scoreEl2.textContent = score2;
}
    
