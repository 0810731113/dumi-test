import { PUBLIC_PATH } from './const';

const os = require('os');
const ifaces = os.networkInterfaces();

export const getHost = () => {
  let host = '127.0.0.1';
  let hasFound = false;

  for (const dev in ifaces) {
    ifaces[dev].forEach(function(details) {
      if (hasFound) return;
      if (
        details.family === 'IPv4' &&
        details.address.indexOf('192.168') >= 0
      ) {
        host = details.address;
        hasFound = true;
      }
    });
  }

  return host;
};

//开发环境需要修改端口 https
export const devConf = {
  devServer: {
    port: 8111,
    https: true,
  },
  devtool: 'eval',
};

//不同环境需要的变量
const conf = {
  dev: {
    publicPath: PUBLIC_PATH,
  },
  test: {
    publicPath: PUBLIC_PATH,
  },
  uat: {
    publicPath: PUBLIC_PATH,
  },
  prod: {
    publicPath: PUBLIC_PATH,
  },
};

export const envConf = conf;

export const outputPath = 'dist/';
export const buildEnv = process.env.BUILD_ENV || 'test';
//const path = env === 'development' ? 'http://127.0.0.1:8000/' : outputPath;

export const mode = {
  dev: 'http://trialos.dev.com',
  test: 'http://trialos.test.com',
  uat: 'https://uat.trialos.com',
  prod: 'https://www.trialos.com',
};

export const host = {
  dev: 'trialos.dev.com',
  test: 'trialos.test.com',
  uat: 'uat.trialos.com',
  prod: 'www.trialos.com',
};

export const target = mode[buildEnv];
export const publicPath = envConf[buildEnv].publicPath;

export default conf;
