// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"27Rzb":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "97912cc17f1f5bdf37964fbc8a5bc16d";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4OAbU":[function(require,module,exports) {
var _componentsNavigation = require('./components/navigation');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _componentsNavigationDefault = _parcelHelpers.interopDefault(_componentsNavigation);
require('./components/tasklist');
require('./components/stopwatch');
require('./components/pomodoro');
require('./components/acronym');
require('./components/kanban-column');
require('./components/kanban-task');
const links = document.querySelectorAll('nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');
var nav = new _componentsNavigationDefault.default(links, pages);
nav.getLinks();
nav.links.forEach(function (link) {
  link.addEventListener('click', function () {
    let pageId = nav.getHash(link);
    nav.setPage(pageId);
  });
});

},{"./components/navigation":"2K1cj","./components/tasklist":"Rj9Cl","./components/stopwatch":"4w2wn","./components/pomodoro":"2KGxt","./components/acronym":"2REkG","./components/kanban-column":"1yvAT","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./components/kanban-task":"1L4ki"}],"2K1cj":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Navigation {
  constructor(links, pages) {
    this.links = links;
    this.pages = pages;
    this.currentPage = null;
  }
  getLinks() {
    console.log(this.links);
  }
  setPage(pageId) {
    this.currentPage = pageId;
    console.log(this.currentPage);
    this.links.forEach(link => {
      link.classList.remove('nav-active');
      if (this.getHash(link) === pageId) {
        link.classList.add('nav-active');
      }
    });
    this.pages.forEach(page => {
      page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = "block";
  }
  getHash(link) {
    return link.href.split("#")[1];
  }
}
exports.default = Navigation;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"Rj9Cl":[function(require,module,exports) {
document.getElementById("myForm").style.display = "none";

openButton.addEventListener("click", openForm);
function openForm(){ 
  document.getElementById("myForm").style.display = "block";
}

btnCancel.addEventListener("click", closeForm);
function closeForm(){ 
  document.getElementById("myForm").style.display = "none";
}

const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityRatingInput = document.getElementById("priorityInput");
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityRatingInput.options[priorityInput.selectedIndex].value;
    if (task) {
      addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);

    }
  })
  
var taskListArray = [];
  
function addTask(taskDescription, dueDate, estimatedTime,  priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
      id: Date.now(),
      taskDescription,
      dueDate,
      dateCreated,
      estimatedTime,
      priorityRating,
      completionTime,
      completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}
  
function renderTask(task){
updateEmpty();
//Create HTML elements
let item = document.createElement("li");
item.setAttribute('data-id', task.id);
item.innerHTML = "<p>" + task.taskDescription.bold() + "<br>" + "Due: ".bold() + task.completionTime + ", " + task.dueDate + "<br>" + "Time: ".bold() + task.estimatedTime + " min" + "<br>" + "Priority: ".bold() + task.priorityRating + "</p>";
  
taskscroll.appendChild(item);

//Extra Task DOM elements
let delButton = document.createElement("button");
delButton.classList.add("fa", "fa-trash");
item.appendChild(delButton);
  //Event Listeners for DOM addEventListener
delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index)
    console.log(taskListArray);
    updateEmpty();
    item.remove();
})

//Clear the input form*/
form.reset();
}


