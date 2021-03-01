import './index.less';
declare const Index: {
  (props: any): JSX.Element;
  getInitialProps({
    store,
    isServer,
    history,
    match,
    route,
  }: {
    store: any;
    isServer: any;
    history: any;
    match: any;
    route: any;
  }): Promise<void>;
};
export default Index;
