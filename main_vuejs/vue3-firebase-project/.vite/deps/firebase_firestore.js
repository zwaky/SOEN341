import {
  Component,
  FirebaseError,
  LogLevel,
  Logger,
  SDK_VERSION,
  _getProvider,
  _registerComponent,
  _removeServiceInstance,
  createMockUserToken,
  deepEqual,
  getApp,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  getUA,
  isIndexedDBAvailable,
  isSafari,
  registerVersion
} from "./chunk-LZF6QNO4.js";

// node_modules/@firebase/webchannel-wrapper/dist/index.esm2017.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var esm = {};
var k;
var goog = goog || {};
var l = commonjsGlobal || self;
function aa() {
}
function ba(a) {
  var b2 = typeof a;
  b2 = "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
  return "array" == b2 || "object" == b2 && "number" == typeof a.length;
}
function p(a) {
  var b2 = typeof a;
  return "object" == b2 && null != a || "function" == b2;
}
function ca(a) {
  return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea);
}
var da = "closure_uid_" + (1e9 * Math.random() >>> 0);
var ea = 0;
function fa(a, b2, c) {
  return a.call.apply(a.bind, arguments);
}
function ha(a, b2, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b2, e);
    };
  }
  return function() {
    return a.apply(b2, arguments);
  };
}
function q(a, b2, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = fa : q = ha;
  return q.apply(null, arguments);
}
function ia(a, b2) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function t(a, b2) {
  function c() {
  }
  c.prototype = b2.prototype;
  a.X = b2.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Wb = function(d, e, f) {
    for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
      h[n - 2] = arguments[n];
    return b2.prototype[e].apply(d, h);
  };
}
function v() {
  this.s = this.s;
  this.o = this.o;
}
var ja = 0;
v.prototype.s = false;
v.prototype.na = function() {
  if (!this.s && (this.s = true, this.M(), 0 != ja)) {
    ca(this);
  }
};
v.prototype.M = function() {
  if (this.o)
    for (; this.o.length; )
      this.o.shift()();
};
var la = Array.prototype.indexOf ? function(a, b2) {
  return Array.prototype.indexOf.call(a, b2, void 0);
} : function(a, b2) {
  if ("string" === typeof a)
    return "string" !== typeof b2 || 1 != b2.length ? -1 : a.indexOf(b2, 0);
  for (let c = 0; c < a.length; c++)
    if (c in a && a[c] === b2)
      return c;
  return -1;
};
function ma(a) {
  const b2 = a.length;
  if (0 < b2) {
    const c = Array(b2);
    for (let d = 0; d < b2; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function na(a, b2) {
  for (let c = 1; c < arguments.length; c++) {
    const d = arguments[c];
    if (ba(d)) {
      const e = a.length || 0, f = d.length || 0;
      a.length = e + f;
      for (let h = 0; h < f; h++)
        a[e + h] = d[h];
    } else
      a.push(d);
  }
}
function w(a, b2) {
  this.type = a;
  this.g = this.target = b2;
  this.defaultPrevented = false;
}
w.prototype.h = function() {
  this.defaultPrevented = true;
};
var oa = function() {
  if (!l.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b2 = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    l.addEventListener("test", aa, b2), l.removeEventListener("test", aa, b2);
  } catch (c) {
  }
  return a;
}();
function pa(a) {
  return /^[\s\xa0]*$/.test(a);
}
var qa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function ra(a, b2) {
  return a < b2 ? -1 : a > b2 ? 1 : 0;
}
function sa() {
  var a = l.navigator;
  return a && (a = a.userAgent) ? a : "";
}
function x(a) {
  return -1 != sa().indexOf(a);
}
function ta(a) {
  ta[" "](a);
  return a;
}
ta[" "] = aa;
function ua(a) {
  var b2 = va;
  return Object.prototype.hasOwnProperty.call(b2, 9) ? b2[9] : b2[9] = a(9);
}
var wa = x("Opera");
var y = x("Trident") || x("MSIE");
var xa = x("Edge");
var ya = xa || y;
var za = x("Gecko") && !(-1 != sa().toLowerCase().indexOf("webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge");
var Aa = -1 != sa().toLowerCase().indexOf("webkit") && !x("Edge");
function Ba() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Ea;
a: {
  Fa2 = "", Ga2 = function() {
    var a = sa();
    if (za)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (xa)
      return /Edge\/([\d\.]+)/.exec(a);
    if (y)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (Aa)
      return /WebKit\/(\S+)/.exec(a);
    if (wa)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Ga2 && (Fa2 = Ga2 ? Ga2[1] : "");
  if (y) {
    Ha2 = Ba();
    if (null != Ha2 && Ha2 > parseFloat(Fa2)) {
      Ea = String(Ha2);
      break a;
    }
  }
  Ea = Fa2;
}
var Fa2;
var Ga2;
var Ha2;
var va = {};
function Ia() {
  return ua(function() {
    let a = 0;
    const b2 = qa(String(Ea)).split("."), c = qa("9").split("."), d = Math.max(b2.length, c.length);
    for (let h = 0; 0 == a && h < d; h++) {
      var e = b2[h] || "", f = c[h] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length)
          break;
        a = ra(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ra(0 == e[2].length, 0 == f[2].length) || ra(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == a);
    }
    return 0 <= a;
  });
}
var Ja;
if (l.document && y) {
  Ka2 = Ba();
  Ja = Ka2 ? Ka2 : parseInt(Ea, 10) || void 0;
} else
  Ja = void 0;
var Ka2;
var La = Ja;
function z(a, b2) {
  w.call(this, a ? a.type : "");
  this.relatedTarget = this.g = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b2;
    if (b2 = a.relatedTarget) {
      if (za) {
        a: {
          try {
            ta(b2.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b2 = null);
      }
    } else
      "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
    this.relatedTarget = b2;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ma[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && z.X.h.call(this);
  }
}
t(z, w);
var Ma = { 2: "touch", 3: "pen", 4: "mouse" };
z.prototype.h = function() {
  z.X.h.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = false;
};
var A = "closure_listenable_" + (1e6 * Math.random() | 0);
var Na = 0;
function Oa(a, b2, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b2;
  this.type = c;
  this.capture = !!d;
  this.ha = e;
  this.key = ++Na;
  this.ba = this.ea = false;
}
function Pa(a) {
  a.ba = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ha = null;
}
function Qa(a, b2, c) {
  for (const d in a)
    b2.call(c, a[d], d, a);
}
function Ra(a) {
  const b2 = {};
  for (const c in a)
    b2[c] = a[c];
  return b2;
}
var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ta(a, b2) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (let f = 0; f < Sa.length; f++)
      c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ua(a) {
  this.src = a;
  this.g = {};
  this.h = 0;
}
Ua.prototype.add = function(a, b2, c, d, e) {
  var f = a.toString();
  a = this.g[f];
  a || (a = this.g[f] = [], this.h++);
  var h = Va(a, b2, d, e);
  -1 < h ? (b2 = a[h], c || (b2.ea = false)) : (b2 = new Oa(b2, this.src, f, !!d, e), b2.ea = c, a.push(b2));
  return b2;
};
function Wa(a, b2) {
  var c = b2.type;
  if (c in a.g) {
    var d = a.g[c], e = la(d, b2), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (Pa(b2), 0 == a.g[c].length && (delete a.g[c], a.h--));
  }
}
function Va(a, b2, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.ba && f.listener == b2 && f.capture == !!c && f.ha == d)
      return e;
  }
  return -1;
}
var Xa = "closure_lm_" + (1e6 * Math.random() | 0);
var Ya = {};
function $a(a, b2, c, d, e) {
  if (d && d.once)
    return ab(a, b2, c, d, e);
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      $a(a, b2[f], c, d, e);
    return null;
  }
  c = bb(c);
  return a && a[A] ? a.N(b2, c, p(d) ? !!d.capture : !!d, e) : cb(a, b2, c, false, d, e);
}
function cb(a, b2, c, d, e, f) {
  if (!b2)
    throw Error("Invalid event type");
  var h = p(e) ? !!e.capture : !!e, n = db(a);
  n || (a[Xa] = n = new Ua(a));
  c = n.add(b2, c, d, h, f);
  if (c.proxy)
    return c;
  d = eb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    oa || (e = h), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(fb(b2.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function eb() {
  function a(c) {
    return b2.call(a.src, a.listener, c);
  }
  const b2 = gb;
  return a;
}
function ab(a, b2, c, d, e) {
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      ab(a, b2[f], c, d, e);
    return null;
  }
  c = bb(c);
  return a && a[A] ? a.O(b2, c, p(d) ? !!d.capture : !!d, e) : cb(a, b2, c, true, d, e);
}
function hb(a, b2, c, d, e) {
  if (Array.isArray(b2))
    for (var f = 0; f < b2.length; f++)
      hb(a, b2[f], c, d, e);
  else
    (d = p(d) ? !!d.capture : !!d, c = bb(c), a && a[A]) ? (a = a.i, b2 = String(b2).toString(), b2 in a.g && (f = a.g[b2], c = Va(f, c, d, e), -1 < c && (Pa(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b2], a.h--)))) : a && (a = db(a)) && (b2 = a.g[b2.toString()], a = -1, b2 && (a = Va(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && ib(c));
}
function ib(a) {
  if ("number" !== typeof a && a && !a.ba) {
    var b2 = a.src;
    if (b2 && b2[A])
      Wa(b2.i, a);
    else {
      var c = a.type, d = a.proxy;
      b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(fb(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
      (c = db(b2)) ? (Wa(c, a), 0 == c.h && (c.src = null, b2[Xa] = null)) : Pa(a);
    }
  }
}
function fb(a) {
  return a in Ya ? Ya[a] : Ya[a] = "on" + a;
}
function gb(a, b2) {
  if (a.ba)
    a = true;
  else {
    b2 = new z(b2, this);
    var c = a.listener, d = a.ha || a.src;
    a.ea && ib(a);
    a = c.call(d, b2);
  }
  return a;
}
function db(a) {
  a = a[Xa];
  return a instanceof Ua ? a : null;
}
var jb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function bb(a) {
  if ("function" === typeof a)
    return a;
  a[jb] || (a[jb] = function(b2) {
    return a.handleEvent(b2);
  });
  return a[jb];
}
function B() {
  v.call(this);
  this.i = new Ua(this);
  this.P = this;
  this.I = null;
}
t(B, v);
B.prototype[A] = true;
B.prototype.removeEventListener = function(a, b2, c, d) {
  hb(this, a, b2, c, d);
};
function C(a, b2) {
  var c, d = a.I;
  if (d)
    for (c = []; d; d = d.I)
      c.push(d);
  a = a.P;
  d = b2.type || b2;
  if ("string" === typeof b2)
    b2 = new w(b2, a);
  else if (b2 instanceof w)
    b2.target = b2.target || a;
  else {
    var e = b2;
    b2 = new w(d, a);
    Ta(b2, e);
  }
  e = true;
  if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
      var h = b2.g = c[f];
      e = kb(h, d, true, b2) && e;
    }
  h = b2.g = a;
  e = kb(h, d, true, b2) && e;
  e = kb(h, d, false, b2) && e;
  if (c)
    for (f = 0; f < c.length; f++)
      h = b2.g = c[f], e = kb(h, d, false, b2) && e;
}
B.prototype.M = function() {
  B.X.M.call(this);
  if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
      for (var d = a.g[c], e = 0; e < d.length; e++)
        Pa(d[e]);
      delete a.g[c];
      a.h--;
    }
  }
  this.I = null;
};
B.prototype.N = function(a, b2, c, d) {
  return this.i.add(String(a), b2, false, c, d);
};
B.prototype.O = function(a, b2, c, d) {
  return this.i.add(String(a), b2, true, c, d);
};
function kb(a, b2, c, d) {
  b2 = a.i.g[String(b2)];
  if (!b2)
    return true;
  b2 = b2.concat();
  for (var e = true, f = 0; f < b2.length; ++f) {
    var h = b2[f];
    if (h && !h.ba && h.capture == c) {
      var n = h.listener, u = h.ha || h.src;
      h.ea && Wa(a.i, h);
      e = false !== n.call(u, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var lb = l.JSON.stringify;
function mb() {
  var a = nb;
  let b2 = null;
  a.g && (b2 = a.g, a.g = a.g.next, a.g || (a.h = null), b2.next = null);
  return b2;
}
var ob = class {
  constructor() {
    this.h = this.g = null;
  }
  add(a, b2) {
    const c = pb.get();
    c.set(a, b2);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  }
};
var pb = new class {
  constructor(a, b2) {
    this.i = a;
    this.j = b2;
    this.h = 0;
    this.g = null;
  }
  get() {
    let a;
    0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
    return a;
  }
}(() => new qb(), (a) => a.reset());
var qb = class {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(a, b2) {
    this.h = a;
    this.g = b2;
    this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
};
function rb(a) {
  l.setTimeout(() => {
    throw a;
  }, 0);
}
function sb(a, b2) {
  ub || vb();
  wb || (ub(), wb = true);
  nb.add(a, b2);
}
var ub;
function vb() {
  var a = l.Promise.resolve(void 0);
  ub = function() {
    a.then(xb);
  };
}
var wb = false;
var nb = new ob();
function xb() {
  for (var a; a = mb(); ) {
    try {
      a.h.call(a.g);
    } catch (c) {
      rb(c);
    }
    var b2 = pb;
    b2.j(a);
    100 > b2.h && (b2.h++, a.next = b2.g, b2.g = a);
  }
  wb = false;
}
function yb(a, b2) {
  B.call(this);
  this.h = a || 1;
  this.g = b2 || l;
  this.j = q(this.lb, this);
  this.l = Date.now();
}
t(yb, B);
k = yb.prototype;
k.ca = false;
k.R = null;
k.lb = function() {
  if (this.ca) {
    var a = Date.now() - this.l;
    0 < a && a < 0.8 * this.h ? this.R = this.g.setTimeout(this.j, this.h - a) : (this.R && (this.g.clearTimeout(this.R), this.R = null), C(this, "tick"), this.ca && (zb(this), this.start()));
  }
};
k.start = function() {
  this.ca = true;
  this.R || (this.R = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function zb(a) {
  a.ca = false;
  a.R && (a.g.clearTimeout(a.R), a.R = null);
}
k.M = function() {
  yb.X.M.call(this);
  zb(this);
  delete this.g;
};
function Ab(a, b2, c) {
  if ("function" === typeof a)
    c && (a = q(a, c));
  else if (a && "function" == typeof a.handleEvent)
    a = q(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b2) ? -1 : l.setTimeout(a, b2 || 0);
}
function Bb(a) {
  a.g = Ab(() => {
    a.g = null;
    a.i && (a.i = false, Bb(a));
  }, a.j);
  const b2 = a.h;
  a.h = null;
  a.m.apply(null, b2);
}
var Cb = class extends v {
  constructor(a, b2) {
    super();
    this.m = a;
    this.j = b2;
    this.h = null;
    this.i = false;
    this.g = null;
  }
  l(a) {
    this.h = arguments;
    this.g ? this.i = true : Bb(this);
  }
  M() {
    super.M();
    this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
  }
};
function D(a) {
  v.call(this);
  this.h = a;
  this.g = {};
}
t(D, v);
var Db = [];
function Eb(a, b2, c, d) {
  Array.isArray(c) || (c && (Db[0] = c.toString()), c = Db);
  for (var e = 0; e < c.length; e++) {
    var f = $a(b2, c[e], d || a.handleEvent, false, a.h || a);
    if (!f)
      break;
    a.g[f.key] = f;
  }
}
function Fb(a) {
  Qa(a.g, function(b2, c) {
    this.g.hasOwnProperty(c) && ib(b2);
  }, a);
  a.g = {};
}
D.prototype.M = function() {
  D.X.M.call(this);
  Fb(this);
};
D.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Gb() {
  this.g = true;
}
Gb.prototype.Aa = function() {
  this.g = false;
};
function Hb(a, b2, c, d, e, f) {
  a.info(function() {
    if (a.g)
      if (f) {
        var h = "";
        for (var n = f.split("&"), u = 0; u < n.length; u++) {
          var m = n[u].split("=");
          if (1 < m.length) {
            var r = m[0];
            m = m[1];
            var F2 = r.split("_");
            h = 2 <= F2.length && "type" == F2[1] ? h + (r + "=" + m + "&") : h + (r + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + h;
  });
}
function Ib(a, b2, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + h;
  });
}
function E(a, b2, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b2 + "): " + Jb(a, c) + (d ? " " + d : "");
  });
}
function Kb(a, b2) {
  a.info(function() {
    return "TIMEOUT: " + b2;
  });
}
Gb.prototype.info = function() {
};
function Jb(a, b2) {
  if (!a.g)
    return b2;
  if (!b2)
    return null;
  try {
    var c = JSON.parse(b2);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if ("noop" != f && "stop" != f && "close" != f)
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return lb(c);
  } catch (n) {
    return b2;
  }
}
var G = {};
var Lb = null;
function Mb() {
  return Lb = Lb || new B();
}
G.Pa = "serverreachability";
function Nb(a) {
  w.call(this, G.Pa, a);
}
t(Nb, w);
function H(a) {
  const b2 = Mb();
  C(b2, new Nb(b2));
}
G.STAT_EVENT = "statevent";
function Ob(a, b2) {
  w.call(this, G.STAT_EVENT, a);
  this.stat = b2;
}
t(Ob, w);
function I(a) {
  const b2 = Mb();
  C(b2, new Ob(b2, a));
}
G.Qa = "timingevent";
function Pb(a, b2) {
  w.call(this, G.Qa, a);
  this.size = b2;
}
t(Pb, w);
function J(a, b2) {
  if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function");
  return l.setTimeout(function() {
    a();
  }, b2);
}
var Qb = { NO_ERROR: 0, mb: 1, zb: 2, yb: 3, tb: 4, xb: 5, Ab: 6, Ma: 7, TIMEOUT: 8, Db: 9 };
var Rb = { rb: "complete", Nb: "success", Na: "error", Ma: "abort", Fb: "ready", Gb: "readystatechange", TIMEOUT: "timeout", Bb: "incrementaldata", Eb: "progress", ub: "downloadprogress", Vb: "uploadprogress" };
function Sb() {
}
Sb.prototype.h = null;
function Tb(a) {
  return a.h || (a.h = a.i());
}
function Ub() {
}
var K = { OPEN: "a", qb: "b", Na: "c", Cb: "d" };
function Vb() {
  w.call(this, "d");
}
t(Vb, w);
function Wb() {
  w.call(this, "c");
}
t(Wb, w);
var Xb;
function Yb() {
}
t(Yb, Sb);
Yb.prototype.g = function() {
  return new XMLHttpRequest();
};
Yb.prototype.i = function() {
  return {};
};
Xb = new Yb();
function L(a, b2, c, d) {
  this.l = a;
  this.j = b2;
  this.m = c;
  this.U = d || 1;
  this.S = new D(this);
  this.O = Zb;
  a = ya ? 125 : void 0;
  this.T = new yb(a);
  this.H = null;
  this.i = false;
  this.s = this.A = this.v = this.K = this.F = this.V = this.B = null;
  this.D = [];
  this.g = null;
  this.C = 0;
  this.o = this.u = null;
  this.Y = -1;
  this.I = false;
  this.N = 0;
  this.L = null;
  this.$ = this.J = this.Z = this.P = false;
  this.h = new $b();
}
function $b() {
  this.i = null;
  this.g = "";
  this.h = false;
}
var Zb = 45e3;
var ac = {};
var bc = {};
k = L.prototype;
k.setTimeout = function(a) {
  this.O = a;
};
function cc(a, b2, c) {
  a.K = 1;
  a.v = dc(M(b2));
  a.s = c;
  a.P = true;
  ec(a, null);
}
function ec(a, b2) {
  a.F = Date.now();
  N(a);
  a.A = M(a.v);
  var c = a.A, d = a.U;
  Array.isArray(d) || (d = [String(d)]);
  fc(c.i, "t", d);
  a.C = 0;
  c = a.l.H;
  a.h = new $b();
  a.g = gc(a.l, c ? b2 : null, !a.s);
  0 < a.N && (a.L = new Cb(q(a.La, a, a.g), a.N));
  Eb(a.S, a.g, "readystatechange", a.ib);
  b2 = a.H ? Ra(a.H) : {};
  a.s ? (a.u || (a.u = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.g.da(a.A, a.u, a.s, b2)) : (a.u = "GET", a.g.da(a.A, a.u, null, b2));
  H();
  Hb(a.j, a.u, a.A, a.m, a.U, a.s);
}
k.ib = function(a) {
  a = a.target;
  const b2 = this.L;
  b2 && 3 == O(a) ? b2.l() : this.La(a);
};
k.La = function(a) {
  try {
    if (a == this.g)
      a: {
        const r = O(this.g);
        var b2 = this.g.Ea();
        const F2 = this.g.aa();
        if (!(3 > r) && (3 != r || ya || this.g && (this.h.h || this.g.fa() || hc(this.g)))) {
          this.I || 4 != r || 7 == b2 || (8 == b2 || 0 >= F2 ? H(3) : H(2));
          ic(this);
          var c = this.g.aa();
          this.Y = c;
          b:
            if (jc(this)) {
              var d = hc(this.g);
              a = "";
              var e = d.length, f = 4 == O(this.g);
              if (!this.h.i) {
                if ("undefined" === typeof TextDecoder) {
                  P(this);
                  Q(this);
                  var h = "";
                  break b;
                }
                this.h.i = new l.TextDecoder();
              }
              for (b2 = 0; b2 < e; b2++)
                this.h.h = true, a += this.h.i.decode(d[b2], { stream: f && b2 == e - 1 });
              d.splice(
                0,
                e
              );
              this.h.g += a;
              this.C = 0;
              h = this.h.g;
            } else
              h = this.g.fa();
          this.i = 200 == c;
          Ib(this.j, this.u, this.A, this.m, this.U, r, c);
          if (this.i) {
            if (this.Z && !this.J) {
              b: {
                if (this.g) {
                  var n, u = this.g;
                  if ((n = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !pa(n)) {
                    var m = n;
                    break b;
                  }
                }
                m = null;
              }
              if (c = m)
                E(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, kc(this, c);
              else {
                this.i = false;
                this.o = 3;
                I(12);
                P(this);
                Q(this);
                break a;
              }
            }
            this.P ? (lc(this, r, h), ya && this.i && 3 == r && (Eb(this.S, this.T, "tick", this.hb), this.T.start())) : (E(this.j, this.m, h, null), kc(this, h));
            4 == r && P(this);
            this.i && !this.I && (4 == r ? mc(this.l, this) : (this.i = false, N(this)));
          } else
            400 == c && 0 < h.indexOf("Unknown SID") ? (this.o = 3, I(12)) : (this.o = 0, I(13)), P(this), Q(this);
        }
      }
  } catch (r) {
  } finally {
  }
};
function jc(a) {
  return a.g ? "GET" == a.u && 2 != a.K && a.l.Da : false;
}
function lc(a, b2, c) {
  let d = true, e;
  for (; !a.I && a.C < c.length; )
    if (e = nc(a, c), e == bc) {
      4 == b2 && (a.o = 4, I(14), d = false);
      E(a.j, a.m, null, "[Incomplete Response]");
      break;
    } else if (e == ac) {
      a.o = 4;
      I(15);
      E(a.j, a.m, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      E(a.j, a.m, e, null), kc(a, e);
  jc(a) && e != bc && e != ac && (a.h.g = "", a.C = 0);
  4 != b2 || 0 != c.length || a.h.h || (a.o = 1, I(16), d = false);
  a.i = a.i && d;
  d ? 0 < c.length && !a.$ && (a.$ = true, b2 = a.l, b2.g == a && b2.$ && !b2.K && (b2.j.info("Great, no buffering proxy detected. Bytes received: " + c.length), oc(b2), b2.K = true, I(11))) : (E(
    a.j,
    a.m,
    c,
    "[Invalid Chunked Response]"
  ), P(a), Q(a));
}
k.hb = function() {
  if (this.g) {
    var a = O(this.g), b2 = this.g.fa();
    this.C < b2.length && (ic(this), lc(this, a, b2), this.i && 4 != a && N(this));
  }
};
function nc(a, b2) {
  var c = a.C, d = b2.indexOf("\n", c);
  if (-1 == d)
    return bc;
  c = Number(b2.substring(c, d));
  if (isNaN(c))
    return ac;
  d += 1;
  if (d + c > b2.length)
    return bc;
  b2 = b2.substr(d, c);
  a.C = d + c;
  return b2;
}
k.cancel = function() {
  this.I = true;
  P(this);
};
function N(a) {
  a.V = Date.now() + a.O;
  pc(a, a.O);
}
function pc(a, b2) {
  if (null != a.B)
    throw Error("WatchDog timer not null");
  a.B = J(q(a.gb, a), b2);
}
function ic(a) {
  a.B && (l.clearTimeout(a.B), a.B = null);
}
k.gb = function() {
  this.B = null;
  const a = Date.now();
  0 <= a - this.V ? (Kb(this.j, this.A), 2 != this.K && (H(), I(17)), P(this), this.o = 2, Q(this)) : pc(this, this.V - a);
};
function Q(a) {
  0 == a.l.G || a.I || mc(a.l, a);
}
function P(a) {
  ic(a);
  var b2 = a.L;
  b2 && "function" == typeof b2.na && b2.na();
  a.L = null;
  zb(a.T);
  Fb(a.S);
  a.g && (b2 = a.g, a.g = null, b2.abort(), b2.na());
}
function kc(a, b2) {
  try {
    var c = a.l;
    if (0 != c.G && (c.g == a || qc(c.h, a))) {
      if (!a.J && qc(c.h, a) && 3 == c.G) {
        try {
          var d = c.Fa.g.parse(b2);
        } catch (m) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0])
            a: {
              if (!c.u) {
                if (c.g)
                  if (c.g.F + 3e3 < a.F)
                    rc(c), sc(c);
                  else
                    break a;
                tc(c);
                I(18);
              }
            }
          else
            c.Ba = e[1], 0 < c.Ba - c.T && 37500 > e[2] && c.L && 0 == c.A && !c.v && (c.v = J(q(c.cb, c), 6e3));
          if (1 >= uc(c.h) && c.ja) {
            try {
              c.ja();
            } catch (m) {
            }
            c.ja = void 0;
          }
        } else
          R(c, 11);
      } else if ((a.J || c.g == a) && rc(c), !pa(b2))
        for (e = c.Fa.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
          let m = e[b2];
          c.T = m[0];
          m = m[1];
          if (2 == c.G)
            if ("c" == m[0]) {
              c.I = m[1];
              c.ka = m[2];
              const r = m[3];
              null != r && (c.ma = r, c.j.info("VER=" + c.ma));
              const F2 = m[4];
              null != F2 && (c.Ca = F2, c.j.info("SVER=" + c.Ca));
              const Ca2 = m[5];
              null != Ca2 && "number" === typeof Ca2 && 0 < Ca2 && (d = 1.5 * Ca2, c.J = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const Z2 = a.g;
              if (Z2) {
                const Da2 = Z2.g ? Z2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (Da2) {
                  var f = d.h;
                  f.g || -1 == Da2.indexOf("spdy") && -1 == Da2.indexOf("quic") && -1 == Da2.indexOf("h2") || (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (vc(f, f.h), f.h = null));
                }
                if (d.D) {
                  const tb = Z2.g ? Z2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  tb && (d.za = tb, S(d.F, d.D, tb));
                }
              }
              c.G = 3;
              c.l && c.l.xa();
              c.$ && (c.P = Date.now() - a.F, c.j.info("Handshake RTT: " + c.P + "ms"));
              d = c;
              var h = a;
              d.sa = wc(d, d.H ? d.ka : null, d.V);
              if (h.J) {
                xc(d.h, h);
                var n = h, u = d.J;
                u && n.setTimeout(u);
                n.B && (ic(n), N(n));
                d.g = h;
              } else
                yc(d);
              0 < c.i.length && zc(c);
            } else
              "stop" != m[0] && "close" != m[0] || R(c, 7);
          else
            3 == c.G && ("stop" == m[0] || "close" == m[0] ? "stop" == m[0] ? R(c, 7) : Ac(c) : "noop" != m[0] && c.l && c.l.wa(m), c.A = 0);
        }
    }
    H(4);
  } catch (m) {
  }
}
function Bc(a) {
  if (a.W && "function" == typeof a.W)
    return a.W();
  if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
    return Array.from(a.values());
  if ("string" === typeof a)
    return a.split("");
  if (ba(a)) {
    for (var b2 = [], c = a.length, d = 0; d < c; d++)
      b2.push(a[d]);
    return b2;
  }
  b2 = [];
  c = 0;
  for (d in a)
    b2[c++] = a[d];
  return b2;
}
function Cc(a) {
  if (a.oa && "function" == typeof a.oa)
    return a.oa();
  if (!a.W || "function" != typeof a.W) {
    if ("undefined" !== typeof Map && a instanceof Map)
      return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (ba(a) || "string" === typeof a) {
        var b2 = [];
        a = a.length;
        for (var c = 0; c < a; c++)
          b2.push(c);
        return b2;
      }
      b2 = [];
      c = 0;
      for (const d in a)
        b2[c++] = d;
      return b2;
    }
  }
}
function Dc(a, b2) {
  if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b2, void 0);
  else if (ba(a) || "string" === typeof a)
    Array.prototype.forEach.call(a, b2, void 0);
  else
    for (var c = Cc(a), d = Bc(a), e = d.length, f = 0; f < e; f++)
      b2.call(void 0, d[f], c && c[f], a);
}
var Ec = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Fc(a, b2) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function T(a, b2) {
  this.g = this.s = this.j = "";
  this.m = null;
  this.o = this.l = "";
  this.h = false;
  if (a instanceof T) {
    this.h = void 0 !== b2 ? b2 : a.h;
    Gc(this, a.j);
    this.s = a.s;
    this.g = a.g;
    Hc(this, a.m);
    this.l = a.l;
    b2 = a.i;
    var c = new Ic();
    c.i = b2.i;
    b2.g && (c.g = new Map(b2.g), c.h = b2.h);
    Jc(this, c);
    this.o = a.o;
  } else
    a && (c = String(a).match(Ec)) ? (this.h = !!b2, Gc(this, c[1] || "", true), this.s = Kc(c[2] || ""), this.g = Kc(c[3] || "", true), Hc(this, c[4]), this.l = Kc(c[5] || "", true), Jc(this, c[6] || "", true), this.o = Kc(c[7] || "")) : (this.h = !!b2, this.i = new Ic(null, this.h));
}
T.prototype.toString = function() {
  var a = [], b2 = this.j;
  b2 && a.push(Lc(b2, Mc, true), ":");
  var c = this.g;
  if (c || "file" == b2)
    a.push("//"), (b2 = this.s) && a.push(Lc(b2, Mc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  if (c = this.l)
    this.g && "/" != c.charAt(0) && a.push("/"), a.push(Lc(c, "/" == c.charAt(0) ? Nc : Oc, true));
  (c = this.i.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Lc(c, Pc));
  return a.join("");
};
function M(a) {
  return new T(a);
}
function Gc(a, b2, c) {
  a.j = c ? Kc(b2, true) : b2;
  a.j && (a.j = a.j.replace(/:$/, ""));
}
function Hc(a, b2) {
  if (b2) {
    b2 = Number(b2);
    if (isNaN(b2) || 0 > b2)
      throw Error("Bad port number " + b2);
    a.m = b2;
  } else
    a.m = null;
}
function Jc(a, b2, c) {
  b2 instanceof Ic ? (a.i = b2, Qc(a.i, a.h)) : (c || (b2 = Lc(b2, Rc)), a.i = new Ic(b2, a.h));
}
function S(a, b2, c) {
  a.i.set(b2, c);
}
function dc(a) {
  S(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return a;
}
function Kc(a, b2) {
  return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Lc(a, b2, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b2, Sc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Sc(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Mc = /[#\/\?@]/g;
var Oc = /[#\?:]/g;
var Nc = /[#\?]/g;
var Rc = /[#\?@]/g;
var Pc = /#/g;
function Ic(a, b2) {
  this.h = this.g = null;
  this.i = a || null;
  this.j = !!b2;
}
function U(a) {
  a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && Fc(a.i, function(b2, c) {
    a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
  }));
}
k = Ic.prototype;
k.add = function(a, b2) {
  U(this);
  this.i = null;
  a = V(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, c = []);
  c.push(b2);
  this.h += 1;
  return this;
};
function Tc(a, b2) {
  U(a);
  b2 = V(a, b2);
  a.g.has(b2) && (a.i = null, a.h -= a.g.get(b2).length, a.g.delete(b2));
}
function Uc(a, b2) {
  U(a);
  b2 = V(a, b2);
  return a.g.has(b2);
}
k.forEach = function(a, b2) {
  U(this);
  this.g.forEach(function(c, d) {
    c.forEach(function(e) {
      a.call(b2, e, d, this);
    }, this);
  }, this);
};
k.oa = function() {
  U(this);
  const a = Array.from(this.g.values()), b2 = Array.from(this.g.keys()), c = [];
  for (let d = 0; d < b2.length; d++) {
    const e = a[d];
    for (let f = 0; f < e.length; f++)
      c.push(b2[d]);
  }
  return c;
};
k.W = function(a) {
  U(this);
  let b2 = [];
  if ("string" === typeof a)
    Uc(this, a) && (b2 = b2.concat(this.g.get(V(this, a))));
  else {
    a = Array.from(this.g.values());
    for (let c = 0; c < a.length; c++)
      b2 = b2.concat(a[c]);
  }
  return b2;
};
k.set = function(a, b2) {
  U(this);
  this.i = null;
  a = V(this, a);
  Uc(this, a) && (this.h -= this.g.get(a).length);
  this.g.set(a, [b2]);
  this.h += 1;
  return this;
};
k.get = function(a, b2) {
  if (!a)
    return b2;
  a = this.W(a);
  return 0 < a.length ? String(a[0]) : b2;
};
function fc(a, b2, c) {
  Tc(a, b2);
  0 < c.length && (a.i = null, a.g.set(V(a, b2), ma(c)), a.h += c.length);
}
k.toString = function() {
  if (this.i)
    return this.i;
  if (!this.g)
    return "";
  const a = [], b2 = Array.from(this.g.keys());
  for (var c = 0; c < b2.length; c++) {
    var d = b2[c];
    const f = encodeURIComponent(String(d)), h = this.W(d);
    for (d = 0; d < h.length; d++) {
      var e = f;
      "" !== h[d] && (e += "=" + encodeURIComponent(String(h[d])));
      a.push(e);
    }
  }
  return this.i = a.join("&");
};
function V(a, b2) {
  b2 = String(b2);
  a.j && (b2 = b2.toLowerCase());
  return b2;
}
function Qc(a, b2) {
  b2 && !a.j && (U(a), a.i = null, a.g.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (Tc(this, d), fc(this, e, c));
  }, a));
  a.j = b2;
}
var Vc = class {
  constructor(a, b2) {
    this.h = a;
    this.g = b2;
  }
};
function Wc(a) {
  this.l = a || Xc;
  l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ga && l.g.Ga() && l.g.Ga().$b);
  this.j = a ? this.l : 1;
  this.g = null;
  1 < this.j && (this.g = /* @__PURE__ */ new Set());
  this.h = null;
  this.i = [];
}
var Xc = 10;
function Yc(a) {
  return a.h ? true : a.g ? a.g.size >= a.j : false;
}
function uc(a) {
  return a.h ? 1 : a.g ? a.g.size : 0;
}
function qc(a, b2) {
  return a.h ? a.h == b2 : a.g ? a.g.has(b2) : false;
}
function vc(a, b2) {
  a.g ? a.g.add(b2) : a.h = b2;
}
function xc(a, b2) {
  a.h && a.h == b2 ? a.h = null : a.g && a.g.has(b2) && a.g.delete(b2);
}
Wc.prototype.cancel = function() {
  this.i = Zc(this);
  if (this.h)
    this.h.cancel(), this.h = null;
  else if (this.g && 0 !== this.g.size) {
    for (const a of this.g.values())
      a.cancel();
    this.g.clear();
  }
};
function Zc(a) {
  if (null != a.h)
    return a.i.concat(a.h.D);
  if (null != a.g && 0 !== a.g.size) {
    let b2 = a.i;
    for (const c of a.g.values())
      b2 = b2.concat(c.D);
    return b2;
  }
  return ma(a.i);
}
function $c() {
}
$c.prototype.stringify = function(a) {
  return l.JSON.stringify(a, void 0);
};
$c.prototype.parse = function(a) {
  return l.JSON.parse(a, void 0);
};
function ad() {
  this.g = new $c();
}
function bd(a, b2, c) {
  const d = c || "";
  try {
    Dc(a, function(e, f) {
      let h = e;
      p(e) && (h = lb(e));
      b2.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function cd(a, b2) {
  const c = new Gb();
  if (l.Image) {
    const d = new Image();
    d.onload = ia(dd, c, d, "TestLoadImage: loaded", true, b2);
    d.onerror = ia(dd, c, d, "TestLoadImage: error", false, b2);
    d.onabort = ia(dd, c, d, "TestLoadImage: abort", false, b2);
    d.ontimeout = ia(dd, c, d, "TestLoadImage: timeout", false, b2);
    l.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b2(false);
}
function dd(a, b2, c, d, e) {
  try {
    b2.onload = null, b2.onerror = null, b2.onabort = null, b2.ontimeout = null, e(d);
  } catch (f) {
  }
}
function ed(a) {
  this.l = a.ac || null;
  this.j = a.jb || false;
}
t(ed, Sb);
ed.prototype.g = function() {
  return new fd(this.l, this.j);
};
ed.prototype.i = function(a) {
  return function() {
    return a;
  };
}({});
function fd(a, b2) {
  B.call(this);
  this.D = a;
  this.u = b2;
  this.m = void 0;
  this.readyState = gd;
  this.status = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.v = new Headers();
  this.h = null;
  this.C = "GET";
  this.B = "";
  this.g = false;
  this.A = this.j = this.l = null;
}
t(fd, B);
var gd = 0;
k = fd.prototype;
k.open = function(a, b2) {
  if (this.readyState != gd)
    throw this.abort(), Error("Error reopening a connection");
  this.C = a;
  this.B = b2;
  this.readyState = 1;
  hd(this);
};
k.send = function(a) {
  if (1 != this.readyState)
    throw this.abort(), Error("need to call open() first. ");
  this.g = true;
  const b2 = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  a && (b2.body = a);
  (this.D || l).fetch(new Request(this.B, b2)).then(this.Wa.bind(this), this.ga.bind(this));
};
k.abort = function() {
  this.response = this.responseText = "";
  this.v = new Headers();
  this.status = 0;
  this.j && this.j.cancel("Request was aborted.").catch(() => {
  });
  1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, id(this));
  this.readyState = gd;
};
k.Wa = function(a) {
  if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, hd(this)), this.g && (this.readyState = 3, hd(this), this.g)))
    if ("arraybuffer" === this.responseType)
      a.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
      this.j = a.body.getReader();
      if (this.u) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else
        this.response = this.responseText = "", this.A = new TextDecoder();
      jd(this);
    } else
      a.text().then(this.Va.bind(this), this.ga.bind(this));
};
function jd(a) {
  a.j.read().then(a.Ta.bind(a)).catch(a.ga.bind(a));
}
k.Ta = function(a) {
  if (this.g) {
    if (this.u && a.value)
      this.response.push(a.value);
    else if (!this.u) {
      var b2 = a.value ? a.value : new Uint8Array(0);
      if (b2 = this.A.decode(b2, { stream: !a.done }))
        this.response = this.responseText += b2;
    }
    a.done ? id(this) : hd(this);
    3 == this.readyState && jd(this);
  }
};
k.Va = function(a) {
  this.g && (this.response = this.responseText = a, id(this));
};
k.Ua = function(a) {
  this.g && (this.response = a, id(this));
};
k.ga = function() {
  this.g && id(this);
};
function id(a) {
  a.readyState = 4;
  a.l = null;
  a.j = null;
  a.A = null;
  hd(a);
}
k.setRequestHeader = function(a, b2) {
  this.v.append(a, b2);
};
k.getResponseHeader = function(a) {
  return this.h ? this.h.get(a.toLowerCase()) || "" : "";
};
k.getAllResponseHeaders = function() {
  if (!this.h)
    return "";
  const a = [], b2 = this.h.entries();
  for (var c = b2.next(); !c.done; )
    c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
  return a.join("\r\n");
};
function hd(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(fd.prototype, "withCredentials", { get: function() {
  return "include" === this.m;
}, set: function(a) {
  this.m = a ? "include" : "same-origin";
} });
var kd = l.JSON.parse;
function W(a) {
  B.call(this);
  this.headers = /* @__PURE__ */ new Map();
  this.u = a || null;
  this.h = false;
  this.C = this.g = null;
  this.H = "";
  this.m = 0;
  this.j = "";
  this.l = this.F = this.v = this.D = false;
  this.B = 0;
  this.A = null;
  this.J = ld;
  this.K = this.L = false;
}
t(W, B);
var ld = "";
var md = /^https?$/i;
var nd = ["POST", "PUT"];
k = W.prototype;
k.Ka = function(a) {
  this.L = a;
};
k.da = function(a, b2, c, d) {
  if (this.g)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
  b2 = b2 ? b2.toUpperCase() : "GET";
  this.H = a;
  this.j = "";
  this.m = 0;
  this.D = false;
  this.h = true;
  this.g = this.u ? this.u.g() : Xb.g();
  this.C = this.u ? Tb(this.u) : Tb(Xb);
  this.g.onreadystatechange = q(this.Ha, this);
  try {
    this.F = true, this.g.open(b2, String(a), true), this.F = false;
  } catch (f) {
    od(this, f);
    return;
  }
  a = c || "";
  c = new Map(this.headers);
  if (d)
    if (Object.getPrototypeOf(d) === Object.prototype)
      for (var e in d)
        c.set(e, d[e]);
    else if ("function" === typeof d.keys && "function" === typeof d.get)
      for (const f of d.keys())
        c.set(f, d.get(f));
    else
      throw Error("Unknown input type for opt_headers: " + String(d));
  d = Array.from(c.keys()).find((f) => "content-type" == f.toLowerCase());
  e = l.FormData && a instanceof l.FormData;
  !(0 <= la(nd, b2)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [f, h] of c)
    this.g.setRequestHeader(f, h);
  this.J && (this.g.responseType = this.J);
  "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
  try {
    pd(this), 0 < this.B && ((this.K = qd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.qa, this)) : this.A = Ab(this.qa, this.B, this)), this.v = true, this.g.send(a), this.v = false;
  } catch (f) {
    od(this, f);
  }
};
function qd(a) {
  return y && Ia() && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
k.qa = function() {
  "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, C(this, "timeout"), this.abort(8));
};
function od(a, b2) {
  a.h = false;
  a.g && (a.l = true, a.g.abort(), a.l = false);
  a.j = b2;
  a.m = 5;
  rd(a);
  sd(a);
}
function rd(a) {
  a.D || (a.D = true, C(a, "complete"), C(a, "error"));
}
k.abort = function(a) {
  this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, C(this, "complete"), C(this, "abort"), sd(this));
};
k.M = function() {
  this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), sd(this, true));
  W.X.M.call(this);
};
k.Ha = function() {
  this.s || (this.F || this.v || this.l ? td(this) : this.fb());
};
k.fb = function() {
  td(this);
};
function td(a) {
  if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != O(a) || 2 != a.aa())) {
    if (a.v && 4 == O(a))
      Ab(a.Ha, 0, a);
    else if (C(a, "readystatechange"), 4 == O(a)) {
      a.h = false;
      try {
        const n = a.aa();
        a:
          switch (n) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b2 = true;
              break a;
            default:
              b2 = false;
          }
        var c;
        if (!(c = b2)) {
          var d;
          if (d = 0 === n) {
            var e = String(a.H).match(Ec)[1] || null;
            if (!e && l.self && l.self.location) {
              var f = l.self.location.protocol;
              e = f.substr(0, f.length - 1);
            }
            d = !md.test(e ? e.toLowerCase() : "");
          }
          c = d;
        }
        if (c)
          C(a, "complete"), C(
            a,
            "success"
          );
        else {
          a.m = 6;
          try {
            var h = 2 < O(a) ? a.g.statusText : "";
          } catch (u) {
            h = "";
          }
          a.j = h + " [" + a.aa() + "]";
          rd(a);
        }
      } finally {
        sd(a);
      }
    }
  }
}
function sd(a, b2) {
  if (a.g) {
    pd(a);
    const c = a.g, d = a.C[0] ? aa : null;
    a.g = null;
    a.C = null;
    b2 || C(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function pd(a) {
  a.g && a.K && (a.g.ontimeout = null);
  a.A && (l.clearTimeout(a.A), a.A = null);
}
function O(a) {
  return a.g ? a.g.readyState : 0;
}
k.aa = function() {
  try {
    return 2 < O(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
k.fa = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch (a) {
    return "";
  }
};
k.Sa = function(a) {
  if (this.g) {
    var b2 = this.g.responseText;
    a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
    return kd(b2);
  }
};
function hc(a) {
  try {
    if (!a.g)
      return null;
    if ("response" in a.g)
      return a.g.response;
    switch (a.J) {
      case ld:
      case "text":
        return a.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.g)
          return a.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (b2) {
    return null;
  }
}
k.Ea = function() {
  return this.m;
};
k.Oa = function() {
  return "string" === typeof this.j ? this.j : String(this.j);
};
function ud(a) {
  let b2 = "";
  Qa(a, function(c, d) {
    b2 += d;
    b2 += ":";
    b2 += c;
    b2 += "\r\n";
  });
  return b2;
}
function vd(a, b2, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = ud(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : S(a, b2, c));
}
function wd(a, b2, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
}
function xd(a) {
  this.Ca = 0;
  this.i = [];
  this.j = new Gb();
  this.ka = this.sa = this.F = this.V = this.g = this.za = this.D = this.ia = this.o = this.S = this.s = null;
  this.ab = this.U = 0;
  this.Za = wd("failFast", false, a);
  this.L = this.v = this.u = this.m = this.l = null;
  this.Y = true;
  this.pa = this.Ba = this.T = -1;
  this.Z = this.A = this.C = 0;
  this.Xa = wd("baseRetryDelayMs", 5e3, a);
  this.bb = wd("retryDelaySeedMs", 1e4, a);
  this.$a = wd("forwardChannelMaxRetries", 2, a);
  this.ta = wd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.ra = a && a.xmlHttpFactory || void 0;
  this.Da = a && a.Zb || false;
  this.J = void 0;
  this.H = a && a.supportsCrossDomainXhr || false;
  this.I = "";
  this.h = new Wc(a && a.concurrentRequestLimit);
  this.Fa = new ad();
  this.O = a && a.fastHandshake || false;
  this.N = a && a.encodeInitMessageHeaders || false;
  this.O && this.N && (this.N = false);
  this.Ya = a && a.Xb || false;
  a && a.Aa && this.j.Aa();
  a && a.forceLongPolling && (this.Y = false);
  this.$ = !this.O && this.Y && a && a.detectBufferingProxy || false;
  this.ja = void 0;
  this.P = 0;
  this.K = false;
  this.la = this.B = null;
}
k = xd.prototype;
k.ma = 8;
k.G = 1;
function Ac(a) {
  yd(a);
  if (3 == a.G) {
    var b2 = a.U++, c = M(a.F);
    S(c, "SID", a.I);
    S(c, "RID", b2);
    S(c, "TYPE", "terminate");
    zd(a, c);
    b2 = new L(a, a.j, b2, void 0);
    b2.K = 2;
    b2.v = dc(M(c));
    c = false;
    l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b2.v.toString(), ""));
    !c && l.Image && (new Image().src = b2.v, c = true);
    c || (b2.g = gc(b2.l, null), b2.g.da(b2.v));
    b2.F = Date.now();
    N(b2);
  }
  Ad(a);
}
function sc(a) {
  a.g && (oc(a), a.g.cancel(), a.g = null);
}
function yd(a) {
  sc(a);
  a.u && (l.clearTimeout(a.u), a.u = null);
  rc(a);
  a.h.cancel();
  a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null);
}
function zc(a) {
  Yc(a.h) || a.m || (a.m = true, sb(a.Ja, a), a.C = 0);
}
function Bd(a, b2) {
  if (uc(a.h) >= a.h.j - (a.m ? 1 : 0))
    return false;
  if (a.m)
    return a.i = b2.D.concat(a.i), true;
  if (1 == a.G || 2 == a.G || a.C >= (a.Za ? 0 : a.$a))
    return false;
  a.m = J(q(a.Ja, a, b2), Cd(a, a.C));
  a.C++;
  return true;
}
k.Ja = function(a) {
  if (this.m)
    if (this.m = null, 1 == this.G) {
      if (!a) {
        this.U = Math.floor(1e5 * Math.random());
        a = this.U++;
        const e = new L(this, this.j, a, void 0);
        let f = this.s;
        this.S && (f ? (f = Ra(f), Ta(f, this.S)) : f = this.S);
        null !== this.o || this.N || (e.H = f, f = null);
        if (this.O)
          a: {
            var b2 = 0;
            for (var c = 0; c < this.i.length; c++) {
              b: {
                var d = this.i[c];
                if ("__data__" in d.g && (d = d.g.__data__, "string" === typeof d)) {
                  d = d.length;
                  break b;
                }
                d = void 0;
              }
              if (void 0 === d)
                break;
              b2 += d;
              if (4096 < b2) {
                b2 = c;
                break a;
              }
              if (4096 === b2 || c === this.i.length - 1) {
                b2 = c + 1;
                break a;
              }
            }
            b2 = 1e3;
          }
        else
          b2 = 1e3;
        b2 = Dd(this, e, b2);
        c = M(this.F);
        S(c, "RID", a);
        S(c, "CVER", 22);
        this.D && S(c, "X-HTTP-Session-Id", this.D);
        zd(this, c);
        f && (this.N ? b2 = "headers=" + encodeURIComponent(String(ud(f))) + "&" + b2 : this.o && vd(c, this.o, f));
        vc(this.h, e);
        this.Ya && S(c, "TYPE", "init");
        this.O ? (S(c, "$req", b2), S(c, "SID", "null"), e.Z = true, cc(e, c, null)) : cc(e, c, b2);
        this.G = 2;
      }
    } else
      3 == this.G && (a ? Ed(this, a) : 0 == this.i.length || Yc(this.h) || Ed(this));
};
function Ed(a, b2) {
  var c;
  b2 ? c = b2.m : c = a.U++;
  const d = M(a.F);
  S(d, "SID", a.I);
  S(d, "RID", c);
  S(d, "AID", a.T);
  zd(a, d);
  a.o && a.s && vd(d, a.o, a.s);
  c = new L(a, a.j, c, a.C + 1);
  null === a.o && (c.H = a.s);
  b2 && (a.i = b2.D.concat(a.i));
  b2 = Dd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ta) + Math.round(0.5 * a.ta * Math.random()));
  vc(a.h, c);
  cc(c, d, b2);
}
function zd(a, b2) {
  a.ia && Qa(a.ia, function(c, d) {
    S(b2, d, c);
  });
  a.l && Dc({}, function(c, d) {
    S(b2, d, c);
  });
}
function Dd(a, b2, c) {
  c = Math.min(a.i.length, c);
  var d = a.l ? q(a.l.Ra, a.l, a) : null;
  a: {
    var e = a.i;
    let f = -1;
    for (; ; ) {
      const h = ["count=" + c];
      -1 == f ? 0 < c ? (f = e[0].h, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
      let n = true;
      for (let u = 0; u < c; u++) {
        let m = e[u].h;
        const r = e[u].g;
        m -= f;
        if (0 > m)
          f = Math.max(0, e[u].h - 100), n = false;
        else
          try {
            bd(r, h, "req" + m + "_");
          } catch (F2) {
            d && d(r);
          }
      }
      if (n) {
        d = h.join("&");
        break a;
      }
    }
  }
  a = a.i.splice(0, c);
  b2.D = a;
  return d;
}
function yc(a) {
  a.g || a.u || (a.Z = 1, sb(a.Ia, a), a.A = 0);
}
function tc(a) {
  if (a.g || a.u || 3 <= a.A)
    return false;
  a.Z++;
  a.u = J(q(a.Ia, a), Cd(a, a.A));
  a.A++;
  return true;
}
k.Ia = function() {
  this.u = null;
  Fd(this);
  if (this.$ && !(this.K || null == this.g || 0 >= this.P)) {
    var a = 2 * this.P;
    this.j.info("BP detection timer enabled: " + a);
    this.B = J(q(this.eb, this), a);
  }
};
k.eb = function() {
  this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.L = false, this.K = true, I(10), sc(this), Fd(this));
};
function oc(a) {
  null != a.B && (l.clearTimeout(a.B), a.B = null);
}
function Fd(a) {
  a.g = new L(a, a.j, "rpc", a.Z);
  null === a.o && (a.g.H = a.s);
  a.g.N = 0;
  var b2 = M(a.sa);
  S(b2, "RID", "rpc");
  S(b2, "SID", a.I);
  S(b2, "CI", a.L ? "0" : "1");
  S(b2, "AID", a.T);
  S(b2, "TYPE", "xmlhttp");
  zd(a, b2);
  a.o && a.s && vd(b2, a.o, a.s);
  a.J && a.g.setTimeout(a.J);
  var c = a.g;
  a = a.ka;
  c.K = 1;
  c.v = dc(M(b2));
  c.s = null;
  c.P = true;
  ec(c, a);
}
k.cb = function() {
  null != this.v && (this.v = null, sc(this), tc(this), I(19));
};
function rc(a) {
  null != a.v && (l.clearTimeout(a.v), a.v = null);
}
function mc(a, b2) {
  var c = null;
  if (a.g == b2) {
    rc(a);
    oc(a);
    a.g = null;
    var d = 2;
  } else if (qc(a.h, b2))
    c = b2.D, xc(a.h, b2), d = 1;
  else
    return;
  if (0 != a.G) {
    if (a.pa = b2.Y, b2.i)
      if (1 == d) {
        c = b2.s ? b2.s.length : 0;
        b2 = Date.now() - b2.F;
        var e = a.C;
        d = Mb();
        C(d, new Pb(d, c));
        zc(a);
      } else
        yc(a);
    else if (e = b2.o, 3 == e || 0 == e && 0 < a.pa || !(1 == d && Bd(a, b2) || 2 == d && tc(a)))
      switch (c && 0 < c.length && (b2 = a.h, b2.i = b2.i.concat(c)), e) {
        case 1:
          R(a, 5);
          break;
        case 4:
          R(a, 10);
          break;
        case 3:
          R(a, 6);
          break;
        default:
          R(a, 2);
      }
  }
}
function Cd(a, b2) {
  let c = a.Xa + Math.floor(Math.random() * a.bb);
  a.l || (c *= 2);
  return c * b2;
}
function R(a, b2) {
  a.j.info("Error code " + b2);
  if (2 == b2) {
    var c = null;
    a.l && (c = null);
    var d = q(a.kb, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Gc(c, "https"), dc(c));
    cd(c.toString(), d);
  } else
    I(2);
  a.G = 0;
  a.l && a.l.va(b2);
  Ad(a);
  yd(a);
}
k.kb = function(a) {
  a ? (this.j.info("Successfully pinged google.com"), I(2)) : (this.j.info("Failed to ping google.com"), I(1));
};
function Ad(a) {
  a.G = 0;
  a.la = [];
  if (a.l) {
    const b2 = Zc(a.h);
    if (0 != b2.length || 0 != a.i.length)
      na(a.la, b2), na(a.la, a.i), a.h.i.length = 0, ma(a.i), a.i.length = 0;
    a.l.ua();
  }
}
function wc(a, b2, c) {
  var d = c instanceof T ? M(c) : new T(c, void 0);
  if ("" != d.g)
    b2 && (d.g = b2 + "." + d.g), Hc(d, d.m);
  else {
    var e = l.location;
    d = e.protocol;
    b2 = b2 ? b2 + "." + e.hostname : e.hostname;
    e = +e.port;
    var f = new T(null, void 0);
    d && Gc(f, d);
    b2 && (f.g = b2);
    e && Hc(f, e);
    c && (f.l = c);
    d = f;
  }
  c = a.D;
  b2 = a.za;
  c && b2 && S(d, c, b2);
  S(d, "VER", a.ma);
  zd(a, d);
  return d;
}
function gc(a, b2, c) {
  if (b2 && !a.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b2 = c && a.Da && !a.ra ? new W(new ed({ jb: true })) : new W(a.ra);
  b2.Ka(a.H);
  return b2;
}
function Gd() {
}
k = Gd.prototype;
k.xa = function() {
};
k.wa = function() {
};
k.va = function() {
};
k.ua = function() {
};
k.Ra = function() {
};
function Hd() {
  if (y && !(10 <= Number(La)))
    throw Error("Environmental error: no available transport.");
}
Hd.prototype.g = function(a, b2) {
  return new X(a, b2);
};
function X(a, b2) {
  B.call(this);
  this.g = new xd(b2);
  this.l = a;
  this.h = b2 && b2.messageUrlParams || null;
  a = b2 && b2.messageHeaders || null;
  b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.g.s = a;
  a = b2 && b2.initMessageHeaders || null;
  b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = { "X-WebChannel-Content-Type": b2.messageContentType });
  b2 && b2.ya && (a ? a["X-WebChannel-Client-Profile"] = b2.ya : a = { "X-WebChannel-Client-Profile": b2.ya });
  this.g.S = a;
  (a = b2 && b2.Yb) && !pa(a) && (this.g.o = a);
  this.A = b2 && b2.supportsCrossDomainXhr || false;
  this.v = b2 && b2.sendRawJson || false;
  (b2 = b2 && b2.httpSessionIdParam) && !pa(b2) && (this.g.D = b2, a = this.h, null !== a && b2 in a && (a = this.h, b2 in a && delete a[b2]));
  this.j = new Y(this);
}
t(X, B);
X.prototype.m = function() {
  this.g.l = this.j;
  this.A && (this.g.H = true);
  var a = this.g, b2 = this.l, c = this.h || void 0;
  I(0);
  a.V = b2;
  a.ia = c || {};
  a.L = a.Y;
  a.F = wc(a, null, a.V);
  zc(a);
};
X.prototype.close = function() {
  Ac(this.g);
};
X.prototype.u = function(a) {
  var b2 = this.g;
  if ("string" === typeof a) {
    var c = {};
    c.__data__ = a;
    a = c;
  } else
    this.v && (c = {}, c.__data__ = lb(a), a = c);
  b2.i.push(new Vc(b2.ab++, a));
  3 == b2.G && zc(b2);
};
X.prototype.M = function() {
  this.g.l = null;
  delete this.j;
  Ac(this.g);
  delete this.g;
  X.X.M.call(this);
};
function Id(a) {
  Vb.call(this);
  var b2 = a.__sm__;
  if (b2) {
    a: {
      for (const c in b2) {
        a = c;
        break a;
      }
      a = void 0;
    }
    if (this.i = a)
      a = this.i, b2 = null !== b2 && a in b2 ? b2[a] : void 0;
    this.data = b2;
  } else
    this.data = a;
}
t(Id, Vb);
function Jd() {
  Wb.call(this);
  this.status = 1;
}
t(Jd, Wb);
function Y(a) {
  this.g = a;
}
t(Y, Gd);
Y.prototype.xa = function() {
  C(this.g, "a");
};
Y.prototype.wa = function(a) {
  C(this.g, new Id(a));
};
Y.prototype.va = function(a) {
  C(this.g, new Jd());
};
Y.prototype.ua = function() {
  C(this.g, "b");
};
Hd.prototype.createWebChannel = Hd.prototype.g;
X.prototype.send = X.prototype.u;
X.prototype.open = X.prototype.m;
X.prototype.close = X.prototype.close;
Qb.NO_ERROR = 0;
Qb.TIMEOUT = 8;
Qb.HTTP_ERROR = 6;
Rb.COMPLETE = "complete";
Ub.EventType = K;
K.OPEN = "a";
K.CLOSE = "b";
K.ERROR = "c";
K.MESSAGE = "d";
B.prototype.listen = B.prototype.N;
W.prototype.listenOnce = W.prototype.O;
W.prototype.getLastError = W.prototype.Oa;
W.prototype.getLastErrorCode = W.prototype.Ea;
W.prototype.getStatus = W.prototype.aa;
W.prototype.getResponseJson = W.prototype.Sa;
W.prototype.getResponseText = W.prototype.fa;
W.prototype.send = W.prototype.da;
W.prototype.setWithCredentials = W.prototype.Ka;
var createWebChannelTransport = esm.createWebChannelTransport = function() {
  return new Hd();
};
var getStatEventTarget = esm.getStatEventTarget = function() {
  return Mb();
};
var ErrorCode = esm.ErrorCode = Qb;
var EventType = esm.EventType = Rb;
var Event = esm.Event = G;
var Stat = esm.Stat = { sb: 0, vb: 1, wb: 2, Pb: 3, Ub: 4, Rb: 5, Sb: 6, Qb: 7, Ob: 8, Tb: 9, PROXY: 10, NOPROXY: 11, Mb: 12, Ib: 13, Jb: 14, Hb: 15, Kb: 16, Lb: 17, ob: 18, nb: 19, pb: 20 };
var FetchXmlHttpFactory = esm.FetchXmlHttpFactory = ed;
var WebChannel = esm.WebChannel = Ub;
var XhrIo = esm.XhrIo = W;

// node_modules/@firebase/firestore/dist/index.esm2017.js
var P2 = "@firebase/firestore";
var v2 = class {
  constructor(t2) {
    this.uid = t2;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t2) {
    return t2.uid === this.uid;
  }
};
v2.UNAUTHENTICATED = new v2(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
v2.GOOGLE_CREDENTIALS = new v2("google-credentials-uid"), v2.FIRST_PARTY = new v2("first-party-uid"), v2.MOCK_USER = new v2("mock-user");
var b = "9.18.0";
var V2 = new Logger("@firebase/firestore");
function S2() {
  return V2.logLevel;
}
function D2(t2) {
  V2.setLogLevel(t2);
}
function C2(t2, ...e) {
  if (V2.logLevel <= LogLevel.DEBUG) {
    const n = e.map(k2);
    V2.debug(`Firestore (${b}): ${t2}`, ...n);
  }
}
function x2(t2, ...e) {
  if (V2.logLevel <= LogLevel.ERROR) {
    const n = e.map(k2);
    V2.error(`Firestore (${b}): ${t2}`, ...n);
  }
}
function N2(t2, ...e) {
  if (V2.logLevel <= LogLevel.WARN) {
    const n = e.map(k2);
    V2.warn(`Firestore (${b}): ${t2}`, ...n);
  }
}
function k2(t2) {
  if ("string" == typeof t2)
    return t2;
  try {
    return e = t2, JSON.stringify(e);
  } catch (e2) {
    return t2;
  }
  var e;
}
function $(t2 = "Unexpected state") {
  const e = `FIRESTORE (${b}) INTERNAL ASSERTION FAILED: ` + t2;
  throw x2(e), new Error(e);
}
function M2(t2, e) {
  t2 || $();
}
function O2(t2, e) {
  t2 || $();
}
function F(t2, e) {
  return t2;
}
var B2 = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller can not be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
var L2 = class extends FirebaseError {
  /** @hideconstructor */
  constructor(t2, e) {
    super(t2, e), this.code = t2, this.message = e, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var q2 = class {
  constructor() {
    this.promise = new Promise((t2, e) => {
      this.resolve = t2, this.reject = e;
    });
  }
};
var U2 = class {
  constructor(t2, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t2}`);
  }
};
var K2 = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(v2.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var G2 = class {
  constructor(t2) {
    this.token = t2, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t2, e) {
    this.changeListener = e, // Fire with initial user.
    t2.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var Q2 = class {
  constructor(t2) {
    this.t = t2, /** Tracks the current User. */
    this.currentUser = v2.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(t2, e) {
    let n = this.i;
    const s = (t3) => this.i !== n ? (n = this.i, e(t3)) : Promise.resolve();
    let i = new q2();
    this.o = () => {
      this.i++, this.currentUser = this.u(), i.resolve(), i = new q2(), t2.enqueueRetryable(() => s(this.currentUser));
    };
    const r = () => {
      const e2 = i;
      t2.enqueueRetryable(async () => {
        await e2.promise, await s(this.currentUser);
      });
    }, o = (t3) => {
      C2("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t3, this.auth.addAuthTokenListener(this.o), r();
    };
    this.t.onInit((t3) => o(t3)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const t3 = this.t.getImmediate({
          optional: true
        });
        t3 ? o(t3) : (
          // If auth is still not available, proceed with `null` user
          (C2("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new q2())
        );
      }
    }, 0), r();
  }
  getToken() {
    const t2 = this.i, e = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== t2 ? (C2("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (M2("string" == typeof e2.accessToken), new U2(e2.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const t2 = this.auth && this.auth.getUid();
    return M2(null === t2 || "string" == typeof t2), new v2(t2);
  }
};
var j = class {
  constructor(t2, e, n, s) {
    this.h = t2, this.l = e, this.m = n, this.g = s, this.type = "FirstParty", this.user = v2.FIRST_PARTY, this.p = /* @__PURE__ */ new Map();
  }
  /** Gets an authorization token, using a provided factory function, or falling back to First Party GAPI. */
  I() {
    return this.g ? this.g() : (
      // Make sure this really is a Gapi client.
      (M2(!("object" != typeof this.h || null === this.h || !this.h.auth || !this.h.auth.getAuthHeaderValueForFirstParty)), this.h.auth.getAuthHeaderValueForFirstParty([]))
    );
  }
  get headers() {
    this.p.set("X-Goog-AuthUser", this.l);
    const t2 = this.I();
    return t2 && this.p.set("Authorization", t2), this.m && this.p.set("X-Goog-Iam-Authorization-Token", this.m), this.p;
  }
};
var z2 = class {
  constructor(t2, e, n, s) {
    this.h = t2, this.l = e, this.m = n, this.g = s;
  }
  getToken() {
    return Promise.resolve(new j(this.h, this.l, this.m, this.g));
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(v2.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var W2 = class {
  constructor(t2) {
    this.value = t2, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t2 && t2.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var H2 = class {
  constructor(t2) {
    this.T = t2, this.forceRefresh = false, this.appCheck = null, this.A = null;
  }
  start(t2, e) {
    const n = (t3) => {
      null != t3.error && C2("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t3.error.message}`);
      const n2 = t3.token !== this.A;
      return this.A = t3.token, C2("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? e(t3.token) : Promise.resolve();
    };
    this.o = (e2) => {
      t2.enqueueRetryable(() => n(e2));
    };
    const s = (t3) => {
      C2("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t3, this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((t3) => s(t3)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const t3 = this.T.getImmediate({
          optional: true
        });
        t3 ? s(t3) : (
          // If AppCheck is still not available, proceed without it.
          C2("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const t2 = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t2).then((t3) => t3 ? (M2("string" == typeof t3.token), this.A = t3.token, new W2(t3.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
};
var J2 = class {
  getToken() {
    return Promise.resolve(new W2(""));
  }
  invalidateToken() {
  }
  start(t2, e) {
  }
  shutdown() {
  }
};
function Y2(t2) {
  const e = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto)
  ), n = new Uint8Array(t2);
  if (e && "function" == typeof e.getRandomValues)
    e.getRandomValues(n);
  else
    for (let e2 = 0; e2 < t2; e2++)
      n[e2] = Math.floor(256 * Math.random());
  return n;
}
var Z = class {
  static R() {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length;
    let n = "";
    for (; n.length < 20; ) {
      const s = Y2(40);
      for (let i = 0; i < s.length; ++i)
        n.length < 20 && s[i] < e && (n += t2.charAt(s[i] % t2.length));
    }
    return n;
  }
};
function X2(t2, e) {
  return t2 < e ? -1 : t2 > e ? 1 : 0;
}
function tt(t2, e, n) {
  return t2.length === e.length && t2.every((t3, s) => n(t3, e[s]));
}
function et(t2) {
  return t2 + "\0";
}
var nt = class {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(t2, e) {
    if (this.seconds = t2, this.nanoseconds = e, e < 0)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t2 < -62135596800)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    if (t2 >= 253402300800)
      throw new L2(B2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return nt.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(t2) {
    return nt.fromMillis(t2.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(t2) {
    const e = Math.floor(t2 / 1e3), n = Math.floor(1e6 * (t2 - 1e3 * e));
    return new nt(e, n);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t2) {
    return this.seconds === t2.seconds ? X2(this.nanoseconds, t2.nanoseconds) : X2(this.seconds, t2.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(t2) {
    return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const t2 = this.seconds - -62135596800;
    return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
var st = class {
  constructor(t2) {
    this.timestamp = t2;
  }
  static fromTimestamp(t2) {
    return new st(t2);
  }
  static min() {
    return new st(new nt(0, 0));
  }
  static max() {
    return new st(new nt(253402300799, 999999999));
  }
  compareTo(t2) {
    return this.timestamp._compareTo(t2.timestamp);
  }
  isEqual(t2) {
    return this.timestamp.isEqual(t2.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var it = class {
  constructor(t2, e, n) {
    void 0 === e ? e = 0 : e > t2.length && $(), void 0 === n ? n = t2.length - e : n > t2.length - e && $(), this.segments = t2, this.offset = e, this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(t2) {
    return 0 === it.comparator(this, t2);
  }
  child(t2) {
    const e = this.segments.slice(this.offset, this.limit());
    return t2 instanceof it ? t2.forEach((t3) => {
      e.push(t3);
    }) : e.push(t2), this.construct(e);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(t2) {
    return t2 = void 0 === t2 ? 1 : t2, this.construct(this.segments, this.offset + t2, this.length - t2);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t2) {
    return this.segments[this.offset + t2];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t2) {
    if (t2.length < this.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  isImmediateParentOf(t2) {
    if (this.length + 1 !== t2.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  forEach(t2) {
    for (let e = this.offset, n = this.limit(); e < n; e++)
      t2(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t2, e) {
    const n = Math.min(t2.length, e.length);
    for (let s = 0; s < n; s++) {
      const n2 = t2.get(s), i = e.get(s);
      if (n2 < i)
        return -1;
      if (n2 > i)
        return 1;
    }
    return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
  }
};
var rt = class extends it {
  construct(t2, e, n) {
    return new rt(t2, e, n);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...t2) {
    const e = [];
    for (const n of t2) {
      if (n.indexOf("//") >= 0)
        throw new L2(B2.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
      e.push(...n.split("/").filter((t3) => t3.length > 0));
    }
    return new rt(e);
  }
  static emptyPath() {
    return new rt([]);
  }
};
var ot = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var ut = class extends it {
  construct(t2, e, n) {
    return new ut(t2, e, n);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(t2) {
    return ot.test(t2);
  }
  canonicalString() {
    return this.toArray().map((t2) => (t2 = t2.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ut.isValidIdentifier(t2) || (t2 = "`" + t2 + "`"), t2)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new ut(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(t2) {
    const e = [];
    let n = "", s = 0;
    const i = () => {
      if (0 === n.length)
        throw new L2(B2.INVALID_ARGUMENT, `Invalid field path (${t2}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(n), n = "";
    };
    let r = false;
    for (; s < t2.length; ) {
      const e2 = t2[s];
      if ("\\" === e2) {
        if (s + 1 === t2.length)
          throw new L2(B2.INVALID_ARGUMENT, "Path has trailing escape character: " + t2);
        const e3 = t2[s + 1];
        if ("\\" !== e3 && "." !== e3 && "`" !== e3)
          throw new L2(B2.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t2);
        n += e3, s += 2;
      } else
        "`" === e2 ? (r = !r, s++) : "." !== e2 || r ? (n += e2, s++) : (i(), s++);
    }
    if (i(), r)
      throw new L2(B2.INVALID_ARGUMENT, "Unterminated ` in path: " + t2);
    return new ut(e);
  }
  static emptyPath() {
    return new ut([]);
  }
};
var ct = class {
  constructor(t2) {
    this.path = t2;
  }
  static fromPath(t2) {
    return new ct(rt.fromString(t2));
  }
  static fromName(t2) {
    return new ct(rt.fromString(t2).popFirst(5));
  }
  static empty() {
    return new ct(rt.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(t2) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t2) {
    return null !== t2 && 0 === rt.comparator(this.path, t2.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t2, e) {
    return rt.comparator(t2.path, e.path);
  }
  static isDocumentKey(t2) {
    return t2.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(t2) {
    return new ct(new rt(t2.slice()));
  }
};
var at = class {
  constructor(t2, e, n, s) {
    this.indexId = t2, this.collectionGroup = e, this.fields = n, this.indexState = s;
  }
};
function ht(t2) {
  return t2.fields.find((t3) => 2 === t3.kind);
}
function lt(t2) {
  return t2.fields.filter((t3) => 2 !== t3.kind);
}
function ft(t2, e) {
  let n = X2(t2.collectionGroup, e.collectionGroup);
  if (0 !== n)
    return n;
  for (let s = 0; s < Math.min(t2.fields.length, e.fields.length); ++s)
    if (n = _t(t2.fields[s], e.fields[s]), 0 !== n)
      return n;
  return X2(t2.fields.length, e.fields.length);
}
at.UNKNOWN_ID = -1;
var dt = class {
  constructor(t2, e) {
    this.fieldPath = t2, this.kind = e;
  }
};
function _t(t2, e) {
  const n = ut.comparator(t2.fieldPath, e.fieldPath);
  return 0 !== n ? n : X2(t2.kind, e.kind);
}
var wt = class {
  constructor(t2, e) {
    this.sequenceNumber = t2, this.offset = e;
  }
  /** The state of an index that has not yet been backfilled. */
  static empty() {
    return new wt(0, yt.min());
  }
};
function mt(t2, e) {
  const n = t2.toTimestamp().seconds, s = t2.toTimestamp().nanoseconds + 1, i = st.fromTimestamp(1e9 === s ? new nt(n + 1, 0) : new nt(n, s));
  return new yt(i, ct.empty(), e);
}
function gt(t2) {
  return new yt(t2.readTime, t2.key, -1);
}
var yt = class {
  constructor(t2, e, n) {
    this.readTime = t2, this.documentKey = e, this.largestBatchId = n;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new yt(st.min(), ct.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new yt(st.max(), ct.empty(), -1);
  }
};
function pt(t2, e) {
  let n = t2.readTime.compareTo(e.readTime);
  return 0 !== n ? n : (n = ct.comparator(t2.documentKey, e.documentKey), 0 !== n ? n : X2(t2.largestBatchId, e.largestBatchId));
}
var It = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
var Tt = class {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t2) {
    this.onCommittedListeners.push(t2);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t2) => t2());
  }
};
async function Et(t2) {
  if (t2.code !== B2.FAILED_PRECONDITION || t2.message !== It)
    throw t2;
  C2("LocalStore", "Unexpectedly lost primary lease");
}
var At = class {
  constructor(t2) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = false, t2((t3) => {
      this.isDone = true, this.result = t3, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(t3);
    }, (t3) => {
      this.isDone = true, this.error = t3, this.catchCallback && this.catchCallback(t3);
    });
  }
  catch(t2) {
    return this.next(void 0, t2);
  }
  next(t2, e) {
    return this.callbackAttached && $(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t2, this.result) : new At((n, s) => {
      this.nextCallback = (e2) => {
        this.wrapSuccess(t2, e2).next(n, s);
      }, this.catchCallback = (t3) => {
        this.wrapFailure(e, t3).next(n, s);
      };
    });
  }
  toPromise() {
    return new Promise((t2, e) => {
      this.next(t2, e);
    });
  }
  wrapUserFunction(t2) {
    try {
      const e = t2();
      return e instanceof At ? e : At.resolve(e);
    } catch (t3) {
      return At.reject(t3);
    }
  }
  wrapSuccess(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : At.resolve(e);
  }
  wrapFailure(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : At.reject(e);
  }
  static resolve(t2) {
    return new At((e, n) => {
      e(t2);
    });
  }
  static reject(t2) {
    return new At((e, n) => {
      n(t2);
    });
  }
  static waitFor(t2) {
    return new At((e, n) => {
      let s = 0, i = 0, r = false;
      t2.forEach((t3) => {
        ++s, t3.next(() => {
          ++i, r && i === s && e();
        }, (t4) => n(t4));
      }), r = true, i === s && e();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(t2) {
    let e = At.resolve(false);
    for (const n of t2)
      e = e.next((t3) => t3 ? At.resolve(t3) : n());
    return e;
  }
  static forEach(t2, e) {
    const n = [];
    return t2.forEach((t3, s) => {
      n.push(e.call(this, t3, s));
    }), this.waitFor(n);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(t2, e) {
    return new At((n, s) => {
      const i = t2.length, r = new Array(i);
      let o = 0;
      for (let u = 0; u < i; u++) {
        const c = u;
        e(t2[c]).next((t3) => {
          r[c] = t3, ++o, o === i && n(r);
        }, (t3) => s(t3));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(t2, e) {
    return new At((n, s) => {
      const i = () => {
        true === t2() ? e().next(() => {
          i();
        }, s) : n();
      };
      i();
    });
  }
};
var Rt = class {
  constructor(t2, e) {
    this.action = t2, this.transaction = e, this.aborted = false, /**
     * A `Promise` that resolves with the result of the IndexedDb transaction.
     */
    this.P = new q2(), this.transaction.oncomplete = () => {
      this.P.resolve();
    }, this.transaction.onabort = () => {
      e.error ? this.P.reject(new bt(t2, e.error)) : this.P.resolve();
    }, this.transaction.onerror = (e2) => {
      const n = xt(e2.target.error);
      this.P.reject(new bt(t2, n));
    };
  }
  static open(t2, e, n, s) {
    try {
      return new Rt(e, t2.transaction(s, n));
    } catch (t3) {
      throw new bt(e, t3);
    }
  }
  get v() {
    return this.P.promise;
  }
  abort(t2) {
    t2 && this.P.reject(t2), this.aborted || (C2("SimpleDb", "Aborting transaction:", t2 ? t2.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }
  V() {
    const t2 = this.transaction;
    this.aborted || "function" != typeof t2.commit || t2.commit();
  }
  /**
   * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
   * operations performed on the SimpleDbStore happen within the context of this
   * transaction and it cannot be used anymore once the transaction is
   * completed.
   *
   * Note that we can't actually enforce that the KeyType and ValueType are
   * correct, but they allow type safety through the rest of the consuming code.
   */
  store(t2) {
    const e = this.transaction.objectStore(t2);
    return new St(e);
  }
};
var Pt = class {
  /*
   * Creates a new SimpleDb wrapper for IndexedDb database `name`.
   *
   * Note that `version` must not be a downgrade. IndexedDB does not support
   * downgrading the schema version. We currently do not support any way to do
   * versioning outside of IndexedDB's versioning mechanism, as only
   * version-upgrade transactions are allowed to do things like create
   * objectstores.
   */
  constructor(t2, e, n) {
    this.name = t2, this.version = e, this.S = n;
    12.2 === Pt.D(getUA()) && x2("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  /** Deletes the specified database. */
  static delete(t2) {
    return C2("SimpleDb", "Removing database:", t2), Dt(window.indexedDB.deleteDatabase(t2)).toPromise();
  }
  /** Returns true if IndexedDB is available in the current environment. */
  static C() {
    if (!isIndexedDBAvailable())
      return false;
    if (Pt.N())
      return true;
    const t2 = getUA(), e = Pt.D(t2), n = 0 < e && e < 10, s = Pt.k(t2), i = 0 < s && s < 4.5;
    return !(t2.indexOf("MSIE ") > 0 || t2.indexOf("Trident/") > 0 || t2.indexOf("Edge/") > 0 || n || i);
  }
  /**
   * Returns true if the backing IndexedDB store is the Node IndexedDBShim
   * (see https://github.com/axemclion/IndexedDBShim).
   */
  static N() {
    var t2;
    return "undefined" != typeof process && "YES" === (null === (t2 = process.env) || void 0 === t2 ? void 0 : t2.$);
  }
  /** Helper to get a typed SimpleDbStore from a transaction. */
  static M(t2, e) {
    return t2.store(e);
  }
  // visible for testing
  /** Parse User Agent to determine iOS version. Returns -1 if not found. */
  static D(t2) {
    const e = t2.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  // visible for testing
  /** Parse User Agent to determine Android version. Returns -1 if not found. */
  static k(t2) {
    const e = t2.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  /**
   * Opens the specified database, creating or upgrading it if necessary.
   */
  async O(t2) {
    return this.db || (C2("SimpleDb", "Opening database:", this.name), this.db = await new Promise((e, n) => {
      const s = indexedDB.open(this.name, this.version);
      s.onsuccess = (t3) => {
        const n2 = t3.target.result;
        e(n2);
      }, s.onblocked = () => {
        n(new bt(t2, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
      }, s.onerror = (e2) => {
        const s2 = e2.target.error;
        "VersionError" === s2.name ? n(new L2(B2.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === s2.name ? n(new L2(B2.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + s2)) : n(new bt(t2, s2));
      }, s.onupgradeneeded = (t3) => {
        C2("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', t3.oldVersion);
        const e2 = t3.target.result;
        this.S.F(e2, s.transaction, t3.oldVersion, this.version).next(() => {
          C2("SimpleDb", "Database upgrade to version " + this.version + " complete");
        });
      };
    })), this.B && (this.db.onversionchange = (t3) => this.B(t3)), this.db;
  }
  L(t2) {
    this.B = t2, this.db && (this.db.onversionchange = (e) => t2(e));
  }
  async runTransaction(t2, e, n, s) {
    const i = "readonly" === e;
    let r = 0;
    for (; ; ) {
      ++r;
      try {
        this.db = await this.O(t2);
        const e2 = Rt.open(this.db, t2, i ? "readonly" : "readwrite", n), r2 = s(e2).next((t3) => (e2.V(), t3)).catch((t3) => (
          // Abort the transaction if there was an error.
          (e2.abort(t3), At.reject(t3))
        )).toPromise();
        return r2.catch(() => {
        }), // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
        // fire), but still return the original transactionFnResult back to the
        // caller.
        await e2.v, r2;
      } catch (t3) {
        const e2 = t3, n2 = "FirebaseError" !== e2.name && r < 3;
        if (C2("SimpleDb", "Transaction failed with error:", e2.message, "Retrying:", n2), this.close(), !n2)
          return Promise.reject(e2);
      }
    }
  }
  close() {
    this.db && this.db.close(), this.db = void 0;
  }
};
var vt = class {
  constructor(t2) {
    this.q = t2, this.U = false, this.K = null;
  }
  get isDone() {
    return this.U;
  }
  get G() {
    return this.K;
  }
  set cursor(t2) {
    this.q = t2;
  }
  /**
   * This function can be called to stop iteration at any point.
   */
  done() {
    this.U = true;
  }
  /**
   * This function can be called to skip to that next key, which could be
   * an index or a primary key.
   */
  j(t2) {
    this.K = t2;
  }
  /**
   * Delete the current cursor value from the object store.
   *
   * NOTE: You CANNOT do this with a keysOnly query.
   */
  delete() {
    return Dt(this.q.delete());
  }
};
var bt = class extends L2 {
  constructor(t2, e) {
    super(B2.UNAVAILABLE, `IndexedDB transaction '${t2}' failed: ${e}`), this.name = "IndexedDbTransactionError";
  }
};
function Vt(t2) {
  return "IndexedDbTransactionError" === t2.name;
}
var St = class {
  constructor(t2) {
    this.store = t2;
  }
  put(t2, e) {
    let n;
    return void 0 !== e ? (C2("SimpleDb", "PUT", this.store.name, t2, e), n = this.store.put(e, t2)) : (C2("SimpleDb", "PUT", this.store.name, "<auto-key>", t2), n = this.store.put(t2)), Dt(n);
  }
  /**
   * Adds a new value into an Object Store and returns the new key. Similar to
   * IndexedDb's `add()`, this method will fail on primary key collisions.
   *
   * @param value - The object to write.
   * @returns The key of the value to add.
   */
  add(t2) {
    C2("SimpleDb", "ADD", this.store.name, t2, t2);
    return Dt(this.store.add(t2));
  }
  /**
   * Gets the object with the specified key from the specified store, or null
   * if no object exists with the specified key.
   *
   * @key The key of the object to get.
   * @returns The object with the specified key or null if no object exists.
   */
  get(t2) {
    return Dt(this.store.get(t2)).next((e) => (
      // Normalize nonexistence to null.
      (void 0 === e && (e = null), C2("SimpleDb", "GET", this.store.name, t2, e), e)
    ));
  }
  delete(t2) {
    C2("SimpleDb", "DELETE", this.store.name, t2);
    return Dt(this.store.delete(t2));
  }
  /**
   * If we ever need more of the count variants, we can add overloads. For now,
   * all we need is to count everything in a store.
   *
   * Returns the number of rows in the store.
   */
  count() {
    C2("SimpleDb", "COUNT", this.store.name);
    return Dt(this.store.count());
  }
  W(t2, e) {
    const n = this.options(t2, e);
    if (n.index || "function" != typeof this.store.getAll) {
      const t3 = this.cursor(n), e2 = [];
      return this.H(t3, (t4, n2) => {
        e2.push(n2);
      }).next(() => e2);
    }
    {
      const t3 = this.store.getAll(n.range);
      return new At((e2, n2) => {
        t3.onerror = (t4) => {
          n2(t4.target.error);
        }, t3.onsuccess = (t4) => {
          e2(t4.target.result);
        };
      });
    }
  }
  /**
   * Loads the first `count` elements from the provided index range. Loads all
   * elements if no limit is provided.
   */
  J(t2, e) {
    const n = this.store.getAll(t2, null === e ? void 0 : e);
    return new At((t3, e2) => {
      n.onerror = (t4) => {
        e2(t4.target.error);
      }, n.onsuccess = (e3) => {
        t3(e3.target.result);
      };
    });
  }
  Y(t2, e) {
    C2("SimpleDb", "DELETE ALL", this.store.name);
    const n = this.options(t2, e);
    n.Z = false;
    const s = this.cursor(n);
    return this.H(s, (t3, e2, n2) => n2.delete());
  }
  X(t2, e) {
    let n;
    e ? n = t2 : (n = {}, e = t2);
    const s = this.cursor(n);
    return this.H(s, e);
  }
  /**
   * Iterates over a store, but waits for the given callback to complete for
   * each entry before iterating the next entry. This allows the callback to do
   * asynchronous work to determine if this iteration should continue.
   *
   * The provided callback should return `true` to continue iteration, and
   * `false` otherwise.
   */
  tt(t2) {
    const e = this.cursor({});
    return new At((n, s) => {
      e.onerror = (t3) => {
        const e2 = xt(t3.target.error);
        s(e2);
      }, e.onsuccess = (e2) => {
        const s2 = e2.target.result;
        s2 ? t2(s2.primaryKey, s2.value).next((t3) => {
          t3 ? s2.continue() : n();
        }) : n();
      };
    });
  }
  H(t2, e) {
    const n = [];
    return new At((s, i) => {
      t2.onerror = (t3) => {
        i(t3.target.error);
      }, t2.onsuccess = (t3) => {
        const i2 = t3.target.result;
        if (!i2)
          return void s();
        const r = new vt(i2), o = e(i2.primaryKey, i2.value, r);
        if (o instanceof At) {
          const t4 = o.catch((t5) => (r.done(), At.reject(t5)));
          n.push(t4);
        }
        r.isDone ? s() : null === r.G ? i2.continue() : i2.continue(r.G);
      };
    }).next(() => At.waitFor(n));
  }
  options(t2, e) {
    let n;
    return void 0 !== t2 && ("string" == typeof t2 ? n = t2 : e = t2), {
      index: n,
      range: e
    };
  }
  cursor(t2) {
    let e = "next";
    if (t2.reverse && (e = "prev"), t2.index) {
      const n = this.store.index(t2.index);
      return t2.Z ? n.openKeyCursor(t2.range, e) : n.openCursor(t2.range, e);
    }
    return this.store.openCursor(t2.range, e);
  }
};
function Dt(t2) {
  return new At((e, n) => {
    t2.onsuccess = (t3) => {
      const n2 = t3.target.result;
      e(n2);
    }, t2.onerror = (t3) => {
      const e2 = xt(t3.target.error);
      n(e2);
    };
  });
}
var Ct = false;
function xt(t2) {
  const e = Pt.D(getUA());
  if (e >= 12.2 && e < 13) {
    const e2 = "An internal error was encountered in the Indexed Database server";
    if (t2.message.indexOf(e2) >= 0) {
      const t3 = new L2("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e2}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      return Ct || (Ct = true, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout(() => {
        throw t3;
      }, 0)), t3;
    }
  }
  return t2;
}
var Nt = class {
  constructor(t2, e) {
    this.asyncQueue = t2, this.et = e, this.task = null;
  }
  start() {
    this.nt(15e3);
  }
  stop() {
    this.task && (this.task.cancel(), this.task = null);
  }
  get started() {
    return null !== this.task;
  }
  nt(t2) {
    C2("IndexBackiller", `Scheduled in ${t2}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", t2, async () => {
      this.task = null;
      try {
        C2("IndexBackiller", `Documents written: ${await this.et.st()}`);
      } catch (t3) {
        Vt(t3) ? C2("IndexBackiller", "Ignoring IndexedDB error during index backfill: ", t3) : await Et(t3);
      }
      await this.nt(6e4);
    });
  }
};
var kt = class {
  constructor(t2, e) {
    this.localStore = t2, this.persistence = e;
  }
  async st(t2 = 50) {
    return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", (e) => this.it(e, t2));
  }
  /** Writes index entries until the cap is reached. Returns the number of documents processed. */
  it(t2, e) {
    const n = /* @__PURE__ */ new Set();
    let s = e, i = true;
    return At.doWhile(() => true === i && s > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(t2).next((e2) => {
      if (null !== e2 && !n.has(e2))
        return C2("IndexBackiller", `Processing collection: ${e2}`), this.rt(t2, e2, s).next((t3) => {
          s -= t3, n.add(e2);
        });
      i = false;
    })).next(() => e - s);
  }
  /**
   * Writes entries for the provided collection group. Returns the number of documents processed.
   */
  rt(t2, e, n) {
    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t2, e).next((s) => this.localStore.localDocuments.getNextDocuments(t2, e, s, n).next((n2) => {
      const i = n2.changes;
      return this.localStore.indexManager.updateIndexEntries(t2, i).next(() => this.ot(s, n2)).next((n3) => (C2("IndexBackiller", `Updating offset: ${n3}`), this.localStore.indexManager.updateCollectionGroup(t2, e, n3))).next(() => i.size);
    }));
  }
  /** Returns the next offset based on the provided documents. */
  ot(t2, e) {
    let n = t2;
    return e.changes.forEach((t3, e2) => {
      const s = gt(e2);
      pt(s, n) > 0 && (n = s);
    }), new yt(n.readTime, n.documentKey, Math.max(e.batchId, t2.largestBatchId));
  }
};
var $t = class {
  constructor(t2, e) {
    this.previousValue = t2, e && (e.sequenceNumberHandler = (t3) => this.ut(t3), this.ct = (t3) => e.writeSequenceNumber(t3));
  }
  ut(t2) {
    return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
  }
  next() {
    const t2 = ++this.previousValue;
    return this.ct && this.ct(t2), t2;
  }
};
$t.at = -1;
var Mt = /^[_a-zA-Z][_a-zA-Z0-9]*(?:\.[_a-zA-Z][_a-zA-Z0-9]*)*$/;
var Ot = class {
  /**
   * @internal
   * @param alias Un-escaped alias representation
   */
  constructor(t2) {
    this.alias = t2;
  }
  /**
   * Returns true if the string could be used as an alias.
   */
  static ht(t2) {
    return Mt.test(t2);
  }
  /**
   * Return an escaped and quoted string representation of the alias.
   */
  canonicalString() {
    let t2 = this.alias.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
    return Ot.ht(t2) || (t2 = "`" + t2 + "`"), t2;
  }
};
var Ft = class {
  constructor(t2, e, n) {
    this.alias = t2, this.lt = e, this.fieldPath = n;
  }
};
var Bt = class {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(t2, e, n, s, i, r, o, u) {
    this.databaseId = t2, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = u;
  }
};
var Lt = class {
  constructor(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  static empty() {
    return new Lt("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(t2) {
    return t2 instanceof Lt && t2.projectId === this.projectId && t2.database === this.database;
  }
};
function qt(t2) {
  let e = 0;
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e++;
  return e;
}
function Ut(t2, e) {
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e(n, t2[n]);
}
function Kt(t2) {
  for (const e in t2)
    if (Object.prototype.hasOwnProperty.call(t2, e))
      return false;
  return true;
}
function Gt(t2) {
  return null == t2;
}
function Qt(t2) {
  return 0 === t2 && 1 / t2 == -1 / 0;
}
function jt(t2) {
  return "number" == typeof t2 && Number.isInteger(t2) && !Qt(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
}
var zt = class extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
};
function Wt() {
  return "undefined" != typeof atob;
}
var Ht = class {
  constructor(t2) {
    this.binaryString = t2;
  }
  static fromBase64String(t2) {
    const e = function(t3) {
      try {
        return atob(t3);
      } catch (t4) {
        throw t4 instanceof DOMException ? new zt("Invalid base64 string: " + t4) : t4;
      }
    }(t2);
    return new Ht(e);
  }
  static fromUint8Array(t2) {
    const e = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function(t3) {
        let e2 = "";
        for (let n = 0; n < t3.length; ++n)
          e2 += String.fromCharCode(t3[n]);
        return e2;
      }(t2)
    );
    return new Ht(e);
  }
  [Symbol.iterator]() {
    let t2 = 0;
    return {
      next: () => t2 < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t2++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return t2 = this.binaryString, btoa(t2);
    var t2;
  }
  toUint8Array() {
    return function(t2) {
      const e = new Uint8Array(t2.length);
      for (let n = 0; n < t2.length; n++)
        e[n] = t2.charCodeAt(n);
      return e;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t2) {
    return X2(this.binaryString, t2.binaryString);
  }
  isEqual(t2) {
    return this.binaryString === t2.binaryString;
  }
};
Ht.EMPTY_BYTE_STRING = new Ht("");
var Jt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Yt(t2) {
  if (M2(!!t2), "string" == typeof t2) {
    let e = 0;
    const n = Jt.exec(t2);
    if (M2(!!n), n[1]) {
      let t3 = n[1];
      t3 = (t3 + "000000000").substr(0, 9), e = Number(t3);
    }
    const s = new Date(t2);
    return {
      seconds: Math.floor(s.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: Zt(t2.seconds),
    nanos: Zt(t2.nanos)
  };
}
function Zt(t2) {
  return "number" == typeof t2 ? t2 : "string" == typeof t2 ? Number(t2) : 0;
}
function Xt(t2) {
  return "string" == typeof t2 ? Ht.fromBase64String(t2) : Ht.fromUint8Array(t2);
}
function te(t2) {
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t2 ? void 0 : t2.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function ee(t2) {
  const e = t2.mapValue.fields.__previous_value__;
  return te(e) ? ee(e) : e;
}
function ne(t2) {
  const e = Yt(t2.mapValue.fields.__local_write_time__.timestampValue);
  return new nt(e.seconds, e.nanos);
}
var se = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
var ie = {
  nullValue: "NULL_VALUE"
};
function re(t2) {
  return "nullValue" in t2 ? 0 : "booleanValue" in t2 ? 1 : "integerValue" in t2 || "doubleValue" in t2 ? 2 : "timestampValue" in t2 ? 3 : "stringValue" in t2 ? 5 : "bytesValue" in t2 ? 6 : "referenceValue" in t2 ? 7 : "geoPointValue" in t2 ? 8 : "arrayValue" in t2 ? 9 : "mapValue" in t2 ? te(t2) ? 4 : pe(t2) ? 9007199254740991 : 10 : $();
}
function oe(t2, e) {
  if (t2 === e)
    return true;
  const n = re(t2);
  if (n !== re(e))
    return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return t2.booleanValue === e.booleanValue;
    case 4:
      return ne(t2).isEqual(ne(e));
    case 3:
      return function(t3, e2) {
        if ("string" == typeof t3.timestampValue && "string" == typeof e2.timestampValue && t3.timestampValue.length === e2.timestampValue.length)
          return t3.timestampValue === e2.timestampValue;
        const n2 = Yt(t3.timestampValue), s = Yt(e2.timestampValue);
        return n2.seconds === s.seconds && n2.nanos === s.nanos;
      }(t2, e);
    case 5:
      return t2.stringValue === e.stringValue;
    case 6:
      return function(t3, e2) {
        return Xt(t3.bytesValue).isEqual(Xt(e2.bytesValue));
      }(t2, e);
    case 7:
      return t2.referenceValue === e.referenceValue;
    case 8:
      return function(t3, e2) {
        return Zt(t3.geoPointValue.latitude) === Zt(e2.geoPointValue.latitude) && Zt(t3.geoPointValue.longitude) === Zt(e2.geoPointValue.longitude);
      }(t2, e);
    case 2:
      return function(t3, e2) {
        if ("integerValue" in t3 && "integerValue" in e2)
          return Zt(t3.integerValue) === Zt(e2.integerValue);
        if ("doubleValue" in t3 && "doubleValue" in e2) {
          const n2 = Zt(t3.doubleValue), s = Zt(e2.doubleValue);
          return n2 === s ? Qt(n2) === Qt(s) : isNaN(n2) && isNaN(s);
        }
        return false;
      }(t2, e);
    case 9:
      return tt(t2.arrayValue.values || [], e.arrayValue.values || [], oe);
    case 10:
      return function(t3, e2) {
        const n2 = t3.mapValue.fields || {}, s = e2.mapValue.fields || {};
        if (qt(n2) !== qt(s))
          return false;
        for (const t4 in n2)
          if (n2.hasOwnProperty(t4) && (void 0 === s[t4] || !oe(n2[t4], s[t4])))
            return false;
        return true;
      }(t2, e);
    default:
      return $();
  }
}
function ue(t2, e) {
  return void 0 !== (t2.values || []).find((t3) => oe(t3, e));
}
function ce(t2, e) {
  if (t2 === e)
    return 0;
  const n = re(t2), s = re(e);
  if (n !== s)
    return X2(n, s);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return X2(t2.booleanValue, e.booleanValue);
    case 2:
      return function(t3, e2) {
        const n2 = Zt(t3.integerValue || t3.doubleValue), s2 = Zt(e2.integerValue || e2.doubleValue);
        return n2 < s2 ? -1 : n2 > s2 ? 1 : n2 === s2 ? 0 : (
          // one or both are NaN.
          isNaN(n2) ? isNaN(s2) ? 0 : -1 : 1
        );
      }(t2, e);
    case 3:
      return ae(t2.timestampValue, e.timestampValue);
    case 4:
      return ae(ne(t2), ne(e));
    case 5:
      return X2(t2.stringValue, e.stringValue);
    case 6:
      return function(t3, e2) {
        const n2 = Xt(t3), s2 = Xt(e2);
        return n2.compareTo(s2);
      }(t2.bytesValue, e.bytesValue);
    case 7:
      return function(t3, e2) {
        const n2 = t3.split("/"), s2 = e2.split("/");
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; t4++) {
          const e3 = X2(n2[t4], s2[t4]);
          if (0 !== e3)
            return e3;
        }
        return X2(n2.length, s2.length);
      }(t2.referenceValue, e.referenceValue);
    case 8:
      return function(t3, e2) {
        const n2 = X2(Zt(t3.latitude), Zt(e2.latitude));
        if (0 !== n2)
          return n2;
        return X2(Zt(t3.longitude), Zt(e2.longitude));
      }(t2.geoPointValue, e.geoPointValue);
    case 9:
      return function(t3, e2) {
        const n2 = t3.values || [], s2 = e2.values || [];
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; ++t4) {
          const e3 = ce(n2[t4], s2[t4]);
          if (e3)
            return e3;
        }
        return X2(n2.length, s2.length);
      }(t2.arrayValue, e.arrayValue);
    case 10:
      return function(t3, e2) {
        if (t3 === se.mapValue && e2 === se.mapValue)
          return 0;
        if (t3 === se.mapValue)
          return 1;
        if (e2 === se.mapValue)
          return -1;
        const n2 = t3.fields || {}, s2 = Object.keys(n2), i = e2.fields || {}, r = Object.keys(i);
        s2.sort(), r.sort();
        for (let t4 = 0; t4 < s2.length && t4 < r.length; ++t4) {
          const e3 = X2(s2[t4], r[t4]);
          if (0 !== e3)
            return e3;
          const o = ce(n2[s2[t4]], i[r[t4]]);
          if (0 !== o)
            return o;
        }
        return X2(s2.length, r.length);
      }(t2.mapValue, e.mapValue);
    default:
      throw $();
  }
}
function ae(t2, e) {
  if ("string" == typeof t2 && "string" == typeof e && t2.length === e.length)
    return X2(t2, e);
  const n = Yt(t2), s = Yt(e), i = X2(n.seconds, s.seconds);
  return 0 !== i ? i : X2(n.nanos, s.nanos);
}
function he(t2) {
  return le(t2);
}
function le(t2) {
  return "nullValue" in t2 ? "null" : "booleanValue" in t2 ? "" + t2.booleanValue : "integerValue" in t2 ? "" + t2.integerValue : "doubleValue" in t2 ? "" + t2.doubleValue : "timestampValue" in t2 ? function(t3) {
    const e2 = Yt(t3);
    return `time(${e2.seconds},${e2.nanos})`;
  }(t2.timestampValue) : "stringValue" in t2 ? t2.stringValue : "bytesValue" in t2 ? Xt(t2.bytesValue).toBase64() : "referenceValue" in t2 ? (n = t2.referenceValue, ct.fromName(n).toString()) : "geoPointValue" in t2 ? `geo(${(e = t2.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t2 ? function(t3) {
    let e2 = "[", n2 = true;
    for (const s of t3.values || [])
      n2 ? n2 = false : e2 += ",", e2 += le(s);
    return e2 + "]";
  }(t2.arrayValue) : "mapValue" in t2 ? function(t3) {
    const e2 = Object.keys(t3.fields || {}).sort();
    let n2 = "{", s = true;
    for (const i of e2)
      s ? s = false : n2 += ",", n2 += `${i}:${le(t3.fields[i])}`;
    return n2 + "}";
  }(t2.mapValue) : $();
  var e, n;
}
function fe(t2, e) {
  return {
    referenceValue: `projects/${t2.projectId}/databases/${t2.database}/documents/${e.path.canonicalString()}`
  };
}
function de(t2) {
  return !!t2 && "integerValue" in t2;
}
function _e(t2) {
  return !!t2 && "arrayValue" in t2;
}
function we(t2) {
  return !!t2 && "nullValue" in t2;
}
function me(t2) {
  return !!t2 && "doubleValue" in t2 && isNaN(Number(t2.doubleValue));
}
function ge(t2) {
  return !!t2 && "mapValue" in t2;
}
function ye(t2) {
  if (t2.geoPointValue)
    return {
      geoPointValue: Object.assign({}, t2.geoPointValue)
    };
  if (t2.timestampValue && "object" == typeof t2.timestampValue)
    return {
      timestampValue: Object.assign({}, t2.timestampValue)
    };
  if (t2.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return Ut(t2.mapValue.fields, (t3, n) => e.mapValue.fields[t3] = ye(n)), e;
  }
  if (t2.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (t2.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = ye(t2.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t2);
}
function pe(t2) {
  return "__max__" === (((t2.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
function Ie(t2) {
  return "nullValue" in t2 ? ie : "booleanValue" in t2 ? {
    booleanValue: false
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    doubleValue: NaN
  } : "timestampValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "stringValue" in t2 ? {
    stringValue: ""
  } : "bytesValue" in t2 ? {
    bytesValue: ""
  } : "referenceValue" in t2 ? fe(Lt.empty(), ct.empty()) : "geoPointValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "arrayValue" in t2 ? {
    arrayValue: {}
  } : "mapValue" in t2 ? {
    mapValue: {}
  } : $();
}
function Te(t2) {
  return "nullValue" in t2 ? {
    booleanValue: false
  } : "booleanValue" in t2 ? {
    doubleValue: NaN
  } : "integerValue" in t2 || "doubleValue" in t2 ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "timestampValue" in t2 ? {
    stringValue: ""
  } : "stringValue" in t2 ? {
    bytesValue: ""
  } : "bytesValue" in t2 ? fe(Lt.empty(), ct.empty()) : "referenceValue" in t2 ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "geoPointValue" in t2 ? {
    arrayValue: {}
  } : "arrayValue" in t2 ? {
    mapValue: {}
  } : "mapValue" in t2 ? se : $();
}
function Ee(t2, e) {
  const n = ce(t2.value, e.value);
  return 0 !== n ? n : t2.inclusive && !e.inclusive ? -1 : !t2.inclusive && e.inclusive ? 1 : 0;
}
function Ae(t2, e) {
  const n = ce(t2.value, e.value);
  return 0 !== n ? n : t2.inclusive && !e.inclusive ? 1 : !t2.inclusive && e.inclusive ? -1 : 0;
}
var Re = class {
  constructor(t2, e) {
    this.position = t2, this.inclusive = e;
  }
};
function Pe(t2, e, n) {
  let s = 0;
  for (let i = 0; i < t2.position.length; i++) {
    const r = e[i], o = t2.position[i];
    if (r.field.isKeyField())
      s = ct.comparator(ct.fromName(o.referenceValue), n.key);
    else {
      s = ce(o, n.data.field(r.field));
    }
    if ("desc" === r.dir && (s *= -1), 0 !== s)
      break;
  }
  return s;
}
function ve(t2, e) {
  if (null === t2)
    return null === e;
  if (null === e)
    return false;
  if (t2.inclusive !== e.inclusive || t2.position.length !== e.position.length)
    return false;
  for (let n = 0; n < t2.position.length; n++) {
    if (!oe(t2.position[n], e.position[n]))
      return false;
  }
  return true;
}
var be = class {
};
var Ve = class extends be {
  constructor(t2, e, n) {
    super(), this.field = t2, this.op = e, this.value = n;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t2, e, n) {
    return t2.isKeyField() ? "in" === e || "not-in" === e ? this.createKeyFieldInFilter(t2, e, n) : new Fe(t2, e, n) : "array-contains" === e ? new Ue(t2, n) : "in" === e ? new Ke(t2, n) : "not-in" === e ? new Ge(t2, n) : "array-contains-any" === e ? new Qe(t2, n) : new Ve(t2, e, n);
  }
  static createKeyFieldInFilter(t2, e, n) {
    return "in" === e ? new Be(t2, n) : new Le(t2, n);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return "!=" === this.op ? null !== e && this.matchesComparison(ce(e, this.value)) : null !== e && re(this.value) === re(e) && this.matchesComparison(ce(e, this.value));
  }
  matchesComparison(t2) {
    switch (this.op) {
      case "<":
        return t2 < 0;
      case "<=":
        return t2 <= 0;
      case "==":
        return 0 === t2;
      case "!=":
        return 0 !== t2;
      case ">":
        return t2 > 0;
      case ">=":
        return t2 >= 0;
      default:
        return $();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
  getFirstInequalityField() {
    return this.isInequality() ? this.field : null;
  }
};
var Se = class extends be {
  constructor(t2, e) {
    super(), this.filters = t2, this.op = e, this.ft = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t2, e) {
    return new Se(t2, e);
  }
  matches(t2) {
    return De(this) ? void 0 === this.filters.find((e) => !e.matches(t2)) : void 0 !== this.filters.find((e) => e.matches(t2));
  }
  getFlattenedFilters() {
    return null !== this.ft || (this.ft = this.filters.reduce((t2, e) => t2.concat(e.getFlattenedFilters()), [])), this.ft;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
  getFirstInequalityField() {
    const t2 = this.dt((t3) => t3.isInequality());
    return null !== t2 ? t2.field : null;
  }
  // Performs a depth-first search to find and return the first FieldFilter in the composite filter
  // that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
  // predicate.
  dt(t2) {
    for (const e of this.getFlattenedFilters())
      if (t2(e))
        return e;
    return null;
  }
};
function De(t2) {
  return "and" === t2.op;
}
function Ce(t2) {
  return "or" === t2.op;
}
function xe(t2) {
  return Ne(t2) && De(t2);
}
function Ne(t2) {
  for (const e of t2.filters)
    if (e instanceof Se)
      return false;
  return true;
}
function ke(t2) {
  if (t2 instanceof Ve)
    return t2.field.canonicalString() + t2.op.toString() + he(t2.value);
  if (xe(t2))
    return t2.filters.map((t3) => ke(t3)).join(",");
  {
    const e = t2.filters.map((t3) => ke(t3)).join(",");
    return `${t2.op}(${e})`;
  }
}
function $e(t2, e) {
  return t2 instanceof Ve ? function(t3, e2) {
    return e2 instanceof Ve && t3.op === e2.op && t3.field.isEqual(e2.field) && oe(t3.value, e2.value);
  }(t2, e) : t2 instanceof Se ? function(t3, e2) {
    if (e2 instanceof Se && t3.op === e2.op && t3.filters.length === e2.filters.length) {
      return t3.filters.reduce((t4, n, s) => t4 && $e(n, e2.filters[s]), true);
    }
    return false;
  }(t2, e) : void $();
}
function Me(t2, e) {
  const n = t2.filters.concat(e);
  return Se.create(n, t2.op);
}
function Oe(t2) {
  return t2 instanceof Ve ? function(t3) {
    return `${t3.field.canonicalString()} ${t3.op} ${he(t3.value)}`;
  }(t2) : t2 instanceof Se ? function(t3) {
    return t3.op.toString() + " {" + t3.getFilters().map(Oe).join(" ,") + "}";
  }(t2) : "Filter";
}
var Fe = class extends Ve {
  constructor(t2, e, n) {
    super(t2, e, n), this.key = ct.fromName(n.referenceValue);
  }
  matches(t2) {
    const e = ct.comparator(t2.key, this.key);
    return this.matchesComparison(e);
  }
};
var Be = class extends Ve {
  constructor(t2, e) {
    super(t2, "in", e), this.keys = qe("in", e);
  }
  matches(t2) {
    return this.keys.some((e) => e.isEqual(t2.key));
  }
};
var Le = class extends Ve {
  constructor(t2, e) {
    super(t2, "not-in", e), this.keys = qe("not-in", e);
  }
  matches(t2) {
    return !this.keys.some((e) => e.isEqual(t2.key));
  }
};
function qe(t2, e) {
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t3) => ct.fromName(t3.referenceValue));
}
var Ue = class extends Ve {
  constructor(t2, e) {
    super(t2, "array-contains", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return _e(e) && ue(e.arrayValue, this.value);
  }
};
var Ke = class extends Ve {
  constructor(t2, e) {
    super(t2, "in", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return null !== e && ue(this.value.arrayValue, e);
  }
};
var Ge = class extends Ve {
  constructor(t2, e) {
    super(t2, "not-in", e);
  }
  matches(t2) {
    if (ue(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    const e = t2.data.field(this.field);
    return null !== e && !ue(this.value.arrayValue, e);
  }
};
var Qe = class extends Ve {
  constructor(t2, e) {
    super(t2, "array-contains-any", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return !(!_e(e) || !e.arrayValue.values) && e.arrayValue.values.some((t3) => ue(this.value.arrayValue, t3));
  }
};
var je = class {
  constructor(t2, e = "asc") {
    this.field = t2, this.dir = e;
  }
};
function ze(t2, e) {
  return t2.dir === e.dir && t2.field.isEqual(e.field);
}
var We = class {
  constructor(t2, e) {
    this.comparator = t2, this.root = e || Je.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(t2, e) {
    return new We(this.comparator, this.root.insert(t2, e, this.comparator).copy(null, null, Je.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(t2) {
    return new We(this.comparator, this.root.remove(t2, this.comparator).copy(null, null, Je.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(t2) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const n = this.comparator(t2, e.key);
      if (0 === n)
        return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(t2) {
    let e = 0, n = this.root;
    for (; !n.isEmpty(); ) {
      const s = this.comparator(t2, n.key);
      if (0 === s)
        return e + n.left.size;
      s < 0 ? n = n.left : (
        // Count all nodes left of the node plus the node itself
        (e += n.left.size + 1, n = n.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t2) {
    return this.root.inorderTraversal(t2);
  }
  forEach(t2) {
    this.inorderTraversal((e, n) => (t2(e, n), false));
  }
  toString() {
    const t2 = [];
    return this.inorderTraversal((e, n) => (t2.push(`${e}:${n}`), false)), `{${t2.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t2) {
    return this.root.reverseTraversal(t2);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new He(this.root, null, this.comparator, false);
  }
  getIteratorFrom(t2) {
    return new He(this.root, t2, this.comparator, false);
  }
  getReverseIterator() {
    return new He(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(t2) {
    return new He(this.root, t2, this.comparator, true);
  }
};
var He = class {
  constructor(t2, e, n, s) {
    this.isReverse = s, this.nodeStack = [];
    let i = 1;
    for (; !t2.isEmpty(); )
      if (i = e ? n(t2.key, e) : 1, // flip the comparison if we're going in reverse
      e && s && (i *= -1), i < 0)
        t2 = this.isReverse ? t2.left : t2.right;
      else {
        if (0 === i) {
          this.nodeStack.push(t2);
          break;
        }
        this.nodeStack.push(t2), t2 = this.isReverse ? t2.right : t2.left;
      }
  }
  getNext() {
    let t2 = this.nodeStack.pop();
    const e = {
      key: t2.key,
      value: t2.value
    };
    if (this.isReverse)
      for (t2 = t2.left; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.right;
    else
      for (t2 = t2.right; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length)
      return null;
    const t2 = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t2.key,
      value: t2.value
    };
  }
};
var Je = class {
  constructor(t2, e, n, s, i) {
    this.key = t2, this.value = e, this.color = null != n ? n : Je.RED, this.left = null != s ? s : Je.EMPTY, this.right = null != i ? i : Je.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(t2, e, n, s, i) {
    return new Je(null != t2 ? t2 : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t2) {
    return this.left.inorderTraversal(t2) || t2(this.key, this.value) || this.right.inorderTraversal(t2);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t2) {
    return this.right.reverseTraversal(t2) || t2(this.key, this.value) || this.left.reverseTraversal(t2);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(t2, e, n) {
    let s = this;
    const i = n(t2, s.key);
    return s = i < 0 ? s.copy(null, null, null, s.left.insert(t2, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t2, e, n)), s.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return Je.EMPTY;
    let t2 = this;
    return t2.left.isRed() || t2.left.left.isRed() || (t2 = t2.moveRedLeft()), t2 = t2.copy(null, null, null, t2.left.removeMin(), null), t2.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(t2, e) {
    let n, s = this;
    if (e(t2, s.key) < 0)
      s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(t2, e), null);
    else {
      if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 0 === e(t2, s.key)) {
        if (s.right.isEmpty())
          return Je.EMPTY;
        n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(t2, e));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let t2 = this;
    return t2.right.isRed() && !t2.left.isRed() && (t2 = t2.rotateLeft()), t2.left.isRed() && t2.left.left.isRed() && (t2 = t2.rotateRight()), t2.left.isRed() && t2.right.isRed() && (t2 = t2.colorFlip()), t2;
  }
  moveRedLeft() {
    let t2 = this.colorFlip();
    return t2.right.left.isRed() && (t2 = t2.copy(null, null, null, null, t2.right.rotateRight()), t2 = t2.rotateLeft(), t2 = t2.colorFlip()), t2;
  }
  moveRedRight() {
    let t2 = this.colorFlip();
    return t2.left.left.isRed() && (t2 = t2.rotateRight(), t2 = t2.colorFlip()), t2;
  }
  rotateLeft() {
    const t2 = this.copy(null, null, Je.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t2, null);
  }
  rotateRight() {
    const t2 = this.copy(null, null, Je.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t2);
  }
  colorFlip() {
    const t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t2, e);
  }
  // For testing.
  checkMaxDepth() {
    const t2 = this.check();
    return Math.pow(2, t2) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed())
      throw $();
    if (this.right.isRed())
      throw $();
    const t2 = this.left.check();
    if (t2 !== this.right.check())
      throw $();
    return t2 + (this.isRed() ? 0 : 1);
  }
};
Je.EMPTY = null, Je.RED = true, Je.BLACK = false;
Je.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw $();
  }
  get value() {
    throw $();
  }
  get color() {
    throw $();
  }
  get left() {
    throw $();
  }
  get right() {
    throw $();
  }
  // Returns a copy of the current node.
  copy(t2, e, n, s, i) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(t2, e, n) {
    return new Je(t2, e);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(t2, e) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(t2) {
    return false;
  }
  reverseTraversal(t2) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  // For testing.
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var Ye = class {
  constructor(t2) {
    this.comparator = t2, this.data = new We(this.comparator);
  }
  has(t2) {
    return null !== this.data.get(t2);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t2) {
    return this.data.indexOf(t2);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(t2) {
    this.data.inorderTraversal((e, n) => (t2(e), false));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(t2, e) {
    const n = this.data.getIteratorFrom(t2[0]);
    for (; n.hasNext(); ) {
      const s = n.getNext();
      if (this.comparator(s.key, t2[1]) >= 0)
        return;
      e(s.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(t2, e) {
    let n;
    for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
      if (!t2(n.getNext().key))
        return;
    }
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(t2) {
    const e = this.data.getIteratorFrom(t2);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new Ze(this.data.getIterator());
  }
  getIteratorFrom(t2) {
    return new Ze(this.data.getIteratorFrom(t2));
  }
  /** Inserts or updates an element */
  add(t2) {
    return this.copy(this.data.remove(t2).insert(t2, true));
  }
  /** Deletes an element */
  delete(t2) {
    return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t2) {
    let e = this;
    return e.size < t2.size && (e = t2, t2 = this), t2.forEach((t3) => {
      e = e.add(t3);
    }), e;
  }
  isEqual(t2) {
    if (!(t2 instanceof Ye))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.data.getIterator(), n = t2.data.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (0 !== this.comparator(t3, s))
        return false;
    }
    return true;
  }
  toArray() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e);
    }), t2;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), "SortedSet(" + t2.toString() + ")";
  }
  copy(t2) {
    const e = new Ye(this.comparator);
    return e.data = t2, e;
  }
};
var Ze = class {
  constructor(t2) {
    this.iter = t2;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
function Xe(t2) {
  return t2.hasNext() ? t2.getNext() : void 0;
}
var tn = class {
  constructor(t2) {
    this.fields = t2, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t2.sort(ut.comparator);
  }
  static empty() {
    return new tn([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(t2) {
    let e = new Ye(ut.comparator);
    for (const t3 of this.fields)
      e = e.add(t3);
    for (const n of t2)
      e = e.add(n);
    return new tn(e.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(t2) {
    for (const e of this.fields)
      if (e.isPrefixOf(t2))
        return true;
    return false;
  }
  isEqual(t2) {
    return tt(this.fields, t2.fields, (t3, e) => t3.isEqual(e));
  }
};
var en = class {
  constructor(t2) {
    this.value = t2;
  }
  static empty() {
    return new en({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(t2) {
    if (t2.isEmpty())
      return this.value;
    {
      let e = this.value;
      for (let n = 0; n < t2.length - 1; ++n)
        if (e = (e.mapValue.fields || {})[t2.get(n)], !ge(e))
          return null;
      return e = (e.mapValue.fields || {})[t2.lastSegment()], e || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(t2, e) {
    this.getFieldsMap(t2.popLast())[t2.lastSegment()] = ye(e);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(t2) {
    let e = ut.emptyPath(), n = {}, s = [];
    t2.forEach((t3, i2) => {
      if (!e.isImmediateParentOf(i2)) {
        const t4 = this.getFieldsMap(e);
        this.applyChanges(t4, n, s), n = {}, s = [], e = i2.popLast();
      }
      t3 ? n[i2.lastSegment()] = ye(t3) : s.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, n, s);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(t2) {
    const e = this.field(t2.popLast());
    ge(e) && e.mapValue.fields && delete e.mapValue.fields[t2.lastSegment()];
  }
  isEqual(t2) {
    return oe(this.value, t2.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(t2) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let n = 0; n < t2.length; ++n) {
      let s = e.mapValue.fields[t2.get(n)];
      ge(s) && s.mapValue.fields || (s = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t2.get(n)] = s), e = s;
    }
    return e.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(t2, e, n) {
    Ut(e, (e2, n2) => t2[e2] = n2);
    for (const e2 of n)
      delete t2[e2];
  }
  clone() {
    return new en(ye(this.value));
  }
};
function nn(t2) {
  const e = [];
  return Ut(t2.fields, (t3, n) => {
    const s = new ut([t3]);
    if (ge(n)) {
      const t4 = nn(n.mapValue).fields;
      if (0 === t4.length)
        e.push(s);
      else
        for (const n2 of t4)
          e.push(s.child(n2));
    } else
      e.push(s);
  }), new tn(e);
}
var sn = class {
  constructor(t2, e, n, s, i, r, o) {
    this.key = t2, this.documentType = e, this.version = n, this.readTime = s, this.createTime = i, this.data = r, this.documentState = o;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(t2) {
    return new sn(
      t2,
      0,
      /* version */
      st.min(),
      /* readTime */
      st.min(),
      /* createTime */
      st.min(),
      en.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(t2, e, n, s) {
    return new sn(
      t2,
      1,
      /* version */
      e,
      /* readTime */
      st.min(),
      /* createTime */
      n,
      s,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(t2, e) {
    return new sn(
      t2,
      2,
      /* version */
      e,
      /* readTime */
      st.min(),
      /* createTime */
      st.min(),
      en.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(t2, e) {
    return new sn(
      t2,
      3,
      /* version */
      e,
      /* readTime */
      st.min(),
      /* createTime */
      st.min(),
      en.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(t2, e) {
    return !this.createTime.isEqual(st.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = t2), this.version = t2, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(t2) {
    return this.version = t2, this.documentType = 2, this.data = en.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(t2) {
    return this.version = t2, this.documentType = 3, this.data = en.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = st.min(), this;
  }
  setReadTime(t2) {
    return this.readTime = t2, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t2) {
    return t2 instanceof sn && this.key.isEqual(t2.key) && this.version.isEqual(t2.version) && this.documentType === t2.documentType && this.documentState === t2.documentState && this.data.isEqual(t2.data);
  }
  mutableCopy() {
    return new sn(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var rn = class {
  constructor(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
    this.path = t2, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, this.startAt = r, this.endAt = o, this._t = null;
  }
};
function on(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
  return new rn(t2, e, n, s, i, r, o);
}
function un(t2) {
  const e = F(t2);
  if (null === e._t) {
    let t3 = e.path.canonicalString();
    null !== e.collectionGroup && (t3 += "|cg:" + e.collectionGroup), t3 += "|f:", t3 += e.filters.map((t4) => ke(t4)).join(","), t3 += "|ob:", t3 += e.orderBy.map((t4) => function(t5) {
      return t5.field.canonicalString() + t5.dir;
    }(t4)).join(","), Gt(e.limit) || (t3 += "|l:", t3 += e.limit), e.startAt && (t3 += "|lb:", t3 += e.startAt.inclusive ? "b:" : "a:", t3 += e.startAt.position.map((t4) => he(t4)).join(",")), e.endAt && (t3 += "|ub:", t3 += e.endAt.inclusive ? "a:" : "b:", t3 += e.endAt.position.map((t4) => he(t4)).join(",")), e._t = t3;
  }
  return e._t;
}
function cn(t2, e) {
  if (t2.limit !== e.limit)
    return false;
  if (t2.orderBy.length !== e.orderBy.length)
    return false;
  for (let n = 0; n < t2.orderBy.length; n++)
    if (!ze(t2.orderBy[n], e.orderBy[n]))
      return false;
  if (t2.filters.length !== e.filters.length)
    return false;
  for (let n = 0; n < t2.filters.length; n++)
    if (!$e(t2.filters[n], e.filters[n]))
      return false;
  return t2.collectionGroup === e.collectionGroup && (!!t2.path.isEqual(e.path) && (!!ve(t2.startAt, e.startAt) && ve(t2.endAt, e.endAt)));
}
function an(t2) {
  return ct.isDocumentKey(t2.path) && null === t2.collectionGroup && 0 === t2.filters.length;
}
function hn(t2, e) {
  return t2.filters.filter((t3) => t3 instanceof Ve && t3.field.isEqual(e));
}
function ln(t2, e, n) {
  let s = ie, i = true;
  for (const n2 of hn(t2, e)) {
    let t3 = ie, e2 = true;
    switch (n2.op) {
      case "<":
      case "<=":
        t3 = Ie(n2.value);
        break;
      case "==":
      case "in":
      case ">=":
        t3 = n2.value;
        break;
      case ">":
        t3 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = ie;
    }
    Ee({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) < 0 && (s = t3, i = e2);
  }
  if (null !== n)
    for (let r = 0; r < t2.orderBy.length; ++r) {
      if (t2.orderBy[r].field.isEqual(e)) {
        const t3 = n.position[r];
        Ee({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n.inclusive
        }) < 0 && (s = t3, i = n.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
function fn(t2, e, n) {
  let s = se, i = true;
  for (const n2 of hn(t2, e)) {
    let t3 = se, e2 = true;
    switch (n2.op) {
      case ">=":
      case ">":
        t3 = Te(n2.value), e2 = false;
        break;
      case "==":
      case "in":
      case "<=":
        t3 = n2.value;
        break;
      case "<":
        t3 = n2.value, e2 = false;
        break;
      case "!=":
      case "not-in":
        t3 = se;
    }
    Ae({
      value: s,
      inclusive: i
    }, {
      value: t3,
      inclusive: e2
    }) > 0 && (s = t3, i = e2);
  }
  if (null !== n)
    for (let r = 0; r < t2.orderBy.length; ++r) {
      if (t2.orderBy[r].field.isEqual(e)) {
        const t3 = n.position[r];
        Ae({
          value: s,
          inclusive: i
        }, {
          value: t3,
          inclusive: n.inclusive
        }) > 0 && (s = t3, i = n.inclusive);
        break;
      }
    }
  return {
    value: s,
    inclusive: i
  };
}
var dn = class {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(t2, e = null, n = [], s = [], i = null, r = "F", o = null, u = null) {
    this.path = t2, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, this.limit = i, this.limitType = r, this.startAt = o, this.endAt = u, this.wt = null, // The corresponding `Target` of this `Query` instance.
    this.gt = null, this.startAt, this.endAt;
  }
};
function _n(t2, e, n, s, i, r, o, u) {
  return new dn(t2, e, n, s, i, r, o, u);
}
function wn(t2) {
  return new dn(t2);
}
function mn(t2) {
  return 0 === t2.filters.length && null === t2.limit && null == t2.startAt && null == t2.endAt && (0 === t2.explicitOrderBy.length || 1 === t2.explicitOrderBy.length && t2.explicitOrderBy[0].field.isKeyField());
}
function gn(t2) {
  return t2.explicitOrderBy.length > 0 ? t2.explicitOrderBy[0].field : null;
}
function yn(t2) {
  for (const e of t2.filters) {
    const t3 = e.getFirstInequalityField();
    if (null !== t3)
      return t3;
  }
  return null;
}
function pn(t2) {
  return null !== t2.collectionGroup;
}
function In(t2) {
  const e = F(t2);
  if (null === e.wt) {
    e.wt = [];
    const t3 = yn(e), n = gn(e);
    if (null !== t3 && null === n)
      t3.isKeyField() || e.wt.push(new je(t3)), e.wt.push(new je(
        ut.keyField(),
        "asc"
        /* Direction.ASCENDING */
      ));
    else {
      let t4 = false;
      for (const n2 of e.explicitOrderBy)
        e.wt.push(n2), n2.field.isKeyField() && (t4 = true);
      if (!t4) {
        const t5 = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e.wt.push(new je(ut.keyField(), t5));
      }
    }
  }
  return e.wt;
}
function Tn(t2) {
  const e = F(t2);
  if (!e.gt)
    if ("F" === e.limitType)
      e.gt = on(e.path, e.collectionGroup, In(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const t3 = [];
      for (const n2 of In(e)) {
        const e2 = "desc" === n2.dir ? "asc" : "desc";
        t3.push(new je(n2.field, e2));
      }
      const n = e.endAt ? new Re(e.endAt.position, e.endAt.inclusive) : null, s = e.startAt ? new Re(e.startAt.position, e.startAt.inclusive) : null;
      e.gt = on(e.path, e.collectionGroup, t3, e.filters, e.limit, n, s);
    }
  return e.gt;
}
function En(t2, e) {
  e.getFirstInequalityField(), yn(t2);
  const n = t2.filters.concat([e]);
  return new dn(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), n, t2.limit, t2.limitType, t2.startAt, t2.endAt);
}
function An(t2, e, n) {
  return new dn(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, n, t2.startAt, t2.endAt);
}
function Rn(t2, e) {
  return cn(Tn(t2), Tn(e)) && t2.limitType === e.limitType;
}
function Pn(t2) {
  return `${un(Tn(t2))}|lt:${t2.limitType}`;
}
function vn(t2) {
  return `Query(target=${function(t3) {
    let e = t3.path.canonicalString();
    return null !== t3.collectionGroup && (e += " collectionGroup=" + t3.collectionGroup), t3.filters.length > 0 && (e += `, filters: [${t3.filters.map((t4) => Oe(t4)).join(", ")}]`), Gt(t3.limit) || (e += ", limit: " + t3.limit), t3.orderBy.length > 0 && (e += `, orderBy: [${t3.orderBy.map((t4) => function(t5) {
      return `${t5.field.canonicalString()} (${t5.dir})`;
    }(t4)).join(", ")}]`), t3.startAt && (e += ", startAt: ", e += t3.startAt.inclusive ? "b:" : "a:", e += t3.startAt.position.map((t4) => he(t4)).join(",")), t3.endAt && (e += ", endAt: ", e += t3.endAt.inclusive ? "a:" : "b:", e += t3.endAt.position.map((t4) => he(t4)).join(",")), `Target(${e})`;
  }(Tn(t2))}; limitType=${t2.limitType})`;
}
function bn(t2, e) {
  return e.isFoundDocument() && function(t3, e2) {
    const n = e2.key.path;
    return null !== t3.collectionGroup ? e2.key.hasCollectionId(t3.collectionGroup) && t3.path.isPrefixOf(n) : ct.isDocumentKey(t3.path) ? t3.path.isEqual(n) : t3.path.isImmediateParentOf(n);
  }(t2, e) && function(t3, e2) {
    for (const n of In(t3))
      if (!n.field.isKeyField() && null === e2.data.field(n.field))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    for (const n of t3.filters)
      if (!n.matches(e2))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    if (t3.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function(t4, e3, n) {
      const s = Pe(t4, e3, n);
      return t4.inclusive ? s <= 0 : s < 0;
    }(t3.startAt, In(t3), e2))
      return false;
    if (t3.endAt && !function(t4, e3, n) {
      const s = Pe(t4, e3, n);
      return t4.inclusive ? s >= 0 : s > 0;
    }(t3.endAt, In(t3), e2))
      return false;
    return true;
  }(t2, e);
}
function Vn(t2) {
  return t2.collectionGroup || (t2.path.length % 2 == 1 ? t2.path.lastSegment() : t2.path.get(t2.path.length - 2));
}
function Sn(t2) {
  return (e, n) => {
    let s = false;
    for (const i of In(t2)) {
      const t3 = Dn(i, e, n);
      if (0 !== t3)
        return t3;
      s = s || i.field.isKeyField();
    }
    return 0;
  };
}
function Dn(t2, e, n) {
  const s = t2.field.isKeyField() ? ct.comparator(e.key, n.key) : function(t3, e2, n2) {
    const s2 = e2.data.field(t3), i = n2.data.field(t3);
    return null !== s2 && null !== i ? ce(s2, i) : $();
  }(t2.field, e, n);
  switch (t2.dir) {
    case "asc":
      return s;
    case "desc":
      return -1 * s;
    default:
      return $();
  }
}
function Cn(t2, e) {
  if (t2.yt) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: Qt(e) ? "-0" : e
  };
}
function xn(t2) {
  return {
    integerValue: "" + t2
  };
}
function Nn(t2, e) {
  return jt(e) ? xn(e) : Cn(t2, e);
}
var kn = class {
  constructor() {
    this._ = void 0;
  }
};
function $n(t2, e, n) {
  return t2 instanceof Fn ? function(t3, e2) {
    const n2 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t3.seconds,
            nanos: t3.nanoseconds
          }
        }
      }
    };
    return e2 && (n2.fields.__previous_value__ = e2), {
      mapValue: n2
    };
  }(n, e) : t2 instanceof Bn ? Ln(t2, e) : t2 instanceof qn ? Un(t2, e) : function(t3, e2) {
    const n2 = On(t3, e2), s = Gn(n2) + Gn(t3.It);
    return de(n2) && de(t3.It) ? xn(s) : Cn(t3.Tt, s);
  }(t2, e);
}
function Mn(t2, e, n) {
  return t2 instanceof Bn ? Ln(t2, e) : t2 instanceof qn ? Un(t2, e) : n;
}
function On(t2, e) {
  return t2 instanceof Kn ? de(n = e) || function(t3) {
    return !!t3 && "doubleValue" in t3;
  }(n) ? e : {
    integerValue: 0
  } : null;
  var n;
}
var Fn = class extends kn {
};
var Bn = class extends kn {
  constructor(t2) {
    super(), this.elements = t2;
  }
};
function Ln(t2, e) {
  const n = Qn(e);
  for (const e2 of t2.elements)
    n.some((t3) => oe(t3, e2)) || n.push(e2);
  return {
    arrayValue: {
      values: n
    }
  };
}
var qn = class extends kn {
  constructor(t2) {
    super(), this.elements = t2;
  }
};
function Un(t2, e) {
  let n = Qn(e);
  for (const e2 of t2.elements)
    n = n.filter((t3) => !oe(t3, e2));
  return {
    arrayValue: {
      values: n
    }
  };
}
var Kn = class extends kn {
  constructor(t2, e) {
    super(), this.Tt = t2, this.It = e;
  }
};
function Gn(t2) {
  return Zt(t2.integerValue || t2.doubleValue);
}
function Qn(t2) {
  return _e(t2) && t2.arrayValue.values ? t2.arrayValue.values.slice() : [];
}
var jn = class {
  constructor(t2, e) {
    this.field = t2, this.transform = e;
  }
};
function zn(t2, e) {
  return t2.field.isEqual(e.field) && function(t3, e2) {
    return t3 instanceof Bn && e2 instanceof Bn || t3 instanceof qn && e2 instanceof qn ? tt(t3.elements, e2.elements, oe) : t3 instanceof Kn && e2 instanceof Kn ? oe(t3.It, e2.It) : t3 instanceof Fn && e2 instanceof Fn;
  }(t2.transform, e.transform);
}
var Wn = class {
  constructor(t2, e) {
    this.version = t2, this.transformResults = e;
  }
};
var Hn = class {
  constructor(t2, e) {
    this.updateTime = t2, this.exists = e;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new Hn();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(t2) {
    return new Hn(void 0, t2);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(t2) {
    return new Hn(t2);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t2) {
    return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
  }
};
function Jn(t2, e) {
  return void 0 !== t2.updateTime ? e.isFoundDocument() && e.version.isEqual(t2.updateTime) : void 0 === t2.exists || t2.exists === e.isFoundDocument();
}
var Yn = class {
};
function Zn(t2, e) {
  if (!t2.hasLocalMutations || e && 0 === e.fields.length)
    return null;
  if (null === e)
    return t2.isNoDocument() ? new cs(t2.key, Hn.none()) : new ss(t2.key, t2.data, Hn.none());
  {
    const n = t2.data, s = en.empty();
    let i = new Ye(ut.comparator);
    for (let t3 of e.fields)
      if (!i.has(t3)) {
        let e2 = n.field(t3);
        null === e2 && t3.length > 1 && (t3 = t3.popLast(), e2 = n.field(t3)), null === e2 ? s.delete(t3) : s.set(t3, e2), i = i.add(t3);
      }
    return new is(t2.key, s, new tn(i.toArray()), Hn.none());
  }
}
function Xn(t2, e, n) {
  t2 instanceof ss ? function(t3, e2, n2) {
    const s = t3.value.clone(), i = os(t3.fieldTransforms, e2, n2.transformResults);
    s.setAll(i), e2.convertToFoundDocument(n2.version, s).setHasCommittedMutations();
  }(t2, e, n) : t2 instanceof is ? function(t3, e2, n2) {
    if (!Jn(t3.precondition, e2))
      return void e2.convertToUnknownDocument(n2.version);
    const s = os(t3.fieldTransforms, e2, n2.transformResults), i = e2.data;
    i.setAll(rs(t3)), i.setAll(s), e2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  }(t2, e, n) : function(t3, e2, n2) {
    e2.convertToNoDocument(n2.version).setHasCommittedMutations();
  }(0, e, n);
}
function ts(t2, e, n, s) {
  return t2 instanceof ss ? function(t3, e2, n2, s2) {
    if (!Jn(t3.precondition, e2))
      return n2;
    const i = t3.value.clone(), r = us(t3.fieldTransforms, s2, e2);
    return i.setAll(r), e2.convertToFoundDocument(e2.version, i).setHasLocalMutations(), null;
  }(t2, e, n, s) : t2 instanceof is ? function(t3, e2, n2, s2) {
    if (!Jn(t3.precondition, e2))
      return n2;
    const i = us(t3.fieldTransforms, s2, e2), r = e2.data;
    if (r.setAll(rs(t3)), r.setAll(i), e2.convertToFoundDocument(e2.version, r).setHasLocalMutations(), null === n2)
      return null;
    return n2.unionWith(t3.fieldMask.fields).unionWith(t3.fieldTransforms.map((t4) => t4.field));
  }(t2, e, n, s) : function(t3, e2, n2) {
    if (Jn(t3.precondition, e2))
      return e2.convertToNoDocument(e2.version).setHasLocalMutations(), null;
    return n2;
  }(t2, e, n);
}
function es(t2, e) {
  let n = null;
  for (const s of t2.fieldTransforms) {
    const t3 = e.data.field(s.field), i = On(s.transform, t3 || null);
    null != i && (null === n && (n = en.empty()), n.set(s.field, i));
  }
  return n || null;
}
function ns(t2, e) {
  return t2.type === e.type && (!!t2.key.isEqual(e.key) && (!!t2.precondition.isEqual(e.precondition) && (!!function(t3, e2) {
    return void 0 === t3 && void 0 === e2 || !(!t3 || !e2) && tt(t3, e2, (t4, e3) => zn(t4, e3));
  }(t2.fieldTransforms, e.fieldTransforms) && (0 === t2.type ? t2.value.isEqual(e.value) : 1 !== t2.type || t2.data.isEqual(e.data) && t2.fieldMask.isEqual(e.fieldMask)))));
}
var ss = class extends Yn {
  constructor(t2, e, n, s = []) {
    super(), this.key = t2, this.value = e, this.precondition = n, this.fieldTransforms = s, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var is = class extends Yn {
  constructor(t2, e, n, s, i = []) {
    super(), this.key = t2, this.data = e, this.fieldMask = n, this.precondition = s, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function rs(t2) {
  const e = /* @__PURE__ */ new Map();
  return t2.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const s = t2.data.field(n);
      e.set(n, s);
    }
  }), e;
}
function os(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  M2(t2.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const r = t2[i], o = r.transform, u = e.data.field(r.field);
    s.set(r.field, Mn(o, u, n[i]));
  }
  return s;
}
function us(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  for (const i of t2) {
    const t3 = i.transform, r = n.data.field(i.field);
    s.set(i.field, $n(t3, r, e));
  }
  return s;
}
var cs = class extends Yn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var as = class extends Yn {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var hs = class {
  // TODO(b/33078163): just use simplest form of existence filter for now
  constructor(t2) {
    this.count = t2;
  }
};
var ls;
var fs;
function ds(t2) {
  switch (t2) {
    default:
      return $();
    case B2.CANCELLED:
    case B2.UNKNOWN:
    case B2.DEADLINE_EXCEEDED:
    case B2.RESOURCE_EXHAUSTED:
    case B2.INTERNAL:
    case B2.UNAVAILABLE:
    case B2.UNAUTHENTICATED:
      return false;
    case B2.INVALID_ARGUMENT:
    case B2.NOT_FOUND:
    case B2.ALREADY_EXISTS:
    case B2.PERMISSION_DENIED:
    case B2.FAILED_PRECONDITION:
    case B2.ABORTED:
    case B2.OUT_OF_RANGE:
    case B2.UNIMPLEMENTED:
    case B2.DATA_LOSS:
      return true;
  }
}
function _s(t2) {
  if (void 0 === t2)
    return x2("GRPC error has no .code"), B2.UNKNOWN;
  switch (t2) {
    case ls.OK:
      return B2.OK;
    case ls.CANCELLED:
      return B2.CANCELLED;
    case ls.UNKNOWN:
      return B2.UNKNOWN;
    case ls.DEADLINE_EXCEEDED:
      return B2.DEADLINE_EXCEEDED;
    case ls.RESOURCE_EXHAUSTED:
      return B2.RESOURCE_EXHAUSTED;
    case ls.INTERNAL:
      return B2.INTERNAL;
    case ls.UNAVAILABLE:
      return B2.UNAVAILABLE;
    case ls.UNAUTHENTICATED:
      return B2.UNAUTHENTICATED;
    case ls.INVALID_ARGUMENT:
      return B2.INVALID_ARGUMENT;
    case ls.NOT_FOUND:
      return B2.NOT_FOUND;
    case ls.ALREADY_EXISTS:
      return B2.ALREADY_EXISTS;
    case ls.PERMISSION_DENIED:
      return B2.PERMISSION_DENIED;
    case ls.FAILED_PRECONDITION:
      return B2.FAILED_PRECONDITION;
    case ls.ABORTED:
      return B2.ABORTED;
    case ls.OUT_OF_RANGE:
      return B2.OUT_OF_RANGE;
    case ls.UNIMPLEMENTED:
      return B2.UNIMPLEMENTED;
    case ls.DATA_LOSS:
      return B2.DATA_LOSS;
    default:
      return $();
  }
}
(fs = ls || (ls = {}))[fs.OK = 0] = "OK", fs[fs.CANCELLED = 1] = "CANCELLED", fs[fs.UNKNOWN = 2] = "UNKNOWN", fs[fs.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", fs[fs.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", fs[fs.NOT_FOUND = 5] = "NOT_FOUND", fs[fs.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", fs[fs.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", fs[fs.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", fs[fs.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", fs[fs.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", fs[fs.ABORTED = 10] = "ABORTED", fs[fs.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", fs[fs.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", fs[fs.INTERNAL = 13] = "INTERNAL", fs[fs.UNAVAILABLE = 14] = "UNAVAILABLE", fs[fs.DATA_LOSS = 15] = "DATA_LOSS";
var ws = class {
  constructor(t2, e) {
    this.mapKeyFn = t2, this.equalsFn = e, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 !== n) {
      for (const [e2, s] of n)
        if (this.equalsFn(e2, t2))
          return s;
    }
  }
  has(t2) {
    return void 0 !== this.get(t2);
  }
  /** Put this key and value in the map. */
  set(t2, e) {
    const n = this.mapKeyFn(t2), s = this.inner[n];
    if (void 0 === s)
      return this.inner[n] = [[t2, e]], void this.innerSize++;
    for (let n2 = 0; n2 < s.length; n2++)
      if (this.equalsFn(s[n2][0], t2))
        return void (s[n2] = [t2, e]);
    s.push([t2, e]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 === n)
      return false;
    for (let s = 0; s < n.length; s++)
      if (this.equalsFn(n[s][0], t2))
        return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), this.innerSize--, true;
    return false;
  }
  forEach(t2) {
    Ut(this.inner, (e, n) => {
      for (const [e2, s] of n)
        t2(e2, s);
    });
  }
  isEmpty() {
    return Kt(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var ms = new We(ct.comparator);
function gs() {
  return ms;
}
var ys = new We(ct.comparator);
function ps(...t2) {
  let e = ys;
  for (const n of t2)
    e = e.insert(n.key, n);
  return e;
}
function Is(t2) {
  let e = ys;
  return t2.forEach((t3, n) => e = e.insert(t3, n.overlayedDocument)), e;
}
function Ts() {
  return As();
}
function Es() {
  return As();
}
function As() {
  return new ws((t2) => t2.toString(), (t2, e) => t2.isEqual(e));
}
var Rs = new We(ct.comparator);
var Ps = new Ye(ct.comparator);
function vs(...t2) {
  let e = Ps;
  for (const n of t2)
    e = e.add(n);
  return e;
}
var bs = new Ye(X2);
function Vs() {
  return bs;
}
var Ss = class {
  constructor(t2, e, n, s, i) {
    this.snapshotVersion = t2, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, this.resolvedLimboDocuments = i;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(t2, e, n) {
    const s = /* @__PURE__ */ new Map();
    return s.set(t2, Ds.createSynthesizedTargetChangeForCurrentChange(t2, e, n)), new Ss(st.min(), s, Vs(), gs(), vs());
  }
};
var Ds = class {
  constructor(t2, e, n, s, i) {
    this.resumeToken = t2, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, this.removedDocuments = i;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(t2, e, n) {
    return new Ds(n, e, vs(), vs(), vs());
  }
};
var Cs = class {
  constructor(t2, e, n, s) {
    this.Et = t2, this.removedTargetIds = e, this.key = n, this.At = s;
  }
};
var xs = class {
  constructor(t2, e) {
    this.targetId = t2, this.Rt = e;
  }
};
var Ns = class {
  constructor(t2, e, n = Ht.EMPTY_BYTE_STRING, s = null) {
    this.state = t2, this.targetIds = e, this.resumeToken = n, this.cause = s;
  }
};
var ks = class {
  constructor() {
    this.Pt = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.vt = Os(), /** See public getters for explanations of these fields. */
    this.bt = Ht.EMPTY_BYTE_STRING, this.Vt = false, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.St = true;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.Vt;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.bt;
  }
  /** Whether this target has pending target adds or target removes. */
  get Dt() {
    return 0 !== this.Pt;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get Ct() {
    return this.St;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  xt(t2) {
    t2.approximateByteSize() > 0 && (this.St = true, this.bt = t2);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  Nt() {
    let t2 = vs(), e = vs(), n = vs();
    return this.vt.forEach((s, i) => {
      switch (i) {
        case 0:
          t2 = t2.add(s);
          break;
        case 2:
          e = e.add(s);
          break;
        case 1:
          n = n.add(s);
          break;
        default:
          $();
      }
    }), new Ds(this.bt, this.Vt, t2, e, n);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  kt() {
    this.St = false, this.vt = Os();
  }
  $t(t2, e) {
    this.St = true, this.vt = this.vt.insert(t2, e);
  }
  Mt(t2) {
    this.St = true, this.vt = this.vt.remove(t2);
  }
  Ot() {
    this.Pt += 1;
  }
  Ft() {
    this.Pt -= 1;
  }
  Bt() {
    this.St = true, this.Vt = true;
  }
};
var $s = class {
  constructor(t2) {
    this.Lt = t2, /** The internal state of all tracked targets. */
    this.qt = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.Ut = gs(), /** A mapping of document keys to their set of target IDs. */
    this.Kt = Ms(), /**
     * A list of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Gt = new Ye(X2);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  Qt(t2) {
    for (const e of t2.Et)
      t2.At && t2.At.isFoundDocument() ? this.jt(e, t2.At) : this.zt(e, t2.key, t2.At);
    for (const e of t2.removedTargetIds)
      this.zt(e, t2.key, t2.At);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  Wt(t2) {
    this.forEachTarget(t2, (e) => {
      const n = this.Ht(e);
      switch (t2.state) {
        case 0:
          this.Jt(e) && n.xt(t2.resumeToken);
          break;
        case 1:
          n.Ft(), n.Dt || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          n.kt(), n.xt(t2.resumeToken);
          break;
        case 2:
          n.Ft(), n.Dt || this.removeTarget(e);
          break;
        case 3:
          this.Jt(e) && (n.Bt(), n.xt(t2.resumeToken));
          break;
        case 4:
          this.Jt(e) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.Yt(e), n.xt(t2.resumeToken));
          break;
        default:
          $();
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(t2, e) {
    t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.qt.forEach((t3, n) => {
      this.Jt(n) && e(n);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  Zt(t2) {
    const e = t2.targetId, n = t2.Rt.count, s = this.Xt(e);
    if (s) {
      const t3 = s.target;
      if (an(t3))
        if (0 === n) {
          const n2 = new ct(t3.path);
          this.zt(e, n2, sn.newNoDocument(n2, st.min()));
        } else
          M2(1 === n);
      else {
        this.te(e) !== n && // Existence filter mismatch: We reset the mapping and raise a new
        // snapshot with `isFromCache:true`.
        (this.Yt(e), this.Gt = this.Gt.add(e));
      }
    }
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  ee(t2) {
    const e = /* @__PURE__ */ new Map();
    this.qt.forEach((n2, s2) => {
      const i = this.Xt(s2);
      if (i) {
        if (n2.current && an(i.target)) {
          const e2 = new ct(i.target.path);
          null !== this.Ut.get(e2) || this.ne(s2, e2) || this.zt(s2, e2, sn.newNoDocument(e2, t2));
        }
        n2.Ct && (e.set(s2, n2.Nt()), n2.kt());
      }
    });
    let n = vs();
    this.Kt.forEach((t3, e2) => {
      let s2 = true;
      e2.forEachWhile((t4) => {
        const e3 = this.Xt(t4);
        return !e3 || 2 === e3.purpose || (s2 = false, false);
      }), s2 && (n = n.add(t3));
    }), this.Ut.forEach((e2, n2) => n2.setReadTime(t2));
    const s = new Ss(t2, e, this.Gt, this.Ut, n);
    return this.Ut = gs(), this.Kt = Ms(), this.Gt = new Ye(X2), s;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  jt(t2, e) {
    if (!this.Jt(t2))
      return;
    const n = this.ne(t2, e.key) ? 2 : 0;
    this.Ht(t2).$t(e.key, n), this.Ut = this.Ut.insert(e.key, e), this.Kt = this.Kt.insert(e.key, this.se(e.key).add(t2));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  zt(t2, e, n) {
    if (!this.Jt(t2))
      return;
    const s = this.Ht(t2);
    this.ne(t2, e) ? s.$t(
      e,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      s.Mt(e)
    ), this.Kt = this.Kt.insert(e, this.se(e).delete(t2)), n && (this.Ut = this.Ut.insert(e, n));
  }
  removeTarget(t2) {
    this.qt.delete(t2);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  te(t2) {
    const e = this.Ht(t2).Nt();
    return this.Lt.getRemoteKeysForTarget(t2).size + e.addedDocuments.size - e.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  Ot(t2) {
    this.Ht(t2).Ot();
  }
  Ht(t2) {
    let e = this.qt.get(t2);
    return e || (e = new ks(), this.qt.set(t2, e)), e;
  }
  se(t2) {
    let e = this.Kt.get(t2);
    return e || (e = new Ye(X2), this.Kt = this.Kt.insert(t2, e)), e;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  Jt(t2) {
    const e = null !== this.Xt(t2);
    return e || C2("WatchChangeAggregator", "Detected inactive target", t2), e;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  Xt(t2) {
    const e = this.qt.get(t2);
    return e && e.Dt ? null : this.Lt.ie(t2);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  Yt(t2) {
    this.qt.set(t2, new ks());
    this.Lt.getRemoteKeysForTarget(t2).forEach((e) => {
      this.zt(
        t2,
        e,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  ne(t2, e) {
    return this.Lt.getRemoteKeysForTarget(t2).has(e);
  }
};
function Ms() {
  return new We(ct.comparator);
}
function Os() {
  return new We(ct.comparator);
}
var Fs = (() => {
  const t2 = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return t2;
})();
var Bs = (() => {
  const t2 = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return t2;
})();
var Ls = (() => {
  const t2 = {
    and: "AND",
    or: "OR"
  };
  return t2;
})();
var qs = class {
  constructor(t2, e) {
    this.databaseId = t2, this.yt = e;
  }
};
function Us(t2, e) {
  if (t2.yt) {
    return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Ks(t2, e) {
  return t2.yt ? e.toBase64() : e.toUint8Array();
}
function Gs(t2, e) {
  return Us(t2, e.toTimestamp());
}
function Qs(t2) {
  return M2(!!t2), st.fromTimestamp(function(t3) {
    const e = Yt(t3);
    return new nt(e.seconds, e.nanos);
  }(t2));
}
function js(t2, e) {
  return function(t3) {
    return new rt(["projects", t3.projectId, "databases", t3.database]);
  }(t2).child("documents").child(e).canonicalString();
}
function zs(t2) {
  const e = rt.fromString(t2);
  return M2(pi(e)), e;
}
function Ws(t2, e) {
  return js(t2.databaseId, e.path);
}
function Hs(t2, e) {
  const n = zs(e);
  if (n.get(1) !== t2.databaseId.projectId)
    throw new L2(B2.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t2.databaseId.projectId);
  if (n.get(3) !== t2.databaseId.database)
    throw new L2(B2.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t2.databaseId.database);
  return new ct(Xs(n));
}
function Js(t2, e) {
  return js(t2.databaseId, e);
}
function Ys(t2) {
  const e = zs(t2);
  return 4 === e.length ? rt.emptyPath() : Xs(e);
}
function Zs(t2) {
  return new rt(["projects", t2.databaseId.projectId, "databases", t2.databaseId.database]).canonicalString();
}
function Xs(t2) {
  return M2(t2.length > 4 && "documents" === t2.get(4)), t2.popFirst(5);
}
function ti(t2, e, n) {
  return {
    name: Ws(t2, e),
    fields: n.value.mapValue.fields
  };
}
function ei(t2, e, n) {
  const s = Hs(t2, e.name), i = Qs(e.updateTime), r = e.createTime ? Qs(e.createTime) : st.min(), o = new en({
    mapValue: {
      fields: e.fields
    }
  }), u = sn.newFoundDocument(s, i, r, o);
  return n && u.setHasCommittedMutations(), n ? u.setHasCommittedMutations() : u;
}
function ni(t2, e) {
  return "found" in e ? function(t3, e2) {
    M2(!!e2.found), e2.found.name, e2.found.updateTime;
    const n = Hs(t3, e2.found.name), s = Qs(e2.found.updateTime), i = e2.found.createTime ? Qs(e2.found.createTime) : st.min(), r = new en({
      mapValue: {
        fields: e2.found.fields
      }
    });
    return sn.newFoundDocument(n, s, i, r);
  }(t2, e) : "missing" in e ? function(t3, e2) {
    M2(!!e2.missing), M2(!!e2.readTime);
    const n = Hs(t3, e2.missing), s = Qs(e2.readTime);
    return sn.newNoDocument(n, s);
  }(t2, e) : $();
}
function si(t2, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const s = function(t3) {
      return "NO_CHANGE" === t3 ? 0 : "ADD" === t3 ? 1 : "REMOVE" === t3 ? 2 : "CURRENT" === t3 ? 3 : "RESET" === t3 ? 4 : $();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t3, e2) {
      return t3.yt ? (M2(void 0 === e2 || "string" == typeof e2), Ht.fromBase64String(e2 || "")) : (M2(void 0 === e2 || e2 instanceof Uint8Array), Ht.fromUint8Array(e2 || new Uint8Array()));
    }(t2, e.targetChange.resumeToken), o = e.targetChange.cause, u = o && function(t3) {
      const e2 = void 0 === t3.code ? B2.UNKNOWN : _s(t3.code);
      return new L2(e2, t3.message || "");
    }(o);
    n = new Ns(s, i, r, u || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const s = e.documentChange;
    s.document, s.document.name, s.document.updateTime;
    const i = Hs(t2, s.document.name), r = Qs(s.document.updateTime), o = s.document.createTime ? Qs(s.document.createTime) : st.min(), u = new en({
      mapValue: {
        fields: s.document.fields
      }
    }), c = sn.newFoundDocument(i, r, o, u), a = s.targetIds || [], h = s.removedTargetIds || [];
    n = new Cs(a, h, c.key, c);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const s = e.documentDelete;
    s.document;
    const i = Hs(t2, s.document), r = s.readTime ? Qs(s.readTime) : st.min(), o = sn.newNoDocument(i, r), u = s.removedTargetIds || [];
    n = new Cs([], u, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const s = e.documentRemove;
    s.document;
    const i = Hs(t2, s.document), r = s.removedTargetIds || [];
    n = new Cs([], r, i, null);
  } else {
    if (!("filter" in e))
      return $();
    {
      e.filter;
      const t3 = e.filter;
      t3.targetId;
      const s = t3.count || 0, i = new hs(s), r = t3.targetId;
      n = new xs(r, i);
    }
  }
  return n;
}
function ii(t2, e) {
  let n;
  if (e instanceof ss)
    n = {
      update: ti(t2, e.key, e.value)
    };
  else if (e instanceof cs)
    n = {
      delete: Ws(t2, e.key)
    };
  else if (e instanceof is)
    n = {
      update: ti(t2, e.key, e.data),
      updateMask: yi(e.fieldMask)
    };
  else {
    if (!(e instanceof as))
      return $();
    n = {
      verify: Ws(t2, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t3) => function(t4, e2) {
    const n2 = e2.transform;
    if (n2 instanceof Fn)
      return {
        fieldPath: e2.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (n2 instanceof Bn)
      return {
        fieldPath: e2.field.canonicalString(),
        appendMissingElements: {
          values: n2.elements
        }
      };
    if (n2 instanceof qn)
      return {
        fieldPath: e2.field.canonicalString(),
        removeAllFromArray: {
          values: n2.elements
        }
      };
    if (n2 instanceof Kn)
      return {
        fieldPath: e2.field.canonicalString(),
        increment: n2.It
      };
    throw $();
  }(0, t3))), e.precondition.isNone || (n.currentDocument = function(t3, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: Gs(t3, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : $();
  }(t2, e.precondition)), n;
}
function ri(t2, e) {
  const n = e.currentDocument ? function(t3) {
    return void 0 !== t3.updateTime ? Hn.updateTime(Qs(t3.updateTime)) : void 0 !== t3.exists ? Hn.exists(t3.exists) : Hn.none();
  }(e.currentDocument) : Hn.none(), s = e.updateTransforms ? e.updateTransforms.map((e2) => function(t3, e3) {
    let n2 = null;
    if ("setToServerValue" in e3)
      M2("REQUEST_TIME" === e3.setToServerValue), n2 = new Fn();
    else if ("appendMissingElements" in e3) {
      const t4 = e3.appendMissingElements.values || [];
      n2 = new Bn(t4);
    } else if ("removeAllFromArray" in e3) {
      const t4 = e3.removeAllFromArray.values || [];
      n2 = new qn(t4);
    } else
      "increment" in e3 ? n2 = new Kn(t3, e3.increment) : $();
    const s2 = ut.fromServerFormat(e3.fieldPath);
    return new jn(s2, n2);
  }(t2, e2)) : [];
  if (e.update) {
    e.update.name;
    const i = Hs(t2, e.update.name), r = new en({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      const t3 = function(t4) {
        const e2 = t4.fieldPaths || [];
        return new tn(e2.map((t5) => ut.fromServerFormat(t5)));
      }(e.updateMask);
      return new is(i, r, t3, n, s);
    }
    return new ss(i, r, n, s);
  }
  if (e.delete) {
    const s2 = Hs(t2, e.delete);
    return new cs(s2, n);
  }
  if (e.verify) {
    const s2 = Hs(t2, e.verify);
    return new as(s2, n);
  }
  return $();
}
function oi(t2, e) {
  return t2 && t2.length > 0 ? (M2(void 0 !== e), t2.map((t3) => function(t4, e2) {
    let n = t4.updateTime ? Qs(t4.updateTime) : Qs(e2);
    return n.isEqual(st.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (n = Qs(e2)), new Wn(n, t4.transformResults || []);
  }(t3, e))) : [];
}
function ui(t2, e) {
  return {
    documents: [Js(t2, e.path)]
  };
}
function ci(t2, e) {
  const n = {
    structuredQuery: {}
  }, s = e.path;
  null !== e.collectionGroup ? (n.parent = Js(t2, s), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n.parent = Js(t2, s.popLast()), n.structuredQuery.from = [{
    collectionId: s.lastSegment()
  }]);
  const i = function(t3) {
    if (0 === t3.length)
      return;
    return gi(Se.create(
      t3,
      "and"
      /* CompositeOperator.AND */
    ));
  }(e.filters);
  i && (n.structuredQuery.where = i);
  const r = function(t3) {
    if (0 === t3.length)
      return;
    return t3.map((t4) => (
      // visible for testing
      function(t5) {
        return {
          field: wi(t5.field),
          direction: fi(t5.dir)
        };
      }(t4)
    ));
  }(e.orderBy);
  r && (n.structuredQuery.orderBy = r);
  const o = function(t3, e2) {
    return t3.yt || Gt(e2) ? e2 : {
      value: e2
    };
  }(t2, e.limit);
  var u;
  return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
    before: (u = e.startAt).inclusive,
    values: u.position
  }), e.endAt && (n.structuredQuery.endAt = function(t3) {
    return {
      before: !t3.inclusive,
      values: t3.position
    };
  }(e.endAt)), n;
}
function ai(t2) {
  let e = Ys(t2.parent);
  const n = t2.structuredQuery, s = n.from ? n.from.length : 0;
  let i = null;
  if (s > 0) {
    M2(1 === s);
    const t3 = n.from[0];
    t3.allDescendants ? i = t3.collectionId : e = e.child(t3.collectionId);
  }
  let r = [];
  n.where && (r = function(t3) {
    const e2 = li(t3);
    if (e2 instanceof Se && xe(e2))
      return e2.getFilters();
    return [e2];
  }(n.where));
  let o = [];
  n.orderBy && (o = n.orderBy.map((t3) => function(t4) {
    return new je(
      mi(t4.field),
      // visible for testing
      function(t5) {
        switch (t5) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t4.direction)
    );
  }(t3)));
  let u = null;
  n.limit && (u = function(t3) {
    let e2;
    return e2 = "object" == typeof t3 ? t3.value : t3, Gt(e2) ? null : e2;
  }(n.limit));
  let c = null;
  n.startAt && (c = function(t3) {
    const e2 = !!t3.before, n2 = t3.values || [];
    return new Re(n2, e2);
  }(n.startAt));
  let a = null;
  return n.endAt && (a = function(t3) {
    const e2 = !t3.before, n2 = t3.values || [];
    return new Re(n2, e2);
  }(n.endAt)), _n(e, i, o, r, u, "F", c, a);
}
function hi(t2, e) {
  const n = function(t3, e2) {
    switch (e2) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return $();
    }
  }(0, e.purpose);
  return null == n ? null : {
    "goog-listen-tags": n
  };
}
function li(t2) {
  return void 0 !== t2.unaryFilter ? function(t3) {
    switch (t3.unaryFilter.op) {
      case "IS_NAN":
        const e = mi(t3.unaryFilter.field);
        return Ve.create(e, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n = mi(t3.unaryFilter.field);
        return Ve.create(n, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const s = mi(t3.unaryFilter.field);
        return Ve.create(s, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i = mi(t3.unaryFilter.field);
        return Ve.create(i, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return $();
    }
  }(t2) : void 0 !== t2.fieldFilter ? function(t3) {
    return Ve.create(mi(t3.fieldFilter.field), function(t4) {
      switch (t4) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return $();
      }
    }(t3.fieldFilter.op), t3.fieldFilter.value);
  }(t2) : void 0 !== t2.compositeFilter ? function(t3) {
    return Se.create(t3.compositeFilter.filters.map((t4) => li(t4)), function(t4) {
      switch (t4) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return $();
      }
    }(t3.compositeFilter.op));
  }(t2) : $();
}
function fi(t2) {
  return Fs[t2];
}
function di(t2) {
  return Bs[t2];
}
function _i(t2) {
  return Ls[t2];
}
function wi(t2) {
  return {
    fieldPath: t2.canonicalString()
  };
}
function mi(t2) {
  return ut.fromServerFormat(t2.fieldPath);
}
function gi(t2) {
  return t2 instanceof Ve ? function(t3) {
    if ("==" === t3.op) {
      if (me(t3.value))
        return {
          unaryFilter: {
            field: wi(t3.field),
            op: "IS_NAN"
          }
        };
      if (we(t3.value))
        return {
          unaryFilter: {
            field: wi(t3.field),
            op: "IS_NULL"
          }
        };
    } else if ("!=" === t3.op) {
      if (me(t3.value))
        return {
          unaryFilter: {
            field: wi(t3.field),
            op: "IS_NOT_NAN"
          }
        };
      if (we(t3.value))
        return {
          unaryFilter: {
            field: wi(t3.field),
            op: "IS_NOT_NULL"
          }
        };
    }
    return {
      fieldFilter: {
        field: wi(t3.field),
        op: di(t3.op),
        value: t3.value
      }
    };
  }(t2) : t2 instanceof Se ? function(t3) {
    const e = t3.getFilters().map((t4) => gi(t4));
    if (1 === e.length)
      return e[0];
    return {
      compositeFilter: {
        op: _i(t3.op),
        filters: e
      }
    };
  }(t2) : $();
}
function yi(t2) {
  const e = [];
  return t2.fields.forEach((t3) => e.push(t3.canonicalString())), {
    fieldPaths: e
  };
}
function pi(t2) {
  return t2.length >= 4 && "projects" === t2.get(0) && "databases" === t2.get(2);
}
function Ii(t2) {
  let e = "";
  for (let n = 0; n < t2.length; n++)
    e.length > 0 && (e = Ei(e)), e = Ti(t2.get(n), e);
  return Ei(e);
}
function Ti(t2, e) {
  let n = e;
  const s = t2.length;
  for (let e2 = 0; e2 < s; e2++) {
    const s2 = t2.charAt(e2);
    switch (s2) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += s2;
    }
  }
  return n;
}
function Ei(t2) {
  return t2 + "";
}
function Ai(t2) {
  const e = t2.length;
  if (M2(e >= 2), 2 === e)
    return M2("" === t2.charAt(0) && "" === t2.charAt(1)), rt.emptyPath();
  const n = e - 2, s = [];
  let i = "";
  for (let r = 0; r < e; ) {
    const e2 = t2.indexOf("", r);
    (e2 < 0 || e2 > n) && $();
    switch (t2.charAt(e2 + 1)) {
      case "":
        const n2 = t2.substring(r, e2);
        let o;
        0 === i.length ? (
          // Avoid copying for the common case of a segment that excludes \0
          // and \001
          o = n2
        ) : (i += n2, o = i, i = ""), s.push(o);
        break;
      case "":
        i += t2.substring(r, e2), i += "\0";
        break;
      case "":
        i += t2.substring(r, e2 + 1);
        break;
      default:
        $();
    }
    r = e2 + 2;
  }
  return new rt(s);
}
var Ri = ["userId", "batchId"];
function Pi(t2, e) {
  return [t2, Ii(e)];
}
function vi(t2, e, n) {
  return [t2, Ii(e), n];
}
var bi = {};
var Vi = ["prefixPath", "collectionGroup", "readTime", "documentId"];
var Si = ["prefixPath", "collectionGroup", "documentId"];
var Di = ["collectionGroup", "readTime", "prefixPath", "documentId"];
var Ci = ["canonicalId", "targetId"];
var xi = ["targetId", "path"];
var Ni = ["path", "targetId"];
var ki = ["collectionId", "parent"];
var $i = ["indexId", "uid"];
var Mi = ["uid", "sequenceNumber"];
var Oi = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"];
var Fi = ["indexId", "uid", "orderedDocumentKey"];
var Bi = ["userId", "collectionPath", "documentId"];
var Li = ["userId", "collectionPath", "largestBatchId"];
var qi = ["userId", "collectionGroup", "largestBatchId"];
var Ui = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
var Ki = [...Ui, "documentOverlays"];
var Gi = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
var Qi = Gi;
var ji = [...Qi, "indexConfiguration", "indexState", "indexEntries"];
var zi = class extends Tt {
  constructor(t2, e) {
    super(), this.re = t2, this.currentSequenceNumber = e;
  }
};
function Wi(t2, e) {
  const n = F(t2);
  return Pt.M(n.re, e);
}
var Hi = class {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(t2, e, n, s) {
    this.batchId = t2, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(t2, e) {
    const n = e.mutationResults;
    for (let e2 = 0; e2 < this.mutations.length; e2++) {
      const s = this.mutations[e2];
      if (s.key.isEqual(t2.key)) {
        Xn(s, t2, n[e2]);
      }
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(t2, e) {
    for (const n of this.baseMutations)
      n.key.isEqual(t2.key) && (e = ts(n, t2, e, this.localWriteTime));
    for (const n of this.mutations)
      n.key.isEqual(t2.key) && (e = ts(n, t2, e, this.localWriteTime));
    return e;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(t2, e) {
    const n = Es();
    return this.mutations.forEach((s) => {
      const i = t2.get(s.key), r = i.overlayedDocument;
      let o = this.applyToLocalView(r, i.mutatedFields);
      o = e.has(s.key) ? null : o;
      const u = Zn(r, o);
      null !== u && n.set(s.key, u), r.isValidDocument() || r.convertToNoDocument(st.min());
    }), n;
  }
  keys() {
    return this.mutations.reduce((t2, e) => t2.add(e.key), vs());
  }
  isEqual(t2) {
    return this.batchId === t2.batchId && tt(this.mutations, t2.mutations, (t3, e) => ns(t3, e)) && tt(this.baseMutations, t2.baseMutations, (t3, e) => ns(t3, e));
  }
};
var Ji = class {
  constructor(t2, e, n, s) {
    this.batch = t2, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(t2, e, n) {
    M2(t2.mutations.length === n.length);
    let s = Rs;
    const i = t2.mutations;
    for (let t3 = 0; t3 < i.length; t3++)
      s = s.insert(i[t3].key, n[t3].version);
    return new Ji(t2, e, n, s);
  }
};
var Yi = class {
  constructor(t2, e) {
    this.largestBatchId = t2, this.mutation = e;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t2) {
    return null !== t2 && this.mutation === t2.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
};
var Zi = class {
  constructor(t2, e, n, s, i = st.min(), r = st.min(), o = Ht.EMPTY_BYTE_STRING) {
    this.target = t2, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(t2) {
    return new Zi(this.target, this.targetId, this.purpose, t2, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(t2, e) {
    return new Zi(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t2);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(t2) {
    return new Zi(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t2, this.resumeToken);
  }
};
var Xi = class {
  constructor(t2) {
    this.oe = t2;
  }
};
function tr(t2, e) {
  let n;
  if (e.document)
    n = ei(t2.oe, e.document, !!e.hasCommittedMutations);
  else if (e.noDocument) {
    const t3 = ct.fromSegments(e.noDocument.path), s = ir(e.noDocument.readTime);
    n = sn.newNoDocument(t3, s), e.hasCommittedMutations && n.setHasCommittedMutations();
  } else {
    if (!e.unknownDocument)
      return $();
    {
      const t3 = ct.fromSegments(e.unknownDocument.path), s = ir(e.unknownDocument.version);
      n = sn.newUnknownDocument(t3, s);
    }
  }
  return e.readTime && n.setReadTime(function(t3) {
    const e2 = new nt(t3[0], t3[1]);
    return st.fromTimestamp(e2);
  }(e.readTime)), n;
}
function er(t2, e) {
  const n = e.key, s = {
    prefixPath: n.getCollectionPath().popLast().toArray(),
    collectionGroup: n.collectionGroup,
    documentId: n.path.lastSegment(),
    readTime: nr(e.readTime),
    hasCommittedMutations: e.hasCommittedMutations
  };
  if (e.isFoundDocument())
    s.document = function(t3, e2) {
      return {
        name: Ws(t3, e2.key),
        fields: e2.data.value.mapValue.fields,
        updateTime: Us(t3, e2.version.toTimestamp()),
        createTime: Us(t3, e2.createTime.toTimestamp())
      };
    }(t2.oe, e);
  else if (e.isNoDocument())
    s.noDocument = {
      path: n.path.toArray(),
      readTime: sr(e.version)
    };
  else {
    if (!e.isUnknownDocument())
      return $();
    s.unknownDocument = {
      path: n.path.toArray(),
      version: sr(e.version)
    };
  }
  return s;
}
function nr(t2) {
  const e = t2.toTimestamp();
  return [e.seconds, e.nanoseconds];
}
function sr(t2) {
  const e = t2.toTimestamp();
  return {
    seconds: e.seconds,
    nanoseconds: e.nanoseconds
  };
}
function ir(t2) {
  const e = new nt(t2.seconds, t2.nanoseconds);
  return st.fromTimestamp(e);
}
function rr(t2, e) {
  const n = (e.baseMutations || []).map((e2) => ri(t2.oe, e2));
  for (let t3 = 0; t3 < e.mutations.length - 1; ++t3) {
    const n2 = e.mutations[t3];
    if (t3 + 1 < e.mutations.length && void 0 !== e.mutations[t3 + 1].transform) {
      const s2 = e.mutations[t3 + 1];
      n2.updateTransforms = s2.transform.fieldTransforms, e.mutations.splice(t3 + 1, 1), ++t3;
    }
  }
  const s = e.mutations.map((e2) => ri(t2.oe, e2)), i = nt.fromMillis(e.localWriteTimeMs);
  return new Hi(e.batchId, i, n, s);
}
function or(t2) {
  const e = ir(t2.readTime), n = void 0 !== t2.lastLimboFreeSnapshotVersion ? ir(t2.lastLimboFreeSnapshotVersion) : st.min();
  let s;
  var i;
  return void 0 !== t2.query.documents ? (M2(1 === (i = t2.query).documents.length), s = Tn(wn(Ys(i.documents[0])))) : s = function(t3) {
    return Tn(ai(t3));
  }(t2.query), new Zi(s, t2.targetId, 0, t2.lastListenSequenceNumber, e, n, Ht.fromBase64String(t2.resumeToken));
}
function ur(t2, e) {
  const n = sr(e.snapshotVersion), s = sr(e.lastLimboFreeSnapshotVersion);
  let i;
  i = an(e.target) ? ui(t2.oe, e.target) : ci(t2.oe, e.target);
  const r = e.resumeToken.toBase64();
  return {
    targetId: e.targetId,
    canonicalId: un(e.target),
    readTime: n,
    resumeToken: r,
    lastListenSequenceNumber: e.sequenceNumber,
    lastLimboFreeSnapshotVersion: s,
    query: i
  };
}
function cr(t2) {
  const e = ai({
    parent: t2.parent,
    structuredQuery: t2.structuredQuery
  });
  return "LAST" === t2.limitType ? An(
    e,
    e.limit,
    "L"
    /* LimitType.Last */
  ) : e;
}
function ar(t2, e) {
  return new Yi(e.largestBatchId, ri(t2.oe, e.overlayMutation));
}
function hr(t2, e) {
  const n = e.path.lastSegment();
  return [t2, Ii(e.path.popLast()), n];
}
function lr(t2, e, n, s) {
  return {
    indexId: t2,
    uid: e.uid || "",
    sequenceNumber: n,
    readTime: sr(s.readTime),
    documentKey: Ii(s.documentKey.path),
    largestBatchId: s.largestBatchId
  };
}
var fr = class {
  getBundleMetadata(t2, e) {
    return dr(t2).get(e).next((t3) => {
      if (t3)
        return {
          id: (e2 = t3).bundleId,
          createTime: ir(e2.createTime),
          version: e2.version
        };
      var e2;
    });
  }
  saveBundleMetadata(t2, e) {
    return dr(t2).put({
      bundleId: (n = e).id,
      createTime: sr(Qs(n.createTime)),
      version: n.version
    });
    var n;
  }
  getNamedQuery(t2, e) {
    return _r(t2).get(e).next((t3) => {
      if (t3)
        return {
          name: (e2 = t3).name,
          query: cr(e2.bundledQuery),
          readTime: ir(e2.readTime)
        };
      var e2;
    });
  }
  saveNamedQuery(t2, e) {
    return _r(t2).put(function(t3) {
      return {
        name: t3.name,
        readTime: sr(Qs(t3.readTime)),
        bundledQuery: t3.bundledQuery
      };
    }(e));
  }
};
function dr(t2) {
  return Wi(t2, "bundles");
}
function _r(t2) {
  return Wi(t2, "namedQueries");
}
var wr = class {
  /**
   * @param serializer - The document serializer.
   * @param userId - The userId for which we are accessing overlays.
   */
  constructor(t2, e) {
    this.Tt = t2, this.userId = e;
  }
  static ue(t2, e) {
    const n = e.uid || "";
    return new wr(t2, n);
  }
  getOverlay(t2, e) {
    return mr(t2).get(hr(this.userId, e)).next((t3) => t3 ? ar(this.Tt, t3) : null);
  }
  getOverlays(t2, e) {
    const n = Ts();
    return At.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n.set(e2, t3);
    })).next(() => n);
  }
  saveOverlays(t2, e, n) {
    const s = [];
    return n.forEach((n2, i) => {
      const r = new Yi(e, i);
      s.push(this.ce(t2, r));
    }), At.waitFor(s);
  }
  removeOverlaysForBatchId(t2, e, n) {
    const s = /* @__PURE__ */ new Set();
    e.forEach((t3) => s.add(Ii(t3.getCollectionPath())));
    const i = [];
    return s.forEach((e2) => {
      const s2 = IDBKeyRange.bound(
        [this.userId, e2, n],
        [this.userId, e2, n + 1],
        /*lowerOpen=*/
        false,
        /*upperOpen=*/
        true
      );
      i.push(mr(t2).Y("collectionPathOverlayIndex", s2));
    }), At.waitFor(i);
  }
  getOverlaysForCollection(t2, e, n) {
    const s = Ts(), i = Ii(e), r = IDBKeyRange.bound(
      [this.userId, i, n],
      [this.userId, i, Number.POSITIVE_INFINITY],
      /*lowerOpen=*/
      true
    );
    return mr(t2).W("collectionPathOverlayIndex", r).next((t3) => {
      for (const e2 of t3) {
        const t4 = ar(this.Tt, e2);
        s.set(t4.getKey(), t4);
      }
      return s;
    });
  }
  getOverlaysForCollectionGroup(t2, e, n, s) {
    const i = Ts();
    let r;
    const o = IDBKeyRange.bound(
      [this.userId, e, n],
      [this.userId, e, Number.POSITIVE_INFINITY],
      /*lowerOpen=*/
      true
    );
    return mr(t2).X({
      index: "collectionGroupOverlayIndex",
      range: o
    }, (t3, e2, n2) => {
      const o2 = ar(this.Tt, e2);
      i.size() < s || o2.largestBatchId === r ? (i.set(o2.getKey(), o2), r = o2.largestBatchId) : n2.done();
    }).next(() => i);
  }
  ce(t2, e) {
    return mr(t2).put(function(t3, e2, n) {
      const [s, i, r] = hr(e2, n.mutation.key);
      return {
        userId: e2,
        collectionPath: i,
        documentId: r,
        collectionGroup: n.mutation.key.getCollectionGroup(),
        largestBatchId: n.largestBatchId,
        overlayMutation: ii(t3.oe, n.mutation)
      };
    }(this.Tt, this.userId, e));
  }
};
function mr(t2) {
  return Wi(t2, "documentOverlays");
}
var gr = class {
  constructor() {
  }
  // The write methods below short-circuit writing terminators for values
  // containing a (terminating) truncated value.
  // As an example, consider the resulting encoding for:
  // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
  // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
  // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
  /** Writes an index value.  */
  ae(t2, e) {
    this.he(t2, e), // Write separator to split index values
    // (see go/firestore-storage-format#encodings).
    e.le();
  }
  he(t2, e) {
    if ("nullValue" in t2)
      this.fe(e, 5);
    else if ("booleanValue" in t2)
      this.fe(e, 10), e.de(t2.booleanValue ? 1 : 0);
    else if ("integerValue" in t2)
      this.fe(e, 15), e.de(Zt(t2.integerValue));
    else if ("doubleValue" in t2) {
      const n = Zt(t2.doubleValue);
      isNaN(n) ? this.fe(e, 13) : (this.fe(e, 15), Qt(n) ? (
        // -0.0, 0 and 0.0 are all considered the same
        e.de(0)
      ) : e.de(n));
    } else if ("timestampValue" in t2) {
      const n = t2.timestampValue;
      this.fe(e, 20), "string" == typeof n ? e._e(n) : (e._e(`${n.seconds || ""}`), e.de(n.nanos || 0));
    } else if ("stringValue" in t2)
      this.we(t2.stringValue, e), this.me(e);
    else if ("bytesValue" in t2)
      this.fe(e, 30), e.ge(Xt(t2.bytesValue)), this.me(e);
    else if ("referenceValue" in t2)
      this.ye(t2.referenceValue, e);
    else if ("geoPointValue" in t2) {
      const n = t2.geoPointValue;
      this.fe(e, 45), e.de(n.latitude || 0), e.de(n.longitude || 0);
    } else
      "mapValue" in t2 ? pe(t2) ? this.fe(e, Number.MAX_SAFE_INTEGER) : (this.pe(t2.mapValue, e), this.me(e)) : "arrayValue" in t2 ? (this.Ie(t2.arrayValue, e), this.me(e)) : $();
  }
  we(t2, e) {
    this.fe(e, 25), this.Te(t2, e);
  }
  Te(t2, e) {
    e._e(t2);
  }
  pe(t2, e) {
    const n = t2.fields || {};
    this.fe(e, 55);
    for (const t3 of Object.keys(n))
      this.we(t3, e), this.he(n[t3], e);
  }
  Ie(t2, e) {
    const n = t2.values || [];
    this.fe(e, 50);
    for (const t3 of n)
      this.he(t3, e);
  }
  ye(t2, e) {
    this.fe(e, 37);
    ct.fromName(t2).path.forEach((t3) => {
      this.fe(e, 60), this.Te(t3, e);
    });
  }
  fe(t2, e) {
    t2.de(e);
  }
  me(t2) {
    t2.de(2);
  }
};
gr.Ee = new gr();
function yr(t2) {
  if (0 === t2)
    return 8;
  let e = 0;
  return t2 >> 4 == 0 && // Test if the first four bits are zero.
  (e += 4, t2 <<= 4), t2 >> 6 == 0 && // Test if the first two (or next two) bits are zero.
  (e += 2, t2 <<= 2), t2 >> 7 == 0 && // Test if the remaining bit is zero.
  (e += 1), e;
}
function pr(t2) {
  const e = 64 - function(t3) {
    let e2 = 0;
    for (let n = 0; n < 8; ++n) {
      const s = yr(255 & t3[n]);
      if (e2 += s, 8 !== s)
        break;
    }
    return e2;
  }(t2);
  return Math.ceil(e / 8);
}
var Ir = class {
  constructor() {
    this.buffer = new Uint8Array(1024), this.position = 0;
  }
  Ae(t2) {
    const e = t2[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; )
      this.Re(n.value), n = e.next();
    this.Pe();
  }
  ve(t2) {
    const e = t2[Symbol.iterator]();
    let n = e.next();
    for (; !n.done; )
      this.be(n.value), n = e.next();
    this.Ve();
  }
  /** Writes utf8 bytes into this byte sequence, ascending. */
  Se(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.Re(t3);
      else if (t3 < 2048)
        this.Re(960 | t3 >>> 6), this.Re(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.Re(480 | t3 >>> 12), this.Re(128 | 63 & t3 >>> 6), this.Re(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.Re(240 | t4 >>> 18), this.Re(128 | 63 & t4 >>> 12), this.Re(128 | 63 & t4 >>> 6), this.Re(128 | 63 & t4);
      }
    }
    this.Pe();
  }
  /** Writes utf8 bytes into this byte sequence, descending */
  De(t2) {
    for (const e of t2) {
      const t3 = e.charCodeAt(0);
      if (t3 < 128)
        this.be(t3);
      else if (t3 < 2048)
        this.be(960 | t3 >>> 6), this.be(128 | 63 & t3);
      else if (e < "\uD800" || "\uDBFF" < e)
        this.be(480 | t3 >>> 12), this.be(128 | 63 & t3 >>> 6), this.be(128 | 63 & t3);
      else {
        const t4 = e.codePointAt(0);
        this.be(240 | t4 >>> 18), this.be(128 | 63 & t4 >>> 12), this.be(128 | 63 & t4 >>> 6), this.be(128 | 63 & t4);
      }
    }
    this.Ve();
  }
  Ce(t2) {
    const e = this.xe(t2), n = pr(e);
    this.Ne(1 + n), this.buffer[this.position++] = 255 & n;
    for (let t3 = e.length - n; t3 < e.length; ++t3)
      this.buffer[this.position++] = 255 & e[t3];
  }
  ke(t2) {
    const e = this.xe(t2), n = pr(e);
    this.Ne(1 + n), this.buffer[this.position++] = ~(255 & n);
    for (let t3 = e.length - n; t3 < e.length; ++t3)
      this.buffer[this.position++] = ~(255 & e[t3]);
  }
  /**
   * Writes the "infinity" byte sequence that sorts after all other byte
   * sequences written in ascending order.
   */
  $e() {
    this.Me(255), this.Me(255);
  }
  /**
   * Writes the "infinity" byte sequence that sorts before all other byte
   * sequences written in descending order.
   */
  Oe() {
    this.Fe(255), this.Fe(255);
  }
  /**
   * Resets the buffer such that it is the same as when it was newly
   * constructed.
   */
  reset() {
    this.position = 0;
  }
  seed(t2) {
    this.Ne(t2.length), this.buffer.set(t2, this.position), this.position += t2.length;
  }
  /** Makes a copy of the encoded bytes in this buffer.  */
  Be() {
    return this.buffer.slice(0, this.position);
  }
  /**
   * Encodes `val` into an encoding so that the order matches the IEEE 754
   * floating-point comparison results with the following exceptions:
   *   -0.0 < 0.0
   *   all non-NaN < NaN
   *   NaN = NaN
   */
  xe(t2) {
    const e = (
      /** Converts a JavaScript number to a byte array (using big endian encoding). */
      function(t3) {
        const e2 = new DataView(new ArrayBuffer(8));
        return e2.setFloat64(
          0,
          t3,
          /* littleEndian= */
          false
        ), new Uint8Array(e2.buffer);
      }(t2)
    ), n = 0 != (128 & e[0]);
    e[0] ^= n ? 255 : 128;
    for (let t3 = 1; t3 < e.length; ++t3)
      e[t3] ^= n ? 255 : 0;
    return e;
  }
  /** Writes a single byte ascending to the buffer. */
  Re(t2) {
    const e = 255 & t2;
    0 === e ? (this.Me(0), this.Me(255)) : 255 === e ? (this.Me(255), this.Me(0)) : this.Me(e);
  }
  /** Writes a single byte descending to the buffer.  */
  be(t2) {
    const e = 255 & t2;
    0 === e ? (this.Fe(0), this.Fe(255)) : 255 === e ? (this.Fe(255), this.Fe(0)) : this.Fe(t2);
  }
  Pe() {
    this.Me(0), this.Me(1);
  }
  Ve() {
    this.Fe(0), this.Fe(1);
  }
  Me(t2) {
    this.Ne(1), this.buffer[this.position++] = t2;
  }
  Fe(t2) {
    this.Ne(1), this.buffer[this.position++] = ~t2;
  }
  Ne(t2) {
    const e = t2 + this.position;
    if (e <= this.buffer.length)
      return;
    let n = 2 * this.buffer.length;
    n < e && (n = e);
    const s = new Uint8Array(n);
    s.set(this.buffer), // copy old data
    this.buffer = s;
  }
};
var Tr = class {
  constructor(t2) {
    this.Le = t2;
  }
  ge(t2) {
    this.Le.Ae(t2);
  }
  _e(t2) {
    this.Le.Se(t2);
  }
  de(t2) {
    this.Le.Ce(t2);
  }
  le() {
    this.Le.$e();
  }
};
var Er = class {
  constructor(t2) {
    this.Le = t2;
  }
  ge(t2) {
    this.Le.ve(t2);
  }
  _e(t2) {
    this.Le.De(t2);
  }
  de(t2) {
    this.Le.ke(t2);
  }
  le() {
    this.Le.Oe();
  }
};
var Ar = class {
  constructor() {
    this.Le = new Ir(), this.qe = new Tr(this.Le), this.Ue = new Er(this.Le);
  }
  seed(t2) {
    this.Le.seed(t2);
  }
  Ke(t2) {
    return 0 === t2 ? this.qe : this.Ue;
  }
  Be() {
    return this.Le.Be();
  }
  reset() {
    this.Le.reset();
  }
};
var Rr = class {
  constructor(t2, e, n, s) {
    this.indexId = t2, this.documentKey = e, this.arrayValue = n, this.directionalValue = s;
  }
  /**
   * Returns an IndexEntry entry that sorts immediately after the current
   * directional value.
   */
  Ge() {
    const t2 = this.directionalValue.length, e = 0 === t2 || 255 === this.directionalValue[t2 - 1] ? t2 + 1 : t2, n = new Uint8Array(e);
    return n.set(this.directionalValue, 0), e !== t2 ? n.set([0], this.directionalValue.length) : ++n[n.length - 1], new Rr(this.indexId, this.documentKey, this.arrayValue, n);
  }
};
function Pr(t2, e) {
  let n = t2.indexId - e.indexId;
  return 0 !== n ? n : (n = vr(t2.arrayValue, e.arrayValue), 0 !== n ? n : (n = vr(t2.directionalValue, e.directionalValue), 0 !== n ? n : ct.comparator(t2.documentKey, e.documentKey)));
}
function vr(t2, e) {
  for (let n = 0; n < t2.length && n < e.length; ++n) {
    const s = t2[n] - e[n];
    if (0 !== s)
      return s;
  }
  return t2.length - e.length;
}
var br = class {
  constructor(t2) {
    this.collectionId = null != t2.collectionGroup ? t2.collectionGroup : t2.path.lastSegment(), this.Qe = t2.orderBy, this.je = [];
    for (const e of t2.filters) {
      const t3 = e;
      t3.isInequality() ? this.ze = t3 : this.je.push(t3);
    }
  }
  /**
   * Returns whether the index can be used to serve the TargetIndexMatcher's
   * target.
   *
   * An index is considered capable of serving the target when:
   * - The target uses all index segments for its filters and orderBy clauses.
   *   The target can have additional filter and orderBy clauses, but not
   *   fewer.
   * - If an ArrayContains/ArrayContainsAnyfilter is used, the index must also
   *   have a corresponding `CONTAINS` segment.
   * - All directional index segments can be mapped to the target as a series of
   *   equality filters, a single inequality filter and a series of orderBy
   *   clauses.
   * - The segments that represent the equality filters may appear out of order.
   * - The optional segment for the inequality filter must appear after all
   *   equality segments.
   * - The segments that represent that orderBy clause of the target must appear
   *   in order after all equality and inequality segments. Single orderBy
   *   clauses cannot be skipped, but a continuous orderBy suffix may be
   *   omitted.
   */
  We(t2) {
    M2(t2.collectionGroup === this.collectionId);
    const e = ht(t2);
    if (void 0 !== e && !this.He(e))
      return false;
    const n = lt(t2);
    let s = 0, i = 0;
    for (; s < n.length && this.He(n[s]); ++s)
      ;
    if (s === n.length)
      return true;
    if (void 0 !== this.ze) {
      const t3 = n[s];
      if (!this.Je(this.ze, t3) || !this.Ye(this.Qe[i++], t3))
        return false;
      ++s;
    }
    for (; s < n.length; ++s) {
      const t3 = n[s];
      if (i >= this.Qe.length || !this.Ye(this.Qe[i++], t3))
        return false;
    }
    return true;
  }
  He(t2) {
    for (const e of this.je)
      if (this.Je(e, t2))
        return true;
    return false;
  }
  Je(t2, e) {
    if (void 0 === t2 || !t2.field.isEqual(e.fieldPath))
      return false;
    const n = "array-contains" === t2.op || "array-contains-any" === t2.op;
    return 2 === e.kind === n;
  }
  Ye(t2, e) {
    return !!t2.field.isEqual(e.fieldPath) && (0 === e.kind && "asc" === t2.dir || 1 === e.kind && "desc" === t2.dir);
  }
};
function Vr(t2) {
  var e, n;
  if (M2(t2 instanceof Ve || t2 instanceof Se), t2 instanceof Ve) {
    if (t2 instanceof Ke) {
      const s2 = (null === (n = null === (e = t2.value.arrayValue) || void 0 === e ? void 0 : e.values) || void 0 === n ? void 0 : n.map((e2) => Ve.create(t2.field, "==", e2))) || [];
      return Se.create(
        s2,
        "or"
        /* CompositeOperator.OR */
      );
    }
    return t2;
  }
  const s = t2.filters.map((t3) => Vr(t3));
  return Se.create(s, t2.op);
}
function Sr(t2) {
  if (0 === t2.getFilters().length)
    return [];
  const e = Nr(Vr(t2));
  return M2(xr(e)), Dr(e) || Cr(e) ? [e] : e.getFilters();
}
function Dr(t2) {
  return t2 instanceof Ve;
}
function Cr(t2) {
  return t2 instanceof Se && xe(t2);
}
function xr(t2) {
  return Dr(t2) || Cr(t2) || /**
  * Returns true if the given filter is the disjunction of one or more "flat conjunctions" and
  * field filters. e.g. (a == 10) || (b==20 && c==30)
  */
  function(t3) {
    if (t3 instanceof Se && Ce(t3)) {
      for (const e of t3.getFilters())
        if (!Dr(e) && !Cr(e))
          return false;
      return true;
    }
    return false;
  }(t2);
}
function Nr(t2) {
  if (M2(t2 instanceof Ve || t2 instanceof Se), t2 instanceof Ve)
    return t2;
  if (1 === t2.filters.length)
    return Nr(t2.filters[0]);
  const e = t2.filters.map((t3) => Nr(t3));
  let n = Se.create(e, t2.op);
  return n = Mr(n), xr(n) ? n : (M2(n instanceof Se), M2(De(n)), M2(n.filters.length > 1), n.filters.reduce((t3, e2) => kr(t3, e2)));
}
function kr(t2, e) {
  let n;
  return M2(t2 instanceof Ve || t2 instanceof Se), M2(e instanceof Ve || e instanceof Se), // FieldFilter FieldFilter
  n = t2 instanceof Ve ? e instanceof Ve ? function(t3, e2) {
    return Se.create(
      [t3, e2],
      "and"
      /* CompositeOperator.AND */
    );
  }(t2, e) : $r(t2, e) : e instanceof Ve ? $r(e, t2) : function(t3, e2) {
    if (M2(t3.filters.length > 0 && e2.filters.length > 0), De(t3) && De(e2))
      return Me(t3, e2.getFilters());
    const n2 = Ce(t3) ? t3 : e2, s = Ce(t3) ? e2 : t3, i = n2.filters.map((t4) => kr(t4, s));
    return Se.create(
      i,
      "or"
      /* CompositeOperator.OR */
    );
  }(t2, e), Mr(n);
}
function $r(t2, e) {
  if (De(e))
    return Me(e, t2.getFilters());
  {
    const n = e.filters.map((e2) => kr(t2, e2));
    return Se.create(
      n,
      "or"
      /* CompositeOperator.OR */
    );
  }
}
function Mr(t2) {
  if (M2(t2 instanceof Ve || t2 instanceof Se), t2 instanceof Ve)
    return t2;
  const e = t2.getFilters();
  if (1 === e.length)
    return Mr(e[0]);
  if (Ne(t2))
    return t2;
  const n = e.map((t3) => Mr(t3)), s = [];
  return n.forEach((e2) => {
    e2 instanceof Ve ? s.push(e2) : e2 instanceof Se && (e2.op === t2.op ? (
      // compositeFilter: (A | (B | C))
      // compositeSubfilter: (B | C)
      // Result: (A | B | C)
      s.push(...e2.filters)
    ) : (
      // compositeFilter: (A | (B & C))
      // compositeSubfilter: (B & C)
      // Result: (A | (B & C))
      s.push(e2)
    ));
  }), 1 === s.length ? s[0] : Se.create(s, t2.op);
}
var Or = class {
  constructor() {
    this.Ze = new Fr();
  }
  addToCollectionParentIndex(t2, e) {
    return this.Ze.add(e), At.resolve();
  }
  getCollectionParents(t2, e) {
    return At.resolve(this.Ze.getEntries(e));
  }
  addFieldIndex(t2, e) {
    return At.resolve();
  }
  deleteFieldIndex(t2, e) {
    return At.resolve();
  }
  getDocumentsMatchingTarget(t2, e) {
    return At.resolve(null);
  }
  getIndexType(t2, e) {
    return At.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(t2, e) {
    return At.resolve([]);
  }
  getNextCollectionGroupToUpdate(t2) {
    return At.resolve(null);
  }
  getMinOffset(t2, e) {
    return At.resolve(yt.min());
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return At.resolve(yt.min());
  }
  updateCollectionGroup(t2, e, n) {
    return At.resolve();
  }
  updateIndexEntries(t2, e) {
    return At.resolve();
  }
};
var Fr = class {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e] || new Ye(rt.comparator), i = !s.has(n);
    return this.index[e] = s.add(n), i;
  }
  has(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e];
    return s && s.has(n);
  }
  getEntries(t2) {
    return (this.index[t2] || new Ye(rt.comparator)).toArray();
  }
};
var Br = new Uint8Array(0);
var Lr = class {
  constructor(t2, e) {
    this.user = t2, this.databaseId = e, /**
     * An in-memory copy of the index entries we've already written since the SDK
     * launched. Used to avoid re-writing the same entry repeatedly.
     *
     * This is *NOT* a complete cache of what's in persistence and so can never be
     * used to satisfy reads.
     */
    this.Xe = new Fr(), /**
     * Maps from a target to its equivalent list of sub-targets. Each sub-target
     * contains only one term from the target's disjunctive normal form (DNF).
     */
    this.tn = new ws((t3) => un(t3), (t3, e2) => cn(t3, e2)), this.uid = t2.uid || "";
  }
  /**
   * Adds a new entry to the collection parent index.
   *
   * Repeated calls for the same collectionPath should be avoided within a
   * transaction as IndexedDbIndexManager only caches writes once a transaction
   * has been committed.
   */
  addToCollectionParentIndex(t2, e) {
    if (!this.Xe.has(e)) {
      const n = e.lastSegment(), s = e.popLast();
      t2.addOnCommittedListener(() => {
        this.Xe.add(e);
      });
      const i = {
        collectionId: n,
        parent: Ii(s)
      };
      return qr(t2).put(i);
    }
    return At.resolve();
  }
  getCollectionParents(t2, e) {
    const n = [], s = IDBKeyRange.bound(
      [e, ""],
      [et(e), ""],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    return qr(t2).W(s).next((t3) => {
      for (const s2 of t3) {
        if (s2.collectionId !== e)
          break;
        n.push(Ai(s2.parent));
      }
      return n;
    });
  }
  addFieldIndex(t2, e) {
    const n = Kr(t2), s = function(t3) {
      return {
        indexId: t3.indexId,
        collectionGroup: t3.collectionGroup,
        fields: t3.fields.map((t4) => [t4.fieldPath.canonicalString(), t4.kind])
      };
    }(e);
    delete s.indexId;
    const i = n.add(s);
    if (e.indexState) {
      const n2 = Gr(t2);
      return i.next((t3) => {
        n2.put(lr(t3, this.user, e.indexState.sequenceNumber, e.indexState.offset));
      });
    }
    return i.next();
  }
  deleteFieldIndex(t2, e) {
    const n = Kr(t2), s = Gr(t2), i = Ur(t2);
    return n.delete(e.indexId).next(() => s.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    ))).next(() => i.delete(IDBKeyRange.bound(
      [e.indexId],
      [e.indexId + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    )));
  }
  getDocumentsMatchingTarget(t2, e) {
    const n = Ur(t2);
    let s = true;
    const i = /* @__PURE__ */ new Map();
    return At.forEach(this.en(e), (e2) => this.nn(t2, e2).next((t3) => {
      s && (s = !!t3), i.set(e2, t3);
    })).next(() => {
      if (s) {
        let t3 = vs();
        const s2 = [];
        return At.forEach(i, (i2, r) => {
          var o;
          C2("IndexedDbIndexManager", `Using index ${o = i2, `id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t4) => `${t4.fieldPath}:${t4.kind}`).join(",")}`} to execute ${un(e)}`);
          const u = function(t4, e2) {
            const n2 = ht(e2);
            if (void 0 === n2)
              return null;
            for (const e3 of hn(t4, n2.fieldPath))
              switch (e3.op) {
                case "array-contains-any":
                  return e3.value.arrayValue.values || [];
                case "array-contains":
                  return [e3.value];
              }
            return null;
          }(r, i2), c = function(t4, e2) {
            const n2 = /* @__PURE__ */ new Map();
            for (const s3 of lt(e2))
              for (const e3 of hn(t4, s3.fieldPath))
                switch (e3.op) {
                  case "==":
                  case "in":
                    n2.set(s3.fieldPath.canonicalString(), e3.value);
                    break;
                  case "not-in":
                  case "!=":
                    return n2.set(s3.fieldPath.canonicalString(), e3.value), Array.from(n2.values());
                }
            return null;
          }(r, i2), a = function(t4, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of lt(e2)) {
              const e3 = 0 === i3.kind ? ln(t4, i3.fieldPath, t4.startAt) : fn(t4, i3.fieldPath, t4.startAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new Re(n2, s3);
          }(r, i2), h = function(t4, e2) {
            const n2 = [];
            let s3 = true;
            for (const i3 of lt(e2)) {
              const e3 = 0 === i3.kind ? fn(t4, i3.fieldPath, t4.endAt) : ln(t4, i3.fieldPath, t4.endAt);
              n2.push(e3.value), s3 && (s3 = e3.inclusive);
            }
            return new Re(n2, s3);
          }(r, i2), l2 = this.sn(i2, r, a), f = this.sn(i2, r, h), d = this.rn(i2, r, c), _ = this.on(i2.indexId, u, l2, a.inclusive, f, h.inclusive, d);
          return At.forEach(_, (i3) => n.J(i3, e.limit).next((e2) => {
            e2.forEach((e3) => {
              const n2 = ct.fromSegments(e3.documentKey);
              t3.has(n2) || (t3 = t3.add(n2), s2.push(n2));
            });
          }));
        }).next(() => s2);
      }
      return At.resolve(null);
    });
  }
  en(t2) {
    let e = this.tn.get(t2);
    if (e)
      return e;
    if (0 === t2.filters.length)
      e = [t2];
    else {
      e = Sr(Se.create(
        t2.filters,
        "and"
        /* CompositeOperator.AND */
      )).map((e2) => on(t2.path, t2.collectionGroup, t2.orderBy, e2.getFilters(), t2.limit, t2.startAt, t2.endAt));
    }
    return this.tn.set(t2, e), e;
  }
  /**
   * Constructs a key range query on `DbIndexEntryStore` that unions all
   * bounds.
   */
  on(t2, e, n, s, i, r, o) {
    const u = (null != e ? e.length : 1) * Math.max(n.length, i.length), c = u / (null != e ? e.length : 1), a = [];
    for (let h = 0; h < u; ++h) {
      const u2 = e ? this.un(e[h / c]) : Br, l2 = this.cn(t2, u2, n[h % c], s), f = this.an(t2, u2, i[h % c], r), d = o.map((e2) => this.cn(
        t2,
        u2,
        e2,
        /* inclusive= */
        true
      ));
      a.push(...this.createRange(l2, f, d));
    }
    return a;
  }
  /** Generates the lower bound for `arrayValue` and `directionalValue`. */
  cn(t2, e, n, s) {
    const i = new Rr(t2, ct.empty(), e, n);
    return s ? i : i.Ge();
  }
  /** Generates the upper bound for `arrayValue` and `directionalValue`. */
  an(t2, e, n, s) {
    const i = new Rr(t2, ct.empty(), e, n);
    return s ? i.Ge() : i;
  }
  nn(t2, e) {
    const n = new br(e), s = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment();
    return this.getFieldIndexes(t2, s).next((t3) => {
      let e2 = null;
      for (const s2 of t3) {
        n.We(s2) && (!e2 || s2.fields.length > e2.fields.length) && (e2 = s2);
      }
      return e2;
    });
  }
  getIndexType(t2, e) {
    let n = 2;
    const s = this.en(e);
    return At.forEach(s, (e2) => this.nn(t2, e2).next((t3) => {
      t3 ? 0 !== n && t3.fields.length < function(t4) {
        let e3 = new Ye(ut.comparator), n2 = false;
        for (const s2 of t4.filters)
          for (const t5 of s2.getFlattenedFilters())
            t5.field.isKeyField() || // ARRAY_CONTAINS or ARRAY_CONTAINS_ANY filters must be counted separately.
            // For instance, it is possible to have an index for "a ARRAY a ASC". Even
            // though these are on the same field, they should be counted as two
            // separate segments in an index.
            ("array-contains" === t5.op || "array-contains-any" === t5.op ? n2 = true : e3 = e3.add(t5.field));
        for (const n3 of t4.orderBy)
          n3.field.isKeyField() || (e3 = e3.add(n3.field));
        return e3.size + (n2 ? 1 : 0);
      }(e2) && (n = 1) : n = 0;
    })).next(() => (
      // OR queries have more than one sub-target (one sub-target per DNF term). We currently consider
      // OR queries that have a `limit` to have a partial index. For such queries we perform sorting
      // and apply the limit in memory as a post-processing step.
      function(t3) {
        return null !== t3.limit;
      }(e) && s.length > 1 && 2 === n ? 1 : n
    ));
  }
  /**
   * Returns the byte encoded form of the directional values in the field index.
   * Returns `null` if the document does not have all fields specified in the
   * index.
   */
  hn(t2, e) {
    const n = new Ar();
    for (const s of lt(t2)) {
      const t3 = e.data.field(s.fieldPath);
      if (null == t3)
        return null;
      const i = n.Ke(s.kind);
      gr.Ee.ae(t3, i);
    }
    return n.Be();
  }
  /** Encodes a single value to the ascending index format. */
  un(t2) {
    const e = new Ar();
    return gr.Ee.ae(t2, e.Ke(
      0
      /* IndexKind.ASCENDING */
    )), e.Be();
  }
  /**
   * Returns an encoded form of the document key that sorts based on the key
   * ordering of the field index.
   */
  ln(t2, e) {
    const n = new Ar();
    return gr.Ee.ae(fe(this.databaseId, e), n.Ke(function(t3) {
      const e2 = lt(t3);
      return 0 === e2.length ? 0 : e2[e2.length - 1].kind;
    }(t2))), n.Be();
  }
  /**
   * Encodes the given field values according to the specification in `target`.
   * For IN queries, a list of possible values is returned.
   */
  rn(t2, e, n) {
    if (null === n)
      return [];
    let s = [];
    s.push(new Ar());
    let i = 0;
    for (const r of lt(t2)) {
      const t3 = n[i++];
      for (const n2 of s)
        if (this.fn(e, r.fieldPath) && _e(t3))
          s = this.dn(s, r, t3);
        else {
          const e2 = n2.Ke(r.kind);
          gr.Ee.ae(t3, e2);
        }
    }
    return this._n(s);
  }
  /**
   * Encodes the given bounds according to the specification in `target`. For IN
   * queries, a list of possible values is returned.
   */
  sn(t2, e, n) {
    return this.rn(t2, e, n.position);
  }
  /** Returns the byte representation for the provided encoders. */
  _n(t2) {
    const e = [];
    for (let n = 0; n < t2.length; ++n)
      e[n] = t2[n].Be();
    return e;
  }
  /**
   * Creates a separate encoder for each element of an array.
   *
   * The method appends each value to all existing encoders (e.g. filter("a",
   * "==", "a1").filter("b", "in", ["b1", "b2"]) becomes ["a1,b1", "a1,b2"]). A
   * list of new encoders is returned.
   */
  dn(t2, e, n) {
    const s = [...t2], i = [];
    for (const t3 of n.arrayValue.values || [])
      for (const n2 of s) {
        const s2 = new Ar();
        s2.seed(n2.Be()), gr.Ee.ae(t3, s2.Ke(e.kind)), i.push(s2);
      }
    return i;
  }
  fn(t2, e) {
    return !!t2.filters.find((t3) => t3 instanceof Ve && t3.field.isEqual(e) && ("in" === t3.op || "not-in" === t3.op));
  }
  getFieldIndexes(t2, e) {
    const n = Kr(t2), s = Gr(t2);
    return (e ? n.W("collectionGroupIndex", IDBKeyRange.bound(e, e)) : n.W()).next((t3) => {
      const e2 = [];
      return At.forEach(t3, (t4) => s.get([t4.indexId, this.uid]).next((n2) => {
        e2.push(function(t5, e3) {
          const n3 = e3 ? new wt(e3.sequenceNumber, new yt(ir(e3.readTime), new ct(Ai(e3.documentKey)), e3.largestBatchId)) : wt.empty(), s2 = t5.fields.map(([t6, e4]) => new dt(ut.fromServerFormat(t6), e4));
          return new at(t5.indexId, t5.collectionGroup, s2, n3);
        }(t4, n2));
      })).next(() => e2);
    });
  }
  getNextCollectionGroupToUpdate(t2) {
    return this.getFieldIndexes(t2).next((t3) => 0 === t3.length ? null : (t3.sort((t4, e) => {
      const n = t4.indexState.sequenceNumber - e.indexState.sequenceNumber;
      return 0 !== n ? n : X2(t4.collectionGroup, e.collectionGroup);
    }), t3[0].collectionGroup));
  }
  updateCollectionGroup(t2, e, n) {
    const s = Kr(t2), i = Gr(t2);
    return this.wn(t2).next((t3) => s.W("collectionGroupIndex", IDBKeyRange.bound(e, e)).next((e2) => At.forEach(e2, (e3) => i.put(lr(e3.indexId, this.user, t3, n)))));
  }
  updateIndexEntries(t2, e) {
    const n = /* @__PURE__ */ new Map();
    return At.forEach(e, (e2, s) => {
      const i = n.get(e2.collectionGroup);
      return (i ? At.resolve(i) : this.getFieldIndexes(t2, e2.collectionGroup)).next((i2) => (n.set(e2.collectionGroup, i2), At.forEach(i2, (n2) => this.mn(t2, e2, n2).next((e3) => {
        const i3 = this.gn(s, n2);
        return e3.isEqual(i3) ? At.resolve() : this.yn(t2, s, n2, e3, i3);
      }))));
    });
  }
  pn(t2, e, n, s) {
    return Ur(t2).put({
      indexId: s.indexId,
      uid: this.uid,
      arrayValue: s.arrayValue,
      directionalValue: s.directionalValue,
      orderedDocumentKey: this.ln(n, e.key),
      documentKey: e.key.path.toArray()
    });
  }
  In(t2, e, n, s) {
    return Ur(t2).delete([s.indexId, this.uid, s.arrayValue, s.directionalValue, this.ln(n, e.key), e.key.path.toArray()]);
  }
  mn(t2, e, n) {
    const s = Ur(t2);
    let i = new Ye(Pr);
    return s.X({
      index: "documentKeyIndex",
      range: IDBKeyRange.only([n.indexId, this.uid, this.ln(n, e)])
    }, (t3, s2) => {
      i = i.add(new Rr(n.indexId, e, s2.arrayValue, s2.directionalValue));
    }).next(() => i);
  }
  /** Creates the index entries for the given document. */
  gn(t2, e) {
    let n = new Ye(Pr);
    const s = this.hn(e, t2);
    if (null == s)
      return n;
    const i = ht(e);
    if (null != i) {
      const r = t2.data.field(i.fieldPath);
      if (_e(r))
        for (const i2 of r.arrayValue.values || [])
          n = n.add(new Rr(e.indexId, t2.key, this.un(i2), s));
    } else
      n = n.add(new Rr(e.indexId, t2.key, Br, s));
    return n;
  }
  /**
   * Updates the index entries for the provided document by deleting entries
   * that are no longer referenced in `newEntries` and adding all newly added
   * entries.
   */
  yn(t2, e, n, s, i) {
    C2("IndexedDbIndexManager", "Updating index entries for document '%s'", e.key);
    const r = [];
    return function(t3, e2, n2, s2, i2) {
      const r2 = t3.getIterator(), o = e2.getIterator();
      let u = Xe(r2), c = Xe(o);
      for (; u || c; ) {
        let t4 = false, e3 = false;
        if (u && c) {
          const s3 = n2(u, c);
          s3 < 0 ? (
            // The element was removed if the next element in our ordered
            // walkthrough is only in `before`.
            e3 = true
          ) : s3 > 0 && // The element was added if the next element in our ordered walkthrough
          // is only in `after`.
          (t4 = true);
        } else
          null != u ? e3 = true : t4 = true;
        t4 ? (s2(c), c = Xe(o)) : e3 ? (i2(u), u = Xe(r2)) : (u = Xe(r2), c = Xe(o));
      }
    }(
      s,
      i,
      Pr,
      /* onAdd= */
      (s2) => {
        r.push(this.pn(t2, e, n, s2));
      },
      /* onRemove= */
      (s2) => {
        r.push(this.In(t2, e, n, s2));
      }
    ), At.waitFor(r);
  }
  wn(t2) {
    let e = 1;
    return Gr(t2).X({
      index: "sequenceNumberIndex",
      reverse: true,
      range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
    }, (t3, n, s) => {
      s.done(), e = n.sequenceNumber + 1;
    }).next(() => e);
  }
  /**
   * Returns a new set of IDB ranges that splits the existing range and excludes
   * any values that match the `notInValue` from these ranges. As an example,
   * '[foo > 2 && foo != 3]` becomes  `[foo > 2 && < 3, foo > 3]`.
   */
  createRange(t2, e, n) {
    n = n.sort((t3, e2) => Pr(t3, e2)).filter((t3, e2, n2) => !e2 || 0 !== Pr(t3, n2[e2 - 1]));
    const s = [];
    s.push(t2);
    for (const i2 of n) {
      const n2 = Pr(i2, t2), r = Pr(i2, e);
      if (0 === n2)
        s[0] = t2.Ge();
      else if (n2 > 0 && r < 0)
        s.push(i2), s.push(i2.Ge());
      else if (r > 0)
        break;
    }
    s.push(e);
    const i = [];
    for (let t3 = 0; t3 < s.length; t3 += 2) {
      if (this.Tn(s[t3], s[t3 + 1]))
        return [];
      const e2 = [s[t3].indexId, this.uid, s[t3].arrayValue, s[t3].directionalValue, Br, []], n2 = [s[t3 + 1].indexId, this.uid, s[t3 + 1].arrayValue, s[t3 + 1].directionalValue, Br, []];
      i.push(IDBKeyRange.bound(e2, n2));
    }
    return i;
  }
  Tn(t2, e) {
    return Pr(t2, e) > 0;
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return this.getFieldIndexes(t2, e).next(Qr);
  }
  getMinOffset(t2, e) {
    return At.mapArray(this.en(e), (e2) => this.nn(t2, e2).next((t3) => t3 || $())).next(Qr);
  }
};
function qr(t2) {
  return Wi(t2, "collectionParents");
}
function Ur(t2) {
  return Wi(t2, "indexEntries");
}
function Kr(t2) {
  return Wi(t2, "indexConfiguration");
}
function Gr(t2) {
  return Wi(t2, "indexState");
}
function Qr(t2) {
  M2(0 !== t2.length);
  let e = t2[0].indexState.offset, n = e.largestBatchId;
  for (let s = 1; s < t2.length; s++) {
    const i = t2[s].indexState.offset;
    pt(i, e) < 0 && (e = i), n < i.largestBatchId && (n = i.largestBatchId);
  }
  return new yt(e.readTime, e.documentKey, n);
}
var jr = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
var zr = class {
  constructor(t2, e, n) {
    this.cacheSizeCollectionThreshold = t2, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
  }
  static withCacheSize(t2) {
    return new zr(t2, zr.DEFAULT_COLLECTION_PERCENTILE, zr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
};
function Wr(t2, e, n) {
  const s = t2.store("mutations"), i = t2.store("documentMutations"), r = [], o = IDBKeyRange.only(n.batchId);
  let u = 0;
  const c = s.X({
    range: o
  }, (t3, e2, n2) => (u++, n2.delete()));
  r.push(c.next(() => {
    M2(1 === u);
  }));
  const a = [];
  for (const t3 of n.mutations) {
    const s2 = vi(e, t3.key.path, n.batchId);
    r.push(i.delete(s2)), a.push(t3.key);
  }
  return At.waitFor(r).next(() => a);
}
function Hr(t2) {
  if (!t2)
    return 0;
  let e;
  if (t2.document)
    e = t2.document;
  else if (t2.unknownDocument)
    e = t2.unknownDocument;
  else {
    if (!t2.noDocument)
      throw $();
    e = t2.noDocument;
  }
  return JSON.stringify(e).length;
}
zr.DEFAULT_COLLECTION_PERCENTILE = 10, zr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, zr.DEFAULT = new zr(41943040, zr.DEFAULT_COLLECTION_PERCENTILE, zr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), zr.DISABLED = new zr(-1, 0, 0);
var Jr = class {
  constructor(t2, e, n, s) {
    this.userId = t2, this.Tt = e, this.indexManager = n, this.referenceDelegate = s, /**
     * Caches the document keys for pending mutation batches. If the mutation
     * has been removed from IndexedDb, the cached value may continue to
     * be used to retrieve the batch's document keys. To remove a cached value
     * locally, `removeCachedMutationKeys()` should be invoked either directly
     * or through `removeMutationBatches()`.
     *
     * With multi-tab, when the primary client acknowledges or rejects a mutation,
     * this cache is used by secondary clients to invalidate the local
     * view of the documents that were previously affected by the mutation.
     */
    // PORTING NOTE: Multi-tab only.
    this.En = {};
  }
  /**
   * Creates a new mutation queue for the given user.
   * @param user - The user for which to create a mutation queue.
   * @param serializer - The serializer to use when persisting to IndexedDb.
   */
  static ue(t2, e, n, s) {
    M2("" !== t2.uid);
    const i = t2.isAuthenticated() ? t2.uid : "";
    return new Jr(i, e, n, s);
  }
  checkEmpty(t2) {
    let e = true;
    const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return Zr(t2).X({
      index: "userMutationsIndex",
      range: n
    }, (t3, n2, s) => {
      e = false, s.done();
    }).next(() => e);
  }
  addMutationBatch(t2, e, n, s) {
    const i = Xr(t2), r = Zr(t2);
    return r.add({}).next((o) => {
      M2("number" == typeof o);
      const u = new Hi(o, e, n, s), c = function(t3, e2, n2) {
        const s2 = n2.baseMutations.map((e3) => ii(t3.oe, e3)), i2 = n2.mutations.map((e3) => ii(t3.oe, e3));
        return {
          userId: e2,
          batchId: n2.batchId,
          localWriteTimeMs: n2.localWriteTime.toMillis(),
          baseMutations: s2,
          mutations: i2
        };
      }(this.Tt, this.userId, u), a = [];
      let h = new Ye((t3, e2) => X2(t3.canonicalString(), e2.canonicalString()));
      for (const t3 of s) {
        const e2 = vi(this.userId, t3.key.path, o);
        h = h.add(t3.key.path.popLast()), a.push(r.put(c)), a.push(i.put(e2, bi));
      }
      return h.forEach((e2) => {
        a.push(this.indexManager.addToCollectionParentIndex(t2, e2));
      }), t2.addOnCommittedListener(() => {
        this.En[o] = u.keys();
      }), At.waitFor(a).next(() => u);
    });
  }
  lookupMutationBatch(t2, e) {
    return Zr(t2).get(e).next((t3) => t3 ? (M2(t3.userId === this.userId), rr(this.Tt, t3)) : null);
  }
  /**
   * Returns the document keys for the mutation batch with the given batchId.
   * For primary clients, this method returns `null` after
   * `removeMutationBatches()` has been called. Secondary clients return a
   * cached result until `removeCachedMutationKeys()` is invoked.
   */
  // PORTING NOTE: Multi-tab only.
  An(t2, e) {
    return this.En[e] ? At.resolve(this.En[e]) : this.lookupMutationBatch(t2, e).next((t3) => {
      if (t3) {
        const n = t3.keys();
        return this.En[e] = n, n;
      }
      return null;
    });
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n = e + 1, s = IDBKeyRange.lowerBound([this.userId, n]);
    let i = null;
    return Zr(t2).X({
      index: "userMutationsIndex",
      range: s
    }, (t3, e2, s2) => {
      e2.userId === this.userId && (M2(e2.batchId >= n), i = rr(this.Tt, e2)), s2.done();
    }).next(() => i);
  }
  getHighestUnacknowledgedBatchId(t2) {
    const e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
    let n = -1;
    return Zr(t2).X({
      index: "userMutationsIndex",
      range: e,
      reverse: true
    }, (t3, e2, s) => {
      n = e2.batchId, s.done();
    }).next(() => n);
  }
  getAllMutationBatches(t2) {
    const e = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return Zr(t2).W("userMutationsIndex", e).next((t3) => t3.map((t4) => rr(this.Tt, t4)));
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n = Pi(this.userId, e.path), s = IDBKeyRange.lowerBound(n), i = [];
    return Xr(t2).X({
      range: s
    }, (n2, s2, r) => {
      const [o, u, c] = n2, a = Ai(u);
      if (o === this.userId && e.path.isEqual(a))
        return Zr(t2).get(c).next((t3) => {
          if (!t3)
            throw $();
          M2(t3.userId === this.userId), i.push(rr(this.Tt, t3));
        });
      r.done();
    }).next(() => i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n = new Ye(X2);
    const s = [];
    return e.forEach((e2) => {
      const i = Pi(this.userId, e2.path), r = IDBKeyRange.lowerBound(i), o = Xr(t2).X({
        range: r
      }, (t3, s2, i2) => {
        const [r2, o2, u] = t3, c = Ai(o2);
        r2 === this.userId && e2.path.isEqual(c) ? n = n.add(u) : i2.done();
      });
      s.push(o);
    }), At.waitFor(s).next(() => this.Rn(t2, n));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n = e.path, s = n.length + 1, i = Pi(this.userId, n), r = IDBKeyRange.lowerBound(i);
    let o = new Ye(X2);
    return Xr(t2).X({
      range: r
    }, (t3, e2, i2) => {
      const [r2, u, c] = t3, a = Ai(u);
      r2 === this.userId && n.isPrefixOf(a) ? (
        // Rows with document keys more than one segment longer than the
        // query path can't be matches. For example, a query on 'rooms'
        // can't match the document /rooms/abc/messages/xyx.
        // TODO(mcg): we'll need a different scanner when we implement
        // ancestor queries.
        a.length === s && (o = o.add(c))
      ) : i2.done();
    }).next(() => this.Rn(t2, o));
  }
  Rn(t2, e) {
    const n = [], s = [];
    return e.forEach((e2) => {
      s.push(Zr(t2).get(e2).next((t3) => {
        if (null === t3)
          throw $();
        M2(t3.userId === this.userId), n.push(rr(this.Tt, t3));
      }));
    }), At.waitFor(s).next(() => n);
  }
  removeMutationBatch(t2, e) {
    return Wr(t2.re, this.userId, e).next((n) => (t2.addOnCommittedListener(() => {
      this.Pn(e.batchId);
    }), At.forEach(n, (e2) => this.referenceDelegate.markPotentiallyOrphaned(t2, e2))));
  }
  /**
   * Clears the cached keys for a mutation batch. This method should be
   * called by secondary clients after they process mutation updates.
   *
   * Note that this method does not have to be called from primary clients as
   * the corresponding cache entries are cleared when an acknowledged or
   * rejected batch is removed from the mutation queue.
   */
  // PORTING NOTE: Multi-tab only
  Pn(t2) {
    delete this.En[t2];
  }
  performConsistencyCheck(t2) {
    return this.checkEmpty(t2).next((e) => {
      if (!e)
        return At.resolve();
      const n = IDBKeyRange.lowerBound([this.userId]);
      const s = [];
      return Xr(t2).X({
        range: n
      }, (t3, e2, n2) => {
        if (t3[0] === this.userId) {
          const e3 = Ai(t3[1]);
          s.push(e3);
        } else
          n2.done();
      }).next(() => {
        M2(0 === s.length);
      });
    });
  }
  containsKey(t2, e) {
    return Yr(t2, this.userId, e);
  }
  // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
  /** Returns the mutation queue's metadata from IndexedDb. */
  vn(t2) {
    return to(t2).get(this.userId).next((t3) => t3 || {
      userId: this.userId,
      lastAcknowledgedBatchId: -1,
      lastStreamToken: ""
    });
  }
};
function Yr(t2, e, n) {
  const s = Pi(e, n.path), i = s[1], r = IDBKeyRange.lowerBound(s);
  let o = false;
  return Xr(t2).X({
    range: r,
    Z: true
  }, (t3, n2, s2) => {
    const [
      r2,
      u,
      /*batchID*/
      c
    ] = t3;
    r2 === e && u === i && (o = true), s2.done();
  }).next(() => o);
}
function Zr(t2) {
  return Wi(t2, "mutations");
}
function Xr(t2) {
  return Wi(t2, "documentMutations");
}
function to(t2) {
  return Wi(t2, "mutationQueues");
}
var eo = class {
  constructor(t2) {
    this.bn = t2;
  }
  next() {
    return this.bn += 2, this.bn;
  }
  static Vn() {
    return new eo(0);
  }
  static Sn() {
    return new eo(-1);
  }
};
var no = class {
  constructor(t2, e) {
    this.referenceDelegate = t2, this.Tt = e;
  }
  // PORTING NOTE: We don't cache global metadata for the target cache, since
  // some of it (in particular `highestTargetId`) can be modified by secondary
  // tabs. We could perhaps be more granular (and e.g. still cache
  // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
  // to IndexedDb whenever we need to read metadata. We can revisit if it turns
  // out to have a meaningful performance impact.
  allocateTargetId(t2) {
    return this.Dn(t2).next((e) => {
      const n = new eo(e.highestTargetId);
      return e.highestTargetId = n.next(), this.Cn(t2, e).next(() => e.highestTargetId);
    });
  }
  getLastRemoteSnapshotVersion(t2) {
    return this.Dn(t2).next((t3) => st.fromTimestamp(new nt(t3.lastRemoteSnapshotVersion.seconds, t3.lastRemoteSnapshotVersion.nanoseconds)));
  }
  getHighestSequenceNumber(t2) {
    return this.Dn(t2).next((t3) => t3.highestListenSequenceNumber);
  }
  setTargetsMetadata(t2, e, n) {
    return this.Dn(t2).next((s) => (s.highestListenSequenceNumber = e, n && (s.lastRemoteSnapshotVersion = n.toTimestamp()), e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.Cn(t2, s)));
  }
  addTargetData(t2, e) {
    return this.xn(t2, e).next(() => this.Dn(t2).next((n) => (n.targetCount += 1, this.Nn(e, n), this.Cn(t2, n))));
  }
  updateTargetData(t2, e) {
    return this.xn(t2, e);
  }
  removeTargetData(t2, e) {
    return this.removeMatchingKeysForTargetId(t2, e.targetId).next(() => so(t2).delete(e.targetId)).next(() => this.Dn(t2)).next((e2) => (M2(e2.targetCount > 0), e2.targetCount -= 1, this.Cn(t2, e2)));
  }
  /**
   * Drops any targets with sequence number less than or equal to the upper bound, excepting those
   * present in `activeTargetIds`. Document associations for the removed targets are also removed.
   * Returns the number of targets removed.
   */
  removeTargets(t2, e, n) {
    let s = 0;
    const i = [];
    return so(t2).X((r, o) => {
      const u = or(o);
      u.sequenceNumber <= e && null === n.get(u.targetId) && (s++, i.push(this.removeTargetData(t2, u)));
    }).next(() => At.waitFor(i)).next(() => s);
  }
  /**
   * Call provided function with each `TargetData` that we have cached.
   */
  forEachTarget(t2, e) {
    return so(t2).X((t3, n) => {
      const s = or(n);
      e(s);
    });
  }
  Dn(t2) {
    return io(t2).get("targetGlobalKey").next((t3) => (M2(null !== t3), t3));
  }
  Cn(t2, e) {
    return io(t2).put("targetGlobalKey", e);
  }
  xn(t2, e) {
    return so(t2).put(ur(this.Tt, e));
  }
  /**
   * In-place updates the provided metadata to account for values in the given
   * TargetData. Saving is done separately. Returns true if there were any
   * changes to the metadata.
   */
  Nn(t2, e) {
    let n = false;
    return t2.targetId > e.highestTargetId && (e.highestTargetId = t2.targetId, n = true), t2.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t2.sequenceNumber, n = true), n;
  }
  getTargetCount(t2) {
    return this.Dn(t2).next((t3) => t3.targetCount);
  }
  getTargetData(t2, e) {
    const n = un(e), s = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
    let i = null;
    return so(t2).X({
      range: s,
      index: "queryTargetsIndex"
    }, (t3, n2, s2) => {
      const r = or(n2);
      cn(e, r.target) && (i = r, s2.done());
    }).next(() => i);
  }
  addMatchingKeys(t2, e, n) {
    const s = [], i = ro(t2);
    return e.forEach((e2) => {
      const r = Ii(e2.path);
      s.push(i.put({
        targetId: n,
        path: r
      })), s.push(this.referenceDelegate.addReference(t2, n, e2));
    }), At.waitFor(s);
  }
  removeMatchingKeys(t2, e, n) {
    const s = ro(t2);
    return At.forEach(e, (e2) => {
      const i = Ii(e2.path);
      return At.waitFor([s.delete([n, i]), this.referenceDelegate.removeReference(t2, n, e2)]);
    });
  }
  removeMatchingKeysForTargetId(t2, e) {
    const n = ro(t2), s = IDBKeyRange.bound(
      [e],
      [e + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    return n.delete(s);
  }
  getMatchingKeysForTargetId(t2, e) {
    const n = IDBKeyRange.bound(
      [e],
      [e + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    ), s = ro(t2);
    let i = vs();
    return s.X({
      range: n,
      Z: true
    }, (t3, e2, n2) => {
      const s2 = Ai(t3[1]), r = new ct(s2);
      i = i.add(r);
    }).next(() => i);
  }
  containsKey(t2, e) {
    const n = Ii(e.path), s = IDBKeyRange.bound(
      [n],
      [et(n)],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    let i = 0;
    return ro(t2).X({
      index: "documentTargetsIndex",
      Z: true,
      range: s
    }, ([t3, e2], n2, s2) => {
      0 !== t3 && (i++, s2.done());
    }).next(() => i > 0);
  }
  /**
   * Looks up a TargetData entry by target ID.
   *
   * @param targetId - The target ID of the TargetData entry to look up.
   * @returns The cached TargetData entry, or null if the cache has no entry for
   * the target.
   */
  // PORTING NOTE: Multi-tab only.
  ie(t2, e) {
    return so(t2).get(e).next((t3) => t3 ? or(t3) : null);
  }
};
function so(t2) {
  return Wi(t2, "targets");
}
function io(t2) {
  return Wi(t2, "targetGlobal");
}
function ro(t2) {
  return Wi(t2, "targetDocuments");
}
function oo([t2, e], [n, s]) {
  const i = X2(t2, n);
  return 0 === i ? X2(e, s) : i;
}
var uo = class {
  constructor(t2) {
    this.kn = t2, this.buffer = new Ye(oo), this.$n = 0;
  }
  Mn() {
    return ++this.$n;
  }
  On(t2) {
    const e = [t2, this.Mn()];
    if (this.buffer.size < this.kn)
      this.buffer = this.buffer.add(e);
    else {
      const t3 = this.buffer.last();
      oo(e, t3) < 0 && (this.buffer = this.buffer.delete(t3).add(e));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
};
var co = class {
  constructor(t2, e, n) {
    this.garbageCollector = t2, this.asyncQueue = e, this.localStore = n, this.Fn = null;
  }
  start() {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Bn(6e4);
  }
  stop() {
    this.Fn && (this.Fn.cancel(), this.Fn = null);
  }
  get started() {
    return null !== this.Fn;
  }
  Bn(t2) {
    C2("LruGarbageCollector", `Garbage collection scheduled in ${t2}ms`), this.Fn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", t2, async () => {
      this.Fn = null;
      try {
        await this.localStore.collectGarbage(this.garbageCollector);
      } catch (t3) {
        Vt(t3) ? C2("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t3) : await Et(t3);
      }
      await this.Bn(3e5);
    });
  }
};
var ao = class {
  constructor(t2, e) {
    this.Ln = t2, this.params = e;
  }
  calculateTargetCount(t2, e) {
    return this.Ln.qn(t2).next((t3) => Math.floor(e / 100 * t3));
  }
  nthSequenceNumber(t2, e) {
    if (0 === e)
      return At.resolve($t.at);
    const n = new uo(e);
    return this.Ln.forEachTarget(t2, (t3) => n.On(t3.sequenceNumber)).next(() => this.Ln.Un(t2, (t3) => n.On(t3))).next(() => n.maxValue);
  }
  removeTargets(t2, e, n) {
    return this.Ln.removeTargets(t2, e, n);
  }
  removeOrphanedDocuments(t2, e) {
    return this.Ln.removeOrphanedDocuments(t2, e);
  }
  collect(t2, e) {
    return -1 === this.params.cacheSizeCollectionThreshold ? (C2("LruGarbageCollector", "Garbage collection skipped; disabled"), At.resolve(jr)) : this.getCacheSize(t2).next((n) => n < this.params.cacheSizeCollectionThreshold ? (C2("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), jr) : this.Kn(t2, e));
  }
  getCacheSize(t2) {
    return this.Ln.getCacheSize(t2);
  }
  Kn(t2, e) {
    let n, s, i, r, o, c, a;
    const h = Date.now();
    return this.calculateTargetCount(t2, this.params.percentileToCollect).next((e2) => (
      // Cap at the configured max
      (e2 > this.params.maximumSequenceNumbersToCollect ? (C2("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e2}`), s = this.params.maximumSequenceNumbersToCollect) : s = e2, r = Date.now(), this.nthSequenceNumber(t2, s))
    )).next((s2) => (n = s2, o = Date.now(), this.removeTargets(t2, n, e))).next((e2) => (i = e2, c = Date.now(), this.removeOrphanedDocuments(t2, n))).next((t3) => {
      if (a = Date.now(), S2() <= LogLevel.DEBUG) {
        C2("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${r - h}ms
	Determined least recently used ${s} in ` + (o - r) + `ms
	Removed ${i} targets in ` + (c - o) + `ms
	Removed ${t3} documents in ` + (a - c) + `ms
Total Duration: ${a - h}ms`);
      }
      return At.resolve({
        didRun: true,
        sequenceNumbersCollected: s,
        targetsRemoved: i,
        documentsRemoved: t3
      });
    });
  }
};
var ho = class {
  constructor(t2, e) {
    this.db = t2, this.garbageCollector = function(t3, e2) {
      return new ao(t3, e2);
    }(this, e);
  }
  qn(t2) {
    const e = this.Gn(t2);
    return this.db.getTargetCache().getTargetCount(t2).next((t3) => e.next((e2) => t3 + e2));
  }
  Gn(t2) {
    let e = 0;
    return this.Un(t2, (t3) => {
      e++;
    }).next(() => e);
  }
  forEachTarget(t2, e) {
    return this.db.getTargetCache().forEachTarget(t2, e);
  }
  Un(t2, e) {
    return this.Qn(t2, (t3, n) => e(n));
  }
  addReference(t2, e, n) {
    return lo(t2, n);
  }
  removeReference(t2, e, n) {
    return lo(t2, n);
  }
  removeTargets(t2, e, n) {
    return this.db.getTargetCache().removeTargets(t2, e, n);
  }
  markPotentiallyOrphaned(t2, e) {
    return lo(t2, e);
  }
  /**
   * Returns true if anything would prevent this document from being garbage
   * collected, given that the document in question is not present in any
   * targets and has a sequence number less than or equal to the upper bound for
   * the collection run.
   */
  jn(t2, e) {
    return function(t3, e2) {
      let n = false;
      return to(t3).tt((s) => Yr(t3, s, e2).next((t4) => (t4 && (n = true), At.resolve(!t4)))).next(() => n);
    }(t2, e);
  }
  removeOrphanedDocuments(t2, e) {
    const n = this.db.getRemoteDocumentCache().newChangeBuffer(), s = [];
    let i = 0;
    return this.Qn(t2, (r, o) => {
      if (o <= e) {
        const e2 = this.jn(t2, r).next((e3) => {
          if (!e3)
            return i++, n.getEntry(t2, r).next(() => (n.removeEntry(r, st.min()), ro(t2).delete([0, Ii(r.path)])));
        });
        s.push(e2);
      }
    }).next(() => At.waitFor(s)).next(() => n.apply(t2)).next(() => i);
  }
  removeTarget(t2, e) {
    const n = e.withSequenceNumber(t2.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(t2, n);
  }
  updateLimboDocument(t2, e) {
    return lo(t2, e);
  }
  /**
   * Call provided function for each document in the cache that is 'orphaned'. Orphaned
   * means not a part of any target, so the only entry in the target-document index for
   * that document will be the sentinel row (targetId 0), which will also have the sequence
   * number for the last time the document was accessed.
   */
  Qn(t2, e) {
    const n = ro(t2);
    let s, i = $t.at;
    return n.X({
      index: "documentTargetsIndex"
    }, ([t3, n2], { path: r, sequenceNumber: o }) => {
      0 === t3 ? (
        // if nextToReport is valid, report it, this is a new key so the
        // last one must not be a member of any targets.
        (i !== $t.at && e(new ct(Ai(s)), i), // set nextToReport to be this sequence number. It's the next one we
        // might report, if we don't find any targets for this document.
        // Note that the sequence number must be defined when the targetId
        // is 0.
        i = o, s = r)
      ) : (
        // set nextToReport to be invalid, we know we don't need to report
        // this one since we found a target for it.
        i = $t.at
      );
    }).next(() => {
      i !== $t.at && e(new ct(Ai(s)), i);
    });
  }
  getCacheSize(t2) {
    return this.db.getRemoteDocumentCache().getSize(t2);
  }
};
function lo(t2, e) {
  return ro(t2).put(
    /**
    * @returns A value suitable for writing a sentinel row in the target-document
    * store.
    */
    function(t3, e2) {
      return {
        targetId: 0,
        path: Ii(t3.path),
        sequenceNumber: e2
      };
    }(e, t2.currentSequenceNumber)
  );
}
var fo = class {
  constructor() {
    this.changes = new ws((t2) => t2.toString(), (t2, e) => t2.isEqual(e)), this.changesApplied = false;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(t2) {
    this.assertNotApplied(), this.changes.set(t2.key, t2);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(t2, e) {
    this.assertNotApplied(), this.changes.set(t2, sn.newInvalidDocument(t2).setReadTime(e));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(t2, e) {
    this.assertNotApplied();
    const n = this.changes.get(e);
    return void 0 !== n ? At.resolve(n) : this.getFromCache(t2, e);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(t2, e) {
    return this.getAllFromCache(t2, e);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(t2) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t2);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
};
var _o = class {
  constructor(t2) {
    this.Tt = t2;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  /**
   * Adds the supplied entries to the cache.
   *
   * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  addEntry(t2, e, n) {
    return yo(t2).put(n);
  }
  /**
   * Removes a document from the cache.
   *
   * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  removeEntry(t2, e, n) {
    return yo(t2).delete(
      /**
      * Returns a key that can be used for document lookups via the primary key of
      * the DbRemoteDocument object store.
      */
      function(t3, e2) {
        const n2 = t3.path.toArray();
        return [
          /* prefix path */
          n2.slice(0, n2.length - 2),
          /* collection id */
          n2[n2.length - 2],
          nr(e2),
          /* document id */
          n2[n2.length - 1]
        ];
      }(e, n)
    );
  }
  /**
   * Updates the current cache size.
   *
   * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
   * cache's metadata.
   */
  updateMetadata(t2, e) {
    return this.getMetadata(t2).next((n) => (n.byteSize += e, this.zn(t2, n)));
  }
  getEntry(t2, e) {
    let n = sn.newInvalidDocument(e);
    return yo(t2).X({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(po(e))
    }, (t3, s) => {
      n = this.Wn(e, s);
    }).next(() => n);
  }
  /**
   * Looks up an entry in the cache.
   *
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document entry and its size.
   */
  Hn(t2, e) {
    let n = {
      size: 0,
      document: sn.newInvalidDocument(e)
    };
    return yo(t2).X({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(po(e))
    }, (t3, s) => {
      n = {
        document: this.Wn(e, s),
        size: Hr(s)
      };
    }).next(() => n);
  }
  getEntries(t2, e) {
    let n = gs();
    return this.Jn(t2, e, (t3, e2) => {
      const s = this.Wn(t3, e2);
      n = n.insert(t3, s);
    }).next(() => n);
  }
  /**
   * Looks up several entries in the cache.
   *
   * @param documentKeys - The set of keys entries to look up.
   * @returns A map of documents indexed by key and a map of sizes indexed by
   *     key (zero if the document does not exist).
   */
  Yn(t2, e) {
    let n = gs(), s = new We(ct.comparator);
    return this.Jn(t2, e, (t3, e2) => {
      const i = this.Wn(t3, e2);
      n = n.insert(t3, i), s = s.insert(t3, Hr(e2));
    }).next(() => ({
      documents: n,
      Zn: s
    }));
  }
  Jn(t2, e, n) {
    if (e.isEmpty())
      return At.resolve();
    let s = new Ye(To);
    e.forEach((t3) => s = s.add(t3));
    const i = IDBKeyRange.bound(po(s.first()), po(s.last())), r = s.getIterator();
    let o = r.getNext();
    return yo(t2).X({
      index: "documentKeyIndex",
      range: i
    }, (t3, e2, s2) => {
      const i2 = ct.fromSegments([...e2.prefixPath, e2.collectionGroup, e2.documentId]);
      for (; o && To(o, i2) < 0; )
        n(o, null), o = r.getNext();
      o && o.isEqual(i2) && // Key found in cache.
      (n(o, e2), o = r.hasNext() ? r.getNext() : null), // Skip to the next key (if there is one).
      o ? s2.j(po(o)) : s2.done();
    }).next(() => {
      for (; o; )
        n(o, null), o = r.hasNext() ? r.getNext() : null;
    });
  }
  getDocumentsMatchingQuery(t2, e, n, s) {
    const i = e.path, r = [i.popLast().toArray(), i.lastSegment(), nr(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()], o = [i.popLast().toArray(), i.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
    return yo(t2).W(IDBKeyRange.bound(r, o, true)).next((t3) => {
      let n2 = gs();
      for (const i2 of t3) {
        const t4 = this.Wn(ct.fromSegments(i2.prefixPath.concat(i2.collectionGroup, i2.documentId)), i2);
        t4.isFoundDocument() && (bn(e, t4) || s.has(t4.key)) && // Either the document matches the given query, or it is mutated.
        (n2 = n2.insert(t4.key, t4));
      }
      return n2;
    });
  }
  getAllFromCollectionGroup(t2, e, n, s) {
    let i = gs();
    const r = Io(e, n), o = Io(e, yt.max());
    return yo(t2).X({
      index: "collectionGroupIndex",
      range: IDBKeyRange.bound(r, o, true)
    }, (t3, e2, n2) => {
      const r2 = this.Wn(ct.fromSegments(e2.prefixPath.concat(e2.collectionGroup, e2.documentId)), e2);
      i = i.insert(r2.key, r2), i.size === s && n2.done();
    }).next(() => i);
  }
  newChangeBuffer(t2) {
    return new mo(this, !!t2 && t2.trackRemovals);
  }
  getSize(t2) {
    return this.getMetadata(t2).next((t3) => t3.byteSize);
  }
  getMetadata(t2) {
    return go(t2).get("remoteDocumentGlobalKey").next((t3) => (M2(!!t3), t3));
  }
  zn(t2, e) {
    return go(t2).put("remoteDocumentGlobalKey", e);
  }
  /**
   * Decodes `dbRemoteDoc` and returns the document (or an invalid document if
   * the document corresponds to the format used for sentinel deletes).
   */
  Wn(t2, e) {
    if (e) {
      const t3 = tr(this.Tt, e);
      if (!(t3.isNoDocument() && t3.version.isEqual(st.min())))
        return t3;
    }
    return sn.newInvalidDocument(t2);
  }
};
function wo(t2) {
  return new _o(t2);
}
var mo = class extends fo {
  /**
   * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
   * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
   * `getNewDocumentChanges()`.
   */
  constructor(t2, e) {
    super(), this.Xn = t2, this.trackRemovals = e, // A map of document sizes and read times prior to applying the changes in
    // this buffer.
    this.ts = new ws((t3) => t3.toString(), (t3, e2) => t3.isEqual(e2));
  }
  applyChanges(t2) {
    const e = [];
    let n = 0, s = new Ye((t3, e2) => X2(t3.canonicalString(), e2.canonicalString()));
    return this.changes.forEach((i, r) => {
      const o = this.ts.get(i);
      if (e.push(this.Xn.removeEntry(t2, i, o.readTime)), r.isValidDocument()) {
        const u = er(this.Xn.Tt, r);
        s = s.add(i.path.popLast());
        const c = Hr(u);
        n += c - o.size, e.push(this.Xn.addEntry(t2, i, u));
      } else if (n -= o.size, this.trackRemovals) {
        const n2 = er(this.Xn.Tt, r.convertToNoDocument(st.min()));
        e.push(this.Xn.addEntry(t2, i, n2));
      }
    }), s.forEach((n2) => {
      e.push(this.Xn.indexManager.addToCollectionParentIndex(t2, n2));
    }), e.push(this.Xn.updateMetadata(t2, n)), At.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.Xn.Hn(t2, e).next((t3) => (this.ts.set(e, {
      size: t3.size,
      readTime: t3.document.readTime
    }), t3.document));
  }
  getAllFromCache(t2, e) {
    return this.Xn.Yn(t2, e).next(({ documents: t3, Zn: e2 }) => (
      // Note: `getAllFromCache` returns two maps instead of a single map from
      // keys to `DocumentSizeEntry`s. This is to allow returning the
      // `MutableDocumentMap` directly, without a conversion.
      (e2.forEach((e3, n) => {
        this.ts.set(e3, {
          size: n,
          readTime: t3.get(e3).readTime
        });
      }), t3)
    ));
  }
};
function go(t2) {
  return Wi(t2, "remoteDocumentGlobal");
}
function yo(t2) {
  return Wi(t2, "remoteDocumentsV14");
}
function po(t2) {
  const e = t2.path.toArray();
  return [
    /* prefix path */
    e.slice(0, e.length - 2),
    /* collection id */
    e[e.length - 2],
    /* document id */
    e[e.length - 1]
  ];
}
function Io(t2, e) {
  const n = e.documentKey.path.toArray();
  return [
    /* collection id */
    t2,
    nr(e.readTime),
    /* prefix path */
    n.slice(0, n.length - 2),
    /* document id */
    n.length > 0 ? n[n.length - 1] : ""
  ];
}
function To(t2, e) {
  const n = t2.path.toArray(), s = e.path.toArray();
  let i = 0;
  for (let t3 = 0; t3 < n.length - 2 && t3 < s.length - 2; ++t3)
    if (i = X2(n[t3], s[t3]), i)
      return i;
  return i = X2(n.length, s.length), i || (i = X2(n[n.length - 2], s[s.length - 2]), i || X2(n[n.length - 1], s[s.length - 1]));
}
var Eo = class {
  constructor(t2, e) {
    this.overlayedDocument = t2, this.mutatedFields = e;
  }
};
var Ao = class {
  constructor(t2, e, n, s) {
    this.remoteDocumentCache = t2, this.mutationQueue = e, this.documentOverlayCache = n, this.indexManager = s;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(t2, e) {
    let n = null;
    return this.documentOverlayCache.getOverlay(t2, e).next((s) => (n = s, this.remoteDocumentCache.getEntry(t2, e))).next((t3) => (null !== n && ts(n.mutation, t3, tn.empty(), nt.now()), t3));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.getLocalViewOfDocuments(t2, e2, vs()).next(() => e2));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(t2, e, n = vs()) {
    const s = Ts();
    return this.populateOverlays(t2, s, e).next(() => this.computeViews(t2, e, s, n).next((t3) => {
      let e2 = ps();
      return t3.forEach((t4, n2) => {
        e2 = e2.insert(t4, n2.overlayedDocument);
      }), e2;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(t2, e) {
    const n = Ts();
    return this.populateOverlays(t2, n, e).next(() => this.computeViews(t2, e, n, vs()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(t2, e, n) {
    const s = [];
    return n.forEach((t3) => {
      e.has(t3) || s.push(t3);
    }), this.documentOverlayCache.getOverlays(t2, s).next((t3) => {
      t3.forEach((t4, n2) => {
        e.set(t4, n2);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(t2, e, n, s) {
    let i = gs();
    const r = As(), o = As();
    return e.forEach((t3, e2) => {
      const o2 = n.get(e2.key);
      s.has(e2.key) && (void 0 === o2 || o2.mutation instanceof is) ? i = i.insert(e2.key, e2) : void 0 !== o2 ? (r.set(e2.key, o2.mutation.getFieldMask()), ts(o2.mutation, e2, o2.mutation.getFieldMask(), nt.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        r.set(e2.key, tn.empty())
      );
    }), this.recalculateAndSaveOverlays(t2, i).next((t3) => (t3.forEach((t4, e2) => r.set(t4, e2)), e.forEach((t4, e2) => {
      var n2;
      return o.set(t4, new Eo(e2, null !== (n2 = r.get(t4)) && void 0 !== n2 ? n2 : null));
    }), o));
  }
  recalculateAndSaveOverlays(t2, e) {
    const n = As();
    let s = new We((t3, e2) => t3 - e2), i = vs();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t2, e).next((t3) => {
      for (const i2 of t3)
        i2.keys().forEach((t4) => {
          const r = e.get(t4);
          if (null === r)
            return;
          let o = n.get(t4) || tn.empty();
          o = i2.applyToLocalView(r, o), n.set(t4, o);
          const u = (s.get(i2.batchId) || vs()).add(t4);
          s = s.insert(i2.batchId, u);
        });
    }).next(() => {
      const r = [], o = s.getReverseIterator();
      for (; o.hasNext(); ) {
        const s2 = o.getNext(), u = s2.key, c = s2.value, a = Es();
        c.forEach((t3) => {
          if (!i.has(t3)) {
            const s3 = Zn(e.get(t3), n.get(t3));
            null !== s3 && a.set(t3, s3), i = i.add(t3);
          }
        }), r.push(this.documentOverlayCache.saveOverlays(t2, u, a));
      }
      return At.waitFor(r);
    }).next(() => n);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.recalculateAndSaveOverlays(t2, e2));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   */
  getDocumentsMatchingQuery(t2, e, n) {
    return function(t3) {
      return ct.isDocumentKey(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
    }(e) ? this.getDocumentsMatchingDocumentQuery(t2, e.path) : pn(e) ? this.getDocumentsMatchingCollectionGroupQuery(t2, e, n) : this.getDocumentsMatchingCollectionQuery(t2, e, n);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(t2, e, n, s) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t2, e, n, s).next((i) => {
      const r = s - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t2, e, n.largestBatchId, s - i.size) : At.resolve(Ts());
      let o = -1, u = i;
      return r.next((e2) => At.forEach(e2, (e3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(e3) ? At.resolve() : this.remoteDocumentCache.getEntry(t2, e3).next((t3) => {
        u = u.insert(e3, t3);
      }))).next(() => this.populateOverlays(t2, e2, i)).next(() => this.computeViews(t2, u, e2, vs())).next((t3) => ({
        batchId: o,
        changes: Is(t3)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t2, e) {
    return this.getDocument(t2, new ct(e)).next((t3) => {
      let e2 = ps();
      return t3.isFoundDocument() && (e2 = e2.insert(t3.key, t3)), e2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t2, e, n) {
    const s = e.collectionGroup;
    let i = ps();
    return this.indexManager.getCollectionParents(t2, s).next((r) => At.forEach(r, (r2) => {
      const o = function(t3, e2) {
        return new dn(
          e2,
          /*collectionGroup=*/
          null,
          t3.explicitOrderBy.slice(),
          t3.filters.slice(),
          t3.limit,
          t3.limitType,
          t3.startAt,
          t3.endAt
        );
      }(e, r2.child(s));
      return this.getDocumentsMatchingCollectionQuery(t2, o, n).next((t3) => {
        t3.forEach((t4, e2) => {
          i = i.insert(t4, e2);
        });
      });
    }).next(() => i));
  }
  getDocumentsMatchingCollectionQuery(t2, e, n) {
    let s;
    return this.documentOverlayCache.getOverlaysForCollection(t2, e.path, n.largestBatchId).next((i) => (s = i, this.remoteDocumentCache.getDocumentsMatchingQuery(t2, e, n, s))).next((t3) => {
      s.forEach((e2, n3) => {
        const s2 = n3.getKey();
        null === t3.get(s2) && (t3 = t3.insert(s2, sn.newInvalidDocument(s2)));
      });
      let n2 = ps();
      return t3.forEach((t4, i) => {
        const r = s.get(t4);
        void 0 !== r && ts(r.mutation, i, tn.empty(), nt.now()), // Finally, insert the documents that still match the query
        bn(e, i) && (n2 = n2.insert(t4, i));
      }), n2;
    });
  }
};
var Ro = class {
  constructor(t2) {
    this.Tt = t2, this.es = /* @__PURE__ */ new Map(), this.ns = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t2, e) {
    return At.resolve(this.es.get(e));
  }
  saveBundleMetadata(t2, e) {
    var n;
    return this.es.set(e.id, {
      id: (n = e).id,
      version: n.version,
      createTime: Qs(n.createTime)
    }), At.resolve();
  }
  getNamedQuery(t2, e) {
    return At.resolve(this.ns.get(e));
  }
  saveNamedQuery(t2, e) {
    return this.ns.set(e.name, function(t3) {
      return {
        name: t3.name,
        query: cr(t3.bundledQuery),
        readTime: Qs(t3.readTime)
      };
    }(e)), At.resolve();
  }
};
var Po = class {
  constructor() {
    this.overlays = new We(ct.comparator), this.ss = /* @__PURE__ */ new Map();
  }
  getOverlay(t2, e) {
    return At.resolve(this.overlays.get(e));
  }
  getOverlays(t2, e) {
    const n = Ts();
    return At.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n.set(e2, t3);
    })).next(() => n);
  }
  saveOverlays(t2, e, n) {
    return n.forEach((n2, s) => {
      this.ce(t2, e, s);
    }), At.resolve();
  }
  removeOverlaysForBatchId(t2, e, n) {
    const s = this.ss.get(n);
    return void 0 !== s && (s.forEach((t3) => this.overlays = this.overlays.remove(t3)), this.ss.delete(n)), At.resolve();
  }
  getOverlaysForCollection(t2, e, n) {
    const s = Ts(), i = e.length + 1, r = new ct(e.child("")), o = this.overlays.getIteratorFrom(r);
    for (; o.hasNext(); ) {
      const t3 = o.getNext().value, r2 = t3.getKey();
      if (!e.isPrefixOf(r2.path))
        break;
      r2.path.length === i && (t3.largestBatchId > n && s.set(t3.getKey(), t3));
    }
    return At.resolve(s);
  }
  getOverlaysForCollectionGroup(t2, e, n, s) {
    let i = new We((t3, e2) => t3 - e2);
    const r = this.overlays.getIterator();
    for (; r.hasNext(); ) {
      const t3 = r.getNext().value;
      if (t3.getKey().getCollectionGroup() === e && t3.largestBatchId > n) {
        let e2 = i.get(t3.largestBatchId);
        null === e2 && (e2 = Ts(), i = i.insert(t3.largestBatchId, e2)), e2.set(t3.getKey(), t3);
      }
    }
    const o = Ts(), u = i.getIterator();
    for (; u.hasNext(); ) {
      if (u.getNext().value.forEach((t3, e2) => o.set(t3, e2)), o.size() >= s)
        break;
    }
    return At.resolve(o);
  }
  ce(t2, e, n) {
    const s = this.overlays.get(n.key);
    if (null !== s) {
      const t3 = this.ss.get(s.largestBatchId).delete(n.key);
      this.ss.set(s.largestBatchId, t3);
    }
    this.overlays = this.overlays.insert(n.key, new Yi(e, n));
    let i = this.ss.get(e);
    void 0 === i && (i = vs(), this.ss.set(e, i)), this.ss.set(e, i.add(n.key));
  }
};
var vo = class {
  constructor() {
    this.rs = new Ye(bo.os), // A set of outstanding references to a document sorted by target id.
    this.us = new Ye(bo.cs);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.rs.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(t2, e) {
    const n = new bo(t2, e);
    this.rs = this.rs.add(n), this.us = this.us.add(n);
  }
  /** Add references to the given document keys for the given ID. */
  hs(t2, e) {
    t2.forEach((t3) => this.addReference(t3, e));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(t2, e) {
    this.ls(new bo(t2, e));
  }
  fs(t2, e) {
    t2.forEach((t3) => this.removeReference(t3, e));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  ds(t2) {
    const e = new ct(new rt([])), n = new bo(e, t2), s = new bo(e, t2 + 1), i = [];
    return this.us.forEachInRange([n, s], (t3) => {
      this.ls(t3), i.push(t3.key);
    }), i;
  }
  _s() {
    this.rs.forEach((t2) => this.ls(t2));
  }
  ls(t2) {
    this.rs = this.rs.delete(t2), this.us = this.us.delete(t2);
  }
  ws(t2) {
    const e = new ct(new rt([])), n = new bo(e, t2), s = new bo(e, t2 + 1);
    let i = vs();
    return this.us.forEachInRange([n, s], (t3) => {
      i = i.add(t3.key);
    }), i;
  }
  containsKey(t2) {
    const e = new bo(t2, 0), n = this.rs.firstAfterOrEqual(e);
    return null !== n && t2.isEqual(n.key);
  }
};
var bo = class {
  constructor(t2, e) {
    this.key = t2, this.gs = e;
  }
  /** Compare by key then by ID */
  static os(t2, e) {
    return ct.comparator(t2.key, e.key) || X2(t2.gs, e.gs);
  }
  /** Compare by ID then by key */
  static cs(t2, e) {
    return X2(t2.gs, e.gs) || ct.comparator(t2.key, e.key);
  }
};
var Vo = class {
  constructor(t2, e) {
    this.indexManager = t2, this.referenceDelegate = e, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.ys = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.ps = new Ye(bo.os);
  }
  checkEmpty(t2) {
    return At.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(t2, e, n, s) {
    const i = this.ys;
    this.ys++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const r = new Hi(i, e, n, s);
    this.mutationQueue.push(r);
    for (const e2 of s)
      this.ps = this.ps.add(new bo(e2.key, i)), this.indexManager.addToCollectionParentIndex(t2, e2.key.path.popLast());
    return At.resolve(r);
  }
  lookupMutationBatch(t2, e) {
    return At.resolve(this.Is(e));
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n = e + 1, s = this.Ts(n), i = s < 0 ? 0 : s;
    return At.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return At.resolve(0 === this.mutationQueue.length ? -1 : this.ys - 1);
  }
  getAllMutationBatches(t2) {
    return At.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n = new bo(e, 0), s = new bo(e, Number.POSITIVE_INFINITY), i = [];
    return this.ps.forEachInRange([n, s], (t3) => {
      const e2 = this.Is(t3.gs);
      i.push(e2);
    }), At.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n = new Ye(X2);
    return e.forEach((t3) => {
      const e2 = new bo(t3, 0), s = new bo(t3, Number.POSITIVE_INFINITY);
      this.ps.forEachInRange([e2, s], (t4) => {
        n = n.add(t4.gs);
      });
    }), At.resolve(this.Es(n));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n = e.path, s = n.length + 1;
    let i = n;
    ct.isDocumentKey(i) || (i = i.child(""));
    const r = new bo(new ct(i), 0);
    let o = new Ye(X2);
    return this.ps.forEachWhile((t3) => {
      const e2 = t3.key.path;
      return !!n.isPrefixOf(e2) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (e2.length === s && (o = o.add(t3.gs)), true);
    }, r), At.resolve(this.Es(o));
  }
  Es(t2) {
    const e = [];
    return t2.forEach((t3) => {
      const n = this.Is(t3);
      null !== n && e.push(n);
    }), e;
  }
  removeMutationBatch(t2, e) {
    M2(0 === this.As(e.batchId, "removed")), this.mutationQueue.shift();
    let n = this.ps;
    return At.forEach(e.mutations, (s) => {
      const i = new bo(s.key, e.batchId);
      return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t2, s.key);
    }).next(() => {
      this.ps = n;
    });
  }
  Pn(t2) {
  }
  containsKey(t2, e) {
    const n = new bo(e, 0), s = this.ps.firstAfterOrEqual(n);
    return At.resolve(e.isEqual(s && s.key));
  }
  performConsistencyCheck(t2) {
    return this.mutationQueue.length, At.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  As(t2, e) {
    return this.Ts(t2);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been remvoed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  Ts(t2) {
    if (0 === this.mutationQueue.length)
      return 0;
    return t2 - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficent.
   */
  Is(t2) {
    const e = this.Ts(t2);
    if (e < 0 || e >= this.mutationQueue.length)
      return null;
    return this.mutationQueue[e];
  }
};
var So = class {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(t2) {
    this.Rs = t2, /** Underlying cache of documents and their read times. */
    this.docs = new We(ct.comparator), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(t2, e) {
    const n = e.key, s = this.docs.get(n), i = s ? s.size : 0, r = this.Rs(e);
    return this.docs = this.docs.insert(n, {
      document: e.mutableCopy(),
      size: r
    }), this.size += r - i, this.indexManager.addToCollectionParentIndex(t2, n.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(t2) {
    const e = this.docs.get(t2);
    e && (this.docs = this.docs.remove(t2), this.size -= e.size);
  }
  getEntry(t2, e) {
    const n = this.docs.get(e);
    return At.resolve(n ? n.document.mutableCopy() : sn.newInvalidDocument(e));
  }
  getEntries(t2, e) {
    let n = gs();
    return e.forEach((t3) => {
      const e2 = this.docs.get(t3);
      n = n.insert(t3, e2 ? e2.document.mutableCopy() : sn.newInvalidDocument(t3));
    }), At.resolve(n);
  }
  getDocumentsMatchingQuery(t2, e, n, s) {
    let i = gs();
    const r = e.path, o = new ct(r.child("")), u = this.docs.getIteratorFrom(o);
    for (; u.hasNext(); ) {
      const { key: t3, value: { document: o2 } } = u.getNext();
      if (!r.isPrefixOf(t3.path))
        break;
      t3.path.length > r.length + 1 || (pt(gt(o2), n) <= 0 || (s.has(o2.key) || bn(e, o2)) && (i = i.insert(o2.key, o2.mutableCopy())));
    }
    return At.resolve(i);
  }
  getAllFromCollectionGroup(t2, e, n, s) {
    $();
  }
  Ps(t2, e) {
    return At.forEach(this.docs, (t3) => e(t3));
  }
  newChangeBuffer(t2) {
    return new Do(this);
  }
  getSize(t2) {
    return At.resolve(this.size);
  }
};
var Do = class extends fo {
  constructor(t2) {
    super(), this.Xn = t2;
  }
  applyChanges(t2) {
    const e = [];
    return this.changes.forEach((n, s) => {
      s.isValidDocument() ? e.push(this.Xn.addEntry(t2, s)) : this.Xn.removeEntry(n);
    }), At.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.Xn.getEntry(t2, e);
  }
  getAllFromCache(t2, e) {
    return this.Xn.getEntries(t2, e);
  }
};
var Co = class {
  constructor(t2) {
    this.persistence = t2, /**
     * Maps a target to the data about that target
     */
    this.vs = new ws((t3) => un(t3), cn), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = st.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.bs = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.Vs = new vo(), this.targetCount = 0, this.Ss = eo.Vn();
  }
  forEachTarget(t2, e) {
    return this.vs.forEach((t3, n) => e(n)), At.resolve();
  }
  getLastRemoteSnapshotVersion(t2) {
    return At.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t2) {
    return At.resolve(this.bs);
  }
  allocateTargetId(t2) {
    return this.highestTargetId = this.Ss.next(), At.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t2, e, n) {
    return n && (this.lastRemoteSnapshotVersion = n), e > this.bs && (this.bs = e), At.resolve();
  }
  xn(t2) {
    this.vs.set(t2.target, t2);
    const e = t2.targetId;
    e > this.highestTargetId && (this.Ss = new eo(e), this.highestTargetId = e), t2.sequenceNumber > this.bs && (this.bs = t2.sequenceNumber);
  }
  addTargetData(t2, e) {
    return this.xn(e), this.targetCount += 1, At.resolve();
  }
  updateTargetData(t2, e) {
    return this.xn(e), At.resolve();
  }
  removeTargetData(t2, e) {
    return this.vs.delete(e.target), this.Vs.ds(e.targetId), this.targetCount -= 1, At.resolve();
  }
  removeTargets(t2, e, n) {
    let s = 0;
    const i = [];
    return this.vs.forEach((r, o) => {
      o.sequenceNumber <= e && null === n.get(o.targetId) && (this.vs.delete(r), i.push(this.removeMatchingKeysForTargetId(t2, o.targetId)), s++);
    }), At.waitFor(i).next(() => s);
  }
  getTargetCount(t2) {
    return At.resolve(this.targetCount);
  }
  getTargetData(t2, e) {
    const n = this.vs.get(e) || null;
    return At.resolve(n);
  }
  addMatchingKeys(t2, e, n) {
    return this.Vs.hs(e, n), At.resolve();
  }
  removeMatchingKeys(t2, e, n) {
    this.Vs.fs(e, n);
    const s = this.persistence.referenceDelegate, i = [];
    return s && e.forEach((e2) => {
      i.push(s.markPotentiallyOrphaned(t2, e2));
    }), At.waitFor(i);
  }
  removeMatchingKeysForTargetId(t2, e) {
    return this.Vs.ds(e), At.resolve();
  }
  getMatchingKeysForTargetId(t2, e) {
    const n = this.Vs.ws(e);
    return At.resolve(n);
  }
  containsKey(t2, e) {
    return At.resolve(this.Vs.containsKey(e));
  }
};
var xo = class {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(t2, e) {
    this.Ds = {}, this.overlays = {}, this.Cs = new $t(0), this.xs = false, this.xs = true, this.referenceDelegate = t2(this), this.Ns = new Co(this);
    this.indexManager = new Or(), this.remoteDocumentCache = function(t3) {
      return new So(t3);
    }((t3) => this.referenceDelegate.ks(t3)), this.Tt = new Xi(e), this.$s = new Ro(this.Tt);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.xs = false, Promise.resolve();
  }
  get started() {
    return this.xs;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t2) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t2) {
    let e = this.overlays[t2.toKey()];
    return e || (e = new Po(), this.overlays[t2.toKey()] = e), e;
  }
  getMutationQueue(t2, e) {
    let n = this.Ds[t2.toKey()];
    return n || (n = new Vo(e, this.referenceDelegate), this.Ds[t2.toKey()] = n), n;
  }
  getTargetCache() {
    return this.Ns;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.$s;
  }
  runTransaction(t2, e, n) {
    C2("MemoryPersistence", "Starting transaction:", t2);
    const s = new No(this.Cs.next());
    return this.referenceDelegate.Ms(), n(s).next((t3) => this.referenceDelegate.Os(s).next(() => t3)).toPromise().then((t3) => (s.raiseOnCommittedEvent(), t3));
  }
  Fs(t2, e) {
    return At.or(Object.values(this.Ds).map((n) => () => n.containsKey(t2, e)));
  }
};
var No = class extends Tt {
  constructor(t2) {
    super(), this.currentSequenceNumber = t2;
  }
};
var ko = class {
  constructor(t2) {
    this.persistence = t2, /** Tracks all documents that are active in Query views. */
    this.Bs = new vo(), /** The list of documents that are potentially GCed after each transaction. */
    this.Ls = null;
  }
  static qs(t2) {
    return new ko(t2);
  }
  get Us() {
    if (this.Ls)
      return this.Ls;
    throw $();
  }
  addReference(t2, e, n) {
    return this.Bs.addReference(n, e), this.Us.delete(n.toString()), At.resolve();
  }
  removeReference(t2, e, n) {
    return this.Bs.removeReference(n, e), this.Us.add(n.toString()), At.resolve();
  }
  markPotentiallyOrphaned(t2, e) {
    return this.Us.add(e.toString()), At.resolve();
  }
  removeTarget(t2, e) {
    this.Bs.ds(e.targetId).forEach((t3) => this.Us.add(t3.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(t2, e.targetId).next((t3) => {
      t3.forEach((t4) => this.Us.add(t4.toString()));
    }).next(() => n.removeTargetData(t2, e));
  }
  Ms() {
    this.Ls = /* @__PURE__ */ new Set();
  }
  Os(t2) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return At.forEach(this.Us, (n) => {
      const s = ct.fromPath(n);
      return this.Ks(t2, s).next((t3) => {
        t3 || e.removeEntry(s, st.min());
      });
    }).next(() => (this.Ls = null, e.apply(t2)));
  }
  updateLimboDocument(t2, e) {
    return this.Ks(t2, e).next((t3) => {
      t3 ? this.Us.delete(e.toString()) : this.Us.add(e.toString());
    });
  }
  ks(t2) {
    return 0;
  }
  Ks(t2, e) {
    return At.or([() => At.resolve(this.Bs.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t2, e), () => this.persistence.Fs(t2, e)]);
  }
};
var $o = class {
  constructor(t2) {
    this.Tt = t2;
  }
  /**
   * Performs database creation and schema upgrades.
   *
   * Note that in production, this method is only ever used to upgrade the schema
   * to SCHEMA_VERSION. Different values of toVersion are only used for testing
   * and local feature development.
   */
  F(t2, e, n, s) {
    const i = new Rt("createOrUpgrade", e);
    n < 1 && s >= 1 && (function(t3) {
      t3.createObjectStore("owner");
    }(t2), function(t3) {
      t3.createObjectStore("mutationQueues", {
        keyPath: "userId"
      });
      t3.createObjectStore("mutations", {
        keyPath: "batchId",
        autoIncrement: true
      }).createIndex("userMutationsIndex", Ri, {
        unique: true
      }), t3.createObjectStore("documentMutations");
    }(t2), Mo(t2), function(t3) {
      t3.createObjectStore("remoteDocuments");
    }(t2));
    let r = At.resolve();
    return n < 3 && s >= 3 && // Brand new clients don't need to drop and recreate--only clients that
    // potentially have corrupt data.
    (0 !== n && (!function(t3) {
      t3.deleteObjectStore("targetDocuments"), t3.deleteObjectStore("targets"), t3.deleteObjectStore("targetGlobal");
    }(t2), Mo(t2)), r = r.next(() => (
      /**
      * Creates the target global singleton row.
      *
      * @param txn - The version upgrade transaction for indexeddb
      */
      function(t3) {
        const e2 = t3.store("targetGlobal"), n2 = {
          highestTargetId: 0,
          highestListenSequenceNumber: 0,
          lastRemoteSnapshotVersion: st.min().toTimestamp(),
          targetCount: 0
        };
        return e2.put("targetGlobalKey", n2);
      }(i)
    ))), n < 4 && s >= 4 && (0 !== n && // Schema version 3 uses auto-generated keys to generate globally unique
    // mutation batch IDs (this was previously ensured internally by the
    // client). To migrate to the new schema, we have to read all mutations
    // and write them back out. We preserve the existing batch IDs to guarantee
    // consistency with other object stores. Any further mutation batch IDs will
    // be auto-generated.
    (r = r.next(() => function(t3, e2) {
      return e2.store("mutations").W().next((n2) => {
        t3.deleteObjectStore("mutations");
        t3.createObjectStore("mutations", {
          keyPath: "batchId",
          autoIncrement: true
        }).createIndex("userMutationsIndex", Ri, {
          unique: true
        });
        const s2 = e2.store("mutations"), i2 = n2.map((t4) => s2.put(t4));
        return At.waitFor(i2);
      });
    }(t2, i))), r = r.next(() => {
      !function(t3) {
        t3.createObjectStore("clientMetadata", {
          keyPath: "clientId"
        });
      }(t2);
    })), n < 5 && s >= 5 && (r = r.next(() => this.Gs(i))), n < 6 && s >= 6 && (r = r.next(() => (function(t3) {
      t3.createObjectStore("remoteDocumentGlobal");
    }(t2), this.Qs(i)))), n < 7 && s >= 7 && (r = r.next(() => this.js(i))), n < 8 && s >= 8 && (r = r.next(() => this.zs(t2, i))), n < 9 && s >= 9 && (r = r.next(() => {
      !function(t3) {
        t3.objectStoreNames.contains("remoteDocumentChanges") && t3.deleteObjectStore("remoteDocumentChanges");
      }(t2);
    })), n < 10 && s >= 10 && (r = r.next(() => this.Ws(i))), n < 11 && s >= 11 && (r = r.next(() => {
      !function(t3) {
        t3.createObjectStore("bundles", {
          keyPath: "bundleId"
        });
      }(t2), function(t3) {
        t3.createObjectStore("namedQueries", {
          keyPath: "name"
        });
      }(t2);
    })), n < 12 && s >= 12 && (r = r.next(() => {
      !function(t3) {
        const e2 = t3.createObjectStore("documentOverlays", {
          keyPath: Bi
        });
        e2.createIndex("collectionPathOverlayIndex", Li, {
          unique: false
        }), e2.createIndex("collectionGroupOverlayIndex", qi, {
          unique: false
        });
      }(t2);
    })), n < 13 && s >= 13 && (r = r.next(() => function(t3) {
      const e2 = t3.createObjectStore("remoteDocumentsV14", {
        keyPath: Vi
      });
      e2.createIndex("documentKeyIndex", Si), e2.createIndex("collectionGroupIndex", Di);
    }(t2)).next(() => this.Hs(t2, i)).next(() => t2.deleteObjectStore("remoteDocuments"))), n < 14 && s >= 14 && (r = r.next(() => this.Js(t2, i))), n < 15 && s >= 15 && (r = r.next(() => function(t3) {
      t3.createObjectStore("indexConfiguration", {
        keyPath: "indexId",
        autoIncrement: true
      }).createIndex("collectionGroupIndex", "collectionGroup", {
        unique: false
      });
      t3.createObjectStore("indexState", {
        keyPath: $i
      }).createIndex("sequenceNumberIndex", Mi, {
        unique: false
      });
      t3.createObjectStore("indexEntries", {
        keyPath: Oi
      }).createIndex("documentKeyIndex", Fi, {
        unique: false
      });
    }(t2))), r;
  }
  Qs(t2) {
    let e = 0;
    return t2.store("remoteDocuments").X((t3, n) => {
      e += Hr(n);
    }).next(() => {
      const n = {
        byteSize: e
      };
      return t2.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n);
    });
  }
  Gs(t2) {
    const e = t2.store("mutationQueues"), n = t2.store("mutations");
    return e.W().next((e2) => At.forEach(e2, (e3) => {
      const s = IDBKeyRange.bound([e3.userId, -1], [e3.userId, e3.lastAcknowledgedBatchId]);
      return n.W("userMutationsIndex", s).next((n2) => At.forEach(n2, (n3) => {
        M2(n3.userId === e3.userId);
        const s2 = rr(this.Tt, n3);
        return Wr(t2, e3.userId, s2).next(() => {
        });
      }));
    }));
  }
  /**
   * Ensures that every document in the remote document cache has a corresponding sentinel row
   * with a sequence number. Missing rows are given the most recently used sequence number.
   */
  js(t2) {
    const e = t2.store("targetDocuments"), n = t2.store("remoteDocuments");
    return t2.store("targetGlobal").get("targetGlobalKey").next((t3) => {
      const s = [];
      return n.X((n2, i) => {
        const r = new rt(n2), o = function(t4) {
          return [0, Ii(t4)];
        }(r);
        s.push(e.get(o).next((n3) => n3 ? At.resolve() : ((n4) => e.put({
          targetId: 0,
          path: Ii(n4),
          sequenceNumber: t3.highestListenSequenceNumber
        }))(r)));
      }).next(() => At.waitFor(s));
    });
  }
  zs(t2, e) {
    t2.createObjectStore("collectionParents", {
      keyPath: ki
    });
    const n = e.store("collectionParents"), s = new Fr(), i = (t3) => {
      if (s.add(t3)) {
        const e2 = t3.lastSegment(), s2 = t3.popLast();
        return n.put({
          collectionId: e2,
          parent: Ii(s2)
        });
      }
    };
    return e.store("remoteDocuments").X({
      Z: true
    }, (t3, e2) => {
      const n2 = new rt(t3);
      return i(n2.popLast());
    }).next(() => e.store("documentMutations").X({
      Z: true
    }, ([t3, e2, n2], s2) => {
      const r = Ai(e2);
      return i(r.popLast());
    }));
  }
  Ws(t2) {
    const e = t2.store("targets");
    return e.X((t3, n) => {
      const s = or(n), i = ur(this.Tt, s);
      return e.put(i);
    });
  }
  Hs(t2, e) {
    const n = e.store("remoteDocuments"), s = [];
    return n.X((t3, n2) => {
      const i = e.store("remoteDocumentsV14"), r = (o = n2, o.document ? new ct(rt.fromString(o.document.name).popFirst(5)) : o.noDocument ? ct.fromSegments(o.noDocument.path) : o.unknownDocument ? ct.fromSegments(o.unknownDocument.path) : $()).path.toArray();
      var o;
      const u = {
        prefixPath: r.slice(0, r.length - 2),
        collectionGroup: r[r.length - 2],
        documentId: r[r.length - 1],
        readTime: n2.readTime || [0, 0],
        unknownDocument: n2.unknownDocument,
        noDocument: n2.noDocument,
        document: n2.document,
        hasCommittedMutations: !!n2.hasCommittedMutations
      };
      s.push(i.put(u));
    }).next(() => At.waitFor(s));
  }
  Js(t2, e) {
    const n = e.store("mutations"), s = wo(this.Tt), i = new xo(ko.qs, this.Tt.oe);
    return n.W().next((t3) => {
      const n2 = /* @__PURE__ */ new Map();
      return t3.forEach((t4) => {
        var e2;
        let s2 = null !== (e2 = n2.get(t4.userId)) && void 0 !== e2 ? e2 : vs();
        rr(this.Tt, t4).keys().forEach((t5) => s2 = s2.add(t5)), n2.set(t4.userId, s2);
      }), At.forEach(n2, (t4, n3) => {
        const r = new v2(n3), o = wr.ue(this.Tt, r), u = i.getIndexManager(r), c = Jr.ue(r, this.Tt, u, i.referenceDelegate);
        return new Ao(s, c, o, u).recalculateAndSaveOverlaysForDocumentKeys(new zi(e, $t.at), t4).next();
      });
    });
  }
};
function Mo(t2) {
  t2.createObjectStore("targetDocuments", {
    keyPath: xi
  }).createIndex("documentTargetsIndex", Ni, {
    unique: true
  });
  t2.createObjectStore("targets", {
    keyPath: "targetId"
  }).createIndex("queryTargetsIndex", Ci, {
    unique: true
  }), t2.createObjectStore("targetGlobal");
}
var Oo = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
var Fo = class {
  constructor(t2, e, n, s, i, r, o, u, c, a, h = 15) {
    if (this.allowTabSynchronization = t2, this.persistenceKey = e, this.clientId = n, this.Ys = i, this.window = r, this.document = o, this.Zs = c, this.Xs = a, this.ti = h, this.Cs = null, this.xs = false, this.isPrimary = false, this.networkEnabled = true, /** Our window.unload handler, if registered. */
    this.ei = null, this.inForeground = false, /** Our 'visibilitychange' listener if registered. */
    this.ni = null, /** The client metadata refresh task. */
    this.si = null, /** The last time we garbage collected the client metadata object store. */
    this.ii = Number.NEGATIVE_INFINITY, /** A listener to notify on primary state changes. */
    this.ri = (t3) => Promise.resolve(), !Fo.C())
      throw new L2(B2.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.referenceDelegate = new ho(this, s), this.oi = e + "main", this.Tt = new Xi(u), this.ui = new Pt(this.oi, this.ti, new $o(this.Tt)), this.Ns = new no(this.referenceDelegate, this.Tt), this.remoteDocumentCache = wo(this.Tt), this.$s = new fr(), this.window && this.window.localStorage ? this.ci = this.window.localStorage : (this.ci = null, false === a && x2("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  /**
   * Attempt to start IndexedDb persistence.
   *
   * @returns Whether persistence was enabled.
   */
  start() {
    return this.ai().then(() => {
      if (!this.isPrimary && !this.allowTabSynchronization)
        throw new L2(B2.FAILED_PRECONDITION, Oo);
      return this.hi(), this.li(), this.fi(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (t2) => this.Ns.getHighestSequenceNumber(t2));
    }).then((t2) => {
      this.Cs = new $t(t2, this.Zs);
    }).then(() => {
      this.xs = true;
    }).catch((t2) => (this.ui && this.ui.close(), Promise.reject(t2)));
  }
  /**
   * Registers a listener that gets called when the primary state of the
   * instance changes. Upon registering, this listener is invoked immediately
   * with the current primary state.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  di(t2) {
    return this.ri = async (e) => {
      if (this.started)
        return t2(e);
    }, t2(this.isPrimary);
  }
  /**
   * Registers a listener that gets called when the database receives a
   * version change event indicating that it has deleted.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  setDatabaseDeletedListener(t2) {
    this.ui.L(async (e) => {
      null === e.newVersion && await t2();
    });
  }
  /**
   * Adjusts the current network state in the client's metadata, potentially
   * affecting the primary lease.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  setNetworkEnabled(t2) {
    this.networkEnabled !== t2 && (this.networkEnabled = t2, // Schedule a primary lease refresh for immediate execution. The eventual
    // lease update will be propagated via `primaryStateListener`.
    this.Ys.enqueueAndForget(async () => {
      this.started && await this.ai();
    }));
  }
  /**
   * Updates the client metadata in IndexedDb and attempts to either obtain or
   * extend the primary lease for the local client. Asynchronously notifies the
   * primary state listener if the client either newly obtained or released its
   * primary lease.
   */
  ai() {
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (t2) => Lo(t2).put({
      clientId: this.clientId,
      updateTimeMs: Date.now(),
      networkEnabled: this.networkEnabled,
      inForeground: this.inForeground
    }).next(() => {
      if (this.isPrimary)
        return this._i(t2).next((t3) => {
          t3 || (this.isPrimary = false, this.Ys.enqueueRetryable(() => this.ri(false)));
        });
    }).next(() => this.wi(t2)).next((e) => this.isPrimary && !e ? this.mi(t2).next(() => false) : !!e && this.gi(t2).next(() => true))).catch((t2) => {
      if (Vt(t2))
        return C2("IndexedDbPersistence", "Failed to extend owner lease: ", t2), this.isPrimary;
      if (!this.allowTabSynchronization)
        throw t2;
      return C2("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t2), /* isPrimary= */
      false;
    }).then((t2) => {
      this.isPrimary !== t2 && this.Ys.enqueueRetryable(() => this.ri(t2)), this.isPrimary = t2;
    });
  }
  _i(t2) {
    return Bo(t2).get("owner").next((t3) => At.resolve(this.yi(t3)));
  }
  pi(t2) {
    return Lo(t2).delete(this.clientId);
  }
  /**
   * If the garbage collection threshold has passed, prunes the
   * RemoteDocumentChanges and the ClientMetadata store based on the last update
   * time of all clients.
   */
  async Ii() {
    if (this.isPrimary && !this.Ti(this.ii, 18e5)) {
      this.ii = Date.now();
      const t2 = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (t3) => {
        const e = Wi(t3, "clientMetadata");
        return e.W().next((t4) => {
          const n = this.Ei(t4, 18e5), s = t4.filter((t5) => -1 === n.indexOf(t5));
          return At.forEach(s, (t5) => e.delete(t5.clientId)).next(() => s);
        });
      }).catch(() => []);
      if (this.ci)
        for (const e of t2)
          this.ci.removeItem(this.Ai(e.clientId));
    }
  }
  /**
   * Schedules a recurring timer to update the client metadata and to either
   * extend or acquire the primary lease if the client is eligible.
   */
  fi() {
    this.si = this.Ys.enqueueAfterDelay("client_metadata_refresh", 4e3, () => this.ai().then(() => this.Ii()).then(() => this.fi()));
  }
  /** Checks whether `client` is the local client. */
  yi(t2) {
    return !!t2 && t2.ownerId === this.clientId;
  }
  /**
   * Evaluate the state of all active clients and determine whether the local
   * client is or can act as the holder of the primary lease. Returns whether
   * the client is eligible for the lease, but does not actually acquire it.
   * May return 'false' even if there is no active leaseholder and another
   * (foreground) client should become leaseholder instead.
   */
  wi(t2) {
    if (this.Xs)
      return At.resolve(true);
    return Bo(t2).get("owner").next((e) => {
      if (null !== e && this.Ti(e.leaseTimestampMs, 5e3) && !this.Ri(e.ownerId)) {
        if (this.yi(e) && this.networkEnabled)
          return true;
        if (!this.yi(e)) {
          if (!e.allowTabSynchronization)
            throw new L2(B2.FAILED_PRECONDITION, Oo);
          return false;
        }
      }
      return !(!this.networkEnabled || !this.inForeground) || Lo(t2).W().next((t3) => void 0 === this.Ei(t3, 5e3).find((t4) => {
        if (this.clientId !== t4.clientId) {
          const e2 = !this.networkEnabled && t4.networkEnabled, n = !this.inForeground && t4.inForeground, s = this.networkEnabled === t4.networkEnabled;
          if (e2 || n && s)
            return true;
        }
        return false;
      }));
    }).next((t3) => (this.isPrimary !== t3 && C2("IndexedDbPersistence", `Client ${t3 ? "is" : "is not"} eligible for a primary lease.`), t3));
  }
  async shutdown() {
    this.xs = false, this.Pi(), this.si && (this.si.cancel(), this.si = null), this.vi(), this.bi(), // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
    // has obtained the primary lease.
    await this.ui.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (t2) => {
      const e = new zi(t2, $t.at);
      return this.mi(e).next(() => this.pi(e));
    }), this.ui.close(), // Remove the entry marking the client as zombied from LocalStorage since
    // we successfully deleted its metadata from IndexedDb.
    this.Vi();
  }
  /**
   * Returns clients that are not zombied and have an updateTime within the
   * provided threshold.
   */
  Ei(t2, e) {
    return t2.filter((t3) => this.Ti(t3.updateTimeMs, e) && !this.Ri(t3.clientId));
  }
  /**
   * Returns the IDs of the clients that are currently active. If multi-tab
   * is not supported, returns an array that only contains the local client's
   * ID.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  Si() {
    return this.runTransaction("getActiveClients", "readonly", (t2) => Lo(t2).W().next((t3) => this.Ei(t3, 18e5).map((t4) => t4.clientId)));
  }
  get started() {
    return this.xs;
  }
  getMutationQueue(t2, e) {
    return Jr.ue(t2, this.Tt, e, this.referenceDelegate);
  }
  getTargetCache() {
    return this.Ns;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getIndexManager(t2) {
    return new Lr(t2, this.Tt.oe.databaseId);
  }
  getDocumentOverlayCache(t2) {
    return wr.ue(this.Tt, t2);
  }
  getBundleCache() {
    return this.$s;
  }
  runTransaction(t2, e, n) {
    C2("IndexedDbPersistence", "Starting transaction:", t2);
    const s = "readonly" === e ? "readonly" : "readwrite", i = 15 === (r = this.ti) ? ji : 14 === r ? Qi : 13 === r ? Gi : 12 === r ? Ki : 11 === r ? Ui : void $();
    var r;
    let o;
    return this.ui.runTransaction(t2, s, i, (s2) => (o = new zi(s2, this.Cs ? this.Cs.next() : $t.at), "readwrite-primary" === e ? this._i(o).next((t3) => !!t3 || this.wi(o)).next((e2) => {
      if (!e2)
        throw x2(`Failed to obtain primary lease for action '${t2}'.`), this.isPrimary = false, this.Ys.enqueueRetryable(() => this.ri(false)), new L2(B2.FAILED_PRECONDITION, It);
      return n(o);
    }).next((t3) => this.gi(o).next(() => t3)) : this.Di(o).next(() => n(o)))).then((t3) => (o.raiseOnCommittedEvent(), t3));
  }
  /**
   * Verifies that the current tab is the primary leaseholder or alternatively
   * that the leaseholder has opted into multi-tab synchronization.
   */
  // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
  // be turned off.
  Di(t2) {
    return Bo(t2).get("owner").next((t3) => {
      if (null !== t3 && this.Ti(t3.leaseTimestampMs, 5e3) && !this.Ri(t3.ownerId) && !this.yi(t3) && !(this.Xs || this.allowTabSynchronization && t3.allowTabSynchronization))
        throw new L2(B2.FAILED_PRECONDITION, Oo);
    });
  }
  /**
   * Obtains or extends the new primary lease for the local client. This
   * method does not verify that the client is eligible for this lease.
   */
  gi(t2) {
    const e = {
      ownerId: this.clientId,
      allowTabSynchronization: this.allowTabSynchronization,
      leaseTimestampMs: Date.now()
    };
    return Bo(t2).put("owner", e);
  }
  static C() {
    return Pt.C();
  }
  /** Checks the primary lease and removes it if we are the current primary. */
  mi(t2) {
    const e = Bo(t2);
    return e.get("owner").next((t3) => this.yi(t3) ? (C2("IndexedDbPersistence", "Releasing primary lease."), e.delete("owner")) : At.resolve());
  }
  /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
  Ti(t2, e) {
    const n = Date.now();
    return !(t2 < n - e) && (!(t2 > n) || (x2(`Detected an update time that is in the future: ${t2} > ${n}`), false));
  }
  hi() {
    null !== this.document && "function" == typeof this.document.addEventListener && (this.ni = () => {
      this.Ys.enqueueAndForget(() => (this.inForeground = "visible" === this.document.visibilityState, this.ai()));
    }, this.document.addEventListener("visibilitychange", this.ni), this.inForeground = "visible" === this.document.visibilityState);
  }
  vi() {
    this.ni && (this.document.removeEventListener("visibilitychange", this.ni), this.ni = null);
  }
  /**
   * Attaches a window.unload handler that will synchronously write our
   * clientId to a "zombie client id" location in LocalStorage. This can be used
   * by tabs trying to acquire the primary lease to determine that the lease
   * is no longer valid even if the timestamp is recent. This is particularly
   * important for the refresh case (so the tab correctly re-acquires the
   * primary lease). LocalStorage is used for this rather than IndexedDb because
   * it is a synchronous API and so can be used reliably from  an unload
   * handler.
   */
  li() {
    var t2;
    "function" == typeof (null === (t2 = this.window) || void 0 === t2 ? void 0 : t2.addEventListener) && (this.ei = () => {
      this.Pi();
      const t3 = /(?:Version|Mobile)\/1[456]/;
      isSafari() && (navigator.appVersion.match(t3) || navigator.userAgent.match(t3)) && // On Safari 14, 15, and 16, we do not run any cleanup actions as it might
      // trigger a bug that prevents Safari from re-opening IndexedDB during
      // the next page load.
      // See https://bugs.webkit.org/show_bug.cgi?id=226547
      this.Ys.enterRestrictedMode(
        /* purgeExistingTasks= */
        true
      ), this.Ys.enqueueAndForget(() => this.shutdown());
    }, this.window.addEventListener("pagehide", this.ei));
  }
  bi() {
    this.ei && (this.window.removeEventListener("pagehide", this.ei), this.ei = null);
  }
  /**
   * Returns whether a client is "zombied" based on its LocalStorage entry.
   * Clients become zombied when their tab closes without running all of the
   * cleanup logic in `shutdown()`.
   */
  Ri(t2) {
    var e;
    try {
      const n = null !== (null === (e = this.ci) || void 0 === e ? void 0 : e.getItem(this.Ai(t2)));
      return C2("IndexedDbPersistence", `Client '${t2}' ${n ? "is" : "is not"} zombied in LocalStorage`), n;
    } catch (t3) {
      return x2("IndexedDbPersistence", "Failed to get zombied client id.", t3), false;
    }
  }
  /**
   * Record client as zombied (a client that had its tab closed). Zombied
   * clients are ignored during primary tab selection.
   */
  Pi() {
    if (this.ci)
      try {
        this.ci.setItem(this.Ai(this.clientId), String(Date.now()));
      } catch (t2) {
        x2("Failed to set zombie client id.", t2);
      }
  }
  /** Removes the zombied client entry if it exists. */
  Vi() {
    if (this.ci)
      try {
        this.ci.removeItem(this.Ai(this.clientId));
      } catch (t2) {
      }
  }
  Ai(t2) {
    return `firestore_zombie_${this.persistenceKey}_${t2}`;
  }
};
function Bo(t2) {
  return Wi(t2, "owner");
}
function Lo(t2) {
  return Wi(t2, "clientMetadata");
}
function qo(t2, e) {
  let n = t2.projectId;
  return t2.isDefaultDatabase || (n += "." + t2.database), "firestore/" + e + "/" + n + "/";
}
var Uo = class {
  constructor(t2, e, n, s) {
    this.targetId = t2, this.fromCache = e, this.Ci = n, this.xi = s;
  }
  static Ni(t2, e) {
    let n = vs(), s = vs();
    for (const t3 of e.docChanges)
      switch (t3.type) {
        case 0:
          n = n.add(t3.doc.key);
          break;
        case 1:
          s = s.add(t3.doc.key);
      }
    return new Uo(t2, e.fromCache, n, s);
  }
};
var Ko = class {
  constructor() {
    this.ki = false;
  }
  /** Sets the document view to query against. */
  initialize(t2, e) {
    this.$i = t2, this.indexManager = e, this.ki = true;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(t2, e, n, s) {
    return this.Mi(t2, e).next((i) => i || this.Oi(t2, e, s, n)).next((n2) => n2 || this.Fi(t2, e));
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  Mi(t2, e) {
    if (mn(e))
      return At.resolve(null);
    let n = Tn(e);
    return this.indexManager.getIndexType(t2, n).next((s) => 0 === s ? null : (null !== e.limit && 1 === s && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (e = An(
      e,
      null,
      "F"
      /* LimitType.First */
    ), n = Tn(e)), this.indexManager.getDocumentsMatchingTarget(t2, n).next((s2) => {
      const i = vs(...s2);
      return this.$i.getDocuments(t2, i).next((s3) => this.indexManager.getMinOffset(t2, n).next((n2) => {
        const r = this.Bi(e, s3);
        return this.Li(e, r, i, n2.readTime) ? this.Mi(t2, An(
          e,
          null,
          "F"
          /* LimitType.First */
        )) : this.qi(t2, r, e, n2);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Oi(t2, e, n, s) {
    return mn(e) || s.isEqual(st.min()) ? this.Fi(t2, e) : this.$i.getDocuments(t2, n).next((i) => {
      const r = this.Bi(e, i);
      return this.Li(e, r, n, s) ? this.Fi(t2, e) : (S2() <= LogLevel.DEBUG && C2("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), vn(e)), this.qi(t2, r, e, mt(s, -1)));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  Bi(t2, e) {
    let n = new Ye(Sn(t2));
    return e.forEach((e2, s) => {
      bn(t2, s) && (n = n.add(s));
    }), n;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  Li(t2, e, n, s) {
    if (null === t2.limit)
      return false;
    if (n.size !== e.size)
      return true;
    const i = "F" === t2.limitType ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  Fi(t2, e) {
    return S2() <= LogLevel.DEBUG && C2("QueryEngine", "Using full collection scan to execute query:", vn(e)), this.$i.getDocumentsMatchingQuery(t2, e, yt.min());
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  qi(t2, e, n, s) {
    return this.$i.getDocumentsMatchingQuery(t2, n, s).next((t3) => (
      // Merge with existing results
      (e.forEach((e2) => {
        t3 = t3.insert(e2.key, e2);
      }), t3)
    ));
  }
};
var Go = class {
  constructor(t2, e, n, s) {
    this.persistence = t2, this.Ui = e, this.Tt = s, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.Ki = new We(X2), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.Gi = new ws((t3) => un(t3), cn), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this.Qi = /* @__PURE__ */ new Map(), this.ji = t2.getRemoteDocumentCache(), this.Ns = t2.getTargetCache(), this.$s = t2.getBundleCache(), this.zi(n);
  }
  zi(t2) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t2), this.indexManager = this.persistence.getIndexManager(t2), this.mutationQueue = this.persistence.getMutationQueue(t2, this.indexManager), this.localDocuments = new Ao(this.ji, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.ji.setIndexManager(this.indexManager), this.Ui.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t2) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t2.collect(e, this.Ki));
  }
};
function Qo(t2, e, n, s) {
  return new Go(t2, e, n, s);
}
async function jo(t2, e) {
  const n = F(t2);
  return await n.persistence.runTransaction("Handle user change", "readonly", (t3) => {
    let s;
    return n.mutationQueue.getAllMutationBatches(t3).next((i) => (s = i, n.zi(e), n.mutationQueue.getAllMutationBatches(t3))).next((e2) => {
      const i = [], r = [];
      let o = vs();
      for (const t4 of s) {
        i.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      for (const t4 of e2) {
        r.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      return n.localDocuments.getDocuments(t3, o).next((t4) => ({
        Wi: t4,
        removedBatchIds: i,
        addedBatchIds: r
      }));
    });
  });
}
function zo(t2, e) {
  const n = F(t2);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t3) => {
    const s = e.batch.keys(), i = n.ji.newChangeBuffer({
      trackRemovals: true
    });
    return function(t4, e2, n2, s2) {
      const i2 = n2.batch, r = i2.keys();
      let o = At.resolve();
      return r.forEach((t5) => {
        o = o.next(() => s2.getEntry(e2, t5)).next((e3) => {
          const r2 = n2.docVersions.get(t5);
          M2(null !== r2), e3.version.compareTo(r2) < 0 && (i2.applyToRemoteDocument(e3, n2), e3.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (e3.setReadTime(n2.commitVersion), s2.addEntry(e3)));
        });
      }), o.next(() => t4.mutationQueue.removeMutationBatch(e2, i2));
    }(n, t3, e, i).next(() => i.apply(t3)).next(() => n.mutationQueue.performConsistencyCheck(t3)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(t3, s, e.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t3, function(t4) {
      let e2 = vs();
      for (let n2 = 0; n2 < t4.mutationResults.length; ++n2) {
        t4.mutationResults[n2].transformResults.length > 0 && (e2 = e2.add(t4.batch.mutations[n2].key));
      }
      return e2;
    }(e))).next(() => n.localDocuments.getDocuments(t3, s));
  });
}
function Wo(t2) {
  const e = F(t2);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t3) => e.Ns.getLastRemoteSnapshotVersion(t3));
}
function Ho(t2, e) {
  const n = F(t2), s = e.snapshotVersion;
  let i = n.Ki;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t3) => {
    const r = n.ji.newChangeBuffer({
      trackRemovals: true
    });
    i = n.Ki;
    const o = [];
    e.targetChanges.forEach((r2, u2) => {
      const c2 = i.get(u2);
      if (!c2)
        return;
      o.push(n.Ns.removeMatchingKeys(t3, r2.removedDocuments, u2).next(() => n.Ns.addMatchingKeys(t3, r2.addedDocuments, u2)));
      let a = c2.withSequenceNumber(t3.currentSequenceNumber);
      e.targetMismatches.has(u2) ? a = a.withResumeToken(Ht.EMPTY_BYTE_STRING, st.min()).withLastLimboFreeSnapshotVersion(st.min()) : r2.resumeToken.approximateByteSize() > 0 && (a = a.withResumeToken(r2.resumeToken, s)), i = i.insert(u2, a), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      function(t4, e2, n2) {
        if (0 === t4.resumeToken.approximateByteSize())
          return true;
        if (e2.snapshotVersion.toMicroseconds() - t4.snapshotVersion.toMicroseconds() >= 3e8)
          return true;
        return n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size > 0;
      }(c2, a, r2) && o.push(n.Ns.updateTargetData(t3, a));
    });
    let u = gs(), c = vs();
    if (e.documentUpdates.forEach((s2) => {
      e.resolvedLimboDocuments.has(s2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t3, s2));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    o.push(Jo(t3, r, e.documentUpdates).next((t4) => {
      u = t4.Hi, c = t4.Ji;
    })), !s.isEqual(st.min())) {
      const e2 = n.Ns.getLastRemoteSnapshotVersion(t3).next((e3) => n.Ns.setTargetsMetadata(t3, t3.currentSequenceNumber, s));
      o.push(e2);
    }
    return At.waitFor(o).next(() => r.apply(t3)).next(() => n.localDocuments.getLocalViewOfDocuments(t3, u, c)).next(() => u);
  }).then((t3) => (n.Ki = i, t3));
}
function Jo(t2, e, n) {
  let s = vs(), i = vs();
  return n.forEach((t3) => s = s.add(t3)), e.getEntries(t2, s).next((t3) => {
    let s2 = gs();
    return n.forEach((n2, r) => {
      const o = t3.get(n2);
      r.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n2)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      r.isNoDocument() && r.version.isEqual(st.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (e.removeEntry(n2, r.readTime), s2 = s2.insert(n2, r))
      ) : !o.isValidDocument() || r.version.compareTo(o.version) > 0 || 0 === r.version.compareTo(o.version) && o.hasPendingWrites ? (e.addEntry(r), s2 = s2.insert(n2, r)) : C2("LocalStore", "Ignoring outdated watch update for ", n2, ". Current version:", o.version, " Watch version:", r.version);
    }), {
      Hi: s2,
      Ji: i
    };
  });
}
function Yo(t2, e) {
  const n = F(t2);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (t3) => (void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t3, e)));
}
function Zo(t2, e) {
  const n = F(t2);
  return n.persistence.runTransaction("Allocate target", "readwrite", (t3) => {
    let s;
    return n.Ns.getTargetData(t3, e).next((i) => i ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (s = i, At.resolve(s))
    ) : n.Ns.allocateTargetId(t3).next((i2) => (s = new Zi(e, i2, 0, t3.currentSequenceNumber), n.Ns.addTargetData(t3, s).next(() => s))));
  }).then((t3) => {
    const s = n.Ki.get(t3.targetId);
    return (null === s || t3.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.Ki = n.Ki.insert(t3.targetId, t3), n.Gi.set(e, t3.targetId)), t3;
  });
}
async function Xo(t2, e, n) {
  const s = F(t2), i = s.Ki.get(e), r = n ? "readwrite" : "readwrite-primary";
  try {
    n || await s.persistence.runTransaction("Release target", r, (t3) => s.persistence.referenceDelegate.removeTarget(t3, i));
  } catch (t3) {
    if (!Vt(t3))
      throw t3;
    C2("LocalStore", `Failed to update sequence numbers for target ${e}: ${t3}`);
  }
  s.Ki = s.Ki.remove(e), s.Gi.delete(i.target);
}
function tu(t2, e, n) {
  const s = F(t2);
  let i = st.min(), r = vs();
  return s.persistence.runTransaction("Execute query", "readonly", (t3) => function(t4, e2, n2) {
    const s2 = F(t4), i2 = s2.Gi.get(n2);
    return void 0 !== i2 ? At.resolve(s2.Ki.get(i2)) : s2.Ns.getTargetData(e2, n2);
  }(s, t3, Tn(e)).next((e2) => {
    if (e2)
      return i = e2.lastLimboFreeSnapshotVersion, s.Ns.getMatchingKeysForTargetId(t3, e2.targetId).next((t4) => {
        r = t4;
      });
  }).next(() => s.Ui.getDocumentsMatchingQuery(t3, e, n ? i : st.min(), n ? r : vs())).next((t4) => (su(s, Vn(e), t4), {
    documents: t4,
    Yi: r
  })));
}
function eu(t2, e) {
  const n = F(t2), s = F(n.Ns), i = n.Ki.get(e);
  return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (t3) => s.ie(t3, e).next((t4) => t4 ? t4.target : null));
}
function nu(t2, e) {
  const n = F(t2), s = n.Qi.get(e) || st.min();
  return n.persistence.runTransaction("Get new document changes", "readonly", (t3) => n.ji.getAllFromCollectionGroup(
    t3,
    e,
    mt(s, -1),
    /* limit= */
    Number.MAX_SAFE_INTEGER
  )).then((t3) => (su(n, e, t3), t3));
}
function su(t2, e, n) {
  let s = t2.Qi.get(e) || st.min();
  n.forEach((t3, e2) => {
    e2.readTime.compareTo(s) > 0 && (s = e2.readTime);
  }), t2.Qi.set(e, s);
}
async function iu(t2, e, n, s) {
  const i = F(t2);
  let r = vs(), o = gs();
  for (const t3 of n) {
    const n2 = e.Zi(t3.metadata.name);
    t3.document && (r = r.add(n2));
    const s2 = e.Xi(t3);
    s2.setReadTime(e.tr(t3.metadata.readTime)), o = o.insert(n2, s2);
  }
  const u = i.ji.newChangeBuffer({
    trackRemovals: true
  }), c = await Zo(i, function(t3) {
    return Tn(wn(rt.fromString(`__bundle__/docs/${t3}`)));
  }(s));
  return i.persistence.runTransaction("Apply bundle documents", "readwrite", (t3) => Jo(t3, u, o).next((e2) => (u.apply(t3), e2)).next((e2) => i.Ns.removeMatchingKeysForTargetId(t3, c.targetId).next(() => i.Ns.addMatchingKeys(t3, r, c.targetId)).next(() => i.localDocuments.getLocalViewOfDocuments(t3, e2.Hi, e2.Ji)).next(() => e2.Hi)));
}
async function ru(t2, e, n = vs()) {
  const s = await Zo(t2, Tn(cr(e.bundledQuery))), i = F(t2);
  return i.persistence.runTransaction("Save named query", "readwrite", (t3) => {
    const r = Qs(e.readTime);
    if (s.snapshotVersion.compareTo(r) >= 0)
      return i.$s.saveNamedQuery(t3, e);
    const o = s.withResumeToken(Ht.EMPTY_BYTE_STRING, r);
    return i.Ki = i.Ki.insert(o.targetId, o), i.Ns.updateTargetData(t3, o).next(() => i.Ns.removeMatchingKeysForTargetId(t3, s.targetId)).next(() => i.Ns.addMatchingKeys(t3, n, s.targetId)).next(() => i.$s.saveNamedQuery(t3, e));
  });
}
function ou(t2, e) {
  return `firestore_clients_${t2}_${e}`;
}
function uu(t2, e, n) {
  let s = `firestore_mutations_${t2}_${n}`;
  return e.isAuthenticated() && (s += `_${e.uid}`), s;
}
function cu(t2, e) {
  return `firestore_targets_${t2}_${e}`;
}
var au = class {
  constructor(t2, e, n, s) {
    this.user = t2, this.batchId = e, this.state = n, this.error = s;
  }
  /**
   * Parses a MutationMetadata from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static er(t2, e, n) {
    const s = JSON.parse(n);
    let i, r = "object" == typeof s && -1 !== ["pending", "acknowledged", "rejected"].indexOf(s.state) && (void 0 === s.error || "object" == typeof s.error);
    return r && s.error && (r = "string" == typeof s.error.message && "string" == typeof s.error.code, r && (i = new L2(s.error.code, s.error.message))), r ? new au(t2, e, s.state, i) : (x2("SharedClientState", `Failed to parse mutation state for ID '${e}': ${n}`), null);
  }
  nr() {
    const t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }
};
var hu = class {
  constructor(t2, e, n) {
    this.targetId = t2, this.state = e, this.error = n;
  }
  /**
   * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static er(t2, e) {
    const n = JSON.parse(e);
    let s, i = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error);
    return i && n.error && (i = "string" == typeof n.error.message && "string" == typeof n.error.code, i && (s = new L2(n.error.code, n.error.message))), i ? new hu(t2, n.state, s) : (x2("SharedClientState", `Failed to parse target state for ID '${t2}': ${e}`), null);
  }
  nr() {
    const t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }
};
var lu = class {
  constructor(t2, e) {
    this.clientId = t2, this.activeTargetIds = e;
  }
  /**
   * Parses a RemoteClientState from the JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static er(t2, e) {
    const n = JSON.parse(e);
    let s = "object" == typeof n && n.activeTargetIds instanceof Array, i = Vs();
    for (let t3 = 0; s && t3 < n.activeTargetIds.length; ++t3)
      s = jt(n.activeTargetIds[t3]), i = i.add(n.activeTargetIds[t3]);
    return s ? new lu(t2, i) : (x2("SharedClientState", `Failed to parse client data for instance '${t2}': ${e}`), null);
  }
};
var fu = class {
  constructor(t2, e) {
    this.clientId = t2, this.onlineState = e;
  }
  /**
   * Parses a SharedOnlineState from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static er(t2) {
    const e = JSON.parse(t2);
    return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new fu(e.clientId, e.onlineState) : (x2("SharedClientState", `Failed to parse online state: ${t2}`), null);
  }
};
var du = class {
  constructor() {
    this.activeTargetIds = Vs();
  }
  sr(t2) {
    this.activeTargetIds = this.activeTargetIds.add(t2);
  }
  ir(t2) {
    this.activeTargetIds = this.activeTargetIds.delete(t2);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  nr() {
    const t2 = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t2);
  }
};
var _u = class {
  constructor(t2, e, n, s, i) {
    this.window = t2, this.Ys = e, this.persistenceKey = n, this.rr = s, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.ur = this.cr.bind(this), this.ar = new We(X2), this.started = false, /**
     * Captures WebStorage events that occur before `start()` is called. These
     * events are replayed once `WebStorageSharedClientState` is started.
     */
    this.hr = [];
    const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.lr = ou(this.persistenceKey, this.rr), this.dr = /** Assembles the key for the current sequence number. */
    function(t3) {
      return `firestore_sequence_number_${t3}`;
    }(this.persistenceKey), this.ar = this.ar.insert(this.rr, new du()), this._r = new RegExp(`^firestore_clients_${r}_([^_]*)$`), this.wr = new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`), this.mr = new RegExp(`^firestore_targets_${r}_(\\d+)$`), this.gr = /** Assembles the key for the online state of the primary tab. */
    function(t3) {
      return `firestore_online_state_${t3}`;
    }(this.persistenceKey), this.yr = function(t3) {
      return `firestore_bundle_loaded_v2_${t3}`;
    }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
    // storage observer during initialization. This ensures that we collect
    // events before other components populate their initial state (during their
    // respective start() calls). Otherwise, we might for example miss a
    // mutation that is added after LocalStore's start() processed the existing
    // mutations but before we observe WebStorage events.
    this.window.addEventListener("storage", this.ur);
  }
  /** Returns 'true' if WebStorage is available in the current environment. */
  static C(t2) {
    return !(!t2 || !t2.localStorage);
  }
  async start() {
    const t2 = await this.syncEngine.Si();
    for (const e2 of t2) {
      if (e2 === this.rr)
        continue;
      const t3 = this.getItem(ou(this.persistenceKey, e2));
      if (t3) {
        const n = lu.er(e2, t3);
        n && (this.ar = this.ar.insert(n.clientId, n));
      }
    }
    this.pr();
    const e = this.storage.getItem(this.gr);
    if (e) {
      const t3 = this.Ir(e);
      t3 && this.Tr(t3);
    }
    for (const t3 of this.hr)
      this.cr(t3);
    this.hr = [], // Register a window unload hook to remove the client metadata entry from
    // WebStorage even if `shutdown()` was not called.
    this.window.addEventListener("pagehide", () => this.shutdown()), this.started = true;
  }
  writeSequenceNumber(t2) {
    this.setItem(this.dr, JSON.stringify(t2));
  }
  getAllActiveQueryTargets() {
    return this.Er(this.ar);
  }
  isActiveQueryTarget(t2) {
    let e = false;
    return this.ar.forEach((n, s) => {
      s.activeTargetIds.has(t2) && (e = true);
    }), e;
  }
  addPendingMutation(t2) {
    this.Ar(t2, "pending");
  }
  updateMutationState(t2, e, n) {
    this.Ar(t2, e, n), // Once a final mutation result is observed by other clients, they no longer
    // access the mutation's metadata entry. Since WebStorage replays events
    // in order, it is safe to delete the entry right after updating it.
    this.Rr(t2);
  }
  addLocalQueryTarget(t2) {
    let e = "not-current";
    if (this.isActiveQueryTarget(t2)) {
      const n = this.storage.getItem(cu(this.persistenceKey, t2));
      if (n) {
        const s = hu.er(t2, n);
        s && (e = s.state);
      }
    }
    return this.Pr.sr(t2), this.pr(), e;
  }
  removeLocalQueryTarget(t2) {
    this.Pr.ir(t2), this.pr();
  }
  isLocalQueryTarget(t2) {
    return this.Pr.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    this.removeItem(cu(this.persistenceKey, t2));
  }
  updateQueryState(t2, e, n) {
    this.vr(t2, e, n);
  }
  handleUserChange(t2, e, n) {
    e.forEach((t3) => {
      this.Rr(t3);
    }), this.currentUser = t2, n.forEach((t3) => {
      this.addPendingMutation(t3);
    });
  }
  setOnlineState(t2) {
    this.br(t2);
  }
  notifyBundleLoaded(t2) {
    this.Vr(t2);
  }
  shutdown() {
    this.started && (this.window.removeEventListener("storage", this.ur), this.removeItem(this.lr), this.started = false);
  }
  getItem(t2) {
    const e = this.storage.getItem(t2);
    return C2("SharedClientState", "READ", t2, e), e;
  }
  setItem(t2, e) {
    C2("SharedClientState", "SET", t2, e), this.storage.setItem(t2, e);
  }
  removeItem(t2) {
    C2("SharedClientState", "REMOVE", t2), this.storage.removeItem(t2);
  }
  cr(t2) {
    const e = t2;
    if (e.storageArea === this.storage) {
      if (C2("SharedClientState", "EVENT", e.key, e.newValue), e.key === this.lr)
        return void x2("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.Ys.enqueueRetryable(async () => {
        if (this.started) {
          if (null !== e.key) {
            if (this._r.test(e.key)) {
              if (null == e.newValue) {
                const t3 = this.Sr(e.key);
                return this.Dr(t3, null);
              }
              {
                const t3 = this.Cr(e.key, e.newValue);
                if (t3)
                  return this.Dr(t3.clientId, t3);
              }
            } else if (this.wr.test(e.key)) {
              if (null !== e.newValue) {
                const t3 = this.Nr(e.key, e.newValue);
                if (t3)
                  return this.kr(t3);
              }
            } else if (this.mr.test(e.key)) {
              if (null !== e.newValue) {
                const t3 = this.$r(e.key, e.newValue);
                if (t3)
                  return this.Mr(t3);
              }
            } else if (e.key === this.gr) {
              if (null !== e.newValue) {
                const t3 = this.Ir(e.newValue);
                if (t3)
                  return this.Tr(t3);
              }
            } else if (e.key === this.dr) {
              const t3 = function(t4) {
                let e2 = $t.at;
                if (null != t4)
                  try {
                    const n = JSON.parse(t4);
                    M2("number" == typeof n), e2 = n;
                  } catch (t5) {
                    x2("SharedClientState", "Failed to read sequence number from WebStorage", t5);
                  }
                return e2;
              }(e.newValue);
              t3 !== $t.at && this.sequenceNumberHandler(t3);
            } else if (e.key === this.yr) {
              const t3 = this.Or(e.newValue);
              await Promise.all(t3.map((t4) => this.syncEngine.Fr(t4)));
            }
          }
        } else
          this.hr.push(e);
      });
    }
  }
  get Pr() {
    return this.ar.get(this.rr);
  }
  pr() {
    this.setItem(this.lr, this.Pr.nr());
  }
  Ar(t2, e, n) {
    const s = new au(this.currentUser, t2, e, n), i = uu(this.persistenceKey, this.currentUser, t2);
    this.setItem(i, s.nr());
  }
  Rr(t2) {
    const e = uu(this.persistenceKey, this.currentUser, t2);
    this.removeItem(e);
  }
  br(t2) {
    const e = {
      clientId: this.rr,
      onlineState: t2
    };
    this.storage.setItem(this.gr, JSON.stringify(e));
  }
  vr(t2, e, n) {
    const s = cu(this.persistenceKey, t2), i = new hu(t2, e, n);
    this.setItem(s, i.nr());
  }
  Vr(t2) {
    const e = JSON.stringify(Array.from(t2));
    this.setItem(this.yr, e);
  }
  /**
   * Parses a client state key in WebStorage. Returns null if the key does not
   * match the expected key format.
   */
  Sr(t2) {
    const e = this._r.exec(t2);
    return e ? e[1] : null;
  }
  /**
   * Parses a client state in WebStorage. Returns 'null' if the value could not
   * be parsed.
   */
  Cr(t2, e) {
    const n = this.Sr(t2);
    return lu.er(n, e);
  }
  /**
   * Parses a mutation batch state in WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  Nr(t2, e) {
    const n = this.wr.exec(t2), s = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
    return au.er(new v2(i), s, e);
  }
  /**
   * Parses a query target state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  $r(t2, e) {
    const n = this.mr.exec(t2), s = Number(n[1]);
    return hu.er(s, e);
  }
  /**
   * Parses an online state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  Ir(t2) {
    return fu.er(t2);
  }
  Or(t2) {
    return JSON.parse(t2);
  }
  async kr(t2) {
    if (t2.user.uid === this.currentUser.uid)
      return this.syncEngine.Br(t2.batchId, t2.state, t2.error);
    C2("SharedClientState", `Ignoring mutation for non-active user ${t2.user.uid}`);
  }
  Mr(t2) {
    return this.syncEngine.Lr(t2.targetId, t2.state, t2.error);
  }
  Dr(t2, e) {
    const n = e ? this.ar.insert(t2, e) : this.ar.remove(t2), s = this.Er(this.ar), i = this.Er(n), r = [], o = [];
    return i.forEach((t3) => {
      s.has(t3) || r.push(t3);
    }), s.forEach((t3) => {
      i.has(t3) || o.push(t3);
    }), this.syncEngine.qr(r, o).then(() => {
      this.ar = n;
    });
  }
  Tr(t2) {
    this.ar.get(t2.clientId) && this.onlineStateHandler(t2.onlineState);
  }
  Er(t2) {
    let e = Vs();
    return t2.forEach((t3, n) => {
      e = e.unionWith(n.activeTargetIds);
    }), e;
  }
};
var wu = class {
  constructor() {
    this.Ur = new du(), this.Kr = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t2) {
  }
  updateMutationState(t2, e, n) {
  }
  addLocalQueryTarget(t2) {
    return this.Ur.sr(t2), this.Kr[t2] || "not-current";
  }
  updateQueryState(t2, e, n) {
    this.Kr[t2] = e;
  }
  removeLocalQueryTarget(t2) {
    this.Ur.ir(t2);
  }
  isLocalQueryTarget(t2) {
    return this.Ur.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    delete this.Kr[t2];
  }
  getAllActiveQueryTargets() {
    return this.Ur.activeTargetIds;
  }
  isActiveQueryTarget(t2) {
    return this.Ur.activeTargetIds.has(t2);
  }
  start() {
    return this.Ur = new du(), Promise.resolve();
  }
  handleUserChange(t2, e, n) {
  }
  setOnlineState(t2) {
  }
  shutdown() {
  }
  writeSequenceNumber(t2) {
  }
  notifyBundleLoaded(t2) {
  }
};
var mu = class {
  Gr(t2) {
  }
  shutdown() {
  }
};
var gu = class {
  constructor() {
    this.Qr = () => this.jr(), this.zr = () => this.Wr(), this.Hr = [], this.Jr();
  }
  Gr(t2) {
    this.Hr.push(t2);
  }
  shutdown() {
    window.removeEventListener("online", this.Qr), window.removeEventListener("offline", this.zr);
  }
  Jr() {
    window.addEventListener("online", this.Qr), window.addEventListener("offline", this.zr);
  }
  jr() {
    C2("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t2 of this.Hr)
      t2(
        0
        /* NetworkStatus.AVAILABLE */
      );
  }
  Wr() {
    C2("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t2 of this.Hr)
      t2(
        1
        /* NetworkStatus.UNAVAILABLE */
      );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static C() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
};
var yu = null;
function pu() {
  return null === yu ? yu = 268435456 + Math.round(2147483648 * Math.random()) : yu++, "0x" + yu.toString(16);
}
var Iu = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
var Tu = class {
  constructor(t2) {
    this.Yr = t2.Yr, this.Zr = t2.Zr;
  }
  Xr(t2) {
    this.eo = t2;
  }
  no(t2) {
    this.so = t2;
  }
  onMessage(t2) {
    this.io = t2;
  }
  close() {
    this.Zr();
  }
  send(t2) {
    this.Yr(t2);
  }
  ro() {
    this.eo();
  }
  oo(t2) {
    this.so(t2);
  }
  uo(t2) {
    this.io(t2);
  }
};
var Eu = "WebChannelConnection";
var Au = class extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
  constructor(t2) {
    this.databaseInfo = t2, this.databaseId = t2.databaseId;
    const e = t2.ssl ? "https" : "http";
    this.co = e + "://" + t2.host, this.ao = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }
  get ho() {
    return false;
  }
  lo(t2, e, n, s, i) {
    const r = pu(), o = this.fo(t2, e);
    C2("RestConnection", `Sending RPC '${t2}' ${r}:`, o, n);
    const u = {};
    return this._o(u, s, i), this.wo(t2, o, u, n).then((e2) => (C2("RestConnection", `Received RPC '${t2}' ${r}: `, e2), e2), (e2) => {
      throw N2("RestConnection", `RPC '${t2}' ${r} failed with error: `, e2, "url: ", o, "request:", n), e2;
    });
  }
  mo(t2, e, n, s, i, r) {
    return this.lo(t2, e, n, s, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  _o(t2, e, n) {
    t2["X-Goog-Api-Client"] = "gl-js/ fire/" + b, // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    t2["Content-Type"] = "text/plain", this.databaseInfo.appId && (t2["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((e2, n2) => t2[n2] = e2), n && n.headers.forEach((e2, n2) => t2[n2] = e2);
  }
  fo(t2, e) {
    const n = Iu[t2];
    return `${this.co}/v1/${e}:${n}`;
  }
} {
  constructor(t2) {
    super(t2), this.forceLongPolling = t2.forceLongPolling, this.autoDetectLongPolling = t2.autoDetectLongPolling, this.useFetchStreams = t2.useFetchStreams;
  }
  wo(t2, e, n, s) {
    const i = pu();
    return new Promise((r, o) => {
      const u = new XhrIo();
      u.setWithCredentials(true), u.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (u.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const e2 = u.getResponseJson();
              C2(Eu, `XHR for RPC '${t2}' ${i} received:`, JSON.stringify(e2)), r(e2);
              break;
            case ErrorCode.TIMEOUT:
              C2(Eu, `RPC '${t2}' ${i} timed out`), o(new L2(B2.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n2 = u.getStatus();
              if (C2(Eu, `RPC '${t2}' ${i} failed with status:`, n2, "response text:", u.getResponseText()), n2 > 0) {
                let t3 = u.getResponseJson();
                Array.isArray(t3) && (t3 = t3[0]);
                const e3 = null == t3 ? void 0 : t3.error;
                if (e3 && e3.status && e3.message) {
                  const t4 = function(t5) {
                    const e4 = t5.toLowerCase().replace(/_/g, "-");
                    return Object.values(B2).indexOf(e4) >= 0 ? e4 : B2.UNKNOWN;
                  }(e3.status);
                  o(new L2(t4, e3.message));
                } else
                  o(new L2(B2.UNKNOWN, "Server responded with status " + u.getStatus()));
              } else
                o(new L2(B2.UNAVAILABLE, "Connection failed."));
              break;
            default:
              $();
          }
        } finally {
          C2(Eu, `RPC '${t2}' ${i} completed.`);
        }
      });
      const c = JSON.stringify(s);
      C2(Eu, `RPC '${t2}' ${i} sending request:`, s), u.send(e, "POST", c, n, 15);
    });
  }
  yo(t2, e, n) {
    const s = pu(), i = [this.co, "/", "google.firestore.v1.Firestore", "/", t2, "/channel"], r = createWebChannelTransport(), o = getStatEventTarget(), u = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    };
    this.useFetchStreams && (u.xmlHttpFactory = new FetchXmlHttpFactory({})), this._o(u.initMessageHeaders, e, n), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    u.encodeInitMessageHeaders = true;
    const c = i.join("");
    C2(Eu, `Creating RPC '${t2}' stream ${s}: ${c}`, u);
    const a = r.createWebChannel(c, u);
    let h = false, l2 = false;
    const f = new Tu({
      Yr: (e2) => {
        l2 ? C2(Eu, `Not sending because RPC '${t2}' stream ${s} is closed:`, e2) : (h || (C2(Eu, `Opening RPC '${t2}' stream ${s} transport.`), a.open(), h = true), C2(Eu, `RPC '${t2}' stream ${s} sending:`, e2), a.send(e2));
      },
      Zr: () => a.close()
    }), d = (t3, e2, n2) => {
      t3.listen(e2, (t4) => {
        try {
          n2(t4);
        } catch (t5) {
          setTimeout(() => {
            throw t5;
          }, 0);
        }
      });
    };
    return d(a, WebChannel.EventType.OPEN, () => {
      l2 || C2(Eu, `RPC '${t2}' stream ${s} transport opened.`);
    }), d(a, WebChannel.EventType.CLOSE, () => {
      l2 || (l2 = true, C2(Eu, `RPC '${t2}' stream ${s} transport closed`), f.oo());
    }), d(a, WebChannel.EventType.ERROR, (e2) => {
      l2 || (l2 = true, N2(Eu, `RPC '${t2}' stream ${s} transport errored:`, e2), f.oo(new L2(B2.UNAVAILABLE, "The operation could not be completed")));
    }), d(a, WebChannel.EventType.MESSAGE, (e2) => {
      var n2;
      if (!l2) {
        const i2 = e2.data[0];
        M2(!!i2);
        const r2 = i2, o2 = r2.error || (null === (n2 = r2[0]) || void 0 === n2 ? void 0 : n2.error);
        if (o2) {
          C2(Eu, `RPC '${t2}' stream ${s} received error:`, o2);
          const e3 = o2.status;
          let n3 = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function(t3) {
              const e4 = ls[t3];
              if (void 0 !== e4)
                return _s(e4);
            }(e3)
          ), i3 = o2.message;
          void 0 === n3 && (n3 = B2.INTERNAL, i3 = "Unknown error status: " + e3 + " with message " + o2.message), // Mark closed so no further events are propagated
          l2 = true, f.oo(new L2(n3, i3)), a.close();
        } else
          C2(Eu, `RPC '${t2}' stream ${s} received:`, i2), f.uo(i2);
      }
    }), d(o, Event.STAT_EVENT, (e2) => {
      e2.stat === Stat.PROXY ? C2(Eu, `RPC '${t2}' stream ${s} detected buffering proxy`) : e2.stat === Stat.NOPROXY && C2(Eu, `RPC '${t2}' stream ${s} detected no buffering proxy`);
    }), setTimeout(() => {
      f.ro();
    }, 0), f;
  }
};
function Ru() {
  return "undefined" != typeof window ? window : null;
}
function Pu() {
  return "undefined" != typeof document ? document : null;
}
function vu(t2) {
  return new qs(
    t2,
    /* useProto3Json= */
    true
  );
}
var bu = class {
  constructor(t2, e, n = 1e3, s = 1.5, i = 6e4) {
    this.Ys = t2, this.timerId = e, this.po = n, this.Io = s, this.To = i, this.Eo = 0, this.Ao = null, /** The last backoff attempt, as epoch milliseconds. */
    this.Ro = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.Eo = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  Po() {
    this.Eo = this.To;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  vo(t2) {
    this.cancel();
    const e = Math.floor(this.Eo + this.bo()), n = Math.max(0, Date.now() - this.Ro), s = Math.max(0, e - n);
    s > 0 && C2("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.Ao = this.Ys.enqueueAfterDelay(this.timerId, s, () => (this.Ro = Date.now(), t2())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.Eo *= this.Io, this.Eo < this.po && (this.Eo = this.po), this.Eo > this.To && (this.Eo = this.To);
  }
  Vo() {
    null !== this.Ao && (this.Ao.skipDelay(), this.Ao = null);
  }
  cancel() {
    null !== this.Ao && (this.Ao.cancel(), this.Ao = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  bo() {
    return (Math.random() - 0.5) * this.Eo;
  }
};
var Vu = class {
  constructor(t2, e, n, s, i, r, o, u) {
    this.Ys = t2, this.So = n, this.Do = s, this.connection = i, this.authCredentialsProvider = r, this.appCheckCredentialsProvider = o, this.listener = u, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.Co = 0, this.xo = null, this.No = null, this.stream = null, this.ko = new bu(t2, e);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  $o() {
    return 1 === this.state || 5 === this.state || this.Mo();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  Mo() {
    return 2 === this.state || 3 === this.state;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    4 !== this.state ? this.auth() : this.Oo();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  async stop() {
    this.$o() && await this.close(
      0
      /* PersistentStreamState.Initial */
    );
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  Fo() {
    this.state = 0, this.ko.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  Bo() {
    this.Mo() && null === this.xo && (this.xo = this.Ys.enqueueAfterDelay(this.So, 6e4, () => this.Lo()));
  }
  /** Sends a message to the underlying stream. */
  qo(t2) {
    this.Uo(), this.stream.send(t2);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  async Lo() {
    if (this.Mo())
      return this.close(
        0
        /* PersistentStreamState.Initial */
      );
  }
  /** Marks the stream as active again. */
  Uo() {
    this.xo && (this.xo.cancel(), this.xo = null);
  }
  /** Cancels the health check delayed operation. */
  Ko() {
    this.No && (this.No.cancel(), this.No = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  async close(t2, e) {
    this.Uo(), this.Ko(), this.ko.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
    // underlying stream), guaranteeing they won't execute.
    this.Co++, 4 !== t2 ? (
      // If this is an intentional close ensure we don't delay our next connection attempt.
      this.ko.reset()
    ) : e && e.code === B2.RESOURCE_EXHAUSTED ? (
      // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
      (x2(e.toString()), x2("Using maximum backoff delay to prevent overloading the backend."), this.ko.Po())
    ) : e && e.code === B2.UNAUTHENTICATED && 3 !== this.state && // "unauthenticated" error means the token was rejected. This should rarely
    // happen since both Auth and AppCheck ensure a sufficient TTL when we
    // request a token. If a user manually resets their system clock this can
    // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
    // before we received the first message and we need to invalidate the token
    // to ensure that we fetch a new token.
    (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
    null !== this.stream && (this.Go(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
    // inhibit backoff or otherwise manipulate the state in its non-started state.
    this.state = t2, // Notify the listener that the stream closed.
    await this.listener.no(e);
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  Go() {
  }
  auth() {
    this.state = 1;
    const t2 = this.Qo(this.Co), e = this.Co;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t3, n]) => {
      this.Co === e && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.jo(t3, n);
    }, (e2) => {
      t2(() => {
        const t3 = new L2(B2.UNKNOWN, "Fetching auth token failed: " + e2.message);
        return this.zo(t3);
      });
    });
  }
  jo(t2, e) {
    const n = this.Qo(this.Co);
    this.stream = this.Wo(t2, e), this.stream.Xr(() => {
      n(() => (this.state = 2, this.No = this.Ys.enqueueAfterDelay(this.Do, 1e4, () => (this.Mo() && (this.state = 3), Promise.resolve())), this.listener.Xr()));
    }), this.stream.no((t3) => {
      n(() => this.zo(t3));
    }), this.stream.onMessage((t3) => {
      n(() => this.onMessage(t3));
    });
  }
  Oo() {
    this.state = 5, this.ko.vo(async () => {
      this.state = 0, this.start();
    });
  }
  // Visible for tests
  zo(t2) {
    return C2("PersistentStream", `close with error: ${t2}`), this.stream = null, this.close(4, t2);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  Qo(t2) {
    return (e) => {
      this.Ys.enqueueAndForget(() => this.Co === t2 ? e() : (C2("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
};
var Su = class extends Vu {
  constructor(t2, e, n, s, i, r) {
    super(t2, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, s, r), this.Tt = i;
  }
  Wo(t2, e) {
    return this.connection.yo("Listen", t2, e);
  }
  onMessage(t2) {
    this.ko.reset();
    const e = si(this.Tt, t2), n = function(t3) {
      if (!("targetChange" in t3))
        return st.min();
      const e2 = t3.targetChange;
      return e2.targetIds && e2.targetIds.length ? st.min() : e2.readTime ? Qs(e2.readTime) : st.min();
    }(t2);
    return this.listener.Ho(e, n);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  Jo(t2) {
    const e = {};
    e.database = Zs(this.Tt), e.addTarget = function(t3, e2) {
      let n2;
      const s = e2.target;
      return n2 = an(s) ? {
        documents: ui(t3, s)
      } : {
        query: ci(t3, s)
      }, n2.targetId = e2.targetId, e2.resumeToken.approximateByteSize() > 0 ? n2.resumeToken = Ks(t3, e2.resumeToken) : e2.snapshotVersion.compareTo(st.min()) > 0 && // TODO(wuandy): Consider removing above check because it is most likely true.
      // Right now, many tests depend on this behaviour though (leaving min() out
      // of serialization).
      (n2.readTime = Us(t3, e2.snapshotVersion.toTimestamp())), n2;
    }(this.Tt, t2);
    const n = hi(this.Tt, t2);
    n && (e.labels = n), this.qo(e);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  Yo(t2) {
    const e = {};
    e.database = Zs(this.Tt), e.removeTarget = t2, this.qo(e);
  }
};
var Du = class extends Vu {
  constructor(t2, e, n, s, i, r) {
    super(t2, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, n, s, r), this.Tt = i, this.Zo = false;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get Xo() {
    return this.Zo;
  }
  // Override of PersistentStream.start
  start() {
    this.Zo = false, this.lastStreamToken = void 0, super.start();
  }
  Go() {
    this.Zo && this.tu([]);
  }
  Wo(t2, e) {
    return this.connection.yo("Write", t2, e);
  }
  onMessage(t2) {
    if (
      // Always capture the last stream token.
      M2(!!t2.streamToken), this.lastStreamToken = t2.streamToken, this.Zo
    ) {
      this.ko.reset();
      const e = oi(t2.writeResults, t2.commitTime), n = Qs(t2.commitTime);
      return this.listener.eu(n, e);
    }
    return M2(!t2.writeResults || 0 === t2.writeResults.length), this.Zo = true, this.listener.nu();
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  su() {
    const t2 = {};
    t2.database = Zs(this.Tt), this.qo(t2);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  tu(t2) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t2.map((t3) => ii(this.Tt, t3))
    };
    this.qo(e);
  }
};
var Cu = class extends class {
} {
  constructor(t2, e, n, s) {
    super(), this.authCredentials = t2, this.appCheckCredentials = e, this.connection = n, this.Tt = s, this.iu = false;
  }
  ru() {
    if (this.iu)
      throw new L2(B2.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  lo(t2, e, n) {
    return this.ru(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.connection.lo(t2, e, n, s, i)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === B2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new L2(B2.UNKNOWN, t3.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  mo(t2, e, n, s) {
    return this.ru(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, r]) => this.connection.mo(t2, e, n, i, r, s)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === B2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new L2(B2.UNKNOWN, t3.toString());
    });
  }
  terminate() {
    this.iu = true;
  }
};
async function xu(t2, e, n) {
  const s = F(t2), i = function(t3, e2, n2) {
    const s2 = ci(t3, e2), i2 = [];
    return n2.forEach((t4) => {
      "count" === t4.lt ? i2.push({
        alias: t4.alias.canonicalString(),
        count: {}
      }) : "avg" === t4.lt ? i2.push({
        alias: t4.alias.canonicalString(),
        avg: {
          field: wi(t4.fieldPath)
        }
      }) : "sum" === t4.lt && i2.push({
        alias: t4.alias.canonicalString(),
        sum: {
          field: wi(t4.fieldPath)
        }
      });
    }), {
      structuredAggregationQuery: {
        aggregations: i2,
        structuredQuery: s2.structuredQuery
      },
      parent: s2.parent
    };
  }(s.Tt, Tn(e), n), r = i.parent;
  s.connection.ho || delete i.parent;
  const o = (await s.mo(
    "RunAggregationQuery",
    r,
    i,
    /*expectedResponseCount=*/
    1
  )).filter((t3) => !!t3.result);
  return M2(1 === o.length), (u = o[0]).result, u.result.aggregateFields, new en({
    mapValue: {
      fields: null === (c = u.result) || void 0 === c ? void 0 : c.aggregateFields
    }
  });
  var u, c;
}
var Nu = class {
  constructor(t2, e) {
    this.asyncQueue = t2, this.onlineStateHandler = e, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.ou = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this.uu = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.cu = true;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  au() {
    0 === this.ou && (this.hu(
      "Unknown"
      /* OnlineState.Unknown */
    ), this.uu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.uu = null, this.lu("Backend didn't respond within 10 seconds."), this.hu(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  fu(t2) {
    "Online" === this.state ? this.hu(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.ou++, this.ou >= 1 && (this.du(), this.lu(`Connection failed 1 times. Most recent error: ${t2.toString()}`), this.hu(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(t2) {
    this.du(), this.ou = 0, "Online" === t2 && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.cu = false), this.hu(t2);
  }
  hu(t2) {
    t2 !== this.state && (this.state = t2, this.onlineStateHandler(t2));
  }
  lu(t2) {
    const e = `Could not reach Cloud Firestore backend. ${t2}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.cu ? (x2(e), this.cu = false) : C2("OnlineStateTracker", e);
  }
  du() {
    null !== this.uu && (this.uu.cancel(), this.uu = null);
  }
};
var ku = class {
  constructor(t2, e, n, s, i) {
    this.localStore = t2, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this._u = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.wu = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.mu = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.gu = [], this.yu = i, this.yu.Gr((t3) => {
      n.enqueueAndForget(async () => {
        Ku(this) && (C2("RemoteStore", "Restarting streams for network reachability change."), await async function(t4) {
          const e2 = F(t4);
          e2.mu.add(
            4
            /* OfflineCause.ConnectivityChange */
          ), await Mu(e2), e2.pu.set(
            "Unknown"
            /* OnlineState.Unknown */
          ), e2.mu.delete(
            4
            /* OfflineCause.ConnectivityChange */
          ), await $u(e2);
        }(this));
      });
    }), this.pu = new Nu(n, s);
  }
};
async function $u(t2) {
  if (Ku(t2))
    for (const e of t2.gu)
      await e(
        /* enabled= */
        true
      );
}
async function Mu(t2) {
  for (const e of t2.gu)
    await e(
      /* enabled= */
      false
    );
}
function Ou(t2, e) {
  const n = F(t2);
  n.wu.has(e.targetId) || // Mark this as something the client is currently listening for.
  (n.wu.set(e.targetId, e), Uu(n) ? (
    // The listen will be sent in onWatchStreamOpen
    qu(n)
  ) : uc2(n).Mo() && Bu(n, e));
}
function Fu(t2, e) {
  const n = F(t2), s = uc2(n);
  n.wu.delete(e), s.Mo() && Lu(n, e), 0 === n.wu.size && (s.Mo() ? s.Bo() : Ku(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n.pu.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function Bu(t2, e) {
  t2.Iu.Ot(e.targetId), uc2(t2).Jo(e);
}
function Lu(t2, e) {
  t2.Iu.Ot(e), uc2(t2).Yo(e);
}
function qu(t2) {
  t2.Iu = new $s({
    getRemoteKeysForTarget: (e) => t2.remoteSyncer.getRemoteKeysForTarget(e),
    ie: (e) => t2.wu.get(e) || null
  }), uc2(t2).start(), t2.pu.au();
}
function Uu(t2) {
  return Ku(t2) && !uc2(t2).$o() && t2.wu.size > 0;
}
function Ku(t2) {
  return 0 === F(t2).mu.size;
}
function Gu(t2) {
  t2.Iu = void 0;
}
async function Qu(t2) {
  t2.wu.forEach((e, n) => {
    Bu(t2, e);
  });
}
async function ju(t2, e) {
  Gu(t2), // If we still need the watch stream, retry the connection.
  Uu(t2) ? (t2.pu.fu(e), qu(t2)) : (
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    t2.pu.set(
      "Unknown"
      /* OnlineState.Unknown */
    )
  );
}
async function zu(t2, e, n) {
  if (
    // Mark the client as online since we got a message from the server
    t2.pu.set(
      "Online"
      /* OnlineState.Online */
    ), e instanceof Ns && 2 === e.state && e.cause
  )
    try {
      await /** Handles an error on a target */
      async function(t3, e2) {
        const n2 = e2.cause;
        for (const s of e2.targetIds)
          t3.wu.has(s) && (await t3.remoteSyncer.rejectListen(s, n2), t3.wu.delete(s), t3.Iu.removeTarget(s));
      }(t2, e);
    } catch (n2) {
      C2("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n2), await Wu(t2, n2);
    }
  else if (e instanceof Cs ? t2.Iu.Qt(e) : e instanceof xs ? t2.Iu.Zt(e) : t2.Iu.Wt(e), !n.isEqual(st.min()))
    try {
      const e2 = await Wo(t2.localStore);
      n.compareTo(e2) >= 0 && // We have received a target change with a global snapshot if the snapshot
      // version is not equal to SnapshotVersion.min().
      await /**
      * Takes a batch of changes from the Datastore, repackages them as a
      * RemoteEvent, and passes that on to the listener, which is typically the
      * SyncEngine.
      */
      function(t3, e3) {
        const n2 = t3.Iu.ee(e3);
        return n2.targetChanges.forEach((n3, s) => {
          if (n3.resumeToken.approximateByteSize() > 0) {
            const i = t3.wu.get(s);
            i && t3.wu.set(s, i.withResumeToken(n3.resumeToken, e3));
          }
        }), // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n2.targetMismatches.forEach((e4) => {
          const n3 = t3.wu.get(e4);
          if (!n3)
            return;
          t3.wu.set(e4, n3.withResumeToken(Ht.EMPTY_BYTE_STRING, n3.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
          // deliberately don't send a resume token so that we get a full update.
          Lu(t3, e4);
          const s = new Zi(n3.target, e4, 1, n3.sequenceNumber);
          Bu(t3, s);
        }), t3.remoteSyncer.applyRemoteEvent(n2);
      }(t2, n);
    } catch (e2) {
      C2("RemoteStore", "Failed to raise snapshot:", e2), await Wu(t2, e2);
    }
}
async function Wu(t2, e, n) {
  if (!Vt(e))
    throw e;
  t2.mu.add(
    1
    /* OfflineCause.IndexedDbFailed */
  ), // Disable network and raise offline snapshots
  await Mu(t2), t2.pu.set(
    "Offline"
    /* OnlineState.Offline */
  ), n || // Use a simple read operation to determine if IndexedDB recovered.
  // Ideally, we would expose a health check directly on SimpleDb, but
  // RemoteStore only has access to persistence through LocalStore.
  (n = () => Wo(t2.localStore)), // Probe IndexedDB periodically and re-enable network
  t2.asyncQueue.enqueueRetryable(async () => {
    C2("RemoteStore", "Retrying IndexedDB access"), await n(), t2.mu.delete(
      1
      /* OfflineCause.IndexedDbFailed */
    ), await $u(t2);
  });
}
function Hu(t2, e) {
  return e().catch((n) => Wu(t2, n, e));
}
async function Ju(t2) {
  const e = F(t2), n = cc2(e);
  let s = e._u.length > 0 ? e._u[e._u.length - 1].batchId : -1;
  for (; Yu(e); )
    try {
      const t3 = await Yo(e.localStore, s);
      if (null === t3) {
        0 === e._u.length && n.Bo();
        break;
      }
      s = t3.batchId, Zu(e, t3);
    } catch (t3) {
      await Wu(e, t3);
    }
  Xu(e) && tc2(e);
}
function Yu(t2) {
  return Ku(t2) && t2._u.length < 10;
}
function Zu(t2, e) {
  t2._u.push(e);
  const n = cc2(t2);
  n.Mo() && n.Xo && n.tu(e.mutations);
}
function Xu(t2) {
  return Ku(t2) && !cc2(t2).$o() && t2._u.length > 0;
}
function tc2(t2) {
  cc2(t2).start();
}
async function ec2(t2) {
  cc2(t2).su();
}
async function nc2(t2) {
  const e = cc2(t2);
  for (const n of t2._u)
    e.tu(n.mutations);
}
async function sc2(t2, e, n) {
  const s = t2._u.shift(), i = Ji.from(s, e, n);
  await Hu(t2, () => t2.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
  // slot has freed up.
  await Ju(t2);
}
async function ic2(t2, e) {
  e && cc2(t2).Xo && // This error affects the actual write.
  await async function(t3, e2) {
    if (n = e2.code, ds(n) && n !== B2.ABORTED) {
      const n2 = t3._u.shift();
      cc2(t3).Fo(), await Hu(t3, () => t3.remoteSyncer.rejectFailedWrite(n2.batchId, e2)), // It's possible that with the completion of this mutation
      // another slot has freed up.
      await Ju(t3);
    }
    var n;
  }(t2, e), // The write stream might have been started by refilling the write
  // pipeline for failed writes
  Xu(t2) && tc2(t2);
}
async function rc2(t2, e) {
  const n = F(t2);
  n.asyncQueue.verifyOperationInProgress(), C2("RemoteStore", "RemoteStore received new credentials");
  const s = Ku(n);
  n.mu.add(
    3
    /* OfflineCause.CredentialChange */
  ), await Mu(n), s && // Don't set the network status to Unknown if we are offline.
  n.pu.set(
    "Unknown"
    /* OnlineState.Unknown */
  ), await n.remoteSyncer.handleCredentialChange(e), n.mu.delete(
    3
    /* OfflineCause.CredentialChange */
  ), await $u(n);
}
async function oc2(t2, e) {
  const n = F(t2);
  e ? (n.mu.delete(
    2
    /* OfflineCause.IsSecondary */
  ), await $u(n)) : e || (n.mu.add(
    2
    /* OfflineCause.IsSecondary */
  ), await Mu(n), n.pu.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function uc2(t2) {
  return t2.Tu || // Create stream (but note that it is not started yet).
  (t2.Tu = function(t3, e, n) {
    const s = F(t3);
    return s.ru(), new Su(e, s.connection, s.authCredentials, s.appCheckCredentials, s.Tt, n);
  }(t2.datastore, t2.asyncQueue, {
    Xr: Qu.bind(null, t2),
    no: ju.bind(null, t2),
    Ho: zu.bind(null, t2)
  }), t2.gu.push(async (e) => {
    e ? (t2.Tu.Fo(), Uu(t2) ? qu(t2) : t2.pu.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (await t2.Tu.stop(), Gu(t2));
  })), t2.Tu;
}
function cc2(t2) {
  return t2.Eu || // Create stream (but note that it is not started yet).
  (t2.Eu = function(t3, e, n) {
    const s = F(t3);
    return s.ru(), new Du(e, s.connection, s.authCredentials, s.appCheckCredentials, s.Tt, n);
  }(t2.datastore, t2.asyncQueue, {
    Xr: ec2.bind(null, t2),
    no: ic2.bind(null, t2),
    nu: nc2.bind(null, t2),
    eu: sc2.bind(null, t2)
  }), t2.gu.push(async (e) => {
    e ? (t2.Eu.Fo(), // This will start the write stream if necessary.
    await Ju(t2)) : (await t2.Eu.stop(), t2._u.length > 0 && (C2("RemoteStore", `Stopping write stream with ${t2._u.length} pending writes`), t2._u = []));
  })), t2.Eu;
}
var ac2 = class {
  constructor(t2, e, n, s, i) {
    this.asyncQueue = t2, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, this.deferred = new q2(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((t3) => {
    });
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(t2, e, n, s, i) {
    const r = Date.now() + n, o = new ac2(t2, e, r, s, i);
    return o.start(n), o;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(t2) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t2);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(t2) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new L2(B2.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t2) => this.deferred.resolve(t2))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
function hc2(t2, e) {
  if (x2("AsyncQueue", `${e}: ${t2}`), Vt(t2))
    return new L2(B2.UNAVAILABLE, `${e}: ${t2}`);
  throw t2;
}
var lc2 = class {
  /** The default ordering is by key if the comparator is omitted */
  constructor(t2) {
    this.comparator = t2 ? (e, n) => t2(e, n) || ct.comparator(e.key, n.key) : (t3, e) => ct.comparator(t3.key, e.key), this.keyedMap = ps(), this.sortedSet = new We(this.comparator);
  }
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(t2) {
    return new lc2(t2.comparator);
  }
  has(t2) {
    return null != this.keyedMap.get(t2);
  }
  get(t2) {
    return this.keyedMap.get(t2);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(t2) {
    const e = this.keyedMap.get(t2);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(t2) {
    this.sortedSet.inorderTraversal((e, n) => (t2(e), false));
  }
  /** Inserts or updates a document with the same key */
  add(t2) {
    const e = this.delete(t2.key);
    return e.copy(e.keyedMap.insert(t2.key, t2), e.sortedSet.insert(t2, null));
  }
  /** Deletes a document with a given key */
  delete(t2) {
    const e = this.get(t2);
    return e ? this.copy(this.keyedMap.remove(t2), this.sortedSet.remove(e)) : this;
  }
  isEqual(t2) {
    if (!(t2 instanceof lc2))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.sortedSet.getIterator(), n = t2.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (!t3.isEqual(s))
        return false;
    }
    return true;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e.toString());
    }), 0 === t2.length ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
  }
  copy(t2, e) {
    const n = new lc2();
    return n.comparator = this.comparator, n.keyedMap = t2, n.sortedSet = e, n;
  }
};
var fc2 = class {
  constructor() {
    this.Au = new We(ct.comparator);
  }
  track(t2) {
    const e = t2.doc.key, n = this.Au.get(e);
    n ? (
      // Merge the new change with the existing change.
      0 !== t2.type && 3 === n.type ? this.Au = this.Au.insert(e, t2) : 3 === t2.type && 1 !== n.type ? this.Au = this.Au.insert(e, {
        type: n.type,
        doc: t2.doc
      }) : 2 === t2.type && 2 === n.type ? this.Au = this.Au.insert(e, {
        type: 2,
        doc: t2.doc
      }) : 2 === t2.type && 0 === n.type ? this.Au = this.Au.insert(e, {
        type: 0,
        doc: t2.doc
      }) : 1 === t2.type && 0 === n.type ? this.Au = this.Au.remove(e) : 1 === t2.type && 2 === n.type ? this.Au = this.Au.insert(e, {
        type: 1,
        doc: n.doc
      }) : 0 === t2.type && 1 === n.type ? this.Au = this.Au.insert(e, {
        type: 2,
        doc: t2.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        $()
      )
    ) : this.Au = this.Au.insert(e, t2);
  }
  Ru() {
    const t2 = [];
    return this.Au.inorderTraversal((e, n) => {
      t2.push(n);
    }), t2;
  }
};
var dc2 = class {
  constructor(t2, e, n, s, i, r, o, u, c) {
    this.query = t2, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = u, this.hasCachedResults = c;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(t2, e, n, s, i) {
    const r = [];
    return e.forEach((t3) => {
      r.push({
        type: 0,
        doc: t3
      });
    }), new dc2(
      t2,
      e,
      lc2.emptySet(e),
      r,
      n,
      s,
      /* syncStateChanged= */
      true,
      /* excludesMetadataChanges= */
      false,
      i
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t2) {
    if (!(this.fromCache === t2.fromCache && this.hasCachedResults === t2.hasCachedResults && this.syncStateChanged === t2.syncStateChanged && this.mutatedKeys.isEqual(t2.mutatedKeys) && Rn(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.oldDocs.isEqual(t2.oldDocs)))
      return false;
    const e = this.docChanges, n = t2.docChanges;
    if (e.length !== n.length)
      return false;
    for (let t3 = 0; t3 < e.length; t3++)
      if (e[t3].type !== n[t3].type || !e[t3].doc.isEqual(n[t3].doc))
        return false;
    return true;
  }
};
var _c = class {
  constructor() {
    this.Pu = void 0, this.listeners = [];
  }
};
var wc2 = class {
  constructor() {
    this.queries = new ws((t2) => Pn(t2), Rn), this.onlineState = "Unknown", this.vu = /* @__PURE__ */ new Set();
  }
};
async function mc2(t2, e) {
  const n = F(t2), s = e.query;
  let i = false, r = n.queries.get(s);
  if (r || (i = true, r = new _c()), i)
    try {
      r.Pu = await n.onListen(s);
    } catch (t3) {
      const n2 = hc2(t3, `Initialization of query '${vn(e.query)}' failed`);
      return void e.onError(n2);
    }
  if (n.queries.set(s, r), r.listeners.push(e), // Run global snapshot listeners if a consistent snapshot has been emitted.
  e.bu(n.onlineState), r.Pu) {
    e.Vu(r.Pu) && Ic2(n);
  }
}
async function gc2(t2, e) {
  const n = F(t2), s = e.query;
  let i = false;
  const r = n.queries.get(s);
  if (r) {
    const t3 = r.listeners.indexOf(e);
    t3 >= 0 && (r.listeners.splice(t3, 1), i = 0 === r.listeners.length);
  }
  if (i)
    return n.queries.delete(s), n.onUnlisten(s);
}
function yc2(t2, e) {
  const n = F(t2);
  let s = false;
  for (const t3 of e) {
    const e2 = t3.query, i = n.queries.get(e2);
    if (i) {
      for (const e3 of i.listeners)
        e3.Vu(t3) && (s = true);
      i.Pu = t3;
    }
  }
  s && Ic2(n);
}
function pc2(t2, e, n) {
  const s = F(t2), i = s.queries.get(e);
  if (i)
    for (const t3 of i.listeners)
      t3.onError(n);
  s.queries.delete(e);
}
function Ic2(t2) {
  t2.vu.forEach((t3) => {
    t3.next();
  });
}
var Tc2 = class {
  constructor(t2, e, n) {
    this.query = t2, this.Su = e, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.Du = false, this.Cu = null, this.onlineState = "Unknown", this.options = n || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  Vu(t2) {
    if (!this.options.includeMetadataChanges) {
      const e2 = [];
      for (const n of t2.docChanges)
        3 !== n.type && e2.push(n);
      t2 = new dc2(
        t2.query,
        t2.docs,
        t2.oldDocs,
        e2,
        t2.mutatedKeys,
        t2.fromCache,
        t2.syncStateChanged,
        /* excludesMetadataChanges= */
        true,
        t2.hasCachedResults
      );
    }
    let e = false;
    return this.Du ? this.xu(t2) && (this.Su.next(t2), e = true) : this.Nu(t2, this.onlineState) && (this.ku(t2), e = true), this.Cu = t2, e;
  }
  onError(t2) {
    this.Su.error(t2);
  }
  /** Returns whether a snapshot was raised. */
  bu(t2) {
    this.onlineState = t2;
    let e = false;
    return this.Cu && !this.Du && this.Nu(this.Cu, t2) && (this.ku(this.Cu), e = true), e;
  }
  Nu(t2, e) {
    if (!t2.fromCache)
      return true;
    const n = "Offline" !== e;
    return (!this.options.$u || !n) && (!t2.docs.isEmpty() || t2.hasCachedResults || "Offline" === e);
  }
  xu(t2) {
    if (t2.docChanges.length > 0)
      return true;
    const e = this.Cu && this.Cu.hasPendingWrites !== t2.hasPendingWrites;
    return !(!t2.syncStateChanged && !e) && true === this.options.includeMetadataChanges;
  }
  ku(t2) {
    t2 = dc2.fromInitialDocuments(t2.query, t2.docs, t2.mutatedKeys, t2.fromCache, t2.hasCachedResults), this.Du = true, this.Su.next(t2);
  }
};
var Ec2 = class {
  constructor(t2, e) {
    this.Mu = t2, this.byteLength = e;
  }
  Ou() {
    return "metadata" in this.Mu;
  }
};
var Ac2 = class {
  constructor(t2) {
    this.Tt = t2;
  }
  Zi(t2) {
    return Hs(this.Tt, t2);
  }
  /**
   * Converts a BundleDocument to a MutableDocument.
   */
  Xi(t2) {
    return t2.metadata.exists ? ei(this.Tt, t2.document, false) : sn.newNoDocument(this.Zi(t2.metadata.name), this.tr(t2.metadata.readTime));
  }
  tr(t2) {
    return Qs(t2);
  }
};
var Rc2 = class {
  constructor(t2, e, n) {
    this.Fu = t2, this.localStore = e, this.Tt = n, /** Batched queries to be saved into storage */
    this.queries = [], /** Batched documents to be saved into storage */
    this.documents = [], /** The collection groups affected by this bundle. */
    this.collectionGroups = /* @__PURE__ */ new Set(), this.progress = Pc2(t2);
  }
  /**
   * Adds an element from the bundle to the loader.
   *
   * Returns a new progress if adding the element leads to a new progress,
   * otherwise returns null.
   */
  Bu(t2) {
    this.progress.bytesLoaded += t2.byteLength;
    let e = this.progress.documentsLoaded;
    if (t2.Mu.namedQuery)
      this.queries.push(t2.Mu.namedQuery);
    else if (t2.Mu.documentMetadata) {
      this.documents.push({
        metadata: t2.Mu.documentMetadata
      }), t2.Mu.documentMetadata.exists || ++e;
      const n = rt.fromString(t2.Mu.documentMetadata.name);
      this.collectionGroups.add(n.get(n.length - 2));
    } else
      t2.Mu.document && (this.documents[this.documents.length - 1].document = t2.Mu.document, ++e);
    return e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null;
  }
  Lu(t2) {
    const e = /* @__PURE__ */ new Map(), n = new Ac2(this.Tt);
    for (const s of t2)
      if (s.metadata.queries) {
        const t3 = n.Zi(s.metadata.name);
        for (const n2 of s.metadata.queries) {
          const s2 = (e.get(n2) || vs()).add(t3);
          e.set(n2, s2);
        }
      }
    return e;
  }
  /**
   * Update the progress to 'Success' and return the updated progress.
   */
  async complete() {
    const t2 = await iu(this.localStore, new Ac2(this.Tt), this.documents, this.Fu.id), e = this.Lu(this.documents);
    for (const t3 of this.queries)
      await ru(this.localStore, t3, e.get(t3.name));
    return this.progress.taskState = "Success", {
      progress: this.progress,
      qu: this.collectionGroups,
      Uu: t2
    };
  }
};
function Pc2(t2) {
  return {
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: t2.totalDocuments,
    totalBytes: t2.totalBytes
  };
}
var vc2 = class {
  constructor(t2) {
    this.key = t2;
  }
};
var bc2 = class {
  constructor(t2) {
    this.key = t2;
  }
};
var Vc2 = class {
  constructor(t2, e) {
    this.query = t2, this.Ku = e, this.Gu = null, this.hasCachedResults = false, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = false, /** Documents in the view but not in the remote target */
    this.Qu = vs(), /** Document Keys that have local changes */
    this.mutatedKeys = vs(), this.ju = Sn(t2), this.zu = new lc2(this.ju);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get Wu() {
    return this.Ku;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  Hu(t2, e) {
    const n = e ? e.Ju : new fc2(), s = e ? e.zu : this.zu;
    let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = false;
    const u = "F" === this.query.limitType && s.size === this.query.limit ? s.last() : null, c = "L" === this.query.limitType && s.size === this.query.limit ? s.first() : null;
    if (t2.inorderTraversal((t3, e2) => {
      const a = s.get(t3), h = bn(this.query, e2) ? e2 : null, l2 = !!a && this.mutatedKeys.has(a.key), f = !!h && (h.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
      let d = false;
      if (a && h) {
        a.data.isEqual(h.data) ? l2 !== f && (n.track({
          type: 3,
          doc: h
        }), d = true) : this.Yu(a, h) || (n.track({
          type: 2,
          doc: h
        }), d = true, (u && this.ju(h, u) > 0 || c && this.ju(h, c) < 0) && // This doc moved from inside the limit to outside the limit.
        // That means there may be some other doc in the local cache
        // that should be included instead.
        (o = true));
      } else
        !a && h ? (n.track({
          type: 0,
          doc: h
        }), d = true) : a && !h && (n.track({
          type: 1,
          doc: a
        }), d = true, (u || c) && // A doc was removed from a full limit query. We'll need to
        // requery from the local cache to see if we know about some other
        // doc that should be in the results.
        (o = true));
      d && (h ? (r = r.add(h), i = f ? i.add(t3) : i.delete(t3)) : (r = r.delete(t3), i = i.delete(t3)));
    }), null !== this.query.limit)
      for (; r.size > this.query.limit; ) {
        const t3 = "F" === this.query.limitType ? r.last() : r.first();
        r = r.delete(t3.key), i = i.delete(t3.key), n.track({
          type: 1,
          doc: t3
        });
      }
    return {
      zu: r,
      Ju: n,
      Li: o,
      mutatedKeys: i
    };
  }
  Yu(t2, e) {
    return t2.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param updateLimboDocuments - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(t2, e, n) {
    const s = this.zu;
    this.zu = t2.zu, this.mutatedKeys = t2.mutatedKeys;
    const i = t2.Ju.Ru();
    i.sort((t3, e2) => function(t4, e3) {
      const n2 = (t5) => {
        switch (t5) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return $();
        }
      };
      return n2(t4) - n2(e3);
    }(t3.type, e2.type) || this.ju(t3.doc, e2.doc)), this.Zu(n);
    const r = e ? this.Xu() : [], o = 0 === this.Qu.size && this.current ? 1 : 0, u = o !== this.Gu;
    if (this.Gu = o, 0 !== i.length || u) {
      return {
        snapshot: new dc2(
          this.query,
          t2.zu,
          s,
          i,
          t2.mutatedKeys,
          0 === o,
          u,
          /* excludesMetadataChanges= */
          false,
          !!n && n.resumeToken.approximateByteSize() > 0
        ),
        tc: r
      };
    }
    return {
      tc: r
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  bu(t2) {
    return this.current && "Offline" === t2 ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = false, this.applyChanges(
        {
          zu: this.zu,
          Ju: new fc2(),
          mutatedKeys: this.mutatedKeys,
          Li: false
        },
        /* updateLimboDocuments= */
        false
      ))
    ) : {
      tc: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  ec(t2) {
    return !this.Ku.has(t2) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    (!!this.zu.has(t2) && !this.zu.get(t2).hasLocalMutations);
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  Zu(t2) {
    t2 && (t2.addedDocuments.forEach((t3) => this.Ku = this.Ku.add(t3)), t2.modifiedDocuments.forEach((t3) => {
    }), t2.removedDocuments.forEach((t3) => this.Ku = this.Ku.delete(t3)), this.current = t2.current);
  }
  Xu() {
    if (!this.current)
      return [];
    const t2 = this.Qu;
    this.Qu = vs(), this.zu.forEach((t3) => {
      this.ec(t3.key) && (this.Qu = this.Qu.add(t3.key));
    });
    const e = [];
    return t2.forEach((t3) => {
      this.Qu.has(t3) || e.push(new bc2(t3));
    }), this.Qu.forEach((n) => {
      t2.has(n) || e.push(new vc2(n));
    }), e;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  nc(t2) {
    this.Ku = t2.Yi, this.Qu = vs();
    const e = this.Hu(t2.documents);
    return this.applyChanges(
      e,
      /*updateLimboDocuments=*/
      true
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  sc() {
    return dc2.fromInitialDocuments(this.query, this.zu, this.mutatedKeys, 0 === this.Gu, this.hasCachedResults);
  }
};
var Sc2 = class {
  constructor(t2, e, n) {
    this.query = t2, this.targetId = e, this.view = n;
  }
};
var Dc2 = class {
  constructor(t2) {
    this.key = t2, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.ic = false;
  }
};
var Cc2 = class {
  constructor(t2, e, n, s, i, r) {
    this.localStore = t2, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.rc = {}, this.oc = new ws((t3) => Pn(t3), Rn), this.uc = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.cc = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.ac = new We(ct.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.hc = /* @__PURE__ */ new Map(), this.lc = new vo(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.fc = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.dc = /* @__PURE__ */ new Map(), this._c = eo.Sn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.wc = void 0;
  }
  get isPrimaryClient() {
    return true === this.wc;
  }
};
async function xc2(t2, e) {
  const n = ua2(t2);
  let s, i;
  const r = n.oc.get(e);
  if (r)
    s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.sc();
  else {
    const t3 = await Zo(n.localStore, Tn(e));
    n.isPrimaryClient && Ou(n.remoteStore, t3);
    const r2 = n.sharedClientState.addLocalQueryTarget(t3.targetId);
    s = t3.targetId, i = await Nc2(n, e, s, "current" === r2, t3.resumeToken);
  }
  return i;
}
async function Nc2(t2, e, n, s, i) {
  t2.mc = (e2, n2, s2) => async function(t3, e3, n3, s3) {
    let i2 = e3.view.Hu(n3);
    i2.Li && // The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (i2 = await tu(
      t3.localStore,
      e3.query,
      /* usePreviousResults= */
      false
    ).then(({ documents: t4 }) => e3.view.Hu(t4, i2)));
    const r2 = s3 && s3.targetChanges.get(e3.targetId), o2 = e3.view.applyChanges(
      i2,
      /* updateLimboDocuments= */
      t3.isPrimaryClient,
      r2
    );
    return jc2(t3, e3.targetId, o2.tc), o2.snapshot;
  }(t2, e2, n2, s2);
  const r = await tu(
    t2.localStore,
    e,
    /* usePreviousResults= */
    true
  ), o = new Vc2(e, r.Yi), u = o.Hu(r.documents), c = Ds.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" !== t2.onlineState, i), a = o.applyChanges(
    u,
    /* updateLimboDocuments= */
    t2.isPrimaryClient,
    c
  );
  jc2(t2, n, a.tc);
  const h = new Sc2(e, n, o);
  return t2.oc.set(e, h), t2.uc.has(n) ? t2.uc.get(n).push(e) : t2.uc.set(n, [e]), a.snapshot;
}
async function kc2(t2, e) {
  const n = F(t2), s = n.oc.get(e), i = n.uc.get(s.targetId);
  if (i.length > 1)
    return n.uc.set(s.targetId, i.filter((t3) => !Rn(t3, e))), void n.oc.delete(e);
  if (n.isPrimaryClient) {
    n.sharedClientState.removeLocalQueryTarget(s.targetId);
    n.sharedClientState.isActiveQueryTarget(s.targetId) || await Xo(
      n.localStore,
      s.targetId,
      /*keepPersistedTargetData=*/
      false
    ).then(() => {
      n.sharedClientState.clearQueryState(s.targetId), Fu(n.remoteStore, s.targetId), Gc2(n, s.targetId);
    }).catch(Et);
  } else
    Gc2(n, s.targetId), await Xo(
      n.localStore,
      s.targetId,
      /*keepPersistedTargetData=*/
      true
    );
}
async function $c2(t2, e, n) {
  const s = ca2(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = F(t4), s2 = nt.now(), i = e2.reduce((t5, e3) => t5.add(e3.key), vs());
      let r, o;
      return n2.persistence.runTransaction("Locally write mutations", "readwrite", (t5) => {
        let u = gs(), c = vs();
        return n2.ji.getEntries(t5, i).next((t6) => {
          u = t6, u.forEach((t7, e3) => {
            e3.isValidDocument() || (c = c.add(t7));
          });
        }).next(() => n2.localDocuments.getOverlayedDocuments(t5, u)).next((i2) => {
          r = i2;
          const o2 = [];
          for (const t6 of e2) {
            const e3 = es(t6, r.get(t6.key).overlayedDocument);
            null != e3 && // NOTE: The base state should only be applied if there's some
            // existing document to override, so use a Precondition of
            // exists=true
            o2.push(new is(t6.key, e3, nn(e3.value.mapValue), Hn.exists(true)));
          }
          return n2.mutationQueue.addMutationBatch(t5, s2, o2, e2);
        }).next((e3) => {
          o = e3;
          const s3 = e3.applyToLocalDocumentSet(r, c);
          return n2.documentOverlayCache.saveOverlays(t5, e3.batchId, s3);
        });
      }).then(() => ({
        batchId: o.batchId,
        changes: Is(r)
      }));
    }(s.localStore, e);
    s.sharedClientState.addPendingMutation(t3.batchId), function(t4, e2, n2) {
      let s2 = t4.fc[t4.currentUser.toKey()];
      s2 || (s2 = new We(X2));
      s2 = s2.insert(e2, n2), t4.fc[t4.currentUser.toKey()] = s2;
    }(s, t3.batchId, n), await Hc2(s, t3.changes), await Ju(s.remoteStore);
  } catch (t3) {
    const e2 = hc2(t3, "Failed to persist write");
    n.reject(e2);
  }
}
async function Mc2(t2, e) {
  const n = F(t2);
  try {
    const t3 = await Ho(n.localStore, e);
    e.targetChanges.forEach((t4, e2) => {
      const s = n.hc.get(e2);
      s && // Since this is a limbo resolution lookup, it's for a single document
      // and it could be added, modified, or removed, but not a combination.
      (M2(t4.addedDocuments.size + t4.modifiedDocuments.size + t4.removedDocuments.size <= 1), t4.addedDocuments.size > 0 ? s.ic = true : t4.modifiedDocuments.size > 0 ? M2(s.ic) : t4.removedDocuments.size > 0 && (M2(s.ic), s.ic = false));
    }), await Hc2(n, t3, e);
  } catch (t3) {
    await Et(t3);
  }
}
function Oc2(t2, e, n) {
  const s = F(t2);
  if (s.isPrimaryClient && 0 === n || !s.isPrimaryClient && 1 === n) {
    const t3 = [];
    s.oc.forEach((n2, s2) => {
      const i = s2.view.bu(e);
      i.snapshot && t3.push(i.snapshot);
    }), function(t4, e2) {
      const n2 = F(t4);
      n2.onlineState = e2;
      let s2 = false;
      n2.queries.forEach((t5, n3) => {
        for (const t6 of n3.listeners)
          t6.bu(e2) && (s2 = true);
      }), s2 && Ic2(n2);
    }(s.eventManager, e), t3.length && s.rc.Ho(t3), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
  }
}
async function Fc2(t2, e, n) {
  const s = F(t2);
  s.sharedClientState.updateQueryState(e, "rejected", n);
  const i = s.hc.get(e), r = i && i.key;
  if (r) {
    let t3 = new We(ct.comparator);
    t3 = t3.insert(r, sn.newNoDocument(r, st.min()));
    const n2 = vs().add(r), i2 = new Ss(
      st.min(),
      /* targetChanges= */
      /* @__PURE__ */ new Map(),
      /* targetMismatches= */
      new Ye(X2),
      t3,
      n2
    );
    await Mc2(s, i2), // Since this query failed, we won't want to manually unlisten to it.
    // We only remove it from bookkeeping after we successfully applied the
    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
    // this query when the RemoteStore restarts the Watch stream, which should
    // re-trigger the target failure.
    s.ac = s.ac.remove(r), s.hc.delete(e), Wc2(s);
  } else
    await Xo(
      s.localStore,
      e,
      /* keepPersistedTargetData */
      false
    ).then(() => Gc2(s, e, n)).catch(Et);
}
async function Bc2(t2, e) {
  const n = F(t2), s = e.batch.batchId;
  try {
    const t3 = await zo(n.localStore, e);
    Kc2(
      n,
      s,
      /*error=*/
      null
    ), Uc2(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), await Hc2(n, t3);
  } catch (t3) {
    await Et(t3);
  }
}
async function Lc2(t2, e, n) {
  const s = F(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = F(t4);
      return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (t5) => {
        let s2;
        return n2.mutationQueue.lookupMutationBatch(t5, e2).next((e3) => (M2(null !== e3), s2 = e3.keys(), n2.mutationQueue.removeMutationBatch(t5, e3))).next(() => n2.mutationQueue.performConsistencyCheck(t5)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(t5, s2, e2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t5, s2)).next(() => n2.localDocuments.getDocuments(t5, s2));
      });
    }(s.localStore, e);
    Kc2(s, e, n), Uc2(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), await Hc2(s, t3);
  } catch (n2) {
    await Et(n2);
  }
}
async function qc2(t2, e) {
  const n = F(t2);
  Ku(n.remoteStore) || C2("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
  try {
    const t3 = await function(t4) {
      const e2 = F(t4);
      return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t5) => e2.mutationQueue.getHighestUnacknowledgedBatchId(t5));
    }(n.localStore);
    if (-1 === t3)
      return void e.resolve();
    const s = n.dc.get(t3) || [];
    s.push(e), n.dc.set(t3, s);
  } catch (t3) {
    const n2 = hc2(t3, "Initialization of waitForPendingWrites() operation failed");
    e.reject(n2);
  }
}
function Uc2(t2, e) {
  (t2.dc.get(e) || []).forEach((t3) => {
    t3.resolve();
  }), t2.dc.delete(e);
}
function Kc2(t2, e, n) {
  const s = F(t2);
  let i = s.fc[s.currentUser.toKey()];
  if (i) {
    const t3 = i.get(e);
    t3 && (n ? t3.reject(n) : t3.resolve(), i = i.remove(e)), s.fc[s.currentUser.toKey()] = i;
  }
}
function Gc2(t2, e, n = null) {
  t2.sharedClientState.removeLocalQueryTarget(e);
  for (const s of t2.uc.get(e))
    t2.oc.delete(s), n && t2.rc.gc(s, n);
  if (t2.uc.delete(e), t2.isPrimaryClient) {
    t2.lc.ds(e).forEach((e2) => {
      t2.lc.containsKey(e2) || // We removed the last reference for this key
      Qc2(t2, e2);
    });
  }
}
function Qc2(t2, e) {
  t2.cc.delete(e.path.canonicalString());
  const n = t2.ac.get(e);
  null !== n && (Fu(t2.remoteStore, n), t2.ac = t2.ac.remove(e), t2.hc.delete(n), Wc2(t2));
}
function jc2(t2, e, n) {
  for (const s of n)
    if (s instanceof vc2)
      t2.lc.addReference(s.key, e), zc2(t2, s);
    else if (s instanceof bc2) {
      C2("SyncEngine", "Document no longer in limbo: " + s.key), t2.lc.removeReference(s.key, e);
      t2.lc.containsKey(s.key) || // We removed the last reference for this key
      Qc2(t2, s.key);
    } else
      $();
}
function zc2(t2, e) {
  const n = e.key, s = n.path.canonicalString();
  t2.ac.get(n) || t2.cc.has(s) || (C2("SyncEngine", "New document in limbo: " + n), t2.cc.add(s), Wc2(t2));
}
function Wc2(t2) {
  for (; t2.cc.size > 0 && t2.ac.size < t2.maxConcurrentLimboResolutions; ) {
    const e = t2.cc.values().next().value;
    t2.cc.delete(e);
    const n = new ct(rt.fromString(e)), s = t2._c.next();
    t2.hc.set(s, new Dc2(n)), t2.ac = t2.ac.insert(n, s), Ou(t2.remoteStore, new Zi(Tn(wn(n.path)), s, 2, $t.at));
  }
}
async function Hc2(t2, e, n) {
  const s = F(t2), i = [], r = [], o = [];
  s.oc.isEmpty() || (s.oc.forEach((t3, u) => {
    o.push(s.mc(u, e, n).then((t4) => {
      if (
        // If there are changes, or we are handling a global snapshot, notify
        // secondary clients to update query state.
        (t4 || n) && s.isPrimaryClient && s.sharedClientState.updateQueryState(u.targetId, (null == t4 ? void 0 : t4.fromCache) ? "not-current" : "current"), t4
      ) {
        i.push(t4);
        const e2 = Uo.Ni(u.targetId, t4);
        r.push(e2);
      }
    }));
  }), await Promise.all(o), s.rc.Ho(i), await async function(t3, e2) {
    const n2 = F(t3);
    try {
      await n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t4) => At.forEach(e2, (e3) => At.forEach(e3.Ci, (s2) => n2.persistence.referenceDelegate.addReference(t4, e3.targetId, s2)).next(() => At.forEach(e3.xi, (s2) => n2.persistence.referenceDelegate.removeReference(t4, e3.targetId, s2)))));
    } catch (t4) {
      if (!Vt(t4))
        throw t4;
      C2("LocalStore", "Failed to update sequence numbers: " + t4);
    }
    for (const t4 of e2) {
      const e3 = t4.targetId;
      if (!t4.fromCache) {
        const t5 = n2.Ki.get(e3), s2 = t5.snapshotVersion, i2 = t5.withLastLimboFreeSnapshotVersion(s2);
        n2.Ki = n2.Ki.insert(e3, i2);
      }
    }
  }(s.localStore, r));
}
async function Jc2(t2, e) {
  const n = F(t2);
  if (!n.currentUser.isEqual(e)) {
    C2("SyncEngine", "User change. New user:", e.toKey());
    const t3 = await jo(n.localStore, e);
    n.currentUser = e, // Fails tasks waiting for pending writes requested by previous user.
    function(t4, e2) {
      t4.dc.forEach((t5) => {
        t5.forEach((t6) => {
          t6.reject(new L2(B2.CANCELLED, e2));
        });
      }), t4.dc.clear();
    }(n, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
    n.sharedClientState.handleUserChange(e, t3.removedBatchIds, t3.addedBatchIds), await Hc2(n, t3.Wi);
  }
}
function Yc2(t2, e) {
  const n = F(t2), s = n.hc.get(e);
  if (s && s.ic)
    return vs().add(s.key);
  {
    let t3 = vs();
    const s2 = n.uc.get(e);
    if (!s2)
      return t3;
    for (const e2 of s2) {
      const s3 = n.oc.get(e2);
      t3 = t3.unionWith(s3.view.Wu);
    }
    return t3;
  }
}
async function Zc2(t2, e) {
  const n = F(t2), s = await tu(
    n.localStore,
    e.query,
    /* usePreviousResults= */
    true
  ), i = e.view.nc(s);
  return n.isPrimaryClient && jc2(n, e.targetId, i.tc), i;
}
async function Xc2(t2, e) {
  const n = F(t2);
  return nu(n.localStore, e).then((t3) => Hc2(n, t3));
}
async function ta2(t2, e, n, s) {
  const i = F(t2), r = await function(t3, e2) {
    const n2 = F(t3), s2 = F(n2.mutationQueue);
    return n2.persistence.runTransaction("Lookup mutation documents", "readonly", (t4) => s2.An(t4, e2).next((e3) => e3 ? n2.localDocuments.getDocuments(t4, e3) : At.resolve(null)));
  }(i.localStore, e);
  null !== r ? ("pending" === n ? (
    // If we are the primary client, we need to send this write to the
    // backend. Secondary clients will ignore these writes since their remote
    // connection is disabled.
    await Ju(i.remoteStore)
  ) : "acknowledged" === n || "rejected" === n ? (
    // NOTE: Both these methods are no-ops for batches that originated from
    // other clients.
    (Kc2(i, e, s || null), Uc2(i, e), function(t3, e2) {
      F(F(t3).mutationQueue).Pn(e2);
    }(i.localStore, e))
  ) : $(), await Hc2(i, r)) : (
    // A throttled tab may not have seen the mutation before it was completed
    // and removed from the mutation queue, in which case we won't have cached
    // the affected documents. In this case we can safely ignore the update
    // since that means we didn't apply the mutation locally at all (if we
    // had, we would have cached the affected documents), and so we will just
    // see any resulting document changes via normal remote document updates
    // as applicable.
    C2("SyncEngine", "Cannot apply mutation batch with id: " + e)
  );
}
async function ea2(t2, e) {
  const n = F(t2);
  if (ua2(n), ca2(n), true === e && true !== n.wc) {
    const t3 = n.sharedClientState.getAllActiveQueryTargets(), e2 = await na2(n, t3.toArray());
    n.wc = true, await oc2(n.remoteStore, true);
    for (const t4 of e2)
      Ou(n.remoteStore, t4);
  } else if (false === e && false !== n.wc) {
    const t3 = [];
    let e2 = Promise.resolve();
    n.uc.forEach((s, i) => {
      n.sharedClientState.isLocalQueryTarget(i) ? t3.push(i) : e2 = e2.then(() => (Gc2(n, i), Xo(
        n.localStore,
        i,
        /*keepPersistedTargetData=*/
        true
      ))), Fu(n.remoteStore, i);
    }), await e2, await na2(n, t3), // PORTING NOTE: Multi-Tab only.
    function(t4) {
      const e3 = F(t4);
      e3.hc.forEach((t5, n2) => {
        Fu(e3.remoteStore, n2);
      }), e3.lc._s(), e3.hc = /* @__PURE__ */ new Map(), e3.ac = new We(ct.comparator);
    }(n), n.wc = false, await oc2(n.remoteStore, false);
  }
}
async function na2(t2, e, n) {
  const s = F(t2), i = [], r = [];
  for (const t3 of e) {
    let e2;
    const n2 = s.uc.get(t3);
    if (n2 && 0 !== n2.length) {
      e2 = await Zo(s.localStore, Tn(n2[0]));
      for (const t4 of n2) {
        const e3 = s.oc.get(t4), n3 = await Zc2(s, e3);
        n3.snapshot && r.push(n3.snapshot);
      }
    } else {
      const n3 = await eu(s.localStore, t3);
      e2 = await Zo(s.localStore, n3), await Nc2(
        s,
        sa2(n3),
        t3,
        /*current=*/
        false,
        e2.resumeToken
      );
    }
    i.push(e2);
  }
  return s.rc.Ho(r), i;
}
function sa2(t2) {
  return _n(t2.path, t2.collectionGroup, t2.orderBy, t2.filters, t2.limit, "F", t2.startAt, t2.endAt);
}
function ia2(t2) {
  const e = F(t2);
  return F(F(e.localStore).persistence).Si();
}
async function ra2(t2, e, n, s) {
  const i = F(t2);
  if (i.wc)
    return void C2("SyncEngine", "Ignoring unexpected query state notification.");
  const r = i.uc.get(e);
  if (r && r.length > 0)
    switch (n) {
      case "current":
      case "not-current": {
        const t3 = await nu(i.localStore, Vn(r[0])), s2 = Ss.createSynthesizedRemoteEventForCurrentChange(e, "current" === n, Ht.EMPTY_BYTE_STRING);
        await Hc2(i, t3, s2);
        break;
      }
      case "rejected":
        await Xo(
          i.localStore,
          e,
          /* keepPersistedTargetData */
          true
        ), Gc2(i, e, s);
        break;
      default:
        $();
    }
}
async function oa2(t2, e, n) {
  const s = ua2(t2);
  if (s.wc) {
    for (const t3 of e) {
      if (s.uc.has(t3)) {
        C2("SyncEngine", "Adding an already active target " + t3);
        continue;
      }
      const e2 = await eu(s.localStore, t3), n2 = await Zo(s.localStore, e2);
      await Nc2(
        s,
        sa2(e2),
        n2.targetId,
        /*current=*/
        false,
        n2.resumeToken
      ), Ou(s.remoteStore, n2);
    }
    for (const t3 of n)
      s.uc.has(t3) && // Release queries that are still active.
      await Xo(
        s.localStore,
        t3,
        /* keepPersistedTargetData */
        false
      ).then(() => {
        Fu(s.remoteStore, t3), Gc2(s, t3);
      }).catch(Et);
  }
}
function ua2(t2) {
  const e = F(t2);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = Mc2.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Yc2.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = Fc2.bind(null, e), e.rc.Ho = yc2.bind(null, e.eventManager), e.rc.gc = pc2.bind(null, e.eventManager), e;
}
function ca2(t2) {
  const e = F(t2);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = Bc2.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = Lc2.bind(null, e), e;
}
function aa2(t2, e, n) {
  const s = F(t2);
  /** Loads a bundle and returns the list of affected collection groups. */
  (async function(t3, e2, n2) {
    try {
      const s2 = await e2.getMetadata();
      if (await function(t4, e3) {
        const n3 = F(t4), s3 = Qs(e3.createTime);
        return n3.persistence.runTransaction("hasNewerBundle", "readonly", (t5) => n3.$s.getBundleMetadata(t5, e3.id)).then((t5) => !!t5 && t5.createTime.compareTo(s3) >= 0);
      }(t3.localStore, s2))
        return await e2.close(), n2._completeWith(function(t4) {
          return {
            taskState: "Success",
            documentsLoaded: t4.totalDocuments,
            bytesLoaded: t4.totalBytes,
            totalDocuments: t4.totalDocuments,
            totalBytes: t4.totalBytes
          };
        }(s2)), Promise.resolve(/* @__PURE__ */ new Set());
      n2._updateProgress(Pc2(s2));
      const i = new Rc2(s2, t3.localStore, e2.Tt);
      let r = await e2.yc();
      for (; r; ) {
        const t4 = await i.Bu(r);
        t4 && n2._updateProgress(t4), r = await e2.yc();
      }
      const o = await i.complete();
      return await Hc2(
        t3,
        o.Uu,
        /* remoteEvent */
        void 0
      ), // Save metadata, so loading the same bundle will skip.
      await function(t4, e3) {
        const n3 = F(t4);
        return n3.persistence.runTransaction("Save bundle", "readwrite", (t5) => n3.$s.saveBundleMetadata(t5, e3));
      }(t3.localStore, s2), n2._completeWith(o.progress), Promise.resolve(o.qu);
    } catch (t4) {
      return N2("SyncEngine", `Loading bundle failed with ${t4}`), n2._failWith(t4), Promise.resolve(/* @__PURE__ */ new Set());
    }
  })(s, e, n).then((t3) => {
    s.sharedClientState.notifyBundleLoaded(t3);
  });
}
var ha2 = class {
  constructor() {
    this.synchronizeTabs = false;
  }
  async initialize(t2) {
    this.Tt = vu(t2.databaseInfo.databaseId), this.sharedClientState = this.Ic(t2), this.persistence = this.Tc(t2), await this.persistence.start(), this.localStore = this.Ec(t2), this.gcScheduler = this.Ac(t2, this.localStore), this.indexBackfillerScheduler = this.Rc(t2, this.localStore);
  }
  Ac(t2, e) {
    return null;
  }
  Rc(t2, e) {
    return null;
  }
  Ec(t2) {
    return Qo(this.persistence, new Ko(), t2.initialUser, this.Tt);
  }
  Tc(t2) {
    return new xo(ko.qs, this.Tt);
  }
  Ic(t2) {
    return new wu();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
};
var la2 = class extends ha2 {
  constructor(t2, e, n) {
    super(), this.Pc = t2, this.cacheSizeBytes = e, this.forceOwnership = n, this.synchronizeTabs = false;
  }
  async initialize(t2) {
    await super.initialize(t2), await this.Pc.initialize(this, t2), // Enqueue writes from a previous session
    await ca2(this.Pc.syncEngine), await Ju(this.Pc.remoteStore), // NOTE: This will immediately call the listener, so we make sure to
    // set it after localStore / remoteStore are started.
    await this.persistence.di(() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve()));
  }
  Ec(t2) {
    return Qo(this.persistence, new Ko(), t2.initialUser, this.Tt);
  }
  Ac(t2, e) {
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new co(n, t2.asyncQueue, e);
  }
  Rc(t2, e) {
    const n = new kt(e, this.persistence);
    return new Nt(t2.asyncQueue, n);
  }
  Tc(t2) {
    const e = qo(t2.databaseInfo.databaseId, t2.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? zr.withCacheSize(this.cacheSizeBytes) : zr.DEFAULT;
    return new Fo(this.synchronizeTabs, e, t2.clientId, n, t2.asyncQueue, Ru(), Pu(), this.Tt, this.sharedClientState, !!this.forceOwnership);
  }
  Ic(t2) {
    return new wu();
  }
};
var fa2 = class extends la2 {
  constructor(t2, e) {
    super(
      t2,
      e,
      /* forceOwnership= */
      false
    ), this.Pc = t2, this.cacheSizeBytes = e, this.synchronizeTabs = true;
  }
  async initialize(t2) {
    await super.initialize(t2);
    const e = this.Pc.syncEngine;
    this.sharedClientState instanceof _u && (this.sharedClientState.syncEngine = {
      Br: ta2.bind(null, e),
      Lr: ra2.bind(null, e),
      qr: oa2.bind(null, e),
      Si: ia2.bind(null, e),
      Fr: Xc2.bind(null, e)
    }, await this.sharedClientState.start()), // NOTE: This will immediately call the listener, so we make sure to
    // set it after localStore / remoteStore are started.
    await this.persistence.di(async (t3) => {
      await ea2(this.Pc.syncEngine, t3), this.gcScheduler && (t3 && !this.gcScheduler.started ? this.gcScheduler.start() : t3 || this.gcScheduler.stop()), this.indexBackfillerScheduler && (t3 && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : t3 || this.indexBackfillerScheduler.stop());
    });
  }
  Ic(t2) {
    const e = Ru();
    if (!_u.C(e))
      throw new L2(B2.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    const n = qo(t2.databaseInfo.databaseId, t2.databaseInfo.persistenceKey);
    return new _u(e, t2.asyncQueue, n, t2.clientId, t2.initialUser);
  }
};
var da2 = class {
  async initialize(t2, e) {
    this.localStore || (this.localStore = t2.localStore, this.sharedClientState = t2.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(
      e,
      /* startAsPrimary=*/
      !t2.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (t3) => Oc2(
      this.syncEngine,
      t3,
      1
      /* OnlineStateSource.SharedClientState */
    ), this.remoteStore.remoteSyncer.handleCredentialChange = Jc2.bind(null, this.syncEngine), await oc2(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t2) {
    return new wc2();
  }
  createDatastore(t2) {
    const e = vu(t2.databaseInfo.databaseId), n = (s = t2.databaseInfo, new Au(s));
    var s;
    return function(t3, e2, n2, s2) {
      return new Cu(t3, e2, n2, s2);
    }(t2.authCredentials, t2.appCheckCredentials, n, e);
  }
  createRemoteStore(t2) {
    return e = this.localStore, n = this.datastore, s = t2.asyncQueue, i = (t3) => Oc2(
      this.syncEngine,
      t3,
      0
      /* OnlineStateSource.RemoteStore */
    ), r = gu.C() ? new gu() : new mu(), new ku(e, n, s, i, r);
    var e, n, s, i, r;
  }
  createSyncEngine(t2, e) {
    return function(t3, e2, n, s, i, r, o) {
      const u = new Cc2(t3, e2, n, s, i, r);
      return o && (u.wc = true), u;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t2.initialUser, t2.maxConcurrentLimboResolutions, e);
  }
  terminate() {
    return async function(t2) {
      const e = F(t2);
      C2("RemoteStore", "RemoteStore shutting down."), e.mu.add(
        5
        /* OfflineCause.Shutdown */
      ), await Mu(e), e.yu.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
      // triggering spurious listener events with cached data, etc.
      e.pu.set(
        "Unknown"
        /* OnlineState.Unknown */
      );
    }(this.remoteStore);
  }
};
function _a(t2, e = 10240) {
  let n = 0;
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async read() {
      if (n < t2.byteLength) {
        const s = {
          value: t2.slice(n, n + e),
          done: false
        };
        return n += e, s;
      }
      return {
        done: true
      };
    },
    async cancel() {
    },
    releaseLock() {
    },
    closed: Promise.resolve()
  };
}
var wa2 = class {
  constructor(t2) {
    this.observer = t2, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = false;
  }
  next(t2) {
    this.observer.next && this.vc(this.observer.next, t2);
  }
  error(t2) {
    this.observer.error ? this.vc(this.observer.error, t2) : x2("Uncaught Error in snapshot listener:", t2.toString());
  }
  bc() {
    this.muted = true;
  }
  vc(t2, e) {
    this.muted || setTimeout(() => {
      this.muted || t2(e);
    }, 0);
  }
};
var ma2 = class {
  constructor(t2, e) {
    this.Vc = t2, this.Tt = e, /** Cached bundle metadata. */
    this.metadata = new q2(), /**
     * Internal buffer to hold bundle content, accumulating incomplete element
     * content.
     */
    this.buffer = new Uint8Array(), this.Sc = new TextDecoder("utf-8"), // Read the metadata (which is the first element).
    this.Dc().then((t3) => {
      t3 && t3.Ou() ? this.metadata.resolve(t3.Mu.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null == t3 ? void 0 : t3.Mu)}`));
    }, (t3) => this.metadata.reject(t3));
  }
  close() {
    return this.Vc.cancel();
  }
  async getMetadata() {
    return this.metadata.promise;
  }
  async yc() {
    return await this.getMetadata(), this.Dc();
  }
  /**
   * Reads from the head of internal buffer, and pulling more data from
   * underlying stream if a complete element cannot be found, until an
   * element(including the prefixed length and the JSON string) is found.
   *
   * Once a complete element is read, it is dropped from internal buffer.
   *
   * Returns either the bundled element, or null if we have reached the end of
   * the stream.
   */
  async Dc() {
    const t2 = await this.Cc();
    if (null === t2)
      return null;
    const e = this.Sc.decode(t2), n = Number(e);
    isNaN(n) && this.xc(`length string (${e}) is not valid number`);
    const s = await this.Nc(n);
    return new Ec2(JSON.parse(s), t2.length + n);
  }
  /** First index of '{' from the underlying buffer. */
  kc() {
    return this.buffer.findIndex((t2) => t2 === "{".charCodeAt(0));
  }
  /**
   * Reads from the beginning of the internal buffer, until the first '{', and
   * return the content.
   *
   * If reached end of the stream, returns a null.
   */
  async Cc() {
    for (; this.kc() < 0; ) {
      if (await this.$c())
        break;
    }
    if (0 === this.buffer.length)
      return null;
    const t2 = this.kc();
    t2 < 0 && this.xc("Reached the end of bundle when a length string is expected.");
    const e = this.buffer.slice(0, t2);
    return this.buffer = this.buffer.slice(t2), e;
  }
  /**
   * Reads from a specified position from the internal buffer, for a specified
   * number of bytes, pulling more data from the underlying stream if needed.
   *
   * Returns a string decoded from the read bytes.
   */
  async Nc(t2) {
    for (; this.buffer.length < t2; ) {
      await this.$c() && this.xc("Reached the end of bundle when more is expected.");
    }
    const e = this.Sc.decode(this.buffer.slice(0, t2));
    return this.buffer = this.buffer.slice(t2), e;
  }
  xc(t2) {
    throw this.Vc.cancel(), new Error(`Invalid bundle format: ${t2}`);
  }
  /**
   * Pulls more data from underlying stream to internal buffer.
   * Returns a boolean indicating whether the stream is finished.
   */
  async $c() {
    const t2 = await this.Vc.read();
    if (!t2.done) {
      const e = new Uint8Array(this.buffer.length + t2.value.length);
      e.set(this.buffer), e.set(t2.value, this.buffer.length), this.buffer = e;
    }
    return t2.done;
  }
};
var ga = class {
  constructor(t2) {
    this.datastore = t2, // The version of each document that was read during this transaction.
    this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, /**
     * A deferred usage error that occurred previously in this transaction that
     * will cause the transaction to fail once it actually commits.
     */
    this.lastWriteError = null, /**
     * Set of documents that have been written in the transaction.
     *
     * When there's more than one write to the same key in a transaction, any
     * writes after the first are handled differently.
     */
    this.writtenDocs = /* @__PURE__ */ new Set();
  }
  async lookup(t2) {
    if (this.ensureCommitNotCalled(), this.mutations.length > 0)
      throw new L2(B2.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
    const e = await async function(t3, e2) {
      const n = F(t3), s = Zs(n.Tt) + "/documents", i = {
        documents: e2.map((t4) => Ws(n.Tt, t4))
      }, r = await n.mo("BatchGetDocuments", s, i, e2.length), o = /* @__PURE__ */ new Map();
      r.forEach((t4) => {
        const e3 = ni(n.Tt, t4);
        o.set(e3.key.toString(), e3);
      });
      const u = [];
      return e2.forEach((t4) => {
        const e3 = o.get(t4.toString());
        M2(!!e3), u.push(e3);
      }), u;
    }(this.datastore, t2);
    return e.forEach((t3) => this.recordVersion(t3)), e;
  }
  set(t2, e) {
    this.write(e.toMutation(t2, this.precondition(t2))), this.writtenDocs.add(t2.toString());
  }
  update(t2, e) {
    try {
      this.write(e.toMutation(t2, this.preconditionForUpdate(t2)));
    } catch (t3) {
      this.lastWriteError = t3;
    }
    this.writtenDocs.add(t2.toString());
  }
  delete(t2) {
    this.write(new cs(t2, this.precondition(t2))), this.writtenDocs.add(t2.toString());
  }
  async commit() {
    if (this.ensureCommitNotCalled(), this.lastWriteError)
      throw this.lastWriteError;
    const t2 = this.readVersions;
    this.mutations.forEach((e) => {
      t2.delete(e.key.toString());
    }), // For each document that was read but not written to, we want to perform
    // a `verify` operation.
    t2.forEach((t3, e) => {
      const n = ct.fromPath(e);
      this.mutations.push(new as(n, this.precondition(n)));
    }), await async function(t3, e) {
      const n = F(t3), s = Zs(n.Tt) + "/documents", i = {
        writes: e.map((t4) => ii(n.Tt, t4))
      };
      await n.lo("Commit", s, i);
    }(this.datastore, this.mutations), this.committed = true;
  }
  recordVersion(t2) {
    let e;
    if (t2.isFoundDocument())
      e = t2.version;
    else {
      if (!t2.isNoDocument())
        throw $();
      e = st.min();
    }
    const n = this.readVersions.get(t2.key.toString());
    if (n) {
      if (!e.isEqual(n))
        throw new L2(B2.ABORTED, "Document version changed between two reads.");
    } else
      this.readVersions.set(t2.key.toString(), e);
  }
  /**
   * Returns the version of this document when it was read in this transaction,
   * as a precondition, or no precondition if it was not read.
   */
  precondition(t2) {
    const e = this.readVersions.get(t2.toString());
    return !this.writtenDocs.has(t2.toString()) && e ? e.isEqual(st.min()) ? Hn.exists(false) : Hn.updateTime(e) : Hn.none();
  }
  /**
   * Returns the precondition for a document if the operation is an update.
   */
  preconditionForUpdate(t2) {
    const e = this.readVersions.get(t2.toString());
    if (!this.writtenDocs.has(t2.toString()) && e) {
      if (e.isEqual(st.min()))
        throw new L2(B2.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return Hn.updateTime(e);
    }
    return Hn.exists(true);
  }
  write(t2) {
    this.ensureCommitNotCalled(), this.mutations.push(t2);
  }
  ensureCommitNotCalled() {
  }
};
var ya2 = class {
  constructor(t2, e, n, s, i) {
    this.asyncQueue = t2, this.datastore = e, this.options = n, this.updateFunction = s, this.deferred = i, this.Mc = n.maxAttempts, this.ko = new bu(
      this.asyncQueue,
      "transaction_retry"
      /* TimerId.TransactionRetry */
    );
  }
  /** Runs the transaction and sets the result on deferred. */
  run() {
    this.Mc -= 1, this.Oc();
  }
  Oc() {
    this.ko.vo(async () => {
      const t2 = new ga(this.datastore), e = this.Fc(t2);
      e && e.then((e2) => {
        this.asyncQueue.enqueueAndForget(() => t2.commit().then(() => {
          this.deferred.resolve(e2);
        }).catch((t3) => {
          this.Bc(t3);
        }));
      }).catch((t3) => {
        this.Bc(t3);
      });
    });
  }
  Fc(t2) {
    try {
      const e = this.updateFunction(t2);
      return !Gt(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t3) {
      return this.deferred.reject(t3), null;
    }
  }
  Bc(t2) {
    this.Mc > 0 && this.Lc(t2) ? (this.Mc -= 1, this.asyncQueue.enqueueAndForget(() => (this.Oc(), Promise.resolve()))) : this.deferred.reject(t2);
  }
  Lc(t2) {
    if ("FirebaseError" === t2.name) {
      const e = t2.code;
      return "aborted" === e || "failed-precondition" === e || "already-exists" === e || !ds(e);
    }
    return false;
  }
};
var pa2 = class {
  constructor(t2, e, n, s) {
    this.authCredentials = t2, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = s, this.user = v2.UNAUTHENTICATED, this.clientId = Z.R(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, async (t3) => {
      C2("FirestoreClient", "Received user=", t3.uid), await this.authCredentialListener(t3), this.user = t3;
    }), this.appCheckCredentials.start(n, (t3) => (C2("FirestoreClient", "Received new app check token=", t3), this.appCheckCredentialListener(t3, this.user)));
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t2) {
    this.authCredentialListener = t2;
  }
  setAppCheckTokenChangeListener(t2) {
    this.appCheckCredentialListener = t2;
  }
  /**
   * Checks that the client has not been terminated. Ensures that other methods on
   * this class cannot be called after the client is terminated.
   */
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new L2(B2.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t2 = new q2();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t2.resolve();
      } catch (e) {
        const n = hc2(e, "Failed to shutdown persistence");
        t2.reject(n);
      }
    }), t2.promise;
  }
};
async function Ia2(t2, e) {
  t2.asyncQueue.verifyOperationInProgress(), C2("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t2.getConfiguration();
  await e.initialize(n);
  let s = n.initialUser;
  t2.setCredentialChangeListener(async (t3) => {
    s.isEqual(t3) || (await jo(e.localStore, t3), s = t3);
  }), // When a user calls clearPersistence() in one client, all other clients
  // need to be terminated to allow the delete to succeed.
  e.persistence.setDatabaseDeletedListener(() => t2.terminate()), t2.offlineComponents = e;
}
async function Ta2(t2, e) {
  t2.asyncQueue.verifyOperationInProgress();
  const n = await Ea2(t2);
  C2("FirestoreClient", "Initializing OnlineComponentProvider");
  const s = await t2.getConfiguration();
  await e.initialize(n, s), // The CredentialChangeListener of the online component provider takes
  // precedence over the offline component provider.
  t2.setCredentialChangeListener((t3) => rc2(e.remoteStore, t3)), t2.setAppCheckTokenChangeListener((t3, n2) => rc2(e.remoteStore, n2)), t2.onlineComponents = e;
}
async function Ea2(t2) {
  return t2.offlineComponents || (C2("FirestoreClient", "Using default OfflineComponentProvider"), await Ia2(t2, new ha2())), t2.offlineComponents;
}
async function Aa2(t2) {
  return t2.onlineComponents || (C2("FirestoreClient", "Using default OnlineComponentProvider"), await Ta2(t2, new da2())), t2.onlineComponents;
}
function Ra2(t2) {
  return Ea2(t2).then((t3) => t3.persistence);
}
function Pa2(t2) {
  return Ea2(t2).then((t3) => t3.localStore);
}
function va2(t2) {
  return Aa2(t2).then((t3) => t3.remoteStore);
}
function ba2(t2) {
  return Aa2(t2).then((t3) => t3.syncEngine);
}
function Va2(t2) {
  return Aa2(t2).then((t3) => t3.datastore);
}
async function Sa2(t2) {
  const e = await Aa2(t2), n = e.eventManager;
  return n.onListen = xc2.bind(null, e.syncEngine), n.onUnlisten = kc2.bind(null, e.syncEngine), n;
}
function Da(t2) {
  return t2.asyncQueue.enqueue(async () => {
    const e = await Ra2(t2), n = await va2(t2);
    return e.setNetworkEnabled(true), function(t3) {
      const e2 = F(t3);
      return e2.mu.delete(
        0
        /* OfflineCause.UserDisabled */
      ), $u(e2);
    }(n);
  });
}
function Ca(t2) {
  return t2.asyncQueue.enqueue(async () => {
    const e = await Ra2(t2), n = await va2(t2);
    return e.setNetworkEnabled(false), async function(t3) {
      const e2 = F(t3);
      e2.mu.add(
        0
        /* OfflineCause.UserDisabled */
      ), await Mu(e2), // Set the OnlineState to Offline so get()s return from cache, etc.
      e2.pu.set(
        "Offline"
        /* OnlineState.Offline */
      );
    }(n);
  });
}
function xa2(t2, e) {
  const n = new q2();
  return t2.asyncQueue.enqueueAndForget(async () => async function(t3, e2, n2) {
    try {
      const s = await function(t4, e3) {
        const n3 = F(t4);
        return n3.persistence.runTransaction("read document", "readonly", (t5) => n3.localDocuments.getDocument(t5, e3));
      }(t3, e2);
      s.isFoundDocument() ? n2.resolve(s) : s.isNoDocument() ? n2.resolve(null) : n2.reject(new L2(B2.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
    } catch (t4) {
      const s = hc2(t4, `Failed to get document '${e2} from cache`);
      n2.reject(s);
    }
  }(await Pa2(t2), e, n)), n.promise;
}
function Na2(t2, e, n = {}) {
  const s = new q2();
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n2, s2, i) {
    const r = new wa2({
      next: (r2) => {
        e2.enqueueAndForget(() => gc2(t3, o));
        const u = r2.docs.has(n2);
        !u && r2.fromCache ? (
          // TODO(dimond): If we're online and the document doesn't
          // exist then we resolve with a doc.exists set to false. If
          // we're offline however, we reject the Promise in this
          // case. Two options: 1) Cache the negative response from
          // the server so we can deliver that even when you're
          // offline 2) Actually reject the Promise in the online case
          // if the document doesn't exist.
          i.reject(new L2(B2.UNAVAILABLE, "Failed to get document because the client is offline."))
        ) : u && r2.fromCache && s2 && "server" === s2.source ? i.reject(new L2(B2.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r2);
      },
      error: (t4) => i.reject(t4)
    }), o = new Tc2(wn(n2.path), r, {
      includeMetadataChanges: true,
      $u: true
    });
    return mc2(t3, o);
  }(await Sa2(t2), t2.asyncQueue, e, n, s)), s.promise;
}
function ka(t2, e) {
  const n = new q2();
  return t2.asyncQueue.enqueueAndForget(async () => async function(t3, e2, n2) {
    try {
      const s = await tu(
        t3,
        e2,
        /* usePreviousResults= */
        true
      ), i = new Vc2(e2, s.Yi), r = i.Hu(s.documents), o = i.applyChanges(
        r,
        /* updateLimboDocuments= */
        false
      );
      n2.resolve(o.snapshot);
    } catch (t4) {
      const s = hc2(t4, `Failed to execute query '${e2} against cache`);
      n2.reject(s);
    }
  }(await Pa2(t2), e, n)), n.promise;
}
function $a2(t2, e, n = {}) {
  const s = new q2();
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n2, s2, i) {
    const r = new wa2({
      next: (n3) => {
        e2.enqueueAndForget(() => gc2(t3, o)), n3.fromCache && "server" === s2.source ? i.reject(new L2(B2.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n3);
      },
      error: (t4) => i.reject(t4)
    }), o = new Tc2(n2, r, {
      includeMetadataChanges: true,
      $u: true
    });
    return mc2(t3, o);
  }(await Sa2(t2), t2.asyncQueue, e, n, s)), s.promise;
}
function Ma2(t2, e) {
  const n = new wa2(e);
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2) {
    F(t3).vu.add(e2), // Immediately fire an initial event, indicating all existing listeners
    // are in-sync.
    e2.next();
  }(await Sa2(t2), n)), () => {
    n.bc(), t2.asyncQueue.enqueueAndForget(async () => function(t3, e2) {
      F(t3).vu.delete(e2);
    }(await Sa2(t2), n));
  };
}
function Oa2(t2, e, n, s) {
  const i = function(t3, e2) {
    let n2;
    n2 = "string" == typeof t3 ? new TextEncoder().encode(t3) : t3;
    return function(t4, e3) {
      return new ma2(t4, e3);
    }(function(t4, e3) {
      if (t4 instanceof Uint8Array)
        return _a(t4, e3);
      if (t4 instanceof ArrayBuffer)
        return _a(new Uint8Array(t4), e3);
      if (t4 instanceof ReadableStream)
        return t4.getReader();
      throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
    }(n2), e2);
  }(n, vu(e));
  t2.asyncQueue.enqueueAndForget(async () => {
    aa2(await ba2(t2), i, s);
  });
}
function Fa(t2, e) {
  return t2.asyncQueue.enqueue(async () => function(t3, e2) {
    const n = F(t3);
    return n.persistence.runTransaction("Get named query", "readonly", (t4) => n.$s.getNamedQuery(t4, e2));
  }(await Pa2(t2), e));
}
var Ba2 = /* @__PURE__ */ new Map();
function La2(t2, e, n) {
  if (!n)
    throw new L2(B2.INVALID_ARGUMENT, `Function ${t2}() cannot be called with an empty ${e}.`);
}
function qa2(t2, e, n, s) {
  if (true === e && true === s)
    throw new L2(B2.INVALID_ARGUMENT, `${t2} and ${n} cannot be used together.`);
}
function Ua2(t2) {
  if (!ct.isDocumentKey(t2))
    throw new L2(B2.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t2} has ${t2.length}.`);
}
function Ka(t2) {
  if (ct.isDocumentKey(t2))
    throw new L2(B2.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t2} has ${t2.length}.`);
}
function Ga(t2) {
  if (void 0 === t2)
    return "undefined";
  if (null === t2)
    return "null";
  if ("string" == typeof t2)
    return t2.length > 20 && (t2 = `${t2.substring(0, 20)}...`), JSON.stringify(t2);
  if ("number" == typeof t2 || "boolean" == typeof t2)
    return "" + t2;
  if ("object" == typeof t2) {
    if (t2 instanceof Array)
      return "an array";
    {
      const e = (
        /** try to get the constructor name for an object. */
        function(t3) {
          if (t3.constructor)
            return t3.constructor.name;
          return null;
        }(t2)
      );
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return "function" == typeof t2 ? "a function" : $();
}
function Qa2(t2, e) {
  if ("_delegate" in t2 && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t2 = t2._delegate), !(t2 instanceof e)) {
    if (e.name === t2.constructor.name)
      throw new L2(B2.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = Ga(t2);
      throw new L2(B2.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t2;
}
function ja2(t2, e) {
  if (e <= 0)
    throw new L2(B2.INVALID_ARGUMENT, `Function ${t2}() requires a positive number, but it was: ${e}.`);
}
var za2 = class {
  constructor(t2) {
    var e;
    if (void 0 === t2.host) {
      if (void 0 !== t2.ssl)
        throw new L2(B2.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = t2.host, this.ssl = null === (e = t2.ssl) || void 0 === e || e;
    if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, void 0 === t2.cacheSizeBytes)
      this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t2.cacheSizeBytes && t2.cacheSizeBytes < 1048576)
        throw new L2(B2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, qa2("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
  }
  isEqual(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
  }
};
var Wa2 = class {
  /** @hideconstructor */
  constructor(t2, e, n, s) {
    this._authCredentials = t2, this._appCheckCredentials = e, this._databaseId = n, this._app = s, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new za2({}), this._settingsFrozen = false;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app)
      throw new L2(B2.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t2) {
    if (this._settingsFrozen)
      throw new L2(B2.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new za2(t2), void 0 !== t2.credentials && (this._authCredentials = function(t3) {
      if (!t3)
        return new K2();
      switch (t3.type) {
        case "gapi":
          const e = t3.client;
          return new z2(e, t3.sessionIndex || "0", t3.iamToken || null, t3.authTokenFactory || null);
        case "provider":
          return t3.client;
        default:
          throw new L2(B2.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t2.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function(t2) {
      const e = Ba2.get(t2);
      e && (C2("ComponentProvider", "Removing Datastore"), Ba2.delete(t2), e.terminate());
    }(this), Promise.resolve();
  }
};
function Ha(t2, e, n, s = {}) {
  var i;
  const r = (t2 = Qa2(t2, Wa2))._getSettings();
  if ("firestore.googleapis.com" !== r.host && r.host !== e && N2("Host has been set in both settings() and useEmulator(), emulator host will be used"), t2._setSettings(Object.assign(Object.assign({}, r), {
    host: `${e}:${n}`,
    ssl: false
  })), s.mockUserToken) {
    let e2, n2;
    if ("string" == typeof s.mockUserToken)
      e2 = s.mockUserToken, n2 = v2.MOCK_USER;
    else {
      e2 = createMockUserToken(s.mockUserToken, null === (i = t2._app) || void 0 === i ? void 0 : i.options.projectId);
      const r2 = s.mockUserToken.sub || s.mockUserToken.user_id;
      if (!r2)
        throw new L2(B2.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new v2(r2);
    }
    t2._authCredentials = new G2(new U2(e2, n2));
  }
}
var Ja2 = class {
  /** @hideconstructor */
  constructor(t2, e, n) {
    this.converter = e, this._key = n, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = t2;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new Za(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t2) {
    return new Ja2(this.firestore, t2, this._key);
  }
};
var Ya2 = class {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(t2, e, n) {
    this.converter = e, this._query = n, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = t2;
  }
  withConverter(t2) {
    return new Ya2(this.firestore, t2, this._query);
  }
};
var Za = class extends Ya2 {
  /** @hideconstructor */
  constructor(t2, e, n) {
    super(t2, e, wn(n)), this._path = n, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const t2 = this._path.popLast();
    return t2.isEmpty() ? null : new Ja2(
      this.firestore,
      /* converter= */
      null,
      new ct(t2)
    );
  }
  withConverter(t2) {
    return new Za(this.firestore, t2, this._path);
  }
};
function Xa2(t2, e, ...n) {
  if (t2 = getModularInstance(t2), La2("collection", "path", e), t2 instanceof Wa2) {
    const s = rt.fromString(e, ...n);
    return Ka(s), new Za(
      t2,
      /* converter= */
      null,
      s
    );
  }
  {
    if (!(t2 instanceof Ja2 || t2 instanceof Za))
      throw new L2(B2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(rt.fromString(e, ...n));
    return Ka(s), new Za(
      t2.firestore,
      /* converter= */
      null,
      s
    );
  }
}
function th(t2, e) {
  if (t2 = Qa2(t2, Wa2), La2("collectionGroup", "collection id", e), e.indexOf("/") >= 0)
    throw new L2(B2.INVALID_ARGUMENT, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
  return new Ya2(
    t2,
    /* converter= */
    null,
    function(t3) {
      return new dn(rt.emptyPath(), t3);
    }(e)
  );
}
function eh(t2, e, ...n) {
  if (t2 = getModularInstance(t2), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (e = Z.R()), La2("doc", "path", e), t2 instanceof Wa2) {
    const s = rt.fromString(e, ...n);
    return Ua2(s), new Ja2(
      t2,
      /* converter= */
      null,
      new ct(s)
    );
  }
  {
    if (!(t2 instanceof Ja2 || t2 instanceof Za))
      throw new L2(B2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(rt.fromString(e, ...n));
    return Ua2(s), new Ja2(t2.firestore, t2 instanceof Za ? t2.converter : null, new ct(s));
  }
}
function nh(t2, e) {
  return t2 = getModularInstance(t2), e = getModularInstance(e), (t2 instanceof Ja2 || t2 instanceof Za) && (e instanceof Ja2 || e instanceof Za) && (t2.firestore === e.firestore && t2.path === e.path && t2.converter === e.converter);
}
function sh(t2, e) {
  return t2 = getModularInstance(t2), e = getModularInstance(e), t2 instanceof Ya2 && e instanceof Ya2 && (t2.firestore === e.firestore && Rn(t2._query, e._query) && t2.converter === e.converter);
}
var ih = class {
  constructor() {
    this.qc = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.Uc = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.Kc = false, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.Gc = [], // visible for testing
    this.Qc = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.jc = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.zc = false, // List of TimerIds to fast-forward delays for.
    this.Wc = [], // Backoff timer used to schedule retries for retryable operations
    this.ko = new bu(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Hc = () => {
      const t3 = Pu();
      t3 && C2("AsyncQueue", "Visibility state changed to " + t3.visibilityState), this.ko.Vo();
    };
    const t2 = Pu();
    t2 && "function" == typeof t2.addEventListener && t2.addEventListener("visibilitychange", this.Hc);
  }
  get isShuttingDown() {
    return this.Kc;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(t2) {
    this.enqueue(t2);
  }
  enqueueAndForgetEvenWhileRestricted(t2) {
    this.Jc(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.Yc(t2);
  }
  enterRestrictedMode(t2) {
    if (!this.Kc) {
      this.Kc = true, this.zc = t2 || false;
      const e = Pu();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Hc);
    }
  }
  enqueue(t2) {
    if (this.Jc(), this.Kc)
      return new Promise(() => {
      });
    const e = new q2();
    return this.Yc(() => this.Kc && this.zc ? Promise.resolve() : (t2().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t2) {
    this.enqueueAndForget(() => (this.Uc.push(t2), this.Zc()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async Zc() {
    if (0 !== this.Uc.length) {
      try {
        await this.Uc[0](), this.Uc.shift(), this.ko.reset();
      } catch (t2) {
        if (!Vt(t2))
          throw t2;
        C2("AsyncQueue", "Operation failed with retryable error: " + t2);
      }
      this.Uc.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.ko.vo(() => this.Zc());
    }
  }
  Yc(t2) {
    const e = this.qc.then(() => (this.jc = true, t2().catch((t3) => {
      this.Qc = t3, this.jc = false;
      const e2 = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function(t4) {
          let e3 = t4.message || "";
          t4.stack && (e3 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack);
          return e3;
        }(t3)
      );
      throw x2("INTERNAL UNHANDLED ERROR: ", e2), t3;
    }).then((t3) => (this.jc = false, t3))));
    return this.qc = e, e;
  }
  enqueueAfterDelay(t2, e, n) {
    this.Jc(), // Fast-forward delays for timerIds that have been overriden.
    this.Wc.indexOf(t2) > -1 && (e = 0);
    const s = ac2.createAndSchedule(this, t2, e, n, (t3) => this.Xc(t3));
    return this.Gc.push(s), s;
  }
  Jc() {
    this.Qc && $();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async ta() {
    let t2;
    do {
      t2 = this.qc, await t2;
    } while (t2 !== this.qc);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  ea(t2) {
    for (const e of this.Gc)
      if (e.timerId === t2)
        return true;
    return false;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  na(t2) {
    return this.ta().then(() => {
      this.Gc.sort((t3, e) => t3.targetTimeMs - e.targetTimeMs);
      for (const e of this.Gc)
        if (e.skipDelay(), "all" !== t2 && e.timerId === t2)
          break;
      return this.ta();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  sa(t2) {
    this.Wc.push(t2);
  }
  /** Called once a DelayedOperation is run or canceled. */
  Xc(t2) {
    const e = this.Gc.indexOf(t2);
    this.Gc.splice(e, 1);
  }
};
function rh(t2) {
  return function(t3, e) {
    if ("object" != typeof t3 || null === t3)
      return false;
    const n = t3;
    for (const t4 of e)
      if (t4 in n && "function" == typeof n[t4])
        return true;
    return false;
  }(t2, ["next", "error", "complete"]);
}
var oh = class {
  constructor() {
    this._progressObserver = {}, this._taskCompletionResolver = new q2(), this._lastProgress = {
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    };
  }
  /**
   * Registers functions to listen to bundle loading progress events.
   * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
   *   each time a Firestore document is loaded from the bundle.
   * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
   *   error, and there should be no more updates after this.
   * @param complete - Called when the loading task is complete.
   */
  onProgress(t2, e, n) {
    this._progressObserver = {
      next: t2,
      error: e,
      complete: n
    };
  }
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
   *
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  catch(t2) {
    return this._taskCompletionResolver.promise.catch(t2);
  }
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
   *
   * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
   *   The update will always have its `taskState` set to `"Success"`.
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  then(t2, e) {
    return this._taskCompletionResolver.promise.then(t2, e);
  }
  /**
   * Notifies all observers that bundle loading has completed, with a provided
   * `LoadBundleTaskProgress` object.
   *
   * @private
   */
  _completeWith(t2) {
    this._updateProgress(t2), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t2);
  }
  /**
   * Notifies all observers that bundle loading has failed, with a provided
   * `Error` as the reason.
   *
   * @private
   */
  _failWith(t2) {
    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t2), this._taskCompletionResolver.reject(t2);
  }
  /**
   * Notifies a progress update of loading a bundle.
   * @param progress - The new progress.
   *
   * @private
   */
  _updateProgress(t2) {
    this._lastProgress = t2, this._progressObserver.next && this._progressObserver.next(t2);
  }
};
var uh = -1;
var ch = class extends Wa2 {
  /** @hideconstructor */
  constructor(t2, e, n, s) {
    super(t2, e, n, s), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = new ih(), this._persistenceKey = (null == s ? void 0 : s.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    fh(this), this._firestoreClient.terminate();
  }
};
function ah(t2, e, n) {
  n || (n = "(default)");
  const s = _getProvider(t2, "firestore");
  if (s.isInitialized(n)) {
    const t3 = s.getImmediate({
      identifier: n
    }), i = s.getOptions(n);
    if (deepEqual(i, e))
      return t3;
    throw new L2(B2.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
  }
  if (void 0 !== e.cacheSizeBytes && -1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
    throw new L2(B2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
  return s.initialize({
    options: e,
    instanceIdentifier: n
  });
}
function hh(e, n) {
  const s = "object" == typeof e ? e : getApp(), i = "string" == typeof e ? e : n || "(default)", r = _getProvider(s, "firestore").getImmediate({
    identifier: i
  });
  if (!r._initialized) {
    const t2 = getDefaultEmulatorHostnameAndPort("firestore");
    t2 && Ha(r, ...t2);
  }
  return r;
}
function lh(t2) {
  return t2._firestoreClient || fh(t2), t2._firestoreClient.verifyNotTerminated(), t2._firestoreClient;
}
function fh(t2) {
  var e;
  const n = t2._freezeSettings(), s = function(t3, e2, n2, s2) {
    return new Bt(t3, e2, n2, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, s2.useFetchStreams);
  }(t2._databaseId, (null === (e = t2._app) || void 0 === e ? void 0 : e.options.appId) || "", t2._persistenceKey, n);
  t2._firestoreClient = new pa2(t2._authCredentials, t2._appCheckCredentials, t2._queue, s);
}
function dh(t2, e) {
  Ah(t2 = Qa2(t2, ch));
  const n = lh(t2), s = t2._freezeSettings(), i = new da2();
  return wh(n, i, new la2(i, s.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
}
function _h(t2) {
  Ah(t2 = Qa2(t2, ch));
  const e = lh(t2), n = t2._freezeSettings(), s = new da2();
  return wh(e, s, new fa2(s, n.cacheSizeBytes));
}
function wh(t2, e, n) {
  const s = new q2();
  return t2.asyncQueue.enqueue(async () => {
    try {
      await Ia2(t2, n), await Ta2(t2, e), s.resolve();
    } catch (t3) {
      const e2 = t3;
      if (!/**
      * Decides whether the provided error allows us to gracefully disable
      * persistence (as opposed to crashing the client).
      */
      function(t4) {
        if ("FirebaseError" === t4.name)
          return t4.code === B2.FAILED_PRECONDITION || t4.code === B2.UNIMPLEMENTED;
        if ("undefined" != typeof DOMException && t4 instanceof DOMException)
          return 22 === t4.code || 20 === t4.code || // Firefox Private Browsing mode disables IndexedDb and returns
          // INVALID_STATE for any usage.
          11 === t4.code;
        return true;
      }(e2))
        throw e2;
      N2("Error enabling offline persistence. Falling back to persistence disabled: " + e2), s.reject(e2);
    }
  }).then(() => s.promise);
}
function mh(t2) {
  if (t2._initialized && !t2._terminated)
    throw new L2(B2.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
  const e = new q2();
  return t2._queue.enqueueAndForgetEvenWhileRestricted(async () => {
    try {
      await async function(t3) {
        if (!Pt.C())
          return Promise.resolve();
        const e2 = t3 + "main";
        await Pt.delete(e2);
      }(qo(t2._databaseId, t2._persistenceKey)), e.resolve();
    } catch (t3) {
      e.reject(t3);
    }
  }), e.promise;
}
function gh(t2) {
  return function(t3) {
    const e = new q2();
    return t3.asyncQueue.enqueueAndForget(async () => qc2(await ba2(t3), e)), e.promise;
  }(lh(t2 = Qa2(t2, ch)));
}
function yh(t2) {
  return Da(lh(t2 = Qa2(t2, ch)));
}
function ph(t2) {
  return Ca(lh(t2 = Qa2(t2, ch)));
}
function Ih(t2) {
  return _removeServiceInstance(t2.app, "firestore", t2._databaseId.database), t2._delete();
}
function Th(t2, e) {
  const n = lh(t2 = Qa2(t2, ch)), s = new oh();
  return Oa2(n, t2._databaseId, e, s), s;
}
function Eh(t2, e) {
  return Fa(lh(t2 = Qa2(t2, ch)), e).then((e2) => e2 ? new Ya2(t2, null, e2.query) : null);
}
function Ah(t2) {
  if (t2._initialized || t2._terminated)
    throw new L2(B2.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
var Rh = class {
  /**
   * Create a new AggregateField<T>
   * @param _aggregateType Specifies the type of aggregation operation to perform.
   * @param _internalFieldPath Optionally specifies the field that is aggregated.
   * @internal
   */
  constructor(t2 = "count", e) {
    this._aggregateType = t2, this._internalFieldPath = e, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateField";
  }
};
var Ph = class {
  /** @hideconstructor */
  constructor(t2, e, n) {
    this._userDataWriter = e, this._data = n, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateQuerySnapshot", this.query = t2;
  }
  /**
   * Returns the results of the aggregations performed over the underlying
   * query.
   *
   * The keys of the returned object will be the same as those of the
   * `AggregateSpec` object specified to the aggregation method, and the values
   * will be the corresponding aggregation result.
   *
   * @returns The results of the aggregations performed over the underlying
   * query.
   */
  data() {
    return this._userDataWriter.convertValue(this._data.value);
  }
};
var vh = class {
  /** @hideconstructor */
  constructor(t2) {
    this._byteString = t2;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(t2) {
    try {
      return new vh(Ht.fromBase64String(t2));
    } catch (t3) {
      throw new L2(B2.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t3);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(t2) {
    return new vh(Ht.fromUint8Array(t2));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(t2) {
    return this._byteString.isEqual(t2._byteString);
  }
};
var bh = class {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...t2) {
    for (let e = 0; e < t2.length; ++e)
      if (0 === t2[e].length)
        throw new L2(B2.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new ut(t2);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(t2) {
    return this._internalPath.isEqual(t2._internalPath);
  }
};
function Vh() {
  return new bh("__name__");
}
var Sh = class {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(t2) {
    this._methodName = t2;
  }
};
var Dh = class {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(t2, e) {
    if (!isFinite(t2) || t2 < -90 || t2 > 90)
      throw new L2(B2.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new L2(B2.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t2, this._long = e;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(t2) {
    return this._lat === t2._lat && this._long === t2._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(t2) {
    return X2(this._lat, t2._lat) || X2(this._long, t2._long);
  }
};
var Ch = /^__.*__$/;
var xh = class {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return null !== this.fieldMask ? new is(t2, this.data, this.fieldMask, e, this.fieldTransforms) : new ss(t2, this.data, e, this.fieldTransforms);
  }
};
var Nh = class {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return new is(t2, this.data, this.fieldMask, e, this.fieldTransforms);
  }
};
function kh(t2) {
  switch (t2) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw $();
  }
}
var $h = class {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(t2, e, n, s, i, r) {
    this.settings = t2, this.databaseId = e, this.Tt = n, this.ignoreUndefinedProperties = s, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.ia(), this.fieldTransforms = i || [], this.fieldMask = r || [];
  }
  get path() {
    return this.settings.path;
  }
  get ra() {
    return this.settings.ra;
  }
  /** Returns a new context with the specified settings overwritten. */
  oa(t2) {
    return new $h(Object.assign(Object.assign({}, this.settings), t2), this.databaseId, this.Tt, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  ua(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.oa({
      path: n,
      ca: false
    });
    return s.aa(t2), s;
  }
  ha(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.oa({
      path: n,
      ca: false
    });
    return s.ia(), s;
  }
  la(t2) {
    return this.oa({
      path: void 0,
      ca: true
    });
  }
  fa(t2) {
    return el(t2, this.settings.methodName, this.settings.da || false, this.path, this.settings._a);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(t2) {
    return void 0 !== this.fieldMask.find((e) => t2.isPrefixOf(e)) || void 0 !== this.fieldTransforms.find((e) => t2.isPrefixOf(e.field));
  }
  ia() {
    if (this.path)
      for (let t2 = 0; t2 < this.path.length; t2++)
        this.aa(this.path.get(t2));
  }
  aa(t2) {
    if (0 === t2.length)
      throw this.fa("Document fields must not be empty");
    if (kh(this.ra) && Ch.test(t2))
      throw this.fa('Document fields cannot begin and end with "__"');
  }
};
var Mh = class {
  constructor(t2, e, n) {
    this.databaseId = t2, this.ignoreUndefinedProperties = e, this.Tt = n || vu(t2);
  }
  /** Creates a new top-level parse context. */
  wa(t2, e, n, s = false) {
    return new $h({
      ra: t2,
      methodName: e,
      _a: n,
      path: ut.emptyPath(),
      ca: false,
      da: s
    }, this.databaseId, this.Tt, this.ignoreUndefinedProperties);
  }
};
function Oh(t2) {
  const e = t2._freezeSettings(), n = vu(t2._databaseId);
  return new Mh(t2._databaseId, !!e.ignoreUndefinedProperties, n);
}
function Fh(t2, e, n, s, i, r = {}) {
  const o = t2.wa(r.merge || r.mergeFields ? 2 : 0, e, n, i);
  Yh("Data must be an object, but it was:", o, s);
  const u = Hh(s, o);
  let c, a;
  if (r.merge)
    c = new tn(o.fieldMask), a = o.fieldTransforms;
  else if (r.mergeFields) {
    const t3 = [];
    for (const s2 of r.mergeFields) {
      const i2 = Zh(e, s2, n);
      if (!o.contains(i2))
        throw new L2(B2.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      nl(t3, i2) || t3.push(i2);
    }
    c = new tn(t3), a = o.fieldTransforms.filter((t4) => c.covers(t4.field));
  } else
    c = null, a = o.fieldTransforms;
  return new xh(new en(u), c, a);
}
var Bh = class extends Sh {
  _toFieldTransform(t2) {
    if (2 !== t2.ra)
      throw 1 === t2.ra ? t2.fa(`${this._methodName}() can only appear at the top level of your update data`) : t2.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t2.fieldMask.push(t2.path), null;
  }
  isEqual(t2) {
    return t2 instanceof Bh;
  }
};
function Lh(t2, e, n) {
  return new $h({
    ra: 3,
    _a: e.settings._a,
    methodName: t2._methodName,
    ca: n
  }, e.databaseId, e.Tt, e.ignoreUndefinedProperties);
}
var qh = class extends Sh {
  _toFieldTransform(t2) {
    return new jn(t2.path, new Fn());
  }
  isEqual(t2) {
    return t2 instanceof qh;
  }
};
var Uh = class extends Sh {
  constructor(t2, e) {
    super(t2), this.ma = e;
  }
  _toFieldTransform(t2) {
    const e = Lh(
      this,
      t2,
      /*array=*/
      true
    ), n = this.ma.map((t3) => Wh(t3, e)), s = new Bn(n);
    return new jn(t2.path, s);
  }
  isEqual(t2) {
    return this === t2;
  }
};
var Kh = class extends Sh {
  constructor(t2, e) {
    super(t2), this.ma = e;
  }
  _toFieldTransform(t2) {
    const e = Lh(
      this,
      t2,
      /*array=*/
      true
    ), n = this.ma.map((t3) => Wh(t3, e)), s = new qn(n);
    return new jn(t2.path, s);
  }
  isEqual(t2) {
    return this === t2;
  }
};
var Gh = class extends Sh {
  constructor(t2, e) {
    super(t2), this.ga = e;
  }
  _toFieldTransform(t2) {
    const e = new Kn(t2.Tt, Nn(t2.Tt, this.ga));
    return new jn(t2.path, e);
  }
  isEqual(t2) {
    return this === t2;
  }
};
function Qh(t2, e, n, s) {
  const i = t2.wa(1, e, n);
  Yh("Data must be an object, but it was:", i, s);
  const r = [], o = en.empty();
  Ut(s, (t3, s2) => {
    const u2 = tl(e, t3, n);
    s2 = getModularInstance(s2);
    const c = i.ha(u2);
    if (s2 instanceof Bh)
      r.push(u2);
    else {
      const t4 = Wh(s2, c);
      null != t4 && (r.push(u2), o.set(u2, t4));
    }
  });
  const u = new tn(r);
  return new Nh(o, u, i.fieldTransforms);
}
function jh(t2, e, n, s, i, r) {
  const o = t2.wa(1, e, n), u = [Zh(e, s, n)], c = [i];
  if (r.length % 2 != 0)
    throw new L2(B2.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let t3 = 0; t3 < r.length; t3 += 2)
    u.push(Zh(e, r[t3])), c.push(r[t3 + 1]);
  const a = [], h = en.empty();
  for (let t3 = u.length - 1; t3 >= 0; --t3)
    if (!nl(a, u[t3])) {
      const e2 = u[t3];
      let n2 = c[t3];
      n2 = getModularInstance(n2);
      const s2 = o.ha(e2);
      if (n2 instanceof Bh)
        a.push(e2);
      else {
        const t4 = Wh(n2, s2);
        null != t4 && (a.push(e2), h.set(e2, t4));
      }
    }
  const l2 = new tn(a);
  return new Nh(h, l2, o.fieldTransforms);
}
function zh(t2, e, n, s = false) {
  return Wh(n, t2.wa(s ? 4 : 3, e));
}
function Wh(t2, e) {
  if (Jh(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t2 = getModularInstance(t2)
  ))
    return Yh("Unsupported field value:", e, t2), Hh(t2, e);
  if (t2 instanceof Sh)
    return function(t3, e2) {
      if (!kh(e2.ra))
        throw e2.fa(`${t3._methodName}() can only be used with update() and set()`);
      if (!e2.path)
        throw e2.fa(`${t3._methodName}() is not currently supported inside arrays`);
      const n = t3._toFieldTransform(e2);
      n && e2.fieldTransforms.push(n);
    }(t2, e), null;
  if (void 0 === t2 && e.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t2 instanceof Array
  ) {
    if (e.settings.ca && 4 !== e.ra)
      throw e.fa("Nested arrays are not supported");
    return function(t3, e2) {
      const n = [];
      let s = 0;
      for (const i of t3) {
        let t4 = Wh(i, e2.la(s));
        null == t4 && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (t4 = {
          nullValue: "NULL_VALUE"
        }), n.push(t4), s++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    }(t2, e);
  }
  return function(t3, e2) {
    if (null === (t3 = getModularInstance(t3)))
      return {
        nullValue: "NULL_VALUE"
      };
    if ("number" == typeof t3)
      return Nn(e2.Tt, t3);
    if ("boolean" == typeof t3)
      return {
        booleanValue: t3
      };
    if ("string" == typeof t3)
      return {
        stringValue: t3
      };
    if (t3 instanceof Date) {
      const n = nt.fromDate(t3);
      return {
        timestampValue: Us(e2.Tt, n)
      };
    }
    if (t3 instanceof nt) {
      const n = new nt(t3.seconds, 1e3 * Math.floor(t3.nanoseconds / 1e3));
      return {
        timestampValue: Us(e2.Tt, n)
      };
    }
    if (t3 instanceof Dh)
      return {
        geoPointValue: {
          latitude: t3.latitude,
          longitude: t3.longitude
        }
      };
    if (t3 instanceof vh)
      return {
        bytesValue: Ks(e2.Tt, t3._byteString)
      };
    if (t3 instanceof Ja2) {
      const n = e2.databaseId, s = t3.firestore._databaseId;
      if (!s.isEqual(n))
        throw e2.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
      return {
        referenceValue: js(t3.firestore._databaseId || e2.databaseId, t3._key.path)
      };
    }
    throw e2.fa(`Unsupported field value: ${Ga(t3)}`);
  }(t2, e);
}
function Hh(t2, e) {
  const n = {};
  return Kt(t2) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path)
  ) : Ut(t2, (t3, s) => {
    const i = Wh(s, e.ua(t3));
    null != i && (n[t3] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function Jh(t2) {
  return !("object" != typeof t2 || null === t2 || t2 instanceof Array || t2 instanceof Date || t2 instanceof nt || t2 instanceof Dh || t2 instanceof vh || t2 instanceof Ja2 || t2 instanceof Sh);
}
function Yh(t2, e, n) {
  if (!Jh(n) || !function(t3) {
    return "object" == typeof t3 && null !== t3 && (Object.getPrototypeOf(t3) === Object.prototype || null === Object.getPrototypeOf(t3));
  }(n)) {
    const s = Ga(n);
    throw "an object" === s ? e.fa(t2 + " a custom object") : e.fa(t2 + " " + s);
  }
}
function Zh(t2, e, n) {
  if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    (e = getModularInstance(e)) instanceof bh
  )
    return e._internalPath;
  if ("string" == typeof e)
    return tl(t2, e);
  throw el(
    "Field path arguments must be of type string or ",
    t2,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n
  );
}
var Xh = new RegExp("[~\\*/\\[\\]]");
function tl(t2, e, n) {
  if (e.search(Xh) >= 0)
    throw el(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t2,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n
    );
  try {
    return new bh(...e.split("."))._internalPath;
  } catch (s) {
    throw el(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t2,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n
    );
  }
}
function el(t2, e, n, s, i) {
  const r = s && !s.isEmpty(), o = void 0 !== i;
  let u = `Function ${e}() called with invalid data`;
  n && (u += " (via `toFirestore()`)"), u += ". ";
  let c = "";
  return (r || o) && (c += " (found", r && (c += ` in field ${s}`), o && (c += ` in document ${i}`), c += ")"), new L2(B2.INVALID_ARGUMENT, u + t2 + c);
}
function nl(t2, e) {
  return t2.some((t3) => t3.isEqual(e));
}
var sl = class {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(t2, e, n, s, i) {
    this._firestore = t2, this._userDataWriter = e, this._key = n, this._document = s, this._converter = i;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new Ja2(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return null !== this._document;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const t2 = new il(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t2) {
    if (this._document) {
      const e = this._document.data.field(rl("DocumentSnapshot.get", t2));
      if (null !== e)
        return this._userDataWriter.convertValue(e);
    }
  }
};
var il = class extends sl {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
};
function rl(t2, e) {
  return "string" == typeof e ? tl(t2, e) : e instanceof bh ? e._internalPath : e._delegate._internalPath;
}
function ol(t2) {
  if ("L" === t2.limitType && 0 === t2.explicitOrderBy.length)
    throw new L2(B2.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var ul = class {
};
var cl = class extends ul {
};
function al(t2, e, ...n) {
  let s = [];
  e instanceof ul && s.push(e), s = s.concat(n), function(t3) {
    const e2 = t3.filter((t4) => t4 instanceof fl).length, n2 = t3.filter((t4) => t4 instanceof hl).length;
    if (e2 > 1 || e2 > 0 && n2 > 0)
      throw new L2(B2.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  }(s);
  for (const e2 of s)
    t2 = e2._apply(t2);
  return t2;
}
var hl = class extends cl {
  /**
   * @internal
   */
  constructor(t2, e, n) {
    super(), this._field = t2, this._op = e, this._value = n, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(t2, e, n) {
    return new hl(t2, e, n);
  }
  _apply(t2) {
    const e = this._parse(t2);
    return Sl(t2._query, e), new Ya2(t2.firestore, t2.converter, En(t2._query, e));
  }
  _parse(t2) {
    const e = Oh(t2.firestore), n = function(t3, e2, n2, s, i, r, o) {
      let u;
      if (i.isKeyField()) {
        if ("array-contains" === r || "array-contains-any" === r)
          throw new L2(B2.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on documentId().`);
        if ("in" === r || "not-in" === r) {
          Vl(o, r);
          const e3 = [];
          for (const n3 of o)
            e3.push(bl(s, t3, n3));
          u = {
            arrayValue: {
              values: e3
            }
          };
        } else
          u = bl(s, t3, o);
      } else
        "in" !== r && "not-in" !== r && "array-contains-any" !== r || Vl(o, r), u = zh(
          n2,
          e2,
          o,
          /* allowArrays= */
          "in" === r || "not-in" === r
        );
      return Ve.create(i, r, u);
    }(t2._query, "where", e, t2.firestore._databaseId, this._field, this._op, this._value);
    return n;
  }
};
function ll(t2, e, n) {
  const s = e, i = rl("where", t2);
  return hl._create(i, s, n);
}
var fl = class extends ul {
  /**
   * @internal
   */
  constructor(t2, e) {
    super(), this.type = t2, this._queryConstraints = e;
  }
  static _create(t2, e) {
    return new fl(t2, e);
  }
  _parse(t2) {
    const e = this._queryConstraints.map((e2) => e2._parse(t2)).filter((t3) => t3.getFilters().length > 0);
    return 1 === e.length ? e[0] : Se.create(e, this._getOperator());
  }
  _apply(t2) {
    const e = this._parse(t2);
    return 0 === e.getFilters().length ? t2 : (function(t3, e2) {
      let n = t3;
      const s = e2.getFlattenedFilters();
      for (const t4 of s)
        Sl(n, t4), n = En(n, t4);
    }(t2._query, e), new Ya2(t2.firestore, t2.converter, En(t2._query, e)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return "and" === this.type ? "and" : "or";
  }
};
function dl(...t2) {
  return t2.forEach((t3) => Cl("or", t3)), fl._create("or", t2);
}
function _l(...t2) {
  return t2.forEach((t3) => Cl("and", t3)), fl._create("and", t2);
}
var wl = class extends cl {
  /**
   * @internal
   */
  constructor(t2, e) {
    super(), this._field = t2, this._direction = e, /** The type of this query constraint */
    this.type = "orderBy";
  }
  static _create(t2, e) {
    return new wl(t2, e);
  }
  _apply(t2) {
    const e = function(t3, e2, n) {
      if (null !== t3.startAt)
        throw new L2(B2.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t3.endAt)
        throw new L2(B2.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      const s = new je(e2, n);
      return function(t4, e3) {
        if (null === gn(t4)) {
          const n2 = yn(t4);
          null !== n2 && Dl(t4, n2, e3.field);
        }
      }(t3, s), s;
    }(t2._query, this._field, this._direction);
    return new Ya2(t2.firestore, t2.converter, function(t3, e2) {
      const n = t3.explicitOrderBy.concat([e2]);
      return new dn(t3.path, t3.collectionGroup, n, t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, t3.endAt);
    }(t2._query, e));
  }
};
function ml(t2, e = "asc") {
  const n = e, s = rl("orderBy", t2);
  return wl._create(s, n);
}
var gl = class extends cl {
  /**
   * @internal
   */
  constructor(t2, e, n) {
    super(), this.type = t2, this._limit = e, this._limitType = n;
  }
  static _create(t2, e, n) {
    return new gl(t2, e, n);
  }
  _apply(t2) {
    return new Ya2(t2.firestore, t2.converter, An(t2._query, this._limit, this._limitType));
  }
};
function yl(t2) {
  return ja2("limit", t2), gl._create(
    "limit",
    t2,
    "F"
    /* LimitType.First */
  );
}
function pl(t2) {
  return ja2("limitToLast", t2), gl._create(
    "limitToLast",
    t2,
    "L"
    /* LimitType.Last */
  );
}
var Il = class extends cl {
  /**
   * @internal
   */
  constructor(t2, e, n) {
    super(), this.type = t2, this._docOrFields = e, this._inclusive = n;
  }
  static _create(t2, e, n) {
    return new Il(t2, e, n);
  }
  _apply(t2) {
    const e = vl(t2, this.type, this._docOrFields, this._inclusive);
    return new Ya2(t2.firestore, t2.converter, function(t3, e2) {
      return new dn(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), t3.filters.slice(), t3.limit, t3.limitType, e2, t3.endAt);
    }(t2._query, e));
  }
};
function Tl(...t2) {
  return Il._create(
    "startAt",
    t2,
    /*inclusive=*/
    true
  );
}
function El(...t2) {
  return Il._create(
    "startAfter",
    t2,
    /*inclusive=*/
    false
  );
}
var Al = class extends cl {
  /**
   * @internal
   */
  constructor(t2, e, n) {
    super(), this.type = t2, this._docOrFields = e, this._inclusive = n;
  }
  static _create(t2, e, n) {
    return new Al(t2, e, n);
  }
  _apply(t2) {
    const e = vl(t2, this.type, this._docOrFields, this._inclusive);
    return new Ya2(t2.firestore, t2.converter, function(t3, e2) {
      return new dn(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), t3.filters.slice(), t3.limit, t3.limitType, t3.startAt, e2);
    }(t2._query, e));
  }
};
function Rl(...t2) {
  return Al._create(
    "endBefore",
    t2,
    /*inclusive=*/
    false
  );
}
function Pl(...t2) {
  return Al._create(
    "endAt",
    t2,
    /*inclusive=*/
    true
  );
}
function vl(t2, e, n, s) {
  if (n[0] = getModularInstance(n[0]), n[0] instanceof sl)
    return function(t3, e2, n2, s2, i) {
      if (!s2)
        throw new L2(B2.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n2}().`);
      const r = [];
      for (const n3 of In(t3))
        if (n3.field.isKeyField())
          r.push(fe(e2, s2.key));
        else {
          const t4 = s2.data.field(n3.field);
          if (te(t4))
            throw new L2(B2.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n3.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
          if (null === t4) {
            const t5 = n3.field.canonicalString();
            throw new L2(B2.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t5}' (used as the orderBy) does not exist.`);
          }
          r.push(t4);
        }
      return new Re(r, i);
    }(t2._query, t2.firestore._databaseId, e, n[0]._document, s);
  {
    const i = Oh(t2.firestore);
    return function(t3, e2, n2, s2, i2, r) {
      const o = t3.explicitOrderBy;
      if (i2.length > o.length)
        throw new L2(B2.INVALID_ARGUMENT, `Too many arguments provided to ${s2}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      const u = [];
      for (let r2 = 0; r2 < i2.length; r2++) {
        const c = i2[r2];
        if (o[r2].field.isKeyField()) {
          if ("string" != typeof c)
            throw new L2(B2.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s2}(), but got a ${typeof c}`);
          if (!pn(t3) && -1 !== c.indexOf("/"))
            throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${s2}() must be a plain document ID, but '${c}' contains a slash.`);
          const n3 = t3.path.child(rt.fromString(c));
          if (!ct.isDocumentKey(n3))
            throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${s2}() must result in a valid document path, but '${n3}' is not because it contains an odd number of segments.`);
          const i3 = new ct(n3);
          u.push(fe(e2, i3));
        } else {
          const t4 = zh(n2, s2, c);
          u.push(t4);
        }
      }
      return new Re(u, r);
    }(t2._query, t2.firestore._databaseId, i, e, n, s);
  }
}
function bl(t2, e, n) {
  if ("string" == typeof (n = getModularInstance(n))) {
    if ("" === n)
      throw new L2(B2.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!pn(e) && -1 !== n.indexOf("/"))
      throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const s = e.path.child(rt.fromString(n));
    if (!ct.isDocumentKey(s))
      throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
    return fe(t2, new ct(s));
  }
  if (n instanceof Ja2)
    return fe(t2, n._key);
  throw new L2(B2.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(n)}.`);
}
function Vl(t2, e) {
  if (!Array.isArray(t2) || 0 === t2.length)
    throw new L2(B2.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
}
function Sl(t2, e) {
  if (e.isInequality()) {
    const n2 = yn(t2), s = e.field;
    if (null !== n2 && !n2.isEqual(s))
      throw new L2(B2.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n2.toString()}' and '${s.toString()}'`);
    const i = gn(t2);
    null !== i && Dl(t2, s, i);
  }
  const n = function(t3, e2) {
    for (const n2 of t3)
      for (const t4 of n2.getFlattenedFilters())
        if (e2.indexOf(t4.op) >= 0)
          return t4.op;
    return null;
  }(t2.filters, function(t3) {
    switch (t3) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  }(e.op));
  if (null !== n)
    throw n === e.op ? new L2(B2.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new L2(B2.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
}
function Dl(t2, e, n) {
  if (!n.isEqual(e))
    throw new L2(B2.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}
function Cl(t2, e) {
  if (!(e instanceof hl || e instanceof fl))
    throw new L2(B2.INVALID_ARGUMENT, `Function ${t2}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
}
var xl = class {
  convertValue(t2, e = "none") {
    switch (re(t2)) {
      case 0:
        return null;
      case 1:
        return t2.booleanValue;
      case 2:
        return Zt(t2.integerValue || t2.doubleValue);
      case 3:
        return this.convertTimestamp(t2.timestampValue);
      case 4:
        return this.convertServerTimestamp(t2, e);
      case 5:
        return t2.stringValue;
      case 6:
        return this.convertBytes(Xt(t2.bytesValue));
      case 7:
        return this.convertReference(t2.referenceValue);
      case 8:
        return this.convertGeoPoint(t2.geoPointValue);
      case 9:
        return this.convertArray(t2.arrayValue, e);
      case 10:
        return this.convertObject(t2.mapValue, e);
      default:
        throw $();
    }
  }
  convertObject(t2, e) {
    const n = {};
    return Ut(t2.fields, (t3, s) => {
      n[t3] = this.convertValue(s, e);
    }), n;
  }
  convertGeoPoint(t2) {
    return new Dh(Zt(t2.latitude), Zt(t2.longitude));
  }
  convertArray(t2, e) {
    return (t2.values || []).map((t3) => this.convertValue(t3, e));
  }
  convertServerTimestamp(t2, e) {
    switch (e) {
      case "previous":
        const n = ee(t2);
        return null == n ? null : this.convertValue(n, e);
      case "estimate":
        return this.convertTimestamp(ne(t2));
      default:
        return null;
    }
  }
  convertTimestamp(t2) {
    const e = Yt(t2);
    return new nt(e.seconds, e.nanos);
  }
  convertDocumentKey(t2, e) {
    const n = rt.fromString(t2);
    M2(pi(n));
    const s = new Lt(n.get(1), n.get(3)), i = new ct(n.popFirst(5));
    return s.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
    x2(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
  }
};
function Nl(t2, e, n) {
  let s;
  return s = t2 ? n && (n.merge || n.mergeFields) ? t2.toFirestore(e, n) : t2.toFirestore(e) : e, s;
}
var kl = class extends xl {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new vh(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new Ja2(
      this.firestore,
      /* converter= */
      null,
      e
    );
  }
};
function $l(t2) {
  return new Rh("sum", Zh("sum", t2));
}
function Ml(t2) {
  return new Rh("avg", Zh("average", t2));
}
function Ol() {
  return new Rh("count");
}
function Fl(t2, e) {
  var n, s;
  return t2 instanceof Rh && e instanceof Rh && t2._aggregateType === e._aggregateType && (null === (n = t2._internalFieldPath) || void 0 === n ? void 0 : n.canonicalString()) === (null === (s = e._internalFieldPath) || void 0 === s ? void 0 : s.canonicalString());
}
function Bl(t2, e) {
  return sh(t2.query, e.query) && deepEqual(t2.data(), e.data());
}
var Ll = class {
  /** @hideconstructor */
  constructor(t2, e) {
    this.hasPendingWrites = t2, this.fromCache = e;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(t2) {
    return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
  }
};
var ql = class extends sl {
  /** @hideconstructor protected */
  constructor(t2, e, n, s, i, r) {
    super(t2, e, n, s, r), this._firestore = t2, this._firestoreImpl = t2, this.metadata = i;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(t2 = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new Ul(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e, t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t2.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t2, e = {}) {
    if (this._document) {
      const n = this._document.data.field(rl("DocumentSnapshot.get", t2));
      if (null !== n)
        return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }
};
var Ul = class extends ql {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(t2 = {}) {
    return super.data(t2);
  }
};
var Kl = class {
  /** @hideconstructor */
  constructor(t2, e, n, s) {
    this._firestore = t2, this._userDataWriter = e, this._snapshot = s, this.metadata = new Ll(s.hasPendingWrites, s.fromCache), this.query = n;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), t2;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return 0 === this.size;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(t2, e) {
    this._snapshot.docs.forEach((n) => {
      t2.call(e, new Ul(this._firestore, this._userDataWriter, n.key, n, new Ll(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(t2 = {}) {
    const e = !!t2.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges)
      throw new L2(B2.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    function(t3, e2) {
      if (t3._snapshot.oldDocs.isEmpty()) {
        let e3 = 0;
        return t3._snapshot.docChanges.map((n) => {
          const s = new Ul(t3._firestore, t3._userDataWriter, n.doc.key, n.doc, new Ll(t3._snapshot.mutatedKeys.has(n.doc.key), t3._snapshot.fromCache), t3.query.converter);
          return n.doc, {
            type: "added",
            doc: s,
            oldIndex: -1,
            newIndex: e3++
          };
        });
      }
      {
        let n = t3._snapshot.oldDocs;
        return t3._snapshot.docChanges.filter((t4) => e2 || 3 !== t4.type).map((e3) => {
          const s = new Ul(t3._firestore, t3._userDataWriter, e3.doc.key, e3.doc, new Ll(t3._snapshot.mutatedKeys.has(e3.doc.key), t3._snapshot.fromCache), t3.query.converter);
          let i = -1, r = -1;
          return 0 !== e3.type && (i = n.indexOf(e3.doc.key), n = n.delete(e3.doc.key)), 1 !== e3.type && (n = n.add(e3.doc), r = n.indexOf(e3.doc.key)), {
            type: Gl(e3.type),
            doc: s,
            oldIndex: i,
            newIndex: r
          };
        });
      }
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
};
function Gl(t2) {
  switch (t2) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return $();
  }
}
function Ql(t2, e) {
  return t2 instanceof ql && e instanceof ql ? t2._firestore === e._firestore && t2._key.isEqual(e._key) && (null === t2._document ? null === e._document : t2._document.isEqual(e._document)) && t2._converter === e._converter : t2 instanceof Kl && e instanceof Kl && (t2._firestore === e._firestore && sh(t2.query, e.query) && t2.metadata.isEqual(e.metadata) && t2._snapshot.isEqual(e._snapshot));
}
function jl(t2) {
  t2 = Qa2(t2, Ja2);
  const e = Qa2(t2.firestore, ch);
  return Na2(lh(e), t2._key).then((n) => uf(e, t2, n));
}
var zl = class extends xl {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new vh(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new Ja2(
      this.firestore,
      /* converter= */
      null,
      e
    );
  }
};
function Wl(t2) {
  t2 = Qa2(t2, Ja2);
  const e = Qa2(t2.firestore, ch), n = lh(e), s = new zl(e);
  return xa2(n, t2._key).then((n2) => new ql(e, s, t2._key, n2, new Ll(
    null !== n2 && n2.hasLocalMutations,
    /* fromCache= */
    true
  ), t2.converter));
}
function Hl(t2) {
  t2 = Qa2(t2, Ja2);
  const e = Qa2(t2.firestore, ch);
  return Na2(lh(e), t2._key, {
    source: "server"
  }).then((n) => uf(e, t2, n));
}
function Jl(t2) {
  t2 = Qa2(t2, Ya2);
  const e = Qa2(t2.firestore, ch), n = lh(e), s = new zl(e);
  return ol(t2._query), $a2(n, t2._query).then((n2) => new Kl(e, s, t2, n2));
}
function Yl(t2) {
  t2 = Qa2(t2, Ya2);
  const e = Qa2(t2.firestore, ch), n = lh(e), s = new zl(e);
  return ka(n, t2._query).then((n2) => new Kl(e, s, t2, n2));
}
function Zl(t2) {
  t2 = Qa2(t2, Ya2);
  const e = Qa2(t2.firestore, ch), n = lh(e), s = new zl(e);
  return $a2(n, t2._query, {
    source: "server"
  }).then((n2) => new Kl(e, s, t2, n2));
}
function Xl(t2, e, n) {
  t2 = Qa2(t2, Ja2);
  const s = Qa2(t2.firestore, ch), i = Nl(t2.converter, e, n);
  return of(s, [Fh(Oh(s), "setDoc", t2._key, i, null !== t2.converter, n).toMutation(t2._key, Hn.none())]);
}
function tf(t2, e, n, ...s) {
  t2 = Qa2(t2, Ja2);
  const i = Qa2(t2.firestore, ch), r = Oh(i);
  let o;
  o = "string" == typeof // For Compat types, we have to "extract" the underlying types before
  // performing validation.
  (e = getModularInstance(e)) || e instanceof bh ? jh(r, "updateDoc", t2._key, e, n, s) : Qh(r, "updateDoc", t2._key, e);
  return of(i, [o.toMutation(t2._key, Hn.exists(true))]);
}
function ef(t2) {
  return of(Qa2(t2.firestore, ch), [new cs(t2._key, Hn.none())]);
}
function nf(t2, e) {
  const n = Qa2(t2.firestore, ch), s = eh(t2), i = Nl(t2.converter, e);
  return of(n, [Fh(Oh(t2.firestore), "addDoc", s._key, i, null !== t2.converter, {}).toMutation(s._key, Hn.exists(false))]).then(() => s);
}
function sf(t2, ...e) {
  var n, s, i;
  t2 = getModularInstance(t2);
  let r = {
    includeMetadataChanges: false
  }, o = 0;
  "object" != typeof e[o] || rh(e[o]) || (r = e[o], o++);
  const u = {
    includeMetadataChanges: r.includeMetadataChanges
  };
  if (rh(e[o])) {
    const t3 = e[o];
    e[o] = null === (n = t3.next) || void 0 === n ? void 0 : n.bind(t3), e[o + 1] = null === (s = t3.error) || void 0 === s ? void 0 : s.bind(t3), e[o + 2] = null === (i = t3.complete) || void 0 === i ? void 0 : i.bind(t3);
  }
  let c, a, h;
  if (t2 instanceof Ja2)
    a = Qa2(t2.firestore, ch), h = wn(t2._key.path), c = {
      next: (n2) => {
        e[o] && e[o](uf(a, t2, n2));
      },
      error: e[o + 1],
      complete: e[o + 2]
    };
  else {
    const n2 = Qa2(t2, Ya2);
    a = Qa2(n2.firestore, ch), h = n2._query;
    const s2 = new zl(a);
    c = {
      next: (t3) => {
        e[o] && e[o](new Kl(a, s2, n2, t3));
      },
      error: e[o + 1],
      complete: e[o + 2]
    }, ol(t2._query);
  }
  return function(t3, e2, n2, s2) {
    const i2 = new wa2(s2), r2 = new Tc2(e2, i2, n2);
    return t3.asyncQueue.enqueueAndForget(async () => mc2(await Sa2(t3), r2)), () => {
      i2.bc(), t3.asyncQueue.enqueueAndForget(async () => gc2(await Sa2(t3), r2));
    };
  }(lh(a), h, u, c);
}
function rf(t2, e) {
  return Ma2(lh(t2 = Qa2(t2, ch)), rh(e) ? e : {
    next: e
  });
}
function of(t2, e) {
  return function(t3, e2) {
    const n = new q2();
    return t3.asyncQueue.enqueueAndForget(async () => $c2(await ba2(t3), e2, n)), n.promise;
  }(lh(t2), e);
}
function uf(t2, e, n) {
  const s = n.docs.get(e._key), i = new zl(t2);
  return new ql(t2, i, e._key, s, new Ll(n.hasPendingWrites, n.fromCache), e.converter);
}
function cf(t2) {
  return af(t2, {
    count: Ol()
  });
}
function af(t2, e) {
  const n = Qa2(t2.firestore, ch), s = lh(n), i = function(t3, e2) {
    const n2 = [];
    for (const s2 in t3)
      Object.prototype.hasOwnProperty.call(t3, s2) && n2.push(e2(t3[s2], s2, t3));
    return n2;
  }(e, (t3, e2) => new Ft(new Ot(e2), t3._aggregateType, t3._internalFieldPath));
  return function(t3, e2, n2) {
    const s2 = new q2();
    return t3.asyncQueue.enqueueAndForget(async () => {
      try {
        if (Ku(await va2(t3))) {
          const i2 = await Va2(t3);
          s2.resolve(xu(i2, e2, n2));
        } else
          s2.reject(new L2(B2.UNAVAILABLE, "Failed to get aggregate result because the client is offline."));
      } catch (t4) {
        s2.reject(t4);
      }
    }), s2.promise;
  }(s, t2._query, i).then((e2) => (
    /**
    * Converts the core aggregration result to an `AggregateQuerySnapshot`
    * that can be returned to the consumer.
    * @param query
    * @param aggregateResult Core aggregation result
    * @internal
    */
    function(t3, e3, n2) {
      const s2 = new zl(t3);
      return new Ph(e3, s2, n2);
    }(n, t2, e2)
  ));
}
var hf = {
  maxAttempts: 5
};
var lf = class {
  /** @hideconstructor */
  constructor(t2, e) {
    this._firestore = t2, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = Oh(t2);
  }
  set(t2, e, n) {
    this._verifyNotCommitted();
    const s = ff(t2, this._firestore), i = Nl(s.converter, e, n), r = Fh(this._dataReader, "WriteBatch.set", s._key, i, null !== s.converter, n);
    return this._mutations.push(r.toMutation(s._key, Hn.none())), this;
  }
  update(t2, e, n, ...s) {
    this._verifyNotCommitted();
    const i = ff(t2, this._firestore);
    let r;
    return r = "string" == typeof (e = getModularInstance(e)) || e instanceof bh ? jh(this._dataReader, "WriteBatch.update", i._key, e, n, s) : Qh(this._dataReader, "WriteBatch.update", i._key, e), this._mutations.push(r.toMutation(i._key, Hn.exists(true))), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `WriteBatch` instance. Used for chaining method calls.
   */
  delete(t2) {
    this._verifyNotCommitted();
    const e = ff(t2, this._firestore);
    return this._mutations = this._mutations.concat(new cs(e._key, Hn.none())), this;
  }
  /**
   * Commits all of the writes in this write batch as a single atomic unit.
   *
   * The result of these writes will only be reflected in document reads that
   * occur after the returned promise resolves. If the client is offline, the
   * write fails. If you would like to see local modifications or buffer writes
   * until the client is online, use the full Firestore SDK.
   *
   * @returns A `Promise` resolved once all of the writes in the batch have been
   * successfully written to the backend as an atomic unit (note that it won't
   * resolve while you're offline).
   */
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed)
      throw new L2(B2.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
};
function ff(t2, e) {
  if ((t2 = getModularInstance(t2)).firestore !== e)
    throw new L2(B2.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t2;
}
var df = class extends class {
  /** @hideconstructor */
  constructor(t2, e) {
    this._firestore = t2, this._transaction = e, this._dataReader = Oh(t2);
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(t2) {
    const e = ff(t2, this._firestore), n = new kl(this._firestore);
    return this._transaction.lookup([e._key]).then((t3) => {
      if (!t3 || 1 !== t3.length)
        return $();
      const s = t3[0];
      if (s.isFoundDocument())
        return new sl(this._firestore, n, s.key, s, e.converter);
      if (s.isNoDocument())
        return new sl(this._firestore, n, e._key, null, e.converter);
      throw $();
    });
  }
  set(t2, e, n) {
    const s = ff(t2, this._firestore), i = Nl(s.converter, e, n), r = Fh(this._dataReader, "Transaction.set", s._key, i, null !== s.converter, n);
    return this._transaction.set(s._key, r), this;
  }
  update(t2, e, n, ...s) {
    const i = ff(t2, this._firestore);
    let r;
    return r = "string" == typeof (e = getModularInstance(e)) || e instanceof bh ? jh(this._dataReader, "Transaction.update", i._key, e, n, s) : Qh(this._dataReader, "Transaction.update", i._key, e), this._transaction.update(i._key, r), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `Transaction` instance. Used for chaining method calls.
   */
  delete(t2) {
    const e = ff(t2, this._firestore);
    return this._transaction.delete(e._key), this;
  }
} {
  // This class implements the same logic as the Transaction API in the Lite SDK
  // but is subclassed in order to return its own DocumentSnapshot types.
  /** @hideconstructor */
  constructor(t2, e) {
    super(t2, e), this._firestore = t2;
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(t2) {
    const e = ff(t2, this._firestore), n = new zl(this._firestore);
    return super.get(t2).then((t3) => new ql(this._firestore, n, e._key, t3._document, new Ll(
      /* hasPendingWrites= */
      false,
      /* fromCache= */
      false
    ), e.converter));
  }
};
function _f(t2, e, n) {
  t2 = Qa2(t2, ch);
  const s = Object.assign(Object.assign({}, hf), n);
  !function(t3) {
    if (t3.maxAttempts < 1)
      throw new L2(B2.INVALID_ARGUMENT, "Max attempts must be at least 1");
  }(s);
  return function(t3, e2, n2) {
    const s2 = new q2();
    return t3.asyncQueue.enqueueAndForget(async () => {
      const i = await Va2(t3);
      new ya2(t3.asyncQueue, i, n2, e2, s2).run();
    }), s2.promise;
  }(lh(t2), (n2) => e(new df(t2, n2)), s);
}
function wf() {
  return new Bh("deleteField");
}
function mf() {
  return new qh("serverTimestamp");
}
function gf(...t2) {
  return new Uh("arrayUnion", t2);
}
function yf(...t2) {
  return new Kh("arrayRemove", t2);
}
function pf(t2) {
  return new Gh("increment", t2);
}
function If(t2) {
  return lh(t2 = Qa2(t2, ch)), new lf(t2, (e) => of(t2, e));
}
function Tf(t2, e) {
  var n;
  const s = lh(t2 = Qa2(t2, ch));
  if (!(null === (n = s.offlineComponents) || void 0 === n ? void 0 : n.indexBackfillerScheduler))
    return N2("Cannot enable indexes when persistence is disabled"), Promise.resolve();
  const i = function(t3) {
    const e2 = "string" == typeof t3 ? function(t4) {
      try {
        return JSON.parse(t4);
      } catch (t5) {
        throw new L2(B2.INVALID_ARGUMENT, "Failed to parse JSON: " + (null == t5 ? void 0 : t5.message));
      }
    }(t3) : t3, n2 = [];
    if (Array.isArray(e2.indexes))
      for (const t4 of e2.indexes) {
        const e3 = Ef(t4, "collectionGroup"), s2 = [];
        if (Array.isArray(t4.fields))
          for (const e4 of t4.fields) {
            const t5 = tl("setIndexConfiguration", Ef(e4, "fieldPath"));
            "CONTAINS" === e4.arrayConfig ? s2.push(new dt(
              t5,
              2
              /* IndexKind.CONTAINS */
            )) : "ASCENDING" === e4.order ? s2.push(new dt(
              t5,
              0
              /* IndexKind.ASCENDING */
            )) : "DESCENDING" === e4.order && s2.push(new dt(
              t5,
              1
              /* IndexKind.DESCENDING */
            ));
          }
        n2.push(new at(at.UNKNOWN_ID, e3, s2, wt.empty()));
      }
    return n2;
  }(e);
  return Pa2(s).then((t3) => async function(t4, e2) {
    const n2 = F(t4), s2 = n2.indexManager, i2 = [];
    return n2.persistence.runTransaction("Configure indexes", "readwrite", (t5) => s2.getFieldIndexes(t5).next((n3) => function(t6, e3, n4, s3, i3) {
      t6 = [...t6], e3 = [...e3], t6.sort(n4), e3.sort(n4);
      const r = t6.length, o = e3.length;
      let u = 0, c = 0;
      for (; u < o && c < r; ) {
        const r2 = n4(t6[c], e3[u]);
        r2 < 0 ? (
          // The element was removed if the next element in our ordered
          // walkthrough is only in `before`.
          i3(t6[c++])
        ) : r2 > 0 ? (
          // The element was added if the next element in our ordered walkthrough
          // is only in `after`.
          s3(e3[u++])
        ) : (u++, c++);
      }
      for (; u < o; )
        s3(e3[u++]);
      for (; c < r; )
        i3(t6[c++]);
    }(n3, e2, ft, (e3) => {
      i2.push(s2.addFieldIndex(t5, e3));
    }, (e3) => {
      i2.push(s2.deleteFieldIndex(t5, e3));
    })).next(() => At.waitFor(i2)));
  }(t3, i));
}
function Ef(t2, e) {
  if ("string" != typeof t2[e])
    throw new L2(B2.INVALID_ARGUMENT, "Missing string value for: " + e);
  return t2[e];
}
!function(t2, e = true) {
  !function(t3) {
    b = t3;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (t3, { instanceIdentifier: n, options: s }) => {
    const i = t3.getProvider("app").getImmediate(), r = new ch(new Q2(t3.getProvider("auth-internal")), new H2(t3.getProvider("app-check-internal")), function(t4, e2) {
      if (!Object.prototype.hasOwnProperty.apply(t4.options, ["projectId"]))
        throw new L2(B2.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new Lt(t4.options.projectId, e2);
    }(i, n), i);
    return s = Object.assign({
      useFetchStreams: e
    }, s), r._setSettings(s), r;
  }, "PUBLIC").setMultipleInstances(true)), registerVersion(P2, "3.9.0", t2), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  registerVersion(P2, "3.9.0", "esm2017");
}();
export {
  xl as AbstractUserDataWriter,
  Rh as AggregateField,
  Ph as AggregateQuerySnapshot,
  vh as Bytes,
  uh as CACHE_SIZE_UNLIMITED,
  Za as CollectionReference,
  Ja2 as DocumentReference,
  ql as DocumentSnapshot,
  bh as FieldPath,
  Sh as FieldValue,
  ch as Firestore,
  L2 as FirestoreError,
  Dh as GeoPoint,
  oh as LoadBundleTask,
  Ya2 as Query,
  fl as QueryCompositeFilterConstraint,
  cl as QueryConstraint,
  Ul as QueryDocumentSnapshot,
  Al as QueryEndAtConstraint,
  hl as QueryFieldFilterConstraint,
  gl as QueryLimitConstraint,
  wl as QueryOrderByConstraint,
  Kl as QuerySnapshot,
  Il as QueryStartAtConstraint,
  Ll as SnapshotMetadata,
  nt as Timestamp,
  df as Transaction,
  lf as WriteBatch,
  Lt as _DatabaseId,
  ct as _DocumentKey,
  J2 as _EmptyAppCheckTokenProvider,
  K2 as _EmptyAuthCredentialsProvider,
  ut as _FieldPath,
  Qa2 as _cast,
  O2 as _debugAssert,
  Wt as _isBase64Available,
  N2 as _logWarn,
  qa2 as _validateIsNotUsedTogether,
  nf as addDoc,
  Fl as aggregateFieldEqual,
  Bl as aggregateQuerySnapshotEqual,
  _l as and,
  yf as arrayRemove,
  gf as arrayUnion,
  Ml as average,
  mh as clearIndexedDbPersistence,
  Xa2 as collection,
  th as collectionGroup,
  Ha as connectFirestoreEmulator,
  Ol as count,
  ef as deleteDoc,
  wf as deleteField,
  ph as disableNetwork,
  eh as doc,
  Vh as documentId,
  dh as enableIndexedDbPersistence,
  _h as enableMultiTabIndexedDbPersistence,
  yh as enableNetwork,
  Pl as endAt,
  Rl as endBefore,
  lh as ensureFirestoreConfigured,
  of as executeWrite,
  af as getAggregateFromServer,
  cf as getCountFromServer,
  jl as getDoc,
  Wl as getDocFromCache,
  Hl as getDocFromServer,
  Jl as getDocs,
  Yl as getDocsFromCache,
  Zl as getDocsFromServer,
  hh as getFirestore,
  pf as increment,
  ah as initializeFirestore,
  yl as limit,
  pl as limitToLast,
  Th as loadBundle,
  Eh as namedQuery,
  sf as onSnapshot,
  rf as onSnapshotsInSync,
  dl as or,
  ml as orderBy,
  al as query,
  sh as queryEqual,
  nh as refEqual,
  _f as runTransaction,
  mf as serverTimestamp,
  Xl as setDoc,
  Tf as setIndexConfiguration,
  D2 as setLogLevel,
  Ql as snapshotEqual,
  El as startAfter,
  Tl as startAt,
  $l as sum,
  Ih as terminate,
  tf as updateDoc,
  gh as waitForPendingWrites,
  ll as where,
  If as writeBatch
};
/*! Bundled license information:

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
  * @license
  * Copyright 2017 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
*/
//# sourceMappingURL=firebase_firestore.js.map
