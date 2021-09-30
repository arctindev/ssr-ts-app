/*! For license information please see main.js.LICENSE.txt */
(() => {
  'use strict';
  var e,
    t,
    r = {
      679: (e, t, r) => {
        var n = r(864),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          c = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function i(e) {
          return n.isMemo(e) ? c : l[e.$$typeof] || o;
        }
        (l[n.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[n.Memo] = c);
        var u = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          p = Object.getOwnPropertyDescriptor,
          m = Object.getPrototypeOf,
          d = Object.prototype;
        e.exports = function e(t, r, n) {
          if ('string' != typeof r) {
            if (d) {
              var o = m(r);
              o && o !== d && e(t, o, n);
            }
            var c = s(r);
            f && (c = c.concat(f(r)));
            for (var l = i(t), h = i(r), y = 0; y < c.length; ++y) {
              var v = c[y];
              if (!(a[v] || (n && n[v]) || (h && h[v]) || (l && l[v]))) {
                var b = p(r, v);
                try {
                  u(t, v, b);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      921: (e, t) => {
        var r = 'function' == typeof Symbol && Symbol.for,
          n = r ? Symbol.for('react.element') : 60103,
          o = r ? Symbol.for('react.portal') : 60106,
          a = r ? Symbol.for('react.fragment') : 60107,
          c = r ? Symbol.for('react.strict_mode') : 60108,
          l = r ? Symbol.for('react.profiler') : 60114,
          i = r ? Symbol.for('react.provider') : 60109,
          u = r ? Symbol.for('react.context') : 60110,
          s = r ? Symbol.for('react.async_mode') : 60111,
          f = r ? Symbol.for('react.concurrent_mode') : 60111,
          p = r ? Symbol.for('react.forward_ref') : 60112,
          m = r ? Symbol.for('react.suspense') : 60113,
          d = r ? Symbol.for('react.suspense_list') : 60120,
          h = r ? Symbol.for('react.memo') : 60115,
          y = r ? Symbol.for('react.lazy') : 60116,
          v = r ? Symbol.for('react.block') : 60121,
          b = r ? Symbol.for('react.fundamental') : 60117,
          g = r ? Symbol.for('react.responder') : 60118,
          E = r ? Symbol.for('react.scope') : 60119;
        function S(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case s:
                  case f:
                  case a:
                  case l:
                  case c:
                  case m:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case p:
                      case y:
                      case h:
                      case i:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function w(e) {
          return S(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = u),
          (t.ContextProvider = i),
          (t.Element = n),
          (t.ForwardRef = p),
          (t.Fragment = a),
          (t.Lazy = y),
          (t.Memo = h),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = c),
          (t.Suspense = m),
          (t.isAsyncMode = function (e) {
            return w(e) || S(e) === s;
          }),
          (t.isConcurrentMode = w),
          (t.isContextConsumer = function (e) {
            return S(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return S(e) === i;
          }),
          (t.isElement = function (e) {
            return 'object' == typeof e && null !== e && e.$$typeof === n;
          }),
          (t.isForwardRef = function (e) {
            return S(e) === p;
          }),
          (t.isFragment = function (e) {
            return S(e) === a;
          }),
          (t.isLazy = function (e) {
            return S(e) === y;
          }),
          (t.isMemo = function (e) {
            return S(e) === h;
          }),
          (t.isPortal = function (e) {
            return S(e) === o;
          }),
          (t.isProfiler = function (e) {
            return S(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return S(e) === c;
          }),
          (t.isSuspense = function (e) {
            return S(e) === m;
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === a ||
              e === f ||
              e === l ||
              e === c ||
              e === m ||
              e === d ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === y ||
                  e.$$typeof === h ||
                  e.$$typeof === i ||
                  e.$$typeof === u ||
                  e.$$typeof === p ||
                  e.$$typeof === b ||
                  e.$$typeof === g ||
                  e.$$typeof === E ||
                  e.$$typeof === v))
            );
          }),
          (t.typeOf = S);
      },
      864: (e, t, r) => {
        e.exports = r(921);
      },
      363: (e) => {
        e.exports = React;
      },
    },
    n = {};
  function o(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var a = (n[e] = { exports: {} });
    return r[e](a, a.exports, o), a.exports;
  }
  (o.m = r),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, r) => (o.f[r](e, t), t), []))),
    (o.u = (e) =>
      'js/' +
      { 177: 'home', 443: 'about', 596: '404', 894: 'services' }[e] +
      '.js'),
    (o.miniCssF = (e) => 'css/main.css'),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = 'nodejs:'),
    (o.l = (r, n, a, c) => {
      if (e[r]) e[r].push(n);
      else {
        var l, i;
        if (void 0 !== a)
          for (
            var u = document.getElementsByTagName('script'), s = 0;
            s < u.length;
            s++
          ) {
            var f = u[s];
            if (
              f.getAttribute('src') == r ||
              f.getAttribute('data-webpack') == t + a
            ) {
              l = f;
              break;
            }
          }
        l ||
          ((i = !0),
          ((l = document.createElement('script')).charset = 'utf-8'),
          (l.timeout = 120),
          o.nc && l.setAttribute('nonce', o.nc),
          l.setAttribute('data-webpack', t + a),
          (l.src = r)),
          (e[r] = [n]);
        var p = (t, n) => {
            (l.onerror = l.onload = null), clearTimeout(m);
            var o = e[r];
            if (
              (delete e[r],
              l.parentNode && l.parentNode.removeChild(l),
              o && o.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          m = setTimeout(
            p.bind(null, void 0, { type: 'timeout', target: l }),
            12e4
          );
        (l.onerror = p.bind(null, l.onerror)),
          (l.onload = p.bind(null, l.onload)),
          i && document.head.appendChild(l);
      }
    }),
    (o.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + '');
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (o.p = e + '../');
    })(),
    (() => {
      var e = { 179: 0 };
      o.f.j = (t, r) => {
        var n = o.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var a = new Promise((r, o) => (n = e[t] = [r, o]));
            r.push((n[2] = a));
            var c = o.p + o.u(t),
              l = new Error();
            o.l(
              c,
              (r) => {
                if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ('load' === r.type ? 'missing' : r.type),
                    c = r && r.target && r.target.src;
                  (l.message =
                    'Loading chunk ' + t + ' failed.\n(' + a + ': ' + c + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = a),
                    (l.request = c),
                    n[1](l);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var n,
            a,
            [c, l, i] = r,
            u = 0;
          if (c.some((t) => 0 !== e[t])) {
            for (n in l) o.o(l, n) && (o.m[n] = l[n]);
            i && i(o);
          }
          for (t && t(r); u < c.length; u++)
            (a = c[u]), o.o(e, a) && e[a] && e[a][0](), (e[c[u]] = 0);
        },
        r = (self.webpackChunknodejs = self.webpackChunknodejs || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e = o(363),
        t = o.n(e);
      const r = ReactDOM,
        n = ReactRouterDOM;
      var a = function () {
          return t().createElement(
            'div',
            { className: 'content__wrapper' },
            t().createElement(
              'main',
              null,
              t().createElement(
                'h1',
                null,
                'This is Home page content you can counter'
              ),
              t().createElement('p', null, '5')
            ),
            t().createElement(
              'section',
              null,
              t().createElement('button', { name: 'increment' }, 'Increment'),
              t().createElement('button', { name: 'decrement' }, 'Decrement')
            )
          );
        },
        c = function () {
          return t().createElement(
            'div',
            { className: 'content__wrapper' },
            t().createElement(
              'main',
              null,
              t().createElement('h1', null, 'This is About Page')
            )
          );
        },
        l = function () {
          return t().createElement(
            'div',
            { className: 'content__wrapper' },
            t().createElement(
              'main',
              null,
              t().createElement('h1', null, 'Page not Found')
            )
          );
        },
        i = function () {
          return t().createElement(
            'div',
            { className: 'content__wrapper' },
            t().createElement(
              'main',
              null,
              t().createElement('h1', null, 'This is Services Page')
            )
          );
        },
        u = function () {
          return t().createElement(
            'footer',
            null,
            t().createElement('span', null, 'Branding'),
            t().createElement(
              'nav',
              null,
              t().createElement(n.Link, { to: '/' }, 'Home'),
              t().createElement(n.Link, { to: '/services' }, 'Services'),
              t().createElement(n.Link, { to: '/about' }, 'About')
            )
          );
        },
        s = function () {
          return t().createElement(
            'header',
            null,
            t().createElement('span', null, 'Branding'),
            t().createElement(
              'nav',
              null,
              t().createElement(n.Link, { to: '/' }, 'Home'),
              t().createElement(n.Link, { to: '/services' }, 'Services'),
              t().createElement(n.Link, { to: '/about' }, 'About')
            )
          );
        },
        f = function (e) {
          var r = e.children;
          return t().createElement(
            'div',
            { className: 'template' },
            t().createElement(s, null),
            r,
            t().createElement(u, null)
          );
        };
      function p(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      function m() {
        return (
          (m =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          m.apply(this, arguments)
        );
      }
      function d(e, t) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          d(e, t)
        );
      }
      var h = o(864),
        y = o(679),
        v = o.n(y);
      var b = t().createContext(),
        g = {},
        E = 'PENDING',
        S = 'REJECTED',
        w = function (e) {
          return e;
        };
      function k(e) {
        var r = e.defaultResolveComponent,
          n = void 0 === r ? w : r,
          o = e.render,
          a = e.onLoad;
        function c(e, r) {
          void 0 === r && (r = {});
          var c = (function (e) {
              return 'function' == typeof e
                ? {
                    requireAsync: e,
                    resolve: function () {},
                    chunkName: function () {},
                  }
                : e;
            })(e),
            l = {};
          function i(e) {
            return r.cacheKey
              ? r.cacheKey(e)
              : c.resolve
              ? c.resolve(e)
              : 'static';
          }
          function u(e, t, o) {
            var a = r.resolveComponent ? r.resolveComponent(e, t) : n(e);
            if (r.resolveComponent && !(0, h.isValidElementType)(a))
              throw new Error(
                'resolveComponent returned something that is not a React component!'
              );
            return v()(o, a, { preload: !0 }), a;
          }
          var s,
            f,
            y = (function (e) {
              var t, n;
              function s(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).state = {
                    result: null,
                    error: null,
                    loading: !0,
                    cacheKey: i(t),
                  }),
                  (function (e, t) {
                    if (!e) {
                      var r = new Error('loadable: ' + t);
                      throw (
                        ((r.framesToPop = 1),
                        (r.name = 'Invariant Violation'),
                        r)
                      );
                    }
                  })(
                    !t.__chunkExtractor || c.requireSync,
                    'SSR requires `@loadable/babel-plugin`, please install it'
                  ),
                  t.__chunkExtractor
                    ? (!1 === r.ssr ||
                        (c.requireAsync(t).catch(function () {
                          return null;
                        }),
                        n.loadSync(),
                        t.__chunkExtractor.addChunk(c.chunkName(t))),
                      (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return e;
                      })(n))
                    : (!1 !== r.ssr &&
                        ((c.isReady && c.isReady(t)) ||
                          (c.chunkName && g[c.chunkName(t)])) &&
                        n.loadSync(),
                      n)
                );
              }
              (n = e),
                ((t = s).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                d(t, n),
                (s.getDerivedStateFromProps = function (e, t) {
                  var r = i(e);
                  return m({}, t, {
                    cacheKey: r,
                    loading: t.loading || t.cacheKey !== r,
                  });
                });
              var f = s.prototype;
              return (
                (f.componentDidMount = function () {
                  this.mounted = !0;
                  var e = this.getCache();
                  e && e.status === S && this.setCache(),
                    this.state.loading && this.loadAsync();
                }),
                (f.componentDidUpdate = function (e, t) {
                  t.cacheKey !== this.state.cacheKey && this.loadAsync();
                }),
                (f.componentWillUnmount = function () {
                  this.mounted = !1;
                }),
                (f.safeSetState = function (e, t) {
                  this.mounted && this.setState(e, t);
                }),
                (f.getCacheKey = function () {
                  return i(this.props);
                }),
                (f.getCache = function () {
                  return l[this.getCacheKey()];
                }),
                (f.setCache = function (e) {
                  void 0 === e && (e = void 0), (l[this.getCacheKey()] = e);
                }),
                (f.triggerOnLoad = function () {
                  var e = this;
                  a &&
                    setTimeout(function () {
                      a(e.state.result, e.props);
                    });
                }),
                (f.loadSync = function () {
                  if (this.state.loading)
                    try {
                      var e = u(c.requireSync(this.props), this.props, k);
                      (this.state.result = e), (this.state.loading = !1);
                    } catch (e) {
                      console.error(
                        'loadable-components: failed to synchronously load component, which expected to be available',
                        {
                          fileName: c.resolve(this.props),
                          chunkName: c.chunkName(this.props),
                          error: e ? e.message : e,
                        }
                      ),
                        (this.state.error = e);
                    }
                }),
                (f.loadAsync = function () {
                  var e = this,
                    t = this.resolveAsync();
                  return (
                    t
                      .then(function (t) {
                        var r = u(t, e.props, { Loadable: k });
                        e.safeSetState({ result: r, loading: !1 }, function () {
                          return e.triggerOnLoad();
                        });
                      })
                      .catch(function (t) {
                        return e.safeSetState({ error: t, loading: !1 });
                      }),
                    t
                  );
                }),
                (f.resolveAsync = function () {
                  var e = this,
                    t = this.props,
                    r =
                      (t.__chunkExtractor,
                      t.forwardedRef,
                      p(t, ['__chunkExtractor', 'forwardedRef'])),
                    n = this.getCache();
                  return (
                    n ||
                      (((n = c.requireAsync(r)).status = E),
                      this.setCache(n),
                      n.then(
                        function () {
                          n.status = 'RESOLVED';
                        },
                        function (t) {
                          console.error(
                            'loadable-components: failed to asynchronously load component',
                            {
                              fileName: c.resolve(e.props),
                              chunkName: c.chunkName(e.props),
                              error: t ? t.message : t,
                            }
                          ),
                            (n.status = S);
                        }
                      )),
                    n
                  );
                }),
                (f.render = function () {
                  var e = this.props,
                    t = e.forwardedRef,
                    n = e.fallback,
                    a =
                      (e.__chunkExtractor,
                      p(e, ['forwardedRef', 'fallback', '__chunkExtractor'])),
                    c = this.state,
                    l = c.error,
                    i = c.loading,
                    u = c.result;
                  if (
                    r.suspense &&
                    (this.getCache() || this.loadAsync()).status === E
                  )
                    throw this.loadAsync();
                  if (l) throw l;
                  var s = n || r.fallback || null;
                  return i
                    ? s
                    : o({
                        fallback: s,
                        result: u,
                        options: r,
                        props: m({}, a, { ref: t }),
                      });
                }),
                s
              );
            })(t().Component),
            w =
              ((f = function (e) {
                return t().createElement(b.Consumer, null, function (r) {
                  return t().createElement(
                    s,
                    Object.assign({ __chunkExtractor: r }, e)
                  );
                });
              }),
              (s = y).displayName &&
                (f.displayName = s.displayName + 'WithChunkExtractor'),
              f),
            k = t().forwardRef(function (e, r) {
              return t().createElement(
                w,
                Object.assign({ forwardedRef: r }, e)
              );
            });
          return (
            (k.displayName = 'Loadable'),
            (k.preload = function (e) {
              c.requireAsync(e);
            }),
            (k.load = function (e) {
              return c.requireAsync(e);
            }),
            k
          );
        }
        return {
          loadable: c,
          lazy: function (e, t) {
            return c(e, m({}, t, { suspense: !0 }));
          },
        };
      }
      var _ = k({
          defaultResolveComponent: function (e) {
            return e.__esModule ? e.default : e.default || e;
          },
          render: function (e) {
            var r = e.result,
              n = e.props;
            return t().createElement(r, n);
          },
        }),
        C = _.loadable,
        O = _.lazy,
        $ = k({
          onLoad: function (e, t) {
            e &&
              t.forwardedRef &&
              ('function' == typeof t.forwardedRef
                ? t.forwardedRef(e)
                : (t.forwardedRef.current = e));
          },
          render: function (e) {
            var t = e.result,
              r = e.props;
            return r.children ? r.children(t) : null;
          },
        }),
        j = $.loadable,
        x = $.lazy,
        R = C;
      (R.lib = j), (O.lib = x);
      const P = R;
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var A = P(
          function () {
            return o.e(443).then(o.bind(o, 361));
          },
          { fallback: t().createElement(c, null) }
        ),
        T = P(
          function () {
            return o.e(596).then(o.bind(o, 824));
          },
          { fallback: t().createElement(l, null) }
        ),
        M = P(
          function () {
            return o.e(894).then(o.bind(o, 476));
          },
          { fallback: t().createElement(i, null) }
        ),
        L = P(
          function () {
            return o.e(177).then(o.bind(o, 529));
          },
          { fallback: t().createElement(a, null) }
        ),
        D = function () {
          var r,
            o,
            a =
              ((r = (0, e.useState)({ number: 5 })),
              (o = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(r) ||
                (function (e, t) {
                  var r =
                    null == e
                      ? null
                      : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                        e['@@iterator'];
                  if (null != r) {
                    var n,
                      o,
                      a = [],
                      c = !0,
                      l = !1;
                    try {
                      for (
                        r = r.call(e);
                        !(c = (n = r.next()).done) &&
                        (a.push(n.value), !t || a.length !== t);
                        c = !0
                      );
                    } catch (e) {
                      (l = !0), (o = e);
                    } finally {
                      try {
                        c || null == r.return || r.return();
                      } finally {
                        if (l) throw o;
                      }
                    }
                    return a;
                  }
                })(r, o) ||
                (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return N(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      'Object' === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      'Map' === r || 'Set' === r
                        ? Array.from(e)
                        : 'Arguments' === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? N(e, t)
                        : void 0
                    );
                  }
                })(r, o) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            c = a[0];
          return (
            a[1],
            t().createElement(
              n.Switch,
              null,
              t().createElement(
                n.Route,
                { exact: !0, path: '/about' },
                t().createElement(f, null, t().createElement(A, null))
              ),
              t().createElement(
                n.Route,
                { exact: !0, path: '/services' },
                t().createElement(f, null, t().createElement(M, null))
              ),
              t().createElement(n.Route, {
                exact: !0,
                path: '/',
                render: function () {
                  return t().createElement(
                    f,
                    null,
                    t().createElement(L, { number: c.number })
                  );
                },
              }),
              t().createElement(
                n.Route,
                { exact: !0, path: '/404' },
                t().createElement(f, null, t().createElement(T, null))
              ),
              t().createElement(
                n.Route,
                { path: '/' },
                t().createElement(n.Redirect, { to: '/404' })
              )
            )
          );
        };
      navigator.serviceWorker &&
        window.addEventListener('load', function () {
          navigator.serviceWorker
            .register('service-worker.js')
            .then(function (e) {
              return console.log('Service Worker Working for scope:', e.scope);
            })
            .catch(function (e) {
              return console.log('Service worker is not working', e);
            });
        }),
        (0, r.hydrate)(
          t().createElement(
            t().StrictMode,
            null,
            t().createElement(n.BrowserRouter, null, t().createElement(D, null))
          ),
          document.getElementById('root')
        );
    })();
})();
