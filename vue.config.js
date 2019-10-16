// vue.config.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
  // baseUrl从vue cli 3.3起已经弃用了，用publicPath来代替
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/127.0.0.1:8080/sockjs-node (webpack)/hot/' : '/', // 部署应用包时的基本URL(这里可以看一下官方说明)
  outputDir: 'dist', // 打包时生成的生产环境构建稳健的目录
  assetsDir: 'static', // 放置生成的静态资源的目录
  filenameHashing: true,
  lintOnSave: true, // eslint-loader会将lint错误输出为编译警告
  productionSourceMap: false, // 如果你不需要生产环境的source map，可以将其设置为false，以加速生产环境的构建
  configureWebpack: {
    // 简单/基础配置，比如引入一个新插件
    plugins: []
  },
  chainWebpack: config => {
    // 链式配置
  },
  css: {
    // css预设器配置项
    loaderOptions: {
      css: {
 
      },
      postcss: {
 
      }
    }
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
    // proxy: {
    //     '/api': {
    //         target: '<url>',
    //         ws: true,
    //         changOrigin: true
    //     }
    // },
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {}
}