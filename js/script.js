let result = document.getElementById('result');
let resetBtn = document.getElementById('result');
let boxes = document.getElementByClassName('box');
let arrBoxes = Array.from(boxes);


const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let spaces = Array(9).fill(null);

const onGameaStart = () => {
  arrBoxes.forEach(box=> box.addEventListener('click', (e)=>{
      const id = e.target.id;
      if(!spaces[id]){   
          spaces[id] = currentPlayer;
          e.target.innerText = currentPlayer;
      }
  }))
}

onGameStart()
