/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-10-11 10:46:26
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-10-11 10:59:28
 * @FilePath: /node_demo/服务器/http.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('请求到达')
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('请求到达')
})

server.listen('80', () => {
  console.log('服务器启动成功')
})