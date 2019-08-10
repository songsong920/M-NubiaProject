const connect = require('gulp-connect')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const del = require('del')
const cleanCSS = require('gulp-clean-css')
// const htmlmin = require('gulp-htmlmin')
const proxy = require('http-proxy-middleware')
const { 
        series,
        src,
        dest,
        watch,
        parallel
      } = require('gulp')
      

//拷贝HTML
function copyHtml(){
        return src('../src/**/*.html')
        .pipe(dest('../dev'))
        .pipe(connect.reload())  //实时监听

}
//拷贝Icons
function copyIcons(){
    return src('../src/icons/**/*')
    .pipe(dest('../dev/icons'))
    .pipe(connect.reload())  //实时监听

}
//拷贝libs
function copyLibs(){
    return src('../src/libs/**/*')
    .pipe(dest('../dev/libs'))
    .pipe(connect.reload())  //实时监听

}

//拷贝JS
// function copyJS(){
//         return src("../src/scripts/*.js")
//         .pipe(dest("../dev/scripts"))
//         .pipe(connect.reload())
// }

//JS 模块化 *核心
function packJS () {
        return src('../src/scripts/**/*.js')
          .pipe(webpack({
              mode: 'development',
              entry:{
                    nubia :'../src/scripts/nubia.js',
              },
              output: {
                filename: '[name].js'
              },
              module: {
                rules: [
                  {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                      }
                    }
                  },
                  {
                        test:/\.html$/,
                        loader:"string-loader"
                  }
                ]
              }
            }))
          .pipe(dest('../dev/scripts'))
          .pipe(connect.reload())
      }
      

//CSS模块化 
function packCSS () {
        return src(['../src/styles/**/*.scss'])
          .pipe(sass().on('error', sass.logError))
          .pipe(dest('../dev/styles'))
          .pipe(connect.reload())
      } 
      
// 删除dev文件夹
function delDevFolder() {
        return del('../dev/**', {
          force: true
        })
      }
      
// 启动WebServer
function webServer () {
        return connect.server({
          host: 'localhost',
          root: '../dev',
          port: 1000,
          livereload: true,
          middleware() {
            return [
              proxy('/api', {
                target: 'http://m.nubia.com',
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
              })
            ]
          }
        })
      }
//监听
function watcher () {
        watch('../src/**/*.html', series(copyHtml))
        watch('../src/scripts/**/*.js', packJS)
        watch('../src/styles/**/*.scss', packCSS)
        watch("../src/icons/**/*",copyIcons)
        watch("../src/libs/**/*",copyLibs)
      }

exports.default = series(delDevFolder, packJS, packCSS, parallel(copyHtml,copyLibs,copyIcons), parallel(webServer, watcher)) //parallel 解决并行任务