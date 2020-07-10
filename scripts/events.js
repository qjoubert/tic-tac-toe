
export default (function() {

  function listen(target, event, action) {
    target.addEventListener(event, (e) => {
      action(e);
    });
  }

  function listenAll(targets, event, action) {
    targets.forEach(target => {
      listen(target, event, action);
    });
  }

  return {
    listen,
    listenAll
  };
})();
