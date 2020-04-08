(function(m, l) {
    function w(a) {
        var b = a.length,
        d = c.type(a);
        return c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || "function" !== d && (0 === b || "number" == typeof b && 0 < b && b - 1 in a)
    }
    function Y(a) {
        var b = Ya[a] = {};
        return c.each(a.match(S) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    function V(a, b, d, e) {
        if (c.acceptData(a)) {
            var f, g, h = c.expando,
            k = a.nodeType,
            n = k ? c.cache: a,
            q = k ? a[h] : a[h] && h;
            if (q && n[q] && (e || n[q].data) || d !== l || "string" != typeof b) return q || (q = k ? a[h] = ha.pop() || c.guid++:h),
            n[q] || (n[q] = k ? {}: {
                toJSON: c.noop
            }),
            ("object" == typeof b || "function" == typeof b) && (e ? n[q] = c.extend(n[q], b) : n[q].data = c.extend(n[q].data, b)),
            g = n[q],
            e || (g.data || (g.data = {}), g = g.data),
            d !== l && (g[c.camelCase(b)] = d),
            "string" == typeof b ? (f = g[b], null == f && (f = g[c.camelCase(b)])) : f = g,
            f
        }
    }
    function T(a, b, d) {
        if (c.acceptData(a)) {
            var e, f, g = a.nodeType,
            h = g ? c.cache: a,
            k = g ? a[c.expando] : c.expando;
            if (h[k]) {
                if (b && (e = d ? h[k] : h[k].data)) {
                    c.isArray(b) ? b = b.concat(c.map(b, c.camelCase)) : b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" "));
                    for (f = b.length; f--;) delete e[b[f]];
                    if (d ? !R(e) : !c.isEmptyObject(e)) return
                } (d || (delete h[k].data, R(h[k]))) && (g ? c.cleanData([a], !0) : c.support.deleteExpando || h != h.window ? delete h[k] : h[k] = null)
            }
        }
    }
    function B(a, b, d) {
        if (d === l && 1 === a.nodeType) {
            var e = "data-" + b.replace(Pb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: +d + "" === d ? +d: Qb.test(d) ? c.parseJSON(d) : d
                } catch(f) {}
                c.data(a, b, d)
            } else d = l
        }
        return d
    }
    function R(a) {
        for (var b in a) if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    function ia() {
        return ! 0
    }
    function W() {
        return ! 1
    }
    function fa() {
        try {
            return t.activeElement
        } catch(a) {}
    }
    function r(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    function s(a, b, d) {
        if (c.isFunction(b)) return c.grep(a,
        function(a, c) {
            return !! b.call(a, c, a) !== d
        });
        if (b.nodeType) return c.grep(a,
        function(a) {
            return a === b !== d
        });
        if ("string" == typeof b) {
            if (Rb.test(b)) return c.filter(b, a, d);
            b = c.filter(b, a)
        }
        return c.grep(a,
        function(a) {
            return 0 <= c.inArray(a, b) !== d
        })
    }
    function v(a) {
        var b = Za.split("|");
        a = a.createDocumentFragment();
        if (a.createElement) for (; b.length;) a.createElement(b.pop());
        return a
    }
    function U(a, b) {
        return c.nodeName(a, "table") && c.nodeName(1 === b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function z(a) {
        return a.type = (null !== c.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function F(a) {
        var b = Sb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function C(a, b) {
        for (var d, e = 0; null != (d = a[e]); e++) c._data(d, "globalEval", !b || c._data(b[e], "globalEval"))
    }
    function L(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var d, e, f;
            e = c._data(a);
            var g = c._data(b, e),
            h = e.events;
            if (h) for (d in delete g.handle, g.events = {},
            h) {
                e = 0;
                for (f = h[d].length; f > e; e++) c.event.add(b, d, h[d][e])
            }
            g.data && (g.data = c.extend({},
            g.data))
        }
    }
    function A(a, b) {
        var d, e, f = 0,
        g = typeof a.getElementsByTagName !== J ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== J ? a.querySelectorAll(b || "*") : l;
        if (!g) {
            g = [];
            for (d = a.childNodes || a; null != (e = d[f]); f++) ! b || c.nodeName(e, b) ? g.push(e) : c.merge(g, A(e, b))
        }
        return b === l || b && c.nodeName(a, b) ? c.merge([a], g) : g
    }
    function Fa(a) {
        Ga.test(a.type) && (a.defaultChecked = a.checked)
    }
    function $a(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), e = b, f = ab.length; f--;) if (b = ab[f] + c, b in a) return b;
        return e
    }
    function pa(a, b) {
        return a = b || a,
        "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a)
    }
    function bb(a, b) {
        for (var d, e, f, g = [], h = 0, k = a.length; k > h; h++) e = a[h],
        e.style && (g[h] = c._data(e, "olddisplay"), d = e.style.display, b ? (g[h] || "none" !== d || (e.style.display = ""), "" === e.style.display && pa(e) && (g[h] = c._data(e, "olddisplay", cb(e.nodeName)))) : g[h] || (f = pa(e), (d && "none" !== d || !f) && c._data(e, "olddisplay", f ? d: c.css(e, "display"))));
        for (h = 0; k > h; h++) e = a[h],
        e.style && (b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? g[h] || "": "none"));
        return a
    }
    function db(a, b, c) {
        return (a = Tb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }
    function eb(a, b, d, e, f) {
        b = d === (e ? "border": "content") ? 4 : "width" === b ? 1 : 0;
        for (var g = 0; 4 > b; b += 2)"margin" === d && (g += c.css(a, d + ga[b], !0, f)),
        e ? ("content" === d && (g -= c.css(a, "padding" + ga[b], !0, f)), "margin" !== d && (g -= c.css(a, "border" + ga[b] + "Width", !0, f))) : (g += c.css(a, "padding" + ga[b], !0, f), "padding" !== d && (g += c.css(a, "border" + ga[b] + "Width", !0, f)));
        return g
    }
    function fb(a, b, d) {
        var e = !0,
        f = "width" === b ? a.offsetWidth: a.offsetHeight,
        g = Z(a),
        h = c.support.boxSizing && "border-box" === c.css(a, "boxSizing", !1, g);
        if (0 >= f || null == f) {
            if (f = O(a, b, g), (0 > f || null == f) && (f = a.style[b]), wa.test(f)) return f;
            e = h && (c.support.boxSizingReliable || f === a.style[b]);
            f = parseFloat(f) || 0
        }
        return f + eb(a, b, d || (h ? "border": "content"), e, g) + "px"
    }
    function cb(a) {
        var b = t,
        d = gb[a];
        return d || (d = hb(a, b), "none" !== d && d || (qa = (qa || c("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (qa[0].contentWindow || qa[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), d = hb(a, b), qa.detach()), gb[a] = d),
        d
    }
    function hb(a, b) {
        var d = c(b.createElement(a)).appendTo(b.body),
        e = c.css(d[0], "display");
        return d.remove(),
        e
    }
    function Ha(a, b, d, e) {
        var f;
        if (c.isArray(b)) c.each(b,
        function(b, c) {
            d || Ub.test(a) ? e(a, c) : Ha(a + "[" + ("object" == typeof c ? b: "") + "]", c, d, e)
        });
        else if (d || "object" !== c.type(b)) e(a, b);
        else for (f in b) Ha(a + "[" + f + "]", b[f], d, e)
    }
    function ib(a) {
        return function(b, d) {
            "string" != typeof b && (d = b, b = "*");
            var e, f = 0,
            g = b.toLowerCase().match(S) || [];
            if (c.isFunction(d)) for (; e = g[f++];)"+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(d)) : (a[e] = a[e] || []).push(d)
        }
    }
    function jb(a, b, d, e) {
        function f(k) {
            var n;
            return g[k] = !0,
            c.each(a[k] || [],
            function(a, c) {
                var k = c(b, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(n = k) : l: (b.dataTypes.unshift(k), f(k), !1)
            }),
            n
        }
        var g = {},
        h = a === Ia;
        return f(b.dataTypes[0]) || !g["*"] && f("*")
    }
    function Ja(a, b) {
        var d, e, f = c.ajaxSettings.flatOptions || {};
        for (e in b) b[e] !== l && ((f[e] ? a: d || (d = {}))[e] = b[e]);
        return d && c.extend(!0, a, d),
        a
    }
    function kb() {
        try {
            return new m.XMLHttpRequest
        } catch(a) {}
    }
    function lb() {
        return setTimeout(function() {
            $ = l
        }),
        $ = c.now()
    }
    function mb(a, b, c) {
        for (var e, f = (ra[b] || []).concat(ra["*"]), g = 0, h = f.length; h > g; g++) if (e = f[g].call(c, b, a)) return e
    }
    function nb(a, b, d) {
        var e, f = 0,
        g = xa.length,
        h = c.Deferred().always(function() {
            delete k.elem
        }),
        k = function() {
            if (e) return ! 1;
            for (var b = $ || lb(), b = Math.max(0, n.startTime + n.duration - b), c = 1 - (b / n.duration || 0), d = 0, f = n.tweens.length; f > d; d++) n.tweens[d].run(c);
            return h.notifyWith(a, [n, c, b]),
            1 > c && f ? b: (h.resolveWith(a, [n]), !1)
        },
        n = h.promise({
            elem: a,
            props: c.extend({},
            b),
            opts: c.extend(!0, {
                specialEasing: {}
            },
            d),
            originalProperties: b,
            originalOptions: d,
            startTime: $ || lb(),
            duration: d.duration,
            tweens: [],
            createTween: function(b, d) {
                var e = c.Tween(a, n.opts, b, d, n.opts.specialEasing[b] || n.opts.easing);
                return n.tweens.push(e),
                e
            },
            stop: function(b) {
                var c = 0,
                d = b ? n.tweens.length: 0;
                if (e) return this;
                for (e = !0; d > c; c++) n.tweens[c].run(1);
                return b ? h.resolveWith(a, [n, b]) : h.rejectWith(a, [n, b]),
                this
            }
        });
        d = n.props;
        for (Vb(d, n.opts.specialEasing); g > f; f++) if (b = xa[f].call(n, a, d, n.opts)) return b;
        return c.map(d, mb, n),
        c.isFunction(n.opts.start) && n.opts.start.call(a, n),
        c.fx.timer(c.extend(k, {
            elem: a,
            anim: n,
            queue: n.opts.queue
        })),
        n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always)
    }
    function Vb(a, b) {
        var d, e, f, g, h;
        for (d in a) if (e = c.camelCase(d), f = b[e], g = a[d], c.isArray(g) && (f = g[1], g = a[d] = g[0]), d !== e && (a[e] = g, delete a[d]), h = c.cssHooks[e], h && "expand" in h) for (d in g = h.expand(g), delete a[e], g) d in a || (a[d] = g[d], b[d] = f);
        else b[e] = f
    }
    function E(a, b, c, e, f) {
        return new E.prototype.init(a, b, c, e, f)
    }
    function ya(a, b) {
        var c, e = {
            height: a
        },
        f = 0;
        for (b = b ? 1 : 0; 4 > f; f += 2 - b) c = ga[f],
        e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function ob(a) {
        return c.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    var za, pb, J = typeof l,
    Wb = m.location,
    t = m.document,
    qb = t.documentElement,
    Xb = m.jQuery,
    Yb = m.$,
    Aa = {},
    ha = [],
    rb = ha.concat,
    Ka = ha.push,
    aa = ha.slice,
    sb = ha.indexOf,
    Zb = Aa.toString,
    ja = Aa.hasOwnProperty,
    La = "1.10.2".trim,
    c = function(a, b) {
        return new c.fn.init(a, b, pb)
    },
    Ba = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    S = /\S+/g,
    $b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ac = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    tb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    bc = /^[\],:{}\s]*$/,
    cc = /(?:^|:|,)(?:\s*\[)+/g,
    dc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    ec = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    fc = /^-ms-/,
    gc = /-([\da-z])/gi,
    hc = function(a, b) {
        return b.toUpperCase()
    },
    D = function(a) { (t.addEventListener || "load" === a.type || "complete" === t.readyState) && (ub(), c.ready())
    },
    ub = function() {
        t.addEventListener ? (t.removeEventListener("DOMContentLoaded", D, !1), m.removeEventListener("load", D, !1)) : (t.detachEvent("onreadystatechange", D), m.detachEvent("onload", D))
    };
    c.fn = c.prototype = {
        jquery: "1.10.2",
        constructor: c,
        init: function(a, b, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : ac.exec(a), !e || !e[1] && b) return ! b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof c ? b[0] : b, c.merge(this, c.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b: t, !0)), tb.test(e[1]) && c.isPlainObject(b)) for (e in b) c.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = t.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1;
                    this[0] = f
                }
                return this.context = t,
                this.selector = a,
                this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : c.isFunction(a) ? d.ready(a) : (a.selector !== l && (this.selector = a.selector, this.context = a.context), c.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return aa.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            a = c.merge(this.constructor(), a);
            return a.prevObject = this,
            a.context = this.context,
            a
        },
        each: function(a, b) {
            return c.each(this, a, b)
        },
        ready: function(a) {
            return c.ready.promise().done(a),
            this
        },
        slice: function() {
            return this.pushStack(aa.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b: 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        map: function(a) {
            return this.pushStack(c.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Ka,
        sort: [].sort,
        splice: [].splice
    };
    c.fn.init.prototype = c.fn;
    c.extend = c.fn.extend = function() {
        var a, b, d, e, f, g, h = arguments[0] || {},
        k = 1,
        n = arguments.length,
        q = !1;
        "boolean" == typeof h && (q = h, h = arguments[1] || {},
        k = 2);
        "object" == typeof h || c.isFunction(h) || (h = {});
        for (n === k && (h = this, --k); n > k; k++) if (null != (f = arguments[k])) for (e in f) a = h[e],
        d = f[e],
        h !== d && (q && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a: []) : g = a && c.isPlainObject(a) ? a: {},
        h[e] = c.extend(q, g, d)) : d !== l && (h[e] = d));
        return h
    };
    c.extend({
        expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""),
        noConflict: function(a) {
            return m.$ === c && (m.$ = Yb),
            a && m.jQuery === c && (m.jQuery = Xb),
            c
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? c.readyWait++:c.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--c.readyWait: !c.isReady) {
                if (!t.body) return setTimeout(c.ready);
                c.isReady = !0; ! 0 !== a && 0 < --c.readyWait || (za.resolveWith(t, [c]), c.fn.trigger && c(t).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === c.type(a)
        },
        isArray: Array.isArray ||
        function(a) {
            return "array" === c.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return ! isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? Aa[Zb.call(a)] || "object": typeof a
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return ! 1;
            try {
                if (a.constructor && !ja.call(a, "constructor") && !ja.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(d) {
                return ! 1
            }
            if (c.support.ownLast) for (b in a) return ja.call(a, b);
            for (b in a);
            return b === l || ja.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) return ! 1;
            return ! 0
        },
        error: function(a) {
            throw Error(a);
        },
        parseHTML: function(a, b, d) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (d = b, b = !1);
            b = b || t;
            var e = tb.exec(a);
            d = !d && [];
            return e ? [b.createElement(e[1])] : (e = c.buildFragment([a], b, d), d && c(d).remove(), c.merge([], e.childNodes))
        },
        parseJSON: function(a) {
            return m.JSON && m.JSON.parse ? m.JSON.parse(a) : null === a ? a: "string" == typeof a && (a = c.trim(a), a && bc.test(a.replace(dc, "@").replace(ec, "]").replace(cc, ""))) ? Function("return " + a)() : (c.error("Invalid JSON: " + a), l)
        },
        parseXML: function(a) {
            var b, d;
            if (!a || "string" != typeof a) return null;
            try {
                m.DOMParser ? (d = new DOMParser, b = d.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
            } catch(e) {
                b = l
            }
            return b && b.documentElement && !b.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a),
            b
        },
        noop: function() {},
        globalEval: function(a) {
            a && c.trim(a) && (m.execScript ||
            function(a) {
                m.eval.call(m, a)
            })(a)
        },
        camelCase: function(a) {
            return a.replace(fc, "ms-").replace(gc, hc)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var e, f = 0,
            g = a.length,
            h = w(a);
            if (c) if (h) for (; g > f && !(e = b.apply(a[f], c), !1 === e); f++);
            else for (f in a) {
                if (e = b.apply(a[f], c), !1 === e) break
            } else if (h) for (; g > f && !(e = b.call(a[f], f, a[f]), !1 === e); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), !1 === e) break;
            return a
        },
        trim: La && !La.call("\ufeff\u00a0") ?
        function(a) {
            return null == a ? "": La.call(a)
        }: function(a) {
            return null == a ? "": (a + "").replace($b, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (w(Object(a)) ? c.merge(d, "string" == typeof a ? [a] : a) : Ka.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var e;
            if (b) {
                if (sb) return sb.call(b, a, c);
                e = b.length;
                for (c = c ? 0 > c ? Math.max(0, e + c) : c: 0; e > c; c++) if (c in b && b[c] === a) return c
            }
            return - 1
        },
        merge: function(a, b) {
            var c = b.length,
            e = a.length,
            f = 0;
            if ("number" == typeof c) for (; c > f; f++) a[e++] = b[f];
            else for (; b[f] !== l;) a[e++] = b[f++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            var e, f = [],
            g = 0,
            h = a.length;
            for (c = !!c; h > g; g++) e = !!b(a[g], g),
            c !== e && f.push(a[g]);
            return f
        },
        map: function(a, b, c) {
            var e, f = 0,
            g = a.length,
            h = [];
            if (w(a)) for (; g > f; f++) e = b(a[f], f, c),
            null != e && (h[h.length] = e);
            else for (f in a) e = b(a[f], f, c),
            null != e && (h[h.length] = e);
            return rb.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var d, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f),
            c.isFunction(a) ? (d = aa.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(aa.call(arguments)))
            },
            e.guid = a.guid = a.guid || c.guid++, e) : l
        },
        access: function(a, b, d, e, f, g, h) {
            var k = 0,
            n = a.length,
            q = null == d;
            if ("object" === c.type(d)) for (k in f = !0, d) c.access(a, b, k, d[k], !0, g, h);
            else if (e !== l && (f = !0, c.isFunction(e) || (h = !0), q && (h ? (b.call(a, e), b = null) : (q = b, b = function(a, b, d) {
                return q.call(c(a), d)
            })), b)) for (; n > k; k++) b(a[k], d, h ? e: e.call(a[k], k, b(a[k], d)));
            return f ? a: q ? b.call(a) : n ? b(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(a, b, c, e) {
            var f, g = {};
            for (f in b) g[f] = a.style[f],
            a.style[f] = b[f];
            c = c.apply(a, e || []);
            for (f in b) a.style[f] = g[f];
            return c
        }
    });
    c.ready.promise = function(a) {
        if (!za) if (za = c.Deferred(), "complete" === t.readyState) setTimeout(c.ready);
        else if (t.addEventListener) t.addEventListener("DOMContentLoaded", D, !1),
        m.addEventListener("load", D, !1);
        else {
            t.attachEvent("onreadystatechange", D);
            m.attachEvent("onload", D);
            var b = !1;
            try {
                b = null == m.frameElement && t.documentElement
            } catch(d) {}
            b && b.doScroll &&
            function f() {
                if (!c.isReady) {
                    try {
                        b.doScroll("left")
                    } catch(a) {
                        return setTimeout(f, 50)
                    }
                    ub();
                    c.ready()
                }
            } ()
        }
        return za.promise(a)
    };
    c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, b) {
        Aa["[object " + b + "]"] = b.toLowerCase()
    });
    pb = c(t); (function(a, b) {
        function d(a, b, c, d) {
            var e, f, g, h, k;
            if ((b ? b.ownerDocument || b: M) !== P && sa(b), b = b || P, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (ba && !d) {
                if (e = qa.exec(a)) if (g = e[1]) if (9 === h) {
                    if (f = b.getElementById(g), !f || !f.parentNode) return c;
                    if (f.id === g) return c.push(f),
                    c
                } else {
                    if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && G(b, f) && f.id === g) return c.push(f),
                    c
                } else {
                    if (e[2]) return ka.apply(c, b.getElementsByTagName(a)),
                    c;
                    if ((g = e[3]) && u.getElementsByClassName && b.getElementsByClassName) return ka.apply(c, b.getElementsByClassName(g)),
                    c
                }
                if (u.qsa && (!H || !H.test(a))) {
                    if (f = e = I, g = b, k = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        h = r(a); (e = b.getAttribute("id")) ? f = e.replace(Fa, "\\$&") : b.setAttribute("id", f);
                        f = "[id='" + f + "'] ";
                        for (g = h.length; g--;) h[g] = f + m(h[g]);
                        g = $.test(a) && b.parentNode || b;
                        k = h.join(",")
                    }
                    if (k) try {
                        return ka.apply(c, g.querySelectorAll(k)),
                        c
                    } catch(n) {} finally {
                        e || b.removeAttribute("id")
                    }
                }
            }
            var p;
            a: {
                a = a.replace(V, "$1");
                var q, l;
                f = r(a);
                if (!d && 1 === f.length) {
                    if (p = f[0] = f[0].slice(0), 2 < p.length && "ID" === (q = p[0]).type && u.getById && 9 === b.nodeType && ba && y.relative[p[1].type]) {
                        if (b = (y.find.ID(q.matches[0].replace(la, ma), b) || [])[0], !b) {
                            p = c;
                            break a
                        }
                        a = a.slice(p.shift().value.length)
                    }
                    for (h = Y.needsContext.test(a) ? 0 : p.length; h--&&!(q = p[h], y.relative[e = q.type]);) if ((l = y.find[e]) && (d = l(q.matches[0].replace(la, ma), $.test(p[0].type) && b.parentNode || b))) {
                        if (p.splice(h, 1), a = d.length && m(p), !a) {
                            p = (ka.apply(c, d), c);
                            break a
                        }
                        break
                    }
                }
                p = (C(a, f)(d, b, !ba, c, $.test(a)), c)
            }
            return p
        }
        function e() {
            function a(c, d) {
                return b.push(c += " ") > y.cacheLength && delete a[b.shift()],
                a[c] = d
            }
            var b = [];
            return a
        }
        function f(a) {
            return a[I] = !0,
            a
        }
        function g(a) {
            var b = P.createElement("div");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }
        function h(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) y.attrHandle[c[d]] = b
        }
        function k(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function n(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function q(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function l(a) {
            return f(function(b) {
                return b = +b,
                f(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function p() {}
        function r(a, b) {
            var c, e, f, g, h, k, p;
            if (h = Q[a + " "]) return b ? 0 : h.slice(0);
            h = a;
            k = [];
            for (p = y.preFilter; h;) { (!c || (e = ha.exec(h))) && (e && (h = h.slice(e[0].length) || h), k.push(f = []));
                c = !1; (e = ia.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(V, " ")
                }), h = h.slice(c.length));
                for (g in y.filter) ! (e = Y[g].exec(h)) || p[g] && !(e = p[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length: h ? d.error(a) : Q(a, k).slice(0)
        }
        function m(a) {
            for (var b = 0,
            c = a.length,
            d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function s(a, b, c) {
            var d = b.dir,
            e = c && "parentNode" === d,
            f = ic++;
            return b.first ?
            function(b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            }: function(b, c, g) {
                var h, k, Ma, p = N + " " + f;
                if (g) for (; b = b[d];) {
                    if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                } else for (; b = b[d];) if (1 === b.nodeType || e) if (Ma = b[I] || (b[I] = {}), (k = Ma[d]) && k[0] === p) {
                    if (!0 === (h = k[1]) || h === A) return ! 0 === h
                } else if (k = Ma[d] = [p], k[1] = a(b, c, g) || A, !0 === k[1]) return ! 0
            }
        }
        function t(a) {
            return 1 < a.length ?
            function(b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function v(a, b, c, d, e) {
            for (var f, g = [], h = 0, k = a.length, p = null != b; k > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), p && b.push(h));
            return g
        }
        function U(a, b, c, e, g, h) {
            return e && !e[I] && (e = U(e)),
            g && !g[I] && (g = U(g, h)),
            f(function(f, h, k, p) {
                var n, q, l = [],
                r = [],
                m = h.length,
                x;
                if (! (x = f)) {
                    x = b || "*";
                    for (var K = k.nodeType ? [k] : k, y = [], u = 0, s = K.length; s > u; u++) d(x, K[u], y);
                    x = y
                }
                x = !a || !f && b ? x: v(x, l, a, k, p);
                K = c ? g || (f ? a: m || e) ? [] : h: x;
                if (c && c(x, K, k, p), e) {
                    n = v(K, r);
                    e(n, [], k, p);
                    for (k = n.length; k--;)(q = n[k]) && (K[r[k]] = !(x[r[k]] = q))
                }
                if (f) {
                    if (g || a) {
                        if (g) {
                            n = [];
                            for (k = K.length; k--;)(q = K[k]) && n.push(x[k] = q);
                            g(null, K = [], n, p)
                        }
                        for (k = K.length; k--;)(q = K[k]) && -1 < (n = g ? O.call(f, q) : l[k]) && (f[n] = !(h[n] = q))
                    }
                } else K = v(K === h ? K.splice(m, K.length) : K),
                g ? g(null, h, K, p) : ka.apply(h, K)
            })
        }
        function w(a) {
            var b, c, d, e = a.length,
            f = y.relative[a[0].type];
            c = f || y.relative[" "];
            for (var g = f ? 1 : 0, h = s(function(a) {
                return a === b
            },
            c, !0), k = s(function(a) {
                return - 1 < O.call(b, a)
            },
            c, !0), p = [function(a, c, d) {
                return ! f && (d || c !== E) || ((b = c).nodeType ? h(a, c, d) : k(a, c, d))
            }]; e > g; g++) if (c = y.relative[a[g].type]) p = [s(t(p), c)];
            else {
                if (c = y.filter[a[g].type].apply(null, a[g].matches), c[I]) {
                    for (d = ++g; e > d && !y.relative[a[d].type]; d++);
                    return U(1 < g && t(p), 1 < g && m(a.slice(0, g - 1).concat({
                        value: " " === a[g - 2].type ? "*": ""
                    })).replace(V, "$1"), c, d > g && w(a.slice(g, d)), e > d && w(a = a.slice(d)), e > d && m(a))
                }
                p.push(c)
            }
            return t(p)
        }
        function z(a, b) {
            var c = 0,
            e = 0 < b.length,
            g = 0 < a.length,
            h = function(f, h, k, p, n) {
                var q, l, r = [],
                x = 0,
                m = "0",
                K = f && [],
                u = null != n,
                s = E,
                Na = f || g && y.find.TAG("*", n && h.parentNode || h),
                t = N += null == s ? 1 : Math.random() || 0.1;
                for (u && (E = h !== P && h, A = c); null != (n = Na[m]); m++) {
                    if (g && n) {
                        for (q = 0; l = a[q++];) if (l(n, h, k)) {
                            p.push(n);
                            break
                        }
                        u && (N = t, A = ++c)
                    }
                    e && ((n = !l && n) && x--, f && K.push(n))
                }
                if (x += m, e && m !== x) {
                    for (q = 0; l = b[q++];) l(K, r, h, k);
                    if (f) {
                        if (0 < x) for (; m--;) K[m] || r[m] || (r[m] = ea.call(p));
                        r = v(r)
                    }
                    ka.apply(p, r);
                    u && !f && 0 < r.length && 1 < x + b.length && d.uniqueSort(p)
                }
                return u && (N = t, E = s),
                K
            };
            return e ? f(h) : h
        }
        var L, u, A, y, F, vb, C, E, ta, sa, P, ca, ba, H, ua, Ca, G, I = "sizzle" + -new Date,
        M = a.document,
        N = 0,
        ic = 0,
        B = e(),
        Q = e(),
        S = e(),
        J = !1,
        T = function(a, b) {
            return a === b ? (J = !0, 0) : 0
        },
        R = typeof b,
        W = -2147483648,
        pa = {}.hasOwnProperty,
        D = [],
        ea = D.pop,
        ga = D.push,
        ka = D.push,
        Z = D.slice,
        O = D.indexOf ||
        function(a) {
            for (var b = 0,
            c = this.length; c > b; b++) if (this[b] === a) return b;
            return - 1
        },
        aa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
        da = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + aa + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        X = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + da.replace(3, 8) + ")*)|.*)\\)|)",
        V = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
        ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        ia = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        $ = /[\x20\t\r\n\f]*[+~]/,
        ja = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"),
        na = RegExp(X),
        oa = RegExp("^" + aa + "$"),
        Y = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + da),
            PSEUDO: RegExp("^" + X),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        fa = /^[^{]+\{\s*\[native \w/,
        qa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ra = /^(?:input|select|textarea|button)$/i,
        va = /^h\d$/i,
        Fa = /'|\\/g,
        la = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
        ma = function(a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b: 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
        };
        try {
            ka.apply(D = Z.call(M.childNodes), M.childNodes),
            D[M.childNodes.length].nodeType
        } catch(wa) {
            ka = {
                apply: D.length ?
                function(a, b) {
                    ga.apply(a, Z.call(b))
                }: function(a, b) {
                    for (var c = a.length,
                    d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        vb = d.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName: !1
        };
        u = d.support = {};
        sa = d.setDocument = function(a) {
            var c = a ? a.ownerDocument || a: M;
            a = c.defaultView;
            return c !== P && 9 === c.nodeType && c.documentElement ? (P = c, ca = c.documentElement, ba = !vb(c), a && a.attachEvent && a !== a.top && a.attachEvent("onbeforeunload",
            function() {
                sa()
            }), u.attributes = g(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), u.getElementsByTagName = g(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }), u.getElementsByClassName = g(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }), u.getById = g(function(a) {
                return ca.appendChild(a).id = I,
                !c.getElementsByName || !c.getElementsByName(I).length
            }), u.getById ? (y.find.ID = function(a, b) {
                if (typeof b.getElementById !== R && ba) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            },
            y.filter.ID = function(a) {
                var b = a.replace(la, ma);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete y.find.ID, y.filter.ID = function(a) {
                var b = a.replace(la, ma);
                return function(a) {
                    return (a = typeof a.getAttributeNode !== R && a.getAttributeNode("id")) && a.value === b
                }
            }), y.find.TAG = u.getElementsByTagName ?
            function(a, c) {
                return typeof c.getElementsByTagName !== R ? c.getElementsByTagName(a) : b
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            y.find.CLASS = u.getElementsByClassName &&
            function(a, c) {
                return typeof c.getElementsByClassName !== R && ba ? c.getElementsByClassName(a) : b
            },
            ua = [], H = [], (u.qsa = fa.test(c.querySelectorAll)) && (g(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>";
                a.querySelectorAll("[selected]").length || H.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || H.push(":checked")
            }), g(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("t", "");
                a.querySelectorAll("[t^='']").length && H.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                H.push(",.*:")
            })), (u.matchesSelector = fa.test(Ca = ca.webkitMatchesSelector || ca.mozMatchesSelector || ca.oMatchesSelector || ca.msMatchesSelector)) && g(function(a) {
                u.disconnectedMatch = Ca.call(a, "div");
                Ca.call(a, "[s!='']:x");
                ua.push("!=", X)
            }), H = H.length && RegExp(H.join("|")), ua = ua.length && RegExp(ua.join("|")), G = fa.test(ca.contains) || ca.compareDocumentPosition ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
                return ! 1
            },
            T = ca.compareDocumentPosition ?
            function(a, b) {
                if (a === b) return J = !0,
                0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !u.sortDetached && b.compareDocumentPosition(a) === d ? a === c || G(M, a) ? -1 : b === c || G(M, b) ? 1 : ta ? O.call(ta, a) - O.call(ta, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            }: function(a, b) {
                var d, e = 0;
                d = a.parentNode;
                var f = b.parentNode,
                g = [a],
                h = [b];
                if (a === b) return J = !0,
                0;
                if (!d || !f) return a === c ? -1 : b === c ? 1 : d ? -1 : f ? 1 : ta ? O.call(ta, a) - O.call(ta, b) : 0;
                if (d === f) return k(a, b);
                for (d = a; d = d.parentNode;) g.unshift(d);
                for (d = b; d = d.parentNode;) h.unshift(d);
                for (; g[e] === h[e];) e++;
                return e ? k(g[e], h[e]) : g[e] === M ? -1 : h[e] === M ? 1 : 0
            },
            c) : P
        };
        d.matches = function(a, b) {
            return d(a, null, null, b)
        };
        d.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== P && sa(a), b = b.replace(ja, "='$1']"), !(!u.matchesSelector || !ba || ua && ua.test(b) || H && H.test(b))) try {
                var c = Ca.call(a, b);
                if (c || u.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch(e) {}
            return 0 < d(b, P, null, [a]).length
        };
        d.contains = function(a, b) {
            return (a.ownerDocument || a) !== P && sa(a),
            G(a, b)
        };
        d.attr = function(a, c) { (a.ownerDocument || a) !== P && sa(a);
            var d = y.attrHandle[c.toLowerCase()],
            d = d && pa.call(y.attrHandle, c.toLowerCase()) ? d(a, c, !ba) : b;
            return d === b ? u.attributes || !ba ? a.getAttribute(c) : (d = a.getAttributeNode(c)) && d.specified ? d.value: null: d
        };
        d.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        d.uniqueSort = function(a) {
            var b, c = [],
            d = 0,
            e = 0;
            if (J = !u.detectDuplicates, ta = !u.sortStable && a.slice(0), a.sort(T), J) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        };
        F = d.getText = function(a) {
            var b, c = "",
            d = 0;
            if (b = a.nodeType) if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += F(a)
            } else {
                if (3 === b || 4 === b) return a.nodeValue
            } else for (; b = a[d]; d++) c += F(b);
            return c
        };
        y = d.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(la, ma),
                    a[3] = (a[4] || a[5] || "").replace(la, ma),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || d.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && d.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return Y.CHILD.test(a[0]) ? null: (a[3] && a[4] !== b ? a[2] = a[4] : d && na.test(d) && (c = r(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(la, ma).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = B[a + " "];
                    return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && B(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== R && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(e) {
                        e = d.attr(e, a);
                        return null == e ? "!=" === b: b ? (e += "", "=" === b ? e === c: "!=" === b ? e !== c: "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 < e.indexOf(c) : "$=" === b ? c && e.slice( - c.length) === c: "~=" === b ? -1 < (" " + e + " ").indexOf(c) : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-": !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, k) {
                        var p, n, q, l, r;
                        c = f !== g ? "nextSibling": "previousSibling";
                        var m = b.parentNode,
                        x = h && b.nodeName.toLowerCase();
                        k = !k && !h;
                        if (m) {
                            if (f) {
                                for (; c;) {
                                    for (n = b; n = n[c];) if (h ? n.nodeName.toLowerCase() === x: 1 === n.nodeType) return ! 1;
                                    r = c = "only" === a && !r && "nextSibling"
                                }
                                return ! 0
                            }
                            if (r = [g ? m.firstChild: m.lastChild], g && k) {
                                k = m[I] || (m[I] = {});
                                p = k[a] || [];
                                l = p[0] === N && p[1];
                                q = p[0] === N && p[2];
                                for (n = l && m.childNodes[l]; n = ++l && n && n[c] || (q = l = 0) || r.pop();) if (1 === n.nodeType && ++q && n === b) {
                                    k[a] = [N, l, q];
                                    break
                                }
                            } else if (k && (p = (b[I] || (b[I] = {}))[a]) && p[0] === N) q = p[1];
                            else for (; (n = ++l && n && n[c] || (q = l = 0) || r.pop()) && (!(h ? n.nodeName.toLowerCase() === x: 1 === n.nodeType) || !++q || !(k && ((n[I] || (n[I] = {}))[a] = [N, q]), n === b)););
                            return q -= e,
                            q === d || 0 === q % d && 0 <= q / d
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = y.pseudos[a] || y.setFilters[a.toLowerCase()] || d.error("unsupported pseudo: " + a);
                    return e[I] ? e(b) : 1 < e.length ? (c = [a, a, "", b], y.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = O.call(a, f[g]),
                        a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: f(function(a) {
                    var b = [],
                    c = [],
                    d = C(a.replace(V, "$1"));
                    return d[I] ? f(function(a, b, c, e) {
                        var f;
                        c = d(a, null, e, []);
                        for (e = a.length; e--;)(f = c[e]) && (a[e] = !(b[e] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: f(function(a) {
                    return function(b) {
                        return 0 < d(a, b).length
                    }
                }),
                contains: f(function(a) {
                    return function(b) {
                        return - 1 < (b.textContent || b.innerText || F(b)).indexOf(a)
                    }
                }),
                lang: f(function(a) {
                    return oa.test(a || "") || d.error("unsupported lang: " + a),
                    a = a.replace(la, ma).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = ba ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === ca
                },
                focus: function(a) {
                    return a === P.activeElement && (!P.hasFocus || P.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
                },
                enabled: function(a) {
                    return ! 1 === a.disabled
                },
                disabled: function(a) {
                    return ! 0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! y.pseudos.empty(a)
                },
                header: function(a) {
                    return va.test(a.nodeName)
                },
                input: function(a) {
                    return ra.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(a, b) {
                    return [b - 1]
                }),
                eq: l(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: l(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: l(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: l(function(a, b, c) {
                    for (b = 0 > c ? c + b: c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: l(function(a, b, c) {
                    for (c = 0 > c ? c + b: c; b > ++c;) a.push(c);
                    return a
                })
            }
        };
        y.pseudos.nth = y.pseudos.eq;
        for (L in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) y.pseudos[L] = n(L);
        for (L in {
            submit: !0,
            reset: !0
        }) y.pseudos[L] = q(L);
        p.prototype = y.filters = y.pseudos;
        y.setFilters = new p;
        C = d.compile = function(a, b) {
            var c, d = [],
            e = [],
            f = S[a + " "];
            if (!f) {
                b || (b = r(a));
                for (c = b.length; c--;) f = w(b[c]),
                f[I] ? d.push(f) : e.push(f);
                f = S(a, z(e, d))
            }
            return f
        };
        u.sortStable = I.split("").sort(T).join("") === I;
        u.detectDuplicates = J;
        sa();
        u.sortDetached = g(function(a) {
            return 1 & a.compareDocumentPosition(P.createElement("div"))
        });
        g(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || h("type|href|height|width",
        function(a, c, d) {
            return d ? b: a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        });
        u.attributes && g(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || h("value",
        function(a, c, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? b: a.defaultValue
        });
        g(function(a) {
            return null == a.getAttribute("disabled")
        }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        function(a, c, d) {
            var e;
            return d ? b: (e = a.getAttributeNode(c)) && e.specified ? e.value: !0 === a[c] ? c.toLowerCase() : null
        });
        c.find = d;
        c.expr = d.selectors;
        c.expr[":"] = c.expr.pseudos;
        c.unique = d.uniqueSort;
        c.text = d.getText;
        c.isXMLDoc = d.isXML;
        c.contains = d.contains
    })(m);
    var Ya = {};
    c.Callbacks = function(a) {
        a = "string" == typeof a ? Ya[a] || Y(a) : c.extend({},
        a);
        var b, d, e, f, g, h, k = [],
        n = !a.once && [],
        q = function(c) {
            d = a.memory && c;
            e = !0;
            g = h || 0;
            h = 0;
            f = k.length;
            for (b = !0; k && f > g; g++) if (!1 === k[g].apply(c[0], c[1]) && a.stopOnFalse) {
                d = !1;
                break
            }
            b = !1;
            k && (n ? n.length && q(n.shift()) : d ? k = [] : r.disable())
        },
        r = {
            add: function() {
                if (k) {
                    var e = k.length; (function Na(b) {
                        c.each(b,
                        function(b, d) {
                            var e = c.type(d);
                            "function" === e ? a.unique && r.has(d) || k.push(d) : d && d.length && "string" !== e && Na(d)
                        })
                    })(arguments);
                    b ? f = k.length: d && (h = e, q(d))
                }
                return this
            },
            remove: function() {
                return k && c.each(arguments,
                function(a, d) {
                    for (var e; - 1 < (e = c.inArray(d, k, e));) k.splice(e, 1),
                    b && (f >= e && f--, g >= e && g--)
                }),
                this
            },
            has: function(a) {
                return a ? -1 < c.inArray(a, k) : !(!k || !k.length)
            },
            empty: function() {
                return k = [],
                f = 0,
                this
            },
            disable: function() {
                return k = n = d = l,
                this
            },
            disabled: function() {
                return ! k
            },
            lock: function() {
                return n = l,
                d || r.disable(),
                this
            },
            locked: function() {
                return ! n
            },
            fireWith: function(a, c) {
                return ! k || e && !n || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? n.push(c) : q(c)),
                this
            },
            fire: function() {
                return r.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! e
            }
        };
        return r
    };
    c.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", c.Callbacks("once memory"), "resolved"], ["reject", "fail", c.Callbacks("once memory"), "rejected"], ["notify", "progress", c.Callbacks("memory")]],
            d = "pending",
            e = {
                state: function() {
                    return d
                },
                always: function() {
                    return f.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return c.Deferred(function(d) {
                        c.each(b,
                        function(b, n) {
                            var q = n[0],
                            l = c.isFunction(a[b]) && a[b];
                            f[n[1]](function() {
                                var a = l && l.apply(this, arguments);
                                a && c.isFunction(a.promise) ? a.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[q + "With"](this === e ? d.promise() : this, l ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? c.extend(a, e) : e
                }
            },
            f = {};
            return e.pipe = e.then,
            c.each(b,
            function(a, c) {
                var k = c[2],
                n = c[3];
                e[c[1]] = k.add;
                n && k.add(function() {
                    d = n
                },
                b[1 ^ a][2].disable, b[2][2].lock);
                f[c[0]] = function() {
                    return f[c[0] + "With"](this === f ? e: this, arguments),
                    this
                };
                f[c[0] + "With"] = k.fireWith
            }),
            e.promise(f),
            a && a.call(f, f),
            f
        },
        when: function(a) {
            var b = 0,
            d = aa.call(arguments),
            e = d.length,
            f = 1 !== e || a && c.isFunction(a.promise) ? e: 0,
            g = 1 === f ? a: c.Deferred(),
            h = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = 1 < arguments.length ? aa.call(arguments) : d;
                    c === k ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            },
            k,
            n,
            q;
            if (1 < e) {
                k = Array(e);
                n = Array(e);
                for (q = Array(e); e > b; b++) d[b] && c.isFunction(d[b].promise) ? d[b].promise().done(h(b, q, d)).fail(g.reject).progress(h(b, n, k)) : --f
            }
            return f || g.resolveWith(q, d),
            g.promise()
        }
    });
    c.support = function(a) {
        var b, d, e, f, g, h, k = t.createElement("div");
        if (k.setAttribute("className", "t"), k.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = k.getElementsByTagName("*") || [], d = k.getElementsByTagName("a")[0], !d || !d.style || !b.length) return a;
        e = t.createElement("select");
        f = e.appendChild(t.createElement("option"));
        b = k.getElementsByTagName("input")[0];
        d.style.cssText = "top:1px;float:left;opacity:.5";
        a.getSetAttribute = "t" !== k.className;
        a.leadingWhitespace = 3 === k.firstChild.nodeType;
        a.tbody = !k.getElementsByTagName("tbody").length;
        a.htmlSerialize = !!k.getElementsByTagName("link").length;
        a.style = /top/.test(d.getAttribute("style"));
        a.hrefNormalized = "/a" === d.getAttribute("href");
        a.opacity = /^0.5/.test(d.style.opacity);
        a.cssFloat = !!d.style.cssFloat;
        a.checkOn = !!b.value;
        a.optSelected = f.selected;
        a.enctype = !!t.createElement("form").enctype;
        a.html5Clone = "<:nav></:nav>" !== t.createElement("nav").cloneNode(!0).outerHTML;
        a.inlineBlockNeedsLayout = !1;
        a.shrinkWrapBlocks = !1;
        a.pixelPosition = !1;
        a.deleteExpando = !0;
        a.noCloneEvent = !0;
        a.reliableMarginRight = !0;
        a.boxSizingReliable = !0;
        b.checked = !0;
        a.noCloneChecked = b.cloneNode(!0).checked;
        e.disabled = !0;
        a.optDisabled = !f.disabled;
        try {
            delete k.test
        } catch(n) {
            a.deleteExpando = !1
        }
        b = t.createElement("input");
        b.setAttribute("value", "");
        a.input = "" === b.getAttribute("value");
        b.value = "t";
        b.setAttribute("type", "radio");
        a.radioValue = "t" === b.value;
        b.setAttribute("checked", "t");
        b.setAttribute("name", "t");
        d = t.createDocumentFragment();
        d.appendChild(b);
        a.appendChecked = b.checked;
        a.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
        k.attachEvent && (k.attachEvent("onclick",
        function() {
            a.noCloneEvent = !1
        }), k.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) k.setAttribute(d = "on" + h, "t"),
        a[h + "Bubbles"] = d in m || !1 === k.attributes[d].expando;
        k.style.backgroundClip = "content-box";
        k.cloneNode(!0).style.backgroundClip = "";
        a.clearCloneStyle = "content-box" === k.style.backgroundClip;
        for (h in c(a)) break;
        return a.ownLast = "0" !== h,
        c(function() {
            var b, d, e, f = t.getElementsByTagName("body")[0];
            f && (b = t.createElement("div"), b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(b).appendChild(k), k.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = k.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", g = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", a.reliableHiddenOffsets = g && 0 === e[0].offsetHeight, k.innerHTML = "", k.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", c.swap(f, null != f.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                a.boxSizing = 4 === k.offsetWidth
            }), m.getComputedStyle && (a.pixelPosition = "1%" !== (m.getComputedStyle(k, null) || {}).top, a.boxSizingReliable = "4px" === (m.getComputedStyle(k, null) || {
                width: "4px"
            }).width, d = k.appendChild(t.createElement("div")), d.style.cssText = k.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", d.style.marginRight = d.style.width = "0", k.style.width = "1px", a.reliableMarginRight = !parseFloat((m.getComputedStyle(d, null) || {}).marginRight)), typeof k.style.zoom !== J && (k.innerHTML = "", k.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", a.inlineBlockNeedsLayout = 3 === k.offsetWidth, k.style.display = "block", k.innerHTML = "<div></div>", k.firstChild.style.width = "5px", a.shrinkWrapBlocks = 3 !== k.offsetWidth, a.inlineBlockNeedsLayout && (f.style.zoom = 1)), f.removeChild(b), b = k = e = d = null)
        }),
        b = e = d = f = d = b = null,
        a
    } ({});
    var Qb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Pb = /([A-Z])/g;
    c.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando],
            !!a && !R(a)
        },
        data: function(a, b, c) {
            return V(a, b, c)
        },
        removeData: function(a, b) {
            return T(a, b)
        },
        _data: function(a, b, c) {
            return V(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return T(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return ! 1;
            var b = a.nodeName && c.noData[a.nodeName.toLowerCase()];
            return ! b || !0 !== b && a.getAttribute("classid") === b
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var d, e, f = null,
            g = 0,
            h = this[0];
            if (a === l) {
                if (this.length && (f = c.data(h), 1 === h.nodeType && !c._data(h, "parsedAttrs"))) {
                    for (d = h.attributes; d.length > g; g++) e = d[g].name,
                    0 === e.indexOf("data-") && (e = c.camelCase(e.slice(5)), B(h, e, f[e]));
                    c._data(h, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                c.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                c.data(this, a, b)
            }) : h ? B(h, a, c.data(h, a)) : null
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, d) {
            var e;
            return a ? (b = (b || "fx") + "queue", e = c._data(a, b), d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d)), e || []) : l
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
            e = d.length,
            f = d.shift(),
            g = c._queueHooks(a, b),
            h = function() {
                c.dequeue(a, b)
            };
            "inprogress" === f && (f = d.shift(), e--);
            f && ("fx" === b && d.unshift("inprogress"), delete g.stop, f.call(a, h, g)); ! e && g && g.empty.fire()
        },
        _queueHooks: function(a, b) {
            var d = b + "queueHooks";
            return c._data(a, d) || c._data(a, d, {
                empty: c.Callbacks("once memory").add(function() {
                    c._removeData(a, b + "queue");
                    c._removeData(a, d)
                })
            })
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            var d = 2;
            return "string" != typeof a && (b = a, a = "fx", d--),
            d > arguments.length ? c.queue(this[0], a) : b === l ? this: this.each(function() {
                var d = c.queue(this, a, b);
                c._queueHooks(this, a);
                "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = c.fx ? c.fx.speeds[a] || a: a,
            b = b || "fx",
            this.queue(b,
            function(b, c) {
                var f = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(f)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var d, e = 1,
            f = c.Deferred(),
            g = this,
            h = this.length,
            k = function() {--e || f.resolveWith(g, [g])
            };
            "string" != typeof a && (b = a, a = l);
            for (a = a || "fx"; h--;)(d = c._data(g[h], a + "queueHooks")) && d.empty && (e++, d.empty.add(k));
            return k(),
            f.promise(b)
        }
    });
    var na, wb, Oa = /[\t\r\n\f]/g,
    jc = /\r/g,
    kc = /^(?:input|select|textarea|button|object)$/i,
    lc = /^(?:a|area)$/i,
    Pa = /^(?:checked|selected)$/i,
    da = c.support.getSetAttribute,
    Da = c.support.input;
    c.fn.extend({
        attr: function(a, b) {
            return c.access(this, c.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return c.access(this, c.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return a = c.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = l,
                    delete this[a]
                } catch(b) {}
            })
        },
        addClass: function(a) {
            var b, d, e, f, g, h = 0,
            k = this.length;
            b = "string" == typeof a && a;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).addClass(a.call(this, b, this.className))
            });
            if (b) for (b = (a || "").match(S) || []; k > h; h++) if (d = this[h], e = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Oa, " ") : " ")) {
                for (g = 0; f = b[g++];) 0 > e.indexOf(" " + f + " ") && (e += f + " ");
                d.className = c.trim(e)
            }
            return this
        },
        removeClass: function(a) {
            var b, d, e, f, g, h = 0,
            k = this.length;
            b = 0 === arguments.length || "string" == typeof a && a;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).removeClass(a.call(this, b, this.className))
            });
            if (b) for (b = (a || "").match(S) || []; k > h; h++) if (d = this[h], e = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Oa, " ") : "")) {
                for (g = 0; f = b[g++];) for (; 0 <= e.indexOf(" " + f + " ");) e = e.replace(" " + f + " ", " ");
                d.className = a ? c.trim(e) : ""
            }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a;
            return "boolean" == typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : c.isFunction(a) ? this.each(function(d) {
                c(this).toggleClass(a.call(this, d, this.className, b), b)
            }) : this.each(function() {
                if ("string" === d) for (var b, f = 0,
                g = c(this), h = a.match(S) || []; b = h[f++];) g.hasClass(b) ? g.removeClass(b) : g.addClass(b);
                else(d === J || "boolean" === d) && (this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "": c._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0,
            c = this.length; c > b; b++) if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Oa, " ").indexOf(a)) return ! 0;
            return ! 1
        },
        val: function(a) {
            var b, d, e, f = this[0];
            if (arguments.length) return e = c.isFunction(a),
            this.each(function(b) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, b, c(this).val()) : a, null == f ? f = "": "number" == typeof f ? f += "": c.isArray(f) && (f = c.map(f,
                function(a) {
                    return null == a ? "": a + ""
                })), d = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== l || (this.value = f))
            });
            if (f) return d = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()],
            d && "get" in d && (b = d.get(f, "value")) !== l ? b: (b = f.value, "string" == typeof b ? b.replace(jc, "") : null == b ? "": b)
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = c.find.attr(a, "value");
                    return null != b ? b: a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, d = a.options,
                    e = a.selectedIndex,
                    f = "select-one" === a.type || 0 > e,
                    g = f ? null: [], h = f ? e + 1 : d.length, k = 0 > e ? h: f ? e: 0; h > k; k++) if (b = d[k], !(!b.selected && k !== e || (c.support.optDisabled ? b.disabled: null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) {
                        if (a = c(b).val(), f) return a;
                        g.push(a)
                    }
                    return g
                },
                set: function(a, b) {
                    for (var d, e, f = a.options,
                    g = c.makeArray(b), h = f.length; h--;) e = f[h],
                    (e.selected = 0 <= c.inArray(c(e).val(), g)) && (d = !0);
                    return d || (a.selectedIndex = -1),
                    g
                }
            }
        },
        attr: function(a, b, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === J ? c.prop(a, b, d) : (1 === g && c.isXMLDoc(a) || (b = b.toLowerCase(), e = c.attrHooks[b] || (c.expr.match.bool.test(b) ? wb: na)), d === l ? e && "get" in e && null !== (f = e.get(a, b)) ? f: (f = c.find.attr(a, b), null == f ? l: f) : null !== d ? e && "set" in e && (f = e.set(a, d, b)) !== l ? f: (a.setAttribute(b, d + ""), d) : (c.removeAttr(a, b), l))
        },
        removeAttr: function(a, b) {
            var d, e, f = 0,
            g = b && b.match(S);
            if (g && 1 === a.nodeType) for (; d = g[f++];) e = c.propFix[d] || d,
            c.expr.match.bool.test(d) ? Da && da || !Pa.test(d) ? a[e] = !1 : a[c.camelCase("default-" + d)] = a[e] = !1 : c.attr(a, d, ""),
            a.removeAttribute(da ? d: e)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                        var d = a.value;
                        return a.setAttribute("type", b),
                        d && (a.value = d),
                        b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !c.isXMLDoc(a),
            g && (b = c.propFix[b] || b, f = c.propHooks[b]),
            d !== l ? f && "set" in f && (e = f.set(a, d, b)) !== l ? e: a[b] = d: f && "get" in f && null !== (e = f.get(a, b)) ? e: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = c.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kc.test(a.nodeName) || lc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    wb = {
        set: function(a, b, d) {
            return ! 1 === b ? c.removeAttr(a, d) : Da && da || !Pa.test(d) ? a.setAttribute(!da && c.propFix[d] || d, d) : a[c.camelCase("default-" + d)] = a[d] = !0,
            d
        }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g),
    function(a, b) {
        var d = c.expr.attrHandle[b] || c.find.attr;
        c.expr.attrHandle[b] = Da && da || !Pa.test(b) ?
        function(a, b, g) {
            var h = c.expr.attrHandle[b];
            a = g ? l: (c.expr.attrHandle[b] = l) != d(a, b, g) ? b.toLowerCase() : null;
            return c.expr.attrHandle[b] = h,
            a
        }: function(a, b, d) {
            return d ? l: a[c.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Da && da || (c.attrHooks.value = {
        set: function(a, b, d) {
            return c.nodeName(a, "input") ? (a.defaultValue = b, l) : na && na.set(a, b, d)
        }
    });
    da || (na = {
        set: function(a, b, c) {
            var e = a.getAttributeNode(c);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(c)),
            e.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b: l
        }
    },
    c.expr.attrHandle.id = c.expr.attrHandle.name = c.expr.attrHandle.coords = function(a, b, c) {
        var e;
        return c ? l: (e = a.getAttributeNode(b)) && "" !== e.value ? e.value: null
    },
    c.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value: l
        },
        set: na.set
    },
    c.attrHooks.contenteditable = {
        set: function(a, b, c) {
            na.set(a, "" === b ? !1 : b, c)
        }
    },
    c.each(["width", "height"],
    function(a, b) {
        c.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : l
            }
        }
    }));
    c.support.hrefNormalized || c.each(["href", "src"],
    function(a, b) {
        c.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    c.support.style || (c.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || l
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    c.support.optSelected || (c.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex),
            null
        }
    });
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
    function() {
        c.propFix[this.toLowerCase()] = this
    });
    c.support.enctype || (c.propFix.enctype = "encoding");
    c.each(["radio", "checkbox"],
    function() {
        c.valHooks[this] = {
            set: function(a, b) {
                return c.isArray(b) ? a.checked = 0 <= c.inArray(c(a).val(), b) : l
            }
        };
        c.support.checkOn || (c.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var Qa = /^(?:input|select|textarea)$/i,
    mc = /^key/,
    nc = /^(?:mouse|contextmenu)|click/,
    xb = /^(?:focusinfocus|focusoutblur)$/,
    yb = /^([^.]*)(?:\.(.+)|)$/;
    c.event = {
        global: {},
        add: function(a, b, d, e, f) {
            var g, h, k, n, q, r, p, m, s, t;
            if (k = c._data(a)) {
                d.handler && (n = d, d = n.handler, f = n.selector);
                d.guid || (d.guid = c.guid++); (h = k.events) || (h = k.events = {}); (r = k.handle) || (r = k.handle = function(a) {
                    return typeof c === J || a && c.event.triggered === a.type ? l: c.event.dispatch.apply(r.elem, arguments)
                },
                r.elem = a);
                b = (b || "").match(S) || [""];
                for (k = b.length; k--;) g = yb.exec(b[k]) || [],
                s = t = g[1],
                g = (g[2] || "").split(".").sort(),
                s && (q = c.event.special[s] || {},
                s = (f ? q.delegateType: q.bindType) || s, q = c.event.special[s] || {},
                p = c.extend({
                    type: s,
                    origType: t,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && c.expr.match.needsContext.test(f),
                    namespace: g.join(".")
                },
                n), (m = h[s]) || (m = h[s] = [], m.delegateCount = 0, q.setup && !1 !== q.setup.call(a, e, g, r) || (a.addEventListener ? a.addEventListener(s, r, !1) : a.attachEvent && a.attachEvent("on" + s, r))), q.add && (q.add.call(a, p), p.handler.guid || (p.handler.guid = d.guid)), f ? m.splice(m.delegateCount++, 0, p) : m.push(p), c.event.global[s] = !0);
                a = null
            }
        },
        remove: function(a, b, d, e, f) {
            var g, h, k, n, q, l, p, r, m, s, t, v = c.hasData(a) && c._data(a);
            if (v && (l = v.events)) {
                b = (b || "").match(S) || [""];
                for (q = b.length; q--;) if (k = yb.exec(b[q]) || [], m = t = k[1], s = (k[2] || "").split(".").sort(), m) {
                    p = c.event.special[m] || {};
                    m = (e ? p.delegateType: p.bindType) || m;
                    r = l[m] || [];
                    k = k[2] && RegExp("(^|\\.)" + s.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (n = g = r.length; g--;) h = r[g],
                    !f && t !== h.origType || d && d.guid !== h.guid || k && !k.test(h.namespace) || e && e !== h.selector && ("**" !== e || !h.selector) || (r.splice(g, 1), h.selector && r.delegateCount--, p.remove && p.remove.call(a, h));
                    n && !r.length && (p.teardown && !1 !== p.teardown.call(a, s, v.handle) || c.removeEvent(a, m, v.handle), delete l[m])
                } else for (m in l) c.event.remove(a, m + b[q], d, e, !0);
                c.isEmptyObject(l) && (delete v.handle, c._removeData(a, "events"))
            }
        },
        trigger: function(a, b, d, e) {
            var f, g, h, k, n, q, r = [d || t],
            p = ja.call(a, "type") ? a.type: a;
            q = ja.call(a, "namespace") ? a.namespace.split(".") : [];
            if (h = f = d = d || t, 3 !== d.nodeType && 8 !== d.nodeType && !xb.test(p + c.event.triggered) && (0 <= p.indexOf(".") && (q = p.split("."), p = q.shift(), q.sort()), g = 0 > p.indexOf(":") && "on" + p, a = a[c.expando] ? a: new c.Event(p, "object" == typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = q.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = l, a.target || (a.target = d), b = null == b ? [a] : c.makeArray(b, [a]), n = c.event.special[p] || {},
            e || !n.trigger || !1 !== n.trigger.apply(d, b))) {
                if (!e && !n.noBubble && !c.isWindow(d)) {
                    k = n.delegateType || p;
                    for (xb.test(k + p) || (h = h.parentNode); h; h = h.parentNode) r.push(h),
                    f = h;
                    f === (d.ownerDocument || t) && r.push(f.defaultView || f.parentWindow || m)
                }
                for (q = 0; (h = r[q++]) && !a.isPropagationStopped();) a.type = 1 < q ? k: n.bindType || p,
                (f = (c._data(h, "events") || {})[a.type] && c._data(h, "handle")) && f.apply(h, b),
                (f = g && h[g]) && c.acceptData(h) && f.apply && !1 === f.apply(h, b) && a.preventDefault();
                if (a.type = p, !e && !a.isDefaultPrevented() && (!n._default || !1 === n._default.apply(r.pop(), b)) && c.acceptData(d) && g && d[p] && !c.isWindow(d)) { (f = d[g]) && (d[g] = null);
                    c.event.triggered = p;
                    try {
                        d[p]()
                    } catch(s) {}
                    c.event.triggered = l;
                    f && (d[g] = f)
                }
                return a.result
            }
        },
        dispatch: function(a) {
            a = c.event.fix(a);
            var b, d, e, f, g, h = [],
            k = aa.call(arguments);
            b = (c._data(this, "events") || {})[a.type] || [];
            var n = c.event.special[a.type] || {};
            if (k[0] = a, a.delegateTarget = this, !n.preDispatch || !1 !== n.preDispatch.call(this, a)) {
                h = c.event.handlers.call(this, a, b);
                for (b = 0; (f = h[b++]) && !a.isPropagationStopped();) {
                    a.currentTarget = f.elem;
                    for (g = 0; (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((c.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, k), d !== l && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()))
                }
                return n.postDispatch && n.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var d, e, f, g, h = [],
            k = b.delegateCount,
            n = a.target;
            if (k && n.nodeType && (!a.button || "click" !== a.type)) for (; n != this; n = n.parentNode || this) if (1 === n.nodeType && (!0 !== n.disabled || "click" !== a.type)) {
                f = [];
                for (g = 0; k > g; g++) e = b[g],
                d = e.selector + " ",
                f[d] === l && (f[d] = e.needsContext ? 0 <= c(d, this).index(n) : c.find(d, this, null, [n]).length),
                f[d] && f.push(e);
                f.length && h.push({
                    elem: n,
                    handlers: f
                })
            }
            return b.length > k && h.push({
                elem: this,
                handlers: b.slice(k)
            }),
            h
        },
        fix: function(a) {
            if (a[c.expando]) return a;
            var b, d, e;
            b = a.type;
            var f = a,
            g = this.fixHooks[b];
            g || (this.fixHooks[b] = g = nc.test(b) ? this.mouseHooks: mc.test(b) ? this.keyHooks: {});
            e = g.props ? this.props.concat(g.props) : this.props;
            a = new c.Event(f);
            for (b = e.length; b--;) d = e[b],
            a[d] = f[d];
            return a.target || (a.target = f.srcElement || t),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || t, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement: h),
                a.which || g === l || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== fa() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === fa() && this.blur ? (this.blur(), !1) : l
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return c.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : l
                },
                _default: function(a) {
                    return c.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== l && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, d, e) {
            a = c.extend(new c.Event, d, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    c.removeEvent = t.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        b = "on" + b;
        a.detachEvent && (typeof a[b] === J && (a[b] = null), a.detachEvent(b, c))
    };
    c.Event = function(a, b) {
        return this instanceof c.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? ia: W) : this.type = a, b && c.extend(this, b), this.timeStamp = a && a.timeStamp || c.now(), this[c.expando] = !0, l) : new c.Event(a, b)
    };
    c.Event.prototype = {
        isDefaultPrevented: W,
        isPropagationStopped: W,
        isImmediatePropagationStopped: W,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ia;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ia;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ia;
            this.stopPropagation()
        }
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        c.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var e, f = a.relatedTarget,
                g = a.handleObj;
                return (!f || f !== this && !c.contains(this, f)) && (a.type = g.origType, e = g.handler.apply(this, arguments), a.type = b),
                e
            }
        }
    });
    c.support.submitBubbles || (c.event.special.submit = {
        setup: function() {
            return c.nodeName(this, "form") ? !1 : (c.event.add(this, "click._submit keypress._submit",
            function(a) {
                a = a.target; (a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form: l) && !c._data(a, "submitBubbles") && (c.event.add(a, "submit._submit",
                function(a) {
                    a._submit_bubble = !0
                }), c._data(a, "submitBubbles", !0))
            }), l)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return c.nodeName(this, "form") ? !1 : (c.event.remove(this, "._submit"), l)
        }
    });
    c.support.changeBubbles || (c.event.special.change = {
        setup: function() {
            return Qa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (c.event.add(this, "propertychange._change",
            function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), c.event.add(this, "click._change",
            function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1);
                c.event.simulate("change", this, a, !0)
            })), !1) : (c.event.add(this, "beforeactivate._change",
            function(a) {
                a = a.target;
                Qa.test(a.nodeName) && !c._data(a, "changeBubbles") && (c.event.add(a, "change._change",
                function(a) { ! this.parentNode || a.isSimulated || a.isTrigger || c.event.simulate("change", this.parentNode, a, !0)
                }), c._data(a, "changeBubbles", !0))
            }), l)
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : l
        },
        teardown: function() {
            return c.event.remove(this, "._change"),
            !Qa.test(this.nodeName)
        }
    });
    c.support.focusinBubbles || c.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var d = 0,
        e = function(a) {
            c.event.simulate(b, a.target, c.event.fix(a), !0)
        };
        c.event.special[b] = {
            setup: function() {
                0 === d++&&t.addEventListener(a, e, !0)
            },
            teardown: function() {
                0 === --d && t.removeEventListener(a, e, !0)
            }
        }
    });
    c.fn.extend({
        on: function(a, b, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof b && (d = d || b, b = l);
                for (g in a) this.on(g, b, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = b, d = b = l) : null == e && ("string" == typeof b ? (e = d, d = l) : (e = d, d = b, b = l)), !1 === e) e = W;
            else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return c().off(a),
                h.apply(this, arguments)
            },
            e.guid = h.guid || (h.guid = c.guid++)),
            this.each(function() {
                c.event.add(this, a, e, d, b)
            })
        },
        one: function(a, b, c, e) {
            return this.on(a, b, c, e, 1)
        },
        off: function(a, b, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj,
            c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler),
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, b, a[f]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (d = b, b = l),
            !1 === d && (d = W),
            this.each(function() {
                c.event.remove(this, a, d, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var d = this[0];
            return d ? c.event.trigger(a, b, d, !0) : l
        }
    });
    var Rb = /^.[^:#\[\.,]*$/,
    oc = /^(?:parents|prev(?:Until|All))/,
    zb = c.expr.match.needsContext,
    pc = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    c.fn.extend({
        find: function(a) {
            var b, d = [],
            e = this,
            f = e.length;
            if ("string" != typeof a) return this.pushStack(c(a).filter(function() {
                for (b = 0; f > b; b++) if (c.contains(e[b], this)) return ! 0
            }));
            for (b = 0; f > b; b++) c.find(a, e[b], d);
            return d = this.pushStack(1 < f ? c.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a: a,
            d
        },
        has: function(a) {
            var b, d = c(a, this),
            e = d.length;
            return this.filter(function() {
                for (b = 0; e > b; b++) if (c.contains(this, d[b])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(s(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(s(this, a || [], !1))
        },
        is: function(a) {
            return !! s(this, "string" == typeof a && zb.test(a) ? c(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var d, e = 0,
            f = this.length,
            g = [], h = zb.test(a) || "string" != typeof a ? c(a, b || this.context) : 0; f > e; e++) for (d = this[e]; d && d !== b; d = d.parentNode) if (11 > d.nodeType && (h ? -1 < h.index(d) : 1 === d.nodeType && c.find.matchesSelector(d, a))) {
                g.push(d);
                break
            }
            return this.pushStack(1 < g.length ? c.unique(g) : g)
        },
        index: function(a) {
            return a ? "string" == typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            var d = "string" == typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a),
            d = c.merge(this.get(), d);
            return this.pushStack(c.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a: null
        },
        parents: function(a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, d) {
            return c.dir(a, "parentNode", d)
        },
        next: function(a) {
            return r(a, "nextSibling")
        },
        prev: function(a) {
            return r(a, "previousSibling")
        },
        nextAll: function(a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, d) {
            return c.dir(a, "nextSibling", d)
        },
        prevUntil: function(a, b, d) {
            return c.dir(a, "previousSibling", d)
        },
        siblings: function(a) {
            return c.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return c.sibling(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: c.merge([], a.childNodes)
        }
    },
    function(a, b) {
        c.fn[a] = function(d, e) {
            var f = c.map(this, b, d);
            return "Until" !== a.slice( - 5) && (e = d),
            e && "string" == typeof e && (f = c.filter(e, f)),
            1 < this.length && (pc[a] || (f = c.unique(f)), oc.test(a) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    c.extend({
        filter: function(a, b, d) {
            var e = b[0];
            return d && (a = ":not(" + a + ")"),
            1 === b.length && 1 === e.nodeType ? c.find.matchesSelector(e, a) ? [e] : [] : c.find.matches(a, c.grep(b,
            function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, b, d) {
            var e = [];
            for (a = a[b]; a && 9 !== a.nodeType && (d === l || 1 !== a.nodeType || !c(a).is(d));) 1 === a.nodeType && e.push(a),
            a = a[b];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Za = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    qc = / jQuery\d+="(?:null|\d+)"/g,
    Ab = RegExp("<(?:" + Za + ")[\\s/>]", "i"),
    Ra = /^\s+/,
    Bb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Cb = /<([\w:]+)/,
    Db = /<tbody/i,
    rc = /<|&#?\w+;/,
    sc = /<(?:script|style|link)/i,
    Ga = /^(?:checkbox|radio)$/i,
    tc = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Eb = /^$|\/(?:java|ecma)script/i,
    Sb = /^true\/(.*)/,
    uc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Q = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: c.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Sa = v(t).appendChild(t.createElement("div"));
    Q.optgroup = Q.option;
    Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead;
    Q.th = Q.td;
    c.fn.extend({
        text: function(a) {
            return c.access(this,
            function(a) {
                return a === l ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(a))
            },
            null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(a) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && U(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = U(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var d, e = a ? c.filter(a, this) : this, f = 0; null != (d = e[f]); f++) b || 1 !== d.nodeType || c.cleanData(A(d)),
            d.parentNode && (b && c.contains(d.ownerDocument, d) && C(A(d, "script")), d.parentNode.removeChild(d));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && c.cleanData(A(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && c.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return c.clone(this, a, b)
            })
        },
        html: function(a) {
            return c.access(this,
            function(a) {
                var d = this[0] || {},
                e = 0,
                f = this.length;
                if (a === l) return 1 === d.nodeType ? d.innerHTML.replace(qc, "") : l;
                if (! ("string" != typeof a || sc.test(a) || !c.support.htmlSerialize && Ab.test(a) || !c.support.leadingWhitespace && Ra.test(a) || Q[(Cb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Bb, "<$1></$2>");
                    try {
                        for (; f > e; e++) d = this[e] || {},
                        1 === d.nodeType && (c.cleanData(A(d, !1)), d.innerHTML = a);
                        d = 0
                    } catch(g) {}
                }
                d && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = c.map(this,
            function(a) {
                return [a.nextSibling, a.parentNode]
            }),
            b = 0;
            return this.domManip(arguments,
            function(d) {
                var e = a[b++],
                f = a[b++];
                f && (e && e.parentNode !== f && (e = this.nextSibling), c(this).remove(), f.insertBefore(d, e))
            },
            !0),
            b ? this: this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, d) {
            a = rb.apply([], a);
            var e, f, g, h, k = 0,
            n = this.length,
            q = this,
            l = n - 1,
            p = a[0],
            r = c.isFunction(p);
            if (r || !(1 >= n || "string" != typeof p || c.support.checkClone) && tc.test(p)) return this.each(function(c) {
                var e = q.eq(c);
                r && (a[0] = p.call(this, c, e.html()));
                e.domManip(a, b, d)
            });
            if (n && (h = c.buildFragment(a, this[0].ownerDocument, !1, !d && this), e = h.firstChild, 1 === h.childNodes.length && (h = e), e)) {
                g = c.map(A(h, "script"), z);
                for (f = g.length; n > k; k++) e = h,
                k !== l && (e = c.clone(e, !0, !0), f && c.merge(g, A(e, "script"))),
                b.call(this[k], e, k);
                if (f) {
                    h = g[g.length - 1].ownerDocument;
                    c.map(g, F);
                    for (k = 0; f > k; k++) e = g[k],
                    Eb.test(e.type || "") && !c._data(e, "globalEval") && c.contains(h, e) && (e.src ? c._evalUrl(e.src) : c.globalEval((e.text || e.textContent || e.innerHTML || "").replace(uc, "")))
                }
                h = e = null
            }
            return this
        }
    });
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        c.fn[a] = function(a) {
            for (var e = 0,
            f = [], g = c(a), h = g.length - 1; h >= e; e++) a = e === h ? this: this.clone(!0),
            c(g[e])[b](a),
            Ka.apply(f, a.get());
            return this.pushStack(f)
        }
    });
    c.extend({
        clone: function(a, b, d) {
            var e, f, g, h, k, n = c.contains(a.ownerDocument, a);
            if (c.support.html5Clone || c.isXMLDoc(a) || !Ab.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (Sa.innerHTML = a.outerHTML, Sa.removeChild(g = Sa.firstChild)), !(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
                e = A(g);
                k = A(a);
                for (h = 0; null != (f = k[h]); ++h) if (e[h]) {
                    var q = e[h],
                    l = void 0,
                    p = void 0,
                    r = void 0;
                    if (1 === q.nodeType) {
                        if (l = q.nodeName.toLowerCase(), !c.support.noCloneEvent && q[c.expando]) {
                            r = c._data(q);
                            for (p in r.events) c.removeEvent(q, p, r.handle);
                            q.removeAttribute(c.expando)
                        }
                        "script" === l && q.text !== f.text ? (z(q).text = f.text, F(q)) : "object" === l ? (q.parentNode && (q.outerHTML = f.outerHTML), c.support.html5Clone && f.innerHTML && !c.trim(q.innerHTML) && (q.innerHTML = f.innerHTML)) : "input" === l && Ga.test(f.type) ? (q.defaultChecked = q.checked = f.checked, q.value !== f.value && (q.value = f.value)) : "option" === l ? q.defaultSelected = q.selected = f.defaultSelected: ("input" === l || "textarea" === l) && (q.defaultValue = f.defaultValue)
                    }
                }
            }
            if (b) if (d) {
                k = k || A(a);
                e = e || A(g);
                for (h = 0; null != (f = k[h]); h++) L(f, e[h])
            } else L(a, g);
            return e = A(g, "script"),
            0 < e.length && C(e, !n && A(a, "script")),
            g
        },
        buildFragment: function(a, b, d, e) {
            for (var f, g, h, k, n, l, r, p = a.length,
            m = v(b), s = [], t = 0; p > t; t++) if (g = a[t], g || 0 === g) if ("object" === c.type(g)) c.merge(s, g.nodeType ? [g] : g);
            else if (rc.test(g)) {
                k = k || m.appendChild(b.createElement("div"));
                n = (Cb.exec(g) || ["", ""])[1].toLowerCase();
                r = Q[n] || Q._default;
                k.innerHTML = r[1] + g.replace(Bb, "<$1></$2>") + r[2];
                for (f = r[0]; f--;) k = k.lastChild;
                if (!c.support.leadingWhitespace && Ra.test(g) && s.push(b.createTextNode(Ra.exec(g)[0])), !c.support.tbody) for (f = (g = "table" !== n || Db.test(g) ? "<table>" !== r[1] || Db.test(g) ? 0 : k: k.firstChild) && g.childNodes.length; f--;) c.nodeName(l = g.childNodes[f], "tbody") && !l.childNodes.length && g.removeChild(l);
                c.merge(s, k.childNodes);
                for (k.textContent = ""; k.firstChild;) k.removeChild(k.firstChild);
                k = m.lastChild
            } else s.push(b.createTextNode(g));
            k && m.removeChild(k);
            c.support.appendChecked || c.grep(A(s, "input"), Fa);
            for (t = 0; g = s[t++];) if ((!e || -1 === c.inArray(g, e)) && (h = c.contains(g.ownerDocument, g), k = A(m.appendChild(g), "script"), h && C(k), d)) for (f = 0; g = k[f++];) Eb.test(g.type || "") && d.push(g);
            return m
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0,
            k = c.expando,
            n = c.cache,
            l = c.support.deleteExpando,
            r = c.event.special; null != (d = a[h]); h++) if ((b || c.acceptData(d)) && (f = d[k], g = f && n[f])) {
                if (g.events) for (e in g.events) r[e] ? c.event.remove(d, e) : c.removeEvent(d, e, g.handle);
                n[f] && (delete n[f], l ? delete d[k] : typeof d.removeAttribute !== J ? d.removeAttribute(k) : d[k] = null, ha.push(f))
            }
        },
        _evalUrl: function(a) {
            return c.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    });
    c.fn.extend({
        wrapAll: function(a) {
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                c(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = c(this),
                d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = c.isFunction(a);
            return this.each(function(d) {
                c(this).wrapAll(b ? a.call(this, d) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var qa, Z, O, Ta = /alpha\([^)]*\)/i,
    vc = /opacity\s*=\s*([^)]*)/,
    wc = /^(top|right|bottom|left)$/,
    xc = /^(none|table(?!-c[ea]).+)/,
    Fb = /^margin/,
    Tb = RegExp("^(" + Ba + ")(.*)$", "i"),
    wa = RegExp("^(" + Ba + ")(?!px)[a-z%]+$", "i"),
    yc = RegExp("^([+-])=(" + Ba + ")", "i"),
    gb = {
        BODY: "block"
    },
    zc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Gb = {
        letterSpacing: 0,
        fontWeight: 400
    },
    ga = ["Top", "Right", "Bottom", "Left"],
    ab = ["Webkit", "O", "Moz", "ms"];
    c.fn.extend({
        css: function(a, b) {
            return c.access(this,
            function(a, b, f) {
                var g, h = {},
                k = 0;
                if (c.isArray(b)) {
                    g = Z(a);
                    for (f = b.length; f > k; k++) h[b[k]] = c.css(a, b[k], !1, g);
                    return h
                }
                return f !== l ? c.style(a, b, f) : c.css(a, b)
            },
            a, b, 1 < arguments.length)
        },
        show: function() {
            return bb(this, !0)
        },
        hide: function() {
            return bb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                pa(this) ? c(this).show() : c(this).hide()
            })
        }
    });
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = O(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, b, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, k = c.camelCase(b),
                n = a.style;
                if (b = c.cssProps[k] || (c.cssProps[k] = $a(n, k)), h = c.cssHooks[b] || c.cssHooks[k], d === l) return h && "get" in h && (f = h.get(a, !1, e)) !== l ? f: n[b];
                if (g = typeof d, "string" === g && (f = yc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(c.css(a, b)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || c.cssNumber[k] || (d += "px"), c.support.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (n[b] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === l))) try {
                    n[b] = d
                } catch(r) {}
            }
        },
        css: function(a, b, d, e) {
            var f, g, h, k = c.camelCase(b);
            return b = c.cssProps[k] || (c.cssProps[k] = $a(a.style, k)),
            h = c.cssHooks[b] || c.cssHooks[k],
            h && "get" in h && (g = h.get(a, !0, d)),
            g === l && (g = O(a, b, e)),
            "normal" === g && b in Gb && (g = Gb[b]),
            "" === d || d ? (f = parseFloat(g), !0 === d || c.isNumeric(f) ? f || 0 : g) : g
        }
    });
    m.getComputedStyle ? (Z = function(a) {
        return m.getComputedStyle(a, null)
    },
    O = function(a, b, d) {
        var e, f, g, h = (d = d || Z(a)) ? d.getPropertyValue(b) || d[b] : l,
        k = a.style;
        return d && ("" !== h || c.contains(a.ownerDocument, a) || (h = c.style(a, b)), wa.test(h) && Fb.test(b) && (e = k.width, f = k.minWidth, g = k.maxWidth, k.minWidth = k.maxWidth = k.width = h, h = d.width, k.width = e, k.minWidth = f, k.maxWidth = g)),
        h
    }) : t.documentElement.currentStyle && (Z = function(a) {
        return a.currentStyle
    },
    O = function(a, b, c) {
        var e, f, g;
        c = (c = c || Z(a)) ? c[b] : l;
        var h = a.style;
        return null == c && h && h[b] && (c = h[b]),
        wa.test(c) && !wc.test(b) && (e = h.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em": c, c = h.pixelLeft + "px", h.left = e, g && (f.left = g)),
        "" === c ? "auto": c
    });
    c.each(["height", "width"],
    function(a, b) {
        c.cssHooks[b] = {
            get: function(a, e, f) {
                return e ? 0 === a.offsetWidth && xc.test(c.css(a, "display")) ? c.swap(a, zc,
                function() {
                    return fb(a, b, f)
                }) : fb(a, b, f) : l
            },
            set: function(a, e, f) {
                var g = f && Z(a);
                return db(a, e, f ? eb(a, b, f, c.support.boxSizing && "border-box" === c.css(a, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    c.support.opacity || (c.cssHooks.opacity = {
        get: function(a, b) {
            return vc.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function(a, b) {
            var d = a.style,
            e = a.currentStyle,
            f = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            g = e && e.filter || d.filter || "";
            d.zoom = 1; (1 <= b || "" === b) && "" === c.trim(g.replace(Ta, "")) && d.removeAttribute && (d.removeAttribute("filter"), "" === b || e && !e.filter) || (d.filter = Ta.test(g) ? g.replace(Ta, f) : g + " " + f)
        }
    });
    c(function() {
        c.support.reliableMarginRight || (c.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? c.swap(a, {
                    display: "inline-block"
                },
                O, [a, "marginRight"]) : l
            }
        }); ! c.support.pixelPosition && c.fn.position && c.each(["top", "left"],
        function(a, b) {
            c.cssHooks[b] = {
                get: function(a, e) {
                    return e ? (e = O(a, b), wa.test(e) ? c(a).position()[b] + "px": e) : l
                }
            }
        })
    });
    c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !c.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || c.css(a, "display"))
    },
    c.expr.filters.visible = function(a) {
        return ! c.expr.filters.hidden(a)
    });
    c.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        c.cssHooks[a + b] = {
            expand: function(c) {
                var e = 0,
                f = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > e; e++) f[a + ga[e] + b] = c[e] || c[e - 2] || c[0];
                return f
            }
        };
        Fb.test(a) || (c.cssHooks[a + b].set = db)
    });
    var Ac = /%20/g,
    Ub = /\[\]$/,
    Hb = /\r?\n/g,
    Bc = /^(?:submit|button|image|reset|file)$/i,
    Cc = /^(?:input|select|textarea|keygen)/i;
    c.fn.extend({
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = c.prop(this, "elements");
                return a ? c.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !c(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !Ga.test(a))
            }).map(function(a, b) {
                var d = c(this).val();
                return null == d ? null: c.isArray(d) ? c.map(d,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Hb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: d.replace(Hb, "\r\n")
                }
            }).get()
        }
    });
    c.param = function(a, b) {
        var d, e = [],
        f = function(a, b) {
            b = c.isFunction(b) ? b() : null == b ? "": b;
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (b === l && (b = c.ajaxSettings && c.ajaxSettings.traditional), c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a,
        function() {
            f(this.name, this.value)
        });
        else for (d in a) Ha(d, a[d], b, f);
        return e.join("&").replace(Ac, "+")
    };
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        c.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    c.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var X, ea, Ua = c.now(),
    Va = /\?/,
    Dc = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Ec = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Fc = /^(?:GET|HEAD)$/,
    Gc = /^\/\//,
    Jb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Kb = c.fn.load,
    Lb = {},
    Ia = {},
    Mb = "*/".concat("*");
    try {
        ea = Wb.href
    } catch(Kc) {
        ea = t.createElement("a"),
        ea.href = "",
        ea = ea.href
    }
    X = Jb.exec(ea.toLowerCase()) || [];
    c.fn.load = function(a, b, d) {
        if ("string" != typeof a && Kb) return Kb.apply(this, arguments);
        var e, f, g, h = this,
        k = a.indexOf(" ");
        return 0 <= k && (e = a.slice(k, a.length), a = a.slice(0, k)),
        c.isFunction(b) ? (d = b, b = l) : b && "object" == typeof b && (g = "POST"),
        0 < h.length && c.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            h.html(e ? c("<div>").append(c.parseHTML(a)).find(e) : a)
        }).complete(d &&
        function(a, b) {
            h.each(d, f || [a.responseText, b, a])
        }),
        this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        c.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ea,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(X[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ja(Ja(a, c.ajaxSettings), b) : Ja(c.ajaxSettings, a)
        },
        ajaxPrefilter: ib(Lb),
        ajaxTransport: ib(Ia),
        ajax: function(a, b) {
            function d(a, b, d, e) {
                var f, m, x, w, A = b;
                if (2 !== z) {
                    z = 2;
                    k && clearTimeout(k);
                    r = l;
                    h = e || "";
                    u.readyState = 0 < a ? 4 : 0;
                    e = 200 <= a && 300 > a || 304 === a;
                    if (d) {
                        x = p;
                        for (var F = u,
                        H, C, E, G, I = x.contents,
                        M = x.dataTypes;
                        "*" === M[0];) M.shift(),
                        C === l && (C = x.mimeType || F.getResponseHeader("Content-Type"));
                        if (C) for (G in I) if (I[G] && I[G].test(C)) {
                            M.unshift(G);
                            break
                        }
                        if (M[0] in d) E = M[0];
                        else {
                            for (G in d) {
                                if (!M[0] || x.converters[G + " " + M[0]]) {
                                    E = G;
                                    break
                                }
                                H || (H = G)
                            }
                            E = E || H
                        }
                        x = E ? (E !== M[0] && M.unshift(E), d[E]) : l
                    }
                    var N;
                    a: {
                        d = p;
                        H = x;
                        C = u;
                        E = e;
                        var D, J, B;
                        x = {};
                        F = d.dataTypes.slice();
                        if (F[1]) for (D in d.converters) x[D.toLowerCase()] = d.converters[D];
                        for (G = F.shift(); G;) if (d.responseFields[G] && (C[d.responseFields[G]] = H), !B && E && d.dataFilter && (H = d.dataFilter(H, d.dataType)), B = G, G = F.shift()) if ("*" === G) G = B;
                        else if ("*" !== B && B !== G) {
                            if (D = x[B + " " + G] || x["* " + G], !D) for (N in x) if (J = N.split(" "), J[1] === G && (D = x[B + " " + J[0]] || x["* " + J[0]])) { ! 0 === D ? D = x[N] : !0 !== x[N] && (G = J[0], F.unshift(J[1]));
                                break
                            }
                            if (!0 !== D) if (D && d["throws"]) H = D(H);
                            else try {
                                H = D(H)
                            } catch(O) {
                                N = {
                                    state: "parsererror",
                                    error: D ? O: "No conversion from " + B + " to " + G
                                };
                                break a
                            }
                        }
                        N = {
                            state: "success",
                            data: H
                        }
                    }
                    x = N;
                    e ? (p.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (c.lastModified[g] = w), w = u.getResponseHeader("etag"), w && (c.etag[g] = w)), 204 === a || "HEAD" === p.type ? A = "nocontent": 304 === a ? A = "notmodified": (A = x.state, f = x.data, m = x.error, e = !m)) : (m = A, (a || !A) && (A = "error", 0 > a && (a = 0)));
                    u.status = a;
                    u.statusText = (b || A) + "";
                    e ? v.resolveWith(s, [f, A, u]) : v.rejectWith(s, [u, A, m]);
                    u.statusCode(L);
                    L = l;
                    n && t.trigger(e ? "ajaxSuccess": "ajaxError", [u, p, e ? f: m]);
                    U.fireWith(s, [u, A]);
                    n && (t.trigger("ajaxComplete", [u, p]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = l);
            b = b || {};
            var e, f, g, h, k, n, r, m, p = c.ajaxSetup({},
            b),
            s = p.context || p,
            t = p.context && (s.nodeType || s.jquery) ? c(s) : c.event,
            v = c.Deferred(),
            U = c.Callbacks("once memory"),
            L = p.statusCode || {},
            w = {},
            A = {},
            z = 0,
            F = "canceled",
            u = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === z) {
                        if (!m) for (m = {}; b = Ec.exec(h);) m[b[1].toLowerCase()] = b[2];
                        b = m[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === z ? h: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return z || (a = A[c] = A[c] || a, w[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return z || (p.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > z) for (b in a) L[b] = [L[b], a[b]];
                    else u.always(a[u.status]);
                    return this
                },
                abort: function(a) {
                    a = a || F;
                    return r && r.abort(a),
                    d(0, a),
                    this
                }
            };
            if (v.promise(u).complete = U.add, u.success = u.done, u.error = u.fail, p.url = ((a || p.url || ea) + "").replace(Dc, "").replace(Gc, X[1] + "//"), p.type = b.method || b.type || p.method || p.type, p.dataTypes = c.trim(p.dataType || "*").toLowerCase().match(S) || [""], null == p.crossDomain && (e = Jb.exec(p.url.toLowerCase()), p.crossDomain = !(!e || e[1] === X[1] && e[2] === X[2] && (e[3] || ("http:" === e[1] ? "80": "443")) === (X[3] || ("http:" === X[1] ? "80": "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = c.param(p.data, p.traditional)), jb(Lb, p, b, u), 2 === z) return u; (n = p.global) && 0 === c.active++&&c.event.trigger("ajaxStart");
            p.type = p.type.toUpperCase();
            p.hasContent = !Fc.test(p.type);
            g = p.url;
            p.hasContent || (p.data && (g = p.url += (Va.test(g) ? "&": "?") + p.data, delete p.data), !1 === p.cache && (p.url = Ib.test(g) ? g.replace(Ib, "$1_=" + Ua++) : g + (Va.test(g) ? "&": "?") + "_=" + Ua++));
            p.ifModified && (c.lastModified[g] && u.setRequestHeader("If-Modified-Since", c.lastModified[g]), c.etag[g] && u.setRequestHeader("If-None-Match", c.etag[g])); (p.data && p.hasContent && !1 !== p.contentType || b.contentType) && u.setRequestHeader("Content-Type", p.contentType);
            u.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Mb + "; q=0.01": "") : p.accepts["*"]);
            for (f in p.headers) u.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(s, u, p) || 2 === z)) return u.abort();
            F = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) u[f](p[f]);
            if (r = jb(Ia, p, b, u)) {
                u.readyState = 1;
                n && t.trigger("ajaxSend", [u, p]);
                p.async && 0 < p.timeout && (k = setTimeout(function() {
                    u.abort("timeout")
                },
                p.timeout));
                try {
                    z = 1,
                    r.send(w, d)
                } catch(C) {
                    if (! (2 > z)) throw C;
                    d( - 1, C)
                }
            } else d( - 1, "No Transport");
            return u
        },
        getJSON: function(a, b, d) {
            return c.get(a, b, d, "json")
        },
        getScript: function(a, b) {
            return c.get(a, l, b, "script")
        }
    });
    c.each(["get", "post"],
    function(a, b) {
        c[b] = function(a, e, f, g) {
            return c.isFunction(e) && (g = g || f, f = e, e = l),
            c.ajax({
                url: a,
                type: b,
                dataType: g,
                data: e,
                success: f
            })
        }
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return c.globalEval(a),
                a
            }
        }
    });
    c.ajaxPrefilter("script",
    function(a) {
        a.cache === l && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    c.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, d = t.head || c("head")[0] || t.documentElement;
            return {
                send: function(c, f) {
                    b = t.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    };
                    d.insertBefore(b, d.firstChild)
                },
                abort: function() {
                    b && b.onload(l, !0)
                }
            }
        }
    });
    var Nb = [],
    Wa = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Nb.pop() || c.expando + "_" + Ua++;
            return this[a] = !0,
            a

        }
    });
    c.ajaxPrefilter("json jsonp",
    function(a, b, d) {
        var e, f, g, h = !1 !== a.jsonp && (Wa.test(a.url) ? "url": "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Wa.test(a.data) && "data");
        return h || "jsonp" === a.dataTypes[0] ? (e = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(Wa, "$1" + e) : !1 !== a.jsonp && (a.url += (Va.test(a.url) ? "&": "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
            return g || c.error(e + " was not called"),
            g[0]
        },
        a.dataTypes[0] = "json", f = m[e], m[e] = function() {
            g = arguments
        },
        d.always(function() {
            m[e] = f;
            a[e] && (a.jsonpCallback = b.jsonpCallback, Nb.push(e));
            g && c.isFunction(f) && f(g[0]);
            g = f = l
        }), "script") : l
    });
    var oa, va, Hc = 0,
    Xa = m.ActiveXObject &&
    function() {
        for (var a in oa) oa[a](l, !0)
    };
    c.ajaxSettings.xhr = m.ActiveXObject ?
    function() {
        var a;
        if (! (a = !this.isLocal && kb())) a: {
            try {
                a = new m.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(b) {}
            a = void 0
        }
        return a
    }: kb;
    va = c.ajaxSettings.xhr();
    c.support.cors = !!va && "withCredentials" in va; (va = c.support.ajax = !!va) && c.ajaxTransport(function(a) {
        if (!a.crossDomain || c.support.cors) {
            var b;
            return {
                send: function(d, e) {
                    var f, g, h = a.xhr();
                    if (a.username ? h.open(a.type, a.url, a.async, a.username, a.password) : h.open(a.type, a.url, a.async), a.xhrFields) for (g in a.xhrFields) h[g] = a.xhrFields[g];
                    a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
                    a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (g in d) h.setRequestHeader(g, d[g])
                    } catch(k) {}
                    h.send(a.hasContent && a.data || null);
                    b = function(d, g) {
                        var k, p, r, m;
                        try {
                            if (b && (g || 4 === h.readyState)) if (b = l, f && (h.onreadystatechange = c.noop, Xa && delete oa[f]), g) 4 !== h.readyState && h.abort();
                            else {
                                m = {};
                                k = h.status;
                                p = h.getAllResponseHeaders();
                                "string" == typeof h.responseText && (m.text = h.responseText);
                                try {
                                    r = h.statusText
                                } catch(s) {
                                    r = ""
                                }
                                k || !a.isLocal || a.crossDomain ? 1223 === k && (k = 204) : k = m.text ? 200 : 404
                            }
                        } catch(t) {
                            g || e( - 1, t)
                        }
                        m && e(k, r, m, p)
                    };
                    a.async ? 4 === h.readyState ? setTimeout(b) : (f = ++Hc, Xa && (oa || (oa = {},
                    c(m).unload(Xa)), oa[f] = b), h.onreadystatechange = b) : b()
                },
                abort: function() {
                    b && b(l, !0)
                }
            }
        }
    });
    var $, Ea, Ic = /^(?:toggle|show|hide)$/,
    Ob = RegExp("^(?:([+-])=|)(" + Ba + ")([a-z%]*)$", "i"),
    Jc = /queueHooks$/,
    xa = [function(a, b, d) {
        var e, f, g, h, k, n = this,
        r = {},
        l = a.style,
        p = a.nodeType && pa(a),
        m = c._data(a, "fxshow");
        d.queue || (h = c._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function() {
            h.unqueued || k()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--;
                c.queue(a, "fx").length || h.empty.fire()
            })
        }));
        1 === a.nodeType && ("height" in b || "width" in b) && (d.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === c.css(a, "display") && "none" === c.css(a, "float") && (c.support.inlineBlockNeedsLayout && "inline" !== cb(a.nodeName) ? l.zoom = 1 : l.display = "inline-block"));
        d.overflow && (l.overflow = "hidden", c.support.shrinkWrapBlocks || n.always(function() {
            l.overflow = d.overflow[0];
            l.overflowX = d.overflow[1];
            l.overflowY = d.overflow[2]
        }));
        for (e in b) if (f = b[e], Ic.exec(f)) if (! (delete b[e], g = g || "toggle" === f, f === (p ? "hide": "show"))) r[e] = m && m[e] || c.style(a, e);
        if (!c.isEmptyObject(r)) for (e in m ? "hidden" in m && (p = m.hidden) : m = c._data(a, "fxshow", {}), g && (m.hidden = !p), p ? c(a).show() : n.done(function() {
            c(a).hide()
        }), n.done(function() {
            var b;
            c._removeData(a, "fxshow");
            for (b in r) c.style(a, b, r[b])
        }), r) b = mb(p ? m[e] : 0, e, n),
        e in m || (m[e] = b.start, p && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
    }],
    ra = {
        "*": [function(a, b) {
            var d = this.createTween(a, b),
            e = d.cur(),
            f = Ob.exec(b),
            g = f && f[3] || (c.cssNumber[a] ? "": "px"),
            h = (c.cssNumber[a] || "px" !== g && +e) && Ob.exec(c.css(d.elem, a)),
            k = 1,
            n = 20;
            if (h && h[3] !== g) {
                g = g || h[3];
                f = f || [];
                h = +e || 1;
                do k = k || ".5",
                h /= k,
                c.style(d.elem, a, h + g);
                while (k !== (k = d.cur() / e) && 1 !== k && --n)
            }
            return f && (h = d.start = +h || +e || 0, d.unit = g, d.end = f[1] ? h + (f[1] + 1) * f[2] : +f[2]),
            d
        }]
    };
    c.Animation = c.extend(nb, {
        tweener: function(a, b) {
            c.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var d, e = 0,
            f = a.length; f > e; e++) d = a[e],
            ra[d] = ra[d] || [],
            ra[d].unshift(b)
        },
        prefilter: function(a, b) {
            b ? xa.unshift(a) : xa.push(a)
        }
    });
    c.Tween = E;
    E.prototype = {
        constructor: E,
        init: function(a, b, d, e, f, g) {
            this.elem = a;
            this.prop = d;
            this.easing = f || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (c.cssNumber[d] ? "": "px")
        },
        cur: function() {
            var a = E.propHooks[this.prop];
            return a && a.get ? a.get(this) : E.propHooks._default.get(this)
        },
        run: function(a) {
            var b, d = E.propHooks[this.prop];
            return this.pos = b = this.options.duration ? c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            d && d.set ? d.set(this) : E.propHooks._default.set(this),
            this
        }
    };
    E.prototype.init.prototype = E.prototype;
    E.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = c.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
            },
            set: function(a) {
                c.fx.step[a.prop] ? c.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[c.cssProps[a.prop]] || c.cssHooks[a.prop]) ? c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    c.each(["toggle", "show", "hide"],
    function(a, b) {
        var d = c.fn[b];
        c.fn[b] = function(a, c, g) {
            return null == a || "boolean" == typeof a ? d.apply(this, arguments) : this.animate(ya(b, !0), a, c, g)
        }
    });
    c.fn.extend({
        fadeTo: function(a, b, c, e) {
            return this.filter(pa).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, e)
        },
        animate: function(a, b, d, e) {
            var f = c.isEmptyObject(a),
            g = c.speed(b, d, e);
            b = function() {
                var b = nb(this, c.extend({},
                a), g); (f || c._data(this, "finish")) && b.stop(!0)
            };
            return b.finish = b,
            f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(d)
            };
            return "string" != typeof a && (d = b, b = a, a = l),
            b && !1 !== a && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                g = null != a && a + "queueHooks",
                h = c.timers,
                k = c._data(this);
                if (g) k[g] && k[g].stop && e(k[g]);
                else for (g in k) k[g] && k[g].stop && Jc.test(g) && e(k[g]);
                for (g = h.length; g--;) h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(d), b = !1, h.splice(g, 1)); (b || !d) && c.dequeue(this, a)
            })
        },
        finish: function(a) {
            return ! 1 !== a && (a = a || "fx"),
            this.each(function() {
                var b, d = c._data(this),
                e = d[a + "queue"];
                b = d[a + "queueHooks"];
                var f = c.timers,
                g = e ? e.length: 0;
                d.finish = !0;
                c.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete d.finish
            })
        }
    });
    c.each({
        slideDown: ya("show"),
        slideUp: ya("hide"),
        slideToggle: ya("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        c.fn[a] = function(a, c, f) {
            return this.animate(b, a, c, f)
        }
    });
    c.speed = function(a, b, d) {
        var e = a && "object" == typeof a ? c.extend({},
        a) : {
            complete: d || !d && b || c.isFunction(a) && a,
            duration: a,
            easing: d && b || b && !c.isFunction(b) && b
        };
        return e.duration = c.fx.off ? 0 : "number" == typeof e.duration ? e.duration: e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default,
        (null == e.queue || !0 === e.queue) && (e.queue = "fx"),
        e.old = e.complete,
        e.complete = function() {
            c.isFunction(e.old) && e.old.call(this);
            e.queue && c.dequeue(this, e.queue)
        },
        e
    };
    c.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    c.timers = [];
    c.fx = E.prototype.init;
    c.fx.tick = function() {
        var a, b = c.timers,
        d = 0;
        for ($ = c.now(); b.length > d; d++) a = b[d],
        a() || b[d] !== a || b.splice(d--, 1);
        b.length || c.fx.stop();
        $ = l
    };
    c.fx.timer = function(a) {
        a() && c.timers.push(a) && c.fx.start()
    };
    c.fx.interval = 13;
    c.fx.start = function() {
        Ea || (Ea = setInterval(c.fx.tick, c.fx.interval))
    };
    c.fx.stop = function() {
        clearInterval(Ea);
        Ea = null
    };
    c.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    c.fx.step = {};
    c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
        return c.grep(c.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    c.fn.offset = function(a) {
        if (arguments.length) return a === l ? this: this.each(function(b) {
            c.offset.setOffset(this, a, b)
        });
        var b, d, e = {
            top: 0,
            left: 0
        },
        f = this[0],
        g = f && f.ownerDocument;
        if (g) return b = g.documentElement,
        c.contains(b, f) ? (typeof f.getBoundingClientRect !== J && (e = f.getBoundingClientRect()), d = ob(g), {
            top: e.top + (d.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: e.left + (d.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }) : e
    };
    c.offset = {
        setOffset: function(a, b, d) {
            var e = c.css(a, "position");
            "static" === e && (a.style.position = "relative");
            var f = c(a),
            g = f.offset(),
            h = c.css(a, "top"),
            k = c.css(a, "left"),
            n = {},
            r = {},
            l,
            p; ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [h, k]) ? (r = f.position(), l = r.top, p = r.left) : (l = parseFloat(h) || 0, p = parseFloat(k) || 0);
            c.isFunction(b) && (b = b.call(a, d, g));
            null != b.top && (n.top = b.top - g.top + l);
            null != b.left && (n.left = b.left - g.left + p);
            "using" in b ? b.using.call(a, n) : f.css(n)
        }
    };
    c.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, d = {
                    top: 0,
                    left: 0
                },
                e = this[0];
                return "fixed" === c.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), c.nodeName(a[0], "html") || (d = a.offset()), d.top += c.css(a[0], "borderTopWidth", !0), d.left += c.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - c.css(e, "marginTop", !0),
                    left: b.left - d.left - c.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || qb; a && !c.nodeName(a, "html") && "static" === c.css(a, "position");) a = a.offsetParent;
                return a || qb
            })
        }
    });
    c.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, b) {
        var d = /Y/.test(b);
        c.fn[a] = function(e) {
            return c.access(this,
            function(a, e, h) {
                var k = ob(a);
                return h === l ? k ? b in k ? k[b] : k.document.documentElement[e] : a[e] : (k ? k.scrollTo(d ? c(k).scrollLeft() : h, d ? h: c(k).scrollTop()) : a[e] = h, l)
            },
            a, e, arguments.length, null)
        }
    });
    c.each({
        Height: "height",
        Width: "width"
    },
    function(a, b) {
        c.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        },
        function(d, e) {
            c.fn[e] = function(e, g) {
                var h = arguments.length && (d || "boolean" != typeof e),
                k = d || (!0 === e || !0 === g ? "margin": "border");
                return c.access(this,
                function(b, d, e) {
                    var f;
                    return c.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : e === l ? c.css(b, d, k) : c.style(b, d, e, k)
                },
                b, h ? e: l, h, null)
            }
        })
    });
    c.fn.size = function() {
        return this.length
    };
    c.fn.andSelf = c.fn.addBack;
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = c: (m.jQuery = m.$ = c, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return c
    }))
})(window); (function(m, l) {
    var w = window.KingSoft = window.K || {},
    Y = document.createElement("div").style,
    V = {};
    window.K = w;
    w.supports = w.supports || V;
    w.version = "1.0.0";
    var T = w.camelCase = function(r) {
        return r.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/ig,
        function(r, l) {
            return (l + "").toUpperCase()
        })
    },
    B = w.cssVendor = function() {
        var r = ["-o-", "-webkit-", "-moz-", "-ms-", ""],
        l = 0;
        do
        if (T(r[l] + "transform") in Y) return r[l];
        while (++l < r.length);
        return ""
    } ();
    w.transitionend = {
        "-o-": "otransitionend",
        "-webkit-": "webkitTransitionEnd",
        "-moz-": "transitionend",
        "-ms-": "MSTransitionEnd transitionend",
        "": "transitionend"
    } [B];
    var R = w.isCSS = function(l) {
        var m = T(l);
        l = T(B + l);
        return m in Y && m || l in Y && l || ""
    };
    w.object_keys = function(l) {
        if (Object.keys) l = Object.keys(l);
        else {
            var m = [],
            v;
            for (v in l) l.hasOwnProperty(v) && m.push(v);
            l = m
        }
        return l
    };
    var ia = w.isArrayLike = function(l) {
        var m = w.type(l);
        return !! l && "function" != m && "string" != m && (0 === l.length || l.length && l.length - 1 in l)
    },
    W = w.type = function() {
        for (var l = "Boolean Number String Function Array Date RegExp Object Error Undefined Null".split(" "), m = 0, v = {}; m < l.length;) w["is" + l[m]] = function() {
            var v = l[m].toLowerCase();
            return function(l) {
                return W(l) === v
            }
        } (),
        v["[object " + l[m] + "]"] = l[m++].toLowerCase();
        return function(l) {
            return null == l ? String(l) : "object" == typeof l ? v[v.toString.call(l)] || "object": typeof l
        }
    } ();
    w.reset = function(l) {
        if (ia(l)) l = l[0];
        else a: {
            for (var m in l) {
                l = l[m];
                break a
            }
            l = void 0
        }
        return l
    };
    w.placeholder = function() {
        var l = "placeholder" in document.createElement("input"),
        s = function() {
            var l = m(this),
            r = l.attr("placeholder");
            l.focus(function() {
                l.val() == r && l.removeClass("hasholder").val("")
            }).blur(function() {
                "" == l.val() && l.addClass("hasholder").val(r)
            }).blur()
        };
        w.supports.placeholder = l;
        return function(v) { ! l && m(v).each(s)
        }
    } ();
    w.transform = R("transform");
    w.transition = R("transition");
    w.animation = R("animation");
    w.isIE6 = "undefined" != typeof __IE6;
    var fa = {
        sopt: {
            baidu: ["\u767e\u5ea6", "http://www.baidu.com/s", "word", "tn:56060048_4_pg;ch:11"],
            google: ["\u8c37\u6b4c", "http://www.google.com.hk/search", "q", "ie:utf-8;hl:zh-CN"],
            sougou: ["\u641c\u72d7", "http://www.sogou.com/sogou", "query", "pid:sogou-site-664dd858db942cad;ie:utf8"],
            taobao: ["\u6dd8\u5b9d", "http://search8.taobao.com/browse/search_auction.htm", "q", "pid:mm_26866744_3453767_13506237;search_type:auction;commend:all;at_topsearch:1;user_action:initiative;unid:21876;ie:gbk"]
        },
        init: function() {
            m.each("transform transition animation perspective border-image border-radius box-shadow background-size text-shadow min-height".split(" "),
            function(l, m) {
                V[T(m)] = !!R(m)
            });
            m("body").addClass(m.map(V,
            function(l, m) {
                if (l) return T("can-" + m)
            }).join(" "));
            var l = m(window),
            s = m("body");
            l.resize(function() {
                700 > l.height() ? s.addClass("minScreen") : s.removeClass("minScreen")
            }).resize();
            this.makeBG();
            this.makeSearch();
            this.makeDH();
            this.makeTip()
        },
        getQueryString: function(l) {
            return (l = (location.search || "").match(RegExp("[\\?&]" + l + "=?([^\\?&=]*)", "i"))) ? l[1] || "": null
        },
        makeBG: function() {
            if ("object" == typeof Themes) {
                var l = Themes,
                s;
                try {
                    s = l[window.external.GetCurrentSkin()] || l.grey
                } catch(v) {
                    s = l["default"]
                }
                m("#wrap > .bg").html('<img src="' + s + '" />').fadeIn(400)
            }
        },
        makeTip: function() {
            try {
                if ("undefined" == typeof window.external.LiebaoGetVersion) throw 0;
            } catch(l) {
                m("#wrap").addClass("noLB").prepend('<div id="lbtip"><a href="#" target="_blank" title="这里你想写什么？"><img src="images/110036_973.png" />这里你想写什么？<span>这里你想写什么？</span>这里你想写什么？<img src="images/143937_874.png" /></a></div>')
            }
        },
        makeSearch: function() {
            var l = this,
            s = m("#search"),
            v = m("#s"),
            w = s.find(".engine"),
            z = w.find(".list"),
            F = w.find("a.name"),
            C;
            w.mouseenter(function() {
                z.stop(!0, !0).fadeIn(400);
                F.find("span").css(B + "transform", "rotate(-180deg)")
            }).mouseleave(function() {
                z.stop(!0, !0).fadeOut(400);
                F.find("span").css(B + "transform", "rotate(0deg)")
            });
            z.on("click", "a",
            function() {
                var s = m(this),
                v = s.attr("data-name");
                C = v;
                z.stop(!0, !0).fadeOut(400);
                F.find("span").css(B + "transform", "rotate(0deg)");
                z.find("a.active").removeClass("active");
                s.addClass("active");
                F.html(s.text() + '<span style="' + B + "transition:" + B + 'transform 400ms ease;"></span>');
                l.insertHidden(v);
                return ! 1
            }).find("a.active").click();
            s.find("form").submit(function() {
                "function" == typeof __tj && __tj(1091111, 1232, "", "2019", v.val(), C, "")
            })
        },
        insertHidden: function(l) {
            var s = m("#search form"),
            v = m("#s"),
            w = s.find("input.hidden");
            if (l = this.sopt[l]) s.attr("action", l[1]),
            v.attr("name", l[2]),
            w.remove(),
            s.append(m.map(l[3].split(/;\s*/),
            function(l) {
                l = l.split(":");
                return '<input type="hidden" class="hidden" name="' + l[0] + '" value="' + l[1] + '" />'
            })),
            v.focus()
        },
        makeMoreBank: function(l) {
            var s, v, B, z, F = 0;
            setTimeout(function() {
                m("#dh li.moreBank a").click(function() {
                    var C = "",
                    L = "";
                    s || (m.each(l,
                    function(l, r) {
                        C += '<a href="#" ' + (!l ? ' class="active"': "") + ">" + r.name + "</a>";
                        L += '<div class="list">';
                        m.each(r.data,
                        function(l, m) {
                            L += '<a target="_blank" href="' + m.url + '">' + m.name + "</a>"
                        });
                        L += "</div>"
                    }), s = m('<div id="moreBank"><div class="inner"><h2 class="clear">' + C + '<span></span></h2></div><div class="inner1"><div class="ctn">' + L + '</div></div><a href="#" class="back">\u8fd4\u56de</a></div>').appendTo("#dh"), s.find("a.back").click(function() {
                        s.finish().slideUp();
                        return ! 1
                    }), v = s.find("h2 a"), B = s.find("div.list"), z = s.find("h2 span").css(w.transition, "left 400ms"), v.click(function() {
                        var l = m(this).index();
                        v.eq(F).removeClass("active").end().eq(l).addClass("active");
                        B.eq(F).finish().hide().end().eq(l).fadeIn();
                        F = l;
                        z.css("left", 16.6 * l + 8 + "%");
                        return ! 1
                    }).filter(".active").click(), B.each(function(l) {
                        m(this).on("click", "a",
                        function() {
                            "function" == typeof __tj && __tj(1091111, 1130, "", "w-4-" + (l + 13) + "-" + (m(this).index() + 1), "", "")
                        })
                    }));
                    s.finish().slideDown();
                    return ! 1
                })
            },
            0)
        },
        makeDH: function() {
            var l = this,
            s = DH || [],
            v = 1E3 < m("#container").width(),
            U = v ? 290 : 230,
            z = v ? 180 : 143;
            m("body").hasClass("minScreen") && (U = 193, z = 120);
            this.items = m("#dh").append(m.map(Array(12),
            function(v, C) {
                return '<ul style="' + B + "transition:top 400ms ease,left 400ms ease;top:" + -Math.floor(C / 4) * z + "px;left:" + (1.5 - C % 4) * U + 'px;">' + m.map(s,
                function(m) {
                    m = m.data[C];
                    m.moreBank && l.makeMoreBank(m.moreBank);
                    return "<li" + (m.moreBank ? ' class="moreBank"': "") + '><a href="' + m.url + '" target="_blank" title="' + m.title + '"><img data-src="' + m.img + '" /></a>' + (m.ccUrl ? '<div class="info' + (m.type && !w.isIE6 ? " info" + m.type: "") + '"><p class="phone">' + m.phone + '</p><p class="cc"><a target="_blank" href="' + m.ccUrl + '">\u4fe1\u7528\u5361\uff1e</a></p></div>': "") + "</li>"
                }).join("") + "</ul>"
            }).join("")).on("mouseenter", "ul",
            function() { ! w.isIE6 && m(this).animate({
                    opacity: 0.5
                },
                {
                    duration: 400,
                    complete: function() {
                        m(this).animate({
                            opacity: 1
                        },
                        {
                            duration: 600
                        })
                    }
                })
            }).find("ul");
            this.btns = m("#footer").prepend('<div id="switch"><div class="box"><div class="arrow"></div>' + m.map(s,
            function(l) {
                return '<a href="#" title="' + l.name + '">' + l.name + "</a>"
            }).join("") + "</div></div>").find("#switch a").click(function() {
                l.switchDH(m(this).index() - 1);
                "function" == typeof __tj && __tj(1091111, 1130, "", "w-" + m(this).index(), "", "");
                return ! 1
            }).css(B + "transition", "400ms ease");
            this.arrow = m("#switch .arrow");
            m("#dh").fadeIn(100,
            function() {
                var s = parseInt(l.getQueryString("tab")) || 0;
                l.switchDH(s, !0);
                setTimeout(function() {
                    m("#dh").addClass("complete")
                },
                800)
            });
            m("#wrap").append('<a class="dhArrow al" href="javascript:;" title="\u4e0a\u4e00\u7ec4"></a><a class="dhArrow ar" href="javascript:;" title="\u4e0b\u4e00\u7ec4"></a>').find(".dhArrow").click(function() {
                l.switchDH(m(this).hasClass("al") ? l.index - 1 : l.index + 1);
                "function" == typeof __tj && __tj(1091111, 1130, "", m(this).hasClass("al") ? "w-6-1": "w-6-2", "", "");
                return ! 1
            });
            m(document).keyup(function(s) {
                m.nodeName(s.target, "input") || (37 == s.keyCode ? l.switchDH(l.index - 1) : 39 == s.keyCode && l.switchDH(l.index + 1))
            });
            m("#dh").on("click", "li>a",
            function() {
                "function" == typeof __tj && __tj(1091111, 1130, "", "w-" + (m(this).parent().index() + 1) + "-" + (m(this).parent().parent().index() + 1), "", "")
            })
        },
        switchDH: function(l, s) {
            l >= this.btns.length ? l = 0 : 0 > l && (l = this.btns.length - 1);
            this.index != l && (this.items.each(function(v) {
                v = 4 > v || 7 < v ? 30 * v: 30 * (8 - v + 3);
                var B = m(this),
                z = B.find("li"),
                F = z.filter(":visible"),
                C = z.eq(l),
                z = C.find("img");
                clearTimeout(this.timer);
                this.timer = setTimeout(function() {
                    F.fadeOut(400);
                    C.fadeIn(w.isIE6 ? 0 : 400);
                    if (s) B[w.transition ? "css": "animate"]({
                        top: 0,
                        left: 0
                    })
                },
                v);
                z.attr("src") || z.attr("src", z.attr("data-src"))
            }), this.btns.eq(this.index).removeClass("active").end().eq(l).addClass("active"), this.arrow.stop().animate({
                left: this.btns.eq(l).position().left + 42
            },
            {
                duration: 400
            }), this.index = l, m("#moreBank:visible").fadeOut(400))
        }
    };
    window.OnThemeChanged = function() {
        fa.makeBG()
    };
    m(function() {
        fa.init()
    })
})(jQuery);