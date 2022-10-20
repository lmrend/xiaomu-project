/* const path = require('path');
module.exports = ({ file }) => {
    //const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;
    return {
        plugins: {
            autoprefixer: {},
            'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: designWidth,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
            landscape: false,
          },
        },
    }
  } */
  module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue({ file }) {
          return file.indexOf('vant') !== -1 ? 37.5 : 75;
        },
        propList: ['*'],
      },
    },
  };