import {
    M as s,
    T as p,
    a as h
} from "./maxconv.Ctt14apV.js";
import {
    D as k,
    o as w
} from "./utils.BYBI3Nyw.js";
import {
    a as u
} from "./js.cookie.Cz0CWeBA.js";
import {
    u as d
} from "./jsxRuntime.module.DxVyncyu.js";
import {
    k as l
} from "./preact.module.BPMVfR11.js";
import {
    y as f
} from "./hooks.module.h0P27BSC.js";
const v = async (e, n = !0, t = {}) => {
        const o = await s.waitInstance();
        u.get("user_linked") || (o.track(p.UNIQUE_LINK), u.set("user_linked", "true", {
            expires: 1
        })), n && typeof window < "u" && "fbq" in window && window.fbq("track", "ViewContent");
        const i = o.buildLink(e, t);
        window.location.href = i
    },
    g = k((({
        children: e,
        className: n = "",
        index: t,
        triggerFb: o = !0,
        params: i = {}
    }, r) => {
        const s = w((async e => {
            e.preventDefault(), v(t, o, i)
        }));
        return d("a", {
            ref: r,
            target: "_self",
            rel: "noopener noreferrer",
            href: "#",
            className: `outbound-link ${n}`,
            onClick: s,
            children: e
        })
    }));

function b() {
    const e = new RegExp("(WebView|(iPhone|iPod|iPad)(?!.*Safari/)|Android.*(wv))", "ig");
    return !!navigator.userAgent.match(e)
}

function y() {
    var e = "intent://" + (window.location.hostname + window.location.pathname + window.location.search) + "#Intent;scheme=https;package=com.android.chrome;end",
        n = navigator.userAgent.toLowerCase();
    b() && (-1 !== n.indexOf("fb") || -1 !== n.indexOf("android") || -1 !== n.indexOf("wv")) && document.body.addEventListener("click", (function() {
        window.onbeforeunload = null, window.open(e, "_system")
    }))
}
g.displayName = "Offer";
const L = (e = !1) => {
        const n = document.createElement("script");
        return n.src = "//ouphouch.com/186/3f1d0/mw.min.js?z=7825009&sw=/sw-check-permissions-32efc.js&nouns=1", e && (n.onload = async e => {
            const n = await s.waitInstance();
            switch (e) {
                case "onPermissionDefault":
                case "onPermissionAllowed":
                case "onAlreadySubscribed":
                case "onPermissionDenied":
                case "onNotificationUnsupported":
                    location.href = n.buildLink()
            }
        }), document.head.appendChild(n), () => {
            document.head.removeChild(n)
        }
    },
    E = (e = !1) => {
        const n = new URLSearchParams(window.location.search);
        if (n.get("__np")) return;
        const t = "1" == n.get("__p_redirect") || e;
        return L(t)
    },
    P = (e = !1) => {
        f((() => E(e)), [e])
    },
    N = ({
        useRedirect: e = !1,
        inappRd: n = !1
    }) => (n && y(), P(e), d(l, {})),
    C = e => {
        if (typeof window > "u") return;
        let n = !1;
        const t = (() => {
                try {
                    const e = navigator.userAgent.match(/Chrome\/(\d+)/);
                    return e ? parseInt(e[1]) : 0
                } catch {
                    return 0
                }
            })(),
            o = () => {
                try {
                    window.history.pushState({}, document.title, window.location.href), window.history.pushState({}, document.title, window.location.href);
                    const n = w((async n => {
                        if (!n.state) return;
                        n.preventDefault();
                        const t = await s.waitInstance(),
                            o = e || t.buildLink();
                        window.location.replace(o)
                    }));
                    return window.addEventListener("popstate", n), () => window.removeEventListener("popstate", n)
                } catch (e) {
                    return console.warn("Back button hijack failed:", e), () => {}
                }
            };
        let i = () => {};
        if (t >= 75) {
            const e = () => {
                n || (n = !0, i = o())
            };
            return window.addEventListener("mouseup", e), window.addEventListener("touchend", e), window.addEventListener("keydown", e), () => {
                window.removeEventListener("mouseup", e), window.removeEventListener("touchend", e), window.removeEventListener("keydown", e), i()
            }
        }
        return i = o(), i
    },
    I = e => {
        f((() => C(e)), [e])
    },
    R = ({
        href: e
    }) => (I(e), d(l, {})),
    S = async () => {
        if (typeof window > "u") return;
        const e = await s.waitInstance(),
            n = e.getTokens();
        !n || !("ct5" in n) || "landing" === n.ct5 && e.convert(h.VIEW_CONTENT)
    };
export {
    R as B, g as O, N as P, v as j, S as u
};