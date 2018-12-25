import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';    //处理包的顺序 文件先后顺序
//任务之间的关键关系 和 先后顺序 clean一定是放在最前面的 数组是说明数组内的任务是最后的
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']));  //server一定是在最后执行


