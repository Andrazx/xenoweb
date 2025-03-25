import {r as y, R as X0, F as Q0} from "./monaco-Dj3DcQT7.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var Ff = {
    exports: {}
}
  , $s = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y0 = y
  , Z0 = Symbol.for("react.element")
  , J0 = Symbol.for("react.fragment")
  , q0 = Object.prototype.hasOwnProperty
  , eg = Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , tg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Of(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        q0.call(t, r) && !tg.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Z0,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: eg.current
    }
}
$s.Fragment = J0;
$s.jsx = Of;
$s.jsxs = Of;
Ff.exports = $s;
var l = Ff.exports
  , zf = {
    exports: {}
}
  , Be = {}
  , Bf = {
    exports: {}
}
  , Uf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, V) {
        var L = M.length;
        M.push(V);
        e: for (; 0 < L; ) {
            var W = L - 1 >>> 1
              , re = M[W];
            if (0 < i(re, V))
                M[W] = V,
                M[L] = re,
                L = W;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function r(M) {
        if (M.length === 0)
            return null;
        var V = M[0]
          , L = M.pop();
        if (L !== V) {
            M[0] = L;
            e: for (var W = 0, re = M.length, Je = re >>> 1; W < Je; ) {
                var vt = 2 * (W + 1) - 1
                  , yr = M[vt]
                  , yt = vt + 1
                  , lt = M[yt];
                if (0 > i(yr, L))
                    yt < re && 0 > i(lt, yr) ? (M[W] = lt,
                    M[yt] = L,
                    W = yt) : (M[W] = yr,
                    M[vt] = L,
                    W = vt);
                else if (yt < re && 0 > i(lt, L))
                    M[W] = lt,
                    M[yt] = L,
                    W = yt;
                else
                    break e
            }
        }
        return V
    }
    function i(M, V) {
        var L = M.sortIndex - V.sortIndex;
        return L !== 0 ? L : M.id - V.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var u = []
      , c = []
      , d = 1
      , f = null
      , h = 3
      , v = !1
      , x = !1
      , w = !1
      , N = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(M) {
        for (var V = n(c); V !== null; ) {
            if (V.callback === null)
                r(c);
            else if (V.startTime <= M)
                r(c),
                V.sortIndex = V.expirationTime,
                t(u, V);
            else
                break;
            V = n(c)
        }
    }
    function j(M) {
        if (w = !1,
        g(M),
        !x)
            if (n(u) !== null)
                x = !0,
                At(k);
            else {
                var V = n(c);
                V !== null && Y(j, V.startTime - M)
            }
    }
    function k(M, V) {
        x = !1,
        w && (w = !1,
        m(C),
        C = -1),
        v = !0;
        var L = h;
        try {
            for (g(V),
            f = n(u); f !== null && (!(f.expirationTime > V) || M && !O()); ) {
                var W = f.callback;
                if (typeof W == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var re = W(f.expirationTime <= V);
                    V = e.unstable_now(),
                    typeof re == "function" ? f.callback = re : f === n(u) && r(u),
                    g(V)
                } else
                    r(u);
                f = n(u)
            }
            if (f !== null)
                var Je = !0;
            else {
                var vt = n(c);
                vt !== null && Y(j, vt.startTime - V),
                Je = !1
            }
            return Je
        } finally {
            f = null,
            h = L,
            v = !1
        }
    }
    var b = !1
      , E = null
      , C = -1
      , _ = 5
      , A = -1;
    function O() {
        return !(e.unstable_now() - A < _)
    }
    function oe() {
        if (E !== null) {
            var M = e.unstable_now();
            A = M;
            var V = !0;
            try {
                V = E(!0, M)
            } finally {
                V ? ae() : (b = !1,
                E = null)
            }
        } else
            b = !1
    }
    var ae;
    if (typeof p == "function")
        ae = function() {
            p(oe)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var at = new MessageChannel
          , Ei = at.port2;
        at.port1.onmessage = oe,
        ae = function() {
            Ei.postMessage(null)
        }
    } else
        ae = function() {
            N(oe, 0)
        }
        ;
    function At(M) {
        E = M,
        b || (b = !0,
        ae())
    }
    function Y(M, V) {
        C = N(function() {
            M(e.unstable_now())
        }, V)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || v || (x = !0,
        At(k))
    }
    ,
    e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(M) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var V = 3;
            break;
        default:
            V = h
        }
        var L = h;
        h = V;
        try {
            return M()
        } finally {
            h = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(M, V) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var L = h;
        h = M;
        try {
            return V()
        } finally {
            h = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(M, V, L) {
        var W = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? W + L : W) : L = W,
        M) {
        case 1:
            var re = -1;
            break;
        case 2:
            re = 250;
            break;
        case 5:
            re = 1073741823;
            break;
        case 4:
            re = 1e4;
            break;
        default:
            re = 5e3
        }
        return re = L + re,
        M = {
            id: d++,
            callback: V,
            priorityLevel: M,
            startTime: L,
            expirationTime: re,
            sortIndex: -1
        },
        L > W ? (M.sortIndex = L,
        t(c, M),
        n(u) === null && M === n(c) && (w ? (m(C),
        C = -1) : w = !0,
        Y(j, L - W))) : (M.sortIndex = re,
        t(u, M),
        x || v || (x = !0,
        At(k))),
        M
    }
    ,
    e.unstable_shouldYield = O,
    e.unstable_wrapCallback = function(M) {
        var V = h;
        return function() {
            var L = h;
            h = V;
            try {
                return M.apply(this, arguments)
            } finally {
                h = L
            }
        }
    }
}
)(Uf);
Bf.exports = Uf;
var ng = Bf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg = y
  , Oe = ng;
function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Hf = new Set
  , Qr = {};
function bn(e, t) {
    nr(e, t),
    nr(e + "Capture", t)
}
function nr(e, t) {
    for (Qr[e] = t,
    e = 0; e < t.length; e++)
        Hf.add(t[e])
}
var bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ra = Object.prototype.hasOwnProperty
  , ig = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ju = {}
  , qu = {};
