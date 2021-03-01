import axios from 'axios';
const source = axios.CancelToken.source();
//import { isBrowser } from '@umijs/utils/lib/ssr.js'

//const isBrowser = !global;  //是否浏览器环境
const isBrowser = () => {
  return (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  );
};

//import {mode,host} from '../../build/build.conf';

const systemStatus = {
  '310': {
    msg: '无session信息!',
    path: '/403',
  },
  '405': {
    msg: 'session过期',
    path: '/403',
  },
  '406': {
    msg: '用户已在其他地方登陆!!',
    path: '/403',
  },
  '506': {
    msg: '系统其它异常错误!',
    path: '/500',
  },
  '407': {
    msg: '系统其它异常错误!',
    path: '/',
  },
};

// B端路由
const BRouterList = [
  '/live-front/LiveBroadcast',
  '/live-front/LiveAudience',
  '/train/Mytraining/liveCourseCenterDetail',
];

function goLogin(redirectUrl) {
  //token失效时的处理
  // const { pathname } = location;
  // if (BRouterList.some(item => pathname.includes(item))) {
  //     //window.location.href = '/login/';
  // } else {
  //    // window.location.href = `/live-front/clogin?redirectUrl=${redirectUrl}`;
  // }
}

function requestInstance(newConfig) {
  // let environmentToken;

  // if (typeof sessionStorage !== 'undefined') {
  //     environmentToken = sessionStorage.getItem('environmentToken');
  // }
  const headers = {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json;version=3.0;compress=false;',
  };

  // if (environmentToken && typeof environmentToken === 'string') {
  //     headers['TM-Header-Environment-Token'] = environmentToken;
  // }
  //const outConfig = null;
  //if(global){
  //     headers.referer = 'http://trialos.test.com';
  //     headers.host = 'trialos.test.com';
  //     headers.Cookie = global.client_cookies;
  //     headers.cookie = global.client_cookies;
  //}

  let axiosParams = {
    headers: { ...headers },
    timeout: 500000,
  };
  if (Object.prototype.toString.call(newConfig) === '[object Object]') {
    axiosParams = {
      ...axiosParams,
      ...newConfig,
    };
  }

  if (Object.prototype.toString.call(newConfig) === '[object String]') {
    axiosParams = {
      ...axiosParams,
      baseURL: newConfig,
    };
  }

  //非浏览器环境
  if (isBrowser()) {
    // axiosParams.baseURL = mode[process.env.BUILD_ENV] + axiosParams.baseURL;
    //axiosParams.baseURL = axiosParams.baseURL;
  }

  const fetch = axios.create(axiosParams);

  fetch.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      if (isBrowser()) {
        const sessionInfo =
          JSON.parse(
            sessionStorage.getItem('sso_loginInfo') ||
              sessionStorage.getItem('live_sso_loginInfo') ||
              '{}',
          ) || {};
        const { tenantId, userId } = sessionInfo;
        // const environmentToken = sessionStorage.getItem('environmentToken');
        let localInfo = localStorage.getItem('sso_loginInfo');
        if (localInfo) {
          localInfo = JSON.parse(localInfo).data || {};
        } else {
          localInfo = {};
        }
        // console.log(`-------------------------localInfo-------------------------`);
        // console.log(localInfo);

        const newHeader = {
          // 'TM-Header-CompanyId': tenantId || '',
          // 'TM-Header-UserId': userId || '',
          // 'TM-Header-TenantId': tenantId || '',
          // 'TM-Header-AccountId': localInfo.accountId || '',
          // 'TM-Header-AccountName': encodeURIComponent(localInfo.accountName || ''),
          // 'TM-Header-UserName': localInfo.userName,
          'content-type': 'application/json',
        };
        config.headers = {
          ...config.headers,
          ...newHeader,
        };
      } else {
        const newHeader = {
          //Cookie: global && global.client_cookies || null,
          // Cookie: global?.client_cookies || null,
          // Host: host[process.env.BUILD_ENV] || null,
          // referer:mode[process.env.BUILD_ENV] || null,
          //'TM-Header-Environment-Token': null,
        };
        config.headers = {
          ...config.headers,
          ...newHeader,
        };
        config.baseURL = `${global.ssr?.location?.protocol}//${global.ssr?.location?.host}${config.baseURL}`;
        config.headers.cookie = global?.ssr?.context?.req?.cookie || null;
      }
      // console.log(`-----------------------config-----------------------`);
      // console.log(config);
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  fetch.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      //console.log(`-----------response-------------`);
      //console.log(response);
      if (!isBrowser()) {
        //console.log(`[SSR: recv req: ${response.request.url}, data:`);
        //console.log(response.data);
        if (response.headers['set-cookie']) {
          //console.log(`server set cookie: ${response.headers['set-cookie']}`);
          global.ssr.context.response['set-cookie'].push(
            response.headers['set-cookie'],
          );
        }
      }
      if (response.status === 200) {
        const { data } = response;
        const errors = data?.errors || [];
        if (data.success) {
          return data.data;
        }
        if (data.Code == '200') {
          return data.Data;
        }
        if (data.Code && data.Code != '200') {
          let errorObj = {
            message: data.Message,
            code: data.Code,
          };
          errors.push(errorObj);
        }
        let message;
        let code;
        if (Array.isArray(errors) && errors.length) {
          const firstError = errors[0];
          const errorNotice = response.config.errorNotice || {};
          const notice = {
            ...systemStatus,
            ...errorNotice,
          };
          message = firstError.message;
          code = firstError.code;
          if (code in notice) {
            source.cancel();
            const { msg } = notice[code];
            //const { pathname, search } = window.location;
            //const redirectUrl = encodeURIComponent(`${pathname}${search}`);
            if (response?.config?.message) {
              response.config.message.error(msg, 3, () => {
                goLogin();
              });
              setTimeout(() => {
                goLogin();
              }, 1500);
              return;
            }
            goLogin();
            return;
          }
          return Promise.reject({
            message,
            code,
          });
        }
      } else {
      }
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      //console.log(`-------------error---------------`);
      //console.log(error);
      const defaultMessage = '网络错误 稍后再试';

      if (error.__CANCEL__) {
        return;
      }

      if (error) {
        return Promise.reject({
          message: error.message || defaultMessage,
          code: null,
        });
      }

      return Promise.reject({
        message: defaultMessage,
        code: null,
      });
    },
  );

  return fetch;
}

