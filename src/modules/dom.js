import game from "./game";
import gameboard from "./gameboard";

export default (function() {

  const newGameBtn = document.querySelector("#new-game-btn");
  const squares = document.querySelectorAll(".square");
  const startBtn = document.querySelector("#start-btn");

  function addAllEventListeners() {
    listen(newGameBtn, "click", game.reset);
    listen(startBtn, "click", game.setNewGame);
    listenAll(squares, "click", gameboard.onSquareClick);
  }

  function hide(element) {
    element.style.display = "none";
  }

  function listen(target, event, action) {
    target.addEventListener(event, (e) => action(e));
  }

  function listenAll(targets, event, action) {
    targets.forEach(target => {
      target.addEventListener(event, (e) => action(e));
    });
  }

  function show(element, displayVal) {
    element.style.display = displayVal;
  }

  return {
    addAllEventListeners,
    hide,
    listen,
    listenAll,
    show,
  };
})();