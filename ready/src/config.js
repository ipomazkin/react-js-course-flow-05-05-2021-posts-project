export const ROUTER_TYPE_BROWSER = 'browser';
export const ROUTER_TYPE_HASH = 'hash';

export const isProd = process.env.NODE_ENV === 'production';

export const appConf = {
  name: 'postsApp',
  isProd,
  router: {
    type: isProd ? ROUTER_TYPE_BROWSER : ROUTER_TYPE_HASH,
  },
  api: {
    baseURL: "https://60bb880442e1d00017620c95.mockapi.io",
  },
};
