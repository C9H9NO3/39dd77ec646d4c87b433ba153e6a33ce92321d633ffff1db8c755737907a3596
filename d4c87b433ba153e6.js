var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) {
  return a.raw = a;
};
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
  a.raw = b;
  return a;
};
var $jscomp$templatelit$m675467045$0 = $jscomp.createTemplateTagFirstArg(["Ya ", " built like ", " with ", " on ", ""]), $jscomp$templatelit$m675467045$1 = $jscomp.createTemplateTagFirstArg(["You built like a ", " with ", " ", ""]), $jscomp$templatelit$m675467045$2 = $jscomp.createTemplateTagFirstArg(["Yo ", " built like a ", " with ", ""]), $jscomp$templatelit$m675467045$3 = $jscomp.createTemplateTagFirstArg(["You built like a ", " ", " ", ""]), $jscomp$templatelit$m675467045$4 = $jscomp.createTemplateTagFirstArg(["Yo ", 
" look like a ", " ", ""]), $jscomp$templatelit$m675467045$5 = $jscomp.createTemplateTagFirstArg(["You dont got ", " in house ", ""]), $jscomp$templatelit$m675467045$6 = $jscomp.createTemplateTagFirstArg(["You look like a ", " ", " ", ""]), $jscomp$templatelit$m675467045$7 = $jscomp.createTemplateTagFirstArg(["Yo ", " ", ""]), $jscomp$templatelit$m675467045$8 = $jscomp.createTemplateTagFirstArg(["You ", " like a ", " ", ""]), $jscomp$templatelit$m675467045$9 = $jscomp.createTemplateTagFirstArg(["", 
"\u2002"]), $jscomp$templatelit$m675467045$10 = $jscomp.createTemplateTagFirstArg(["Yo ", " had sex with ", ""]), $jscomp$templatelit$m675467045$11 = $jscomp.createTemplateTagFirstArg(["Was that before or after i caught you ", " a ", ""]), $jscomp$templatelit$m675467045$12 = $jscomp.createTemplateTagFirstArg(["Nigga yo ", " found you ", " a ", ""]);
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = c.value;
  return a;
};
$jscomp.getGlobal = function(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) {
    return a[b];
  }
  c = a[c];
  return void 0 !== c ? c : a[b];
};
$jscomp.polyfill = function(a, b, c, d) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d));
};
$jscomp.polyfillUnisolated = function(a, b, c, d) {
  c = $jscomp.global;
  a = a.split(".");
  for (d = 0; d < a.length - 1; d++) {
    var e = a[d];
    if (!(e in c)) {
      return;
    }
    c = c[e];
  }
  a = a[a.length - 1];
  d = c[a];
  b = b(d);
  b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
};
$jscomp.polyfillIsolated = function(a, b, c, d) {
  var e = a.split(".");
  a = 1 === e.length;
  d = e[0];
  d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var g = 0; g < e.length - 1; g++) {
    var f = e[g];
    if (!(f in d)) {
      return;
    }
    d = d[f];
  }
  e = e[e.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {configurable:!0, writable:!0, value:b}) : b !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + e), $jscomp.defineProperty(d, $jscomp.propertyToPolyfillSymbol[e], {configurable:!0, writable:!0, value:b})));
};
$jscomp.underscoreProtoCanBeSet = function() {
  var a = {a:!0}, b = {};
  try {
    return b.__proto__ = a, b.a;
  } catch (c) {
  }
  return !1;
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) {
    throw new TypeError(a + " is not extensible");
  }
  return a;
} : null;
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++], } : {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.makeIterator = function(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function(a) {
  if (!(a instanceof Object)) {
    throw new TypeError("Iterator result " + a + " is not an object");
  }
};
$jscomp.generator.Context = function() {
  this.isRunning_ = !1;
  this.yieldAllIterator_ = null;
  this.yieldResult = void 0;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.finallyContexts_ = this.abruptCompletion_ = null;
};
$jscomp.generator.Context.prototype.start_ = function() {
  if (this.isRunning_) {
    throw new TypeError("Generator is already running");
  }
  this.isRunning_ = !0;
};
$jscomp.generator.Context.prototype.stop_ = function() {
  this.isRunning_ = !1;
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
$jscomp.generator.Context.prototype.next_ = function(a) {
  this.yieldResult = a;
};
$jscomp.generator.Context.prototype.throw_ = function(a) {
  this.abruptCompletion_ = {exception:a, isException:!0};
  this.jumpToErrorHandler_();
};
$jscomp.generator.Context.prototype["return"] = function(a) {
  this.abruptCompletion_ = {"return":a};
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(a) {
  this.abruptCompletion_ = {jumpTo:a};
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.yield = function(a, b) {
  this.nextAddress = b;
  return {value:a};
};
$jscomp.generator.Context.prototype.yieldAll = function(a, b) {
  var c = $jscomp.makeIterator(a), d = c.next();
  $jscomp.generator.ensureIteratorResultIsObject_(d);
  if (d.done) {
    this.yieldResult = d.value, this.nextAddress = b;
  } else {
    return this.yieldAllIterator_ = c, this.yield(d.value, b);
  }
};
$jscomp.generator.Context.prototype.jumpTo = function(a) {
  this.nextAddress = a;
};
$jscomp.generator.Context.prototype.jumpToEnd = function() {
  this.nextAddress = 0;
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(a, b) {
  this.catchAddress_ = a;
  void 0 != b && (this.finallyAddress_ = b);
};
$jscomp.generator.Context.prototype.setFinallyBlock = function(a) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = a || 0;
};
$jscomp.generator.Context.prototype.leaveTryBlock = function(a, b) {
  this.nextAddress = a;
  this.catchAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.enterCatchBlock = function(a) {
  this.catchAddress_ = a || 0;
  a = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return a;
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function(a, b, c) {
  c ? this.finallyContexts_[c] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
  this.catchAddress_ = a || 0;
  this.finallyAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function(a, b) {
  var c = this.finallyContexts_.splice(b || 0)[0];
  if (c = this.abruptCompletion_ = this.abruptCompletion_ || c) {
    if (c.isException) {
      return this.jumpToErrorHandler_();
    }
    void 0 != c.jumpTo && this.finallyAddress_ < c.jumpTo ? (this.nextAddress = c.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_;
  } else {
    this.nextAddress = a;
  }
};
$jscomp.generator.Context.prototype.forIn = function(a) {
  return new $jscomp.generator.Context.PropertyIterator(a);
};
$jscomp.generator.Context.PropertyIterator = function(a) {
  this.object_ = a;
  this.properties_ = [];
  for (var b in a) {
    this.properties_.push(b);
  }
  this.properties_.reverse();
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function() {
  for (; 0 < this.properties_.length;) {
    var a = this.properties_.pop();
    if (a in this.object_) {
      return a;
    }
  }
  return null;
};
$jscomp.generator.Engine_ = function(a) {
  this.context_ = new $jscomp.generator.Context;
  this.program_ = a;
};
$jscomp.generator.Engine_.prototype.next_ = function(a) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) {
    return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
  }
  this.context_.next_(a);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.return_ = function(a) {
  this.context_.start_();
  var b = this.context_.yieldAllIterator_;
  if (b) {
    return this.yieldAllStep_("return" in b ? b["return"] : function(c) {
      return {value:c, done:!0};
    }, a, this.context_["return"]);
  }
  this.context_["return"](a);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.throw_ = function(a) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) {
    return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
  }
  this.context_.throw_(a);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function(a, b, c) {
  try {
    var d = a.call(this.context_.yieldAllIterator_, b);
    $jscomp.generator.ensureIteratorResultIsObject_(d);
    if (!d.done) {
      return this.context_.stop_(), d;
    }
    var e = d.value;
  } catch (g) {
    return this.context_.yieldAllIterator_ = null, this.context_.throw_(g), this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  c.call(this.context_, e);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.nextStep_ = function() {
  for (; this.context_.nextAddress;) {
    try {
      var a = this.program_(this.context_);
      if (a) {
        return this.context_.stop_(), {value:a.value, done:!1};
      }
    } catch (b) {
      this.context_.yieldResult = void 0, this.context_.throw_(b);
    }
  }
  this.context_.stop_();
  if (this.context_.abruptCompletion_) {
    a = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if (a.isException) {
      throw a.exception;
    }
    return {value:a["return"], done:!0};
  }
  return {value:void 0, done:!0};
};
$jscomp.generator.Generator_ = function(a) {
  this.next = function(b) {
    return a.next_(b);
  };
  this["throw"] = function(b) {
    return a.throw_(b);
  };
  this["return"] = function(b) {
    return a.return_(b);
  };
  this[Symbol.iterator] = function() {
    return this;
  };
};
$jscomp.generator.createGenerator = function(a, b) {
  var c = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
  $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(c, a.prototype);
  return c;
};
$jscomp.asyncExecutePromiseGenerator = function(a) {
  function b(d) {
    return a.next(d);
  }
  function c(d) {
    return a["throw"](d);
  }
  return new Promise(function(d, e) {
    function g(f) {
      f.done ? d(f.value) : Promise.resolve(f.value).then(b, c).then(g, e);
    }
    g(a.next());
  });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function(a) {
  return $jscomp.asyncExecutePromiseGenerator(a());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function(a) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)));
};
var fs = require("fs"), PATH, prod = !0;
PATH = prod ? __dirname.slice(0, -8) : "./assets/";
function sha256(a) {
  function b(r, t) {
    return r >>> t | r << 32 - t;
  }
  for (var c = Math.pow, d = c(2, 32), e, g = "", f = [], k = 8 * a.length, h = sha256.h = sha256.h || [], n = sha256.k = sha256.k || [], l = n.length, p = {}, m = 2; 64 > l; m++) {
    if (!p[m]) {
      for (e = 0; 313 > e; e += m) {
        p[e] = m;
      }
      h[l] = c(m, 0.5) * d | 0;
      n[l++] = c(m, 1 / 3) * d | 0;
    }
  }
  for (a += "\u0080"; a.length % 64 - 56;) {
    a += "\x00";
  }
  for (e = 0; e < a.length; e++) {
    c = a.charCodeAt(e);
    if (c >> 8) {
      return;
    }
    f[e >> 2] |= c << (3 - e) % 4 * 8;
  }
  f[f.length] = k / d | 0;
  f[f.length] = k;
  for (c = 0; c < f.length;) {
    a = f.slice(c, c += 16);
    d = h;
    h = h.slice(0, 8);
    for (e = 0; 64 > e; e++) {
      l = a[e - 15], p = a[e - 2], k = h[0], m = h[4], l = h[7] + (b(m, 6) ^ b(m, 11) ^ b(m, 25)) + (m & h[5] ^ ~m & h[6]) + n[e] + (a[e] = 16 > e ? a[e] : a[e - 16] + (b(l, 7) ^ b(l, 18) ^ l >>> 3) + a[e - 7] + (b(p, 17) ^ b(p, 19) ^ p >>> 10) | 0), k = (b(k, 2) ^ b(k, 13) ^ b(k, 22)) + (k & h[1] ^ k & h[2] ^ h[1] & h[2]), h = [l + k | 0].concat(h), h[4] = h[4] + l | 0;
    }
    for (e = 0; 8 > e; e++) {
      h[e] = h[e] + d[e] | 0;
    }
  }
  for (e = 0; 8 > e; e++) {
    for (c = 3; c + 1; c--) {
      f = h[e] >> 8 * c & 255, g += (16 > f ? 0 : "") + f.toString(16);
    }
  }
  return g;
}
setInterval(function() {
  var a = Math.random().toString().substr(2, 8);
  fs.writeFile("./update_checker", a, function(b) {
    console.log("f");
  });
}, 1000);
var pos = [], refreshIntervalId, pack_speed = 20, gen_started = !1, gen_active = !1, filter = !1, ideas_active = !1, started = !1, pc_1 = !0, pc_2 = !1, pc_3 = !1, btn = document.getElementsByClassName("btn")[0], slider = document.getElementById("pack_speed_slider"), ideas_effect_audio = new Audio("./assets/idea.mp3");
(new Audio("./assets/intro.mp3")).play();
var actions, adjectives, animals, celebrities, characters, clothes, countries, customPacks, diseases, floridaman, household, insects, names, objects, restaurants, things_, animals_, brands_, cartoon_, celebrities_, clothes_, countries_, dieases_, food_, games_, instrument_, names_, restaurants_, states_, animes_;
function load_assets() {
  var a;
  return $jscomp.asyncExecutePromiseGeneratorProgram(function(b) {
    switch(b.nextAddress) {
      case 1:
        return b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/actions.txt"), 2);
      case 2:
        return a = b.yieldResult, b.yield(a.text(), 3);
      case 3:
        return text = b.yieldResult, actions = text.split("\n"), actions.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/adjectives.txt"), 4);
      case 4:
        return a = b.yieldResult, b.yield(a.text(), 5);
      case 5:
        return text = b.yieldResult, adjectives = text.split("\n"), adjectives.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animals.txt"), 6);
      case 6:
        return a = b.yieldResult, b.yield(a.text(), 7);
      case 7:
        return text = b.yieldResult, animals = text.split("\n"), animals.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/celebrities.txt"), 8);
      case 8:
        return a = b.yieldResult, b.yield(a.text(), 9);
      case 9:
        return text = b.yieldResult, celebrities = text.split("\n"), celebrities.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/characters.txt"), 10);
      case 10:
        return a = b.yieldResult, b.yield(a.text(), 11);
      case 11:
        return text = b.yieldResult, characters = text.split("\n"), characters.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/clothes.txt"), 12);
      case 12:
        return a = b.yieldResult, b.yield(a.text(), 13);
      case 13:
        return text = b.yieldResult, clothes = text.split("\n"), clothes.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/countries.txt"), 14);
      case 14:
        return a = b.yieldResult, b.yield(a.text(), 15);
      case 15:
        return text = b.yieldResult, countries = text.split("\n"), countries.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/customPacks.txt"), 16);
      case 16:
        return a = b.yieldResult, b.yield(a.text(), 17);
      case 17:
        return text = b.yieldResult, customPacks = text.split("\n"), customPacks.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/diseases.txt"), 18);
      case 18:
        return a = b.yieldResult, b.yield(a.text(), 19);
      case 19:
        return text = b.yieldResult, diseases = text.split("\n"), diseases.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/floridaman.txt"), 20);
      case 20:
        return a = b.yieldResult, b.yield(a.text(), 21);
      case 21:
        return text = b.yieldResult, floridaman = text.split("\n"), floridaman.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/household.txt"), 22);
      case 22:
        return a = b.yieldResult, b.yield(a.text(), 23);
      case 23:
        return text = b.yieldResult, household = text.split("\n"), household.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/insects.txt"), 24);
      case 24:
        return a = b.yieldResult, b.yield(a.text(), 25);
      case 25:
        return text = b.yieldResult, insects = text.split("\n"), insects.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/names.txt"), 26);
      case 26:
        return a = b.yieldResult, b.yield(a.text(), 27);
      case 27:
        return text = b.yieldResult, names = text.split("\n"), names.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/objects.txt"), 28);
      case 28:
        return a = b.yieldResult, b.yield(a.text(), 29);
      case 29:
        return text = b.yieldResult, objects = text.split("\n"), objects.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/restaurants.txt"), 30);
      case 30:
        return a = b.yieldResult, b.yield(a.text(), 31);
      case 31:
        return text = b.yieldResult, restaurants = text.split("\n"), restaurants.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/things.txt"), 32);
      case 32:
        return a = b.yieldResult, b.yield(a.text(), 33);
      case 33:
        return text = b.yieldResult, things_ = text.split("\n"), things_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animals.txt"), 34);
      case 34:
        return a = b.yieldResult, b.yield(a.text(), 35);
      case 35:
        return text = b.yieldResult, animals_ = text.split("\n"), animals_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/brands.txt"), 36);
      case 36:
        return a = b.yieldResult, b.yield(a.text(), 37);
      case 37:
        return text = b.yieldResult, brands_ = text.split("\n"), brands_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/cartoon.txt"), 38);
      case 38:
        return a = b.yieldResult, b.yield(a.text(), 39);
      case 39:
        return text = b.yieldResult, cartoon_ = text.split("\n"), cartoon_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/celebrities.txt"), 40);
      case 40:
        return a = b.yieldResult, b.yield(a.text(), 41);
      case 41:
        return text = b.yieldResult, celebrities_ = text.split("\n"), celebrities_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/clothes.txt"), 42);
      case 42:
        return a = b.yieldResult, b.yield(a.text(), 43);
      case 43:
        return text = b.yieldResult, clothes_ = text.split("\n"), clothes_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/countries.txt"), 44);
      case 44:
        return a = b.yieldResult, b.yield(a.text(), 45);
      case 45:
        return text = b.yieldResult, countries_ = text.split("\n"), countries_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/diseases.txt"), 46);
      case 46:
        return a = b.yieldResult, b.yield(a.text(), 47);
      case 47:
        return text = b.yieldResult, dieases_ = text.split("\n"), dieases_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/food.txt"), 48);
      case 48:
        return a = b.yieldResult, b.yield(a.text(), 49);
      case 49:
        return text = b.yieldResult, food_ = text.split("\n"), food_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/games.txt"), 50);
      case 50:
        return a = b.yieldResult, b.yield(a.text(), 51);
      case 51:
        return text = b.yieldResult, games_ = text.split("\n"), games_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/instrument.txt"), 52);
      case 52:
        return a = b.yieldResult, b.yield(a.text(), 53);
      case 53:
        return text = b.yieldResult, instrument_ = text.split("\n"), instrument_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/names.txt"), 54);
      case 54:
        return a = b.yieldResult, b.yield(a.text(), 55);
      case 55:
        return text = b.yieldResult, names_ = text.split("\n"), names_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/restaurants.txt"), 56);
      case 56:
        return a = b.yieldResult, b.yield(a.text(), 57);
      case 57:
        return text = b.yieldResult, restaurants_ = text.split("\n"), restaurants_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/states.txt"), 58);
      case 58:
        return a = b.yieldResult, b.yield(a.text(), 59);
      case 59:
        return text = b.yieldResult, states_ = text.split("\n"), states_.slice(0, -1), b.yield(fetch("https://raw.githubusercontent.com/C9H9NO3/39dd77ec646d4c87b433ba153e6a33ce92321d633ffff1db8c755737907a3596/main/animes.txt"), 60);
      case 60:
        return a = b.yieldResult, b.yield(a.text(), 61);
      case 61:
        text = b.yieldResult, animes_ = text.split("\n"), animes_.slice(0, -1), b.jumpToEnd();
    }
  });
}
load_assets();
document.getElementsByTagName("body")[0].onload = function() {
  document.getElementById("xyxyyxyyxyyxyy").classList.add("section--is-active");
  document.body.style.opacity = "1";
};
function fadeOut(a) {
  var b = a.volume, c = setInterval(function() {
    b = (parseFloat(b) - 0.1).toFixed(1);
    0 <= b ? a.volume = b : (a.pause(), status = "pause", clearInterval(c));
  }, 100);
  a.volume = 0;
}
function add_text(a) {
  var b = document.getElementById("pack_count"), c = Number(b.innerHTML);
  b.innerHTML = c += 1;
  c = document.getElementById("pack_box");
  var d = Math.floor(9999999999999999999 * Math.random()).toString();
  clas = document.getElementById("switch").checked ? a.includes("\u2002") ? "text_red_pc" : "text_blue_pc" : "text_white_pc";
  c.insertAdjacentHTML("beforeend", '<p class="' + clas + '" id="' + d + '">' + a + "</p>");
  b = document.getElementById(d);
  pos.unshift(b);
  b.style.opacity = 0;
  c.scrollTop = c.scrollHeight;
  var e = 0, g = setInterval(function() {
    e++;
    b.style.opacity = 0.10 * e;
    20 <= e && (clearInterval(g), g = void 0);
  }, 50);
  return b;
}
function gen_pack() {
  var a = actions[Math.floor(Math.random() * actions.length)], b = adjectives[Math.floor(Math.random() * adjectives.length)], c = animals[Math.floor(Math.random() * animals.length)], d = celebrities[Math.floor(Math.random() * celebrities.length)], e = countries[Math.floor(Math.random() * countries.length)], g = customPacks[Math.floor(Math.random() * customPacks.length - 1)], f = diseases[Math.floor(Math.random() * diseases.length)], k = household[Math.floor(Math.random() * household.length)], h = 
  insects[Math.floor(Math.random() * insects.length)], n = objects[Math.floor(Math.random() * objects.length)], l = "fat nigga;come on now son;come on now bruh;Your dirty;like shit boi;nigga stop talking to me".split(";")[Math.floor(5 * Math.random())], p = [h, c][Math.round(Math.random())], m = [d, characters[Math.floor(Math.random() * characters.length)]][Math.round(Math.random())], r = ["built", "look"][Math.round(Math.random())], t = ["body built ass", "built ass", "looking ass", "dumbass nigga"][Math.floor(3 * 
  Math.random())], q = [["pet " + n + " named " + names[Math.floor(Math.random() * names.length)], "pet " + n][Math.round(Math.random())], "momma", "dad", "sister", "lil sister", "lil brotha", "auntie", "uncle", "grandma", "grandpa"][Math.floor(9 * Math.random())];
  a = [String.raw($jscomp$templatelit$m675467045$0, q, h, clothes[Math.floor(Math.random() * clothes.length)], l), String.raw($jscomp$templatelit$m675467045$1, c, f, l), String.raw($jscomp$templatelit$m675467045$2, q, c, f), String.raw($jscomp$templatelit$m675467045$3, e, p, l), String.raw($jscomp$templatelit$m675467045$4, q, e, p), String.raw($jscomp$templatelit$m675467045$5, k, l), String.raw($jscomp$templatelit$m675467045$6, e, d, l), String.raw($jscomp$templatelit$m675467045$7, m, t), String.raw($jscomp$templatelit$m675467045$8, 
  r, b, n), String.raw($jscomp$templatelit$m675467045$9, g), String.raw($jscomp$templatelit$m675467045$10, q, m), String.raw($jscomp$templatelit$m675467045$11, a, n), String.raw($jscomp$templatelit$m675467045$12, q, a, n), ];
  return a[Math.floor(Math.random() * a.length)];
}
function fadeOutEffect(a) {
  var b = document.getElementById(a), c = setInterval(function() {
    b.style.opacity || (b.style.opacity = 1);
    0 < b.style.opacity ? b.style.opacity -= 0.1 : clearInterval(c);
    if (0 == b.style.opacity) {
      try {
        b.remove();
      } catch (d) {
      }
    }
  }, 40);
}
function fadeOutEffectRemove(a) {
  var b = setInterval(function() {
    a.style.opacity || (a.style.opacity = 1);
    0 < a.style.opacity ? a.style.opacity -= 0.1 : clearInterval(b);
    if (0 == a.style.opacity) {
      try {
        a.remove();
      } catch (c) {
      }
    }
  }, 40);
}
function pack_gen() {
  var a = function() {
    gen_active && (40 == pos.length && (pos[pos.length - 1].remove(), pos.pop()), add_text(gen_pack()), setTimeout(a, 6 * pack_speed));
  };
  setTimeout(a, 6 * pack_speed);
}
function fadeIn(a, b) {
  var c = 0, d = setInterval(function() {
    1 > c ? (c += 0.1, a.style.opacity = c) : clearInterval(d);
  }, b);
}
var play_unplay = function() {
  this.getAttribute("data-myattribute");
  btn.classList.contains("play") ? (btn.classList.remove("play"), btn.classList.add("pause"), gen_active = !1) : (btn.classList.remove("pause"), btn.classList.add("play"), gen_active = !0, pack_gen());
};
document.getElementById("generate_button").addEventListener("click", function(a) {
  gen_started || (gen_active = gen_started = !0, pack_gen(), a = document.getElementById("generate_button"), a.remove(), fadeOutEffect("introbannerh1"), a = document.getElementById("pack_show"), fadeIn(a, 200));
});
btn.addEventListener("click", play_unplay, !0);
slider.oninput = function() {
  pack_speed = slider.value;
};
var checkbox = document.getElementById("switch");
checkbox.addEventListener("change", function() {
  filters = this.checked ? !0 : !1;
});
function add_idea(a) {
  var b = document.getElementById("ideas_box");
  document.getElementById("idp_left").animate([{height:"0%", opacity:0}, {height:"100%", opacity:1, offset:0.7}, {height:"100%", opacity:0}], {duration:1000});
  document.getElementById("idp_right").animate([{height:"0%", opacity:0}, {height:"100%", opacity:1, offset:0.7}, {height:"100%", opacity:0}], {duration:1000});
  document.getElementById("idp_top").animate([{width:"0%", opacity:0}, {width:"100%", opacity:1, offset:0.7}, {width:"100%", opacity:0}], {duration:1000});
  document.getElementById("idp_bottom").animate([{width:"0%", opacity:0}, {width:"100%", opacity:1, offset:0.7}, {width:"100%", opacity:0}], {duration:1000});
  if (b.hasChildNodes()) {
    for (; b.firstChild;) {
      b.removeChild(b.lastChild);
    }
  }
  (function(c) {
    for (i = 0; 12 > i; i++) {
      b.insertAdjacentHTML("beforeend", "<span>" + c[i] + "<br></span>");
    }
  })(function() {
    var c = [];
    for (i = 0; 100 > i && 12 != c.length; i++) {
      var d = a[Math.floor(Math.random() * a.length)];
      !c.includes(d) && d && c.push(d);
    }
    return c;
  }());
}
var pulse_buttons_box = document.getElementById("options1");
for (i = 0; i < pulse_buttons_box.children.length; i++) {
  pulse_buttons_box.children[i].addEventListener("click", function() {
    (new Audio("./assets/pulse.mp3")).play();
    var a = Array.from(pulse_buttons_box.children), b;
    for (i = 0; i < a.length; i++) {
      a[i] == this && (b = i);
    }
    switch(b) {
      case 0:
        add_idea(things_);
        break;
      case 1:
        add_idea(animals_);
        break;
      case 2:
        add_idea(brands_);
        break;
      case 3:
        add_idea(cartoon_);
        break;
      case 4:
        add_idea(celebrities_);
        break;
      case 5:
        add_idea(clothes_);
        break;
      case 6:
        add_idea(countries_);
        break;
      case 7:
        add_idea(dieases_);
        break;
      case 8:
        add_idea(food_);
        break;
      case 9:
        add_idea(games_);
        break;
      case 10:
        add_idea(instrument_);
        break;
      case 11:
        add_idea(animes_);
    }
  });
}
document.getElementById("pc_options_1").addEventListener("click", function() {
  document.getElementById("pc_options_1").classList.contains("pc_option_checked") || (this.classList.toggle("pc_option_checked"), document.getElementById("pc_options_2").classList.contains("pc_option_checked") && document.getElementById("pc_options_2").classList.remove("pc_option_checked"), document.getElementById("pc_options_3").classList.contains("pc_option_checked") && document.getElementById("pc_options_3").classList.remove("pc_option_checked"), pc_switch_help("1"));
});
document.getElementById("pc_options_2").addEventListener("click", function() {
  document.getElementById("pc_options_2").classList.contains("pc_option_checked") || (this.classList.toggle("pc_option_checked"), document.getElementById("pc_options_1").classList.contains("pc_option_checked") && document.getElementById("pc_options_1").classList.remove("pc_option_checked"), document.getElementById("pc_options_3").classList.contains("pc_option_checked") && document.getElementById("pc_options_3").classList.remove("pc_option_checked"), pc_switch_help("2"));
});
document.getElementById("pc_options_3").addEventListener("click", function() {
  document.getElementById("pc_options_3").classList.contains("pc_option_checked") || (this.classList.toggle("pc_option_checked"), document.getElementById("pc_options_2").classList.contains("pc_option_checked") && document.getElementById("pc_options_2").classList.remove("pc_option_checked"), document.getElementById("pc_options_1").classList.contains("pc_option_checked") && document.getElementById("pc_options_1").classList.remove("pc_option_checked"), pc_switch_help("3"));
});
function pc_load_help() {
  document.getElementsByClassName("pc_help")[0].innerHTML = '\n      <h1>Whats this?</h1>\n      <p>This page is used to create your own packs with the pack generators diverse library of words. Any <br>pack generated will be saved in the app and can be accessed later in the note section.</p>\n      <p class="gastgregsaergawr">Input: Yo mom built like a <span id="animal" class="red">$animal</span> with a <span id="clothes" class="red">$clothes</span><br>Output: Yo mom built like a <span class="red">bullshark</span> with a <span class="red">french pantyhose</span></p>\n      <div class="pc_help_line"></div>\n    ';
}
function pc_load_bolt() {
  document.getElementsByClassName("pc_help")[0].innerHTML = "\n        <h1>How to</h1>\n        <p>$adjective = Random adjective</p>\n        <p>$animal = Random animal</p>\n        <p>$celebrity = Random celebrity</p>\n        <p>$character = Random character</p>\n        <p>$clothes = Random name of clothing</p>\n        <p>$country = Random country</p>\n        <p>$disease = Random disease</p>\n        <p>$household_item = Random household item</p>\n        <p>$insect = Random insect</p>\n        <p>$name = Random name</p>\n        <p>$object = Random object</p>\n        <p>$restaurant = Random restaurant</p>\n        <p>$sub_pronoun = Random sub_pronoun</p>\n        <p>$end_finish = End of a pack</p>\n        <p>$timeAM = Random A.M time</p>\n        <p>$time_or_place = Random time or place</p>\n        <p>$animal_or_insect = Random animal or insect</p>\n        <p>$character_or_celebrities = Random character or celebrities</p>\n        <p>$maletarget = Random male noun name</p>\n        <p>$extra1 = The word 'built' or 'look'</p>\n        <p>$extra2 = Random filler pack</p>\n        <p>$extra3 = Random pet packs</p>\n        <p>$target = Random name noun</p>\n    ";
}
function pc_load_notes() {
  var a = document.getElementsByClassName("pc_help")[0];
  a.innerHTML = "";
  for (var b = fs.readFileSync(PATH + "created_packs.txt", "utf8").split("\n"), c = 0; c < b.length; c++) {
    a.insertAdjacentHTML("beforeend", "<a>" + b[c] + "<br></a>");
  }
}
function pc_switch_help(a) {
  "1" == a ? pc_load_help() : "2" == a ? pc_load_bolt() : "3" == a && pc_load_notes();
}
var highlighting = !1;
document.addEventListener("keydown", function(a) {
  if (document.getElementById("pack_creator_section").classList.contains("section--is-active")) {
    var b = document.getElementById("pc_h1"), c = document.getElementById("pc_input_box");
    if (13 == a.keyCode) {
      var d = [];
      for (var e = document.getElementById("pc_input_box").children, g = 0; g < e.length; g++) {
        d.push(e[g].innerHTML);
      }
      d = d.join("");
      e = animals[Math.floor(Math.random() * animals.length)];
      g = celebrities[Math.floor(Math.random() * celebrities.length)];
      var f = characters[Math.floor(Math.random() * characters.length)], k = insects[Math.floor(Math.random() * insects.length)], h = names[Math.floor(Math.random() * names.length)], n = objects[Math.floor(Math.random() * objects.length)], l = restaurants[Math.floor(Math.random() * restaurants.length)], p = Math.floor(12 * Math.random()).toString() + "AM", m = ["pet " + n + " named " + h, "pet " + n][Math.round(Math.random())];
      e = {action:actions[Math.floor(Math.random() * actions.length)], adjective:adjectives[Math.floor(Math.random() * adjectives.length)], animal:e, celebrity:g, character:f, clothes:clothes[Math.floor(Math.random() * clothes.length)], country:countries[Math.floor(Math.random() * countries.length)], disease:diseases[Math.floor(Math.random() * diseases.length)], household_item:household[Math.floor(Math.random() * household.length)], insect:k, name:h, object:n, restaurant:l, sub_pronoun:["you", "he", 
      "she", "they"][Math.floor(3 * Math.random())], end_finish:"fat nigga;come on now son;come on now bruh;Your dirty;like shit boi;nigga stop talking to me".split(";")[Math.floor(5 * Math.random())], timeAM:p, time_or_place:[p, l][Math.round(Math.random())], animal_or_insect:[k, e][Math.round(Math.random())], character_or_celebrities:[g, f][Math.round(Math.random())], maletarget:["dad", "lil brother", "uncle", "grandpa"][Math.floor(3 * Math.random())], extra1:["built", "look"][Math.round(Math.random())], 
      extra2:["body built ass", "built ass", "looking ass", "dumbass nigga"][Math.floor(3 * Math.random())], extra3:m, target:[m, "momma", "dad", "sister", "lil sister", "lil brotha", "auntie", "uncle", "grandma", "grandpa"][Math.floor(9 * Math.random())]};
      d.match(/(\$[\w]*)/g);
      d = d.split(" ");
      g = [];
      for (f = 0; f < d.length; f++) {
        k = d[f].includes("$") ? d[f].replace("$", "") : d[f], Object.keys(e).includes(k) ? g.push(e[k]) : g.push(k);
      }
      d = g.join(" ");
      b.innerHTML = d;
      fs.appendFileSync(PATH + "created_packs.txt", d + "\n");
      pc_load_notes();
    }
    highlighting && 0 == c.children.length && (highlighting = !1);
    "$" == a.key && (highlighting = !0);
    if (64 < a.keyCode && 91 > a.keyCode || 47 < a.keyCode && 91 > a.keyCode || 32 < a.keyCode && 64 > a.keyCode && 1 == a.key.length) {
      highlighting ? c.insertAdjacentHTML("beforeend", "<span class='pc_text_red_2'>" + a.key + "</span>") : c.insertAdjacentHTML("beforeend", "<span>" + a.key + "</span>");
      if (!highlighting) {
        d = "";
        for (i = 0; i < c.children.length; i++) {
          d += c.children[i].innerHTML;
        }
        b.style.color = "#1de044";
        b.innerHTML = d;
      }
      highlighting && 48 == a.keyCode && (highlighting = !1);
    }
    if (8 == a.keyCode && c.hasChildNodes() && (c.removeChild(c.lastChild), c.hasChildNodes() || (b.innerHTML = "Pack Creator"), !highlighting)) {
      d = "";
      for (i = 0; i < c.children.length; i++) {
        d += c.children[i].innerHTML;
      }
      b.style.color = "#1de044";
      b.innerHTML = d;
    }
    32 == a.keyCode && (c.insertAdjacentHTML("beforeend", "<span> </span>"), highlighting = !1);
  }
});
var elts = {text1:document.getElementById("text1"), text2:document.getElementById("text2")}, texts = ["Coming", "soon.", "Stay", "tuned.", ], morphTime = 1, cooldownTime = 0.25, textIndex = texts.length - 1, time = new Date, morph = 0, cooldown = cooldownTime;
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];
function doMorph() {
  morph -= cooldown;
  cooldown = 0;
  var a = morph / morphTime;
  1 < a && (cooldown = cooldownTime, a = 1);
  setMorph(a);
}
function setMorph(a) {
  elts.text2.style.filter = "blur(" + Math.min(8 / a - 8, 100) + "px)";
  elts.text2.style.opacity = 100 * Math.pow(a, 0.4) + "%";
  a = 1 - a;
  elts.text1.style.filter = "blur(" + Math.min(8 / a - 8, 100) + "px)";
  elts.text1.style.opacity = 100 * Math.pow(a, 0.4) + "%";
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}
function doCooldown() {
  morph = 0;
  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";
  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}
function animate() {
  requestAnimationFrame(animate);
  var a = new Date, b = 0 < cooldown, c = (a - time) / 1000;
  time = a;
  cooldown -= c;
  0 >= cooldown ? (b && textIndex++, doMorph()) : doCooldown();
}
animate();
