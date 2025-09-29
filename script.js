console.log("Welcome to TIC TAC TOE GAME");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".newgame");
let mesgcontainer = document.querySelector(".winner");
let msg = document.getElementById("msg");
let div = document.querySelector(".div");

let turnO = true;

const Winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    mesgcontainer.classList.add("hide");
    
}

const disableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showinner = (winner)=>{
    msg.innerText = `congratulations!, Winner is ${winner}`;
    mesgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = ()=>{
    for(let pattern of Winpatterns){
        let box1 = boxes[pattern[0]].innerHTML;
        let box2 = boxes[pattern[1]].innerHTML;
        let box3 = boxes[pattern[2]].innerHTML;
        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1 == box2 && box2 == box3){
                console.log(box1 + " is the winner");
                showinner(box1)
            }
        }
    }
}

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerHTML = "O"
            turnO = false;
        }else{
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


