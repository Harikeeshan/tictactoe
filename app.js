const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = [
    "", "", "",
    "", "", "",
    "", "", "",
]

let go = "circle"
infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        cellElement.classList.add('square')
        gameBoard.append(cellElement)
    })
}

createBoard();

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = " it is now " + go + " 's go."
    e.target.removeEventlistner("click", addGo)

    checkScore()
}

function checkScore() {

    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,4,8],
        [3.5,6],
        [0,4,8],
        [2,4,6]
    ]

    console.log(allSquares[4])

    winningCombos.forEach(array => {
       const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
    })
        if (circleWins) {
            infoDisplay.textContent = " Circle Wins!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    winningCombos.forEach(array => {
        const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
    })
        if (circleWins) {
             infoDisplay.textContent = " Circle Wins!"
             allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
             return
        }
    }
