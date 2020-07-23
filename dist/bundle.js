/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: arial, sans-serif;\n  font-size: 1.6rem;\n}\n\nbutton {\n  cursor: pointer;\n  font-size: 2rem;\n  padding: 1rem 2rem;\n}\n\n.board-container {\n  border: 1px solid #ccc;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  height: 400px;\n  width: 400px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.square {\n  border: 1px solid #ccc;\n  font-size: 7rem;\n  text-align: center;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.highlighted {\n  border-color: #232323;\n}\n\n.unclickable {\n  cursor: default;\n}\n\n#new-game-btn {\n  display: none;\n}\n\n#info {\n  font-size: 3rem;\n  font-weight: bold;\n  text-align: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");


_modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"].addAllEventListeners();

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Player(n) {
  if (!n) return null;
  var id = n;
  var mark = id === 1 ? "o" : "x";
  var name = "";
  var score = 0;

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
    var state = {
      name: name,
      score: score
    };
    sessionStorage.setItem(id, JSON.stringify(state));
  }

  return {
    getId: getId,
    getMark: getMark,
    getName: getName,
    setName: setName,
    storeState: storeState
  };
}

;
/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");


/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var newGameBtn = document.querySelector("#new-game-btn");
  var squares = document.querySelectorAll(".square");
  var startBtn = document.querySelector("#start-btn");

  function addAllEventListeners() {
    listen(newGameBtn, "click", _game__WEBPACK_IMPORTED_MODULE_0__["default"].reset);
    listen(startBtn, "click", _game__WEBPACK_IMPORTED_MODULE_0__["default"].setNewGame);
    listenAll(squares, "click", _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].onSquareClick);
  }

  function hide(element) {
    element.style.display = "none";
  }

  function listen(target, event, action) {
    target.addEventListener(event, function (e) {
      return action(e);
    });
  }

  function listenAll(targets, event, action) {
    targets.forEach(function (target) {
      target.addEventListener(event, function (e) {
        return action(e);
      });
    });
  }

  function show(element, displayVal) {
    element.style.display = displayVal;
  }

  return {
    addAllEventListeners: addAllEventListeners,
    hide: hide,
    listen: listen,
    listenAll: listenAll,
    show: show
  };
})());

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");



/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var startBtn = document.querySelector("#start-btn");
  var newGameBtn = document.querySelector("#new-game-btn");
  var infoPara = document.querySelector("p#info");

  function gameOver(result) {
    if (result === "win") {
      var winnerId = getCurrentPlayerId();
      var winner = "Player ".concat(winnerId == 1 ? 1 : 2);
      infoPara.textContent = "".concat(winner, " wins the game ! Game Over");
    } else if (result === "tie") {
      infoPara.textContent === "It's a tie ! Game Over";
    }

    setGameStatus("");
  }

  function getCurrentPlayer() {
    var id = getCurrentPlayerId();
    return Object(_Player__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
  }

  function getCurrentPlayerId() {
    return +sessionStorage.getItem("currentPlayerId");
  }

  function getGameStatus() {
    return sessionStorage.getItem("gameStatus");
  }

  function reset() {
    var gameStatus = getGameStatus();
    if (!gameStatus) setGameStatus("on");
    setCurrentPlayerId("1");
    showCurrentPlayer();
    _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].clear();
    _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].resetBoard();
  }

  function setGameStatus(status) {
    sessionStorage.setItem("gameStatus", status);
  }

  function setNewGame() {
    setGameStatus("on");
    setCurrentPlayerId("1");
    _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].resetBoard();
    _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].highlightBoard();
    showCurrentPlayer();
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].hide(startBtn);
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].show(newGameBtn, "inline-block");
  }

  function setCurrentPlayerId() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var currentPlayerId = getCurrentPlayerId();
    var nextPlayerId = currentPlayerId === 1 ? -1 : 1;
    sessionStorage.setItem("currentPlayerId", id || nextPlayerId);
  }

  function showCurrentPlayer() {
    var currentPlayerId = getCurrentPlayerId();
    var currentPlayer = "Player ".concat(currentPlayerId === 1 ? 1 : 2, " :");
    infoPara.textContent = currentPlayer;
  }

  return {
    gameOver: gameOver,
    getCurrentPlayer: getCurrentPlayer,
    getCurrentPlayerId: getCurrentPlayerId,
    getGameStatus: getGameStatus,
    setCurrentPlayerId: setCurrentPlayerId,
    setGameStatus: setGameStatus,
    showCurrentPlayer: showCurrentPlayer
  };
})());

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");

