'use strict'

require('source-map-support').install()

require("tsconfig-paths").register({
  baseUrl: './',
  paths: {
    '@src/*': [ 'src/*' ],
    '@test/*': [ '__tests__/*' ]
  }
});

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
    noImplicitAny: false,
    types: [
      "node"
    ]
  }
})

// const { resolve } = require('path');

const config = require('./gatsby-node-impr');

exports.onCreateNode = config.onCreateNode;

// exports.createPages = config.createPages;

// exports.sourceNodes = config.sourceNodes;

// exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
//   const config = getConfig()

//   config.module.rules = [
//     ...config.module.rules.filter(rule => String(rule.test) !== String(/\.tsx?$/)),
//     {
//       test: /\.tsx?$/,
//       use: [
//         loaders.js(),
//         {
//           loader: resolve('lib/remove-data-test-attr-loader.js')
//         }
//       ]
//     },
//   ]

//   config.resolve.alias = {
//     ...config.resolve.alias,
//     '@src': resolve(__dirname, 'src'),
//     '@test': resolve(__dirname, '__tests__')
//   }

//   actions.replaceWebpackConfig(config)
// }
