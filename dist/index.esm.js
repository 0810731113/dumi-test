import e, {
  useState as t,
  useEffect as n,
  createContext as a,
  useContext as r,
} from 'react';
import { useIntl as o, setLocale as i, getLocale as c } from 'umi';
import {
  Button as s,
  Popover as l,
  Avatar as m,
  Icon as p,
  Input as d,
  message as f,
} from 'antd';
import u from 'axios';
import g from 'classnames';
var h = function(t) {
    var n = t.title;
    return e.createElement('h1', null, n);
  },
  b = function(t) {
    return e.createElement(
      'div',
      { className: '' },
      e.createElement(s, null, t.children),
    );
  },
  v = function() {
    return e.createElement('div', { className: '' }, e.createElement(b, null));
  };
function x(e, t, n, a, r, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (e) {
    return void n(e);
  }
  c.done ? t(s) : Promise.resolve(s).then(a, r);
}
function w(e) {
  return function() {
    var t = this,
      n = arguments;
    return new Promise(function(a, r) {
      var o = e.apply(t, n);
      function i(e) {
        x(o, a, r, i, c, 'next', e);
      }
      function c(e) {
        x(o, a, r, i, c, 'throw', e);
      }
      i(void 0);
    });
  };
}
function E(e, t, n) {
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
function y(e, t) {
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
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? y(Object(n), !0).forEach(function(t) {
          E(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : y(Object(n)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function k(e, t) {
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
          var i, c = e[Symbol.iterator]();
          !(a = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t);
          a = !0
        );
      } catch (e) {
        (r = !0), (o = e);
      } finally {
        try {
          a || null == c.return || c.return();
        } finally {
          if (r) throw o;
        }
      }
      return n;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ('string' == typeof e) return S(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      'Object' === n && e.constructor && (n = e.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(e);
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return S(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function S(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function _(e, t) {
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
_(
  '.trialos4_header {\n  height: 26px;\n  background: #f6f7f8;\n  box-shadow: 0px 1px 0px 0px #edeff0;\n  width: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.trialos4_header .header-content-width-box {\n  margin: 0 auto;\n  margin-top: -2px;\n  width: 1200px;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.trialos4_header .header-content-width-box .header-left .left-item {\n  cursor: pointer;\n  font-size: 12px;\n  font-family: MicrosoftYaHei;\n  line-height: 18px;\n  color: #82868e;\n}\n.trialos4_header .header-content-width-box .header-left .left-item1 {\n  color: #82868e;\n}\n.trialos4_header .header-content-width-box .header-left .left-item2 {\n  padding-left: 6px;\n  color: #0a47ed;\n}\n.trialos4_header .header-content-width-box .header-right .right-item {\n  cursor: pointer;\n  font-size: 12px;\n  font-family: MicrosoftYaHei;\n  color: #82868e;\n  line-height: 14px;\n}\n.trialos4_header .header-content-width-box .header-right .right-item .header-icon {\n  width: 14px;\n  vertical-align: middle;\n  margin-top: -4px;\n}\n.trialos4_header .header-content-width-box .header-right .right-item:last-child {\n  margin-left: 20px;\n}\n.user-global-info-popover {\n  padding-top: 20px;\n  width: 252px;\n  position: relative;\n  padding-bottom: calc(54px * 2 + 12px);\n}\n.user-global-info-popover .user-base-info {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.user-global-info-popover .user-base-info .info-right {\n  margin-left: 12px;\n}\n.user-global-info-popover .user-base-info .info-right .info-name {\n  font-size: 16px;\n  font-family: PingFangSC-Semibold, PingFang SC;\n  font-weight: 600;\n  color: #000000;\n  line-height: 26px;\n}\n.user-global-info-popover .user-base-info .info-right .info-score {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  line-height: 22px;\n}\n.user-global-info-popover .user-base-info .info-right .info-score .score-title {\n  color: #000000;\n  margin-bottom: 4px;\n}\n.user-global-info-popover .user-base-info .info-right .info-score .score-number {\n  color: #0a47ed;\n  font-weight: 500;\n}\n.user-global-info-popover .user-func-row-box {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.user-global-info-popover .user-func-row-box .func-item {\n  cursor: pointer;\n  width: 74px;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.user-global-info-popover .user-func-row-box .func-item .func-icon {\n  width: 20px;\n}\n.user-global-info-popover .user-func-row-box .func-item .func-text {\n  margin-top: 4px;\n  text-align: center;\n  width: 56px;\n  height: 22px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 22px;\n}\n.user-global-info-popover .func-list-box {\n  position: absolute;\n  bottom: -12px;\n  left: -16px;\n  width: 284px;\n}\n.user-global-info-popover .func-list-box .fun-row-item {\n  padding: 0 24px;\n  cursor: pointer;\n  height: 54px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #edeff0;\n}\n.user-global-info-popover .func-list-box .fun-row-item:last-child {\n  border-bottom: 1px solid #edeff0;\n}\n.user-global-info-popover .func-list-box .fun-row-item .title {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 22px;\n}\n.user-global-info-popover .func-list-box .fun-row-item .right-icon {\n  color: #c5cbd0;\n}\n.app-global-download-popover {\n  width: 128px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.app-global-download-popover .big-title {\n  font-size: 14px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #000000;\n  line-height: 20px;\n  margin-top: 4px;\n}\n.app-global-download-popover .qrcode-img {\n  margin-top: 16px;\n  margin-bottom: 8px;\n  width: 116px;\n}\n.weixin-global-download-popover {\n  width: 252px;\n  padding: 14px;\n  display: flex;\n  justify-content: space-between;\n}\n.weixin-global-download-popover .pooover-block {\n  width: 98px;\n}\n.weixin-global-download-popover .pooover-block .big-title {\n  width: 98px;\n  text-align: center;\n  font-size: 14px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #000000;\n  line-height: 20px;\n  margin-bottom: 16px;\n}\n.weixin-global-download-popover .pooover-block .qrcode-img {\n  width: 98px;\n}\n.weixin-global-binded-popover .binded-header {\n  width: 252px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-bottom: 1px solid #edeff0;\n  height: 48px;\n  padding-bottom: 16px;\n}\n.weixin-global-binded-popover .binded-header .header-left {\n  width: 50%;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding-right: 24px;\n  text-align: right;\n}\n.weixin-global-binded-popover .binded-header .header-right {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.weixin-global-binded-popover .binded-header .header-right .user-name {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #0a47ed;\n  line-height: 22px;\n}\n.weixin-global-binded-popover .binded-header .header-right .right-icon {\n  font-size: 16px;\n  color: #c5cbd0;\n}\n.weixin-global-binded-popover .binded-content {\n  width: 252px;\n  display: flex;\n  margin-top: 14px;\n  justify-content: flex-start;\n}\n.weixin-global-binded-popover .binded-content .pooover-block {\n  width: 50%;\n  flex-shrink: 0;\n  flex-grow: 0;\n  padding-right: 24px;\n}\n.weixin-global-binded-popover .binded-content .pooover-block .big-title {\n  margin-top: 4px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 20px;\n  text-align: right;\n}\n.weixin-global-binded-popover .binded-content .pooover-block .sub-title {\n  margin-top: 16px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 20px;\n  text-align: right;\n}\n.weixin-global-binded-popover .binded-content .qrcode-img {\n  width: 100px;\n}\n',
);
var C = u.CancelToken.source(),
  I = function() {
    return (
      'undefined' != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
    );
  },
  R = {
    310: { msg: '无session信息!', path: '/403' },
    405: { msg: 'session过期', path: '/403' },
    406: { msg: '用户已在其他地方登陆!!', path: '/403' },
    506: { msg: '系统其它异常错误!', path: '/500' },
    407: { msg: '系统其它异常错误!', path: '/' },
  };
function M(e) {
  var t = {
    headers: N(
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
    (t = N(N({}, t), e)),
    '[object String]' === Object.prototype.toString.call(e) &&
      (t = N(N({}, t), {}, { baseURL: e }));
  var n = u.create(t);
  return (
    n.interceptors.request.use(
      function(e) {
        if (I()) {
          var t =
              JSON.parse(
                sessionStorage.getItem('sso_loginInfo') ||
                  sessionStorage.getItem('live_sso_loginInfo') ||
                  '{}',
              ) || {},
            n = (t.tenantId, t.userId, localStorage.getItem('sso_loginInfo'));
          n = (n && JSON.parse(n).data) || {};
          e.headers = N(N({}, e.headers), {
            'content-type': 'application/json',
          });
        } else {
          var a, r, o, i, c, s, l, m;
          (e.headers = N(N({}, e.headers), {})),
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
              (null === (c = global) ||
              void 0 === c ||
              null === (s = c.ssr) ||
              void 0 === s ||
              null === (l = s.context) ||
              void 0 === l ||
              null === (m = l.req) ||
              void 0 === m
                ? void 0
                : m.cookie) || null);
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
          (I() ||
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
              c = e.config.errorNotice || {},
              s = N(N({}, R), c);
            if (((t = i.message), (n = i.code) in s)) {
              var l;
              C.cancel();
              var m = s[n].msg;
              return (null == e || null === (l = e.config) || void 0 === l
              ? void 0
              : l.message)
                ? (e.config.message.error(m, 3, function() {}),
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
var P = M({}),
  j =
    (M({}),
    M({ baseURL: '/api/live-service' }),
    M({ baseURL: '/api/invoice-service' }),
    M({ baseURL: '/api/csp-service' }),
    M({ baseURL: '/api/sso-web/sso' })),
  F = M({ baseURL: '/api/master-data-service/' }),
  O = (M('/api/ucenter-java'), j),
  A =
    (M('/api/master-data-service-refactor/'),
    M('/api/master-recommend-service/'),
    M('/api/im-service/'),
    M('/api/tms-client/api/'),
    M('/api/omp-service/'),
    M('/api/site-web/'),
    M('/'),
    M('/api/csp-service/'),
    M('/api/eventlake-web/'),
    M('/api/eventlake-calendar/'),
    M('/api/eventlake-web/'),
    M('/api/social-point-service/')),
  z = (M('/api/faq-service/'), M('/api/trialos-service/')),
  L =
    (M('/api/lite-site-service'),
    M('/api/metrics-service'),
    M('/api/live-service'),
    M('/api/live-service'),
    M('/api/tms-client/api')),
  U = M('/api/third-service/'),
  T = u.CancelToken.source(),
  B = function() {
    return (
      'undefined' != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement
    );
  },
  D = {
    310: { msg: '无session信息!', path: '/403' },
    405: { msg: 'session过期', path: '/403' },
    406: { msg: '用户已在其他地方登陆!!', path: '/403' },
    506: { msg: '系统其它异常错误!', path: '/500' },
    407: { msg: '系统其它异常错误!', path: '/' },
  };
function J(e) {
  var t = {
    headers: N(
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
    (t = N(N({}, t), e)),
    '[object String]' === Object.prototype.toString.call(e) &&
      (t = N(N({}, t), {}, { baseURL: e }));
  var n = u.create(t);
  return (
    n.interceptors.request.use(
      function(e) {
        if (B()) {
          var t =
              JSON.parse(
                sessionStorage.getItem('sso_loginInfo') ||
                  sessionStorage.getItem('live_sso_loginInfo') ||
                  '{}',
              ) || {},
            n = (t.tenantId, t.userId, localStorage.getItem('sso_loginInfo'));
          n = (n && JSON.parse(n).data) || {};
          e.headers = N(N({}, e.headers), {
            'content-type': 'application/json',
          });
        } else {
          var a, r, o, i, c, s, l, m;
          (e.headers = N(N({}, e.headers), {})),
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
              (null === (c = global) ||
              void 0 === c ||
              null === (s = c.ssr) ||
              void 0 === s ||
              null === (l = s.context) ||
              void 0 === l ||
              null === (m = l.req) ||
              void 0 === m
                ? void 0
                : m.cookie) || null);
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
          (B() ||
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
              c = e.config.errorNotice || {},
              s = N(N({}, D), c);
            if (((t = i.message), (n = i.code) in s)) {
              var l;
              T.cancel();
              var m = s[n].msg;
              return (null == e || null === (l = e.config) || void 0 === l
              ? void 0
              : l.message)
                ? (e.config.message.error(m, 3, function() {}),
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
var q = J({});
J({}),
  J({ baseURL: '/api/live-service' }),
  J({ baseURL: '/api/invoice-service' }),
  J({ baseURL: '/api/csp-service' }),
  J({ baseURL: '/api/sso-web/sso' }),
  J({ baseURL: '/api/master-data-service/' }),
  J('/api/ucenter-java'),
  J('/api/master-data-service-refactor/'),
  J('/api/master-recommend-service/'),
  J('/api/im-service/'),
  J('/api/tms-client/api/'),
  J('/api/omp-service/'),
  J('/api/site-web/'),
  J('/'),
  J('/api/csp-service/'),
  J('/api/eventlake-web/'),
  J('/api/eventlake-calendar/'),
  J('/api/eventlake-web/'),
  J('/api/social-point-service/'),
  J('/api/faq-service/'),
  J('/api/trialos-service/'),
  J('/api/lite-site-service'),
  J('/api/metrics-service'),
  J('/api/live-service'),
  J('/api/live-service'),
  J('/api/tms-client/api'),
  J('/api/third-service/');
function H() {
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
    for (var c = o.length; c--; )
      o[c].indexOf('advent_show_info_') > -1 ||
        ((document.cookie = ''
          .concat(o[c], '=0;path=/csp;expires=')
          .concat(new Date(0).toUTCString())),
        (document.cookie = o[c] + i));
}
var W = function(e) {
    var t,
      n = new RegExp('(^| )'.concat(e, '=([^;]*)(;|$)'));
    return (t = document.cookie.match(n)) ? unescape(t[2]) : null;
  },
  $ = (function() {
    var e = w(
      regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (W('token')) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt('return', !1);
                case 3:
                  return (
                    (e.prev = 3),
                    (e.next = 6),
                    q.get(
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
  Y = function(e) {
    var t = document.createElement('a');
    t.setAttribute('href', e), t.setAttribute('target', '_blank');
    var n = Math.random();
    t.setAttribute('id', n),
      document.getElementById(n) || document.body.appendChild(t),
      t.click();
  },
  G = !1,
  V = function(a) {
    a.result, a.list;
    var r = o(),
      c = 'zhCN',
      s = k(t(c), 2),
      d = s[0],
      f = s[1],
      u = k(t(!1), 2),
      g = u[0],
      h = u[1],
      b = k(t({}), 2),
      v = b[0],
      x = b[1],
      E = k(t(''), 2),
      y = E[0],
      N = E[1],
      S = k(t({}), 2),
      _ = (S[0], S[1]),
      C = k(t(''), 2),
      I = C[0],
      R = C[1],
      M = k(t({}), 2),
      j = (M[0], M[1], k(t(''), 2)),
      T = (j[0], j[1], k(t({}), 2)),
      B = (T[0], T[1], k(t(''), 2)),
      D = (B[0], B[1]),
      J = k(t(''), 2),
      q = (J[0], J[1], k(t(0), 2)),
      $ = q[0],
      Y = q[1],
      V = k(t(0), 2),
      Q = V[0],
      K = V[1],
      X = k(t(''), 2),
      Z = (X[0], X[1], k(t(''), 2)),
      ee = (Z[0], Z[1], k(t(''), 2)),
      te = (ee[0], ee[1], k(t(''), 2)),
      ne = (te[0], te[1], k(t({}), 2)),
      ae = ne[0],
      re = ne[1],
      oe = k(t(null), 2),
      ie = oe[0],
      ce = oe[1],
      se = (function() {
        var e = w(
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
                      if (((e.prev = 1), W('token'))) {
                        e.next = 6;
                        break;
                      }
                      return G && location.reload(), e.abrupt('return');
                    case 6:
                      return (
                        (e.next = 8),
                        P.get(
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
                      if (!G) {
                        e.next = 16;
                        break;
                      }
                      return location.reload(), e.abrupt('return');
                    case 16:
                      G || location.reload(), (e.next = 24);
                      break;
                    case 19:
                      (e.prev = 19),
                        (e.t0 = e.catch(1)),
                        G && location.reload();
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
      le = (function() {
        var e = w(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), W('token'))) {
                        e.next = 5;
                        break;
                      }
                      return (G = !1), e.abrupt('return', !1);
                    case 5:
                      return (
                        (e.next = 7),
                        P.get(
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
                      return (G = !1), e.abrupt('return', !1);
                    case 12:
                      (G = !0),
                        localStorage.getItem('sso_loginInfo'),
                        de(),
                        (e.next = 20);
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(0)), (G = !1);
                    case 20:
                      return (
                        (e.prev = 20),
                        document.addEventListener('visibilitychange', se),
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
    n(function() {
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
        n && 'en_US' === n && f((c = 'enUS')),
        le(),
        function() {
          document.removeEventListener('visibilitychange', se);
        }
      );
    }, []);
    var me = (function() {
        var e = w(
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
                        U.get(
                          '/wechat/getWeChatAccountInfoByAccountId?accountId='
                            .concat(a.accountId, '&targetAppId=')
                            .concat(a.targetAppId),
                          a,
                        )
                      );
                    case 7:
                      (r = e.sent), re(r), pe(), (e.next = 15);
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
      pe = (function() {
        var e = w(
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
                        z.get('/trialos/getBindWxQrCode', t)
                      );
                    case 4:
                      (n = e.sent), ce(n), (e.next = 11);
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
      de = (function() {
        var e = w(
          regeneratorRuntime.mark(function e() {
            var t, n;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    me(),
                      fe(),
                      ue(),
                      (t = JSON.parse(
                        localStorage.getItem('sso_loginInfo') || '{}',
                      )) &&
                        t.data &&
                        ((n = {
                          CompanyName:
                            (v.personCompanyDto &&
                              v.personCompanyDto.companyName) ||
                            v.company ||
                            '',
                          Phone: v.mobile,
                          RealName: v.name,
                          UserName: v.cspAccountName,
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
      fe = (function() {
        var e = w(
          regeneratorRuntime.mark(function e() {
            var t, n, a, r, o, i, c;
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
                        F.get(
                          '/person/getPersonInfoByAccountId/'
                            .concat(a, '?tenantId=')
                            .concat(r),
                          n,
                        )
                      );
                    case 8:
                      (o = e.sent) &&
                        (x((i = o).fileUrl),
                        h(!0),
                        N(i.fileUrl),
                        _(i.personCompanyDto),
                        R(i.name),
                        D(i.company));
                    case 10:
                      return (
                        JSON.parse(
                          sessionStorage.getItem('sso_loginInfo') || '{}',
                        ),
                        (e.next = 13),
                        A.get('/v1/accounts/'.concat(t.data.accountId))
                      );
                    case 13:
                      (c = e.sent), K(c ? c.points : 0), (e.next = 19);
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
      ue = (function() {
        var e = w(
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
                        L.post('/Point/GetUserPointSumByAccountId', n)
                      );
                    case 5:
                      (a = e.sent),
                        Y('number' == typeof a ? a : 0),
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
      ge = (function() {
        var e = w(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), O.post('sso/doLogout');
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      (e.prev = 5), (e.t0 = e.catch(0));
                    case 7:
                      return (
                        (e.prev = 7),
                        H(),
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
    return e.createElement(
      'div',
      { className: 'header111' },
      e.createElement(
        'div',
        { className: 'header222' },
        e.createElement(
          'div',
          { className: 'trialos4_header' },
          e.createElement(
            'div',
            { className: 'header-content-width-box' },
            e.createElement(
              'div',
              { className: 'header-left' },
              g
                ? e.createElement(
                    l,
                    {
                      placement: 'bottomLeft',
                      title: '',
                      content: e.createElement(
                        'div',
                        { className: 'user-global-info-popover' },
                        e.createElement(
                          'div',
                          { className: 'user-base-info' },
                          e.createElement(
                            m,
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
                              src: y || (null == ae ? void 0 : ae.headImageUrl),
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            !y &&
                              e.createElement(
                                'span',
                                null,
                                I ? (I.length > 2 ? I.slice(-2) : I) : '- -',
                              ),
                          ),
                          e.createElement(
                            'span',
                            { className: 'info-right' },
                            e.createElement(
                              'div',
                              { className: 'info-name' },
                              e.createElement('span', null, I || '- -') ||
                                (null == ae ? void 0 : ae.nickName),
                            ),
                            e.createElement(
                              'div',
                              { className: 'info-score' },
                              e.createElement(
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
                              e.createElement(
                                'span',
                                {
                                  className: 'score-number',
                                  onClick: function() {
                                    return window.open(
                                      ' /index/personal-center/myIntegral',
                                    );
                                  },
                                },
                                Q,
                              ),
                              e.createElement(
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
                              e.createElement(
                                'span',
                                {
                                  className: 'score-number',
                                  onClick: function() {
                                    return window.open('/opencourse/studyCoin');
                                  },
                                },
                                $,
                              ),
                            ),
                          ),
                        ),
                        e.createElement(
                          'div',
                          { className: 'user-func-row-box' },
                          e.createElement(
                            'div',
                            {
                              className: 'func-item',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            e.createElement('img', {
                              className: 'func-icon',
                              src:
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/user_func1.png',
                              alt: '个人中心',
                            }),
                            e.createElement(
                              'div',
                              { className: 'func-text' },
                              r.formatMessage({ id: 'trialos_924' }),
                            ),
                          ),
                          e.createElement(
                            'div',
                            {
                              className: 'func-item',
                              onClick: function() {
                                return window.open('/index/helpHandbook');
                              },
                            },
                            e.createElement('img', {
                              className: 'func-icon',
                              src:
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/user_func2.png',
                              alt: '简历',
                            }),
                            e.createElement(
                              'div',
                              { className: 'func-text' },
                              r.formatMessage({ id: 'trialos_1031' }),
                            ),
                          ),
                          e.createElement(
                            'div',
                            {
                              className: 'func-item',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/myCollect',
                                );
                              },
                            },
                            e.createElement('img', {
                              className: 'func-icon',
                              src:
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/user_func3.png',
                              alt: '我的收藏',
                            }),
                            e.createElement(
                              'div',
                              { className: 'func-text' },
                              r.formatMessage({ id: 'my_collect' }),
                            ),
                          ),
                        ),
                        e.createElement(
                          'div',
                          { className: 'func-list-box' },
                          e.createElement(
                            'div',
                            {
                              className: 'fun-row-item',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            e.createElement(
                              'span',
                              { className: 'title' },
                              r.formatMessage({ id: 'trialos_989' }),
                            ),
                            e.createElement(p, {
                              className: 'right-icon',
                              type: 'right',
                            }),
                          ),
                          e.createElement(
                            'div',
                            { className: 'fun-row-item', onClick: ge },
                            e.createElement(
                              'span',
                              { className: 'title' },
                              r.formatMessage({ id: 'trialos_1033' }),
                            ),
                            e.createElement(p, {
                              className: 'right-icon',
                              type: 'right',
                            }),
                          ),
                        ),
                      ),
                      trigger: 'hover',
                    },
                    e.createElement(
                      'span',
                      { onClick: function() {} },
                      e.createElement(
                        'span',
                        { className: 'left-item left-item1' },
                        r.formatMessage({ id: 'say_hi' }),
                      ),
                      e.createElement(
                        'span',
                        { className: 'left-item left-item2' },
                        I
                          ? e.createElement('span', null, I || '- -')
                          : (null == ae
                            ? void 0
                            : ae.nickName)
                          ? ae.nickName
                          : ' - - ',
                      ),
                    ),
                  )
                : e.createElement(
                    'span',
                    {
                      onClick: function() {
                        a.goLogin && a.goLogin();
                      },
                    },
                    e.createElement(
                      'span',
                      { className: 'left-item left-item1' },
                      r.formatMessage({ id: 'say_hi' }),
                    ),
                    e.createElement('span', {
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
            e.createElement(
              'div',
              { className: 'header-right' },
              e.createElement(
                l,
                {
                  placement: 'bottom',
                  title: '',
                  content: r.formatMessage({ id: 'switch_language' }),
                  trigger: 'hover',
                },
                e.createElement(
                  'span',
                  { className: 'right-item' },
                  e.createElement('img', {
                    className: 'header-icon',
                    style: { width: '20px', marginRight: '32px' },
                    src:
                      'enUS' === d
                        ? 'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/language_english_icon.png'
                        : 'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/language_chinese_icon.png',
                    alt: '英文',
                    onClick: function() {
                      var e = 'zhCN' === d ? 'enUS' : 'zhCN';
                      f(e);
                      var t = {
                        selectLanguage: {
                          key: 'zhCN' === e ? 'zh_CN' : 'en_US',
                          name: 'zhCN' === e ? '简体中文' : 'English',
                        },
                      };
                      i('zhCN' === e ? 'zh_CN' : 'en_US', !1),
                        localStorage.setItem(
                          'sso_loginAccountInfo',
                          JSON.stringify(t),
                        ),
                        a.toggleLocale && a.toggleLocale(e);
                    },
                  }),
                ),
              ),
              e.createElement(
                l,
                {
                  placement: 'bottom',
                  title: '',
                  content: e.createElement(
                    'div',
                    { className: 'app-global-download-popover' },
                    e.createElement(
                      'div',
                      { className: 'big-title' },
                      r.formatMessage({ id: 'trialos_1090' }),
                    ),
                    e.createElement(
                      'div',
                      { className: 'big-title' },
                      r.formatMessage({ id: 'trialos_1091' }),
                    ),
                    e.createElement('img', {
                      className: 'qrcode-img',
                      src:
                        'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/wenxin_gongzhnghao_qrcode.png',
                      alt: '二维码',
                    }),
                  ),
                  trigger: 'hover',
                },
                e.createElement(
                  'span',
                  { className: 'right-item' },
                  e.createElement('img', {
                    className: 'header-icon',
                    src:
                      'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/phone_icon.png',
                    alt: '',
                  }),
                  ' App',
                ),
              ),
              e.createElement(
                l,
                {
                  placement: 'bottomRight',
                  title: '',
                  content: e.createElement(
                    e.Fragment,
                    null,
                    (null == ae
                    ? void 0
                    : ae.openId)
                      ? e.createElement(
                          'div',
                          { className: 'weixin-global-binded-popover' },
                          e.createElement(
                            'div',
                            {
                              className: 'binded-header',
                              onClick: function() {
                                return window.open(
                                  '/index/personal-center/accountSetting',
                                );
                              },
                            },
                            e.createElement(
                              'div',
                              { className: 'header-left' },
                              r.formatMessage({ id: 'trialos_1093' }),
                              ':',
                            ),
                            e.createElement(
                              'div',
                              { className: 'header-right' },
                              e.createElement(
                                'span',
                                { className: 'user-name' },
                                (null == ae ? void 0 : ae.nickName) || ' - - ',
                              ),
                              e.createElement(p, {
                                className: 'right-icon',
                                type: 'right',
                              }),
                            ),
                          ),
                          e.createElement(
                            'div',
                            { className: 'binded-content' },
                            e.createElement(
                              'div',
                              { className: 'pooover-block' },
                              e.createElement(
                                'div',
                                { className: 'big-title' },
                                r.formatMessage({ id: 'trialos_1094' }),
                                ':',
                              ),
                              e.createElement(
                                'div',
                                { className: 'sub-title' },
                                r.formatMessage({ id: 'trialos_1095' }),
                                e.createElement('br', null),
                                r.formatMessage({ id: 'trialos_1096' }),
                              ),
                            ),
                            e.createElement('img', {
                              className: 'qrcode-img',
                              src:
                                ie ||
                                'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/binded_status_wenxin.png',
                              alt: '二维码',
                            }),
                          ),
                        )
                      : e.createElement(
                          'div',
                          { className: 'weixin-global-download-popover' },
                          e.createElement('img', {
                            style: { width: '100%' },
                            src:
                              'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/unbind_status_wenxin.png',
                          }),
                        ),
                  ),
                  trigger: 'hover',
                },
                e.createElement(
                  'span',
                  { className: 'right-item' },
                  e.createElement('img', {
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
  };
_(
  '.trialos4Searchbar .search-bar-content-box {\n  width: 1200px;\n  margin: 0 auto;\n  padding: 0 52px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.trialos4Searchbar .search-bar-content-box .company-logo {\n  width: 134px;\n  cursor: pointer;\n}\n.trialos4Searchbar .search-bar-content-box .search-box {\n  width: 634px;\n}\n.trialos4Searchbar .search-bar-content-box .search-box .ant-input {\n  background: rgba(10, 71, 237, 0.04) !important;\n  font-size: 14px;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box .shop-chart-icon {\n  width: 18px;\n  vertical-align: middle;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box .cart-name {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n  line-height: 22px;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .shop-chart-box .goods-count {\n  font-size: 11px;\n  font-family: ArialMT;\n  color: #ffffff;\n  line-height: 12px;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .workbench-item {\n  cursor: pointer;\n  margin-left: 34px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n}\n.trialos4Searchbar .search-bar-content-box .right-func-box .workbench-item .my-workbench-icon {\n  width: 18px;\n  vertical-align: middle;\n}\n.trialos4Searchbar .ant-input {\n  border: 1px solid #f5f8fe !important;\n}\n.trialos4Searchbar .ant-btn-primary {\n  color: #fff;\n  background-color: #0a47ed;\n  border-color: #0a47ed;\n}\n.trialos4Searchbar .ant-input:focus {\n  outline: 0 !important;\n  -webkit-box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2) !important;\n  box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2) !important;\n}\n',
);
d.Search;
var Q = function(a) {
  a.result, a.list;
  var r = k(t(0), 2),
    i = r[0],
    c = r[1],
    s = k(t(!0), 2),
    l = s[0],
    m = s[1],
    p = o(),
    u = (function() {
      var e = w(
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
                      L.get('/shoppingCart/getShoppingCartList', {})
                    );
                  case 3:
                    (t = e.sent) && c(null == t ? void 0 : t.length),
                      (e.next = 10);
                    break;
                  case 7:
                    (e.prev = 7),
                      (e.t0 = e.catch(0)),
                      (null === e.t0 || void 0 === e.t0
                        ? void 0
                        : e.t0.message) && f.error(e.t0.message);
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
    g = (function() {
      var e = w(
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
                  return (e.next = 5), $();
                case 5:
                  (t = e.sent), Y(t ? '/index/workbench' : '/login/');
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
      var e = w(
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
                  return (e.next = 5), $();
                case 5:
                  e.sent
                    ? Y('/opencourse/shoppingCart')
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
      var e = w(
        regeneratorRuntime.mark(function e() {
          var t;
          return regeneratorRuntime.wrap(function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), $();
                case 2:
                  (t = e.sent), m(!!t);
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
    n(function() {
      u(), b();
    }, []),
    e.createElement(
      'div',
      { className: 'searchBar1111' },
      e.createElement(
        'div',
        { className: 'searchBar2222' },
        e.createElement(
          'div',
          { className: 'trialos4Searchbar' },
          e.createElement(
            'div',
            { className: 'search-bar-content-box' },
            e.createElement(
              'a',
              { href: '/index/' },
              e.createElement('img', {
                className: 'company-logo',
                src:
                  'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/taimei_logo.png',
                alt: 'trialos药试圈',
              }),
            ),
            e.createElement(
              'div',
              { className: 'search-box' },
              e.createElement(d.Search, {
                placeholder: p.formatMessage({ id: 'trialos_1098' }),
                onSearch: function(e) {
                  a.goSearch
                    ? a.goSearch(e)
                    : Y('/index/globalSearch?word='.concat(e));
                },
                size: 'large',
                enterButton: !0,
              }),
            ),
            e.createElement(
              'div',
              { className: 'right-func-box' },
              e.createElement(
                'span',
                { className: 'shop-chart-box', onClick: h },
                e.createElement('img', {
                  className: 'shop-chart-icon',
                  src:
                    'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/shopcart_icon.png',
                }),
                ' ',
                e.createElement(
                  'span',
                  { className: 'cart-name' },
                  p.formatMessage({ id: 'shopping_cart' }),
                ),
                ' ',
                e.createElement(
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
                  i,
                ),
              ),
              e.createElement(
                'span',
                { className: 'workbench-item', onClick: g },
                l
                  ? e.createElement(
                      e.Fragment,
                      null,
                      e.createElement('img', {
                        className: 'my-workbench-icon',
                        src:
                          'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/workbench_icon.png',
                      }),
                      ' ',
                      p.formatMessage({ id: 'my_workbench' }),
                    )
                  : e.createElement(
                      'span',
                      null,
                      e.createElement('span', {
                        style: { color: '#0A47ED' },
                        dangerouslySetInnerHTML: {
                          __html: p
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
};
_(
  '.trialos4Navbar .nav-bar-content-box {\n  width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 38px;\n}\n.trialos4Navbar .nav-bar-content-box .nav-left {\n  width: 240px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: inherit;\n  background: #0033d7;\n  font-size: 14px;\n  font-family: PingFangSC-Semibold, PingFang SC;\n  font-weight: 600;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  padding-left: 18px;\n  cursor: pointer;\n  position: relative;\n}\n.trialos4Navbar .nav-bar-content-box .nav-left .rearch-title {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: inherit;\n}\n.trialos4Navbar .nav-bar-content-box .nav-left .rearch-content {\n  position: absolute;\n  left: 0;\n  bottom: -410px;\n  z-index: 10;\n}\n.trialos4Navbar .nav-bar-content-box .nav-list {\n  width: 960px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  text-align: left;\n}\n.trialos4Navbar .nav-bar-content-box .nav-list .nav-item {\n  margin-left: 40px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #000000;\n}\n.trialos4Navbar .nav-bar-content-box .nav-list .active-nav-item {\n  color: #0a47ed;\n}\n',
);
_(
  '.face-left-area--component {\n  width: 240px;\n}\n.face-left-area--component .face-left-header {\n  background: #0033d7;\n  height: 38px;\n}\n.face-left-area--component .face-left-content {\n  height: 410px;\n  background: #0a47ed;\n}\n.face-left-area--component .face-left-content .face-item-block {\n  border-bottom: 1px dotted #e7e7e7;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n}\n.face-left-area--component .face-left-content .face-item-block:last-child {\n  border-bottom: 0px dotted #e7e7e7;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list {\n  margin-left: 24px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-row {\n  margin-bottom: 8px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-row:last-child {\n  margin-bottom: 0px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-item {\n  font-size: 12px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 18px;\n  padding-right: 16px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.face-left-area--component .face-left-content .face-item-block .face-item-list .item-item:last-child {\n  padding-right: 0px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-left-header-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-left-header-item .title {\n  font-size: 14px;\n  font-family: PingFangSC-Semibold, PingFang SC;\n  font-weight: 600;\n  color: #ffffff;\n  line-height: 22px;\n  padding-left: 6px;\n}\n.face-left-area--component .face-left-content .face-item-block .face-left-header-item .left-imag-icon {\n  width: 16px;\n}\n',
);
var K = function(t) {
    return e.createElement(
      'div',
      { className: 'face-left-header-item' },
      t.icon,
      e.createElement('span', { className: 'title' }, t.title),
    );
  },
  X = function(t) {
    return e.createElement(
      'a',
      {
        target: '_blank',
        href: '/smo?keyword='.concat(t.children),
        className: 'item-item',
      },
      t.children,
    );
  },
  Z = function(t) {
    var a = o();
    t.result, t.list;
    return (
      n(function() {}, []),
      e.createElement(
        'div',
        { className: 'face-left-area--component' },
        e.createElement(
          'div',
          { className: 'face-left-content' },
          e.createElement(
            'div',
            { className: 'face-item-block' },
            e.createElement(K, {
              title: a.formatMessage({ id: 'trialos_1194' }),
              icon: e.createElement('img', {
                className: 'left-imag-icon',
                src:
                  'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/research_classify_icon2.png',
              }),
            }),
            e.createElement(
              'div',
              { className: 'face-item-list' },
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, null, '实体瘤'),
                e.createElement(X, { className: 'item-item' }, '非小细胞肺癌'),
                e.createElement(X, { className: 'item-item' }, '乳腺癌'),
              ),
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, { className: 'item-item' }, '淋巴瘤'),
                e.createElement(X, { className: 'item-item' }, '肝细胞癌'),
                e.createElement(X, { className: 'item-item' }, '前列腺癌'),
              ),
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, { className: 'item-item' }, '白血病'),
                e.createElement(X, { className: 'item-item' }, '胃癌'),
                e.createElement(X, { className: 'item-item' }, '小细胞肺癌'),
              ),
            ),
          ),
          e.createElement(
            'div',
            { className: 'face-item-block' },
            e.createElement(K, {
              title: a.formatMessage({ id: 'trialos_1195' }),
              icon: e.createElement('img', {
                className: 'left-imag-icon',
                src:
                  'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/research_classify_icon1.png',
              }),
            }),
            e.createElement(
              'div',
              { className: 'face-item-list' },
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, { className: 'item-item' }, '糖尿病'),
                e.createElement(X, { className: 'item-item' }, '高血压'),
                e.createElement(X, { className: 'item-item' }, '乙型肝炎'),
              ),
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, { className: 'item-item' }, '类风湿关节炎'),
                e.createElement(X, { className: 'item-item' }, '消化道溃疡'),
              ),
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, { className: 'item-item' }, '银屑病'),
                e.createElement(X, { className: 'item-item' }, '骨质疏松症'),
                e.createElement(X, { className: 'item-item' }, '脑卒中'),
              ),
            ),
          ),
          e.createElement(
            'div',
            { className: 'face-item-block' },
            e.createElement(K, {
              title: a.formatMessage({ id: 'trialos_1196' }),
              icon: e.createElement('img', {
                className: 'left-imag-icon',
                src:
                  'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/research_classify_icon1.png',
              }),
            }),
            e.createElement(
              'div',
              { className: 'face-item-list' },
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, { className: 'item-item' }, '抗感染'),
                e.createElement(X, { className: 'item-item' }, '流行性感冒'),
                e.createElement(X, { className: 'item-item' }, '镇痛'),
              ),
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(X, { className: 'item-item' }, '哮喘'),
                e.createElement(X, { className: 'item-item' }, '抑郁症'),
                e.createElement(X, { className: 'item-item' }, '神经分裂'),
                e.createElement(X, { className: 'item-item' }, '癫痫'),
              ),
              e.createElement(
                'div',
                { className: 'item-row' },
                e.createElement(
                  X,
                  { className: 'item-item' },
                  '血栓栓塞性疾病',
                ),
                e.createElement(X, { className: 'item-item' }, '高胆固醇血症'),
              ),
            ),
          ),
        ),
      )
    );
  };
Z.getInitialProps = (function() {
  var e = w(
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
d.Search;
var ee = null,
  te = function(a) {
    var r = o(),
      i = (a.result, a.list, a.channelCode),
      s = a.channelName,
      l = a.ifShowRearcher,
      m = void 0 === l || l,
      d = a.ifCanSwitch,
      f = void 0 === d || d,
      u = k(t(m), 2),
      h = u[0],
      b = u[1],
      v = k(t([]), 2),
      x = v[0],
      E = v[1],
      y = (function() {
        var e = w(
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
                        z.get('/os/channelManage/getChannels', {})
                      );
                    case 3:
                      (t = e.sent) &&
                        '[object Array]' ===
                          Object.prototype.toString.call(t) &&
                        E(t),
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
      N = function() {
        ee && clearTimeout(ee),
          (ee = setTimeout(function() {
            f && b(!1);
          }, 100));
      };
    return (
      n(function() {
        return (
          y(),
          function() {
            ee && clearTimeout(ee);
          }
        );
      }, []),
      e.createElement(
        'div',
        { className: 'navbar1111' },
        e.createElement(
          'div',
          { className: 'navbar2222' },
          e.createElement(
            'div',
            { className: 'trialos4Navbar' },
            e.createElement(
              'div',
              { className: 'nav-bar-content-box' },
              e.createElement(
                'div',
                {
                  className: 'nav-left',
                  onMouseOver: function() {
                    ee && clearTimeout(ee), f && b(!0);
                  },
                  onMouseOut: N,
                  onMouseLeave: N,
                },
                e.createElement(
                  'div',
                  { className: 'rearch-title' },
                  e.createElement(p, {
                    type: 'unordered-list',
                    style: { fontSize: '20px', marginRight: '10px' },
                  }),
                  e.createElement(
                    'span',
                    { style: { fontWeight: 600 } },
                    r.formatMessage({ id: 'trialos_1092' }),
                  ),
                ),
                e.createElement(
                  'div',
                  {
                    className: 'rearch-content',
                    style: { visibility: h ? 'visible' : 'hidden' },
                  },
                  e.createElement(Z, null),
                ),
              ),
              e.createElement(
                'nav',
                { className: 'nav-list' },
                (x || []).map(function(t, n) {
                  return e.createElement(
                    'a',
                    {
                      key: n,
                      target: '首页' == t.channelName ? '_self' : '_blank',
                      className: g('nav-item', {
                        'active-nav-item':
                          i === t.channelCode || s === t.channelName,
                      }),
                      href: /^https?:\/\//.test(t.customUrl)
                        ? t.customUrl
                        : 'http://'.concat(t.customUrl),
                    },
                    'en_US' === c() ? t.channelEnName : t.channelName,
                  );
                }),
              ),
            ),
          ),
        ),
      )
    );
  };
_(
  '.trialos4Footer {\n  background: #121212;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.trialos4Footer .footer-content-width-box {\n  width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 32px 0;\n}\n.trialos4Footer .footer-content-width-box .footer-left .left-text-item {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 24px;\n  margin-bottom: 16px;\n}\n.trialos4Footer .footer-content-width-box .footer-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box {\n  overflow: hidden;\n  display: flex;\n  justify-content: flex-end;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .appstore_img_btn {\n  cursor: pointer;\n  width: 130px;\n  height: 60px;\n  background: #000000;\n  border-radius: 8px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .appstore_img_btn:last-child {\n  margin-left: 16px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .download-btn-item {\n  cursor: pointer;\n  margin-left: 16px;\n  float: right;\n  width: 130px;\n  height: 60px;\n  background: #000000;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .download-btn-item .footer-icon {\n  width: 20px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-download-box .download-btn-item .download-text {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 22px;\n  margin-left: 14px;\n}\n.trialos4Footer .footer-content-width-box .footer-right .footer-right-text {\n  font-size: 12px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #7f878e;\n  line-height: 18px;\n  margin-top: 32px;\n  text-align: right;\n}\n',
);
var ne = function(t) {
    t.result, t.list;
    var a = o();
    return (
      n(function() {}, []),
      e.createElement(
        'div',
        { className: 'footer1111' },
        e.createElement(
          'div',
          { className: 'footer2222' },
          e.createElement(
            'div',
            { className: 'trialos4Footer' },
            e.createElement(
              'div',
              { className: 'footer-content-width-box' },
              e.createElement(
                'div',
                { className: 'footer-left' },
                e.createElement(
                  'div',
                  { className: 'left-text-item' },
                  a.formatMessage({ id: 'trialos_1097' }),
                  ':',
                ),
                e.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'http://www.chinadrugtrials.org.cn/index.html',
                    className: 'left-text-item',
                  },
                  a.formatMessage({ id: 'trialos_1101' }),
                ),
                ' ',
                e.createElement('br', null),
                e.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'http://www.cdr-adr.org.cn/',
                    className: 'left-text-item',
                  },
                  a.formatMessage({ id: 'trialos_1100' }),
                ),
                ' ',
                e.createElement('br', null),
                e.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'https://www.cpa.org.cn/',
                    className: 'left-text-item',
                  },
                  a.formatMessage({ id: 'trialos_1099' }),
                ),
                ' ',
                e.createElement('br', null),
                e.createElement('br', null),
                e.createElement(
                  'a',
                  { className: 'left-text-item' },
                  a.formatMessage({ id: 'trialos_1240' }),
                ),
              ),
              e.createElement(
                'div',
                { className: 'footer-right' },
                e.createElement(
                  'div',
                  { className: 'footer-download-box' },
                  e.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: 'https://apps.apple.com/cn/app/id1494271460',
                    },
                    e.createElement('img', {
                      className: 'appstore_img_btn',
                      src:
                        'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/appstore_iphone.png',
                      alt: '',
                    }),
                  ),
                  e.createElement(
                    'a',
                    { target: '_blank', href: 'http://app.mobilemd.cn/g4kd' },
                    e.createElement('img', {
                      className: 'appstore_img_btn',
                      src:
                        'https://cdn.mobilemd.cn/trialos-index-ssr/trialos4-ssr-static/appstore_android.png',
                      alt: '',
                    }),
                  ),
                ),
                e.createElement(
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
  },
  ae = function(t) {
    var n = t.children;
    return e.createElement('button', null, n);
  };
ae.defaultProps = { disabled: !1, btnType: 'default' };
var re = function() {
  return e.createElement(
    ae,
    { size: 'lg', btnType: 'danger' },
    '我是一个Button',
  );
};
_('');
var oe = a({ index: '0' }),
  ie = function(n) {
    var a = n.defaultIndex,
      r = n.onSelect,
      o = n.mode,
      i = n.defaultOpenSubMenus,
      c = n.children,
      s = k(t(a), 2),
      l = s[0],
      m = s[1],
      p = {
        index: l || '0',
        onSelect: function(e) {
          m(e), r && r(e);
        },
        mode: o,
        defaultOpenSubMenus: i,
      };
    return e.createElement(
      'ul',
      null,
      e.createElement(
        oe.Provider,
        { value: p },
        e.Children.map(c, function(t, n) {
          var a = t,
            r = a.type.displayName;
          if ('MenuItem' === r || 'SubMenu' === r)
            return e.cloneElement(a, { index: n.toString() });
        }),
      ),
    );
  };
ie.displayName = 'MenuItem';
var ce = function(t) {
  var n = t.children,
    a = t.disabled,
    o = t.index,
    i = r(oe);
  return e.createElement(
    'li',
    {
      onClick: function() {
        i.onSelect && !a && 'string' == typeof o && i.onSelect(o);
      },
    },
    n,
  );
};
ce.displayName = 'MenuItem';
var se = function(t) {
  var n,
    a = t.index,
    r = t.title,
    o = t.children;
  t.className;
  return e.createElement(
    'li',
    { key: a },
    e.createElement('div', { className: '' }, r),
    ((n = e.Children.map(o, function(t, n) {
      var r = t;
      if ('MenuItem' === r.type.displayName)
        return e.cloneElement(r, { index: ''.concat(a, '-').concat(n) });
    })),
    e.createElement('div', null, e.createElement('ul', null, n))),
  );
};
se.displayName = 'SubMenu';
var le = ie;
(le.Item = ce), (le.SubMenu = se);
export {
  v as Bobo,
  Z as FaceLeft,
  h as Foo,
  ne as IndexFooter,
  V as IndexHeader,
  te as IndexNavBar,
  Q as IndexSearchBar,
  le as Menu,
  re as TmButton,
};