function removeItemFromArray(arr, index) {
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty() {
  if (taskListArray.length > 0){
    document.getElementById('emptyList').style.display = 'none';
  } else {
    document.getElementById('emptyList').style.display = 'block';
  }
}


},{}],"4w2wn":[function(require,module,exports) {

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(){
      this.classList.toggle("p-active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
}

//referred to https://dev.to/stackfindover/how-to-create-a-stopwatch-in-javascript-57a8

const watch = document.querySelector("#a-stopwatch")
let millisecond = 0;
let timer;

function timeStart(){
  clearInterval(timer);
  timer = setInterval(() => {
    millisecond += 10;

    let dateTimer = new Date(millisecond);

    watch.innerHTML = 
    ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
  }, 10);
}

function timePaused() {
  clearInterval(timer);
}

function timeReset(){
  setInterval(timer)
  millisecond = 0;
  watch.innerHTML = "00:00:00";
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if(el.id === 'start') timeStart();
  if(el.id === 'pause') timePaused();
  if(el.id === 't-reset') timeReset();
})
},{}],"2KGxt":[function(require,module,exports) {
//referred to Dawidow's pomodoro timer code https://github.com/dawidow/pomodoro-timer-js .

const timer = document.querySelector(".pt-time");
const start = document.querySelector(".pt-start");
const stop = document.querySelector(".pt-stop");
const reset = document.querySelector(".pt-reset");
const work = document.querySelector(".options-work");
const breakBtn = document.querySelector(".options-break");
const breakBtn2 = document.querySelector(".options-break2");

let seconds = 0,
	active = false,
	intervalID;

const startTimer = mins => {
	clearInterval(intervalID);

	if (!active) {
		timer.textContent = "25:00";
		seconds = mins * 60 || 0;
	}
	active = true;
	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const breakTimer = mins => {
	resetTime();
	clearInterval(intervalID);
	if (!active) {
		timer.textContent = "5:00";
		seconds = mins * 60 || 0;
	}
	active = true;
	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const breakTimer2 = mins => {
	resetTime();
	clearInterval(intervalID);
	if (!active) {
		timer.textContent = "15:00";
		seconds = mins * 60 || 0;
	}
	active = true;
	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const resetTime = () => {
	clearInterval(intervalID);
	timer.textContent = "25:00";
	active = false;
};

const stopTime = () => {
	clearInterval(intervalID);
};

const time = () => {
	seconds--;
	minutes = Math.floor(seconds / 60);
	sec = seconds % 60;
	if (sec < 10) {
		sec = `0${sec}`;
	}

	timer.textContent = `${minutes}:${sec}`;
	if (seconds === 0) {
		clearInterval(intervalID);
	}
};

start.addEventListener(
	"click",
	function() {
		startTimer(25);
	},
	false
);
stop.addEventListener("click", stopTime, false);
reset.addEventListener("click", resetTime, false);
work.addEventListener(
	"click",
	function() {
		resetTime();
	},
	false
);
work.addEventListener(
	"click",
	function() {
		startTimer(25);
	},
	false
);

breakBtn.addEventListener("click",function() {
		breakTimer(5);
	},
	false
);

breakBtn2.addEventListener("click",function() {
		breakTimer2(15);
	},
	false
);

},{}],"2REkG":[function(require,module,exports) {
const form = document.getElementById("acronymform");
const button = document.querySelector("#acronymform > button");
var wordInput = document.getElementById("wordInput");
var wordlist = document.getElementById("wordlist");


form.addEventListener("submit", function(event){
  event.preventDefault();
  let word = wordInput.value; //add acronym code here
  let wordAcronym = word.match(/\b(\w)/g).join('').toUpperCase();
  addWord(wordAcronym, word, false);
})

var wordListArray = [];

function addWord(wordAcronym, wordDescription) {
  
  let word = {
    wordAcronym,
    wordDescription
  };
  wordListArray.push(word);
  renderWord(word);
}

function renderWord(word){
  updateEmpty();

  let item = document.createElement("li");
  item.innerHTML = "<p>" + word.wordAcronym.bold() + ": " + word.wordDescription + "</p>";

  wordlist.appendChild(item);

  let delButton = document.createElement("button");
  delButton.classList.add("fa", "fa-trash");  
  item.appendChild(delButton);
  
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = wordListArray.findIndex(word => word.id === Number(id));
    removeItemFromArray(wordListArray, index)
    updateEmpty();
    item.remove();
  })


form.reset();
}

function removeItemFromArray(arr, index) {
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty() {
  if (wordListArray.length > 0){
    document.getElementById('emptyAcronym').style.display = 'none';
  } else {
    document.getElementById('emptyAcronym').style.display = 'block';
  }
}

},{}],"1yvAT":[function(require,module,exports) {
document.getElementById("addForm").style.display = "none";

addButton.addEventListener("click", openForm);
function openForm(){ 
  document.getElementById("addForm").style.display = "block";
}

btnClose.addEventListener("click", closeForm);
function closeForm(){ 
  document.getElementById("addForm").style.display = "none";
}

const form = document.getElementById("columnForm");
const button = document.querySelector("#columnForm > button");
var columnInput = document.getElementById("columnInput");
var columnlist = document.getElementById("columnlist");
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    let column = columnInput.value;
  
    if (column) {
      addColumn(column, false);
    }
  })
  
var columnListArray = [];
  
function addColumn(columnDescription) {
    let column = {
      columnDescription
    };
    columnListArray.push(column);
    renderColumn(column);
}
  
function renderColumn(column){
updateEmpty();
//Create HTML elements
let item = document.createElement("li");
item.innerHTML = "<h3>" + column.columnDescription + "</h3>";
newColumn.appendChild(item);

//Extra Task DOM elements REMOVE THIS FOR NOW
let delButton = document.createElement("button");
delButton.classList.add("fa", "fa-trash");
item.appendChild(delButton);
  //Event Listeners for DOM addEventListener
delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = columnListArray.findIndex(column => column.id === Number(id));
    removeItemFromArray(columnListArray, index)
    console.log(columnListArray);
    updateEmpty();
    item.remove();
})


//Clear the input form*/
form.reset();
}

