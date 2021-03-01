import http from 'tms-request';
import { message } from 'antd';
// import {getUrlQuery} from './utils';
const getUrlQuery = id => {
  let query = location.search;
  const queryObj = {};
  if (query) {
    query = query.slice(1);
    const queryArr = query.split('&');
    queryArr.map(item => {
      const re = item.split('=');
      queryObj[re[0]] = re[1];
      return item;
    });
  }
  //console.log(queryObj)
  return queryObj[id];
};
/*

Modal.error({
    content: '账户在其它地方登录，请重新登录！！',
    okText: '知道了',
    onOk: () => location.href = '/login/'
});
*/

const errorNotice = {
  '310': {
    msg: '用户登录超时或在其他地方登录，请重新登录！',
    path: '/403',
  },
  '405': {
    msg: '用户登录超时或在其他地方登录，请重新登录！',
    path: '/403',
  },
  '406': {
    msg: '用户登录超时或在其他地方登录，请重新登录！',
    path: '/403',
  },
  '506': {
    msg: '系统其它异常错误!',
    path: '/500',
  },
};

function isIE() {
  return !!ActiveXObject || 'ActiveXObject' in this;
}

//const errorCode = ['310','405','406','500','403','506'];
const errorCodeArr = ['405', '406', '793'];

const handlerSelfLogic = res => {
  //console.log('拦截到的数据');
  // console.log( window.parent.location.origin);
  // console.log( window.location);
  //console.log(res);
  const ifErrors = res.data && res.data.errors && res.data.errors.length;

  if (ifErrors) {
    const errorCode = res.data.errors[0].code;
    const errorMessage = res.data.errors[0].message;

    if (errorCodeArr.indexOf(errorCode) > -1 && parent) {
      setTimeout(() => {
        message.error(errorMessage);
        parent.jumpToLogin();
      }, 1000);

      //return null;
    }
  }

  return res;
};

/*
    @see resHttpGen
    由于TMS 返回的数据 Code Message Data 均是大小
    并且没有success的参数，不能和组件tms-request融合
    所以需要拦截器特殊处理下
*/
function resHttpGen(baseURL) {
  return http.create({
    baseURL,
    timeout: 500000,
    requestInterceptor: config => {
      config.headers = {
        ...config.headers,
        // 'TM-Header-source' : 'osmanager' ,
      };
      //if(self !== top){
      config.headers['TM-Header-source'] = 'osmanager';
      //}
      return config;
    },
    responseInterceptor: response => {
      if (response.data.Data) {
        response.data.data = response.data.Data;
      }
      if (response.data.Code === '200') {
        response.data.success = true;
      } else if (response.data.Code === '-1' || response.data.Code === '1002') {
        response.data.errors = [
          {
            message: response.data.Message,
            code: response.data.Code,
          },
        ];
      }
      if (response.data.Code) {
        response.data.code = response.data.Code;
      }
      if (response.data.Message) {
        response.data.message = response.data.Message;
      }
      // console.log('resHttpGen', response)
      return response;
    },
  });
}

function httpGen(baseURL) {
  const sessionInfo =
    JSON.parse(sessionStorage.getItem('sso_loginInfo') || '{}') || {};
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
    // 'TM-Header-UserName': localInfo.userName || '',
    'content-type': 'application/json',
  };
  // console.log( newHeader, '--newHeader--' )
  const params = {
    baseURL,
    timeout: 120000,
    filter: isIE(),
    message,
    errorNotice,
    cache: isIE(),
    headers: {
      // 'TM-Header-Environment-Token':null
      ...newHeader,
    },
  };

  return http.create(params);
}

function httpHasHeader(baseURL, headers) {
  return http.create({
    baseURL,
    timeout: 120000,
    headers,
    filter: isIE(),
    message,
  });
}

export const $fetch = httpGen('');

export const ucenterHttp = httpGen('/api/ucenter-java');

export const ssoHttp = httpGen('/api/sso-web/sso/');
export const userHttp = ssoHttp;

export const masterDataHttp = httpGen('/api/master-data-service/');

export const masterDataRefactorHttp = httpGen(
  '/api/master-data-service-refactor/',
);

export const masterRecommendHttp = httpGen('/api/master-recommend-service/');

export const imHttp = httpGen('/api/im-service/');

export const myTrainHttp = httpGen('/api/tms-client/api/');

export const ompHttp = httpGen('/api/omp-service/');

export const siteHttp = httpGen('/api/site-web/');
export const siteHttp2 = (headers = {}) =>
  httpHasHeader('/api/site-web/', headers);

export const fileHttp = httpGen('/');

export const supplierHttp = httpGen('/api/trialpartner-web/');

export const mirsHttp = httpGen('/mirs-web/mirs/api/');

export const cspHttp = (headers = {}) =>
  httpHasHeader('/api/csp-service/', headers);
export const supplierHttpHeader = (headers = {}) =>
  httpHasHeader('/api/trialpartner-web/', headers);

export const eConfigHttp = httpGen('/api/csp-service/');
export const eventHttp = httpGen('/api/eventlake-web/');
export const calendarHttp = httpGen('/api/eventlake-calendar/');
export const webHttp = httpGen('/api/eventlake-web/');

export const socialHttp = httpGen('/api/social-point-service/');

export const handbookHttp = httpGen('/api/faq-service/');
export const trialOSHttp = httpGen('/api/trialos-service/');

export const liteSiteHttp = httpGen('/api/lite-site-service');
export const metricsHttp = httpGen('/api/metrics-service');
export const liveServiceHttp = httpGen('/api/live-service');
// export const liveeeHttp = httpGen('/api/liveee');
export const liveeeHttp = httpGen('/api/live-service');
export const tmsHttp = resHttpGen('/api/tms-client/api');

export default $fetch;
