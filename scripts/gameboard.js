import events from "./events.js";
import game from "./game.js";

export default (function() {

  /*
    The board is represented as an array of length 9 (squares) in which :
    0 represents an empty square
    1 represents a circle
    -1 represents a cross
    
    Each index of the array corresponds to a unique square as follows :
    |0|1|2|
    |3|4|5|
    |6|7|8|
  */
 
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const boardContainer = document.querySelector(".board-container");
  const squares = document.querySelectorAll(".square");
  
  events.listenAll(squares, "click", onSquareClick);

  function checkWinner() {
    const board = getBoard();
    const winningColumn = checkWinningColumn(board);
    const winningDiagonal = checkWinningDiagonal(board);
    const winningRow = checkWinningRow(board);

    if (winningColumn || winningDiagonal || winningRow) return true;
    else return false;
  }

  function checkWinningColumn(board, i = 0) {
    for (let i = 0; i <= 2; i++) {
      const column = [board[i], board[i+3], board[i+6]];
      const columnSum = column.reduce((sum, val) => sum += +val);
  
      if (columnSum === 3 || columnSum === -3) return true;
    }
    return false;
  }

  function checkWinningDiagonal(board, i = 0) {
    for (let i = 0; i <= 2; i += 2) {
      const diagonal = i === 0 ?
        [board[i], board[i+4], board[i+8]] :
        [board[i], board[i+2], board[i+4]];
      const diagonalSum = diagonal.reduce((sum, val) => sum += +val);
  
      if (diagonalSum === 3 || diagonalSum === -3) return true;
    }
    return false;
  }

  function checkWinningRow(board, i = 0) {
    for (let i = 0; i <= 6; i += 3) {
      const row = [board[i], board[i+1], board[i+2]];
      const rowSum = row.reduce((sum, val) => sum += +val);
  
      if (rowSum === 3 || rowSum === -3) return true;
    }
    return false;
  }

  function clear() {
    squares.forEach(square => square.textContent = "");
  }

  function dimBoard() {
    boardContainer.classList.add("dimmed");
    boardContainer.classList.remove("highlighted");
    squares.forEach(square => {
      square.classList.add("dimmed", "unclickable");
      square.classList.remove("highlighted", "clickable");
    });
  }

  function getBoard() {
    return JSON.parse(sessionStorage.getItem("board")) || null;
  }

  function highlightBoard() {
    boardContainer.classList.add("highlighted");
    boardContainer.classList.remove("dimmed");
    squares.forEach(square => {
      square.classList.add("highlighted", "clickable");
      square.classList.remove("dimmed", "unclickable")
    });
  }

  function isBoardFull() {
    const board = getBoard();
    return !board.includes(0);
  }

  function isMarkedSquare(square) {
    return !!square.textContent;
  }

  function markSquare(square, mark) {
    const textColor = mark === "o" ? "red" : "blue";
    square.textContent = mark;
    square.style.color = textColor;
  }

  function onSquareClick(e) {
    const square = e.target;
    
    if (!game.getGameStatus() || isMarkedSquare(square)) return;
    
    const player = game.getCurrentPlayer();
    const squareIndex = square.dataset.index;
    const playerId = player.getId();
    const playerMark = player.getMark();

    updateBoard(squareIndex, playerId);
    markSquare(square, playerMark);

    if (checkWinner()) return game.gameOver("win");
    else if (isBoardFull()) return game.gameOver("tie");
    
    game.setCurrentPlayerId();
    game.showCurrentPlayer();
  }

  function setBoard(newBoard) {
    sessionStorage.setItem("board", JSON.stringify(newBoard));
  }

  function resetBoard() {
    sessionStorage.setItem("board", JSON.stringify(board));
  }

  function updateBoard(squareIndex, playerId) {
    const board = getBoard();
    board.splice(squareIndex, 1, playerId);
    setBoard(board);
  }

  return {
    clear,
    dimBoard,
    getBoard,
    highlightBoard,
    resetBoard,
    setBoard
  };
})();