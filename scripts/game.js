import display from "./display.js";
import events from "./events.js";
import gameboard from "./gameboard.js";
import Player from "./Player.js";

export default (function() {

  const startBtn = document.querySelector("#start-btn");
  const newGameBtn = document.querySelector("#new-game-btn");

  events.listen(startBtn, "click", setNewGame);
  events.listen(newGameBtn, "click", reset);

  function getCurrentPlayer() {
    const id = getCurrentPlayerId();
    return Player(id);
  }

  function getCurrentPlayerId() {
    return +sessionStorage.getItem("currentPlayerId");
  }

  function reset() {
    setCurrentPlayerId();
    gameboard.clear();
    gameboard.resetBoard();
  }

  function setNewGame() {
    setCurrentPlayerId();
    gameboard.resetBoard();
    gameboard.highlightBoard();
    display.hide(startBtn);
    display.show(newGameBtn, "inline-block");
  }

  function setCurrentPlayerId() {
    const currentPlayerId = getCurrentPlayerId();
    const nextPlayerId = (currentPlayerId === 1) ? -1 : 1;
    sessionStorage.setItem("currentPlayerId", nextPlayerId);
  }

  return {
    getCurrentPlayer,
    getCurrentPlayerId,
    setCurrentPlayerId
  };
})();