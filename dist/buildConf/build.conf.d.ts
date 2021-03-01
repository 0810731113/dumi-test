export declare const getHost: () => string;
export declare const devConf: {
  devServer: {
    port: number;
    https: boolean;
  };
  devtool: string;
};
declare const conf: {
  dev: {
    publicPath: string;
  };
  test: {
    publicPath: string;
  };
  uat: {
    publicPath: string;
  };
  prod: {
    publicPath: string;
  };
};
export declare const envConf: {
  dev: {
    publicPath: string;
  };
  test: {
    publicPath: string;
  };
  uat: {
    publicPath: string;
  };
  prod: {
    publicPath: string;
  };
};
export declare const outputPath = 'dist/';
export declare const buildEnv: string;
export declare const mode: {
  dev: string;
  test: string;
  uat: string;
  prod: string;
};
export declare const host: {
  dev: string;
  test: string;
  uat: string;
  prod: string;
};
export declare const target: any;
export declare const publicPath: any;
export default conf;
