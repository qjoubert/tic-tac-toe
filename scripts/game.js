import display from "./display.js";
import events from "./events.js";
import gameboard from "./gameboard.js";
import Player from "./Player.js";

export default (function() {

  const startBtn = document.querySelector("#start-btn");
  const newGameBtn = document.querySelector("#new-game-btn");

  events.listen(startBtn, "click", setNewGame);
  events.listen(newGameBtn, "click", reset);

  function gameOver() {
    setGameStatus("");
    console.log("We have a winner !")
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
    display.hide(startBtn);
    display.show(newGameBtn, "inline-block");
  }

  function setCurrentPlayerId(id = null) {
    const currentPlayerId = getCurrentPlayerId();
    const nextPlayerId = (currentPlayerId === 1) ? -1 : 1;
    sessionStorage.setItem("currentPlayerId", id || nextPlayerId);
  }

  return {
    gameOver,
    getCurrentPlayer,
    getCurrentPlayerId,
    getGameStatus,
    setCurrentPlayerId,
    setGameStatus
  };
})();