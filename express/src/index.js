/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-10-13 13:34:37
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-10-13 13:35:28
 * @FilePath: /node_demo/express/src/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(router);

app.listen('80', () => {
  console.log('服务器启动成功!!')
})