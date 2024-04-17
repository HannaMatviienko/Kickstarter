// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
var _languages = require("./languages");
"use strict";
const page = document.querySelector(".page");
const pageLanguages = document.querySelectorAll(".page__language");
pageLanguages.forEach((lang)=>{
    lang.addEventListener("click", function() {
        const key = lang.getAttribute("href").replace("#", "");
        switchLanguage(key === "EN" ? (0, _languages.en) : (0, _languages.ua));
        pageLanguages.forEach((one)=>one.classList.remove("language-selected"));
        lang.classList.add("language-selected");
    });
});
function switchLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element)=>{
        const value = element.getAttribute("data-translate");
        const id = element.getAttribute("data-id") || "";
        if (lang[value]) {
            if (id) element.textContent = lang[value][+id];
            else element.textContent = lang[value];
        }
    });
}
const seeMoreLinks = document.querySelectorAll(".see-more-link");
seeMoreLinks.forEach((link)=>{
    link.addEventListener("click", function() {
        alert("Here can be a link to another page in the future");
    });
});
const menuLinks = document.querySelectorAll(".menu__link");
const buyButton = document.querySelectorAll(".buy");
const menuOpener = document.getElementById("menu--opener");
const menuLogo = document.getElementById("menu--logo");
const menuSpecs = document.getElementById("menu--specs");
const menuCloser = document.getElementById("menu--closer");
const menuClosers = [
    menuLogo,
    ...menuLinks,
    menuSpecs,
    ...pageLanguages,
    menuCloser,
    ...buyButton
];
menuOpener.addEventListener("click", function() {
    page.classList.add("no-scrolling");
});
menuClosers.forEach((menuCloser)=>{
    menuCloser.addEventListener("click", function() {
        page.classList.remove("no-scrolling");
    });
});
menuLinks.forEach((link)=>{
    link.addEventListener("click", function() {
        menuLinks.forEach((l)=>l.classList.remove("link-visited"));
        link.classList.add("link-visited");
    });
});
const featureCards = Array.from(document.querySelectorAll(".features__feature")).reverse();
const sliderLeft = document.getElementById("slider-left");
const sliderRight = document.getElementById("slider-right");
const featureIndex = document.querySelector(".displayed-card-index");
sliderLeft.addEventListener("click", function() {
    const i = featureCards.findIndex((feature)=>feature.classList.contains("display"));
    if (i > 0) {
        featureCards[i].classList.replace("display", "hide");
        featureCards[i - 1].classList.replace("hide", "display");
        featureIndex.textContent = `0${i}`;
    }
    if (i <= 1) sliderLeft.classList.add("light");
    sliderRight.classList.remove("light");
});
sliderRight.addEventListener("click", function() {
    const i = featureCards.findIndex((feature)=>feature.classList.contains("display"));
    if (i < 2) {
        featureCards[i].classList.replace("display", "hide");
        featureCards[i + 1].classList.replace("hide", "display");
        featureIndex.textContent = `0${i + 2}`;
    }
    if (i === 1) sliderRight.classList.add("light");
    sliderLeft.classList.remove("light");
});
const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.reset();
});
function updateButtonState() {
    if (!emailInput.value.trim() || !messageInput.value.trim()) {
        submitButton.setAttribute("disabled", "disabled");
        !emailInput.value.trim() ? emailInput.classList.add("has-error") : emailInput.classList.remove("has-error");
        !messageInput.value.trim() ? messageInput.classList.add("has-error") : messageInput.classList.remove("has-error");
    } else submitButton.removeAttribute("disabled");
}
emailInput.addEventListener("input", updateButtonState);
messageInput.addEventListener("input", updateButtonState);

},{"./languages":"etgEB"}],"etgEB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en", ()=>en);
parcelHelpers.export(exports, "ua", ()=>ua);
const en = {
    "header-title": "Futuristic Wireless Speaker",
    "header-text": "Luna's performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.",
    "menu-link": [
        "OUR STORY",
        "ABOUT US",
        "FEATURES",
        "GET IN TOUCH"
    ],
    "benefit-title": [
        "Futuristic Design",
        "Tweeter Speaker System",
        "Multiroom System",
        "Intuitive Lighting System"
    ],
    "benefit-description": [
        "To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.",
        "To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.",
        "Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.  ",
        "An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation."
    ],
    "about-us-title": "DESIGNED FOR THE FUTURE",
    "about-us-description": "In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.",
    "see-more-link": "See more about us",
    "technology-description": "Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.",
    "testimonials-review": "It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.",
    "testimonials-reviewer-position": "Creative Director",
    "features-title": "FEATURES",
    "features-name": [
        "Connectivity",
        "App Features",
        "Sound & Music"
    ],
    "features-item": [
        "Hands Free Wireless Audio",
        "Bluetooth 4.0 LE",
        "Wi-Fi 2.4 GHz (802.11 b/g/n)",
        "Smart Multiroom System Set Up",
        "Party Mode with 6.0 Units and above",
        "MESHNET Multi Speaker Network",
        "Customize Music Schedule",
        "Wake Up with Favorite Songs",
        "Home Detection Auto Wake Up",
        "Color Wheel ",
        "Feel-in-chest Base Power",
        "Lossless Digital Audio Transmission",
        "Easy & Stable Stereo Pairing",
        "Crisp and Clear High Frequency Sound",
        "Streams from Cloud Music and Local Library",
        "Auto Music from Last Song Stopped"
    ],
    "questions-title": "DO YOU HAVE ANY QUESTIONS?"
};
const ua = {
    "header-title": "\u0424\u0443\u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0431\u0435\u0437\u0434\u0440\u043E\u0442\u043E\u0432\u0438\u0439 \u0434\u0438\u043D\u0430\u043C\u0456\u043A",
    "header-text": "Luna's \u043F\u0435\u0440\u0444\u043E\u0440\u043C\u0435\u043D\u0441 \u0437\u0431\u0430\u043B\u0430\u043D\u0441\u043E\u0432\u0430\u043D\u0438\u0439 \u0442\u0430 \u043F\u043B\u0430\u0432\u043D\u0438\u0439 \u0443 \u0432\u0441\u0456\u0445 \u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0445 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0430\u0445, \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u044C \u043C\u0443\u0437\u0438\u043A\u0443 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E \u043F\u0440\u0438\u0454\u043C\u043D\u043E\u044E \u0442\u0430 \u043F\u043E\u043C\u0456\u0442\u043D\u043E \u0431\u0456\u043B\u044C\u0448 \u0431\u0430\u0433\u0430\u0442\u043E\u0448\u0430\u0440\u043E\u0432\u043E\u044E.",
    "menu-link": [
        "\u041D\u0410\u0428\u0410 \u0406\u0421\u0422\u041E\u0420\u0406\u042F",
        "\u041F\u0420\u041E \u041D\u0410\u0421",
        "FEATURES",
        "\u0417\u0412'\u042F\u0417\u0410\u0422\u0418\u0421\u042F \u0417 \u041D\u0410\u041C\u0418"
    ],
    "benefit-title": [
        "\u0424\u0443\u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D",
        "\u0410\u043A\u0443\u0441\u0442\u0438\u0447\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0442\u0432\u0456\u0442\u0435\u0440\u0430",
        "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 Multiroom",
        "\u0406\u043D\u0442\u0443\u0457\u0442\u0438\u0432\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F"
    ],
    "benefit-description": [
        "\u0429\u043E\u0431 \u043D\u0430\u0434\u0430\u0442\u0438 Luna \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0431\u0435\u0437\u0434\u043E\u0433\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0433\u043B\u044F\u0434\u0443, \u043C\u0438 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E \u0432\u0438\u0431\u0440\u0430\u043B\u0438 \u0430\u0432\u0456\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u0430\u043B\u044E\u043C\u0456\u043D\u0456\u0439 \u044F\u043A \u0439\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B \u0456 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043B\u0438 \u044F\u043A \u0442\u0440\u0438\u0432\u0438\u043C\u0456\u0440\u043D\u0443 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044E \u0440\u043E\u0437\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F, \u0442\u0430\u043A \u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044E \u0432\u0438\u0441\u043E\u043A\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0443\u0432\u0430\u043D\u043D\u044F.",
        "\u0429\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0431\u0456\u043B\u044C\u0448 \u0431\u0430\u0433\u0430\u0442\u043E\u0448\u0430\u0440\u043E\u0432\u0438\u0439 \u0437\u0432\u0443\u043A, \u043A\u0440\u0430\u0449\u0438\u0439, \u043D\u0456\u0436 \u0454\u0434\u0438\u043D\u0438\u0439 \u043F\u043E\u0432\u043D\u043E\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u043D\u0438\u0439 \u0434\u0438\u043D\u0430\u043C\u0456\u043A, \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0441\u043D\u0430\u0441\u0442\u0438\u043B\u0430 Luna \u0449\u0435 \u043E\u0434\u043D\u0438\u043C \u0442\u0432\u0456\u0442\u0435\u0440\u043D\u0438\u043C \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u043E\u043C, \u044F\u043A\u0438\u0439 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u0432\u0438\u0441\u043E\u043A\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0439 \u0437\u0432\u0443\u043A \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E.",
        "Luna \u043D\u0430\u0442\u0438\u0432\u043D\u043E \u0441\u0443\u043C\u0456\u0441\u043D\u0430 \u0437 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u043C Wi-Fi. \u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0456\u0442\u044C \u043A\u0456\u043B\u044C\u043A\u0430 \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u0456\u0432 \u0443 \u0440\u0456\u0437\u043D\u0438\u0445 \u043A\u0456\u043C\u043D\u0430\u0442\u0430\u0445, \u0449\u043E\u0431 \u0440\u043E\u0437\u0448\u0438\u0440\u0438\u0442\u0438 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0443 \u0432\u0441\u044C\u043E\u043C\u0443 \u0431\u0443\u0434\u0438\u043D\u043A\u0443.",
        "\u0406\u043D\u0442\u0443\u0457\u0442\u0438\u0432\u043D\u043E \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0440\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u0442\u0456\u043D\u043E\u043A \u0456 \u043D\u0430\u0441\u0438\u0447\u0435\u043D\u0456\u0441\u0442\u044C \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 \u0434\u043B\u044F \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F, \u044F\u043A\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u044E \u0442\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457."
    ],
    "about-us-title": "\u0421\u0422\u0412\u041E\u0420\u0415\u041D\u041E \u0414\u041B\u042F \u041C\u0410\u0419\u0411\u0423\u0422\u041D\u042C\u041E\u0413\u041E",
    "about-us-description": "\u0423 2014 \u0440\u043E\u0446\u0456 \u0433\u0440\u0443\u043F\u0430 \u043F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0438\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0456\u0432, \u0432\u0435\u0442\u0435\u0440\u0430\u043D\u0456\u0432 \u0442\u0435\u0445\u043D\u0456\u043A\u0438 \u0442\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0456\u0432 \u0437 \u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u043B\u0430 crazybaby. \u0426\u0435 \u0433\u0440\u0443\u043F\u0430 \u043F\u0440\u0438\u0441\u0442\u0440\u0430\u0441\u043D\u0438\u0445 \u043B\u044E\u0434\u0435\u0439, \u044F\u043A\u0456 \u043D\u0430\u0441\u0442\u0456\u043B\u044C\u043A\u0438 \u0431\u043E\u0436\u0435\u0432\u0456\u043B\u044C\u043D\u0456, \u0449\u043E\u0431 \u0434\u0443\u043C\u0430\u0442\u0438, \u0449\u043E \u043C\u043E\u0436\u0443\u0442\u044C \u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0438\u043A\u043B\u0438\u043A \u0456\u043D\u0434\u0443\u0441\u0442\u0440\u0456\u0457 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0440\u0443\u0439\u043D\u0456\u0432\u043D\u0438\u0445 \u0430\u0443\u0434\u0456\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432.",
    "see-more-link": "\u041A\u043B\u0456\u043A\u0430\u0439 \u0442\u0430 \u0434\u0456\u0437\u043D\u0430\u0432\u0430\u0439\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435",
    "technology-description": "Luna Eye \u2014 \u0441\u0443\u0442\u044C \u0446\u0456\u0454\u0457 \u0456\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u0430\u0443\u0434\u0456\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0438. \u0412\u0456\u043D \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u043E\u043A\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u043E\u0433\u043E \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u0430, \u0441\u0432\u0456\u0442\u043B\u043E\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430, \u043A\u0443\u043F\u043E\u043B\u0430 \u0442\u0430 \u043A\u0456\u043B\u044C\u0446\u0435\u0432\u043E\u0433\u043E \u043E\u0440\u043D\u0430\u043C\u0435\u043D\u0442\u0443.",
    "testimonials-review": "\u041C\u0435\u043D\u0435, \u0447\u0435\u0441\u043D\u043E \u043A\u0430\u0436\u0443\u0447\u0438, \u0434\u0443\u0436\u0435 \u0437\u0434\u0438\u0432\u0443\u0432\u0430\u043B\u043E \u0442\u0430\u043A\u0435 \u0447\u0443\u0434\u043E\u0432\u0435 \u0437\u0432\u0443\u0447\u0430\u043D\u043D\u044F, \u044F\u043A\u0435 \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u044C \u0456\u0437 \u0446\u044C\u043E\u0433\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E. \u0410 \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u0449\u0456\u0442\u043A\u043E\u0432\u0456\u0439 \u0430\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u0456\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 \u0446\u0435 \u0442\u0430\u043A \u0437\u043D\u0430\u0439\u043E\u043C\u043E. \u042F\u043A \u043C\u0456\u0439 iPhone.",
    "testimonials-reviewer-position": "\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
    "features-title": "Features",
    "features-name": [
        "\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F",
        "\u0424\u0456\u0447\u0456 \u0434\u043E\u0434\u0430\u0442\u043A\u0443",
        "\u0417\u0432\u0443\u043A & \u041C\u0443\u0437\u0438\u043A\u0430"
    ],
    "features-item": [
        "\u0411\u0435\u0437\u0434\u0440\u043E\u0442\u043E\u0432\u0430 \u0430\u0443\u0434\u0456\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 Hands Free",
        "Bluetooth 4.0 LE",
        "Wi-Fi 2.4 GHz (802.11 b/g/n)",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0438 Smart Multiroom",
        "\u0420\u0435\u0436\u0438\u043C \u0432\u0435\u0447\u0456\u0440\u043A\u0438 \u0437 \u043E\u0434\u0438\u043D\u0438\u0446\u044F\u043C\u0438 6.0 \u0456 \u0432\u0438\u0449\u0435",
        "\u041C\u0435\u0440\u0435\u0436\u0430 \u0437 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u043E\u043C\u0430 \u0433\u0443\u0447\u043D\u043E\u043C\u043E\u0432\u0446\u044F\u043C\u0438 MESHNET",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0439\u0442\u0435 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u043A\u043B\u0430\u0434",
        "\u041F\u0440\u043E\u043A\u0438\u0434\u0430\u0439\u0442\u0435\u0441\u044F \u0437 \u0443\u043B\u044E\u0431\u043B\u0435\u043D\u0438\u043C\u0438 \u043F\u0456\u0441\u043D\u044F\u043C\u0438",
        "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0435 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0443",
        "\u041A\u043E\u043B\u0456\u0440\u043D\u0435 \u043A\u043E\u043B\u043E",
        "\u0411\u0430\u0437\u043E\u0432\u0430 \u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u044F\u043A\u0443 \u0432\u0456\u0434\u0447\u0443\u0454\u0442\u0435 \u043D\u0430\u043F\u043E\u0432\u043D\u0443",
        "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0437\u0432\u0443\u043A\u0443 \u0431\u0435\u0437 \u0432\u0442\u0440\u0430\u0442",
        "\u041B\u0435\u0433\u043A\u0435 \u0442\u0430 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0435 \u0441\u0442\u0435\u0440\u0435\u043E\u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F",
        "\u0427\u0456\u0442\u043A\u0438\u0439 \u0456 \u0447\u0438\u0441\u0442\u0438\u0439 \u0432\u0438\u0441\u043E\u043A\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0439 \u0437\u0432\u0443\u043A",
        "\u041F\u043E\u0442\u043E\u043A\u0438 \u0437 Cloud Music \u0456 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0438",
        "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0437\u0443\u043F\u0438\u043D\u043A\u0430 \u043C\u0443\u0437\u0438\u043A\u0438 \u0437 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0457 \u043F\u0456\u0441\u043D\u0456"
    ],
    "questions-title": "\u041C\u0430\u0454\u0448 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F?"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire4cc0")

//# sourceMappingURL=index.b8fca702.js.map
