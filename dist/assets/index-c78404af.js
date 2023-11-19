function Nm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const u of o.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Dm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var cp = { exports: {} },
  $u = {},
  fp = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uo = Symbol.for('react.element'),
  Im = Symbol.for('react.portal'),
  Lm = Symbol.for('react.fragment'),
  Am = Symbol.for('react.strict_mode'),
  jm = Symbol.for('react.profiler'),
  zm = Symbol.for('react.provider'),
  bm = Symbol.for('react.context'),
  $m = Symbol.for('react.forward_ref'),
  Fm = Symbol.for('react.suspense'),
  Um = Symbol.for('react.memo'),
  Qm = Symbol.for('react.lazy'),
  Zc = Symbol.iterator;
function qm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Zc && e[Zc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var dp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pp = Object.assign,
  hp = {};
function qr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hp),
    (this.updater = n || dp);
}
qr.prototype.isReactComponent = {};
qr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
qr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function vp() {}
vp.prototype = qr.prototype;
function Ts(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hp),
    (this.updater = n || dp);
}
var Ms = (Ts.prototype = new vp());
Ms.constructor = Ts;
pp(Ms, qr.prototype);
Ms.isPureReactComponent = !0;
var ef = Array.isArray,
  mp = Object.prototype.hasOwnProperty,
  _s = { current: null },
  yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function gp(e, t, n) {
  var r,
    i = {},
    o = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      mp.call(t, r) && !yp.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), s = 0; s < l; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: uo,
    type: e,
    key: o,
    ref: u,
    props: i,
    _owner: _s.current,
  };
}
function Bm(e, t) {
  return {
    $$typeof: uo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ns(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === uo;
}
function Vm(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tf = /\/+/g;
function Al(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Vm('' + e.key)
    : t.toString(36);
}
function Fo(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        u = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case uo:
          case Im:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (i = i(u)),
      (e = r === '' ? '.' + Al(u, 0) : r),
      ef(i)
        ? ((n = ''),
          e != null && (n = e.replace(tf, '$&/') + '/'),
          Fo(i, t, n, '', function (s) {
            return s;
          }))
        : i != null &&
          (Ns(i) &&
            (i = Bm(
              i,
              n +
                (!i.key || (u && u.key === i.key)
                  ? ''
                  : ('' + i.key).replace(tf, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((u = 0), (r = r === '' ? '.' : r + ':'), ef(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Al(o, l);
      u += Fo(o, t, n, a, i);
    }
  else if (((a = qm(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Al(o, l++)), (u += Fo(o, t, n, a, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return u;
}
function So(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fo(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Wm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Je = { current: null },
  Uo = { transition: null },
  Hm = {
    ReactCurrentDispatcher: Je,
    ReactCurrentBatchConfig: Uo,
    ReactCurrentOwner: _s,
  };
ne.Children = {
  map: So,
  forEach: function (e, t, n) {
    So(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      So(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      So(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ns(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
ne.Component = qr;
ne.Fragment = Lm;
ne.Profiler = jm;
ne.PureComponent = Ts;
ne.StrictMode = Am;
ne.Suspense = Fm;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
ne.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = pp({}, e.props),
    i = e.key,
    o = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (u = _s.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      mp.call(t, a) &&
        !yp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var s = 0; s < a; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: uo, type: e.type, key: i, ref: o, props: r, _owner: u };
};
ne.createContext = function (e) {
  return (
    (e = {
      $$typeof: bm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zm, _context: e }),
    (e.Consumer = e)
  );
};
ne.createElement = gp;
ne.createFactory = function (e) {
  var t = gp.bind(null, e);
  return (t.type = e), t;
};
ne.createRef = function () {
  return { current: null };
};
ne.forwardRef = function (e) {
  return { $$typeof: $m, render: e };
};
ne.isValidElement = Ns;
ne.lazy = function (e) {
  return { $$typeof: Qm, _payload: { _status: -1, _result: e }, _init: Wm };
};
ne.memo = function (e, t) {
  return { $$typeof: Um, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function (e) {
  var t = Uo.transition;
  Uo.transition = {};
  try {
    e();
  } finally {
    Uo.transition = t;
  }
};
ne.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
ne.useCallback = function (e, t) {
  return Je.current.useCallback(e, t);
};
ne.useContext = function (e) {
  return Je.current.useContext(e);
};
ne.useDebugValue = function () {};
ne.useDeferredValue = function (e) {
  return Je.current.useDeferredValue(e);
};
ne.useEffect = function (e, t) {
  return Je.current.useEffect(e, t);
};
ne.useId = function () {
  return Je.current.useId();
};
ne.useImperativeHandle = function (e, t, n) {
  return Je.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function (e, t) {
  return Je.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function (e, t) {
  return Je.current.useLayoutEffect(e, t);
};
ne.useMemo = function (e, t) {
  return Je.current.useMemo(e, t);
};
ne.useReducer = function (e, t, n) {
  return Je.current.useReducer(e, t, n);
};
ne.useRef = function (e) {
  return Je.current.useRef(e);
};
ne.useState = function (e) {
  return Je.current.useState(e);
};
ne.useSyncExternalStore = function (e, t, n) {
  return Je.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function () {
  return Je.current.useTransition();
};
ne.version = '18.2.0';
fp.exports = ne;
var M = fp.exports;
const Sp = Dm(M),
  Km = Nm({ __proto__: null, default: Sp }, [M]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym = M,
  Gm = Symbol.for('react.element'),
  Xm = Symbol.for('react.fragment'),
  Jm = Object.prototype.hasOwnProperty,
  Zm = Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ey = { key: !0, ref: !0, __self: !0, __source: !0 };
function wp(e, t, n) {
  var r,
    i = {},
    o = null,
    u = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) Jm.call(t, r) && !ey.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Gm,
    type: e,
    key: o,
    ref: u,
    props: i,
    _owner: Zm.current,
  };
}
$u.Fragment = Xm;
$u.jsx = wp;
$u.jsxs = wp;
cp.exports = $u;
var q = cp.exports,
  xa = {},
  Ep = { exports: {} },
  ht = {},
  xp = { exports: {} },
  Pp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, b) {
    var z = N.length;
    N.push(b);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        V = N[Q];
      if (0 < i(V, b)) (N[Q] = b), (N[z] = V), (z = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var b = N[0],
      z = N.pop();
    if (z !== b) {
      N[0] = z;
      e: for (var Q = 0, V = N.length, X = V >>> 1; Q < X; ) {
        var Z = 2 * (Q + 1) - 1,
          J = N[Z],
          re = Z + 1,
          ae = N[re];
        if (0 > i(J, z))
          re < V && 0 > i(ae, J)
            ? ((N[Q] = ae), (N[re] = z), (Q = re))
            : ((N[Q] = J), (N[Z] = z), (Q = Z));
        else if (re < V && 0 > i(ae, z)) (N[Q] = ae), (N[re] = z), (Q = re);
        else break e;
      }
    }
    return b;
  }
  function i(N, b) {
    var z = N.sortIndex - b.sortIndex;
    return z !== 0 ? z : N.id - b.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var u = Date,
      l = u.now();
    e.unstable_now = function () {
      return u.now() - l;
    };
  }
  var a = [],
    s = [],
    f = 1,
    p = null,
    d = 3,
    v = !1,
    g = !1,
    S = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var b = n(s); b !== null; ) {
      if (b.callback === null) r(s);
      else if (b.startTime <= N)
        r(s), (b.sortIndex = b.expirationTime), t(a, b);
      else break;
      b = n(s);
    }
  }
  function c(N) {
    if (((S = !1), y(N), !g))
      if (n(a) !== null) (g = !0), B(w);
      else {
        var b = n(s);
        b !== null && K(c, b.startTime - N);
      }
  }
  function w(N, b) {
    (g = !1), S && ((S = !1), m(k), (k = -1)), (v = !0);
    var z = d;
    try {
      for (
        y(b), p = n(a);
        p !== null && (!(p.expirationTime > b) || (N && !T()));

      ) {
        var Q = p.callback;
        if (typeof Q == 'function') {
          (p.callback = null), (d = p.priorityLevel);
          var V = Q(p.expirationTime <= b);
          (b = e.unstable_now()),
            typeof V == 'function' ? (p.callback = V) : p === n(a) && r(a),
            y(b);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var X = !0;
      else {
        var Z = n(s);
        Z !== null && K(c, Z.startTime - b), (X = !1);
      }
      return X;
    } finally {
      (p = null), (d = z), (v = !1);
    }
  }
  var E = !1,
    x = null,
    k = -1,
    O = 5,
    R = -1;
  function T() {
    return !(e.unstable_now() - R < O);
  }
  function D() {
    if (x !== null) {
      var N = e.unstable_now();
      R = N;
      var b = !0;
      try {
        b = x(!0, N);
      } finally {
        b ? I() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var I;
  if (typeof h == 'function')
    I = function () {
      h(D);
    };
  else if (typeof MessageChannel < 'u') {
    var $ = new MessageChannel(),
      A = $.port2;
    ($.port1.onmessage = D),
      (I = function () {
        A.postMessage(null);
      });
  } else
    I = function () {
      P(D, 0);
    };
  function B(N) {
    (x = N), E || ((E = !0), I());
  }
  function K(N, b) {
    k = P(function () {
      N(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), B(w));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (O = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = d;
      }
      var z = d;
      d = b;
      try {
        return N();
      } finally {
        d = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, b) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = d;
      d = N;
      try {
        return b();
      } finally {
        d = z;
      }
    }),
    (e.unstable_scheduleCallback = function (N, b, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? Q + z : Q))
          : (z = Q),
        N)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = z + V),
        (N = {
          id: f++,
          callback: b,
          priorityLevel: N,
          startTime: z,
          expirationTime: V,
          sortIndex: -1,
        }),
        z > Q
          ? ((N.sortIndex = z),
            t(s, N),
            n(a) === null &&
              N === n(s) &&
              (S ? (m(k), (k = -1)) : (S = !0), K(c, z - Q)))
          : ((N.sortIndex = V), t(a, N), g || v || ((g = !0), B(w))),
        N
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (N) {
      var b = d;
      return function () {
        var z = d;
        d = b;
        try {
          return N.apply(this, arguments);
        } finally {
          d = z;
        }
      };
    });
})(Pp);
xp.exports = Pp;
var ty = xp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kp = M,
  dt = ty;
function j(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Rp = new Set(),
  Ai = {};
function lr(e, t) {
  Lr(e, t), Lr(e + 'Capture', t);
}
function Lr(e, t) {
  for (Ai[e] = t, e = 0; e < t.length; e++) Rp.add(t[e]);
}
var Zt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Pa = Object.prototype.hasOwnProperty,
  ny =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nf = {},
  rf = {};
function ry(e) {
  return Pa.call(rf, e)
    ? !0
    : Pa.call(nf, e)
    ? !1
    : ny.test(e)
    ? (rf[e] = !0)
    : ((nf[e] = !0), !1);
}
function iy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function oy(e, t, n, r) {
  if (t === null || typeof t > 'u' || iy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ze(e, t, n, r, i, o, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u);
}
var qe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    qe[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  qe[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  qe[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  qe[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    qe[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  qe[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  qe[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  qe[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  qe[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ds = /[\-:]([a-z])/g;
function Is(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ds, Is);
    qe[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ds, Is);
    qe[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ds, Is);
  qe[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  qe[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
qe.xlinkHref = new Ze(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  qe[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ls(e, t, n, r) {
  var i = qe.hasOwnProperty(t) ? qe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (oy(t, n, i, r) && (n = null),
    r || i === null
      ? ry(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wo = Symbol.for('react.element'),
  pr = Symbol.for('react.portal'),
  hr = Symbol.for('react.fragment'),
  As = Symbol.for('react.strict_mode'),
  ka = Symbol.for('react.profiler'),
  Cp = Symbol.for('react.provider'),
  Op = Symbol.for('react.context'),
  js = Symbol.for('react.forward_ref'),
  Ra = Symbol.for('react.suspense'),
  Ca = Symbol.for('react.suspense_list'),
  zs = Symbol.for('react.memo'),
  hn = Symbol.for('react.lazy'),
  Tp = Symbol.for('react.offscreen'),
  of = Symbol.iterator;
function ei(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (of && e[of]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ke = Object.assign,
  jl;
function hi(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = (t && t[1]) || '';
    }
  return (
    `
` +
    jl +
    e
  );
}
var zl = !1;
function bl(e, t) {
  if (!e || zl) return '';
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var i = s.stack.split(`
`),
          o = r.stack.split(`
`),
          u = i.length - 1,
          l = o.length - 1;
        1 <= u && 0 <= l && i[u] !== o[l];

      )
        l--;
      for (; 1 <= u && 0 <= l; u--, l--)
        if (i[u] !== o[l]) {
          if (u !== 1 || l !== 1)
            do
              if ((u--, l--, 0 > l || i[u] !== o[l])) {
                var a =
                  `
` + i[u].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= u && 0 <= l);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? hi(e) : '';
}
function uy(e) {
  switch (e.tag) {
    case 5:
      return hi(e.type);
    case 16:
      return hi('Lazy');
    case 13:
      return hi('Suspense');
    case 19:
      return hi('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = bl(e.type, !1)), e;
    case 11:
      return (e = bl(e.type.render, !1)), e;
    case 1:
      return (e = bl(e.type, !0)), e;
    default:
      return '';
  }
}
function Oa(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case hr:
      return 'Fragment';
    case pr:
      return 'Portal';
    case ka:
      return 'Profiler';
    case As:
      return 'StrictMode';
    case Ra:
      return 'Suspense';
    case Ca:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Op:
        return (e.displayName || 'Context') + '.Consumer';
      case Cp:
        return (e._context.displayName || 'Context') + '.Provider';
      case js:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case zs:
        return (
          (t = e.displayName || null), t !== null ? t : Oa(e.type) || 'Memo'
        );
      case hn:
        (t = e._payload), (e = e._init);
        try {
          return Oa(e(t));
        } catch {}
    }
  return null;
}
function ly(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Oa(t);
    case 8:
      return t === As ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Dn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Mp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function ay(e) {
  var t = Mp(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (u) {
          (r = '' + u), o.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = '' + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Eo(e) {
  e._valueTracker || (e._valueTracker = ay(e));
}
function _p(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Mp(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function eu(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ta(e, t) {
  var n = t.checked;
  return ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function uf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Np(e, t) {
  (t = t.checked), t != null && Ls(e, 'checked', t, !1);
}
function Ma(e, t) {
  Np(e, t);
  var n = Dn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? _a(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && _a(e, t.type, Dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function lf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function _a(e, t, n) {
  (t !== 'number' || eu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var vi = Array.isArray;
function Cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Na(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function af(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (vi(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Dn(n) };
}
function Dp(e, t) {
  var n = Dn(t.value),
    r = Dn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function sf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ip(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Da(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ip(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var xo,
  Lp = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        xo = xo || document.createElement('div'),
          xo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = xo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ji(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wi = {
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
    strokeWidth: !0,
  },
  sy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(wi).forEach(function (e) {
  sy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wi[t] = wi[e]);
  });
});
function Ap(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (wi.hasOwnProperty(e) && wi[e])
    ? ('' + t).trim()
    : t + 'px';
}
function jp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Ap(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var cy = ke(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Ia(e, t) {
  if (t) {
    if (cy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(j(62));
  }
}
function La(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Aa = null;
function bs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ja = null,
  Or = null,
  Tr = null;
function cf(e) {
  if ((e = so(e))) {
    if (typeof ja != 'function') throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Bu(t)), ja(e.stateNode, e.type, t));
  }
}
function zp(e) {
  Or ? (Tr ? Tr.push(e) : (Tr = [e])) : (Or = e);
}
function bp() {
  if (Or) {
    var e = Or,
      t = Tr;
    if (((Tr = Or = null), cf(e), t)) for (e = 0; e < t.length; e++) cf(t[e]);
  }
}
function $p(e, t) {
  return e(t);
}
function Fp() {}
var $l = !1;
function Up(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return $p(e, t, n);
  } finally {
    ($l = !1), (Or !== null || Tr !== null) && (Fp(), bp());
  }
}
function zi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var za = !1;
if (Zt)
  try {
    var ti = {};
    Object.defineProperty(ti, 'passive', {
      get: function () {
        za = !0;
      },
    }),
      window.addEventListener('test', ti, ti),
      window.removeEventListener('test', ti, ti);
  } catch {
    za = !1;
  }
function fy(e, t, n, r, i, o, u, l, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Ei = !1,
  tu = null,
  nu = !1,
  ba = null,
  dy = {
    onError: function (e) {
      (Ei = !0), (tu = e);
    },
  };
function py(e, t, n, r, i, o, u, l, a) {
  (Ei = !1), (tu = null), fy.apply(dy, arguments);
}
function hy(e, t, n, r, i, o, u, l, a) {
  if ((py.apply(this, arguments), Ei)) {
    if (Ei) {
      var s = tu;
      (Ei = !1), (tu = null);
    } else throw Error(j(198));
    nu || ((nu = !0), (ba = s));
  }
}
function ar(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ff(e) {
  if (ar(e) !== e) throw Error(j(188));
}
function vy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ar(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ff(i), e;
        if (o === r) return ff(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var u = !1, l = i.child; l; ) {
        if (l === n) {
          (u = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (u = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!u) {
        for (l = o.child; l; ) {
          if (l === n) {
            (u = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (u = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!u) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function qp(e) {
  return (e = vy(e)), e !== null ? Bp(e) : null;
}
function Bp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vp = dt.unstable_scheduleCallback,
  df = dt.unstable_cancelCallback,
  my = dt.unstable_shouldYield,
  yy = dt.unstable_requestPaint,
  Ne = dt.unstable_now,
  gy = dt.unstable_getCurrentPriorityLevel,
  $s = dt.unstable_ImmediatePriority,
  Wp = dt.unstable_UserBlockingPriority,
  ru = dt.unstable_NormalPriority,
  Sy = dt.unstable_LowPriority,
  Hp = dt.unstable_IdlePriority,
  Fu = null,
  Ut = null;
function wy(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == 'function')
    try {
      Ut.onCommitFiberRoot(Fu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : Py,
  Ey = Math.log,
  xy = Math.LN2;
function Py(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ey(e) / xy) | 0)) | 0;
}
var Po = 64,
  ko = 4194304;
function mi(e) {
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
      return e;
  }
}
function iu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var l = u & ~i;
    l !== 0 ? (r = mi(l)) : ((o &= u), o !== 0 && (r = mi(o)));
  } else (u = n & ~i), u !== 0 ? (r = mi(u)) : o !== 0 && (r = mi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Dt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ky(e, t) {
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
      return -1;
  }
}
function Ry(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var u = 31 - Dt(o),
      l = 1 << u,
      a = i[u];
    a === -1
      ? (!(l & n) || l & r) && (i[u] = ky(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function $a(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kp() {
  var e = Po;
  return (Po <<= 1), !(Po & 4194240) && (Po = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function lo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n);
}
function Cy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Dt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Fs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ue = 0;
function Yp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gp,
  Us,
  Xp,
  Jp,
  Zp,
  Fa = !1,
  Ro = [],
  xn = null,
  Pn = null,
  kn = null,
  bi = new Map(),
  $i = new Map(),
  yn = [],
  Oy =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function pf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      xn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Pn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      kn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      bi.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      $i.delete(t.pointerId);
  }
}
function ni(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = so(t)), t !== null && Us(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ty(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (xn = ni(xn, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Pn = ni(Pn, e, t, n, r, i)), !0;
    case 'mouseover':
      return (kn = ni(kn, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return bi.set(o, ni(bi.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), $i.set(o, ni($i.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function eh(e) {
  var t = Hn(e.target);
  if (t !== null) {
    var n = ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qp(n)), t !== null)) {
          (e.blockedOn = t),
            Zp(e.priority, function () {
              Xp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ua(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Aa = r), n.target.dispatchEvent(r), (Aa = null);
    } else return (t = so(n)), t !== null && Us(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hf(e, t, n) {
  Qo(e) && n.delete(t);
}
function My() {
  (Fa = !1),
    xn !== null && Qo(xn) && (xn = null),
    Pn !== null && Qo(Pn) && (Pn = null),
    kn !== null && Qo(kn) && (kn = null),
    bi.forEach(hf),
    $i.forEach(hf);
}
function ri(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fa ||
      ((Fa = !0),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, My)));
}
function Fi(e) {
  function t(i) {
    return ri(i, e);
  }
  if (0 < Ro.length) {
    ri(Ro[0], e);
    for (var n = 1; n < Ro.length; n++) {
      var r = Ro[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xn !== null && ri(xn, e),
      Pn !== null && ri(Pn, e),
      kn !== null && ri(kn, e),
      bi.forEach(t),
      $i.forEach(t),
      n = 0;
    n < yn.length;
    n++
  )
    (r = yn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yn.length && ((n = yn[0]), n.blockedOn === null); )
    eh(n), n.blockedOn === null && yn.shift();
}
var Mr = rn.ReactCurrentBatchConfig,
  ou = !0;
function _y(e, t, n, r) {
  var i = ue,
    o = Mr.transition;
  Mr.transition = null;
  try {
    (ue = 1), Qs(e, t, n, r);
  } finally {
    (ue = i), (Mr.transition = o);
  }
}
function Ny(e, t, n, r) {
  var i = ue,
    o = Mr.transition;
  Mr.transition = null;
  try {
    (ue = 4), Qs(e, t, n, r);
  } finally {
    (ue = i), (Mr.transition = o);
  }
}
function Qs(e, t, n, r) {
  if (ou) {
    var i = Ua(e, t, n, r);
    if (i === null) Gl(e, t, r, uu, n), pf(e, r);
    else if (Ty(i, e, t, n, r)) r.stopPropagation();
    else if ((pf(e, r), t & 4 && -1 < Oy.indexOf(e))) {
      for (; i !== null; ) {
        var o = so(i);
        if (
          (o !== null && Gp(o),
          (o = Ua(e, t, n, r)),
          o === null && Gl(e, t, r, uu, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var uu = null;
function Ua(e, t, n, r) {
  if (((uu = null), (e = bs(r)), (e = Hn(e)), e !== null))
    if (((t = ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (uu = e), null;
}
function th(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (gy()) {
        case $s:
          return 1;
        case Wp:
          return 4;
        case ru:
        case Sy:
          return 16;
        case Hp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  qs = null,
  qo = null;
function nh() {
  if (qo) return qo;
  var e,
    t = qs,
    n = t.length,
    r,
    i = 'value' in wn ? wn.value : wn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === i[o - r]; r++);
  return (qo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Bo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Co() {
  return !0;
}
function vf() {
  return !1;
}
function vt(e) {
  function t(n, r, i, o, u) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Co
        : vf),
      (this.isPropagationStopped = vf),
      this
    );
  }
  return (
    ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Co));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Co));
      },
      persist: function () {},
      isPersistent: Co,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bs = vt(Br),
  ao = ke({}, Br, { view: 0, detail: 0 }),
  Dy = vt(ao),
  Ul,
  Ql,
  ii,
  Uu = ke({}, ao, {
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
    getModifierState: Vs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ii &&
            (ii && e.type === 'mousemove'
              ? ((Ul = e.screenX - ii.screenX), (Ql = e.screenY - ii.screenY))
              : (Ql = Ul = 0),
            (ii = e)),
          Ul);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ql;
    },
  }),
  mf = vt(Uu),
  Iy = ke({}, Uu, { dataTransfer: 0 }),
  Ly = vt(Iy),
  Ay = ke({}, ao, { relatedTarget: 0 }),
  ql = vt(Ay),
  jy = ke({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zy = vt(jy),
  by = ke({}, Br, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $y = vt(by),
  Fy = ke({}, Br, { data: 0 }),
  yf = vt(Fy),
  Uy = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Qy = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  qy = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function By(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qy[e]) ? !!t[e] : !1;
}
function Vs() {
  return By;
}
var Vy = ke({}, ao, {
    key: function (e) {
      if (e.key) {
        var t = Uy[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Bo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Qy[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vs,
    charCode: function (e) {
      return e.type === 'keypress' ? Bo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Bo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Wy = vt(Vy),
  Hy = ke({}, Uu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  gf = vt(Hy),
  Ky = ke({}, ao, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vs,
  }),
  Yy = vt(Ky),
  Gy = ke({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xy = vt(Gy),
  Jy = ke({}, Uu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zy = vt(Jy),
  eg = [9, 13, 27, 32],
  Ws = Zt && 'CompositionEvent' in window,
  xi = null;
Zt && 'documentMode' in document && (xi = document.documentMode);
var tg = Zt && 'TextEvent' in window && !xi,
  rh = Zt && (!Ws || (xi && 8 < xi && 11 >= xi)),
  Sf = String.fromCharCode(32),
  wf = !1;
function ih(e, t) {
  switch (e) {
    case 'keyup':
      return eg.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function oh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var vr = !1;
function ng(e, t) {
  switch (e) {
    case 'compositionend':
      return oh(t);
    case 'keypress':
      return t.which !== 32 ? null : ((wf = !0), Sf);
    case 'textInput':
      return (e = t.data), e === Sf && wf ? null : e;
    default:
      return null;
  }
}
function rg(e, t) {
  if (vr)
    return e === 'compositionend' || (!Ws && ih(e, t))
      ? ((e = nh()), (qo = qs = wn = null), (vr = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return rh && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var ig = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function Ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!ig[e.type] : t === 'textarea';
}
function uh(e, t, n, r) {
  zp(r),
    (t = lu(t, 'onChange')),
    0 < t.length &&
      ((n = new Bs('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pi = null,
  Ui = null;
function og(e) {
  yh(e, 0);
}
function Qu(e) {
  var t = gr(e);
  if (_p(t)) return e;
}
function ug(e, t) {
  if (e === 'change') return t;
}
var lh = !1;
if (Zt) {
  var Bl;
  if (Zt) {
    var Vl = 'oninput' in document;
    if (!Vl) {
      var xf = document.createElement('div');
      xf.setAttribute('oninput', 'return;'),
        (Vl = typeof xf.oninput == 'function');
    }
    Bl = Vl;
  } else Bl = !1;
  lh = Bl && (!document.documentMode || 9 < document.documentMode);
}
function Pf() {
  Pi && (Pi.detachEvent('onpropertychange', ah), (Ui = Pi = null));
}
function ah(e) {
  if (e.propertyName === 'value' && Qu(Ui)) {
    var t = [];
    uh(t, Ui, e, bs(e)), Up(og, t);
  }
}
function lg(e, t, n) {
  e === 'focusin'
    ? (Pf(), (Pi = t), (Ui = n), Pi.attachEvent('onpropertychange', ah))
    : e === 'focusout' && Pf();
}
function ag(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Qu(Ui);
}
function sg(e, t) {
  if (e === 'click') return Qu(t);
}
function cg(e, t) {
  if (e === 'input' || e === 'change') return Qu(t);
}
function fg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Lt = typeof Object.is == 'function' ? Object.is : fg;
function Qi(e, t) {
  if (Lt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Pa.call(t, i) || !Lt(e[i], t[i])) return !1;
  }
  return !0;
}
function kf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rf(e, t) {
  var n = kf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = kf(n);
  }
}
function sh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? sh(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ch() {
  for (var e = window, t = eu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = eu(e.document);
  }
  return t;
}
function Hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function dg(e) {
  var t = ch(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Rf(n, o));
        var u = Rf(n, r);
        i &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var pg = Zt && 'documentMode' in document && 11 >= document.documentMode,
  mr = null,
  Qa = null,
  ki = null,
  qa = !1;
function Cf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qa ||
    mr == null ||
    mr !== eu(r) ||
    ((r = mr),
    'selectionStart' in r && Hs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ki && Qi(ki, r)) ||
      ((ki = r),
      (r = lu(Qa, 'onSelect')),
      0 < r.length &&
        ((t = new Bs('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mr))));
}
function Oo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var yr = {
    animationend: Oo('Animation', 'AnimationEnd'),
    animationiteration: Oo('Animation', 'AnimationIteration'),
    animationstart: Oo('Animation', 'AnimationStart'),
    transitionend: Oo('Transition', 'TransitionEnd'),
  },
  Wl = {},
  fh = {};
Zt &&
  ((fh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete yr.animationend.animation,
    delete yr.animationiteration.animation,
    delete yr.animationstart.animation),
  'TransitionEvent' in window || delete yr.transitionend.transition);
function qu(e) {
  if (Wl[e]) return Wl[e];
  if (!yr[e]) return e;
  var t = yr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fh) return (Wl[e] = t[n]);
  return e;
}
var dh = qu('animationend'),
  ph = qu('animationiteration'),
  hh = qu('animationstart'),
  vh = qu('transitionend'),
  mh = new Map(),
  Of =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function bn(e, t) {
  mh.set(e, t), lr(t, [e]);
}
for (var Hl = 0; Hl < Of.length; Hl++) {
  var Kl = Of[Hl],
    hg = Kl.toLowerCase(),
    vg = Kl[0].toUpperCase() + Kl.slice(1);
  bn(hg, 'on' + vg);
}
bn(dh, 'onAnimationEnd');
bn(ph, 'onAnimationIteration');
bn(hh, 'onAnimationStart');
bn('dblclick', 'onDoubleClick');
bn('focusin', 'onFocus');
bn('focusout', 'onBlur');
bn(vh, 'onTransitionEnd');
Lr('onMouseEnter', ['mouseout', 'mouseover']);
Lr('onMouseLeave', ['mouseout', 'mouseover']);
Lr('onPointerEnter', ['pointerout', 'pointerover']);
Lr('onPointerLeave', ['pointerout', 'pointerover']);
lr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
lr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
lr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
lr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
lr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
lr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var yi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  mg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(yi));
function Tf(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), hy(r, t, void 0, e), (e.currentTarget = null);
}
function yh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var l = r[u],
            a = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Tf(i, l, s), (o = a);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((l = r[u]),
            (a = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Tf(i, l, s), (o = a);
        }
    }
  }
  if (nu) throw ((e = ba), (nu = !1), (ba = null), e);
}
function me(e, t) {
  var n = t[Ka];
  n === void 0 && (n = t[Ka] = new Set());
  var r = e + '__bubble';
  n.has(r) || (gh(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), gh(n, e, r, t);
}
var To = '_reactListening' + Math.random().toString(36).slice(2);
function qi(e) {
  if (!e[To]) {
    (e[To] = !0),
      Rp.forEach(function (n) {
        n !== 'selectionchange' && (mg.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[To] || ((t[To] = !0), Yl('selectionchange', !1, t));
  }
}
function gh(e, t, n, r) {
  switch (th(t)) {
    case 1:
      var i = _y;
      break;
    case 4:
      i = Ny;
      break;
    default:
      i = Qs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !za ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var a = u.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = u.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            u = u.return;
          }
        for (; l !== null; ) {
          if (((u = Hn(l)), u === null)) return;
          if (((a = u.tag), a === 5 || a === 6)) {
            r = o = u;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Up(function () {
    var s = o,
      f = bs(n),
      p = [];
    e: {
      var d = mh.get(e);
      if (d !== void 0) {
        var v = Bs,
          g = e;
        switch (e) {
          case 'keypress':
            if (Bo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = Wy;
            break;
          case 'focusin':
            (g = 'focus'), (v = ql);
            break;
          case 'focusout':
            (g = 'blur'), (v = ql);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = ql;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = mf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Ly;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = Yy;
            break;
          case dh:
          case ph:
          case hh:
            v = zy;
            break;
          case vh:
            v = Xy;
            break;
          case 'scroll':
            v = Dy;
            break;
          case 'wheel':
            v = Zy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = $y;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = gf;
        }
        var S = (t & 4) !== 0,
          P = !S && e === 'scroll',
          m = S ? (d !== null ? d + 'Capture' : null) : d;
        S = [];
        for (var h = s, y; h !== null; ) {
          y = h;
          var c = y.stateNode;
          if (
            (y.tag === 5 &&
              c !== null &&
              ((y = c),
              m !== null && ((c = zi(h, m)), c != null && S.push(Bi(h, c, y)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < S.length &&
          ((d = new v(d, g, null, n, f)), p.push({ event: d, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Aa &&
            (g = n.relatedTarget || n.fromElement) &&
            (Hn(g) || g[en]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = s),
              (g = g ? Hn(g) : null),
              g !== null &&
                ((P = ar(g)), g !== P || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = s)),
          v !== g)
        ) {
          if (
            ((S = mf),
            (c = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = gf),
              (c = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (h = 'pointer')),
            (P = v == null ? d : gr(v)),
            (y = g == null ? d : gr(g)),
            (d = new S(c, h + 'leave', v, n, f)),
            (d.target = P),
            (d.relatedTarget = y),
            (c = null),
            Hn(f) === s &&
              ((S = new S(m, h + 'enter', g, n, f)),
              (S.target = y),
              (S.relatedTarget = P),
              (c = S)),
            (P = c),
            v && g)
          )
            t: {
              for (S = v, m = g, h = 0, y = S; y; y = dr(y)) h++;
              for (y = 0, c = m; c; c = dr(c)) y++;
              for (; 0 < h - y; ) (S = dr(S)), h--;
              for (; 0 < y - h; ) (m = dr(m)), y--;
              for (; h--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = dr(S)), (m = dr(m));
              }
              S = null;
            }
          else S = null;
          v !== null && Mf(p, d, v, S, !1),
            g !== null && P !== null && Mf(p, P, g, S, !0);
        }
      }
      e: {
        if (
          ((d = s ? gr(s) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var w = ug;
        else if (Ef(d))
          if (lh) w = cg;
          else {
            w = ag;
            var E = lg;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (w = sg);
        if (w && (w = w(e, s))) {
          uh(p, w, n, f);
          break e;
        }
        E && E(e, d, s),
          e === 'focusout' &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === 'number' &&
            _a(d, 'number', d.value);
      }
      switch (((E = s ? gr(s) : window), e)) {
        case 'focusin':
          (Ef(E) || E.contentEditable === 'true') &&
            ((mr = E), (Qa = s), (ki = null));
          break;
        case 'focusout':
          ki = Qa = mr = null;
          break;
        case 'mousedown':
          qa = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (qa = !1), Cf(p, n, f);
          break;
        case 'selectionchange':
          if (pg) break;
        case 'keydown':
        case 'keyup':
          Cf(p, n, f);
      }
      var x;
      if (Ws)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart';
              break e;
            case 'compositionend':
              k = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              k = 'onCompositionUpdate';
              break e;
          }
          k = void 0;
        }
      else
        vr
          ? ih(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart');
      k &&
        (rh &&
          n.locale !== 'ko' &&
          (vr || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && vr && (x = nh())
            : ((wn = f),
              (qs = 'value' in wn ? wn.value : wn.textContent),
              (vr = !0))),
        (E = lu(s, k)),
        0 < E.length &&
          ((k = new yf(k, e, null, n, f)),
          p.push({ event: k, listeners: E }),
          x ? (k.data = x) : ((x = oh(n)), x !== null && (k.data = x)))),
        (x = tg ? ng(e, n) : rg(e, n)) &&
          ((s = lu(s, 'onBeforeInput')),
          0 < s.length &&
            ((f = new yf('onBeforeInput', 'beforeinput', null, n, f)),
            p.push({ event: f, listeners: s }),
            (f.data = x)));
    }
    yh(p, t);
  });
}
function Bi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function lu(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = zi(e, n)),
      o != null && r.unshift(Bi(e, o, i)),
      (o = zi(e, t)),
      o != null && r.push(Bi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function dr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mf(e, t, n, r, i) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      s = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((a = zi(n, o)), a != null && u.unshift(Bi(n, a, l)))
        : i || ((a = zi(n, o)), a != null && u.push(Bi(n, a, l)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var yg = /\r\n?/g,
  gg = /\u0000|\uFFFD/g;
function _f(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      yg,
      `
`
    )
    .replace(gg, '');
}
function Mo(e, t, n) {
  if (((t = _f(t)), _f(e) !== t && n)) throw Error(j(425));
}
function au() {}
var Ba = null,
  Va = null;
function Wa(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ha = typeof setTimeout == 'function' ? setTimeout : void 0,
  Sg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Nf = typeof Promise == 'function' ? Promise : void 0,
  wg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Nf < 'u'
      ? function (e) {
          return Nf.resolve(null).then(e).catch(Eg);
        }
      : Ha;
function Eg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Fi(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Fi(t);
}
function Rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Df(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Vr = Math.random().toString(36).slice(2),
  $t = '__reactFiber$' + Vr,
  Vi = '__reactProps$' + Vr,
  en = '__reactContainer$' + Vr,
  Ka = '__reactEvents$' + Vr,
  xg = '__reactListeners$' + Vr,
  Pg = '__reactHandles$' + Vr;
function Hn(e) {
  var t = e[$t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[en] || n[$t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Df(e); e !== null; ) {
          if ((n = e[$t])) return n;
          e = Df(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function so(e) {
  return (
    (e = e[$t] || e[en]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Bu(e) {
  return e[Vi] || null;
}
var Ya = [],
  Sr = -1;
function $n(e) {
  return { current: e };
}
function ge(e) {
  0 > Sr || ((e.current = Ya[Sr]), (Ya[Sr] = null), Sr--);
}
function ve(e, t) {
  Sr++, (Ya[Sr] = e.current), (e.current = t);
}
var In = {},
  Ye = $n(In),
  rt = $n(!1),
  er = In;
function Ar(e, t) {
  var n = e.type.contextTypes;
  if (!n) return In;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function it(e) {
  return (e = e.childContextTypes), e != null;
}
function su() {
  ge(rt), ge(Ye);
}
function If(e, t, n) {
  if (Ye.current !== In) throw Error(j(168));
  ve(Ye, t), ve(rt, n);
}
function Sh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, ly(e) || 'Unknown', i));
  return ke({}, n, r);
}
function cu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
    (er = Ye.current),
    ve(Ye, e),
    ve(rt, rt.current),
    !0
  );
}
function Lf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Sh(e, t, er)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(rt),
      ge(Ye),
      ve(Ye, e))
    : ge(rt),
    ve(rt, n);
}
var Kt = null,
  Vu = !1,
  Jl = !1;
function wh(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function kg(e) {
  (Vu = !0), wh(e);
}
function Fn() {
  if (!Jl && Kt !== null) {
    Jl = !0;
    var e = 0,
      t = ue;
    try {
      var n = Kt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Kt = null), (Vu = !1);
    } catch (i) {
      throw (Kt !== null && (Kt = Kt.slice(e + 1)), Vp($s, Fn), i);
    } finally {
      (ue = t), (Jl = !1);
    }
  }
  return null;
}
var wr = [],
  Er = 0,
  fu = null,
  du = 0,
  St = [],
  wt = 0,
  tr = null,
  Yt = 1,
  Gt = '';
function Bn(e, t) {
  (wr[Er++] = du), (wr[Er++] = fu), (fu = e), (du = t);
}
function Eh(e, t, n) {
  (St[wt++] = Yt), (St[wt++] = Gt), (St[wt++] = tr), (tr = e);
  var r = Yt;
  e = Gt;
  var i = 32 - Dt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Dt(t) + i;
  if (30 < o) {
    var u = i - (i % 5);
    (o = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (i -= u),
      (Yt = (1 << (32 - Dt(t) + i)) | (n << i) | r),
      (Gt = o + e);
  } else (Yt = (1 << o) | (n << i) | r), (Gt = e);
}
function Ks(e) {
  e.return !== null && (Bn(e, 1), Eh(e, 1, 0));
}
function Ys(e) {
  for (; e === fu; )
    (fu = wr[--Er]), (wr[Er] = null), (du = wr[--Er]), (wr[Er] = null);
  for (; e === tr; )
    (tr = St[--wt]),
      (St[wt] = null),
      (Gt = St[--wt]),
      (St[wt] = null),
      (Yt = St[--wt]),
      (St[wt] = null);
}
var ft = null,
  ct = null,
  we = !1,
  Nt = null;
function xh(e, t) {
  var n = Et(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Af(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (ct = Rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tr !== null ? { id: Yt, overflow: Gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ga(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xa(e) {
  if (we) {
    var t = ct;
    if (t) {
      var n = t;
      if (!Af(e, t)) {
        if (Ga(e)) throw Error(j(418));
        t = Rn(n.nextSibling);
        var r = ft;
        t && Af(e, t)
          ? xh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (ft = e));
      }
    } else {
      if (Ga(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (ft = e);
    }
  }
}
function jf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function _o(e) {
  if (e !== ft) return !1;
  if (!we) return jf(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Wa(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Ga(e)) throw (Ph(), Error(j(418)));
    for (; t; ) xh(e, t), (t = Rn(t.nextSibling));
  }
  if ((jf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ct = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ft ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ph() {
  for (var e = ct; e; ) e = Rn(e.nextSibling);
}
function jr() {
  (ct = ft = null), (we = !1);
}
function Gs(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var Rg = rn.ReactCurrentBatchConfig;
function Tt(e, t) {
  if (e && e.defaultProps) {
    (t = ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var pu = $n(null),
  hu = null,
  xr = null,
  Xs = null;
function Js() {
  Xs = xr = hu = null;
}
function Zs(e) {
  var t = pu.current;
  ge(pu), (e._currentValue = t);
}
function Ja(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function _r(e, t) {
  (hu = e),
    (Xs = xr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nt = !0), (e.firstContext = null));
}
function Pt(e) {
  var t = e._currentValue;
  if (Xs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xr === null)) {
      if (hu === null) throw Error(j(308));
      (xr = e), (hu.dependencies = { lanes: 0, firstContext: e });
    } else xr = xr.next = e;
  return t;
}
var Kn = null;
function ec(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
function kh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ec(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    tn(e, r)
  );
}
function tn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vn = !1;
function tc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), oe & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      tn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ec(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    tn(e, n)
  );
}
function Vo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
  }
}
function zf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = u) : (o = o.next = u), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vu(e, t, n, r) {
  var i = e.updateQueue;
  vn = !1;
  var o = i.firstBaseUpdate,
    u = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      s = a.next;
    (a.next = null), u === null ? (o = s) : (u.next = s), (u = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== u &&
        (l === null ? (f.firstBaseUpdate = s) : (l.next = s),
        (f.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = i.baseState;
    (u = 0), (f = s = a = null), (l = o);
    do {
      var d = l.lane,
        v = l.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            S = l;
          switch (((d = t), (v = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == 'function')) {
                p = g.call(v, p, d);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (d = typeof g == 'function' ? g.call(v, p, d) : g),
                d == null)
              )
                break e;
              p = ke({}, p, d);
              break e;
            case 2:
              vn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((s = f = v), (a = p)) : (f = f.next = v),
          (u |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (u |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (rr |= u), (e.lanes = u), (e.memoizedState = p);
  }
}
function bf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var Ch = new kp.Component().refs;
function Za(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      i = Tn(e),
      o = Xt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Cn(e, o, i)),
      t !== null && (It(t, e, i, r), Vo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      i = Tn(e),
      o = Xt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Cn(e, o, i)),
      t !== null && (It(t, e, i, r), Vo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Xe(),
      r = Tn(e),
      i = Xt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Cn(e, i, r)),
      t !== null && (It(t, e, r, n), Vo(t, e, r));
  },
};
function $f(e, t, n, r, i, o, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qi(n, r) || !Qi(i, o)
      : !0
  );
}
function Oh(e, t, n) {
  var r = !1,
    i = In,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Pt(o))
      : ((i = it(t) ? er : Ye.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ar(e, i) : In)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ff(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wu.enqueueReplaceState(t, t.state, null);
}
function es(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Ch), tc(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Pt(o))
    : ((o = it(t) ? er : Ye.current), (i.context = Ar(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Za(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Wu.enqueueReplaceState(i, i.state, null),
      vu(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function oi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (u) {
            var l = i.refs;
            l === Ch && (l = i.refs = {}),
              u === null ? delete l[o] : (l[o] = u);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function No(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Uf(e) {
  var t = e._init;
  return t(e._payload);
}
function Th(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = Mn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function u(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, h, y, c) {
    return h === null || h.tag !== 6
      ? ((h = oa(y, m.mode, c)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function a(m, h, y, c) {
    var w = y.type;
    return w === hr
      ? f(m, h, y.props.children, c, y.key)
      : h !== null &&
        (h.elementType === w ||
          (typeof w == 'object' &&
            w !== null &&
            w.$$typeof === hn &&
            Uf(w) === h.type))
      ? ((c = i(h, y.props)), (c.ref = oi(m, h, y)), (c.return = m), c)
      : ((c = Xo(y.type, y.key, y.props, null, m.mode, c)),
        (c.ref = oi(m, h, y)),
        (c.return = m),
        c);
  }
  function s(m, h, y, c) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = ua(y, m.mode, c)), (h.return = m), h)
      : ((h = i(h, y.children || [])), (h.return = m), h);
  }
  function f(m, h, y, c, w) {
    return h === null || h.tag !== 7
      ? ((h = Zn(y, m.mode, c, w)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function p(m, h, y) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = oa('' + h, m.mode, y)), (h.return = m), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case wo:
          return (
            (y = Xo(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = oi(m, null, h)),
            (y.return = m),
            y
          );
        case pr:
          return (h = ua(h, m.mode, y)), (h.return = m), h;
        case hn:
          var c = h._init;
          return p(m, c(h._payload), y);
      }
      if (vi(h) || ei(h))
        return (h = Zn(h, m.mode, y, null)), (h.return = m), h;
      No(m, h);
    }
    return null;
  }
  function d(m, h, y, c) {
    var w = h !== null ? h.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return w !== null ? null : l(m, h, '' + y, c);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case wo:
          return y.key === w ? a(m, h, y, c) : null;
        case pr:
          return y.key === w ? s(m, h, y, c) : null;
        case hn:
          return (w = y._init), d(m, h, w(y._payload), c);
      }
      if (vi(y) || ei(y)) return w !== null ? null : f(m, h, y, c, null);
      No(m, y);
    }
    return null;
  }
  function v(m, h, y, c, w) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (m = m.get(y) || null), l(h, m, '' + c, w);
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case wo:
          return (m = m.get(c.key === null ? y : c.key) || null), a(h, m, c, w);
        case pr:
          return (m = m.get(c.key === null ? y : c.key) || null), s(h, m, c, w);
        case hn:
          var E = c._init;
          return v(m, h, y, E(c._payload), w);
      }
      if (vi(c) || ei(c)) return (m = m.get(y) || null), f(h, m, c, w, null);
      No(h, c);
    }
    return null;
  }
  function g(m, h, y, c) {
    for (
      var w = null, E = null, x = h, k = (h = 0), O = null;
      x !== null && k < y.length;
      k++
    ) {
      x.index > k ? ((O = x), (x = null)) : (O = x.sibling);
      var R = d(m, x, y[k], c);
      if (R === null) {
        x === null && (x = O);
        break;
      }
      e && x && R.alternate === null && t(m, x),
        (h = o(R, h, k)),
        E === null ? (w = R) : (E.sibling = R),
        (E = R),
        (x = O);
    }
    if (k === y.length) return n(m, x), we && Bn(m, k), w;
    if (x === null) {
      for (; k < y.length; k++)
        (x = p(m, y[k], c)),
          x !== null &&
            ((h = o(x, h, k)), E === null ? (w = x) : (E.sibling = x), (E = x));
      return we && Bn(m, k), w;
    }
    for (x = r(m, x); k < y.length; k++)
      (O = v(x, m, k, y[k], c)),
        O !== null &&
          (e && O.alternate !== null && x.delete(O.key === null ? k : O.key),
          (h = o(O, h, k)),
          E === null ? (w = O) : (E.sibling = O),
          (E = O));
    return (
      e &&
        x.forEach(function (T) {
          return t(m, T);
        }),
      we && Bn(m, k),
      w
    );
  }
  function S(m, h, y, c) {
    var w = ei(y);
    if (typeof w != 'function') throw Error(j(150));
    if (((y = w.call(y)), y == null)) throw Error(j(151));
    for (
      var E = (w = null), x = h, k = (h = 0), O = null, R = y.next();
      x !== null && !R.done;
      k++, R = y.next()
    ) {
      x.index > k ? ((O = x), (x = null)) : (O = x.sibling);
      var T = d(m, x, R.value, c);
      if (T === null) {
        x === null && (x = O);
        break;
      }
      e && x && T.alternate === null && t(m, x),
        (h = o(T, h, k)),
        E === null ? (w = T) : (E.sibling = T),
        (E = T),
        (x = O);
    }
    if (R.done) return n(m, x), we && Bn(m, k), w;
    if (x === null) {
      for (; !R.done; k++, R = y.next())
        (R = p(m, R.value, c)),
          R !== null &&
            ((h = o(R, h, k)), E === null ? (w = R) : (E.sibling = R), (E = R));
      return we && Bn(m, k), w;
    }
    for (x = r(m, x); !R.done; k++, R = y.next())
      (R = v(x, m, k, R.value, c)),
        R !== null &&
          (e && R.alternate !== null && x.delete(R.key === null ? k : R.key),
          (h = o(R, h, k)),
          E === null ? (w = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        x.forEach(function (D) {
          return t(m, D);
        }),
      we && Bn(m, k),
      w
    );
  }
  function P(m, h, y, c) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === hr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case wo:
          e: {
            for (var w = y.key, E = h; E !== null; ) {
              if (E.key === w) {
                if (((w = y.type), w === hr)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (h = i(E, y.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  E.elementType === w ||
                  (typeof w == 'object' &&
                    w !== null &&
                    w.$$typeof === hn &&
                    Uf(w) === E.type)
                ) {
                  n(m, E.sibling),
                    (h = i(E, y.props)),
                    (h.ref = oi(m, E, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            y.type === hr
              ? ((h = Zn(y.props.children, m.mode, c, y.key)),
                (h.return = m),
                (m = h))
              : ((c = Xo(y.type, y.key, y.props, null, m.mode, c)),
                (c.ref = oi(m, h, y)),
                (c.return = m),
                (m = c));
          }
          return u(m);
        case pr:
          e: {
            for (E = y.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, y.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = ua(y, m.mode, c)), (h.return = m), (m = h);
          }
          return u(m);
        case hn:
          return (E = y._init), P(m, h, E(y._payload), c);
      }
      if (vi(y)) return g(m, h, y, c);
      if (ei(y)) return S(m, h, y, c);
      No(m, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = oa(y, m.mode, c)), (h.return = m), (m = h)),
        u(m))
      : n(m, h);
  }
  return P;
}
var zr = Th(!0),
  Mh = Th(!1),
  co = {},
  Qt = $n(co),
  Wi = $n(co),
  Hi = $n(co);
function Yn(e) {
  if (e === co) throw Error(j(174));
  return e;
}
function nc(e, t) {
  switch ((ve(Hi, t), ve(Wi, e), ve(Qt, co), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Da(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Da(t, e));
  }
  ge(Qt), ve(Qt, t);
}
function br() {
  ge(Qt), ge(Wi), ge(Hi);
}
function _h(e) {
  Yn(Hi.current);
  var t = Yn(Qt.current),
    n = Da(t, e.type);
  t !== n && (ve(Wi, e), ve(Qt, n));
}
function rc(e) {
  Wi.current === e && (ge(Qt), ge(Wi));
}
var xe = $n(0);
function mu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Zl = [];
function ic() {
  for (var e = 0; e < Zl.length; e++)
    Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var Wo = rn.ReactCurrentDispatcher,
  ea = rn.ReactCurrentBatchConfig,
  nr = 0,
  Pe = null,
  Le = null,
  ze = null,
  yu = !1,
  Ri = !1,
  Ki = 0,
  Cg = 0;
function Ve() {
  throw Error(j(321));
}
function oc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Lt(e[n], t[n])) return !1;
  return !0;
}
function uc(e, t, n, r, i, o) {
  if (
    ((nr = o),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wo.current = e === null || e.memoizedState === null ? _g : Ng),
    (e = n(r, i)),
    Ri)
  ) {
    o = 0;
    do {
      if (((Ri = !1), (Ki = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (ze = Le = null),
        (t.updateQueue = null),
        (Wo.current = Dg),
        (e = n(r, i));
    } while (Ri);
  }
  if (
    ((Wo.current = gu),
    (t = Le !== null && Le.next !== null),
    (nr = 0),
    (ze = Le = Pe = null),
    (yu = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function lc() {
  var e = Ki !== 0;
  return (Ki = 0), e;
}
function bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (Pe.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function kt() {
  if (Le === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = ze === null ? Pe.memoizedState : ze.next;
  if (t !== null) (ze = t), (Le = e);
  else {
    if (e === null) throw Error(j(310));
    (Le = e),
      (e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null,
      }),
      ze === null ? (Pe.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function Yi(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ta(e) {
  var t = kt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Le,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var u = i.next;
      (i.next = o.next), (o.next = u);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (u = null),
      a = null,
      s = o;
    do {
      var f = s.lane;
      if ((nr & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (u = r)) : (a = a.next = p),
          (Pe.lanes |= f),
          (rr |= f);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (u = r) : (a.next = l),
      Lt(r, t.memoizedState) || (nt = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Pe.lanes |= o), (rr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function na(e) {
  var t = kt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var u = (i = i.next);
    do (o = e(o, u.action)), (u = u.next);
    while (u !== i);
    Lt(o, t.memoizedState) || (nt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Nh() {}
function Dh(e, t) {
  var n = Pe,
    r = kt(),
    i = t(),
    o = !Lt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (nt = !0)),
    (r = r.queue),
    ac(Ah.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gi(9, Lh.bind(null, n, r, i, t), void 0, null),
      be === null)
    )
      throw Error(j(349));
    nr & 30 || Ih(n, t, i);
  }
  return i;
}
function Ih(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), jh(t) && zh(e);
}
function Ah(e, t, n) {
  return n(function () {
    jh(t) && zh(e);
  });
}
function jh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Lt(e, n);
  } catch {
    return !0;
  }
}
function zh(e) {
  var t = tn(e, 1);
  t !== null && It(t, e, 1, -1);
}
function Qf(e) {
  var t = bt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Mg.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function Gi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bh() {
  return kt().memoizedState;
}
function Ho(e, t, n, r) {
  var i = bt();
  (Pe.flags |= e),
    (i.memoizedState = Gi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hu(e, t, n, r) {
  var i = kt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Le !== null) {
    var u = Le.memoizedState;
    if (((o = u.destroy), r !== null && oc(r, u.deps))) {
      i.memoizedState = Gi(t, n, o, r);
      return;
    }
  }
  (Pe.flags |= e), (i.memoizedState = Gi(1 | t, n, o, r));
}
function qf(e, t) {
  return Ho(8390656, 8, e, t);
}
function ac(e, t) {
  return Hu(2048, 8, e, t);
}
function $h(e, t) {
  return Hu(4, 2, e, t);
}
function Fh(e, t) {
  return Hu(4, 4, e, t);
}
function Uh(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hu(4, 4, Uh.bind(null, t, e), n)
  );
}
function sc() {}
function qh(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Bh(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vh(e, t, n) {
  return nr & 21
    ? (Lt(n, t) || ((n = Kp()), (Pe.lanes |= n), (rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = n));
}
function Og(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ea.transition;
  ea.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (ea.transition = r);
  }
}
function Wh() {
  return kt().memoizedState;
}
function Tg(e, t, n) {
  var r = Tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hh(e))
  )
    Kh(t, n);
  else if (((n = kh(e, t, n, r)), n !== null)) {
    var i = Xe();
    It(n, e, r, i), Yh(n, t, r);
  }
}
function Mg(e, t, n) {
  var r = Tn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hh(e)) Kh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var u = t.lastRenderedState,
          l = o(u, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Lt(l, u))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ec(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = kh(e, t, i, r)),
      n !== null && ((i = Xe()), It(n, e, r, i), Yh(n, t, r));
  }
}
function Hh(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function Kh(e, t) {
  Ri = yu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
  }
}
var gu = {
    readContext: Pt,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1,
  },
  _g = {
    readContext: Pt,
    useCallback: function (e, t) {
      return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pt,
    useEffect: qf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ho(4194308, 4, Uh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Tg.bind(null, Pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qf,
    useDebugValue: sc,
    useDeferredValue: function (e) {
      return (bt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qf(!1),
        t = e[0];
      return (e = Og.bind(null, e[1])), (bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Pe,
        i = bt();
      if (we) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(j(349));
        nr & 30 || Ih(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        qf(Ah.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gi(9, Lh.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bt(),
        t = be.identifierPrefix;
      if (we) {
        var n = Gt,
          r = Yt;
        (n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ki++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Cg++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ng = {
    readContext: Pt,
    useCallback: qh,
    useContext: Pt,
    useEffect: ac,
    useImperativeHandle: Qh,
    useInsertionEffect: $h,
    useLayoutEffect: Fh,
    useMemo: Bh,
    useReducer: ta,
    useRef: bh,
    useState: function () {
      return ta(Yi);
    },
    useDebugValue: sc,
    useDeferredValue: function (e) {
      var t = kt();
      return Vh(t, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = ta(Yi)[0],
        t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nh,
    useSyncExternalStore: Dh,
    useId: Wh,
    unstable_isNewReconciler: !1,
  },
  Dg = {
    readContext: Pt,
    useCallback: qh,
    useContext: Pt,
    useEffect: ac,
    useImperativeHandle: Qh,
    useInsertionEffect: $h,
    useLayoutEffect: Fh,
    useMemo: Bh,
    useReducer: na,
    useRef: bh,
    useState: function () {
      return na(Yi);
    },
    useDebugValue: sc,
    useDeferredValue: function (e) {
      var t = kt();
      return Le === null ? (t.memoizedState = e) : Vh(t, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = na(Yi)[0],
        t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nh,
    useSyncExternalStore: Dh,
    useId: Wh,
    unstable_isNewReconciler: !1,
  };
function $r(e, t) {
  try {
    var n = '',
      r = t;
    do (n += uy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ra(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ts(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ig = typeof WeakMap == 'function' ? WeakMap : Map;
function Gh(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wu || ((wu = !0), (fs = r)), ts(e, t);
    }),
    n
  );
}
function Xh(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ts(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        ts(e, t),
          typeof r != 'function' &&
            (On === null ? (On = new Set([this])) : On.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : '',
        });
      }),
    n
  );
}
function Bf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ig();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Hg.bind(null, e, t, n)), t.then(e, e));
}
function Vf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xt(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Lg = rn.ReactCurrentOwner,
  nt = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? Mh(t, null, n, r) : zr(t, e.child, n, r);
}
function Hf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    _r(t, i),
    (r = uc(e, t, n, r, o, i)),
    (n = lc()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nn(e, t, i))
      : (we && n && Ks(t), (t.flags |= 1), Ge(e, t, r, i), t.child)
  );
}
function Kf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !yc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jh(e, t, o, r, i))
      : ((e = Xo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var u = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qi), n(u, r) && e.ref === t.ref)
    )
      return nn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Mn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qi(o, r) && e.ref === t.ref)
      if (((nt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (nt = !0);
      else return (t.lanes = e.lanes), nn(e, t, i);
  }
  return ns(e, t, n, r, i);
}
function Zh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(kr, st),
        (st |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(kr, st),
          (st |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ve(kr, st),
        (st |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(kr, st),
      (st |= r);
  return Ge(e, t, i, n), t.child;
}
function ev(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ns(e, t, n, r, i) {
  var o = it(n) ? er : Ye.current;
  return (
    (o = Ar(t, o)),
    _r(t, i),
    (n = uc(e, t, n, r, o, i)),
    (r = lc()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nn(e, t, i))
      : (we && r && Ks(t), (t.flags |= 1), Ge(e, t, n, i), t.child)
  );
}
function Yf(e, t, n, r, i) {
  if (it(n)) {
    var o = !0;
    cu(t);
  } else o = !1;
  if ((_r(t, i), t.stateNode === null))
    Ko(e, t), Oh(t, n, r), es(t, n, r, i), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      l = t.memoizedProps;
    u.props = l;
    var a = u.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = Pt(s))
      : ((s = it(n) ? er : Ye.current), (s = Ar(t, s)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== s) && Ff(t, u, r, s)),
      (vn = !1);
    var d = t.memoizedState;
    (u.state = d),
      vu(t, r, u, i),
      (a = t.memoizedState),
      l !== r || d !== a || rt.current || vn
        ? (typeof f == 'function' && (Za(t, n, f, r), (a = t.memoizedState)),
          (l = vn || $f(t, n, l, r, d, a, s))
            ? (p ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (u.props = r),
          (u.state = a),
          (u.context = s),
          (r = l))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      Rh(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : Tt(t.type, l)),
      (u.props = s),
      (p = t.pendingProps),
      (d = u.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Pt(a))
        : ((a = it(n) ? er : Ye.current), (a = Ar(t, a)));
    var v = n.getDerivedStateFromProps;
    (f =
      typeof v == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function') ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((l !== p || d !== a) && Ff(t, u, r, a)),
      (vn = !1),
      (d = t.memoizedState),
      (u.state = d),
      vu(t, r, u, i);
    var g = t.memoizedState;
    l !== p || d !== g || rt.current || vn
      ? (typeof v == 'function' && (Za(t, n, v, r), (g = t.memoizedState)),
        (s = vn || $f(t, n, s, r, d, g, a) || !1)
          ? (f ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(r, g, a),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(r, g, a)),
            typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (u.props = r),
        (u.state = g),
        (u.context = a),
        (r = s))
      : (typeof u.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return rs(e, t, n, r, o, i);
}
function rs(e, t, n, r, i, o) {
  ev(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return i && Lf(t, n, !1), nn(e, t, o);
  (r = t.stateNode), (Lg.current = t);
  var l =
    u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = zr(t, e.child, null, o)), (t.child = zr(t, null, l, o)))
      : Ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && Lf(t, n, !0),
    t.child
  );
}
function tv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? If(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && If(e, t.context, !1),
    nc(e, t.containerInfo);
}
function Gf(e, t, n, r, i) {
  return jr(), Gs(i), (t.flags |= 256), Ge(e, t, n, r), t.child;
}
var is = { dehydrated: null, treeContext: null, retryLane: 0 };
function os(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nv(e, t, n) {
  var r = t.pendingProps,
    i = xe.current,
    o = !1,
    u = (t.flags & 128) !== 0,
    l;
  if (
    ((l = u) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ve(xe, i & 1),
    e === null)
  )
    return (
      Xa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (u = { mode: 'hidden', children: u }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = u))
                : (o = Gu(u, r, 0, null)),
              (e = Zn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = os(n)),
              (t.memoizedState = is),
              e)
            : cc(t, u))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Ag(e, t, u, r, l, i, n);
  if (o) {
    (o = r.fallback), (u = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(u & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Mn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Mn(l, o)) : ((o = Zn(o, u, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? os(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (o.memoizedState = u),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = is),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Mn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function cc(e, t) {
  return (
    (t = Gu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Do(e, t, n, r) {
  return (
    r !== null && Gs(r),
    zr(t, e.child, null, n),
    (e = cc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ag(e, t, n, r, i, o, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ra(Error(j(422)))), Do(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Gu({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Zn(o, i, u, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zr(t, e.child, null, u),
        (t.child.memoizedState = os(u)),
        (t.memoizedState = is),
        o);
  if (!(t.mode & 1)) return Do(e, t, u, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(j(419))), (r = ra(o, r, void 0)), Do(e, t, u, r);
  }
  if (((l = (u & e.childLanes) !== 0), nt || l)) {
    if (((r = be), r !== null)) {
      switch (u & -u) {
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
          i = 0;
      }
      (i = i & (r.suspendedLanes | u) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), tn(e, i), It(r, e, i, -1));
    }
    return mc(), (r = ra(Error(j(421)))), Do(e, t, u, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ct = Rn(i.nextSibling)),
      (ft = t),
      (we = !0),
      (Nt = null),
      e !== null &&
        ((St[wt++] = Yt),
        (St[wt++] = Gt),
        (St[wt++] = tr),
        (Yt = e.id),
        (Gt = e.overflow),
        (tr = t)),
      (t = cc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ja(e.return, t, n);
}
function ia(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function rv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ge(e, t, r.children, n), (r = xe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xf(e, n, t);
        else if (e.tag === 19) Xf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ve(xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && mu(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ia(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && mu(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ia(t, !0, n, null, o);
        break;
      case 'together':
        ia(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ko(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jg(e, t, n) {
  switch (t.tag) {
    case 3:
      tv(t), jr();
      break;
    case 5:
      _h(t);
      break;
    case 1:
      it(t.type) && cu(t);
      break;
    case 4:
      nc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ve(pu, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(xe, xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? nv(e, t, n)
          : (ve(xe, xe.current & 1),
            (e = nn(e, t, n)),
            e !== null ? e.sibling : null);
      ve(xe, xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ve(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zh(e, t, n);
  }
  return nn(e, t, n);
}
var iv, us, ov, uv;
iv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
us = function () {};
ov = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Yn(Qt.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = Ta(e, i)), (r = Ta(e, r)), (o = []);
        break;
      case 'select':
        (i = ke({}, i, { value: void 0 })),
          (r = ke({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = Na(e, i)), (r = Na(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = au);
    }
    Ia(n, r);
    var u;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === 'style') {
          var l = i[s];
          for (u in l) l.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Ai.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((l = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && a !== l && (a != null || l != null))
      )
        if (s === 'style')
          if (l) {
            for (u in l)
              !l.hasOwnProperty(u) ||
                (a && a.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ''));
            for (u in a)
              a.hasOwnProperty(u) &&
                l[u] !== a[u] &&
                (n || (n = {}), (n[u] = a[u]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(s, a))
            : s === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(s, '' + a)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (Ai.hasOwnProperty(s)
                ? (a != null && s === 'onScroll' && me('scroll', e),
                  o || l === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
uv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ui(e, t) {
  if (!we)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zg(e, t, n) {
  var r = t.pendingProps;
  switch ((Ys(t), t.tag)) {
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
      return We(t), null;
    case 1:
      return it(t.type) && su(), We(t), null;
    case 3:
      return (
        (r = t.stateNode),
        br(),
        ge(rt),
        ge(Ye),
        ic(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_o(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (hs(Nt), (Nt = null)))),
        us(e, t),
        We(t),
        null
      );
    case 5:
      rc(t);
      var i = Yn(Hi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ov(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return We(t), null;
        }
        if (((e = Yn(Qt.current)), _o(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[$t] = t), (r[Vi] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              me('cancel', r), me('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              me('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < yi.length; i++) me(yi[i], r);
              break;
            case 'source':
              me('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              me('error', r), me('load', r);
              break;
            case 'details':
              me('toggle', r);
              break;
            case 'input':
              uf(r, o), me('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                me('invalid', r);
              break;
            case 'textarea':
              af(r, o), me('invalid', r);
          }
          Ia(n, o), (i = null);
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var l = o[u];
              u === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mo(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mo(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Ai.hasOwnProperty(u) &&
                  l != null &&
                  u === 'onScroll' &&
                  me('scroll', r);
            }
          switch (n) {
            case 'input':
              Eo(r), lf(r, o, !0);
              break;
            case 'textarea':
              Eo(r), sf(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = au);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ip(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = u.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === 'select' &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[$t] = t),
            (e[Vi] = r),
            iv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = La(n, r)), n)) {
              case 'dialog':
                me('cancel', e), me('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                me('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < yi.length; i++) me(yi[i], e);
                i = r;
                break;
              case 'source':
                me('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                me('error', e), me('load', e), (i = r);
                break;
              case 'details':
                me('toggle', e), (i = r);
                break;
              case 'input':
                uf(e, r), (i = Ta(e, r)), me('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ke({}, r, { value: void 0 })),
                  me('invalid', e);
                break;
              case 'textarea':
                af(e, r), (i = Na(e, r)), me('invalid', e);
                break;
              default:
                i = r;
            }
            Ia(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === 'style'
                  ? jp(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && Lp(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && ji(e, a)
                    : typeof a == 'number' && ji(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Ai.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && me('scroll', e)
                      : a != null && Ls(e, o, a, u));
              }
            switch (n) {
              case 'input':
                Eo(e), lf(e, r, !1);
                break;
              case 'textarea':
                Eo(e), sf(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Dn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Cr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Cr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = au);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) uv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(j(166));
        if (((n = Yn(Hi.current)), Yn(Qt.current), _o(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$t] = t),
            (o = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$t] = t),
            (t.stateNode = r);
      }
      return We(t), null;
    case 13:
      if (
        (ge(xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && ct !== null && t.mode & 1 && !(t.flags & 128))
          Ph(), jr(), (t.flags |= 98560), (o = !1);
        else if (((o = _o(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[$t] = t;
          } else
            jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          We(t), (o = !1);
        } else Nt !== null && (hs(Nt), (Nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || xe.current & 1 ? Ae === 0 && (Ae = 3) : mc())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
    case 4:
      return (
        br(), us(e, t), e === null && qi(t.stateNode.containerInfo), We(t), null
      );
    case 10:
      return Zs(t.type._context), We(t), null;
    case 17:
      return it(t.type) && su(), We(t), null;
    case 19:
      if ((ge(xe), (o = t.memoizedState), o === null)) return We(t), null;
      if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
        if (r) ui(o, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = mu(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    ui(o, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (e = u.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ve(xe, (xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ne() > Fr &&
            ((t.flags |= 128), (r = !0), ui(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mu(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ui(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !u.alternate && !we)
            )
              return We(t), null;
          } else
            2 * Ne() - o.renderingStartTime > Fr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ui(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = o.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (o.last = u));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = xe.current),
          ve(xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (We(t), null);
    case 22:
    case 23:
      return (
        vc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? st & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : We(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function bg(e, t) {
  switch ((Ys(t), t.tag)) {
    case 1:
      return (
        it(t.type) && su(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        br(),
        ge(rt),
        ge(Ye),
        ic(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return rc(t), null;
    case 13:
      if (
        (ge(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(xe), null;
    case 4:
      return br(), null;
    case 10:
      return Zs(t.type._context), null;
    case 22:
    case 23:
      return vc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Io = !1,
  Ke = !1,
  $g = typeof WeakSet == 'function' ? WeakSet : Set,
  U = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Re(e, t, r);
      }
    else n.current = null;
}
function ls(e, t, n) {
  try {
    n();
  } catch (r) {
    Re(e, t, r);
  }
}
var Jf = !1;
function Fg(e, t) {
  if (((Ba = ou), (e = ch()), Hs(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            l = -1,
            a = -1,
            s = 0,
            f = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = u + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = u + r),
                p.nodeType === 3 && (u += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (d = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++s === i && (l = u),
                d === o && ++f === r && (a = u),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Va = { focusedElem: e, selectionRange: n }, ou = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    P = g.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Tt(t.type, S),
                      P
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (c) {
          Re(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (g = Jf), (Jf = !1), g;
}
function Ci(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ls(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ku(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function as(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function lv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$t], delete t[Vi], delete t[Ka], delete t[xg], delete t[Pg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function av(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || av(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = au));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), (e = e.sibling);
}
function cs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cs(e, t, n), e = e.sibling; e !== null; ) cs(e, t, n), (e = e.sibling);
}
var Fe = null,
  Mt = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) sv(e, t, n), (n = n.sibling);
}
function sv(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == 'function')
    try {
      Ut.onCommitFiberUnmount(Fu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || Pr(n, t);
    case 6:
      var r = Fe,
        i = Mt;
      (Fe = null),
        fn(e, t, n),
        (Fe = r),
        (Mt = i),
        Fe !== null &&
          (Mt
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null &&
        (Mt
          ? ((e = Fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            Fi(e))
          : Xl(Fe, n.stateNode));
      break;
    case 4:
      (r = Fe),
        (i = Mt),
        (Fe = n.stateNode.containerInfo),
        (Mt = !0),
        fn(e, t, n),
        (Fe = r),
        (Mt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            u = o.destroy;
          (o = o.tag),
            u !== void 0 && (o & 2 || o & 4) && ls(n, t, u),
            (i = i.next);
        } while (i !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (
        !Ke &&
        (Pr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Re(n, t, l);
        }
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ke = (r = Ke) || n.memoizedState !== null), fn(e, t, n), (Ke = r))
        : fn(e, t, n);
      break;
    default:
      fn(e, t, n);
  }
}
function ed(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $g()),
      t.forEach(function (r) {
        var i = Yg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          u = t,
          l = u;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Fe = l.stateNode), (Mt = !1);
              break e;
            case 3:
              (Fe = l.stateNode.containerInfo), (Mt = !0);
              break e;
            case 4:
              (Fe = l.stateNode.containerInfo), (Mt = !0);
              break e;
          }
          l = l.return;
        }
        if (Fe === null) throw Error(j(160));
        sv(o, u, i), (Fe = null), (Mt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (s) {
        Re(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cv(t, e), (t = t.sibling);
}
function cv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(t, e), zt(e), r & 4)) {
        try {
          Ci(3, e, e.return), Ku(3, e);
        } catch (S) {
          Re(e, e.return, S);
        }
        try {
          Ci(5, e, e.return);
        } catch (S) {
          Re(e, e.return, S);
        }
      }
      break;
    case 1:
      Ot(t, e), zt(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (
        (Ot(t, e),
        zt(e),
        r & 512 && n !== null && Pr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ji(i, '');
        } catch (S) {
          Re(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          u = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && Np(i, o),
              La(l, u);
            var s = La(l, o);
            for (u = 0; u < a.length; u += 2) {
              var f = a[u],
                p = a[u + 1];
              f === 'style'
                ? jp(i, p)
                : f === 'dangerouslySetInnerHTML'
                ? Lp(i, p)
                : f === 'children'
                ? ji(i, p)
                : Ls(i, f, p, s);
            }
            switch (l) {
              case 'input':
                Ma(i, o);
                break;
              case 'textarea':
                Dp(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Cr(i, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Cr(i, !!o.multiple, o.defaultValue, !0)
                      : Cr(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Vi] = o;
          } catch (S) {
            Re(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Ot(t, e), zt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (S) {
          Re(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Ot(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fi(t.containerInfo);
        } catch (S) {
          Re(e, e.return, S);
        }
      break;
    case 4:
      Ot(t, e), zt(e);
      break;
    case 13:
      Ot(t, e),
        zt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (pc = Ne())),
        r & 4 && ed(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ke = (s = Ke) || f), Ot(t, e), (Ke = s)) : Ot(t, e),
        zt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (U = e, f = e.child; f !== null; ) {
            for (p = U = f; U !== null; ) {
              switch (((d = U), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ci(4, d, d.return);
                  break;
                case 1:
                  Pr(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (S) {
                      Re(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Pr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nd(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (U = v)) : nd(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (i = p.stateNode),
                  s
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (u =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = Ap('display', u)));
              } catch (S) {
                Re(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = s ? '' : p.memoizedProps;
              } catch (S) {
                Re(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ot(t, e), zt(e), r & 4 && ed(e);
      break;
    case 21:
      break;
    default:
      Ot(t, e), zt(e);
  }
}
function zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (av(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ji(i, ''), (r.flags &= -33));
          var o = Zf(e);
          cs(e, o, i);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            l = Zf(e);
          ss(e, l, u);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ug(e, t, n) {
  (U = e), fv(e);
}
function fv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var i = U,
      o = i.child;
    if (i.tag === 22 && r) {
      var u = i.memoizedState !== null || Io;
      if (!u) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || Ke;
        l = Io;
        var s = Ke;
        if (((Io = u), (Ke = a) && !s))
          for (U = i; U !== null; )
            (u = U),
              (a = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? rd(i)
                : a !== null
                ? ((a.return = u), (U = a))
                : rd(i);
        for (; o !== null; ) (U = o), fv(o), (o = o.sibling);
        (U = i), (Io = l), (Ke = s);
      }
      td(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (U = o)) : td(e);
  }
}
function td(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || Ku(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && bf(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bf(t, u, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
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
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && Fi(p);
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
              throw Error(j(163));
          }
        Ke || (t.flags & 512 && as(t));
      } catch (d) {
        Re(t, t.return, d);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function nd(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function rd(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ku(4, t);
          } catch (a) {
            Re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Re(t, i, a);
            }
          }
          var o = t.return;
          try {
            as(t);
          } catch (a) {
            Re(t, o, a);
          }
          break;
        case 5:
          var u = t.return;
          try {
            as(t);
          } catch (a) {
            Re(t, u, a);
          }
      }
    } catch (a) {
      Re(t, t.return, a);
    }
    if (t === e) {
      U = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (U = l);
      break;
    }
    U = t.return;
  }
}
var Qg = Math.ceil,
  Su = rn.ReactCurrentDispatcher,
  fc = rn.ReactCurrentOwner,
  xt = rn.ReactCurrentBatchConfig,
  oe = 0,
  be = null,
  De = null,
  Qe = 0,
  st = 0,
  kr = $n(0),
  Ae = 0,
  Xi = null,
  rr = 0,
  Yu = 0,
  dc = 0,
  Oi = null,
  tt = null,
  pc = 0,
  Fr = 1 / 0,
  Ht = null,
  wu = !1,
  fs = null,
  On = null,
  Lo = !1,
  En = null,
  Eu = 0,
  Ti = 0,
  ds = null,
  Yo = -1,
  Go = 0;
function Xe() {
  return oe & 6 ? Ne() : Yo !== -1 ? Yo : (Yo = Ne());
}
function Tn(e) {
  return e.mode & 1
    ? oe & 2 && Qe !== 0
      ? Qe & -Qe
      : Rg.transition !== null
      ? (Go === 0 && (Go = Kp()), Go)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : th(e.type))),
        e)
    : 1;
}
function It(e, t, n, r) {
  if (50 < Ti) throw ((Ti = 0), (ds = null), Error(j(185)));
  lo(e, n, r),
    (!(oe & 2) || e !== be) &&
      (e === be && (!(oe & 2) && (Yu |= n), Ae === 4 && gn(e, Qe)),
      ot(e, r),
      n === 1 && oe === 0 && !(t.mode & 1) && ((Fr = Ne() + 500), Vu && Fn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  Ry(e, t);
  var r = iu(e, e === be ? Qe : 0);
  if (r === 0)
    n !== null && df(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && df(n), t === 1))
      e.tag === 0 ? kg(id.bind(null, e)) : wh(id.bind(null, e)),
        wg(function () {
          !(oe & 6) && Fn();
        }),
        (n = null);
    else {
      switch (Yp(r)) {
        case 1:
          n = $s;
          break;
        case 4:
          n = Wp;
          break;
        case 16:
          n = ru;
          break;
        case 536870912:
          n = Hp;
          break;
        default:
          n = ru;
      }
      n = Sv(n, dv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dv(e, t) {
  if (((Yo = -1), (Go = 0), oe & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Nr() && e.callbackNode !== n) return null;
  var r = iu(e, e === be ? Qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xu(e, r);
  else {
    t = r;
    var i = oe;
    oe |= 2;
    var o = hv();
    (be !== e || Qe !== t) && ((Ht = null), (Fr = Ne() + 500), Jn(e, t));
    do
      try {
        Vg();
        break;
      } catch (l) {
        pv(e, l);
      }
    while (1);
    Js(),
      (Su.current = o),
      (oe = i),
      De !== null ? (t = 0) : ((be = null), (Qe = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = $a(e)), i !== 0 && ((r = i), (t = ps(e, i)))), t === 1)
    )
      throw ((n = Xi), Jn(e, 0), gn(e, r), ot(e, Ne()), n);
    if (t === 6) gn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !qg(i) &&
          ((t = xu(e, r)),
          t === 2 && ((o = $a(e)), o !== 0 && ((r = o), (t = ps(e, o)))),
          t === 1))
      )
        throw ((n = Xi), Jn(e, 0), gn(e, r), ot(e, Ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Vn(e, tt, Ht);
          break;
        case 3:
          if (
            (gn(e, r), (r & 130023424) === r && ((t = pc + 500 - Ne()), 10 < t))
          ) {
            if (iu(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ha(Vn.bind(null, e, tt, Ht), t);
            break;
          }
          Vn(e, tt, Ht);
          break;
        case 4:
          if ((gn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var u = 31 - Dt(r);
            (o = 1 << u), (u = t[u]), u > i && (i = u), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ha(Vn.bind(null, e, tt, Ht), r);
            break;
          }
          Vn(e, tt, Ht);
          break;
        case 5:
          Vn(e, tt, Ht);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ot(e, Ne()), e.callbackNode === n ? dv.bind(null, e) : null;
}
function ps(e, t) {
  var n = Oi;
  return (
    e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    (e = xu(e, t)),
    e !== 2 && ((t = tt), (tt = n), t !== null && hs(t)),
    e
  );
}
function hs(e) {
  tt === null ? (tt = e) : tt.push.apply(tt, e);
}
function qg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Lt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gn(e, t) {
  for (
    t &= ~dc,
      t &= ~Yu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function id(e) {
  if (oe & 6) throw Error(j(327));
  Nr();
  var t = iu(e, 0);
  if (!(t & 1)) return ot(e, Ne()), null;
  var n = xu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $a(e);
    r !== 0 && ((t = r), (n = ps(e, r)));
  }
  if (n === 1) throw ((n = Xi), Jn(e, 0), gn(e, t), ot(e, Ne()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vn(e, tt, Ht),
    ot(e, Ne()),
    null
  );
}
function hc(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    (oe = n), oe === 0 && ((Fr = Ne() + 500), Vu && Fn());
  }
}
function ir(e) {
  En !== null && En.tag === 0 && !(oe & 6) && Nr();
  var t = oe;
  oe |= 1;
  var n = xt.transition,
    r = ue;
  try {
    if (((xt.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (xt.transition = n), (oe = t), !(oe & 6) && Fn();
  }
}
function vc() {
  (st = kr.current), ge(kr);
}
function Jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Sg(n)), De !== null))
    for (n = De.return; n !== null; ) {
      var r = n;
      switch ((Ys(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && su();
          break;
        case 3:
          br(), ge(rt), ge(Ye), ic();
          break;
        case 5:
          rc(r);
          break;
        case 4:
          br();
          break;
        case 13:
          ge(xe);
          break;
        case 19:
          ge(xe);
          break;
        case 10:
          Zs(r.type._context);
          break;
        case 22:
        case 23:
          vc();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (De = e = Mn(e.current, null)),
    (Qe = st = t),
    (Ae = 0),
    (Xi = null),
    (dc = Yu = rr = 0),
    (tt = Oi = null),
    Kn !== null)
  ) {
    for (t = 0; t < Kn.length; t++)
      if (((n = Kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var u = o.next;
          (o.next = i), (r.next = u);
        }
        n.pending = r;
      }
    Kn = null;
  }
  return e;
}
function pv(e, t) {
  do {
    var n = De;
    try {
      if ((Js(), (Wo.current = gu), yu)) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        yu = !1;
      }
      if (
        ((nr = 0),
        (ze = Le = Pe = null),
        (Ri = !1),
        (Ki = 0),
        (fc.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (Xi = t), (De = null);
        break;
      }
      e: {
        var o = e,
          u = n.return,
          l = n,
          a = t;
        if (
          ((t = Qe),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var s = a,
            f = l,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = Vf(u);
          if (v !== null) {
            (v.flags &= -257),
              Wf(v, u, l, o, t),
              v.mode & 1 && Bf(o, s, t),
              (t = v),
              (a = s);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Bf(o, s, t), mc();
              break e;
            }
            a = Error(j(426));
          }
        } else if (we && l.mode & 1) {
          var P = Vf(u);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Wf(P, u, l, o, t),
              Gs($r(a, l));
            break e;
          }
        }
        (o = a = $r(a, l)),
          Ae !== 4 && (Ae = 2),
          Oi === null ? (Oi = [o]) : Oi.push(o),
          (o = u);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Gh(o, a, t);
              zf(o, m);
              break e;
            case 1:
              l = a;
              var h = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (On === null || !On.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var c = Xh(o, l, t);
                zf(o, c);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      mv(n);
    } catch (w) {
      (t = w), De === n && n !== null && (De = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function hv() {
  var e = Su.current;
  return (Su.current = gu), e === null ? gu : e;
}
function mc() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    be === null || (!(rr & 268435455) && !(Yu & 268435455)) || gn(be, Qe);
}
function xu(e, t) {
  var n = oe;
  oe |= 2;
  var r = hv();
  (be !== e || Qe !== t) && ((Ht = null), Jn(e, t));
  do
    try {
      Bg();
      break;
    } catch (i) {
      pv(e, i);
    }
  while (1);
  if ((Js(), (oe = n), (Su.current = r), De !== null)) throw Error(j(261));
  return (be = null), (Qe = 0), Ae;
}
function Bg() {
  for (; De !== null; ) vv(De);
}
function Vg() {
  for (; De !== null && !my(); ) vv(De);
}
function vv(e) {
  var t = gv(e.alternate, e, st);
  (e.memoizedProps = e.pendingProps),
    t === null ? mv(e) : (De = t),
    (fc.current = null);
}
function mv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bg(n, t)), n !== null)) {
        (n.flags &= 32767), (De = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (De = null);
        return;
      }
    } else if (((n = zg(n, t, st)), n !== null)) {
      De = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function Vn(e, t, n) {
  var r = ue,
    i = xt.transition;
  try {
    (xt.transition = null), (ue = 1), Wg(e, t, n, r);
  } finally {
    (xt.transition = i), (ue = r);
  }
  return null;
}
function Wg(e, t, n, r) {
  do Nr();
  while (En !== null);
  if (oe & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Cy(e, o),
    e === be && ((De = be = null), (Qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lo ||
      ((Lo = !0),
      Sv(ru, function () {
        return Nr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = xt.transition), (xt.transition = null);
    var u = ue;
    ue = 1;
    var l = oe;
    (oe |= 4),
      (fc.current = null),
      Fg(e, n),
      cv(n, e),
      dg(Va),
      (ou = !!Ba),
      (Va = Ba = null),
      (e.current = n),
      Ug(n),
      yy(),
      (oe = l),
      (ue = u),
      (xt.transition = o);
  } else e.current = n;
  if (
    (Lo && ((Lo = !1), (En = e), (Eu = i)),
    (o = e.pendingLanes),
    o === 0 && (On = null),
    wy(n.stateNode),
    ot(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (wu) throw ((wu = !1), (e = fs), (fs = null), e);
  return (
    Eu & 1 && e.tag !== 0 && Nr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ds ? Ti++ : ((Ti = 0), (ds = e))) : (Ti = 0),
    Fn(),
    null
  );
}
function Nr() {
  if (En !== null) {
    var e = Yp(Eu),
      t = xt.transition,
      n = ue;
    try {
      if (((xt.transition = null), (ue = 16 > e ? 16 : e), En === null))
        var r = !1;
      else {
        if (((e = En), (En = null), (Eu = 0), oe & 6)) throw Error(j(331));
        var i = oe;
        for (oe |= 4, U = e.current; U !== null; ) {
          var o = U,
            u = o.child;
          if (U.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                for (U = s; U !== null; ) {
                  var f = U;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(8, f, o);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (U = p);
                  else
                    for (; U !== null; ) {
                      f = U;
                      var d = f.sibling,
                        v = f.return;
                      if ((lv(f), f === s)) {
                        U = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (U = d);
                        break;
                      }
                      U = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var P = S.sibling;
                    (S.sibling = null), (S = P);
                  } while (S !== null);
                }
              }
              U = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (U = u);
          else
            e: for (; U !== null; ) {
              if (((o = U), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ci(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (U = m);
                break e;
              }
              U = o.return;
            }
        }
        var h = e.current;
        for (U = h; U !== null; ) {
          u = U;
          var y = u.child;
          if (u.subtreeFlags & 2064 && y !== null) (y.return = u), (U = y);
          else
            e: for (u = h; U !== null; ) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ku(9, l);
                  }
                } catch (w) {
                  Re(l, l.return, w);
                }
              if (l === u) {
                U = null;
                break e;
              }
              var c = l.sibling;
              if (c !== null) {
                (c.return = l.return), (U = c);
                break e;
              }
              U = l.return;
            }
        }
        if (
          ((oe = i), Fn(), Ut && typeof Ut.onPostCommitFiberRoot == 'function')
        )
          try {
            Ut.onPostCommitFiberRoot(Fu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (xt.transition = t);
    }
  }
  return !1;
}
function od(e, t, n) {
  (t = $r(n, t)),
    (t = Gh(e, t, 1)),
    (e = Cn(e, t, 1)),
    (t = Xe()),
    e !== null && (lo(e, 1, t), ot(e, t));
}
function Re(e, t, n) {
  if (e.tag === 3) od(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (On === null || !On.has(r)))
        ) {
          (e = $r(n, e)),
            (e = Xh(t, e, 1)),
            (t = Cn(t, e, 1)),
            (e = Xe()),
            t !== null && (lo(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (Qe & n) === n &&
      (Ae === 4 || (Ae === 3 && (Qe & 130023424) === Qe && 500 > Ne() - pc)
        ? Jn(e, 0)
        : (dc |= n)),
    ot(e, t);
}
function yv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ko), (ko <<= 1), !(ko & 130023424) && (ko = 4194304))
      : (t = 1));
  var n = Xe();
  (e = tn(e, t)), e !== null && (lo(e, t, n), ot(e, n));
}
function Kg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yv(e, n);
}
function Yg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), yv(e, n);
}
var gv;
gv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rt.current) nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (nt = !1), jg(e, t, n);
      nt = !!(e.flags & 131072);
    }
  else (nt = !1), we && t.flags & 1048576 && Eh(t, du, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ko(e, t), (e = t.pendingProps);
      var i = Ar(t, Ye.current);
      _r(t, n), (i = uc(null, t, r, e, i, n));
      var o = lc();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            it(r) ? ((o = !0), cu(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            tc(t),
            (i.updater = Wu),
            (t.stateNode = i),
            (i._reactInternals = t),
            es(t, r, e, n),
            (t = rs(null, t, r, !0, o, n)))
          : ((t.tag = 0), we && o && Ks(t), Ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ko(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Xg(r)),
          (e = Tt(r, e)),
          i)
        ) {
          case 0:
            t = ns(null, t, r, e, n);
            break e;
          case 1:
            t = Yf(null, t, r, e, n);
            break e;
          case 11:
            t = Hf(null, t, r, e, n);
            break e;
          case 14:
            t = Kf(null, t, r, Tt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tt(r, i)),
        ns(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tt(r, i)),
        Yf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((tv(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Rh(e, t),
          vu(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = $r(Error(j(423)), t)), (t = Gf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = $r(Error(j(424)), t)), (t = Gf(e, t, r, n, i));
            break e;
          } else
            for (
              ct = Rn(t.stateNode.containerInfo.firstChild),
                ft = t,
                we = !0,
                Nt = null,
                n = Mh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jr(), r === i)) {
            t = nn(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _h(t),
        e === null && Xa(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (u = i.children),
        Wa(r, i) ? (u = null) : o !== null && Wa(r, o) && (t.flags |= 32),
        ev(e, t),
        Ge(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && Xa(t), null;
    case 13:
      return nv(e, t, n);
    case 4:
      return (
        nc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zr(t, null, r, n)) : Ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tt(r, i)),
        Hf(e, t, r, i, n)
      );
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (u = i.value),
          ve(pu, r._currentValue),
          (r._currentValue = u),
          o !== null)
        )
          if (Lt(o.value, u)) {
            if (o.children === i.children && !rt.current) {
              t = nn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                u = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Xt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Ja(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((u = o.return), u === null)) throw Error(j(341));
                (u.lanes |= n),
                  (l = u.alternate),
                  l !== null && (l.lanes |= n),
                  Ja(u, n, t),
                  (u = o.sibling);
              } else u = o.child;
              if (u !== null) u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((o = u.sibling), o !== null)) {
                    (o.return = u.return), (u = o);
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        Ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        _r(t, n),
        (i = Pt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Tt(r, t.pendingProps)),
        (i = Tt(r.type, i)),
        Kf(e, t, r, i, n)
      );
    case 15:
      return Jh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tt(r, i)),
        Ko(e, t),
        (t.tag = 1),
        it(r) ? ((e = !0), cu(t)) : (e = !1),
        _r(t, n),
        Oh(t, r, i),
        es(t, r, i, n),
        rs(null, t, r, !0, e, n)
      );
    case 19:
      return rv(e, t, n);
    case 22:
      return Zh(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Sv(e, t) {
  return Vp(e, t);
}
function Gg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Et(e, t, n, r) {
  return new Gg(e, t, n, r);
}
function yc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xg(e) {
  if (typeof e == 'function') return yc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === js)) return 11;
    if (e === zs) return 14;
  }
  return 2;
}
function Mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Et(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xo(e, t, n, r, i, o) {
  var u = 2;
  if (((r = e), typeof e == 'function')) yc(e) && (u = 1);
  else if (typeof e == 'string') u = 5;
  else
    e: switch (e) {
      case hr:
        return Zn(n.children, i, o, t);
      case As:
        (u = 8), (i |= 8);
        break;
      case ka:
        return (
          (e = Et(12, n, t, i | 2)), (e.elementType = ka), (e.lanes = o), e
        );
      case Ra:
        return (e = Et(13, n, t, i)), (e.elementType = Ra), (e.lanes = o), e;
      case Ca:
        return (e = Et(19, n, t, i)), (e.elementType = Ca), (e.lanes = o), e;
      case Tp:
        return Gu(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Cp:
              u = 10;
              break e;
            case Op:
              u = 9;
              break e;
            case js:
              u = 11;
              break e;
            case zs:
              u = 14;
              break e;
            case hn:
              (u = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Et(u, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Zn(e, t, n, r) {
  return (e = Et(7, e, r, t)), (e.lanes = n), e;
}
function Gu(e, t, n, r) {
  return (
    (e = Et(22, e, r, t)),
    (e.elementType = Tp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oa(e, t, n) {
  return (e = Et(6, e, null, t)), (e.lanes = n), e;
}
function ua(e, t, n) {
  return (
    (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Jg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function gc(e, t, n, r, i, o, u, l, a) {
  return (
    (e = new Jg(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Et(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    tc(o),
    e
  );
}
function Zg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: pr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wv(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (it(n)) return Sh(e, n, t);
  }
  return t;
}
function Ev(e, t, n, r, i, o, u, l, a) {
  return (
    (e = gc(n, r, !0, e, i, o, u, l, a)),
    (e.context = wv(null)),
    (n = e.current),
    (r = Xe()),
    (i = Tn(n)),
    (o = Xt(r, i)),
    (o.callback = t ?? null),
    Cn(n, o, i),
    (e.current.lanes = i),
    lo(e, i, r),
    ot(e, r),
    e
  );
}
function Xu(e, t, n, r) {
  var i = t.current,
    o = Xe(),
    u = Tn(i);
  return (
    (n = wv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xt(o, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cn(i, t, u)),
    e !== null && (It(e, i, u, o), Vo(e, i, u)),
    u
  );
}
function Pu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ud(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sc(e, t) {
  ud(e, t), (e = e.alternate) && ud(e, t);
}
function e0() {
  return null;
}
var xv =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function wc(e) {
  this._internalRoot = e;
}
Ju.prototype.render = wc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Xu(e, t, null, null);
};
Ju.prototype.unmount = wc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ir(function () {
      Xu(null, e, null, null);
    }),
      (t[en] = null);
  }
};
function Ju(e) {
  this._internalRoot = e;
}
Ju.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
    yn.splice(n, 0, e), n === 0 && eh(e);
  }
};
function Ec(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ld() {}
function t0(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = Pu(u);
        o.call(s);
      };
    }
    var u = Ev(t, r, e, 0, null, !1, !1, '', ld);
    return (
      (e._reactRootContainer = u),
      (e[en] = u.current),
      qi(e.nodeType === 8 ? e.parentNode : e),
      ir(),
      u
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var s = Pu(a);
      l.call(s);
    };
  }
  var a = gc(e, 0, !1, null, null, !1, !1, '', ld);
  return (
    (e._reactRootContainer = a),
    (e[en] = a.current),
    qi(e.nodeType === 8 ? e.parentNode : e),
    ir(function () {
      Xu(t, a, n, r);
    }),
    a
  );
}
function el(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var a = Pu(u);
        l.call(a);
      };
    }
    Xu(t, u, e, i);
  } else u = t0(n, t, e, i, r);
  return Pu(u);
}
Gp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mi(t.pendingLanes);
        n !== 0 &&
          (Fs(t, n | 1), ot(t, Ne()), !(oe & 6) && ((Fr = Ne() + 500), Fn()));
      }
      break;
    case 13:
      ir(function () {
        var r = tn(e, 1);
        if (r !== null) {
          var i = Xe();
          It(r, e, 1, i);
        }
      }),
        Sc(e, 1);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var t = tn(e, 134217728);
    if (t !== null) {
      var n = Xe();
      It(t, e, 134217728, n);
    }
    Sc(e, 134217728);
  }
};
Xp = function (e) {
  if (e.tag === 13) {
    var t = Tn(e),
      n = tn(e, t);
    if (n !== null) {
      var r = Xe();
      It(n, e, t, r);
    }
    Sc(e, t);
  }
};
Jp = function () {
  return ue;
};
Zp = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
ja = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ma(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Bu(r);
            if (!i) throw Error(j(90));
            _p(r), Ma(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Dp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Cr(e, !!n.multiple, t, !1);
  }
};
$p = hc;
Fp = ir;
var n0 = { usingClientEntryPoint: !1, Events: [so, gr, Bu, zp, bp, hc] },
  li = {
    findFiberByHostInstance: Hn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  r0 = {
    bundleType: li.bundleType,
    version: li.version,
    rendererPackageName: li.rendererPackageName,
    rendererConfig: li.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: li.findFiberByHostInstance || e0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ao.isDisabled && Ao.supportsFiber)
    try {
      (Fu = Ao.inject(r0)), (Ut = Ao);
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n0;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ec(t)) throw Error(j(200));
  return Zg(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!Ec(e)) throw Error(j(299));
  var n = !1,
    r = '',
    i = xv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = gc(e, 1, !1, null, null, n, !1, r, i)),
    (e[en] = t.current),
    qi(e.nodeType === 8 ? e.parentNode : e),
    new wc(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (e = qp(t)), (e = e === null ? null : e.stateNode), e;
};
ht.flushSync = function (e) {
  return ir(e);
};
ht.hydrate = function (e, t, n) {
  if (!Zu(t)) throw Error(j(200));
  return el(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!Ec(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    u = xv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = Ev(t, null, e, 1, n ?? null, i, !1, o, u)),
    (e[en] = t.current),
    qi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ju(t);
};
ht.render = function (e, t, n) {
  if (!Zu(t)) throw Error(j(200));
  return el(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!Zu(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (ir(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[en] = null);
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = hc;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zu(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return el(e, t, n, !1, r);
};
ht.version = '18.2.0-next-9e3b772b8-20220608';
function Pv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv);
    } catch (e) {
      console.error(e);
    }
}
Pv(), (Ep.exports = ht);
var xc = Ep.exports,
  ad = xc;
(xa.createRoot = ad.createRoot), (xa.hydrateRoot = ad.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ce() {
  return (
    (Ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ce.apply(this, arguments)
  );
}
var Me;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Me || (Me = {}));
const sd = 'popstate';
function i0(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: u, hash: l } = r.location;
    return Ji(
      '',
      { pathname: o, search: u, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : ur(i);
  }
  return u0(t, n, null, e);
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function or(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function o0() {
  return Math.random().toString(36).substr(2, 8);
}
function cd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ji(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? on(t) : t,
      { state: n, key: (t && t.key) || r || o0() }
    )
  );
}
function ur(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function on(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function u0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    u = i.history,
    l = Me.Pop,
    a = null,
    s = f();
  s == null && ((s = 0), u.replaceState(Ce({}, u.state, { idx: s }), ''));
  function f() {
    return (u.state || { idx: null }).idx;
  }
  function p() {
    l = Me.Pop;
    let P = f(),
      m = P == null ? null : P - s;
    (s = P), a && a({ action: l, location: S.location, delta: m });
  }
  function d(P, m) {
    l = Me.Push;
    let h = Ji(S.location, P, m);
    n && n(h, P), (s = f() + 1);
    let y = cd(h, s),
      c = S.createHref(h);
    try {
      u.pushState(y, '', c);
    } catch (w) {
      if (w instanceof DOMException && w.name === 'DataCloneError') throw w;
      i.location.assign(c);
    }
    o && a && a({ action: l, location: S.location, delta: 1 });
  }
  function v(P, m) {
    l = Me.Replace;
    let h = Ji(S.location, P, m);
    n && n(h, P), (s = f());
    let y = cd(h, s),
      c = S.createHref(h);
    u.replaceState(y, '', c),
      o && a && a({ action: l, location: S.location, delta: 0 });
  }
  function g(P) {
    let m = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      h = typeof P == 'string' ? P : ur(P);
    return (
      te(
        m,
        'No window.location.(origin|href) available to create URL for href: ' +
          h
      ),
      new URL(h, m)
    );
  }
  let S = {
    get action() {
      return l;
    },
    get location() {
      return e(i, u);
    },
    listen(P) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(sd, p),
        (a = P),
        () => {
          i.removeEventListener(sd, p), (a = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: g,
    encodeLocation(P) {
      let m = g(P);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: v,
    go(P) {
      return u.go(P);
    },
  };
  return S;
}
var _e;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(_e || (_e = {}));
const l0 = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function a0(e) {
  return e.index === !0;
}
function vs(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let u = [...n, o],
        l = typeof i.id == 'string' ? i.id : u.join('-');
      if (
        (te(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route'
        ),
        te(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        a0(i))
      ) {
        let a = Ce({}, i, t(i), { id: l });
        return (r[l] = a), a;
      } else {
        let a = Ce({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = a), i.children && (a.children = vs(i.children, t, u, r)), a
        );
      }
    })
  );
}
function Rr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? on(t) : t,
    i = Wr(r.pathname || '/', n);
  if (i == null) return null;
  let o = kv(e);
  c0(o);
  let u = null;
  for (let l = 0; u == null && l < o.length; ++l) u = S0(o[l], x0(i));
  return u;
}
function s0(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function kv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (o, u, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || '' : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: u,
      route: o,
    };
    a.relativePath.startsWith('/') &&
      (te(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Jt([r, a.relativePath]),
      f = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (te(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      kv(o.children, t, f, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: y0(s, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, u) => {
      var l;
      if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, u);
      else for (let a of Rv(o.path)) i(o, u, a);
    }),
    t
  );
}
function Rv(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [o, ''] : [o];
  let u = Rv(r.join('/')),
    l = [];
  return (
    l.push(...u.map((a) => (a === '' ? o : [o, a].join('/')))),
    i && l.push(...u),
    l.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function c0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : g0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const f0 = /^:\w+$/,
  d0 = 3,
  p0 = 2,
  h0 = 1,
  v0 = 10,
  m0 = -2,
  fd = (e) => e === '*';
function y0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(fd) && (r += m0),
    t && (r += p0),
    n
      .filter((i) => !fd(i))
      .reduce((i, o) => i + (f0.test(o) ? d0 : o === '' ? h0 : v0), r)
  );
}
function g0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function S0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = [];
  for (let u = 0; u < n.length; ++u) {
    let l = n[u],
      a = u === n.length - 1,
      s = i === '/' ? t : t.slice(i.length) || '/',
      f = w0(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        s
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let p = l.route;
    o.push({
      params: r,
      pathname: Jt([i, f.pathname]),
      pathnameBase: C0(Jt([i, f.pathnameBase])),
      route: p,
    }),
      f.pathnameBase !== '/' && (i = Jt([i, f.pathnameBase]));
  }
  return o;
}
function w0(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = E0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    u = o.replace(/(.)\/+$/, '$1'),
    l = i.slice(1);
  return {
    params: r.reduce((s, f, p) => {
      let { paramName: d, isOptional: v } = f;
      if (d === '*') {
        let S = l[p] || '';
        u = o.slice(0, o.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const g = l[p];
      return v && !g ? (s[d] = void 0) : (s[d] = P0(g || '', d)), s;
    }, {}),
    pathname: o,
    pathnameBase: u,
    pattern: e,
  };
}
function E0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    or(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (u, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function x0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      or(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function P0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      or(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Wr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function k0(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? on(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : R0(n, t)) : t,
    search: O0(r),
    hash: T0(i),
  };
}
function R0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function la(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function tl(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Pc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = on(e))
    : ((i = Ce({}, e)),
      te(
        !i.pathname || !i.pathname.includes('?'),
        la('?', 'pathname', 'search', i)
      ),
      te(
        !i.pathname || !i.pathname.includes('#'),
        la('#', 'pathname', 'hash', i)
      ),
      te(!i.search || !i.search.includes('#'), la('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    u = o ? '/' : i.pathname,
    l;
  if (r || u == null) l = n;
  else {
    let p = t.length - 1;
    if (u.startsWith('..')) {
      let d = u.split('/');
      for (; d[0] === '..'; ) d.shift(), (p -= 1);
      i.pathname = d.join('/');
    }
    l = p >= 0 ? t[p] : '/';
  }
  let a = k0(i, l),
    s = u && u !== '/' && u.endsWith('/'),
    f = (o || u === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (s || f) && (a.pathname += '/'), a;
}
const Jt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  C0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  O0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  T0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class kc {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Cv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Ov = ['post', 'put', 'patch', 'delete'],
  M0 = new Set(Ov),
  _0 = ['get', ...Ov],
  N0 = new Set(_0),
  D0 = new Set([301, 302, 303, 307, 308]),
  I0 = new Set([307, 308]),
  aa = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  L0 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ai = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Tv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  A0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Mv = 'remix-router-transitions';
function j0(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  te(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let C = e.detectErrorBoundary;
    i = (_) => ({ hasErrorBoundary: C(_) });
  } else i = A0;
  let o = {},
    u = vs(e.routes, i, void 0, o),
    l,
    a = e.basename || '/',
    s = Ce(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    f = null,
    p = new Set(),
    d = null,
    v = null,
    g = null,
    S = e.hydrationData != null,
    P = Rr(u, e.history.location, a),
    m = null;
  if (P == null) {
    let C = gt(404, { pathname: e.history.location.pathname }),
      { matches: _, route: L } = Sd(u);
    (P = _), (m = { [L.id]: C });
  }
  let h =
      !P.some((C) => C.route.lazy) &&
      (!P.some((C) => C.route.loader) || e.hydrationData != null),
    y,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: h,
      navigation: aa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    w = Me.Pop,
    E = !1,
    x,
    k = !1,
    O = new Map(),
    R = null,
    T = !1,
    D = !1,
    I = [],
    $ = [],
    A = new Map(),
    B = 0,
    K = -1,
    N = new Map(),
    b = new Set(),
    z = new Map(),
    Q = new Map(),
    V = new Set(),
    X = new Map(),
    Z = new Map(),
    J = !1;
  function re() {
    if (
      ((f = e.history.listen((C) => {
        let { action: _, location: L, delta: F } = C;
        if (J) {
          J = !1;
          return;
        }
        or(
          Z.size === 0 || F != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let H = Yc({
          currentLocation: c.location,
          nextLocation: L,
          historyAction: _,
        });
        if (H && F != null) {
          (J = !0),
            e.history.go(F * -1),
            yo(H, {
              state: 'blocked',
              location: L,
              proceed() {
                yo(H, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: L,
                }),
                  e.history.go(F);
              },
              reset() {
                let Y = new Map(c.blockers);
                Y.set(H, ai), se({ blockers: Y });
              },
            });
          return;
        }
        return de(_, L);
      })),
      n)
    ) {
      H0(t, O);
      let C = () => K0(t, O);
      t.addEventListener('pagehide', C),
        (R = () => t.removeEventListener('pagehide', C));
    }
    return c.initialized || de(Me.Pop, c.location), y;
  }
  function ae() {
    f && f(),
      R && R(),
      p.clear(),
      x && x.abort(),
      c.fetchers.forEach((C, _) => mo(_)),
      c.blockers.forEach((C, _) => Kc(_));
  }
  function yt(C) {
    return p.add(C), () => p.delete(C);
  }
  function se(C, _) {
    c = Ce({}, c, C);
    let L = [],
      F = [];
    s.v7_fetcherPersist &&
      c.fetchers.forEach((H, Y) => {
        H.state === 'idle' && (V.has(Y) ? F.push(Y) : L.push(Y));
      }),
      p.forEach((H) =>
        H(c, { deletedFetchers: F, unstable_viewTransitionOpts: _ })
      ),
      s.v7_fetcherPersist &&
        (L.forEach((H) => c.fetchers.delete(H)), F.forEach((H) => mo(H)));
  }
  function Be(C, _) {
    var L, F;
    let H =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        _t(c.navigation.formMethod) &&
        c.navigation.state === 'loading' &&
        ((L = C.state) == null ? void 0 : L._isRedirect) !== !0,
      Y;
    _.actionData
      ? Object.keys(_.actionData).length > 0
        ? (Y = _.actionData)
        : (Y = null)
      : H
      ? (Y = c.actionData)
      : (Y = null);
    let ee = _.loaderData
        ? gd(c.loaderData, _.loaderData, _.matches || [], _.errors)
        : c.loaderData,
      G = c.blockers;
    G.size > 0 && ((G = new Map(G)), G.forEach((Ee, ie) => G.set(ie, ai)));
    let W =
      E === !0 ||
      (c.navigation.formMethod != null &&
        _t(c.navigation.formMethod) &&
        ((F = C.state) == null ? void 0 : F._isRedirect) !== !0);
    l && ((u = l), (l = void 0)),
      T ||
        w === Me.Pop ||
        (w === Me.Push
          ? e.history.push(C, C.state)
          : w === Me.Replace && e.history.replace(C, C.state));
    let pe;
    if (w === Me.Pop) {
      let Ee = O.get(c.location.pathname);
      Ee && Ee.has(C.pathname)
        ? (pe = { currentLocation: c.location, nextLocation: C })
        : O.has(C.pathname) &&
          (pe = { currentLocation: C, nextLocation: c.location });
    } else if (k) {
      let Ee = O.get(c.location.pathname);
      Ee
        ? Ee.add(C.pathname)
        : ((Ee = new Set([C.pathname])), O.set(c.location.pathname, Ee)),
        (pe = { currentLocation: c.location, nextLocation: C });
    }
    se(
      Ce({}, _, {
        actionData: Y,
        loaderData: ee,
        historyAction: w,
        location: C,
        initialized: !0,
        navigation: aa,
        revalidation: 'idle',
        restoreScrollPosition: Xc(C, _.matches || c.matches),
        preventScrollReset: W,
        blockers: G,
      }),
      pe
    ),
      (w = Me.Pop),
      (E = !1),
      (k = !1),
      (T = !1),
      (D = !1),
      (I = []),
      ($ = []);
  }
  async function lt(C, _) {
    if (typeof C == 'number') {
      e.history.go(C);
      return;
    }
    let L = ms(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        C,
        _ == null ? void 0 : _.fromRouteId,
        _ == null ? void 0 : _.relative
      ),
      {
        path: F,
        submission: H,
        error: Y,
      } = dd(s.v7_normalizeFormMethod, !1, L, _),
      ee = c.location,
      G = Ji(c.location, F, _ && _.state);
    G = Ce({}, G, e.history.encodeLocation(G));
    let W = _ && _.replace != null ? _.replace : void 0,
      pe = Me.Push;
    W === !0
      ? (pe = Me.Replace)
      : W === !1 ||
        (H != null &&
          _t(H.formMethod) &&
          H.formAction === c.location.pathname + c.location.search &&
          (pe = Me.Replace));
    let Ee =
        _ && 'preventScrollReset' in _ ? _.preventScrollReset === !0 : void 0,
      ie = Yc({ currentLocation: ee, nextLocation: G, historyAction: pe });
    if (ie) {
      yo(ie, {
        state: 'blocked',
        location: G,
        proceed() {
          yo(ie, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: G,
          }),
            lt(C, _);
        },
        reset() {
          let he = new Map(c.blockers);
          he.set(ie, ai), se({ blockers: he });
        },
      });
      return;
    }
    return await de(pe, G, {
      submission: H,
      pendingError: Y,
      preventScrollReset: Ee,
      replace: _ && _.replace,
      enableViewTransition: _ && _.unstable_viewTransition,
    });
  }
  function je() {
    if (
      (et(),
      se({ revalidation: 'loading' }),
      c.navigation.state !== 'submitting')
    ) {
      if (c.navigation.state === 'idle') {
        de(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      de(w || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function de(C, _, L) {
    x && x.abort(),
      (x = null),
      (w = C),
      (T = (L && L.startUninterruptedRevalidation) === !0),
      Tm(c.location, c.matches),
      (E = (L && L.preventScrollReset) === !0),
      (k = (L && L.enableViewTransition) === !0);
    let F = l || u,
      H = L && L.overrideNavigation,
      Y = Rr(F, _, a);
    if (!Y) {
      let he = gt(404, { pathname: _.pathname }),
        { matches: Ie, route: Qn } = Sd(F);
      _l(), Be(_, { matches: Ie, loaderData: {}, errors: { [Qn.id]: he } });
      return;
    }
    if (
      c.initialized &&
      !D &&
      U0(c.location, _) &&
      !(L && L.submission && _t(L.submission.formMethod))
    ) {
      Be(_, { matches: Y });
      return;
    }
    x = new AbortController();
    let ee = ci(e.history, _, x.signal, L && L.submission),
      G,
      W;
    if (L && L.pendingError) W = { [Mi(Y).route.id]: L.pendingError };
    else if (L && L.submission && _t(L.submission.formMethod)) {
      let he = await Un(ee, _, L.submission, Y, { replace: L.replace });
      if (he.shortCircuited) return;
      (G = he.pendingActionData),
        (W = he.pendingActionError),
        (H = sa(_, L.submission)),
        (ee = new Request(ee.url, { signal: ee.signal }));
    }
    let {
      shortCircuited: pe,
      loaderData: Ee,
      errors: ie,
    } = await vo(
      ee,
      _,
      Y,
      H,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      G,
      W
    );
    pe ||
      ((x = null),
      Be(
        _,
        Ce({ matches: Y }, G ? { actionData: G } : {}, {
          loaderData: Ee,
          errors: ie,
        })
      ));
  }
  async function Un(C, _, L, F, H) {
    H === void 0 && (H = {}), et();
    let Y = V0(_, L);
    se({ navigation: Y });
    let ee,
      G = gs(F, _);
    if (!G.route.action && !G.route.lazy)
      ee = {
        type: _e.error,
        error: gt(405, {
          method: C.method,
          pathname: _.pathname,
          routeId: G.route.id,
        }),
      };
    else if (((ee = await si('action', C, G, F, o, i, a)), C.signal.aborted))
      return { shortCircuited: !0 };
    if (Dr(ee)) {
      let W;
      return (
        H && H.replace != null
          ? (W = H.replace)
          : (W = ee.location === c.location.pathname + c.location.search),
        await ln(c, ee, { submission: L, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (_i(ee)) {
      let W = Mi(F, G.route.id);
      return (
        (H && H.replace) !== !0 && (w = Me.Push),
        {
          pendingActionData: {},
          pendingActionError: { [W.route.id]: ee.error },
        }
      );
    }
    if (Gn(ee)) throw gt(400, { type: 'defer-action' });
    return { pendingActionData: { [G.route.id]: ee.data } };
  }
  async function vo(C, _, L, F, H, Y, ee, G, W) {
    let pe = F || sa(_, H),
      Ee = H || Y || xd(pe),
      ie = l || u,
      [he, Ie] = pd(e.history, c, L, Ee, _, D, I, $, z, b, ie, a, G, W);
    if (
      (_l(
        (ce) =>
          !(L && L.some((Ct) => Ct.route.id === ce)) ||
          (he && he.some((Ct) => Ct.route.id === ce))
      ),
      (K = ++B),
      he.length === 0 && Ie.length === 0)
    ) {
      let ce = Wc();
      return (
        Be(
          _,
          Ce(
            { matches: L, loaderData: {}, errors: W || null },
            G ? { actionData: G } : {},
            ce ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!T) {
      Ie.forEach((Ct) => {
        let cn = c.fetchers.get(Ct.key),
          Te = fi(void 0, cn ? cn.data : void 0);
        c.fetchers.set(Ct.key, Te);
      });
      let ce = G || c.actionData;
      se(
        Ce(
          { navigation: pe },
          ce
            ? Object.keys(ce).length === 0
              ? { actionData: null }
              : { actionData: ce }
            : {},
          Ie.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    Ie.forEach((ce) => {
      A.has(ce.key) && an(ce.key),
        ce.controller && A.set(ce.key, ce.controller);
    });
    let Qn = () => Ie.forEach((ce) => an(ce.key));
    x && x.signal.addEventListener('abort', Qn);
    let {
      results: qn,
      loaderResults: Jr,
      fetcherResults: Nl,
    } = await at(c.matches, L, he, Ie, C);
    if (C.signal.aborted) return { shortCircuited: !0 };
    x && x.signal.removeEventListener('abort', Qn),
      Ie.forEach((ce) => A.delete(ce.key));
    let Vt = wd(qn);
    if (Vt) {
      if (Vt.idx >= he.length) {
        let ce = Ie[Vt.idx - he.length].key;
        b.add(ce);
      }
      return await ln(c, Vt.result, { replace: ee }), { shortCircuited: !0 };
    }
    let { loaderData: sn, errors: go } = yd(c, L, he, Jr, W, Ie, Nl, X);
    X.forEach((ce, Ct) => {
      ce.subscribe((cn) => {
        (cn || ce.done) && X.delete(Ct);
      });
    });
    let Dl = Wc(),
      Il = Hc(K),
      Ll = Dl || Il || Ie.length > 0;
    return Ce(
      { loaderData: sn, errors: go },
      Ll ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function cr(C) {
    return (
      s.v7_fetcherPersist &&
        (Q.set(C, (Q.get(C) || 0) + 1), V.has(C) && V.delete(C)),
      c.fetchers.get(C) || L0
    );
  }
  function fr(C, _, L, F) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    A.has(C) && an(C);
    let H = l || u,
      Y = ms(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        L,
        _,
        F == null ? void 0 : F.relative
      ),
      ee = Rr(H, Y, a);
    if (!ee) {
      Xr(C, _, gt(404, { pathname: Y }));
      return;
    }
    let {
      path: G,
      submission: W,
      error: pe,
    } = dd(s.v7_normalizeFormMethod, !0, Y, F);
    if (pe) {
      Xr(C, _, pe);
      return;
    }
    let Ee = gs(ee, G);
    if (((E = (F && F.preventScrollReset) === !0), W && _t(W.formMethod))) {
      Yr(C, _, G, Ee, ee, W);
      return;
    }
    z.set(C, { routeId: _, path: G }), Gr(C, _, G, Ee, ee, W);
  }
  async function Yr(C, _, L, F, H, Y) {
    if ((et(), z.delete(C), !F.route.action && !F.route.lazy)) {
      let Te = gt(405, { method: Y.formMethod, pathname: L, routeId: _ });
      Xr(C, _, Te);
      return;
    }
    let ee = c.fetchers.get(C),
      G = W0(Y, ee);
    c.fetchers.set(C, G), se({ fetchers: new Map(c.fetchers) });
    let W = new AbortController(),
      pe = ci(e.history, L, W.signal, Y);
    A.set(C, W);
    let Ee = B,
      ie = await si('action', pe, F, H, o, i, a);
    if (pe.signal.aborted) {
      A.get(C) === W && A.delete(C);
      return;
    }
    if (V.has(C)) {
      c.fetchers.set(C, pn(void 0)), se({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (Dr(ie))
      if ((A.delete(C), K > Ee)) {
        let Te = pn(void 0);
        c.fetchers.set(C, Te), se({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        b.add(C);
        let Te = fi(Y);
        return (
          c.fetchers.set(C, Te),
          se({ fetchers: new Map(c.fetchers) }),
          ln(c, ie, { fetcherSubmission: Y })
        );
      }
    if (_i(ie)) {
      Xr(C, _, ie.error);
      return;
    }
    if (Gn(ie)) throw gt(400, { type: 'defer-action' });
    let he = c.navigation.location || c.location,
      Ie = ci(e.history, he, W.signal),
      Qn = l || u,
      qn =
        c.navigation.state !== 'idle'
          ? Rr(Qn, c.navigation.location, a)
          : c.matches;
    te(qn, "Didn't find any matches after fetcher action");
    let Jr = ++B;
    N.set(C, Jr);
    let Nl = fi(Y, ie.data);
    c.fetchers.set(C, Nl);
    let [Vt, sn] = pd(
      e.history,
      c,
      qn,
      Y,
      he,
      D,
      I,
      $,
      z,
      b,
      Qn,
      a,
      { [F.route.id]: ie.data },
      void 0
    );
    sn
      .filter((Te) => Te.key !== C)
      .forEach((Te) => {
        let Zr = Te.key,
          Jc = c.fetchers.get(Zr),
          _m = fi(void 0, Jc ? Jc.data : void 0);
        c.fetchers.set(Zr, _m),
          A.has(Zr) && an(Zr),
          Te.controller && A.set(Zr, Te.controller);
      }),
      se({ fetchers: new Map(c.fetchers) });
    let go = () => sn.forEach((Te) => an(Te.key));
    W.signal.addEventListener('abort', go);
    let {
      results: Dl,
      loaderResults: Il,
      fetcherResults: Ll,
    } = await at(c.matches, qn, Vt, sn, Ie);
    if (W.signal.aborted) return;
    W.signal.removeEventListener('abort', go),
      N.delete(C),
      A.delete(C),
      sn.forEach((Te) => A.delete(Te.key));
    let ce = wd(Dl);
    if (ce) {
      if (ce.idx >= Vt.length) {
        let Te = sn[ce.idx - Vt.length].key;
        b.add(Te);
      }
      return ln(c, ce.result);
    }
    let { loaderData: Ct, errors: cn } = yd(
      c,
      c.matches,
      Vt,
      Il,
      void 0,
      sn,
      Ll,
      X
    );
    if (c.fetchers.has(C)) {
      let Te = pn(ie.data);
      c.fetchers.set(C, Te);
    }
    Hc(Jr),
      c.navigation.state === 'loading' && Jr > K
        ? (te(w, 'Expected pending action'),
          x && x.abort(),
          Be(c.navigation.location, {
            matches: qn,
            loaderData: Ct,
            errors: cn,
            fetchers: new Map(c.fetchers),
          }))
        : (se({
            errors: cn,
            loaderData: gd(c.loaderData, Ct, qn, cn),
            fetchers: new Map(c.fetchers),
          }),
          (D = !1));
  }
  async function Gr(C, _, L, F, H, Y) {
    let ee = c.fetchers.get(C),
      G = fi(Y, ee ? ee.data : void 0);
    c.fetchers.set(C, G), se({ fetchers: new Map(c.fetchers) });
    let W = new AbortController(),
      pe = ci(e.history, L, W.signal);
    A.set(C, W);
    let Ee = B,
      ie = await si('loader', pe, F, H, o, i, a);
    if (
      (Gn(ie) && (ie = (await Dv(ie, pe.signal, !0)) || ie),
      A.get(C) === W && A.delete(C),
      pe.signal.aborted)
    )
      return;
    if (V.has(C)) {
      c.fetchers.set(C, pn(void 0)), se({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (Dr(ie))
      if (K > Ee) {
        let Ie = pn(void 0);
        c.fetchers.set(C, Ie), se({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        b.add(C), await ln(c, ie);
        return;
      }
    if (_i(ie)) {
      Xr(C, _, ie.error);
      return;
    }
    te(!Gn(ie), 'Unhandled fetcher deferred data');
    let he = pn(ie.data);
    c.fetchers.set(C, he), se({ fetchers: new Map(c.fetchers) });
  }
  async function ln(C, _, L) {
    let {
      submission: F,
      fetcherSubmission: H,
      replace: Y,
    } = L === void 0 ? {} : L;
    _.revalidate && (D = !0);
    let ee = Ji(C.location, _.location, { _isRedirect: !0 });
    if ((te(ee, 'Expected a location on the redirect navigation'), n)) {
      let he = !1;
      if (_.reloadDocument) he = !0;
      else if (Tv.test(_.location)) {
        const Ie = e.history.createURL(_.location);
        he = Ie.origin !== t.location.origin || Wr(Ie.pathname, a) == null;
      }
      if (he) {
        Y ? t.location.replace(_.location) : t.location.assign(_.location);
        return;
      }
    }
    x = null;
    let G = Y === !0 ? Me.Replace : Me.Push,
      { formMethod: W, formAction: pe, formEncType: Ee } = C.navigation;
    !F && !H && W && pe && Ee && (F = xd(C.navigation));
    let ie = F || H;
    if (I0.has(_.status) && ie && _t(ie.formMethod))
      await de(G, ee, {
        submission: Ce({}, ie, { formAction: _.location }),
        preventScrollReset: E,
      });
    else {
      let he = sa(ee, F);
      await de(G, ee, {
        overrideNavigation: he,
        fetcherSubmission: H,
        preventScrollReset: E,
      });
    }
  }
  async function at(C, _, L, F, H) {
    let Y = await Promise.all([
        ...L.map((W) => si('loader', H, W, _, o, i, a)),
        ...F.map((W) =>
          W.matches && W.match && W.controller
            ? si(
                'loader',
                ci(e.history, W.path, W.controller.signal),
                W.match,
                W.matches,
                o,
                i,
                a
              )
            : { type: _e.error, error: gt(404, { pathname: W.path }) }
        ),
      ]),
      ee = Y.slice(0, L.length),
      G = Y.slice(L.length);
    return (
      await Promise.all([
        Ed(
          C,
          L,
          ee,
          ee.map(() => H.signal),
          !1,
          c.loaderData
        ),
        Ed(
          C,
          F.map((W) => W.match),
          G,
          F.map((W) => (W.controller ? W.controller.signal : null)),
          !0
        ),
      ]),
      { results: Y, loaderResults: ee, fetcherResults: G }
    );
  }
  function et() {
    (D = !0),
      I.push(..._l()),
      z.forEach((C, _) => {
        A.has(_) && ($.push(_), an(_));
      });
  }
  function Xr(C, _, L) {
    let F = Mi(c.matches, _);
    mo(C), se({ errors: { [F.route.id]: L }, fetchers: new Map(c.fetchers) });
  }
  function mo(C) {
    let _ = c.fetchers.get(C);
    A.has(C) && !(_ && _.state === 'loading' && N.has(C)) && an(C),
      z.delete(C),
      N.delete(C),
      b.delete(C),
      V.delete(C),
      c.fetchers.delete(C);
  }
  function Rm(C) {
    if (s.v7_fetcherPersist) {
      let _ = (Q.get(C) || 0) - 1;
      _ <= 0 ? (Q.delete(C), V.add(C)) : Q.set(C, _);
    } else mo(C);
    se({ fetchers: new Map(c.fetchers) });
  }
  function an(C) {
    let _ = A.get(C);
    te(_, 'Expected fetch controller: ' + C), _.abort(), A.delete(C);
  }
  function Vc(C) {
    for (let _ of C) {
      let L = cr(_),
        F = pn(L.data);
      c.fetchers.set(_, F);
    }
  }
  function Wc() {
    let C = [],
      _ = !1;
    for (let L of b) {
      let F = c.fetchers.get(L);
      te(F, 'Expected fetcher: ' + L),
        F.state === 'loading' && (b.delete(L), C.push(L), (_ = !0));
    }
    return Vc(C), _;
  }
  function Hc(C) {
    let _ = [];
    for (let [L, F] of N)
      if (F < C) {
        let H = c.fetchers.get(L);
        te(H, 'Expected fetcher: ' + L),
          H.state === 'loading' && (an(L), N.delete(L), _.push(L));
      }
    return Vc(_), _.length > 0;
  }
  function Cm(C, _) {
    let L = c.blockers.get(C) || ai;
    return Z.get(C) !== _ && Z.set(C, _), L;
  }
  function Kc(C) {
    c.blockers.delete(C), Z.delete(C);
  }
  function yo(C, _) {
    let L = c.blockers.get(C) || ai;
    te(
      (L.state === 'unblocked' && _.state === 'blocked') ||
        (L.state === 'blocked' && _.state === 'blocked') ||
        (L.state === 'blocked' && _.state === 'proceeding') ||
        (L.state === 'blocked' && _.state === 'unblocked') ||
        (L.state === 'proceeding' && _.state === 'unblocked'),
      'Invalid blocker state transition: ' + L.state + ' -> ' + _.state
    );
    let F = new Map(c.blockers);
    F.set(C, _), se({ blockers: F });
  }
  function Yc(C) {
    let { currentLocation: _, nextLocation: L, historyAction: F } = C;
    if (Z.size === 0) return;
    Z.size > 1 && or(!1, 'A router only supports one blocker at a time');
    let H = Array.from(Z.entries()),
      [Y, ee] = H[H.length - 1],
      G = c.blockers.get(Y);
    if (
      !(G && G.state === 'proceeding') &&
      ee({ currentLocation: _, nextLocation: L, historyAction: F })
    )
      return Y;
  }
  function _l(C) {
    let _ = [];
    return (
      X.forEach((L, F) => {
        (!C || C(F)) && (L.cancel(), _.push(F), X.delete(F));
      }),
      _
    );
  }
  function Om(C, _, L) {
    if (((d = C), (g = _), (v = L || null), !S && c.navigation === aa)) {
      S = !0;
      let F = Xc(c.location, c.matches);
      F != null && se({ restoreScrollPosition: F });
    }
    return () => {
      (d = null), (g = null), (v = null);
    };
  }
  function Gc(C, _) {
    return (
      (v &&
        v(
          C,
          _.map((F) => s0(F, c.loaderData))
        )) ||
      C.key
    );
  }
  function Tm(C, _) {
    if (d && g) {
      let L = Gc(C, _);
      d[L] = g();
    }
  }
  function Xc(C, _) {
    if (d) {
      let L = Gc(C, _),
        F = d[L];
      if (typeof F == 'number') return F;
    }
    return null;
  }
  function Mm(C) {
    (o = {}), (l = vs(C, i, void 0, o));
  }
  return (
    (y = {
      get basename() {
        return a;
      },
      get state() {
        return c;
      },
      get routes() {
        return u;
      },
      get window() {
        return t;
      },
      initialize: re,
      subscribe: yt,
      enableScrollRestoration: Om,
      navigate: lt,
      fetch: fr,
      revalidate: je,
      createHref: (C) => e.history.createHref(C),
      encodeLocation: (C) => e.history.encodeLocation(C),
      getFetcher: cr,
      deleteFetcher: Rm,
      dispose: ae,
      getBlocker: Cm,
      deleteBlocker: Kc,
      _internalFetchControllers: A,
      _internalActiveDeferreds: X,
      _internalSetRoutes: Mm,
    }),
    y
  );
}
function z0(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function ms(e, t, n, r, i, o, u) {
  let l, a;
  if (o != null && u !== 'path') {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === o)) {
        a = f;
        break;
      }
  } else (l = t), (a = t[t.length - 1]);
  let s = Pc(
    i || '.',
    tl(l).map((f) => f.pathnameBase),
    Wr(e.pathname, n) || e.pathname,
    u === 'path'
  );
  return (
    i == null && ((s.search = e.search), (s.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      a &&
      a.route.index &&
      !Rc(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (s.pathname = s.pathname === '/' ? n : Jt([n, s.pathname])),
    ur(s)
  );
}
function dd(e, t, n, r) {
  if (!r || !z0(r)) return { path: n };
  if (r.formMethod && !B0(r.formMethod))
    return { path: n, error: gt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: gt(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    u = e ? o.toUpperCase() : o.toLowerCase(),
    l = Nv(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!_t(u)) return i();
      let d =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((v, g) => {
              let [S, P] = g;
              return (
                '' +
                v +
                S +
                '=' +
                P +
                `
`
              );
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: u,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!_t(u)) return i();
      try {
        let d = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: u,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  te(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let a, s;
  if (r.formData) (a = ys(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = ys(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = md(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = md(a));
    } catch {
      return i();
    }
  let f = {
    formMethod: u,
    formAction: l,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (_t(f.formMethod)) return { path: n, submission: f };
  let p = on(n);
  return (
    t && p.search && Rc(p.search) && a.append('index', ''),
    (p.search = '?' + a),
    { path: ur(p), submission: f }
  );
}
function b0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function pd(e, t, n, r, i, o, u, l, a, s, f, p, d, v) {
  let g = v ? Object.values(v)[0] : d ? Object.values(d)[0] : void 0,
    S = e.createURL(t.location),
    P = e.createURL(i),
    m = v ? Object.keys(v)[0] : void 0,
    y = b0(n, m).filter((w, E) => {
      if (w.route.lazy) return !0;
      if (w.route.loader == null) return !1;
      if ($0(t.loaderData, t.matches[E], w) || u.some((O) => O === w.route.id))
        return !0;
      let x = t.matches[E],
        k = w;
      return hd(
        w,
        Ce(
          {
            currentUrl: S,
            currentParams: x.params,
            nextUrl: P,
            nextParams: k.params,
          },
          r,
          {
            actionResult: g,
            defaultShouldRevalidate:
              o ||
              S.pathname + S.search === P.pathname + P.search ||
              S.search !== P.search ||
              _v(x, k),
          }
        )
      );
    }),
    c = [];
  return (
    a.forEach((w, E) => {
      if (!n.some((T) => T.route.id === w.routeId)) return;
      let x = Rr(f, w.path, p);
      if (!x) {
        c.push({
          key: E,
          routeId: w.routeId,
          path: w.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let k = t.fetchers.get(E),
        O = gs(x, w.path),
        R = !1;
      s.has(E)
        ? (R = !1)
        : l.includes(E)
        ? (R = !0)
        : k && k.state !== 'idle' && k.data === void 0
        ? (R = o)
        : (R = hd(
            O,
            Ce(
              {
                currentUrl: S,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: P,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: g, defaultShouldRevalidate: o }
            )
          )),
        R &&
          c.push({
            key: E,
            routeId: w.routeId,
            path: w.path,
            matches: x,
            match: O,
            controller: new AbortController(),
          });
    }),
    [y, c]
  );
}
function $0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function _v(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function hd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function vd(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  te(i, 'No route found in manifest');
  let o = {};
  for (let u in r) {
    let a = i[u] !== void 0 && u !== 'hasErrorBoundary';
    or(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        u +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + u + '" will be ignored.')
    ),
      !a && !l0.has(u) && (o[u] = r[u]);
  }
  Object.assign(i, o), Object.assign(i, Ce({}, t(i), { lazy: void 0 }));
}
async function si(e, t, n, r, i, o, u, l) {
  l === void 0 && (l = {});
  let a,
    s,
    f,
    p = (g) => {
      let S,
        P = new Promise((m, h) => (S = h));
      return (
        (f = () => S()),
        t.signal.addEventListener('abort', f),
        Promise.race([
          g({ request: t, params: n.params, context: l.requestContext }),
          P,
        ])
      );
    };
  try {
    let g = n.route[e];
    if (n.route.lazy)
      if (g) {
        let S,
          P = await Promise.all([
            p(g).catch((m) => {
              S = m;
            }),
            vd(n.route, o, i),
          ]);
        if (S) throw S;
        s = P[0];
      } else if ((await vd(n.route, o, i), (g = n.route[e]), g)) s = await p(g);
      else if (e === 'action') {
        let S = new URL(t.url),
          P = S.pathname + S.search;
        throw gt(405, { method: t.method, pathname: P, routeId: n.route.id });
      } else return { type: _e.data, data: void 0 };
    else if (g) s = await p(g);
    else {
      let S = new URL(t.url),
        P = S.pathname + S.search;
      throw gt(404, { pathname: P });
    }
    te(
      s !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (g) {
    (a = _e.error), (s = g);
  } finally {
    f && t.signal.removeEventListener('abort', f);
  }
  if (q0(s)) {
    let g = s.status;
    if (D0.has(g)) {
      let m = s.headers.get('Location');
      if (
        (te(
          m,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !Tv.test(m))
      )
        m = ms(new URL(t.url), r.slice(0, r.indexOf(n) + 1), u, !0, m);
      else if (!l.isStaticRequest) {
        let h = new URL(t.url),
          y = m.startsWith('//') ? new URL(h.protocol + m) : new URL(m),
          c = Wr(y.pathname, u) != null;
        y.origin === h.origin && c && (m = y.pathname + y.search + y.hash);
      }
      if (l.isStaticRequest) throw (s.headers.set('Location', m), s);
      return {
        type: _e.redirect,
        status: g,
        location: m,
        revalidate: s.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: s.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: a === _e.error ? _e.error : _e.data, response: s };
    let S,
      P = s.headers.get('Content-Type');
    return (
      P && /\bapplication\/json\b/.test(P)
        ? (S = await s.json())
        : (S = await s.text()),
      a === _e.error
        ? { type: a, error: new kc(g, s.statusText, S), headers: s.headers }
        : { type: _e.data, data: S, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === _e.error) return { type: a, error: s };
  if (Q0(s)) {
    var d, v;
    return {
      type: _e.deferred,
      deferredData: s,
      statusCode: (d = s.init) == null ? void 0 : d.status,
      headers:
        ((v = s.init) == null ? void 0 : v.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: _e.data, data: s };
}
function ci(e, t, n, r) {
  let i = e.createURL(Nv(t)).toString(),
    o = { signal: n };
  if (r && _t(r.formMethod)) {
    let { formMethod: u, formEncType: l } = r;
    (o.method = u.toUpperCase()),
      l === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': l })),
          (o.body = JSON.stringify(r.json)))
        : l === 'text/plain'
        ? (o.body = r.text)
        : l === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = ys(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function ys(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function md(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function F0(e, t, n, r, i) {
  let o = {},
    u = null,
    l,
    a = !1,
    s = {};
  return (
    n.forEach((f, p) => {
      let d = t[p].route.id;
      if (
        (te(!Dr(f), 'Cannot handle redirect results in processLoaderData'),
        _i(f))
      ) {
        let v = Mi(e, d),
          g = f.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (u = u || {}),
          u[v.route.id] == null && (u[v.route.id] = g),
          (o[d] = void 0),
          a || ((a = !0), (l = Cv(f.error) ? f.error.status : 500)),
          f.headers && (s[d] = f.headers);
      } else
        Gn(f)
          ? (i.set(d, f.deferredData), (o[d] = f.deferredData.data))
          : (o[d] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !a &&
            (l = f.statusCode),
          f.headers && (s[d] = f.headers);
    }),
    r && ((u = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: u, statusCode: l || 200, loaderHeaders: s }
  );
}
function yd(e, t, n, r, i, o, u, l) {
  let { loaderData: a, errors: s } = F0(t, n, r, i, l);
  for (let f = 0; f < o.length; f++) {
    let { key: p, match: d, controller: v } = o[f];
    te(
      u !== void 0 && u[f] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let g = u[f];
    if (!(v && v.signal.aborted))
      if (_i(g)) {
        let S = Mi(e.matches, d == null ? void 0 : d.route.id);
        (s && s[S.route.id]) || (s = Ce({}, s, { [S.route.id]: g.error })),
          e.fetchers.delete(p);
      } else if (Dr(g)) te(!1, 'Unhandled fetcher revalidation redirect');
      else if (Gn(g)) te(!1, 'Unhandled fetcher deferred data');
      else {
        let S = pn(g.data);
        e.fetchers.set(p, S);
      }
  }
  return { loaderData: a, errors: s };
}
function gd(e, t, n, r) {
  let i = Ce({}, t);
  for (let o of n) {
    let u = o.route.id;
    if (
      (t.hasOwnProperty(u)
        ? t[u] !== void 0 && (i[u] = t[u])
        : e[u] !== void 0 && o.route.loader && (i[u] = e[u]),
      r && r.hasOwnProperty(u))
    )
      break;
  }
  return i;
}
function Mi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Sd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function gt(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    u = 'Unknown Server Error',
    l = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((u = 'Bad Request'),
        i && n && r
          ? (l =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (l = 'defer() is not supported in actions')
          : o === 'invalid-body' && (l = 'Unable to encode submission body'))
      : e === 403
      ? ((u = 'Forbidden'),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((u = 'Not Found'), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((u = 'Method Not Allowed'),
        i && n && r
          ? (l =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new kc(e || 500, u, new Error(l), !0)
  );
}
function wd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Dr(n)) return { result: n, idx: t };
  }
}
function Nv(e) {
  let t = typeof e == 'string' ? on(e) : e;
  return ur(Ce({}, t, { hash: '' }));
}
function U0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function Gn(e) {
  return e.type === _e.deferred;
}
function _i(e) {
  return e.type === _e.error;
}
function Dr(e) {
  return (e && e.type) === _e.redirect;
}
function Q0(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function q0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function B0(e) {
  return N0.has(e.toLowerCase());
}
function _t(e) {
  return M0.has(e.toLowerCase());
}
async function Ed(e, t, n, r, i, o) {
  for (let u = 0; u < n.length; u++) {
    let l = n[u],
      a = t[u];
    if (!a) continue;
    let s = e.find((p) => p.route.id === a.route.id),
      f = s != null && !_v(s, a) && (o && o[a.route.id]) !== void 0;
    if (Gn(l) && (i || f)) {
      let p = r[u];
      te(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Dv(l, p, i).then((d) => {
          d && (n[u] = d || n[u]);
        });
    }
  }
}
async function Dv(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: _e.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: _e.error, error: i };
      }
    return { type: _e.data, data: e.deferredData.data };
  }
}
function Rc(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function gs(e, t) {
  let n = typeof t == 'string' ? on(t).search : t.search;
  if (e[e.length - 1].route.index && Rc(n || '')) return e[e.length - 1];
  let r = tl(e);
  return r[r.length - 1];
}
function xd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: u,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (u !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: u,
        text: void 0,
      };
  }
}
function sa(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function V0(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function fi(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function W0(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function pn(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function H0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Mv);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function K0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Mv, JSON.stringify(n));
    } catch (r) {
      or(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ku() {
  return (
    (ku = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ku.apply(this, arguments)
  );
}
const nl = M.createContext(null),
  Iv = M.createContext(null),
  Hr = M.createContext(null),
  rl = M.createContext(null),
  un = M.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Lv = M.createContext(null);
function Y0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  fo() || te(!1);
  let { basename: r, navigator: i } = M.useContext(Hr),
    { hash: o, pathname: u, search: l } = zv(e, { relative: n }),
    a = u;
  return (
    r !== '/' && (a = u === '/' ? r : Jt([r, u])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function fo() {
  return M.useContext(rl) != null;
}
function il() {
  return fo() || te(!1), M.useContext(rl).location;
}
function Av(e) {
  M.useContext(Hr).static || M.useLayoutEffect(e);
}
function jv() {
  let { isDataRoute: e } = M.useContext(un);
  return e ? c1() : G0();
}
function G0() {
  fo() || te(!1);
  let e = M.useContext(nl),
    { basename: t, navigator: n } = M.useContext(Hr),
    { matches: r } = M.useContext(un),
    { pathname: i } = il(),
    o = JSON.stringify(tl(r).map((a) => a.pathnameBase)),
    u = M.useRef(!1);
  return (
    Av(() => {
      u.current = !0;
    }),
    M.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !u.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let f = Pc(a, JSON.parse(o), i, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Jt([t, f.pathname])),
          (s.replace ? n.replace : n.push)(f, s.state, s);
      },
      [t, n, o, i, e]
    )
  );
}
const X0 = M.createContext(null);
function J0(e) {
  let t = M.useContext(un).outlet;
  return t && M.createElement(X0.Provider, { value: e }, t);
}
function Z0() {
  let { matches: e } = M.useContext(un),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function zv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = M.useContext(un),
    { pathname: i } = il(),
    o = JSON.stringify(tl(r).map((u) => u.pathnameBase));
  return M.useMemo(() => Pc(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function e1(e, t, n) {
  fo() || te(!1);
  let { navigator: r } = M.useContext(Hr),
    { matches: i } = M.useContext(un),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : '/';
  o && o.route;
  let a = il(),
    s;
  if (t) {
    var f;
    let S = typeof t == 'string' ? on(t) : t;
    l === '/' || ((f = S.pathname) != null && f.startsWith(l)) || te(!1),
      (s = S);
  } else s = a;
  let p = s.pathname || '/',
    d = l === '/' ? p : p.slice(l.length) || '/',
    v = Rr(e, { pathname: d }),
    g = o1(
      v &&
        v.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, u, S.params),
            pathname: Jt([
              l,
              r.encodeLocation
                ? r.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === '/'
                ? l
                : Jt([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && g
    ? M.createElement(
        rl.Provider,
        {
          value: {
            location: ku(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              s
            ),
            navigationType: Me.Pop,
          },
        },
        g
      )
    : g;
}
function t1() {
  let e = s1(),
    t = Cv(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return M.createElement(
    M.Fragment,
    null,
    M.createElement('h2', null, 'Unexpected Application Error!'),
    M.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? M.createElement('pre', { style: i }, n) : null,
    o
  );
}
const n1 = M.createElement(t1, null);
class r1 extends M.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? M.createElement(
          un.Provider,
          { value: this.props.routeContext },
          M.createElement(Lv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function i1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = M.useContext(nl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    M.createElement(un.Provider, { value: t }, r)
  );
}
function o1(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    u = (r = n) == null ? void 0 : r.errors;
  if (u != null) {
    let l = o.findIndex(
      (a) => a.route.id && (u == null ? void 0 : u[a.route.id])
    );
    l >= 0 || te(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, a, s) => {
    let f = a.route.id ? (u == null ? void 0 : u[a.route.id]) : null,
      p = null;
    n && (p = a.route.errorElement || n1);
    let d = t.concat(o.slice(0, s + 1)),
      v = () => {
        let g;
        return (
          f
            ? (g = p)
            : a.route.Component
            ? (g = M.createElement(a.route.Component, null))
            : a.route.element
            ? (g = a.route.element)
            : (g = l),
          M.createElement(i1, {
            match: a,
            routeContext: { outlet: l, matches: d, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? M.createElement(r1, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: f,
          children: v(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var bv = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(bv || {}),
  Ru = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Ru || {});
function u1(e) {
  let t = M.useContext(nl);
  return t || te(!1), t;
}
function l1(e) {
  let t = M.useContext(Iv);
  return t || te(!1), t;
}
function a1(e) {
  let t = M.useContext(un);
  return t || te(!1), t;
}
function $v(e) {
  let t = a1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || te(!1), n.route.id;
}
function s1() {
  var e;
  let t = M.useContext(Lv),
    n = l1(Ru.UseRouteError),
    r = $v(Ru.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function c1() {
  let { router: e } = u1(bv.UseNavigateStable),
    t = $v(Ru.UseNavigateStable),
    n = M.useRef(!1);
  return (
    Av(() => {
      n.current = !0;
    }),
    M.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, ku({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Fv(e) {
  return J0(e.context);
}
function f1(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = Me.Pop,
    navigator: o,
    static: u = !1,
  } = e;
  fo() && te(!1);
  let l = t.replace(/^\/*/, '/'),
    a = M.useMemo(() => ({ basename: l, navigator: o, static: u }), [l, o, u]);
  typeof r == 'string' && (r = on(r));
  let {
      pathname: s = '/',
      search: f = '',
      hash: p = '',
      state: d = null,
      key: v = 'default',
    } = r,
    g = M.useMemo(() => {
      let S = Wr(s, l);
      return S == null
        ? null
        : {
            location: { pathname: S, search: f, hash: p, state: d, key: v },
            navigationType: i,
          };
    }, [l, s, f, p, d, v, i]);
  return g == null
    ? null
    : M.createElement(
        Hr.Provider,
        { value: a },
        M.createElement(rl.Provider, { children: n, value: g })
      );
}
new Promise(() => {});
function d1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: M.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: M.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zi() {
  return (
    (Zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zi.apply(this, arguments)
  );
}
function p1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function h1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function v1(e, t) {
  return e.button === 0 && (!t || t === '_self') && !h1(e);
}
const m1 = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
  'unstable_viewTransition',
];
function y1(e, t) {
  return j0({
    basename: t == null ? void 0 : t.basename,
    future: Zi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: i0({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || g1(),
    routes: e,
    mapRouteProperties: d1,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function g1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Zi({}, t, { errors: S1(t.errors) })), t;
}
function S1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new kc(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == 'function')
          try {
            let u = new o(i.message);
            (u.stack = ''), (n[r] = u);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const w1 = M.createContext({ isTransitioning: !1 }),
  E1 = M.createContext(new Map()),
  x1 = 'startTransition',
  Pd = Km[x1];
function P1(e) {
  Pd ? Pd(e) : e();
}
class k1 {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function R1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = M.useState(n.state),
    [u, l] = M.useState(),
    [a, s] = M.useState({ isTransitioning: !1 }),
    [f, p] = M.useState(),
    [d, v] = M.useState(),
    [g, S] = M.useState(),
    P = M.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    h = M.useCallback(
      (x) => {
        m ? P1(x) : x();
      },
      [m]
    ),
    y = M.useCallback(
      (x, k) => {
        let { deletedFetchers: O, unstable_viewTransitionOpts: R } = k;
        O.forEach((T) => P.current.delete(T)),
          x.fetchers.forEach((T, D) => {
            T.data !== void 0 && P.current.set(D, T.data);
          }),
          !R ||
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function'
            ? h(() => o(x))
            : d && f
            ? (f.resolve(),
              d.skipTransition(),
              S({
                state: x,
                currentLocation: R.currentLocation,
                nextLocation: R.nextLocation,
              }))
            : (l(x),
              s({
                isTransitioning: !0,
                currentLocation: R.currentLocation,
                nextLocation: R.nextLocation,
              }));
      },
      [n.window, d, f, P, h]
    );
  M.useLayoutEffect(() => n.subscribe(y), [n, y]),
    M.useEffect(() => {
      a.isTransitioning && p(new k1());
    }, [a.isTransitioning]),
    M.useEffect(() => {
      if (f && u && n.window) {
        let x = u,
          k = f.promise,
          O = n.window.document.startViewTransition(async () => {
            h(() => o(x)), await k;
          });
        O.finished.finally(() => {
          p(void 0), v(void 0), l(void 0), s({ isTransitioning: !1 });
        }),
          v(O);
      }
    }, [h, u, f, n.window]),
    M.useEffect(() => {
      f && u && i.location.key === u.location.key && f.resolve();
    }, [f, d, i.location, u]),
    M.useEffect(() => {
      !a.isTransitioning &&
        g &&
        (l(g.state),
        s({
          isTransitioning: !0,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        S(void 0));
    }, [a.isTransitioning, g]);
  let c = M.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (x) => n.navigate(x),
        push: (x, k, O) =>
          n.navigate(x, {
            state: k,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (x, k, O) =>
          n.navigate(x, {
            replace: !0,
            state: k,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n]
    ),
    w = n.basename || '/',
    E = M.useMemo(
      () => ({ router: n, navigator: c, static: !1, basename: w }),
      [n, c, w]
    );
  return M.createElement(
    M.Fragment,
    null,
    M.createElement(
      nl.Provider,
      { value: E },
      M.createElement(
        Iv.Provider,
        { value: i },
        M.createElement(
          E1.Provider,
          { value: P.current },
          M.createElement(
            w1.Provider,
            { value: a },
            M.createElement(
              f1,
              {
                basename: w,
                location: i.location,
                navigationType: i.historyAction,
                navigator: c,
              },
              i.initialized
                ? M.createElement(C1, { routes: n.routes, state: i })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function C1(e) {
  let { routes: t, state: n } = e;
  return e1(t, void 0, n);
}
const O1 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  T1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ni = M.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: u,
        state: l,
        target: a,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: p,
      } = t,
      d = p1(t, m1),
      { basename: v } = M.useContext(Hr),
      g,
      S = !1;
    if (typeof s == 'string' && T1.test(s) && ((g = s), O1))
      try {
        let y = new URL(window.location.href),
          c = s.startsWith('//') ? new URL(y.protocol + s) : new URL(s),
          w = Wr(c.pathname, v);
        c.origin === y.origin && w != null
          ? (s = w + c.search + c.hash)
          : (S = !0);
      } catch {}
    let P = Y0(s, { relative: i }),
      m = M1(s, {
        replace: u,
        state: l,
        target: a,
        preventScrollReset: f,
        relative: i,
        unstable_viewTransition: p,
      });
    function h(y) {
      r && r(y), y.defaultPrevented || m(y);
    }
    return M.createElement(
      'a',
      Zi({}, d, { href: g || P, onClick: S || o ? r : h, ref: n, target: a })
    );
  });
var kd;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(kd || (kd = {}));
var Rd;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Rd || (Rd = {}));
function M1(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: u,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = jv(),
    s = il(),
    f = zv(e, { relative: u });
  return M.useCallback(
    (p) => {
      if (v1(p, n)) {
        p.preventDefault();
        let d = r !== void 0 ? r : ur(s) === ur(f);
        a(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: u,
          unstable_viewTransition: l,
        });
      }
    },
    [s, a, f, r, i, n, e, o, u, l]
  );
}
const _1 =
  '' + new URL('404-page-not-found-5a2243bd.png', import.meta.url).href;
const Uv = () =>
  q.jsxs('div', {
    className: 'header',
    children: [
      q.jsx(Ni, {
        className: 'nav-item',
        to: '/RSSchool_Stage3/dist/',
        children: 'Home',
      }),
      q.jsx(Ni, {
        className: 'nav-item',
        to: '/RSSchool_Stage3/dist/posts',
        children: 'Posts',
      }),
      q.jsx(Ni, {
        className: 'nav-item',
        to: '/RSSchool_Stage3/dist/add',
        children: 'Add Post',
      }),
    ],
  });
function N1() {
  return q.jsxs('div', {
    className: 'error-page',
    children: [
      q.jsx(Uv, {}),
      q.jsxs('div', {
        className: 'error-page-main',
        children: [
          q.jsx('img', { src: _1, alt: 'img', className: 'error-page-img' }),
          q.jsx(Ni, {
            className: 'error-back-btn',
            to: '/RSSchool_Stage3/dist/',
            children: 'Back',
          }),
        ],
      }),
    ],
  });
}
const D1 = () =>
  q.jsxs('div', {
    children: [
      q.jsx(Uv, {}),
      q.jsx('div', { className: 'container', children: q.jsx(Fv, {}) }),
    ],
  });
var Qv = { exports: {} },
  qv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ur = M;
function I1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var L1 = typeof Object.is == 'function' ? Object.is : I1,
  A1 = Ur.useState,
  j1 = Ur.useEffect,
  z1 = Ur.useLayoutEffect,
  b1 = Ur.useDebugValue;
function $1(e, t) {
  var n = t(),
    r = A1({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    z1(
      function () {
        (i.value = n), (i.getSnapshot = t), ca(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    j1(
      function () {
        return (
          ca(i) && o({ inst: i }),
          e(function () {
            ca(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    b1(n),
    n
  );
}
function ca(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !L1(e, n);
  } catch {
    return !0;
  }
}
function F1(e, t) {
  return t();
}
var U1 =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? F1
    : $1;
qv.useSyncExternalStore =
  Ur.useSyncExternalStore !== void 0 ? Ur.useSyncExternalStore : U1;
Qv.exports = qv;
var Q1 = Qv.exports,
  Bv = { exports: {} },
  Vv = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ol = M,
  q1 = Q1;
function B1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var V1 = typeof Object.is == 'function' ? Object.is : B1,
  W1 = q1.useSyncExternalStore,
  H1 = ol.useRef,
  K1 = ol.useEffect,
  Y1 = ol.useMemo,
  G1 = ol.useDebugValue;
Vv.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = H1(null);
  if (o.current === null) {
    var u = { hasValue: !1, value: null };
    o.current = u;
  } else u = o.current;
  o = Y1(
    function () {
      function a(v) {
        if (!s) {
          if (((s = !0), (f = v), (v = r(v)), i !== void 0 && u.hasValue)) {
            var g = u.value;
            if (i(g, v)) return (p = g);
          }
          return (p = v);
        }
        if (((g = p), V1(f, v))) return g;
        var S = r(v);
        return i !== void 0 && i(g, S) ? g : ((f = v), (p = S));
      }
      var s = !1,
        f,
        p,
        d = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        d === null
          ? void 0
          : function () {
              return a(d());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = W1(e, o[0], o[1]);
  return (
    K1(
      function () {
        (u.hasValue = !0), (u.value = l);
      },
      [l]
    ),
    G1(l),
    l
  );
};
Bv.exports = Vv;
var X1 = Bv.exports;
function J1(e) {
  e();
}
let Wv = J1;
const Z1 = (e) => (Wv = e),
  eS = () => Wv,
  Cd = Symbol.for('react-redux-context'),
  Od = typeof globalThis < 'u' ? globalThis : {};
function tS() {
  var e;
  if (!M.createContext) return {};
  const t = (e = Od[Cd]) != null ? e : (Od[Cd] = new Map());
  let n = t.get(M.createContext);
  return n || ((n = M.createContext(null)), t.set(M.createContext, n)), n;
}
const Ln = tS();
function Cc(e = Ln) {
  return function () {
    return M.useContext(e);
  };
}
const Hv = Cc(),
  nS = () => {
    throw new Error('uSES not initialized!');
  };
let Kv = nS;
const rS = (e) => {
    Kv = e;
  },
  iS = (e, t) => e === t;
function oS(e = Ln) {
  const t = e === Ln ? Hv : Cc(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = iS,
        stabilityCheck: u = void 0,
        noopCheck: l = void 0,
      } = typeof i == 'function' ? { equalityFn: i } : i,
      {
        store: a,
        subscription: s,
        getServerState: f,
        stabilityCheck: p,
        noopCheck: d,
      } = t();
    M.useRef(!0);
    const v = M.useCallback(
        {
          [r.name](S) {
            return r(S);
          },
        }[r.name],
        [r, p, u]
      ),
      g = Kv(s.addNestedSub, a.getState, f || a.getState, v, o);
    return M.useDebugValue(g), g;
  };
}
const Oc = oS();
var Yv = { exports: {} },
  le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $e = typeof Symbol == 'function' && Symbol.for,
  Tc = $e ? Symbol.for('react.element') : 60103,
  Mc = $e ? Symbol.for('react.portal') : 60106,
  ul = $e ? Symbol.for('react.fragment') : 60107,
  ll = $e ? Symbol.for('react.strict_mode') : 60108,
  al = $e ? Symbol.for('react.profiler') : 60114,
  sl = $e ? Symbol.for('react.provider') : 60109,
  cl = $e ? Symbol.for('react.context') : 60110,
  _c = $e ? Symbol.for('react.async_mode') : 60111,
  fl = $e ? Symbol.for('react.concurrent_mode') : 60111,
  dl = $e ? Symbol.for('react.forward_ref') : 60112,
  pl = $e ? Symbol.for('react.suspense') : 60113,
  uS = $e ? Symbol.for('react.suspense_list') : 60120,
  hl = $e ? Symbol.for('react.memo') : 60115,
  vl = $e ? Symbol.for('react.lazy') : 60116,
  lS = $e ? Symbol.for('react.block') : 60121,
  aS = $e ? Symbol.for('react.fundamental') : 60117,
  sS = $e ? Symbol.for('react.responder') : 60118,
  cS = $e ? Symbol.for('react.scope') : 60119;
function mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Tc:
        switch (((e = e.type), e)) {
          case _c:
          case fl:
          case ul:
          case al:
          case ll:
          case pl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case cl:
              case dl:
              case vl:
              case hl:
              case sl:
                return e;
              default:
                return t;
            }
        }
      case Mc:
        return t;
    }
  }
}
function Gv(e) {
  return mt(e) === fl;
}
le.AsyncMode = _c;
le.ConcurrentMode = fl;
le.ContextConsumer = cl;
le.ContextProvider = sl;
le.Element = Tc;
le.ForwardRef = dl;
le.Fragment = ul;
le.Lazy = vl;
le.Memo = hl;
le.Portal = Mc;
le.Profiler = al;
le.StrictMode = ll;
le.Suspense = pl;
le.isAsyncMode = function (e) {
  return Gv(e) || mt(e) === _c;
};
le.isConcurrentMode = Gv;
le.isContextConsumer = function (e) {
  return mt(e) === cl;
};
le.isContextProvider = function (e) {
  return mt(e) === sl;
};
le.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tc;
};
le.isForwardRef = function (e) {
  return mt(e) === dl;
};
le.isFragment = function (e) {
  return mt(e) === ul;
};
le.isLazy = function (e) {
  return mt(e) === vl;
};
le.isMemo = function (e) {
  return mt(e) === hl;
};
le.isPortal = function (e) {
  return mt(e) === Mc;
};
le.isProfiler = function (e) {
  return mt(e) === al;
};
le.isStrictMode = function (e) {
  return mt(e) === ll;
};
le.isSuspense = function (e) {
  return mt(e) === pl;
};
le.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ul ||
    e === fl ||
    e === al ||
    e === ll ||
    e === pl ||
    e === uS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === vl ||
        e.$$typeof === hl ||
        e.$$typeof === sl ||
        e.$$typeof === cl ||
        e.$$typeof === dl ||
        e.$$typeof === aS ||
        e.$$typeof === sS ||
        e.$$typeof === cS ||
        e.$$typeof === lS))
  );
};
le.typeOf = mt;
Yv.exports = le;
var fS = Yv.exports,
  Xv = fS,
  dS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  pS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Jv = {};
Jv[Xv.ForwardRef] = dS;
Jv[Xv.Memo] = pS;
var fe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nc = Symbol.for('react.element'),
  Dc = Symbol.for('react.portal'),
  ml = Symbol.for('react.fragment'),
  yl = Symbol.for('react.strict_mode'),
  gl = Symbol.for('react.profiler'),
  Sl = Symbol.for('react.provider'),
  wl = Symbol.for('react.context'),
  hS = Symbol.for('react.server_context'),
  El = Symbol.for('react.forward_ref'),
  xl = Symbol.for('react.suspense'),
  Pl = Symbol.for('react.suspense_list'),
  kl = Symbol.for('react.memo'),
  Rl = Symbol.for('react.lazy'),
  vS = Symbol.for('react.offscreen'),
  Zv;
Zv = Symbol.for('react.module.reference');
function Rt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Nc:
        switch (((e = e.type), e)) {
          case ml:
          case gl:
          case yl:
          case xl:
          case Pl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case hS:
              case wl:
              case El:
              case Rl:
              case kl:
              case Sl:
                return e;
              default:
                return t;
            }
        }
      case Dc:
        return t;
    }
  }
}
fe.ContextConsumer = wl;
fe.ContextProvider = Sl;
fe.Element = Nc;
fe.ForwardRef = El;
fe.Fragment = ml;
fe.Lazy = Rl;
fe.Memo = kl;
fe.Portal = Dc;
fe.Profiler = gl;
fe.StrictMode = yl;
fe.Suspense = xl;
fe.SuspenseList = Pl;
fe.isAsyncMode = function () {
  return !1;
};
fe.isConcurrentMode = function () {
  return !1;
};
fe.isContextConsumer = function (e) {
  return Rt(e) === wl;
};
fe.isContextProvider = function (e) {
  return Rt(e) === Sl;
};
fe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Nc;
};
fe.isForwardRef = function (e) {
  return Rt(e) === El;
};
fe.isFragment = function (e) {
  return Rt(e) === ml;
};
fe.isLazy = function (e) {
  return Rt(e) === Rl;
};
fe.isMemo = function (e) {
  return Rt(e) === kl;
};
fe.isPortal = function (e) {
  return Rt(e) === Dc;
};
fe.isProfiler = function (e) {
  return Rt(e) === gl;
};
fe.isStrictMode = function (e) {
  return Rt(e) === yl;
};
fe.isSuspense = function (e) {
  return Rt(e) === xl;
};
fe.isSuspenseList = function (e) {
  return Rt(e) === Pl;
};
fe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ml ||
    e === gl ||
    e === yl ||
    e === xl ||
    e === Pl ||
    e === vS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Rl ||
        e.$$typeof === kl ||
        e.$$typeof === Sl ||
        e.$$typeof === wl ||
        e.$$typeof === El ||
        e.$$typeof === Zv ||
        e.getModuleId !== void 0))
  );
};
fe.typeOf = Rt;
function mS() {
  const e = eS();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Td = { notify() {}, get: () => [] };
function yS(e, t) {
  let n,
    r = Td,
    i = 0,
    o = !1;
  function u(S) {
    f();
    const P = r.subscribe(S);
    let m = !1;
    return () => {
      m || ((m = !0), P(), p());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    g.onStateChange && g.onStateChange();
  }
  function s() {
    return o;
  }
  function f() {
    i++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = mS()));
  }
  function p() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Td));
  }
  function d() {
    o || ((o = !0), f());
  }
  function v() {
    o && ((o = !1), p());
  }
  const g = {
    addNestedSub: u,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return g;
}
const gS =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  SS = gS ? M.useLayoutEffect : M.useEffect;
function Md(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Cu(e, t) {
  if (Md(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Md(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function wS({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  noopCheck: o = 'once',
}) {
  const u = M.useMemo(() => {
      const s = yS(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    l = M.useMemo(() => e.getState(), [e]);
  SS(() => {
    const { subscription: s } = u;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      l !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [u, l]);
  const a = t || Ln;
  return M.createElement(a.Provider, { value: u }, n);
}
function em(e = Ln) {
  const t = e === Ln ? Hv : Cc(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const tm = em();
function ES(e = Ln) {
  const t = e === Ln ? tm : em(e);
  return function () {
    return t().dispatch;
  };
}
const Ic = ES();
rS(X1.useSyncExternalStoreWithSelector);
Z1(xc.unstable_batchedUpdates);
function Ue(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function At(e) {
  return !!e && !!e[ye];
}
function jt(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        i === Object ||
        (typeof i == 'function' && Function.toString.call(i) === _S)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Di] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Di]) ||
      Cl(e) ||
      Ol(e))
  );
}
function xS(e) {
  return At(e) || Ue(23, e), e[ye].t;
}
function An(e, t, n) {
  n === void 0 && (n = !1),
    jn(e) === 0
      ? (n ? Object.keys : Ir)(e).forEach(function (r) {
          (n && typeof r == 'symbol') || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function jn(e) {
  var t = e[ye];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Cl(e)
    ? 2
    : Ol(e)
    ? 3
    : 0;
}
function _n(e, t) {
  return jn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Jo(e, t) {
  return jn(e) === 2 ? e.get(t) : e[t];
}
function nm(e, t, n) {
  var r = jn(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function rm(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Cl(e) {
  return TS && e instanceof Map;
}
function Ol(e) {
  return MS && e instanceof Set;
}
function Wn(e) {
  return e.o || e.t;
}
function Lc(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = om(e);
  delete t[ye];
  for (var n = Ir(t), r = 0; r < n.length; r++) {
    var i = n[r],
      o = t[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Ac(e, t) {
  return (
    t === void 0 && (t = !1),
    jc(e) ||
      At(e) ||
      !jt(e) ||
      (jn(e) > 1 && (e.set = e.add = e.clear = e.delete = PS),
      Object.freeze(e),
      t &&
        An(
          e,
          function (n, r) {
            return Ac(r, !0);
          },
          !0
        )),
    e
  );
}
function PS() {
  Ue(2);
}
function jc(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function qt(e) {
  var t = xs[e];
  return t || Ue(18, e), t;
}
function im(e, t) {
  xs[e] || (xs[e] = t);
}
function Ss() {
  return eo;
}
function fa(e, t) {
  t && (qt('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function Ou(e) {
  ws(e), e.p.forEach(kS), (e.p = null);
}
function ws(e) {
  e === eo && (eo = e.l);
}
function _d(e) {
  return (eo = { p: [], l: eo, h: e, m: !0, _: 0 });
}
function kS(e) {
  var t = e[ye];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function da(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || qt('ES5').S(t, e, r),
    r
      ? (n[ye].P && (Ou(t), Ue(4)),
        jt(e) && ((e = Tu(t, e)), t.l || Mu(t, e)),
        t.u && qt('Patches').M(n[ye].t, e, t.u, t.s))
      : (e = Tu(t, n, [])),
    Ou(t),
    t.u && t.v(t.u, t.s),
    e !== bc ? e : void 0
  );
}
function Tu(e, t, n) {
  if (jc(t)) return t;
  var r = t[ye];
  if (!r)
    return (
      An(
        t,
        function (l, a) {
          return Nd(e, r, t, l, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Mu(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = Lc(r.k)) : r.o,
      o = i,
      u = !1;
    r.i === 3 && ((o = new Set(i)), i.clear(), (u = !0)),
      An(o, function (l, a) {
        return Nd(e, r, i, l, a, n, u);
      }),
      Mu(e, i, !1),
      n && e.u && qt('Patches').N(r, n, e.u, e.s);
  }
  return r.o;
}
function Nd(e, t, n, r, i, o, u) {
  if (At(i)) {
    var l = Tu(e, i, o && t && t.i !== 3 && !_n(t.R, r) ? o.concat(r) : void 0);
    if ((nm(n, r, l), !At(l))) return;
    e.m = !1;
  } else u && n.add(i);
  if (jt(i) && !jc(i)) {
    if (!e.h.D && e._ < 1) return;
    Tu(e, i), (t && t.A.l) || Mu(e, i);
  }
}
function Mu(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Ac(t, n);
}
function pa(e, t) {
  var n = e[ye];
  return (n ? Wn(n) : e)[t];
}
function Dd(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Sn(e) {
  e.P || ((e.P = !0), e.l && Sn(e.l));
}
function ha(e) {
  e.o || (e.o = Lc(e.t));
}
function Es(e, t, n) {
  var r = Cl(t)
    ? qt('MapSet').F(t, n)
    : Ol(t)
    ? qt('MapSet').T(t, n)
    : e.O
    ? (function (i, o) {
        var u = Array.isArray(i),
          l = {
            i: u ? 1 : 0,
            A: o ? o.A : Ss(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = l,
          s = to;
        u && ((a = [l]), (s = gi));
        var f = Proxy.revocable(a, s),
          p = f.revoke,
          d = f.proxy;
        return (l.k = d), (l.j = p), d;
      })(t, n)
    : qt('ES5').J(t, n);
  return (n ? n.A : Ss()).p.push(r), r;
}
function RS(e) {
  return (
    At(e) || Ue(22, e),
    (function t(n) {
      if (!jt(n)) return n;
      var r,
        i = n[ye],
        o = jn(n);
      if (i) {
        if (!i.P && (i.i < 4 || !qt('ES5').K(i))) return i.t;
        (i.I = !0), (r = Id(n, o)), (i.I = !1);
      } else r = Id(n, o);
      return (
        An(r, function (u, l) {
          (i && Jo(i.t, u) === l) || nm(r, u, t(l));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Id(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Lc(e);
}
function CS() {
  function e(o, u) {
    var l = i[o];
    return (
      l
        ? (l.enumerable = u)
        : (i[o] = l =
            {
              configurable: !0,
              enumerable: u,
              get: function () {
                var a = this[ye];
                return to.get(a, o);
              },
              set: function (a) {
                var s = this[ye];
                to.set(s, o, a);
              },
            }),
      l
    );
  }
  function t(o) {
    for (var u = o.length - 1; u >= 0; u--) {
      var l = o[u][ye];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && Sn(l);
            break;
          case 4:
            n(l) && Sn(l);
        }
    }
  }
  function n(o) {
    for (var u = o.t, l = o.k, a = Ir(l), s = a.length - 1; s >= 0; s--) {
      var f = a[s];
      if (f !== ye) {
        var p = u[f];
        if (p === void 0 && !_n(u, f)) return !0;
        var d = l[f],
          v = d && d[ye];
        if (v ? v.t !== p : !rm(d, p)) return !0;
      }
    }
    var g = !!u[ye];
    return a.length !== Ir(u).length + (g ? 0 : 1);
  }
  function r(o) {
    var u = o.k;
    if (u.length !== o.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(u, u.length - 1);
    if (l && !l.get) return !0;
    for (var a = 0; a < u.length; a++) if (!u.hasOwnProperty(a)) return !0;
    return !1;
  }
  var i = {};
  im('ES5', {
    J: function (o, u) {
      var l = Array.isArray(o),
        a = (function (f, p) {
          if (f) {
            for (var d = Array(p.length), v = 0; v < p.length; v++)
              Object.defineProperty(d, '' + v, e(v, !0));
            return d;
          }
          var g = om(p);
          delete g[ye];
          for (var S = Ir(g), P = 0; P < S.length; P++) {
            var m = S[P];
            g[m] = e(m, f || !!g[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(p), g);
        })(l, o),
        s = {
          i: l ? 5 : 4,
          A: u ? u.A : Ss(),
          P: !1,
          I: !1,
          R: {},
          l: u,
          t: o,
          k: a,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(a, ye, { value: s, writable: !0 }), a;
    },
    S: function (o, u, l) {
      l
        ? At(u) && u[ye].A === o && t(o.p)
        : (o.u &&
            (function a(s) {
              if (s && typeof s == 'object') {
                var f = s[ye];
                if (f) {
                  var p = f.t,
                    d = f.k,
                    v = f.R,
                    g = f.i;
                  if (g === 4)
                    An(d, function (y) {
                      y !== ye &&
                        (p[y] !== void 0 || _n(p, y)
                          ? v[y] || a(d[y])
                          : ((v[y] = !0), Sn(f)));
                    }),
                      An(p, function (y) {
                        d[y] !== void 0 || _n(d, y) || ((v[y] = !1), Sn(f));
                      });
                  else if (g === 5) {
                    if ((r(f) && (Sn(f), (v.length = !0)), d.length < p.length))
                      for (var S = d.length; S < p.length; S++) v[S] = !1;
                    else for (var P = p.length; P < d.length; P++) v[P] = !0;
                    for (
                      var m = Math.min(d.length, p.length), h = 0;
                      h < m;
                      h++
                    )
                      d.hasOwnProperty(h) || (v[h] = !0),
                        v[h] === void 0 && a(d[h]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
function OS() {
  function e(r) {
    if (!jt(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (Cl(r))
      return new Map(
        Array.from(r.entries()).map(function (u) {
          return [u[0], e(u[1])];
        })
      );
    if (Ol(r)) return new Set(Array.from(r).map(e));
    var i = Object.create(Object.getPrototypeOf(r));
    for (var o in r) i[o] = e(r[o]);
    return _n(r, Di) && (i[Di] = r[Di]), i;
  }
  function t(r) {
    return At(r) ? e(r) : r;
  }
  var n = 'add';
  im('Patches', {
    $: function (r, i) {
      return (
        i.forEach(function (o) {
          for (var u = o.path, l = o.op, a = r, s = 0; s < u.length - 1; s++) {
            var f = jn(a),
              p = u[s];
            typeof p != 'string' && typeof p != 'number' && (p = '' + p),
              (f !== 0 && f !== 1) ||
                (p !== '__proto__' && p !== 'constructor') ||
                Ue(24),
              typeof a == 'function' && p === 'prototype' && Ue(24),
              typeof (a = Jo(a, p)) != 'object' && Ue(15, u.join('/'));
          }
          var d = jn(a),
            v = e(o.value),
            g = u[u.length - 1];
          switch (l) {
            case 'replace':
              switch (d) {
                case 2:
                  return a.set(g, v);
                case 3:
                  Ue(16);
                default:
                  return (a[g] = v);
              }
            case n:
              switch (d) {
                case 1:
                  return g === '-' ? a.push(v) : a.splice(g, 0, v);
                case 2:
                  return a.set(g, v);
                case 3:
                  return a.add(v);
                default:
                  return (a[g] = v);
              }
            case 'remove':
              switch (d) {
                case 1:
                  return a.splice(g, 1);
                case 2:
                  return a.delete(g);
                case 3:
                  return a.delete(o.value);
                default:
                  return delete a[g];
              }
            default:
              Ue(17, l);
          }
        }),
        r
      );
    },
    N: function (r, i, o, u) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (l, a, s, f) {
            var p = l.t,
              d = l.o;
            An(l.R, function (v, g) {
              var S = Jo(p, v),
                P = Jo(d, v),
                m = g ? (_n(p, v) ? 'replace' : n) : 'remove';
              if (S !== P || m !== 'replace') {
                var h = a.concat(v);
                s.push(
                  m === 'remove'
                    ? { op: m, path: h }
                    : { op: m, path: h, value: P }
                ),
                  f.push(
                    m === n
                      ? { op: 'remove', path: h }
                      : m === 'remove'
                      ? { op: n, path: h, value: t(S) }
                      : { op: 'replace', path: h, value: t(S) }
                  );
              }
            });
          })(r, i, o, u);
        case 5:
        case 1:
          return (function (l, a, s, f) {
            var p = l.t,
              d = l.R,
              v = l.o;
            if (v.length < p.length) {
              var g = [v, p];
              (p = g[0]), (v = g[1]);
              var S = [f, s];
              (s = S[0]), (f = S[1]);
            }
            for (var P = 0; P < p.length; P++)
              if (d[P] && v[P] !== p[P]) {
                var m = a.concat([P]);
                s.push({ op: 'replace', path: m, value: t(v[P]) }),
                  f.push({ op: 'replace', path: m, value: t(p[P]) });
              }
            for (var h = p.length; h < v.length; h++) {
              var y = a.concat([h]);
              s.push({ op: n, path: y, value: t(v[h]) });
            }
            p.length < v.length &&
              f.push({
                op: 'replace',
                path: a.concat(['length']),
                value: p.length,
              });
          })(r, i, o, u);
        case 3:
          return (function (l, a, s, f) {
            var p = l.t,
              d = l.o,
              v = 0;
            p.forEach(function (g) {
              if (!d.has(g)) {
                var S = a.concat([v]);
                s.push({ op: 'remove', path: S, value: g }),
                  f.unshift({ op: n, path: S, value: g });
              }
              v++;
            }),
              (v = 0),
              d.forEach(function (g) {
                if (!p.has(g)) {
                  var S = a.concat([v]);
                  s.push({ op: n, path: S, value: g }),
                    f.unshift({ op: 'remove', path: S, value: g });
                }
                v++;
              });
          })(r, i, o, u);
      }
    },
    M: function (r, i, o, u) {
      o.push({ op: 'replace', path: [], value: i === bc ? void 0 : i }),
        u.push({ op: 'replace', path: [], value: r });
    },
  });
}
var Ld,
  eo,
  zc = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  TS = typeof Map < 'u',
  MS = typeof Set < 'u',
  Ad = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  bc = zc
    ? Symbol.for('immer-nothing')
    : (((Ld = {})['immer-nothing'] = !0), Ld),
  Di = zc ? Symbol.for('immer-draftable') : '__$immer_draftable',
  ye = zc ? Symbol.for('immer-state') : '__$immer_state',
  _S = '' + Object.prototype.constructor,
  Ir =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  om =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Ir(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  xs = {},
  to = {
    get: function (e, t) {
      if (t === ye) return e;
      var n = Wn(e);
      if (!_n(n, t))
        return (function (i, o, u) {
          var l,
            a = Dd(o, u);
          return a
            ? 'value' in a
              ? a.value
              : (l = a.get) === null || l === void 0
              ? void 0
              : l.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !jt(r)
        ? r
        : r === pa(e.t, t)
        ? (ha(e), (e.o[t] = Es(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in Wn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Wn(e));
    },
    set: function (e, t, n) {
      var r = Dd(Wn(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = pa(Wn(e), t),
          o = i == null ? void 0 : i[ye];
        if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (rm(n, i) && (n !== void 0 || _n(e.t, t))) return !0;
        ha(e), Sn(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        pa(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), ha(e), Sn(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Wn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Ue(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ue(12);
    },
  },
  gi = {};
An(to, function (e, t) {
  gi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (gi.deleteProperty = function (e, t) {
    return gi.set.call(this, e, t, void 0);
  }),
  (gi.set = function (e, t, n) {
    return to.set.call(this, e[0], t, n, e[0]);
  });
var NS = (function () {
    function e(n) {
      var r = this;
      (this.O = Ad),
        (this.D = !0),
        (this.produce = function (i, o, u) {
          if (typeof i == 'function' && typeof o != 'function') {
            var l = o;
            o = i;
            var a = r;
            return function (S) {
              var P = this;
              S === void 0 && (S = l);
              for (
                var m = arguments.length, h = Array(m > 1 ? m - 1 : 0), y = 1;
                y < m;
                y++
              )
                h[y - 1] = arguments[y];
              return a.produce(S, function (c) {
                var w;
                return (w = o).call.apply(w, [P, c].concat(h));
              });
            };
          }
          var s;
          if (
            (typeof o != 'function' && Ue(6),
            u !== void 0 && typeof u != 'function' && Ue(7),
            jt(i))
          ) {
            var f = _d(r),
              p = Es(r, i, void 0),
              d = !0;
            try {
              (s = o(p)), (d = !1);
            } finally {
              d ? Ou(f) : ws(f);
            }
            return typeof Promise < 'u' && s instanceof Promise
              ? s.then(
                  function (S) {
                    return fa(f, u), da(S, f);
                  },
                  function (S) {
                    throw (Ou(f), S);
                  }
                )
              : (fa(f, u), da(s, f));
          }
          if (!i || typeof i != 'object') {
            if (
              ((s = o(i)) === void 0 && (s = i),
              s === bc && (s = void 0),
              r.D && Ac(s, !0),
              u)
            ) {
              var v = [],
                g = [];
              qt('Patches').M(i, s, v, g), u(v, g);
            }
            return s;
          }
          Ue(21, i);
        }),
        (this.produceWithPatches = function (i, o) {
          if (typeof i == 'function')
            return function (s) {
              for (
                var f = arguments.length, p = Array(f > 1 ? f - 1 : 0), d = 1;
                d < f;
                d++
              )
                p[d - 1] = arguments[d];
              return r.produceWithPatches(s, function (v) {
                return i.apply(void 0, [v].concat(p));
              });
            };
          var u,
            l,
            a = r.produce(i, o, function (s, f) {
              (u = s), (l = f);
            });
          return typeof Promise < 'u' && a instanceof Promise
            ? a.then(function (s) {
                return [s, u, l];
              })
            : [a, u, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        jt(n) || Ue(8), At(n) && (n = RS(n));
        var r = _d(this),
          i = Es(this, n, void 0);
        return (i[ye].C = !0), ws(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[ye],
          o = i.A;
        return fa(o, r), da(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Ad && Ue(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var o = r[i];
          if (o.path.length === 0 && o.op === 'replace') {
            n = o.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var u = qt('Patches').$;
        return At(n)
          ? u(n, r)
          : this.produce(n, function (l) {
              return u(l, r);
            });
      }),
      e
    );
  })(),
  pt = new NS(),
  po = pt.produce,
  um = pt.produceWithPatches.bind(pt);
pt.setAutoFreeze.bind(pt);
pt.setUseProxies.bind(pt);
var jd = pt.applyPatches.bind(pt);
pt.createDraft.bind(pt);
pt.finishDraft.bind(pt);
function no(e) {
  '@babel/helpers - typeof';
  return (
    (no =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    no(e)
  );
}
function DS(e, t) {
  if (no(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (no(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function IS(e) {
  var t = DS(e, 'string');
  return no(t) === 'symbol' ? t : String(t);
}
function LS(e, t, n) {
  return (
    (t = IS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function zd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zd(Object(n), !0).forEach(function (r) {
          LS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : zd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function He(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var $d = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  va = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  _u = {
    INIT: '@@redux/INIT' + va(),
    REPLACE: '@@redux/REPLACE' + va(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + va();
    },
  };
function AS(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function lm(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(He(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(He(1));
    return n(lm)(e, t);
  }
  if (typeof e != 'function') throw new Error(He(2));
  var i = e,
    o = t,
    u = [],
    l = u,
    a = !1;
  function s() {
    l === u && (l = u.slice());
  }
  function f() {
    if (a) throw new Error(He(3));
    return o;
  }
  function p(S) {
    if (typeof S != 'function') throw new Error(He(4));
    if (a) throw new Error(He(5));
    var P = !0;
    return (
      s(),
      l.push(S),
      function () {
        if (P) {
          if (a) throw new Error(He(6));
          (P = !1), s();
          var h = l.indexOf(S);
          l.splice(h, 1), (u = null);
        }
      }
    );
  }
  function d(S) {
    if (!AS(S)) throw new Error(He(7));
    if (typeof S.type > 'u') throw new Error(He(8));
    if (a) throw new Error(He(9));
    try {
      (a = !0), (o = i(o, S));
    } finally {
      a = !1;
    }
    for (var P = (u = l), m = 0; m < P.length; m++) {
      var h = P[m];
      h();
    }
    return S;
  }
  function v(S) {
    if (typeof S != 'function') throw new Error(He(10));
    (i = S), d({ type: _u.REPLACE });
  }
  function g() {
    var S,
      P = p;
    return (
      (S = {
        subscribe: function (h) {
          if (typeof h != 'object' || h === null) throw new Error(He(11));
          function y() {
            h.next && h.next(f());
          }
          y();
          var c = P(y);
          return { unsubscribe: c };
        },
      }),
      (S[$d] = function () {
        return this;
      }),
      S
    );
  }
  return (
    d({ type: _u.INIT }),
    (r = { dispatch: d, subscribe: p, getState: f, replaceReducer: v }),
    (r[$d] = g),
    r
  );
}
function jS(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: _u.INIT });
    if (typeof r > 'u') throw new Error(He(12));
    if (typeof n(void 0, { type: _u.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(He(13));
  });
}
function $c(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == 'function' && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    u;
  try {
    jS(n);
  } catch (l) {
    u = l;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), u)) throw u;
    for (var f = !1, p = {}, d = 0; d < o.length; d++) {
      var v = o[d],
        g = n[v],
        S = a[v],
        P = g(S, s);
      if (typeof P > 'u') throw (s && s.type, new Error(He(14)));
      (p[v] = P), (f = f || P !== S);
    }
    return (f = f || o.length !== Object.keys(a).length), f ? p : a;
  };
}
function Nu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function zS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(He(15));
        },
        u = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = t.map(function (a) {
          return a(u);
        });
      return (
        (o = Nu.apply(void 0, l)(i.dispatch)),
        bd(bd({}, i), {}, { dispatch: o })
      );
    };
  };
}
var Du = 'NOT_FOUND';
function bS(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : Du;
    },
    put: function (r, i) {
      t = { key: r, value: i };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function $S(e, t) {
  var n = [];
  function r(l) {
    var a = n.findIndex(function (f) {
      return t(l, f.key);
    });
    if (a > -1) {
      var s = n[a];
      return a > 0 && (n.splice(a, 1), n.unshift(s)), s.value;
    }
    return Du;
  }
  function i(l, a) {
    r(l) === Du && (n.unshift({ key: l, value: a }), n.length > e && n.pop());
  }
  function o() {
    return n;
  }
  function u() {
    n = [];
  }
  return { get: r, put: i, getEntries: o, clear: u };
}
var FS = function (t, n) {
  return t === n;
};
function US(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var i = n.length, o = 0; o < i; o++) if (!e(n[o], r[o])) return !1;
    return !0;
  };
}
function Ps(e, t) {
  var n = typeof t == 'object' ? t : { equalityCheck: t },
    r = n.equalityCheck,
    i = r === void 0 ? FS : r,
    o = n.maxSize,
    u = o === void 0 ? 1 : o,
    l = n.resultEqualityCheck,
    a = US(i),
    s = u === 1 ? bS(a) : $S(u, a);
  function f() {
    var p = s.get(arguments);
    if (p === Du) {
      if (((p = e.apply(null, arguments)), l)) {
        var d = s.getEntries(),
          v = d.find(function (g) {
            return l(g.value, p);
          });
        v && (p = v.value);
      }
      s.put(arguments, p);
    }
    return p;
  }
  return (
    (f.clearCache = function () {
      return s.clear();
    }),
    f
  );
}
function QS(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == 'function';
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == 'function'
          ? 'function ' + (r.name || 'unnamed') + '()'
          : typeof r;
      })
      .join(', ');
    throw new Error(
      'createSelector expects all input-selectors to be functions, but received the following types: [' +
        n +
        ']'
    );
  }
  return t;
}
function qS(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = function () {
    for (var u = arguments.length, l = new Array(u), a = 0; a < u; a++)
      l[a] = arguments[a];
    var s = 0,
      f,
      p = { memoizeOptions: void 0 },
      d = l.pop();
    if (
      (typeof d == 'object' && ((p = d), (d = l.pop())), typeof d != 'function')
    )
      throw new Error(
        'createSelector expects an output function after the inputs, but received: [' +
          typeof d +
          ']'
      );
    var v = p,
      g = v.memoizeOptions,
      S = g === void 0 ? n : g,
      P = Array.isArray(S) ? S : [S],
      m = QS(l),
      h = e.apply(
        void 0,
        [
          function () {
            return s++, d.apply(null, arguments);
          },
        ].concat(P)
      ),
      y = e(function () {
        for (var w = [], E = m.length, x = 0; x < E; x++)
          w.push(m[x].apply(null, arguments));
        return (f = h.apply(null, w)), f;
      });
    return (
      Object.assign(y, {
        resultFunc: d,
        memoizedResultFunc: h,
        dependencies: m,
        lastResult: function () {
          return f;
        },
        recomputations: function () {
          return s;
        },
        resetRecomputations: function () {
          return (s = 0);
        },
      }),
      y
    );
  };
  return i;
}
var Ii = qS(Ps);
function am(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (u) {
      return function (l) {
        return typeof l == 'function' ? l(i, o, e) : u(l);
      };
    };
  };
  return t;
}
var sm = am();
sm.withExtraArgument = am;
const Fd = sm;
var cm =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  BS =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        u;
      return (
        (u = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function l(s) {
        return function (f) {
          return a([s, f]);
        };
      }
      function a(s) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, s[1])).done)
            )
              return o;
            switch (((i = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (f) {
            (s = [6, f]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  Qr =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  VS = Object.defineProperty,
  WS = Object.defineProperties,
  HS = Object.getOwnPropertyDescriptors,
  Ud = Object.getOwnPropertySymbols,
  KS = Object.prototype.hasOwnProperty,
  YS = Object.prototype.propertyIsEnumerable,
  Qd = function (e, t, n) {
    return t in e
      ? VS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Nn = function (e, t) {
    for (var n in t || (t = {})) KS.call(t, n) && Qd(e, n, t[n]);
    if (Ud)
      for (var r = 0, i = Ud(t); r < i.length; r++) {
        var n = i[r];
        YS.call(t, n) && Qd(e, n, t[n]);
      }
    return e;
  },
  ma = function (e, t) {
    return WS(e, HS(t));
  },
  GS = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            i(s);
          }
        },
        u = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            i(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(o, u);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  XS =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Nu
              : Nu.apply(null, arguments);
        };
function zn(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var JS = function (e) {
  return e && typeof e.match == 'function';
};
function ut(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error('prepareAction did not return an object');
      return Nn(
        Nn({ type: e, payload: o.payload }, 'meta' in o && { meta: o.meta }),
        'error' in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return '' + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
var ZS = (function (e) {
    cm(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Qr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Qr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  ew = (function (e) {
    cm(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Qr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Qr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function ks(e) {
  return jt(e) ? po(e, function () {}) : e;
}
function tw(e) {
  return typeof e == 'boolean';
}
function nw() {
  return function (t) {
    return rw(t);
  };
}
function rw(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var r = new ZS();
  return (
    n && (tw(n) ? r.push(Fd) : r.push(Fd.withExtraArgument(n.extraArgument))), r
  );
}
var iw = !0;
function ow(e) {
  var t = nw(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    o = n.middleware,
    u = o === void 0 ? t() : o,
    l = n.devTools,
    a = l === void 0 ? !0 : l,
    s = n.preloadedState,
    f = s === void 0 ? void 0 : s,
    p = n.enhancers,
    d = p === void 0 ? void 0 : p,
    v;
  if (typeof i == 'function') v = i;
  else if (zn(i)) v = $c(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var g = u;
  typeof g == 'function' && (g = g(t));
  var S = zS.apply(void 0, g),
    P = Nu;
  a && (P = XS(Nn({ trace: !iw }, typeof a == 'object' && a)));
  var m = new ew(S),
    h = m;
  Array.isArray(d) ? (h = Qr([S], d)) : typeof d == 'function' && (h = d(m));
  var y = P.apply(void 0, h);
  return lm(v, f, y);
}
function fm(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (o, u) {
        var l = typeof o == 'string' ? o : o.type;
        if (!l)
          throw new Error(
            '`builder.addCase` cannot be called with an empty action type'
          );
        if (l in t)
          throw new Error(
            '`builder.addCase` cannot be called with two reducers for the same action type'
          );
        return (t[l] = u), i;
      },
      addMatcher: function (o, u) {
        return n.push({ matcher: o, reducer: u }), i;
      },
      addDefaultCase: function (o) {
        return (r = o), i;
      },
    };
  return e(i), [t, n, r];
}
function uw(e) {
  return typeof e == 'function';
}
function lw(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == 'function' ? fm(t) : [t, n, r],
    o = i[0],
    u = i[1],
    l = i[2],
    a;
  if (uw(e))
    a = function () {
      return ks(e());
    };
  else {
    var s = ks(e);
    a = function () {
      return s;
    };
  }
  function f(p, d) {
    p === void 0 && (p = a());
    var v = Qr(
      [o[d.type]],
      u
        .filter(function (g) {
          var S = g.matcher;
          return S(d);
        })
        .map(function (g) {
          var S = g.reducer;
          return S;
        })
    );
    return (
      v.filter(function (g) {
        return !!g;
      }).length === 0 && (v = [l]),
      v.reduce(function (g, S) {
        if (S)
          if (At(g)) {
            var P = g,
              m = S(P, d);
            return m === void 0 ? g : m;
          } else {
            if (jt(g))
              return po(g, function (h) {
                return S(h, d);
              });
            var m = S(g, d);
            if (m === void 0) {
              if (g === null) return g;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return m;
          }
        return g;
      }, p)
    );
  }
  return (f.getInitialState = a), f;
}
function aw(e, t) {
  return e + '/' + t;
}
function mn(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n =
      typeof e.initialState == 'function' ? e.initialState : ks(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    o = {},
    u = {},
    l = {};
  i.forEach(function (f) {
    var p = r[f],
      d = aw(t, f),
      v,
      g;
    'reducer' in p ? ((v = p.reducer), (g = p.prepare)) : (v = p),
      (o[f] = v),
      (u[d] = v),
      (l[f] = g ? ut(d, g) : ut(d));
  });
  function a() {
    var f =
        typeof e.extraReducers == 'function'
          ? fm(e.extraReducers)
          : [e.extraReducers],
      p = f[0],
      d = p === void 0 ? {} : p,
      v = f[1],
      g = v === void 0 ? [] : v,
      S = f[2],
      P = S === void 0 ? void 0 : S,
      m = Nn(Nn({}, d), u);
    return lw(n, function (h) {
      for (var y in m) h.addCase(y, m[y]);
      for (var c = 0, w = g; c < w.length; c++) {
        var E = w[c];
        h.addMatcher(E.matcher, E.reducer);
      }
      P && h.addDefaultCase(P);
    });
  }
  var s;
  return {
    name: t,
    reducer: function (f, p) {
      return s || (s = a()), s(f, p);
    },
    actions: l,
    caseReducers: o,
    getInitialState: function () {
      return s || (s = a()), s.getInitialState();
    },
  };
}
var sw = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  dm = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += sw[(Math.random() * 64) | 0];
    return t;
  },
  cw = ['name', 'message', 'stack', 'code'],
  ya = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  qd = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  fw = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = cw; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == 'string' && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  Bd = (function () {
    function e(t, n, r) {
      var i = ut(t + '/fulfilled', function (s, f, p, d) {
          return {
            payload: s,
            meta: ma(Nn({}, d || {}), {
              arg: p,
              requestId: f,
              requestStatus: 'fulfilled',
            }),
          };
        }),
        o = ut(t + '/pending', function (s, f, p) {
          return {
            payload: void 0,
            meta: ma(Nn({}, p || {}), {
              arg: f,
              requestId: s,
              requestStatus: 'pending',
            }),
          };
        }),
        u = ut(t + '/rejected', function (s, f, p, d, v) {
          return {
            payload: d,
            error: ((r && r.serializeError) || fw)(s || 'Rejected'),
            meta: ma(Nn({}, v || {}), {
              arg: p,
              requestId: f,
              rejectedWithValue: !!d,
              requestStatus: 'rejected',
              aborted: (s == null ? void 0 : s.name) === 'AbortError',
              condition: (s == null ? void 0 : s.name) === 'ConditionError',
            }),
          };
        }),
        l =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function s() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (s.prototype.abort = function () {}), s;
              })();
      function a(s) {
        return function (f, p, d) {
          var v = r != null && r.idGenerator ? r.idGenerator(s) : dm(),
            g = new l(),
            S;
          function P(h) {
            (S = h), g.abort();
          }
          var m = (function () {
            return GS(this, null, function () {
              var h, y, c, w, E, x, k;
              return BS(this, function (O) {
                switch (O.label) {
                  case 0:
                    return (
                      O.trys.push([0, 4, , 5]),
                      (w =
                        (h = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : h.call(r, s, { getState: p, extra: d })),
                      pw(w) ? [4, w] : [3, 2]
                    );
                  case 1:
                    (w = O.sent()), (O.label = 2);
                  case 2:
                    if (w === !1 || g.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message:
                          'Aborted due to condition callback returning false.',
                      };
                    return (
                      (E = new Promise(function (R, T) {
                        return g.signal.addEventListener('abort', function () {
                          return T({
                            name: 'AbortError',
                            message: S || 'Aborted',
                          });
                        });
                      })),
                      f(
                        o(
                          v,
                          s,
                          (y = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : y.call(
                                r,
                                { requestId: v, arg: s },
                                { getState: p, extra: d }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          E,
                          Promise.resolve(
                            n(s, {
                              dispatch: f,
                              getState: p,
                              extra: d,
                              requestId: v,
                              signal: g.signal,
                              abort: P,
                              rejectWithValue: function (R, T) {
                                return new ya(R, T);
                              },
                              fulfillWithValue: function (R, T) {
                                return new qd(R, T);
                              },
                            })
                          ).then(function (R) {
                            if (R instanceof ya) throw R;
                            return R instanceof qd
                              ? i(R.payload, v, s, R.meta)
                              : i(R, v, s);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (c = O.sent()), [3, 5];
                  case 4:
                    return (
                      (x = O.sent()),
                      (c =
                        x instanceof ya
                          ? u(null, v, s, x.payload, x.meta)
                          : u(x, v, s)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (k =
                        r &&
                        !r.dispatchConditionRejection &&
                        u.match(c) &&
                        c.meta.condition),
                      k || f(c),
                      [2, c]
                    );
                }
              });
            });
          })();
          return Object.assign(m, {
            abort: P,
            requestId: v,
            arg: s,
            unwrap: function () {
              return m.then(dw);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: o,
        rejected: u,
        fulfilled: i,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function dw(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function pw(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var pm = function (e, t) {
  return JS(e) ? e.match(t) : e(t);
};
function Kr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return pm(r, n);
    });
  };
}
function Li() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return pm(r, n);
    });
  };
}
function Tl(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function ho(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  );
}
function Fc() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Tl(n, ['pending']);
      }
    : ho(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.pending;
          }),
          i = Kr.apply(void 0, r);
        return i(n);
      }
    : Fc()(e[0]);
}
function ro() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Tl(n, ['rejected']);
      }
    : ho(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.rejected;
          }),
          i = Kr.apply(void 0, r);
        return i(n);
      }
    : ro()(e[0]);
}
function Ml() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var i = Li(ro.apply(void 0, e), n);
        return i(r);
      }
    : ho(e)
    ? function (r) {
        var i = Li(ro.apply(void 0, e), n);
        return i(r);
      }
    : Ml()(e[0]);
}
function sr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Tl(n, ['fulfilled']);
      }
    : ho(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.fulfilled;
          }),
          i = Kr.apply(void 0, r);
        return i(n);
      }
    : sr()(e[0]);
}
function Rs() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Tl(n, ['pending', 'fulfilled', 'rejected']);
      }
    : ho(e)
    ? function (n) {
        for (var r = [], i = 0, o = e; i < o.length; i++) {
          var u = o[i];
          r.push(u.pending, u.rejected, u.fulfilled);
        }
        var l = Kr.apply(void 0, r);
        return l(n);
      }
    : Rs()(e[0]);
}
var Uc = 'listenerMiddleware';
ut(Uc + '/add');
ut(Uc + '/removeAll');
ut(Uc + '/remove');
var Si = 'RTK_autoBatch',
  di = function () {
    return function (e) {
      var t;
      return { payload: e, meta: ((t = {}), (t[Si] = !0), t) };
    };
  },
  Vd;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(
    typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis
  );
CS();
var Iu =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        u;
      return (
        (u = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function l(s) {
        return function (f) {
          return a([s, f]);
        };
      }
      function a(s) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, s[1])).done)
            )
              return o;
            switch (((i = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (f) {
            (s = [6, f]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  Lu =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  hw = Object.defineProperty,
  vw = Object.defineProperties,
  mw = Object.getOwnPropertyDescriptors,
  Au = Object.getOwnPropertySymbols,
  hm = Object.prototype.hasOwnProperty,
  vm = Object.prototype.propertyIsEnumerable,
  Wd = function (e, t, n) {
    return t in e
      ? hw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Oe = function (e, t) {
    for (var n in t || (t = {})) hm.call(t, n) && Wd(e, n, t[n]);
    if (Au)
      for (var r = 0, i = Au(t); r < i.length; r++) {
        var n = i[r];
        vm.call(t, n) && Wd(e, n, t[n]);
      }
    return e;
  },
  Ft = function (e, t) {
    return vw(e, mw(t));
  },
  Hd = function (e, t) {
    var n = {};
    for (var r in e) hm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Au)
      for (var i = 0, o = Au(e); i < o.length; i++) {
        var r = o[i];
        t.indexOf(r) < 0 && vm.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  ju = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            i(s);
          }
        },
        u = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            i(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(o, u);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  Se;
(function (e) {
  (e.uninitialized = 'uninitialized'),
    (e.pending = 'pending'),
    (e.fulfilled = 'fulfilled'),
    (e.rejected = 'rejected');
})(Se || (Se = {}));
function yw(e) {
  return {
    status: e,
    isUninitialized: e === Se.uninitialized,
    isLoading: e === Se.pending,
    isSuccess: e === Se.fulfilled,
    isError: e === Se.rejected,
  };
}
function gw(e) {
  return new RegExp('(^|:)//').test(e);
}
var Sw = function (e) {
    return e.replace(/\/$/, '');
  },
  ww = function (e) {
    return e.replace(/^\//, '');
  };
function Ew(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (gw(t)) return t;
  var n = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
  return (e = Sw(e)), (t = ww(t)), '' + e + n + t;
}
var Kd = function (e) {
  return [].concat.apply([], e);
};
function xw() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function Pw() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden';
}
var Yd = zn;
function mm(e, t) {
  if (e === t || !((Yd(e) && Yd(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      i = n.length === r.length,
      o = Array.isArray(t) ? [] : {},
      u = 0,
      l = n;
    u < l.length;
    u++
  ) {
    var a = l[u];
    (o[a] = mm(e[a], t[a])), i && (i = e[a] === o[a]);
  }
  return i ? e : o;
}
var Gd = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  kw = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  Rw = function (e) {
    return /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '');
  };
function Xd(e) {
  if (!zn(e)) return e;
  for (var t = Oe({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var i = r[n],
      o = i[0],
      u = i[1];
    u === void 0 && delete t[o];
  }
  return t;
}
function Cw(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    i = n.prepareHeaders,
    o =
      i === void 0
        ? function (y) {
            return y;
          }
        : i,
    u = n.fetchFn,
    l = u === void 0 ? Gd : u,
    a = n.paramsSerializer,
    s = n.isJsonContentType,
    f = s === void 0 ? Rw : s,
    p = n.jsonContentType,
    d = p === void 0 ? 'application/json' : p,
    v = n.jsonReplacer,
    g = n.timeout,
    S = n.responseHandler,
    P = n.validateStatus,
    m = Hd(n, [
      'baseUrl',
      'prepareHeaders',
      'fetchFn',
      'paramsSerializer',
      'isJsonContentType',
      'jsonContentType',
      'jsonReplacer',
      'timeout',
      'responseHandler',
      'validateStatus',
    ]);
  return (
    typeof fetch > 'u' &&
      l === Gd &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    function (y, c) {
      return ju(t, null, function () {
        var w,
          E,
          x,
          k,
          O,
          R,
          T,
          D,
          I,
          $,
          A,
          B,
          K,
          N,
          b,
          z,
          Q,
          V,
          X,
          Z,
          J,
          re,
          ae,
          yt,
          se,
          Be,
          lt,
          je,
          de,
          Un,
          vo,
          cr,
          fr,
          Yr,
          Gr,
          ln;
        return Iu(this, function (at) {
          switch (at.label) {
            case 0:
              return (
                (w = c.signal),
                (E = c.getState),
                (x = c.extra),
                (k = c.endpoint),
                (O = c.forced),
                (R = c.type),
                (D = typeof y == 'string' ? { url: y } : y),
                (I = D.url),
                ($ = D.headers),
                (A = $ === void 0 ? new Headers(m.headers) : $),
                (B = D.params),
                (K = B === void 0 ? void 0 : B),
                (N = D.responseHandler),
                (b = N === void 0 ? S ?? 'json' : N),
                (z = D.validateStatus),
                (Q = z === void 0 ? P ?? kw : z),
                (V = D.timeout),
                (X = V === void 0 ? g : V),
                (Z = Hd(D, [
                  'url',
                  'headers',
                  'params',
                  'responseHandler',
                  'validateStatus',
                  'timeout',
                ])),
                (J = Oe(Ft(Oe({}, m), { signal: w }), Z)),
                (A = new Headers(Xd(A))),
                (re = J),
                [
                  4,
                  o(A, {
                    getState: E,
                    extra: x,
                    endpoint: k,
                    forced: O,
                    type: R,
                  }),
                ]
              );
            case 1:
              (re.headers = at.sent() || A),
                (ae = function (et) {
                  return (
                    typeof et == 'object' &&
                    (zn(et) ||
                      Array.isArray(et) ||
                      typeof et.toJSON == 'function')
                  );
                }),
                !J.headers.has('content-type') &&
                  ae(J.body) &&
                  J.headers.set('content-type', d),
                ae(J.body) &&
                  f(J.headers) &&
                  (J.body = JSON.stringify(J.body, v)),
                K &&
                  ((yt = ~I.indexOf('?') ? '&' : '?'),
                  (se = a ? a(K) : new URLSearchParams(Xd(K))),
                  (I += yt + se)),
                (I = Ew(r, I)),
                (Be = new Request(I, J)),
                (lt = new Request(I, J)),
                (T = { request: lt }),
                (de = !1),
                (Un =
                  X &&
                  setTimeout(function () {
                    (de = !0), c.abort();
                  }, X)),
                (at.label = 2);
            case 2:
              return at.trys.push([2, 4, 5, 6]), [4, l(Be)];
            case 3:
              return (je = at.sent()), [3, 6];
            case 4:
              return (
                (vo = at.sent()),
                [
                  2,
                  {
                    error: {
                      status: de ? 'TIMEOUT_ERROR' : 'FETCH_ERROR',
                      error: String(vo),
                    },
                    meta: T,
                  },
                ]
              );
            case 5:
              return Un && clearTimeout(Un), [7];
            case 6:
              (cr = je.clone()), (T.response = cr), (Yr = ''), (at.label = 7);
            case 7:
              return (
                at.trys.push([7, 9, , 10]),
                [
                  4,
                  Promise.all([
                    h(je, b).then(
                      function (et) {
                        return (fr = et);
                      },
                      function (et) {
                        return (Gr = et);
                      }
                    ),
                    cr.text().then(
                      function (et) {
                        return (Yr = et);
                      },
                      function () {}
                    ),
                  ]),
                ]
              );
            case 8:
              if ((at.sent(), Gr)) throw Gr;
              return [3, 10];
            case 9:
              return (
                (ln = at.sent()),
                [
                  2,
                  {
                    error: {
                      status: 'PARSING_ERROR',
                      originalStatus: je.status,
                      data: Yr,
                      error: String(ln),
                    },
                    meta: T,
                  },
                ]
              );
            case 10:
              return [
                2,
                Q(je, fr)
                  ? { data: fr, meta: T }
                  : { error: { status: je.status, data: fr }, meta: T },
              ];
          }
        });
      });
    }
  );
  function h(y, c) {
    return ju(this, null, function () {
      var w;
      return Iu(this, function (E) {
        switch (E.label) {
          case 0:
            return typeof c == 'function'
              ? [2, c(y)]
              : (c === 'content-type' && (c = f(y.headers) ? 'json' : 'text'),
                c !== 'json' ? [3, 2] : [4, y.text()]);
          case 1:
            return (w = E.sent()), [2, w.length ? JSON.parse(w) : null];
          case 2:
            return [2, y.text()];
        }
      });
    });
  }
}
var Jd = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  Qc = ut('__rtkq/focused'),
  ym = ut('__rtkq/unfocused'),
  qc = ut('__rtkq/online'),
  gm = ut('__rtkq/offline'),
  Bt;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(Bt || (Bt = {}));
function Sm(e) {
  return e.type === Bt.query;
}
function Ow(e) {
  return e.type === Bt.mutation;
}
function Bc(e, t, n, r, i, o) {
  return Tw(e)
    ? e(t, n, r, i).map(Cs).map(o)
    : Array.isArray(e)
    ? e.map(Cs).map(o)
    : [];
}
function Tw(e) {
  return typeof e == 'function';
}
function Cs(e) {
  return typeof e == 'string' ? { type: e } : e;
}
function ga(e) {
  return e != null;
}
var io = Symbol('forceQueryFn'),
  Os = function (e) {
    return typeof e[io] == 'function';
  };
function Mw(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.api,
    o = e.context,
    u = new Map(),
    l = new Map(),
    a = i.internalActions,
    s = a.unsubscribeQueryResult,
    f = a.removeMutationResult,
    p = a.updateSubscriptionOptions;
  return {
    buildInitiateQuery: h,
    buildInitiateMutation: y,
    getRunningQueryThunk: g,
    getRunningMutationThunk: S,
    getRunningQueriesThunk: P,
    getRunningMutationsThunk: m,
    getRunningOperationPromises: v,
    removalWarning: d,
  };
  function d() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function v() {
    typeof process < 'u';
    var c = function (w) {
      return Array.from(w.values()).flatMap(function (E) {
        return E ? Object.values(E) : [];
      });
    };
    return Lu(Lu([], c(u)), c(l)).filter(ga);
  }
  function g(c, w) {
    return function (E) {
      var x,
        k = o.endpointDefinitions[c],
        O = t({ queryArgs: w, endpointDefinition: k, endpointName: c });
      return (x = u.get(E)) == null ? void 0 : x[O];
    };
  }
  function S(c, w) {
    return function (E) {
      var x;
      return (x = l.get(E)) == null ? void 0 : x[w];
    };
  }
  function P() {
    return function (c) {
      return Object.values(u.get(c) || {}).filter(ga);
    };
  }
  function m() {
    return function (c) {
      return Object.values(l.get(c) || {}).filter(ga);
    };
  }
  function h(c, w) {
    var E = function (x, k) {
      var O = k === void 0 ? {} : k,
        R = O.subscribe,
        T = R === void 0 ? !0 : R,
        D = O.forceRefetch,
        I = O.subscriptionOptions,
        $ = io,
        A = O[$];
      return function (B, K) {
        var N,
          b,
          z = t({ queryArgs: x, endpointDefinition: w, endpointName: c }),
          Q = n(
            ((N = {
              type: 'query',
              subscribe: T,
              forceRefetch: D,
              subscriptionOptions: I,
              endpointName: c,
              originalArgs: x,
              queryCacheKey: z,
            }),
            (N[io] = A),
            N)
          ),
          V = i.endpoints[c].select(x),
          X = B(Q),
          Z = V(K()),
          J = X.requestId,
          re = X.abort,
          ae = Z.requestId !== J,
          yt = (b = u.get(B)) == null ? void 0 : b[z],
          se = function () {
            return V(K());
          },
          Be = Object.assign(
            A
              ? X.then(se)
              : ae && !yt
              ? Promise.resolve(Z)
              : Promise.all([yt, X]).then(se),
            {
              arg: x,
              requestId: J,
              subscriptionOptions: I,
              queryCacheKey: z,
              abort: re,
              unwrap: function () {
                return ju(this, null, function () {
                  var je;
                  return Iu(this, function (de) {
                    switch (de.label) {
                      case 0:
                        return [4, Be];
                      case 1:
                        if (((je = de.sent()), je.isError)) throw je.error;
                        return [2, je.data];
                    }
                  });
                });
              },
              refetch: function () {
                return B(E(x, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                T && B(s({ queryCacheKey: z, requestId: J }));
              },
              updateSubscriptionOptions: function (je) {
                (Be.subscriptionOptions = je),
                  B(
                    p({
                      endpointName: c,
                      requestId: J,
                      queryCacheKey: z,
                      options: je,
                    })
                  );
              },
            }
          );
        if (!yt && !ae && !A) {
          var lt = u.get(B) || {};
          (lt[z] = Be),
            u.set(B, lt),
            Be.then(function () {
              delete lt[z], Object.keys(lt).length || u.delete(B);
            });
        }
        return Be;
      };
    };
    return E;
  }
  function y(c) {
    return function (w, E) {
      var x = E === void 0 ? {} : E,
        k = x.track,
        O = k === void 0 ? !0 : k,
        R = x.fixedCacheKey;
      return function (T, D) {
        var I = r({
            type: 'mutation',
            endpointName: c,
            originalArgs: w,
            track: O,
            fixedCacheKey: R,
          }),
          $ = T(I),
          A = $.requestId,
          B = $.abort,
          K = $.unwrap,
          N = $.unwrap()
            .then(function (V) {
              return { data: V };
            })
            .catch(function (V) {
              return { error: V };
            }),
          b = function () {
            T(f({ requestId: A, fixedCacheKey: R }));
          },
          z = Object.assign(N, {
            arg: $.arg,
            requestId: A,
            abort: B,
            unwrap: K,
            unsubscribe: b,
            reset: b,
          }),
          Q = l.get(T) || {};
        return (
          l.set(T, Q),
          (Q[A] = z),
          z.then(function () {
            delete Q[A], Object.keys(Q).length || l.delete(T);
          }),
          R &&
            ((Q[R] = z),
            z.then(function () {
              Q[R] === z && (delete Q[R], Object.keys(Q).length || l.delete(T));
            })),
          z
        );
      };
    };
  }
}
function Zd(e) {
  return e;
}
function _w(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    i = e.context.endpointDefinitions,
    o = e.serializeQueryArgs,
    u = e.api,
    l = e.assertTagType,
    a = function (c, w, E, x) {
      return function (k, O) {
        var R = i[c],
          T = o({ queryArgs: w, endpointDefinition: R, endpointName: c });
        if (
          (k(
            u.internalActions.queryResultPatched({
              queryCacheKey: T,
              patches: E,
            })
          ),
          !!x)
        ) {
          var D = u.endpoints[c].select(w)(O()),
            I = Bc(R.providesTags, D.data, void 0, w, {}, l);
          k(
            u.internalActions.updateProvidedBy({
              queryCacheKey: T,
              providedTags: I,
            })
          );
        }
      };
    },
    s = function (c, w, E, x) {
      return (
        x === void 0 && (x = !0),
        function (k, O) {
          var R,
            T,
            D = u.endpoints[c],
            I = D.select(w)(O()),
            $ = {
              patches: [],
              inversePatches: [],
              undo: function () {
                return k(u.util.patchQueryData(c, w, $.inversePatches, x));
              },
            };
          if (I.status === Se.uninitialized) return $;
          var A;
          if ('data' in I)
            if (jt(I.data)) {
              var B = um(I.data, E),
                K = B[0],
                N = B[1],
                b = B[2];
              (R = $.patches).push.apply(R, N),
                (T = $.inversePatches).push.apply(T, b),
                (A = K);
            } else
              (A = E(I.data)),
                $.patches.push({ op: 'replace', path: [], value: A }),
                $.inversePatches.push({
                  op: 'replace',
                  path: [],
                  value: I.data,
                });
          return k(u.util.patchQueryData(c, w, $.patches, x)), $;
        }
      );
    },
    f = function (c, w, E) {
      return function (x) {
        var k;
        return x(
          u.endpoints[c].initiate(
            w,
            ((k = { subscribe: !1, forceRefetch: !0 }),
            (k[io] = function () {
              return { data: E };
            }),
            k)
          )
        );
      };
    },
    p = function (c, w) {
      return ju(t, [c, w], function (E, x) {
        var k,
          O,
          R,
          T,
          D,
          I,
          $,
          A,
          B,
          K,
          N,
          b,
          z,
          Q,
          V,
          X,
          Z,
          J,
          re = x.signal,
          ae = x.abort,
          yt = x.rejectWithValue,
          se = x.fulfillWithValue,
          Be = x.dispatch,
          lt = x.getState,
          je = x.extra;
        return Iu(this, function (de) {
          switch (de.label) {
            case 0:
              (k = i[E.endpointName]), (de.label = 1);
            case 1:
              return (
                de.trys.push([1, 8, , 13]),
                (O = Zd),
                (R = void 0),
                (T = {
                  signal: re,
                  abort: ae,
                  dispatch: Be,
                  getState: lt,
                  extra: je,
                  endpoint: E.endpointName,
                  type: E.type,
                  forced: E.type === 'query' ? d(E, lt()) : void 0,
                }),
                (D = E.type === 'query' ? E[io] : void 0),
                D ? ((R = D()), [3, 6]) : [3, 2]
              );
            case 2:
              return k.query
                ? [4, r(k.query(E.originalArgs), T, k.extraOptions)]
                : [3, 4];
            case 3:
              return (
                (R = de.sent()),
                k.transformResponse && (O = k.transformResponse),
                [3, 6]
              );
            case 4:
              return [
                4,
                k.queryFn(E.originalArgs, T, k.extraOptions, function (Un) {
                  return r(Un, T, k.extraOptions);
                }),
              ];
            case 5:
              (R = de.sent()), (de.label = 6);
            case 6:
              if ((typeof process < 'u', R.error))
                throw new Jd(R.error, R.meta);
              return (N = se), [4, O(R.data, R.meta, E.originalArgs)];
            case 7:
              return [
                2,
                N.apply(void 0, [
                  de.sent(),
                  ((Z = {
                    fulfilledTimeStamp: Date.now(),
                    baseQueryMeta: R.meta,
                  }),
                  (Z[Si] = !0),
                  Z),
                ]),
              ];
            case 8:
              if (((b = de.sent()), (z = b), !(z instanceof Jd)))
                return [3, 12];
              (Q = Zd),
                k.query &&
                  k.transformErrorResponse &&
                  (Q = k.transformErrorResponse),
                (de.label = 9);
            case 9:
              return (
                de.trys.push([9, 11, , 12]),
                (V = yt),
                [4, Q(z.value, z.meta, E.originalArgs)]
              );
            case 10:
              return [
                2,
                V.apply(void 0, [
                  de.sent(),
                  ((J = { baseQueryMeta: z.meta }), (J[Si] = !0), J),
                ]),
              ];
            case 11:
              return (X = de.sent()), (z = X), [3, 12];
            case 12:
              throw (typeof process < 'u', console.error(z), z);
            case 13:
              return [2];
          }
        });
      });
    };
  function d(c, w) {
    var E,
      x,
      k,
      O,
      R =
        (x = (E = w[n]) == null ? void 0 : E.queries) == null
          ? void 0
          : x[c.queryCacheKey],
      T = (k = w[n]) == null ? void 0 : k.config.refetchOnMountOrArgChange,
      D = R == null ? void 0 : R.fulfilledTimeStamp,
      I = (O = c.forceRefetch) != null ? O : c.subscribe && T;
    return I ? I === !0 || (Number(new Date()) - Number(D)) / 1e3 >= I : !1;
  }
  var v = Bd(n + '/executeQuery', p, {
      getPendingMeta: function () {
        var c;
        return (c = { startedTimeStamp: Date.now() }), (c[Si] = !0), c;
      },
      condition: function (c, w) {
        var E = w.getState,
          x,
          k,
          O,
          R = E(),
          T =
            (k = (x = R[n]) == null ? void 0 : x.queries) == null
              ? void 0
              : k[c.queryCacheKey],
          D = T == null ? void 0 : T.fulfilledTimeStamp,
          I = c.originalArgs,
          $ = T == null ? void 0 : T.originalArgs,
          A = i[c.endpointName];
        return Os(c)
          ? !0
          : (T == null ? void 0 : T.status) === 'pending'
          ? !1
          : d(c, R) ||
            (Sm(A) &&
              (O = A == null ? void 0 : A.forceRefetch) != null &&
              O.call(A, {
                currentArg: I,
                previousArg: $,
                endpointState: T,
                state: R,
              }))
          ? !0
          : !D;
      },
      dispatchConditionRejection: !0,
    }),
    g = Bd(n + '/executeMutation', p, {
      getPendingMeta: function () {
        var c;
        return (c = { startedTimeStamp: Date.now() }), (c[Si] = !0), c;
      },
    }),
    S = function (c) {
      return 'force' in c;
    },
    P = function (c) {
      return 'ifOlderThan' in c;
    },
    m = function (c, w, E) {
      return function (x, k) {
        var O = S(E) && E.force,
          R = P(E) && E.ifOlderThan,
          T = function (A) {
            return (
              A === void 0 && (A = !0),
              u.endpoints[c].initiate(w, { forceRefetch: A })
            );
          },
          D = u.endpoints[c].select(w)(k());
        if (O) x(T());
        else if (R) {
          var I = D == null ? void 0 : D.fulfilledTimeStamp;
          if (!I) {
            x(T());
            return;
          }
          var $ = (Number(new Date()) - Number(new Date(I))) / 1e3 >= R;
          $ && x(T());
        } else x(T(!1));
      };
    };
  function h(c) {
    return function (w) {
      var E, x;
      return (
        ((x = (E = w == null ? void 0 : w.meta) == null ? void 0 : E.arg) ==
        null
          ? void 0
          : x.endpointName) === c
      );
    };
  }
  function y(c, w) {
    return {
      matchPending: Li(Fc(c), h(w)),
      matchFulfilled: Li(sr(c), h(w)),
      matchRejected: Li(ro(c), h(w)),
    };
  }
  return {
    queryThunk: v,
    mutationThunk: g,
    prefetch: m,
    updateQueryData: s,
    upsertQueryData: f,
    patchQueryData: a,
    buildMatchThunkActions: y,
  };
}
function wm(e, t, n, r) {
  return Bc(
    n[e.meta.arg.endpointName][t],
    sr(e) ? e.payload : void 0,
    Ml(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function jo(e, t, n) {
  var r = e[t];
  r && n(r);
}
function oo(e) {
  var t;
  return (t = 'arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function ep(e, t, n) {
  var r = e[oo(t)];
  r && n(r);
}
var pi = {};
function Nw(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.context,
    o = i.endpointDefinitions,
    u = i.apiUid,
    l = i.extractRehydrationInfo,
    a = i.hasRehydrationInfo,
    s = e.assertTagType,
    f = e.config,
    p = ut(t + '/resetApiState'),
    d = mn({
      name: t + '/queries',
      initialState: pi,
      reducers: {
        removeQueryResult: {
          reducer: function (w, E) {
            var x = E.payload.queryCacheKey;
            delete w[x];
          },
          prepare: di(),
        },
        queryResultPatched: {
          reducer: function (w, E) {
            var x = E.payload,
              k = x.queryCacheKey,
              O = x.patches;
            jo(w, k, function (R) {
              R.data = jd(R.data, O.concat());
            });
          },
          prepare: di(),
        },
      },
      extraReducers: function (w) {
        w.addCase(n.pending, function (E, x) {
          var k = x.meta,
            O = x.meta.arg,
            R,
            T,
            D = Os(O);
          (O.subscribe || D) &&
            ((T = E[(R = O.queryCacheKey)]) != null ||
              (E[R] = {
                status: Se.uninitialized,
                endpointName: O.endpointName,
              })),
            jo(E, O.queryCacheKey, function (I) {
              (I.status = Se.pending),
                (I.requestId = D && I.requestId ? I.requestId : k.requestId),
                O.originalArgs !== void 0 && (I.originalArgs = O.originalArgs),
                (I.startedTimeStamp = k.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (E, x) {
            var k = x.meta,
              O = x.payload;
            jo(E, k.arg.queryCacheKey, function (R) {
              var T;
              if (!(R.requestId !== k.requestId && !Os(k.arg))) {
                var D = o[k.arg.endpointName].merge;
                if (((R.status = Se.fulfilled), D))
                  if (R.data !== void 0) {
                    var I = k.fulfilledTimeStamp,
                      $ = k.arg,
                      A = k.baseQueryMeta,
                      B = k.requestId,
                      K = po(R.data, function (N) {
                        return D(N, O, {
                          arg: $.originalArgs,
                          baseQueryMeta: A,
                          fulfilledTimeStamp: I,
                          requestId: B,
                        });
                      });
                    R.data = K;
                  } else R.data = O;
                else
                  R.data =
                    (T = o[k.arg.endpointName].structuralSharing) == null || T
                      ? mm(At(R.data) ? xS(R.data) : R.data, O)
                      : O;
                delete R.error, (R.fulfilledTimeStamp = k.fulfilledTimeStamp);
              }
            });
          })
          .addCase(n.rejected, function (E, x) {
            var k = x.meta,
              O = k.condition,
              R = k.arg,
              T = k.requestId,
              D = x.error,
              I = x.payload;
            jo(E, R.queryCacheKey, function ($) {
              if (!O) {
                if ($.requestId !== T) return;
                ($.status = Se.rejected), ($.error = I ?? D);
              }
            });
          })
          .addMatcher(a, function (E, x) {
            for (
              var k = l(x).queries, O = 0, R = Object.entries(k);
              O < R.length;
              O++
            ) {
              var T = R[O],
                D = T[0],
                I = T[1];
              ((I == null ? void 0 : I.status) === Se.fulfilled ||
                (I == null ? void 0 : I.status) === Se.rejected) &&
                (E[D] = I);
            }
          });
      },
    }),
    v = mn({
      name: t + '/mutations',
      initialState: pi,
      reducers: {
        removeMutationResult: {
          reducer: function (w, E) {
            var x = E.payload,
              k = oo(x);
            k in w && delete w[k];
          },
          prepare: di(),
        },
      },
      extraReducers: function (w) {
        w.addCase(r.pending, function (E, x) {
          var k = x.meta,
            O = x.meta,
            R = O.requestId,
            T = O.arg,
            D = O.startedTimeStamp;
          T.track &&
            (E[oo(k)] = {
              requestId: R,
              status: Se.pending,
              endpointName: T.endpointName,
              startedTimeStamp: D,
            });
        })
          .addCase(r.fulfilled, function (E, x) {
            var k = x.payload,
              O = x.meta;
            O.arg.track &&
              ep(E, O, function (R) {
                R.requestId === O.requestId &&
                  ((R.status = Se.fulfilled),
                  (R.data = k),
                  (R.fulfilledTimeStamp = O.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (E, x) {
            var k = x.payload,
              O = x.error,
              R = x.meta;
            R.arg.track &&
              ep(E, R, function (T) {
                T.requestId === R.requestId &&
                  ((T.status = Se.rejected), (T.error = k ?? O));
              });
          })
          .addMatcher(a, function (E, x) {
            for (
              var k = l(x).mutations, O = 0, R = Object.entries(k);
              O < R.length;
              O++
            ) {
              var T = R[O],
                D = T[0],
                I = T[1];
              ((I == null ? void 0 : I.status) === Se.fulfilled ||
                (I == null ? void 0 : I.status) === Se.rejected) &&
                D !== (I == null ? void 0 : I.requestId) &&
                (E[D] = I);
            }
          });
      },
    }),
    g = mn({
      name: t + '/invalidation',
      initialState: pi,
      reducers: {
        updateProvidedBy: {
          reducer: function (w, E) {
            for (
              var x,
                k,
                O,
                R,
                T = E.payload,
                D = T.queryCacheKey,
                I = T.providedTags,
                $ = 0,
                A = Object.values(w);
              $ < A.length;
              $++
            )
              for (
                var B = A[$], K = 0, N = Object.values(B);
                K < N.length;
                K++
              ) {
                var b = N[K],
                  z = b.indexOf(D);
                z !== -1 && b.splice(z, 1);
              }
            for (var Q = 0, V = I; Q < V.length; Q++) {
              var X = V[Q],
                Z = X.type,
                J = X.id,
                re =
                  (R = (k = (x = w[Z]) != null ? x : (w[Z] = {}))[
                    (O = J || '__internal_without_id')
                  ]) != null
                    ? R
                    : (k[O] = []),
                ae = re.includes(D);
              ae || re.push(D);
            }
          },
          prepare: di(),
        },
      },
      extraReducers: function (w) {
        w.addCase(d.actions.removeQueryResult, function (E, x) {
          for (
            var k = x.payload.queryCacheKey, O = 0, R = Object.values(E);
            O < R.length;
            O++
          )
            for (var T = R[O], D = 0, I = Object.values(T); D < I.length; D++) {
              var $ = I[D],
                A = $.indexOf(k);
              A !== -1 && $.splice(A, 1);
            }
        })
          .addMatcher(a, function (E, x) {
            for (
              var k, O, R, T, D = l(x).provided, I = 0, $ = Object.entries(D);
              I < $.length;
              I++
            )
              for (
                var A = $[I], B = A[0], K = A[1], N = 0, b = Object.entries(K);
                N < b.length;
                N++
              )
                for (
                  var z = b[N],
                    Q = z[0],
                    V = z[1],
                    X =
                      (T = (O = (k = E[B]) != null ? k : (E[B] = {}))[
                        (R = Q || '__internal_without_id')
                      ]) != null
                        ? T
                        : (O[R] = []),
                    Z = 0,
                    J = V;
                  Z < J.length;
                  Z++
                ) {
                  var re = J[Z],
                    ae = X.includes(re);
                  ae || X.push(re);
                }
          })
          .addMatcher(Kr(sr(n), Ml(n)), function (E, x) {
            var k = wm(x, 'providesTags', o, s),
              O = x.meta.arg.queryCacheKey;
            g.caseReducers.updateProvidedBy(
              E,
              g.actions.updateProvidedBy({ queryCacheKey: O, providedTags: k })
            );
          });
      },
    }),
    S = mn({
      name: t + '/subscriptions',
      initialState: pi,
      reducers: {
        updateSubscriptionOptions: function (w, E) {},
        unsubscribeQueryResult: function (w, E) {},
        internal_probeSubscription: function (w, E) {},
      },
    }),
    P = mn({
      name: t + '/internalSubscriptions',
      initialState: pi,
      reducers: {
        subscriptionsUpdated: {
          reducer: function (w, E) {
            return jd(w, E.payload);
          },
          prepare: di(),
        },
      },
    }),
    m = mn({
      name: t + '/config',
      initialState: Oe(
        { online: xw(), focused: Pw(), middlewareRegistered: !1 },
        f
      ),
      reducers: {
        middlewareRegistered: function (w, E) {
          var x = E.payload;
          w.middlewareRegistered =
            w.middlewareRegistered === 'conflict' || u !== x ? 'conflict' : !0;
        },
      },
      extraReducers: function (w) {
        w.addCase(qc, function (E) {
          E.online = !0;
        })
          .addCase(gm, function (E) {
            E.online = !1;
          })
          .addCase(Qc, function (E) {
            E.focused = !0;
          })
          .addCase(ym, function (E) {
            E.focused = !1;
          })
          .addMatcher(a, function (E) {
            return Oe({}, E);
          });
      },
    }),
    h = $c({
      queries: d.reducer,
      mutations: v.reducer,
      provided: g.reducer,
      subscriptions: P.reducer,
      config: m.reducer,
    }),
    y = function (w, E) {
      return h(p.match(E) ? void 0 : w, E);
    },
    c = Ft(
      Oe(
        Oe(
          Oe(Oe(Oe(Oe({}, m.actions), d.actions), S.actions), P.actions),
          v.actions
        ),
        g.actions
      ),
      {
        unsubscribeMutationResult: v.actions.removeMutationResult,
        resetApiState: p,
      }
    );
  return { reducer: y, actions: c };
}
var Xn = Symbol.for('RTKQ/skipToken'),
  Em = { status: Se.uninitialized },
  tp = po(Em, function () {}),
  np = po(Em, function () {});
function Dw(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath,
    r = function (f) {
      return tp;
    },
    i = function (f) {
      return np;
    };
  return {
    buildQuerySelector: l,
    buildMutationSelector: a,
    selectInvalidatedBy: s,
  };
  function o(f) {
    return Oe(Oe({}, f), yw(f.status));
  }
  function u(f) {
    var p = f[n];
    return p;
  }
  function l(f, p) {
    return function (d) {
      var v = t({ queryArgs: d, endpointDefinition: p, endpointName: f }),
        g = function (P) {
          var m, h, y;
          return (y =
            (h = (m = u(P)) == null ? void 0 : m.queries) == null
              ? void 0
              : h[v]) != null
            ? y
            : tp;
        },
        S = d === Xn ? r : g;
      return Ii(S, o);
    };
  }
  function a() {
    return function (f) {
      var p, d;
      typeof f == 'object' ? (d = (p = oo(f)) != null ? p : Xn) : (d = f);
      var v = function (S) {
          var P, m, h;
          return (h =
            (m = (P = u(S)) == null ? void 0 : P.mutations) == null
              ? void 0
              : m[d]) != null
            ? h
            : np;
        },
        g = d === Xn ? i : v;
      return Ii(g, o);
    };
  }
  function s(f, p) {
    for (
      var d, v = f[n], g = new Set(), S = 0, P = p.map(Cs);
      S < P.length;
      S++
    ) {
      var m = P[S],
        h = v.provided[m.type];
      if (h)
        for (
          var y =
              (d = m.id !== void 0 ? h[m.id] : Kd(Object.values(h))) != null
                ? d
                : [],
            c = 0,
            w = y;
          c < w.length;
          c++
        ) {
          var E = w[c];
          g.add(E);
        }
    }
    return Kd(
      Array.from(g.values()).map(function (x) {
        var k = v.queries[x];
        return k
          ? [
              {
                queryCacheKey: x,
                endpointName: k.endpointName,
                originalArgs: k.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var zo = WeakMap ? new WeakMap() : void 0,
  rp = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = '',
      i = zo == null ? void 0 : zo.get(n);
    if (typeof i == 'string') r = i;
    else {
      var o = JSON.stringify(n, function (u, l) {
        return zn(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (a, s) {
                return (a[s] = l[s]), a;
              }, {})
          : l;
      });
      zn(n) && (zo == null || zo.set(n, o)), (r = o);
    }
    return t + '(' + r + ')';
  };
function Iw() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var i = Ps(function (f) {
        var p, d;
        return (d = r.extractRehydrationInfo) == null
          ? void 0
          : d.call(r, f, {
              reducerPath: (p = r.reducerPath) != null ? p : 'api',
            });
      }),
      o = Ft(
        Oe(
          {
            reducerPath: 'api',
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        {
          extractRehydrationInfo: i,
          serializeQueryArgs: function (f) {
            var p = rp;
            if ('serializeQueryArgs' in f.endpointDefinition) {
              var d = f.endpointDefinition.serializeQueryArgs;
              p = function (v) {
                var g = d(v);
                return typeof g == 'string'
                  ? g
                  : rp(Ft(Oe({}, v), { queryArgs: g }));
              };
            } else r.serializeQueryArgs && (p = r.serializeQueryArgs);
            return p(f);
          },
          tagTypes: Lu([], r.tagTypes || []),
        }
      ),
      u = {
        endpointDefinitions: {},
        batch: function (f) {
          f();
        },
        apiUid: dm(),
        extractRehydrationInfo: i,
        hasRehydrationInfo: Ps(function (f) {
          return i(f) != null;
        }),
      },
      l = {
        injectEndpoints: s,
        enhanceEndpoints: function (f) {
          var p = f.addTagTypes,
            d = f.endpoints;
          if (p)
            for (var v = 0, g = p; v < g.length; v++) {
              var S = g[v];
              o.tagTypes.includes(S) || o.tagTypes.push(S);
            }
          if (d)
            for (var P = 0, m = Object.entries(d); P < m.length; P++) {
              var h = m[P],
                y = h[0],
                c = h[1];
              typeof c == 'function'
                ? c(u.endpointDefinitions[y])
                : Object.assign(u.endpointDefinitions[y] || {}, c);
            }
          return l;
        },
      },
      a = e.map(function (f) {
        return f.init(l, o, u);
      });
    function s(f) {
      for (
        var p = f.endpoints({
            query: function (c) {
              return Ft(Oe({}, c), { type: Bt.query });
            },
            mutation: function (c) {
              return Ft(Oe({}, c), { type: Bt.mutation });
            },
          }),
          d = 0,
          v = Object.entries(p);
        d < v.length;
        d++
      ) {
        var g = v[d],
          S = g[0],
          P = g[1];
        if (!f.overrideExisting && S in u.endpointDefinitions) {
          typeof process < 'u';
          continue;
        }
        u.endpointDefinitions[S] = P;
        for (var m = 0, h = a; m < h.length; m++) {
          var y = h[m];
          y.injectEndpoint(S, P);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
function Lw(e) {
  for (var t in e) return !1;
  return !0;
}
var Aw = 2147483647 / 1e3 - 1,
  jw = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      i = e.internalState,
      o = n.internalActions,
      u = o.removeQueryResult,
      l = o.unsubscribeQueryResult;
    function a(d) {
      var v = i.currentSubscriptions[d];
      return !!v && !Lw(v);
    }
    var s = {},
      f = function (d, v, g) {
        var S;
        if (l.match(d)) {
          var P = v.getState()[t],
            m = d.payload.queryCacheKey;
          p(
            m,
            (S = P.queries[m]) == null ? void 0 : S.endpointName,
            v,
            P.config
          );
        }
        if (n.util.resetApiState.match(d))
          for (var h = 0, y = Object.entries(s); h < y.length; h++) {
            var c = y[h],
              w = c[0],
              E = c[1];
            E && clearTimeout(E), delete s[w];
          }
        if (r.hasRehydrationInfo(d))
          for (
            var P = v.getState()[t],
              x = r.extractRehydrationInfo(d).queries,
              k = 0,
              O = Object.entries(x);
            k < O.length;
            k++
          ) {
            var R = O[k],
              m = R[0],
              T = R[1];
            p(m, T == null ? void 0 : T.endpointName, v, P.config);
          }
      };
    function p(d, v, g, S) {
      var P,
        m = r.endpointDefinitions[v],
        h =
          (P = m == null ? void 0 : m.keepUnusedDataFor) != null
            ? P
            : S.keepUnusedDataFor;
      if (h !== 1 / 0) {
        var y = Math.max(0, Math.min(h, Aw));
        if (!a(d)) {
          var c = s[d];
          c && clearTimeout(c),
            (s[d] = setTimeout(function () {
              a(d) || g.dispatch(u({ queryCacheKey: d })), delete s[d];
            }, y * 1e3));
        }
      }
    }
    return f;
  },
  zw = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      i = e.mutationThunk,
      o = e.api,
      u = e.assertTagType,
      l = e.refetchQuery,
      a = o.internalActions.removeQueryResult,
      s = Kr(sr(i), Ml(i)),
      f = function (d, v) {
        s(d) && p(wm(d, 'invalidatesTags', r, u), v),
          o.util.invalidateTags.match(d) &&
            p(Bc(d.payload, void 0, void 0, void 0, void 0, u), v);
      };
    function p(d, v) {
      var g = v.getState(),
        S = g[t],
        P = o.util.selectInvalidatedBy(g, d);
      n.batch(function () {
        for (
          var m, h = Array.from(P.values()), y = 0, c = h;
          y < c.length;
          y++
        ) {
          var w = c[y].queryCacheKey,
            E = S.queries[w],
            x = (m = S.subscriptions[w]) != null ? m : {};
          E &&
            (Object.keys(x).length === 0
              ? v.dispatch(a({ queryCacheKey: w }))
              : E.status !== Se.uninitialized && v.dispatch(l(E, w)));
        }
      });
    }
    return f;
  },
  bw = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      u = {},
      l = function (v, g) {
        (r.internalActions.updateSubscriptionOptions.match(v) ||
          r.internalActions.unsubscribeQueryResult.match(v)) &&
          s(v.payload, g),
          (n.pending.match(v) || (n.rejected.match(v) && v.meta.condition)) &&
            s(v.meta.arg, g),
          (n.fulfilled.match(v) ||
            (n.rejected.match(v) && !v.meta.condition)) &&
            a(v.meta.arg, g),
          r.util.resetApiState.match(v) && p();
      };
    function a(v, g) {
      var S = v.queryCacheKey,
        P = g.getState()[t],
        m = P.queries[S],
        h = o.currentSubscriptions[S];
      if (!(!m || m.status === Se.uninitialized)) {
        var y = d(h);
        if (Number.isFinite(y)) {
          var c = u[S];
          c != null &&
            c.timeout &&
            (clearTimeout(c.timeout), (c.timeout = void 0));
          var w = Date.now() + y,
            E = (u[S] = {
              nextPollTimestamp: w,
              pollingInterval: y,
              timeout: setTimeout(function () {
                (E.timeout = void 0), g.dispatch(i(m, S));
              }, y),
            });
        }
      }
    }
    function s(v, g) {
      var S = v.queryCacheKey,
        P = g.getState()[t],
        m = P.queries[S],
        h = o.currentSubscriptions[S];
      if (!(!m || m.status === Se.uninitialized)) {
        var y = d(h);
        if (!Number.isFinite(y)) {
          f(S);
          return;
        }
        var c = u[S],
          w = Date.now() + y;
        (!c || w < c.nextPollTimestamp) && a({ queryCacheKey: S }, g);
      }
    }
    function f(v) {
      var g = u[v];
      g != null && g.timeout && clearTimeout(g.timeout), delete u[v];
    }
    function p() {
      for (var v = 0, g = Object.keys(u); v < g.length; v++) {
        var S = g[v];
        f(S);
      }
    }
    function d(v) {
      v === void 0 && (v = {});
      var g = Number.POSITIVE_INFINITY;
      for (var S in v)
        v[S].pollingInterval && (g = Math.min(v[S].pollingInterval, g));
      return g;
    }
    return l;
  },
  $w = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      u = r.internalActions.removeQueryResult,
      l = function (s, f) {
        Qc.match(s) && a(f, 'refetchOnFocus'),
          qc.match(s) && a(f, 'refetchOnReconnect');
      };
    function a(s, f) {
      var p = s.getState()[t],
        d = p.queries,
        v = o.currentSubscriptions;
      n.batch(function () {
        for (var g = 0, S = Object.keys(v); g < S.length; g++) {
          var P = S[g],
            m = d[P],
            h = v[P];
          if (!(!h || !m)) {
            var y =
              Object.values(h).some(function (c) {
                return c[f] === !0;
              }) ||
              (Object.values(h).every(function (c) {
                return c[f] === void 0;
              }) &&
                p.config[f]);
            y &&
              (Object.keys(h).length === 0
                ? s.dispatch(u({ queryCacheKey: P }))
                : m.status !== Se.uninitialized && s.dispatch(i(m, P)));
          }
        }
      });
    }
    return l;
  },
  ip = new Error('Promise never resolved before cacheEntryRemoved.'),
  Fw = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      i = e.queryThunk,
      o = e.mutationThunk;
    e.internalState;
    var u = Rs(i),
      l = Rs(o),
      a = sr(i, o),
      s = {},
      f = function (v, g, S) {
        var P = p(v);
        if (i.pending.match(v)) {
          var m = S[n].queries[P],
            h = g.getState()[n].queries[P];
          !m &&
            h &&
            d(
              v.meta.arg.endpointName,
              v.meta.arg.originalArgs,
              P,
              g,
              v.meta.requestId
            );
        } else if (o.pending.match(v)) {
          var h = g.getState()[n].mutations[P];
          h &&
            d(
              v.meta.arg.endpointName,
              v.meta.arg.originalArgs,
              P,
              g,
              v.meta.requestId
            );
        } else if (a(v)) {
          var y = s[P];
          y != null &&
            y.valueResolved &&
            (y.valueResolved({ data: v.payload, meta: v.meta.baseQueryMeta }),
            delete y.valueResolved);
        } else if (
          t.internalActions.removeQueryResult.match(v) ||
          t.internalActions.removeMutationResult.match(v)
        ) {
          var y = s[P];
          y && (delete s[P], y.cacheEntryRemoved());
        } else if (t.util.resetApiState.match(v))
          for (var c = 0, w = Object.entries(s); c < w.length; c++) {
            var E = w[c],
              x = E[0],
              y = E[1];
            delete s[x], y.cacheEntryRemoved();
          }
      };
    function p(v) {
      return u(v)
        ? v.meta.arg.queryCacheKey
        : l(v)
        ? v.meta.requestId
        : t.internalActions.removeQueryResult.match(v)
        ? v.payload.queryCacheKey
        : t.internalActions.removeMutationResult.match(v)
        ? oo(v.payload)
        : '';
    }
    function d(v, g, S, P, m) {
      var h = r.endpointDefinitions[v],
        y = h == null ? void 0 : h.onCacheEntryAdded;
      if (y) {
        var c = {},
          w = new Promise(function (T) {
            c.cacheEntryRemoved = T;
          }),
          E = Promise.race([
            new Promise(function (T) {
              c.valueResolved = T;
            }),
            w.then(function () {
              throw ip;
            }),
          ]);
        E.catch(function () {}), (s[S] = c);
        var x = t.endpoints[v].select(h.type === Bt.query ? g : S),
          k = P.dispatch(function (T, D, I) {
            return I;
          }),
          O = Ft(Oe({}, P), {
            getCacheEntry: function () {
              return x(P.getState());
            },
            requestId: m,
            extra: k,
            updateCachedData:
              h.type === Bt.query
                ? function (T) {
                    return P.dispatch(t.util.updateQueryData(v, g, T));
                  }
                : void 0,
            cacheDataLoaded: E,
            cacheEntryRemoved: w,
          }),
          R = y(g, O);
        Promise.resolve(R).catch(function (T) {
          if (T !== ip) throw T;
        });
      }
    }
    return f;
  },
  Uw = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      i = e.mutationThunk,
      o = Fc(r, i),
      u = ro(r, i),
      l = sr(r, i),
      a = {},
      s = function (f, p) {
        var d, v, g;
        if (o(f)) {
          var S = f.meta,
            P = S.requestId,
            m = S.arg,
            h = m.endpointName,
            y = m.originalArgs,
            c = n.endpointDefinitions[h],
            w = c == null ? void 0 : c.onQueryStarted;
          if (w) {
            var E = {},
              x = new Promise(function (A, B) {
                (E.resolve = A), (E.reject = B);
              });
            x.catch(function () {}), (a[P] = E);
            var k = t.endpoints[h].select(c.type === Bt.query ? y : P),
              O = p.dispatch(function (A, B, K) {
                return K;
              }),
              R = Ft(Oe({}, p), {
                getCacheEntry: function () {
                  return k(p.getState());
                },
                requestId: P,
                extra: O,
                updateCachedData:
                  c.type === Bt.query
                    ? function (A) {
                        return p.dispatch(t.util.updateQueryData(h, y, A));
                      }
                    : void 0,
                queryFulfilled: x,
              });
            w(y, R);
          }
        } else if (l(f)) {
          var T = f.meta,
            P = T.requestId,
            D = T.baseQueryMeta;
          (d = a[P]) == null || d.resolve({ data: f.payload, meta: D }),
            delete a[P];
        } else if (u(f)) {
          var I = f.meta,
            P = I.requestId,
            $ = I.rejectedWithValue,
            D = I.baseQueryMeta;
          (g = a[P]) == null ||
            g.reject({
              error: (v = f.payload) != null ? v : f.error,
              isUnhandledError: !$,
              meta: D,
            }),
            delete a[P];
        }
      };
    return s;
  },
  Qw = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (i, o) {
      var u, l;
      t.util.resetApiState.match(i) &&
        o.dispatch(t.internalActions.middlewareRegistered(n)),
        typeof process < 'u';
    };
  },
  op,
  qw =
    typeof queueMicrotask == 'function'
      ? queueMicrotask.bind(
          typeof window < 'u'
            ? window
            : typeof global < 'u'
            ? global
            : globalThis
        )
      : function (e) {
          return (op || (op = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  Bw = function (e) {
    var t = e.api,
      n = e.queryThunk,
      r = e.internalState,
      i = t.reducerPath + '/subscriptions',
      o = null,
      u = !1,
      l = t.internalActions,
      a = l.updateSubscriptionOptions,
      s = l.unsubscribeQueryResult,
      f = function (p, d) {
        var v, g, S, P, m, h, y, c, w;
        if (a.match(d)) {
          var E = d.payload,
            x = E.queryCacheKey,
            k = E.requestId,
            O = E.options;
          return (
            (v = p == null ? void 0 : p[x]) != null && v[k] && (p[x][k] = O), !0
          );
        }
        if (s.match(d)) {
          var R = d.payload,
            x = R.queryCacheKey,
            k = R.requestId;
          return p[x] && delete p[x][k], !0;
        }
        if (t.internalActions.removeQueryResult.match(d))
          return delete p[d.payload.queryCacheKey], !0;
        if (n.pending.match(d)) {
          var T = d.meta,
            D = T.arg,
            k = T.requestId;
          if (D.subscribe) {
            var I = (S = p[(g = D.queryCacheKey)]) != null ? S : (p[g] = {});
            return (
              (I[k] =
                (m = (P = D.subscriptionOptions) != null ? P : I[k]) != null
                  ? m
                  : {}),
              !0
            );
          }
        }
        if (n.rejected.match(d)) {
          var $ = d.meta,
            A = $.condition,
            D = $.arg,
            k = $.requestId;
          if (A && D.subscribe) {
            var I = (y = p[(h = D.queryCacheKey)]) != null ? y : (p[h] = {});
            return (
              (I[k] =
                (w = (c = D.subscriptionOptions) != null ? c : I[k]) != null
                  ? w
                  : {}),
              !0
            );
          }
        }
        return !1;
      };
    return function (p, d) {
      var v, g;
      if (
        (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        t.util.resetApiState.match(p))
      )
        return (o = r.currentSubscriptions = {}), [!0, !1];
      if (t.internalActions.internal_probeSubscription.match(p)) {
        var S = p.payload,
          P = S.queryCacheKey,
          m = S.requestId,
          h = !!((v = r.currentSubscriptions[P]) != null && v[m]);
        return [!1, h];
      }
      var y = f(r.currentSubscriptions, p);
      if (y) {
        u ||
          (qw(function () {
            var x = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              k = um(o, function () {
                return x;
              }),
              O = k[1];
            d.next(t.internalActions.subscriptionsUpdated(O)),
              (o = x),
              (u = !1);
          }),
          (u = !0));
        var c = !!((g = p.type) != null && g.startsWith(i)),
          w = n.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe,
          E = !c && !w;
        return [E, !1];
      }
      return [!0, !1];
    };
  };
function Vw(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.api,
    i = e.context,
    o = i.apiUid,
    u = { invalidateTags: ut(t + '/invalidateTags') },
    l = function (p) {
      return !!p && typeof p.type == 'string' && p.type.startsWith(t + '/');
    },
    a = [Qw, jw, zw, bw, Fw, Uw],
    s = function (p) {
      var d = !1,
        v = { currentSubscriptions: {} },
        g = Ft(Oe({}, e), { internalState: v, refetchQuery: f }),
        S = a.map(function (h) {
          return h(g);
        }),
        P = Bw(g),
        m = $w(g);
      return function (h) {
        return function (y) {
          d ||
            ((d = !0), p.dispatch(r.internalActions.middlewareRegistered(o)));
          var c = Ft(Oe({}, p), { next: h }),
            w = p.getState(),
            E = P(y, c, w),
            x = E[0],
            k = E[1],
            O;
          if (
            (x ? (O = h(y)) : (O = k),
            p.getState()[t] && (m(y, c, w), l(y) || i.hasRehydrationInfo(y)))
          )
            for (var R = 0, T = S; R < T.length; R++) {
              var D = T[R];
              D(y, c, w);
            }
          return O;
        };
      };
    };
  return { middleware: s, actions: u };
  function f(p, d, v) {
    return (
      v === void 0 && (v = {}),
      n(
        Oe(
          {
            type: 'query',
            endpointName: p.endpointName,
            originalArgs: p.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: d,
          },
          v
        )
      )
    );
  }
}
function dn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, Lu([e], t));
}
var up = Symbol(),
  Ww = function () {
    return {
      name: up,
      init: function (e, t, n) {
        var r = t.baseQuery,
          i = t.tagTypes,
          o = t.reducerPath,
          u = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          a = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          f = t.refetchOnReconnect;
        OS();
        var p = function (X) {
          return typeof process < 'u', X;
        };
        Object.assign(e, {
          reducerPath: o,
          endpoints: {},
          internalActions: {
            onOnline: qc,
            onOffline: gm,
            onFocus: Qc,
            onFocusLost: ym,
          },
          util: {},
        });
        var d = _w({
            baseQuery: r,
            reducerPath: o,
            context: n,
            api: e,
            serializeQueryArgs: u,
            assertTagType: p,
          }),
          v = d.queryThunk,
          g = d.mutationThunk,
          S = d.patchQueryData,
          P = d.updateQueryData,
          m = d.upsertQueryData,
          h = d.prefetch,
          y = d.buildMatchThunkActions,
          c = Nw({
            context: n,
            queryThunk: v,
            mutationThunk: g,
            reducerPath: o,
            assertTagType: p,
            config: {
              refetchOnFocus: s,
              refetchOnReconnect: f,
              refetchOnMountOrArgChange: a,
              keepUnusedDataFor: l,
              reducerPath: o,
            },
          }),
          w = c.reducer,
          E = c.actions;
        dn(e.util, {
          patchQueryData: S,
          updateQueryData: P,
          upsertQueryData: m,
          prefetch: h,
          resetApiState: E.resetApiState,
        }),
          dn(e.internalActions, E);
        var x = Vw({
            reducerPath: o,
            context: n,
            queryThunk: v,
            mutationThunk: g,
            api: e,
            assertTagType: p,
          }),
          k = x.middleware,
          O = x.actions;
        dn(e.util, O), dn(e, { reducer: w, middleware: k });
        var R = Dw({ serializeQueryArgs: u, reducerPath: o }),
          T = R.buildQuerySelector,
          D = R.buildMutationSelector,
          I = R.selectInvalidatedBy;
        dn(e.util, { selectInvalidatedBy: I });
        var $ = Mw({
            queryThunk: v,
            mutationThunk: g,
            api: e,
            serializeQueryArgs: u,
            context: n,
          }),
          A = $.buildInitiateQuery,
          B = $.buildInitiateMutation,
          K = $.getRunningMutationThunk,
          N = $.getRunningMutationsThunk,
          b = $.getRunningQueriesThunk,
          z = $.getRunningQueryThunk,
          Q = $.getRunningOperationPromises,
          V = $.removalWarning;
        return (
          dn(e.util, {
            getRunningOperationPromises: Q,
            getRunningOperationPromise: V,
            getRunningMutationThunk: K,
            getRunningMutationsThunk: N,
            getRunningQueryThunk: z,
            getRunningQueriesThunk: b,
          }),
          {
            name: up,
            injectEndpoint: function (X, Z) {
              var J,
                re,
                ae = e;
              (re = (J = ae.endpoints)[X]) != null || (J[X] = {}),
                Sm(Z)
                  ? dn(
                      ae.endpoints[X],
                      { name: X, select: T(X, Z), initiate: A(X, Z) },
                      y(v, X)
                    )
                  : Ow(Z) &&
                    dn(
                      ae.endpoints[X],
                      { name: X, select: D(), initiate: B(X) },
                      y(g, X)
                    );
            },
          }
        );
      },
    };
  },
  Hw =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  Kw = Object.defineProperty,
  Yw = Object.defineProperties,
  Gw = Object.getOwnPropertyDescriptors,
  lp = Object.getOwnPropertySymbols,
  Xw = Object.prototype.hasOwnProperty,
  Jw = Object.prototype.propertyIsEnumerable,
  ap = function (e, t, n) {
    return t in e
      ? Kw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Wt = function (e, t) {
    for (var n in t || (t = {})) Xw.call(t, n) && ap(e, n, t[n]);
    if (lp)
      for (var r = 0, i = lp(t); r < i.length; r++) {
        var n = i[r];
        Jw.call(t, n) && ap(e, n, t[n]);
      }
    return e;
  },
  Zo = function (e, t) {
    return Yw(e, Gw(t));
  };
function sp(e, t, n, r) {
  var i = M.useMemo(
      function () {
        return {
          queryArgs: e,
          serialized:
            typeof e == 'object'
              ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
              : e,
        };
      },
      [e, t, n, r]
    ),
    o = M.useRef(i);
  return (
    M.useEffect(
      function () {
        o.current.serialized !== i.serialized && (o.current = i);
      },
      [i]
    ),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  );
}
var Sa = Symbol();
function wa(e) {
  var t = M.useRef(e);
  return (
    M.useEffect(
      function () {
        Cu(t.current, e) || (t.current = e);
      },
      [e]
    ),
    Cu(t.current, e) ? t.current : e
  );
}
var bo = WeakMap ? new WeakMap() : void 0,
  Zw = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = '',
      i = bo == null ? void 0 : bo.get(n);
    if (typeof i == 'string') r = i;
    else {
      var o = JSON.stringify(n, function (u, l) {
        return zn(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (a, s) {
                return (a[s] = l[s]), a;
              }, {})
          : l;
      });
      zn(n) && (bo == null || bo.set(n, o)), (r = o);
    }
    return t + '(' + r + ')';
  },
  eE =
    typeof window < 'u' && window.document && window.document.createElement
      ? M.useLayoutEffect
      : M.useEffect,
  tE = function (e) {
    return e;
  },
  nE = function (e) {
    return e.isUninitialized
      ? Zo(Wt({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: Se.pending,
        })
      : e;
  };
function rE(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    i = n.useDispatch,
    o = n.useSelector,
    u = n.useStore,
    l = n.unstable__sideEffectsInRender,
    a = e.serializeQueryArgs,
    s = e.context,
    f = l
      ? function (S) {
          return S();
        }
      : M.useEffect;
  return { buildQueryHooks: v, buildMutationHook: g, usePrefetch: d };
  function p(S, P, m) {
    if (P != null && P.endpointName && S.isUninitialized) {
      var h = P.endpointName,
        y = s.endpointDefinitions[h];
      a({
        queryArgs: P.originalArgs,
        endpointDefinition: y,
        endpointName: h,
      }) === a({ queryArgs: m, endpointDefinition: y, endpointName: h }) &&
        (P = void 0);
    }
    var c = S.isSuccess ? S.data : P == null ? void 0 : P.data;
    c === void 0 && (c = S.data);
    var w = c !== void 0,
      E = S.isLoading,
      x = !w && E,
      k = S.isSuccess || (E && w);
    return Zo(Wt({}, S), {
      data: c,
      currentData: S.data,
      isFetching: E,
      isLoading: x,
      isSuccess: k,
    });
  }
  function d(S, P) {
    var m = i(),
      h = wa(P);
    return M.useCallback(
      function (y, c) {
        return m(t.util.prefetch(S, y, Wt(Wt({}, h), c)));
      },
      [S, m, h]
    );
  }
  function v(S) {
    var P = function (y, c) {
        var w = c === void 0 ? {} : c,
          E = w.refetchOnReconnect,
          x = w.refetchOnFocus,
          k = w.refetchOnMountOrArgChange,
          O = w.skip,
          R = O === void 0 ? !1 : O,
          T = w.pollingInterval,
          D = T === void 0 ? 0 : T,
          I = t.endpoints[S].initiate,
          $ = i(),
          A = sp(R ? Xn : y, Zw, s.endpointDefinitions[S], S),
          B = wa({
            refetchOnReconnect: E,
            refetchOnFocus: x,
            pollingInterval: D,
          }),
          K = M.useRef(!1),
          N = M.useRef(),
          b = N.current || {},
          z = b.queryCacheKey,
          Q = b.requestId,
          V = !1;
        if (z && Q) {
          var X = $(
            t.internalActions.internal_probeSubscription({
              queryCacheKey: z,
              requestId: Q,
            })
          );
          V = !!X;
        }
        var Z = !V && K.current;
        return (
          f(function () {
            K.current = V;
          }),
          f(
            function () {
              Z && (N.current = void 0);
            },
            [Z]
          ),
          f(
            function () {
              var J,
                re = N.current;
              if ((typeof process < 'u', A === Xn)) {
                re == null || re.unsubscribe(), (N.current = void 0);
                return;
              }
              var ae = (J = N.current) == null ? void 0 : J.subscriptionOptions;
              if (!re || re.arg !== A) {
                re == null || re.unsubscribe();
                var yt = $(I(A, { subscriptionOptions: B, forceRefetch: k }));
                N.current = yt;
              } else B !== ae && re.updateSubscriptionOptions(B);
            },
            [$, I, k, A, B, Z]
          ),
          M.useEffect(function () {
            return function () {
              var J;
              (J = N.current) == null || J.unsubscribe(), (N.current = void 0);
            };
          }, []),
          M.useMemo(function () {
            return {
              refetch: function () {
                var J;
                if (!N.current)
                  throw new Error(
                    'Cannot refetch a query that has not been started yet.'
                  );
                return (J = N.current) == null ? void 0 : J.refetch();
              },
            };
          }, [])
        );
      },
      m = function (y) {
        var c = y === void 0 ? {} : y,
          w = c.refetchOnReconnect,
          E = c.refetchOnFocus,
          x = c.pollingInterval,
          k = x === void 0 ? 0 : x,
          O = t.endpoints[S].initiate,
          R = i(),
          T = M.useState(Sa),
          D = T[0],
          I = T[1],
          $ = M.useRef(),
          A = wa({
            refetchOnReconnect: w,
            refetchOnFocus: E,
            pollingInterval: k,
          });
        f(
          function () {
            var N,
              b,
              z = (N = $.current) == null ? void 0 : N.subscriptionOptions;
            A !== z &&
              ((b = $.current) == null || b.updateSubscriptionOptions(A));
          },
          [A]
        );
        var B = M.useRef(A);
        f(
          function () {
            B.current = A;
          },
          [A]
        );
        var K = M.useCallback(
          function (N, b) {
            b === void 0 && (b = !1);
            var z;
            return (
              r(function () {
                var Q;
                (Q = $.current) == null || Q.unsubscribe(),
                  ($.current = z =
                    R(
                      O(N, { subscriptionOptions: B.current, forceRefetch: !b })
                    )),
                  I(N);
              }),
              z
            );
          },
          [R, O]
        );
        return (
          M.useEffect(function () {
            return function () {
              var N;
              (N = $ == null ? void 0 : $.current) == null || N.unsubscribe();
            };
          }, []),
          M.useEffect(
            function () {
              D !== Sa && !$.current && K(D, !0);
            },
            [D, K]
          ),
          M.useMemo(
            function () {
              return [K, D];
            },
            [K, D]
          )
        );
      },
      h = function (y, c) {
        var w = c === void 0 ? {} : c,
          E = w.skip,
          x = E === void 0 ? !1 : E,
          k = w.selectFromResult,
          O = t.endpoints[S].select,
          R = sp(x ? Xn : y, a, s.endpointDefinitions[S], S),
          T = M.useRef(),
          D = M.useMemo(
            function () {
              return Ii(
                [
                  O(R),
                  function (K, N) {
                    return N;
                  },
                  function (K) {
                    return R;
                  },
                ],
                p
              );
            },
            [O, R]
          ),
          I = M.useMemo(
            function () {
              return k ? Ii([D], k) : D;
            },
            [D, k]
          ),
          $ = o(function (K) {
            return I(K, T.current);
          }, Cu),
          A = u(),
          B = D(A.getState(), T.current);
        return (
          eE(
            function () {
              T.current = B;
            },
            [B]
          ),
          $
        );
      };
    return {
      useQueryState: h,
      useQuerySubscription: P,
      useLazyQuerySubscription: m,
      useLazyQuery: function (y) {
        var c = m(y),
          w = c[0],
          E = c[1],
          x = h(E, Zo(Wt({}, y), { skip: E === Sa })),
          k = M.useMemo(
            function () {
              return { lastArg: E };
            },
            [E]
          );
        return M.useMemo(
          function () {
            return [w, x, k];
          },
          [w, x, k]
        );
      },
      useQuery: function (y, c) {
        var w = P(y, c),
          E = h(
            y,
            Wt(
              {
                selectFromResult:
                  y === Xn || (c != null && c.skip) ? void 0 : nE,
              },
              c
            )
          ),
          x = E.data,
          k = E.status,
          O = E.isLoading,
          R = E.isSuccess,
          T = E.isError,
          D = E.error;
        return (
          M.useDebugValue({
            data: x,
            status: k,
            isLoading: O,
            isSuccess: R,
            isError: T,
            error: D,
          }),
          M.useMemo(
            function () {
              return Wt(Wt({}, E), w);
            },
            [E, w]
          )
        );
      },
    };
  }
  function g(S) {
    return function (P) {
      var m = P === void 0 ? {} : P,
        h = m.selectFromResult,
        y = h === void 0 ? tE : h,
        c = m.fixedCacheKey,
        w = t.endpoints[S],
        E = w.select,
        x = w.initiate,
        k = i(),
        O = M.useState(),
        R = O[0],
        T = O[1];
      M.useEffect(
        function () {
          return function () {
            (R != null && R.arg.fixedCacheKey) || R == null || R.reset();
          };
        },
        [R]
      );
      var D = M.useCallback(
          function (re) {
            var ae = k(x(re, { fixedCacheKey: c }));
            return T(ae), ae;
          },
          [k, x, c]
        ),
        I = (R || {}).requestId,
        $ = M.useMemo(
          function () {
            return Ii(
              [
                E({
                  fixedCacheKey: c,
                  requestId: R == null ? void 0 : R.requestId,
                }),
              ],
              y
            );
          },
          [E, R, y, c]
        ),
        A = o($, Cu),
        B = c == null ? (R == null ? void 0 : R.arg.originalArgs) : void 0,
        K = M.useCallback(
          function () {
            r(function () {
              R && T(void 0),
                c &&
                  k(
                    t.internalActions.removeMutationResult({
                      requestId: I,
                      fixedCacheKey: c,
                    })
                  );
            });
          },
          [k, c, R, I]
        ),
        N = A.endpointName,
        b = A.data,
        z = A.status,
        Q = A.isLoading,
        V = A.isSuccess,
        X = A.isError,
        Z = A.error;
      M.useDebugValue({
        endpointName: N,
        data: b,
        status: z,
        isLoading: Q,
        isSuccess: V,
        isError: X,
        error: Z,
      });
      var J = M.useMemo(
        function () {
          return Zo(Wt({}, A), { originalArgs: B, reset: K });
        },
        [A, B, K]
      );
      return M.useMemo(
        function () {
          return [D, J];
        },
        [D, J]
      );
    };
  }
}
var zu;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(zu || (zu = {}));
function iE(e) {
  return e.type === zu.query;
}
function oE(e) {
  return e.type === zu.mutation;
}
function Ea(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function $o(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, Hw([e], t));
}
var uE = Symbol(),
  lE = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? xc.unstable_batchedUpdates : n,
      i = t.useDispatch,
      o = i === void 0 ? Ic : i,
      u = t.useSelector,
      l = u === void 0 ? Oc : u,
      a = t.useStore,
      s = a === void 0 ? tm : a,
      f = t.unstable__sideEffectsInRender,
      p = f === void 0 ? !1 : f;
    return {
      name: uE,
      init: function (d, v, g) {
        var S = v.serializeQueryArgs,
          P = d,
          m = rE({
            api: d,
            moduleOptions: {
              batch: r,
              useDispatch: o,
              useSelector: l,
              useStore: s,
              unstable__sideEffectsInRender: p,
            },
            serializeQueryArgs: S,
            context: g,
          }),
          h = m.buildQueryHooks,
          y = m.buildMutationHook,
          c = m.usePrefetch;
        return (
          $o(P, { usePrefetch: c }),
          $o(g, { batch: r }),
          {
            injectEndpoint: function (w, E) {
              if (iE(E)) {
                var x = h(w),
                  k = x.useQuery,
                  O = x.useLazyQuery,
                  R = x.useLazyQuerySubscription,
                  T = x.useQueryState,
                  D = x.useQuerySubscription;
                $o(P.endpoints[w], {
                  useQuery: k,
                  useLazyQuery: O,
                  useLazyQuerySubscription: R,
                  useQueryState: T,
                  useQuerySubscription: D,
                }),
                  (d['use' + Ea(w) + 'Query'] = k),
                  (d['useLazy' + Ea(w) + 'Query'] = O);
              } else if (oE(E)) {
                var I = y(w);
                $o(P.endpoints[w], { useMutation: I }),
                  (d['use' + Ea(w) + 'Mutation'] = I);
              }
            },
          }
        );
      },
    };
  },
  aE = Iw(Ww(), lE());
const bu = aE({
    reducerPath: 'api',
    baseQuery: Cw({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (e) => ({
      getPosts: e.query({ query: () => 'posts' }),
      getPostById: e.query({ query: (t) => `posts/${t}` }),
    }),
  }),
  { useGetPostsQuery: sE, useGetPostByIdQuery: cE } = bu,
  xm = mn({
    name: 'postsPerPage',
    initialState: 7,
    reducers: { setPostsPerPage: (e, t) => t.payload },
  }),
  { setPostsPerPage: fE } = xm.actions,
  dE = (e) => e.postsPerPage,
  pE = xm.reducer;
const hE = ({ postsPerPage: e, totalPosts: t, paginate: n }) => {
  const r = [];
  for (let i = 1; i <= Math.ceil(t / e); i++) r.push(i);
  return q.jsx('ul', {
    className: 'pagination',
    children: r.map((i) =>
      q.jsx(
        'li',
        {
          className: 'page-number',
          children: q.jsx('button', {
            className: 'page-btn',
            onClick: () => n(i),
            children: i,
          }),
        },
        i
      )
    ),
  });
};
function vE({ posts: e, loading: t }) {
  return t
    ? q.jsx('h2', { children: 'Loading ...' })
    : e.length === 0
    ? q.jsx('h2', { className: 'no-posts', children: 'No posts found' })
    : q.jsx('div', {
        className: 'posts-list',
        children: e.map((n, r) =>
          q.jsxs(
            Ni,
            {
              className: 'post-item',
              to: `${n.id}`,
              children: [
                q.jsxs('span', {
                  className: 'post-id',
                  children: [n.id, ' - '],
                }),
                n.title,
              ],
            },
            r
          )
        ),
      });
}
const Pm = mn({
    name: 'search',
    initialState: { inputValue: '' },
    reducers: {
      setSearchInput: (e, t) => {
        e.inputValue = t.payload;
      },
    },
  }),
  { setSearchInput: km } = Pm.actions,
  mE = (e) => e.search.inputValue,
  yE = Pm.reducer;
function gE({ handleSearch: e }) {
  const t = Ic(),
    n = Oc(mE),
    r = (u) => {
      t(km(u.target.value));
    },
    i = (u) => {
      u.key === 'Enter' && (e(n), localStorage.setItem('searchInput', n));
    },
    o = () => {
      e(n), localStorage.setItem('searchInput', n);
    };
  return q.jsxs('div', {
    className: 'input_wrapper',
    children: [
      q.jsx('input', {
        placeholder: '...',
        value: n,
        onChange: r,
        onKeyPress: i,
      }),
      q.jsx('button', {
        className: 'search-button',
        onClick: o,
        children: 'Search',
      }),
    ],
  });
}
const SE = () => {
  const e = Ic(),
    t = sE(),
    n = t.isLoading,
    r = Oc(dE),
    [i, o] = M.useState(1),
    [u, l] = M.useState([]);
  M.useEffect(() => {
    const S = localStorage.getItem('searchInput');
    s(S || '');
  }, [t]);
  const a = (S) => {
      const m = (t.data || []).filter(
        (h) => h && h.title && h.title.toLowerCase().includes(S.toLowerCase())
      );
      l(m);
    },
    s = (S) => {
      a(S), e(km(S));
    },
    f = (S) => {
      e(fE(S));
    },
    p = i * r,
    d = p - r,
    v = u.slice(d, p),
    g = (S) => o(S);
  return q.jsxs('div', {
    className: 'posts-page',
    children: [
      q.jsxs('div', {
        className: 'posts-page-posts',
        children: [
          q.jsx(gE, { handleSearch: s }),
          q.jsx('h1', { className: 'posts-title', children: 'Posts page' }),
          q.jsxs('div', {
            className: 'posts-per-page-dropdown',
            children: [
              q.jsx('label', {
                htmlFor: 'postsPerPage',
                children: 'Posts per page:',
              }),
              q.jsxs('select', {
                id: 'postsPerPage',
                name: 'postsPerPage',
                value: r,
                onChange: (S) => f(Number(S.target.value)),
                'data-testid': 'postsPerPage',
                children: [
                  q.jsx('option', { value: 5, children: '5' }),
                  q.jsx('option', { value: 10, children: '10' }),
                  q.jsx('option', { value: 15, children: '15' }),
                ],
              }),
            ],
          }),
          n
            ? q.jsx('p', { children: 'Loading...' })
            : q.jsxs(q.Fragment, {
                children: [
                  q.jsx(vE, { posts: v, loading: n }),
                  q.jsx(hE, {
                    postsPerPage: r,
                    totalPosts: u.length,
                    paginate: g,
                  }),
                ],
              }),
        ],
      }),
      q.jsx('div', {
        className: 'posts-page-single-post',
        children: q.jsx(Fv, {}),
      }),
    ],
  });
};
const wE = () => {
    const { id: e } = Z0(),
      t = jv(),
      { data: n, isError: r } = cE(Number(e));
    M.useEffect(() => {
      r && t('/error');
    }, [r, t]);
    const i = () => {
      t('/RSSchool_Stage3/dist/posts');
    };
    return q.jsxs('div', {
      className: 'single-post-page',
      'data-testid': 'single-post-page',
      children: [
        q.jsx('button', {
          className: 'single-post-back-btn',
          onClick: i,
          children: 'Close',
        }),
        q.jsx('h1', { children: 'Single Post Page' }),
        q.jsx('div', {
          className: 'single-page-block',
          children: n
            ? q.jsxs(q.Fragment, {
                children: [
                  q.jsxs('p', {
                    className: 'post-id',
                    children: [q.jsx('span', { children: 'Post ID:' }), n.id],
                  }),
                  q.jsxs('p', {
                    children: [
                      q.jsx('span', { children: 'Post Title:' }),
                      n.title,
                    ],
                  }),
                  q.jsxs('p', {
                    children: [
                      q.jsx('span', { children: 'Post Body:' }),
                      n.body,
                    ],
                  }),
                ],
              })
            : q.jsx('p', { children: 'Loading...' }),
        }),
      ],
    });
  },
  EE = y1([
    {
      path: '/RSSchool_Stage3/dist/',
      element: q.jsx(D1, {}),
      errorElement: q.jsx(N1, {}),
      children: [
        {
          element: q.jsx(SE, {}),
          path: '/RSSchool_Stage3/dist/posts',
          children: [{ element: q.jsx(wE, {}), path: ':id' }],
        },
      ],
    },
  ]),
  xE = $c({ search: yE, postsPerPage: pE, [bu.reducerPath]: bu.reducer }),
  PE = ow({ reducer: xE, middleware: (e) => e().concat(bu.middleware) });
xa.createRoot(document.getElementById('root')).render(
  q.jsx(Sp.StrictMode, {
    children: q.jsx(wS, { store: PE, children: q.jsx(R1, { router: EE }) }),
  })
);
