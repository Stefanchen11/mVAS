import {
    x as p,
    l,
    g as f,
    k as h,
    H as _,
    b as Q,
    J as X,
    G as ee,
    D as m,
    E as te
} from "./preact.module.BPMVfR11.js";
import {
    h as y,
    A as L,
    p as T,
    T as A,
    _ as b,
    F as I,
    g as M,
    y as g,
    P as V,
    x as W,
    q as F
} from "./hooks.module.h0P27BSC.js";

function H(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function N(e, t) {
    for (var n in e)
        if (n !== "__source" && !(n in t)) return !0;
    for (var r in t)
        if (r !== "__source" && e[r] !== t[r]) return !0;
    return !1
}

function B(e, t) {
    var n = t(),
        r = y({
            t: {
                __: n,
                u: t
            }
        }),
        o = r[0].t,
        a = r[1];
    return b(function() {
        o.__ = n, o.u = t, E(o) && a({
            t: o
        })
    }, [e, n, t]), g(function() {
        return E(o) && a({
            t: o
        }), e(function() {
            E(o) && a({
                t: o
            })
        })
    }, [e]), n
}

function E(e) {
    var t, n, r = e.u,
        o = e.__;
    try {
        var a = r();
        return !((t = o) === (n = a) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n)
    } catch {
        return !0
    }
}

function z(e) {
    e()
}

function j(e) {
    return e
}

function q() {
    return [!1, z]
}
var G = b;

function S(e, t) {
    this.props = e, this.context = t
}

function ne(e, t) {
    function n(o) {
        var a = this.props.ref,
            u = a == o.ref;
        return !u && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, o) || !u : N(this.props, o)
    }

    function r(o) {
        return this.shouldComponentUpdate = n, f(e, o)
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
}(S.prototype = new p).isPureReactComponent = !0, S.prototype.shouldComponentUpdate = function(e, t) {
    return N(this.props, e) || N(this.state, t)
};
var x = l.__b;
l.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), x && x(e)
};
var re = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function oe(e) {
    function t(n) {
        var r = H({}, n);
        return delete r.ref, e(r, n.ref || null)
    }
    return t.$$typeof = re, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var R = function(e, t) {
        return e == null ? null : _(_(e).map(t))
    },
    ue = {
        map: R,
        forEach: R,
        count: function(e) {
            return e ? _(e).length : 0
        },
        only: function(e) {
            var t = _(e);
            if (t.length !== 1) throw "Children.only";
            return t[0]
        },
        toArray: _
    },
    ae = l.__e;
l.__e = function(e, t, n, r) {
    if (e.then) {
        for (var o, a = t; a = a.__;)
            if ((o = a.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t)
    }
    ae(e, t, n, r)
};
var w = l.unmount;

function J(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
        typeof r.__c == "function" && r.__c()
    }), e.__c.__H = null), (e = H({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
        return J(r, t, n)
    })), e
}

function Z(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
        return Z(r, t, n)
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e
}

function v() {
    this.__u = 0, this.o = null, this.__b = null
}

function Y(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}

function ie(e) {
    var t, n, r;

    function o(a) {
        if (t || (t = e()).then(function(u) {
                n = u.default || u
            }, function(u) {
                r = u
            }), r) throw r;
        if (!n) throw t;
        return f(n, a)
    }
    return o.displayName = "Lazy", o.__f = !0, o
}

function d() {
    this.i = null, this.l = null
}
l.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), w && w(e)
}, (v.prototype = new p).__c = function(e, t) {
    var n = t.__c,
        r = this;
    r.o == null && (r.o = []), r.o.push(n);
    var o = Y(r.__v),
        a = !1,
        u = function() {
            a || (a = !0, n.__R = null, o ? o(s) : s())
        };
    n.__R = u;
    var s = function() {
        if (!--r.__u) {
            if (r.state.__a) {
                var i = r.state.__a;
                r.__v.__k[0] = Z(i, i.__c.__P, i.__c.__O)
            }
            var c;
            for (r.setState({
                    __a: r.__b = null
                }); c = r.o.pop();) c.forceUpdate()
        }
    };
    r.__u++ || 32 & t.__u || r.setState({
        __a: r.__b = r.__v.__k[0]
    }), e.then(u, u)
}, v.prototype.componentWillUnmount = function() {
    this.o = []
}, v.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = J(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var o = t.__a && f(h, null, e.fallback);
    return o && (o.__u &= -33), [f(h, null, t.__a ? null : e.children), o]
};
var P = function(e, t, n) {
    if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
        for (n = e.i; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.i = n = n[2]
        }
};

function le(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function se(e) {
    var t = this,
        n = e.h;
    t.componentWillUnmount = function() {
        m(null, t.v), t.v = null, t.h = null
    }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        contains: function() {
            return !0
        },
        appendChild: function(r) {
            this.childNodes.push(r), t.h.appendChild(r)
        },
        insertBefore: function(r, o) {
            this.childNodes.push(r), t.h.insertBefore(r, o)
        },
        removeChild: function(r) {
            this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r)
        }
    }), m(f(le, {
        context: t.context
    }, e.__v), t.v)
}

function ce(e, t) {
    var n = f(se, {
        __v: e,
        h: t
    });
    return n.containerInfo = t, n
}(d.prototype = new p).__a = function(e) {
    var t = this,
        n = Y(t.__v),
        r = t.l.get(e);
    return r[0]++,
        function(o) {
            var a = function() {
                t.props.revealOrder ? (r.push(o), P(t, e, r)) : o()
            };
            n ? n(a) : a()
        }
}, d.prototype.render = function(e) {
    this.i = null, this.l = new Map;
    var t = _(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--;) this.l.set(t[n], this.i = [1, 0, this.i]);
    return e.children
}, d.prototype.componentDidUpdate = d.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, n) {
        P(e, n, t)
    })
};
var K = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
    _e = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    fe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    pe = /[A-Z0-9]/g,
    de = typeof document < "u",
    he = function(e) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
    };

