import e, {
  useState as t,
  createContext as n,
  useContext as r,
  useEffect as i,
} from 'react';
import 'umi';
import { Button as o } from 'antd';
import { Observable as c, Subject as a, Scheduler as s } from '@reactivex/rxjs';
import * as u from 'alloyfinger';
var l = function(t) {
    var n = t.title;
    return e.createElement('h1', null, n);
  },
  m = function(t) {
    return e.createElement(
      'div',
      { className: '' },
      e.createElement(o, null, t.children),
    );
  },
  f = function() {
    return e.createElement('div', { className: '' }, e.createElement(m, null));
  },
  d = function(t) {
    var n = t.children;
    return e.createElement('button', null, n);
  };
d.defaultProps = { disabled: !1, btnType: 'default' };
var p = function() {
  return e.createElement(
    d,
    { size: 'lg', btnType: 'danger' },
    '我是一个Button',
  );
};
function h(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function v(e, t) {
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
        o = void 0;
      try {
        for (
          var c, a = e[Symbol.iterator]();
          !(r = (c = a.next()).done) && (n.push(c.value), !t || n.length !== t);
          r = !0
        );
      } catch (e) {
        (i = !0), (o = e);
      } finally {
        try {
          r || null == a.return || a.return();
        } finally {
          if (i) throw o;
        }
      }
      return n;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ('string' == typeof e) return b(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      'Object' === n && e.constructor && (n = e.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(e);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return b(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function b(e, t) {
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
var y = n({ index: '0' }),
  E = function(n) {
    var r = n.defaultIndex,
      i = n.onSelect,
      o = n.mode,
      c = n.defaultOpenSubMenus,
      a = n.children,
      s = v(t(r), 2),
      u = s[0],
      l = s[1],
      m = {
        index: u || '0',
        onSelect: function(e) {
          l(e), i && i(e);
        },
        mode: o,
        defaultOpenSubMenus: c,
      };
    return e.createElement(
      'ul',
      null,
      e.createElement(
        y.Provider,
        { value: m },
        e.Children.map(a, function(t, n) {
          var r = t,
            i = r.type.displayName;
          if ('MenuItem' === i || 'SubMenu' === i)
            return e.cloneElement(r, { index: n.toString() });
        }),
      ),
    );
  };
E.displayName = 'MenuItem';
var g = function(t) {
  var n = t.children,
    i = t.disabled,
    o = t.index,
    c = r(y);
  return e.createElement(
    'li',
    {
      onClick: function() {
        c.onSelect && !i && 'string' == typeof o && c.onSelect(o);
      },
    },
    n,
  );
};
g.displayName = 'MenuItem';
var T = function(t) {
  var n,
    r = t.index,
    i = t.title,
    o = t.children;
  t.className;
  return e.createElement(
    'li',
    { key: r },
    e.createElement('div', { className: '' }, i),
    ((n = e.Children.map(o, function(t, n) {
      var i = t;
      if ('MenuItem' === i.type.displayName)
        return e.cloneElement(i, { index: ''.concat(r, '-').concat(n) });
    })),
    e.createElement('div', null, e.createElement('ul', null, n))),
  );
};
T.displayName = 'SubMenu';
var x = E;
(x.Item = g), (x.SubMenu = T);
var M = function() {
  i(function() {
    var e;
    (e = document.querySelector('#button1')),
      c
        .fromEvent(e, 'click')
        .throttleTime(1e3)
        .scan(function(e) {
          return e + 1;
        }, 0)
        .subscribe(function(e) {}),
      t();
  }, []);
  var t = function() {
    var e = document.querySelector('#increase'),
      t = c.fromEvent(e, 'click').map(function() {
        return function(e) {
          return Object.assign({}, e, { count: e.count + 1 });
        };
      }),
      n = document.querySelector('#decrease'),
      r = c.fromEvent(n, 'click').map(function() {
        return function(e) {
          return Object.assign({}, e, { count: e.count - 1 });
        };
      }),
      i = document.querySelector('#input3'),
      o = c.fromEvent(i, 'input').map(function(e) {
        return function(t) {
          return Object.assign({}, t, { inputValue: e.target.value });
        };
      }),
      a = c.merge(t, r, o).scan(
        function(e, t) {
          return t(e);
        },
        { count: 0, inputValue: '' },
      );
    a.subscribe(function(e) {
      (document.querySelector('#count').innerHTML = e.count),
        (document.querySelector('#hello').innerHTML = 'Hello ' + e.inputValue);
    });
    var s = {};
    a.subscribe(function(e) {
      e.count !== s.count &&
        (document.querySelector('#count').innerHTML = e.count),
        e.inputValue !== s.inputValue &&
          (document.querySelector('#hello').innerHTML =
            'Hello ' + e.inputValue),
        (s = e);
    });
  };
  return e.createElement(
    'div',
    { className: '' },
    e.createElement('h1', null, '我是测试设计模式'),
    e.createElement(o, { onClick: function() {} }, '观察者模式'),
    e.createElement(o, { onClick: function() {} }, '发布订阅模式'),
    e.createElement(o, { onClick: function() {} }, '测试RXJS'),
    e.createElement('div', { id: 'button1' }, '点击触发rxjs事件'),
    e.createElement(
      o,
      {
        onClick: function() {
          c.create(function(e) {
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
    e.createElement(
      o,
      {
        onClick: function() {
          var e = c.interval(1e3).subscribe(function(e) {});
          setTimeout(function() {
            e.unsubscribe();
          }, 3e3);
        },
      },
      '点击触发rxjs3',
    ),
    e.createElement(
      o,
      {
        onClick: function() {
          var e = new a();
          e.subscribe({ next: function(e) {} }),
            e.subscribe({ next: function(e) {} }),
            c.interval(1e3).subscribe(e),
            setTimeout(function() {
              e.complete();
            }, 4e3);
        },
      },
      '点击触发subject1',
    ),
    e.createElement(
      o,
      {
        onClick: function() {
          var e = c.interval(400),
            t = c.interval(1e3),
            n = e.subscribe(function(e) {}),
            r = t.subscribe(function(e) {});
          n.add(r),
            setTimeout(function() {
              n.unsubscribe();
            }, 5e3);
        },
      },
      '点击触发subject2',
    ),
    e.createElement(
      o,
      {
        onClick: function() {
          var e = c.interval(1e3),
            t = new a(),
            n = e.multicast(t),
            r = n.subscribe({ next: function(e) {} }),
            i = n.subscribe({ next: function(e) {} });
          n.connect(),
            setTimeout(function() {
              r.unsubscribe(), i.unsubscribe();
            }, 4e3);
        },
      },
      '多播的 Observables',
    ),
    e.createElement(
      o,
      {
        onClick: function() {
          var e = c.interval(500),
            t = c.interval(1500),
            n = c.merge(e, t),
            r = n.subscribe({ next: function(e) {} }),
            i = n.subscribe({ next: function(e) {} });
          setTimeout(function() {
            r.unsubscribe(), i.unsubscribe();
          }, 4e3);
        },
      },
      'merge',
    ),
    e.createElement(
      o,
      {
        onClick: function() {
          c.create(function(e) {
            e.next(1), e.next(2), e.next(3), e.complete();
          })
            .observeOn(s.async)
            .subscribe({
              next: function(e) {},
              error: function(e) {},
              complete: function() {},
            });
        },
      },
      'Scheduler ',
    ),
    e.createElement('input', { id: 'input1' }),
    e.createElement('div', { id: 'button2' }, '点击button2'),
    '输入的字符是:',
    e.createElement('span', { id: 'receiver' }),
    'state:',
    e.createElement('span', { id: 'increase' }, ' + '),
    e.createElement('span', { id: 'decrease' }, ' - '),
    e.createElement('input', { id: 'input3', type: 'text' }),
    e.createElement('span', { id: 'count' }),
    e.createElement('span', { id: 'hello' }),
  );
};
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
***************************************************************************** */ function _(
  e,
  t,
  n,
  r,
) {
  var i,
    o = arguments.length,
    c =
      o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    c = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (i = e[a]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, n, c) : i(t, n)) || c);
  return o > 3 && c && Object.defineProperty(t, n, c), c;
}
function S(e) {
  return function(t) {
    t.isTestable = e;
  };
}
var w = function e() {
  h(this, e);
};
w = _([S(!0)], w);
var O = function e() {
  h(this, e);
};
O = _([S(!1)], O);
var k = function() {
  return i(function() {}, []), e.createElement('div', { className: '' });
};
!(function() {
  var e = function(e, t, n, r, i, o, c, a, s, u, l, m, f, d, p, h) {
    this.elements = window.Float32Array ? new Float32Array(16) : [];
    var v = this.elements;
    (v[0] = void 0 !== e ? e : 1),
      (v[4] = t || 0),
      (v[8] = n || 0),
      (v[12] = r || 0),
      (v[1] = i || 0),
      (v[5] = void 0 !== o ? o : 1),
      (v[9] = c || 0),
      (v[13] = a || 0),
      (v[2] = s || 0),
      (v[6] = u || 0),
      (v[10] = void 0 !== l ? l : 1),
      (v[14] = m || 0),
      (v[3] = f || 0),
      (v[7] = d || 0),
      (v[11] = p || 0),
      (v[15] = void 0 !== h ? h : 1);
  };
  function t(e, t, r) {
    for (var i = 0, o = t.length; i < o; i++) {
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
      set: function(e, t, n, r, i, o, c, a, s, u, l, m, f, d, p, h) {
        var v = this.elements;
        return (
          (v[0] = e),
          (v[4] = t),
          (v[8] = n),
          (v[12] = r),
          (v[1] = i),
          (v[5] = o),
          (v[9] = c),
          (v[13] = a),
          (v[2] = s),
          (v[6] = u),
          (v[10] = l),
          (v[14] = m),
          (v[3] = f),
          (v[7] = d),
          (v[11] = p),
          (v[15] = h),
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
          o = n[4],
          c = n[8],
          a = n[12],
          s = n[1],
          u = n[5],
          l = n[9],
          m = n[13],
          f = n[2],
          d = n[6],
          p = n[10],
          h = n[14],
          v = n[3],
          b = n[7],
          y = n[11],
          E = n[15],
          g = t[0],
          T = t[1],
          x = t[2],
          M = t[3],
          _ = t[4],
          S = t[5],
          w = t[6],
          O = t[7],
          k = t[8],
          D = t[9],
          j = t[10],
          A = t[11],
          C = t[12],
          X = t[13],
          Y = t[14],
          N = t[15];
        return (
          (r[0] = i * g + o * _ + c * k + a * C),
          (r[4] = i * T + o * S + c * D + a * X),
          (r[8] = i * x + o * w + c * j + a * Y),
          (r[12] = i * M + o * O + c * A + a * N),
          (r[1] = s * g + u * _ + l * k + m * C),
          (r[5] = s * T + u * S + l * D + m * X),
          (r[9] = s * x + u * w + l * j + m * Y),
          (r[13] = s * M + u * O + l * A + m * N),
          (r[2] = f * g + d * _ + p * k + h * C),
          (r[6] = f * T + d * S + p * D + h * X),
          (r[10] = f * x + d * w + p * j + h * Y),
          (r[14] = f * M + d * O + p * A + h * N),
          (r[3] = v * g + b * _ + y * k + E * C),
          (r[7] = v * T + b * S + y * D + E * X),
          (r[11] = v * x + b * w + y * j + E * Y),
          (r[15] = v * M + b * O + y * A + E * N),
          this
        );
      },
      _rounded: function(e, t) {
        return (t = Math.pow(10, t || 15)), Math.round(e * t) / t;
      },
      appendTransform: function(t, n, r, i, o, c, a, s, u, l, m, f, d, p) {
        var h = a * e.DEG_TO_RAD,
          v = this._rounded(Math.cos(h)),
          b = this._rounded(Math.sin(h)),
          y = s * e.DEG_TO_RAD,
          E = this._rounded(Math.cos(y)),
          g = this._rounded(Math.sin(y)),
          T = u * e.DEG_TO_RAD,
          x = this._rounded(Math.cos(-1 * T)),
          M = this._rounded(Math.sin(-1 * T));
        return (
          this.multiplyMatrices(this, [
            1,
            0,
            0,
            t,
            0,
            v,
            b,
            n,
            0,
            -b,
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
            g,
            0,
            0,
            1,
            0,
            0,
            -g,
            0,
            E,
            0,
            0,
            0,
            0,
            1,
          ]),
          this.multiplyMatrices(this, [
            x * i,
            M * o,
            0,
            0,
            -M * i,
            x * o,
            0,
            0,
            0,
            0,
            1 * c,
            0,
            0,
            0,
            0,
            1,
          ]),
          (l || m) &&
            this.multiplyMatrices(this, [
              this._rounded(Math.cos(l * e.DEG_TO_RAD)),
              this._rounded(Math.sin(l * e.DEG_TO_RAD)),
              0,
              0,
              -1 * this._rounded(Math.sin(m * e.DEG_TO_RAD)),
              this._rounded(Math.cos(m * e.DEG_TO_RAD)),
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
          (f || d || p) &&
            ((this.elements[12] -=
              f * this.elements[0] +
              d * this.elements[4] +
              p * this.elements[8]),
            (this.elements[13] -=
              f * this.elements[1] +
              d * this.elements[5] +
              p * this.elements[9]),
            (this.elements[14] -=
              f * this.elements[2] +
              d * this.elements[6] +
              p * this.elements[10])),
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
var D = function() {
  return (
    i(function() {
      var e = 1,
        t = document.getElementById('pinchRotateImg');
      window.Transform(t),
        new u(t, {
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
    e.createElement(
      'div',
      { className: '' },
      e.createElement('img', {
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
};
export {
  D as AlloyFingerTest,
  f as Bobo,
  k as DecoratorTest,
  M as DesignMode,
  l as Foo,
  x as Menu,
  p as TmButton,
};
