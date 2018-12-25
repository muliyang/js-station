     var http = require('http');
     var url = require('url');
     var qs = require('querystring');
     var getUser = require('./db.js');

     http.createServer(function(request,response){
        response.writeHead('200',{
            'Content-Type':'applycation/json;charset=utf-8',
            'Access-Control-Allow-Origin' : '*'
        })

        var _url = request.url;
        console.log(_url);
        var _path = url.parse(_url).pathname;
        console.log(_path);

        switch(_path){
            case '/user':
                console.log(1);
                break;
            case '/login':
                console.log(2);
                var _data = '';
                request.addListener('data',function(data){
                    _data += data;
                });

                request.addListener('end',function(data){
                    console.log(_data);
                    var ops = qs.parse(_data);
                    var message = {};
                    getUser(ops,function(res){
                        if(res.length === 0){
                            message.status = 'false';
                            message.data = "用户名或密码错误！";
                            message.time = '2018/11/17';
                        }else{
                            message.status = 'true';
                            message.data = '登录成功';
                            message.time = '2018/11/17';
                            message.role = 'admin';
                        }
                    })

                })
                break;
        }
     }).listen(3080);

    






