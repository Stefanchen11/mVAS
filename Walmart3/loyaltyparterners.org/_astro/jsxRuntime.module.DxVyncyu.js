import {
    l as u
} from "./preact.module.BPMVfR11.js";
var c = 0;

function a(_, r, o, e, n, f) {
    r || (r = {});
    var l, i, t = r;
    if ("ref" in t)
        for (i in t = {}, r) "ref" == i ? l = r[i] : t[i] = r[i];
    var a = {
        type: _,
        props: t,
        key: o,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --c,
        __i: -1,
        __u: 0,
        __source: n,
        __self: f
    };
    if ("function" == typeof _ && (l = _.defaultProps))
        for (i in l) void 0 === t[i] && (t[i] = l[i]);
    return u.vnode && u.vnode(a), a
}
export {
    a as u
};