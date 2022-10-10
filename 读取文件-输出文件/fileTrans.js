/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-10-10 15:01:00
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-10-10 15:27:08
 * @FilePath: /node_demo/读取文件-输出文件/fileTrans.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
const fs = require('fs');
const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/


const resolveCss = (html) => {
  const matchCss = regStyle.exec(html);
  if (matchCss) {
    const cssContext = matchCss[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname,  './context/index.css'), cssContext, (err) => {
      if (err) {
        console.log('css文件书写错误', err.message)
      }
      console.log('css文件书写成功')
    })
  }
}

const resolveJs = (html) => {
  const matchJs = regScript.exec(html);
  if (matchJs) {
    const jsContext = matchJs[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname,  './context/index.js'), jsContext, (err) => {
      if (err) {
        console.log('js文件书写错误', err.message)
      }
      console.log('js文件书写成功')
    })
  }
}

const resolveHtml = (html) => {
  const matchHtml = html.replace(regStyle, '<link rel="stylesheet" href="./index.css"></link>').replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './context/index.html'), matchHtml, (err) => {
    if (err) {
      console.log('html文件书写错误', err.message)
    }
    console.log('html文件书写成功')
  })
}

fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
  if (err) {
    return console.log('文件读取失败')
  }
  resolveCss(data);
  resolveJs(data);
  resolveHtml(data);
})