const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');
const path = require('path')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
  config.module
    .rule('ts')
    .use('ts-loader')
    .tap(options => {
      options = merge(options, {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: 'vant',
              libraryDirectory: 'es',
              style: true
            })
          ]
        }),
        compilerOptions: {
          module: 'es2015'
        }
      });
      return options;
    });
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  devServer: {
    port: 8080, // 端口
    proxy: 'https://www.easy-mock.com' // 设置代理
  }
}