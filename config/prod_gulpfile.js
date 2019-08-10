
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const del = require('del')
const cleanCSS = require('gulp-clean-css')
// const htmlmin = require('gulp-htmlmin')
const { 
        series,
        src,
        dest,
      } = require('gulp')
      

//拷贝HTML
function copyHtml(){
        // return src('../src/*.html')
        // .pipe(dest('../build'))
        // .pipe(connect.reload())  //实时监听
        return src(['../src/*.html', '../build/rev/**/*.json'])
        .pipe(revCollector())
        // .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('../build'))
        
}

//拷贝JS
// function copyJS(){
//         return src("../src/scripts/*.js")
//         .pipe(dest("../build/scripts"))
//         .pipe(connect.reload())
// }

//JS 模块化 *核心
function packJS () {
        return src('../src/scripts/*.js')
          .pipe(webpack({
              mode: 'production',
              entry: {
                  nubia:'../src/scripts/nubia.js',
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
                  }
                ]
              }
            }))
          .pipe(rev())
          .pipe(dest('../build/scripts'))
          .pipe(rev.manifest())
          .pipe(dest('../build/rev/scripts'))
      }
      

//CSS模块化 
function packCSS () {
        return src('../src/styles/nubia.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(rev())
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(dest('../build/styles'))
          .pipe(rev.manifest())
          .pipe(dest('../build/rev/styles'))
      } 
      
// 删除build文件夹
function delbuildFolder() {
        return del('../build/**', {
          force: true
        })
      }
      
exports.default = series(delbuildFolder, packJS, packCSS, copyHtml) //parallel 解决并行任务