import {
    P as n,
    p as j,
    i as E
} from "./index.BS4Jzb_m.js";
import {
    R as C
} from "./utils.BYBI3Nyw.js";

function N(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function f(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? N(Object(r), !0).forEach((function(e) {
            b(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function h(t) {
    return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function b(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function L(t, e) {
    if (null == t) return {};
    var r, n, o = {},
        a = Object.keys(t);
    for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && (o[r] = t[r]);
    return o
}

function U(t, e) {
    if (null == t) return {};
    var r, n, o = L(t, e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function k(t) {
    return K(t) || $(t) || H(t) || M()
}

function K(t) {
    if (Array.isArray(t)) return S(t)
}

function $(t) {
    if (typeof Symbol < "u" && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
}

function H(t, e) {
    if (t) {
        if ("string" == typeof t) return S(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(t, e)
    }
}

function S(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function M() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function q(t) {
    var e, r = t.beat,
        n = t.fade,
        o = t.beatFade,
        a = t.bounce,
        i = t.shake,
        l = t.flash,
        s = t.spin,
        f = t.spinPulse,
        c = t.spinReverse,
        u = t.pulse,
        p = t.fixedWidth,
        y = t.inverse,
        m = t.border,
        d = t.listItem,
        O = t.flip,
        h = t.size,
        v = t.rotation,
        g = t.pull,
        j = (b(e = {
            "fa-beat": r,
            "fa-fade": n,
            "fa-beat-fade": o,
            "fa-bounce": a,
            "fa-shake": i,
            "fa-flash": l,
            "fa-spin": s,
            "fa-spin-reverse": c,
            "fa-spin-pulse": f,
            "fa-pulse": u,
            "fa-fw": p,
            "fa-inverse": y,
            "fa-border": m,
            "fa-li": d,
            "fa-flip": !0 === O,
            "fa-flip-horizontal": "horizontal" === O || "both" === O,
            "fa-flip-vertical": "vertical" === O || "both" === O
        }, "fa-".concat(h), typeof h < "u" && null !== h), b(e, "fa-rotate-".concat(v), typeof v < "u" && null !== v && 0 !== v), b(e, "fa-pull-".concat(g), typeof g < "u" && null !== g), b(e, "fa-swap-opacity", t.swapOpacity), e);
    return Object.keys(j).map((function(t) {
        return j[t] ? t : null
    })).filter((function(t) {
        return t
    }))
}

function B(t) {
    return (t -= 0) == t
}

function W(t) {
    return B(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, (function(t, e) {
        return e ? e.toUpperCase() : ""
    }))).substr(0, 1).toLowerCase() + t.substr(1)
}
var G = ["style"];

function J(t) {
    return t.charAt(0).toUpperCase() + t.slice(1)
}

function Q(t) {
    return t.split(";").map((function(t) {
        return t.trim()
    })).filter((function(t) {
        return t
    })).reduce((function(t, e) {
        var r = e.indexOf(":"),
            n = W(e.slice(0, r)),
            o = e.slice(r + 1).trim();
        return n.startsWith("webkit") ? t[J(n)] = o : t[n] = o, t
    }), {})
}

function R(t, e) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("string" == typeof e) return e;
    var n = (e.children || []).map((function(e) {
            return R(t, e)
        })),
        o = Object.keys(e.attributes || {}).reduce((function(t, r) {
            var n = e.attributes[r];
            switch (r) {
                case "class":
                    t.attrs.className = n, delete e.attributes.class;
                    break;
                case "style":
                    t.attrs.style = Q(n);
                    break;
                default:
                    0 === r.indexOf("aria-") || 0 === r.indexOf("data-") ? t.attrs[r.toLowerCase()] = n : t.attrs[W(r)] = n
            }
            return t
        }), {
            attrs: {}
        }),
        a = r.style,
        i = void 0 === a ? {} : a,
        l = U(r, G);
    return o.attrs.style = f(f({}, o.attrs.style), i), t.apply(void 0, [e.tag, f(f({}, o.attrs), l)].concat(k(n)))
}
var F = !1;
try {
    F = !0
} catch {}

function V() {
    var t;
    !F && console && "function" == typeof console.error && (t = console).error.apply(t, arguments)
}

function T(t) {
    return t && "object" === h(t) && t.prefix && t.iconName && t.icon ? t : j.icon ? j.icon(t) : null === t ? null : t && "object" === h(t) && t.prefix && t.iconName ? t : Array.isArray(t) && 2 === t.length ? {
        prefix: t[0],
        iconName: t[1]
    } : "string" == typeof t ? {
        prefix: "fas",
        iconName: t
    } : void 0
}

function I(t, e) {
    return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? b({}, t, e) : {}
}
var z = {
        border: !1,
        className: "",
        mask: null,
        maskId: null,
        fixedWidth: !1,
        inverse: !1,
        flip: !1,
        icon: null,
        listItem: !1,
        pull: null,
        pulse: !1,
        rotation: null,
        size: null,
        spin: !1,
        spinPulse: !1,
        spinReverse: !1,
        beat: !1,
        fade: !1,
        beatFade: !1,
        bounce: !1,
        shake: !1,
        symbol: !1,
        title: "",
        titleId: null,
        transform: null,
        swapOpacity: !1
    },
    D = C.forwardRef((function(t, e) {
        var r = f(f({}, z), t),
            n = r.icon,
            o = r.mask,
            a = r.symbol,
            i = r.className,
            l = r.title,
            s = r.titleId,
            c = r.maskId,
            u = T(n),
            p = I("classes", [].concat(k(q(r)), k((i || "").split(" ")))),
            b = I("transform", "string" == typeof r.transform ? j.transform(r.transform) : r.transform),
            y = I("mask", T(o)),
            m = E(u, f(f(f(f({}, p), b), y), {}, {
                symbol: a,
                title: l,
                titleId: s,
                maskId: c
            }));
        if (!m) return V("Could not find icon", u), null;
        var d = m.abstract,
            O = {
                ref: e
            };
        return Object.keys(r).forEach((function(t) {
            z.hasOwnProperty(t) || (O[t] = r[t])
        })), X(d[0], O)
    }));
D.displayName = "FontAwesomeIcon", D.propTypes = {
    beat: n.bool,
    border: n.bool,
    beatFade: n.bool,
    bounce: n.bool,
    className: n.string,
    fade: n.bool,
    flash: n.bool,
    mask: n.oneOfType([n.object, n.array, n.string]),
    maskId: n.string,
    fixedWidth: n.bool,
    inverse: n.bool,
    flip: n.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: n.oneOfType([n.object, n.array, n.string]),
    listItem: n.bool,
    pull: n.oneOf(["right", "left"]),
    pulse: n.bool,
    rotation: n.oneOf([0, 90, 180, 270]),
    shake: n.bool,
    size: n.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: n.bool,
    spinPulse: n.bool,
    spinReverse: n.bool,
    symbol: n.oneOfType([n.bool, n.string]),
    title: n.string,
    titleId: n.string,
    transform: n.oneOfType([n.string, n.object]),
    swapOpacity: n.bool
};
var X = R.bind(null, C.createElement);
export {
    D as F
};