module.exports = {
  parser: 'postcss-safe-parser',
  plugins: {
    autoprefixer: {
      grid: true,
    },
    colorguard: {},
    'css-mqpacker': {},
    stylefmt: {},
    cssnano: {},
    'immutable-css': {},
    lost: {},
    'postcss-assets': {},
    'postcss-color-short': {},
    'postcss-cssnext': {},
    'postcss-easing-gradients': {},
    'postcss-font-magician': {},
    'postcss-grid-kiss': {},
    'postcss-pxtorem': {},
    'postcss-sprites': {},
    'postcss-write-svg': {},
    'rucksack-css': {
      autoprefixer: true,
    },
  },
};

// module.exports = ({ file, options, env }) => ({
//   parser: file.extname === '.sss' ? 'sugarss' : false,
//   plugins: {
//     'postcss-import': { root: file.dirname },
//     'postcss-cssnext': options.cssnext ? options.cssnext : false,
//     'autoprefixer': env == 'production' ? options.autoprefixer : false,
//     'cssnano': env === 'production' ? options.cssnano : false
//   }
// })