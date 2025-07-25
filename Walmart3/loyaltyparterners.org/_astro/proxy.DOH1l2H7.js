import {
    I as ks,
    _ as fr,
    O as dr,
    p as pr,
    D as mr
} from "./utils.BYBI3Nyw.js";
import {
    u as q
} from "./jsxRuntime.module.DxVyncyu.js";
import {
    A as Y,
    g as Le,
    x as B,
    q as Be,
    T as it,
    y as qt,
    _ as gr,
    h as Tn
} from "./hooks.module.h0P27BSC.js";
import {
    J as gt,
    x as Is,
    k as Fe,
    g as yr
} from "./preact.module.BPMVfR11.js";
const ke = gt({});

function Ie(t) {
    const e = Y(null);
    return null === e.current && (e.current = t()), e.current
}
const Zt = gt(null),
    Oe = gt({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
class vr extends Is {
    getSnapshotBeforeUpdate(t) {
        const e = this.props.childRef.current;
        if (e && t.isPresent && !this.props.isPresent) {
            const t = e.offsetParent,
                n = t instanceof HTMLElement && t.offsetWidth || 0,
                i = this.props.sizeRef.current;
            i.height = e.offsetHeight || 0, i.width = e.offsetWidth || 0, i.top = e.offsetTop, i.left = e.offsetLeft, i.right = n - i.width - i.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function Tr({
    children: t,
    isPresent: e,
    anchorX: n
}) {
    const i = Le(),
        s = Y(null),
        o = Y({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: r
        } = B(Oe);
    return ks((() => {
        const {
            width: t,
            height: a,
            top: l,
            left: u,
            right: c
        } = o.current;
        if (e || !s.current || !t || !a) return;
        const h = "left" === n ? `left: ${u}` : `right: ${c}`;
        s.current.dataset.motionPopId = i;
        const d = document.createElement("style");
        return r && (d.nonce = r), document.head.appendChild(d), d.sheet && d.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${a}px !important;\n            ${h}px !important;\n            top: ${l}px !important;\n          }\n        `), () => {
            document.head.removeChild(d)
        }
    }), [e]), q(vr, {
        isPresent: e,
        childRef: s,
        sizeRef: o,
        children: fr(t, {
            ref: s
        })
    })
}
const xr = ({
    children: t,
    initial: e,
    isPresent: n,
    onExitComplete: i,
    custom: s,
    presenceAffectsLayout: o,
    mode: r,
    anchorX: a
}) => {
    const l = Ie(Pr),
        u = Le(),
        c = Be((t => {
            l.set(t, !0);
            for (const t of l.values())
                if (!t) return;
            i && i()
        }), [l, i]),
        h = it((() => ({
            id: u,
            initial: e,
            isPresent: n,
            custom: s,
            onExitComplete: c,
            register: t => (l.set(t, !1), () => l.delete(t))
        })), o ? [Math.random(), c] : [n, c]);
    return it((() => {
        l.forEach(((t, e) => l.set(e, !1)))
    }), [n]), qt((() => {
        !n && !l.size && i && i()
    }), [n]), "popLayout" === r && (t = q(Tr, {
        isPresent: n,
        anchorX: a,
        children: t
    })), q(Zt.Provider, {
        value: h,
        children: t
    })
};

function Pr() {
    return new Map
}

function Os(t = !0) {
    const e = B(Zt);
    if (null === e) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: i,
        register: s
    } = e, o = Le();
    qt((() => {
        if (t) return s(o)
    }), [t]);
    const r = Be((() => t && i && i(o)), [o, i, t]);
    return !n && i ? [!1, r] : [!0]
}
const It = t => t.key || "";

function xn(t) {
    const e = [];
    return dr.forEach(t, (t => {
        pr(t) && e.push(t)
    })), e
}
const je = typeof window < "u",
    js = je ? gr : qt,
    Ju = ({
        children: t,
        custom: e,
        initial: n = !0,
        onExitComplete: i,
        presenceAffectsLayout: s = !0,
        mode: o = "sync",
        propagate: r = !1,
        anchorX: a = "left"
    }) => {
        const [l, u] = Os(r), c = it((() => xn(t)), [t]), h = r && !l ? [] : c.map(It), d = Y(!0), p = Y(c), m = Ie((() => new Map)), [f, g] = Tn(c), [v, y] = Tn(c);
        js((() => {
            d.current = !1, p.current = c;
            for (let t = 0; t < v.length; t++) {
                const e = It(v[t]);
                h.includes(e) ? m.delete(e) : !0 !== m.get(e) && m.set(e, !1)
            }
        }), [v, h.length, h.join("-")]);
        const x = [];
        if (c !== f) {
            let t = [...c];
            for (let e = 0; e < v.length; e++) {
                const n = v[e],
                    i = It(n);
                h.includes(i) || (t.splice(e, 0, n), x.push(n))
            }
            return "wait" === o && x.length && (t = x), y(xn(t)), g(c), null
        }
        const {
            forceRender: P
        } = B(ke);
        return q(Fe, {
            children: v.map((t => {
                const f = It(t),
                    g = !(r && !l) && (c === v || h.includes(f));
                return q(xr, {
                    isPresent: g,
                    initial: !(d.current && !n) && void 0,
                    custom: e,
                    presenceAffectsLayout: s,
                    mode: o,
                    onExitComplete: g ? void 0 : () => {
                        if (!m.has(f)) return;
                        m.set(f, !0);
                        let t = !0;
                        m.forEach((e => {
                            e || (t = !1)
                        })), t && (P ? .(), y(p.current), r && u ? .(), i && i())
                    },
                    anchorX: a,
                    children: t
                }, f)
            }))
        })
    },
    j = t => t;
let Ns = j;

function Ne(t) {
    let e;
    return () => (void 0 === e && (e = t()), e)
}
const dt = (t, e, n) => {
        const i = e - t;
        return 0 === i ? 1 : (n - t) / i
    },
    G = t => 1e3 * t,
    z = t => t / 1e3,
    Sr = {
        useManualTiming: !1
    },
    Ot = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

function Ar(t, e) {
    let n = new Set,
        i = new Set,
        s = !1,
        o = !1;
    const r = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function l(e) {
        r.has(e) && (u.schedule(e), t()), e(a)
    }
    const u = {
        schedule: (t, e = !1, o = !1) => {
            const a = o && s ? n : i;
            return e && r.add(t), a.has(t) || a.add(t), t
        },
        cancel: t => {
            i.delete(t), r.delete(t)
        },
        process: t => {
            a = t, s ? o = !0 : (s = !0, [n, i] = [i, n], n.forEach(l), n.clear(), s = !1, o && (o = !1, u.process(t)))
        }
    };
    return u
}
const br = 40;

function Us(t, e) {
    let n = !1,
        i = !0;
    const s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        r = Ot.reduce(((t, e) => (t[e] = Ar(o), t)), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: h,
            postRender: d
        } = r,
        p = () => {
            const o = performance.now();
            n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(o - s.timestamp, 40), 1), s.timestamp = o, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), s.isProcessing = !1, n && e && (i = !1, t(p))
        };
    return {
        schedule: Ot.reduce(((e, o) => {
            const a = r[o];
            return e[o] = (e, o = !1, r = !1) => (n || (n = !0, i = !0, s.isProcessing || t(p)), a.schedule(e, o, r)), e
        }), {}),
        cancel: t => {
            for (let e = 0; e < Ot.length; e++) r[Ot[e]].cancel(t)
        },
        state: s,
        steps: r
    }
}
const {
    schedule: V,
    cancel: Z,
    state: E,
    steps: ie
} = Us(typeof requestAnimationFrame < "u" ? requestAnimationFrame : j, !0), _s = gt({
    strict: !1
}), Pn = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, pt = {};
for (const t in Pn) pt[t] = {
    isEnabled: e => Pn[t].some((t => !!e[t]))
};

function Vr(t) {
    for (const e in t) pt[e] = { ...pt[e],
        ...t[e]
    }
}
const wr = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function $t(t) {
    return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || wr.has(t)
}
let Ks = t => !$t(t);

function Cr(t) {
    t && (Ks = e => e.startsWith("on") ? !$t(e) : t(e))
}
try {
    Cr(require("@emotion/is-prop-valid").default)
} catch {}

function Dr(t, e, n) {
    const i = {};
    for (const s in t) "values" === s && "object" == typeof t.values || (Ks(s) || !0 === n && $t(s) || !e && !$t(s) || t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
    return i
}

function Mr(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map;
    return new Proxy(((...e) => t(...e)), {
        get: (n, i) => "create" === i ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
    })
}
const Jt = gt({});

function Qt(t) {
    return null !== t && "object" == typeof t && "function" == typeof t.start
}

function Vt(t) {
    return "string" == typeof t || Array.isArray(t)
}
const Ue = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    _e = ["initial", ...Ue];

function te(t) {
    return Qt(t.animate) || _e.some((e => Vt(t[e])))
}

function $s(t) {
    return !(!te(t) && !t.variants)
}

function Rr(t, e) {
    if (te(t)) {
        const {
            initial: e,
            animate: n
        } = t;
        return {
            initial: !1 === e || Vt(e) ? e : void 0,
            animate: Vt(n) ? n : void 0
        }
    }
    return !1 !== t.inherit ? e : {}
}

function Er(t) {
    const {
        initial: e,
        animate: n
    } = Rr(t, B(Jt));
    return it((() => ({
        initial: e,
        animate: n
    })), [Sn(e), Sn(n)])
}

function Sn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Lr = Symbol.for("motionComponentSymbol");

function at(t) {
    return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
}

function Br(t, e, n) {
    return Be((i => {
        i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && ("function" == typeof n ? n(i) : at(n) && (n.current = i))
    }), [e])
}
const Ke = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Fr = "framerAppearId",
    Ws = "data-" + Ke(Fr),
    {
        schedule: $e
    } = Us(queueMicrotask, !1),
    Gs = gt({});

function kr(t, e, n, i, s) {
    var o, r;
    const {
        visualElement: a
    } = B(Jt), l = B(_s), u = B(Zt), c = B(Oe).reducedMotion, h = Y(null);
    i = i || l.renderer, !h.current && i && (h.current = i(t, {
        visualState: e,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: !!u && !1 === u.initial,
        reducedMotionConfig: c
    }));
    const d = h.current,
        p = B(Gs);
    d && !d.projection && s && ("html" === d.type || "svg" === d.type) && Ir(h.current, n, s, p);
    const m = Y(!1);
    ks((() => {
        d && m.current && d.update(n, u)
    }));
    const f = n[Ws],
        g = Y(!!f && !(null !== (o = window.MotionHandoffIsComplete) && void 0 !== o && o.call(window, f)) && (null === (r = window.MotionHasOptimisedAnimation) || void 0 === r ? void 0 : r.call(window, f)));
    return js((() => {
        d && (m.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), $e.render(d.render), g.current && d.animationState && d.animationState.animateChanges())
    })), qt((() => {
        d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask((() => {
            var t;
            null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, f)
        })), g.current = !1))
    })), d
}

function Ir(t, e, n, i) {
    const {
        layoutId: s,
        layout: o,
        drag: r,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : zs(t.parent)), t.projection.setOptions({
        layoutId: s,
        layout: o,
        alwaysMeasureLayout: !!r || a && at(a),
        visualElement: t,
        animationType: "string" == typeof o ? o : "both",
        initialPromotionConfig: i,
        layoutScroll: l,
        layoutRoot: u
    })
}

function zs(t) {
    if (t) return !1 !== t.options.allowProjection ? t.projection : zs(t.parent)
}

function Or({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: i,
    Component: s
}) {
    var o, r;

    function a(t, o) {
        let r;
        const a = { ...B(Oe),
                ...t,
                layoutId: jr(t)
            },
            {
                isStatic: l
            } = a,
            u = Er(t),
            c = i(t, l);
        if (!l && je) {
            Nr();
            const t = Ur(a);
            r = t.MeasureLayout, u.visualElement = kr(s, c, a, e, t.ProjectionNode)
        }
        return q(Jt.Provider, {
            value: u,
            children: [r && u.visualElement ? q(r, {
                visualElement: u.visualElement,
                ...a
            }) : null, n(s, t, Br(c, u.visualElement, o), c, l, u.visualElement)]
        })
    }
    t && Vr(t), a.displayName = `motion.${"string"==typeof s?s:`create(${null!==(r=null!==(o=s.displayName)&&void 0!==o?o:s.name)&&void 0!==r?r:""})`}`;
    const l = mr(a);
    return l[Lr] = s, l
}

function jr({
    layoutId: t
}) {
    const e = B(ke).id;
    return e && void 0 !== t ? e + "-" + t : t
}

function Nr(t, e) {
    B(_s).strict
}

function Ur(t) {
    const {
        drag: e,
        layout: n
    } = pt;
    if (!e && !n) return {};
    const i = { ...e,
        ...n
    };
    return {
        MeasureLayout: e ? .isEnabled(t) || n ? .isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const Hs = t => e => "string" == typeof e && e.startsWith(t),
    We = Hs("--"),
    _r = Hs("var(--"),
    Ge = t => !!_r(t) && Kr.test(t.split("/*")[0].trim()),
    Kr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    wt = {};

function $r(t) {
    for (const e in t) wt[e] = t[e], We(e) && (wt[e].isCSSVariable = !0)
}
const yt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    rt = new Set(yt);

function Xs(t, {
    layout: e,
    layoutId: n
}) {
    return rt.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!wt[t] || "opacity" === t)
}
const F = t => !(!t || !t.getVelocity),
    Ys = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
    H = (t, e, n) => n > e ? e : n < t ? t : n,
    vt = {
        test: t => "number" == typeof t,
        parse: parseFloat,
        transform: t => t
    },
    Ct = { ...vt,
        transform: t => H(0, 1, t)
    },
    jt = { ...vt,
        default: 1
    },
    Lt = t => ({
        test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    X = Lt("deg"),
    K = Lt("%"),
    P = Lt("px"),
    Wr = Lt("vh"),
    Gr = Lt("vw"),
    An = { ...K,
        parse: t => K.parse(t) / 100,
        transform: t => K.transform(100 * t)
    },
    zr = {
        borderWidth: P,
        borderTopWidth: P,
        borderRightWidth: P,
        borderBottomWidth: P,
        borderLeftWidth: P,
        borderRadius: P,
        radius: P,
        borderTopLeftRadius: P,
        borderTopRightRadius: P,
        borderBottomRightRadius: P,
        borderBottomLeftRadius: P,
        width: P,
        maxWidth: P,
        height: P,
        maxHeight: P,
        top: P,
        right: P,
        bottom: P,
        left: P,
        padding: P,
        paddingTop: P,
        paddingRight: P,
        paddingBottom: P,
        paddingLeft: P,
        margin: P,
        marginTop: P,
        marginRight: P,
        marginBottom: P,
        marginLeft: P,
        backgroundPositionX: P,
        backgroundPositionY: P
    },
    Hr = {
        rotate: X,
        rotateX: X,
        rotateY: X,
        rotateZ: X,
        scale: jt,
        scaleX: jt,
        scaleY: jt,
        scaleZ: jt,
        skew: X,
        skewX: X,
        skewY: X,
        distance: P,
        translateX: P,
        translateY: P,
        translateZ: P,
        x: P,
        y: P,
        z: P,
        perspective: P,
        transformPerspective: P,
        opacity: Ct,
        originX: An,
        originY: An,
        originZ: P
    },
    bn = { ...vt,
        transform: Math.round
    },
    ze = { ...zr,
        ...Hr,
        zIndex: bn,
        size: P,
        fillOpacity: Ct,
        strokeOpacity: Ct,
        numOctaves: bn
    },
    Xr = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Yr = yt.length;

function qr(t, e, n) {
    let i = "",
        s = !0;
    for (let o = 0; o < Yr; o++) {
        const r = yt[o],
            a = t[r];
        if (void 0 === a) continue;
        let l = !0;
        if (l = "number" == typeof a ? a === (r.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a), !l || n) {
            const t = Ys(a, ze[r]);
            if (!l) {
                s = !1;
                i += `${Xr[r]||r}(${t}) `
            }
            n && (e[r] = t)
        }
    }
    return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i
}

function He(t, e, n) {
    const {
        style: i,
        vars: s,
        transformOrigin: o
    } = t;
    let r = !1,
        a = !1;
    for (const t in e) {
        const n = e[t];
        if (rt.has(t)) r = !0;
        else if (We(t)) s[t] = n;
        else {
            const e = Ys(n, ze[t]);
            t.startsWith("origin") ? (a = !0, o[t] = e) : i[t] = e
        }
    }
    if (e.transform || (r || n ? i.transform = qr(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
        const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
        } = o;
        i.transformOrigin = `${t} ${e} ${n}`
    }
}
const Xe = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function qs(t, e, n) {
    for (const i in e) !F(e[i]) && !Xs(i, n) && (t[i] = e[i])
}

function Zr({
    transformTemplate: t
}, e) {
    return it((() => {
        const n = Xe();
        return He(n, e, t), Object.assign({}, n.vars, n.style)
    }), [e])
}

function Jr(t, e) {
    const n = {};
    return qs(n, t.style || {}, t), Object.assign(n, Zr(t, e)), n
}

function Qr(t, e) {
    const n = {},
        i = Jr(t, e);
    return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
}
const to = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Ye(t) {
    return "string" == typeof t && !t.includes("-") && !!(to.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
const eo = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    no = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function so(t, e, n = 1, i = 0, s = !0) {
    t.pathLength = 1;
    const o = s ? eo : no;
    t[o.offset] = P.transform(-i);
    const r = P.transform(e),
        a = P.transform(n);
    t[o.array] = `${r} ${a}`
}

function Vn(t, e, n) {
    return "string" == typeof t ? t : P.transform(e + n * t)
}

function io(t, e, n) {
    return `${Vn(e,t.x,t.width)} ${Vn(n,t.y,t.height)}`
}

function qe(t, {
    attrX: e,
    attrY: n,
    attrScale: i,
    originX: s,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, h) {
    if (He(t, u, h), c) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
    t.attrs = t.style, t.style = {};
    const {
        attrs: d,
        style: p,
        dimensions: m
    } = t;
    d.transform && (m && (p.transform = d.transform), delete d.transform), m && (void 0 !== s || void 0 !== o || p.transform) && (p.transformOrigin = io(m, void 0 !== s ? s : .5, void 0 !== o ? o : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== i && (d.scale = i), void 0 !== r && so(d, r, a, l, !1)
}
const Zs = () => ({ ...Xe(),
        attrs: {}
    }),
    Ze = t => "string" == typeof t && "svg" === t.toLowerCase();

function ro(t, e, n, i) {
    const s = it((() => {
        const n = Zs();
        return qe(n, e, Ze(i), t.transformTemplate), { ...n.attrs,
            style: { ...n.style
            }
        }
    }), [e]);
    if (t.style) {
        const e = {};
        qs(e, t.style, t), s.style = { ...e,
            ...s.style
        }
    }
    return s
}

function oo(t = !1) {
    return (e, n, i, {
        latestValues: s
    }, o) => {
        const r = (Ye(e) ? ro : Qr)(n, s, o, e),
            a = Dr(n, "string" == typeof e, t),
            l = e !== Fe ? { ...a,
                ...r,
                ref: i
            } : {},
            {
                children: u
            } = n,
            c = it((() => F(u) ? u.get() : u), [u]);
        return yr(e, { ...l,
            children: c
        })
    }
}

function wn(t) {
    const e = [{}, {}];
    return t ? .values.forEach(((t, n) => {
        e[0][n] = t.get(), e[1][n] = t.getVelocity()
    })), e
}

function Je(t, e, n, i) {
    if ("function" == typeof e) {
        const [s, o] = wn(i);
        e = e(void 0 !== n ? n : t.custom, s, o)
    }
    if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
        const [s, o] = wn(i);
        e = e(void 0 !== n ? n : t.custom, s, o)
    }
    return e
}
const ge = t => Array.isArray(t),
    ao = t => !!(t && "object" == typeof t && t.mix && t.toValue),
    lo = t => ge(t) ? t[t.length - 1] || 0 : t;

function Ut(t) {
    const e = F(t) ? t.get() : t;
    return ao(e) ? e.toValue() : e
}

function uo({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onUpdate: n
}, i, s, o) {
    const r = {
        latestValues: co(i, s, o, t),
        renderState: e()
    };
    return n && (r.onMount = t => n({
        props: i,
        current: t,
        ...r
    }), r.onUpdate = t => n(t)), r
}
const Js = t => (e, n) => {
    const i = B(Jt),
        s = B(Zt),
        o = () => uo(t, e, i, s);
    return n ? o() : Ie(o)
};

function co(t, e, n, i) {
    const s = {},
        o = i(t, {});
    for (const t in o) s[t] = Ut(o[t]);
    let {
        initial: r,
        animate: a
    } = t;
    const l = te(t),
        u = $s(t);
    e && u && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
    let c = !!n && !1 === n.initial;
    c = c || !1 === r;
    const h = c ? a : r;
    if (h && "boolean" != typeof h && !Qt(h)) {
        const e = Array.isArray(h) ? h : [h];
        for (let n = 0; n < e.length; n++) {
            const i = Je(t, e[n]);
            if (i) {
                const {
                    transitionEnd: t,
                    transition: e,
                    ...n
                } = i;
                for (const t in n) {
                    let e = n[t];
                    if (Array.isArray(e)) {
                        e = e[c ? e.length - 1 : 0]
                    }
                    null !== e && (s[t] = e)
                }
                for (const e in t) s[e] = t[e]
            }
        }
    }
    return s
}

function Qe(t, e, n) {
    var i;
    const {
        style: s
    } = t, o = {};
    for (const r in s)(F(s[r]) || e.style && F(e.style[r]) || Xs(r, t) || void 0 !== (null === (i = n ? .getValue(r)) || void 0 === i ? void 0 : i.liveStyle)) && (o[r] = s[r]);
    return o
}
const ho = {
    useVisualState: Js({
        scrapeMotionValuesFromProps: Qe,
        createRenderState: Xe
    })
};

function Qs(t, e) {
    try {
        e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}

function ti(t, {
    style: e,
    vars: n
}, i, s) {
    Object.assign(t.style, e, s && s.getProjectionStyles(i));
    for (const e in n) t.style.setProperty(e, n[e])
}
const ei = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function ni(t, e, n, i) {
    ti(t, e, void 0, i);
    for (const n in e.attrs) t.setAttribute(ei.has(n) ? n : Ke(n), e.attrs[n])
}

function si(t, e, n) {
    const i = Qe(t, e, n);
    for (const n in t)
        if (F(t[n]) || F(e[n])) {
            i[-1 !== yt.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]
        }
    return i
}
const Cn = ["x", "y", "width", "height", "cx", "cy", "r"],
    fo = {
        useVisualState: Js({
            scrapeMotionValuesFromProps: si,
            createRenderState: Zs,
            onUpdate: ({
                props: t,
                prevProps: e,
                current: n,
                renderState: i,
                latestValues: s
            }) => {
                if (!n) return;
                let o = !!t.drag;
                if (!o)
                    for (const t in s)
                        if (rt.has(t)) {
                            o = !0;
                            break
                        }
                if (!o) return;
                let r = !e;
                if (e)
                    for (let n = 0; n < Cn.length; n++) {
                        const i = Cn[n];
                        t[i] !== e[i] && (r = !0)
                    }
                r && V.read((() => {
                    Qs(n, i), V.render((() => {
                        qe(i, s, Ze(n.tagName), t.transformTemplate), ni(n, i)
                    }))
                }))
            }
        })
    };

function po(t, e) {
    return function(n, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        return Or({ ...Ye(n) ? fo : ho,
            preloadedFeatures: t,
            useRender: oo(i),
            createVisualElement: e,
            Component: n
        })
    }
}

function Dt(t, e, n) {
    const i = t.getProps();
    return Je(i, e, void 0 !== n ? n : i.custom, t)
}
const mo = Ne((() => void 0 !== window.ScrollTimeline));
class go {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map((t => "finished" in t ? t.finished : t)))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, e) {
        for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = e
    }
    attachTimeline(t, e) {
        const n = this.animations.map((n => mo() && n.attachTimeline ? n.attachTimeline(t) : "function" == typeof e ? e(n) : void 0));
        return () => {
            n.forEach(((t, e) => {
                t && t(), this.animations[e].stop()
            }))
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach((e => e[t]()))
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class yo extends go {
    then(t, e) {
        return Promise.all(this.animations).then(t).catch(e)
    }
}

function tn(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const ye = 2e4;

function ii(t) {
    let e = 0;
    let n = t.next(e);
    for (; !n.done && e < ye;) e += 50, n = t.next(e);
    return e >= ye ? 1 / 0 : e
}

function en(t) {
    return "function" == typeof t
}

function Dn(t, e) {
    t.timeline = e, t.onfinish = null
}
const nn = t => Array.isArray(t) && "number" == typeof t[0],
    vo = {
        linearEasing: void 0
    };

function To(t, e) {
    const n = Ne(t);
    return () => {
        var t;
        return null !== (t = vo[e]) && void 0 !== t ? t : n()
    }
}
const Wt = To((() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }), "linearEasing"),
    ri = (t, e, n = 10) => {
        let i = "";
        const s = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < s; e++) i += t(dt(0, s - 1, e)) + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    };

function oi(t) {
    return !!("function" == typeof t && Wt() || !t || "string" == typeof t && (t in ve || Wt()) || nn(t) || Array.isArray(t) && t.every(oi))
}
const xt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
    ve = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: xt([0, .65, .55, 1]),
        circOut: xt([.55, 0, 1, .45]),
        backIn: xt([.31, .01, .66, -.59]),
        backOut: xt([.33, 1.53, .69, .99])
    };

function ai(t, e) {
    if (t) return "function" == typeof t && Wt() ? ri(t, e) : nn(t) ? xt(t) : Array.isArray(t) ? t.map((t => ai(t, e) || ve.easeOut)) : ve[t]
}
const _ = {
    x: !1,
    y: !1
};

function li() {
    return _.x || _.y
}

function xo(t, e, n) {
    if (t instanceof EventTarget) return [t];
    if ("string" == typeof t) {
        const e = document.querySelectorAll(t);
        return e ? Array.from(e) : []
    }
    return Array.from(t)
}

function ui(t, e) {
    const n = xo(t),
        i = new AbortController;
    return [n, {
        passive: !0,
        ...e,
        signal: i.signal
    }, () => i.abort()]
}

function Mn(t) {
    return !("touch" === t.pointerType || li())
}

function Po(t, e, n = {}) {
    const [i, s, o] = ui(t, n), r = t => {
        if (!Mn(t)) return;
        const {
            target: n
        } = t, i = e(n, t);
        if ("function" != typeof i || !n) return;
        const o = t => {
            Mn(t) && (i(t), n.removeEventListener("pointerleave", o))
        };
        n.addEventListener("pointerleave", o, s)
    };
    return i.forEach((t => {
        t.addEventListener("pointerenter", r, s)
    })), o
}

function Gt(t, e) {
    const n = `${e}PointerCapture`;
    if (t.target instanceof Element && n in t.target && void 0 !== t.pointerId) try {
        t.target[n](t.pointerId)
    } catch {}
}
const ci = (t, e) => !!e && (t === e || ci(t, e.parentElement)),
    sn = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
    So = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Ao(t) {
    return So.has(t.tagName) || -1 !== t.tabIndex
}
const Pt = new WeakSet;

function Rn(t) {
    return e => {
        "Enter" === e.key && t(e)
    }
}

function re(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const bo = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = Rn((() => {
        if (Pt.has(n)) return;
        re(n, "down");
        const t = Rn((() => {
            re(n, "up")
        }));
        n.addEventListener("keyup", t, e), n.addEventListener("blur", (() => re(n, "cancel")), e)
    }));
    n.addEventListener("keydown", i, e), n.addEventListener("blur", (() => n.removeEventListener("keydown", i)), e)
};

function En(t) {
    return sn(t) && !li()
}

function Vo(t, e, n = {}) {
    const [i, s, o] = ui(t, n), r = t => {
        const n = t.currentTarget;
        if (!n || !En(t) || Pt.has(n)) return;
        Pt.add(n), Gt(t, "set");
        const i = e(n, t),
            o = (t, e) => {
                n.removeEventListener("pointerup", r), n.removeEventListener("pointercancel", a), Gt(t, "release"), En(t) && Pt.has(n) && (Pt.delete(n), "function" == typeof i && i(t, {
                    success: e
                }))
            },
            r = t => {
                t.isTrusted && wo(t, n instanceof Element ? n.getBoundingClientRect() : {
                    left: 0,
                    top: 0,
                    right: window.innerWidth,
                    bottom: window.innerHeight
                }) ? o(t, !1) : o(t, !(n instanceof Element) || ci(n, t.target))
            },
            a = t => {
                o(t, !1)
            };
        n.addEventListener("pointerup", r, s), n.addEventListener("pointercancel", a, s), n.addEventListener("lostpointercapture", a, s)
    };
    return i.forEach((t => {
        let e = !1;
        (t = n.useGlobalTarget ? window : t) instanceof HTMLElement && (e = !0, !Ao(t) && null === t.getAttribute("tabindex") && (t.tabIndex = 0)), t.addEventListener("pointerdown", r, s), e && t.addEventListener("focus", (t => bo(t, s)), s)
    })), o
}

function wo(t, e) {
    return t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom
}

function Co(t) {
    return "x" === t || "y" === t ? _[t] ? null : (_[t] = !0, () => {
        _[t] = !1
    }) : _.x || _.y ? null : (_.x = _.y = !0, () => {
        _.x = _.y = !1
    })
}
const hi = new Set(["width", "height", "top", "left", "right", "bottom", ...yt]);
let _t;

function Do() {
    _t = void 0
}
const $ = {
    now: () => (void 0 === _t && $.set(E.isProcessing || Sr.useManualTiming ? E.timestamp : performance.now()), _t),
    set: t => {
        _t = t, queueMicrotask(Do)
    }
};

function rn(t, e) {
    -1 === t.indexOf(e) && t.push(e)
}

function on(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class an {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return rn(this.subscriptions, t), () => on(this.subscriptions, t)
    }
    notify(t, e, n) {
        const i = this.subscriptions.length;
        if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
                for (let s = 0; s < i; s++) {
                    const i = this.subscriptions[s];
                    i && i(t, e, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function fi(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Ln = 30,
    Mo = t => !isNaN(parseFloat(t));
class Ro {
    constructor(t, e = {}) {
        this.version = "12.4.7", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            const n = $.now();
            this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = $.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = Mo(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, e) {
        this.events[t] || (this.events[t] = new an);
        const n = this.events[t].add(e);
        return "change" === t ? () => {
            n(), V.read((() => {
                this.events.change.getSize() || this.stop()
            }))
        } : n
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, e) {
        this.passiveEffect = t, this.stopPassiveEffect = e
    }
    set(t, e = !0) {
        e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
    }
    setWithVelocity(t, e, n) {
        this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n
    }
    jump(t, e = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = $.now();
        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
        const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return fi(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
    }
    start(t) {
        return this.stop(), new Promise((e => {
            this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
        })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        }))
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Mt(t, e) {
    return new Ro(t, e)
}

function Eo(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Mt(n))
}

function Lo(t, e) {
    const n = Dt(t, e);
    let {
        transitionEnd: i = {},
        transition: s = {},
        ...o
    } = n || {};
    o = { ...o,
        ...i
    };
    for (const e in o) {
        Eo(t, e, lo(o[e]))
    }
}

function Bo(t) {
    return !(!F(t) || !t.add)
}

function Te(t, e) {
    const n = t.getValue("willChange");
    if (Bo(n)) return n.add(e)
}

function di(t) {
    return t.props[Ws]
}
const pi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    Fo = 1e-7,
    ko = 12;

function Io(t, e, n, i, s) {
    let o, r, a = 0;
    do {
        r = e + (n - e) / 2, o = pi(r, i, s) - t, o > 0 ? n = r : e = r
    } while (Math.abs(o) > Fo && ++a < 12);
    return r
}

function Bt(t, e, n, i) {
    if (t === e && n === i) return j;
    return s => 0 === s || 1 === s ? s : pi((e => Io(e, 0, 1, t, n))(s), e, i)
}
const mi = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    gi = t => e => 1 - t(1 - e),
    yi = Bt(.33, 1.53, .69, .99),
    ln = gi(yi),
    vi = mi(ln),
    Ti = t => (t *= 2) < 1 ? .5 * ln(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    un = t => 1 - Math.sin(Math.acos(t)),
    xi = gi(un),
    Pi = mi(un),
    Si = t => /^0[^.\s]+$/u.test(t);

function Oo(t) {
    return "number" == typeof t ? 0 === t : null === t || ("none" === t || "0" === t || Si(t))
}
const St = t => Math.round(1e5 * t) / 1e5,
    cn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function jo(t) {
    return null == t
}
const No = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    hn = (t, e) => n => !!("string" == typeof n && No.test(n) && n.startsWith(t) || e && !jo(n) && Object.prototype.hasOwnProperty.call(n, e)),
    Ai = (t, e, n) => i => {
        if ("string" != typeof i) return i;
        const [s, o, r, a] = i.match(cn);
        return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: void 0 !== a ? parseFloat(a) : 1
        }
    },
    Uo = t => H(0, 255, t),
    oe = { ...vt,
        transform: t => Math.round(Uo(t))
    },
    nt = {
        test: hn("rgb", "red"),
        parse: Ai("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
        }) => "rgba(" + oe.transform(t) + ", " + oe.transform(e) + ", " + oe.transform(n) + ", " + St(Ct.transform(i)) + ")"
    };

function _o(t) {
    let e = "",
        n = "",
        i = "",
        s = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const xe = {
        test: hn("#"),
        parse: _o,
        transform: nt.transform
    },
    lt = {
        test: hn("hsl", "hue"),
        parse: Ai("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + K.transform(St(e)) + ", " + K.transform(St(n)) + ", " + St(Ct.transform(i)) + ")"
    },
    L = {
        test: t => nt.test(t) || xe.test(t) || lt.test(t),
        parse: t => nt.test(t) ? nt.parse(t) : lt.test(t) ? lt.parse(t) : xe.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? nt.transform(t) : lt.transform(t)
    },
    Ko = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function $o(t) {
    var e, n;
    return isNaN(t) && "string" == typeof t && ((null === (e = t.match(cn)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(Ko)) || void 0 === n ? void 0 : n.length) || 0) > 0
}
const bi = "number",
    Vi = "color",
    Wo = "var",
    Go = "var(",
    Bn = "${}",
    zo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Rt(t) {
    const e = t.toString(),
        n = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        s = [];
    let o = 0;
    const r = e.replace(zo, (t => (L.test(t) ? (i.color.push(o), s.push(Vi), n.push(L.parse(t))) : t.startsWith(Go) ? (i.var.push(o), s.push(Wo), n.push(t)) : (i.number.push(o), s.push(bi), n.push(parseFloat(t))), ++o, Bn))).split(Bn);
    return {
        values: n,
        split: r,
        indexes: i,
        types: s
    }
}

function wi(t) {
    return Rt(t).values
}

function Ci(t) {
    const {
        split: e,
        types: n
    } = Rt(t), i = e.length;
    return t => {
        let s = "";
        for (let o = 0; o < i; o++)
            if (s += e[o], void 0 !== t[o]) {
                const e = n[o];
                s += e === bi ? St(t[o]) : e === Vi ? L.transform(t[o]) : t[o]
            }
        return s
    }
}
const Ho = t => "number" == typeof t ? 0 : t;

function Xo(t) {
    const e = wi(t);
    return Ci(t)(e.map(Ho))
}
const J = {
        test: $o,
        parse: wi,
        createTransformer: Ci,
        getAnimatableNone: Xo
    },
    Yo = new Set(["brightness", "contrast", "saturate", "opacity"]);

function qo(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if ("drop-shadow" === e) return t;
    const [i] = n.match(cn) || [];
    if (!i) return t;
    const s = n.replace(i, "");
    let o = Yo.has(e) ? 1 : 0;
    return i !== n && (o *= 100), e + "(" + o + s + ")"
}
const Zo = /\b([a-z-]*)\(.*?\)/gu,
    Pe = { ...J,
        getAnimatableNone: t => {
            const e = t.match(Zo);
            return e ? e.map(qo).join(" ") : t
        }
    },
    Jo = { ...ze,
        color: L,
        backgroundColor: L,
        outlineColor: L,
        fill: L,
        stroke: L,
        borderColor: L,
        borderTopColor: L,
        borderRightColor: L,
        borderBottomColor: L,
        borderLeftColor: L,
        filter: Pe,
        WebkitFilter: Pe
    },
    fn = t => Jo[t];

function Di(t, e) {
    let n = fn(t);
    return n !== Pe && (n = J), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const Qo = new Set(["auto", "none", "0"]);

function ta(t, e, n) {
    let i, s = 0;
    for (; s < t.length && !i;) {
        const e = t[s];
        "string" == typeof e && !Qo.has(e) && Rt(e).values.length && (i = t[s]), s++
    }
    if (i && n)
        for (const s of e) t[s] = Di(n, i)
}
const Fn = t => t === vt || t === P,
    kn = (t, e) => parseFloat(t.split(", ")[e]),
    In = (t, e) => (n, {
        transform: i
    }) => {
        if ("none" === i || !i) return 0;
        const s = i.match(/^matrix3d\((.+)\)$/u);
        if (s) return kn(s[1], e); {
            const e = i.match(/^matrix\((.+)\)$/u);
            return e ? kn(e[1], t) : 0
        }
    },
    ea = new Set(["x", "y", "z"]),
    na = yt.filter((t => !ea.has(t)));

function sa(t) {
    const e = [];
    return na.forEach((n => {
        const i = t.getValue(n);
        void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
    })), e
}
const mt = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: In(4, 13),
    y: In(5, 14)
};
mt.translateX = mt.x, mt.translateY = mt.y;
const st = new Set;
let Se = !1,
    Ae = !1;

function Mi() {
    if (Ae) {
        const t = Array.from(st).filter((t => t.needsMeasurement)),
            e = new Set(t.map((t => t.element))),
            n = new Map;
        e.forEach((t => {
            const e = sa(t);
            e.length && (n.set(t, e), t.render())
        })), t.forEach((t => t.measureInitialState())), e.forEach((t => {
            t.render();
            const e = n.get(t);
            e && e.forEach((([e, n]) => {
                var i;
                null === (i = t.getValue(e)) || void 0 === i || i.set(n)
            }))
        })), t.forEach((t => t.measureEndState())), t.forEach((t => {
            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
        }))
    }
    Ae = !1, Se = !1, st.forEach((t => t.complete())), st.clear()
}

function Ri() {
    st.forEach((t => {
        t.readKeyframes(), t.needsMeasurement && (Ae = !0)
    }))
}

function ia() {
    Ri(), Mi()
}
class dn {
    constructor(t, e, n, i, s, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = s, this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (st.add(this), Se || (Se = !0, V.read(Ri), V.resolveKeyframes(Mi))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i
        } = this;
        for (let s = 0; s < t.length; s++)
            if (null === t[s])
                if (0 === s) {
                    const s = i ? .get(),
                        o = t[t.length - 1];
                    if (void 0 !== s) t[0] = s;
                    else if (n && e) {
                        const i = n.readValue(e, o);
                        null != i && (t[0] = i)
                    }
                    void 0 === t[0] && (t[0] = o), i && void 0 === s && i.set(t[0])
                } else t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), st.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, st.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ei = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    ra = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function oa(t) {
    const e = ra.exec(t);
    if (!e) return [, ];
    const [, n, i, s] = e;
    return [`--${n??i}`, s]
}

function Li(t, e, n = 1) {
    const [i, s] = oa(t);
    if (!i) return;
    const o = window.getComputedStyle(e).getPropertyValue(i);
    if (o) {
        const t = o.trim();
        return Ei(t) ? parseFloat(t) : t
    }
    return Ge(s) ? Li(s, e, n + 1) : s
}
const Bi = t => e => e.test(t),
    aa = {
        test: t => "auto" === t,
        parse: t => t
    },
    Fi = [vt, P, K, X, Gr, Wr, aa],
    On = t => Fi.find(Bi(t));
class ki extends dn {
    constructor(t, e, n, i, s) {
        super(t, e, n, i, s, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: e,
            name: n
        } = this;
        if (!e || !e.current) return;
        super.readKeyframes();
        for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && (i = i.trim(), Ge(i))) {
                const s = Li(i, e.current);
                void 0 !== s && (t[n] = s), n === t.length - 1 && (this.finalKeyframe = i)
            }
        }
        if (this.resolveNoneKeyframes(), !hi.has(n) || 2 !== t.length) return;
        const [i, s] = t, o = On(i), r = On(s);
        if (o !== r)
            if (Fn(o) && Fn(r))
                for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    "string" == typeof n && (t[e] = parseFloat(n))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: e
        } = this, n = [];
        for (let e = 0; e < t.length; e++) Oo(t[e]) && n.push(e);
        n.length && ta(t, n, e)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: e,
            name: n
        } = this;
        if (!t || !t.current) return;
        "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = mt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
        const i = e[e.length - 1];
        void 0 !== i && t.getValue(n, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: e,
            name: n,
            unresolvedKeyframes: i
        } = this;
        if (!e || !e.current) return;
        const s = e.getValue(n);
        s && s.jump(this.measuredOrigin, !1);
        const o = i.length - 1,
            r = i[o];
        i[o] = mt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), !(null === (t = this.removedTransforms) || void 0 === t) && t.length && this.removedTransforms.forEach((([t, n]) => {
            e.getValue(t).set(n)
        })), this.resolveNoneKeyframes()
    }
}
const jn = (t, e) => "zIndex" !== e && !("number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !J.test(t) && "0" !== t || t.startsWith("url(")));

function la(t) {
    const e = t[0];
    if (1 === t.length) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function ua(t, e, n, i) {
    const s = t[0];
    if (null === s) return !1;
    if ("display" === e || "visibility" === e) return !0;
    const o = t[t.length - 1],
        r = jn(s, e),
        a = jn(o, e);
    return !(!r || !a) && (la(t) || ("spring" === n || en(n)) && i)
}
const ca = t => null !== t;

function ee(t, {
    repeat: e,
    repeatType: n = "loop"
}, i) {
    const s = t.filter(ca),
        o = e && "loop" !== n && e % 2 == 1 ? 0 : s.length - 1;
    return o && void 0 !== i ? i : s[o]
}
const ha = 40;
class Ii {
    constructor({
        autoplay: t = !0,
        delay: e = 0,
        type: n = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: o = "loop",
        ...r
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = $.now(), this.options = {
            autoplay: t,
            delay: e,
            type: n,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            ...r
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && ia(), this._resolved
    }
    onKeyframesResolved(t, e) {
        this.resolvedAt = $.now(), this.hasAttemptedResolve = !0;
        const {
            name: n,
            type: i,
            velocity: s,
            delay: o,
            onComplete: r,
            onUpdate: a,
            isGenerator: l
        } = this.options;
        if (!l && !ua(t, n, i, s)) {
            if (!o) return a && a(ee(t, this.options, e)), r && r(), void this.resolveFinishedPromise();
            this.options.duration = 0
        }
        const u = this.initPlayback(t, e);
        !1 !== u && (this._resolved = {
            keyframes: t,
            finalKeyframe: e,
            ...u
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, e) {
        return this.currentFinishedPromise.then(t, e)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((t => {
            this.resolveFinishedPromise = t
        }))
    }
}
const C = (t, e, n) => t + (e - t) * n;

function ae(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function fa({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: i
}) {
    t /= 360, n /= 100;
    let s = 0,
        o = 0,
        r = 0;
    if (e /= 100) {
        const i = n < .5 ? n * (1 + e) : n + e - n * e,
            a = 2 * n - i;
        s = ae(a, i, t + 1 / 3), o = ae(a, i, t), r = ae(a, i, t - 1 / 3)
    } else s = o = r = n;
    return {
        red: Math.round(255 * s),
        green: Math.round(255 * o),
        blue: Math.round(255 * r),
        alpha: i
    }
}

function zt(t, e) {
    return n => n > 0 ? e : t
}
const le = (t, e, n) => {
        const i = t * t,
            s = n * (e * e - i) + i;
        return s < 0 ? 0 : Math.sqrt(s)
    },
    da = [xe, nt, lt],
    pa = t => da.find((e => e.test(t)));

function Nn(t) {
    const e = pa(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === lt && (n = fa(n)), n
}
const Un = (t, e) => {
        const n = Nn(t),
            i = Nn(e);
        if (!n || !i) return zt(t, e);
        const s = { ...n
        };
        return t => (s.red = le(n.red, i.red, t), s.green = le(n.green, i.green, t), s.blue = le(n.blue, i.blue, t), s.alpha = C(n.alpha, i.alpha, t), nt.transform(s))
    },
    ma = (t, e) => n => e(t(n)),
    Ft = (...t) => t.reduce(ma),
    be = new Set(["none", "hidden"]);

function ga(t, e) {
    return be.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function ya(t, e) {
    return n => C(t, e, n)
}

function pn(t) {
    return "number" == typeof t ? ya : "string" == typeof t ? Ge(t) ? zt : L.test(t) ? Un : xa : Array.isArray(t) ? Oi : "object" == typeof t ? L.test(t) ? Un : va : zt
}

function Oi(t, e) {
    const n = [...t],
        i = n.length,
        s = t.map(((t, n) => pn(t)(t, e[n])));
    return t => {
        for (let e = 0; e < i; e++) n[e] = s[e](t);
        return n
    }
}

function va(t, e) {
    const n = { ...t,
            ...e
        },
        i = {};
    for (const s in n) void 0 !== t[s] && void 0 !== e[s] && (i[s] = pn(t[s])(t[s], e[s]));
    return t => {
        for (const e in i) n[e] = i[e](t);
        return n
    }
}

function Ta(t, e) {
    var n;
    const i = [],
        s = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < e.values.length; o++) {
        const r = e.types[o],
            a = t.indexes[r][s[r]],
            l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
        i[o] = l, s[r]++
    }
    return i
}
const xa = (t, e) => {
    const n = J.createTransformer(e),
        i = Rt(t),
        s = Rt(e);
    return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? be.has(t) && !s.values.length || be.has(e) && !i.values.length ? ga(t, e) : Ft(Oi(Ta(i, s), s.values), n) : zt(t, e)
};

function ji(t, e, n) {
    return "number" == typeof t && "number" == typeof e && "number" == typeof n ? C(t, e, n) : pn(t)(t, e)
}
const Pa = 5;

function Ni(t, e, n) {
    const i = Math.max(e - 5, 0);
    return fi(n - t(i), e - i)
}
const D = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    _n = .001;

function Sa({
    duration: t = D.duration,
    bounce: e = D.bounce,
    velocity: n = D.velocity,
    mass: i = D.mass
}) {
    let s, o, r = 1 - e;
    r = H(D.minDamping, D.maxDamping, r), t = H(D.minDuration, D.maxDuration, z(t)), r < 1 ? (s = e => {
        const i = e * r,
            s = i * t,
            o = i - n,
            a = Ve(e, r),
            l = Math.exp(-s);
        return _n - o / a * l
    }, o = e => {
        const i = e * r * t,
            o = i * n + n,
            a = Math.pow(r, 2) * Math.pow(e, 2) * t,
            l = Math.exp(-i),
            u = Ve(Math.pow(e, 2), r);
        return (-s(e) + _n > 0 ? -1 : 1) * ((o - a) * l) / u
    }) : (s = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, o = e => Math.exp(-e * t) * (t * t * (n - e)));
    const a = ba(s, o, 5 / t);
    if (t = G(t), isNaN(a)) return {
        stiffness: D.stiffness,
        damping: D.damping,
        duration: t
    }; {
        const e = Math.pow(a, 2) * i;
        return {
            stiffness: e,
            damping: 2 * r * Math.sqrt(i * e),
            duration: t
        }
    }
}
const Aa = 12;

function ba(t, e, n) {
    let i = n;
    for (let n = 1; n < Aa; n++) i -= t(i) / e(i);
    return i
}

function Ve(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const Va = ["duration", "bounce"],
    wa = ["stiffness", "damping", "mass"];

function Kn(t, e) {
    return e.some((e => void 0 !== t[e]))
}

function Ca(t) {
    let e = {
        velocity: D.velocity,
        stiffness: D.stiffness,
        damping: D.damping,
        mass: D.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Kn(t, wa) && Kn(t, Va))
        if (t.visualDuration) {
            const n = t.visualDuration,
                i = 2 * Math.PI / (1.2 * n),
                s = i * i,
                o = 2 * H(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
            e = { ...e,
                mass: D.mass,
                stiffness: s,
                damping: o
            }
        } else {
            const n = Sa(t);
            e = { ...e,
                ...n,
                mass: D.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function Ui(t = D.visualDuration, e = D.bounce) {
    const n = "object" != typeof t ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: i,
        restDelta: s
    } = n;
    const o = n.keyframes[0],
        r = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: o
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: h,
            velocity: d,
            isResolvedFromDuration: p
        } = Ca({ ...n,
            velocity: -z(n.velocity || 0)
        }),
        m = d || 0,
        f = u / (2 * Math.sqrt(l * c)),
        g = r - o,
        v = z(Math.sqrt(l / c)),
        y = Math.abs(g) < 5;
    let x;
    if (i || (i = y ? D.restSpeed.granular : D.restSpeed.default), s || (s = y ? D.restDelta.granular : D.restDelta.default), f < 1) {
        const t = Ve(v, f);
        x = e => {
            const n = Math.exp(-f * v * e);
            return r - n * ((m + f * v * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
        }
    } else if (1 === f) x = t => r - Math.exp(-v * t) * (g + (m + v * g) * t);
    else {
        const t = v * Math.sqrt(f * f - 1);
        x = e => {
            const n = Math.exp(-f * v * e),
                i = Math.min(t * e, 300);
            return r - n * ((m + f * v * g) * Math.sinh(i) + t * g * Math.cosh(i)) / t
        }
    }
    const P = {
        calculatedDuration: p && h || null,
        next: t => {
            const e = x(t);
            if (p) a.done = t >= h;
            else {
                let n = 0;
                f < 1 && (n = 0 === t ? G(m) : Ni(x, t, e));
                const o = Math.abs(n) <= i,
                    l = Math.abs(r - e) <= s;
                a.done = o && l
            }
            return a.value = a.done ? r : e, a
        },
        toString: () => {
            const t = Math.min(ii(P), ye),
                e = ri((e => P.next(t * e).value), t, 30);
            return t + "ms " + e
        }
    };
    return P
}

function $n({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: i = 325,
    bounceDamping: s = 10,
    bounceStiffness: o = 500,
    modifyTarget: r,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const h = t[0],
        d = {
            done: !1,
            value: h
        },
        p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
    let m = n * e;
    const f = h + m,
        g = void 0 === r ? f : r(f);
    g !== f && (m = g - h);
    const v = t => -m * Math.exp(-t / i),
        y = t => g + v(t),
        x = t => {
            const e = v(t),
                n = y(t);
            d.done = Math.abs(e) <= u, d.value = d.done ? g : n
        };
    let P, T;
    const S = t => {
        (t => void 0 !== a && t < a || void 0 !== l && t > l)(d.value) && (P = t, T = Ui({
            keyframes: [d.value, p(d.value)],
            velocity: Ni(y, t, d.value),
            damping: s,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return S(0), {
        calculatedDuration: null,
        next: t => {
            let e = !1;
            return !T && void 0 === P && (e = !0, x(t), S(t)), void 0 !== P && t >= P ? T.next(t - P) : (!e && x(t), d)
        }
    }
}
const Da = Bt(.42, 0, 1, 1),
    Ma = Bt(0, 0, .58, 1),
    _i = Bt(.42, 0, .58, 1),
    Ra = t => Array.isArray(t) && "number" != typeof t[0],
    Ea = {
        linear: j,
        easeIn: Da,
        easeInOut: _i,
        easeOut: Ma,
        circIn: un,
        circInOut: Pi,
        circOut: xi,
        backIn: ln,
        backInOut: vi,
        backOut: yi,
        anticipate: Ti
    },
    Wn = t => {
        if (nn(t)) {
            Ns(4 === t.length);
            const [e, n, i, s] = t;
            return Bt(e, n, i, s)
        }
        return "string" == typeof t ? Ea[t] : t
    };

function La(t, e, n) {
    const i = [],
        s = n || ji,
        o = t.length - 1;
    for (let n = 0; n < o; n++) {
        let o = s(t[n], t[n + 1]);
        if (e) {
            const t = Array.isArray(e) ? e[n] || j : e;
            o = Ft(t, o)
        }
        i.push(o)
    }
    return i
}

function Ba(t, e, {
    clamp: n = !0,
    ease: i,
    mixer: s
} = {}) {
    const o = t.length;
    if (Ns(o === e.length), 1 === o) return () => e[0];
    if (2 === o && e[0] === e[1]) return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const a = La(e, i, s),
        l = a.length,
        u = n => {
            if (r && n < t[0]) return e[0];
            let i = 0;
            if (l > 1)
                for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            const s = dt(t[i], t[i + 1], n);
            return a[i](s)
        };
    return n ? e => u(H(t[0], t[o - 1], e)) : u
}

function Fa(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const s = dt(0, e, i);
        t.push(C(n, 1, s))
    }
}

function ka(t) {
    const e = [0];
    return Fa(e, t.length - 1), e
}

function Ia(t, e) {
    return t.map((t => t * e))
}

function Oa(t, e) {
    return t.map((() => e || _i)).splice(0, t.length - 1)
}

function Ht({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: i = "easeInOut"
}) {
    const s = Ra(i) ? i.map(Wn) : Wn(i),
        o = {
            done: !1,
            value: e[0]
        },
        r = Ba(Ia(n && n.length === e.length ? n : ka(e), t), e, {
            ease: Array.isArray(s) ? s : Oa(e, s)
        });
    return {
        calculatedDuration: t,
        next: e => (o.value = r(e), o.done = e >= t, o)
    }
}
const ja = t => {
        const e = ({
            timestamp: e
        }) => t(e);
        return {
            start: () => V.update(e, !0),
            stop: () => Z(e),
            now: () => E.isProcessing ? E.timestamp : $.now()
        }
    },
    Na = {
        decay: $n,
        inertia: $n,
        tween: Ht,
        keyframes: Ht,
        spring: Ui
    },
    Ua = t => t / 100;
class mn extends Ii {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
            this.teardown();
            const {
                onStop: t
            } = this.options;
            t && t()
        };
        const {
            name: e,
            motionValue: n,
            element: i,
            keyframes: s
        } = this.options, o = i ? .KeyframeResolver || dn;
        this.resolver = new o(s, ((t, e) => this.onKeyframesResolved(t, e)), e, n, i), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {
            type: e = "keyframes",
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
        } = this.options, r = en(e) ? e : Na[e] || Ht;
        let a, l;
        r !== Ht && "number" != typeof t[0] && (a = Ft(Ua, ji(t[0], t[1])), t = [0, 100]);
        const u = r({ ...this.options,
            keyframes: t
        });
        "mirror" === s && (l = r({ ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })), null === u.calculatedDuration && (u.calculatedDuration = ii(u));
        const {
            calculatedDuration: c
        } = u, h = c + i;
        return {
            generator: u,
            mirroredGenerator: l,
            mapPercentToKeyframes: a,
            calculatedDuration: c,
            resolvedDuration: h,
            totalDuration: h * (n + 1) - i
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
    }
    tick(t, e = !1) {
        const {
            resolved: n
        } = this;
        if (!n) {
            const {
                keyframes: t
            } = this.options;
            return {
                done: !0,
                value: t[t.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: s,
            mirroredGenerator: o,
            mapPercentToKeyframes: r,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c
        } = n;
        if (null === this.startTime) return s.next(0);
        const {
            delay: h,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const g = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
        this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
        let y = this.currentTime,
            x = s;
        if (d) {
            const t = Math.min(this.currentTime, u) / c;
            let e = Math.floor(t),
                n = t % 1;
            !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, d + 1), !!(e % 2) && ("reverse" === p ? (n = 1 - n, m && (n -= m / c)) : "mirror" === p && (x = o)), y = H(0, 1, n) * c
        }
        const P = v ? {
            done: !1,
            value: a[0]
        } : x.next(y);
        r && (P.value = r(P.value));
        let {
            done: T
        } = P;
        !v && null !== l && (T = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
        const S = null === this.holdTime && ("finished" === this.state || "running" === this.state && T);
        return S && void 0 !== i && (P.value = ee(a, this.options, i)), f && f(P.value), S && this.finish(), P
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? z(t.calculatedDuration) : 0
    }
    get time() {
        return z(this.currentTime)
    }
    set time(t) {
        t = G(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const e = this.playbackSpeed !== t;
        this.playbackSpeed = t, e && (this.time = z(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) return void(this.pendingPlayState = "running");
        if (this.isStopped) return;
        const {
            driver: t = ja,
            onPlay: e,
            startTime: n
        } = this.options;
        this.driver || (this.driver = t((t => this.tick(t)))), e && e();
        const i = this.driver.now();
        null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = i) : this.startTime = n ? ? this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        this._resolved ? (this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0) : this.pendingPlayState = "paused"
    }
    complete() {
        "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const _a = new Set(["opacity", "clipPath", "filter", "transform"]);

function Ka(t, e, n, {
    delay: i = 0,
    duration: s = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeInOut",
    times: l
} = {}) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const c = ai(a, s);
    return Array.isArray(c) && (u.easing = c), t.animate(u, {
        delay: i,
        duration: s,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: "reverse" === r ? "alternate" : "normal"
    })
}
const $a = Ne((() => Object.hasOwnProperty.call(Element.prototype, "animate"))),
    Xt = 10,
    Wa = 2e4;

function Ga(t) {
    return en(t.type) || "spring" === t.type || !oi(t.ease)
}

function za(t, e) {
    const n = new mn({ ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const s = [];
    let o = 0;
    for (; !i.done && o < Wa;) i = n.sample(o), s.push(i.value), o += 10;
    return {
        times: void 0,
        keyframes: s,
        duration: o - 10,
        ease: "linear"
    }
}
const Ki = {
    anticipate: Ti,
    backInOut: vi,
    circInOut: Pi
};

function Ha(t) {
    return t in Ki
}
class Gn extends Ii {
    constructor(t) {
        super(t);
        const {
            name: e,
            motionValue: n,
            element: i,
            keyframes: s
        } = this.options;
        this.resolver = new ki(s, ((t, e) => this.onKeyframesResolved(t, e)), e, n, i), this.resolver.scheduleResolve()
    }
    initPlayback(t, e) {
        let {
            duration: n = 300,
            times: i,
            ease: s,
            type: o,
            motionValue: r,
            name: a,
            startTime: l
        } = this.options;
        if (!r.owner || !r.owner.current) return !1;
        if ("string" == typeof s && Wt() && Ha(s) && (s = Ki[s]), Ga(this.options)) {
            const {
                onComplete: e,
                onUpdate: r,
                motionValue: a,
                element: l,
                ...u
            } = this.options, c = za(t, u);
            1 === (t = c.keyframes).length && (t[1] = t[0]), n = c.duration, i = c.times, s = c.ease, o = "keyframes"
        }
        const u = Ka(r.owner.current, a, t, { ...this.options,
            duration: n,
            times: i,
            ease: s
        });
        return u.startTime = l ? ? this.calcStartTime(), this.pendingTimeline ? (Dn(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
            const {
                onComplete: n
            } = this.options;
            r.set(ee(t, this.options, e)), n && n(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: u,
            duration: n,
            times: i,
            type: o,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: e
        } = t;
        return z(e)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: e
        } = t;
        return z(e.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.currentTime = G(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: e
        } = t;
        return e.playbackRate
    }
    set speed(t) {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: e
        } = t;
        return e.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: e
        } = t;
        return e.startTime
    }
    attachTimeline(t) {
        if (this._resolved) {
            const {
                resolved: e
            } = this;
            if (!e) return j;
            const {
                animation: n
            } = e;
            Dn(n, t)
        } else this.pendingTimeline = t;
        return j
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: e
        } = t;
        "finished" === e.playState && this.updateFinishedPromise(), e.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: e
        } = t;
        e.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: e,
            keyframes: n,
            duration: i,
            type: s,
            ease: o,
            times: r
        } = t;
        if ("idle" === e.playState || "finished" === e.playState) return;
        if (this.time) {
            const {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
            } = this.options, c = new mn({ ...u,
                keyframes: n,
                duration: i,
                type: s,
                ease: o,
                times: r,
                isGenerator: !0
            }), h = G(this.time);
            t.setWithVelocity(c.sample(h - 10).value, c.sample(h).value, 10)
        }
        const {
            onStop: a
        } = this.options;
        a && a(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: e,
            name: n,
            repeatDelay: i,
            repeatType: s,
            damping: o,
            type: r
        } = t;
        if (!(e && e.owner && e.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: a,
            transformTemplate: l
        } = e.owner.getProps();
        return $a() && n && _a.has(n) && !a && !l && !i && "mirror" !== s && 0 !== o && "inertia" !== r
    }
}
const Xa = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Ya = t => ({
        type: "spring",
        stiffness: 550,
        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    qa = {
        type: "keyframes",
        duration: .8
    },
    Za = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Ja = (t, {
        keyframes: e
    }) => e.length > 2 ? qa : rt.has(t) ? t.startsWith("scale") ? Ya(e[1]) : Xa : Za;

function Qa({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: i,
    staggerDirection: s,
    repeat: o,
    repeatType: r,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const gn = (t, e, n, i = {}, s, o) => r => {
    const a = tn(i, t) || {},
        l = a.delay || i.delay || 0;
    let {
        elapsed: u = 0
    } = i;
    u -= G(l);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: t => {
            e.set(t), a.onUpdate && a.onUpdate(t)
        },
        onComplete: () => {
            r(), a.onComplete && a.onComplete()
        },
        name: t,
        motionValue: e,
        element: o ? void 0 : s
    };
    Qa(a) || (c = { ...c,
        ...Ja(t, c)
    }), c.duration && (c.duration = G(c.duration)), c.repeatDelay && (c.repeatDelay = G(c.repeatDelay)), void 0 !== c.from && (c.keyframes[0] = c.from);
    let h = !1;
    if ((!1 === c.type || 0 === c.duration && !c.repeatDelay) && (c.duration = 0, 0 === c.delay && (h = !0)), h && !o && void 0 !== e.get()) {
        const t = ee(c.keyframes, a);
        if (void 0 !== t) return V.update((() => {
            c.onUpdate(t), c.onComplete()
        })), new yo([])
    }
    return !o && Gn.supports(c) ? new Gn(c) : new mn(c)
};

function tl({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const i = t.hasOwnProperty(n) && !0 !== e[n];
    return e[n] = !1, i
}

function $i(t, e, {
    delay: n = 0,
    transitionOverride: i,
    type: s
} = {}) {
    var o;
    let {
        transition: r = t.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = e;
    i && (r = i);
    const u = [],
        c = s && t.animationState && t.animationState.getState()[s];
    for (const e in l) {
        const i = t.getValue(e, null !== (o = t.latestValues[e]) && void 0 !== o ? o : null),
            s = l[e];
        if (void 0 === s || c && tl(c, e)) continue;
        const a = {
            delay: n,
            ...tn(r || {}, e)
        };
        let h = !1;
        if (window.MotionHandoffAnimation) {
            const n = di(t);
            if (n) {
                const t = window.MotionHandoffAnimation(n, e, V);
                null !== t && (a.startTime = t, h = !0)
            }
        }
        Te(t, e), i.start(gn(e, i, s, t.shouldReduceMotion && hi.has(e) ? {
            type: !1
        } : a, t, h));
        const d = i.animation;
        d && u.push(d)
    }
    return a && Promise.all(u).then((() => {
        V.update((() => {
            a && Lo(t, a)
        }))
    })), u
}

function we(t, e, n = {}) {
    var i;
    const s = Dt(t, e, "exit" === n.type ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
    let {
        transition: o = t.getDefaultTransition() || {}
    } = s || {};
    n.transitionOverride && (o = n.transitionOverride);
    const r = s ? () => Promise.all($i(t, s, n)) : () => Promise.resolve(),
        a = t.variantChildren && t.variantChildren.size ? (i = 0) => {
            const {
                delayChildren: s = 0,
                staggerChildren: r,
                staggerDirection: a
            } = o;
            return el(t, e, s + i, r, a, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = o;
    if (l) {
        const [t, e] = "beforeChildren" === l ? [r, a] : [a, r];
        return t().then((() => e()))
    }
    return Promise.all([r(), a(n.delay)])
}

function el(t, e, n = 0, i = 0, s = 1, o) {
    const r = [],
        a = (t.variantChildren.size - 1) * i,
        l = 1 === s ? (t = 0) => t * i : (t = 0) => a - t * i;
    return Array.from(t.variantChildren).sort(nl).forEach(((t, i) => {
        t.notify("AnimationStart", e), r.push(we(t, e, { ...o,
            delay: n + l(i)
        }).then((() => t.notify("AnimationComplete", e))))
    })), Promise.all(r)
}

function nl(t, e) {
    return t.sortNodePosition(e)
}

function sl(t, e, n = {}) {
    let i;
    if (t.notify("AnimationStart", e), Array.isArray(e)) {
        const s = e.map((e => we(t, e, n)));
        i = Promise.all(s)
    } else if ("string" == typeof e) i = we(t, e, n);
    else {
        const s = "function" == typeof e ? Dt(t, e, n.custom) : e;
        i = Promise.all($i(t, s, n))
    }
    return i.then((() => {
        t.notify("AnimationComplete", e)
    }))
}

function Wi(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}
const il = _e.length;

function Gi(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const e = t.parent && Gi(t.parent) || {};
        return void 0 !== t.props.initial && (e.initial = t.props.initial), e
    }
    const e = {};
    for (let n = 0; n < il; n++) {
        const i = _e[n],
            s = t.props[i];
        (Vt(s) || !1 === s) && (e[i] = s)
    }
    return e
}
const rl = [...Ue].reverse(),
    ol = Ue.length;

function al(t) {
    return e => Promise.all(e.map((({
        animation: e,
        options: n
    }) => sl(t, e, n))))
}

function ll(t) {
    let e = al(t),
        n = zn(),
        i = !0;
    const s = e => (n, i) => {
        var s;
        const o = Dt(t, i, "exit" === e ? null === (s = t.presenceContext) || void 0 === s ? void 0 : s.custom : void 0);
        if (o) {
            const {
                transition: t,
                transitionEnd: e,
                ...i
            } = o;
            n = { ...n,
                ...i,
                ...e
            }
        }
        return n
    };

    function o(o) {
        const {
            props: r
        } = t, a = Gi(t.parent) || {}, l = [], u = new Set;
        let c = {},
            h = 1 / 0;
        for (let e = 0; e < ol; e++) {
            const d = rl[e],
                p = n[d],
                m = void 0 !== r[d] ? r[d] : a[d],
                f = Vt(m),
                g = d === o ? p.isActive : null;
            !1 === g && (h = e);
            let v = m === a[d] && m !== r[d] && f;
            if (v && i && t.manuallyAnimateOnMount && (v = !1), p.protectedKeys = { ...c
                }, !p.isActive && null === g || !m && !p.prevProp || Qt(m) || "boolean" == typeof m) continue;
            const y = ul(p.prevProp, m);
            let x = y || d === o && p.isActive && !v && f || e > h && f,
                P = !1;
            const T = Array.isArray(m) ? m : [m];
            let S = T.reduce(s(d), {});
            !1 === g && (S = {});
            const {
                prevResolvedValues: w = {}
            } = p, b = { ...w,
                ...S
            }, A = e => {
                x = !0, u.has(e) && (P = !0, u.delete(e)), p.needsAnimating[e] = !0;
                const n = t.getValue(e);
                n && (n.liveStyle = !1)
            };
            for (const t in b) {
                const e = S[t],
                    n = w[t];
                if (c.hasOwnProperty(t)) continue;
                let i = !1;
                i = ge(e) && ge(n) ? !Wi(e, n) : e !== n, i ? null != e ? A(t) : u.add(t) : void 0 !== e && u.has(t) ? A(t) : p.protectedKeys[t] = !0
            }
            p.prevProp = m, p.prevResolvedValues = S, p.isActive && (c = { ...c,
                ...S
            }), i && t.blockInitialAnimation && (x = !1), x && (!v || !y || P) && l.push(...T.map((t => ({
                animation: t,
                options: {
                    type: d
                }
            }))))
        }
        if (u.size) {
            const e = {};
            if ("boolean" != typeof r.initial) {
                const n = Dt(t, Array.isArray(r.initial) ? r.initial[0] : r.initial);
                n && n.transition && (e.transition = n.transition)
            }
            u.forEach((n => {
                const i = t.getBaseTarget(n),
                    s = t.getValue(n);
                s && (s.liveStyle = !0), e[n] = i ? ? null
            })), l.push({
                animation: e
            })
        }
        let d = !!l.length;
        return i && (!1 === r.initial || r.initial === r.animate) && !t.manuallyAnimateOnMount && (d = !1), i = !1, d ? e(l) : Promise.resolve()
    }
    return {
        animateChanges: o,
        setActive: function(e, i) {
            var s;
            if (n[e].isActive === i) return Promise.resolve();
            null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
                var n;
                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
            })), n[e].isActive = i;
            const r = o(e);
            for (const t in n) n[t].protectedKeys = {};
            return r
        },
        setAnimateFunction: function(n) {
            e = n(t)
        },
        getState: () => n,
        reset: () => {
            n = zn(), i = !0
        }
    }
}

function ul(t, e) {
    return "string" == typeof e ? e !== t : !!Array.isArray(e) && !Wi(e, t)
}

function tt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function zn() {
    return {
        animate: tt(!0),
        whileInView: tt(),
        whileHover: tt(),
        whileTap: tt(),
        whileDrag: tt(),
        whileFocus: tt(),
        exit: tt()
    }
}
class Q {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class cl extends Q {
    constructor(t) {
        super(t), t.animationState || (t.animationState = ll(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        Qt(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: e
        } = this.node.prevProps || {};
        t !== e && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
    }
}
let hl = 0;
class fl extends Q {
    constructor() {
        super(...arguments), this.id = hl++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: e
        } = this.node.presenceContext, {
            isPresent: n
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === n) return;
        const i = this.node.animationState.setActive("exit", !t);
        e && !t && i.then((() => {
            e(this.id)
        }))
    }
    mount() {
        const {
            register: t,
            onExitComplete: e
        } = this.node.presenceContext || {};
        e && e(this.id), t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const dl = {
    animation: {
        Feature: cl
    },
    exit: {
        Feature: fl
    }
};

function Et(t, e, n, i = {
    passive: !0
}) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
}

function kt(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const pl = t => e => sn(e) && t(e, kt(e));

function ut(t, e, n, i) {
    return Et(t, e, pl(n), i)
}

function zi({
    top: t,
    left: e,
    right: n,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}

function ml({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function gl(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}
const Hi = 1e-4,
    yl = 1 - Hi,
    vl = 1 + Hi,
    Xi = .01,
    Tl = 0 - Xi,
    xl = .01;

function I(t) {
    return t.max - t.min
}

function Pl(t, e, n) {
    return Math.abs(t - e) <= n
}

function Hn(t, e, n, i = .5) {
    t.origin = i, t.originPoint = C(e.min, e.max, t.origin), t.scale = I(n) / I(e), t.translate = C(n.min, n.max, t.origin) - t.originPoint, (t.scale >= yl && t.scale <= vl || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Tl && t.translate <= xl || isNaN(t.translate)) && (t.translate = 0)
}

function At(t, e, n, i) {
    Hn(t.x, e.x, n.x, i ? i.originX : void 0), Hn(t.y, e.y, n.y, i ? i.originY : void 0)
}

function Xn(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + I(e)
}

function Sl(t, e, n) {
    Xn(t.x, e.x, n.x), Xn(t.y, e.y, n.y)
}

function Yn(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + I(e)
}

function bt(t, e, n) {
    Yn(t.x, e.x, n.x), Yn(t.y, e.y, n.y)
}
const qn = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    ct = () => ({
        x: qn(),
        y: qn()
    }),
    Zn = () => ({
        min: 0,
        max: 0
    }),
    M = () => ({
        x: Zn(),
        y: Zn()
    });

function U(t) {
    return [t("x"), t("y")]
}

function ue(t) {
    return void 0 === t || 1 === t
}

function Ce({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !ue(t) || !ue(e) || !ue(n)
}

function et(t) {
    return Ce(t) || Yi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Yi(t) {
    return Jn(t.x) || Jn(t.y)
}

function Jn(t) {
    return t && "0%" !== t
}

function Yt(t, e, n) {
    return n + e * (t - n)
}

function Qn(t, e, n, i, s) {
    return void 0 !== s && (t = Yt(t, s, i)), Yt(t, n, i) + e
}

function De(t, e = 0, n = 1, i, s) {
    t.min = Qn(t.min, e, n, i, s), t.max = Qn(t.max, e, n, i, s)
}

function qi(t, {
    x: e,
    y: n
}) {
    De(t.x, e.translate, e.scale, e.originPoint), De(t.y, n.translate, n.scale, n.originPoint)
}
const ts = .999999999999,
    es = 1.0000000000001;

function Al(t, e, n, i = !1) {
    const s = n.length;
    if (!s) return;
    let o, r;
    e.x = e.y = 1;
    for (let a = 0; a < s; a++) {
        o = n[a], r = o.projectionDelta;
        const {
            visualElement: s
        } = o.options;
        s && s.props.style && "contents" === s.props.style.display || (i && o.options.layoutScroll && o.scroll && o !== o.root && ft(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), r && (e.x *= r.x.scale, e.y *= r.y.scale, qi(t, r)), i && et(o.latestValues) && ft(t, o.latestValues))
    }
    e.x < es && e.x > ts && (e.x = 1), e.y < es && e.y > ts && (e.y = 1)
}

function ht(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function ns(t, e, n, i, s = .5) {
    De(t, e, n, C(t.min, t.max, s), i)
}

function ft(t, e) {
    ns(t.x, e.x, e.scaleX, e.scale, e.originX), ns(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Zi(t, e) {
    return zi(gl(t.getBoundingClientRect(), e))
}

function bl(t, e, n) {
    const i = Zi(t, n),
        {
            scroll: s
        } = e;
    return s && (ht(i.x, s.offset.x), ht(i.y, s.offset.y)), i
}
const ss = (t, e) => Math.abs(t - e);

function Vl(t, e) {
    const n = ss(t.x, e.x),
        i = ss(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
class Ji {
    constructor(t, e, {
        transformPagePoint: n,
        dragSnapToOrigin: i = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                const t = he(this.lastMoveEventInfo, this.history),
                    e = null !== this.startEvent,
                    n = Vl(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!e && !n) return;
                const {
                    point: i
                } = t, {
                    timestamp: s
                } = E;
                this.history.push({ ...i,
                    timestamp: s
                });
                const {
                    onStart: o,
                    onMove: r
                } = this.handlers;
                e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
                if (t.target instanceof Element && t.target.hasPointerCapture && void 0 !== t.pointerId) try {
                    if (!t.target.hasPointerCapture(t.pointerId)) return
                } catch {}
                this.lastMoveEvent = t, this.lastMoveEventInfo = ce(e, this.transformPagePoint), V.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
                Gt(t, "release"), this.end();
                const {
                    onEnd: n,
                    onSessionEnd: i,
                    resumeAnimation: s
                } = this.handlers;
                if (this.dragSnapToOrigin && s && s(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                const o = he("pointercancel" === t.type || "lostpointercapture" === t.type ? this.lastMoveEventInfo : ce(e, this.transformPagePoint), this.history);
                this.startEvent && n && n(t, o), i && i(t, o)
            }, !sn(t)) return;
        this.dragSnapToOrigin = i, this.handlers = e, this.transformPagePoint = n;
        const s = ce(kt(t), this.transformPagePoint),
            {
                point: o
            } = s,
            {
                timestamp: r
            } = E;
        this.history = [{ ...o,
            timestamp: r
        }];
        const {
            onSessionStart: a
        } = e;
        a && a(t, he(s, this.history)), Gt(t, "set"), this.removeListeners = Ft(ut(t.currentTarget, "pointermove", this.handlePointerMove), ut(t.currentTarget, "pointerup", this.handlePointerUp), ut(t.currentTarget, "pointercancel", this.handlePointerUp), ut(t.currentTarget, "lostpointercapture", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Z(this.updatePoint)
    }
}

function ce(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function is(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function he({
    point: t
}, e) {
    return {
        point: t,
        delta: is(t, Qi(e)),
        offset: is(t, wl(e)),
        velocity: Cl(e, .1)
    }
}

function wl(t) {
    return t[0]
}

function Qi(t) {
    return t[t.length - 1]
}

function Cl(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        i = null;
    const s = Qi(t);
    for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > G(e)));) n--;
    if (!i) return {
        x: 0,
        y: 0
    };
    const o = z(s.timestamp - i.timestamp);
    if (0 === o) return {
        x: 0,
        y: 0
    };
    const r = {
        x: (s.x - i.x) / o,
        y: (s.y - i.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}

function Dl(t, {
    min: e,
    max: n
}, i) {
    return void 0 !== e && t < e ? t = i ? C(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? C(n, t, i.max) : Math.min(t, n)), t
}

function rs(t, e, n) {
    return {
        min: void 0 !== e ? t.min + e : void 0,
        max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
    }
}

function Ml(t, {
    top: e,
    left: n,
    bottom: i,
    right: s
}) {
    return {
        x: rs(t.x, n, s),
        y: rs(t.y, e, i)
    }
}

function os(t, e) {
    let n = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
        min: n,
        max: i
    }
}

function Rl(t, e) {
    return {
        x: os(t.x, e.x),
        y: os(t.y, e.y)
    }
}

function El(t, e) {
    let n = .5;
    const i = I(t),
        s = I(e);
    return s > i ? n = dt(e.min, e.max - i, t.min) : i > s && (n = dt(t.min, t.max - s, e.min)), H(0, 1, n)
}

function Ll(t, e) {
    const n = {};
    return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
}
const Me = .35;

function Bl(t = Me) {
    return !1 === t ? t = 0 : !0 === t && (t = Me), {
        x: as(t, "left", "right"),
        y: as(t, "top", "bottom")
    }
}

function as(t, e, n) {
    return {
        min: ls(t, e),
        max: ls(t, n)
    }
}

function ls(t, e) {
    return "number" == typeof t ? t : t[e] || 0
}
const Fl = new WeakMap;
class kl {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = M(), this.visualElement = t
    }
    start(t, {
        snapToCursor: e = !1
    } = {}) {
        const {
            presenceContext: n
        } = this.visualElement;
        if (n && !1 === n.isPresent) return;
        const {
            dragSnapToOrigin: i
        } = this.getProps();
        this.panSession = new Ji(t, {
            onSessionStart: t => {
                const {
                    dragSnapToOrigin: n
                } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(kt(t).point)
            },
            onStart: (t, e) => {
                const {
                    drag: n,
                    dragPropagation: i,
                    onDragStart: s
                } = this.getProps();
                if (n && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = Co(n), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), U((t => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (K.test(e)) {
                        const {
                            projection: n
                        } = this.visualElement;
                        if (n && n.layout) {
                            const i = n.layout.layoutBox[t];
                            i && (e = I(i) * (parseFloat(e) / 100))
                        }
                    }
                    this.originPoint[t] = e
                })), s && V.postRender((() => s(t, e))), Te(this.visualElement, "transform");
                const {
                    animationState: o
                } = this.visualElement;
                o && o.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
                const {
                    dragPropagation: n,
                    dragDirectionLock: i,
                    onDirectionLock: s,
                    onDrag: o
                } = this.getProps();
                if (!n && !this.openDragLock) return;
                const {
                    offset: r
                } = e;
                if (i && null === this.currentDirection) return this.currentDirection = Il(r), void(null !== this.currentDirection && s && s(this.currentDirection));
                this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && o(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e),
            resumeAnimation: () => U((t => {
                var e;
                return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
            }))
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: i
        })
    }
    stop(t, e) {
        const n = this.isDragging;
        if (this.cancel(), !n) return;
        const {
            velocity: i
        } = e;
        this.startAnimation(i);
        const {
            onDragEnd: s
        } = this.getProps();
        s && V.postRender((() => s(t, e)))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: e
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: n
        } = this.getProps();
        !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
    }
    updateAxis(t, e, n) {
        const {
            drag: i
        } = this.getProps();
        if (!n || !Nt(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + n[t];
        this.constraints && this.constraints[t] && (o = Dl(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: e,
            dragElastic: n
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, s = this.constraints;
        e && at(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !i) && Ml(i.layoutBox, e), this.elastic = Bl(n), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && U((t => {
            !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = Ll(i.layoutBox[t], this.constraints[t]))
        }))
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: e
        } = this.getProps();
        if (!t || !at(t)) return !1;
        const n = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const s = bl(n, i.root, this.visualElement.getTransformPagePoint());
        let o = Rl(i.layout.layoutBox, s);
        if (e) {
            const t = e(ml(o));
            this.hasMutatedConstraints = !!t, t && (o = zi(t))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: r
        } = this.getProps(), a = this.constraints || {}, l = U((r => {
            if (!Nt(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            o && (l = {
                min: 0,
                max: 0
            });
            const u = i ? 200 : 1e6,
                c = i ? 40 : 1e7,
                h = {
                    type: "inertia",
                    velocity: n ? t[r] : 0,
                    bounceStiffness: u,
                    bounceDamping: c,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...l
                };
            return this.startAxisValueAnimation(r, h)
        }));
        return Promise.all(l).then(r)
    }
    startAxisValueAnimation(t, e) {
        const n = this.getAxisMotionValue(t);
        return Te(this.visualElement, t), n.start(gn(t, n, 0, e, this.visualElement, !1))
    }
    stopAnimation() {
        U((t => this.getAxisMotionValue(t).stop()))
    }
    pauseAnimation() {
        U((t => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
        }))
    }
    getAnimationState(t) {
        var e;
        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
    }
    getAxisMotionValue(t) {
        const e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
        return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        U((e => {
            const {
                drag: n
            } = this.getProps();
            if (!Nt(e, n, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(e);
            if (i && i.layout) {
                const {
                    min: n,
                    max: o
                } = i.layout.layoutBox[e];
                s.set(t[e] - C(n, o, .5))
            }
        }))
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: e
        } = this.getProps(), {
            projection: n
        } = this.visualElement;
        if (!at(e) || !n || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        U((t => {
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
                const n = e.get();
                i[t] = El({
                    min: n,
                    max: n
                }, this.constraints[t])
            }
        }));
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), U((e => {
            if (!Nt(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
                {
                    min: s,
                    max: o
                } = this.constraints[e];
            n.set(C(s, o, i[e]))
        }))
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Fl.set(this.visualElement, this);
        const t = ut(this.visualElement.current, "pointerdown", (t => {
                const {
                    drag: e,
                    dragListener: n = !0
                } = this.getProps();
                e && n && this.start(t)
            })),
            e = () => {
                const {
                    dragConstraints: t
                } = this.getProps();
                at(t) && t.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: n
            } = this.visualElement,
            i = n.addEventListener("measure", e);
        n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), V.read(e);
        const s = Et(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = n.addEventListener("didUpdate", (({
                delta: t,
                hasLayoutChanged: e
            }) => {
                this.isDragging && e && (U((e => {
                    const n = this.getAxisMotionValue(e);
                    n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                })), this.visualElement.render())
            }));
        return () => {
            s(), t(), i(), o && o()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: e = !1,
                dragDirectionLock: n = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = Me,
                dragMomentum: r = !0
            } = t;
        return { ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: r
        }
    }
}

function Nt(t, e, n) {
    return !(!0 !== e && e !== t || null !== n && n !== t)
}

function Il(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class Ol extends Q {
    constructor(t) {
        super(t), this.removeGroupControls = j, this.removeListeners = j, this.controls = new kl(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || j
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const us = t => (e, n) => {
    t && V.postRender((() => t(e, n)))
};
class jl extends Q {
    constructor() {
        super(...arguments), this.removePointerDownListener = j
    }
    onPointerDown(t) {
        this.session = new Ji(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: us(t),
            onStart: us(e),
            onMove: n,
            onEnd: (t, e) => {
                delete this.session, i && V.postRender((() => i(t, e)))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ut(this.node.current, "pointerdown", (t => this.onPointerDown(t)))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Kt = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function cs(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Tt = {
        correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
                if (!P.test(t)) return t;
                t = parseFloat(t)
            }
            return `${cs(t,e.target.x)}% ${cs(t,e.target.y)}%`
        }
    },
    Nl = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const i = t,
                s = J.parse(t);
            if (s.length > 5) return i;
            const o = J.createTransformer(t),
                r = "number" != typeof s[0] ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            s[0 + r] /= a, s[1 + r] /= l;
            const u = C(a, l, .5);
            return "number" == typeof s[2 + r] && (s[2 + r] /= u), "number" == typeof s[3 + r] && (s[3 + r] /= u), o(s)
        }
    };
class Ul extends Is {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        $r(_l), s && (e.group && e.group.add(s), n && n.register && i && n.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (() => {
            this.safeToRemove()
        })), s.setOptions({ ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), Kt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: e,
            visualElement: n,
            drag: i,
            isPresent: s
        } = this.props, o = n.projection;
        return o && (o.isPresent = s, i || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || V.postRender((() => {
            const t = o.getStack();
            (!t || !t.members.length) && this.safeToRemove()
        })))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), $e.postRender((() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        })))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function tr(t) {
    const [e, n] = Os(), i = B(ke);
    return q(Ul, { ...t,
        layoutGroup: i,
        switchLayoutGroup: B(Gs),
        isPresent: e,
        safeToRemove: n
    })
}
const _l = {
    borderRadius: { ...Tt,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Tt,
    borderTopRightRadius: Tt,
    borderBottomLeftRadius: Tt,
    borderBottomRightRadius: Tt,
    boxShadow: Nl
};

function Kl(t, e, n) {
    const i = F(t) ? t : Mt(t);
    return i.start(gn("", i, e, n)), i.animation
}

function $l(t) {
    return t instanceof SVGElement && "svg" !== t.tagName
}
const Wl = (t, e) => t.depth - e.depth;
class Gl {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        rn(this.children, t), this.isDirty = !0
    }
    remove(t) {
        on(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Wl), this.isDirty = !1, this.children.forEach(t)
    }
}

function zl(t, e) {
    const n = $.now(),
        i = ({
            timestamp: s
        }) => {
            const o = s - n;
            o >= e && (Z(i), t(o - e))
        };
    return V.read(i, !0), () => Z(i)
}
const er = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Hl = er.length,
    hs = t => "string" == typeof t ? parseFloat(t) : t,
    fs = t => "number" == typeof t || P.test(t);

function Xl(t, e, n, i, s, o) {
    s ? (t.opacity = C(0, void 0 !== n.opacity ? n.opacity : 1, Yl(i)), t.opacityExit = C(void 0 !== e.opacity ? e.opacity : 1, 0, ql(i))) : o && (t.opacity = C(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
    for (let s = 0; s < Hl; s++) {
        const o = `border${er[s]}Radius`;
        let r = ds(e, o),
            a = ds(n, o);
        void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || fs(r) === fs(a) ? (t[o] = Math.max(C(hs(r), hs(a), i), 0), (K.test(a) || K.test(r)) && (t[o] += "%")) : t[o] = a)
    }(e.rotate || n.rotate) && (t.rotate = C(e.rotate || 0, n.rotate || 0, i))
}

function ds(t, e) {
    return void 0 !== t[e] ? t[e] : t.borderRadius
}
const Yl = nr(0, .5, xi),
    ql = nr(.5, .95, j);

function nr(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n(dt(t, e, i))
}

function ps(t, e) {
    t.min = e.min, t.max = e.max
}

function N(t, e) {
    ps(t.x, e.x), ps(t.y, e.y)
}

function ms(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function gs(t, e, n, i, s) {
    return t = Yt(t -= e, 1 / n, i), void 0 !== s && (t = Yt(t, 1 / s, i)), t
}

function Zl(t, e = 0, n = 1, i = .5, s, o = t, r = t) {
    if (K.test(e) && (e = parseFloat(e), e = C(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
    let a = C(o.min, o.max, i);
    t === o && (a -= e), t.min = gs(t.min, e, n, a, s), t.max = gs(t.max, e, n, a, s)
}

function ys(t, e, [n, i, s], o, r) {
    Zl(t, e[n], e[i], e[s], e.scale, o, r)
}
const Jl = ["x", "scaleX", "originX"],
    Ql = ["y", "scaleY", "originY"];

function vs(t, e, n, i) {
    ys(t.x, e, Jl, n ? n.x : void 0, i ? i.x : void 0), ys(t.y, e, Ql, n ? n.y : void 0, i ? i.y : void 0)
}

function Ts(t) {
    return 0 === t.translate && 1 === t.scale
}

function sr(t) {
    return Ts(t.x) && Ts(t.y)
}

function xs(t, e) {
    return t.min === e.min && t.max === e.max
}

function tu(t, e) {
    return xs(t.x, e.x) && xs(t.y, e.y)
}

function Ps(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function ir(t, e) {
    return Ps(t.x, e.x) && Ps(t.y, e.y)
}

function Ss(t) {
    return I(t.x) / I(t.y)
}

function As(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class eu {
    constructor() {
        this.members = []
    }
    add(t) {
        rn(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (on(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }
    relegate(t) {
        const e = this.members.findIndex((e => t === e));
        if (0 === e) return !1;
        let n;
        for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
                n = e;
                break
            }
        }
        return !!n && (this.promote(n), !0)
    }
    promote(t, e) {
        const n = this.lead;
        if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
            n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, e && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            !1 === i && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t => {
            const {
                options: e,
                resumingFrom: n
            } = t;
            e.onExitComplete && e.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
        }))
    }
    scheduleRender() {
        this.members.forEach((t => {
            t.instance && t.scheduleRender(!1)
        }))
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function nu(t, e, n) {
    let i = "";
    const s = t.x.translate / e.x,
        o = t.y.translate / e.y,
        r = n ? .z || 0;
    if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (1 !== e.x || 1 !== e.y) && (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: t,
            rotate: e,
            rotateX: s,
            rotateY: o,
            skewX: r,
            skewY: a
        } = n;
        t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), s && (i += `rotateX(${s}deg) `), o && (i += `rotateY(${o}deg) `), r && (i += `skewX(${r}deg) `), a && (i += `skewY(${a}deg) `)
    }
    const a = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || "none"
}
const fe = ["", "X", "Y", "Z"],
    su = {
        visibility: "hidden"
    },
    bs = 1e3;
let iu = 0;

function de(t, e, n, i) {
    const {
        latestValues: s
    } = e;
    s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function rr(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const n = di(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: e,
            layoutId: i
        } = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", V, !(e || i))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && rr(i)
}

function or({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: i,
    resetTransform: s
}) {
    return class {
        constructor(t = {}, n = e ? .()) {
            this.id = iu++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(au), this.nodes.forEach(fu), this.nodes.forEach(du), this.nodes.forEach(lu)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Gl)
        }
        addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new an), this.eventHandlers.get(t).add(e)
        }
        notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            n && n.notify(...e)
        }
        hasListeners(t) {
            return this.eventHandlers.has(t)
        }
        mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = $l(e), this.instance = e;
            const {
                layoutId: i,
                layout: s,
                visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (s || i) && (this.isLayoutDirty = !0), t) {
                let n;
                const i = () => this.root.updateBlockedByResize = !1;
                t(e, (() => {
                    this.root.updateBlockedByResize = !0, n && n(), n = zl(i, 250), Kt.hasAnimatedSinceResize && (Kt.hasAnimatedSinceResize = !1, this.nodes.forEach(ws))
                }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || s) && this.addEventListener("didUpdate", (({
                delta: t,
                hasLayoutChanged: e,
                hasRelativeLayoutChanged: n,
                layout: i
            }) => {
                if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                const s = this.options.transition || o.getDefaultTransition() || vu,
                    {
                        onLayoutAnimationStart: r,
                        onLayoutAnimationComplete: a
                    } = o.getProps(),
                    l = !this.targetLayout || !ir(this.targetLayout, i),
                    u = !e && n;
                if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                    const e = { ...tn(s, "layout"),
                        onPlay: r,
                        onComplete: a
                    };
                    (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                } else e || ws(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = i
            }))
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Z(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pu), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
        }
        willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && rr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
                const e = this.path[t];
                e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
            }
            const {
                layoutId: e,
                layout: n
            } = this.options;
            if (void 0 === e && !n) return;
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Vs);
            this.isUpdating || this.nodes.forEach(cu), this.isUpdating = !1, this.nodes.forEach(hu), this.nodes.forEach(ru), this.nodes.forEach(ou), this.clearAllSnapshots();
            const t = $.now();
            E.delta = H(0, 1e3 / 60, t - E.timestamp), E.timestamp = t, E.isProcessing = !0, ie.update.process(E), ie.preRender.process(E), ie.render.process(E), E.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, $e.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(uu), this.sharedNodes.forEach(mu)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            V.postRender((() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !I(this.snapshot.measuredBox.x) && !I(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!(this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = M(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: e
            } = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
        }
        updateScroll(t = "measure") {
            let e = !(!this.options.layoutScroll || !this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                const e = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: t,
                    isRoot: e,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : e
                }
            }
        }
        resetTransform() {
            if (!s) return;
            const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                e = this.projectionDelta && !sr(this.projectionDelta),
                n = this.getTransformTemplate(),
                i = n ? n(this.latestValues, "") : void 0,
                o = i !== this.prevTransformTemplateValue;
            t && (e || et(this.latestValues) || o) && (s(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            return t && (n = this.removeTransform(n)), Tu(n), {
                animationId: this.root.animationId,
                measuredBox: e,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var t;
            const {
                visualElement: e
            } = this.options;
            if (!e) return M();
            const n = e.measureViewportBox();
            if (!(null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) && !this.path.some(xu)) {
                const {
                    scroll: t
                } = this.root;
                t && (ht(n.x, t.offset.x), ht(n.y, t.offset.y))
            }
            return n
        }
        removeElementScroll(t) {
            var e;
            const n = M();
            if (N(n, t), null !== (e = this.scroll) && void 0 !== e && e.wasRoot) return n;
            for (let e = 0; e < this.path.length; e++) {
                const i = this.path[e],
                    {
                        scroll: s,
                        options: o
                    } = i;
                i !== this.root && s && o.layoutScroll && (s.wasRoot && N(n, t), ht(n.x, s.offset.x), ht(n.y, s.offset.y))
            }
            return n
        }
        applyTransform(t, e = !1) {
            const n = M();
            N(n, t);
            for (let t = 0; t < this.path.length; t++) {
                const i = this.path[t];
                !e && i.options.layoutScroll && i.scroll && i !== i.root && ft(n, {
                    x: -i.scroll.offset.x,
                    y: -i.scroll.offset.y
                }), et(i.latestValues) && ft(n, i.latestValues)
            }
            return et(this.latestValues) && ft(n, this.latestValues), n
        }
        removeTransform(t) {
            const e = M();
            N(e, t);
            for (let t = 0; t < this.path.length; t++) {
                const n = this.path[t];
                if (!n.instance || !et(n.latestValues)) continue;
                Ce(n.latestValues) && n.updateSnapshot();
                const i = M();
                N(i, n.measurePageBox()), vs(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, i)
            }
            return et(this.latestValues) && vs(e, this.latestValues), e
        }
        setTargetDelta(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(t) {
            this.options = { ...this.options,
                ...t,
                crossfade: void 0 === t.crossfade || t.crossfade
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== E.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(t = !1) {
            var e;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const i = !!this.resumingFrom || this !== n;
            if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || null !== (e = this.parent) && void 0 !== e && e.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: s,
                layoutId: o
            } = this.options;
            if (this.layout && (s || o)) {
                if (this.resolvedRelativeTargetAt = E.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const t = this.getClosestProjectingParent();
                    t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), bt(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = M(), this.targetWithTransforms = M()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Sl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox), qi(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const t = this.getClosestProjectingParent();
                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), bt(this.relativeTargetOrigin, this.target, t.target), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (this.parent && !Ce(this.parent.latestValues) && !Yi(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !(!(this.relativeTarget || this.targetDelta || this.options.layoutRoot) || !this.layout)
        }
        calcProjection() {
            var t;
            const e = this.getLead(),
                n = !!this.resumingFrom || this !== e;
            let i = !0;
            if ((this.isProjectionDirty || !(null === (t = this.parent) || void 0 === t) && t.isProjectionDirty) && (i = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === E.timestamp && (i = !1), i) return;
            const {
                layout: s,
                layoutId: o
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !s && !o) return;
            N(this.layoutCorrected, this.layout.layoutBox);
            const r = this.treeScale.x,
                a = this.treeScale.y;
            Al(this.layoutCorrected, this.treeScale, this.path, n), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = M());
            const {
                target: l
            } = e;
            l ? (this.projectionDelta && this.prevProjectionDelta ? (ms(this.prevProjectionDelta.x, this.projectionDelta.x), ms(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), At(this.projectionDelta, this.layoutCorrected, l, this.latestValues), (this.treeScale.x !== r || this.treeScale.y !== a || !As(this.projectionDelta.x, this.prevProjectionDelta.x) || !As(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(t = !0) {
            var e;
            if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                const t = this.getStack();
                t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ct(), this.projectionDelta = ct(), this.projectionDeltaWithTransform = ct()
        }
        setAnimationOrigin(t, e = !1) {
            const n = this.snapshot,
                i = n ? n.latestValues : {},
                s = { ...this.latestValues
                },
                o = ct();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const r = M(),
                a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                l = this.getStack(),
                u = !l || l.members.length <= 1,
                c = !(!a || u || !0 !== this.options.crossfade || this.path.some(yu));
            let h;
            this.animationProgress = 0, this.mixTargetDelta = e => {
                const n = e / 1e3;
                Cs(o.x, t.x, n), Cs(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bt(r, this.layout.layoutBox, this.relativeParent.layout.layoutBox), gu(this.relativeTarget, this.relativeTargetOrigin, r, n), h && tu(this.relativeTarget, h) && (this.isProjectionDirty = !1), h || (h = M()), N(h, this.relativeTarget)), a && (this.animationValues = s, Xl(s, i, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Z(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update((() => {
                Kt.hasAnimatedSinceResize = !0, this.currentAnimation = Kl(0, bs, { ...t,
                    onUpdate: e => {
                        this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        t.onComplete && t.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const t = this.getStack();
            t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bs), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const t = this.getLead();
            let {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: s
            } = t;
            if (e && n && i) {
                if (this !== t && this.layout && i && ar(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                    n = this.target || M();
                    const e = I(this.layout.layoutBox.x);
                    n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                    const i = I(this.layout.layoutBox.y);
                    n.y.min = t.target.y.min, n.y.max = n.y.min + i
                }
                N(e, n), ft(e, s), At(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
            }
        }
        registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eu), this.sharedNodes.get(t).add(e);
            const n = e.options.initialPromotionConfig;
            e.promote({
                transition: n ? n.transition : void 0,
                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
            })
        }
        isLead() {
            const t = this.getStack();
            return !t || t.lead === this
        }
        getLead() {
            var t;
            const {
                layoutId: e
            } = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
        }
        getPrevLead() {
            var t;
            const {
                layoutId: e
            } = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
        }
        promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n
        } = {}) {
            const i = this.getStack();
            i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                transition: e
            })
        }
        relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
        }
        resetSkewAndRotation() {
            const {
                visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
                latestValues: n
            } = t;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (e = !0), !e) return;
            const i = {};
            n.z && de("z", t, i, this.animationValues);
            for (let e = 0; e < fe.length; e++) de(`rotate${fe[e]}`, t, i, this.animationValues), de(`skew${fe[e]}`, t, i, this.animationValues);
            t.render();
            for (const e in i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender()
        }
        getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return su;
            const i = {
                    visibility: ""
                },
                s = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = Ut(t ? .pointerEvents) || "", i.transform = s ? s(this.latestValues, "") : "none", i;
            const o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
                const e = {};
                return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = Ut(t ? .pointerEvents) || ""), this.hasProjected && !et(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
            }
            const r = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(), i.transform = nu(this.projectionDeltaWithTransform, this.treeScale, r), s && (i.transform = s(r, i.transform));
            const {
                x: a,
                y: l
            } = this.projectionDelta;
            i.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, o.animationValues ? i.opacity = o === this ? null !== (n = null !== (e = r.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : i.opacity = o === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0;
            for (const t in wt) {
                if (void 0 === r[t]) continue;
                const {
                    correct: e,
                    applyTo: n,
                    isCSSVariable: s
                } = wt[t], a = "none" === i.transform ? r[t] : e(r[t], o);
                if (n) {
                    const t = n.length;
                    for (let e = 0; e < t; e++) i[n[e]] = a
                } else s ? this.options.visualElement.renderState.vars[t] = a : i[t] = a
            }
            return this.options.layoutId && (i.pointerEvents = o === this ? Ut(t ? .pointerEvents) || "" : "none"), i
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach((t => {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(Vs), this.root.sharedNodes.clear()
        }
    }
}

function ru(t) {
    t.updateLayout()
}

function ou(t) {
    var e;
    const n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {
            layoutBox: e,
            measuredBox: i
        } = t.layout, {
            animationType: s
        } = t.options, o = n.source !== t.layout.source;
        "size" === s ? U((t => {
            const i = o ? n.measuredBox[t] : n.layoutBox[t],
                s = I(i);
            i.min = e[t].min, i.max = i.min + s
        })) : ar(s, n.layoutBox, e) && U((i => {
            const s = o ? n.measuredBox[i] : n.layoutBox[i],
                r = I(e[i]);
            s.max = s.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + r)
        }));
        const r = ct();
        At(r, e, n.layoutBox);
        const a = ct();
        o ? At(a, t.applyTransform(i, !0), n.measuredBox) : At(a, e, n.layoutBox);
        const l = !sr(r);
        let u = !1;
        if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
                const {
                    snapshot: s,
                    layout: o
                } = i;
                if (s && o) {
                    const r = M();
                    bt(r, n.layoutBox, s.layoutBox);
                    const a = M();
                    bt(a, e, o.layoutBox), ir(r, a) || (u = !0), i.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = r, t.relativeParent = i)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: e
        } = t.options;
        e && e()
    }
    t.options.transition = void 0
}

function au(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function lu(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function uu(t) {
    t.clearSnapshot()
}

function Vs(t) {
    t.clearMeasurements()
}

function cu(t) {
    t.isLayoutDirty = !1
}

function hu(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function ws(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function fu(t) {
    t.resolveTargetDelta()
}

function du(t) {
    t.calcProjection()
}

function pu(t) {
    t.resetSkewAndRotation()
}

function mu(t) {
    t.removeLeadSnapshot()
}

function Cs(t, e, n) {
    t.translate = C(e.translate, 0, n), t.scale = C(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function Ds(t, e, n, i) {
    t.min = C(e.min, n.min, i), t.max = C(e.max, n.max, i)
}

function gu(t, e, n, i) {
    Ds(t.x, e.x, n.x, i), Ds(t.y, e.y, n.y, i)
}

function yu(t) {
    return t.animationValues && void 0 !== t.animationValues.opacityExit
}
const vu = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Ms = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    Rs = Ms("applewebkit/") && !Ms("chrome/") ? Math.round : j;

function Es(t) {
    t.min = Rs(t.min), t.max = Rs(t.max)
}

function Tu(t) {
    Es(t.x), Es(t.y)
}

function ar(t, e, n) {
    return "position" === t || "preserve-aspect" === t && !Pl(Ss(e), Ss(n), .2)
}

function xu(t) {
    var e;
    return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
}
const Pu = or({
        attachResizeListener: (t, e) => Et(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    pe = {
        current: void 0
    },
    lr = or({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!pe.current) {
                const t = new Pu({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), pe.current = t
            }
            return pe.current
        },
        resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
        },
        checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
    }),
    Su = {
        pan: {
            Feature: jl
        },
        drag: {
            Feature: Ol,
            ProjectionNode: lr,
            MeasureLayout: tr
        }
    };

function Ls(t, e, n) {
    const {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === n);
    const s = i["onHover" + n];
    s && V.postRender((() => s(e, kt(e))))
}
class Au extends Q {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Po(t, ((t, e) => (Ls(this.node, e, "Start"), t => Ls(this.node, t, "End")))))
    }
    unmount() {}
}
class bu extends Q {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Ft(Et(this.node.current, "focus", (() => this.onFocus())), Et(this.node.current, "blur", (() => this.onBlur())))
    }
    unmount() {}
}

function Bs(t, e, n) {
    const {
        props: i
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === n);
    const s = i["onTap" + ("End" === n ? "" : n)];
    s && V.postRender((() => s(e, kt(e))))
}
class Vu extends Q {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Vo(t, ((t, e) => (Bs(this.node, e, "Start"), (t, {
            success: e
        }) => Bs(this.node, t, e ? "End" : "Cancel"))), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Re = new WeakMap,
    me = new WeakMap,
    wu = t => {
        const e = Re.get(t.target);
        e && e(t)
    },
    Cu = t => {
        t.forEach(wu)
    };

function Du({
    root: t,
    ...e
}) {
    const n = t || document;
    me.has(n) || me.set(n, {});
    const i = me.get(n),
        s = JSON.stringify(e);
    return i[s] || (i[s] = new IntersectionObserver(Cu, {
        root: t,
        ...e
    })), i[s]
}

function Mu(t, e, n) {
    const i = Du(e);
    return Re.set(t, n), i.observe(t), () => {
        Re.delete(t), i.unobserve(t)
    }
}
const Ru = {
    some: 0,
    all: 1
};
class Eu extends Q {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: e,
            margin: n,
            amount: i = "some",
            once: s
        } = t, o = {
            root: e ? e.current : void 0,
            rootMargin: n,
            threshold: "number" == typeof i ? i : Ru[i]
        };
        return Mu(this.node.current, o, (t => {
            const {
                isIntersecting: e
            } = t;
            if (this.isInView === e || (this.isInView = e, s && !e && this.hasEnteredView)) return;
            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
            const {
                onViewportEnter: n,
                onViewportLeave: i
            } = this.node.getProps(), o = e ? n : i;
            o && o(t)
        }))
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: e
        } = this.node;
        ["amount", "margin", "root"].some(Lu(t, e)) && this.startObserver()
    }
    unmount() {}
}

function Lu({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const Bu = {
        inView: {
            Feature: Eu
        },
        tap: {
            Feature: Vu
        },
        focus: {
            Feature: bu
        },
        hover: {
            Feature: Au
        }
    },
    Fu = {
        layout: {
            ProjectionNode: lr,
            MeasureLayout: tr
        }
    },
    Ee = {
        current: null
    },
    ur = {
        current: !1
    };

function ku() {
    if (ur.current = !0, je)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Ee.current = t.matches;
            t.addListener(e), e()
        } else Ee.current = !1
}
const Iu = [...Fi, L, J],
    Ou = t => Iu.find(Bi(t)),
    ju = new WeakMap;

function Nu(t, e, n) {
    for (const i in e) {
        const s = e[i],
            o = n[i];
        if (F(s)) t.addValue(i, s);
        else if (F(o)) t.addValue(i, Mt(s, {
            owner: t
        }));
        else if (o !== s)
            if (t.hasValue(i)) {
                const e = t.getValue(i);
                !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
            } else {
                const e = t.getStaticValue(i);
                t.addValue(i, Mt(void 0 !== e ? e : s, {
                    owner: t
                }))
            }
    }
    for (const i in n) void 0 === e[i] && t.removeValue(i);
    return e
}
const Fs = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Uu {
    scrapeMotionValuesFromProps(t, e, n) {
        return {}
    }
    constructor({
        parent: t,
        props: e,
        presenceContext: n,
        reducedMotionConfig: i,
        blockInitialAnimation: s,
        visualState: o
    }, r = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = dn, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const t = $.now();
            this.renderScheduledAt < t && (this.renderScheduledAt = t, V.render(this.render, !1, !0))
        };
        const {
            latestValues: a,
            renderState: l,
            onUpdate: u
        } = o;
        this.onUpdate = u, this.latestValues = a, this.baseTarget = { ...a
        }, this.initialValues = e.initial ? { ...a
        } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = r, this.blockInitialAnimation = !!s, this.isControllingVariants = te(e), this.isVariantNode = $s(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !(!t || !t.current);
        const {
            willChange: c,
            ...h
        } = this.scrapeMotionValuesFromProps(e, {}, this);
        for (const t in h) {
            const e = h[t];
            void 0 !== a[t] && F(e) && e.set(a[t], !1)
        }
    }
    mount(t) {
        this.current = t, ju.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), ur.current || ku(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Ee.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), Z(this.notifyUpdate), Z(this.render), this.valueSubscriptions.forEach((t => t())), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const e = this.features[t];
            e && (e.unmount(), e.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, e) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const n = rt.has(t);
        n && this.onBindTransform && this.onBindTransform();
        const i = e.on("change", (e => {
                this.latestValues[t] = e, this.props.onUpdate && V.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            s = e.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, (() => {
            i(), s(), o && o(), e.owner && e.stop()
        }))
    }
    sortNodePosition(t) {
        return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
    }
    updateFeatures() {
        let t = "animation";
        for (t in pt) {
            const e = pt[t];
            if (!e) continue;
            const {
                isEnabled: n,
                Feature: i
            } = e;
            if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const e = this.features[t];
                e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : M()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, e) {
        this.latestValues[t] = e
    }
    update(t, e) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
        for (let e = 0; e < Fs.length; e++) {
            const n = Fs[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
        }
        this.prevMotionValues = Nu(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const e = this.getClosestVariantNode();
        if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
    }
    addValue(t, e) {
        const n = this.values.get(t);
        e !== n && (n && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const e = this.valueSubscriptions.get(t);
        e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, e) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let n = this.values.get(t);
        return void 0 === n && void 0 !== e && (n = Mt(null === e ? void 0 : e, {
            owner: this
        }), this.addValue(t, n)), n
    }
    readValue(t, e) {
        var n;
        let i = void 0 === this.latestValues[t] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, t)) && void 0 !== n ? n : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
        return null != i && ("string" == typeof i && (Ei(i) || Si(i)) ? i = parseFloat(i) : !Ou(i) && J.test(e) && (i = Di(t, e)), this.setBaseTarget(t, F(i) ? i.get() : i)), F(i) ? i.get() : i
    }
    setBaseTarget(t, e) {
        this.baseTarget[t] = e
    }
    getBaseTarget(t) {
        var e;
        const {
            initial: n
        } = this.props;
        let i;
        if ("string" == typeof n || "object" == typeof n) {
            const s = Je(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
            s && (i = s[t])
        }
        if (n && void 0 !== i) return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return void 0 === s || F(s) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : s
    }
    on(t, e) {
        return this.events[t] || (this.events[t] = new an), this.events[t].add(e)
    }
    notify(t, ...e) {
        this.events[t] && this.events[t].notify(...e)
    }
}
class cr extends Uu {
    constructor() {
        super(...arguments), this.KeyframeResolver = ki
    }
    sortInstanceNodePosition(t, e) {
        return 2 & t.compareDocumentPosition(e) ? 1 : -1
    }
    getBaseTargetFromProps(t, e) {
        return t.style ? t.style[e] : void 0
    }
    removeValueFromRenderState(t, {
        vars: e,
        style: n
    }) {
        delete e[t], delete n[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        F(t) && (this.childSubscription = t.on("change", (t => {
            this.current && (this.current.textContent = `${t}`)
        })))
    }
}

function _u(t) {
    return window.getComputedStyle(t)
}
class Ku extends cr {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = ti
    }
    readValueFromInstance(t, e) {
        if (rt.has(e)) {
            const t = fn(e);
            return t && t.default || 0
        } {
            const n = _u(t),
                i = (We(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: e
    }) {
        return Zi(t, e)
    }
    build(t, e, n) {
        He(t, e, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return Qe(t, e, n)
    }
}
class $u extends cr {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = M, this.updateDimensions = () => {
            this.current && !this.renderState.dimensions && Qs(this.current, this.renderState)
        }
    }
    getBaseTargetFromProps(t, e) {
        return t[e]
    }
    readValueFromInstance(t, e) {
        if (rt.has(e)) {
            const t = fn(e);
            return t && t.default || 0
        }
        return e = ei.has(e) ? e : Ke(e), t.getAttribute(e)
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return si(t, e, n)
    }
    onBindTransform() {
        this.current && !this.renderState.dimensions && V.postRender(this.updateDimensions)
    }
    build(t, e, n) {
        qe(t, e, this.isSVGTag, n.transformTemplate)
    }
    renderInstance(t, e, n, i) {
        ni(t, e, n, i)
    }
    mount(t) {
        this.isSVGTag = Ze(t.tagName), super.mount(t)
    }
}
const Wu = (t, e) => Ye(t) ? new $u(e) : new Ku(e, {
        allowProjection: t !== Fe
    }),
    Gu = po({ ...dl,
        ...Bu,
        ...Su,
        ...Fu
    }, Wu),
    tc = Mr(Gu);
export {
    Ju as A, Oe as M, sl as a, js as b, Cr as l, tc as m, Lo as s, Ie as u
};