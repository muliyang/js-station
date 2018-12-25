import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//创建清空任务 清空两个目录， 在每次编译放置文件之前清空上一次的文件
gulp.tesk('clean',()=>{
    return del(['server/public','server/views'])
})
