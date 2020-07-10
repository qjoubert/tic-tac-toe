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
    const winningColumn = checkWinningColumn();
    const winningDiagonal = checkWinningDiagonal();
    const winningRow = checkWinningRow();

    if (winningColumn || winningDiagonal || winningRow) return true;
    else return false;
  }

  function checkWinningColumn(i = 0) {
    if (i > 2) return false; // last column starts at index 2 of board array

    const board = getBoard();
    const columnSum = (+board[i]) + (+board[i+3]) + (+board[i+6]);

    if (columnSum === 3 || columnSum === -3) return true;
    else return checkWinningColumn(++i);
  }

  function checkWinningDiagonal(i = 0) {
    if (i > 2) return false;

    const board = getBoard();
    let diagonalSum;

    if (i === 0) diagonalSum = (+board[i]) + (+board[i+4]) + (+board[i+8]);
    if (i === 2) diagonalSum = (+board[i]) + (+board[i+2]) + (+board[i+4]);

    if (diagonalSum === 3 || diagonalSum === -3) return true;
    else return checkWinningDiagonal(i+2);
  }

  function checkWinningRow(i = 0) {
    if (i > 6) return false; // last row starts at index 6 of board array

    const board = getBoard();
    const rowSum = (+board[i]) + (+board[i+1]) + (+board[i+2]);

    if (rowSum === 3 || rowSum === -3) return true;
    else return checkWinningRow(i+3);
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

  function isMarkedSquare(square) {
    return !!square.textContent;
  }

  function markSquare(square, mark) {
    square.textContent = mark;
  }

  function onSquareClick(e) {
    const square = e.target;
    const player = game.getCurrentPlayer();
    
    if (!player || isMarkedSquare(square)) return;

    const squareIndex = e.target.dataset.index;
    const playerId = player.getId();
    const playerMark = player.getMark();

    updateBoard(squareIndex, playerId);
    markSquare(square, playerMark);
    if (checkWinner()) console.log("I see we have a winner !");
    game.setCurrentPlayerId();
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