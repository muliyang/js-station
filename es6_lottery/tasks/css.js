import gulp from 'gulp';
import gulp from 'gulp-if';
import livereload from 'gulp-reload';
import args from './util/args.js';
//配置处理css相关脚本的任务 =>将文件打开 -> 原封不动的存放到server目录下去
gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
})