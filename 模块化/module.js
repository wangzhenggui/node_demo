/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-10-11 13:37:16
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-10-11 13:58:46
 * @FilePath: /node_demo/模块化/module.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
module.exports.a = '123';

module.exports.call = function () {
  console.log('call function')
}

module.exports = {
  c: 1234,
  d: function () {
    console.log('d')
  }
}

console.log(module)