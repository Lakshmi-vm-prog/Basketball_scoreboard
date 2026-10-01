
let scoreEl=document.getElementById("btn1")
let score_El=document.getElementById("btn2")
let count=0
let num=0
let guestCount = 0;

function score1(){
    count+=1
    scoreEl.innerText=count
    console.log(count)
}

function score2(){
    num+=1
    score_El.innerText=num
    console.log(num)
}

function add1(){
    count+=1
    scoreEl.innerText=count
    console.log(scoreEl)
}
function add2(){
    count+=2
    scoreEl.innerText=count
    console.log(scoreEl)
}
function add3(){
    count+=3
    scoreEl.innerText=count
    console.log(scoreEl)
}
function guestAdd1() {
    guestCount += 1;
    score_El.innerText = guestCount;
}

function guestAdd2() {
    guestCount += 2;
    score_El.innerText = guestCount;
}

function guestAdd3() {
    guestCount += 3;
    score_El.innerText = guestCount;
}