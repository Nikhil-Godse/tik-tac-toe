let toe = document.querySelectorAll(".toe");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let resetBtn = document.querySelector(".reset");
let msgConti = document.querySelector(".msg-cont");
let XWin = document.querySelector("#XWin");
let YWin = document.querySelector("#YWin");
let Draw = document.querySelector("#draw");

let playerO = true;

let xWin = 0;
let yWin = 0;
let draw = 0;

let winngPat = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8], 
                [0,4,8],
                [2,4,6]];

const resetGame = () => {
    playerO = true;
    enableBoxes();
    msgConti.classList.add("hide");
    boxDis=0;
}
let boxDis=0

toe.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO){
            box.style.color="#872341";
            box.innerText="O";
            playerO=false;
        }
        else{
            box.style.color="#F05941";
            box.innerText="X";
            playerO=true;
        }
        box.disabled=true;
        checkWinner();
        boxDis++
        if(boxDis==9){ 
            msg.innerHTML =`Congrats, winner is No-one`
            msgConti.classList.remove("hide");
            draw++
            Draw.innerHTML=`Draw: ${draw}`
        }
    })
});

const disabledBox = () => {
    for (let box of toe) {
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for (let box of toe) {
        box.disabled=false;
        box.innerText="";
    }
}

const showWin =(winner) => {
    msg.innerHTML =`Congrats,winner is ${winner}`
    msgConti.classList.remove("hide");
    disabledBox();  
    if(winner=="X"){
        xWin++
        XWin.innerHTML=`X_win:${xWin}`
    }
    else{
        yWin++;
        YWin.innerHTML=`O_win: ${yWin}`
    }
}

const checkWinner = () => {
    for(pattern of winngPat){
       let pos1Val = toe[pattern[0]].innerText; 
       let pos2Val = toe[pattern[1]].innerText; 
       let pos3Val = toe[pattern[2]].innerText; 

       if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWin(pos1Val);
                boxDis=0;
            }  
       }
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);