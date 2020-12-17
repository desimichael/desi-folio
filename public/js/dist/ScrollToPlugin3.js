(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/ScrollToPlugin3.js");
})({
    "./assets/js/ScrollToPlugin3.js": function(module, exports, __webpack_require__) {
        eval("/*!\n * ScrollToPlugin 3.5.2\n * https://greensock.com\n */\n!function (t, e) {\n   true ? e(exports) : undefined;\n}(this, function (e) {\n  'use strict';\n\n  function k() {\n    return 'undefined' != typeof window;\n  }\n\n  function l() {\n    return i || k() && (i = window.gsap) && i.registerPlugin && i;\n  }\n\n  function m(t) {\n    return 'string' == typeof t;\n  }\n\n  function n(t) {\n    return 'function' == typeof t;\n  }\n\n  function o(t, e) {\n    var o = 'x' === e ? 'Width' : 'Height',\n        n = 'scroll' + o,\n        r = 'client' + o;\n    return t === x || t === u || t === c ? Math.max(u[n], c[n]) - (x['inner' + o] || u[r] || c[r]) : t[n] - t['offset' + o];\n  }\n\n  function p(t, e) {\n    var o = 'scroll' + ('x' === e ? 'Left' : 'Top');\n    return t === x && (null != t.pageXOffset ? o = 'page' + e.toUpperCase() + 'Offset' : t = null != u[o] ? u : c), function () {\n      return t[o];\n    };\n  }\n\n  function r(t, e) {\n    if (!(t = a(t)[0]) || !t.getBoundingClientRect) return console.warn(\"scrollTo target doesn't exist. Using 0\") || {\n      x: 0,\n      y: 0\n    };\n    var o = t.getBoundingClientRect(),\n        n = !e || e === x || e === c,\n        r = n ? {\n      top: u.clientTop - (x.pageYOffset || u.scrollTop || c.scrollTop || 0),\n      left: u.clientLeft - (x.pageXOffset || u.scrollLeft || c.scrollLeft || 0)\n    } : e.getBoundingClientRect(),\n        i = {\n      x: o.left - r.left,\n      y: o.top - r.top\n    };\n    return !n && e && (i.x += p(e, 'x')(), i.y += p(e, 'y')()), i;\n  }\n\n  function s(t, e, n, i, l) {\n    return isNaN(t) || 'object' == typeof t ? m(t) && '=' === t.charAt(1) ? parseFloat(t.substr(2)) * ('-' === t.charAt(0) ? -1 : 1) + i - l : 'max' === t ? o(e, n) - l : Math.min(o(e, n), r(t, e)[n] - l) : parseFloat(t) - l;\n  }\n\n  function t() {\n    i = l(), k() && i && document.body && (x = window, c = document.body, u = document.documentElement, a = i.utils.toArray, i.config({\n      autoKillThreshold: 7\n    }), g = i.config(), f = 1);\n  }\n\n  var i,\n      f,\n      x,\n      u,\n      c,\n      a,\n      g,\n      d = {\n    version: '3.5.2',\n    name: 'scrollTo',\n    rawVars: 1,\n    register: function register(e) {\n      i = e, t();\n    },\n    init: function init(e, o, r, i, l) {\n      f || t();\n      var u = this;\n      u.isWin = e === x, u.target = e, u.tween = r, o = function _clean(t, e, o, r) {\n        if (n(t) && (t = t(e, o, r)), 'object' != typeof t) return m(t) && 'max' !== t && '=' !== t.charAt(1) ? {\n          x: t,\n          y: t\n        } : {\n          y: t\n        };\n        if (t.nodeType) return {\n          y: t,\n          x: t\n        };\n        var i,\n            l = {};\n\n        for (i in t) 'onAutoKill' !== i && (l[i] = n(t[i]) ? t[i](e, o, r) : t[i]);\n\n        return l;\n      }(o, i, e, l), u.vars = o, u.autoKill = !!o.autoKill, u.getX = p(e, 'x'), u.getY = p(e, 'y'), u.x = u.xPrev = u.getX(), u.y = u.yPrev = u.getY(), null != o.x ? (u.add(u, 'x', u.x, s(o.x, e, 'x', u.x, o.offsetX || 0), i, l, Math.round), u._props.push('scrollTo_x')) : u.skipX = 1, null != o.y ? (u.add(u, 'y', u.y, s(o.y, e, 'y', u.y, o.offsetY || 0), i, l, Math.round), u._props.push('scrollTo_y')) : u.skipY = 1;\n    },\n    render: function render(t, e) {\n      for (var n, r, i, l, s, u = e._pt, f = e.target, p = e.tween, c = e.autoKill, a = e.xPrev, d = e.yPrev, y = e.isWin; u;) u.r(t, u.d), u = u._next;\n\n      n = y || !e.skipX ? e.getX() : a, i = (r = y || !e.skipY ? e.getY() : d) - d, l = n - a, s = g.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), c && (!e.skipX && (s < l || l < -s) && n < o(f, 'x') && (e.skipX = 1), !e.skipY && (s < i || i < -s) && r < o(f, 'y') && (e.skipY = 1), e.skipX && e.skipY && (p.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))), y ? x.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y;\n    },\n    kill: function kill(t) {\n      var e = 'scrollTo' === t;\n      !e && 'scrollTo_x' !== t || (this.skipX = 1), !e && 'scrollTo_y' !== t || (this.skipY = 1);\n    }\n  };\n  d.max = o, d.getOffset = r, d.buildGetter = p, l() && i.registerPlugin(d), e.ScrollToPlugin = d, e.default = d;\n\n  if (typeof window === 'undefined' || window !== e) {\n    Object.defineProperty(e, '__esModule', {\n      value: !0\n    });\n  } else {\n    delete e.default;\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/ScrollToPlugin3.js?");
    }
});