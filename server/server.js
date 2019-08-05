const express = require('express');

// 文件模块
const {PORT} = require('./config.json');

const app = express();

// 引入路由
let allRouter = require('./routers');
app.use(allRouter)

// 静态资源服务器
app.use(express.static('./'))

app.listen(PORT,()=>{
    console.log('server is running (服务已启动...)');
})