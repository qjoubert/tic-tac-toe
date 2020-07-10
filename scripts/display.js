
export default (function() {

  function hide(elmt) {
    elmt.style.display = "none";
  }

  function show(elmt, displayVal) {
    elmt.style.display = displayVal;
  }

  return {
    hide,
    show
  };
})();