/* harmony default export */ __webpack_exports__["default"] = ((function () {
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
  var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var boardContainer = document.querySelector(".board-container");
  var squares = document.querySelectorAll(".square");

  function checkWinner() {
    var board = getBoard();
    var winningColumn = checkWinningColumn(board);
    var winningDiagonal = checkWinningDiagonal(board);
    var winningRow = checkWinningRow(board);
    if (winningColumn || winningDiagonal || winningRow) return true;else return false;
  }

  function checkWinningColumn(board) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var _i = 0; _i <= 2; _i++) {
      var column = [board[_i], board[_i + 3], board[_i + 6]];
      var columnSum = column.reduce(function (sum, val) {
        return sum += +val;
      });
      if (columnSum === 3 || columnSum === -3) return true;
    }

    return false;
  }

  function checkWinningDiagonal(board) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var _i2 = 0; _i2 <= 2; _i2 += 2) {
      var diagonal = _i2 === 0 ? [board[_i2], board[_i2 + 4], board[_i2 + 8]] : [board[_i2], board[_i2 + 2], board[_i2 + 4]];
      var diagonalSum = diagonal.reduce(function (sum, val) {
        return sum += +val;
      });
      if (diagonalSum === 3 || diagonalSum === -3) return true;
    }

    return false;
  }

  function checkWinningRow(board) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var _i3 = 0; _i3 <= 6; _i3 += 3) {
      var row = [board[_i3], board[_i3 + 1], board[_i3 + 2]];
      var rowSum = row.reduce(function (sum, val) {
        return sum += +val;
      });
      if (rowSum === 3 || rowSum === -3) return true;
    }

    return false;
  }

  function clear() {
    squares.forEach(function (square) {
      return square.textContent = "";
    });
  }

  function dimBoard() {
    boardContainer.classList.add("dimmed");
    boardContainer.classList.remove("highlighted");
    squares.forEach(function (square) {
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
    squares.forEach(function (square) {
      square.classList.add("highlighted", "clickable");
      square.classList.remove("dimmed", "unclickable");
    });
  }

  function isBoardFull() {
    var board = getBoard();
    return !board.includes(0);
  }

  function isMarkedSquare(square) {
    return !!square.textContent;
  }

  function markSquare(square, mark) {
    var textColor = mark === "o" ? "red" : "blue";
    square.textContent = mark;
    square.style.color = textColor;
  }

  function onSquareClick(e) {
    var square = e.target;
    if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].getGameStatus() || isMarkedSquare(square)) return;
    var player = _game__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentPlayer();
    var squareIndex = square.dataset.index;
    var playerId = player.getId();
    var playerMark = player.getMark();
    updateBoard(squareIndex, playerId);
    markSquare(square, playerMark);
    if (checkWinner()) return _game__WEBPACK_IMPORTED_MODULE_0__["default"].gameOver("win");else if (isBoardFull()) return _game__WEBPACK_IMPORTED_MODULE_0__["default"].gameOver("tie");
    _game__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentPlayerId();
    _game__WEBPACK_IMPORTED_MODULE_0__["default"].showCurrentPlayer();
  }

  function setBoard(newBoard) {
    sessionStorage.setItem("board", JSON.stringify(newBoard));
  }

  function resetBoard() {
    sessionStorage.setItem("board", JSON.stringify(board));
  }

  function updateBoard(squareIndex, playerId) {
    var board = getBoard();
    board.splice(squareIndex, 1, playerId);
    setBoard(board);
  }

  return {
    clear: clear,
    dimBoard: dimBoard,
    getBoard: getBoard,
    highlightBoard: highlightBoard,
    resetBoard: resetBoard,
    setBoard: setBoard
  };
})());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiXSwibmFtZXMiOlsiZG9tIiwiYWRkQWxsRXZlbnRMaXN0ZW5lcnMiLCJQbGF5ZXIiLCJuIiwiaWQiLCJtYXJrIiwibmFtZSIsInNjb3JlIiwiZ2V0SWQiLCJnZXRNYXJrIiwiZ2V0TmFtZSIsInNldE5hbWUiLCJuZXdOYW1lIiwic3RvcmVTdGF0ZSIsInN0YXRlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld0dhbWVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcXVhcmVzIiwicXVlcnlTZWxlY3RvckFsbCIsInN0YXJ0QnRuIiwibGlzdGVuIiwiZ2FtZSIsInJlc2V0Iiwic2V0TmV3R2FtZSIsImxpc3RlbkFsbCIsImdhbWVib2FyZCIsIm9uU3F1YXJlQ2xpY2siLCJoaWRlIiwiZWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInRhcmdldCIsImV2ZW50IiwiYWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXRzIiwiZm9yRWFjaCIsInNob3ciLCJkaXNwbGF5VmFsIiwiaW5mb1BhcmEiLCJnYW1lT3ZlciIsInJlc3VsdCIsIndpbm5lcklkIiwiZ2V0Q3VycmVudFBsYXllcklkIiwid2lubmVyIiwidGV4dENvbnRlbnQiLCJzZXRHYW1lU3RhdHVzIiwiZ2V0Q3VycmVudFBsYXllciIsImdldEl0ZW0iLCJnZXRHYW1lU3RhdHVzIiwiZ2FtZVN0YXR1cyIsInNldEN1cnJlbnRQbGF5ZXJJZCIsInNob3dDdXJyZW50UGxheWVyIiwiY2xlYXIiLCJyZXNldEJvYXJkIiwic3RhdHVzIiwiaGlnaGxpZ2h0Qm9hcmQiLCJjdXJyZW50UGxheWVySWQiLCJuZXh0UGxheWVySWQiLCJjdXJyZW50UGxheWVyIiwiYm9hcmQiLCJib2FyZENvbnRhaW5lciIsImNoZWNrV2lubmVyIiwiZ2V0Qm9hcmQiLCJ3aW5uaW5nQ29sdW1uIiwiY2hlY2tXaW5uaW5nQ29sdW1uIiwid2lubmluZ0RpYWdvbmFsIiwiY2hlY2tXaW5uaW5nRGlhZ29uYWwiLCJ3aW5uaW5nUm93IiwiY2hlY2tXaW5uaW5nUm93IiwiaSIsImNvbHVtbiIsImNvbHVtblN1bSIsInJlZHVjZSIsInN1bSIsInZhbCIsImRpYWdvbmFsIiwiZGlhZ29uYWxTdW0iLCJyb3ciLCJyb3dTdW0iLCJzcXVhcmUiLCJkaW1Cb2FyZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhcnNlIiwiaXNCb2FyZEZ1bGwiLCJpbmNsdWRlcyIsImlzTWFya2VkU3F1YXJlIiwibWFya1NxdWFyZSIsInRleHRDb2xvciIsImNvbG9yIiwicGxheWVyIiwic3F1YXJlSW5kZXgiLCJkYXRhc2V0IiwiaW5kZXgiLCJwbGF5ZXJJZCIsInBsYXllck1hcmsiLCJ1cGRhdGVCb2FyZCIsInNldEJvYXJkIiwibmV3Qm9hcmQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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SSxDQUFDQyxTQUFMLENBQWV3RixRQUFmLENBQWhDO0FBQ0Q7O0FBRUQsV0FBUzlDLFVBQVQsR0FBc0I7QUFDcEI3QyxrQkFBYyxDQUFDQyxPQUFmLENBQXVCLE9BQXZCLEVBQWdDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWdELEtBQWYsQ0FBaEM7QUFDRDs7QUFFRCxXQUFTc0MsV0FBVCxDQUFxQkwsV0FBckIsRUFBa0NHLFFBQWxDLEVBQTRDO0FBQzFDLFFBQU1wQyxLQUFLLEdBQUdHLFFBQVEsRUFBdEI7QUFDQUgsU0FBSyxDQUFDeUMsTUFBTixDQUFhUixXQUFiLEVBQTBCLENBQTFCLEVBQTZCRyxRQUE3QjtBQUNBRyxZQUFRLENBQUN2QyxLQUFELENBQVI7QUFDRDs7QUFFRCxTQUFPO0FBQ0xQLFNBQUssRUFBTEEsS0FESztBQUVMNEIsWUFBUSxFQUFSQSxRQUZLO0FBR0xsQixZQUFRLEVBQVJBLFFBSEs7QUFJTFAsa0JBQWMsRUFBZEEsY0FKSztBQUtMRixjQUFVLEVBQVZBLFVBTEs7QUFNTDZDLFlBQVEsRUFBUkE7QUFOSyxHQUFQO0FBUUQsQ0EvSWMsR0FBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsaWNrYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWdobGlnaHRlZCB7XFxuICBib3JkZXItY29sb3I6ICMyMzIzMjM7XFxufVxcblxcbi51bmNsaWNrYWJsZSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNuZXctZ2FtZS1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2luZm8ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBcIi4vY3NzL21haW4uY3NzXCI7XG5pbXBvcnQgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5cbmRvbS5hZGRBbGxFdmVudExpc3RlbmVycygpO1xuIiwiXG5mdW5jdGlvbiBQbGF5ZXIobikge1xuICBpZiAoIW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGlkID0gbjtcbiAgY29uc3QgbWFyayA9IGlkID09PSAxID8gXCJvXCIgOiBcInhcIjtcbiAgbGV0IG5hbWUgPSBcIlwiO1xuICBsZXQgc2NvcmUgPSAwO1xuXG4gIGZ1bmN0aW9uIGdldElkKCkge1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmsoKSB7XG4gICAgcmV0dXJuIG1hcms7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lKG5ld05hbWUpIHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlU3RhdGUoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICBuYW1lLCBcbiAgICAgIHNjb3JlXG4gICAgfTtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGlkLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRJZCxcbiAgICBnZXRNYXJrLFxuICAgIGdldE5hbWUsXG4gICAgc2V0TmFtZSxcbiAgICBzdG9yZVN0YXRlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgZ2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWdhbWUtYnRuXCIpO1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydC1idG5cIik7XG5cbiAgZnVuY3Rpb24gYWRkQWxsRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgbGlzdGVuKG5ld0dhbWVCdG4sIFwiY2xpY2tcIiwgZ2FtZS5yZXNldCk7XG4gICAgbGlzdGVuKHN0YXJ0QnRuLCBcImNsaWNrXCIsIGdhbWUuc2V0TmV3R2FtZSk7XG4gICAgbGlzdGVuQWxsKHNxdWFyZXMsIFwiY2xpY2tcIiwgZ2FtZWJvYXJkLm9uU3F1YXJlQ2xpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCBldmVudCwgYWN0aW9uKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlKSA9PiBhY3Rpb24oZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuQWxsKHRhcmdldHMsIGV2ZW50LCBhY3Rpb24pIHtcbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4gYWN0aW9uKGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3coZWxlbWVudCwgZGlzcGxheVZhbCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlWYWw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEFsbEV2ZW50TGlzdGVuZXJzLFxuICAgIGhpZGUsXG4gICAgbGlzdGVuLFxuICAgIGxpc3RlbkFsbCxcbiAgICBzaG93LFxuICB9O1xufSkoKTsiLCJpbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0LWJ0blwiKTtcbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWdhbWUtYnRuXCIpO1xuICBjb25zdCBpbmZvUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwI2luZm9cIik7XG5cbiAgZnVuY3Rpb24gZ2FtZU92ZXIocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJ3aW5cIikge1xuICAgICAgY29uc3Qgd2lubmVySWQgPSBnZXRDdXJyZW50UGxheWVySWQoKTtcbiAgICAgIGNvbnN0IHdpbm5lciA9IGBQbGF5ZXIgJHt3aW5uZXJJZCA9PSAxID8gMSA6IDJ9YDtcbiAgICAgIGluZm9QYXJhLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSB3aW5zIHRoZSBnYW1lICEgR2FtZSBPdmVyYDtcbiAgICB9IFxuXG4gICAgZWxzZSBpZiAocmVzdWx0ID09PSBcInRpZVwiKSB7XG4gICAgICBpbmZvUGFyYS50ZXh0Q29udGVudCA9PT0gXCJJdCdzIGEgdGllICEgR2FtZSBPdmVyXCJcbiAgICB9XG5cbiAgICBzZXRHYW1lU3RhdHVzKFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgICBjb25zdCBpZCA9IGdldEN1cnJlbnRQbGF5ZXJJZCgpO1xuICAgIHJldHVybiBQbGF5ZXIoaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcklkKCkge1xuICAgIHJldHVybiArc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQbGF5ZXJJZFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdhbWVTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJnYW1lU3RhdHVzXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgY29uc3QgZ2FtZVN0YXR1cyA9IGdldEdhbWVTdGF0dXMoKTtcbiAgICBpZiAoIWdhbWVTdGF0dXMpIHNldEdhbWVTdGF0dXMoXCJvblwiKTtcbiAgICBzZXRDdXJyZW50UGxheWVySWQoXCIxXCIpO1xuICAgIHNob3dDdXJyZW50UGxheWVyKCk7XG4gICAgZ2FtZWJvYXJkLmNsZWFyKCk7XG4gICAgZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEdhbWVTdGF0dXMoc3RhdHVzKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImdhbWVTdGF0dXNcIiwgc3RhdHVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE5ld0dhbWUoKSB7XG4gICAgc2V0R2FtZVN0YXR1cyhcIm9uXCIpO1xuICAgIHNldEN1cnJlbnRQbGF5ZXJJZChcIjFcIik7XG4gICAgZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuaGlnaGxpZ2h0Qm9hcmQoKTtcbiAgICBzaG93Q3VycmVudFBsYXllcigpO1xuICAgIGRpc3BsYXkuaGlkZShzdGFydEJ0bik7XG4gICAgZGlzcGxheS5zaG93KG5ld0dhbWVCdG4sIFwiaW5saW5lLWJsb2NrXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllcklkKGlkID0gbnVsbCkge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZCA9IGdldEN1cnJlbnRQbGF5ZXJJZCgpO1xuICAgIGNvbnN0IG5leHRQbGF5ZXJJZCA9IChjdXJyZW50UGxheWVySWQgPT09IDEpID8gLTEgOiAxO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50UGxheWVySWRcIiwgaWQgfHwgbmV4dFBsYXllcklkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDdXJyZW50UGxheWVyKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZCA9IGdldEN1cnJlbnRQbGF5ZXJJZCgpO1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBgUGxheWVyICR7Y3VycmVudFBsYXllcklkID09PSAxID8gMSA6IDJ9IDpgO1xuICAgIGluZm9QYXJhLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZU92ZXIsXG4gICAgZ2V0Q3VycmVudFBsYXllcixcbiAgICBnZXRDdXJyZW50UGxheWVySWQsXG4gICAgZ2V0R2FtZVN0YXR1cyxcbiAgICBzZXRDdXJyZW50UGxheWVySWQsXG4gICAgc2V0R2FtZVN0YXR1cyxcbiAgICBzaG93Q3VycmVudFBsYXllclxuICB9O1xufSkoKTsiLCJcbmltcG9ydCBnYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkge1xuXG4gIC8qXG4gICAgVGhlIGJvYXJkIGlzIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIGxlbmd0aCA5IChzcXVhcmVzKSBpbiB3aGljaCA6XG4gICAgMCByZXByZXNlbnRzIGFuIGVtcHR5IHNxdWFyZVxuICAgIDEgcmVwcmVzZW50cyBhIGNpcmNsZVxuICAgIC0xIHJlcHJlc2VudHMgYSBjcm9zc1xuICAgIFxuICAgIEVhY2ggaW5kZXggb2YgdGhlIGFycmF5IGNvcnJlc3BvbmRzIHRvIGEgdW5pcXVlIHNxdWFyZSBhcyBmb2xsb3dzIDpcbiAgICB8MHwxfDJ8XG4gICAgfDN8NHw1fFxuICAgIHw2fDd8OHxcbiAgKi9cbiBcbiAgY29uc3QgYm9hcmQgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIik7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKTtcblxuICBmdW5jdGlvbiBjaGVja1dpbm5lcigpIHtcbiAgICBjb25zdCBib2FyZCA9IGdldEJvYXJkKCk7XG4gICAgY29uc3Qgd2lubmluZ0NvbHVtbiA9IGNoZWNrV2lubmluZ0NvbHVtbihib2FyZCk7XG4gICAgY29uc3Qgd2lubmluZ0RpYWdvbmFsID0gY2hlY2tXaW5uaW5nRGlhZ29uYWwoYm9hcmQpO1xuICAgIGNvbnN0IHdpbm5pbmdSb3cgPSBjaGVja1dpbm5pbmdSb3coYm9hcmQpO1xuXG4gICAgaWYgKHdpbm5pbmdDb2x1bW4gfHwgd2lubmluZ0RpYWdvbmFsIHx8IHdpbm5pbmdSb3cpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tXaW5uaW5nQ29sdW1uKGJvYXJkLCBpID0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gW2JvYXJkW2ldLCBib2FyZFtpKzNdLCBib2FyZFtpKzZdXTtcbiAgICAgIGNvbnN0IGNvbHVtblN1bSA9IGNvbHVtbi5yZWR1Y2UoKHN1bSwgdmFsKSA9PiBzdW0gKz0gK3ZhbCk7XG4gIFxuICAgICAgaWYgKGNvbHVtblN1bSA9PT0gMyB8fCBjb2x1bW5TdW0gPT09IC0zKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tXaW5uaW5nRGlhZ29uYWwoYm9hcmQsIGkgPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSArPSAyKSB7XG4gICAgICBjb25zdCBkaWFnb25hbCA9IGkgPT09IDAgP1xuICAgICAgICBbYm9hcmRbaV0sIGJvYXJkW2krNF0sIGJvYXJkW2krOF1dIDpcbiAgICAgICAgW2JvYXJkW2ldLCBib2FyZFtpKzJdLCBib2FyZFtpKzRdXTtcbiAgICAgIGNvbnN0IGRpYWdvbmFsU3VtID0gZGlhZ29uYWwucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICs9ICt2YWwpO1xuICBcbiAgICAgIGlmIChkaWFnb25hbFN1bSA9PT0gMyB8fCBkaWFnb25hbFN1bSA9PT0gLTMpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1dpbm5pbmdSb3coYm9hcmQsIGkgPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSArPSAzKSB7XG4gICAgICBjb25zdCByb3cgPSBbYm9hcmRbaV0sIGJvYXJkW2krMV0sIGJvYXJkW2krMl1dO1xuICAgICAgY29uc3Qgcm93U3VtID0gcm93LnJlZHVjZSgoc3VtLCB2YWwpID0+IHN1bSArPSArdmFsKTtcbiAgXG4gICAgICBpZiAocm93U3VtID09PSAzIHx8IHJvd1N1bSA9PT0gLTMpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS50ZXh0Q29udGVudCA9IFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGltQm9hcmQoKSB7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpbW1lZFwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImRpbW1lZFwiLCBcInVuY2xpY2thYmxlXCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiLCBcImNsaWNrYWJsZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJib2FyZFwiKSkgfHwgbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEJvYXJkKCkge1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGltbWVkXCIpO1xuICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiLCBcImNsaWNrYWJsZVwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGltbWVkXCIsIFwidW5jbGlja2FibGVcIilcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQm9hcmRGdWxsKCkge1xuICAgIGNvbnN0IGJvYXJkID0gZ2V0Qm9hcmQoKTtcbiAgICByZXR1cm4gIWJvYXJkLmluY2x1ZGVzKDApO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNNYXJrZWRTcXVhcmUoc3F1YXJlKSB7XG4gICAgcmV0dXJuICEhc3F1YXJlLnRleHRDb250ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gbWFya1NxdWFyZShzcXVhcmUsIG1hcmspIHtcbiAgICBjb25zdCB0ZXh0Q29sb3IgPSBtYXJrID09PSBcIm9cIiA/IFwicmVkXCIgOiBcImJsdWVcIjtcbiAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBtYXJrO1xuICAgIHNxdWFyZS5zdHlsZS5jb2xvciA9IHRleHRDb2xvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3F1YXJlQ2xpY2soZSkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGUudGFyZ2V0O1xuICAgIFxuICAgIGlmICghZ2FtZS5nZXRHYW1lU3RhdHVzKCkgfHwgaXNNYXJrZWRTcXVhcmUoc3F1YXJlKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpO1xuICAgIGNvbnN0IHNxdWFyZUluZGV4ID0gc3F1YXJlLmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgcGxheWVySWQgPSBwbGF5ZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBwbGF5ZXJNYXJrID0gcGxheWVyLmdldE1hcmsoKTtcblxuICAgIHVwZGF0ZUJvYXJkKHNxdWFyZUluZGV4LCBwbGF5ZXJJZCk7XG4gICAgbWFya1NxdWFyZShzcXVhcmUsIHBsYXllck1hcmspO1xuXG4gICAgaWYgKGNoZWNrV2lubmVyKCkpIHJldHVybiBnYW1lLmdhbWVPdmVyKFwid2luXCIpO1xuICAgIGVsc2UgaWYgKGlzQm9hcmRGdWxsKCkpIHJldHVybiBnYW1lLmdhbWVPdmVyKFwidGllXCIpO1xuICAgIFxuICAgIGdhbWUuc2V0Q3VycmVudFBsYXllcklkKCk7XG4gICAgZ2FtZS5zaG93Q3VycmVudFBsYXllcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Qm9hcmQobmV3Qm9hcmQpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYm9hcmRcIiwgSlNPTi5zdHJpbmdpZnkobmV3Qm9hcmQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJvYXJkXCIsIEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCb2FyZChzcXVhcmVJbmRleCwgcGxheWVySWQpIHtcbiAgICBjb25zdCBib2FyZCA9IGdldEJvYXJkKCk7XG4gICAgYm9hcmQuc3BsaWNlKHNxdWFyZUluZGV4LCAxLCBwbGF5ZXJJZCk7XG4gICAgc2V0Qm9hcmQoYm9hcmQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGVhcixcbiAgICBkaW1Cb2FyZCxcbiAgICBnZXRCb2FyZCxcbiAgICBoaWdobGlnaHRCb2FyZCxcbiAgICByZXNldEJvYXJkLFxuICAgIHNldEJvYXJkXG4gIH07XG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=