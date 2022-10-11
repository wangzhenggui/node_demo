const express = require('express');
const router = require('./router');


const app = express();

app.use(router);

app.listen('80', () => {
  console.log('服务器启动成功!!')
})