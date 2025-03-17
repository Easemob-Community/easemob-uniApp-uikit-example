import {
  __commonJS
} from "./chunk-Y2F7D3TJ.js";

// ../../../../../../Users/easemob/Desktop/workNeed/example/easemob-uniApp-uikit-example/node_modules/easemob-websdk/Easemob-chat.js
var require_Easemob_chat = __commonJS({
  "../../../../../../Users/easemob/Desktop/workNeed/example/easemob-uniApp-uikit-example/node_modules/easemob-websdk/Easemob-chat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.websdk = t() : e.websdk = t();
    }(self, function() {
      return function() {
        var e = { 4537: function(e2) {
          "use strict";
          e2.exports = function(e3, t2) {
            for (var r2 = new Array(arguments.length - 1), n2 = 0, o = 2, i = true; o < arguments.length; )
              r2[n2++] = arguments[o++];
            return new Promise(function(o2, a) {
              r2[n2] = function(e4) {
                if (i)
                  if (i = false, e4)
                    a(e4);
                  else {
                    for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; )
                      t3[r3++] = arguments[r3];
                    o2.apply(null, t3);
                  }
              };
              try {
                e3.apply(t2 || null, r2);
              } catch (e4) {
                i && (i = false, a(e4));
              }
            });
          };
        }, 7419: function(e2, t2) {
          "use strict";
          var r2 = t2;
          r2.length = function(e3) {
            var t3 = e3.length;
            if (!t3)
              return 0;
            for (var r3 = 0; --t3 % 4 > 1 && "=" === e3.charAt(t3); )
              ++r3;
            return Math.ceil(3 * e3.length) / 4 - r3;
          };
          for (var n2 = new Array(64), o = new Array(123), i = 0; i < 64; )
            o[n2[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
          r2.encode = function(e3, t3, r3) {
            for (var o2, i2 = null, a2 = [], s = 0, c = 0; t3 < r3; ) {
              var u = e3[t3++];
              switch (c) {
                case 0:
                  a2[s++] = n2[u >> 2], o2 = (3 & u) << 4, c = 1;
                  break;
                case 1:
                  a2[s++] = n2[o2 | u >> 4], o2 = (15 & u) << 2, c = 2;
                  break;
                case 2:
                  a2[s++] = n2[o2 | u >> 6], a2[s++] = n2[63 & u], c = 0;
              }
              s > 8191 && ((i2 || (i2 = [])).push(String.fromCharCode.apply(String, a2)), s = 0);
            }
            return c && (a2[s++] = n2[o2], a2[s++] = 61, 1 === c && (a2[s++] = 61)), i2 ? (s && i2.push(String.fromCharCode.apply(String, a2.slice(0, s))), i2.join("")) : String.fromCharCode.apply(String, a2.slice(0, s));
          };
          var a = "invalid encoding";
          r2.decode = function(e3, t3, r3) {
            for (var n3, i2 = r3, s = 0, c = 0; c < e3.length; ) {
              var u = e3.charCodeAt(c++);
              if (61 === u && s > 1)
                break;
              if (void 0 === (u = o[u]))
                throw Error(a);
              switch (s) {
                case 0:
                  n3 = u, s = 1;
                  break;
                case 1:
                  t3[r3++] = n3 << 2 | (48 & u) >> 4, n3 = u, s = 2;
                  break;
                case 2:
                  t3[r3++] = (15 & n3) << 4 | (60 & u) >> 2, n3 = u, s = 3;
                  break;
                case 3:
                  t3[r3++] = (3 & n3) << 6 | u, s = 0;
              }
            }
            if (1 === s)
              throw Error(a);
            return r3 - i2;
          }, r2.test = function(e3) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e3);
          };
        }, 5124: function(e2) {
          "use strict";
          function t2(e3, r2) {
            "string" == typeof e3 && (r2 = e3, e3 = void 0);
            var n2 = [];
            function o(e4) {
              if ("string" != typeof e4) {
                var r3 = i();
                if (t2.verbose && console.log("codegen: " + r3), r3 = "return " + r3, e4) {
                  for (var a = Object.keys(e4), s = new Array(a.length + 1), c = new Array(a.length), u = 0; u < a.length; )
                    s[u] = a[u], c[u] = e4[a[u++]];
                  return s[u] = r3, Function.apply(null, s).apply(null, c);
                }
                return Function(r3)();
              }
              for (var l = new Array(arguments.length - 1), p = 0; p < l.length; )
                l[p] = arguments[++p];
              if (p = 0, e4 = e4.replace(/%([%dfijs])/g, function(e5, t3) {
                var r4 = l[p++];
                switch (t3) {
                  case "d":
                  case "f":
                    return String(Number(r4));
                  case "i":
                    return String(Math.floor(r4));
                  case "j":
                    return JSON.stringify(r4);
                  case "s":
                    return String(r4);
                }
                return "%";
              }), p !== l.length)
                throw Error("parameter count mismatch");
              return n2.push(e4), o;
            }
            function i(t3) {
              return "function " + (t3 || r2 || "") + "(" + (e3 && e3.join(",") || "") + "){\n  " + n2.join("\n  ") + "\n}";
            }
            return o.toString = i, o;
          }
          e2.exports = t2, t2.verbose = false;
        }, 9211: function(e2) {
          "use strict";
          function t2() {
            this._listeners = {};
          }
          e2.exports = t2, t2.prototype.on = function(e3, t3, r2) {
            return (this._listeners[e3] || (this._listeners[e3] = [])).push({ fn: t3, ctx: r2 || this }), this;
          }, t2.prototype.off = function(e3, t3) {
            if (void 0 === e3)
              this._listeners = {};
            else if (void 0 === t3)
              this._listeners[e3] = [];
            else
              for (var r2 = this._listeners[e3], n2 = 0; n2 < r2.length; )
                r2[n2].fn === t3 ? r2.splice(n2, 1) : ++n2;
            return this;
          }, t2.prototype.emit = function(e3) {
            var t3 = this._listeners[e3];
            if (t3) {
              for (var r2 = [], n2 = 1; n2 < arguments.length; )
                r2.push(arguments[n2++]);
              for (n2 = 0; n2 < t3.length; )
                t3[n2].fn.apply(t3[n2++].ctx, r2);
            }
            return this;
          };
        }, 9054: function(e2, t2, r2) {
          "use strict";
          e2.exports = i;
          var n2 = r2(4537), o = r2(7199)("fs");
          function i(e3, t3, r3) {
            return "function" == typeof t3 ? (r3 = t3, t3 = {}) : t3 || (t3 = {}), r3 ? !t3.xhr && o && o.readFile ? o.readFile(e3, function(n3, o2) {
              return n3 && "undefined" != typeof XMLHttpRequest ? i.xhr(e3, t3, r3) : n3 ? r3(n3) : r3(null, t3.binary ? o2 : o2.toString("utf8"));
            }) : i.xhr(e3, t3, r3) : n2(i, this, e3, t3);
          }
          i.xhr = function(e3, t3, r3) {
            var n3 = new XMLHttpRequest();
            n3.onreadystatechange = function() {
              if (4 === n3.readyState) {
                if (0 !== n3.status && 200 !== n3.status)
                  return r3(Error("status " + n3.status));
                if (t3.binary) {
                  var e4 = n3.response;
                  if (!e4) {
                    e4 = [];
                    for (var o2 = 0; o2 < n3.responseText.length; ++o2)
                      e4.push(255 & n3.responseText.charCodeAt(o2));
                  }
                  return r3(null, "undefined" != typeof Uint8Array ? new Uint8Array(e4) : e4);
                }
                return r3(null, n3.responseText);
              }
            }, t3.binary && ("overrideMimeType" in n3 && n3.overrideMimeType("text/plain; charset=x-user-defined"), n3.responseType = "arraybuffer"), n3.open("GET", e3), n3.send();
          };
        }, 945: function(e2) {
          "use strict";
          function t2(e3) {
            return "undefined" != typeof Float32Array ? function() {
              var t3 = new Float32Array([-0]), r3 = new Uint8Array(t3.buffer), n3 = 128 === r3[3];
              function o2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[0], n4[o3 + 1] = r3[1], n4[o3 + 2] = r3[2], n4[o3 + 3] = r3[3];
              }
              function i2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[3], n4[o3 + 1] = r3[2], n4[o3 + 2] = r3[1], n4[o3 + 3] = r3[0];
              }
              function a(e4, n4) {
                return r3[0] = e4[n4], r3[1] = e4[n4 + 1], r3[2] = e4[n4 + 2], r3[3] = e4[n4 + 3], t3[0];
              }
              function s(e4, n4) {
                return r3[3] = e4[n4], r3[2] = e4[n4 + 1], r3[1] = e4[n4 + 2], r3[0] = e4[n4 + 3], t3[0];
              }
              e3.writeFloatLE = n3 ? o2 : i2, e3.writeFloatBE = n3 ? i2 : o2, e3.readFloatLE = n3 ? a : s, e3.readFloatBE = n3 ? s : a;
            }() : function() {
              function t3(e4, t4, r3, n3) {
                var o2 = t4 < 0 ? 1 : 0;
                if (o2 && (t4 = -t4), 0 === t4)
                  e4(1 / t4 > 0 ? 0 : 2147483648, r3, n3);
                else if (isNaN(t4))
                  e4(2143289344, r3, n3);
                else if (t4 > 34028234663852886e22)
                  e4((o2 << 31 | 2139095040) >>> 0, r3, n3);
                else if (t4 < 11754943508222875e-54)
                  e4((o2 << 31 | Math.round(t4 / 1401298464324817e-60)) >>> 0, r3, n3);
                else {
                  var i2 = Math.floor(Math.log(t4) / Math.LN2);
                  e4((o2 << 31 | i2 + 127 << 23 | 8388607 & Math.round(t4 * Math.pow(2, -i2) * 8388608)) >>> 0, r3, n3);
                }
              }
              function a(e4, t4, r3) {
                var n3 = e4(t4, r3), o2 = 2 * (n3 >> 31) + 1, i2 = n3 >>> 23 & 255, a2 = 8388607 & n3;
                return 255 === i2 ? a2 ? NaN : o2 * (1 / 0) : 0 === i2 ? 1401298464324817e-60 * o2 * a2 : o2 * Math.pow(2, i2 - 150) * (a2 + 8388608);
              }
              e3.writeFloatLE = t3.bind(null, r2), e3.writeFloatBE = t3.bind(null, n2), e3.readFloatLE = a.bind(null, o), e3.readFloatBE = a.bind(null, i);
            }(), "undefined" != typeof Float64Array ? function() {
              var t3 = new Float64Array([-0]), r3 = new Uint8Array(t3.buffer), n3 = 128 === r3[7];
              function o2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[0], n4[o3 + 1] = r3[1], n4[o3 + 2] = r3[2], n4[o3 + 3] = r3[3], n4[o3 + 4] = r3[4], n4[o3 + 5] = r3[5], n4[o3 + 6] = r3[6], n4[o3 + 7] = r3[7];
              }
              function i2(e4, n4, o3) {
                t3[0] = e4, n4[o3] = r3[7], n4[o3 + 1] = r3[6], n4[o3 + 2] = r3[5], n4[o3 + 3] = r3[4], n4[o3 + 4] = r3[3], n4[o3 + 5] = r3[2], n4[o3 + 6] = r3[1], n4[o3 + 7] = r3[0];
              }
              function a(e4, n4) {
                return r3[0] = e4[n4], r3[1] = e4[n4 + 1], r3[2] = e4[n4 + 2], r3[3] = e4[n4 + 3], r3[4] = e4[n4 + 4], r3[5] = e4[n4 + 5], r3[6] = e4[n4 + 6], r3[7] = e4[n4 + 7], t3[0];
              }
              function s(e4, n4) {
                return r3[7] = e4[n4], r3[6] = e4[n4 + 1], r3[5] = e4[n4 + 2], r3[4] = e4[n4 + 3], r3[3] = e4[n4 + 4], r3[2] = e4[n4 + 5], r3[1] = e4[n4 + 6], r3[0] = e4[n4 + 7], t3[0];
              }
              e3.writeDoubleLE = n3 ? o2 : i2, e3.writeDoubleBE = n3 ? i2 : o2, e3.readDoubleLE = n3 ? a : s, e3.readDoubleBE = n3 ? s : a;
            }() : function() {
              function t3(e4, t4, r3, n3, o2, i2) {
                var a2 = n3 < 0 ? 1 : 0;
                if (a2 && (n3 = -n3), 0 === n3)
                  e4(0, o2, i2 + t4), e4(1 / n3 > 0 ? 0 : 2147483648, o2, i2 + r3);
                else if (isNaN(n3))
                  e4(0, o2, i2 + t4), e4(2146959360, o2, i2 + r3);
                else if (n3 > 17976931348623157e292)
                  e4(0, o2, i2 + t4), e4((a2 << 31 | 2146435072) >>> 0, o2, i2 + r3);
                else {
                  var s;
                  if (n3 < 22250738585072014e-324)
                    e4((s = n3 / 5e-324) >>> 0, o2, i2 + t4), e4((a2 << 31 | s / 4294967296) >>> 0, o2, i2 + r3);
                  else {
                    var c = Math.floor(Math.log(n3) / Math.LN2);
                    1024 === c && (c = 1023), e4(4503599627370496 * (s = n3 * Math.pow(2, -c)) >>> 0, o2, i2 + t4), e4((a2 << 31 | c + 1023 << 20 | 1048576 * s & 1048575) >>> 0, o2, i2 + r3);
                  }
                }
              }
              function a(e4, t4, r3, n3, o2) {
                var i2 = e4(n3, o2 + t4), a2 = e4(n3, o2 + r3), s = 2 * (a2 >> 31) + 1, c = a2 >>> 20 & 2047, u = 4294967296 * (1048575 & a2) + i2;
                return 2047 === c ? u ? NaN : s * (1 / 0) : 0 === c ? 5e-324 * s * u : s * Math.pow(2, c - 1075) * (u + 4503599627370496);
              }
              e3.writeDoubleLE = t3.bind(null, r2, 0, 4), e3.writeDoubleBE = t3.bind(null, n2, 4, 0), e3.readDoubleLE = a.bind(null, o, 0, 4), e3.readDoubleBE = a.bind(null, i, 4, 0);
            }(), e3;
          }
          function r2(e3, t3, r3) {
            t3[r3] = 255 & e3, t3[r3 + 1] = e3 >>> 8 & 255, t3[r3 + 2] = e3 >>> 16 & 255, t3[r3 + 3] = e3 >>> 24;
          }
          function n2(e3, t3, r3) {
            t3[r3] = e3 >>> 24, t3[r3 + 1] = e3 >>> 16 & 255, t3[r3 + 2] = e3 >>> 8 & 255, t3[r3 + 3] = 255 & e3;
          }
          function o(e3, t3) {
            return (e3[t3] | e3[t3 + 1] << 8 | e3[t3 + 2] << 16 | e3[t3 + 3] << 24) >>> 0;
          }
          function i(e3, t3) {
            return (e3[t3] << 24 | e3[t3 + 1] << 16 | e3[t3 + 2] << 8 | e3[t3 + 3]) >>> 0;
          }
          e2.exports = t2(t2);
        }, 7199: function(e2, t2, r2) {
          "use strict";
          e2.exports = function(e3) {
            try {
              var t3 = r2(822)(e3);
              if (t3 && (t3.length || Object.keys(t3).length))
                return t3;
            } catch (e4) {
            }
            return null;
          };
        }, 822: function(e2) {
          function t2(e3) {
            var t3 = new Error("Cannot find module '" + e3 + "'");
            throw t3.code = "MODULE_NOT_FOUND", t3;
          }
          t2.keys = function() {
            return [];
          }, t2.resolve = t2, t2.id = 822, e2.exports = t2;
        }, 8626: function(e2, t2) {
          "use strict";
          var r2 = t2, n2 = r2.isAbsolute = function(e3) {
            return /^(?:\/|\w+:)/.test(e3);
          }, o = r2.normalize = function(e3) {
            var t3 = (e3 = e3.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), r3 = n2(e3), o2 = "";
            r3 && (o2 = t3.shift() + "/");
            for (var i = 0; i < t3.length; )
              ".." === t3[i] ? i > 0 && ".." !== t3[i - 1] ? t3.splice(--i, 2) : r3 ? t3.splice(i, 1) : ++i : "." === t3[i] ? t3.splice(i, 1) : ++i;
            return o2 + t3.join("/");
          };
          r2.resolve = function(e3, t3, r3) {
            return r3 || (t3 = o(t3)), n2(t3) ? t3 : (r3 || (e3 = o(e3)), (e3 = e3.replace(/(?:\/|^)[^/]+$/, "")).length ? o(e3 + "/" + t3) : t3);
          };
        }, 6662: function(e2) {
          "use strict";
          e2.exports = function(e3, t2, r2) {
            var n2 = r2 || 8192, o = n2 >>> 1, i = null, a = n2;
            return function(r3) {
              if (r3 < 1 || r3 > o)
                return e3(r3);
              a + r3 > n2 && (i = e3(n2), a = 0);
              var s = t2.call(i, a, a += r3);
              return 7 & a && (a = 1 + (7 | a)), s;
            };
          };
        }, 4997: function(e2, t2) {
          "use strict";
          var r2 = t2;
          r2.length = function(e3) {
            for (var t3 = 0, r3 = 0, n2 = 0; n2 < e3.length; ++n2)
              (r3 = e3.charCodeAt(n2)) < 128 ? t3 += 1 : r3 < 2048 ? t3 += 2 : 55296 == (64512 & r3) && 56320 == (64512 & e3.charCodeAt(n2 + 1)) ? (++n2, t3 += 4) : t3 += 3;
            return t3;
          }, r2.read = function(e3, t3, r3) {
            if (r3 - t3 < 1)
              return "";
            for (var n2, o = null, i = [], a = 0; t3 < r3; )
              (n2 = e3[t3++]) < 128 ? i[a++] = n2 : n2 > 191 && n2 < 224 ? i[a++] = (31 & n2) << 6 | 63 & e3[t3++] : n2 > 239 && n2 < 365 ? (n2 = ((7 & n2) << 18 | (63 & e3[t3++]) << 12 | (63 & e3[t3++]) << 6 | 63 & e3[t3++]) - 65536, i[a++] = 55296 + (n2 >> 10), i[a++] = 56320 + (1023 & n2)) : i[a++] = (15 & n2) << 12 | (63 & e3[t3++]) << 6 | 63 & e3[t3++], a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), a = 0);
            return o ? (a && o.push(String.fromCharCode.apply(String, i.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, i.slice(0, a));
          }, r2.write = function(e3, t3, r3) {
            for (var n2, o, i = r3, a = 0; a < e3.length; ++a)
              (n2 = e3.charCodeAt(a)) < 128 ? t3[r3++] = n2 : n2 < 2048 ? (t3[r3++] = n2 >> 6 | 192, t3[r3++] = 63 & n2 | 128) : 55296 == (64512 & n2) && 56320 == (64512 & (o = e3.charCodeAt(a + 1))) ? (n2 = 65536 + ((1023 & n2) << 10) + (1023 & o), ++a, t3[r3++] = n2 >> 18 | 240, t3[r3++] = n2 >> 12 & 63 | 128, t3[r3++] = n2 >> 6 & 63 | 128, t3[r3++] = 63 & n2 | 128) : (t3[r3++] = n2 >> 12 | 224, t3[r3++] = n2 >> 6 & 63 | 128, t3[r3++] = 63 & n2 | 128);
            return r3 - i;
          };
        }, 4188: function(e2, t2, r2) {
          var n2, o, i;
          !function(a) {
            "use strict";
            if (null != t2 && "number" != typeof t2.nodeType)
              e2.exports = a();
            else if (null != r2.amdO)
              o = [], void 0 === (i = "function" == typeof (n2 = a) ? n2.apply(t2, o) : n2) || (e2.exports = i);
            else {
              var s = a(), c = "undefined" != typeof self ? self : $.global;
              "function" != typeof c.btoa && (c.btoa = s.btoa), "function" != typeof c.atob && (c.atob = s.atob);
            }
          }(function() {
            "use strict";
            var e3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            function t3(e4) {
              this.message = e4;
            }
            return t3.prototype = new Error(), t3.prototype.name = "InvalidCharacterError", { btoa: function(r3) {
              for (var n3, o2, i2 = String(r3), a = 0, s = e3, c = ""; i2.charAt(0 | a) || (s = "=", a % 1); c += s.charAt(63 & n3 >> 8 - a % 1 * 8)) {
                if ((o2 = i2.charCodeAt(a += 3 / 4)) > 255)
                  throw new t3("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                n3 = n3 << 8 | o2;
              }
              return c;
            }, atob: function(r3) {
              var n3 = String(r3).replace(/[=]+$/, "");
              if (n3.length % 4 == 1)
                throw new t3("'atob' failed: The string to be decoded is not correctly encoded.");
              for (var o2, i2, a = 0, s = 0, c = ""; i2 = n3.charAt(s++); ~i2 && (o2 = a % 4 ? 64 * o2 + i2 : i2, a++ % 4) ? c += String.fromCharCode(255 & o2 >> (-2 * a & 6)) : 0)
                i2 = e3.indexOf(i2);
              return c;
            } };
          });
        }, 9667: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { addUsersToChatRoom: function() {
            return y;
          }, addUsersToChatRoomAllowlist: function() {
            return V;
          }, addUsersToChatRoomWhitelist: function() {
            return z;
          }, blockChatRoomMember: function() {
            return x;
          }, blockChatRoomMembers: function() {
            return D;
          }, chatRoomBlockMulti: function() {
            return L;
          }, chatRoomBlockSingle: function() {
            return P;
          }, createChatRoom: function() {
            return p;
          }, deleteChatRoomSharedFile: function() {
            return ae;
          }, destroyChatRoom: function() {
            return d;
          }, disableSendChatRoomMsg: function() {
            return K;
          }, enableSendChatRoomMsg: function() {
            return q;
          }, fetchChatRoomAnnouncement: function() {
            return ne;
          }, fetchChatRoomSharedFileList: function() {
            return se;
          }, getChatRoomAdmin: function() {
            return S;
          }, getChatRoomAllowlist: function() {
            return $2;
          }, getChatRoomAttributes: function() {
            return ue;
          }, getChatRoomBlacklist: function() {
            return W;
          }, getChatRoomBlacklistNew: function() {
            return F;
          }, getChatRoomBlocklist: function() {
            return Z;
          }, getChatRoomDetails: function() {
            return h;
          }, getChatRoomMuteList: function() {
            return w;
          }, getChatRoomMuted: function() {
            return k;
          }, getChatRoomMutelist: function() {
            return U;
          }, getChatRoomSharedFilelist: function() {
            return ce;
          }, getChatRoomWhitelist: function() {
            return Q;
          }, getChatRooms: function() {
            return l;
          }, getJoinedChatRooms: function() {
            return fe;
          }, isChatRoomWhiteUser: function() {
            return ee;
          }, isInChatRoomAllowlist: function() {
            return te;
          }, isInChatRoomMutelist: function() {
            return re;
          }, joinChatRoom: function() {
            return T;
          }, leaveChatRoom: function() {
            return R;
          }, listChatRoomMember: function() {
            return I;
          }, listChatRoomMembers: function() {
            return O;
          }, modifyChatRoom: function() {
            return f;
          }, muteChatRoomMember: function() {
            return N;
          }, quitChatRoom: function() {
            return _;
          }, removeChatRoomAdmin: function() {
            return C;
          }, removeChatRoomAllowlistMember: function() {
            return Y;
          }, removeChatRoomAttribute: function() {
            return he;
          }, removeChatRoomAttributes: function() {
            return de;
          }, removeChatRoomBlockMulti: function() {
            return B;
          }, removeChatRoomBlockSingle: function() {
            return j;
          }, removeChatRoomMember: function() {
            return g;
          }, removeChatRoomMembers: function() {
            return v;
          }, removeChatRoomWhitelistMember: function() {
            return J;
          }, removeMultiChatRoomMember: function() {
            return E;
          }, removeMuteChatRoomMember: function() {
            return b;
          }, removeSingleChatRoomMember: function() {
            return m;
          }, rmUsersFromChatRoomWhitelist: function() {
            return X;
          }, setChatRoomAdmin: function() {
            return A;
          }, setChatRoomAttribute: function() {
            return pe;
          }, setChatRoomAttributes: function() {
            return le;
          }, unblockChatRoomMember: function() {
            return G;
          }, unblockChatRoomMembers: function() {
            return H;
          }, unmuteChatRoomMember: function() {
            return M;
          }, updateChatRoomAnnouncement: function() {
            return oe;
          }, uploadChatRoomSharedFile: function() {
            return ie;
          } }), r2(1539), r2(8674), r2(8309), r2(2526), r2(1817), r2(2222), r2(9753), r2(9600), r2(1249), r2(4916), r2(3123), r2(2165), r2(6992), r2(8783), r2(3948);
          var n2 = r2(5531), o = r2(7252), i = r2(4024), a = r2(3246), s = r2(7360), c = r2(1595);
          function u(e3) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, u(e3);
          }
          function l(e3) {
            var t3 = this;
            if ("number" != typeof e3.pagenum || "number" != typeof e3.pagesize)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var u2 = { pagenum: e3.pagenum || 1, pagesize: e3.pagesize || 20 }, l2 = this.context, p2 = l2.orgName, d2 = l2.appName, h2 = l2.accessToken, f2 = { url: this.apiUrl + "/" + p2 + "/" + d2 + "/chatrooms", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + h2 }, data: u2, success: function(t4) {
              "function" == typeof e3.success && e3.success(t4);
            }, error: function(r4) {
              r4.error && r4.error_description && t3.onError && t3.onError({ type: n2.E.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: r4.error_description, data: r4 }), "function" == typeof e3.error && e3.error(r4);
            } };
            return s.kg.debug("Call getChatRooms", e3), i.hj.call(this, f2, c.fI.GET_CHATROOM_LIST);
          }
          function p(e3) {
            if ("string" != typeof e3.name)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { name: e3.name, description: e3.description, maxusers: e3.maxusers, owner: this.user, members: e3.members }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, d2 = u2.accessToken, h2 = u2.jid, f2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/chatrooms?resource=").concat(h2.clientResource), dataType: "json", type: "POST", data: JSON.stringify(r3), headers: { Authorization: "Bearer " + (e3.token || d2), "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call createChatRoom", e3), i.hj.call(this, f2, c.fI.CREATE_CHATROOM);
          }
          function d(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(e3.chatRoomId, "?resource=").concat(d2.clientResource, "&version=v3"), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + (e3.token || p2) }, success: e3.success, error: e3.error };
            return s.kg.debug("Call destroyChatRoom", e3), i.hj.call(this, h2, c.fI.DESTROY_CHATROOM);
          }
          function h(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + e3.chatRoomId, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomDetails", e3), i.hj.call(this, d2, c.fI.GET_CHATROOM_DETAIL);
          }
          function f(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { groupname: e3.chatRoomName, description: e3.description, maxusers: e3.maxusers }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "?resource=").concat(d2.clientResource), type: "PUT", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call modifyChatRoom", e3), i.hj.call(this, m2, c.fI.MODIFY_CHATROOM);
          }
          function m(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId || "string" != typeof e3.username)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomMember", e3), i.hj.call(this, m2, c.fI.REMOVE_CHATROOM_MEMBER);
          }
          var g = m;
          function E(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId || !Array.isArray(e3.users))
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.chatRoomId, u2 = e3.users.join(","), l2 = this.context, p2 = l2.orgName, d2 = l2.appName, h2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(d2, "/chatrooms/").concat(r3, "/users/").concat(u2, "?resource=").concat(f2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomMembers", e3), i.hj.call(this, m2, c.fI.MULTI_REMOVE_CHATROOM_MEMBER);
          }
          var v = E;
          function y(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId || !Array.isArray(e3.users))
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.chatRoomId, u2 = { usernames: e3.users }, l2 = this.context, p2 = l2.orgName, d2 = l2.appName, h2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(d2, "/chatrooms/").concat(r3, "/users?resource=").concat(f2.clientResource), type: "POST", data: JSON.stringify(u2), dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call addUsersToChatRoom", e3), i.hj.call(this, m2, c.fI.ADD_USERS_TO_CHATROOM);
          }
          function T(e3) {
            var t3 = e3.roomId, r3 = e3.message, i2 = void 0 === r3 ? "" : r3, c2 = e3.ext, u2 = void 0 === c2 ? "" : c2, l2 = e3.leaveOtherRooms, p2 = void 0 !== l2 && l2, d2 = e3.success, h2 = e3.error;
            if ("string" != typeof t3 || "" === t3)
              throw Error("Invalid parameter roomId");
            if ("string" != typeof u2)
              throw Error("Invalid parameter ext");
            if ("boolean" != typeof p2)
              throw Error("Invalid parameter leaveOtherRooms");
            if (!a.XZ.call(this)) {
              var f2 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(f2);
            }
            return s.kg.debug("Call joinChatRoom", e3), this.logOut ? Promise.reject({ type: n2.E.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom({ roomId: t3, ext: u2, leaveOtherRooms: p2, message: i2, success: d2, error: h2 }, "join");
          }
          function _(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            return s.kg.debug("Call leaveChatRoom", e3), this.logOut ? Promise.reject({ type: n2.E.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom(e3, "leave");
          }
          var R = _;
          function I(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (isNaN(e3.pageNum) || e3.pageNum <= 0)
              throw Error('The parameter "pageNum" should be a positive number');
            if (isNaN(e3.pageSize) || e3.pageSize <= 0)
              throw Error('The parameter "pageSize" should be a positive number');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { pagenum: e3.pageNum, pagesize: e3.pageSize }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, d2 = u2.accessToken, h2 = { url: this.apiUrl + "/" + l2 + "/" + p2 + "/chatrooms/" + e3.chatRoomId + "/users", dataType: "json", type: "GET", data: r3, headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call listChatRoomMembers", e3), i.hj.call(this, h2, c.fI.LIST_CHATROOM_MEMBERS);
          }
          var O = I;
          function S(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.chatRoomId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + d2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomAdmin", e3), i.hj.call(this, h2, c.fI.GET_CHATROOM_ADMIN);
          }
          function A(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { newadmin: e3.username }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/admin?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setChatRoomAdmin", e3), i.hj.call(this, m2, c.fI.SET_CHATROOM_ADMIN);
          }
          function C(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/admin/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomAdmin", e3), i.hj.call(this, m2, c.fI.REMOVE_CHATROOM_ADMIN);
          }
          function N(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if ("number" != typeof e3.muteDuration)
              throw Error('Invalid parameter: "muteDuration"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { usernames: [e3.username], mute_duration: e3.muteDuration }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/mute?resource=").concat(d2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, data: JSON.stringify(f2), success: e3.success, error: e3.error };
            return s.kg.debug("Call muteChatRoomMember", e3), i.hj.call(this, m2, c.fI.MUTE_CHATROOM_MEMBER);
          }
          function b(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/mute/").concat(f2, "?resource=").concat(d2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unmuteChatRoomMember", e3), i.hj.call(this, m2, c.fI.REMOVE_MUTE_CHATROOM_MEMBER);
          }
          var M = b;
          function k(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.chatRoomId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + d2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomMutelist", e3), i.hj.call(this, h2, c.fI.GET_MUTE_CHATROOM_MEMBERS);
          }
          var w = k, U = k;
          function P(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/blocks/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockChatRoomMember", e3), i.hj.call(this, m2, c.fI.SET_CHATROOM_MEMBER_TO_BLACK);
          }
          var x = P;
          function L(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { usernames: e3.usernames }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/blocks/users?resource=").concat(d2.clientResource), data: JSON.stringify(f2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Chat blockChatRoomMembers:", m2), i.hj.call(this, m2, c.fI.MULTI_SET_CHATROOM_MEMBER_TO_BLACK);
          }
          var D = L;
          function j(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/blocks/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockChatRoomMember", e3), i.hj.call(this, m2, c.fI.REMOVE_CHATROOM_MEMBER_BLACK);
          }
          var G = j;
          function B(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = e3.usernames.join(","), m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/blocks/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockChatRoomMembers", e3), i.hj.call(this, m2, c.fI.MULTI_REMOVE_CHATROOM_MEMBER_BLACK);
          }
          var H = B;
          function F(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.chatRoomId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + d2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomBlocklist", e3), i.hj.call(this, h2, c.fI.GET_CHATROOM_BLOCK_MEMBERS);
          }
          var W = F, Z = F;
          function K(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/ban?resource=").concat(d2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call disableSendChatRoomMsg", e3), i.hj.call(this, f2, c.fI.DISABLED_CHATROOM_SEND_MSG);
          }
          function q(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/ban?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call enableSendChatRoomMsg", e3), i.hj.call(this, f2, c.fI.ENABLE_CHATROOM_SEND_MSG);
          }
          function z(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { usernames: e3.users }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/white/users?resource=").concat(d2.clientResource), type: "POST", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call addUsersToChatRoomWhitelist", e3), i.hj.call(this, m2, c.fI.ADD_USERS_TO_CHATROOM);
          }
          var V = z;
          function X(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.chatRoomId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/white/users/").concat(e3.userName, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeChatRoomAllowlistMember", e3), i.hj.call(this, f2, c.fI.REMOVE_CHATROOM_WHITE_USERS);
          }
          var J = X, Y = X;
          function Q(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.chatRoomId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + d2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getChatRoomAllowlist", e3), i.hj.call(this, h2, c.fI.GET_CHATROOM_WHITE_USERS);
          }
          var $2 = Q;
          function ee(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.chatRoomId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatrooms/" + d2 + "/white/users/" + e3.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call isInChatRoomAllowlist", e3), i.hj.call(this, h2, c.fI.CHECK_CHATROOM_WHITE_USER);
          }
          var te = ee;
          function re(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.accessToken, p2 = r3.userId, d2 = { url: this.apiUrl + "/" + c2 + "/" + u2 + "/sdk/chatrooms/" + e3.chatRoomId + "/mute/" + p2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + l2 } };
            return s.kg.debug("Call isInChatRoomMutelist", e3), i.hj.call(this, d2).then(function(e4) {
              return { type: e4.type, data: e4.data };
            });
          }
          function ne(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.roomId, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call fetchChatRoomAnnouncement", e3), i.hj.call(this, h2, c.fI.GET_CHATROOM_ANN);
          }
          function oe(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if ("string" != typeof e3.announcement)
              throw Error('Invalid parameter: "announcement"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.roomId, f2 = { announcement: e3.announcement }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/announcement?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call updateChatRoomAnnouncement:", e3), i.hj.call(this, m2, c.fI.UPDATE_CHATROOM_ANN);
          }
          function ie(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if ("object" !== u(e3.file))
              throw Error('Invalid parameter: "file"');
            if (a.XZ.call(this)) {
              var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = t3.accessToken, l2 = t3.jid, p2 = e3.roomId;
              i.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r3, "/").concat(n3, "/chatrooms/").concat(p2, "/share_files?resource=").concat(l2.clientResource), onFileUploadProgress: e3.onFileUploadProgress, onFileUploadComplete: e3.onFileUploadComplete, onFileUploadError: e3.onFileUploadError, onFileUploadCanceled: e3.onFileUploadCanceled, accessToken: o2, apiUrl: this.apiUrl, file: e3.file, appKey: this.context.appKey }, c.fI.UPLOAD_CHATROOM_FILE), s.kg.debug("Call uploadChatRoomSharedFile", e3);
            }
          }
          function ae(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if ("string" != typeof e3.fileId || "" === e3.fileId)
              throw Error('Invalid parameter: "fileId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.roomId, f2 = e3.fileId, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(h2, "/share_files/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call deleteChatRoomSharedFile", e3), i.hj.call(this, m2, c.fI.DELETE_CHATROOM_FILE);
          }
          function se(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.roomId, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatrooms/").concat(d2, "/share_files"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json", accept: "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call fetchChatRoomSharedFileList", e3), i.hj.call(this, h2, c.fI.GET_CHATROOM_FILES);
          }
          var ce = se;
          function ue(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (e3.attributeKeys && !Array.isArray(e3.attributeKeys))
              throw Error('"Invalid parameter attributeKeys": ' + e3.attributeKeys);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = (r3.jid, e3.chatRoomId), h2 = { keys: e3.attributeKeys }, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/metadata/chatroom/").concat(d2), type: "POST", dataType: "json", data: JSON.stringify(h2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" } };
            return s.kg.debug("Call getChatRoomAttributes:", e3), i.hj.call(this, f2, c.fI.GET_CHATROOM_ATTR).then(function(e4) {
              return { data: e4.data, type: e4.type };
            });
          }
          function le(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if ("object" !== u(e3.attributes))
              throw Error("Invalid parameter attributes: " + e3.attributes);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, l2 = r3.orgName, p2 = r3.appName, d2 = r3.accessToken, h2 = r3.userId, f2 = e3.chatRoomId, m2 = e3.attributes, g2 = e3.autoDelete, E2 = void 0 === g2 || g2, v2 = e3.isForced ? "/forced" : "", y2 = { metaData: m2, autoDelete: E2 ? "DELETE" : "NO_DELETE" }, T2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/metadata/chatroom/").concat(f2, "/user/").concat(h2) + v2, type: "PUT", dataType: "json", data: JSON.stringify(y2), headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" } };
            return s.kg.debug("Call setChatRoomAttributes:", e3), i.hj.call(this, T2, c.fI.SET_CHATROOM_ATTR).then(function(e4) {
              return (0, a._W)(e4);
            });
          }
          function pe(e3) {
            var t3;
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if ("string" != typeof e3.attributeKey || "" === e3.attributeKey)
              throw Error("Invalid parameter attributeKey: " + e3.attributeKey);
            if ("string" != typeof e3.attributeValue || "" === e3.attributeValue)
              throw Error("Invalid parameter attributeValue: " + e3.attributeValue);
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var u2 = this.context, l2 = u2.orgName, p2 = u2.appName, d2 = u2.accessToken, h2 = u2.userId, f2 = e3.chatRoomId, m2 = e3.attributeKey, g2 = e3.attributeValue, E2 = e3.autoDelete, v2 = void 0 === E2 || E2, y2 = e3.isForced ? "/forced" : "", T2 = { metaData: (t3 = {}, t3[m2] = g2, t3), autoDelete: v2 ? "DELETE" : "NO_DELETE" }, _2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/metadata/chatroom/").concat(f2, "/user/").concat(h2) + y2, type: "PUT", dataType: "json", data: JSON.stringify(T2), headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" } };
            return s.kg.debug("Call setChatRoomAttribute:", e3), i.hj.call(this, _2, c.fI.SET_CHATROOM_ATTR).then(function(e4) {
              var t4 = (0, a.H7)(e4);
              if (t4)
                throw t4;
            });
          }
          function de(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (!Array.isArray(e3.attributeKeys))
              throw Error('"Invalid parameter attributes": ' + e3.attributeKeys);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.userId, h2 = e3.chatRoomId, f2 = e3.attributeKeys, m2 = e3.isForced ? "/forced" : "", g2 = { keys: f2 }, E2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/metadata/chatroom/").concat(h2, "/user/").concat(d2) + m2, type: "DELETE", dataType: "json", data: JSON.stringify(g2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" } };
            return s.kg.debug("Call removeChatRoomAttributes:", e3), i.hj.call(this, E2, c.fI.DELETE_CHATROOM_ATTR).then(function(e4) {
              return (0, a._W)(e4);
            });
          }
          function he(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if ("string" != typeof e3.attributeKey || "" === e3.attributeKey)
              throw Error('"Invalid parameter attributeKey": ' + e3.attributeKey);
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.userId, h2 = e3.chatRoomId, f2 = e3.attributeKey, m2 = e3.isForced ? "/forced" : "", g2 = { keys: [f2] }, E2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/metadata/chatroom/").concat(h2, "/user/").concat(d2) + m2, type: "DELETE", dataType: "json", data: JSON.stringify(g2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" } };
            return s.kg.debug("Call removeChatRoomAttribute:", e3), i.hj.call(this, E2, c.fI.DELETE_CHATROOM_ATTR).then(function(e4) {
              var t4 = (0, a.H7)(e4);
              if (t4)
                throw t4;
            });
          }
          function fe(e3) {
            var t3 = this, r3 = e3 || {}, u2 = r3.pageNum, l2 = r3.pageSize;
            if (isNaN(u2) || u2 <= 0)
              throw Error("Invalid parameter pageNum:".concat(u2));
            if (isNaN(l2) || l2 <= 0)
              throw Error("Invalid parameter pageSize:".concat(l2));
            if (!a.XZ.call(this)) {
              var p2 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(p2);
            }
            var d2 = { pagenum: u2, pagesize: l2, detail: true }, h2 = this.context, f2 = h2.orgName, m2 = h2.appName, g2 = h2.accessToken, E2 = { url: "".concat(this.apiUrl, "/").concat(f2, "/").concat(m2, "/users/").concat(this.user, "/joined_chatrooms"), dataType: "json", type: "GET", data: d2, headers: { Authorization: "Bearer " + g2, "Content-Type": "application/json" } };
            return s.kg.debug("Call getJoinedChatRooms", e3), i.hj.call(this, E2, c.fI.GET_USER_JOINED_CHATROOM).then(function(e4) {
              var r4 = (e4.data || []).map(function(e5) {
                var r5 = e5.id, n3 = e5.title, o2 = e5.owner, i2 = e5.created, a2 = e5.description, s2 = e5.max_users;
                return { id: r5, name: n3, owner: o2.split("".concat(t3.appKey, "_"))[1], created: i2, description: a2, maxusers: s2 };
              });
              return { type: e4.type, data: r4 };
            });
          }
        }, 4363: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { U: function() {
            return s;
          }, w: function() {
            return c;
          } }), r2(9601), r2(2772), r2(1249);
          var n2 = r2(7360), o = r2(8161), i = r2(4024), a = function() {
            return a = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, a.apply(this, arguments);
          }, s = { chat: "singleChat", chatroom: "chatRoom", groupchat: "groupChat", singleChat: "singleChat", chatRoom: "chatRoom", groupChat: "groupChat" };
          function c(e3, t3) {
            var r3, c2, u, l = t3 || {}, p = l.formatCustomExts, d = void 0 === p || p, h = l.formatChatType, f = void 0 !== h && h, m = e3.id, g = e3.payload, E = e3.timestamp, v = e3.to, y = g.bodies && g.bodies.length > 0 ? g.bodies[0] : {}, T = {}, _ = {}, R = g.type ? g.type : v.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
            R = "chat" === R ? "singleChat" : R, f && g.type && (R = s[g.type]);
            var I = "";
            switch (y.type) {
              case "txt":
                if (Object.prototype.hasOwnProperty.call(y, "subType") && "sub_combine" === y.subType)
                  I = o.t.call(this, { remotePath: null == y ? void 0 : y.url, secret: null == y ? void 0 : y.secret }), T = { id: m, type: "combine", chatType: R, to: g.to, from: g.from, ext: g.ext, time: E, title: y.title || "", summary: y.summary || "", url: I || "", secret: y.secret || "", file_length: y.file_length || 0, filename: y.filename || "", compatibleText: y.msg, combineLevel: y.combineLevel || 0 };
                else {
                  var O = null === (r3 = null == g ? void 0 : g.meta) || void 0 === r3 ? void 0 : r3.edit_msg;
                  if (T = { id: m, type: "txt", chatType: R, msg: y.msg || "", to: g.to || "", from: g.from, time: E, ext: g.ext }, O) {
                    var S = O.edit_time, A = O.operator, C = O.count;
                    T.modifiedInfo = { operationTime: S, operatorId: A, operationCount: C };
                  }
                }
                break;
              case "img":
                I = this.useOwnUploadFun ? null == y ? void 0 : y.url : o.t.call(this, { remotePath: null == y ? void 0 : y.url, secret: null == y ? void 0 : y.secret }), T = { id: m, type: "img", chatType: R, to: g.to, from: g.from, time: E, ext: g.ext, width: (null === (c2 = y.size) || void 0 === c2 ? void 0 : c2.width) || 0, height: (null === (u = y.size) || void 0 === u ? void 0 : u.height) || 0, thumb: this.useOwnUploadFun ? "" : "".concat(I, "&thumbnail=true"), thumb_secret: y.secret, secret: y.secret || "", url: I || "", file_length: y.file_length || 0, file: {} };
                break;
              case "video":
                I = this.useOwnUploadFun ? null == y ? void 0 : y.url : o.t.call(this, { remotePath: null == y ? void 0 : y.url, secret: null == y ? void 0 : y.secret }), T = { id: m, type: "video", chatType: R, from: g.from, to: g.to, thumb: i.P6.formatAttachUrl.call(this, y.thumb), thumb_secret: y.thumb_secret || "", url: I || "", secret: y.secret || "", filename: y.filename, length: y.length || 0, file: {}, file_length: y.file_length || 0, filetype: g.ext.file_type || "", ext: g.ext, time: E };
                break;
              case "loc":
                T = { id: m, type: "loc", chatType: R, from: g.from, to: g.to, buildingName: y.buildingName || "", addr: y.addr, lat: y.lat, lng: y.lng, ext: g.ext, time: E };
                break;
              case "audio":
                I = this.useOwnUploadFun ? null == y ? void 0 : y.url : o.t.call(this, { remotePath: null == y ? void 0 : y.url, secret: null == y ? void 0 : y.secret }), T = { id: m, type: "audio", chatType: R, from: g.from, to: g.to, secret: y.secret || "", ext: g.ext, time: E, url: I || "", file: {}, filename: y.filename, length: y.length || 0, file_length: y.file_length || 0, filetype: g.ext.file_type || "" };
                break;
              case "file":
                I = this.useOwnUploadFun ? null == y ? void 0 : y.url : o.t.call(this, { remotePath: null == y ? void 0 : y.url, secret: null == y ? void 0 : y.secret }), T = { id: m, type: "file", chatType: R, from: g.from, to: g.to, ext: g.ext, time: E, url: I || "", secret: y.secret || "", file: {}, filename: y.filename || "", file_length: y.file_length || 0, filetype: g.ext.file_type || "" };
                break;
              case "cmd":
                T = { id: m, type: "cmd", chatType: R, from: g.from, to: g.to, ext: g.ext, time: E, action: y.action || "" };
                break;
              case "custom":
                var N = y.customExts || {};
                d && y.customExts && (N = {}, y.customExts.map(function(e4) {
                  N = a(a({}, N), e4);
                })), T = { id: m, type: "custom", chatType: R, from: g.from, to: g.to, ext: g.ext, time: E, customEvent: y.customEvent || "", customExts: N };
                break;
              case "combine":
                I = o.t.call(this, { remotePath: null == y ? void 0 : y.url, secret: null == y ? void 0 : y.secret }), T = { id: m, type: "combine", chatType: R, msg: y.msg || "", to: g.to || "", from: g.from, time: E, ext: g.ext, title: y.title || "", summary: y.summary || "", url: I || "", compatibleText: y.text, combineLevel: y.combineLevel || 0, secret: y.secret || "", filename: y.filename || "", file_length: y.file_length || 0 };
                break;
              default:
                n2.kg.error("unexpected message: ".concat(e3));
            }
            if (g.msgConfig && (_.msgConfig = g.msgConfig), null == g ? void 0 : g.meta) {
              var b = g.meta;
              b.thread && (_.chatThread = { messageId: b.thread.msg_parent_id, parentId: b.thread.muc_parent_id, chatThreadName: b.thread.thread_name }), b.reaction && (_.reactions = b.reaction), b.translations && (_.translations = b.translations);
            }
            return a(a({}, T), _);
          }
        }, 2856: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { acceptGroupInvite: function() {
            return W;
          }, acceptGroupJoinRequest: function() {
            return G;
          }, addUsersToGroupAllowlist: function() {
            return Ee;
          }, addUsersToGroupWhitelist: function() {
            return ge;
          }, agreeInviteIntoGroup: function() {
            return F;
          }, agreeJoinGroup: function() {
            return j;
          }, blockGroup: function() {
            return f;
          }, blockGroupMember: function() {
            return oe;
          }, blockGroupMembers: function() {
            return ae;
          }, blockGroupMessages: function() {
            return m;
          }, changeGroupOwner: function() {
            return _;
          }, changeOwner: function() {
            return T;
          }, createGroup: function() {
            return h;
          }, createGroupNew: function() {
            return d;
          }, deleteGroupSharedFile: function() {
            return ke;
          }, destroyGroup: function() {
            return w;
          }, disableSendGroupMsg: function() {
            return fe;
          }, dissolveGroup: function() {
            return k;
          }, downloadGroupSharedFile: function() {
            return Pe;
          }, enableSendGroupMsg: function() {
            return me;
          }, fetchGroupAnnouncement: function() {
            return Ne;
          }, fetchGroupSharedFileList: function() {
            return we;
          }, getGroup: function() {
            return v;
          }, getGroupAdmin: function() {
            return A;
          }, getGroupAllowlist: function() {
            return Re;
          }, getGroupBlacklist: function() {
            return de;
          }, getGroupBlacklistNew: function() {
            return pe;
          }, getGroupBlocklist: function() {
            return he;
          }, getGroupInfo: function() {
            return R;
          }, getGroupMemberAttributes: function() {
            return Le;
          }, getGroupMembersAttributes: function() {
            return De;
          }, getGroupMsgReadUser: function() {
            return Ce;
          }, getGroupMuteList: function() {
            return te;
          }, getGroupMutelist: function() {
            return re;
          }, getGroupSharedFilelist: function() {
            return Ue;
          }, getGroupWhitelist: function() {
            return _e;
          }, getJoinedGroups: function() {
            return y;
          }, getMuted: function() {
            return ee;
          }, getPublicGroups: function() {
            return E;
          }, groupBlockMulti: function() {
            return ie;
          }, groupBlockSingle: function() {
            return ne;
          }, inviteToGroup: function() {
            return x;
          }, inviteUsersToGroup: function() {
            return L;
          }, isGroupWhiteUser: function() {
            return Ie;
          }, isInGroupAllowlist: function() {
            return Se;
          }, isInGroupMutelist: function() {
            return Ae;
          }, isInGroupWhiteList: function() {
            return Oe;
          }, joinGroup: function() {
            return D;
          }, leaveGroup: function() {
            return P;
          }, listGroupMember: function() {
            return O;
          }, listGroupMembers: function() {
            return S;
          }, listGroups: function() {
            return g;
          }, modifyGroup: function() {
            return I;
          }, mute: function() {
            return J;
          }, muteGroupMember: function() {
            return Y;
          }, quitGroup: function() {
            return U;
          }, rejectGroupInvite: function() {
            return K;
          }, rejectGroupJoinRequest: function() {
            return H;
          }, rejectInviteIntoGroup: function() {
            return Z;
          }, rejectJoinGroup: function() {
            return B;
          }, removeAdmin: function() {
            return b;
          }, removeGroupAdmin: function() {
            return M;
          }, removeGroupAllowlistMember: function() {
            return Te;
          }, removeGroupBlockMulti: function() {
            return ue;
          }, removeGroupBlockSingle: function() {
            return se;
          }, removeGroupMember: function() {
            return z;
          }, removeGroupMembers: function() {
            return X;
          }, removeGroupWhitelistMember: function() {
            return ye;
          }, removeMultiGroupMember: function() {
            return V;
          }, removeMute: function() {
            return Q;
          }, removeSingleGroupMember: function() {
            return q;
          }, rmUsersFromGroupWhitelist: function() {
            return ve;
          }, setAdmin: function() {
            return C;
          }, setGroupAdmin: function() {
            return N;
          }, setGroupMemberAttributes: function() {
            return xe;
          }, unblockGroupMember: function() {
            return ce;
          }, unblockGroupMembers: function() {
            return le;
          }, unmuteGroupMember: function() {
            return $2;
          }, updateGroupAnnouncement: function() {
            return be;
          }, uploadGroupSharedFile: function() {
            return Me;
          } }), r2(1539), r2(8674), r2(2526), r2(1817), r2(2165), r2(6992), r2(8783), r2(3948), r2(2222), r2(6699), r2(2023), r2(9554), r2(4747), r2(8309), r2(9753), r2(9600);
          var n2 = r2(5531), o = r2(7252), i = r2(4024), a = r2(3246), s = r2(7360), c = r2(1595);
          function u(e3) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, u(e3);
          }
          var l = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, p = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function d(e3) {
            if (!e3 || !e3.data)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups?resource=").concat(d2.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ owner: this.user, groupname: e3.data.groupname, desc: e3.data.desc, members: e3.data.members, public: e3.data.public, approval: e3.data.approval, allowinvites: e3.data.allowinvites, invite_need_confirm: e3.data.inviteNeedConfirm, maxusers: e3.data.maxusers, custom: e3.data.ext }), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: function(t4) {
              e3.success && e3.success(t4);
            }, error: e3.error };
            return s.kg.debug("Call createGroup:", e3), i.hj.call(this, h2, c.fI.CREATE_GROUP);
          }
          var h = d;
          function f(e3) {
            var t3;
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var u2 = this.context, l2 = u2.orgName, p2 = u2.appName, d2 = u2.accessToken, h2 = u2.jid, f2 = { entities: [(t3 = {}, t3["notification_ignore_" + e3.groupId] = true, t3)] }, m2 = { type: "PUT", url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/users/").concat(this.user, "?resource=").concat(h2.clientResource), data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockGroupMessages", e3), i.hj.call(this, m2, c.fI.BLOCK_GROUP);
          }
          var m = f;
          function g(e3) {
            if ("number" != typeof e3.limit)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = { limit: e3.limit, cursor: e3.cursor };
            e3.cursor || delete d2.cursor;
            var h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/publicchatgroups", type: "GET", dataType: "json", data: d2, headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call listGroups", e3), i.hj.call(this, h2, c.fI.LIST_GROUP);
          }
          var E = g;
          function v(e3) {
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/users/" + this.user + "/joined_chatgroups", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return s.kg.debug("Call getJoinedGroups", e3), i.hj.call(this, d2, c.fI.GET_USER_GROUP);
          }
          function y(e3) {
            if ("number" != typeof e3.pageNum || "number" != typeof e3.pageSize)
              throw Error('Invalid parameter: "pageNum or pageSize"');
            if (e3.pageNum < 0 || e3.pageSize < 0)
              throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.needAffiliations || e3.needRole ? "/chatgroups/user/".concat(this.user, "?pagenum=").concat(e3.pageNum, "&pagesize=").concat(e3.pageSize, "&needAffiliations=").concat(e3.needAffiliations, "&needRole=").concat(e3.needRole) : "/users/".concat(this.user, "/joined_chatgroups?pagenum=").concat(e3.pageNum, "&pagesize=").concat(e3.pageSize), h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + d2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return s.kg.debug("Call getGroup", e3), i.hj.call(this, h2, c.fI.GET_USER_GROUP).then(function(e4) {
              var t4 = e4.uri, r4 = e4.entities, n3 = [];
              return t4.includes("joined_chatgroups") || (r4.forEach(function(e5) {
                var t5 = { affiliationsCount: e5.affiliations_count, groupName: e5.name, groupId: e5.groupId, role: e5.permission, disabled: e5.disabled, approval: e5.membersonly, allowInvites: e5.allowinvites, description: e5.description, maxUsers: e5.maxusers, public: e5.public };
                n3.push(t5);
              }), e4.entities = n3), e4;
            });
          }
          function T(e3) {
            if ("string" != typeof e3.groupId || "string" != typeof e3.newOwner)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { newowner: e3.newOwner }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, d2 = u2.accessToken, h2 = u2.jid, f2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/chatgroups/").concat(e3.groupId, "?resource=").concat(h2.clientResource), type: "PUT", dataType: "json", headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, data: JSON.stringify(r3), success: e3.success, error: e3.error };
            return s.kg.debug("Call changeOwner", e3), i.hj.call(this, f2, c.fI.CHANGE_OWNER);
          }
          var _ = T;
          function R(e3) {
            if ("string" != typeof e3.groupId && !Array.isArray(e3.groupId))
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + e3.groupId + "?joined_time=true", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupInfo", e3), i.hj.call(this, d2, c.fI.GET_GROUP_INFO);
          }
          function I(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error("Invalid parameter");
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { groupname: e3.groupName, description: e3.description, custom: e3.ext }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "?resource=").concat(d2.clientResource), type: "PUT", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call modifyGroup", e3), i.hj.call(this, m2, c.fI.MODIFY_GROUP);
          }
          function O(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (isNaN(e3.pageNum) || e3.pageNum <= 0)
              throw Error('The parameter "pageNum" should be a positive number');
            if (isNaN(e3.pageSize) || e3.pageSize <= 0)
              throw Error('The parameter "pageSize" should be a positive number');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { pagenum: e3.pageNum, pagesize: e3.pageSize }, u2 = this.context, l2 = u2.orgName, p2 = u2.appName, d2 = u2.accessToken, h2 = { url: this.apiUrl + "/" + l2 + "/" + p2 + "/chatgroups/" + e3.groupId + "/users", dataType: "json", type: "GET", data: r3, headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call listGroupMember", e3), i.hj.call(this, h2, c.fI.LIST_GROUP_MEMBER);
          }
          var S = O;
          function A(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.groupId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + d2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupAdmin", e3), i.hj.call(this, h2, c.fI.GET_GROUP_ADMIN);
          }
          function C(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { newadmin: e3.username }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/admin?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setGroupAdmin", e3), i.hj.call(this, m2, c.fI.SET_GROUP_ADMIN);
          }
          var N = C;
          function b(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/admin/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeAdmin", e3), i.hj.call(this, m2, c.fI.REMOVE_GROUP_ADMIN);
          }
          var M = b;
          function k(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "?version=v3&resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call destroyGroup", e3), i.hj.call(this, f2, c.fI.DISSOLVE_GROUP);
          }
          var w = k;
          function U(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/quit?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call quitGroup", e3), i.hj.call(this, f2, c.fI.QUIT_GROUP);
          }
          var P = U;
          function x(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.groupId, u2 = { usernames: e3.users }, l2 = this.context, p2 = l2.orgName, d2 = l2.appName, h2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(d2, "/chatgroups/").concat(r3, "/invite?resource=").concat(f2.clientResource), type: "POST", data: JSON.stringify(u2), dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call inviteUsersToGroup", e3), i.hj.call(this, m2, c.fI.INVITE_TO_GROUP);
          }
          var L = x;
          function D(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(e3.groupId, "/apply?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ message: e3.message || "" }), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call joinGroup", e3), i.hj.call(this, h2, c.fI.JOIN_GROUP);
          }
          function j(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.applicant || "" === e3.applicant)
              throw Error('Invalid parameter: "applicant"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { applicant: e3.applicant, verifyResult: true, reason: "no clue" }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/apply_verify?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call agreeJoinGroup", e3), i.hj.call(this, m2, c.fI.AGREE_JOIN_GROUP);
          }
          var G = j;
          function B(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.applicant || "" === e3.applicant)
              throw Error('Invalid parameter: "applicant"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { applicant: e3.applicant, verifyResult: false, reason: e3.reason || "" }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/apply_verify?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call rejectGroupJoinRequest", e3), i.hj.call(this, m2, c.fI.REJECT_JOIN_GROUP);
          }
          var H = B;
          function F(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.invitee || "" === e3.invitee)
              throw Error('Invalid parameter: "invitee"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { invitee: e3.invitee, verifyResult: true }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/invite_verify?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call acceptGroupInvite", e3), i.hj.call(this, m2, c.fI.AGREE_INVITE_GROUP);
          }
          var W = F;
          function Z(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.invitee || "" === e3.invitee)
              throw Error('Invalid parameter: "invitee"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { invitee: e3.invitee, verifyResult: false }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/invite_verify?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call rejectGroupInvite", e3), i.hj.call(this, m2, c.fI.REJECT_INVITE_GROUP);
          }
          var K = Z;
          function q(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = e3.groupId, u2 = e3.username, l2 = this.context, p2 = l2.orgName, d2 = l2.appName, h2 = l2.accessToken, f2 = l2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(p2, "/").concat(d2, "/chatgroups/").concat(r3, "/users/").concat(u2, "?resource=").concat(f2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeGroupMember", e3), i.hj.call(this, m2, c.fI.REMOVE_GROUP_MEMBER);
          }
          var z = q;
          function V(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = e3.users.join(","), m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeGroupMembers", e3), i.hj.call(this, m2, c.fI.MULTI_REMOVE_GROUP_MEMBER);
          }
          var X = V;
          function J(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!(Array.isArray(e3.username) || "string" == typeof e3.username && "" !== e3.username))
              throw Error('Invalid parameter: "username"');
            if ("number" != typeof e3.muteDuration)
              throw Error('Invalid parameter: "muteDuration"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { usernames: "string" == typeof e3.username ? [e3.username] : e3.username, mute_duration: e3.muteDuration }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/mute?resource=").concat(d2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, data: JSON.stringify(f2), success: e3.success, error: e3.error };
            return s.kg.debug("Call muteGroupMember", e3), i.hj.call(this, m2, c.fI.MUTE_GROUP_MEMBER);
          }
          var Y = J;
          function Q(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!(Array.isArray(e3.username) || "string" == typeof e3.username && "" !== e3.username))
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/mute/").concat(f2, "?resource=").concat(d2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unmuteGroupMember", e3), i.hj.call(this, m2, c.fI.UNMUTE_GROUP_MEMBER);
          }
          var $2 = Q;
          function ee(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.groupId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + d2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupMuteList", e3), i.hj.call(this, h2, c.fI.GET_GROUP_MUTE_LIST);
          }
          var te = ee, re = ee;
          function ne(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/blocks/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockGroupMember", e3), i.hj.call(this, m2, c.fI.BLOCK_GROUP_MEMBER);
          }
          var oe = ne;
          function ie(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { usernames: e3.usernames }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/blocks/users?resource=").concat(d2.clientResource), data: JSON.stringify(f2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call blockGroupMembers", e3), i.hj.call(this, m2, c.fI.BLOCK_GROUP_MEMBERS);
          }
          var ae = ie;
          function se(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = e3.username, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/blocks/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockGroupMember", e3), i.hj.call(this, m2, c.fI.UNBLOCK_GROUP_MEMBER);
          }
          var ce = se;
          function ue(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = e3.usernames.join(","), m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/blocks/users/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call unblockGroupMembers", e3), i.hj.call(this, m2, c.fI.UNBLOCK_GROUP_MEMBERS);
          }
          var le = ue;
          function pe(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.groupId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + d2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupBlacklist", e3), i.hj.call(this, h2, c.fI.GET_GROUP_BLACK_LIST);
          }
          var de = pe, he = pe;
          function fe(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/ban?resource=").concat(d2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call disableSendGroupMsg", e3), i.hj.call(this, f2, c.fI.DISABLED_SEND_GROUP_MSG);
          }
          function me(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/ban?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call enableSendGroupMsg", e3), i.hj.call(this, f2, c.fI.ENABLE_SEND_GROUP_MSG);
          }
          function ge(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { usernames: e3.users }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/white/users?resource=").concat(d2.clientResource), type: "POST", data: JSON.stringify(f2), dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call addUsersToGroupWhitelist", e3), i.hj.call(this, m2, c.fI.ADD_USERS_TO_GROUP_WHITE);
          }
          var Ee = ge;
          function ve(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/white/users/").concat(e3.userName, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call removeGroupAllowlistMember", e3), i.hj.call(this, f2, c.fI.REMOVE_GROUP_WHITE_MEMBER);
          }
          var ye = ve, Te = ve;
          function _e(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.groupId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + d2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupAllowlist", e3), i.hj.call(this, h2, c.fI.GET_GROUP_WHITE_LIST);
          }
          var Re = _e;
          function Ie(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.groupId, h2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + d2 + "/white/users/" + e3.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call isInGroupAllowlist", e3), i.hj.call(this, h2, c.fI.IS_IN_GROUP_WHITE_LIST);
          }
          var Oe = Ie, Se = Ie;
          function Ae(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.accessToken, p2 = r3.userId, d2 = { url: this.apiUrl + "/" + c2 + "/" + u2 + "/sdk/chatgroups/" + e3.groupId + "/mute/" + p2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + l2 } };
            return s.kg.debug("Call isInGroupMutelist", e3), i.hj.call(this, d2).then(function(e4) {
              return { type: e4.type, data: e4.data };
            });
          }
          function Ce(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.msgId || "" === e3.msgId)
              throw Error('Invalid parameter: "msgId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = { url: this.apiUrl + "/" + u2 + "/" + l2 + "/chatgroups/" + e3.groupId + "/acks/" + e3.msgId, dataType: "json", type: "GET", data: { limit: 500, key: void 0 }, headers: { Authorization: "Bearer " + p2 }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupMsgReadUser", e3), i.hj.call(this, d2, c.fI.GET_GROUP_MSG_READ_USER);
          }
          function Ne(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.groupId, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(d2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call fetchGroupAnnouncement", e3), i.hj.call(this, h2, c.fI.GET_GROUP_ANN);
          }
          function be(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.announcement)
              throw Error('Invalid parameter: "announcement"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = { announcement: e3.announcement }, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/announcement?resource=").concat(d2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call updateGroupAnnouncement", e3), i.hj.call(this, m2, c.fI.UPDATE_GROUP_ANN);
          }
          function Me(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("object" !== u(e3.file))
              throw Error('Invalid parameter: "file"');
            if (a.XZ.call(this)) {
              var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = t3.accessToken, l2 = t3.jid, p2 = e3.groupId;
              i.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r3, "/").concat(n3, "/chatgroups/").concat(p2, "/share_files?resource=").concat(l2.clientResource), onFileUploadProgress: e3.onFileUploadProgress, onFileUploadComplete: e3.onFileUploadComplete, onFileUploadError: e3.onFileUploadError, onFileUploadCanceled: e3.onFileUploadCanceled, accessToken: o2, apiUrl: this.apiUrl, file: e3.file, appKey: this.context.appKey }, c.fI.UPLOAD_GROUP_FILE), s.kg.debug("Call uploadGroupSharedFile", e3);
            }
          }
          function ke(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.fileId || "" === e3.fileId)
              throw Error('Invalid parameter: "file"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = r3.jid, h2 = e3.groupId, f2 = e3.fileId, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(h2, "/share_files/").concat(f2, "?resource=").concat(d2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call deleteGroupSharedFile", e3), i.hj.call(this, m2, c.fI.DELETE_GROUP_FILE);
          }
          function we(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l2 = r3.appName, p2 = r3.accessToken, d2 = e3.pageNum || 1, h2 = e3.pageSize || 10, f2 = e3.groupId, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/chatgroups/").concat(f2, "/share_files?pagenum=").concat(d2, "&pagesize=").concat(h2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getGroupSharedFilelist", e3), i.hj.call(this, m2, c.fI.GET_GROUP_FILE_LIST);
          }
          var Ue = we;
          function Pe(e3) {
            var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = t3.accessToken, a2 = this.apiUrl, u2 = e3.groupId, l2 = e3.fileId;
            i.LR.call(this, { url: "".concat(a2, "/").concat(r3, "/").concat(n3, "/chatgroups/").concat(u2, "/share_files/").concat(l2), onFileDownloadComplete: e3.onFileDownloadComplete, onFileDownloadError: e3.onFileDownloadError, accessToken: o2, id: l2, secret: e3.secret }, c.fI.DOWN_GROUP_FILE), s.kg.debug("Call downloadGroupSharedFile", e3);
          }
          function xe(e3) {
            return l(this, void 0, void 0, function() {
              var t3, r3, l2, d2, h2, f2, m2, g2, E2, v2, y2;
              return p(this, function(p2) {
                switch (p2.label) {
                  case 0:
                    if (t3 = e3.groupId, r3 = e3.userId, l2 = e3.memberAttributes, "string" != typeof t3 || "" === t3)
                      throw Error('Invalid parameter: "groupId"');
                    if ("string" != typeof r3 || "" === r3)
                      throw Error('Invalid parameter: "userId"');
                    if ("object" !== u(l2))
                      throw Error('Invalid parameter: "memberAttributes"');
                    return a.XZ.call(this) ? (h2 = this.context, f2 = h2.orgName, m2 = h2.appName, g2 = h2.accessToken, E2 = h2.jid, v2 = { metaData: l2 }, y2 = { url: "".concat(this.apiUrl, "/").concat(f2, "/").concat(m2, "/sdk/metadata/chatgroup/").concat(t3, "/user/").concat(r3, "?resource=").concat(E2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(v2), headers: { Authorization: "Bearer " + g2, "Content-Type": "application/json" } }, s.kg.debug("Call setGroupMemberAttributes", e3), [4, i.hj.call(this, y2, c.fI.SET_GROUP_MEMBER_ATTRS)]) : (d2 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(d2)]);
                  case 1:
                    return p2.sent(), [2];
                }
              });
            });
          }
          function Le(e3) {
            var t3 = e3.groupId, r3 = e3.userId;
            return De.call(this, { groupId: t3, userIds: [r3] }).then(function(e4) {
              var t4;
              return { type: e4.type, data: null === (t4 = e4.data) || void 0 === t4 ? void 0 : t4[r3] };
            });
          }
          function De(e3) {
            var t3 = e3.groupId, r3 = e3.userIds, u2 = e3.keys, l2 = void 0 === u2 ? [] : u2;
            if ("string" != typeof t3 || "" === t3)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(r3) || (null == r3 ? void 0 : r3.length) <= 0)
              throw Error('Invalid parameter: "userIds"');
            if (!Array.isArray(l2))
              throw Error('Invalid parameter: "keys"');
            if (!a.XZ.call(this)) {
              var p2 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(p2);
            }
            var d2 = this.context, h2 = d2.orgName, f2 = d2.appName, m2 = d2.accessToken, g2 = { targets: r3, properties: l2 }, E2 = { url: "".concat(this.apiUrl, "/").concat(h2, "/").concat(f2, "/sdk/metadata/chatgroup/").concat(t3, "/get"), type: "POST", dataType: "json", data: JSON.stringify(g2), headers: { Authorization: "Bearer " + m2, "Content-Type": "application/json" } };
            return s.kg.debug("Call getGroupMembersAttributes", e3), i.hj.call(this, E2, c.fI.GET_GROUP_MEMBER_ATTR).then(function(e4) {
              return { type: e4.type, data: (null == e4 ? void 0 : e4.data) || {} };
            });
          }
        }, 7479: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { acceptContactInvite: function() {
            return Z;
          }, acceptInvitation: function() {
            return W;
          }, addContact: function() {
            return B;
          }, addConversationMark: function() {
            return ge;
          }, addReaction: function() {
            return te;
          }, addToBlackList: function() {
            return z;
          }, addUsersToBlacklist: function() {
            return V;
          }, addUsersToBlocklist: function() {
            return X;
          }, declineContactInvite: function() {
            return q;
          }, declineInvitation: function() {
            return K;
          }, deleteAllMessagesAndConversations: function() {
            return Te;
          }, deleteContact: function() {
            return F;
          }, deleteConversation: function() {
            return k;
          }, deleteReaction: function() {
            return re;
          }, deleteSession: function() {
            return M;
          }, fetchHistoryMessages: function() {
            return D;
          }, fetchUserInfoById: function() {
            return P;
          }, getAllContacts: function() {
            return he;
          }, getBlacklist: function() {
            return _;
          }, getBlocklist: function() {
            return R;
          }, getContacts: function() {
            return O;
          }, getContactsWithCursor: function() {
            return fe;
          }, getConversationlist: function() {
            return N;
          }, getHistoryMessages: function() {
            return G;
          }, getReactionDetail: function() {
            return ie;
          }, getReactionList: function() {
            return ne;
          }, getReactionlist: function() {
            return oe;
          }, getRoster: function() {
            return I;
          }, getSelfIdsOnOtherPlatform: function() {
            return ye;
          }, getServerConversations: function() {
            return ce;
          }, getServerConversationsByFilter: function() {
            return ve;
          }, getServerPinnedConversations: function() {
            return le;
          }, getServerPinnedMessages: function() {
            return Oe;
          }, getSessionList: function() {
            return C;
          }, getTokenExpireTimestamp: function() {
            return L;
          }, modifyMessage: function() {
            return ee;
          }, pinConversation: function() {
            return pe;
          }, pinMessage: function() {
            return Re;
          }, recallMessage: function() {
            return $2;
          }, removeConversationMark: function() {
            return Ee;
          }, removeFromBlackList: function() {
            return J;
          }, removeHistoryMessages: function() {
            return se;
          }, removeRoster: function() {
            return H;
          }, removeUserFromBlackList: function() {
            return Y;
          }, removeUserFromBlocklist: function() {
            return Q;
          }, reportMessage: function() {
            return ae;
          }, setContactRemark: function() {
            return de;
          }, unbindPushToken: function() {
            return Se;
          }, unpinMessage: function() {
            return Ie;
          }, updateCurrentUserNick: function() {
            return x;
          }, updateOwnUserInfo: function() {
            return w;
          }, updateUserInfo: function() {
            return U;
          }, uploadPushToken: function() {
            return A;
          }, uploadToken: function() {
            return S;
          } }), r2(9601), r2(1539), r2(8674), r2(2526), r2(1817), r2(2165), r2(6992), r2(8783), r2(3948), r2(9554), r2(4747), r2(2222), r2(7941), r2(6699), r2(3710), r2(9714), r2(9600), r2(5069), r2(561), r2(9753), r2(8309), r2(1249), r2(7327);
          var n2 = r2(3246), o = r2(5531), i = r2(7252), a = r2(4024), s = r2(9937), c = r2(8161), u = r2(4188), l = r2.n(u), p = r2(7360), d = r2(1595), h = r2(4363), f = r2(7288), m = r2(9743), g = r2(6801), E = function() {
            return E = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, E.apply(this, arguments);
          }, v = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, y = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, T = { singleChat: "chat", chatRoom: "chatroom", groupChat: "groupchat" };
          function _(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: this.apiUrl + "/" + s2 + "/" + c2 + "/users/" + this.user + "/blocks/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + u2 }, success: function(t4) {
              var r4 = {};
              t4.data.forEach(function(e4) {
                r4[e4] = { name: e4 };
              }), "function" == typeof (null == e3 ? void 0 : e3.success) && e3.success(t4);
            }, error: function(t4) {
              "function" == typeof (null == e3 ? void 0 : e3.error) && e3.error(t4);
            } };
            return p.kg.debug("Call getBlocklist"), a.hj.call(this, l2, d.fI.GET_BLACK_LIST);
          }
          var R = _, I = O;
          function O(e3) {
            var t3 = this;
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, h2 = { url: this.apiUrl + "/" + c2 + "/" + u2 + "/users/" + this.user + "/contacts/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + l2 }, success: function(r4) {
              var n3 = [];
              r4.data.forEach(function(e4) {
                n3.push({ name: e4, subscription: "both", jid: t3.context.jid });
              }), "function" == typeof (null == e3 ? void 0 : e3.success) && e3.success(n3);
            }, error: function(t4) {
              "function" == typeof (null == e3 ? void 0 : e3.error) && e3.error(t4);
            } };
            return p.kg.debug("Call getContacts"), a.hj.call(this, h2, d.fI.GET_CONTACTS);
          }
          function S(e3) {
            return p.kg.debug("Call uploadPushToken"), g.r.call(this, e3);
          }
          var A = S;
          function C(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return p.kg.debug("Call getSessionList"), a.hj.call(this, l2, d.fI.GET_SESSION_LIST);
          }
          function N(e3) {
            var t3 = this;
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, h2 = !!(e3 && "number" == typeof e3.pageNum && "number" == typeof e3.pageSize && e3.pageNum > 0 && e3.pageSize > 0), f2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/user_channels").concat(h2 ? "/page" : ""), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return h2 && (f2.data = { pageNum: e3.pageNum, pageSize: e3.pageSize }), p.kg.debug("Call getConversationlist"), a.hj.call(this, f2, d.fI.GET_SESSION_LIST).then(function(e4) {
              return b.call(t3, e4);
            });
          }
          function b(e3) {
            var t3 = this, r3 = e3.data.channel_infos;
            return null == r3 || r3.forEach(function(e4) {
              e4.meta && "{}" !== JSON.stringify(e4.meta) ? (e4.meta.payload = JSON.parse(e4.meta.payload), e4.lastMessage = h.w.call(t3, e4.meta, { formatCustomExts: false })) : e4.lastMessage = e4.meta, delete e4.meta;
            }), e3;
          }
          function M(e3) {
            if (e3 && "string" != typeof e3.channel)
              throw Error("Invalid parameter channel: ".concat(e3.channel));
            if (e3 && "singleChat" !== e3.chatType && "groupChat" !== e3.chatType)
              throw Error("Invalid parameter chatType: ".concat(e3.chatType));
            if (e3 && "boolean" != typeof e3.deleteRoam)
              throw Error("Invalid parameter deleteRoam: ".concat(e3.deleteRoam));
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3, s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, h2 = s2.jid;
            r3 = "singleChat" === e3.chatType ? "chat" : "groupChat";
            var f2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/user/").concat(this.user, "/user_channel?resource=").concat(h2.clientResource), dataType: "json", type: "DELETE", data: JSON.stringify({ channel: e3.channel, type: r3, delete_roam: e3.deleteRoam }), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return p.kg.debug("Call deleteSession", e3), a.hj.call(this, f2, d.fI.DELETE_SESSION);
          }
          var k = M;
          function w(e3, t3) {
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, h2 = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"], f2 = {}, m2 = a.P6.getEnvInfo();
            if ("wx" === m2.platform || "qq" === m2.platform)
              if ("string" == typeof e3 && void 0 !== t3) {
                if (!h2.includes(e3))
                  throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
                f2[e3] = t3;
              } else {
                if ("[object Object]" !== Object.prototype.toString.call(e3))
                  throw new Error("illegal params");
                h2.forEach(function(t4) {
                  h2.includes(t4) && void 0 !== e3[t4] && (f2[t4] = e3[t4]);
                });
              }
            else if ("string" == typeof e3) {
              if (!h2.includes(e3))
                throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
              f2 = e3 + "=" + t3;
            } else {
              if ("[object Object]" !== Object.prototype.toString.call(e3))
                throw new Error("illegal params");
              var g2 = [];
              h2.forEach(function(t4) {
                if (h2.includes(t4) && void 0 !== e3[t4]) {
                  var r4 = encodeURIComponent(t4), n3 = encodeURIComponent(e3[t4]);
                  g2.push(r4 + "=" + n3);
                }
              }), f2 = g2.join("&");
            }
            var E2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/metadata/user/").concat(this.user), type: "PUT", data: f2, dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/x-www-form-urlencoded" } };
            return p.kg.debug("Call updateOwnUserInfo", e3), a.hj.call(this, E2, d.fI.UPDATE_USER_INFO);
          }
          var U = w;
          function P(e3, t3) {
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2, c2 = this.context, u2 = c2.orgName, l2 = c2.appName, h2 = c2.accessToken, f2 = [];
            if ("string" == typeof e3)
              f2 = [e3];
            else {
              if ("[object Array]" !== Object.prototype.toString.call(e3))
                throw new Error("illegal params");
              f2 = e3;
            }
            s2 = "string" == typeof t3 ? [t3] : t3 && "[object Array]" === Object.prototype.toString.call(t3) ? t3 : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
            var m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/metadata/user/get"), type: "POST", data: JSON.stringify({ targets: f2, properties: s2 }), dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" } };
            return p.kg.debug("Call fetchUserInfoById", e3), a.hj.call(this, m2, d.fI.GET_USER_INFO);
          }
          function x(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user), type: "PUT", dataType: "json", data: JSON.stringify({ nickname: e3 }), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return p.kg.debug("Call updateCurrentUserNick", e3), a.hj.call(this, l2);
          }
          function L(e3) {
            if ("string" != typeof e3 || "" === e3)
              throw Error('Invalid parameter: "token"');
            var t3 = this.context, r3 = t3.orgName, n3 = t3.appName, o2 = { url: "".concat(this.apiUrl, "/").concat(r3, "/").concat(n3, "/sdk/users/").concat(this.user, "/token/expires"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + e3, "Content-Type": "application/json" } };
            return p.kg.debug("Call getTokenExpireTimestamp", e3), a.hj.call(this, o2, d.fI.SDK_INTERNAL);
          }
          function D(e3) {
            var t3 = this;
            return new Promise(function(r3, a2) {
              if (!e3.queue)
                throw Error('Invalid parameter: "specified"');
              if (!n2.XZ.call(t3)) {
                var s2 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
                return Promise.reject(s2);
              }
              (function e4(t4) {
                var n3 = this, o2 = t4.count || 20;
                j.call(this, { count: o2, isGroup: !!t4.isGroup, queue: t4.queue, start: t4.start, format: t4.format, success: function(i2) {
                  if (i2.msgs.length >= o2 || i2.is_last) {
                    var a3 = i2.msgs.splice(0, o2).reverse();
                    t4.success && t4.success(a3), r3(a3);
                  } else
                    e4.call(n3, E(E({}, t4), { start: null }));
                }, fail: function(e5) {
                  a2(e5), t4.fail && t4.fail(e5);
                } });
              }).call(t3, e3), p.kg.debug("Call fetchHistoryMessages", e3);
            });
          }
          function j(e3) {
            var t3 = this, r3 = e3.queue, n3 = this.mr_cache[r3] || (this.mr_cache[r3] = { msgs: [] }), s2 = this.context.userId, u2 = e3.start || -1, p2 = e3.count || 20;
            if (n3.msgs.length >= p2 || n3.is_last)
              "function" == typeof e3.success && e3.success(n3);
            else {
              n3 && n3.next_key && (u2 = n3.next_key), e3.start && (u2 = e3.start);
              var h2 = { queue: r3 + (e3.isGroup ? "@conference.easemob.com" : "@easemob.com"), start: u2, end: -1 }, f2 = this.context, m2 = f2.orgName, g2 = f2.appName, E2 = { url: "".concat(this.apiUrl, "/").concat(m2, "/").concat(g2, "/users/").concat(s2, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" }, data: JSON.stringify(h2), success: function(r4) {
                return v(t3, void 0, void 0, function() {
                  var t4, o2, i2, a2, s3, u3, p3 = this;
                  return y(this, function(d2) {
                    switch (d2.label) {
                      case 0:
                        if (t4 = null == r4 ? void 0 : r4.data, !r4.data.msgs)
                          return "function" == typeof e3.success && e3.success(n3), n3.is_last = true, n3.next_key = "", [2];
                        o2 = t4.msgs, i2 = o2.length, n3.is_last = t4.is_last, n3.next_key = t4.next_key, a2 = function(t5) {
                          return v(p3, void 0, void 0, function() {
                            var r5, n4, o3, i3, a3;
                            return y(this, function(s4) {
                              switch (s4.label) {
                                case 0:
                                  for (r5 = [], t5 = l().atob(t5), n4 = 0, o3 = t5.length; n4 < o3; ++n4)
                                    r5.push(t5.charCodeAt(n4));
                                  return i3 = (i3 = this.context.root.lookup("easemob.pb.Meta")).decode(r5), a3 = { errorCode: 0, reason: "" }, 1 !== i3.ns ? [3, 2] : [4, c.Z.call(this, i3, a3, true, e3.format)];
                                case 1:
                                  return [2, s4.sent()];
                                case 2:
                                  return [2];
                              }
                            });
                          });
                        }, s3 = 0, d2.label = 1;
                      case 1:
                        return s3 < i2 ? [4, a2(o2[s3].msg)] : [3, 4];
                      case 2:
                        (u3 = d2.sent()) && n3.msgs.push(u3), d2.label = 3;
                      case 3:
                        return s3++, [3, 1];
                      case 4:
                        return "function" == typeof e3.success && e3.success(n3), [2];
                    }
                  });
                });
              }, error: function(e4) {
                if (e4.error && e4.error_description) {
                  var r4 = i.Z.create({ type: o.E.WEBIM_CONNCTION_AJAX_ERROR, message: "fetch history messages error", data: e4 });
                  t3.onError && t3.onError(r4);
                }
              } };
              a.hj.call(this, E2, d.fI.GET_HISTORY_MSG).catch(function(t4) {
                "function" == typeof e3.fail && e3.fail(t4);
              });
            }
          }
          function G(e3) {
            var t3 = this;
            return new Promise(function(r3, s2) {
              var u2 = e3.targetId, d2 = e3.cursor, h2 = void 0 === d2 ? -1 : d2, f2 = e3.pageSize, m2 = void 0 === f2 ? 20 : f2, g2 = e3.chatType, E2 = e3.searchDirection, T2 = e3.searchOptions, _2 = void 0 === T2 ? {} : T2, R2 = _2.msgTypes, I2 = void 0 === R2 ? [] : R2, O2 = _2.startTime, S2 = void 0 === O2 ? null : O2, A2 = _2.endTime, C2 = void 0 === A2 ? null : A2, N2 = _2.from, b2 = void 0 === N2 ? null : N2;
              if ("string" != typeof u2 || "" === u2)
                throw Error('"Invalid parameter": "targetId"');
              if (b2 && "string" != typeof b2)
                throw Error('"Invalid parameter": "searchOptions.from"');
              if (I2 && !Array.isArray(I2))
                throw Error('"Invalid parameter": "searchOptions.msgTypes"');
              if (S2 && "number" != typeof S2)
                throw Error('"Invalid parameter": "searchOptions.startTime"');
              if (C2 && "number" != typeof S2)
                throw Error('"Invalid parameter": "searchOptions.endTime"');
              if (!n2.XZ.call(t3)) {
                var M2 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
                return s2(M2);
              }
              var k2 = t3.context, w2 = k2.orgName, U2 = k2.appName, P2 = k2.userId, x2 = "singleChat" === e3.chatType ? "@easemob.com" : "@conference.easemob.com", L2 = { queue: "".concat(u2).concat(x2), start: h2, pull_number: m2, is_positive: "down" === E2, msgType: I2.join(",") || "", end: -1, startTime: S2, endTime: C2, userId: "singleChat" === g2 ? null : b2 }, D2 = { url: "".concat(t3.apiUrl, "/").concat(w2, "/").concat(U2, "/users/").concat(P2, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + t3.token, "Content-Type": "application/json" }, data: JSON.stringify(L2), success: function(n3) {
                return v(t3, void 0, void 0, function() {
                  var t4, o2, i2, a2, s3, u3, p2, d3, h3 = this;
                  return y(this, function(f3) {
                    switch (f3.label) {
                      case 0:
                        t4 = null == n3 ? void 0 : n3.data, o2 = t4.msgs || [], i2 = function(e4) {
                          return v(h3, void 0, void 0, function() {
                            var t5, r4, n4, o3, i3;
                            return y(this, function(a3) {
                              switch (a3.label) {
                                case 0:
                                  for (t5 = [], e4 = l().atob(e4), r4 = 0, n4 = e4.length; r4 < n4; ++r4)
                                    t5.push(e4.charCodeAt(r4));
                                  return o3 = (o3 = this.context.root.lookup("easemob.pb.Meta")).decode(t5), i3 = { errorCode: 0, reason: "" }, 1 !== o3.ns ? [3, 2] : [4, c.Z.call(this, o3, i3, true, true)];
                                case 1:
                                  return [2, a3.sent()];
                                case 2:
                                  return [2];
                              }
                            });
                          });
                        }, a2 = [], s3 = 0, f3.label = 1;
                      case 1:
                        return s3 < o2.length ? [4, i2(o2[s3].msg)] : [3, 4];
                      case 2:
                        (u3 = f3.sent()) && a2.push(u3), f3.label = 3;
                      case 3:
                        return s3++, [3, 1];
                      case 4:
                        return t4.msgs = a2, p2 = { cursor: t4.next_key, messages: a2, isLast: t4.is_last }, null === (d3 = e3.success) || void 0 === d3 || d3.call(e3, p2), r3(p2), [2];
                    }
                  });
                });
              }, error: e3.fail };
              a.hj.call(t3, D2).catch(function(e4) {
                s2(e4);
              }), p.kg.debug("Call getHistoryMessages", e3);
            });
          }
          function B(e3, t3) {
            return v(this, void 0, void 0, function() {
              var r3, s2, c2, u2, l2, h2, f2;
              return y(this, function(m2) {
                switch (m2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r3)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return p.kg.debug("Call addContact", e3, t3), s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, h2 = s2.jid, f2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/contacts/apply?resource=").concat(h2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: [e3], reason: t3 }), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } }, [4, a.hj.call(this, f2, d.fI.ROSTER_ADD)];
                  case 1:
                    return m2.sent(), [2];
                }
              });
            });
          }
          var H = F;
          function F(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2;
              return y(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return p.kg.debug("Call deleteContact", e3), r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user, "/contacts/users/").concat(e3, "?resource=").concat(l2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, h2, d.fI.ROSTER_REMOVE)];
                  case 1:
                    return f2.sent(), [2];
                }
              });
            });
          }
          function W(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2;
              return y(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return p.kg.debug("Call acceptInvitation", e3), r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user, "/contacts/accept/users/").concat(e3, "?resource=").concat(l2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, h2, d.fI.ROSTER_ACCEPT)];
                  case 1:
                    return f2.sent(), [2];
                }
              });
            });
          }
          var Z = W;
          function K(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2;
              return y(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return p.kg.debug("Call declineInvitation", e3), r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/users/").concat(this.user, "/contacts/decline/users/").concat(e3, "?resource=").concat(l2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, h2, d.fI.ROSTER_DECLINE)];
                  case 1:
                    return f2.sent(), [2];
                }
              });
            });
          }
          var q = K;
          function z(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2, f2, m2;
              return y(this, function(g2) {
                switch (g2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (r3 = e3.name, s2 = [], "string" == typeof r3) {
                      if ("" === r3)
                        throw Error('"Invalid parameter": "name"');
                      s2 = [r3];
                    } else {
                      if (!Array.isArray(r3))
                        throw Error('"Invalid parameter": "name"');
                      s2 = r3;
                    }
                    return p.kg.debug("Call addToBlockList", e3), c2 = this.context, u2 = c2.orgName, l2 = c2.appName, h2 = c2.accessToken, f2 = c2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(f2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: s2 }), headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" } }, [4, a.hj.call(this, m2, d.fI.ROSTER_BAN).then(function(e4) {
                      return { type: e4.type, data: { userIds: (null == e4 ? void 0 : e4.data) || [] } };
                    })];
                  case 1:
                    return [2, g2.sent()];
                }
              });
            });
          }
          var V = z, X = z;
          function J(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2, f2, m2;
              return y(this, function(g2) {
                switch (g2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (r3 = e3.name, s2 = [], "string" == typeof r3) {
                      if ("" === r3)
                        throw Error('"Invalid parameter": "name"');
                      s2 = [r3];
                    } else {
                      if (!Array.isArray(r3))
                        throw Error('"Invalid parameter": "name"');
                      s2 = r3;
                    }
                    return p.kg.debug("Call removeFromBlockList", e3), c2 = this.context, u2 = c2.orgName, l2 = c2.appName, h2 = c2.accessToken, f2 = c2.jid, m2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(f2.clientResource), type: "DELETE", dataType: "json", data: JSON.stringify({ usernames: s2 }), headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" } }, [4, a.hj.call(this, m2, d.fI.ROSTER_ALLOW)];
                  case 1:
                    return g2.sent(), [2];
                }
              });
            });
          }
          var Y = J, Q = J;
          function $2(e3) {
            var t3 = this, r3 = (null == e3 ? void 0 : e3.ext) || "";
            if ("string" != typeof r3)
              throw Error('"Invalid parameter": "ext"', r3);
            var n3 = this.getUniqueId(), o2 = { id: n3, to: e3.to };
            this._msgHash[n3] = E({}, o2);
            var i2 = "";
            void 0 !== e3.chatType ? i2 = e3.chatType : void 0 !== e3.type && (i2 = "chat" === e3.type ? "singleChat" : e3.type);
            var a2 = { id: n3, type: "recall", chatType: i2, ackId: e3.mid, to: e3.to, isChatThread: e3.isChatThread || false, metaExt: r3, success: function(r4) {
              return v(t3, void 0, void 0, function() {
                var t4, n4, o3, a3, s2, c2, u2, l2, p2;
                return y(this, function(d2) {
                  switch (d2.label) {
                    case 0:
                      return d2.trys.push([0, 5, , 6]), "singleChat" !== i2 && "groupChat" !== i2 ? [3, 4] : [4, null === (o3 = null === (n4 = this._localCache) || void 0 === n4 ? void 0 : n4.getInstance()) || void 0 === o3 ? void 0 : o3.removeMsgByServerMsgId(e3.mid)];
                    case 1:
                      return d2.sent(), [4, null === (s2 = null === (a3 = this._localCache) || void 0 === a3 ? void 0 : a3.getInstance()) || void 0 === s2 ? void 0 : s2.getConversationLastMessage(e3.to, i2)];
                    case 2:
                      return t4 = d2.sent(), [4, null === (u2 = null === (c2 = this._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 ? void 0 : u2.updateLocalConversation((0, m.MQ)({ conversationId: e3.to, conversationType: i2 }), { lastMessageId: null == t4 ? void 0 : t4.serverMsgId })];
                    case 3:
                      d2.sent(), d2.label = 4;
                    case 4:
                      return null === (l2 = null == e3 ? void 0 : e3.success) || void 0 === l2 || l2.call(e3, r4), [3, 6];
                    case 5:
                      return d2.sent(), null === (p2 = null == e3 ? void 0 : e3.success) || void 0 === p2 || p2.call(e3, r4), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            }, fail: e3.fail };
            return p.kg.debug("Call recallMessage", e3), this.mSync.send(a2, this);
          }
          function ee(e3) {
            var t3 = e3 || {}, r3 = t3.messageId, n3 = t3.modifiedMessage;
            if (p.kg.debug("Call modifyMessage", r3, n3), "" === r3)
              throw Error('Invalid parameter: "messageId"');
            if ("txt" !== n3.type)
              throw Error('Invalid parameter: "modifiedMessage.type"');
            return this.mSync.send(E({ editMessageId: r3 }, n3));
          }
          function te(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, p2, d2, h2;
              return y(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    if ("string" != typeof e3.messageId || !e3.messageId)
                      throw Error("Invalid parameter messageId: ".concat(e3.messageId));
                    if ("string" != typeof e3.reaction || !e3.reaction)
                      throw Error("Invalid parameter reaction: ".concat(e3.reaction));
                    return n2.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.reaction, p2 = e3.messageId, d2 = { msgId: p2, message: l2 }, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user), type: "POST", data: JSON.stringify(d2), dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, h2)]) : (t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return f2.sent(), [2];
                }
              });
            });
          }
          function re(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, p2, d2;
              return y(this, function(h2) {
                switch (h2.label) {
                  case 0:
                    if ("string" != typeof e3.reaction || !e3.reaction)
                      throw Error("Invalid parameter reactionId: ".concat(e3.reaction));
                    return n2.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.messageId, p2 = e3.reaction, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user, "?msgId=").concat(l2, "&message=").concat(p2), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, d2)]) : (t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return h2.sent(), [2];
                }
              });
            });
          }
          function ne(e3) {
            if ("string" != typeof e3.chatType || !e3.chatType)
              throw Error("Invalid parameter chatType: ".concat(e3.chatType));
            if (!e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.chatType, p2 = e3.messageId, d2 = { msgIdList: "string" == typeof p2 ? [p2] : p2, msgType: "singleChat" === l2 ? "chat" : "groupchat", groupId: e3.groupId || null }, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user), type: "GET", data: d2, dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return a.hj.call(this, h2).then(function(e4) {
              var t4 = e4.data;
              return null == t4 || t4.forEach(function(e5) {
                null == e5 || e5.reactionList.forEach(function(e6) {
                  e6.isAddedBySelf = e6.state, delete e6.state, delete e6.reactionId;
                });
              }), e4;
            });
          }
          var oe = ne;
          function ie(e3) {
            if ("string" != typeof e3.reaction || !e3.reaction)
              throw Error("Invalid parameter reaction: ".concat(e3.reaction));
            if ("string" != typeof e3.messageId || !e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.cursor, p2 = e3.pageSize, d2 = { msgId: e3.messageId, message: e3.reaction, currentPage: l2 || null, pageSize: p2 || 20 }, h2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/reaction/user/").concat(this.user, "/detail"), type: "GET", data: d2, dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return a.hj.call(this, h2).then(function(e4) {
              return e4.data.isAddedBySelf = e4.data.state, delete e4.data.state, delete e4.data.reactionId, e4;
            });
          }
          function ae(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, p2, d2, h2, f2, m2;
              return y(this, function(g2) {
                switch (g2.label) {
                  case 0:
                    if ("string" != typeof e3.reportType || !e3.reportType)
                      throw Error("Invalid parameter reportType: ".concat(e3.reportType));
                    if ("string" != typeof e3.messageId || !e3.messageId)
                      throw Error("Invalid parameter messageId: ".concat(e3.messageId));
                    if ("string" != typeof e3.reportReason || !e3.reportReason)
                      throw Error("Invalid parameter messageId: ".concat(e3.reportReason));
                    return n2.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = e3.reportType, p2 = e3.reportReason, d2 = e3.messageId, h2 = { username: this.user, reportType: l2, reportReason: p2 }, f2 = "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/user/").concat(this.user, "/moderation/report/message/").concat(d2), m2 = { url: f2, type: "POST", data: JSON.stringify(h2), dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, [4, a.hj.call(this, m2)]) : (t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return g2.sent(), [2];
                }
              });
            });
          }
          function se(e3) {
            var t3;
            return v(this, void 0, void 0, function() {
              var r3, s2, c2, u2, l2, d2, h2, f2, m2;
              return y(this, function(g2) {
                switch (g2.label) {
                  case 0:
                    if ("string" != typeof e3.targetId || "" === e3.targetId)
                      throw Error('"Invalid parameter targetId": ' + e3.targetId);
                    if (!["singleChat", "groupChat", "chatRoom"].includes(e3.chatType))
                      throw Error('"Invalid parameter chatType": ' + e3.chatType);
                    if (e3.beforeTimeStamp && ("number" != typeof e3.beforeTimeStamp || e3.beforeTimeStamp < 0 || (null === (t3 = e3.beforeTimeStamp) || void 0 === t3 ? void 0 : t3.toString().length) > 18))
                      throw Error('"Invalid parameter beforeTimeStamp": ' + e3.beforeTimeStamp);
                    if (e3.messageIds && !(Array.isArray(e3.messageIds) && e3.messageIds.length > 0 && e3.messageIds.length <= 20))
                      throw Error('"Invalid parameter messageIds": ' + e3.messageIds);
                    if (!e3.messageIds && !e3.beforeTimeStamp)
                      throw Error("messageIds or beforeTimeStamp field is required.");
                    return n2.XZ.call(this) ? (s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.userId, d2 = "singleChat" === e3.chatType ? "userId" : "groupId", h2 = "singleChat" === e3.chatType ? "chat" : "group", f2 = e3.messageIds ? "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/message/roaming/").concat(h2, "/user/").concat(l2, "?").concat(d2, "=").concat(e3.targetId, "&msgIdList=").concat(e3.messageIds, "&resource=").concat(this.clientResource) : "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/message/roaming/").concat(h2, "/user/").concat(l2, "/time?").concat(d2, "=").concat(e3.targetId, "&delTime=").concat(e3.beforeTimeStamp, "&&resource=").concat(this.clientResource), m2 = { url: f2, dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" } }, p.kg.debug("Call removeHistoryMessages", e3), [4, a.hj.call(this, m2)]) : (r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r3)]);
                  case 1:
                    return g2.sent(), [2];
                }
              });
            });
          }
          function ce(e3) {
            var t3 = this;
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            if ((null == e3 ? void 0 : e3.pageSize) && "number" != typeof e3.pageSize)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            if ((null == e3 ? void 0 : e3.cursor) && "string" != typeof e3.cursor)
              throw Error("Invalid parameter cursor: ".concat(e3.cursor));
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, h2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (null == e3 ? void 0 : e3.pageSize) || 20, cursor: (null == e3 ? void 0 : e3.cursor) || "", need_mark: true }, headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return p.kg.debug("Call getServerConversations", e3), new Promise(function(e4, r4) {
              a.hj.call(t3, h2, d.fI.GET_SESSION_LIST).then(function(r5) {
                return v(t3, void 0, void 0, function() {
                  var t4, n3, o2 = this;
                  return y(this, function(i2) {
                    switch (i2.label) {
                      case 0:
                        return t4 = ue.call(this, r5), this._localCache ? (n3 = t4.data.conversations.map(function(e5) {
                          return v(o2, void 0, void 0, function() {
                            var t5, r6, n4, o3;
                            return y(this, function(i3) {
                              switch (i3.label) {
                                case 0:
                                  return [4, null === (r6 = null === (t5 = this._localCache) || void 0 === t5 ? void 0 : t5.getInstance()) || void 0 === r6 ? void 0 : r6.storeMessage(e5.lastMessage, f.r.SUCCESS, true)];
                                case 1:
                                  return i3.sent(), [4, null === (o3 = null === (n4 = this._localCache) || void 0 === n4 ? void 0 : n4.getInstance()) || void 0 === o3 ? void 0 : o3.updateLocalConversation((0, m.MQ)({ conversationId: e5.conversationId, conversationType: e5.conversationType }), { unReadCount: e5.unReadCount })];
                                case 2:
                                  return i3.sent(), [2];
                              }
                            });
                          });
                        }), [4, Promise.all(n3)]) : [3, 2];
                      case 1:
                        i2.sent(), i2.label = 2;
                      case 2:
                        return e4(t4), [2];
                    }
                  });
                });
              }).catch(function(e5) {
                r4(e5);
              });
            });
          }
          function ue(e3) {
            var t3 = this, r3 = e3.data, n3 = r3.cursor, o2 = r3.channel_infos, i2 = [];
            null == o2 || o2.forEach(function(e4) {
              var r4 = null;
              (null == e4 ? void 0 : e4.meta) && "{}" !== JSON.stringify(e4.meta) && (e4.meta.payload = JSON.parse(e4.meta.payload), "delivery" !== (r4 = h.w.call(t3, e4.meta)).type && "read" !== r4.type && "channel" !== r4.type && (r4.chatType = h.U[r4.chatType]));
              var n4 = { conversationId: e4.session_to, conversationType: "chat" === e4.session_type ? "singleChat" : "groupChat", isPinned: e4.is_top, pinnedTime: e4.is_top ? e4.update_top_status_time : 0, unReadCount: e4.unread_num, lastMessage: r4 };
              e4.marks && (n4.marks = e4.marks.map(function(e5) {
                return s.Z[e5];
              })), i2.push(n4);
            });
            var a2 = { conversations: i2, cursor: n3 || "" };
            return { type: e3.type, data: a2 };
          }
          function le(e3) {
            var t3 = this;
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            if ((null == e3 ? void 0 : e3.pageSize) && "number" != typeof e3.pageSize)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            if ((null == e3 ? void 0 : e3.cursor) && "string" != typeof e3.cursor)
              throw Error("Invalid parameter cursor: ".concat(e3.cursor));
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, h2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (null == e3 ? void 0 : e3.pageSize) || 20, cursor: (null == e3 ? void 0 : e3.cursor) || "", is_top: true, need_mark: true }, headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return p.kg.debug("Call getServerPinnedConversations", e3), a.hj.call(this, h2, d.fI.GET_SESSION_LIST).then(function(e4) {
              return ue.call(t3, e4);
            });
          }
          function pe(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2, f2, m2, g2, E2, v2, T2, _2;
              return y(this, function(y2) {
                if (!n2.XZ.call(this))
                  return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                if (r3 = e3.conversationId, s2 = e3.conversationType, c2 = e3.isPinned, u2 = "singleChat" === s2 ? "chat" : "groupChat", "string" != typeof r3 || "" === r3)
                  throw Error("Invalid parameter conversationId: ".concat(r3));
                if (!["singleChat", "groupChat"].includes(s2))
                  throw Error("Invalid parameter conversationType: ".concat(s2));
                if ("boolean" != typeof c2)
                  throw Error("Invalid parameter isPinned: ".concat(c2));
                return l2 = this.context, h2 = l2.orgName, f2 = l2.appName, m2 = l2.accessToken, g2 = l2.jid, E2 = { type: u2, to: r3 }, v2 = c2 ? "" : "type=".concat(u2, "&to=").concat(r3, "&"), T2 = "".concat(this.apiUrl, "/").concat(h2, "/").concat(f2, "/sdk/user/").concat(this.user, "/user_channel/top?").concat(v2, "resource=").concat(g2.clientResource), _2 = { url: T2, type: c2 ? "POST" : "DELETE", dataType: "json", headers: { Authorization: "Bearer " + m2, "Content-Type": "application/json" } }, c2 && (_2.data = JSON.stringify(E2)), p.kg.debug("Call pinConversation", e3), [2, a.hj.call(this, _2, d.fI.PIN_CONVERSATION).then(function(e4) {
                  var t4 = e4.type, r4 = e4.data;
                  return { type: t4, data: { isPinned: r4.is_top || false, pinnedTime: r4.is_top ? r4.update_top_status_time : 0 } };
                })];
              });
            });
          }
          function de(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2, f2, m2, g2;
              return y(this, function(E2) {
                switch (E2.label) {
                  case 0:
                    if (t3 = e3.userId, r3 = e3.remark, !n2.XZ.call(this))
                      return s2 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(s2)];
                    if ("string" != typeof t3 || "" === t3)
                      throw Error('Invalid parameter: "userId"');
                    if ("string" != typeof r3)
                      throw Error('Invalid parameter: "remark"');
                    return p.kg.debug("Call setContactRemark", e3), c2 = this.context, u2 = c2.orgName, l2 = c2.appName, h2 = c2.accessToken, f2 = c2.jid, m2 = "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(this.context.userId, "/contacts/users/").concat(t3, "?resource=").concat(f2.clientResource), g2 = { url: m2, type: "PUT", data: JSON.stringify({ remark: r3 }), dataType: "json", headers: { Authorization: "Bearer " + h2, "Content-Type": "application/json" } }, [4, a.hj.call(this, g2, d.fI.ROSTER_SET_CONTACT_REMARK)];
                  case 1:
                    return E2.sent(), [2];
                }
              });
            });
          }
          function he() {
            if (!n2.XZ.call(this)) {
              var e3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(e3);
            }
            var t3 = this.context, r3 = t3.orgName, s2 = t3.appName, c2 = t3.accessToken, u2 = { url: "".concat(this.apiUrl, "/").concat(r3, "/").concat(s2, "/users/").concat(this.user, "/contacts/users?needReturnRemark=true"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + c2 } };
            return p.kg.debug("Call getAllContacts"), a.hj.call(this, u2, d.fI.ROSTER_GET_ALL_CONTACTS_REMARKS).then(function(e4) {
              var t4 = ((null == e4 ? void 0 : e4.entities) || []).map(function(e5) {
                return { userId: e5.username, remark: e5.remark };
              });
              return { type: e4.type, data: t4 };
            });
          }
          function fe(e3) {
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            p.kg.debug("Call getContactsWithCursor", e3);
            var r3 = e3 || {}, s2 = r3.pageSize, c2 = void 0 === s2 ? 20 : s2, u2 = r3.cursor, l2 = void 0 === u2 ? "" : u2;
            if (c2 && "number" != typeof c2)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            var h2 = this.context, f2 = h2.orgName, m2 = h2.appName, g2 = h2.accessToken, E2 = { url: "".concat(this.apiUrl, "/").concat(f2, "/").concat(m2, "/users/").concat(this.user, "/contacts?needReturnRemark=true&limit=").concat(c2, "&cursor=").concat(l2), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + g2 } };
            return a.hj.call(this, E2, d.fI.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE).then(function(e4) {
              var t4, r4, n3 = (null === (t4 = null == e4 ? void 0 : e4.data) || void 0 === t4 ? void 0 : t4.contacts) || [], o2 = (null === (r4 = null == e4 ? void 0 : e4.data) || void 0 === r4 ? void 0 : r4.cursor) || "", i2 = n3.map(function(e5) {
                return { userId: e5.username, remark: e5.remark };
              });
              return { type: e4.type, data: { cursor: o2, contacts: i2 } };
            });
          }
          function me(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, c2, u2, l2, f2, m2, g2, E2, v2, _2, R2, I2, O2, S2;
              return y(this, function(y2) {
                switch (y2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (p.kg.debug("Call markConversation", e3), c2 = (r3 = e3 || {}).conversations, u2 = void 0 === c2 ? [] : c2, l2 = r3.mark, f2 = r3.isMarked, !Array.isArray(u2))
                      throw Error("Invalid parameter conversations");
                    if (m2 = u2.map(function(e4) {
                      if (!e4.conversationId || !["singleChat", "groupChat"].includes(e4.conversationType))
                        throw Error("Invalid parameter conversations");
                      return { to: e4.conversationId, type: T[e4.conversationType] };
                    }), "boolean" != typeof f2)
                      throw Error("Invalid parameter isMarked: ".concat(f2));
                    if ("number" != typeof l2)
                      throw Error("Invalid parameter mark: ".concat(l2));
                    return g2 = this.context, E2 = g2.orgName, v2 = g2.appName, _2 = g2.accessToken, R2 = g2.userId, I2 = g2.jid, O2 = { mark: s.Z[l2], targets: m2 }, S2 = { url: "".concat(this.apiUrl, "/").concat(E2, "/").concat(v2, "/sdk/user/").concat(R2, "/user_channels/mark?resource=").concat(I2.clientResource), dataType: "json", data: JSON.stringify(O2), type: f2 ? "Post" : "Delete", headers: { Authorization: "Bearer " + _2 } }, [4, a.hj.call(this, S2, d.fI.MARK_CONVERSATION).then(function(e4) {
                      var t4, r4 = (null === (t4 = e4.data) || void 0 === t4 ? void 0 : t4.ignore) || [];
                      r4 && Array.isArray(r4) && r4.length > 0 && p.kg.debug("markConversation has ignored conversations", r4.map(function(e5) {
                        return { conversationId: e5.to, conversationType: h.U[e5.type] };
                      }));
                    })];
                  case 1:
                    return y2.sent(), [2];
                }
              });
            });
          }
          function ge(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3;
              return y(this, function(n3) {
                return p.kg.debug("Call addConversationMark", e3), t3 = e3.conversations, r3 = e3.mark, [2, me.call(this, { conversations: t3, mark: r3, isMarked: true })];
              });
            });
          }
          function Ee(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3;
              return y(this, function(n3) {
                return p.kg.debug("Call removeConversationMark", e3), t3 = e3.conversations, r3 = e3.mark, [2, me.call(this, { conversations: t3, mark: r3, isMarked: false })];
              });
            });
          }
          function ve(e3) {
            var t3, r3, c2 = this;
            if (!n2.XZ.call(this)) {
              var u2 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(u2);
            }
            if (p.kg.debug("Call getServerConversationsByFilter", e3), (null == e3 ? void 0 : e3.pageSize) && "number" != typeof e3.pageSize)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            if ((null == e3 ? void 0 : e3.cursor) && "string" != typeof e3.cursor)
              throw Error("Invalid parameter cursor: ".concat(e3.cursor));
            if ("number" != typeof (null === (t3 = null == e3 ? void 0 : e3.filter) || void 0 === t3 ? void 0 : t3.mark))
              throw Error("Invalid parameter mark: ".concat(null === (r3 = null == e3 ? void 0 : e3.filter) || void 0 === r3 ? void 0 : r3.mark));
            var l2 = this.context, h2 = l2.orgName, f2 = l2.appName, m2 = l2.accessToken, g2 = "".concat(this.apiUrl, "/").concat(h2, "/").concat(f2, "/sdk/user/").concat(this.user, "/user_channels/mark/search?"), E2 = e3.pageSize, v2 = e3.cursor, y2 = ((null == e3 ? void 0 : e3.filter) || {}).mark, T2 = { url: g2, type: "GET", dataType: "json", data: { limit: E2 || 10, cursor: v2 || "", need_mark: true, mark: s.Z[y2] }, headers: { Authorization: "Bearer " + m2, "Content-Type": "application/json" } };
            return a.hj.call(this, T2, d.fI.GET_SESSION_LIST).then(function(e4) {
              return ue.call(c2, e4);
            });
          }
          function ye() {
            if (!n2.XZ.call(this)) {
              var e3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(e3);
            }
            p.kg.debug("Call getSelfIdsOnOtherPlatform");
            var t3 = this.context, r3 = t3.orgName, s2 = t3.appName, c2 = t3.accessToken, u2 = t3.userId, l2 = t3.jid, h2 = { url: "".concat(this.apiUrl, "/").concat(r3, "/").concat(s2, "/users/").concat(u2, "/resources"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" } };
            return a.hj.call(this, h2, d.fI.USER_LOGGEDIN_OTHER_PLATFORM).then(function(e4) {
              var t4, r4 = null === (t4 = e4.data) || void 0 === t4 ? void 0 : t4.filter(function(e5) {
                return e5.res !== l2.clientResource;
              }), n3 = null == r4 ? void 0 : r4.map(function(e5) {
                return "".concat(u2, "/").concat(e5.res);
              });
              return { type: e4.type, data: n3 };
            });
          }
          function Te() {
            var e3, t3, r3, s2, c2, u2;
            return v(this, void 0, void 0, function() {
              var l2, h2, f2, m2, g2, E2, v2, T2, _2;
              return y(this, function(y2) {
                switch (y2.label) {
                  case 0:
                    return n2.XZ.call(this) ? (p.kg.debug("Call deleteAllMessagesAndConversations"), h2 = this.context, f2 = h2.orgName, m2 = h2.appName, g2 = h2.accessToken, E2 = h2.userId, v2 = h2.jid, T2 = "".concat(this.apiUrl, "/").concat(f2, "/").concat(m2, "/sdk/message/roaming/user/").concat(E2, "/delete/all?resource=").concat(v2.clientResource), _2 = { url: T2, type: "POST", dataType: "json", headers: { Authorization: "Bearer " + g2, "Content-Type": "application/json" } }, [4, a.hj.call(this, _2, d.fI.REST_DELETE_MESSAGES_CONVERSATIONS)]) : (l2 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(l2)]);
                  case 1:
                    return y2.sent(), null === (t3 = null === (e3 = this._localCache) || void 0 === e3 ? void 0 : e3.getInstance()) || void 0 === t3 || t3.clearConversationMap(), [4, null === (s2 = null === (r3 = this._localCache) || void 0 === r3 ? void 0 : r3.getInstance()) || void 0 === s2 ? void 0 : s2.clearStoreData("conversationList")];
                  case 2:
                    return y2.sent(), [4, null === (u2 = null === (c2 = this._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 ? void 0 : u2.clearStoreData("message")];
                  case 3:
                    return y2.sent(), [2];
                }
              });
            });
          }
          function _e(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, s2, c2, u2, l2, h2, f2, m2, g2, E2, v2, _2, R2, I2;
              return y(this, function(y2) {
                switch (y2.label) {
                  case 0:
                    if (!n2.XZ.call(this))
                      return t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (p.kg.debug("Call setMessagePinStatus", e3), s2 = (r3 = e3 || {}).conversationId, c2 = void 0 === s2 ? "" : s2, u2 = r3.conversationType, l2 = r3.messageId, h2 = r3.isPinned, "string" != typeof c2 || "" === c2)
                      throw Error("Invalid parameter conversationId");
                    if ("string" != typeof l2 || "" === l2)
                      throw Error("Invalid parameter messageId");
                    if ("boolean" != typeof h2)
                      throw Error("Invalid parameter isPinned");
                    return f2 = this.context, m2 = f2.orgName, g2 = f2.appName, E2 = f2.accessToken, v2 = f2.userId, _2 = f2.jid, R2 = { to: c2, type: T[u2], pin_msg_id: l2 }, I2 = { url: "".concat(this.apiUrl, "/").concat(m2, "/").concat(g2, "/sdk/user/").concat(v2, "/user_channel/pin?resource=").concat(_2.clientResource), dataType: "json", data: JSON.stringify(R2), type: h2 ? "Post" : "Delete", headers: { Authorization: "Bearer " + E2 } }, [4, a.hj.call(this, I2, d.fI.REST_PIN_MESSAGE)];
                  case 1:
                    return y2.sent(), [2];
                }
              });
            });
          }
          function Re(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, n3, o2;
              return y(this, function(i2) {
                return p.kg.debug("Call pinMessage", e3), r3 = (t3 = e3 || {}).conversationType, n3 = t3.conversationId, o2 = t3.messageId, [2, _e.call(this, { conversationId: n3, conversationType: r3, messageId: o2, isPinned: true })];
              });
            });
          }
          function Ie(e3) {
            return v(this, void 0, void 0, function() {
              var t3, r3, n3, o2;
              return y(this, function(i2) {
                return p.kg.debug("Call unpinMessage", e3), r3 = (t3 = e3 || {}).conversationType, n3 = t3.conversationId, o2 = t3.messageId, [2, _e.call(this, { conversationId: n3, conversationType: r3, messageId: o2, isPinned: false })];
              });
            });
          }
          function Oe(e3) {
            var t3 = this;
            if (!n2.XZ.call(this)) {
              var r3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            p.kg.debug("Call getServerPinnedMessages", e3);
            var s2 = e3.conversationId, c2 = e3.conversationType, u2 = e3.pageSize, l2 = e3.cursor;
            if ("string" != typeof s2 || "" === s2)
              throw Error("Invalid parameter conversationId");
            if (u2 && "number" != typeof u2)
              throw Error("Invalid parameter pageSize: ".concat(u2));
            if (l2 && "string" != typeof l2)
              throw Error("Invalid parameter cursor: ".concat(l2));
            var f2 = this.context, m2 = f2.orgName, g2 = f2.appName, E2 = f2.accessToken, v2 = { url: "".concat(this.apiUrl, "/").concat(m2, "/").concat(g2, "/sdk/user/").concat(this.user, "/user_channel/pin"), type: "GET", dataType: "json", data: { to: s2, type: T[c2], limit: u2 || 10, cursor: l2 || "" }, headers: { Authorization: "Bearer " + E2, "Content-Type": "application/json" } };
            return a.hj.call(this, v2, d.fI.GET_SESSION_LIST).then(function(e4) {
              return { type: 0, data: { list: e4.data.msg_infos.map(function(e5) {
                e5.message.payload = JSON.parse(e5.message.payload);
                var r4 = e5.message, n3 = e5.pin_opt_at, o2 = e5.pin_operator;
                return { message: h.w.call(t3, r4, { formatChatType: true }), pinTime: n3, operatorId: o2 };
              }), cursor: e4.data.cursor || "" } };
            });
          }
          function Se() {
            var e3 = this;
            p.kg.debug("Call unbindPushToken");
            var t3 = { deviceId: this.clientResource, deviceToken: "", notifierName: this.pushCertificateName };
            return g.r.call(this, t3).then(function(t4) {
              return e3.isRegisterPush = false, t4;
            });
          }
        }, 3770: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { getPresenceStatus: function() {
            return m;
          }, getSubscribedPresenceList: function() {
            return h;
          }, getSubscribedPresencelist: function() {
            return f;
          }, publishPresence: function() {
            return l;
          }, subscribePresence: function() {
            return p;
          }, unsubscribePresence: function() {
            return d;
          } }), r2(1539), r2(8674), r2(2526), r2(1817), r2(2165), r2(6992), r2(8783), r2(3948), r2(2222), r2(9753);
          var n2 = r2(4024), o = r2(3246), i = r2(7252), a = r2(5531), s = r2(7360), c = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, u = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function l(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, c2, l2, p2, d2, h2, f2, m2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if ("string" != typeof e3.description)
                      throw Error('Invalid parameter: "description"');
                    return o.XZ.call(this) ? (r3 = this.context, c2 = r3.accessToken, l2 = r3.orgName, p2 = r3.appName, d2 = r3.userId, h2 = this.context.jid.clientResource, f2 = { ext: e3.description }, m2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/users/").concat(d2, "/presence/").concat(h2, "/1"), type: "POST", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error }, s.kg.debug("Call publishPresence:", e3), [4, n2.hj.call(this, m2)]) : (t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function p(e3) {
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!e3.usernames.length)
              throw Error('"usernames" can not be empty');
            if ("number" != typeof e3.expiry)
              throw Error('Invalid parameter: "expiry"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.userId, p2 = r3.accessToken, d2 = { usernames: e3.usernames }, h2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/presence/").concat(e3.expiry), type: "POST", dataType: "json", data: JSON.stringify(d2), headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call subscribePresence:", e3), n2.hj.call(this, h2).then(function(e4) {
              return e4.data = { result: null == e4 ? void 0 : e4.result }, e4;
            });
          }
          function d(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, c2, l2, p2, d2, h2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if (!Array.isArray(e3.usernames))
                      throw Error('Invalid parameter: "usernames"');
                    if (!e3.usernames.length)
                      throw Error('"usernames" can not be empty');
                    return o.XZ.call(this) ? (r3 = this.context, c2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, d2 = r3.accessToken, h2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(l2, "/users/").concat(p2, "/presence"), type: "DELETE", dataType: "json", data: JSON.stringify(e3.usernames), headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error }, s.kg.debug("Call unsubscribePresence:", e3), [4, n2.hj.call(this, h2)]) : (t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function h(e3) {
            if ("number" != typeof e3.pageNum || "number" != typeof e3.pageSize)
              throw Error('Invalid parameter: "pageNum or pageSize"');
            if (e3.pageNum < 0 || e3.pageSize < 0)
              throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l2 = r3.userId, p2 = r3.accessToken, d2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/presence/sublist?pageNum=").concat(e3.pageNum, "&pageSize=").concat(e3.pageSize), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + p2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getSubscribedPresenceList:", e3), n2.hj.call(this, d2).then(function(e4) {
              return e4.data = { result: null == e4 ? void 0 : e4.result }, e4;
            });
          }
          var f = h;
          function m(e3) {
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!e3.usernames.length)
              throw Error('"usernames" can not be empty');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { usernames: e3.usernames }, c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p2 = c2.userId, d2 = c2.accessToken, h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/presence"), type: "POST", dataType: "json", data: JSON.stringify(r3), headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getPresenceStatus:", e3), n2.hj.call(this, h2).then(function(e4) {
              return e4.data = { result: null == e4 ? void 0 : e4.result }, e4;
            });
          }
        }, 6801: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { r: function() {
            return u;
          } }), r2(1539), r2(8674), r2(2222), r2(4812);
          var n2 = r2(3246), o = r2(5531), i = r2(7252), a = r2(4024), s = r2(7360), c = r2(1595);
          function u(e3) {
            if ("string" != typeof e3.deviceId || "" === e3.deviceId)
              throw Error('Invalid parameter: "deviceId"');
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, u2 = r3.orgName, l = r3.appName, p = r3.accessToken, d = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l, "/users/").concat(this.user), type: "PUT", data: JSON.stringify({ device_id: e3.deviceId, device_token: e3.deviceToken, notifier_name: e3.notifierName }), dataType: "json", headers: { Authorization: "Bearer " + p, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            s.kg.debug("Call uploadPushTokenToServer", e3);
            var h = a.hj.bind(this, d, c.fI.UPLOAD_PUSH_TOKEN);
            return a.P6.retryPromise(h).then(function(e4) {
              var t4 = e4.entities[0] || {};
              return { type: e4.type, data: t4 };
            });
          }
        }, 1735: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { clearRemindTypeForConversation: function() {
            return p;
          }, getPushPerformLanguage: function() {
            return m;
          }, getSilentModeForAll: function() {
            return u;
          }, getSilentModeForConversation: function() {
            return d;
          }, getSilentModeForConversations: function() {
            return h;
          }, getSilentModeRemindTypeConversations: function() {
            return g;
          }, setPushPerformLanguage: function() {
            return f;
          }, setSilentModeForAll: function() {
            return c;
          }, setSilentModeForConversation: function() {
            return l;
          } }), r2(7941), r2(1539), r2(8674), r2(2222), r2(9753), r2(9554), r2(4747), r2(9600), r2(1249);
          var n2 = r2(4024), o = r2(3246), i = r2(7252), a = r2(5531), s = r2(7360);
          function c(e3) {
            if (!(e3.options instanceof Object))
              throw Error('Invalid parameter: "options"');
            var t3 = e3.options.paramType;
            if ("number" != typeof t3 || t3 < 0 || t3 > 2)
              throw Error('Invalid parameter: "options of paramType"');
            if (0 === t3) {
              if ("string" != typeof e3.options.remindType)
                throw Error('Invalid parameter: "options of remindType"');
            } else if (1 === t3) {
              if ("number" != typeof e3.options.duration)
                throw Error('Invalid parameter: "options of duration"');
            } else if (2 === t3) {
              var r3 = e3.options, c2 = r3.startTime, u2 = r3.endTime;
              if (!(c2 instanceof Object && Object.keys(c2).length))
                throw Error('Invalid parameter: "options of startTime"');
              if (!c2.hours || "number" != typeof c2.hours || !c2.minutes || "number" != typeof c2.minutes)
                throw Error('Invalid parameter: "options of startTime of hours or minutes"');
              if (!(u2 instanceof Object && Object.keys(u2).length))
                throw Error('Invalid parameter: "options of endTime"');
              if (!u2.hours || "number" != typeof u2.hours || !u2.minutes || "number" != typeof u2.minutes)
                throw Error('Invalid parameter: "options of endTime of hours or minutes"');
            }
            if (!o.XZ.call(this)) {
              var l2 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(l2);
            }
            var p2 = this.context, d2 = p2.accessToken, h2 = p2.orgName, f2 = p2.appName, m2 = p2.userId, g2 = p2.jid, E = {};
            switch (t3) {
              case 0:
                E = { type: e3.options.remindType };
                break;
              case 1:
                E = { ignoreDuration: e3.options.duration };
                break;
              case 2:
                var v = e3.options;
                c2 = v.startTime, u2 = v.endTime, E = { ignoreInterval: "".concat(c2.hours, ":").concat(c2.minutes, "-").concat(u2.hours, ":").concat(u2.minutes) };
            }
            var y = { url: "".concat(this.apiUrl, "/").concat(h2, "/").concat(f2, "/users/").concat(m2, "/notification/user/").concat(m2, "?resource=").concat(g2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(E), headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setSilentModeForAll:", e3), n2.hj.call(this, y);
          }
          function u(e3) {
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/user/").concat(p2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: null == e3 ? void 0 : e3.success, error: null == e3 ? void 0 : e3.error };
            return s.kg.debug("Call getSilentModeForAll:", e3), n2.hj.call(this, d2);
          }
          function l(e3) {
            if ("string" != typeof e3.conversationId || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if ("string" != typeof e3.type || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!(e3.options instanceof Object))
              throw Error('Invalid parameter: "options"');
            var t3 = e3.options.paramType;
            if ("number" != typeof t3 || t3 < 0 || t3 > 2)
              throw Error('Invalid parameter: "options of paramType"');
            if (0 === t3) {
              if ("string" != typeof e3.options.remindType)
                throw Error('Invalid parameter: "options of remindType"');
            } else if (1 === t3) {
              if ("number" != typeof e3.options.duration)
                throw Error('Invalid parameter: "options of duration"');
            } else if (2 === t3) {
              var r3 = e3.options, c2 = r3.startTime, u2 = r3.endTime;
              if (!(c2 instanceof Object && Object.keys(c2).length))
                throw Error('Invalid parameter: "options of startTime"');
              if (!c2.hours || "number" != typeof c2.hours || !c2.minutes || "number" != typeof c2.minutes)
                throw Error('Invalid parameter: "options of startTime of hours or minutes"');
              if (!(u2 instanceof Object && Object.keys(u2).length))
                throw Error('Invalid parameter: "options of endTime"');
              if (!u2.hours || "number" != typeof u2.hours || !u2.minutes || "number" != typeof u2.minutes)
                throw Error('Invalid parameter: "options of endTime of hours or minutes"');
            }
            if (!o.XZ.call(this)) {
              var l2 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(l2);
            }
            var p2 = this.context, d2 = p2.accessToken, h2 = p2.orgName, f2 = p2.appName, m2 = p2.userId, g2 = p2.jid, E = "chatgroup", v = {};
            switch (t3) {
              case 0:
                v = { type: e3.options.remindType };
                break;
              case 1:
                v = { ignoreDuration: e3.options.duration };
                break;
              case 2:
                var y = e3.options;
                c2 = y.startTime, u2 = y.endTime, v = { ignoreInterval: "".concat(c2.hours, ":").concat(c2.minutes, "-").concat(u2.hours, ":").concat(u2.minutes) };
            }
            "singleChat" === e3.type && (E = "user");
            var T = { url: "".concat(this.apiUrl, "/").concat(h2, "/").concat(f2, "/users/").concat(m2, "/notification/").concat(E, "/").concat(e3.conversationId, "?resource=").concat(g2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(v), headers: { Authorization: "Bearer " + d2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setSilentModeForConversation:", e3), n2.hj.call(this, T);
          }
          function p(e3) {
            if ("string" != typeof e3.conversationId || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if ("string" != typeof e3.type || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, d2 = r3.jid, h2 = "chatgroup";
            "singleChat" === e3.type && (h2 = "user");
            var f2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/").concat(h2, "/").concat(e3.conversationId, "?resource=").concat(d2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify({ type: "DEFAULT" }), headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call clearRemindTypeForConversation:", e3), n2.hj.call(this, f2);
          }
          function d(e3) {
            if ("string" != typeof e3.conversationId || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if ("string" != typeof e3.type || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, d2 = "chatgroup";
            "singleChat" === e3.type && (d2 = "user");
            var h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/").concat(d2, "/").concat(e3.conversationId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getSilentModeForConversation:", e3), n2.hj.call(this, h2);
          }
          function h(e3) {
            if (!Array.isArray(e3.conversationList))
              throw Error('Invalid parameter: "conversationList"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, d2 = [], h2 = [];
            e3.conversationList.forEach(function(e4) {
              "singleChat" === e4.type ? d2.push(e4.id) : h2.push(e4.id);
            });
            var f2 = d2.length ? d2.join(",") : "", m2 = h2.length ? h2.join(",") : "", g2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification?user=").concat(f2, "&group=").concat(m2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call getSilentModeForConversations:", e3), n2.hj.call(this, g2);
          }
          function f(e3) {
            if ("string" != typeof e3.language || !e3.language)
              throw Error('Invalid parameter: "language"');
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = { translationLanguage: e3.language }, c2 = this.context, u2 = c2.accessToken, l2 = c2.orgName, p2 = c2.appName, d2 = c2.userId, h2 = { url: "".concat(this.apiUrl, "/").concat(l2, "/").concat(p2, "/users/").concat(d2, "/notification/language"), type: "PUT", dataType: "json", data: JSON.stringify(r3), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return s.kg.debug("Call setPushPerformLanguage:", e3), n2.hj.call(this, h2);
          }
          function m(e3) {
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, d2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/language"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" }, success: null == e3 ? void 0 : e3.success, error: null == e3 ? void 0 : e3.error };
            return s.kg.debug("Call getPushPerformLanguage:", e3), n2.hj.call(this, d2);
          }
          function g(e3) {
            if (!o.XZ.call(this)) {
              var t3 = i.Z.create({ type: a.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            if ("number" != typeof e3.pageSize)
              throw Error('Invalid parameter: "pageSize"');
            var r3 = this.context, c2 = r3.accessToken, u2 = r3.orgName, l2 = r3.appName, p2 = r3.userId, d2 = { limit: e3.pageSize || 10, cursor: e3.cursor };
            e3.cursor || delete d2.cursor;
            var h2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(p2, "/notification/mute/type"), type: "GET", dataType: "json", data: d2, headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" } };
            return s.kg.debug("Call getSilentModeRemindTypeConversations:", e3), n2.hj.call(this, h2).then(function(e4) {
              return e4.data ? { data: { conversations: e4.data.map(function(e5) {
                return "user" in e5 ? { conversationId: e5.user, type: "singleChat", remindType: e5.value } : { conversationId: e5.group, type: "groupChat", remindType: e5.value };
              }), cursor: e4.cursor }, type: e4.type } : e4;
            });
          }
        }, 7384: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { changeChatThreadName: function() {
            return f;
          }, createChatThread: function() {
            return l;
          }, destroyChatThread: function() {
            return h;
          }, getChatThreadDetail: function() {
            return _;
          }, getChatThreadLastMessage: function() {
            return y;
          }, getChatThreadMembers: function() {
            return m;
          }, getChatThreads: function() {
            return v;
          }, getJoinedChatThreads: function() {
            return E;
          }, joinChatThread: function() {
            return p;
          }, leaveChatThread: function() {
            return d;
          }, removeChatThreadMember: function() {
            return g;
          } }), r2(1539), r2(8674), r2(2526), r2(1817), r2(2165), r2(6992), r2(8783), r2(3948), r2(8309), r2(2222), r2(9554), r2(4747), r2(9753);
          var n2 = r2(5531), o = r2(7252), i = r2(4024), a = r2(3246), s = r2(4363), c = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, u = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function l(e3) {
            if ("string" != typeof e3.name || "" === e3.name)
              throw Error("Invalid parameter name: ".concat(e3.name));
            if ("string" != typeof e3.messageId || "" === e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if ("string" != typeof e3.parentId || "" === e3.parentId)
              throw Error("Invalid parameter parentId: ".concat(e3.parentId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { name: e3.name, msg_id: e3.messageId, group_id: e3.parentId, owner: this.user }, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread?resource=").concat(l2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(p2), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, d2).then(function(e4) {
              var t4 = e4.data.thread_id;
              return e4.data = { chatThreadId: t4 }, e4;
            });
          }
          function p(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/user/").concat(this.user, "/join?resource=").concat(l2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2).then(function(e4) {
              var t4 = e4.data.detail;
              return t4.messageId = t4.msgId, t4.parentId = t4.groupId, delete t4.msgId, delete t4.groupId, e4;
            });
          }
          function d(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, s2, c2, l2, p2, d2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
                      throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
                    return a.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, l2 = r3.accessToken, p2 = r3.jid, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/user/").concat(this.user, "/quit?resource=").concat(p2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } }, [4, i.hj.call(this, d2)]) : (t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function h(e3) {
            return c(this, void 0, void 0, function() {
              var t3, r3, s2, c2, l2, p2, d2;
              return u(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
                      throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
                    return a.XZ.call(this) ? (r3 = this.context, s2 = r3.orgName, c2 = r3.appName, l2 = r3.accessToken, p2 = r3.jid, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "?resource=").concat(p2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } }, [4, i.hj.call(this, d2)]) : (t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function f(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if ("string" != typeof e3.name || "" === e3.name)
              throw Error("Invalid parameter name: ".concat(e3.name));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { name: e3.name }, d2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "?resource=").concat(l2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(p2), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, d2);
          }
          function m(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { limit: e3.pageSize || 20, cursor: e3.cursor || "" }, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/users"), type: "GET", dataType: "json", data: l2, headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2);
          }
          function g(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error("Invalid parameter username: ".concat(e3.username));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = r3.jid, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId, "/users/").concat(e3.username, "?resource=").concat(l2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2);
          }
          function E(e3) {
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { limit: e3.pageSize || 20, cursor: e3.cursor || "" }, p2 = { url: e3.parentId ? "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/threads/chatgroups/").concat(e3.parentId, "/user/").concat(this.user) : "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/threads/user/").concat(this.user), type: "GET", dataType: "json", data: l2, headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2).then(function(e4) {
              var t4 = e4.entities;
              return null == t4 || t4.forEach(function(e5) {
                e5.parentId = e5.groupId, e5.messageId = e5.msgId, delete e5.groupId, delete e5.msgId;
              }), e4;
            });
          }
          function v(e3) {
            if ("string" != typeof e3.parentId || "" === e3.parentId)
              throw Error("Invalid parameter parentId: ".concat(e3.parentId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { cursor: e3.cursor || "", limit: e3.pageSize || 20 }, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/threads/chatgroups/").concat(e3.parentId), type: "GET", dataType: "json", data: l2, headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, p2).then(function(e4) {
              var t4 = e4.entities;
              return null == t4 || t4.forEach(function(e5) {
                e5.parentId = e5.groupId, e5.messageId = e5.msgId, delete e5.groupId, delete e5.msgId;
              }), e4;
            });
          }
          function y(e3) {
            var t3 = this;
            if (!Array.isArray(e3.chatThreadIds))
              throw Error("Invalid parameter chatThreadIds: ".concat(e3.chatThreadIds));
            if (!a.XZ.call(this)) {
              var r3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r3);
            }
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p2 = { threadIds: e3.chatThreadIds }, d2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/thread/message"), type: "POST", dataType: "json", data: JSON.stringify(p2), headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return i.hj.call(this, d2).then(function(e4) {
              return T.call(t3, e4);
            });
          }
          function T(e3) {
            var t3 = this, r3 = e3.entities;
            return null == r3 || r3.forEach(function(e4) {
              e4.chatThreadId = e4.thread_id, e4.last_message && "{}" !== JSON.stringify(e4.last_message) ? e4.lastMessage = s.w.call(t3, e4.last_message) : e4.lastMessage = e4.last_message, delete e4.thread_id, delete e4.last_message;
            }), e3;
          }
          function _(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!a.XZ.call(this)) {
              var t3 = o.Z.create({ type: n2.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, s2 = r3.orgName, c2 = r3.appName, u2 = r3.accessToken, l2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/thread/").concat(e3.chatThreadId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return i.hj.call(this, l2).then(function(e4) {
              return e4.data.affiliationsCount = e4.data.affiliations_count, e4.data.messageId = e4.data.msgId, e4.data.parentId = e4.data.groupId, delete e4.data.affiliations_count, delete e4.data.msgId, delete e4.data.groupId, e4;
            });
          }
        }, 70: function(e2, t2, r2) {
          "use strict";
          r2.r(t2), r2.d(t2, { getSupportedLanguages: function() {
            return c;
          }, translateMessage: function() {
            return u;
          } }), r2(1539), r2(8674), r2(2222), r2(9753);
          var n2 = r2(3246), o = r2(5531), i = r2(7252), a = r2(7360), s = r2(4024);
          function c() {
            if (!n2.XZ.call(this)) {
              var e3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(e3);
            }
            var t3 = this.context, r3 = t3.orgName, c2 = t3.appName, u2 = t3.accessToken, l = { url: "".concat(this.apiUrl, "/").concat(r3, "/").concat(c2, "/users/").concat(this.user, "/translate/support/language"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + u2 } };
            return a.kg.debug("Call getSupportedLanguages"), s.hj.call(this, l);
          }
          function u(e3) {
            if ("string" != typeof e3.text || "" === e3.text)
              throw Error('Invalid parameter: "text"');
            if (!Array.isArray(e3.languages))
              throw Error('Invalid parameter: "language"');
            if (!n2.XZ.call(this)) {
              var t3 = i.Z.create({ type: o.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r3 = this.context, c2 = r3.orgName, u2 = r3.appName, l = r3.accessToken, p = "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/translate"), d = { text: e3.text, to: e3.languages }, h = { url: p, dataType: "json", type: "POST", data: JSON.stringify(d), headers: { Authorization: "Bearer " + l } };
            return a.kg.debug("Call translateMessage"), s.hj.call(this, h);
          }
        }, 3246: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { H7: function() {
            return l;
          }, XZ: function() {
            return c;
          }, _W: function() {
            return u;
          } }), r2(7941), r2(9554), r2(1539), r2(4747), r2(6699), r2(2023);
          var n2 = r2(5531), o = r2(7252), i = r2(7360);
          function a() {
            var e3 = this.context.appName, t3 = this.context.orgName;
            return !(!e3 || !t3) || (this.onError && this.onError({ type: n2.E.WEBIM_CONNCTION_AUTH_ERROR, message: "appName or orgName is illegal" }), false);
          }
          function s() {
            var e3, t3 = this.context.accessToken;
            if (!t3) {
              var r3 = o.Z.create({ type: n2.E.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "token not assign error" });
              return i.kg.debug("token not assign error", t3), this.onError && this.onError(r3), null === (e3 = this.eventHandler) || void 0 === e3 || e3.dispatch("onError", r3), false;
            }
            return true;
          }
          function c() {
            return s.call(this) && a.call(this);
          }
          function u(e3) {
            var t3 = e3.data, r3 = e3.type;
            return { data: { status: Object.keys(t3.errorKeys).length > 0 ? "fail" : "success", errorKeys: t3.errorKeys, successKeys: t3.successKeys }, type: r3 };
          }
          function l(e3) {
            var t3 = e3.data, r3 = void 0;
            return Object.keys(t3.errorKeys).length > 0 && Object.keys(t3.errorKeys).forEach(function(e4) {
              var i2 = t3.errorKeys[e4];
              r3 = i2.includes("is not part of you") ? o.Z.create({ type: n2.E.NO_PERMISSION, message: i2 }) : i2.includes("size of metadata for this single chatroom exceeds the user defined limit") || i2.includes("total size of chatroom metadata for this app exceeds the user defined limit") || i2.includes("is exceeding maximum limit") ? o.Z.create({ type: n2.E.MAX_LIMIT, message: i2 }) : i2.includes("is not Legal") ? o.Z.create({ type: n2.E.REQUEST_PARAMETER_ERROR, message: i2 }) : i2.includes("Failed to update userMetadata. Concurrent updates not allowed") ? o.Z.create({ type: n2.E.OPERATION_NOT_ALLOWED, message: i2 }) : o.Z.create({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: i2 });
            }), r3;
          }
        }, 4319: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { Ge: function() {
            return h;
          }, Gf: function() {
            return i;
          }, Nt: function() {
            return c;
          }, XV: function() {
            return l;
          }, al: function() {
            return p;
          }, bh: function() {
            return f;
          }, ke: function() {
            return d;
          }, th: function() {
            return s;
          }, xd: function() {
            return u;
          }, xz: function() {
            return o;
          }, zj: function() {
            return a;
          } });
          var n2 = r2(5531), o = 15e3, i = 15e3, a = 3e5, s = 1e4, c = 1e4, u = 8e3, l = 3e5, p = 3e4, d = 5, h = 3, f = [n2.E.MAX_LIMIT, n2.E.WEBIM_TOKEN_EXPIRED, n2.E.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, n2.E.USER_NOT_FOUND, n2.E.WEBIM_CONNCTION_AUTH_ERROR, n2.E.REQUEST_PARAMETER_ERROR, n2.E.WEBIM_CONNCTION_AUTH_ERROR, n2.E.WEBIM_SERVER_SERVING_DISABLED];
        }, 2071: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { $x: function() {
            return s;
          }, F3: function() {
            return c;
          }, TJ: function() {
            return o;
          }, Tp: function() {
            return p;
          }, Wc: function() {
            return n2;
          }, el: function() {
            return i;
          }, iB: function() {
            return u;
          }, iO: function() {
            return a;
          }, yK: function() {
            return l;
          } }), r2(6992), r2(1532), r2(1539), r2(8783), r2(3948);
          var n2 = 7, o = /* @__PURE__ */ new Map(), i = "im", a = /* @__PURE__ */ new Map(), s = "32f24ab2ddb74f508aa9286c356cec84", c = 1e3, u = { INIT: 9674, API: 9675 }, l = "direct", p = -1;
        }, 1595: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a, s, c;
          r2.d(t2, { C8: function() {
            return n2;
          }, aC: function() {
            return c;
          }, c: function() {
            return i;
          }, dd: function() {
            return s;
          }, fI: function() {
            return o;
          }, td: function() {
            return a;
          } }), function(e3) {
            e3[e3.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", e3[e3.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", e3[e3.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", e3[e3.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", e3[e3.REST_PIN_CONVERSATION = 4] = "REST_PIN_CONVERSATION", e3[e3.REST_MARK_CONVERSATION = 5] = "REST_MARK_CONVERSATION", e3[e3.REST_UPLOAD_FILE_IN_PARTS = 6] = "REST_UPLOAD_FILE_IN_PARTS", e3[e3.REST_DELETE_MESSAGES_CONVERSATIONS = 7] = "REST_DELETE_MESSAGES_CONVERSATIONS", e3[e3.REST_PIN_MESSAGE = 8] = "REST_PIN_MESSAGE", e3[e3.REST_FETCH_PINMESSAGES = 9] = "REST_FETCH_PINMESSAGES", e3[e3.REST_OPERATE = 100] = "REST_OPERATE", e3[e3.MSYNC_SENDMESSAGE = 101] = "MSYNC_SENDMESSAGE", e3[e3.MSYNC_RECALLMESSAGE = 102] = "MSYNC_RECALLMESSAGE", e3[e3.MSYNC_MODIFYMESSAGE = 103] = "MSYNC_MODIFYMESSAGE", e3[e3.MSYNC_OPERATE = 200] = "MSYNC_OPERATE", e3[e3.ROSTER_ADD = 201] = "ROSTER_ADD", e3[e3.ROSTER_REMOVE = 202] = "ROSTER_REMOVE", e3[e3.ROSTER_ACCEPT = 203] = "ROSTER_ACCEPT", e3[e3.ROSTER_DECLINE = 204] = "ROSTER_DECLINE", e3[e3.ROSTER_BAN = 205] = "ROSTER_BAN", e3[e3.ROSTER_ALLOW = 206] = "ROSTER_ALLOW", e3[e3.ROSTER_BLACKLIST = 207] = "ROSTER_BLACKLIST", e3[e3.ROSTER_CONTACTS = 208] = "ROSTER_CONTACTS", e3[e3.ROSTER_GET_ALL_CONTACTS_REMARKS = 209] = "ROSTER_GET_ALL_CONTACTS_REMARKS", e3[e3.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = 210] = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e3[e3.ROSTER_SET_CONTACT_REMARK = 211] = "ROSTER_SET_CONTACT_REMARK", e3[e3.ROSTER_OPERATE = 300] = "ROSTER_OPERATE", e3[e3.USER_LOGIN = 301] = "USER_LOGIN", e3[e3.USER_CREATE = 302] = "USER_CREATE", e3[e3.USER_UPDATE_USERINFO = 303] = "USER_UPDATE_USERINFO", e3[e3.USER_FETCH_USERINFO = 304] = "USER_FETCH_USERINFO", e3[e3.USER_UPDATE_NICK = 305] = "USER_UPDATE_NICK", e3[e3.USER_UPLOAD_PUSH_TOKEN = 306] = "USER_UPLOAD_PUSH_TOKEN", e3[e3.USER_LOGGEDIN_OTHER_PLATFORM = 307] = "USER_LOGGEDIN_OTHER_PLATFORM", e3[e3.USER_OPERATE = 400] = "USER_OPERATE", e3[e3.GROUP_CREATEGROUP = 401] = "GROUP_CREATEGROUP", e3[e3.GROUP_BLOCK_MESSAGE = 402] = "GROUP_BLOCK_MESSAGE", e3[e3.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 403] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e3[e3.GROUP_FETCH_USERS_GROUP = 404] = "GROUP_FETCH_USERS_GROUP", e3[e3.GROUP_CHANGE_OWNER = 405] = "GROUP_CHANGE_OWNER", e3[e3.GROUP_FETCH_SPECIFICATION = 406] = "GROUP_FETCH_SPECIFICATION", e3[e3.GROUP_CHANGE_GROUPATTRIBUTE = 407] = "GROUP_CHANGE_GROUPATTRIBUTE", e3[e3.GROUP_FETCH_MEMEBERS = 408] = "GROUP_FETCH_MEMEBERS", e3[e3.GROUP_GET_ADMIN = 409] = "GROUP_GET_ADMIN", e3[e3.GROUP_SET_ADMIN = 410] = "GROUP_SET_ADMIN", e3[e3.GROUP_REMOVE_ADMIN = 411] = "GROUP_REMOVE_ADMIN", e3[e3.GROUP_DESTOTYGROUP = 412] = "GROUP_DESTOTYGROUP", e3[e3.GROUP_LEAVEGROUP = 413] = "GROUP_LEAVEGROUP", e3[e3.GROUP_INVITE_TO_GROUP = 414] = "GROUP_INVITE_TO_GROUP", e3[e3.GROUP_JOIN_PUBLICGROUP = 415] = "GROUP_JOIN_PUBLICGROUP", e3[e3.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 416] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e3[e3.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 417] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e3[e3.GROUP_ACCEPT_INVITATION = 418] = "GROUP_ACCEPT_INVITATION", e3[e3.GROUP_DECLINE_INVITATION = 419] = "GROUP_DECLINE_INVITATION", e3[e3.GROUP_REMOVE_MEMBER = 420] = "GROUP_REMOVE_MEMBER", e3[e3.GROUP_REMOVE_MEMBERS = 421] = "GROUP_REMOVE_MEMBERS", e3[e3.GROUP_MUTE_MEMBERS = 422] = "GROUP_MUTE_MEMBERS", e3[e3.GROUP_UNMUTE_MEMBERS = 423] = "GROUP_UNMUTE_MEMBERS", e3[e3.GROUP_FETCH_MUTES = 424] = "GROUP_FETCH_MUTES", e3[e3.GROUP_BLOCK_MEMBER = 425] = "GROUP_BLOCK_MEMBER", e3[e3.GROUP_BLOCK_MEMBERS = 426] = "GROUP_BLOCK_MEMBERS", e3[e3.GROUP_UNBLOCK_MEMBER = 427] = "GROUP_UNBLOCK_MEMBER", e3[e3.GROUP_UNBLOCK_MEMBERS = 428] = "GROUP_UNBLOCK_MEMBERS", e3[e3.GROUP_GET_BLOCK_LIST = 429] = "GROUP_GET_BLOCK_LIST", e3[e3.GROUP_MUTE_ALLMEMBERS = 430] = "GROUP_MUTE_ALLMEMBERS", e3[e3.GROUP_UNMUTE_ALLMEMBERS = 431] = "GROUP_UNMUTE_ALLMEMBERS", e3[e3.GROUP_ADD_WHITELIST = 432] = "GROUP_ADD_WHITELIST", e3[e3.GROUP_REMOVE_WHITELIST = 433] = "GROUP_REMOVE_WHITELIST", e3[e3.GROUP_FETCH_WHITELIST = 434] = "GROUP_FETCH_WHITELIST", e3[e3.GROUP_IS_IN_WHITELIST = 435] = "GROUP_IS_IN_WHITELIST", e3[e3.GROUP_GET_READ_USERS = 436] = "GROUP_GET_READ_USERS", e3[e3.GROUP_FETCH_ANNOUNCEMENT = 437] = "GROUP_FETCH_ANNOUNCEMENT", e3[e3.GROUP_UPDATE_ANNOUNCEMENT = 438] = "GROUP_UPDATE_ANNOUNCEMENT", e3[e3.GROUP_UPLOAD_SHAREDFILE = 439] = "GROUP_UPLOAD_SHAREDFILE", e3[e3.GROUP_DELETE_SHAREDFILE = 440] = "GROUP_DELETE_SHAREDFILE", e3[e3.GROUP_FETCH_SHAREDFILE = 441] = "GROUP_FETCH_SHAREDFILE", e3[e3.GROUP_DOWNLOAD_SHAREDFILE = 442] = "GROUP_DOWNLOAD_SHAREDFILE", e3[e3.GROUP_MEMBER_SET_META_DATA = 443] = "GROUP_MEMBER_SET_META_DATA", e3[e3.GROUP_MEMBER_FETCH_META_DATA = 444] = "GROUP_MEMBER_FETCH_META_DATA", e3[e3.GROUP_OPERATE = 500] = "GROUP_OPERATE", e3[e3.CHATROOM_FETCH_CHATROOMSWITHPAGE = 501] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e3[e3.CHATROOM_CREATECHATROOM = 502] = "CHATROOM_CREATECHATROOM", e3[e3.CHATROOM_DESTORYCHATROOM = 503] = "CHATROOM_DESTORYCHATROOM", e3[e3.CHATROOM_FETCH_SPECIFICATION = 504] = "CHATROOM_FETCH_SPECIFICATION", e3[e3.CHATROOM_CHANGE_ATTRIBUTE = 505] = "CHATROOM_CHANGE_ATTRIBUTE", e3[e3.CHATROOM_REMOVE_MEMBER = 506] = "CHATROOM_REMOVE_MEMBER", e3[e3.CHATROOM_REMOVE_MEMBERS = 507] = "CHATROOM_REMOVE_MEMBERS", e3[e3.CHATROOM_ADD_MEMBERS = 508] = "CHATROOM_ADD_MEMBERS", e3[e3.CHATROOM_JOINCAHTROOM = 509] = "CHATROOM_JOINCAHTROOM", e3[e3.CHATROOM_LEAVECAHTROOM = 510] = "CHATROOM_LEAVECAHTROOM", e3[e3.CHATROOM_FETCH_MEMBERS = 511] = "CHATROOM_FETCH_MEMBERS", e3[e3.CHATROOM_GET_ADMIN = 512] = "CHATROOM_GET_ADMIN", e3[e3.CHATROOM_SET_ADMIN = 513] = "CHATROOM_SET_ADMIN", e3[e3.CHATROOM_REMOVE_ADMIN = 514] = "CHATROOM_REMOVE_ADMIN", e3[e3.CHATROOM_MUTE_USER = 515] = "CHATROOM_MUTE_USER", e3[e3.CHATROOM_UNMUTE_USER = 516] = "CHATROOM_UNMUTE_USER", e3[e3.CHATROOM_FETCH_MUTES = 517] = "CHATROOM_FETCH_MUTES", e3[e3.CHATROOM_BLOCK_USER = 518] = "CHATROOM_BLOCK_USER", e3[e3.CHATROOM_BLOCK_USERS = 519] = "CHATROOM_BLOCK_USERS", e3[e3.CHATROOM_UNBLOCK_USER = 520] = "CHATROOM_UNBLOCK_USER", e3[e3.CHATROOM_UNBLOCK_USERS = 521] = "CHATROOM_UNBLOCK_USERS", e3[e3.CHATROOM_FETCH_BANS = 522] = "CHATROOM_FETCH_BANS", e3[e3.CHATROOM_MUTE_ALLMEMEBERS = 523] = "CHATROOM_MUTE_ALLMEMEBERS", e3[e3.CHATROOM_UNMUTE_ALLMEMEBERS = 524] = "CHATROOM_UNMUTE_ALLMEMEBERS", e3[e3.CHATROOM_ADD_WHITELIST = 525] = "CHATROOM_ADD_WHITELIST", e3[e3.CHATROOM_REMOVE_WHITELIST = 526] = "CHATROOM_REMOVE_WHITELIST", e3[e3.CHATROOM_FETCH_WHITELIST = 527] = "CHATROOM_FETCH_WHITELIST", e3[e3.CHATROOM_FETCH_MEMBERIN_WHITELIST = 528] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e3[e3.CHATROOM_FETCH_ANNOUNCEMENT = 529] = "CHATROOM_FETCH_ANNOUNCEMENT", e3[e3.CHATROOM_UPDATE_ANNOUNCEMENT = 530] = "CHATROOM_UPDATE_ANNOUNCEMENT", e3[e3.CHATROOM_REMOVE_SHARE_FILE = 531] = "CHATROOM_REMOVE_SHARE_FILE", e3[e3.CHATROOM_GET_SHARE_FILE_LIST = 532] = "CHATROOM_GET_SHARE_FILE_LIST", e3[e3.CHATROOM_UPLOAD_FILE = 533] = "CHATROOM_UPLOAD_FILE", e3[e3.CHATROOM_SET_META_DATA = 534] = "CHATROOM_SET_META_DATA", e3[e3.CHATROOM_DELETE_META_DATA = 535] = "CHATROOM_DELETE_META_DATA", e3[e3.CHATROOM_FETCH_META_DATA = 536] = "CHATROOM_FETCH_META_DATA", e3[e3.CHATROOM_FETCH_USER_JOINED_CHATROOM = 537] = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e3[e3.CHATROOM_OPERATE = 600] = "CHATROOM_OPERATE";
          }(n2 || (n2 = {})), function(e3) {
            e3.SDK_INTERNAL = "SDK_INTERNAL", e3.LOGIN = "USER_LOGIN", e3.REGISTER = "USER_CREATE", e3.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e3.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", e3.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", e3.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", e3.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", e3.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", e3.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", e3.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", e3.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", e3.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", e3.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", e3.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", e3.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", e3.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", e3.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", e3.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", e3.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", e3.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", e3.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", e3.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", e3.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", e3.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", e3.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", e3.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", e3.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", e3.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", e3.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", e3.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e3.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", e3.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", e3.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", e3.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", e3.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", e3.SET_CHATROOM_ATTR = "CHATROOM_SET_META_DATA", e3.DELETE_CHATROOM_ATTR = "CHATROOM_DELETE_META_DATA", e3.GET_CHATROOM_ATTR = "CHATROOM_FETCH_META_DATA", e3.GET_USER_JOINED_CHATROOM = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e3.CREATE_GROUP = "GROUP_CREATEGROUP", e3.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", e3.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e3.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", e3.CHANGE_OWNER = "GROUP_CHANGE_OWNER", e3.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", e3.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", e3.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", e3.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", e3.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", e3.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", e3.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", e3.QUIT_GROUP = "GROUP_LEAVEGROUP", e3.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", e3.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", e3.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e3.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e3.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", e3.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", e3.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", e3.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", e3.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", e3.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", e3.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", e3.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", e3.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", e3.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", e3.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", e3.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", e3.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", e3.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", e3.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", e3.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", e3.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", e3.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", e3.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", e3.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", e3.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", e3.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", e3.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", e3.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", e3.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", e3.SET_GROUP_MEMBER_ATTRS = "GROUP_MEMBER_SET_META_DATA", e3.GET_GROUP_MEMBER_ATTR = "GROUP_MEMBER_FETCH_META_DATA", e3.GET_SESSION_LIST = "REST_GET_SESSION_LIST", e3.DELETE_SESSION = "REST_DEL_SESSION", e3.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", e3.PIN_CONVERSATION = "REST_PIN_CONVERSATION", e3.REST_UPLOAD_FILE_IN_PARTS = "REST_UPLOAD_FILE_IN_PARTS", e3.REST_DELETE_MESSAGES_CONVERSATIONS = "REST_DELETE_MESSAGES_CONVERSATIONS", e3.MARK_CONVERSATION = "REST_MARK_CONVERSATION", e3.REST_FETCH_PINMESSAGES = "REST_FETCH_PINMESSAGES", e3.REST_PIN_MESSAGE = "REST_PIN_MESSAGE", e3.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", e3.GET_USER_INFO = "USER_FETCH_USERINFO", e3.UPDATE_USER_NICK = "USER_UPDATE_NICK", e3.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", e3.USER_LOGGEDIN_OTHER_PLATFORM = "USER_LOGGEDIN_OTHER_PLATFORM", e3.GET_BLACK_LIST = "ROSTER_BLACKLIST", e3.GET_CONTACTS = "ROSTER_CONTACTS", e3.ROSTER_GET_ALL_CONTACTS_REMARKS = "ROSTER_GET_ALL_CONTACTS_REMARKS", e3.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e3.ROSTER_SET_CONTACT_REMARK = "ROSTER_SET_CONTACT_REMARK", e3.ROSTER_ADD = "ROSTER_ADD", e3.ROSTER_REMOVE = "ROSTER_REMOVE", e3.ROSTER_ACCEPT = "ROSTER_ACCEPT", e3.ROSTER_DECLINE = "ROSTER_DECLINE", e3.ROSTER_BAN = "ROSTER_BAN", e3.ROSTER_ALLOW = "ROSTER_ALLOW", e3.SEND_MSG = "MSYNC_SENDMESSAGE", e3.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", e3.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE", e3.MODIFY_MESSAGE = "MSYNC_MODIFYMESSAGE";
          }(o || (o = {})), function(e3) {
            e3.GET_DNS = "REST_DNSLIST", e3.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", e3.LOGIN_BY_PWD = "LOGIN_BY_PWD", e3.RESISTER = "REGISTER", e3.REST_INIT_UPLOAD_TASK_IN_PARTS = "REST_INIT_UPLOAD_TASK_IN_PARTS", e3.REST_UPLOAD_PART = "REST_UPLOAD_PART", e3.REST_COMPLETE_UPLOAD_PART = "REST_COMPLETE_UPLOAD_PART", e3.REST_ABORT_UPLOAD_PART = "REST_ABORT_UPLOAD_PART", e3.CONNECT_WEBSOCKET = "CONNECT_WEBSOCKET";
          }(i || (i = {})), function(e3) {
            e3[e3["5G"] = 7] = "5G", e3[e3["4G"] = 7] = "4G", e3[e3["3G"] = 7] = "3G", e3[e3["2G"] = 7] = "2G", e3[e3["SLOW-2G"] = 7] = "SLOW-2G", e3[e3.WIFI = 2] = "WIFI", e3[e3.LAN = 1] = "LAN", e3[e3.DISCONNECTED = 0] = "DISCONNECTED", e3[e3.NONE = 0] = "NONE", e3[e3.UNKNOWN = -1] = "UNKNOWN", e3[e3["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET";
          }(a || (a = {})), function(e3) {
            e3[e3.success = 200] = "success", e3[e3.failed = 500] = "failed", e3[e3.disconnect = -1] = "disconnect", e3[e3.closed = 401] = "closed", e3[e3.notFound = 404] = "notFound", e3[e3.reachLimit = 429] = "reachLimit";
          }(s || (s = {})), function(e3) {
            e3[e3.web = 0] = "web", e3[e3.native = 1] = "native";
          }(c || (c = {}));
        }, 6424: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { gA: function() {
            return L;
          }, ZP: function() {
            return Ae;
          } }), r2(9601), r2(1539), r2(8674), r2(2526), r2(1817), r2(2165), r2(6992), r2(8783), r2(3948), r2(7042), r2(2222), r2(3710), r2(7941), r2(9714), r2(3843), r2(8309), r2(2772), r2(5212), r2(7327), r2(5827), r2(9826), r2(4553), r2(561), r2(9653), r2(1038), r2(2564), r2(9575), r2(2472), r2(2990), r2(8927), r2(3105), r2(5035), r2(4345), r2(7174), r2(2846), r2(4731), r2(7209), r2(6319), r2(8867), r2(7789), r2(3739), r2(9368), r2(4483), r2(2056), r2(3462), r2(678), r2(7462), r2(3824), r2(5021), r2(2974), r2(5016), r2(6699), r2(2023), r2(3161), r2(4048), r2(9753), r2(9554), r2(4747), r2(285), r2(1637), r2(8145), r2(1249), r2(4812);
          var n2 = r2(4188), o = r2.n(n2), i = r2(3720), a = r2.n(i), s = r2(5531), c = r2(8161), u = r2(7360), l = ["public", "members_only", "allow_user_invites", "invite_need_confirm"], p = { name: "name", title: "name", description: "description", public: "public", members_only: "approval", allow_user_invites: "allowInvites", max_users: "maxUsers", invite_need_confirm: "inviteNeedConfirm", custom: "ext", last_modified: "lastModified" };
          function d(e3, t3) {
            var r3, n3, o2, i2, a2, s2, c2 = this, u2 = this.context, d2 = u2.userId, h2 = u2.jid, f2 = t3.from.name === d2 && h2.clientResource !== t3.from.clientResource;
            return t3.isThread ? (o2 = { id: t3.mucId.name, name: t3.mucName, operation: "", parentId: t3.mucParentId.name, operator: t3.from.name, userName: t3.to.length ? t3.to[0].name : "" }, i2 = { chatThreadId: t3.mucId.name, chatThreadName: t3.mucName, operation: "", parentId: t3.mucParentId.name }) : (n3 = { type: "", owner: t3.from.name, gid: t3.mucId.name, from: t3.from.name, fromJid: t3.from, to: t3.to.length ? t3.to[0].name : "", toJid: t3.to, chatroom: t3.isChatroom, status: t3.status }, a2 = { operation: "", id: t3.mucId.name, from: t3.from.name }, t3.isChatroom && (null === (r3 = null == t3 ? void 0 : t3.eventInfo) || void 0 === r3 ? void 0 : r3.ext) && (s2 = JSON.parse(t3.eventInfo.ext))), ({ 45: function() {
              var e4, r4, n4;
              a2.operation = "memberAttributesUpdate";
              var o3 = JSON.parse(null === (e4 = null == t3 ? void 0 : t3.eventInfo) || void 0 === e4 ? void 0 : e4.ext) || {};
              a2.attributes = o3.properties || {}, a2.userId = o3.username || "", f2 ? null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onMultiDeviceEvent", a2) : null === (n4 = c2.eventHandler) || void 0 === n4 || n4.dispatch("onGroupEvent", a2);
            }, 44: function() {
              var e4;
              a2.operation = "removeChatRoomAttributes", a2.attributes = s2.result.successKeys, s2.result.successKeys.length > 0 && (null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomEvent", a2));
            }, 43: function() {
              var e4;
              a2.operation = "updateChatRoomAttributes";
              var t4 = {};
              s2.result.successKeys.forEach(function(e5) {
                t4[e5] = s2.properties[e5];
              }), a2.attributes = t4, s2.result.successKeys.length > 0 && (null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomEvent", a2));
            }, 42: function() {
            }, 41: function() {
            }, 40: function() {
            }, 39: function() {
            }, 38: function() {
              var e4;
              i2.operation = "chatThreadNameUpdate", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 37: function() {
              var e4;
              o2.operation = "userRemove", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatThreadChange", o2);
            }, 36: function() {
              var e4;
              i2.operation = "chatThreadLeave", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 35: function() {
              var e4;
              i2.operation = "chatThreadJoin", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 34: function() {
              var e4;
              i2.operation = "chatThreadDestroy", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 33: function() {
              var e4;
              i2.operation = "chatThreadCreate", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 32: function() {
              var e4, r4, o3, i3;
              n3.type = t3.isChatroom ? "rmChatRoomMute" : "rmGroupMute", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "unmuteAllMembers", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 31: function() {
              var e4, r4, o3, i3;
              n3.type = t3.isChatroom ? "muteChatRoom" : "muteGroup", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "muteAllMembers", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 30: function() {
              var e4, r4, o3, i3;
              n3.type = t3.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "removeAllowlistMember", a2.userId = n3.to, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 29: function() {
              var e4, r4, o3, i3;
              n3.type = t3.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "addUserToAllowlist", a2.userId = n3.to, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 28: function() {
              var e4, r4, o3, i3;
              n3.type = "deleteFile", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "deleteFile", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 27: function() {
              var e4, r4, o3, i3;
              n3.type = "uploadFile", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "uploadFile", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 26: function() {
              var e4, r4, o3, i3;
              n3.type = "deleteAnnouncement", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "deleteAnnouncement", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 25: function() {
              var e4, r4, o3, i3;
              n3.type = "updateAnnouncement", n3.announcement = t3.reason, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "updateAnnouncement", a2.announcement = t3.reason, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 24: function() {
              var e4, r4, o3, i3;
              n3.type = "removeMute", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "unmuteMember", a2.userId = n3.to, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 23: function() {
              var e4, r4, o3, i3;
              if (n3.type = "addMute", c2.onPresence && c2.onPresence(n3), t3.ext && "string" == typeof t3.ext) {
                var s3 = JSON.parse(t3.ext);
                s3.user_mute_time && (n3.muteTimestamp = s3.user_mute_time, a2.muteTimestamp = s3.user_mute_time);
              }
              t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "muteMember", a2.userId = n3.to, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 22: function() {
              var e4, r4, o3, i3;
              n3.type = "removeAdmin", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "removeAdmin", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 21: function() {
              var e4, r4, o3, i3;
              n3.type = "addAdmin", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "setAdmin", a2.userId = n3.to, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 20: function() {
              var e4, r4, o3, i3;
              n3.type = "changeOwner", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "changeOwner", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 19: function() {
              var e4, r4, o3, i3;
              n3.type = "direct_joined", n3.groupName = t3.mucName, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "directJoined", a2.name = t3.mucName, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 18: function() {
              var e4, r4, o3, i3;
              n3.type = t3.isChatroom ? "leaveChatRoom" : "leaveGroup", c2.onPresence && c2.onPresence(n3);
              var s3 = t3.mucMemberCount;
              s3 && (a2.memberCount = s3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "memberAbsence", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 17: function() {
              var e4, r4, o3, i3;
              t3.isChatroom && t3.ext && (a2.ext = t3.ext, n3.ext = t3.ext), n3.type = t3.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", c2.onPresence && c2.onPresence(n3);
              var s3 = t3.mucMemberCount;
              t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "memberPresence", s3 && (a2.memberCount = s3), t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 16: function() {
              var e4, r4;
              n3.type = "unblock", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3);
            }, 15: function() {
              var e4, r4;
              n3.type = "block", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3);
            }, 14: function() {
              var e4, r4, o3, i3, s3, u3 = t3.isChatroom;
              if (!u3) {
                var d3 = JSON.parse((null === (e4 = null == t3 ? void 0 : t3.eventInfo) || void 0 === e4 ? void 0 : e4.ext) || "{}", function(e5, t4) {
                  return "last_modified" === e5 ? Number(t4) : l.includes(e5) ? "true" === t4 || true === t4 : t4;
                });
                a2.detail = n3.detail = {}, Object.keys(d3).forEach(function(e5) {
                  var t4 = p[e5];
                  if (t4) {
                    var r5 = d3[e5];
                    a2.detail && (a2.detail[t4] = r5), n3.detail && (n3.detail[t4] = r5);
                  }
                });
              }
              n3.type = "update", c2.onPresence && c2.onPresence(n3), u3 ? null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onChatroomChange", n3) : null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onGroupChange", n3), a2.operation = "updateInfo", u3 ? null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onChatroomEvent", a2) : null === (s3 = c2.eventHandler) || void 0 === s3 || s3.dispatch("onGroupEvent", a2);
            }, 13: function() {
              var e4, r4, o3, i3;
              n3.type = "allow", n3.reason = t3.reason, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), t3.reason && (a2.reason = t3.reason), a2.operation = "unblockMember", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 12: function() {
              var e4, r4;
              n3.type = "ban", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3);
            }, 11: function() {
              var e4, r4;
              n3.type = "getBlackList", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3);
            }, 10: function() {
              var e4, r4, o3, i3;
              n3.type = "removedFromGroup", n3.kicked = n3.to, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "removeMember", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 9: function() {
              var e4, r4, o3, i3;
              n3.type = "invite_decline", n3.kicked = n3.to, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "rejectInvite", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 8: function() {
              var e4, r4, o3, i3;
              n3.type = "invite_accept", n3.kicked = n3.to, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "acceptInvite", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 7: function() {
              var e4, r4, o3, i3;
              n3.type = "invite", n3.kicked = n3.to, n3.groupName = t3.mucName, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "inviteToJoin", a2.name = t3.mucName, t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 6: function() {
              var e4, r4, o3, i3;
              n3.type = "joinPublicGroupDeclined", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "joinPublicGroupDeclined", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : (a2.userId = t3.to.length ? t3.to[0].name : "", null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2));
            }, 5: function() {
              var e4, r4, o3, i3;
              n3.type = "joinPublicGroupSuccess", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "acceptRequest", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 4: function() {
              var e4, r4, o3, i3;
              n3.type = "joinGroupNotifications", n3.reason = t3.reason, c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), t3.reason && (a2.reason = t3.reason), a2.operation = "requestToJoin", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 3: function() {
              var e4, r4;
              n3.type = "leave", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3);
            }, 2: function() {
              var e4, r4;
              n3.type = "join", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3);
            }, 1: function() {
              var e4, r4, o3, i3;
              n3.type = "deleteGroupChat", c2.onPresence && c2.onPresence(n3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", n3) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupChange", n3), a2.operation = "destroy", t3.isChatroom ? null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 0: function() {
              var e4, r4;
              a2.operation = "create", t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomEvent", a2) : null === (r4 = c2.eventHandler) || void 0 === r4 || r4.dispatch("onGroupEvent", a2);
            } }[e3] || function() {
              console.error("No match operation ".concat(e3));
            })();
          }
          var h = function(e3) {
            var t3 = this.root.lookup("easemob.pb.MUCBody").decode(e3.payload), r3 = t3.operation;
            u.kg.debug("onMucMessage", t3), d.call(this, r3, t3);
          }, f = { handleRosterMsg: function(e3) {
            var t3, r3, n3, o2, i2, a2, s2 = this.root.lookup("easemob.pb.RosterBody").decode(e3.payload), c2 = { type: "", to: s2.to[0].name, from: s2.from.name, status: s2.reason };
            switch (s2.operation) {
              case 2:
                c2.type = "subscribe", this.onContactInvited && this.onContactInvited(c2), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onContactInvited", c2);
                break;
              case 3:
                c2.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(c2), null === (r3 = this.eventHandler) || void 0 === r3 || r3.dispatch("onContactDeleted", c2);
                break;
              case 4:
                c2.type = "subscribed", this.onContactAdded && this.onContactAdded(c2), null === (n3 = this.eventHandler) || void 0 === n3 || n3.dispatch("onContactAdded", c2);
                break;
              case 5:
                c2.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c2), null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onContactRefuse", c2);
                break;
              case 6:
              case 7:
                break;
              case 8:
                c2.type = "subscribed", this.onContactAgreed && this.onContactAgreed(c2), null === (i2 = this.eventHandler) || void 0 === i2 || i2.dispatch("onContactAgreed", c2);
                break;
              case 9:
                c2.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c2), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onContactRefuse", c2);
                break;
              default:
                u.kg.error("handleRosterMsg:", s2);
            }
            this.onPresence && c2.type && this.onPresence(c2);
          } }, m = r2(7252), g = function(e3) {
            var t3, r3, n3, o2, i2, a2, c2 = this.root.lookup("easemob.pb.StatisticsBody").decode(e3.payload), l2 = c2.operation, p2 = c2.reason;
            switch (l2) {
              case 0:
                this.onStatisticMessage && this.onStatisticMessage(c2), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onStatisticMessage", c2);
                break;
              case 1:
                a2 = m.Z.create({ type: s.E.WEBIM_CONNCTION_USER_REMOVED, message: "user has been removed" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (r3 = this.eventHandler) || void 0 === r3 || r3.dispatch("onError", a2);
                break;
              case 2:
                a2 = m.Z.create({ type: s.E.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE, message: "the user is already logged on another device" }), p2 && (a2.data = { loginInfoCustomExt: c2.reason }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (n3 = this.eventHandler) || void 0 === n3 || n3.dispatch("onError", a2);
                break;
              case 3:
                a2 = m.Z.create({ type: s.E.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD, message: "the user was kicked by changing password" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onError", a2);
                break;
              case 4:
                a2 = m.Z.create({ type: s.E.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE, message: "the user was kicked by other device" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (i2 = this.eventHandler) || void 0 === i2 || i2.dispatch("onError", a2);
                break;
              default:
                u.kg.error("handleStatisticsMsg:", c2);
            }
          }, E = (r2(9720), r2(4024)), v = r2(4363), y = r2(9937);
          function T(e3) {
            var t3, r3 = [], n3 = [], o2 = e3.data;
            o2 && o2.values && o2.values.forEach(function(e4) {
              Object.entries(e4.status).forEach(function(e5) {
                n3.push({ device: e5[0], status: Number(e5[1]) });
              }), r3.push({ userId: e4.uid, lastTime: Number(e4.last_time), expire: Number(e4.expiry), ext: e4.ext, statusDetails: n3 });
            }), this.onPresenceStatusChange && this.onPresenceStatusChange(r3), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onPresenceStatusChange", r3);
          }
          function _(e3) {
            var t3 = this;
            e3.data.forEach(function(e4) {
              var r3, n3 = { from: e4.from, to: e4.to, chatType: "chat" === e4.channel_type ? "singleChat" : "groupChat", messageId: e4.messageId, reactions: e4.reactions, ts: e4.ts };
              null === (r3 = t3.eventHandler) || void 0 === r3 || r3.dispatch("onReactionChange", n3);
            });
          }
          function R(e3) {
            var t3, r3, n3, o2;
            if (e3.data) {
              var i2 = e3.data, a2 = { id: i2.id || "", name: i2.name || "", parentId: i2.muc_parent_id || "", messageId: i2.msg_parent_id || "", timestamp: i2.timestamp || 0, operator: i2.from || "", operation: "" };
              switch (i2.operation) {
                case "create":
                  a2.operation = "create", a2.createTimestamp = a2.timestamp, a2.messageCount = 0, null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onChatThreadChange", a2);
                  break;
                case "update_msg":
                  a2.operation = "update", a2.messageCount = i2.message_count, i2.last_message && "{}" !== JSON.stringify(i2.last_message) ? a2.lastMessage = v.w.call(this, i2.last_message) : "{}" === JSON.stringify(i2.last_message) && (a2.lastMessage = {}), null === (r3 = this.eventHandler) || void 0 === r3 || r3.dispatch("onChatThreadChange", a2);
                  break;
                case "update":
                  a2.operation = "update", a2.messageCount = i2.message_count, null === (n3 = this.eventHandler) || void 0 === n3 || n3.dispatch("onChatThreadChange", a2);
                  break;
                case "delete":
                  a2.operation = "destroy", null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onChatThreadChange", a2);
              }
            }
          }
          function I(e3) {
            var t3, r3 = e3.data;
            if (r3.resource !== this.clientResource) {
              var n3 = { operation: "deleteRoaming", conversationId: r3.to, chatType: "chat" === r3.chatType ? "singleChat" : "groupChat", resource: r3.resource };
              null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onMultiDeviceEvent", n3);
            }
          }
          function O(e3) {
            var t3, r3, n3 = e3.data, o2 = "";
            if (this.clientResource !== n3.res || n3.from !== this.user) {
              switch (n3.op) {
                case "del":
                  o2 = "deleteConversation";
                  break;
                case "top":
                  o2 = "pinnedConversation";
                  break;
                case "not_top":
                  o2 = "unpinnedConversation";
                  break;
                case "mark":
                  o2 = "markConversation";
                  break;
                case "mark_delete":
                  o2 = "unMarkConversation";
                  break;
                case "pin":
                  o2 = "pin";
                  break;
                case "pin_delete":
                  o2 = "unpin";
                  break;
                default:
                  return void u.kg.error("unexpected conversation op:", n3.op);
              }
              if ("pin" !== o2 && "unpin" !== o2) {
                var i2 = { operation: o2, conversationId: n3.id, conversationType: "chat" === n3.type ? "singleChat" : "groupChat", timestamp: n3.ts };
                "markConversation" !== i2.operation && "unMarkConversation" !== i2.operation || n3.ext && (i2.conversationMark = y.Z[n3.ext]), null === (r3 = this.eventHandler) || void 0 === r3 || r3.dispatch("onMultiDeviceEvent", i2);
              } else {
                var a2 = n3.ext, s2 = n3.from, c2 = n3.id, l2 = n3.type, p2 = n3.ts, d2 = { messageId: a2 || "", conversationId: "chat" === l2 ? s2 : c2, conversationType: v.U[l2], operation: o2, operatorId: s2, time: p2 };
                null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onMessagePinEvent", d2);
              }
            }
          }
          function S(e3) {
            var t3, r3 = this;
            null === (t3 = e3.values) || void 0 === t3 || t3.forEach(function(e4) {
              var t4, n3, o2, i2, a2;
              if (e4.operator_resource !== r3.clientResource)
                if ("ignoreInterval" in e4.data) {
                  var s2 = { operation: "setSilentModeForUser", resource: e4.operator_resource, data: e4.data };
                  null === (t4 = r3.eventHandler) || void 0 === t4 || t4.dispatch("onMultiDeviceEvent", s2);
                } else
                  "group" in e4 ? (s2 = { operation: 0 === Object.keys(null !== (n3 = e4.data) && void 0 !== n3 ? n3 : {}).length ? "removeSilentModeForConversation" : "setSilentModeForConversation", resource: e4.operator_resource, conversationId: e4.group, type: "groupChat", data: e4.data }, null === (o2 = r3.eventHandler) || void 0 === o2 || o2.dispatch("onMultiDeviceEvent", s2)) : (s2 = { operation: 0 === Object.keys(null !== (i2 = e4.data) && void 0 !== i2 ? i2 : {}).length ? "removeSilentModeForConversation" : "setSilentModeForConversation", resource: e4.operator_resource, conversationId: e4.user, type: "singleChat", data: e4.data }, null === (a2 = r3.eventHandler) || void 0 === a2 || a2.dispatch("onMultiDeviceEvent", s2));
            });
          }
          var A = function(e3) {
            var t3 = E.P6.parseNotify(e3.payload);
            switch (t3.type) {
              case "presence":
                T.call(this, t3);
                break;
              case "reaction":
                _.call(this, t3);
                break;
              case "thread":
                R.call(this, t3);
                break;
              case "roaming_delete":
                I.call(this, t3);
                break;
              case "conv":
                O.call(this, t3);
                break;
              case "user_notification_mute":
                S.call(this, t3);
                break;
              default:
                u.kg.error("unexpected notify type: ".concat(t3.type));
            }
          }, C = r2(7288), N = r2(9743), b = 2, M = r2(4998), k = r2(6801), w = r2(2071), U = r2(1595), P = r2(4319);
          function x(e3) {
            return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, x(e3);
          }
          var L, D, j, G = function() {
            return G = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, G.apply(this, arguments);
          }, B = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, H = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, F = function(e3, t3, r3) {
            if (r3 || 2 === arguments.length)
              for (var n3, o2 = 0, i2 = t3.length; o2 < i2; o2++)
                !n3 && o2 in t3 || (n3 || (n3 = Array.prototype.slice.call(t3, 0, o2)), n3[o2] = t3[o2]);
            return e3.concat(n3 || Array.prototype.slice.call(t3));
          };
          !function(e3) {
            e3[e3.NORMAL = 0] = "NORMAL", e3[e3.SINGLECHAT = 1] = "SINGLECHAT", e3[e3.GROUPCHAT = 2] = "GROUPCHAT", e3[e3.CHATROOM = 3] = "CHATROOM", e3[e3.READ_ACK = 4] = "READ_ACK", e3[e3.DELIVER_ACK = 5] = "DELIVER_ACK", e3[e3.RECALL = 6] = "RECALL", e3[e3.CHANNEL_ACK = 7] = "CHANNEL_ACK", e3[e3.EDIT = 8] = "EDIT";
          }(L || (L = {})), function(e3) {
            e3[e3.APNs = 0] = "APNs", e3[e3.FCM = 1] = "FCM", e3[e3.HMSPUSH = 2] = "HMSPUSH", e3[e3.MIPUSH = 3] = "MIPUSH", e3[e3.MEIZUPUSH = 4] = "MEIZUPUSH", e3[e3.VIVOPUSH = 5] = "VIVOPUSH", e3[e3.OPPOPUSH = 6] = "OPPOPUSH", e3[e3.HONORPUSH = 7] = "HONORPUSH";
          }(D || (D = {})), function(e3) {
            e3[e3.OK = 0] = "OK", e3[e3.FAIL = 1] = "FAIL", e3[e3.UNAUTHORIZED = 2] = "UNAUTHORIZED", e3[e3.MISSING_PARAMETER = 3] = "MISSING_PARAMETER", e3[e3.WRONG_PARAMETER = 4] = "WRONG_PARAMETER", e3[e3.REDIRECT = 5] = "REDIRECT", e3[e3.TOKEN_EXPIRED = 6] = "TOKEN_EXPIRED", e3[e3.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e3[e3.NO_ROUTE = 8] = "NO_ROUTE", e3[e3.UNKNOWN_COMMAND = 9] = "UNKNOWN_COMMAND", e3[e3.PB_PARSER_ERROR = 10] = "PB_PARSER_ERROR", e3[e3.BIND_ANOTHER_DEVICE = 11] = "BIND_ANOTHER_DEVICE", e3[e3.IM_FORBIDDEN = 12] = "IM_FORBIDDEN", e3[e3.TOO_MANY_DEVICES = 13] = "TOO_MANY_DEVICES", e3[e3.PLATFORM_LIMIT = 14] = "PLATFORM_LIMIT", e3[e3.USER_MUTED = 15] = "USER_MUTED", e3[e3.ENCRYPT_DISABLE = 16] = "ENCRYPT_DISABLE", e3[e3.ENCRYPT_ENABLE = 17] = "ENCRYPT_ENABLE", e3[e3.DECRYPT_FAILURE = 18] = "DECRYPT_FAILURE", e3[e3.PERMISSION_DENIED_EXTERNAL = 19] = "PERMISSION_DENIED_EXTERNAL";
          }(j || (j = {}));
          var W = ["txt", "img", "video", "audio", "file", "loc", "custom", "cmd", "combine"], Z = E.P6.getEnvInfo();
          function K() {
            var e3, t3, r3, n3, o2 = "webim", i2 = "", a2 = "", s2 = [], c2 = (/* @__PURE__ */ new Date()).valueOf(), l2 = E.P6.getDevicePlatform(Z);
            if (this.isFixedDeviceId) {
              var p2 = E.P6.getLocalDeviceInfo();
              if (p2) {
                var d2 = JSON.parse(p2);
                o2 = d2.deviceId, i2 = d2.deviceName, a2 = d2.deviceUuid;
              } else
                "webim" === this.deviceId ? (a2 = "".concat(l2, "_").concat(c2.toString()), o2 = "".concat(this.deviceId, "_").concat(a2), i2 = this.deviceId) : o2 = i2 = a2 = "webim_".concat(l2, "_").concat(this.deviceId), E.P6.setLocalDeviceInfo(JSON.stringify({ deviceId: o2, deviceName: i2, deviceUuid: a2 }));
            } else
              "webim" === this.deviceId ? (a2 = "random_".concat(l2, "_").concat(c2.toString()), o2 = "".concat(this.deviceId, "_").concat(a2), i2 = this.deviceId) : o2 = i2 = a2 = "webim_".concat(l2, "_").concat(this.deviceId);
            this.context.jid && (this.context.jid.clientResource = o2);
            var h2 = this.root.lookup("easemob.pb.Provision"), f2 = h2.decode(s2);
            f2.compressType = this.compressType, f2.encryptType = this.encryptType, f2.osType = this.osType, f2.version = this.version, f2.deviceName = i2, f2.resource = o2, f2.deviceUuid = a2, f2.authToken = '{"token":"$t$' + this.token + '"}', f2.sessionId = Date.now().toString() + ":", this.loginInfoCustomExt && (f2.reason = this.loginInfoCustomExt), u.kg.debug("provision info", { version: this.version, resource: o2, isFixedDeviceId: this.isFixedDeviceId, loginInfoCustomExt: !!this.loginInfoCustomExt, token: (null === (t3 = null === (e3 = this.token) || void 0 === e3 ? void 0 : e3.slice) || void 0 === t3 ? void 0 : t3.call(e3, 0, 10)) + "...", userId: null === (n3 = null === (r3 = this.context) || void 0 === r3 ? void 0 : r3.jid) || void 0 === n3 ? void 0 : n3.name }), f2.actionVersion = "v5.0", f2 = h2.encode(f2).finish();
            var m2 = this.root.lookup("easemob.pb.MSync"), g2 = m2.decode(s2);
            return g2.version = this.version, g2.guid = this.context.jid, g2.auth = "$t$" + this.token, g2.command = 3, g2.deviceId = i2, g2.serviceId = this.dataReport.getServiceId(), g2.encryptType = this.encryptType, g2.payload = f2, m2.encode(g2).finish();
          }
          function q(e3, t3) {
            var r3 = this, n3 = E.P6.getEnvInfo();
            if ("zfb" === n3.platform || "dd" === n3.platform) {
              for (var i2 = "", a2 = 0; a2 < e3.length; a2++)
                i2 += String.fromCharCode(e3[a2]);
              return { data: i2 = o().btoa(i2), isBuffer: false, complete: function() {
              }, fail: function(e4) {
                "sendSocketMessage:fail taskID not exist" !== e4.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e4.errMsg || (u.kg.debug("send message fail and reconnect"), r3.reconnecting || r3.reconnect()), t3 && r3._msgHash && r3._msgHash[t3] && r3._msgHash[t3].fail({ id: t3 });
              } };
            }
            var s2 = e3;
            return { data: s2.buffer.slice(s2.byteOffset, s2.byteOffset + s2.byteLength), fail: function(e4) {
              "sendSocketMessage:fail taskID not exist" !== e4.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e4.errMsg || r3.reconnecting || r3.reconnect(), t3 && r3._msgHash && r3._msgHash[t3] && r3._msgHash[t3].fail({ id: t3 });
            } };
          }
          function z(e3, t3) {
            var r3;
            return B(this, void 0, void 0, function() {
              var n3, o2, i2, s2, l2, p2;
              return H(this, function(d2) {
                switch (d2.label) {
                  case 0:
                    for (u.kg.debug("distributeMeta, metas length: ", e3.length), n3 = [], o2 = function(r4) {
                      var o3 = e3[r4], s3 = new (a())(o3.id.low, o3.id.high, o3.id.unsigned).toString(), l3 = o3.from.name, p3 = o3.to ? o3.to.name : "", d3 = !!o3.to && -1 !== o3.to.domain.indexOf("conference");
                      if (i2._load_msg_cache.some(function(e4) {
                        return e4.msgId === s3;
                      }))
                        return "continue";
                      switch (i2._load_msg_cache.length <= i2.max_cache_length || i2._load_msg_cache.shift(), i2._load_msg_cache.push({ msgId: s3, from: l3, to: p3, isGroup: d3 }), o3.ns) {
                        case 0:
                          g.call(i2, o3);
                          break;
                        case 1:
                          n3.push(c.Z.call(i2, o3, t3, false, true, true));
                          break;
                        case 2:
                          h.call(i2, o3);
                          break;
                        case 3:
                          f.handleRosterMsg.call(i2, o3);
                          break;
                        case 4:
                          i2.registerConfrIQHandler && i2.registerConfrIQHandler(o3, t3, i2);
                          break;
                        case 5:
                          A.call(i2, o3);
                          break;
                        default:
                          u.kg.error("distributeMeta", o3);
                      }
                    }, i2 = this, s2 = 0; s2 < e3.length; s2++)
                      o2(s2);
                    return [4, Promise.all(n3)];
                  case 1:
                    return l2 = d2.sent(), (p2 = l2.filter(function(e4) {
                      return e4 && "cmd" !== e4.type;
                    })).length > 0 && (null === (r3 = this.eventHandler) || void 0 === r3 || r3.dispatch("onMessage", p2)), [2];
                }
              });
            });
          }
          function V(e3, t3) {
            z.call(this, e3, t3);
          }
          function X(e3) {
            var t3;
            this._offlineMessagePullState === M.a.SYNC_INIT && (this._offlineMessagePullState = M.a.SYNC_START, this._offlineMessagePullQueue = e3.unread.reduce(function(e4, t4) {
              return e4.find(function(e5) {
                return e5.name === t4.queue.name;
              }) || e4.push(t4.queue), e4;
            }, []), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onOfflineMessageSyncStart"));
          }
          function J(e3) {
            var t3;
            if (this._offlineMessagePullState === M.a.SYNC_START) {
              var r3 = this._offlineMessagePullQueue.findIndex(function(t4) {
                return t4.name === e3.queue.name;
              });
              r3 > -1 && this._offlineMessagePullQueue.splice(r3, 1), 0 === this._offlineMessagePullQueue.length && (this._offlineMessagePullState = M.a.SYNC_FINISH, null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onOfflineMessageSyncFinish"));
            }
          }
          function Y(e3) {
            var t3 = this.root.lookup("easemob.pb.CommUnreadDL");
            t3 = t3.decode(e3.payload);
            var r3 = new (a())(t3.timestamp.low, t3.timestamp.high, t3.timestamp.unsigned).toString();
            if (this.expirationTime && this.compareTokenExpireTime(Number(r3), this.expirationTime), 0 === t3.unread.length)
              se.call(this);
            else {
              X.call(this, t3), u.kg.debug("pull unread message", t3.unread);
              for (var n3 = 0; n3 < t3.unread.length; n3++) {
                var o2 = de(this._queues, t3.unread[n3].queue), i2 = de(this.unSyncQueue, t3.unread[n3].queue);
                o2 || i2 ? u.kg.warn("receive unread message and already in queue") : this.unSyncQueue.push(t3.unread[n3].queue);
              }
              for (n3 = 0; n3 < this.unSyncQueue.length; n3++)
                this.unSyncQueue[n3].hasSync || ee.call(this, this.unSyncQueue[n3]), this.unSyncQueue[n3].hasSync = true;
            }
            se.call(this);
          }
          function Q() {
            var e3 = [], t3 = this.root.lookup("easemob.pb.StatisticsBody"), r3 = t3.decode(e3);
            r3.operation = 0, r3 = t3.encode(r3).finish();
            var n3 = this.root.lookup("easemob.pb.Meta").decode(e3);
            n3.id = (/* @__PURE__ */ new Date()).valueOf(), n3.ns = 0, n3.payload = r3;
            var o2 = this.root.lookup("easemob.pb.CommSyncUL"), i2 = o2.decode(e3);
            i2.meta = n3, i2 = o2.encode(i2).finish();
            var a2 = this.root.lookup("easemob.pb.MSync"), s2 = a2.decode(e3);
            return s2.version = this.version, s2.encryptType = [0], s2.command = 0, s2.payload = i2, a2.encode(s2).finish();
          }
          function $2(e3) {
            var t3 = [], r3 = this.root.lookup("easemob.pb.CommSyncUL"), n3 = r3.decode(t3);
            n3.queue = e3, n3 = r3.encode(n3).finish();
            var o2 = this.root.lookup("easemob.pb.MSync"), i2 = o2.decode(t3);
            return i2.version = this.version, i2.encryptType = this.encryptType, i2.command = 0, i2.payload = n3, o2.encode(i2).finish();
          }
          function ee(e3) {
            u.kg.debug("sendBackqueue");
            var t3 = $2.call(this, e3);
            Se.call(this, t3);
          }
          function te(e3, t3) {
            var r3 = [], n3 = this.root.lookup("easemob.pb.CommSyncUL"), o2 = n3.decode(r3);
            o2.queue = t3, o2.key = new (a())(e3.low, e3.high, e3.unsigned).toString(), o2 = n3.encode(o2).finish();
            var i2 = this.root.lookup("easemob.pb.MSync"), s2 = i2.decode(r3);
            return s2.version = this.version, s2.encryptType = this.encryptType, s2.command = 0, s2.payload = o2, i2.encode(s2).finish();
          }
          function re() {
            var e3 = this;
            this.uniPush && false === this.isRegisterPush && (this.isRegisterPush = true, this.uniPush.onRegister(function(t3) {
              u.kg.debug("push token onRegister", t3);
              var r3 = e3.uniPushConfig || {}, n3 = r3.APNsCertificateName, o2 = void 0 === n3 ? "" : n3, i2 = r3.HMSCertificateName, a2 = void 0 === i2 ? "" : i2, s2 = r3.HONORCertificateName, c2 = void 0 === s2 ? "" : s2, l2 = r3.MEIZUCertificateName, p2 = void 0 === l2 ? "" : l2, d2 = r3.MICertificateName, h2 = void 0 === d2 ? "" : d2, f2 = r3.OPPOCertificateName, m2 = void 0 === f2 ? "" : f2, g2 = r3.VIVOCertificateName, E2 = void 0 === g2 ? "" : g2;
              switch (t3.push_type) {
                case D.APNs:
                  e3.pushCertificateName = o2;
                  break;
                case D.HMSPUSH:
                  e3.pushCertificateName = a2;
                  break;
                case D.HONORPUSH:
                  e3.pushCertificateName = c2;
                  break;
                case D.MEIZUPUSH:
                  e3.pushCertificateName = p2;
                  break;
                case D.MIPUSH:
                  e3.pushCertificateName = h2;
                  break;
                case D.OPPOPUSH:
                  e3.pushCertificateName = m2;
                  break;
                case D.VIVOPUSH:
                  e3.pushCertificateName = E2;
                  break;
                default:
                  u.kg.error("unexpected push type", t3.push_type);
              }
              e3.pushCertificateName && t3.push_token && k.r.call(e3, { deviceId: e3.clientResource, deviceToken: t3.push_token, notifierName: e3.pushCertificateName }).then(function() {
                u.kg.debug("uploadPushToken success");
              }).catch(function(e4) {
                u.kg.debug("uploadPushToken failed", e4);
              });
            }));
          }
          function ne() {
            var e3;
            this._offlineMessagePullState = M.a.SYNC_INIT, this._offlineMessagePullQueue = [], this.times = 1, this.autoReconnectNumTotal = 0, this.onOpened && this.onOpened(), re.call(this), null === (e3 = this.eventHandler) || void 0 === e3 || e3.dispatch("onConnected"), ae.call(this), ue.call(this), ce.call(this), se.call(this);
          }
          function oe(e3, t3) {
            u.kg.debug("sendLastSession", e3);
            var r3 = te.call(this, e3, t3);
            Se.call(this, r3);
          }
          function ie(e3) {
            var t3, r3, n3, o2, i2, a2, c2, l2, p2, d2, h2, f2, g2, E2, v2 = this, y2 = this.root.lookup("easemob.pb.Provision").decode(e3.payload);
            if (this.context.jid && (this.context.jid.clientResource = y2.resource), this.clientResource = y2.resource, this.provisionTimer && clearTimeout(this.provisionTimer), u.kg.debug("receiveProvisionResult", y2.status), this._isLogging = false, y2.status.errorCode === j.OK) {
              if (this.disconnectedReason = void 0, y2.authToken) {
                var T2 = JSON.parse(y2.authToken).expires_in;
                if (!this.tokenExpiredTimer && !this.tokenWillExpireTimer) {
                  var _2 = Date.now();
                  this.expirationTime = T2;
                  var R2 = this.expirationTime - _2;
                  this.expiresIn = R2 < 0 ? 0 : R2, this.tokenExpireTimeCountDown(this.expiresIn);
                }
              }
              this.reconnecting = false, this.logOut = false, this.needSetReadyState && (this.sock.readyState = 1), this._localCache ? (null === (t3 = this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) ? ne.call(this) : this._localCache && new this._localCache({ user: this.user, dbName: "cache_".concat(Math.abs((0, N.un)(this.appKey)), "_").concat(this.user), version: b, onInit: function() {
                return B(v2, void 0, void 0, function() {
                  return H(this, function(e4) {
                    return u.kg.debug("localCache init success"), ne.call(this), [2];
                  });
                });
              } }) : ne.call(this), null === (r3 = this.connectionResolve) || void 0 === r3 || r3.call(this);
            } else {
              var I2 = void 0, O2 = y2.status, S2 = O2.reason, A2 = O2.errorCode;
              switch (u.kg.debug("provision errorCode: ", A2), u.kg.debug("provision reason: ", S2), A2) {
                case j.FAIL:
                  I2 = "Sorry, user register limit" === S2 ? m.Z.create({ type: s.E.MAX_LIMIT, message: "Sorry, the number of user registrations limit has been reached" }) : "Sorry, user register rate limit" === S2 ? m.Z.create({ type: s.E.MAX_LIMIT, message: "Sorry, user register rate limit" }) : "Sorry, token expired" === S2 ? m.Z.create({ type: s.E.WEBIM_TOKEN_EXPIRED, message: "Sorry, token expired" }) : "Sorry, token or password does not match login info" === S2 ? m.Z.create({ type: s.E.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "INVALID_TOKEN" }) : "Sorry, user not found" === S2 ? m.Z.create({ type: s.E.USER_NOT_FOUND, message: "User not found" }) : m.Z.create({ type: s.E.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (n3 = this.connectionReject) || void 0 === n3 || n3.call(this, I2), null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onError", I2);
                  break;
                case j.WRONG_PARAMETER:
                  I2 = m.Z.create({ type: s.E.REQUEST_PARAMETER_ERROR, message: "Invalid parameter" }), null === (i2 = this.connectionReject) || void 0 === i2 || i2.call(this, I2), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onError", I2);
                  break;
                case j.UNAUTHORIZED:
                  I2 = m.Z.create({ type: s.E.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (c2 = this.connectionReject) || void 0 === c2 || c2.call(this, I2), null === (l2 = this.eventHandler) || void 0 === l2 || l2.dispatch("onError", I2);
                  break;
                case j.IM_FORBIDDEN:
                  I2 = m.Z.create({ type: s.E.WEBIM_SERVER_SERVING_DISABLED, message: "Server serving disabled." }), null === (p2 = this.connectionReject) || void 0 === p2 || p2.call(this, I2), null === (d2 = this.eventHandler) || void 0 === d2 || d2.dispatch("onError", I2);
                  break;
                case j.PERMISSION_DENIED:
                  I2 = "Sorry, the app month live count limit" === S2 ? m.Z.create({ type: s.E.MAX_LIMIT, message: "Sorry, the monthly active user limit for this app has been reached" }) : "Sorry, the app day live count limit" === S2 ? m.Z.create({ type: s.E.MAX_LIMIT, message: "Sorry, the daily active user limit for this app has been reached" }) : "Sorry, the app online count limit" === S2 ? m.Z.create({ type: s.E.MAX_LIMIT, message: "Sorry, the maximum number limit of online users for this app has been reached" }) : m.Z.create({ type: s.E.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (h2 = this.connectionReject) || void 0 === h2 || h2.call(this, I2), null === (f2 = this.eventHandler) || void 0 === f2 || f2.dispatch("onError", I2);
                  break;
                default:
                  I2 = m.Z.create({ type: s.E.WEBIM_CONNCTION_AUTH_ERROR, message: S2 }), null === (g2 = this.connectionReject) || void 0 === g2 || g2.call(this, I2), null === (E2 = this.eventHandler) || void 0 === E2 || E2.dispatch("onError", I2);
              }
              this.disconnectedReason = I2;
            }
          }
          function ae() {
            var e3, t3;
            if ((null === (e3 = this.unMSyncSendMsgMap) || void 0 === e3 ? void 0 : e3.size) > 0) {
              for (var r3 = Array.from(this.unMSyncSendMsgMap.keys()), n3 = 0; n3 < r3.length; n3++) {
                var o2 = this.unMSyncSendMsgMap.get(r3[n3]);
                Se.call(this, o2, r3[n3]);
              }
              null === (t3 = this.unMSyncSendMsgMap) || void 0 === t3 || t3.clear();
            }
          }
          function se() {
            var e3 = Q.call(this);
            Se.call(this, e3);
          }
          function ce() {
            u.kg.debug("sendUnreadDeal");
            var e3 = pe.call(this);
            Se.call(this, e3);
          }
          function ue() {
            var e3 = this;
            le.call(this), this.heartBeatID = setInterval(function() {
              (Date.now() - e3.lastHeartbeat) / 1e3 >= 30 && (u.kg.debug("send heart beat"), ce.call(e3), e3.lastHeartbeat = Date.now());
            }, this.heartBeatWait);
          }
          function le() {
            clearInterval(this.heartBeatID);
          }
          function pe() {
            var e3 = this.root.lookup("easemob.pb.MSync"), t3 = e3.decode([]);
            return t3.version = this.version, t3.encryptType = this.encryptType, t3.command = 1, e3.encode(t3).finish();
          }
          function de(e3, t3) {
            return e3.some(function(e4) {
              return e4.name === t3.name;
            });
          }
          function he(e3) {
            var t3 = this.root.lookup("easemob.pb.CommNotice"), r3 = t3.decode(e3.payload), n3 = de(this._queues, r3.queue);
            u.kg.debug("receive notice", t3, this._queues);
            var o2 = de(this.unSyncQueue, r3.queue);
            n3 || o2 || this.clientResource === r3.queue.clientResource && r3.queue.name === this.context.userId || (this._queues.push(r3.queue), 1 === this._queues.length && ee.call(this, r3.queue));
          }
          function fe(e3) {
            return B(this, void 0, void 0, function() {
              var t3, r3, n3, i2, a2, s2, c2, u2;
              return H(this, function(l2) {
                if (t3 = E.P6.getEnvInfo(), r3 = this.root.lookup("easemob.pb.MSync"), "miniCore" === this.name || "web" === t3.platform) {
                  try {
                    i2 = new Uint8Array(e3.data), n3 = r3.decode(i2);
                  } catch (e4) {
                    throw new Error("decode message fail.");
                  }
                  return [2, n3];
                }
                if ("zfb" === t3.platform || "dd" === t3.platform) {
                  for (a2 = o().atob(e3.data), s2 = [], c2 = 0, u2 = a2.length; c2 < u2; ++c2)
                    s2.push(a2.charCodeAt(c2));
                  return [2, r3.decode(s2)];
                }
                try {
                  n3 = r3.decode(e3.data);
                } catch (e4) {
                  throw new Error("decode message fail.");
                }
                return [2, n3];
              });
            });
          }
          function me(e3) {
            var t3 = this;
            this.lastHeartbeat = Date.now(), this.probingTimer && clearTimeout(this.probingTimer), e3.then(function(e4) {
              if (e4)
                switch (e4.command) {
                  case 0:
                    ge.call(t3, e4);
                    break;
                  case 1:
                    Y.call(t3, e4);
                    break;
                  case 2:
                    he.call(t3, e4);
                    break;
                  case 3:
                    ie.call(t3, e4);
                    break;
                  default:
                    u.kg.error("unexpected msync command: ".concat(e4.command));
                }
              else
                u.kg.error("unexpected msync result: ".concat(e4));
            });
          }
          function ge(e3) {
            var t3, r3, n3, o2, i2, l2, p2, d2, h2, f2, g2, v2, y2, T2, _2, R2, I2, O2, S2, A2, N2, b2, M2, k2, P2, x2, L2, D2, j2, F2, W2, Z2, K2, q2, z2, X2, Y2, Q2, $3, te2, re2, ne2, ie2, ae2, se2, ce2;
            return B(this, void 0, void 0, function() {
              var B2, ue2, le2, pe2, de2, he2, fe2, me2, ge2, Ee2, ve2, ye2, Te2, _e2, Re2, Ie2, Oe2, Se2, Ae2, Ce, Ne, be, Me, ke, we, Ue, Pe, xe, Le, De, je, Ge, Be, He, Fe, We, Ze, Ke, qe, ze, Ve, Xe, Je, Ye = this;
              return H(this, function(H2) {
                switch (H2.label) {
                  case 0:
                    if (B2 = (B2 = this.root.lookup("easemob.pb.CommSyncDL")).decode(e3.payload), ue2 = new (a())(B2.serverId.low, B2.serverId.high, B2.serverId.unsigned).toString(), le2 = new (a())(B2.metaId.low, B2.metaId.high, B2.metaId.unsigned).toString(), !(Number(le2) > 0))
                      return [3, 23];
                    if (clearTimeout(null === (t3 = this._msgHash[le2]) || void 0 === t3 ? void 0 : t3.messageTimer), !B2.status)
                      return [3, 22];
                    if (0 !== B2.status.errorCode)
                      return [3, 21];
                    if (null == (pe2 = this._msgHash[le2]) ? void 0 : pe2.isHandleChatroom) {
                      try {
                        de2 = "join" === (null === (r3 = this._msgHash[le2]) || void 0 === r3 ? void 0 : r3.operation), (null === (n3 = this._msgHash[le2]) || void 0 === n3 ? void 0 : n3.resolve) instanceof Function && de2 && this._msgHash[le2].resolve({ type: 0, data: { action: "apply", id: this._msgHash[le2].roomId, result: true, user: this.context.userId } }), (null === (o2 = this._msgHash[le2]) || void 0 === o2 ? void 0 : o2.success) instanceof Function && de2 && this._msgHash[le2].success({ type: 0, data: { action: "apply", id: this._msgHash[le2].roomId, result: true, user: this.context.userId } }), (null === (i2 = this._msgHash[le2]) || void 0 === i2 ? void 0 : i2.resolve) instanceof Function && !de2 && this._msgHash[le2].resolve({ type: 0, data: { result: true } }), (null === (l2 = this._msgHash[le2]) || void 0 === l2 ? void 0 : l2.success) instanceof Function && !de2 && this._msgHash[le2].success({ type: 0, data: { result: true } }), w.iO.has(le2) && (he2 = w.iO.get(le2), Fe = he2.rpt, We = he2.requestName, Fe({ isEndApi: true, data: { isSuccess: 1, requestName: We, requestMethod: "WEBSOCKET", requestUrl: this.url, code: U.dd.success } }), w.iO.delete(le2));
                      } catch (e4) {
                        w.iO.has(le2) && (fe2 = w.iO.get(le2), Fe = fe2.rpt, We = fe2.requestName, Fe({ isEndApi: true, data: { isSuccess: 0, requestName: We, requestMethod: "WEBSOCKET", requestUrl: this.url, code: U.dd.failed, codeDesc: "when executing success function error" } }), w.iO.delete(le2)), Ke = m.Z.create({ type: s.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: e4 }), this.onError && this.onError(Ke), null === (p2 = this.eventHandler) || void 0 === p2 || p2.dispatch("onError", Ke);
                      }
                      delete this._msgHash[le2];
                    }
                    return !pe2 || pe2.isHandleChatroom ? [3, 20] : (me2 = null, ge2 = "", Ee2 = 0, ve2 = null, this._msgHash[le2].thirdMessage ? (this._msgHash[le2].thirdMessage.id = B2.serverId, this._msgHash[le2].thirdMessage.timestamp = B2.timestamp, [4, c.Z.call(this, this._msgHash[le2].thirdMessage, B2.status, true, true)]) : [3, 2]);
                  case 1:
                    ve2 = H2.sent(), H2.label = 2;
                  case 2:
                    if (0 === B2.metas.length)
                      return [3, 13];
                    H2.label = 3;
                  case 3:
                    switch (H2.trys.push([3, 12, , 13]), ye2 = B2.metas[0], Te2 = B2.status, ye2.ns) {
                      case 1:
                        return [3, 4];
                      case 5:
                        return [3, 9];
                    }
                    return [3, 10];
                  case 4:
                    return this.useReplacedMessageContents ? [4, c.Z.call(this, ye2, Te2, true, true)] : [3, 8];
                  case 5:
                    return ve2 = H2.sent(), [4, null === (h2 = null === (d2 = this._localCache) || void 0 === d2 ? void 0 : d2.getInstance()) || void 0 === h2 ? void 0 : h2.getMessageByServerMsgId(le2)];
                  case 6:
                    return (_e2 = H2.sent()) ? [4, null === (g2 = null === (f2 = this._localCache) || void 0 === f2 ? void 0 : f2.getInstance()) || void 0 === g2 ? void 0 : g2.putMessageToDB(G(G(G({}, _e2), ve2), { id: le2 }))] : [3, 8];
                  case 7:
                    H2.sent(), H2.label = 8;
                  case 8:
                    return [3, 11];
                  case 9:
                    return (Re2 = E.P6.parseNotify(B2.metas[0].payload)).edit_msg && (Ie2 = Re2.edit_msg, Oe2 = Ie2.count, Se2 = Ie2.operator, Ae2 = Ie2.edit_time, Ce = Ie2.sender, Ne = Ie2.send_time, me2 = { operationTime: Ae2, operatorId: Se2, operationCount: Oe2 }, ge2 = Ce, Ee2 = Number(Ne)), [3, 11];
                  case 10:
                    return u.kg.error("decode local meta error", ye2), [3, 11];
                  case 11:
                    return [3, 13];
                  case 12:
                    return be = H2.sent(), Ke = m.Z.create({ type: s.E.WEBIM_LOAD_MSG_ERROR, message: "decode local meta message error", data: be }), this.onError && this.onError(Ke), null === (v2 = this.eventHandler) || void 0 === v2 || v2.dispatch("onError", Ke), [3, 13];
                  case 13:
                    w.TJ.has(le2) && (w.TJ.get(le2).rpt({ isEndApi: true, data: { isSuccess: 1, requestMethod: "WEBSOCKET", requestUrl: this.url, code: U.dd.success, msgId: ue2 } }), w.TJ.delete(le2)), H2.label = 14;
                  case 14:
                    return H2.trys.push([14, 18, , 19]), Me = { localMsgId: le2, serverMsgId: ue2 }, me2 && (this._msgHash[le2].modifiedInfo = me2, ke = this._msgHash[le2], we = ke.editMessageId, Ge = ke.type, Ue = ke.chatType, Pe = ke.msg, xe = ke.to, Le = ke.translations, De = { id: we, type: Ge, chatType: Ue, msg: Pe, modifiedInfo: me2, to: xe, from: ge2, time: Number(Ee2) }, Le && (De.translations = Le), Me.message = De, null === (_2 = null === (T2 = null === (y2 = this._localCache) || void 0 === y2 ? void 0 : y2.getInstance()) || void 0 === T2 ? void 0 : T2.getMessageByServerMsgId(we)) || void 0 === _2 || _2.then(function(e4) {
                      var t4, r4;
                      e4 && "txt" === e4.type && (null === (r4 = null === (t4 = Ye._localCache) || void 0 === t4 ? void 0 : t4.getInstance()) || void 0 === r4 || r4.putMessageToDB(G(G({}, e4), { msg: De.msg, modifiedInfo: De.modifiedInfo, translations: De.translations })));
                    })), ve2 && (Me.message = ve2), [4, null === (I2 = null === (R2 = this._localCache) || void 0 === R2 ? void 0 : R2.getInstance()) || void 0 === I2 ? void 0 : I2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.SUCCESS })];
                  case 15:
                    return H2.sent(), (null === (O2 = this._msgHash[le2]) || void 0 === O2 ? void 0 : O2.success) instanceof Function ? [4, this._msgHash[le2].success(le2, ue2)] : [3, 17];
                  case 16:
                    H2.sent(), H2.label = 17;
                  case 17:
                    return (null === (S2 = this._msgHash[le2]) || void 0 === S2 ? void 0 : S2.resolve) instanceof Function && this._msgHash[le2].resolve(Me), [3, 19];
                  case 18:
                    return je = H2.sent(), Ke = m.Z.create({ type: s.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: je }), this.onError && this.onError(Ke), null === (A2 = this.eventHandler) || void 0 === A2 || A2.dispatch("onError", Ke), [3, 19];
                  case 19:
                    this.onReceivedMessage && this.onReceivedMessage({ id: le2, mid: ue2, to: this._msgHash[le2].to, time: 0 }), null === (N2 = this.eventHandler) || void 0 === N2 || N2.dispatch("onReceivedMessage", { id: le2, mid: ue2, to: this._msgHash[le2].to }), delete this._msgHash[le2], H2.label = 20;
                  case 20:
                    return [3, 22];
                  case 21:
                    if (15 === B2.status.errorCode)
                      (null === (b2 = this._msgHash[le2]) || void 0 === b2 ? void 0 : b2.fail) instanceof Function && this._msgHash[le2].fail({ type: s.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject({ type: s.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), null === (k2 = null === (M2 = this._localCache) || void 0 === M2 ? void 0 : M2.getInstance()) || void 0 === k2 || k2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL });
                    else if (1 === B2.status.errorCode) {
                      switch (Ge = void 0, B2.status.reason) {
                        case "blocked":
                          Ge = s.E.PERMISSION_DENIED;
                          break;
                        case "group not found":
                          Ge = s.E.GROUP_NOT_EXIST;
                          break;
                        case "not in group or chatroom":
                          Ge = s.E.GROUP_NOT_JOINED;
                          break;
                        case "exceed recall time limit":
                          Ge = s.E.MESSAGE_RECALL_TIME_LIMIT;
                          break;
                        case "message recall disabled":
                          Ge = s.E.SERVICE_NOT_ENABLED;
                          break;
                        case "not in group or chatroom white list":
                          Ge = s.E.SERVICE_NOT_ALLOW_MESSAGING;
                          break;
                        case "nonroster":
                          Ge = s.E.USER_NOT_FRIEND, B2.status.reason = "not contact";
                          break;
                        case "group is disabled":
                          Ge = s.E.GROUP_IS_DISABLED, B2.status.reason = "group is disabled";
                          break;
                        case "limit directed users":
                          Ge = s.E.MAX_LIMIT;
                          break;
                        case "Sorry, edit limit reached":
                          Ge = s.E.MAX_LIMIT, B2.status.reason = "Modify message limit reached";
                          break;
                        case "Sorry, message does not exist":
                          Ge = s.E.MODIFY_MESSAGE_NOT_EXIST, B2.status.reason = "The message does not exist.";
                          break;
                        case "Sorry, You do not have permission":
                          Ge = s.E.PERMISSION_DENIED, B2.status.reason = "You do not have the modified permission.";
                          break;
                        case "Sorry, format is incorrect":
                          Ge = s.E.MODIFY_MESSAGE_FORMAT_ERROR, B2.status.reason = "The modify messaged format error.";
                          break;
                        case "Sorry, edit is not available":
                          Ge = s.E.SERVICE_NOT_ENABLED, B2.status.reason = "The message modify function is not activated.";
                          break;
                        case "Sorry, edit fail":
                          Ge = s.E.MODIFY_MESSAGE_FAILED, B2.status.reason = "Modify message failed.";
                          break;
                        default:
                          B2.status.reason.includes("grpID") && B2.status.reason.includes("does not exist!") ? (Ge = s.E.CHATROOM_NOT_EXIST, B2.status.reason = "The chat room dose not exist.") : B2.status.reason.includes("username") && B2.status.reason.includes("doesn't exist!") ? Ge = s.E.USER_NOT_FOUND : "group member list is full!" === B2.status.reason ? Ge = s.E.CHATROOM_MEMBERS_FULL : B2.status.reason.includes("can not join this group") && B2.status.reason.includes("is in the blacklist") ? (Ge = s.E.PERMISSION_DENIED, B2.status.reason = "permission denied") : "can not operate this group, reason: group is disabled" === B2.status.reason ? Ge = s.E.GROUP_IS_DISABLED : B2.status.reason.includes("moderation") ? Ge = s.E.MESSAGE_MODERATION_BLOCKED : B2.status.reason.includes("group ID illegal, please check it") ? (Ge = s.E.REQUEST_PARAMETER_ERROR, B2.status.reason = "Invalid parameter") : Ge = B2.status.reason.includes("has create too many chatrooms") || B2.status.reason.includes("has joined too many chatrooms") ? s.E.MAX_LIMIT : B2.status.reason.includes("auto create failed") ? s.E.SERVER_BUSY : s.E.SERVER_UNKNOWN_ERROR;
                      }
                      this._msgHash[le2] && ((null === (P2 = this._msgHash[le2]) || void 0 === P2 ? void 0 : P2.isHandleChatroom) ? (Ze = m.Z.create({ type: Ge, message: B2.status.reason || "", data: "" }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].error instanceof Function && this._msgHash[le2].error(Ze), w.iO.has(le2) && (Be = U.dd.failed, Ge === s.E.CHATROOM_NOT_EXIST ? Be = U.dd.notFound : Ge === s.E.CHATROOM_MEMBERS_FULL && (Be = U.dd.reachLimit), He = w.iO.get(le2), Fe = He.rpt, We = He.requestName, Fe({ isEndApi: true, data: { isSuccess: 0, requestName: We, requestMethod: "WEBSOCKET", requestUrl: this.url, code: Be, codeDesc: B2.status.reason } }), w.iO.delete(le2))) : (Ze = m.Z.create({ type: Ge, message: B2.status.reason || "", data: { id: le2, mid: ue2 } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail({ type: Ge, reason: B2.status.reason ? B2.status.reason : "", data: { id: le2, mid: ue2 } }), null === (L2 = null === (x2 = this._localCache) || void 0 === x2 ? void 0 : x2.getInstance()) || void 0 === L2 || L2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL })), delete this._msgHash[le2]);
                    } else if (7 === B2.status.errorCode)
                      "sensitive words" === B2.status.reason && this._msgHash[le2] ? (Ze = m.Z.create({ type: s.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "sensitive words", data: { id: le2, mid: ue2 } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail({ type: s.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: le2, mid: ue2, reason: "sensitive words" } }), null === (j2 = null === (D2 = this._localCache) || void 0 === D2 ? void 0 : D2.getInstance()) || void 0 === j2 || j2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL })) : "blocked by mod_antispam" === B2.status.reason && this._msgHash[le2] ? (Ze = m.Z.create({ type: s.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "blocked by mod_antispam", data: { id: le2, mid: ue2 } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail({ type: s.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: le2, mid: ue2, reason: "blocked by mod_antispam" } }), null === (W2 = null === (F2 = this._localCache) || void 0 === F2 ? void 0 : F2.getInstance()) || void 0 === W2 || W2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL })) : "user is mute" === B2.status.reason && this._msgHash[le2] ? (Ze = m.Z.create({ type: s.E.USER_MUTED_BY_ADMIN, message: "user is mute", data: { id: le2, mid: ue2 } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail(Ze), null === (K2 = null === (Z2 = this._localCache) || void 0 === Z2 ? void 0 : Z2.getInstance()) || void 0 === K2 || K2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL })) : "traffic limit" === B2.status.reason && this._msgHash[le2] ? (Ze = m.Z.create({ type: s.E.MESSAGE_CURRENT_LIMITING, message: "traffic limit", data: { id: le2, mid: ue2 } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail(Ze), null === (z2 = null === (q2 = this._localCache) || void 0 === q2 ? void 0 : q2.getInstance()) || void 0 === z2 || z2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL })) : "Sorry, data is too large" === B2.status.reason && this._msgHash[le2] && (Ze = m.Z.create({ type: s.E.MESSAGE_SIZE_LIMIT, message: "Sorry, data is too large", data: { id: le2, mid: ue2 } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail(Ze), null === (Y2 = null === (X2 = this._localCache) || void 0 === X2 ? void 0 : X2.getInstance()) || void 0 === Y2 || Y2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL }));
                    else if (19 === B2.status.errorCode)
                      this._msgHash[le2] && (w.TJ.has(le2) && (w.TJ.get(le2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: s.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, codeDesc: B2.status.reason || "", msgId: ue2 } }), w.TJ.delete(le2)), Ze = m.Z.create({ type: s.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, message: B2.status.reason || "", data: { id: le2, mid: ue2 } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail({ type: s.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, data: { id: le2, mid: ue2, reason: B2.status.reason } }), null === ($3 = null === (Q2 = this._localCache) || void 0 === Q2 ? void 0 : Q2.getInstance()) || void 0 === $3 || $3.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL }));
                    else if (this._msgHash[le2]) {
                      w.TJ.has(le2) && (w.TJ.get(le2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: s.E.WEBIM_LOAD_MSG_ERROR, codeDesc: (null === (te2 = B2.status) || void 0 === te2 ? void 0 : te2.reason) || "", msgId: ue2 } }), w.TJ.delete(le2));
                      try {
                        Ze = m.Z.create({ type: s.E.WEBIM_LOAD_MSG_ERROR, message: (null === (re2 = B2.status) || void 0 === re2 ? void 0 : re2.reason) || "", data: { id: le2, mid: ue2, reason: B2.status && B2.status.reason } }), this._msgHash[le2].reject instanceof Function && this._msgHash[le2].reject(Ze), null === (ie2 = null === (ne2 = this._localCache) || void 0 === ne2 ? void 0 : ne2.getInstance()) || void 0 === ie2 || ie2.updateLocalMessage(le2, { serverMsgId: ue2, status: C.r.FAIL }), this._msgHash[le2].fail instanceof Function && this._msgHash[le2].fail({ type: s.E.WEBIM_LOAD_MSG_ERROR, data: { errorCode: B2.status && B2.status.errorCode, reason: B2.status && B2.status.reason } });
                      } catch (e4) {
                        Ke = m.Z.create({ type: s.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing fail function error", data: e4 }), this.onError && this.onError(Ke), null === (ae2 = this.eventHandler) || void 0 === ae2 || ae2.dispatch("onError", Ke);
                      }
                      delete this._msgHash[le2];
                    } else
                      w.TJ.has(le2) && (w.TJ.get(le2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: s.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, codeDesc: "on message error", msgId: ue2 } }), w.TJ.delete(le2)), Ke = m.Z.create({ type: s.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "on message error" }), this.onError && this.onError(Ke), null === (se2 = this.eventHandler) || void 0 === se2 || se2.dispatch("onError", Ke);
                    H2.label = 22;
                  case 22:
                    return [2];
                  case 23:
                    if (B2.metas && 0 !== B2.metas.length)
                      try {
                        V.call(this, B2.metas, B2.status);
                      } catch (e4) {
                        Ke = m.Z.create({ type: s.E.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: e4 }), u.kg.error("decode message error", e4), this.onError && this.onError(Ke), null === (ce2 = this.eventHandler) || void 0 === ce2 || ce2.dispatch("onError", Ke);
                      } finally {
                        B2.isLast ? (u.kg.debug("metas & CommSyncDLMessage.isLast", B2.isLast), qe = -1, this._queues.some(function(e4, t4) {
                          return e4.name === B2.name && (qe = t4, true);
                        }) && qe > 0 && this._queues.splice(qe, 1), this._queues.length > 0 && ee.call(this, this._queues[0]), ze = -1, this.unSyncQueue.some(function(e4, t4) {
                          return e4.name === B2.queue.name && (ze = t4, true);
                        }) && this.unSyncQueue.splice(ze, 1), J.call(this, B2)) : B2.nextKey && (Je = new (a())(B2.nextKey.low, B2.nextKey.high, B2.nextKey.unsigned).toString(), u.kg.debug("nexKey:", Je, "this.nextKey:", this.nexKey), Je !== this.nexKey && (this.nexKey = Je, oe.call(this, B2.nextKey, B2.queue)));
                      }
                    else
                      B2.isLast ? (u.kg.debug("CommSyncDLMessage.isLast", B2.isLast), Ve = -1, this._queues.some(function(e4, t4) {
                        return e4.name === B2.queue.name && (Ve = t4, true);
                      }) && this._queues.splice(Ve, 1), this._queues.length > 0 && ee.call(this, this._queues[0]), Xe = -1, this.unSyncQueue.some(function(e4, t4) {
                        return e4.name === B2.queue.name && (Xe = t4, true);
                      }) && this.unSyncQueue.splice(Xe, 1), J.call(this, B2)) : B2.nextKey && (Je = new (a())(B2.nextKey.low, B2.nextKey.high, B2.nextKey.unsigned).toString(), u.kg.debug("nexKey:", Je, "this.nextKey:", this.nexKey), Je !== this.nexKey && (this.nexKey = Je, oe.call(this, B2.nextKey, B2.queue)));
                    return [2];
                }
              });
            });
          }
          function Ee(e3) {
            var t3 = [], r3 = this.root.lookup("easemob.pb.KeyValue"), n3 = [];
            for (var o2 in e3) {
              var i2 = r3.decode(t3);
              if (i2.key = o2, void 0 !== e3[o2]) {
                if ("object" === x(e3[o2]))
                  i2.type = 8, i2.stringValue = JSON.stringify(e3[o2]);
                else if ("string" == typeof e3[o2])
                  i2.type = 7, i2.stringValue = e3[o2];
                else if ("boolean" == typeof e3[o2])
                  i2.type = 1, i2.varintValue = true === e3[o2] ? 1 : 0;
                else if (Number.isInteger(e3[o2]))
                  i2.type = 2, i2.varintValue = e3[o2];
                else if ("bigint" == typeof e3[o2] || "symbol" === x(e3[o2]) || "function" == typeof e3[o2] || Number.isNaN(e3[o2]))
                  i2.type = 7, i2.stringValue = e3[o2].toString();
                else {
                  if ("number" != typeof e3[o2] || Number.isInteger(e3[o2]))
                    continue;
                  i2.type = 6, i2.doubleValue = e3[o2];
                }
                n3.push(i2);
              }
            }
            return n3;
          }
          function ve(e3) {
            var t3, r3, n3, o2 = [];
            if (this.root) {
              var i2, c2 = this.root.lookup("easemob.pb.MessageBody.Content").decode(o2);
              switch (i2 = !e3.group && "groupchat" !== (null === (t3 = null == e3 ? void 0 : e3.chatType) || void 0 === t3 ? void 0 : t3.toLowerCase()) || e3.roomType ? e3.group && e3.roomType || "chatroom" === (null === (r3 = null == e3 ? void 0 : e3.chatType) || void 0 === r3 ? void 0 : r3.toLowerCase()) ? "chatRoom" : "singleChat" : "groupChat", e3.type) {
                case "txt":
                  c2.type = 0, c2.text = e3.msg;
                  break;
                case "img":
                  c2.type = 1, e3.body ? (c2.displayName = e3.body.filename, c2.remotePath = e3.body.url, c2.secretKey = e3.body.secret, c2.fileLength = e3.body.file_length, c2.size = e3.body.size, c2.thumbnailDisplayName = e3.body.filename) : e3.file ? (c2.displayName = e3.file.filename, c2.remotePath = e3.file.url, c2.secretKey = e3.file.secret, c2.fileLength = e3.file.file_length, c2.size = e3.file.size, c2.thumbnailDisplayName = e3.file.filename) : (c2.displayName = e3.filename, c2.remotePath = e3.url, c2.secretKey = e3.secret, c2.fileLength = e3.file_length, c2.size = e3.size, c2.thumbnailDisplayName = e3.filename), e3.isBuildCombinedMsg && (c2.remotePath = e3.url, c2.secretKey = e3.secret, c2.size = { height: e3.height, width: e3.width });
                  break;
                case "video":
                  c2.type = 2, e3.body ? (c2.displayName = e3.body.filename, c2.remotePath = e3.body.url, c2.secretKey = e3.body.secret, c2.fileLength = e3.body.file_length, c2.duration = e3.body.length, c2.thumbnailDisplayName = e3.body.filename, c2.thumbnailRemotePath = this.useOwnUploadFun ? "" : "".concat(e3.body.url, "?vframe=true"), c2.thumbnailSecretKey = this.useOwnUploadFun ? "" : e3.body.secret) : e3.isBuildCombinedMsg && (c2.displayName = e3.filename, c2.remotePath = e3.url, c2.secretKey = e3.secret, c2.fileLength = e3.file_length, c2.duration = e3.length, c2.thumbnailDisplayName = e3.filename, c2.thumbnailRemotePath = e3.thumb, c2.thumbnailSecretKey = e3.thumb_secret);
                  break;
                case "loc":
                  c2.type = 3, c2.latitude = e3.lat, c2.longitude = e3.lng, c2.address = e3.addr, c2.buildingName = e3.buildingName, c2.latitude = e3.lat;
                  break;
                case "audio":
                  c2.type = 4, e3.body ? (c2.displayName = e3.body.filename, c2.remotePath = e3.body.url, c2.secretKey = e3.body.secret, c2.fileLength = e3.body.file_length, c2.duration = e3.body.length, c2.thumbnailDisplayName = e3.body.filename) : e3.isBuildCombinedMsg && (c2.displayName = e3.filename, c2.remotePath = e3.url, c2.secretKey = e3.secret, c2.fileLength = e3.file_length, c2.duration = e3.length, c2.thumbnailDisplayName = e3.filename);
                  break;
                case "file":
                  c2.type = 5, e3.body ? (c2.displayName = e3.body.filename, c2.remotePath = e3.body.url, c2.secretKey = e3.body.secret, c2.fileLength = e3.body.file_length, c2.thumbnailDisplayName = e3.body.filename) : e3.isBuildCombinedMsg && (c2.displayName = e3.filename, c2.remotePath = e3.url, c2.secretKey = e3.secret, c2.fileLength = e3.file_length, c2.thumbnailDisplayName = e3.filename);
                  break;
                case "cmd":
                  c2.type = 6, c2.action = e3.action;
                  break;
                case "custom":
                  c2.type = 7, c2.customEvent = e3.customEvent, c2.customExts = Ee.call(this, e3.customExts);
                  break;
                case "combine":
                  c2.type = 0, c2.subType = 0, c2.text = e3.compatibleText, c2.displayName = e3.filename, c2.remotePath = e3.url, c2.secretKey = e3.secret, c2.fileLength = e3.file_length, c2.title = e3.title, c2.summary = e3.summary, c2.combineLevel = e3.combineLevel;
              }
              var u2 = [];
              e3.ext && (u2 = Ee.call(this, e3.ext));
              var l2 = this.root.lookup("easemob.pb.MessageBody"), p2 = l2.decode(o2), d2 = e3.from || this.context.jid.name;
              p2.from = { name: e3.isBuildCombinedMsg ? d2 : this.context.jid.name };
              var h2 = e3.to.indexOf("/"), f2 = h2 > -1 ? e3.to.substring(0, h2) : e3.to;
              if (p2.to = { name: f2 }, "channel" === e3.type)
                p2.type = L.CHANNEL_ACK;
              else if ("recall" === e3.type)
                p2.type = L.RECALL, p2.ackMessageId = e3.ackId;
              else if ("delivery" === e3.type)
                p2.type = L.DELIVER_ACK, p2.ackMessageId = e3.ackId;
              else if ("read" === e3.type)
                p2.type = L.READ_ACK, p2.ackMessageId = e3.ackId, "groupChat" === i2 && (p2.msgConfig = { allowGroupAck: true }, p2.ackContent = e3.ackContent);
              else if ("chatRoom" === i2)
                p2.type = L.CHATROOM;
              else if ("groupChat" === i2) {
                if (p2.type = L.GROUPCHAT, e3.msgConfig) {
                  var m2 = e3.msgConfig.allowGroupAck;
                  p2.msgConfig = { allowGroupAck: !!m2 };
                }
              } else
                "singleChat" === i2 && (p2.type = L.SINGLECHAT);
              e3.editMessageId && (p2.type = L.EDIT, p2.editMessageId = e3.editMessageId), p2.contents = [c2], p2.ext = u2;
              var g2 = function(e4) {
                var t4 = {};
                return "translations" in e4 && (t4.translations = e4.translations), "isChatThread" in e4 && e4.isChatThread && (t4.thread = {}), Object.keys(t4).length > 0 ? JSON.stringify(t4) : "";
              }(e3);
              g2 && (p2.meta = g2), p2 = l2.encode(p2).finish();
              var E2 = this.root.lookup("easemob.pb.Meta"), v2 = E2.decode(o2);
              v2.id = e3.id;
              var y2 = "easemob.com";
              if ("chatRoom" !== i2 && "groupChat" !== i2 || (y2 = "conference.easemob.com"), v2.to = { appKey: this.appKey, name: f2, domain: y2 }, h2 > -1 && (v2.to.clientResource = e3.to.substring(h2 + 1, e3.to.length)), "chatRoom" === i2 && (v2.ext = Ee.call(this, function(e4) {
                return { chatroom_msg_tag: "high" === e4.priority ? 0 : "low" === e4.priority ? 2 : 1 };
              }(e3))), "recall" === e3.type && e3.metaExt && (v2.ext = Ee.call(this, { recallMessageExtensionInfo: e3.metaExt })), v2.ns = 1, v2.payload = p2, v2.routetype = e3.deliverOnlineOnly ? 1 : 0, "singleChat" !== i2 && Array.isArray(e3.receiverList) && (null === (n3 = e3.receiverList) || void 0 === n3 ? void 0 : n3.length) > 0 && (v2.directedUsers = e3.receiverList, v2.routetype = 2), e3.isBuildCombinedMsg)
                return v2.timestamp = a().fromValue(e3.time), E2.encode(v2).finish();
              var T2 = this.root.lookup("easemob.pb.CommSyncUL"), _2 = T2.decode(o2);
              _2.meta = v2, !e3.isPing && Te.call(this, e3, v2), _2 = T2.encode(_2).finish();
              var R2 = this.root.lookup("easemob.pb.MSync"), I2 = R2.decode(o2);
              return I2.version = this.version, I2.encryptType = this.encryptType, I2.command = 0, I2.payload = _2, R2.encode(I2).finish();
            }
            e3.fail && e3.fail({ type: s.E.WEBIM_CONNCTION_CLIENT_OFFLINE, message: "Not logged in" });
          }
          function ye(e3) {
            var t3, r3, n3 = this, o2 = G({}, e3);
            if (e3.file)
              return o2.accessToken = this.token, o2.appKey = this.appKey, o2.apiUrl = this.apiUrl, o2.body && o2.body.url ? ve.call(this, o2) : new Promise(function(t4, r4) {
                var i3 = o2.onFileUploadComplete;
                o2.onFileUploadComplete = function(t5) {
                  var r5, a3, s2, c3, u2, l2;
                  if (t5.entities[0]["file-metadata"]) {
                    var p2 = t5.entities[0]["file-metadata"]["content-length"];
                    o2.file_length = p2, o2.filetype = t5.entities[0]["file-metadata"]["content-type"], p2 > 204800 && (o2.thumbnail = true);
                  }
                  var d2 = "".concat(n3.apiUrl, "/").concat(n3.orgName, "/").concat(n3.appName, "/chatfiles/").concat(t5.entities[0].uuid);
                  o2.body = { type: o2.type || "file", secret: t5.entities[0]["share-secret"], filename: o2.file.filename || o2.filename, url: d2, length: o2.length || 0, filetype: o2.filetype || o2.file.filetype, file_length: (null === (a3 = null === (r5 = o2.file) || void 0 === r5 ? void 0 : r5.data) || void 0 === a3 ? void 0 : a3.size) || 0, size: { width: o2.width || 0, height: o2.height || 0 } }, o2.file.url = t5.uri, e3.secret = t5.entities[0]["share-secret"], t5.url = e3.url = "".concat(d2, "?em-redirect=true&share-secret=").concat(t5.entities[0]["share-secret"]), e3.file_length = o2.file_length = (null === (c3 = null === (s2 = o2.file) || void 0 === s2 ? void 0 : s2.data) || void 0 === c3 ? void 0 : c3.size) || 0, "img" === o2.type && (e3.thumb = "".concat(e3.url, "&thumbnail=true"), t5.thumb = "".concat(t5.url, "&thumbnail=true")), "video" === o2.type && (e3.thumb = "".concat(e3.url, "&vframe=true"), e3.thumb_secret = t5.entities[0]["share-secret"], t5.thumb = "".concat(t5.url, "&vframe=true")), i3 instanceof Function && i3(t5, o2.id);
                  var h2 = ve.call(n3, o2);
                  w.TJ.size <= w.F3 && w.TJ.set(o2.id, { rpt: n3.dataReport.geOperateFun({ operationName: U.fI.SEND_MSG }) }), null === (l2 = null === (u2 = n3._localCache) || void 0 === u2 ? void 0 : u2.getInstance()) || void 0 === l2 || l2.storeMessage(e3, C.r.INPROGRESS), Se.call(n3, h2);
                }, E.P6.uploadFile.call(n3, o2, U.fI.UPLOAD_MSG_ATTACH);
              });
            if ("combine" === e3.type) {
              o2.accessToken = this.token, o2.appKey = this.appKey, o2.apiUrl = this.apiUrl;
              var i2 = o2.onFileUploadComplete, a2 = o2.onFileUploadError;
              return new Promise(function(t4, r4) {
                var c3, l2, p2, d2;
                if ((null === (c3 = e3.messageList) || void 0 === c3 ? void 0 : c3.length) > 300 || 0 === (null === (l2 = e3.messageList) || void 0 === l2 ? void 0 : l2.length))
                  return n3._msgHash[o2.id].reject({ type: s.E.MAX_LIMIT, message: "The number of combined messages exceeded the limit." });
                var h2 = F([], e3.messageList, true), f2 = 0;
                if (h2.forEach(function(e4) {
                  (null == e4 ? void 0 : e4.combineLevel) > f2 && (f2 = null == e4 ? void 0 : e4.combineLevel);
                }), o2.combineLevel = f2 + 1, o2.combineLevel > 10)
                  return n3._msgHash[o2.id].reject({ type: s.E.MAX_LIMIT, message: "The level of the merged message exceeded the limit." });
                var m2 = _e.call(n3, h2), g2 = function(t5, r5) {
                  var a3, s2, c4, u2, l3, p3, d3 = "".concat(n3.apiUrl, "/").concat(n3.orgName, "/").concat(n3.appName, "/chatfiles/").concat(t5.entities[0].uuid), h3 = null === (a3 = t5.entities[0]) || void 0 === a3 ? void 0 : a3["share-secret"], f3 = d3 + "?em-redirect=true";
                  h3 && (f3 = "".concat(f3, "&share-secret=").concat(h3)), i2 instanceof Function && i2({ url: f3, secret: h3 }), e3.url = f3, e3.secret = h3, o2.url = f3, o2.secret = t5.entities[0]["share-secret"], o2.filename = (null === (s2 = o2.file) || void 0 === s2 ? void 0 : s2.filename) || (null == r5 ? void 0 : r5.fileName), o2.file_length = (null === (u2 = null === (c4 = o2.file) || void 0 === c4 ? void 0 : c4.data) || void 0 === u2 ? void 0 : u2.size) || (null == r5 ? void 0 : r5.fileLength) || 0, null === (p3 = null === (l3 = n3._localCache) || void 0 === l3 ? void 0 : l3.getInstance()) || void 0 === p3 || p3.storeMessage(e3, C.r.INPROGRESS);
                  var m3 = ve.call(n3, o2);
                  Se.call(n3, m3);
                }, v2 = E.P6.getEnvInfo();
                if ("web" !== v2.platform && "node" !== v2.platform && "quick_app" !== v2.platform && (null === (d2 = null === (p2 = v2.global) || void 0 === p2 ? void 0 : p2.canIUse) || void 0 === d2 ? void 0 : d2.call(p2, "getFileSystemManager"))) {
                  var y2 = v2.global.getFileSystemManager(), T2 = "".concat(n3.apiUrl, "/").concat(n3.orgName, "/").concat(n3.appName, "/chatfiles");
                  y2.writeFile({ filePath: "".concat(v2.global.env.USER_DATA_PATH, "/combine"), data: m2.buffer, encoding: "binary", success: function(e4) {
                    v2.global.uploadFile({ url: T2, filePath: "".concat(v2.global.env.USER_DATA_PATH, "/combine"), name: "file", header: { "Content-Type": "multipart/form-data", Authorization: "Bearer " + o2.accessToken }, success: function(e5) {
                      if (200 === e5.statusCode) {
                        u.kg.debug("upload success", e5);
                        var t5 = JSON.parse(e5.data);
                        g2(t5, { fileName: "combine", fileLength: m2.length });
                      } else
                        u.kg.debug("upload fail"), o2.onFileUploadError instanceof Function && o2.onFileUploadError(e5), this._msgHash[o2.id].reject({ type: s.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e5 });
                    }, fail: function(t5) {
                      u.kg.debug("upload fail"), o2.onFileUploadError instanceof Function && o2.onFileUploadError(e4), this._msgHash[o2.id].reject({ type: s.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: t5 });
                    } });
                  }, fail: function(e4) {
                    u.kg.debug("write file fail", e4), this._msgHash[o2.id].reject({ type: s.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e4 });
                  } });
                } else {
                  var _2 = new File([m2], "combine", { type: "application/octet-stream" }), R2 = { url: URL.createObjectURL(_2), filename: o2.id, data: _2 };
                  o2.file = R2, o2.onFileUploadComplete = function(e4) {
                    g2(e4);
                  }, o2.onFileUploadError = function(e4) {
                    a2 instanceof Function && a2(e4), n3._msgHash[o2.id].reject({ type: s.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e4 });
                  }, E.P6.uploadFile.call(n3, o2, U.fI.UPLOAD_MSG_ATTACH);
                }
              });
            }
            "img" === e3.type && (o2.body || (o2.body = G(G({}, o2), { size: { width: o2.width || 0, height: o2.height || 0 } }))), null === (r3 = null === (t3 = this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) || void 0 === r3 || r3.storeMessage(e3, C.r.INPROGRESS);
            var c2 = ve.call(this, o2);
            Se.call(this, c2);
          }
          function Te(e3, t3) {
            e3.editMessageId || W.includes(e3.type) && (this._msgHash[e3.id].thirdMessage = t3);
          }
          function _e(e3) {
            for (var t3 = Uint8Array.from("cm", function(e4) {
              return e4.charCodeAt(0);
            }), r3 = 0; r3 < e3.length; r3++) {
              for (var n3 = e3[r3], o2 = G(G({}, n3), { isBuildCombinedMsg: true }), i2 = this.mSync.encodeChatMsg.call(this, o2), a2 = i2.length, s2 = new Uint8Array(4), c2 = 0; c2 < 4; c2++)
                s2[c2] = a2 >> 8 * (3 - c2) & 255;
              u.kg.debug("message length:", s2);
              var l2 = new Uint8Array(t3.length + s2.length + i2.length);
              l2.set(t3), l2.set(s2, t3.length), l2.set(i2, t3.length + s2.length), t3 = l2;
            }
            var p2 = new Uint8Array(t3.length + 1), d2 = 0;
            for (r3 = 2; r3 < t3.length; r3++)
              r3 % 2 == 1 && (d2 ^= t3[r3]);
            return p2.set(t3), u.kg.debug("checkResult:", d2), p2[t3.length] = d2, p2;
          }
          function Re(e3, t3, r3) {
            var n3 = [], o2 = this.root.lookup("easemob.pb.MUCBody"), i2 = e3.roomId, a2 = e3.ext, s2 = void 0 === a2 ? "" : a2, c2 = e3.leaveOtherRooms, u2 = void 0 !== c2 && c2, l2 = o2.decode(n3);
            l2.mucId = { appKey: this.appKey, name: i2, domain: "conference.easemob.com" }, l2.operation = "join" === r3 ? 2 : 3, l2.from = { name: this.context.userId }, l2.isChatroom = true, "join" === r3 && (l2.ext = s2, l2.leaveOtherRooms = u2), l2 = o2.encode(l2).finish();
            var p2 = this.root.lookup("easemob.pb.Meta").decode(n3);
            p2.id = t3, p2.from = { appKey: this.appKey, name: this.context.userId, domain: "easemob.com", client_resource: this.context.jid.clientResource }, p2.to = { domain: "easemob.com" }, p2.ns = 2, p2.payload = l2;
            var d2 = this.root.lookup("easemob.pb.CommSyncUL"), h2 = d2.decode(n3);
            h2.meta = p2, h2 = d2.encode(h2).finish();
            var f2 = this.root.lookup("easemob.pb.MSync"), m2 = f2.decode(n3);
            return m2.version = this.version, m2.encryptType = this.encryptType, m2.command = 0, m2.payload = h2, f2.encode(m2).finish();
          }
          function Ie(e3, t3) {
            var r3 = E.P6.getUniqueId(), n3 = Re.call(this, e3, r3, t3), o2 = "join" === t3 ? U.fI.JOIN_CHATROOM : U.fI.QUIT_CHATROOM, i2 = this.dataReport.geOperateFun({ operationName: o2 });
            return w.iO.size <= w.F3 && w.iO.set(r3, { rpt: i2, requestName: o2 }), Se.call(this, G(G({}, e3), { isHandleChatroom: true, joinMsg: n3, id: r3, operation: t3 }), r3);
          }
          function Oe(e3) {
            var t3 = this;
            return new Promise(function(r3, n3) {
              var o2, i2, a2, c2, l2, p2;
              if (u.kg.debug("call send"), t3.logOut)
                return u.kg.debug("send message failed", s.E.WEBIM_CONNECTION_CLOSED), n3({ type: s.E.WEBIM_CONNECTION_CLOSED, message: "not login" });
              if (!e3.id || "string" != typeof e3.id || "" === e3.id)
                return n3({ type: s.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "id"' });
              if (!e3.to || "string" != typeof e3.to || "" === e3.to)
                return n3({ type: s.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "to"' });
              var d2 = "file" === e3.type || "img" === e3.type || "audio" === e3.type || "video" === e3.type, h2 = "delivery" === e3.type || "read" === e3.type || "channel" === e3.type, f2 = "cmd" === e3.type, m2 = "recall" === e3.type, g2 = null == e3 ? void 0 : e3.editMessageId, E2 = !(h2 || m2 || f2 || g2);
              if (e3.id) {
                if (!d2 && !h2 || d2 && t3.useOwnUploadFun) {
                  var v2 = "recall" === e3.type ? U.fI.SEND_RECALL_MSG : U.fI.SEND_MSG;
                  g2 && (v2 = U.fI.MODIFY_MESSAGE), w.TJ.size <= w.F3 && w.TJ.set(e3.id, { rpt: t3.dataReport.geOperateFun({ operationName: v2 }) });
                }
                E2 && (null === (i2 = null === (o2 = t3._localCache) || void 0 === o2 ? void 0 : o2.getInstance()) || void 0 === i2 || i2.storeMessage(e3, C.r.CREATE)), t3._msgHash[e3.id] = G(G({}, e3), { resolve: r3, reject: n3 });
              }
              if (d2 || "combine" === e3.type)
                return ye.call(t3, e3);
              if ("txt" === e3.type && (null === (a2 = e3.msgConfig) || void 0 === a2 ? void 0 : a2.languages) && Array.isArray(null === (c2 = e3.msgConfig) || void 0 === c2 ? void 0 : c2.languages) && e3.msgConfig.languages.length > 0) {
                var y2 = t3.translateMessage || t3.translation.translateMessage;
                if (!y2)
                  throw new Error("there is no method to translate message");
                y2.call(t3, { text: e3.msg, languages: e3.msgConfig.languages }).then(function(r4) {
                  var n4, o3, i3, a3 = null === (n4 = r4.data[0]) || void 0 === n4 ? void 0 : n4.translations;
                  a3 = a3.map(function(e4) {
                    return { code: e4.to, text: e4.text };
                  }), e3.translations = a3, t3._msgHash[e3.id].translations = a3, null === (i3 = null === (o3 = t3._localCache) || void 0 === o3 ? void 0 : o3.getInstance()) || void 0 === i3 || i3.storeMessage(e3, C.r.INPROGRESS);
                  var s2 = ve.call(t3, e3);
                  Se.call(t3, s2, e3.id);
                }).catch(function(e4) {
                  n3(e4);
                });
              } else {
                E2 && (null === (p2 = null === (l2 = t3._localCache) || void 0 === l2 ? void 0 : l2.getInstance()) || void 0 === p2 || p2.storeMessage(e3, C.r.INPROGRESS));
                var T2 = ve.call(t3, e3);
                Se.call(t3, T2, e3.id);
              }
            });
          }
          function Se(e3, t3) {
            var r3, n3 = this;
            if (e3.isHandleChatroom) {
              if (!this.isOpened()) {
                var o2 = { data: "", type: s.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                if (w.iO.has(e3.id)) {
                  var i2 = w.iO.get(e3.id);
                  (0, i2.rpt)({ isEndApi: true, data: { isSuccess: 0, requestName: i2.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: U.dd.disconnect, codeDesc: "websocket has been disconnected" } }), w.iO.delete(e3.id);
                }
                return Promise.reject(o2);
              }
              return new Promise(function(r4, o3) {
                var i3;
                n3._msgHash[e3.id] = G(G({}, e3), { resolve: r4, reject: o3 });
                var a3 = E.P6.getEnvInfo();
                i3 = "miniCore" === n3.name || "web" === a3.platform ? e3.joinMsg : q.call(n3, e3.joinMsg, t3);
                var c3 = t3 && setTimeout(function() {
                  var t4, r5, o4;
                  if (n3._msgHash[e3.id]) {
                    var i4 = { type: s.E.REQUEST_TIMEOUT, message: "request timeout" };
                    null === (r5 = (t4 = n3._msgHash[e3.id]).reject) || void 0 === r5 || r5.call(t4, i4), clearTimeout(null === (o4 = n3._msgHash[e3.id]) || void 0 === o4 ? void 0 : o4.messageTimer), delete n3._msgHash[e3.id], n3.reconnecting || n3.reconnect(true);
                  }
                }, P.xz);
                n3._msgHash[e3.id].messageTimer = c3, n3.sock.send(i3);
              });
            }
            if (!this.isOpened())
              return null === (r3 = this.unMSyncSendMsgMap) || void 0 === r3 || r3.set(t3, e3), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (u.kg.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = true, this.reconnecting || this.reconnect()), void (this.onError && this.onError({ type: s.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }));
            var a2, c2 = t3 && setTimeout(function() {
              var e4, r4, o3;
              if (n3._msgHash[null != t3 ? t3 : ""]) {
                var i3 = { type: s.E.MESSAGE_SEND_TIMEOUT, message: "send message timeout" };
                null === (r4 = (e4 = n3._msgHash[null != t3 ? t3 : ""]).reject) || void 0 === r4 || r4.call(e4, i3), clearTimeout(null === (o3 = n3._msgHash[null != t3 ? t3 : ""]) || void 0 === o3 ? void 0 : o3.messageTimer), delete n3._msgHash[null != t3 ? t3 : ""], n3.reconnecting || n3.reconnect(true);
              }
            }, P.xz);
            this._msgHash[null != t3 ? t3 : ""] && (this._msgHash[null != t3 ? t3 : ""].messageTimer = c2);
            var l2 = E.P6.getEnvInfo();
            a2 = "miniCore" === this.name || "web" === l2.platform ? e3 : q.call(this, e3, t3), this.sock.send(a2);
          }
          var Ae = function(e3, t3) {
            return e3.send = Oe, e3.sendMsg = Oe, u.kg.debug("init Msync by ".concat(e3.name)), { generateProvision: K.bind(e3), base64transform: q.bind(e3), distributeMeta: z.bind(e3), decodeMeta: V.bind(e3), decodeUnreadDL: Y.bind(e3), _rebuild: Q.bind(e3), _lastsession: te.bind(e3), receiveProvision: ie.bind(e3), isInQueue: de.bind(e3), decodeNotice: he.bind(e3), decodeMSync: fe.bind(e3), distributeMSync: me.bind(e3), encodeChatMsg: ve.bind(e3), upLoadFile: ye.bind(e3), send: Oe.bind(e3), stopHeartBeat: le.bind(e3), handleChatRoom: Ie.bind(e3), sendUnreadDeal: ce.bind(e3) };
          };
        }, 7252: function(e2, t2) {
          "use strict";
          var r2 = function() {
            function e3(e4) {
              this.type = e4.type, this.message = e4.message, this.data = e4.data;
            }
            return e3.create = function(t3) {
              return new e3(t3);
            }, e3;
          }();
          t2.Z = r2;
        }, 8161: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { t: function() {
            return E;
          } }), r2(9601), r2(1539), r2(8674), r2(2526), r2(1817), r2(2165), r2(6992), r2(8783), r2(3948), r2(7941), r2(3710), r2(9714), r2(9653), r2(6699), r2(2023), r2(2222), r2(8309), r2(9554), r2(4747), r2(2772);
          var n2 = r2(3720), o = r2.n(n2), i = r2(4363), a = r2(4024), s = r2(6424), c = r2(9743), u = r2(7360), l = r2(2449), p = r2(7288), d = function() {
            return d = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, d.apply(this, arguments);
          }, h = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, f = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, m = { 0: "TEXT", 1: "IMAGE", 2: "VIDEO", 3: "LOCATION", 4: "VOICE", 5: "FILE", 6: "COMMAND", 7: "CUSTOM", 8: "COMBINE" };
          function g(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; r3++)
              if (8 === e3[r3].type)
                t3[e3[r3].key] = JSON.parse(e3[r3].stringValue);
              else if (7 === e3[r3].type)
                t3[e3[r3].key] = e3[r3].stringValue;
              else if (6 === e3[r3].type)
                t3[e3[r3].key] = e3[r3].doubleValue;
              else if (5 === e3[r3].type)
                t3[e3[r3].key] = e3[r3].floatValue;
              else if (1 === e3[r3].type) {
                var n3 = e3[r3].varintValue, i2 = new (o())(n3.low, n3.high, n3.unsigned).toString();
                t3[e3[r3].key] = 0 !== Number(i2);
              } else
                2 !== e3[r3].type && 3 !== e3[r3].type && 4 !== e3[r3].type || (n3 = e3[r3].varintValue, i2 = new (o())(n3.low, n3.high, n3.unsigned).toString(), t3[e3[r3].key] = Number(i2));
            return t3;
          }
          function E(e3) {
            var t3 = "";
            return e3.remotePath && (t3 = a.P6.formatAttachUrl.call(this, e3.remotePath), e3.remotePath.includes("?em-redirect") || (t3 = "".concat(t3, "?em-redirect=true"), e3.secretKey && (t3 = "".concat(t3, "&share-secret=").concat(e3.secretKey)))), t3;
          }
          function v(e3, t3) {
            var r3, n3, o2 = t3.from && t3.from.name;
            if (o2 === this.context.userId) {
              var i2 = null === (r3 = null == e3 ? void 0 : e3.from) || void 0 === r3 ? void 0 : r3.clientResource;
              o2 === (null === (n3 = null == t3 ? void 0 : t3.to) || void 0 === n3 ? void 0 : n3.name) && i2 && i2 !== this.clientResource && (o2 = "".concat(o2, "/").concat(i2));
            }
            return o2;
          }
          function y(e3, t3) {
            var r3, n3 = t3.to && t3.to.name;
            return (null === (r3 = null == e3 ? void 0 : e3.to) || void 0 === r3 ? void 0 : r3.clientResource) && (n3 = "".concat(n3, "/").concat(e3.to.clientResource)), n3;
          }
          function T(e3) {
            var t3, r3, n3, o2, c2, l2, d2, v2, y2, T2, _2, R, I, O, S, A, C, N, b, M, k, w, U, P, x, L, D;
            return h(this, void 0, void 0, function() {
              var h2, j, G, B, H, F, W, Z, K, q, z, V, X, J, Y, Q, $2, ee, te, re, ne, oe, ie, ae, se, ce, ue, le, pe, de, he, fe, me, ge, Ee, ve, ye, Te, _e, Re, Ie, Oe, Se, Ae, Ce, Ne, be, Me, ke, we, Ue, Pe, xe, Le;
              return f(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    switch (h2 = e3.status, j = e3.thirdMessage, G = e3.msgBody, B = e3.msgId, H = e3.type, F = e3.from, W = e3.to, Z = e3.time, K = e3.onlineState, q = e3.chatType, z = e3.ignoreCallback, V = e3.priority, X = e3.format, J = e3.broadcast, Y = void 0 !== J && J, Q = e3.isContentReplaced, $2 = void 0 !== Q && Q, ee = {}, te = {}, re = h2.errorCode > 0, ne = h2.errorCode, oe = h2.reason, ie = {}, ae = [], se = [], ce = {}, ue = "", le = 0, pe = null, de = null, fe = false, me = false, j.ext && (ie = g(j.ext)), j.meta && "string" == typeof j.meta && ((ge = JSON.parse(j.meta)).reaction && (ae = ge.reaction).forEach(function(e4) {
                      e4.isAddedBySelf = e4.state, delete e4.state;
                    }), ge.translations && (se = ge.translations), ge.edit_msg && (Ee = ge.edit_msg, ve = Ee.count, ye = Ee.operator, Te = Ee.edit_time, _e = Ee.sender, Re = Ee.send_time, ce = { operationTime: Te, operatorId: ye, operationCount: ve }, ue = _e, le = Re), ge.thread && "{}" !== JSON.stringify(ge.thread) && (pe = { messageId: ge.thread.msg_parent_id, parentId: ge.thread.muc_parent_id, chatThreadName: ge.thread.thread_name }), ge.thread_overview && "{}" !== JSON.stringify(ge.thread_overview) && (de = { id: ge.thread_overview.id, parentId: ge.thread_overview.muc_parent_id, name: ge.thread_overview.name, lastMessage: ge.thread_overview.last_message && "{}" !== JSON.stringify(ge.thread_overview.last_message) ? i.w.call(this, ge.thread_overview.last_message) : null, createTimestamp: ge.thread_overview.create_timestamp, updateTimestamp: ge.thread_overview.update_timestamp, messageCount: ge.thread_overview.message_count || 0 }), ge.isDelivered && (fe = true), ge.isRead && (me = true)), G.type) {
                      case 0:
                        return [3, 1];
                      case 1:
                        return [3, 7];
                      case 2:
                        return [3, 10];
                      case 3:
                        return [3, 13];
                      case 4:
                        return [3, 16];
                      case 5:
                        return [3, 19];
                      case 6:
                        return [3, 22];
                      case 7:
                        return [3, 23];
                      case 8:
                        return [3, 26];
                    }
                    return [3, 27];
                  case 1:
                    return Object.prototype.hasOwnProperty.call(G, "subType") && 0 === G.subType ? (he = E.call(this, G), Ie = { id: B, type: "combine", chatType: q, to: W, from: F, ext: ie, time: Number(Z), onlineState: K, title: G.title || "", summary: G.summary || "", url: he || "", secret: G.secretKey || "", file_length: G.fileLength || 0, filename: G.displayName || "", compatibleText: G.text, combineLevel: G.combineLevel || 0 }, ee.msgConfig && (Ie.msgConfig = ee.msgConfig), ae.length > 0 && (Ie.reactions = ae), pe && (Ie.chatThread = pe), de && (Ie.chatThreadOverview = de), "chatRoom" === q && (Ie.priority = V, Ie.broadcast = Y), $2 && (Ie.isContentReplaced = $2), me && (Ie.isRead = true), fe && (Ie.isDelivered = true), te = Ie, z ? [3, 3] : [4, null === (r3 = null === (t3 = this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) || void 0 === r3 ? void 0 : r3.storeMessage(Ie, p.r.SUCCESS)]) : [3, 4];
                  case 2:
                    f2.sent(), null === (n3 = this.eventHandler) || void 0 === n3 || n3.dispatch("onCombineMessage", Ie), f2.label = 3;
                  case 3:
                    return [3, 28];
                  case 4:
                    return !(ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, data: G.text, ext: ie, sourceMsg: G.text, time: Z, msgConfig: j.msgConfig, onlineState: K }).msgConfig && delete j.msgConfig, ee.error = re, ee.errorText = oe, ee.errorCode = ne, !z && this.onTextMessage && this.onTextMessage(ee), Oe = { id: B, type: "txt", chatType: q, msg: G.text, to: W, from: F, ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (Oe.msgConfig = ee.msgConfig), ae.length > 0 && (Oe.reactions = ae), pe && (Oe.chatThread = pe), de && (Oe.chatThreadOverview = de), se.length > 0 && (Oe.translations = se), ce.operationCount > 0 && (Oe.modifiedInfo = ce, j.type === s.gA.EDIT && (Oe.from = ue, Oe.time = le)), "chatRoom" === q && (Oe.priority = V, Oe.broadcast = Y), $2 && (Oe.isContentReplaced = $2), me && (Oe.isRead = true), fe && (Oe.isDelivered = true), te = Oe, z ? [3, 6] : [4, null === (c2 = null === (o2 = this._localCache) || void 0 === o2 ? void 0 : o2.getInstance()) || void 0 === c2 ? void 0 : c2.storeMessage(Oe, p.r.SUCCESS)];
                  case 5:
                    f2.sent(), null === (l2 = this.eventHandler) || void 0 === l2 || l2.dispatch("onTextMessage", Oe), f2.label = 6;
                  case 6:
                    return [3, 28];
                  case 7:
                    return Se = (null === (d2 = null == G ? void 0 : G.size) || void 0 === d2 ? void 0 : d2.width) || 0, Ae = (null === (v2 = null == G ? void 0 : G.size) || void 0 === v2 ? void 0 : v2.height) || 0, he = this.useOwnUploadFun ? G.remotePath : E.call(this, G), !(ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, url: he, secret: G.secretKey, filename: G.displayName, thumb: this.useOwnUploadFun ? "" : "".concat(he, "&thumbnail=true"), thumb_secret: G.secretKey, file_length: G.fileLength || "", width: Se, height: Ae, filetype: G.filetype || "", accessToken: this.token, ext: ie, time: Z, msgConfig: j.msgConfig, onlineState: K }).delay && delete ee.delay, !ee.msgConfig && delete j.msgConfig, ee.error = re, ee.errorText = oe, ee.errorCode = ne, !z && this.onPictureMessage && this.onPictureMessage(ee), Ce = { id: B, type: "img", chatType: q, from: F, to: W, url: he || "", width: Se, height: Ae, secret: G.secretKey || "", thumb: this.useOwnUploadFun ? "" : "".concat(he, "&thumbnail=true"), thumb_secret: G.secretKey, file_length: G.fileLength || 0, ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (Ce.msgConfig = ee.msgConfig), ae.length > 0 && (Ce.reactions = ae), pe && (Ce.chatThread = pe), de && (Ce.chatThreadOverview = de), "chatRoom" === q && (Ce.priority = V, Ce.broadcast = Y), $2 && (Ce.isContentReplaced = $2), me && (Ce.isRead = true), fe && (Ce.isDelivered = true), te = Ce, z ? [3, 9] : [4, null === (T2 = null === (y2 = this._localCache) || void 0 === y2 ? void 0 : y2.getInstance()) || void 0 === T2 ? void 0 : T2.storeMessage(Ce, p.r.SUCCESS)];
                  case 8:
                    f2.sent(), null === (_2 = this.eventHandler) || void 0 === _2 || _2.dispatch("onImageMessage", Ce), f2.label = 9;
                  case 9:
                    return [3, 28];
                  case 10:
                    return he = this.useOwnUploadFun ? G.remotePath : E.call(this, G), !(ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, url: he, secret: G.secretKey, filename: G.displayName, length: G.duration || "", file_length: G.fileLength || "", filetype: G.filetype || "", accessToken: this.token || "", ext: ie, time: Z, msgConfig: j.msgConfig, onlineState: K }).delay && delete ee.delay, !ee.msgConfig && delete j.msgConfig, ee.error = re, ee.errorText = oe, ee.errorCode = ne, !z && this.onVideoMessage && this.onVideoMessage(ee), Ne = { id: B, type: "video", chatType: q, from: F, to: W, url: he, secret: G.secretKey, thumb: a.P6.formatAttachUrl.call(this, G.thumbnailRemotePath), thumb_secret: G.thumbnailSecretKey, filename: G.displayName, length: G.duration || 0, file: {}, file_length: G.fileLength || 0, filetype: G.filetype || "", accessToken: this.token || "", ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (Ne.msgConfig = ee.msgConfig), ae.length > 0 && (Ne.reactions = ae), pe && (Ne.chatThread = pe), de && (Ne.chatThreadOverview = de), "chatRoom" === q && (Ne.priority = V, Ne.broadcast = Y), $2 && (Ne.isContentReplaced = $2), me && (Ne.isRead = true), fe && (Ne.isDelivered = true), te = Ne, z ? [3, 12] : [4, null === (I = null === (R = this._localCache) || void 0 === R ? void 0 : R.getInstance()) || void 0 === I ? void 0 : I.storeMessage(Ne, p.r.SUCCESS)];
                  case 11:
                    f2.sent(), null === (O = this.eventHandler) || void 0 === O || O.dispatch("onVideoMessage", Ne), f2.label = 12;
                  case 12:
                    return [3, 28];
                  case 13:
                    return !(ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, addr: G.address, buildingName: G.buildingName, lat: G.latitude, lng: G.longitude, ext: ie, time: Z, msgConfig: j.msgConfig, onlineState: K }).delay && delete ee.delay, !ee.msgConfig && delete j.msgConfig, ee.error = re, ee.errorText = oe, ee.errorCode = ne, !z && this.onLocationMessage && this.onLocationMessage(ee), be = { id: B, type: "loc", chatType: q, from: F, to: W, buildingName: G.buildingName, addr: G.address, lat: G.latitude, lng: G.longitude, ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (be.msgConfig = ee.msgConfig), ae.length > 0 && (be.reactions = ae), pe && (be.chatThread = pe), de && (be.chatThreadOverview = de), "chatRoom" === q && (be.priority = V, be.broadcast = Y), $2 && (be.isContentReplaced = $2), me && (be.isRead = true), fe && (be.isDelivered = true), te = be, z ? [3, 15] : [4, null === (A = null === (S = this._localCache) || void 0 === S ? void 0 : S.getInstance()) || void 0 === A ? void 0 : A.storeMessage(be, p.r.SUCCESS)];
                  case 14:
                    f2.sent(), null === (C = this.eventHandler) || void 0 === C || C.dispatch("onLocationMessage", be), f2.label = 15;
                  case 15:
                    return [3, 28];
                  case 16:
                    return he = this.useOwnUploadFun ? G.remotePath : E.call(this, G), !(ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, url: he, secret: G.secretKey, filename: G.displayName, file_length: G.fileLength || "", accessToken: this.token || "", ext: ie, length: G.duration, time: Z, msgConfig: j.msgConfig, onlineState: K }).delay && delete ee.delay, !ee.msgConfig && delete j.msgConfig, ee.error = re, ee.errorText = oe, ee.errorCode = ne, !z && this.onAudioMessage && this.onAudioMessage(ee), Me = { id: B, type: "audio", chatType: q, from: F, to: W, url: he, secret: G.secretKey, file: {}, filename: G.displayName, length: G.duration || 0, file_length: G.fileLength || 0, filetype: G.filetype || "", accessToken: this.token || "", ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (Me.msgConfig = ee.msgConfig), ae.length > 0 && (Me.reactions = ae), pe && (Me.chatThread = pe), de && (Me.chatThreadOverview = de), "chatRoom" === q && (Me.priority = V, Me.broadcast = Y), $2 && (Me.isContentReplaced = $2), me && (Me.isRead = true), fe && (Me.isDelivered = true), te = Me, z ? [3, 18] : [4, null === (b = null === (N = this._localCache) || void 0 === N ? void 0 : N.getInstance()) || void 0 === b ? void 0 : b.storeMessage(Me, p.r.SUCCESS)];
                  case 17:
                    f2.sent(), null === (M = this.eventHandler) || void 0 === M || M.dispatch("onAudioMessage", Me), f2.label = 18;
                  case 18:
                    return [3, 28];
                  case 19:
                    return he = this.useOwnUploadFun ? G.remotePath : E.call(this, G), !(ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, url: he, secret: G.secretKey, filename: G.displayName, file_length: G.fileLength, accessToken: this.token || "", ext: ie, time: Z, msgConfig: j.msgConfig, onlineState: K }).delay && delete ee.delay, !ee.msgConfig && delete j.msgConfig, ee.error = re, ee.errorText = oe, ee.errorCode = ne, !z && this.onFileMessage && this.onFileMessage(ee), ke = { id: B, type: "file", chatType: q, from: F, to: W, url: he, secret: G.secretKey, file: {}, filename: G.displayName, length: G.duration || 0, file_length: G.fileLength || 0, filetype: G.filetype || "", accessToken: this.token || "", ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (ke.msgConfig = ee.msgConfig), ae.length > 0 && (ke.reactions = ae), pe && (ke.chatThread = pe), de && (ke.chatThreadOverview = de), "chatRoom" === q && (ke.priority = V, ke.broadcast = Y), $2 && (ke.isContentReplaced = $2), me && (ke.isRead = true), fe && (ke.isDelivered = true), te = ke, z ? [3, 21] : [4, null === (w = null === (k = this._localCache) || void 0 === k ? void 0 : k.getInstance()) || void 0 === w ? void 0 : w.storeMessage(ke, p.r.SUCCESS)];
                  case 20:
                    f2.sent(), null === (U = this.eventHandler) || void 0 === U || U.dispatch("onFileMessage", ke), f2.label = 21;
                  case 21:
                    return [3, 28];
                  case 22:
                    return !(ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, action: G.action, ext: ie, time: Z, msgConfig: j.msgConfig, onlineState: K }).msgConfig && delete j.msgConfig, ee.error = re, ee.errorText = oe, ee.errorCode = ne, !z && this.onCmdMessage && this.onCmdMessage(ee), we = { id: B, type: "cmd", chatType: q, from: F, to: W, action: G.action, ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (we.msgConfig = ee.msgConfig), ae.length > 0 && (we.reactions = ae), pe && (we.chatThread = pe), de && (we.chatThreadOverview = de), "chatRoom" === q && (we.priority = V, we.broadcast = Y), $2 && (we.isContentReplaced = $2), me && (we.isRead = true), fe && (we.isDelivered = true), te = we, z || null === (P = this.eventHandler) || void 0 === P || P.dispatch("onCmdMessage", we), [3, 28];
                  case 23:
                    return Ue = {}, Pe = {}, j.contents[0].customExts && (Ue = g(j.contents[0].customExts)), j.contents[0].params && (Pe = g(j.contents[0].params)), ee = { id: B, type: H, contentsType: m[G.type], from: F, to: W, customEvent: G.customEvent, params: Pe, customExts: Ue, ext: ie, time: Z, onlineState: K }, !z && this.onCustomMessage && this.onCustomMessage(ee), xe = { id: B, type: "custom", chatType: q, from: F, to: W, customEvent: G.customEvent, params: Pe, customExts: Ue, ext: ie, time: Number(Z), onlineState: K }, ee.msgConfig && (xe.msgConfig = ee.msgConfig), ae.length > 0 && (xe.reactions = ae), pe && (xe.chatThread = pe), de && (xe.chatThreadOverview = de), ce.operationCount > 0 && (xe.modifiedInfo = ce, j.type === s.gA.EDIT && (xe.from = ue, xe.time = le)), "chatRoom" === q && (xe.priority = V, xe.broadcast = Y), $2 && (xe.isContentReplaced = $2), me && (xe.isRead = true), fe && (xe.isDelivered = true), te = xe, z ? [3, 25] : [4, null === (L = null === (x = this._localCache) || void 0 === x ? void 0 : x.getInstance()) || void 0 === L ? void 0 : L.storeMessage(xe, p.r.SUCCESS)];
                  case 24:
                    f2.sent(), null === (D = this.eventHandler) || void 0 === D || D.dispatch("onCustomMessage", xe), f2.label = 25;
                  case 25:
                    return [3, 28];
                  case 26:
                    return he = E.call(this, G), Le = { id: B, type: "combine", chatType: q, to: W, from: F, ext: ie, time: Number(Z), onlineState: K, title: G.title || "", summary: G.summary || "", url: he || "", secret: G.secretKey || "", file_length: G.fileLength || 0, filename: G.displayName || "", compatibleText: G.text, combineLevel: G.combineLevel || 0 }, ee.msgConfig && (Le.msgConfig = ee.msgConfig), ae.length > 0 && (Le.reactions = ae), pe && (Le.chatThread = pe), de && (Le.chatThreadOverview = de), "chatRoom" === q && (Le.priority = V, Le.broadcast = Y), $2 && (Le.isContentReplaced = $2), me && (Le.isRead = true), fe && (Le.isDelivered = true), te = Le, !z && this.eventHandler && this.eventHandler.dispatch("onCombineMessage", Le), [3, 28];
                  case 27:
                    return u.kg.error("Unknow message type, message:", G), [3, 28];
                  case 28:
                    return X ? [2, te] : [2, ee];
                }
              });
            });
          }
          function _(e3, t3, r3) {
            if (this.delivery && e3 !== t3) {
              var n3 = this.getUniqueId(), o2 = new l.Message("delivery", n3);
              o2.set({ ackId: r3, to: e3 }), u.kg.debug("send delivery ack"), this.send(o2.body);
            }
          }
          t2.Z = function(e3, t3, r3, n3, i2) {
            var l2, p2, m2, E2, R, I, O, S, A, C, N, b, M, k, w, U, P, x, L, D, j, G, B, H, F, W;
            return h(this, void 0, void 0, function() {
              var h2, Z, K, q, z, V, X, J, Y, Q, $2, ee, te, re, ne, oe, ie, ae, se, ce, ue, le, pe, de, he, fe, me, ge, Ee, ve, ye, Te, _e, Re, Ie, Oe, Se, Ae, Ce, Ne;
              return f(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    if (h2 = new (o())(e3.timestamp.low, e3.timestamp.high, e3.timestamp.unsigned).toString(), Z = this.root.lookup("easemob.pb.MessageBody"), K = Z.decode(e3.payload), q = 3, z = false, V = new (o())(e3.id.low, e3.id.high, e3.id.unsigned).toString(), i2 && e3.from && e3.from.name === this.context.userId && e3.from.clientResource === this.clientResource && K.type === s.gA.CHATROOM)
                      return [2, u.kg.debug("Discard your own chat room message:", V)];
                    if (e3.meta && e3.meta.length) {
                      if (X = a.P6.parseNotify(e3.meta), J = X.is_online, Y = X.callback_replace, this.useReplacedMessageContents && Y && (z = true), J || 0 === J)
                        switch (J) {
                          case 0:
                            q = 0;
                            break;
                          case 1:
                            q = 1;
                            break;
                          default:
                            q = 2;
                        }
                    } else
                      q = 3;
                    switch (Q = K.ackMessageId ? new (o())(K.ackMessageId.low, K.ackMessageId.high, K.ackMessageId.unsigned).toString() : "", $2 = "", ee = v.call(this, e3, K), te = y.call(this, e3, K), u.kg.debug("meta thirdMessage:", { metaId: V, metaNs: e3.ns, type: K.type, from: ee, to: te, contentType: null === (p2 = null === (l2 = K.contents) || void 0 === l2 ? void 0 : l2[0]) || void 0 === p2 ? void 0 : p2.type, contentLen: null === (m2 = K.contents) || void 0 === m2 ? void 0 : m2.length }), K.type) {
                      case s.gA.SINGLECHAT:
                        return [3, 1];
                      case s.gA.GROUPCHAT:
                        return [3, 2];
                      case s.gA.CHATROOM:
                        return [3, 3];
                      case s.gA.READ_ACK:
                        return [3, 4];
                      case s.gA.DELIVER_ACK:
                        return [3, 5];
                      case s.gA.RECALL:
                        return [3, 6];
                      case s.gA.CHANNEL_ACK:
                        return [3, 15];
                      case s.gA.EDIT:
                        return [3, 16];
                    }
                    return [3, 20];
                  case 1:
                    return $2 = "chat", "agoraToken" === this.grantType && ($2 = "singleChat"), this.delivery && !r3 && ee !== this.context.userId && _.call(this, ee, te, V), [3, 21];
                  case 2:
                    return $2 = "groupchat", "agoraToken" === this.grantType && ($2 = "groupChat"), [3, 21];
                  case 3:
                    return $2 = "chatroom", "agoraToken" === this.grantType && ($2 = "chatRoom"), q = 1, [3, 21];
                  case 4:
                    return $2 = "read_ack", re = void 0, K.ext[0] && JSON.parse(K.ext[0].stringValue) ? (re = { id: V, type: "read", from: ee, to: te, mid: Q, groupReadCount: K.ext[0] && JSON.parse(K.ext[0].stringValue), ackContent: K.ackContent, onlineState: q }, this.onReadMessage && this.onReadMessage(re), null === (E2 = this.eventHandler) || void 0 === E2 || E2.dispatch("onReadMessage", re), [2]) : (re = { id: V, type: "read", from: ee, to: te, mid: Q, onlineState: q }, this.onReadMessage && this.onReadMessage(re), null === (R = this.eventHandler) || void 0 === R || R.dispatch("onReadMessage", re), [2]);
                  case 5:
                    return $2 = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({ id: V, type: "delivery", from: ee, to: te, mid: Q, onlineState: q }), ne = { id: V, type: "delivery", from: ee, to: te, mid: Q, onlineState: q }, null === (I = this.eventHandler) || void 0 === I || I.dispatch("onDeliveredMessage", ne), [2];
                  case 6:
                    return $2 = "recall", oe = "", e3.ext && (oe = (null === (O = g(e3.ext)) || void 0 === O ? void 0 : O.recallMessageExtensionInfo) || ""), ie = { id: V, from: ee || "admin", to: te, mid: Q, ext: oe, onlineState: q }, ae = te === this.user ? ee : te, [4, null === (A = null === (S = this._localCache) || void 0 === S ? void 0 : S.getInstance()) || void 0 === A ? void 0 : A.getMessageByServerMsgId(ie.mid)];
                  case 7:
                    return (se = f2.sent()) ? [4, null === (N = null === (C = this._localCache) || void 0 === C ? void 0 : C.getInstance()) || void 0 === N ? void 0 : N.removeMsgByServerMsgId(ie.mid)] : [3, 9];
                  case 8:
                    f2.sent(), f2.label = 9;
                  case 9:
                    return "singleChat" !== (null == se ? void 0 : se.chatType) && "groupChat" !== (null == se ? void 0 : se.chatType) ? [3, 14] : (ce = (null == se ? void 0 : se.from) === this.user || "" === (null == se ? void 0 : se.from), [4, null === (M = null === (b = this._localCache) || void 0 === b ? void 0 : b.getInstance()) || void 0 === M ? void 0 : M.getConversationLastMessage(ae, se.chatType)]);
                  case 10:
                    return ue = f2.sent(), [4, null === (w = null === (k = this._localCache) || void 0 === k ? void 0 : k.getInstance()) || void 0 === w ? void 0 : w.getConversationBySessionId((0, c.MQ)({ conversationId: ae, conversationType: se.chatType }))];
                  case 11:
                    return (le = f2.sent()) ? [4, null === (P = null === (U = this._localCache) || void 0 === U ? void 0 : U.getInstance()) || void 0 === P ? void 0 : P.updateLocalConversation((0, c.MQ)({ conversationId: ae, conversationType: se.chatType }), { lastMessageId: null == ue ? void 0 : ue.serverMsgId, unReadCount: (0, c.E7)({ conversation: le, isRecallSelfMsg: ce, recalledMsgTime: se.time }) })] : [3, 13];
                  case 12:
                    f2.sent(), f2.label = 13;
                  case 13:
                    f2.label = 14;
                  case 14:
                    return this.onRecallMessage && this.onRecallMessage(ie), null === (x = this.eventHandler) || void 0 === x || x.dispatch("onRecallMessage", ie), [2];
                  case 15:
                    return this.onChannelMessage && this.onChannelMessage({ id: V, type: "channel", chatType: "singleChat", from: ee, to: te, time: Number(h2), onlineState: q }), pe = { id: V, type: "channel", chatType: "singleChat", from: ee, to: te, time: Number(h2), onlineState: q }, null === (L = this.eventHandler) || void 0 === L || L.dispatch("onChannelMessage", pe), [2];
                  case 16:
                    return de = { errorCode: 0, reason: "" }, [4, T.call(this, { status: de, thirdMessage: K, msgBody: K.contents[0], msgId: V, type: $2, from: ee, to: te, time: h2, onlineState: q, ignoreCallback: true, format: true, isContentReplaced: z })];
                  case 17:
                    return he = f2.sent(), fe = !!e3.to && -1 !== e3.to.domain.indexOf("conference"), he.chatType = fe ? "groupChat" : "singleChat", me = K.editMessageId && new (o())(K.editMessageId.low, K.editMessageId.high, K.editMessageId.unsigned).toString(), ge = {}, "txt" === he.type ? (Ee = he.type, ve = he.chatType, ye = he.to, Te = he.from, _e = he.time, Re = he.modifiedInfo, ge = { id: me, type: Ee, chatType: ve, to: ye, from: Te, time: _e, modifiedInfo: Re, msg: he.msg }, he.translations && (ge.translations = he.translations)) : "custom" === he.type && ((ge = he).id = me, delete ge.onlineState), ge ? [4, null === (j = null === (D = this._localCache) || void 0 === D ? void 0 : D.getInstance()) || void 0 === j ? void 0 : j.getMessageByServerMsgId(me)] : [3, 19];
                  case 18:
                    "txt" === (null == (Ie = f2.sent()) ? void 0 : Ie.type) && "txt" === ge.type ? null === (B = null === (G = this._localCache) || void 0 === G ? void 0 : G.getInstance()) || void 0 === B || B.putMessageToDB(d(d({}, Ie), { msg: ge.msg, modifiedInfo: ge.modifiedInfo, translations: ge.translations })) : "custom" === (null == Ie ? void 0 : Ie.type) && "custom" === ge.type && (null === (F = null === (H = this._localCache) || void 0 === H ? void 0 : H.getInstance()) || void 0 === F || F.putMessageToDB(d(d({}, Ie), { modifiedInfo: ge.modifiedInfo, customEvent: ge.customEvent, customExts: ge.customExts, ext: ge.ext }))), f2.label = 19;
                  case 19:
                    return "txt" !== he.type && "custom" !== he.type || null === (W = this.eventHandler) || void 0 === W || W.dispatch("onModifiedMessage", ge), [2];
                  case 20:
                    return u.kg.error("unexpected message type: ".concat(K.type)), [2];
                  case 21:
                    Oe = "normal", Ae = false, "chat" === $2.toLowerCase() || "singleChat" === $2 ? Se = "singleChat" : "groupchat" === $2.toLowerCase() || "groupChat" === $2 ? Se = "groupChat" : (Se = "chatRoom", q = 1, e3.ext && (Ce = g(e3.ext), Ae = !!(null == Ce ? void 0 : Ce.is_broadcast), Oe = 0 === Ce.chatroom_msg_tag ? "high" : 2 === Ce.chatroom_msg_tag ? "low" : "normal")), Ne = 0, f2.label = 22;
                  case 22:
                    return Ne < K.contents.length ? [4, T.call(this, { status: t3, thirdMessage: K, msgBody: K.contents[Ne], msgId: V, type: $2, from: ee, to: te, time: h2, onlineState: q, chatType: Se, ignoreCallback: r3, priority: Oe, format: n3, broadcast: Ae, isContentReplaced: z })] : [3, 25];
                  case 23:
                    return [2, f2.sent()];
                  case 24:
                    return Ne++, [3, 22];
                  case 25:
                    return [2];
                }
              });
            });
          };
        }, 7288: function(e2, t2, r2) {
          "use strict";
          var n2;
          r2.d(t2, { r: function() {
            return n2;
          } }), function(e3) {
            e3[e3.CREATE = 0] = "CREATE", e3[e3.FAIL = 1] = "FAIL", e3[e3.INPROGRESS = 2] = "INPROGRESS", e3[e3.SUCCESS = 3] = "SUCCESS";
          }(n2 || (n2 = {}));
        }, 9743: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { E7: function() {
            return o;
          }, MQ: function() {
            return n2;
          }, un: function() {
            return i;
          } }), r2(2222);
          var n2 = function(e3) {
            return "".concat(e3.conversationType, "-").concat(e3.conversationId);
          }, o = function(e3) {
            var t3 = e3.isRecallSelfMsg, r3 = e3.conversation, n3 = e3.recalledMsgTime, o2 = r3.unReadCount, i2 = void 0 === o2 ? 0 : o2, a = r3.unreadCountClearTimestamp;
            return t3 || (void 0 === a ? 0 : a) > n3 ? i2 : i2 && i2 > 0 ? i2 - 1 : 0;
          }, i = function(e3) {
            var t3, r3 = 0;
            if (0 === e3.length)
              return r3;
            for (t3 = 0; t3 < e3.length; t3++)
              r3 = (r3 << 5) - r3 + e3.charCodeAt(t3), r3 |= 0;
            return r3;
          };
        }, 7360: function(e2, t2, r2) {
          "use strict";
          function n2() {
            console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
          }
          r2.d(t2, { kg: function() {
            return m;
          } }), r2(1539), r2(8674), r2(2526), r2(1817), r2(2165), r2(6992), r2(8783), r2(3948), r2(7042), r2(2222), r2(8309), r2(9600), r2(3843), r2(3710), r2(2564), r2(285), r2(1637), r2(4812), r2(9554), r2(2772), r2(4916);
          var o = "undefined" != typeof window && void 0 !== window.navigator && /Trident\/|MSIE /.test(window.navigator.userAgent), i = r2(4024);
          function a(e3) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, a(e3);
          }
          var s, c = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, u = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, l = function() {
          }, p = {};
          !function(e3) {
            e3[e3.TRACE = 0] = "TRACE", e3[e3.DEBUG = 1] = "DEBUG", e3[e3.INFO = 2] = "INFO", e3[e3.WARN = 3] = "WARN", e3[e3.ERROR = 4] = "ERROR", e3[e3.SILENT = 5] = "SILENT";
          }(s || (s = {}));
          var d = function() {
            function e3(e4, t3, r3) {
              this.name = e4 || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = false, this.storageLogLevelKey = "loglevel", this.levels = s, this.consoleLogVisibility = true, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = r3 || this.defaultMethodFactory, this.report = false;
              var n3 = this._getPersistedLevel();
              null == n3 && (n3 = null === t3 ? "WARN" : t3), this.logs = [], this.reportLogs = [], this.reportInterval = 3e5, this.timer = null, this.config = { useCache: false, maxCache: 3145728, color: "", background: "" }, this.logBytes = 0, this.setLevel(n3, false, "");
            }
            return e3.prototype.reportLog = function() {
              var e4, t3, r3;
              return c(this, void 0, void 0, function() {
                var n3, o2, a2, s2, c2, l2, p2, d2;
                return u(this, function(u2) {
                  switch (u2.label) {
                    case 0:
                      if (0 === (null === (e4 = this.reportLogs) || void 0 === e4 ? void 0 : e4.length))
                        return [2];
                      for (n3 = 2097152, o2 = this.reportLogs.join("\n") + "\n", a2 = o2.length, s2 = []; a2 > n3; )
                        s2.push(o2.substring(0, n3)), a2 -= n3, o2 = o2.substring(n3);
                      s2.push(o2), c2 = 0, l2 = s2, u2.label = 1;
                    case 1:
                      if (!(c2 < l2.length))
                        return [3, 8];
                      if (p2 = l2[c2], this.reportLogs = [], !(null === (r3 = null === (t3 = this.connection) || void 0 === t3 ? void 0 : t3.context) || void 0 === r3 ? void 0 : r3.accessToken))
                        return [2];
                      u2.label = 2;
                    case 2:
                      return u2.trys.push([2, 4, , 5]), [4, this.reportData(p2)];
                    case 3:
                      return "ok" !== (null == (d2 = u2.sent()) ? void 0 : d2.status) && this.reportLogs.unshift(p2), [3, 5];
                    case 4:
                      return u2.sent(), this.reportLogs.unshift(p2), [3, 5];
                    case 5:
                      return [4, i.P6.delay(3e3)];
                    case 6:
                      u2.sent(), u2.label = 7;
                    case 7:
                      return c2++, [3, 1];
                    case 8:
                      return [2];
                  }
                });
              });
            }, e3.prototype.reportData = function(e4) {
              var t3, r3 = this;
              if (this.connection) {
                var n3 = this.connection.context || {}, o2 = n3.orgName, a2 = n3.appName, s2 = n3.accessToken, c2 = n3.userId, u2 = { url: "".concat(null === (t3 = this.connection) || void 0 === t3 ? void 0 : t3.apiUrl, "/").concat(o2, "/").concat(a2, "/sdk/users/").concat(c2, "/client/logs"), type: "POST", data: JSON.stringify({ resource: this.connection.clientResource || "random_".concat(Date.now()), logContent: e4 }), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } };
                return i.hj.call(this.connection, u2).then(function(e5) {
                  return r3.log("report log success", e5), e5;
                }).catch(function(e5) {
                  r3.error("report log error", e5);
                });
              }
              this.error("report log error", "connection is null");
            }, e3.prototype._regularlyReportLogs = function() {
              var e4, t3 = this;
              this.timer && clearInterval(this.timer), (null !== (e4 = this.reportInterval) && void 0 !== e4 ? e4 : 0) < 6e4 && (this.reportInterval = 6e4), this.timer = setInterval(function() {
                t3.reportLog();
              }, this.reportInterval || 3e5);
            }, e3.prototype._stopReportLogs = function() {
              return c(this, void 0, void 0, function() {
                return u(this, function(e4) {
                  switch (e4.label) {
                    case 0:
                      return e4.trys.push([0, 2, , 3]), [4, this.reportLog()];
                    case 1:
                      return e4.sent(), [3, 3];
                    case 2:
                      return e4.sent(), this.error("report log error when stopping upload"), [3, 3];
                    case 3:
                      return this.reportLogs = [], clearInterval(this.timer), [2];
                  }
                });
              });
            }, e3.prototype.setConfig = function(e4) {
              this.config = e4;
            }, e3.prototype.getLevel = function() {
              return this.currentLevel;
            }, e3.prototype.setLevel = function(e4, t3, r3) {
              if ("string" == typeof e4 && (e4 = s[e4]), void 0 === e4 && (e4 = 0), !("number" == typeof e4 && e4 >= 0 && e4 <= this.levels.SILENT))
                throw Error("log.setLevel() called with invalid level: " + e4);
              if (this.currentLevel = e4, false !== t3 && this._persistLevel(e4), this.replaceLoggingMethods(e4, r3 || ""), "undefined" == typeof console && e4 < s.SILENT)
                throw Error("No console available for logging");
            }, e3.prototype.setDefaultLevel = function(e4) {
              this._getPersistedLevel() || this.setLevel(e4, false, "");
            }, e3.prototype.enableAll = function(e4) {
              this.setLevel(this.levels.TRACE, true, "");
            }, e3.prototype.disableAll = function(e4) {
              this.setLevel(this.levels.SILENT, true, "");
            }, e3.prototype.getLogs = function() {
              return this.logs;
            }, e3.prototype.download = function() {
              if ("undefined" != typeof window && "undefined" != typeof document) {
                var e4 = this.getLogs().join("\n"), t3 = new Blob([e4], { type: "text/plain;charset=UTF-8" }), r3 = window.URL.createObjectURL(t3), n3 = document.createElement("a");
                n3.style.display = "none", n3.href = r3, n3.setAttribute("download", "sdklog"), document.body.appendChild(n3), n3.click();
              }
            }, e3.prototype.setConsoleLogVisibility = function(e4) {
              this.consoleLogVisibility = e4;
            }, e3.prototype._bindMethod = function(e4, t3, r3) {
              var n3 = this, o2 = e4[t3], i2 = this.getTime();
              if (r3)
                return this._cacheLog;
              if ("function" == typeof o2.bind)
                return function() {
                  for (var r4 = [], i3 = 0; i3 < arguments.length; i3++)
                    r4[i3] = arguments[i3];
                  var a2 = n3.getTime();
                  n3.consoleLogVisibility && o2.call.apply(o2, function(e5, t4, r5) {
                    if (r5 || 2 === arguments.length)
                      for (var n4, o3 = 0, i4 = t4.length; o3 < i4; o3++)
                        !n4 && o3 in t4 || (n4 || (n4 = Array.prototype.slice.call(t4, 0, o3)), n4[o3] = t4[o3]);
                    return e5.concat(n4 || Array.prototype.slice.call(t4));
                  }([e4, "".concat(a2, " IM SDK [").concat("log" === t3 ? "debug" : t3, "]: ")], r4, false)), n3.onLog && n3.onLog({ time: a2, level: "log" === t3 ? "debug" : t3, logs: r4 }), n3._cacheReportLogs.apply(n3, r4);
                };
              try {
                return Function.prototype.bind.call(o2, e4, "".concat(i2, " IM SDK [").concat("log" === t3 ? "debug" : t3, "]: "));
              } catch (t4) {
                return function() {
                  return Function.prototype.apply.apply(o2, [e4, arguments]);
                };
              }
            }, e3.prototype.getTime = function() {
              var e4 = /* @__PURE__ */ new Date();
              return e4.toTimeString().split(" ")[0] + ":" + e4.getMilliseconds();
            }, e3.prototype._cacheLog = function() {
              for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
                e4[t3] = arguments[t3];
              var r3 = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", n3 = "";
              e4.forEach(function(e5) {
                "object" === a(e5) ? n3 += JSON.stringify(e5) + " " : n3 += e5 + " ";
              }), this._cacheLogCall(r3 + n3), this._cacheReportLogs.apply(this, e4);
            }, e3.prototype._cacheLogCall = function(e4) {
              var t3 = e4.length, r3 = this.logBytes + t3, n3 = this.config.maxCache;
              if (!(t3 >= n3)) {
                if (r3 < n3)
                  this.logBytes += t3;
                else
                  for (var o2 = r3 - n3, i2 = 0; i2 < o2; ) {
                    var a2 = this.logs.shift();
                    void 0 !== a2 && (i2 += a2.length);
                  }
                this.logs.push(e4);
              }
            }, e3.prototype._cacheReportLogs = function() {
              for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
                e4[t3] = arguments[t3];
              if (this.report) {
                var r3 = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", n3 = "";
                e4.forEach(function(e5) {
                  "object" === a(e5) ? n3 += JSON.stringify(e5) + " " : n3 += e5 + " ";
                }), this.reportLogs.push(r3 + n3);
              }
            }, e3.prototype._getPersistedLevel = function() {
              var e4;
              if ("undefined" == typeof window)
                return 5;
              if ("undefined" === (e4 = window && window.localStorage && window.localStorage[this.storageLogLevelKey])) {
                var t3 = window.document.cookie, r3 = t3.indexOf(encodeURIComponent(this.storageLogLevelKey));
                -1 !== r3 && (e4 = /^([^;]+)/.exec(t3.slice(r3))[1]);
              }
              return e4 || 5;
            }, e3.prototype._persistLevel = function(e4) {
              var t3 = this.logMethods[e4] || "SILENT";
              if ("undefined" != typeof window) {
                if (window.localStorage)
                  try {
                    window.localStorage[this.storageLogLevelKey] = t3;
                  } catch (e5) {
                    console.log(e5);
                  }
                this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + t3 + ";");
              }
            }, e3.prototype.replaceLoggingMethods = function(e4, t3) {
              for (var r3 = this, n3 = 0; n3 < this.logMethods.length; n3++) {
                var o2 = this.logMethods[n3];
                this[o2] = n3 < e4 ? function() {
                  for (var e5 = [], t4 = 0; t4 < arguments.length; t4++)
                    e5[t4] = arguments[t4];
                  r3.report && r3._cacheReportLogs.apply(r3, e5);
                } : this.methodFactory(o2, e4, t3);
              }
              this.log = this.debug;
            }, e3.prototype.defaultMethodFactory = function(e4, t3, r3) {
              return this.realMethod(e4) || this.enableLoggingWhenConsoleArrives.apply(this, [e4, t3, r3]);
            }, e3.prototype.realMethod = function(e4) {
              return "debug" === e4 && (e4 = "log"), "undefined" != typeof console && ("trace" === e4 && o ? n2 : void 0 !== console[e4] ? this._bindMethod(console, e4, this.config.useCache) : void 0 !== console.log ? this._bindMethod(console, "log", this.config.useCache) : l);
            }, e3.prototype.enableLoggingWhenConsoleArrives = function(e4, t3, r3) {
              return (function() {
                "undefined" != typeof console && (this.replaceLoggingMethods.call(this, t3, r3), this[e4].apply(this, arguments));
              }).bind(this);
            }, e3;
          }(), h = new d();
          h.getLogger = function(e3) {
            if ("string" != typeof e3 || "" === e3)
              throw new TypeError("You must supply a name when creating a logger.");
            return this;
          };
          var f = "undefined" != typeof window ? window.log : void 0;
          h.noConflict = function() {
            return "undefined" != typeof window && window.log === h && (window.log = f), h;
          }, h.getLoggers = function() {
            return p;
          }, h.initReport = function(e3) {
            var t3 = e3.report, r3 = e3.reportInterval, n3 = e3.connection;
            h.report = t3, h.reportInterval = r3, h.connection = n3, t3 && h._regularlyReportLogs();
          };
          var m = h;
        }, 2449: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { Message: function() {
            return g;
          } });
          var n2 = r2(4024), o = function() {
            function e3(e4) {
              var t3 = e4.id;
              this.id = t3, this.type = e4.type;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, ackId: e4.id, type: "read", to: e4.to, from: e4.from || "", chatType: e4.chatType };
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType, ackId: e4.id, type: "read", to: e4.to, from: e4.from || "", ackContent: e4.ackContent, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly };
            }, e3;
          }(), i = function() {
            function e3(e4) {
              this.id = e4.id, this.type = e4.type;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, ackId: e4.ackId, type: "delivery", to: e4.to, from: e4.from || "" };
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), ackId: e4.ackId, type: "delivery", to: e4.to, from: e4.from || "", isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly };
            }, e3;
          }(), a = (r2(3843), r2(3710), function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "channel", to: e4.to, from: e4.from || "", time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), type: "channel", chatType: e4.chatType || "singleChat", to: e4.to, from: e4.from || "", time: Date.now(), isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly };
            }, e3;
          }()), s = (r2(9753), function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3, this.value = "";
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "txt", to: e4.to, msg: e4.msg, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), isChatThread: e4.isChatThread }, this.value = e4.msg;
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              var t3, r3;
              return (null === (t3 = e4.msgConfig) || void 0 === t3 ? void 0 : t3.languages) && Array.isArray(null === (r3 = e4.msgConfig) || void 0 === r3 ? void 0 : r3.languages), { type: "txt", id: n2.P6.getUniqueId(), msg: e4.msg, to: e4.to, from: e4.from || "", chatType: e4.chatType, ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }()), c = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3 || n2.P6.getUniqueId(), this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "cmd", to: e4.to, action: e4.action, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), type: "cmd", to: e4.to, from: e4.from || "", chatType: e4.chatType || "singleChat", action: e4.action, time: Date.now(), ext: e4.ext, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), u = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "custom", to: e4.to, customEvent: e4.customEvent, customExts: e4.customExts, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "custom", to: e4.to, customEvent: e4.customEvent, customExts: e4.customExts, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), l = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3 || n2.P6.getUniqueId(), this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "loc", to: e4.to, addr: e4.addr, buildingName: e4.buildingName, lat: e4.lat, lng: e4.lng, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "loc", to: e4.to, addr: e4.addr, buildingName: e4.buildingName, lat: e4.lat, lng: e4.lng, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), p = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "img", file: e4.file, width: e4.width, height: e4.height, to: e4.to, from: e4.from || "", roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType, type: "img", url: e4.url, width: e4.width, height: e4.height, file: e4.file, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, file_length: e4.file_length, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList, thumbnailWidth: e4.thumbnailWidth, thumbnailHeight: e4.thumbnailHeight };
            }, e3;
          }(), d = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "audio", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType, type: "audio", filename: e4.filename, length: e4.length, file: e4.file, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, file_length: e4.file_length, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), h = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "video", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), apiUrl: e4.apiUrl, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "video", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), f = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id;
              this.id = r3, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && n2.P6.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "file", file: e4.file, filename: e4.filename, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: n2.P6.getUniqueId(), chatType: e4.chatType || "singleChat", type: "file", file: e4.file, filename: e4.filename, fileInputId: e4.fileInputId, file_length: e4.file_length, to: e4.to, from: e4.from || "", ext: e4.ext, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), m = function() {
            function e3(e4) {
              var t3 = e4.type, r3 = e4.id || n2.P6.getUniqueId();
              this.id = r3, this.type = t3, this.value = "";
            }
            return e3.create = function(e4) {
              return { type: "combine", id: n2.P6.getUniqueId(), to: e4.to, from: e4.from || "", chatType: e4.chatType, ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList, compatibleText: e4.compatibleText, title: e4.title, summary: e4.summary, messageList: e4.messageList, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete };
            }, e3;
          }(), g = function() {
            function e3(t3, r3) {
              return this.type = t3, this.id = r3 || n2.P6.getUniqueId(), e3.createOldMsg({ type: t3, id: this.id });
            }
            return e3.createOldMsg = function(e4) {
              switch (e4.type) {
                case "read":
                  return new o({ type: "read", id: e4.id });
                case "delivery":
                  return new i({ type: "delivery", id: e4.id });
                case "channel":
                  return new a({ type: "channel", id: e4.id });
                case "txt":
                  return new s({ type: "txt", id: e4.id });
                case "cmd":
                  return new c({ type: "cmd", id: e4.id });
                case "custom":
                  return new u({ type: "custom", id: e4.id });
                case "loc":
                  return new l({ type: "loc", id: e4.id });
                case "img":
                  return new p({ type: "img", id: e4.id });
                case "audio":
                  return new d({ type: "audio", id: e4.id });
                case "video":
                  return new h({ type: "video", id: e4.id });
                case "file":
                  return new f({ type: "file", id: e4.id });
              }
            }, e3.create = function(e4) {
              return "txt" !== (t3 = e4).type || "version" in t3 ? function(e5) {
                return "img" === e5.type && !("version" in e5);
              }(e4) ? p.create(e4) : function(e5) {
                return "cmd" === e5.type && !("version" in e5);
              }(e4) ? c.create(e4) : function(e5) {
                return "file" === e5.type && !("version" in e5);
              }(e4) ? f.create(e4) : function(e5) {
                return "audio" === e5.type && !("version" in e5);
              }(e4) ? d.create(e4) : function(e5) {
                return "video" === e5.type && !("version" in e5);
              }(e4) ? h.create(e4) : function(e5) {
                return "custom" === e5.type && !("version" in e5);
              }(e4) ? u.create(e4) : function(e5) {
                return "loc" === e5.type && !("version" in e5);
              }(e4) ? l.create(e4) : function(e5) {
                return "channel" === e5.type && !("version" in e5);
              }(e4) ? a.create(e4) : function(e5) {
                return "delivery" === e5.type && !("version" in e5);
              }(e4) ? i.create(e4) : function(e5) {
                return "read" === e5.type && !("version" in e5);
              }(e4) ? o.create(e4) : function(e5) {
                return "combine" === e5.type && !("version" in e5);
              }(e4) ? m.create(e4) : {} : s.create(e4);
              var t3;
            }, e3.prototype.set = function(e4) {
            }, e3.getFileUrl = n2.P6.getFileUrl, e3.download = n2.P6.download, e3.parseDownloadResponse = n2.P6.parseDownloadResponse, e3;
          }();
        }, 5531: function(e2, t2, r2) {
          "use strict";
          var n2;
          r2.d(t2, { E: function() {
            return n2;
          } }), function(e3) {
            e3[e3.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", e3[e3.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", e3[e3.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", e3[e3.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", e3[e3.REQUEST_ABORT = -4] = "REQUEST_ABORT", e3[e3.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", e3[e3.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", e3[e3.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", e3[e3.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", e3[e3.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", e3[e3.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", e3[e3.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", e3[e3.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", e3[e3.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", e3[e3.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", e3[e3.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", e3[e3.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", e3[e3.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", e3[e3.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", e3[e3.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", e3[e3.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", e3[e3.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", e3[e3.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", e3[e3.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", e3[e3.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", e3[e3.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", e3[e3.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", e3[e3.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", e3[e3.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", e3[e3.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", e3[e3.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", e3[e3.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", e3[e3.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", e3[e3.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", e3[e3.MAX_LIMIT = 50] = "MAX_LIMIT", e3[e3.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", e3[e3.NO_PERMISSION = 52] = "NO_PERMISSION", e3[e3.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", e3[e3.OPERATION_NOT_ALLOWED = 54] = "OPERATION_NOT_ALLOWED", e3[e3.WEBIM_TOKEN_EXPIRED = 56] = "WEBIM_TOKEN_EXPIRED", e3[e3.WEBIM_SERVER_SERVING_DISABLED = 57] = "WEBIM_SERVER_SERVING_DISABLED", e3[e3.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", e3[e3.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", e3[e3.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", e3[e3.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", e3[e3.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", e3[e3.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", e3[e3.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", e3[e3.PARSE_FILE_ERROR = 203] = "PARSE_FILE_ERROR", e3[e3.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", e3[e3.MESSAGE_PARAMETER_ERROR = 205] = "MESSAGE_PARAMETER_ERROR", e3[e3.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", e3[e3.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", e3[e3.WEBIM_USER_ALREADY_LOGIN = 208] = "WEBIM_USER_ALREADY_LOGIN", e3[e3.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", e3[e3.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", e3[e3.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", e3[e3.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", e3[e3.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", e3[e3.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", e3[e3.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", e3[e3.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", e3[e3.SERVER_GET_DNSLIST_FAILED = 304] = "SERVER_GET_DNSLIST_FAILED", e3[e3.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", e3[e3.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", e3[e3.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", e3[e3.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", e3[e3.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", e3[e3.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", e3[e3.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", e3[e3.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", e3[e3.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", e3[e3.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", e3[e3.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", e3[e3.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", e3[e3.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", e3[e3.STATUS_INIT = 400] = "STATUS_INIT", e3[e3.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", e3[e3.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", e3[e3.STATUS_OPENED = 403] = "STATUS_OPENED", e3[e3.STATUS_CLOSING = 404] = "STATUS_CLOSING", e3[e3.STATUS_CLOSED = 405] = "STATUS_CLOSED", e3[e3.STATUS_ERROR = 406] = "STATUS_ERROR", e3[e3.SERVER_BUSY = 500] = "SERVER_BUSY", e3[e3.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", e3[e3.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", e3[e3.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", e3[e3.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", e3[e3.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", e3[e3.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", e3[e3.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", e3[e3.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", e3[e3.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", e3[e3.MESSAGE_WEBSOCKET_DISCONNECTED = 510] = "MESSAGE_WEBSOCKET_DISCONNECTED", e3[e3.MESSAGE_SIZE_LIMIT = 511] = "MESSAGE_SIZE_LIMIT", e3[e3.MESSAGE_SEND_TIMEOUT = 512] = "MESSAGE_SEND_TIMEOUT", e3[e3.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", e3[e3.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", e3[e3.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", e3[e3.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", e3[e3.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", e3[e3.GROUP_ALREADY_JOINED = 601] = "GROUP_ALREADY_JOINED", e3[e3.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", e3[e3.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", e3[e3.GROUP_MEMBER_ATTRIBUTES_SET_FAILED = 609] = "GROUP_MEMBER_ATTRIBUTES_SET_FAILED", e3[e3.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", e3[e3.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", e3[e3.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", e3[e3.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", e3[e3.LOCAL_DB_OPERATION_FAILED = 800] = "LOCAL_DB_OPERATION_FAILED", e3[e3.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", e3[e3.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", e3[e3.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", e3[e3.REACTION_CREATING = 1102] = "REACTION_CREATING", e3[e3.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", e3[e3.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", e3[e3.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", e3[e3.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", e3[e3.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", e3[e3.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST", e3[e3.MODIFY_MESSAGE_NOT_EXIST = 1302] = "MODIFY_MESSAGE_NOT_EXIST", e3[e3.MODIFY_MESSAGE_FORMAT_ERROR = 1303] = "MODIFY_MESSAGE_FORMAT_ERROR", e3[e3.MODIFY_MESSAGE_FAILED = 1304] = "MODIFY_MESSAGE_FAILED", e3[e3.CONVERSATION_NOT_EXIST = 1400] = "CONVERSATION_NOT_EXIST";
          }(n2 || (n2 = {}));
        }, 4998: function(e2, t2, r2) {
          "use strict";
          var n2;
          r2.d(t2, { a: function() {
            return n2;
          } }), r2(7252), function(e3) {
            e3[e3.SYNC_INIT = 0] = "SYNC_INIT", e3[e3.SYNC_START = 1] = "SYNC_START", e3[e3.SYNC_FINISH = 2] = "SYNC_FINISH";
          }(n2 || (n2 = {}));
        }, 9937: function(e2, t2, r2) {
          "use strict";
          var n2;
          r2.d(t2, { Z: function() {
            return n2;
          } }), function(e3) {
            e3[e3.mark_0 = 0] = "mark_0", e3[e3.mark_1 = 1] = "mark_1", e3[e3.mark_2 = 2] = "mark_2", e3[e3.mark_3 = 3] = "mark_3", e3[e3.mark_4 = 4] = "mark_4", e3[e3.mark_5 = 5] = "mark_5", e3[e3.mark_6 = 6] = "mark_6", e3[e3.mark_7 = 7] = "mark_7", e3[e3.mark_8 = 8] = "mark_8", e3[e3.mark_9 = 9] = "mark_9", e3[e3.mark_10 = 10] = "mark_10", e3[e3.mark_11 = 11] = "mark_11", e3[e3.mark_12 = 12] = "mark_12", e3[e3.mark_13 = 13] = "mark_13", e3[e3.mark_14 = 14] = "mark_14", e3[e3.mark_15 = 15] = "mark_15", e3[e3.mark_16 = 16] = "mark_16", e3[e3.mark_17 = 17] = "mark_17", e3[e3.mark_18 = 18] = "mark_18", e3[e3.mark_19 = 19] = "mark_19";
          }(n2 || (n2 = {}));
        }, 4024: function(e2, t2, r2) {
          "use strict";
          r2.d(t2, { PU: function() {
            return I;
          }, iw: function() {
            return N;
          }, hj: function() {
            return O;
          }, LR: function() {
            return P;
          }, cT: function() {
            return U;
          }, P6: function() {
            return D;
          } }), r2(9601), r2(1539), r2(8674), r2(3710), r2(7941), r2(2564), r2(6699), r2(7042), r2(2772), r2(9714), r2(9653), r2(6992), r2(8783), r2(3948), r2(285), r2(1637), r2(8309), r2(4986), r2(2222), r2(4916);
          var n2 = r2(5531), o = (r2(2023), function() {
            return o = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, o.apply(this, arguments);
          }), i = function(e3, t3, r3, i2) {
            var a2, s2, c2, u2, l2, p2, d2, h2, f2, m2, g2, E2, v2, y2, T2, _2, R2, I2, O2, S2, A2, C2, N2, b2, M2 = e3.response;
            M2 && "string" == typeof M2 && (M2 = JSON.parse(M2));
            var k2 = e3.status, w2 = { elapse: i2, httpCode: k2, errDesc: null == M2 ? void 0 : M2.error_description };
            if (400 === k2) {
              if (40002 === M2.error_code)
                return void t3({ type: n2.E.THREAD_ALREADY_EXIST, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
              if (40009 === M2.error_code)
                return void t3({ type: n2.E.OPERATION_UNSUPPORTED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
              if (60005 === M2.error_code)
                return void t3({ type: n2.E.GROUP_MEMBER_ATTRIBUTES_SET_FAILED, message: (null == M2 ? void 0 : M2.desc) || (null == M2 ? void 0 : M2.error_description), extraInfo: w2 });
              if (60010 === M2.error_code)
                return void ((null == M2 ? void 0 : M2.error_description.includes("exceeds chatgroup user metadata single value limit")) ? t3({ type: n2.E.MAX_LIMIT, message: (null == M2 ? void 0 : M2.desc) || M2.error_description, extraInfo: w2 }) : t3({ type: n2.E.NO_PERMISSION, message: (null == M2 ? void 0 : M2.desc) || M2.error_description, extraInfo: w2 }));
              if (60011 === M2.error_code)
                return void t3({ type: n2.E.CHATROOM_NOT_JOINED, message: null == M2 ? void 0 : M2.desc, extraInfo: w2 });
              if (14403 === M2.error_code)
                return void t3({ type: n2.E.WEBIM_UPLOADFILE_ERROR, message: null == M2 ? void 0 : M2.error_description, data: M2, extraInfo: w2 });
              if (60006 === M2.error_code || 60007 === M2.error_code || 60009 === M2.error_code || 60012 === M2.error_code)
                return void t3({ type: n2.E.MAX_LIMIT, message: (null == M2 ? void 0 : M2.desc) || (null == M2 ? void 0 : M2.error_description), extraInfo: w2 });
              if (91104 === M2.error_code)
                return void t3({ type: n2.E.NO_PERMISSION, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
              if (null === (a2 = M2.error_description) || void 0 === a2 ? void 0 : a2.includes("are not members of this group"))
                return (null === (s2 = e3.responseURL) || void 0 === s2 ? void 0 : s2.includes("chatgroups")) ? t3({ type: n2.E.GROUP_NOT_JOINED, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : t3({ type: n2.E.CHATROOM_NOT_JOINED, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }), void r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: null == M2 ? void 0 : M2.error_description, data: e3.responseText, extraInfo: w2 });
              if ("the app not open presence" === (null == M2 ? void 0 : M2.result))
                return void t3({ type: n2.E.SERVICE_NOT_ENABLED, message: null == M2 ? void 0 : M2.result, extraInfo: w2 });
              if (null == M2 ? void 0 : M2.error_description.includes("remark length must less"))
                return void t3({ type: n2.E.MAX_LIMIT, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
              switch (null == M2 ? void 0 : M2.error_description) {
                case "the user is already operation this message":
                  t3({ type: n2.E.REACTION_ALREADY_ADDED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "The quantity has exceeded the limit!":
                  t3({ type: n2.E.MAX_LIMIT, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "The user not in this group!":
                  t3({ type: n2.E.GROUP_NOT_JOINED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "the user operation is illegal!":
                  t3({ type: n2.E.REACTION_OPERATION_IS_ILLEGAL, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "this appKey is not open reaction service!":
                case "this appKey not open message roaming":
                  t3({ type: n2.E.SERVICE_NOT_ENABLED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "this message is creating reaction, please try again.":
                  t3({ type: n2.E.REACTION_CREATING, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "groupId can not be null!":
                  t3({ type: n2.E.GROUP_NOT_EXIST, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "The input text is too long.":
                  t3({ type: n2.E.TRANSLATION_TEXT_TOO_LONG, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "The target language is not valid.":
                  t3({ type: n2.E.TRANSLATION_NOT_VALID, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "report failed, get message by id failed":
                  t3({ type: n2.E.MESSAGE_NOT_FOUND, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "ext is too big ":
                  t3({ type: n2.E.PRESENCE_PARAM_EXCEED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "Request body not readable.Please check content type is correct!":
                case "param mark must be not empty, please check!":
                case "param mark illegal, please check it!":
                case "param pin_msg_id illegal, please check it!":
                  t3({ type: n2.E.REQUEST_PARAMETER_ERROR, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                case "updateRemark | they are not friends, please add as a friend first.":
                  t3({ type: n2.E.USER_NOT_FRIEND, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
                  break;
                default:
                  t3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: null == M2 ? void 0 : M2.error_description, data: e3.responseText, extraInfo: w2 }), r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, message: null == M2 ? void 0 : M2.error_description, data: e3.responseText, extraInfo: w2 });
              }
            } else if (401 === k2)
              40001 === M2.error_code || 60001 === M2.error_code || "Unable to authenticate (OAuth)" === M2.error_description ? t3({ type: n2.E.NO_PERMISSION, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : (r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: w2 }), t3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: w2 }));
            else if (403 === k2)
              4e4 === M2.error_code || 60004 === M2.error_code || 15002 === M2.error_code ? t3({ type: n2.E.SERVICE_NOT_ENABLED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 40003 === M2.error_code || 40004 === M2.error_code ? t3({ type: n2.E.THREAD_ALREADY_EXIST, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 40005 === M2.error_code || 40007 === M2.error_code || 91002 === M2.error_code ? t3({ type: n2.E.MAX_LIMIT, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 60002 === M2.error_code ? t3({ type: n2.E.PERMISSION_DENIED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 91101 === M2.error_code ? t3({ type: n2.E.MAX_LIMIT, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 91102 === M2.error_code && t3({ type: n2.E.REQUEST_PARAMETER_ERROR, message: M2.error_description, extraInfo: w2 }), "group member list is full!" === M2.error_description ? (null === (c2 = e3.responseURL) || void 0 === c2 ? void 0 : c2.includes("chatgroups")) ? t3({ type: n2.E.GROUP_MEMBERS_FULL, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : t3({ type: n2.E.CHATROOM_MEMBERS_FULL, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : (null === (u2 = M2.error_description) || void 0 === u2 ? void 0 : u2.includes(M2.error_description.includes("already in group"))) ? (null === (l2 = e3.responseURL) || void 0 === l2 ? void 0 : l2.includes("chatgroups")) && t3({ type: n2.E.GROUP_ALREADY_JOINED, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : (null === (p2 = M2.error_description) || void 0 === p2 ? void 0 : p2.includes("are not members of this group")) ? (null === (d2 = e3.responseURL) || void 0 === d2 ? void 0 : d2.includes("chatgroups")) ? t3({ type: n2.E.GROUP_NOT_JOINED, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : t3({ type: n2.E.CHATROOM_NOT_JOINED, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : (null === (h2 = M2.error_description) || void 0 === h2 ? void 0 : h2.includes("service not open!")) || (null === (f2 = M2.error_description) || void 0 === f2 ? void 0 : f2.includes("message report not open")) || (null === (m2 = M2.error_description) || void 0 === m2 ? void 0 : m2.includes("messageroaming function not open")) ? t3({ type: n2.E.SERVICE_NOT_ENABLED, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : (null === (g2 = M2.error_description) || void 0 === g2 ? void 0 : g2.includes("members size is greater than max user size !")) ? t3({ type: n2.E.GROUP_MEMBERS_LIMIT, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : (null === (E2 = M2.error_description) || void 0 === E2 ? void 0 : E2.includes("can not operate this group, reason: group is disabled")) ? t3({ type: n2.E.GROUP_IS_DISABLED, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : (null === (v2 = M2.error_description) || void 0 === v2 ? void 0 : v2.includes("Invitee's contact max count")) || (null === (y2 = M2.error_description) || void 0 === y2 ? void 0 : y2.includes("Inviter's contact max count")) ? t3({ type: n2.E.MAX_LIMIT, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : t3({ type: n2.E.PERMISSION_DENIED, data: e3.response || e3.responseText, message: "permission denied", extraInfo: o(o({}, w2), { errDesc: "permission denied" }) }), r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: w2 });
            else if (404 === k2)
              40011 === M2.error_code ? t3({ type: n2.E.THREAD_NOT_EXIST, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 40012 === M2.error_code ? t3({ type: n2.E.NO_PERMISSION, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 60003 === M2.error_code || 20004 === M2.error_code ? t3({ type: n2.E.GROUP_NOT_JOINED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }) : 91001 === M2.error_code && t3({ type: n2.E.CONVERSATION_NOT_EXIST, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 }), (null === (T2 = M2.error_description) || void 0 === T2 ? void 0 : T2.includes("do not find this group")) || (null === (_2 = M2.error_description) || void 0 === _2 ? void 0 : _2.includes("does not exist")) ? (null === (R2 = e3.responseURL) || void 0 === R2 ? void 0 : R2.includes("chatgroups")) ? t3({ type: n2.E.GROUP_NOT_EXIST, data: e3.response || e3.responseText, message: "The chat room dose not exist.", extraInfo: o(o({}, w2), { errDesc: "The chat room dose not exist." }) }) : t3({ type: n2.E.CHATROOM_NOT_EXIST, data: e3.response || e3.responseText, message: "The chat room dose not exist.", extraInfo: o(o({}, w2), { errDesc: "The chat room dose not exist." }) }) : (null === (I2 = M2.error_description) || void 0 === I2 ? void 0 : I2.includes("username")) && (null === (O2 = M2.error_description) || void 0 === O2 ? void 0 : O2.includes("doesn't exist!'")) || (null === (S2 = M2.error_description) || void 0 === S2 ? void 0 : S2.includes("user not found")) || (null === (A2 = M2.error_description) || void 0 === A2 ? void 0 : A2.includes("Service resource not found")) && "UserNotFoundException" === (null == M2 ? void 0 : M2.exception) ? t3({ type: n2.E.USER_NOT_FOUND, data: e3.response || e3.responseText, message: M2.error_description, extraInfo: w2 }) : M2.error_description.includes("user session pin message not exist") ? t3({ type: n2.E.MESSAGE_NOT_FOUND, message: M2.error_description, extraInfo: w2 }) : t3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.response || e3.responseText, message: e3.responseText, extraInfo: w2 }), r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.response || e3.responseText, message: e3.responseText, extraInfo: w2 });
            else if (406 === k2)
              90004 === M2.error_code && t3({ type: n2.E.OPERATION_NOT_ALLOWED, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
            else if (429 === k2 || 503 === k2) {
              if (null === (C2 = M2.error_description) || void 0 === C2 ? void 0 : C2.includes("The request has reached the maximum limit"))
                return void t3({ type: n2.E.MAX_LIMIT, message: e3.responseText, extraInfo: w2 });
              if (null === (N2 = M2.error_description) || void 0 === N2 ? void 0 : N2.includes("upload client logs reached limit"))
                return void t3({ type: n2.E.MAX_LIMIT, message: e3.responseText });
              t3({ type: n2.E.SERVER_BUSY, data: e3.response || e3.responseText, message: "Server is busy.", extraInfo: o(o({}, w2), { errDesc: "Server is busy." }) }), r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: "Server is busy.", extraInfo: o(o({}, w2), { errDesc: "Server is busy." }) });
            } else if (500 === k2) {
              if (40006 === M2.error_code || 40008 === M2.error_code || 40010 === M2.error_code)
                return void t3({ type: n2.E.SERVER_UNKNOWN_ERROR, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
              if (90005 === M2.error_code || 99999 === M2.error_code)
                return void t3({ type: n2.E.REQUEST_UNKNOWN, message: null == M2 ? void 0 : M2.error_description, extraInfo: w2 });
              if (null === (b2 = M2.error_description) || void 0 === b2 ? void 0 : b2.includes("translte failed!"))
                return void t3({ type: n2.E.TRANSLATION_FAILED, message: e3.responseText, extraInfo: w2 });
              t3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: "", extraInfo: w2 }), r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: "", extraInfo: w2 });
            } else
              t3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: o(o({}, w2), { errDesc: "ajax error" }) }), r3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: o(o({}, w2), { errDesc: "ajax error" }) });
          }, a = r2(1595), s = r2(2071), c = r2(7360), u = 5242880, l = 5242880, p = { size: 0 }, d = (r2(2526), r2(1817), r2(2165), r2(5827), r2(4553), r2(561), r2(4319)), h = function() {
            return h = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, h.apply(this, arguments);
          };
          function f() {
            var e3 = this.context, t3 = e3.orgName, r3 = e3.appName, n3 = e3.accessToken, o2 = { url: "".concat(this.apiUrl, "/").concat(t3, "/").concat(r3, "/sdk/chatfiles/part-upload"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + n3 } };
            return c.kg.debug("Call multipartInit"), O.call(this, o2, a.fI.SDK_INTERNAL).then(function(e4) {
              var t4 = e4.entities[0];
              return { data: { fileMaxSize: t4.file_upper_limit, partMinSize: t4.part_lower_limit, uuid: t4.uuid }, extraInfo: e4.extraInfo, type: e4.type };
            });
          }
          function m(e3) {
            var t3 = this;
            return new Promise(function(r3, o2) {
              var i2, a2, s2 = (/* @__PURE__ */ new Date()).getTime(), u2 = t3.context, l2 = u2.orgName, p2 = u2.appName, f2 = u2.accessToken, m2 = e3.uuid, g2 = e3.partNumber, E2 = e3.part, v2 = e3.onProgress, y2 = "".concat(t3.apiUrl, "/").concat(l2, "/").concat(p2, "/sdk/chatfiles/part-upload/").concat(m2), T2 = new XMLHttpRequest();
              c.kg.debug("Call multipartUpload"), T2.upload && (null === (a2 = (i2 = T2.upload).addEventListener) || void 0 === a2 || a2.call(i2, "progress", function(e4) {
                null == v2 || v2(e4);
              }, false)), T2.addEventListener("abort", function() {
                o2({ type: n2.E.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: T2, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - s2, httpCode: T2.status || -1, errDesc: "Request Abort", url: y2 } });
              }, false), T2.addEventListener("error", function() {
                o2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: T2, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - s2, httpCode: T2.status || -1, errDesc: "request error", url: y2 } });
              }, false), T2.addEventListener("load", function() {
                try {
                  var e4 = JSON.parse(T2.responseText);
                  if (200 !== T2.status)
                    return o2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: e4, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - s2, httpCode: T2.status || -1, errDesc: "part upload failed", url: y2 } }), false;
                  try {
                    r3(h(h({}, e4), { extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - s2, httpCode: T2.status || -1, url: y2 } }));
                  } catch (e5) {
                    o2({ type: n2.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: e5, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - s2, httpCode: T2.status || -1, errDesc: "part upload failed", url: y2 } });
                  }
                } catch (e5) {
                  o2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: T2.responseText, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - s2, httpCode: T2.status || -1, errDesc: "part upload failed", url: y2 } });
                }
              }, false), T2.addEventListener("timeout", function() {
                o2({ type: n2.E.REQUEST_TIMEOUT, message: "request timeout", extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - s2, httpCode: T2.status || -1, errDesc: "request timeout", url: y2 } });
              }, false);
              var _2 = new FormData();
              _2.append("part_file", E2), _2.append("part_number", g2), T2.timeout = d.zj, T2.open("PUT", y2), T2.setRequestHeader("restrict-access", "true"), T2.setRequestHeader("Accept", "*/*"), T2.setRequestHeader("Authorization", "Bearer " + f2), T2.send(_2);
            });
          }
          function g(e3) {
            var t3 = e3.uuid, r3 = e3.thumbnailHeight, n3 = e3.thumbnailWidth, o2 = this.context, i2 = o2.orgName, s2 = o2.appName, u2 = o2.accessToken, l2 = "".concat(this.apiUrl, "/").concat(i2, "/").concat(s2, "/sdk/chatfiles/part-upload/").concat(t3, "?restrict-access=true");
            n3 && (l2 += "&thumbnail-width=".concat(n3)), r3 && (l2 += "&thumbnail-height=".concat(r3));
            var p2 = { url: l2, dataType: "json", type: "POST", headers: { Authorization: "Bearer " + u2 } };
            return c.kg.debug("Call multipartComplete"), O.call(this, p2, a.fI.SDK_INTERNAL);
          }
          function E(e3) {
            var t3 = e3.uuid, r3 = this.context, n3 = r3.orgName, o2 = r3.appName, i2 = r3.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(n3, "/").concat(o2, "/sdk/chatfiles/part-upload/").concat(t3), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + i2 } };
            return c.kg.debug("Call multipartAbort"), O.call(this, s2, a.fI.SDK_INTERNAL);
          }
          var v = function(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n3.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n3.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }, y = function(e3, t3) {
            var r3, n3, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n3 && (o2 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o2 = n3.return) && o2.call(n3), 0) : n3.next) && !(o2 = o2.call(n3, i4[1])).done)
                        return o2;
                      switch (n3 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n3 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, T = function() {
            function e3(e4, t3) {
              var r3 = this;
              this.handleUploadProgress = function(e5, t4) {
                var n3, o2;
                if (e5.total) {
                  r3.progressArr[t4] = e5.loaded;
                  var i2 = r3.progressArr.reduce(function(e6, t5) {
                    return e6 + t5;
                  }, 0);
                  null === (o2 = (n3 = r3.options).onFileUploadProgress) || void 0 === o2 || o2.call(n3, { isTrusted: e5.isTrusted, type: e5.type, loaded: i2 > r3.file.size ? r3.file.size : i2, total: r3.file.size, lengthComputable: e5.lengthComputable });
                }
              }, this.uuid = "", this.pool = [], this.progressArr = [], this.connection = e4, this.options = t3, this.partSize = u, this.file = t3.file, this.init(), this.rpt = this.connection.dataReport.geOperateFun({ operationName: a.fI.REST_UPLOAD_FILE_IN_PARTS });
            }
            return e3.prototype.init = function() {
              var e4, t3, r3, o2;
              return v(this, void 0, void 0, function() {
                var i2, s2, l2, d2, h2, m2, g2, E2, v2, T2, _2, R2, I2, O2, S2;
                return y(this, function(y2) {
                  switch (y2.label) {
                    case 0:
                      return y2.trys.push([0, 4, , 6]), [4, f.call(this.connection)];
                    case 1:
                      return i2 = y2.sent(), s2 = i2.data || {}, l2 = s2.fileMaxSize, d2 = void 0 === l2 ? 0 : l2, h2 = s2.partMinSize, m2 = void 0 === h2 ? u : h2, g2 = s2.uuid, E2 = void 0 === g2 ? "" : g2, v2 = i2.extraInfo, R2 = v2.elapse, I2 = v2.httpCode, S2 = v2.url, this.partSize = m2, this.uuid = E2, p.size = m2, c.kg.debug("multipartInit success", "uuid: ".concat(E2), "fileMaxSize: ".concat(d2), "partMinSize: ".concat(m2)), this.file.size > d2 ? [4, this.multipartAbort()] : [3, 3];
                    case 2:
                      return y2.sent(), null === (t3 = (e4 = this.options).onFileUploadError) || void 0 === t3 || t3.call(e4, { code: n2.E.WEBIM_UPLOADFILE_ERROR, message: "The file size exceeds the maximum limit" }), [2];
                    case 3:
                      return this.rpt({ data: { requestUrl: S2, requestName: a.c.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: R2, requestMethod: "POST", isSuccess: 1, code: I2 } }), this.upload(), [3, 6];
                    case 4:
                      return T2 = y2.sent(), _2 = (null == T2 ? void 0 : T2.extraInfo) || {}, R2 = _2.elapse, I2 = _2.httpCode, O2 = _2.errDesc, S2 = _2.url, this.rpt({ data: { requestUrl: S2, requestName: a.c.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: R2, requestMethod: "POST", isSuccess: 0, codeDesc: O2, code: I2 } }), [4, this.multipartAbort()];
                    case 5:
                      return y2.sent(), null === (o2 = null === (r3 = this.options) || void 0 === r3 ? void 0 : r3.onInitFail) || void 0 === o2 || o2.call(r3), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            }, e3.prototype.upload = function() {
              var e4, t3, r3;
              return v(this, void 0, void 0, function() {
                var n3, o2, i2, s2, c2, u2, l2 = this;
                return y(this, function(p2) {
                  switch (p2.label) {
                    case 0:
                      new FileReader().readAsArrayBuffer(this.file), n3 = this.file.size, o2 = Math.ceil(n3 / this.partSize), p2.label = 1;
                    case 1:
                      p2.trys.push([1, 7, , 9]), i2 = function(t4) {
                        var r4, o3, i3, c3;
                        return y(this, function(u3) {
                          switch (u3.label) {
                            case 0:
                              return r4 = t4 * s2.partSize, o3 = Math.min(n3, r4 + s2.partSize), i3 = null === (e4 = s2.file) || void 0 === e4 ? void 0 : e4.slice(r4, o3), (c3 = m.call(s2.connection, { uuid: s2.uuid, partNumber: "".concat(t4 + 1), part: i3, onProgress: function(e5) {
                                l2.handleUploadProgress(e5, t4);
                              } })).then(function(e5) {
                                var t5 = (null == e5 ? void 0 : e5.extraInfo) || {}, r5 = t5.elapse, n4 = t5.httpCode, o4 = t5.url;
                                l2.rpt({ data: { requestUrl: o4, requestName: a.c.REST_UPLOAD_PART, requestElapse: r5, isSuccess: 1, requestMethod: "PUT", code: n4 } }), l2.handleTask(c3);
                              }), c3.catch(function(e5) {
                                var t5 = (null == e5 ? void 0 : e5.extraInfo) || {}, r5 = t5.elapse, n4 = t5.httpCode, o4 = t5.url, i4 = t5.errDesc;
                                l2.rpt({ data: { requestUrl: o4, requestName: a.c.REST_UPLOAD_PART, requestElapse: r5, isSuccess: 0, requestMethod: "PUT", code: n4, codeDesc: i4 } }), delete e5.extraInfo;
                              }), s2.pool.push(c3), 4 !== s2.pool.length ? [3, 2] : [4, Promise.race(s2.pool)];
                            case 1:
                              u3.sent(), u3.label = 2;
                            case 2:
                              return [2];
                          }
                        });
                      }, s2 = this, c2 = 0, p2.label = 2;
                    case 2:
                      return c2 < o2 ? [5, i2(c2)] : [3, 5];
                    case 3:
                      p2.sent(), p2.label = 4;
                    case 4:
                      return c2++, [3, 2];
                    case 5:
                      return [4, Promise.all(this.pool)];
                    case 6:
                      return p2.sent(), this.multipartComplete(), [3, 9];
                    case 7:
                      return u2 = p2.sent(), [4, this.multipartAbort()];
                    case 8:
                      return p2.sent(), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), null === (r3 = (t3 = this.options).onFileUploadError) || void 0 === r3 || r3.call(t3, u2), [3, 9];
                    case 9:
                      return [2];
                  }
                });
              });
            }, e3.prototype.multipartComplete = function() {
              var e4, t3, r3, n3;
              return v(this, void 0, void 0, function() {
                var o2, i2, s2, c2, u2, l2, p2, d2, h2, f2, m2;
                return y(this, function(E2) {
                  switch (E2.label) {
                    case 0:
                      return E2.trys.push([0, 2, , 3]), o2 = this.options.thumbnailInfo || {}, i2 = o2.width, s2 = o2.height, [4, g.call(this.connection, { uuid: this.uuid, thumbnailHeight: s2, thumbnailWidth: i2 })];
                    case 1:
                      return c2 = E2.sent(), u2 = (null == c2 ? void 0 : c2.extraInfo) || {}, d2 = u2.elapse, h2 = u2.httpCode, m2 = u2.url, this.rpt({ data: { requestUrl: m2, requestName: a.c.REST_COMPLETE_UPLOAD_PART, requestElapse: d2, requestMethod: "POST", isSuccess: 1, code: h2 } }), this.rpt({ data: { isLastApi: 1, isSuccess: 1 } }), null === (t3 = (e4 = this.options).onFileUploadComplete) || void 0 === t3 || t3.call(e4, c2), [3, 3];
                    case 2:
                      return l2 = E2.sent(), p2 = (null == l2 ? void 0 : l2.extraInfo) || {}, d2 = p2.elapse, h2 = p2.httpCode, f2 = p2.errDesc, m2 = p2.url, this.rpt({ data: { requestUrl: m2, requestName: a.c.REST_COMPLETE_UPLOAD_PART, requestElapse: d2, requestMethod: "POST", isSuccess: 0, codeDesc: f2, code: h2 } }), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), null === (n3 = (r3 = this.options).onFileUploadError) || void 0 === n3 || n3.call(r3, l2), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }, e3.prototype.multipartAbort = function() {
              return v(this, void 0, void 0, function() {
                var e4, t3, r3, n3, o2, i2, s2, c2;
                return y(this, function(u2) {
                  switch (u2.label) {
                    case 0:
                      if (!this.uuid)
                        return [2];
                      u2.label = 1;
                    case 1:
                      return u2.trys.push([1, 3, , 4]), [4, E.call(this.connection, { uuid: this.uuid })];
                    case 2:
                      return e4 = u2.sent(), t3 = (null == e4 ? void 0 : e4.extraInfo) || {}, o2 = t3.elapse, i2 = t3.httpCode, c2 = t3.url, this.rpt({ data: { requestUrl: c2, requestName: a.c.REST_ABORT_UPLOAD_PART, requestElapse: o2, requestMethod: "DELETE", isSuccess: 1, code: i2 } }), [3, 4];
                    case 3:
                      return r3 = u2.sent(), n3 = (null == r3 ? void 0 : r3.extraInfo) || {}, o2 = n3.elapse, i2 = n3.httpCode, s2 = n3.errDesc, c2 = n3.url, this.rpt({ data: { requestUrl: c2, requestName: a.c.REST_ABORT_UPLOAD_PART, requestElapse: o2, requestMethod: "DELETE", isSuccess: 0, codeDesc: s2, code: i2 } }), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            }, e3.prototype.handleTask = function(e4) {
              var t3 = this.pool.findIndex(function(t4) {
                return t4 === e4;
              });
              this.pool.splice(t3, 1);
            }, e3;
          }(), _ = function(e3) {
            var t3, r3, o2 = this, i2 = (/* @__PURE__ */ new Date()).getTime(), s2 = e3.apiUrl, c2 = e3.orgName, u2 = e3.appName, l2 = e3.operateName, p2 = e3.accessToken, h2 = e3.uploadUrl || "".concat(s2, "/").concat(c2, "/").concat(u2, "/chatfiles"), f2 = function(t4) {
              var r4 = (/* @__PURE__ */ new Date()).getTime() - i2;
              o2.dataReport && l2 && [a.fI.UPLOAD_MSG_ATTACH, a.fI.UPLOAD_CHATROOM_FILE, a.fI.UPLOAD_GROUP_FILE].includes(l2) && o2.dataReport.geOperateFun({ operationName: l2 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: l2, requestElapse: r4, requestUrl: h2, code: (null == g2 ? void 0 : g2.status) || 0, codeDesc: "upload file error" } }), e3.onFileUploadError && e3.onFileUploadError(t4);
            };
            function m2(e4) {
              f2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: g2 });
            }
            var g2 = new XMLHttpRequest();
            g2.upload && (null === (r3 = (t3 = g2.upload).addEventListener) || void 0 === r3 || r3.call(t3, "progress", e3.onFileUploadProgress || I, false)), g2.addEventListener("abort", e3.onFileUploadCanceled || I, false), g2.addEventListener("error", m2, false), g2.addEventListener("load", function(t4) {
              try {
                var r4 = JSON.parse(g2.responseText);
                if (400 === g2.status)
                  return f2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: r4 }), false;
                try {
                  !function(t5) {
                    var r5 = (/* @__PURE__ */ new Date()).getTime() - i2;
                    o2.dataReport && l2 && [a.fI.UPLOAD_MSG_ATTACH, a.fI.UPLOAD_CHATROOM_FILE, a.fI.UPLOAD_GROUP_FILE].includes(l2) && o2.dataReport.geOperateFun({ operationName: l2 })({ isEndApi: true, data: { isSuccess: (null == t5 ? void 0 : t5.error) ? 0 : 1, requestMethod: "POST", requestName: l2, requestElapse: r5, requestUrl: h2, code: g2.status, codeDesc: (null == t5 ? void 0 : t5.error_description) || "" } }), e3.onFileUploadComplete && e3.onFileUploadComplete(t5);
                  }(r4);
                } catch (t5) {
                  f2({ type: n2.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: t5 });
                }
              } catch (t5) {
                f2({ type: n2.E.WEBIM_UPLOADFILE_ERROR, data: g2.responseText });
              }
            }, false), g2.addEventListener("timeout", m2, false), g2.timeout = d.zj, g2.open("POST", h2), g2.setRequestHeader("restrict-access", "true"), g2.setRequestHeader("Accept", "*/*"), g2.setRequestHeader("Authorization", "Bearer " + p2);
            var E2 = new FormData();
            E2.append("file", e3.file.data), e3.thumbnailWidth && E2.append("thumbnail-width", e3.thumbnailWidth + ""), e3.thumbnailHeight && E2.append("thumbnail-height", e3.thumbnailHeight + ""), g2.send(E2);
          }, R = function() {
            return R = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o2 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, R.apply(this, arguments);
          }, I = function() {
          };
          function O(e3, t3) {
            var r3, o2 = this;
            return k().platform === N.WEB ? new Promise(function(t4, o3) {
              var a2 = e3.dataType || "text", s2 = e3.success || I, u2 = e3.error || I, l2 = new XMLHttpRequest();
              l2.timeout = d.Gf;
              var p2 = false;
              l2.ontimeout = function() {
                c.kg.warn("request timeout"), p2 = true;
                var e4 = { type: n2.E.REQUEST_TIMEOUT, message: "Request Timeout", errorType: "timeout_error", xhr: l2 };
                u2(e4), o3(e4);
              }, l2.onerror = function() {
                o3({ type: n2.E.REQUEST_UNKNOWN, message: "Request Unknow Error", errorType: "onerror", xhr: l2 });
              }, l2.onabort = function() {
                o3({ type: n2.E.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: l2 });
              }, l2.onreadystatechange = function() {
                if (4 === l2.readyState) {
                  var e4 = (/* @__PURE__ */ new Date()).getTime() - r3, d2 = l2.status || 0, h3 = { elapse: e4, httpCode: d2 };
                  if (200 === d2) {
                    D.ajaxUnconventionalErrorTimes = 0;
                    try {
                      switch (a2) {
                        case "text":
                          return s2(l2.responseText), void t4(l2.responseText);
                        case "json":
                          var f3 = JSON.parse(l2.responseText);
                          return f3.extraInfo = h3, s2(f3), void t4(f3);
                        case "xml":
                          return l2.responseXML && l2.responseXML.documentElement ? (s2(l2.responseXML.documentElement), void t4(l2.responseXML.documentElement)) : (u2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: l2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }), void o3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: l2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }));
                        default:
                          u2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: l2.responseText, message: "Invalid dataType" }), o3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: l2.responseText, message: "Invalid dataType" });
                      }
                      return t4(l2.response || l2.responseText), void s2(l2.response || l2.responseText, l2);
                    } catch (e5) {
                      o3(e5);
                    }
                    return;
                  }
                  0 === d2 ? setTimeout(function() {
                    c.kg.debug("request timeout:", p2), !p2 && i(l2, o3, u2, e4);
                  }, 0) : ([400, 401, 403, 404, 429, 500, 503].includes(d2) || (c.kg.debug("rest api request fail status:", d2), D.ajaxUnconventionalErrorTimes++), i(l2, o3, u2, e4));
                }
                0 === l2.readyState && (u2({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: l2.responseText, message: "Request not initialized" }), o3({ type: n2.E.WEBIM_CONNCTION_AJAX_ERROR, data: l2.responseText, message: "Request not initialized" }));
              }, e3.responseType && l2.responseType && (l2.responseType = e3.responseType), e3.mimeType && l2.overrideMimeType(e3.mimeType);
              var h2 = e3.type || "POST", f2 = e3.data || null, m2 = "";
              if ("get" === h2.toLowerCase() && f2) {
                for (var g2 in f2)
                  f2.hasOwnProperty(g2) && (m2 += g2 + "=" + f2[g2] + "&");
                m2 = m2 ? m2.slice(0, -1) : m2, e3.url += (e3.url.indexOf("?") > 0 ? "&" : "?") + (m2 ? m2 + "&" : m2) + "_v=" + (/* @__PURE__ */ new Date()).getTime(), f2 = null, m2 = "";
              }
              r3 = (/* @__PURE__ */ new Date()).getTime(), l2.open(h2, e3.url);
              var E2 = e3.headers || {};
              for (var v2 in E2["Content-Type"] || (E2["Content-Type"] = "application/json"), E2)
                E2.hasOwnProperty(v2) && l2.setRequestHeader(v2, E2[v2]);
              l2.send(f2);
            }).then(function(r4) {
              return o2.dataReport && t3 && t3 !== a.fI.SDK_INTERNAL && o2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: R({ isSuccess: 1, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, x(r4.extraInfo)) }), t3 === a.fI.SDK_INTERNAL && (r4.extraInfo.url = e3.url), t3 !== a.fI.SDK_INTERNAL && delete r4.extraInfo, "Object" === S(r4) ? R(R({}, r4), { type: n2.E.REQUEST_SUCCESS }) : { data: r4, type: n2.E.REQUEST_SUCCESS };
            }).catch(function(n3) {
              var i2, s2;
              if (o2.dataReport && t3 && t3 !== a.fI.SDK_INTERNAL && o2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: R({ isSuccess: 0, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, x(n3.extraInfo)) }), t3 === a.fI.SDK_INTERNAL)
                if (n3.extraInfo)
                  n3.extraInfo.url = e3.url;
                else {
                  var c2 = { elapse: (/* @__PURE__ */ new Date()).getTime() - r3, httpCode: null !== (s2 = null === (i2 = n3.xhr) || void 0 === i2 ? void 0 : i2.status) && void 0 !== s2 ? s2 : 0, url: e3.url };
                  n3.extraInfo = c2;
                }
              throw t3 !== a.fI.SDK_INTERNAL && delete n3.extraInfo, n3;
            }) : A.call(this, e3, t3);
          }
          function S(e3) {
            return Object.prototype.toString.call(e3).slice(8, -1);
          }
          function A(e3, t3) {
            var r3 = this;
            return new Promise(function(r4, o2) {
              var i2 = e3.success || I, a2 = e3.error || I, u2 = e3.type || "POST", l2 = e3.data || null, p2 = "", h2 = (/* @__PURE__ */ new Date()).getTime(), f2 = D.getEnvInfo();
              if ("get" === u2.toLowerCase() && l2) {
                for (var m2 in l2)
                  l2.hasOwnProperty(m2) && (p2 += m2 + "=" + l2[m2] + "&");
                p2 = p2 ? p2.slice(0, -1) : p2, e3.url += (e3.url.indexOf("?") > 0 ? "&" : "?") + (p2 ? p2 + "&" : p2) + "_v=" + (/* @__PURE__ */ new Date()).getTime(), l2 = null, p2 = "";
              }
              var g2 = { url: e3.url, data: e3.data, method: u2, headers: {}, timeout: d.Gf, success: function(e4) {
                var n3, s2, u3, l3, p3, d2 = { elapse: (/* @__PURE__ */ new Date()).getTime() - h2, httpCode: Number((null === (n3 = e4.statusCode) || void 0 === n3 ? void 0 : n3.toString()) || (null === (s2 = e4.status) || void 0 === s2 ? void 0 : s2.toString())), errDesc: (null === (u3 = null == e4 ? void 0 : e4.data) || void 0 === u3 ? void 0 : u3.error_description) || "" };
                if ("200" === (null === (l3 = e4.statusCode) || void 0 === l3 ? void 0 : l3.toString()) || "200" === (null === (p3 = e4.status) || void 0 === p3 ? void 0 : p3.toString())) {
                  e4.data.extraInfo = d2;
                  var f3 = e4.data;
                  i2(f3), r4(f3);
                } else
                  e4.extraInfo = d2, a2(f3 = e4), o2(f3), c.kg.debug(t3, "reject reason: ", f3);
              }, complete: function() {
              }, fail: function(e4) {
                var r5 = { elapse: (/* @__PURE__ */ new Date()).getTime() - h2, httpCode: s.Tp, errDesc: "request:fail" };
                if (e4.extraInfo = r5, e4.data = { error: "request:fail", error_description: "request:fail" }, "request:fail timeout" === e4.errMsg)
                  return o2({ type: n2.E.REQUEST_TIMEOUT, message: "Request Timeout", extraInfo: r5 }), void a2({ type: n2.E.REQUEST_TIMEOUT, message: "Request Timeout", extraInfo: r5 });
                a2(e4), o2(e4), c.kg.error(t3, "fail reason:", e4);
              } };
              if ("zfb" === f2.platform || "dd" === f2.platform ? g2.headers = e3.headers : g2.header = e3.headers, "dd" === f2.platform)
                return dd.httpRequest(g2);
              f2.global.request(g2);
            }).then(function(o2) {
              return r3.dataReport && t3 && t3 !== a.fI.SDK_INTERNAL && r3.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: R({ isSuccess: 1, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, x(o2.extraInfo)) }), t3 !== a.fI.SDK_INTERNAL && delete o2.extraInfo, "Object" === S(o2) ? R(R({}, o2), { type: n2.E.REQUEST_SUCCESS }) : { data: o2, type: n2.E.REQUEST_SUCCESS };
            }).catch(function(n3) {
              throw r3.dataReport && t3 && t3 !== a.fI.SDK_INTERNAL && r3.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: R({ isSuccess: 0, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, x(n3.extraInfo)) }), t3 !== a.fI.SDK_INTERNAL && delete n3.extraInfo, n3;
            });
          }
          function C(e3, t3) {
            var r3;
            return function() {
              for (var n3 = [], o2 = 0; o2 < arguments.length; o2++)
                n3[o2] = arguments[o2];
              if (!e3)
                return r3;
              r3 = t3 ? e3.apply(t3, n3) : e3.apply(void 0, n3), e3 = null;
            };
          }
          var N, b = C(function(e3, t3) {
            var r3 = k();
            if (r3.platform !== N.WEB) {
              var n3 = r3.global, o2 = function(r4) {
                r4.isConnected ? e3() : t3();
              };
              n3.offNetworkStatusChange && n3.offNetworkStatusChange(o2), n3.onNetworkStatusChange && n3.onNetworkStatusChange(o2);
            } else
              "undefined" != typeof addEventListener && (window.addEventListener("online", e3), window.addEventListener("offline", t3));
          }), M = C(function(e3, t3) {
            var r3, n3, o2 = k();
            if (o2.platform === N.WEB)
              document && document.addEventListener("visibilitychange", function() {
                document.hidden ? null == t3 || t3() : null == e3 || e3();
              }, false);
            else {
              var i2 = o2.global;
              i2.onAppShow && (null === (r3 = i2.onAppShow) || void 0 === r3 || r3.call(i2, e3)), i2.onAppHide && (null === (n3 = i2.onAppHide) || void 0 === n3 || n3.call(i2, t3));
            }
          });
          function k() {
            return "undefined" != typeof swan && w(swan) ? { platform: N.BAIDU, global: swan } : "undefined" != typeof tt && w(tt) ? { platform: N.TT, global: tt } : "undefined" != typeof dd && w(dd) ? { platform: N.DD, global: dd } : "undefined" != typeof my && w(my) ? { platform: N.ZFB, global: my } : "undefined" != typeof wx && w(wx) ? { platform: N.WX, global: wx } : "undefined" != typeof qq && w(qq) ? { platform: N.QQ, global: qq } : "undefined" != typeof uni && w(uni) ? { platform: N.UNI, global: uni } : "undefined" != typeof window && window.WebSocket ? { platform: N.WEB, global: window } : { platform: N.NODE, global: r2.g || {} };
          }
          function w(e3) {
            for (var t3 = ["canIUse", "getSystemInfo"], r3 = 0, n3 = t3.length; r3 < n3; r3++)
              if (!e3[t3[r3]])
                return false;
            return true;
          }
          function U(e3, t3) {
            var r3, o2, i2, a2 = this, s2 = e3.accessToken, c2 = e3.appKey, u2 = null === (o2 = null === (r3 = null == e3 ? void 0 : e3.file) || void 0 === r3 ? void 0 : r3.data) || void 0 === o2 ? void 0 : o2.size, d2 = [], h2 = "", f2 = "";
            if (s2)
              if (c2 && (d2 = c2.split("#"), h2 = d2[0], f2 = d2[1]), h2 || f2)
                if (u2 <= 0)
                  e3.onFileUploadError && e3.onFileUploadError({ type: n2.E.WEBIM_UPLOADFILE_ERROR, message: "fileSize must be greater than 0" });
                else if (e3.uploadUrl)
                  _.call(this, R(R({}, e3), { orgName: h2, appName: f2, operateName: t3 }));
                else {
                  var m2 = p.size || l;
                  this.uploadPartEnable && u2 > 1.5 * m2 ? new T(this, { file: null === (i2 = null == e3 ? void 0 : e3.file) || void 0 === i2 ? void 0 : i2.data, onFileUploadProgress: e3.onFileUploadProgress || I, onFileUploadComplete: e3.onFileUploadComplete || I, onFileUploadError: e3.onFileUploadError || I, onFileUploadCanceled: e3.onFileUploadCanceled || I, onInitFail: function() {
                    _.call(a2, R(R({}, e3), { orgName: h2, appName: f2, operateName: t3 }));
                  }, thumbnailInfo: { width: e3.thumbnailWidth, height: e3.thumbnailHeight } }) : _.call(this, R(R({}, e3), { orgName: h2, appName: f2, operateName: t3 }));
                }
              else
                e3.onFileUploadError && e3.onFileUploadError({ type: n2.E.WEBIM_UPLOADFILE_ERROR, message: "AppKey illegal" });
            else
              e3.onFileUploadError && e3.onFileUploadError({ type: n2.E.WEBIM_UPLOADFILE_NO_LOGIN, message: "AccessToken cannot be empty" });
          }
          function P(e3, t3) {
            var r3;
            e3.onFileDownloadComplete = e3.onFileDownloadComplete || I, e3.onFileDownloadError = e3.onFileDownloadError || I;
            var o2 = (/* @__PURE__ */ new Date()).getTime(), i2 = new XMLHttpRequest(), s2 = this;
            i2.addEventListener("load", function(r4) {
              var n3 = (/* @__PURE__ */ new Date()).getTime() - o2;
              s2.dataReport && t3 && t3 === a.fI.DOWN_GROUP_FILE && s2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: 200 === i2.status ? 1 : 0, requestMethod: "POST", requestName: t3, requestElapse: n3, requestUrl: null == e3 ? void 0 : e3.url, code: i2.status, codeDesc: 200 === i2.status ? "" : "download file error" } }), e3.onFileDownloadComplete && e3.onFileDownloadComplete(i2.response);
            }, false), i2.addEventListener("error", function(r4) {
              var c3 = (/* @__PURE__ */ new Date()).getTime() - o2;
              s2.dataReport && t3 && t3 === a.fI.DOWN_GROUP_FILE && s2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: t3, requestElapse: c3, requestUrl: null == e3 ? void 0 : e3.url, code: (null == i2 ? void 0 : i2.status) || 0, codeDesc: "download file error" } }), e3.onFileDownloadError && e3.onFileDownloadError({ type: n2.E.WEBIM_DOWNLOADFILE_ERROR, id: e3.id, xhr: i2 });
            }, false);
            var c2 = e3.method || "GET", u2 = e3.responseType || "blob", l2 = e3.mimeType || "text/plain; charset=x-user-defined";
            i2.open(c2, e3.url), "undefined" != typeof Blob ? i2.responseType = u2 : i2.overrideMimeType(l2);
            var p2 = { "X-Requested-With": "XMLHttpRequest", Accept: "application/octet-stream", "share-secret": e3.secret, Authorization: "Bearer " + (null === (r3 = null == this ? void 0 : this.context) || void 0 === r3 ? void 0 : r3.accessToken) }, d2 = e3.headers || {};
            for (var h2 in d2)
              p2[h2] = d2[h2];
            for (var h2 in p2)
              p2[h2] && i2.setRequestHeader(h2, p2[h2]);
            i2.send(null);
          }
          function x(e3) {
            void 0 === e3 && (e3 = {});
            var t3 = e3.elapse, r3 = void 0 === t3 ? 0 : t3, n3 = e3.httpCode, o2 = void 0 === n3 ? 0 : n3, i2 = e3.errDesc;
            return { requestElapse: r3, code: o2, codeDesc: void 0 === i2 ? "" : i2 };
          }
          !function(e3) {
            e3.WEB = "web", e3.WX = "wx", e3.QQ = "qq", e3.ZFB = "zfb", e3.DD = "dd", e3.TT = "tt", e3.BAIDU = "baidu", e3.QUICK_APP = "quick_app", e3.UNI = "uni", e3.NODE = "node";
          }(N || (N = {}));
          var L = "localDeviceInfo", D = { autoIncrement: 0, ajaxUnconventionalErrorTimes: 0, ajax: O, getUniqueId: function() {
            this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
            var e3 = /* @__PURE__ */ new Date(), t3 = new Date(2010, 1, 1);
            return (e3.getTime() - t3.getTime() + this.autoIncrement).toString();
          }, getFileUrl: function(e3) {
            var t3 = { url: "", filename: "", filetype: "", data: {} }, r3 = "string" == typeof e3 ? document.getElementById(e3) : e3;
            if (window.URL.createObjectURL) {
              if (!r3.files)
                throw Error("this is not HTMLInputElement");
              var n3 = r3.files;
              if (n3.length > 0) {
                var o2 = n3.item(0);
                t3.data = o2, t3.url = window.URL.createObjectURL(o2), t3.filename = (null == o2 ? void 0 : o2.name) || "";
              }
            } else {
              if ("string" != typeof e3)
                throw Error("in IE fileInputId must be string");
              o2 = document.getElementById(e3).value, t3.url = o2;
              var i2 = o2.lastIndexOf("/"), a2 = o2.lastIndexOf("\\"), s2 = Math.max(i2, a2);
              t3.filename = s2 < 0 ? o2 : o2.substring(s2 + 1);
            }
            var c2 = t3.filename.lastIndexOf(".");
            return -1 !== c2 && (t3.filetype = t3.filename.substring(c2 + 1).toLowerCase()), t3;
          }, uploadFile: U, flow: function(e3) {
            for (var t3 = e3.length, r3 = t3; r3--; )
              if ("function" != typeof e3[r3])
                throw new TypeError("Expected a function");
            return function() {
              for (var r4 = [], n3 = 0; n3 < arguments.length; n3++)
                r4[n3] = arguments[n3];
              for (var o2 = 0, i2 = t3 ? e3[o2].apply(this, r4) : r4[0]; ++o2 < t3; )
                i2 = e3[o2].call(this, i2);
              return i2;
            };
          }, listenNetwork: b, listenBrowserVisibility: M, getEnvInfo: k, wxRequest: A, parseDownloadResponse: function(e3) {
            if (!window || !window.URL)
              throw Error("parseDownloadResponse can be used in broswer only");
            return e3 && e3.type && "application/json" === e3.type || 0 > Object.prototype.toString.call(e3).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e3);
          }, download: P, parseNotify: function(e3) {
            for (var t3 = "", r3 = 0; r3 < e3.length; r3++)
              t3 += "%" + e3[r3].toString(16);
            return JSON.parse(decodeURIComponent(t3));
          }, getExtraData: x, retryPromise: function(e3, t3, r3) {
            return new Promise(function(n3, o2) {
              !function t4(i2) {
                e3().then(n3).catch(function(e4) {
                  i2 > 0 ? setTimeout(function() {
                    t4(i2 - 1);
                  }, r3 || 1e3) : o2(e4);
                });
              }(t3 || 3);
            });
          }, formatAttachUrl: function(e3) {
            return e3 && "string" == typeof e3 ? "".concat(this.apiUrl).concat(e3.substr(e3.indexOf("/", 9))) : "";
          }, Uint8ArrayToString: function(e3) {
            for (var t3 = "", r3 = 0; r3 < e3.length; r3++)
              t3 += String.fromCharCode(e3[r3]);
            return t3;
          }, getLocalDeviceInfo: function() {
            return function(e3) {
              var t3, r3 = D.getEnvInfo(), n3 = r3.platform, o2 = "";
              n3 !== N.NODE && n3 !== N.QUICK_APP || (o2 = "");
              try {
                n3 === N.WEB ? o2 = localStorage.getItem(e3) || "" : n3 === N.WX || n3 === N.QQ || n3 === N.TT || n3 === N.BAIDU || n3 === N.UNI ? o2 = r3.global.getStorageSync(e3) || "" : n3 !== N.ZFB && n3 !== N.DD || (o2 = (null === (t3 = r3.global.getStorageSync({ key: e3 })) || void 0 === t3 ? void 0 : t3.data) || "");
              } catch (t4) {
                c.kg.debug("get local ".concat(e3, " failed: "), t4);
              }
              return c.kg.debug("".concat(e3, " "), o2), o2;
            }(L);
          }, setLocalDeviceInfo: function(e3) {
            !function(e4, t3) {
              var r3 = D.getEnvInfo(), n3 = r3.platform;
              if (n3 !== N.NODE && n3 !== N.QUICK_APP)
                if (n3 === N.WEB)
                  try {
                    localStorage.setItem(e4, t3);
                  } catch (t4) {
                    c.kg.error("set local ".concat(e4, " failed: "), t4);
                  }
                else
                  r3.global.setStorage({ key: e4, data: t3, success: function(t4) {
                    c.kg.debug("set local ".concat(e4, " success: "), t4);
                  }, fail: function(t4) {
                    c.kg.error("set local ".concat(e4, " failed: "), t4);
                  } });
            }(L, e3);
          }, detectBrowser: function() {
            if ("undefined" == typeof navigator)
              return "unknown";
            var e3 = navigator.userAgent;
            return /MicroMessenger/i.test(e3) ? "WeChat" : /QQBrowser/i.test(e3) ? "QQ" : !/Chrome/i.test(e3) || /Edg/i.test(e3) || /OPR/i.test(e3) ? !/Safari/i.test(e3) || /Chrome/i.test(e3) || /CriOS/i.test(e3) ? /Firefox/i.test(e3) ? "Firefox" : /MSIE/i.test(e3) || /Trident/i.test(e3) ? "IE" : /Edg/i.test(e3) ? "Edge" : "unknown" : "Safari" : "Chrome";
          }, getDevicePlatform: function(e3) {
            return e3.platform === N.WX && "undefined" != typeof uni && w(uni) ? N.UNI : e3.platform;
          }, delay: function(e3) {
            return new Promise(function(t3) {
              return setTimeout(t3, e3);
            });
          } };
        }, 9662: function(e2, t2, r2) {
          var n2 = r2(614), o = r2(6330), i = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              return e3;
            throw i(o(e3) + " is not a function");
          };
        }, 9483: function(e2, t2, r2) {
          var n2 = r2(4411), o = r2(6330), i = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              return e3;
            throw i(o(e3) + " is not a constructor");
          };
        }, 6077: function(e2, t2, r2) {
          var n2 = r2(614), o = String, i = TypeError;
          e2.exports = function(e3) {
            if ("object" == typeof e3 || n2(e3))
              return e3;
            throw i("Can't set " + o(e3) + " as a prototype");
          };
        }, 1223: function(e2, t2, r2) {
          var n2 = r2(5112), o = r2(30), i = r2(3070).f, a = n2("unscopables"), s = Array.prototype;
          null == s[a] && i(s, a, { configurable: true, value: o(null) }), e2.exports = function(e3) {
            s[a][e3] = true;
          };
        }, 1530: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(8710).charAt;
          e2.exports = function(e3, t3, r3) {
            return t3 + (r3 ? n2(e3, t3).length : 1);
          };
        }, 5787: function(e2, t2, r2) {
          var n2 = r2(7976), o = TypeError;
          e2.exports = function(e3, t3) {
            if (n2(t3, e3))
              return e3;
            throw o("Incorrect invocation");
          };
        }, 9670: function(e2, t2, r2) {
          var n2 = r2(111), o = String, i = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              return e3;
            throw i(o(e3) + " is not an object");
          };
        }, 3013: function(e2) {
          e2.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
        }, 7556: function(e2, t2, r2) {
          var n2 = r2(7293);
          e2.exports = n2(function() {
            if ("function" == typeof ArrayBuffer) {
              var e3 = new ArrayBuffer(8);
              Object.isExtensible(e3) && Object.defineProperty(e3, "a", { value: 8 });
            }
          });
        }, 260: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a = r2(3013), s = r2(9781), c = r2(7854), u = r2(614), l = r2(111), p = r2(2597), d = r2(648), h = r2(6330), f = r2(8880), m = r2(8052), g = r2(7045), E = r2(7976), v = r2(9518), y = r2(7674), T = r2(5112), _ = r2(9711), R = r2(9909), I = R.enforce, O = R.get, S = c.Int8Array, A = S && S.prototype, C = c.Uint8ClampedArray, N = C && C.prototype, b = S && v(S), M = A && v(A), k = Object.prototype, w = c.TypeError, U = T("toStringTag"), P = _("TYPED_ARRAY_TAG"), x = "TypedArrayConstructor", L = a && !!y && "Opera" !== d(c.opera), D = false, j = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, G = { BigInt64Array: 8, BigUint64Array: 8 }, B = function(e3) {
            var t3 = v(e3);
            if (l(t3)) {
              var r3 = O(t3);
              return r3 && p(r3, x) ? r3[x] : B(t3);
            }
          }, H = function(e3) {
            if (!l(e3))
              return false;
            var t3 = d(e3);
            return p(j, t3) || p(G, t3);
          };
          for (n2 in j)
            (i = (o = c[n2]) && o.prototype) ? I(i)[x] = o : L = false;
          for (n2 in G)
            (i = (o = c[n2]) && o.prototype) && (I(i)[x] = o);
          if ((!L || !u(b) || b === Function.prototype) && (b = function() {
            throw w("Incorrect invocation");
          }, L))
            for (n2 in j)
              c[n2] && y(c[n2], b);
          if ((!L || !M || M === k) && (M = b.prototype, L))
            for (n2 in j)
              c[n2] && y(c[n2].prototype, M);
          if (L && v(N) !== M && y(N, M), s && !p(M, U))
            for (n2 in D = true, g(M, U, { configurable: true, get: function() {
              return l(this) ? this[P] : void 0;
            } }), j)
              c[n2] && f(c[n2], P, n2);
          e2.exports = { NATIVE_ARRAY_BUFFER_VIEWS: L, TYPED_ARRAY_TAG: D && P, aTypedArray: function(e3) {
            if (H(e3))
              return e3;
            throw w("Target is not a typed array");
          }, aTypedArrayConstructor: function(e3) {
            if (u(e3) && (!y || E(b, e3)))
              return e3;
            throw w(h(e3) + " is not a typed array constructor");
          }, exportTypedArrayMethod: function(e3, t3, r3, n3) {
            if (s) {
              if (r3)
                for (var o2 in j) {
                  var i2 = c[o2];
                  if (i2 && p(i2.prototype, e3))
                    try {
                      delete i2.prototype[e3];
                    } catch (r4) {
                      try {
                        i2.prototype[e3] = t3;
                      } catch (e4) {
                      }
                    }
                }
              M[e3] && !r3 || m(M, e3, r3 ? t3 : L && A[e3] || t3, n3);
            }
          }, exportTypedArrayStaticMethod: function(e3, t3, r3) {
            var n3, o2;
            if (s) {
              if (y) {
                if (r3) {
                  for (n3 in j)
                    if ((o2 = c[n3]) && p(o2, e3))
                      try {
                        delete o2[e3];
                      } catch (e4) {
                      }
                }
                if (b[e3] && !r3)
                  return;
                try {
                  return m(b, e3, r3 ? t3 : L && b[e3] || t3);
                } catch (e4) {
                }
              }
              for (n3 in j)
                !(o2 = c[n3]) || o2[e3] && !r3 || m(o2, e3, t3);
            }
          }, getTypedArrayConstructor: B, isView: function(e3) {
            if (!l(e3))
              return false;
            var t3 = d(e3);
            return "DataView" === t3 || p(j, t3) || p(G, t3);
          }, isTypedArray: H, TypedArray: b, TypedArrayPrototype: M };
        }, 3331: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7854), o = r2(1702), i = r2(9781), a = r2(3013), s = r2(6530), c = r2(8880), u = r2(7045), l = r2(9190), p = r2(7293), d = r2(5787), h = r2(9303), f = r2(7466), m = r2(7067), g = r2(1179), E = r2(9518), v = r2(7674), y = r2(8006).f, T = r2(1285), _ = r2(1589), R = r2(8003), I = r2(9909), O = s.PROPER, S = s.CONFIGURABLE, A = "ArrayBuffer", C = "DataView", N = "prototype", b = "Wrong index", M = I.getterFor(A), k = I.getterFor(C), w = I.set, U = n2[A], P = U, x = P && P[N], L = n2[C], D = L && L[N], j = Object.prototype, G = n2.Array, B = n2.RangeError, H = o(T), F = o([].reverse), W = g.pack, Z = g.unpack, K = function(e3) {
            return [255 & e3];
          }, q = function(e3) {
            return [255 & e3, e3 >> 8 & 255];
          }, z = function(e3) {
            return [255 & e3, e3 >> 8 & 255, e3 >> 16 & 255, e3 >> 24 & 255];
          }, V = function(e3) {
            return e3[3] << 24 | e3[2] << 16 | e3[1] << 8 | e3[0];
          }, X = function(e3) {
            return W(e3, 23, 4);
          }, J = function(e3) {
            return W(e3, 52, 8);
          }, Y = function(e3, t3, r3) {
            u(e3[N], t3, { configurable: true, get: function() {
              return r3(this)[t3];
            } });
          }, Q = function(e3, t3, r3, n3) {
            var o2 = m(r3), i2 = k(e3);
            if (o2 + t3 > i2.byteLength)
              throw B(b);
            var a2 = i2.bytes, s2 = o2 + i2.byteOffset, c2 = _(a2, s2, s2 + t3);
            return n3 ? c2 : F(c2);
          }, $2 = function(e3, t3, r3, n3, o2, i2) {
            var a2 = m(r3), s2 = k(e3);
            if (a2 + t3 > s2.byteLength)
              throw B(b);
            for (var c2 = s2.bytes, u2 = a2 + s2.byteOffset, l2 = n3(+o2), p2 = 0; p2 < t3; p2++)
              c2[u2 + p2] = l2[i2 ? p2 : t3 - p2 - 1];
          };
          if (a) {
            var ee = O && U.name !== A;
            if (p(function() {
              U(1);
            }) && p(function() {
              new U(-1);
            }) && !p(function() {
              return new U(), new U(1.5), new U(NaN), 1 != U.length || ee && !S;
            }))
              ee && S && c(U, "name", A);
            else {
              (P = function(e3) {
                return d(this, x), new U(m(e3));
              })[N] = x;
              for (var te, re = y(U), ne = 0; re.length > ne; )
                (te = re[ne++]) in P || c(P, te, U[te]);
              x.constructor = P;
            }
            v && E(D) !== j && v(D, j);
            var oe = new L(new P(2)), ie = o(D.setInt8);
            oe.setInt8(0, 2147483648), oe.setInt8(1, 2147483649), !oe.getInt8(0) && oe.getInt8(1) || l(D, { setInt8: function(e3, t3) {
              ie(this, e3, t3 << 24 >> 24);
            }, setUint8: function(e3, t3) {
              ie(this, e3, t3 << 24 >> 24);
            } }, { unsafe: true });
          } else
            x = (P = function(e3) {
              d(this, x);
              var t3 = m(e3);
              w(this, { type: A, bytes: H(G(t3), 0), byteLength: t3 }), i || (this.byteLength = t3, this.detached = false);
            })[N], D = (L = function(e3, t3, r3) {
              d(this, D), d(e3, x);
              var n3 = M(e3), o2 = n3.byteLength, a2 = h(t3);
              if (a2 < 0 || a2 > o2)
                throw B("Wrong offset");
              if (a2 + (r3 = void 0 === r3 ? o2 - a2 : f(r3)) > o2)
                throw B("Wrong length");
              w(this, { type: C, buffer: e3, byteLength: r3, byteOffset: a2, bytes: n3.bytes }), i || (this.buffer = e3, this.byteLength = r3, this.byteOffset = a2);
            })[N], i && (Y(P, "byteLength", M), Y(L, "buffer", k), Y(L, "byteLength", k), Y(L, "byteOffset", k)), l(D, { getInt8: function(e3) {
              return Q(this, 1, e3)[0] << 24 >> 24;
            }, getUint8: function(e3) {
              return Q(this, 1, e3)[0];
            }, getInt16: function(e3) {
              var t3 = Q(this, 2, e3, arguments.length > 1 ? arguments[1] : void 0);
              return (t3[1] << 8 | t3[0]) << 16 >> 16;
            }, getUint16: function(e3) {
              var t3 = Q(this, 2, e3, arguments.length > 1 ? arguments[1] : void 0);
              return t3[1] << 8 | t3[0];
            }, getInt32: function(e3) {
              return V(Q(this, 4, e3, arguments.length > 1 ? arguments[1] : void 0));
            }, getUint32: function(e3) {
              return V(Q(this, 4, e3, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
            }, getFloat32: function(e3) {
              return Z(Q(this, 4, e3, arguments.length > 1 ? arguments[1] : void 0), 23);
            }, getFloat64: function(e3) {
              return Z(Q(this, 8, e3, arguments.length > 1 ? arguments[1] : void 0), 52);
            }, setInt8: function(e3, t3) {
              $2(this, 1, e3, K, t3);
            }, setUint8: function(e3, t3) {
              $2(this, 1, e3, K, t3);
            }, setInt16: function(e3, t3) {
              $2(this, 2, e3, q, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setUint16: function(e3, t3) {
              $2(this, 2, e3, q, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setInt32: function(e3, t3) {
              $2(this, 4, e3, z, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setUint32: function(e3, t3) {
              $2(this, 4, e3, z, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setFloat32: function(e3, t3) {
              $2(this, 4, e3, X, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, setFloat64: function(e3, t3) {
              $2(this, 8, e3, J, t3, arguments.length > 2 ? arguments[2] : void 0);
            } });
          R(P, A), R(L, C), e2.exports = { ArrayBuffer: P, DataView: L };
        }, 1048: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7908), o = r2(1400), i = r2(6244), a = r2(5117), s = Math.min;
          e2.exports = [].copyWithin || function(e3, t3) {
            var r3 = n2(this), c = i(r3), u = o(e3, c), l = o(t3, c), p = arguments.length > 2 ? arguments[2] : void 0, d = s((void 0 === p ? c : o(p, c)) - l, c - u), h = 1;
            for (l < u && u < l + d && (h = -1, l += d - 1, u += d - 1); d-- > 0; )
              l in r3 ? r3[u] = r3[l] : a(r3, u), u += h, l += h;
            return r3;
          };
        }, 1285: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7908), o = r2(1400), i = r2(6244);
          e2.exports = function(e3) {
            for (var t3 = n2(this), r3 = i(t3), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, r3), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? r3 : o(c, r3); u > s; )
              t3[s++] = e3;
            return t3;
          };
        }, 8533: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2092).forEach, o = r2(9341)("forEach");
          e2.exports = o ? [].forEach : function(e3) {
            return n2(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          };
        }, 7745: function(e2, t2, r2) {
          var n2 = r2(6244);
          e2.exports = function(e3, t3) {
            for (var r3 = 0, o = n2(t3), i = new e3(o); o > r3; )
              i[r3] = t3[r3++];
            return i;
          };
        }, 8457: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(9974), o = r2(6916), i = r2(7908), a = r2(3411), s = r2(7659), c = r2(4411), u = r2(6244), l = r2(6135), p = r2(4121), d = r2(1246), h = Array;
          e2.exports = function(e3) {
            var t3 = i(e3), r3 = c(this), f = arguments.length, m = f > 1 ? arguments[1] : void 0, g = void 0 !== m;
            g && (m = n2(m, f > 2 ? arguments[2] : void 0));
            var E, v, y, T, _, R, I = d(t3), O = 0;
            if (!I || this === h && s(I))
              for (E = u(t3), v = r3 ? new this(E) : h(E); E > O; O++)
                R = g ? m(t3[O], O) : t3[O], l(v, O, R);
            else
              for (_ = (T = p(t3, I)).next, v = r3 ? new this() : []; !(y = o(_, T)).done; O++)
                R = g ? a(T, m, [y.value, O], true) : y.value, l(v, O, R);
            return v.length = O, v;
          };
        }, 1318: function(e2, t2, r2) {
          var n2 = r2(5656), o = r2(1400), i = r2(6244), a = function(e3) {
            return function(t3, r3, a2) {
              var s, c = n2(t3), u = i(c), l = o(a2, u);
              if (e3 && r3 != r3) {
                for (; u > l; )
                  if ((s = c[l++]) != s)
                    return true;
              } else
                for (; u > l; l++)
                  if ((e3 || l in c) && c[l] === r3)
                    return e3 || l || 0;
              return !e3 && -1;
            };
          };
          e2.exports = { includes: a(true), indexOf: a(false) };
        }, 2092: function(e2, t2, r2) {
          var n2 = r2(9974), o = r2(1702), i = r2(8361), a = r2(7908), s = r2(6244), c = r2(5417), u = o([].push), l = function(e3) {
            var t3 = 1 == e3, r3 = 2 == e3, o2 = 3 == e3, l2 = 4 == e3, p = 6 == e3, d = 7 == e3, h = 5 == e3 || p;
            return function(f, m, g, E) {
              for (var v, y, T = a(f), _ = i(T), R = n2(m, g), I = s(_), O = 0, S = E || c, A = t3 ? S(f, I) : r3 || d ? S(f, 0) : void 0; I > O; O++)
                if ((h || O in _) && (y = R(v = _[O], O, T), e3))
                  if (t3)
                    A[O] = y;
                  else if (y)
                    switch (e3) {
                      case 3:
                        return true;
                      case 5:
                        return v;
                      case 6:
                        return O;
                      case 2:
                        u(A, v);
                    }
                  else
                    switch (e3) {
                      case 4:
                        return false;
                      case 7:
                        u(A, v);
                    }
              return p ? -1 : o2 || l2 ? l2 : A;
            };
          };
          e2.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6), filterReject: l(7) };
        }, 6583: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2104), o = r2(5656), i = r2(9303), a = r2(6244), s = r2(9341), c = Math.min, u = [].lastIndexOf, l = !!u && 1 / [1].lastIndexOf(1, -0) < 0, p = s("lastIndexOf"), d = l || !p;
          e2.exports = d ? function(e3) {
            if (l)
              return n2(u, this, arguments) || 0;
            var t3 = o(this), r3 = a(t3), s2 = r3 - 1;
            for (arguments.length > 1 && (s2 = c(s2, i(arguments[1]))), s2 < 0 && (s2 = r3 + s2); s2 >= 0; s2--)
              if (s2 in t3 && t3[s2] === e3)
                return s2 || 0;
            return -1;
          } : u;
        }, 1194: function(e2, t2, r2) {
          var n2 = r2(7293), o = r2(5112), i = r2(7392), a = o("species");
          e2.exports = function(e3) {
            return i >= 51 || !n2(function() {
              var t3 = [];
              return (t3.constructor = {})[a] = function() {
                return { foo: 1 };
              }, 1 !== t3[e3](Boolean).foo;
            });
          };
        }, 9341: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7293);
          e2.exports = function(e3, t3) {
            var r3 = [][e3];
            return !!r3 && n2(function() {
              r3.call(null, t3 || function() {
                return 1;
              }, 1);
            });
          };
        }, 3671: function(e2, t2, r2) {
          var n2 = r2(9662), o = r2(7908), i = r2(8361), a = r2(6244), s = TypeError, c = function(e3) {
            return function(t3, r3, c2, u) {
              n2(r3);
              var l = o(t3), p = i(l), d = a(l), h = e3 ? d - 1 : 0, f = e3 ? -1 : 1;
              if (c2 < 2)
                for (; ; ) {
                  if (h in p) {
                    u = p[h], h += f;
                    break;
                  }
                  if (h += f, e3 ? h < 0 : d <= h)
                    throw s("Reduce of empty array with no initial value");
                }
              for (; e3 ? h >= 0 : d > h; h += f)
                h in p && (u = r3(u, p[h], h, l));
              return u;
            };
          };
          e2.exports = { left: c(false), right: c(true) };
        }, 3658: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(9781), o = r2(3157), i = TypeError, a = Object.getOwnPropertyDescriptor, s = n2 && !function() {
            if (void 0 !== this)
              return true;
            try {
              Object.defineProperty([], "length", { writable: false }).length = 1;
            } catch (e3) {
              return e3 instanceof TypeError;
            }
          }();
          e2.exports = s ? function(e3, t3) {
            if (o(e3) && !a(e3, "length").writable)
              throw i("Cannot set read only .length");
            return e3.length = t3;
          } : function(e3, t3) {
            return e3.length = t3;
          };
        }, 1589: function(e2, t2, r2) {
          var n2 = r2(1400), o = r2(6244), i = r2(6135), a = Array, s = Math.max;
          e2.exports = function(e3, t3, r3) {
            for (var c = o(e3), u = n2(t3, c), l = n2(void 0 === r3 ? c : r3, c), p = a(s(l - u, 0)), d = 0; u < l; u++, d++)
              i(p, d, e3[u]);
            return p.length = d, p;
          };
        }, 206: function(e2, t2, r2) {
          var n2 = r2(1702);
          e2.exports = n2([].slice);
        }, 4362: function(e2, t2, r2) {
          var n2 = r2(1589), o = Math.floor, i = function(e3, t3) {
            var r3 = e3.length, c = o(r3 / 2);
            return r3 < 8 ? a(e3, t3) : s(e3, i(n2(e3, 0, c), t3), i(n2(e3, c), t3), t3);
          }, a = function(e3, t3) {
            for (var r3, n3, o2 = e3.length, i2 = 1; i2 < o2; ) {
              for (n3 = i2, r3 = e3[i2]; n3 && t3(e3[n3 - 1], r3) > 0; )
                e3[n3] = e3[--n3];
              n3 !== i2++ && (e3[n3] = r3);
            }
            return e3;
          }, s = function(e3, t3, r3, n3) {
            for (var o2 = t3.length, i2 = r3.length, a2 = 0, s2 = 0; a2 < o2 || s2 < i2; )
              e3[a2 + s2] = a2 < o2 && s2 < i2 ? n3(t3[a2], r3[s2]) <= 0 ? t3[a2++] : r3[s2++] : a2 < o2 ? t3[a2++] : r3[s2++];
            return e3;
          };
          e2.exports = i;
        }, 7475: function(e2, t2, r2) {
          var n2 = r2(3157), o = r2(4411), i = r2(111), a = r2(5112)("species"), s = Array;
          e2.exports = function(e3) {
            var t3;
            return n2(e3) && (t3 = e3.constructor, (o(t3) && (t3 === s || n2(t3.prototype)) || i(t3) && null === (t3 = t3[a])) && (t3 = void 0)), void 0 === t3 ? s : t3;
          };
        }, 5417: function(e2, t2, r2) {
          var n2 = r2(7475);
          e2.exports = function(e3, t3) {
            return new (n2(e3))(0 === t3 ? 0 : t3);
          };
        }, 3411: function(e2, t2, r2) {
          var n2 = r2(9670), o = r2(9212);
          e2.exports = function(e3, t3, r3, i) {
            try {
              return i ? t3(n2(r3)[0], r3[1]) : t3(r3);
            } catch (t4) {
              o(e3, "throw", t4);
            }
          };
        }, 7072: function(e2, t2, r2) {
          var n2 = r2(5112)("iterator"), o = false;
          try {
            var i = 0, a = { next: function() {
              return { done: !!i++ };
            }, return: function() {
              o = true;
            } };
            a[n2] = function() {
              return this;
            }, Array.from(a, function() {
              throw 2;
            });
          } catch (e3) {
          }
          e2.exports = function(e3, t3) {
            if (!t3 && !o)
              return false;
            var r3 = false;
            try {
              var i2 = {};
              i2[n2] = function() {
                return { next: function() {
                  return { done: r3 = true };
                } };
              }, e3(i2);
            } catch (e4) {
            }
            return r3;
          };
        }, 4326: function(e2, t2, r2) {
          var n2 = r2(1702), o = n2({}.toString), i = n2("".slice);
          e2.exports = function(e3) {
            return i(o(e3), 8, -1);
          };
        }, 648: function(e2, t2, r2) {
          var n2 = r2(1694), o = r2(614), i = r2(4326), a = r2(5112)("toStringTag"), s = Object, c = "Arguments" == i(/* @__PURE__ */ function() {
            return arguments;
          }());
          e2.exports = n2 ? i : function(e3) {
            var t3, r3, n3;
            return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (r3 = function(e4, t4) {
              try {
                return e4[t4];
              } catch (e5) {
              }
            }(t3 = s(e3), a)) ? r3 : c ? i(t3) : "Object" == (n3 = i(t3)) && o(t3.callee) ? "Arguments" : n3;
          };
        }, 5631: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(30), o = r2(7045), i = r2(9190), a = r2(9974), s = r2(5787), c = r2(8554), u = r2(408), l = r2(1656), p = r2(6178), d = r2(6340), h = r2(9781), f = r2(2423).fastKey, m = r2(9909), g = m.set, E = m.getterFor;
          e2.exports = { getConstructor: function(e3, t3, r3, l2) {
            var p2 = e3(function(e4, o2) {
              s(e4, d2), g(e4, { type: t3, index: n2(null), first: void 0, last: void 0, size: 0 }), h || (e4.size = 0), c(o2) || u(o2, e4[l2], { that: e4, AS_ENTRIES: r3 });
            }), d2 = p2.prototype, m2 = E(t3), v = function(e4, t4, r4) {
              var n3, o2, i2 = m2(e4), a2 = y(e4, t4);
              return a2 ? a2.value = r4 : (i2.last = a2 = { index: o2 = f(t4, true), key: t4, value: r4, previous: n3 = i2.last, next: void 0, removed: false }, i2.first || (i2.first = a2), n3 && (n3.next = a2), h ? i2.size++ : e4.size++, "F" !== o2 && (i2.index[o2] = a2)), e4;
            }, y = function(e4, t4) {
              var r4, n3 = m2(e4), o2 = f(t4);
              if ("F" !== o2)
                return n3.index[o2];
              for (r4 = n3.first; r4; r4 = r4.next)
                if (r4.key == t4)
                  return r4;
            };
            return i(d2, { clear: function() {
              for (var e4 = m2(this), t4 = e4.index, r4 = e4.first; r4; )
                r4.removed = true, r4.previous && (r4.previous = r4.previous.next = void 0), delete t4[r4.index], r4 = r4.next;
              e4.first = e4.last = void 0, h ? e4.size = 0 : this.size = 0;
            }, delete: function(e4) {
              var t4 = this, r4 = m2(t4), n3 = y(t4, e4);
              if (n3) {
                var o2 = n3.next, i2 = n3.previous;
                delete r4.index[n3.index], n3.removed = true, i2 && (i2.next = o2), o2 && (o2.previous = i2), r4.first == n3 && (r4.first = o2), r4.last == n3 && (r4.last = i2), h ? r4.size-- : t4.size--;
              }
              return !!n3;
            }, forEach: function(e4) {
              for (var t4, r4 = m2(this), n3 = a(e4, arguments.length > 1 ? arguments[1] : void 0); t4 = t4 ? t4.next : r4.first; )
                for (n3(t4.value, t4.key, this); t4 && t4.removed; )
                  t4 = t4.previous;
            }, has: function(e4) {
              return !!y(this, e4);
            } }), i(d2, r3 ? { get: function(e4) {
              var t4 = y(this, e4);
              return t4 && t4.value;
            }, set: function(e4, t4) {
              return v(this, 0 === e4 ? 0 : e4, t4);
            } } : { add: function(e4) {
              return v(this, e4 = 0 === e4 ? 0 : e4, e4);
            } }), h && o(d2, "size", { configurable: true, get: function() {
              return m2(this).size;
            } }), p2;
          }, setStrong: function(e3, t3, r3) {
            var n3 = t3 + " Iterator", o2 = E(t3), i2 = E(n3);
            l(e3, t3, function(e4, t4) {
              g(this, { type: n3, target: e4, state: o2(e4), kind: t4, last: void 0 });
            }, function() {
              for (var e4 = i2(this), t4 = e4.kind, r4 = e4.last; r4 && r4.removed; )
                r4 = r4.previous;
              return e4.target && (e4.last = r4 = r4 ? r4.next : e4.state.first) ? p("keys" == t4 ? r4.key : "values" == t4 ? r4.value : [r4.key, r4.value], false) : (e4.target = void 0, p(void 0, true));
            }, r3 ? "entries" : "values", !r3, true), d(t3);
          } };
        }, 7710: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(7854), i = r2(1702), a = r2(4705), s = r2(8052), c = r2(2423), u = r2(408), l = r2(5787), p = r2(614), d = r2(8554), h = r2(111), f = r2(7293), m = r2(7072), g = r2(8003), E = r2(9587);
          e2.exports = function(e3, t3, r3) {
            var v = -1 !== e3.indexOf("Map"), y = -1 !== e3.indexOf("Weak"), T = v ? "set" : "add", _ = o[e3], R = _ && _.prototype, I = _, O = {}, S = function(e4) {
              var t4 = i(R[e4]);
              s(R, e4, "add" == e4 ? function(e5) {
                return t4(this, 0 === e5 ? 0 : e5), this;
              } : "delete" == e4 ? function(e5) {
                return !(y && !h(e5)) && t4(this, 0 === e5 ? 0 : e5);
              } : "get" == e4 ? function(e5) {
                return y && !h(e5) ? void 0 : t4(this, 0 === e5 ? 0 : e5);
              } : "has" == e4 ? function(e5) {
                return !(y && !h(e5)) && t4(this, 0 === e5 ? 0 : e5);
              } : function(e5, r4) {
                return t4(this, 0 === e5 ? 0 : e5, r4), this;
              });
            };
            if (a(e3, !p(_) || !(y || R.forEach && !f(function() {
              new _().entries().next();
            }))))
              I = r3.getConstructor(t3, e3, v, T), c.enable();
            else if (a(e3, true)) {
              var A = new I(), C = A[T](y ? {} : -0, 1) != A, N = f(function() {
                A.has(1);
              }), b = m(function(e4) {
                new _(e4);
              }), M = !y && f(function() {
                for (var e4 = new _(), t4 = 5; t4--; )
                  e4[T](t4, t4);
                return !e4.has(-0);
              });
              b || ((I = t3(function(e4, t4) {
                l(e4, R);
                var r4 = E(new _(), e4, I);
                return d(t4) || u(t4, r4[T], { that: r4, AS_ENTRIES: v }), r4;
              })).prototype = R, R.constructor = I), (N || M) && (S("delete"), S("has"), v && S("get")), (M || C) && S(T), y && R.clear && delete R.clear;
            }
            return O[e3] = I, n2({ global: true, constructor: true, forced: I != _ }, O), g(I, e3), y || r3.setStrong(I, e3, v), I;
          };
        }, 9920: function(e2, t2, r2) {
          var n2 = r2(2597), o = r2(3887), i = r2(1236), a = r2(3070);
          e2.exports = function(e3, t3, r3) {
            for (var s = o(t3), c = a.f, u = i.f, l = 0; l < s.length; l++) {
              var p = s[l];
              n2(e3, p) || r3 && n2(r3, p) || c(e3, p, u(t3, p));
            }
          };
        }, 4964: function(e2, t2, r2) {
          var n2 = r2(5112)("match");
          e2.exports = function(e3) {
            var t3 = /./;
            try {
              "/./"[e3](t3);
            } catch (r3) {
              try {
                return t3[n2] = false, "/./"[e3](t3);
              } catch (e4) {
              }
            }
            return false;
          };
        }, 8544: function(e2, t2, r2) {
          var n2 = r2(7293);
          e2.exports = !n2(function() {
            function e3() {
            }
            return e3.prototype.constructor = null, Object.getPrototypeOf(new e3()) !== e3.prototype;
          });
        }, 6178: function(e2) {
          e2.exports = function(e3, t2) {
            return { value: e3, done: t2 };
          };
        }, 8880: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(3070), i = r2(9114);
          e2.exports = n2 ? function(e3, t3, r3) {
            return o.f(e3, t3, i(1, r3));
          } : function(e3, t3, r3) {
            return e3[t3] = r3, e3;
          };
        }, 9114: function(e2) {
          e2.exports = function(e3, t2) {
            return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t2 };
          };
        }, 6135: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(4948), o = r2(3070), i = r2(9114);
          e2.exports = function(e3, t3, r3) {
            var a = n2(t3);
            a in e3 ? o.f(e3, a, i(0, r3)) : e3[a] = r3;
          };
        }, 7045: function(e2, t2, r2) {
          var n2 = r2(6339), o = r2(3070);
          e2.exports = function(e3, t3, r3) {
            return r3.get && n2(r3.get, t3, { getter: true }), r3.set && n2(r3.set, t3, { setter: true }), o.f(e3, t3, r3);
          };
        }, 8052: function(e2, t2, r2) {
          var n2 = r2(614), o = r2(3070), i = r2(6339), a = r2(3072);
          e2.exports = function(e3, t3, r3, s) {
            s || (s = {});
            var c = s.enumerable, u = void 0 !== s.name ? s.name : t3;
            if (n2(r3) && i(r3, u, s), s.global)
              c ? e3[t3] = r3 : a(t3, r3);
            else {
              try {
                s.unsafe ? e3[t3] && (c = true) : delete e3[t3];
              } catch (e4) {
              }
              c ? e3[t3] = r3 : o.f(e3, t3, { value: r3, enumerable: false, configurable: !s.nonConfigurable, writable: !s.nonWritable });
            }
            return e3;
          };
        }, 9190: function(e2, t2, r2) {
          var n2 = r2(8052);
          e2.exports = function(e3, t3, r3) {
            for (var o in t3)
              n2(e3, o, t3[o], r3);
            return e3;
          };
        }, 3072: function(e2, t2, r2) {
          var n2 = r2(7854), o = Object.defineProperty;
          e2.exports = function(e3, t3) {
            try {
              o(n2, e3, { value: t3, configurable: true, writable: true });
            } catch (r3) {
              n2[e3] = t3;
            }
            return t3;
          };
        }, 5117: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(6330), o = TypeError;
          e2.exports = function(e3, t3) {
            if (!delete e3[t3])
              throw o("Cannot delete property " + n2(t3) + " of " + n2(e3));
          };
        }, 9781: function(e2, t2, r2) {
          var n2 = r2(7293);
          e2.exports = !n2(function() {
            return 7 != Object.defineProperty({}, 1, { get: function() {
              return 7;
            } })[1];
          });
        }, 4154: function(e2) {
          var t2 = "object" == typeof document && document.all, r2 = void 0 === t2 && void 0 !== t2;
          e2.exports = { all: t2, IS_HTMLDDA: r2 };
        }, 317: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(111), i = n2.document, a = o(i) && o(i.createElement);
          e2.exports = function(e3) {
            return a ? i.createElement(e3) : {};
          };
        }, 7207: function(e2) {
          var t2 = TypeError;
          e2.exports = function(e3) {
            if (e3 > 9007199254740991)
              throw t2("Maximum allowed index exceeded");
            return e3;
          };
        }, 8324: function(e2) {
          e2.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
        }, 8509: function(e2, t2, r2) {
          var n2 = r2(317)("span").classList, o = n2 && n2.constructor && n2.constructor.prototype;
          e2.exports = o === Object.prototype ? void 0 : o;
        }, 8886: function(e2, t2, r2) {
          var n2 = r2(8113).match(/firefox\/(\d+)/i);
          e2.exports = !!n2 && +n2[1];
        }, 7871: function(e2, t2, r2) {
          var n2 = r2(3823), o = r2(5268);
          e2.exports = !n2 && !o && "object" == typeof window && "object" == typeof document;
        }, 9363: function(e2) {
          e2.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version;
        }, 3823: function(e2) {
          e2.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version;
        }, 256: function(e2, t2, r2) {
          var n2 = r2(8113);
          e2.exports = /MSIE|Trident/.test(n2);
        }, 1528: function(e2, t2, r2) {
          var n2 = r2(8113);
          e2.exports = /ipad|iphone|ipod/i.test(n2) && "undefined" != typeof Pebble;
        }, 6833: function(e2, t2, r2) {
          var n2 = r2(8113);
          e2.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n2);
        }, 5268: function(e2, t2, r2) {
          var n2 = r2(4326);
          e2.exports = "undefined" != typeof process && "process" == n2(process);
        }, 1036: function(e2, t2, r2) {
          var n2 = r2(8113);
          e2.exports = /web0s(?!.*chrome)/i.test(n2);
        }, 8113: function(e2) {
          e2.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
        }, 7392: function(e2, t2, r2) {
          var n2, o, i = r2(7854), a = r2(8113), s = i.process, c = i.Deno, u = s && s.versions || c && c.version, l = u && u.v8;
          l && (o = (n2 = l.split("."))[0] > 0 && n2[0] < 4 ? 1 : +(n2[0] + n2[1])), !o && a && (!(n2 = a.match(/Edge\/(\d+)/)) || n2[1] >= 74) && (n2 = a.match(/Chrome\/(\d+)/)) && (o = +n2[1]), e2.exports = o;
        }, 8008: function(e2, t2, r2) {
          var n2 = r2(8113).match(/AppleWebKit\/(\d+)\./);
          e2.exports = !!n2 && +n2[1];
        }, 748: function(e2) {
          e2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        }, 2109: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(1236).f, i = r2(8880), a = r2(8052), s = r2(3072), c = r2(9920), u = r2(4705);
          e2.exports = function(e3, t3) {
            var r3, l, p, d, h, f = e3.target, m = e3.global, g = e3.stat;
            if (r3 = m ? n2 : g ? n2[f] || s(f, {}) : (n2[f] || {}).prototype)
              for (l in t3) {
                if (d = t3[l], p = e3.dontCallGetSet ? (h = o(r3, l)) && h.value : r3[l], !u(m ? l : f + (g ? "." : "#") + l, e3.forced) && void 0 !== p) {
                  if (typeof d == typeof p)
                    continue;
                  c(d, p);
                }
                (e3.sham || p && p.sham) && i(d, "sham", true), a(r3, l, d, e3);
              }
          };
        }, 7293: function(e2) {
          e2.exports = function(e3) {
            try {
              return !!e3();
            } catch (e4) {
              return true;
            }
          };
        }, 7007: function(e2, t2, r2) {
          "use strict";
          r2(4916);
          var n2 = r2(1470), o = r2(8052), i = r2(2261), a = r2(7293), s = r2(5112), c = r2(8880), u = s("species"), l = RegExp.prototype;
          e2.exports = function(e3, t3, r3, p) {
            var d = s(e3), h = !a(function() {
              var t4 = {};
              return t4[d] = function() {
                return 7;
              }, 7 != ""[e3](t4);
            }), f = h && !a(function() {
              var t4 = false, r4 = /a/;
              return "split" === e3 && ((r4 = {}).constructor = {}, r4.constructor[u] = function() {
                return r4;
              }, r4.flags = "", r4[d] = /./[d]), r4.exec = function() {
                return t4 = true, null;
              }, r4[d](""), !t4;
            });
            if (!h || !f || r3) {
              var m = n2(/./[d]), g = t3(d, ""[e3], function(e4, t4, r4, o2, a2) {
                var s2 = n2(e4), c2 = t4.exec;
                return c2 === i || c2 === l.exec ? h && !a2 ? { done: true, value: m(t4, r4, o2) } : { done: true, value: s2(r4, t4, o2) } : { done: false };
              });
              o(String.prototype, e3, g[0]), o(l, d, g[1]);
            }
            p && c(l[d], "sham", true);
          };
        }, 6677: function(e2, t2, r2) {
          var n2 = r2(7293);
          e2.exports = !n2(function() {
            return Object.isExtensible(Object.preventExtensions({}));
          });
        }, 2104: function(e2, t2, r2) {
          var n2 = r2(4374), o = Function.prototype, i = o.apply, a = o.call;
          e2.exports = "object" == typeof Reflect && Reflect.apply || (n2 ? a.bind(i) : function() {
            return a.apply(i, arguments);
          });
        }, 9974: function(e2, t2, r2) {
          var n2 = r2(1470), o = r2(9662), i = r2(4374), a = n2(n2.bind);
          e2.exports = function(e3, t3) {
            return o(e3), void 0 === t3 ? e3 : i ? a(e3, t3) : function() {
              return e3.apply(t3, arguments);
            };
          };
        }, 4374: function(e2, t2, r2) {
          var n2 = r2(7293);
          e2.exports = !n2(function() {
            var e3 = (function() {
            }).bind();
            return "function" != typeof e3 || e3.hasOwnProperty("prototype");
          });
        }, 7065: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(1702), o = r2(9662), i = r2(111), a = r2(2597), s = r2(206), c = r2(4374), u = Function, l = n2([].concat), p = n2([].join), d = {};
          e2.exports = c ? u.bind : function(e3) {
            var t3 = o(this), r3 = t3.prototype, n3 = s(arguments, 1), c2 = function() {
              var r4 = l(n3, s(arguments));
              return this instanceof c2 ? function(e4, t4, r5) {
                if (!a(d, t4)) {
                  for (var n4 = [], o2 = 0; o2 < t4; o2++)
                    n4[o2] = "a[" + o2 + "]";
                  d[t4] = u("C,a", "return new C(" + p(n4, ",") + ")");
                }
                return d[t4](e4, r5);
              }(t3, r4.length, r4) : t3.apply(e3, r4);
            };
            return i(r3) && (c2.prototype = r3), c2;
          };
        }, 6916: function(e2, t2, r2) {
          var n2 = r2(4374), o = Function.prototype.call;
          e2.exports = n2 ? o.bind(o) : function() {
            return o.apply(o, arguments);
          };
        }, 6530: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(2597), i = Function.prototype, a = n2 && Object.getOwnPropertyDescriptor, s = o(i, "name"), c = s && "something" === (function() {
          }).name, u = s && (!n2 || n2 && a(i, "name").configurable);
          e2.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
        }, 5668: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(9662);
          e2.exports = function(e3, t3, r3) {
            try {
              return n2(o(Object.getOwnPropertyDescriptor(e3, t3)[r3]));
            } catch (e4) {
            }
          };
        }, 1470: function(e2, t2, r2) {
          var n2 = r2(4326), o = r2(1702);
          e2.exports = function(e3) {
            if ("Function" === n2(e3))
              return o(e3);
          };
        }, 1702: function(e2, t2, r2) {
          var n2 = r2(4374), o = Function.prototype, i = o.call, a = n2 && o.bind.bind(i, i);
          e2.exports = n2 ? a : function(e3) {
            return function() {
              return i.apply(e3, arguments);
            };
          };
        }, 5005: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(614);
          e2.exports = function(e3, t3) {
            return arguments.length < 2 ? (r3 = n2[e3], o(r3) ? r3 : void 0) : n2[e3] && n2[e3][t3];
            var r3;
          };
        }, 1246: function(e2, t2, r2) {
          var n2 = r2(648), o = r2(8173), i = r2(8554), a = r2(7497), s = r2(5112)("iterator");
          e2.exports = function(e3) {
            if (!i(e3))
              return o(e3, s) || o(e3, "@@iterator") || a[n2(e3)];
          };
        }, 4121: function(e2, t2, r2) {
          var n2 = r2(6916), o = r2(9662), i = r2(9670), a = r2(6330), s = r2(1246), c = TypeError;
          e2.exports = function(e3, t3) {
            var r3 = arguments.length < 2 ? s(e3) : t3;
            if (o(r3))
              return i(n2(r3, e3));
            throw c(a(e3) + " is not iterable");
          };
        }, 8044: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(3157), i = r2(614), a = r2(4326), s = r2(1340), c = n2([].push);
          e2.exports = function(e3) {
            if (i(e3))
              return e3;
            if (o(e3)) {
              for (var t3 = e3.length, r3 = [], n3 = 0; n3 < t3; n3++) {
                var u = e3[n3];
                "string" == typeof u ? c(r3, u) : "number" != typeof u && "Number" != a(u) && "String" != a(u) || c(r3, s(u));
              }
              var l = r3.length, p = true;
              return function(e4, t4) {
                if (p)
                  return p = false, t4;
                if (o(this))
                  return t4;
                for (var n4 = 0; n4 < l; n4++)
                  if (r3[n4] === e4)
                    return t4;
              };
            }
          };
        }, 8173: function(e2, t2, r2) {
          var n2 = r2(9662), o = r2(8554);
          e2.exports = function(e3, t3) {
            var r3 = e3[t3];
            return o(r3) ? void 0 : n2(r3);
          };
        }, 7854: function(e2, t2, r2) {
          var n2 = function(e3) {
            return e3 && e3.Math == Math && e3;
          };
          e2.exports = n2("object" == typeof globalThis && globalThis) || n2("object" == typeof window && window) || n2("object" == typeof self && self) || n2("object" == typeof r2.g && r2.g) || /* @__PURE__ */ function() {
            return this;
          }() || this || Function("return this")();
        }, 2597: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(7908), i = n2({}.hasOwnProperty);
          e2.exports = Object.hasOwn || function(e3, t3) {
            return i(o(e3), t3);
          };
        }, 3501: function(e2) {
          e2.exports = {};
        }, 842: function(e2) {
          e2.exports = function(e3, t2) {
            try {
              1 == arguments.length ? console.error(e3) : console.error(e3, t2);
            } catch (e4) {
            }
          };
        }, 490: function(e2, t2, r2) {
          var n2 = r2(5005);
          e2.exports = n2("document", "documentElement");
        }, 4664: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(7293), i = r2(317);
          e2.exports = !n2 && !o(function() {
            return 7 != Object.defineProperty(i("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, 1179: function(e2) {
          var t2 = Array, r2 = Math.abs, n2 = Math.pow, o = Math.floor, i = Math.log, a = Math.LN2;
          e2.exports = { pack: function(e3, s, c) {
            var u, l, p, d = t2(c), h = 8 * c - s - 1, f = (1 << h) - 1, m = f >> 1, g = 23 === s ? n2(2, -24) - n2(2, -77) : 0, E = e3 < 0 || 0 === e3 && 1 / e3 < 0 ? 1 : 0, v = 0;
            for ((e3 = r2(e3)) != e3 || e3 === 1 / 0 ? (l = e3 != e3 ? 1 : 0, u = f) : (u = o(i(e3) / a), e3 * (p = n2(2, -u)) < 1 && (u--, p *= 2), (e3 += u + m >= 1 ? g / p : g * n2(2, 1 - m)) * p >= 2 && (u++, p /= 2), u + m >= f ? (l = 0, u = f) : u + m >= 1 ? (l = (e3 * p - 1) * n2(2, s), u += m) : (l = e3 * n2(2, m - 1) * n2(2, s), u = 0)); s >= 8; )
              d[v++] = 255 & l, l /= 256, s -= 8;
            for (u = u << s | l, h += s; h > 0; )
              d[v++] = 255 & u, u /= 256, h -= 8;
            return d[--v] |= 128 * E, d;
          }, unpack: function(e3, t3) {
            var r3, o2 = e3.length, i2 = 8 * o2 - t3 - 1, a2 = (1 << i2) - 1, s = a2 >> 1, c = i2 - 7, u = o2 - 1, l = e3[u--], p = 127 & l;
            for (l >>= 7; c > 0; )
              p = 256 * p + e3[u--], c -= 8;
            for (r3 = p & (1 << -c) - 1, p >>= -c, c += t3; c > 0; )
              r3 = 256 * r3 + e3[u--], c -= 8;
            if (0 === p)
              p = 1 - s;
            else {
              if (p === a2)
                return r3 ? NaN : l ? -1 / 0 : 1 / 0;
              r3 += n2(2, t3), p -= s;
            }
            return (l ? -1 : 1) * r3 * n2(2, p - t3);
          } };
        }, 8361: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(7293), i = r2(4326), a = Object, s = n2("".split);
          e2.exports = o(function() {
            return !a("z").propertyIsEnumerable(0);
          }) ? function(e3) {
            return "String" == i(e3) ? s(e3, "") : a(e3);
          } : a;
        }, 9587: function(e2, t2, r2) {
          var n2 = r2(614), o = r2(111), i = r2(7674);
          e2.exports = function(e3, t3, r3) {
            var a, s;
            return i && n2(a = t3.constructor) && a !== r3 && o(s = a.prototype) && s !== r3.prototype && i(e3, s), e3;
          };
        }, 2788: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(614), i = r2(5465), a = n2(Function.toString);
          o(i.inspectSource) || (i.inspectSource = function(e3) {
            return a(e3);
          }), e2.exports = i.inspectSource;
        }, 2423: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(1702), i = r2(3501), a = r2(111), s = r2(2597), c = r2(3070).f, u = r2(8006), l = r2(1156), p = r2(2050), d = r2(9711), h = r2(6677), f = false, m = d("meta"), g = 0, E = function(e3) {
            c(e3, m, { value: { objectID: "O" + g++, weakData: {} } });
          }, v = e2.exports = { enable: function() {
            v.enable = function() {
            }, f = true;
            var e3 = u.f, t3 = o([].splice), r3 = {};
            r3[m] = 1, e3(r3).length && (u.f = function(r4) {
              for (var n3 = e3(r4), o2 = 0, i2 = n3.length; o2 < i2; o2++)
                if (n3[o2] === m) {
                  t3(n3, o2, 1);
                  break;
                }
              return n3;
            }, n2({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: l.f }));
          }, fastKey: function(e3, t3) {
            if (!a(e3))
              return "symbol" == typeof e3 ? e3 : ("string" == typeof e3 ? "S" : "P") + e3;
            if (!s(e3, m)) {
              if (!p(e3))
                return "F";
              if (!t3)
                return "E";
              E(e3);
            }
            return e3[m].objectID;
          }, getWeakData: function(e3, t3) {
            if (!s(e3, m)) {
              if (!p(e3))
                return true;
              if (!t3)
                return false;
              E(e3);
            }
            return e3[m].weakData;
          }, onFreeze: function(e3) {
            return h && f && p(e3) && !s(e3, m) && E(e3), e3;
          } };
          i[m] = true;
        }, 9909: function(e2, t2, r2) {
          var n2, o, i, a = r2(4811), s = r2(7854), c = r2(111), u = r2(8880), l = r2(2597), p = r2(5465), d = r2(6200), h = r2(3501), f = "Object already initialized", m = s.TypeError, g = s.WeakMap;
          if (a || p.state) {
            var E = p.state || (p.state = new g());
            E.get = E.get, E.has = E.has, E.set = E.set, n2 = function(e3, t3) {
              if (E.has(e3))
                throw m(f);
              return t3.facade = e3, E.set(e3, t3), t3;
            }, o = function(e3) {
              return E.get(e3) || {};
            }, i = function(e3) {
              return E.has(e3);
            };
          } else {
            var v = d("state");
            h[v] = true, n2 = function(e3, t3) {
              if (l(e3, v))
                throw m(f);
              return t3.facade = e3, u(e3, v, t3), t3;
            }, o = function(e3) {
              return l(e3, v) ? e3[v] : {};
            }, i = function(e3) {
              return l(e3, v);
            };
          }
          e2.exports = { set: n2, get: o, has: i, enforce: function(e3) {
            return i(e3) ? o(e3) : n2(e3, {});
          }, getterFor: function(e3) {
            return function(t3) {
              var r3;
              if (!c(t3) || (r3 = o(t3)).type !== e3)
                throw m("Incompatible receiver, " + e3 + " required");
              return r3;
            };
          } };
        }, 7659: function(e2, t2, r2) {
          var n2 = r2(5112), o = r2(7497), i = n2("iterator"), a = Array.prototype;
          e2.exports = function(e3) {
            return void 0 !== e3 && (o.Array === e3 || a[i] === e3);
          };
        }, 3157: function(e2, t2, r2) {
          var n2 = r2(4326);
          e2.exports = Array.isArray || function(e3) {
            return "Array" == n2(e3);
          };
        }, 4067: function(e2, t2, r2) {
          var n2 = r2(648);
          e2.exports = function(e3) {
            var t3 = n2(e3);
            return "BigInt64Array" == t3 || "BigUint64Array" == t3;
          };
        }, 614: function(e2, t2, r2) {
          var n2 = r2(4154), o = n2.all;
          e2.exports = n2.IS_HTMLDDA ? function(e3) {
            return "function" == typeof e3 || e3 === o;
          } : function(e3) {
            return "function" == typeof e3;
          };
        }, 4411: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(7293), i = r2(614), a = r2(648), s = r2(5005), c = r2(2788), u = function() {
          }, l = [], p = s("Reflect", "construct"), d = /^\s*(?:class|function)\b/, h = n2(d.exec), f = !d.exec(u), m = function(e3) {
            if (!i(e3))
              return false;
            try {
              return p(u, l, e3), true;
            } catch (e4) {
              return false;
            }
          }, g = function(e3) {
            if (!i(e3))
              return false;
            switch (a(e3)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return false;
            }
            try {
              return f || !!h(d, c(e3));
            } catch (e4) {
              return true;
            }
          };
          g.sham = true, e2.exports = !p || o(function() {
            var e3;
            return m(m.call) || !m(Object) || !m(function() {
              e3 = true;
            }) || e3;
          }) ? g : m;
        }, 4705: function(e2, t2, r2) {
          var n2 = r2(7293), o = r2(614), i = /#|\.prototype\./, a = function(e3, t3) {
            var r3 = c[s(e3)];
            return r3 == l || r3 != u && (o(t3) ? n2(t3) : !!t3);
          }, s = a.normalize = function(e3) {
            return String(e3).replace(i, ".").toLowerCase();
          }, c = a.data = {}, u = a.NATIVE = "N", l = a.POLYFILL = "P";
          e2.exports = a;
        }, 5988: function(e2, t2, r2) {
          var n2 = r2(111), o = Math.floor;
          e2.exports = Number.isInteger || function(e3) {
            return !n2(e3) && isFinite(e3) && o(e3) === e3;
          };
        }, 8554: function(e2) {
          e2.exports = function(e3) {
            return null == e3;
          };
        }, 111: function(e2, t2, r2) {
          var n2 = r2(614), o = r2(4154), i = o.all;
          e2.exports = o.IS_HTMLDDA ? function(e3) {
            return "object" == typeof e3 ? null !== e3 : n2(e3) || e3 === i;
          } : function(e3) {
            return "object" == typeof e3 ? null !== e3 : n2(e3);
          };
        }, 1913: function(e2) {
          e2.exports = false;
        }, 7850: function(e2, t2, r2) {
          var n2 = r2(111), o = r2(4326), i = r2(5112)("match");
          e2.exports = function(e3) {
            var t3;
            return n2(e3) && (void 0 !== (t3 = e3[i]) ? !!t3 : "RegExp" == o(e3));
          };
        }, 2190: function(e2, t2, r2) {
          var n2 = r2(5005), o = r2(614), i = r2(7976), a = r2(3307), s = Object;
          e2.exports = a ? function(e3) {
            return "symbol" == typeof e3;
          } : function(e3) {
            var t3 = n2("Symbol");
            return o(t3) && i(t3.prototype, s(e3));
          };
        }, 408: function(e2, t2, r2) {
          var n2 = r2(9974), o = r2(6916), i = r2(9670), a = r2(6330), s = r2(7659), c = r2(6244), u = r2(7976), l = r2(4121), p = r2(1246), d = r2(9212), h = TypeError, f = function(e3, t3) {
            this.stopped = e3, this.result = t3;
          }, m = f.prototype;
          e2.exports = function(e3, t3, r3) {
            var g, E, v, y, T, _, R, I = r3 && r3.that, O = !(!r3 || !r3.AS_ENTRIES), S = !(!r3 || !r3.IS_RECORD), A = !(!r3 || !r3.IS_ITERATOR), C = !(!r3 || !r3.INTERRUPTED), N = n2(t3, I), b = function(e4) {
              return g && d(g, "normal", e4), new f(true, e4);
            }, M = function(e4) {
              return O ? (i(e4), C ? N(e4[0], e4[1], b) : N(e4[0], e4[1])) : C ? N(e4, b) : N(e4);
            };
            if (S)
              g = e3.iterator;
            else if (A)
              g = e3;
            else {
              if (!(E = p(e3)))
                throw h(a(e3) + " is not iterable");
              if (s(E)) {
                for (v = 0, y = c(e3); y > v; v++)
                  if ((T = M(e3[v])) && u(m, T))
                    return T;
                return new f(false);
              }
              g = l(e3, E);
            }
            for (_ = S ? e3.next : g.next; !(R = o(_, g)).done; ) {
              try {
                T = M(R.value);
              } catch (e4) {
                d(g, "throw", e4);
              }
              if ("object" == typeof T && T && u(m, T))
                return T;
            }
            return new f(false);
          };
        }, 9212: function(e2, t2, r2) {
          var n2 = r2(6916), o = r2(9670), i = r2(8173);
          e2.exports = function(e3, t3, r3) {
            var a, s;
            o(e3);
            try {
              if (!(a = i(e3, "return"))) {
                if ("throw" === t3)
                  throw r3;
                return r3;
              }
              a = n2(a, e3);
            } catch (e4) {
              s = true, a = e4;
            }
            if ("throw" === t3)
              throw r3;
            if (s)
              throw a;
            return o(a), r3;
          };
        }, 3061: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(3383).IteratorPrototype, o = r2(30), i = r2(9114), a = r2(8003), s = r2(7497), c = function() {
            return this;
          };
          e2.exports = function(e3, t3, r3, u) {
            var l = t3 + " Iterator";
            return e3.prototype = o(n2, { next: i(+!u, r3) }), a(e3, l, false, true), s[l] = c, e3;
          };
        }, 1656: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(6916), i = r2(1913), a = r2(6530), s = r2(614), c = r2(3061), u = r2(9518), l = r2(7674), p = r2(8003), d = r2(8880), h = r2(8052), f = r2(5112), m = r2(7497), g = r2(3383), E = a.PROPER, v = a.CONFIGURABLE, y = g.IteratorPrototype, T = g.BUGGY_SAFARI_ITERATORS, _ = f("iterator"), R = "keys", I = "values", O = "entries", S = function() {
            return this;
          };
          e2.exports = function(e3, t3, r3, a2, f2, g2, A) {
            c(r3, t3, a2);
            var C, N, b, M = function(e4) {
              if (e4 === f2 && x)
                return x;
              if (!T && e4 in U)
                return U[e4];
              switch (e4) {
                case R:
                case I:
                case O:
                  return function() {
                    return new r3(this, e4);
                  };
              }
              return function() {
                return new r3(this);
              };
            }, k = t3 + " Iterator", w = false, U = e3.prototype, P = U[_] || U["@@iterator"] || f2 && U[f2], x = !T && P || M(f2), L = "Array" == t3 && U.entries || P;
            if (L && (C = u(L.call(new e3()))) !== Object.prototype && C.next && (i || u(C) === y || (l ? l(C, y) : s(C[_]) || h(C, _, S)), p(C, k, true, true), i && (m[k] = S)), E && f2 == I && P && P.name !== I && (!i && v ? d(U, "name", I) : (w = true, x = function() {
              return o(P, this);
            })), f2)
              if (N = { values: M(I), keys: g2 ? x : M(R), entries: M(O) }, A)
                for (b in N)
                  (T || w || !(b in U)) && h(U, b, N[b]);
              else
                n2({ target: t3, proto: true, forced: T || w }, N);
            return i && !A || U[_] === x || h(U, _, x, { name: f2 }), m[t3] = x, N;
          };
        }, 3383: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a = r2(7293), s = r2(614), c = r2(111), u = r2(30), l = r2(9518), p = r2(8052), d = r2(5112), h = r2(1913), f = d("iterator"), m = false;
          [].keys && ("next" in (i = [].keys()) ? (o = l(l(i))) !== Object.prototype && (n2 = o) : m = true), !c(n2) || a(function() {
            var e3 = {};
            return n2[f].call(e3) !== e3;
          }) ? n2 = {} : h && (n2 = u(n2)), s(n2[f]) || p(n2, f, function() {
            return this;
          }), e2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: m };
        }, 7497: function(e2) {
          e2.exports = {};
        }, 6244: function(e2, t2, r2) {
          var n2 = r2(7466);
          e2.exports = function(e3) {
            return n2(e3.length);
          };
        }, 6339: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(7293), i = r2(614), a = r2(2597), s = r2(9781), c = r2(6530).CONFIGURABLE, u = r2(2788), l = r2(9909), p = l.enforce, d = l.get, h = String, f = Object.defineProperty, m = n2("".slice), g = n2("".replace), E = n2([].join), v = s && !o(function() {
            return 8 !== f(function() {
            }, "length", { value: 8 }).length;
          }), y = String(String).split("String"), T = e2.exports = function(e3, t3, r3) {
            "Symbol(" === m(h(t3), 0, 7) && (t3 = "[" + g(h(t3), /^Symbol\(([^)]*)\)/, "$1") + "]"), r3 && r3.getter && (t3 = "get " + t3), r3 && r3.setter && (t3 = "set " + t3), (!a(e3, "name") || c && e3.name !== t3) && (s ? f(e3, "name", { value: t3, configurable: true }) : e3.name = t3), v && r3 && a(r3, "arity") && e3.length !== r3.arity && f(e3, "length", { value: r3.arity });
            try {
              r3 && a(r3, "constructor") && r3.constructor ? s && f(e3, "prototype", { writable: false }) : e3.prototype && (e3.prototype = void 0);
            } catch (e4) {
            }
            var n3 = p(e3);
            return a(n3, "source") || (n3.source = E(y, "string" == typeof t3 ? t3 : "")), e3;
          };
          Function.prototype.toString = T(function() {
            return i(this) && d(this).source || u(this);
          }, "toString");
        }, 4758: function(e2) {
          var t2 = Math.ceil, r2 = Math.floor;
          e2.exports = Math.trunc || function(e3) {
            var n2 = +e3;
            return (n2 > 0 ? r2 : t2)(n2);
          };
        }, 5948: function(e2, t2, r2) {
          var n2, o, i, a, s, c = r2(7854), u = r2(9974), l = r2(1236).f, p = r2(261).set, d = r2(8572), h = r2(6833), f = r2(1528), m = r2(1036), g = r2(5268), E = c.MutationObserver || c.WebKitMutationObserver, v = c.document, y = c.process, T = c.Promise, _ = l(c, "queueMicrotask"), R = _ && _.value;
          if (!R) {
            var I = new d(), O = function() {
              var e3, t3;
              for (g && (e3 = y.domain) && e3.exit(); t3 = I.get(); )
                try {
                  t3();
                } catch (e4) {
                  throw I.head && n2(), e4;
                }
              e3 && e3.enter();
            };
            h || g || m || !E || !v ? !f && T && T.resolve ? ((a = T.resolve(void 0)).constructor = T, s = u(a.then, a), n2 = function() {
              s(O);
            }) : g ? n2 = function() {
              y.nextTick(O);
            } : (p = u(p, c), n2 = function() {
              p(O);
            }) : (o = true, i = v.createTextNode(""), new E(O).observe(i, { characterData: true }), n2 = function() {
              i.data = o = !o;
            }), R = function(e3) {
              I.head || n2(), I.add(e3);
            };
          }
          e2.exports = R;
        }, 8523: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(9662), o = TypeError, i = function(e3) {
            var t3, r3;
            this.promise = new e3(function(e4, n3) {
              if (void 0 !== t3 || void 0 !== r3)
                throw o("Bad Promise constructor");
              t3 = e4, r3 = n3;
            }), this.resolve = n2(t3), this.reject = n2(r3);
          };
          e2.exports.f = function(e3) {
            return new i(e3);
          };
        }, 3929: function(e2, t2, r2) {
          var n2 = r2(7850), o = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              throw o("The method doesn't accept regular expressions");
            return e3;
          };
        }, 1574: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(9781), o = r2(1702), i = r2(6916), a = r2(7293), s = r2(1956), c = r2(5181), u = r2(5296), l = r2(7908), p = r2(8361), d = Object.assign, h = Object.defineProperty, f = o([].concat);
          e2.exports = !d || a(function() {
            if (n2 && 1 !== d({ b: 1 }, d(h({}, "a", { enumerable: true, get: function() {
              h(this, "b", { value: 3, enumerable: false });
            } }), { b: 2 })).b)
              return true;
            var e3 = {}, t3 = {}, r3 = Symbol(), o2 = "abcdefghijklmnopqrst";
            return e3[r3] = 7, o2.split("").forEach(function(e4) {
              t3[e4] = e4;
            }), 7 != d({}, e3)[r3] || s(d({}, t3)).join("") != o2;
          }) ? function(e3, t3) {
            for (var r3 = l(e3), o2 = arguments.length, a2 = 1, d2 = c.f, h2 = u.f; o2 > a2; )
              for (var m, g = p(arguments[a2++]), E = d2 ? f(s(g), d2(g)) : s(g), v = E.length, y = 0; v > y; )
                m = E[y++], n2 && !i(h2, g, m) || (r3[m] = g[m]);
            return r3;
          } : d;
        }, 30: function(e2, t2, r2) {
          var n2, o = r2(9670), i = r2(6048), a = r2(748), s = r2(3501), c = r2(490), u = r2(317), l = r2(6200), p = "prototype", d = "script", h = l("IE_PROTO"), f = function() {
          }, m = function(e3) {
            return "<" + d + ">" + e3 + "</" + d + ">";
          }, g = function(e3) {
            e3.write(m("")), e3.close();
            var t3 = e3.parentWindow.Object;
            return e3 = null, t3;
          }, E = function() {
            try {
              n2 = new ActiveXObject("htmlfile");
            } catch (e4) {
            }
            var e3, t3, r3;
            E = "undefined" != typeof document ? document.domain && n2 ? g(n2) : (t3 = u("iframe"), r3 = "java" + d + ":", t3.style.display = "none", c.appendChild(t3), t3.src = String(r3), (e3 = t3.contentWindow.document).open(), e3.write(m("document.F=Object")), e3.close(), e3.F) : g(n2);
            for (var o2 = a.length; o2--; )
              delete E[p][a[o2]];
            return E();
          };
          s[h] = true, e2.exports = Object.create || function(e3, t3) {
            var r3;
            return null !== e3 ? (f[p] = o(e3), r3 = new f(), f[p] = null, r3[h] = e3) : r3 = E(), void 0 === t3 ? r3 : i.f(r3, t3);
          };
        }, 6048: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(3353), i = r2(3070), a = r2(9670), s = r2(5656), c = r2(1956);
          t2.f = n2 && !o ? Object.defineProperties : function(e3, t3) {
            a(e3);
            for (var r3, n3 = s(t3), o2 = c(t3), u = o2.length, l = 0; u > l; )
              i.f(e3, r3 = o2[l++], n3[r3]);
            return e3;
          };
        }, 3070: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(4664), i = r2(3353), a = r2(9670), s = r2(4948), c = TypeError, u = Object.defineProperty, l = Object.getOwnPropertyDescriptor, p = "enumerable", d = "configurable", h = "writable";
          t2.f = n2 ? i ? function(e3, t3, r3) {
            if (a(e3), t3 = s(t3), a(r3), "function" == typeof e3 && "prototype" === t3 && "value" in r3 && h in r3 && !r3[h]) {
              var n3 = l(e3, t3);
              n3 && n3[h] && (e3[t3] = r3.value, r3 = { configurable: d in r3 ? r3[d] : n3[d], enumerable: p in r3 ? r3[p] : n3[p], writable: false });
            }
            return u(e3, t3, r3);
          } : u : function(e3, t3, r3) {
            if (a(e3), t3 = s(t3), a(r3), o)
              try {
                return u(e3, t3, r3);
              } catch (e4) {
              }
            if ("get" in r3 || "set" in r3)
              throw c("Accessors not supported");
            return "value" in r3 && (e3[t3] = r3.value), e3;
          };
        }, 1236: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(6916), i = r2(5296), a = r2(9114), s = r2(5656), c = r2(4948), u = r2(2597), l = r2(4664), p = Object.getOwnPropertyDescriptor;
          t2.f = n2 ? p : function(e3, t3) {
            if (e3 = s(e3), t3 = c(t3), l)
              try {
                return p(e3, t3);
              } catch (e4) {
              }
            if (u(e3, t3))
              return a(!o(i.f, e3, t3), e3[t3]);
          };
        }, 1156: function(e2, t2, r2) {
          var n2 = r2(4326), o = r2(5656), i = r2(8006).f, a = r2(1589), s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          e2.exports.f = function(e3) {
            return s && "Window" == n2(e3) ? function(e4) {
              try {
                return i(e4);
              } catch (e5) {
                return a(s);
              }
            }(e3) : i(o(e3));
          };
        }, 8006: function(e2, t2, r2) {
          var n2 = r2(6324), o = r2(748).concat("length", "prototype");
          t2.f = Object.getOwnPropertyNames || function(e3) {
            return n2(e3, o);
          };
        }, 5181: function(e2, t2) {
          t2.f = Object.getOwnPropertySymbols;
        }, 9518: function(e2, t2, r2) {
          var n2 = r2(2597), o = r2(614), i = r2(7908), a = r2(6200), s = r2(8544), c = a("IE_PROTO"), u = Object, l = u.prototype;
          e2.exports = s ? u.getPrototypeOf : function(e3) {
            var t3 = i(e3);
            if (n2(t3, c))
              return t3[c];
            var r3 = t3.constructor;
            return o(r3) && t3 instanceof r3 ? r3.prototype : t3 instanceof u ? l : null;
          };
        }, 2050: function(e2, t2, r2) {
          var n2 = r2(7293), o = r2(111), i = r2(4326), a = r2(7556), s = Object.isExtensible, c = n2(function() {
            s(1);
          });
          e2.exports = c || a ? function(e3) {
            return !!o(e3) && (!a || "ArrayBuffer" != i(e3)) && (!s || s(e3));
          } : s;
        }, 7976: function(e2, t2, r2) {
          var n2 = r2(1702);
          e2.exports = n2({}.isPrototypeOf);
        }, 6324: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(2597), i = r2(5656), a = r2(1318).indexOf, s = r2(3501), c = n2([].push);
          e2.exports = function(e3, t3) {
            var r3, n3 = i(e3), u = 0, l = [];
            for (r3 in n3)
              !o(s, r3) && o(n3, r3) && c(l, r3);
            for (; t3.length > u; )
              o(n3, r3 = t3[u++]) && (~a(l, r3) || c(l, r3));
            return l;
          };
        }, 1956: function(e2, t2, r2) {
          var n2 = r2(6324), o = r2(748);
          e2.exports = Object.keys || function(e3) {
            return n2(e3, o);
          };
        }, 5296: function(e2, t2) {
          "use strict";
          var r2 = {}.propertyIsEnumerable, n2 = Object.getOwnPropertyDescriptor, o = n2 && !r2.call({ 1: 2 }, 1);
          t2.f = o ? function(e3) {
            var t3 = n2(this, e3);
            return !!t3 && t3.enumerable;
          } : r2;
        }, 7674: function(e2, t2, r2) {
          var n2 = r2(5668), o = r2(9670), i = r2(6077);
          e2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e3, t3 = false, r3 = {};
            try {
              (e3 = n2(Object.prototype, "__proto__", "set"))(r3, []), t3 = r3 instanceof Array;
            } catch (e4) {
            }
            return function(r4, n3) {
              return o(r4), i(n3), t3 ? e3(r4, n3) : r4.__proto__ = n3, r4;
            };
          }() : void 0);
        }, 4699: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(1702), i = r2(1956), a = r2(5656), s = o(r2(5296).f), c = o([].push), u = function(e3) {
            return function(t3) {
              for (var r3, o2 = a(t3), u2 = i(o2), l = u2.length, p = 0, d = []; l > p; )
                r3 = u2[p++], n2 && !s(o2, r3) || c(d, e3 ? [r3, o2[r3]] : o2[r3]);
              return d;
            };
          };
          e2.exports = { entries: u(true), values: u(false) };
        }, 288: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(1694), o = r2(648);
          e2.exports = n2 ? {}.toString : function() {
            return "[object " + o(this) + "]";
          };
        }, 2140: function(e2, t2, r2) {
          var n2 = r2(6916), o = r2(614), i = r2(111), a = TypeError;
          e2.exports = function(e3, t3) {
            var r3, s;
            if ("string" === t3 && o(r3 = e3.toString) && !i(s = n2(r3, e3)))
              return s;
            if (o(r3 = e3.valueOf) && !i(s = n2(r3, e3)))
              return s;
            if ("string" !== t3 && o(r3 = e3.toString) && !i(s = n2(r3, e3)))
              return s;
            throw a("Can't convert object to primitive value");
          };
        }, 3887: function(e2, t2, r2) {
          var n2 = r2(5005), o = r2(1702), i = r2(8006), a = r2(5181), s = r2(9670), c = o([].concat);
          e2.exports = n2("Reflect", "ownKeys") || function(e3) {
            var t3 = i.f(s(e3)), r3 = a.f;
            return r3 ? c(t3, r3(e3)) : t3;
          };
        }, 857: function(e2, t2, r2) {
          var n2 = r2(7854);
          e2.exports = n2;
        }, 2534: function(e2) {
          e2.exports = function(e3) {
            try {
              return { error: false, value: e3() };
            } catch (e4) {
              return { error: true, value: e4 };
            }
          };
        }, 3702: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(2492), i = r2(614), a = r2(4705), s = r2(2788), c = r2(5112), u = r2(7871), l = r2(3823), p = r2(1913), d = r2(7392), h = o && o.prototype, f = c("species"), m = false, g = i(n2.PromiseRejectionEvent), E = a("Promise", function() {
            var e3 = s(o), t3 = e3 !== String(o);
            if (!t3 && 66 === d)
              return true;
            if (p && (!h.catch || !h.finally))
              return true;
            if (!d || d < 51 || !/native code/.test(e3)) {
              var r3 = new o(function(e4) {
                e4(1);
              }), n3 = function(e4) {
                e4(function() {
                }, function() {
                });
              };
              if ((r3.constructor = {})[f] = n3, !(m = r3.then(function() {
              }) instanceof n3))
                return true;
            }
            return !t3 && (u || l) && !g;
          });
          e2.exports = { CONSTRUCTOR: E, REJECTION_EVENT: g, SUBCLASSING: m };
        }, 2492: function(e2, t2, r2) {
          var n2 = r2(7854);
          e2.exports = n2.Promise;
        }, 9478: function(e2, t2, r2) {
          var n2 = r2(9670), o = r2(111), i = r2(8523);
          e2.exports = function(e3, t3) {
            if (n2(e3), o(t3) && t3.constructor === e3)
              return t3;
            var r3 = i.f(e3);
            return (0, r3.resolve)(t3), r3.promise;
          };
        }, 612: function(e2, t2, r2) {
          var n2 = r2(2492), o = r2(7072), i = r2(3702).CONSTRUCTOR;
          e2.exports = i || !o(function(e3) {
            n2.all(e3).then(void 0, function() {
            });
          });
        }, 8572: function(e2) {
          var t2 = function() {
            this.head = null, this.tail = null;
          };
          t2.prototype = { add: function(e3) {
            var t3 = { item: e3, next: null }, r2 = this.tail;
            r2 ? r2.next = t3 : this.head = t3, this.tail = t3;
          }, get: function() {
            var e3 = this.head;
            if (e3)
              return null === (this.head = e3.next) && (this.tail = null), e3.item;
          } }, e2.exports = t2;
        }, 7651: function(e2, t2, r2) {
          var n2 = r2(6916), o = r2(9670), i = r2(614), a = r2(4326), s = r2(2261), c = TypeError;
          e2.exports = function(e3, t3) {
            var r3 = e3.exec;
            if (i(r3)) {
              var u = n2(r3, e3, t3);
              return null !== u && o(u), u;
            }
            if ("RegExp" === a(e3))
              return n2(s, e3, t3);
            throw c("RegExp#exec called on incompatible receiver");
          };
        }, 2261: function(e2, t2, r2) {
          "use strict";
          var n2, o, i = r2(6916), a = r2(1702), s = r2(1340), c = r2(7066), u = r2(2999), l = r2(2309), p = r2(30), d = r2(9909).get, h = r2(9441), f = r2(7168), m = l("native-string-replace", String.prototype.replace), g = RegExp.prototype.exec, E = g, v = a("".charAt), y = a("".indexOf), T = a("".replace), _ = a("".slice), R = (o = /b*/g, i(g, n2 = /a/, "a"), i(g, o, "a"), 0 !== n2.lastIndex || 0 !== o.lastIndex), I = u.BROKEN_CARET, O = void 0 !== /()??/.exec("")[1];
          (R || O || I || h || f) && (E = function(e3) {
            var t3, r3, n3, o2, a2, u2, l2, h2 = this, f2 = d(h2), S = s(e3), A = f2.raw;
            if (A)
              return A.lastIndex = h2.lastIndex, t3 = i(E, A, S), h2.lastIndex = A.lastIndex, t3;
            var C = f2.groups, N = I && h2.sticky, b = i(c, h2), M = h2.source, k = 0, w = S;
            if (N && (b = T(b, "y", ""), -1 === y(b, "g") && (b += "g"), w = _(S, h2.lastIndex), h2.lastIndex > 0 && (!h2.multiline || h2.multiline && "\n" !== v(S, h2.lastIndex - 1)) && (M = "(?: " + M + ")", w = " " + w, k++), r3 = new RegExp("^(?:" + M + ")", b)), O && (r3 = new RegExp("^" + M + "$(?!\\s)", b)), R && (n3 = h2.lastIndex), o2 = i(g, N ? r3 : h2, w), N ? o2 ? (o2.input = _(o2.input, k), o2[0] = _(o2[0], k), o2.index = h2.lastIndex, h2.lastIndex += o2[0].length) : h2.lastIndex = 0 : R && o2 && (h2.lastIndex = h2.global ? o2.index + o2[0].length : n3), O && o2 && o2.length > 1 && i(m, o2[0], r3, function() {
              for (a2 = 1; a2 < arguments.length - 2; a2++)
                void 0 === arguments[a2] && (o2[a2] = void 0);
            }), o2 && C)
              for (o2.groups = u2 = p(null), a2 = 0; a2 < C.length; a2++)
                u2[(l2 = C[a2])[0]] = o2[l2[1]];
            return o2;
          }), e2.exports = E;
        }, 7066: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(9670);
          e2.exports = function() {
            var e3 = n2(this), t3 = "";
            return e3.hasIndices && (t3 += "d"), e3.global && (t3 += "g"), e3.ignoreCase && (t3 += "i"), e3.multiline && (t3 += "m"), e3.dotAll && (t3 += "s"), e3.unicode && (t3 += "u"), e3.unicodeSets && (t3 += "v"), e3.sticky && (t3 += "y"), t3;
          };
        }, 4706: function(e2, t2, r2) {
          var n2 = r2(6916), o = r2(2597), i = r2(7976), a = r2(7066), s = RegExp.prototype;
          e2.exports = function(e3) {
            var t3 = e3.flags;
            return void 0 !== t3 || "flags" in s || o(e3, "flags") || !i(s, e3) ? t3 : n2(a, e3);
          };
        }, 2999: function(e2, t2, r2) {
          var n2 = r2(7293), o = r2(7854).RegExp, i = n2(function() {
            var e3 = o("a", "y");
            return e3.lastIndex = 2, null != e3.exec("abcd");
          }), a = i || n2(function() {
            return !o("a", "y").sticky;
          }), s = i || n2(function() {
            var e3 = o("^r", "gy");
            return e3.lastIndex = 2, null != e3.exec("str");
          });
          e2.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: i };
        }, 9441: function(e2, t2, r2) {
          var n2 = r2(7293), o = r2(7854).RegExp;
          e2.exports = n2(function() {
            var e3 = o(".", "s");
            return !(e3.dotAll && e3.exec("\n") && "s" === e3.flags);
          });
        }, 7168: function(e2, t2, r2) {
          var n2 = r2(7293), o = r2(7854).RegExp;
          e2.exports = n2(function() {
            var e3 = o("(?<a>b)", "g");
            return "b" !== e3.exec("b").groups.a || "bc" !== "b".replace(e3, "$<a>c");
          });
        }, 4488: function(e2, t2, r2) {
          var n2 = r2(8554), o = TypeError;
          e2.exports = function(e3) {
            if (n2(e3))
              throw o("Can't call method on " + e3);
            return e3;
          };
        }, 7152: function(e2, t2, r2) {
          "use strict";
          var n2, o = r2(7854), i = r2(2104), a = r2(614), s = r2(9363), c = r2(8113), u = r2(206), l = r2(8053), p = o.Function, d = /MSIE .\./.test(c) || s && ((n2 = o.Bun.version.split(".")).length < 3 || 0 == n2[0] && (n2[1] < 3 || 3 == n2[1] && 0 == n2[2]));
          e2.exports = function(e3, t3) {
            var r3 = t3 ? 2 : 1;
            return d ? function(n3, o2) {
              var s2 = l(arguments.length, 1) > r3, c2 = a(n3) ? n3 : p(n3), d2 = s2 ? u(arguments, r3) : [], h = s2 ? function() {
                i(c2, this, d2);
              } : c2;
              return t3 ? e3(h, o2) : e3(h);
            } : e3;
          };
        }, 6340: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5005), o = r2(7045), i = r2(5112), a = r2(9781), s = i("species");
          e2.exports = function(e3) {
            var t3 = n2(e3);
            a && t3 && !t3[s] && o(t3, s, { configurable: true, get: function() {
              return this;
            } });
          };
        }, 8003: function(e2, t2, r2) {
          var n2 = r2(3070).f, o = r2(2597), i = r2(5112)("toStringTag");
          e2.exports = function(e3, t3, r3) {
            e3 && !r3 && (e3 = e3.prototype), e3 && !o(e3, i) && n2(e3, i, { configurable: true, value: t3 });
          };
        }, 6200: function(e2, t2, r2) {
          var n2 = r2(2309), o = r2(9711), i = n2("keys");
          e2.exports = function(e3) {
            return i[e3] || (i[e3] = o(e3));
          };
        }, 5465: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(3072), i = "__core-js_shared__", a = n2[i] || o(i, {});
          e2.exports = a;
        }, 2309: function(e2, t2, r2) {
          var n2 = r2(1913), o = r2(5465);
          (e2.exports = function(e3, t3) {
            return o[e3] || (o[e3] = void 0 !== t3 ? t3 : {});
          })("versions", []).push({ version: "3.30.2", mode: n2 ? "pure" : "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE", source: "https://github.com/zloirock/core-js" });
        }, 6707: function(e2, t2, r2) {
          var n2 = r2(9670), o = r2(9483), i = r2(8554), a = r2(5112)("species");
          e2.exports = function(e3, t3) {
            var r3, s = n2(e3).constructor;
            return void 0 === s || i(r3 = n2(s)[a]) ? t3 : o(r3);
          };
        }, 8710: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(9303), i = r2(1340), a = r2(4488), s = n2("".charAt), c = n2("".charCodeAt), u = n2("".slice), l = function(e3) {
            return function(t3, r3) {
              var n3, l2, p = i(a(t3)), d = o(r3), h = p.length;
              return d < 0 || d >= h ? e3 ? "" : void 0 : (n3 = c(p, d)) < 55296 || n3 > 56319 || d + 1 === h || (l2 = c(p, d + 1)) < 56320 || l2 > 57343 ? e3 ? s(p, d) : n3 : e3 ? u(p, d, d + 2) : l2 - 56320 + (n3 - 55296 << 10) + 65536;
            };
          };
          e2.exports = { codeAt: l(false), charAt: l(true) };
        }, 3197: function(e2, t2, r2) {
          var n2 = r2(1702), o = 2147483647, i = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g, s = "Overflow: input needs wider integers to process", c = RangeError, u = n2(a.exec), l = Math.floor, p = String.fromCharCode, d = n2("".charCodeAt), h = n2([].join), f = n2([].push), m = n2("".replace), g = n2("".split), E = n2("".toLowerCase), v = function(e3) {
            return e3 + 22 + 75 * (e3 < 26);
          }, y = function(e3, t3, r3) {
            var n3 = 0;
            for (e3 = r3 ? l(e3 / 700) : e3 >> 1, e3 += l(e3 / t3); e3 > 455; )
              e3 = l(e3 / 35), n3 += 36;
            return l(n3 + 36 * e3 / (e3 + 38));
          }, T = function(e3) {
            var t3 = [];
            e3 = function(e4) {
              for (var t4 = [], r4 = 0, n4 = e4.length; r4 < n4; ) {
                var o2 = d(e4, r4++);
                if (o2 >= 55296 && o2 <= 56319 && r4 < n4) {
                  var i3 = d(e4, r4++);
                  56320 == (64512 & i3) ? f(t4, ((1023 & o2) << 10) + (1023 & i3) + 65536) : (f(t4, o2), r4--);
                } else
                  f(t4, o2);
              }
              return t4;
            }(e3);
            var r3, n3, i2 = e3.length, a2 = 128, u2 = 0, m2 = 72;
            for (r3 = 0; r3 < e3.length; r3++)
              (n3 = e3[r3]) < 128 && f(t3, p(n3));
            var g2 = t3.length, E2 = g2;
            for (g2 && f(t3, "-"); E2 < i2; ) {
              var T2 = o;
              for (r3 = 0; r3 < e3.length; r3++)
                (n3 = e3[r3]) >= a2 && n3 < T2 && (T2 = n3);
              var _ = E2 + 1;
              if (T2 - a2 > l((o - u2) / _))
                throw c(s);
              for (u2 += (T2 - a2) * _, a2 = T2, r3 = 0; r3 < e3.length; r3++) {
                if ((n3 = e3[r3]) < a2 && ++u2 > o)
                  throw c(s);
                if (n3 == a2) {
                  for (var R = u2, I = 36; ; ) {
                    var O = I <= m2 ? 1 : I >= m2 + 26 ? 26 : I - m2;
                    if (R < O)
                      break;
                    var S = R - O, A = 36 - O;
                    f(t3, p(v(O + S % A))), R = l(S / A), I += 36;
                  }
                  f(t3, p(v(R))), m2 = y(u2, _, E2 == g2), u2 = 0, E2++;
                }
              }
              u2++, a2++;
            }
            return h(t3, "");
          };
          e2.exports = function(e3) {
            var t3, r3, n3 = [], o2 = g(m(E(e3), a, "."), ".");
            for (t3 = 0; t3 < o2.length; t3++)
              r3 = o2[t3], f(n3, u(i, r3) ? "xn--" + T(r3) : r3);
            return h(n3, ".");
          };
        }, 3111: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(4488), i = r2(1340), a = r2(1361), s = n2("".replace), c = RegExp("^[" + a + "]+"), u = RegExp("(^|[^" + a + "])[" + a + "]+$"), l = function(e3) {
            return function(t3) {
              var r3 = i(o(t3));
              return 1 & e3 && (r3 = s(r3, c, "")), 2 & e3 && (r3 = s(r3, u, "$1")), r3;
            };
          };
          e2.exports = { start: l(1), end: l(2), trim: l(3) };
        }, 6293: function(e2, t2, r2) {
          var n2 = r2(7392), o = r2(7293), i = r2(7854).String;
          e2.exports = !!Object.getOwnPropertySymbols && !o(function() {
            var e3 = Symbol();
            return !i(e3) || !(Object(e3) instanceof Symbol) || !Symbol.sham && n2 && n2 < 41;
          });
        }, 6532: function(e2, t2, r2) {
          var n2 = r2(6916), o = r2(5005), i = r2(5112), a = r2(8052);
          e2.exports = function() {
            var e3 = o("Symbol"), t3 = e3 && e3.prototype, r3 = t3 && t3.valueOf, s = i("toPrimitive");
            t3 && !t3[s] && a(t3, s, function(e4) {
              return n2(r3, this);
            }, { arity: 1 });
          };
        }, 2015: function(e2, t2, r2) {
          var n2 = r2(6293);
          e2.exports = n2 && !!Symbol.for && !!Symbol.keyFor;
        }, 261: function(e2, t2, r2) {
          var n2, o, i, a, s = r2(7854), c = r2(2104), u = r2(9974), l = r2(614), p = r2(2597), d = r2(7293), h = r2(490), f = r2(206), m = r2(317), g = r2(8053), E = r2(6833), v = r2(5268), y = s.setImmediate, T = s.clearImmediate, _ = s.process, R = s.Dispatch, I = s.Function, O = s.MessageChannel, S = s.String, A = 0, C = {}, N = "onreadystatechange";
          d(function() {
            n2 = s.location;
          });
          var b = function(e3) {
            if (p(C, e3)) {
              var t3 = C[e3];
              delete C[e3], t3();
            }
          }, M = function(e3) {
            return function() {
              b(e3);
            };
          }, k = function(e3) {
            b(e3.data);
          }, w = function(e3) {
            s.postMessage(S(e3), n2.protocol + "//" + n2.host);
          };
          y && T || (y = function(e3) {
            g(arguments.length, 1);
            var t3 = l(e3) ? e3 : I(e3), r3 = f(arguments, 1);
            return C[++A] = function() {
              c(t3, void 0, r3);
            }, o(A), A;
          }, T = function(e3) {
            delete C[e3];
          }, v ? o = function(e3) {
            _.nextTick(M(e3));
          } : R && R.now ? o = function(e3) {
            R.now(M(e3));
          } : O && !E ? (a = (i = new O()).port2, i.port1.onmessage = k, o = u(a.postMessage, a)) : s.addEventListener && l(s.postMessage) && !s.importScripts && n2 && "file:" !== n2.protocol && !d(w) ? (o = w, s.addEventListener("message", k, false)) : o = N in m("script") ? function(e3) {
            h.appendChild(m("script"))[N] = function() {
              h.removeChild(this), b(e3);
            };
          } : function(e3) {
            setTimeout(M(e3), 0);
          }), e2.exports = { set: y, clear: T };
        }, 863: function(e2, t2, r2) {
          var n2 = r2(1702);
          e2.exports = n2(1 .valueOf);
        }, 1400: function(e2, t2, r2) {
          var n2 = r2(9303), o = Math.max, i = Math.min;
          e2.exports = function(e3, t3) {
            var r3 = n2(e3);
            return r3 < 0 ? o(r3 + t3, 0) : i(r3, t3);
          };
        }, 4599: function(e2, t2, r2) {
          var n2 = r2(7593), o = TypeError;
          e2.exports = function(e3) {
            var t3 = n2(e3, "number");
            if ("number" == typeof t3)
              throw o("Can't convert number to bigint");
            return BigInt(t3);
          };
        }, 7067: function(e2, t2, r2) {
          var n2 = r2(9303), o = r2(7466), i = RangeError;
          e2.exports = function(e3) {
            if (void 0 === e3)
              return 0;
            var t3 = n2(e3), r3 = o(t3);
            if (t3 !== r3)
              throw i("Wrong length or index");
            return r3;
          };
        }, 5656: function(e2, t2, r2) {
          var n2 = r2(8361), o = r2(4488);
          e2.exports = function(e3) {
            return n2(o(e3));
          };
        }, 9303: function(e2, t2, r2) {
          var n2 = r2(4758);
          e2.exports = function(e3) {
            var t3 = +e3;
            return t3 != t3 || 0 === t3 ? 0 : n2(t3);
          };
        }, 7466: function(e2, t2, r2) {
          var n2 = r2(9303), o = Math.min;
          e2.exports = function(e3) {
            return e3 > 0 ? o(n2(e3), 9007199254740991) : 0;
          };
        }, 7908: function(e2, t2, r2) {
          var n2 = r2(4488), o = Object;
          e2.exports = function(e3) {
            return o(n2(e3));
          };
        }, 4590: function(e2, t2, r2) {
          var n2 = r2(3002), o = RangeError;
          e2.exports = function(e3, t3) {
            var r3 = n2(e3);
            if (r3 % t3)
              throw o("Wrong offset");
            return r3;
          };
        }, 3002: function(e2, t2, r2) {
          var n2 = r2(9303), o = RangeError;
          e2.exports = function(e3) {
            var t3 = n2(e3);
            if (t3 < 0)
              throw o("The argument can't be less than 0");
            return t3;
          };
        }, 7593: function(e2, t2, r2) {
          var n2 = r2(6916), o = r2(111), i = r2(2190), a = r2(8173), s = r2(2140), c = r2(5112), u = TypeError, l = c("toPrimitive");
          e2.exports = function(e3, t3) {
            if (!o(e3) || i(e3))
              return e3;
            var r3, c2 = a(e3, l);
            if (c2) {
              if (void 0 === t3 && (t3 = "default"), r3 = n2(c2, e3, t3), !o(r3) || i(r3))
                return r3;
              throw u("Can't convert object to primitive value");
            }
            return void 0 === t3 && (t3 = "number"), s(e3, t3);
          };
        }, 4948: function(e2, t2, r2) {
          var n2 = r2(7593), o = r2(2190);
          e2.exports = function(e3) {
            var t3 = n2(e3, "string");
            return o(t3) ? t3 : t3 + "";
          };
        }, 1694: function(e2, t2, r2) {
          var n2 = {};
          n2[r2(5112)("toStringTag")] = "z", e2.exports = "[object z]" === String(n2);
        }, 1340: function(e2, t2, r2) {
          var n2 = r2(648), o = String;
          e2.exports = function(e3) {
            if ("Symbol" === n2(e3))
              throw TypeError("Cannot convert a Symbol value to a string");
            return o(e3);
          };
        }, 6330: function(e2) {
          var t2 = String;
          e2.exports = function(e3) {
            try {
              return t2(e3);
            } catch (e4) {
              return "Object";
            }
          };
        }, 9843: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(7854), i = r2(6916), a = r2(9781), s = r2(3832), c = r2(260), u = r2(3331), l = r2(5787), p = r2(9114), d = r2(8880), h = r2(5988), f = r2(7466), m = r2(7067), g = r2(4590), E = r2(4948), v = r2(2597), y = r2(648), T = r2(111), _ = r2(2190), R = r2(30), I = r2(7976), O = r2(7674), S = r2(8006).f, A = r2(7321), C = r2(2092).forEach, N = r2(6340), b = r2(7045), M = r2(3070), k = r2(1236), w = r2(9909), U = r2(9587), P = w.get, x = w.set, L = w.enforce, D = M.f, j = k.f, G = Math.round, B = o.RangeError, H = u.ArrayBuffer, F = H.prototype, W = u.DataView, Z = c.NATIVE_ARRAY_BUFFER_VIEWS, K = c.TYPED_ARRAY_TAG, q = c.TypedArray, z = c.TypedArrayPrototype, V = c.aTypedArrayConstructor, X = c.isTypedArray, J = "BYTES_PER_ELEMENT", Y = "Wrong length", Q = function(e3, t3) {
            V(e3);
            for (var r3 = 0, n3 = t3.length, o2 = new e3(n3); n3 > r3; )
              o2[r3] = t3[r3++];
            return o2;
          }, $2 = function(e3, t3) {
            b(e3, t3, { configurable: true, get: function() {
              return P(this)[t3];
            } });
          }, ee = function(e3) {
            var t3;
            return I(F, e3) || "ArrayBuffer" == (t3 = y(e3)) || "SharedArrayBuffer" == t3;
          }, te = function(e3, t3) {
            return X(e3) && !_(t3) && t3 in e3 && h(+t3) && t3 >= 0;
          }, re = function(e3, t3) {
            return t3 = E(t3), te(e3, t3) ? p(2, e3[t3]) : j(e3, t3);
          }, ne = function(e3, t3, r3) {
            return t3 = E(t3), !(te(e3, t3) && T(r3) && v(r3, "value")) || v(r3, "get") || v(r3, "set") || r3.configurable || v(r3, "writable") && !r3.writable || v(r3, "enumerable") && !r3.enumerable ? D(e3, t3, r3) : (e3[t3] = r3.value, e3);
          };
          a ? (Z || (k.f = re, M.f = ne, $2(z, "buffer"), $2(z, "byteOffset"), $2(z, "byteLength"), $2(z, "length")), n2({ target: "Object", stat: true, forced: !Z }, { getOwnPropertyDescriptor: re, defineProperty: ne }), e2.exports = function(e3, t3, r3) {
            var a2 = e3.match(/\d+/)[0] / 8, c2 = e3 + (r3 ? "Clamped" : "") + "Array", u2 = "get" + e3, p2 = "set" + e3, h2 = o[c2], E2 = h2, v2 = E2 && E2.prototype, y2 = {}, _2 = function(e4, t4) {
              D(e4, t4, { get: function() {
                return function(e5, t5) {
                  var r4 = P(e5);
                  return r4.view[u2](t5 * a2 + r4.byteOffset, true);
                }(this, t4);
              }, set: function(e5) {
                return function(e6, t5, n3) {
                  var o2 = P(e6);
                  r3 && (n3 = (n3 = G(n3)) < 0 ? 0 : n3 > 255 ? 255 : 255 & n3), o2.view[p2](t5 * a2 + o2.byteOffset, n3, true);
                }(this, t4, e5);
              }, enumerable: true });
            };
            Z ? s && (E2 = t3(function(e4, t4, r4, n3) {
              return l(e4, v2), U(T(t4) ? ee(t4) ? void 0 !== n3 ? new h2(t4, g(r4, a2), n3) : void 0 !== r4 ? new h2(t4, g(r4, a2)) : new h2(t4) : X(t4) ? Q(E2, t4) : i(A, E2, t4) : new h2(m(t4)), e4, E2);
            }), O && O(E2, q), C(S(h2), function(e4) {
              e4 in E2 || d(E2, e4, h2[e4]);
            }), E2.prototype = v2) : (E2 = t3(function(e4, t4, r4, n3) {
              l(e4, v2);
              var o2, s2, c3, u3 = 0, p3 = 0;
              if (T(t4)) {
                if (!ee(t4))
                  return X(t4) ? Q(E2, t4) : i(A, E2, t4);
                o2 = t4, p3 = g(r4, a2);
                var d2 = t4.byteLength;
                if (void 0 === n3) {
                  if (d2 % a2)
                    throw B(Y);
                  if ((s2 = d2 - p3) < 0)
                    throw B(Y);
                } else if ((s2 = f(n3) * a2) + p3 > d2)
                  throw B(Y);
                c3 = s2 / a2;
              } else
                c3 = m(t4), o2 = new H(s2 = c3 * a2);
              for (x(e4, { buffer: o2, byteOffset: p3, byteLength: s2, length: c3, view: new W(o2) }); u3 < c3; )
                _2(e4, u3++);
            }), O && O(E2, q), v2 = E2.prototype = R(z)), v2.constructor !== E2 && d(v2, "constructor", E2), L(v2).TypedArrayConstructor = E2, K && d(v2, K, c2);
            var I2 = E2 != h2;
            y2[c2] = E2, n2({ global: true, constructor: true, forced: I2, sham: !Z }, y2), J in E2 || d(E2, J, a2), J in v2 || d(v2, J, a2), N(c2);
          }) : e2.exports = function() {
          };
        }, 3832: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(7293), i = r2(7072), a = r2(260).NATIVE_ARRAY_BUFFER_VIEWS, s = n2.ArrayBuffer, c = n2.Int8Array;
          e2.exports = !a || !o(function() {
            c(1);
          }) || !o(function() {
            new c(-1);
          }) || !i(function(e3) {
            new c(), new c(null), new c(1.5), new c(e3);
          }, true) || o(function() {
            return 1 !== new c(new s(2), 1, void 0).length;
          });
        }, 3074: function(e2, t2, r2) {
          var n2 = r2(7745), o = r2(6304);
          e2.exports = function(e3, t3) {
            return n2(o(e3), t3);
          };
        }, 7321: function(e2, t2, r2) {
          var n2 = r2(9974), o = r2(6916), i = r2(9483), a = r2(7908), s = r2(6244), c = r2(4121), u = r2(1246), l = r2(7659), p = r2(4067), d = r2(260).aTypedArrayConstructor, h = r2(4599);
          e2.exports = function(e3) {
            var t3, r3, f, m, g, E, v, y, T = i(this), _ = a(e3), R = arguments.length, I = R > 1 ? arguments[1] : void 0, O = void 0 !== I, S = u(_);
            if (S && !l(S))
              for (y = (v = c(_, S)).next, _ = []; !(E = o(y, v)).done; )
                _.push(E.value);
            for (O && R > 2 && (I = n2(I, arguments[2])), r3 = s(_), f = new (d(T))(r3), m = p(f), t3 = 0; r3 > t3; t3++)
              g = O ? I(_[t3], t3) : _[t3], f[t3] = m ? h(g) : +g;
            return f;
          };
        }, 6304: function(e2, t2, r2) {
          var n2 = r2(260), o = r2(6707), i = n2.aTypedArrayConstructor, a = n2.getTypedArrayConstructor;
          e2.exports = function(e3) {
            return i(o(e3, a(e3)));
          };
        }, 9711: function(e2, t2, r2) {
          var n2 = r2(1702), o = 0, i = Math.random(), a = n2(1 .toString);
          e2.exports = function(e3) {
            return "Symbol(" + (void 0 === e3 ? "" : e3) + ")_" + a(++o + i, 36);
          };
        }, 5143: function(e2, t2, r2) {
          var n2 = r2(7293), o = r2(5112), i = r2(9781), a = r2(1913), s = o("iterator");
          e2.exports = !n2(function() {
            var e3 = new URL("b?a=1&b=2&c=3", "http://a"), t3 = e3.searchParams, r3 = "";
            return e3.pathname = "c%20d", t3.forEach(function(e4, n3) {
              t3.delete("b"), r3 += n3 + e4;
            }), a && !e3.toJSON || !t3.size && (a || !i) || !t3.sort || "http://a/c%20d?a=1&c=3" !== e3.href || "3" !== t3.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t3[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r3 || "x" !== new URL("http://x", void 0).host;
          });
        }, 3307: function(e2, t2, r2) {
          var n2 = r2(6293);
          e2.exports = n2 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        }, 3353: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(7293);
          e2.exports = n2 && o(function() {
            return 42 != Object.defineProperty(function() {
            }, "prototype", { value: 42, writable: false }).prototype;
          });
        }, 8053: function(e2) {
          var t2 = TypeError;
          e2.exports = function(e3, r2) {
            if (e3 < r2)
              throw t2("Not enough arguments");
            return e3;
          };
        }, 4811: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(614), i = n2.WeakMap;
          e2.exports = o(i) && /native code/.test(String(i));
        }, 6800: function(e2, t2, r2) {
          var n2 = r2(857), o = r2(2597), i = r2(6061), a = r2(3070).f;
          e2.exports = function(e3) {
            var t3 = n2.Symbol || (n2.Symbol = {});
            o(t3, e3) || a(t3, e3, { value: i.f(e3) });
          };
        }, 6061: function(e2, t2, r2) {
          var n2 = r2(5112);
          t2.f = n2;
        }, 5112: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(2309), i = r2(2597), a = r2(9711), s = r2(6293), c = r2(3307), u = n2.Symbol, l = o("wks"), p = c ? u.for || u : u && u.withoutSetter || a;
          e2.exports = function(e3) {
            return i(l, e3) || (l[e3] = s && i(u, e3) ? u[e3] : p("Symbol." + e3)), l[e3];
          };
        }, 1361: function(e2) {
          e2.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
        }, 9575: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1470), i = r2(7293), a = r2(3331), s = r2(9670), c = r2(1400), u = r2(7466), l = r2(6707), p = a.ArrayBuffer, d = a.DataView, h = d.prototype, f = o(p.prototype.slice), m = o(h.getUint8), g = o(h.setUint8);
          n2({ target: "ArrayBuffer", proto: true, unsafe: true, forced: i(function() {
            return !new p(2).slice(1, void 0).byteLength;
          }) }, { slice: function(e3, t3) {
            if (f && void 0 === t3)
              return f(s(this), e3);
            for (var r3 = s(this).byteLength, n3 = c(e3, r3), o2 = c(void 0 === t3 ? r3 : t3, r3), i2 = new (l(this, p))(u(o2 - n3)), a2 = new d(this), h2 = new d(i2), E = 0; n3 < o2; )
              g(h2, E++, m(a2, n3++));
            return i2;
          } });
        }, 2222: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(7293), i = r2(3157), a = r2(111), s = r2(7908), c = r2(6244), u = r2(7207), l = r2(6135), p = r2(5417), d = r2(1194), h = r2(5112), f = r2(7392), m = h("isConcatSpreadable"), g = f >= 51 || !o(function() {
            var e3 = [];
            return e3[m] = false, e3.concat()[0] !== e3;
          }), E = function(e3) {
            if (!a(e3))
              return false;
            var t3 = e3[m];
            return void 0 !== t3 ? !!t3 : i(e3);
          };
          n2({ target: "Array", proto: true, arity: 1, forced: !g || !d("concat") }, { concat: function(e3) {
            var t3, r3, n3, o2, i2, a2 = s(this), d2 = p(a2, 0), h2 = 0;
            for (t3 = -1, n3 = arguments.length; t3 < n3; t3++)
              if (E(i2 = -1 === t3 ? a2 : arguments[t3]))
                for (o2 = c(i2), u(h2 + o2), r3 = 0; r3 < o2; r3++, h2++)
                  r3 in i2 && l(d2, h2, i2[r3]);
              else
                u(h2 + 1), l(d2, h2++, i2);
            return d2.length = h2, d2;
          } });
        }, 7327: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(2092).filter;
          n2({ target: "Array", proto: true, forced: !r2(1194)("filter") }, { filter: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 4553: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(2092).findIndex, i = r2(1223), a = "findIndex", s = true;
          a in [] && Array(1)[a](function() {
            s = false;
          }), n2({ target: "Array", proto: true, forced: s }, { findIndex: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), i(a);
        }, 9826: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(2092).find, i = r2(1223), a = "find", s = true;
          a in [] && Array(1)[a](function() {
            s = false;
          }), n2({ target: "Array", proto: true, forced: s }, { find: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), i(a);
        }, 9554: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(8533);
          n2({ target: "Array", proto: true, forced: [].forEach != o }, { forEach: o });
        }, 1038: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(8457);
          n2({ target: "Array", stat: true, forced: !r2(7072)(function(e3) {
            Array.from(e3);
          }) }, { from: o });
        }, 6699: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1318).includes, i = r2(7293), a = r2(1223);
          n2({ target: "Array", proto: true, forced: i(function() {
            return !Array(1).includes();
          }) }, { includes: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), a("includes");
        }, 2772: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1470), i = r2(1318).indexOf, a = r2(9341), s = o([].indexOf), c = !!s && 1 / s([1], 1, -0) < 0;
          n2({ target: "Array", proto: true, forced: c || !a("indexOf") }, { indexOf: function(e3) {
            var t3 = arguments.length > 1 ? arguments[1] : void 0;
            return c ? s(this, e3, t3) || 0 : i(this, e3, t3);
          } });
        }, 9753: function(e2, t2, r2) {
          r2(2109)({ target: "Array", stat: true }, { isArray: r2(3157) });
        }, 6992: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(5656), o = r2(1223), i = r2(7497), a = r2(9909), s = r2(3070).f, c = r2(1656), u = r2(6178), l = r2(1913), p = r2(9781), d = "Array Iterator", h = a.set, f = a.getterFor(d);
          e2.exports = c(Array, "Array", function(e3, t3) {
            h(this, { type: d, target: n2(e3), index: 0, kind: t3 });
          }, function() {
            var e3 = f(this), t3 = e3.target, r3 = e3.kind, n3 = e3.index++;
            return !t3 || n3 >= t3.length ? (e3.target = void 0, u(void 0, true)) : u("keys" == r3 ? n3 : "values" == r3 ? t3[n3] : [n3, t3[n3]], false);
          }, "values");
          var m = i.Arguments = i.Array;
          if (o("keys"), o("values"), o("entries"), !l && p && "values" !== m.name)
            try {
              s(m, "name", { value: "values" });
            } catch (e3) {
            }
        }, 9600: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1702), i = r2(8361), a = r2(5656), s = r2(9341), c = o([].join);
          n2({ target: "Array", proto: true, forced: i != Object || !s("join", ",") }, { join: function(e3) {
            return c(a(this), void 0 === e3 ? "," : e3);
          } });
        }, 4986: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(6583);
          n2({ target: "Array", proto: true, forced: o !== [].lastIndexOf }, { lastIndexOf: o });
        }, 1249: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(2092).map;
          n2({ target: "Array", proto: true, forced: !r2(1194)("map") }, { map: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 5827: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(3671).left, i = r2(9341), a = r2(7392);
          n2({ target: "Array", proto: true, forced: !r2(5268) && a > 79 && a < 83 || !i("reduce") }, { reduce: function(e3) {
            var t3 = arguments.length;
            return o(this, e3, t3, t3 > 1 ? arguments[1] : void 0);
          } });
        }, 5069: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1702), i = r2(3157), a = o([].reverse), s = [1, 2];
          n2({ target: "Array", proto: true, forced: String(s) === String(s.reverse()) }, { reverse: function() {
            return i(this) && (this.length = this.length), a(this);
          } });
        }, 7042: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(3157), i = r2(4411), a = r2(111), s = r2(1400), c = r2(6244), u = r2(5656), l = r2(6135), p = r2(5112), d = r2(1194), h = r2(206), f = d("slice"), m = p("species"), g = Array, E = Math.max;
          n2({ target: "Array", proto: true, forced: !f }, { slice: function(e3, t3) {
            var r3, n3, p2, d2 = u(this), f2 = c(d2), v = s(e3, f2), y = s(void 0 === t3 ? f2 : t3, f2);
            if (o(d2) && (r3 = d2.constructor, (i(r3) && (r3 === g || o(r3.prototype)) || a(r3) && null === (r3 = r3[m])) && (r3 = void 0), r3 === g || void 0 === r3))
              return h(d2, v, y);
            for (n3 = new (void 0 === r3 ? g : r3)(E(y - v, 0)), p2 = 0; v < y; v++, p2++)
              v in d2 && l(n3, p2, d2[v]);
            return n3.length = p2, n3;
          } });
        }, 5212: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(2092).some;
          n2({ target: "Array", proto: true, forced: !r2(9341)("some") }, { some: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 561: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(7908), i = r2(1400), a = r2(9303), s = r2(6244), c = r2(3658), u = r2(7207), l = r2(5417), p = r2(6135), d = r2(5117), h = r2(1194)("splice"), f = Math.max, m = Math.min;
          n2({ target: "Array", proto: true, forced: !h }, { splice: function(e3, t3) {
            var r3, n3, h2, g, E, v, y = o(this), T = s(y), _ = i(e3, T), R = arguments.length;
            for (0 === R ? r3 = n3 = 0 : 1 === R ? (r3 = 0, n3 = T - _) : (r3 = R - 2, n3 = m(f(a(t3), 0), T - _)), u(T + r3 - n3), h2 = l(y, n3), g = 0; g < n3; g++)
              (E = _ + g) in y && p(h2, g, y[E]);
            if (h2.length = n3, r3 < n3) {
              for (g = _; g < T - n3; g++)
                v = g + r3, (E = g + n3) in y ? y[v] = y[E] : d(y, v);
              for (g = T; g > T - n3 + r3; g--)
                d(y, g - 1);
            } else if (r3 > n3)
              for (g = T - n3; g > _; g--)
                v = g + r3 - 1, (E = g + n3 - 1) in y ? y[v] = y[E] : d(y, v);
            for (g = 0; g < r3; g++)
              y[g + _] = arguments[g + 2];
            return c(y, T - n3 + r3), h2;
          } });
        }, 3843: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(1702), i = Date, a = o(i.prototype.getTime);
          n2({ target: "Date", stat: true }, { now: function() {
            return a(new i());
          } });
        }, 3710: function(e2, t2, r2) {
          var n2 = r2(1702), o = r2(8052), i = Date.prototype, a = "Invalid Date", s = "toString", c = n2(i[s]), u = n2(i.getTime);
          String(/* @__PURE__ */ new Date(NaN)) != a && o(i, s, function() {
            var e3 = u(this);
            return e3 == e3 ? c(this) : a;
          });
        }, 4812: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(7065);
          n2({ target: "Function", proto: true, forced: Function.bind !== o }, { bind: o });
        }, 8309: function(e2, t2, r2) {
          var n2 = r2(9781), o = r2(6530).EXISTS, i = r2(1702), a = r2(7045), s = Function.prototype, c = i(s.toString), u = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, l = i(u.exec);
          n2 && !o && a(s, "name", { configurable: true, get: function() {
            try {
              return l(u, c(this))[1];
            } catch (e3) {
              return "";
            }
          } });
        }, 8862: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(5005), i = r2(2104), a = r2(6916), s = r2(1702), c = r2(7293), u = r2(614), l = r2(2190), p = r2(206), d = r2(8044), h = r2(6293), f = String, m = o("JSON", "stringify"), g = s(/./.exec), E = s("".charAt), v = s("".charCodeAt), y = s("".replace), T = s(1 .toString), _ = /[\uD800-\uDFFF]/g, R = /^[\uD800-\uDBFF]$/, I = /^[\uDC00-\uDFFF]$/, O = !h || c(function() {
            var e3 = o("Symbol")();
            return "[null]" != m([e3]) || "{}" != m({ a: e3 }) || "{}" != m(Object(e3));
          }), S = c(function() {
            return '"\\udf06\\ud834"' !== m("\uDF06\uD834") || '"\\udead"' !== m("\uDEAD");
          }), A = function(e3, t3) {
            var r3 = p(arguments), n3 = d(t3);
            if (u(n3) || void 0 !== e3 && !l(e3))
              return r3[1] = function(e4, t4) {
                if (u(n3) && (t4 = a(n3, this, f(e4), t4)), !l(t4))
                  return t4;
              }, i(m, null, r3);
          }, C = function(e3, t3, r3) {
            var n3 = E(r3, t3 - 1), o2 = E(r3, t3 + 1);
            return g(R, e3) && !g(I, o2) || g(I, e3) && !g(R, n3) ? "\\u" + T(v(e3, 0), 16) : e3;
          };
          m && n2({ target: "JSON", stat: true, arity: 3, forced: O || S }, { stringify: function(e3, t3, r3) {
            var n3 = p(arguments), o2 = i(O ? A : m, null, n3);
            return S && "string" == typeof o2 ? y(o2, _, C) : o2;
          } });
        }, 9098: function(e2, t2, r2) {
          "use strict";
          r2(7710)("Map", function(e3) {
            return function() {
              return e3(this, arguments.length ? arguments[0] : void 0);
            };
          }, r2(5631));
        }, 1532: function(e2, t2, r2) {
          r2(9098);
        }, 9653: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1913), i = r2(9781), a = r2(7854), s = r2(857), c = r2(1702), u = r2(4705), l = r2(2597), p = r2(9587), d = r2(7976), h = r2(2190), f = r2(7593), m = r2(7293), g = r2(8006).f, E = r2(1236).f, v = r2(3070).f, y = r2(863), T = r2(3111).trim, _ = "Number", R = a[_], I = s[_], O = R.prototype, S = a.TypeError, A = c("".slice), C = c("".charCodeAt), N = u(_, !R(" 0o1") || !R("0b1") || R("+0x1")), b = function(e3) {
            var t3, r3 = arguments.length < 1 ? 0 : R(function(e4) {
              var t4 = f(e4, "number");
              return "bigint" == typeof t4 ? t4 : function(e5) {
                var t5, r4, n3, o2, i2, a2, s2, c2, u2 = f(e5, "number");
                if (h(u2))
                  throw S("Cannot convert a Symbol value to a number");
                if ("string" == typeof u2 && u2.length > 2) {
                  if (u2 = T(u2), 43 === (t5 = C(u2, 0)) || 45 === t5) {
                    if (88 === (r4 = C(u2, 2)) || 120 === r4)
                      return NaN;
                  } else if (48 === t5) {
                    switch (C(u2, 1)) {
                      case 66:
                      case 98:
                        n3 = 2, o2 = 49;
                        break;
                      case 79:
                      case 111:
                        n3 = 8, o2 = 55;
                        break;
                      default:
                        return +u2;
                    }
                    for (a2 = (i2 = A(u2, 2)).length, s2 = 0; s2 < a2; s2++)
                      if ((c2 = C(i2, s2)) < 48 || c2 > o2)
                        return NaN;
                    return parseInt(i2, n3);
                  }
                }
                return +u2;
              }(t4);
            }(e3));
            return d(O, t3 = this) && m(function() {
              y(t3);
            }) ? p(Object(r3), this, b) : r3;
          };
          b.prototype = O, N && !o && (O.constructor = b), n2({ global: true, constructor: true, wrap: true, forced: N }, { Number: b });
          var M = function(e3, t3) {
            for (var r3, n3 = i ? g(t3) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o2 = 0; n3.length > o2; o2++)
              l(t3, r3 = n3[o2]) && !l(e3, r3) && v(e3, r3, E(t3, r3));
          };
          o && I && M(s[_], I), (N || o) && M(s[_], R);
        }, 3161: function(e2, t2, r2) {
          r2(2109)({ target: "Number", stat: true }, { isInteger: r2(5988) });
        }, 4048: function(e2, t2, r2) {
          r2(2109)({ target: "Number", stat: true }, { isNaN: function(e3) {
            return e3 != e3;
          } });
        }, 9601: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(1574);
          n2({ target: "Object", stat: true, arity: 2, forced: Object.assign !== o }, { assign: o });
        }, 9070: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(9781), i = r2(3070).f;
          n2({ target: "Object", stat: true, forced: Object.defineProperty !== i, sham: !o }, { defineProperty: i });
        }, 9720: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(4699).entries;
          n2({ target: "Object", stat: true }, { entries: function(e3) {
            return o(e3);
          } });
        }, 9660: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(6293), i = r2(7293), a = r2(5181), s = r2(7908);
          n2({ target: "Object", stat: true, forced: !o || i(function() {
            a.f(1);
          }) }, { getOwnPropertySymbols: function(e3) {
            var t3 = a.f;
            return t3 ? t3(s(e3)) : [];
          } });
        }, 7941: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(7908), i = r2(1956);
          n2({ target: "Object", stat: true, forced: r2(7293)(function() {
            i(1);
          }) }, { keys: function(e3) {
            return i(o(e3));
          } });
        }, 1539: function(e2, t2, r2) {
          var n2 = r2(1694), o = r2(8052), i = r2(288);
          n2 || o(Object.prototype, "toString", i, { unsafe: true });
        }, 821: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(6916), i = r2(9662), a = r2(8523), s = r2(2534), c = r2(408);
          n2({ target: "Promise", stat: true, forced: r2(612) }, { all: function(e3) {
            var t3 = this, r3 = a.f(t3), n3 = r3.resolve, u = r3.reject, l = s(function() {
              var r4 = i(t3.resolve), a2 = [], s2 = 0, l2 = 1;
              c(e3, function(e4) {
                var i2 = s2++, c2 = false;
                l2++, o(r4, t3, e4).then(function(e5) {
                  c2 || (c2 = true, a2[i2] = e5, --l2 || n3(a2));
                }, u);
              }), --l2 || n3(a2);
            });
            return l.error && u(l.value), r3.promise;
          } });
        }, 4164: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1913), i = r2(3702).CONSTRUCTOR, a = r2(2492), s = r2(5005), c = r2(614), u = r2(8052), l = a && a.prototype;
          if (n2({ target: "Promise", proto: true, forced: i, real: true }, { catch: function(e3) {
            return this.then(void 0, e3);
          } }), !o && c(a)) {
            var p = s("Promise").prototype.catch;
            l.catch !== p && u(l, "catch", p, { unsafe: true });
          }
        }, 3401: function(e2, t2, r2) {
          "use strict";
          var n2, o, i, a = r2(2109), s = r2(1913), c = r2(5268), u = r2(7854), l = r2(6916), p = r2(8052), d = r2(7674), h = r2(8003), f = r2(6340), m = r2(9662), g = r2(614), E = r2(111), v = r2(5787), y = r2(6707), T = r2(261).set, _ = r2(5948), R = r2(842), I = r2(2534), O = r2(8572), S = r2(9909), A = r2(2492), C = r2(3702), N = r2(8523), b = "Promise", M = C.CONSTRUCTOR, k = C.REJECTION_EVENT, w = C.SUBCLASSING, U = S.getterFor(b), P = S.set, x = A && A.prototype, L = A, D = x, j = u.TypeError, G = u.document, B = u.process, H = N.f, F = H, W = !!(G && G.createEvent && u.dispatchEvent), Z = "unhandledrejection", K = function(e3) {
            var t3;
            return !(!E(e3) || !g(t3 = e3.then)) && t3;
          }, q = function(e3, t3) {
            var r3, n3, o2, i2 = t3.value, a2 = 1 == t3.state, s2 = a2 ? e3.ok : e3.fail, c2 = e3.resolve, u2 = e3.reject, p2 = e3.domain;
            try {
              s2 ? (a2 || (2 === t3.rejection && Y(t3), t3.rejection = 1), true === s2 ? r3 = i2 : (p2 && p2.enter(), r3 = s2(i2), p2 && (p2.exit(), o2 = true)), r3 === e3.promise ? u2(j("Promise-chain cycle")) : (n3 = K(r3)) ? l(n3, r3, c2, u2) : c2(r3)) : u2(i2);
            } catch (e4) {
              p2 && !o2 && p2.exit(), u2(e4);
            }
          }, z = function(e3, t3) {
            e3.notified || (e3.notified = true, _(function() {
              for (var r3, n3 = e3.reactions; r3 = n3.get(); )
                q(r3, e3);
              e3.notified = false, t3 && !e3.rejection && X(e3);
            }));
          }, V = function(e3, t3, r3) {
            var n3, o2;
            W ? ((n3 = G.createEvent("Event")).promise = t3, n3.reason = r3, n3.initEvent(e3, false, true), u.dispatchEvent(n3)) : n3 = { promise: t3, reason: r3 }, !k && (o2 = u["on" + e3]) ? o2(n3) : e3 === Z && R("Unhandled promise rejection", r3);
          }, X = function(e3) {
            l(T, u, function() {
              var t3, r3 = e3.facade, n3 = e3.value;
              if (J(e3) && (t3 = I(function() {
                c ? B.emit("unhandledRejection", n3, r3) : V(Z, r3, n3);
              }), e3.rejection = c || J(e3) ? 2 : 1, t3.error))
                throw t3.value;
            });
          }, J = function(e3) {
            return 1 !== e3.rejection && !e3.parent;
          }, Y = function(e3) {
            l(T, u, function() {
              var t3 = e3.facade;
              c ? B.emit("rejectionHandled", t3) : V("rejectionhandled", t3, e3.value);
            });
          }, Q = function(e3, t3, r3) {
            return function(n3) {
              e3(t3, n3, r3);
            };
          }, $2 = function(e3, t3, r3) {
            e3.done || (e3.done = true, r3 && (e3 = r3), e3.value = t3, e3.state = 2, z(e3, true));
          }, ee = function(e3, t3, r3) {
            if (!e3.done) {
              e3.done = true, r3 && (e3 = r3);
              try {
                if (e3.facade === t3)
                  throw j("Promise can't be resolved itself");
                var n3 = K(t3);
                n3 ? _(function() {
                  var r4 = { done: false };
                  try {
                    l(n3, t3, Q(ee, r4, e3), Q($2, r4, e3));
                  } catch (t4) {
                    $2(r4, t4, e3);
                  }
                }) : (e3.value = t3, e3.state = 1, z(e3, false));
              } catch (t4) {
                $2({ done: false }, t4, e3);
              }
            }
          };
          if (M && (D = (L = function(e3) {
            v(this, D), m(e3), l(n2, this);
            var t3 = U(this);
            try {
              e3(Q(ee, t3), Q($2, t3));
            } catch (e4) {
              $2(t3, e4);
            }
          }).prototype, (n2 = function(e3) {
            P(this, { type: b, done: false, notified: false, parent: false, reactions: new O(), rejection: false, state: 0, value: void 0 });
          }).prototype = p(D, "then", function(e3, t3) {
            var r3 = U(this), n3 = H(y(this, L));
            return r3.parent = true, n3.ok = !g(e3) || e3, n3.fail = g(t3) && t3, n3.domain = c ? B.domain : void 0, 0 == r3.state ? r3.reactions.add(n3) : _(function() {
              q(n3, r3);
            }), n3.promise;
          }), o = function() {
            var e3 = new n2(), t3 = U(e3);
            this.promise = e3, this.resolve = Q(ee, t3), this.reject = Q($2, t3);
          }, N.f = H = function(e3) {
            return e3 === L || void 0 === e3 ? new o(e3) : F(e3);
          }, !s && g(A) && x !== Object.prototype)) {
            i = x.then, w || p(x, "then", function(e3, t3) {
              var r3 = this;
              return new L(function(e4, t4) {
                l(i, r3, e4, t4);
              }).then(e3, t3);
            }, { unsafe: true });
            try {
              delete x.constructor;
            } catch (e3) {
            }
            d && d(x, D);
          }
          a({ global: true, constructor: true, wrap: true, forced: M }, { Promise: L }), h(L, b, false, true), f(b);
        }, 8674: function(e2, t2, r2) {
          r2(3401), r2(821), r2(4164), r2(6027), r2(683), r2(6294);
        }, 6027: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(6916), i = r2(9662), a = r2(8523), s = r2(2534), c = r2(408);
          n2({ target: "Promise", stat: true, forced: r2(612) }, { race: function(e3) {
            var t3 = this, r3 = a.f(t3), n3 = r3.reject, u = s(function() {
              var a2 = i(t3.resolve);
              c(e3, function(e4) {
                o(a2, t3, e4).then(r3.resolve, n3);
              });
            });
            return u.error && n3(u.value), r3.promise;
          } });
        }, 683: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(6916), i = r2(8523);
          n2({ target: "Promise", stat: true, forced: r2(3702).CONSTRUCTOR }, { reject: function(e3) {
            var t3 = i.f(this);
            return o(t3.reject, void 0, e3), t3.promise;
          } });
        }, 6294: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(5005), i = r2(1913), a = r2(2492), s = r2(3702).CONSTRUCTOR, c = r2(9478), u = o("Promise"), l = i && !s;
          n2({ target: "Promise", stat: true, forced: i || s }, { resolve: function(e3) {
            return c(l && this === u ? a : this, e3);
          } });
        }, 4916: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(2261);
          n2({ target: "RegExp", proto: true, forced: /./.exec !== o }, { exec: o });
        }, 9714: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(6530).PROPER, o = r2(8052), i = r2(9670), a = r2(1340), s = r2(7293), c = r2(4706), u = "toString", l = RegExp.prototype[u], p = s(function() {
            return "/a/b" != l.call({ source: "a", flags: "b" });
          }), d = n2 && l.name != u;
          (p || d) && o(RegExp.prototype, u, function() {
            var e3 = i(this);
            return "/" + a(e3.source) + "/" + a(c(e3));
          }, { unsafe: true });
        }, 2023: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(1702), i = r2(3929), a = r2(4488), s = r2(1340), c = r2(4964), u = o("".indexOf);
          n2({ target: "String", proto: true, forced: !c("includes") }, { includes: function(e3) {
            return !!~u(s(a(this)), s(i(e3)), arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 8783: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(8710).charAt, o = r2(1340), i = r2(9909), a = r2(1656), s = r2(6178), c = "String Iterator", u = i.set, l = i.getterFor(c);
          a(String, "String", function(e3) {
            u(this, { type: c, string: o(e3), index: 0 });
          }, function() {
            var e3, t3 = l(this), r3 = t3.string, o2 = t3.index;
            return o2 >= r3.length ? s(void 0, true) : (e3 = n2(r3, o2), t3.index += e3.length, s(e3, false));
          });
        }, 3123: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2104), o = r2(6916), i = r2(1702), a = r2(7007), s = r2(9670), c = r2(8554), u = r2(7850), l = r2(4488), p = r2(6707), d = r2(1530), h = r2(7466), f = r2(1340), m = r2(8173), g = r2(1589), E = r2(7651), v = r2(2261), y = r2(2999), T = r2(7293), _ = y.UNSUPPORTED_Y, R = 4294967295, I = Math.min, O = [].push, S = i(/./.exec), A = i(O), C = i("".slice), N = !T(function() {
            var e3 = /(?:)/, t3 = e3.exec;
            e3.exec = function() {
              return t3.apply(this, arguments);
            };
            var r3 = "ab".split(e3);
            return 2 !== r3.length || "a" !== r3[0] || "b" !== r3[1];
          });
          a("split", function(e3, t3, r3) {
            var i2;
            return i2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e4, r4) {
              var i3 = f(l(this)), a2 = void 0 === r4 ? R : r4 >>> 0;
              if (0 === a2)
                return [];
              if (void 0 === e4)
                return [i3];
              if (!u(e4))
                return o(t3, i3, e4, a2);
              for (var s2, c2, p2, d2 = [], h2 = (e4.ignoreCase ? "i" : "") + (e4.multiline ? "m" : "") + (e4.unicode ? "u" : "") + (e4.sticky ? "y" : ""), m2 = 0, E2 = new RegExp(e4.source, h2 + "g"); (s2 = o(v, E2, i3)) && !((c2 = E2.lastIndex) > m2 && (A(d2, C(i3, m2, s2.index)), s2.length > 1 && s2.index < i3.length && n2(O, d2, g(s2, 1)), p2 = s2[0].length, m2 = c2, d2.length >= a2)); )
                E2.lastIndex === s2.index && E2.lastIndex++;
              return m2 === i3.length ? !p2 && S(E2, "") || A(d2, "") : A(d2, C(i3, m2)), d2.length > a2 ? g(d2, 0, a2) : d2;
            } : "0".split(void 0, 0).length ? function(e4, r4) {
              return void 0 === e4 && 0 === r4 ? [] : o(t3, this, e4, r4);
            } : t3, [function(t4, r4) {
              var n3 = l(this), a2 = c(t4) ? void 0 : m(t4, e3);
              return a2 ? o(a2, t4, n3, r4) : o(i2, f(n3), t4, r4);
            }, function(e4, n3) {
              var o2 = s(this), a2 = f(e4), c2 = r3(i2, o2, a2, n3, i2 !== t3);
              if (c2.done)
                return c2.value;
              var u2 = p(o2, RegExp), l2 = o2.unicode, m2 = (o2.ignoreCase ? "i" : "") + (o2.multiline ? "m" : "") + (o2.unicode ? "u" : "") + (_ ? "g" : "y"), g2 = new u2(_ ? "^(?:" + o2.source + ")" : o2, m2), v2 = void 0 === n3 ? R : n3 >>> 0;
              if (0 === v2)
                return [];
              if (0 === a2.length)
                return null === E(g2, a2) ? [a2] : [];
              for (var y2 = 0, T2 = 0, O2 = []; T2 < a2.length; ) {
                g2.lastIndex = _ ? 0 : T2;
                var S2, N2 = E(g2, _ ? C(a2, T2) : a2);
                if (null === N2 || (S2 = I(h(g2.lastIndex + (_ ? T2 : 0)), a2.length)) === y2)
                  T2 = d(a2, T2, l2);
                else {
                  if (A(O2, C(a2, y2, T2)), O2.length === v2)
                    return O2;
                  for (var b = 1; b <= N2.length - 1; b++)
                    if (A(O2, N2[b]), O2.length === v2)
                      return O2;
                  T2 = y2 = S2;
                }
              }
              return A(O2, C(a2, y2)), O2;
            }];
          }, !N, _);
        }, 4032: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(7854), i = r2(6916), a = r2(1702), s = r2(1913), c = r2(9781), u = r2(6293), l = r2(7293), p = r2(2597), d = r2(7976), h = r2(9670), f = r2(5656), m = r2(4948), g = r2(1340), E = r2(9114), v = r2(30), y = r2(1956), T = r2(8006), _ = r2(1156), R = r2(5181), I = r2(1236), O = r2(3070), S = r2(6048), A = r2(5296), C = r2(8052), N = r2(7045), b = r2(2309), M = r2(6200), k = r2(3501), w = r2(9711), U = r2(5112), P = r2(6061), x = r2(6800), L = r2(6532), D = r2(8003), j = r2(9909), G = r2(2092).forEach, B = M("hidden"), H = "Symbol", F = "prototype", W = j.set, Z = j.getterFor(H), K = Object[F], q = o.Symbol, z = q && q[F], V = o.TypeError, X = o.QObject, J = I.f, Y = O.f, Q = _.f, $2 = A.f, ee = a([].push), te = b("symbols"), re = b("op-symbols"), ne = b("wks"), oe = !X || !X[F] || !X[F].findChild, ie = c && l(function() {
            return 7 != v(Y({}, "a", { get: function() {
              return Y(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(e3, t3, r3) {
            var n3 = J(K, t3);
            n3 && delete K[t3], Y(e3, t3, r3), n3 && e3 !== K && Y(K, t3, n3);
          } : Y, ae = function(e3, t3) {
            var r3 = te[e3] = v(z);
            return W(r3, { type: H, tag: e3, description: t3 }), c || (r3.description = t3), r3;
          }, se = function(e3, t3, r3) {
            e3 === K && se(re, t3, r3), h(e3);
            var n3 = m(t3);
            return h(r3), p(te, n3) ? (r3.enumerable ? (p(e3, B) && e3[B][n3] && (e3[B][n3] = false), r3 = v(r3, { enumerable: E(0, false) })) : (p(e3, B) || Y(e3, B, E(1, {})), e3[B][n3] = true), ie(e3, n3, r3)) : Y(e3, n3, r3);
          }, ce = function(e3, t3) {
            h(e3);
            var r3 = f(t3), n3 = y(r3).concat(de(r3));
            return G(n3, function(t4) {
              c && !i(ue, r3, t4) || se(e3, t4, r3[t4]);
            }), e3;
          }, ue = function(e3) {
            var t3 = m(e3), r3 = i($2, this, t3);
            return !(this === K && p(te, t3) && !p(re, t3)) && (!(r3 || !p(this, t3) || !p(te, t3) || p(this, B) && this[B][t3]) || r3);
          }, le = function(e3, t3) {
            var r3 = f(e3), n3 = m(t3);
            if (r3 !== K || !p(te, n3) || p(re, n3)) {
              var o2 = J(r3, n3);
              return !o2 || !p(te, n3) || p(r3, B) && r3[B][n3] || (o2.enumerable = true), o2;
            }
          }, pe = function(e3) {
            var t3 = Q(f(e3)), r3 = [];
            return G(t3, function(e4) {
              p(te, e4) || p(k, e4) || ee(r3, e4);
            }), r3;
          }, de = function(e3) {
            var t3 = e3 === K, r3 = Q(t3 ? re : f(e3)), n3 = [];
            return G(r3, function(e4) {
              !p(te, e4) || t3 && !p(K, e4) || ee(n3, te[e4]);
            }), n3;
          };
          u || (q = function() {
            if (d(z, this))
              throw V("Symbol is not a constructor");
            var e3 = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0, t3 = w(e3), r3 = function(e4) {
              this === K && i(r3, re, e4), p(this, B) && p(this[B], t3) && (this[B][t3] = false), ie(this, t3, E(1, e4));
            };
            return c && oe && ie(K, t3, { configurable: true, set: r3 }), ae(t3, e3);
          }, C(z = q[F], "toString", function() {
            return Z(this).tag;
          }), C(q, "withoutSetter", function(e3) {
            return ae(w(e3), e3);
          }), A.f = ue, O.f = se, S.f = ce, I.f = le, T.f = _.f = pe, R.f = de, P.f = function(e3) {
            return ae(U(e3), e3);
          }, c && (N(z, "description", { configurable: true, get: function() {
            return Z(this).description;
          } }), s || C(K, "propertyIsEnumerable", ue, { unsafe: true }))), n2({ global: true, constructor: true, wrap: true, forced: !u, sham: !u }, { Symbol: q }), G(y(ne), function(e3) {
            x(e3);
          }), n2({ target: H, stat: true, forced: !u }, { useSetter: function() {
            oe = true;
          }, useSimple: function() {
            oe = false;
          } }), n2({ target: "Object", stat: true, forced: !u, sham: !c }, { create: function(e3, t3) {
            return void 0 === t3 ? v(e3) : ce(v(e3), t3);
          }, defineProperty: se, defineProperties: ce, getOwnPropertyDescriptor: le }), n2({ target: "Object", stat: true, forced: !u }, { getOwnPropertyNames: pe }), L(), D(q, H), k[B] = true;
        }, 1817: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(2109), o = r2(9781), i = r2(7854), a = r2(1702), s = r2(2597), c = r2(614), u = r2(7976), l = r2(1340), p = r2(7045), d = r2(9920), h = i.Symbol, f = h && h.prototype;
          if (o && c(h) && (!("description" in f) || void 0 !== h().description)) {
            var m = {}, g = function() {
              var e3 = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]), t3 = u(f, this) ? new h(e3) : void 0 === e3 ? h() : h(e3);
              return "" === e3 && (m[t3] = true), t3;
            };
            d(g, h), g.prototype = f, f.constructor = g;
            var E = "Symbol(test)" == String(h("test")), v = a(f.valueOf), y = a(f.toString), T = /^Symbol\((.*)\)[^)]+$/, _ = a("".replace), R = a("".slice);
            p(f, "description", { configurable: true, get: function() {
              var e3 = v(this);
              if (s(m, e3))
                return "";
              var t3 = y(e3), r3 = E ? R(t3, 7, -1) : _(t3, T, "$1");
              return "" === r3 ? void 0 : r3;
            } }), n2({ global: true, constructor: true, forced: true }, { Symbol: g });
          }
        }, 763: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(5005), i = r2(2597), a = r2(1340), s = r2(2309), c = r2(2015), u = s("string-to-symbol-registry"), l = s("symbol-to-string-registry");
          n2({ target: "Symbol", stat: true, forced: !c }, { for: function(e3) {
            var t3 = a(e3);
            if (i(u, t3))
              return u[t3];
            var r3 = o("Symbol")(t3);
            return u[t3] = r3, l[r3] = t3, r3;
          } });
        }, 2165: function(e2, t2, r2) {
          r2(6800)("iterator");
        }, 2526: function(e2, t2, r2) {
          r2(4032), r2(763), r2(6620), r2(8862), r2(9660);
        }, 6620: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(2597), i = r2(2190), a = r2(6330), s = r2(2309), c = r2(2015), u = s("symbol-to-string-registry");
          n2({ target: "Symbol", stat: true, forced: !c }, { keyFor: function(e3) {
            if (!i(e3))
              throw TypeError(a(e3) + " is not a symbol");
            if (o(u, e3))
              return u[e3];
          } });
        }, 2990: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(1702), o = r2(260), i = n2(r2(1048)), a = o.aTypedArray;
          (0, o.exportTypedArrayMethod)("copyWithin", function(e3, t3) {
            return i(a(this), e3, t3, arguments.length > 2 ? arguments[2] : void 0);
          });
        }, 8927: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2092).every, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("every", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 3105: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(1285), i = r2(4599), a = r2(648), s = r2(6916), c = r2(1702), u = r2(7293), l = n2.aTypedArray, p = n2.exportTypedArrayMethod, d = c("".slice);
          p("fill", function(e3) {
            var t3 = arguments.length;
            l(this);
            var r3 = "Big" === d(a(this), 0, 3) ? i(e3) : +e3;
            return s(o, this, r3, t3 > 1 ? arguments[1] : void 0, t3 > 2 ? arguments[2] : void 0);
          }, u(function() {
            var e3 = 0;
            return new Int8Array(2).fill({ valueOf: function() {
              return e3++;
            } }), 1 !== e3;
          }));
        }, 5035: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2092).filter, i = r2(3074), a = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("filter", function(e3) {
            var t3 = o(a(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            return i(this, t3);
          });
        }, 7174: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2092).findIndex, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("findIndex", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 4345: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2092).find, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("find", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 2846: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2092).forEach, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("forEach", function(e3) {
            o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 8145: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(3832);
          (0, r2(260).exportTypedArrayStaticMethod)("from", r2(7321), n2);
        }, 4731: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(1318).includes, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("includes", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 7209: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(1318).indexOf, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("indexOf", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 6319: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7854), o = r2(7293), i = r2(1702), a = r2(260), s = r2(6992), c = r2(5112)("iterator"), u = n2.Uint8Array, l = i(s.values), p = i(s.keys), d = i(s.entries), h = a.aTypedArray, f = a.exportTypedArrayMethod, m = u && u.prototype, g = !o(function() {
            m[c].call([1]);
          }), E = !!m && m.values && m[c] === m.values && "values" === m.values.name, v = function() {
            return l(h(this));
          };
          f("entries", function() {
            return d(h(this));
          }, g), f("keys", function() {
            return p(h(this));
          }, g), f("values", v, g || !E, { name: "values" }), f(c, v, g || !E, { name: "values" });
        }, 8867: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(1702), i = n2.aTypedArray, a = n2.exportTypedArrayMethod, s = o([].join);
          a("join", function(e3) {
            return s(i(this), e3);
          });
        }, 7789: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2104), i = r2(6583), a = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("lastIndexOf", function(e3) {
            var t3 = arguments.length;
            return o(i, a(this), t3 > 1 ? [e3, arguments[1]] : [e3]);
          });
        }, 3739: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2092).map, i = r2(6304), a = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("map", function(e3) {
            return o(a(this), e3, arguments.length > 1 ? arguments[1] : void 0, function(e4, t3) {
              return new (i(e4))(t3);
            });
          });
        }, 4483: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(3671).right, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("reduceRight", function(e3) {
            var t3 = arguments.length;
            return o(i(this), e3, t3, t3 > 1 ? arguments[1] : void 0);
          });
        }, 9368: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(3671).left, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("reduce", function(e3) {
            var t3 = arguments.length;
            return o(i(this), e3, t3, t3 > 1 ? arguments[1] : void 0);
          });
        }, 2056: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = n2.aTypedArray, i = n2.exportTypedArrayMethod, a = Math.floor;
          i("reverse", function() {
            for (var e3, t3 = this, r3 = o(t3).length, n3 = a(r3 / 2), i2 = 0; i2 < n3; )
              e3 = t3[i2], t3[i2++] = t3[--r3], t3[r3] = e3;
            return t3;
          });
        }, 3462: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7854), o = r2(6916), i = r2(260), a = r2(6244), s = r2(4590), c = r2(7908), u = r2(7293), l = n2.RangeError, p = n2.Int8Array, d = p && p.prototype, h = d && d.set, f = i.aTypedArray, m = i.exportTypedArrayMethod, g = !u(function() {
            var e3 = new Uint8ClampedArray(2);
            return o(h, e3, { length: 1, 0: 3 }, 1), 3 !== e3[1];
          }), E = g && i.NATIVE_ARRAY_BUFFER_VIEWS && u(function() {
            var e3 = new p(2);
            return e3.set(1), e3.set("2", 1), 0 !== e3[0] || 2 !== e3[1];
          });
          m("set", function(e3) {
            f(this);
            var t3 = s(arguments.length > 1 ? arguments[1] : void 0, 1), r3 = c(e3);
            if (g)
              return o(h, this, r3, t3);
            var n3 = this.length, i2 = a(r3), u2 = 0;
            if (i2 + t3 > n3)
              throw l("Wrong length");
            for (; u2 < i2; )
              this[t3 + u2] = r3[u2++];
          }, !g || E);
        }, 678: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(6304), i = r2(7293), a = r2(206), s = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("slice", function(e3, t3) {
            for (var r3 = a(s(this), e3, t3), n3 = o(this), i2 = 0, c = r3.length, u = new n3(c); c > i2; )
              u[i2] = r3[i2++];
            return u;
          }, i(function() {
            new Int8Array(1).slice();
          }));
        }, 7462: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(2092).some, i = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("some", function(e3) {
            return o(i(this), e3, arguments.length > 1 ? arguments[1] : void 0);
          });
        }, 3824: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7854), o = r2(1470), i = r2(7293), a = r2(9662), s = r2(4362), c = r2(260), u = r2(8886), l = r2(256), p = r2(7392), d = r2(8008), h = c.aTypedArray, f = c.exportTypedArrayMethod, m = n2.Uint16Array, g = m && o(m.prototype.sort), E = !(!g || i(function() {
            g(new m(2), null);
          }) && i(function() {
            g(new m(2), {});
          })), v = !!g && !i(function() {
            if (p)
              return p < 74;
            if (u)
              return u < 67;
            if (l)
              return true;
            if (d)
              return d < 602;
            var e3, t3, r3 = new m(516), n3 = Array(516);
            for (e3 = 0; e3 < 516; e3++)
              t3 = e3 % 4, r3[e3] = 515 - e3, n3[e3] = e3 - 2 * t3 + 3;
            for (g(r3, function(e4, t4) {
              return (e4 / 4 | 0) - (t4 / 4 | 0);
            }), e3 = 0; e3 < 516; e3++)
              if (r3[e3] !== n3[e3])
                return true;
          });
          f("sort", function(e3) {
            return void 0 !== e3 && a(e3), v ? g(this, e3) : s(h(this), /* @__PURE__ */ function(e4) {
              return function(t3, r3) {
                return void 0 !== e4 ? +e4(t3, r3) || 0 : r3 != r3 ? -1 : t3 != t3 ? 1 : 0 === t3 && 0 === r3 ? 1 / t3 > 0 && 1 / r3 < 0 ? 1 : -1 : t3 > r3;
              };
            }(e3));
          }, !v || E);
        }, 5021: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260), o = r2(7466), i = r2(1400), a = r2(6304), s = n2.aTypedArray;
          (0, n2.exportTypedArrayMethod)("subarray", function(e3, t3) {
            var r3 = s(this), n3 = r3.length, c = i(e3, n3);
            return new (a(r3))(r3.buffer, r3.byteOffset + c * r3.BYTES_PER_ELEMENT, o((void 0 === t3 ? n3 : i(t3, n3)) - c));
          });
        }, 2974: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(7854), o = r2(2104), i = r2(260), a = r2(7293), s = r2(206), c = n2.Int8Array, u = i.aTypedArray, l = i.exportTypedArrayMethod, p = [].toLocaleString, d = !!c && a(function() {
            p.call(new c(1));
          });
          l("toLocaleString", function() {
            return o(p, d ? s(u(this)) : u(this), s(arguments));
          }, a(function() {
            return [1, 2].toLocaleString() != new c([1, 2]).toLocaleString();
          }) || !a(function() {
            c.prototype.toLocaleString.call([1, 2]);
          }));
        }, 5016: function(e2, t2, r2) {
          "use strict";
          var n2 = r2(260).exportTypedArrayMethod, o = r2(7293), i = r2(7854), a = r2(1702), s = i.Uint8Array, c = s && s.prototype || {}, u = [].toString, l = a([].join);
          o(function() {
            u.call({});
          }) && (u = function() {
            return l(this);
          });
          var p = c.toString != u;
          n2("toString", u, p);
        }, 2472: function(e2, t2, r2) {
          r2(9843)("Uint8", function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 4747: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(8324), i = r2(8509), a = r2(8533), s = r2(8880), c = function(e3) {
            if (e3 && e3.forEach !== a)
              try {
                s(e3, "forEach", a);
              } catch (t3) {
                e3.forEach = a;
              }
          };
          for (var u in o)
            o[u] && c(n2[u] && n2[u].prototype);
          c(i);
        }, 3948: function(e2, t2, r2) {
          var n2 = r2(7854), o = r2(8324), i = r2(8509), a = r2(6992), s = r2(8880), c = r2(5112), u = c("iterator"), l = c("toStringTag"), p = a.values, d = function(e3, t3) {
            if (e3) {
              if (e3[u] !== p)
                try {
                  s(e3, u, p);
                } catch (t4) {
                  e3[u] = p;
                }
              if (e3[l] || s(e3, l, t3), o[t3]) {
                for (var r3 in a)
                  if (e3[r3] !== a[r3])
                    try {
                      s(e3, r3, a[r3]);
                    } catch (t4) {
                      e3[r3] = a[r3];
                    }
              }
            }
          };
          for (var h in o)
            d(n2[h] && n2[h].prototype, h);
          d(i, "DOMTokenList");
        }, 6815: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(7854), i = r2(7152)(o.setInterval, true);
          n2({ global: true, bind: true, forced: o.setInterval !== i }, { setInterval: i });
        }, 8417: function(e2, t2, r2) {
          var n2 = r2(2109), o = r2(7854), i = r2(7152)(o.setTimeout, true);
          n2({ global: true, bind: true, forced: o.setTimeout !== i }, { setTimeout: i });
        }, 2564: function(e2, t2, r2) {
          r2(6815), r2(8417);
        }, 5556: function(e2, t2, r2) {
          "use strict";
          r2(6992);
          var n2 = r2(2109), o = r2(7854), i = r2(6916), a = r2(1702), s = r2(9781), c = r2(5143), u = r2(8052), l = r2(7045), p = r2(9190), d = r2(8003), h = r2(3061), f = r2(9909), m = r2(5787), g = r2(614), E = r2(2597), v = r2(9974), y = r2(648), T = r2(9670), _ = r2(111), R = r2(1340), I = r2(30), O = r2(9114), S = r2(4121), A = r2(1246), C = r2(8053), N = r2(5112), b = r2(4362), M = N("iterator"), k = "URLSearchParams", w = k + "Iterator", U = f.set, P = f.getterFor(k), x = f.getterFor(w), L = Object.getOwnPropertyDescriptor, D = function(e3) {
            if (!s)
              return o[e3];
            var t3 = L(o, e3);
            return t3 && t3.value;
          }, j = D("fetch"), G = D("Request"), B = D("Headers"), H = G && G.prototype, F = B && B.prototype, W = o.RegExp, Z = o.TypeError, K = o.decodeURIComponent, q = o.encodeURIComponent, z = a("".charAt), V = a([].join), X = a([].push), J = a("".replace), Y = a([].shift), Q = a([].splice), $2 = a("".split), ee = a("".slice), te = /\+/g, re = Array(4), ne = function(e3) {
            return re[e3 - 1] || (re[e3 - 1] = W("((?:%[\\da-f]{2}){" + e3 + "})", "gi"));
          }, oe = function(e3) {
            try {
              return K(e3);
            } catch (t3) {
              return e3;
            }
          }, ie = function(e3) {
            var t3 = J(e3, te, " "), r3 = 4;
            try {
              return K(t3);
            } catch (e4) {
              for (; r3; )
                t3 = J(t3, ne(r3--), oe);
              return t3;
            }
          }, ae = /[!'()~]|%20/g, se = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" }, ce = function(e3) {
            return se[e3];
          }, ue = function(e3) {
            return J(q(e3), ae, ce);
          }, le = h(function(e3, t3) {
            U(this, { type: w, iterator: S(P(e3).entries), kind: t3 });
          }, "Iterator", function() {
            var e3 = x(this), t3 = e3.kind, r3 = e3.iterator.next(), n3 = r3.value;
            return r3.done || (r3.value = "keys" === t3 ? n3.key : "values" === t3 ? n3.value : [n3.key, n3.value]), r3;
          }, true), pe = function(e3) {
            this.entries = [], this.url = null, void 0 !== e3 && (_(e3) ? this.parseObject(e3) : this.parseQuery("string" == typeof e3 ? "?" === z(e3, 0) ? ee(e3, 1) : e3 : R(e3)));
          };
          pe.prototype = { type: k, bindURL: function(e3) {
            this.url = e3, this.update();
          }, parseObject: function(e3) {
            var t3, r3, n3, o2, a2, s2, c2, u2 = A(e3);
            if (u2)
              for (r3 = (t3 = S(e3, u2)).next; !(n3 = i(r3, t3)).done; ) {
                if (a2 = (o2 = S(T(n3.value))).next, (s2 = i(a2, o2)).done || (c2 = i(a2, o2)).done || !i(a2, o2).done)
                  throw Z("Expected sequence with length 2");
                X(this.entries, { key: R(s2.value), value: R(c2.value) });
              }
            else
              for (var l2 in e3)
                E(e3, l2) && X(this.entries, { key: l2, value: R(e3[l2]) });
          }, parseQuery: function(e3) {
            if (e3)
              for (var t3, r3, n3 = $2(e3, "&"), o2 = 0; o2 < n3.length; )
                (t3 = n3[o2++]).length && (r3 = $2(t3, "="), X(this.entries, { key: ie(Y(r3)), value: ie(V(r3, "=")) }));
          }, serialize: function() {
            for (var e3, t3 = this.entries, r3 = [], n3 = 0; n3 < t3.length; )
              e3 = t3[n3++], X(r3, ue(e3.key) + "=" + ue(e3.value));
            return V(r3, "&");
          }, update: function() {
            this.entries.length = 0, this.parseQuery(this.url.query);
          }, updateURL: function() {
            this.url && this.url.update();
          } };
          var de = function() {
            m(this, he);
            var e3 = U(this, new pe(arguments.length > 0 ? arguments[0] : void 0));
            s || (this.length = e3.entries.length);
          }, he = de.prototype;
          if (p(he, { append: function(e3, t3) {
            C(arguments.length, 2);
            var r3 = P(this);
            X(r3.entries, { key: R(e3), value: R(t3) }), s || this.length++, r3.updateURL();
          }, delete: function(e3) {
            C(arguments.length, 1);
            for (var t3 = P(this), r3 = t3.entries, n3 = R(e3), o2 = 0; o2 < r3.length; )
              r3[o2].key === n3 ? Q(r3, o2, 1) : o2++;
            s || (this.length = r3.length), t3.updateURL();
          }, get: function(e3) {
            C(arguments.length, 1);
            for (var t3 = P(this).entries, r3 = R(e3), n3 = 0; n3 < t3.length; n3++)
              if (t3[n3].key === r3)
                return t3[n3].value;
            return null;
          }, getAll: function(e3) {
            C(arguments.length, 1);
            for (var t3 = P(this).entries, r3 = R(e3), n3 = [], o2 = 0; o2 < t3.length; o2++)
              t3[o2].key === r3 && X(n3, t3[o2].value);
            return n3;
          }, has: function(e3) {
            C(arguments.length, 1);
            for (var t3 = P(this).entries, r3 = R(e3), n3 = 0; n3 < t3.length; )
              if (t3[n3++].key === r3)
                return true;
            return false;
          }, set: function(e3, t3) {
            C(arguments.length, 1);
            for (var r3, n3 = P(this), o2 = n3.entries, i2 = false, a2 = R(e3), c2 = R(t3), u2 = 0; u2 < o2.length; u2++)
              (r3 = o2[u2]).key === a2 && (i2 ? Q(o2, u2--, 1) : (i2 = true, r3.value = c2));
            i2 || X(o2, { key: a2, value: c2 }), s || (this.length = o2.length), n3.updateURL();
          }, sort: function() {
            var e3 = P(this);
            b(e3.entries, function(e4, t3) {
              return e4.key > t3.key ? 1 : -1;
            }), e3.updateURL();
          }, forEach: function(e3) {
            for (var t3, r3 = P(this).entries, n3 = v(e3, arguments.length > 1 ? arguments[1] : void 0), o2 = 0; o2 < r3.length; )
              n3((t3 = r3[o2++]).value, t3.key, this);
          }, keys: function() {
            return new le(this, "keys");
          }, values: function() {
            return new le(this, "values");
          }, entries: function() {
            return new le(this, "entries");
          } }, { enumerable: true }), u(he, M, he.entries, { name: "entries" }), u(he, "toString", function() {
            return P(this).serialize();
          }, { enumerable: true }), s && l(he, "size", { get: function() {
            return P(this).entries.length;
          }, configurable: true, enumerable: true }), d(de, k), n2({ global: true, constructor: true, forced: !c }, { URLSearchParams: de }), !c && g(B)) {
            var fe = a(F.has), me = a(F.set), ge = function(e3) {
              if (_(e3)) {
                var t3, r3 = e3.body;
                if (y(r3) === k)
                  return t3 = e3.headers ? new B(e3.headers) : new B(), fe(t3, "content-type") || me(t3, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), I(e3, { body: O(0, R(r3)), headers: O(0, t3) });
              }
              return e3;
            };
            if (g(j) && n2({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, { fetch: function(e3) {
              return j(e3, arguments.length > 1 ? ge(arguments[1]) : {});
            } }), g(G)) {
              var Ee = function(e3) {
                return m(this, H), new G(e3, arguments.length > 1 ? ge(arguments[1]) : {});
              };
              H.constructor = Ee, Ee.prototype = H, n2({ global: true, constructor: true, dontCallGetSet: true, forced: true }, { Request: Ee });
            }
          }
          e2.exports = { URLSearchParams: de, getState: P };
        }, 1637: function(e2, t2, r2) {
          r2(5556);
        }, 8789: function(e2, t2, r2) {
          "use strict";
          r2(8783);
          var n2, o = r2(2109), i = r2(9781), a = r2(5143), s = r2(7854), c = r2(9974), u = r2(1702), l = r2(8052), p = r2(7045), d = r2(5787), h = r2(2597), f = r2(1574), m = r2(8457), g = r2(1589), E = r2(8710).codeAt, v = r2(3197), y = r2(1340), T = r2(8003), _ = r2(8053), R = r2(5556), I = r2(9909), O = I.set, S = I.getterFor("URL"), A = R.URLSearchParams, C = R.getState, N = s.URL, b = s.TypeError, M = s.parseInt, k = Math.floor, w = Math.pow, U = u("".charAt), P = u(/./.exec), x = u([].join), L = u(1 .toString), D = u([].pop), j = u([].push), G = u("".replace), B = u([].shift), H = u("".split), F = u("".slice), W = u("".toLowerCase), Z = u([].unshift), K = "Invalid scheme", q = "Invalid host", z = "Invalid port", V = /[a-z]/i, X = /[\d+-.a-z]/i, J = /\d/, Y = /^0x/i, Q = /^[0-7]+$/, $2 = /^\d+$/, ee = /^[\da-f]+$/i, te = /[\0\t\n\r #%/:<>?@[\\\]^|]/, re = /[\0\t\n\r #/:<>?@[\\\]^|]/, ne = /^[\u0000-\u0020]+/, oe = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, ie = /[\t\n\r]/g, ae = function(e3) {
            var t3, r3, n3, o2;
            if ("number" == typeof e3) {
              for (t3 = [], r3 = 0; r3 < 4; r3++)
                Z(t3, e3 % 256), e3 = k(e3 / 256);
              return x(t3, ".");
            }
            if ("object" == typeof e3) {
              for (t3 = "", n3 = function(e4) {
                for (var t4 = null, r4 = 1, n4 = null, o3 = 0, i2 = 0; i2 < 8; i2++)
                  0 !== e4[i2] ? (o3 > r4 && (t4 = n4, r4 = o3), n4 = null, o3 = 0) : (null === n4 && (n4 = i2), ++o3);
                return o3 > r4 && (t4 = n4, r4 = o3), t4;
              }(e3), r3 = 0; r3 < 8; r3++)
                o2 && 0 === e3[r3] || (o2 && (o2 = false), n3 === r3 ? (t3 += r3 ? ":" : "::", o2 = true) : (t3 += L(e3[r3], 16), r3 < 7 && (t3 += ":")));
              return "[" + t3 + "]";
            }
            return e3;
          }, se = {}, ce = f({}, se, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }), ue = f({}, ce, { "#": 1, "?": 1, "{": 1, "}": 1 }), le = f({}, ue, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }), pe = function(e3, t3) {
            var r3 = E(e3, 0);
            return r3 > 32 && r3 < 127 && !h(t3, e3) ? e3 : encodeURIComponent(e3);
          }, de = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 }, he = function(e3, t3) {
            var r3;
            return 2 == e3.length && P(V, U(e3, 0)) && (":" == (r3 = U(e3, 1)) || !t3 && "|" == r3);
          }, fe = function(e3) {
            var t3;
            return e3.length > 1 && he(F(e3, 0, 2)) && (2 == e3.length || "/" === (t3 = U(e3, 2)) || "\\" === t3 || "?" === t3 || "#" === t3);
          }, me = function(e3) {
            return "." === e3 || "%2e" === W(e3);
          }, ge = {}, Ee = {}, ve = {}, ye = {}, Te = {}, _e = {}, Re = {}, Ie = {}, Oe = {}, Se = {}, Ae = {}, Ce = {}, Ne = {}, be = {}, Me = {}, ke = {}, we = {}, Ue = {}, Pe = {}, xe = {}, Le = {}, De = function(e3, t3, r3) {
            var n3, o2, i2, a2 = y(e3);
            if (t3) {
              if (o2 = this.parse(a2))
                throw b(o2);
              this.searchParams = null;
            } else {
              if (void 0 !== r3 && (n3 = new De(r3, true)), o2 = this.parse(a2, null, n3))
                throw b(o2);
              (i2 = C(new A())).bindURL(this), this.searchParams = i2;
            }
          };
          De.prototype = { type: "URL", parse: function(e3, t3, r3) {
            var o2, i2, a2, s2, c2, u2 = this, l2 = t3 || ge, p2 = 0, d2 = "", f2 = false, E2 = false, v2 = false;
            for (e3 = y(e3), t3 || (u2.scheme = "", u2.username = "", u2.password = "", u2.host = null, u2.port = null, u2.path = [], u2.query = null, u2.fragment = null, u2.cannotBeABaseURL = false, e3 = G(e3, ne, ""), e3 = G(e3, oe, "$1")), e3 = G(e3, ie, ""), o2 = m(e3); p2 <= o2.length; ) {
              switch (i2 = o2[p2], l2) {
                case ge:
                  if (!i2 || !P(V, i2)) {
                    if (t3)
                      return K;
                    l2 = ve;
                    continue;
                  }
                  d2 += W(i2), l2 = Ee;
                  break;
                case Ee:
                  if (i2 && (P(X, i2) || "+" == i2 || "-" == i2 || "." == i2))
                    d2 += W(i2);
                  else {
                    if (":" != i2) {
                      if (t3)
                        return K;
                      d2 = "", l2 = ve, p2 = 0;
                      continue;
                    }
                    if (t3 && (u2.isSpecial() != h(de, d2) || "file" == d2 && (u2.includesCredentials() || null !== u2.port) || "file" == u2.scheme && !u2.host))
                      return;
                    if (u2.scheme = d2, t3)
                      return void (u2.isSpecial() && de[u2.scheme] == u2.port && (u2.port = null));
                    d2 = "", "file" == u2.scheme ? l2 = be : u2.isSpecial() && r3 && r3.scheme == u2.scheme ? l2 = ye : u2.isSpecial() ? l2 = Ie : "/" == o2[p2 + 1] ? (l2 = Te, p2++) : (u2.cannotBeABaseURL = true, j(u2.path, ""), l2 = Pe);
                  }
                  break;
                case ve:
                  if (!r3 || r3.cannotBeABaseURL && "#" != i2)
                    return K;
                  if (r3.cannotBeABaseURL && "#" == i2) {
                    u2.scheme = r3.scheme, u2.path = g(r3.path), u2.query = r3.query, u2.fragment = "", u2.cannotBeABaseURL = true, l2 = Le;
                    break;
                  }
                  l2 = "file" == r3.scheme ? be : _e;
                  continue;
                case ye:
                  if ("/" != i2 || "/" != o2[p2 + 1]) {
                    l2 = _e;
                    continue;
                  }
                  l2 = Oe, p2++;
                  break;
                case Te:
                  if ("/" == i2) {
                    l2 = Se;
                    break;
                  }
                  l2 = Ue;
                  continue;
                case _e:
                  if (u2.scheme = r3.scheme, i2 == n2)
                    u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.query = r3.query;
                  else if ("/" == i2 || "\\" == i2 && u2.isSpecial())
                    l2 = Re;
                  else if ("?" == i2)
                    u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.query = "", l2 = xe;
                  else {
                    if ("#" != i2) {
                      u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.path.length--, l2 = Ue;
                      continue;
                    }
                    u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, u2.path = g(r3.path), u2.query = r3.query, u2.fragment = "", l2 = Le;
                  }
                  break;
                case Re:
                  if (!u2.isSpecial() || "/" != i2 && "\\" != i2) {
                    if ("/" != i2) {
                      u2.username = r3.username, u2.password = r3.password, u2.host = r3.host, u2.port = r3.port, l2 = Ue;
                      continue;
                    }
                    l2 = Se;
                  } else
                    l2 = Oe;
                  break;
                case Ie:
                  if (l2 = Oe, "/" != i2 || "/" != U(d2, p2 + 1))
                    continue;
                  p2++;
                  break;
                case Oe:
                  if ("/" != i2 && "\\" != i2) {
                    l2 = Se;
                    continue;
                  }
                  break;
                case Se:
                  if ("@" == i2) {
                    f2 && (d2 = "%40" + d2), f2 = true, a2 = m(d2);
                    for (var T2 = 0; T2 < a2.length; T2++) {
                      var _2 = a2[T2];
                      if (":" != _2 || v2) {
                        var R2 = pe(_2, le);
                        v2 ? u2.password += R2 : u2.username += R2;
                      } else
                        v2 = true;
                    }
                    d2 = "";
                  } else if (i2 == n2 || "/" == i2 || "?" == i2 || "#" == i2 || "\\" == i2 && u2.isSpecial()) {
                    if (f2 && "" == d2)
                      return "Invalid authority";
                    p2 -= m(d2).length + 1, d2 = "", l2 = Ae;
                  } else
                    d2 += i2;
                  break;
                case Ae:
                case Ce:
                  if (t3 && "file" == u2.scheme) {
                    l2 = ke;
                    continue;
                  }
                  if (":" != i2 || E2) {
                    if (i2 == n2 || "/" == i2 || "?" == i2 || "#" == i2 || "\\" == i2 && u2.isSpecial()) {
                      if (u2.isSpecial() && "" == d2)
                        return q;
                      if (t3 && "" == d2 && (u2.includesCredentials() || null !== u2.port))
                        return;
                      if (s2 = u2.parseHost(d2))
                        return s2;
                      if (d2 = "", l2 = we, t3)
                        return;
                      continue;
                    }
                    "[" == i2 ? E2 = true : "]" == i2 && (E2 = false), d2 += i2;
                  } else {
                    if ("" == d2)
                      return q;
                    if (s2 = u2.parseHost(d2))
                      return s2;
                    if (d2 = "", l2 = Ne, t3 == Ce)
                      return;
                  }
                  break;
                case Ne:
                  if (!P(J, i2)) {
                    if (i2 == n2 || "/" == i2 || "?" == i2 || "#" == i2 || "\\" == i2 && u2.isSpecial() || t3) {
                      if ("" != d2) {
                        var I2 = M(d2, 10);
                        if (I2 > 65535)
                          return z;
                        u2.port = u2.isSpecial() && I2 === de[u2.scheme] ? null : I2, d2 = "";
                      }
                      if (t3)
                        return;
                      l2 = we;
                      continue;
                    }
                    return z;
                  }
                  d2 += i2;
                  break;
                case be:
                  if (u2.scheme = "file", "/" == i2 || "\\" == i2)
                    l2 = Me;
                  else {
                    if (!r3 || "file" != r3.scheme) {
                      l2 = Ue;
                      continue;
                    }
                    if (i2 == n2)
                      u2.host = r3.host, u2.path = g(r3.path), u2.query = r3.query;
                    else if ("?" == i2)
                      u2.host = r3.host, u2.path = g(r3.path), u2.query = "", l2 = xe;
                    else {
                      if ("#" != i2) {
                        fe(x(g(o2, p2), "")) || (u2.host = r3.host, u2.path = g(r3.path), u2.shortenPath()), l2 = Ue;
                        continue;
                      }
                      u2.host = r3.host, u2.path = g(r3.path), u2.query = r3.query, u2.fragment = "", l2 = Le;
                    }
                  }
                  break;
                case Me:
                  if ("/" == i2 || "\\" == i2) {
                    l2 = ke;
                    break;
                  }
                  r3 && "file" == r3.scheme && !fe(x(g(o2, p2), "")) && (he(r3.path[0], true) ? j(u2.path, r3.path[0]) : u2.host = r3.host), l2 = Ue;
                  continue;
                case ke:
                  if (i2 == n2 || "/" == i2 || "\\" == i2 || "?" == i2 || "#" == i2) {
                    if (!t3 && he(d2))
                      l2 = Ue;
                    else if ("" == d2) {
                      if (u2.host = "", t3)
                        return;
                      l2 = we;
                    } else {
                      if (s2 = u2.parseHost(d2))
                        return s2;
                      if ("localhost" == u2.host && (u2.host = ""), t3)
                        return;
                      d2 = "", l2 = we;
                    }
                    continue;
                  }
                  d2 += i2;
                  break;
                case we:
                  if (u2.isSpecial()) {
                    if (l2 = Ue, "/" != i2 && "\\" != i2)
                      continue;
                  } else if (t3 || "?" != i2)
                    if (t3 || "#" != i2) {
                      if (i2 != n2 && (l2 = Ue, "/" != i2))
                        continue;
                    } else
                      u2.fragment = "", l2 = Le;
                  else
                    u2.query = "", l2 = xe;
                  break;
                case Ue:
                  if (i2 == n2 || "/" == i2 || "\\" == i2 && u2.isSpecial() || !t3 && ("?" == i2 || "#" == i2)) {
                    if (".." === (c2 = W(c2 = d2)) || "%2e." === c2 || ".%2e" === c2 || "%2e%2e" === c2 ? (u2.shortenPath(), "/" == i2 || "\\" == i2 && u2.isSpecial() || j(u2.path, "")) : me(d2) ? "/" == i2 || "\\" == i2 && u2.isSpecial() || j(u2.path, "") : ("file" == u2.scheme && !u2.path.length && he(d2) && (u2.host && (u2.host = ""), d2 = U(d2, 0) + ":"), j(u2.path, d2)), d2 = "", "file" == u2.scheme && (i2 == n2 || "?" == i2 || "#" == i2))
                      for (; u2.path.length > 1 && "" === u2.path[0]; )
                        B(u2.path);
                    "?" == i2 ? (u2.query = "", l2 = xe) : "#" == i2 && (u2.fragment = "", l2 = Le);
                  } else
                    d2 += pe(i2, ue);
                  break;
                case Pe:
                  "?" == i2 ? (u2.query = "", l2 = xe) : "#" == i2 ? (u2.fragment = "", l2 = Le) : i2 != n2 && (u2.path[0] += pe(i2, se));
                  break;
                case xe:
                  t3 || "#" != i2 ? i2 != n2 && ("'" == i2 && u2.isSpecial() ? u2.query += "%27" : u2.query += "#" == i2 ? "%23" : pe(i2, se)) : (u2.fragment = "", l2 = Le);
                  break;
                case Le:
                  i2 != n2 && (u2.fragment += pe(i2, ce));
              }
              p2++;
            }
          }, parseHost: function(e3) {
            var t3, r3, n3;
            if ("[" == U(e3, 0)) {
              if ("]" != U(e3, e3.length - 1))
                return q;
              if (t3 = function(e4) {
                var t4, r4, n4, o2, i2, a2, s2, c2 = [0, 0, 0, 0, 0, 0, 0, 0], u2 = 0, l2 = null, p2 = 0, d2 = function() {
                  return U(e4, p2);
                };
                if (":" == d2()) {
                  if (":" != U(e4, 1))
                    return;
                  p2 += 2, l2 = ++u2;
                }
                for (; d2(); ) {
                  if (8 == u2)
                    return;
                  if (":" != d2()) {
                    for (t4 = r4 = 0; r4 < 4 && P(ee, d2()); )
                      t4 = 16 * t4 + M(d2(), 16), p2++, r4++;
                    if ("." == d2()) {
                      if (0 == r4)
                        return;
                      if (p2 -= r4, u2 > 6)
                        return;
                      for (n4 = 0; d2(); ) {
                        if (o2 = null, n4 > 0) {
                          if (!("." == d2() && n4 < 4))
                            return;
                          p2++;
                        }
                        if (!P(J, d2()))
                          return;
                        for (; P(J, d2()); ) {
                          if (i2 = M(d2(), 10), null === o2)
                            o2 = i2;
                          else {
                            if (0 == o2)
                              return;
                            o2 = 10 * o2 + i2;
                          }
                          if (o2 > 255)
                            return;
                          p2++;
                        }
                        c2[u2] = 256 * c2[u2] + o2, 2 != ++n4 && 4 != n4 || u2++;
                      }
                      if (4 != n4)
                        return;
                      break;
                    }
                    if (":" == d2()) {
                      if (p2++, !d2())
                        return;
                    } else if (d2())
                      return;
                    c2[u2++] = t4;
                  } else {
                    if (null !== l2)
                      return;
                    p2++, l2 = ++u2;
                  }
                }
                if (null !== l2)
                  for (a2 = u2 - l2, u2 = 7; 0 != u2 && a2 > 0; )
                    s2 = c2[u2], c2[u2--] = c2[l2 + a2 - 1], c2[l2 + --a2] = s2;
                else if (8 != u2)
                  return;
                return c2;
              }(F(e3, 1, -1)), !t3)
                return q;
              this.host = t3;
            } else if (this.isSpecial()) {
              if (e3 = v(e3), P(te, e3))
                return q;
              if (t3 = function(e4) {
                var t4, r4, n4, o2, i2, a2, s2, c2 = H(e4, ".");
                if (c2.length && "" == c2[c2.length - 1] && c2.length--, (t4 = c2.length) > 4)
                  return e4;
                for (r4 = [], n4 = 0; n4 < t4; n4++) {
                  if ("" == (o2 = c2[n4]))
                    return e4;
                  if (i2 = 10, o2.length > 1 && "0" == U(o2, 0) && (i2 = P(Y, o2) ? 16 : 8, o2 = F(o2, 8 == i2 ? 1 : 2)), "" === o2)
                    a2 = 0;
                  else {
                    if (!P(10 == i2 ? $2 : 8 == i2 ? Q : ee, o2))
                      return e4;
                    a2 = M(o2, i2);
                  }
                  j(r4, a2);
                }
                for (n4 = 0; n4 < t4; n4++)
                  if (a2 = r4[n4], n4 == t4 - 1) {
                    if (a2 >= w(256, 5 - t4))
                      return null;
                  } else if (a2 > 255)
                    return null;
                for (s2 = D(r4), n4 = 0; n4 < r4.length; n4++)
                  s2 += r4[n4] * w(256, 3 - n4);
                return s2;
              }(e3), null === t3)
                return q;
              this.host = t3;
            } else {
              if (P(re, e3))
                return q;
              for (t3 = "", r3 = m(e3), n3 = 0; n3 < r3.length; n3++)
                t3 += pe(r3[n3], se);
              this.host = t3;
            }
          }, cannotHaveUsernamePasswordPort: function() {
            return !this.host || this.cannotBeABaseURL || "file" == this.scheme;
          }, includesCredentials: function() {
            return "" != this.username || "" != this.password;
          }, isSpecial: function() {
            return h(de, this.scheme);
          }, shortenPath: function() {
            var e3 = this.path, t3 = e3.length;
            !t3 || "file" == this.scheme && 1 == t3 && he(e3[0], true) || e3.length--;
          }, serialize: function() {
            var e3 = this, t3 = e3.scheme, r3 = e3.username, n3 = e3.password, o2 = e3.host, i2 = e3.port, a2 = e3.path, s2 = e3.query, c2 = e3.fragment, u2 = t3 + ":";
            return null !== o2 ? (u2 += "//", e3.includesCredentials() && (u2 += r3 + (n3 ? ":" + n3 : "") + "@"), u2 += ae(o2), null !== i2 && (u2 += ":" + i2)) : "file" == t3 && (u2 += "//"), u2 += e3.cannotBeABaseURL ? a2[0] : a2.length ? "/" + x(a2, "/") : "", null !== s2 && (u2 += "?" + s2), null !== c2 && (u2 += "#" + c2), u2;
          }, setHref: function(e3) {
            var t3 = this.parse(e3);
            if (t3)
              throw b(t3);
            this.searchParams.update();
          }, getOrigin: function() {
            var e3 = this.scheme, t3 = this.port;
            if ("blob" == e3)
              try {
                return new je(e3.path[0]).origin;
              } catch (e4) {
                return "null";
              }
            return "file" != e3 && this.isSpecial() ? e3 + "://" + ae(this.host) + (null !== t3 ? ":" + t3 : "") : "null";
          }, getProtocol: function() {
            return this.scheme + ":";
          }, setProtocol: function(e3) {
            this.parse(y(e3) + ":", ge);
          }, getUsername: function() {
            return this.username;
          }, setUsername: function(e3) {
            var t3 = m(y(e3));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.username = "";
              for (var r3 = 0; r3 < t3.length; r3++)
                this.username += pe(t3[r3], le);
            }
          }, getPassword: function() {
            return this.password;
          }, setPassword: function(e3) {
            var t3 = m(y(e3));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.password = "";
              for (var r3 = 0; r3 < t3.length; r3++)
                this.password += pe(t3[r3], le);
            }
          }, getHost: function() {
            var e3 = this.host, t3 = this.port;
            return null === e3 ? "" : null === t3 ? ae(e3) : ae(e3) + ":" + t3;
          }, setHost: function(e3) {
            this.cannotBeABaseURL || this.parse(e3, Ae);
          }, getHostname: function() {
            var e3 = this.host;
            return null === e3 ? "" : ae(e3);
          }, setHostname: function(e3) {
            this.cannotBeABaseURL || this.parse(e3, Ce);
          }, getPort: function() {
            var e3 = this.port;
            return null === e3 ? "" : y(e3);
          }, setPort: function(e3) {
            this.cannotHaveUsernamePasswordPort() || ("" == (e3 = y(e3)) ? this.port = null : this.parse(e3, Ne));
          }, getPathname: function() {
            var e3 = this.path;
            return this.cannotBeABaseURL ? e3[0] : e3.length ? "/" + x(e3, "/") : "";
          }, setPathname: function(e3) {
            this.cannotBeABaseURL || (this.path = [], this.parse(e3, we));
          }, getSearch: function() {
            var e3 = this.query;
            return e3 ? "?" + e3 : "";
          }, setSearch: function(e3) {
            "" == (e3 = y(e3)) ? this.query = null : ("?" == U(e3, 0) && (e3 = F(e3, 1)), this.query = "", this.parse(e3, xe)), this.searchParams.update();
          }, getSearchParams: function() {
            return this.searchParams.facade;
          }, getHash: function() {
            var e3 = this.fragment;
            return e3 ? "#" + e3 : "";
          }, setHash: function(e3) {
            "" != (e3 = y(e3)) ? ("#" == U(e3, 0) && (e3 = F(e3, 1)), this.fragment = "", this.parse(e3, Le)) : this.fragment = null;
          }, update: function() {
            this.query = this.searchParams.serialize() || null;
          } };
          var je = function(e3) {
            var t3 = d(this, Ge), r3 = _(arguments.length, 1) > 1 ? arguments[1] : void 0, n3 = O(t3, new De(e3, false, r3));
            i || (t3.href = n3.serialize(), t3.origin = n3.getOrigin(), t3.protocol = n3.getProtocol(), t3.username = n3.getUsername(), t3.password = n3.getPassword(), t3.host = n3.getHost(), t3.hostname = n3.getHostname(), t3.port = n3.getPort(), t3.pathname = n3.getPathname(), t3.search = n3.getSearch(), t3.searchParams = n3.getSearchParams(), t3.hash = n3.getHash());
          }, Ge = je.prototype, Be = function(e3, t3) {
            return { get: function() {
              return S(this)[e3]();
            }, set: t3 && function(e4) {
              return S(this)[t3](e4);
            }, configurable: true, enumerable: true };
          };
          if (i && (p(Ge, "href", Be("serialize", "setHref")), p(Ge, "origin", Be("getOrigin")), p(Ge, "protocol", Be("getProtocol", "setProtocol")), p(Ge, "username", Be("getUsername", "setUsername")), p(Ge, "password", Be("getPassword", "setPassword")), p(Ge, "host", Be("getHost", "setHost")), p(Ge, "hostname", Be("getHostname", "setHostname")), p(Ge, "port", Be("getPort", "setPort")), p(Ge, "pathname", Be("getPathname", "setPathname")), p(Ge, "search", Be("getSearch", "setSearch")), p(Ge, "searchParams", Be("getSearchParams")), p(Ge, "hash", Be("getHash", "setHash"))), l(Ge, "toJSON", function() {
            return S(this).serialize();
          }, { enumerable: true }), l(Ge, "toString", function() {
            return S(this).serialize();
          }, { enumerable: true }), N) {
            var He = N.createObjectURL, Fe = N.revokeObjectURL;
            He && l(je, "createObjectURL", c(He, N)), Fe && l(je, "revokeObjectURL", c(Fe, N));
          }
          T(je, "URL"), o({ global: true, constructor: true, forced: !a, sham: !i }, { URL: je });
        }, 285: function(e2, t2, r2) {
          r2(8789);
        }, 3720: function(e2) {
          e2.exports = r2;
          var t2 = null;
          try {
            t2 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
          } catch (e3) {
          }
          function r2(e3, t3, r3) {
            this.low = 0 | e3, this.high = 0 | t3, this.unsigned = !!r3;
          }
          function n2(e3) {
            return true === (e3 && e3.__isLong__);
          }
          r2.prototype.__isLong__, Object.defineProperty(r2.prototype, "__isLong__", { value: true }), r2.isLong = n2;
          var o = {}, i = {};
          function a(e3, t3) {
            var r3, n3, a2;
            return t3 ? (a2 = 0 <= (e3 >>>= 0) && e3 < 256) && (n3 = i[e3]) ? n3 : (r3 = c(e3, (0 | e3) < 0 ? -1 : 0, true), a2 && (i[e3] = r3), r3) : (a2 = -128 <= (e3 |= 0) && e3 < 128) && (n3 = o[e3]) ? n3 : (r3 = c(e3, e3 < 0 ? -1 : 0, false), a2 && (o[e3] = r3), r3);
          }
          function s(e3, t3) {
            if (isNaN(e3))
              return t3 ? E : g;
            if (t3) {
              if (e3 < 0)
                return E;
              if (e3 >= h)
                return R;
            } else {
              if (e3 <= -f)
                return I;
              if (e3 + 1 >= f)
                return _;
            }
            return e3 < 0 ? s(-e3, t3).neg() : c(e3 % d | 0, e3 / d | 0, t3);
          }
          function c(e3, t3, n3) {
            return new r2(e3, t3, n3);
          }
          r2.fromInt = a, r2.fromNumber = s, r2.fromBits = c;
          var u = Math.pow;
          function l(e3, t3, r3) {
            if (0 === e3.length)
              throw Error("empty string");
            if ("NaN" === e3 || "Infinity" === e3 || "+Infinity" === e3 || "-Infinity" === e3)
              return g;
            if ("number" == typeof t3 ? (r3 = t3, t3 = false) : t3 = !!t3, (r3 = r3 || 10) < 2 || 36 < r3)
              throw RangeError("radix");
            var n3;
            if ((n3 = e3.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (0 === n3)
              return l(e3.substring(1), t3, r3).neg();
            for (var o2 = s(u(r3, 8)), i2 = g, a2 = 0; a2 < e3.length; a2 += 8) {
              var c2 = Math.min(8, e3.length - a2), p2 = parseInt(e3.substring(a2, a2 + c2), r3);
              if (c2 < 8) {
                var d2 = s(u(r3, c2));
                i2 = i2.mul(d2).add(s(p2));
              } else
                i2 = (i2 = i2.mul(o2)).add(s(p2));
            }
            return i2.unsigned = t3, i2;
          }
          function p(e3, t3) {
            return "number" == typeof e3 ? s(e3, t3) : "string" == typeof e3 ? l(e3, t3) : c(e3.low, e3.high, "boolean" == typeof t3 ? t3 : e3.unsigned);
          }
          r2.fromString = l, r2.fromValue = p;
          var d = 4294967296, h = d * d, f = h / 2, m = a(1 << 24), g = a(0);
          r2.ZERO = g;
          var E = a(0, true);
          r2.UZERO = E;
          var v = a(1);
          r2.ONE = v;
          var y = a(1, true);
          r2.UONE = y;
          var T = a(-1);
          r2.NEG_ONE = T;
          var _ = c(-1, 2147483647, false);
          r2.MAX_VALUE = _;
          var R = c(-1, -1, true);
          r2.MAX_UNSIGNED_VALUE = R;
          var I = c(0, -2147483648, false);
          r2.MIN_VALUE = I;
          var O = r2.prototype;
          O.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, O.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * d + (this.low >>> 0) : this.high * d + (this.low >>> 0);
          }, O.toString = function(e3) {
            if ((e3 = e3 || 10) < 2 || 36 < e3)
              throw RangeError("radix");
            if (this.isZero())
              return "0";
            if (this.isNegative()) {
              if (this.eq(I)) {
                var t3 = s(e3), r3 = this.div(t3), n3 = r3.mul(t3).sub(this);
                return r3.toString(e3) + n3.toInt().toString(e3);
              }
              return "-" + this.neg().toString(e3);
            }
            for (var o2 = s(u(e3, 6), this.unsigned), i2 = this, a2 = ""; ; ) {
              var c2 = i2.div(o2), l2 = (i2.sub(c2.mul(o2)).toInt() >>> 0).toString(e3);
              if ((i2 = c2).isZero())
                return l2 + a2;
              for (; l2.length < 6; )
                l2 = "0" + l2;
              a2 = "" + l2 + a2;
            }
          }, O.getHighBits = function() {
            return this.high;
          }, O.getHighBitsUnsigned = function() {
            return this.high >>> 0;
          }, O.getLowBits = function() {
            return this.low;
          }, O.getLowBitsUnsigned = function() {
            return this.low >>> 0;
          }, O.getNumBitsAbs = function() {
            if (this.isNegative())
              return this.eq(I) ? 64 : this.neg().getNumBitsAbs();
            for (var e3 = 0 != this.high ? this.high : this.low, t3 = 31; t3 > 0 && 0 == (e3 & 1 << t3); t3--)
              ;
            return 0 != this.high ? t3 + 33 : t3 + 1;
          }, O.isZero = function() {
            return 0 === this.high && 0 === this.low;
          }, O.eqz = O.isZero, O.isNegative = function() {
            return !this.unsigned && this.high < 0;
          }, O.isPositive = function() {
            return this.unsigned || this.high >= 0;
          }, O.isOdd = function() {
            return 1 == (1 & this.low);
          }, O.isEven = function() {
            return 0 == (1 & this.low);
          }, O.equals = function(e3) {
            return n2(e3) || (e3 = p(e3)), (this.unsigned === e3.unsigned || this.high >>> 31 != 1 || e3.high >>> 31 != 1) && this.high === e3.high && this.low === e3.low;
          }, O.eq = O.equals, O.notEquals = function(e3) {
            return !this.eq(e3);
          }, O.neq = O.notEquals, O.ne = O.notEquals, O.lessThan = function(e3) {
            return this.comp(e3) < 0;
          }, O.lt = O.lessThan, O.lessThanOrEqual = function(e3) {
            return this.comp(e3) <= 0;
          }, O.lte = O.lessThanOrEqual, O.le = O.lessThanOrEqual, O.greaterThan = function(e3) {
            return this.comp(e3) > 0;
          }, O.gt = O.greaterThan, O.greaterThanOrEqual = function(e3) {
            return this.comp(e3) >= 0;
          }, O.gte = O.greaterThanOrEqual, O.ge = O.greaterThanOrEqual, O.compare = function(e3) {
            if (n2(e3) || (e3 = p(e3)), this.eq(e3))
              return 0;
            var t3 = this.isNegative(), r3 = e3.isNegative();
            return t3 && !r3 ? -1 : !t3 && r3 ? 1 : this.unsigned ? e3.high >>> 0 > this.high >>> 0 || e3.high === this.high && e3.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e3).isNegative() ? -1 : 1;
          }, O.comp = O.compare, O.negate = function() {
            return !this.unsigned && this.eq(I) ? I : this.not().add(v);
          }, O.neg = O.negate, O.add = function(e3) {
            n2(e3) || (e3 = p(e3));
            var t3 = this.high >>> 16, r3 = 65535 & this.high, o2 = this.low >>> 16, i2 = 65535 & this.low, a2 = e3.high >>> 16, s2 = 65535 & e3.high, u2 = e3.low >>> 16, l2 = 0, d2 = 0, h2 = 0, f2 = 0;
            return h2 += (f2 += i2 + (65535 & e3.low)) >>> 16, d2 += (h2 += o2 + u2) >>> 16, l2 += (d2 += r3 + s2) >>> 16, l2 += t3 + a2, c((h2 &= 65535) << 16 | (f2 &= 65535), (l2 &= 65535) << 16 | (d2 &= 65535), this.unsigned);
          }, O.subtract = function(e3) {
            return n2(e3) || (e3 = p(e3)), this.add(e3.neg());
          }, O.sub = O.subtract, O.multiply = function(e3) {
            if (this.isZero())
              return g;
            if (n2(e3) || (e3 = p(e3)), t2)
              return c(t2.mul(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned);
            if (e3.isZero())
              return g;
            if (this.eq(I))
              return e3.isOdd() ? I : g;
            if (e3.eq(I))
              return this.isOdd() ? I : g;
            if (this.isNegative())
              return e3.isNegative() ? this.neg().mul(e3.neg()) : this.neg().mul(e3).neg();
            if (e3.isNegative())
              return this.mul(e3.neg()).neg();
            if (this.lt(m) && e3.lt(m))
              return s(this.toNumber() * e3.toNumber(), this.unsigned);
            var r3 = this.high >>> 16, o2 = 65535 & this.high, i2 = this.low >>> 16, a2 = 65535 & this.low, u2 = e3.high >>> 16, l2 = 65535 & e3.high, d2 = e3.low >>> 16, h2 = 65535 & e3.low, f2 = 0, E2 = 0, v2 = 0, y2 = 0;
            return v2 += (y2 += a2 * h2) >>> 16, E2 += (v2 += i2 * h2) >>> 16, v2 &= 65535, E2 += (v2 += a2 * d2) >>> 16, f2 += (E2 += o2 * h2) >>> 16, E2 &= 65535, f2 += (E2 += i2 * d2) >>> 16, E2 &= 65535, f2 += (E2 += a2 * l2) >>> 16, f2 += r3 * h2 + o2 * d2 + i2 * l2 + a2 * u2, c((v2 &= 65535) << 16 | (y2 &= 65535), (f2 &= 65535) << 16 | (E2 &= 65535), this.unsigned);
          }, O.mul = O.multiply, O.divide = function(e3) {
            if (n2(e3) || (e3 = p(e3)), e3.isZero())
              throw Error("division by zero");
            var r3, o2, i2;
            if (t2)
              return this.unsigned || -2147483648 !== this.high || -1 !== e3.low || -1 !== e3.high ? c((this.unsigned ? t2.div_u : t2.div_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this;
            if (this.isZero())
              return this.unsigned ? E : g;
            if (this.unsigned) {
              if (e3.unsigned || (e3 = e3.toUnsigned()), e3.gt(this))
                return E;
              if (e3.gt(this.shru(1)))
                return y;
              i2 = E;
            } else {
              if (this.eq(I))
                return e3.eq(v) || e3.eq(T) ? I : e3.eq(I) ? v : (r3 = this.shr(1).div(e3).shl(1)).eq(g) ? e3.isNegative() ? v : T : (o2 = this.sub(e3.mul(r3)), i2 = r3.add(o2.div(e3)));
              if (e3.eq(I))
                return this.unsigned ? E : g;
              if (this.isNegative())
                return e3.isNegative() ? this.neg().div(e3.neg()) : this.neg().div(e3).neg();
              if (e3.isNegative())
                return this.div(e3.neg()).neg();
              i2 = g;
            }
            for (o2 = this; o2.gte(e3); ) {
              r3 = Math.max(1, Math.floor(o2.toNumber() / e3.toNumber()));
              for (var a2 = Math.ceil(Math.log(r3) / Math.LN2), l2 = a2 <= 48 ? 1 : u(2, a2 - 48), d2 = s(r3), h2 = d2.mul(e3); h2.isNegative() || h2.gt(o2); )
                h2 = (d2 = s(r3 -= l2, this.unsigned)).mul(e3);
              d2.isZero() && (d2 = v), i2 = i2.add(d2), o2 = o2.sub(h2);
            }
            return i2;
          }, O.div = O.divide, O.modulo = function(e3) {
            return n2(e3) || (e3 = p(e3)), t2 ? c((this.unsigned ? t2.rem_u : t2.rem_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this.sub(this.div(e3).mul(e3));
          }, O.mod = O.modulo, O.rem = O.modulo, O.not = function() {
            return c(~this.low, ~this.high, this.unsigned);
          }, O.and = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low & e3.low, this.high & e3.high, this.unsigned);
          }, O.or = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low | e3.low, this.high | e3.high, this.unsigned);
          }, O.xor = function(e3) {
            return n2(e3) || (e3 = p(e3)), c(this.low ^ e3.low, this.high ^ e3.high, this.unsigned);
          }, O.shiftLeft = function(e3) {
            return n2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? c(this.low << e3, this.high << e3 | this.low >>> 32 - e3, this.unsigned) : c(0, this.low << e3 - 32, this.unsigned);
          }, O.shl = O.shiftLeft, O.shiftRight = function(e3) {
            return n2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? c(this.low >>> e3 | this.high << 32 - e3, this.high >> e3, this.unsigned) : c(this.high >> e3 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, O.shr = O.shiftRight, O.shiftRightUnsigned = function(e3) {
            if (n2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63))
              return this;
            var t3 = this.high;
            return e3 < 32 ? c(this.low >>> e3 | t3 << 32 - e3, t3 >>> e3, this.unsigned) : c(32 === e3 ? t3 : t3 >>> e3 - 32, 0, this.unsigned);
          }, O.shru = O.shiftRightUnsigned, O.shr_u = O.shiftRightUnsigned, O.toSigned = function() {
            return this.unsigned ? c(this.low, this.high, false) : this;
          }, O.toUnsigned = function() {
            return this.unsigned ? this : c(this.low, this.high, true);
          }, O.toBytes = function(e3) {
            return e3 ? this.toBytesLE() : this.toBytesBE();
          }, O.toBytesLE = function() {
            var e3 = this.high, t3 = this.low;
            return [255 & t3, t3 >>> 8 & 255, t3 >>> 16 & 255, t3 >>> 24, 255 & e3, e3 >>> 8 & 255, e3 >>> 16 & 255, e3 >>> 24];
          }, O.toBytesBE = function() {
            var e3 = this.high, t3 = this.low;
            return [e3 >>> 24, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3, t3 >>> 24, t3 >>> 16 & 255, t3 >>> 8 & 255, 255 & t3];
          }, r2.fromBytes = function(e3, t3, n3) {
            return n3 ? r2.fromBytesLE(e3, t3) : r2.fromBytesBE(e3, t3);
          }, r2.fromBytesLE = function(e3, t3) {
            return new r2(e3[0] | e3[1] << 8 | e3[2] << 16 | e3[3] << 24, e3[4] | e3[5] << 8 | e3[6] << 16 | e3[7] << 24, t3);
          }, r2.fromBytesBE = function(e3, t3) {
            return new r2(e3[4] << 24 | e3[5] << 16 | e3[6] << 8 | e3[7], e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], t3);
          };
        }, 3281: function(e2, t2, r2) {
          "use strict";
          e2.exports = r2(9050);
        }, 2967: function(e2) {
          "use strict";
          e2.exports = n2;
          var t2, r2 = /\/|\./;
          function n2(e3, t3) {
            r2.test(e3) || (e3 = "google/protobuf/" + e3 + ".proto", t3 = { nested: { google: { nested: { protobuf: { nested: t3 } } } } }), n2[e3] = t3;
          }
          n2("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), n2("duration", { Duration: t2 = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), n2("timestamp", { Timestamp: t2 }), n2("empty", { Empty: { fields: {} } }), n2("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), n2("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), n2("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), n2.get = function(e3) {
            return n2[e3] || null;
          };
        }, 3996: function(e2, t2, r2) {
          "use strict";
          var n2 = t2, o = r2(7025), i = r2(9935);
          function a(e3, t3, r3, n3) {
            if (t3.resolvedType)
              if (t3.resolvedType instanceof o) {
                e3("switch(d%s){", n3);
                for (var i2 = t3.resolvedType.values, a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2)
                  t3.repeated && i2[a2[s2]] === t3.typeDefault && e3("default:"), e3("case%j:", a2[s2])("case %i:", i2[a2[s2]])("m%s=%j", n3, i2[a2[s2]])("break");
                e3("}");
              } else
                e3('if(typeof d%s!=="object")', n3)("throw TypeError(%j)", t3.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n3, r3, n3);
            else {
              var c = false;
              switch (t3.type) {
                case "double":
                case "float":
                  e3("m%s=Number(d%s)", n3, n3);
                  break;
                case "uint32":
                case "fixed32":
                  e3("m%s=d%s>>>0", n3, n3);
                  break;
                case "int32":
                case "sint32":
                case "sfixed32":
                  e3("m%s=d%s|0", n3, n3);
                  break;
                case "uint64":
                  c = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e3("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n3, n3, c)('else if(typeof d%s==="string")', n3)("m%s=parseInt(d%s,10)", n3, n3)('else if(typeof d%s==="number")', n3)("m%s=d%s", n3, n3)('else if(typeof d%s==="object")', n3)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n3, n3, n3, c ? "true" : "");
                  break;
                case "bytes":
                  e3('if(typeof d%s==="string")', n3)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n3, n3, n3)("else if(d%s.length)", n3)("m%s=d%s", n3, n3);
                  break;
                case "string":
                  e3("m%s=String(d%s)", n3, n3);
                  break;
                case "bool":
                  e3("m%s=Boolean(d%s)", n3, n3);
              }
            }
            return e3;
          }
          function s(e3, t3, r3, n3) {
            if (t3.resolvedType)
              t3.resolvedType instanceof o ? e3("d%s=o.enums===String?types[%i].values[m%s]:m%s", n3, r3, n3, n3) : e3("d%s=types[%i].toObject(m%s,o)", n3, r3, n3);
            else {
              var i2 = false;
              switch (t3.type) {
                case "double":
                case "float":
                  e3("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n3, n3, n3, n3);
                  break;
                case "uint64":
                  i2 = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e3('if(typeof m%s==="number")', n3)("d%s=o.longs===String?String(m%s):m%s", n3, n3, n3)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n3, n3, n3, n3, i2 ? "true" : "", n3);
                  break;
                case "bytes":
                  e3("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n3, n3, n3, n3, n3);
                  break;
                default:
                  e3("d%s=m%s", n3, n3);
              }
            }
            return e3;
          }
          n2.fromObject = function(e3) {
            var t3 = e3.fieldsArray, r3 = i.codegen(["d"], e3.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
            if (!t3.length)
              return r3("return new this.ctor");
            r3("var m=new this.ctor");
            for (var n3 = 0; n3 < t3.length; ++n3) {
              var s2 = t3[n3].resolve(), c = i.safeProp(s2.name);
              s2.map ? (r3("if(d%s){", c)('if(typeof d%s!=="object")', c)("throw TypeError(%j)", s2.fullName + ": object expected")("m%s={}", c)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", c), a(r3, s2, n3, c + "[ks[i]]")("}")("}")) : s2.repeated ? (r3("if(d%s){", c)("if(!Array.isArray(d%s))", c)("throw TypeError(%j)", s2.fullName + ": array expected")("m%s=[]", c)("for(var i=0;i<d%s.length;++i){", c), a(r3, s2, n3, c + "[i]")("}")("}")) : (s2.resolvedType instanceof o || r3("if(d%s!=null){", c), a(r3, s2, n3, c), s2.resolvedType instanceof o || r3("}"));
            }
            return r3("return m");
          }, n2.toObject = function(e3) {
            var t3 = e3.fieldsArray.slice().sort(i.compareFieldsById);
            if (!t3.length)
              return i.codegen()("return {}");
            for (var r3 = i.codegen(["m", "o"], e3.name + "$toObject")("if(!o)")("o={}")("var d={}"), n3 = [], a2 = [], c = [], u = 0; u < t3.length; ++u)
              t3[u].partOf || (t3[u].resolve().repeated ? n3 : t3[u].map ? a2 : c).push(t3[u]);
            if (n3.length) {
              for (r3("if(o.arrays||o.defaults){"), u = 0; u < n3.length; ++u)
                r3("d%s=[]", i.safeProp(n3[u].name));
              r3("}");
            }
            if (a2.length) {
              for (r3("if(o.objects||o.defaults){"), u = 0; u < a2.length; ++u)
                r3("d%s={}", i.safeProp(a2[u].name));
              r3("}");
            }
            if (c.length) {
              for (r3("if(o.defaults){"), u = 0; u < c.length; ++u) {
                var l = c[u], p = i.safeProp(l.name);
                if (l.resolvedType instanceof o)
                  r3("d%s=o.enums===String?%j:%j", p, l.resolvedType.valuesById[l.typeDefault], l.typeDefault);
                else if (l.long)
                  r3("if(util.Long){")("var n=new util.Long(%i,%i,%j)", l.typeDefault.low, l.typeDefault.high, l.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", p)("}else")("d%s=o.longs===String?%j:%i", p, l.typeDefault.toString(), l.typeDefault.toNumber());
                else if (l.bytes) {
                  var d = "[" + Array.prototype.slice.call(l.typeDefault).join(",") + "]";
                  r3("if(o.bytes===String)d%s=%j", p, String.fromCharCode.apply(String, l.typeDefault))("else{")("d%s=%s", p, d)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", p, p)("}");
                } else
                  r3("d%s=%j", p, l.typeDefault);
              }
              r3("}");
            }
            var h = false;
            for (u = 0; u < t3.length; ++u) {
              l = t3[u];
              var f = e3._fieldsArray.indexOf(l);
              p = i.safeProp(l.name), l.map ? (h || (h = true, r3("var ks2")), r3("if(m%s&&(ks2=Object.keys(m%s)).length){", p, p)("d%s={}", p)("for(var j=0;j<ks2.length;++j){"), s(r3, l, f, p + "[ks2[j]]")("}")) : l.repeated ? (r3("if(m%s&&m%s.length){", p, p)("d%s=[]", p)("for(var j=0;j<m%s.length;++j){", p), s(r3, l, f, p + "[j]")("}")) : (r3("if(m%s!=null&&m.hasOwnProperty(%j)){", p, l.name), s(r3, l, f, p), l.partOf && r3("if(o.oneofs)")("d%s=%j", i.safeProp(l.partOf.name), l.name)), r3("}");
            }
            return r3("return d");
          };
        }, 5305: function(e2, t2, r2) {
          "use strict";
          e2.exports = function(e3) {
            var t3 = i.codegen(["r", "l"], e3.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e3.fieldsArray.filter(function(e4) {
              return e4.map;
            }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
            e3.group && t3("if((t&7)===4)")("break"), t3("switch(t>>>3){");
            for (var r3 = 0; r3 < e3.fieldsArray.length; ++r3) {
              var s = e3._fieldsArray[r3].resolve(), c = s.resolvedType instanceof n2 ? "int32" : s.type, u = "m" + i.safeProp(s.name);
              t3("case %i:", s.id), s.map ? (t3("if(%s===util.emptyObject)", u)("%s={}", u)("var c2 = r.uint32()+r.pos"), void 0 !== o.defaults[s.keyType] ? t3("k=%j", o.defaults[s.keyType]) : t3("k=null"), void 0 !== o.defaults[c] ? t3("value=%j", o.defaults[c]) : t3("value=null"), t3("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", s.keyType)("case 2:"), void 0 === o.basic[c] ? t3("value=types[%i].decode(r,r.uint32())", r3) : t3("value=r.%s()", c), t3("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), void 0 !== o.long[s.keyType] ? t3('%s[typeof k==="object"?util.longToHash(k):k]=value', u) : t3("%s[k]=value", u)) : s.repeated ? (t3("if(!(%s&&%s.length))", u, u)("%s=[]", u), void 0 !== o.packed[c] && t3("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", u, c)("}else"), void 0 === o.basic[c] ? t3(s.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", u, r3) : t3("%s.push(r.%s())", u, c)) : void 0 === o.basic[c] ? t3(s.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", u, r3) : t3("%s=r.%s()", u, c), t3("break");
            }
            for (t3("default:")("r.skipType(t&7)")("break")("}")("}"), r3 = 0; r3 < e3._fieldsArray.length; ++r3) {
              var l = e3._fieldsArray[r3];
              l.required && t3("if(!m.hasOwnProperty(%j))", l.name)("throw util.ProtocolError(%j,{instance:m})", a(l));
            }
            return t3("return m");
          };
          var n2 = r2(7025), o = r2(7063), i = r2(9935);
          function a(e3) {
            return "missing required '" + e3.name + "'";
          }
        }, 4928: function(e2, t2, r2) {
          "use strict";
          e2.exports = function(e3) {
            for (var t3, r3 = i.codegen(["m", "w"], e3.name + "$encode")("if(!w)")("w=Writer.create()"), s = e3.fieldsArray.slice().sort(i.compareFieldsById), c = 0; c < s.length; ++c) {
              var u = s[c].resolve(), l = e3._fieldsArray.indexOf(u), p = u.resolvedType instanceof n2 ? "int32" : u.type, d = o.basic[p];
              t3 = "m" + i.safeProp(u.name), u.map ? (r3("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t3, u.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t3)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (u.id << 3 | 2) >>> 0, 8 | o.mapKey[u.keyType], u.keyType), void 0 === d ? r3("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", l, t3) : r3(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | d, p, t3), r3("}")("}")) : u.repeated ? (r3("if(%s!=null&&%s.length){", t3, t3), u.packed && void 0 !== o.packed[p] ? r3("w.uint32(%i).fork()", (u.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t3)("w.%s(%s[i])", p, t3)("w.ldelim()") : (r3("for(var i=0;i<%s.length;++i)", t3), void 0 === d ? a(r3, u, l, t3 + "[i]") : r3("w.uint32(%i).%s(%s[i])", (u.id << 3 | d) >>> 0, p, t3)), r3("}")) : (u.optional && r3("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t3, u.name), void 0 === d ? a(r3, u, l, t3) : r3("w.uint32(%i).%s(%s)", (u.id << 3 | d) >>> 0, p, t3));
            }
            return r3("return w");
          };
          var n2 = r2(7025), o = r2(7063), i = r2(9935);
          function a(e3, t3, r3, n3) {
            return t3.resolvedType.group ? e3("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r3, n3, (t3.id << 3 | 3) >>> 0, (t3.id << 3 | 4) >>> 0) : e3("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r3, n3, (t3.id << 3 | 2) >>> 0);
          }
        }, 7025: function(e2, t2, r2) {
          "use strict";
          e2.exports = a;
          var n2 = r2(3243);
          ((a.prototype = Object.create(n2.prototype)).constructor = a).className = "Enum";
          var o = r2(9313), i = r2(9935);
          function a(e3, t3, r3, o2, i2) {
            if (n2.call(this, e3, r3), t3 && "object" != typeof t3)
              throw TypeError("values must be an object");
            if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = o2, this.comments = i2 || {}, this.reserved = void 0, t3)
              for (var a2 = Object.keys(t3), s = 0; s < a2.length; ++s)
                "number" == typeof t3[a2[s]] && (this.valuesById[this.values[a2[s]] = t3[a2[s]]] = a2[s]);
          }
          a.fromJSON = function(e3, t3) {
            var r3 = new a(e3, t3.values, t3.options, t3.comment, t3.comments);
            return r3.reserved = t3.reserved, r3;
          }, a.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return i.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t3 ? this.comment : void 0, "comments", t3 ? this.comments : void 0]);
          }, a.prototype.add = function(e3, t3, r3) {
            if (!i.isString(e3))
              throw TypeError("name must be a string");
            if (!i.isInteger(t3))
              throw TypeError("id must be an integer");
            if (void 0 !== this.values[e3])
              throw Error("duplicate name '" + e3 + "' in " + this);
            if (this.isReservedId(t3))
              throw Error("id " + t3 + " is reserved in " + this);
            if (this.isReservedName(e3))
              throw Error("name '" + e3 + "' is reserved in " + this);
            if (void 0 !== this.valuesById[t3]) {
              if (!this.options || !this.options.allow_alias)
                throw Error("duplicate id " + t3 + " in " + this);
              this.values[e3] = t3;
            } else
              this.valuesById[this.values[e3] = t3] = e3;
            return this.comments[e3] = r3 || null, this;
          }, a.prototype.remove = function(e3) {
            if (!i.isString(e3))
              throw TypeError("name must be a string");
            var t3 = this.values[e3];
            if (null == t3)
              throw Error("name '" + e3 + "' does not exist in " + this);
            return delete this.valuesById[t3], delete this.values[e3], delete this.comments[e3], this;
          }, a.prototype.isReservedId = function(e3) {
            return o.isReservedId(this.reserved, e3);
          }, a.prototype.isReservedName = function(e3) {
            return o.isReservedName(this.reserved, e3);
          };
        }, 3548: function(e2, t2, r2) {
          "use strict";
          e2.exports = u;
          var n2 = r2(3243);
          ((u.prototype = Object.create(n2.prototype)).constructor = u).className = "Field";
          var o, i = r2(7025), a = r2(7063), s = r2(9935), c = /^required|optional|repeated$/;
          function u(e3, t3, r3, o2, i2, u2, l) {
            if (s.isObject(o2) ? (l = i2, u2 = o2, o2 = i2 = void 0) : s.isObject(i2) && (l = u2, u2 = i2, i2 = void 0), n2.call(this, e3, u2), !s.isInteger(t3) || t3 < 0)
              throw TypeError("id must be a non-negative integer");
            if (!s.isString(r3))
              throw TypeError("type must be a string");
            if (void 0 !== o2 && !c.test(o2 = o2.toString().toLowerCase()))
              throw TypeError("rule must be a string rule");
            if (void 0 !== i2 && !s.isString(i2))
              throw TypeError("extend must be a string");
            "proto3_optional" === o2 && (o2 = "optional"), this.rule = o2 && "optional" !== o2 ? o2 : void 0, this.type = r3, this.id = t3, this.extend = i2 || void 0, this.required = "required" === o2, this.optional = !this.required, this.repeated = "repeated" === o2, this.map = false, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!s.Long && void 0 !== a.long[r3], this.bytes = "bytes" === r3, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = l;
          }
          u.fromJSON = function(e3, t3) {
            return new u(e3, t3.id, t3.type, t3.rule, t3.extend, t3.options, t3.comment);
          }, Object.defineProperty(u.prototype, "packed", { get: function() {
            return null === this._packed && (this._packed = false !== this.getOption("packed")), this._packed;
          } }), u.prototype.setOption = function(e3, t3, r3) {
            return "packed" === e3 && (this._packed = null), n2.prototype.setOption.call(this, e3, t3, r3);
          }, u.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return s.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, u.prototype.resolve = function() {
            if (this.resolved)
              return this;
            if (void 0 === (this.typeDefault = a.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof o ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof i && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (true !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof i) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long)
              this.typeDefault = s.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
            else if (this.bytes && "string" == typeof this.typeDefault) {
              var e3;
              s.base64.test(this.typeDefault) ? s.base64.decode(this.typeDefault, e3 = s.newBuffer(s.base64.length(this.typeDefault)), 0) : s.utf8.write(this.typeDefault, e3 = s.newBuffer(s.utf8.length(this.typeDefault)), 0), this.typeDefault = e3;
            }
            return this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof o && (this.parent.ctor.prototype[this.name] = this.defaultValue), n2.prototype.resolve.call(this);
          }, u.d = function(e3, t3, r3, n3) {
            return "function" == typeof t3 ? t3 = s.decorateType(t3).name : t3 && "object" == typeof t3 && (t3 = s.decorateEnum(t3).name), function(o2, i2) {
              s.decorateType(o2.constructor).add(new u(i2, e3, t3, r3, { default: n3 }));
            };
          }, u._configure = function(e3) {
            o = e3;
          };
        }, 8836: function(e2, t2, r2) {
          "use strict";
          var n2 = e2.exports = r2(9482);
          n2.build = "light", n2.load = function(e3, t3, r3) {
            return "function" == typeof t3 ? (r3 = t3, t3 = new n2.Root()) : t3 || (t3 = new n2.Root()), t3.load(e3, r3);
          }, n2.loadSync = function(e3, t3) {
            return t3 || (t3 = new n2.Root()), t3.loadSync(e3);
          }, n2.encoder = r2(4928), n2.decoder = r2(5305), n2.verifier = r2(4497), n2.converter = r2(3996), n2.ReflectionObject = r2(3243), n2.Namespace = r2(9313), n2.Root = r2(9424), n2.Enum = r2(7025), n2.Type = r2(7645), n2.Field = r2(3548), n2.OneOf = r2(7598), n2.MapField = r2(6039), n2.Service = r2(7513), n2.Method = r2(4429), n2.Message = r2(8368), n2.wrappers = r2(1667), n2.types = r2(7063), n2.util = r2(9935), n2.ReflectionObject._configure(n2.Root), n2.Namespace._configure(n2.Type, n2.Service, n2.Enum), n2.Root._configure(n2.Type), n2.Field._configure(n2.Type);
        }, 9482: function(e2, t2, r2) {
          "use strict";
          var n2 = t2;
          function o() {
            n2.util._configure(), n2.Writer._configure(n2.BufferWriter), n2.Reader._configure(n2.BufferReader);
          }
          n2.build = "minimal", n2.Writer = r2(1173), n2.BufferWriter = r2(3155), n2.Reader = r2(1408), n2.BufferReader = r2(593), n2.util = r2(9693), n2.rpc = r2(5994), n2.roots = r2(5054), n2.configure = o, o();
        }, 9050: function(e2, t2, r2) {
          "use strict";
          var n2 = e2.exports = r2(8836);
          n2.build = "full", n2.tokenize = r2(626), n2.parse = r2(2228), n2.common = r2(2967), n2.Root._configure(n2.Type, n2.parse, n2.common);
        }, 6039: function(e2, t2, r2) {
          "use strict";
          e2.exports = a;
          var n2 = r2(3548);
          ((a.prototype = Object.create(n2.prototype)).constructor = a).className = "MapField";
          var o = r2(7063), i = r2(9935);
          function a(e3, t3, r3, o2, a2, s) {
            if (n2.call(this, e3, t3, o2, void 0, void 0, a2, s), !i.isString(r3))
              throw TypeError("keyType must be a string");
            this.keyType = r3, this.resolvedKeyType = null, this.map = true;
          }
          a.fromJSON = function(e3, t3) {
            return new a(e3, t3.id, t3.keyType, t3.type, t3.options, t3.comment);
          }, a.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return i.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, a.prototype.resolve = function() {
            if (this.resolved)
              return this;
            if (void 0 === o.mapKey[this.keyType])
              throw Error("invalid key type: " + this.keyType);
            return n2.prototype.resolve.call(this);
          }, a.d = function(e3, t3, r3) {
            return "function" == typeof r3 ? r3 = i.decorateType(r3).name : r3 && "object" == typeof r3 && (r3 = i.decorateEnum(r3).name), function(n3, o2) {
              i.decorateType(n3.constructor).add(new a(o2, e3, t3, r3));
            };
          };
        }, 8368: function(e2, t2, r2) {
          "use strict";
          e2.exports = o;
          var n2 = r2(9693);
          function o(e3) {
            if (e3)
              for (var t3 = Object.keys(e3), r3 = 0; r3 < t3.length; ++r3)
                this[t3[r3]] = e3[t3[r3]];
          }
          o.create = function(e3) {
            return this.$type.create(e3);
          }, o.encode = function(e3, t3) {
            return this.$type.encode(e3, t3);
          }, o.encodeDelimited = function(e3, t3) {
            return this.$type.encodeDelimited(e3, t3);
          }, o.decode = function(e3) {
            return this.$type.decode(e3);
          }, o.decodeDelimited = function(e3) {
            return this.$type.decodeDelimited(e3);
          }, o.verify = function(e3) {
            return this.$type.verify(e3);
          }, o.fromObject = function(e3) {
            return this.$type.fromObject(e3);
          }, o.toObject = function(e3, t3) {
            return this.$type.toObject(e3, t3);
          }, o.prototype.toJSON = function() {
            return this.$type.toObject(this, n2.toJSONOptions);
          };
        }, 4429: function(e2, t2, r2) {
          "use strict";
          e2.exports = i;
          var n2 = r2(3243);
          ((i.prototype = Object.create(n2.prototype)).constructor = i).className = "Method";
          var o = r2(9935);
          function i(e3, t3, r3, i2, a, s, c, u, l) {
            if (o.isObject(a) ? (c = a, a = s = void 0) : o.isObject(s) && (c = s, s = void 0), void 0 !== t3 && !o.isString(t3))
              throw TypeError("type must be a string");
            if (!o.isString(r3))
              throw TypeError("requestType must be a string");
            if (!o.isString(i2))
              throw TypeError("responseType must be a string");
            n2.call(this, e3, c), this.type = t3 || "rpc", this.requestType = r3, this.requestStream = !!a || void 0, this.responseType = i2, this.responseStream = !!s || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = u, this.parsedOptions = l;
          }
          i.fromJSON = function(e3, t3) {
            return new i(e3, t3.type, t3.requestType, t3.responseType, t3.requestStream, t3.responseStream, t3.options, t3.comment, t3.parsedOptions);
          }, i.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return o.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t3 ? this.comment : void 0, "parsedOptions", this.parsedOptions]);
          }, i.prototype.resolve = function() {
            return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), n2.prototype.resolve.call(this));
          };
        }, 9313: function(e2, t2, r2) {
          "use strict";
          e2.exports = p;
          var n2 = r2(3243);
          ((p.prototype = Object.create(n2.prototype)).constructor = p).className = "Namespace";
          var o, i, a, s = r2(3548), c = r2(7598), u = r2(9935);
          function l(e3, t3) {
            if (e3 && e3.length) {
              for (var r3 = {}, n3 = 0; n3 < e3.length; ++n3)
                r3[e3[n3].name] = e3[n3].toJSON(t3);
              return r3;
            }
          }
          function p(e3, t3) {
            n2.call(this, e3, t3), this.nested = void 0, this._nestedArray = null;
          }
          function d(e3) {
            return e3._nestedArray = null, e3;
          }
          p.fromJSON = function(e3, t3) {
            return new p(e3, t3.options).addJSON(t3.nested);
          }, p.arrayToJSON = l, p.isReservedId = function(e3, t3) {
            if (e3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                if ("string" != typeof e3[r3] && e3[r3][0] <= t3 && e3[r3][1] > t3)
                  return true;
            }
            return false;
          }, p.isReservedName = function(e3, t3) {
            if (e3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                if (e3[r3] === t3)
                  return true;
            }
            return false;
          }, Object.defineProperty(p.prototype, "nestedArray", { get: function() {
            return this._nestedArray || (this._nestedArray = u.toArray(this.nested));
          } }), p.prototype.toJSON = function(e3) {
            return u.toObject(["options", this.options, "nested", l(this.nestedArray, e3)]);
          }, p.prototype.addJSON = function(e3) {
            if (e3)
              for (var t3, r3 = Object.keys(e3), n3 = 0; n3 < r3.length; ++n3)
                t3 = e3[r3[n3]], this.add((void 0 !== t3.fields ? o.fromJSON : void 0 !== t3.values ? a.fromJSON : void 0 !== t3.methods ? i.fromJSON : void 0 !== t3.id ? s.fromJSON : p.fromJSON)(r3[n3], t3));
            return this;
          }, p.prototype.get = function(e3) {
            return this.nested && this.nested[e3] || null;
          }, p.prototype.getEnum = function(e3) {
            if (this.nested && this.nested[e3] instanceof a)
              return this.nested[e3].values;
            throw Error("no such enum: " + e3);
          }, p.prototype.add = function(e3) {
            if (!(e3 instanceof s && void 0 !== e3.extend || e3 instanceof o || e3 instanceof a || e3 instanceof i || e3 instanceof p || e3 instanceof c))
              throw TypeError("object must be a valid nested object");
            if (this.nested) {
              var t3 = this.get(e3.name);
              if (t3) {
                if (!(t3 instanceof p && e3 instanceof p) || t3 instanceof o || t3 instanceof i)
                  throw Error("duplicate name '" + e3.name + "' in " + this);
                for (var r3 = t3.nestedArray, n3 = 0; n3 < r3.length; ++n3)
                  e3.add(r3[n3]);
                this.remove(t3), this.nested || (this.nested = {}), e3.setOptions(t3.options, true);
              }
            } else
              this.nested = {};
            return this.nested[e3.name] = e3, e3.onAdd(this), d(this);
          }, p.prototype.remove = function(e3) {
            if (!(e3 instanceof n2))
              throw TypeError("object must be a ReflectionObject");
            if (e3.parent !== this)
              throw Error(e3 + " is not a member of " + this);
            return delete this.nested[e3.name], Object.keys(this.nested).length || (this.nested = void 0), e3.onRemove(this), d(this);
          }, p.prototype.define = function(e3, t3) {
            if (u.isString(e3))
              e3 = e3.split(".");
            else if (!Array.isArray(e3))
              throw TypeError("illegal path");
            if (e3 && e3.length && "" === e3[0])
              throw Error("path must be relative");
            for (var r3 = this; e3.length > 0; ) {
              var n3 = e3.shift();
              if (r3.nested && r3.nested[n3]) {
                if (!((r3 = r3.nested[n3]) instanceof p))
                  throw Error("path conflicts with non-namespace objects");
              } else
                r3.add(r3 = new p(n3));
            }
            return t3 && r3.addJSON(t3), r3;
          }, p.prototype.resolveAll = function() {
            for (var e3 = this.nestedArray, t3 = 0; t3 < e3.length; )
              e3[t3] instanceof p ? e3[t3++].resolveAll() : e3[t3++].resolve();
            return this.resolve();
          }, p.prototype.lookup = function(e3, t3, r3) {
            if ("boolean" == typeof t3 ? (r3 = t3, t3 = void 0) : t3 && !Array.isArray(t3) && (t3 = [t3]), u.isString(e3) && e3.length) {
              if ("." === e3)
                return this.root;
              e3 = e3.split(".");
            } else if (!e3.length)
              return this;
            if ("" === e3[0])
              return this.root.lookup(e3.slice(1), t3);
            var n3 = this.get(e3[0]);
            if (n3) {
              if (1 === e3.length) {
                if (!t3 || t3.indexOf(n3.constructor) > -1)
                  return n3;
              } else if (n3 instanceof p && (n3 = n3.lookup(e3.slice(1), t3, true)))
                return n3;
            } else
              for (var o2 = 0; o2 < this.nestedArray.length; ++o2)
                if (this._nestedArray[o2] instanceof p && (n3 = this._nestedArray[o2].lookup(e3, t3, true)))
                  return n3;
            return null === this.parent || r3 ? null : this.parent.lookup(e3, t3);
          }, p.prototype.lookupType = function(e3) {
            var t3 = this.lookup(e3, [o]);
            if (!t3)
              throw Error("no such type: " + e3);
            return t3;
          }, p.prototype.lookupEnum = function(e3) {
            var t3 = this.lookup(e3, [a]);
            if (!t3)
              throw Error("no such Enum '" + e3 + "' in " + this);
            return t3;
          }, p.prototype.lookupTypeOrEnum = function(e3) {
            var t3 = this.lookup(e3, [o, a]);
            if (!t3)
              throw Error("no such Type or Enum '" + e3 + "' in " + this);
            return t3;
          }, p.prototype.lookupService = function(e3) {
            var t3 = this.lookup(e3, [i]);
            if (!t3)
              throw Error("no such Service '" + e3 + "' in " + this);
            return t3;
          }, p._configure = function(e3, t3, r3) {
            o = e3, i = t3, a = r3;
          };
        }, 3243: function(e2, t2, r2) {
          "use strict";
          e2.exports = i, i.className = "ReflectionObject";
          var n2, o = r2(9935);
          function i(e3, t3) {
            if (!o.isString(e3))
              throw TypeError("name must be a string");
            if (t3 && !o.isObject(t3))
              throw TypeError("options must be an object");
            this.options = t3, this.parsedOptions = null, this.name = e3, this.parent = null, this.resolved = false, this.comment = null, this.filename = null;
          }
          Object.defineProperties(i.prototype, { root: { get: function() {
            for (var e3 = this; null !== e3.parent; )
              e3 = e3.parent;
            return e3;
          } }, fullName: { get: function() {
            for (var e3 = [this.name], t3 = this.parent; t3; )
              e3.unshift(t3.name), t3 = t3.parent;
            return e3.join(".");
          } } }), i.prototype.toJSON = function() {
            throw Error();
          }, i.prototype.onAdd = function(e3) {
            this.parent && this.parent !== e3 && this.parent.remove(this), this.parent = e3, this.resolved = false;
            var t3 = e3.root;
            t3 instanceof n2 && t3._handleAdd(this);
          }, i.prototype.onRemove = function(e3) {
            var t3 = e3.root;
            t3 instanceof n2 && t3._handleRemove(this), this.parent = null, this.resolved = false;
          }, i.prototype.resolve = function() {
            return this.resolved || this.root instanceof n2 && (this.resolved = true), this;
          }, i.prototype.getOption = function(e3) {
            if (this.options)
              return this.options[e3];
          }, i.prototype.setOption = function(e3, t3, r3) {
            return r3 && this.options && void 0 !== this.options[e3] || ((this.options || (this.options = {}))[e3] = t3), this;
          }, i.prototype.setParsedOption = function(e3, t3, r3) {
            this.parsedOptions || (this.parsedOptions = []);
            var n3 = this.parsedOptions;
            if (r3) {
              var i2 = n3.find(function(t4) {
                return Object.prototype.hasOwnProperty.call(t4, e3);
              });
              if (i2) {
                var a = i2[e3];
                o.setProperty(a, r3, t3);
              } else
                (i2 = {})[e3] = o.setProperty({}, r3, t3), n3.push(i2);
            } else {
              var s = {};
              s[e3] = t3, n3.push(s);
            }
            return this;
          }, i.prototype.setOptions = function(e3, t3) {
            if (e3)
              for (var r3 = Object.keys(e3), n3 = 0; n3 < r3.length; ++n3)
                this.setOption(r3[n3], e3[r3[n3]], t3);
            return this;
          }, i.prototype.toString = function() {
            var e3 = this.constructor.className, t3 = this.fullName;
            return t3.length ? e3 + " " + t3 : e3;
          }, i._configure = function(e3) {
            n2 = e3;
          };
        }, 7598: function(e2, t2, r2) {
          "use strict";
          e2.exports = a;
          var n2 = r2(3243);
          ((a.prototype = Object.create(n2.prototype)).constructor = a).className = "OneOf";
          var o = r2(3548), i = r2(9935);
          function a(e3, t3, r3, o2) {
            if (Array.isArray(t3) || (r3 = t3, t3 = void 0), n2.call(this, e3, r3), void 0 !== t3 && !Array.isArray(t3))
              throw TypeError("fieldNames must be an Array");
            this.oneof = t3 || [], this.fieldsArray = [], this.comment = o2;
          }
          function s(e3) {
            if (e3.parent)
              for (var t3 = 0; t3 < e3.fieldsArray.length; ++t3)
                e3.fieldsArray[t3].parent || e3.parent.add(e3.fieldsArray[t3]);
          }
          a.fromJSON = function(e3, t3) {
            return new a(e3, t3.oneof, t3.options, t3.comment);
          }, a.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return i.toObject(["options", this.options, "oneof", this.oneof, "comment", t3 ? this.comment : void 0]);
          }, a.prototype.add = function(e3) {
            if (!(e3 instanceof o))
              throw TypeError("field must be a Field");
            return e3.parent && e3.parent !== this.parent && e3.parent.remove(e3), this.oneof.push(e3.name), this.fieldsArray.push(e3), e3.partOf = this, s(this), this;
          }, a.prototype.remove = function(e3) {
            if (!(e3 instanceof o))
              throw TypeError("field must be a Field");
            var t3 = this.fieldsArray.indexOf(e3);
            if (t3 < 0)
              throw Error(e3 + " is not a member of " + this);
            return this.fieldsArray.splice(t3, 1), (t3 = this.oneof.indexOf(e3.name)) > -1 && this.oneof.splice(t3, 1), e3.partOf = null, this;
          }, a.prototype.onAdd = function(e3) {
            n2.prototype.onAdd.call(this, e3);
            for (var t3 = 0; t3 < this.oneof.length; ++t3) {
              var r3 = e3.get(this.oneof[t3]);
              r3 && !r3.partOf && (r3.partOf = this, this.fieldsArray.push(r3));
            }
            s(this);
          }, a.prototype.onRemove = function(e3) {
            for (var t3, r3 = 0; r3 < this.fieldsArray.length; ++r3)
              (t3 = this.fieldsArray[r3]).parent && t3.parent.remove(t3);
            n2.prototype.onRemove.call(this, e3);
          }, a.d = function() {
            for (var e3 = new Array(arguments.length), t3 = 0; t3 < arguments.length; )
              e3[t3] = arguments[t3++];
            return function(t4, r3) {
              i.decorateType(t4.constructor).add(new a(r3, e3)), Object.defineProperty(t4, r3, { get: i.oneOfGetter(e3), set: i.oneOfSetter(e3) });
            };
          };
        }, 2228: function(e2, t2, r2) {
          "use strict";
          e2.exports = O, O.filename = null, O.defaults = { keepCase: false };
          var n2 = r2(626), o = r2(9424), i = r2(7645), a = r2(3548), s = r2(6039), c = r2(7598), u = r2(7025), l = r2(7513), p = r2(4429), d = r2(7063), h = r2(9935), f = /^[1-9][0-9]*$/, m = /^-?[1-9][0-9]*$/, g = /^0[x][0-9a-fA-F]+$/, E = /^-?0[x][0-9a-fA-F]+$/, v = /^0[0-7]+$/, y = /^-?0[0-7]+$/, T = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, _ = /^[a-zA-Z_][a-zA-Z_0-9]*$/, R = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, I = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
          function O(e3, t3, r3) {
            t3 instanceof o || (r3 = t3, t3 = new o()), r3 || (r3 = O.defaults);
            var S, A, C, N, b, M = r3.preferTrailingComment || false, k = n2(e3, r3.alternateCommentMode || false), w = k.next, U = k.push, P = k.peek, x = k.skip, L = k.cmnt, D = true, j = false, G = t3, B = r3.keepCase ? function(e4) {
              return e4;
            } : h.camelCase;
            function H(e4, t4, r4) {
              var n3 = O.filename;
              return r4 || (O.filename = null), Error("illegal " + (t4 || "token") + " '" + e4 + "' (" + (n3 ? n3 + ", " : "") + "line " + k.line + ")");
            }
            function F() {
              var e4, t4 = [];
              do {
                if ('"' !== (e4 = w()) && "'" !== e4)
                  throw H(e4);
                t4.push(w()), x(e4), e4 = P();
              } while ('"' === e4 || "'" === e4);
              return t4.join("");
            }
            function W(e4) {
              var t4 = w();
              switch (t4) {
                case "'":
                case '"':
                  return U(t4), F();
                case "true":
                case "TRUE":
                  return true;
                case "false":
                case "FALSE":
                  return false;
              }
              try {
                return function(e5, t5) {
                  var r4 = 1;
                  switch ("-" === e5.charAt(0) && (r4 = -1, e5 = e5.substring(1)), e5) {
                    case "inf":
                    case "INF":
                    case "Inf":
                      return r4 * (1 / 0);
                    case "nan":
                    case "NAN":
                    case "Nan":
                    case "NaN":
                      return NaN;
                    case "0":
                      return 0;
                  }
                  if (f.test(e5))
                    return r4 * parseInt(e5, 10);
                  if (g.test(e5))
                    return r4 * parseInt(e5, 16);
                  if (v.test(e5))
                    return r4 * parseInt(e5, 8);
                  if (T.test(e5))
                    return r4 * parseFloat(e5);
                  throw H(e5, "number", true);
                }(t4);
              } catch (r4) {
                if (e4 && R.test(t4))
                  return t4;
                throw H(t4, "value");
              }
            }
            function Z(e4, t4) {
              var r4, n3;
              do {
                !t4 || '"' !== (r4 = P()) && "'" !== r4 ? e4.push([n3 = K(w()), x("to", true) ? K(w()) : n3]) : e4.push(F());
              } while (x(",", true));
              x(";");
            }
            function K(e4, t4) {
              switch (e4) {
                case "max":
                case "MAX":
                case "Max":
                  return 536870911;
                case "0":
                  return 0;
              }
              if (!t4 && "-" === e4.charAt(0))
                throw H(e4, "id");
              if (m.test(e4))
                return parseInt(e4, 10);
              if (E.test(e4))
                return parseInt(e4, 16);
              if (y.test(e4))
                return parseInt(e4, 8);
              throw H(e4, "id");
            }
            function q() {
              if (void 0 !== S)
                throw H("package");
              if (S = w(), !R.test(S))
                throw H(S, "name");
              G = G.define(S), x(";");
            }
            function z() {
              var e4, t4 = P();
              switch (t4) {
                case "weak":
                  e4 = C || (C = []), w();
                  break;
                case "public":
                  w();
                default:
                  e4 = A || (A = []);
              }
              t4 = F(), x(";"), e4.push(t4);
            }
            function V() {
              if (x("="), N = F(), !(j = "proto3" === N) && "proto2" !== N)
                throw H(N, "syntax");
              x(";");
            }
            function X(e4, t4) {
              switch (t4) {
                case "option":
                  return Q(e4, t4), x(";"), true;
                case "message":
                  return function(e5, t5) {
                    if (!_.test(t5 = w()))
                      throw H(t5, "type name");
                    var r4 = new i(t5);
                    J(r4, function(e6) {
                      if (!X(r4, e6))
                        switch (e6) {
                          case "map":
                            !function(e7) {
                              x("<");
                              var t6 = w();
                              if (void 0 === d.mapKey[t6])
                                throw H(t6, "type");
                              x(",");
                              var r5 = w();
                              if (!R.test(r5))
                                throw H(r5, "type");
                              x(">");
                              var n3 = w();
                              if (!_.test(n3))
                                throw H(n3, "name");
                              x("=");
                              var o2 = new s(B(n3), K(w()), t6, r5);
                              J(o2, function(e8) {
                                if ("option" !== e8)
                                  throw H(e8);
                                Q(o2, e8), x(";");
                              }, function() {
                                te(o2);
                              }), e7.add(o2);
                            }(r4);
                            break;
                          case "required":
                          case "repeated":
                            Y(r4, e6);
                            break;
                          case "optional":
                            Y(r4, j ? "proto3_optional" : "optional");
                            break;
                          case "oneof":
                            !function(e7, t6) {
                              if (!_.test(t6 = w()))
                                throw H(t6, "name");
                              var r5 = new c(B(t6));
                              J(r5, function(e8) {
                                "option" === e8 ? (Q(r5, e8), x(";")) : (U(e8), Y(r5, "optional"));
                              }), e7.add(r5);
                            }(r4, e6);
                            break;
                          case "extensions":
                            Z(r4.extensions || (r4.extensions = []));
                            break;
                          case "reserved":
                            Z(r4.reserved || (r4.reserved = []), true);
                            break;
                          default:
                            if (!j || !R.test(e6))
                              throw H(e6);
                            U(e6), Y(r4, "optional");
                        }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "enum":
                  return function(e5, t5) {
                    if (!_.test(t5 = w()))
                      throw H(t5, "name");
                    var r4 = new u(t5);
                    J(r4, function(e6) {
                      switch (e6) {
                        case "option":
                          Q(r4, e6), x(";");
                          break;
                        case "reserved":
                          Z(r4.reserved || (r4.reserved = []), true);
                          break;
                        default:
                          !function(e7, t6) {
                            if (!_.test(t6))
                              throw H(t6, "name");
                            x("=");
                            var r5 = K(w(), true), n3 = {};
                            J(n3, function(e8) {
                              if ("option" !== e8)
                                throw H(e8);
                              Q(n3, e8), x(";");
                            }, function() {
                              te(n3);
                            }), e7.add(t6, r5, n3.comment);
                          }(r4, e6);
                      }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "service":
                  return function(e5, t5) {
                    if (!_.test(t5 = w()))
                      throw H(t5, "service name");
                    var r4 = new l(t5);
                    J(r4, function(e6) {
                      if (!X(r4, e6)) {
                        if ("rpc" !== e6)
                          throw H(e6);
                        !function(e7, t6) {
                          var r5 = L(), n3 = t6;
                          if (!_.test(t6 = w()))
                            throw H(t6, "name");
                          var o2, i2, a2, s2, c2 = t6;
                          if (x("("), x("stream", true) && (i2 = true), !R.test(t6 = w()))
                            throw H(t6);
                          if (o2 = t6, x(")"), x("returns"), x("("), x("stream", true) && (s2 = true), !R.test(t6 = w()))
                            throw H(t6);
                          a2 = t6, x(")");
                          var u2 = new p(c2, n3, o2, a2, i2, s2);
                          u2.comment = r5, J(u2, function(e8) {
                            if ("option" !== e8)
                              throw H(e8);
                            Q(u2, e8), x(";");
                          }), e7.add(u2);
                        }(r4, e6);
                      }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "extend":
                  return function(e5, t5) {
                    if (!R.test(t5 = w()))
                      throw H(t5, "reference");
                    var r4 = t5;
                    J(null, function(t6) {
                      switch (t6) {
                        case "required":
                        case "repeated":
                          Y(e5, t6, r4);
                          break;
                        case "optional":
                          Y(e5, j ? "proto3_optional" : "optional", r4);
                          break;
                        default:
                          if (!j || !R.test(t6))
                            throw H(t6);
                          U(t6), Y(e5, "optional", r4);
                      }
                    });
                  }(e4, t4), true;
              }
              return false;
            }
            function J(e4, t4, r4) {
              var n3 = k.line;
              if (e4 && ("string" != typeof e4.comment && (e4.comment = L()), e4.filename = O.filename), x("{", true)) {
                for (var o2; "}" !== (o2 = w()); )
                  t4(o2);
                x(";", true);
              } else
                r4 && r4(), x(";"), e4 && ("string" != typeof e4.comment || M) && (e4.comment = L(n3) || e4.comment);
            }
            function Y(e4, t4, r4) {
              var n3 = w();
              if ("group" !== n3) {
                if (!R.test(n3))
                  throw H(n3, "type");
                var o2 = w();
                if (!_.test(o2))
                  throw H(o2, "name");
                o2 = B(o2), x("=");
                var s2 = new a(o2, K(w()), n3, t4, r4);
                if (J(s2, function(e5) {
                  if ("option" !== e5)
                    throw H(e5);
                  Q(s2, e5), x(";");
                }, function() {
                  te(s2);
                }), "proto3_optional" === t4) {
                  var u2 = new c("_" + o2);
                  s2.setOption("proto3_optional", true), u2.add(s2), e4.add(u2);
                } else
                  e4.add(s2);
                j || !s2.repeated || void 0 === d.packed[n3] && void 0 !== d.basic[n3] || s2.setOption("packed", false, true);
              } else
                !function(e5, t5) {
                  var r5 = w();
                  if (!_.test(r5))
                    throw H(r5, "name");
                  var n4 = h.lcFirst(r5);
                  r5 === n4 && (r5 = h.ucFirst(r5)), x("=");
                  var o3 = K(w()), s3 = new i(r5);
                  s3.group = true;
                  var c2 = new a(n4, o3, r5, t5);
                  c2.filename = O.filename, J(s3, function(e6) {
                    switch (e6) {
                      case "option":
                        Q(s3, e6), x(";");
                        break;
                      case "required":
                      case "repeated":
                        Y(s3, e6);
                        break;
                      case "optional":
                        Y(s3, j ? "proto3_optional" : "optional");
                        break;
                      default:
                        throw H(e6);
                    }
                  }), e5.add(s3).add(c2);
                }(e4, t4);
            }
            function Q(e4, t4) {
              var r4 = x("(", true);
              if (!R.test(t4 = w()))
                throw H(t4, "name");
              var n3, o2 = t4, i2 = o2;
              r4 && (x(")"), i2 = o2 = "(" + o2 + ")", t4 = P(), I.test(t4) && (n3 = t4.substr(1), o2 += t4, w())), x("="), function(e5, t5, r5, n4) {
                e5.setParsedOption && e5.setParsedOption(t5, r5, n4);
              }(e4, i2, $2(e4, o2), n3);
            }
            function $2(e4, t4) {
              if (x("{", true)) {
                for (var r4 = {}; !x("}", true); ) {
                  if (!_.test(b = w()))
                    throw H(b, "name");
                  var n3, o2 = b;
                  "{" === P() ? n3 = $2(e4, t4 + "." + b) : (x(":"), "{" === P() ? n3 = $2(e4, t4 + "." + b) : (n3 = W(true), ee(e4, t4 + "." + b, n3)));
                  var i2 = r4[o2];
                  i2 && (n3 = [].concat(i2).concat(n3)), r4[o2] = n3, x(",", true);
                }
                return r4;
              }
              var a2 = W(true);
              return ee(e4, t4, a2), a2;
            }
            function ee(e4, t4, r4) {
              e4.setOption && e4.setOption(t4, r4);
            }
            function te(e4) {
              if (x("[", true)) {
                do {
                  Q(e4, "option");
                } while (x(",", true));
                x("]");
              }
              return e4;
            }
            for (; null !== (b = w()); )
              switch (b) {
                case "package":
                  if (!D)
                    throw H(b);
                  q();
                  break;
                case "import":
                  if (!D)
                    throw H(b);
                  z();
                  break;
                case "syntax":
                  if (!D)
                    throw H(b);
                  V();
                  break;
                case "option":
                  Q(G, b), x(";");
                  break;
                default:
                  if (X(G, b)) {
                    D = false;
                    continue;
                  }
                  throw H(b);
              }
            return O.filename = null, { package: S, imports: A, weakImports: C, syntax: N, root: t3 };
          }
        }, 1408: function(e2, t2, r2) {
          "use strict";
          e2.exports = c;
          var n2, o = r2(9693), i = o.LongBits, a = o.utf8;
          function s(e3, t3) {
            return RangeError("index out of range: " + e3.pos + " + " + (t3 || 1) + " > " + e3.len);
          }
          function c(e3) {
            this.buf = e3, this.pos = 0, this.len = e3.length;
          }
          var u, l = "undefined" != typeof Uint8Array ? function(e3) {
            if (e3 instanceof Uint8Array || Array.isArray(e3))
              return new c(e3);
            throw Error("illegal buffer");
          } : function(e3) {
            if (Array.isArray(e3))
              return new c(e3);
            throw Error("illegal buffer");
          }, p = function() {
            return o.Buffer ? function(e3) {
              return (c.create = function(e4) {
                return o.Buffer.isBuffer(e4) ? new n2(e4) : l(e4);
              })(e3);
            } : l;
          };
          function d() {
            var e3 = new i(0, 0), t3 = 0;
            if (!(this.len - this.pos > 4)) {
              for (; t3 < 3; ++t3) {
                if (this.pos >= this.len)
                  throw s(this);
                if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 7 * t3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
              }
              return e3.lo = (e3.lo | (127 & this.buf[this.pos++]) << 7 * t3) >>> 0, e3;
            }
            for (; t3 < 4; ++t3)
              if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 7 * t3) >>> 0, this.buf[this.pos++] < 128)
                return e3;
            if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e3.hi = (e3.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
              return e3;
            if (t3 = 0, this.len - this.pos > 4) {
              for (; t3 < 5; ++t3)
                if (e3.hi = (e3.hi | (127 & this.buf[this.pos]) << 7 * t3 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
            } else
              for (; t3 < 5; ++t3) {
                if (this.pos >= this.len)
                  throw s(this);
                if (e3.hi = (e3.hi | (127 & this.buf[this.pos]) << 7 * t3 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
              }
            throw Error("invalid varint encoding");
          }
          function h(e3, t3) {
            return (e3[t3 - 4] | e3[t3 - 3] << 8 | e3[t3 - 2] << 16 | e3[t3 - 1] << 24) >>> 0;
          }
          function f() {
            if (this.pos + 8 > this.len)
              throw s(this, 8);
            return new i(h(this.buf, this.pos += 4), h(this.buf, this.pos += 4));
          }
          c.create = p(), c.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice, c.prototype.uint32 = (u = 4294967295, function() {
            if (u = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128)
              return u;
            if (u = (u | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128)
              return u;
            if (u = (u | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128)
              return u;
            if (u = (u | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128)
              return u;
            if (u = (u | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)
              return u;
            if ((this.pos += 5) > this.len)
              throw this.pos = this.len, s(this, 10);
            return u;
          }), c.prototype.int32 = function() {
            return 0 | this.uint32();
          }, c.prototype.sint32 = function() {
            var e3 = this.uint32();
            return e3 >>> 1 ^ -(1 & e3) | 0;
          }, c.prototype.bool = function() {
            return 0 !== this.uint32();
          }, c.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len)
              throw s(this, 4);
            return h(this.buf, this.pos += 4);
          }, c.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len)
              throw s(this, 4);
            return 0 | h(this.buf, this.pos += 4);
          }, c.prototype.float = function() {
            if (this.pos + 4 > this.len)
              throw s(this, 4);
            var e3 = o.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, e3;
          }, c.prototype.double = function() {
            if (this.pos + 8 > this.len)
              throw s(this, 4);
            var e3 = o.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, e3;
          }, c.prototype.bytes = function() {
            var e3 = this.uint32(), t3 = this.pos, r3 = this.pos + e3;
            if (r3 > this.len)
              throw s(this, e3);
            return this.pos += e3, Array.isArray(this.buf) ? this.buf.slice(t3, r3) : t3 === r3 ? new this.buf.constructor(0) : this._slice.call(this.buf, t3, r3);
          }, c.prototype.string = function() {
            var e3 = this.bytes();
            return a.read(e3, 0, e3.length);
          }, c.prototype.skip = function(e3) {
            if ("number" == typeof e3) {
              if (this.pos + e3 > this.len)
                throw s(this, e3);
              this.pos += e3;
            } else
              do {
                if (this.pos >= this.len)
                  throw s(this);
              } while (128 & this.buf[this.pos++]);
            return this;
          }, c.prototype.skipType = function(e3) {
            switch (e3) {
              case 0:
                this.skip();
                break;
              case 1:
                this.skip(8);
                break;
              case 2:
                this.skip(this.uint32());
                break;
              case 3:
                for (; 4 != (e3 = 7 & this.uint32()); )
                  this.skipType(e3);
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error("invalid wire type " + e3 + " at offset " + this.pos);
            }
            return this;
          }, c._configure = function(e3) {
            n2 = e3, c.create = p(), n2._configure();
            var t3 = o.Long ? "toLong" : "toNumber";
            o.merge(c.prototype, { int64: function() {
              return d.call(this)[t3](false);
            }, uint64: function() {
              return d.call(this)[t3](true);
            }, sint64: function() {
              return d.call(this).zzDecode()[t3](false);
            }, fixed64: function() {
              return f.call(this)[t3](true);
            }, sfixed64: function() {
              return f.call(this)[t3](false);
            } });
          };
        }, 593: function(e2, t2, r2) {
          "use strict";
          e2.exports = i;
          var n2 = r2(1408);
          (i.prototype = Object.create(n2.prototype)).constructor = i;
          var o = r2(9693);
          function i(e3) {
            n2.call(this, e3);
          }
          i._configure = function() {
            o.Buffer && (i.prototype._slice = o.Buffer.prototype.slice);
          }, i.prototype.string = function() {
            var e3 = this.uint32();
            return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e3, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e3, this.len));
          }, i._configure();
        }, 9424: function(e2, t2, r2) {
          "use strict";
          e2.exports = p;
          var n2 = r2(9313);
          ((p.prototype = Object.create(n2.prototype)).constructor = p).className = "Root";
          var o, i, a, s = r2(3548), c = r2(7025), u = r2(7598), l = r2(9935);
          function p(e3) {
            n2.call(this, "", e3), this.deferred = [], this.files = [];
          }
          function d() {
          }
          p.fromJSON = function(e3, t3) {
            return t3 || (t3 = new p()), e3.options && t3.setOptions(e3.options), t3.addJSON(e3.nested);
          }, p.prototype.resolvePath = l.path.resolve, p.prototype.fetch = l.fetch, p.prototype.load = function e3(t3, r3, n3) {
            "function" == typeof r3 && (n3 = r3, r3 = void 0);
            var o2 = this;
            if (!n3)
              return l.asPromise(e3, o2, t3, r3);
            var s2 = n3 === d;
            function c2(e4, t4) {
              if (n3) {
                var r4 = n3;
                if (n3 = null, s2)
                  throw e4;
                r4(e4, t4);
              }
            }
            function u2(e4) {
              var t4 = e4.lastIndexOf("google/protobuf/");
              if (t4 > -1) {
                var r4 = e4.substring(t4);
                if (r4 in a)
                  return r4;
              }
              return null;
            }
            function p2(e4, t4) {
              try {
                if (l.isString(t4) && "{" === t4.charAt(0) && (t4 = JSON.parse(t4)), l.isString(t4)) {
                  i.filename = e4;
                  var n4, a2 = i(t4, o2, r3), p3 = 0;
                  if (a2.imports)
                    for (; p3 < a2.imports.length; ++p3)
                      (n4 = u2(a2.imports[p3]) || o2.resolvePath(e4, a2.imports[p3])) && h2(n4);
                  if (a2.weakImports)
                    for (p3 = 0; p3 < a2.weakImports.length; ++p3)
                      (n4 = u2(a2.weakImports[p3]) || o2.resolvePath(e4, a2.weakImports[p3])) && h2(n4, true);
                } else
                  o2.setOptions(t4.options).addJSON(t4.nested);
              } catch (e5) {
                c2(e5);
              }
              s2 || f2 || c2(null, o2);
            }
            function h2(e4, t4) {
              if (!(o2.files.indexOf(e4) > -1))
                if (o2.files.push(e4), e4 in a)
                  s2 ? p2(e4, a[e4]) : (++f2, setTimeout(function() {
                    --f2, p2(e4, a[e4]);
                  }));
                else if (s2) {
                  var r4;
                  try {
                    r4 = l.fs.readFileSync(e4).toString("utf8");
                  } catch (e5) {
                    return void (t4 || c2(e5));
                  }
                  p2(e4, r4);
                } else
                  ++f2, o2.fetch(e4, function(r5, i2) {
                    --f2, n3 && (r5 ? t4 ? f2 || c2(null, o2) : c2(r5) : p2(e4, i2));
                  });
            }
            var f2 = 0;
            l.isString(t3) && (t3 = [t3]);
            for (var m, g = 0; g < t3.length; ++g)
              (m = o2.resolvePath("", t3[g])) && h2(m);
            if (s2)
              return o2;
            f2 || c2(null, o2);
          }, p.prototype.loadSync = function(e3, t3) {
            if (!l.isNode)
              throw Error("not supported");
            return this.load(e3, t3, d);
          }, p.prototype.resolveAll = function() {
            if (this.deferred.length)
              throw Error("unresolvable extensions: " + this.deferred.map(function(e3) {
                return "'extend " + e3.extend + "' in " + e3.parent.fullName;
              }).join(", "));
            return n2.prototype.resolveAll.call(this);
          };
          var h = /^[A-Z]/;
          function f(e3, t3) {
            var r3 = t3.parent.lookup(t3.extend);
            if (r3) {
              var n3 = new s(t3.fullName, t3.id, t3.type, t3.rule, void 0, t3.options);
              return n3.declaringField = t3, t3.extensionField = n3, r3.add(n3), true;
            }
            return false;
          }
          p.prototype._handleAdd = function(e3) {
            if (e3 instanceof s)
              void 0 === e3.extend || e3.extensionField || f(0, e3) || this.deferred.push(e3);
            else if (e3 instanceof c)
              h.test(e3.name) && (e3.parent[e3.name] = e3.values);
            else if (!(e3 instanceof u)) {
              if (e3 instanceof o)
                for (var t3 = 0; t3 < this.deferred.length; )
                  f(0, this.deferred[t3]) ? this.deferred.splice(t3, 1) : ++t3;
              for (var r3 = 0; r3 < e3.nestedArray.length; ++r3)
                this._handleAdd(e3._nestedArray[r3]);
              h.test(e3.name) && (e3.parent[e3.name] = e3);
            }
          }, p.prototype._handleRemove = function(e3) {
            if (e3 instanceof s) {
              if (void 0 !== e3.extend)
                if (e3.extensionField)
                  e3.extensionField.parent.remove(e3.extensionField), e3.extensionField = null;
                else {
                  var t3 = this.deferred.indexOf(e3);
                  t3 > -1 && this.deferred.splice(t3, 1);
                }
            } else if (e3 instanceof c)
              h.test(e3.name) && delete e3.parent[e3.name];
            else if (e3 instanceof n2) {
              for (var r3 = 0; r3 < e3.nestedArray.length; ++r3)
                this._handleRemove(e3._nestedArray[r3]);
              h.test(e3.name) && delete e3.parent[e3.name];
            }
          }, p._configure = function(e3, t3, r3) {
            o = e3, i = t3, a = r3;
          };
        }, 5054: function(e2) {
          "use strict";
          e2.exports = {};
        }, 5994: function(e2, t2, r2) {
          "use strict";
          t2.Service = r2(7948);
        }, 7948: function(e2, t2, r2) {
          "use strict";
          e2.exports = o;
          var n2 = r2(9693);
          function o(e3, t3, r3) {
            if ("function" != typeof e3)
              throw TypeError("rpcImpl must be a function");
            n2.EventEmitter.call(this), this.rpcImpl = e3, this.requestDelimited = Boolean(t3), this.responseDelimited = Boolean(r3);
          }
          (o.prototype = Object.create(n2.EventEmitter.prototype)).constructor = o, o.prototype.rpcCall = function e3(t3, r3, o2, i, a) {
            if (!i)
              throw TypeError("request must be specified");
            var s = this;
            if (!a)
              return n2.asPromise(e3, s, t3, r3, o2, i);
            if (s.rpcImpl)
              try {
                return s.rpcImpl(t3, r3[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(e4, r4) {
                  if (e4)
                    return s.emit("error", e4, t3), a(e4);
                  if (null !== r4) {
                    if (!(r4 instanceof o2))
                      try {
                        r4 = o2[s.responseDelimited ? "decodeDelimited" : "decode"](r4);
                      } catch (e5) {
                        return s.emit("error", e5, t3), a(e5);
                      }
                    return s.emit("data", r4, t3), a(null, r4);
                  }
                  s.end(true);
                });
              } catch (e4) {
                return s.emit("error", e4, t3), void setTimeout(function() {
                  a(e4);
                }, 0);
              }
            else
              setTimeout(function() {
                a(Error("already ended"));
              }, 0);
          }, o.prototype.end = function(e3) {
            return this.rpcImpl && (e3 || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
          };
        }, 7513: function(e2, t2, r2) {
          "use strict";
          e2.exports = s;
          var n2 = r2(9313);
          ((s.prototype = Object.create(n2.prototype)).constructor = s).className = "Service";
          var o = r2(4429), i = r2(9935), a = r2(5994);
          function s(e3, t3) {
            n2.call(this, e3, t3), this.methods = {}, this._methodsArray = null;
          }
          function c(e3) {
            return e3._methodsArray = null, e3;
          }
          s.fromJSON = function(e3, t3) {
            var r3 = new s(e3, t3.options);
            if (t3.methods)
              for (var n3 = Object.keys(t3.methods), i2 = 0; i2 < n3.length; ++i2)
                r3.add(o.fromJSON(n3[i2], t3.methods[n3[i2]]));
            return t3.nested && r3.addJSON(t3.nested), r3.comment = t3.comment, r3;
          }, s.prototype.toJSON = function(e3) {
            var t3 = n2.prototype.toJSON.call(this, e3), r3 = !!e3 && Boolean(e3.keepComments);
            return i.toObject(["options", t3 && t3.options || void 0, "methods", n2.arrayToJSON(this.methodsArray, e3) || {}, "nested", t3 && t3.nested || void 0, "comment", r3 ? this.comment : void 0]);
          }, Object.defineProperty(s.prototype, "methodsArray", { get: function() {
            return this._methodsArray || (this._methodsArray = i.toArray(this.methods));
          } }), s.prototype.get = function(e3) {
            return this.methods[e3] || n2.prototype.get.call(this, e3);
          }, s.prototype.resolveAll = function() {
            for (var e3 = this.methodsArray, t3 = 0; t3 < e3.length; ++t3)
              e3[t3].resolve();
            return n2.prototype.resolve.call(this);
          }, s.prototype.add = function(e3) {
            if (this.get(e3.name))
              throw Error("duplicate name '" + e3.name + "' in " + this);
            return e3 instanceof o ? (this.methods[e3.name] = e3, e3.parent = this, c(this)) : n2.prototype.add.call(this, e3);
          }, s.prototype.remove = function(e3) {
            if (e3 instanceof o) {
              if (this.methods[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.methods[e3.name], e3.parent = null, c(this);
            }
            return n2.prototype.remove.call(this, e3);
          }, s.prototype.create = function(e3, t3, r3) {
            for (var n3, o2 = new a.Service(e3, t3, r3), s2 = 0; s2 < this.methodsArray.length; ++s2) {
              var c2 = i.lcFirst((n3 = this._methodsArray[s2]).resolve().name).replace(/[^$\w_]/g, "");
              o2[c2] = i.codegen(["r", "c"], i.isReserved(c2) ? c2 + "_" : c2)("return this.rpcCall(m,q,s,r,c)")({ m: n3, q: n3.resolvedRequestType.ctor, s: n3.resolvedResponseType.ctor });
            }
            return o2;
          };
        }, 626: function(e2) {
          "use strict";
          e2.exports = p;
          var t2 = /[\s{}=;:[\],'"()<>]/g, r2 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, n2 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, o = /^ *[*/]+ */, i = /^\s*\*?\/*/, a = /\n/g, s = /\s/, c = /\\(.?)/g, u = { 0: "\0", r: "\r", n: "\n", t: "	" };
          function l(e3) {
            return e3.replace(c, function(e4, t3) {
              switch (t3) {
                case "\\":
                case "":
                  return t3;
                default:
                  return u[t3] || "";
              }
            });
          }
          function p(e3, c2) {
            e3 = e3.toString();
            var u2 = 0, p2 = e3.length, d = 1, h = null, f = null, m = 0, g = false, E = false, v = [], y = null;
            function T(e4) {
              return Error("illegal " + e4 + " (line " + d + ")");
            }
            function _(t3) {
              return e3.charAt(t3);
            }
            function R(t3, r3, n3) {
              h = e3.charAt(t3++), m = d, g = false, E = n3;
              var s2, u3 = t3 - (c2 ? 2 : 3);
              do {
                if (--u3 < 0 || "\n" === (s2 = e3.charAt(u3))) {
                  g = true;
                  break;
                }
              } while (" " === s2 || "	" === s2);
              for (var l2 = e3.substring(t3, r3).split(a), p3 = 0; p3 < l2.length; ++p3)
                l2[p3] = l2[p3].replace(c2 ? i : o, "").trim();
              f = l2.join("\n").trim();
            }
            function I(t3) {
              var r3 = O(t3), n3 = e3.substring(t3, r3);
              return /^\s*\/{1,2}/.test(n3);
            }
            function O(e4) {
              for (var t3 = e4; t3 < p2 && "\n" !== _(t3); )
                t3++;
              return t3;
            }
            function S() {
              if (v.length > 0)
                return v.shift();
              if (y)
                return function() {
                  var t3 = "'" === y ? n2 : r2;
                  t3.lastIndex = u2 - 1;
                  var o3 = t3.exec(e3);
                  if (!o3)
                    throw T("string");
                  return u2 = t3.lastIndex, A(y), y = null, l(o3[1]);
                }();
              var o2, i2, a2, h2, f2, m2 = 0 === u2;
              do {
                if (u2 === p2)
                  return null;
                for (o2 = false; s.test(a2 = _(u2)); )
                  if ("\n" === a2 && (m2 = true, ++d), ++u2 === p2)
                    return null;
                if ("/" === _(u2)) {
                  if (++u2 === p2)
                    throw T("comment");
                  if ("/" === _(u2))
                    if (c2) {
                      if (h2 = u2, f2 = false, I(u2)) {
                        f2 = true;
                        do {
                          if ((u2 = O(u2)) === p2)
                            break;
                          u2++;
                        } while (I(u2));
                      } else
                        u2 = Math.min(p2, O(u2) + 1);
                      f2 && R(h2, u2, m2), d++, o2 = true;
                    } else {
                      for (f2 = "/" === _(h2 = u2 + 1); "\n" !== _(++u2); )
                        if (u2 === p2)
                          return null;
                      ++u2, f2 && R(h2, u2 - 1, m2), ++d, o2 = true;
                    }
                  else {
                    if ("*" !== (a2 = _(u2)))
                      return "/";
                    h2 = u2 + 1, f2 = c2 || "*" === _(h2);
                    do {
                      if ("\n" === a2 && ++d, ++u2 === p2)
                        throw T("comment");
                      i2 = a2, a2 = _(u2);
                    } while ("*" !== i2 || "/" !== a2);
                    ++u2, f2 && R(h2, u2 - 2, m2), o2 = true;
                  }
                }
              } while (o2);
              var g2 = u2;
              if (t2.lastIndex = 0, !t2.test(_(g2++)))
                for (; g2 < p2 && !t2.test(_(g2)); )
                  ++g2;
              var E2 = e3.substring(u2, u2 = g2);
              return '"' !== E2 && "'" !== E2 || (y = E2), E2;
            }
            function A(e4) {
              v.push(e4);
            }
            function C() {
              if (!v.length) {
                var e4 = S();
                if (null === e4)
                  return null;
                A(e4);
              }
              return v[0];
            }
            return Object.defineProperty({ next: S, peek: C, push: A, skip: function(e4, t3) {
              var r3 = C();
              if (r3 === e4)
                return S(), true;
              if (!t3)
                throw T("token '" + r3 + "', '" + e4 + "' expected");
              return false;
            }, cmnt: function(e4) {
              var t3 = null;
              return void 0 === e4 ? m === d - 1 && (c2 || "*" === h || g) && (t3 = E ? f : null) : (m < e4 && C(), m !== e4 || g || !c2 && "/" !== h || (t3 = E ? null : f)), t3;
            } }, "line", { get: function() {
              return d;
            } });
          }
          p.unescape = l;
        }, 7645: function(e2, t2, r2) {
          "use strict";
          e2.exports = v;
          var n2 = r2(9313);
          ((v.prototype = Object.create(n2.prototype)).constructor = v).className = "Type";
          var o = r2(7025), i = r2(7598), a = r2(3548), s = r2(6039), c = r2(7513), u = r2(8368), l = r2(1408), p = r2(1173), d = r2(9935), h = r2(4928), f = r2(5305), m = r2(4497), g = r2(3996), E = r2(1667);
          function v(e3, t3) {
            n2.call(this, e3, t3), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
          }
          function y(e3) {
            return e3._fieldsById = e3._fieldsArray = e3._oneofsArray = null, delete e3.encode, delete e3.decode, delete e3.verify, e3;
          }
          Object.defineProperties(v.prototype, { fieldsById: { get: function() {
            if (this._fieldsById)
              return this._fieldsById;
            this._fieldsById = {};
            for (var e3 = Object.keys(this.fields), t3 = 0; t3 < e3.length; ++t3) {
              var r3 = this.fields[e3[t3]], n3 = r3.id;
              if (this._fieldsById[n3])
                throw Error("duplicate id " + n3 + " in " + this);
              this._fieldsById[n3] = r3;
            }
            return this._fieldsById;
          } }, fieldsArray: { get: function() {
            return this._fieldsArray || (this._fieldsArray = d.toArray(this.fields));
          } }, oneofsArray: { get: function() {
            return this._oneofsArray || (this._oneofsArray = d.toArray(this.oneofs));
          } }, ctor: { get: function() {
            return this._ctor || (this.ctor = v.generateConstructor(this)());
          }, set: function(e3) {
            var t3 = e3.prototype;
            t3 instanceof u || ((e3.prototype = new u()).constructor = e3, d.merge(e3.prototype, t3)), e3.$type = e3.prototype.$type = this, d.merge(e3, u, true), this._ctor = e3;
            for (var r3 = 0; r3 < this.fieldsArray.length; ++r3)
              this._fieldsArray[r3].resolve();
            var n3 = {};
            for (r3 = 0; r3 < this.oneofsArray.length; ++r3)
              n3[this._oneofsArray[r3].resolve().name] = { get: d.oneOfGetter(this._oneofsArray[r3].oneof), set: d.oneOfSetter(this._oneofsArray[r3].oneof) };
            r3 && Object.defineProperties(e3.prototype, n3);
          } } }), v.generateConstructor = function(e3) {
            for (var t3, r3 = d.codegen(["p"], e3.name), n3 = 0; n3 < e3.fieldsArray.length; ++n3)
              (t3 = e3._fieldsArray[n3]).map ? r3("this%s={}", d.safeProp(t3.name)) : t3.repeated && r3("this%s=[]", d.safeProp(t3.name));
            return r3("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
          }, v.fromJSON = function(e3, t3) {
            var r3 = new v(e3, t3.options);
            r3.extensions = t3.extensions, r3.reserved = t3.reserved;
            for (var u2 = Object.keys(t3.fields), l2 = 0; l2 < u2.length; ++l2)
              r3.add((void 0 !== t3.fields[u2[l2]].keyType ? s.fromJSON : a.fromJSON)(u2[l2], t3.fields[u2[l2]]));
            if (t3.oneofs)
              for (u2 = Object.keys(t3.oneofs), l2 = 0; l2 < u2.length; ++l2)
                r3.add(i.fromJSON(u2[l2], t3.oneofs[u2[l2]]));
            if (t3.nested)
              for (u2 = Object.keys(t3.nested), l2 = 0; l2 < u2.length; ++l2) {
                var p2 = t3.nested[u2[l2]];
                r3.add((void 0 !== p2.id ? a.fromJSON : void 0 !== p2.fields ? v.fromJSON : void 0 !== p2.values ? o.fromJSON : void 0 !== p2.methods ? c.fromJSON : n2.fromJSON)(u2[l2], p2));
              }
            return t3.extensions && t3.extensions.length && (r3.extensions = t3.extensions), t3.reserved && t3.reserved.length && (r3.reserved = t3.reserved), t3.group && (r3.group = true), t3.comment && (r3.comment = t3.comment), r3;
          }, v.prototype.toJSON = function(e3) {
            var t3 = n2.prototype.toJSON.call(this, e3), r3 = !!e3 && Boolean(e3.keepComments);
            return d.toObject(["options", t3 && t3.options || void 0, "oneofs", n2.arrayToJSON(this.oneofsArray, e3), "fields", n2.arrayToJSON(this.fieldsArray.filter(function(e4) {
              return !e4.declaringField;
            }), e3) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", t3 && t3.nested || void 0, "comment", r3 ? this.comment : void 0]);
          }, v.prototype.resolveAll = function() {
            for (var e3 = this.fieldsArray, t3 = 0; t3 < e3.length; )
              e3[t3++].resolve();
            var r3 = this.oneofsArray;
            for (t3 = 0; t3 < r3.length; )
              r3[t3++].resolve();
            return n2.prototype.resolveAll.call(this);
          }, v.prototype.get = function(e3) {
            return this.fields[e3] || this.oneofs && this.oneofs[e3] || this.nested && this.nested[e3] || null;
          }, v.prototype.add = function(e3) {
            if (this.get(e3.name))
              throw Error("duplicate name '" + e3.name + "' in " + this);
            if (e3 instanceof a && void 0 === e3.extend) {
              if (this._fieldsById ? this._fieldsById[e3.id] : this.fieldsById[e3.id])
                throw Error("duplicate id " + e3.id + " in " + this);
              if (this.isReservedId(e3.id))
                throw Error("id " + e3.id + " is reserved in " + this);
              if (this.isReservedName(e3.name))
                throw Error("name '" + e3.name + "' is reserved in " + this);
              return e3.parent && e3.parent.remove(e3), this.fields[e3.name] = e3, e3.message = this, e3.onAdd(this), y(this);
            }
            return e3 instanceof i ? (this.oneofs || (this.oneofs = {}), this.oneofs[e3.name] = e3, e3.onAdd(this), y(this)) : n2.prototype.add.call(this, e3);
          }, v.prototype.remove = function(e3) {
            if (e3 instanceof a && void 0 === e3.extend) {
              if (!this.fields || this.fields[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.fields[e3.name], e3.parent = null, e3.onRemove(this), y(this);
            }
            if (e3 instanceof i) {
              if (!this.oneofs || this.oneofs[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.oneofs[e3.name], e3.parent = null, e3.onRemove(this), y(this);
            }
            return n2.prototype.remove.call(this, e3);
          }, v.prototype.isReservedId = function(e3) {
            return n2.isReservedId(this.reserved, e3);
          }, v.prototype.isReservedName = function(e3) {
            return n2.isReservedName(this.reserved, e3);
          }, v.prototype.create = function(e3) {
            return new this.ctor(e3);
          }, v.prototype.setup = function() {
            for (var e3 = this.fullName, t3 = [], r3 = 0; r3 < this.fieldsArray.length; ++r3)
              t3.push(this._fieldsArray[r3].resolve().resolvedType);
            this.encode = h(this)({ Writer: p, types: t3, util: d }), this.decode = f(this)({ Reader: l, types: t3, util: d }), this.verify = m(this)({ types: t3, util: d }), this.fromObject = g.fromObject(this)({ types: t3, util: d }), this.toObject = g.toObject(this)({ types: t3, util: d });
            var n3 = E[e3];
            if (n3) {
              var o2 = Object.create(this);
              o2.fromObject = this.fromObject, this.fromObject = n3.fromObject.bind(o2), o2.toObject = this.toObject, this.toObject = n3.toObject.bind(o2);
            }
            return this;
          }, v.prototype.encode = function(e3, t3) {
            return this.setup().encode(e3, t3);
          }, v.prototype.encodeDelimited = function(e3, t3) {
            return this.encode(e3, t3 && t3.len ? t3.fork() : t3).ldelim();
          }, v.prototype.decode = function(e3, t3) {
            return this.setup().decode(e3, t3);
          }, v.prototype.decodeDelimited = function(e3) {
            return e3 instanceof l || (e3 = l.create(e3)), this.decode(e3, e3.uint32());
          }, v.prototype.verify = function(e3) {
            return this.setup().verify(e3);
          }, v.prototype.fromObject = function(e3) {
            return this.setup().fromObject(e3);
          }, v.prototype.toObject = function(e3, t3) {
            return this.setup().toObject(e3, t3);
          }, v.d = function(e3) {
            return function(t3) {
              d.decorateType(t3, e3);
            };
          };
        }, 7063: function(e2, t2, r2) {
          "use strict";
          var n2 = t2, o = r2(9935), i = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
          function a(e3, t3) {
            var r3 = 0, n3 = {};
            for (t3 |= 0; r3 < e3.length; )
              n3[i[r3 + t3]] = e3[r3++];
            return n3;
          }
          n2.basic = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), n2.defaults = a([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", o.emptyArray, null]), n2.long = a([0, 0, 0, 1, 1], 7), n2.mapKey = a([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), n2.packed = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
        }, 9935: function(e2, t2, r2) {
          "use strict";
          var n2, o, i = e2.exports = r2(9693), a = r2(5054);
          i.codegen = r2(5124), i.fetch = r2(9054), i.path = r2(8626), i.fs = i.inquire("fs"), i.toArray = function(e3) {
            if (e3) {
              for (var t3 = Object.keys(e3), r3 = new Array(t3.length), n3 = 0; n3 < t3.length; )
                r3[n3] = e3[t3[n3++]];
              return r3;
            }
            return [];
          }, i.toObject = function(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; ) {
              var n3 = e3[r3++], o2 = e3[r3++];
              void 0 !== o2 && (t3[n3] = o2);
            }
            return t3;
          };
          var s = /\\/g, c = /"/g;
          i.isReserved = function(e3) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e3);
          }, i.safeProp = function(e3) {
            return !/^[$\w_]+$/.test(e3) || i.isReserved(e3) ? '["' + e3.replace(s, "\\\\").replace(c, '\\"') + '"]' : "." + e3;
          }, i.ucFirst = function(e3) {
            return e3.charAt(0).toUpperCase() + e3.substring(1);
          };
          var u = /_([a-z])/g;
          i.camelCase = function(e3) {
            return e3.substring(0, 1) + e3.substring(1).replace(u, function(e4, t3) {
              return t3.toUpperCase();
            });
          }, i.compareFieldsById = function(e3, t3) {
            return e3.id - t3.id;
          }, i.decorateType = function(e3, t3) {
            if (e3.$type)
              return t3 && e3.$type.name !== t3 && (i.decorateRoot.remove(e3.$type), e3.$type.name = t3, i.decorateRoot.add(e3.$type)), e3.$type;
            n2 || (n2 = r2(7645));
            var o2 = new n2(t3 || e3.name);
            return i.decorateRoot.add(o2), o2.ctor = e3, Object.defineProperty(e3, "$type", { value: o2, enumerable: false }), Object.defineProperty(e3.prototype, "$type", { value: o2, enumerable: false }), o2;
          };
          var l = 0;
          i.decorateEnum = function(e3) {
            if (e3.$type)
              return e3.$type;
            o || (o = r2(7025));
            var t3 = new o("Enum" + l++, e3);
            return i.decorateRoot.add(t3), Object.defineProperty(e3, "$type", { value: t3, enumerable: false }), t3;
          }, i.setProperty = function(e3, t3, r3) {
            if ("object" != typeof e3)
              throw TypeError("dst must be an object");
            if (!t3)
              throw TypeError("path must be specified");
            return function e4(t4, r4, n3) {
              var o2 = r4.shift();
              if ("__proto__" === o2)
                return t4;
              if (r4.length > 0)
                t4[o2] = e4(t4[o2] || {}, r4, n3);
              else {
                var i2 = t4[o2];
                i2 && (n3 = [].concat(i2).concat(n3)), t4[o2] = n3;
              }
              return t4;
            }(e3, t3 = t3.split("."), r3);
          }, Object.defineProperty(i, "decorateRoot", { get: function() {
            return a.decorated || (a.decorated = new (r2(9424))());
          } });
        }, 1945: function(e2, t2, r2) {
          "use strict";
          e2.exports = o;
          var n2 = r2(9693);
          function o(e3, t3) {
            this.lo = e3 >>> 0, this.hi = t3 >>> 0;
          }
          var i = o.zero = new o(0, 0);
          i.toNumber = function() {
            return 0;
          }, i.zzEncode = i.zzDecode = function() {
            return this;
          }, i.length = function() {
            return 1;
          };
          var a = o.zeroHash = "\0\0\0\0\0\0\0\0";
          o.fromNumber = function(e3) {
            if (0 === e3)
              return i;
            var t3 = e3 < 0;
            t3 && (e3 = -e3);
            var r3 = e3 >>> 0, n3 = (e3 - r3) / 4294967296 >>> 0;
            return t3 && (n3 = ~n3 >>> 0, r3 = ~r3 >>> 0, ++r3 > 4294967295 && (r3 = 0, ++n3 > 4294967295 && (n3 = 0))), new o(r3, n3);
          }, o.from = function(e3) {
            if ("number" == typeof e3)
              return o.fromNumber(e3);
            if (n2.isString(e3)) {
              if (!n2.Long)
                return o.fromNumber(parseInt(e3, 10));
              e3 = n2.Long.fromString(e3);
            }
            return e3.low || e3.high ? new o(e3.low >>> 0, e3.high >>> 0) : i;
          }, o.prototype.toNumber = function(e3) {
            if (!e3 && this.hi >>> 31) {
              var t3 = 1 + ~this.lo >>> 0, r3 = ~this.hi >>> 0;
              return t3 || (r3 = r3 + 1 >>> 0), -(t3 + 4294967296 * r3);
            }
            return this.lo + 4294967296 * this.hi;
          }, o.prototype.toLong = function(e3) {
            return n2.Long ? new n2.Long(0 | this.lo, 0 | this.hi, Boolean(e3)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e3) };
          };
          var s = String.prototype.charCodeAt;
          o.fromHash = function(e3) {
            return e3 === a ? i : new o((s.call(e3, 0) | s.call(e3, 1) << 8 | s.call(e3, 2) << 16 | s.call(e3, 3) << 24) >>> 0, (s.call(e3, 4) | s.call(e3, 5) << 8 | s.call(e3, 6) << 16 | s.call(e3, 7) << 24) >>> 0);
          }, o.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
          }, o.prototype.zzEncode = function() {
            var e3 = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e3) >>> 0, this.lo = (this.lo << 1 ^ e3) >>> 0, this;
          }, o.prototype.zzDecode = function() {
            var e3 = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e3) >>> 0, this.hi = (this.hi >>> 1 ^ e3) >>> 0, this;
          }, o.prototype.length = function() {
            var e3 = this.lo, t3 = (this.lo >>> 28 | this.hi << 4) >>> 0, r3 = this.hi >>> 24;
            return 0 === r3 ? 0 === t3 ? e3 < 16384 ? e3 < 128 ? 1 : 2 : e3 < 2097152 ? 3 : 4 : t3 < 16384 ? t3 < 128 ? 5 : 6 : t3 < 2097152 ? 7 : 8 : r3 < 128 ? 9 : 10;
          };
        }, 9693: function(e2, t2, r2) {
          "use strict";
          var n2 = t2;
          function o(e3, t3, r3) {
            for (var n3 = Object.keys(t3), o2 = 0; o2 < n3.length; ++o2)
              void 0 !== e3[n3[o2]] && r3 || (e3[n3[o2]] = t3[n3[o2]]);
            return e3;
          }
          function i(e3) {
            function t3(e4, r3) {
              if (!(this instanceof t3))
                return new t3(e4, r3);
              Object.defineProperty(this, "message", { get: function() {
                return e4;
              } }), Error.captureStackTrace ? Error.captureStackTrace(this, t3) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), r3 && o(this, r3);
            }
            return (t3.prototype = Object.create(Error.prototype)).constructor = t3, Object.defineProperty(t3.prototype, "name", { get: function() {
              return e3;
            } }), t3.prototype.toString = function() {
              return this.name + ": " + this.message;
            }, t3;
          }
          n2.asPromise = r2(4537), n2.base64 = r2(7419), n2.EventEmitter = r2(9211), n2.float = r2(945), n2.inquire = r2(7199), n2.utf8 = r2(4997), n2.pool = r2(6662), n2.LongBits = r2(1945), n2.isNode = Boolean(void 0 !== r2.g && r2.g && r2.g.process && r2.g.process.versions && r2.g.process.versions.node), n2.global = n2.isNode && r2.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this, n2.emptyArray = Object.freeze ? Object.freeze([]) : [], n2.emptyObject = Object.freeze ? Object.freeze({}) : {}, n2.isInteger = Number.isInteger || function(e3) {
            return "number" == typeof e3 && isFinite(e3) && Math.floor(e3) === e3;
          }, n2.isString = function(e3) {
            return "string" == typeof e3 || e3 instanceof String;
          }, n2.isObject = function(e3) {
            return e3 && "object" == typeof e3;
          }, n2.isset = n2.isSet = function(e3, t3) {
            var r3 = e3[t3];
            return !(null == r3 || !e3.hasOwnProperty(t3)) && ("object" != typeof r3 || (Array.isArray(r3) ? r3.length : Object.keys(r3).length) > 0);
          }, n2.Buffer = function() {
            try {
              var e3 = n2.inquire("buffer").Buffer;
              return e3.prototype.utf8Write ? e3 : null;
            } catch (e4) {
              return null;
            }
          }(), n2._Buffer_from = null, n2._Buffer_allocUnsafe = null, n2.newBuffer = function(e3) {
            return "number" == typeof e3 ? n2.Buffer ? n2._Buffer_allocUnsafe(e3) : new n2.Array(e3) : n2.Buffer ? n2._Buffer_from(e3) : "undefined" == typeof Uint8Array ? e3 : new Uint8Array(e3);
          }, n2.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n2.Long = n2.global.dcodeIO && n2.global.dcodeIO.Long || n2.global.Long || n2.inquire("long"), n2.key2Re = /^true|false|0|1$/, n2.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n2.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n2.longToHash = function(e3) {
            return e3 ? n2.LongBits.from(e3).toHash() : n2.LongBits.zeroHash;
          }, n2.longFromHash = function(e3, t3) {
            var r3 = n2.LongBits.fromHash(e3);
            return n2.Long ? n2.Long.fromBits(r3.lo, r3.hi, t3) : r3.toNumber(Boolean(t3));
          }, n2.merge = o, n2.lcFirst = function(e3) {
            return e3.charAt(0).toLowerCase() + e3.substring(1);
          }, n2.newError = i, n2.ProtocolError = i("ProtocolError"), n2.oneOfGetter = function(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; ++r3)
              t3[e3[r3]] = 1;
            return function() {
              for (var e4 = Object.keys(this), r4 = e4.length - 1; r4 > -1; --r4)
                if (1 === t3[e4[r4]] && void 0 !== this[e4[r4]] && null !== this[e4[r4]])
                  return e4[r4];
            };
          }, n2.oneOfSetter = function(e3) {
            return function(t3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                e3[r3] !== t3 && delete this[e3[r3]];
            };
          }, n2.toJSONOptions = { longs: String, enums: String, bytes: String, json: true }, n2._configure = function() {
            var e3 = n2.Buffer;
            e3 ? (n2._Buffer_from = e3.from !== Uint8Array.from && e3.from || function(t3, r3) {
              return new e3(t3, r3);
            }, n2._Buffer_allocUnsafe = e3.allocUnsafe || function(t3) {
              return new e3(t3);
            }) : n2._Buffer_from = n2._Buffer_allocUnsafe = null;
          };
        }, 4497: function(e2, t2, r2) {
          "use strict";
          e2.exports = function(e3) {
            var t3 = o.codegen(["m"], e3.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), r3 = {};
            e3.oneofsArray.length && t3("var p={}");
            for (var n3 = 0; n3 < e3.fieldsArray.length; ++n3) {
              var c = e3._fieldsArray[n3].resolve(), u = "m" + o.safeProp(c.name);
              if (c.optional && t3("if(%s!=null&&m.hasOwnProperty(%j)){", u, c.name), c.map)
                t3("if(!util.isObject(%s))", u)("return%j", i(c, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"), s(t3, c, "k[i]"), a(t3, c, n3, u + "[k[i]]")("}");
              else if (c.repeated)
                t3("if(!Array.isArray(%s))", u)("return%j", i(c, "array"))("for(var i=0;i<%s.length;++i){", u), a(t3, c, n3, u + "[i]")("}");
              else {
                if (c.partOf) {
                  var l = o.safeProp(c.partOf.name);
                  1 === r3[c.partOf.name] && t3("if(p%s===1)", l)("return%j", c.partOf.name + ": multiple values"), r3[c.partOf.name] = 1, t3("p%s=1", l);
                }
                a(t3, c, n3, u);
              }
              c.optional && t3("}");
            }
            return t3("return null");
          };
          var n2 = r2(7025), o = r2(9935);
          function i(e3, t3) {
            return e3.name + ": " + t3 + (e3.repeated && "array" !== t3 ? "[]" : e3.map && "object" !== t3 ? "{k:" + e3.keyType + "}" : "") + " expected";
          }
          function a(e3, t3, r3, o2) {
            if (t3.resolvedType)
              if (t3.resolvedType instanceof n2) {
                e3("switch(%s){", o2)("default:")("return%j", i(t3, "enum value"));
                for (var a2 = Object.keys(t3.resolvedType.values), s2 = 0; s2 < a2.length; ++s2)
                  e3("case %i:", t3.resolvedType.values[a2[s2]]);
                e3("break")("}");
              } else
                e3("{")("var e=types[%i].verify(%s);", r3, o2)("if(e)")("return%j+e", t3.name + ".")("}");
            else
              switch (t3.type) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  e3("if(!util.isInteger(%s))", o2)("return%j", i(t3, "integer"));
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e3("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", o2, o2, o2, o2)("return%j", i(t3, "integer|Long"));
                  break;
                case "float":
                case "double":
                  e3('if(typeof %s!=="number")', o2)("return%j", i(t3, "number"));
                  break;
                case "bool":
                  e3('if(typeof %s!=="boolean")', o2)("return%j", i(t3, "boolean"));
                  break;
                case "string":
                  e3("if(!util.isString(%s))", o2)("return%j", i(t3, "string"));
                  break;
                case "bytes":
                  e3('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', o2, o2, o2)("return%j", i(t3, "buffer"));
              }
            return e3;
          }
          function s(e3, t3, r3) {
            switch (t3.keyType) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                e3("if(!util.key32Re.test(%s))", r3)("return%j", i(t3, "integer key"));
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e3("if(!util.key64Re.test(%s))", r3)("return%j", i(t3, "integer|Long key"));
                break;
              case "bool":
                e3("if(!util.key2Re.test(%s))", r3)("return%j", i(t3, "boolean key"));
            }
            return e3;
          }
        }, 1667: function(e2, t2, r2) {
          "use strict";
          var n2 = t2, o = r2(8368);
          n2[".google.protobuf.Any"] = { fromObject: function(e3) {
            if (e3 && e3["@type"]) {
              var t3 = e3["@type"].substring(e3["@type"].lastIndexOf("/") + 1), r3 = this.lookup(t3);
              if (r3) {
                var n3 = "." === e3["@type"].charAt(0) ? e3["@type"].substr(1) : e3["@type"];
                return -1 === n3.indexOf("/") && (n3 = "/" + n3), this.create({ type_url: n3, value: r3.encode(r3.fromObject(e3)).finish() });
              }
            }
            return this.fromObject(e3);
          }, toObject: function(e3, t3) {
            var r3 = "", n3 = "";
            if (t3 && t3.json && e3.type_url && e3.value) {
              n3 = e3.type_url.substring(e3.type_url.lastIndexOf("/") + 1), r3 = e3.type_url.substring(0, e3.type_url.lastIndexOf("/") + 1);
              var i = this.lookup(n3);
              i && (e3 = i.decode(e3.value));
            }
            if (!(e3 instanceof this.ctor) && e3 instanceof o) {
              var a = e3.$type.toObject(e3, t3);
              return "" === r3 && (r3 = "type.googleapis.com/"), n3 = r3 + ("." === e3.$type.fullName[0] ? e3.$type.fullName.substr(1) : e3.$type.fullName), a["@type"] = n3, a;
            }
            return this.toObject(e3, t3);
          } };
        }, 1173: function(e2, t2, r2) {
          "use strict";
          e2.exports = p;
          var n2, o = r2(9693), i = o.LongBits, a = o.base64, s = o.utf8;
          function c(e3, t3, r3) {
            this.fn = e3, this.len = t3, this.next = void 0, this.val = r3;
          }
          function u() {
          }
          function l(e3) {
            this.head = e3.head, this.tail = e3.tail, this.len = e3.len, this.next = e3.states;
          }
          function p() {
            this.len = 0, this.head = new c(u, 0, 0), this.tail = this.head, this.states = null;
          }
          var d = function() {
            return o.Buffer ? function() {
              return (p.create = function() {
                return new n2();
              })();
            } : function() {
              return new p();
            };
          };
          function h(e3, t3, r3) {
            t3[r3] = 255 & e3;
          }
          function f(e3, t3) {
            this.len = e3, this.next = void 0, this.val = t3;
          }
          function m(e3, t3, r3) {
            for (; e3.hi; )
              t3[r3++] = 127 & e3.lo | 128, e3.lo = (e3.lo >>> 7 | e3.hi << 25) >>> 0, e3.hi >>>= 7;
            for (; e3.lo > 127; )
              t3[r3++] = 127 & e3.lo | 128, e3.lo = e3.lo >>> 7;
            t3[r3++] = e3.lo;
          }
          function g(e3, t3, r3) {
            t3[r3] = 255 & e3, t3[r3 + 1] = e3 >>> 8 & 255, t3[r3 + 2] = e3 >>> 16 & 255, t3[r3 + 3] = e3 >>> 24;
          }
          p.create = d(), p.alloc = function(e3) {
            return new o.Array(e3);
          }, o.Array !== Array && (p.alloc = o.pool(p.alloc, o.Array.prototype.subarray)), p.prototype._push = function(e3, t3, r3) {
            return this.tail = this.tail.next = new c(e3, t3, r3), this.len += t3, this;
          }, f.prototype = Object.create(c.prototype), f.prototype.fn = function(e3, t3, r3) {
            for (; e3 > 127; )
              t3[r3++] = 127 & e3 | 128, e3 >>>= 7;
            t3[r3] = e3;
          }, p.prototype.uint32 = function(e3) {
            return this.len += (this.tail = this.tail.next = new f((e3 >>>= 0) < 128 ? 1 : e3 < 16384 ? 2 : e3 < 2097152 ? 3 : e3 < 268435456 ? 4 : 5, e3)).len, this;
          }, p.prototype.int32 = function(e3) {
            return e3 < 0 ? this._push(m, 10, i.fromNumber(e3)) : this.uint32(e3);
          }, p.prototype.sint32 = function(e3) {
            return this.uint32((e3 << 1 ^ e3 >> 31) >>> 0);
          }, p.prototype.uint64 = function(e3) {
            var t3 = i.from(e3);
            return this._push(m, t3.length(), t3);
          }, p.prototype.int64 = p.prototype.uint64, p.prototype.sint64 = function(e3) {
            var t3 = i.from(e3).zzEncode();
            return this._push(m, t3.length(), t3);
          }, p.prototype.bool = function(e3) {
            return this._push(h, 1, e3 ? 1 : 0);
          }, p.prototype.fixed32 = function(e3) {
            return this._push(g, 4, e3 >>> 0);
          }, p.prototype.sfixed32 = p.prototype.fixed32, p.prototype.fixed64 = function(e3) {
            var t3 = i.from(e3);
            return this._push(g, 4, t3.lo)._push(g, 4, t3.hi);
          }, p.prototype.sfixed64 = p.prototype.fixed64, p.prototype.float = function(e3) {
            return this._push(o.float.writeFloatLE, 4, e3);
          }, p.prototype.double = function(e3) {
            return this._push(o.float.writeDoubleLE, 8, e3);
          };
          var E = o.Array.prototype.set ? function(e3, t3, r3) {
            t3.set(e3, r3);
          } : function(e3, t3, r3) {
            for (var n3 = 0; n3 < e3.length; ++n3)
              t3[r3 + n3] = e3[n3];
          };
          p.prototype.bytes = function(e3) {
            var t3 = e3.length >>> 0;
            if (!t3)
              return this._push(h, 1, 0);
            if (o.isString(e3)) {
              var r3 = p.alloc(t3 = a.length(e3));
              a.decode(e3, r3, 0), e3 = r3;
            }
            return this.uint32(t3)._push(E, t3, e3);
          }, p.prototype.string = function(e3) {
            var t3 = s.length(e3);
            return t3 ? this.uint32(t3)._push(s.write, t3, e3) : this._push(h, 1, 0);
          }, p.prototype.fork = function() {
            return this.states = new l(this), this.head = this.tail = new c(u, 0, 0), this.len = 0, this;
          }, p.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(u, 0, 0), this.len = 0), this;
          }, p.prototype.ldelim = function() {
            var e3 = this.head, t3 = this.tail, r3 = this.len;
            return this.reset().uint32(r3), r3 && (this.tail.next = e3.next, this.tail = t3, this.len += r3), this;
          }, p.prototype.finish = function() {
            for (var e3 = this.head.next, t3 = this.constructor.alloc(this.len), r3 = 0; e3; )
              e3.fn(e3.val, t3, r3), r3 += e3.len, e3 = e3.next;
            return t3;
          }, p._configure = function(e3) {
            n2 = e3, p.create = d(), n2._configure();
          };
        }, 3155: function(e2, t2, r2) {
          "use strict";
          e2.exports = i;
          var n2 = r2(1173);
          (i.prototype = Object.create(n2.prototype)).constructor = i;
          var o = r2(9693);
          function i() {
            n2.call(this);
          }
          function a(e3, t3, r3) {
            e3.length < 40 ? o.utf8.write(e3, t3, r3) : t3.utf8Write ? t3.utf8Write(e3, r3) : t3.write(e3, r3);
          }
          i._configure = function() {
            i.alloc = o._Buffer_allocUnsafe, i.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name ? function(e3, t3, r3) {
              t3.set(e3, r3);
            } : function(e3, t3, r3) {
              if (e3.copy)
                e3.copy(t3, r3, 0, e3.length);
              else
                for (var n3 = 0; n3 < e3.length; )
                  t3[r3++] = e3[n3++];
            };
          }, i.prototype.bytes = function(e3) {
            o.isString(e3) && (e3 = o._Buffer_from(e3, "base64"));
            var t3 = e3.length >>> 0;
            return this.uint32(t3), t3 && this._push(i.writeBytesBuffer, t3, e3), this;
          }, i.prototype.string = function(e3) {
            var t3 = o.Buffer.byteLength(e3);
            return this.uint32(t3), t3 && this._push(a, t3, e3), this;
          }, i._configure();
        } }, t = {};
        function r(n2) {
          var o = t[n2];
          if (void 0 !== o)
            return o.exports;
          var i = t[n2] = { exports: {} };
          return e[n2].call(i.exports, i, i.exports, r), i.exports;
        }
        r.amdO = {}, r.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return r.d(t2, { a: t2 }), t2;
        }, r.d = function(e2, t2) {
          for (var n2 in t2)
            r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
        }, r.g = function() {
          if ("object" == typeof globalThis)
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof window)
              return window;
          }
        }(), r.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, r.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var n = {};
        return function() {
          "use strict";
          r.r(n), r.d(n, { default: function() {
            return ge;
          } });
          var e2 = r(3281), t2 = r.n(e2), o = r(3720), i = r.n(o), a = (r(9601), r(1539), r(8674), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948), r(8309), r(3843), r(3710), r(1532), r(4812), r(9070), r(7941), r(2222), r(9575), r(2472), r(2990), r(8927), r(3105), r(5035), r(4345), r(7174), r(2846), r(4731), r(7209), r(6319), r(8867), r(7789), r(3739), r(9368), r(4483), r(2056), r(3462), r(678), r(7462), r(3824), r(5021), r(2974), r(5016), r(5827), r(2564), r(9653), r(9554), r(4747), r(6699), r(2023), r(7327), r(7252)), s = r(4024), c = r(4998), u = r(5531), l = r(6424), p = r(7360), d = ["onTextMessage", "onFileMessage", "onAudioMessage", "onVideoMessage", "onImageMessage", "onLocationMessage", "onCustomMessage", "onCMDMessage"], h = function() {
            function e3(e4, t3, r2) {
              this.handlerData = {}, this.handlerData = {}, e4.addEventHandler = this.addEventHandler.bind(this), e4.removeEventHandler = this.removeEventHandler.bind(this);
            }
            return e3.prototype.addEventHandler = function(e4, t3) {
              this.handlerData[e4] = t3;
            }, e3.prototype.removeEventHandler = function(e4) {
              delete this.handlerData[e4];
            }, e3.prototype.dispatch = function(e4, t3) {
              for (var r2 in d.includes(e4) && t3 ? p.kg.debug("dispatch event: " + e4, { id: t3.id, type: t3.type, time: t3.time, from: t3.from, to: t3.to, chatType: t3.chatType }) : "onMessage" === e4 ? p.kg.debug("dispatch event: " + e4, null == t3 ? void 0 : t3.length) : p.kg.debug("dispatch event: " + e4, t3 || ""), this.handlerData) {
                var n2 = this.handlerData[r2][e4];
                n2 && n2(t3);
              }
            }, e3;
          }(), f = function() {
          };
          function m(e3) {
            this.onOpened = e3.onOpened || f, this.onPresence = e3.onPresence || f, this.onTextMessage = e3.onTextMessage || f, this.onPictureMessage = e3.onPictureMessage || f, this.onAudioMessage = e3.onAudioMessage || f, this.onVideoMessage = e3.onVideoMessage || f, this.onFileMessage = e3.onFileMessage || f, this.onLocationMessage = e3.onLocationMessage || f, this.onCmdMessage = e3.onCmdMessage || f, this.onCustomMessage = e3.onCustomMessage || f, this.onReceivedMessage = e3.onReceivedMessage || f, this.onDeliveredMessage = e3.onDeliveredMessage || f, this.onReadMessage = e3.onReadMessage || f, this.onRecallMessage = e3.onRecallMessage || f, this.onChannelMessage = e3.onChannelMessage || f, this.onError = e3.onError || f, this.onOffline = e3.onOffline || f, this.onOnline = e3.onOnline || f, this.onStatisticMessage = e3.onStatisticMessage || f, this.onContactInvited = e3.onContactInvited || f, this.onContactAgreed = e3.onContactAgreed || f, this.onContactRefuse = e3.onContactRefuse || f, this.onContactDeleted = e3.onContactDeleted || f, this.onContactAdded = e3.onContactAdded || f, this.onTokenWillExpire = e3.onTokenWillExpire || f, this.onTokenExpired = e3.onTokenExpired || f, this.onClosed = e3.onClosed || f, this.onPresenceStatusChange = e3.onPresenceStatusChange || f;
          }
          r(2772);
          var g = { biz: "", debug: false, token: "" }, E = "https://data-reporting.agora.io/report", v = "https://data-reporting.sh.agoralab.co/report", y = r(2071), T = r(1595), _ = function(e3) {
            var t3 = Number(T.C8[e3]);
            return t3 === T.C8.USER_LOGIN ? "MANUALLOGIN" : t3 === T.C8.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : t3 > T.C8.UNKNOWOPERATION && t3 < T.C8.REST_OPERATE ? "REST" : t3 > T.C8.REST_OPERATE && t3 < T.C8.MSYNC_OPERATE ? "MESSAGE" : t3 > T.C8.MSYNC_OPERATE && t3 < T.C8.ROSTER_OPERATE ? "ROSTER" : t3 > T.C8.ROSTER_OPERATE && t3 < T.C8.USER_OPERATE ? "USER" : t3 > T.C8.USER_OPERATE && t3 < T.C8.GROUP_OPERATE ? "GROUP" : t3 > T.C8.GROUP_OPERATE && t3 < T.C8.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION";
          }, R = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, I = function(e3) {
            return [s.iw.BAIDU, s.iw.WX, s.iw.DD, s.iw.ZFB, s.iw.TT, s.iw.QUICK_APP, s.iw.UNI].includes(e3.platform);
          }, O = function() {
            return e3 = 1, t3 = 99999, e3 = Math.ceil(e3), t3 = Math.floor(t3), Math.floor(Math.random() * (t3 - e3)) + e3;
            var e3, t3;
          }, S = r(4319), A = {}, C = (r(561), r(1249), function(e3, t3) {
            var r2 = {};
            for (var n2 in e3)
              Object.prototype.hasOwnProperty.call(e3, n2) && t3.indexOf(n2) < 0 && (r2[n2] = e3[n2]);
            if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
              var o2 = 0;
              for (n2 = Object.getOwnPropertySymbols(e3); o2 < n2.length; o2++)
                t3.indexOf(n2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, n2[o2]) && (r2[n2[o2]] = e3[n2[o2]]);
            }
            return r2;
          }), N = 1e3, b = function() {
            function e3(e4) {
              this.eventQueue = [], this.stock = N, this.config = e4, this.governor();
            }
            return e3.prototype.add = function(e4) {
              this.stock <= 0 ? console.warn("Event Report limit ".concat(N, " per minute")) : (this.eventQueue.push(e4), this.consume(), this.stock -= 1);
            }, e3.prototype.consume = function() {
              var e4 = this;
              0 !== this.eventQueue.length && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout(function() {
                var t3, r2 = e4.eventQueue.splice(0, 10), n2 = r2.filter(function(e5) {
                  return e5.appId === r2[0].appId;
                }), o2 = r2.filter(function(e5) {
                  return e5.appId !== r2[0].appId;
                });
                (t3 = e4.eventQueue).unshift.apply(t3, o2), e4.batchSend(n2);
              }, 1e3));
            }, e3.prototype.governor = function() {
              var e4 = this, t3 = setInterval(function() {
                e4.stock = N;
              }, 6e4);
              "undefined" != typeof addEventListener && addEventListener("beforeunload", function() {
                clearInterval(t3);
              });
            }, e3.prototype.batchSend = function(e4) {
              var t3, r2;
              if (void 0 === e4 && (e4 = []), 0 !== e4.length)
                try {
                  var n2 = e4.map(function(e5) {
                    e5.biz, e5.appId;
                    var t4 = e5.eventId, r3 = C(e5, ["biz", "appId", "eventId"]);
                    return { eventId: Number(t4), body: r3 };
                  });
                  !function(e5, t4) {
                    try {
                      var r3 = t4.biz, n3 = t4.appId, o2 = t4.data, i2 = t4.debug, a2 = t4.onSuccess;
                      if (!r3)
                        throw new Error("biz is not defined");
                      A.global || (A = s.P6.getEnvInfo());
                      var c2 = A;
                      if (I(c2)) {
                        var u2 = { url: i2 ? v : E, data: o2, method: "POST", timeout: S.zj, success: function() {
                          null == a2 || a2();
                        }, fail: function() {
                        }, complete: function() {
                        } }, l2 = { token: e5, appid: null != n3 ? n3 : "", sendts: "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)), biz: r3, debug: "".concat(i2) };
                        if ("zfb" === c2.platform || "dd" === c2.platform ? u2.headers = l2 : u2.header = l2, "dd" === c2.platform)
                          return c2.global.httpRequest(u2);
                        c2.global.request(u2);
                      } else {
                        var p2 = new XMLHttpRequest();
                        p2.onreadystatechange = function() {
                          2 === p2.readyState && (null == a2 || a2());
                        }, p2.open("POST", i2 ? v : E), p2.setRequestHeader("Content-Type", "application/json"), p2.setRequestHeader("token", e5), p2.setRequestHeader("appid", null != n3 ? n3 : ""), p2.setRequestHeader("sendts", "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3))), p2.setRequestHeader("biz", r3), p2.setRequestHeader("debug", "".concat(i2)), p2.send(JSON.stringify(o2));
                      }
                    } catch (e6) {
                      console.error(e6);
                    }
                  }(this.config.token, { biz: null === (t3 = e4[0]) || void 0 === t3 ? void 0 : t3.biz, appId: null === (r2 = e4[0]) || void 0 === r2 ? void 0 : r2.appId, data: n2, debug: this.config.debug, onSuccess: this.consume.bind(this) });
                } catch (e5) {
                  console.error(e5);
                }
            }, e3;
          }(), M = function() {
            return M = Object.assign || function(e3) {
              for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                for (var o2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, M.apply(this, arguments);
          }, k = new (function() {
            function e3(e4) {
              this.inited = false, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = g, e4 && this.init(e4);
            }
            return e3.prototype.init = function(e4) {
              var t3;
              if (void 0 === e4 && (e4 = {}), !e4.biz || !e4.token)
                throw new Error("Event Report: biz or token is not defined");
              try {
                this.appId = null !== (t3 = e4.appId) && void 0 !== t3 ? t3 : "", this.biz = e4.biz, this.config = M(M({}, g), e4), this.eventQueue = new b(this.config), this.log(e4), this.inited = true;
              } catch (e5) {
                console.error(e5);
              }
            }, e3.prototype.send = function(e4, t3, r2) {
              var n2;
              if (void 0 === t3 && (t3 = {}), this.inited) {
                var o2 = M(M({}, t3), { eventId: Number(e4), biz: this.biz, appId: null !== (n2 = null == r2 ? void 0 : r2.appId) && void 0 !== n2 ? n2 : this.appId });
                this.eventQueue.add(o2), this.log(o2);
              } else
                console.error("Event Report: init is not called");
            }, e3.prototype.log = function(e4) {
              try {
                if (this.config.debug) {
                  var t3 = e4.payload, r2 = function(e5, t4) {
                    var r3 = {};
                    for (var n2 in e5)
                      Object.prototype.hasOwnProperty.call(e5, n2) && t4.indexOf(n2) < 0 && (r3[n2] = e5[n2]);
                    if (null != e5 && "function" == typeof Object.getOwnPropertySymbols) {
                      var o2 = 0;
                      for (n2 = Object.getOwnPropertySymbols(e5); o2 < n2.length; o2++)
                        t4.indexOf(n2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, n2[o2]) && (r3[n2[o2]] = e5[n2[o2]]);
                    }
                    return r3;
                  }(e4, ["payload"]);
                  console.log("%c Event Report: ".concat(this.config.biz, " "), "background: #8A97FC; color: #fff"), console.table(r2), t3 && (console.info("payload:"), console.table(t3));
                }
              } catch (e5) {
                console.error(e5);
              }
            }, e3;
          }())(), w = function() {
            return w = Object.assign || function(e3) {
              for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                for (var o2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, w.apply(this, arguments);
          }, U = { requestName: "", subrequestid: "1", requestMethod: "GET", requestUrl: "", requestElapse: 0, code: 0, codeDesc: "", isLastApi: 0, isSuccess: 1 }, P = function() {
            function e3(e4) {
              this.platform = s.P6.getEnvInfo(), this.isReportDt = e4.isReport || false, this.isCollectDt = true, I(this.platform) && !this.isReportDt && (this.isCollectDt = false), this.eventQueue = [], this.accessChannel = y.yK, this.options = function(e5, t3) {
                t3.platform || (t3 = s.P6.getEnvInfo());
                var r2 = e5.org, n2 = e5.appkey, o2 = e5.deviceId, i2 = e5.sdkVersion, a2 = "undefined" != typeof navigator ? null === navigator || void 0 === navigator ? void 0 : navigator.userAgent : "".concat(t3.platform, "_mini_program");
                return { org: r2, appkey: n2, deviceId: o2, sdkServiceId: "sid_".concat(s.P6.getUniqueId(), "_").concat(O()), did: a2, sdkVersion: i2, os: y.Wc, sdkProduct: T.aC.web };
              }(e4, this.platform), this.sid = this.options.sdkServiceId, this.init(e4);
            }
            return e3.getInstance = function() {
              return e3.instance;
            }, e3.prototype.getServiceId = function() {
              return this.sid || "sid_0";
            }, e3.prototype.setIsReportDt = function(e4) {
              this.isReportDt = e4, e4 && this.rptEventQueue();
            }, e3.prototype.setIsCollectDt = function(e4) {
              this.isCollectDt = e4, e4 || (this.eventQueue = []);
            }, e3.prototype.rptEventQueue = function() {
              var e4 = this;
              this.eventQueue.length && this.eventQueue.forEach(function(t3, r2) {
                k.send(t3.eventId, t3.dt), r2 >= e4.eventQueue.length - 1 && (e4.eventQueue = []);
              });
            }, e3.prototype.init = function(t3) {
              e3.instance || (e3.instance = this, k.init({ biz: y.el, token: y.$x, appId: t3.appkey, debug: false }), this.reportInit());
            }, e3.prototype.reportInit = function() {
              if (this.isCollectDt) {
                var e4 = this.options, t3 = e4.did, r2 = e4.os, n2 = e4.sdkVersion, o2 = e4.deviceId;
                this.reportData(y.iB.INIT, { did: t3, os: r2, sdkVersion: n2, deviceId: o2 });
              }
            }, e3.prototype.geOperateFun = function(e4) {
              var t3 = this;
              if (!this.isCollectDt)
                return function() {
                };
              var r2 = 1, n2 = 0, o2 = "", i2 = R(), a2 = e4.uid, c2 = e4.operationName;
              a2 && (this.uid = a2);
              var u2 = { uid: this.uid, operationId: "opr_".concat(s.P6.getUniqueId(), "_").concat(O()), requestid: "req_".concat(s.P6.getUniqueId(), "_").concat(O()), operationName: c2 };
              return function(e5) {
                var a3, l2, p2, d2;
                if (e5.data.isSuccess ? (n2 = 0, o2 = "") : (0 === e5.data.code && (e5.data.code = y.Tp), n2 = null !== (a3 = e5.data.code) && void 0 !== a3 ? a3 : n2, o2 = null !== (l2 = e5.data.codeDesc) && void 0 !== l2 ? l2 : o2), (null === (p2 = e5.data) || void 0 === p2 ? void 0 : p2.accessChannel) && (t3.accessChannel = null === (d2 = e5.data) || void 0 === d2 ? void 0 : d2.accessChannel), e5.isRetry ? (r2++, e5.data.subrequestid = "".concat(r2)) : (u2.requestid = "req_".concat(s.P6.getUniqueId(), "_").concat(O()), r2 = 1), e5.data.isLastApi) {
                  var h2 = R();
                  e5.data.requestElapse = h2 - i2, e5.data.requestMethod = "", e5.data.subrequestid = "0", e5.data.code = 200 === n2 ? 0 : n2, e5.data.codeDesc = o2;
                } else
                  e5.data.requestName || (e5.data.requestName = c2);
                e5.data.requestElapse || (e5.data.requestElapse = R() - i2), t3.reportData.call(t3, y.iB.API, w(w(w(w({}, U), u2), e5.data), { accessChannel: t3.accessChannel, operationType: _(c2) })), e5.isEndApi && t3.reportData.call(t3, y.iB.API, w(w(w({}, u2), U), { isSuccess: e5.data.isSuccess, isLastApi: 1, subrequestid: "0", requestMethod: "", code: 200 === n2 ? 0 : n2, codeDesc: o2, requestElapse: e5.data.requestElapse, accessChannel: t3.accessChannel, operationType: _(c2) }));
              };
            }, e3.prototype.reportData = function(e4, t3) {
              return r2 = this, n2 = void 0, i2 = function() {
                var r3, n3, o3, i3, a2, c2, u2, l2;
                return function(e5, t4) {
                  var r4, n4, o4, i4, a3 = { label: 0, sent: function() {
                    if (1 & o4[0])
                      throw o4[1];
                    return o4[1];
                  }, trys: [], ops: [] };
                  return i4 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i4[Symbol.iterator] = function() {
                    return this;
                  }), i4;
                  function s2(i5) {
                    return function(s3) {
                      return function(i6) {
                        if (r4)
                          throw new TypeError("Generator is already executing.");
                        for (; a3; )
                          try {
                            if (r4 = 1, n4 && (o4 = 2 & i6[0] ? n4.return : i6[0] ? n4.throw || ((o4 = n4.return) && o4.call(n4), 0) : n4.next) && !(o4 = o4.call(n4, i6[1])).done)
                              return o4;
                            switch (n4 = 0, o4 && (i6 = [2 & i6[0], o4.value]), i6[0]) {
                              case 0:
                              case 1:
                                o4 = i6;
                                break;
                              case 4:
                                return a3.label++, { value: i6[1], done: false };
                              case 5:
                                a3.label++, n4 = i6[1], i6 = [0];
                                continue;
                              case 7:
                                i6 = a3.ops.pop(), a3.trys.pop();
                                continue;
                              default:
                                if (!((o4 = (o4 = a3.trys).length > 0 && o4[o4.length - 1]) || 6 !== i6[0] && 2 !== i6[0])) {
                                  a3 = 0;
                                  continue;
                                }
                                if (3 === i6[0] && (!o4 || i6[1] > o4[0] && i6[1] < o4[3])) {
                                  a3.label = i6[1];
                                  break;
                                }
                                if (6 === i6[0] && a3.label < o4[1]) {
                                  a3.label = o4[1], o4 = i6;
                                  break;
                                }
                                if (o4 && a3.label < o4[2]) {
                                  a3.label = o4[2], a3.ops.push(i6);
                                  break;
                                }
                                o4[2] && a3.ops.pop(), a3.trys.pop();
                                continue;
                            }
                            i6 = t4.call(e5, a3);
                          } catch (e6) {
                            i6 = [6, e6], n4 = 0;
                          } finally {
                            r4 = o4 = 0;
                          }
                        if (5 & i6[0])
                          throw i6[1];
                        return { value: i6[0] ? i6[1] : void 0, done: true };
                      }([i5, s3]);
                    };
                  }
                }(this, function(p2) {
                  switch (p2.label) {
                    case 0:
                      return p2.trys.push([0, 3, , 4]), r3 = R(), n3 = 0, e4 !== y.iB.API ? [3, 2] : [4, (d2 = this.platform, new Promise(function(e5) {
                        var t4;
                        d2.platform || (d2 = s.P6.getEnvInfo());
                        var r4 = "";
                        if (d2.platform === s.iw.WEB) {
                          var n4 = navigator.connection;
                          (null == n4 ? void 0 : n4.type) ? (null == n4 || n4.type, r4 = T.td.WIFI) : (null == n4 ? void 0 : n4.effectiveType) && (r4 = T.td[n4.effectiveType.toLocaleUpperCase()]), e5(r4);
                        } else
                          d2.platform === s.iw.NODE ? (r4 = T.td.UNKNOWN, e5(r4)) : null === (t4 = d2.global) || void 0 === t4 || t4.getNetworkType({ success: function(t5) {
                            r4 = T.td[t5.networkType.toLocaleUpperCase()], e5(r4);
                          } });
                      }))];
                    case 1:
                      n3 = p2.sent(), p2.label = 2;
                    case 2:
                      return o3 = this.options, i3 = o3.appkey, a2 = o3.sdkServiceId, c2 = o3.sdkProduct, u2 = w({ lts: r3, net: n3, appkey: i3, sdkServiceId: a2, sdkProduct: c2 }, t3), this.isReportDt ? k.send(e4, u2) : this.isCollectDt && this.eventQueue.push({ eventId: e4, dt: u2 }), [3, 4];
                    case 3:
                      return l2 = p2.sent(), console.warn(l2), [3, 4];
                    case 4:
                      return [2];
                  }
                  var d2;
                });
              }, new ((o2 = void 0) || (o2 = Promise))(function(e5, t4) {
                function a2(e6) {
                  try {
                    c2(i2.next(e6));
                  } catch (e7) {
                    t4(e7);
                  }
                }
                function s2(e6) {
                  try {
                    c2(i2.throw(e6));
                  } catch (e7) {
                    t4(e7);
                  }
                }
                function c2(t5) {
                  var r3;
                  t5.done ? e5(t5.value) : (r3 = t5.value, r3 instanceof o2 ? r3 : new o2(function(e6) {
                    e6(r3);
                  })).then(a2, s2);
                }
                c2((i2 = i2.apply(r2, n2 || [])).next());
              });
              var r2, n2, o2, i2;
            }, e3;
          }(), x = r(7288), L = r(7479), D = r(2856), j = r(9667), G = r(3770), B = r(1735), H = r(7384), F = r(70), W = r(8161);
          function Z(e3) {
            return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, Z(e3);
          }
          var K = function() {
            return K = Object.assign || function(e3) {
              for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
                for (var o2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, K.apply(this, arguments);
          }, q = function(e3, t3, r2, n2) {
            return new (r2 || (r2 = Promise))(function(o2, i2) {
              function a2(e4) {
                try {
                  c2(n2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(n2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((n2 = n2.apply(e3, t3 || [])).next());
            });
          }, z = function(e3, t3) {
            var r2, n2, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                        return o2;
                      switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], n2 = 0;
                    } finally {
                      r2 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, V = s.P6.getEnvInfo(), X = "web" === V.platform, J = { CLOSED: 3, CLOSING: 2, CONNECTING: 0, OPEN: 1 }, Y = function() {
            function e3(t3) {
              var r2, n2;
              if (this.name = "connection", this.max_cache_length = 100, this.enableReportLogs = false, this._reportLogs = false, this._reportInterval = S.XV, this._isLogging = false, this.unSyncQueue = [], this.lastHeartbeat = Date.now(), this.isDebug = t3.isDebug || false, this.isReport = false, this.enableReportLogs = t3.enableReportLogs || false, this.uploadPartEnable = true, this.isHttpDNS = void 0 === t3.isHttpDNS ? X : t3.isHttpDNS, this.heartBeatWait = t3.heartBeatWait || S.al, this.autoReconnectNumMax = t3.autoReconnectNumMax || S.ke, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = t3.delivery || false, this.disconnectedReason = void 0, this.loginInfoCustomExt = void 0, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = t3.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = t3.apiUrl || "", this.url = t3.url || "", this.https = t3.https || "undefined" != typeof window && "https:" === (null === (r2 = window.location) || void 0 === r2 ? void 0 : r2.protocol), this.version = "4.11.0", this.deviceId = t3.deviceId || "webim", this.isFixedDeviceId = null === (n2 = t3.isFixedDeviceId) || void 0 === n2 || n2, this.osType = 16, this.useOwnUploadFun = t3.useOwnUploadFun || false, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.useReplacedMessageContents = t3.useReplacedMessageContents || false, this.logOut = true, this.context = { jid: { appKey: "", clientResource: "", domain: "easemob.com", name: "" }, userId: "", appKey: "", status: 0, restTokenData: "", appName: "", orgName: "", root: {}, accessToken: "" }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unMSyncSendMsgMap = /* @__PURE__ */ new Map(), this.mr_cache = {}, this.reconnecting = false, this._offlineMessagePullState = c.a.SYNC_INIT, this._offlineMessagePullQueue = [], this.uniPushConfig = {}, this.uniPush = null, this.isRegisterPush = false, this.pushCertificateName = "", "string" != typeof this.appKey || 2 !== this.appKey.split("#").length)
                throw Error("Illegal appKey: ".concat(this.appKey));
              this.devInfos = this.appKey.split("#"), this.orgName = this.devInfos[0], this.appName = this.devInfos[1], this.listen = m.bind(this), this.mSync = this.usePlugin(l.ZP), this.eventHandler = this.usePlugin(h), Object.assign(e3.prototype, L), Object.assign(e3.prototype, D), Object.assign(e3.prototype, j), Object.assign(e3.prototype, G), Object.assign(e3.prototype, B), Object.assign(e3.prototype, H), Object.assign(e3.prototype, F), this.dataReport = new P({ appkey: this.appKey, org: this.orgName, sdkVersion: this.version, deviceId: this.deviceId, isReport: this.isReport });
              var o2 = 0, i2 = this;
              if (Object.defineProperty(s.P6, "ajaxUnconventionalErrorTimes", { set: function(e4) {
                0 !== e4 && (p.kg.debug("rest api request fail times: ".concat(e4)), (o2 = e4) % 5 == 0 && i2.isHttpDNS && (p.kg.debug("refresh dns config when rest request fail."), ue.call(i2, function() {
                })));
              }, get: function() {
                return o2;
              } }), this.isFixedDeviceId) {
                var a2 = s.P6.getLocalDeviceInfo();
                a2 && (this.clientResource = JSON.parse(a2).deviceId);
              }
              p.kg.debug("init SDK: Conn ".concat(this.version, " ").concat(V.platform));
            }
            return e3.prototype.usePlugin = function(e4, t3) {
              if ("push" !== t3)
                return t3 ? void (this[t3] = new e4(this)) : new e4(this);
              e4.config && e4.emPush ? (this.uniPushConfig = e4.config, this.uniPush = e4.emPush) : p.kg.error("use push plugin failed", "emPush", this.uniPush, "config", this.uniPushConfig);
            }, e3.prototype.listen = function(e4) {
            }, e3.prototype.addEventHandler = function(e4, t3) {
            }, e3.prototype.removeEventHandler = function(e4) {
            }, e3.prototype.registerUser = function(e4) {
              return q(this, void 0, void 0, function() {
                var t3, r2;
                return z(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      if (!e4.username || !e4.password)
                        throw Error("Invalid parameter");
                      n2.label = 1;
                    case 1:
                      if (n2.trys.push([1, 5, , 6]), !this.orgName && !this.appName)
                        throw a.Z.create({ type: u.E.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "signup error" });
                      return t3 = this.dataReport.geOperateFun({ uid: e4.username, operationName: T.fI.REGISTER }), this.isHttpDNS ? (this.dnsIndex = 0, [4, ue.call(this, t3)]) : [3, 3];
                    case 2:
                      n2.sent(), n2.label = 3;
                    case 3:
                      return [4, $2.call(this, e4, { rpt: t3 })];
                    case 4:
                      return [2, n2.sent()];
                    case 5:
                      throw r2 = n2.sent(), e4.error && e4.error(r2), r2;
                    case 6:
                      return [2];
                  }
                });
              });
            }, e3.prototype.open = function(e4) {
              var t3;
              return q(this, void 0, void 0, function() {
                var r2, n2, o2, i2, c2, l2;
                return z(this, function(d2) {
                  switch (d2.label) {
                    case 0:
                      if (p.kg.debug("open", e4.user, "isLogout:", this.logOut), this._isLogging)
                        throw n2 = a.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_ERROR, message: "Currently logging in, please wait." });
                      if (!this.logOut)
                        throw n2 = a.Z.create({ type: u.E.WEBIM_USER_ALREADY_LOGIN, message: "The user has logged in." });
                      this.retryConnectTimes = 0, this._isLogging = true, d2.label = 1;
                    case 1:
                      if (d2.trys.push([1, 8, 9, 10]), "web" === V.platform && (r2 = s.P6.detectBrowser(), p.kg.debug("browser", r2)), n2 = ae.call(this, e4))
                        throw null === (t3 = this.onError) || void 0 === t3 || t3.call(this, n2), n2;
                      return e4.accessToken && (this.token = e4.accessToken), o2 = K({}, e4), i2 = this.dataReport.geOperateFun({ uid: e4.user, operationName: T.fI.LOGIN }), this.dnsIndex = 0, this.isHttpDNS ? [4, ue.call(this, i2)] : [3, 3];
                    case 2:
                      return d2.sent(), [3, 5];
                    case 3:
                      return "web" !== V.platform && this.enableReportLogs ? [4, ue.call(this, i2)] : [3, 5];
                    case 4:
                      d2.sent(), d2.label = 5;
                    case 5:
                      return p.kg.initReport({ report: this._reportLogs, reportInterval: this._reportInterval, connection: this }), [4, te.call(this, o2, { rpt: i2 })];
                    case 6:
                      return c2 = d2.sent(), [4, oe.call(this, i2)];
                    case 7:
                      return d2.sent(), p.kg.debug("grantType", this.grantType), s.P6.listenNetwork(re.bind(this), ne.bind(this)), s.P6.listenBrowserVisibility(function() {
                        p.kg.debug("visibility: true");
                      }, function() {
                        p.kg.debug("visibility: false");
                      }), [2, c2];
                    case 8:
                      throw l2 = d2.sent(), this._isLogging = false, e4.error && e4.error(l2), p.kg.error("login failed", l2), l2;
                    case 9:
                      return p.kg.reportLog(), [7];
                    case 10:
                      return [2];
                  }
                });
              });
            }, e3.prototype.isOpened = function() {
              return this.sock && this.sock.readyState === J.OPEN || false;
            }, e3.prototype.close = function() {
              var e4, t3, r2;
              p.kg.debug("call close"), p.kg._stopReportLogs(), this.logOut = true, this.disconnectedReason = void 0, this.reconnecting = false, this.context.status = u.E.STATUS_CLOSING, this.sock && this.sock.close(), null === (e4 = this.unMSyncSendMsgMap) || void 0 === e4 || e4.clear(), this.stopHeartBeat(), this.rejectMessage(), this.context.status = u.E.STATUS_CLOSED, this._load_msg_cache = [], this._queues = [], this.unSyncQueue = [], this._msgHash = {}, this.mr_cache = {}, this.token = "", this.context.accessToken = "", this.isRegisterPush = false, this.clearTokenTimeout(), null === (r2 = null === (t3 = null == this ? void 0 : this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) || void 0 === r2 || r2.close(), this.connectionTimer && clearTimeout(this.connectionTimer), this.provisionTimer && clearTimeout(this.provisionTimer), this.probingTimer && clearTimeout(this.probingTimer);
            }, e3.prototype.downloadAndParseCombineMessage = function(e4) {
              var t3 = this, r2 = e4.url, n2 = e4.secret;
              return new Promise(function(e5, o2) {
                var i2, a2, c2 = s.P6.getEnvInfo(), l2 = "web" !== c2.platform && "node" !== c2.platform && "quick_app" !== c2.platform && (null === (a2 = null === (i2 = c2.global) || void 0 === i2 ? void 0 : i2.canIUse) || void 0 === a2 ? void 0 : a2.call(i2, "getFileSystemManager")), d2 = function(r3) {
                  var n3 = function(e6) {
                    o2({ type: u.E.PARSE_FILE_ERROR, message: "Read file failed", data: e6 });
                  }, i3 = function(r4) {
                    return q(t3, void 0, void 0, function() {
                      var t4, n4, i4, a4, c3, d4, h4, f2, m2, g2, E2, v2, y2;
                      return z(this, function(T2) {
                        switch (T2.label) {
                          case 0:
                            for (t4 = l2 ? new Uint8Array(r4.data) : new Uint8Array(r4.target.result), n4 = 0, i4 = 0, a4 = 2, c3 = t4.subarray(n4, n4 + a4), d4 = s.P6.Uint8ArrayToString(c3), p.kg.debug("file header:", d4), i4 += a4, h4 = 0, f2 = 2; f2 < t4.length - 1; f2++)
                              f2 % 2 == 1 && (h4 ^= t4[f2]);
                            if (m2 = t4.subarray(t4.length - 1, t4.length), p.kg.debug("checkResult:", h4, m2[0] === h4), m2[0] !== h4)
                              return [2, o2({ type: u.E.PARSE_FILE_ERROR, message: "File verification failed" })];
                            if ("cm" !== d4)
                              return [3, 7];
                            T2.label = 1;
                          case 1:
                            T2.trys.push([1, 5, , 6]), g2 = [], E2 = function() {
                              var e6, r5, o3, s2;
                              return z(this, function(c4) {
                                switch (c4.label) {
                                  case 0:
                                    return n4 += a4, i4 += a4 = 4, e6 = t4.subarray(n4, n4 + a4), n4 += a4, a4 = e6.reduce(function(t5, r6, n5) {
                                      return t5 + (r6 << 8 * (e6.length - n5 - 1));
                                    }, 0), i4 += a4, r5 = t4.subarray(n4, n4 + a4), o3 = (o3 = v2.root.lookup("easemob.pb.Meta")).decode(r5), [4, W.Z.call(v2, o3, 0, true, true)];
                                  case 1:
                                    return s2 = c4.sent(), g2.push(s2), [2];
                                }
                              });
                            }, v2 = this, T2.label = 2;
                          case 2:
                            return i4 < t4.length - 1 ? [5, E2()] : [3, 4];
                          case 3:
                            return T2.sent(), [3, 2];
                          case 4:
                            return [2, e5(g2)];
                          case 5:
                            return y2 = T2.sent(), o2({ type: u.E.PARSE_FILE_ERROR, message: "Parse file failed", data: y2 }), [3, 6];
                          case 6:
                            return [3, 8];
                          case 7:
                            return [2, o2({ type: u.E.PARSE_FILE_ERROR, message: "File verification failed" })];
                          case 8:
                            return [2];
                        }
                      });
                    });
                  };
                  if (l2) {
                    var a3 = c2.global.getFileSystemManager(), d3 = r3.tempFilePath;
                    a3.readFile({ filePath: d3, success: i3, fail: n3 });
                  } else if (r3 instanceof Blob) {
                    var h3 = new FileReader();
                    h3.readAsArrayBuffer(r3), h3.onerror = n3, h3.onload = i3;
                  }
                }, h2 = function(e6) {
                  o2({ type: u.E.WEBIM_DOWNLOADFILE_ERROR, message: "Download failed, please try again", data: e6 });
                };
                l2 ? c2.global.downloadFile({ url: r2, success: d2, fail: h2 }) : s.P6.download.call(t3, { url: r2, headers: { Accept: "application/json" }, onFileDownloadComplete: d2, onFileDownloadError: h2, secret: n2, accessToken: t3.context.accessToken });
              });
            }, e3.prototype.stopHeartBeat = function() {
              clearInterval(this.heartBeatID);
            }, e3.prototype.clear = function() {
              this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0;
            }, e3.prototype.heartBeat = function() {
            }, e3.prototype.renewToken = function(e4) {
              var t3 = this;
              return this.isOpened() ? this.getTokenExpireTimestamp(e4).then(function(r2) {
                var n2 = r2.expire_timestamp, o2 = Date.now();
                return t3.expirationTime = n2, t3.expiresIn = n2 - o2, t3.token = e4, t3.context.accessToken = e4, t3.clearTokenTimeout(), t3.tokenExpireTimeCountDown(t3.expiresIn), { status: true, token: e4, expire: n2 };
              }) : Promise.reject({ status: false });
            }, e3.prototype.clearTokenTimeout = function() {
              p.kg.info("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer), this.tokenWillExpireTimer = null, this.tokenExpiredTimer = null;
            }, e3.prototype.tokenExpireTimeCountDown = function(e4) {
              var t3 = this;
              p.kg.info("tokenExpireTimeCountDown", e4), e4 > Math.pow(2, 31) - 1 && (e4 = Math.pow(2, 31) - 1), this.tokenWillExpireTimer = setTimeout(function() {
                var r2;
                t3.onTokenWillExpire && t3.onTokenWillExpire(), null === (r2 = t3.eventHandler) || void 0 === r2 || r2.dispatch("onTokenWillExpire"), p.kg.info("onTokenWillExpire", Math.floor(e4 / 2));
              }, e4 / 2), this.tokenExpiredTimer = setTimeout(function() {
                var e5;
                p.kg.info("onTokenExpired", 0), t3.onTokenExpired && t3.onTokenExpired(), null === (e5 = t3.eventHandler) || void 0 === e5 || e5.dispatch("onTokenExpired"), t3.close();
              }, e4);
            }, e3.prototype.compareTokenExpireTime = function(e4, t3) {
              var r2, n2 = Number(t3) - Number(e4);
              p.kg.debug("compareTokenExpireTime", n2), n2 <= this.expiresIn / 2 && n2 > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onTokenWillExpire"), p.kg.info("onTokenWillExpire", n2)) : n2 <= 0 && (this.closeByTokenExpired(), p.kg.info("closeByTokenExpired", n2));
            }, e3.prototype.closeByTokenExpired = function() {
              var e4;
              p.kg.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), null === (e4 = this.eventHandler) || void 0 === e4 || e4.dispatch("onTokenExpired"), this.close();
            }, e3.prototype.rejectMessage = function() {
              var e4 = this, t3 = Object.keys(this._msgHash);
              if (t3.length > 0) {
                var r2 = a.Z.create({ type: u.E.MESSAGE_WEBSOCKET_DISCONNECTED, message: "websocket disconnected" });
                t3.forEach(function(t4) {
                  var n2, o2, i2;
                  (null === (n2 = e4.unMSyncSendMsgMap) || void 0 === n2 ? void 0 : n2.has(t4)) || (e4._msgHash[t4].reject instanceof Function && e4._msgHash[t4].reject(r2), null === (i2 = null === (o2 = e4._localCache) || void 0 === o2 ? void 0 : o2.getInstance()) || void 0 === i2 || i2.updateLocalMessage(t4, { serverMsgId: t4, status: x.r.FAIL }), e4._msgHash[t4].fail instanceof Function && e4._msgHash[t4].fail(r2), e4._msgHash[t4].messageTimer && clearTimeout(e4._msgHash[t4].messageTimer), delete e4._msgHash[t4]);
                });
              }
            }, e3.prototype.resetConnState = function() {
              this.mSync.stopHeartBeat(), this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0;
            }, e3.prototype.reconnect = function(e4) {
              var t3, r2 = this;
              if (this.logout)
                return p.kg.warn("The user has already logged out when reconnecting");
              p.kg.debug("socket reconnect readyState", this.sock.readyState), (this.sock.readyState !== J.CONNECTING || e4) && (this.sock.readyState !== J.OPEN || e4) && (p.kg.info("reconnect: time", this.times), p.kg.info("reconnect sock.readyState: ", this.sock.readyState), false === this.reconnecting && (this.reconnecting = true), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onReconnecting"), this.rejectMessage(), this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1), setTimeout(function() {
                (r2.sock.readyState !== J.OPEN || e4) && (p.kg.info("login sock.readyState: ", r2.sock.readyState), r2.sock.close(), ie.call(r2).catch(function(e5) {
                  p.kg.error("reconnect websocket failed", e5);
                }), r2.times++);
              }, 500 * this.times), this.autoReconnectNumTotal++);
            }, e3.prototype.send = function(e4) {
              return Promise.resolve(null);
            }, e3.prototype.setLoginInfoCustomExt = function(e4) {
              if (p.kg.debug("setLoginInfoCustomExt", "params:", e4), e4) {
                if ("string" != typeof e4)
                  throw new Error("ext must be a string");
                if (e4.length > 1024)
                  throw new Error("ext length must be less than 1024");
              }
              this.loginInfoCustomExt = e4;
            }, e3.prototype.onShow = function() {
              var e4 = this;
              p.kg.debug("execute onshow callback", this.lastHeartbeat), !this.logOut && !this.reconnecting && Date.now() - this.lastHeartbeat > 2e3 && (p.kg.debug("send ping"), this.mSync.sendUnreadDeal(), this.probingTimer && clearTimeout(this.probingTimer), this.probingTimer = setTimeout(function() {
                p.kg.error("Websocket connection timeout"), e4.logOut || e4.reconnecting || e4.reconnect(true);
              }, S.xd));
            }, e3._getSock = function() {
            }, e3;
          }();
          function Q(e3, t3) {
            var r2 = t3.rpt, n2 = t3.isRetry, o2 = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users", i2 = { requestName: T.c.RESISTER, requestUrl: o2 }, a2 = { headers: { "Content-Type": "application/json" }, url: o2, dataType: "json", data: JSON.stringify({ username: e3.username, password: e3.password, nickname: e3.nickname || "" }) };
            return s.P6.ajax(a2, T.fI.SDK_INTERNAL).then(function(e4) {
              var t4 = K(K({}, e4), { type: u.E.REQUEST_SUCCESS }), o3 = e4.extraInfo, a3 = o3.httpCode, s2 = o3.elapse;
              return r2({ isEndApi: true, isRetry: n2, data: K(K({}, { requestElapse: s2, isSuccess: 1, code: a3 }), i2) }), t4;
            }).catch(function(e4) {
              var t4 = e4.extraInfo, o3 = t4.elapse, a3 = t4.httpCode, s2 = t4.errDesc;
              throw r2({ isRetry: n2, data: K(K({}, { requestElapse: o3, isSuccess: 0, code: a3, codeDesc: s2 }), i2) }), e4;
            });
          }
          function $2(e3, t3) {
            return q(this, void 0, void 0, function() {
              var r2, n2;
              return z(this, function(o2) {
                switch (o2.label) {
                  case 0:
                    r2 = t3.rpt, o2.label = 1;
                  case 1:
                    return o2.trys.push([1, 3, , 7]), [4, Q.call(this, e3, t3)];
                  case 2:
                    return [2, o2.sent()];
                  case 3:
                    return !((n2 = o2.sent()).message.includes("Open registration doesn't allow") || n2.message.includes("username be unique") || n2.message.includes("is not legal")) && this.isHttpDNS && this.restIndex + 1 < this.restTotal ? (this.restIndex++, pe.call(this), [4, $2.call(this, e3, { rpt: r2 })]) : [3, 5];
                  case 4:
                    return [2, o2.sent()];
                  case 5:
                    throw p.kg.error("retry signup failed", n2), r2({ data: { isLastApi: 1, isSuccess: 0 } }), n2;
                  case 6:
                    return [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }
          function ee(e3, t3) {
            var r2;
            return q(this, void 0, void 0, function() {
              var n2, o2, i2, a2, c2, u2, l2, d2, h2, f2 = this;
              return z(this, function(m2) {
                switch (m2.label) {
                  case 0:
                    if (n2 = ae.call(this, e3))
                      throw n2;
                    return p.kg.debug("socket readyState", null === (r2 = this.sock) || void 0 === r2 ? void 0 : r2.readyState), o2 = t3.rpt, i2 = t3.isRetry, se.call(this, e3), this.user = e3.user, a2 = this.context.appName, c2 = this.context.orgName, u2 = this.apiUrl + "/" + c2 + "/" + a2 + "/token", e3.accessToken ? (p.kg.debug("login with accessToken"), this.grantType = "accessToken", this.token = e3.accessToken, this.context.accessToken = e3.accessToken, this.context.restTokenData = e3.accessToken, [2, { accessToken: e3.accessToken }]) : [3, 1];
                  case 1:
                    return e3.agoraToken ? (p.kg.debug("login with agoraToken"), this.grantType = "agoraToken", this.token = e3.agoraToken, this.context.accessToken = e3.agoraToken, this.context.restTokenData = e3.agoraToken, [2, { accessToken: e3.agoraToken }]) : [3, 2];
                  case 2:
                    return p.kg.debug("login with password"), this.grantType = "password", l2 = { grant_type: "password", username: e3.user, password: e3.pwd, timestamp: +/* @__PURE__ */ new Date() }, d2 = JSON.stringify(l2), h2 = { headers: { "Content-Type": "application/json" }, url: u2, dataType: "json", data: d2, version: this.version }, p.kg.debug("start get token"), [4, s.P6.ajax(h2, T.fI.SDK_INTERNAL).then(function(e4) {
                      p.kg.debug("get token success", e4), f2.token = e4.access_token, f2.context.restTokenData = e4.access_token, f2.context.accessToken = e4.access_token, f2.expiresIn = e4.expires_in;
                      var t4 = e4.extraInfo, r3 = t4.httpCode, n3 = t4.elapse, a3 = { requestName: T.c.LOGIN_BY_PWD, requestElapse: n3, requestUrl: u2, isSuccess: 1, code: r3 };
                      return o2({ isRetry: i2, data: a3 }), { accessToken: e4.access_token, duration: e4.expires_in };
                    }).catch(function(e4) {
                      var t4 = e4.extraInfo, r3 = t4.elapse, n3 = t4.httpCode, a3 = t4.errDesc, s2 = { requestName: T.c.LOGIN_BY_PWD, requestElapse: r3, requestUrl: u2, isSuccess: 0, code: n3, codeDesc: a3 };
                      throw o2({ isRetry: i2, data: s2 }), e4;
                    })];
                  case 3:
                    return [2, m2.sent()];
                }
              });
            });
          }
          function te(e3, t3) {
            var r2;
            return q(this, void 0, void 0, function() {
              var n2, o2, i2;
              return z(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    n2 = t3.rpt, s2.label = 1;
                  case 1:
                    return s2.trys.push([1, 3, , 7]), [4, ee.call(this, e3, t3)];
                  case 2:
                    return [2, s2.sent()];
                  case 3:
                    return "invalid password" !== (o2 = s2.sent()).message && "user not found" !== o2.message && this.isHttpDNS && this.restIndex + 1 < this.restTotal ? (this.restIndex++, pe.call(this), [4, te.call(this, e3, { rpt: n2, isRetry: true })]) : [3, 5];
                  case 4:
                    return [2, s2.sent()];
                  case 5:
                    throw p.kg.error("retry login failed", o2), n2({ data: { isLastApi: 1, isSuccess: 0 } }), this.clear(), i2 = void 0, o2.error && o2.error_description ? (i2 = a.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_USERGRID_ERROR, message: o2.error_description, data: o2 }), this.onError && this.onError(i2), i2) : (i2 = a.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_ERROR, message: null !== (r2 = o2.message) && void 0 !== r2 ? r2 : "login failed", data: o2 }), this.onError && this.onError(i2), i2);
                  case 6:
                    return [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }
          function re() {
            var e3;
            p.kg.debug("online"), this.onOnline && this.onOnline(), null === (e3 = this.eventHandler) || void 0 === e3 || e3.dispatch("onOnline"), this.sock && 1 !== this.sock.readyState && (p.kg.debug("sock.readyState:", this.sock.readyState), this.logOut || this.reconnecting || this.reconnect());
          }
          function ne() {
            var e3, t3;
            p.kg.debug("offline"), null === (e3 = this.sock) || void 0 === e3 || e3.close(), this.onOffline && this.onOffline(), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onOffline");
          }
          function oe(e3) {
            var t3, r2, n2;
            return q(this, void 0, void 0, function() {
              var o2, i2, a2, s2;
              return z(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    o2 = (/* @__PURE__ */ new Date()).getTime(), c2.label = 1;
                  case 1:
                    return c2.trys.push([1, 3, , 7]), [4, ie.call(this, e3)];
                  case 2:
                    return i2 = c2.sent(), e3 && e3({ data: { isLastApi: 1, isSuccess: 1, accessChannel: null === (t3 = this.socketHost[this.hostIndex]) || void 0 === t3 ? void 0 : t3.channel } }), [2, i2];
                  case 3:
                    if (a2 = c2.sent(), p.kg.error("connect to msync failed times:", this.retryConnectTimes, a2), S.bh.includes(a2.type))
                      throw e3 && e3({ data: { isLastApi: 1, isSuccess: 0, accessChannel: null === (r2 = this.socketHost[this.hostIndex]) || void 0 === r2 ? void 0 : r2.channel, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || a2.message } }), a2;
                    return this.retryConnectTimes++, this.retryConnectTimes < S.Ge ? (this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1, le.call(this)), a2.type === u.E.REQUEST_TIMEOUT && "provision timeout" === a2.message || (s2 = (/* @__PURE__ */ new Date()).getTime() - o2, null == e3 || e3({ isRetry: 1 !== this.retryConnectTimes, data: { requestUrl: this.url, requestName: T.c.CONNECT_WEBSOCKET, isSuccess: 0, code: T.dd.closed, requestElapse: s2, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || "websocket close" } })), [4, oe.call(this, e3)]) : [3, 5];
                  case 4:
                    return c2.sent(), [3, 6];
                  case 5:
                    throw p.kg.error("connect failed three times", a2), e3 && e3({ data: { isLastApi: 1, isSuccess: 0, accessChannel: null === (n2 = this.socketHost[this.hostIndex]) || void 0 === n2 ? void 0 : n2.channel, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || a2.message } }), a2;
                  case 6:
                    return [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }
          function ie(e3) {
            var t3 = this, r2 = (/* @__PURE__ */ new Date()).getTime(), n2 = "pending";
            return new Promise(function(o2, i2) {
              var c2;
              t3._getSock ? void 0 === (c2 = t3._getSock()).readyState && (t3.needSetReadyState = true) : (c2 = new WebSocket(t3.url)).binaryType = "arraybuffer", t3.sock = c2, t3.connectionTimer && clearTimeout(t3.connectionTimer), t3.connectionTimer = setTimeout(function() {
                t3.disconnectedReason = { type: u.E.REQUEST_TIMEOUT, message: "connection timeout" }, c2.close(), null == i2 || i2(t3.disconnectedReason);
              }, S.th), p.kg.debug("start connect ws"), t3.connectionResolve = o2, t3.connectionReject = i2;
              var l2 = function() {
                if (t3.connectionTimer && clearTimeout(t3.connectionTimer), p.kg.debug("websocket onOpen"), e3) {
                  var n3 = (/* @__PURE__ */ new Date()).getTime() - r2;
                  e3({ isRetry: 0 !== t3.retryConnectTimes, data: { requestUrl: t3.url, requestName: T.c.CONNECT_WEBSOCKET, isSuccess: 1, code: T.dd.success, requestElapse: n3 } });
                }
                var o3;
                o3 = t3._getSock ? s.P6.flow([t3.mSync.generateProvision, t3.mSync.base64transform])() : t3.mSync.generateProvision();
                try {
                  t3.provisionTimer && clearTimeout(t3.provisionTimer), t3.provisionTimer = setTimeout(function() {
                    p.kg.debug("provision timeout"), t3.disconnectedReason = a.Z.create({ type: u.E.REQUEST_TIMEOUT, message: "provision timeout" }), c2.close(), null == i2 || i2(t3.disconnectedReason);
                  }, S.Nt), c2.send(o3);
                } catch (e4) {
                  var l3 = a.Z.create({ type: u.E.SDK_RUNTIME_ERROR, message: "send message error", data: e4 });
                  t3.onError && t3.onError(l3);
                }
              }, d2 = function(e4) {
                t3.connectionTimer && clearTimeout(t3.connectionTimer), setTimeout(function() {
                  var r3, o3, s2, c3, l3, d3, h3;
                  if (p.kg.debug("websocket onClose, isLogging:", t3._isLogging, e4), t3.needSetReadyState && (t3.sock.readyState = J.CLOSED), t3._isLogging)
                    return null == i2 || i2({ type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }), void (n2 = "rejected");
                  if ("rejected" !== n2)
                    if (n2 = "rejected", t3.logOut)
                      t3.clear(), t3.resetConnState(), null === (o3 = null === (r3 = null == t3 ? void 0 : t3._localCache) || void 0 === r3 ? void 0 : r3.getInstance()) || void 0 === o3 || o3.close(), t3.onClosed && t3.onClosed(), null === (s2 = t3.eventHandler) || void 0 === s2 || s2.dispatch("onDisconnected", t3.disconnectedReason), null == i2 || i2(t3.disconnectedReason || { type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" });
                    else if (t3.autoReconnectNumTotal < t3.autoReconnectNumMax) {
                      t3.reconnect();
                      var f2 = { type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                      t3.onError && t3.onError(f2), t3.autoReconnectNumTotal % t3.refreshDNSIntervals == 0 && "web" === V.platform && t3.isHttpDNS && (p.kg.debug("refresh dns config when websocket close"), ue.call(t3, function() {
                      }));
                    } else
                      null === (c3 = t3.unMSyncSendMsgMap) || void 0 === c3 || c3.clear(), t3.rejectMessage(), f2 = { type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }, t3.disconnectedReason = a.Z.create({ type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), t3.onError && t3.onError(f2), null === (d3 = null === (l3 = null == t3 ? void 0 : t3._localCache) || void 0 === l3 ? void 0 : l3.getInstance()) || void 0 === d3 || d3.close(), t3.onClosed && t3.onClosed(), null === (h3 = t3.eventHandler) || void 0 === h3 || h3.dispatch("onDisconnected", t3.disconnectedReason), t3.resetConnState(), t3.reconnecting = false, null == i2 || i2(f2), p.kg.debug("reconnect fail");
                  else
                    p.kg.debug("reject is null");
                }, 0);
              }, h2 = function(e4) {
                var r3 = t3.mSync, n3 = r3.decodeMSync, o3 = r3.distributeMSync;
                s.P6.flow([n3, o3])(e4);
              };
              "web" === V.platform ? (c2.onopen = l2, c2.onclose = d2, c2.onmessage = h2) : (c2.onOpen(l2), c2.onMessage(h2), c2.onClose(d2), "undefined" != typeof window && window.WebSocket || c2.onError(function(e4) {
                var r3, o3, s2, c3;
                if (t3.connectionTimer && clearTimeout(t3.connectionTimer), p.kg.debug("websocket onerror, isLogging:", t3._isLogging, e4), t3.sock.readyState !== J.CLOSED && (t3.sock = K(K({}, t3.sock), { close: t3.sock.close, send: t3.sock.send, readyState: J.CLOSED })), t3.onError && t3.onError({ type: u.E.WEBIM_CONNECTION_ERROR, message: "on socket error", data: e4 }), t3._isLogging)
                  return null == i2 || i2({ type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }), void (n2 = "rejected");
                if ("rejected" !== n2) {
                  if (n2 = "rejected", !t3.logOut)
                    if (t3.autoReconnectNumTotal < t3.autoReconnectNumMax)
                      p.kg.debug("sock.onError reconnect", t3.autoReconnectNumTotal, t3.autoReconnectNumMax), t3.reconnect(), t3.autoReconnectNumTotal % t3.refreshDNSIntervals == 0 && "web" === V.platform && t3.isHttpDNS && (p.kg.debug("refresh dns config when websocket error"), ue.call(t3, function() {
                      }));
                    else {
                      var l3 = { type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                      t3.disconnectedReason = a.Z.create({ type: u.E.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), null === (r3 = t3.unMSyncSendMsgMap) || void 0 === r3 || r3.clear(), t3.rejectMessage(), t3.onError && t3.onError(l3), null === (s2 = null === (o3 = null == t3 ? void 0 : t3._localCache) || void 0 === o3 ? void 0 : o3.getInstance()) || void 0 === s2 || s2.close(), t3.onClosed && t3.onClosed(), null === (c3 = t3.eventHandler) || void 0 === c3 || c3.dispatch("onDisconnected", t3.disconnectedReason), t3.resetConnState(), t3.reconnecting = false, null == i2 || i2(l3), p.kg.debug("reconnect fail");
                    }
                } else
                  p.kg.debug("reject is null");
              }));
            });
          }
          function ae(e3) {
            if ("object" !== Z(e3) || null === e3)
              return a.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_ERROR, message: "the param is illegal" });
            if (!e3.user || "string" != typeof e3.user) {
              var t3 = a.Z.create({ type: u.E.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR, message: "the user is empty or type is not string" });
              return p.kg.debug("open params error", t3), t3;
            }
            return !("agoraToken" in e3) || e3.agoraToken && "string" == typeof e3.agoraToken ? !("accessToken" in e3) || e3.accessToken && "string" == typeof e3.accessToken ? "accessToken" in e3 || "agoraToken" in e3 || e3.pwd ? void 0 : (t3 = a.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_ERROR, message: "the accessToken or pwd is illegal" }), p.kg.debug("open params error", t3), t3) : (t3 = a.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_ERROR, message: "the accessToken is illegal" }), p.kg.debug("open params error", t3), t3) : (t3 = a.Z.create({ type: u.E.WEBIM_CONNCTION_OPEN_ERROR, message: "the agoraToken is illegal" }), p.kg.debug("open params error", t3), console.warn("agoraToken is deprecated, please use accessToken instead"), t3);
          }
          function se(e3) {
            this.context.jid = { appKey: this.appKey, name: e3.user, domain: this.domain, clientResource: this.clientResource }, this.context.root = this.root, this.context.userId = e3.user, this.context.appKey = this.appKey, this.context.appName = this.appName, this.context.orgName = this.orgName;
          }
          function ce(e3) {
            var t3 = this, r2 = e3.rpt, n2 = e3.isRetry, o2 = this.dnsIndex < this.dnsTotal ? this.dnsIndex : 0, i2 = this.dnsArr[o2] + "/easemob/server.json";
            p.kg.debug("call getHttpDNS: " + this.dnsIndex);
            var c2 = { url: i2, dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) } };
            return s.P6.ajax(c2, T.fI.SDK_INTERNAL).then(function(e4) {
              if (!e4)
                throw a.Z.create({ type: u.E.SERVER_GET_DNSLIST_FAILED, message: "get DNS failed" });
              p.kg.debug("getHttpDNS success");
              var o3 = e4.rest.hosts, s2 = t3.https ? "https" : "http";
              if (p.kg.info("httpType: " + s2), !o3)
                throw a.Z.create({ type: u.E.SERVER_GET_DNSLIST_FAILED, message: "DNS hosts resolution failed", data: e4.rest });
              var c3 = o3.filter(function(e5) {
                if (e5.protocol === s2)
                  return e5;
              });
              t3.restHosts = c3, t3.restTotal = c3.length;
              var l2 = e4["msync-wx"].hosts;
              if (!l2)
                throw a.Z.create({ type: u.E.SERVER_GET_DNSLIST_FAILED, message: "DNS msync-wx resolution failed", data: e4["msync-wx"] });
              var d2 = l2.filter(function(e5) {
                if (e5.protocol === s2)
                  return e5;
              });
              if (t3.socketHost = d2, t3.hostTotal = d2.length, t3.isHttpDNS && pe.call(t3), t3.isHttpDNS && le.call(t3), t3._reportLogs = "true" === e4.enableReportLogs, t3._reportInterval = Number(e4.reportInterval || S.XV), "true" === (null == e4 ? void 0 : e4.enableDataReport) ? (t3.dataReport.setIsCollectDt(true), t3.dataReport.setIsReportDt(true)) : (t3.dataReport.setIsReportDt(false), t3.dataReport.setIsCollectDt(false)), "false" === (null == e4 ? void 0 : e4.uploadinparts_enable) && (t3.uploadPartEnable = false), e4.extraInfo) {
                var h2 = e4.extraInfo, f2 = h2.elapse, m2 = h2.httpCode, g2 = { requestUrl: i2, requestName: T.c.GET_DNS, requestElapse: f2, isSuccess: 1, code: m2 };
                r2 && r2({ isRetry: n2, data: g2 });
              }
            }).catch(function(e4) {
              var t4 = e4.extraInfo, o3 = t4.elapse, s2 = t4.httpCode, c3 = t4.errDesc, l2 = { requestUrl: i2, requestName: T.c.GET_DNS, isSuccess: 0, code: s2, codeDesc: c3, requestElapse: o3 };
              throw r2 && r2({ isRetry: n2, data: l2 }), a.Z.create({ type: u.E.SERVER_GET_DNSLIST_FAILED, message: e4.message, data: e4 });
            });
          }
          function ue(e3, t3) {
            return q(this, void 0, void 0, function() {
              var r2;
              return z(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    return n2.trys.push([0, 2, , 6]), [4, ce.call(this, { rpt: e3, isRetry: t3 })];
                  case 1:
                  case 3:
                    return [2, n2.sent()];
                  case 2:
                    return r2 = n2.sent(), p.kg.error("get DNS failed", r2, "times:", this.dnsIndex), this.dnsIndex++, this.dnsIndex < this.dnsTotal ? [4, ue.call(this, e3, true)] : [3, 4];
                  case 4:
                    throw p.kg.error("retryRequestDNS failed"), a.Z.create({ type: u.E.SERVER_GET_DNSLIST_FAILED, message: "get DNS failed", data: r2 });
                  case 5:
                    return [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }
          function le() {
            var e3 = this.socketHost[this.hostIndex], t3 = e3.domain, r2 = e3.ip, n2 = e3.port, o2 = "";
            o2 = t3 || r2, n2 && "80" !== n2 && "443" !== n2 && (o2 += ":" + n2), o2 && (this.url = "//" + o2 + "/websocket");
            var i2 = this.https ? "wss:" : "ws:";
            this.url = i2 + this.url;
          }
          function pe() {
            var e3, t3;
            if (this.restIndex > this.restTotal)
              return p.kg.debug("restIndex > restTotal"), "";
            var r2 = "", n2 = this.restHosts[this.restIndex], o2 = n2.domain, i2 = n2.ip, a2 = n2.port, s2 = this.https ? "https:" : "http:";
            return i2 && "undefined" != typeof window && "http:" === (null === (e3 = null === window || void 0 === window ? void 0 : window.location) || void 0 === e3 ? void 0 : e3.protocol) ? r2 = s2 + "//" + i2 + ":" + a2 : (r2 = s2 + "//" + o2, a2 && "80" !== a2 && "443" !== a2 && (r2 += ":".concat(a2)), "undefined" == typeof window || window.location || (r2 = "https://" + o2), "undefined" != typeof window && window.location && "file:" === (null === (t3 = window.location) || void 0 === t3 ? void 0 : t3.protocol) && (r2 = "https://" + o2)), "undefined" == typeof window && (r2 = s2 + "//" + o2), this.apiUrl = r2, r2;
          }
          var de = r(2449);
          t2().util.Long = i(), t2().configure();
          var he = t2().Root.fromJSON({ nested: { easemob: { nested: { pb: { nested: { MessageBody: { fields: { type: { type: "Type", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, contents: { rule: "repeated", type: "Content", id: 4 }, ext: { rule: "repeated", type: "KeyValue", id: 5 }, ackMessageId: { type: "uint64", id: 6 }, msgConfig: { type: "MessageConfig", id: 7 }, ackContent: { type: "string", id: 8 }, meta: { type: "string", id: 9 }, editMessageId: { type: "uint64", id: 11 } }, nested: { Content: { fields: { type: { type: "Type", id: 1 }, text: { type: "string", id: 2 }, latitude: { type: "double", id: 3 }, longitude: { type: "double", id: 4 }, address: { type: "string", id: 5 }, displayName: { type: "string", id: 6 }, remotePath: { type: "string", id: 7 }, secretKey: { type: "string", id: 8 }, fileLength: { type: "int32", id: 9 }, action: { type: "string", id: 10 }, params: { rule: "repeated", type: "KeyValue", id: 11 }, duration: { type: "int32", id: 12 }, size: { type: "Size", id: 13 }, thumbnailRemotePath: { type: "string", id: 14 }, thumbnailSecretKey: { type: "string", id: 15 }, thumbnailDisplayName: { type: "string", id: 16 }, thumbnailFileLength: { type: "int32", id: 17 }, thumbnailSize: { type: "Size", id: 18 }, customEvent: { type: "string", id: 19 }, customExts: { rule: "repeated", type: "KeyValue", id: 20 }, buildingName: { type: "string", id: 21 }, subType: { type: "SubType", id: 22 }, title: { type: "string", id: 23 }, summary: { type: "string", id: 24 }, combineLevel: { type: "int32", id: 25 } }, nested: { Type: { values: { TEXT: 0, IMAGE: 1, VIDEO: 2, LOCATION: 3, VOICE: 4, FILE: 5, COMMAND: 6, CUSTOM: 7, COMBINE: 8 } }, Size: { fields: { width: { type: "double", id: 1 }, height: { type: "double", id: 2 } } }, SubType: { values: { COMBINE: 0 } } } }, Type: { values: { NORMAL: 0, CHAT: 1, GROUPCHAT: 2, CHATROOM: 3, READ_ACK: 4, DELIVER_ACK: 5, RECALL: 6, CHANNEL_ACK: 7, EDIT: 8 } }, MessageConfig: { fields: { allowGroupAck: { type: "bool", id: 1 } } } } }, KeyValue: { oneofs: { value: { oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"] } }, fields: { key: { type: "string", id: 1 }, type: { type: "ValueType", id: 2 }, varintValue: { type: "int64", id: 3 }, floatValue: { type: "float", id: 4 }, doubleValue: { type: "double", id: 5 }, stringValue: { type: "string", id: 6 } }, nested: { ValueType: { values: { BOOL: 1, INT: 2, UINT: 3, LLINT: 4, FLOAT: 5, DOUBLE: 6, STRING: 7, JSON_STRING: 8 } } } }, JID: { fields: { appKey: { type: "string", id: 1 }, name: { type: "string", id: 2 }, domain: { type: "string", id: 3 }, clientResource: { type: "string", id: 4 } } }, ConferenceBody: { fields: { sessionId: { type: "string", id: 1 }, operation: { type: "Operation", id: 2 }, conferenceId: { type: "string", id: 3 }, type: { type: "Type", id: 4 }, content: { type: "string", id: 5 }, network: { type: "string", id: 6 }, version: { type: "string", id: 7 }, identity: { type: "Identity", id: 8 }, duration: { type: "string", id: 9 }, peerName: { type: "string", id: 10 }, endReason: { type: "EndReason", id: 11 }, status: { type: "Status", id: 12 }, isDirect: { type: "bool", id: 13 }, controlType: { type: "StreamControlType", id: 14 }, routeFlag: { type: "int32", id: 15 }, routeKey: { type: "string", id: 16 } }, nested: { Status: { fields: { errorCode: { type: "int32", id: 1 } } }, Operation: { values: { JOIN: 0, INITIATE: 1, ACCEPT_INITIATE: 2, ANSWER: 3, TERMINATE: 4, REMOVE: 5, STREAM_CONTROL: 6, MEDIA_REQUEST: 7 } }, Type: { values: { VOICE: 0, VIDEO: 1 } }, Identity: { values: { CALLER: 0, CALLEE: 1 } }, EndReason: { values: { HANGUP: 0, NORESPONSE: 1, REJECT: 2, BUSY: 3, FAIL: 4, UNSUPPORTED: 5, OFFLINE: 6 } }, StreamControlType: { values: { PAUSE_VOICE: 0, RESUME_VOICE: 1, PAUSE_VIDEO: 2, RESUME_VIDEO: 3 } } } }, MSync: { fields: { version: { type: "Version", id: 1, options: { default: "MSYNC_V1" } }, guid: { type: "JID", id: 2 }, auth: { type: "string", id: 3 }, compressAlgorimth: { type: "uint32", id: 4 }, crypto: { type: "uint32", id: 5 }, userAgent: { type: "string", id: 6 }, pov: { type: "uint64", id: 7 }, command: { type: "Command", id: 8 }, deviceId: { type: "uint32", id: 10 }, encryptType: { rule: "repeated", type: "EncryptType", id: 11, options: { packed: false } }, encryptKey: { type: "string", id: 12 }, payload: { type: "bytes", id: 9 } }, nested: { Version: { values: { MSYNC_V1: 0, MSYNC_V2: 1 } }, Command: { values: { SYNC: 0, UNREAD: 1, NOTICE: 2, PROVISION: 3 } } } }, EncryptType: { values: { ENCRYPT_NONE: 0, ENCRYPT_AES_128_CBC: 1, ENCRYPT_AES_256_CBC: 2 } }, CommSyncUL: { fields: { meta: { type: "Meta", id: 1 }, key: { type: "uint64", id: 2 }, queue: { type: "JID", id: 3 }, isRoam: { type: "bool", id: 4 }, lastFullRoamKey: { type: "uint64", id: 5 } } }, CommSyncDL: { fields: { status: { type: "Status", id: 1 }, metaId: { type: "uint64", id: 2 }, serverId: { type: "uint64", id: 3 }, metas: { rule: "repeated", type: "Meta", id: 4 }, nextKey: { type: "uint64", id: 5 }, queue: { type: "JID", id: 6 }, isLast: { type: "bool", id: 7 }, timestamp: { type: "uint64", id: 8 }, isRoam: { type: "bool", id: 9 } } }, CommNotice: { fields: { queue: { type: "JID", id: 1 } } }, CommUnreadUL: { fields: {} }, CommUnreadDL: { fields: { status: { type: "Status", id: 1 }, unread: { rule: "repeated", type: "MetaQueue", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, MetaQueue: { fields: { queue: { type: "JID", id: 1 }, n: { type: "uint32", id: 2 } } }, Meta: { fields: { id: { type: "uint64", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, timestamp: { type: "uint64", id: 4 }, ns: { type: "NameSpace", id: 5 }, payload: { type: "bytes", id: 6 }, routetype: { type: "RouteType", id: 7 }, ext: { rule: "repeated", type: "KeyValue", id: 8 }, meta: { type: "bytes", id: 9 }, directedUsers: { rule: "repeated", type: "string", id: 10 } }, nested: { NameSpace: { values: { STATISTIC: 0, CHAT: 1, MUC: 2, ROSTER: 3, CONFERENCE: 4, NOTIFY: 5, QUERY: 6 } }, RouteType: { values: { ROUTE_ALL: 0, ROUTE_ONLINE: 1, ROUTE_DIRECT: 2 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, reason: { type: "string", id: 2 }, redirectInfo: { rule: "repeated", type: "RedirectInfo", id: 3 } }, nested: { ErrorCode: { values: { OK: 0, FAIL: 1, UNAUTHORIZED: 2, MISSING_PARAMETER: 3, WRONG_PARAMETER: 4, REDIRECT: 5, TOKEN_EXPIRED: 6, PERMISSION_DENIED: 7, NO_ROUTE: 8, UNKNOWN_COMMAND: 9, PB_PARSER_ERROR: 10, BIND_ANOTHER_DEVICE: 11, IM_FORBIDDEN: 12, TOO_MANY_DEVICES: 13, PLATFORM_LIMIT: 14, USER_MUTED: 15, ENCRYPT_DISABLE: 16, ENCRYPT_ENABLE: 17, DECRYPT_FAILURE: 18, PERMISSION_DENIED_EXTERNAL: 19 } } } }, RedirectInfo: { fields: { host: { type: "string", id: 1 }, port: { type: "uint32", id: 2 } } }, Provision: { fields: { osType: { type: "OsType", id: 1 }, version: { type: "string", id: 2 }, networkType: { type: "NetworkType", id: 3 }, appSign: { type: "string", id: 4 }, compressType: { rule: "repeated", type: "CompressType", id: 5, options: { packed: false } }, encryptType: { rule: "repeated", type: "EncryptType", id: 6, options: { packed: false } }, encryptKey: { type: "string", id: 7 }, status: { type: "Status", id: 8 }, deviceUuid: { type: "string", id: 9 }, isManualLogin: { type: "bool", id: 10 }, password: { type: "string", id: 11 }, deviceName: { type: "string", id: 12 }, resource: { type: "string", id: 13 }, auth: { type: "string", id: 14 }, serviceId: { type: "string", id: 16 }, actionVersion: { type: "string", id: 17 }, authToken: { type: "string", id: 18 }, sessionId: { type: "string", id: 20 }, reason: { type: "string", id: 21 } }, nested: { OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } }, CompressType: { values: { COMPRESS_NONE: 0, COMPRESS_ZLIB: 1 } } } }, MUCBody: { fields: { mucId: { type: "JID", id: 1 }, operation: { type: "Operation", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, setting: { type: "Setting", id: 5 }, reason: { type: "string", id: 6 }, isChatroom: { type: "bool", id: 7 }, status: { type: "Status", id: 8 }, isThread: { type: "bool", id: 9 }, mucParentId: { type: "JID", id: 10 }, mucName: { type: "string", id: 11 }, eventInfo: { type: "EventInfo", id: 12 }, mucMemberCount: { type: "int32", id: 13 }, ext: { type: "string", id: 14 }, leaveOtherRooms: { type: "bool", id: 15 } }, nested: { Operation: { values: { CREATE: 0, DESTROY: 1, JOIN: 2, LEAVE: 3, APPLY: 4, APPLY_ACCEPT: 5, APPLY_DECLINE: 6, INVITE: 7, INVITE_ACCEPT: 8, INVITE_DECLINE: 9, KICK: 10, GET_BLACKLIST: 11, BAN: 12, ALLOW: 13, UPDATE: 14, BLOCK: 15, UNBLOCK: 16, PRESENCE: 17, ABSENCE: 18, DIRECT_JOINED: 19, ASSIGN_OWNER: 20, ADD_ADMIN: 21, REMOVE_ADMIN: 22, ADD_MUTE: 23, REMOVE_MUTE: 24, UPDATE_ANNOUNCEMENT: 25, DELETE_ANNOUNCEMENT: 26, UPLOAD_FILE: 27, DELETE_FILE: 28, ADD_USER_WHITE_LIST: 29, REMOVE_USER_WHITE_LIST: 30, BAN_GROUP: 31, REMOVE_BAN_GROUP: 32, THREAD_CREATE: 33, THREAD_DESTROY: 34, THREAD_JOIN: 35, THREAD_LEAVE: 36, THREAD_KICK: 37, THREAD_UPDATE: 38, THREAD_PRESENCE: 39, THREAD_ABSENCE: 40, DISABLE_GROUP: 41, ABLE_GROUP: 42, SET_METADATA: 43, DELETE_METADATA: 44, GROUP_MEMBER_METADATA_UPDATE: 45 } }, Setting: { fields: { name: { type: "string", id: 1 }, desc: { type: "string", id: 2 }, type: { type: "Type", id: 3 }, maxUsers: { type: "int32", id: 4 }, owner: { type: "string", id: 5 } }, nested: { Type: { values: { PRIVATE_OWNER_INVITE: 0, PRIVATE_MEMBER_INVITE: 1, PUBLIC_JOIN_APPROVAL: 2, PUBLIC_JOIN_OPEN: 3, PUBLIC_ANONYMOUS: 4 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, PERMISSION_DENIED: 1, WRONG_PARAMETER: 2, MUC_NOT_EXIST: 3, USER_NOT_EXIST: 4, UNKNOWN: 5 } } } }, EventInfo: { fields: { eventType: { type: "EventType", id: 1, options: { default: "EVENT_NONE" } }, ext: { type: "string", id: 2 } }, nested: { EventType: { values: { EVENT_NONE: 0, CIRCLE_CHANNEL: 1 } } } } } }, RosterBody: { fields: { operation: { type: "Operation", id: 1 }, status: { type: "Status", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, reason: { type: "string", id: 5 }, rosterVer: { type: "string", id: 6 }, biDirection: { type: "bool", id: 7 } }, nested: { Operation: { values: { GET_ROSTER: 0, GET_BLACKLIST: 1, ADD: 2, REMOVE: 3, ACCEPT: 4, DECLINE: 5, BAN: 6, ALLOW: 7, REMOTE_ACCEPT: 8, REMOTE_DECLINE: 9 } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, USER_NOT_EXIST: 1, USER_ALREADY_FRIEND: 2, USER_ALREADY_BLACKLIST: 3 } } } } } }, StatisticsBody: { fields: { operation: { type: "Operation", id: 1 }, os: { type: "OsType", id: 2 }, version: { type: "string", id: 3 }, network: { type: "NetworkType", id: 4 }, imTime: { type: "uint32", id: 5 }, chatTime: { type: "uint32", id: 6 }, location: { type: "string", id: 7 }, reason: { type: "string", id: 10 } }, nested: { Operation: { values: { INFORMATION: 0, USER_REMOVED: 1, USER_LOGIN_ANOTHER_DEVICE: 2, USER_KICKED_BY_CHANGE_PASSWORD: 3, USER_KICKED_BY_OTHER_DEVICE: 4 } }, OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } } } } } } } } } });
          Y.prototype.root = he;
          var fe = p.kg.getLogger("defaultLogger");
          fe.setConfig({ useCache: false, maxCache: 3145728, color: "", background: "" }), fe.enableAll(), Y.prototype.getUniqueId = s.P6.getUniqueId;
          var me = { connection: Y, message: de.Message, utils: s.P6, logger: fe, statusCode: u.E };
          "undefined" != typeof window && (window.WebIM = me);
          var ge = me;
        }(), n;
      }();
    });
  }
});
export default require_Easemob_chat();
//# sourceMappingURL=easemob-websdk_Easemob-chat.js.map
