'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react'),
  t = require('umi'),
  n = require('antd'),
  a = require('axios'),
  r = require('classnames');
function o(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var i = o(e),
  l = o(a),
  c = o(r),
  s = function(e) {
    return i.default.createElement(
      'div',
      { className: '' },
      i.default.createElement(n.Button, null, e.children),
    );
  };
function d(e, t, n, a, r, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(a, r);
}
function f(e) {
  return function() {
    var t = this,
      n = arguments;
    return new Promise(function(a, r) {
      var o = e.apply(t, n);
      function i(e) {
        d(o, a, r, i, l, 'next', e);
      }
      function l(e) {
        d(o, a, r, i, l, 'throw', e);
      }
      i(void 0);
    });
  };
}
function u(e, t, n) {
  return (
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
function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? m(Object(n), !0).forEach(function(t) {
          u(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : m(Object(n)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function g(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
        return;
      var n = [],
        a = !0,
        r = !1,
        o = void 0;
      try {
        for (
          var i, l = e[Symbol.iterator]();
          !(a = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
          a = !0
        );
      } catch (e) {
        (r = !0), (o = e);
      } finally {
        try {
          a || null == l.return || l.return();
        } finally {
          if (r) throw o;
        }
      }
      return n;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ('string' == typeof e) return h(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      'Object' === n && e.constructor && (n = e.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(e);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return h(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function h(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function b(e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && 'undefined' != typeof document) {
    var a = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style');
    (r.type = 'text/css'),
      'top' === n && a.firstChild
        ? a.insertBefore(r, a.firstChild)
        : a.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = e)
        : r.appendChild(document.createTextNode(e));
  }
}
b(
  '.trialos4_header {\n  height: 26px;\n  background: #f6f7f8;\n  box-shadow: 0px 1px 0px 0px #edeff0;\n  width: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.trialos4_header .header-content-width-box {\n  margin: 0 auto;\n  margin-top: -2px;\n  width: 1200px;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.trialos4_header .header-content-width-box .header-left .left-item {\n  cursor: pointer;\n  font-size: 12px;\n  font-family: MicrosoftYaHei;\n  line-height: 18px;\n  color: #82868e;\n}\n.trialos4_header .header-content-width-box .header-left .left-item1 {\n  color: #82868e;\n}\n.trialos4_header .header-content-width-box .header-left .left-item2 {\n  padding-left: 6px;\n  color: #0a47ed;\n}\n.trialos4_header .header-content-width-box .header-right .right-item {\n  cursor: pointer;\n  font-size: 12px;\n  font-family: MicrosoftYaHei;\n  color: #82868e;\n  line-height: 14px;\n}\n.trialos4_header .header-content-width-box .header-right .right-item .header-icon {\n  width: 14px;\n  vertical-align: middle;\n  margin-top: -4px;\n}\n.trialos4_header .header-content-width-box .header-right .right-item:last-child {\n  margin-left: 20px;\n}\n.user-global-info-popover {\n  padding-top: 20px;\n  width: 252px;\n  position: relative;\n  padding-bottom: calc(54px * 2 + 12px);\n}\n.user-global-info-popover .user-base-info {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.user-global-info-popover .user-base-info .info-right {\n  margin-left: 12px;\n}\n.user-global-info-popover .user-base-info .info-right .info-name {\n  font-size: 16px;\n  font-family: PingFangSC-Semibold, PingFang SC;\n  font-weight: 600;\n  color: #000000;\n  line-height: 26px;\n}\n.user-global-info-popover .user-base-info .info-right .info-score {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  line-height: 22px;\n}\n.user-global-info-popover .user-base-info .info-right .info-score .score-title {\n  color: #000000;\n  margin-bottom: 4px;\n}\n.user-global-info-popover .user-base-info .info-right .info-score .score-number {\n  color: #0a47ed;\n  font-weight: 500;\n}\n.user-global-info-popover .user-func-row-box {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.user-global-info-popover .user-func-row-box .func-item {\n  cursor: pointer;\n  width: 74px;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.user-global-info-popover .user-func-row-box .func-item .func-icon {\n  width: 20px;\n}\n.user-global-info-popover .user-func-row-box .func-item .func-text {\n  margin-top: 4px;\n  text-align: center;\n  width: 56px;\n  height: 22px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 22px;\n}\n.user-global-info-popover .func-list-box {\n  position: absolute;\n  bottom: -12px;\n  left: -16px;\n  width: 284px;\n}\n.user-global-info-popover .func-list-box .fun-row-item {\n  padding: 0 24px;\n  cursor: pointer;\n  height: 54px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #edeff0;\n}\n.user-global-info-popover .func-list-box .fun-row-item:last-child {\n  border-bottom: 1px solid #edeff0;\n}\n.user-global-info-popover .func-list-box .fun-row-item .title {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 22px;\n}\n.user-global-info-popover .func-list-box .fun-row-item .right-icon {\n  color: #c5cbd0;\n}\n.app-global-download-popover {\n  width: 128px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.app-global-download-popover .big-title {\n  font-size: 14px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #000000;\n  line-height: 20px;\n  margin-top: 4px;\n}\n.app-global-download-popover .qrcode-img {\n  margin-top: 16px;\n  margin-bottom: 8px;\n  width: 116px;\n}\n.weixin-global-download-popover {\n  width: 252px;\n  padding: 14px;\n  display: flex;\n  justify-content: space-between;\n}\n.weixin-global-download-popover .pooover-block {\n  width: 98px;\n}\n.weixin-global-download-popover .pooover-block .big-title {\n  width: 98px;\n  text-align: center;\n  font-size: 14px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #000000;\n  line-height: 20px;\n  margin-bottom: 16px;\n}\n.weixin-global-download-popover .pooover-block .qrcode-img {\n  width: 98px;\n}\n.weixin-global-binded-popover .binded-header {\n  width: 252px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-bottom: 1px solid #edeff0;\n  height: 48px;\n  padding-bottom: 16px;\n}\n.weixin-global-binded-popover .binded-header .header-left {\n  width: 50%;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding-right: 24px;\n  text-align: right;\n}\n.weixin-global-binded-popover .binded-header .header-right {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.weixin-global-binded-popover .binded-header .header-right .user-name {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #0a47ed;\n  line-height: 22px;\n}\n.weixin-global-binded-popover .binded-header .header-right .right-icon {\n  font-size: 16px;\n  color: #c5cbd0;\n}\n.weixin-global-binded-popover .binded-content {\n  width: 252px;\n  display: flex;\n  margin-top: 14px;\n  justify-content: flex-start;\n}\n.weixin-global-binded-popover .binded-content .pooover-block {\n  width: 50%;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding-right: 24px;\n}\n.weixin-global-binded-popover .binded-content .pooover-block .big-title {\n  margin-top: 4px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 20px;\n  text-align: right;\n}\n.weixin-global-binded-popover .binded-content .pooover-block .sub-title {\n  margin-top: 16px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 20px;\n  text-align: right;\n}\n.weixin-global-binded-popover .binded-content .qrcode-img {\n  width: 100px;\n}\n',
);
var v = l.default.CancelToken.source(),
  x = function() {
    return (
      'undefined' != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
    );
  },
  w = {
    310: { msg: '无session信息!', path: '/403' },
    405: { msg: 'session过期', path: '/403' },
    406: { msg: '用户已在其他地方登陆!!', path: '/403' },
    506: { msg: '系统其它异常错误!', path: '/500' },
    407: { msg: '系统其它异常错误!', path: '/' },
  };
function E(e) {
  var t = {
    headers: p(
      {},
      {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json;version=3.0;compress=false;',
      },
    ),
    timeout: 5e5,
  };
  '[object Object]' === Object.prototype.toString.call(e) &&
    (t = p(p({}, t), e)),
    '[object String]' === Object.prototype.toString.call(e) &&
      (t = p(p({}, t), {}, { baseURL: e }));
  var n = l.default.create(t);
  return (
    n.interceptors.request.use(
      function(e) {
        if (x()) {
          var t =
              JSON.parse(
                sessionStorage.getItem('sso_loginInfo') ||
                  sessionStorage.getItem('live_sso_loginInfo') ||
                  '{}',
              ) || {},
            n = (t.tenantId, t.userId, localStorage.getItem('sso_loginInfo'));
          n = (n && JSON.parse(n).data) || {};
          e.headers = p(p({}, e.headers), {
            'content-type': 'application/json',
          });
        } else {
          var a, r, o, i, l, c, s, d;
          (e.headers = p(p({}, e.headers), {})),
            (e.baseURL = ''
              .concat(
                null === (a = global.ssr) ||
                  void 0 === a ||
                  null === (r = a.location) ||
                  void 0 === r
                  ? void 0
                  : r.protocol,
                '//',
              )
              .concat(
                null === (o = global.ssr) ||
                  void 0 === o ||
                  null === (i = o.location) ||
                  void 0 === i
                  ? void 0
                  : i.host,
              )
              .concat(e.baseURL)),
            (e.headers.cookie =
              (null === (l = global) ||
              void 0 === l ||
              null === (c = l.ssr) ||
              void 0 === c ||
              null === (s = c.context) ||
              void 0 === s ||
              null === (d = s.req) ||
              void 0 === d
                ? void 0
                : d.cookie) || null);
        }
        return e;
      },
      function(e) {
        return Promise.reject(e);
      },
    ),
    n.interceptors.response.use(
      function(e) {
        if (
          (x() ||
            (e.headers['set-cookie'] &&
              global.ssr.context.response['set-cookie'].push(
                e.headers['set-cookie'],
              )),
          200 === e.status)
        ) {
          var t,
            n,
            a = e.data,
            r = (null == a ? void 0 : a.errors) || [];
          if (a.success) return a.data;
          if ('200' == a.Code) return a.Data;
          if (a.Code && '200' != a.Code) {
            var o = { message: a.Message, code: a.Code };
            r.push(o);
          }
          if (Array.isArray(r) && r.length) {
            var i = r[0],
              l = e.config.errorNotice || {},
              c = p(p({}, w), l);
            if (((t = i.message), (n = i.code) in c)) {
              var s;
              v.cancel();
              var d = c[n].msg;
              return (null == e || null === (s = e.config) || void 0 === s
              ? void 0
              : s.message)
                ? (e.config.message.error(d, 3, function() {}),
                  void setTimeout(function() {}, 1500))
                : void 0;
            }
            return Promise.reject({ message: t, code: n });
          }
        }
        return e;
      },
      function(e) {
        var t = '网络错误 稍后再试';
        if (!e.__CANCEL__)
          return e
            ? Promise.reject({ message: e.message || t, code: null })
            : Promise.reject({ message: t, code: null });
      },
    ),
    n
  );
}
var y = E({}),
  N =
    (E({}),
    E({ baseURL: '/api/live-service' }),
    E({ baseURL: '/api/invoice-service' }),
    E({ baseURL: '/api/csp-service' }),
    E({ baseURL: '/api/sso-web/sso' })),
  S = E({ baseURL: '/api/master-data-service/' }),
  k = (E('/api/ucenter-java'), N),
  _ =
    (E('/api/master-data-service-refactor/'),
    E('/api/master-recommend-service/'),
    E('/api/im-service/'),
    E('/api/tms-client/api/'),
    E('/api/omp-service/'),
    E('/api/site-web/'),
    E('/'),
    E('/api/csp-service/'),
    E('/api/eventlake-web/'),
    E('/api/eventlake-calendar/'),
    E('/api/eventlake-web/'),
    E('/api/social-point-service/')),
  C = (E('/api/faq-service/'), E('/api/trialos-service/')),
  I =
    (E('/api/lite-site-service'),
    E('/api/metrics-service'),
    E('/api/live-service'),
    E('/api/live-service'),
    E('/api/tms-client/api')),
  P = E('/api/third-service/'),
  R = l.default.CancelToken.source(),
  j = function() {
    return (
      'undefined' != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
    );
  },
  M = {
    310: { msg: '无session信息!', path: '/403' },
    405: { msg: 'session过期', path: '/403' },
    406: { msg: '用户已在其他地方登陆!!', path: '/403' },
    506: { msg: '系统其它异常错误!', path: '/500' },
    407: { msg: '系统其它异常错误!', path: '/' },
  };
function F(e) {
  var t = {
    headers: p(
      {},
      {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json;version=3.0;compress=false;',
      },
    ),
    timeout: 5e5,
  };
  '[object Object]' === Object.prototype.toString.call(e) &&
    (t = p(p({}, t), e)),
    '[object String]' === Object.prototype.toString.call(e) &&
      (t = p(p({}, t), {}, { baseURL: e }));
  var n = l.default.create(t);
  return (
    n.interceptors.request.use(
      function(e) {
        if (j()) {
          var t =
              JSON.parse(
                sessionStorage.getItem('sso_loginInfo') ||
                  sessionStorage.getItem('live_sso_loginInfo') ||
                  '{}',
              ) || {},
            n = (t.tenantId, t.userId, localStorage.getItem('sso_loginInfo'));
          n = (n && JSON.parse(n).data) || {};
          e.headers = p(p({}, e.headers), {
            'content-type': 'application/json',
          });
        } else {
          var a, r, o, i, l, c, s, d;
          (e.headers = p(p({}, e.headers), {})),
            (e.baseURL = ''
              .concat(
                null === (a = global.ssr) ||
                  void 0 === a ||
                  null === (r = a.location) ||
                  void 0 === r
                  ? void 0
                  : r.protocol,
                '//',
              )
              .concat(
                null === (o = global.ssr) ||
                  void 0 === o ||
                  null === (i = o.location) ||
                  void 0 === i
                  ? void 0
                  : i.host,
              )
              .concat(e.baseURL)),
            (e.headers.cookie =
              (null === (l = global) ||
              void 0 === l ||
              null === (c = l.ssr) ||
              void 0 === c ||
              null === (s = c.context) ||
              void 0 === s ||
              null === (d = s.req) ||
              void 0 === d
                ? void 0
                : d.cookie) || null);
        }
        return e;
      },
      function(e) {
        return Promise.reject(e);
      },
    ),
    n.interceptors.response.use(
      function(e) {
        if (
          (j() ||
            (e.headers['set-cookie'] &&
              global.ssr.context.response['set-cookie'].push(
                e.headers['set-cookie'],
              )),
          200 === e.status)
        ) {
          var t,
            n,
            a = e.data,
            r = (null == a ? void 0 : a.errors) || [];
          if (a.success) return a.data;
          if ('200' == a.Code) return a.Data;
          if (a.Code && '200' != a.Code) {
            var o = { message: a.Message, code: a.Code };
            r.push(o);
          }
          if (Array.isArray(r) && r.length) {
            var i = r[0],
              l = e.config.errorNotice || {},
              c = p(p({}, M), l);
            if (((t = i.message), (n = i.code) in c)) {
              var s;
              R.cancel();
              var d = c[n].msg;
              return (null == e || null === (s = e.config) || void 0 === s
              ? void 0
              : s.message)
                ? (e.config.message.error(d, 3, function() {}),
                  void setTimeout(function() {}, 1500))
                : void 0;
            }
            return Promise.reject({ message: t, code: n });
          }
        }
        return e;
      },
      function(e) {
        var t = '网络错误 稍后再试';
        if (!e.__CANCEL__)
          return e
            ? Promise.reject({ message: e.message || t, code: null })
            : Promise.reject({ message: t, code: null });
      },
    ),
    n
  );
}
var O = F({});
F({}),
  F({ baseURL: '/api/live-service' }),
  F({ baseURL: '/api/invoice-service' }),
  F({ baseURL: '/api/csp-service' }),
  F({ baseURL: '/api/sso-web/sso' }),
  F({ baseURL: '/api/master-data-service/' }),
  F('/api/ucenter-java'),
  F('/api/master-data-service-refactor/'),
  F('/api/master-recommend-service/'),
  F('/api/im-service/'),
  F('/api/tms-client/api/'),
  F('/api/omp-service/'),
  F('/api/site-web/'),
  F('/'),
  F('/api/csp-service/'),
  F('/api/eventlake-web/'),
  F('/api/eventlake-calendar/'),
  F('/api/eventlake-web/'),
  F('/api/social-point-service/'),
  F('/api/faq-service/'),
  F('/api/trialos-service/'),
  F('/api/lite-site-service'),
  F('/api/metrics-service'),
  F('/api/live-service'),
  F('/api/live-service'),
  F('/api/tms-client/api'),
  F('/api/third-service/');
function A() {
  var e = localStorage.getItem('sso_loginAccountInfo'),
    t = localStorage.getItem('openIeMode'),
    n = localStorage.getItem('hintEbmViewerInstall'),
    a = localStorage.getItem('__thumb__'),
    r = (function() {
      for (var e = localStorage, t = {}, n = 0; n < e.length; n++) {
        var a = e.key(n);
        a.indexOf('advent_show_info_') > -1 && (t[a] = e.getItem(a));
      }
      return t;
    })();
  localStorage.clear(),
    sessionStorage.clear(),
    (function(e) {
      var t = e || {};
      for (var n in t) localStorage.setItem(n, t[n]);
    })(r),
    localStorage.setItem('sso_loginAccountInfo', e),
    t && localStorage.setItem('openIeMode', t),
    n && localStorage.setItem('hintEbmViewerInstall', n),
    a && localStorage.setItem('__thumb__', a);
  var o = document.cookie.match(/[^ =;]+(?=\=)/g),
    i = '=0;path=/;expires='.concat(new Date(0).toUTCString());
  if (
    (/(\.[a-z0-9]+\.(cn|com))$/.test(location.hostname) &&
      (i += ';domain='.concat(RegExp.$1)),
    o)
  )
    for (var l = o.length; l--; )
      o[l].indexOf('advent_show_info_') > -1 ||
        ((document.cookie = ''
          .concat(o[l], '=0;path=/csp;expires=')
          .concat(new Date(0).toUTCString())),
        (document.cookie = o[l] + i));
}
var z = function(e) {
    var t,
      n = new RegExp('(^| )'.concat(e, '=([^;]*)(;|$)'));
    return (t = document.cookie.match(n)) ? unescape(t[2]) : null;
  },
  L = (function() {
    var e = f(
      regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (z('token')) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt('return', !1);
                case 3:
                  return (
                    (e.prev = 3),
                    (e.next = 6),
                    O.get(
                      '/api/sso-web/sso/sso/getAccountInfoByToken?r='.concat(
                        String(Math.random()).slice(2),
                      ),
                    )
                  );
                case 6:
                  if (
                    'kick' !== (null == (t = e.sent) ? void 0 : t.tokenStatus)
                  ) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt('return', !1);
                case 9:
                  return e.abrupt('return', !0);
                case 12:
                  return (
                    (e.prev = 12), (e.t0 = e.catch(3)), e.abrupt('return', !1)
                  );
                case 15:
                case 'end':
                  return e.stop();
              }
          },
          e,
          null,
          [[3, 12]],
        );
      }),
    );
    return function() {
      return e.apply(this, arguments);
    };
  })(),
  U = function(e) {
    var t = document.createElement('a');
    t.setAttribute('href', e), t.setAttribute('target', '_blank');
    var n = Math.random();
    t.setAttribute('id', n),
      document.getElementById(n) || document.body.appendChild(t),
      t.click();
  },
  T = !1;
b(
  '.trialos4Searchbar .search-bar-content-box {\n  width: 1200px;\n  margin: 0 auto;\n  padding: 0 52px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.trialos4Searchbar .search-bar-content-box .company-logo {\n  width: 134px;\n  cursor: pointer;\n}\n.trialos4Searchbar .search-bar-content-box .search-box {\n  width: 634px;\n}\n.trialos4Searchbar .search-bar-content-box .search-box .ant-input {\n  background: rgba(10, 71, 237, 0.04) !important;\n  font-size: 14px;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box .shop-chart-icon {\n  width: 18px;\n  vertical-align: middle;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box .cart-name {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 22px;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box .goods-count {\n  font-size: 11px;\n  font-family: ArialMT;\n  color: #ffffff;\n  line-height: 12px;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .workbench-item {\n  cursor: pointer;\n  margin-left: 34px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .workbench-item .my-workbench-icon {\n  width: 18px;\n  vertical-align: middle;\n}\n.trialos4Searchbar .ant-input {\n  border: 1px solid #f5f8fe !important;\n}\n.trialos4Searchbar .ant-btn-primary {\n  color: #fff;\n  background-color: #0a47ed;\n  border-color: #0a47ed;\n}\n.trialos4Searchbar .ant-input:focus {\n  outline: 0 !important;\n  -webkit-box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2) !important;\n  box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2) !important;\n}\n',
);
n.Input.Search;
b(
  '.trialos4Navbar .nav-bar-content-box {\n  width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 38px;\n}\n.trialos4Navbar .nav-bar-content-box .nav-left {\n  width: 240px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: inherit;\n  background: #0033d7;\n  font-size: 14px;\n  font-family: PingFangSC-Semibold, PingFang SC;\n  font-weight: 600;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  padding-left: 18px;\n  cursor: pointer;\n  position: relative;\n}\n.trialos4Navbar .nav-bar-content-box .nav-left .rearch-title {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: inherit;\n}\n.trialos4Navbar .nav-bar-content-box .nav-left .rearch-content {\n  position: absolute;\n  left: 0;\n  bottom: -410px;\n  z-index: 10;\n}\n.trialos4Navbar .nav-bar-content-box .nav-list {\n  width: 960px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  text-align: left;\n}\n.trialos4Navbar .nav-bar-content-box .nav-list .nav-item {\n  margin-left: 40px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n}\n.trialos4Navbar .nav-bar-content-box .nav-list .active-nav-item {\n  color: #0a47ed;\n}\n',
);
b(
  '.face-left-area--component {\n  width: 240px;\n}\n.face-left-area--component .face-left-header {\n  background: #0033d7;\n  height: 38px;\n}\n.face-left-area--component .face-left-content {\n  height: 410px;\n  background: #0a47ed;\n}\n.face-left-area--component .face-left-content .face-item-block {\n  border-bottom: 1px dotted #e7e7e7;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n}\n.face-left-area--component .face-left-content .face-item-block:last-child {\n  border-bottom: 0px dotted #e7e7e7;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list {\n  margin-left: 24px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-row {\n  margin-bottom: 8px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-row:last-child {\n  margin-bottom: 0px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-item {\n  font-size: 12px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 18px;\n  padding-right: 16px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-item:last-child {\n  padding-right: 0px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-left-header-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-left-header-item .title {\n  font-size: 14px;\n  font-family: PingFangSC-Semibold, PingFang SC;\n  font-weight: 600;\n  color: #ffffff;\n  line-height: 22px;\n  padding-left: 6px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-left-header-item .left-imag-icon {\n  width: 16px;\n}\n',
);
var B = function(e) {
    return i.default.createElement(
      'div',
      { className: 'face-left-header-item' },
      e.icon,
      i.default.createElement('span', { className: 'title' }, e.title),
    );
  },
  q = function(e) {
    return i.default.createElement(
      'a',
      {
        target: '_blank',
        href: '/smo?keyword='.concat(e.children),
        className: 'item-item',
      },
      e.children,
    );
  },
  D = function(n) {
    var a = t.useIntl();
    n.result, n.list;
    return (
      e.useEffect(function() {}, []),
      i.default.createElement(
        'div',
        { className: 'face-left-area--component' },
        i.default.createElement(
          'div',
          { className: 'face-left-content' },
          i.default.createElement(
            'div',
            { className: 'face-item-block' },
            i.default.createElement(B, {
              title: a.formatMessage({ id: 'trialos_1194' }),
              icon: i.default.createElement('img', {
                className: 'left-imag-icon',
                src:
                  'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/research_classify_icon2.png',
              }),
            }),
            i.default.createElement(
              'div',
              { className: 'face-item-list' },
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(q, null, '实体瘤'),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '非小细胞肺癌',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '乳腺癌',
                ),
              ),
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '淋巴瘤',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '肝细胞癌',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '前列腺癌',
                ),
              ),
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '白血病',
                ),
                i.default.createElement(q, { className: 'item-item' }, '胃癌'),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '小细胞肺癌',
                ),
              ),
            ),
          ),
          i.default.createElement(
            'div',
            { className: 'face-item-block' },
            i.default.createElement(B, {
              title: a.formatMessage({ id: 'trialos_1195' }),
              icon: i.default.createElement('img', {
                className: 'left-imag-icon',
                src:
                  'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/research_classify_icon1.png',
              }),
            }),
            i.default.createElement(
              'div',
              { className: 'face-item-list' },
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '糖尿病',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '高血压',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '乙型肝炎',
                ),
              ),
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '类风湿关节炎',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '消化道溃疡',
                ),
              ),
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '银屑病',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '骨质疏松症',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '脑卒中',
                ),
              ),
            ),
          ),
          i.default.createElement(
            'div',
            { className: 'face-item-block' },
            i.default.createElement(B, {
              title: a.formatMessage({ id: 'trialos_1196' }),
              icon: i.default.createElement('img', {
                className: 'left-imag-icon',
                src:
                  'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/research_classify_icon1.png',
              }),
            }),
            i.default.createElement(
              'div',
              { className: 'face-item-list' },
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '抗感染',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '流行性感冒',
                ),
                i.default.createElement(q, { className: 'item-item' }, '镇痛'),
              ),
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(q, { className: 'item-item' }, '哮喘'),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '抑郁症',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '神经分裂',
                ),
                i.default.createElement(q, { className: 'item-item' }, '癫痫'),
              ),
              i.default.createElement(
                'div',
                { className: 'item-row' },
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '血栓栓塞性疾病',
                ),
                i.default.createElement(
                  q,
                  { className: 'item-item' },
                  '高胆固醇血症',
                ),
              ),
            ),
          ),
        ),
      )
    );
  };
