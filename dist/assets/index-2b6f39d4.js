function eh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
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
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const i of l.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function th(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Hc = { exports: {} },
  Dl = {},
  Vc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vo = Symbol.for('react.element'),
  nh = Symbol.for('react.portal'),
  rh = Symbol.for('react.fragment'),
  oh = Symbol.for('react.strict_mode'),
  lh = Symbol.for('react.profiler'),
  ih = Symbol.for('react.provider'),
  uh = Symbol.for('react.context'),
  ah = Symbol.for('react.forward_ref'),
  sh = Symbol.for('react.suspense'),
  ch = Symbol.for('react.memo'),
  fh = Symbol.for('react.lazy'),
  ls = Symbol.iterator;
function dh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ls && e[ls]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Wc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Kc = Object.assign,
  Qc = {};
function fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qc),
    (this.updater = n || Wc);
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Jc() {}
Jc.prototype = fr.prototype;
function Wu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qc),
    (this.updater = n || Wc);
}
var Ku = (Wu.prototype = new Jc());
Ku.constructor = Wu;
Kc(Ku, fr.prototype);
Ku.isPureReactComponent = !0;
var is = Array.isArray,
  Yc = Object.prototype.hasOwnProperty,
  Qu = { current: null },
  Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      Yc.call(t, r) && !Xc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: vo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Qu.current,
  };
}
function ph(e, t) {
  return {
    $$typeof: vo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ju(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === vo;
}
function hh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var us = /\/+/g;
function si(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? hh('' + e.key)
    : t.toString(36);
}
function Ko(e, t, n, r, o) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case vo:
          case nh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + si(i, 0) : r),
      is(o)
        ? ((n = ''),
          e != null && (n = e.replace(us, '$&/') + '/'),
          Ko(o, t, n, '', function (s) {
            return s;
          }))
        : o != null &&
          (Ju(o) &&
            (o = ph(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(us, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), is(e)))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var a = r + si(l, u);
      i += Ko(l, t, n, a, o);
    }
  else if (((a = dh(e)), typeof a == 'function'))
    for (e = a.call(e), u = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + si(l, u++)), (i += Ko(l, t, n, a, o));
  else if (l === 'object')
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
  return i;
}
function No(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ko(e, r, '', '', function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function mh(e) {
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
var Fe = { current: null },
  Qo = { transition: null },
  yh = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Qo,
    ReactCurrentOwner: Qu,
  };
K.Children = {
  map: No,
  forEach: function (e, t, n) {
    No(
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
      No(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      No(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ju(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
K.Component = fr;
K.Fragment = rh;
K.Profiler = lh;
K.PureComponent = Wu;
K.StrictMode = oh;
K.Suspense = sh;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yh;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Kc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Qu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Yc.call(t, a) &&
        !Xc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: vo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: uh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ih, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Gc;
K.createFactory = function (e) {
  var t = Gc.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: ah, render: e };
};
K.isValidElement = Ju;
K.lazy = function (e) {
  return { $$typeof: fh, _payload: { _status: -1, _result: e }, _init: mh };
};
K.memo = function (e, t) {
  return { $$typeof: ch, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Qo.transition;
  Qo.transition = {};
  try {
    e();
  } finally {
    Qo.transition = t;
  }
};
K.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
K.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Fe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
K.useId = function () {
  return Fe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Fe.current.useRef(e);
};
K.useState = function (e) {
  return Fe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Fe.current.useTransition();
};
K.version = '18.2.0';
Vc.exports = K;
var N = Vc.exports;
const qc = th(N),
  vh = eh({ __proto__: null, default: qc }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gh = N,
  wh = Symbol.for('react.element'),
  Sh = Symbol.for('react.fragment'),
  Eh = Object.prototype.hasOwnProperty,
  xh = gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Eh.call(t, r) && !kh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: wh,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: xh.current,
  };
}
Dl.Fragment = Sh;
Dl.jsx = Zc;
Dl.jsxs = Zc;
Hc.exports = Dl;
var B = Hc.exports,
  Hi = {},
  bc = { exports: {} },
  Je = {},
  ef = { exports: {} },
  tf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, A) {
    var $ = O.length;
    O.push(A);
    e: for (; 0 < $; ) {
      var q = ($ - 1) >>> 1,
        ee = O[q];
      if (0 < o(ee, A)) (O[q] = A), (O[$] = ee), ($ = q);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var A = O[0],
      $ = O.pop();
    if ($ !== A) {
      O[0] = $;
      e: for (var q = 0, ee = O.length, Xe = ee >>> 1; q < Xe; ) {
        var Me = 2 * (q + 1) - 1,
          dn = O[Me],
          xt = Me + 1,
          Mn = O[xt];
        if (0 > o(dn, $))
          xt < ee && 0 > o(Mn, dn)
            ? ((O[q] = Mn), (O[xt] = $), (q = xt))
            : ((O[q] = dn), (O[Me] = $), (q = Me));
        else if (xt < ee && 0 > o(Mn, $)) (O[q] = Mn), (O[xt] = $), (q = xt);
        else break e;
      }
    }
    return A;
  }
  function o(O, A) {
    var $ = O.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : O.id - A.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    c = 1,
    h = null,
    m = 3,
    S = !1,
    y = !1,
    g = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(O) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= O)
        r(s), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(s);
    }
  }
  function f(O) {
    if (((g = !1), v(O), !y))
      if (n(a) !== null) (y = !0), At(C);
      else {
        var A = n(s);
        A !== null && Et(f, A.startTime - O);
      }
  }
  function C(O, A) {
    (y = !1), g && ((g = !1), p(L), (L = -1)), (S = !0);
    var $ = m;
    try {
      for (
        v(A), h = n(a);
        h !== null && (!(h.expirationTime > A) || (O && !le()));

      ) {
        var q = h.callback;
        if (typeof q == 'function') {
          (h.callback = null), (m = h.priorityLevel);
          var ee = q(h.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ee == 'function' ? (h.callback = ee) : h === n(a) && r(a),
            v(A);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Xe = !0;
      else {
        var Me = n(s);
        Me !== null && Et(f, Me.startTime - A), (Xe = !1);
      }
      return Xe;
    } finally {
      (h = null), (m = $), (S = !1);
    }
  }
  var T = !1,
    R = null,
    L = -1,
    H = 5,
    F = -1;
  function le() {
    return !(e.unstable_now() - F < H);
  }
  function De() {
    if (R !== null) {
      var O = e.unstable_now();
      F = O;
      var A = !0;
      try {
        A = R(!0, O);
      } finally {
        A ? pt() : ((T = !1), (R = null));
      }
    } else T = !1;
  }
  var pt;
  if (typeof d == 'function')
    pt = function () {
      d(De);
    };
  else if (typeof MessageChannel < 'u') {
    var fn = new MessageChannel(),
      ce = fn.port2;
    (fn.port1.onmessage = De),
      (pt = function () {
        ce.postMessage(null);
      });
  } else
    pt = function () {
      P(De, 0);
    };
  function At(O) {
    (R = O), T || ((T = !0), pt());
  }
  function Et(O, A) {
    L = P(function () {
      O(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), At(C));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = m;
      }
      var $ = m;
      m = A;
      try {
        return O();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, A) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var $ = m;
      m = O;
      try {
        return A();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (O, A, $) {
      var q = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? q + $ : q))
          : ($ = q),
        O)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = $ + ee),
        (O = {
          id: c++,
          callback: A,
          priorityLevel: O,
          startTime: $,
          expirationTime: ee,
          sortIndex: -1,
        }),
        $ > q
          ? ((O.sortIndex = $),
            t(s, O),
            n(a) === null &&
              O === n(s) &&
              (g ? (p(L), (L = -1)) : (g = !0), Et(f, $ - q)))
          : ((O.sortIndex = ee), t(a, O), y || S || ((y = !0), At(C))),
        O
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (O) {
      var A = m;
      return function () {
        var $ = m;
        m = A;
        try {
          return O.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(tf);
ef.exports = tf;
var Ch = ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = N,
  Qe = Ch;
function _(e) {
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
var rf = new Set(),
  Gr = {};
function On(e, t) {
  nr(e, t), nr(e + 'Capture', t);
}
function nr(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++) rf.add(t[e]);
}
var Ot = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Vi = Object.prototype.hasOwnProperty,
  Rh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  as = {},
  ss = {};
function Ph(e) {
  return Vi.call(ss, e)
    ? !0
    : Vi.call(as, e)
    ? !1
    : Rh.test(e)
    ? (ss[e] = !0)
    : ((as[e] = !0), !1);
}
function _h(e, t, n, r) {
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
function Nh(e, t, n, r) {
  if (t === null || typeof t > 'u' || _h(e, t, n, r)) return !0;
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
function Ae(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var _e = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  _e[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  _e[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  _e[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  _e[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  _e[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  _e[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yu = /[\-:]([a-z])/g;
function Xu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    _e[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    _e[t] = new Ae(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Yu, Xu);
  _e[t] = new Ae(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  _e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ae(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  _e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gu(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Nh(t, n, o, r) && (n = null),
    r || o === null
      ? Ph(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  To = Symbol.for('react.element'),
  zn = Symbol.for('react.portal'),
  Fn = Symbol.for('react.fragment'),
  qu = Symbol.for('react.strict_mode'),
  Wi = Symbol.for('react.profiler'),
  of = Symbol.for('react.provider'),
  lf = Symbol.for('react.context'),
  Zu = Symbol.for('react.forward_ref'),
  Ki = Symbol.for('react.suspense'),
  Qi = Symbol.for('react.suspense_list'),
  bu = Symbol.for('react.memo'),
  Wt = Symbol.for('react.lazy'),
  uf = Symbol.for('react.offscreen'),
  cs = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (cs && e[cs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var se = Object.assign,
  ci;
function zr(e) {
  if (ci === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ci = (t && t[1]) || '';
    }
  return (
    `
` +
    ci +
    e
  );
}
var fi = !1;
function di(e, t) {
  if (!e || fi) return '';
  fi = !0;
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
        var o = s.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          u = l.length - 1;
        1 <= i && 0 <= u && o[i] !== l[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || o[i] !== l[u])) {
                var a =
                  `
` + o[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (fi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? zr(e) : '';
}
function Th(e) {
  switch (e.tag) {
    case 5:
      return zr(e.type);
    case 16:
      return zr('Lazy');
    case 13:
      return zr('Suspense');
    case 19:
      return zr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = di(e.type, !1)), e;
    case 11:
      return (e = di(e.type.render, !1)), e;
    case 1:
      return (e = di(e.type, !0)), e;
    default:
      return '';
  }
}
function Ji(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Fn:
      return 'Fragment';
    case zn:
      return 'Portal';
    case Wi:
      return 'Profiler';
    case qu:
      return 'StrictMode';
    case Ki:
      return 'Suspense';
    case Qi:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case lf:
        return (e.displayName || 'Context') + '.Consumer';
      case of:
        return (e._context.displayName || 'Context') + '.Provider';
      case Zu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case bu:
        return (
          (t = e.displayName || null), t !== null ? t : Ji(e.type) || 'Memo'
        );
      case Wt:
        (t = e._payload), (e = e._init);
        try {
          return Ji(e(t));
        } catch {}
    }
  return null;
}
function Lh(e) {
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
      return Ji(t);
    case 8:
      return t === qu ? 'StrictMode' : 'Mode';
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
function on(e) {
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
function af(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Oh(e) {
  var t = af(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = '' + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Lo(e) {
  e._valueTracker || (e._valueTracker = Oh(e));
}
function sf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = af(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function il(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yi(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fs(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = on(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function cf(e, t) {
  (t = t.checked), t != null && Gu(e, 'checked', t, !1);
}
function Xi(e, t) {
  cf(e, t);
  var n = on(t.value),
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
    ? Gi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Gi(e, t.type, on(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ds(e, t, n) {
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
function Gi(e, t, n) {
  (t !== 'number' || il(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Fr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + on(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function qi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ps(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: on(n) };
}
function ff(e, t) {
  var n = on(t.value),
    r = on(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function hs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function df(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Zi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? df(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Oo,
  pf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Oo = Oo || document.createElement('div'),
          Oo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Oo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
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
    strokeWidth: !0,
  },
  Dh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ir).forEach(function (e) {
  Dh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
  });
});
function hf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
    ? ('' + t).trim()
    : t + 'px';
}
function mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = hf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Mh = se(
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
function bi(e, t) {
  if (t) {
    if (Mh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(_(62));
  }
}
function eu(e, t) {
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
var tu = null;
function ea(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nu = null,
  Xn = null,
  Gn = null;
function ms(e) {
  if ((e = So(e))) {
    if (typeof nu != 'function') throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Al(t)), nu(e.stateNode, e.type, t));
  }
}
function yf(e) {
  Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function vf() {
  if (Xn) {
    var e = Xn,
      t = Gn;
    if (((Gn = Xn = null), ms(e), t)) for (e = 0; e < t.length; e++) ms(t[e]);
  }
}
function gf(e, t) {
  return e(t);
}
function wf() {}
var pi = !1;
function Sf(e, t, n) {
  if (pi) return e(t, n);
  pi = !0;
  try {
    return gf(e, t, n);
  } finally {
    (pi = !1), (Xn !== null || Gn !== null) && (wf(), vf());
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
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
  if (n && typeof n != 'function') throw Error(_(231, t, typeof n));
  return n;
}
var ru = !1;
if (Ot)
  try {
    var kr = {};
    Object.defineProperty(kr, 'passive', {
      get: function () {
        ru = !0;
      },
    }),
      window.addEventListener('test', kr, kr),
      window.removeEventListener('test', kr, kr);
  } catch {
    ru = !1;
  }
function jh(e, t, n, r, o, l, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Br = !1,
  ul = null,
  al = !1,
  ou = null,
  zh = {
    onError: function (e) {
      (Br = !0), (ul = e);
    },
  };
function Fh(e, t, n, r, o, l, i, u, a) {
  (Br = !1), (ul = null), jh.apply(zh, arguments);
}
function Ah(e, t, n, r, o, l, i, u, a) {
  if ((Fh.apply(this, arguments), Br)) {
    if (Br) {
      var s = ul;
      (Br = !1), (ul = null);
    } else throw Error(_(198));
    al || ((al = !0), (ou = s));
  }
}
function Dn(e) {
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
function Ef(e) {
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
function ys(e) {
  if (Dn(e) !== e) throw Error(_(188));
}
function Uh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return ys(o), e;
        if (l === r) return ys(o), t;
        l = l.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, u = o.child; u; ) {
        if (u === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (u === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function xf(e) {
  return (e = Uh(e)), e !== null ? kf(e) : null;
}
function kf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cf = Qe.unstable_scheduleCallback,
  vs = Qe.unstable_cancelCallback,
  Ih = Qe.unstable_shouldYield,
  Bh = Qe.unstable_requestPaint,
  ye = Qe.unstable_now,
  $h = Qe.unstable_getCurrentPriorityLevel,
  ta = Qe.unstable_ImmediatePriority,
  Rf = Qe.unstable_UserBlockingPriority,
  sl = Qe.unstable_NormalPriority,
  Hh = Qe.unstable_LowPriority,
  Pf = Qe.unstable_IdlePriority,
  Ml = null,
  gt = null;
function Vh(e) {
  if (gt && typeof gt.onCommitFiberRoot == 'function')
    try {
      gt.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : Qh,
  Wh = Math.log,
  Kh = Math.LN2;
function Qh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wh(e) / Kh) | 0)) | 0;
}
var Do = 64,
  Mo = 4194304;
function Ar(e) {
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
function cl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? (r = Ar(u)) : ((l &= i), l !== 0 && (r = Ar(l)));
  } else (i = n & ~o), i !== 0 ? (r = Ar(i)) : l !== 0 && (r = Ar(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ct(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Jh(e, t) {
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
function Yh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - ct(l),
      u = 1 << i,
      a = o[i];
    a === -1
      ? (!(u & n) || u & r) && (o[i] = Jh(u, t))
      : a <= t && (e.expiredLanes |= u),
      (l &= ~u);
  }
}
function lu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _f() {
  var e = Do;
  return (Do <<= 1), !(Do & 4194240) && (Do = 64), e;
}
function hi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function go(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function Xh(e, t) {
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
    var o = 31 - ct(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function na(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var X = 0;
function Nf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Tf,
  ra,
  Lf,
  Of,
  Df,
  iu = !1,
  jo = [],
  Gt = null,
  qt = null,
  Zt = null,
  br = new Map(),
  eo = new Map(),
  Qt = [],
  Gh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function gs(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Gt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      qt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Zt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      br.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      eo.delete(t.pointerId);
  }
}
function Cr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = So(t)), t !== null && ra(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function qh(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Gt = Cr(Gt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (qt = Cr(qt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Zt = Cr(Zt, e, t, n, r, o)), !0;
    case 'pointerover':
      var l = o.pointerId;
      return br.set(l, Cr(br.get(l) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (l = o.pointerId), eo.set(l, Cr(eo.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Mf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ef(n)), t !== null)) {
          (e.blockedOn = t),
            Df(e.priority, function () {
              Lf(n);
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
function Jo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (tu = r), n.target.dispatchEvent(r), (tu = null);
    } else return (t = So(n)), t !== null && ra(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ws(e, t, n) {
  Jo(e) && n.delete(t);
}
function Zh() {
  (iu = !1),
    Gt !== null && Jo(Gt) && (Gt = null),
    qt !== null && Jo(qt) && (qt = null),
    Zt !== null && Jo(Zt) && (Zt = null),
    br.forEach(ws),
    eo.forEach(ws);
}
function Rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    iu ||
      ((iu = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Zh)));
}
function to(e) {
  function t(o) {
    return Rr(o, e);
  }
  if (0 < jo.length) {
    Rr(jo[0], e);
    for (var n = 1; n < jo.length; n++) {
      var r = jo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gt !== null && Rr(Gt, e),
      qt !== null && Rr(qt, e),
      Zt !== null && Rr(Zt, e),
      br.forEach(t),
      eo.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    Mf(n), n.blockedOn === null && Qt.shift();
}
var qn = zt.ReactCurrentBatchConfig,
  fl = !0;
function bh(e, t, n, r) {
  var o = X,
    l = qn.transition;
  qn.transition = null;
  try {
    (X = 1), oa(e, t, n, r);
  } finally {
    (X = o), (qn.transition = l);
  }
}
function em(e, t, n, r) {
  var o = X,
    l = qn.transition;
  qn.transition = null;
  try {
    (X = 4), oa(e, t, n, r);
  } finally {
    (X = o), (qn.transition = l);
  }
}
function oa(e, t, n, r) {
  if (fl) {
    var o = uu(e, t, n, r);
    if (o === null) Ci(e, t, r, dl, n), gs(e, r);
    else if (qh(o, e, t, n, r)) r.stopPropagation();
    else if ((gs(e, r), t & 4 && -1 < Gh.indexOf(e))) {
      for (; o !== null; ) {
        var l = So(o);
        if (
          (l !== null && Tf(l),
          (l = uu(e, t, n, r)),
          l === null && Ci(e, t, r, dl, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Ci(e, t, r, null, n);
  }
}
var dl = null;
function uu(e, t, n, r) {
  if (((dl = null), (e = ea(r)), (e = gn(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ef(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (dl = e), null;
}
function jf(e) {
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
      switch ($h()) {
        case ta:
          return 1;
        case Rf:
          return 4;
        case sl:
        case Hh:
          return 16;
        case Pf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  la = null,
  Yo = null;
function zf() {
  if (Yo) return Yo;
  var e,
    t = la,
    n = t.length,
    r,
    o = 'value' in Yt ? Yt.value : Yt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Yo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Xo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zo() {
  return !0;
}
function Ss() {
  return !1;
}
function Ye(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? zo
        : Ss),
      (this.isPropagationStopped = Ss),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = zo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = zo));
      },
      persist: function () {},
      isPersistent: zo,
    }),
    t
  );
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ia = Ye(dr),
  wo = se({}, dr, { view: 0, detail: 0 }),
  tm = Ye(wo),
  mi,
  yi,
  Pr,
  jl = se({}, wo, {
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
    getModifierState: ua,
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
        : (e !== Pr &&
            (Pr && e.type === 'mousemove'
              ? ((mi = e.screenX - Pr.screenX), (yi = e.screenY - Pr.screenY))
              : (yi = mi = 0),
            (Pr = e)),
          mi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : yi;
    },
  }),
  Es = Ye(jl),
  nm = se({}, jl, { dataTransfer: 0 }),
  rm = Ye(nm),
  om = se({}, wo, { relatedTarget: 0 }),
  vi = Ye(om),
  lm = se({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  im = Ye(lm),
  um = se({}, dr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  am = Ye(um),
  sm = se({}, dr, { data: 0 }),
  xs = Ye(sm),
  cm = {
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
  fm = {
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
  dm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function pm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dm[e]) ? !!t[e] : !1;
}
function ua() {
  return pm;
}
var hm = se({}, wo, {
    key: function (e) {
      if (e.key) {
        var t = cm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Xo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? fm[e.keyCode] || 'Unidentified'
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
    getModifierState: ua,
    charCode: function (e) {
      return e.type === 'keypress' ? Xo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Xo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  mm = Ye(hm),
  ym = se({}, jl, {
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
  ks = Ye(ym),
  vm = se({}, wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ua,
  }),
  gm = Ye(vm),
  wm = se({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sm = Ye(wm),
  Em = se({}, jl, {
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
  xm = Ye(Em),
  km = [9, 13, 27, 32],
  aa = Ot && 'CompositionEvent' in window,
  $r = null;
Ot && 'documentMode' in document && ($r = document.documentMode);
var Cm = Ot && 'TextEvent' in window && !$r,
  Ff = Ot && (!aa || ($r && 8 < $r && 11 >= $r)),
  Cs = String.fromCharCode(32),
  Rs = !1;
function Af(e, t) {
  switch (e) {
    case 'keyup':
      return km.indexOf(t.keyCode) !== -1;
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
function Uf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var An = !1;
function Rm(e, t) {
  switch (e) {
    case 'compositionend':
      return Uf(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Rs = !0), Cs);
    case 'textInput':
      return (e = t.data), e === Cs && Rs ? null : e;
    default:
      return null;
  }
}
function Pm(e, t) {
  if (An)
    return e === 'compositionend' || (!aa && Af(e, t))
      ? ((e = zf()), (Yo = la = Yt = null), (An = !1), e)
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
      return Ff && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var _m = {
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
function Ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!_m[e.type] : t === 'textarea';
}
function If(e, t, n, r) {
  yf(r),
    (t = pl(t, 'onChange')),
    0 < t.length &&
      ((n = new ia('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hr = null,
  no = null;
function Nm(e) {
  Gf(e, 0);
}
function zl(e) {
  var t = Bn(e);
  if (sf(t)) return e;
}
function Tm(e, t) {
  if (e === 'change') return t;
}
var Bf = !1;
if (Ot) {
  var gi;
  if (Ot) {
    var wi = 'oninput' in document;
    if (!wi) {
      var _s = document.createElement('div');
      _s.setAttribute('oninput', 'return;'),
        (wi = typeof _s.oninput == 'function');
    }
    gi = wi;
  } else gi = !1;
  Bf = gi && (!document.documentMode || 9 < document.documentMode);
}
function Ns() {
  Hr && (Hr.detachEvent('onpropertychange', $f), (no = Hr = null));
}
function $f(e) {
  if (e.propertyName === 'value' && zl(no)) {
    var t = [];
    If(t, no, e, ea(e)), Sf(Nm, t);
  }
}
function Lm(e, t, n) {
  e === 'focusin'
    ? (Ns(), (Hr = t), (no = n), Hr.attachEvent('onpropertychange', $f))
    : e === 'focusout' && Ns();
}
function Om(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return zl(no);
}
function Dm(e, t) {
  if (e === 'click') return zl(t);
}
function Mm(e, t) {
  if (e === 'input' || e === 'change') return zl(t);
}
function jm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == 'function' ? Object.is : jm;
function ro(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vi.call(t, o) || !dt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ls(e, t) {
  var n = Ts(e);
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
    n = Ts(n);
  }
}
function Hf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vf() {
  for (var e = window, t = il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = il(e.document);
  }
  return t;
}
function sa(e) {
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
function zm(e) {
  var t = Vf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sa(n)) {
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
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Ls(n, l));
        var i = Ls(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Fm = Ot && 'documentMode' in document && 11 >= document.documentMode,
  Un = null,
  au = null,
  Vr = null,
  su = !1;
function Os(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  su ||
    Un == null ||
    Un !== il(r) ||
    ((r = Un),
    'selectionStart' in r && sa(r)
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
    (Vr && ro(Vr, r)) ||
      ((Vr = r),
      (r = pl(au, 'onSelect')),
      0 < r.length &&
        ((t = new ia('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Un))));
}
function Fo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var In = {
    animationend: Fo('Animation', 'AnimationEnd'),
    animationiteration: Fo('Animation', 'AnimationIteration'),
    animationstart: Fo('Animation', 'AnimationStart'),
    transitionend: Fo('Transition', 'TransitionEnd'),
  },
  Si = {},
  Wf = {};
Ot &&
  ((Wf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  'TransitionEvent' in window || delete In.transitionend.transition);
function Fl(e) {
  if (Si[e]) return Si[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wf) return (Si[e] = t[n]);
  return e;
}
var Kf = Fl('animationend'),
  Qf = Fl('animationiteration'),
  Jf = Fl('animationstart'),
  Yf = Fl('transitionend'),
  Xf = new Map(),
  Ds =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function un(e, t) {
  Xf.set(e, t), On(t, [e]);
}
for (var Ei = 0; Ei < Ds.length; Ei++) {
  var xi = Ds[Ei],
    Am = xi.toLowerCase(),
    Um = xi[0].toUpperCase() + xi.slice(1);
  un(Am, 'on' + Um);
}
un(Kf, 'onAnimationEnd');
un(Qf, 'onAnimationIteration');
un(Jf, 'onAnimationStart');
un('dblclick', 'onDoubleClick');
un('focusin', 'onFocus');
un('focusout', 'onBlur');
un(Yf, 'onTransitionEnd');
nr('onMouseEnter', ['mouseout', 'mouseover']);
nr('onMouseLeave', ['mouseout', 'mouseover']);
nr('onPointerEnter', ['pointerout', 'pointerover']);
nr('onPointerLeave', ['pointerout', 'pointerover']);
On(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
On(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
On('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
On(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
On(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
On(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ur =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Im = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ur));
function Ms(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Ah(r, t, void 0, e), (e.currentTarget = null);
}
function Gf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== l && o.isPropagationStopped())) break e;
          Ms(o, u, s), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          Ms(o, u, s), (l = a);
        }
    }
  }
  if (al) throw ((e = ou), (al = !1), (ou = null), e);
}
function ne(e, t) {
  var n = t[hu];
  n === void 0 && (n = t[hu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (qf(t, e, 2, !1), n.add(r));
}
function ki(e, t, n) {
  var r = 0;
  t && (r |= 4), qf(n, e, r, t);
}
var Ao = '_reactListening' + Math.random().toString(36).slice(2);
function oo(e) {
  if (!e[Ao]) {
    (e[Ao] = !0),
      rf.forEach(function (n) {
        n !== 'selectionchange' && (Im.has(n) || ki(n, !1, e), ki(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ao] || ((t[Ao] = !0), ki('selectionchange', !1, t));
  }
}
function qf(e, t, n, r) {
  switch (jf(t)) {
    case 1:
      var o = bh;
      break;
    case 4:
      o = em;
      break;
    default:
      o = oa;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ru ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ci(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = gn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Sf(function () {
    var s = l,
      c = ea(n),
      h = [];
    e: {
      var m = Xf.get(e);
      if (m !== void 0) {
        var S = ia,
          y = e;
        switch (e) {
          case 'keypress':
            if (Xo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = mm;
            break;
          case 'focusin':
            (y = 'focus'), (S = vi);
            break;
          case 'focusout':
            (y = 'blur'), (S = vi);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = vi;
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
            S = Es;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = rm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = gm;
            break;
          case Kf:
          case Qf:
          case Jf:
            S = im;
            break;
          case Yf:
            S = Sm;
            break;
          case 'scroll':
            S = tm;
            break;
          case 'wheel':
            S = xm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = am;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = ks;
        }
        var g = (t & 4) !== 0,
          P = !g && e === 'scroll',
          p = g ? (m !== null ? m + 'Capture' : null) : m;
        g = [];
        for (var d = s, v; d !== null; ) {
          v = d;
          var f = v.stateNode;
          if (
            (v.tag === 5 &&
              f !== null &&
              ((v = f),
              p !== null && ((f = Zr(d, p)), f != null && g.push(lo(d, f, v)))),
            P)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((m = new S(m, y, null, n, c)), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== tu &&
            (y = n.relatedTarget || n.fromElement) &&
            (gn(y) || y[Dt]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = s),
              (y = y ? gn(y) : null),
              y !== null &&
                ((P = Dn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = s)),
          S !== y)
        ) {
          if (
            ((g = Es),
            (f = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = ks),
              (f = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (d = 'pointer')),
            (P = S == null ? m : Bn(S)),
            (v = y == null ? m : Bn(y)),
            (m = new g(f, d + 'leave', S, n, c)),
            (m.target = P),
            (m.relatedTarget = v),
            (f = null),
            gn(c) === s &&
              ((g = new g(p, d + 'enter', y, n, c)),
              (g.target = v),
              (g.relatedTarget = P),
              (f = g)),
            (P = f),
            S && y)
          )
            t: {
              for (g = S, p = y, d = 0, v = g; v; v = jn(v)) d++;
              for (v = 0, f = p; f; f = jn(f)) v++;
              for (; 0 < d - v; ) (g = jn(g)), d--;
              for (; 0 < v - d; ) (p = jn(p)), v--;
              for (; d--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = jn(g)), (p = jn(p));
              }
              g = null;
            }
          else g = null;
          S !== null && js(h, m, S, g, !1),
            y !== null && P !== null && js(h, P, y, g, !0);
        }
      }
      e: {
        if (
          ((m = s ? Bn(s) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && m.type === 'file'))
        )
          var C = Tm;
        else if (Ps(m))
          if (Bf) C = Mm;
          else {
            C = Om;
            var T = Lm;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (C = Dm);
        if (C && (C = C(e, s))) {
          If(h, C, n, c);
          break e;
        }
        T && T(e, m, s),
          e === 'focusout' &&
            (T = m._wrapperState) &&
            T.controlled &&
            m.type === 'number' &&
            Gi(m, 'number', m.value);
      }
      switch (((T = s ? Bn(s) : window), e)) {
        case 'focusin':
          (Ps(T) || T.contentEditable === 'true') &&
            ((Un = T), (au = s), (Vr = null));
          break;
        case 'focusout':
          Vr = au = Un = null;
          break;
        case 'mousedown':
          su = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (su = !1), Os(h, n, c);
          break;
        case 'selectionchange':
          if (Fm) break;
        case 'keydown':
        case 'keyup':
          Os(h, n, c);
      }
      var R;
      if (aa)
        e: {
          switch (e) {
            case 'compositionstart':
              var L = 'onCompositionStart';
              break e;
            case 'compositionend':
              L = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              L = 'onCompositionUpdate';
              break e;
          }
          L = void 0;
        }
      else
        An
          ? Af(e, n) && (L = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (L = 'onCompositionStart');
      L &&
        (Ff &&
          n.locale !== 'ko' &&
          (An || L !== 'onCompositionStart'
            ? L === 'onCompositionEnd' && An && (R = zf())
            : ((Yt = c),
              (la = 'value' in Yt ? Yt.value : Yt.textContent),
              (An = !0))),
        (T = pl(s, L)),
        0 < T.length &&
          ((L = new xs(L, e, null, n, c)),
          h.push({ event: L, listeners: T }),
          R ? (L.data = R) : ((R = Uf(n)), R !== null && (L.data = R)))),
        (R = Cm ? Rm(e, n) : Pm(e, n)) &&
          ((s = pl(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new xs('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: c, listeners: s }),
            (c.data = R)));
    }
    Gf(h, t);
  });
}
function lo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Zr(e, n)),
      l != null && r.unshift(lo(e, l, o)),
      (l = Zr(e, t)),
      l != null && r.push(lo(e, l, o))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function js(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      o
        ? ((a = Zr(n, l)), a != null && i.unshift(lo(n, a, u)))
        : o || ((a = Zr(n, l)), a != null && i.push(lo(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bm = /\r\n?/g,
  $m = /\u0000|\uFFFD/g;
function zs(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Bm,
      `
`
    )
    .replace($m, '');
}
function Uo(e, t, n) {
  if (((t = zs(t)), zs(e) !== t && n)) throw Error(_(425));
}
function hl() {}
var cu = null,
  fu = null;
function du(e, t) {
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
var pu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Hm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fs = typeof Promise == 'function' ? Promise : void 0,
  Vm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fs < 'u'
      ? function (e) {
          return Fs.resolve(null).then(e).catch(Wm);
        }
      : pu;
function Wm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ri(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), to(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  to(t);
}
function bt(e) {
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
function As(e) {
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
var pr = Math.random().toString(36).slice(2),
  yt = '__reactFiber$' + pr,
  io = '__reactProps$' + pr,
  Dt = '__reactContainer$' + pr,
  hu = '__reactEvents$' + pr,
  Km = '__reactListeners$' + pr,
  Qm = '__reactHandles$' + pr;
function gn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Dt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = As(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = As(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function So(e) {
  return (
    (e = e[yt] || e[Dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Al(e) {
  return e[io] || null;
}
var mu = [],
  $n = -1;
function an(e) {
  return { current: e };
}
function re(e) {
  0 > $n || ((e.current = mu[$n]), (mu[$n] = null), $n--);
}
function te(e, t) {
  $n++, (mu[$n] = e.current), (e.current = t);
}
var ln = {},
  Oe = an(ln),
  Be = an(!1),
  Cn = ln;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function ml() {
  re(Be), re(Oe);
}
function Us(e, t, n) {
  if (Oe.current !== ln) throw Error(_(168));
  te(Oe, t), te(Be, n);
}
function Zf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, Lh(e) || 'Unknown', o));
  return se({}, n, r);
}
function yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
    (Cn = Oe.current),
    te(Oe, e),
    te(Be, Be.current),
    !0
  );
}
function Is(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Zf(e, t, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Be),
      re(Oe),
      te(Oe, e))
    : re(Be),
    te(Be, n);
}
var Rt = null,
  Ul = !1,
  Pi = !1;
function bf(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function Jm(e) {
  (Ul = !0), bf(e);
}
function sn() {
  if (!Pi && Rt !== null) {
    Pi = !0;
    var e = 0,
      t = X;
    try {
      var n = Rt;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rt = null), (Ul = !1);
    } catch (o) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), Cf(ta, sn), o);
    } finally {
      (X = t), (Pi = !1);
    }
  }
  return null;
}
var Hn = [],
  Vn = 0,
  vl = null,
  gl = 0,
  qe = [],
  Ze = 0,
  Rn = null,
  Pt = 1,
  _t = '';
function yn(e, t) {
  (Hn[Vn++] = gl), (Hn[Vn++] = vl), (vl = e), (gl = t);
}
function ed(e, t, n) {
  (qe[Ze++] = Pt), (qe[Ze++] = _t), (qe[Ze++] = Rn), (Rn = e);
  var r = Pt;
  e = _t;
  var o = 32 - ct(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ct(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Pt = (1 << (32 - ct(t) + o)) | (n << o) | r),
      (_t = l + e);
  } else (Pt = (1 << l) | (n << o) | r), (_t = e);
}
function ca(e) {
  e.return !== null && (yn(e, 1), ed(e, 1, 0));
}
function fa(e) {
  for (; e === vl; )
    (vl = Hn[--Vn]), (Hn[Vn] = null), (gl = Hn[--Vn]), (Hn[Vn] = null);
  for (; e === Rn; )
    (Rn = qe[--Ze]),
      (qe[Ze] = null),
      (_t = qe[--Ze]),
      (qe[Ze] = null),
      (Pt = qe[--Ze]),
      (qe[Ze] = null);
}
var Ke = null,
  We = null,
  oe = !1,
  st = null;
function td(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Bs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (We = bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rn !== null ? { id: Pt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vu(e) {
  if (oe) {
    var t = We;
    if (t) {
      var n = t;
      if (!Bs(e, t)) {
        if (yu(e)) throw Error(_(418));
        t = bt(n.nextSibling);
        var r = Ke;
        t && Bs(e, t)
          ? td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ke = e));
      }
    } else {
      if (yu(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ke = e);
    }
  }
}
function $s(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Io(e) {
  if (e !== Ke) return !1;
  if (!oe) return $s(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !du(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (yu(e)) throw (nd(), Error(_(418)));
    for (; t; ) td(e, t), (t = bt(t.nextSibling));
  }
  if (($s(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              We = bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Ke ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function nd() {
  for (var e = We; e; ) e = bt(e.nextSibling);
}
function or() {
  (We = Ke = null), (oe = !1);
}
function da(e) {
  st === null ? (st = [e]) : st.push(e);
}
var Ym = zt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var wl = an(null),
  Sl = null,
  Wn = null,
  pa = null;
function ha() {
  pa = Wn = Sl = null;
}
function ma(e) {
  var t = wl.current;
  re(wl), (e._currentValue = t);
}
function gu(e, t, n) {
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
function Zn(e, t) {
  (Sl = e),
    (pa = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (pa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (Sl === null) throw Error(_(308));
      (Wn = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return t;
}
var wn = null;
function ya(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function rd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ya(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Mt(e, r)
  );
}
function Mt(e, t) {
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
var Kt = !1;
function va(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function od(e, t) {
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
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Mt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ya(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Mt(e, n)
  );
}
function Go(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), na(e, n);
  }
}
function Hs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function El(e, t, n, r) {
  var o = e.updateQueue;
  Kt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (l = s) : (i.next = s), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== i &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var h = o.baseState;
    (i = 0), (c = s = a = null), (u = l);
    do {
      var m = u.lane,
        S = u.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            g = u;
          switch (((m = t), (S = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == 'function')) {
                h = y.call(S, h, m);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (m = typeof y == 'function' ? y.call(S, h, m) : y),
                m == null)
              )
                break e;
              h = se({}, h, m);
              break e;
            case 2:
              Kt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [u]) : m.push(u));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = S), (a = h)) : (c = c.next = S),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = h),
      (o.baseState = a),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (_n |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Vs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var ld = new nf.Component().refs;
function wu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Il = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = nn(e),
      l = Nt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = en(e, l, o)),
      t !== null && (ft(t, e, o, r), Go(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = nn(e),
      l = Nt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = en(e, l, o)),
      t !== null && (ft(t, e, o, r), Go(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = nn(e),
      o = Nt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = en(e, o, r)),
      t !== null && (ft(t, e, r, n), Go(t, e, r));
  },
};
function Ws(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ro(n, r) || !ro(o, l)
      : !0
  );
}
function id(e, t, n) {
  var r = !1,
    o = ln,
    l = t.contextType;
  return (
    typeof l == 'object' && l !== null
      ? (l = nt(l))
      : ((o = $e(t) ? Cn : Oe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? rr(e, o) : ln)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Il),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ks(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Il.enqueueReplaceState(t, t.state, null);
}
function Su(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = ld), va(e);
  var l = t.contextType;
  typeof l == 'object' && l !== null
    ? (o.context = nt(l))
    : ((l = $e(t) ? Cn : Oe.current), (o.context = rr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (wu(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Il.enqueueReplaceState(o, o.state, null),
      El(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function _r(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        l = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var u = o.refs;
            u === ld && (u = o.refs = {}),
              i === null ? delete u[l] : (u[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != 'string') throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Bo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Qs(e) {
  var t = e._init;
  return t(e._payload);
}
function ud(e) {
  function t(p, d) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [d]), (p.flags |= 16)) : v.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function o(p, d) {
    return (p = rn(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, d, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((p.flags |= 2), d) : v)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, v, f) {
    return d === null || d.tag !== 6
      ? ((d = Mi(v, p.mode, f)), (d.return = p), d)
      : ((d = o(d, v)), (d.return = p), d);
  }
  function a(p, d, v, f) {
    var C = v.type;
    return C === Fn
      ? c(p, d, v.props.children, f, v.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == 'object' &&
            C !== null &&
            C.$$typeof === Wt &&
            Qs(C) === d.type))
      ? ((f = o(d, v.props)), (f.ref = _r(p, d, v)), (f.return = p), f)
      : ((f = nl(v.type, v.key, v.props, null, p.mode, f)),
        (f.ref = _r(p, d, v)),
        (f.return = p),
        f);
  }
  function s(p, d, v, f) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = ji(v, p.mode, f)), (d.return = p), d)
      : ((d = o(d, v.children || [])), (d.return = p), d);
  }
  function c(p, d, v, f, C) {
    return d === null || d.tag !== 7
      ? ((d = kn(v, p.mode, f, C)), (d.return = p), d)
      : ((d = o(d, v)), (d.return = p), d);
  }
  function h(p, d, v) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = Mi('' + d, p.mode, v)), (d.return = p), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case To:
          return (
            (v = nl(d.type, d.key, d.props, null, p.mode, v)),
            (v.ref = _r(p, null, d)),
            (v.return = p),
            v
          );
        case zn:
          return (d = ji(d, p.mode, v)), (d.return = p), d;
        case Wt:
          var f = d._init;
          return h(p, f(d._payload), v);
      }
      if (Fr(d) || xr(d))
        return (d = kn(d, p.mode, v, null)), (d.return = p), d;
      Bo(p, d);
    }
    return null;
  }
  function m(p, d, v, f) {
    var C = d !== null ? d.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return C !== null ? null : u(p, d, '' + v, f);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case To:
          return v.key === C ? a(p, d, v, f) : null;
        case zn:
          return v.key === C ? s(p, d, v, f) : null;
        case Wt:
          return (C = v._init), m(p, d, C(v._payload), f);
      }
      if (Fr(v) || xr(v)) return C !== null ? null : c(p, d, v, f, null);
      Bo(p, v);
    }
    return null;
  }
  function S(p, d, v, f, C) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (p = p.get(v) || null), u(d, p, '' + f, C);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case To:
          return (p = p.get(f.key === null ? v : f.key) || null), a(d, p, f, C);
        case zn:
          return (p = p.get(f.key === null ? v : f.key) || null), s(d, p, f, C);
        case Wt:
          var T = f._init;
          return S(p, d, v, T(f._payload), C);
      }
      if (Fr(f) || xr(f)) return (p = p.get(v) || null), c(d, p, f, C, null);
      Bo(d, f);
    }
    return null;
  }
  function y(p, d, v, f) {
    for (
      var C = null, T = null, R = d, L = (d = 0), H = null;
      R !== null && L < v.length;
      L++
    ) {
      R.index > L ? ((H = R), (R = null)) : (H = R.sibling);
      var F = m(p, R, v[L], f);
      if (F === null) {
        R === null && (R = H);
        break;
      }
      e && R && F.alternate === null && t(p, R),
        (d = l(F, d, L)),
        T === null ? (C = F) : (T.sibling = F),
        (T = F),
        (R = H);
    }
    if (L === v.length) return n(p, R), oe && yn(p, L), C;
    if (R === null) {
      for (; L < v.length; L++)
        (R = h(p, v[L], f)),
          R !== null &&
            ((d = l(R, d, L)), T === null ? (C = R) : (T.sibling = R), (T = R));
      return oe && yn(p, L), C;
    }
    for (R = r(p, R); L < v.length; L++)
      (H = S(R, p, L, v[L], f)),
        H !== null &&
          (e && H.alternate !== null && R.delete(H.key === null ? L : H.key),
          (d = l(H, d, L)),
          T === null ? (C = H) : (T.sibling = H),
          (T = H));
    return (
      e &&
        R.forEach(function (le) {
          return t(p, le);
        }),
      oe && yn(p, L),
      C
    );
  }
  function g(p, d, v, f) {
    var C = xr(v);
    if (typeof C != 'function') throw Error(_(150));
    if (((v = C.call(v)), v == null)) throw Error(_(151));
    for (
      var T = (C = null), R = d, L = (d = 0), H = null, F = v.next();
      R !== null && !F.done;
      L++, F = v.next()
    ) {
      R.index > L ? ((H = R), (R = null)) : (H = R.sibling);
      var le = m(p, R, F.value, f);
      if (le === null) {
        R === null && (R = H);
        break;
      }
      e && R && le.alternate === null && t(p, R),
        (d = l(le, d, L)),
        T === null ? (C = le) : (T.sibling = le),
        (T = le),
        (R = H);
    }
    if (F.done) return n(p, R), oe && yn(p, L), C;
    if (R === null) {
      for (; !F.done; L++, F = v.next())
        (F = h(p, F.value, f)),
          F !== null &&
            ((d = l(F, d, L)), T === null ? (C = F) : (T.sibling = F), (T = F));
      return oe && yn(p, L), C;
    }
    for (R = r(p, R); !F.done; L++, F = v.next())
      (F = S(R, p, L, F.value, f)),
        F !== null &&
          (e && F.alternate !== null && R.delete(F.key === null ? L : F.key),
          (d = l(F, d, L)),
          T === null ? (C = F) : (T.sibling = F),
          (T = F));
    return (
      e &&
        R.forEach(function (De) {
          return t(p, De);
        }),
      oe && yn(p, L),
      C
    );
  }
  function P(p, d, v, f) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Fn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case To:
          e: {
            for (var C = v.key, T = d; T !== null; ) {
              if (T.key === C) {
                if (((C = v.type), C === Fn)) {
                  if (T.tag === 7) {
                    n(p, T.sibling),
                      (d = o(T, v.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Wt &&
                    Qs(C) === T.type)
                ) {
                  n(p, T.sibling),
                    (d = o(T, v.props)),
                    (d.ref = _r(p, T, v)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            v.type === Fn
              ? ((d = kn(v.props.children, p.mode, f, v.key)),
                (d.return = p),
                (p = d))
              : ((f = nl(v.type, v.key, v.props, null, p.mode, f)),
                (f.ref = _r(p, d, v)),
                (f.return = p),
                (p = f));
          }
          return i(p);
        case zn:
          e: {
            for (T = v.key; d !== null; ) {
              if (d.key === T)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(p, d.sibling),
                    (d = o(d, v.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = ji(v, p.mode, f)), (d.return = p), (p = d);
          }
          return i(p);
        case Wt:
          return (T = v._init), P(p, d, T(v._payload), f);
      }
      if (Fr(v)) return y(p, d, v, f);
      if (xr(v)) return g(p, d, v, f);
      Bo(p, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, v)), (d.return = p), (p = d))
          : (n(p, d), (d = Mi(v, p.mode, f)), (d.return = p), (p = d)),
        i(p))
      : n(p, d);
  }
  return P;
}
var lr = ud(!0),
  ad = ud(!1),
  Eo = {},
  wt = an(Eo),
  uo = an(Eo),
  ao = an(Eo);
function Sn(e) {
  if (e === Eo) throw Error(_(174));
  return e;
}
function ga(e, t) {
  switch ((te(ao, t), te(uo, e), te(wt, Eo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zi(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zi(t, e));
  }
  re(wt), te(wt, t);
}
function ir() {
  re(wt), re(uo), re(ao);
}
function sd(e) {
  Sn(ao.current);
  var t = Sn(wt.current),
    n = Zi(t, e.type);
  t !== n && (te(uo, e), te(wt, n));
}
function wa(e) {
  uo.current === e && (re(wt), re(uo));
}
var ue = an(0);
function xl(e) {
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
var _i = [];
function Sa() {
  for (var e = 0; e < _i.length; e++)
    _i[e]._workInProgressVersionPrimary = null;
  _i.length = 0;
}
var qo = zt.ReactCurrentDispatcher,
  Ni = zt.ReactCurrentBatchConfig,
  Pn = 0,
  ae = null,
  Ee = null,
  ke = null,
  kl = !1,
  Wr = !1,
  so = 0,
  Xm = 0;
function Ne() {
  throw Error(_(321));
}
function Ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function xa(e, t, n, r, o, l) {
  if (
    ((Pn = l),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qo.current = e === null || e.memoizedState === null ? bm : ey),
    (e = n(r, o)),
    Wr)
  ) {
    l = 0;
    do {
      if (((Wr = !1), (so = 0), 25 <= l)) throw Error(_(301));
      (l += 1),
        (ke = Ee = null),
        (t.updateQueue = null),
        (qo.current = ty),
        (e = n(r, o));
    } while (Wr);
  }
  if (
    ((qo.current = Cl),
    (t = Ee !== null && Ee.next !== null),
    (Pn = 0),
    (ke = Ee = ae = null),
    (kl = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ka() {
  var e = so !== 0;
  return (so = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ae.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function rt() {
  if (Ee === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = ke === null ? ae.memoizedState : ke.next;
  if (t !== null) (ke = t), (Ee = e);
  else {
    if (e === null) throw Error(_(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      ke === null ? (ae.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function co(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ti(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = l;
    do {
      var c = s.lane;
      if ((Pn & c) === c)
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
        var h = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (ae.lanes |= c),
          (_n |= c);
      }
      s = s.next;
    } while (s !== null && s !== l);
    a === null ? (i = r) : (a.next = u),
      dt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (ae.lanes |= l), (_n |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Li(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    dt(l, t.memoizedState) || (Ie = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function cd() {}
function fd(e, t) {
  var n = ae,
    r = rt(),
    o = t(),
    l = !dt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Ie = !0)),
    (r = r.queue),
    Ca(hd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fo(9, pd.bind(null, n, r, o, t), void 0, null),
      Ce === null)
    )
      throw Error(_(349));
    Pn & 30 || dd(n, t, o);
  }
  return o;
}
function dd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), md(t) && yd(e);
}
function hd(e, t, n) {
  return n(function () {
    md(t) && yd(e);
  });
}
function md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function yd(e) {
  var t = Mt(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function Js(e) {
  var t = mt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: co,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zm.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function fo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vd() {
  return rt().memoizedState;
}
function Zo(e, t, n, r) {
  var o = mt();
  (ae.flags |= e),
    (o.memoizedState = fo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bl(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Ee !== null) {
    var i = Ee.memoizedState;
    if (((l = i.destroy), r !== null && Ea(r, i.deps))) {
      o.memoizedState = fo(t, n, l, r);
      return;
    }
  }
  (ae.flags |= e), (o.memoizedState = fo(1 | t, n, l, r));
}
function Ys(e, t) {
  return Zo(8390656, 8, e, t);
}
function Ca(e, t) {
  return Bl(2048, 8, e, t);
}
function gd(e, t) {
  return Bl(4, 2, e, t);
}
function wd(e, t) {
  return Bl(4, 4, e, t);
}
function Sd(e, t) {
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
function Ed(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bl(4, 4, Sd.bind(null, t, e), n)
  );
}
function Ra() {}
function xd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function kd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cd(e, t, n) {
  return Pn & 21
    ? (dt(n, t) || ((n = _f()), (ae.lanes |= n), (_n |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function Gm(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ni.transition;
  Ni.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (Ni.transition = r);
  }
}
function Rd() {
  return rt().memoizedState;
}
function qm(e, t, n) {
  var r = nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pd(e))
  )
    _d(t, n);
  else if (((n = rd(e, t, n, r)), n !== null)) {
    var o = ze();
    ft(n, e, r, o), Nd(n, t, r);
  }
}
function Zm(e, t, n) {
  var r = nn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) _d(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), dt(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ya(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = rd(e, t, o, r)),
      n !== null && ((o = ze()), ft(n, e, r, o), Nd(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function _d(e, t) {
  Wr = kl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Nd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), na(e, n);
  }
}
var Cl = {
    readContext: nt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: nt,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: Ys,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zo(4194308, 4, Sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
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
        (e = e.dispatch = qm.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Js,
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = Js(!1),
        t = e[0];
      return (e = Gm.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        o = mt();
      if (oe) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(_(349));
        Pn & 30 || dd(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Ys(hd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        fo(9, pd.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = Ce.identifierPrefix;
      if (oe) {
        var n = _t,
          r = Pt;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = so++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Xm++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ey = {
    readContext: nt,
    useCallback: xd,
    useContext: nt,
    useEffect: Ca,
    useImperativeHandle: Ed,
    useInsertionEffect: gd,
    useLayoutEffect: wd,
    useMemo: kd,
    useReducer: Ti,
    useRef: vd,
    useState: function () {
      return Ti(co);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = rt();
      return Cd(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ti(co)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: Rd,
    unstable_isNewReconciler: !1,
  },
  ty = {
    readContext: nt,
    useCallback: xd,
    useContext: nt,
    useEffect: Ca,
    useImperativeHandle: Ed,
    useInsertionEffect: gd,
    useLayoutEffect: wd,
    useMemo: kd,
    useReducer: Li,
    useRef: vd,
    useState: function () {
      return Li(co);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = rt();
      return Ee === null ? (t.memoizedState = e) : Cd(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Li(co)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: Rd,
    unstable_isNewReconciler: !1,
  };
function ur(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Th(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Oi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Eu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ny = typeof WeakMap == 'function' ? WeakMap : Map;
function Td(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pl || ((Pl = !0), (Ou = r)), Eu(e, t);
    }),
    n
  );
}
function Ld(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Eu(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        Eu(e, t),
          typeof r != 'function' &&
            (tn === null ? (tn = new Set([this])) : tn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Xs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ny();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = yy.bind(null, e, t, n)), t.then(e, e));
}
function Gs(e) {
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
function qs(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), en(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ry = zt.ReactCurrentOwner,
  Ie = !1;
function je(e, t, n, r) {
  t.child = e === null ? ad(t, null, n, r) : lr(t, e.child, n, r);
}
function Zs(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Zn(t, o),
    (r = xa(e, t, n, r, l, o)),
    (n = ka()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (oe && n && ca(t), (t.flags |= 1), je(e, t, r, o), t.child)
  );
}
function bs(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == 'function' &&
      !Ma(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Od(e, t, l, r, o))
      : ((e = nl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ro), n(i, r) && e.ref === t.ref)
    )
      return jt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = rn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Od(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (ro(l, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), jt(e, t, o);
  }
  return xu(e, t, n, r, o);
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Qn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Qn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        te(Qn, Ve),
        (Ve |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Qn, Ve),
      (Ve |= r);
  return je(e, t, o, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xu(e, t, n, r, o) {
  var l = $e(n) ? Cn : Oe.current;
  return (
    (l = rr(t, l)),
    Zn(t, o),
    (n = xa(e, t, n, r, l, o)),
    (r = ka()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (oe && r && ca(t), (t.flags |= 1), je(e, t, n, o), t.child)
  );
}
function ec(e, t, n, r, o) {
  if ($e(n)) {
    var l = !0;
    yl(t);
  } else l = !1;
  if ((Zn(t, o), t.stateNode === null))
    bo(e, t), id(t, n, r), Su(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = nt(s))
      : ((s = $e(n) ? Cn : Oe.current), (s = rr(t, s)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || a !== s) && Ks(t, i, r, s)),
      (Kt = !1);
    var m = t.memoizedState;
    (i.state = m),
      El(t, r, i, o),
      (a = t.memoizedState),
      u !== r || m !== a || Be.current || Kt
        ? (typeof c == 'function' && (wu(t, n, c, r), (a = t.memoizedState)),
          (u = Kt || Ws(t, n, u, r, m, a, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      od(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : it(t.type, u)),
      (i.props = s),
      (h = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = nt(a))
        : ((a = $e(n) ? Cn : Oe.current), (a = rr(t, a)));
    var S = n.getDerivedStateFromProps;
    (c =
      typeof S == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== h || m !== a) && Ks(t, i, r, a)),
      (Kt = !1),
      (m = t.memoizedState),
      (i.state = m),
      El(t, r, i, o);
    var y = t.memoizedState;
    u !== h || m !== y || Be.current || Kt
      ? (typeof S == 'function' && (wu(t, n, S, r), (y = t.memoizedState)),
        (s = Kt || Ws(t, n, s, r, m, y, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, y, a),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, y, a)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ku(e, t, n, r, l, o);
}
function ku(e, t, n, r, o, l) {
  Md(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Is(t, n, !1), jt(e, t, l);
  (r = t.stateNode), (ry.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = lr(t, e.child, null, l)), (t.child = lr(t, null, u, l)))
      : je(e, t, u, l),
    (t.memoizedState = r.state),
    o && Is(t, n, !0),
    t.child
  );
}
function jd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Us(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Us(e, t.context, !1),
    ga(e, t.containerInfo);
}
function tc(e, t, n, r, o) {
  return or(), da(o), (t.flags |= 256), je(e, t, n, r), t.child;
}
var Cu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ru(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zd(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ue, o & 1),
    e === null)
  )
    return (
      vu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Vl(i, r, 0, null)),
              (e = kn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ru(n)),
              (t.memoizedState = Cu),
              e)
            : Pa(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return oy(e, t, i, r, u, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (u = o.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = rn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (l = rn(u, l)) : ((l = kn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ru(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cu),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = rn(l, { mode: 'visible', children: r.children })),
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
function Pa(e, t) {
  return (
    (t = Vl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $o(e, t, n, r) {
  return (
    r !== null && da(r),
    lr(t, e.child, null, n),
    (e = Pa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oy(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Oi(Error(_(422)))), $o(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Vl({ mode: 'visible', children: r.children }, o, 0, null)),
        (l = kn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && lr(t, e.child, null, i),
        (t.child.memoizedState = Ru(i)),
        (t.memoizedState = Cu),
        l);
  if (!(t.mode & 1)) return $o(e, t, i, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (l = Error(_(419))), (r = Oi(l, r, void 0)), $o(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ie || u)) {
    if (((r = Ce), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Mt(e, o), ft(r, e, o, -1));
    }
    return Da(), (r = Oi(Error(_(421)))), $o(e, t, i, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (We = bt(o.nextSibling)),
      (Ke = t),
      (oe = !0),
      (st = null),
      e !== null &&
        ((qe[Ze++] = Pt),
        (qe[Ze++] = _t),
        (qe[Ze++] = Rn),
        (Pt = e.id),
        (_t = e.overflow),
        (Rn = t)),
      (t = Pa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gu(e.return, t, n);
}
function Di(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((je(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nc(e, n, t);
        else if (e.tag === 19) nc(e, n, t);
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
  if ((te(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && xl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Di(t, !1, o, n, l);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && xl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Di(t, !0, n, null, l);
        break;
      case 'together':
        Di(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_n |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ly(e, t, n) {
  switch (t.tag) {
    case 3:
      jd(t), or();
      break;
    case 5:
      sd(t);
      break;
    case 1:
      $e(t.type) && yl(t);
      break;
    case 4:
      ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      te(wl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zd(e, t, n)
          : (te(ue, ue.current & 1),
            (e = jt(e, t, n)),
            e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        te(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Dd(e, t, n);
  }
  return jt(e, t, n);
}
var Ad, Pu, Ud, Id;
Ad = function (e, t) {
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
Pu = function () {};
Ud = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Sn(wt.current);
    var l = null;
    switch (n) {
      case 'input':
        (o = Yi(e, o)), (r = Yi(e, r)), (l = []);
        break;
      case 'select':
        (o = se({}, o, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (l = []);
        break;
      case 'textarea':
        (o = qi(e, o)), (r = qi(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = hl);
    }
    bi(n, r);
    var i;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === 'style') {
          var u = o[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Gr.hasOwnProperty(s)
              ? l || (l = [])
              : (l = l || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (l = l || []).push(s, a))
            : s === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (l = l || []).push(s, '' + a)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (Gr.hasOwnProperty(s)
                ? (a != null && s === 'onScroll' && ne('scroll', e),
                  l || u === a || (l = []))
                : (l = l || []).push(s, a));
    }
    n && (l = l || []).push('style', n);
    var s = l;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Id = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nr(e, t) {
  if (!oe)
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
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function iy(e, t, n) {
  var r = t.pendingProps;
  switch ((fa(t), t.tag)) {
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
      return Te(t), null;
    case 1:
      return $e(t.type) && ml(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ir(),
        re(Be),
        re(Oe),
        Sa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Io(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (ju(st), (st = null)))),
        Pu(e, t),
        Te(t),
        null
      );
    case 5:
      wa(t);
      var o = Sn(ao.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ud(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Te(t), null;
        }
        if (((e = Sn(wt.current)), Io(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[yt] = t), (r[io] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ne('cancel', r), ne('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ne('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Ur.length; o++) ne(Ur[o], r);
              break;
            case 'source':
              ne('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ne('error', r), ne('load', r);
              break;
            case 'details':
              ne('toggle', r);
              break;
            case 'input':
              fs(r, l), ne('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ne('invalid', r);
              break;
            case 'textarea':
              ps(r, l), ne('invalid', r);
          }
          bi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (l.suppressHydrationWarning !== !0 &&
                      Uo(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (l.suppressHydrationWarning !== !0 &&
                      Uo(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : Gr.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  ne('scroll', r);
            }
          switch (n) {
            case 'input':
              Lo(r), ds(r, l, !0);
              break;
            case 'textarea':
              Lo(r), hs(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof l.onClick == 'function' && (r.onclick = hl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = df(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[yt] = t),
            (e[io] = r),
            Ad(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = eu(n, r)), n)) {
              case 'dialog':
                ne('cancel', e), ne('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ne('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Ur.length; o++) ne(Ur[o], e);
                o = r;
                break;
              case 'source':
                ne('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ne('error', e), ne('load', e), (o = r);
                break;
              case 'details':
                ne('toggle', e), (o = r);
                break;
              case 'input':
                fs(e, r), (o = Yi(e, r)), ne('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = se({}, r, { value: void 0 })),
                  ne('invalid', e);
                break;
              case 'textarea':
                ps(e, r), (o = qi(e, r)), ne('invalid', e);
                break;
              default:
                o = r;
            }
            bi(n, o), (u = o);
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var a = u[l];
                l === 'style'
                  ? mf(e, a)
                  : l === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && pf(e, a))
                  : l === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && qr(e, a)
                    : typeof a == 'number' && qr(e, '' + a)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    l !== 'autoFocus' &&
                    (Gr.hasOwnProperty(l)
                      ? a != null && l === 'onScroll' && ne('scroll', e)
                      : a != null && Gu(e, l, a, i));
              }
            switch (n) {
              case 'input':
                Lo(e), ds(e, r, !1);
                break;
              case 'textarea':
                Lo(e), hs(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + on(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Yn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = hl);
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
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) Id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166));
        if (((n = Sn(ao.current)), Sn(wt.current), Io(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (l = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Uo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Uo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (re(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && We !== null && t.mode & 1 && !(t.flags & 128))
          nd(), or(), (t.flags |= 98560), (l = !1);
        else if (((l = Io(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(_(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(_(317));
            l[yt] = t;
          } else
            or(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (l = !1);
        } else st !== null && (ju(st), (st = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : Da())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        ir(), Pu(e, t), e === null && oo(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return ma(t.type._context), Te(t), null;
    case 17:
      return $e(t.type) && ml(), Te(t), null;
    case 19:
      if ((re(ue), (l = t.memoizedState), l === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Nr(l, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = xl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Nr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ye() > ar &&
            ((t.flags |= 128), (r = !0), Nr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nr(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !i.alternate && !oe)
            )
              return Te(t), null;
          } else
            2 * ye() - l.renderingStartTime > ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ye()),
          (t.sibling = null),
          (n = ue.current),
          te(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        Oa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function uy(e, t) {
  switch ((fa(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && ml(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ir(),
        re(Be),
        re(Oe),
        Sa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wa(t), null;
    case 13:
      if (
        (re(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        or();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ue), null;
    case 4:
      return ir(), null;
    case 10:
      return ma(t.type._context), null;
    case 22:
    case 23:
      return Oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ho = !1,
  Le = !1,
  ay = typeof WeakSet == 'function' ? WeakSet : Set,
  M = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function _u(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var rc = !1;
function sy(e, t) {
  if (((cu = fl), (e = Vf()), sa(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            c = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              h !== n || (o !== 0 && h.nodeType !== 3) || (u = i + o),
                h !== l || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (m = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++s === o && (u = i),
                m === l && ++c === r && (a = i),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = S;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fu = { focusedElem: e, selectionRange: n }, fl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    P = y.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : it(t.type, g),
                      P
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (f) {
          fe(t, t.return, f);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = rc), (rc = !1), y;
}
function Kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && _u(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function $l(e, t) {
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
function Nu(e) {
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
function Bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[io], delete t[hu], delete t[Km], delete t[Qm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $d(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function oc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $d(e.return)) return null;
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
function Tu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tu(e, t, n), e = e.sibling; e !== null; ) Tu(e, t, n), (e = e.sibling);
}
function Lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lu(e, t, n), e = e.sibling; e !== null; ) Lu(e, t, n), (e = e.sibling);
}
var Re = null,
  ut = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Hd(e, t, n), (n = n.sibling);
}
function Hd(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == 'function')
    try {
      gt.onCommitFiberUnmount(Ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Kn(n, t);
    case 6:
      var r = Re,
        o = ut;
      (Re = null),
        $t(e, t, n),
        (Re = r),
        (ut = o),
        Re !== null &&
          (ut
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (ut
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ri(e.parentNode, n)
              : e.nodeType === 1 && Ri(e, n),
            to(e))
          : Ri(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (o = ut),
        (Re = n.stateNode.containerInfo),
        (ut = !0),
        $t(e, t, n),
        (Re = r),
        (ut = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && _u(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          fe(n, t, u);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), $t(e, t, n), (Le = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function lc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ay()),
      t.forEach(function (r) {
        var o = gy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Re = u.stateNode), (ut = !1);
              break e;
            case 3:
              (Re = u.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (Re = u.stateNode.containerInfo), (ut = !0);
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(_(160));
        Hd(l, i, o), (Re = null), (ut = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (s) {
        fe(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vd(t, e), (t = t.sibling);
}
function Vd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), ht(e), r & 4)) {
        try {
          Kr(3, e, e.return), $l(3, e);
        } catch (g) {
          fe(e, e.return, g);
        }
        try {
          Kr(5, e, e.return);
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 1:
      lt(t, e), ht(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if (
        (lt(t, e),
        ht(e),
        r & 512 && n !== null && Kn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          qr(o, '');
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === 'input' && l.type === 'radio' && l.name != null && cf(o, l),
              eu(u, i);
            var s = eu(u, l);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                h = a[i + 1];
              c === 'style'
                ? mf(o, h)
                : c === 'dangerouslySetInnerHTML'
                ? pf(o, h)
                : c === 'children'
                ? qr(o, h)
                : Gu(o, c, h, s);
            }
            switch (u) {
              case 'input':
                Xi(o, l);
                break;
              case 'textarea':
                ff(o, l);
                break;
              case 'select':
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var S = l.value;
                S != null
                  ? Yn(o, !!l.multiple, S, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Yn(o, !!l.multiple, l.defaultValue, !0)
                      : Yn(o, !!l.multiple, l.multiple ? [] : '', !1));
            }
            o[io] = l;
          } catch (g) {
            fe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((lt(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (lt(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          to(t.containerInfo);
        } catch (g) {
          fe(e, e.return, g);
        }
      break;
    case 4:
      lt(t, e), ht(e);
      break;
    case 13:
      lt(t, e),
        ht(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ta = ye())),
        r & 4 && lc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (s = Le) || c), lt(t, e), (Le = s)) : lt(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (h = M = c; M !== null; ) {
              switch (((m = M), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, m, m.return);
                  break;
                case 1:
                  Kn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      fe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Kn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    uc(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (M = S)) : uc(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (o = h.stateNode),
                  s
                    ? ((l = o.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (u.style.display = hf('display', i)));
              } catch (g) {
                fe(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = s ? '' : h.memoizedProps;
              } catch (g) {
                fe(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      lt(t, e), ht(e), r & 4 && lc(e);
      break;
    case 21:
      break;
    default:
      lt(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($d(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (qr(o, ''), (r.flags &= -33));
          var l = oc(e);
          Lu(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = oc(e);
          Tu(e, u, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cy(e, t, n) {
  (M = e), Wd(e);
}
function Wd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ho;
      if (!i) {
        var u = o.alternate,
          a = (u !== null && u.memoizedState !== null) || Le;
        u = Ho;
        var s = Le;
        if (((Ho = i), (Le = a) && !s))
          for (M = o; M !== null; )
            (i = M),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ac(o)
                : a !== null
                ? ((a.return = i), (M = a))
                : ac(o);
        for (; l !== null; ) (M = l), Wd(l), (l = l.sibling);
        (M = o), (Ho = u), (Le = s);
      }
      ic(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (M = l)) : ic(e);
  }
}
function ic(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || $l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Vs(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Vs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
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
                  var c = s.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && to(h);
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
              throw Error(_(163));
          }
        Le || (t.flags & 512 && Nu(t));
      } catch (m) {
        fe(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function uc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function ac(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $l(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, o, a);
            }
          }
          var l = t.return;
          try {
            Nu(t);
          } catch (a) {
            fe(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Nu(t);
          } catch (a) {
            fe(t, i, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (M = u);
      break;
    }
    M = t.return;
  }
}
var fy = Math.ceil,
  Rl = zt.ReactCurrentDispatcher,
  _a = zt.ReactCurrentOwner,
  et = zt.ReactCurrentBatchConfig,
  Y = 0,
  Ce = null,
  ge = null,
  Pe = 0,
  Ve = 0,
  Qn = an(0),
  xe = 0,
  po = null,
  _n = 0,
  Hl = 0,
  Na = 0,
  Qr = null,
  Ue = null,
  Ta = 0,
  ar = 1 / 0,
  Ct = null,
  Pl = !1,
  Ou = null,
  tn = null,
  Vo = !1,
  Xt = null,
  _l = 0,
  Jr = 0,
  Du = null,
  el = -1,
  tl = 0;
function ze() {
  return Y & 6 ? ye() : el !== -1 ? el : (el = ye());
}
function nn(e) {
  return e.mode & 1
    ? Y & 2 && Pe !== 0
      ? Pe & -Pe
      : Ym.transition !== null
      ? (tl === 0 && (tl = _f()), tl)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jf(e.type))),
        e)
    : 1;
}
function ft(e, t, n, r) {
  if (50 < Jr) throw ((Jr = 0), (Du = null), Error(_(185)));
  go(e, n, r),
    (!(Y & 2) || e !== Ce) &&
      (e === Ce && (!(Y & 2) && (Hl |= n), xe === 4 && Jt(e, Pe)),
      He(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((ar = ye() + 500), Ul && sn()));
}
function He(e, t) {
  var n = e.callbackNode;
  Yh(e, t);
  var r = cl(e, e === Ce ? Pe : 0);
  if (r === 0)
    n !== null && vs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vs(n), t === 1))
      e.tag === 0 ? Jm(sc.bind(null, e)) : bf(sc.bind(null, e)),
        Vm(function () {
          !(Y & 6) && sn();
        }),
        (n = null);
    else {
      switch (Nf(r)) {
        case 1:
          n = ta;
          break;
        case 4:
          n = Rf;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = Pf;
          break;
        default:
          n = sl;
      }
      n = Zd(n, Kd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Kd(e, t) {
  if (((el = -1), (tl = 0), Y & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = cl(e, e === Ce ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var o = Y;
    Y |= 2;
    var l = Jd();
    (Ce !== e || Pe !== t) && ((Ct = null), (ar = ye() + 500), xn(e, t));
    do
      try {
        hy();
        break;
      } catch (u) {
        Qd(e, u);
      }
    while (1);
    ha(),
      (Rl.current = l),
      (Y = o),
      ge !== null ? (t = 0) : ((Ce = null), (Pe = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = lu(e)), o !== 0 && ((r = o), (t = Mu(e, o)))), t === 1)
    )
      throw ((n = po), xn(e, 0), Jt(e, r), He(e, ye()), n);
    if (t === 6) Jt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !dy(o) &&
          ((t = Nl(e, r)),
          t === 2 && ((l = lu(e)), l !== 0 && ((r = l), (t = Mu(e, l)))),
          t === 1))
      )
        throw ((n = po), xn(e, 0), Jt(e, r), He(e, ye()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          vn(e, Ue, Ct);
          break;
        case 3:
          if (
            (Jt(e, r), (r & 130023424) === r && ((t = Ta + 500 - ye()), 10 < t))
          ) {
            if (cl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = pu(vn.bind(null, e, Ue, Ct), t);
            break;
          }
          vn(e, Ue, Ct);
          break;
        case 4:
          if ((Jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ct(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = ye() - r),
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
                : 1960 * fy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pu(vn.bind(null, e, Ue, Ct), r);
            break;
          }
          vn(e, Ue, Ct);
          break;
        case 5:
          vn(e, Ue, Ct);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return He(e, ye()), e.callbackNode === n ? Kd.bind(null, e) : null;
}
function Mu(e, t) {
  var n = Qr;
  return (
    e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && ju(t)),
    e
  );
}
function ju(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function dy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!dt(l(), o)) return !1;
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
function Jt(e, t) {
  for (
    t &= ~Na,
      t &= ~Hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sc(e) {
  if (Y & 6) throw Error(_(327));
  bn();
  var t = cl(e, 0);
  if (!(t & 1)) return He(e, ye()), null;
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lu(e);
    r !== 0 && ((t = r), (n = Mu(e, r)));
  }
  if (n === 1) throw ((n = po), xn(e, 0), Jt(e, t), He(e, ye()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vn(e, Ue, Ct),
    He(e, ye()),
    null
  );
}
function La(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((ar = ye() + 500), Ul && sn());
  }
}
function Nn(e) {
  Xt !== null && Xt.tag === 0 && !(Y & 6) && bn();
  var t = Y;
  Y |= 1;
  var n = et.transition,
    r = X;
  try {
    if (((et.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (et.transition = n), (Y = t), !(Y & 6) && sn();
  }
}
function Oa() {
  (Ve = Qn.current), re(Qn);
}
function xn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hm(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((fa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ml();
          break;
        case 3:
          ir(), re(Be), re(Oe), Sa();
          break;
        case 5:
          wa(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          re(ue);
          break;
        case 19:
          re(ue);
          break;
        case 10:
          ma(r.type._context);
          break;
        case 22:
        case 23:
          Oa();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ge = e = rn(e.current, null)),
    (Pe = Ve = t),
    (xe = 0),
    (po = null),
    (Na = Hl = _n = 0),
    (Ue = Qr = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((n = wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function Qd(e, t) {
  do {
    var n = ge;
    try {
      if ((ha(), (qo.current = Cl), kl)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        kl = !1;
      }
      if (
        ((Pn = 0),
        (ke = Ee = ae = null),
        (Wr = !1),
        (so = 0),
        (_a.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (po = t), (ge = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = Pe),
          (u.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var s = a,
            c = u,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = Gs(i);
          if (S !== null) {
            (S.flags &= -257),
              qs(S, i, u, l, t),
              S.mode & 1 && Xs(l, s, t),
              (t = S),
              (a = s);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xs(l, s, t), Da();
              break e;
            }
            a = Error(_(426));
          }
        } else if (oe && u.mode & 1) {
          var P = Gs(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              qs(P, i, u, l, t),
              da(ur(a, u));
            break e;
          }
        }
        (l = a = ur(a, u)),
          xe !== 4 && (xe = 2),
          Qr === null ? (Qr = [l]) : Qr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = Td(l, a, t);
              Hs(l, p);
              break e;
            case 1:
              u = a;
              var d = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (tn === null || !tn.has(v))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var f = Ld(l, u, t);
                Hs(l, f);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Xd(n);
    } catch (C) {
      (t = C), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Jd() {
  var e = Rl.current;
  return (Rl.current = Cl), e === null ? Cl : e;
}
function Da() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null || (!(_n & 268435455) && !(Hl & 268435455)) || Jt(Ce, Pe);
}
function Nl(e, t) {
  var n = Y;
  Y |= 2;
  var r = Jd();
  (Ce !== e || Pe !== t) && ((Ct = null), xn(e, t));
  do
    try {
      py();
      break;
    } catch (o) {
      Qd(e, o);
    }
  while (1);
  if ((ha(), (Y = n), (Rl.current = r), ge !== null)) throw Error(_(261));
  return (Ce = null), (Pe = 0), xe;
}
function py() {
  for (; ge !== null; ) Yd(ge);
}
function hy() {
  for (; ge !== null && !Ih(); ) Yd(ge);
}
function Yd(e) {
  var t = qd(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xd(e) : (ge = t),
    (_a.current = null);
}
function Xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uy(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ge = null);
        return;
      }
    } else if (((n = iy(n, t, Ve)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function vn(e, t, n) {
  var r = X,
    o = et.transition;
  try {
    (et.transition = null), (X = 1), my(e, t, n, r);
  } finally {
    (et.transition = o), (X = r);
  }
  return null;
}
function my(e, t, n, r) {
  do bn();
  while (Xt !== null);
  if (Y & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Xh(e, l),
    e === Ce && ((ge = Ce = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vo ||
      ((Vo = !0),
      Zd(sl, function () {
        return bn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = et.transition), (et.transition = null);
    var i = X;
    X = 1;
    var u = Y;
    (Y |= 4),
      (_a.current = null),
      sy(e, n),
      Vd(n, e),
      zm(fu),
      (fl = !!cu),
      (fu = cu = null),
      (e.current = n),
      cy(n),
      Bh(),
      (Y = u),
      (X = i),
      (et.transition = l);
  } else e.current = n;
  if (
    (Vo && ((Vo = !1), (Xt = e), (_l = o)),
    (l = e.pendingLanes),
    l === 0 && (tn = null),
    Vh(n.stateNode),
    He(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pl) throw ((Pl = !1), (e = Ou), (Ou = null), e);
  return (
    _l & 1 && e.tag !== 0 && bn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Du ? Jr++ : ((Jr = 0), (Du = e))) : (Jr = 0),
    sn(),
    null
  );
}
function bn() {
  if (Xt !== null) {
    var e = Nf(_l),
      t = et.transition,
      n = X;
    try {
      if (((et.transition = null), (X = 16 > e ? 16 : e), Xt === null))
        var r = !1;
      else {
        if (((e = Xt), (Xt = null), (_l = 0), Y & 6)) throw Error(_(331));
        var o = Y;
        for (Y |= 4, M = e.current; M !== null; ) {
          var l = M,
            i = l.child;
          if (M.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (M = s; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(8, c, l);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (M = h);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var m = c.sibling,
                        S = c.return;
                      if ((Bd(c), c === s)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (M = m);
                        break;
                      }
                      M = S;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var P = g.sibling;
                    (g.sibling = null), (g = P);
                  } while (g !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (M = i);
          else
            e: for (; M !== null; ) {
              if (((l = M), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kr(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (M = p);
                break e;
              }
              M = l.return;
            }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          i = M;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (M = v);
          else
            e: for (i = d; M !== null; ) {
              if (((u = M), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $l(9, u);
                  }
                } catch (C) {
                  fe(u, u.return, C);
                }
              if (u === i) {
                M = null;
                break e;
              }
              var f = u.sibling;
              if (f !== null) {
                (f.return = u.return), (M = f);
                break e;
              }
              M = u.return;
            }
        }
        if (
          ((Y = o), sn(), gt && typeof gt.onPostCommitFiberRoot == 'function')
        )
          try {
            gt.onPostCommitFiberRoot(Ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (et.transition = t);
    }
  }
  return !1;
}
function cc(e, t, n) {
  (t = ur(n, t)),
    (t = Td(e, t, 1)),
    (e = en(e, t, 1)),
    (t = ze()),
    e !== null && (go(e, 1, t), He(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) cc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (tn === null || !tn.has(r)))
        ) {
          (e = ur(n, e)),
            (e = Ld(t, e, 1)),
            (t = en(t, e, 1)),
            (e = ze()),
            t !== null && (go(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Pe & n) === n &&
      (xe === 4 || (xe === 3 && (Pe & 130023424) === Pe && 500 > ye() - Ta)
        ? xn(e, 0)
        : (Na |= n)),
    He(e, t);
}
function Gd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Mo), (Mo <<= 1), !(Mo & 130023424) && (Mo = 4194304))
      : (t = 1));
  var n = ze();
  (e = Mt(e, t)), e !== null && (go(e, t, n), He(e, n));
}
function vy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Gd(e, n);
}
function gy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Gd(e, n);
}
var qd;
qd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), ly(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), oe && t.flags & 1048576 && ed(t, gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bo(e, t), (e = t.pendingProps);
      var o = rr(t, Oe.current);
      Zn(t, n), (o = xa(null, t, r, e, o, n));
      var l = ka();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((l = !0), yl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            va(t),
            (o.updater = Il),
            (t.stateNode = o),
            (o._reactInternals = t),
            Su(t, r, e, n),
            (t = ku(null, t, r, !0, l, n)))
          : ((t.tag = 0), oe && l && ca(t), je(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Sy(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = xu(null, t, r, e, n);
            break e;
          case 1:
            t = ec(null, t, r, e, n);
            break e;
          case 11:
            t = Zs(null, t, r, e, n);
            break e;
          case 14:
            t = bs(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        xu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        ec(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((jd(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          od(e, t),
          El(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = ur(Error(_(423)), t)), (t = tc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ur(Error(_(424)), t)), (t = tc(e, t, r, n, o));
            break e;
          } else
            for (
              We = bt(t.stateNode.containerInfo.firstChild),
                Ke = t,
                oe = !0,
                st = null,
                n = ad(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((or(), r === o)) {
            t = jt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sd(t),
        e === null && vu(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        du(r, o) ? (i = null) : l !== null && du(r, l) && (t.flags |= 32),
        Md(e, t),
        je(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && vu(t), null;
    case 13:
      return zd(e, t, n);
    case 4:
      return (
        ga(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = lr(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Zs(e, t, r, o, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          te(wl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (dt(l.value, i)) {
            if (l.children === o.children && !Be.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies;
              if (u !== null) {
                i = l.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Nt(-1, n & -n)), (a.tag = 2);
                      var s = l.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      gu(l.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  gu(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        je(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        bs(e, t, r, o, n)
      );
    case 15:
      return Od(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        bo(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), yl(t)) : (e = !1),
        Zn(t, n),
        id(t, r, o),
        Su(t, r, o, n),
        ku(null, t, r, !0, e, n)
      );
    case 19:
      return Fd(e, t, n);
    case 22:
      return Dd(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Zd(e, t) {
  return Cf(e, t);
}
function wy(e, t, n, r) {
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
function be(e, t, n, r) {
  return new wy(e, t, n, r);
}
function Ma(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sy(e) {
  if (typeof e == 'function') return Ma(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zu)) return 11;
    if (e === bu) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
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
function nl(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Ma(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Fn:
        return kn(n.children, o, l, t);
      case qu:
        (i = 8), (o |= 8);
        break;
      case Wi:
        return (
          (e = be(12, n, t, o | 2)), (e.elementType = Wi), (e.lanes = l), e
        );
      case Ki:
        return (e = be(13, n, t, o)), (e.elementType = Ki), (e.lanes = l), e;
      case Qi:
        return (e = be(19, n, t, o)), (e.elementType = Qi), (e.lanes = l), e;
      case uf:
        return Vl(n, o, l, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case of:
              i = 10;
              break e;
            case lf:
              i = 9;
              break e;
            case Zu:
              i = 11;
              break e;
            case bu:
              i = 14;
              break e;
            case Wt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = be(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function kn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Vl(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = uf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Mi(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function ji(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ey(e, t, n, r, o) {
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
    (this.eventTimes = hi(0)),
    (this.expirationTimes = hi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = hi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ja(e, t, n, r, o, l, i, u, a) {
  return (
    (e = new Ey(e, t, n, u, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = be(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    va(l),
    e
  );
}
function xy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bd(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Zf(e, n, t);
  }
  return t;
}
function ep(e, t, n, r, o, l, i, u, a) {
  return (
    (e = ja(n, r, !0, e, o, l, i, u, a)),
    (e.context = bd(null)),
    (n = e.current),
    (r = ze()),
    (o = nn(n)),
    (l = Nt(r, o)),
    (l.callback = t ?? null),
    en(n, l, o),
    (e.current.lanes = o),
    go(e, o, r),
    He(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var o = t.current,
    l = ze(),
    i = nn(o);
  return (
    (n = bd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = en(o, t, i)),
    e !== null && (ft(e, o, i, l), Go(e, o, i)),
    i
  );
}
function Tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function za(e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t);
}
function ky() {
  return null;
}
var tp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fa(e) {
  this._internalRoot = e;
}
Kl.prototype.render = Fa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Wl(e, t, null, null);
};
Kl.prototype.unmount = Fa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      Wl(null, e, null, null);
    }),
      (t[Dt] = null);
  }
};
function Kl(e) {
  this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Of();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    Qt.splice(n, 0, e), n === 0 && Mf(e);
  }
};
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ql(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function dc() {}
function Cy(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var l = r;
      r = function () {
        var s = Tl(i);
        l.call(s);
      };
    }
    var i = ep(t, r, e, 0, null, !1, !1, '', dc);
    return (
      (e._reactRootContainer = i),
      (e[Dt] = i.current),
      oo(e.nodeType === 8 ? e.parentNode : e),
      Nn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var s = Tl(a);
      u.call(s);
    };
  }
  var a = ja(e, 0, !1, null, null, !1, !1, '', dc);
  return (
    (e._reactRootContainer = a),
    (e[Dt] = a.current),
    oo(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      Wl(t, a, n, r);
    }),
    a
  );
}
function Jl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == 'function') {
      var u = o;
      o = function () {
        var a = Tl(i);
        u.call(a);
      };
    }
    Wl(t, i, e, o);
  } else i = Cy(n, t, e, o, r);
  return Tl(i);
}
Tf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ar(t.pendingLanes);
        n !== 0 &&
          (na(t, n | 1), He(t, ye()), !(Y & 6) && ((ar = ye() + 500), sn()));
      }
      break;
    case 13:
      Nn(function () {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = ze();
          ft(r, e, 1, o);
        }
      }),
        za(e, 1);
  }
};
ra = function (e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = ze();
      ft(t, e, 134217728, n);
    }
    za(e, 134217728);
  }
};
Lf = function (e) {
  if (e.tag === 13) {
    var t = nn(e),
      n = Mt(e, t);
    if (n !== null) {
      var r = ze();
      ft(n, e, t, r);
    }
    za(e, t);
  }
};
Of = function () {
  return X;
};
Df = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
nu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Xi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = Al(r);
            if (!o) throw Error(_(90));
            sf(r), Xi(r, o);
          }
        }
      }
      break;
    case 'textarea':
      ff(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
gf = La;
wf = Nn;
var Ry = { usingClientEntryPoint: !1, Events: [So, Bn, Al, yf, vf, La] },
  Tr = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Py = {
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
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || ky,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wo.isDisabled && Wo.supportsFiber)
    try {
      (Ml = Wo.inject(Py)), (gt = Wo);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(_(200));
  return xy(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!Aa(e)) throw Error(_(299));
  var n = !1,
    r = '',
    o = tp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ja(e, 1, !1, null, null, n, !1, r, o)),
    (e[Dt] = t.current),
    oo(e.nodeType === 8 ? e.parentNode : e),
    new Fa(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(_(188))
      : ((e = Object.keys(e).join(',')), Error(_(268, e)));
  return (e = xf(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return Nn(e);
};
Je.hydrate = function (e, t, n) {
  if (!Ql(t)) throw Error(_(200));
  return Jl(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!Aa(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = '',
    i = tp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ep(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Dt] = t.current),
    oo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Kl(t);
};
Je.render = function (e, t, n) {
  if (!Ql(t)) throw Error(_(200));
  return Jl(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Ql(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Nn(function () {
        Jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Dt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = La;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ql(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Jl(e, t, n, !1, r);
};
Je.version = '18.2.0-next-9e3b772b8-20220608';
function np() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np);
    } catch (e) {
      console.error(e);
    }
}
np(), (bc.exports = Je);
var _y = bc.exports,
  pc = _y;
(Hi.createRoot = pc.createRoot), (Hi.hydrateRoot = pc.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var he;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(he || (he = {}));
const hc = 'popstate';
function Ny(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: u } = r.location;
    return ho(
      '',
      { pathname: l, search: i, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Ln(o);
  }
  return Ly(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Tn(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ty() {
  return Math.random().toString(36).substr(2, 8);
}
function mc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ho(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Ft(t) : t,
      { state: n, key: (t && t.key) || r || Ty() }
    )
  );
}
function Ln(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Ft(e) {
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
function Ly(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    u = he.Pop,
    a = null,
    s = c();
  s == null && ((s = 0), i.replaceState(de({}, i.state, { idx: s }), ''));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = he.Pop;
    let P = c(),
      p = P == null ? null : P - s;
    (s = P), a && a({ action: u, location: g.location, delta: p });
  }
  function m(P, p) {
    u = he.Push;
    let d = ho(g.location, P, p);
    n && n(d, P), (s = c() + 1);
    let v = mc(d, s),
      f = g.createHref(d);
    try {
      i.pushState(v, '', f);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      o.location.assign(f);
    }
    l && a && a({ action: u, location: g.location, delta: 1 });
  }
  function S(P, p) {
    u = he.Replace;
    let d = ho(g.location, P, p);
    n && n(d, P), (s = c());
    let v = mc(d, s),
      f = g.createHref(d);
    i.replaceState(v, '', f),
      l && a && a({ action: u, location: g.location, delta: 0 });
  }
  function y(P) {
    let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof P == 'string' ? P : Ln(P);
    return (
      W(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          d
      ),
      new URL(d, p)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(o, i);
    },
    listen(P) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(hc, h),
        (a = P),
        () => {
          o.removeEventListener(hc, h), (a = null);
        }
      );
    },
    createHref(P) {
      return t(o, P);
    },
    createURL: y,
    encodeLocation(P) {
      let p = y(P);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: S,
    go(P) {
      return i.go(P);
    },
  };
  return g;
}
var me;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(me || (me = {}));
const Oy = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Dy(e) {
  return e.index === !0;
}
function zu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, l) => {
      let i = [...n, l],
        u = typeof o.id == 'string' ? o.id : i.join('-');
      if (
        (W(
          o.index !== !0 || !o.children,
          'Cannot specify children on an index route'
        ),
        W(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Dy(o))
      ) {
        let a = de({}, o, t(o), { id: u });
        return (r[u] = a), a;
      } else {
        let a = de({}, o, t(o), { id: u, children: void 0 });
        return (
          (r[u] = a), o.children && (a.children = zu(o.children, t, i, r)), a
        );
      }
    })
  );
}
function Jn(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Ft(t) : t,
    o = hr(r.pathname || '/', n);
  if (o == null) return null;
  let l = rp(e);
  jy(l);
  let i = null;
  for (let u = 0; i == null && u < l.length; ++u) i = Vy(l[u], Qy(o));
  return i;
}
function My(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function rp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (l, i, u) => {
    let a = {
      relativePath: u === void 0 ? l.path || '' : u,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    a.relativePath.startsWith('/') &&
      (W(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Tt([r, a.relativePath]),
      c = n.concat(a);
    l.children &&
      l.children.length > 0 &&
      (W(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      rp(l.children, t, c, s)),
      !(l.path == null && !l.index) &&
        t.push({ path: s, score: $y(s, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, i) => {
      var u;
      if (l.path === '' || !((u = l.path) != null && u.includes('?'))) o(l, i);
      else for (let a of op(l.path)) o(l, i, a);
    }),
    t
  );
}
function op(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    l = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [l, ''] : [l];
  let i = op(r.join('/')),
    u = [];
  return (
    u.push(...i.map((a) => (a === '' ? l : [l, a].join('/')))),
    o && u.push(...i),
    u.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function jy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Hy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const zy = /^:\w+$/,
  Fy = 3,
  Ay = 2,
  Uy = 1,
  Iy = 10,
  By = -2,
  yc = (e) => e === '*';
function $y(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(yc) && (r += By),
    t && (r += Ay),
    n
      .filter((o) => !yc(o))
      .reduce((o, l) => o + (zy.test(l) ? Fy : l === '' ? Uy : Iy), r)
  );
}
function Hy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Vy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    l = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = o === '/' ? t : t.slice(o.length) || '/',
      c = Wy(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = u.route;
    l.push({
      params: r,
      pathname: Tt([o, c.pathname]),
      pathnameBase: Gy(Tt([o, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== '/' && (o = Tt([o, c.pathnameBase]));
  }
  return l;
}
function Wy(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ky(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, '$1'),
    u = o.slice(1);
  return {
    params: r.reduce((s, c, h) => {
      let { paramName: m, isOptional: S } = c;
      if (m === '*') {
        let g = u[h] || '';
        i = l.slice(0, l.length - g.length).replace(/(.)\/+$/, '$1');
      }
      const y = u[h];
      return S && !y ? (s[m] = void 0) : (s[m] = Jy(y || '', m)), s;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function Ky(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tn(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function Qy(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Tn(
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
function Jy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Tn(
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
function hr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Yy(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Ft(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Xy(n, t)) : t,
    search: qy(r),
    hash: Zy(o),
  };
}
function Xy(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function zi(e, t, n, r) {
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
function Yl(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ua(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Ft(e))
    : ((o = de({}, e)),
      W(
        !o.pathname || !o.pathname.includes('?'),
        zi('?', 'pathname', 'search', o)
      ),
      W(
        !o.pathname || !o.pathname.includes('#'),
        zi('#', 'pathname', 'hash', o)
      ),
      W(!o.search || !o.search.includes('#'), zi('#', 'search', 'hash', o)));
  let l = e === '' || o.pathname === '',
    i = l ? '/' : o.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let h = t.length - 1;
    if (i.startsWith('..')) {
      let m = i.split('/');
      for (; m[0] === '..'; ) m.shift(), (h -= 1);
      o.pathname = m.join('/');
    }
    u = h >= 0 ? t[h] : '/';
  }
  let a = Yy(o, u),
    s = i && i !== '/' && i.endsWith('/'),
    c = (l || i === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (s || c) && (a.pathname += '/'), a;
}
const Tt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Gy = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  qy = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Zy = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Ia {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function lp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const ip = ['post', 'put', 'patch', 'delete'],
  by = new Set(ip),
  ev = ['get', ...ip],
  tv = new Set(ev),
  nv = new Set([301, 302, 303, 307, 308]),
  rv = new Set([307, 308]),
  Fi = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ov = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Lr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  up = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  ap = 'remix-router-transitions';
function iv(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  W(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    o = (E) => ({ hasErrorBoundary: w(E) });
  } else o = lv;
  let l = {},
    i = zu(e.routes, o, void 0, l),
    u,
    a = e.basename || '/',
    s = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    c = null,
    h = new Set(),
    m = null,
    S = null,
    y = null,
    g = e.hydrationData != null,
    P = Jn(i, e.history.location, a),
    p = null;
  if (P == null) {
    let w = Ge(404, { pathname: e.history.location.pathname }),
      { matches: E, route: k } = Cc(i);
    (P = E), (p = { [k.id]: w });
  }
  let d =
      !P.some((w) => w.route.lazy) &&
      (!P.some((w) => w.route.loader) || e.hydrationData != null),
    v,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: d,
      navigation: Fi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = he.Pop,
    T = !1,
    R,
    L = !1,
    H = new Map(),
    F = null,
    le = !1,
    De = !1,
    pt = [],
    fn = [],
    ce = new Map(),
    At = 0,
    Et = -1,
    O = new Map(),
    A = new Set(),
    $ = new Map(),
    q = new Map(),
    ee = new Set(),
    Xe = new Map(),
    Me = new Map(),
    dn = !1;
  function xt() {
    if (
      ((c = e.history.listen((w) => {
        let { action: E, location: k, delta: D } = w;
        if (dn) {
          dn = !1;
          return;
        }
        Tn(
          Me.size === 0 || D != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let z = ts({
          currentLocation: f.location,
          nextLocation: k,
          historyAction: E,
        });
        if (z && D != null) {
          (dn = !0),
            e.history.go(D * -1),
            Po(z, {
              state: 'blocked',
              location: k,
              proceed() {
                Po(z, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(D);
              },
              reset() {
                let U = new Map(f.blockers);
                U.set(z, Lr), ve({ blockers: U });
              },
            });
          return;
        }
        return pn(E, k);
      })),
      n)
    ) {
      vv(t, H);
      let w = () => gv(t, H);
      t.addEventListener('pagehide', w),
        (F = () => t.removeEventListener('pagehide', w));
    }
    return f.initialized || pn(he.Pop, f.location), v;
  }
  function Mn() {
    c && c(),
      F && F(),
      h.clear(),
      R && R.abort(),
      f.fetchers.forEach((w, E) => Ro(E)),
      f.blockers.forEach((w, E) => es(E));
  }
  function $p(w) {
    return h.add(w), () => h.delete(w);
  }
  function ve(w, E) {
    f = de({}, f, w);
    let k = [],
      D = [];
    s.v7_fetcherPersist &&
      f.fetchers.forEach((z, U) => {
        z.state === 'idle' && (ee.has(U) ? D.push(U) : k.push(U));
      }),
      h.forEach((z) =>
        z(f, { deletedFetchers: D, unstable_viewTransitionOpts: E })
      ),
      s.v7_fetcherPersist &&
        (k.forEach((z) => f.fetchers.delete(z)), D.forEach((z) => Ro(z)));
  }
  function vr(w, E) {
    var k, D;
    let z =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        at(f.navigation.formMethod) &&
        f.navigation.state === 'loading' &&
        ((k = w.state) == null ? void 0 : k._isRedirect) !== !0,
      U;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (U = E.actionData)
        : (U = null)
      : z
      ? (U = f.actionData)
      : (U = null);
    let V = E.loaderData
        ? kc(f.loaderData, E.loaderData, E.matches || [], E.errors)
        : f.loaderData,
      I = f.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((ie, Q) => I.set(Q, Lr)));
    let j =
      T === !0 ||
      (f.navigation.formMethod != null &&
        at(f.navigation.formMethod) &&
        ((D = w.state) == null ? void 0 : D._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      le ||
        C === he.Pop ||
        (C === he.Push
          ? e.history.push(w, w.state)
          : C === he.Replace && e.history.replace(w, w.state));
    let Z;
    if (C === he.Pop) {
      let ie = H.get(f.location.pathname);
      ie && ie.has(w.pathname)
        ? (Z = { currentLocation: f.location, nextLocation: w })
        : H.has(w.pathname) &&
          (Z = { currentLocation: w, nextLocation: f.location });
    } else if (L) {
      let ie = H.get(f.location.pathname);
      ie
        ? ie.add(w.pathname)
        : ((ie = new Set([w.pathname])), H.set(f.location.pathname, ie)),
        (Z = { currentLocation: f.location, nextLocation: w });
    }
    ve(
      de({}, E, {
        actionData: U,
        loaderData: V,
        historyAction: C,
        location: w,
        initialized: !0,
        navigation: Fi,
        revalidation: 'idle',
        restoreScrollPosition: rs(w, E.matches || f.matches),
        preventScrollReset: j,
        blockers: I,
      }),
      Z
    ),
      (C = he.Pop),
      (T = !1),
      (L = !1),
      (le = !1),
      (De = !1),
      (pt = []),
      (fn = []);
  }
  async function Ya(w, E) {
    if (typeof w == 'number') {
      e.history.go(w);
      return;
    }
    let k = Fu(
        f.location,
        f.matches,
        a,
        s.v7_prependBasename,
        w,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: D,
        submission: z,
        error: U,
      } = vc(s.v7_normalizeFormMethod, !1, k, E),
      V = f.location,
      I = ho(f.location, D, E && E.state);
    I = de({}, I, e.history.encodeLocation(I));
    let j = E && E.replace != null ? E.replace : void 0,
      Z = he.Push;
    j === !0
      ? (Z = he.Replace)
      : j === !1 ||
        (z != null &&
          at(z.formMethod) &&
          z.formAction === f.location.pathname + f.location.search &&
          (Z = he.Replace));
    let ie =
        E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      Q = ts({ currentLocation: V, nextLocation: I, historyAction: Z });
    if (Q) {
      Po(Q, {
        state: 'blocked',
        location: I,
        proceed() {
          Po(Q, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            Ya(w, E);
        },
        reset() {
          let b = new Map(f.blockers);
          b.set(Q, Lr), ve({ blockers: b });
        },
      });
      return;
    }
    return await pn(Z, I, {
      submission: z,
      pendingError: U,
      preventScrollReset: ie,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
    });
  }
  function Hp() {
    if (
      (ri(),
      ve({ revalidation: 'loading' }),
      f.navigation.state !== 'submitting')
    ) {
      if (f.navigation.state === 'idle') {
        pn(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      pn(C || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function pn(w, E, k) {
    R && R.abort(),
      (R = null),
      (C = w),
      (le = (k && k.startUninterruptedRevalidation) === !0),
      qp(f.location, f.matches),
      (T = (k && k.preventScrollReset) === !0),
      (L = (k && k.enableViewTransition) === !0);
    let D = u || i,
      z = k && k.overrideNavigation,
      U = Jn(D, E, a);
    if (!U) {
      let b = Ge(404, { pathname: E.pathname }),
        { matches: Se, route: hn } = Cc(D);
      oi(), vr(E, { matches: Se, loaderData: {}, errors: { [hn.id]: b } });
      return;
    }
    if (
      f.initialized &&
      !De &&
      fv(f.location, E) &&
      !(k && k.submission && at(k.submission.formMethod))
    ) {
      vr(E, { matches: U });
      return;
    }
    R = new AbortController();
    let V = Dr(e.history, E, R.signal, k && k.submission),
      I,
      j;
    if (k && k.pendingError) j = { [Yr(U).route.id]: k.pendingError };
    else if (k && k.submission && at(k.submission.formMethod)) {
      let b = await Vp(V, E, k.submission, U, { replace: k.replace });
      if (b.shortCircuited) return;
      (I = b.pendingActionData),
        (j = b.pendingActionError),
        (z = Ai(E, k.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: Z,
      loaderData: ie,
      errors: Q,
    } = await Wp(
      V,
      E,
      U,
      z,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      I,
      j
    );
    Z ||
      ((R = null),
      vr(
        E,
        de({ matches: U }, I ? { actionData: I } : {}, {
          loaderData: ie,
          errors: Q,
        })
      ));
  }
  async function Vp(w, E, k, D, z) {
    z === void 0 && (z = {}), ri();
    let U = mv(E, k);
    ve({ navigation: U });
    let V,
      I = Uu(D, E);
    if (!I.route.action && !I.route.lazy)
      V = {
        type: me.error,
        error: Ge(405, {
          method: w.method,
          pathname: E.pathname,
          routeId: I.route.id,
        }),
      };
    else if (((V = await Or('action', w, I, D, l, o, a)), w.signal.aborted))
      return { shortCircuited: !0 };
    if (er(V)) {
      let j;
      return (
        z && z.replace != null
          ? (j = z.replace)
          : (j = V.location === f.location.pathname + f.location.search),
        await gr(f, V, { submission: k, replace: j }),
        { shortCircuited: !0 }
      );
    }
    if (Xr(V)) {
      let j = Yr(D, I.route.id);
      return (
        (z && z.replace) !== !0 && (C = he.Push),
        { pendingActionData: {}, pendingActionError: { [j.route.id]: V.error } }
      );
    }
    if (En(V)) throw Ge(400, { type: 'defer-action' });
    return { pendingActionData: { [I.route.id]: V.data } };
  }
  async function Wp(w, E, k, D, z, U, V, I, j) {
    let Z = D || Ai(E, z),
      ie = z || U || _c(Z),
      Q = u || i,
      [b, Se] = gc(e.history, f, k, ie, E, De, pt, fn, $, A, Q, a, I, j);
    if (
      (oi(
        (G) =>
          !(k && k.some((ot) => ot.route.id === G)) ||
          (b && b.some((ot) => ot.route.id === G))
      ),
      (Et = ++At),
      b.length === 0 && Se.length === 0)
    ) {
      let G = Za();
      return (
        vr(
          E,
          de(
            { matches: k, loaderData: {}, errors: j || null },
            I ? { actionData: I } : {},
            G ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!le) {
      Se.forEach((ot) => {
        let Bt = f.fetchers.get(ot.key),
          pe = Mr(void 0, Bt ? Bt.data : void 0);
        f.fetchers.set(ot.key, pe);
      });
      let G = I || f.actionData;
      ve(
        de(
          { navigation: Z },
          G
            ? Object.keys(G).length === 0
              ? { actionData: null }
              : { actionData: G }
            : {},
          Se.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
        )
      );
    }
    Se.forEach((G) => {
      ce.has(G.key) && Ut(G.key), G.controller && ce.set(G.key, G.controller);
    });
    let hn = () => Se.forEach((G) => Ut(G.key));
    R && R.signal.addEventListener('abort', hn);
    let {
      results: mn,
      loaderResults: Sr,
      fetcherResults: li,
    } = await Ga(f.matches, k, b, Se, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener('abort', hn),
      Se.forEach((G) => ce.delete(G.key));
    let kt = Rc(mn);
    if (kt) {
      if (kt.idx >= b.length) {
        let G = Se[kt.idx - b.length].key;
        A.add(G);
      }
      return await gr(f, kt.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: It, errors: _o } = xc(f, k, b, Sr, j, Se, li, Xe);
    Xe.forEach((G, ot) => {
      G.subscribe((Bt) => {
        (Bt || G.done) && Xe.delete(ot);
      });
    });
    let ii = Za(),
      ui = ba(Et),
      ai = ii || ui || Se.length > 0;
    return de(
      { loaderData: It, errors: _o },
      ai ? { fetchers: new Map(f.fetchers) } : {}
    );
  }
  function Xa(w) {
    return (
      s.v7_fetcherPersist &&
        (q.set(w, (q.get(w) || 0) + 1), ee.has(w) && ee.delete(w)),
      f.fetchers.get(w) || ov
    );
  }
  function Kp(w, E, k, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ce.has(w) && Ut(w);
    let z = u || i,
      U = Fu(
        f.location,
        f.matches,
        a,
        s.v7_prependBasename,
        k,
        E,
        D == null ? void 0 : D.relative
      ),
      V = Jn(z, U, a);
    if (!V) {
      wr(w, E, Ge(404, { pathname: U }));
      return;
    }
    let {
      path: I,
      submission: j,
      error: Z,
    } = vc(s.v7_normalizeFormMethod, !0, U, D);
    if (Z) {
      wr(w, E, Z);
      return;
    }
    let ie = Uu(V, I);
    if (((T = (D && D.preventScrollReset) === !0), j && at(j.formMethod))) {
      Qp(w, E, I, ie, V, j);
      return;
    }
    $.set(w, { routeId: E, path: I }), Jp(w, E, I, ie, V, j);
  }
  async function Qp(w, E, k, D, z, U) {
    if ((ri(), $.delete(w), !D.route.action && !D.route.lazy)) {
      let pe = Ge(405, { method: U.formMethod, pathname: k, routeId: E });
      wr(w, E, pe);
      return;
    }
    let V = f.fetchers.get(w),
      I = yv(U, V);
    f.fetchers.set(w, I), ve({ fetchers: new Map(f.fetchers) });
    let j = new AbortController(),
      Z = Dr(e.history, k, j.signal, U);
    ce.set(w, j);
    let ie = At,
      Q = await Or('action', Z, D, z, l, o, a);
    if (Z.signal.aborted) {
      ce.get(w) === j && ce.delete(w);
      return;
    }
    if (ee.has(w)) {
      f.fetchers.set(w, Vt(void 0)), ve({ fetchers: new Map(f.fetchers) });
      return;
    }
    if (er(Q))
      if ((ce.delete(w), Et > ie)) {
        let pe = Vt(void 0);
        f.fetchers.set(w, pe), ve({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        A.add(w);
        let pe = Mr(U);
        return (
          f.fetchers.set(w, pe),
          ve({ fetchers: new Map(f.fetchers) }),
          gr(f, Q, { fetcherSubmission: U })
        );
      }
    if (Xr(Q)) {
      wr(w, E, Q.error);
      return;
    }
    if (En(Q)) throw Ge(400, { type: 'defer-action' });
    let b = f.navigation.location || f.location,
      Se = Dr(e.history, b, j.signal),
      hn = u || i,
      mn =
        f.navigation.state !== 'idle'
          ? Jn(hn, f.navigation.location, a)
          : f.matches;
    W(mn, "Didn't find any matches after fetcher action");
    let Sr = ++At;
    O.set(w, Sr);
    let li = Mr(U, Q.data);
    f.fetchers.set(w, li);
    let [kt, It] = gc(
      e.history,
      f,
      mn,
      U,
      b,
      De,
      pt,
      fn,
      $,
      A,
      hn,
      a,
      { [D.route.id]: Q.data },
      void 0
    );
    It.filter((pe) => pe.key !== w).forEach((pe) => {
      let Er = pe.key,
        os = f.fetchers.get(Er),
        bp = Mr(void 0, os ? os.data : void 0);
      f.fetchers.set(Er, bp),
        ce.has(Er) && Ut(Er),
        pe.controller && ce.set(Er, pe.controller);
    }),
      ve({ fetchers: new Map(f.fetchers) });
    let _o = () => It.forEach((pe) => Ut(pe.key));
    j.signal.addEventListener('abort', _o);
    let {
      results: ii,
      loaderResults: ui,
      fetcherResults: ai,
    } = await Ga(f.matches, mn, kt, It, Se);
    if (j.signal.aborted) return;
    j.signal.removeEventListener('abort', _o),
      O.delete(w),
      ce.delete(w),
      It.forEach((pe) => ce.delete(pe.key));
    let G = Rc(ii);
    if (G) {
      if (G.idx >= kt.length) {
        let pe = It[G.idx - kt.length].key;
        A.add(pe);
      }
      return gr(f, G.result);
    }
    let { loaderData: ot, errors: Bt } = xc(
      f,
      f.matches,
      kt,
      ui,
      void 0,
      It,
      ai,
      Xe
    );
    if (f.fetchers.has(w)) {
      let pe = Vt(Q.data);
      f.fetchers.set(w, pe);
    }
    ba(Sr),
      f.navigation.state === 'loading' && Sr > Et
        ? (W(C, 'Expected pending action'),
          R && R.abort(),
          vr(f.navigation.location, {
            matches: mn,
            loaderData: ot,
            errors: Bt,
            fetchers: new Map(f.fetchers),
          }))
        : (ve({
            errors: Bt,
            loaderData: kc(f.loaderData, ot, mn, Bt),
            fetchers: new Map(f.fetchers),
          }),
          (De = !1));
  }
  async function Jp(w, E, k, D, z, U) {
    let V = f.fetchers.get(w),
      I = Mr(U, V ? V.data : void 0);
    f.fetchers.set(w, I), ve({ fetchers: new Map(f.fetchers) });
    let j = new AbortController(),
      Z = Dr(e.history, k, j.signal);
    ce.set(w, j);
    let ie = At,
      Q = await Or('loader', Z, D, z, l, o, a);
    if (
      (En(Q) && (Q = (await fp(Q, Z.signal, !0)) || Q),
      ce.get(w) === j && ce.delete(w),
      Z.signal.aborted)
    )
      return;
    if (ee.has(w)) {
      f.fetchers.set(w, Vt(void 0)), ve({ fetchers: new Map(f.fetchers) });
      return;
    }
    if (er(Q))
      if (Et > ie) {
        let Se = Vt(void 0);
        f.fetchers.set(w, Se), ve({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        A.add(w), await gr(f, Q);
        return;
      }
    if (Xr(Q)) {
      wr(w, E, Q.error);
      return;
    }
    W(!En(Q), 'Unhandled fetcher deferred data');
    let b = Vt(Q.data);
    f.fetchers.set(w, b), ve({ fetchers: new Map(f.fetchers) });
  }
  async function gr(w, E, k) {
    let {
      submission: D,
      fetcherSubmission: z,
      replace: U,
    } = k === void 0 ? {} : k;
    E.revalidate && (De = !0);
    let V = ho(w.location, E.location, { _isRedirect: !0 });
    if ((W(V, 'Expected a location on the redirect navigation'), n)) {
      let b = !1;
      if (E.reloadDocument) b = !0;
      else if (up.test(E.location)) {
        const Se = e.history.createURL(E.location);
        b = Se.origin !== t.location.origin || hr(Se.pathname, a) == null;
      }
      if (b) {
        U ? t.location.replace(E.location) : t.location.assign(E.location);
        return;
      }
    }
    R = null;
    let I = U === !0 ? he.Replace : he.Push,
      { formMethod: j, formAction: Z, formEncType: ie } = w.navigation;
    !D && !z && j && Z && ie && (D = _c(w.navigation));
    let Q = D || z;
    if (rv.has(E.status) && Q && at(Q.formMethod))
      await pn(I, V, {
        submission: de({}, Q, { formAction: E.location }),
        preventScrollReset: T,
      });
    else {
      let b = Ai(V, D);
      await pn(I, V, {
        overrideNavigation: b,
        fetcherSubmission: z,
        preventScrollReset: T,
      });
    }
  }
  async function Ga(w, E, k, D, z) {
    let U = await Promise.all([
        ...k.map((j) => Or('loader', z, j, E, l, o, a)),
        ...D.map((j) =>
          j.matches && j.match && j.controller
            ? Or(
                'loader',
                Dr(e.history, j.path, j.controller.signal),
                j.match,
                j.matches,
                l,
                o,
                a
              )
            : { type: me.error, error: Ge(404, { pathname: j.path }) }
        ),
      ]),
      V = U.slice(0, k.length),
      I = U.slice(k.length);
    return (
      await Promise.all([
        Pc(
          w,
          k,
          V,
          V.map(() => z.signal),
          !1,
          f.loaderData
        ),
        Pc(
          w,
          D.map((j) => j.match),
          I,
          D.map((j) => (j.controller ? j.controller.signal : null)),
          !0
        ),
      ]),
      { results: U, loaderResults: V, fetcherResults: I }
    );
  }
  function ri() {
    (De = !0),
      pt.push(...oi()),
      $.forEach((w, E) => {
        ce.has(E) && (fn.push(E), Ut(E));
      });
  }
  function wr(w, E, k) {
    let D = Yr(f.matches, E);
    Ro(w), ve({ errors: { [D.route.id]: k }, fetchers: new Map(f.fetchers) });
  }
  function Ro(w) {
    let E = f.fetchers.get(w);
    ce.has(w) && !(E && E.state === 'loading' && O.has(w)) && Ut(w),
      $.delete(w),
      O.delete(w),
      A.delete(w),
      ee.delete(w),
      f.fetchers.delete(w);
  }
  function Yp(w) {
    if (s.v7_fetcherPersist) {
      let E = (q.get(w) || 0) - 1;
      E <= 0 ? (q.delete(w), ee.add(w)) : q.set(w, E);
    } else Ro(w);
    ve({ fetchers: new Map(f.fetchers) });
  }
  function Ut(w) {
    let E = ce.get(w);
    W(E, 'Expected fetch controller: ' + w), E.abort(), ce.delete(w);
  }
  function qa(w) {
    for (let E of w) {
      let k = Xa(E),
        D = Vt(k.data);
      f.fetchers.set(E, D);
    }
  }
  function Za() {
    let w = [],
      E = !1;
    for (let k of A) {
      let D = f.fetchers.get(k);
      W(D, 'Expected fetcher: ' + k),
        D.state === 'loading' && (A.delete(k), w.push(k), (E = !0));
    }
    return qa(w), E;
  }
  function ba(w) {
    let E = [];
    for (let [k, D] of O)
      if (D < w) {
        let z = f.fetchers.get(k);
        W(z, 'Expected fetcher: ' + k),
          z.state === 'loading' && (Ut(k), O.delete(k), E.push(k));
      }
    return qa(E), E.length > 0;
  }
  function Xp(w, E) {
    let k = f.blockers.get(w) || Lr;
    return Me.get(w) !== E && Me.set(w, E), k;
  }
  function es(w) {
    f.blockers.delete(w), Me.delete(w);
  }
  function Po(w, E) {
    let k = f.blockers.get(w) || Lr;
    W(
      (k.state === 'unblocked' && E.state === 'blocked') ||
        (k.state === 'blocked' && E.state === 'blocked') ||
        (k.state === 'blocked' && E.state === 'proceeding') ||
        (k.state === 'blocked' && E.state === 'unblocked') ||
        (k.state === 'proceeding' && E.state === 'unblocked'),
      'Invalid blocker state transition: ' + k.state + ' -> ' + E.state
    );
    let D = new Map(f.blockers);
    D.set(w, E), ve({ blockers: D });
  }
  function ts(w) {
    let { currentLocation: E, nextLocation: k, historyAction: D } = w;
    if (Me.size === 0) return;
    Me.size > 1 && Tn(!1, 'A router only supports one blocker at a time');
    let z = Array.from(Me.entries()),
      [U, V] = z[z.length - 1],
      I = f.blockers.get(U);
    if (
      !(I && I.state === 'proceeding') &&
      V({ currentLocation: E, nextLocation: k, historyAction: D })
    )
      return U;
  }
  function oi(w) {
    let E = [];
    return (
      Xe.forEach((k, D) => {
        (!w || w(D)) && (k.cancel(), E.push(D), Xe.delete(D));
      }),
      E
    );
  }
  function Gp(w, E, k) {
    if (((m = w), (y = E), (S = k || null), !g && f.navigation === Fi)) {
      g = !0;
      let D = rs(f.location, f.matches);
      D != null && ve({ restoreScrollPosition: D });
    }
    return () => {
      (m = null), (y = null), (S = null);
    };
  }
  function ns(w, E) {
    return (
      (S &&
        S(
          w,
          E.map((D) => My(D, f.loaderData))
        )) ||
      w.key
    );
  }
  function qp(w, E) {
    if (m && y) {
      let k = ns(w, E);
      m[k] = y();
    }
  }
  function rs(w, E) {
    if (m) {
      let k = ns(w, E),
        D = m[k];
      if (typeof D == 'number') return D;
    }
    return null;
  }
  function Zp(w) {
    (l = {}), (u = zu(w, o, void 0, l));
  }
  return (
    (v = {
      get basename() {
        return a;
      },
      get state() {
        return f;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: xt,
      subscribe: $p,
      enableScrollRestoration: Gp,
      navigate: Ya,
      fetch: Kp,
      revalidate: Hp,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: Xa,
      deleteFetcher: Yp,
      dispose: Mn,
      getBlocker: Xp,
      deleteBlocker: es,
      _internalFetchControllers: ce,
      _internalActiveDeferreds: Xe,
      _internalSetRoutes: Zp,
    }),
    v
  );
}
function uv(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Fu(e, t, n, r, o, l, i) {
  let u, a;
  if (l != null && i !== 'path') {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === l)) {
        a = c;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = Ua(
    o || '.',
    Yl(u).map((c) => c.pathnameBase),
    hr(e.pathname, n) || e.pathname,
    i === 'path'
  );
  return (
    o == null && ((s.search = e.search), (s.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      a &&
      a.route.index &&
      !Ba(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (s.pathname = s.pathname === '/' ? n : Tt([n, s.pathname])),
    Ln(s)
  );
}
function vc(e, t, n, r) {
  if (!r || !uv(r)) return { path: n };
  if (r.formMethod && !hv(r.formMethod))
    return { path: n, error: Ge(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: Ge(400, { type: 'invalid-body' }) }),
    l = r.formMethod || 'get',
    i = e ? l.toUpperCase() : l.toLowerCase(),
    u = cp(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!at(i)) return o();
      let m =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, y) => {
              let [g, P] = y;
              return (
                '' +
                S +
                g +
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
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!at(i)) return o();
      try {
        let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  W(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let a, s;
  if (r.formData) (a = Au(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = Au(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Ec(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Ec(a));
    } catch {
      return o();
    }
  let c = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (at(c.formMethod)) return { path: n, submission: c };
  let h = Ft(n);
  return (
    t && h.search && Ba(h.search) && a.append('index', ''),
    (h.search = '?' + a),
    { path: Ln(h), submission: c }
  );
}
function av(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function gc(e, t, n, r, o, l, i, u, a, s, c, h, m, S) {
  let y = S ? Object.values(S)[0] : m ? Object.values(m)[0] : void 0,
    g = e.createURL(t.location),
    P = e.createURL(o),
    p = S ? Object.keys(S)[0] : void 0,
    v = av(n, p).filter((C, T) => {
      if (C.route.lazy) return !0;
      if (C.route.loader == null) return !1;
      if (sv(t.loaderData, t.matches[T], C) || i.some((H) => H === C.route.id))
        return !0;
      let R = t.matches[T],
        L = C;
      return wc(
        C,
        de(
          {
            currentUrl: g,
            currentParams: R.params,
            nextUrl: P,
            nextParams: L.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              l ||
              g.pathname + g.search === P.pathname + P.search ||
              g.search !== P.search ||
              sp(R, L),
          }
        )
      );
    }),
    f = [];
  return (
    a.forEach((C, T) => {
      if (!n.some((le) => le.route.id === C.routeId)) return;
      let R = Jn(c, C.path, h);
      if (!R) {
        f.push({
          key: T,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let L = t.fetchers.get(T),
        H = Uu(R, C.path),
        F = !1;
      s.has(T)
        ? (F = !1)
        : u.includes(T)
        ? (F = !0)
        : L && L.state !== 'idle' && L.data === void 0
        ? (F = l)
        : (F = wc(
            H,
            de(
              {
                currentUrl: g,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: P,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: l }
            )
          )),
        F &&
          f.push({
            key: T,
            routeId: C.routeId,
            path: C.path,
            matches: R,
            match: H,
            controller: new AbortController(),
          });
    }),
    [v, f]
  );
}
function sv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function sp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function wc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Sc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  W(o, 'No route found in manifest');
  let l = {};
  for (let i in r) {
    let a = o[i] !== void 0 && i !== 'hasErrorBoundary';
    Tn(
      !a,
      'Route "' +
        o.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !a && !Oy.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, de({}, t(o), { lazy: void 0 }));
}
async function Or(e, t, n, r, o, l, i, u) {
  u === void 0 && (u = {});
  let a,
    s,
    c,
    h = (y) => {
      let g,
        P = new Promise((p, d) => (g = d));
      return (
        (c = () => g()),
        t.signal.addEventListener('abort', c),
        Promise.race([
          y({ request: t, params: n.params, context: u.requestContext }),
          P,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let g,
          P = await Promise.all([
            h(y).catch((p) => {
              g = p;
            }),
            Sc(n.route, l, o),
          ]);
        if (g) throw g;
        s = P[0];
      } else if ((await Sc(n.route, l, o), (y = n.route[e]), y)) s = await h(y);
      else if (e === 'action') {
        let g = new URL(t.url),
          P = g.pathname + g.search;
        throw Ge(405, { method: t.method, pathname: P, routeId: n.route.id });
      } else return { type: me.data, data: void 0 };
    else if (y) s = await h(y);
    else {
      let g = new URL(t.url),
        P = g.pathname + g.search;
      throw Ge(404, { pathname: P });
    }
    W(
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
  } catch (y) {
    (a = me.error), (s = y);
  } finally {
    c && t.signal.removeEventListener('abort', c);
  }
  if (pv(s)) {
    let y = s.status;
    if (nv.has(y)) {
      let p = s.headers.get('Location');
      if (
        (W(
          p,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !up.test(p))
      )
        p = Fu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, p);
      else if (!u.isStaticRequest) {
        let d = new URL(t.url),
          v = p.startsWith('//') ? new URL(d.protocol + p) : new URL(p),
          f = hr(v.pathname, i) != null;
        v.origin === d.origin && f && (p = v.pathname + v.search + v.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set('Location', p), s);
      return {
        type: me.redirect,
        status: y,
        location: p,
        revalidate: s.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: s.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === me.error ? me.error : me.data, response: s };
    let g,
      P = s.headers.get('Content-Type');
    return (
      P && /\bapplication\/json\b/.test(P)
        ? (g = await s.json())
        : (g = await s.text()),
      a === me.error
        ? { type: a, error: new Ia(y, s.statusText, g), headers: s.headers }
        : { type: me.data, data: g, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === me.error) return { type: a, error: s };
  if (dv(s)) {
    var m, S;
    return {
      type: me.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((S = s.init) == null ? void 0 : S.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: me.data, data: s };
}
function Dr(e, t, n, r) {
  let o = e.createURL(cp(t)).toString(),
    l = { signal: n };
  if (r && at(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (l.method = i.toUpperCase()),
      u === 'application/json'
        ? ((l.headers = new Headers({ 'Content-Type': u })),
          (l.body = JSON.stringify(r.json)))
        : u === 'text/plain'
        ? (l.body = r.text)
        : u === 'application/x-www-form-urlencoded' && r.formData
        ? (l.body = Au(r.formData))
        : (l.body = r.formData);
  }
  return new Request(o, l);
}
function Au(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Ec(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function cv(e, t, n, r, o) {
  let l = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((c, h) => {
      let m = t[h].route.id;
      if (
        (W(!er(c), 'Cannot handle redirect results in processLoaderData'),
        Xr(c))
      ) {
        let S = Yr(e, m),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[S.route.id] == null && (i[S.route.id] = y),
          (l[m] = void 0),
          a || ((a = !0), (u = lp(c.error) ? c.error.status : 500)),
          c.headers && (s[m] = c.headers);
      } else
        En(c)
          ? (o.set(m, c.deferredData), (l[m] = c.deferredData.data))
          : (l[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (u = c.statusCode),
          c.headers && (s[m] = c.headers);
    }),
    r && ((i = r), (l[Object.keys(r)[0]] = void 0)),
    { loaderData: l, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function xc(e, t, n, r, o, l, i, u) {
  let { loaderData: a, errors: s } = cv(t, n, r, o, u);
  for (let c = 0; c < l.length; c++) {
    let { key: h, match: m, controller: S } = l[c];
    W(
      i !== void 0 && i[c] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let y = i[c];
    if (!(S && S.signal.aborted))
      if (Xr(y)) {
        let g = Yr(e.matches, m == null ? void 0 : m.route.id);
        (s && s[g.route.id]) || (s = de({}, s, { [g.route.id]: y.error })),
          e.fetchers.delete(h);
      } else if (er(y)) W(!1, 'Unhandled fetcher revalidation redirect');
      else if (En(y)) W(!1, 'Unhandled fetcher deferred data');
      else {
        let g = Vt(y.data);
        e.fetchers.set(h, g);
      }
  }
  return { loaderData: a, errors: s };
}
function kc(e, t, n, r) {
  let o = de({}, t);
  for (let l of n) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (o[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (o[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return o;
}
function Yr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Cc(e) {
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
function Ge(e, t) {
  let { pathname: n, routeId: r, method: o, type: l } = t === void 0 ? {} : t,
    i = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        o && n && r
          ? (u =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : l === 'defer-action'
          ? (u = 'defer() is not supported in actions')
          : l === 'invalid-body' && (u = 'Unable to encode submission body'))
      : e === 403
      ? ((i = 'Forbidden'),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = 'Method Not Allowed'),
        o && n && r
          ? (u =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o && (u = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Ia(e || 500, i, new Error(u), !0)
  );
}
function Rc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (er(n)) return { result: n, idx: t };
  }
}
function cp(e) {
  let t = typeof e == 'string' ? Ft(e) : e;
  return Ln(de({}, t, { hash: '' }));
}
function fv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function En(e) {
  return e.type === me.deferred;
}
function Xr(e) {
  return e.type === me.error;
}
function er(e) {
  return (e && e.type) === me.redirect;
}
function dv(e) {
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
function pv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function hv(e) {
  return tv.has(e.toLowerCase());
}
function at(e) {
  return by.has(e.toLowerCase());
}
async function Pc(e, t, n, r, o, l) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((h) => h.route.id === a.route.id),
      c = s != null && !sp(s, a) && (l && l[a.route.id]) !== void 0;
    if (En(u) && (o || c)) {
      let h = r[i];
      W(h, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await fp(u, h, o).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function fp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: me.error, error: o };
      }
    return { type: me.data, data: e.deferredData.data };
  }
}
function Ba(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Uu(e, t) {
  let n = typeof t == 'string' ? Ft(t).search : t.search;
  if (e[e.length - 1].route.index && Ba(n || '')) return e[e.length - 1];
  let r = Yl(e);
  return r[r.length - 1];
}
function _c(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Ai(e, t) {
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
function mv(e, t) {
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
function Mr(e, t) {
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
function yv(e, t) {
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
function Vt(e) {
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
function vv(e, t) {
  try {
    let n = e.sessionStorage.getItem(ap);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, l] of Object.entries(r || {}))
        l && Array.isArray(l) && t.set(o, new Set(l || []));
    }
  } catch {}
}
function gv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(ap, JSON.stringify(n));
    } catch (r) {
      Tn(
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
 */ function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ll.apply(this, arguments)
  );
}
const Xl = N.createContext(null),
  dp = N.createContext(null),
  mr = N.createContext(null),
  Gl = N.createContext(null),
  cn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  pp = N.createContext(null);
function wv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  xo() || W(!1);
  let { basename: r, navigator: o } = N.useContext(mr),
    { hash: l, pathname: i, search: u } = mp(e, { relative: n }),
    a = i;
  return (
    r !== '/' && (a = i === '/' ? r : Tt([r, i])),
    o.createHref({ pathname: a, search: u, hash: l })
  );
}
function xo() {
  return N.useContext(Gl) != null;
}
function ql() {
  return xo() || W(!1), N.useContext(Gl).location;
}
function hp(e) {
  N.useContext(mr).static || N.useLayoutEffect(e);
}
function Sv() {
  let { isDataRoute: e } = N.useContext(cn);
  return e ? jv() : Ev();
}
function Ev() {
  xo() || W(!1);
  let e = N.useContext(Xl),
    { basename: t, navigator: n } = N.useContext(mr),
    { matches: r } = N.useContext(cn),
    { pathname: o } = ql(),
    l = JSON.stringify(Yl(r).map((a) => a.pathnameBase)),
    i = N.useRef(!1);
  return (
    hp(() => {
      i.current = !0;
    }),
    N.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let c = Ua(a, JSON.parse(l), o, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Tt([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, l, o, e]
    )
  );
}
const xv = N.createContext(null);
function kv(e) {
  let t = N.useContext(cn).outlet;
  return t && N.createElement(xv.Provider, { value: e }, t);
}
function mp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = N.useContext(cn),
    { pathname: o } = ql(),
    l = JSON.stringify(Yl(r).map((i) => i.pathnameBase));
  return N.useMemo(() => Ua(e, JSON.parse(l), o, n === 'path'), [e, l, o, n]);
}
function Cv(e, t, n) {
  xo() || W(!1);
  let { navigator: r } = N.useContext(mr),
    { matches: o } = N.useContext(cn),
    l = o[o.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : '/';
  l && l.route;
  let a = ql(),
    s;
  if (t) {
    var c;
    let g = typeof t == 'string' ? Ft(t) : t;
    u === '/' || ((c = g.pathname) != null && c.startsWith(u)) || W(!1),
      (s = g);
  } else s = a;
  let h = s.pathname || '/',
    m = u === '/' ? h : h.slice(u.length) || '/',
    S = Jn(e, { pathname: m }),
    y = Tv(
      S &&
        S.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: Tt([
              u,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? u
                : Tt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && y
    ? N.createElement(
        Gl.Provider,
        {
          value: {
            location: Ll(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              s
            ),
            navigationType: he.Pop,
          },
        },
        y
      )
    : y;
}
function Rv() {
  let e = Mv(),
    t = lp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    l = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement('h2', null, 'Unexpected Application Error!'),
    N.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? N.createElement('pre', { style: o }, n) : null,
    l
  );
}
const Pv = N.createElement(Rv, null);
class _v extends N.Component {
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
      ? N.createElement(
          cn.Provider,
          { value: this.props.routeContext },
          N.createElement(pp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Nv(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = N.useContext(Xl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(cn.Provider, { value: t }, r)
  );
}
function Tv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = l.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    u >= 0 || W(!1), (l = l.slice(0, Math.min(l.length, u + 1)));
  }
  return l.reduceRight((u, a, s) => {
    let c = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      h = null;
    n && (h = a.route.errorElement || Pv);
    let m = t.concat(l.slice(0, s + 1)),
      S = () => {
        let y;
        return (
          c
            ? (y = h)
            : a.route.Component
            ? (y = N.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = u),
          N.createElement(Nv, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? N.createElement(_v, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: c,
          children: S(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var yp = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(yp || {}),
  sr = (function (e) {
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
  })(sr || {});
function Lv(e) {
  let t = N.useContext(Xl);
  return t || W(!1), t;
}
function vp(e) {
  let t = N.useContext(dp);
  return t || W(!1), t;
}
function Ov(e) {
  let t = N.useContext(cn);
  return t || W(!1), t;
}
function $a(e) {
  let t = Ov(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Dv() {
  let e = vp(sr.UseLoaderData),
    t = $a(sr.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      'You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')'
    );
    return;
  }
  return e.loaderData[t];
}
function Mv() {
  var e;
  let t = N.useContext(pp),
    n = vp(sr.UseRouteError),
    r = $a(sr.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function jv() {
  let { router: e } = Lv(yp.UseNavigateStable),
    t = $a(sr.UseNavigateStable),
    n = N.useRef(!1);
  return (
    hp(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Ll({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
function gp(e) {
  return kv(e.context);
}
function zv(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = he.Pop,
    navigator: l,
    static: i = !1,
  } = e;
  xo() && W(!1);
  let u = t.replace(/^\/*/, '/'),
    a = N.useMemo(() => ({ basename: u, navigator: l, static: i }), [u, l, i]);
  typeof r == 'string' && (r = Ft(r));
  let {
      pathname: s = '/',
      search: c = '',
      hash: h = '',
      state: m = null,
      key: S = 'default',
    } = r,
    y = N.useMemo(() => {
      let g = hr(s, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: h, state: m, key: S },
            navigationType: o,
          };
    }, [u, s, c, h, m, S, o]);
  return y == null
    ? null
    : N.createElement(
        mr.Provider,
        { value: a },
        N.createElement(Gl.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function Fv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
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
 */ function mo() {
  return (
    (mo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mo.apply(this, arguments)
  );
}
function Av(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Uv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Iv(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Uv(e);
}
const Bv = [
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
function $v(e, t) {
  return iv({
    basename: t == null ? void 0 : t.basename,
    future: mo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Ny({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Hv(),
    routes: e,
    mapRouteProperties: Fv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Hv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = mo({}, t, { errors: Vv(t.errors) })), t;
}
function Vv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse')
      n[r] = new Ia(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == 'function')
          try {
            let i = new l(o.message);
            (i.stack = ''), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(o.message);
        (l.stack = ''), (n[r] = l);
      }
    } else n[r] = o;
  return n;
}
const Wv = N.createContext({ isTransitioning: !1 }),
  Kv = N.createContext(new Map()),
  Qv = 'startTransition',
  Nc = vh[Qv];
function Jv(e) {
  Nc ? Nc(e) : e();
}
class Yv {
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
function Xv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, l] = N.useState(n.state),
    [i, u] = N.useState(),
    [a, s] = N.useState({ isTransitioning: !1 }),
    [c, h] = N.useState(),
    [m, S] = N.useState(),
    [y, g] = N.useState(),
    P = N.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    d = N.useCallback(
      (R) => {
        p ? Jv(R) : R();
      },
      [p]
    ),
    v = N.useCallback(
      (R, L) => {
        let { deletedFetchers: H, unstable_viewTransitionOpts: F } = L;
        H.forEach((le) => P.current.delete(le)),
          R.fetchers.forEach((le, De) => {
            le.data !== void 0 && P.current.set(De, le.data);
          }),
          !F ||
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function'
            ? d(() => l(R))
            : m && c
            ? (c.resolve(),
              m.skipTransition(),
              g({
                state: R,
                currentLocation: F.currentLocation,
                nextLocation: F.nextLocation,
              }))
            : (u(R),
              s({
                isTransitioning: !0,
                currentLocation: F.currentLocation,
                nextLocation: F.nextLocation,
              }));
      },
      [n.window, m, c, P, d]
    );
  N.useLayoutEffect(() => n.subscribe(v), [n, v]),
    N.useEffect(() => {
      a.isTransitioning && h(new Yv());
    }, [a.isTransitioning]),
    N.useEffect(() => {
      if (c && i && n.window) {
        let R = i,
          L = c.promise,
          H = n.window.document.startViewTransition(async () => {
            d(() => l(R)), await L;
          });
        H.finished.finally(() => {
          h(void 0), S(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          S(H);
      }
    }, [d, i, c, n.window]),
    N.useEffect(() => {
      c && i && o.location.key === i.location.key && c.resolve();
    }, [c, m, o.location, i]),
    N.useEffect(() => {
      !a.isTransitioning &&
        y &&
        (u(y.state),
        s({
          isTransitioning: !0,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        g(void 0));
    }, [a.isTransitioning, y]);
  let f = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, L, H) =>
          n.navigate(R, {
            state: L,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
        replace: (R, L, H) =>
          n.navigate(R, {
            replace: !0,
            state: L,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || '/',
    T = N.useMemo(
      () => ({ router: n, navigator: f, static: !1, basename: C }),
      [n, f, C]
    );
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      Xl.Provider,
      { value: T },
      N.createElement(
        dp.Provider,
        { value: o },
        N.createElement(
          Kv.Provider,
          { value: P.current },
          N.createElement(
            Wv.Provider,
            { value: a },
            N.createElement(
              zv,
              {
                basename: C,
                location: o.location,
                navigationType: o.historyAction,
                navigator: f,
              },
              o.initialized
                ? N.createElement(Gv, { routes: n.routes, state: o })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Gv(e) {
  let { routes: t, state: n } = e;
  return Cv(t, void 0, n);
}
const qv =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Zv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  tr = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: h,
      } = t,
      m = Av(t, Bv),
      { basename: S } = N.useContext(mr),
      y,
      g = !1;
    if (typeof s == 'string' && Zv.test(s) && ((y = s), qv))
      try {
        let v = new URL(window.location.href),
          f = s.startsWith('//') ? new URL(v.protocol + s) : new URL(s),
          C = hr(f.pathname, S);
        f.origin === v.origin && C != null
          ? (s = C + f.search + f.hash)
          : (g = !0);
      } catch {}
    let P = wv(s, { relative: o }),
      p = bv(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: h,
      });
    function d(v) {
      r && r(v), v.defaultPrevented || p(v);
    }
    return N.createElement(
      'a',
      mo({}, m, { href: y || P, onClick: g || l ? r : d, ref: n, target: a })
    );
  });
var Tc;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Tc || (Tc = {}));
var Lc;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Lc || (Lc = {}));
function bv(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = Sv(),
    s = ql(),
    c = mp(e, { relative: i });
  return N.useCallback(
    (h) => {
      if (Iv(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : Ln(s) === Ln(c);
        a(e, {
          replace: m,
          state: o,
          preventScrollReset: l,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, c, r, o, n, e, l, i, u]
  );
}
const eg =
  '' + new URL('404-page-not-found-5a2243bd.png', import.meta.url).href;
const wp = () =>
  B.jsxs('div', {
    className: 'header',
    children: [
      B.jsx(tr, {
        className: 'nav-item',
        to: '/RSSchool_Stage3/dist/',
        children: 'Home',
      }),
      B.jsx(tr, {
        className: 'nav-item',
        to: '/RSSchool_Stage3/dist/posts',
        children: 'Posts',
      }),
      B.jsx(tr, {
        className: 'nav-item',
        to: '/RSSchool_Stage3/dist/add',
        children: 'Add Post',
      }),
    ],
  });
function tg() {
  return B.jsxs('div', {
    className: 'error-page',
    children: [
      B.jsx(wp, {}),
      B.jsxs('div', {
        className: 'error-page-main',
        children: [
          B.jsx('img', { src: eg, alt: 'img', className: 'error-page-img' }),
          B.jsx(tr, {
            className: 'error-back-btn',
            to: '/RSSchool_Stage3/dist/',
            children: 'Back',
          }),
        ],
      }),
    ],
  });
}
const ng = () =>
  B.jsxs('div', {
    children: [
      B.jsx(wp, {}),
      B.jsx('div', { className: 'container', children: B.jsx(gp, {}) }),
    ],
  });
function Sp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: rg } = Object.prototype,
  { getPrototypeOf: Ha } = Object,
  Zl = ((e) => (t) => {
    const n = rg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  St = (e) => ((e = e.toLowerCase()), (t) => Zl(t) === e),
  bl = (e) => (t) => typeof t === e,
  { isArray: yr } = Array,
  yo = bl('undefined');
function og(e) {
  return (
    e !== null &&
    !yo(e) &&
    e.constructor !== null &&
    !yo(e.constructor) &&
    tt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ep = St('ArrayBuffer');
function lg(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ep(e.buffer)),
    t
  );
}
const ig = bl('string'),
  tt = bl('function'),
  xp = bl('number'),
  ei = (e) => e !== null && typeof e == 'object',
  ug = (e) => e === !0 || e === !1,
  rl = (e) => {
    if (Zl(e) !== 'object') return !1;
    const t = Ha(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ag = St('Date'),
  sg = St('File'),
  cg = St('Blob'),
  fg = St('FileList'),
  dg = (e) => ei(e) && tt(e.pipe),
  pg = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (tt(e.append) &&
          ((t = Zl(e)) === 'formdata' ||
            (t === 'object' &&
              tt(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  hg = St('URLSearchParams'),
  mg = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ko(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), yr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length;
    let u;
    for (r = 0; r < i; r++) (u = l[r]), t.call(null, e[u], u, e);
  }
}
function kp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Cp = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  Rp = (e) => !yo(e) && e !== Cp;
function Iu() {
  const { caseless: e } = (Rp(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && kp(t, o)) || o;
      rl(t[l]) && rl(r)
        ? (t[l] = Iu(t[l], r))
        : rl(r)
        ? (t[l] = Iu({}, r))
        : yr(r)
        ? (t[l] = r.slice())
        : (t[l] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ko(arguments[r], n);
  return t;
}
const yg = (e, t, n, { allOwnKeys: r } = {}) => (
    ko(
      t,
      (o, l) => {
        n && tt(o) ? (e[l] = Sp(o, n)) : (e[l] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  vg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  gg = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  wg = (e, t, n, r) => {
    let o, l, i;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (i = o[l]), (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0));
      e = n !== !1 && Ha(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Sg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Eg = (e) => {
    if (!e) return null;
    if (yr(e)) return e;
    let t = e.length;
    if (!xp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  xg = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Ha(Uint8Array)),
  kg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  Cg = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Rg = St('HTMLFormElement'),
  Pg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Oc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  _g = St('RegExp'),
  Pp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ko(n, (o, l) => {
      let i;
      (i = t(o, l, e)) !== !1 && (r[l] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  Ng = (e) => {
    Pp(e, (t, n) => {
      if (tt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (tt(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Tg = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return yr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Lg = () => {},
  Og = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ui = 'abcdefghijklmnopqrstuvwxyz',
  Dc = '0123456789',
  _p = { DIGIT: Dc, ALPHA: Ui, ALPHA_DIGIT: Ui + Ui.toUpperCase() + Dc },
  Dg = (e = 16, t = _p.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Mg(e) {
  return !!(
    e &&
    tt(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const jg = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ei(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const l = yr(r) ? [] : {};
            return (
              ko(r, (i, u) => {
                const a = n(i, o + 1);
                !yo(a) && (l[u] = a);
              }),
              (t[o] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  zg = St('AsyncFunction'),
  Fg = (e) => e && (ei(e) || tt(e)) && tt(e.then) && tt(e.catch),
  x = {
    isArray: yr,
    isArrayBuffer: Ep,
    isBuffer: og,
    isFormData: pg,
    isArrayBufferView: lg,
    isString: ig,
    isNumber: xp,
    isBoolean: ug,
    isObject: ei,
    isPlainObject: rl,
    isUndefined: yo,
    isDate: ag,
    isFile: sg,
    isBlob: cg,
    isRegExp: _g,
    isFunction: tt,
    isStream: dg,
    isURLSearchParams: hg,
    isTypedArray: xg,
    isFileList: fg,
    forEach: ko,
    merge: Iu,
    extend: yg,
    trim: mg,
    stripBOM: vg,
    inherits: gg,
    toFlatObject: wg,
    kindOf: Zl,
    kindOfTest: St,
    endsWith: Sg,
    toArray: Eg,
    forEachEntry: kg,
    matchAll: Cg,
    isHTMLForm: Rg,
    hasOwnProperty: Oc,
    hasOwnProp: Oc,
    reduceDescriptors: Pp,
    freezeMethods: Ng,
    toObjectSet: Tg,
    toCamelCase: Pg,
    noop: Lg,
    toFiniteNumber: Og,
    findKey: kp,
    global: Cp,
    isContextDefined: Rp,
    ALPHABET: _p,
    generateString: Dg,
    isSpecCompliantForm: Mg,
    toJSONObject: jg,
    isAsyncFn: zg,
    isThenable: Fg,
  };
function J(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
x.inherits(J, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Np = J.prototype,
  Tp = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Tp[e] = { value: e };
});
Object.defineProperties(J, Tp);
Object.defineProperty(Np, 'isAxiosError', { value: !0 });
J.from = (e, t, n, r, o, l) => {
  const i = Object.create(Np);
  return (
    x.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (u) => u !== 'isAxiosError'
    ),
    J.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    l && Object.assign(i, l),
    i
  );
};
const Ag = null;
function Bu(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function Lp(e) {
  return x.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Mc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = Lp(o)), !n && l ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function Ug(e) {
  return x.isArray(e) && !e.some(Bu);
}
const Ig = x.toFlatObject(x, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ti(e, t, n) {
  if (!x.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, P) {
        return !x.isUndefined(P[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    l = n.dots,
    i = n.indexes,
    a = (n.Blob || (typeof Blob < 'u' && Blob)) && x.isSpecCompliantForm(t);
  if (!x.isFunction(o)) throw new TypeError('visitor must be a function');
  function s(y) {
    if (y === null) return '';
    if (x.isDate(y)) return y.toISOString();
    if (!a && x.isBlob(y))
      throw new J('Blob is not supported. Use a Buffer instead.');
    return x.isArrayBuffer(y) || x.isTypedArray(y)
      ? a && typeof Blob == 'function'
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, g, P) {
    let p = y;
    if (y && !P && typeof y == 'object') {
      if (x.endsWith(g, '{}'))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (x.isArray(y) && Ug(y)) ||
        ((x.isFileList(y) || x.endsWith(g, '[]')) && (p = x.toArray(y)))
      )
        return (
          (g = Lp(g)),
          p.forEach(function (v, f) {
            !(x.isUndefined(v) || v === null) &&
              t.append(
                i === !0 ? Mc([g], f, l) : i === null ? g : g + '[]',
                s(v)
              );
          }),
          !1
        );
    }
    return Bu(y) ? !0 : (t.append(Mc(P, g, l), s(y)), !1);
  }
  const h = [],
    m = Object.assign(Ig, {
      defaultVisitor: c,
      convertValue: s,
      isVisitable: Bu,
    });
  function S(y, g) {
    if (!x.isUndefined(y)) {
      if (h.indexOf(y) !== -1)
        throw Error('Circular reference detected in ' + g.join('.'));
      h.push(y),
        x.forEach(y, function (p, d) {
          (!(x.isUndefined(p) || p === null) &&
            o.call(t, p, x.isString(d) ? d.trim() : d, g, m)) === !0 &&
            S(p, g ? g.concat(d) : [d]);
        }),
        h.pop();
    }
  }
  if (!x.isObject(e)) throw new TypeError('data must be an object');
  return S(e), t;
}
function jc(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Va(e, t) {
  (this._pairs = []), e && ti(e, this, t);
}
const Op = Va.prototype;
Op.append = function (t, n) {
  this._pairs.push([t, n]);
};
Op.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, jc);
      }
    : jc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function Bg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Dp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Bg,
    o = n && n.serialize;
  let l;
  if (
    (o
      ? (l = o(t, n))
      : (l = x.isURLSearchParams(t) ? t.toString() : new Va(t, n).toString(r)),
    l)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + l);
  }
  return e;
}
class $g {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    x.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const zc = $g,
  Mp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Hg = typeof URLSearchParams < 'u' ? URLSearchParams : Va,
  Vg = typeof FormData < 'u' ? FormData : null,
  Wg = typeof Blob < 'u' ? Blob : null,
  Kg = (() => {
    let e;
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  Qg = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  vt = {
    isBrowser: !0,
    classes: { URLSearchParams: Hg, FormData: Vg, Blob: Wg },
    isStandardBrowserEnv: Kg,
    isStandardBrowserWebWorkerEnv: Qg,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function Jg(e, t) {
  return ti(
    e,
    new vt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return vt.isNode && x.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Yg(e) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Xg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function jp(e) {
  function t(n, r, o, l) {
    let i = n[l++];
    const u = Number.isFinite(+i),
      a = l >= n.length;
    return (
      (i = !i && x.isArray(o) ? o.length : i),
      a
        ? (x.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !u)
        : ((!o[i] || !x.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], l) && x.isArray(o[i]) && (o[i] = Xg(o[i])),
          !u)
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (r, o) => {
        t(Yg(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function Gg(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Wa = {
  transitional: Mp,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        l = x.isObject(t);
      if ((l && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
        return o && o ? JSON.stringify(jp(t)) : t;
      if (
        x.isArrayBuffer(t) ||
        x.isBuffer(t) ||
        x.isStream(t) ||
        x.isFile(t) ||
        x.isBlob(t)
      )
        return t;
      if (x.isArrayBufferView(t)) return t.buffer;
      if (x.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let u;
      if (l) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Jg(t, this.formSerializer).toString();
        if ((u = x.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const a = this.env && this.env.FormData;
          return ti(
            u ? { 'files[]': t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return l || o ? (n.setContentType('application/json', !1), Gg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Wa.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && x.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (i)
            throw u.name === 'SyntaxError'
              ? J.from(u, J.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vt.classes.FormData, Blob: vt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
x.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Wa.headers[e] = {};
});
const Ka = Wa,
  qg = x.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Zg = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(':')),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && qg[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Fc = Symbol('internals');
function jr(e) {
  return e && String(e).trim().toLowerCase();
}
function ol(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(ol) : String(e);
}
function bg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const e0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ii(e, t, n, r, o) {
  if (x.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!x.isString(t))) {
    if (x.isString(r)) return t.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(t);
  }
}
function t0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function n0(e, t) {
  const n = x.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, i) {
        return this[r].call(this, t, o, l, i);
      },
      configurable: !0,
    });
  });
}
class ni {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(u, a, s) {
      const c = jr(a);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = x.findKey(o, c);
      (!h || o[h] === void 0 || s === !0 || (s === void 0 && o[h] !== !1)) &&
        (o[h || a] = ol(u));
    }
    const i = (u, a) => x.forEach(u, (s, c) => l(s, c, a));
    return (
      x.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : x.isString(t) && (t = t.trim()) && !e0(t)
        ? i(Zg(t), n)
        : t != null && l(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = jr(t)), t)) {
      const r = x.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return bg(o);
        if (x.isFunction(n)) return n.call(this, o, r);
        if (x.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = jr(t)), t)) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ii(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(i) {
      if (((i = jr(i)), i)) {
        const u = x.findKey(r, i);
        u && (!n || Ii(r, r[u], u, n)) && (delete r[u], (o = !0));
      }
    }
    return x.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || Ii(this, this[l], l, t, !0)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      x.forEach(this, (o, l) => {
        const i = x.findKey(r, l);
        if (i) {
          (n[i] = ol(o)), delete n[l];
          return;
        }
        const u = t ? t0(l) : String(l).trim();
        u !== l && delete n[l], (n[u] = ol(o)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      x.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && x.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Fc] = this[Fc] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(i) {
      const u = jr(i);
      r[u] || (n0(o, i), (r[u] = !0));
    }
    return x.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
ni.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
x.reduceDescriptors(ni.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
x.freezeMethods(ni);
const Lt = ni;
function Bi(e, t) {
  const n = this || Ka,
    r = t || n,
    o = Lt.from(r.headers);
  let l = r.data;
  return (
    x.forEach(e, function (u) {
      l = u.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function zp(e) {
  return !!(e && e.__CANCEL__);
}
function Co(e, t, n) {
  J.call(this, e ?? 'canceled', J.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
x.inherits(Co, J, { __CANCEL__: !0 });
function r0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new J(
          'Request failed with status code ' + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const o0 = vt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, l, i, u) {
          const a = [];
          a.push(n + '=' + encodeURIComponent(r)),
            x.isNumber(o) && a.push('expires=' + new Date(o).toGMTString()),
            x.isString(l) && a.push('path=' + l),
            x.isString(i) && a.push('domain=' + i),
            u === !0 && a.push('secure'),
            (document.cookie = a.join('; '));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function l0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function i0(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Fp(e, t) {
  return e && !l0(t) ? i0(e, t) : t;
}
const u0 = vt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(l) {
        let i = l;
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (i) {
          const u = x.isString(i) ? o(i) : i;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function a0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function s0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    l = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const s = Date.now(),
        c = r[l];
      i || (i = s), (n[o] = a), (r[o] = s);
      let h = l,
        m = 0;
      for (; h !== o; ) (m += n[h++]), (h = h % e);
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), s - i < t)) return;
      const S = c && s - c;
      return S ? Math.round((m * 1e3) / S) : void 0;
    }
  );
}
function Ac(e, t) {
  let n = 0;
  const r = s0(50, 250);
  return (o) => {
    const l = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      u = l - n,
      a = r(u),
      s = l <= i;
    n = l;
    const c = {
      loaded: l,
      total: i,
      progress: i ? l / i : void 0,
      bytes: u,
      rate: a || void 0,
      estimated: a && i && s ? (i - l) / a : void 0,
      event: o,
    };
    (c[t ? 'download' : 'upload'] = !0), e(c);
  };
}
const c0 = typeof XMLHttpRequest < 'u',
  f0 =
    c0 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const l = Lt.from(e.headers).normalize(),
          i = e.responseType;
        let u;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener('abort', u);
        }
        let s;
        x.isFormData(o) &&
          (vt.isStandardBrowserEnv || vt.isStandardBrowserWebWorkerEnv
            ? l.setContentType(!1)
            : l.getContentType(/^\s*multipart\/form-data/)
            ? x.isString((s = l.getContentType())) &&
              l.setContentType(s.replace(/^\s*(multipart\/form-data);+/, '$1'))
            : l.setContentType('multipart/form-data'));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || '',
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          l.set('Authorization', 'Basic ' + btoa(y + ':' + g));
        }
        const h = Fp(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Dp(h, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function m() {
          if (!c) return;
          const y = Lt.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders()
            ),
            P = {
              data:
                !i || i === 'text' || i === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          r0(
            function (d) {
              n(d), a();
            },
            function (d) {
              r(d), a();
            },
            P
          ),
            (c = null);
        }
        if (
          ('onloadend' in c
            ? (c.onloadend = m)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(m);
              }),
          (c.onabort = function () {
            c &&
              (r(new J('Request aborted', J.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new J('Network Error', J.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let g = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const P = e.transitional || Mp;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              r(
                new J(
                  g,
                  P.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          vt.isStandardBrowserEnv)
        ) {
          const y = u0(h) && e.xsrfCookieName && o0.read(e.xsrfCookieName);
          y && l.set(e.xsrfHeaderName, y);
        }
        o === void 0 && l.setContentType(null),
          'setRequestHeader' in c &&
            x.forEach(l.toJSON(), function (g, P) {
              c.setRequestHeader(P, g);
            }),
          x.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            c.addEventListener('progress', Ac(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', Ac(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (y) => {
              c &&
                (r(!y || y.type ? new Co(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)));
        const S = a0(h);
        if (S && vt.protocols.indexOf(S) === -1) {
          r(new J('Unsupported protocol ' + S + ':', J.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  $u = { http: Ag, xhr: f0 };
x.forEach($u, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Uc = (e) => `- ${e}`,
  d0 = (e) => x.isFunction(e) || e === null || e === !1,
  Ap = {
    getAdapter: (e) => {
      e = x.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let l = 0; l < t; l++) {
        n = e[l];
        let i;
        if (
          ((r = n),
          !d0(n) && ((r = $u[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new J(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || '#' + l] = r;
      }
      if (!r) {
        const l = Object.entries(o).map(
          ([u, a]) =>
            `adapter ${u} ` +
            (a === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let i = t
          ? l.length > 1
            ? `since :
` +
              l.map(Uc).join(`
`)
            : ' ' + Uc(l[0])
          : 'as no adapter specified';
        throw new J(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: $u,
  };
function $i(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Co(null, e);
}
function Ic(e) {
  return (
    $i(e),
    (e.headers = Lt.from(e.headers)),
    (e.data = Bi.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Ap.getAdapter(e.adapter || Ka.adapter)(e).then(
      function (r) {
        return (
          $i(e),
          (r.data = Bi.call(e, e.transformResponse, r)),
          (r.headers = Lt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          zp(r) ||
            ($i(e),
            r &&
              r.response &&
              ((r.response.data = Bi.call(e, e.transformResponse, r.response)),
              (r.response.headers = Lt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Bc = (e) => (e instanceof Lt ? e.toJSON() : e);
function cr(e, t) {
  t = t || {};
  const n = {};
  function r(s, c, h) {
    return x.isPlainObject(s) && x.isPlainObject(c)
      ? x.merge.call({ caseless: h }, s, c)
      : x.isPlainObject(c)
      ? x.merge({}, c)
      : x.isArray(c)
      ? c.slice()
      : c;
  }
  function o(s, c, h) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(s)) return r(void 0, s, h);
    } else return r(s, c, h);
  }
  function l(s, c) {
    if (!x.isUndefined(c)) return r(void 0, c);
  }
  function i(s, c) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(s)) return r(void 0, s);
    } else return r(void 0, c);
  }
  function u(s, c, h) {
    if (h in t) return r(s, c);
    if (h in e) return r(void 0, s);
  }
  const a = {
    url: l,
    method: l,
    data: l,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (s, c) => o(Bc(s), Bc(c), !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const h = a[c] || o,
        m = h(e[c], t[c], c);
      (x.isUndefined(m) && h !== u) || (n[c] = m);
    }),
    n
  );
}
const Up = '1.6.0',
  Qa = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Qa[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const $c = {};
Qa.transitional = function (t, n, r) {
  function o(l, i) {
    return (
      '[Axios v' +
      Up +
      "] Transitional option '" +
      l +
      "'" +
      i +
      (r ? '. ' + r : '')
    );
  }
  return (l, i, u) => {
    if (t === !1)
      throw new J(
        o(i, ' has been removed' + (n ? ' in ' + n : '')),
        J.ERR_DEPRECATED
      );
    return (
      n &&
        !$c[i] &&
        (($c[i] = !0),
        console.warn(
          o(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(l, i, u) : !0
    );
  };
};
function p0(e, t, n) {
  if (typeof e != 'object')
    throw new J('options must be an object', J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const l = r[o],
      i = t[l];
    if (i) {
      const u = e[l],
        a = u === void 0 || i(u, l, e);
      if (a !== !0)
        throw new J('option ' + l + ' must be ' + a, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J('Unknown option ' + l, J.ERR_BAD_OPTION);
  }
}
const Hu = { assertOptions: p0, validators: Qa },
  Ht = Hu.validators;
class Ol {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new zc(), response: new zc() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = cr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    r !== void 0 &&
      Hu.assertOptions(
        r,
        {
          silentJSONParsing: Ht.transitional(Ht.boolean),
          forcedJSONParsing: Ht.transitional(Ht.boolean),
          clarifyTimeoutError: Ht.transitional(Ht.boolean),
        },
        !1
      ),
      o != null &&
        (x.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Hu.assertOptions(
              o,
              { encode: Ht.function, serialize: Ht.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = l && x.merge(l.common, l[n.method]);
    l &&
      x.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (y) => {
          delete l[y];
        }
      ),
      (n.headers = Lt.concat(i, l));
    const u = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == 'function' && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), u.unshift(g.fulfilled, g.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function (g) {
      s.push(g.fulfilled, g.rejected);
    });
    let c,
      h = 0,
      m;
    if (!a) {
      const y = [Ic.bind(this), void 0];
      for (
        y.unshift.apply(y, u),
          y.push.apply(y, s),
          m = y.length,
          c = Promise.resolve(n);
        h < m;

      )
        c = c.then(y[h++], y[h++]);
      return c;
    }
    m = u.length;
    let S = n;
    for (h = 0; h < m; ) {
      const y = u[h++],
        g = u[h++];
      try {
        S = y(S);
      } catch (P) {
        g.call(this, P);
        break;
      }
    }
    try {
      c = Ic.call(this, S);
    } catch (y) {
      return Promise.reject(y);
    }
    for (h = 0, m = s.length; h < m; ) c = c.then(s[h++], s[h++]);
    return c;
  }
  getUri(t) {
    t = cr(this.defaults, t);
    const n = Fp(t.baseURL, t.url);
    return Dp(n, t.params, t.paramsSerializer);
  }
}
x.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Ol.prototype[t] = function (n, r) {
    return this.request(
      cr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
x.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (l, i, u) {
      return this.request(
        cr(u || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: l,
          data: i,
        })
      );
    };
  }
  (Ol.prototype[t] = n()), (Ol.prototype[t + 'Form'] = n(!0));
});
const ll = Ol;
class Ja {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let l;
        const i = new Promise((u) => {
          r.subscribe(u), (l = u);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(l);
          }),
          i
        );
      }),
      t(function (l, i, u) {
        r.reason || ((r.reason = new Co(l, i, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ja(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const h0 = Ja;
function m0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function y0(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const Vu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Vu).forEach(([e, t]) => {
  Vu[t] = e;
});
const v0 = Vu;
function Ip(e) {
  const t = new ll(e),
    n = Sp(ll.prototype.request, t);
  return (
    x.extend(n, ll.prototype, t, { allOwnKeys: !0 }),
    x.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Ip(cr(e, o));
    }),
    n
  );
}
const we = Ip(Ka);
we.Axios = ll;
we.CanceledError = Co;
we.CancelToken = h0;
we.isCancel = zp;
we.VERSION = Up;
we.toFormData = ti;
we.AxiosError = J;
we.Cancel = we.CanceledError;
we.all = function (t) {
  return Promise.all(t);
};
we.spread = m0;
we.isAxiosError = y0;
we.mergeConfig = cr;
we.AxiosHeaders = Lt;
we.formToJSON = (e) => jp(x.isHTMLForm(e) ? new FormData(e) : e);
we.getAdapter = Ap.getAdapter;
we.HttpStatusCode = v0;
we.default = we;
const Bp = we;
const g0 = ({ postsPerPage: e, totalPosts: t, paginate: n }) => {
  const r = [];
  for (let o = 1; o <= Math.ceil(t / e); o++) r.push(o);
  return B.jsx('ul', {
    className: 'pagination',
    children: r.map((o) =>
      B.jsx(
        'li',
        {
          className: 'page-number',
          children: B.jsx('button', {
            className: 'page-btn',
            onClick: () => n(o),
            children: o,
          }),
        },
        o
      )
    ),
  });
};
function w0({ posts: e, loading: t }) {
  return t
    ? B.jsx('h2', { children: 'Loading ...' })
    : B.jsx('div', {
        className: 'posts-list',
        children: e.map((n, r) =>
          B.jsxs(
            tr,
            {
              className: 'post-item',
              to: `${n.id}`,
              children: [
                B.jsxs('span', {
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
function S0({ handleSearch: e }) {
  const [t, n] = N.useState(''),
    r = (i) => {
      n(i.target.value);
    },
    o = (i) => {
      i.key === 'Enter' && (e(t), localStorage.setItem('searchInput', t));
    },
    l = (i) => {
      e(i), localStorage.setItem('searchInput', i);
    };
  return B.jsxs('div', {
    className: 'input_wrapper',
    children: [
      B.jsx('input', {
        placeholder: '...',
        value: t,
        onChange: r,
        onKeyPress: o,
      }),
      B.jsx('button', {
        className: 'search-button',
        onClick: () => {
          l(t);
        },
        children: 'Search',
      }),
    ],
  });
}
const E0 = () => {
  const [e, t] = N.useState([]),
    [n, r] = N.useState(!1),
    [o, l] = N.useState(1),
    [i] = N.useState(7),
    u = async (S) => {
      r(!0);
      const P = (
        await Bp.get('https://jsonplaceholder.typicode.com/posts')
      ).data.filter(
        (p) => p && p.title && p.title.toLowerCase().includes(S.toLowerCase())
      );
      t(P), r(!1);
    };
  N.useEffect(() => {
    const S = localStorage.getItem('searchInput');
    u(S || '');
  }, []);
  const a = o * i,
    s = a - i,
    c = e.slice(s, a),
    h = (S) => l(S),
    m = (S) => {
      u(S);
    };
  return B.jsxs('div', {
    className: 'posts-page',
    children: [
      B.jsxs('div', {
        className: 'posts-page-posts',
        children: [
          B.jsx(S0, { handleSearch: m }),
          B.jsx('h1', { className: 'posts-title', children: 'Posts page' }),
          B.jsx(w0, { posts: c, loading: n }),
          B.jsx(g0, { postsPerPage: i, totalPosts: e.length, paginate: h }),
        ],
      }),
      B.jsx('div', {
        className: 'posts-page-single-post',
        children: B.jsx(gp, {}),
      }),
    ],
  });
};
const x0 = async ({ params: e }) => {
    const { data: t } = await Bp.get(
      `https://jsonplaceholder.typicode.com/posts/${e.id}`
    );
    return t;
  },
  k0 = () => {
    const e = Dv();
    return B.jsxs('div', {
      className: 'single-post-page',
      children: [
        B.jsx('h1', { children: 'Single Post Page' }),
        B.jsx(tr, {
          className: 'single-post-back-btn',
          to: '/posts',
          children: 'Back',
        }),
        B.jsxs('div', {
          className: 'single-page-block',
          children: [
            B.jsxs('p', {
              children: [B.jsx('span', { children: 'Post ID:' }), e.id],
            }),
            B.jsxs('p', {
              children: [
                B.jsx('span', { children: 'Post Title:' }),
                ' ',
                e.title,
              ],
            }),
            B.jsxs('p', {
              children: [B.jsx('span', { children: 'Post Body:' }), e.body],
            }),
          ],
        }),
      ],
    });
  },
  C0 = $v([
    {
      path: '/RSSchool_Stage3/dist/',
      element: B.jsx(ng, {}),
      errorElement: B.jsx(tg, {}),
      children: [
        {
          element: B.jsx(E0, {}),
          path: '/RSSchool_Stage3/dist/posts',
          children: [{ element: B.jsx(k0, {}), path: ':id', loader: x0 }],
        },
      ],
    },
  ]);
Hi.createRoot(document.getElementById('root')).render(
  B.jsx(qc.StrictMode, { children: B.jsx(Xv, { router: C0 }) })
);
