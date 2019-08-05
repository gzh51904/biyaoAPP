const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils')

const { mongo: { find }} = require('../db');

//获取项目信息
Router.route('/').get(async (req, res) => {
    let result;
    try {
        result = await find("cart")
        result = formatData({
            data: result
        })
    } catch (err) {
        result = formatData({
            code: 250,
            data: err
        })
    }
    res.send(result);
});

// 查找单个项目
// Router.route('/:id').get(async (req, res) => {
//     // 动态路由: 参数id会被express格式化到req.params
//     let {
//         id
//     } = req.params;
//     console.log('params:', req.params)
//     let _id = id*1;
//     console.log('"id" :', _id)
//     let result;
//     try {
//         result = await find("items", {
//             "id": _id
//         })
//         result = formatData({
//             data: result
//         })
//         console.log(result)
//     } catch (err) {
//         result = formatData({
//             code: 250,
//             data: err
//         })
//     }
//     console.log(result)
//     res.send(result);

// })

module.exports = Router;