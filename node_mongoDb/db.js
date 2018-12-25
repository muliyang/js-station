    //db.js 访问mongoDb 数据库

    //getUser 是 '/user' 时输出的数据 
    var getUser = function(options,callback){
        var mongodb = require('mongodb');
        //2.获取与数据库服务器的连接   new mongodb.Server(ip,port,options)
        var server = new mongodb.Server('127.0.0.1','27017',{'auto_connection':true});
        //3.通过连接获取数据库实例  new mongodb.Db('数据库名称'，获取与数据库连接对象，安全策略)
        var _users = new mongodb.Db('firstDb',server,{safe:true});
        _users.open((err,appdb)=>{
            if(!err){
                //5.进行下一步的操作，打开存储数据的集合
                //appdb.collection('数据库的名称||集合的名称',安全策略,function(){})
                _users.collection('firstDb',{safe:true},function(err,collection){
                    if(!err){
                        //6.在collection里面去获取数据
                        collection.find(options).toArray(function(err,doc){
                            //7.数据将放进callback里面
                            if(!err) callback(doc);
                        })
                    }
                })
            }
        })
    }

    var getGoods = function(callback){

    }

    module.exports = [getUser,getGoods];

