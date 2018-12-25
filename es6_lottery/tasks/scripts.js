import gulp from 'gulp';     //构建是基于gulp的
import gulpif from 'gulp-if';  //gulp语句中做if判断的
import concat from 'gulp-concat'; //处理文件拼接
import webpack from 'webpack';   //打包工具
import gulpWebpack from 'webpack-stream';  //结合文件流处理
import named from  'vinyl-named';  //文件重命名标志
import livereload from 'gulp-livereload';    //热更新
import plumber from 'gulp-plumber';    //处理文件信息流
import rename from 'gulp-rename';    //  处理文件重命名
import uglify from 'gulp-uglify'    //压缩js css
import {log,color} from 'gulp-util';    //颜色 色彩的输出
import args from './util/args'; //对命令行参数解析的包
//js相关脚本 //创建任务  //.src打开文件目录
// pipe(plumber默认处理错误机制  //.pipe(named 拿到文件 //gulpWebpack webpack编译
//dest 文件编译之后存放位置  //rename 编译后重命名文件 //uglify 压缩  //dest存放压缩后的文件位置
//rename 重命名，生成的文件名是xx.cp.min.js  //gulpif 根据命令行是否热刷新 livereload
gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler:function(){

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            mudule:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
            }),null,(err,stats)=>{
                log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                    chunks:false
                }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({
            compress:{properties:false},
            output:{'quote_keys':true}
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})