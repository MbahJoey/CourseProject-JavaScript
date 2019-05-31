var min=1;
var max=10;
var bulls = 0, cows=0;
var tries = 0;
var random_a;
var random_b;
var random_c;
var random_d;
var random_e;
var win = 0;
randomizeNumbers();

function randomizeNumbers() {
    random_a = Math.floor(Math.random() * (max - min)) + min;//generates the first random digit between 1-9

    do {
        random_b = (Math.floor(Math.random() * (max - min))  +min );
    }while (random_b == random_a);//generates the second random digit

    do {
        random_c = (Math.floor(Math.random() * (max - min))  +min );
    }while (random_c == random_a ||random_c === random_b );//generates the third random digit

    do {
        random_d = (Math.floor(Math.random() * (max - min)) +min );
    }while (random_d == random_a ||random_d === random_b ||random_d === random_c);//generates the fourth random digit

    do {
        random_e = (Math.floor(Math.random() * (max - min)) +min );
    }while (random_e == random_a ||random_e === random_b ||random_e === random_c || random_e === random_d);//generates the fifth random digit

    //document.write(random_a + "" + random_b+ "" + random_c+ ""  + random_d+ ""  + random_e)
}

function checkNumbers() {
    //bulls
    var numba = document.getElementById("numb_a").value;
    if (numba == random_a){
        bulls++;
    }
    var numbb = document.getElementById("numb_b").value;
    if (numbb == random_b){
        bulls++;
    }
    var numbc = document.getElementById("numb_c").value;
    if (numbc == random_c){
        bulls++;
    }
    var numbd = document.getElementById("numb_d").value;
    if (numbd == random_d){
        bulls++;
    }
    var numbe = document.getElementById("numb_e").value;
    if (numbe == random_e){
        bulls++;
    }
    //cows
    var numba = document.getElementById("numb_a").value;
    if (numba == random_b || numba == random_c || numba == random_d || numba == random_e){
        cows++;
    }
    var numbb = document.getElementById("numb_b").value;
    if (numbb == random_a || numbb == random_c || numbb == random_d || numbb == random_e){
        cows++;
    }
    var numbc = document.getElementById("numb_c").value;
    if (numbc == random_a || numbc == random_b || numbc == random_d || numbc == random_e){
        cows++;
    }
    var numbd = document.getElementById("numb_d").value;
    if (numbd == random_a || numbd == random_b || numbd == random_c || numbd == random_e){
        cows++;
    }
    var numbe = document.getElementById("numb_e").value;
    if (numbe == random_a || numbe == random_b || numbe == random_c || numbe == random_d){
        cows++;
    }

    tries++;
    var element = document.getElementById("history");
    var newP = document.createElement("p");
    var node =  document.createTextNode(tries + ". " + numba + numbb + numbc + numbd + numbe + " Bulls:" + bulls+ " Cows:"  + cows);
    newP.appendChild(node);
    element.appendChild(newP);
    //document.getElementById("output").innerHTML = (tries + ". " + numba + numbb + numbc + numbd + numbe + " Bulls:" + bulls+ " Cows:"  + cows);
}

function guees() {
    bulls=0;
    cows = 0;
    checkNumbers();
    checkWin();
}

function newGame() {
    randomizeNumbers();
    tries = 0;
}

function checkWin() {
    if (bulls == 5) {
        if (confirm("You won in " + tries + " tries! Now you have " + win + " wins. Do you want to start a new game?")) {
            win++;
            randomizeNumbers();
            newGame();
            document.getElementById("history").innerHTML = "";
        }
    }
}