
function Player(n) {
  if (!n) return null;

  const id = n;
  const mark = id === 1 ? "o" : "x";
  let name = "";
  let score = 0;

  function getId() {
    return id;
  }

  function getMark() {
    return mark;
  }
  
  function getName() {
    return name;
  }

  function setName(newName) {
    name = newName;
  }

  function storeState() {
    const state = {
      name, 
      score
    };
    sessionStorage.setItem(id, JSON.stringify(state));
  }

  return {
    getId,
    getMark,
    getName,
    setName,
    storeState
  };
};

export default Player;
