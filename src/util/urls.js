// import { tmsEncodeURIComponent } from 'src/util/utils';
// import { message } from 'antd';
// import { createBrowserHistory } from 'history';
// import intl from 'react-intl-universal';
//
// export const history = createBrowserHistory();
//
//

// // 获取url参数
// export const getQueryString = function(names, urls) {
//     urls = urls || window.location.href;
//     urls && urls.indexOf('?') > -1 ? (urls = urls.substring(urls.indexOf('?') + 1)) : '';
//     const reg = new RegExp(`(^|&)${names}=([^&]*)(&|$)`, 'i');
//     const r = urls ? urls.match(reg) : window.location.search.substr(1).match(reg);
//     if (r != null && r[2] != '') return decodeURI(r[2]);
//
//     return null;
// };
//
// export const qs = getQueryString;
//
// // 解析url {} 值
// export const parseApiUrl = function(str, data) {
//     const tmpl = `${'var __p=[];' + 'with(obj||{}){__p.push(\''}${str
//             .replace(/\\/g, '\\\\')
//             .replace(/'/g, '\\\'')
//             .replace(/{([\s\S]+?)}/g, function(match, code) {
//                 return `',${code.replace(/\\'/, '\'')},'`;
//             })
//             .replace(/\r/g, '\\r')
//             .replace(/\n/g, '\\n')
//             .replace(/\t/g, '\\t')}');}return __p.join("");`,
//         /* jsbint evil:true */
//         func = new Function('obj', tmpl);
//     return data ? func(data) : func;
// };
//
// const WHITE_SOFT_MAPPER = {
//     eCollege: '09',
//     eWorkflow: 'flexflow'
// };
//
// /**
//  * @deprecated prefer goSoftById
//  *
//  * @param {string} name appName
//  * @param {tenantType} tenant tenant
//  */
// export const goSoft = (name, tenant) => (type = 'menu', url = '') => {
//     try {
//         let softCode = null;
//         softCode = tenant.softs.find(s => s.softName === name).softCode;
//         switch (type) {
//             case 'menu':
//             case 'single':
//                 const toPath = `/tmscdx/${type}/${`m_${softCode}`}/${tmsEncodeURIComponent({
//                     tenantId: tenant.tenantId,
//                     tenantName: tenant.tenantName,
//                     url
//                 })}`;
//                 window.open(toPath, '_self');
//                 // history.push(toPath);
//                 break;
//             default:
//                 console.error('goSoft into worng branch');
//                 break;
//         }
//     } catch (e) {
//         message.error(intl.get('trialos_122'));
//     }
// };
//
// export const goSoftById = (softId, tenant) => (type = 'menu', url = '') => {
//     try {
//         let softCode = null;
//         softCode = tenant.softs.find(s => s.softId === softId).softCode;
//         switch (type) {
//             case 'menu':
//             case 'single':
//                 const toPath = `/tmscdx/${type}/${type === 'menu' ? `m_${softCode}` : softCode}/${tmsEncodeURIComponent(
//                     {
//                         tenantId: tenant.tenantId,
//                         tenantName: tenant.tenantName,
//                         url
//                     }
//                 )}`;
//                 console.log(toPath);
//                 // history.push(toPath);
//                 window.open(toPath, '_self');
//                 break;
//             default:
//                 console.error('goSoft into worng branch');
//                 break;
//         }
//     } catch (e) {
//         console.error(e);
//         message.error('未注册的软件!');
//     }
// };
