//socket的origin
import $fetch from './fetch';

//export const socketOrigin = process.env.BUILD_ENV === 'dev' ? 'https://trialos.test.com' : location.origin;

export function getUrlQuery(id) {
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
}

export function cloneObj(obj) {
  if (obj === undefined || obj === null) return null;
  let str,
    newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  } else if (JSON) {
    str = JSON.stringify(obj);
    newobj = JSON.parse(str);
  } else {
    for (const i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
}

//将小数改为两位
export const oneToTow = str => {
  let res = String(str);
  if (res.length == 1) {
    return '0' + res;
  } else {
    return res;
  }
};

//html解码
export const htmlDecodeByRegExp = str => {
  let s = '';
  if (str.length == 0) return '';
  s = str.replace(/&amp;/g, '&');
  s = s.replace(/&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/&nbsp;/g, ' ');
  s = s.replace(/'/g, "'");
  s = s.replace(/&quot;/g, "'");
  s = s.replace(/"/g, '"');
  return s;
};
//html编码
export const htmlEncodeByRegExp = str => {
  var s = '';

  if (str.length == 0) return '';

  s = str.replace(/&/g, '&amp;');

  s = s.replace(/</g, '&lt;');

  s = s.replace(/>/g, '&gt;');

  s = s.replace(/ /g, '&nbsp;');

  s = s.replace(/\'/g, "'");

  s = s.replace(/\"/g, '"');

  return s;
};

export const sendSocketMessage = ({
  messageTopic,
  messageInvoke,
  messageContent,
  broadcastType,
}) => {
  const accountId = localStorage.getItem('sso_loginInfo')
    ? JSON.parse(localStorage.getItem('sso_loginInfo'))?.data?.accountId
    : '';
  const userInfo = localStorage.getItem('sso_loginInfo')
    ? JSON.parse(localStorage.getItem('sso_loginInfo'))
    : {};
  //console.log('--------------发送socket----------------');
  let messageJson = messageContent;
  messageJson.accountId = accountId;
  // messageContent.accountId = accountId;
  socket &&
    socket.emit('request', {
      messageTopic, //消息主题,
      messageInvoke, //消息调用执行,
      messageContent: messageJson, //消息内容
      broadcastType, //消息广播类型  BOTH PULL PUSH
    });
};

export function getSsoLoginInfo() {
  const sso_loginInfo = localStorage.getItem('sso_loginInfo') || { data: {} };
  if (sso_loginInfo) {
    if (typeof sso_loginInfo === 'object') {
      return (sso_loginInfo && sso_loginInfo.data) || {};
    }
    return (JSON.parse(sso_loginInfo) && JSON.parse(sso_loginInfo).data) || {};
  }
  return {};
}

//获取牛皮鲜
function getAdventStore() {
  const localStore = localStorage;
  const storeObj = {};
  for (let i = 0; i < localStore.length; i++) {
    const key = localStore.key(i);
    if (key.indexOf('advent_show_info_') > -1) {
      storeObj[key] = localStore.getItem(key);
    }
  }
  //console.log(storeObj);
  //debugger
  return storeObj;
}

//保存牛皮鲜
function setAdventStore(obj) {
  const store = obj || {};
  for (const i in store) {
    localStorage.setItem(i, store[i]);
  }
}

//清除缓存
export function clearAllCache() {
  const loginAccountInfo = localStorage.getItem('sso_loginAccountInfo');
  const openIeMode = localStorage.getItem('openIeMode'); // mirs 退出时需要保留的数据
  const hintEbmViewerInstall = localStorage.getItem('hintEbmViewerInstall'); // mirs 退出时需要保留的数据
  const thumb = localStorage.getItem('__thumb__'); // mirs 退出时需要保留的数据
  const adventStore = getAdventStore(); //获取
  localStorage.clear();
  sessionStorage.clear();
  setAdventStore(adventStore); //保存
  localStorage.setItem('sso_loginAccountInfo', loginAccountInfo);
  openIeMode && localStorage.setItem('openIeMode', openIeMode);
  hintEbmViewerInstall &&
    localStorage.setItem('hintEbmViewerInstall', hintEbmViewerInstall);
  thumb && localStorage.setItem('__thumb__', thumb);

  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  //console.log(keys);
  //debugger
  const patt = /(\.[a-z0-9]+\.(cn|com))$/;
  let cookieVal2 = `=0;path=/;expires=${new Date(0).toUTCString()}`;

  if (patt.test(location.hostname)) cookieVal2 += `;domain=${RegExp.$1}`;

  if (keys) {
    for (let i = keys.length; i--; ) {
      if (keys[i].indexOf('advent_show_info_') > -1) continue;
      document.cookie = `${keys[i]}=0;path=/csp;expires=${new Date(
        0,
      ).toUTCString()}`;
      document.cookie = keys[i] + cookieVal2;
    }
  }
}

//是否是浏览器环境
export const isBrowser = () => {
  return (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  );
};

export const setCookie = (name, value, days) => {
  const Days = 14 || days;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`;
};

export const getCookie = name => {
  let arr,
    reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
};

//强制判断是否登录
export const ifLogin = async () => {
  const token = getCookie('token');
  if (!token) {
    return false;
  }
  try {
    const loginData = await $fetch.get(
      `/api/sso-web/sso/sso/getAccountInfoByToken?r=${String(
        Math.random(),
      ).slice(2)}`,
    );
    if (loginData?.tokenStatus === 'kick') {
      return false;
    }
    return true;
  } catch (e) {
    //未登录
    return false;
  }
};

export const openWin = url => {
  var a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  const id = Math.random();
  a.setAttribute('id', id);
  // 防止反复添加
  if (!document.getElementById(id)) {
    document.body.appendChild(a);
  }
  a.click();
};
