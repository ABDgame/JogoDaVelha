let result = document.getElementById('result');
let resetBtn = document.getElementById('reset');
let boxes = document.getElementsByClassName('box');
let arrBoxes = Array.from(boxes);


const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let spaces = Array(9).fill(null);

const onGameStart = ()=>{
    arrBoxes.forEach(box=> box.addEventListener('click', (e)=>{
        const id = e.target.id;
        if(!spaces[id]){
            spaces[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            if(playerHasWon() !== false){
                result.innerText = `${currentPlayer} has Won!`;
                resetBtn.innerText = "Replay";
                let winning_boxes = playerHasWon();
                winning_boxes.map(box => arrBoxes[box].style.backgroundColor = "#061941");
                winning_boxes.map(box => arrBoxes[box].style.color = "yellow");

            }

            if(currentPlayer == "X"){
                currentPlayer = "O";
            }
            else{
                currentPlayer = "X";
            }
        }
    }))
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const playerHasWon = ()=>{
    for (const condition of winningCombos){
        let [a,b,c] = condition;

        if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){
            return [a,b,c];
        }
    }
    return false;
}

resetBtn.addEventListener('click', ()=>{
    spaces.fill(null);

    arrBoxes.forEach(box =>{
        box.innerText ="";
        box.style.backgroundColor = "";
        box.style.color = "white";
    });

    currentPlayer = player1;
    result.innerText = "";
    resetBtn.innerText = "Reset";
})
onGameStart()
