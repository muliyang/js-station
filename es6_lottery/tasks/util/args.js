    //构建脚本 yargs处理命令行参数 在程序里识别命令行输入的参数
    //通过命令行输入参数‘production’：区分开发环境和线上环境
    //通过命令行输入参数‘watch’：是否需要监听开发环境上修改了文件。即是否修改文件后需要自动编译
    //通过命令行输入参数‘verbose’：是否需要详细输出命令行执行的日志
    //通过命令行输入参数‘sourcemaps’：处理映射
    //.argv 表示对命令行输入的内容 以字符串作为解析
    import yargs from 'yargs';
    const args = yargs
        .option('production',{
            boolean:true,
            default:false,
            describe: 'min all scripts'
        })

        .option('watch',{
            boolean:true,
            default:false,
            describe: 'watch all files'
        })

        .option('verbose',{
            boolean:true,
            default:false,
            describe: 'log'
        })

        .option('sourcemaps',{
            describe: 'force the creation of sourcemaps'
        })

        .option('port',{
            string:true,
            default:8080,
            describe: 'server port'
        })

        .argv