var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function() {
        function e(a) {
            throw a;
        }
        var h = void 0,
            j = !0,
            k = null,
            l = !1,
            n, p = this;

        function q(a) {
            for (var a = a.split("."), b = p, c; c = a.shift();)
                if (aa(b[c])) b = b[c];
                else return k;
            return b
        }

        function ba() {}

        function ca(a) {
            a.getInstance = function() {
                return a.Xm ? a.Xm : a.Xm = new a
            }
        }

        function da(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }

        function ea(a) {
            return a !== h
        }

        function fa(a) {
            return a === k
        }

        function aa(a) {
            return a != k
        }

        function r(a) {
            return "array" == da(a)
        }

        function ga(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }

        function t(a) {
            return "string" == typeof a
        }

        function ha(a) {
            return "function" == da(a)
        }

        function ia(a) {
            var b = typeof a;
            return "object" == b && a != k || "function" == b
        }

        function ja(a) {
            return a[ka] || (a[ka] = ++la)
        }
        var ka = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
            la = 0;

        function ma(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function na(a, b, c) {
            a || e(Error());
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }

        function u(a, b, c) {
            u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
            return u.apply(k, arguments)
        }

        function oa(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = Array.prototype.slice.call(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        }

        function v(a, b) {
            for (var c in b) a[c] = b[c]
        }
        var x = Date.now || function() {
            return +new Date
        };

        function pa(a, b) {
            var c = a.split("."),
                d = p;
            !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
            for (var f; c.length && (f = c.shift());) !c.length && ea(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
        }

        function z(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.s = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        }
        Function.prototype.bind = Function.prototype.bind || function(a, b) {
            if (1 < arguments.length) {
                var c = Array.prototype.slice.call(arguments, 1);
                c.unshift(this, a);
                return u.apply(k, c)
            }
            return u(this, a)
        };

        function qa(a) {
            Error.captureStackTrace ? Error.captureStackTrace(this, qa) : this.stack = Error().stack || "";
            a && (this.message = "" + a)
        }
        z(qa, Error);
        qa.prototype.name = "CustomError";

        function ra(a, b) {
            for (var c = 1; c < arguments.length; c++) var d = ("" + arguments[c]).replace(/\$/g, "$$$$"),
                a = a.replace(/\%s/, d);
            return a
        }

        function sa(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }

        function ta(a) {
            if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ya, "&quot;"));
            return a
        }
        var va = /&/g,
            wa = /</g,
            xa = />/g,
            ya = /\"/g,
            ua = /[&<>\"]/;

        function za(a) {
            var b = Number(a);
            return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
        }

        function Aa(a) {
            return ("" + a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        };
        var A = Array.prototype,
            Ba = A.indexOf ? function(a, b, c) {
                return A.indexOf.call(a, b, c)
            } : function(a, b, c) {
                c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
                if (t(a)) return !t(b) || 1 != b.length ? -1 : a.indexOf(b, c);
                for (; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            B = A.forEach ? function(a, b, c) {
                A.forEach.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = t(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
            },
            Ca = A.filter ? function(a, b, c) {
                return A.filter.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = [], g = 0, i = t(a) ? a.split("") :
                        a, m = 0; m < d; m++)
                    if (m in i) {
                        var o = i[m];
                        b.call(c, o, m, a) && (f[g++] = o)
                    } return f
            },
            Da = A.map ? function(a, b, c) {
                return A.map.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = Array(d), g = t(a) ? a.split("") : a, i = 0; i < d; i++) i in g && (f[i] = b.call(c, g[i], i, a));
                return f
            },
            Ea = A.some ? function(a, b, c) {
                return A.some.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = t(a) ? a.split("") : a, g = 0; g < d; g++)
                    if (g in f && b.call(c, f[g], g, a)) return j;
                return l
            };

        function Fa(a, b) {
            var c;
            a: {
                c = a.length;
                for (var d = t(a) ? a.split("") : a, f = 0; f < c; f++)
                    if (f in d && b.call(h, d[f], f, a)) {
                        c = f;
                        break a
                    } c = -1
            }
            return 0 > c ? k : t(a) ? a.charAt(c) : a[c]
        }

        function Ga(a, b) {
            return 0 <= Ba(a, b)
        }

        function Ha(a) {
            if (!r(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        }

        function Ia(a, b) {
            var c = Ba(a, b);
            0 <= c && A.splice.call(a, c, 1)
        }

        function Ja(a) {
            return A.concat.apply(A, arguments)
        }

        function Ka(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }

        function La(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c],
                    f;
                if (r(d) || (f = ga(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
                else if (f)
                    for (var g = a.length, i = d.length, m = 0; m < i; m++) a[g + m] = d[m];
                else a.push(d)
            }
        }

        function Ma(a, b, c, d) {
            A.splice.apply(a, Na(arguments, 1))
        }

        function Na(a, b, c) {
            return 2 >= arguments.length ? A.slice.call(a, b) : A.slice.call(a, b, c)
        }

        function Oa(a, b) {
            A.sort.call(a, b || Pa)
        }

        function Qa(a, b) {
            var c = Pa;
            Oa(a, function(a, f) {
                return c(a[b], f[b])
            })
        }

        function Pa(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
        var Ra = "StopIteration" in p ? p.StopIteration : Error("StopIteration");

        function Sa() {}
        Sa.prototype.next = function() {
            e(Ra)
        };
        Sa.prototype.hc = function() {
            return this
        };

        function Ua(a) {
            if (a instanceof Sa) return a;
            if ("function" == typeof a.hc) return a.hc(l);
            if (ga(a)) {
                var b = 0,
                    c = new Sa;
                c.next = function() {
                    for (;;) {
                        b >= a.length && e(Ra);
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            e(Error("Not implemented"))
        }

        function Va(a, b) {
            if (ga(a)) try {
                B(a, b, h)
            } catch (c) {
                c !== Ra && e(c)
            } else {
                a = Ua(a);
                try {
                    for (;;) b.call(h, a.next(), h, a)
                } catch (d) {
                    d !== Ra && e(d)
                }
            }
        }

        function Wa(a) {
            if (ga(a)) return Ka(a);
            var a = Ua(a),
                b = [];
            Va(a, function(a) {
                b.push(a)
            });
            return b
        };

        function Xa(a, b) {
            for (var c in a) b.call(h, a[c], c, a)
        }

        function Ya(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }

        function Za(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }

        function $a(a) {
            var b = ab,
                c;
            for (c in b)
                if (a.call(h, b[c], c, b)) return c
        }

        function bb(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }

        function cb(a) {
            var b = da(a);
            if ("object" == b || "array" == b) {
                if (a.Z) return a.Z();
                var b = "array" == b ? [] : {},
                    c;
                for (c in a) b[c] = cb(a[c]);
                return b
            }
            return a
        }
        var db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function eb(a, b) {
            for (var c, d, f = 1; f < arguments.length; f++) {
                d = arguments[f];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < db.length; g++) c = db[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };

        function fb(a) {
            if ("function" == typeof a.$a) return a.$a();
            if (t(a)) return a.split("");
            if (ga(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Ya(a)
        }

        function gb(a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if (ga(a) || t(a)) B(a, b, c);
            else {
                var d;
                if ("function" == typeof a.Zb) d = a.Zb();
                else if ("function" != typeof a.$a)
                    if (ga(a) || t(a)) {
                        d = [];
                        for (var f = a.length, g = 0; g < f; g++) d.push(g)
                    } else d = Za(a);
                else d = h;
                for (var f = fb(a), g = f.length, i = 0; i < g; i++) b.call(c, f[i], d && d[i], a)
            }
        };

        function hb(a, b) {
            this.b = {};
            this.a = [];
            var c = arguments.length;
            if (1 < c) {
                c % 2 && e(Error("Uneven number of arguments"));
                for (var d = 0; d < c; d += 2) ib(this, arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof hb ? (c = a.Zb(), d = a.$a()) : (c = Za(a), d = Ya(a));
                for (var f = 0; f < c.length; f++) ib(this, c[f], d[f])
            }
        }
        n = hb.prototype;
        n.F = 0;
        n.Ce = 0;
        n.$b = function() {
            return this.F
        };
        n.$a = function() {
            jb(this);
            for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
            return a
        };
        n.Zb = function() {
            jb(this);
            return this.a.concat()
        };
        n.isEmpty = function() {
            return 0 == this.F
        };
        n.clear = function() {
            this.b = {};
            this.Ce = this.F = this.a.length = 0
        };

        function jb(a) {
            if (a.F != a.a.length) {
                for (var b = 0, c = 0; b < a.a.length;) {
                    var d = a.a[b];
                    kb(a.b, d) && (a.a[c++] = d);
                    b++
                }
                a.a.length = c
            }
            if (a.F != a.a.length) {
                for (var f = {}, c = b = 0; b < a.a.length;) d = a.a[b], kb(f, d) || (a.a[c++] = d, f[d] = 1), b++;
                a.a.length = c
            }
        }
        n.get = function(a, b) {
            return kb(this.b, a) ? this.b[a] : b
        };

        function ib(a, b, c) {
            kb(a.b, b) || (a.F++, a.a.push(b), a.Ce++);
            a.b[b] = c
        }
        n.Z = function() {
            return new hb(this)
        };
        n.hc = function(a) {
            jb(this);
            var b = 0,
                c = this.a,
                d = this.b,
                f = this.Ce,
                g = this,
                i = new Sa;
            i.next = function() {
                for (;;) {
                    f != g.Ce && e(Error("The map has changed since the iterator was created"));
                    b >= c.length && e(Ra);
                    var i = c[b++];
                    return a ? i : d[i]
                }
            };
            return i
        };

        function kb(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        var lb, mb, nb, ob, pb, qb, rb;

        function sb() {
            return p.navigator ? p.navigator.userAgent : k
        }

        function tb() {
            return p.navigator
        }
        pb = ob = nb = mb = lb = l;
        var ub;
        if (ub = sb()) {
            var vb = tb();
            lb = 0 == ub.indexOf("Opera");
            mb = !lb && -1 != ub.indexOf("MSIE");
            ob = (nb = !lb && -1 != ub.indexOf("WebKit")) && -1 != ub.indexOf("Mobile");
            pb = !lb && !nb && "Gecko" == vb.product
        }
        var wb = lb,
            D = mb,
            xb = pb,
            yb = nb,
            zb = ob,
            Ab = tb(),
            Bb = Ab && Ab.platform || "";
        qb = -1 != Bb.indexOf("Mac");
        rb = -1 != Bb.indexOf("Win");
        var Cb = !!tb() && -1 != (tb().appVersion || "").indexOf("X11"),
            Db;
        a: {
            var Eb = "",
                Fb;
            if (wb && p.opera) var Gb = p.opera.version,
                Eb = "function" == typeof Gb ? Gb() : Gb;
            else if (xb ? Fb = /rv\:([^\);]+)(\)|;)/ : D ? Fb = /MSIE\s+([^\);]+)(\)|;)/ : yb && (Fb = /WebKit\/(\S+)/), Fb) var Hb = Fb.exec(sb()),
                Eb = Hb ? Hb[1] : "";
            if (D) {
                var Ib, Jb = p.document;
                Ib = Jb ? Jb.documentMode : h;
                if (Ib > parseFloat(Eb)) {
                    Db = "" + Ib;
                    break a
                }
            }
            Db = Eb
        }
        var Kb = Db,
            Lb = {};

        function E(a) {
            var b;
            if (!(b = Lb[a])) {
                b = 0;
                for (var c = sa("" + Kb).split("."), d = sa("" + a).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                    var i = c[g] || "",
                        m = d[g] || "",
                        o = RegExp("(\\d*)(\\D*)", "g"),
                        s = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var y = o.exec(i) || ["", "", ""],
                            w = s.exec(m) || ["", "", ""];
                        if (0 == y[0].length && 0 == w[0].length) break;
                        b = ((0 == y[1].length ? 0 : parseInt(y[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == y[1].length ? 0 : parseInt(y[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == y[2].length) < (0 ==
                            w[2].length) ? -1 : (0 == y[2].length) > (0 == w[2].length) ? 1 : 0) || (y[2] < w[2] ? -1 : y[2] > w[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = Lb[a] = 0 <= b
            }
            return b
        }
        var Mb = {};

        function Nb(a) {
            return Mb[a] || (Mb[a] = D && !!document.documentMode && document.documentMode >= a)
        };

        function Ob(a, b, c) {
            return Math.min(Math.max(a, b), c)
        };

        function F(a, b) {
            this.x = ea(a) ? a : 0;
            this.y = ea(b) ? b : 0
        }
        F.prototype.Z = function() {
            return new F(this.x, this.y)
        };

        function Pb(a, b) {
            var c = a.x - b.x,
                d = a.y - b.y;
            return Math.sqrt(c * c + d * d)
        };

        function Qb(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        Qb.prototype.Z = function() {
            return new Qb(this.top, this.right, this.bottom, this.left)
        };
        Qb.prototype.contains = function(a) {
            return !this || !a ? l : a instanceof Qb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
        };

        function G(a, b) {
            this.width = a;
            this.height = b
        }

        function Rb(a, b) {
            return a == b ? j : !a || !b ? l : a.width == b.width && a.height == b.height
        }
        n = G.prototype;
        n.Z = function() {
            return new G(this.width, this.height)
        };
        n.isEmpty = function() {
            return !(this.width * this.height)
        };
        n.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        n.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        n.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };

        function Sb(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        }
        Sb.prototype.Z = function() {
            return new Sb(this.left, this.top, this.width, this.height)
        };

        function Tb(a, b) {
            var c = Math.max(a.left + a.width, b.left + b.width),
                d = Math.max(a.top + a.height, b.top + b.height);
            a.left = Math.min(a.left, b.left);
            a.top = Math.min(a.top, b.top);
            a.width = c - a.left;
            a.height = d - a.top
        }
        Sb.prototype.contains = function(a) {
            return a instanceof Sb ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
        };

        function Ub() {}
        Ub.prototype.C = l;
        Ub.prototype.Ta = function() {
            this.C || (this.C = j, this.D())
        };
        Ub.prototype.D = function() {
            this.Zd && Vb.apply(k, this.Zd);
            if (this.gb)
                for (; this.gb.length;) this.gb.shift()()
        };

        function Wb(a) {
            a && "function" == typeof a.Ta && a.Ta()
        }

        function Vb(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                ga(d) ? Vb.apply(k, d) : Wb(d)
            }
        };

        function H() {
            this.a = [];
            this.Na = {}
        }
        z(H, Ub);
        n = H.prototype;
        n.Tl = 1;
        n.$f = 0;
        n.n = function(a, b, c) {
            var d = this.Na[a];
            d || (d = this.Na[a] = []);
            var f = this.Tl;
            this.a[f] = a;
            this.a[f + 1] = b;
            this.a[f + 2] = c;
            this.Tl = f + 3;
            d.push(f);
            return f
        };
        n.P = function(a, b, c) {
            if (a = this.Na[a]) {
                var d = this.a;
                if (a = Fa(a, function(a) {
                        return d[a + 1] == b && d[a + 2] == c
                    })) return this.Zf(a)
            }
            return l
        };
        n.Zf = function(a) {
            if (0 != this.$f) return this.b || (this.b = []), this.b.push(a), l;
            var b = this.a[a];
            if (b) {
                var c = this.Na[b];
                c && Ia(c, a);
                delete this.a[a];
                delete this.a[a + 1];
                delete this.a[a + 2]
            }
            return !!b
        };
        n.j = function(a, b) {
            var c = this.Na[a];
            if (c) {
                this.$f++;
                for (var d = Na(arguments, 1), f = 0, g = c.length; f < g; f++) {
                    var i = c[f];
                    this.a[i + 1].apply(this.a[i + 2], d)
                }
                this.$f--;
                if (this.b && 0 == this.$f)
                    for (; c = this.b.pop();) this.Zf(c);
                return 0 != f
            }
            return l
        };
        n.clear = function(a) {
            if (a) {
                var b = this.Na[a];
                b && (B(b, this.Zf, this), delete this.Na[a])
            } else this.a.length = 0, this.Na = {}
        };
        n.$b = function(a) {
            if (a) {
                var b = this.Na[a];
                return b ? b.length : 0
            }
            a = 0;
            for (b in this.Na) a += this.$b(b);
            return a
        };
        n.D = function() {
            H.s.D.call(this);
            delete this.a;
            delete this.Na;
            delete this.b
        };

        function Xb(a) {
            Xb[" "](a);
            return a
        }
        Xb[" "] = ba;
        !D || Nb(9);
        var Yb = !D || Nb(9),
            Zb = D && !E("8");
        !yb || E("528");
        xb && E("1.9b") || D && E("8") || wb && E("9.5") || yb && E("528");
        xb && !E("8") || D && E("9");

        function $b(a, b) {
            this.type = a;
            this.currentTarget = this.target = b
        }
        z($b, Ub);
        n = $b.prototype;
        n.D = function() {
            delete this.type;
            delete this.target;
            delete this.currentTarget
        };
        n.Kc = l;
        n.Gg = j;
        n.stopPropagation = function() {
            this.Kc = j
        };
        n.preventDefault = function() {
            this.Gg = l
        };

        function ac(a, b) {
            a && bc(this, a, b)
        }
        z(ac, $b);
        n = ac.prototype;
        n.target = k;
        n.relatedTarget = k;
        n.clientX = 0;
        n.clientY = 0;
        n.jr = 0;
        n.ir = l;
        n.Ab = k;

        function bc(a, b, c) {
            var d = a.type = b.type;
            $b.call(a, d);
            a.target = b.target || b.srcElement;
            a.currentTarget = c;
            if (c = b.relatedTarget) {
                if (xb) {
                    var f;
                    a: {
                        try {
                            Xb(c.nodeName);
                            f = j;
                            break a
                        } catch (g) {}
                        f = l
                    }
                    f || (c = k)
                }
            } else "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
            a.relatedTarget = c;
            a.clientX = b.clientX !== h ? b.clientX : b.pageX;
            a.clientY = b.clientY !== h ? b.clientY : b.pageY;
            a.jr = b.keyCode || 0;
            a.ir = b.ctrlKey;
            a.Ab = b;
            b.defaultPrevented && a.preventDefault();
            delete a.Kc
        }
        n.stopPropagation = function() {
            ac.s.stopPropagation.call(this);
            this.Ab.stopPropagation ? this.Ab.stopPropagation() : this.Ab.cancelBubble = j
        };
        n.preventDefault = function() {
            ac.s.preventDefault.call(this);
            var a = this.Ab;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = l, Zb) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {}
        };
        n.Gp = function() {
            return this.Ab
        };
        n.D = function() {
            ac.s.D.call(this);
            this.relatedTarget = this.currentTarget = this.target = this.Ab = k
        };

        function cc() {}
        var dc = 0;
        cc.prototype.key = 0;
        cc.prototype.zc = l;
        cc.prototype.a = l;
        cc.prototype.handleEvent = function(a) {
            return this.b ? this.yd.call(this.Ff || this.src, a) : this.yd.handleEvent.call(this.yd, a)
        };
        var ec = {},
            fc = {},
            gc = {},
            hc = {};

        function ic(a, b, c, d, f) {
            if (b) {
                if (r(b)) {
                    for (var g = 0; g < b.length; g++) ic(a, b[g], c, d, f);
                    return k
                }
                var d = !!d,
                    i = fc;
                b in i || (i[b] = {
                    F: 0,
                    Ka: 0
                });
                i = i[b];
                d in i || (i[d] = {
                    F: 0,
                    Ka: 0
                }, i.F++);
                var i = i[d],
                    m = ja(a),
                    o;
                i.Ka++;
                if (i[m]) {
                    o = i[m];
                    for (g = 0; g < o.length; g++)
                        if (i = o[g], i.yd == c && i.Ff == f) {
                            if (i.zc) break;
                            return o[g].key
                        }
                } else o = i[m] = [], i.F++;
                g = jc();
                g.src = a;
                var s = i = new cc;
                ha(c) ? s.b = j : c && c.handleEvent && ha(c.handleEvent) ? s.b = l : e(Error("Invalid listener argument"));
                s.yd = c;
                s.e = g;
                s.src = a;
                s.type = b;
                s.capture = !!d;
                s.Ff = f;
                s.a = l;
                s.key =
                    ++dc;
                s.zc = l;
                c = i.key;
                g.key = c;
                o.push(i);
                ec[c] = i;
                gc[m] || (gc[m] = []);
                gc[m].push(i);
                a.addEventListener ? (a == p || !a.Zh) && a.addEventListener(b, g, d) : a.attachEvent(b in hc ? hc[b] : hc[b] = "on" + b, g);
                return c
            }
            e(Error("Invalid event type"))
        }

        function jc() {
            var a = kc,
                b = Yb ? function(c) {
                    return a.call(b.src, b.key, c)
                } : function(c) {
                    c = a.call(b.src, b.key, c);
                    if (!c) return c
                };
            return b
        }

        function lc(a, b, c, d, f) {
            if (r(b))
                for (var g = 0; g < b.length; g++) lc(a, b[g], c, d, f);
            else if (d = !!d, a = mc(a, b, d))
                for (g = 0; g < a.length; g++)
                    if (a[g].yd == c && a[g].capture == d && a[g].Ff == f) {
                        nc(a[g].key);
                        break
                    }
        }

        function nc(a) {
            if (!ec[a]) return l;
            var b = ec[a];
            if (b.zc) return l;
            var c = b.src,
                d = b.type,
                f = b.e,
                g = b.capture;
            c.removeEventListener ? (c == p || !c.Zh) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in hc ? hc[d] : hc[d] = "on" + d, f);
            c = ja(c);
            f = fc[d][g][c];
            if (gc[c]) {
                var i = gc[c];
                Ia(i, b);
                0 == i.length && delete gc[c]
            }
            b.zc = j;
            f.qm = j;
            oc(d, g, c, f);
            delete ec[a];
            return j
        }

        function oc(a, b, c, d) {
            if (!d.hb && d.qm) {
                for (var f = 0, g = 0; f < d.length; f++) d[f].zc ? d[f].e.src = k : (f != g && (d[g] = d[f]), g++);
                d.length = g;
                d.qm = l;
                0 == g && (delete fc[a][b][c], fc[a][b].F--, 0 == fc[a][b].F && (delete fc[a][b], fc[a].F--), 0 == fc[a].F && delete fc[a])
            }
        }

        function pc(a) {
            var b, c = 0,
                d = b == k;
            b = !!b;
            if (a == k) Xa(gc, function(a) {
                for (var f = a.length - 1; 0 <= f; f--) {
                    var g = a[f];
                    if (d || b == g.capture) nc(g.key), c++
                }
            });
            else if (a = ja(a), gc[a])
                for (var a = gc[a], f = a.length - 1; 0 <= f; f--) {
                    var g = a[f];
                    if (d || b == g.capture) nc(g.key), c++
                }
        }

        function mc(a, b, c) {
            var d = fc;
            return b in d && (d = d[b], c in d && (d = d[c], a = ja(a), d[a])) ? d[a] : k
        }

        function qc(a, b, c, d, f) {
            var g = 1,
                b = ja(b);
            if (a[b]) {
                a.Ka--;
                a = a[b];
                a.hb ? a.hb++ : a.hb = 1;
                try {
                    for (var i = a.length, m = 0; m < i; m++) {
                        var o = a[m];
                        o && !o.zc && (g &= rc(o, f) !== l)
                    }
                } finally {
                    a.hb--, oc(c, d, b, a)
                }
            }
            return Boolean(g)
        }

        function rc(a, b) {
            a.a && nc(a.key);
            return a.handleEvent(b)
        }

        function kc(a, b) {
            if (!ec[a]) return j;
            var c = ec[a],
                d = c.type,
                f = fc;
            if (!(d in f)) return j;
            var f = f[d],
                g, i;
            if (!Yb) {
                g = b || q("window.event");
                var m = j in f,
                    o = l in f;
                if (m) {
                    if (0 > g.keyCode || g.returnValue != h) return j;
                    a: {
                        var s = l;
                        if (0 == g.keyCode) try {
                            g.keyCode = -1;
                            break a
                        } catch (y) {
                            s = j
                        }
                        if (s || g.returnValue == h) g.returnValue = j
                    }
                }
                s = new ac;
                bc(s, g, this);
                g = j;
                try {
                    if (m) {
                        for (var w = [], C = s.currentTarget; C; C = C.parentNode) w.push(C);
                        i = f[j];
                        i.Ka = i.F;
                        for (var Ta = w.length - 1; !s.Kc && 0 <= Ta && i.Ka; Ta--) s.currentTarget = w[Ta], g &= qc(i, w[Ta], d, j,
                            s);
                        if (o) {
                            i = f[l];
                            i.Ka = i.F;
                            for (Ta = 0; !s.Kc && Ta < w.length && i.Ka; Ta++) s.currentTarget = w[Ta], g &= qc(i, w[Ta], d, l, s)
                        }
                    } else g = rc(c, s)
                } finally {
                    w && (w.length = 0), s.Ta()
                }
                return g
            }
            d = new ac(b, this);
            try {
                g = rc(c, d)
            } finally {
                d.Ta()
            }
            return g
        };

        function sc() {}
        z(sc, Ub);
        n = sc.prototype;
        n.Zh = j;
        n.zg = k;
        n.cj = function(a) {
            this.zg = a
        };
        n.addEventListener = function(a, b, c, d) {
            ic(this, a, b, c, d)
        };
        n.removeEventListener = function(a, b, c, d) {
            lc(this, a, b, c, d)
        };
        n.dispatchEvent = function(a) {
            var b = a.type || a,
                c = fc;
            if (b in c) {
                if (t(a)) a = new $b(a, this);
                else if (a instanceof $b) a.target = a.target || this;
                else {
                    var d = a,
                        a = new $b(b, this);
                    eb(a, d)
                }
                var d = 1,
                    f, c = c[b],
                    b = j in c,
                    g;
                if (b) {
                    f = [];
                    for (g = this; g; g = g.zg) f.push(g);
                    g = c[j];
                    g.Ka = g.F;
                    for (var i = f.length - 1; !a.Kc && 0 <= i && g.Ka; i--) a.currentTarget = f[i], d &= qc(g, f[i], a.type, j, a) && a.Gg != l
                }
                if (l in c)
                    if (g = c[l], g.Ka = g.F, b)
                        for (i = 0; !a.Kc && i < f.length && g.Ka; i++) a.currentTarget = f[i], d &= qc(g, f[i], a.type, l, a) && a.Gg != l;
                    else
                        for (f = this; !a.Kc && f &&
                            g.Ka; f = f.zg) a.currentTarget = f, d &= qc(g, f, a.type, l, a) && a.Gg != l;
                a = Boolean(d)
            } else a = j;
            return a
        };
        n.D = function() {
            sc.s.D.call(this);
            pc(this);
            this.zg = k
        };

        function tc(a, b) {
            this.b = a || 1;
            this.g = b || uc;
            this.k = u(this.u, this);
            this.o = x()
        }
        z(tc, sc);
        tc.prototype.e = l;
        var uc = p.window;
        tc.prototype.a = k;

        function vc(a, b) {
            a.b = b;
            a.a && a.e ? (wc(a), a.start()) : a.a && wc(a)
        }
        tc.prototype.u = function() {
            if (this.e) {
                var a = x() - this.o;
                0 < a && a < 0.8 * this.b ? this.a = this.g.setTimeout(this.k, this.b - a) : (this.dispatchEvent("tick"), this.e && (this.a = this.g.setTimeout(this.k, this.b), this.o = x()))
            }
        };
        tc.prototype.start = function() {
            this.e = j;
            this.a || (this.a = this.g.setTimeout(this.k, this.b), this.o = x())
        };

        function wc(a) {
            a.e = l;
            a.a && (a.g.clearTimeout(a.a), a.a = k)
        }
        tc.prototype.D = function() {
            tc.s.D.call(this);
            wc(this);
            delete this.g
        };

        function xc(a, b) {
            ha(a) || (a && "function" == typeof a.handleEvent ? a = u(a.handleEvent, a) : e(Error("Invalid listener argument")));
            return 2147483647 < b ? -1 : uc.setTimeout(a, b || 0)
        };
        var yc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

        function zc(a) {
            if (Ac) {
                Ac = l;
                var b = p.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = Bc(c)) && c != b.hostname) Ac = j, e(Error())
                }
            }
            return a.match(yc)
        }
        var Ac = yb;

        function Bc(a) {
            return (a = zc(a)[3] || k) && decodeURIComponent(a)
        }

        function Cc() {
            var a = zc(document.location.href),
                b = a[1],
                c = a[2],
                d = a[3],
                a = a[4],
                f = [];
            b && f.push(b, ":");
            d && (f.push("//"), c && f.push(c, "@"), f.push(d), a && f.push(":", a));
            return f.join("")
        }

        function Dc(a, b, c) {
            if (r(b))
                for (var d = 0; d < b.length; d++) Dc(a, "" + b[d], c);
            else b != k && c.push("&", a, "" === b ? "" : "=", encodeURIComponent("" + b))
        }

        function Ec(a, b) {
            for (var c in b) Dc(c, b[c], a);
            return a
        };

        function Fc(a, b) {
            var c;
            if (a instanceof Fc) this.Fc = ea(b) ? b : a.Fc, Gc(this, a.Ed), c = a.pg, Hc(this), this.pg = c, c = a.Ie, Hc(this), this.Ie = c, Ic(this, a.og), c = a.Bd, Hc(this), this.Bd = c, Jc(this, a.a.Z()), c = a.ng, Hc(this), this.ng = c;
            else if (a && (c = zc("" + a))) {
                this.Fc = !!b;
                Gc(this, c[1] || "", j);
                var d = c[2] || "";
                Hc(this);
                this.pg = d ? decodeURIComponent(d) : "";
                d = c[3] || "";
                Hc(this);
                this.Ie = d ? decodeURIComponent(d) : "";
                Ic(this, c[4]);
                d = c[5] || "";
                Hc(this);
                this.Bd = d ? decodeURIComponent(d) : "";
                Jc(this, c[6] || "", j);
                c = c[7] || "";
                Hc(this);
                this.ng = c ?
                    decodeURIComponent(c) : ""
            } else this.Fc = !!b, this.a = new Kc(k, 0, this.Fc)
        }
        n = Fc.prototype;
        n.Ed = "";
        n.pg = "";
        n.Ie = "";
        n.og = k;
        n.Bd = "";
        n.ng = "";
        n.xr = l;
        n.Fc = l;
        n.toString = function() {
            var a = [],
                b = this.Ed;
            b && a.push(Lc(b, Mc), ":");
            if (b = this.Ie) {
                a.push("//");
                var c = this.pg;
                c && a.push(Lc(c, Mc), "@");
                a.push(encodeURIComponent("" + b));
                b = this.og;
                b != k && a.push(":", "" + b)
            }
            if (b = this.Bd) this.Ie && "/" != b.charAt(0) && a.push("/"), a.push(Lc(b, "/" == b.charAt(0) ? Nc : Oc));
            (b = this.a.toString()) && a.push("?", b);
            (b = this.ng) && a.push("#", Lc(b, Pc));
            return a.join("")
        };
        n.Z = function() {
            return new Fc(this)
        };

        function Gc(a, b, c) {
            Hc(a);
            a.Ed = c ? b ? decodeURIComponent(b) : "" : b;
            a.Ed && (a.Ed = a.Ed.replace(/:$/, ""))
        }

        function Ic(a, b) {
            Hc(a);
            b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.og = b) : a.og = k
        }

        function Jc(a, b, c) {
            Hc(a);
            b instanceof Kc ? (a.a = b, Qc(a.a, a.Fc)) : (c || (b = Lc(b, Rc)), a.a = new Kc(b, 0, a.Fc))
        }

        function Hc(a) {
            a.xr && e(Error("Tried to modify a read-only Uri"))
        }

        function Lc(a, b) {
            return t(a) ? encodeURI(a).replace(b, Sc) : k
        }

        function Sc(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
        var Mc = /[#\/\?@]/g,
            Oc = /[\#\?:]/g,
            Nc = /[\#\?]/g,
            Rc = /[\#\?@]/g,
            Pc = /#/g;

        function Kc(a, b, c) {
            this.a = a || k;
            this.b = !!c
        }

        function Tc(a) {
            if (!a.da && (a.da = new hb, a.F = 0, a.a))
                for (var b = a.a.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        f = k,
                        g = k;
                    0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
                    f = decodeURIComponent(f.replace(/\+/g, " "));
                    f = Uc(a, f);
                    d = a;
                    g = g ? decodeURIComponent(g.replace(/\+/g, " ")) : "";
                    Tc(d);
                    d.a = k;
                    var f = Uc(d, f),
                        i = d.da.get(f);
                    i || ib(d.da, f, i = []);
                    i.push(g);
                    d.F++
                }
        }
        n = Kc.prototype;
        n.da = k;
        n.F = k;
        n.$b = function() {
            Tc(this);
            return this.F
        };

        function Vc(a, b) {
            Tc(a);
            b = Uc(a, b);
            if (kb(a.da.b, b)) {
                a.a = k;
                a.F -= a.da.get(b).length;
                var c = a.da;
                kb(c.b, b) && (delete c.b[b], c.F--, c.Ce++, c.a.length > 2 * c.F && jb(c))
            }
        }
        n.clear = function() {
            this.da = this.a = k;
            this.F = 0
        };
        n.isEmpty = function() {
            Tc(this);
            return 0 == this.F
        };
        n.Zb = function() {
            Tc(this);
            for (var a = this.da.$a(), b = this.da.Zb(), c = [], d = 0; d < b.length; d++)
                for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
            return c
        };
        n.$a = function(a) {
            Tc(this);
            var b = [];
            if (a) {
                var c = a;
                Tc(this);
                c = Uc(this, c);
                kb(this.da.b, c) && (b = Ja(b, this.da.get(Uc(this, a))))
            } else {
                a = this.da.$a();
                for (c = 0; c < a.length; c++) b = Ja(b, a[c])
            }
            return b
        };
        n.get = function(a, b) {
            var c = a ? this.$a(a) : [];
            return 0 < c.length ? c[0] : b
        };
        n.toString = function() {
            if (this.a) return this.a;
            if (!this.da) return "";
            for (var a = [], b = this.da.Zb(), c = 0; c < b.length; c++)
                for (var d = b[c], f = encodeURIComponent("" + d), d = this.$a(d), g = 0; g < d.length; g++) {
                    var i = f;
                    "" !== d[g] && (i += "=" + encodeURIComponent("" + d[g]));
                    a.push(i)
                }
            return this.a = a.join("&")
        };
        n.Z = function() {
            var a = new Kc;
            a.a = this.a;
            this.da && (a.da = this.da.Z());
            return a
        };

        function Uc(a, b) {
            var c = "" + b;
            a.b && (c = c.toLowerCase());
            return c
        }

        function Qc(a, b) {
            b && !a.b && (Tc(a), a.a = k, gb(a.da, function(a, b) {
                var f = b.toLowerCase();
                b != f && (Vc(this, b), Vc(this, f), 0 < a.length && (this.a = k, ib(this.da, Uc(this, f), Ka(a)), this.F += a.length))
            }, a));
            a.b = b
        };
        var Wc;

        function Xc(a) {
            a = a.className;
            return t(a) && a.match(/\S+/g) || []
        }

        function I(a, b) {
            var c = Xc(a),
                d = Na(arguments, 1),
                f = c.length + d.length;
            Yc(c, d);
            a.className = c.join(" ");
            return c.length == f
        }

        function J(a, b) {
            var c = Xc(a),
                d = Na(arguments, 1),
                c = Zc(c, d);
            a.className = c.join(" ")
        }

        function Yc(a, b) {
            for (var c = 0; c < b.length; c++) Ga(a, b[c]) || a.push(b[c])
        }

        function Zc(a, b) {
            return Ca(a, function(a) {
                return !Ga(b, a)
            })
        }

        function $c(a, b, c) {
            var d = Xc(a);
            t(b) ? Ia(d, b) : r(b) && (d = Zc(d, b));
            t(c) && !Ga(d, c) ? d.push(c) : r(c) && Yc(d, c);
            a.className = d.join(" ")
        }

        function ad(a, b) {
            return Ga(Xc(a), b)
        }

        function bd(a, b, c) {
            c ? I(a, b) : J(a, b)
        };
        var cd = !D || Nb(9);
        !xb && !D || D && Nb(9) || xb && E("1.9.1");
        D && E("9");

        function dd(a) {
            return a ? new ed(fd(a)) : Wc || (Wc = new ed)
        }

        function K(a) {
            return t(a) ? document.getElementById(a) : a
        }

        function gd(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : hd("*", a, b)
        }

        function L(a, b) {
            var c = b || document,
                d = k;
            return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : gd(a, b)[0]) || k
        }

        function hd(a, b, c) {
            var d = document,
                c = c || d,
                a = a && "*" != a ? a.toUpperCase() : "";
            if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
            if (b && c.getElementsByClassName) {
                c = c.getElementsByClassName(b);
                if (a) {
                    for (var d = {}, f = 0, g = 0, i; i = c[g]; g++) a == i.nodeName && (d[f++] = i);
                    d.length = f;
                    return d
                }
                return c
            }
            c = c.getElementsByTagName(a || "*");
            if (b) {
                d = {};
                for (g = f = 0; i = c[g]; g++) a = i.className, "function" == typeof a.split && Ga(a.split(/\s+/), b) && (d[f++] = i);
                d.length = f;
                return d
            }
            return c
        }

        function id(a, b) {
            Xa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in jd ? a.setAttribute(jd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }
        var jd = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            height: "height",
            width: "width",
            usemap: "useMap",
            frameborder: "frameBorder",
            maxlength: "maxLength",
            type: "type"
        };

        function kd(a) {
            a = a.document;
            a = ld(a) ? a.documentElement : a.body;
            return new G(a.clientWidth, a.clientHeight)
        }

        function md(a) {
            var b = !yb && ld(a) ? a.documentElement : a.body,
                a = a.parentWindow || a.defaultView;
            return new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        }

        function nd(a, b, c) {
            var d = arguments,
                f = document,
                g = d[0],
                i = d[1];
            if (!cd && i && (i.name || i.type)) {
                g = ["<", g];
                i.name && g.push(' name="', ta(i.name), '"');
                if (i.type) {
                    g.push(' type="', ta(i.type), '"');
                    var m = {};
                    eb(m, i);
                    i = m;
                    delete i.type
                }
                g.push(">");
                g = g.join("")
            }
            g = f.createElement(g);
            i && (t(i) ? g.className = i : r(i) ? I.apply(k, [g].concat(i)) : id(g, i));
            2 < d.length && od(f, g, d, 2);
            return g
        }

        function od(a, b, c, d) {
            function f(c) {
                c && b.appendChild(t(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var g = c[d];
                ga(g) && !(ia(g) && 0 < g.nodeType) ? B(pd(g) ? Ka(g) : g, f) : f(g)
            }
        }

        function ld(a) {
            return "CSS1Compat" == a.compatMode
        }

        function qd(a, b) {
            od(fd(a), a, arguments, 1)
        }

        function rd(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        }

        function M(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : k
        }

        function sd(a, b) {
            var c = b.parentNode;
            c && c.replaceChild(a, b)
        }

        function fd(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }

        function td(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else rd(a), a.appendChild(fd(a).createTextNode(b))
        }

        function pd(a) {
            if (a && "number" == typeof a.length) {
                if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ha(a)) return "function" == typeof a.item
            }
            return l
        }

        function ud(a, b) {
            return !b ? k : vd(a, function(a) {
                return !b || ad(a, b)
            }, j)
        }

        function vd(a, b, c, d) {
            c || (a = a.parentNode);
            for (var c = d == k, f = 0; a && (c || f <= d);) {
                if (b(a)) return a;
                a = a.parentNode;
                f++
            }
            return k
        }

        function ed(a) {
            this.a = a || p.document || document
        }
        n = ed.prototype;
        n.O = function(a) {
            return t(a) ? this.a.getElementById(a) : a
        };

        function wd(a) {
            return ld(a.a)
        }
        n.appendChild = function(a, b) {
            a.appendChild(b)
        };
        n.append = qd;
        n.fo = rd;
        n.$k = M;
        n.contains = function(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        };

        function xd(a, b, c) {
            a.style[Aa(c)] = b
        }

        function yd(a, b) {
            var c = fd(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
        }

        function zd(a, b) {
            return yd(a, b) || (a.currentStyle ? a.currentStyle[b] : k) || a.style && a.style[b]
        }

        function Ad(a, b, c) {
            var d, f = xb && (qb || Cb) && E("1.9");
            b instanceof F ? (d = b.x, b = b.y) : (d = b, b = c);
            a.style.left = Bd(d, f);
            a.style.top = Bd(b, f)
        }

        function Cd(a) {
            if (zb && yb) {
                var b = a.ownerDocument.defaultView;
                if (b != b.top) return l
            }
            return !!a.getBoundingClientRect
        }

        function Dd(a) {
            var b = a.getBoundingClientRect();
            D && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        }

        function Ed(a) {
            if (D && !Nb(8)) return a.offsetParent;
            for (var b = fd(a), c = zd(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
                if (c = zd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return k
        }

        function Fd(a) {
            var b, c = fd(a),
                d = zd(a, "position"),
                f = xb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
                g = new F(0, 0),
                i;
            b = c ? fd(c) : document;
            i = D && !Nb(9) && !wd(dd(b)) ? b.body : b.documentElement;
            if (a == i) return g;
            if (Cd(a)) b = Dd(a), a = dd(c), a = md(a.a), g.x = b.left + a.x, g.y = b.top + a.y;
            else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(i), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
            else {
                b = a;
                do {
                    g.x += b.offsetLeft;
                    g.y += b.offsetTop;
                    b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
                    if (yb && "fixed" == zd(b, "position")) {
                        g.x += c.body.scrollLeft;
                        g.y += c.body.scrollTop;
                        break
                    }
                    b = b.offsetParent
                } while (b && b != a);
                if (wb || yb && "absolute" == d) g.y -= c.body.offsetTop;
                for (b = a;
                    (b = Ed(b)) && b != c.body && b != i;)
                    if (g.x -= b.scrollLeft, !wb || "TR" != b.tagName) g.y -= b.scrollTop
            }
            return g
        }

        function Gd(a, b) {
            var c = Hd(a),
                d = Hd(b);
            return new F(c.x - d.x, c.y - d.y)
        }

        function Hd(a) {
            var b = new F;
            if (1 == a.nodeType)
                if (Cd(a)) a = Dd(a), b.x = a.left, b.y = a.top;
                else {
                    var c;
                    c = dd(a);
                    c = md(c.a);
                    a = Fd(a);
                    b.x = a.x - c.x;
                    b.y = a.y - c.y
                }
            else {
                c = ha(a.Gp);
                var d = a;
                a.targetTouches ? d = a.targetTouches[0] : c && a.Ab.targetTouches && (d = a.Ab.targetTouches[0]);
                b.x = d.clientX;
                b.y = d.clientY
            }
            return b
        }

        function Id(a, b, c) {
            b instanceof G ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
            Jd(a, b);
            a.style.height = Bd(c, j)
        }

        function Bd(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        }

        function Jd(a, b) {
            a.style.width = Bd(b, j)
        }

        function Kd(a) {
            if ("none" != zd(a, "display")) return Ld(a);
            var b = a.style,
                c = b.display,
                d = b.visibility,
                f = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = Ld(a);
            b.display = c;
            b.position = f;
            b.visibility = d;
            return a
        }

        function Ld(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = yb && !b && !c;
            return (!ea(b) || d) && a.getBoundingClientRect ? (a = Dd(a), new G(a.right - a.left, a.bottom - a.top)) : new G(b, c)
        }

        function Md(a, b) {
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
        }

        function Nd(a) {
            var b = fd(a),
                c = D && a.currentStyle;
            if (c && wd(dd(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = Od(a, c.width, "width", "pixelWidth"), a = Od(a, c.height, "height", "pixelHeight"), new G(b, a);
            c = new G(a.offsetWidth, a.offsetHeight);
            b = Pd(a);
            a = Qd(a);
            return new G(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
        }

        function Od(a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var f = a.style[c],
                g = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = f;
            a.runtimeStyle[c] = g;
            return b
        }

        function Rd(a, b) {
            return Od(a, a.currentStyle ? a.currentStyle[b] : k, "left", "pixelLeft")
        }

        function Pd(a) {
            if (D) {
                var b = Rd(a, "paddingLeft"),
                    c = Rd(a, "paddingRight"),
                    d = Rd(a, "paddingTop"),
                    a = Rd(a, "paddingBottom");
                return new Qb(d, c, a, b)
            }
            b = yd(a, "paddingLeft");
            c = yd(a, "paddingRight");
            d = yd(a, "paddingTop");
            a = yd(a, "paddingBottom");
            return new Qb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        }
        var Sd = {
            thin: 2,
            medium: 4,
            thick: 6
        };

        function Td(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : k)) return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : k;
            return c in Sd ? Sd[c] : Od(a, c, "left", "pixelLeft")
        }

        function Qd(a) {
            if (D) {
                var b = Td(a, "borderLeft"),
                    c = Td(a, "borderRight"),
                    d = Td(a, "borderTop"),
                    a = Td(a, "borderBottom");
                return new Qb(d, c, a, b)
            }
            b = yd(a, "borderLeftWidth");
            c = yd(a, "borderRightWidth");
            d = yd(a, "borderTopWidth");
            a = yd(a, "borderBottomWidth");
            return new Qb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        }
        var Ud = /[^\d]+$/,
            Vd = {
                cm: 1,
                "in": 1,
                mm: 1,
                pc: 1,
                pt: 1
            },
            Wd = {
                em: 1,
                ex: 1
            };

        function Xd(a) {
            var b = zd(a, "fontSize"),
                c;
            c = (c = b.match(Ud)) && c[0] || k;
            if (b && "px" == c) return parseInt(b, 10);
            if (D) {
                if (c in Vd) return Od(a, b, "left", "pixelLeft");
                if (a.parentNode && 1 == a.parentNode.nodeType && c in Wd) return a = a.parentNode, c = zd(a, "fontSize"), Od(a, b == c ? "1em" : b, "left", "pixelLeft")
            }
            c = nd("span", {
                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
            });
            a.appendChild(c);
            b = c.offsetHeight;
            M(c);
            return b
        };

        function Yd(a, b) {
            if ((a = K(a)) && a.style) a.style.display = b ? "" : "none", bd(a, "hid", !b)
        }

        function Zd(a) {
            a = K(a);
            return !a ? l : !("none" == a.style.display || ad(a, "hid"))
        }

        function N(a) {
            B(arguments, function(a) {
                Yd(a, j)
            })
        }

        function O(a) {
            B(arguments, function(a) {
                Yd(a, l)
            })
        };
        var $d = window.yt && window.yt.config_ || {};
        pa("yt.config_", $d);
        var ae = window.yt && window.yt.tokens_ || {};
        pa("yt.tokens_", ae);
        pa("yt.globals_", window.yt && window.yt.globals_ || {});
        var be = window.yt && window.yt.msgs_ || {};
        pa("yt.msgs_", be);
        var ce = window.yt && window.yt.timeouts_ || [];
        pa("yt.timeouts_", ce);
        var de = window.yt && window.yt.intervals_ || [];
        pa("yt.intervals_", de);

        function ee(a) {
            return a in $d ? $d[a] : h
        }

        function fe(a) {
            var b = arguments;
            if (1 < b.length) {
                var c = b[0];
                ae[c] = b[1]
            } else
                for (c in b = b[0], b) ae[c] = b[c]
        }

        function ge(a) {
            return a in ae ? ae[a] : h
        }

        function P(a, b) {
            var c = window.setTimeout(a, b);
            ce.push(c);
            return c
        }

        function he(a, b) {
            var c = window.setInterval(a, b);
            de.push(c);
            return c
        }

        function ie(a) {
            window.clearInterval(a)
        }

        function je(a, b, c) {
            var d = b || {};
            if (a = a in be ? be[a] : c)
                for (var f in d) a = a.replace(RegExp("\\$" + f, "gi"), function() {
                    return d[f]
                });
            return a
        }
        eval("/*@cc_on!@*/false");

        function ke() {
            this.a = x()
        }
        new ke;
        ke.prototype.reset = function() {
            this.a = x()
        };
        ke.prototype.get = function() {
            return this.a
        };

        function le(a, b, c) {
            a.dataset ? a.dataset[me(b)] = c : a.setAttribute("data-" + b, c)
        }

        function ne(a, b) {
            return a.dataset ? a.dataset[me(b)] : a.getAttribute("data-" + b)
        }

        function oe(a, b) {
            a.dataset ? delete a.dataset[me(b)] : a.removeAttribute("data-" + b)
        }
        var pe = {};

        function me(a) {
            return pe[a] || (pe[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            }))
        };
        var qe = q("yt.dom.getNextId_");
        if (!qe) {
            qe = function() {
                return ++re
            };
            pa("yt.dom.getNextId_", qe);
            var re = 0
        }

        function se(a) {
            var b = a.cloneNode(l);
            "TR" == b.tagName || "SELECT" == b.tagName ? B(a.childNodes, function(a) {
                b.appendChild(se(a))
            }) : b.innerHTML = a.innerHTML;
            return b
        }

        function te(a, b) {
            a = K(a);
            b = K(b);
            return !!vd(a, function(a) {
                return a === b
            }, j, h)
        }

        function ue(a, b) {
            var c = hd(a, k, b);
            return c.length ? c[0] : k
        }

        function ve(a, b) {
            return L(a, b)
        }

        function we(a, b) {
            if (a in b) return b[a];
            var c = a.charAt(0).toUpperCase() + a.substr(1);
            if ("moz" + c in b) return b["moz" + c];
            if ("ms" + c in b) return b["ms" + c];
            if ("o" + c in b) return b["o" + c];
            if ("webkit" + c in b) return b["webkit" + c]
        };

        function xe(a) {
            if (a = a || q("window.event")) {
                for (var b in a) Ga(ye, b) || (this[b] = a[b]);
                if ((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
                this.target = b;
                if (b = a.relatedTarget) try {
                    b = b.nodeName && b
                } catch (c) {
                    b = k
                } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
                this.relatedTarget = b;
                this.clientX = a.clientX !== h ? a.clientX : a.pageX;
                this.clientY = a.clientY !== h ? a.clientY : a.pageY;
                if ((a.clientX || a.clientY) && document.body && document.documentElement) this.pageX = a.clientX + document.body.scrollLeft +
                    document.documentElement.scrollLeft, this.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.Db = a
            }
        }
        var ye = "stopPropagation preventMouseEvent preventManipulation preventDefault layerX layerY".split(" ");
        n = xe.prototype;
        n.type = "";
        n.target = k;
        n.relatedTarget = k;
        n.currentTarget = k;
        n.data = k;
        n.source = k;
        n.keyCode = 0;
        n.charCode = 0;
        n.altKey = l;
        n.ctrlKey = l;
        n.shiftKey = l;
        n.Db = k;
        n.clientX = 0;
        n.clientY = 0;
        n.pageX = 0;
        n.pageY = 0;
        n.Ym = 1;
        n.changedTouches = k;
        n.preventDefault = function() {
            this.Db.returnValue = l;
            this.Db.preventDefault && this.Db.preventDefault()
        };
        n.Wf = function() {
            this.Db.Wf ? this.Db.Wf() : this.preventDefault()
        };
        n.stopPropagation = function() {
            this.Db.cancelBubble = j;
            this.Db.stopPropagation && this.Db.stopPropagation()
        };
        var ab = q("yt.events.listeners_") || {};
        pa("yt.events.listeners_", ab);
        var ze = q("yt.events.counter_") || {
            count: 0
        };
        pa("yt.events.counter_", ze);

        function Ae(a, b, c, d) {
            return $a(function(f) {
                return f[0] == a && f[1] == b && f[2] == c && f[4] == !!d
            })
        }

        function Q(a, b, c, d) {
            function f(b) {
                b = new xe(b);
                b.currentTarget = a;
                return c.call(a, b)
            }
            if (!a || !a.addEventListener && !a.attachEvent) return "";
            var d = !!d,
                g = Ae(a, b, c, d);
            if (g) return g;
            g = ++ze.count + "";
            ab[g] = [a, b, c, f, d];
            a.addEventListener ? a.addEventListener(b, f, d) : a.attachEvent("on" + b, f);
            return g
        }

        function Be(a, b, c) {
            if (we("pointerEnabled", window.navigator)) return b = b.charAt(0).toUpperCase() + b.substr(1).toLowerCase(), Q(a, "MSPointer" + b, function(a) {
                c(a)
            });
            var d = b = b.toLowerCase();
            switch (b) {
                case "down":
                    d = "start";
                    break;
                case "up":
                    d = "end";
                    break;
                case "over":
                    d = "enter";
                    break;
                case "out":
                    d = "leave"
            }
            var f = l,
                g = 0;
            return [Q(a, "touch" + d, function(a) {
                window.clearTimeout(g);
                f = j;
                B(a.changedTouches, function(b) {
                    var d = new xe(a);
                    v(d, b);
                    c(d)
                });
                g = window.setTimeout(function() {
                    f = l
                }, 400)
            }), Q(a, "mouse" + b, function(a) {
                f || c(a)
            })]
        }

        function Ce(a, b, c) {
            De(a, b, function(a) {
                return ad(a, c)
            })
        }

        function De(a, b, c) {
            var d = a || document;
            Q(d, "click", function(a) {
                var g = vd(a.target, function(a) {
                    return a === d || c(a)
                }, j);
                g && g !== d && (a.currentTarget = g, b.call(g, a))
            })
        }

        function Ee(a) {
            "string" == typeof a && (a = [a]);
            B(a, function(a) {
                if (a in ab) {
                    var c = ab[a],
                        d = c[0],
                        f = c[1],
                        g = c[3],
                        c = c[4];
                    d.removeEventListener ? d.removeEventListener(f, g, c) : d.detachEvent("on" + f, g);
                    delete ab[a]
                }
            })
        };

        function Fe() {
            var a = we("fullScreenEnabled", document);
            return a || a == h && !xb && !!we("requestFullScreen", document.body)
        };

        function Ge(a) {
            this.b = a || window;
            this.a = []
        }
        Ge.prototype.b = k;
        Ge.prototype.a = k;
        Ge.prototype.N = function(a, b, c, d) {
            c = u(c, d || this.b);
            a = Q(a, b, c);
            this.a.push(a);
            return a
        };

        function He(a, b, c, d) {
            d = u(d, a.b);
            b = Be(b, c, d);
            a.a.push(b)
        }
        Ge.prototype.e = function(a) {
            Ee(a);
            Ia(this.a, a)
        };

        function Ie(a) {
            for (var b = 0; b < a.a.length; b++) Ee(a.a[b]);
            a.a = []
        };

        function Je(a) {
            a = a || {};
            this.url = a.url || this.url;
            this.urlV8 = a.url_v8 || this.urlV8;
            this.urlV9As2 = a.url_v9as2 || this.urlV9As2;
            this.minVersion = a.min_version || this.minVersion;
            this.args = a.args || bb(Ke);
            this.assets = a.assets || {};
            this.attrs = a.attrs || bb(Le);
            this.params = a.params || bb(Me);
            this.fallback = a.fallback || this.fallback;
            this.fallbackMessage = a.fallbackMessage || this.fallbackMessage;
            this.html5 = a.html5 || this.html5;
            this.disable = a.disable || {}
        }
        var Ke = {
                enablejsapi: 1
            },
            Le = {
                width: "640",
                height: "385"
            },
            Me = {
                allowscriptaccess: "always",
                allowfullscreen: "true",
                bgcolor: "#000000"
            };
        n = Je.prototype;
        n.url = "";
        n.urlV8 = "";
        n.urlV9As2 = "";
        n.minVersion = "8.0.0";
        n.html5 = l;

        function Ne(a) {
            a = "" + a;
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            e(Error("Invalid JSON string: " + a))
        }

        function Oe(a) {
            return eval("(" + a + ")")
        }

        function Pe() {
            this.a = h
        }

        function Qe(a, b) {
            var c = [];
            Re(a, b, c);
            return c.join("")
        }

        function Re(a, b, c) {
            switch (typeof b) {
                case "string":
                    Se(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? b : "null");
                    break;
                case "boolean":
                    c.push(b);
                    break;
                case "undefined":
                    c.push("null");
                    break;
                case "object":
                    if (b == k) {
                        c.push("null");
                        break
                    }
                    if (r(b)) {
                        var d = b.length;
                        c.push("[");
                        for (var f = "", g = 0; g < d; g++) c.push(f), f = b[g], Re(a, a.a ? a.a.call(b, "" + g, f) : f, c), f = ",";
                        c.push("]");
                        break
                    }
                    c.push("{");
                    d = "";
                    for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Se(g, c), c.push(":"),
                        Re(a, a.a ? a.a.call(b, g, f) : f, c), d = ","));
                    c.push("}");
                    break;
                case "function":
                    break;
                default:
                    e(Error("Unknown type: " + typeof b))
            }
        }
        var Te = {
                '"': '\\"',
                "\\": "\\\\",
                "/": "\\/",
                "\u0008": "\\b",
                "\u000c": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\x0B": "\\u000b"
            },
            Ue = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

        function Se(a, b) {
            b.push('"', a.replace(Ue, function(a) {
                if (a in Te) return Te[a];
                var b = a.charCodeAt(0),
                    f = "\\u";
                16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
                return Te[a] = f + b.toString(16)
            }), '"')
        };

        function Ve(a, b) {
            for (var c = a.split(b), d = {}, f = 0, g = c.length; f < g; f++) {
                var i = c[f].split("=");
                if (1 == i.length && i[0] || 2 == i.length) {
                    var m = i[0],
                        i = decodeURIComponent((i[1] || "").replace(/\+/g, " "));
                    m in d ? r(d[m]) ? La(d[m], i) : d[m] = [d[m], i] : d[m] = i
                }
            }
            return d
        }

        function We(a, b) {
            var c = [];
            Xa(a, function(a, b) {
                var g = encodeURIComponent("" + b),
                    i;
                i = r(a) ? a : [a];
                B(i, function(a) {
                    "" == a ? c.push(g) : c.push(g + "=" + encodeURIComponent("" + a))
                })
            });
            return c.join(b)
        }

        function Xe(a) {
            "?" == a.charAt(0) && (a = a.substr(1));
            return Ve(a, "&")
        }

        function Ye(a) {
            return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), Xe(1 < a.length ? a[1] : a[0])) : {}
        }

        function Ze(a) {
            a = Ec([], a);
            a[0] = "";
            return a.join("")
        }

        function R(a, b) {
            var c = Ec([a], b);
            if (c[1]) {
                var d = c[0],
                    f = d.indexOf("#");
                0 <= f && (c.push(d.substr(f)), c[0] = d = d.substr(0, f));
                f = d.indexOf("?");
                0 > f ? c[1] = "?" : f == d.length - 1 && (c[1] = h)
            }
            return c.join("")
        }
        var $e = Bc;

        function af(a, b) {
            var c = a.split("?", 2),
                a = c[0],
                c = Xe(c[1] || ""),
                d;
            for (d in b) c[d] = b[d];
            return R(a, c)
        };
        var bf = k;
        "undefined" != typeof XMLHttpRequest ? bf = function() {
            return new XMLHttpRequest
        } : "undefined" != typeof ActiveXObject && (bf = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });

        function cf(a) {
            switch (a && "status" in a ? a.status : -1) {
                case 0:
                case 200:
                case 204:
                case 304:
                    return j;
                default:
                    return l
            }
        };

        function df(a, b, c, d, f) {
            var g = bf && bf();
            if ("open" in g) {
                g.onreadystatechange = function() {
                    4 == (g && "readyState" in g ? g.readyState : 0) && b && b(g)
                };
                c = (c || "GET").toUpperCase();
                d = d || "";
                g.open(c, a, j);
                a = "POST" == c;
                if (f)
                    for (var i in f) g.setRequestHeader(i, f[i]), "content-type" == i.toLowerCase() && (a = l);
                a && g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                g.send(d);
                return g
            }
        }

        function ef(a, b) {
            var c = b.format || "JSON";
            b.tq && (a = document.location.protocol + "//" + document.location.hostname + a);
            var d = b.wg;
            d && (a = af(a, d));
            var f = b.Dr || "";
            if (d = b.rm) f = Xe(f), eb(f, d), f = Ze(f);
            var g = l,
                i, m = df(a, function(a) {
                    if (!g) {
                        g = j;
                        i && window.clearTimeout(i);
                        var d = cf(a),
                            f = k;
                        if (d || 400 <= a.status && 500 > a.status) f = ff(c, a);
                        if (d) a: {
                            switch (c) {
                                case "XML":
                                    d = 0 == parseInt(f && f.return_code, 10);
                                    break a;
                                case "RAW":
                                    d = j;
                                    break a
                            }
                            d = !!f
                        }
                        var f = f || {},
                            m = b.Ke || p;
                        d ? b.Bb && b.Bb.call(m, a, f) : b.Hc && b.Hc.call(m, a, f);
                        b.Ne && b.Ne.call(m,
                            a, f)
                    }
                }, b.method, f, b.headers);
            b.er && 0 < b.timeout && (i = P(function() {
                g || (g = j, m.abort(), window.clearTimeout(i), b.er.call(b.Ke || p, m))
            }, b.timeout))
        }

        function ff(a, b) {
            var c = k;
            switch (a) {
                case "JSON":
                    var d = b.responseText,
                        f = b.getResponseHeader("Content-Type") || "";
                    d && 0 <= f.indexOf("json") && (c = Oe(d));
                    break;
                case "XML":
                    if (d = (d = b.responseXML) ? gf(d) : k) c = {}, B(d.getElementsByTagName("*"), function(a) {
                        c[a.tagName] = hf(a)
                    })
            }
            return c
        }

        function gf(a) {
            return !a ? k : (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : k
        }

        function hf(a) {
            var b = "";
            B(a.childNodes, function(a) {
                b += a.nodeValue
            });
            return b
        }
        var jf = {
                html5_ajax: "action_get_html5_token",
                watch_actions_ajax: "action_get_watch_actions_token",
                addto_ajax: "action_get_wl_token"
            },
            kf = {
                html5_ajax: "html5_ajax_token",
                watch_actions_ajax: "watch_actions_ajax_token",
                addto_ajax: "addto_ajax_token"
            };

        function lf(a, b, c) {
            if (ge(a) && b) window.setTimeout(b, 0);
            else {
                var d = Cc() + "/token_ajax",
                    f = {};
                f[jf[a]] = 1;
                ef(d, {
                    format: "RAW",
                    method: "GET",
                    wg: f,
                    Ne: function(d) {
                        var f = Xe(d.responseText),
                            m = f[kf[a]];
                        m ? (fe(a, m), b && b()) : c && c(d, f)
                    }
                })
            }
        };
        var mf = {},
            nf = 0;

        function S(a) {
            var b = new Image,
                c = "" + nf++;
            mf[c] = b;
            b.onload = b.onerror = function() {
                delete mf[c]
            };
            b.src = a;
            b = eval("null")
        };

        function of (a) {
            this.o = a;
            this.a = 0;
            this.b = this.g(k)
        }

        function pf(a, b, c) {
            for (var d = a.b, a = a.a; 0 <= a; a--) {
                for (; d.links[a] && d.links[a].value < b;) d = d.links[a];
                c && (c[a] = d)
            }
            return (d = d.Cc()) && d.value == b ? d : k
        }

        function qf(a, b) {
            var c = [],
                d = pf(a, b, c);
            return d ? d.Cc() : c[0].Cc()
        }

        function rf(a, b) {
            var c = [],
                d = pf(a, b, c);
            return d ? d : a.k(b, c)
        } of .prototype.k = function(a, b) {
            var c;
            for (c = 0; 0.25 > this.o() && c <= this.a && 15 > c;) c++;
            for (; this.a < c;) b[++this.a] = this.b;
            for (var d = this.g(a), f = 0; f <= c; f++) d.links[f] = b[f].links[f], b[f].links[f] = d;
            return d
        }; of .prototype.e = function(a, b) {
            for (var c = 0; c <= a.getLevel(); c++) b[c].links[c] = a.links[c];
            for (; !this.b.links[this.a] && 0 < this.a;) this.a--;
            return a
        }; of .prototype.g = function(a) {
            return new sf(a)
        }; of .prototype.toString = function(a) {
            for (var a = a || 0, b = "", c = this.b; c.links[a];) c = c.links[a], b = b.concat(b.length ? "," : "", c.toString());
            return "[" + b + "]"
        };

        function sf(a) {
            this.value = a;
            this.links = []
        }
        sf.prototype.getLevel = function() {
            return this.links.length - 1
        };
        sf.prototype.Cc = function() {
            return this.links[0] || k
        };
        sf.prototype.toString = function() {
            return "" + this.value
        };

        function tf(a, b) {
            this.start = a;
            this.end = b;
            this.a = uf++
        }
        var uf = 0;
        tf.prototype.contains = function(a, b) {
            return a >= this.start && a < this.end && (b == k || a < b && b <= this.end)
        };

        function vf(a) {
            of .call(this, a)
        }
        vf.prototype = new of (Math.random);
        vf.prototype.constructor = vf;

        function wf(a, b) {
            for (var c = [], d = a.b, f = a.a; 0 <= f; f--) {
                for (; d.links[f] && d.links[f].value <= b;) d = d.links[f];
                var g = c,
                    i = d.ca[f],
                    m = h;
                for (m in i) g.push(i[1 * m])
            }
            if (d.value == b)
                for (var o in d.we) f = d.we[o], f.start == f.end && c.push(f);
            return c
        }

        function xf(a, b, c) {
            for (var d = [], b = qf(a, b), a = c == k ? k : qf(a, c); b && b != a;) {
                var c = d,
                    f = b.we,
                    g = h;
                for (g in f) c.push(f[1 * g]);
                b = b.Cc()
            }
            return d
        }

        function yf(a, b) {
            var c = rf(a, b.start),
                d = rf(a, b.end);
            c.we[b.a] = b;
            c.a++;
            d.a++;
            zf(b, c, d, function(a, c) {
                a.ca[c] && a.ca[c][b.a] == b && e(Error("Interval already exists: " + b));
                a.Aa(c, b)
            })
        }
        vf.prototype.k = function(a, b) {
            var c = of .prototype.k.call(this, a, b),
                d, f, g, i = {};
            for (d = 0; d < c.getLevel() && c.links[d + 1]; d++) {
                for (f in i) g = i[f], g.contains(c.value, c.links[d + 1].value) ? Af(g, c.links[d], c.links[d + 1], d) : (c.Aa(d, g), delete i[f]);
                for (f in b[d].ca[d]) g = b[d].ca[d][1 * f], g.contains(c.value, c.links[d + 1].value) ? (Af(g, c.links[d], c.links[d + 1], d), i[f] = g) : c.Aa(d, g)
            }
            for (f in i) c.Aa(d, i[f]);
            for (f in b[d].ca[d]) c.Aa(d, b[d].ca[d][1 * f]);
            i = {};
            for (d = 0; d < c.getLevel() && b[d + 1] != this.b; d++) {
                for (f in i) g = i[f], g.contains(b[d].value,
                    c.value) && !g.contains(b[d + 1].value, c.value) ? (b[d].Aa(d, g), delete i[f]) : Af(g, b[d + 1], c, d);
                for (f in b[d].ca[d]) g = b[d].ca[d][1 * f], g.contains(b[d + 1].value, c.value) && (Af(g, b[d + 1], c, d), i[f] = g)
            }
            for (f in i) b[d].Aa(d, i[f]);
            return c
        };

        function Bf(a, b) {
            var c = [],
                d = pf(a, b.start, c),
                f = pf(a, b.end);
            (!d || !f) && e(Error("Interval not found: " + b));
            zf(b, d, f, function(a, c) {
                a.ca[c] && a.ca[c][b.a] == b || e(Error("Interval not found: " + b));
                a.td(c, b)
            });
            delete d.we[b.a];
            0 == --d.a && a.e(d, c);
            f = pf(a, b.end, c);
            0 == --f.a && a.e(f, c)
        }
        vf.prototype.e = function(a, b) {
            var c, d, f, g = {};
            for (c = a.getLevel(); 0 <= c; c--) {
                for (d in g) {
                    for (var i = f = g[d], m = b[c + 1], o = b[c], s = c; m && m != o;) m.Aa(s, i), m = m.links[s];
                    a.links[c] && f.contains(b[c].value, a.links[c].value) && (b[c].Aa(c, f), delete g[d])
                }
                for (d in b[c].ca[c])
                    if (f = b[c].ca[c][1 * d], !a.links[c] || !f.contains(b[c].value, a.links[c].value)) b[c].td(c, f), g[d] = f
            }
            g = {};
            for (c = a.getLevel(); 0 <= c; c--) {
                for (d in g) {
                    i = f = g[d];
                    m = a.links[c];
                    o = a.links[c + 1];
                    for (s = c; m && m != o;) m.Aa(s, i), m = m.links[s];
                    a.links[c] && f.contains(b[c].value,
                        a.links[c].value) && delete g[d]
                }
                for (d in a.ca[c])
                    if (f = a.ca[c][1 * d], a.links[c] && (b[c] == this.b || !f.contains(b[c].value, a.links[c].value))) g[d] = f
            }
            return of.prototype.e.call(this, a, b)
        };
        vf.prototype.g = function(a) {
            return new Cf(a)
        };

        function zf(a, b, c, d) {
            for (var f = 0; b.links[f] && a.contains(b.value, b.links[f].value);) {
                for (; f < b.getLevel() && b.links[f + 1] && a.contains(b.value, b.links[f + 1].value);) f++;
                b.links[f] && (d(b, f), b = b.links[f])
            }
            for (; b != c;) {
                for (; 0 < f && (!b.links[f] || !a.contains(b.value, b.links[f].value));) f--;
                d(b, f);
                b = b.links[f]
            }
        }

        function Af(a, b, c, d) {
            for (; b && b != c;) b.td(d, a), b = b.links[d]
        }

        function Cf(a) {
            sf.call(this, a);
            this.we = {};
            this.ca = [];
            this.a = 0
        }
        Cf.prototype = new sf(Math.random);
        Cf.prototype.constructor = Cf;
        Cf.prototype.Aa = function(a, b) {
            this.ca[a] || (this.ca[a] = {});
            this.ca[a][b.a] = b
        };
        Cf.prototype.td = function(a, b) {
            this.ca[a] && delete this.ca[a][b.a]
        };

        function Df(a, b, c) {
            tf.call(this, a, b);
            a = c || {};
            this.Um = a.id;
            a.priority != h && (this.Vm = a.priority);
            this.Qi = a.namespace || "";
            this.visible = a.visible || l;
            this.pubsub = new H
        }
        Df.prototype = new tf(0, 0);
        n = Df.prototype;
        n.constructor = Df;
        n.Um = "";
        n.Vm = 10;
        n.sl = l;
        n.Ue = j;
        n.visible = l;
        n.pubsub = k;
        n.Qi = "";
        n.getId = function() {
            return this.Um
        };
        n.Lc = function() {
            return this.Vm
        };

        function Ef(a, b) {
            return a.start == b.start ? a.Lc() == b.Lc() ? 0 : a.Lc() < b.Lc() ? -1 : 1 : a.start < b.start ? -1 : 1
        };
        var Ff = {
            ht: "audio",
            tu: "play_pause",
            Eu: "seek"
        };

        function Gf(a, b) {
            a = a || 128;
            a & 4 && a & 33 || a & 2 && 2 != a || (this.a = a, this.setData(b))
        }
        Gf.prototype.a = 128;

        function Hf(a, b, c) {
            return b == a.a && c == a.b ? a : new Gf(b, c)
        }

        function T(a, b) {
            return (a.a & b) == b
        }
        Gf.prototype.setData = function(a) {
            this.b = a
        };
        Gf.prototype.getData = function() {
            return this.b
        };

        function If(a) {
            return T(a, 256) ? -1 : T(a, 1) ? 3 : T(a, 4) ? 0 : T(a, 2) ? 5 : T(a, 16) ? 1 : T(a, 8) ? 2 : -1
        };

        function Jf(a, b, c) {
            this.k = a;
            this.C = b;
            this.o = c;
            this.pubsub = new H;
            this.g = new tc(250);
            this.g.addEventListener("tick", u(this.Ua, this));
            this.Xa = [];
            this.a = [];
            this.Ib = new vf(Math.random)
        }
        n = Jf.prototype;
        n.hb = l;
        n.Ze = l;
        n.xp = l;
        n.yh = l;
        n.xh = l;
        n.ae = k;
        n.pubsub = k;
        n.km = function(a) {
            var b = Ka(arguments);
            this.Ua();
            b.forEach(function(a) {
                this.Xa.push(a);
                yf(this.Ib, a);
                this.pubsub.j("onAdd", a)
            }, this);
            this.Ua()
        };
        n.bm = function(a) {
            Ka(arguments).forEach(function(a) {
                a = this.Xa.indexOf(a);
                0 <= a && Kf(this, a)
            }, this);
            this.Ua()
        };

        function Kf(a, b) {
            var c = a.Xa.splice(b, 1)[0];
            Bf(a.Ib, c);
            b = a.a.indexOf(c);
            0 <= b && a.a.splice(b, 1);
            a.pubsub.j("onRemove", c)
        }

        function Lf(a) {
            a.b = 1E3 * a.k();
            a.Ze = j;
            a.Ua()
        }
        n.reset = function() {
            this.Ze = this.hb = l;
            Mf(this);
            for (var a = this.Xa.length - 1; 0 <= a; a--) Kf(this, a);
            this.Ua();
            this.e = k
        };

        function Nf(a, b) {
            var c = [];
            if (!b.length) return c;
            b.sort(Ef);
            for (var d = 0; d < b.length; d++) {
                var f = b[d];
                if (f.Ue && -1 == a.a.indexOf(f) && (!f.sl || a.xp))
                    if (a.a.push(f), f.sl) {
                        a.hb = j;
                        a.e || c.push(["onLockBlockEnter", f]);
                        c.push(["onEnter", f]);
                        a.e = f;
                        break
                    } else c.push(["onEnter", f])
            }
            return c
        }
        n.Ua = function() {
            this.xh = j;
            if (!this.yh)
                for (var a = 3; this.xh && a;) {
                    this.xh = l;
                    this.yh = j;
                    if (this.Ze && !this.hb) {
                        Mf(this);
                        for (var b = 1E3 * this.k(), c = [], d = 0; d < this.a.length; d++) {
                            var f = this.a[d];
                            f.Ue && !f.contains(b) && (c.push(["onExit", f]), this.a.splice(d--, 1))
                        }
                        d = wf(this.Ib, b);
                        f = this.C();
                        !T(f, 64) && b > this.b && (d = d.concat(xf(this.Ib, this.b, b)));
                        c = c.concat(Nf(this, d));
                        this.b = b;
                        !this.hb && this.e && (c.unshift(["onLockBlockExit", this.e]), this.e = k, T(f, 4) && (this.b = 2147483647));
                        if (T(f, 16) && !this.o() && (b = qf(this.Ib, this.b))) this.ae =
                            xc(u(this.Ua, this), b.value - this.b);
                        for (d = 0; d < c.length; d++) b = c[d], f = b[1], "onLockBlockExit" == b[0] || "onLockBlockEnter" == b[0] ? this.pubsub.j.apply(this.pubsub, b) : f.pubsub.j.apply(f.pubsub, b)
                    }
                    this.yh = l;
                    a--
                }
        };

        function Mf(a) {
            a.ae != k && (uc.clearTimeout(a.ae), a.ae = k)
        };

        function Of() {
            this.Wa = {}
        }
        n = Of.prototype;
        n.kl = k;
        n.li = k;
        n.jl = 0;
        n.width = 0;
        n.height = 0;
        n.ma = 0;
        n.rows = 0;
        n.Qb = 0;
        n.mi = k;

        function Pf(a, b) {
            var c = a.kl,
                c = c.replace("$N", a.li),
                c = c.replace("$L", a.jl.toString()),
                c = c.replace("$M", b.toString());
            a.mi && (c = R(c, {
                sigh: a.mi
            }));
            return c
        }

        function Qf(a, b) {
            var c = Math.floor(b / (a.ma * a.rows)),
                d = a.ma * a.rows,
                f = b % d,
                g = f % a.ma,
                f = Math.floor(f / a.ma),
                i = a.rows,
                m = a.Qb - d * c;
            m < d && (i = Math.ceil(m / a.ma));
            return {
                url: Pf(a, c),
                gr: g,
                ma: a.ma,
                row: f,
                rows: i,
                Mm: a.width * a.ma,
                Lm: a.height * i
            }
        };

        function Rf(a) {
            this.a = [];
            this.b = {};
            for (var a = a.split("|"), b = a[0], c = 1, d, f; c < a.length; c++) d = a[c].split("#"), f = new Of, f.jl = c - 1, f.width = parseInt(d[0], 10), f.height = parseInt(d[1], 10), f.Qb = parseInt(d[2], 10), f.ma = parseInt(d[3], 10), f.rows = parseInt(d[4], 10), f.kl = b, f.li = d[6], f.mi = d[7], this.a.push(f);
            1 < this.a.length && -1 != this.getLevel(0).li.indexOf("default") && this.a.splice(0, 1)
        }
        Rf.prototype.a = k;
        Rf.prototype.b = k;

        function Sf(a, b) {
            var c = a.getLevel(0).Qb;
            return Ob(Math.round(c * b), 0, c - 1)
        }
        Rf.prototype.getLevel = function(a) {
            return this.a[a]
        };

        function Tf(a, b) {
            var c = a.b[b];
            if (c) return c;
            for (var c = a.a.length, d = 0; d < c; d++)
                if (a.getLevel(d).width >= b) return a.b[b] = d;
            a.b[b] = c - 1;
            return c - 1
        };
        var Uf = {
            "0": "MONO",
            1: "LEFT_RIGHT",
            2: "RIGHT_LEFT",
            3: "TOP_BOTTOM",
            4: "BOTTOM_TOP"
        };
        var Vf, Wf, Xf;
        Xf = Wf = Vf = l;
        var Yf = sb();
        Yf && (-1 != Yf.indexOf("Firefox") || -1 != Yf.indexOf("Camino") || (-1 != Yf.indexOf("iPhone") || -1 != Yf.indexOf("iPod") ? Vf = j : -1 != Yf.indexOf("iPad") ? Wf = j : -1 != Yf.indexOf("Android") && (Xf = j)));
        var Zf = Vf,
            $f = Wf,
            ag = Xf;

        function bg(a) {
            var b = sb();
            return !b ? l : 0 <= b.toLowerCase().indexOf(a)
        };

        function cg(a, b, c, d, f) {
            this.qe = a;
            b = b.replace(/&quot;/g, '"');
            this.If = unescape(b);
            a = dg[c].split("x");
            this.size = new G(parseInt(a[0], 10), parseInt(a[1], 10));
            this.Jf = eg[c];
            this.nb = c;
            this.b = fg[d];
            this.a = d;
            this.e = !!f
        }
        n = cg.prototype;
        n.qe = "";
        n.If = "";
        n.Jf = "";
        n.nb = "";
        n.size = k;
        n.toString = function() {
            return this.Jf + ": " + this.If
        };

        function gg(a) {
            var b = new Fc(a.qe),
                b = "http://web.archive.org/web/20120609184927/http://www.youtube.com/api/manifest/t2b/source/youtube/id/" + b.a.get("id"),
                b = b + ("/itag/" + a.a);
            return a.qe + "#" + (b + "/mfmt/amf")
        }
        var hg = {
                'video/mp4; codecs="avc1.42001E, mp4a.40.2"': "maybe"
            },
            ig = {
                "application/x-mpegURL": "maybe"
            };

        function jg() {
            if (bg("android 2.2")) return j;
            var a = document.createElement("video");
            return a && a.canPlayType && (a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') || a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
        }
        var kg = {
                jt: "auto",
                cu: "light",
                SMALL: "small",
                ju: "medium",
                LARGE: "large",
                Rt: "hd720",
                Qt: "hd1080",
                Xt: "highres"
            },
            lg = {
                hd1080: j,
                hd720: j
            },
            mg = ["hd1080", "hd720", "large", "medium", "small"],
            dg = {
                auto: "Auto",
                light: "320x240",
                small: "320x240",
                medium: "640x360",
                large: "854x480",
                hd720: "1280x720",
                hd1080: "1920x1080",
                highres: "2048x1536"
            },
            eg = {
                auto: "auto",
                light: "240p",
                small: "240p",
                medium: "360p",
                large: "480p",
                hd720: "720p",
                hd1080: "1080p",
                highres: "Original"
            },
            ng = {
                5: j,
                34: j,
                35: j
            };

        function og(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var f = a[d];
                f.e == b && c.push(f)
            }
            return c
        }

        function pg(a, b) {
            var c = a.length;
            if (2 > c) return a;
            if (b)
                for (var b = 0.76 * b, d = 0; d < c; d++) {
                    if (b >= a[d].b) return a.slice(d)
                } else
                    for (d = 0; d < c; d++)
                        if (!lg[a[d].nb]) return a.slice(d);
            return [a[c - 1]]
        }

        function qg(a, b, c) {
            var d = 0,
                f = 0;
            fa(a) || (d = a.width, f = a.height);
            a = 16 / 9;
            d > Math.round(a * f) && (d = Math.round(a * f));
            for (var d = d * f, f = k, a = 0, g = b.length; a < g; a++) {
                var i = b[a];
                if (!c || !lg[i.nb]) {
                    if (i.size.width * i.size.height * ("medium" == i.nb ? 0.26 : 0.85) < d) return i;
                    f = i
                }
            }
            return f
        }
        var fg = {
            17: 80,
            18: 736,
            22: 3192,
            36: 256,
            37: 6192,
            43: 928,
            44: 2280,
            45: 3192,
            46: 6192,
            82: 928,
            83: 2280,
            84: 3192,
            85: 6192,
            100: 928,
            101: 2280,
            102: 3192,
            103: 6192
        };

        function U(a, b) {
            return b == h ? a : "1" == b ? j : l
        }

        function rg(a, b, c) {
            for (var d in c)
                if (c[d] == b) return c[d];
            return a
        }

        function V(a, b) {
            return b == h ? a : b
        };
        var sg = ["corp.google.com", "youtube.com"],
            tg = "www.google.com/aclk www.google.com/pagead/conversion googleadservices.com/aclk googleadservices.com/pagead/conversion googleads.g.doubleclick.net/aclk googleads.g.doubleclick.net/pagead/conversion".split(" ");

        function ug(a, b) {
            return RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i").test(a)
        };

        function W() {
            this.b = new H
        }
        z(W, Ub);
        W.prototype.n = function(a, b, c) {
            this.C || this.b.n(a, b, c)
        };
        W.prototype.P = function(a, b, c) {
            this.C || this.b.P(a, b, c)
        };
        W.prototype.j = function(a, b) {
            this.C || this.b.j.apply(this.b, arguments)
        };
        W.prototype.D = function() {
            W.s.D.call(this);
            Wb(this.b)
        };

        function vg(a, b) {
            this.a = a;
            this.b = b
        }
        vg.prototype.getKey = function() {
            return this.a
        };
        vg.prototype.getValue = function() {
            return this.b
        };
        vg.prototype.Z = function() {
            return new vg(this.a, this.b)
        };

        function wg(a) {
            this.a = [];
            if (a) a: {
                var b, c;
                if (a instanceof wg) {
                    if (b = a.Zb(), c = a.$a(), 0 >= a.$b()) {
                        for (var a = this.a, d = 0; d < b.length; d++) a.push(new vg(b[d], c[d]));
                        break a
                    }
                } else b = Za(a),
                c = Ya(a);
                for (d = 0; d < b.length; d++) xg(this, b[d], c[d])
            }
        }

        function xg(a, b, c) {
            var d = a.a;
            d.push(new vg(b, c));
            b = d.length - 1;
            a = a.a;
            for (c = a[b]; 0 < b;)
                if (d = b - 1 >> 1, a[d].getKey() > c.getKey()) a[b] = a[d], b = d;
                else break;
            a[b] = c
        }
        n = wg.prototype;
        n.$a = function() {
            for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getValue());
            return b
        };
        n.Zb = function() {
            for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getKey());
            return b
        };
        n.Z = function() {
            return new wg(this)
        };
        n.$b = function() {
            return this.a.length
        };
        n.isEmpty = function() {
            return 0 == this.a.length
        };
        n.clear = function() {
            Ha(this.a)
        };

        function yg() {
            wg.call(this)
        }
        z(yg, wg);

        function zg(a) {
            this.a = a;
            this.g = new yg;
            this.o = {};
            this.k = new H
        }
        zg.prototype.b = l;
        zg.prototype.e = "l";

        function Ag(a, b, c) {
            for (var c = Tf(a.a, c), d; 0 <= c; c--) {
                d = b;
                var f = a.a.getLevel(c);
                if (d = f.Wa[Math.floor(d / (f.ma * f.rows))] ? Qf(f, d) : k) return d
            }
            return Qf(a.a.getLevel(0), b)
        }

        function Bg(a) {
            if (!a.b)
                if (a.g.isEmpty()) a.b = l;
                else {
                    a.b = j;
                    var b;
                    var c = a.g,
                        d = c.a,
                        f = d.length;
                    b = d[0];
                    if (0 >= f) b = h;
                    else {
                        if (1 == f) Ha(d);
                        else {
                            d[0] = d.pop();
                            for (var d = 0, c = c.a, f = c.length, g = c[d]; d < f >> 1;) {
                                var i = 2 * d + 1,
                                    m = 2 * d + 2,
                                    i = m < f && c[m].getKey() < c[i].getKey() ? m : i;
                                if (c[i].getKey() > g.getKey()) break;
                                c[d] = c[i];
                                d = i
                            }
                            c[d] = g
                        }
                        b = b.getValue()
                    }
                    d = new Image;
                    d.src = Pf(a.a.getLevel(b.ik), b.jk);
                    d.onload = u(a.C, a, b.ik, b.jk)
                }
        }
        zg.prototype.C = function(a, b) {
            this.b = l;
            var c = this.a.getLevel(a);
            c.Wa[b] = j;
            Bg(this);
            var d, f = c.ma * c.rows;
            d = b * f;
            c = Math.min(d + f, c.Qb - 1);
            d = [d, c];
            this.k.j(this.e, d[0], d[1])
        };

        function Cg(a) {
            this.b = new H;
            this.kb = [];
            this.me = [];
            this.o = [];
            this.vb = {};
            this.U = {};
            this.fb = {};
            this.setData(a)
        }
        z(Cg, W);
        var Dg = {
                gu: 1,
                hu: 2,
                iu: 3
            },
            Eg = /\/img\/watermark\/youtube_(hd_)?watermark(-vfl\S{6})?.png$/,
            Fg = "author cc_asr cc_load_policy iv_allow_external_links iv_new_window iv_load_policy keywords subscribed rvs title ttsurl ypc_buy_url ypc_cart_id ypc_price_string ypc_preview ypc_video_rental_bar_text".split(" ");
        n = Cg.prototype;
        n.qk = l;
        n.pk = j;
        n.Pa = l;
        n.Gi = l;
        n.Hi = j;
        n.Sg = l;
        n.Ng = 1;
        n.Gj = l;
        n.kj = 0;
        n.ul = l;
        n.Ii = l;
        n.Xj = 3;
        n.tg = "";
        n.Pd = l;
        n.Yg = l;
        n.Te = 0;
        n.Wj = l;
        n.mj = j;
        n.Qg = l;
        n.Xc = l;
        n.kc = l;
        n.la = 0;
        n.Mg = 0;
        n.lj = l;
        n.Tg = l;
        n.Pg = l;
        n.fa = 0;
        n.mf = l;
        n.Dc = l;
        n.eh = 1;
        n.nj = l;

        function Gg(a, b) {
            var c = b || {};
            a.Gi = U(a.Gi, c.iv_allow_external_links);
            a.Hi = U(a.Hi, c.iv_new_window);
            a.author = V(a.author, c.author);
            a.Ii = U(a.Ii, c.cc_asr);
            a.tg = V(a.tg, c.ttsurl);
            a.e = V(a.e, c.subscribed);
            a.title = V(a.title, c.title);
            a.Uf = V(a.Uf, c.ypc_buy_url);
            a.fi = V(a.fi, c.ypc_cart_id);
            a.Tc = V(a.Tc, c.ypc_video_rental_bar_text);
            a.ra = V(a.ra, c.ypc_preview);
            a.Rc = V(a.Rc, c.ypc_price_string);
            c.keywords && (a.U = Hg(c.keywords));
            c.rvs && (a.jm = Ig(c.rvs));
            Fg.forEach(function(a) {
                a in c && (this.vb[a] = c[a])
            }, a)
        }
        n.setData = function(a) {
            var b = a || {};
            this.Pa = "1" == b.hlsdvr;
            this.Sg = "1" == b.infringe || "1" == b.muted;
            this.Uc = b.csi_page_type;
            this.Vc = b.sw;
            this.Qa = b.t;
            this.Pd = "1" == b.enable_cardio;
            this.Wj = "1" == b.autoplay;
            this.mj = "1" != b.no_get_video_log;
            this.Qg = "1" == b.tmi;
            this.Xc = "1" == b.live_playback;
            this.mk = b.iurlmaxres;
            this.Wd = b.oauth_token;
            this.M = b.ptchn;
            this.eb = b.oid;
            this.g = b.ptk;
            this.tb = b.pltype;
            this.pa = b.plid;
            this.k = b.hbid;
            this.a = b.list;
            this.lc = b.pyv_beacon_url;
            this.Ud = b.sdetail;
            this.Td = b.sourceid;
            this.nk = b.iurlsd;
            this.nj =
                "1" == b.skip_kansas_logging;
            this.u = this.u || b.vq;
            this.Rd = b.approx_threed_layout || 0;
            this.mf = "1" == b.threed_converted;
            this.ok = b.iurl;
            this.Tg = "1" == b.sendtmp;
            this.Pg = !!this.Vc || this.Tg;
            this.fa = Jg(this, b.start);
            this.A = b.video_id;
            Kg(this, b.watermark);
            if (b.ad3_module || b.ad_module) "1" == b.allow_html5_ads ? (this.qk = j, "1" == b.ad_preroll && this.o.push("ad")) : "1" != b.supported_without_ads && (this.Yg = j);
            b.allow_embed && (this.pk = "1" == b.allow_embed);
            b.iv_load_policy && (this.ya = Lg(b.iv_load_policy, this.ya));
            b.cc_load_policy &&
                (this.Xj = Lg(b.cc_load_policy, 2));
            b.delay && (this.B = za(b.delay));
            b.idpj && (this.Te = za(b.idpj));
            b.url_encoded_fmt_stream_map && (this.me = Ig(b.url_encoded_fmt_stream_map));
            b.hlsvp && this.me.push({
                url: b.hlsvp,
                type: "application/x-mpegURL",
                quality: "auto",
                itag: "93"
            });
            b.length_seconds && (this.la = za(b.length_seconds));
            b.ldpj && (this.Mg = za(b.ldpj));
            b.loudness && (this.ea = b.loudness, this.Ng = -15 < this.ea && 0 > this.ea ? Math.pow(10, (-18 - this.ea) / 20) : 1);
            b.pyv_billable_url && ug(b.pyv_billable_url, tg) && (this.oa = b.pyv_billable_url);
            b.pyv_conv_url && ug(b.pyv_conv_url, tg) && (this.mc = b.pyv_conv_url);
            b.threed_module && !b.threed_converted && (this.oe = b.threed_module, this.Pc = 6);
            if ("1" == b.track_embed || b.tk) this.lj = j;
            b.watch_ajax_token && fe("watch_actions_ajax", b.watch_ajax_token);
            b.fresca_preroll && this.o.push("fresca");
            ["baseUrl", "uid", "convViewUrl", "oeid", "ieid"].forEach(function(a) {
                this.fb[a] = b[a]
            }, this);
            this.fb.focEnabled = "1" == b.focEnabled;
            this.fb.rmktEnabled = "1" == b.rmktEnabled;
            this.kj = Mg(b.rmktPingThreshold, b.length_seconds);
            this.vb =
                b;
            Gg(this, b);
            Ng(this)
        };

        function Ng(a) {
            var b, c = !(!a.oe && !a.Dc);
            b = a.me;
            for (var d = [], f = 0, g = b.length; f < g; ++f) {
                var i = b[f];
                d.push(new cg(i.url, i.type, i.quality, i.itag, i.stereo3d))
            }
            b = d;
            if (jg()) {
                d = og(b, c);
                b = !d.length && c ? og(b, l) : d;
                c = [];
                d = [];
                f = document.createElement("video");
                for (g = 0; g < b.length; g++) {
                    var i = b[g],
                        m = f.canPlayType(i.If);
                    if (!m) {
                        var m = h,
                            o = i.If;
                        $f ? m = ig[o] : bg("android 2.2") && (m = hg[o]);
                        m = m || ""
                    }
                    m && ("no" != m && -1 == d.indexOf(i.Jf)) && (d.push(i.Jf), c.push(i))
                }
                b = c
            } else b = [];
            a.kb = b
        }

        function Og(a, b) {
            var c = k;
            a.kb.some(function(a) {
                if (a.nb == b) return c = a, j
            });
            return c
        }

        function Pg(a) {
            var b = "",
                c = {};
            a.format && (b = a.format.a in ng && bg("ps3;leanback") ? gg(a.format) : a.format.qe, a.g && a.M && (c.ptk = a.g, c.oid = a.eb, c.ptchn = a.M, c.pltype = a.tb));
            return R(b, c)
        }

        function Qg(a, b) {
            return !t(a.U[b]) ? k : a.U[b]
        }

        function Rg(a) {
            !a.Zc && a.vb.storyboard_spec && (a.Zc = new Rf(a.vb.storyboard_spec));
            return a.Zc
        }

        function Sg(a) {
            var b = Rg(a);
            !a.Yc && b && (a.Yc = new zg(b));
            return a.Yc
        }

        function Tg(a, b) {
            ef(b, {
                format: "RAW",
                method: "GET",
                Ke: a,
                Bb: a.kr
            })
        }
        n.kr = function(a) {
            this.C || (a = Xe(a.responseText), "fail" == a.status ? this.j("onStatusFail", a) : (this.setData(a), this.j("videoinfo", a)))
        };

        function Lg(a, b) {
            var c = parseInt(a, 10),
                d;
            a: {
                for (d in Dg)
                    if (Dg[d] == c) {
                        d = j;
                        break a
                    } d = l
            }
            return d ? c : b
        }

        function Jg(a, b) {
            b = Number(b);
            return isNaN(b) ? a.fa || 0 : b
        }

        function Ig(a) {
            a = a.split(",");
            return a = a.map(function(a) {
                return Xe(a)
            })
        }

        function Hg(a) {
            var a = Ve(a, ","),
                b = {},
                c;
            for (c in a) b[c] = a[c] ? a[c] : j;
            return b
        }

        function Kg(a, b) {
            if (b) {
                var c = b.split(",");
                2 <= c.length && (a.qa = c[1], a.Wc = c[0])
            }
        }

        function Ug(a, b) {
            return !!a.vb[b]
        }
        n.toggleThreeD = function() {
            this.Dc = !this.Dc;
            Ng(this)
        };

        function Mg(a, b) {
            var c = za(b),
                d = za(a);
            return isNaN(d) || isNaN(c) ? 0 : Math.min(d, c)
        };

        function Vg(a, b) {
            this.type = a || "";
            this.id = b || ""
        }
        Vg.prototype.toString = function() {
            return this.type + this.id
        };

        function Wg(a) {
            this.ha = [];
            this.a = [];
            this.ia = Math.max(0, a.index || 0);
            this.loop = !!a.loop;
            this.fa = a.startSeconds || 0;
            this.Gk = "1" == a.mob;
            a.video_id && (this.ha[this.ia] = new Cg(a));
            a.api && ("string" == typeof a.api && 16 == a.api.length ? a.list = "PL" + a.api : a.playlist = a.api);
            if (a.list) switch (a.listType) {
                case "user_uploads":
                    Xg(this, a.list);
                    break;
                case "user_favorites":
                    Yg(this, a.list);
                    break;
                case "search":
                    Zg(this, a.list);
                    break;
                default:
                    this.b = new Vg(a.list.substr(0, 2), a.list.substr(2)), this.Va || $g(this, "/list_ajax?style=json&action_get_list=1", {
                        list: this.b
                    })
            } else if (a.playlist) {
                var b = a.playlist.toString().split(",");
                0 < this.ia && (this.ha = []);
                B(b, function(a) {
                    a && this.ha.push(new Cg({
                        video_id: a
                    }))
                }, this);
                this.Af = this.ha.length;
                this.Wa = j
            } else a.videoList && (0 < this.ia && (this.ha = []), B(a.videoList, function(a) {
                this.ha.push(new Cg(a))
            }, this), this.Af = this.ha.length, this.Wa = j);
            this.setShuffle(!!a.shuffle);
            a.suggestedQuality && (this.e = a.suggestedQuality)
        }
        n = Wg.prototype;
        n.loop = l;
        n.fa = 0;
        n.Sl = l;
        n.ia = 0;
        n.Af = 0;
        n.Gk = l;
        n.Wa = l;
        n.Va = l;
        n.Cc = function() {
            if (++this.ia >= this.ha.length)
                if (this.loop) this.ia = 0;
                else return k;
            ah(this, this.ia);
            return bh(this, this.ia)
        };

        function ch(a) {
            if (0 > --a.ia)
                if (a.loop) a.ia = a.ha.length - 1;
                else return k;
            ah(a, a.ia);
            return bh(a, a.ia)
        }

        function bh(a, b) {
            var c = b != h ? b : a.ia;
            return c in a.ha ? a.ha[a.a[c]] : k
        }
        n.setShuffle = function(a) {
            this.Sl = a;
            this.a = [];
            for (a = 0; a < this.ha.length; a++) this.a.push(a);
            if (this.Sl)
                for (a = 1; a < this.a.length; a++) {
                    var b = Math.floor(Math.random() * a),
                        c = this.a[a];
                    this.a[a] = this.a[b];
                    this.a[b] = c
                }
        };

        function ah(a, b) {
            a.ia = Ob(b, 0, a.ha.length - 1);
            a.fa = 0
        }

        function Xg(a, b) {
            a.Va || (a.b = new Vg("UU", "PLAYER_" + b), $g(a, "/list_ajax?style=json&action_get_user_uploads_by_user=1", {
                username: b
            }))
        }

        function Yg(a, b) {
            a.Va || (a.b = new Vg("FL", "PLAYER_" + b), $g(a, "/list_ajax?style=json&action_get_favorited_by_user=1", {
                username: b
            }))
        }

        function Zg(a, b) {
            if (!a.Va) {
                a.b = new Vg("SR", b);
                var c = {
                    search_query: b
                };
                a.Gk && (c.mob = "1");
                $g(a, "/search_ajax?style=json&embeddable=1", c)
            }
        }

        function $g(a, b, c) {
            ef(R(b, c), {
                format: "JSON",
                Bb: function(a, b) {
                    b.video && b.video.length && (this.ha = [], B(b.video, function(a) {
                        a && (a.video_id = a.encrypted_id, this.ha.push(new Cg(a)))
                    }, this), this.Af = this.ha.length, this.setShuffle(l), this.Va = l, this.Wa = j, this.Nh && this.Nh())
                },
                Ke: a
            })
        };

        function dh(a, b, c) {
            this.a = b.name || k;
            this.ni = {};
            for (a = 0; a < c.length; a++) b = c[a], this.ni[b.a] = b
        }
        dh.prototype.getName = function() {
            return this.a
        };

        function eh(a) {
            a = Ya(a.ni);
            Oa(a, function(a, c) {
                return a.a - c.a
            });
            return a
        };

        function fh(a, b, c) {
            this.a = b;
            this.g = c.name;
            this.e = !!c.wd;
            this.b = c.I
        }
        fh.prototype.getName = function() {
            return this.g
        };

        function X() {
            this.Ma = {};
            this.De = this.constructor.De;
            this.a = this.De.ni;
            this.sa = this.b = k
        }
        X.prototype.Mk = function() {
            return this.De
        };
        X.prototype.get = function(a, b) {
            var c;
            c = this.a[a.a];
            var d = gh(this, c);
            c.e ? (r(d), c = d[b || 0]) : (r(d), c = d);
            return c
        };
        X.prototype.clear = function(a) {
            a = a.a;
            delete this.Ma[a];
            this.sa && delete this.sa[a]
        };

        function hh(a, b) {
            for (var c = eh(a.Mk()), d = 0; d < c.length; d++) {
                var f = c[d],
                    g = b,
                    i = f.a;
                if (i in g.Ma && ea(g.Ma[i]) && g.Ma[i] !== k)
                    if (a.sa && delete a.sa[f.a], g = 11 == f.b || 10 == f.b, f.e) {
                        i = b;
                        i = gh(i, i.a[f.a]);
                        i == k || r(i);
                        for (var i = i || [], m = 0; m < i.length; m++) {
                            var o = a,
                                s = f,
                                y = g ? i[m].Z() : i[m],
                                s = s.a;
                            o.Ma[s] || (o.Ma[s] = []);
                            o.Ma[s].push(y);
                            o.sa && delete o.sa[s]
                        }
                    } else i = gh(b, f), g ? (g = gh(a, f)) ? hh(g, i) : (g = a, i = i.Z(), f = f.a, g.Ma[f] = i, g.sa && (g.sa[f] = i)) : (g = a, f = f.a, g.Ma[f] = i, g.sa && (g.sa[f] = i))
            }
        }
        X.prototype.Z = function() {
            var a = new this.constructor;
            a.Ma = {};
            a.sa && (a.sa = {});
            hh(a, this);
            return a
        };

        function gh(a, b) {
            var c = b.a;
            if (!c in a.Ma) return k;
            var d = a.Ma[c];
            return d == k ? k : a.b ? !(c in a.sa) ? (d = a.b.a(a, b, d), a.sa[c] = d) : a.sa[c] : d
        }

        function ih(a, b) {
            var c = [],
                d, f;
            for (f in b) b.hasOwnProperty(f) && (0 == f ? d = b[0] : c.push(new fh(0, f, b[f])));
            a.De = new dh(0, d, c);
            a.Mk = function() {
                return a.De
            }
        };
        var jh = {
            js: 0,
            Qr: 1,
            es: 2,
            is: 3,
            ws: 4,
            Kr: 5,
            $r: 6,
            Xr: 7,
            Yr: 8,
            Zr: 9,
            Vr: 10,
            Wr: 11,
            ys: 12,
            xs: 13,
            hs: 14,
            Nr: 20,
            qs: 21,
            Rr: 22,
            Sr: 23,
            os: 24,
            as: 25,
            ts: 30,
            us: 31,
            rs: 32,
            vs: 33,
            Ur: 40,
            Tr: 41,
            zs: 42,
            As: 43,
            bs: 50,
            gs: 51,
            ks: 52,
            ls: 53,
            ms: 54,
            Mr: 55,
            Or: 56,
            ds: 60,
            cs: 61,
            Pr: 70,
            Lr: 80,
            Bs: 90
        };

        function kh() {
            X.apply(this)
        }
        z(kh, X);

        function lh() {
            X.apply(this)
        }
        z(lh, X);

        function mh() {
            X.apply(this)
        }
        z(mh, X);

        function nh() {
            X.apply(this)
        }
        z(nh, X);

        function oh() {
            X.apply(this)
        }
        z(oh, X);

        function ph() {
            X.apply(this)
        }
        z(ph, X);
        ih(kh, {
            "0": {
                name: "YtAdType",
                Se: "video.YtAdType"
            },
            1: {
                name: "ad_namespace",
                required: j,
                I: 14,
                defaultValue: 0,
                type: {
                    $s: 0,
                    Nt: 1,
                    ct: 2,
                    Bt: 3,
                    Pt: 4,
                    Hu: 5,
                    yu: 6,
                    wt: 7,
                    Ot: 8,
                    xt: 9,
                    zt: 10,
                    xu: 11,
                    it: 12,
                    dv: 13
                }
            },
            2: {
                name: "ad_format",
                required: j,
                I: 14,
                defaultValue: 0,
                type: {
                    Xs: 0,
                    $t: 1,
                    Zt: 2,
                    mu: 3,
                    Su: 4,
                    au: 5
                }
            },
            3: {
                name: "ad_invideo",
                I: 14,
                defaultValue: 0,
                type: {
                    Zs: 0,
                    Et: 1,
                    Ft: 2,
                    Gt: 3,
                    Ht: 4,
                    Dt: 5,
                    At: 6
                }
            },
            4: {
                name: "invideo_autoplay",
                I: 14,
                defaultValue: 0,
                type: {
                    lt: 0,
                    wu: 1
                }
            },
            5: {
                name: "ad_instream",
                I: 14,
                defaultValue: 0,
                type: {
                    Ys: 0,
                    Qu: 1
                }
            },
            6: {
                name: "ad_instream_long",
                I: 8,
                type: Boolean
            }
        });
        ih(lh, {
            "0": {
                name: "AdId",
                Se: "video.AdId"
            },
            1: {
                name: "ad_network",
                I: 14,
                defaultValue: 1,
                type: {
                    qu: 1,
                    Jr: 2
                }
            },
            2: {
                name: "ad_network_name",
                I: 9,
                type: String
            },
            3: {
                name: "ad_id",
                required: j,
                I: 9,
                type: String
            }
        });
        ih(mh, {
            "0": {
                name: "YtAdEvent",
                Se: "video.YtAdEvent"
            },
            1: {
                name: "ad_event_type",
                required: j,
                I: 14,
                defaultValue: 0,
                type: {
                    Js: 0,
                    Qs: 1,
                    Ks: 2,
                    Ts: 3,
                    Ls: 4,
                    Ms: 5,
                    Gs: 6,
                    Fs: 7,
                    Es: 8,
                    Cs: 9,
                    Rs: 10,
                    Ss: 11,
                    Ds: 12,
                    Hs: 13,
                    Us: 14,
                    Is: 15,
                    Vs: 100,
                    Ws: 101,
                    Os: 130,
                    Ns: 131,
                    Ps: 132
                }
            },
            2: {
                name: "wall_time",
                required: j,
                I: 2,
                type: Number
            },
            3: {
                name: "media_time",
                required: j,
                I: 2,
                type: Number
            },
            4: {
                name: "logentry_time_usec",
                required: j,
                I: 3,
                type: String
            },
            5: {
                name: "ad_error_type",
                I: 14,
                defaultValue: 0,
                type: jh
            }
        });
        ih(nh, {
            "0": {
                name: "YtAdSlot",
                Se: "video.YtAdSlot"
            },
            1: {
                name: "slot_time",
                required: j,
                I: 2,
                type: Number
            },
            2: {
                name: "ad_type",
                required: j,
                I: 11,
                type: kh
            },
            3: {
                name: "ad_events",
                wd: j,
                I: 11,
                type: mh
            },
            4: {
                name: "ad_video_duration",
                I: 2,
                type: Number
            },
            5: {
                name: "ad_id",
                I: 9,
                type: String
            },
            6: {
                name: "slot_index",
                I: 5,
                type: Number
            }
        });
        ih(oh, {
            "0": {
                name: "YtVideoMetadata",
                Se: "video.YtVideoMetadata"
            },
            1: {
                name: "content_owner_ids",
                wd: j,
                I: 9,
                type: String
            },
            2: {
                name: "video_duration_seconds",
                I: 2,
                type: Number
            },
            3: {
                name: "all_content_owner_ids",
                I: 9,
                type: String
            }
        });
        ih(ph, {
            "0": {
                name: "YtWatchAdInfo",
                Se: "video.YtWatchAdInfo"
            },
            1: {
                name: "video_id",
                required: j,
                I: 9,
                type: String
            },
            2: {
                name: "allowed_ads",
                wd: j,
                I: 11,
                type: kh
            },
            3: {
                name: "ad_slots",
                wd: j,
                I: 11,
                type: nh
            },
            4: {
                name: "ps",
                I: 9,
                type: String
            },
            5: {
                name: "el",
                I: 9,
                type: String
            },
            6: {
                name: "country",
                I: 9,
                type: String
            },
            7: {
                name: "feature",
                I: 9,
                type: String
            },
            8: {
                name: "blocked",
                I: 8,
                type: Boolean
            },
            9: {
                name: "plid",
                I: 9,
                type: String
            },
            10: {
                name: "video_metadata",
                I: 11,
                type: oh
            },
            11: {
                name: "experiment_id",
                wd: j,
                I: 3,
                type: String
            },
            12: {
                name: "ad_flags",
                I: 4,
                type: String
            },
            13: {
                name: "all_experiment_ids",
                I: 9,
                type: String
            },
            14: {
                name: "no_ads_returned",
                I: 8,
                type: Boolean
            },
            15: {
                name: "ad_errors",
                wd: j,
                I: 14,
                defaultValue: 0,
                type: jh
            },
            16: {
                name: "ad_slot_with_event",
                I: 11,
                type: nh
            }
        });

        function qh() {};

        function rh() {}
        z(rh, qh);
        rh.prototype.$b = function() {
            var a = 0;
            Va(this.hc(j), function() {
                a++
            });
            return a
        };
        rh.prototype.clear = function() {
            var a = Wa(this.hc(j)),
                b = this;
            B(a, function(a) {
                b.tc(a)
            })
        };

        function sh(a) {
            this.a = a
        }
        z(sh, rh);

        function th(a) {
            try {
                return !!a.a && !!a.a.getItem
            } catch (b) {}
            return l
        }
        n = sh.prototype;
        n.pi = function(a, b) {
            try {
                this.a.setItem(a, b)
            } catch (c) {
                e("Storage mechanism: Quota exceeded")
            }
        };
        n.get = function(a) {
            a = this.a.getItem(a);
            if (t(a) || fa(a)) return a;
            e("Storage mechanism: Invalid value was encountered")
        };
        n.tc = function(a) {
            this.a.removeItem(a)
        };
        n.$b = function() {
            return this.a.length
        };
        n.hc = function(a) {
            var b = 0,
                c = new Sa,
                d = this;
            c.next = function() {
                b >= d.$b() && e(Ra);
                var c;
                c = d.a.key(b++);
                if (a) return c;
                c = d.a.getItem(c);
                if (t(c)) return c;
                e("Storage mechanism: Invalid value was encountered")
            };
            return c
        };
        n.clear = function() {
            this.a.clear()
        };

        function uh() {
            var a = k;
            try {
                a = window.localStorage || k
            } catch (b) {}
            this.a = a
        }
        z(uh, sh);

        function vh(a, b) {
            this.Od = a;
            this.Mc = b + "::"
        }
        z(vh, rh);
        n = vh.prototype;
        n.Od = k;
        n.Mc = "";
        n.pi = function(a, b) {
            this.Od.pi(this.Mc + a, b)
        };
        n.get = function(a) {
            return this.Od.get(this.Mc + a)
        };
        n.tc = function(a) {
            this.Od.tc(this.Mc + a)
        };
        n.hc = function(a) {
            var b = this.Od.hc(j),
                c = new Sa,
                d = this;
            c.next = function() {
                for (var c = b.next(); c.substr(0, d.Mc.length) != d.Mc;) c = b.next();
                return a ? c.substr(d.Mc.length) : d.Od.get(c)
            };
            return c
        };

        function wh(a) {
            this.a = a;
            this.b = new Pe
        }
        wh.prototype.a = k;
        wh.prototype.b = k;

        function xh(a, b, c) {
            ea(c) ? a.a.pi(b, Qe(a.b, c)) : a.a.tc(b)
        }
        wh.prototype.get = function(a) {
            a = this.a.get(a);
            if (!fa(a)) try {
                return Ne(a)
            } catch (b) {
                e("Storage: Invalid value was encountered")
            }
        };

        function yh(a) {
            this.pubsub = new H;
            this.a = a;
            if (this.Ai) {
                var a = "yt-html5-player-modules::" + this.Ai,
                    b = new uh;
                if (a = th(b) ? a ? new vh(b, a) : b : k) this.o = new wh(a)
            }
        }
        n = yh.prototype;
        n.pubsub = k;
        n.W = "";
        n.Jc = "";
        n.ja = l;
        n.ad = function(a) {
            var b = Ka(arguments),
                c = u(this.lb, this),
                d = u(this.pb, this);
            b.forEach(function(a) {
                a.Qi = this.W;
                a.pubsub.n("onEnter", c);
                a.pubsub.n("onExit", d)
            }, this);
            this.pubsub.j("command_add_cuerange", b)
        };
        n.hk = function(a) {
            this.pubsub.j("command_remove_cuerange", Ka(arguments))
        };

        function zh(a) {
            a.pubsub.j("command_remove_cuerange_all", a.W)
        }

        function Ah(a) {
            a.pubsub.j("command_preroll_ready", a.W)
        }
        n.appendToVideoContent = function(a) {
            I(a, this.W);
            this.a.appendToVideoContent(a)
        };
        n.appendAboveVideoControls = function(a) {
            I(a, this.W);
            this.a.appendAboveVideoControls(a)
        };

        function Bh(a) {
            a.pubsub.j("command_show_dialog_area")
        }

        function Ch(a) {
            a.pubsub.j("command_hide_all_dialogs")
        }
        n.create = function() {
            I(this.a.getRootNode(), this.W + "-created")
        };
        n.destroy = function() {
            this.ba();
            J(this.a.getRootNode(), this.W + "-created")
        };
        n.load = function() {
            I(this.a.getRootNode(), this.W + "-loaded");
            this.pubsub.j("loaded")
        };
        n.ba = function() {
            J(this.a.getRootNode(), this.W + "-loaded")
        };
        n.lb = function() {};
        n.pb = function() {};
        n.jg = function() {};
        n.log = function(a) {
            this.pubsub.j("command_log", this.Jc, a)
        };

        function Dh(a, b, c) {
            var d = {},
                f;
            for (f in b) d[a.W + "_" + f] = b[f];
            var b = {},
                g;
            for (g in c) b[a.W + "_" + g] = c[g];
            a.pubsub.j("command_log_timing", d, b)
        }

        function Eh(a, b) {
            if (!a.o) return k;
            var c;
            try {
                c = a.o.get(b)
            } catch (d) {
                a.o && a.o.a.tc(b)
            }
            return c
        }

        function Fh(a, b, c) {
            if (a.o) try {
                xh(a.o, b, c)
            } catch (d) {}
        }
        n.playVideo = function() {
            this.pubsub.j("command_play")
        };

        function Gh(a, b) {
            a.pubsub.j("command_redirected_show_is_playing", b)
        }
        n.Zm = function() {};
        n.Nm = function() {
            return []
        };
        n.bb = function() {
            return l
        };

        function Hh() {}
        var Ih = new Hh;

        function Jh() {
            var a = document.createElement("video");
            v(a, Ih);
            Q(a, "loadeddata", u(a.tr, a));
            return a
        }
        n = Hh.prototype;
        n.ug = 0;

        function Kh(a, b) {
            var c = b || "";
            a.src && "" == c || (c && (a.src = c), a.load())
        }
        n.seekTo = function(a) {
            0 != this.readyState && (this.currentTime = a)
        };
        n.getType = function() {
            return this.type
        };
        n.getDuration = function(a) {
            a && (this.ug = this.duration || 0);
            return this.ug
        };
        n.getCurrentTime = function() {
            return this.currentTime
        };
        n.getLoadProgressFraction = function() {
            var a = this.getDuration();
            return Infinity == a ? 1 : a && this.buffered && 0 < this.buffered.length ? this.buffered.end(this.getBufferedTimeRangeIndex()) / a : 0
        };
        n.playVideo = function() {
            this.ended && (this.currentTime = 0);
            this.hasAttribute("src") || (this.setAttribute("src", this.a || ""), this.a = k, this.load());
            this.play()
        };

        function Lh(a) {
            a.currentSrc && (a.a = a.currentSrc, rd(a), a.removeAttribute("src"), a.load())
        }
        n.getVolume = function() {
            return 100 * this.volume
        };
        n.isMuted = function() {
            return this.muted
        };
        n.getBufferedTimeRangeIndex = function() {
            for (var a = this.buffered, b = this.getCurrentTime(), c = 0; c < a.length && !(a.start(c) > b); c++)
                if (b <= a.end(c)) return c;
            return 0
        };
        n.tr = function() {
            this.hasAttribute("controls") && this.setAttribute("controls", "true")
        };
        var Mh = {
                Ku: "html5-stop-propagation",
                kt: "html5-autohide",
                Ct: "html5-chromeless",
                St: "hide-controls",
                du: "html5-live-dvr-disabled",
                eu: "html5-live-dvr-engaged",
                fu: "html5-live-playback",
                lu: "modest-branding",
                nu: "html5-native-controls",
                Fu: "seeking-mode",
                Mu: "html5-tablet",
                Lu: "html5-tablet-body",
                Tu: "html5-video-container",
                Uu: "html5-video-content",
                Vu: "html5-video-controls",
                Wu: "html5-video-fallback",
                Xu: "html5-video-fallback-content",
                Yu: "html5-storyboard",
                Zu: "html5-video-loader",
                bv: "html5-watermark",
                vt: "html5-branded-watermark",
                av: "html5-viewport-sheet",
                It: "html5-context-menu",
                An: "html5-context-menu-copy-video-url",
                Cn: "html5-context-menu-pop-out",
                Bn: "html5-context-menu-copy-video-url-at-current-time",
                zn: "html5-context-menu-copy-embed-html",
                Fn: "html5-context-menu-stop-download",
                Dn: "html5-context-menu-report-playback-issue",
                yn: "html5-context-menu-copy-debug-info",
                En: "html5-context-menu-show-video-info",
                Jt: "html5-show-video-info-template",
                ku: "html5-modal-panel",
                Yt: "html5-info-bar",
                Tt: "html5-hide-share",
                Ut: "html5-hide-volume",
                $u: "video-thumbnail",
                nt: "html5-bezel",
                ut: "html5-bezel-play",
                tt: "html5-bezel-pause",
                qt: "html5-bezel-fade",
                vu: "html5-popup-dialog",
                ft: "html5-async-progress",
                gt: "html5-async-success",
                dt: "html5-async-error",
                Du: "html5-scalable-icon",
                su: "player-root",
                ru: "player-container",
                Gr: "player-actions-container",
                Er: "player-actions-close",
                Fr: "player-actions-close-button",
                Hr: "player-actions-share",
                Ir: "small-view"
            },
            Nh = {
                "-1": "",
                "0": "ended-mode",
                1: "playing-mode",
                2: "paused-mode",
                3: "buffering-mode",
                5: "cued-mode"
            };
        var Oh = {
                Au: "red",
                cv: "white"
            },
            Ph = {
                rr: "0",
                Ju: "1",
                Kt: "2"
            },
            Qh = {
                detailpage: {
                    Xe: j
                }
            };
        Qh.embedded = {
            We: we("fullScreenEnabled", document),
            si: j
        };
        var Rh = {
            blazer: {
                Xg: "youtube_mobile",
                sb: l,
                Cj: l,
                fe: l,
                Fb: j,
                Sa: l,
                xa: j
            },
            "native": {
                fe: l,
                Sa: j
            },
            olympics: {
                fe: l,
                xa: j
            },
            touch: {
                fe: l,
                xa: j
            }
        };

        function Sh(a) {
            this.b = [];
            this.eventLabel = a.el || this.eventLabel;
            var b = Qh[this.eventLabel];
            b && v(this, b);
            this.Ra = a.ps || this.Ra;
            (b = Rh[this.Ra]) && v(this, b);
            !wb && (!$f && !Zf) && (this.Tj = j);
            var b = document.createElement("video"),
                c = b.muted;
            b.muted = !c;
            b.muted != c && (this.Ij = j);
            Th(this, a)
        }
        n = Sh.prototype;
        n.rj = j;
        n.We = j;
        n.jc = l;
        n.sb = l;
        n.ff = l;
        n.cb = "/";
        n.Cj = j;
        n.Xd = "red";
        n.Eh = "1";
        n.fe = j;
        n.Tj = l;
        n.Ij = l;
        n.eventLabel = "detailpage";
        n.Ah = l;
        n.Fb = l;
        n.cd = l;
        n.hh = l;
        n.loop = l;
        n.Qc = l;
        n.lh = l;
        n.Bh = "";
        n.Yd = l;
        n.Ra = k;
        n.qh = l;
        n.Sd = l;
        n.ic = j;
        n.gd = j;
        n.Ch = j;
        n.Xe = l;
        n.si = l;
        n.Rg = l;
        n.qf = l;
        n.Sa = l;
        n.xa = l;
        n.ei = k;
        n.oc = k;

        function Th(a, b) {
            a.rj = "0" != b.add_player_event_listeners;
            var c = U(a.We, b.fs);
            a.We = "detailpage" == a.eventLabel ? c : c && Fe();
            a.jc = U(a.jc, "3" == b.autohide);
            a.sb = U(a.sb, b.autoplay);
            a.ff = U(a.ff, b.bwa);
            a.Xd = rg(a.Xd, b.color, Oh);
            a.M = V(a.M, b.content_v);
            a.Eh = rg(a.Eh, b.controls, Ph);
            a.a = V(a.a, b.eurl);
            a.k = V(a.k, b.framer);
            a.Ah = U(a.Ah, b.fshd);
            a.e = V(a.e, b.hl);
            a.Fb = U(a.Fb, b.is_html5_mobile_device);
            a.cd = U(a.cd, b.player_wide);
            a.hh = U(a.hh, b.is_playground);
            a.loop = U(a.loop, b.loop);
            a.Qc = U(a.Qc, b.modestbranding);
            "red" != a.Xd && (a.Qc =
                l);
            a.Yd = U(a.Yd, b.on3g);
            a.o = rg(a.o, b.vq, kg);
            a.Bh = V(a.Bh, b.playerapiid);
            a.qh = U(a.qh, b.playsinline);
            a.referrer = V(a.referrer, b.referrer);
            a.g = V(a.g, b.feature);
            a.U = V(a.U, b.cr);
            a.ya = V(a.ya, b.q);
            a.Sd = U(a.Sd, b.logwatch);
            a.gd = U(a.gd, b.showinfo);
            a.Ch = U(a.Ch, b.rel);
            a.Xe = U(a.Xe, b.enablesizebutton);
            a.Rg = U(a.Rg, b.ss);
            a.u = V(a.u, b.theme);
            a.Sa = U(a.Sa, b.use_native_controls);
            a.qf = U(a.qf, b.ssl);
            a.xa = U(a.xa, b.use_tablet_controls);
            a.eb = V(a.eb, b.attrib);
            a.B = V(a.B, b.sk);
            a.ra = a.qf ? "https" : "http";
            a.ic = "0" != a.Eh;
            if (c = b.BASE_YT_URL) ug(c,
                sg) && (a.cb = c);
            Uh(a, b.fexp);
            Vh(a, b);
            if ("detailpage" != a.eventLabel && (b.list || b.api)) a.lh = j;
            "detailpage" == a.eventLabel && delete a.a;
            a.C = b
        }

        function Wh(a, b) {
            a.ea = b.get("d", a.ea);
            a.oa = b.get("c", a.oa);
            a.qa = b.get("f", a.qa)
        }

        function Vh(a, b) {
            a.Sd = U(a.Sd, b.logwatch);
            a.Qa = b.user_age == h ? a.Qa : Number(b.user_age);
            a.gb = V(a.gb, b.user_gender)
        }

        function Uh(a, b) {
            b && (a.b = b.split(","), a.b.forEach(function() {}))
        }

        function Xh(a, b) {
            var c = {
                html5: "1",
                video_id: b.A,
                eurl: a.a,
                ps: a.Ra,
                el: a.eventLabel,
                hl: a.e,
                list: b.a,
                access_token: b.Wd
            };
            b.ra && (c.ypc_preview = "1");
            return R(a.cb + "get_video_info.php", c)
        }

        function Yh(a) {
            var b = {
                contact_type: "playbackissue",
                html5: 1,
                plid: a.pa,
                v: a.A
            };
            a.format && (b.fmt = a.format.a);
            return R("//web.archive.org/web/20120609184927/http://www.google.com/support/youtube/bin/request.py", b)
        }

        function Zh(a) {
            a = a.tb;
            return !a ? new G(Number.NaN, Number.NaN) : new G(a.clientWidth, a.clientHeight)
        }

        function $h(a) {
            return !a.m ? new G(Number.NaN, Number.NaN) : new G(a.m.clientWidth, a.m.clientHeight)
        }

        function ai() {
            return ug(document.location.toString(), sg) && 0 != document.location.pathname.indexOf("/embed/")
        };

        function bi(a, b) {
            this.a = a;
            this.b = b
        };

        function ci(a) {
            var b = parseInt(a, 10),
                a = parseInt(b / 3600, 10),
                c = parseInt(b % 3600 / 60, 10),
                b = parseInt(b % 60, 10),
                d = "";
            0 < a && (d += a.toString() + ":", 10 > c && (d += "0"));
            d += c.toString() + ":";
            10 > b && (d += "0");
            return d += b.toString()
        };

        function di(a, b, c) {
            this.g = a;
            this.e = b;
            this.b = c;
            this.a = u(this.Ro, this)
        }
        z(di, Ub);
        n = di.prototype;
        n.Qf = l;
        n.dl = 0;
        n.ld = k;
        n.D = function() {
            di.s.D.call(this);
            this.ld && (uc.clearTimeout(this.ld), this.ld = k, this.Qf = l)
        };
        n.Ro = function() {
            this.ld = k;
            this.Qf && !this.dl && (this.Qf = l, ei(this))
        };

        function ei(a) {
            a.ld = xc(a.a, a.e);
            a.g.call(a.b)
        };

        function fi(a, b, c, d) {
            var f = Math.min(c / (b.Mm / b.ma), d / (b.Lm / b.rows)),
                g = b.Mm * f,
                f = b.Lm * f,
                g = Math.floor(g / b.ma) * b.ma,
                f = Math.floor(f / b.rows) * b.rows,
                i = g / b.ma,
                m = f / b.rows,
                o = Math.floor((c - i) / 2),
                c = Math.ceil((c - i) / 2),
                d = Math.floor((d - m) / 2),
                b = {
                    width: i + "px",
                    height: m + "px",
                    "margin-top": d + "px",
                    "margin-bottom": d + "px",
                    "margin-left": o + "px",
                    "margin-right": c + "px",
                    "background-image": "url(" + b.url + ")",
                    "background-position": -1 * b.gr * i + "px " + -1 * b.row * m + "px",
                    "background-size": g + "px " + f + "px"
                };
            t(b) ? xd(a, h, b) : Xa(b, oa(xd, a))
        };

        function gi() {
            this.C = new di(this.dr, 250, this)
        }
        n = gi.prototype;
        n.Vo = 12;
        n.Uo = 20;
        n.Wo = 10;
        n.Xo = 72;
        n.jf = l;
        n.qc = 0;
        n.Ph = 0;
        n.Ih = 0;
        n.Lk = 10;
        n.za = 0;
        n.kf = 0;
        n.Kk = 0.555;
        n.Gh = 0;
        n.Fk = 0;
        n.Uj = function(a, b) {
            this.a.style.display = "none";
            for (var c, d, f = a; f <= b; f++)
                if (d = this.a.children[f]) c = Ag(this.e, f, this.za), fi(d, c, this.za, this.kf);
            this.a.style.display = ""
        };

        function hi(a, b) {
            if (b != a.Gh) {
                var c = Ag(a.e, b, 2 * a.za),
                    d = Math.round(2 * a.za),
                    f = Math.round(2 * a.kf);
                fi(a.u, c, d, f);
                a.Gh = b
            }
        }
        n.dr = function() {
            for (var a = this.Ph, b = Math.max(Math.floor(a / this.za), 0), a = Math.min(Math.ceil((a + this.qc) / this.za), this.g.getLevel(0).Qb - 1); b <= a; b++) {
                for (var c = this.e, d = b, f = Tf(c.a, 2 * this.za), g = h, i = h; 0 <= f; f--)
                    if (g = c.a.getLevel(f), i = Math.floor(d / (g.ma * g.rows)), !g.Wa[i]) {
                        var g = c,
                            m = f,
                            o = m + "-" + i;
                        g.o[o] || (g.o[o] = j, xg(g.g, m, {
                            ik: m,
                            jk: i
                        }))
                    } Bg(c)
            }
        };

        function ii(a, b) {
            a.Lk = Math.min(a.Wo, Math.ceil(a.qc / a.Xo));
            a.za = Math.floor(a.qc / a.Lk);
            a.kf = a.za * a.Kk;
            a.Ih = a.za * a.g.getLevel(0).Qb;
            Jd(a.a, a.Ih);
            var c = Math.round(2 * a.za),
                d = c * a.Kk + a.Vo;
            Id(a.o, c, d);
            Ad(a.o, (a.qc - c) / 2);
            a.b.style.height = Bd(d + a.Uo, j);
            b && (a.Uj(0, a.g.getLevel(0).Qb - 1), hi(a, a.Gh))
        };

        function ji(a, b, c, d) {
            this.o = a;
            this.width = b;
            this.e = c;
            this.k = d;
            this.b = b - c - d;
            this.g = Math.min(a - c, this.b);
            this.a = Ob(this.g / this.b, 0, 1)
        };

        function ki() {}
        n = ki.prototype;
        n.Ye = l;
        n.$j = 0;
        n.Ha = function() {
            O(this.a)
        };
        n.reset = function() {
            J(this.a, "with-thumbnail");
            this.e = this.g = k
        };
        n.Xn = function(a, b) {
            (a <= this.b || this.b <= b) && li(this)
        };

        function li(a) {
            var b = Ag(a.e, a.b, 108);
            fi(a.C, b, 108, 60)
        };

        function mi() {
            this.b = new H
        }
        z(mi, W);

        function ni(a, b, c, d, f, g) {
            var a = a.Z(),
                i = (c & 4 && "rtl" == zd(b, "direction") ? c ^ 2 : c) & -5,
                m = Kd(b),
                c = m.Z();
            if (d || 0 != i)(i & 2 ? a.x -= c.width + (d ? d.right : 0) : d && (a.x += d.left), i & 1) ? a.y -= c.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (g) {
                if (f) {
                    d = a;
                    i = 0;
                    if (65 == (g & 65) && (d.x < f.left || d.x >= f.right)) g &= -2;
                    if (132 == (g & 132) && (d.y < f.top || d.y >= f.bottom)) g &= -5;
                    d.x < f.left && g & 1 && (d.x = f.left, i |= 1);
                    d.x < f.left && (d.x + c.width > f.right && g & 16) && (c.width = Math.max(c.width - (d.x + c.width - f.right), 0), i |= 4);
                    d.x + c.width > f.right && g & 1 && (d.x = Math.max(f.right -
                        c.width, f.left), i |= 1);
                    g & 2 && (i |= (d.x < f.left ? 16 : 0) | (d.x + c.width > f.right ? 32 : 0));
                    d.y < f.top && g & 4 && (d.y = f.top, i |= 2);
                    d.y >= f.top && (d.y + c.height > f.bottom && g & 32) && (c.height = Math.max(c.height - (d.y + c.height - f.bottom), 0), i |= 8);
                    d.y + c.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - c.height, f.top), i |= 2);
                    g & 8 && (i |= (d.y < f.top ? 64 : 0) | (d.y + c.height > f.bottom ? 128 : 0));
                    f = i
                } else f = 256;
                if (f & 496) return
            }
            Ad(b, a);
            Rb(m, c) || (f = wd(dd(fd(b))), D && (!f || !E("8")) ? (a = b.style, f ? (f = Pd(b), b = Qd(b), a.pixelWidth = c.width - b.left - f.left - f.right - b.right,
                a.pixelHeight = c.height - b.top - f.top - f.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)) : (b = b.style, xb ? b.MozBoxSizing = "border-box" : yb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px"))
        };
        var oi = {},
            pi = "ontouchstart" in document;

        function qi(a, b) {
            var c = oi[a].maxNumParents[b],
                d;
            0 < c ? d = c : -1 != a.indexOf("mouse") && (d = 2);
            return d
        }

        function ri(a, b, c) {
            return vd(b, function(b) {
                return ad(b, a)
            }, j, c) || k
        }

        function si(a) {
            if ("HTML" != a.target.tagName && a.type in oi) {
                var b = oi[a.type],
                    c;
                for (c in b.Na) {
                    var d = qi(a.type, c),
                        f = ri(c, a.target, d);
                    if (f) {
                        var g = j;
                        b.checkRelatedTarget[c] && (a.relatedTarget && vd(a.relatedTarget, function(a) {
                            return a == f
                        }, j, d)) && (g = l);
                        g && b.j(c, f, a.type, a)
                    }
                }
            }
        }
        Q(document, "blur", si, j);
        Q(document, "change", si, j);
        Q(document, "click", si);
        Q(document, "focus", si, j);
        Q(document, "mouseover", si);
        Q(document, "mouseout", si);
        Q(document, "mousedown", si);
        Q(document, "keydown", si);
        Q(document, "keyup", si);
        Q(document, "keypress", si);
        Q(document, "cut", si);
        Q(document, "paste", si);
        pi && (Q(document, "touchstart", si), Q(document, "touchend", si), Q(document, "touchcancel", si));
        pa("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});

        function ti() {}
        ti.prototype.e = function(a, b, c) {
            var d = this.getData(a, b);
            if (d && (d = q(d))) {
                var f = Na(arguments, 2);
                Ma(f, 0, 0, a);
                d.apply(k, f)
            }
        };
        ti.prototype.getData = function(a, b) {
            return ne(a, b)
        };
        ti.prototype.setData = function(a, b, c) {
            le(a, b, c)
        };

        function Y(a, b) {
            return "yt-uix" + (a.b ? "-" + a.b : "") + (b ? "-" + b : "")
        };

        function ui() {}
        z(ui, ti);
        ca(ui);
        ui.prototype.b = "tooltip";

        function vi(a, b, c) {
            a.setData(b, "tooltip-text", c);
            a = a.getData(b, "content-id");
            if (a = K(a)) a.innerHTML = c
        }
        ui.prototype.Ub = function(a) {
            return this.getData(a, "tooltip-text") || a.title
        };

        function wi(a, b) {
            if (b) {
                var c = a.Ub(b);
                if (c) {
                    var d = K(xi(a, b));
                    if (!d) {
                        d = document.createElement("div");
                        d.id = xi(a, b);
                        d.className = Y(a, "tip");
                        var f = document.createElement("div");
                        f.className = Y(a, "tip-body");
                        var g = document.createElement("div");
                        g.className = Y(a, "tip-arrow");
                        var i = document.createElement("div");
                        i.className = Y(a, "tip-content");
                        var m = yi(a, b),
                            o = xi(a, b, "content");
                        i.id = o;
                        a.setData(b, "content-id", o);
                        f.appendChild(i);
                        m && d.appendChild(m);
                        d.appendChild(f);
                        d.appendChild(g);
                        (we("fullScreenElement", document) ||
                            document.body).appendChild(d);
                        vi(a, b, c);
                        if ((c = parseInt(a.getData(b, "tooltip-max-width"), 10)) && f.offsetWidth > c) f.style.width = c + "px", I(i, Y(a, "normal-wrap"));
                        i = ad(b, Y(a, "reverse"));
                        zi(a, b, d, f, m, i) || zi(a, b, d, f, m, !i);
                        var s = Y(a, "tip-visible");
                        P(function() {
                            I(d, s)
                        }, 0)
                    }
                }
            }
        }

        function zi(a, b, c, d, f, g) {
            bd(c, Y(a, "tip-reverse"), g);
            var i = 0;
            g && (i = 1);
            var m = Kd(b),
                g = new F((m.width - 10) / 2, g ? m.height : 0),
                o = Fd(b);
            ni(new F(o.x + g.x, o.y + g.y), c, i);
            var i = kd(window),
                o = Hd(c),
                c = Kd(d),
                s = c.width / 2;
            f && (f.style.left = "3px", f.style.height = c.height + "px", f.style.width = c.width + "px");
            f = !!(i.height < o.y + m.height);
            m = !!(o.y < m.height);
            g = !!(o.x < s);
            i = !!(i.width < o.x + s);
            o = (c.width + 3) / -2 - -5;
            a = a.getData(b, "force-tooltip-direction");
            if ("left" == a || g) o = -5;
            else if ("right" == a || i) o = 20 - c.width - 3;
            d.style.left = o + "px";
            return !(f || m)
        }

        function xi(a, b, c) {
            var a = Y(a),
                d = b.__yt_uid_key;
            d || (d = qe(), b.__yt_uid_key = d);
            b = a + d;
            c && (b += "-" + c);
            return b
        }

        function yi(a, b) {
            var c = k;
            rb && ad(b, Y(a, "masked")) && ((c = K("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), N(c)) : (c = document.createElement("iframe"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", c.className = Y(a, "tip-mask")));
            return c
        }

        function Ai(a) {
            var b = K("yt-uix-tooltip-shared-mask"),
                c = b && vd(b, function(b) {
                    return b == a
                }, l, 2);
            b && c && (b.parentNode.removeChild(b), O(b), document.body.appendChild(b))
        };

        function Bi(a, b) {
            J(a, "html5-async-progress", "html5-async-success", "html5-async-error");
            b && I(a, b);
            var c = ui.getInstance();
            if (a && (c = K(xi(c, a)))) Ai(c), M(c), oe(a, "content-id")
        }

        function Ci(a, b) {
            Bi(a, "html5-async-error");
            if (b) {
                var c = ui.getInstance(),
                    d = c.Ub(a);
                vi(c, a, b);
                wi(c, a);
                c.setData(a, "tooltip-text", d)
            }
        };

        function Di(a, b, c, d) {
            if (this.b = !!c) this.Ki = Math.max(800, this.Ki);
            this.C = a;
            this.M = b;
            this.k = d;
            Ei ? a.ontouchstart = u(this.Sp, this) : a.onmousedown = u(this.Rp, this);
            a.onclick = u(this.Pk, this)
        }
        var Ei = "ontouchstart" in document,
            Fi = [],
            Gi = l;

        function Hi() {
            Ei && !Gi && (Gi = j, document.addEventListener("click", function(a) {
                for (var b = new F(a.clientX, a.clientY), c = 0, d; d = Fi[c]; c++)
                    if (25 > Pb(d, b)) {
                        a.stopPropagation();
                        a.preventDefault();
                        Fi.splice(c, 1);
                        break
                    }
            }, j))
        }

        function Ii(a) {
            Fi.push(a);
            window.setTimeout(function() {
                var b = Fi.indexOf(a); - 1 != b && Fi.splice(b, 1)
            }, 2500)
        }
        n = Di.prototype;
        n.Ip = 12;
        n.Xk = 100;
        n.Ki = 500;
        n.Sp = function(a) {
            if (!(1 < a.touches.length) && !a._stop) {
                this.Hf = a._stop = j;
                this.b || (this.C.ontouchend = u(this.Pk, this), document.body.addEventListener("touchend", Ji(this), l));
                document.body.addEventListener("touchmove", Ki(this), l);
                document.body.addEventListener("touchcancel", Ji(this), l);
                Li(this);
                this.Xk ? this.u = window.setTimeout(u(this.xe, this, j), this.Xk) : this.xe(j);
                var b = a.touches[0];
                this.a = new F(b.clientX, b.clientY);
                !this.b && (!this.k || this.k(a)) && Ii(this.a)
            }
        };
        n.Rp = function(a) {
            a.stopPropagation();
            this.Hf = j;
            Li(this);
            this.xe(j)
        };
        n.Pk = function(a) {
            if (("touchend" != a.type || this.Hf) && !a._stop) a._stop = j, this.xe(j), window.setTimeout(u(function() {
                this.kg();
                this.M(a)
            }, this), 0)
        };
        n.uq = function(a) {
            1 < a.touches.length ? this.kg() : (a = a.touches[0], a = new F(a.clientX, a.clientY), this.a && Pb(this.a, a) > this.Ip && this.kg())
        };

        function Ki(a) {
            a.e || (a.e = u(a.uq, a));
            return a.e
        }
        n.kg = function() {
            window.clearTimeout(this.u);
            window.clearTimeout(this.B);
            this.xe(l);
            this.Hf = l;
            document.body.removeEventListener("touchmove", Ki(this), l);
            document.body.removeEventListener("touchend", Ji(this), l);
            document.body.removeEventListener("touchcancel", Ji(this), l)
        };

        function Ji(a) {
            a.g || (a.g = u(a.kg, a));
            return a.g
        }
        n.xe = function(a) {
            this.o && bd(this.C, this.o, a)
        };

        function Li(a) {
            a.$q && (a.B = window.setTimeout(u(function() {
                this.Hf = l;
                this.$q()
            }, a), a.Ki))
        };

        function Mi() {}
        z(Mi, ti);
        ca(Mi);
        Mi.prototype.b = "button";
        Mi.prototype.a = k;

        function Ni(a, b) {
            if (!rb || !ad(b, Y(a, "masked"))) return k;
            var c = b.iframeMask;
            c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = Y(a, "menu-mask"), b.iframeMask = c);
            return c
        }

        function Oi(a, b) {
            if (b) {
                var c = Pi(a, b);
                if (c) {
                    a.a = k;
                    b.setAttribute("aria-pressed", "false");
                    b.setAttribute("aria-expanded", "false");
                    O(c);
                    a.e(b, "button-menu-action", l);
                    var d = Ni(a, b);
                    P(function() {
                        d && d.parentNode && d.parentNode.removeChild(d);
                        c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = k, c.activeButtonNode = k)
                    }, 1)
                }
                var f = ud(b, Y(a, "group"));
                J(b, Y(a, "active"));
                f && J(f, Y(a, "group-active"));
                if (f = a.getData(b, "button-listener")) Ee(f), oe(b, "button-listener");
                if (f = a.getData(b, "button-context-menu-listener")) Ee(f), oe(b, "button-context-menu-listener")
            }
        }

        function Pi(a, b) {
            if (!b.widgetMenu) {
                var c = a.getData(b, "button-menu-id"),
                    c = c && K(c),
                    d = Y(a, "menu");
                c ? (I(c, d), I(c, Y(a, "menu-external"))) : c = L(d, b);
                b.widgetMenu = c
            }
            return b.widgetMenu
        };

        function Qi() {
            this.cc = {};
            this.Ui = {};
            this.e = k
        }
        n = Qi.prototype;
        n.Ck = function() {};
        n.zl = function() {};
        n.Xl = function() {};
        n.Al = function() {};
        n.Ik = function() {};
        n.Ea = function(a) {
            return !(!this.cc[a] || !this.cc[a].length)
        };
        n.ke = function(a, b) {
            b = b || "defaultcontext";
            a.forEach(function(a) {
                this.cc[a] ? 0 > this.cc[a].indexOf(b) && this.cc[a].push(b) : this.cc[a] = [b]
            }, this)
        };
        n.le = function(a, b) {
            b = b || "defaultcontext";
            a.forEach(function(a) {
                if (this.Ea(a)) {
                    var d = this.cc[a].indexOf(b);
                    0 <= d && this.cc[a].splice(d, 1)
                }
            }, this)
        };
        n.Mh = function(a, b) {
            this.nf();
            this.e = a;
            b.forEach(function(a) {
                this.Ui[a] = j
            }, this)
        };
        n.nf = function() {
            this.e = k;
            this.Ui = {}
        };

        function Ri(a) {
            return !a.Ui.play_pause ? k : a.e
        }
        n.Pi = function() {};
        n.ph = function() {};
        n.Km = function() {};
        n.Ve = function() {};
        n.am = function() {};
        n.gh = function() {};
        n.de = function() {};
        n.ql = function() {};
        n.uf = function() {};
        n.Tk = function() {};
        n.Yi = function() {};
        n.Dk = function() {};
        n.Mi = function() {};
        n.Bk = function() {};
        n.Im = function() {};
        n.Hm = function() {};
        n.Ba = function() {
            return 0
        };
        n.Aa = function() {};
        n.td = function() {};
        n.vl = function() {
            return l
        };
        n.xk = function() {};
        n.wk = function() {};

        function Si(a) {
            Qi.call(this);
            this.b = a;
            this.a = {};
            this.Be = new Ge(this);
            this.Rf = new Ge(this);
            this.Of = new Ge(this)
        }
        z(Si, Qi);
        n = Si.prototype;
        n.V = k;
        n.Mb = k;
        n.rc = k;
        n.ee = k;
        n.Bj = k;
        n.Zg = k;
        n.zj = k;
        n.hj = 0;
        n.Aj = k;
        n.wb = k;
        n.ce = k;
        n.$c = k;
        n.Be = k;
        n.$d = k;
        n.Rf = k;
        n.dd = k;
        n.Lb = k;
        n.$g = k;
        n.jb = k;
        n.ah = k;
        n.Of = k;
        n.bf = k;
        n.af = k;
        n.bh = k;
        n.dh = k;
        n.$e = k;
        n.cf = k;
        n.be = k;
        n.gj = l;
        n.Jm = l;
        n.Fj = k;
        n.Kb = k;
        n.pubsub = k;
        n.lg = l;
        n.Ck = function(a) {
            this.V = a;
            this.pubsub = new H;
            this.Mb = L("html5-play-button", a);
            (new Di(this.Mb, u(this.sn, this))).o = "html5-active";
            this.rc = L("html5-progress-bar", a);
            this.ee = L("html5-progress-list", this.rc);
            Q(this.rc, "click", u(this.xj, this));
            Be(this.rc, "over", u(this.kn, this));
            this.Zg = L("html5-play-progress", this.ee);
            this.b.Xd && I(this.Zg, this.b.Xd);
            this.zj = L("html5-load-progress", this.ee);
            this.Bj = L("html5-ad-progress-list", this.rc);
            this.$d = L("html5-scrubber-button", a);
            Be(this.$d, "down", u(this.mn, this));
            this.Aj = L("html5-progress-screenreader", a);
            var b = L("html5-progress-tooltip", a),
                c = this.wb = new ki;
            c.a = b;
            c.k = L("html5-progress-tooltip-arrow", c.a);
            c.C = L("html5-progress-tooltip-thumbnail", c.a);
            c.o = L("html5-progress-tooltip-timestamp", c.a);
            this.b.fe || (this.wb.Ye = j);
            var b = L("html5-storyboard", a),
                c = this.$c = new gi,
                d = Zh(this.b);
            c.b = b;
            c.qc = d.width;
            c.a = L("html5-storyboard-filmstrip", c.b);
            c.o = L("html5-storyboard-lens", c.b);
            c.u = L("html5-storyboard-lens-thumbnail", c.b);
            c.B = L("html5-storyboard-lens-timestamp",
                c.b);
            c.k = L("html5-storyboard-thumbnail", c.a);
            M(c.k);
            b = L("progress-text", a);
            c = this.ce = new mi;
            c.a = L("current-time", b);
            c.e = L("duration-time", b);
            c.g = L("html5-live-indicator", b);
            Q(c.g, "click", u(c.j, c, "seek_to_head"));
            this.ce.n("seek_to_head", u(this.tn, this));
            this.dd = L("html5-volume-control", a);
            Q(this.dd, "keydown", u(this.un, this));
            this.Lb = L("html5-volume-button", this.dd);
            Q(this.Lb, "click", u(this.Ej, this));
            this.$g = L("html5-volume-panel", this.dd);
            this.jb = L("html5-volume-slider", this.dd);
            Be(this.jb, "down",
                u(this.pn, this));
            this.ah = L("html5-volume-slider-foreground", this.dd);
            this.dh = L("html5-threed-popup-menu", a);
            this.bh = L("html5-small-player-button", a);
            Q(this.bh, "click", u(this.Dj, this));
            this.af = L("html5-large-player-button", a);
            Q(this.af, "click", u(this.Dj, this));
            this.bf = L("html5-fullscreen-button", a);
            Q(this.bf, "click", u(this.on, this));
            this.$e = L("html5-quality-button", a);
            this.be = L("html5-quality-popup-menu", this.$e);
            Ce(this.be, u(this.ln, this), "yt-uix-button-menu-item");
            this.cf = L("html5-speed-popup-menu",
                this.$e);
            Ce(this.cf, u(this.nn, this), "yt-uix-button-menu-item");
            this.Kb = L("html5-watch-later-button", a);
            Q(this.Kb, "click", u(this.qn, this));
            Yd(this.Kb, this.b.Cj);
            this.Fj = L("html5-watch-on-youtube-button", a);
            Q(this.Fj, "click", u(this.rn, this))
        };
        n.zl = function(a) {
            this.Ve(a.fa || 0);
            Ti(this, 0);
            this.de(0);
            this.wb.reset();
            Bi(this.Kb);
            this.Yi("1.0")
        };
        n.Xl = function(a) {
            var b = this.wb;
            if (!b.Ye)
                if (Rg(a)) {
                    I(b.a, "with-thumbnail");
                    b.g = Rg(a);
                    b.e = Sg(a);
                    var c = b.e,
                        b = u(b.Xn, b);
                    c.k.n(c.e, b)
                } else b.reset();
            c = this.$c;
            c.k && rd(c.a);
            J(c.b, "enabled");
            c.g = k;
            c.e = k;
            if (Rg(a)) {
                c.jf = j;
                I(c.b, "enabled");
                c.g = Rg(a);
                c.e = Sg(a);
                a = c.e;
                b = u(c.Uj, c);
                a.k.n(a.e, b);
                ii(c);
                for (var a = c.a.cloneNode(j), b = c.g.getLevel(0).Qb, d, f, g = 0; g < b; g++) f = c.k.cloneNode(l), d = Ag(c.e, g, c.za), fi(f, d, c.za, c.kf), a.appendChild(f);
                sd(a, c.a);
                c.a = a
            } else c.jf = l
        };
        n.Al = function(a) {
            this.Km(a.la);
            this.Pi(a.kb);
            this.Jm = a.Xc && !a.Pa
        };
        n.Ik = function(a) {
            var b = this.$c;
            b.jf && (b.qc = a.width, ii(b, j))
        };
        n.ke = function(a, b) {
            Si.s.ke.call(this, a, b);
            Ui(this, a)
        };
        n.le = function(a, b) {
            Si.s.le.call(this, a, b);
            Ui(this, a)
        };

        function Ui(a, b) {
            b.forEach(function(a) {
                bd(this.V, "disabled-control-" + a, this.Ea(a))
            }, a)
        }
        n.Mh = function(a, b) {
            Si.s.Mh.call(this, a, b);
            b.forEach(function(a) {
                I(this.V, "redirected-control-" + a)
            }, this)
        };
        n.nf = function() {
            Si.s.nf.call(this);
            for (var a in Ff) J(this.V, "redirected-control-" + Ff[a])
        };
        n.Pi = function(a) {
            var b = gd("yt-uix-button-menu-item", this.be);
            B(b, function(b) {
                b.style.display = "none";
                for (var d = 0, f = a.length; d < f; d++) ne(b, "value") == a[d].nb && (b.style.display = "list-item")
            }, this);
            this.gj = !!a.length;
            Yd(this.be, this.gj);
            Yd(this.$e, this.gj)
        };
        n.un = function(a) {
            var b = a.keyCode;
            if (32 == b || 13 == b) this.Ej(), a.preventDefault()
        };
        n.ph = function(a, b) {
            le(this.Lb, "value", b || 0 == a ? "off" : 20 > a ? "min" : 40 > a ? "quiet" : 60 > a ? "normal" : 80 > a ? "loud" : "max");
            le(this.Lb, "volume", a);
            var c = this.jb.clientWidth - 6,
                d = this.jb.style.backgroundPosition.split(" "),
                d = 1 < d.length ? d[1] : "0px";
            if (b) this.jb.style.backgroundPosition = "-" + c + "px " + d, this.ah.style.left = "0px";
            else {
                var f;
                0 >= a ? f = 0 : 100 <= a ? f = c : (f = (c - 0) * a / 100, f = 0 >= f ? 0 : f >= c ? c : 0 + Math.round(f));
                this.ah.style.left = f + "px";
                this.jb.style.backgroundPosition = "-" + (c - f) + "px " + d
            }
            c = Math.round(a);
            d = c + "% " + je("HTML5_VOLUME_SETTING") +
                (b ? " " + je("HTML5_VOLUME_MUTED") : "");
            this.$g.setAttribute("aria-valuenow", c);
            this.$g.setAttribute("aria-valuetext", d);
            Vi(this.Lb, b ? "title-alt" : "title-default");
            this.Lb.setAttribute("aria-label", (b ? je("HTML5_VOLUME_UNMUTE") : je("HTML5_VOLUME_MUTE")) + " " + je("HTML5_CONTROL_TOGGLE"))
        };
        n.Km = function(a) {
            this.ce.e.innerHTML = ci(a);
            this.wb.$j = a;
            this.$c.Fk = a
        };
        n.Ve = function(a) {
            this.ce.a.innerHTML = ci(a)
        };
        n.am = function(a) {
            Wi(this.be, a)
        };

        function Wi(a, b) {
            var c = L("yt-uix-button-menu-item.active", a);
            c && J(c, "active");
            c = a.querySelector(".yt-uix-button-menu-item" + ('[data-value="' + b + '"]'));
            I(c, "active")
        }
        n.Ej = function() {
            this.pubsub.j("mutetoggled")
        };
        n.gh = function(a) {
            this.lg || Ti(this, a)
        };

        function Ti(a, b) {
            a.hj = b;
            var c = Math.round(1E3 * b) / 10;
            a.Zg.style.width = c + "%";
            a.$d.style.left = c + "%"
        }
        n.de = function(a) {
            a = Math.max(this.hj, a);
            this.zj.style.width = Math.round(1E3 * a) / 10 + "%"
        };
        n.ql = function(a, b) {
            this.Aj.innerHTML = parseInt(100 * this.hj, 10) + "% at " + parseInt(a, 10) + " of " + parseInt(b, 10) + " seconds"
        };
        n.uf = function(a) {
            var b = ["html5-play-button", "html5-pause-button", "html5-stop-button"];
            a ? this.Jm ? ($c(this.Mb, b, "html5-stop-button"), Vi(this.Mb, "title-stop")) : ($c(this.Mb, b, "html5-pause-button"), Vi(this.Mb, "title-pause")) : ($c(this.Mb, b, "html5-play-button"), Vi(this.Mb, "title-default"))
        };
        n.sn = function() {
            this.pubsub.j("playpausetoggled")
        };
        n.mn = function(a) {
            a.Wf();
            this.lg = j;
            this.pubsub.j("beginseeking");
            He(this.Rf, document, "move", this.xj);
            He(this.Rf, document, "up", this.Lq)
        };
        n.Lq = function() {
            this.lg = l;
            Ie(this.Rf);
            this.pubsub.j("endseeking")
        };
        n.xj = function(a) {
            a.Wf();
            var b = Xi(this, a.pageX).a;
            Ti(this, b);
            this.pubsub.j("seekto", b);
            var c = this.$c;
            c.jf && (c.Ph = c.Ih * b - c.qc / 2, Ad(c.a, -1 * c.Ph), hi(c, Sf(c.g, b)), td(c.B, ci(c.Fk * b)), b = c.C, !b.ld && !b.dl ? ei(b) : b.Qf = j);
            a.preventDefault()
        };

        function Xi(a, b) {
            var c = a.ee.clientWidth,
                d = Fd(a.ee),
                f = a.$d.clientWidth / 2;
            return new ji(b - d.x, c, f, f)
        }
        n.kn = function() {
            if (!this.lg && !this.Ea("seek")) {
                var a = this.wb;
                a.Ye || N(a.a);
                He(this.Be, this.rc, "move", u(this.Dp, this));
                He(this.Be, this.rc, "out", u(this.Il, this));
                He(this.Be, this.$d, "down", u(this.Il, this))
            }
        };
        n.Dp = function(a) {
            var b = this.wb,
                a = Xi(this, a.pageX);
            if (!b.Ye) {
                var c = a.width,
                    d = a.o,
                    f = b.a.offsetWidth,
                    g = f / 2,
                    i = Ob(d - g, 2, c - f - 2);
                Ad(b.a, i);
                var m = b.k.offsetWidth / 2,
                    o = g - m;
                d > c - g ? o = Math.min(d - i - m, f - a.k - 2 - m) : d < g && (o = Math.max(d - m, a.e - 2 - m));
                Ad(b.k, o);
                td(b.o, ci(b.$j * a.a));
                b.g && (a = Sf(b.g, a.a), a != b.b && (b.b = a, li(b)))
            }
        };
        n.Il = function() {
            Ie(this.Be);
            this.wb.Ha()
        };
        n.pn = function(a) {
            this.pubsub.j("beginvolume");
            I(this.Lb, "changing");
            var b = this.jb.clientWidth;
            Yi(this, 100 * (Gd(a, this.jb).x / b));
            He(this.Of, document, "move", this.Jq);
            He(this.Of, document, "up", this.Kq)
        };
        n.Jq = function(a) {
            var b = this.jb.clientWidth;
            Yi(this, 100 * (Gd(a, this.jb).x / b));
            a.preventDefault()
        };

        function Yi(a, b) {
            a.pubsub.j("volumechanged", {
                volume: Ob(b, 0, 100),
                muted: l
            })
        }
        n.Kq = function() {
            J(this.Lb, "changing");
            Ie(this.Of);
            this.pubsub.j("endvolume")
        };
        n.Dj = function(a) {
            this.pubsub.j("sizechangerequested", a.currentTarget == this.af)
        };
        n.ln = function(a) {
            this.pubsub.j("qualitychanged", ne(a.currentTarget, "value"))
        };
        n.on = function() {
            this.pubsub.j("fullscreentoggled")
        };
        n.Tk = function(a) {
            Vi(this.bf, a ? "title-alt" : "title-default")
        };
        n.Yi = function(a) {
            Wi(this.cf, a)
        };
        n.nn = function(a) {
            a = ne(a.currentTarget, "value");
            this.pubsub.j("speedchanged", a);
            this.Yi(a)
        };
        n.Dk = function() {
            N(this.cf)
        };
        n.Mi = function(a) {
            var b = L("html5-threed-conversion-on", this.dh),
                c = L("html5-threed-conversion-off", this.dh);
            Yd(b, !a);
            Yd(c, a)
        };
        n.Bk = function() {
            N(this.af);
            N(this.bh)
        };
        n.Im = function() {
            Bi(this.Kb, "html5-async-success")
        };
        n.Hm = function(a) {
            Ci(this.Kb, a)
        };
        n.qn = function() {
            ad(this.Kb, "html5-async-progress") || (Bi(this.Kb, "html5-async-progress"), this.pubsub.j("watchlater"))
        };
        n.rn = function() {
            this.pubsub.j("watchonyoutube")
        };
        n.Ba = function(a, b) {
            return this.pubsub.n(a, b)
        };

        function Vi(a, b) {
            var c = ne(a, b);
            c || (c = ne(a, "tooltip-title"), le(a, "title-default", c));
            a.setAttribute("title", c);
            a.setAttribute("aria-label", c);
            le(a, "tooltip-title", c);
            le(a, "tooltip-text", c)
        }
        n.Aa = function(a) {
            a = Ob(Math.round(100 * a), 0, 100);
            if (!this.a[a]) {
                var b = document.createElement("div");
                b.style.left = a + "%";
                I(b, "html5-ad-progress", "html5-progress-section");
                this.Bj.appendChild(b);
                this.a[a] = b
            }
        };
        n.td = function(a) {
            a = Ob(Math.round(100 * a), 0, 100);
            this.a[a] && (M(this.a[a]), delete this.a[a])
        };
        n.vl = function() {
            var a = Mi.getInstance();
            return !!a.a && te(a.a, this.V)
        };
        n.xk = function() {
            var a = Mi.getInstance();
            a.a && Oi(a, a.a)
        };
        n.wk = function() {
            O(this.bf)
        };
        n.tn = function() {
            this.pubsub.j("seekto", Infinity)
        };

        function Zi(a) {
            return a ? -1 != a.toString().search(/(?:true|1)/i) : l
        }

        function $i(a, b) {
            if (a) {
                var c = "getErrorCode" in a ? a.getErrorCode() : k;
                fa(c) ? (c = a.message, 50 < c.length && (c = c.substring(0, 47) + "..."), b.error_message = c) : b.error_code = c
            }
        };
        var aj = [4, 2];

        function bj(a) {
            var b = q("yt.www.watch.ads.handleMoveGutCompanion");
            b && b(1 == a ? j : l)
        }

        function cj(a) {
            var b = q("showAfvCompanionAdDiv");
            b && b(1 == a)
        };

        function dj(a) {
            return Ga(a.b, "908301")
        };

        function ej(a, b) {
            this.a = a;
            this.e = b
        }
        ej.prototype.k = k;
        ej.prototype.b = NaN;

        function fj(a, b, c) {
            a.a.j("AD_LOGGING_EVENT", b, c)
        }

        function gj(a) {
            var b = {},
                c = a.a.e,
                d = hj(a.a),
                f = a.a.m && a.a.m.currentSrc ? a.a.m.currentSrc : k;
            d && 0 < d && (b.ad_len = d);
            if (c && c.A) b.ad_v = c.A;
            else if (f) {
                c = $e(f);
                b.ad_dom = c;
                if (!(c = ij(a.e))) c = a.e.getEnvironmentData(), c = Ga(c.b, "921801");
                c && (b.ad_v_url = f)
            }
            b.at = a.a.getType();
            return b
        }

        function jj(a) {
            a.k || (a.k = "InstreamAdDisplay (" + a.a.getType() + ")")
        };

        function kj(a, b) {
            this.b = new H;
            this.a = a;
            this.R = b;
            this.a.n("control_toggle_play_pause", this.Vj, this);
            this.a.n("control_play", this.df, this);
            this.a.n("control_pause", this.th, this);
            this.g = new ej(this, this.a);
            this.X = new Ge(this)
        }
        z(kj, W);
        n = kj.prototype;
        n.Yh = l;
        n.bj = function() {
            this.g.b = x();
            var a = k,
                b = "";
            try {
                a = this.R.getSelectedCreative(), b = a.getMediaUrl("video/x-flv")
            } catch (c) {
                lj(this, c);
                return
            }
            a = this.a.getEnvironmentData();
            if (a.hh) b = new Cg({
                video_id: "szCiX51Kq8s"
            });
            else {
                var d;
                if (!(d = fa(b))) d = $e(b), d = fa(d) ? k : d.split(".").reverse(), d = !(fa(d) ? 0 : "com" == d[0] && d[1].match(/^youtube(?:-nocookie)?$/));
                d ? b = k : (b = Ye(b), b = b.v || b.video_id, b = fa(b) ? k : new Cg({
                    video_id: b
                }))
            }(this.e = b) ? (mj(this.a, -1, this.e.A), this.e.n("onStatusFail", this.ak, this), this.e.n("videoinfo", this.bk,
                this), a = new Sh(a.C), a.eventLabel = "adunit", Tg(this.e, Xh(a, this.e))) : (mj(this.a, -1), nj(this))
        };

        function oj(a) {
            a.e && (a.e.P("onStatusFail", a.ak, a), a.e.P("videoinfo", a.bk, a))
        }
        n.bk = function() {
            oj(this);
            var a = k;
            this.e.kb && (a = qg(this.a.getEnvironmentData().ei, this.e.kb));
            if (a) {
                var b = this.R.getSelectedCreative(),
                    a = a.a in ng && bg("ps3;leanback") ? gg(a) : a.qe;
                b.setMediaUrl(a);
                nj(this)
            } else lj(this, Error(this.e.A + " does not have any supported video formats for this browser"))
        };

        function nj(a) {
            bj(1);
            cj(1);
            var b = a.a.u,
                c = a.a.getRootNode();
            a.k = c;
            a.m = pj(a.a.g);
            b.appendChild(qj(a.a.g), a.m);
            a.o = L("video-ad-time-left", c || b.a);
            var c = L("html5-ad-progress-list", c || b.a),
                d = b.a.createElement("div");
            I(d, "html5-ad-progress", "html5-progress-section");
            b.appendChild(c, d);
            a.u = d;
            I(a.k, "ad-showing", "ad-interrupting");
            a.X.N(rj(a.a.g), "mouseup", a.gp);
            a.X.N(a.m, "timeupdate", a.dp);
            try {
                a.X.N(a.R, google.ima.AdErrorEvent.Type.AD_ERROR, a.fp), B([google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
                    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED
                ], function(a) {
                    this.X.N(this.R, a, ba)
                }, a), a.X.N(a.R, google.ima.AdEvent.Type.CLICK, a.ep), a.X.N(a.R, google.ima.AdEvent.Type.COMPLETE, a.cp), a.X.N(a.R, google.ima.AdEvent.Type.PAUSED, a.Vk), a.X.N(a.R, google.ima.AdEvent.Type.STARTED, a.Wk), a.R.start()
            } catch (f) {
                lj(a, f)
            }
        }
        n.Wk = function() {
            this.Yh = j;
            if (!this.B) {
                this.B = j;
                var a = this.g;
                jj(a);
                var b = gj(a);
                if (isNaN(a.b)) jj(a);
                else {
                    var c = x() - a.b;
                    b.ad_stl = c
                }
                fj(a, 4, b)
            }
            Gh(this.a, j);
            mj(this.a, 1);
            this.j("adPlay", this)
        };
        n.Vk = function() {
            this.Yh = l;
            Gh(this.a, l);
            mj(this.a, 2)
        };
        n.cp = function() {
            var a = this.g;
            jj(a);
            var b = gj(a),
                c = a.a.m ? a.a.m.getType() : k;
            c ? b.ad_fmt = c : jj(a);
            fj(a, 5, b);
            mj(this.a, 0);
            this.j("adEnd", this)
        };
        n.fp = function(a) {
            lj(this, a.getError())
        };

        function lj(a, b) {
            mj(a.a, 0);
            a.j("adError", b)
        }
        n.ak = function() {
            oj(this);
            lj(this, Error("Request to get video data failed."))
        };
        n.ep = function() {
            var a = this.g;
            jj(a);
            var b = gj(a);
            if (a.g) {
                var c = sj(a.e),
                    d = a.g.y - c.top,
                    d = Math.round(a.g.x - c.left) + "x" + Math.round(d);
                b.ck_xy = d;
                b.ck_wh = c.width + "x" + c.height
            }
            fj(a, 15, b);
            P(u(this.df, this), 0);
            this.j("select")
        };
        n.gp = function(a) {
            this.g.g = new F(a.pageX, a.pageY)
        };
        n.dp = function() {
            this.o.innerHTML = ci(this.R.getRemainingTime());
            if (0 == hj(this)) {
                var a = this.m;
                a.ug = a.duration || 0
            }
            a = hj(this) ? this.m.getCurrentTime() / hj(this) : 0;
            this.u.style.width = Math.round(1E3 * a) / 10 + "%"
        };
        n.D = function() {
            this.a.P("control_toggle_play_pause", this.Vj, this);
            this.a.P("control_play", this.df, this);
            this.a.P("control_pause", this.th, this);
            Ie(this.X);
            oj(this);
            this.R && (this.R.destroy(), this.R = k);
            var a = this.a.u;
            this.m && (a.$k(this.m), this.m = k);
            this.o && (this.o.innerHTML = "", this.o = k);
            this.u && (a.$k(this.u), this.u = k);
            this.k && (J(this.k, "ad-showing", "ad-interrupting"), this.k = k);
            kj.s.D.call(this)
        };
        n.getType = function() {
            return "1_2"
        };

        function hj(a) {
            return a.m ? a.m.getDuration() : k
        }
        n.Vj = function() {
            this.Yh ? this.th() : this.df()
        };
        n.df = function() {
            this.m && (this.R.resume(), this.Wk())
        };
        n.th = function() {
            this.m && (this.R.pause(), this.Vk())
        };

        function tj(a, b) {
            kj.call(this, a, b)
        }
        z(tj, kj);
        tj.prototype.getType = function() {
            return "2_2"
        };

        function uj(a, b) {
            this.e = a;
            this.b = b;
            this.e.getType()
        }

        function vj(a, b, c) {
            a.e.j("AD_LOGGING_EVENT", b, c)
        }

        function wj(a) {
            a.k = x();
            vj(a, 3, xj(a))
        }

        function xj(a) {
            var b = {};
            a.k && a.a && (b.ot = a.a - a.k);
            var c;
            c = a.b.isFullscreen() ? 2 : a.b.getEnvironmentData().cd ? 1 : 0;
            b.ad_ps = c;
            b.at = a.e.getType();
            return b
        };

        function yj(a, b) {
            this.b = new H;
            this.a = a;
            this.R = b;
            this.g = new uj(this, a);
            this.X = new Ge(this)
        }
        z(yj, W);
        n = yj.prototype;
        n.Wb = k;
        n.Sk = l;
        n.bj = function() {
            var a = this.a.getRootNode();
            I(a, "ad-showing");
            this.Wb = qj(this.a.g);
            I(this.Wb, "ad-overlay");
            this.X.N(this.Wb, "mouseup", this.bp);
            try {
                var b = Nd(this.Wb);
                this.X.N(this.R, google.ima.AdEvent.Type.USER_CLOSE, this.Zo);
                this.X.N(this.R, google.ima.AdEvent.Type.CLICK, this.ap);
                this.X.N(this.R, google.ima.AdErrorEvent.Type.AD_ERROR, this.$o);
                B([google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED], function(a) {
                    this.X.N(this.R,
                        a, ba)
                }, this);
                zj(this, google.ima.ViewMode.NORMAL);
                this.R.init(b.width, b.height, this.k);
                this.R.start();
                wj(this.g);
                this.Sk = j;
                this.a.n("onResize", this.Xh, this);
                this.a.n("onStateChange", this.Ek, this);
                this.j("adEnd", this)
            } catch (c) {
                this.j("adError", c)
            }
        };
        n.getType = function() {
            return "2_1"
        };
        n.D = function() {
            Ie(this.X);
            this.a.P("onResize", this.Xh, this);
            this.a.P("onStateChange", this.Ek, this);
            var a = this.a.getRootNode();
            J(a, "ad-showing");
            this.R && (this.R.destroy(), this.R = k);
            this.Wb && J(this.Wb, "ad-overlay");
            this.Wb = k;
            yj.s.D.call(this)
        };
        n.Zo = function() {
            var a = this.g;
            a.a = x();
            vj(a, 6, xj(a))
        };
        n.ap = function() {
            this.a.pubsub.j("command_pause");
            var a = this.g;
            a.a = x();
            var b = xj(a);
            if (a.g) {
                var c = sj(a.b),
                    d = a.g.y - c.top,
                    d = Math.round(a.g.x - c.left) + "x" + Math.round(d);
                b.ck_xy = d;
                b.ck_wh = c.width + "x" + c.height
            }
            vj(a, 100, b)
        };
        n.bp = function(a) {
            this.g.g = a.target == a.currentTarget ? k : new F(a.pageX, a.pageY)
        };
        n.$o = function(a) {
            this.j("adError", a.getError())
        };
        n.Ek = function(a) {
            T(a.a, 32) && zj(this, google.ima.ViewMode.NORMAL)
        };

        function zj(a, b) {
            a.k != b && (a.k = b, a.Sk && a.Xh())
        }
        n.Xh = function() {
            var a = Nd(this.Wb);
            this.R.resize(a.width, a.height, this.k)
        };

        function Aj(a, b) {
            this.b = new H;
            this.o = a;
            this.k = b
        }
        z(Aj, W);
        Aj.prototype.bj = function() {
            this.g();
            var a = {};
            a.ad_id = this.k;
            a.at = this.getType();
            this.j("AD_LOGGING_EVENT", 3, a);
            this.j("adEnd", this)
        };

        function Bj(a) {
            Aj.call(this, a, NaN)
        }
        z(Bj, Aj);
        Bj.prototype.g = function() {
            var a = q("afcAdCall");
            a && a()
        };
        Bj.prototype.getType = function() {
            return "2_3"
        };

        function Cj(a) {
            this.a = a
        };

        function Dj(a, b) {
            this.b = a;
            this.a = b
        }

        function Ej(a, b) {
            var c = Fj(a);
            c.ad_man = b;
            Gj(a.a.e, 12, c)
        }

        function Hj(a, b) {
            a.b.j("AD_TRACKING_EVENT", new Cj(b))
        }

        function Fj(a) {
            var b = {};
            b.l_ns = a.b.Ji();
            b.l_state = a.b.o;
            b.sst = a.b.k;
            b.sidx = a.b.u;
            var c = a.b.xb();
            c && (b.at = c.getType());
            a = a.b.of;
            isNaN(a) || (b.ad_id = a);
            return b
        };
        /*
         Portions of this code are from MochiKit, received by
         The Closure Authors under the MIT license. All other code is Copyright
         2005-2009 The Closure Authors. All Rights Reserved.
        */
        function Ij(a, b) {
            this.a = [];
            this.k = b || k
        }
        n = Ij.prototype;
        n.re = l;
        n.se = l;
        n.ue = 0;
        n.Wm = l;
        n.eo = l;
        n.co = 0;
        n.kk = function(a, b) {
            Jj(this, a, b);
            this.ue--;
            0 == this.ue && this.re && Kj(this)
        };

        function Jj(a, b, c) {
            a.re = j;
            a.b = c;
            a.se = !b;
            Kj(a)
        }

        function Lj(a) {
            a.re && (a.Wm || e(new Mj), a.Wm = l)
        }

        function Nj(a, b, c, d) {
            a.a.push([b, c, d]);
            a.re && Kj(a)
        }

        function Oj(a) {
            return Ea(a.a, function(a) {
                return ha(a[1])
            })
        }

        function Kj(a) {
            a.e && (a.re && Oj(a)) && (p.clearTimeout(a.e), delete a.e);
            a.g && (a.g.co--, delete a.g);
            for (var b = a.b, c = l, d = l; a.a.length && 0 == a.ue;) {
                var f = a.a.shift(),
                    g = f[0],
                    i = f[1],
                    f = f[2];
                if (g = a.se ? i : g) try {
                    var m = g.call(f || a.k, b);
                    ea(m) && (a.se = a.se && (m == b || m instanceof Error), a.b = b = m);
                    b instanceof Ij && (d = j, a.ue++)
                } catch (o) {
                    b = o, a.se = j, Oj(a) || (c = j)
                }
            }
            a.b = b;
            d && a.ue && (Nj(b, u(a.kk, a, j), u(a.kk, a, l)), b.eo = j);
            c && (a.e = p.setTimeout(function() {
                e(new Pj(b))
            }, 0))
        }

        function Mj() {
            qa.call(this)
        }
        z(Mj, qa);
        Mj.prototype.message = "Already called";

        function Pj(a) {
            qa.call(this);
            this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
        }
        z(Pj, qa);

        function Qj(a) {
            var b = document,
                c = document.createElement("SCRIPT"),
                d = {
                    b: c,
                    qq: h
                },
                f = new Ij(0, d),
                g = k,
                i = aa(h) ? h : 5E3;
            0 < i && (g = window.setTimeout(function() {
                Rj(c, j);
                var b = new Sj(1, "Timeout reached for loading script " + a);
                Lj(f);
                Jj(f, l, b)
            }, i), d.qq = g);
            c.onload = c.onreadystatechange = function() {
                if (!c.readyState || c.readyState == "loaded" || c.readyState == "complete") {
                    Rj(c, l, g);
                    Lj(f);
                    Jj(f, j, k)
                }
            };
            c.onerror = function() {
                Rj(c, j, g);
                var b = new Sj(0, "Error while loading script " + a);
                Lj(f);
                Jj(f, l, b)
            };
            id(c, {
                type: "text/javascript",
                charset: "UTF-8",
                src: a
            });
            Tj(b).appendChild(c);
            return f
        }

        function Tj(a) {
            var b = a.getElementsByTagName("HEAD");
            return !b || 0 == b.length ? a.documentElement : b[0]
        }

        function Rj(a, b, c) {
            aa(c) && p.clearTimeout(c);
            a.onload = ba;
            a.onerror = ba;
            a.onreadystatechange = ba;
            b && window.setTimeout(function() {
                M(a)
            }, 0)
        }

        function Sj(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            qa.call(this, c);
            this.code = a
        }
        z(Sj, qa);

        function Uj() {
            this.b = new H;
            this.a = "unloaded"
        }
        z(Uj, W);
        ca(Uj);
        n = Uj.prototype;
        n.load = function(a) {
            "unloaded" == this.a ? (this.a = "loading", this.yl(a)) : "loaded" == this.a ? this.j("googleAdSdkLoaded", this) : "error" == this.a && Vj(this)
        };
        n.yl = function(a) {
            q("google.ima.SdkLoader") ? (google.ima.SdkLoader.setCallbacks(u(this.nr, this), u(this.oi, this)), google.ima.SdkLoader.load("3")) : Nj(Qj(a ? "//web.archive.org/web/20120609184927/http://static.doubleclick.net/instream/html5/ima.js" : "//web.archive.org/web/20120609184927/http://s0.2mdn.net/instream/html5/ima.js"), this.yl, this.oi, this)
        };
        n.nr = function() {
            try {
                this.e = new google.ima.AdsLoader, this.e.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.tp, l, this), this.e.addEventListener(google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED, this.up, l, this), this.e.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.sp, l, this), this.a = "loaded"
            } catch (a) {
                this.oi(a);
                return
            }
            this.j("googleAdSdkLoaded", this)
        };
        n.oi = function(a) {
            "number" == typeof a && (a = Error("Google Ads SDK Failed. Error code: " + a));
            this.g = a;
            this.a = "error";
            Vj(this)
        };

        function Vj(a) {
            a.j("googleAdSdkError", a.g)
        }
        n.tp = function(a) {
            this.j("adsManagerLoaded", a)
        };
        n.up = function(a) {
            this.j("customContentLoaded", a)
        };
        n.sp = function(a) {
            var b = a.getError();
            b.getType() == google.ima.AdError.Type.AD_LOAD && (a = a.getUserRequestContext(), this.j("adsManagerLoadError", b, a))
        };

        function Wj(a, b, c, d, f) {
            this.b = new H;
            this.k = a;
            this.u = c;
            this.a = d;
            this.o = f;
            this.g = new Dj(this, d)
        }
        z(Wj, W);
        n = Wj.prototype;
        n.uc = k;
        n.of = NaN;
        n.load = function() {
            if ("leanback" != this.a.getEnvironmentData().eventLabel) {
                var a = Kd(this.a.getRootNode()),
                    b = 1 == this.o ? 190 : 200;
                if (200 > a.width || a.height < b) {
                    var b = this.g,
                        c = Fj(b);
                    c.ck_wh = a.width + "x" + a.height;
                    Xj(b.a, 14, c);
                    this.qd();
                    return
                }
            }
            this.e = Uj.getInstance();
            this.e.n("googleAdSdkLoaded", this.Rk, this);
            this.e.n("googleAdSdkError", this.Qk, this);
            this.e.load(this.a.getEnvironmentData().qf)
        };
        n.Rk = function() {
            Yj(this);
            Zj(this.a, "sdk");
            this.Bi()
        };
        n.Qk = function(a) {
            Yj(this);
            this.ve(a, this)
        };

        function Yj(a) {
            a.e && (a.e.P("googleAdSdkLoaded", a.Rk, a), a.e.P("googleAdSdkError", a.Qk, a), a.e.P("adsManagerLoaded", a.Nk, a), a.e.P("customContentLoaded", a.Ok, a), a.e.P("adsManagerLoadError", a.ve, a))
        }
        n.Bi = function() {
            var a = this.g,
                b = Fj(a);
            Gj(a.a.e, 9, b);
            a = new google.ima.AdsRequest;
            a.adTagUrl = this.Ef();
            b = this.a.getRootNode();
            b = L("html5-video-container", b || this.a.u.a);
            b = Kd(b);
            a.nonLinearAdSlotHeight = b.height;
            a.linearAdSlotHeight = b.height;
            a.nonLinearAdSlotWidth = b.width;
            a.linearAdSlotWidth = b.width;
            var c = this.o;
            if (b = q("yt.www.watch.ads.setGutSlotSizes")) {
                var d = 1 == c,
                    c = Ga(aj, c);
                b(d, c)
            }
            this.e.n("adsManagerLoaded", this.Nk, this);
            this.e.n("customContentLoaded", this.Ok, this);
            this.e.n("adsManagerLoadError", this.ve,
                this);
            try {
                var f = this.e;
                f.e && f.e.requestAds(a, this)
            } catch (g) {
                this.ve(g, this)
            }
        };
        n.Nk = function(a) {
            if (a.getUserRequestContext() === this) {
                var b = new google.ima.AdsRenderingSettings;
                b.baseYouTubeUrl = this.a.getEnvironmentData().cb;
                b.contentId = this.a.getVideoData().A;
                try {
                    var c = new google.ima.AdDisplayContainer(qj(this.a.g)),
                        d = a.getAdsManager(c, {}, pj(this.a.g), rj(this.a.g))
                } catch (f) {
                    this.ve(f, this);
                    return
                }
                a = d.getCurrentAd().isLinear();
                Ej(this.g, a ? "instream" : "overlay");
                (a ? this.ui(d) : this.vi(d)) ? $j(this): this.qd()
            }
        };
        n.Ok = function(a) {
            a.getUserRequestContext() === this && (Ej(this.g, "customContent"), this.Zi(a.getContent()) ? $j(this) : this.qd())
        };
        n.ve = function(a, b) {
            if (b === this) {
                var c = this.g,
                    d = Fj(c);
                a && $i(a, d);
                Xj(c.a, 32, d);
                this.qd()
            }
        };

        function $j(a) {
            a.j("adLoaded", a)
        }
        n.qd = function() {
            this.j("adError", this)
        };
        n.D = function() {
            Yj(this);
            Wj.s.D.call(this)
        };
        n.xb = function() {
            return this.uc
        };

        function ak(a, b, c, d, f) {
            Wj.call(this, a, 0, c, d, f);
            this.B = new bi(this.a.b, this.a.getEnvironmentData());
            (a = q("setAfvCompanionVars")) && a(1 == f)
        }
        z(ak, Wj);
        n = ak.prototype;
        n.Ji = function() {
            return 2
        };
        n.Ef = function() {
            var a = this.B,
                b = this.o,
                c = 0 == this.k || -1 == this.k ? this.k : 1E3 * this.k,
                d = {};
            d.eid = a.a.eb;
            d.videoad_start_delay = c;
            d.scs = a.a.Zd;
            d.client = a.a.Wg;
            d.description_url = a.a.lc;
            d.loeid = a.b.b ? a.b.b.join(",") : "";
            d.cust_gender = a.a.Zc;
            d.host = a.a.Rd;
            d.yt_up = a.a.Wc;
            d.hl = a.b.e;
            d.max_ad_duration = a.a.Wd;
            d.wham = a.a.Td;
            isNaN(a.a.B) || (d.cust_age = a.a.B);
            isNaN(a.a.M) || (d.hostTierId = a.a.M);
            switch (b) {
                case 1:
                    d.ad_type = "video";
                    a.a.U && (d.channel = a.a.U.join("+"));
                    break;
                case 2:
                    d.ad_type = "text_image_flash", a.a.ya && (d.channel =
                        a.a.ya.join("+"))
            }
            a.a.Pc && (d.lsv = 1);
            var a = d,
                b = aa,
                c = {},
                f;
            for (f in a) b.call(h, a[f], f, a) && (c[f] = a[f]);
            return "" + We(c, "&")
        };
        n.ui = function(a) {
            this.uc = new tj(this.a, a);
            return j
        };
        n.vi = function(a) {
            this.a.b.Nc || (this.k = 10, Gj(this.a.e, 1, h));
            cj(this.o);
            this.uc = new yj(this.a, a);
            return j
        };
        n.Zi = function() {
            return l
        };
        n.qd = function() {
            this.a.b.ea || 2 == this.o ? (this.uc = new Bj(this.a), $j(this)) : ak.s.qd.call(this)
        };

        function bk(a) {
            if ("undefined" != typeof DOMParser) return (new DOMParser).parseFromString(a, "application/xml");
            if ("undefined" != typeof ActiveXObject) {
                var b = new ActiveXObject("MSXML2.DOMDocument");
                if (b) {
                    b.resolveExternals = l;
                    b.validateOnParse = l;
                    try {
                        b.setProperty("ProhibitDTD", j), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
                    } catch (c) {}
                }
                b.loadXML(a);
                return b
            }
            e(Error("Your browser does not support loading xml documents"))
        };

        function ck(a, b, c) {
            this.a = a;
            this.b = b;
            this.e = c
        };

        function dk(a) {
            if (a.u) {
                this.Fl = a.u;
                this.Cl = a.Uc;
                var b = this.Fl,
                    c = b.indexOf(";sz="),
                    a = Ve(b.substring(c), ";"),
                    b = b.substring(0, c).split("pfadx");
                if (a = 2 != b.length ? k : {
                        yp: b[0],
                        zp: b[1],
                        Ap: a
                    }) this.Bl = a.yp, this.Dl = a.zp, this.a = a.Ap
            }
        }
        n = dk.prototype;
        n.Fl = "";
        n.Bl = "";
        n.Cl = l;
        n.Di = "";
        n.Dl = "";

        function ek(a, b) {
            var c = cb(a.a);
            b.vc && b.vc.length && (c.sz = b.vc.join(","));
            b.sh && (c.pos = b.sh);
            b.pf && (c.dc_seed = b.pf);
            b.nd && (c.tile = b.nd.toString());
            b.qi && (c.kmyd = b.qi);
            b.nl && (r(c["!c"]) ? c["!c"].push("html5") : c["!c"] = c["!c"] ? [c["!c"], "html5"] : "html5", c.html5 = "1");
            b.ag && (0 < b.ag.length && a.Cl) && (c.ciu_szs = b.ag.join(","));
            "pfadx" == b.md ? c.dcmt = "text/xml" : "dcmt" in c && delete c.dcmt;
            var d;
            if (!(d = b.Cr)) a.Di || (a.Di = Math.floor(999999999 * Math.random()).toString()), d = a.Di;
            c.ord = d;
            c = We(c, ";");
            return [a.Bl, b.md, a.Dl,
                ";", c, "?"
            ].join("")
        };

        function fk(a, b, c) {
            Aj.call(this, a, b);
            this.a = c
        }
        z(fk, Aj);
        fk.prototype.g = function() {
            gk(this.o, this.a);
            var a = this.a,
                b = q("setCompanion");
            b && b(a)
        };
        fk.prototype.getType = function() {
            return "1_3"
        };

        function hk(a, b, c, d, f) {
            Wj.call(this, a, 0, c, d, f);
            this.B = new dk(this.a.b)
        }
        z(hk, Wj);
        n = hk.prototype;
        n.Ji = function() {
            return 1
        };
        n.Ef = function() {
            var a;
            a: switch (a = this.B, this.o) {
                case 1:
                    a = ek(a, {
                        md: "pfadx",
                        vc: ["480x360"],
                        sh: 0 == this.k ? "pre" : -1 == this.k ? "post" : "mid;pos=" + this.u,
                        nd: this.u + 1,
                        qi: "watch-longform-ad",
                        nl: j,
                        ag: ["300x60"]
                    });
                    break a;
                case 4:
                    a = ek(a, {
                        md: "pfadx",
                        qi: "watch-longform-ad",
                        vc: ["480x70"],
                        nd: 1,
                        nl: j,
                        ag: ["300x250"]
                    });
                    break a;
                default:
                    a = ""
            }
            return a
        };
        n.ui = function(a) {
            this.uc = new kj(this.a, a);
            return j
        };
        n.vi = function() {
            return l
        };
        n.Bi = function() {
            gk(this.a, this.Ef());
            hk.s.Bi.call(this)
        };
        n.Zi = function(a) {
            try {
                var b, c = bk(a),
                    d = parseInt(sa(c.getElementsByTagName("adId")[0].firstChild.data), 10),
                    f = sa(c.getElementsByTagName("trackImp")[0].firstChild.data),
                    g = "true" == sa(c.getElementsByTagName("rm")[0].firstChild.data);
                b = new ck(d, f, g)
            } catch (i) {
                return Xj(this.g.a, 20), l
            }
            isNaN(b.a) && (a = this.g, Xj(a.a, 41, Fj(a)));
            this.of = b.a;
            a: switch (a = this.B, c = this.of, this.o) {
                case 1:
                    a = ek(a, {
                        sh: 0 == this.k ? "pre" : -1 == this.k ? "post" : "mid;pos=" + c,
                        md: "adi",
                        pf: c,
                        vc: ["300x60"],
                        nd: 1
                    });
                    break a;
                case 4:
                    a = ek(a, {
                        md: "adi",
                        pf: c,
                        vc: ["300x250"],
                        nd: 1
                    });
                    break a;
                default:
                    a = k
            }
            c = this.g;
            d = b.b;
            fa(d) || !d.length ? Xj(c.a, 40, Fj(c)) : (Hj(c, d), Hj(c, Fj(c)));
            4 == this.o && (c = ek(this.B, {
                md: "adx",
                pf: this.of,
                vc: ["450x60"],
                nd: 1
            }), gk(this.a, c), Hj(this.g, c));
            if (b.e) return 1 != this.o && (b = q("closeInPageAdIFrame")) && b(), fa(a) || (gk(this.a, a), Hj(this.g, a)), b = this.g, Xj(b.a, 21, Fj(b)), l;
            a && 4 == this.o ? this.uc = new fk(this.a, b.a, a) : a && (gk(this.a, a), Hj(this.g, a));
            b = this.g;
            Xj(b.a, 24, Fj(b));
            return j
        };

        function ik(a, b) {
            a != k && this.append.apply(this, arguments)
        }
        ik.prototype.a = "";
        ik.prototype.append = function(a, b, c) {
            this.a += a;
            if (b != k)
                for (var d = 1; d < arguments.length; d++) this.a += arguments[d];
            return this
        };
        ik.prototype.clear = function() {
            this.a = ""
        };
        ik.prototype.toString = function() {
            return this.a
        };

        function jk(a, b, c) {
            this.b = a;
            this.e = b;
            this.a = Zf || $f ? "html5_ios" : ag ? "html5_android" : "leanback" == c ? "html5_tv_leanback" : "html5"
        };

        function kk(a, b) {
            kj.call(this, a, b)
        }
        z(kk, kj);
        kk.prototype.getType = function() {
            return "4_2"
        };

        function lk(a, b, c, d, f) {
            Wj.call(this, a, 0, c, d, f);
            this.B = new jk(this.a.b, this.a.getVideoData().la, this.a.getEnvironmentData().eventLabel)
        }
        z(lk, Wj);
        n = lk.prototype;
        n.Ji = function() {
            return 4
        };
        n.Ef = function() {
            var a = this.B,
                b = new ik("");
            b.append("nw", "=", "10613");
            b.append("&", "asnw", "=", a.b.Qa);
            b.append("&", "ssnw", "=", a.b.Qa);
            b.append("&", "caid", "=", a.b.Ud);
            b.append("&", "prof", "=", "10613:10613_youtube_", a.a);
            b.append("&", "vdur", "=", a.e);
            b.append("&", "csid", "=", "youtube_watch_", a.a);
            b.append("&", "resp", "=", "vast2");
            b.append("&", "flag", "=", "+emcr;;ptgt=a");
            b.append("&", "slid", "=", "preroll");
            b.append("&", "slau", "=", "preroll");
            b.append("&", "w", "=", "480");
            b.append("&",
                "h", "=", "360");
            b.append("&", "tpos", "=", "0");
            b.append("&", "tpcl", "=", "preroll");
            b.append("&", "envp", "=", "10613:10613_youtube_", a.a.split("_")[0]);
            b.append("&", "cd", "=", "1440,900");
            return b.toString()
        };
        n.ui = function(a) {
            if (0 != this.k) return l;
            this.uc = new kk(this.a, a);
            return j
        };
        n.vi = function() {
            return l
        };
        n.Zi = function() {
            return l
        };

        function mk(a, b, c, d) {
            switch (c) {
                case 1:
                    return new ak(a, 0, b, d, 1);
                case 2:
                    return new ak(a, 0, b, d, 2);
                case 3:
                    return new hk(a, 0, b, d, 1);
                case 4:
                    return new hk(a, 0, b, d, 4);
                case 5:
                    return new lk(a, 0, b, d, 1);
                default:
                    return k
            }
        };

        function nk(a, b, c) {
            this.b = new H;
            this.id = a;
            this.index = b || 0;
            this.bi = !!c
        }
        z(nk, W);
        n = nk.prototype;
        n.bi = l;
        n.Kl = l;
        n.Ca = k;
        n.Da = k;
        n.gi = l;
        n.load = function() {
            this.Ca && (this.Ca.n("adLoaded", this.Am, this), this.Ca.n("adError", this.Li, this), this.Ca.n("AD_TRACKING_EVENT", this.Bm, this), this.Ca.load())
        };
        n.Am = function() {
            ok(this);
            this.Ca.xb() ? (this.Da = this.Ca.xb(), this.j("adLoaded", this, this.Ca.k)) : this.Li()
        };
        n.Li = function() {
            ok(this);
            this.j("adError", this)
        };
        n.Bm = function(a) {
            this.j("AD_TRACKING_EVENT", a)
        };

        function ok(a) {
            a.Ca.P("adLoaded", a.Am, a);
            a.Ca.P("adError", a.Li, a);
            a.Ca.P("AD_TRACKING_EVENT", a.Bm, a)
        }
        n.xb = function() {
            return this.Da
        };

        function pk(a) {
            a.gi ? a.Da instanceof yj && zj(a.Da, google.ima.ViewMode.NORMAL) : (a.gi = j, a.Da.n("adPlay", a.Sq, a), a.Da.n("adEnd", a.Rq, a), a.Da.n("adError", a.Vq, a), a.Da.n("AD_LOGGING_EVENT", a.Tq, a), a.Da.n("select", a.Uq, a), a.Da.bj())
        }
        n.Sq = function() {
            this.j("adPlay", this)
        };
        n.Rq = function() {
            this.j("adEnd", this)
        };
        n.Uq = function() {
            this.Kl = j
        };
        n.Tq = function(a, b) {
            this.j("AD_LOGGING_EVENT", a, b)
        };
        n.Vq = function(a) {
            this.j("adError", this, a)
        };
        n.D = function() {
            nk.s.D.call(this);
            Wb(this.Ca);
            Wb(this.Da)
        };

        function qk(a, b) {
            this.b = new H;
            this.g = b;
            this.sc = a;
            this.rd = "unloaded";
            this.a = [];
            this.tf = [];
            this.e = [];
            this.Zj = {};
            this.k = []
        }
        z(qk, W);
        n = qk.prototype;
        n.start = NaN;
        n.Ci = j;
        n.wc = l;
        n.isVisible = j;
        n.yb = NaN;
        n.pl = l;
        n.fg = NaN;
        n.Fa = function() {
            return isNaN(this.start) ? k : 0 == this.start ? rk(this) && sk(this) ? -2147483648 : 0 : -1 == this.start || -2 == this.start ? 2147483647 : 1E3 * this.start
        };

        function tk(a, b) {
            a.a.push(b)
        }

        function rk(a) {
            return "loaded" == a.rd || "error" == a.rd
        }

        function sk(a) {
            rk(a) || e(Error("Preroll status is undefined before ad load."));
            return 0 == a.start && a.wc
        }
        n.Nf = function() {
            this.rd = "loading";
            var a = this.a.length,
                b = this.e.shift();
            !b || 0 == a ? (this.rd = "error", B(this.a, Wb), this.a = [], uk(this)) : (this.tf = [], B(this.a, function(a) {
                if (!this.Zj[a.id]) {
                    a.bi || (this.pl = j);
                    var d = mk(this.start, a.index, b, this.sc);
                    a.Ca = d;
                    this.tf.push(a)
                }
            }, this), 0 == this.start && Zj(this.sc, "nl"), vk(this))
        };
        n.getId = function() {
            return this.g
        };

        function vk(a) {
            if (a.tf.length) {
                var b = a.tf.shift();
                b.n("adLoaded", a.nm, a);
                b.n("adError", a.om, a);
                b.n("AD_TRACKING_EVENT", a.pm, a);
                b.load()
            } else wk(a)
        }

        function xk(a, b) {
            b.P("adEnd", a.dk, a);
            b.P("adError", a.ek, a);
            b.P("AD_LOGGING_EVENT", a.ck, a)
        }
        n.om = function(a) {
            this.fg = !this.fg ? a.id : Math.min(this.fg, a.id);
            Ia(this.a, a);
            Wb(a);
            vk(this)
        };
        n.pm = function(a) {
            this.k.push(a)
        };
        n.nm = function(a, b) {
            this.start = b;
            a.P("adLoaded", this.nm, this);
            a.P("adError", this.om, this);
            a.P("AD_TRACKING_EVENT", this.pm, this);
            this.Zj[a.id] = j;
            0 == this.g && (this.sc.B.at = a.xb().getType());
            a.xb() instanceof kj ? this.wc = j : a.xb() instanceof Aj && (this.isVisible = l);
            vk(this)
        };

        function wk(a) {
            a.pl && !Ea(a.a, function(a) {
                return a.xb() && !a.bi
            }) && a.e.length ? (tk(a, new nk(a.fg)), a.Nf()) : (a.rd = "loaded", uk(a))
        }

        function uk(a) {
            a.j("adBreakComplete", a)
        }
        n.D = function() {
            qk.s.D.call(this);
            B(this.a, Wb);
            this.a = [];
            this.e = this.a = k
        };
        n.dk = function(a) {
            if (this.wc) {
                xk(this, a);
                a = this.sc;
                if ((a.a.getVideoData().vb || {}).shortform && !a.Jl) S(a.getEnvironmentData().cb + "mac_204?action_fcts=1"), a.Jl = j;
                this.a[this.yb].Kl && (this.Ci = l)
            }
            uk(this)
        };
        n.ek = function(a, b) {
            if (b) {
                var c = {};
                $i(b, c);
                c.sst = this.start;
                c.sidx = this.yb;
                Xj(this.sc, 32, c)
            }
            xk(this, a);
            uk(this)
        };
        n.ck = function(a, b) {
            b.sst = this.start;
            b.sidx = this.yb;
            Gj(this.sc.e, a, b)
        };

        function yk(a) {
            this.Sn = a
        }

        function zk(a) {
            try {
                var b = bk(a).getElementsByTagName("AdBreak"),
                    c = Da(b, function(a) {
                        a = a.getAttribute("time");
                        return za(a)
                    });
                return new yk(c)
            } catch (d) {
                return new yk([0])
            }
        };

        function Ak(a) {
            if (a.b.qa) {
                var b = [],
                    c = a.b;
                c.g && c.a && b.push(5);
                c.k && (c.a ? b.push(3) : c.oa && b.push(4));
                c.b && dj(a.getEnvironmentData()) && b.push(1);
                c.e && b.push(2)
            } else {
                var b = [],
                    c = a.b,
                    d = c.a;
                c.g && d && b.push(5);
                c.k && d && b.push(3);
                c.b && dj(a.getEnvironmentData()) && b.push(1)
            }
            return a = b
        };

        function Bk(a) {
            this.b = new H;
            this.a = a;
            this.e = []
        }
        z(Bk, W);
        Bk.prototype.g = 0;
        Bk.prototype.k = 0;

        function Ck(a, b, c) {
            var d = new qk(a.a, a.g++);
            d.start = b;
            for (b = 0; 1 > b; b++) {
                var f = d,
                    g = new nk(a.k++, 0, l);
                tk(f, g)
            }
            d.e = c;
            return d
        }
        Bk.prototype.complete = function() {
            this.j("adBreaksComplete", this.e)
        };

        function Dk(a) {
            this.apply(a)
        }
        Dk.prototype.apply = function(a) {
            this.o = a.ad_slots;
            this.C = a.ad_breaks;
            this.gb = a.ad_flags || 0;
            this.eb = a.cafe_experiment_id;
            this.u = a.ad_tag;
            this.B = parseInt(a.cust_age, 10);
            this.tb = a.cid;
            this.lc = a.ad_eurl;
            this.mc = a.duplicate_xfp;
            this.Yc = a.excluded_ads;
            var b = parseInt(a.cust_gender, 10);
            isNaN(b) || (this.Zc = b);
            this.Rd = a.ad_host;
            this.M = parseInt(a.ad_host_tier, 10);
            this.Wc = a.icm_profile;
            this.Tc = 1 == a.ad_logging_flag;
            this.b = Zi(a.aftv);
            this.e = Zi(a.afv);
            this.Uc = !!a.gut_tag;
            this.k = Zi(a.dclk);
            this.Pc = 1 == a.livestream;
            this.g = 1 == parseInt(a.tpas_ad_type_id, 10);
            this.Vc = !!a.fqsf;
            this.a = Zi(a.instream);
            this.oa = Zi(a.mpu);
            this.qa = Zi(a.sffb);
            this.Nc = a.wl_cid && a.wl_ad_slots;
            this.Zd = "1" == a.as_launched_in_country;
            b = a.ad_channel_code_instream;
            this.U = t(b) ? b.split(",") : [];
            this.ra = a.sf30;
            b = parseInt(a.afv_instream_max, 10);
            this.ra ? b = 3E4 : isNaN(b) && (b = 15E3);
            this.Wd = b;
            b = a.ad_channel_code_overlay;
            this.ya = t(b) ? b.split(",") : [];
            this.Wg = a.ad_video_pub_id;
            this.ea = this.b && this.qa && !this.e;
            this.Rc = this.e || this.ea;
            this.Ud = a.tpas_video_id;
            this.Qa =
                a.tpas_partner_id;
            this.Td = a.wham
        };

        function Ek(a, b) {
            this.e = a;
            this.G = b;
            this.o = x();
            this.a = a.b;
            this.b = {};
            this.k = 0;
            this.b.allowed = Fk(this);
            var c = this.a.Yc;
            c && (this.b.ex_ads = c);
            (c = this.a.ra) && (this.b.sf30 = c)
        }
        Ek.prototype.g = k;

        function Gj(a, b, c) {
            var c = c || {},
                d = (x() - a.o) / 1E3;
            c.art = d;
            d = a.e.getEnvironmentData();
            c.feature = d.g;
            c.ad_flags = a.a.gb;
            (d = a.a.tb) && (c.cid = d);
            c.mt = a.G.getCurrentTime();
            (d = a.G.getDuration()) && (c.len = d);
            a.a.Vc && (c.fqsf = 1);
            c.ad_event = b;
            b = c;
            if (a.a.Tc) {
                var f;
                a: {
                    c = a.b;d = bb(b);
                    for (f in c) {
                        if (f in d) {
                            f = k;
                            break a
                        }
                        d[f] = c[f]
                    }
                    f = d
                }
                fa(f) ? a.e.log(a.b) : b = f;
                a.e.log(b);
                a.b = {}
            }
        }

        function Fk(a) {
            if (a.g) return a.g;
            var b = [];
            a.a.g && a.a.a && b.push("4_2");
            a.a.k && (a.a.a && b.push("1_2"), a.a.oa && b.push("1_3"));
            a.a.e && b.push("2_1");
            a.a.b && a.a.a && b.push("2_2");
            a.a.Rc && b.push("2_3");
            return b.join(",")
        };

        function Gk(a, b) {
            this.b = b;
            this.e = [];
            this.g = {};
            this.Xa = {};
            this.a = a
        }
        z(Gk, Ub);
        n = Gk.prototype;
        n.Pb = k;
        n.Nf = function() {
            if (!this.e.length)
                if (Oa(this.b, function(a, c) {
                        return a.getId() - c.getId()
                    }), this.e = Ca(this.b, function(a) {
                        return "unloaded" == a.rd
                    }), 0 == this.e.length) Ah(this.a);
                else {
                    var a = Fa(this.e, function(a) {
                        return 0 == a.start
                    });
                    fa(a) && Ah(this.a);
                    Hk(this)
                }
        };

        function Hk(a) {
            if (a.e.length) {
                var b = a.e.shift();
                b.n("adBreakComplete", a.xi, a);
                b.Nf()
            }
        }
        n.xi = function(a) {
            a.P("adBreakComplete", this.xi, this);
            P(u(this.hr, this, a), 0)
        };
        n.hr = function(a) {
            var b = Ba(this.b, a),
                c = this.b[b + 1],
                b = this.b[b - 1],
                d = 2147483646; - 2 == a.start || -1 == a.start ? d = 2147483647 : c && 2147483647 != c.start && (d = c.Fa() - 1);
            0 == a.g && (Zj(this.a, "bl"), sk(a) || Zj(this.a, "fb"));
            if (c = !(rk(a) && 0 < a.a.length)) {
                if (b && rk(b)) {
                    var f = b.Fa();
                    f > d && (d = f);
                    Ik(this, b);
                    Jk(this, b, d)
                }
            } else this.g[a.getId()] = a, Jk(this, a, d);
            Ah(this.a);
            c && this.ne(a);
            Hk(this)
        };

        function Jk(a, b, c) {
            var d = b.Fa();
            if (!fa(d)) {
                var f = {};
                f.priority = -2 != b.start ? 1 : 2;
                f.id = b.getId();
                f.visible = b.isVisible;
                c = new Df(d, c, f);
                a.Xa[b.getId()] = c;
                a.a.ad(c)
            }
        }

        function Ik(a, b) {
            a.Xa[b.getId()] && (a.a.hk(a.Xa[b.getId()]), delete a.Xa[b.getId()])
        }
        n.ne = function(a) {
            a.P("adBreakComplete", this.xi, this);
            this.Pb && a == this.Pb && (this.Pb = k);
            Ik(this, a);
            Ia(this.b, a);
            delete this.g[a.getId()];
            Wb(a)
        };
        n.Yn = function(a) {
            if (a.wc) {
                if (-1 != a.start && a.Ci) {
                    var b = this.a;
                    Kk(b);
                    b.playVideo()
                } else sk(a) && !a.Ci ? (b = this.a, Kk(b), b.playVideo()) : (Kk(this.a), Gh(this.a, l));
                this.ne(a)
            } else a.isVisible || this.ne(a)
        };
        n.D = function() {
            B(this.b, this.ne, this);
            Gk.s.D.call(this)
        };

        function Lk(a, b) {
            this.k = b;
            this.g = a;
            B(b, function(a) {
                a.n("adBreakComplete", this.fl, this)
            }, this);
            this.a = {}
        }
        z(Lk, Ub);
        Lk.prototype.fl = function(a) {
            if (!a.C)
                if (this.b(a), 0 == a.start) B(a.k, this.e, this);
                else {
                    var b = a.Fa();
                    if (b) {
                        var c = "ADT_" + a.getId(),
                            b = new Df(b, 2147483647, {
                                id: c,
                                priority: 0
                            });
                        this.a[c] = a.k;
                        this.g.ad(b)
                    }
                }
        };
        Lk.prototype.b = function(a) {
            a.C || a.P("adBreakComplete", this.fl, this)
        };
        Lk.prototype.e = function(a) {
            t(a.a) ? S(a.a) : Gj(this.g.e, 13, a.a)
        };
        Lk.prototype.D = function() {
            Lk.s.D.call(this);
            B(this.k, this.b, this)
        };

        function Mk() {
            this.e = new Ge(this);
            this.a = [];
            this.b = []
        }
        ca(Mk);
        var Nk = q("yt.player.utils.VideoTagPool.instance_") || Mk.getInstance();
        pa("yt.player.utils.VideoTagPool.instance_", Nk);
        n = Mk.prototype;
        n.ur = function(a) {
            if (!(this.a.length >= a))
                for (var a = a - this.a.length, b = 0; b < a; b++) this.a.push(Ok(this))
        };

        function Ok(a) {
            var b = Jh();
            Kh(b);
            if (a.b.length) {
                var c = a.b[0],
                    d = c.getVolume(),
                    c = c.isMuted();
                b.volume = d / 100;
                b.muted = c
            }
            a.b.push(b);
            a.e.N(b, "volumechange", a.Kp);
            return b
        }
        n.Kp = function(a) {
            var a = a.target,
                b = a.volume,
                c = a.muted;
            this.b.forEach(function(a) {
                a.volume = b;
                a.muted = c
            }, this)
        };
        n.Ar = function() {
            return this.a.length ? this.a.pop() : Ok(this)
        };
        n.yr = function(a) {
            a && Ga(this.b, a) && (Lh(a), a.a = k, Ia(this.b, a))
        };
        n.wr = function(a) {
            return this.a.length >= (a || 1)
        };
        Mk.prototype.fillPool = Mk.prototype.ur;
        Mk.prototype.getTag = Mk.prototype.Ar;
        Mk.prototype.releaseTag = Mk.prototype.yr;
        Mk.prototype.hasTags = Mk.prototype.wr;

        function Pk(a, b, c) {
            this.g = a;
            this.a = b;
            this.k = c
        }
        z(Pk, Ub);
        Pk.prototype.b = k;
        Pk.prototype.e = k;
        Pk.prototype.m = k;

        function qj(a) {
            a.b || (a.b = L("ad-container", a.g || a.a.a));
            return a.b
        }

        function pj(a) {
            a.m || (a.m = Nk.getTag(), I(a.m, "video-stream", "ad-video"));
            return a.m
        }

        function rj(a) {
            if (!a.e) {
                var b;
                if (a.k.xa) {
                    b = a.a.a.createElement("button");
                    I(b, "video-click-tracking");
                    a.a.append(b, je("VISIT_ADVERTISERS_SITE"));
                    var c = a.a.a.createElement("div");
                    I(c, "video-click-tracking-container");
                    a.a.appendChild(c, b);
                    a.a.appendChild(qj(a), c)
                } else b = a.a.a.createElement("div"), I(b, "video-click-tracking", "ad-video"), a.a.appendChild(qj(a), b);
                a.e = b
            }
            return a.e
        }
        Pk.prototype.D = function() {
            Pk.s.D.call(this);
            this.m && Nk.releaseTag(this.m);
            this.a.fo(qj(this));
            this.a = this.b = this.e = this.m = k
        };

        function Qk(a) {
            yh.call(this, a);
            this.M = {};
            this.B = {
                at: 0
            };
            this.u = new ed;
            this.g = new Pk(this.getRootNode(), this.u, this.getEnvironmentData())
        }
        z(Qk, yh);
        n = Qk.prototype;
        n.W = "ad";
        n.Jc = "ad";
        n.hd = k;
        n.Jl = l;
        n.Fh = l;
        n.bb = function(a) {
            return a.getVideoData().qk
        };
        n.create = function() {
            Qk.s.create.call(this);
            this.ja = j;
            Zj(this, "i");
            this.b = new Dk(this.a.getVideoData().vb || {});
            this.e = new Ek(this, this.a);
            bj();
            this.hd = new Bk(this);
            this.hd.n("adBreaksComplete", this.Sj, this);
            var a = this.hd;
            try {
                var b = a.a.b,
                    c;
                if (a.a.getEnvironmentData().Fb || ij(a.a)) c = new yk([0]);
                else {
                    var d;
                    if (b.g) d = new yk([0]);
                    else {
                        var f;
                        if (b.C) f = zk(b.C);
                        else {
                            var g;
                            if (b.o) {
                                var i = Da(b.o.split(","), za);
                                g = new yk(i)
                            } else g = new yk([0]);
                            f = g
                        }
                        d = f
                    }
                    c = d
                }
                for (var m = c.Sn, b = 0; b < m.length; b++) a.e.push(Ck(a, m[b], Ak(a.a)));
                a.complete()
            } catch (o) {
                a.complete()
            }
            a = {};
            a.allowed = Fk(this.e);
            Dh(this, {}, a)
        };
        n.destroy = function() {
            this.Fh && Kk(this);
            this.ja = l;
            Wb(this.hd);
            this.hd = k;
            Wb(this.k);
            this.k = k;
            Wb(this.C);
            this.C = k;
            Qk.s.destroy.call(this)
        };
        n.getVideoData = function() {
            return this.a.getVideoData()
        };
        n.getEnvironmentData = function() {
            return this.a.getEnvironmentData()
        };
        n.isFullscreen = function() {
            return this.a.isFullscreen() || ij(this)
        };

        function ij(a) {
            return "leanback" == a.getEnvironmentData().eventLabel
        }
        n.n = function(a, b, c) {
            this.pubsub.n(a, b, c)
        };
        n.P = function(a, b, c) {
            this.pubsub.P(a, b, c)
        };
        n.j = function(a, b) {
            this.pubsub.j.apply(this.pubsub, arguments)
        };

        function Xj(a, b, c) {
            c = c || {};
            c.ad_error = b;
            Gj(a.e, 7, c)
        }
        n.getRootNode = function() {
            return this.a.getRootNode()
        };

        function sj(a) {
            var b = a.getRootNode(),
                a = Fd(b),
                b = Kd(b);
            return new Sb(a.x, a.y, b.width, b.height)
        }
        n.Sj = function(a) {
            this.hd.P("adBreaksComplete", this.Sj, this);
            Zj(this, "bd");
            this.C = new Lk(this, a);
            this.k = new Gk(this, a);
            this.k.Nf()
        };

        function Kk(a) {
            a.Fh = l;
            a.pubsub.j("command_stop_redirect_controls");
            a.pubsub.j("command_enable_controls", ["seek"], a.W);
            a.pubsub.j("command_ad_break_ended")
        }

        function mj(a, b, c) {
            a.pubsub.j("command_broadcast_ad_state_change", b, pj(a.g), c)
        }
        n.lb = function(a) {
            Qk.s.lb.call(this, a);
            var b = a.getId(),
                c;
            if (c = this.C) c = a.getId(), c = t(c) && 0 == c.lastIndexOf("ADT_", 0);
            if (c) {
                a.Ue = l;
                c = this.C;
                var d = c.a[b];
                d && (delete c.a[b], B(d, c.e, c));
                this.hk(a)
            } else if (this.k && !isNaN(b) && (a = this.k, ea(b) && (b = a.g[b])))
                if (a.Pb == b && !b.wc && b.isVisible || (a.Pb && a.ne(a.Pb), a.Pb = b, b.n("adBreakComplete", a.Yn, a), b.wc && (a = a.a, a.Fh = j, a.pubsub.j("command_redirect_controls", a, ["play_pause"]), a.pubsub.j("command_disable_controls", ["seek"], a.W), a.pubsub.j("command_ad_break_started"),
                        a.pubsub.j("command_pause"))), 0 != b.a.length) isNaN(b.yb) ? (b.yb = 0, a = b.a[b.yb], a.xb() instanceof kj && Zj(b.sc, "bs"), a.n("adEnd", b.dk, b), a.n("adError", b.ek, b), a.n("AD_LOGGING_EVENT", b.ck, b), pk(a)) : pk(b.a[b.yb])
        };
        n.pb = function(a) {
            Qk.s.pb.call(this, a);
            var b = a.getId(),
                c = 1E3 * this.a.getCurrentTime();
            if (this.k && !isNaN(b) && c > a.start && (2147483647 == a.end || 2147483646 == a.end))
                if (a = this.k, (b = a.g[b]) && a.Pb == b && (!b.wc && b.isVisible) && !isNaN(b.yb)) b = b.a[b.yb], b.gi && b.Da instanceof yj && zj(b.Da, google.ima.ViewMode.FULLSCREEN)
        };

        function Zj(a, b) {
            var c = b;
            "nl" == b && (c = a.e, c.k++, c = c.k.toString());
            a.M[c] = x();
            ("bs" == c || "fb" == c) && Dh(a, a.M, a.B)
        }

        function gk(a, b) {
            var c = a.b.mc;
            if (c) {
                var d = /\/N\d*/;
                b && b.match(d) ? c = b.replace(d, "/" + c) : (d = new Fc(b), c = c + d.Bd, Hc(d), d.Bd = c, c = d.toString());
                df(c)
            }
        }
        n.jg = function(a) {
            this.pubsub.j(a)
        };

        function Rk(a) {
            return !Qk.prototype.bb(a) ? k : new Qk(a)
        };

        function Sk(a, b) {
            if ("view" == a && b.convViewUrl) return b.convViewUrl;
            if (!b.baseUrl || !b.uid) return k;
            var c = b.rmktEnabled && b.vid,
                d = b.focEnabled;
            if (!c && !d) return k;
            var f = {
                label: d ? "followon_" + a : "default"
            };
            if (c) {
                c = {
                    utvid: b.vid,
                    utuid: b.uid,
                    type: a
                };
                b.eventLabel && (c.el = b.eventLabel);
                b.playerStyle && (c.ps = b.playerStyle);
                var g = [],
                    i;
                for (i in c) g.push(encodeURIComponent(i) + "=" + encodeURIComponent(c[i]));
                f.data = g.join(";")
            }
            if (d && "view" == a && b.vid && b.uid && (b.oeid || b.ieid)) b.oeid && (f.oeid = b.oeid), b.ieid && (f.ieid = b.ieid),
                f.evid = b.vid;
            d && (f.foc_id = b.uid);
            return R(b.baseUrl, f)
        };

        function Tk(a, b, c) {
            var d = {};
            0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
            d.video_id = a;
            d.plid = c.pa;
            a = {
                screen: Ze({
                    h: screen.height,
                    w: screen.width,
                    d: screen.colorDepth
                }),
                session_token: ge("watch_actions_ajax")
            };
            c.br && (a.station_id = c.br);
            ef("/watch_actions_ajax", {
                format: "XML",
                method: "POST",
                wg: d,
                rm: a,
                Bb: c.Bb,
                Hc: c.Hc,
                Ne: c.Ne
            })
        };

        function Uk(a, b) {
            this.wh = b;
            this.G = a;
            var c = a.getRootNode();
            this.a = L("html5-endscreen-actionbar", c);
            this.g = L("html5-replay-button", this.a);
            Q(this.g, "click", u(this.ao, this));
            this.e = L("html5-like-button", this.a);
            Q(this.e, "click", u(this.$n, this));
            this.b = L("html5-dislike-button", this.a);
            Q(this.b, "click", u(this.Zn, this));
            this.k = L("html5-share-button", this.a);
            Q(this.k, "click", u(this.bo, this))
        }
        n = Uk.prototype;
        n.wh = k;
        n.reset = function() {
            Bi(this.b);
            Bi(this.e)
        };

        function Vk(a, b, c) {
            if (!ad(c, "html5-async-progress")) {
                var d = a.G.getVideoData();
                Bi(c, "html5-async-progress");
                a = a = {
                    pa: d.pa,
                    Bb: u(a.Pq, a, c),
                    Hc: u(a.Oq, a, c)
                };
                lf("watch_actions_ajax", u(Tk, p, d.A, b ? 0 : 1, a), a.Hc);
                ee("CONVERSION_CONFIG_DICT") || (b = Sk(b ? "like" : "dislike", d.fb)) && S(b)
            }
        }
        n.ao = function() {
            this.wh.j("command_play")
        };
        n.$n = function(a) {
            Vk(this, j, a.currentTarget)
        };
        n.Zn = function(a) {
            Vk(this, l, a.currentTarget)
        };
        n.bo = function() {
            this.wh.j("command_share")
        };
        n.Pq = function(a) {
            Bi(a, "html5-async-success")
        };
        n.Oq = function(a, b, c) {
            Ci(a, c && c.error_message)
        };

        function Wk(a, b) {
            this.Ld = a;
            this.pubsub = b;
            this.Cg = ve("html5-endscreen", this.Ld.getRootNode());
            I(this.Cg, this.Sm);
            this.fc = ve("html5-endscreen-content", this.Ld.getRootNode())
        }
        n = Wk.prototype;
        n.Sm = "base-endscreen";
        n.Cg = k;
        n.fc = k;
        n.pubsub = k;
        n.Ld = k;
        n.create = function() {};
        n.destroy = function() {};

        function Xk(a, b, c) {
            var c = c || {},
                d = c.Ec;
            d || (d = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(d), d = d.sheet || d.styleSheet);
            c.reset && Yk(d);
            b = b instanceof Array ? b.join(";") : b;
            d.insertRule ? d.insertRule(a + "{" + b + "}", d.cssRules.length) : d.addRule(a, b, -1);
            return d
        }

        function Yk(a) {
            for (var b = (a.cssRules || a.rules).length; 0 < b; b--) {
                var c = a;
                c.deleteRule ? c.deleteRule(0) : c.removeRule(0)
            }
        };
        var Zk = window.location.protocol + "//squarebracket.me/player_asset",
            $k = 4 / 3;

        function al(a, b, c) {
            if (!c) {
                c = a.clientHeight;
                a = a.clientWidth;
                if ((900 < a || 600 < c) && b.mk) return b.mk;
                if ((430 < a || 320 < c) && b.nk) return b.nk
            }
            return b.ok ? b.ok : b.A ? bl(b.A) : ""
        }

        function bl(a, b) {
            return (Zk + "vi/" + escape(a) + "/" + escape(b || "hqdefault.jpg")).replace("i.", "i" + (a.charCodeAt(0) % 4 + 1) + ".")
        };

        function cl(a, b) {
            this.a = a;
            var c = b || k;
            c || (c = dl(this.a));
            c = ra("__%s__", "(" + c.join("|") + ")");
            this.b = RegExp(c, "g")
        }
        var el = /__([a-z]+(?:_[a-z]+)*)__/g;

        function fl(a, b) {
            var c = K(a).innerHTML,
                c = c.replace(/^\s*(<\!--\s*)?/, ""),
                c = c.replace(/(\s*--\>)?\s*$/, "");
            return new cl(c, b)
        }

        function dl(a) {
            var b = [],
                c = {};
            a.replace(el, function(a, f) {
                f in c || (c[f] = j, b.push(f))
            });
            return b
        }
        cl.prototype.Jb = function(a, b, c) {
            return this.a.replace(this.b, u(function(d, f) {
                b && (f = b(f));
                return c ? a[f] || "" : ta(a[f] || "")
            }, this))
        };

        function gl() {
            var a = L("videowall-info-template");
            this.a = fl(a, ["title", "author", "duration", "view_count"])
        }
        gl.prototype.Jb = function(a) {
            var b = bb(a);
            b.duration = ci(a.length_seconds);
            return this.a.Jb(b)
        };

        function hl(a) {
            this.G = a;
            this.g = new gl;
            a = L("videowall-still-content-template");
            this.k = fl(a, ["info"]);
            a = document.createElement("a");
            a.tabIndex = 0;
            I(a, "videowall-still");
            Q(a, "click", u(this.vp, this));
            Q(a, "keypress", u(this.wp, this));
            this.a = a
        }
        n = hl.prototype;
        n.update = function(a, b) {
            if (this.b != a.id) {
                this.e = a;
                this.b = a.id;
                var c;
                c = b ? "hqdefault.jpg" : "mqdefault.jpg";
                var d = {
                    info: this.g.Jb(a)
                };
                this.a.style.backgroundImage = "url(" + bl(this.b, c) + ")";
                this.a.innerHTML = this.k.Jb(d, h, j);
                bd(this.a, "videowall-still-featured", a.featured)
            }
        };
        n.O = function() {
            return this.a
        };
        n.select = function() {
            var a = "endscreen";
            if (this.e.featured) switch (this.e.feature_type) {
                case "fvwb":
                    a = "fvwpb";
                    break;
                default:
                    a = "fvwp"
            } else this.e.pinned && (a = "pinned");
            this.G.watchVideoById(this.b, a)
        };
        n.vp = function() {
            this.select()
        };
        n.wp = function(a) {
            switch (a.keyCode) {
                case 13:
                case 32:
                    this.select(), a.preventDefault()
            }
        };

        function il(a, b) {
            Wk.call(this, a, b);
            this.dj = [];
            this.pubsub.n("onResize", this.Xq, this);
            this.pubsub.n("onVideoDataChange", this.Yq, this)
        }
        z(il, Wk);
        n = il.prototype;
        n.Sm = "videowall-endscreen";
        n.Qe = k;
        n.qb = k;
        n.dj = k;
        n.Dm = l;
        n.Re = 0;
        n.create = function() {
            il.s.create.call(this);
            this.qb = this.Ld.getVideoData().jm;
            jl(this)
        };
        n.destroy = function() {
            this.fc.innerHTML = "";
            delete this.qb;
            il.s.destroy.call(this)
        };

        function jl(a) {
            if (a.qb && a.qb.length) {
                bd(a.Cg, "endscreen-enable-layout", j);
                a.fc.innerHTML = "";
                Id(a.fc, "", "");
                var b = Kd(a.fc);
                b.height -= 30;
                var c = Math.floor(b.width / 158),
                    d = Math.floor(b.height / (158 / 1.45));
                if (1 > d || 1 > c) a.Re = 0;
                else {
                    var f = a.qb.length,
                        g = l;
                    a.qb[0].featured && (2 < d && 2 < c) && (g = j, f += 3);
                    bd(a.fc, "feature-video", g);
                    for (var i = 0, m = 0, o = b.width / b.height, s = j; 0 <= f && (i < c || m < d);) {
                        var y = f >= m,
                            w = f >= i;
                        if (s && w || !y && w) f -= i, m++;
                        else if (y) f -= m, i++;
                        else break;
                        s = 1.45 * (i / m) > o
                    }
                    a.Dm = s;
                    c = new G(i, m);
                    a.Dm ? (d = 1 / c.width, b = b.width *
                        d, d = b / 1.45) : (d = 1 / c.height, d *= b.height, b = 1.45 * d);
                    b = new G(Math.floor(b), Math.floor(d));
                    a.Re = c.width * c.height;
                    g && (a.Re -= 3);
                    a.Qe && Yk(a.Qe);
                    d = kl(b);
                    g = {
                        Ec: a.Qe
                    };
                    a.Qe = Xk(".videowall-still", d, g);
                    d = b.Z();
                    d.width *= 2;
                    d.height *= 2;
                    d = kl(d);
                    g.Ec = a.Qe;
                    Xk(".feature-video .videowall-still:first-child", d, g);
                    Id(a.fc, b.width * c.width, b.height * c.height)
                }
                g = 0;
                for (b = a.Re; g < b; g++) a.fc.appendChild(ll(a, g).O());
                bd(a.Cg, "endscreen-enable-layout", l)
            }
        }

        function ll(a, b) {
            var c = a.dj[b];
            c || (c = new hl(a.Ld), a.dj[b] = c);
            c.update(a.qb[b], 0 == b && a.qb[0].featured);
            return c
        }

        function kl(a) {
            return ["width:" + a.width + "px", "height:" + a.height + "px"]
        }
        n.Xq = function() {
            jl(this)
        };
        n.Yq = function() {
            var a = this.Ld.getVideoData().jm;
            this.qb != a && (this.qb = a, jl(this))
        };

        function ml(a) {
            yh.call(this, a);
            a.getEnvironmentData().Ch ? this.mg = new il(this.a, this.pubsub) : this.mg = new Wk(this.a, this.pubsub);
            this.Gl = new Uk(this.a, this.pubsub)
        }
        z(ml, yh);
        n = ml.prototype;
        n.W = "endscreen";
        n.Jc = "end";
        n.Gl = k;
        n.mg = k;
        n.create = function() {
            ml.s.create.call(this);
            var a = Math.max(1E3 * (this.a.getVideoData().la - 10), 0),
                a = new Df(a, 2147483646, {
                    id: "preload"
                }),
                b = new Df(2147483646, 2147483647, {
                    id: "load",
                    He: 9
                });
            this.ad(a, b)
        };
        n.destroy = function() {
            zh(this);
            this.Gl.reset();
            ml.s.destroy.call(this)
        };
        n.load = function() {
            ml.s.load.call(this);
            this.ja = j
        };
        n.ba = function() {
            this.mg.destroy();
            ml.s.ba.call(this);
            this.ja = l
        };
        n.lb = function(a) {
            ml.s.lb.call(this, a);
            "preload" == a.getId() ? this.mg.create() : this.a.getAutoplay() || this.load()
        };
        n.pb = function(a) {
            "load" == a.getId() && this.ba();
            ml.s.pb.call(this, a)
        };
        n.bb = function() {
            return j
        };

        function nl(a) {
            return "leanback" != a.getEnvironmentData().eventLabel ? new ml(a) : k
        };
        var ol = {
            created: 1,
            ready: 2,
            testing: 4,
            "testing-starting": 3,
            live: 6,
            "live-starting": 5,
            complete: 8,
            "complete-starting": 7
        };

        function pl(a) {
            this.b = new H;
            this.o = (new cl("http://web.archive.org/web/20120609184927/http://stage.gdata.youtube.com/feeds/api/users/live/broadcasts/__video_id__/states")).Jb({
                video_id: a
            });
            this.a = new tc(15E3 + Math.floor(3E4 * Math.random()));
            this.a.addEventListener("tick", u(this.e, this));
            this.e();
            this.a.start()
        }
        z(pl, W);
        pl.prototype.D = function() {
            this.a.Ta();
            pl.s.D.call(this)
        };
        pl.prototype.e = function() {
            ef(this.o + ("?cb=" + (new Date).valueOf()), {
                format: "RAW",
                method: "GET",
                Hc: this.g,
                Bb: this.k,
                Ke: this
            })
        };
        pl.prototype.k = function(a) {
            this.j("payload", a.responseText);
            vc(this.a, 15E3 + Math.floor(3E4 * Math.random()))
        };
        pl.prototype.g = function() {
            var a = this.a.b;
            192E4 > a && vc(this.a, 2 * a)
        };

        function ql(a) {
            var a = bk(a),
                b = a.documentElement.getAttribute("xmlns:yt") || a.documentElement.getAttribute("yt"),
                c = a.getElementsByTagNameNS(b, "lifeCycleState"),
                d = a.getElementsByTagNameNS(b, "when"),
                a = a.getElementsByTagNameNS(b, "slate");
            c.length && (this.a = ol[c[0].textContent] || -1);
            d.length && (c = new Date(d[0].getAttribute("start")), this.g = Math.floor(c.valueOf() / 1E3));
            if (a.length) {
                c = a[0].getElementsByTagName("content");
                if (d = Math.min(c.length, 3)) {
                    for (var b = [], f = 0; f < d; f++) b[f] = c[f].textContent;
                    this.e = b.join("<br>")
                }
                if (a =
                    a[0].getAttribute("imgUrl")) this.b = "url(" + a + ")"
            }
        }
        ql.prototype.a = -1;

        function rl(a) {
            this.g = L("html5-fresca-slate", a);
            this.b = new tc(1E3);
            this.b.addEventListener("tick", u(this.e, this))
        }
        rl.prototype.update = function(a) {
            if (!this.k || this.a.a != a.a || this.a.g != a.g || this.a.e != a.e || this.a.b != a.b) this.a = a, this.g.style.backgroundImage = this.a.b || "none", this.e()
        };
        rl.prototype.destroy = function() {
            this.b.Ta()
        };
        rl.prototype.e = function() {
            var a = this.a.e;
            if (!a) a: switch (this.a.a) {
                case 6:
                    a = "";
                    break a;
                case 8:
                case 7:
                    a = je("FRESCA_COMPLETE_MESSAGE", h, "Thanks for watching!");
                    break a;
                default:
                    a = je("FRESCA_STAND_BY_MESSAGE", h, "Please stand by.")
            }
            var b;
            if (b = a) b = this.a, b.g ? (b = b.a, b = 6 == b || 8 == b || 7 == b ? l : j) : b = l;
            if (b) {
                b = this.a.g;
                var c = Math.floor((new Date).valueOf() / 1E3),
                    a = a + (c > b ? "" : "<br>" + ci(b - c));
                this.b.start()
            } else wc(this.b);
            this.g.innerHTML = a
        };

        function sl(a) {
            yh.call(this, a)
        }
        z(sl, yh);
        n = sl.prototype;
        n.W = "fresca";
        n.Jc = "fresca";
        n.zh = l;
        n.bb = function() {
            return Ug(this.a.getVideoData(), "fresca_module")
        };
        n.create = function() {
            sl.s.create.call(this);
            this.zh = l;
            this.g = new rl(this.a.getRootNode());
            this.e = new pl(this.a.getVideoData().A);
            this.e.n("payload", this.Yo, this);
            this.pubsub.n("onStateChange", this.Yj, this)
        };
        n.destroy = function() {
            this.ja && this.ba();
            this.pubsub.P("onStateChange", this.Yj, this);
            this.e.Ta();
            this.g.destroy();
            delete this.e;
            delete this.g;
            delete this.b;
            sl.s.destroy.call(this)
        };
        n.load = function() {
            sl.s.load.call(this);
            this.ja = j
        };
        n.ba = function() {
            this.ja = l;
            sl.s.ba.call(this)
        };
        n.Yj = function(a) {
            this.b && (6 == this.b.a && tl(a, 32)) && ul(this, this.b)
        };
        n.Yo = function(a) {
            this.b = new ql(a);
            6 == this.b.a && !this.a.getVideoData().me.length ? this.a.loadVideoById(this.a.getVideoData().A) : ul(this, this.b)
        };

        function ul(a, b) {
            var c = 6 != b.a;
            if (!c && a.a.isPeggedToLive() && (b.b || b.e)) c = j;
            c && a.g.update(b);
            c && !a.ja ? a.load() : !c && a.ja && a.ba();
            6 == b.a && !a.zh && (a.zh = j, Ah(a))
        }

        function vl(a) {
            return !Ug(a.getVideoData(), "fresca_module") ? k : new sl(a)
        };

        function wl(a, b) {
            return b != k && !!b.match(a)
        }

        function xl(a, b) {
            for (var c in a)
                if (a[c] == b) return j;
            return l
        }

        function yl(a, b, c) {
            var d = new zl;
            d.type = c;
            d.defaultValue = h;
            d.b = oa(wl, /.+/);
            return Al(a[b], d)
        }

        function Bl(a, b, c) {
            var d = new zl;
            d.type = "OPTIONAL";
            d.a = function(a) {
                if (isNaN(parseInt(a, 0))) return k;
                a = parseInt(a, 0).toString(16);
                return "#" + "000000".substring(0, 6 - a.length) + a
            };
            d.b = function(a) {
                return !!a
            };
            d.defaultValue = c;
            return Al(a[b], d)
        }

        function Cl(a, b, c, d) {
            var f = new zl;
            f.type = c;
            f.defaultValue = d;
            return Al(a[b], f)
        }

        function Dl(a, b, c, d, f) {
            var g = new zl;
            g.type = d;
            g.defaultValue = f;
            g.b = oa(xl, c);
            return Al(a[b], g)
        }

        function El(a, b) {
            var c = new zl;
            c.type = "OPTIONAL";
            c.defaultValue = 0;
            c.a = function(a) {
                return parseFloat(a)
            };
            return Al(a[b], c)
        }

        function Fl(a) {
            var b = new zl;
            b.type = "OPTIONAL";
            b.defaultValue = 0;
            b.a = function(a) {
                return parseInt(a, 10)
            };
            Al(a.d, b)
        }

        function Gl(a, b, c, d, f, g, i) {
            var m = new zl;
            m.type = "OPTIONAL";
            m.a = function(a) {
                a = 10 == c ? parseFloat(a) : parseInt(a, c);
                return g && a != k && !isNaN(a) ? Ob(a, d, f) : a
            };
            m.defaultValue = i;
            m.b = function(a) {
                return a != k && !isNaN(a) && a >= d && a <= f
            };
            return Al(a[b], m)
        }

        function Hl(a, b) {
            var c = new zl;
            c.type = "OPTIONAL";
            c.defaultValue = 0;
            c.a = function(a) {
                a = a.match(/([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(\.[0-9])/);
                return !a ? -1 : 3600 * parseFloat(a[1]) + 60 * parseFloat(a[2]) + parseFloat(a[3]) + parseFloat(a[4])
            };
            return Al(a[b], c)
        }

        function Il(a, b) {
            if (b == k) return k;
            var c = new a;
            c.Ia(b);
            return c
        }

        function Jl(a, b, c, d) {
            if (a == k || a[b] == k) return k;
            var f = new zl;
            f.type = d;
            f.defaultValue = h;
            f.b = function(a) {
                return !!a
            };
            f.a = oa(Il, c);
            return Al(a[b], f)
        }

        function Kl(a) {
            function b(a) {
                return a != k && !isNaN(a)
            }
            return (a = (a = a ? !a.padding || !a.padding.length ? a.padding : a.padding[0] : k) ? new Qb(parseFloat(a.top), parseFloat(a.right), parseFloat(a.bottom), parseFloat(a.left)) : k) && b(a.top) && b(a.right) && b(a.bottom) && b(a.left) ? a : k
        }

        function Al(a, b) {
            var c;
            "OPTIONAL" == b.type || "REQUIRED" == b.type ? (c = a == k ? k : b.a(r(a) && a.length ? a[0] : a), b.b(c) || ("REQUIRED" == b.type && e("Required field missing."), c = b.defaultValue == k ? k : b.defaultValue)) : c = "REPEATED" == b.type ? a != k ? Ll(r(a) ? a : [a], b) : b.defaultValue != k ? r(b.defaultValue) ? b.defaultValue : [b.defaultValue] : [] : "IDLIST" == b.type ? Ml(a, b) : k;
            return c
        }

        function Ml(a, b) {
            function c(a) {
                return Ca(a.split(/ +/), function(a) {
                    return "" != a
                })
            }
            return a != k ? Ll(c(a), b) : b.defaultValue != k ? r(b.defaultValue) ? b.defaultValue : [b.defaultValue] : []
        }

        function Ll(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var f = b.a(a[d]);
                b.b(f) && c.push(f)
            }
            return c.length ? c : b.defaultValue != k ? r(b.defaultValue) ? b.defaultValue : [b.defaultValue] : []
        }

        function zl() {}
        zl.prototype.type = "OPTIONAL";
        zl.prototype.a = function(a) {
            return a == k ? k : a.toString()
        };
        zl.prototype.b = function(a) {
            return a != k
        };
        zl.prototype.defaultValue = k;

        function Nl() {}
        var Ol = {
            CLICK: "click",
            rr: "hidden",
            Bu: "rollOut",
            Cu: "rollOver",
            Gu: "shown"
        };
        Nl.prototype.Ia = function(a) {
            yl(a, "ref", "OPTIONAL");
            Dl(a, "state", Ol, "OPTIONAL")
        };

        function Pl() {}
        Pl.prototype.Ia = function(a) {
            Jl(a, "condition", Nl, "REPEATED")
        };

        function Ql() {}
        var Rl = {
            Lt: "current",
            ou: "new"
        };
        Ql.prototype.type = k;
        Ql.prototype.value = k;
        Ql.prototype.target = k;
        Ql.prototype.Ia = function(a) {
            this.value = Cl(a, "value", "OPTIONAL");
            this.target = Dl(a, "target", Rl, "OPTIONAL", "current")
        };

        function Sl(a) {
            return a.value ? a.value : k
        }

        function Tl() {}
        Tl.prototype.value = 0;
        Tl.prototype.Ia = function(a) {
            this.value = Hl(a, "value")
        };

        function Ul() {}
        var Vl = {
            pu: "openUrl",
            sr: "pause"
        };
        n = Ul.prototype;
        n.type = k;
        n.trigger = k;
        n.url = k;
        n.zf = k;
        n.Ia = function(a) {
            this.type = Dl(a, "type", Vl, "OPTIONAL");
            this.trigger = Dl(a, "trigger", Ol, "OPTIONAL");
            this.url = Jl(a, "url", Ql, "OPTIONAL");
            this.zf = Jl(a, "duration", Tl, "OPTIONAL")
        };

        function Wl() {
            this.a = []
        }
        n = Wl.prototype;
        n.pe = "#1A1A1A";
        n.pd = "#FFF";
        n.Kf = "#000";
        n.Lf = 0;
        n.od = 0.8;
        n.Ll = 0.2;
        n.Ml = 0;
        n.Qh = "#F2F2F2";
        n.ii = 3;
        n.Rh = 3.6107;
        n.yf = "";
        n.padding = k;
        n.Ia = function(a) {
            this.pe = Bl(a, "fgColor", this.pe);
            this.pd = Bl(a, "bgColor", this.pd);
            this.Kf = Bl(a, "borderColor", this.Kf);
            this.Lf = Gl(a, "borderWidth", 16, 1, 5, l, this.Lf);
            this.od = Gl(a, "bgAlpha", 10, 0, 1, l, this.od);
            this.Ll = Gl(a, "borderAlpha", 10, 0, 1, l, this.Ll);
            this.Ml = Gl(a, "gloss", 16, 0, 255, l, this.Ml);
            this.Qh = Bl(a, "highlightFontColor", this.Qh);
            this.ii = Gl(a, "highlightWidth", 16, 1, 5, l, this.ii);
            this.Rh = Gl(a, "textSize", 10, 3.3, 30.1, j, this.Rh);
            this.yf = Cl(a, "fontWeight", "OPTIONAL", this.yf);
            this.padding = Kl(a);
            this.a = Cl(a,
                "effects", "IDLIST")
        };

        function Xl() {}
        n = Xl.prototype;
        n.x = 0;
        n.y = 0;
        n.Yf = 0;
        n.Xf = 0;
        n.Cd = 0;
        n.Ia = function(a) {
            this.x = El(a, "x");
            this.y = El(a, "y");
            this.Yf = El(a, "w");
            this.Xf = El(a, "h");
            this.Cd = Hl(a, "t");
            Fl(a)
        };

        function Yl() {}
        n = Yl.prototype;
        n.x = 0;
        n.y = 0;
        n.Yf = 0;
        n.Xf = 0;
        n.Cd = 0;
        n.Ql = 0;
        n.Rl = 0;
        n.Ia = function(a) {
            this.x = El(a, "x");
            this.y = El(a, "y");
            this.Ql = El(a, "sx");
            this.Rl = El(a, "sy");
            this.Yf = El(a, "w");
            this.Xf = El(a, "h");
            this.Cd = Hl(a, "t");
            Fl(a)
        };

        function Zl() {}
        var $l = {
            qr: "anchored",
            zu: "rect"
        };
        Zl.prototype.type = "rect";
        Zl.prototype.b = k;
        Zl.prototype.a = k;
        Zl.prototype.Ia = function(a) {
            this.type = Dl(a, "type", $l, "OPTIONAL", "rect");
            this.b = Jl(a, "rectRegion", Xl, "REPEATED");
            this.a = Jl(a, "anchoredRegion", Yl, "REPEATED")
        };

        function am() {}
        am.prototype.b = k;
        am.prototype.a = k;
        am.prototype.Ia = function(a) {
            yl(a, "timeRelative", "OPTIONAL");
            this.b = yl(a, "spaceRelative", "OPTIONAL");
            this.a = Jl(a, "movingRegion", Zl, "REPEATED")
        };

        function bm(a) {
            if (!a.a) return k;
            a = a.a[0].b || a.a[0].a;
            if (!a || 2 > a.length) return k;
            var b = a.length - 1;
            return 0 == a[0].Cd && 0 == a[b] ? k : {
                start: a[0].Cd,
                end: a[b].Cd
            }
        };

        function cm() {}
        var dm = {
                qr: "anchored",
                Mt: "donation",
                Wt: "highlightText",
                bu: "label",
                uu: "popup",
                Iu: "speech",
                Pu: "title"
            },
            em = {
                Vt: "highlight",
                sr: "pause",
                Nu: "text",
                Ou: "thumbnail"
            };
        cm.prototype.Ia = function(a) {
            this.id = yl(a, "id", "REQUIRED");
            this.author = yl(a, "author", "OPTIONAL");
            this.type = Dl(a, "type", em, "REQUIRED");
            this.style = Dl(a, "style", dm, "OPTIONAL", "");
            this.g = Cl(a, "TEXT", "OPTIONAL");
            this.a = Jl(a, "segment", am, "REQUIRED");
            this.e = Jl(a, "action", Ul, "REPEATED");
            this.trigger = Jl(a, "trigger", Pl, "REPEATED");
            this.b = Jl(a, "appearance", Wl, "OPTIONAL");
            this.b || (this.b = new Wl)
        };

        function fm(a) {
            if (!a.e) return k;
            for (var b in a.e)
                if (a.e[b].url) return a.e[b].url;
            return k
        }

        function gm(a) {
            return !a.e ? l : a.e.some(function(a) {
                return a.trigger && "click" == a.trigger
            })
        }

        function hm(a) {
            return (a = (a = a.a && a.a.a ? a.a.a[0] : k) ? a.b || a.a : k) ? new Sb(a[0].x, a[0].y, a[0].Yf, a[0].Xf) : new Sb(0, 0, 0, 0)
        }

        function im(a) {
            return !a.a || !a.a.a ? k : (a = a.a.a[0].a) ? new F(a[0].Ql, a[0].Rl) : k
        }

        function jm(a) {
            return !a.e ? k : (a = a.e.filter(function(a) {
                return "pause" == a.type
            })) ? a[0] : k
        };

        function km() {
            this.na = [];
            this.F = [];
            this.Cb = []
        }
        km.prototype.Md = k;
        km.prototype.rb = k;
        km.prototype.Eg = j;
        var lm = [2, 2, 6, 6, 0];
        km.prototype.clear = function() {
            this.na.length = 0;
            this.F.length = 0;
            this.Cb.length = 0;
            delete this.Md;
            delete this.rb;
            delete this.Eg;
            return this
        };

        function mm(a, b, c) {
            0 == a.na[a.na.length - 1] ? a.Cb.length -= 2 : (a.na.push(0), a.F.push(1));
            a.Cb.push(b, c);
            a.rb = a.Md = [b, c]
        }
        km.prototype.a = function(a) {
            var b = this.na[this.na.length - 1];
            b == k && e(Error("Path cannot start with lineTo"));
            1 != b && (this.na.push(1), this.F.push(0));
            for (b = 0; b < arguments.length; b += 2) {
                var c = arguments[b],
                    d = arguments[b + 1];
                this.Cb.push(c, d)
            }
            this.F[this.F.length - 1] += b / 2;
            this.rb = [c, d]
        };

        function nm(a) {
            var b = a.na[a.na.length - 1];
            b == k && e(Error("Path cannot start with close"));
            4 != b && (a.na.push(4), a.F.push(1), a.rb = a.Md)
        }

        function om(a, b, c, d, f) {
            var g = a.rb[0] - b * Math.cos(d * Math.PI / 180) + b * Math.cos((d + f) * Math.PI / 180),
                i = a.rb[1] - c * Math.sin(d * Math.PI / 180) + c * Math.sin((d + f) * Math.PI / 180);
            a.na.push(3);
            a.F.push(1);
            a.Cb.push(b, c, d, f, g, i);
            a.Eg = l;
            a.rb = [g, i]
        }

        function pm(a, b) {
            for (var c = a.Cb, d = 0, f = 0, g = a.na.length; f < g; f++) {
                var i = a.na[f],
                    m = lm[i] * a.F[f];
                b(i, c.slice(d, d + m));
                d += m
            }
        }
        km.prototype.Z = function() {
            var a = new this.constructor;
            a.na = this.na.concat();
            a.F = this.F.concat();
            a.Cb = this.Cb.concat();
            a.Md = this.Md && this.Md.concat();
            a.rb = this.rb && this.rb.concat();
            a.Eg = this.Eg;
            return a
        };
        km.prototype.isEmpty = function() {
            return 0 == this.na.length
        };

        function qm(a) {
            this.b = a;
            this.a = []
        }
        z(qm, Ub);
        var rm = [];
        qm.prototype.N = function(a, b, c, d, f) {
            r(b) || (rm[0] = b, b = rm);
            for (var g = 0; g < b.length; g++) this.a.push(ic(a, b[g], c || this, d || l, f || this.b || this));
            return this
        };
        qm.prototype.e = function(a, b, c, d, f) {
            if (r(b))
                for (var g = 0; g < b.length; g++) this.e(a, b[g], c, d, f);
            else {
                a: {
                    c = c || this;f = f || this.b || this;d = !!d;
                    if (a = mc(a, b, d))
                        for (b = 0; b < a.length; b++)
                            if (!a[b].zc && a[b].yd == c && a[b].capture == d && a[b].Ff == f) {
                                a = a[b];
                                break a
                            } a = k
                }
                a && (a = a.key, nc(a), Ia(this.a, a))
            }
            return this
        };

        function sm(a) {
            B(a.a, nc);
            a.a.length = 0
        }
        qm.prototype.D = function() {
            qm.s.D.call(this);
            sm(this)
        };
        qm.prototype.handleEvent = function() {
            e(Error("EventHandler.handleEvent not implemented"))
        };

        function tm() {}
        ca(tm);
        tm.prototype.a = 0;
        tm.getInstance();

        function um(a) {
            this.u = a || dd()
        }
        z(um, sc);
        n = um.prototype;
        n.Jp = tm.getInstance();
        n.Ul = k;
        n.Za = l;
        n.V = k;
        n.Dd = k;
        n.yg = k;
        n.Oe = k;
        n.Iq = l;
        n.getId = function() {
            return this.Ul || (this.Ul = ":" + (this.Jp.a++).toString(36))
        };
        n.O = function() {
            return this.V
        };
        n.cj = function(a) {
            this.Dd && this.Dd != a && e(Error("Method not supported"));
            um.s.cj.call(this, a)
        };
        n.yi = function() {
            this.V = this.u.a.createElement("div")
        };
        n.Jb = function(a) {
            this.Za && e(Error("Component already rendered"));
            this.V || this.yi();
            a ? a.insertBefore(this.V, k) : this.u.a.body.appendChild(this.V);
            (!this.Dd || this.Dd.Za) && this.ig()
        };
        n.ig = function() {
            this.Za = j;
            vm(this, function(a) {
                !a.Za && a.O() && a.ig()
            })
        };
        n.Le = function() {
            vm(this, function(a) {
                a.Za && a.Le()
            });
            this.B && sm(this.B);
            this.Za = l
        };
        n.D = function() {
            um.s.D.call(this);
            this.Za && this.Le();
            this.B && (this.B.Ta(), delete this.B);
            vm(this, function(a) {
                a.Ta()
            });
            !this.Iq && this.V && M(this.V);
            this.Dd = this.V = this.Oe = this.yg = k
        };

        function vm(a, b) {
            a.yg && B(a.yg, b, h)
        }
        n.removeChild = function(a, b) {
            if (a) {
                var c = t(a) ? a : a.getId(),
                    a = this.Oe && c ? (c in this.Oe ? this.Oe[c] : h) || k : k;
                if (c && a) {
                    var d = this.Oe;
                    c in d && delete d[c];
                    Ia(this.yg, a);
                    b && (a.Le(), a.V && M(a.V));
                    c = a;
                    c == k && e(Error("Unable to set parent component"));
                    c.Dd = k;
                    um.s.cj.call(c, k)
                }
            }
            a || e(Error("Child is not in parent component"));
            return a
        };

        function wm(a, b, c, d, f) {
            this.u = f || dd();
            this.width = a;
            this.height = b;
            this.a = c || k;
            this.M = d || k
        }
        z(wm, um);
        wm.prototype.e = k;
        wm.prototype.g = 0;
        wm.prototype.k = 0;
        wm.prototype.xd = function() {
            return this.Za ? Kd(this.O()) : "number" == typeof this.width && "number" == typeof this.height ? new G(this.width, this.height) : k
        };

        function xm(a) {
            var b = a.xd();
            return b ? b.width / (a.a ? new G(a.a, a.M) : a.xd()).width : 0
        };

        function ym() {};

        function zm(a, b) {
            this.a = a;
            this.b = b == k ? 1 : b
        }
        z(zm, ym);

        function Am(a, b) {
            this.a = a;
            this.b = b
        };

        function Bm(a, b) {
            this.V = a;
            this.il = b;
            this.Zh = l
        }
        z(Bm, sc);
        n = Bm.prototype;
        n.il = k;
        n.V = k;
        n.O = function() {
            return this.V
        };
        n.addEventListener = function(a, b, c, d) {
            ic(this.V, a, b, c, d)
        };
        n.removeEventListener = function(a, b, c, d) {
            lc(this.V, a, b, c, d)
        };
        n.D = function() {
            Bm.s.D.call(this);
            pc(this.V)
        };

        function Cm(a, b, c, d) {
            Bm.call(this, a, b);
            a = this.il;
            b = this.O();
            c ? (b.setAttribute("stroke", c.b), c = c.a, t(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / xm(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
            c = this.O();
            d instanceof zm ? (c.setAttribute("fill", d.a), c.setAttribute("fill-opacity", d.b)) : c.setAttribute("fill", "none")
        }
        z(Cm, Bm);

        function Dm(a, b) {
            Bm.call(this, a, b)
        }
        z(Dm, Bm);

        function Em(a, b, c, d) {
            Cm.call(this, a, b, c, d)
        }
        z(Em, Cm);

        function Fm(a, b) {
            Bm.call(this, a, b)
        }
        z(Fm, Dm);
        Fm.prototype.clear = function() {
            rd(this.O())
        };

        function Gm(a, b, c, d) {
            Cm.call(this, a, b, c, d)
        }
        z(Gm, Em);

        function Hm(a, b, c, d, f) {
            wm.call(this, a, b, c, d, f);
            this.b = {};
            this.U = yb && !E(526);
            this.ea = new qm(this)
        }
        var Im;
        z(Hm, wm);
        var Jm = 0;

        function Km(a, b, c) {
            a = a.u.a.createElementNS("http://www.w3.org/2000/svg", b);
            if (c)
                for (var d in c) a.setAttribute(d, c[d]);
            return a
        }
        n = Hm.prototype;
        n.yi = function() {
            var a = Km(this, "svg", {
                    width: this.width,
                    height: this.height,
                    overflow: "hidden"
                }),
                b = Km(this, "g");
            this.o = Km(this, "defs");
            this.e = new Fm(b, this);
            a.appendChild(this.o);
            a.appendChild(b);
            this.V = a;
            if (this.a || this.g || this.k) this.O().setAttribute("preserveAspectRatio", "none"), this.U ? this.wf() : this.O().setAttribute("viewBox", this.g + " " + this.k + " " + (this.a ? this.a + " " + this.M : ""))
        };
        n.wf = function() {
            if (this.Za && (this.a || this.g || !this.k)) {
                var a = this.xd();
                0 == a.width ? this.O().style.visibility = "hidden" : (this.O().style.visibility = "", this.e.O().setAttribute("transform", "scale(" + a.width / this.a + " " + a.height / this.M + ") translate(" + -this.g + " " + -this.k + ")"))
            }
        };
        n.xd = function() {
            if (!xb) return this.Za ? Kd(this.O()) : Hm.s.xd.call(this);
            var a = this.width,
                b = this.height,
                c = t(a) && -1 != a.indexOf("%"),
                d = t(b) && -1 != b.indexOf("%");
            if (!this.Za && (c || d)) return k;
            var f, g;
            c && (f = this.O().parentNode, g = Kd(f), a = parseFloat(a) * g.width / 100);
            d && (f = f || this.O().parentNode, g = g || Kd(f), b = parseFloat(b) * g.height / 100);
            return new G(a, b)
        };
        n.clear = function() {
            this.e.clear();
            rd(this.o);
            this.b = {}
        };

        function Lm(a, b, c, d) {
            b = Km(a, "path", {
                d: Mm(b)
            });
            c = new Gm(b, a, c, d);
            a.e.O().appendChild(c.O())
        }

        function Mm(a) {
            var b = [];
            pm(a, function(a, d) {
                switch (a) {
                    case 0:
                        b.push("M");
                        Array.prototype.push.apply(b, d);
                        break;
                    case 1:
                        b.push("L");
                        Array.prototype.push.apply(b, d);
                        break;
                    case 2:
                        b.push("C");
                        Array.prototype.push.apply(b, d);
                        break;
                    case 3:
                        var f = d[3];
                        b.push("A", d[0], d[1], 0, 180 < Math.abs(f) ? 1 : 0, 0 < f ? 1 : 0, d[4], d[5]);
                        break;
                    case 4:
                        b.push("Z")
                }
            });
            return b.join(" ")
        }
        n.ig = function() {
            var a = this.xd();
            Hm.s.ig.call(this);
            a || this.dispatchEvent("resize");
            if (this.U) {
                var a = this.width,
                    b = this.height;
                "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && this.ea.N(Nm(), "tick", this.wf);
                this.wf()
            }
        };
        n.Le = function() {
            Hm.s.Le.call(this);
            this.U && this.ea.e(Nm(), "tick", this.wf)
        };
        n.D = function() {
            delete this.b;
            delete this.o;
            delete this.e;
            Hm.s.D.call(this)
        };

        function Nm() {
            Im || (Im = new tc(400), Im.start());
            return Im
        };

        function Om(a, b) {
            this.start = a < b ? a : b;
            this.end = a < b ? b : a
        }
        Om.prototype.Z = function() {
            return new Om(this.start, this.end)
        };

        function Pm(a, b, c) {
            var d = document.createElementNS("http://www.w3.org/2000/svg", a);
            b && Xa(b, function(a, b) {
                d.setAttribute(b, a)
            });
            for (var f = 2; f < arguments.length; f++) d.appendChild(arguments[f]);
            return d
        }

        function Qm(a, b) {
            var c;
            c = ":" + (tm.getInstance().a++).toString(36);
            b.setAttribute("result", c);
            a.appendChild(b);
            return c
        };

        function Rm(a, b) {
            var c = Qm(a, Pm("feGaussianBlur", {
                    "in": b,
                    stdDeviation: "1.8"
                })),
                c = Qm(a, Pm("feDiffuseLighting", {
                    "in": c,
                    surfaceScale: "4",
                    diffuseConstant: "1"
                }, Pm("feDistantLight", {
                    azimuth: "270",
                    elevation: "15",
                    "lighting-color": "white"
                }))),
                c = Qm(a, Pm("feComposite", {
                    "in": c,
                    in2: b,
                    operator: "in"
                }));
            return Qm(a, Pm("feComposite", {
                in2: c,
                "in": b,
                operator: "arithmetic",
                k2: 1,
                k3: 0.5,
                k4: 0
            }))
        }

        function Sm(a, b) {
            var c = Qm(a, Pm("feOffset", {
                    "in": b,
                    dx: "3",
                    dy: "3"
                })),
                c = Qm(a, Pm("feGaussianBlur", {
                    "in": c,
                    stdDeviation: "3"
                })),
                c = Qm(a, Pm("feColorMatrix", {
                    "in": c,
                    type: "matrix",
                    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
                })),
                d = Qm(a, Pm("feColorMatrix", {
                    "in": b,
                    type: "matrix",
                    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
                })),
                d = Qm(a, Pm("feGaussianBlur", {
                    "in": d,
                    stdDeviation: "1"
                })),
                c = Qm(a, Pm("feComposite", {
                    operator: "out",
                    "in": c,
                    in2: d
                }));
            return Qm(a, Pm("feComposite", {
                operator: "over",
                "in": b,
                in2: c
            }))
        }

        function Tm(a, b) {
            return b
        }

        function Um(a) {
            var b = Pm("filter", {
                    filterUnits: "userSpaceOnUse"
                }),
                c = "SourceGraphic";
            B(a, function(a) {
                a: {
                    switch (a) {
                        case "bevel":
                            a = Rm;
                            break a;
                        case "dropshadow":
                            a = Sm;
                            break a
                    }
                    a = Tm
                }
                c = a(b, c)
            });
            return b
        }

        function Vm(a) {
            a = Ca(a, function(a) {
                return a in Wm
            });
            Oa(a, function(a, c) {
                return Wm[a] - Wm[c]
            });
            return a
        }

        function Xm(a, b) {
            if (!b) return k;
            var c = "effects:" + (b ? b.join("|") : ""),
                d = c in a.b ? a.b[c] : k;
            if (d) return d;
            d = Um(b);
            if (0 < d.childNodes.length)
                if (c in a.b) c = a.b[c];
                else {
                    var f = "_svgdef_" + Jm++;
                    d.setAttribute("id", f);
                    a.b[c] = f;
                    a.o.appendChild(d);
                    c = f
                }
            else c = k;
            return c
        }

        function Ym(a) {
            return Fa(a, function(a) {
                return "dropshadow" == a
            }) ? new Qb(0, 8, 8, 0) : new Qb(0, 0, 0, 0)
        }
        var Wm = {
            bevel: 1,
            dropshadow: 2
        };

        function Zm(a, b) {
            return new Sb(a.width * b.left / 100 + a.left, a.height * b.top / 100 + a.top, a.width * b.width / 100, a.height * b.height / 100)
        };

        function $m() {}
        $m.prototype.b = l;
        $m.prototype.a = k;

        function an(a, b, c) {
            a.a ? (Id(a.a.O(), b, c), a.a.clear()) : (a.a = new Hm(b, c), a.a.yi());
            return a.a
        }
        $m.prototype.O = function() {
            return this.a ? this.a.O() : k
        };
        $m.prototype.e = function() {};

        function bn() {}
        z(bn, $m);
        bn.prototype.e = function(a, b) {
            var c = cn,
                d = hm(a);
            if (!(0 >= d.width || 0 >= d.height)) {
                var f = a.b || new Wl,
                    g = Zm(b, d),
                    i = dn(g, f.a),
                    d = an(this, i.width, i.height),
                    m = f.Lf,
                    o = this.b && gm(a),
                    m = (m += o ? 1 : 0) ? new Am(m, o ? f.pe : f.Kf) : k,
                    c = new zm(f.pd, c(this.b, f.od));
                en(d, new Sb(0, 0, g.width, g.height), m, c);
                c = d.O();
                fn(c, "annotation-shape");
                fn(c, "annotation-popup-shape");
                Ad(c, i.left, i.top);
                Id(c, i.width, i.height);
                f.a && (i = Fa(c.childNodes, function(a) {
                    return "g" == a.tagName
                })) && gn(i, Xm(d, Vm(f.a)))
            }
        };

        function hn() {}
        z(hn, $m);
        hn.prototype.e = function(a, b) {
            var c = cn,
                d = hm(a);
            if (!(0 >= d.width || 0 >= d.height)) {
                var f = a.b || new Wl,
                    g = Zm(b, d),
                    d = dn(g, f.a),
                    i = an(this, d.width, d.height);
                en(i, new Sb(0, 0, g.width, g.height), new Am(f.ii, f.pd), new zm("#000", 0));
                g = i.O();
                fn(g, "annotation-shape");
                g.style.opacity = c(this.b, f.od);
                Ad(g, d.left, d.top);
                Id(g, d.width, d.height)
            }
        };

        function jn() {}
        z(jn, $m);
        var Z = {
            eg: "t",
            cg: "l",
            bg: "b",
            dg: "r",
            Rm: "i",
            Ru: ""
        };
        jn.prototype.e = function(a, b) {
            var c = cn,
                d = a.b || new Wl,
                f = d.Lf,
                g = this.b && gm(a),
                f = (f += g ? 1 : 0) ? new Am(f, g ? d.pe : d.Kf) : k,
                c = new zm(d.pd, c(this.b, d.od)),
                g = hm(a);
            if (!(0 >= g.width || 0 >= g.height)) {
                var i = Zm(b, g);
                if (g = im(a)) {
                    var m = new F(b.width * g.x / 100 + b.left, b.height * g.y / 100 + b.top),
                        g = i.Z();
                    Tb(g, new Sb(m.x, m.y, 1, 1));
                    var o = dn(g, d.a),
                        g = an(this, o.width, o.height),
                        i = new Sb(i.left - o.left, i.top - o.top, i.width, i.height),
                        m = new F(m.x - o.left, m.y - o.top);
                    this.g = 4.5 * b.height / 100;
                    kn(this, g, i, m, f, c);
                    f = g.O();
                    fn(f, "annotation-shape");
                    fn(f, "annotation-speech-shape");
                    Ad(f, o.left, o.top);
                    Id(f, o.width, o.height);
                    d.a && (f = Fa(f.childNodes, function(a) {
                        return "g" == a.tagName
                    })) && gn(f, Xm(g, Vm(d.a)))
                }
            }
        };

        function kn(a, b, c, d, f, g) {
            var i = f ? f.a / 2 : 0,
                m = ln(c, d),
                a = a.k(c, d, m),
                o = d.x,
                d = d.y,
                s = c.width,
                y = c.height,
                w = c.left,
                c = c.top,
                C = new km;
            mm(C, w + 4 + i, c + i);
            m == Z.eg && (C.a(a.start, c + i), C.a(o, d), C.a(a.end, c + i));
            C.a(w + s - 4 - i, c + i);
            om(C, 4, 4, -90, 90);
            m == Z.dg && (C.a(w + s - i, a.start), C.a(o, d), C.a(w + s - i, a.end));
            C.a(w + s - i, c + y - 4 - i);
            om(C, 4, 4, 0, 90);
            m == Z.bg && (C.a(a.end, c + y - i), C.a(o, d), C.a(a.start, c + y - i));
            C.a(w + 4 + i, c + y - i);
            om(C, 4, 4, 90, 90);
            m == Z.cg && (C.a(w + i, a.end), C.a(o, d), C.a(w + i, a.start));
            C.a(w + i, c + 4 + i);
            om(C, 4, 4, 180, 90);
            nm(C);
            Lm(b, C,
                f, g)
        }

        function ln(a, b) {
            var c = a.top - b.y,
                d = b.x - a.left - a.width,
                f = b.y - a.top - a.height,
                g = a.left - b.x,
                i = Math.max(c, d, f, g);
            if (0 > i) return Z.Rm;
            switch (i) {
                case c:
                    return Z.eg;
                case d:
                    return Z.dg;
                case f:
                    return Z.bg;
                case g:
                    return Z.cg
            }
            return Z.Rm
        }
        jn.prototype.k = function(a, b, c) {
            function d(a, b, c) {
                i = Math.min(Math.max(c - 2 * f, 0), g);
                m = Ob(a - i / 2, b + f, b + c - i - f)
            }
            var f = 4,
                g = this.g,
                i = 0,
                m = 0;
            c == Z.eg || c == Z.bg ? d(b.x, a.left, a.width) : (c == Z.cg || c == Z.dg) && d(b.y, a.top, a.height);
            return new Om(m, m + i)
        };

        function mn() {}
        z(mn, jn);
        mn.prototype.k = function(a, b, c) {
            function d(a, b, c) {
                i = Math.min(Math.max(c - 2 * f, 0), g);
                m = a <= b + c / 2 ? Math.max(b + c / 4 - i / 2, b + f) : Math.min(b + 3 * c / 4 - i / 2, b + c - i - f)
            }
            var f = 4,
                g = this.g,
                i = 0,
                m = 0;
            c == Z.eg || c == Z.bg ? d(b.x, a.left, a.width) : (c == Z.cg || c == Z.dg) && d(b.y, a.top, a.height);
            return new Om(m, m + i)
        };

        function en(a, b, c, d) {
            var f = new km,
                g = c ? c.a / 2 + 1 : 0;
            mm(f, b.left + 4 + g, b.top + g);
            f.a(b.left + b.width - 4 - g, b.top + g);
            om(f, 4, 4, -90, 90);
            f.a(b.left + b.width - g, b.top + b.height - 4 - g);
            om(f, 4, 4, 0, 90);
            f.a(b.left + 4 + g, b.top + b.height - g);
            om(f, 4, 4, 90, 90);
            f.a(b.left + g, b.top + 4 + g);
            om(f, 4, 4, 180, 90);
            nm(f);
            Lm(a, f, c, d)
        }

        function fn(a, b) {
            var c = a.getAttribute("class"),
                c = c ? c.split(/\s+/) : []; - 1 == c.indexOf(b) && (c.push(b), a.setAttribute("class", c.join(" ")))
        }

        function gn(a, b) {
            b && a.setAttribute("filter", "url(#" + b + ")")
        }

        function cn(a, b) {
            return a ? Math.max(b, 0.9) : b
        }

        function dn(a, b) {
            var c = new Qb(a.top, a.left + a.width, a.top + a.height, a.left),
                d = Ym(b);
            ia(d) ? (c.top -= d.top, c.right += d.right, c.bottom += d.bottom, c.left -= d.left) : (c.top -= d, c.right += h, c.bottom += h, c.left -= NaN);
            return new Sb(c.left, c.top, c.right - c.left, c.bottom - c.top)
        };

        function nn(a, b, c) {
            this.a = a;
            this.e = 0;
            this.k = b;
            c && (this.u = c)
        }
        nn.prototype.u = 70;
        nn.prototype.b = l;
        nn.prototype.start = function(a) {
            this.C = x();
            this.e = a;
            this.o = this.C + this.e;
            this.b = j;
            var a = this.a,
                b = a.getAttribute("class"),
                b = b ? b.split(/\s+/) : [],
                c = b.indexOf("hid"); - 1 != c && (b.splice(c, 1), a.setAttribute("class", b.join(" ")));
            ie(this.g);
            this.g = he(u(this.B, this), this.u)
        };

        function on(a) {
            a.b = l;
            fn(a.a, "hid");
            a.g && ie(a.g)
        }
        nn.prototype.B = function() {
            if (this.b) {
                var a = x(),
                    b;
                b = a >= this.o ? 0 : 1 - (a - this.C) / this.e;
                var c = L("countdowntimer-diminishing-pieslice", this.a),
                    d = parseInt(this.a.getAttribute("width"), 10),
                    f = new km,
                    g = d / 2 - 5;
                mm(f, d / 2, d / 2);
                f.a(d / 2, 5);
                om(f, g, g, -90, 360 * -b);
                f.a(d / 2, d / 2);
                nm(f);
                c.setAttribute("d", Mm(f));
                a >= this.o && (on(this), this.k && this.k())
            }
        };

        function pn() {
            var a = new uh;
            a && th(a) && (this.e = new wh(a), this.a = new wh(a), this.b = new wh(a))
        }
        pn.prototype.b = k;
        pn.prototype.a = k;
        pn.prototype.e = k;
        pn.prototype.getVolume = function() {
            var a = {
                volume: 100,
                muted: l,
                nonNormalized: 100
            };
            if (this.b) {
                var b = {};
                try {
                    b = this.b.get("yt-player-volume") || {}
                } catch (c) {
                    this.b.a.tc("yt-player-volume")
                }
                a.volume = isNaN(b.volume) ? 100 : Ob(b.volume, 0, 100);
                a.nonNormalized = isNaN(b.nonNormalized) ? a.volume : b.nonNormalized;
                a.muted = b.muted == h ? l : b.muted
            }
            return a
        };
        var $ = q("yt.timing") || {};
        pa("yt.timing", $);
        $.hv = 0;
        $.fv = 0;
        $.Gb = function(a, b) {
            var c = $.timer || {};
            c[a] = b ? b : x();
            $.timer = c
        };
        $.info = function(a, b) {
            var c = $.info_args || {};
            c[a] = b;
            $.info_args = c
        };
        $.gf = function() {
            var a = ee("TIMING_ACTION"),
                b = $.timer || {},
                c = $.info_args || {},
                d = b.start,
                f = "",
                g = [],
                i = [];
            delete b.start;
            $.srt && (f = "&srt=" + $.srt);
            b.aft && b.plev && (b.aft = Math.min(b.aft, b.plev));
            for (var m in b) g.push(m + "." + Math.round(b[m] - d));
            for (m in c) i.push(m + "=" + c[m]);
            b.vr && b.gv && g.push("vl." + Math.round(b.vr - b.gv));
            !b.aft && b.vr && b.cl ? b.cl > b.vr ? g.push("aft." + Math.round(b.cl - d)) : g.push("aft." + Math.round(b.vr - d)) : !b.aft && b.vr ? g.push("aft." + Math.round(b.vr - d)) : b.aft || g.push("aft." + Math.round(b.ol - d));
            S(["https:" ==
                window.location.protocol ? "http://web.archive.org/web/20120609184927/https://gg.google.com/csi" : "http://web.archive.org/web/20120609184927/http://csi.gstatic.com/csi", "?v=2&s=youtube&action=", a, f, "&", i.join("&"), "&rt=", g.join(",")
            ].join(""))
        };
        $.mr = function() {
            var a = ee("TIMING_ACTION"),
                b = $.timer || {};
            a && b.start && ($.wff && -1 != a.indexOf("ajax") && b.vr && b.cl ? $.gf() : $.wff && -1 == a.indexOf("ajax") && b.vr ? $.gf() : !$.wff && (b.ol || b.aft) && $.gf())
        };
        $.ev = function() {
            $.Gb("ol");
            $.mr()
        };

        function qn(a, b) {
            b || (b = {});
            var c = window,
                d = "undefined" != typeof a.href ? a.href : "" + a,
                f = b.target || a.target,
                g = [],
                i;
            for (i in b) switch (i) {
                case "width":
                case "height":
                case "top":
                case "left":
                    g.push(i + "=" + b[i]);
                    break;
                case "target":
                case "noreferrer":
                    break;
                default:
                    g.push(i + "=" + (b[i] ? 1 : 0))
            }
            g = g.join(",");
            if (b.noreferrer) {
                if (c = c.open("", f, g)) D && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), c.opener = k, yb ? c.location.href = d : (d = ta(d), c.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'), c.document.close())
            } else c =
                c.open(d, f, g);
            return c
        };
        var rn = q("yt.prefs.UserPrefs.prefs_") || {};
        pa("yt.prefs.UserPrefs.prefs_", rn);
        var sn = q("yt.pubsub.instance_") || new H;
        H.prototype.subscribe = H.prototype.n;
        H.prototype.unsubscribeByKey = H.prototype.Zf;
        H.prototype.publish = H.prototype.j;
        H.prototype.clear = H.prototype.clear;
        pa("yt.pubsub.instance_", sn);

        function tn(a) {
            var b = q("yt.pubsub.instance_");
            b && b.subscribe("panelhidden", function() {
                var b = arguments;
                P(function() {
                    a.apply(p, b)
                }, 0)
            }, h)
        }

        function un(a, b) {
            var c = q("yt.pubsub.instance_");
            c && c.publish.apply(c, arguments)
        };
        D || xb && E("1.9.3");
        new H;
        document.createElement("input");
        var vn = RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
        var wn = ["left", "right", "center"],
            xn = {
                id: 0,
                He: 0,
                Bf: 7,
                Cf: 50,
                zr: 80,
                Df: 95,
                Tb: 15,
                $h: 100,
                isVisible: j,
                textAlign: wn[2],
                xc: 0,
                backgroundColor: "#080808",
                xf: "#fff",
                opacity: 0.8
            },
            yn = {
                id: 99,
                He: 1,
                Bf: 0,
                Cf: 5,
                Df: 7,
                Tb: 2,
                $h: 32,
                textAlign: wn[0]
            };

        function zn(a) {
            this.Ig = a.Wh;
            this.Om = a.He;
            this.Ya = a.Ya || this.Ya
        }
        n = zn.prototype;
        n.Ig = 0;
        n.Om = 0;
        n.Ya = 0;
        n.Fa = function() {
            return this.Ig
        };
        n.Lc = function() {
            return this.Om
        };
        n.toString = function() {
            return this.Ig + ", " + this.Ya
        };

        function An(a) {
            zn.call(this, a);
            this.Hg = a.text || this.Hg;
            this.vf = a.Vh || this.vf;
            this.Ag = a.params.append || this.Ag;
            this.Qm = a.params.row || this.Qm;
            this.Pm = a.params.ar || this.Pm
        }
        z(An, zn);
        n = An.prototype;
        n.Hg = "";
        n.Ag = l;
        n.Qm = 0;
        n.Pm = 0;
        n.vf = 0;
        n.Ub = function() {
            return this.Hg
        };
        n.toString = function() {
            return this.Ig + ", " + this.Ya + ": " + this.Hg
        };

        function Bn(a) {
            var b = a.firstChild && a.firstChild.nodeValue || "",
                c = 1E3 * parseFloat(a.getAttribute("start") || 0);
            a.getAttribute("t") && (c = parseInt(a.getAttribute("t"), 10));
            var d = 1E3 * parseFloat(a.getAttribute("dur") || 0);
            a.getAttribute("d") && (d = parseFloat(a.getAttribute("d")));
            var f = parseInt(a.getAttribute("w"), 10) || 0,
                b = {
                    Wh: c,
                    Ya: d,
                    text: b,
                    Vh: f,
                    He: 5,
                    params: {}
                };
            a.getAttribute("r") && (b.params.row = parseInt(a.getAttribute("r"), 10));
            a.getAttribute("c") && (b.params.ar = parseInt(a.getAttribute("c"), 10));
            a.getAttribute("append") &&
                (b.He = 6, b.params.append = j);
            return new An(b)
        }

        function Cn(a) {
            zn.call(this, a);
            this.id = a.Vh || this.id;
            this.params = a.params
        }
        z(Cn, zn);
        Cn.prototype.id = 0;
        Cn.prototype.params = k;
        Cn.prototype.b = "";
        Cn.prototype.a = l;

        function Dn() {
            return new Cn({
                Wh: -2147483648,
                Ya: 4294967295,
                params: xn
            })
        };

        function En(a) {
            this.b = [];
            this.e = [];
            this.a = {};
            if (a && (a = bk(a)) && a.firstChild) switch (this.yc = a, this.yc.firstChild.tagName) {
                case "timedtext":
                    for (var a = this.yc.firstChild.childNodes, b = 0, c = a.length; b < c; b++) switch (a[b].tagName) {
                        case "window":
                            var d = a[b],
                                f = parseInt(d.getAttribute("id"), 10),
                                g = h;
                            a: {
                                var i = this.a[f];
                                if (!d.getAttribute("t") && !d.getAttribute("start")) g = k;
                                else {
                                    g = parseInt(d.getAttribute("t"), 10);
                                    d.getAttribute("start") && (g = 1E3 * parseFloat(d.getAttribute("start")));
                                    i && (i.Fa() + i.Ya >= g ? i.Ya = g : i = k);
                                    switch (d.getAttribute("op")) {
                                        case "kill":
                                            g =
                                                k;
                                            break a;
                                        case "define":
                                            i = k
                                    }
                                    i ? i.e = j : i = Dn();
                                    var m = {};
                                    v(m, i ? i.params : xn);
                                    d.getAttribute("id") && (m.id = d.getAttribute("id"));
                                    d.getAttribute("op") && (m.Br = d.getAttribute("op"));
                                    d.getAttribute("rc") && (m.Tb = parseInt(d.getAttribute("rc"), 10));
                                    d.getAttribute("cc") && (m.$h = parseInt(d.getAttribute("cc"), 10));
                                    d.getAttribute("ap") && (i = parseInt(d.getAttribute("ap"), 10), m.Bf = 0 > i || 8 < i ? 7 : i);
                                    d.getAttribute("ah") && (m.Cf = parseInt(d.getAttribute("ah"), 10));
                                    d.getAttribute("av") && (m.Df = parseInt(d.getAttribute("av"), 10));
                                    d.getAttribute("id") && (m.id = parseInt(d.getAttribute("id"), 10) || 0);
                                    d.getAttribute("vs") && (m.isVisible = Boolean(d.getAttribute("vs")));
                                    d.getAttribute("ju") && (m.textAlign = wn[parseInt(d.getAttribute("ju"), 10)]);
                                    d.getAttribute("pd") && (m.xc = 1, 0 == parseInt(d.getAttribute("pd"), 10) && (m.xc = 0));
                                    d.getAttribute("bc") && (m.backgroundColor = parseInt(d.getAttribute("bc"), 16));
                                    d.getAttribute("bo") && (m.opacity = parseInt(d.getAttribute("bo"), 10) / 100);
                                    d.getAttribute("fc") && (m.xf = parseInt(d.getAttribute("fc"), 16));
                                    d.getAttribute("sd") &&
                                        (m.Lh = parseInt(d.getAttribute("sd"), 10));
                                    i = parseInt(d.getAttribute("d"), 10) || 1E3 * parseFloat(d.getAttribute("dur")) || 2147483647;
                                    d = {
                                        Wh: g,
                                        Ya: i,
                                        params: m,
                                        Vh: parseInt(d.getAttribute("id"), 10)
                                    };
                                    g = new Cn(d)
                                }
                            }
                            this.a[f] = g;
                            this.e.push(g);
                            break;
                        case "text":
                            f = Bn(a[b]), this.b.push(f), d = f.vf, this.a[d] && (d = this.a[d], f = f.Ub(), "" != d.b && (d.a = j), d.b += f)
                    }
                    break;
                default:
                    this.e.push(Dn());
                    a = this.yc.firstChild.childNodes;
                    b = 0;
                    for (c = a.length; b < c; b++) this.b.push(Bn(a[b]))
            }
        }
        En.prototype.b = k;
        En.prototype.e = k;
        En.prototype.a = k;

        function Fn(a) {
            a = a || {};
            this.ji = a.format;
            this.b = a.languageCode || "";
            this.ze = a.languageName;
            this.La = a.kind;
            this.Yb = a.name;
            this.bl = a.id;
            this.di = a.is_servable;
            this.Tf = a.is_default;
            this.Vf = a.is_translateable;
            a.translationLanguage && (this.a = new Gn(a.translationLanguage))
        }

        function Hn(a) {
            var b = {
                format: a.ji,
                languageCode: a.b,
                languageName: a.ze,
                kind: a.La,
                name: a.Yb,
                id: a.bl,
                is_servable: a.di,
                is_default: a.Tf,
                is_translateable: a.Vf
            };
            a.a && (b.translationLanguage = {
                languageCode: a.a.zd,
                languageName: a.a.Ae,
                languageOriginal: a.a.ki,
                id: a.a.id,
                is_default: a.a.gl
            });
            return b
        }
        n = Fn.prototype;
        n.ze = k;
        n.La = k;
        n.Yb = k;
        n.bl = k;
        n.di = l;
        n.Tf = l;
        n.Vf = l;
        n.ji = 1;
        n.getName = function() {
            return this.Yb
        };

        function In(a) {
            var b = [a.ze];
            if (a.La) {
                var c = "asr" == a.La ? je("HTML5_SUBS_TRANSCRIBED") : a.La;
                b.push(" (", c, ")")
            }
            a.Yb && b.push(" - ", a.Yb);
            a.a && b.push(" >> ", a.a.Ae);
            return b.join("")
        }
        n.toString = function() {
            var a = [this.b, ": ", this.Yb, " (", this.La, ")"];
            this.a && a.push(" >> ", this.a.Ae);
            return a.join("")
        };

        function Gn(a) {
            this.zd = a.languageCode;
            this.Ae = a.languageName;
            this.ki = a.languageOriginal;
            this.id = a.id;
            this.gl = a.is_default
        }
        n = Gn.prototype;
        n.zd = k;
        n.Ae = k;
        n.ki = k;
        n.id = k;
        n.gl = l;

        function Jn(a) {
            this.Pe = [];
            this.Sf = [];
            this.Kd = [];
            if (a && a && a.firstChild) {
                this.yc = a;
                for (var a = this.yc.getElementsByTagName("track"), b = a.length, c = 0; c < b; c++) {
                    var d = parseInt(a[c].getAttribute("formats"), 10) || 1,
                        f = a[c].getAttribute("lang_code"),
                        g = a[c].getAttribute("lang_translated"),
                        i = a[c].getAttribute("name"),
                        m = a[c].getAttribute("kind") || "",
                        o = a[c].getAttribute("id"),
                        s = "true" == a[c].getAttribute("lang_default"),
                        y = "true" == a[c].getAttribute("cantran");
                    Kn(this, new Fn({
                        format: d,
                        languageCode: f,
                        languageName: g,
                        name: i,
                        kind: m,
                        id: o,
                        is_servable: j,
                        is_default: s,
                        is_translateable: y
                    }))
                }
                a = this.yc.getElementsByTagName("target");
                b = a.length;
                for (c = 0; c < b; c++) d = a[c].getAttribute("lang_code"), f = a[c].getAttribute("lang_translated"), g = a[c].getAttribute("lang_original"), i = a[c].getAttribute("id"), m = "true" == a[c].getAttribute("lang_default"), this.Sf.push(new Gn({
                    languageCode: d,
                    languageName: f,
                    languageOriginal: g,
                    id: i,
                    is_default: m
                }))
            }
        }
        n = Jn.prototype;
        n.yc = k;
        n.Pe = k;
        n.Sf = k;
        n.Kd = k;
        n.Bg = -1;

        function Kn(a, b) {
            switch (b.La) {
                case "asr":
                    a.Pe.push(b);
                    break;
                default:
                    if (b.Tf || 0 > a.Bg) a.Bg = a.Kd.length;
                    a.Kd.push(b)
            }
        };

        function Ln(a, b, c, d) {
            this.a = a;
            c ? this.a = af(this.a, {
                hl: c
            }) : (a = Ye(this.a).hl || "", a = a.split("_").join("-"), this.a = af(this.a, {
                hl: a
            }));
            this.b = b;
            this.e = !!d
        }
        Ln.prototype.a = "";
        Ln.prototype.b = k;
        Ln.prototype.e = l;
        Ln.prototype.Ja = k;

        function Mn(a, b) {
            var c = a.Ja.Bg,
                d = a.Ja.Kd;
            0 > c || Nn(a, d[c], b)
        }

        function On(a, b) {
            return Fa(a.Ja.Kd.concat(a.Ja.Pe), function(a) {
                return a.toString() == b
            })
        }

        function Nn(a, b, c) {
            var d = a.a,
                f = {
                    v: a.b,
                    type: "track",
                    lang: b.b,
                    name: b.getName(),
                    kind: b.La,
                    fmt: b.ji
                };
            b.a && (f.tlang = b.a.zd);
            d = af(d, f);
            a = u(function(a) {
                a = new En(a.responseText);
                c(a, b)
            }, a);
            df(d, a)
        }

        function Pn(a, b) {
            var c = a.a,
                d = {
                    type: "list",
                    tlangs: 1,
                    v: a.b,
                    fmts: Number(j)
                };
            a.e && (d.asrs = 1);
            c = af(c, d);
            d = u(function(a) {
                this.Ja = new Jn(a.responseXML);
                b()
            }, a);
            df(c, d)
        };
        new H;

        function Qn(a) {
            if (!a) return l;
            var a = a.replace(/https?:\/\//g, ""),
                b = a.split("/", 1);
            if (!b || 1 > b.length || !b[0]) return l;
            b = b[0].toLowerCase().split(".").reverse();
            return 2 > b.length ? l : ("com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[1]) && -1 == a.indexOf("/redirect?")
        }

        function Rn(a, b) {
            if ("new" == a.target) return -1;
            var c = Sl(a);
            if (!c) return -1;
            var c = c.replace(/https?:\/\//g, ""),
                d;
            if (!(d = !Qn(c))) d = (d = zc(c)[5] || k) && decodeURIComponent(d) || "", d = d.split("/"), d = "/" + (1 < d.length ? d[1] : ""), d = "/watch.php" != d;
            if (d) return -1;
            d = Ye(c);
            if (!d || d.v != b.A || d.list || d.p) return -1;
            c = c.split("#", 2);
            if (!c || 2 > c.length) return -1;
            (c = Xe(c[1])) && c.t ? (d = c.t, c = 0, -1 != d.indexOf("h") && (d = d.split("h"), c = 3600 * d[0], d = d[1]), -1 != d.indexOf("m") && (d = d.split("m"), c = 60 * d[0] + c, d = d[1]), -1 != d.indexOf("s")) ? (d = d.split("s"),
                c = 1 * d[0] + c) : c = 1 * d + c : c = -1;
            return c
        };

        function Sn(a) {
            this.b = a;
            this.a = {}
        }

        function Tn(a, b) {
            var c = {};
            c["iv-event"] = b;
            c["a-id"] = a.id;
            c["a-type"] = Un(a);
            var d = fm(a);
            d && (c["l-type"] = d.type, c.link = escape(Sl(d)));
            return c
        }

        function Un(a) {
            switch (a.type) {
                case "text":
                    switch (a.style) {
                        case "popup":
                        case "donation":
                            return 1;
                        case "speech":
                            return 2;
                        case "title":
                            return 4;
                        default:
                            return 0
                    }
                    case "highlight":
                        return 3;
                    case "thumbnail":
                        return 5;
                    default:
                        return 0
            }
        }

        function Vn(a, b) {
            a.b.j("command_log", "iv", b)
        };

        function Wn(a, b, c, d) {
            this.H = a;
            this.b = b;
            this.Sb = c;
            this.Ge = d;
            this.X = new Ge;
            this.sf = this.aa = this.L = k
        }
        n = Wn.prototype;
        n.H = k;
        n.L = k;
        n.ob = k;
        n.Ga = k;
        n.Sb = k;
        n.Ge = k;
        n.aa = k;
        n.sf = k;
        n.Un = function(a) {
            this.Ge.j("closed", this.H);
            a.stopPropagation()
        };
        n.Tn = function(a) {
            this.Ge.j("click", this.H);
            a.stopPropagation()
        };
        n.Wn = function() {
            this.Ga && N(this.Ga);
            this.ob && Md(this.ob, 1);
            if (this.aa) {
                this.aa.b = j;
                Md(this.L, Xn(this) ? 1 : 0);
                var a = this.Sb.oc;
                a && this.aa.e(this.H, a)
            }
            this.Ge.j("mouseover", this.H)
        };
        n.Vn = function() {
            this.Ga && O(this.Ga);
            this.ob && (this.ob.style.opacity = 0.6);
            if (this.aa) {
                this.aa.b = l;
                Md(this.L, Xn(this) ? 1 : 0);
                var a = this.Sb.oc;
                a && this.aa.e(this.H, a)
            }
            this.Ge.j("mouseout", this.H)
        };

        function Yn(a) {
            if (a.L || a.aa) {
                var b;
                if (a.sf) {
                    b = hm(a.sf);
                    var c = hm(a.H);
                    !b || !c ? b = k : (c.top += b.top, c.left += b.left, b = c)
                } else b = hm(a.H);
                if (c = b) {
                    b = a.Sb.oc;
                    if (a.L && b) {
                        c = Zm(b, c);
                        Id(a.L, c.width, c.height);
                        Ad(a.L, c.left, c.top);
                        var d = $h(a.Sb);
                        d && (d = new Qb(Zn(a).top * d.height / 100, Zn(a).right * d.width / 100, Zn(a).bottom * d.height / 100, Zn(a).left * d.width / 100), a.ob && (d.right += 1.5 * b.height / 100), a.L.style.padding = d.top + "px " + d.right + "px " + d.bottom + "px " + d.left + "px");
                        "label" == a.H.style && a.a && (a.a.style.padding = a.L.style.padding);
                        if (a.ob) {
                            d = 4.2 * b.height / 100;
                            d = new G(d, d);
                            Id(a.ob, d);
                            if ("highlight" == a.H.type || "label" == a.H.style) var f = 1.5 * b.height / 100,
                                d = new F(c.width - d.width - f, c.height - d.height - f);
                            else d = new F(c.width - d.width - 3 * b.height / 100, (c.height - d.height) / 2);
                            Ad(a.ob, d)
                        }
                        if (a.Ga) {
                            var g = 6 * b.height / 100;
                            Id(a.Ga, new G(g, g));
                            var d = a.Ga,
                                f = Kd(a.Ga),
                                g = g / 2,
                                i = b.left + b.width - (c.left + c.width) >= g,
                                m = c.top - b.top >= g;
                            Ad(d, i && m ? new F(c.width - g, -g) : i ? new F(c.width - g, c.height > 3 * g + f.height ? g : c.height - g) : m ? new F(c.width > 3 * g + f.width ? c.width - g - f.width :
                                -g, -g) : c.width / b.width > c.height / b.height ? new F(c.width > 3 * g + f.width ? c.width - g - f.width : -g, c.height - g) : new F(-g, c.height > 3 * g + f.height ? g : c.height - g))
                        }
                    }
                    a.aa && b && a.aa.e(a.H, b);
                    b = a.L;
                    c = a.H.b || new Wl;
                    d = a.Sb.oc;
                    b.style.color = "highlightText" == a.H.style ? c.Qh : c.pe;
                    b.style.fontSize = d.height * c.Rh / 100 + "px";
                    if ("title" == a.H.style || "highlightText" == a.H.style) b.style.textAlign = "center";
                    c.yf && (b.style.fontWeight = c.yf);
                    if (a.L)
                        for (b = 10; a.L.scrollHeight > a.L.offsetHeight && b;) {
                            c = Xd(a.L);
                            if (5 > c) break;
                            c--;
                            a.L.style.fontSize =
                                c + "px";
                            b--
                        }
                }
            }
        }

        function Zn(a) {
            var b = a.H.b;
            return b.padding ? b.padding : new Qb("speech" == a.H.style ? 1.6 : 0.8, "speech" == a.H.style ? 1.6 : 0.8, "speech" == a.H.style ? 1.6 : 0.8, "speech" == a.H.style ? 1.6 : 0.8)
        }
        n.Ha = function() {
            O(this.L);
            this.aa && O(this.aa.O())
        };

        function Xn(a) {
            return "label" != a.H.style || a.aa.b
        };

        function $n(a) {
            yh.call(this, a);
            this.M = a.getEnvironmentData();
            this.b = {};
            this.e = {};
            this.C = {};
            this.u = {};
            this.g = {};
            this.k = new Sn(this.pubsub);
            var b = a.getRootNode(),
                a = ao;
            this.U = L(a.ip, b);
            Q(this.U, "click", u(this.np, this));
            this.pubsub.n("onResize", u(this.op, this));
            this.pubsub.n("onStateChange", u(this.rp, this));
            this.pubsub.n("mouseover", u(this.qp, this));
            this.pubsub.n("mouseout", u(this.pp, this));
            this.pubsub.n("click", u(this.lp, this));
            this.pubsub.n("closed", u(this.mp, this));
            b = L(a.jp, b);
            a = L(a.kp, b);
            this.appendToVideoContent(a);
            this.B = new nn(a, u(this.Kh, this))
        }
        z($n, yh);
        var ao = {
            ip: "html5-annotations-button",
            jp: "video-annotations",
            kp: "countdowntimer"
        };
        n = $n.prototype;
        n.W = "iv";
        n.Sh = l;
        n.uk = j;
        n.ja = l;
        n.Va = l;

        function bo(a) {
            return !ve("video-annotations", a.getRootNode()) || !co(a) ? k : new $n(a)
        }

        function co(a) {
            return "leanback" == a.getEnvironmentData().eventLabel ? l : Ug(a.getVideoData(), "iv3_module")
        }
        n.bb = function() {
            return co(this.a)
        };
        n.create = function() {
            $n.s.create.call(this);
            this.i = this.a.getVideoData();
            1 == this.i.ya && this.load()
        };
        n.destroy = function() {
            this.ba();
            $n.s.destroy.call(this)
        };
        n.np = function() {
            this.ja || this.Va ? this.ba() : this.load()
        };
        n.op = function() {
            for (var a in this.C) Yn(this.C[a])
        };
        n.rp = function(a) {
            this.uk = T(a.a, 16);
            0 > tl(a, 8) && on(this.B)
        };
        n.load = function() {
            $n.s.load.call(this);
            var a = {
                format: "XML",
                method: "GET",
                wg: {
                    video_id: this.i.A
                },
                Ne: u(this.sq, this)
            };
            this.Va = j;
            ef(this.M.cb + "annotations_iv/read2", a)
        };
        n.ba = function() {
            Vn(this.k, {
                "iv-event": 1
            });
            this.Kh();
            zh(this);
            for (var a in this.b) delete this.b[a];
            for (a in this.e) {
                var b = this.e[a];
                Ie(b.X);
                b.L && M(b.L);
                b.aa && b.aa.O() && M(b.aa.O());
                delete this.e[a]
            }
            this.ja = this.Va = l;
            this.u = {};
            this.g = {};
            this.e = {};
            this.b = {};
            $n.s.ba.call(this)
        };

        function eo(a, b) {
            for (var c = {}, d = 0; d < b.attributes.length; d++) {
                var f = b.attributes[d];
                c[f.name] = f.nodeValue
            }
            for (d = 0; d < b.childNodes.length; d++)
                if (f = b.childNodes[d], f.tagName) {
                    var g;
                    c[f.tagName] ? g = c[f.tagName] : (g = [], c[f.tagName] = g);
                    f && "TEXT" == f.tagName ? 1 == f.childNodes.length && 3 == f.childNodes[0].nodeType ? g.push(f.childNodes[0].nodeValue) : g.push("") : f && g.push(eo(a, f))
                } return c
        }
        n.sq = function(a) {
            if (this.Va && !this.ja) {
                this.Va = l;
                var b = a.responseXML ? a.responseXML.getElementsByTagName("annotations") : k;
                if (cf(a) && b) {
                    a = b[0].getElementsByTagName("annotation");
                    for (b = 0; b < a.length; b++) {
                        var c = eo(this, a[b]),
                            d = new cm;
                        try {
                            d.Ia(c)
                        } catch (f) {
                            continue
                        }
                        this.b[d.id] = d
                    }
                    for (var g in this.b) {
                        a = this.b[g];
                        b = a;
                        c = h;
                        b: if ("highlight" == b.type) c = j;
                            else {
                                if ("text" == b.type)
                                    for (c in c = h, dm)
                                        if (b.style == dm[c]) {
                                            c = j;
                                            break b
                                        } c = l
                            } c ? (c = new Wn(b, u(this.appendToVideoContent, this), this.M, this.pubsub), b = this.e[b.id] =
                            c) : b = k;
                        if (b && a.a && a.a.b) {
                            c = a.a.b;
                            if (d = this.b[c]) b.sf = d;
                            this.g[c] = a.id
                        }
                    }
                    I(this.a.getRootNode(), this.W + "-loaded");
                    this.ja = j;
                    g = [];
                    for (var i in this.b) a = this.b[i], a.a && (a.a && bm(a.a)) && (b = bm(a.a), a = 1E3 * b.start, b = 1E3 * b.end, 0 == a && (a++, b++), a == b && b++, a = new Df(a, b, {
                        id: i
                    }), g.push(a));
                    this.ad.apply(this, g)
                }
            }
        };
        n.lb = function(a) {
            $n.s.lb.call(this, a);
            a = a.getId();
            if (!this.u[a]) {
                var b = this.b[a];
                if ("pause" == b.type) {
                    if (this.uk && (a = jm(b)) && a.zf && a.zf.value) this.Sh = j, this.pubsub.j("command_pause"), this.B.start(1E3 * a.zf.value)
                } else fo(this, a), b = this.k, a = this.b[a], !b.a[a.id] && fm(a) && (b.a[a.id] = j, Vn(b, Tn(a, 2)))
            }
        };
        n.pb = function(a) {
            $n.s.pb.call(this, a);
            go(this, a.getId())
        };

        function go(a, b) {
            var c = a.e[b];
            if (c) {
                var d = a.g[b];
                d && go(a, d);
                c.Ha();
                delete a.C[b]
            }
        }

        function fo(a, b) {
            var c = a.e[b];
            if (c) {
                if (c.Sb.oc) {
                    var d = c.H.b;
                    if (!(d && 0 == d.od || "title" == c.H.style || "highlightText" == c.H.style || "pause" == c.H.type) && !c.aa)
                        if (d = c.Sb.oc) {
                            var f = k;
                            "highlight" == c.H.type || "label" == c.H.style ? f = new hn : "popup" == c.H.style ? f = new bn : "anchored" == c.H.style ? f = new jn : "speech" == c.H.style && (f = new mn);
                            f && (f.e(c.H, d), c.aa = f, d = f.O(), O(d), c.b(d))
                        } if (!c.L) {
                        c.L = nd("div", ["annotation", "hid"]);
                        c.H.g && ("label" == c.H.style ? (d = c.H.b || new Wl, c.a = nd("div", ["label-text"]), c.a.style.backgroundColor =
                            d.pd, td(c.a, c.H.g), c.L.appendChild(c.a)) : td(c.L, c.H.g));
                        le(c.L, "annotation_id", c.H.id);
                        c.b(c.L);
                        c.X.N(c.L, "mouseover", u(c.Wn, c));
                        c.X.N(c.L, "mouseout", u(c.Vn, c));
                        c.X.N(c.L, "click", u(c.Tn, c));
                        if (gm(c.H)) {
                            if (d = fm(c.H)) c.L.title = Sl(d);
                            c.ob = nd("span", "annotation-link-icon");
                            c.L.appendChild(c.ob)
                        }
                        d = L("annotation-close-button-container", h);
                        d = se(K(d));
                        d.removeAttribute("id");
                        c.Ga = d;
                        le(c.Ga, "annotation_id", c.H.id);
                        c.X.N(c.Ga, "click", u(c.Un, c));
                        c.L.appendChild(c.Ga)
                    }
                    N(c.L);
                    Md(c.L, Xn(c) ? 1 : 0);
                    Yn(c);
                    c.aa && N(c.aa.O())
                }
                a.C[b] =
                    c
            }
        }
        n.lp = function(a) {
            if (a && a.id) {
                var b = this.k;
                fm(a) && Vn(b, Tn(a, 3));
                if (b = fm(a)) {
                    var c = Rn(b, this.i);
                    if (-1 != c) this.pubsub.j("command_seek", c), this.Kh();
                    else {
                        var d = this.i;
                        if (c = Sl(b))
                            if (Qn(c)) c = c.split("#", 2), c = af(c[0], {
                                feature: "iv",
                                annotation_id: a.id
                            }) + (c[1] ? "#" + c[1] : "");
                            else {
                                if (!(a = d.Gi)) c ? (d = zc(c), a = d[3], d = d[5], !a || !d ? a = l : (a = a.toLowerCase(), a = "www.kickstarter.com" == a && 0 == d.indexOf("/projects/") || "www.indiegogo.com" == a || "plus.google.com" == a || "oz-dev.plus.corp.google.com" == a ? j : l)) : a = l;
                                c = a ? c : k
                            }
                        else c = k;
                        c &&
                            window.open(c, !this.i.Hi ? "_top" : "embedded" == this.M.eventLabel ? "_blank" : b.target ? "new" == b.target ? "_blank" : "_top" : Qn(Sl(b)) ? "_top" : "_blank")
                    }
                }
            }
        };
        n.qp = function(a) {
            (a = this.g[a.id]) && fo(this, a)
        };
        n.pp = function(a) {
            (a = this.g[a.id]) && go(this, a)
        };
        n.mp = function(a) {
            if (a || a.id) this.u[a.id] = j, go(this, a.id), a && Vn(this.k, Tn(a, 4))
        };
        n.Kh = function() {
            on(this.B);
            this.Sh && (this.Sh = l, this.pubsub.j("command_play"))
        };

        function ho(a) {
            a = a || xn;
            v(this, a)
        }
        n = ho.prototype;
        n.Bf = 7;
        n.Cf = 50;
        n.Df = 95;
        n.zr = 80;
        n.xc = 0;
        n.textAlign = "center";
        n.backgroundColor = "#080808";
        n.xf = "#fff";
        n.opacity = 0.8;
        n.Tb = 15;
        n.$h = 32;
        n.isVisible = j;
        n.fontFamily = '"Arial Unicode Ms", Arial';
        n.Zq = "100%";

        function io(a, b) {
            this.id = a;
            this.T = new ho(b);
            var c = "caption-window";
            0 == this.id && (c = "standard-caption-window");
            this.Q = nd("div", {
                id: "caption-window-" + this.id,
                "class": c
            });
            this.Nd = nd("span", {
                "class": "captions-text",
                style: "visibility: hidden"
            });
            this.Nd.innerHTML = "C";
            this.S = nd("span", {
                "class": "captions-text",
                tabindex: "4",
                "aria-live": "assertive"
            });
            c = nd("div", {
                "class": "caption-window-transform"
            });
            c.appendChild(this.S);
            this.Q.appendChild(c)
        }
        n = io.prototype;
        n.id = 0;
        n.T = k;
        n.ye = "";
        n.ab = k;
        n.Q = k;
        n.S = k;
        n.Nd = k;
        n.type = 1;
        n.getType = function() {
            return this.type
        };
        n.$i = function() {
            var a;
            this.Nd.style.fontFamily = this.S.style.fontFamily;
            this.Q.appendChild(this.Nd);
            a = this.Nd.offsetHeight;
            this.Q.removeChild(this.Nd);
            return a
        };
        n.Dg = function() {
            this.S && (0 != this.id && (Jd(this.Q, "100%"), Jd(this.Q, this.S.offsetWidth)), jo(this), Yd(this.Q, this.T.isVisible))
        };

        function jo(a) {
            Ad(a.Q, a.T.Cf + "%", a.T.Df + "%");
            for (var b = 0; 8 >= b; b++) J(a.Q, "anchor-point-" + b);
            I(a.Q, "anchor-point-" + a.T.Bf)
        }
        n.Em = function(a) {
            var b = [];
            a.forEach(function(a) {
                a.Ag ? b[b.length - 1] += a.Ub() : b.push(a.Ub())
            }, this);
            this.Ac(b.join("\n"));
            this.ab = a
        };
        n.Ac = function(a) {
            this.ye = a = ko(a);
            this.S.innerHTML = this.ye;
            this.ej();
            this.Dg()
        };

        function lo(a, b) {
            if (b) {
                var c = document.createElement("div");
                c.innerHTML = b;
                b = c.textContent || "";
                a.Ac(b)
            }
        }
        n.ej = function() {
            this.Q.style.textAlign = this.T.textAlign;
            this.S.style.backgroundColor = this.T.backgroundColor;
            this.S.style.color = this.T.xf;
            this.S.style.opacity = this.T.opacity;
            this.S.style.fontFamily = this.T.fontFamily;
            this.S.style.fontSize = this.T.Zq;
            1 == this.T.xc ? this.S.setAttribute("dir", "rtl") : this.S.removeAttribute("dir")
        };
        n.toString = function() {
            var a = "Caption window (" + this.id + "): " + this.ye,
                b;
            for (b in this.T) a += b + " " + this.T[b] + " | ";
            return a
        };

        function ko(a) {
            for (var a = a.split("\n"), b = 0, c = a.length; b < c; b++) a[b] = a[b] ? "&nbsp;" + a[b] + "&nbsp;" : "";
            return a.join("<br>")
        }
        n.Fg = function() {
            this.ab = [];
            this.Ac("")
        };

        function mo(a, b) {
            io.call(this, a, b);
            this.S.style.display = "block";
            this.S.style.padding = "0";
            this.Oa = []
        }
        z(mo, io);
        n = mo.prototype;
        n.type = 0;
        n.Zk = "";
        n.Bc = l;
        n.Xb = k;
        n.Oa = k;
        n.$i = function() {
            return this.Oa[0] ? this.Oa[0].offsetHeight : 0
        };

        function no(a) {
            return a.Oa.reduce(function(a, c) {
                return Math.max(a, c.offsetWidth)
            }, 0)
        }
        n.Dg = function() {
            0 != this.id && (this.Bc = j, Jd(this.Q, "100%"), Jd(this.Q, this.Bc ? no(this) : this.Xb.width), this.Bc = l);
            var a = Math.round(this.T.Tb * this.$i()),
                b = this.Q;
            t("max-height") ? xd(b, a + "px", "max-height") : Xa("max-height", oa(xd, b));
            jo(this);
            Yd(this.Q, this.T.isVisible)
        };
        n.Ac = function(a) {
            this.Fg();
            a = ko(a);
            this.Bc || (this.ye = a);
            for (var a = a.split("<br>"), b = 0, c = a.length; b < c; b++)
                if (a[b]) {
                    var d = nd("div", {
                            "class": "caption-row-holder"
                        }),
                        f = nd("span", {
                            "class": "caption-row captions-text"
                        });
                    d.appendChild(f);
                    f.innerHTML = a[b];
                    this.Bc || (f.style.left = this.Xb.Yk[b]);
                    this.S.appendChild(d);
                    this.Oa.push(f)
                } this.ej();
            this.Dg()
        };
        n.Fg = function() {
            for (var a = 0, b = this.Oa.length; a < b; a++) {
                var c = ud(this.Oa[a], "caption-row-holder");
                M(c)
            }
            this.Oa = []
        };
        n.ej = function() {
            this.Q.style.textAlign = this.T.textAlign;
            for (var a = 0, b = this.Oa.length; a < b; a++) this.Oa[a].style.backgroundColor = this.T.backgroundColor;
            this.S.style.color = this.T.xf;
            this.S.style.opacity = this.T.opacity;
            this.S.style.fontFamily = this.T.fontFamily;
            1 == this.T.xc ? this.S.setAttribute("dir", "rtl") : this.S.removeAttribute("dir")
        };

        function oo(a, b) {
            io.call(this, a, b);
            this.ab = [];
            this.dc = [];
            this.wa = [];
            this.Gd = new tc(433);
            wc(this.Gd);
            Q(this.Gd, "tick", u(this.fr, this))
        }
        z(oo, io);
        n = oo.prototype;
        n.type = 2;
        n.wa = k;
        n.gc = 0;
        n.dc = k;
        n.Gd = k;
        n.Em = function(a) {
            var b = a.length;
            if (0 >= b) this.Fg();
            else {
                for (var c = 0; c < b && 0 <= this.ab.indexOf(a[c]);) c++;
                this.ab = this.ab.concat(a.slice(c));
                po(this)
            }
        };
        n.Fg = function() {
            this.ab = [];
            this.wa = [];
            this.gc = 0;
            this.wa = [];
            this.dc = [];
            qo(this)
        };

        function po(a) {
            if (!ro(a))
                if (a.gc >= a.ab.length) qo(a);
                else {
                    var b = a.wa.length - 1;
                    0 > b && (a.dc.push(0), a.gc = 0, a.wa.push(""), b = 0);
                    for (var c = a.ab.length, d = a.gc; d < c; d++) {
                        var f = a.ab[d];
                        if ("\n" == f.Ub()) {
                            a.gc++;
                            a.dc[b]++;
                            break
                        }
                        if (f.Ag || 0 == a.wa[b].length) a.wa[b] += f.Ub(), a.gc++, a.dc[b]++;
                        else break
                    }
                    qo(a);
                    d < c && !ro(a) && (b = a.$i(), I(a.S, "caption-rollup"), a.Q.style.overflow = "hidden", a.S.style.top = -b + "px", a.Gd.start())
                }
        }

        function ro(a) {
            return a.Gd.e || ad(a.S, "caption-rollup")
        }
        n.fr = function() {
            this.Q.style.overflow = "visible";
            this.S.style.top = 0;
            wc(this.Gd);
            J(this.S, "caption-rollup");
            this.wa.push("");
            this.dc.push(0);
            po(this)
        };

        function qo(a) {
            if (!ro(a)) {
                for (; a.wa.length < a.T.Tb;) a.wa.unshift(""), a.dc.unshift(0);
                for (; a.wa.length > a.T.Tb;) {
                    a.wa.shift();
                    var b = a.dc.shift();
                    0 < b && (a.gc -= b, a.ab.splice(0, b))
                }
                a.Ac(a.wa.join("\n"))
            }
        };

        function so(a) {
            yh.call(this, a);
            var b = a.getRootNode();
            this.vd = a.getEnvironmentData();
            this.ac = [];
            this.ka = {};
            this.Vb = {};
            this.Ee = [];
            this.ai = L("captions-translation-select", b);
            this.Ti = L("captions-translation-dialog", b);
            this.Si = L("captions-transcribe-dialog", b);
            this.Hd = L("captions-transcribe-menu-item", b);
            this.Ri = L("captions-settings-dialog", b);
            this.xg = L("html5-captions-button", b);
            Q(this.xg, "click", u(this.zq, this));
            Q(L("captions-translation-confirm", b), "click", u(this.Fq, this));
            Q(L("captions-translation-cancel",
                b), "click", u(this.Hk, this));
            Q(L("captions-transcribe-confirm", b), "click", u(this.Eq, this));
            Q(L("captions-transcribe-cancel", b), "click", u(this.sm, this));
            Q(L("captions-settings-bg", b), "click", u(this.xm, this));
            Q(L("captions-settings-font-inc", b), "click", u(this.wm, this));
            Q(L("captions-settings-font-dec", b), "click", u(this.vm, this));
            Q(L("captions-settings-confirm", b), "click", u(this.xq, this));
            Q(L("captions-settings-cancel", b), "click", u(this.Dq, this));
            a = L("captions-settings-dialog", b);
            Ce(a, u(this.Aq, this),
                "html5-color-picker-button");
            this.Oi = L("html5-captions-tracks", this.xg);
            this.zi = L("html5-popup-menu", this.xg);
            Ce(this.zi, u(this.yq, this), "yt-uix-button-menu-item");
            this.Id = new tc;
            wc(this.Id);
            Q(this.Id, "tick", u(this.Xi, this));
            this.pubsub.n("onResize", u(this.Hq, this));
            this.pubsub.n("onToggleBackground", u(this.xm, this));
            this.pubsub.n("onFontSizeIncrease", u(this.wm, this));
            this.pubsub.n("onFontSizeDecrease", u(this.vm, this));
            this.pubsub.n("showcontrols", u(this.Cq, this));
            this.pubsub.n("hidecontrols", u(this.Bq,
                this));
            "detailpage" == this.vd.eventLabel && (b = L("captions-account-settings-link", b)) && N(b);
            this.hg = new io(99, yn);
            this.Fe = new tc(2E3);
            wc(this.Fe);
            Q(this.Fe, "tick", u(this.Gq, this))
        }
        z(so, yh);
        n = so.prototype;
        n.W = "cc";
        n.Jc = "cc";
        n.Ai = "subtitlesModuleData";
        n.i = k;
        n.vd = k;
        n.xg = k;
        n.zi = k;
        n.Ti = k;
        n.Si = k;
        n.Hd = k;
        n.Ri = k;
        n.Oi = k;
        n.Ee = k;
        n.ac = k;
        n.ka = k;
        n.Vb = k;
        n.Id = k;
        n.hg = k;
        n.Fe = k;
        n.va = k;
        n.kd = l;
        n.ym = 1;
        n.Y = {
            fontFamily: '"Arial Unicode Ms", Arial',
            fontSizeIncrement: 0,
            backgroundEnabled: j
        };
        n.rf = k;
        n.fk = l;
        n.create = function() {
            so.s.create.call(this);
            this.i = this.a.getVideoData();
            var a;
            1 == this.vd.C.cc_load_policy || 1 == this.i.Xj || "alwayson" == Qg(this.i, "yt:cc") ? a = j : (a = Eh(this, "module-enabled"), a = a != k ? !!a : "on" == Qg(this.i, "yt:cc"));
            a && this.load()
        };
        n.destroy = function() {
            this.ba();
            so.s.destroy.call(this)
        };
        n.load = function() {
            so.s.load.call(this);
            this.kd = "alwayson" == Qg(this.i, "yt:cc");
            bd(this.zi, "captions-always-on", this.kd);
            var a = this.i.vb.cc_lang_pref || this.vd.C.cc_lang_pref || Qg(this.i, "yt:cc_default_lang") || this.vd.e,
                a = a && a.split("_").join("-");
            this.va = new Ln(this.i.tg, this.i.A, a, this.i.Ii);
            Pn(this.va, u(this.Yl, this));
            Fh(this, "module-enabled", j);
            this.Y = Eh(this, "display-settings") || bb(this.Y);
            to(this);
            this.ja = j
        };
        n.ba = function() {
            uo(this);
            Ch(this);
            Fh(this, "module-enabled", l);
            this.ja = l;
            so.s.ba.call(this)
        };

        function vo(a, b) {
            rd(a.ai);
            b.forEach(function(a) {
                var b = document.createElement("option");
                b.setAttribute("value", a.zd);
                b.appendChild(document.createTextNode(a.Ae + " -- " + a.ki));
                this.ai.appendChild(b)
            }, a)
        }
        n.Yl = function() {
            Mn(this.va, u(this.Pf, this));
            rd(this.Oi.children[0]);
            vo(this, this.va.Ja.Sf);
            var a = this.va.Ja.Pe;
            a.length ? this.kd || (J(this.Hd, "disabled"), N(this.Hd)) : O(this.Hd);
            var b = this.va.Ja.Kd;
            if (0 < b.length) {
                var c = this.va.Ja.Bg;
                b.forEach(function(a, b) {
                    if (a.di) {
                        var g = a.toString(),
                            i = In(a),
                            m = l;
                        b == c && (m = j);
                        wo(this, g, i, m)
                    }
                }, this)
            } else a.length || this.ba()
        };
        n.Pf = function(a, b) {
            var c = a.e.concat(a.b);
            uo(this);
            this.Ee = Ka(c);
            this.rf = b;
            this.fk = vn.test(b.b);
            var d = [];
            c.forEach(function(a, b) {
                var c = new Df(a.Fa(), a.Fa() + a.Ya, {
                    id: b
                });
                d.push(c)
            }, this);
            this.ad.apply(this, d);
            xo(this, b);
            lo(this.hg, In(b));
            this.appendToVideoContent(this.hg.Q);
            this.Fe.start();
            this.pubsub.j("publish_external_event", "captionschanged", Hn(b))
        };

        function xo(a, b) {
            var c = {
                trackName: b.getName(),
                trackKind: b.La
            };
            b.a ? (c.trackLangCode = b.a.zd, c.fromLangCode = b.b) : c.trackLangCode = b.b;
            a.log(c)
        }
        n.lb = function(a) {
            this.ac.push(this.Ee[a.getId()]);
            this.Id.start()
        };
        n.pb = function(a) {
            a = this.ac.indexOf(this.Ee[a.getId()]);
            0 <= a && this.ac.splice(a, 1);
            this.Id.start()
        };

        function yo(a, b) {
            if (b instanceof Cn) {
                var c = a.ka[b.id];
                v(b.params, a.Y);
                if (c && c.getType() != (b.params.Lh ? 2 : b.a ? 0 : 1)) M(c.Q), delete a.ka[b.id];
                if (!a.ka[b.id]) {
                    var c = a.ka,
                        d = b.id,
                        f;
                    a: {
                        f = b.id;
                        var g = b.params;
                        switch (b.params.Lh ? 2 : b.a ? 0 : 1) {
                            case 0:
                                f = new mo(f, g);
                                break a;
                            case 2:
                                f = new oo(f, g);
                                break a;
                            default:
                                f = new io(f, g)
                        }
                    }
                    c[d] = f;
                    c = a.ka[b.id].Q;
                    bd(c, "captions-asr", "asr" == a.rf.La);
                    aa(b.params.xc) && (b.params.xc = a.fk ? 1 : 0);
                    0 == a.ka[b.id].id ? a.appendAboveVideoControls(c) : a.appendToVideoContent(c)
                }
                v(a.ka[b.id].T, b.params);
                if (0 == (b.params.Lh ? 2 : b.a ? 0 : 1)) {
                    c = a.ka[b.id];
                    c.Zk = b.b;
                    c.Xb = {};
                    c.Bc = j;
                    c.Ac(c.Zk);
                    c.Xb.Tb = c.Oa.length;
                    c.Xb.width = c.Q.offsetWidth;
                    c.Xb.Yk = [];
                    for (d = 0; d < c.Xb.Tb; d++) c.Xb.Yk.push(c.Oa[d].offsetLeft);
                    c.Bc = l;
                    c.Ac(c.ye)
                }
            } else c = b.vf, a.Vb[c] || (a.Vb[c] = []), a.Vb[c].push(b)
        }
        n.Hq = function() {
            this.ym = $h(this.vd).height / 360;
            zo(this);
            for (var a in this.ka) this.ka[a].Dg()
        };
        n.Gq = function() {
            wc(this.Fe);
            M(this.hg.Q)
        };
        n.Xi = function() {
            wc(this.Id);
            zo(this);
            var a = this.ac.length,
                b;
            for (b in this.Vb) delete this.Vb[b];
            this.ac.sort(function(a, b) {
                return a.Fa() == b.Fa() ? a.Lc() - b.Lc() : a.Fa() - b.Fa()
            });
            for (var c = 0; c < a; c++) yo(this, this.ac[c]);
            for (b in this.ka) this.Vb[b] ? this.ka[b].Em(this.Vb[b]) : (M(this.ka[b].Q), delete this.ka[b])
        };
        n.xm = function() {
            this.Y.backgroundEnabled = !this.Y.backgroundEnabled;
            Ao(this)
        };
        n.Cq = function() {
            var a = this.ka[0];
            a && a.Q && $c(a.Q, "controls-hidden", "controls-visible")
        };
        n.Bq = function() {
            var a = this.ka[0];
            if (a && a.Q) {
                for (var a = a.Q, b = Xc(a), c = l, d = 0; d < b.length; d++) "controls-visible" == b[d] && (Ma(b, d--, 1), c = j);
                c && (b.push("controls-hidden"), a.className = b.join(" "))
            }
        };
        n.vm = function() {
            Bo(this, -1)
        };
        n.wm = function() {
            Bo(this, 1)
        };

        function Bo(a, b) {
            a.Y.fontSizeIncrement += b;
            zo(a)
        }

        function zo(a) {
            Fh(a, "display-settings", a.Y);
            var b = "font-size: " + Math.round(((a.Y.fontSizeIncrement || 0) + 16) * a.ym) + "px;";
            a.g = Xk(".caption-window-transform", b, {
                Ec: a.g,
                reset: j
            })
        }

        function Ao(a) {
            Fh(a, "display-settings", a.Y);
            a.Y.backgroundEnabled ? Yk(a.e) : a.e = Xk(".captions-text, .caption-row", "background-color: transparent !important;text-shadow: #000 0 0 4px, #000 0 0 4px, #000 0 0 4px, #000 0 0 4px;", {
                Ec: a.e,
                reset: j
            })
        }

        function uo(a) {
            zh(a);
            a.ac = [];
            a.Ee = [];
            a.rf = k;
            a.Xi()
        }
        n.zq = function() {
            this.ja || this.load()
        };
        n.yq = function(a) {
            var a = ud(a.target, "yt-uix-button-menu-item"),
                b = ne(a, "action");
            if (b) switch (b) {
                case "translate":
                    this.kd || (Ch(this), Bh(this), N(this.Ti));
                    break;
                case "transcribe":
                    ad(this.Hd, "disabled") || (Ch(this), Bh(this), N(this.Si));
                    break;
                case "settings":
                    Ch(this);
                    Bh(this);
                    Co(this);
                    N(this.Ri);
                    break;
                case "captions-off":
                    this.ba()
            } else {
                var c = ne(a, "trackid");
                c && (a = this.va, b = u(this.Pf, this), (c = On(a, c)) && Nn(a, c, b))
            }
        };
        n.Hk = function() {
            O(this.Ti)
        };
        n.Fq = function() {
            if (!this.kd) {
                this.Hk();
                var a;
                a: {
                    a = this.va.Ja.Sf;
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if (c.zd == this.ai.value) {
                            a = c;
                            break a
                        }
                    }
                    a = k
                }
                a && (b = this.rf, c = new Fn, c.b = b.b, c.ze = b.ze, c.Yb = b.Yb, c.La = b.La, c.Tf = l, c.Vf = b.Vf, c.a = a, Kn(this.va.Ja, c), wo(this, c.toString(), In(c), j), Nn(this.va, c, u(this.Pf, this)))
            }
        };
        n.sm = function() {
            O(this.Si)
        };
        n.Eq = function() {
            if (!this.kd) {
                this.sm();
                I(this.Hd, "disabled");
                var a = this.va.Ja.Pe;
                a.length && (a = a[0], wo(this, a.toString(), In(a), j), Nn(this.va, a, u(this.Pf, this)))
            }
        };
        n.xq = function() {
            O(this.Ri)
        };
        n.Dq = function() {
            delete this.Y;
            this.Y = bb(this.Y);
            Fh(this, "display-settings", this.Y);
            to(this);
            this.Xi();
            Ao(this)
        };
        n.Aq = function(a) {
            var b = u(function(b) {
                var d = ne(a.currentTarget, b);
                d && (this.Y[b] = d)
            }, this);
            b("color");
            b("background");
            to(this);
            Fh(this, "display-settings", this.Y)
        };

        function Co(a) {
            var b = {
                    Ec: a.b
                },
                c = a.Y.color,
                d = a.Y.background;
            c && (a.b = Xk('.html5-popup-dialog button[data-color="' + c + '"]', "border: 3px solid #992121;", b));
            d && (a.b = Xk('.html5-popup-dialog button[data-background="' + d + '"]', "border: 3px solid #992121;", b))
        }

        function to(a) {
            var b = [],
                c = u(function(a) {
                    var c = this.Y[a];
                    c && b.push(a + ": " + c + " !important")
                }, a);
            c("color");
            c("background");
            a.b = Xk(".captions-text", b, {
                Ec: a.b,
                reset: j
            });
            Co(a)
        }

        function wo(a, b, c, d) {
            var a = a.Oi.children[0],
                f = document.createElement("li");
            f.setAttribute("class", "yt-uix-button-menu-item");
            f.setAttribute("data-trackid", b);
            var b = "caption-track-" + b,
                g = document.createElement("input");
            g.setAttribute("type", "radio");
            g.setAttribute("name", "language");
            g.setAttribute("value", c);
            g.id = b;
            g.checked = d;
            I(g, "yt-uix-button-menu-close");
            c = document.createTextNode(c);
            d = document.createElement("label");
            d.setAttribute("for", b);
            f.appendChild(g);
            d.appendChild(c);
            f.appendChild(d);
            a.appendChild(f)
        }

        function Do(a) {
            return !so.prototype.bb(a) ? k : new so(a)
        }
        n.Zm = function(a, b) {
            switch (a) {
                case "reload":
                    b && Pn(this.va, u(this.Yl, this));
                    break;
                case "fontSize":
                    isNaN(b) || (this.Y.fontSizeIncrement = b, zo(this))
            }
        };
        n.Nm = function() {
            return ["reload", "fontSize"]
        };
        n.bb = function(a) {
            return !!a.getVideoData().tg
        };

        function Eo() {
            var a = sb(),
                b;
            if (b = jg()) {
                a: {
                    if (navigator.plugins && 0 < navigator.plugins.length)
                        for (b = 0; b < navigator.plugins.length; b++)
                            if (0 <= navigator.plugins[b].name.indexOf("NVIDIA 3D Vision")) {
                                b = j;
                                break a
                            } b = l
                }
                if (b) a: {
                    var c = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                    if (c && 1 < c.length && 4 <= c[1]) {
                        c = document.createElement("embed");
                        c.setAttribute("id", "NvImageDetectionFFID");
                        c.setAttribute("style", "visibility: hidden");
                        c.setAttribute("width", 25);
                        c.setAttribute("height", 25);
                        c.setAttribute("type", "image/jps");
                        qd(document.documentElement, c);
                        c = K("NvImageDetectionFFID");
                        try {
                            if (c != k) {
                                b = 27527 <= c.NvGetDriverVersion();
                                break a
                            }
                        } catch (d) {}
                    }
                    b = l
                }
            }
            return b || a && -1 != a.indexOf("Sony")
        };

        function Fo(a) {
            yh.call(this, a);
            var b = a.getVideoData();
            b.oe && Go(this);
            Ho(this, "html5-threed-conversion-on", u(this.Cp, this));
            Ho(this, "html5-threed-conversion-off", u(this.Bp, this));
            var c = this.a.getRootNode(),
                a = L("html5-threed-popup-menu-change-mode-link", c),
                c = L("html5-threed-dialog-change-mode-button", c),
                b = "/select_3d_mode?video_id=" + b.A;
            a.setAttribute("href", b);
            c.setAttribute("href", b)
        }
        z(Fo, yh);
        n = Fo.prototype;
        n.Ai = "threeDModuleData";
        n.Gc = k;

        function Ho(a, b, c) {
            a = a.a.getRootNode();
            b = L(b, a);
            Q(b, "click", c)
        }
        n.W = "threed";
        n.Jc = "threed";
        n.create = function() {
            this.a.preparePlayerThreeD();
            Fo.s.create.call(this)
        };
        n.destroy = function() {
            this.a.preparePlayerThreeD(j);
            this.ba();
            Fo.s.destroy.call(this)
        };

        function Io(a) {
            return Fo.prototype.bb(a) ? new Fo(a) : k
        }
        n.bb = function(a) {
            a = a.getVideoData();
            return !!a.oe || !!a.mf
        };
        n.Cp = function() {
            Jo(this, j)
        };
        n.Bp = function() {
            Jo(this, l)
        };

        function Jo(a, b) {
            var c = a.a.getVideoData();
            c.mf && c.Dc != b && (a.a.toggleThreeD(), b ? Go(a) : Ch(a))
        }

        function Go(a) {
            if (!Eh(a, "warning-shown") && !Eo()) {
                var b = a.a.getRootNode();
                a.Gc = L("threed-html5-warning-dialog", b);
                N(a.Gc);
                P(u(function() {
                    Ko(this)
                }, a), 0);
                Q(a.Gc, "mouseover", u(function() {
                    J(this.Gc, "hide-dialog")
                }, a));
                Q(a.Gc, "mouseout", u(function() {
                    Ko(this)
                }, a));
                Ho(a, "threed-html5-warning-close", u(a.Hp, a))
            }
        }

        function Ko(a) {
            I(a.Gc, "hide-dialog");
            P(u(function() {
                ad(this.Gc, "hide-dialog") && Ch(this)
            }, a), 9E3)
        }
        n.Hp = function() {
            Fh(this, "warning-shown", j);
            Ch(this)
        };

        function Lo(a, b) {
            var c = L("html5-ypc-module", a.getRootNode());
            this.Fi = L("html5-ypc-overlay", c);
            this.a = L("html5-ypc-message", c);
            this.Ei = L("html5-ypc-purchase", c);
            this.Pl = L("html5-module-close", c);
            this.qg = L("html5-module-recall", c);
            a.appendAboveVideoControls(c);
            this.xl = b;
            Q(this.Ei, "click", u(this.Fp, this));
            Q(this.Pl, "click", u(this.Ep, this));
            Q(this.qg, "click", u(this.Ol, this))
        }
        n = Lo.prototype;
        n.Fi = k;
        n.Ei = k;
        n.Pl = k;
        n.qg = k;
        n.xl = k;
        n.update = function(a, b) {
            td(this.a, a);
            td(this.Ei, b);
            this.Ol()
        };
        n.Fp = function() {
            this.xl.j("ypcContentRequest")
        };
        n.Ol = function() {
            sd(this.Fi, this.qg)
        };
        n.Ep = function() {
            sd(this.qg, this.Fi)
        };

        function Mo(a) {
            yh.call(this, a);
            this.pubsub.n("ypcContentRequest", this.Wq, this);
            this.ml = new Lo(a, this.pubsub);
            this.ll = new Df(0, 2147483646, {
                priority: 1
            })
        }
        z(Mo, yh);
        n = Mo.prototype;
        n.W = "ypc";
        n.Jc = "ypc";
        n.ml = k;
        n.ll = k;
        n.bb = function() {
            return Ug(this.a.getVideoData(), "ypc_module")
        };

        function No(a) {
            return !Ug(a.getVideoData(), "ypc_module") ? k : new Mo(a)
        }
        n.create = function() {
            Mo.s.create.call(this);
            this.i = this.a.getVideoData();
            this.i.ra ? (this.ml.update(this.i.Tc, this.i.Rc), this.ad(this.ll)) : this.a.loadVideoByPlayerVars({
                video_id: this.i.A,
                ypc_preview: 1
            })
        };
        n.destroy = function() {
            zh(this)
        };
        n.lb = function(a) {
            Mo.s.lb.call(this, a);
            this.load()
        };
        n.pb = function(a) {
            this.ba();
            Mo.s.pb.call(this, a)
        };
        n.Wq = function() {
            if (this.i.Uf) "embedded" == this.a.getEnvironmentData().eventLabel ? qn(this.i.Uf) : window.location = R(this.i.Uf, {}) + "";
            else if (this.i.fi) {
                var a = q("yt.www.watch.player.handleEndPreview");
                a && a(this.i.fi)
            }
        };

        function Oo() {
            this.Ic = [];
            this.aj = {};
            this.jh = {};
            this.kh = {}
        }
        n = Oo.prototype;
        n.Ic = k;
        n.aj = k;
        n.Oh = k;
        n.jh = k;
        n.kh = k;
        n.G = k;

        function Po(a) {
            Qo().forEach(function(a) {
                var c;
                var d = ja(a);
                c = this.aj[d];
                if (!c && (c = a(this.G))) {
                    var a = this.aj[d] = c,
                        f;
                    for (f in this.Oh) a.pubsub.n(f, this.Oh[f]);
                    a.pubsub.n("command_log_timing", this.Nq, this)
                }
                c && c.bb(this.G) && (c.create(), this.Ic.push(c))
            }, a)
        }

        function Ro(a) {
            a.Ic.forEach(function(a) {
                a.destroy()
            });
            a.Ic = []
        }
        n.Xp = function(a) {
            (a = So(this, a)) && a.load()
        };
        n.cq = function(a) {
            (a = So(this, a)) && a.ba()
        };
        n.im = function(a, b, c) {
            if (!a || !b) return k;
            (a = So(this, a)) && a.Zm(b, c);
            return k
        };
        n.pq = function(a) {
            if (!a) {
                var b = [];
                this.Ic.forEach(function(a) {
                    b.push(a.W)
                });
                return b
            }
            return (a = So(this, a)) ? a.Nm() : []
        };

        function To(a, b, c) {
            B(a.Ic, function(a) {
                a.pubsub.j(b, c)
            })
        }
        n.Nq = function(a, b) {
            v(this.kh, a || k);
            v(this.jh, b || k)
        };

        function So(a, b) {
            var c;
            a.Ic.some(function(a) {
                if (a.W == b) return c = a, j
            });
            return c
        };

        function Uo(a) {
            this.b = new H;
            this.G = a
        }
        var Vo;
        z(Uo, W);
        n = Uo.prototype;
        n.Jh = function(a, b) {
            this.ea = a;
            this.o = b;
            K(this.ea) || "complete" == document.readyState ? this.Cm() : Q(document, "DOMContentLoaded", u(this.Cm, this))
        };
        n.Cm = function() {
            this.j("documentready");
            var a = K(this.ea);
            ad(a, "html5-video-player") ? (a && (this.J = a), this.j("templateready")) : this.Ni() || this.j("templateerror")
        };
        n.Ni = function() {
            var a = K("video-player") || Vo;
            if (!a) return l;
            Wo(this, a);
            this.j("templateready");
            return j
        };

        function Wo(a, b) {
            Vo = b;
            var c = b.cloneNode(j);
            c && (a.J = c);
            a.J.setAttribute("id", a.o.attrs.id || "video-player");
            K(a.ea).appendChild(a.J)
        }
        n.Wp = function() {
            return this.J
        };
        n.vk = function() {
            return k
        };
        n.Lg = function() {
            var a = this.G.getEnvironmentData(),
                b = this.J;
            I(b, "el-" + a.eventLabel);
            a.Sa && I(b, "html5-native-controls");
            a.ic || I(b, "html5-chromeless");
            b.style.display = "";
            this.a = L("html5-video-container", b);
            this.k = L("html5-video-content", b);
            Q(window, "resize", u(this.j, this, "resize"))
        };
        n.ti = function(a) {
            this.m.setAttribute("data-youtube-id", a.A);
            var b = Qg(a, "yt:bgcolor");
            b && (this.a.style.backgroundColor = b);
            bd(this.J, "html5-live-playback", a.Xc);
            bd(this.J, "html5-live-dvr-disabled", a.Xc && !a.Pa)
        };
        n.Uh = function() {};
        n.El = function() {};
        n.wl = function() {};
        n.Mf = function() {};
        n.gg = function() {};
        n.rl = function() {};
        n.ri = function() {};
        n.lm = function() {};
        n.hi = function() {};
        n.al = function() {};
        n.ci = function() {};
        n.yk = function() {};
        n.Gm = function() {
            return l
        };
        n.fj = function() {};
        n.Fm = function() {};
        n.tl = function() {};
        n.Uk = function() {};
        n.Hl = function() {};
        n.Nl = function() {};

        function Xo(a) {
            return !a.a ? new G(0, 0) : new G(a.a.clientWidth, a.a.clientHeight)
        }
        n.appendToVideoContent = function(a) {
            this.k.appendChild(a)
        };
        n.appendAboveVideoControls = function() {};

        function Yo(a, b) {
            var c, d;
            d || (d = 0);
            if (!c) {
                var f = document.body;
                c = new Qb(0, Infinity, Infinity, 0);
                for (var g = dd(f), i = g.a.body, m = g.a.documentElement, o = !yb && ld(g.a) ? g.a.documentElement : g.a.body; f = Ed(f);)
                    if ((!D || 0 != f.clientWidth) && (!yb || 0 != f.clientHeight || f != i) && f != i && f != m && "visible" != zd(f, "overflow")) {
                        var s = Fd(f),
                            y;
                        y = f;
                        if (xb && !E("1.9")) {
                            var w = parseFloat(yd(y, "borderLeftWidth"));
                            if ("rtl" == zd(y, "direction")) var C = y.offsetWidth - y.clientWidth - w - parseFloat(yd(y, "borderRightWidth")),
                                w = w + C;
                            y = new F(w, parseFloat(yd(y,
                                "borderTopWidth")))
                        } else y = new F(y.clientLeft, y.clientTop);
                        s.x += y.x;
                        s.y += y.y;
                        c.top = Math.max(c.top, s.y);
                        c.right = Math.min(c.right, s.x + f.clientWidth);
                        c.bottom = Math.min(c.bottom, s.y + f.clientHeight);
                        c.left = Math.max(c.left, s.x)
                    } i = o.scrollLeft;
                o = o.scrollTop;
                c.left = Math.max(c.left, i);
                c.top = Math.max(c.top, o);
                g = kd(g.a.parentWindow || g.a.defaultView || window);
                c.right = Math.min(c.right, i + g.width);
                c.bottom = Math.min(c.bottom, o + g.height);
                c = 0 <= c.top && 0 <= c.left && c.bottom > c.top && c.right > c.left ? c : k
            }
            ni(new F(b.pageX, b.pageY),
                a, d, k, c, 5)
        };

        function Zo() {
            this.ib = new Ge
        }
        n = Zo.prototype;
        n.Lj = k;
        n.he = k;
        n.Mj = k;
        n.Jg = k;
        n.yj = k;
        n.fd = k;
        n.Gn = function() {
            this.Ha()
        };
        n.Hn = function(a) {
            a.preventDefault();
            a.stopPropagation()
        };
        n.Ha = function() {
            O(this.fd);
            un("panelhidden")
        };
        n.In = function(a) {
            27 == a.keyCode && this.Ha()
        };
        n.Kj = function() {
            this.he.select()
        };

        function $o(a, b) {
            a.Jg && J(a.fd, a.Jg);
            a.Jg = b;
            I(a.fd, a.Jg);
            N(a.fd)
        };

        function ap(a) {
            this.G = a;
            this.G.pubsub.n("internalvideodatachange", this.Tp, this);
            this.ib = new Ge;
            this.b = new Zo
        }
        n = ap.prototype;
        n.Kg = 0;
        n.lr = 500;

        function bp(a, b, c) {
            b = L(Mh[b], a.a);
            Q(b, "click", u(function(a, b) {
                this.Ha();
                a.call(this, b);
                b.stopPropagation()
            }, a, c))
        }
        n.Tp = function(a, b) {
            var c = L("html5-context-menu-copy-embed-html", this.a);
            Yd(c, b.pk)
        };
        n.Nj = function(a) {
            var b = this.G.vg();
            a && (b += "#t=" + Math.floor(this.G.getCurrentTime()) + "s");
            cp(this, b, "URL")
        };
        n.Kn = function() {
            var a = ee("EMBED_HTML_TEMPLATE"),
                b = ee("EMBED_HTML_URL"),
                c = Zh(this.G.getEnvironmentData()),
                d = this.G.getVideoData().A,
                b = b.replace(/__videoid__/g, d),
                a = a.replace(/__url__/g, ta(b)),
                a = a.replace(/__width__/g, c.width),
                a = a.replace(/__height__/g, c.height);
            cp(this, a, "Text")
        };

        function cp(a, b, c) {
            if (!window.clipboardData || !window.clipboardData.setData(c, b)) a = a.b, $o(a, "html5-modal-panel-clipboard-substitute"), a.he.value = b, a.he.focus(), P(u(a.Kj, a), 100)
        }
        n.Ln = function() {
            var a = this.G.getVideoData(),
                b = this.G.getEnvironmentData(),
                c = {
                    eurl: b.a,
                    html5: 1
                };
            5 != this.G.Jk() && (c.autoplay = 1, c.vq = a.format.nb);
            var d = Math.round(this.G.getCurrentTime());
            10 < d && (c.start = d);
            a = "/embed/" + a.A;
            a = R(a, c);
            d = Zh(b);
            b = this.G;
            c = a;
            a = {
                top: 0,
                left: 0,
                width: d.width,
                height: d.height,
                resizable: j
            };
            b.ua && dp(b, l);
            b.pubsub.j("openingpage");
            b = a || {};
            b.target = b.target || c.target || "YouTube";
            b.width = b.width || 600;
            b.height = b.height || 600;
            if (b = qn(c, b)) b.opener || (b.opener = window), b.focus()
        };
        n.On = function() {
            ep(this.G)
        };
        n.Mn = function() {
            var a = this.G.getVideoData(),
                b = this.G.getEnvironmentData(),
                c = Zh(b),
                d = $h(b),
                c = {
                    cr: b.U,
                    csipt: a.Uc,
                    ec: 108,
                    feature: b.g,
                    h: d.height,
                    hl: b.e,
                    playerh: c.height,
                    playerw: c.width,
                    ptk: a.g,
                    referrer: b.referrer,
                    screenh: window.screen.height,
                    screenw: window.screen.width,
                    sdetail: a.Ud,
                    shost: $e(Pg(a)),
                    sourceid: a.Td,
                    vid: b.B,
                    vq: b.o,
                    w: d.width
                };
            v(c, this.G.Vg());
            c.videoId && (c.v = c.videoId, delete c.videoId);
            b.Fb && (c.mobile = "1");
            this.G.Qj("streamingerror", c);
            window.open(Yh(a))
        };
        n.Jn = function() {
            cp(this, fp(this.G, j), "Text")
        };
        n.Nn = function() {
            this.Kg || (this.Kg = he(u(this.Tm, this), this.lr));
            this.Tm();
            tn(u(function() {
                ie(this.Kg);
                this.Kg = k
            }, this))
        };
        n.Tm = function() {
            var a = this.G.Vg(),
                b = this.G.getEnvironmentData(),
                c = $h(b),
                d = this.b,
                a = {
                    videoId: this.G.getVideoData().A,
                    videoWidth: c.width,
                    videoHeight: c.height,
                    volume: Math.round(this.G.getVolume()),
                    streamType: b.ra,
                    decodedFrames: a.hmewdfc || a.hmemdf || "-",
                    droppedFrames: a.hmewdrop || "-",
                    parsedFrames: a.hmempf || "-",
                    presentedFrames: a.hmempresented || "-",
                    videoBytesDecoded: a.hmewvdbc || "-",
                    audioBytesDecoded: a.hmewadbc || "-",
                    paintedFrames: a.hmempainted || "-",
                    paintDelay: a.hmempaintdelay || "-"
                },
                a = d.a.Jb(a);
            $o(d, "html5-modal-panel-infobox");
            d.yj.innerHTML = a
        };
        n.Lp = function(a) {
            a.preventDefault();
            Zd(this.b.fd) || (Zd(this.a) && a.stopPropagation(), Yo(this.a, a), N(this.a), this.ib.N(this.a, "contextmenu", function(a) {
                a.preventDefault()
            }), a = u(function() {
                this.ib.N(document, "click", u(this.Ha, this));
                this.ib.N(document, "contextmenu", u(this.Ha, this));
                this.ib.N(window, "blur", u(this.Ha, this))
            }, this), P(a, 0), this.ib.N(document, "keydown", u(this.hp, this)))
        };
        n.hp = function(a) {
            27 == a.keyCode && this.Ha(a)
        };
        n.Ha = function() {
            O(this.a);
            Ie(this.ib)
        };

        function gp() {
            this.b = new H
        }
        z(gp, W);
        gp.prototype.k = k;
        gp.prototype.e = k;
        gp.prototype.g = k;
        gp.prototype.update = function(a, b) {
            a ? (N(this.a), td(this.k, a), b ? (N(this.e), td(this.g, b)) : O(this.e)) : O(this.a)
        };

        function hp(a) {
            Uo.call(this, a)
        }
        z(hp, Uo);
        n = hp.prototype;
        n.Jd = 0;
        n.ij = 0;
        n.Jh = function(a, b) {
            hp.s.Jh.call(this, a, b);
            var c;
            if (c = this.o.assets.css) {
                c = nd("div", {
                    "class": "html5-player-css-loaded"
                });
                document.body.appendChild(c);
                var d = "none" == yd(c, "display");
                M(c);
                c = !d
            }
            if (c) {
                c = {
                    rel: "stylesheet",
                    type: "text/css",
                    href: this.o.assets.css
                };
                d = document.getElementById("www-player-css");
                c.id = "www-player-css";
                var f = d || document.createElement("link");
                id(f, c);
                d || document.getElementsByTagName("head")[0].appendChild(f)
            }
        };
        n.Ni = function() {
            hp.s.Ni.call(this) || ef(this.o.assets.html, {
                format: "RAW",
                method: "GET",
                Bb: u(this.Mq, this)
            });
            return j
        };
        n.Mq = function(a) {
            if (a.responseText) {
                var b = document.createElement("div");
                b.innerHTML = a.responseText;
                Wo(this, L("html5-video-player", b));
                this.j("templateready")
            } else this.j("templateerror")
        };
        n.vk = function() {
            return this.oa
        };
        n.Lg = function() {
            hp.s.Lg.call(this);
            var a = this.G.getEnvironmentData(),
                b = this.J;
            a.u && I(b, a.u + "-theme");
            (a.Qc || !a.ic) && I(b, "modest-branding");
            a.Rg && I(b, "html5-hide-share");
            a.Ij || I(b, "html5-hide-volume");
            a.jc && I(b, "html5-autohide");
            a.xa && (I(b, "html5-tablet"), I(document.body, "html5-tablet-body"));
            this.oa = L("html5-video-controls", b);
            this.M = L("html5-video-fallback", b);
            this.qa = L("html5-video-fallback-content", this.M);
            this.g = L("html5-video-loader", b);
            this.e = L("html5-watermark", b);
            var c = L("html5-context-menu",
                    b),
                d = L("html5-modal-panel", b),
                a = this.B = new ap(this.G);
            a.a = c;
            M(a.a);
            document.body.appendChild(a.a);
            c = a.b;
            c.fd = d;
            c.Mj = L("html5-modal-panel-close-button", d);
            c.Lj = L("html5-modal-panel-clipboard-substitute-content", d);
            c.he = ue("input", c.Lj);
            c.yj = L("html5-modal-panel-infobox-content", d);
            var f = L("html5-show-video-info-template", d);
            c.a = fl(f, "videoId videoWidth videoHeight volume streamType decodedFrames droppedFrames parsedFrames presentedFrames videoBytesDecoded audioBytesDecoded paintedFrames paintDelay".split(" "));
            c.ib.N(document, "keydown", u(c.In, c));
            c.ib.N(c.Mj, "click", u(c.Gn, c));
            c.ib.N(d, "contextmenu", u(c.Hn, c));
            Q(c.he, "click", u(c.Kj, c));
            var d = {
                    yn: a.Jn,
                    zn: a.Kn,
                    An: u(a.Nj, a, l),
                    Bn: u(a.Nj, a, j),
                    Cn: a.Ln,
                    Dn: a.Mn,
                    En: a.Nn,
                    Fn: a.On
                },
                g;
            for (g in d) bp(a, g, d[g]);
            g = L("html5-context-menu-pop-out", a.a);
            Yd(g, window.opener == k);
            b = L("html5-info-bar", b);
            g = this.U = new gp;
            g.a = b;
            Q(g.a, "click", u(g.j, g, "click"));
            g.k = L("html5-title", g.a);
            g.e = L("html5-author", g.a);
            g.g = ue("span", g.e);
            ip(this)
        };
        n.ti = function(a) {
            hp.s.ti.call(this, a);
            var b = this.G.getEnvironmentData();
            "embedded" == b.eventLabel && b.gd && this.U.update(a.title, a.author)
        };
        n.Uh = function(a) {
            hp.s.Uh.call(this, a);
            $c(this.J, Nh[If(a.b)], Nh[If(a.a)]);
            T(a.a, 1) ? this.al() : this.ci();
            0 < tl(a, 64) ? I(this.J, "seeking-mode") : 0 > tl(a, 64) && J(this.J, "seeking-mode")
        };

        function ip(a) {
            var b = a.G.getEnvironmentData();
            if (b.xa) {
                var c = u(function(a) {
                    return jp(a) || ad(a.target, "html5-draggable")
                }, a);
                new Di(a.J, u(function(a) {
                    var b = T(this.G.getPlayerState(), 2);
                    b ? b && Nk.hasTags(h) && this.Zl(a) : jp(a) && (ad(this.J, "hide-controls") ? this.j("showcontrols") : this.j("hidecontrols"), this.j("hidemenus"))
                }, a), l, c);
                Q(a.J, "gesturechange", u(a.Op, a));
                Q(a.J, "gestureend", u(a.Pp, a))
            } else Q(a.J, "click", u(a.Zl, a)), Q(a.J, "dblclick", u(a.Np, a)), Q(a.J, "click", u(a.j, a, "showcontrols")), Be(a.J, "move", u(a.j,
                a, "showcontrols")), Be(a.J, "out", u(a.j, a, "hidecontrols"));
            var d = u(function() {
                Nk.fillPool(4);
                b.xa && Hi();
                var a = Ae(this.J, "click", d, j);
                a && Ee(a)
            }, a);
            Q(a.J, "click", d, j);
            Q(a.J, "keypress", u(a.Qp, a));
            Q(a.J, "keydown", u(a.Mp, a));
            Q(a.J, "contextmenu", u(a.B.Lp, a.B));
            Q(a.e, "click", u(a.$l, a));
            "embedded" == b.eventLabel && a.U.n("click", u(a.$l, a))
        }
        n.Zl = function(a) {
            var b = this.G.getEnvironmentData();
            jp(a) && (this.J.focus(), (T(this.G.getPlayerState(), 2) || !b.Sa) && this.j("playpausetoggled", j))
        };
        n.Np = function(a) {
            jp(a) && this.j("fullscreentoggled")
        };

        function kp(a, b, c, d) {
            d * (a.ua ? -1 : 1) > (a.ua ? -c : b) && a.j("fullscreentoggled")
        }
        n.Op = function(a) {
            kp(this, 1.3, 0.7, a.Ym);
            a.preventDefault()
        };
        n.Pp = function(a) {
            kp(this, 1.1, 0.9, a.Ym)
        };

        function jp(a) {
            return !ud(a.target, "html5-stop-propagation")
        }
        n.Qp = function(a) {
            var b = a.keyCode;
            if (179 == b || 178 == b)
                if (179 == b && (this.j("playpausetoggled", j), a.preventDefault()), 178 == b) this.j("stop"), a.preventDefault();
            98 == b && this.j("publishtomodules", "onToggleBackground");
            (187 == b || 43 == b) && this.j("publishtomodules", "onFontSizeIncrease");
            (189 == b || 45 == b) && this.j("publishtomodules", "onFontSizeDecrease");
            32 == b && jp(a) && (this.j("playpausetoggled", j), a.preventDefault())
        };
        n.Mp = function(a) {
            var b = a.keyCode;
            if (38 == b || 40 == b || 37 == b || 39 == b) 38 == b ? this.j("increasevolume") : 40 == b ? this.j("decreasevolume") : 37 == b ? this.j("seekby", -5) : 39 == b && this.j("seekby", 5), a.preventDefault();
            27 == b && (this.j("exitfullscreen"), a.preventDefault())
        };
        n.$l = function(a) {
            a.preventDefault();
            this.j("visitparentsite")
        };
        n.El = function() {
            J(this.J, "hide-controls")
        };
        n.wl = function() {
            I(this.J, "hide-controls")
        };
        n.Mf = function(a) {
            bd(this.J, "html5-autohide", a)
        };
        n.gg = function() {
            J(this.e, "html5-branded-watermark");
            N(this.e)
        };
        n.rl = function(a) {
            this.e.src = a;
            I(this.e, "html5-branded-watermark");
            N(this.e)
        };
        n.ri = function() {
            O(this.e)
        };
        n.lm = function(a) {
            this.hi();
            var b = this.a,
                c = this.G.getEnvironmentData().Fb,
                d = document.body;
            d.style.backgroundSize != h || d.style.MozBackgroundSize != h || d.style.WebkitBackgroundSize != h || d.style.MsBackgroundSize != h || d.style.OBackgroundSize != h ? (d = document.createElement("div"), d.style.backgroundImage = "url(" + al(b, a, c) + ")") : (d = document.createElement("img"), d.src = al(b, a, c), a = d, b.clientWidth / b.clientHeight < $k ? (a.style.height = "100%", a.style.width = "auto") : (a.style.height = "auto", a.style.width = "100%"));
            I(d, "video-thumbnail");
            this.u = d;
            this.a.appendChild(this.u)
        };
        n.hi = function() {
            this.u && (M(this.u), this.u = k)
        };
        n.al = function() {
            ie(this.ij);
            this.ij = he(u(this.or, this), 125)
        };
        n.or = function() {
            this.Jd += 45;
            this.g.style.MozTransform = "rotate(" + this.Jd + "deg)";
            this.g.style.WebkitTransform = "rotate(" + this.Jd + "deg)";
            this.g.style.OTransform = "rotate(" + this.Jd + "deg)";
            this.g.style.msTransform = "rotate(" + this.Jd + "deg)"
        };
        n.ci = function() {
            ie(this.ij)
        };
        n.yk = function() {
            var a = gd("html5-popup-dialog", this.J);
            B(a, function(a) {
                O(a)
            }, this)
        };
        n.Gm = function() {
            return !!this.qa
        };
        n.fj = function(a) {
            this.qa.innerHTML = a;
            N(this.M)
        };
        n.Fm = function() {
            O(this.M)
        };
        n.tl = function(a) {
            var b = document.createElement("div");
            I(b, "html5-bezel", "html5-center-overlay");
            var c = document.createElement("div");
            a ? I(c, "html5-bezel-pause") : I(c, "html5-bezel-play");
            b.appendChild(c);
            this.a.appendChild(b);
            P(function() {
                I(b, "html5-bezel-fade")
            }, 0);
            P(function() {
                M(b)
            }, 300)
        };
        n.Uk = function(a) {
            L("html5-viewport-sheet").disabled = !a
        };
        n.Hl = function(a) {
            le(document.body, "player-size", a)
        };
        n.Nl = function(a) {
            if (!this.ra || !Rb(this.ra, a)) {
                this.ra = a;
                var b = a.width,
                    a = a.height,
                    c = 0,
                    d = 0;
                b / a > 480 / 360 ? (c = a, d = 360) : (c = b, d = 480);
                b = Ob(c / d, 0.53, 1);
                this.ya = Xk(".html5-scalable-icon", ["transform: scale(" + b + ") !important", "-webkit-transform: scale(" + b + ") !important", "-moz-transform: scale(" + b + ") !important", "-o-transform: scale(" + b + ") !important", "-ms-transform: scale(" + b + ") !important"], {
                    Ec: this.ya,
                    reset: j
                })
            }
        };
        n.appendAboveVideoControls = function(a) {
            var b = this.oa;
            b.insertBefore(a, b.childNodes[0] || k)
        };

        function lp(a) {
            return (a = /\/([ve]|embed)\/([^\?]+)/.exec(a)) && a[2] ? a[2] : k
        };
        var mp = [102, 107, 108];

        function np(a, b, c) {
            this.b = [];
            this.g = [];
            this.k = [];
            this.Rc = "";
            c = c || {};
            this.o = c.nbe;
            this.C = c.bc;
            this.u = c.bd;
            this.Yc = c.bt;
            this.sj = c.fs;
            this.tj = c.mos;
            this.source = c.sourceid;
            this.Wc = c.sd;
            this.gn = c.hmewadbc;
            this.mc = c.hmewdfc;
            this.hn = c.hmewdrop;
            this.jn = c.hmewvdbc;
            this.Ud = c.hmemdf;
            this.Td = c.hmempaintdelay;
            this.Rd = c.hmempainted;
            this.Qa = c.hmempf;
            this.Wg = c.hmempresented;
            this.Zc = c.volume;
            this.Xg = b.Xg;
            this.uj = b.sb;
            this.oa = b.M;
            this.Nc = b.a;
            this.eventLabel = b.eventLabel;
            this.k = b.b;
            this.Zd = b.k;
            this.Wd =
                b.e;
            this.Yd = b.Yd ? "1" : h;
            this.M = Zh(b);
            this.bn = b.Ra;
            this.referrer = b.referrer;
            this.cn = b.U;
            this.$m = b.g;
            this.U = new G(window.screen.width, window.screen.height);
            this.dn = b.ya;
            this.gb = b.Qa;
            this.eb = b.gb;
            var d, c = q("yt.www.watch.activity.getTimeSinceActive");
            "detailpage" == b.eventLabel && c && (d = c());
            this.Uc = d;
            this.ea = $h(b);
            this.lc = b.eb;
            this.fn = b.B;
            a.format && a.Nc && (this.Vc = a.Uc, this.qa = a.B, this.Pc = a.Vc, this.format = a.format, this.vj = a.kc, this.ra = a.Te, this.ya = a.Mg, this.pa = a.pa, this.an = a.k, this.a = a.a, this.wj = a.Tg, this.e =
                a.e, this.en = a.Pc, this.A = a.A, this.tb = a.Nc)
        }
        n = np.prototype;
        n.uj = l;
        n.jj = l;
        n.sj = l;
        n.Og = l;
        n.tj = l;
        n.vj = l;
        n.wn = "yt";
        n.wj = l;
        n.Hj = l;

        function op(a) {
            if (!a.Hj) {
                var b = {
                    html5: "1",
                    ns: a.wn,
                    ps: a.bn,
                    el: a.eventLabel,
                    hl: a.Wd,
                    cr: a.cn,
                    docid: a.A,
                    sd: a.Wc,
                    sourceid: a.source,
                    referrer: a.referrer,
                    q: a.dn,
                    plid: a.pa,
                    fmt: a.format ? a.format.a : 0,
                    fs: a.sj ? "1" : "0",
                    screenw: a.U.width,
                    screenh: a.U.height,
                    w: a.ea.width,
                    h: a.ea.height,
                    vw: a.tb.width,
                    vh: a.tb.height,
                    playerw: a.M.width,
                    playerh: a.M.height,
                    vid: a.fn,
                    hbid: a.an,
                    rt: a.ef(a.Tc),
                    mos: a.tj,
                    volume: a.Zc,
                    app: a.Xg,
                    csipt: a.Vc,
                    on3g: a.Yd,
                    subscribed: a.e,
                    sw: a.Pc,
                    list: a.a,
                    eurl: a.Nc,
                    framer: a.Zd,
                    feature: a.$m,
                    threed: a.en,
                    lact: a.Uc
                };
                a.Og && (b.playback = "1");
                a.uj && (b.autoplay = "1");
                a.vj && (b.splay = "1");
                a.qa && (b.delay = a.qa);
                a.wj && !a.Og && (b.vtmp = "1");
                a.jj && (b.tv = "1");
                a.oa && (b.content_v = a.oa);
                a.gb != h && a.eb && (b.uga = a.eb + a.gb);
                a.B != h && (b.len = a.ef(a.B));
                0 < a.k.length && (b.fexp = a.k.toString());
                0 < a.ra && (b.idpj = a.ra);
                0 < a.ya && (b.ldpj = a.ya);
                a.lc != h && (b.attrib = a.lc);
                a.C && (b.bc = a.C);
                a.u && (b.bd = a.u, b.bt = a.Yc);
                0 < a.o && (b.nbe = a.o);
                a.mc != h && (b.hmewdfc = a.mc, b.hmewdrop = a.hn, b.hmewvdbc = a.jn, b.hmewadbc = a.gn);
                a.Qa != h && (b.hmempf = a.Qa, b.hmemdf = a.Ud, b.hmempresented =
                    a.Wg, b.hmempainted = a.Rd, b.hmempaintdelay = a.Td);
                0 < a.b.length && (b.st = a.b.map(a.ef).join(","), b.et = a.g.map(a.ef).join(","));
                b = R(a.Rc, b);
                S(b);
                a.Hj = j
            }
        }
        n.ef = function(a) {
            return (1 * a.toFixed(3)).toString()
        };

        function pp() {}
        z(pp, Ub);
        n = pp.prototype;
        n.mh = [10, 10, 10, 40];
        n.Vi = 0;
        n.Wl = 0;
        n.oh = k;
        n.Oc = k;
        n.pj = "";
        n.Ob = 0;
        n.tm = 0;
        n.nh = 0;
        n.Vd = 0;
        n.Je = 0;
        n.rg = [];
        n.ie = 0;
        n.sg = [];
        n.Oj = function() {
            qp(this);
            this.Vi = Math.min(this.Vi + 1, this.mh.length - 1);
            var a = this.mh[this.Vi];
            rp(this);
            this.e = he(u(this.Oj, this), 1E3 * a)
        };

        function rp(a) {
            a.e != h && ie(a.e)
        }
        n.Pn = function() {
            var a = this.Oc(),
                b = (x() - this.Vd) / 1E3,
                c = a - this.Ob;
            if (0 != c) {
                var d = b - this.nh;
                if (0 > c || c > d + 0.2) sp(this), this.ie = a;
                this.nh = b
            }
            this.Ob = a
        };

        function sp(a) {
            400 < a.Wl ? rp(a) : 3 < a.Ob - a.ie && (a.sg[a.Je] = a.ie, a.rg[a.Je] = a.Ob, a.Je++, a.ie = a.Ob)
        }

        function tp(a) {
            var b = {},
                c = a.oh();
            v(b, c);
            b = new np(a.i, a.a, b);
            b.Tc = (x() - a.Vd) / 1E3;
            b.B = a.o();
            return b
        }

        function up(a) {
            var b = a.a,
                a = a.i,
                c = {
                    ns: "yt",
                    html5: "1",
                    el: b.eventLabel,
                    ps: b.Ra,
                    fexp: b.b.join(",") || h,
                    list: a.a,
                    d: b.ea,
                    c: b.oa,
                    f: b.qa
                };
            b.sb && (c.autoplay = "1");
            a.e && (c.subscribed = a.e);
            return c
        }

        function qp(a) {
            sp(a);
            vp(a, h)
        }

        function vp(a, b) {
            if (b || 0 < a.Je && a.i.Pg) {
                var c = b || tp(a);
                a.sg.length && a.rg.length && (c.b = a.sg, c.g = a.rg);
                op(c);
                a.sg = [];
                a.rg = [];
                a.Wl++
            }
            a.Je = 0
        }

        function wp(a, b) {
            b.rt = (x() - a.Vd) / 1E3;
            var c = a.oh();
            v(b, c);
            "streamingerror" == b.event ? (c = "//web.archive.org/web/20120609184927/http://s.youtube.com/stream_204", b.videoId && delete b.videoId) : c = a.a.cb + "player_204";
            c = R(c, up(a));
            c = R(c, b);
            S(c)
        }

        function xp(a, b) {
            var c = a.a,
                d = a.i,
                f = {
                    el: c.eventLabel,
                    eurl: c.a,
                    fmt: d.format ? d.format.a : 0,
                    html5: 1,
                    list: d.a,
                    plid: d.pa,
                    ps: c.Ra,
                    noflv: 1,
                    st: a.Oc(),
                    video_id: d.A
                };
            c.sb && (b.autoplay = "1");
            d.Qg && (b.tmi = "1");
            v(f, b);
            c = Ze(f);
            S("/live_204?" + c)
        }
        n.D = function() {
            pp.s.D.call(this);
            rp(this);
            this.g != h && ie(this.g)
        };

        function yp() {
            this.g = 0;
            this.e = 12;
            this.k = "index";
            this.a = 0;
            this.b = []
        }

        function zp(a) {
            Ap(a, "value");
            var b = 0.5 * a.a,
                c = 0,
                d = NaN;
            a.b.some(function(a) {
                c += a.te;
                d = a.value;
                if (c >= b) return j
            });
            return d
        }

        function Ap(a, b) {
            a.k != b && Qa(a.b, b)
        };

        function Bp() {
            this.b = new H;
            this.e = new yp;
            this.a = []
        }
        z(Bp, W);

        function Cp(a) {
            if (2 > a.a.length) a.a = [];
            else {
                for (var b, c = a.a.shift(); b = a.a.shift();) {
                    var d;
                    d = b;
                    var f = (d.timeStamp - c.timeStamp) / 1E3;
                    if (0 >= f) d = k;
                    else {
                        var g = d.Jj - c.Jj;
                        d = {
                            weight: Math.min(f + g, 12 / 2.2),
                            bitrate: g / f * d.xn
                        }
                    }
                    if (d) {
                        c = a.e;
                        f = d.weight;
                        d = d.bitrate;
                        c.b.push({
                            index: c.g++,
                            te: f,
                            value: d
                        });
                        c.a += f;
                        for (Ap(c, "index"); c.a > c.e;) d = c.a - c.e, f = c.b[0], f.te <= d ? (c.a -= f.te, c.b.shift()) : (c.a -= d, f.te -= d);
                        c = b
                    }
                }
                a.j("update", zp(a.e))
            }
        };

        function Dp(a, b) {
            this.a = a;
            this.b = b
        }

        function tl(a, b) {
            return T(a.a, b) && !T(a.b, b) ? 1 : !T(a.a, b) && T(a.b, b) ? -1 : 0
        };

        function Ep(a) {
            this.a = a
        }

        function Fp(a, b) {
            var c = k;
            b.u && (c = Og(b, b.u));
            !c && "auto" != a.a.o && (c = Og(b, a.a.o));
            c || (c = b.kb, a.a.ff && (c = pg(c, a.a.lk)), (c = qg(a.a.ei, c, !a.a.Ah)) || (c = b.kb[0]));
            return c
        };

        function Gp(a) {
            this.b = new H;
            this.e = a;
            this.a = new Ep(this.e)
        }
        z(Gp, W);

        function Hp(a, b) {
            var c = Fp(a.a, b);
            c != b.format && (b.format = c, a.j("internalvideoformatchange", b, c))
        };

        function Qo() {
            var a = [Rk];
            La(a, bo, nl, vl, Do, Io, No);
            return a
        }

        function Ip(a, b) {
            this.C = {};
            this.g = [];
            this.Eb = new pn;
            this.pubsub = new H;
            this.pubsub.n("openingpage", u(this.Jo, this));
            this.pubsub.n("initializingmode", u(this.Io, this));
            this.pubsub.n("statechange", u(this.Ko, this));
            this.pubsub.n("internalenvironmentdatachange", u(this.Ho, this));
            this.pubsub.n("internalvideodatachange", u(this.Qo, this));
            this.pubsub.n("internalvolumechange", u(this.ih, this));
            var c = b;
            c instanceof Je || (c = new Je(c));
            this.mb = c;
            this.a = new Sh(this.mb.args);
            this.pubsub.j("internalenvironmentdatachange",
                "newdata");
            this.a.xa && (this.a.u = "dark");
            this.Dh = new Ge(this);
            this.rh = new Ge(this);
            this.Rb = new Gp(this.a);
            this.Rb.n("internalvideoformatchange", u(this.Oo, this));
            this.ta = new Jf(u(this.getCurrentTime, this), u(this.getPlayerState, this), u(this.gk, this));
            this.ga = new Oo;
            this.K = new Gf;
            this.k = new tc(3E4);
            this.k.addEventListener("tick", u(this.Lo, this));
            this.z = new hp(this);
            this.z.n("documentready", this.Po, this);
            this.z.n("templateerror", this.Mo, this);
            this.z.n("templateready", this.No, this);
            this.z.n("resize", this.lf,
                this);
            this.z.Jh(a, this.mb)
        }
        n = Ip.prototype;
        n.zb = k;
        n.Hh = k;
        n.Me = k;
        n.Dh = k;
        n.rh = k;
        n.list = k;
        n.r = k;
        n.fh = 0;
        n.vn = l;
        n.ua = l;
        n.Wi = l;
        n.ga = k;
        n.ud = j;
        n.Fd = l;
        n.wi = 0;
        n.nc = 0;
        n.Pj = l;
        n.pubsub = k;
        n.ta = k;
        n.mb = k;
        n.K = k;
        n.Eb = k;
        n.$ = k;
        n.Nb = 0;
        n.ge = 0;
        n.ed = 0;
        n.Ug = j;
        n.oj = 0;
        n.je = k;
        n.Rb = k;
        n.z = k;

        function Jp(a, b, c) {
            Ie(a.Dh);
            a.m = b;
            a.zb = a.m;
            Kp(a);
            var b = a.m,
                d = a.$.muted;
            b.volume = a.$.volume / 100;
            b.muted = d;
            b = a.z;
            b.m = a.m;
            c != l && !b.m.parentNode && b.k.appendChild(b.m);
            I(b.m, "video-stream");
            c = b.G.getEnvironmentData();
            c.Sa && c.ic && b.m.setAttribute("controls", j);
            c.loop && b.m.setAttribute("loop", j);
            c.qh && b.m.setAttribute("webkit-playsinline", j);
            b.m.setAttribute("x-webkit-airplay", "allow");
            a.a.m = a.m
        }

        function Lp(a) {
            a.g = Ka(a.i.o);
            Hp(a.Rb, a.i);
            Mp(a);
            a.r.Xl(a.i);
            Po(a.ga);
            a.i.Pa && (Np(a, a.i.la), Op(a, j));
            a.pubsub.j("videoready")
        }

        function Mp(a) {
            a.i && a.i.qa && !Eg.test(a.i.qa) ? a.z.rl(a.i.qa) : a.a.Qc && a.a.gd ? a.z.ri() : a.a.Qc && !a.a.gd ? a.z.gg() : a.a.si && !a.a.gd && !a.a.ic ? a.z.gg() : a.a.si && a.a.Sa ? a.z.gg() : a.z.ri()
        }

        function Pp(a, b) {
            a.i && a.i.Ta();
            a.i = new Cg(b);
            a.i.n("videoinfo", a.Qn, a);
            a.i.n("onStatusFail", a.Rn, a);
            wc(a.k);
            a.e && (a.e.Ta(), delete a.e);
            a.e = new pp;
            var c = a.e,
                d = a.a,
                f = u(a.Vg, a),
                g = u(a.getDuration, a),
                i = u(a.getCurrentTime, a);
            c.i = a.i;
            c.a = d;
            c.pj = c.a.cb + "get_video";
            c.oh = f;
            c.o = g;
            c.Oc = i;
            c.b = l;
            a.pubsub.j("internalvideodatachange", "newdata", a.i);
            a.ta && a.ta.reset();
            a.C = {}
        }
        n.getVideoData = function() {
            return this.i
        };
        n.getEnvironmentData = function() {
            return this.a
        };
        n.Io = function() {
            ie(this.nc);
            this.ih(this.$);
            this.z.Fm()
        };
        n.Vg = function() {
            var a = {},
                a = this.i,
                b = {};
            a.format && (b.fmt = a.format.a);
            a.oe && (b.threed = a.Pc);
            b.plid = a.pa;
            b.list = a.a;
            a.A && (b.videoId = a.A);
            a.Sg && (b.infringe = 1);
            a.kc && (b.splay = 1);
            a.k && (b.hbid = a.k);
            a.Xc && (b.live = a.Pa ? "dvr" : "live");
            a.Wj && (b.autoplay = 1);
            a = b;
            this.m.webkitDecodedFrameCount && (a.hmewdfc = this.m.webkitDecodedFrameCount, a.hmewdrop = this.m.webkitDroppedFrameCount, a.hmewvdbc = this.m.webkitVideoDecodedByteCount, a.hmewadbc = this.m.webkitAudioDecodedByteCount);
            this.m.mozParsedFrames && (a.hmempf = this.m.mozParsedFrames,
                a.hmemdf = this.m.mozDecodedFrames, a.hmempresented = this.m.mozPresentedFrames, a.hmempainted = this.m.mozPaintedFrames, a.hmempaintdelay = this.m.mozPaintDelay);
            a.fs = this.ua;
            a.volume = this.getVolume();
            a.mos = this.isMuted() ? 1 : 0;
            return a
        };
        n.Po = function() {
            $.Gb("fs")
        };
        n.Mo = function() {
            Qp(this, 5)
        };
        n.No = function() {
            this.a.tb = this.z.J;
            this.z.Lg();
            this.a.Sa || !this.a.ic ? this.r = new Qi : this.r = new Si(this.a);
            this.r.Ck(this.z.vk());
            this.r.Ba("playpausetoggled", u(this.Ak, this));
            this.r.Ba("seekto", u(this.yo, this));
            this.r.Ba("mutetoggled", u(this.uo, this));
            this.r.Ba("volumechanged", u(this.Th, this));
            this.r.Ba("speedchanged", u(this.zo, this));
            this.r.Ba("sizechangerequested", u(this.vo, this));
            this.r.Ba("fullscreentoggled", u(this.zk, this));
            this.r.Ba("qualitychanged", u(this.wo, this));
            this.r.Ba("beginseeking",
                u(this.po, this));
            this.r.Ba("endseeking", u(this.ro, this));
            this.r.Ba("watchlater", u(this.Co, this));
            this.r.Ba("watchonyoutube", u(this.Do, this));
            this.a.Tj && this.r.Dk();
            this.a.Xe && (this.r.Bk(), Rp(this));
            this.a.We || this.r.wk();
            if (this.a.rj) {
                var a = this.z;
                a.n("showcontrols", this.Qd, this);
                a.n("hidecontrols", this.rk, this);
                a.n("hidemenus", this.r.xk, this.r);
                a.n("increasevolume", this.to, this);
                a.n("decreasevolume", this.qo, this);
                a.n("playpausetoggled", this.Ak, this);
                a.n("exitfullscreen", this.so, this);
                a.n("fullscreentoggled",
                    this.zk, this);
                a.n("seekby", this.xo, this);
                a.n("stop", this.Ao, this);
                a.n("publishtomodules", this.ub, this);
                a.n("visitparentsite", this.Bo, this);
                Mp(this);
                var a = u(this.no, this),
                    b = document,
                    c;
                (c = "onfullscreenchange" in b ? "fullscreenchange" : "onmozfullscreenchange" in b ? "mozfullscreenchange" : "onmsfullscreenchange" in b ? "msfullscreenchange" : "onofullscreenchange" in b ? "ofullscreenchange" : "onwebkitfullscreenchange" in b ? "webkitfullscreenchange" : k) && Q(b, c, a)
            }
            this.$ = this.Eb.getVolume();
            Jp(this, Jh(), l);
            Pp(this, this.mb.args);
            if ("detailpage" == this.a.eventLabel) {
                a: {
                    b = this.Eb;a = this.i.A;
                    if (b.a && (b = b.a.get("yt-player-restore-playhead"))) {
                        a = b[a];
                        break a
                    }
                    a = h
                }
                a && (this.i.fa = a)
            }
            a = this.Eb;
            a.a && a.a.a.tc("yt-player-restore-playhead");
            Sp(this);
            Tp(this, this.z.J);
            a = this.ga;
            b = {};
            b.loaded = u(this.lo, this);
            b.command_ad_break_started = u(this.ko, this);
            b.command_ad_break_ended = u(this.jo, this);
            b.command_broadcast_ad_state_change = u(this.mo, this);
            b.command_pause = Up(this.Hb, this);
            b.command_play = Up(this.playVideo, this);
            b.command_seek = Up(this.seekTo,
                this);
            b.command_disable_controls = u(this.r.ke, this.r);
            b.command_enable_controls = u(this.r.le, this.r);
            b.command_redirect_controls = u(this.r.Mh, this.r);
            b.command_stop_redirect_controls = u(this.r.nf, this.r);
            b.command_redirected_show_is_playing = u(this.r.uf, this.r);
            b.command_add_cuerange = u(this.ho, this);
            b.command_remove_cuerange = u(this.Eo, this);
            b.command_remove_cuerange_all = u(this.Fo, this);
            b.command_preroll_ready = u(this.io, this);
            b.command_hide_all_dialogs = u(this.z.yk, this.z);
            b.command_share = u(this.Go, this);
            b.command_log = u(this.Qj, this);
            b.publish_external_event = u(this.oo, this);
            a.Oh = b;
            a.G = this.Hh;
            jg() ? this.a.sb || "detailpage" == this.a.eventLabel && !this.a.xa && !this.a.Sa ? Vp(this) : "leanback" != this.a.eventLabel && Wp(this, j) : Qp(this, 5, je("HTML5_NO_AVAILABLE_FORMATS_FALLBACK"))
        };

        function Wp(a, b) {
            (a.ud = b) ? (a.pubsub.j("initializingmode"), a.z.lm(a.i), Xp(a, Hf(a.K, 2))) : a.z.hi()
        }

        function Vp(a) {
            if (a.i.Yg && !a.a.Fb) Qp(a, 5);
            else {
                a.pubsub.j("initializingmode");
                Wp(a, l);
                if (a.m) {
                    var b = a.z;
                    M(b.m);
                    b.m = k;
                    Nk.releaseTag(a.m)
                }
                a.e.Vd = x();
                Jp(a, Nk.getTag());
                Xp(a, Hf(a.K, 1));
                Yp(a) && (a.i && a.i.kb.length || Zp(a) ? Lp(a) : Tg(a.i, Xh(a.a, a.i)))
            }
        }

        function Zp(a) {
            return !a.i || !a.i.o.length || a.i.me.length ? l : 0 <= Ba(a.i.o, "fresca")
        }

        function Up(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments);
                xc(function() {
                    a.apply(b || this, c)
                })
            }
        }
        n.ko = function() {
            this.pubsub.j("command_ad_break_started")
        };
        n.jo = function() {
            this.pubsub.j("command_ad_break_ended")
        };
        n.mo = function(a, b, c) {
            "leanback" == this.a.eventLabel && ai() && (0 == a ? this.zb = this.m : this.zb = b, this.pubsub.j("onAdStateChange", a, c))
        };
        n.Qj = function(a, b) {
            b.event = a;
            wp(this.e, b)
        };
        n.Go = function() {
            this.pubsub.j("SHARE_CLICKED", this.i.A, this.i.a)
        };

        function Kp(a) {
            "loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange error stalled waiting abort emptied".split(" ").forEach(function(a) {
                this.Dh.N(this.m, a, this.Qq)
            }, a)
        }
        n.Qq = function(a) {
            var b = a.target;
            if (b.currentSrc) {
                switch (a.type) {
                    case "durationchange":
                        this.i.Pa || Np(this, b.getDuration(j));
                        break;
                    case "abort":
                    case "error":
                        var b = {
                                event: "streamingerror"
                            },
                            c = a.target.error;
                        b.ec = 107;
                        c && c.code && (c.code == c.MEDIA_ERR_ABORTED ? b.ec = 200 : c.code == c.MEDIA_ERR_NETWORK ? b.ec = 201 : c.code == c.MEDIA_ERR_DECODE ? b.ec = 202 : c.code == c.MEDIA_ERR_SRC_NOT_SUPPORTED && (b.ec = 203));
                        wp(this.e, b);
                        wc(this.k);
                        this.i.Pd && Ga(mp, b.ec) && (c = this.e, b = b.ec, c.k || (c.k = new cl("error-__ec__")), xp(c, {
                            metric: c.k.Jb({
                                ec: b
                            })
                        }));
                        break;
                    case "ended":
                        Xp(this, Hf(this.K, 8));
                        break;
                    case "loadeddata":
                        this.o && window.clearTimeout(this.o);
                        break;
                    case "loadedmetadata":
                        $.Gb("fvb");
                        this.i.fa && (this.m.currentTime = this.i.fa);
                        this.hf();
                        break;
                    case "loadstart":
                        $.Gb("gv");
                        this.nc && ie(this.nc);
                        this.nc = he(u(this.Rj, this), 100);
                        break;
                    case "playing":
                        this.nc && ($.Gb("plev"), this.Rj());
                        break;
                    case "progress":
                    case "suspend":
                        this.Sc();
                        this.pubsub.j("onLoadProgress", this.getLoadProgressFraction());
                        break;
                    case "stalled":
                        wp(this.e, {
                            event: "streamingerror",
                            ec: 300
                        });
                        break;
                    case "timeupdate":
                        this.Sc(), this.pubsub.j("onVideoProgress", b.currentTime)
                }
                if (this.je) switch (b = this.je, c = this.i, a.type) {
                    case "abort":
                    case "emptied":
                    case "ended":
                    case "error":
                    case "seeking":
                    case "stalled":
                    case "suspend":
                        Cp(b);
                        break;
                    case "progress":
                        var d = a.target.buffered;
                        1 > d.length || (c = {
                            xn: c.format.b,
                            Jj: d.end(a.target.getBufferedTimeRangeIndex()),
                            timeStamp: a.timeStamp
                        }, b.a.push(c), 15 <= b.a.length && Cp(b))
                }
                b = this.K;
                if (T(b, 256)) a = b;
                else {
                    c = b.a;
                    switch (a.type) {
                        case "ended":
                            c = 28;
                            break;
                        case "pause":
                            !T(b,
                                64) && !T(b, 4) && (c = 8);
                            break;
                        case "play":
                            c = 16;
                            break;
                        case "playing":
                            c = 16;
                            break;
                        case "seeked":
                            c &= -33;
                            break;
                        case "seeking":
                            c = (c | 32) & -5;
                            break;
                        case "waiting":
                            c |= 1
                    }
                    a = Hf(b, c)
                }
                Xp(this, a)
            }
        };

        function $p(a, b) {
            a.z.ci();
            Wp(a, l);
            a.z.Gm() ? b ? a.z.fj(b) : a.z.fj(je("HTML5_DEFAULT_FALLBACK")) : a.mb.fallbackMessage && a.mb.fallbackMessage()
        }
        n.toggleThreeD = function() {
            var a = this.Rb,
                b = this.i;
            b.toggleThreeD();
            Hp(a, b);
            this.preparePlayerThreeD();
            this.r && (this.r.Pi(this.i.kb), this.r.Mi(this.i.Dc))
        };
        n.Vl = function() {
            var a, b = Fp(this.Rb.a, this.i);
            b && (a = b.nb);
            return a
        };
        n.bq = function(a) {
            var b = this.Rb,
                c = this.i;
            c.u = a;
            Hp(b, c)
        };
        n.Up = function() {
            for (var a = this.i, b = [], c = 0; c < mg.length; c++) Og(a, mg[c]) && b.push(mg[c]);
            return b
        };
        n.pr = function() {
            var a = this.wq,
                b = this.um,
                c = {
                    video_ids: this.i.A,
                    playlist_id: "",
                    new_playlist_name: "",
                    session_token: ge("addto_ajax")
                },
                d = ee("PLAYBACK_ID");
            d && (c.plid = d);
            var d = {},
                f = "";
            switch ("WL") {
                case "PL":
                    f = "action_add_to_playlist";
                    break;
                case "FL":
                    f = "action_add_to_favorites";
                    break;
                case "WL":
                    f = "action_add_to_watch_later_list"
            }
            d[f] = 1;
            ef("/addto_ajax", {
                tq: j,
                format: "XML",
                method: "POST",
                wg: d,
                rm: c,
                Ke: this,
                Hc: b,
                Bb: a
            })
        };
        n.wq = function() {
            this.r.Im()
        };
        n.um = function(a, b) {
            this.r.Hm(b && b.error_message)
        };

        function fp(a, b) {
            var c = {};
            b && (c = tp(a.e));
            c.debug_videoId = a.i.A;
            c.debug_playbackQuality = a.Vl();
            c.debug_date = (new Date).toString();
            return JSON.stringify(c)
        }
        n.Vp = function() {
            return fp(this)
        };
        n.preparePlayerThreeD = function(a) {
            this.i.mf && this.r && this.r.Mi(this.i.Dc);
            (a = !!this.i.oe || !!this.i.Dc || !a) && this.m.setAttribute("mozStereoMode", "1");
            if (Eo()) {
                this.m.setAttribute("mozStereoMode", a ? "1" : "0");
                var b = Uf[a ? this.i.Rd : 0],
                    a = document.createElement("NvStereoExtDataElement");
                a.setAttribute("stereoMode", b);
                qd(document.documentElement, a);
                document.createEvent ? (b = document.createEvent("HTMLEvents"), b.initEvent("3DModeEvent", j, j), a.dispatchEvent(b)) : (b = document.createEventObject(), a.fireEvent("on3DModeEvent",
                    b))
            }
        };
        n.getCurrentTime = function() {
            return this.m.getCurrentTime()
        };
        n.Jk = function() {
            return If(this.K)
        };
        n.getPlayerState = function() {
            return this.K
        };
        n.Ko = function(a) {
            this.z.Uh(a);
            var b;
            0 < tl(a, 16) ? (this.r.uf(j), b = j) : 0 > tl(a, 16) && (this.r.uf(l), Op(this, l));
            0 > tl(a, 32) && (this.r.Ve(this.getCurrentTime()), this.r.ql(this.getCurrentTime(), this.getDuration()));
            0 < tl(a, 64) && (b = l, Op(this, l));
            T(a.a, 4) && (this.Hb(), b = l);
            this.a.jc && b != k && (this.z.Mf(b), this.Qd());
            T(a.a, 256) && (a = a.a, ie(this.nc), ep(this), a = a.getData(), 5 == a.errorCode ? aq(this, a.message) : $p(this, a.message), this.pubsub.j("onError", a.errorCode))
        };
        n.Qo = function(a) {
            "newdata" == a && (Ro(this.ga), this.r.zl(this.i), this.i.Pd && xp(this.e, {
                metric: "connected"
            }));
            this.z.ti(this.i);
            this.r.Al(this.i);
            this.oj = Math.min(0.8 * this.i.la, 180);
            this.$.volume = (this.$.nonNormalized || this.$.volume) * this.i.Ng;
            if (this.i.Sg) {
                var b = this.m;
                b.volume = 0;
                b.muted = j;
                this.r.ph(0, j);
                this.r.ke(["audio"])
            } else this.r.Ea("audio") && (this.r.le(["audio"]), this.ih(this.$));
            this.i.Xc && !this.i.Pa ? this.r.ke(["seek"]) : this.r.le(["seek"]);
            if (this.i.oa || this.i.fb.focEnabled || this.i.fb.rmktEnabled) b =
                1E3 * this.i.la, bq(this, "part2viewed", 0, b), bq(this, "videoplaytime25", 0.25 * b, b), bq(this, "videoplaytime50", 0.5 * b, b), bq(this, "videoplaytime75", 0.75 * b, b), bq(this, "videoplaytime100", b, 2147483647), bq(this, "conversionview", b, 2147483647);
            this.ub("onVideoDataChange", a);
            this.pubsub.j("onVideoDataChange", a, this.i)
        };
        n.Oo = function(a, b) {
            a == this.i && (this.r.am(b.nb), this.ud || (0 == this.g.length ? (Lf(this.ta), this.playVideo()) : this.Hb()), this.pubsub.j("onPlaybackQualityChange", b.nb))
        };
        n.Ho = function() {
            if (this.a.lh) {
                var a = this.b = new Wg(this.a.C),
                    b = u(this.So, this);
                a.Nh = b;
                a.Wa && a.Nh()
            }
            if (this.a.ff) {
                var a = this.a,
                    c;
                b = this.Eb;
                b.e && (c = b.e.get("yt-player-bwc"));
                a.lk = c;
                this.je = new Bp;
                this.je.n("update", this.To, this)
            } else this.je = k
        };

        function cq(a) {
            var b = q("yt.www.lists.getState"),
                c = b ? b() : h;
            if (c && 0 <= c.index) {
                var d = [];
                c.videoIds.forEach(function(a) {
                    if (a = c.videoData ? c.videoData[a] : h) a.video_id = a.id, d.push(a)
                });
                a.b = new Wg({
                    videoList: d,
                    loop: c.autoPlay,
                    index: c.index
                });
                a.a.lh = j
            }
        }

        function bq(a, b, c, d) {
            b in a.C || (c = new Df(c, d, {
                id: b,
                priority: 0
            }), c.pubsub.n("onEnter", a.zm, a), c.pubsub.n("onExit", a.zm, a), a.ta.km(c), a.C[b] = c)
        }
        n.zm = function(a) {
            var b = a.getId();
            "part2viewed" == b ? (this.i.oa && S(this.i.oa), this.i.lc && S(this.i.lc)) : "videoplaytime25" == b || "videoplaytime50" == b || "videoplaytime75" == b ? qp(this.e) : "conversionview" == b && dq(this);
            this.i.mc && (b = a.getId(), b = af(this.i.mc, {
                label: b
            }), S(b));
            this.ta.bm(a)
        };

        function dq(a) {
            if (!a.i.ul) {
                a.i.fb.eventLabel = a.a.eventLabel;
                a.i.fb.playerStyle = a.a.Ra;
                a.i.fb.vid = a.i.A;
                var b = Sk("view", a.i.fb);
                b && S(b);
                a.i.ul = j
            }
        }

        function Xp(a, b) {
            if (b.a != a.K.a) {
                var c = new Dp(b, a.K);
                a.K = b;
                var d = "embedded" == a.a.eventLabel;
                if (T(b, 4) && (a.ua || d) && a.getAutoplay()) a.qj();
                else {
                    a.pubsub.j("statechange", c);
                    d = a.ta;
                    if (d.Ze && !d.hb)
                        if (Mf(d), T(c.a, 4)) {
                            d.e = k;
                            for (var f = [], g = 0; g < d.a.length; g++) {
                                var i = d.a[g];
                                i.Ue && 2147483647 > i.end && (f.push(i), d.a.splice(g--, 1))
                            }
                            g = [];
                            if (f.length)
                                for (i = 0; i < f.length; i++) g.push(["onExit", f[i]]);
                            d = g.concat(Nf(d, xf(d.Ib, d.b)));
                            for (g = 0; g < d.length; g++) f = d[g], i = f[1], i.pubsub.j.apply(i.pubsub, f)
                        } else T(c.a, 32) ? (d.b = 1E3 *
                            d.k(), wc(d.g), d.g.start(), d.Ua()) : (wc(d.g), T(c.b, 32) ? T(c.a, 16) && !d.o() && qf(d.Ib, Math.max(d.b - 2E3, 0)) && (d.ae = xc(u(d.Ua, d))) : d.Ua());
                    a.ub("onStateChange", c);
                    a.pubsub.j("onStateChange", If(b));
                    T(b, 4) && (a.i.Pa && (Np(a, a.m.currentTime), a.Sc()), a.Qd())
                }
            }
        }

        function Qp(a, b, c) {
            Xp(a, Hf(a.K, 256, {
                errorCode: b,
                message: c
            }))
        }
        n.gk = function() {
            return this.m.paused || this.m.ended
        };
        n.isPeggedToLive = function() {
            return this.Wi
        };

        function Op(a, b) {
            a.i.Pa && a.Wi != b && (a.Wi = b, bd(a.z.J, "html5-live-dvr-engaged", !b))
        }
        n.seekTo = function(a) {
            var a = a || 0,
                b = 1 > this.m.seekable.length ? NaN : this.m.seekable.end(this.m.seekable.length - 1);
            a > b && (a = b, Op(this, j));
            this.ud ? (this.i.fa = a, Vp(this)) : (this.m.seekTo(a), T(this.K, 4) && !T(this.K, 64) && this.m.playVideo())
        };
        n.getDuration = function() {
            return this.m ? this.m.getDuration() : 0
        };

        function Np(a, b) {
            a.m.ug = b;
            a.i.la != b && (a.i.la = b, a.pubsub.j("internalvideodatachange", "videoinfo", a.i))
        }
        n.getLoadProgressFraction = function() {
            return this.m.getLoadProgressFraction()
        };
        n.getVolume = function() {
            return this.$.volume
        };
        n.oq = function(a) {
            this.$.volume = a;
            this.pubsub.j("internalvolumechange", this.$)
        };
        n.Th = function(a) {
            this.$ = a;
            this.pubsub.j("internalvolumechange", this.$)
        };
        n.isMuted = function() {
            return this.$.muted
        };
        n.fm = function() {
            this.$.muted = j;
            this.pubsub.j("internalvolumechange", this.$)
        };
        n.gm = function() {
            this.$.muted = l;
            this.pubsub.j("internalvolumechange", this.$)
        };

        function eq(a, b, c, d) {
            "object" == typeof b && b != k && (c = b.start, d = b.vq, b = b.video_id);
            return {
                list: a.list,
                start: c,
                video_id: b,
                vq: d
            }
        }
        n.loadVideoById = function(a, b, c) {
            return this.loadVideoByPlayerVars(eq(this, a, b, c))
        };
        n.loadVideoByPlayerVars = function(a) {
            ep(this);
            Pp(this, a);
            if (!Yp(this)) return l;
            Vp(this);
            return j
        };
        n.jd = function(a, b, c) {
            this.loadVideoById(a, b, c) && (this.i.kc = j)
        };
        n.Zp = function(a, b, c) {
            this.jd(lp(a), b, c);
            (a = (new Fc(a)).a) && Wh(this.a, a)
        };
        n.uh = function(a, b, c) {
            return this.cueVideoByPlayerVars(eq(this, a, b, c))
        };
        n.cueVideoByPlayerVars = function(a) {
            ep(this);
            Pp(this, a);
            Yp(this) && Wp(this, j)
        };
        n.fq = function(a, b, c) {
            this.uh(lp(a), b, c);
            (a = (new Fc(a)).a) && Wh(this.a, a)
        };
        n.watchVideoById = function(a, b) {
            if (this.i.A == a) this.seekTo(0, j);
            else if (!this.ua && "detailpage" == this.a.eventLabel) {
                var c = {};
                b && (c.feature = b);
                c.list = this.i.a;
                window.location.href = fq(this, a, c)
            } else this.loadVideoById(a)
        };
        n.eq = function(a, b, c, d) {
            this.Fd = j;
            gq(this, a, b, c, d)
        };
        n.jq = function(a, b, c, d) {
            this.Fd = l;
            gq(this, a, b, c, d)
        };

        function gq(a, b, c, d, f) {
            var g = b;
            if ("string" == typeof b || b instanceof Array) g = {
                api: b,
                index: c,
                startSeconds: d,
                suggestedQuality: f
            };
            Th(a.a, g);
            a.pubsub.j("internalenvironmentdatachange")
        }
        n.So = function() {
            this.Fd ? this.uh(bh(this.b).A, this.b.fa, this.b.e) : this.jd(bh(this.b).A, this.b.fa, this.b.e)
        };
        n.getAutoplay = function() {
            return !(!this.b || !(this.b.loop || this.b.ia + 1 < this.b.ha.length))
        };
        n.qj = function() {
            this.b && (this.b.Wa ? (this.b.loop || this.b.ia + 1 < this.b.ha.length) && this.jd(this.b.Cc().A) : (this.b.Cc(), this.Fd = l))
        };
        n.lq = function() {
            this.b && (this.b.Wa ? (this.b.loop || 0 <= this.b.ia - 1) && this.jd(ch(this.b).A) : (ch(this.b), this.Fd = l))
        };
        n.kq = function(a) {
            this.b && (this.b.Wa ? this.jd(bh(this.b, a).A) : this.Fd = l, ah(this.b, a))
        };
        n.gq = function() {
            if (!this.b) return k;
            for (var a = [], b = 0; b < this.b.Af; b++) a[b] = bh(this.b, b).A;
            return a
        };
        n.hq = function() {
            return !this.b || !this.b.b ? k : this.b.b.toString()
        };
        n.iq = function() {
            return this.b ? this.b.ia : k
        };
        n.setShuffle = function(a) {
            this.b && this.b.setShuffle(a)
        };
        n.mq = function(a) {
            this.b && (this.b.loop = a)
        };

        function Yp(a) {
            if (a.i.A) return j;
            Qp(a, 2);
            return l
        }
        n.vg = function() {
            return fq(this, this.i.A)
        };

        function fq(a, b, c) {
            b = {
                list: a.i.a,
                v: b
            };
            a.a.eventLabel && (b.feature = "player_" + a.a.eventLabel);
            c && v(b, c);
            return R(a.a.ra + "://" + ("www.youtube-nocookie.com" == window.location.host ? "www.youtube.com" : window.location.host) + "/watch.php", b)
        }
        n.dq = function() {};
        n.ho = function(a) {
            var b = this.i.la;
            0 < b && a.forEach(function(a) {
                a.visible && this.r.Aa(a.start / (1E3 * b))
            }, this);
            this.ta.km.apply(this.ta, a)
        };
        n.Eo = function(a) {
            var b = this.i.la;
            0 < b && a.forEach(function(a) {
                a.visible && this.r.td(a.start / (1E3 * b))
            }, this);
            this.ta.bm.apply(this.ta, a)
        };
        n.Fo = function(a) {
            for (var b = this.ta, c = b.Xa.length - 1; 0 <= c; c--) b.Xa[c].Qi == a && Kf(b, c);
            b.Ua()
        };
        n.io = function(a) {
            a = this.g.indexOf(a);
            0 <= a && this.g.splice(a, 1);
            0 == this.g.length ? (Lf(this.ta), 0 < wf(this.ta.Ib, -2147483648).length ? Xp(this, Hf(this.K, this.K.a & -2)) : this.playVideo()) : this.Hb()
        };
        n.addEventListener = function(a, b) {
            var c = b;
            "string" == typeof b && (c = function() {
                q(b).apply(window, arguments)
            });
            this.pubsub.n(a, c)
        };

        function Tp(a, b) {
            a.Me = {
                addEventListener: u(a.addEventListener, a),
                getCurrentTime: u(function() {
                    return this.zb.getCurrentTime()
                }, a),
                getPlayerState: u(a.Jk, a),
                seekTo: u(a.aq, a),
                getDuration: u(function() {
                    return this.zb ? this.zb.getDuration() : 0
                }, a),
                getVolume: u(a.getVolume, a),
                setVolume: u(a.oq, a),
                isMuted: u(a.isMuted, a),
                mute: u(a.fm, a),
                unMute: u(a.gm, a),
                playVideo: u(a.$p, a),
                pauseVideo: u(a.hm, a),
                stopVideo: u(a.Yp, a),
                getPlaybackQuality: u(a.Vl, a),
                setPlaybackQuality: u(a.bq, a),
                getAvailableQualityLevels: u(a.Up, a),
                getVideoBytesLoaded: u(function() {
                    var a =
                        this.zb.getLoadProgressFraction();
                    return Math.floor(1E3 * a)
                }, a),
                getVideoBytesTotal: u(function() {
                    return 1E3
                }, a),
                getVideoLoadedFraction: u(function() {
                    return this.zb.getLoadProgressFraction()
                }, a),
                getVideoStartBytes: u(function() {
                    var a = this.zb,
                        b = 0;
                    a.getDuration() && (b = a.startTime / a.getDuration());
                    return Math.floor(1E3 * b)
                }, a),
                setSize: u(a.nq, a),
                loadModule: u(a.ga.Xp, a.ga),
                unloadModule: u(a.ga.cq, a.ga),
                loadVideoById: u(a.jd, a),
                cueVideoById: u(a.uh, a),
                loadVideoByUrl: u(a.Zp, a),
                cueVideoByUrl: u(a.fq, a),
                getVideoUrl: u(a.vg,
                    a),
                getDebugText: u(a.Vp, a),
                addCueRange: u(a.dq, a),
                loadPlaylist: u(a.jq, a),
                cuePlaylist: u(a.eq, a),
                nextVideo: u(a.qj, a),
                previousVideo: u(a.lq, a),
                playVideoAt: u(a.kq, a),
                setLoop: u(a.mq, a),
                setShuffle: u(a.setShuffle, a),
                getPlaylist: u(a.gq, a),
                getPlaylistId: u(a.hq, a),
                getPlaylistIndex: u(a.iq, a),
                setOption: u(a.ga.im, a.ga),
                getOption: u(a.ga.im, a.ga),
                getOptions: u(a.ga.pq, a.ga),
                getApiInterface: u(function() {
                    var a = [],
                        b;
                    for (b in this.Me) a.push(b);
                    return a
                }, a),
                getVideoData: u(function() {
                    return {
                        video_id: this.i.A,
                        author: this.i.author,
                        title: this.i.title
                    }
                }, a),
                destroy: function() {}
            };
            ai() && v(a.Me, {
                loadVideoByPlayerVars: u(a.loadVideoByPlayerVars, a),
                cueVideoByPlayerVars: u(a.cueVideoByPlayerVars, a)
            });
            a.Hh = bb(a.Me);
            var c = {
                loadVideoById: u(a.loadVideoById, a),
                loadVideoByPlayerVars: u(a.loadVideoByPlayerVars, a),
                cueVideoByPlayerVars: u(a.cueVideoByPlayerVars, a),
                watchVideoById: u(a.watchVideoById, a),
                playVideo: u(a.dm, a),
                seekTo: u(a.Gf, a),
                appendToVideoContent: u(a.z.appendToVideoContent, a.z),
                appendAboveVideoControls: u(a.z.appendAboveVideoControls,
                    a.z),
                preparePlayerThreeD: u(a.preparePlayerThreeD, a),
                toggleThreeD: u(a.toggleThreeD, a),
                getAutoplay: u(a.getAutoplay, a),
                getRootNode: u(a.z.Wp, a.z),
                getEnvironmentData: u(a.getEnvironmentData, a),
                getPlayerStateObject: u(a.getPlayerState, a),
                getVideoData: u(a.getVideoData, a),
                isFullscreen: u(function() {
                    return this.ua
                }, a),
                Ea: u(a.r.Ea, a.r),
                isPeggedToLive: u(a.isPeggedToLive, a),
                updateVideoData: u(a.updateVideoData, a)
            };
            v(a.Hh, c);
            v(b, a.Me);
            hq(a)
        }

        function hq(a) {
            var b = q(a.mb.args.jsapicallback || "onYouTubePlayerReady");
            b && b(a.a.Bh)
        }
        n.zo = function(a) {
            var b = this.m,
                a = parseFloat(a);
            b.defaultPlaybackRate = a;
            b.playbackRate = a
        };
        n.rq = function() {
            wp(this.e, {
                event: "streamingerror",
                ec: 102
            })
        };
        n.uo = function() {
            this.isMuted() ? this.gm() : this.fm()
        };
        n.Ak = function(a) {
            if (!this.r.Ea("play_pause") && (!this.a.xa || !this.ud || Nk.hasTags(h))) {
                var b = Ri(this.r);
                b ? b.jg("control_toggle_play_pause") : this.ud ? Vp(this) : (b = this.m, b.paused || b.ended ? b.playVideo() : b.pause(), a && this.z.tl(this.gk()))
            }
        };
        n.Ao = function() {
            this.hm()
        };
        n.Rj = function() {
            if (0 < this.m.currentTime && 0 < this.m.getDuration() && !this.Pj) {
                ie(this.nc);
                this.i.A && $.info("docid", this.i.A);
                this.i.pa && $.info("plid", this.i.pa);
                this.i.k && $.info("hbid", this.i.k);
                0 < this.i.fa && $.info("start", this.i.fa.toString());
                $.info("fmt", this.i.format.a.toString());
                $.info("tds", Math.round(this.getLoadProgressFraction() * this.getDuration()).toString());
                $.Gb("aft");
                if ("detailpage" == this.a.eventLabel) {
                    var a = this.ga.kh,
                        b;
                    for (b in a) $.Gb(b, a[b]);
                    var a = this.ga.jh,
                        c;
                    for (c in a) $.info(c, a[c]);
                    $.gf()
                }
                this.Pj = j;
                c = this.e;
                if (!c.b) {
                    a = tp(c);
                    a.Og = j;
                    c.Ob = c.Oc();
                    c.ie = c.Ob;
                    a.b = [c.Ob];
                    a.g = a.b;
                    c.nh = (x() - c.Vd) / 1E3;
                    op(a);
                    c.i.Pg && (pp.prototype.mh = [10 + c.i.Te, 10, 10, 40 + c.i.Mg - c.i.Te, 40], c.g != h && ie(c.g), c.g = he(u(c.Pn, c), 100), c.e || (rp(c), c.e = he(u(c.Oj, c), 1E4)));
                    c.a.Sd && !c.b && (a = c.a, b = c.i, a = {
                        noflv: "1",
                        html5: "1",
                        video_id: b.A,
                        plid: b.pa,
                        referrer: a.referrer,
                        eurl: a.a,
                        framer: a.k,
                        feature: a.g,
                        fmt: b.format ? b.format.a : 0,
                        ptk: b.g,
                        skl: b.nj
                    }, v(a, up(c)), a = R(c.a.cb + "user_watch", a), S(a));
                    c.i.g && c.i.M && S(R(c.a.cb + "ptracking", {
                        html5: "1",
                        video_id: c.i.A,
                        plid: c.i.pa,
                        ptk: c.i.g,
                        oid: c.i.eb,
                        ptchn: c.i.M,
                        pltype: c.i.tb,
                        content_v: c.a.M
                    }));
                    if (c.i.mj && !c.b) {
                        a = c.a;
                        b = c.i;
                        var d = {
                            noflv: 1,
                            video_id: b.A,
                            el: a.eventLabel,
                            ps: a.Ra,
                            referrer: a.referrer,
                            eurl: a.a,
                            framer: a.k,
                            fmt: b.format ? b.format.a : 0,
                            ptk: b.g,
                            subscribed: b.e,
                            t: b.Qa
                        };
                        a.sb && (d.autoplay = "1");
                        b.kc && (d.splay = "1");
                        0 < b.fa && (d.start = 1E3 * b.fa);
                        b.Qg && (d.tmi = "1");
                        a = R(c.pj, d);
                        S(a)
                    }
                    c.i.Pd && xp(c, {
                        metric: "playback"
                    });
                    c.b = j
                }
                this.i.Pd && this.e.b && this.k.start()
            }
        };
        n.Lo = function() {
            var a = this.e,
                b = this.ge;
            a.tm != b && (xp(a, {
                metric: "heartbeat",
                tpmt: this.ed
            }), a.tm = b)
        };
        n.lo = function() {
            this.pubsub.j("onApiChange")
        };
        n.ih = function(a) {
            a.volume = Ob(a.volume, 0, 100);
            a.nonNormalized = a.volume / this.i.Ng;
            if (this.a.ic) {
                var b = this.Eb;
                if (b.b) {
                    var c = {};
                    c.volume = isNaN(a.volume) ? b.getVolume().volume : Ob(a.volume, 0, 100);
                    c.nonNormalized = a.nonNormalized;
                    c.muted = a.muted == h ? b.getVolume().muted : a.muted;
                    try {
                        xh(b.b, "yt-player-volume", c)
                    } catch (d) {}
                }
            }
            this.r.Ea("audio") || (this.r.ph(a.volume, a.muted), b = this.m, c = a.muted, b.volume = a.volume / 100, b.muted = c, this.pubsub.j("onVolumeChange", a))
        };
        n.Sc = function() {
            this.Nb = this.m.currentTime;
            if (T(this.K, 16) && this.Ug) {
                0 < this.ge && this.Nb > this.ge && (this.ed += this.Nb - this.ge);
                if (this.i.la && !this.i.Gj && this.ed >= this.oj) {
                    var a;
                    a = this.a;
                    var b = this.i,
                        c = Ob(this.Nb / b.la, 0, 1),
                        c = {
                            html5: "1",
                            video_id: b.A,
                            eurl: a.a,
                            framer: a.k,
                            referrer: a.referrer,
                            feature: a.g,
                            ps: a.Ra,
                            el: a.eventLabel,
                            hl: a.e,
                            list: b.a,
                            w: c,
                            l: b.la,
                            plid: b.pa,
                            t: b.Qa
                        };
                    a.sb && (c.autoplay = "1");
                    b.kc && (c.splay = "1");
                    b.e && (c.subscribed = b.e);
                    b.k && (c.hbid = b.k);
                    a = R(a.cb + "set_awesome", c);
                    S(a);
                    this.i.Gj = j
                }
                this.i.la &&
                    (this.i.B && this.ed >= this.i.B) && (a = this.e, a.b && a.i.B && (b = tp(a), b.jj = j, vp(a, b)), this.i.B = NaN);
                this.i.la && this.ed >= this.i.kj && dq(this)
            }
            if (this.i.lj && (a = this.i.eh, 1 == a && 0 < this.Nb || 2 == a && 20 <= this.Nb || 3 == a && 30 <= this.Nb)) a = this.e, a.b && (b = a.a, c = a.i, a = {
                ns: "yt",
                html5: "1",
                docid: c.A,
                plid: c.pa,
                fmt: c.format ? c.format.a : 0,
                el: b.eventLabel,
                ps: b.Ra,
                subscribed: c.e,
                yttk: "1",
                st: a.Oc(),
                et: a.Oc(),
                ctp: c.eh,
                vid: b.B
            }, a = R("//web.archive.org/web/20120609184927/http://s2.youtube.com/s", a), S(a)), this.i.eh++;
            this.ge = this.Nb;
            a = this.getCurrentTime();
            0 < a && (this.i.fa = a, this.r.Ve(a));
            this.i.Pa && a > this.getDuration() && (b = this.getDuration(), 0 == b && (b = a), Np(this, 1.2 * b));
            b = this.getDuration();
            b = Infinity == b ? 1 : b ? this.getCurrentTime() / b : 0;
            this.r.gh(b);
            if (this.m.buffered && 0 < this.m.buffered.length) {
                a = this.getLoadProgressFraction();
                var d = this.m,
                    b = d.buffered;
                !b || !b.length ? b = j : (c = d.getBufferedTimeRangeIndex(), 0 < c ? b = l : (d = d.getCurrentTime(), b = b.start(c) > d || b.end(c) < d));
                b ? Xp(this, Hf(this.K, this.K.a | 1)) : Xp(this, Hf(this.K, this.K.a & -2));
                this.r.de(a);
                b = this.m.getBufferedTimeRangeIndex();
                !$.timer.l2s &&
                    2 < this.m.buffered.end(b) && $.Gb("l2s");
                this.m.buffered.end(b);
                this.i.Pa ? this.isPeggedToLive() || this.r.de((1 > this.m.seekable.length ? NaN : this.m.seekable.end(this.m.seekable.length - 1)) / this.getDuration()) : this.r.de(a)
            } else 0 < a && this.r.gh(b);
            this.getDuration();
            this.vn || (this.fh && window.clearTimeout(this.fh), !this.m.paused && !this.m.ended && (this.fh = this.m.played && 0 == this.m.played.length ? window.setTimeout(u(this.Sc, this), 100) : window.setTimeout(u(this.Sc, this), 500)))
        };
        n.To = function(a) {
            try {
                xh(this.Eb.e, "yt-player-bwc", a)
            } catch (b) {}
            this.a.lk = a
        };
        n.po = function() {
            this.pubsub.j("beginseeking");
            this.ub("beginseeking");
            Xp(this, Hf(this.K, this.K.a | 64));
            T(this.K, 16) && this.Hb()
        };
        n.ro = function() {
            this.ub("endseeking");
            this.pubsub.j("endseeking");
            Xp(this, Hf(this.K, this.K.a & -65));
            T(this.K, 16) && this.m.playVideo();
            this.Qd()
        };
        n.yo = function(a) {
            Xp(this, Hf(this.K, this.K.a | 64));
            this.Gf(a * this.getDuration(), j);
            this.Ug = l;
            this.Sc();
            this.Ug = j;
            this.pubsub.j("seekto", a);
            this.ub("seekto", a);
            Xp(this, Hf(this.K, this.K.a & -65))
        };
        n.xo = function(a) {
            this.Gf(this.getCurrentTime() + a, j)
        };
        n.vo = function(a) {
            this.ua && dp(this, l);
            a != this.a.cd && (this.a.cd = a, this.pubsub.j("SIZE_CLICKED", a), Rp(this), this.lf())
        };
        n.so = function() {
            this.ua && dp(this, l)
        };
        n.zk = function() {
            dp(this, !this.ua)
        };
        n.wo = function(a) {
            var b = this.Rb,
                c = this.i;
            c.u = a;
            Hp(b, c)
        };
        n.Co = function() {
            lf("addto_ajax", u(this.pr, this), u(this.um, this))
        };
        n.Do = function() {
            iq(this, this.vg())
        };
        n.Bo = function() {
            this.i && this.i.Wc ? iq(this, this.i.Wc) : iq(this, this.vg())
        };
        n.to = function() {
            this.Th({
                volume: this.$.volume + 5,
                muted: l
            })
        };
        n.qo = function() {
            this.Th({
                volume: this.$.volume - 5,
                muted: l
            })
        };
        n.no = function() {
            var a = we("fullScreen", document);
            a == k && (a = !this.ua);
            jq(this, a)
        };

        function jq(a, b) {
            a.z.Uk(b);
            if ("detailpage" == a.a.eventLabel)
                if (b) cq(a);
                else {
                    var c = q("checkCurrentVideo");
                    if (c && ee("VIDEO_ID") != a.i.A) {
                        var d = a.Eb;
                        try {
                            var f = {};
                            f[a.i.A] = a.m.currentTime;
                            xh(d.a, "yt-player-restore-playhead", f)
                        } catch (g) {}
                        c(a.i.A);
                        a.pubsub.j("openingpage")
                    }
                } a.ua = b;
            !b && !a.a.jc ? a.z.Mf(l) : a.z.Mf(j);
            a.Qd();
            Rp(a);
            a.r.Tk(b);
            a.lf()
        }

        function Rp(a) {
            var b = "small";
            a.ua ? b = "fullscreen" : a.a.cd && (b = "large");
            a.z.Hl(b)
        }
        n.lf = function() {
            var a = Xo(this.z);
            if (!(0 == a.width && 0 == a.height)) {
                var a = K("watch-player"),
                    b = yb ? "webkitTransitionEnd" : wb ? "oTransitionEnd" : xb ? "transitionend" : D && E(10) ? "MSTransitionEnd" : k;
                b && a ? (this.rh.N(a, b, u(this.hf, this)), P(u(this.hf, this), 1E3)) : this.hf()
            }
        };
        n.oo = function(a, b) {
            this.pubsub.j(a, b)
        };
        n.ub = function(a, b) {
            this.ga && To(this.ga, a, b)
        };
        n.playVideo = function() {
            this.ud ? Vp(this) : (this.m.currentSrc != Pg(this.i) && (Kh(this.m, Pg(this.i)), this.o && window.clearTimeout(this.o), this.o = P(u(this.rq, this), 15E3)), P(u(function() {
                this.m.playVideo()
            }, this), 0))
        };
        n.Hb = function() {
            this.m.pause()
        };

        function ep(a) {
            if (!T(a.K, 128)) {
                var b = a.e;
                qp(b);
                b.D();
                a.Hb();
                a.i.fa = a.m.currentTime;
                Lh(a.m);
                Xp(a, Hf(a.K))
            }
        }
        n.updateVideoData = function(a) {
            Gg(this.i, a);
            this.pubsub.j("internalvideodatachange", "videoinfo", this.i)
        };
        n.$p = function() {
            this.i.kc = j;
            this.dm()
        };
        n.dm = function() {
            if (!this.r.Ea("play_pause")) {
                var a = Ri(this.r);
                a ? a.jg("control_play") : this.playVideo()
            }
        };
        n.hm = function() {
            if (!this.r.Ea("play_pause")) {
                var a = Ri(this.r);
                a ? a.jg("control_pause") : this.Hb()
            }
        };
        n.Yp = function() {
            this.r.Ea("play_pause") || ep(this)
        };
        n.aq = function(a, b) {
            this.i.kc = j;
            this.Gf(a, b)
        };
        n.Gf = function(a, b) {
            this.r.Ea("seek") || this.seekTo(a, b)
        };

        function dp(a, b) {
            if (Fe())
                if (b) {
                    var c = a.z.J,
                        d = we("requestFullScreen", c);
                    d && d.apply(c)
                } else(c = we("cancelFullScreen", document)) && c.call(document);
            else jq(a, b)
        }

        function iq(a, b) {
            a.ua && dp(a, l);
            a.pubsub.j("openingpage");
            qn(b)
        }
        n.Qn = function(a) {
            Vh(this.a, a);
            this.pubsub.j("internalvideodatachange", "videoinfo", this.i);
            this.i.Yg && !this.a.Fb ? Qp(this, 5) : this.i && this.i.kb.length || Zp(this) ? Lp(this) : Qp(this, 5, je("HTML5_NO_AVAILABLE_FORMATS_FALLBACK"))
        };
        n.Rn = function(a) {
            Qp(this, a.errorcode, unescape(a.reason))
        };

        function aq(a, b) {
            if (a.mb.fallback) {
                var c = a.mb;
                a.i && v(c.args, a.i.vb);
                c.args.html5_unavailable = "1";
                var d = a.z.J.parentNode;
                c.fallbackMessage = u(function() {
                    d.appendChild(this.z.J);
                    $p(this, b)
                }, a);
                a.mb.fallback(c, b)
            } else $p(a, b)
        }
        n.Jo = function() {
            this.Hb()
        };
        n.Qd = function() {
            this.z.El();
            window.clearTimeout(this.wi);
            T(this.K, 4) || kq(this);
            this.a.jc && this.ub("showcontrols")
        };

        function kq(a) {
            var b = a.a.xa ? 4E3 : 3E3;
            a.wi = P(u(a.rk, a), b)
        }
        n.nq = function() {
            this.lf()
        };
        n.rk = function() {
            T(this.K, 64) || this.r.vl() ? (window.clearTimeout(this.wi), kq(this)) : (this.z.wl(), this.a.jc && this.ub("hidecontrols"))
        };

        function Sp(a) {
            var b = Xo(a.z);
            a.a.ei = b;
            a.z.Nl(b)
        }
        n.hf = function() {
            Ie(this.rh);
            Sp(this);
            var a = this.m.videoWidth,
                b = this.m.videoHeight;
            0 != this.m.readyState && (this.i.Nc = new G(a, b));
            if (!(this.a.Sa || 0 == a * b)) {
                var c = this.z,
                    a = c.a.clientHeight,
                    b = c.a.clientWidth,
                    d = c.m.videoWidth,
                    c = c.m.videoHeight,
                    f = Math.min(a / c, b / d),
                    d = d * f,
                    c = c * f,
                    a = new Sb((b - d) / 2, (a - c) / 2, d, c);
                this.a.oc = new Sb(0, 0, a.width, a.height);
                b = this.z;
                Id(b.k, a.width, a.height);
                Ad(b.k, a.left, a.top);
                Hp(this.Rb, this.i);
                this.r.Ik(Zh(this.a));
                this.pubsub.j("onResize");
                this.ub("onResize")
            }
        };
        pa("yt.player.VideoPlayer", Ip);
    })();


}
/*
     FILE ARCHIVED ON 18:49:27 Jun 09, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:47:47 Feb 15, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.199
  CDXLines.iter: 20.384 (3)
  RedisCDXSource: 0.695
  captures_list: 256.052
  esindex: 0.015
  LoadShardBlock: 202.819 (3)
  PetaboxLoader3.resolve: 172.273 (4)
  PetaboxLoader3.datanode: 140.786 (5)
  exclusion.robots: 0.215
  load_resource: 130.06 (2)
*/