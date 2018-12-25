//当源文件发生改变的时候 自动编译 并将文件放到server里
import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import args from './util/args'
gulp.task('browser',(cb)=>{
    if(!args.watch) return cb(); //如果没有用watch参数监听 直接返回回调
    gulp.watch('app/**/*.js',['scripts']);  //监听app的原始js发生改变的时候 自动调用scripts构建脚本
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});