let result = document.getElementById('result');
let resetBtn = document.getElementById('result');
let boxes = document.getElementByClassName('box');
let arrBoxes = Array.from(boxes);


const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let spaces = Array(9).fill(null);

const onGameStart = ()=> {
  arrBoxes.forEach(box=> box.addEventListener('click', (e)=>{
      const id = e.target.id;
      if(!spaces[id]){   
          spaces[id] = currentPlayer;
          e.target.innerText = currentPlayer;
          if(playerHasWon() !== false){
              result.innerText = 
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

         if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c])
            return [a,b,c];
         }
    }
    return false;
}
onGameStart()
