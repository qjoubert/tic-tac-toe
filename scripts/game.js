import display from "./display.js";
import events from "./events.js";
import gameboard from "./gameboard.js";
import Player from "./Player.js";

export default (function() {

  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");

  events.listen(playBtn, "click", setNewGame);
  events.listen(resetBtn, "click", reset);

  function getCurrentPlayer() {
    const id = getCurrentPlayerId();
    return Player(id);
  }

  function getCurrentPlayerId() {
    return +sessionStorage.getItem("currentPlayerId");
  }

  function reset() {
    sessionStorage.setItem("currentPlayerId", "");
    gameboard.clear();
    gameboard.resetBoard();
    gameboard.dimBoard();
    display.hide(resetBtn);
    display.show(playBtn, "inline-block");
  }

  function setNewGame() {
    setCurrentPlayerId();
    gameboard.resetBoard();
    gameboard.highlightBoard();
    display.hide(playBtn);
    display.show(resetBtn, "inline-block");
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