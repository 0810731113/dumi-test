import CryptoJS from 'crypto-js';
const CRYPTOJSKEY = '4028eea46a5e4cf6016a5e4cf6f70000';
const encrypt = plaintText => {
  const options = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  };
  const key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY);
  const encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
  const encryptedBase64Str = encryptedData.toString();
  return CryptoJS.SHA256(encryptedBase64Str).toString(CryptoJS.enc.Hex);
};

export function getSign(res) {
  let sso_loginInfo;
  try {
    sso_loginInfo = JSON.parse(sessionStorage.getItem('sso_loginInfo'));
    if (sso_loginInfo === null) {
      // location.href = '/login/';
      sso_loginInfo = {};
    }
  } catch {
    // location.href = '/login/';
  }
  const obj = {
    appId: 'live',
    fileName: res.name,
    contentType: res.type,
    tenantId: sso_loginInfo.tenantId,
  };
  const str = Object.keys(obj)
    .map(function(key) {
      return `${key}=${obj[key]}`;
    })
    .sort()
    .join('&');
  return {
    ...obj,
    sign: encrypt(str),
  };
}