function ve(e, t, n) {
    return t.__k == null && (t.textContent = ""), m(e, t), typeof n == "function" && n(), e ? e.__c : null
}

function me(e, t, n) {
    return te(e, t), typeof n == "function" && n(), e ? e.__c : null
}
p.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(p.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var $ = l.event;

function ye() {}

function be() {
    return this.cancelBubble
}

function ge() {
    return this.defaultPrevented
}
l.event = function(e) {
    return $ && (e = $(e)), e.persist = ye, e.isPropagationStopped = be, e.isDefaultPrevented = ge, e.nativeEvent = e
};
var k, Ce = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    O = l.vnode;
l.vnode = function(e) {
    typeof e.type == "string" && function(t) {
        var n = t.props,
            r = t.type,
            o = {},
            a = r.indexOf("-") === -1;
        for (var u in n) {
            var s = n[u];
            if (!(u === "value" && "defaultValue" in n && s == null || de && u === "children" && r === "noscript" || u === "class" || u === "className")) {
                var i = u.toLowerCase();
                u === "defaultValue" && "value" in n && n.value == null ? u = "value" : u === "download" && s === !0 ? s = "" : i === "translate" && s === "no" ? s = !1 : i[0] === "o" && i[1] === "n" ? i === "ondoubleclick" ? u = "ondblclick" : i !== "onchange" || r !== "input" && r !== "textarea" || he(n.type) ? i === "onfocus" ? u = "onfocusin" : i === "onblur" ? u = "onfocusout" : fe.test(u) && (u = i) : i = u = "oninput" : a && _e.test(u) ? u = u.replace(pe, "-$&").toLowerCase() : s === null && (s = void 0), i === "oninput" && o[u = i] && (u = "oninputCapture"), o[u] = s
            }
        }
        r == "select" && o.multiple && Array.isArray(o.value) && (o.value = _(n.children).forEach(function(c) {
            c.props.selected = o.value.indexOf(c.props.value) != -1
        })), r == "select" && o.defaultValue != null && (o.value = _(n.children).forEach(function(c) {
            c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value
        })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Ce)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o
    }(e), e.$$typeof = K, O && O(e)
};
var U = l.__r;
l.__r = function(e) {
    U && U(e), k = e.__c
};
var D = l.diffed;
l.diffed = function(e) {
    D && D(e);
    var t = e.props,
        n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), k = null
};
var Ee = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return k.__n[e.__c].props.value
            },
            useCallback: F,
            useContext: W,
            useDebugValue: V,
            useDeferredValue: j,
            useEffect: g,
            useId: M,
            useImperativeHandle: I,
            useInsertionEffect: G,
            useLayoutEffect: b,
            useMemo: A,
            useReducer: T,
            useRef: L,
            useState: y,
            useSyncExternalStore: B,
            useTransition: q
        }
    }
};

function Ne(e) {
    return f.bind(null, e)
}

function C(e) {
    return !!e && e.$$typeof === K
}

function Se(e) {
    return C(e) && e.type === h
}

function ke(e) {
    return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(")
}

function xe(e) {
    return C(e) ? ee.apply(null, arguments) : e
}

function Re(e) {
    return !!e.__k && (m(null, e), !0)
}

function we(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var Pe = function(e, t) {
        return e(t)
    },
    $e = function(e, t) {
        return e(t)
    },
    Oe = h,
    Ue = C,
    Ae = {
        useState: y,
        useId: M,
        useReducer: T,
        useEffect: g,
        useLayoutEffect: b,
        useInsertionEffect: G,
        useTransition: q,
        useDeferredValue: j,
        useSyncExternalStore: B,
        startTransition: z,
        useRef: L,
        useImperativeHandle: I,
        useMemo: A,
        useCallback: F,
        useContext: W,
        useDebugValue: V,
        version: "18.3.1",
        Children: ue,
        render: ve,
        hydrate: me,
        unmountComponentAtNode: Re,
        createPortal: ce,
        createElement: f,
        createContext: X,
        createFactory: Ne,
        cloneElement: xe,
        createRef: Q,
        Fragment: h,
        isValidElement: C,
        isElement: Ue,
        isFragment: Se,
        isMemo: ke,
        findDOMNode: we,
        Component: p,
        PureComponent: S,
        memo: ne,
        forwardRef: oe,
        flushSync: $e,
        unstable_batchedUpdates: Pe,
        StrictMode: Oe,
        Suspense: v,
        SuspenseList: d,
        lazy: ie,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ee
    };
const Ie = e => {
        let t = !1;
        return (...n) => {
            if (!t) return t = !0, e(...n)
        }
    },
    Me = e => {
        let t = 0;
        return (...n) => {
            const r = Date.now();
            if (!(r - t < 5e3)) return t = r, e(...n)
        }
    };

function De(e, t) {
    const r = new URLSearchParams(window.location.search).get("country") ? .toLowerCase(),
        o = (navigator.language || navigator.languages && navigator.languages[0]).toLowerCase().split("-")[0];
    return r && r in e ? e[r] : o && o in e ? e[o] : e[t]
}

function Ve(e, t) {
    const [n, r] = y(e[t]);
    return g(() => {
        const o = De(e, t);
        r(o)
    }, [t, e]), n
}
export {
    oe as D, G as I, ue as O, Ae as R, xe as _, De as a, Me as d, Ie as o, C as p, Ve as u
};