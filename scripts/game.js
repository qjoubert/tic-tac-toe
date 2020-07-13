import display from "./display.js";
import events from "./events.js";
import gameboard from "./gameboard.js";
import Player from "./Player.js";

export default (function() {

  const startBtn = document.querySelector("#start-btn");
  const newGameBtn = document.querySelector("#new-game-btn");
  const infoPara = document.querySelector("p#info");

  events.listen(startBtn, "click", setNewGame);
  events.listen(newGameBtn, "click", reset);

  function gameOver(result) {
    if (result === "win") {
      const winnerId = getCurrentPlayerId();
      const winner = `Player ${winnerId == 1 ? 1 : 2}`;
      infoPara.textContent = `${winner} wins the game ! Game Over`;
    } 

    else if (result === "tie") {
      infoPara.textContent === "It's a tie ! Game Over"
    }

    setGameStatus("");
  }

  function getCurrentPlayer() {
    const id = getCurrentPlayerId();
    return Player(id);
  }

  function getCurrentPlayerId() {
    return +sessionStorage.getItem("currentPlayerId");
  }

  function getGameStatus() {
    return sessionStorage.getItem("gameStatus");
  }

  function reset() {
    setCurrentPlayerId("1");
    showCurrentPlayer();
    gameboard.clear();
    gameboard.resetBoard();
  }

  function setGameStatus(status) {
    sessionStorage.setItem("gameStatus", status);
  }

  function setNewGame() {
    setGameStatus("on");
    setCurrentPlayerId("1");
    gameboard.resetBoard();
    gameboard.highlightBoard();
    showCurrentPlayer();
    display.hide(startBtn);
    display.show(newGameBtn, "inline-block");
  }

  function setCurrentPlayerId(id = null) {
    const currentPlayerId = getCurrentPlayerId();
    const nextPlayerId = (currentPlayerId === 1) ? -1 : 1;
    sessionStorage.setItem("currentPlayerId", id || nextPlayerId);
  }

  function showCurrentPlayer() {
    const currentPlayerId = getCurrentPlayerId();
    const currentPlayer = `Player ${currentPlayerId === 1 ? 1 : 2} :`;
    infoPara.textContent = currentPlayer;
  }

  return {
    gameOver,
    getCurrentPlayer,
    getCurrentPlayerId,
    getGameStatus,
    setCurrentPlayerId,
    setGameStatus,
    showCurrentPlayer
  };
})();