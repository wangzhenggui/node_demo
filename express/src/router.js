/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-10-13 13:34:37
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-10-13 13:36:08
 * @FilePath: /node_demo/express/src/router.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    success: true,
    status: 200,
    data: {
      name: 'wzg'
    }
  })
})

router.post('/', (req, res) => {
  res.send({
    success: true,
    status: 200,
    data: {
      name: 'wzg'
    }
  })
})


module.exports = router;