function removeItemFromArray(arr, index) {
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty() {
  if (columnListArray.length > 0){
    document.getElementById('emptyColumn').style.display = 'none';
  } else {
    document.getElementById('emptyColumn').style.display = 'block';
  }
}
             
},{}],"1L4ki":[function(require,module,exports) {
document.getElementById("kanbanForm").style.display = "none";

addBtn.addEventListener("click", openForm);
function openForm(){ 
  document.getElementById("kanbanForm").style.display = "block";
}

closeBtn.addEventListener("click", closeForm);
function closeForm(){ 
  document.getElementById("kanbanForm").style.display = "none";
}

const form = document.getElementById("kanbanForm");
const button = document.querySelector("#kanbanForm > button");
var kanbanInput = document.getElementById("kanbanInput");
var kanbanlist = document.getElementById("kanbanlist");
var taskDueInput = document.getElementById("taskDueInput");
var taskDateInput = document.getElementById("taskDateInput");
var timeAmountInput = document.getElementById("timeAmountInput");
var levelRatingInput = document.getElementById("levelInput");
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    let kanban = kanbanInput.value;
    let taskDue = taskDueInput.value;
    let taskDate = taskDateInput.value;
    let timeAmount = timeAmountInput.value;
    let levelRating = levelRatingInput.options[levelInput.selectedIndex].value;
    if (kanban) {
      addKanban(kanban, taskDue, taskDate, timeAmount, levelRating, false);

    }
  })
  
var kanbanListArray = [];
  
function addKanban(kanbanDescription, taskDate, timeAmount,  levelRating, taskDue, taskStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let kanban = {
      id: Date.now(),
      kanbanDescription,
      taskDate,
      dateCreated,
      timeAmount,
      levelRating,
      taskDue,
      taskStatus
    };
    kanbanListArray.push(kanban);
    renderKanban(kanban);
}

function renderKanban(kanban){
updateEmpty();
//Create HTML elements
let item = document.createElement("li");
item.draggable = "true"
item.innerHTML = "<p>" + kanban.kanbanDescription.bold() + "<br>" + "Due: ".bold() + kanban.taskDue + ", " + kanban.taskDate + "<br>" + "Time: ".bold() + kanban.timeAmount + " min" + "<br>" + "Priority: ".bold() + kanban.levelRating + "</p>";
kanbanTask.appendChild(item);

//Clear the input form*/
form.reset();
}


function removeItemFromArray(arr, index) {
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty() {
  if (kanbanListArray.length > 0){
    document.getElementById('emptyKanban').style.display = 'none';
  } else {
    document.getElementById('emptyKanban').style.display = 'block';
  }
}




},{}]},["27Rzb","4OAbU"], "4OAbU", "parcelRequirec526")

//# sourceMappingURL=index.8a5bc16d.js.map
