'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react');
require('umi');
var t = require('antd'),
  n = require('@reactivex/rxjs'),
  r = require('alloyfinger');
function i(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
function u(e) {
  if (e && e.__esModule) return e;
  var t = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function(n) {
        if ('default' !== n) {
          var r = Object.getOwnPropertyDescriptor(e, n);
          Object.defineProperty(
            t,
            n,
            r.get
              ? r
              : {
                  enumerable: !0,
                  get: function() {
                    return e[n];
                  },
                },
          );
        }
      }),
    (t.default = e),
    Object.freeze(t)
  );
}
var a = i(e),
  o = u(r),
  c = function(e) {
    return a.default.createElement(
      'div',
      { className: '' },
      a.default.createElement(t.Button, null, e.children),
    );
  },
  l = function(e) {
    var t = e.children;
    return a.default.createElement('button', null, t);
  };
l.defaultProps = { disabled: !1, btnType: 'default' };
function s(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function f(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
        return;
      var n = [],
        r = !0,
        i = !1,
        u = void 0;
      try {
        for (
          var a, o = e[Symbol.iterator]();
          !(r = (a = o.next()).done) && (n.push(a.value), !t || n.length !== t);
          r = !0
        );
      } catch (e) {
        (i = !0), (u = e);
      } finally {
        try {
          r || null == o.return || o.return();
        } finally {
          if (i) throw u;
        }
      }
      return n;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ('string' == typeof e) return d(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      'Object' === n && e.constructor && (n = e.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(e);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return d(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function d(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
!(function(e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
    (i.type = 'text/css'),
      'top' === n && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e));
  }
})('');
var m = e.createContext({ index: '0' }),
  b = function(t) {
    var n = t.defaultIndex,
      r = t.onSelect,
      i = t.mode,
      u = t.defaultOpenSubMenus,
      o = t.children,
      c = f(e.useState(n), 2),
      l = c[0],
      s = c[1],
      d = {
        index: l || '0',
        onSelect: function(e) {
          s(e), r && r(e);
        },
        mode: i,
        defaultOpenSubMenus: u,
      };
    return a.default.createElement(
      'ul',
      null,
      a.default.createElement(
        m.Provider,
        { value: d },
        a.default.Children.map(o, function(e, t) {
          var n = e,
            r = n.type.displayName;
          if ('MenuItem' === r || 'SubMenu' === r)
            return a.default.cloneElement(n, { index: t.toString() });
        }),
      ),
    );
  };
b.displayName = 'MenuItem';
var p = function(t) {
  var n = t.children,
    r = t.disabled,
    i = t.index,
    u = e.useContext(m);
  return a.default.createElement(
    'li',
    {
      onClick: function() {
        u.onSelect && !r && 'string' == typeof i && u.onSelect(i);
      },
    },
    n,
  );
};
p.displayName = 'MenuItem';
var v = function(e) {
  var t,
    n = e.index,
    r = e.title,
    i = e.children;
  e.className;
  return a.default.createElement(
    'li',
    { key: n },
    a.default.createElement('div', { className: '' }, r),
    ((t = a.default.Children.map(i, function(e, t) {
      var r = e;
      if ('MenuItem' === r.type.displayName)
        return a.default.cloneElement(r, {
          index: ''.concat(n, '-').concat(t),
        });
    })),
    a.default.createElement(
      'div',
      null,
      a.default.createElement('ul', null, t),
    )),
  );
};
v.displayName = 'SubMenu';
var h = b;
(h.Item = p), (h.SubMenu = v);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function y(e, t, n, r) {
  var i,
    u = arguments.length,
    a =
      u < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    a = Reflect.decorate(e, t, n, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (i = e[o]) && (a = (u < 3 ? i(a) : u > 3 ? i(t, n, a) : i(t, n)) || a);
  return u > 3 && a && Object.defineProperty(t, n, a), a;
}
function E(e) {
  return function(t) {
    t.isTestable = e;
  };
}
var x = function e() {
  s(this, e);
};
x = y([E(!0)], x);
var g = function e() {
  s(this, e);
};
g = y([E(!1)], g);
!(function() {
  var e = function(e, t, n, r, i, u, a, o, c, l, s, f, d, m, b, p) {
    this.elements = window.Float32Array ? new Float32Array(16) : [];
    var v = this.elements;
    (v[0] = void 0 !== e ? e : 1),
      (v[4] = t || 0),
      (v[8] = n || 0),
      (v[12] = r || 0),
      (v[1] = i || 0),
      (v[5] = void 0 !== u ? u : 1),
      (v[9] = a || 0),
      (v[13] = o || 0),
      (v[2] = c || 0),
      (v[6] = l || 0),
      (v[10] = void 0 !== s ? s : 1),
      (v[14] = f || 0),
      (v[3] = d || 0),
      (v[7] = m || 0),
      (v[11] = b || 0),
      (v[15] = void 0 !== p ? p : 1);
  };
  function t(e, t, r) {
    for (var i = 0, u = t.length; i < u; i++) {
      n(e, t[i], r);
    }
  }
  function n(e, t, n) {
    Object.defineProperty(e, t, {
      get: function() {
        return this['__' + t];
      },
      set: function(e) {
        e !== this['__' + t] && ((this['__' + t] = e), n());
      },
    });
  }
  (e.DEG_TO_RAD = Math.PI / 180),
    (e.prototype = {
      set: function(e, t, n, r, i, u, a, o, c, l, s, f, d, m, b, p) {
        var v = this.elements;
        return (
          (v[0] = e),
          (v[4] = t),
          (v[8] = n),
          (v[12] = r),
          (v[1] = i),
          (v[5] = u),
          (v[9] = a),
          (v[13] = o),
          (v[2] = c),
          (v[6] = l),
          (v[10] = s),
          (v[14] = f),
          (v[3] = d),
          (v[7] = m),
          (v[11] = b),
          (v[15] = p),
          this
        );
      },
      identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      multiplyMatrices: function(e, t) {
        var n = e.elements,
          r = this.elements,
          i = n[0],
          u = n[4],
          a = n[8],
          o = n[12],
          c = n[1],
          l = n[5],
          s = n[9],
          f = n[13],
          d = n[2],
          m = n[6],
          b = n[10],
          p = n[14],
          v = n[3],
          h = n[7],
          y = n[11],
          E = n[15],
          x = t[0],
          g = t[1],
          O = t[2],
          T = t[3],
          M = t[4],
          _ = t[5],
          S = t[6],
          j = t[7],
          w = t[8],
          k = t[9],
          D = t[10],
          C = t[11],
          A = t[12],
          X = t[13],
          B = t[14],
          Y = t[15];
        return (
          (r[0] = i * x + u * M + a * w + o * A),
          (r[4] = i * g + u * _ + a * k + o * X),
          (r[8] = i * O + u * S + a * D + o * B),
          (r[12] = i * T + u * j + a * C + o * Y),
          (r[1] = c * x + l * M + s * w + f * A),
          (r[5] = c * g + l * _ + s * k + f * X),
          (r[9] = c * O + l * S + s * D + f * B),
          (r[13] = c * T + l * j + s * C + f * Y),
          (r[2] = d * x + m * M + b * w + p * A),
          (r[6] = d * g + m * _ + b * k + p * X),
          (r[10] = d * O + m * S + b * D + p * B),
          (r[14] = d * T + m * j + b * C + p * Y),
          (r[3] = v * x + h * M + y * w + E * A),
          (r[7] = v * g + h * _ + y * k + E * X),
          (r[11] = v * O + h * S + y * D + E * B),
          (r[15] = v * T + h * j + y * C + E * Y),
          this
        );
      },
      _rounded: function(e, t) {
        return (t = Math.pow(10, t || 15)), Math.round(e * t) / t;
      },
      appendTransform: function(t, n, r, i, u, a, o, c, l, s, f, d, m, b) {
        var p = o * e.DEG_TO_RAD,
          v = this._rounded(Math.cos(p)),
          h = this._rounded(Math.sin(p)),
          y = c * e.DEG_TO_RAD,
          E = this._rounded(Math.cos(y)),
          x = this._rounded(Math.sin(y)),
          g = l * e.DEG_TO_RAD,
          O = this._rounded(Math.cos(-1 * g)),
          T = this._rounded(Math.sin(-1 * g));
        return (
          this.multiplyMatrices(this, [
            1,
            0,
            0,
            t,
            0,
            v,
            h,
            n,
            0,
            -h,
            v,
            r,
            0,
            0,
            0,
            1,
          ]),
          this.multiplyMatrices(this, [
            E,
            0,
            x,
            0,
            0,
            1,
            0,
            0,
            -x,
            0,
            E,
            0,
            0,
            0,
            0,
            1,
          ]),
          this.multiplyMatrices(this, [
            O * i,
            T * u,
            0,
            0,
            -T * i,
            O * u,
            0,
            0,
            0,
            0,
            1 * a,
            0,
            0,
            0,
            0,
            1,
          ]),
          (s || f) &&
            this.multiplyMatrices(this, [
              this._rounded(Math.cos(s * e.DEG_TO_RAD)),
              this._rounded(Math.sin(s * e.DEG_TO_RAD)),
              0,
              0,
              -1 * this._rounded(Math.sin(f * e.DEG_TO_RAD)),
              this._rounded(Math.cos(f * e.DEG_TO_RAD)),
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ]),
          (d || m || b) &&
            ((this.elements[12] -=
              d * this.elements[0] +
              m * this.elements[4] +
              b * this.elements[8]),
            (this.elements[13] -=
              d * this.elements[1] +
              m * this.elements[5] +
              b * this.elements[9]),
            (this.elements[14] -=
              d * this.elements[2] +
              m * this.elements[6] +
              b * this.elements[10])),
          this
        );
      },
    }),
    (window.Transform = function(n, r) {
      t(
        n,
        [
          'translateX',
          'translateY',
          'translateZ',
          'scaleX',
          'scaleY',
          'scaleZ',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skewX',
          'skewY',
          'originX',
          'originY',
          'originZ',
        ],
        function() {
          var e = n.matrix3D
            .identity()
            .appendTransform(
              n.translateX,
              n.translateY,
              n.translateZ,
              n.scaleX,
              n.scaleY,
              n.scaleZ,
              n.rotateX,
              n.rotateY,
              n.rotateZ,
              n.skewX,
              n.skewY,
              n.originX,
              n.originY,
              n.originZ,
            );
          n.style.transform = n.style.msTransform = n.style.OTransform = n.style.MozTransform = n.style.webkitTransform =
            (r
              ? ''
              : 'perspective(' +
                (void 0 === n.perspective ? 500 : n.perspective) +
                'px) ') +
            'matrix3d(' +
            Array.prototype.slice.call(e.elements).join(',') +
            ')';
        },
      ),
        (n.matrix3D = new e()),
        r ||
          (t(n, ['perspective'], function() {
            n.style.transform = n.style.msTransform = n.style.OTransform = n.style.MozTransform = n.style.webkitTransform =
              'perspective(' +
              n.perspective +
              'px) matrix3d(' +
              Array.prototype.slice.call(n.matrix3D.elements).join(',') +
              ')';
          }),
          (n.perspective = 500)),
        (n.scaleX = n.scaleY = n.scaleZ = 1),
        (n.translateX = n.translateY = n.translateZ = n.rotateX = n.rotateY = n.rotateZ = n.skewX = n.skewY = n.originX = n.originY = n.originZ = 0);
    });
})();
(exports.AlloyFingerTest = function() {
  return (
    e.useEffect(function() {
      var e = 1,
        t = document.getElementById('pinchRotateImg');
      window.Transform(t),
        new o(t, {
          rotate: function(e) {
            t.rotateZ += e.angle;
          },
          multipointStart: function() {
            e = t.scaleX;
          },
          pinch: function(n) {
            t.scaleX = t.scaleY = e * n.zoom;
          },
        });
    }, []),
    a.default.createElement(
      'div',
      { className: '' },
      a.default.createElement('img', {
        id: 'pinchRotateImg',
        src: require('@/asset/images/live_cover.jpg'),
        alt: '',
        style: {
          transform:
            'perspective(500px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        },
      }),
    )
  );
}),
  (exports.Bobo = function() {
    return a.default.createElement(
      'div',
      { className: '' },
      a.default.createElement(c, null),
    );
  }),
  (exports.DecoratorTest = function() {
    return (
      e.useEffect(function() {}, []),
      a.default.createElement('div', { className: '' })
    );
  }),
  (exports.DesignMode = function() {
    e.useEffect(function() {
      var e;
      (e = document.querySelector('#button1')),
        n.Observable.fromEvent(e, 'click')
          .throttleTime(1e3)
          .scan(function(e) {
            return e + 1;
          }, 0)
          .subscribe(function(e) {}),
        r();
    }, []);
    var r = function() {
      var e = document.querySelector('#increase'),
        t = n.Observable.fromEvent(e, 'click').map(function() {
          return function(e) {
            return Object.assign({}, e, { count: e.count + 1 });
          };
        }),
        r = document.querySelector('#decrease'),
        i = n.Observable.fromEvent(r, 'click').map(function() {
          return function(e) {
            return Object.assign({}, e, { count: e.count - 1 });
          };
        }),
        u = document.querySelector('#input3'),
        a = n.Observable.fromEvent(u, 'input').map(function(e) {
          return function(t) {
            return Object.assign({}, t, { inputValue: e.target.value });
          };
        }),
        o = n.Observable.merge(t, i, a).scan(
          function(e, t) {
            return t(e);
          },
          { count: 0, inputValue: '' },
        );
      o.subscribe(function(e) {
        (document.querySelector('#count').innerHTML = e.count),
          (document.querySelector('#hello').innerHTML =
            'Hello ' + e.inputValue);
      });
      var c = {};
      o.subscribe(function(e) {
        e.count !== c.count &&
          (document.querySelector('#count').innerHTML = e.count),
          e.inputValue !== c.inputValue &&
            (document.querySelector('#hello').innerHTML =
              'Hello ' + e.inputValue),
          (c = e);
      });
    };
    return a.default.createElement(
      'div',
      { className: '' },
      a.default.createElement('h1', null, '我是测试设计模式'),
      a.default.createElement(
        t.Button,
        { onClick: function() {} },
        '观察者模式',
      ),
      a.default.createElement(
        t.Button,
        { onClick: function() {} },
        '发布订阅模式',
      ),
      a.default.createElement(t.Button, { onClick: function() {} }, '测试RXJS'),
      a.default.createElement('div', { id: 'button1' }, '点击触发rxjs事件'),
      a.default.createElement(
        t.Button,
        {
          onClick: function() {
            n.Observable.create(function(e) {
              e.next(1),
                e.next(2),
                e.next(3),
                setTimeout(function() {
                  e.next(4), e.complete();
                }, 1e3);
            });
          },
        },
        '点击触发rxjs2',
      ),
      a.default.createElement(
        t.Button,
        {
          onClick: function() {
            var e = n.Observable.interval(1e3).subscribe(function(e) {});
            setTimeout(function() {
              e.unsubscribe();
            }, 3e3);
          },
        },
        '点击触发rxjs3',
      ),
      a.default.createElement(
        t.Button,
        {
          onClick: function() {
            var e = new n.Subject();
            e.subscribe({ next: function(e) {} }),
              e.subscribe({ next: function(e) {} }),
              n.Observable.interval(1e3).subscribe(e),
              setTimeout(function() {
                e.complete();
              }, 4e3);
          },
        },
        '点击触发subject1',
      ),
      a.default.createElement(
        t.Button,
        {
          onClick: function() {
            var e = n.Observable.interval(400),
              t = n.Observable.interval(1e3),
              r = e.subscribe(function(e) {}),
              i = t.subscribe(function(e) {});
            r.add(i),
              setTimeout(function() {
                r.unsubscribe();
              }, 5e3);
          },
        },
        '点击触发subject2',
      ),
      a.default.createElement(
        t.Button,
        {
          onClick: function() {
            var e = n.Observable.interval(1e3),
              t = new n.Subject(),
              r = e.multicast(t),
              i = r.subscribe({ next: function(e) {} }),
              u = r.subscribe({ next: function(e) {} });
            r.connect(),
              setTimeout(function() {
                i.unsubscribe(), u.unsubscribe();
              }, 4e3);
          },
        },
        '多播的 Observables',
      ),
      a.default.createElement(
        t.Button,
        {
          onClick: function() {
            var e = n.Observable.interval(500),
              t = n.Observable.interval(1500),
              r = n.Observable.merge(e, t),
              i = r.subscribe({ next: function(e) {} }),
              u = r.subscribe({ next: function(e) {} });
            setTimeout(function() {
              i.unsubscribe(), u.unsubscribe();
            }, 4e3);
          },
        },
        'merge',
      ),
      a.default.createElement(
        t.Button,
        {
          onClick: function() {
            n.Observable.create(function(e) {
              e.next(1), e.next(2), e.next(3), e.complete();
            })
              .observeOn(n.Scheduler.async)
              .subscribe({
                next: function(e) {},
                error: function(e) {},
                complete: function() {},
              });
          },
        },
        'Scheduler ',
      ),
      a.default.createElement('input', { id: 'input1' }),
      a.default.createElement('div', { id: 'button2' }, '点击button2'),
      '输入的字符是:',
      a.default.createElement('span', { id: 'receiver' }),
      'state:',
      a.default.createElement('span', { id: 'increase' }, ' + '),
      a.default.createElement('span', { id: 'decrease' }, ' - '),
      a.default.createElement('input', { id: 'input3', type: 'text' }),
      a.default.createElement('span', { id: 'count' }),
      a.default.createElement('span', { id: 'hello' }),
    );
  }),
  (exports.Foo = function(e) {
    var t = e.title;
    return a.default.createElement('h1', null, t);
  }),
  (exports.Menu = h),
  (exports.TmButton = function() {
    return a.default.createElement(
      l,
      { size: 'lg', btnType: 'danger' },
      '我是一个Button',
    );
  });