D.getInitialProps = (function() {
  var e = f(
    regeneratorRuntime.mark(function e(t) {
      return regeneratorRuntime.wrap(function(e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              t.store, t.isServer, t.history, t.match, t.route;
            case 1:
            case 'end':
              return e.stop();
          }
      }, e);
    }),
  );
  return function(t) {
    return e.apply(this, arguments);
  };
})();
n.Input.Search;
var J = null;
b(
  '.trialos4Footer {\n  background: #121212;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.trialos4Footer .footer-content-width-box {\n  width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 32px 0;\n}\n.trialos4Footer .footer-content-width-box .footer-left .left-text-item {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 24px;\n  margin-bottom: 16px;\n}\n.trialos4Footer .footer-content-width-box .footer-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box {\n  overflow: hidden;\n  display: flex;\n  justify-content: flex-end;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .appstore_img_btn {\n  cursor: pointer;\n  width: 130px;\n  height: 60px;\n  background: #000000;\n  border-radius: 8px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .appstore_img_btn:last-child {\n  margin-left: 16px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .download-btn-item {\n  cursor: pointer;\n  margin-left: 16px;\n  float: right;\n  width: 130px;\n  height: 60px;\n  background: #000000;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .download-btn-item .footer-icon {\n  width: 20px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .download-btn-item .download-text {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 22px;\n  margin-left: 14px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-right-text {\n  font-size: 12px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #7f878e;\n  line-height: 18px;\n  margin-top: 32px;\n  text-align: right;\n}\n',
);
var H = function(e) {
  var t = e.children;
  return i.default.createElement('button', null, t);
};
H.defaultProps = { disabled: !1, btnType: 'default' };
b('');
var W = e.createContext({ index: '0' }),
  $ = function(t) {
    var n = t.defaultIndex,
      a = t.onSelect,
      r = t.mode,
      o = t.defaultOpenSubMenus,
      l = t.children,
      c = g(e.useState(n), 2),
      s = c[0],
      d = c[1],
      f = {
        index: s || '0',
        onSelect: function(e) {
          d(e), a && a(e);
        },
        mode: r,
        defaultOpenSubMenus: o,
      };
    return i.default.createElement(
      'ul',
      null,
      i.default.createElement(
        W.Provider,
        { value: f },
        i.default.Children.map(l, function(e, t) {
          var n = e,
            a = n.type.displayName;
          if ('MenuItem' === a || 'SubMenu' === a)
            return i.default.cloneElement(n, { index: t.toString() });
        }),
      ),
    );
  };