function sg(e) {
    return ra.call(qu, e) ? !0 : ra.call(Ju, e) ? !1 : ig.test(e) ? qu[e] = !0 : (Ju[e] = !0,
    !1)
}
function og(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function ag(e, t, n, r) {
    if (t === null || typeof t > "u" || og(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ee(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    we[e] = new Ee(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    we[t] = new Ee(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    we[e] = new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    we[e] = new Ee(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    we[e] = new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    we[e] = new Ee(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    we[e] = new Ee(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    we[e] = new Ee(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    we[e] = new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var vl = /[\-:]([a-z])/g;
function yl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(vl, yl);
    we[t] = new Ee(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(vl, yl);
    we[t] = new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(vl, yl);
    we[t] = new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    we[e] = new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)
});
we.xlinkHref = new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    we[e] = new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function xl(e, t, n, r) {
    var i = we.hasOwnProperty(t) ? we[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ag(t, n, i, r) && (n = null),
    r || i === null ? sg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Rt = rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ai = Symbol.for("react.element")
  , Dn = Symbol.for("react.portal")
  , Ln = Symbol.for("react.fragment")
  , wl = Symbol.for("react.strict_mode")
  , ia = Symbol.for("react.profiler")
  , Wf = Symbol.for("react.provider")
  , $f = Symbol.for("react.context")
  , Sl = Symbol.for("react.forward_ref")
  , sa = Symbol.for("react.suspense")
  , oa = Symbol.for("react.suspense_list")
  , jl = Symbol.for("react.memo")
  , Vt = Symbol.for("react.lazy")
  , Kf = Symbol.for("react.offscreen")
  , ec = Symbol.iterator;
function wr(e) {
    return e === null || typeof e != "object" ? null : (e = ec && e[ec] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ee = Object.assign, vo;
function Er(e) {
    if (vo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            vo = t && t[1] || ""
        }
    return `
` + vo + e
}
var yo = !1;
function xo(e, t) {
    if (!e || yo)
        return "";
    yo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        yo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Er(e) : ""
}
function lg(e) {
    switch (e.tag) {
    case 5:
        return Er(e.type);
    case 16:
        return Er("Lazy");
    case 13:
        return Er("Suspense");
    case 19:
        return Er("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = xo(e.type, !1),
        e;
    case 11:
        return e = xo(e.type.render, !1),
        e;
    case 1:
        return e = xo(e.type, !0),
        e;
    default:
        return ""
    }
}
function aa(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ln:
        return "Fragment";
    case Dn:
        return "Portal";
    case ia:
        return "Profiler";
    case wl:
        return "StrictMode";
    case sa:
        return "Suspense";
    case oa:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case $f:
            return (e.displayName || "Context") + ".Consumer";
        case Wf:
            return (e._context.displayName || "Context") + ".Provider";
        case Sl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case jl:
            return t = e.displayName || null,
            t !== null ? t : aa(e.type) || "Memo";
        case Vt:
            t = e._payload,
            e = e._init;
            try {
                return aa(e(t))
            } catch {}
        }
    return null
}
function ug(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return aa(t);
    case 8:
        return t === wl ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Jt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Gf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function cg(e) {
    var t = Gf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Di(e) {
    e._valueTracker || (e._valueTracker = cg(e))
}
function Xf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Gf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function fs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function la(e, t) {
    var n = t.checked;
    return ee({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function tc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Jt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Qf(e, t) {
    t = t.checked,
    t != null && xl(e, "checked", t, !1)
}
function ua(e, t) {
    Qf(e, t);
    var n = Jt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ca(e, t.type, n) : t.hasOwnProperty("defaultValue") && ca(e, t.type, Jt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function nc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ca(e, t, n) {
    (t !== "number" || fs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Mr = Array.isArray;
function Yn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Jt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function da(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return ee({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function rc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(P(92));
            if (Mr(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Jt(n)
    }
}
function Yf(e, t) {
    var n = Jt(t.value)
      , r = Jt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ic(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Zf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function fa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Zf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Li, Jf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Li = Li || document.createElement("div"),
        Li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Li.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Yr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , dg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ir).forEach(function(e) {
    dg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ir[t] = Ir[e]
    })
});
function qf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ir.hasOwnProperty(e) && Ir[e] ? ("" + t).trim() : t + "px"
}
function eh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = qf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var fg = ee({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ha(e, t) {
    if (t) {
        if (fg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(P(62))
    }
}
function pa(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ma = null;
function Nl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ga = null
  , Zn = null
  , Jn = null;
function sc(e) {
    if (e = ji(e)) {
        if (typeof ga != "function")
            throw Error(P(280));
        var t = e.stateNode;
        t && (t = Ys(t),
        ga(e.stateNode, e.type, t))
    }
}
function th(e) {
    Zn ? Jn ? Jn.push(e) : Jn = [e] : Zn = e
}
function nh() {
    if (Zn) {
        var e = Zn
          , t = Jn;
        if (Jn = Zn = null,
        sc(e),
        t)
            for (e = 0; e < t.length; e++)
                sc(t[e])
    }
}
function rh(e, t) {
    return e(t)
}
function ih() {}
var wo = !1;
function sh(e, t, n) {
    if (wo)
        return e(t, n);
    wo = !0;
    try {
        return rh(e, t, n)
    } finally {
        wo = !1,
        (Zn !== null || Jn !== null) && (ih(),
        nh())
    }
}
function Zr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ys(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, t, typeof n));
    return n
}
var va = !1;
if (bt)
    try {
        var Sr = {};
        Object.defineProperty(Sr, "passive", {
            get: function() {
                va = !0
            }
        }),
        window.addEventListener("test", Sr, Sr),
        window.removeEventListener("test", Sr, Sr)
    } catch {
        va = !1
    }
function hg(e, t, n, r, i, s, o, a, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var _r = !1
  , hs = null
  , ps = !1
  , ya = null
  , pg = {
    onError: function(e) {
        _r = !0,
        hs = e
    }
};
function mg(e, t, n, r, i, s, o, a, u) {
    _r = !1,
    hs = null,
    hg.apply(pg, arguments)
}
function gg(e, t, n, r, i, s, o, a, u) {
    if (mg.apply(this, arguments),
    _r) {
        if (_r) {
            var c = hs;
            _r = !1,
            hs = null
        } else
            throw Error(P(198));
        ps || (ps = !0,
        ya = c)
    }
}
function Tn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function oh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function oc(e) {
    if (Tn(e) !== e)
        throw Error(P(188))
}
function vg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Tn(e),
        t === null)
            throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return oc(i),
                    e;
                if (s === r)
                    return oc(i),
                    t;
                s = s.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? e : t
}
function ah(e) {
    return e = vg(e),
    e !== null ? lh(e) : null
}
function lh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = lh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var uh = Oe.unstable_scheduleCallback
  , ac = Oe.unstable_cancelCallback
  , yg = Oe.unstable_shouldYield
  , xg = Oe.unstable_requestPaint
  , se = Oe.unstable_now
  , wg = Oe.unstable_getCurrentPriorityLevel
  , kl = Oe.unstable_ImmediatePriority
  , ch = Oe.unstable_UserBlockingPriority
  , ms = Oe.unstable_NormalPriority
  , Sg = Oe.unstable_LowPriority
  , dh = Oe.unstable_IdlePriority
  , Ks = null
  , ht = null;
function jg(e) {
    if (ht && typeof ht.onCommitFiberRoot == "function")
        try {
            ht.onCommitFiberRoot(Ks, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var it = Math.clz32 ? Math.clz32 : Cg
  , Ng = Math.log
  , kg = Math.LN2;
function Cg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Ng(e) / kg | 0) | 0
}
var Vi = 64
  , Ii = 4194304;
function Rr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function gs(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = Rr(a) : (s &= o,
        s !== 0 && (r = Rr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = Rr(o) : s !== 0 && (r = Rr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - it(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function bg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Tg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - it(s)
          , a = 1 << o
          , u = i[o];
        u === -1 ? (!(a & n) || a & r) && (i[o] = bg(a, t)) : u <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function xa(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fh() {
    var e = Vi;
    return Vi <<= 1,
    !(Vi & 4194240) && (Vi = 64),
    e
}
function So(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function wi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - it(t),
    e[t] = n
}
function Pg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - it(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function Cl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - it(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var H = 0;
function hh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ph, bl, mh, gh, vh, wa = !1, _i = [], Ut = null, Ht = null, Wt = null, Jr = new Map, qr = new Map, _t = [], Eg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function lc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ut = null;
        break;
    case "dragenter":
    case "dragleave":
        Ht = null;
        break;
    case "mouseover":
    case "mouseout":
        Wt = null;
        break;
    case "pointerover":
    case "pointerout":
        Jr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        qr.delete(t.pointerId)
    }
}
function jr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = ji(t),
    t !== null && bl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Mg(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ut = jr(Ut, e, t, n, r, i),
        !0;
    case "dragenter":
        return Ht = jr(Ht, e, t, n, r, i),
        !0;
    case "mouseover":
        return Wt = jr(Wt, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Jr.set(s, jr(Jr.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        qr.set(s, jr(qr.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function yh(e) {
    var t = pn(e.target);
    if (t !== null) {
        var n = Tn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = oh(n),
                t !== null) {
                    e.blockedOn = t,
                    vh(e.priority, function() {
                        mh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ji(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ma = r,
            n.target.dispatchEvent(r),
            ma = null
        } else
            return t = ji(n),
            t !== null && bl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function uc(e, t, n) {
    Ji(e) && n.delete(t)
}
function Rg() {
    wa = !1,
    Ut !== null && Ji(Ut) && (Ut = null),
    Ht !== null && Ji(Ht) && (Ht = null),
    Wt !== null && Ji(Wt) && (Wt = null),
    Jr.forEach(uc),
    qr.forEach(uc)
}
function Nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    wa || (wa = !0,
    Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Rg)))
}
function ei(e) {
    function t(i) {
        return Nr(i, e)
    }
    if (0 < _i.length) {
        Nr(_i[0], e);
        for (var n = 1; n < _i.length; n++) {
            var r = _i[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ut !== null && Nr(Ut, e),
    Ht !== null && Nr(Ht, e),
    Wt !== null && Nr(Wt, e),
    Jr.forEach(t),
    qr.forEach(t),
    n = 0; n < _t.length; n++)
        r = _t[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < _t.length && (n = _t[0],
    n.blockedOn === null); )
        yh(n),
        n.blockedOn === null && _t.shift()
}
var qn = Rt.ReactCurrentBatchConfig
  , vs = !0;
function Ag(e, t, n, r) {
    var i = H
      , s = qn.transition;
    qn.transition = null;
    try {
        H = 1,
        Tl(e, t, n, r)
    } finally {
        H = i,
        qn.transition = s
    }
}
function Dg(e, t, n, r) {
    var i = H
      , s = qn.transition;
    qn.transition = null;
    try {
        H = 4,
        Tl(e, t, n, r)
    } finally {
        H = i,
        qn.transition = s
    }
}
function Tl(e, t, n, r) {
    if (vs) {
        var i = Sa(e, t, n, r);
        if (i === null)
            Ro(e, t, r, ys, n),
            lc(e, r);
        else if (Mg(i, e, t, n, r))
            r.stopPropagation();
        else if (lc(e, r),
        t & 4 && -1 < Eg.indexOf(e)) {
            for (; i !== null; ) {
                var s = ji(i);
                if (s !== null && ph(s),
                s = Sa(e, t, n, r),
                s === null && Ro(e, t, r, ys, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            Ro(e, t, r, null, n)
    }
}
var ys = null;
function Sa(e, t, n, r) {
    if (ys = null,
    e = Nl(r),
    e = pn(e),
    e !== null)
        if (t = Tn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = oh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ys = e,
    null
}
function xh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (wg()) {
        case kl:
            return 1;
        case ch:
            return 4;
        case ms:
        case Sg:
            return 16;
        case dh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ot = null
  , Pl = null
  , qi = null;
function wh() {
    if (qi)
        return qi;
    var e, t = Pl, n = t.length, r, i = "value"in Ot ? Ot.value : Ot.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return qi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function es(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Fi() {
    return !0
}
function cc() {
    return !1
}
function Ue(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Fi : cc,
        this.isPropagationStopped = cc,
        this
    }
    return ee(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Fi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Fi)
        },
        persist: function() {},
        isPersistent: Fi
    }),
    t
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, El = Ue(fr), Si = ee({}, fr, {
    view: 0,
    detail: 0
}), Lg = Ue(Si), jo, No, kr, Gs = ee({}, Si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ml,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== kr && (kr && e.type === "mousemove" ? (jo = e.screenX - kr.screenX,
        No = e.screenY - kr.screenY) : No = jo = 0,
        kr = e),
        jo)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : No
    }
}), dc = Ue(Gs), Vg = ee({}, Gs, {
    dataTransfer: 0
}), Ig = Ue(Vg), _g = ee({}, Si, {
    relatedTarget: 0
}), ko = Ue(_g), Fg = ee({}, fr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Og = Ue(Fg), zg = ee({}, fr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Bg = Ue(zg), Ug = ee({}, fr, {
    data: 0
}), fc = Ue(Ug), Hg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Wg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, $g = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Kg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $g[e]) ? !!t[e] : !1
}
function Ml() {
    return Kg
}
var Gg = ee({}, Si, {
    key: function(e) {
        if (e.key) {
            var t = Hg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = es(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ml,
    charCode: function(e) {
        return e.type === "keypress" ? es(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? es(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Xg = Ue(Gg)
  , Qg = ee({}, Gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , hc = Ue(Qg)
  , Yg = ee({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ml
})
  , Zg = Ue(Yg)
  , Jg = ee({}, fr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , qg = Ue(Jg)
  , ev = ee({}, Gs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , tv = Ue(ev)
  , nv = [9, 13, 27, 32]
  , Rl = bt && "CompositionEvent"in window
  , Fr = null;
bt && "documentMode"in document && (Fr = document.documentMode);
var rv = bt && "TextEvent"in window && !Fr
  , Sh = bt && (!Rl || Fr && 8 < Fr && 11 >= Fr)
  , pc = " "
  , mc = !1;
function jh(e, t) {
    switch (e) {
    case "keyup":
        return nv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Nh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Vn = !1;
function iv(e, t) {
    switch (e) {
    case "compositionend":
        return Nh(t);
    case "keypress":
        return t.which !== 32 ? null : (mc = !0,
        pc);
    case "textInput":
        return e = t.data,
        e === pc && mc ? null : e;
    default:
        return null
    }
}
function sv(e, t) {
    if (Vn)
        return e === "compositionend" || !Rl && jh(e, t) ? (e = wh(),
        qi = Pl = Ot = null,
        Vn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Sh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var ov = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function gc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ov[e.type] : t === "textarea"
}
function kh(e, t, n, r) {
    th(r),
    t = xs(t, "onChange"),
    0 < t.length && (n = new El("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Or = null
  , ti = null;
function av(e) {
    Vh(e, 0)
}
function Xs(e) {
    var t = Fn(e);
    if (Xf(t))
        return e
}
function lv(e, t) {
    if (e === "change")
        return t
}
var Ch = !1;
if (bt) {
    var Co;
    if (bt) {
        var bo = "oninput"in document;
        if (!bo) {
            var vc = document.createElement("div");
            vc.setAttribute("oninput", "return;"),
            bo = typeof vc.oninput == "function"
        }
        Co = bo
    } else
        Co = !1;
    Ch = Co && (!document.documentMode || 9 < document.documentMode)
}
function yc() {
    Or && (Or.detachEvent("onpropertychange", bh),
    ti = Or = null)
}
function bh(e) {
    if (e.propertyName === "value" && Xs(ti)) {
        var t = [];
        kh(t, ti, e, Nl(e)),
        sh(av, t)
    }
}
function uv(e, t, n) {
    e === "focusin" ? (yc(),
    Or = t,
    ti = n,
    Or.attachEvent("onpropertychange", bh)) : e === "focusout" && yc()
}
function cv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Xs(ti)
}
function dv(e, t) {
    if (e === "click")
        return Xs(t)
}
function fv(e, t) {
    if (e === "input" || e === "change")
        return Xs(t)
}
function hv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ot = typeof Object.is == "function" ? Object.is : hv;
function ni(e, t) {
    if (ot(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ra.call(t, i) || !ot(e[i], t[i]))
            return !1
    }
    return !0
}
function xc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function wc(e, t) {
    var n = xc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = xc(n)
    }
}
function Th(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Th(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Ph() {
    for (var e = window, t = fs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = fs(e.document)
    }
    return t
}
function Al(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function pv(e) {
    var t = Ph()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Th(n.ownerDocument.documentElement, n)) {
        if (r !== null && Al(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = wc(n, s);
                var o = wc(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var mv = bt && "documentMode"in document && 11 >= document.documentMode
  , In = null
  , ja = null
  , zr = null
  , Na = !1;
function Sc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Na || In == null || In !== fs(r) || (r = In,
    "selectionStart"in r && Al(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    zr && ni(zr, r) || (zr = r,
    r = xs(ja, "onSelect"),
    0 < r.length && (t = new El("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = In)))
}
function Oi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var _n = {
    animationend: Oi("Animation", "AnimationEnd"),
    animationiteration: Oi("Animation", "AnimationIteration"),
    animationstart: Oi("Animation", "AnimationStart"),
    transitionend: Oi("Transition", "TransitionEnd")
}
  , To = {}
  , Eh = {};
bt && (Eh = document.createElement("div").style,
"AnimationEvent"in window || (delete _n.animationend.animation,
delete _n.animationiteration.animation,
delete _n.animationstart.animation),
"TransitionEvent"in window || delete _n.transitionend.transition);
function Qs(e) {
    if (To[e])
        return To[e];
    if (!_n[e])
        return e;
    var t = _n[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Eh)
            return To[e] = t[n];
    return e
}
var Mh = Qs("animationend")
  , Rh = Qs("animationiteration")
  , Ah = Qs("animationstart")
  , Dh = Qs("transitionend")
  , Lh = new Map
  , jc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function nn(e, t) {
    Lh.set(e, t),
    bn(t, [e])
}
for (var Po = 0; Po < jc.length; Po++) {
    var Eo = jc[Po]
      , gv = Eo.toLowerCase()
      , vv = Eo[0].toUpperCase() + Eo.slice(1);
    nn(gv, "on" + vv)
}
nn(Mh, "onAnimationEnd");
nn(Rh, "onAnimationIteration");
nn(Ah, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(Dh, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , yv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
function Nc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    gg(r, t, void 0, e),
    e.currentTarget = null
}
function Vh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , u = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    u !== s && i.isPropagationStopped())
                        break e;
                    Nc(i, a, c),
                    s = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    u = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    u !== s && i.isPropagationStopped())
                        break e;
                    Nc(i, a, c),
                    s = u
                }
        }
    }
    if (ps)
        throw e = ya,
        ps = !1,
        ya = null,
        e
}
function K(e, t) {
    var n = t[Pa];
    n === void 0 && (n = t[Pa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ih(t, e, 2, !1),
    n.add(r))
}
function Mo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ih(n, e, r, t)
}
var zi = "_reactListening" + Math.random().toString(36).slice(2);
function ri(e) {
    if (!e[zi]) {
        e[zi] = !0,
        Hf.forEach(function(n) {
            n !== "selectionchange" && (yv.has(n) || Mo(n, !1, e),
            Mo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zi] || (t[zi] = !0,
        Mo("selectionchange", !1, t))
    }
}
function Ih(e, t, n, r) {
    switch (xh(t)) {
    case 1:
        var i = Ag;
        break;
    case 4:
        i = Dg;
        break;
    default:
        i = Tl
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !va || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Ro(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                        u === i || u.nodeType === 8 && u.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = pn(a),
                    o === null)
                        return;
                    if (u = o.tag,
                    u === 5 || u === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    sh(function() {
        var c = s
          , d = Nl(n)
          , f = [];
        e: {
            var h = Lh.get(e);
            if (h !== void 0) {
                var v = El
                  , x = e;
                switch (e) {
                case "keypress":
                    if (es(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Xg;
                    break;
                case "focusin":
                    x = "focus",
                    v = ko;
                    break;
                case "focusout":
                    x = "blur",
                    v = ko;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = ko;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = dc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Ig;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Zg;
                    break;
                case Mh:
                case Rh:
                case Ah:
                    v = Og;
                    break;
                case Dh:
                    v = qg;
                    break;
                case "scroll":
                    v = Lg;
                    break;
                case "wheel":
                    v = tv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Bg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = hc
                }
                var w = (t & 4) !== 0
                  , N = !w && e === "scroll"
                  , m = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var p = c, g; p !== null; ) {
                    g = p;
                    var j = g.stateNode;
                    if (g.tag === 5 && j !== null && (g = j,
                    m !== null && (j = Zr(p, m),
                    j != null && w.push(ii(p, j, g)))),
                    N)
                        break;
                    p = p.return
                }
                0 < w.length && (h = new v(h,x,null,n,d),
                f.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                h && n !== ma && (x = n.relatedTarget || n.fromElement) && (pn(x) || x[Tt]))
                    break e;
                if ((v || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                v ? (x = n.relatedTarget || n.toElement,
                v = c,
                x = x ? pn(x) : null,
                x !== null && (N = Tn(x),
                x !== N || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null,
                x = c),
                v !== x)) {
                    if (w = dc,
                    j = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = hc,
                    j = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    N = v == null ? h : Fn(v),
                    g = x == null ? h : Fn(x),
                    h = new w(j,p + "leave",v,n,d),
                    h.target = N,
                    h.relatedTarget = g,
                    j = null,
                    pn(d) === c && (w = new w(m,p + "enter",x,n,d),
                    w.target = g,
                    w.relatedTarget = N,
                    j = w),
                    N = j,
                    v && x)
                        t: {
                            for (w = v,
                            m = x,
                            p = 0,
                            g = w; g; g = An(g))
                                p++;
                            for (g = 0,
                            j = m; j; j = An(j))
                                g++;
                            for (; 0 < p - g; )
                                w = An(w),
                                p--;
                            for (; 0 < g - p; )
                                m = An(m),
                                g--;
                            for (; p--; ) {
                                if (w === m || m !== null && w === m.alternate)
                                    break t;
                                w = An(w),
                                m = An(m)
                            }
                            w = null
                        }
                    else
                        w = null;
                    v !== null && kc(f, h, v, w, !1),
                    x !== null && N !== null && kc(f, N, x, w, !0)
                }
            }
            e: {
                if (h = c ? Fn(c) : window,
                v = h.nodeName && h.nodeName.toLowerCase(),
                v === "select" || v === "input" && h.type === "file")
                    var k = lv;
                else if (gc(h))
                    if (Ch)
                        k = fv;
                    else {
                        k = cv;
                        var b = uv
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = dv);
                if (k && (k = k(e, c))) {
                    kh(f, k, n, d);
                    break e
                }
                b && b(e, h, c),
                e === "focusout" && (b = h._wrapperState) && b.controlled && h.type === "number" && ca(h, "number", h.value)
            }
            switch (b = c ? Fn(c) : window,
            e) {
            case "focusin":
                (gc(b) || b.contentEditable === "true") && (In = b,
                ja = c,
                zr = null);
                break;
            case "focusout":
                zr = ja = In = null;
                break;
            case "mousedown":
                Na = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Na = !1,
                Sc(f, n, d);
                break;
            case "selectionchange":
                if (mv)
                    break;
            case "keydown":
            case "keyup":
                Sc(f, n, d)
            }
            var E;
            if (Rl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                Vn ? jh(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (Sh && n.locale !== "ko" && (Vn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Vn && (E = wh()) : (Ot = d,
            Pl = "value"in Ot ? Ot.value : Ot.textContent,
            Vn = !0)),
            b = xs(c, C),
            0 < b.length && (C = new fc(C,e,null,n,d),
            f.push({
                event: C,
                listeners: b
            }),
            E ? C.data = E : (E = Nh(n),
            E !== null && (C.data = E)))),
            (E = rv ? iv(e, n) : sv(e, n)) && (c = xs(c, "onBeforeInput"),
            0 < c.length && (d = new fc("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: c
            }),
            d.data = E))
        }
        Vh(f, t)
    })
}
function ii(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function xs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Zr(e, n),
        s != null && r.unshift(ii(e, s, i)),
        s = Zr(e, t),
        s != null && r.push(ii(e, s, i))),
        e = e.return
    }
    return r
}
function An(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function kc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , u = a.alternate
          , c = a.stateNode;
        if (u !== null && u === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        i ? (u = Zr(n, s),
        u != null && o.unshift(ii(n, u, a))) : i || (u = Zr(n, s),
        u != null && o.push(ii(n, u, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var xv = /\r\n?/g
  , wv = /\u0000|\uFFFD/g;
function Cc(e) {
    return (typeof e == "string" ? e : "" + e).replace(xv, `
`).replace(wv, "")
}
function Bi(e, t, n) {
    if (t = Cc(t),
    Cc(e) !== t && n)
        throw Error(P(425))
}
function ws() {}
var ka = null
  , Ca = null;
function ba(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ta = typeof setTimeout == "function" ? setTimeout : void 0
  , Sv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , bc = typeof Promise == "function" ? Promise : void 0
  , jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof bc < "u" ? function(e) {
    return bc.resolve(null).then(e).catch(Nv)
}
: Ta;
function Nv(e) {
    setTimeout(function() {
        throw e
    })
}
function Ao(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    ei(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ei(t)
}
function $t(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Tc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var hr = Math.random().toString(36).slice(2)
  , ft = "__reactFiber$" + hr
  , si = "__reactProps$" + hr
  , Tt = "__reactContainer$" + hr
  , Pa = "__reactEvents$" + hr
  , kv = "__reactListeners$" + hr
  , Cv = "__reactHandles$" + hr;
function pn(e) {
    var t = e[ft];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Tt] || n[ft]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Tc(e); e !== null; ) {
                    if (n = e[ft])
                        return n;
                    e = Tc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ji(e) {
    return e = e[ft] || e[Tt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Fn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(P(33))
}
function Ys(e) {
    return e[si] || null
}
var Ea = []
  , On = -1;
function rn(e) {
    return {
        current: e
    }
}
function G(e) {
    0 > On || (e.current = Ea[On],
    Ea[On] = null,
    On--)
}
function $(e, t) {
    On++,
    Ea[On] = e.current,
    e.current = t
}
var qt = {}
  , be = rn(qt)
  , Ae = rn(!1)
  , Sn = qt;
function rr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function De(e) {
    return e = e.childContextTypes,
    e != null
}
function Ss() {
    G(Ae),
    G(be)
}
function Pc(e, t, n) {
    if (be.current !== qt)
        throw Error(P(168));
    $(be, t),
    $(Ae, n)
}
function _h(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(P(108, ug(e) || "Unknown", i));
    return ee({}, n, r)
}
function js(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qt,
    Sn = be.current,
    $(be, e),
    $(Ae, Ae.current),
    !0
}
function Ec(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (e = _h(e, t, Sn),
    r.__reactInternalMemoizedMergedChildContext = e,
    G(Ae),
    G(be),
    $(be, e)) : G(Ae),
    $(Ae, n)
}
var wt = null
  , Zs = !1
  , Do = !1;
function Fh(e) {
    wt === null ? wt = [e] : wt.push(e)
}
function bv(e) {
    Zs = !0,
    Fh(e)
}
function sn() {
    if (!Do && wt !== null) {
        Do = !0;
        var e = 0
          , t = H;
        try {
            var n = wt;
            for (H = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            wt = null,
            Zs = !1
        } catch (i) {
            throw wt !== null && (wt = wt.slice(e + 1)),
            uh(kl, sn),
            i
        } finally {
            H = t,
            Do = !1
        }
    }
    return null
}
var zn = []
  , Bn = 0
  , Ns = null
  , ks = 0
  , Ke = []
  , Ge = 0
  , jn = null
  , St = 1
  , jt = "";
function cn(e, t) {
    zn[Bn++] = ks,
    zn[Bn++] = Ns,
    Ns = e,
    ks = t
}
function Oh(e, t, n) {
    Ke[Ge++] = St,
    Ke[Ge++] = jt,
    Ke[Ge++] = jn,
    jn = e;
    var r = St;
    e = jt;
    var i = 32 - it(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - it(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        St = 1 << 32 - it(t) + i | n << i | r,
        jt = s + e
    } else
        St = 1 << s | n << i | r,
        jt = e
}
function Dl(e) {
    e.return !== null && (cn(e, 1),
    Oh(e, 1, 0))
}
function Ll(e) {
    for (; e === Ns; )
        Ns = zn[--Bn],
        zn[Bn] = null,
        ks = zn[--Bn],
        zn[Bn] = null;
    for (; e === jn; )
        jn = Ke[--Ge],
        Ke[Ge] = null,
        jt = Ke[--Ge],
        Ke[Ge] = null,
        St = Ke[--Ge],
        Ke[Ge] = null
}
var _e = null
  , Ie = null
  , Q = !1
  , rt = null;
function zh(e, t) {
    var n = Xe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Mc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        _e = e,
        Ie = $t(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        _e = e,
        Ie = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = jn !== null ? {
            id: St,
            overflow: jt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Xe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        _e = e,
        Ie = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ma(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ra(e) {
    if (Q) {
        var t = Ie;
        if (t) {
            var n = t;
            if (!Mc(e, t)) {
                if (Ma(e))
                    throw Error(P(418));
                t = $t(n.nextSibling);
                var r = _e;
                t && Mc(e, t) ? zh(r, n) : (e.flags = e.flags & -4097 | 2,
                Q = !1,
                _e = e)
            }
        } else {
            if (Ma(e))
                throw Error(P(418));
            e.flags = e.flags & -4097 | 2,
            Q = !1,
            _e = e
        }
    }
}
function Rc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    _e = e
}
function Ui(e) {
    if (e !== _e)
        return !1;
    if (!Q)
        return Rc(e),
        Q = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ba(e.type, e.memoizedProps)),
    t && (t = Ie)) {
        if (Ma(e))
            throw Bh(),
            Error(P(418));
        for (; t; )
            zh(e, t),
            t = $t(t.nextSibling)
    }
    if (Rc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(P(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ie = $t(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ie = null
        }
    } else
        Ie = _e ? $t(e.stateNode.nextSibling) : null;
    return !0
}
function Bh() {
    for (var e = Ie; e; )
        e = $t(e.nextSibling)
}
function ir() {
    Ie = _e = null,
    Q = !1
}
function Vl(e) {
    rt === null ? rt = [e] : rt.push(e)
}
var Tv = Rt.ReactCurrentBatchConfig;
function Cr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, e))
    }
    return e
}
function Hi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ac(e) {
    var t = e._init;
    return t(e._payload)
}
function Uh(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p],
            m.flags |= 16) : g.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function i(m, p) {
        return m = Qt(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, p, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < p ? (m.flags |= 2,
        p) : g) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, p, g, j) {
        return p === null || p.tag !== 6 ? (p = zo(g, m.mode, j),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function u(m, p, g, j) {
        var k = g.type;
        return k === Ln ? d(m, p, g.props.children, j, g.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Vt && Ac(k) === p.type) ? (j = i(p, g.props),
        j.ref = Cr(m, p, g),
        j.return = m,
        j) : (j = as(g.type, g.key, g.props, null, m.mode, j),
        j.ref = Cr(m, p, g),
        j.return = m,
        j)
    }
    function c(m, p, g, j) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Bo(g, m.mode, j),
        p.return = m,
        p) : (p = i(p, g.children || []),
        p.return = m,
        p)
    }
    function d(m, p, g, j, k) {
        return p === null || p.tag !== 7 ? (p = xn(g, m.mode, j, k),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = zo("" + p, m.mode, g),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ai:
                return g = as(p.type, p.key, p.props, null, m.mode, g),
                g.ref = Cr(m, null, p),
                g.return = m,
                g;
            case Dn:
                return p = Bo(p, m.mode, g),
                p.return = m,
                p;
            case Vt:
                var j = p._init;
                return f(m, j(p._payload), g)
            }
            if (Mr(p) || wr(p))
                return p = xn(p, m.mode, g, null),
                p.return = m,
                p;
            Hi(m, p)
        }
        return null
    }
    function h(m, p, g, j) {
        var k = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return k !== null ? null : a(m, p, "" + g, j);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ai:
                return g.key === k ? u(m, p, g, j) : null;
            case Dn:
                return g.key === k ? c(m, p, g, j) : null;
            case Vt:
                return k = g._init,
                h(m, p, k(g._payload), j)
            }
            if (Mr(g) || wr(g))
                return k !== null ? null : d(m, p, g, j, null);
            Hi(m, g)
        }
        return null
    }
    function v(m, p, g, j, k) {
        if (typeof j == "string" && j !== "" || typeof j == "number")
            return m = m.get(g) || null,
            a(p, m, "" + j, k);
        if (typeof j == "object" && j !== null) {
            switch (j.$$typeof) {
            case Ai:
                return m = m.get(j.key === null ? g : j.key) || null,
                u(p, m, j, k);
            case Dn:
                return m = m.get(j.key === null ? g : j.key) || null,
                c(p, m, j, k);
            case Vt:
                var b = j._init;
                return v(m, p, g, b(j._payload), k)
            }
            if (Mr(j) || wr(j))
                return m = m.get(g) || null,
                d(p, m, j, k, null);
            Hi(p, j)
        }
        return null
    }
    function x(m, p, g, j) {
        for (var k = null, b = null, E = p, C = p = 0, _ = null; E !== null && C < g.length; C++) {
            E.index > C ? (_ = E,
            E = null) : _ = E.sibling;
            var A = h(m, E, g[C], j);
            if (A === null) {
                E === null && (E = _);
                break
            }
            e && E && A.alternate === null && t(m, E),
            p = s(A, p, C),
            b === null ? k = A : b.sibling = A,
            b = A,
            E = _
        }
        if (C === g.length)
            return n(m, E),
            Q && cn(m, C),
            k;
        if (E === null) {
            for (; C < g.length; C++)
                E = f(m, g[C], j),
                E !== null && (p = s(E, p, C),
                b === null ? k = E : b.sibling = E,
                b = E);
            return Q && cn(m, C),
            k
        }
        for (E = r(m, E); C < g.length; C++)
            _ = v(E, m, C, g[C], j),
            _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? C : _.key),
            p = s(_, p, C),
            b === null ? k = _ : b.sibling = _,
            b = _);
        return e && E.forEach(function(O) {
            return t(m, O)
        }),
        Q && cn(m, C),
        k
    }
    function w(m, p, g, j) {
        var k = wr(g);
        if (typeof k != "function")
            throw Error(P(150));
        if (g = k.call(g),
        g == null)
            throw Error(P(151));
        for (var b = k = null, E = p, C = p = 0, _ = null, A = g.next(); E !== null && !A.done; C++,
        A = g.next()) {
            E.index > C ? (_ = E,
            E = null) : _ = E.sibling;
            var O = h(m, E, A.value, j);
            if (O === null) {
                E === null && (E = _);
                break
            }
            e && E && O.alternate === null && t(m, E),
            p = s(O, p, C),
            b === null ? k = O : b.sibling = O,
            b = O,
            E = _
        }
        if (A.done)
            return n(m, E),
            Q && cn(m, C),
            k;
        if (E === null) {
            for (; !A.done; C++,
            A = g.next())
                A = f(m, A.value, j),
                A !== null && (p = s(A, p, C),
                b === null ? k = A : b.sibling = A,
                b = A);
            return Q && cn(m, C),
            k
        }
        for (E = r(m, E); !A.done; C++,
        A = g.next())
            A = v(E, m, C, A.value, j),
            A !== null && (e && A.alternate !== null && E.delete(A.key === null ? C : A.key),
            p = s(A, p, C),
            b === null ? k = A : b.sibling = A,
            b = A);
        return e && E.forEach(function(oe) {
            return t(m, oe)
        }),
        Q && cn(m, C),
        k
    }
    function N(m, p, g, j) {
        if (typeof g == "object" && g !== null && g.type === Ln && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ai:
                e: {
                    for (var k = g.key, b = p; b !== null; ) {
                        if (b.key === k) {
                            if (k = g.type,
                            k === Ln) {
                                if (b.tag === 7) {
                                    n(m, b.sibling),
                                    p = i(b, g.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (b.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Vt && Ac(k) === b.type) {
                                n(m, b.sibling),
                                p = i(b, g.props),
                                p.ref = Cr(m, b, g),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, b);
                            break
                        } else
                            t(m, b);
                        b = b.sibling
                    }
                    g.type === Ln ? (p = xn(g.props.children, m.mode, j, g.key),
                    p.return = m,
                    m = p) : (j = as(g.type, g.key, g.props, null, m.mode, j),
                    j.ref = Cr(m, p, g),
                    j.return = m,
                    m = j)
                }
                return o(m);
            case Dn:
                e: {
                    for (b = g.key; p !== null; ) {
                        if (p.key === b)
                            if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                n(m, p.sibling),
                                p = i(p, g.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = Bo(g, m.mode, j),
                    p.return = m,
                    m = p
                }
                return o(m);
            case Vt:
                return b = g._init,
                N(m, p, b(g._payload), j)
            }
            if (Mr(g))
                return x(m, p, g, j);
            if (wr(g))
                return w(m, p, g, j);
            Hi(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = i(p, g),
        p.return = m,
        m = p) : (n(m, p),
        p = zo(g, m.mode, j),
        p.return = m,
        m = p),
        o(m)) : n(m, p)
    }
    return N
}
var sr = Uh(!0)
  , Hh = Uh(!1)
  , Cs = rn(null)
  , bs = null
  , Un = null
  , Il = null;
function _l() {
    Il = Un = bs = null
}
function Fl(e) {
    var t = Cs.current;
    G(Cs),
    e._currentValue = t
}
function Aa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function er(e, t) {
    bs = e,
    Il = Un = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0),
    e.firstContext = null)
}
function Ye(e) {
    var t = e._currentValue;
    if (Il !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Un === null) {
            if (bs === null)
                throw Error(P(308));
            Un = e,
            bs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Un = Un.next = e;
    return t
}
var mn = null;
function Ol(e) {
    mn === null ? mn = [e] : mn.push(e)
}
function Wh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Ol(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Pt(e, r)
}
function Pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var It = !1;
function zl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function $h(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Nt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    U & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Pt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Ol(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Pt(e, n)
}
function ts(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Cl(e, n)
    }
}
function Dc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ts(e, t, n, r) {
    var i = e.updateQueue;
    It = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var u = a
          , c = u.next;
        u.next = null,
        o === null ? s = c : o.next = c,
        o = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== o && (a === null ? d.firstBaseUpdate = c : a.next = c,
        d.lastBaseUpdate = u))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0,
        d = c = u = null,
        a = s;
        do {
            var h = a.lane
              , v = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , w = a;
                    switch (h = t,
                    v = n,
                    w.tag) {
                    case 1:
                        if (x = w.payload,
                        typeof x == "function") {
                            f = x.call(v, f, h);
                            break e
                        }
                        f = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = w.payload,
                        h = typeof x == "function" ? x.call(v, f, h) : x,
                        h == null)
                            break e;
                        f = ee({}, f, h);
                        break e;
                    case 2:
                        It = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                h = i.effects,
                h === null ? i.effects = [a] : h.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (c = d = v,
                u = f) : d = d.next = v,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                i.lastBaseUpdate = h,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = f),
        i.baseState = u,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        kn |= o,
        e.lanes = o,
        e.memoizedState = f
    }
}
function Lc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(P(191, i));
                i.call(r)
            }
        }
}
var Ni = {}
  , pt = rn(Ni)
  , oi = rn(Ni)
  , ai = rn(Ni);
function gn(e) {
    if (e === Ni)
        throw Error(P(174));
    return e
}
function Bl(e, t) {
    switch ($(ai, t),
    $(oi, e),
    $(pt, Ni),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : fa(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = fa(t, e)
    }
    G(pt),
    $(pt, t)
}
function or() {
    G(pt),
    G(oi),
    G(ai)
}
function Kh(e) {
    gn(ai.current);
    var t = gn(pt.current)
      , n = fa(t, e.type);
    t !== n && ($(oi, e),
    $(pt, n))
}
function Ul(e) {
    oi.current === e && (G(pt),
    G(oi))
}
var Z = rn(0);
function Ps(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Lo = [];
function Hl() {
    for (var e = 0; e < Lo.length; e++)
        Lo[e]._workInProgressVersionPrimary = null;
    Lo.length = 0
}
var ns = Rt.ReactCurrentDispatcher
  , Vo = Rt.ReactCurrentBatchConfig
  , Nn = 0
  , q = null
  , ce = null
  , me = null
  , Es = !1
  , Br = !1
  , li = 0
  , Pv = 0;
function Se() {
    throw Error(P(321))
}
function Wl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ot(e[n], t[n]))
            return !1;
    return !0
}
function $l(e, t, n, r, i, s) {
    if (Nn = s,
    q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ns.current = e === null || e.memoizedState === null ? Av : Dv,
    e = n(r, i),
    Br) {
        s = 0;
        do {
            if (Br = !1,
            li = 0,
            25 <= s)
                throw Error(P(301));
            s += 1,
            me = ce = null,
            t.updateQueue = null,
            ns.current = Lv,
            e = n(r, i)
        } while (Br)
    }
    if (ns.current = Ms,
    t = ce !== null && ce.next !== null,
    Nn = 0,
    me = ce = q = null,
    Es = !1,
    t)
        throw Error(P(300));
    return e
}
function Kl() {
    var e = li !== 0;
    return li = 0,
    e
}
function dt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return me === null ? q.memoizedState = me = e : me = me.next = e,
    me
}
function Ze() {
    if (ce === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ce.next;
    var t = me === null ? q.memoizedState : me.next;
    if (t !== null)
        me = t,
        ce = e;
    else {
        if (e === null)
            throw Error(P(310));
        ce = e,
        e = {
            memoizedState: ce.memoizedState,
            baseState: ce.baseState,
            baseQueue: ce.baseQueue,
            queue: ce.queue,
            next: null
        },
        me === null ? q.memoizedState = me = e : me = me.next = e
    }
    return me
}
function ui(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Io(e) {
    var t = Ze()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = ce
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , u = null
          , c = s;
        do {
            var d = c.lane;
            if ((Nn & d) === d)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (a = u = f,
                o = r) : u = u.next = f,
                q.lanes |= d,
                kn |= d
            }
            c = c.next
        } while (c !== null && c !== s);
        u === null ? o = r : u.next = a,
        ot(r, t.memoizedState) || (Re = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            q.lanes |= s,
            kn |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function _o(e) {
    var t = Ze()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        ot(s, t.memoizedState) || (Re = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Gh() {}
function Xh(e, t) {
    var n = q
      , r = Ze()
      , i = t()
      , s = !ot(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Re = !0),
    r = r.queue,
    Gl(Zh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || me !== null && me.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ci(9, Yh.bind(null, n, r, i, t), void 0, null),
        ge === null)
            throw Error(P(349));
        Nn & 30 || Qh(n, t, i)
    }
    return i
}
function Qh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Yh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Jh(t) && qh(e)
}
function Zh(e, t, n) {
    return n(function() {
        Jh(t) && qh(e)
    })
}
function Jh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ot(e, n)
    } catch {
        return !0
    }
}
function qh(e) {
    var t = Pt(e, 1);
    t !== null && st(t, e, 1, -1)
}
function Vc(e) {
    var t = dt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ui,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Rv.bind(null, q, e),
    [t.memoizedState, e]
}
function ci(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function ep() {
    return Ze().memoizedState
}
function rs(e, t, n, r) {
    var i = dt();
    q.flags |= e,
    i.memoizedState = ci(1 | t, n, void 0, r === void 0 ? null : r)
}
function Js(e, t, n, r) {
    var i = Ze();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ce !== null) {
        var o = ce.memoizedState;
        if (s = o.destroy,
        r !== null && Wl(r, o.deps)) {
            i.memoizedState = ci(t, n, s, r);
            return
        }
    }
    q.flags |= e,
    i.memoizedState = ci(1 | t, n, s, r)
}
function Ic(e, t) {
    return rs(8390656, 8, e, t)
}
function Gl(e, t) {
    return Js(2048, 8, e, t)
}
function tp(e, t) {
    return Js(4, 2, e, t)
}
function np(e, t) {
    return Js(4, 4, e, t)
}
function rp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ip(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Js(4, 4, rp.bind(null, t, e), n)
}
function Xl() {}
function sp(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wl(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function op(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wl(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ap(e, t, n) {
    return Nn & 21 ? (ot(n, t) || (n = fh(),
    q.lanes |= n,
    kn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Re = !0),
    e.memoizedState = n)
}
function Ev(e, t) {
    var n = H;
    H = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Vo.transition;
    Vo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        H = n,
        Vo.transition = r
    }
}
function lp() {
    return Ze().memoizedState
}
function Mv(e, t, n) {
    var r = Xt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    up(e))
        cp(t, n);
    else if (n = Wh(e, t, n, r),
    n !== null) {
        var i = Pe();
        st(n, e, r, i),
        dp(n, t, r)
    }
}
function Rv(e, t, n) {
    var r = Xt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (up(e))
        cp(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                ot(a, o)) {
                    var u = t.interleaved;
                    u === null ? (i.next = i,
                    Ol(t)) : (i.next = u.next,
                    u.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Wh(e, t, i, r),
        n !== null && (i = Pe(),
        st(n, e, r, i),
        dp(n, t, r))
    }
}
function up(e) {
    var t = e.alternate;
    return e === q || t !== null && t === q
}
function cp(e, t) {
    Br = Es = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function dp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Cl(e, n)
    }
}
var Ms = {
    readContext: Ye,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1
}
  , Av = {
    readContext: Ye,
    useCallback: function(e, t) {
        return dt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ye,
    useEffect: Ic,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        rs(4194308, 4, rp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return rs(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return rs(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = dt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = dt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Mv.bind(null, q, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = dt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Vc,
    useDebugValue: Xl,
    useDeferredValue: function(e) {
        return dt().memoizedState = e
    },
    useTransition: function() {
        var e = Vc(!1)
          , t = e[0];
        return e = Ev.bind(null, e[1]),
        dt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = q
          , i = dt();
        if (Q) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = t(),
            ge === null)
                throw Error(P(349));
            Nn & 30 || Qh(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        Ic(Zh.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        ci(9, Yh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = dt()
          , t = ge.identifierPrefix;
        if (Q) {
            var n = jt
              , r = St;
            n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = li++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Pv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Dv = {
    readContext: Ye,
    useCallback: sp,
    useContext: Ye,
    useEffect: Gl,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: op,
    useReducer: Io,
    useRef: ep,
    useState: function() {
        return Io(ui)
    },
    useDebugValue: Xl,
    useDeferredValue: function(e) {
        var t = Ze();
        return ap(t, ce.memoizedState, e)
    },
    useTransition: function() {
        var e = Io(ui)[0]
          , t = Ze().memoizedState;
        return [e, t]
    },
    useMutableSource: Gh,
    useSyncExternalStore: Xh,
    useId: lp,
    unstable_isNewReconciler: !1
}
  , Lv = {
    readContext: Ye,
    useCallback: sp,
    useContext: Ye,
    useEffect: Gl,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: op,
    useReducer: _o,
    useRef: ep,
    useState: function() {
        return _o(ui)
    },
    useDebugValue: Xl,
    useDeferredValue: function(e) {
        var t = Ze();
        return ce === null ? t.memoizedState = e : ap(t, ce.memoizedState, e)
    },
    useTransition: function() {
        var e = _o(ui)[0]
          , t = Ze().memoizedState;
        return [e, t]
    },
    useMutableSource: Gh,
    useSyncExternalStore: Xh,
    useId: lp,
    unstable_isNewReconciler: !1
};
function tt(e, t) {
    if (e && e.defaultProps) {
        t = ee({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Da(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ee({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var qs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Tn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe()
          , i = Xt(e)
          , s = Nt(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = Kt(e, s, i),
        t !== null && (st(t, e, i, r),
        ts(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Pe()
          , i = Xt(e)
          , s = Nt(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Kt(e, s, i),
        t !== null && (st(t, e, i, r),
        ts(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Pe()
          , r = Xt(e)
          , i = Nt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Kt(e, i, r),
        t !== null && (st(t, e, r, n),
        ts(t, e, r))
    }
};
function _c(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !ni(n, r) || !ni(i, s) : !0
}
function fp(e, t, n) {
    var r = !1
      , i = qt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Ye(s) : (i = De(t) ? Sn : be.current,
    r = t.contextTypes,
    s = (r = r != null) ? rr(e, i) : qt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = qs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Fc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qs.enqueueReplaceState(t, t.state, null)
}
function La(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    zl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Ye(s) : (s = De(t) ? Sn : be.current,
    i.context = rr(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Da(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && qs.enqueueReplaceState(i, i.state, null),
    Ts(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function ar(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += lg(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Fo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Va(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Vv = typeof WeakMap == "function" ? WeakMap : Map;
function hp(e, t, n) {
    n = Nt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        As || (As = !0,
        $a = r),
        Va(e, t)
    }
    ,
    n
}
function pp(e, t, n) {
    n = Nt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Va(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Va(e, t),
        typeof r != "function" && (Gt === null ? Gt = new Set([this]) : Gt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Oc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Vv;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Qv.bind(null, e, t, n),
    t.then(e, e))
}
function zc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Bc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1),
    t.tag = 2,
    Kt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Iv = Rt.ReactCurrentOwner
  , Re = !1;
function Te(e, t, n, r) {
    t.child = e === null ? Hh(t, null, n, r) : sr(t, e.child, n, r)
}
function Uc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return er(t, i),
    r = $l(e, t, n, r, s, i),
    n = Kl(),
    e !== null && !Re ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Et(e, t, i)) : (Q && n && Dl(t),
    t.flags |= 1,
    Te(e, t, r, i),
    t.child)
}
function Hc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !nu(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        mp(e, t, s, r, i)) : (e = as(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ni,
        n(o, r) && e.ref === t.ref)
            return Et(e, t, i)
    }
    return t.flags |= 1,
    e = Qt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function mp(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ni(s, r) && e.ref === t.ref)
            if (Re = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Re = !0);
            else
                return t.lanes = e.lanes,
                Et(e, t, i)
    }
    return Ia(e, t, n, r, i)
}
function gp(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            $(Wn, Ve),
            Ve |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                $(Wn, Ve),
                Ve |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            $(Wn, Ve),
            Ve |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        $(Wn, Ve),
        Ve |= r;
    return Te(e, t, i, n),
    t.child
}
function vp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ia(e, t, n, r, i) {
    var s = De(n) ? Sn : be.current;
    return s = rr(t, s),
    er(t, i),
    n = $l(e, t, n, r, s, i),
    r = Kl(),
    e !== null && !Re ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Et(e, t, i)) : (Q && r && Dl(t),
    t.flags |= 1,
    Te(e, t, n, i),
    t.child)
}
function Wc(e, t, n, r, i) {
    if (De(n)) {
        var s = !0;
        js(t)
    } else
        s = !1;
    if (er(t, i),
    t.stateNode === null)
        is(e, t),
        fp(t, n, r),
        La(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var u = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Ye(c) : (c = De(n) ? Sn : be.current,
        c = rr(t, c));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || u !== c) && Fc(t, o, r, c),
        It = !1;
        var h = t.memoizedState;
        o.state = h,
        Ts(t, r, o, i),
        u = t.memoizedState,
        a !== r || h !== u || Ae.current || It ? (typeof d == "function" && (Da(t, n, d, r),
        u = t.memoizedState),
        (a = It || _c(t, n, a, r, h, u, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        o.props = r,
        o.state = u,
        o.context = c,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        $h(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : tt(t.type, a),
        o.props = c,
        f = t.pendingProps,
        h = o.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Ye(u) : (u = De(n) ? Sn : be.current,
        u = rr(t, u));
        var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== u) && Fc(t, o, r, u),
        It = !1,
        h = t.memoizedState,
        o.state = h,
        Ts(t, r, o, i);
        var x = t.memoizedState;
        a !== f || h !== x || Ae.current || It ? (typeof v == "function" && (Da(t, n, v, r),
        x = t.memoizedState),
        (c = It || _c(t, n, c, r, h, x, u) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, u),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, u)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        o.props = r,
        o.state = x,
        o.context = u,
        r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return _a(e, t, n, r, s, i)
}
function _a(e, t, n, r, i, s) {
    vp(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && Ec(t, n, !1),
        Et(e, t, s);
    r = t.stateNode,
    Iv.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = sr(t, e.child, null, s),
    t.child = sr(t, null, a, s)) : Te(e, t, a, s),
    t.memoizedState = r.state,
    i && Ec(t, n, !0),
    t.child
}
function yp(e) {
    var t = e.stateNode;
    t.pendingContext ? Pc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pc(e, t.context, !1),
    Bl(e, t.containerInfo)
}
function $c(e, t, n, r, i) {
    return ir(),
    Vl(i),
    t.flags |= 256,
    Te(e, t, n, r),
    t.child
}
var Fa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Oa(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function xp(e, t, n) {
    var r = t.pendingProps, i = Z.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    $(Z, i & 1),
    e === null)
        return Ra(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = no(o, r, 0, null),
        e = xn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Oa(n),
        t.memoizedState = Fa,
        e) : Ql(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return _v(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = Qt(i, u),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = Qt(a, s) : (s = xn(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Oa(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Fa,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Qt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ql(e, t) {
    return t = no({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Wi(e, t, n, r) {
    return r !== null && Vl(r),
    sr(t, e.child, null, n),
    e = Ql(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function _v(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Fo(Error(P(422))),
        Wi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = no({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = xn(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && sr(t, e.child, null, o),
        t.child.memoizedState = Oa(o),
        t.memoizedState = Fa,
        s);
    if (!(t.mode & 1))
        return Wi(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(P(419)),
        r = Fo(s, r, void 0),
        Wi(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    Re || a) {
        if (r = ge,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            Pt(e, i),
            st(r, e, i, -1))
        }
        return tu(),
        r = Fo(Error(P(421))),
        Wi(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Yv.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    Ie = $t(i.nextSibling),
    _e = t,
    Q = !0,
    rt = null,
    e !== null && (Ke[Ge++] = St,
    Ke[Ge++] = jt,
    Ke[Ge++] = jn,
    St = e.id,
    jt = e.overflow,
    jn = t),
    t = Ql(t, r.children),
    t.flags |= 4096,
    t)
}
function Kc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Aa(e.return, t, n)
}
function Oo(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function wp(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Te(e, t, r.children, n),
    r = Z.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Kc(e, n, t);
                else if (e.tag === 19)
                    Kc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if ($(Z, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Ps(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Oo(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Ps(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Oo(t, !0, n, null, s);
            break;
        case "together":
            Oo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function is(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Et(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    kn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Qt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Qt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Fv(e, t, n) {
    switch (t.tag) {
    case 3:
        yp(t),
        ir();
        break;
    case 5:
        Kh(t);
        break;
    case 1:
        De(t.type) && js(t);
        break;
    case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        $(Cs, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? ($(Z, Z.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? xp(e, t, n) : ($(Z, Z.current & 1),
            e = Et(e, t, n),
            e !== null ? e.sibling : null);
        $(Z, Z.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return wp(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        $(Z, Z.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        gp(e, t, n)
    }
    return Et(e, t, n)
}
var Sp, za, jp, Np;
Sp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
za = function() {}
;
jp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        gn(pt.current);
        var s = null;
        switch (n) {
        case "input":
            i = la(e, i),
            r = la(e, r),
            s = [];
            break;
        case "select":
            i = ee({}, i, {
                value: void 0
            }),
            r = ee({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = da(e, i),
            r = da(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ws)
        }
        ha(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var a = i[c];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Qr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (a = i != null ? i[c] : void 0,
            r.hasOwnProperty(c) && u !== a && (u != null || a != null))
                if (c === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && a[o] !== u[o] && (n || (n = {}),
                            n[o] = u[o])
                    } else
                        n || (s || (s = []),
                        s.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    a = a ? a.__html : void 0,
                    u != null && a !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Qr.hasOwnProperty(c) ? (u != null && c === "onScroll" && K("scroll", e),
                    s || a === u || (s = [])) : (s = s || []).push(c, u))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Np = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function br(e, t) {
    if (!Q)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Ov(e, t, n) {
    var r = t.pendingProps;
    switch (Ll(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return je(t),
        null;
    case 1:
        return De(t.type) && Ss(),
        je(t),
        null;
    case 3:
        return r = t.stateNode,
        or(),
        G(Ae),
        G(be),
        Hl(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        rt !== null && (Xa(rt),
        rt = null))),
        za(e, t),
        je(t),
        null;
    case 5:
        Ul(t);
        var i = gn(ai.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            jp(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return je(t),
                null
            }
            if (e = gn(pt.current),
            Ui(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[ft] = t,
                r[si] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    K("cancel", r),
                    K("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    K("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Ar.length; i++)
                        K(Ar[i], r);
                    break;
                case "source":
                    K("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    K("error", r),
                    K("load", r);
                    break;
                case "details":
                    K("toggle", r);
                    break;
                case "input":
                    tc(r, s),
                    K("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    K("invalid", r);
                    break;
                case "textarea":
                    rc(r, s),
                    K("invalid", r)
                }
                ha(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Bi(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Bi(r.textContent, a, e),
                        i = ["children", "" + a]) : Qr.hasOwnProperty(o) && a != null && o === "onScroll" && K("scroll", r)
                    }
                switch (n) {
                case "input":
                    Di(r),
                    nc(r, s, !0);
                    break;
                case "textarea":
                    Di(r),
                    ic(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = ws)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Zf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[ft] = t,
                e[si] = r,
                Sp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = pa(n, r),
                    n) {
                    case "dialog":
                        K("cancel", e),
                        K("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        K("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Ar.length; i++)
                            K(Ar[i], e);
                        i = r;
                        break;
                    case "source":
                        K("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        K("error", e),
                        K("load", e),
                        i = r;
                        break;
                    case "details":
                        K("toggle", e),
                        i = r;
                        break;
                    case "input":
                        tc(e, r),
                        i = la(e, r),
                        K("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ee({}, r, {
                            value: void 0
                        }),
                        K("invalid", e);
                        break;
                    case "textarea":
                        rc(e, r),
                        i = da(e, r),
                        K("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    ha(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var u = a[s];
                            s === "style" ? eh(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Jf(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Yr(e, u) : typeof u == "number" && Yr(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Qr.hasOwnProperty(s) ? u != null && s === "onScroll" && K("scroll", e) : u != null && xl(e, s, u, o))
                        }
                    switch (n) {
                    case "input":
                        Di(e),
                        nc(e, r, !1);
                        break;
                    case "textarea":
                        Di(e),
                        ic(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Jt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Yn(e, !!r.multiple, s, !1) : r.defaultValue != null && Yn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ws)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return je(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Np(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = gn(ai.current),
            gn(pt.current),
            Ui(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ft] = t,
                (s = r.nodeValue !== n) && (e = _e,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Bi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Bi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ft] = t,
                t.stateNode = r
        }
        return je(t),
        null;
    case 13:
        if (G(Z),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Q && Ie !== null && t.mode & 1 && !(t.flags & 128))
                Bh(),
                ir(),
                t.flags |= 98560,
                s = !1;
            else if (s = Ui(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(P(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(P(317));
                    s[ft] = t
                } else
                    ir(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                je(t),
                s = !1
            } else
                rt !== null && (Xa(rt),
                rt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Z.current & 1 ? de === 0 && (de = 3) : tu())),
        t.updateQueue !== null && (t.flags |= 4),
        je(t),
        null);
    case 4:
        return or(),
        za(e, t),
        e === null && ri(t.stateNode.containerInfo),
        je(t),
        null;
    case 10:
        return Fl(t.type._context),
        je(t),
        null;
    case 17:
        return De(t.type) && Ss(),
        je(t),
        null;
    case 19:
        if (G(Z),
        s = t.memoizedState,
        s === null)
            return je(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                br(s, !1);
            else {
                if (de !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Ps(e),
                        o !== null) {
                            for (t.flags |= 128,
                            br(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return $(Z, Z.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && se() > lr && (t.flags |= 128,
                r = !0,
                br(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ps(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    br(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !Q)
                        return je(t),
                        null
                } else
                    2 * se() - s.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    br(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = se(),
        t.sibling = null,
        n = Z.current,
        $(Z, r ? n & 1 | 2 : n & 1),
        t) : (je(t),
        null);
    case 22:
    case 23:
        return eu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ve & 1073741824 && (je(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, t.tag))
}
function zv(e, t) {
    switch (Ll(t),
    t.tag) {
    case 1:
        return De(t.type) && Ss(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return or(),
        G(Ae),
        G(be),
        Hl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ul(t),
        null;
    case 13:
        if (G(Z),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            ir()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return G(Z),
        null;
    case 4:
        return or(),
        null;
    case 10:
        return Fl(t.type._context),
        null;
    case 22:
    case 23:
        return eu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var $i = !1
  , ke = !1
  , Bv = typeof WeakSet == "function" ? WeakSet : Set
  , D = null;
function Hn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ne(e, t, r)
            }
        else
            n.current = null
}
function Ba(e, t, n) {
    try {
        n()
    } catch (r) {
        ne(e, t, r)
    }
}
var Gc = !1;
function Uv(e, t) {
    if (ka = vs,
    e = Ph(),
    Al(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , u = -1
                      , c = 0
                      , d = 0
                      , f = e
                      , h = null;
                    t: for (; ; ) {
                        for (var v; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i),
                        f !== s || r !== 0 && f.nodeType !== 3 || (u = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (v = f.firstChild) !== null; )
                            h = f,
                            f = v;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (h === n && ++c === i && (a = o),
                            h === s && ++d === r && (u = o),
                            (v = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = v
                    }
                    n = a === -1 || u === -1 ? null : {
                        start: a,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ca = {
        focusedElem: e,
        selectionRange: n
    },
    vs = !1,
    D = t; D !== null; )
        if (t = D,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            D = e;
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var w = x.memoizedProps
                                  , N = x.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : tt(t.type, w), N);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (j) {
                    ne(t, t.return, j)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    D = e;
                    break
                }
                D = t.return
            }
    return x = Gc,
    Gc = !1,
    x
}
function Ur(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Ba(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function eo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ua(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function kp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    kp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ft],
    delete t[si],
    delete t[Pa],
    delete t[kv],
    delete t[Cv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Cp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Xc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Cp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ha(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ws));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ha(e, t, n),
        e = e.sibling; e !== null; )
            Ha(e, t, n),
            e = e.sibling
}
function Wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Wa(e, t, n),
        e = e.sibling; e !== null; )
            Wa(e, t, n),
            e = e.sibling
}
var ve = null
  , nt = !1;
function Dt(e, t, n) {
    for (n = n.child; n !== null; )
        bp(e, t, n),
        n = n.sibling
}
function bp(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
        try {
            ht.onCommitFiberUnmount(Ks, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ke || Hn(n, t);
    case 6:
        var r = ve
          , i = nt;
        ve = null,
        Dt(e, t, n),
        ve = r,
        nt = i,
        ve !== null && (nt ? (e = ve,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
        break;
    case 18:
        ve !== null && (nt ? (e = ve,
        n = n.stateNode,
        e.nodeType === 8 ? Ao(e.parentNode, n) : e.nodeType === 1 && Ao(e, n),
        ei(e)) : Ao(ve, n.stateNode));
        break;
    case 4:
        r = ve,
        i = nt,
        ve = n.stateNode.containerInfo,
        nt = !0,
        Dt(e, t, n),
        ve = r,
        nt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ke && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Ba(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Dt(e, t, n);
        break;
    case 1:
        if (!ke && (Hn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ne(n, t, a)
            }
        Dt(e, t, n);
        break;
    case 21:
        Dt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null,
        Dt(e, t, n),
        ke = r) : Dt(e, t, n);
        break;
    default:
        Dt(e, t, n)
    }
}
function Qc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Bv),
        t.forEach(function(r) {
            var i = Zv.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ve = a.stateNode,
                        nt = !1;
                        break e;
                    case 3:
                        ve = a.stateNode.containerInfo,
                        nt = !0;
                        break e;
                    case 4:
                        ve = a.stateNode.containerInfo,
                        nt = !0;
                        break e
                    }
                    a = a.return
                }
                if (ve === null)
                    throw Error(P(160));
                bp(s, o, i),
                ve = null,
                nt = !1;
                var u = i.alternate;
                u !== null && (u.return = null),
                i.return = null
            } catch (c) {
                ne(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Tp(t, e),
            t = t.sibling
}
function Tp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (qe(t, e),
        ut(e),
        r & 4) {
            try {
                Ur(3, e, e.return),
                eo(3, e)
            } catch (w) {
                ne(e, e.return, w)
            }
            try {
                Ur(5, e, e.return)
            } catch (w) {
                ne(e, e.return, w)
            }
        }
        break;
    case 1:
        qe(t, e),
        ut(e),
        r & 512 && n !== null && Hn(n, n.return);
        break;
    case 5:
        if (qe(t, e),
        ut(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Yr(i, "")
            } catch (w) {
                ne(e, e.return, w)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && Qf(i, s),
                    pa(a, o);
                    var c = pa(a, s);
                    for (o = 0; o < u.length; o += 2) {
                        var d = u[o]
                          , f = u[o + 1];
                        d === "style" ? eh(i, f) : d === "dangerouslySetInnerHTML" ? Jf(i, f) : d === "children" ? Yr(i, f) : xl(i, d, f, c)
                    }
                    switch (a) {
                    case "input":
                        ua(i, s);
                        break;
                    case "textarea":
                        Yf(i, s);
                        break;
                    case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var v = s.value;
                        v != null ? Yn(i, !!s.multiple, v, !1) : h !== !!s.multiple && (s.defaultValue != null ? Yn(i, !!s.multiple, s.defaultValue, !0) : Yn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[si] = s
                } catch (w) {
                    ne(e, e.return, w)
                }
        }
        break;
    case 6:
        if (qe(t, e),
        ut(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (w) {
                ne(e, e.return, w)
            }
        }
        break;
    case 3:
        if (qe(t, e),
        ut(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ei(t.containerInfo)
            } catch (w) {
                ne(e, e.return, w)
            }
        break;
    case 4:
        qe(t, e),
        ut(e);
        break;
    case 13:
        qe(t, e),
        ut(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Jl = se())),
        r & 4 && Qc(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ke = (c = ke) || d,
        qe(t, e),
        ke = c) : qe(t, e),
        ut(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (D = e,
                d = e.child; d !== null; ) {
                    for (f = D = d; D !== null; ) {
                        switch (h = D,
                        v = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ur(4, h, h.return);
                            break;
                        case 1:
                            Hn(h, h.return);
                            var x = h.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (w) {
                                    ne(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            Hn(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                Zc(f);
                                continue
                            }
                        }
                        v !== null ? (v.return = h,
                        D = v) : Zc(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            i = f.stateNode,
                            c ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                            u = f.memoizedProps.style,
                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                            a.style.display = qf("display", o))
                        } catch (w) {
                            ne(e, e.return, w)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (w) {
                            ne(e, e.return, w)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        qe(t, e),
        ut(e),
        r & 4 && Qc(e);
        break;
    case 21:
        break;
    default:
        qe(t, e),
        ut(e)
    }
}
function ut(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Cp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Yr(i, ""),
                r.flags &= -33);
                var s = Xc(e);
                Wa(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Xc(e);
                Ha(e, a, o);
                break;
            default:
                throw Error(P(161))
            }
        } catch (u) {
            ne(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Hv(e, t, n) {
    D = e,
    Pp(e)
}
function Pp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
        var i = D
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || $i;
            if (!o) {
                var a = i.alternate
                  , u = a !== null && a.memoizedState !== null || ke;
                a = $i;
                var c = ke;
                if ($i = o,
                (ke = u) && !c)
                    for (D = i; D !== null; )
                        o = D,
                        u = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Jc(i) : u !== null ? (u.return = o,
                        D = u) : Jc(i);
                for (; s !== null; )
                    D = s,
                    Pp(s),
                    s = s.sibling;
                D = i,
                $i = a,
                ke = c
            }
            Yc(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            D = s) : Yc(e)
    }
}
function Yc(e) {
    for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ke || eo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ke)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : tt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Lc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Lc(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && ei(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                    }
                ke || t.flags & 512 && Ua(t)
            } catch (h) {
                ne(t, t.return, h)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function Zc(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function Jc(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    eo(4, t)
                } catch (u) {
                    ne(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        ne(t, i, u)
                    }
                }
                var s = t.return;
                try {
                    Ua(t)
                } catch (u) {
                    ne(t, s, u)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Ua(t)
                } catch (u) {
                    ne(t, o, u)
                }
            }
        } catch (u) {
            ne(t, t.return, u)
        }
        if (t === e) {
            D = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            D = a;
            break
        }
        D = t.return
    }
}
var Wv = Math.ceil
  , Rs = Rt.ReactCurrentDispatcher
  , Yl = Rt.ReactCurrentOwner
  , Qe = Rt.ReactCurrentBatchConfig
  , U = 0
  , ge = null
  , le = null
  , xe = 0
  , Ve = 0
  , Wn = rn(0)
  , de = 0
  , di = null
  , kn = 0
  , to = 0
  , Zl = 0
  , Hr = null
  , Me = null
  , Jl = 0
  , lr = 1 / 0
  , xt = null
  , As = !1
  , $a = null
  , Gt = null
  , Ki = !1
  , zt = null
  , Ds = 0
  , Wr = 0
  , Ka = null
  , ss = -1
  , os = 0;
function Pe() {
    return U & 6 ? se() : ss !== -1 ? ss : ss = se()
}
function Xt(e) {
    return e.mode & 1 ? U & 2 && xe !== 0 ? xe & -xe : Tv.transition !== null ? (os === 0 && (os = fh()),
    os) : (e = H,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : xh(e.type)),
    e) : 1
}
function st(e, t, n, r) {
    if (50 < Wr)
        throw Wr = 0,
        Ka = null,
        Error(P(185));
    wi(e, n, r),
    (!(U & 2) || e !== ge) && (e === ge && (!(U & 2) && (to |= n),
    de === 4 && Ft(e, xe)),
    Le(e, r),
    n === 1 && U === 0 && !(t.mode & 1) && (lr = se() + 500,
    Zs && sn()))
}
function Le(e, t) {
    var n = e.callbackNode;
    Tg(e, t);
    var r = gs(e, e === ge ? xe : 0);
    if (r === 0)
        n !== null && ac(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ac(n),
        t === 1)
            e.tag === 0 ? bv(qc.bind(null, e)) : Fh(qc.bind(null, e)),
            jv(function() {
                !(U & 6) && sn()
            }),
            n = null;
        else {
            switch (hh(r)) {
            case 1:
                n = kl;
                break;
            case 4:
                n = ch;
                break;
            case 16:
                n = ms;
                break;
            case 536870912:
                n = dh;
                break;
            default:
                n = ms
            }
            n = Ip(n, Ep.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ep(e, t) {
    if (ss = -1,
    os = 0,
    U & 6)
        throw Error(P(327));
    var n = e.callbackNode;
    if (tr() && e.callbackNode !== n)
        return null;
    var r = gs(e, e === ge ? xe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ls(e, r);
    else {
        t = r;
        var i = U;
        U |= 2;
        var s = Rp();
        (ge !== e || xe !== t) && (xt = null,
        lr = se() + 500,
        yn(e, t));
        do
            try {
                Gv();
                break
            } catch (a) {
                Mp(e, a)
            }
        while (!0);
        _l(),
        Rs.current = s,
        U = i,
        le !== null ? t = 0 : (ge = null,
        xe = 0,
        t = de)
    }
    if (t !== 0) {
        if (t === 2 && (i = xa(e),
        i !== 0 && (r = i,
        t = Ga(e, i))),
        t === 1)
            throw n = di,
            yn(e, 0),
            Ft(e, r),
            Le(e, se()),
            n;
        if (t === 6)
            Ft(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !$v(i) && (t = Ls(e, r),
            t === 2 && (s = xa(e),
            s !== 0 && (r = s,
            t = Ga(e, s))),
            t === 1))
                throw n = di,
                yn(e, 0),
                Ft(e, r),
                Le(e, se()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                dn(e, Me, xt);
                break;
            case 3:
                if (Ft(e, r),
                (r & 130023424) === r && (t = Jl + 500 - se(),
                10 < t)) {
                    if (gs(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Pe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Ta(dn.bind(null, e, Me, xt), t);
                    break
                }
                dn(e, Me, xt);
                break;
            case 4:
                if (Ft(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = se() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ta(dn.bind(null, e, Me, xt), r);
                    break
                }
                dn(e, Me, xt);
                break;
            case 5:
                dn(e, Me, xt);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return Le(e, se()),
    e.callbackNode === n ? Ep.bind(null, e) : null
}
function Ga(e, t) {
    var n = Hr;
    return e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    e = Ls(e, t),
    e !== 2 && (t = Me,
    Me = n,
    t !== null && Xa(t)),
    e
}
function Xa(e) {
    Me === null ? Me = e : Me.push.apply(Me, e)
}
function $v(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!ot(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Ft(e, t) {
    for (t &= ~Zl,
    t &= ~to,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - it(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function qc(e) {
    if (U & 6)
        throw Error(P(327));
    tr();
    var t = gs(e, 0);
    if (!(t & 1))
        return Le(e, se()),
        null;
    var n = Ls(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = xa(e);
        r !== 0 && (t = r,
        n = Ga(e, r))
    }
    if (n === 1)
        throw n = di,
        yn(e, 0),
        Ft(e, t),
        Le(e, se()),
        n;
    if (n === 6)
        throw Error(P(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    dn(e, Me, xt),
    Le(e, se()),
    null
}
function ql(e, t) {
    var n = U;
    U |= 1;
    try {
        return e(t)
    } finally {
        U = n,
        U === 0 && (lr = se() + 500,
        Zs && sn())
    }
}
function Cn(e) {
    zt !== null && zt.tag === 0 && !(U & 6) && tr();
    var t = U;
    U |= 1;
    var n = Qe.transition
      , r = H;
    try {
        if (Qe.transition = null,
        H = 1,
        e)
            return e()
    } finally {
        H = r,
        Qe.transition = n,
        U = t,
        !(U & 6) && sn()
    }
}
function eu() {
    Ve = Wn.current,
    G(Wn)
}
function yn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Sv(n)),
    le !== null)
        for (n = le.return; n !== null; ) {
            var r = n;
            switch (Ll(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ss();
                break;
            case 3:
                or(),
                G(Ae),
                G(be),
                Hl();
                break;
            case 5:
                Ul(r);
                break;
            case 4:
                or();
                break;
            case 13:
                G(Z);
                break;
            case 19:
                G(Z);
                break;
            case 10:
                Fl(r.type._context);
                break;
            case 22:
            case 23:
                eu()
            }
            n = n.return
        }
    if (ge = e,
    le = e = Qt(e.current, null),
    xe = Ve = t,
    de = 0,
    di = null,
    Zl = to = kn = 0,
    Me = Hr = null,
    mn !== null) {
        for (t = 0; t < mn.length; t++)
            if (n = mn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        mn = null
    }
    return e
}
function Mp(e, t) {
    do {
        var n = le;
        try {
            if (_l(),
            ns.current = Ms,
            Es) {
                for (var r = q.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Es = !1
            }
            if (Nn = 0,
            me = ce = q = null,
            Br = !1,
            li = 0,
            Yl.current = null,
            n === null || n.return === null) {
                de = 1,
                di = t,
                le = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , u = t;
                if (t = xe,
                a.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , d = a
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                        d.memoizedState = h.memoizedState,
                        d.lanes = h.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var v = zc(o);
                    if (v !== null) {
                        v.flags &= -257,
                        Bc(v, o, a, s, t),
                        v.mode & 1 && Oc(s, c, t),
                        t = v,
                        u = c;
                        var x = t.updateQueue;
                        if (x === null) {
                            var w = new Set;
                            w.add(u),
                            t.updateQueue = w
                        } else
                            x.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Oc(s, c, t),
                            tu();
                            break e
                        }
                        u = Error(P(426))
                    }
                } else if (Q && a.mode & 1) {
                    var N = zc(o);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256),
                        Bc(N, o, a, s, t),
                        Vl(ar(u, a));
                        break e
                    }
                }
                s = u = ar(u, a),
                de !== 4 && (de = 2),
                Hr === null ? Hr = [s] : Hr.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = hp(s, u, t);
                        Dc(s, m);
                        break e;
                    case 1:
                        a = u;
                        var p = s.type
                          , g = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Gt === null || !Gt.has(g)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var j = pp(s, a, t);
                            Dc(s, j);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Dp(n)
        } catch (k) {
            t = k,
            le === n && n !== null && (le = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Rp() {
    var e = Rs.current;
    return Rs.current = Ms,
    e === null ? Ms : e
}
function tu() {
    (de === 0 || de === 3 || de === 2) && (de = 4),
    ge === null || !(kn & 268435455) && !(to & 268435455) || Ft(ge, xe)
}
function Ls(e, t) {
    var n = U;
    U |= 2;
    var r = Rp();
    (ge !== e || xe !== t) && (xt = null,
    yn(e, t));
    do
        try {
            Kv();
            break
        } catch (i) {
            Mp(e, i)
        }
    while (!0);
    if (_l(),
    U = n,
    Rs.current = r,
    le !== null)
        throw Error(P(261));
    return ge = null,
    xe = 0,
    de
}
function Kv() {
    for (; le !== null; )
        Ap(le)
}
function Gv() {
    for (; le !== null && !yg(); )
        Ap(le)
}
function Ap(e) {
    var t = Vp(e.alternate, e, Ve);
    e.memoizedProps = e.pendingProps,
    t === null ? Dp(e) : le = t,
    Yl.current = null
}
function Dp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = zv(n, t),
            n !== null) {
                n.flags &= 32767,
                le = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                de = 6,
                le = null;
                return
            }
        } else if (n = Ov(n, t, Ve),
        n !== null) {
            le = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            le = t;
            return
        }
        le = t = e
    } while (t !== null);
    de === 0 && (de = 5)
}
function dn(e, t, n) {
    var r = H
      , i = Qe.transition;
    try {
        Qe.transition = null,
        H = 1,
        Xv(e, t, n, r)
    } finally {
        Qe.transition = i,
        H = r
    }
    return null
}
function Xv(e, t, n, r) {
    do
        tr();
    while (zt !== null);
    if (U & 6)
        throw Error(P(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(P(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Pg(e, s),
    e === ge && (le = ge = null,
    xe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ki || (Ki = !0,
    Ip(ms, function() {
        return tr(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Qe.transition,
        Qe.transition = null;
        var o = H;
        H = 1;
        var a = U;
        U |= 4,
        Yl.current = null,
        Uv(e, n),
        Tp(n, e),
        pv(Ca),
        vs = !!ka,
        Ca = ka = null,
        e.current = n,
        Hv(n),
        xg(),
        U = a,
        H = o,
        Qe.transition = s
    } else
        e.current = n;
    if (Ki && (Ki = !1,
    zt = e,
    Ds = i),
    s = e.pendingLanes,
    s === 0 && (Gt = null),
    jg(n.stateNode),
    Le(e, se()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (As)
        throw As = !1,
        e = $a,
        $a = null,
        e;
    return Ds & 1 && e.tag !== 0 && tr(),
    s = e.pendingLanes,
    s & 1 ? e === Ka ? Wr++ : (Wr = 0,
    Ka = e) : Wr = 0,
    sn(),
    null
}
function tr() {
    if (zt !== null) {
        var e = hh(Ds)
          , t = Qe.transition
          , n = H;
        try {
            if (Qe.transition = null,
            H = 16 > e ? 16 : e,
            zt === null)
                var r = !1;
            else {
                if (e = zt,
                zt = null,
                Ds = 0,
                U & 6)
                    throw Error(P(331));
                var i = U;
                for (U |= 4,
                D = e.current; D !== null; ) {
                    var s = D
                      , o = s.child;
                    if (D.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var c = a[u];
                                for (D = c; D !== null; ) {
                                    var d = D;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ur(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        D = f;
                                    else
                                        for (; D !== null; ) {
                                            d = D;
                                            var h = d.sibling
                                              , v = d.return;
                                            if (kp(d),
                                            d === c) {
                                                D = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                D = h;
                                                break
                                            }
                                            D = v
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var w = x.child;
                                if (w !== null) {
                                    x.child = null;
                                    do {
                                        var N = w.sibling;
                                        w.sibling = null,
                                        w = N
                                    } while (w !== null)
                                }
                            }
                            D = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        D = o;
                    else
                        e: for (; D !== null; ) {
                            if (s = D,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ur(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                D = m;
                                break e
                            }
                            D = s.return
                        }
                }
                var p = e.current;
                for (D = p; D !== null; ) {
                    o = D;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                        D = g;
                    else
                        e: for (o = p; D !== null; ) {
                            if (a = D,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        eo(9, a)
                                    }
                                } catch (k) {
                                    ne(a, a.return, k)
                                }
                            if (a === o) {
                                D = null;
                                break e
                            }
                            var j = a.sibling;
                            if (j !== null) {
                                j.return = a.return,
                                D = j;
                                break e
                            }
                            D = a.return
                        }
                }
                if (U = i,
                sn(),
                ht && typeof ht.onPostCommitFiberRoot == "function")
                    try {
                        ht.onPostCommitFiberRoot(Ks, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            H = n,
            Qe.transition = t
        }
    }
    return !1
}
function ed(e, t, n) {
    t = ar(n, t),
    t = hp(e, t, 1),
    e = Kt(e, t, 1),
    t = Pe(),
    e !== null && (wi(e, 1, t),
    Le(e, t))
}
function ne(e, t, n) {
    if (e.tag === 3)
        ed(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ed(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r))) {
                    e = ar(n, e),
                    e = pp(t, e, 1),
                    t = Kt(t, e, 1),
                    e = Pe(),
                    t !== null && (wi(t, 1, e),
                    Le(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Qv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Pe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ge === e && (xe & n) === n && (de === 4 || de === 3 && (xe & 130023424) === xe && 500 > se() - Jl ? yn(e, 0) : Zl |= n),
    Le(e, t)
}
function Lp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ii,
    Ii <<= 1,
    !(Ii & 130023424) && (Ii = 4194304)) : t = 1);
    var n = Pe();
    e = Pt(e, t),
    e !== null && (wi(e, t, n),
    Le(e, n))
}
function Yv(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Lp(e, n)
}
function Zv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(t),
    Lp(e, n)
}
var Vp;
Vp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ae.current)
            Re = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Re = !1,
                Fv(e, t, n);
            Re = !!(e.flags & 131072)
        }
    else
        Re = !1,
        Q && t.flags & 1048576 && Oh(t, ks, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        is(e, t),
        e = t.pendingProps;
        var i = rr(t, be.current);
        er(t, n),
        i = $l(null, t, r, e, i, n);
        var s = Kl();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        De(r) ? (s = !0,
        js(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        zl(t),
        i.updater = qs,
        t.stateNode = i,
        i._reactInternals = t,
        La(t, r, e, n),
        t = _a(null, t, r, !0, s, n)) : (t.tag = 0,
        Q && s && Dl(t),
        Te(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (is(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = qv(r),
            e = tt(r, e),
            i) {
            case 0:
                t = Ia(null, t, r, e, n);
                break e;
            case 1:
                t = Wc(null, t, r, e, n);
                break e;
            case 11:
                t = Uc(null, t, r, e, n);
                break e;
            case 14:
                t = Hc(null, t, r, tt(r.type, e), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        Ia(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        Wc(e, t, r, i, n);
    case 3:
        e: {
            if (yp(t),
            e === null)
                throw Error(P(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            $h(e, t),
            Ts(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = ar(Error(P(423)), t),
                    t = $c(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = ar(Error(P(424)), t),
                    t = $c(e, t, r, n, i);
                    break e
                } else
                    for (Ie = $t(t.stateNode.containerInfo.firstChild),
                    _e = t,
                    Q = !0,
                    rt = null,
                    n = Hh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ir(),
                r === i) {
                    t = Et(e, t, n);
                    break e
                }
                Te(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Kh(t),
        e === null && Ra(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        ba(r, i) ? o = null : s !== null && ba(r, s) && (t.flags |= 32),
        vp(e, t),
        Te(e, t, o, n),
        t.child;
    case 6:
        return e === null && Ra(t),
        null;
    case 13:
        return xp(e, t, n);
    case 4:
        return Bl(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = sr(t, null, r, n) : Te(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        Uc(e, t, r, i, n);
    case 7:
        return Te(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Te(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Te(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            $(Cs, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (ot(s.value, o)) {
                    if (s.children === i.children && !Ae.current) {
                        t = Et(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var u = a.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (s.tag === 1) {
                                        u = Nt(-1, n & -n),
                                        u.tag = 2;
                                        var c = s.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? u.next = u : (u.next = d.next,
                                            d.next = u),
                                            c.pending = u
                                        }
                                    }
                                    s.lanes |= n,
                                    u = s.alternate,
                                    u !== null && (u.lanes |= n),
                                    Aa(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(P(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            Aa(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Te(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        er(t, n),
        i = Ye(i),
        r = r(i),
        t.flags |= 1,
        Te(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = tt(r, t.pendingProps),
        i = tt(r.type, i),
        Hc(e, t, r, i, n);
    case 15:
        return mp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        is(e, t),
        t.tag = 1,
        De(r) ? (e = !0,
        js(t)) : e = !1,
        er(t, n),
        fp(t, r, i),
        La(t, r, i, n),
        _a(null, t, r, !0, e, n);
    case 19:
        return wp(e, t, n);
    case 22:
        return gp(e, t, n)
    }
    throw Error(P(156, t.tag))
}
;
function Ip(e, t) {
    return uh(e, t)
}
function Jv(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Xe(e, t, n, r) {
    return new Jv(e,t,n,r)
}
function nu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function qv(e) {
    if (typeof e == "function")
        return nu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Sl)
            return 11;
        if (e === jl)
            return 14
    }
    return 2
}
function Qt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Xe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function as(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        nu(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Ln:
            return xn(n.children, i, s, t);
        case wl:
            o = 8,
            i |= 8;
            break;
        case ia:
            return e = Xe(12, n, t, i | 2),
            e.elementType = ia,
            e.lanes = s,
            e;
        case sa:
            return e = Xe(13, n, t, i),
            e.elementType = sa,
            e.lanes = s,
            e;
        case oa:
            return e = Xe(19, n, t, i),
            e.elementType = oa,
            e.lanes = s,
            e;
        case Kf:
            return no(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wf:
                    o = 10;
                    break e;
                case $f:
                    o = 9;
                    break e;
                case Sl:
                    o = 11;
                    break e;
                case jl:
                    o = 14;
                    break e;
                case Vt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, e == null ? e : typeof e, ""))
        }
    return t = Xe(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function xn(e, t, n, r) {
    return e = Xe(7, e, r, t),
    e.lanes = n,
    e
}
function no(e, t, n, r) {
    return e = Xe(22, e, r, t),
    e.elementType = Kf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function zo(e, t, n) {
    return e = Xe(6, e, null, t),
    e.lanes = n,
    e
}
function Bo(e, t, n) {
    return t = Xe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function ey(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = So(0),
    this.expirationTimes = So(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = So(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function ru(e, t, n, r, i, s, o, a, u) {
    return e = new ey(e,t,n,a,u),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Xe(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    zl(s),
    e
}
function ty(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Dn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function _p(e) {
    if (!e)
        return qt;
    e = e._reactInternals;
    e: {
        if (Tn(e) !== e || e.tag !== 1)
            throw Error(P(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (De(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (De(n))
            return _h(e, n, t)
    }
    return t
}
function Fp(e, t, n, r, i, s, o, a, u) {
    return e = ru(n, r, !0, e, i, s, o, a, u),
    e.context = _p(null),
    n = e.current,
    r = Pe(),
    i = Xt(n),
    s = Nt(r, i),
    s.callback = t ?? null,
    Kt(n, s, i),
    e.current.lanes = i,
    wi(e, i, r),
    Le(e, r),
    e
}
function ro(e, t, n, r) {
    var i = t.current
      , s = Pe()
      , o = Xt(i);
    return n = _p(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Nt(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Kt(i, t, o),
    e !== null && (st(e, i, o, s),
    ts(e, i, o)),
    o
}
function Vs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function td(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function iu(e, t) {
    td(e, t),
    (e = e.alternate) && td(e, t)
}
function ny() {
    return null
}
var Op = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function su(e) {
    this._internalRoot = e
}
io.prototype.render = su.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(P(409));
    ro(e, t, null, null)
}
;
io.prototype.unmount = su.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Cn(function() {
            ro(null, e, null, null)
        }),
        t[Tt] = null
    }
}
;
function io(e) {
    this._internalRoot = e
}
io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = gh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++)
            ;
        _t.splice(n, 0, e),
        n === 0 && yh(e)
    }
}
;
function ou(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function so(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function nd() {}
function ry(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = Vs(o);
                s.call(c)
            }
        }
        var o = Fp(t, r, e, 0, null, !1, !1, "", nd);
        return e._reactRootContainer = o,
        e[Tt] = o.current,
        ri(e.nodeType === 8 ? e.parentNode : e),
        Cn(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = Vs(u);
            a.call(c)
        }
    }
    var u = ru(e, 0, !1, null, null, !1, !1, "", nd);
    return e._reactRootContainer = u,
    e[Tt] = u.current,
    ri(e.nodeType === 8 ? e.parentNode : e),
    Cn(function() {
        ro(t, u, n, r)
    }),
    u
}
function oo(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var u = Vs(o);
                a.call(u)
            }
        }
        ro(t, o, e, i)
    } else
        o = ry(n, t, e, i, r);
    return Vs(o)
}
ph = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Rr(t.pendingLanes);
            n !== 0 && (Cl(t, n | 1),
            Le(t, se()),
            !(U & 6) && (lr = se() + 500,
            sn()))
        }
        break;
    case 13:
        Cn(function() {
            var r = Pt(e, 1);
            if (r !== null) {
                var i = Pe();
                st(r, e, 1, i)
            }
        }),
        iu(e, 1)
    }
}
;
bl = function(e) {
    if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
            var n = Pe();
            st(t, e, 134217728, n)
        }
        iu(e, 134217728)
    }
}
;
mh = function(e) {
    if (e.tag === 13) {
        var t = Xt(e)
          , n = Pt(e, t);
        if (n !== null) {
            var r = Pe();
            st(n, e, t, r)
        }
        iu(e, t)
    }
}
;
gh = function() {
    return H
}
;
vh = function(e, t) {
    var n = H;
    try {
        return H = e,
        t()
    } finally {
        H = n
    }
}
;
ga = function(e, t, n) {
    switch (t) {
    case "input":
        if (ua(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Ys(r);
                    if (!i)
                        throw Error(P(90));
                    Xf(r),
                    ua(r, i)
                }
            }
        }
        break;
    case "textarea":
        Yf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Yn(e, !!n.multiple, t, !1)
    }
}
;
rh = ql;
ih = Cn;
var iy = {
    usingClientEntryPoint: !1,
    Events: [ji, Fn, Ys, th, nh, ql]
}
  , Tr = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , sy = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ah(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gi.isDisabled && Gi.supportsFiber)
        try {
            Ks = Gi.inject(sy),
            ht = Gi
        } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy;
Be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ou(t))
        throw Error(P(200));
    return ty(e, t, null, n)
}
;
Be.createRoot = function(e, t) {
    if (!ou(e))
        throw Error(P(299));
    var n = !1
      , r = ""
      , i = Op;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = ru(e, 1, !1, null, null, n, !1, r, i),
    e[Tt] = t.current,
    ri(e.nodeType === 8 ? e.parentNode : e),
    new su(t)
}
;
Be.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","),
        Error(P(268, e)));
    return e = ah(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Be.flushSync = function(e) {
    return Cn(e)
}
;
Be.hydrate = function(e, t, n) {
    if (!so(t))
        throw Error(P(200));
    return oo(null, e, t, !0, n)
}
;
Be.hydrateRoot = function(e, t, n) {
    if (!ou(e))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = Op;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Fp(t, null, e, 1, n ?? null, i, !1, s, o),
    e[Tt] = t.current,
    ri(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new io(t)
}
;
Be.render = function(e, t, n) {
    if (!so(t))
        throw Error(P(200));
    return oo(null, e, t, !1, n)
}
;
Be.unmountComponentAtNode = function(e) {
    if (!so(e))
        throw Error(P(40));
    return e._reactRootContainer ? (Cn(function() {
        oo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Tt] = null
        })
    }),
    !0) : !1
}
;
Be.unstable_batchedUpdates = ql;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!so(n))
        throw Error(P(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(P(38));
    return oo(e, t, n, !1, r)
}
;
Be.version = "18.3.1-next-f1338f8080-20240426";
function zp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zp)
        } catch (e) {
            console.error(e)
        }
}
zp(),
zf.exports = Be;
var oy = zf.exports, Bp, rd = oy;
Bp = rd.createRoot,
rd.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fi() {
    return fi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fi.apply(this, arguments)
}
var Bt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Bt || (Bt = {}));
const id = "popstate";
function ay(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return Qa("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : Is(i)
    }
    return uy(t, n, null, e)
}
function ue(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Up(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function ly() {
    return Math.random().toString(36).substr(2, 8)
}
function sd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Qa(e, t, n, r) {
    return n === void 0 && (n = null),
    fi({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? pr(t) : t, {
        state: n,
        key: t && t.key || r || ly()
    })
}
function Is(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function pr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function uy(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = Bt.Pop
      , u = null
      , c = d();
    c == null && (c = 0,
    o.replaceState(fi({}, o.state, {
        idx: c
    }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Bt.Pop;
        let N = d()
          , m = N == null ? null : N - c;
        c = N,
        u && u({
            action: a,
            location: w.location,
            delta: m
        })
    }
    function h(N, m) {
        a = Bt.Push;
        let p = Qa(w.location, N, m);
        c = d() + 1;
        let g = sd(p, c)
          , j = w.createHref(p);
        try {
            o.pushState(g, "", j)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError")
                throw k;
            i.location.assign(j)
        }
        s && u && u({
            action: a,
            location: w.location,
            delta: 1
        })
    }
    function v(N, m) {
        a = Bt.Replace;
        let p = Qa(w.location, N, m);
        c = d();
        let g = sd(p, c)
          , j = w.createHref(p);
        o.replaceState(g, "", j),
        s && u && u({
            action: a,
            location: w.location,
            delta: 0
        })
    }
    function x(N) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof N == "string" ? N : Is(N);
        return p = p.replace(/ $/, "%20"),
        ue(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(N) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(id, f),
            u = N,
            () => {
                i.removeEventListener(id, f),
                u = null
            }
        },
        createHref(N) {
            return t(i, N)
        },
        createURL: x,
        encodeLocation(N) {
            let m = x(N);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: v,
        go(N) {
            return o.go(N)
        }
    };
    return w
}
var od;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(od || (od = {}));
function cy(e, t, n) {
    return n === void 0 && (n = "/"),
    dy(e, t, n, !1)
}
function dy(e, t, n, r) {
    let i = typeof t == "string" ? pr(t) : t
      , s = au(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = Hp(e);
    fy(o);
    let a = null;
    for (let u = 0; a == null && u < o.length; ++u) {
        let c = Ny(s);
        a = Sy(o[u], c, r)
    }
    return a
}
function Hp(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, a) => {
        let u = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        u.relativePath.startsWith("/") && (ue(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        u.relativePath = u.relativePath.slice(r.length));
        let c = Yt([r, u.relativePath])
          , d = n.concat(u);
        s.children && s.children.length > 0 && (ue(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        Hp(s.children, t, d, c)),
        !(s.path == null && !s.index) && t.push({
            path: c,
            score: xy(c, s.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
        else
            for (let u of Wp(s.path))
                i(s, o, u)
    }
    ),
    t
}
function Wp(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = Wp(r.join("/"))
      , a = [];
    return a.push(...o.map(u => u === "" ? s : [s, u].join("/"))),
    i && a.push(...o),
    a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function fy(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : wy(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const hy = /^:[\w-]+$/
  , py = 3
  , my = 2
  , gy = 1
  , vy = 10
  , yy = -2
  , ad = e => e === "*";
function xy(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(ad) && (r += yy),
    t && (r += my),
    n.filter(i => !ad(i)).reduce( (i, s) => i + (hy.test(s) ? py : s === "" ? gy : vy), r)
}
function wy(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Sy(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let u = r[a]
          , c = a === r.length - 1
          , d = s === "/" ? t : t.slice(s.length) || "/"
          , f = ld({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: c
        }, d)
          , h = u.route;
        if (!f && c && n && !r[r.length - 1].route.index && (f = ld({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(i, f.params),
        o.push({
            params: i,
            pathname: Yt([s, f.pathname]),
            pathnameBase: Ty(Yt([s, f.pathnameBase])),
            route: h
        }),
        f.pathnameBase !== "/" && (s = Yt([s, f.pathnameBase]))
    }
    return o
}
function ld(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = jy(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (c, d, f) => {
            let {paramName: h, isOptional: v} = d;
            if (h === "*") {
                let w = a[f] || "";
                o = s.slice(0, s.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[f];
            return v && !x ? c[h] = void 0 : c[h] = (x || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function jy(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Up(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, u) => (r.push({
        paramName: a,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Ny(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Up(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function au(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function ky(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? pr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Cy(n, t) : t,
        search: Py(r),
        hash: Ey(i)
    }
}
function Cy(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Uo(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function by(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function $p(e, t) {
    let n = by(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Kp(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = pr(e) : (i = fi({}, e),
    ue(!i.pathname || !i.pathname.includes("?"), Uo("?", "pathname", "search", i)),
    ue(!i.pathname || !i.pathname.includes("#"), Uo("#", "pathname", "hash", i)),
    ue(!i.search || !i.search.includes("#"), Uo("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a;
    if (o == null)
        a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                f -= 1;
            i.pathname = h.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let u = ky(i, a)
      , c = o && o !== "/" && o.endsWith("/")
      , d = (s || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"),
    u
}
const Yt = e => e.join("/").replace(/\/\/+/g, "/")
  , Ty = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Py = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Ey = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function My(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Gp = ["post", "put", "patch", "delete"];
new Set(Gp);
const Ry = ["get", ...Gp];
new Set(Ry);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function hi() {
    return hi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    hi.apply(this, arguments)
}
const lu = y.createContext(null)
  , Ay = y.createContext(null)
  , Pn = y.createContext(null)
  , ao = y.createContext(null)
  , En = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Xp = y.createContext(null);
function Dy(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    ki() || ue(!1);
    let {basename: r, navigator: i} = y.useContext(Pn)
      , {hash: s, pathname: o, search: a} = Zp(e, {
        relative: n
    })
      , u = o;
    return r !== "/" && (u = o === "/" ? r : Yt([r, o])),
    i.createHref({
        pathname: u,
        search: a,
        hash: s
    })
}
function ki() {
    return y.useContext(ao) != null
}
function mr() {
    return ki() || ue(!1),
    y.useContext(ao).location
}
function Qp(e) {
    y.useContext(Pn).static || y.useLayoutEffect(e)
}
function Yp() {
    let {isDataRoute: e} = y.useContext(En);
    return e ? Ky() : Ly()
}
function Ly() {
    ki() || ue(!1);
    let e = y.useContext(lu)
      , {basename: t, future: n, navigator: r} = y.useContext(Pn)
      , {matches: i} = y.useContext(En)
      , {pathname: s} = mr()
      , o = JSON.stringify($p(i, n.v7_relativeSplatPath))
      , a = y.useRef(!1);
    return Qp( () => {
        a.current = !0
    }
    ),
    y.useCallback(function(c, d) {
        if (d === void 0 && (d = {}),
        !a.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let f = Kp(c, JSON.parse(o), s, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Yt([t, f.pathname])),
        (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, o, s, e])
}
function Zp(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = y.useContext(Pn)
      , {matches: i} = y.useContext(En)
      , {pathname: s} = mr()
      , o = JSON.stringify($p(i, r.v7_relativeSplatPath));
    return y.useMemo( () => Kp(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}
function Vy(e, t) {
    return Iy(e, t)
}
function Iy(e, t, n, r) {
    ki() || ue(!1);
    let {navigator: i} = y.useContext(Pn)
      , {matches: s} = y.useContext(En)
      , o = s[s.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let c = mr(), d;
    if (t) {
        var f;
        let N = typeof t == "string" ? pr(t) : t;
        u === "/" || (f = N.pathname) != null && f.startsWith(u) || ue(!1),
        d = N
    } else
        d = c;
    let h = d.pathname || "/"
      , v = h;
    if (u !== "/") {
        let N = u.replace(/^\//, "").split("/");
        v = "/" + h.replace(/^\//, "").split("/").slice(N.length).join("/")
    }
    let x = cy(e, {
        pathname: v
    })
      , w = By(x && x.map(N => Object.assign({}, N, {
        params: Object.assign({}, a, N.params),
        pathname: Yt([u, i.encodeLocation ? i.encodeLocation(N.pathname).pathname : N.pathname]),
        pathnameBase: N.pathnameBase === "/" ? u : Yt([u, i.encodeLocation ? i.encodeLocation(N.pathnameBase).pathname : N.pathnameBase])
    })), s, n, r);
    return t && w ? y.createElement(ao.Provider, {
        value: {
            location: hi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Bt.Pop
        }
    }, w) : w
}
function _y() {
    let e = $y()
      , t = My(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? y.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Fy = y.createElement(_y, null);
class Oy extends y.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? y.createElement(En.Provider, {
            value: this.props.routeContext
        }, y.createElement(Xp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function zy(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = y.useContext(lu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(En.Provider, {
        value: t
    }, r)
}
function By(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let d = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        d >= 0 || ue(!1),
        o = o.slice(0, Math.min(o.length, d + 1))
    }
    let u = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let f = o[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
            f.route.id) {
                let {loaderData: h, errors: v} = n
                  , x = f.route.loader && h[f.route.id] === void 0 && (!v || v[f.route.id] === void 0);
                if (f.route.lazy || x) {
                    u = !0,
                    c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (d, f, h) => {
        let v, x = !1, w = null, N = null;
        n && (v = a && f.route.id ? a[f.route.id] : void 0,
        w = f.route.errorElement || Fy,
        u && (c < 0 && h === 0 ? (x = !0,
        N = null) : c === h && (x = !0,
        N = f.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, h + 1))
          , p = () => {
            let g;
            return v ? g = w : x ? g = N : f.route.Component ? g = y.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = d,
            y.createElement(zy, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? y.createElement(Oy, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: v,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Jp = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Jp || {})
  , _s = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(_s || {});
function Uy(e) {
    let t = y.useContext(lu);
    return t || ue(!1),
    t
}
function Hy(e) {
    let t = y.useContext(Ay);
    return t || ue(!1),
    t
}
function Wy(e) {
    let t = y.useContext(En);
    return t || ue(!1),
    t
}
function qp(e) {
    let t = Wy()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || ue(!1),
    n.route.id
}
function $y() {
    var e;
    let t = y.useContext(Xp)
      , n = Hy(_s.UseRouteError)
      , r = qp(_s.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Ky() {
    let {router: e} = Uy(Jp.UseNavigateStable)
      , t = qp(_s.UseNavigateStable)
      , n = y.useRef(!1);
    return Qp( () => {
        n.current = !0
    }
    ),
    y.useCallback(function(i, s) {
        s === void 0 && (s = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, hi({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
const ud = {};
function Gy(e, t) {
    ud[t] || (ud[t] = !0,
    console.warn(t))
}
const cd = (e, t, n) => Gy(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function Xy(e, t) {
    (e == null ? void 0 : e.v7_startTransition) === void 0 && cd("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && !t && cd("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}
function ct(e) {
    ue(!1)
}
function Qy(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Bt.Pop, navigator: s, static: o=!1, future: a} = e;
    ki() && ue(!1);
    let u = t.replace(/^\/*/, "/")
      , c = y.useMemo( () => ({
        basename: u,
        navigator: s,
        static: o,
        future: hi({
            v7_relativeSplatPath: !1
        }, a)
    }), [u, a, s, o]);
    typeof r == "string" && (r = pr(r));
    let {pathname: d="/", search: f="", hash: h="", state: v=null, key: x="default"} = r
      , w = y.useMemo( () => {
        let N = au(d, u);
        return N == null ? null : {
            location: {
                pathname: N,
                search: f,
                hash: h,
                state: v,
                key: x
            },
            navigationType: i
        }
    }
    , [u, d, f, h, v, x, i]);
    return w == null ? null : y.createElement(Pn.Provider, {
        value: c
    }, y.createElement(ao.Provider, {
        children: n,
        value: w
    }))
}
function Yy(e) {
    let {children: t, location: n} = e;
    return Vy(Ya(t), n)
}
new Promise( () => {}
);
function Ya(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return y.Children.forEach(e, (r, i) => {
        if (!y.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === y.Fragment) {
            n.push.apply(n, Ya(r.props.children, s));
            return
        }
        r.type !== ct && ue(!1),
        !r.props.index || !r.props.children || ue(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Ya(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Za() {
    return Za = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Za.apply(this, arguments)
}
function Zy(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function Jy(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function qy(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Jy(e)
}
const ex = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , tx = "6";
try {
    window.__reactRouterVersion = tx
} catch {}
const nx = "startTransition"
  , dd = X0[nx];
function rx(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = y.useRef();
    s.current == null && (s.current = ay({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [a,u] = y.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: c} = r || {}
      , d = y.useCallback(f => {
        c && dd ? dd( () => u(f)) : u(f)
    }
    , [u, c]);
    return y.useLayoutEffect( () => o.listen(d), [o, d]),
    y.useEffect( () => Xy(r), [r]),
    y.createElement(Qy, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const ix = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , sx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Zt = y.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: s, replace: o, state: a, target: u, to: c, preventScrollReset: d, viewTransition: f} = t, h = Zy(t, ex), {basename: v} = y.useContext(Pn), x, w = !1;
    if (typeof c == "string" && sx.test(c) && (x = c,
    ix))
        try {
            let g = new URL(window.location.href)
              , j = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c)
              , k = au(j.pathname, v);
            j.origin === g.origin && k != null ? c = k + j.search + j.hash : w = !0
        } catch {}
    let N = Dy(c, {
        relative: i
    })
      , m = ox(c, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: i,
        viewTransition: f
    });
    function p(g) {
        r && r(g),
        g.defaultPrevented || m(g)
    }
    return y.createElement("a", Za({}, h, {
        href: x || N,
        onClick: w || s ? r : p,
        ref: n,
        target: u
    }))
});
var fd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(fd || (fd = {}));
var hd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(hd || (hd = {}));
function ox(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: s, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , u = Yp()
      , c = mr()
      , d = Zp(e, {
        relative: o
    });
    return y.useCallback(f => {
        if (qy(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : Is(c) === Is(d);
            u(e, {
                replace: h,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [c, u, d, r, i, n, e, s, o, a])
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ax = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , B = (e, t) => {
    const n = y.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: a="", children: u, ...c}, d) => y.createElement("svg", {
        ref: d,
        ...ax,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: o ? Number(s) * 24 / Number(i) : s,
        className: ["lucide", `lucide-${lx(e)}`, a].join(" "),
        ...c
    }, [...t.map( ([f,h]) => y.createElement(f, h)), ...Array.isArray(u) ? u : [u]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = B("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = B("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = B("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = B("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = B("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = B("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = B("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = B("Coins", [["circle", {
    cx: "8",
    cy: "8",
    r: "6",
    key: "3yglwk"
}], ["path", {
    d: "M18.09 10.37A6 6 0 1 1 10.34 18",
    key: "t5s6rm"
}], ["path", {
    d: "M7 6h1v4",
    key: "1obek4"
}], ["path", {
    d: "m16.71 13.88.7.71-2.82 2.82",
    key: "1rbuyh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = B("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = B("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = B("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = B("FileCode2", [["path", {
    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
    key: "1pf5j1"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "m5 12-3 3 3 3",
    key: "oke12k"
}], ["path", {
    d: "m9 18 3-3-3-3",
    key: "112psh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = B("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = B("Fingerprint", [["path", {
    d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
    key: "1jc9o5"
}], ["path", {
    d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",
    key: "1mxgy1"
}], ["path", {
    d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
    key: "ptglia"
}], ["path", {
    d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
    key: "1nerag"
}], ["path", {
    d: "M8.65 22c.21-.66.45-1.32.57-2",
    key: "13wd9y"
}], ["path", {
    d: "M14 13.12c0 2.38 0 6.38-1 8.88",
    key: "o46ks0"
}], ["path", {
    d: "M2 16h.01",
    key: "1gqxmh"
}], ["path", {
    d: "M21.8 16c.2-2 .131-5.354 0-6",
    key: "drycrb"
}], ["path", {
    d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",
    key: "1fgabc"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = B("FolderOpen", [["path", {
    d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
    key: "usdka0"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = B("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = B("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = B("HelpCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = B("Loader2", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = B("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = B("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = B("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = B("Pen", [["path", {
    d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
    key: "5qss01"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = B("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = B("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = B("Save", [["path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    key: "1owoqh"
}], ["polyline", {
    points: "17 21 17 13 7 13 7 21",
    key: "1md35c"
}], ["polyline", {
    points: "7 3 7 8 15 8",
    key: "8nz8an"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = B("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = B("Settings2", [["path", {
    d: "M20 7h-9",
    key: "3s1dr2"
}], ["path", {
    d: "M14 17H5",
    key: "gfn3mx"
}], ["circle", {
    cx: "17",
    cy: "17",
    r: "3",
    key: "18b49y"
}], ["circle", {
    cx: "7",
    cy: "7",
    r: "3",
    key: "dfmy0x"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = B("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = B("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = B("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = B("Terminal", [["polyline", {
    points: "4 17 10 11 4 5",
    key: "akl6gq"
}], ["line", {
    x1: "12",
    x2: "20",
    y1: "19",
    y2: "19",
    key: "q2wloq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = B("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = B("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wd = B("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = B("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , uu = y.createContext({});
function cu(e) {
    const t = y.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const co = y.createContext(null)
  , du = y.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class Px extends y.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Ex({children: e, isPresent: t}) {
    const n = y.useId()
      , r = y.useRef(null)
      , i = y.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: s} = y.useContext(du);
    return y.useInsertionEffect( () => {
        const {width: o, height: a, top: u, left: c} = i.current;
        if (t || !r.current || !o || !a)
            return;
        r.current.dataset.motionPopId = n;
        const d = document.createElement("style");
        return s && (d.nonce = s),
        document.head.appendChild(d),
        d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
            document.head.removeChild(d)
        }
    }
    , [t]),
    l.jsx(Px, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: y.cloneElement(e, {
            ref: r
        })
    })
}
const Mx = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o}) => {
    const a = cu(Rx)
      , u = y.useId()
      , c = y.useCallback(f => {
        a.set(f, !0);
        for (const h of a.values())
            if (!h)
                return;
        r && r()
    }
    , [a, r])
      , d = y.useMemo( () => ({
        id: u,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: f => (a.set(f, !1),
        () => a.delete(f))
    }), s ? [Math.random(), c] : [n, c]);
    return y.useMemo( () => {
        a.forEach( (f, h) => a.set(h, !1))
    }
    , [n]),
    y.useEffect( () => {
        !n && !a.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = l.jsx(Ex, {
        isPresent: n,
        children: e
    })),
    l.jsx(co.Provider, {
        value: d,
        children: e
    })
}
;
function Rx() {
    return new Map
}
function im(e=!0) {
    const t = y.useContext(co);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = y.useId();
    y.useEffect( () => {
        e && i(s)
    }
    , [e]);
    const o = y.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Xi = e => e.key || "";
function Sd(e) {
    const t = [];
    return y.Children.forEach(e, n => {
        y.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const fu = typeof window < "u"
  , sm = fu ? y.useLayoutEffect : y.useEffect
  , pi = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1}) => {
    const [a,u] = im(o)
      , c = y.useMemo( () => Sd(e), [e])
      , d = o && !a ? [] : c.map(Xi)
      , f = y.useRef(!0)
      , h = y.useRef(c)
      , v = cu( () => new Map)
      , [x,w] = y.useState(c)
      , [N,m] = y.useState(c);
    sm( () => {
        f.current = !1,
        h.current = c;
        for (let j = 0; j < N.length; j++) {
            const k = Xi(N[j]);
            d.includes(k) ? v.delete(k) : v.get(k) !== !0 && v.set(k, !1)
        }
    }
    , [N, d.length, d.join("-")]);
    const p = [];
    if (c !== x) {
        let j = [...c];
        for (let k = 0; k < N.length; k++) {
            const b = N[k]
              , E = Xi(b);
            d.includes(E) || (j.splice(k, 0, b),
            p.push(b))
        }
        s === "wait" && p.length && (j = p),
        m(Sd(j)),
        w(c);
        return
    }
    const {forceRender: g} = y.useContext(uu);
    return l.jsx(l.Fragment, {
        children: N.map(j => {
            const k = Xi(j)
              , b = o && !a ? !1 : c === N || d.includes(k)
              , E = () => {
                if (v.has(k))
                    v.set(k, !0);
                else
                    return;
                let C = !0;
                v.forEach(_ => {
                    _ || (C = !1)
                }
                ),
                C && (g == null || g(),
                m(h.current),
                o && (u == null || u()),
                r && r())
            }
            ;
            return l.jsx(Mx, {
                isPresent: b,
                initial: !f.current || n ? void 0 : !1,
                custom: b ? void 0 : t,
                presenceAffectsLayout: i,
                mode: s,
                onExitComplete: b ? void 0 : E,
                children: j
            }, k)
        }
        )
    })
}
  , Fe = e => e;
let el = Fe;
function hu(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const ur = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , kt = e => e * 1e3
  , Ct = e => e / 1e3
  , Ax = {
    skipAnimations: !1,
    useManualTiming: !1
};
function Dx(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const s = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function a(c) {
        s.has(c) && (u.schedule(c),
        e()),
        c(o)
    }
    const u = {
        schedule: (c, d=!1, f=!1) => {
            const v = f && r ? t : n;
            return d && s.add(c),
            v.has(c) || v.add(c),
            c
        }
        ,
        cancel: c => {
            n.delete(c),
            s.delete(c)
        }
        ,
        process: c => {
            if (o = c,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(a),
            t.clear(),
            r = !1,
            i && (i = !1,
            u.process(c))
        }
    };
    return u
}
const Qi = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Lx = 40;
function om(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = Qi.reduce( (m, p) => (m[p] = Dx(s),
    m), {})
      , {read: a, resolveKeyframes: u, update: c, preRender: d, render: f, postRender: h} = o
      , v = () => {
        const m = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Lx), 1),
        i.timestamp = m,
        i.isProcessing = !0,
        a.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(v))
    }
      , x = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(v)
    }
    ;
    return {
        schedule: Qi.reduce( (m, p) => {
            const g = o[p];
            return m[p] = (j, k=!1, b=!1) => (n || x(),
            g.schedule(j, k, b)),
            m
        }
        , {}),
        cancel: m => {
            for (let p = 0; p < Qi.length; p++)
                o[Qi[p]].cancel(m)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: X, cancel: en, state: ye, steps: Wo} = om(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Fe, !0)
  , am = y.createContext({
    strict: !1
})
  , jd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , cr = {};
for (const e in jd)
    cr[e] = {
        isEnabled: t => jd[e].some(n => !!t[n])
    };
function Vx(e) {
    for (const t in e)
        cr[t] = {
            ...cr[t],
            ...e[t]
        }
}
const Ix = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Fs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Ix.has(e)
}
let lm = e => !Fs(e);
function _x(e) {
    e && (lm = t => t.startsWith("on") ? !Fs(t) : e(t))
}
try {
    _x(require("@emotion/is-prop-valid").default)
} catch {}
function Fx(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (lm(i) || n === !0 && Fs(i) || !t && !Fs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Ox(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const fo = y.createContext({});
function mi(e) {
    return typeof e == "string" || Array.isArray(e)
}
function ho(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const pu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , mu = ["initial", ...pu];
function po(e) {
    return ho(e.animate) || mu.some(t => mi(e[t]))
}
function um(e) {
    return !!(po(e) || e.variants)
}
function zx(e, t) {
    if (po(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || mi(n) ? n : void 0,
            animate: mi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Bx(e) {
    const {initial: t, animate: n} = zx(e, y.useContext(fo));
    return y.useMemo( () => ({
        initial: t,
        animate: n
    }), [Nd(t), Nd(n)])
}
function Nd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Ux = Symbol.for("motionComponentSymbol");
function $n(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Hx(e, t, n) {
    return y.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : $n(n) && (n.current = r))
    }
    , [t])
}
const gu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Wx = "framerAppearId"
  , cm = "data-" + gu(Wx)
  , {schedule: vu, cancel: xj} = om(queueMicrotask, !1)
  , dm = y.createContext({});
function $x(e, t, n, r, i) {
    var s, o;
    const {visualElement: a} = y.useContext(fo)
      , u = y.useContext(am)
      , c = y.useContext(co)
      , d = y.useContext(du).reducedMotion
      , f = y.useRef(null);
    r = r || u.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: d
    }));
    const h = f.current
      , v = y.useContext(dm);
    h && !h.projection && i && (h.type === "html" || h.type === "svg") && Kx(f.current, n, i, v);
    const x = y.useRef(!1);
    y.useInsertionEffect( () => {
        h && x.current && h.update(n, c)
    }
    );
    const w = n[cm]
      , N = y.useRef(!!w && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, w)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, w)));
    return sm( () => {
        h && (x.current = !0,
        window.MotionIsMounted = !0,
        h.updateFeatures(),
        vu.render(h.render),
        N.current && h.animationState && h.animationState.animateChanges())
    }
    ),
    y.useEffect( () => {
        h && (!N.current && h.animationState && h.animationState.animateChanges(),
        N.current && (queueMicrotask( () => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, w)
        }
        ),
        N.current = !1))
    }
    ),
    h
}
function Kx(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: u, layoutRoot: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : fm(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && $n(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        layoutScroll: u,
        layoutRoot: c
    })
}
function fm(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : fm(e.parent)
}
function Gx({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var s, o;
    e && Vx(e);
    function a(c, d) {
        let f;
        const h = {
            ...y.useContext(du),
            ...c,
            layoutId: Xx(c)
        }
          , {isStatic: v} = h
          , x = Bx(c)
          , w = r(c, v);
        if (!v && fu) {
            Qx();
            const N = Yx(h);
            f = N.MeasureLayout,
            x.visualElement = $x(i, w, h, t, N.ProjectionNode)
        }
        return l.jsxs(fo.Provider, {
            value: x,
            children: [f && x.visualElement ? l.jsx(f, {
                visualElement: x.visualElement,
                ...h
            }) : null, n(i, c, Hx(w, x.visualElement, d), w, v, x.visualElement)]
        })
    }
    a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
    const u = y.forwardRef(a);
    return u[Ux] = i,
    u
}
function Xx({layoutId: e}) {
    const t = y.useContext(uu).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Qx(e, t) {
    y.useContext(am).strict
}
function Yx(e) {
    const {drag: t, layout: n} = cr;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const Zx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function yu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Zx.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function kd(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function xu(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = kd(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = kd(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
const tl = e => Array.isArray(e)
  , Jx = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , qx = e => tl(e) ? e[e.length - 1] || 0 : e
  , Ce = e => !!(e && e.getVelocity);
function us(e) {
    const t = Ce(e) ? e.get() : e;
    return Jx(t) ? t.toValue() : t
}
function e1({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, s) {
    const o = {
        latestValues: t1(r, i, s, e),
        renderState: t()
    };
    return n && (o.onMount = a => n({
        props: r,
        current: a,
        ...o
    }),
    o.onUpdate = a => n(a)),
    o
}
const hm = e => (t, n) => {
    const r = y.useContext(fo)
      , i = y.useContext(co)
      , s = () => e1(e, t, r, i);
    return n ? s() : cu(s)
}
;
function t1(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const h in s)
        i[h] = us(s[h]);
    let {initial: o, animate: a} = e;
    const u = po(e)
      , c = um(e);
    t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? a : o;
    if (f && typeof f != "boolean" && !ho(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let v = 0; v < h.length; v++) {
            const x = xu(e, h[v]);
            if (x) {
                const {transitionEnd: w, transition: N, ...m} = x;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const j = d ? g.length - 1 : 0;
                        g = g[j]
                    }
                    g !== null && (i[p] = g)
                }
                for (const p in w)
                    i[p] = w[p]
            }
        }
    }
    return i
}
const gr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Mn = new Set(gr)
  , pm = e => t => typeof t == "string" && t.startsWith(e)
  , mm = pm("--")
  , n1 = pm("var(--")
  , wu = e => n1(e) ? r1.test(e.split("/*")[0].trim()) : !1
  , r1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , gm = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Mt = (e, t, n) => n > t ? t : n < e ? e : n
  , vr = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , gi = {
    ...vr,
    transform: e => Mt(0, 1, e)
}
  , Yi = {
    ...vr,
    default: 1
}
  , Ci = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Lt = Ci("deg")
  , mt = Ci("%")
  , I = Ci("px")
  , i1 = Ci("vh")
  , s1 = Ci("vw")
  , Cd = {
    ...mt,
    parse: e => mt.parse(e) / 100,
    transform: e => mt.transform(e * 100)
}
  , o1 = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    backgroundPositionX: I,
    backgroundPositionY: I
}
  , a1 = {
    rotate: Lt,
    rotateX: Lt,
    rotateY: Lt,
    rotateZ: Lt,
    scale: Yi,
    scaleX: Yi,
    scaleY: Yi,
    scaleZ: Yi,
    skew: Lt,
    skewX: Lt,
    skewY: Lt,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: gi,
    originX: Cd,
    originY: Cd,
    originZ: I
}
  , bd = {
    ...vr,
    transform: Math.round
}
  , Su = {
    ...o1,
    ...a1,
    zIndex: bd,
    size: I,
    fillOpacity: gi,
    strokeOpacity: gi,
    numOctaves: bd
}
  , l1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , u1 = gr.length;
function c1(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < u1; s++) {
        const o = gr[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let u = !0;
        if (typeof a == "number" ? u = a === (o.startsWith("scale") ? 1 : 0) : u = parseFloat(a) === 0,
        !u || n) {
            const c = gm(a, Su[o]);
            if (!u) {
                i = !1;
                const d = l1[o] || o;
                r += `${d}(${c}) `
            }
            n && (t[o] = c)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function ju(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const u in t) {
        const c = t[u];
        if (Mn.has(u)) {
            o = !0;
            continue
        } else if (mm(u)) {
            i[u] = c;
            continue
        } else {
            const d = gm(c, Su[u]);
            u.startsWith("origin") ? (a = !0,
            s[u] = d) : r[u] = d
        }
    }
    if (t.transform || (o || n ? r.transform = c1(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: u="50%", originY: c="50%", originZ: d=0} = s;
        r.transformOrigin = `${u} ${c} ${d}`
    }
}
const d1 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , f1 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function h1(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? d1 : f1;
    e[s.offset] = I.transform(-r);
    const o = I.transform(t)
      , a = I.transform(n);
    e[s.array] = `${o} ${a}`
}
function Td(e, t, n) {
    return typeof e == "string" ? e : I.transform(t + n * e)
}
function p1(e, t, n) {
    const r = Td(t, e.x, e.width)
      , i = Td(n, e.y, e.height);
    return `${r} ${i}`
}
function Nu(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: u=0, ...c}, d, f) {
    if (ju(e, c, f),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: v, dimensions: x} = e;
    h.transform && (x && (v.transform = h.transform),
    delete h.transform),
    x && (i !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = p1(x, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && h1(h, o, a, u, !1)
}
const ku = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , vm = () => ({
    ...ku(),
    attrs: {}
})
  , Cu = e => typeof e == "string" && e.toLowerCase() === "svg";
function ym(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const xm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function wm(e, t, n, r) {
    ym(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(xm.has(i) ? i : gu(i), t.attrs[i])
}
const Os = {};
function m1(e) {
    Object.assign(Os, e)
}
function Sm(e, {layout: t, layoutId: n}) {
    return Mn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Os[e] || e === "opacity")
}
function bu(e, t, n) {
    var r;
    const {style: i} = e
      , s = {};
    for (const o in i)
        (Ce(i[o]) || t.style && Ce(t.style[o]) || Sm(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
    return s
}
function jm(e, t, n) {
    const r = bu(e, t, n);
    for (const i in e)
        if (Ce(e[i]) || Ce(t[i])) {
            const s = gr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
function g1(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Pd = ["x", "y", "width", "height", "cx", "cy", "r"]
  , v1 = {
    useVisualState: hm({
        scrapeMotionValuesFromProps: jm,
        createRenderState: vm,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let s = !!e.drag;
            if (!s) {
                for (const a in i)
                    if (Mn.has(a)) {
                        s = !0;
                        break
                    }
            }
            if (!s)
                return;
            let o = !t;
            if (t)
                for (let a = 0; a < Pd.length; a++) {
                    const u = Pd[a];
                    e[u] !== t[u] && (o = !0)
                }
            o && X.read( () => {
                g1(n, r),
                X.render( () => {
                    Nu(r, i, Cu(n.tagName), e.transformTemplate),
                    wm(n, r)
                }
                )
            }
            )
        }
    })
}
  , y1 = {
    useVisualState: hm({
        scrapeMotionValuesFromProps: bu,
        createRenderState: ku
    })
};
function Nm(e, t, n) {
    for (const r in t)
        !Ce(t[r]) && !Sm(r, n) && (e[r] = t[r])
}
function x1({transformTemplate: e}, t) {
    return y.useMemo( () => {
        const n = ku();
        return ju(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function w1(e, t) {
    const n = e.style || {}
      , r = {};
    return Nm(r, n, e),
    Object.assign(r, x1(e, t)),
    r
}
function S1(e, t) {
    const n = {}
      , r = w1(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
function j1(e, t, n, r) {
    const i = y.useMemo( () => {
        const s = vm();
        return Nu(s, t, Cu(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        Nm(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function N1(e=!1) {
    return (n, r, i, {latestValues: s}, o) => {
        const u = (yu(n) ? j1 : S1)(r, s, o, n)
          , c = Fx(r, typeof n == "string", e)
          , d = n !== y.Fragment ? {
            ...c,
            ...u,
            ref: i
        } : {}
          , {children: f} = r
          , h = y.useMemo( () => Ce(f) ? f.get() : f, [f]);
        return y.createElement(n, {
            ...d,
            children: h
        })
    }
}
function k1(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const o = {
            ...yu(r) ? v1 : y1,
            preloadedFeatures: e,
            useRender: N1(i),
            createVisualElement: t,
            Component: r
        };
        return Gx(o)
    }
}
function km(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function mo(e, t, n) {
    const r = e.getProps();
    return xu(r, t, n !== void 0 ? n : r.custom, e)
}
const C1 = hu( () => window.ScrollTimeline !== void 0);
class b1 {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (C1() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, s) => {
                i && i(),
                this.animations[s].stop()
            }
            )
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
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
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
class T1 extends b1 {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function Tu(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const nl = 2e4;
function Cm(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < nl; )
        t += n,
        r = e.next(t);
    return t >= nl ? 1 / 0 : t
}
function Pu(e) {
    return typeof e == "function"
}
function Ed(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const Eu = e => Array.isArray(e) && typeof e[0] == "number"
  , P1 = {
    linearEasing: void 0
};
function E1(e, t) {
    const n = hu(e);
    return () => {
        var r;
        return (r = P1[t]) !== null && r !== void 0 ? r : n()
    }
}
const zs = E1( () => {
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
}
, "linearEasing")
  , bm = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += e(ur(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function Tm(e) {
    return !!(typeof e == "function" && zs() || !e || typeof e == "string" && (e in rl || zs()) || Eu(e) || Array.isArray(e) && e.every(Tm))
}
const Dr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , rl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Dr([0, .65, .55, 1]),
    circOut: Dr([.55, 0, 1, .45]),
    backIn: Dr([.31, .01, .66, -.59]),
    backOut: Dr([.33, 1.53, .69, .99])
};
function Pm(e, t) {
    if (e)
        return typeof e == "function" && zs() ? bm(e, t) : Eu(e) ? Dr(e) : Array.isArray(e) ? e.map(n => Pm(n, t) || rl.easeOut) : rl[e]
}
const et = {
    x: !1,
    y: !1
};
function Em() {
    return et.x || et.y
}
function M1(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return s ? Array.from(s) : []
    }
    return Array.from(e)
}
function Mm(e, t) {
    const n = M1(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function Md(e) {
    return t => {
        t.pointerType === "touch" || Em() || e(t)
    }
}
function R1(e, t, n={}) {
    const [r,i,s] = Mm(e, n)
      , o = Md(a => {
        const {target: u} = a
          , c = t(a);
        if (typeof c != "function" || !u)
            return;
        const d = Md(f => {
            c(f),
            u.removeEventListener("pointerleave", d)
        }
        );
        u.addEventListener("pointerleave", d, i)
    }
    );
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, i)
    }
    ),
    s
}
const Rm = (e, t) => t ? e === t ? !0 : Rm(e, t.parentElement) : !1
  , Mu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , A1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function D1(e) {
    return A1.has(e.tagName) || e.tabIndex !== -1
}
const Lr = new WeakSet;
function Rd(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function $o(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const L1 = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Rd( () => {
        if (Lr.has(n))
            return;
        $o(n, "down");
        const i = Rd( () => {
            $o(n, "up")
        }
        )
          , s = () => $o(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Ad(e) {
    return Mu(e) && !Em()
}
function V1(e, t, n={}) {
    const [r,i,s] = Mm(e, n)
      , o = a => {
        const u = a.currentTarget;
        if (!Ad(a) || Lr.has(u))
            return;
        Lr.add(u);
        const c = t(a)
          , d = (v, x) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!Ad(v) || !Lr.has(u)) && (Lr.delete(u),
            typeof c == "function" && c(v, {
                success: x
            }))
        }
          , f = v => {
            d(v, n.useGlobalTarget || Rm(u, v.target))
        }
          , h = v => {
            d(v, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i)
    }
    ;
    return r.forEach(a => {
        !D1(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", c => L1(c, i), i)
    }
    ),
    s
}
function I1(e) {
    return e === "x" || e === "y" ? et[e] ? null : (et[e] = !0,
    () => {
        et[e] = !1
    }
    ) : et.x || et.y ? null : (et.x = et.y = !0,
    () => {
        et.x = et.y = !1
    }
    )
}
const Am = new Set(["width", "height", "top", "left", "right", "bottom", ...gr]);
let cs;
function _1() {
    cs = void 0
}
const gt = {
    now: () => (cs === void 0 && gt.set(ye.isProcessing || Ax.useManualTiming ? ye.timestamp : performance.now()),
    cs),
    set: e => {
        cs = e,
        queueMicrotask(_1)
    }
};
function Ru(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Au(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Du {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Ru(this.subscriptions, t),
        () => Au(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Dm(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Dd = 30
  , F1 = e => !isNaN(parseFloat(e));
class O1 {
    constructor(t, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const s = gt.now();
            this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = gt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = F1(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Du);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            X.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = gt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Dd)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Dd);
        return Dm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function vi(e, t) {
    return new O1(e,t)
}
function z1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, vi(n))
}
function B1(e, t) {
    const n = mo(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = qx(s[o]);
        z1(e, o, a)
    }
}
function U1(e) {
    return !!(Ce(e) && e.add)
}
function il(e, t) {
    const n = e.getValue("willChange");
    if (U1(n))
        return n.add(t)
}
function Lm(e) {
    return e.props[cm]
}
const Vm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , H1 = 1e-7
  , W1 = 12;
function $1(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = Vm(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > H1 && ++a < W1);
    return o
}
function bi(e, t, n, r) {
    if (e === t && n === r)
        return Fe;
    const i = s => $1(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Vm(i(s), t, r)
}
const Im = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , _m = e => t => 1 - e(1 - t)
  , Fm = bi(.33, 1.53, .69, .99)
  , Lu = _m(Fm)
  , Om = Im(Lu)
  , zm = e => (e *= 2) < 1 ? .5 * Lu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Vu = e => 1 - Math.sin(Math.acos(e))
  , Bm = _m(Vu)
  , Um = Im(Vu)
  , Hm = e => /^0[^.\s]+$/u.test(e);
function K1(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Hm(e) : !0
}
const $r = e => Math.round(e * 1e5) / 1e5
  , Iu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function G1(e) {
    return e == null
}
const X1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , _u = (e, t) => n => !!(typeof n == "string" && X1.test(n) && n.startsWith(e) || t && !G1(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Wm = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(Iu);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Q1 = e => Mt(0, 255, e)
  , Ko = {
    ...vr,
    transform: e => Math.round(Q1(e))
}
  , vn = {
    test: _u("rgb", "red"),
    parse: Wm("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Ko.transform(e) + ", " + Ko.transform(t) + ", " + Ko.transform(n) + ", " + $r(gi.transform(r)) + ")"
};
function Y1(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const sl = {
    test: _u("#"),
    parse: Y1,
    transform: vn.transform
}
  , Kn = {
    test: _u("hsl", "hue"),
    parse: Wm("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + mt.transform($r(t)) + ", " + mt.transform($r(n)) + ", " + $r(gi.transform(r)) + ")"
}
  , Ne = {
    test: e => vn.test(e) || sl.test(e) || Kn.test(e),
    parse: e => vn.test(e) ? vn.parse(e) : Kn.test(e) ? Kn.parse(e) : sl.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? vn.transform(e) : Kn.transform(e)
}
  , Z1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function J1(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Iu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Z1)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const $m = "number"
  , Km = "color"
  , q1 = "var"
  , ew = "var("
  , Ld = "${}"
  , tw = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yi(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(tw, u => (Ne.test(u) ? (r.color.push(s),
    i.push(Km),
    n.push(Ne.parse(u))) : u.startsWith(ew) ? (r.var.push(s),
    i.push(q1),
    n.push(u)) : (r.number.push(s),
    i.push($m),
    n.push(parseFloat(u))),
    ++s,
    Ld)).split(Ld);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function Gm(e) {
    return yi(e).values
}
function Xm(e) {
    const {split: t, types: n} = yi(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const a = n[o];
                a === $m ? s += $r(i[o]) : a === Km ? s += Ne.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const nw = e => typeof e == "number" ? 0 : e;
function rw(e) {
    const t = Gm(e);
    return Xm(e)(t.map(nw))
}
const tn = {
    test: J1,
    parse: Gm,
    createTransformer: Xm,
    getAnimatableNone: rw
}
  , iw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function sw(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Iu) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = iw.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const ow = /\b([a-z-]*)\(.*?\)/gu
  , ol = {
    ...tn,
    getAnimatableNone: e => {
        const t = e.match(ow);
        return t ? t.map(sw).join(" ") : e
    }
}
  , aw = {
    ...Su,
    color: Ne,
    backgroundColor: Ne,
    outlineColor: Ne,
    fill: Ne,
    stroke: Ne,
    borderColor: Ne,
    borderTopColor: Ne,
    borderRightColor: Ne,
    borderBottomColor: Ne,
    borderLeftColor: Ne,
    filter: ol,
    WebkitFilter: ol
}
  , Fu = e => aw[e];
function Qm(e, t) {
    let n = Fu(e);
    return n !== ol && (n = tn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const lw = new Set(["auto", "none", "0"]);
function uw(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !lw.has(s) && yi(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = Qm(n, i)
}
const Vd = e => e === vr || e === I
  , Id = (e, t) => parseFloat(e.split(", ")[t])
  , _d = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Id(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Id(s[1], e) : 0
    }
}
  , cw = new Set(["x", "y", "z"])
  , dw = gr.filter(e => !cw.has(e));
function fw(e) {
    const t = [];
    return dw.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const dr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: _d(4, 13),
    y: _d(5, 14)
};
dr.translateX = dr.x;
dr.translateY = dr.y;
const wn = new Set;
let al = !1
  , ll = !1;
function Ym() {
    if (ll) {
        const e = Array.from(wn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = fw(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) === null || a === void 0 || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    ll = !1,
    al = !1,
    wn.forEach(e => e.complete()),
    wn.clear()
}
function Zm() {
    wn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (ll = !0)
    }
    )
}
function hw() {
    Zm(),
    Ym()
}
class Ou {
    constructor(t, n, r, i, s, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (wn.add(this),
        al || (al = !0,
        X.read(Zm),
        X.resolveKeyframes(Ym))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === null)
                if (s === 0) {
                    const o = i == null ? void 0 : i.get()
                      , a = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (r && n) {
                        const u = r.readValue(n, a);
                        u != null && (t[0] = u)
                    }
                    t[0] === void 0 && (t[0] = a),
                    i && o === void 0 && i.set(t[0])
                } else
                    t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        wn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        wn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Jm = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , pw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function mw(e) {
    const t = pw.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function qm(e, t, n=1) {
    const [r,i] = mw(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return Jm(o) ? parseFloat(o) : o
    }
    return wu(i) ? qm(i, t, n + 1) : i
}
const e0 = e => t => t.test(e)
  , gw = {
    test: e => e === "auto",
    parse: e => e
}
  , t0 = [vr, I, mt, Lt, s1, i1, gw]
  , Fd = e => t0.find(e0(e));
class n0 extends Ou {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let u = 0; u < t.length; u++) {
            let c = t[u];
            if (typeof c == "string" && (c = c.trim(),
            wu(c))) {
                const d = qm(c, n.current);
                d !== void 0 && (t[u] = d),
                u === t.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Am.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = Fd(i)
          , a = Fd(s);
        if (o !== a)
            if (Vd(o) && Vd(a))
                for (let u = 0; u < t.length; u++) {
                    const c = t[u];
                    typeof c == "string" && (t[u] = parseFloat(c))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            K1(t[i]) && r.push(i);
        r.length && uw(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = dr[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const s = n.getValue(r);
        s && s.jump(this.measuredOrigin, !1);
        const o = i.length - 1
          , a = i[o];
        i[o] = dr[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([u,c]) => {
            n.getValue(u).set(c)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Od = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (tn.test(e) || e === "0") && !e.startsWith("url("));
function vw(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function yw(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Od(i, t)
      , a = Od(s, t);
    return !o || !a ? !1 : vw(e) || (n === "spring" || Pu(n)) && r
}
const xw = e => e !== null;
function go(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(xw)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const ww = 40;
class r0 {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", ...a}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = gt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            ...a
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > ww ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && hw(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = gt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: s, delay: o, onComplete: a, onUpdate: u, isGenerator: c} = this.options;
        if (!c && !yw(t, r, i, s))
            if (o)
                this.options.duration = 0;
            else {
                u && u(go(t, this.options, n)),
                a && a(),
                this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const J = (e, t, n) => e + (t - e) * n;
function Go(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Sw({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , u = 2 * n - a;
        i = Go(u, a, e + 1 / 3),
        s = Go(u, a, e),
        o = Go(u, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function Bs(e, t) {
    return n => n > 0 ? t : e
}
const Xo = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , jw = [sl, vn, Kn]
  , Nw = e => jw.find(t => t.test(e));
function zd(e) {
    const t = Nw(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Kn && (n = Sw(n)),
    n
}
const Bd = (e, t) => {
    const n = zd(e)
      , r = zd(t);
    if (!n || !r)
        return Bs(e, t);
    const i = {
        ...n
    };
    return s => (i.red = Xo(n.red, r.red, s),
    i.green = Xo(n.green, r.green, s),
    i.blue = Xo(n.blue, r.blue, s),
    i.alpha = J(n.alpha, r.alpha, s),
    vn.transform(i))
}
  , kw = (e, t) => n => t(e(n))
  , Ti = (...e) => e.reduce(kw)
  , ul = new Set(["none", "hidden"]);
function Cw(e, t) {
    return ul.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function bw(e, t) {
    return n => J(e, t, n)
}
function zu(e) {
    return typeof e == "number" ? bw : typeof e == "string" ? wu(e) ? Bs : Ne.test(e) ? Bd : Ew : Array.isArray(e) ? i0 : typeof e == "object" ? Ne.test(e) ? Bd : Tw : Bs
}
function i0(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => zu(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function Tw(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = zu(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function Pw(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let s = 0; s < t.values.length; s++) {
        const o = t.types[s]
          , a = e.indexes[o][i[o]]
          , u = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[s] = u,
        i[o]++
    }
    return r
}
const Ew = (e, t) => {
    const n = tn.createTransformer(t)
      , r = yi(e)
      , i = yi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ul.has(e) && !i.values.length || ul.has(t) && !r.values.length ? Cw(e, t) : Ti(i0(Pw(r, i), i.values), n) : Bs(e, t)
}
;
function s0(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? J(e, t, n) : zu(e)(e, t)
}
const Mw = 5;
function o0(e, t, n) {
    const r = Math.max(t - Mw, 0);
    return Dm(n - e(r), t - r)
}
const te = {
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
}
  , Qo = .001;
function Rw({duration: e=te.duration, bounce: t=te.bounce, velocity: n=te.velocity, mass: r=te.mass}) {
    let i, s, o = 1 - t;
    o = Mt(te.minDamping, te.maxDamping, o),
    e = Mt(te.minDuration, te.maxDuration, Ct(e)),
    o < 1 ? (i = c => {
        const d = c * o
          , f = d * e
          , h = d - n
          , v = cl(c, o)
          , x = Math.exp(-f);
        return Qo - h / v * x
    }
    ,
    s = c => {
        const f = c * o * e
          , h = f * n + n
          , v = Math.pow(o, 2) * Math.pow(c, 2) * e
          , x = Math.exp(-f)
          , w = cl(Math.pow(c, 2), o);
        return (-i(c) + Qo > 0 ? -1 : 1) * ((h - v) * x) / w
    }
    ) : (i = c => {
        const d = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -Qo + d * f
    }
    ,
    s = c => {
        const d = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return d * f
    }
    );
    const a = 5 / e
      , u = Dw(i, s, a);
    if (e = kt(e),
    isNaN(u))
        return {
            stiffness: te.stiffness,
            damping: te.damping,
            duration: e
        };
    {
        const c = Math.pow(u, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const Aw = 12;
function Dw(e, t, n) {
    let r = n;
    for (let i = 1; i < Aw; i++)
        r = r - e(r) / t(r);
    return r
}
function cl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Lw = ["duration", "bounce"]
  , Vw = ["stiffness", "damping", "mass"];
function Ud(e, t) {
    return t.some(n => e[n] !== void 0)
}
function Iw(e) {
    let t = {
        velocity: te.velocity,
        stiffness: te.stiffness,
        damping: te.damping,
        mass: te.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Ud(e, Vw) && Ud(e, Lw))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * Mt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: te.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = Rw(e);
            t = {
                ...t,
                ...n,
                mass: te.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function a0(e=te.visualDuration, t=te.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: u, damping: c, mass: d, duration: f, velocity: h, isResolvedFromDuration: v} = Iw({
        ...n,
        velocity: -Ct(n.velocity || 0)
    })
      , x = h || 0
      , w = c / (2 * Math.sqrt(u * d))
      , N = o - s
      , m = Ct(Math.sqrt(u / d))
      , p = Math.abs(N) < 5;
    r || (r = p ? te.restSpeed.granular : te.restSpeed.default),
    i || (i = p ? te.restDelta.granular : te.restDelta.default);
    let g;
    if (w < 1) {
        const k = cl(m, w);
        g = b => {
            const E = Math.exp(-w * m * b);
            return o - E * ((x + w * m * N) / k * Math.sin(k * b) + N * Math.cos(k * b))
        }
    } else if (w === 1)
        g = k => o - Math.exp(-m * k) * (N + (x + m * N) * k);
    else {
        const k = m * Math.sqrt(w * w - 1);
        g = b => {
            const E = Math.exp(-w * m * b)
              , C = Math.min(k * b, 300);
            return o - E * ((x + w * m * N) * Math.sinh(C) + k * N * Math.cosh(C)) / k
        }
    }
    const j = {
        calculatedDuration: v && f || null,
        next: k => {
            const b = g(k);
            if (v)
                a.done = k >= f;
            else {
                let E = 0;
                w < 1 && (E = k === 0 ? kt(x) : o0(g, k, b));
                const C = Math.abs(E) <= r
                  , _ = Math.abs(o - b) <= i;
                a.done = C && _
            }
            return a.value = a.done ? o : b,
            a
        }
        ,
        toString: () => {
            const k = Math.min(Cm(j), nl)
              , b = bm(E => j.next(k * E).value, k, 30);
            return k + "ms " + b
        }
    };
    return j
}
function Hd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: u, restDelta: c=.5, restSpeed: d}) {
    const f = e[0]
      , h = {
        done: !1,
        value: f
    }
      , v = C => a !== void 0 && C < a || u !== void 0 && C > u
      , x = C => a === void 0 ? u : u === void 0 || Math.abs(a - C) < Math.abs(u - C) ? a : u;
    let w = n * t;
    const N = f + w
      , m = o === void 0 ? N : o(N);
    m !== N && (w = m - f);
    const p = C => -w * Math.exp(-C / r)
      , g = C => m + p(C)
      , j = C => {
        const _ = p(C)
          , A = g(C);
        h.done = Math.abs(_) <= c,
        h.value = h.done ? m : A
    }
    ;
    let k, b;
    const E = C => {
        v(h.value) && (k = C,
        b = a0({
            keyframes: [h.value, x(h.value)],
            velocity: o0(g, C, h.value),
            damping: i,
            stiffness: s,
            restDelta: c,
            restSpeed: d
        }))
    }
    ;
    return E(0),
    {
        calculatedDuration: null,
        next: C => {
            let _ = !1;
            return !b && k === void 0 && (_ = !0,
            j(C),
            E(C)),
            k !== void 0 && C >= k ? b.next(C - k) : (!_ && j(C),
            h)
        }
    }
}
const _w = bi(.42, 0, 1, 1)
  , Fw = bi(0, 0, .58, 1)
  , l0 = bi(.42, 0, .58, 1)
  , Ow = e => Array.isArray(e) && typeof e[0] != "number"
  , Wd = {
    linear: Fe,
    easeIn: _w,
    easeInOut: l0,
    easeOut: Fw,
    circIn: Vu,
    circInOut: Um,
    circOut: Bm,
    backIn: Lu,
    backInOut: Om,
    backOut: Fm,
    anticipate: zm
}
  , $d = e => {
    if (Eu(e)) {
        el(e.length === 4);
        const [t,n,r,i] = e;
        return bi(t, n, r, i)
    } else if (typeof e == "string")
        return el(Wd[e] !== void 0),
        Wd[e];
    return e
}
;
function zw(e, t, n) {
    const r = []
      , i = n || s0
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const u = Array.isArray(t) ? t[o] || Fe : t;
            a = Ti(u, a)
        }
        r.push(a)
    }
    return r
}
function Bw(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (el(s === t.length),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = zw(t, r, i)
      , u = a.length
      , c = d => {
        if (o && d < e[0])
            return t[0];
        let f = 0;
        if (u > 1)
            for (; f < e.length - 2 && !(d < e[f + 1]); f++)
                ;
        const h = ur(e[f], e[f + 1], d);
        return a[f](h)
    }
    ;
    return n ? d => c(Mt(e[0], e[s - 1], d)) : c
}
function Uw(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = ur(0, t, r);
        e.push(J(n, 1, i))
    }
}
function Hw(e) {
    const t = [0];
    return Uw(t, e.length - 1),
    t
}
function Ww(e, t) {
    return e.map(n => n * t)
}
function $w(e, t) {
    return e.map( () => t || l0).splice(0, e.length - 1)
}
function Us({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = Ow(r) ? r.map($d) : $d(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = Ww(n && n.length === t.length ? n : Hw(t), e)
      , a = Bw(o, t, {
        ease: Array.isArray(i) ? i : $w(t, i)
    });
    return {
        calculatedDuration: e,
        next: u => (s.value = a(u),
        s.done = u >= e,
        s)
    }
}
const Kw = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => X.update(t, !0),
        stop: () => en(t),
        now: () => ye.isProcessing ? ye.timestamp : gt.now()
    }
}
  , Gw = {
    decay: Hd,
    inertia: Hd,
    tween: Us,
    keyframes: Us,
    spring: a0
}
  , Xw = e => e / 100;
class Bu extends r0 {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: u} = this.options;
            u && u()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options
          , o = (i == null ? void 0 : i.KeyframeResolver) || Ou
          , a = (u, c) => this.onKeyframesResolved(u, c);
        this.resolver = new o(s,a,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = this.options
          , a = Pu(n) ? n : Gw[n] || Us;
        let u, c;
        a !== Us && typeof t[0] != "number" && (u = Ti(Xw, s0(t[0], t[1])),
        t = [0, 100]);
        const d = a({
            ...this.options,
            keyframes: t
        });
        s === "mirror" && (c = a({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
        d.calculatedDuration === null && (d.calculatedDuration = Cm(d));
        const {calculatedDuration: f} = d
          , h = f + i
          , v = h * (r + 1) - i;
        return {
            generator: d,
            mirroredGenerator: c,
            mapPercentToKeyframes: u,
            calculatedDuration: f,
            resolvedDuration: h,
            totalDuration: v
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: C} = this.options;
            return {
                done: !0,
                value: C[C.length - 1]
            }
        }
        const {finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: u, calculatedDuration: c, totalDuration: d, resolvedDuration: f} = r;
        if (this.startTime === null)
            return s.next(0);
        const {delay: h, repeat: v, repeatType: x, repeatDelay: w, onUpdate: N} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
          , p = this.speed >= 0 ? m < 0 : m > d;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let g = this.currentTime
          , j = s;
        if (v) {
            const C = Math.min(this.currentTime, d) / f;
            let _ = Math.floor(C)
              , A = C % 1;
            !A && C >= 1 && (A = 1),
            A === 1 && _--,
            _ = Math.min(_, v + 1),
            !!(_ % 2) && (x === "reverse" ? (A = 1 - A,
            w && (A -= w / f)) : x === "mirror" && (j = o)),
            g = Mt(0, 1, A) * f
        }
        const k = p ? {
            done: !1,
            value: u[0]
        } : j.next(g);
        a && (k.value = a(k.value));
        let {done: b} = k;
        !p && c !== null && (b = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && b);
        return E && i !== void 0 && (k.value = go(u, this.options, i)),
        N && N(k.value),
        E && this.finish(),
        k
    }
    get duration() {
        const {resolved: t} = this;
        return t ? Ct(t.calculatedDuration) : 0
    }
    get time() {
        return Ct(this.currentTime)
    }
    set time(t) {
        t = kt(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = Ct(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=Kw, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const Qw = new Set(["opacity", "clipPath", "filter", "transform"]);
function Yw(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: u}={}) {
    const c = {
        [t]: n
    };
    u && (c.offset = u);
    const d = Pm(a, i);
    return Array.isArray(d) && (c.easing = d),
    e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const Zw = hu( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Hs = 10
  , Jw = 2e4;
function qw(e) {
    return Pu(e.type) || e.type === "spring" || !Tm(e.ease)
}
function e2(e, t) {
    const n = new Bu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let s = 0;
    for (; !r.done && s < Jw; )
        r = n.sample(s),
        i.push(r.value),
        s += Hs;
    return {
        times: void 0,
        keyframes: i,
        duration: s - Hs,
        ease: "linear"
    }
}
const u0 = {
    anticipate: zm,
    backInOut: Om,
    circInOut: Um
};
function t2(e) {
    return e in u0
}
class Kd extends r0 {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options;
        this.resolver = new n0(s, (o, a) => this.onKeyframesResolved(o, a),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: s, type: o, motionValue: a, name: u, startTime: c} = this.options;
        if (!a.owner || !a.owner.current)
            return !1;
        if (typeof s == "string" && zs() && t2(s) && (s = u0[s]),
        qw(this.options)) {
            const {onComplete: f, onUpdate: h, motionValue: v, element: x, ...w} = this.options
              , N = e2(t, w);
            t = N.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = N.duration,
            i = N.times,
            s = N.ease,
            o = "keyframes"
        }
        const d = Yw(a.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: s
        });
        return d.startTime = c ?? this.calcStartTime(),
        this.pendingTimeline ? (Ed(d, this.pendingTimeline),
        this.pendingTimeline = void 0) : d.onfinish = () => {
            const {onComplete: f} = this.options;
            a.set(go(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: d,
            duration: r,
            times: i,
            type: o,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return Ct(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return Ct(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = kt(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return Fe;
            const {animation: r} = n;
            Ed(r, t)
        }
        return Fe
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: s, ease: o, times: a} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: c, onUpdate: d, onComplete: f, element: h, ...v} = this.options
              , x = new Bu({
                ...v,
                keyframes: r,
                duration: i,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0
            })
              , w = kt(this.time);
            c.setWithVelocity(x.sample(w - Hs).value, x.sample(w).value, Hs)
        }
        const {onStop: u} = this.options;
        u && u(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: a} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: u, transformTemplate: c} = n.owner.getProps();
        return Zw() && r && Qw.has(r) && !u && !c && !i && s !== "mirror" && o !== 0 && a !== "inertia"
    }
}
const n2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , r2 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , i2 = {
    type: "keyframes",
    duration: .8
}
  , s2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , o2 = (e, {keyframes: t}) => t.length > 2 ? i2 : Mn.has(e) ? e.startsWith("scale") ? r2(t[1]) : n2 : s2;
function a2({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: u, elapsed: c, ...d}) {
    return !!Object.keys(d).length
}
const Uu = (e, t, n, r={}, i, s) => o => {
    const a = Tu(r, e) || {}
      , u = a.delay || r.delay || 0;
    let {elapsed: c=0} = r;
    c = c - kt(u);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: h => {
            t.set(h),
            a.onUpdate && a.onUpdate(h)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    a2(a) || (d = {
        ...d,
        ...o2(e, d)
    }),
    d.duration && (d.duration = kt(d.duration)),
    d.repeatDelay && (d.repeatDelay = kt(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
    d.delay === 0 && (f = !0)),
    f && !s && t.get() !== void 0) {
        const h = go(d.keyframes, a);
        if (h !== void 0)
            return X.update( () => {
                d.onUpdate(h),
                d.onComplete()
            }
            ),
            new T1([])
    }
    return !s && Kd.supports(d) ? new Kd(d) : new Bu(d)
}
;
function l2({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function c0(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var s;
    let {transition: o=e.getDefaultTransition(), transitionEnd: a, ...u} = t;
    r && (o = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in u) {
        const h = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null)
          , v = u[f];
        if (v === void 0 || d && l2(d, f))
            continue;
        const x = {
            delay: n,
            ...Tu(o || {}, f)
        };
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const m = Lm(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, f, X);
                p !== null && (x.startTime = p,
                w = !0)
            }
        }
        il(e, f),
        h.start(Uu(f, h, v, e.shouldReduceMotion && Am.has(f) ? {
            type: !1
        } : x, e, w));
        const N = h.animation;
        N && c.push(N)
    }
    return a && Promise.all(c).then( () => {
        X.update( () => {
            a && B1(e, a)
        }
        )
    }
    ),
    c
}
function dl(e, t, n={}) {
    var r;
    const i = mo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: s=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(c0(e, i, n)) : () => Promise.resolve()
      , a = e.variantChildren && e.variantChildren.size ? (c=0) => {
        const {delayChildren: d=0, staggerChildren: f, staggerDirection: h} = s;
        return u2(e, t, d + c, f, h, n)
    }
    : () => Promise.resolve()
      , {when: u} = s;
    if (u) {
        const [c,d] = u === "beforeChildren" ? [o, a] : [a, o];
        return c().then( () => d())
    } else
        return Promise.all([o(), a(n.delay)])
}
function u2(e, t, n=0, r=0, i=1, s) {
    const o = []
      , a = (e.variantChildren.size - 1) * r
      , u = i === 1 ? (c=0) => c * r : (c=0) => a - c * r;
    return Array.from(e.variantChildren).sort(c2).forEach( (c, d) => {
        c.notify("AnimationStart", t),
        o.push(dl(c, t, {
            ...s,
            delay: n + u(d)
        }).then( () => c.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function c2(e, t) {
    return e.sortNodePosition(t)
}
function d2(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => dl(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = dl(e, t, n);
    else {
        const i = typeof t == "function" ? mo(e, t, n.custom) : t;
        r = Promise.all(c0(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const f2 = mu.length;
function d0(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? d0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < f2; n++) {
        const r = mu[n]
          , i = e.props[r];
        (mi(i) || i === !1) && (t[r] = i)
    }
    return t
}
const h2 = [...pu].reverse()
  , p2 = pu.length;
function m2(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => d2(e, n, r)))
}
function g2(e) {
    let t = m2(e)
      , n = Gd()
      , r = !0;
    const i = u => (c, d) => {
        var f;
        const h = mo(e, d, u === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (h) {
            const {transition: v, transitionEnd: x, ...w} = h;
            c = {
                ...c,
                ...w,
                ...x
            }
        }
        return c
    }
    ;
    function s(u) {
        t = u(e)
    }
    function o(u) {
        const {props: c} = e
          , d = d0(e.parent) || {}
          , f = []
          , h = new Set;
        let v = {}
          , x = 1 / 0;
        for (let N = 0; N < p2; N++) {
            const m = h2[N]
              , p = n[m]
              , g = c[m] !== void 0 ? c[m] : d[m]
              , j = mi(g)
              , k = m === u ? p.isActive : null;
            k === !1 && (x = N);
            let b = g === d[m] && g !== c[m] && j;
            if (b && r && e.manuallyAnimateOnMount && (b = !1),
            p.protectedKeys = {
                ...v
            },
            !p.isActive && k === null || !g && !p.prevProp || ho(g) || typeof g == "boolean")
                continue;
            const E = v2(p.prevProp, g);
            let C = E || m === u && p.isActive && !b && j || N > x && j
              , _ = !1;
            const A = Array.isArray(g) ? g : [g];
            let O = A.reduce(i(m), {});
            k === !1 && (O = {});
            const {prevResolvedValues: oe={}} = p
              , ae = {
                ...oe,
                ...O
            }
              , at = Y => {
                C = !0,
                h.has(Y) && (_ = !0,
                h.delete(Y)),
                p.needsAnimating[Y] = !0;
                const M = e.getValue(Y);
                M && (M.liveStyle = !1)
            }
            ;
            for (const Y in ae) {
                const M = O[Y]
                  , V = oe[Y];
                if (v.hasOwnProperty(Y))
                    continue;
                let L = !1;
                tl(M) && tl(V) ? L = !km(M, V) : L = M !== V,
                L ? M != null ? at(Y) : h.add(Y) : M !== void 0 && h.has(Y) ? at(Y) : p.protectedKeys[Y] = !0
            }
            p.prevProp = g,
            p.prevResolvedValues = O,
            p.isActive && (v = {
                ...v,
                ...O
            }),
            r && e.blockInitialAnimation && (C = !1),
            C && (!(b && E) || _) && f.push(...A.map(Y => ({
                animation: Y,
                options: {
                    type: m
                }
            })))
        }
        if (h.size) {
            const N = {};
            h.forEach(m => {
                const p = e.getBaseTarget(m)
                  , g = e.getValue(m);
                g && (g.liveStyle = !0),
                N[m] = p ?? null
            }
            ),
            f.push({
                animation: N
            })
        }
        let w = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (w = !1),
        r = !1,
        w ? t(f) : Promise.resolve()
    }
    function a(u, c) {
        var d;
        if (n[u].isActive === c)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var v;
            return (v = h.animationState) === null || v === void 0 ? void 0 : v.setActive(u, c)
        }
        ),
        n[u].isActive = c;
        const f = o(u);
        for (const h in n)
            n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Gd(),
            r = !0
        }
    }
}
function v2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !km(t, e) : !1
}
function un(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Gd() {
    return {
        animate: un(!0),
        whileInView: un(),
        whileHover: un(),
        whileTap: un(),
        whileDrag: un(),
        whileFocus: un(),
        exit: un()
    }
}
class on {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class y2 extends on {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = g2(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        ho(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let x2 = 0;
class w2 extends on {
    constructor() {
        super(...arguments),
        this.id = x2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const S2 = {
    animation: {
        Feature: y2
    },
    exit: {
        Feature: w2
    }
};
function xi(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function Pi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const j2 = e => t => Mu(t) && e(t, Pi(t));
function Kr(e, t, n, r) {
    return xi(e, t, j2(n), r)
}
const Xd = (e, t) => Math.abs(e - t);
function N2(e, t) {
    const n = Xd(e.x, t.x)
      , r = Xd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class f0 {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Zo(this.lastMoveEventInfo, this.history)
              , h = this.startEvent !== null
              , v = N2(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!h && !v)
                return;
            const {point: x} = f
              , {timestamp: w} = ye;
            this.history.push({
                ...x,
                timestamp: w
            });
            const {onStart: N, onMove: m} = this.handlers;
            h || (N && N(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, h) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = Yo(h, this.transformPagePoint),
            X.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, h) => {
            this.end();
            const {onEnd: v, onSessionEnd: x, resumeAnimation: w} = this.handlers;
            if (this.dragSnapToOrigin && w && w(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const N = Zo(f.type === "pointercancel" ? this.lastMoveEventInfo : Yo(h, this.transformPagePoint), this.history);
            this.startEvent && v && v(f, N),
            x && x(f, N)
        }
        ,
        !Mu(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = Pi(t)
          , a = Yo(o, this.transformPagePoint)
          , {point: u} = a
          , {timestamp: c} = ye;
        this.history = [{
            ...u,
            timestamp: c
        }];
        const {onSessionStart: d} = n;
        d && d(t, Zo(a, this.history)),
        this.removeListeners = Ti(Kr(this.contextWindow, "pointermove", this.handlePointerMove), Kr(this.contextWindow, "pointerup", this.handlePointerUp), Kr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        en(this.updatePoint)
    }
}
function Yo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Qd(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Zo({point: e}, t) {
    return {
        point: e,
        delta: Qd(e, h0(t)),
        offset: Qd(e, k2(t)),
        velocity: C2(t, .1)
    }
}
function k2(e) {
    return e[0]
}
function h0(e) {
    return e[e.length - 1]
}
function C2(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = h0(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > kt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = Ct(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
const p0 = 1e-4
  , b2 = 1 - p0
  , T2 = 1 + p0
  , m0 = .01
  , P2 = 0 - m0
  , E2 = 0 + m0;
function ze(e) {
    return e.max - e.min
}
function M2(e, t, n) {
    return Math.abs(e - t) <= n
}
function Yd(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = J(t.min, t.max, e.origin),
    e.scale = ze(n) / ze(t),
    e.translate = J(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= b2 && e.scale <= T2 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= P2 && e.translate <= E2 || isNaN(e.translate)) && (e.translate = 0)
}
function Gr(e, t, n, r) {
    Yd(e.x, t.x, n.x, r ? r.originX : void 0),
    Yd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Zd(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + ze(t)
}
function R2(e, t, n) {
    Zd(e.x, t.x, n.x),
    Zd(e.y, t.y, n.y)
}
function Jd(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + ze(t)
}
function Xr(e, t, n) {
    Jd(e.x, t.x, n.x),
    Jd(e.y, t.y, n.y)
}
function A2(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? J(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
    e
}
function qd(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function D2(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: qd(e.x, n, i),
        y: qd(e.y, t, r)
    }
}
function ef(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function L2(e, t) {
    return {
        x: ef(e.x, t.x),
        y: ef(e.y, t.y)
    }
}
function V2(e, t) {
    let n = .5;
    const r = ze(e)
      , i = ze(t);
    return i > r ? n = ur(t.min, t.max - r, e.min) : r > i && (n = ur(e.min, e.max - i, t.min)),
    Mt(0, 1, n)
}
function I2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const fl = .35;
function _2(e=fl) {
    return e === !1 ? e = 0 : e === !0 && (e = fl),
    {
        x: tf(e, "left", "right"),
        y: tf(e, "top", "bottom")
    }
}
function tf(e, t, n) {
    return {
        min: nf(e, t),
        max: nf(e, n)
    }
}
function nf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const rf = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Gn = () => ({
    x: rf(),
    y: rf()
})
  , sf = () => ({
    min: 0,
    max: 0
})
  , ie = () => ({
    x: sf(),
    y: sf()
});
function $e(e) {
    return [e("x"), e("y")]
}
function g0({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function F2({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function O2(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Jo(e) {
    return e === void 0 || e === 1
}
function hl({scale: e, scaleX: t, scaleY: n}) {
    return !Jo(e) || !Jo(t) || !Jo(n)
}
function fn(e) {
    return hl(e) || v0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function v0(e) {
    return of(e.x) || of(e.y)
}
function of(e) {
    return e && e !== "0%"
}
function Ws(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function af(e, t, n, r, i) {
    return i !== void 0 && (e = Ws(e, i, r)),
    Ws(e, n, r) + t
}
function pl(e, t=0, n=1, r, i) {
    e.min = af(e.min, t, n, r, i),
    e.max = af(e.max, t, n, r, i)
}
function y0(e, {x: t, y: n}) {
    pl(e.x, t.translate, t.scale, t.originPoint),
    pl(e.y, n.translate, n.scale, n.originPoint)
}
const lf = .999999999999
  , uf = 1.0000000000001;
function z2(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const {visualElement: u} = s.options;
        u && u.props.style && u.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Qn(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        y0(e, o)),
        r && fn(s.latestValues) && Qn(e, s.latestValues))
    }
    t.x < uf && t.x > lf && (t.x = 1),
    t.y < uf && t.y > lf && (t.y = 1)
}
function Xn(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function cf(e, t, n, r, i=.5) {
    const s = J(e.min, e.max, i);
    pl(e, t, n, s, r)
}
function Qn(e, t) {
    cf(e.x, t.x, t.scaleX, t.scale, t.originX),
    cf(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function x0(e, t) {
    return g0(O2(e.getBoundingClientRect(), t))
}
function B2(e, t, n) {
    const r = x0(e, n)
      , {scroll: i} = t;
    return i && (Xn(r.x, i.offset.x),
    Xn(r.y, i.offset.y)),
    r
}
const w0 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , U2 = new WeakMap;
class H2 {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ie(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = d => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Pi(d).point)
        }
          , s = (d, f) => {
            const {drag: h, dragPropagation: v, onDragStart: x} = this.getProps();
            if (h && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = I1(h),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            $e(N => {
                let m = this.getAxisMotionValue(N).get() || 0;
                if (mt.test(m)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const g = p.layout.layoutBox[N];
                        g && (m = ze(g) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[N] = m
            }
            ),
            x && X.postRender( () => x(d, f)),
            il(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , o = (d, f) => {
            const {dragPropagation: h, dragDirectionLock: v, onDirectionLock: x, onDrag: w} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: N} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = W2(N),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, N),
            this.updateAxis("y", f.point, N),
            this.visualElement.render(),
            w && w(d, f)
        }
          , a = (d, f) => this.stop(d, f)
          , u = () => $e(d => {
            var f;
            return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new f0(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: w0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && X.postRender( () => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Zi(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = A2(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , s = this.constraints;
        n && $n(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = D2(i.layoutBox, n) : this.constraints = !1,
        this.elastic = _2(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && $e(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = I2(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !$n(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = B2(r, i.root, this.visualElement.getTransformPagePoint());
        let o = L2(i.layout.layoutBox, s);
        if (n) {
            const a = n(F2(o));
            this.hasMutatedConstraints = !!a,
            a && (o = g0(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , u = this.constraints || {}
          , c = $e(d => {
            if (!Zi(d, n, this.currentDirection))
                return;
            let f = u && u[d] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6
              , v = i ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[d] : 0,
                bounceStiffness: h,
                bounceDamping: v,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...f
            };
            return this.startAxisValueAnimation(d, x)
        }
        );
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return il(this.visualElement, t),
        r.start(Uu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        $e(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        $e(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        $e(n => {
            const {drag: r} = this.getProps();
            if (!Zi(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n];
                s.set(t[n] - J(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!$n(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        $e(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const u = a.get();
                i[o] = V2({
                    min: u,
                    max: u
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        $e(o => {
            if (!Zi(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: u, max: c} = this.constraints[o];
            a.set(J(u, c, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        U2.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Kr(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps();
            c && d && this.start(u)
        }
        )
          , r = () => {
            const {dragConstraints: u} = this.getProps();
            $n(u) && u.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        X.read(r);
        const o = xi(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && ($e(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=fl, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Zi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function W2(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class $2 extends on {
    constructor(t) {
        super(t),
        this.removeGroupControls = Fe,
        this.removeListeners = Fe,
        this.controls = new H2(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Fe
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const df = e => (t, n) => {
    e && X.postRender( () => e(t, n))
}
;
class K2 extends on {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Fe
    }
    onPointerDown(t) {
        this.session = new f0(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: w0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: df(t),
            onStart: df(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && X.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Kr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const ds = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function ff(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Pr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (I.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = ff(e, t.target.x)
          , r = ff(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , G2 = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = tn.parse(e);
        if (i.length > 5)
            return r;
        const s = tn.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , u = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= u;
        const c = J(a, u, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
    }
};
class X2 extends y.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        m1(Q2),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        ds.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || X.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        vu.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function S0(e) {
    const [t,n] = im()
      , r = y.useContext(uu);
    return l.jsx(X2, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: y.useContext(dm),
        isPresent: t,
        safeToRemove: n
    })
}
const Q2 = {
    borderRadius: {
        ...Pr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Pr,
    borderTopRightRadius: Pr,
    borderBottomLeftRadius: Pr,
    borderBottomRightRadius: Pr,
    boxShadow: G2
};
function Y2(e, t, n) {
    const r = Ce(e) ? e : vi(e);
    return r.start(Uu("", r, t, n)),
    r.animation
}
function Z2(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const J2 = (e, t) => e.depth - t.depth;
class q2 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Ru(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Au(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(J2),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function eS(e, t) {
    const n = gt.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (en(r),
        e(s - t))
    }
    ;
    return X.read(r, !0),
    () => en(r)
}
const j0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , tS = j0.length
  , hf = e => typeof e == "string" ? parseFloat(e) : e
  , pf = e => typeof e == "number" || I.test(e);
function nS(e, t, n, r, i, s) {
    i ? (e.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, rS(r)),
    e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, iS(r))) : s && (e.opacity = J(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < tS; o++) {
        const a = `border${j0[o]}Radius`;
        let u = mf(t, a)
          , c = mf(n, a);
        if (u === void 0 && c === void 0)
            continue;
        u || (u = 0),
        c || (c = 0),
        u === 0 || c === 0 || pf(u) === pf(c) ? (e[a] = Math.max(J(hf(u), hf(c), r), 0),
        (mt.test(c) || mt.test(u)) && (e[a] += "%")) : e[a] = c
    }
    (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r))
}
function mf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const rS = N0(0, .5, Bm)
  , iS = N0(.5, .95, Fe);
function N0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(ur(e, t, r))
}
function gf(e, t) {
    e.min = t.min,
    e.max = t.max
}
function We(e, t) {
    gf(e.x, t.x),
    gf(e.y, t.y)
}
function vf(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function yf(e, t, n, r, i) {
    return e -= t,
    e = Ws(e, 1 / n, r),
    i !== void 0 && (e = Ws(e, 1 / i, r)),
    e
}
function sS(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (mt.test(t) && (t = parseFloat(t),
    t = J(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = J(s.min, s.max, r);
    e === s && (a -= t),
    e.min = yf(e.min, t, n, a, i),
    e.max = yf(e.max, t, n, a, i)
}
function xf(e, t, [n,r,i], s, o) {
    sS(e, t[n], t[r], t[i], t.scale, s, o)
}
const oS = ["x", "scaleX", "originX"]
  , aS = ["y", "scaleY", "originY"];
function wf(e, t, n, r) {
    xf(e.x, t, oS, n ? n.x : void 0, r ? r.x : void 0),
    xf(e.y, t, aS, n ? n.y : void 0, r ? r.y : void 0)
}
function Sf(e) {
    return e.translate === 0 && e.scale === 1
}
function k0(e) {
    return Sf(e.x) && Sf(e.y)
}
function jf(e, t) {
    return e.min === t.min && e.max === t.max
}
function lS(e, t) {
    return jf(e.x, t.x) && jf(e.y, t.y)
}
function Nf(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function C0(e, t) {
    return Nf(e.x, t.x) && Nf(e.y, t.y)
}
function kf(e) {
    return ze(e.x) / ze(e.y)
}
function Cf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class uS {
    constructor() {
        this.members = []
    }
    add(t) {
        Ru(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Au(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function cS(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: c, rotate: d, rotateX: f, rotateY: h, skewX: v, skewY: x} = n;
        c && (r = `perspective(${c}px) ${r}`),
        d && (r += `rotate(${d}deg) `),
        f && (r += `rotateX(${f}deg) `),
        h && (r += `rotateY(${h}deg) `),
        v && (r += `skewX(${v}deg) `),
        x && (r += `skewY(${x}deg) `)
    }
    const a = e.x.scale * t.x
      , u = e.y.scale * t.y;
    return (a !== 1 || u !== 1) && (r += `scale(${a}, ${u})`),
    r || "none"
}
const hn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Vr = typeof window < "u" && window.MotionDebug !== void 0
  , qo = ["", "X", "Y", "Z"]
  , dS = {
    visibility: "hidden"
}
  , bf = 1e3;
let fS = 0;
function ea(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function b0(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Lm(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", X, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && b0(r)
}
function T0({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = fS++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Vr && (hn.totalNodes = hn.resolvedTargetDeltas = hn.recalculatedProjection = 0),
                this.nodes.forEach(mS),
                this.nodes.forEach(wS),
                this.nodes.forEach(SS),
                this.nodes.forEach(gS),
                Vr && window.MotionDebug.record(hn)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let u = 0; u < this.path.length; u++)
                this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new q2)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Du),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const u = this.eventHandlers.get(o);
            u && u.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Z2(o),
            this.instance = o;
            const {layoutId: u, layout: c, visualElement: d} = this.options;
            if (d && !d.current && d.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (c || u) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = eS(h, 250),
                    ds.hasAnimatedSinceResize && (ds.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Pf))
                }
                )
            }
            u && this.root.registerSharedNode(u, this),
            this.options.animate !== !1 && d && (u || c) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: v, layout: x}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || d.getDefaultTransition() || bS
                  , {onLayoutAnimationStart: N, onLayoutAnimationComplete: m} = d.getProps()
                  , p = !this.targetLayout || !C0(this.targetLayout, x) || v
                  , g = !h && v;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, g);
                    const j = {
                        ...Tu(w, "layout"),
                        onPlay: N,
                        onComplete: m
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0,
                    j.type = !1),
                    this.startAnimation(j)
                } else
                    h || Pf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            en(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(jS),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && b0(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: a, layout: u} = this.options;
            if (a === void 0 && !u)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Tf);
                return
            }
            this.isUpdating || this.nodes.forEach(yS),
            this.isUpdating = !1,
            this.nodes.forEach(xS),
            this.nodes.forEach(hS),
            this.nodes.forEach(pS),
            this.clearAllSnapshots();
            const a = gt.now();
            ye.delta = Mt(0, 1e3 / 60, a - ye.timestamp),
            ye.timestamp = a,
            ye.isProcessing = !0,
            Wo.update.process(ye),
            Wo.preRender.process(ye),
            Wo.render.process(ye),
            ye.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            vu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(vS),
            this.sharedNodes.forEach(NS)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            X.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            X.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++)
                    this.path[u].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ie(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a) {
                const u = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: u,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : u
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !k0(this.projectionDelta)
              , u = this.getTransformTemplate()
              , c = u ? u(this.latestValues, "") : void 0
              , d = c !== this.prevTransformTemplateValue;
            o && (a || fn(this.latestValues) || d) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let u = this.removeElementScroll(a);
            return o && (u = this.removeTransform(u)),
            TS(u),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: u,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {visualElement: a} = this.options;
            if (!a)
                return ie();
            const u = a.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(PS))) {
                const {scroll: d} = this.root;
                d && (Xn(u.x, d.offset.x),
                Xn(u.y, d.offset.y))
            }
            return u
        }
        removeElementScroll(o) {
            var a;
            const u = ie();
            if (We(u, o),
            !((a = this.scroll) === null || a === void 0) && a.wasRoot)
                return u;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c]
                  , {scroll: f, options: h} = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && We(u, o),
                Xn(u.x, f.offset.x),
                Xn(u.y, f.offset.y))
            }
            return u
        }
        applyTransform(o, a=!1) {
            const u = ie();
            We(u, o);
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && Qn(u, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                fn(d.latestValues) && Qn(u, d.latestValues)
            }
            return fn(this.latestValues) && Qn(u, this.latestValues),
            u
        }
        removeTransform(o) {
            const a = ie();
            We(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !fn(c.latestValues))
                    continue;
                hl(c.latestValues) && c.updateSnapshot();
                const d = ie()
                  , f = c.measurePageBox();
                We(d, f),
                wf(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
            }
            return fn(this.latestValues) && wf(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var a;
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== u;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: f, layoutId: h} = this.options;
            if (!(!this.layout || !(f || h))) {
                if (this.resolvedRelativeTargetAt = ye.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const v = this.getClosestProjectingParent();
                    v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ie(),
                    this.relativeTargetOrigin = ie(),
                    Xr(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox),
                    We(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ie(),
                    this.targetWithTransforms = ie()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    R2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : We(this.target, this.layout.layoutBox),
                    y0(this.target, this.targetDelta)) : We(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const v = this.getClosestProjectingParent();
                        v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ie(),
                        this.relativeTargetOrigin = ie(),
                        Xr(this.relativeTargetOrigin, this.target, v.target),
                        We(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Vr && hn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || hl(this.parent.latestValues) || v0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead()
              , u = !!this.resumingFrom || this !== a;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1),
            u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === ye.timestamp && (c = !1),
            c)
                return;
            const {layout: d, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || f))
                return;
            We(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
              , v = this.treeScale.y;
            z2(this.layoutCorrected, this.treeScale, this.path, u),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox,
            a.targetWithTransforms = ie());
            const {target: x} = a;
            if (!x) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (vf(this.prevProjectionDelta.x, this.projectionDelta.x),
            vf(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Gr(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
            (this.treeScale.x !== h || this.treeScale.y !== v || !Cf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", x)),
            Vr && hn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(),
            o) {
                const u = this.getStack();
                u && u.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Gn(),
            this.projectionDelta = Gn(),
            this.projectionDeltaWithTransform = Gn()
        }
        setAnimationOrigin(o, a=!1) {
            const u = this.snapshot
              , c = u ? u.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , f = Gn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const h = ie()
              , v = u ? u.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , w = v !== x
              , N = this.getStack()
              , m = !N || N.members.length <= 1
              , p = !!(w && !m && this.options.crossfade === !0 && !this.path.some(CS));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = j => {
                const k = j / 1e3;
                Ef(f.x, o.x, k),
                Ef(f.y, o.y, k),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                kS(this.relativeTarget, this.relativeTargetOrigin, h, k),
                g && lS(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                g || (g = ie()),
                We(g, this.relativeTarget)),
                w && (this.animationValues = d,
                nS(d, c, this.latestValues, k, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = k
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (en(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = X.update( () => {
                ds.hasAnimatedSinceResize = !0,
                this.currentAnimation = Y2(0, bf, {
                    ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        o.onUpdate && o.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: u, layout: c, latestValues: d} = o;
            if (!(!a || !u || !c)) {
                if (this !== o && this.layout && c && P0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    u = this.target || ie();
                    const f = ze(this.layout.layoutBox.x);
                    u.x.min = o.target.x.min,
                    u.x.max = u.x.min + f;
                    const h = ze(this.layout.layoutBox.y);
                    u.y.min = o.target.y.min,
                    u.y.max = u.y.min + h
                }
                We(a, u),
                Qn(a, d),
                Gr(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new uS),
            this.sharedNodes.get(o).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: u}={}) {
            const c = this.getStack();
            c && c.promote(this, u),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: u} = o;
            if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (a = !0),
            !a)
                return;
            const c = {};
            u.z && ea("z", o, c, this.animationValues);
            for (let d = 0; d < qo.length; d++)
                ea(`rotate${qo[d]}`, o, c, this.animationValues),
                ea(`skew${qo[d]}`, o, c, this.animationValues);
            o.render();
            for (const d in c)
                o.setStaticValue(d, c[d]),
                this.animationValues && (this.animationValues[d] = c[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, u;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return dS;
            const c = {
                visibility: ""
            }
              , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = us(o == null ? void 0 : o.pointerEvents) || "",
                c.transform = d ? d(this.latestValues, "") : "none",
                c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                w.pointerEvents = us(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !fn(this.latestValues) && (w.transform = d ? d({}, "") : "none",
                this.hasProjected = !1),
                w
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            c.transform = cS(this.projectionDeltaWithTransform, this.treeScale, h),
            d && (c.transform = d(h, c.transform));
            const {x: v, y: x} = this.projectionDelta;
            c.transformOrigin = `${v.origin * 100}% ${x.origin * 100}% 0`,
            f.animationValues ? c.opacity = f === this ? (u = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const w in Os) {
                if (h[w] === void 0)
                    continue;
                const {correct: N, applyTo: m} = Os[w]
                  , p = c.transform === "none" ? h[w] : N(h[w], f);
                if (m) {
                    const g = m.length;
                    for (let j = 0; j < g; j++)
                        c[m[j]] = p
                } else
                    c[w] = p
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? us(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Tf),
            this.root.sharedNodes.clear()
        }
    }
}
function hS(e) {
    e.updateLayout()
}
function pS(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? $e(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
              , v = ze(h);
            h.min = r[f].min,
            h.max = h.min + v
        }
        ) : P0(s, n.layoutBox, r) && $e(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
              , v = ze(r[f]);
            h.max = h.min + v,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + v)
        }
        );
        const a = Gn();
        Gr(a, r, n.layoutBox);
        const u = Gn();
        o ? Gr(u, e.applyTransform(i, !0), n.measuredBox) : Gr(u, r, n.layoutBox);
        const c = !k0(a);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: h, layout: v} = f;
                if (h && v) {
                    const x = ie();
                    Xr(x, n.layoutBox, h.layoutBox);
                    const w = ie();
                    Xr(w, r, v.layoutBox),
                    C0(x, w) || (d = !0),
                    f.options.layoutRoot && (e.relativeTarget = w,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: u,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function mS(e) {
    Vr && hn.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function gS(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function vS(e) {
    e.clearSnapshot()
}
function Tf(e) {
    e.clearMeasurements()
}
function yS(e) {
    e.isLayoutDirty = !1
}
function xS(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Pf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function wS(e) {
    e.resolveTargetDelta()
}
function SS(e) {
    e.calcProjection()
}
function jS(e) {
    e.resetSkewAndRotation()
}
function NS(e) {
    e.removeLeadSnapshot()
}
function Ef(e, t, n) {
    e.translate = J(t.translate, 0, n),
    e.scale = J(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Mf(e, t, n, r) {
    e.min = J(t.min, n.min, r),
    e.max = J(t.max, n.max, r)
}
function kS(e, t, n, r) {
    Mf(e.x, t.x, n.x, r),
    Mf(e.y, t.y, n.y, r)
}
function CS(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const bS = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Rf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Af = Rf("applewebkit/") && !Rf("chrome/") ? Math.round : Fe;
function Df(e) {
    e.min = Af(e.min),
    e.max = Af(e.max)
}
function TS(e) {
    Df(e.x),
    Df(e.y)
}
function P0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !M2(kf(t), kf(n), .2)
}
function PS(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const ES = T0({
    attachResizeListener: (e, t) => xi(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , ta = {
    current: void 0
}
  , E0 = T0({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!ta.current) {
            const e = new ES({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            ta.current = e
        }
        return ta.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , MS = {
    pan: {
        Feature: K2
    },
    drag: {
        Feature: $2,
        ProjectionNode: E0,
        MeasureLayout: S0
    }
};
function Lf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && X.postRender( () => s(t, Pi(t)))
}
class RS extends on {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = R1(t, n => (Lf(this.node, n, "Start"),
        r => Lf(this.node, r, "End"))))
    }
    unmount() {}
}
class AS extends on {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ti(xi(this.node.current, "focus", () => this.onFocus()), xi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Vf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && X.postRender( () => s(t, Pi(t)))
}
class DS extends on {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = V1(t, n => (Vf(this.node, n, "Start"),
        (r, {success: i}) => Vf(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const ml = new WeakMap
  , na = new WeakMap
  , LS = e => {
    const t = ml.get(e.target);
    t && t(e)
}
  , VS = e => {
    e.forEach(LS)
}
;
function IS({root: e, ...t}) {
    const n = e || document;
    na.has(n) || na.set(n, {});
    const r = na.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(VS,{
        root: e,
        ...t
    })),
    r[i]
}
function _S(e, t, n) {
    const r = IS(t);
    return ml.set(e, n),
    r.observe(e),
    () => {
        ml.delete(e),
        r.unobserve(e)
    }
}
const FS = {
    some: 0,
    all: 1
};
class OS extends on {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : FS[i]
        }
          , a = u => {
            const {isIntersecting: c} = u;
            if (this.isInView === c || (this.isInView = c,
            s && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: d, onViewportLeave: f} = this.node.getProps()
              , h = c ? d : f;
            h && h(u)
        }
        ;
        return _S(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(zS(t, n)) && this.startObserver()
    }
    unmount() {}
}
function zS({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const BS = {
    inView: {
        Feature: OS
    },
    tap: {
        Feature: DS
    },
    focus: {
        Feature: AS
    },
    hover: {
        Feature: RS
    }
}
  , US = {
    layout: {
        ProjectionNode: E0,
        MeasureLayout: S0
    }
}
  , gl = {
    current: null
}
  , M0 = {
    current: !1
};
function HS() {
    if (M0.current = !0,
    !!fu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => gl.current = e.matches;
            e.addListener(t),
            t()
        } else
            gl.current = !1
}
const WS = [...t0, Ne, tn]
  , $S = e => WS.find(e0(e))
  , If = new WeakMap;
function KS(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Ce(i))
            e.addValue(r, i);
        else if (Ce(s))
            e.addValue(r, vi(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, vi(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const _f = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class GS {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Ou,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const v = gt.now();
            this.renderScheduledAt < v && (this.renderScheduledAt = v,
            X.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c, onUpdate: d} = o;
        this.onUpdate = d,
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = a,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = po(n),
        this.isVariantNode = um(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: f, ...h} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const v in h) {
            const x = h[v];
            u[v] !== void 0 && Ce(x) && x.set(u[v], !1)
        }
    }
    mount(t) {
        this.current = t,
        If.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        M0.current || HS(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        If.delete(this.current),
        this.projection && this.projection.unmount(),
        en(this.notifyUpdate),
        en(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Mn.has(t)
          , i = n.on("change", a => {
            this.latestValues[t] = a,
            this.props.onUpdate && X.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in cr) {
            const n = cr[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ie()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < _f.length; r++) {
            const i = _f[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = KS(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
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
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = vi(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Jm(i) || Hm(i)) ? i = parseFloat(i) : !$S(i) && tn.test(n) && (i = Qm(t, n)),
        this.setBaseTarget(t, Ce(i) ? i.get() : i)),
        Ce(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const o = xu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (i = o[t])
        }
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !Ce(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Du),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class R0 extends GS {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = n0
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ce(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function XS(e) {
    return window.getComputedStyle(e)
}
class QS extends R0 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = ym
    }
    readValueFromInstance(t, n) {
        if (Mn.has(n)) {
            const r = Fu(n);
            return r && r.default || 0
        } else {
            const r = XS(t)
              , i = (mm(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return x0(t, n)
    }
    build(t, n, r) {
        ju(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return bu(t, n, r)
    }
}
class YS extends R0 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ie
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Mn.has(n)) {
            const r = Fu(n);
            return r && r.default || 0
        }
        return n = xm.has(n) ? n : gu(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return jm(t, n, r)
    }
    build(t, n, r) {
        Nu(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        wm(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Cu(t.tagName),
        super.mount(t)
    }
}
const ZS = (e, t) => yu(e) ? new YS(t) : new QS(t,{
    allowProjection: e !== y.Fragment
})
  , JS = k1({
    ...S2,
    ...BS,
    ...MS,
    ...US
}, ZS)
  , T = Ox(JS);
function qS() {
    const [e,t] = y.useState(!1)
      , [n,r] = y.useState(!1)
      , i = mr()
      , [s,o] = y.useState( () => {
        const d = localStorage.getItem("isExecutorMode");
        return d ? JSON.parse(d) : !0
    }
    );
    y.useEffect( () => {
        const d = () => r(window.scrollY > 20);
        window.addEventListener("scroll", d);
        const f = () => {
            const h = localStorage.getItem("isExecutorMode");
            o(h ? JSON.parse(h) : !0)
        }
        ;
        return window.addEventListener("storage", f),
        () => {
            window.removeEventListener("scroll", d),
            window.removeEventListener("storage", f)
        }
    }
    , []);
    const a = [{
        to: "/",
        label: "Home"
    }, {
        to: "/tutorial",
        label: "Help"
    }, {
        to: "/executor",
        label: "Executor"
    }, {
        to: "/download",
        label: "Download"
    }, {
        to: "/credits",
        label: "Credits"
    }, {
        to: "/donate",
        label: "Donate"
    }]
      , u = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , c = {
        hover: {
            scale: 1.05,
            transition: {
                duration: .2,
                ease: "easeInOut"
            }
        }
    };
    return l.jsxs(T.nav, {
        initial: "hidden",
        animate: "visible",
        variants: u,
        className: `fixed w-full z-50 transition-all duration-300 ${n ? "py-4" : "py-6"}`,
        children: [l.jsxs("div", {
            className: `absolute inset-0 ${n || e ? "opacity-100" : "opacity-0"}`,
            children: [l.jsx("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-2xl"
            }), l.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
            }), l.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
            }), l.jsx("div", {
                className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"
            }), l.jsx("div", {
                className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            })]
        }), l.jsx("div", {
            className: "relative max-w-7xl mx-auto px-6",
            children: l.jsxs("div", {
                className: "flex items-center justify-between",
                children: [l.jsxs(Zt, {
                    to: "/",
                    className: "flex items-center space-x-3 group",
                    children: [l.jsxs(T.div, {
                        className: "relative",
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: [l.jsx("div", {
                            className: "absolute -inset-2 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), l.jsxs("div", {
                            className: "relative",
                            children: [l.jsx(T.img, {
                                whileHover: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: .8
                                },
                                className: "h-10 w-10 rounded-full",
                                src: "/images/xeno.png",
                                alt: "Xeno"
                            }), l.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                            })]
                        })]
                    }), l.jsx(T.span, {
                        className: "text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                        whileHover: {
                            scale: 1.05
                        },
                        transition: {
                            duration: .2
                        },
                        children: "Xeno"
                    })]
                }), l.jsx("div", {
                    className: "hidden md:flex items-center space-x-1",
                    children: a.map( ({to: d, label: f}) => l.jsx(T.div, {
                        variants: c,
                        whileHover: "hover",
                        children: l.jsxs(Zt, {
                            to: d,
                            className: "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 overflow-hidden group",
                            children: [i.pathname === d && l.jsx(T.div, {
                                layoutId: "navbar-indicator",
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-lg -z-10",
                                transition: {
                                    type: "spring",
                                    bounce: .2,
                                    duration: .6
                                }
                            }), l.jsx("span", {
                                className: `relative z-10 ${i.pathname === d ? "text-white" : "text-gray-400 group-hover:text-white"}`,
                                children: f
                            }), l.jsx("div", {
                                className: "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            })]
                        })
                    }, d))
                }), l.jsx(T.div, {
                    className: "hidden md:block",
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: l.jsxs("a", {
                        href: "https://discord.gg/getxeno",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group relative inline-flex items-center space-x-2 px-4 py-2 rounded-full overflow-hidden",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 bg-black/20 backdrop-blur-sm rounded-full"
                        }), l.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                        }), l.jsx("img", {
                            src: "/images/Discord-Icon-White.png",
                            alt: "Discord",
                            className: "relative w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        }), l.jsx("span", {
                            className: "relative text-sm font-medium text-white group-hover:text-gray-200 transition-colors",
                            children: "Join Discord"
                        })]
                    })
                }), l.jsxs(T.button, {
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .9
                    },
                    onClick: () => t(!e),
                    className: "md:hidden relative group p-2 rounded-lg overflow-hidden",
                    children: [l.jsx("div", {
                        className: "absolute inset-0 bg-white/5 backdrop-blur-sm"
                    }), l.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    }), l.jsx(Sx, {
                        className: "relative w-6 h-6 text-white"
                    })]
                })]
            })
        }), l.jsx(pi, {
            children: e && l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                transition: {
                    duration: .3
                },
                className: "md:hidden relative",
                children: [l.jsx("div", {
                    className: "absolute inset-0 bg-black/40 backdrop-blur-2xl"
                }), l.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
                }), l.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
                }), l.jsxs("div", {
                    className: "relative px-6 py-4 space-y-1",
                    children: [a.map( ({to: d, label: f}, h) => l.jsx(T.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: h * .1
                        },
                        children: l.jsxs(Zt, {
                            to: d,
                            className: `block px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 relative group overflow-hidden ${i.pathname === d ? "text-white" : "text-gray-400 hover:text-white"}`,
                            onClick: () => t(!1),
                            children: [l.jsx("div", {
                                className: "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                            }), l.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            }), l.jsx("span", {
                                className: "relative",
                                children: f
                            })]
                        })
                    }, d)), l.jsx(T.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: a.length * .1
                        },
                        children: l.jsxs("a", {
                            href: "https://discord.gg/getxeno",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center space-x-2 px-4 py-2 text-base font-medium text-white rounded-lg relative group overflow-hidden",
                            onClick: () => t(!1),
                            children: [l.jsx("div", {
                                className: "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                            }), l.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            }), l.jsx("img", {
                                src: "/images/Discord-Icon-White.png",
                                alt: "Discord",
                                className: "relative w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity"
                            }), l.jsx("span", {
                                className: "relative",
                                children: "Join Discord"
                            })]
                        })
                    })]
                })]
            })
        })]
    })
}
function ej() {
    const e = [{
        icon: () => l.jsx("img", {
            src: "/images/Discord-Icon-White.png",
            alt: "Discord",
            className: "w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity"
        }),
        href: "https://discord.gg/getxeno",
        label: "Discord"
    }, {
        icon: vx,
        href: "https://github.com/rz-ve",
        label: "GitHub"
    }]
      , t = [{
        to: "/credits",
        label: "Credits"
    }, {
        to: "/tutorial",
        label: "Help"
    }, {
        to: "/download",
        label: "Download"
    }, {
        to: "/donate",
        label: "Donate"
    }];
    return l.jsxs("footer", {
        className: "relative bg-black/50 backdrop-blur-xl border-t border-white/5",
        children: [l.jsxs("div", {
            className: "absolute inset-0",
            children: [l.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            }), l.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
            })]
        }), l.jsx("div", {
            className: "relative max-w-7xl mx-auto px-6 py-8",
            children: l.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 items-center",
                children: [l.jsxs(T.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "flex items-center gap-6 justify-center md:justify-start",
                    children: [l.jsxs(Zt, {
                        to: "/",
                        className: "group relative",
                        children: [l.jsx("div", {
                            className: "absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), l.jsx(T.img, {
                            whileHover: {
                                scale: 1.1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            },
                            src: "https://i.ibb.co/k0Y4yB1/xeno.png",
                            alt: "Xeno",
                            className: "h-10 w-10 rounded-full"
                        })]
                    }), l.jsx("div", {
                        className: "h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
                    }), l.jsx("div", {
                        className: "text-lg bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent font-medium",
                        children: "Experience the future"
                    })]
                }), l.jsx(T.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    className: "flex flex-wrap justify-center gap-6",
                    children: t.map( (n, r) => l.jsx(Zt, {
                        to: n.to,
                        className: "text-gray-400 hover:text-white transition-colors relative group",
                        children: l.jsxs("span", {
                            className: "relative",
                            children: [n.label, l.jsx("span", {
                                className: "absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            })]
                        })
                    }, n.to))
                }), l.jsx(T.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6,
                        delay: .4
                    },
                    className: "flex items-center justify-center md:justify-end gap-6",
                    children: e.map( ({icon: n, href: r, label: i}) => l.jsxs(T.a, {
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group relative",
                        "aria-label": i,
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: [l.jsx("div", {
                            className: "absolute -inset-3 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), typeof n == "function" ? l.jsx("div", {
                            className: "relative transform transition-all duration-300",
                            children: l.jsx(n, {})
                        }) : l.jsx(n, {
                            className: "w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300"
                        })]
                    }, i))
                })]
            })
        })]
    })
}
const an = () => l.jsxs(l.Fragment, {
    children: [l.jsxs("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [l.jsx("div", {
            className: "absolute inset-0 opacity-20",
            children: l.jsx(T.div, {
                animate: {
                    backgroundPosition: ["0% 0%", "100% 100%"]
                },
                transition: {
                    duration: 20,
                    repeat: 1 / 0,
                    ease: "linear"
                },
                className: "absolute inset-0",
                style: {
                    backgroundImage: "linear-gradient(45deg, transparent 95%, rgba(255,255,255,0.3) 95%), linear-gradient(-45deg, transparent 95%, rgba(255,255,255,0.3) 95%)",
                    backgroundSize: "60px 60px"
                }
            })
        }), l.jsx("div", {
            className: "absolute inset-0",
            children: [...Array(20)].map( (e, t) => l.jsx(T.div, {
                animate: {
                    y: ["0%", "100%"],
                    x: t % 2 === 0 ? ["-10%", "10%"] : ["10%", "-10%"],
                    opacity: [0, 1, 0]
                },
                transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: 1 / 0,
                    delay: Math.random() * 5,
                    ease: "linear"
                },
                className: "absolute w-1 h-1 bg-white rounded-full",
                style: {
                    left: `${Math.random() * 100}%`,
                    top: "-5%"
                }
            }, t))
        })]
    }), l.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none"
    })]
});
function tj({children: e, className: t="", duration: n=2, clockwise: r=!0}) {
    const [i,s] = y.useState(!1)
      , [o,a] = y.useState("TOP")
      , u = f => {
        const h = ["TOP", "RIGHT", "BOTTOM", "LEFT"]
          , v = h.indexOf(f)
          , x = r ? (v + 1) % h.length : (v - 1 + h.length) % h.length;
        return h[x]
    }
      , c = {
        TOP: "radial-gradient(20% 50% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(20% 50% at 100% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(20% 50% at 50% 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(20% 50% at 0% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)"
    }
      , d = "radial-gradient(70% 100% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)";
    return y.useEffect( () => {
        if (!i) {
            const f = setInterval( () => {
                a(h => u(h))
            }
            , n * 1e3);
            return () => clearInterval(f)
        }
    }
    , [i, n, r]),
    l.jsxs("div", {
        className: `relative ${t}`,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [l.jsx(T.div, {
            className: "absolute -inset-[2px] rounded-3xl overflow-hidden",
            initial: {
                background: c[o]
            },
            animate: {
                background: i ? d : c[o]
            },
            transition: {
                duration: n / 2,
                ease: "linear"
            },
            style: {
                filter: "blur(8px)"
            }
        }), l.jsx("div", {
            className: "relative",
            children: e
        })]
    })
}
function nj({item: e, index: t, isOpen: n, onToggle: r}) {
    return l.jsxs(T.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .5,
            delay: .1 * t
        },
        className: "relative group",
        children: [l.jsx("div", {
            className: "absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"
        }), l.jsx("div", {
            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-white/20",
            children: l.jsxs("button", {
                onClick: r,
                className: "relative w-full p-6 text-left transition-all duration-300",
                children: [l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [l.jsx("h3", {
                        className: "text-xl font-semibold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                        children: e.q
                    }), l.jsxs("div", {
                        className: "relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300",
                        children: [n ? l.jsx(jx, {
                            className: "w-4 h-4 text-white"
                        }) : l.jsx(rm, {
                            className: "w-4 h-4 text-white"
                        }), l.jsx("div", {
                            className: "absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300"
                        })]
                    })]
                }), l.jsx(T.div, {
                    initial: !1,
                    animate: {
                        height: n ? "auto" : 0,
                        opacity: n ? 1 : 0,
                        marginTop: n ? 16 : 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: "overflow-hidden",
                    children: l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("div", {
                            className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/30 to-transparent rounded-full"
                        }), l.jsx("p", {
                            className: "text-gray-400 pl-4 leading-relaxed",
                            children: e.a
                        })]
                    })
                })]
            })
        })]
    })
}
function rj() {
    const [e,t] = y.useState(null)
      , n = [{
        q: "Is Xeno Safe?",
        a: `Yes, Xeno is safe to use. Sometimes antivirus programs might flag it as a Trojan or malware, but that's usually just a false positive. To be safe, you can always do a quick search, like "Is Xeno legit? Reddit," to double-check. Also, make sure you're downloading exploits directly from their official sources.`
    }, {
        q: "Can i get banned with Xeno?",
        a: "Using third-party software like Xeno does come with risks. Roblox typically conducts ban waves every three months, and the penalties progress as follows: 1-day ban → 3-day ban → 7-day ban → permanent ban. However, according to a Roblox Staff on Reddit, Bitdancer, the ban progression might reset to a 1-day ban if you avoid getting banned for a while."
    }, {
        q: "How often does Xeno update?",
        a: "Xeno gets regular updates, usually within 24 hours, to keep everything running smoothly and stay compatible with the latest changes."
    }]
      , r = i => {
        t(e === i ? null : i)
    }
    ;
    return l.jsxs("div", {
        className: "relative min-h-screen bg-black text-white overflow-hidden",
        children: [l.jsx(an, {}), l.jsxs("div", {
            className: "relative min-h-screen flex flex-col",
            children: [l.jsx("div", {
                className: "flex-1 flex items-center justify-center pt-12 sm:pt-24",
                children: l.jsxs("div", {
                    className: "w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-12",
                    children: [l.jsx(T.h1, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "text-6xl font-bold text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                    }), l.jsx(tj, {
                        className: "w-full max-w-[900px] mx-auto",
                        children: l.jsx(T.div, {
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: .8
                            },
                            className: "group",
                            children: l.jsxs("div", {
                                className: "relative rounded-2xl overflow-hidden",
                                children: [l.jsx("div", {
                                    className: "absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                                }), l.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                }), l.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                                }), l.jsx("div", {
                                    className: "absolute -inset-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                                }), l.jsx("img", {
                                    src: "/images/Xeno-V1.1.5.png",
                                    alt: "Xeno",
                                    className: "w-full h-full object-contain rounded-2xl transform transition-all duration-700 group-hover:scale-[1.02] relative z-30"
                                }), l.jsx("div", {
                                    className: "absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
                                }), l.jsx("div", {
                                    className: "absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
                                })]
                            })
                        })
                    }), l.jsxs(T.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .6
                        },
                        className: "flex flex-col sm:flex-row items-center justify-center gap-6",
                        children: [l.jsxs(Zt, {
                            to: "/download",
                            className: "group relative overflow-hidden rounded-xl w-full sm:w-auto",
                            children: [l.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white rounded-xl"
                            }), l.jsx("div", {
                                className: "absolute inset-[1px] bg-black rounded-[11px] transition-colors group-hover:bg-black/95"
                            }), l.jsxs("div", {
                                className: "relative px-6 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                children: [l.jsx("span", {
                                    className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                                    children: "Download Now"
                                }), l.jsx(uo, {
                                    className: "w-5 h-5 text-white group-hover:translate-y-1 transition-transform"
                                })]
                            })]
                        }), l.jsxs(Zt, {
                            to: "/tutorial",
                            className: "group relative overflow-hidden rounded-xl",
                            children: [l.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                            }), l.jsx("div", {
                                className: "absolute inset-[1px] bg-black rounded-[11px]"
                            }), l.jsxs("div", {
                                className: "relative px-8 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                children: [l.jsx("span", {
                                    className: "text-white/90 group-hover:text-white transition-colors",
                                    children: "Help & Tutorial"
                                }), l.jsx(lo, {
                                    className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                })]
                            })]
                        })]
                    })]
                })
            }), l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .8
                },
                className: "w-full px-4 py-12 sm:py-16 relative",
                children: [l.jsx("div", {
                    className: "absolute inset-0 bg-black pointer-events-none"
                }), l.jsxs("div", {
                    className: "max-w-6xl mx-auto relative",
                    children: [l.jsx(T.div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "text-center mb-12",
                        children: l.jsx("h2", {
                            className: "text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent inline-block",
                            children: "Frequently Asked Questions"
                        })
                    }), l.jsx("div", {
                        className: "space-y-4 max-w-3xl mx-auto",
                        children: n.map( (i, s) => l.jsx(nj, {
                            item: i,
                            index: s,
                            isOpen: e === s,
                            onToggle: () => r(s)
                        }, s))
                    })]
                })]
            })]
        })]
    })
}
function ij() {
    const e = "NhaR47EeJOY"
      , [t,n] = y.useState(!1)
      , r = `https://img.youtube.com/vi/${e}/hqdefault.jpg`
      , i = [{
        title: "Xeno not opening",
        description: "You do not have the required dependencies downloaded. Download Microsoft Visual C++ Redistributable and .NET Runtime 8.0.0",
        links: [{
            text: "Microsoft Visual C++ Redistributable",
            url: "https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"
        }, {
            text: ".NET Runtime 8.0.0",
            url: "https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.100-windows-x64-installer"
        }]
    }, {
        title: "Script not executing",
        description: "There was an interference attaching to Roblox and restarting Xeno would resume everything"
    }];
    return l.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [l.jsx(an, {}), l.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [l.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Help & Tutorial"
                }), l.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Learn how to use Xeno and troubleshoot common issues"
                })]
            }), l.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto",
                children: [l.jsxs(T.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "relative group",
                    children: [l.jsx("div", {
                        className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), l.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                        }), l.jsx("div", {
                            className: "relative p-6",
                            children: l.jsx("div", {
                                className: "aspect-video w-full rounded-lg overflow-hidden relative",
                                children: t ? l.jsx("iframe", {
                                    src: `https://www.youtube.com/embed/${e}?autoplay=1`,
                                    title: "Xeno Tutorial",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0,
                                    className: "w-full h-full"
                                }) : l.jsxs(T.button, {
                                    onClick: () => n(!0),
                                    className: "absolute inset-0 flex items-center justify-center group/play",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    children: [l.jsx("img", {
                                        src: r,
                                        alt: "Tutorial thumbnail",
                                        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-105"
                                    }), l.jsx("div", {
                                        className: "absolute inset-0 bg-black/40 group-hover/play:bg-black/30 transition-colors"
                                    }), l.jsx(T.div, {
                                        className: "relative bg-white/90 rounded-full p-4 transform group-hover/play:scale-110 transition-all duration-300",
                                        whileHover: {
                                            scale: 1.1
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: l.jsx(Ja, {
                                            className: "w-8 h-8 text-black"
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                }), l.jsxs(T.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "space-y-6",
                    children: [l.jsxs("h2", {
                        className: "text-3xl font-bold mb-8 flex items-center gap-3",
                        children: [l.jsx(yx, {
                            className: "w-8 h-8 text-white/80"
                        }), l.jsx("span", {
                            className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                            children: "Common Issues"
                        })]
                    }), i.map( (s, o) => l.jsxs(T.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .2 + o * .1
                        },
                        className: "group relative",
                        children: [l.jsx("div", {
                            className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), l.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                            children: [l.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                            }), l.jsx("div", {
                                className: "relative p-6",
                                children: l.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [l.jsx("div", {
                                        className: "mt-1 p-2 bg-white/10 rounded-lg",
                                        children: l.jsx(em, {
                                            className: "w-5 h-5 text-white/80"
                                        })
                                    }), l.jsxs("div", {
                                        className: "flex-1",
                                        children: [l.jsx("h3", {
                                            className: "text-xl font-semibold mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                            children: s.title
                                        }), l.jsx("p", {
                                            className: "text-gray-400 mb-4 leading-relaxed",
                                            children: s.description
                                        }), s.links && l.jsx("div", {
                                            className: "space-y-3",
                                            children: s.links.map( (a, u) => l.jsxs("a", {
                                                href: a.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors",
                                                children: [l.jsx("span", {
                                                    className: "transform group-hover/link:translate-x-1 transition-transform",
                                                    children: "→"
                                                }), l.jsx("span", {
                                                    className: "border-b border-white/0 group-hover/link:border-white/100 transition-colors",
                                                    children: a.text
                                                })]
                                            }, u))
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }, s.title))]
                })]
            })]
        })]
    })
}
function sj() {
    const [e,t] = y.useState(null)
      , n = [{
        title: "CashApp",
        desc: "Quick and easy payment",
        value: "$RizveA",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/2048px-Square_Cash_app_logo.svg.png"
    }, {
        title: "PayPal",
        desc: "Send as friends & family",
        value: "ARizve",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
    }, {
        title: "Bitcoin",
        desc: "Cryptocurrency payment",
        value: "bc1qvlds5l57ehkjlnrpzzrqq9j9mecml6xq6ztqy3",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
    }, {
        title: "Ethereum",
        desc: "Cryptocurrency payment",
        value: "0x2c8fbe2030941a4f5d3147Ed7F6D5eeC5187661a",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
    }, {
        title: "Litecoin",
        desc: "Cryptocurrency payment",
        value: "LRXYK5s8ATvdCt2KkxH9w2patns4rxyoFp",
        icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png"
    }]
      , r = async (o, a) => {
        try {
            await navigator.clipboard.writeText(o),
            t(a),
            setTimeout( () => t(null), 2e3)
        } catch (u) {
            console.error("Failed to copy:", u)
        }
    }
      , i = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .1
            }
        }
    }
      , s = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3
            }
        }
    };
    return l.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [l.jsx(an, {}), l.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [l.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Support Xeno"
                }), l.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Your support helps me continue developing and improving Xeno"
                })]
            }), l.jsxs(T.div, {
                variants: i,
                initial: "hidden",
                animate: "visible",
                className: "relative overflow-hidden rounded-2xl max-w-4xl mx-auto",
                children: [l.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-50"
                }), l.jsxs("div", {
                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                    children: [l.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                    }), l.jsx("div", {
                        className: "overflow-x-auto",
                        children: l.jsxs("table", {
                            className: "w-full",
                            children: [l.jsx("thead", {
                                children: l.jsxs("tr", {
                                    className: "border-b border-white/10",
                                    children: [l.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Method"
                                    }), l.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Description"
                                    }), l.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Address"
                                    })]
                                })
                            }), l.jsx("tbody", {
                                children: n.map( (o, a) => l.jsxs(T.tr, {
                                    variants: s,
                                    className: "group hover:bg-white/5 transition-all duration-300",
                                    children: [l.jsx("td", {
                                        className: "py-6 px-8",
                                        children: l.jsxs("div", {
                                            className: "flex items-center space-x-4",
                                            children: [l.jsxs("div", {
                                                className: "relative w-14 h-14 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300",
                                                children: [l.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }), l.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                }), l.jsx("img", {
                                                    src: o.icon,
                                                    alt: o.title,
                                                    className: "w-full h-full object-contain p-2"
                                                })]
                                            }), l.jsxs("div", {
                                                className: "space-y-1",
                                                children: [l.jsx("span", {
                                                    className: "font-medium text-lg bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                                    children: o.title
                                                }), l.jsx("p", {
                                                    className: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: o.desc
                                                })]
                                            })]
                                        })
                                    }), l.jsx("td", {
                                        className: "py-6 px-8",
                                        children: l.jsxs("div", {
                                            className: "relative overflow-hidden rounded-xl bg-white/5 px-4 py-2 group-hover:bg-white/10 transition-all duration-300",
                                            children: [l.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            }), l.jsx("span", {
                                                className: "relative text-gray-400 group-hover:text-gray-300 transition-colors",
                                                children: o.desc
                                            })]
                                        })
                                    }), l.jsx("td", {
                                        className: "py-6 px-8",
                                        children: l.jsxs(T.button, {
                                            onClick: () => r(o.value, o.title),
                                            className: "group/btn relative flex items-center justify-between w-full max-w-xs bg-white/5 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            children: [l.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                                            }), l.jsx("span", {
                                                className: "relative text-sm font-mono text-gray-300 truncate group-hover/btn:text-white transition-colors",
                                                children: o.value
                                            }), l.jsx(pi, {
                                                mode: "wait",
                                                children: e === o.title ? l.jsx(T.div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        scale: 0
                                                    },
                                                    className: "relative text-green-400",
                                                    children: l.jsx(ls, {
                                                        className: "w-4 h-4"
                                                    })
                                                }, "check") : l.jsx(T.div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        scale: 0
                                                    },
                                                    className: "relative text-gray-400 group-hover/btn:text-white transition-colors",
                                                    children: l.jsx(tm, {
                                                        className: "w-4 h-4"
                                                    })
                                                }, "copy")
                                            })]
                                        })
                                    })]
                                }, o.title))
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
const oj = [{
    icon: bx,
    title: "Good Community",
    description: "Join our growing community"
}, {
    icon: dx,
    title: "Multi Attach",
    description: "Attach to multiple Clients at once"
}, {
    icon: Tx,
    title: "Performance",
    description: "Run scripts with high speed"
}];
function aj() {
    const [e,t] = y.useState("")
      , [n,r] = y.useState(!0)
      , [i,s] = y.useState("")
      , [o,a] = y.useState([]);
    y.useEffect( () => {
        (async () => {
            try {
                const f = await fetch("https://www.xeno.now/version.txt");
                if (!f.ok)
                    throw new Error("Failed to fetch version");
                const h = await f.text();
                t(h.trim());
                const v = await fetch("https://www.xeno.now/changelogs.txt");
                if (!v.ok)
                    throw new Error("Failed to fetch changelog");
                const x = await v.text();
                a(x.split(`
`).filter(w => w.trim())),
                r(!1)
            } catch {
                s("Failed to fetch information"),
                r(!1)
            }
        }
        )()
    }
    , []);
    const u = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2
            }
        }
    }
      , c = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6
            }
        }
    };
    return l.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [l.jsxs("div", {
            className: "fixed inset-0 z-0",
            children: [l.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
            }), l.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"
            }), l.jsx("div", {
                className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"
            })]
        }), l.jsx(an, {}), l.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-4 mb-12",
                children: [l.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Download Xeno"
                }), l.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Experience the next generation of scripting"
                })]
            }), l.jsxs(T.div, {
                variants: u,
                initial: "hidden",
                animate: "visible",
                className: "relative",
                children: [l.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow"
                }), l.jsxs("div", {
                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden",
                    children: [l.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                    }), l.jsx("div", {
                        className: "relative p-8 sm:p-10",
                        children: l.jsxs("div", {
                            className: "grid lg:grid-cols-3 gap-8",
                            children: [l.jsxs("div", {
                                className: "lg:col-span-2",
                                children: [l.jsxs(T.div, {
                                    className: "flex flex-col sm:flex-row items-center gap-6 mb-10",
                                    variants: c,
                                    children: [l.jsxs("div", {
                                        className: "relative group animate-float",
                                        children: [l.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), l.jsx(T.img, {
                                            whileHover: {
                                                scale: 1.1,
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: .8
                                            },
                                            src: "/images/xeno.png",
                                            alt: "Xeno",
                                            className: "relative w-20 h-20 rounded-full transform transition-transform duration-500 unselectable shimmer"
                                        })]
                                    }), !n && !i && l.jsxs("div", {
                                        className: "text-center sm:text-left",
                                        children: [l.jsxs("h2", {
                                            className: "text-3xl font-bold text-white mb-2",
                                            children: ["Xeno ", e]
                                        }), l.jsxs("div", {
                                            className: "flex items-center gap-2 text-gray-400 justify-center sm:justify-start",
                                            children: [l.jsx(vd, {
                                                className: "w-4 h-4"
                                            }), l.jsx("span", {
                                                children: "Latest Release"
                                            })]
                                        })]
                                    })]
                                }), l.jsx(T.div, {
                                    variants: u,
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10",
                                    children: oj.map( ({icon: d, title: f, description: h}, v) => l.jsxs(T.div, {
                                        variants: c,
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        className: "group relative",
                                        children: [l.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), l.jsx("div", {
                                            className: "relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20",
                                            children: l.jsxs("div", {
                                                className: "flex flex-col gap-4",
                                                children: [l.jsxs(T.div, {
                                                    className: "relative",
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 300
                                                    },
                                                    children: [l.jsx("div", {
                                                        className: "absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }), l.jsx(d, {
                                                        className: "relative w-6 h-6 text-white"
                                                    })]
                                                }), l.jsxs("div", {
                                                    children: [l.jsx("h3", {
                                                        className: "font-medium text-lg mb-1",
                                                        children: f
                                                    }), l.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: h
                                                    })]
                                                })]
                                            })
                                        })]
                                    }, f))
                                }), l.jsx(T.div, {
                                    variants: c,
                                    className: "flex flex-wrap gap-4",
                                    children: l.jsxs(Zt, {
                                        to: "/download/step1",
                                        className: "group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl overflow-hidden",
                                        children: [l.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), l.jsx("div", {
                                            className: "absolute inset-[1px] bg-black rounded-[11px] transition-colors"
                                        }), l.jsxs("div", {
                                            className: "relative flex items-center gap-3",
                                            children: [l.jsx(uo, {
                                                className: "w-5 h-5 group-hover:translate-y-1 transition-transform text-white"
                                            }), l.jsx("span", {
                                                className: "font-medium text-white group-hover:text-gray-200 transition-colors",
                                                children: "Download Now"
                                            }), l.jsx(lo, {
                                                className: "w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-white"
                                            })]
                                        })]
                                    })
                                })]
                            }), l.jsxs(T.div, {
                                variants: c,
                                className: "relative",
                                children: [l.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl"
                                }), l.jsxs("div", {
                                    className: "relative bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10",
                                    children: [l.jsxs("h3", {
                                        className: "text-xl font-bold mb-6 flex items-center gap-2",
                                        children: [l.jsx(vd, {
                                            className: "w-5 h-5"
                                        }), l.jsx("span", {
                                            children: "Latest Updates"
                                        })]
                                    }), n ? l.jsx("div", {
                                        className: "space-y-3",
                                        children: [...Array(5)].map( (d, f) => l.jsx("div", {
                                            className: "animate-pulse",
                                            children: l.jsx("div", {
                                                className: "h-4 bg-white/10 rounded w-3/4"
                                            })
                                        }, f))
                                    }) : i ? l.jsx("p", {
                                        className: "text-red-400",
                                        children: "Failed to load changelog"
                                    }) : l.jsx("div", {
                                        className: "space-y-2 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                                        children: o.map( (d, f) => l.jsxs(T.div, {
                                            variants: c,
                                            className: "group relative",
                                            children: [l.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                            }), l.jsxs("div", {
                                                className: "relative p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20",
                                                children: [l.jsx("div", {
                                                    className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-white to-gray-500 group-hover:h-full transition-all duration-300 rounded-r-full"
                                                }), l.jsx("p", {
                                                    className: "pl-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: d
                                                })]
                                            })]
                                        }, f))
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
function lj() {
    const e = [{
        title: "Linkvertise",
        image: "https://www.stepstone.de/upload_de/logo/E/logoLinkvertise-Inh-Marc-Winter-255864DE-2101131647.gif",
        description: "Quick and easy download through Linkvertise",
        url: "https://link-center.net/1210123/xeno-v115",
        features: ["Fast Download", "Secure Link", "Easy Process"]
    }, {
        title: "Lootlabs",
        image: "https://s3-eu-west-1.amazonaws.com/tpd/logos/65786726ba1241d21ae5bdd3/0x0.png",
        description: "Faster and simple download through Lootlabs",
        url: "https://loot-link.com/s?ycgJuOMU",
        features: ["Easy Download", "Reliable Service", "Quick Access"]
    }]
      , t = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2
            }
        }
    }
      , n = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: .3,
                ease: "easeInOut"
            }
        }
    }
      , r = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .3
            }
        }
    };
    return l.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-20",
        children: [l.jsx(an, {}), l.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-6 mb-16",
                children: [l.jsx(T.h1, {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    children: "Choose Your Download Method"
                }), l.jsx(T.p, {
                    className: "text-xl text-gray-400 max-w-2xl mx-auto",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .3
                    },
                    children: "Select your preferred way to download Xeno"
                })]
            }), l.jsx(T.div, {
                variants: t,
                initial: "hidden",
                animate: "visible",
                className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                children: e.map( (i, s) => l.jsxs(T.div, {
                    variants: n,
                    whileHover: "hover",
                    className: "group relative",
                    children: [l.jsx("div", {
                        className: "absolute -inset-1 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), l.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                        }), l.jsx("div", {
                            className: "relative p-8",
                            children: l.jsxs("div", {
                                className: "flex flex-col items-center space-y-6",
                                children: [l.jsxs(T.div, {
                                    className: "relative w-32 h-32",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    transition: {
                                        duration: .3
                                    },
                                    children: [l.jsx("div", {
                                        className: "absolute inset-0 bg-white/20 rounded-xl blur-xl animate-pulse-slow"
                                    }), l.jsx("img", {
                                        src: i.image,
                                        alt: i.title,
                                        className: "relative w-full h-full object-contain rounded-xl"
                                    })]
                                }), l.jsxs("div", {
                                    className: "text-center space-y-4",
                                    children: [l.jsx("h3", {
                                        className: "text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: i.title
                                    }), l.jsx("p", {
                                        className: "text-gray-400",
                                        children: i.description
                                    }), l.jsx("div", {
                                        className: "space-y-2",
                                        children: i.features.map( (o, a) => l.jsxs(T.div, {
                                            variants: r,
                                            className: "flex items-center justify-center space-x-2 text-sm text-gray-400",
                                            children: [l.jsx(lo, {
                                                className: "w-4 h-4"
                                            }), l.jsx("span", {
                                                children: o
                                            })]
                                        }, a))
                                    }), l.jsxs(T.a, {
                                        href: i.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center space-x-2 mt-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: [l.jsx(uo, {
                                            className: "w-5 h-5 group-hover:translate-y-1 transition-transform"
                                        }), l.jsx("span", {
                                            className: "font-medium",
                                            children: "Download Now"
                                        }), l.jsx(nm, {
                                            className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })]
                }, i.title))
            })]
        })]
    })
}
function uj() {
    const e = Yp()
      , [t,n] = y.useState(!1)
      , [r,i] = y.useState(0)
      , [s,o] = y.useState(!1)
      , a = "Xeno-v1.1.6.zip"
      , u = "/downloads/0dad57b6-569f-4e34-b02b-7fedca487c63.zip";
    y.useEffect( () => {
        const d = () => {
            try {
                const h = Math.floor(Math.random() * 20) + 30
                  , v = Array.from({
                    length: h
                }, () => [ () => String.fromCharCode(Math.floor(Math.random() * 26) + 97), () => String.fromCharCode(Math.floor(Math.random() * 26) + 65), () => String.fromCharCode(Math.floor(Math.random() * 10) + 48), () => "-_~".charAt(Math.floor(Math.random() * 3))][Math.floor(Math.random() * 4)]()).join("");
                window.history.pushState({}, document.title, `/secure-verification/${v}`)
            } catch {
                console.error("URL obfuscation failed")
            }
        }
        ;
        d();
        const f = setInterval(d, 1e3);
        return () => {
            clearInterval(f)
        }
    }
    , []),
    y.useEffect( () => {
        if (t && r < 100) {
            const d = setInterval( () => {
                i(f => f >= 100 ? (clearInterval(d),
                100) : f + 1)
            }
            , 50);
            return () => clearInterval(d)
        }
    }
    , [t, r]);
    const c = () => {
        o(!0),
        setTimeout( () => {
            n(!0),
            o(!1),
            setTimeout( () => {
                try {
                    const d = document.createElement("a");
                    d.href = u,
                    d.download = a,
                    d.setAttribute("type", "application/x-rar-compressed"),
                    document.body.appendChild(d),
                    d.click(),
                    document.body.removeChild(d),
                    setTimeout( () => {
                        e("/")
                    }
                    , 3e3)
                } catch (d) {
                    console.error("Download error:", d),
                    e("/")
                }
            }
            , 3500)
        }
        , 2e3)
    }
    ;
    return l.jsxs("div", {
        className: "min-h-screen bg-black flex items-center justify-center overflow-hidden",
        children: [l.jsx(an, {}), l.jsx(pi, {
            mode: "wait",
            children: l.jsx(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                transition: {
                    duration: .5
                },
                className: "relative z-10 max-w-md w-full mx-4",
                children: l.jsxs("div", {
                    className: "relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden",
                    children: [l.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"
                    }), l.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"
                    }), l.jsx("div", {
                        className: "relative p-8",
                        children: l.jsxs("div", {
                            className: "flex flex-col items-center text-center",
                            children: [l.jsx(T.div, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                },
                                className: "mb-6 bg-white/5 p-4 rounded-full backdrop-blur-sm",
                                children: t ? r < 100 ? l.jsx(uo, {
                                    className: "w-12 h-12 text-white"
                                }) : l.jsx(pd, {
                                    className: "w-12 h-12 text-white"
                                }) : l.jsx(px, {
                                    className: "w-12 h-12 text-white"
                                })
                            }), l.jsx(T.h2, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: .3
                                },
                                className: "text-2xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                children: t ? r < 100 ? "Preparing Download" : "Download Complete" : "Human Verification"
                            }), l.jsx(T.p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: .5
                                },
                                className: "text-gray-400 mb-8",
                                children: t ? r < 100 ? "Please wait while we prepare your download..." : "Your download is done! Redirecting to home..." : "Verify you're human to access your download"
                            }), t ? l.jsxs(l.Fragment, {
                                children: [l.jsx("div", {
                                    className: "w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6",
                                    children: l.jsx(T.div, {
                                        initial: {
                                            width: "0%"
                                        },
                                        animate: {
                                            width: `${r}%`
                                        },
                                        transition: {
                                            duration: .1
                                        },
                                        className: "h-full bg-white rounded-full"
                                    })
                                }), l.jsxs("div", {
                                    className: "flex items-center justify-center gap-2 text-sm text-gray-400",
                                    children: [l.jsx(qa, {
                                        className: "w-4 h-4"
                                    }), l.jsx("span", {
                                        children: "Secure Download"
                                    })]
                                }), l.jsx(T.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .7
                                    },
                                    className: "mt-8 grid grid-cols-3 gap-4 w-full",
                                    children: ["Verifying", "Preparing", "Ready"].map( (d, f) => l.jsxs("div", {
                                        className: "flex flex-col items-center",
                                        children: [l.jsx("div", {
                                            className: `w-3 h-3 rounded-full ${r > (f + 1) * 30 ? "bg-white" : "bg-white/20"} transition-colors duration-300`
                                        }), l.jsx("span", {
                                            className: "text-xs text-gray-500 mt-2",
                                            children: d
                                        })]
                                    }, d))
                                })]
                            }) : l.jsx(T.button, {
                                onClick: c,
                                disabled: s,
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: .98
                                },
                                className: "group relative overflow-hidden rounded-xl w-full bg-white/5 hover:bg-white/10 transition-all duration-300",
                                children: l.jsx("div", {
                                    className: "relative px-6 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                    children: s ? l.jsxs(l.Fragment, {
                                        children: [l.jsx(xx, {
                                            className: "w-5 h-5 text-white animate-spin"
                                        }), l.jsx("span", {
                                            className: "text-white",
                                            children: "Verifying..."
                                        })]
                                    }) : l.jsxs(l.Fragment, {
                                        children: [l.jsx("span", {
                                            className: "text-white",
                                            children: "Verify & Download"
                                        }), l.jsx(lo, {
                                            className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                        })]
                                    })
                                })
                            }), l.jsx(T.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .8
                                },
                                className: "mt-8 flex items-center justify-center gap-8",
                                children: [{
                                    icon: l.jsx(wx, {
                                        className: "w-5 h-5"
                                    }),
                                    label: "Secure"
                                }, {
                                    icon: l.jsx(qa, {
                                        className: "w-5 h-5"
                                    }),
                                    label: "Protected"
                                }, {
                                    icon: l.jsx(pd, {
                                        className: "w-5 h-5"
                                    }),
                                    label: "Verified"
                                }].map( (d, f) => l.jsxs(T.div, {
                                    initial: {
                                        scale: .8,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .9 + f * .1
                                    },
                                    className: "flex flex-col items-center gap-1",
                                    children: [l.jsx("div", {
                                        className: "bg-white/5 p-2 rounded-full backdrop-blur-sm text-white/80",
                                        children: d.icon
                                    }), l.jsx("div", {
                                        className: "text-xs text-gray-400",
                                        children: d.label
                                    })]
                                }, d.label))
                            })]
                        })
                    })]
                })
            }, t ? "downloading" : "verifying")
        })]
    })
}
function cj() {
    const [e,t] = y.useState([{
        name: "Rizve",
        role: "Owner of Xeno",
        link: "https://github.com/Riz-ve",
        avatar: "",
        discordId: "924133673538830356"
    }, {
        name: "Nano",
        role: "Discord Server Manager",
        link: "https://discord.com/users/808779817977249832",
        avatar: "",
        discordId: "808779817977249832"
    }, {
        name: "Voxlis",
        role: "Domain Contributor",
        link: "https://voxlis.net",
        avatar: "",
        discordId: "1270744029168009258"
    }, {
        name: "Mxx_xx3",
        role: "Website Designer",
        link: "https://mxx3x.vercel.app",
        avatar: "",
        discordId: "1239176576382271499"
    }, {
        name: "Http2",
        role: "Xeno Contributor",
        link: "https://getluna.win",
        avatar: "",
        discordId: "1247924410510348340"
    }, {
        name: "Quivings",
        role: "Xeno Contributor",
        link: "https://getsolara.dev",
        avatar: "",
        discordId: "1325378791308001280"
    }])
      , n = [{
        name: "@xnegati",
        amount: "$200",
        platform: "PayPal"
    }, {
        name: "@doggysecretfree",
        amount: "$100",
        platform: "Patreon"
    }, {
        name: "@ajamu._.",
        amount: "$59.47",
        platform: "PayPal"
    }, {
        name: "@orangeado_",
        amount: "$50",
        platform: "Cash App"
    }, {
        name: "@larrrys.",
        amount: "$30",
        platform: "PayPal"
    }, {
        name: "@upio",
        amount: "$21",
        platform: "Crypto"
    }]
      , r = [{
        name: "@ww00719",
        amount: 21e3
    }, {
        name: "@doggysecretfree",
        amount: 8050
    }, {
        name: "@upio",
        amount: 4270
    }, {
        name: "@pand6a",
        amount: 3500
    }, {
        name: "@vunxa",
        amount: 1400
    }, {
        name: "@ryk_cbaool2025",
        amount: 1400
    }, {
        name: "@dostanhalat",
        amount: 1400
    }];
    return y.useEffect( () => {
        (async () => {
            const s = [...e];
            for (let o = 0; o < s.length; o++) {
                const a = s[o];
                if (a.discordId)
                    try {
                        const u = await fetch(`https://discordlookup.mesalytic.moe/v1/user/${a.discordId}`);
                        if (u.ok) {
                            const c = await u.json();
                            c.avatar && c.avatar.link && (s[o] = {
                                ...a,
                                avatar: c.avatar.link
                            })
                        }
                    } catch (u) {
                        console.error(`Failed to fetch Discord profile for ${a.name}:`, u)
                    }
            }
            t(s)
        }
        )()
    }
    , []),
    l.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-20",
        children: [l.jsx(an, {}), l.jsxs("div", {
            className: "relative max-w-6xl mx-auto px-4 py-12",
            children: [l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-4 mb-12",
                children: [l.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Credits"
                }), l.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Thank you to everyone who has contributed to making Xeno possible"
                })]
            }), l.jsxs("div", {
                className: "grid gap-8",
                children: [l.jsxs(T.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "relative overflow-hidden",
                    children: [l.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                    }), l.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                        }), l.jsxs("div", {
                            className: "relative p-6",
                            children: [l.jsxs("h2", {
                                className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                children: [l.jsxs("div", {
                                    className: "relative",
                                    children: [l.jsx("div", {
                                        className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                    }), l.jsx(cx, {
                                        className: "w-6 h-6 relative"
                                    })]
                                }), l.jsx("span", {
                                    className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                    children: "Contributors"
                                })]
                            }), l.jsx("div", {
                                className: "overflow-x-auto",
                                children: l.jsxs("table", {
                                    className: "w-full",
                                    children: [l.jsx("thead", {
                                        children: l.jsxs("tr", {
                                            className: "border-b border-white/10",
                                            children: [l.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Avatar"
                                            }), l.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Name"
                                            }), l.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Role"
                                            }), l.jsx("th", {
                                                className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                children: "Link"
                                            })]
                                        })
                                    }), l.jsx("tbody", {
                                        children: e.map( (i, s) => l.jsxs(T.tr, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                duration: .5,
                                                delay: s * .1
                                            },
                                            className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                            children: [l.jsx("td", {
                                                className: "py-3 px-4",
                                                children: l.jsxs("div", {
                                                    className: "relative group/avatar",
                                                    children: [l.jsx("div", {
                                                        className: "absolute -inset-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full blur opacity-0 group-hover/avatar:opacity-100 transition-all duration-500"
                                                    }), l.jsx("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse-slow opacity-0 group-hover/avatar:opacity-100"
                                                    }), l.jsx("img", {
                                                        src: i.avatar || "https://cdn.discordapp.com/embed/avatars/0.png",
                                                        alt: i.name,
                                                        className: "w-10 h-10 rounded-full object-cover relative transform group-hover/avatar:scale-105 transition-all duration-500 ring-2 ring-white/10 group-hover/avatar:ring-white/30"
                                                    })]
                                                })
                                            }), l.jsx("td", {
                                                className: "py-3 px-4",
                                                children: l.jsx("span", {
                                                    className: "font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                                    children: i.name
                                                })
                                            }), l.jsx("td", {
                                                className: "py-3 px-4",
                                                children: l.jsx("span", {
                                                    className: "text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: i.role
                                                })
                                            }), l.jsx("td", {
                                                className: "py-3 px-4 text-right",
                                                children: l.jsxs("a", {
                                                    href: i.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link relative",
                                                    children: [l.jsxs("span", {
                                                        className: "relative",
                                                        children: [l.jsx("span", {
                                                            className: "absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500"
                                                        }), "Visit"]
                                                    }), l.jsx(nm, {
                                                        className: "w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                                                    })]
                                                })
                                            })]
                                        }, i.name))
                                    })]
                                })
                            })]
                        })]
                    })]
                }), l.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [l.jsxs(T.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "relative overflow-hidden group",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                        }), l.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                            children: [l.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                            }), l.jsxs("div", {
                                className: "relative p-6",
                                children: [l.jsxs("h2", {
                                    className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                    children: [l.jsxs("div", {
                                        className: "relative",
                                        children: [l.jsx("div", {
                                            className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                        }), l.jsx(gx, {
                                            className: "w-6 h-6 relative"
                                        })]
                                    }), l.jsx("span", {
                                        className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: "Top Donators"
                                    })]
                                }), l.jsx("div", {
                                    className: "overflow-x-auto",
                                    children: l.jsxs("table", {
                                        className: "w-full",
                                        children: [l.jsx("thead", {
                                            children: l.jsxs("tr", {
                                                className: "border-b border-white/10",
                                                children: [l.jsx("th", {
                                                    className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                    children: "Username"
                                                }), l.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Amount"
                                                }), l.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Platform"
                                                })]
                                            })
                                        }), l.jsx("tbody", {
                                            children: n.map( (i, s) => l.jsxs(T.tr, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: .3,
                                                    delay: s * .05
                                                },
                                                className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                                children: [l.jsx("td", {
                                                    className: "py-3 px-4",
                                                    children: l.jsx("span", {
                                                        className: "text-gray-300 group-hover:text-white transition-colors",
                                                        children: i.name
                                                    })
                                                }), l.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: l.jsx("span", {
                                                        className: "font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors",
                                                        children: i.amount
                                                    })
                                                }), l.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: l.jsx("span", {
                                                        className: "text-gray-500 group-hover:text-gray-400 transition-colors",
                                                        children: i.platform
                                                    })
                                                })]
                                            }, i.name))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }), l.jsxs(T.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "relative overflow-hidden group",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                        }), l.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                            children: [l.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                            }), l.jsxs("div", {
                                className: "relative p-6",
                                children: [l.jsxs("h2", {
                                    className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                    children: [l.jsxs("div", {
                                        className: "relative",
                                        children: [l.jsx("div", {
                                            className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                        }), l.jsx(fx, {
                                            className: "w-6 h-6 relative"
                                        })]
                                    }), l.jsx("span", {
                                        className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: "Robux Donators"
                                    })]
                                }), l.jsx("div", {
                                    className: "overflow-x-auto",
                                    children: l.jsxs("table", {
                                        className: "w-full",
                                        children: [l.jsx("thead", {
                                            children: l.jsxs("tr", {
                                                className: "border-b border-white/10",
                                                children: [l.jsx("th", {
                                                    className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                    children: "Username"
                                                }), l.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Amount"
                                                })]
                                            })
                                        }), l.jsx("tbody", {
                                            children: r.map( (i, s) => l.jsxs(T.tr, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: .3,
                                                    delay: s * .05
                                                },
                                                className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                                children: [l.jsx("td", {
                                                    className: "py-3 px-4",
                                                    children: l.jsx("span", {
                                                        className: "text-gray-300 group-hover:text-white transition-colors",
                                                        children: i.name
                                                    })
                                                }), l.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: l.jsxs("span", {
                                                        className: "font-mono text-yellow-400 group-hover:text-yellow-300 transition-colors",
                                                        children: [i.amount.toLocaleString(), " Robux"]
                                                    })
                                                })]
                                            }, i.name))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
}
function dj(e, t, n) {
    var r = this
      , i = y.useRef(null)
      , s = y.useRef(0)
      , o = y.useRef(null)
      , a = y.useRef([])
      , u = y.useRef()
      , c = y.useRef()
      , d = y.useRef(e)
      , f = y.useRef(!0);
    d.current = e;
    var h = typeof window < "u"
      , v = !t && t !== 0 && h;
    if (typeof e != "function")
        throw new TypeError("Expected a function");
    t = +t || 0;
    var x = !!(n = n || {}).leading
      , w = !("trailing"in n) || !!n.trailing
      , N = "maxWait"in n
      , m = "debounceOnServer"in n && !!n.debounceOnServer
      , p = N ? Math.max(+n.maxWait || 0, t) : null;
    y.useEffect(function() {
        return f.current = !0,
        function() {
            f.current = !1
        }
    }, []);
    var g = y.useMemo(function() {
        var j = function(A) {
            var O = a.current
              , oe = u.current;
            return a.current = u.current = null,
            s.current = A,
            c.current = d.current.apply(oe, O)
        }
          , k = function(A, O) {
            v && cancelAnimationFrame(o.current),
            o.current = v ? requestAnimationFrame(A) : setTimeout(A, O)
        }
          , b = function(A) {
            if (!f.current)
                return !1;
            var O = A - i.current;
            return !i.current || O >= t || O < 0 || N && A - s.current >= p
        }
          , E = function(A) {
            return o.current = null,
            w && a.current ? j(A) : (a.current = u.current = null,
            c.current)
        }
          , C = function A() {
            var O = Date.now();
            if (b(O))
                return E(O);
            if (f.current) {
                var oe = t - (O - i.current)
                  , ae = N ? Math.min(oe, p - (O - s.current)) : oe;
                k(A, ae)
            }
        }
          , _ = function() {
            if (h || m) {
                var A = Date.now()
                  , O = b(A);
                if (a.current = [].slice.call(arguments),
                u.current = r,
                i.current = A,
                O) {
                    if (!o.current && f.current)
                        return s.current = i.current,
                        k(C, t),
                        x ? j(i.current) : c.current;
                    if (N)
                        return k(C, t),
                        j(i.current)
                }
                return o.current || k(C, t),
                c.current
            }
        };
        return _.cancel = function() {
            o.current && (v ? cancelAnimationFrame(o.current) : clearTimeout(o.current)),
            s.current = 0,
            a.current = i.current = u.current = o.current = null
        }
        ,
        _.isPending = function() {
            return !!o.current
        }
        ,
        _.flush = function() {
            return o.current ? E(Date.now()) : c.current
        }
        ,
        _
    }, [x, N, t, p, w, v, h, m]);
    return g
}
function fj(e, t) {
    return e === t
}
function hj(e, t, n) {
    var r = fj
      , i = y.useRef(e)
      , s = y.useState({})[1]
      , o = dj(y.useCallback(function(u) {
        i.current = u,
        s({})
    }, [s]), t, n)
      , a = y.useRef(e);
    return r(a.current, e) || (o(e),
    a.current = e),
    [i.current, o]
}
AbortSignal.timeout || (AbortSignal.timeout = function(t) {
    const n = new AbortController;
    return setTimeout( () => n.abort(), t),
    n.signal
}
);
function pj() {
    var Qu;
    const [e,t] = y.useState([])
      , [n,r] = y.useState( () => {
        const S = localStorage.getItem("showClientManager");
        return S ? JSON.parse(S) : !1
    }
    )
      , [i,s] = y.useState( () => {
        const S = localStorage.getItem("showSettings");
        return S ? JSON.parse(S) : !1
    }
    )
      , [o,a] = y.useState( () => {
        const S = localStorage.getItem("xenoSettings");
        return S ? JSON.parse(S) : {
            autoSelectClients: !0,
            theme: "dark",
            fontSize: 14,
            minimap: !0,
            wordWrap: !1,
            showLineNumbers: !0
        }
    }
    )
      , [u,c] = y.useState( () => {
        const S = localStorage.getItem("isExecutorMode");
        return S ? JSON.parse(S) : !0
    }
    )
      , [d,f] = y.useState("")
      , [h,v] = y.useState("")
      , [x] = hj(h, 500)
      , [w,N] = y.useState([])
      , [m,p] = y.useState(!0)
      , [g,j] = y.useState(null)
      , [k,b] = y.useState(null)
      , [E,C] = y.useState(null)
      , [_,A] = y.useState(1)
      , [O,oe] = y.useState( () => {
        const S = localStorage.getItem("xenoTabs");
        return S ? JSON.parse(S) : [{
            id: "1",
            title: "New Script",
            content: ""
        }]
    }
    )
      , [ae,at] = y.useState( () => localStorage.getItem("xenoActiveTab") || "1")
      , [Ei,At] = y.useState(null)
      , [Y,M] = y.useState("")
      , V = y.useRef(null)
      , L = y.useRef(new Set)
      , [W,re] = y.useState( () => {
        const S = localStorage.getItem("xenoSavedScripts");
        return S ? JSON.parse(S) : []
    }
    )
      , [Je,vt] = y.useState(!1)
      , yr = "http://localhost:3110/o"
      , [yt,lt] = y.useState(null)
      , [A0,Hu] = y.useState(!1);
    y.useEffect( () => {
        localStorage.setItem("xenoTabs", JSON.stringify(O))
    }
    , [O]),
    y.useEffect( () => {
        localStorage.setItem("xenoActiveTab", ae)
    }
    , [ae]),
    y.useEffect( () => {
        localStorage.setItem("isExecutorMode", JSON.stringify(u))
    }
    , [u]),
    y.useEffect( () => {
        localStorage.setItem("showClientManager", JSON.stringify(n))
    }
    , [n]),
    y.useEffect( () => {
        localStorage.setItem("showSettings", JSON.stringify(i))
    }
    , [i]),
    y.useEffect( () => {
        localStorage.setItem("xenoSettings", JSON.stringify(o))
    }
    , [o]),
    y.useEffect( () => {
        const S = localStorage.getItem("selectedClients");
        if (S) {
            const R = new Set(JSON.parse(S));
            L.current = R,
            t(F => F.map(z => ({
                ...z,
                selected: R.has(z.pid)
            })))
        }
    }
    , []),
    y.useEffect( () => {
        const S = Array.from(L.current);
        localStorage.setItem("selectedClients", JSON.stringify(S))
    }
    , [e]),
    y.useEffect( () => {
        !u && h === "" && v(Mi())
    }
    , [u, h]),
    y.useEffect( () => {
        if (!u && d === "") {
            const S = Mi();
            v(S),
            A(1),
            N([]),
            Rn(1, 0, S)
        }
    }
    , [u]),
    y.useEffect( () => {
        !u && x !== "" && (A(1),
        N([]),
        Rn(1, 0, x))
    }
    , [x, u]),
    y.useEffect( () => {
        _ > 1 && !u && Rn(_)
    }
    , [_]),
    y.useEffect( () => {
        if (u) {
            const S = setTimeout( () => {
                Hu(!0)
            }
            , 100);
            return () => clearTimeout(S)
        } else
            Hu(!1)
    }
    , [u]);
    const Wu = async () => {
        try {
            const S = await fetch("http://localhost:3110/o", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!S.ok)
                throw new Error("Failed to fetch clients");
            const R = await S.json();
            if (!Array.isArray(R))
                throw new Error("Invalid data format: Expected an array");
            const F = R.map(z => {
                if (!Array.isArray(z) || z.length < 4)
                    return console.warn("Skipping invalid client data:", z),
                    null;
                const [fe,he,He,ln] = z
                  , pe = o.autoSelectClients || L.current.has(String(fe));
                return pe && L.current.add(String(fe)),
                {
                    pid: String(fe),
                    username: String(he),
                    playerName: String(He),
                    status: Number(ln),
                    selected: pe
                }
            }
            ).filter(z => z !== null);
            t(F),
            j(null)
        } catch (S) {
            console.error("Error fetching clients:", S),
            j("Failed to fetch clients"),
            t([])
        }
    }
    ;
    y.useEffect( () => {
        Wu();
        const S = setInterval(Wu, 5e3);
        return () => clearInterval(S)
    }
    , [o.autoSelectClients]);
    const Mi = () => {
        const S = ["aimbot", "esp", "pet simulator", "doors", "blox fruits", "jailbreak", "royale high", "adopt me", "arsenal", "survival", "brookhaven", "mm2", "simulator", "tycoon", "obby"]
          , R = Math.floor(Math.random() * S.length);
        return S[R]
    }
      , Rn = async (S, R=0, F) => {
        var fe;
        p(!0),
        j(null);
        const z = `https://scriptblox.com/api/script/search?q=${encodeURIComponent(F)}&page=${S}`;
        try {
            const he = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(z)}`, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
            if (!he.ok)
                throw new Error(`HTTP error! status: ${he.status}`);
            const He = await he.json();
            if (!((fe = He.result) != null && fe.scripts))
                throw new Error("Invalid response format");
            const ln = He.result.scripts.map(pe => {
                var Ri, Yu, Zu;
                let xr = "";
                return (Ri = pe.game) != null && Ri.imageUrl && (xr = pe.game.imageUrl.startsWith("http") ? pe.game.imageUrl : `https://scriptblox.com${pe.game.imageUrl}`),
                {
                    id: pe.id,
                    title: pe.title || "Untitled Script",
                    loadstring: pe.script || "",
                    description: ((Yu = pe.features) == null ? void 0 : Yu[0]) || ((Zu = pe.game) == null ? void 0 : Zu.name) || "",
                    imageUrl: xr,
                    slug: pe.slug || "",
                    isVerified: pe.verified || !1
                }
            }
            );
            N(pe => S === 1 ? ln : [...pe, ...ln]),
            j(null)
        } catch (he) {
            if (console.error("Error fetching scripts:", he),
            R < 3) {
                const He = Math.min(1e3 * Math.pow(2, R), 5e3);
                console.log(`Retrying fetch (attempt ${R + 1}) in ${He}ms...`),
                setTimeout( () => Rn(S, R + 1, F), He);
                return
            }
            j("Failed to load scripts. Please try again.")
        } finally {
            p(!1)
        }
    }
      , D0 = S => {
        L.current.has(S) ? L.current.delete(S) : L.current.add(S),
        t(R => R.map(F => F.pid === S ? {
            ...F,
            selected: !F.selected
        } : F))
    }
      , $u = async (S, R) => {
        const F = Array.from(L.current)
          , z = e.map(he => he.pid)
          , fe = F.filter(he => z.includes(he));
        if (fe.length === 0) {
            lt(R),
            C(null),
            setTimeout( () => {
                lt(null)
            }
            , 2e3);
            return
        }
        try {
            if (lt(null),
            !(await fetch(yr, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain",
                    Clients: JSON.stringify(fe)
                },
                body: S
            })).ok)
                throw new Error("Failed to execute script");
            C(S),
            setTimeout( () => C(null), 2e3)
        } catch {
            lt(R),
            C(null),
            setTimeout( () => {
                lt(null)
            }
            , 2e3)
        }
    }
      , L0 = async (S, R) => {
        await $u(S, R)
    }
      , V0 = S => {
        const R = S.target.value;
        f(R),
        v(R),
        R === "" && Ku()
    }
      , Ku = () => {
        f("");
        const S = Mi();
        v(S),
        A(1),
        N([]),
        Rn(1, 0, S)
    }
      , I0 = () => {
        const S = String(Date.now())
          , R = {
            id: S,
            title: "New Script",
            content: ""
        };
        oe(F => [...F, R]),
        at(S)
    }
      , _0 = (S, R) => {
        if (R.stopPropagation(),
        O.length === 1)
            return;
        const F = O.filter(z => z.id !== S);
        oe(F),
        ae === S && at(F[0].id)
    }
      , F0 = (S, R) => {
        R.stopPropagation();
        const F = O.find(z => z.id === S);
        F && (M(F.title),
        At(S),
        setTimeout( () => {
            V.current && (V.current.focus(),
            V.current.select())
        }
        , 0))
    }
      , Gu = S => {
        Y.trim() && oe(R => R.map(F => F.id === S ? {
            ...F,
            title: Y.trim()
        } : F)),
        At(null)
    }
      , O0 = (S, R) => {
        S.key === "Enter" ? (S.preventDefault(),
        Gu(R)) : S.key === "Escape" && (S.preventDefault(),
        At(null))
    }
      , z0 = S => {
        S !== void 0 && oe(R => R.map(F => F.id === ae ? {
            ...F,
            content: S
        } : F))
    }
      , B0 = () => {
        oe(S => S.map(R => R.id === ae ? {
            ...R,
            content: ""
        } : R))
    }
      , U0 = () => {
        const S = O.find(R => R.id === ae);
        if (S) {
            const R = new Blob([S.content],{
                type: "text/plain"
            })
              , F = URL.createObjectURL(R)
              , z = document.createElement("a");
            z.href = F,
            z.download = `${S.title}.lua`,
            document.body.appendChild(z),
            z.click(),
            document.body.removeChild(z),
            URL.revokeObjectURL(F)
        }
    }
      , H0 = () => {
        const S = document.createElement("input");
        S.type = "file",
        S.accept = ".lua,.txt",
        S.onchange = R => {
            var z;
            const F = (z = R.target.files) == null ? void 0 : z[0];
            if (F) {
                const fe = new FileReader;
                fe.onload = he => {
                    var xr;
                    const He = (xr = he.target) == null ? void 0 : xr.result
                      , ln = String(Date.now())
                      , pe = {
                        id: ln,
                        title: F.name.replace(/\.[^/.]+$/, ""),
                        content: He
                    };
                    oe(Ri => [...Ri, pe]),
                    at(ln)
                }
                ,
                fe.readAsText(F)
            }
        }
        ,
        S.click()
    }
      , Xu = S => {
        switch (S) {
        case 0:
            return "text-red-500";
        case 1:
            return "text-yellow-500";
        case 2:
            return "text-cyan-500";
        case 3:
            return "text-green-500";
        default:
            return "text-gray-500"
        }
    }
      , W0 = S => {
        switch (S) {
        case 0:
            return "Failed";
        case 1:
            return "Attaching";
        case 2:
            return "Waiting for Roblox";
        case 3:
            return "Attached";
        default:
            return "Unknown"
        }
    }
      , $0 = S => {
        if (W.some(fe => fe.loadstring === S.loadstring))
            return;
        const F = {
            ...S,
            id: Date.now().toString(),
            savedAt: Date.now()
        }
          , z = [...W, F];
        re(z),
        localStorage.setItem("xenoSavedScripts", JSON.stringify(z))
    }
      , K0 = S => {
        re(R => {
            const F = R.filter(z => z.id !== S.id && z.loadstring !== S.loadstring);
            return localStorage.setItem("xenoSavedScripts", JSON.stringify(F)),
            F
        }
        )
    }
      , G0 = async () => {
        const S = O.find(R => R.id === ae);
        if (S && S.content) {
            const R = `editor-${ae}`;
            await $u(S.content, R)
        }
    }
    ;
    return l.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [l.jsx(an, {}), l.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [l.jsxs(T.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [l.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: !u && "Script Hub"
                }), l.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: !u && "Search and discover scripts from the ScriptBlox community"
                })]
            }), l.jsx(pi, {
                mode: "wait",
                initial: !1,
                children: u ? l.jsxs(T.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .2
                    },
                    className: "relative",
                    children: [l.jsx("div", {
                        className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/0 rounded-xl blur opacity-75 transition-all duration-500"
                    }), l.jsxs("div", {
                        className: "relative bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                        children: [l.jsxs("div", {
                            className: "flex items-center gap-2 p-4 border-b border-white/10",
                            children: [l.jsxs("div", {
                                className: "flex-1 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                                children: [O.map(S => l.jsxs(T.div, {
                                    className: `group flex items-center gap-2 px-4 py-2 rounded-lg ${ae === S.id ? "bg-white/10" : "hover:bg-white/5"} transition-all cursor-pointer min-w-[120px] relative`,
                                    onClick: () => at(S.id),
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: [l.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                    }), l.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                    }), l.jsx(hx, {
                                        className: "w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity relative z-10"
                                    }), Ei === S.id ? l.jsx("input", {
                                        ref: V,
                                        type: "text",
                                        value: Y,
                                        onChange: R => M(R.target.value),
                                        onBlur: () => Gu(S.id),
                                        onKeyDown: R => O0(R, S.id),
                                        className: "bg-transparent border-none outline-none text-white w-full relative z-10",
                                        onClick: R => R.stopPropagation(),
                                        autoFocus: !0
                                    }) : l.jsxs(l.Fragment, {
                                        children: [l.jsx("span", {
                                            className: "flex-1 truncate relative z-10",
                                            children: S.title
                                        }), l.jsxs("div", {
                                            className: "flex items-center gap-1 relative z-10",
                                            children: [l.jsx(T.button, {
                                                onClick: R => F0(S.id, R),
                                                className: "p-1 hover:bg-white/10 rounded transition-colors",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: .9
                                                },
                                                children: l.jsx(Nx, {
                                                    className: "w-3 h-3"
                                                })
                                            }), O.length > 1 && l.jsx(T.button, {
                                                onClick: R => _0(S.id, R),
                                                className: "p-1 hover:bg-white/10 rounded transition-colors",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: .9
                                                },
                                                children: l.jsx(Ho, {
                                                    className: "w-3 h-3"
                                                })
                                            })]
                                        })]
                                    })]
                                }, S.id)), l.jsx(T.button, {
                                    onClick: I0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    children: l.jsx(rm, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [l.jsx(T.button, {
                                    onClick: H0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Open Script",
                                    children: l.jsx(mx, {
                                        className: "w-4 h-4"
                                    })
                                }), l.jsx(T.button, {
                                    onClick: U0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Save Script",
                                    children: l.jsx(kx, {
                                        className: "w-4 h-4"
                                    })
                                }), l.jsx(T.button, {
                                    onClick: B0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Clear Script",
                                    children: l.jsx(Ho, {
                                        className: "w-4 h-4"
                                    })
                                }), l.jsx(T.button, {
                                    onClick: () => c(!1),
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Script Hub",
                                    children: l.jsx(md, {
                                        className: "w-4 h-4"
                                    })
                                }), l.jsx(T.button, {
                                    onClick: () => s(!i),
                                    className: `p-2 rounded-lg transition-colors ${i ? "bg-white/10" : "hover:bg-white/10"}`,
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Settings",
                                    children: l.jsx(gd, {
                                        className: "w-4 h-4"
                                    })
                                }), l.jsx(T.button, {
                                    onClick: () => r(!n),
                                    className: `p-2 rounded-lg transition-colors ${n ? "bg-white/10" : "hover:bg-white/10"}`,
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Client Manager",
                                    children: l.jsx(xd, {
                                        className: "w-4 h-4"
                                    })
                                }), l.jsxs(T.button, {
                                    onClick: G0,
                                    className: "flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: [l.jsx(Ja, {
                                        className: "w-4 h-4"
                                    }), l.jsx("span", {
                                        children: "Execute"
                                    })]
                                })]
                            })]
                        }), i && l.jsxs("div", {
                            className: "border-b border-white/10 p-4 bg-black/20",
                            children: [l.jsx("div", {
                                className: "flex items-center justify-between mb-4",
                                children: l.jsxs("h3", {
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [l.jsx(gd, {
                                        className: "w-4 h-4"
                                    }), l.jsx("span", {
                                        children: "Settings"
                                    })]
                                })
                            }), l.jsxs("div", {
                                className: "space-y-4",
                                children: [l.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => a(S => ({
                                        ...S,
                                        autoSelectClients: !S.autoSelectClients
                                    })),
                                    children: [l.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [l.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Auto-select Clients"
                                        }), l.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Automatically select clients when they fetch"
                                        })]
                                    }), l.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.autoSelectClients ? "bg-white/20" : "bg-white/5"}`,
                                        children: l.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.autoSelectClients ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => a(S => ({
                                        ...S,
                                        theme: S.theme === "dark" ? "light" : "dark"
                                    })),
                                    children: [l.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [l.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Theme"
                                        }), l.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Switch between dark and light mode"
                                        })]
                                    }), l.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.theme === "dark" ? "bg-white/20" : "bg-white/5"}`,
                                        children: l.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.theme === "dark" ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => a(S => ({
                                        ...S,
                                        minimap: !S.minimap
                                    })),
                                    children: [l.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [l.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Minimap"
                                        }), l.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Show code minimap"
                                        })]
                                    }), l.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.minimap ? "bg-white/20" : "bg-white/5"}`,
                                        children: l.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.minimap ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => a(S => ({
                                        ...S,
                                        wordWrap: !S.wordWrap
                                    })),
                                    children: [l.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [l.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Word Wrap"
                                        }), l.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Wrap long lines"
                                        })]
                                    }), l.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.wordWrap ? "bg-white/20" : "bg-white/5"}`,
                                        children: l.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.wordWrap ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => a(S => ({
                                        ...S,
                                        showLineNumbers: !S.showLineNumbers
                                    })),
                                    children: [l.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [l.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Line Numbers"
                                        }), l.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Show line numbers in editor"
                                        })]
                                    }), l.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.showLineNumbers ? "bg-white/20" : "bg-white/5"}`,
                                        children: l.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.showLineNumbers ? "right-1" : "left-1"}`
                                        })
                                    })]
                                })]
                            })]
                        }), n && l.jsxs("div", {
                            className: "border-b border-white/10 p-4 bg-black/20",
                            children: [l.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [l.jsxs("h3", {
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [l.jsx(xd, {
                                        className: "w-4 h-4"
                                    }), l.jsx("span", {
                                        children: "Connected Clients"
                                    })]
                                }), l.jsxs("span", {
                                    className: "text-xs text-gray-400",
                                    children: [e.length, " clients"]
                                })]
                            }), l.jsx("div", {
                                className: "space-y-2",
                                children: e.length === 0 ? l.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-400 p-4 bg-white/5 rounded-lg",
                                    children: [l.jsx(em, {
                                        className: "w-4 h-4"
                                    }), l.jsx("span", {
                                        children: "No clients connected"
                                    })]
                                }) : l.jsx("div", {
                                    className: "grid gap-2",
                                    children: e.map(S => l.jsxs(T.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "group relative cursor-pointer",
                                        onClick: () => D0(S.pid),
                                        children: [l.jsx("div", {
                                            className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        }), l.jsx("div", {
                                            className: `relative p-3 rounded-lg transition-all duration-300 ${S.selected ? "bg-white/10" : "bg-white/5"}`,
                                            children: l.jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [l.jsxs("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [l.jsx("div", {
                                                        className: `w-2 h-2 rounded-full ${Xu(S.status)} animate-pulse`
                                                    }), l.jsxs("div", {
                                                        className: "flex flex-col",
                                                        children: [l.jsx("span", {
                                                            className: "text-sm font-height",
                                                            children: S.username
                                                        }), l.jsx("span", {
                                                            className: `text-xs ${Xu(S.status)}`,
                                                            children: W0(S.status)
                                                        })]
                                                    })]
                                                }), l.jsx("div", {
                                                    className: `w-5 h-5 rounded flex items-center justify-center ${S.selected ? "bg-white/20 text-white" : "border border-white/40"} transition-colors`,
                                                    children: S.selected && l.jsx(ls, {
                                                        className: "w-4 h-4"
                                                    })
                                                })]
                                            })
                                        })]
                                    }, S.pid))
                                })
                            })]
                        }), l.jsx("div", {
                            className: "h-[600px]",
                            children: A0 && l.jsx(Q0, {
                                height: "100%",
                                defaultLanguage: "lua",
                                theme: o.theme === "dark" ? "vs-dark" : "vs-light",
                                value: (Qu = O.find(S => S.id === ae)) == null ? void 0 : Qu.content,
                                onChange: z0,
                                options: {
                                    minimap: {
                                        enabled: o.minimap
                                    },
                                    fontSize: o.fontSize,
                                    padding: {
                                        top: 20
                                    },
                                    smoothScrolling: !0,
                                    cursorSmoothCaretAnimation: "on",
                                    cursorBlinking: "smooth",
                                    formatOnPaste: !0,
                                    formatOnType: !0,
                                    wordWrap: o.wordWrap ? "on" : "off",
                                    lineNumbers: o.showLineNumbers ? "on" : "off"
                                }
                            }, "monaco-editor")
                        })]
                    })]
                }, "executor") : l.jsxs(T.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .2
                    },
                    children: [l.jsx("div", {
                        className: "max-w-7xl mx-auto mb-8",
                        children: l.jsxs("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [l.jsxs("div", {
                                className: "relative flex-1",
                                children: [l.jsx("div", {
                                    className: "absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"
                                }), l.jsx("div", {
                                    className: "relative bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                                    children: l.jsxs("div", {
                                        className: "flex items-center px-4 py-3",
                                        children: [l.jsx(Cx, {
                                            className: "w-5 h-5 text-gray-400"
                                        }), l.jsx("input", {
                                            type: "text",
                                            value: d,
                                            onChange: V0,
                                            placeholder: "Search scripts...",
                                            className: "w-full px-4 py-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                        }), d && l.jsx("button", {
                                            onClick: Ku,
                                            className: "p-1 hover:bg-white/10 rounded-full transition-colors ml-2",
                                            title: "Clear search",
                                            children: l.jsx(wd, {
                                                className: "w-4 h-4 text-gray-400"
                                            })
                                        })]
                                    })
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [l.jsxs(T.button, {
                                    onClick: () => vt(!Je),
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: `relative group px-6 py-3 rounded-xl overflow-hidden ${Je ? "bg-yellow-500/20" : "bg-white/5"}`,
                                    title: "Saved Scripts",
                                    children: [l.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    }), l.jsxs("div", {
                                        className: "relative flex items-center gap-2",
                                        children: [l.jsx(yd, {
                                            className: `w-4 h-4 ${Je ? "text-yellow-500" : "text-white"}`
                                        }), l.jsxs("span", {
                                            className: `${Je ? "text-yellow-500" : "text-white"}`,
                                            children: [W.length, " Saved"]
                                        })]
                                    })]
                                }), l.jsxs(T.button, {
                                    onClick: () => c(!0),
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: "relative group px-6 py-3 rounded-xl overflow-hidden bg-white/5",
                                    children: [l.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    }), l.jsxs("div", {
                                        className: "relative flex items-center gap-2",
                                        children: [l.jsx(md, {
                                            className: "w-4 h-4"
                                        }), l.jsx("span", {
                                            children: "Editor"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), l.jsx("div", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto",
                        children: l.jsx(pi, {
                            mode: "wait",
                            children: m ? l.jsx(l.Fragment, {
                                children: [1, 2, 3, 4, 5, 6].map(S => l.jsx(T.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "relative",
                                    children: l.jsxs("div", {
                                        className: "relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                                        children: [l.jsx("div", {
                                            className: "aspect-video w-full bg-white/5 animate-pulse"
                                        }), l.jsxs("div", {
                                            className: "p-6 space-y-4",
                                            children: [l.jsx("div", {
                                                className: "h-6 bg-white/5 rounded animate-pulse"
                                            }), l.jsxs("div", {
                                                className: "space-y-2",
                                                children: [l.jsx("div", {
                                                    className: "h-4 bg-white/5 rounded animate-pulse"
                                                }), l.jsx("div", {
                                                    className: "h-4 bg-white/5 rounded animate-pulse w-2/3"
                                                })]
                                            }), l.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [l.jsx("div", {
                                                    className: "flex-1 h-10 bg-white/5 rounded animate-pulse"
                                                }), l.jsx("div", {
                                                    className: "flex-1 h-10 bg-white/5 rounded animate-pulse"
                                                }), l.jsx("div", {
                                                    className: "w-[52px] h-10 bg-white/5 rounded animate-pulse"
                                                })]
                                            })]
                                        })]
                                    })
                                }, `skeleton-${S}`))
                            }) : (Je ? W : w).map(S => {
                                const R = W.some(F => F.loadstring === S.loadstring);
                                return l.jsxs(T.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    className: "group relative",
                                    children: [l.jsx("div", {
                                        className: `absolute -inset-0.5 bg-gradient-to-r ${R ? "from-yellow-500/20 to-yellow-500/0" : "from-white/20 to-white/0"} rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500`
                                    }), l.jsxs("div", {
                                        className: `relative bg-gradient-to-br ${R ? "from-yellow-500/5 via-black/40 to-black/60 border-yellow-500/10" : "from-white/5 via-black/40 to-black/60 border-white/10"} backdrop-blur-xl rounded-xl border overflow-hidden`,
                                        children: [l.jsxs("div", {
                                            className: "aspect-video w-full overflow-hidden relative group",
                                            children: [S.imageUrl ? l.jsxs(l.Fragment, {
                                                children: [l.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                                                }), l.jsx("img", {
                                                    src: S.imageUrl,
                                                    alt: S.title,
                                                    className: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500",
                                                    onError: F => {
                                                        var he, He;
                                                        const z = F.target;
                                                        z.style.display = "none",
                                                        (he = z.parentElement) == null || he.classList.add("bg-black/30", "flex", "items-center", "justify-center");
                                                        const fe = document.createElement("span");
                                                        fe.className = "text-gray-500 text-sm",
                                                        fe.textContent = "No image",
                                                        (He = z.parentElement) == null || He.appendChild(fe)
                                                    }
                                                })]
                                            }) : l.jsx("div", {
                                                className: "w-full h-full bg-black/30 flex items-center justify-center",
                                                children: l.jsx("span", {
                                                    className: "text-gray-500 text-sm",
                                                    children: "No image"
                                                })
                                            }), S.isVerified && l.jsxs("div", {
                                                className: "absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1.5 bg-blue-500/20 backdrop-blur-md rounded-full",
                                                children: [l.jsx(qa, {
                                                    className: "w-4 h-4 text-blue-400"
                                                }), l.jsx("span", {
                                                    className: "text-xs text-blue-400",
                                                    children: "Verified"
                                                })]
                                            })]
                                        }), l.jsx("div", {
                                            className: "p-6",
                                            children: l.jsxs("div", {
                                                className: "flex flex-col gap-4",
                                                children: [l.jsx("h2", {
                                                    className: `text-xl font-bold bg-gradient-to-r ${R ? "from-yellow-500 via-yellow-400 to-yellow-500 group-hover:text-yellow-500" : "from-white via-gray-200 to-white group-hover:text-white"} bg-clip-text text-transparent transition-colors`,
                                                    children: S.title
                                                }), l.jsx("p", {
                                                    className: "text-sm text-gray-400 line-clamp-2",
                                                    children: S.description
                                                }), l.jsxs("div", {
                                                    className: "flex gap-2",
                                                    children: [l.jsx(T.button, {
                                                        onClick: () => {
                                                            navigator.clipboard.writeText(S.loadstring),
                                                            b(S.slug),
                                                            setTimeout( () => b(null), 2e3)
                                                        }
                                                        ,
                                                        className: "flex-1 group/btn relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors",
                                                        children: l.jsx("div", {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            children: k === S.slug ? l.jsxs(l.Fragment, {
                                                                children: [l.jsx(ls, {
                                                                    className: "w-4 h-4 text-green-400"
                                                                }), l.jsx("span", {
                                                                    className: "text-green-400",
                                                                    children: "Copied!"
                                                                })]
                                                            }) : l.jsxs(l.Fragment, {
                                                                children: [l.jsx(tm, {
                                                                    className: "w-4 h-4 text-white"
                                                                }), l.jsx("span", {
                                                                    className: "text-white",
                                                                    children: "Copy"
                                                                })]
                                                            })
                                                        })
                                                    }), l.jsx(T.button, {
                                                        onClick: () => L0(S.loadstring, S.id || S.slug),
                                                        className: `flex-1 group/btn relative overflow-hidden rounded-lg ${R ? "bg-yellow-500/10 hover:bg-yellow-500/20" : "bg-white/5 hover:bg-white/10"} transition-colors`,
                                                        children: l.jsx("div", {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            children: E === S.loadstring ? l.jsxs(l.Fragment, {
                                                                children: [l.jsx(ls, {
                                                                    className: "w-4 h-4 text-green-400"
                                                                }), l.jsx("span", {
                                                                    className: "text-green-400",
                                                                    children: "Executed!"
                                                                })]
                                                            }) : yt === (S.id || S.slug) ? l.jsxs(l.Fragment, {
                                                                children: [l.jsx(wd, {
                                                                    className: "w-4 h-4 text-red-400"
                                                                }), l.jsx("span", {
                                                                    className: "text-red-400",
                                                                    children: "Failed to execute"
                                                                })]
                                                            }) : l.jsxs(l.Fragment, {
                                                                children: [l.jsx(Ja, {
                                                                    className: `w-4 h-4 ${R ? "text-yellow-500" : "text-white"}`
                                                                }), l.jsx("span", {
                                                                    className: R ? "text-yellow-500" : "text-white",
                                                                    children: "Execute"
                                                                })]
                                                            })
                                                        })
                                                    }), R ? l.jsx(T.button, {
                                                        onClick: () => K0(S),
                                                        className: "group/btn relative overflow-hidden rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors",
                                                        children: l.jsx("div", {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            children: l.jsx(Ho, {
                                                                className: "w-4 h-4 text-red-500"
                                                            })
                                                        })
                                                    }) : l.jsx(T.button, {
                                                        onClick: () => $0(S),
                                                        className: "group/btn relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors",
                                                        children: l.jsx("div", {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            children: l.jsx(yd, {
                                                                className: "w-4 h-4 text-yellow-500"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                }, S.id || S.slug)
                            }
                            )
                        })
                    }), !m && w.length > 0 && !Je && l.jsxs(T.button, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        onClick: () => {
                            const S = _ + 1;
                            A(S),
                            Rn(S, 0, x || Mi())
                        }
                        ,
                        className: "mx-auto mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2",
                        children: [m ? l.jsx("div", {
                            className: "animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"
                        }) : null, l.jsx("span", {
                            children: "Load More"
                        })]
                    })]
                }, "scripthub")
            })]
        })]
    })
}
const mj = () => l.jsxs("div", {
    className: "relative min-h-screen bg-black text-white flex items-center justify-center",
    children: [l.jsxs("div", {
        className: "relative z-10 text-center space-y-8",
        children: [l.jsxs("div", {
            className: "relative overflow-hidden",
            children: [l.jsx("div", {
                className: "text-8xl font-black tracking-tighter animate-fade-in",
                children: l.jsx("span", {
                    className: "bg-gradient-to-b from-white via-gray-200 to-transparent bg-clip-text text-transparent",
                    children: "404"
                })
            }), l.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            })]
        }), l.jsx("p", {
            className: "text-gray-400 text-lg max-w-md mx-auto",
            children: "The page you're looking for doesn't exist"
        }), l.jsxs("a", {
            href: "/",
            className: "inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 group",
            children: [l.jsx(ux, {
                className: "w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            }), l.jsx("span", {
                className: "text-sm font-medium",
                children: "Go back home"
            })]
        })]
    }), l.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: l.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]"
        })
    })]
});
function gj() {
    const t = !mr().pathname.includes("94195512955915412414");
    return l.jsxs("div", {
        className: "min-h-screen bg-black",
        children: [t && l.jsx(qS, {}), l.jsxs(Yy, {
            children: [l.jsx(ct, {
                path: "/",
                element: l.jsx(rj, {})
            }), l.jsx(ct, {
                path: "/tutorial",
                element: l.jsx(ij, {})
            }), l.jsx(ct, {
                path: "/executor",
                element: l.jsx(pj, {})
            }), l.jsx(ct, {
                path: "/donate",
                element: l.jsx(sj, {})
            }), l.jsx(ct, {
                path: "/download",
                element: l.jsx(aj, {})
            }), l.jsx(ct, {
                path: "/download/step1",
                element: l.jsx(lj, {})
            }), l.jsx(ct, {
                path: "/credits",
                element: l.jsx(cj, {})
            }), l.jsx(ct, {
                path: "/94195512955915412414/6999051b-2aad-4b63-b134-51815e088805",
                element: l.jsx(uj, {})
            }), l.jsx(ct, {
                path: "*",
                element: l.jsx(mj, {})
            })]
        }), t && l.jsx(ej, {})]
    })
}
function vj() {
    return l.jsx(rx, {
        children: l.jsx(gj, {})
    })
}
Bp(document.getElementById("root")).render(l.jsx(y.StrictMode, {
    children: l.jsx(vj, {})
}));
