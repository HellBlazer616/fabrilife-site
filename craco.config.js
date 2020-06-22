const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#009E7F',
              '@link-color': '#009E7F',
              '@font-size-base': '14px',
              '@text-color': '#0D1136',
              '@font-family':
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,Noto Sans, sans-serif, Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