$.displayName = 'MenuItem';
var Y = function(t) {
  var n = t.children,
    a = t.disabled,
    r = t.index,
    o = e.useContext(W);
  return i.default.createElement(
    'li',
    {
      onClick: function() {
        o.onSelect && !a && 'string' == typeof r && o.onSelect(r);
      },
    },
    n,
  );
};
Y.displayName = 'MenuItem';
var G = function(e) {
  var t,
    n = e.index,
    a = e.title,
    r = e.children;
  e.className;
  return i.default.createElement(
    'li',
    { key: n },
    i.default.createElement('div', { className: '' }, a),
    ((t = i.default.Children.map(r, function(e, t) {
      var a = e;
      if ('MenuItem' === a.type.displayName)
        return i.default.cloneElement(a, {
          index: ''.concat(n, '-').concat(t),
        });
    })),
    i.default.createElement(
      'div',
      null,
      i.default.createElement('ul', null, t),
    )),
  );
};
G.displayName = 'SubMenu';
var V = $;
(V.Item = Y),
  (V.SubMenu = G),
  (exports.Bobo = function() {
    return i.default.createElement(
      'div',
      { className: '' },
      i.default.createElement(s, null),
    );
  }),
  (exports.FaceLeft = D),
  (exports.Foo = function(e) {
    var t = e.title;
    return i.default.createElement('h1', null, t);
  }),
  (exports.IndexFooter = function(n) {
    n.result, n.list;
    var a = t.useIntl();
    return (
      e.useEffect(function() {}, []),
      i.default.createElement(
        'div',
        { className: 'footer1111' },
        i.default.createElement(
          'div',
          { className: 'footer2222' },
          i.default.createElement(
            'div',
            { className: 'trialos4Footer' },
            i.default.createElement(
              'div',
              { className: 'footer-content-width-box' },
              i.default.createElement(
                'div',
                { className: 'footer-left' },
                i.default.createElement(
                  'div',
                  { className: 'left-text-item' },
                  a.formatMessage({ id: 'trialos_1097' }),
                  ':',
                ),
                i.default.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'http://www.chinadrugtrials.org.cn/index.html',
                    className: 'left-text-item',
                  },
                  a.formatMessage({ id: 'trialos_1101' }),
                ),
                ' ',
                i.default.createElement('br', null),
                i.default.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'http://www.cdr-adr.org.cn/',
                    className: 'left-text-item',
                  },
                  a.formatMessage({ id: 'trialos_1100' }),
                ),
                ' ',
                i.default.createElement('br', null),
                i.default.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'https://www.cpa.org.cn/',
                    className: 'left-text-item',
                  },
                  a.formatMessage({ id: 'trialos_1099' }),
                ),
                ' ',
                i.default.createElement('br', null),
                i.default.createElement('br', null),
                i.default.createElement(
                  'a',
                  { className: 'left-text-item' },
                  a.formatMessage({ id: 'trialos_1240' }),
                ),
              ),
              i.default.createElement(
                'div',
                { className: 'footer-right' },
                i.default.createElement(
                  'div',
                  { className: 'footer-download-box' },
                  i.default.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: 'https://apps.apple.com/cn/app/id1494271460',
                    },
                    i.default.createElement('img', {
                      className: 'appstore_img_btn',
                      src:
                        'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/appstore_iphone.png',
                      alt: '',
                    }),
                  ),
                  i.default.createElement(
                    'a',
                    { target: '_blank', href: 'http://app.mobilemd.cn/g4kd' },
                    i.default.createElement('img', {
                      className: 'appstore_img_btn',
                      src:
                        'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/appstore_android.png',
                      alt: '',
                    }),
                  ),
                ),
                i.default.createElement(
                  'div',
                  { className: 'footer-right-text' },
                  'COPYRIGHT ©2021',
                  a.formatMessage({ id: 'trialos_1102' }),
                  '浙ICP备13033914号 浙公网安备 33049802000047',
                ),
              ),
            ),
          ),
        ),
      )
    );
  }),
  (exports.IndexHeader = function(a) {
    a.result, a.list;
    var r = t.useIntl(),
      o = 'zhCN',
      l = g(e.useState(o), 2),
      c = l[0],
      s = l[1],
      d = g(e.useState(!1), 2),
      u = d[0],
      m = d[1],
      p = g(e.useState({}), 2),
      h = p[0],
      b = p[1],
      v = g(e.useState(''), 2),
      x = v[0],
      w = v[1],
      E = g(e.useState({}), 2),
      N = (E[0], E[1]),
      R = g(e.useState(''), 2),
      j = R[0],
      M = R[1],
      F = g(e.useState({}), 2),
      O = (F[0], F[1], g(e.useState(''), 2)),
      L = (O[0], O[1], g(e.useState({}), 2)),
      U = (L[0], L[1], g(e.useState(''), 2)),
      B = (U[0], U[1]),
      q = g(e.useState(''), 2),
      D = (q[0], q[1], g(e.useState(0), 2)),
      J = D[0],
      H = D[1],
      W = g(e.useState(0), 2),
      $ = W[0],
      Y = W[1],
      G = g(e.useState(''), 2),
      V = (G[0], G[1], g(e.useState(''), 2)),
      Q = (V[0], V[1], g(e.useState(''), 2)),
      K = (Q[0], Q[1], g(e.useState(''), 2)),
      X = (K[0], K[1], g(e.useState({}), 2)),
      Z = X[0],
      ee = X[1],
      te = g(e.useState(null), 2),
      ne = te[0],
      ae = te[1],
      re = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (document.hidden) {
                        e.next = 24;
                        break;
                      }
                      if (((e.prev = 1), z('token'))) {
                        e.next = 6;
                        break;
                      }
                      return T && location.reload(), e.abrupt('return');
                    case 6:
                      return (
                        (e.next = 8),
                        y.get(
                          '/api/sso-web/sso/sso/getAccountInfoByToken?r='.concat(
                            String(Math.random()).slice(2),
                          ),
                        )
                      );
                    case 8:
                      if (
                        'kick' !==
                        (null == (t = e.sent) ? void 0 : t.tokenStatus)
                      ) {
                        e.next = 16;
                        break;
                      }
                      if (!T) {
                        e.next = 16;
                        break;
                      }
                      return location.reload(), e.abrupt('return');
                    case 16:
                      T || location.reload(), (e.next = 24);
                      break;
                    case 19:
                      (e.prev = 19),
                        (e.t0 = e.catch(1)),
                        T && location.reload();
                    case 24:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 19]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      oe = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), z('token'))) {
                        e.next = 5;
                        break;
                      }
                      return (T = !1), e.abrupt('return', !1);
                    case 5:
                      return (
                        (e.next = 7),
                        y.get(
                          '/api/sso-web/sso/sso/getAccountInfoByToken?r='.concat(
                            String(Math.random()).slice(2),
                          ),
                        )
                      );
                    case 7:
                      if (
                        'kick' !==
                        (null == (t = e.sent) ? void 0 : t.tokenStatus)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (T = !1), e.abrupt('return', !1);
                    case 12:
                      (T = !0),
                        localStorage.getItem('sso_loginInfo'),
                        ce(),
                        (e.next = 20);
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(0)), (T = !1);
                    case 20:
                      return (
                        (e.prev = 20),
                        document.addEventListener('visibilitychange', re),
                        e.finish(20)
                      );
                    case 23:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 17, 20, 23]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })();
    e.useEffect(function() {
      var e,
        t,
        n =
          localStorage.getItem('sso_loginAccountInfo') &&
          (null ===
            (e = JSON.parse(localStorage.getItem('sso_loginAccountInfo'))) ||
          void 0 === e ||
          null === (t = e.selectLanguage) ||
          void 0 === t
            ? void 0
            : t.key);
      return (
        n && 'en_US' === n && s((o = 'enUS')),
        oe(),
        function() {
          document.removeEventListener('visibilitychange', re);
        }
      );
    }, []);
    var ie = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t, n, a, r;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (t =
                          localStorage.getItem('sso_loginInfo') ||
                          '{data: {}}'),
                        (t = JSON.parse(t)),
                        (n = t.data.accountId),
                        (a = { accountId: n, targetAppId: 'trialos' }),
                        (e.next = 7),
                        P.get(
                          '/wechat/getWeChatAccountInfoByAccountId?accountId='
                            .concat(a.accountId, '&targetAppId=')
                            .concat(a.targetAppId),
                          a,
                        )
                      );
                    case 7:
                      (r = e.sent), ee(r), le(), (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(0));
                    case 15:
                      return (e.prev = 15), e.finish(15);
                    case 17:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 12, 15, 17]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      le = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t, n;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (t = {}),
                        (e.next = 4),
                        C.get('/trialos/getBindWxQrCode', t)
                      );
                    case 4:
                      (n = e.sent), ae(n), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(0));
                    case 11:
                      return (e.prev = 11), e.finish(11);
                    case 13:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8, 11, 13]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      ce = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t, n;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    ie(),
                      se(),
                      de(),
                      (t = JSON.parse(
                        localStorage.getItem('sso_loginInfo') || '{}',
                      )) &&
                        t.data &&
                        ((n = {
                          CompanyName:
                            (h.personCompanyDto &&
                              h.personCompanyDto.companyName) ||
                            h.company ||
                            '',
                          Phone: h.mobile,
                          RealName: h.name,
                          UserName: h.cspAccountName,
                          UserId: t.data.accountId,
                        }),
                        sessionStorage.setItem(
                          'userCacheData',
                          JSON.stringify(n),
                        ));
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      se = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t, n, a, r, o, i, l;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t = JSON.parse(
                          localStorage.getItem('sso_loginInfo') || '{}',
                        )),
                        (n = {}),
                        (e.prev = 2),
                        !t.data)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (a = t.data.accountId),
                        (r = t.data.relCompanyId || ''),
                        (e.next = 8),
                        S.get(
                          '/person/getPersonInfoByAccountId/'
                            .concat(a, '?tenantId=')
                            .concat(r),
                          n,
                        )
                      );
                    case 8:
                      (o = e.sent) &&
                        (b((i = o).fileUrl),
                        m(!0),
                        w(i.fileUrl),
                        N(i.personCompanyDto),
                        M(i.name),
                        B(i.company));
                    case 10:
                      return (
                        JSON.parse(
                          sessionStorage.getItem('sso_loginInfo') || '{}',
                        ),
                        (e.next = 13),
                        _.get('/v1/accounts/'.concat(t.data.accountId))
                      );
                    case 13:
                      (l = e.sent), Y(l ? l.points : 0), (e.next = 19);
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(2));
                    case 19:
                      return (e.prev = 19), e.finish(19);
                    case 21:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 17, 19, 21]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      de = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t, n, a;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = JSON.parse(
                          localStorage.getItem('sso_loginInfo') || '{}',
                        )),
                        (e.prev = 1),
                        (n = { AccountId: t.data.accountId }),
                        (e.next = 5),
                        I.post('/Point/GetUserPointSumByAccountId', n)
                      );
                    case 5:
                      (a = e.sent),
                        H('number' == typeof a ? a : 0),
                        (e.next = 11);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(1));
                    case 11:
                      return (e.prev = 11), e.finish(11);
                    case 13:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 9, 11, 13]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      fe = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), k.post('sso/doLogout');
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      (e.prev = 5), (e.t0 = e.catch(0));
                    case 7:
                      return (
                        (e.prev = 7),
                        A(),
                        (t = JSON.parse(localStorage.getItem('sso_loginInfo'))),
                        t && t.data && t.data.sourceFrom,
                        location.reload(),
                        e.finish(7)
                      );
                    case 13:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 5, 7, 13]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })();
    return i.default.createElement(
      'div',
      { className: 'header111' },
      i.default.createElement(
        'div',
        { className: 'header222' },
        i.default.createElement(
          'div',
          { className: 'trialos4_header' },
          i.default.createElement(
            'div',
            { className: 'header-content-width-box' },
            i.default.createElement(
              'div',
              { className: 'header-left' },
              u
                ? i.default.createElement(
                    n.Popover,
                    {
                      placement: 'bottomLeft',
                      title: '',
                      content: i.default.createElement(
                        'div',
                        { className: 'user-global-info-popover' },
                        i.default.createElement(
                          'div',
                          { className: 'user-base-info' },
                          i.default.createElement(
                            n.Avatar,
                            {
                              style: {
                                color: '#ffffff',
                                backgroundColor: '#368BD2',
                                fontSize: '12px',
                                cursor: 'pointer',
                                marginLeft: '10px',
                              },
                              size: 48,
                              icon: 'user',
                              src: x || (null == Z ? void 0 : Z.headImageUrl),
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            !x &&
                              i.default.createElement(
                                'span',
                                null,
                                j ? (j.length > 2 ? j.slice(-2) : j) : '- -',
                              ),
                          ),
                          i.default.createElement(
                            'span',
                            { className: 'info-right' },
                            i.default.createElement(
                              'div',
                              { className: 'info-name' },
                              i.default.createElement(
                                'span',
                                null,
                                j || '- -',
                              ) || (null == Z ? void 0 : Z.nickName),
                            ),
                            i.default.createElement(
                              'div',
                              { className: 'info-score' },
                              i.default.createElement(
                                'span',
                                {
                                  className: 'score-title',
                                  onClick: function() {
                                    return window.open(
                                      ' /index/personal-center/myIntegral',
                                    );
                                  },
                                },
                                r.formatMessage({ id: 'trialos_426' }),
                                ' ',
                              ),
                              i.default.createElement(
                                'span',
                                {
                                  className: 'score-number',
                                  onClick: function() {
                                    return window.open(
                                      ' /index/personal-center/myIntegral',
                                    );
                                  },
                                },
                                $,
                              ),
                              i.default.createElement(
                                'span',
                                {
                                  className: 'score-title',
                                  style: { marginLeft: '15px' },
                                  onClick: function() {
                                    return window.open('/opencourse/studyCoin');
                                  },
                                },
                                r.formatMessage({ id: 'trialos_581' }),
                                ' ',
                              ),
                              i.default.createElement(
                                'span',
                                {
                                  className: 'score-number',
                                  onClick: function() {
                                    return window.open('/opencourse/studyCoin');
                                  },
                                },
                                J,
                              ),
                            ),
                          ),
                        ),
                        i.default.createElement(
                          'div',
                          { className: 'user-func-row-box' },
                          i.default.createElement(
                            'div',
                            {
                              className: 'func-item',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            i.default.createElement('img', {
                              className: 'func-icon',
                              src:
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/user_func1.png',
                              alt: '个人中心',
                            }),
                            i.default.createElement(
                              'div',
                              { className: 'func-text' },
                              r.formatMessage({ id: 'trialos_924' }),
                            ),
                          ),
                          i.default.createElement(
                            'div',
                            {
                              className: 'func-item',
                              onClick: function() {
                                return window.open('/index/helpHandbook');
                              },
                            },
                            i.default.createElement('img', {
                              className: 'func-icon',
                              src:
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/user_func2.png',
                              alt: '简历',
                            }),
                            i.default.createElement(
                              'div',
                              { className: 'func-text' },
                              r.formatMessage({ id: 'trialos_1031' }),
                            ),
                          ),
                          i.default.createElement(
                            'div',
                            {
                              className: 'func-item',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/myCollect',
                                );
                              },
                            },
                            i.default.createElement('img', {
                              className: 'func-icon',
                              src:
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/user_func3.png',
                              alt: '我的收藏',
                            }),
                            i.default.createElement(
                              'div',
                              { className: 'func-text' },
                              r.formatMessage({ id: 'my_collect' }),
                            ),
                          ),
                        ),
                        i.default.createElement(
                          'div',
                          { className: 'func-list-box' },
                          i.default.createElement(
                            'div',
                            {
                              className: 'fun-row-item',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            i.default.createElement(
                              'span',
                              { className: 'title' },
                              r.formatMessage({ id: 'trialos_989' }),
                            ),
                            i.default.createElement(n.Icon, {
                              className: 'right-icon',
                              type: 'right',
                            }),
                          ),
                          i.default.createElement(
                            'div',
                            { className: 'fun-row-item', onClick: fe },
                            i.default.createElement(
                              'span',
                              { className: 'title' },
                              r.formatMessage({ id: 'trialos_1033' }),
                            ),
                            i.default.createElement(n.Icon, {
                              className: 'right-icon',
                              type: 'right',
                            }),
                          ),
                        ),
                      ),
                      trigger: 'hover',
                    },
                    i.default.createElement(
                      'span',
                      { onClick: function() {} },
                      i.default.createElement(
                        'span',
                        { className: 'left-item left-item1' },
                        r.formatMessage({ id: 'say_hi' }),
                      ),
                      i.default.createElement(
                        'span',
                        { className: 'left-item left-item2' },
                        j
                          ? i.default.createElement('span', null, j || '- -')
                          : (null == Z
                            ? void 0
                            : Z.nickName)
                          ? Z.nickName
                          : ' - - ',
                      ),
                    ),
                  )
                : i.default.createElement(
                    'span',
                    {
                      onClick: function() {
                        a.goLogin && a.goLogin();
                      },
                    },
                    i.default.createElement(
                      'span',
                      { className: 'left-item left-item1' },
                      r.formatMessage({ id: 'say_hi' }),
                    ),
                    i.default.createElement('span', {
                      className: 'left-item left-item2',
                      dangerouslySetInnerHTML: {
                        __html: r
                          .formatMessage({ id: 'please_login' })
                          .replace(
                            '|',
                            '<span style="color:black">&nbsp;|&nbsp;</span>',
                          ),
                      },
                    }),
                  ),
            ),
            i.default.createElement(
              'div',
              { className: 'header-right' },
              i.default.createElement(
                n.Popover,
                {
                  placement: 'bottom',
                  title: '',
                  content: r.formatMessage({ id: 'switch_language' }),
                  trigger: 'hover',
                },
                i.default.createElement(
                  'span',
                  { className: 'right-item' },
                  i.default.createElement('img', {
                    className: 'header-icon',
                    style: { width: '20px', marginRight: '32px' },
                    src:
                      'enUS' === c
                        ? 'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/language_english_icon.png'
                        : 'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/language_chinese_icon.png',
                    alt: '英文',
                    onClick: function() {
                      var e = 'zhCN' === c ? 'enUS' : 'zhCN';
                      s(e);
                      var n = {
                          selectLanguage: {
                            key: 'zhCN' === e ? 'zh_CN' : 'en_US',
                            name: 'zhCN' === e ? '简体中文' : 'English',
                          },
                        },
                        r = 'zhCN' === e ? 'zh_CN' : 'en_US';
                      t.setLocale(r, !1),
                        localStorage.setItem(
                          'sso_loginAccountInfo',
                          JSON.stringify(n),
                        ),
                        a.toggleLocale && a.toggleLocale(e);
                    },
                  }),
                ),
              ),
              i.default.createElement(
                n.Popover,
                {
                  placement: 'bottom',
                  title: '',
                  content: i.default.createElement(
                    'div',
                    { className: 'app-global-download-popover' },
                    i.default.createElement(
                      'div',
                      { className: 'big-title' },
                      r.formatMessage({ id: 'trialos_1090' }),
                    ),
                    i.default.createElement(
                      'div',
                      { className: 'big-title' },
                      r.formatMessage({ id: 'trialos_1091' }),
                    ),
                    i.default.createElement('img', {
                      className: 'qrcode-img',
                      src:
                        'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/wenxin_gongzhnghao_qrcode.png',
                      alt: '二维码',
                    }),
                  ),
                  trigger: 'hover',
                },
                i.default.createElement(
                  'span',
                  { className: 'right-item' },
                  i.default.createElement('img', {
                    className: 'header-icon',
                    src:
                      'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/phone_icon.png',
                    alt: '',
                  }),
                  ' App',
                ),
              ),
              i.default.createElement(
                n.Popover,
                {
                  placement: 'bottomRight',
                  title: '',
                  content: i.default.createElement(
                    i.default.Fragment,
                    null,
                    (null == Z
                    ? void 0
                    : Z.openId)
                      ? i.default.createElement(
                          'div',
                          { className: 'weixin-global-binded-popover' },
                          i.default.createElement(
                            'div',
                            {
                              className: 'binded-header',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            i.default.createElement(
                              'div',
                              { className: 'header-left' },
                              r.formatMessage({ id: 'trialos_1093' }),
                              ':',
                            ),
                            i.default.createElement(
                              'div',
                              { className: 'header-right' },
                              i.default.createElement(
                                'span',
                                { className: 'user-name' },
                                (null == Z ? void 0 : Z.nickName) || ' - - ',
                              ),
                              i.default.createElement(n.Icon, {
                                className: 'right-icon',
                                type: 'right',
                              }),
                            ),
                          ),
                          i.default.createElement(
                            'div',
                            { className: 'binded-content' },
                            i.default.createElement(
                              'div',
                              { className: 'pooover-block' },
                              i.default.createElement(
                                'div',
                                { className: 'big-title' },
                                r.formatMessage({ id: 'trialos_1094' }),
                                ':',
                              ),
                              i.default.createElement(
                                'div',
                                { className: 'sub-title' },
                                r.formatMessage({ id: 'trialos_1095' }),
                                i.default.createElement('br', null),
                                r.formatMessage({ id: 'trialos_1096' }),
                              ),
                            ),
                            i.default.createElement('img', {
                              className: 'qrcode-img',
                              src:
                                ne ||
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/binded_status_wenxin.png',
                              alt: '二维码',
                            }),
                          ),
                        )
                      : i.default.createElement(
                          'div',
                          { className: 'weixin-global-download-popover' },
                          i.default.createElement('img', {
                            style: { width: '100%' },
                            src:
                              'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/unbind_status_wenxin.png',
                          }),
                        ),
                  ),
                  trigger: 'hover',
                },
                i.default.createElement(
                  'span',
                  { className: 'right-item' },
                  i.default.createElement('img', {
                    className: 'header-icon',
                    src:
                      'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/weixin_icon.png',
                    alt: '',
                  }),
                  ' ',
                  r.formatMessage({ id: 'trialos_1060' }),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }),
  (exports.IndexNavBar = function(a) {
    var r = t.useIntl(),
      o = (a.result, a.list, a.channelCode),
      l = a.channelName,
      s = a.ifShowRearcher,
      d = void 0 === s || s,
      u = a.ifCanSwitch,
      m = void 0 === u || u,
      p = g(e.useState(d), 2),
      h = p[0],
      b = p[1],
      v = g(e.useState([]), 2),
      x = v[0],
      w = v[1],
      E = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        C.get('/os/channelManage/getChannels', {})
                      );
                    case 3:
                      (t = e.sent) &&
                        '[object Array]' ===
                          Object.prototype.toString.call(t) &&
                        w(t),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      y = function() {
        J && clearTimeout(J),
          (J = setTimeout(function() {
            m && b(!1);
          }, 100));
      };
    return (
      e.useEffect(function() {
        return (
          E(),
          function() {
            J && clearTimeout(J);
          }
        );
      }, []),
      i.default.createElement(
        'div',
        { className: 'navbar1111' },
        i.default.createElement(
          'div',
          { className: 'navbar2222' },
          i.default.createElement(
            'div',
            { className: 'trialos4Navbar' },
            i.default.createElement(
              'div',
              { className: 'nav-bar-content-box' },
              i.default.createElement(
                'div',
                {
                  className: 'nav-left',
                  onMouseOver: function() {
                    J && clearTimeout(J), m && b(!0);
                  },
                  onMouseOut: y,
                  onMouseLeave: y,
                },
                i.default.createElement(
                  'div',
                  { className: 'rearch-title' },
                  i.default.createElement(n.Icon, {
                    type: 'unordered-list',
                    style: { fontSize: '20px', marginRight: '10px' },
                  }),
                  i.default.createElement(
                    'span',
                    { style: { fontWeight: 600 } },
                    r.formatMessage({ id: 'trialos_1092' }),
                  ),
                ),
                i.default.createElement(
                  'div',
                  {
                    className: 'rearch-content',
                    style: { visibility: h ? 'visible' : 'hidden' },
                  },
                  i.default.createElement(D, null),
                ),
              ),
              i.default.createElement(
                'nav',
                { className: 'nav-list' },
                (x || []).map(function(e, n) {
                  return i.default.createElement(
                    'a',
                    {
                      key: n,
                      target: '首页' == e.channelName ? '_self' : '_blank',
                      className: c.default('nav-item', {
                        'active-nav-item':
                          o === e.channelCode || l === e.channelName,
                      }),
                      href: /^https?:\/\//.test(e.customUrl)
                        ? e.customUrl
                        : 'http://'.concat(e.customUrl),
                    },
                    'en_US' === t.getLocale() ? e.channelEnName : e.channelName,
                  );
                }),
              ),
            ),
          ),
        ),
      )
    );
  }),
  (exports.IndexSearchBar = function(a) {
    a.result, a.list;
    var r = g(e.useState(0), 2),
      o = r[0],
      l = r[1],
      c = g(e.useState(!0), 2),
      s = c[0],
      d = c[1],
      u = t.useIntl(),
      m = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        I.get('/shoppingCart/getShoppingCartList', {})
                      );
                    case 3:
                      (t = e.sent) && l(null == t ? void 0 : t.length),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (null === e.t0 || void 0 === e.t0
                          ? void 0
                          : e.t0.message) && n.message.error(e.t0.message);
                    case 10:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]],
            );
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      p = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!a.goMyWorkbench) {
                      e.next = 3;
                      break;
                    }
                    return a.goMyWorkbench(), e.abrupt('return');
                  case 3:
                    return (e.next = 5), L();
                  case 5:
                    (t = e.sent), U(t ? '/index/workbench' : '/login/');
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      h = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!a.goShopcart) {
                      e.next = 3;
                      break;
                    }
                    return a.goShopcart(), e.abrupt('return');
                  case 3:
                    return (e.next = 5), L();
                  case 5:
                    e.sent
                      ? U('/opencourse/shoppingCart')
                      : a.goLogin && a.goLogin();
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      b = (function() {
        var e = f(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), L();
                  case 2:
                    (t = e.sent), d(!!t);
                  case 4:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function() {
          return e.apply(this, arguments);
        };
      })();
    return (
      e.useEffect(function() {
        m(), b();
      }, []),
      i.default.createElement(
        'div',
        { className: 'searchBar1111' },
        i.default.createElement(
          'div',
          { className: 'searchBar2222' },
          i.default.createElement(
            'div',
            { className: 'trialos4Searchbar' },
            i.default.createElement(
              'div',
              { className: 'search-bar-content-box' },
              i.default.createElement(
                'a',
                { href: '/index/' },
                i.default.createElement('img', {
                  className: 'company-logo',
                  src:
                    'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/taimei_logo.png',
                  alt: 'trialos药试圈',
                }),
              ),
              i.default.createElement(
                'div',
                { className: 'search-box' },
                i.default.createElement(n.Input.Search, {
                  placeholder: u.formatMessage({ id: 'trialos_1098' }),
                  onSearch: function(e) {
                    a.goSearch
                      ? a.goSearch(e)
                      : U('/index/globalSearch?word='.concat(e));
                  },
                  size: 'large',
                  enterButton: !0,
                }),
              ),
              i.default.createElement(
                'div',
                { className: 'right-func-box' },
                i.default.createElement(
                  'span',
                  { className: 'shop-chart-box', onClick: h },
                  i.default.createElement('img', {
                    className: 'shop-chart-icon',
                    src:
                      'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/shopcart_icon.png',
                  }),
                  ' ',
                  i.default.createElement(
                    'span',
                    { className: 'cart-name' },
                    u.formatMessage({ id: 'shopping_cart' }),
                  ),
                  ' ',
                  i.default.createElement(
                    'span',
                    {
                      className: 'goods-count',
                      style: {
                        padding: '2px 6px',
                        background: '#0A47ED',
                        color: '#FFF',
                        borderRadius: '8px',
                      },
                    },
                    o,
                  ),
                ),
                i.default.createElement(
                  'span',
                  { className: 'workbench-item', onClick: p },
                  s
                    ? i.default.createElement(
                        i.default.Fragment,
                        null,
                        i.default.createElement('img', {
                          className: 'my-workbench-icon',
                          src:
                            'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/workbench_icon.png',
                        }),
                        ' ',
                        u.formatMessage({ id: 'my_workbench' }),
                      )
                    : i.default.createElement(
                        'span',
                        null,
                        i.default.createElement('span', {
                          style: { color: '#0A47ED' },
                          dangerouslySetInnerHTML: {
                            __html: u
                              .formatMessage({ id: 'please_login' })
                              .replace(
                                '|',
                                '<span style="color:black">&nbsp;|&nbsp;</span>',
                              ),
                          },
                        }),
                      ),
                ),
              ),
            ),
          ),
        ),
      )
    );
  }),
  (exports.Menu = V),
  (exports.TmButton = function() {
    return i.default.createElement(
      H,
      { size: 'lg', btnType: 'danger' },
      '我是一个Button',
    );
  });
