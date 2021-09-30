'use strict';
(self.webpackChunknodejs = self.webpackChunknodejs || []).push([
  [177],
  {
    529: (e, t, n) => {
      n.r(t), n.d(t, { default: () => o });
      var r = n(363),
        a = n.n(r);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const o = function (e) {
        var t,
          n,
          o =
            ((t = (0, r.useState)(e.number)),
            (n = 2),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(t) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                      e['@@iterator'];
                if (null != n) {
                  var r,
                    a,
                    l = [],
                    o = !0,
                    c = !1;
                  try {
                    for (
                      n = n.call(e);
                      !(o = (r = n.next()).done) &&
                      (l.push(r.value), !t || l.length !== t);
                      o = !0
                    );
                  } catch (e) {
                    (c = !0), (a = e);
                  } finally {
                    try {
                      o || null == n.return || n.return();
                    } finally {
                      if (c) throw a;
                    }
                  }
                  return l;
                }
              })(t, n) ||
              (function (e, t) {
                if (e) {
                  if ('string' == typeof e) return l(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(e)
                      : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? l(e, t)
                      : void 0
                  );
                }
              })(t, n) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()),
          c = o[0],
          u = o[1],
          i = function (e) {
            var t = e.target;
            if ('increment' === t.name) u(c + 1);
            else {
              if ('decrement' !== t.name)
                throw "Button don't have a name value";
              u(c - 1);
            }
          };
        return a().createElement(
          'div',
          { className: 'content__wrapper' },
          a().createElement(
            'main',
            null,
            a().createElement(
              'h1',
              null,
              'This is very nice functional Home page content you can counter'
            ),
            a().createElement('p', null, c)
          ),
          a().createElement(
            'section',
            null,
            a().createElement(
              'button',
              { className: 'secretButton', name: 'increment', onClick: i },
              'Increment'
            ),
            a().createElement(
              'button',
              { name: 'decrement', onClick: i },
              'Decrement'
            )
          )
        );
      };
    },
  },
]);
