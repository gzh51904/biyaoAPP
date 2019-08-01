var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database: 'gooda',
    multipleStatements: true
});

pool.query('select * from student', function(error, rows){
    console.log(rows);
});

   // 配置参数
    // ...
    module.exports =(sql)=> {
            return new Promise((resolve,reject)=>{
                pool.query(sql, function(error, data){
                    if(error) return reject(error);
                    resolve(data);
                });
            })
    }