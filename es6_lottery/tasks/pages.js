//处理页面模板 相关的任务 打开文件 -> 定义文件存放目录 ->定义热更新
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('sercer'))
        .pipe(gulpif(args.watch,livereload()))
})