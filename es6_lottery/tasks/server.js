//gulp处理服务器相关脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';


gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();  //如果不是出于监听下 直接返回callback
    //harmony 在当前命令行 执行后面的脚本 项目中启动服务是用bin目录下的www脚本
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();

    //gulp.watch => server 监听js和ejs 文件发生改变的时候 浏览器热刷新
    //.watch是对文件的监听 数组是要监听的路径 对js和模板监听
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);  //通知服务器文件改动了
    })

    //监听需要重启服务的文件 路由 start api 重启
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)();
    })
})