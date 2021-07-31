let startButton = document.getElementById("start");
let p = document.getElementById("scor");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let gameButtons = document.getElementById("gameButtons");
let buttons = document.getElementsByClassName("game")
let listRecords = document.getElementsByClassName("record"); 
let buttonsFlag = [0,0,0,0,0];

gameButtons.style.display = "none";
let intervalId = null;
let time = 0;
let records = [];

startButton.addEventListener("click", () => {
    time = 0;
    gameButtons.style.display = "block";
    intervalId = setInterval(() => {
        time +=16;
        p.innerHTML = time.toString().padStart(4, '0') + 'ms';
        if (buttonsFlag.join("") === "11111"){
            clearInterval(intervalId);
            gameButtons.style.display = "none";
            buttonsFlag = [0,0,0,0,0];

            records.push(time);
            renderRecords(records, listRecords);
            time = 0;
        }
    }, 16)
});


one.addEventListener("click", () => {
    buttonsFlag[0] = 1;
    toggleColor(one);
});
two.addEventListener("click", () => {
    buttonsFlag[1] = 1;
    toggleColor(two);
})
three.addEventListener("click", () => {
    buttonsFlag[2] = 1;
    toggleColor(three);
})
four.addEventListener("click", () => {
    buttonsFlag[3] = 1;
    toggleColor(four);
})
five.addEventListener("click", () => {
    buttonsFlag[4] = 1;
    toggleColor(five);
})

function renderRecords(records, listRecords){    

    records.sort(function(a, b) {
        return a - b;
      });

    for (i = 0; i < listRecords.length; i++) {
        listRecords[i].innerText = records[i];
    }
}

function toggleColor(elem){
    elem.style.backgroundColor == "red" ?
        elem.style.backgroundColor = "green" :
        elem.style.backgroundColor = "red";
}