const fetch = requestInstance({});
export const $fetch = requestInstance({});
export const liveHttp = requestInstance({ baseURL: '/api/live-service' });
export const invoiceHttp = requestInstance({ baseURL: '/api/invoice-service' });
export const cspHttp = requestInstance({ baseURL: '/api/csp-service' });
export const ssoHttp = requestInstance({ baseURL: '/api/sso-web/sso' });
export const masterDataHttp = requestInstance({
  baseURL: '/api/master-data-service/',
});

export const ucenterHttp = requestInstance('/api/ucenter-java');
export const userHttp = ssoHttp;

export const masterDataRefactorHttp = requestInstance(
  '/api/master-data-service-refactor/',
);

export const masterRecommendHttp = requestInstance(
  '/api/master-recommend-service/',
);

export const imHttp = requestInstance('/api/im-service/');

export const myTrainHttp = requestInstance('/api/tms-client/api/');

export const ompHttp = requestInstance('/api/omp-service/');

export const siteHttp = requestInstance('/api/site-web/');
//export const siteHttp2 = (headers = {}) => httpHasHeader('/api/site-web/', headers);

export const fileHttp = requestInstance('/');

export const eConfigHttp = requestInstance('/api/csp-service/');
export const eventHttp = requestInstance('/api/eventlake-web/');
export const calendarHttp = requestInstance('/api/eventlake-calendar/');
export const webHttp = requestInstance('/api/eventlake-web/');

export const socialHttp = requestInstance('/api/social-point-service/');

export const handbookHttp = requestInstance('/api/faq-service/');
export const trialOSHttp = requestInstance('/api/trialos-service/');

export const liteSiteHttp = requestInstance('/api/lite-site-service');
export const metricsHttp = requestInstance('/api/metrics-service');
export const liveServiceHttp = requestInstance('/api/live-service');
// export const liveeeHttp = requestInstance('/api/liveee');
export const liveeeHttp = requestInstance('/api/live-service');
export const tmsHttp = requestInstance('/api/tms-client/api');
export const thirdService = requestInstance('/api/third-service/');

export default fetch;
