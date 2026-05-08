"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[8786],{98786:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Webpack \u6700\u521D\u7684\u76EE\u6807\u5C31\u662F\u5B9E\u73B0\u524D\u7AEF\u9879\u76EE\u7684\u6A21\u5757\u5316\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5B83\u6240\u89E3\u51B3\u7684\u95EE\u9898\u662F",paraId:0,tocIndex:0},{value:"\u5982\u4F55\u5728\u524D\u7AEF\u9879\u76EE\u4E2D\u66F4\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u7EF4\u62A4\u9879\u76EE\u4E2D\u7684\u6BCF\u4E00\u4E2A\u8D44\u6E90",paraId:0,tocIndex:0},{value:"webpack-cli",paraId:1,tocIndex:1},{value:" \u4F5C\u7528\u5C31\u662F\u53EF\u4EE5\u8BA9\u6211\u4EEC\u6267\u884C ",paraId:1,tocIndex:1},{value:"webpack",paraId:1,tocIndex:1},{value:" \u547D\u4EE4",paraId:1,tocIndex:1},{value:"\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u540D\u53EB",paraId:2,tocIndex:3},{value:"webpackDemo",paraId:2,tocIndex:3},{value:"\u7684\u6587\u4EF6\u5939\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u4EE3\u7801",paraId:2,tocIndex:3},{value:`$ npm i webpack webpack-cli --save-dev
`,paraId:3,tocIndex:3},{value:"\u65B0\u5EFA\u4E00\u4E2A",paraId:4,tocIndex:3},{value:"src/index.js",paraId:4,tocIndex:3},{value:"\u6587\u4EF6",paraId:4,tocIndex:3},{value:`function init() {
  let element = document.createElement('div');
  element.innerHTML = 'Hello Webpack';
  document.body.appendChild(element);
}

init();
`,paraId:5,tocIndex:3},{value:"\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A dist/index.html \u6587\u4EF6",paraId:6,tocIndex:3},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="main.js"><\/script>
  </head>
  <body></body>
</html>
`,paraId:7,tocIndex:3},{value:"\u5B8C\u6210\u4E0A\u8FF0\u4E4B\u540E\u6267\u884C",paraId:8,tocIndex:3},{value:"npx webpack",paraId:8,tocIndex:3},{value:"\uFF0C\u5C31\u770B\u4E00\u770B\u5230 dist \u91CC\u9762\u751F\u6210\u4E86",paraId:8,tocIndex:3},{value:"main.js",paraId:8,tocIndex:3},{value:",\u6253\u5F00",paraId:8,tocIndex:3},{value:"index.html",paraId:8,tocIndex:3},{value:"\u6548\u679C\u5C31\u80FD\u770B\u5230\u4E0A\u9762\u7684\u6587\u5B57\uFF0C",paraId:8,tocIndex:3},{value:"\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u6DFB\u52A0\u4E00\u4E2A",paraId:9,tocIndex:4},{value:"webpack.config.js",paraId:9,tocIndex:4},{value:`const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
`,paraId:10,tocIndex:4},{value:"\u9664\u4E86 entry \u7684\u914D\u7F6E\u4EE5\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7 output \u5C5E\u6027\u8BBE\u7F6E\u8F93\u51FA\u6587\u4EF6\u7684\u4F4D\u7F6E\u3002output \u5C5E\u6027\u7684\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u5BF9\u8C61\u7684 filename \u6307\u5B9A\u8F93\u51FA\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u79F0\uFF0Cpath \u6307\u5B9A\u8F93\u51FA\u7684\u76EE\u5F55",paraId:11,tocIndex:4},{value:"\u73B0\u5728\u6211\u4EEC\u7EE7\u7EED\u6267\u884C\u547D\u4EE4\u884C",paraId:12,tocIndex:4},{value:"npx webpack --config webpack.config.js",paraId:12,tocIndex:4},{value:"\u4F46\u662F\u4E0A\u9762\u7684\u6267\u884C\u547D\u4EE4\u5F88\u9EBB\u70E6\uFF0C\u6240\u4EE5\u6211\u4EEC\u628A\u547D\u4EE4\u5199\u6210",paraId:13,tocIndex:4},{value:"npm scripts",paraId:13,tocIndex:4},{value:"\u65B9\u4FBF\u4E00\u70B9",paraId:13,tocIndex:4},{value:"\u521D\u59CB\u5316",paraId:14,tocIndex:4},{value:"$ npm init",paraId:14,tocIndex:4},{value:",\u751F\u6210",paraId:14,tocIndex:4},{value:"package.json",paraId:14,tocIndex:4},{value:",\u7136\u540E\u628A\u547D\u4EE4\u6DFB\u52A0\u5728 scripts \u91CC\u9762",paraId:14,tocIndex:4},{value:`{
  ...
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "build":"webpack"
  },
}
`,paraId:15,tocIndex:4},{value:"\u8FD9\u6837\u5C31\u4F1A\u770B\u5230",paraId:16,tocIndex:4},{value:"dist",paraId:16,tocIndex:4},{value:"\u76EE\u5F55\u4E0B\u9762\u4F1A\u6709\u4E00\u4E2A",paraId:16,tocIndex:4},{value:"bundle.js",paraId:16,tocIndex:4},{value:"\u6211\u4EEC\u6253\u5F00 bundle.js \u53EF\u4EE5\u770B\u4E00\u4E0B\u91CC\u9762\u7684\u4EE3\u7801:",paraId:17,tocIndex:4},{value:`!(function() {
  let e = document.createElement('div');
  (e.innerHTML = 'Hello Webpack1'), document.body.append(e);
})();
`,paraId:18,tocIndex:4},{value:"\u6574\u4F53\u4EE3\u7801\u5C31\u662F\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570",paraId:19,tocIndex:4},{value:"\u73B0\u5728\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u6837\u5F0F\uFF0C\u5047\u8BBE\u6211\u4EEC\u628A css \u6587\u4EF6\u6253\u5305\u53EF\u4EE5",paraId:20,tocIndex:4},{value:"\u53EF\u4EE5\u770B\u5230 webpack \u5E76\u4E0D\u80FD\u6253\u5305 css \u6587\u4EF6\uFF0C\u90A3\u6211\u4EEC\u8BE5\u600E\u4E48\u529E\u5462\uFF1F\u8FD9\u5C31\u9700\u8981\u7528\u5230 Loader \u4E86\u3002",paraId:21,tocIndex:4},{value:"\u9ED8\u8BA4\u5165\u53E3 ",paraId:22,tocIndex:6},{value:"main.js",paraId:22,tocIndex:6},{value:`module.exports = {
  entry: '/src/scripts/app.js',
};
`,paraId:23,tocIndex:6},{value:"filename\uFF1A\u6253\u5305\u5B8C\u7684 js \u540D\u79F0,\u9ED8\u8BA4\u6253\u5305\u540D\u79F0 main.js",paraId:24,tocIndex:7},{value:"\u53EF\u4EE5\u8BBE\u7F6E '[name].js' \u5BF9\u5E94\u5165\u53E3\u7684 js \u540D\u79F0",paraId:25,tocIndex:7},{value:"\u5982\u679C\u6211\u4EEC\u60F3\u5728\u9759\u6001\u8D44\u6E90 CDN \u670D\u52A1\u5668\u4E0A\u8BBF\u95EE\u6211\u4EEC\u7684\u6587\u4EF6,\u53EF\u4EE5\u8BBE\u7F6E ",paraId:26,tocIndex:7},{value:"publicPath",paraId:26,tocIndex:7},{value:", \u5982:",paraId:26,tocIndex:7},{value:`const path = require('path');
module.exports = {
  ...
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //\u5728\u670D\u52A1\u5668\u811A\u672C\u7528\u5230\uFF0C\u4EE5\u786E\u4FDD\u6587\u4EF6\u8D44\u6E90\u80FD\u591F\u5728 http://xx:cnd \u4E0B\u6B63\u786E\u8BBF\u95EE
    publicPath: 'http://xx:cnd/',
  }
};
`,paraId:27,tocIndex:7},{value:"loader",paraId:28,tocIndex:8},{value:"\u662F",paraId:28,tocIndex:8},{value:"webpack",paraId:28,tocIndex:8},{value:"\u7528\u6765\u5904\u7406\u975E js \u6587\u4EF6\u7684",paraId:28,tocIndex:8},{value:"Loader",paraId:29,tocIndex:9},{value:" \u5C31\u662F\u8D1F\u8D23\u5B8C\u6210\u9879\u76EE\u4E2D\u5404\u79CD\u5404\u6837\u8D44\u6E90\u6A21\u5757\u7684\u52A0\u8F7D\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6574\u4F53\u9879\u76EE\u7684\u6A21\u5757\u5316",paraId:29,tocIndex:9},{value:"\u4E3A\u4E86\u4ECE JavaScript \u6A21\u5757\u4E2D import \u4E00\u4E2A CSS \u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5728 module \u914D\u7F6E\u4E2D \u5B89\u88C5\u5E76\u6DFB\u52A0 ",paraId:30,tocIndex:10},{value:"style-loader",paraId:30,tocIndex:10},{value:" \u548C ",paraId:30,tocIndex:10},{value:"css-loader",paraId:30,tocIndex:10},{value:"\uFF1A",paraId:30,tocIndex:10},{value:`npm install --save-dev style-loader css-loader
`,paraId:31,tocIndex:10},{value:"webpack.config.js",paraId:32,tocIndex:10},{value:`module.exports = {
  ...
  module: {
      rules: [
          {
              test: /\\.css$/,
              use: [
                  'style-loader',
                  'css-loadder'
              ]
          }
      ]
  }
};
`,paraId:33,tocIndex:10},{value:"\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA",paraId:34,tocIndex:11},{value:"markdown-loader.js",paraId:34,tocIndex:11},{value:`// ./markdown-loader.js
module.exports = source => {
  // \u52A0\u8F7D\u5230\u7684\u6A21\u5757\u5185\u5BB9 => '# About\\n\\nthis is a markdown file.'
  console.log(source);
  // \u8FD4\u56DE\u503C\u5C31\u662F\u6700\u7EC8\u88AB\u6253\u5305\u7684\u5185\u5BB9
  return 'console.log("hello loader ~")';
};
`,paraId:35,tocIndex:11},{value:"wenpack.config.js",paraId:36,tocIndex:11},{value:`const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\\.css$/, // \u6839\u636E\u6253\u5305\u8FC7\u7A0B\u4E2D\u6240\u9047\u5230\u6587\u4EF6\u8DEF\u5F84\u5339\u914D\u662F\u5426\u4F7F\u7528\u8FD9\u4E2A loader
      //   use: ['style-loader',
      //         'css-loader'] // \u6307\u5B9A\u5177\u4F53\u7684 loader
      // }
      {
        test: /\\.md$/,
        use: './markdown-loader',
      },
    ],
  },
};
`,paraId:37,tocIndex:11},{value:"\u6700\u540E\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u91CC\u9762\u770B\u5230\u6253\u5370\u7684 console.log",paraId:38,tocIndex:11},{value:"\u4F7F\u7528\u8FC7",paraId:39,tocIndex:12},{value:"webpack",paraId:39,tocIndex:12},{value:"\u6253\u5305\u7684\u540C\u5B66\u90FD\u77E5\u9053\u56FE\u7247\u662F\u6839\u636E\u56FE\u7247\u5927\u5C0F\u6765\u6253\u5305\u7684\uFF0C\u56FE\u7247\u5C0F\u7684\u662F\u4EE5",paraId:39,tocIndex:12},{value:"base64",paraId:39,tocIndex:12},{value:"\u6765\u6253\u5230\u9875\u9762\u91CC\u9762\u7684\uFF0C\u4F46\u662F\u56FE\u7247\u5927\u7684\u8FD8\u662F\u4F1A\u5355\u72EC\u6253\u5305\u51FA\u6765\uFF0C\u90A3\u4E48\u8FD9\u662F\u6839\u636E\u4EC0\u4E48\u539F\u7406\u6765\u8FDB\u884C\u7684\u5462\uFF1F",paraId:39,tocIndex:12},{value:"\u5982\u679C\u60F3\u8981\u6253\u5305\u7684\u56FE\u7247\u540D\u79F0\u548C\u81EA\u5DF1\u5B9A\u4E49\u7684\u540D\u79F0\u662F\u4E00\u6837\u7684\uFF0C\u90A3\u8981\u600E\u4E48\u505A\u5462\uFF1F",paraId:40,tocIndex:12},{value:`let img1 = require('./image.png');
console.log(img1);
`,paraId:41,tocIndex:12},{value:"\u8FD9\u6837\u76F4\u63A5\u5F15\u5165\u80AF\u5B9A\u662F\u4E0D\u884C\u7684\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5728",paraId:42,tocIndex:12},{value:"webpack.config.js",paraId:42,tocIndex:12},{value:"\u91CC\u9762\u5199\u5165\u4E0B\u9762\u7684",paraId:42,tocIndex:12},{value:"loader",paraId:42,tocIndex:12},{value:"\u65B9\u6CD5",paraId:42,tocIndex:12},{value:`module.export={
  ...,
  module:{
    rules:[
      {
        test: /\\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader', //\u5904\u7406\u56FE\u7247
            options:{
              name:'[name].[hash:8].[ext]' ,
              outputPath:'images/' //\u8F93\u51FA\u56FE\u7247\u6253\u5305\u76EE\u5F55  \u8FD9\u6837\u6253\u5305\u4E4B\u540E\u6587\u4EF6\u5939\u91CC\u9762\u5C31\u4F1A\u591A\u4E00\u4E2A\`images\`\u6587\u4EF6\u5939
            }
          },
        ]
      }
    ]
  }
}
`,paraId:43,tocIndex:12},{value:"name",paraId:44,tocIndex:12},{value:" \u662F\u4EE3\u8868\u6E90\u6587\u4EF6\u540D\u79F0",paraId:44,tocIndex:12},{value:"ext",paraId:44,tocIndex:12},{value:" \u662F\u4EE3\u8868\u6E90\u6587\u4EF6\u540E\u7F00",paraId:44,tocIndex:12},{value:"[hash:8]",paraId:44,tocIndex:12},{value:"\u662F\u4EE3\u8868\u5360\u4F4D\u7B26\uFF0C\u9632\u6B62\u7F13\u5B58\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u6765\u8BBE\u7F6E\u51E0\u4F4D\uFF0C\u4E0D\u52A0",paraId:44,tocIndex:12},{value:"hash",paraId:44,tocIndex:12},{value:",\u8FD9\u6837\u6253\u5305\u51FA\u6765\u7684\u6587\u4EF6\u5C31\u548C\u539F\u6765\u7684\u6587\u4EF6\u540D\u79F0\u76F8\u540C\u4E86",paraId:44,tocIndex:12},{value:"\u533A\u522B\u5728\u4E8E ",paraId:45,tocIndex:13},{value:"url-loader",paraId:45,tocIndex:13},{value:" \u4F1A\u628A\u56FE\u7247\u8F6C\u4E3A",paraId:45,tocIndex:13},{value:"base64",paraId:45,tocIndex:13},{value:"\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u6253\u5305\u51FA\u4E00\u5F20\u56FE\u7247\u3002",paraId:45,tocIndex:13},{value:"\u597D\u5904\u662F\u56FE\u7247\u6253\u5305\u5728",paraId:46,tocIndex:13},{value:"js",paraId:46,tocIndex:13},{value:"\u6587\u4EF6\u4E2D\uFF0C\u9875\u9762\u4E0D\u9700\u8981\u989D\u5916\u53D1\u9001\u4E00\u6B21",paraId:46,tocIndex:13},{value:"http",paraId:46,tocIndex:13},{value:"\u8BF7\u6C42\uFF0C\u800C\u7F3A\u70B9\u662F\u5982\u679C\u56FE\u7247\u5F88\u5927\u7684\u8BDD\uFF0C",paraId:46,tocIndex:13},{value:"js",paraId:46,tocIndex:13},{value:"\u6587\u4EF6\u5C31\u4F1A\u5F88\u5927\uFF0C\u4F1A\u5BFC\u81F4",paraId:46,tocIndex:13},{value:"js",paraId:46,tocIndex:13},{value:"\u52A0\u8F7D\u53D8\u6162\uFF0C\u9875\u9762\u51FA\u73B0\u7A7A\u767D\u7684\u60C5\u51B5\u3002\u6240\u4EE5\u5F53\u56FE\u7247\u6BD4\u8F83\u5C0F\u7684\u65F6\u5019\u9002\u5408\u7528 ",paraId:46,tocIndex:13},{value:"url-loader",paraId:46,tocIndex:13},{value:"\u3002",paraId:46,tocIndex:13},{value:"url-loader",paraId:47,tocIndex:13},{value:" \u662F\u6700\u4F73\u4F7F\u7528\u65B9\u6CD5",paraId:47,tocIndex:13},{value:`module.export={
  ...,
  module:{
    rules:[
      {
        test: /\\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              name:'[name].[hash:8].[ext]',
              outputPath:'images/',
              limit:100 * 2048  //\u8BBE\u7F6E\u56FE\u7247\u5927\u5C0F\u9650\u5236
            }
          },
        ]
      }
    ]
  }
}
`,paraId:48,tocIndex:13},{value:"\u610F\u601D\u662F\u5982\u679C\u56FE\u7247\u8D85\u8FC7",paraId:49,tocIndex:13},{value:"204800",paraId:49,tocIndex:13},{value:"\u4E2A\u5B57\u8282\uFF08200kb\uFF09\uFF0C\u5C31\u4F7F\u7528\u548C",paraId:49,tocIndex:13},{value:"file-loader",paraId:49,tocIndex:13},{value:`\u76F8\u540C\u7684\u65B9\u5F0F\u8FDB\u884C\u6253\u5305\u3002
\u5982\u679C\u56FE\u7247\u5C0F\u4E8E`,paraId:49,tocIndex:13},{value:"204800",paraId:49,tocIndex:13},{value:"\u4E2A\u5B57\u8282\uFF08200kb\uFF09\uFF0C\u5C31\u4F7F\u7528",paraId:49,tocIndex:13},{value:"base64",paraId:49,tocIndex:13},{value:"\u65B9\u5F0F\u8FDB\u884C\u6253\u5305\u3002",paraId:49,tocIndex:13},{value:"Plugin",paraId:50,tocIndex:14},{value:" \u5219\u662F\u7528\u6765\u89E3\u51B3\u9879\u76EE\u4E2D\u9664\u4E86\u8D44\u6E90\u6A21\u5757\u6253\u5305\u4EE5\u5916\u7684\u5176\u4ED6\u81EA\u52A8\u5316\u5DE5\u4F5C\uFF0C\u6240\u4EE5\u8BF4 Plugin \u7684\u80FD\u529B\u8303\u56F4\u66F4\u5E7F\uFF0C\u7528\u9014\u81EA\u7136\u4E5F\u5C31\u66F4\u591A",paraId:50,tocIndex:14},{value:"\u6BD4\u8F83\u5E38\u89C1\u7684\u573A\u666F",paraId:51,tocIndex:14},{value:"\u5728\u6253\u5305\u4E4B\u524D\u6E05\u9664 dist \u91CC\u9762\u7684\u6587\u4EF6",paraId:52,tocIndex:14},{value:"\u81EA\u52A8\u751F\u6210\u6240\u9700\u8981\u7684 HTML \u6587\u4EF6",paraId:52,tocIndex:14},{value:"\u6839\u636E\u4E0D\u540C\u73AF\u5883\u6CE8\u5165\u7C7B\u4F3C API \u5730\u5740\u8FD9\u79CD\u53EF\u80FD\u53D8\u5316\u7684\u90E8\u5206",paraId:52,tocIndex:14},{value:"\u62F7\u8D1D\u4E0D\u9700\u8981\u53C2\u4E0E\u6253\u5305\u7684\u8D44\u6E90\u6587\u4EF6\u8F93\u51FA\u5230\u76EE\u5F55",paraId:52,tocIndex:14},{value:"\u538B\u7F29 webpack \u6253\u5305\u5B8C\u6210\u540E\u8F93\u51FA\u7684\u6587\u4EF6",paraId:52,tocIndex:14},{value:"\u81EA\u52A8\u53D1\u5E03\u6253\u5305\u7ED3\u679C\u5230\u670D\u52A1\u5668\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72",paraId:52,tocIndex:14},{value:`$ npm install clean-webpack-plugin --save-dev
`,paraId:53,tocIndex:15},{value:"\u5728 webpack.config.js \u91CC\u9762\u6DFB\u52A0",paraId:54,tocIndex:15},{value:`const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports={
  ...
  plugins: [
    new CleanWebpackPlugin()
  ]
}
`,paraId:55,tocIndex:15},{value:`$ npm install html-webpack-plugin --save-dev
`,paraId:56,tocIndex:16},{value:"\u5728 webpack.config.js \u91CC\u9762\u6DFB\u52A0",paraId:57,tocIndex:16},{value:`const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  ...
  plugins: [
    ...
    new HtmlWebpackPlugin()
  ]
}
`,paraId:58,tocIndex:16},{value:"\u8FD0\u884C\u4E4B\u540E \u4F1A\u81EA\u52A8\u5728 dist \u91CC\u9762\u65B0\u5EFA\u4E00\u4E2A index.html,\u4F46\u662F index.html \u91CC\u9762\u7684\u4E00\u4E9B\u5185\u5BB9\u6BD4\u5982 title \u53EF\u80FD\u9700\u8981\u4FEE\u6539\uFF0C\u53EF\u4EE5\u901A\u6539\u8FD9\u4E2A\u63D2\u4EF6\u4FEE\u6539",paraId:59,tocIndex:16},{value:`const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  ...
  plugins: [
    ...
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      meta: {
        viewport: 'width=device-width'
      }
      //or
      template: './src/index.html' //\u81EA\u5B9A\u4E49\u4E00\u4E2Ahtml\u6A21\u677F
    })
  ]
}
`,paraId:60,tocIndex:16},{value:"\u5728\u6211\u4EEC\u7684\u9879\u76EE\u4E2D\u4E00\u822C\u8FD8\u6709\u4E00\u4E9B\u4E0D\u9700\u8981\u53C2\u4E0E\u6784\u5EFA\u7684\u9759\u6001\u6587\u4EF6\uFF0C\u90A3\u5B83\u4EEC\u6700\u7EC8\u4E5F\u9700\u8981\u53D1\u5E03\u5230\u7EBF\u4E0A\uFF0C\u4F8B\u5982\u7F51\u7AD9\u7684 favicon\u3001robots.txt \u7B49",paraId:61,tocIndex:17},{value:"\u4E00\u822C\u6211\u4EEC\u5EFA\u8BAE\uFF0C\u628A\u8FD9\u7C7B\u6587\u4EF6\u7EDF\u4E00\u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 public \u6216\u8005 static \u76EE\u5F55\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B Webpack \u5728\u6253\u5305\u65F6\u4E00\u5E76\u5C06\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u6240\u6709\u7684\u6587\u4EF6\u590D\u5236\u5230\u8F93\u51FA\u76EE\u5F55",paraId:62,tocIndex:17},{value:"\u8FD9\u6837\u5C31\u9700\u8981\u7528\u5230",paraId:63,tocIndex:17},{value:"CopyWebpackPlugin",paraId:63,tocIndex:17},{value:"\u8FD9\u4E2A\u63D2\u4EF6",paraId:63,tocIndex:17},{value:`$ npm install  CopyWebpackPlugin --save-dev
`,paraId:64,tocIndex:17},{value:"webpack.config.js",paraId:65,tocIndex:17},{value:`const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  ...
  plugins: [
    ...
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/favicon.ico", to: "static" },
      ] // \u9700\u8981\u62F7\u8D1D\u7684\u76EE\u5F55\u6216\u8005\u8DEF\u5F84\u901A\u914D\u7B26
    }),
  ]
}
`,paraId:66,tocIndex:17},{value:"\u6267\u884C",paraId:67,tocIndex:17},{value:"npm run build",paraId:67,tocIndex:17},{value:"\u4E4B\u540E\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u6587\u4EF6\u88AB\u6253\u5230",paraId:67,tocIndex:17},{value:"dist",paraId:67,tocIndex:17},{value:"\u6587\u4EF6\u4E0B\u9762\uFF0C\u65B0\u5EFA\u4E86\u4E00\u4E2A",paraId:67,tocIndex:17},{value:"static",paraId:67,tocIndex:17},{value:"\u91CC\u9762\u662F\u76EE\u6807\u6587\u4EF6",paraId:67,tocIndex:17},{value:"\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A",paraId:68,tocIndex:18},{value:"my-comments-plugin.js",paraId:68,tocIndex:18},{value:`class MyCommentsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('MyCommentsPlugin', compilation => {
      // compilation => \u53EF\u4EE5\u7406\u89E3\u4E3A\u6B64\u6B21\u6253\u5305\u7684\u4E0A\u4E0B\u6587
      for (const name in compilation.assets) {
        console.log(name); // \u8F93\u51FA\u6587\u4EF6\u540D\u79F0
      }
    });
  }
}

module.exports = MyCommentsPlugin;
`,paraId:69,tocIndex:18},{value:"\u5728",paraId:70,tocIndex:18},{value:"webpack.config.js",paraId:70,tocIndex:18},{value:"\u91CC\u9762\u5F15\u5165\u8BE5\u63D2\u4EF6,\u6267\u884C\u547D\u4EE4\u4E4B\u540E\u53EF\u4EE5\u770B\u5230\u5728\u63A7\u5236\u53F0\u91CC\u9762\u6253\u5370\u51FA\u4E86\u6587\u4EF6\u540D\uFF0C\u7ED3\u679C\u5982\u4E0B",paraId:70,tocIndex:18},{value:"\u4E3A\u4E86\u63D0\u9AD8\u65E5\u5E38\u5F00\u53D1\u4F53\u9A8C\uFF0C\u907F\u514D\u6BCF\u6B21\u4FEE\u6539\u4EE3\u7801\u90FD\u8981\u8FDB\u884C\u624B\u52A8\u4FEE\u6539\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u4F7F\u7528",paraId:71,tocIndex:19},{value:"webpack-dev-server",paraId:71,tocIndex:19},{value:"\u6765\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387",paraId:71,tocIndex:19},{value:`# \u5B89\u88C5 webpack-dev-server

$ npm install webpack-dev-server --save-dev

# \u8FD0\u884C webpack-dev-server

$ npx webpack serve

`,paraId:72,tocIndex:19},{value:"\u4E0D\u8FC7\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cwebpack-dev-server \u4E3A\u4E86\u63D0\u9AD8\u5DE5\u4F5C\u901F\u7387\uFF0C\u5B83\u5E76\u6CA1\u6709\u5C06\u6253\u5305\u7ED3\u679C\u5199\u5165\u5230\u78C1\u76D8\u4E2D\uFF0C\u800C\u662F\u6682\u65F6\u5B58\u653E\u5728\u5185\u5B58\u4E2D\uFF0C\u5185\u90E8\u7684 HTTP Server \u4E5F\u662F\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\u8FD9\u4E9B\u6587\u4EF6\u7684\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u5C31\u4F1A\u51CF\u5C11\u5F88\u591A\u4E0D\u5FC5\u8981\u7684\u78C1\u76D8\u8BFB\u5199\u64CD\u4F5C\uFF0C\u5927\u5927\u63D0\u9AD8\u4E86\u6574\u4F53\u7684\u6784\u5EFA\u6548\u7387",paraId:73,tocIndex:19},{value:"webpack.config.js",paraId:74,tocIndex:19},{value:"\u91CC\u9762\u7684\u914D\u7F6E",paraId:74,tocIndex:19},{value:`const path = require('path')

module.exports = {
  ...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    proxy: {  //\u4EE3\u7406
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true // \u786E\u4FDD\u8BF7\u6C42 GitHub \u7684\u4E3B\u673A\u540D\u5C31\u662F\uFF1Aapi.github.com
      }
    }
  }
}

`,paraId:75,tocIndex:19},{value:"\u90A3\u6B64\u65F6\u6211\u4EEC\u8BF7\u6C42 ",paraId:76,tocIndex:19},{value:"http://localhost:8080/api/users",paraId:76,tocIndex:19},{value:" \uFF0C\u5C31\u76F8\u5F53\u4E8E\u8BF7\u6C42\u4E86 ",paraId:76,tocIndex:19},{value:"https://api.github.com/api/users",paraId:76,tocIndex:19},{value:`\u3002
\u8FD9\u662F\u5728\u5F00\u53D1\u4E2D\u89E3\u51B3\u8DE8\u57DF\u7684\u4E00\u79CD\u6BD4\u8F83\u597D\u7684\u65B9\u6CD5`,paraId:76,tocIndex:19},{value:"\u53EF\u4EE5\u770B\u5230\u4FEE\u6539\u4EE3\u7801\uFF0C\u6D4F\u89C8\u5668\u5C31\u80FD\u540C\u6B65\u770B\u5230\u66F4\u65B0",paraId:77,tocIndex:19},{value:"\u662F\u56E0\u4E3A\u6211\u4EEC\u6BCF\u6B21\u4FEE\u6539\u5B8C\u4EE3\u7801\uFF0CWebpack \u90FD\u53EF\u4EE5\u76D1\u89C6\u5230\u53D8\u5316\uFF0C\u7136\u540E\u81EA\u52A8\u6253\u5305\uFF0C\u518D\u901A\u77E5\u6D4F\u89C8\u5668\u81EA\u52A8\u5237\u65B0\uFF0C\u4E00\u65E6\u9875\u9762\u6574\u4F53\u5237\u65B0\uFF0C\u90A3\u9875\u9762\u4E2D\u7684\u4EFB\u4F55\u64CD\u4F5C\u72B6\u6001\u90FD\u5C06\u4F1A\u4E22\u5931\uFF0C\u50CF input \u6846\u91CC\u9762\u7684\u5185\u5BB9\u5C31\u4F1A\u6CA1\u6709\uFF0C\u9700\u8981\u91CD\u65B0\u586B\u5199\uFF0C\u90A3\u6837\u5C31\u662F\u975E\u5E38\u9EBB\u70E6\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u66F4\u65B0\u4EE3\u7801\u4F46\u662F\u4E0D\u5237\u65B0\u9875\u9762\u7684\u66F4\u65B0\uFF0C\u90A3\u5C31\u662F\u70ED\u66FF\u6362\u673A\u5236\u3002",paraId:78,tocIndex:20},{value:"webpack.config.js",paraId:79,tocIndex:20},{value:"\u914D\u7F6E\u5982\u4E0B\uFF1A",paraId:79,tocIndex:20},{value:`const webpack = require('webpack');

module.exports = {
  // ...
  devServer: {
    // \u5F00\u542F HMR \u7279\u6027\uFF0C\u5982\u679C\u8D44\u6E90\u4E0D\u652F\u6301 HMR \u4F1A fallback \u5230 live reloading
    hot: true,
    // \u53EA\u4F7F\u7528 HMR\uFF0C\u4E0D\u4F1A fallback \u5230 live reloading
    // hotOnly: true
  },
  plugins: [
    // ...
    // HMR \u7279\u6027\u6240\u9700\u8981\u7684\u63D2\u4EF6
    new webpack.HotModuleReplacementPlugin(),
  ],
};
`,paraId:80,tocIndex:20},{value:"\u5165\u53E3\u6587\u4EF6\uFF1A",paraId:81,tocIndex:20},{value:`if (module.hot) {
  module.hot.accept('./entry', () => {
    // render()
    //\u81EA\u5DF1\u7684\u64CD\u4F5C
  });
}
`,paraId:82,tocIndex:20},{value:"\u6211\u4EEC\u4F7F\u7528 Webpack \u751F\u4EA7\u6A21\u5F0F\u6253\u5305\u7684\u4F18\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u5C31\u4F7F\u7528\u81EA\u52A8\u5F00\u542F\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4EE5\u6B64\u6765\u68C0\u6D4B\u6211\u4EEC\u4EE3\u7801\u4E2D\u7684\u672A\u5F15\u7528\u4EE3\u7801\uFF0C\u7136\u540E\u81EA\u52A8\u79FB\u9664\u5B83\u4EEC",paraId:83,tocIndex:21},{value:`module.exports = {
  // ... \u5176\u4ED6\u914D\u7F6E\u9879
  optimization: {
    // \u6A21\u5757\u53EA\u5BFC\u51FA\u88AB\u4F7F\u7528\u7684\u6210\u5458
    usedExports: true,
    // \u538B\u7F29\u8F93\u51FA\u7ED3\u679C
    minimize: true,
    // \u5C3D\u53EF\u80FD\u5408\u5E76\u6BCF\u4E00\u4E2A\u6A21\u5757\u5230\u4E00\u4E2A\u51FD\u6570\u4E2D
    concatenateModules: true,
    //\u58F0\u660E\u4EE3\u7801\u6709\u6CA1\u6709\u526F\u4F5C\u7528
    sideEffects: true,
  },
};
`,paraId:84,tocIndex:21},{value:"usedExports",paraId:85,tocIndex:21},{value:" - \u6253\u5305\u7ED3\u679C\u4E2D\u53EA\u5BFC\u51FA\u5916\u90E8\u7528\u5230\u7684\u6210\u5458\uFF1B",paraId:85,tocIndex:21},{value:"minimize",paraId:85,tocIndex:21},{value:" - \u538B\u7F29\u6253\u5305\u7ED3\u679C",paraId:85,tocIndex:21},{value:"concatenateModules",paraId:85,tocIndex:21},{value:"Tree-shaking",paraId:86,tocIndex:21},{value:"\u5B9E\u73B0\u7684\u524D\u63D0\u662F ",paraId:86,tocIndex:21},{value:"ES Modules",paraId:86,tocIndex:21},{value:"\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF1A\u6700\u7EC8\u4EA4\u7ED9 Webpack \u6253\u5305\u7684\u4EE3\u7801\uFF0C\u5FC5\u987B\u662F\u4F7F\u7528 ES Modules \u7684\u65B9\u5F0F\u6765\u7EC4\u7EC7\u7684\u6A21\u5757\u5316",paraId:86,tocIndex:21},{value:"Tree-shaking",paraId:87,tocIndex:21},{value:" \u53EA\u80FD\u79FB\u9664\u6CA1\u6709\u7528\u5230\u7684\u4EE3\u7801\u6210\u5458\uFF0C\u800C\u60F3\u8981\u5B8C\u6574\u79FB\u9664\u6CA1\u6709\u7528\u5230\u7684\u6A21\u5757\uFF0C\u90A3\u5C31\u9700\u8981\u5F00\u542F ",paraId:87,tocIndex:21},{value:"sideEffects",paraId:87,tocIndex:21},{value:" \u7279\u6027\u4E86",paraId:87,tocIndex:21},{value:"source Map",paraId:88,tocIndex:22},{value:"\u53EF\u4EE5\u8BA9\u6211\u4EEC\u770B\u5230\u6E90\u4EE3\u7801\uFF0C\u5B9A\u4F4D\u9519\u4F4D\u7684\u4EE3\u7801\u5177\u4F53\u4F4D\u7F6E\uFF0C\u4F46\u662F\u4E00\u822C\u4E0A\u7EBF\u7684\u4EA7\u54C1\u662F\u4E0D\u9700\u8981",paraId:88,tocIndex:22},{value:"source Map",paraId:88,tocIndex:22},{value:"\u7684",paraId:88,tocIndex:22},{value:"Source Map",paraId:89,tocIndex:22},{value:"\u4F1A\u66B4\u9732\u6211\u7684\u6E90\u4EE3\u7801\u5230\u751F\u4EA7\u73AF\u5883\u3002\u5982\u679C\u6CA1\u6709\u63A7\u5236 Source Map \u6587\u4EF6\u8BBF\u95EE\u6743\u9650\u7684\u8BDD\uFF0C\u4F46\u51E1\u662F\u6709\u70B9\u6280\u672F\u7684\u4EBA\u90FD\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u590D\u539F\u9879\u76EE\u4E2D\u6D89\u53CA\u7684\u7EDD\u5927\u591A\u6570\u6E90\u4EE3\u7801\uFF0C\u8FD9\u975E\u5E38\u4E0D\u5408\u7406\u4E5F\u4E0D\u5B89\u5168\uFF0C\u6211\u60F3\u5F88\u591A\u4EBA\u53EF\u80FD\u90FD\u5FFD\u7565\u4E86\u8FD9\u4E2A\u95EE\u9898",paraId:89,tocIndex:22},{value:`module.exports = {
  ...
  devtool: 'source-map' // source map \u8BBE\u7F6E
}
`,paraId:90,tocIndex:22},{value:"\u5F00\u53D1\u73AF\u5883\u4E0B\u6211\u4F1A\u9009\u62E9 ",paraId:91,tocIndex:22},{value:"cheap-module-eval-source-map",paraId:91,tocIndex:22},{value:"\u751F\u4EA7\u73AF\u5883\u9009\u62E9",paraId:92,tocIndex:22},{value:"none",paraId:92,tocIndex:22},{value:"Source Map",paraId:93,tocIndex:22},{value:" \u5E76\u4E0D\u662F ",paraId:93,tocIndex:22},{value:"Webpack",paraId:93,tocIndex:22},{value:" \u7279\u6709\u7684\u529F\u80FD\uFF0C\u5B83\u4EEC\u4E24\u8005\u7684\u5173\u7CFB\u53EA\u662F\uFF1A",paraId:93,tocIndex:22},{value:"Webpack",paraId:93,tocIndex:22},{value:" \u652F\u6301 ",paraId:93,tocIndex:22},{value:"Source Map",paraId:93,tocIndex:22},{value:"\u4E3A\u4E86\u89E3\u51B3\u6253\u5305\u7ED3\u679C\u8FC7\u5927\u5BFC\u81F4\u7684\u95EE\u9898\uFF0CWebpack \u8BBE\u8BA1\u4E86\u4E00\u79CD\u5206\u5305\u529F\u80FD\uFF1A",paraId:94,tocIndex:24},{value:"Code Splitting",paraId:94,tocIndex:24},{value:"\uFF08\u4EE3\u7801\u5206\u5272\uFF09\u3002",paraId:94,tocIndex:24},{value:"Code Splitting",paraId:95,tocIndex:24},{value:" \u901A\u8FC7\u628A\u9879\u76EE\u4E2D\u7684\u8D44\u6E90\u6A21\u5757\u6309\u7167\u6211\u4EEC\u8BBE\u8BA1\u7684\u89C4\u5219\u6253\u5305\u5230\u4E0D\u540C\u7684 ",paraId:95,tocIndex:24},{value:"bundle",paraId:95,tocIndex:24},{value:" \u4E2D\uFF0C\u4ECE\u800C\u964D\u4F4E\u5E94\u7528\u7684\u542F\u52A8\u6210\u672C\uFF0C\u63D0\u9AD8\u54CD\u5E94\u901F\u5EA6",paraId:95,tocIndex:24},{value:"webpack.config.js",paraId:96,tocIndex:24},{value:"\u914D\u7F6E",paraId:96,tocIndex:24},{value:`module.exports = {
  //...
  optimization: {
    splitChunks: {
      // \u81EA\u52A8\u63D0\u53D6\u6240\u6709\u516C\u5171\u6A21\u5757\u5230\u5355\u72EC bundle
      chunks: 'all',
    },
  },
  // ... \u5176\u4ED6\u914D\u7F6E
};
`,paraId:97,tocIndex:24},{value:"\u9ED8\u8BA4\u901A\u8FC7\u52A8\u6001\u5BFC\u5165\u4EA7\u751F\u7684 bundle \u6587\u4EF6\uFF0C\u5B83\u7684 name \u5C31\u662F\u4E00\u4E2A\u5E8F\u53F7\uFF0C\u8FD9\u5E76\u6CA1\u6709\u4EC0\u4E48\u4E0D\u597D\uFF0C\u56E0\u4E3A\u5927\u591A\u6570\u65F6\u5019\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u6211\u4EEC\u6839\u672C\u4E0D\u7528\u5173\u5FC3\u8D44\u6E90\u6587\u4EF6\u7684\u540D\u79F0\u3002",paraId:98,tocIndex:25},{value:"\u4F46\u662F\u5982\u679C\u4F60\u8FD8\u662F\u9700\u8981\u7ED9\u8FD9\u4E9B bundle \u547D\u540D\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 Webpack \u6240\u7279\u6709\u7684\u9B54\u6CD5\u6CE8\u91CA\u53BB\u5B9E\u73B0\u3002\u5177\u4F53\u65B9\u5F0F\u5982\u4E0B:",paraId:99,tocIndex:25},{value:`import(/* webpackChunkName: 'posts' */ './posts/posts').then(
  ({ default: posts }) => {
    mainElement.appendChild(posts());
  },
);
`,paraId:100,tocIndex:25},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u9B54\u6CD5\u6CE8\u91CA\u8FD8\u6709\u4E2A\u7279\u6B8A\u7528\u9014\uFF1A\u5982\u679C\u4F60\u7684 chunkName \u76F8\u540C\u7684\u8BDD\uFF0C\u90A3\u76F8\u540C\u7684 chunkName \u6700\u7EC8\u5C31\u4F1A\u88AB\u6253\u5305\u5230\u4E00\u8D77\uFF0C\u4F8B\u5982\u6211\u4EEC\u8FD9\u91CC\u53EF\u4EE5\u628A\u8FD9\u4E24\u4E2A chunkName \u90FD\u8BBE\u7F6E\u4E3A components\uFF0C\u7136\u540E\u518D\u6B21\u8FD0\u884C\u6253\u5305\uFF0C\u90A3\u6B64\u65F6\u8FD9\u4E24\u4E2A\u6A21\u5757\u90FD\u4F1A\u88AB\u6253\u5305\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D",paraId:101,tocIndex:25},{value:`module.export={
  ...
  resolve: {
    extensions: ['.js','.css'],//\u5F15\u5165\u6587\u4EF6\u4E0D\u7528\u52A0\u540E\u7F00
    alias:{
      '@':'\u8DEF\u5F84'
    }
  }
}

`,paraId:102,tocIndex:26},{value:"\u4F8B\u5982\u4E00\u4E9B\u7B2C\u4E09\u65B9\u63D2\u4EF6\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5916\u90E8\u6269\u5C55\u7684\u65B9\u5F0F\uFF0C\u907F\u514D\u7B2C\u4E09\u65B9\u5305\u4F53\u79EF\u8FC7\u5927",paraId:103,tocIndex:27},{value:`module.exports = {
  //...
  externals: {
    jquery: 'jQuery',
  },
};
`,paraId:104,tocIndex:27},{value:"\u901A\u8FC7 ",paraId:105,tocIndex:28},{value:"Loader",paraId:105,tocIndex:28},{value:" \u5904\u7406\u7279\u6B8A\u7C7B\u578B\u8D44\u6E90\u7684\u52A0\u8F7D\uFF0C\u4F8B\u5982\u52A0\u8F7D\u6837\u5F0F\u3001\u56FE\u7247\uFF1B",paraId:105,tocIndex:28},{value:"Loader",paraId:106,tocIndex:28},{value:" \u673A\u5236\u8D77\u4E86\u5F88\u91CD\u8981\u7684\u4F5C\u7528\uFF0C\u56E0\u4E3A\u5982\u679C\u6CA1\u6709 ",paraId:106,tocIndex:28},{value:"Loader",paraId:106,tocIndex:28},{value:" \u7684\u8BDD\uFF0CWebpack \u5C31\u65E0\u6CD5\u5B9E\u73B0\u5404\u79CD\u5404\u6837\u7C7B\u578B\u7684\u8D44\u6E90\u6587\u4EF6\u52A0\u8F7D\uFF0C\u90A3 Webpack \u4E5F\u5C31\u53EA\u80FD\u7B97\u662F\u4E00\u4E2A\u7528\u6765\u5408\u5E76 JS \u6A21\u5757\u4EE3\u7801\u7684\u5DE5\u5177\u4E86",paraId:106,tocIndex:28},{value:"\u901A\u8FC7 ",paraId:107,tocIndex:28},{value:"Plugin",paraId:107,tocIndex:28},{value:" \u5B9E\u73B0\u5404\u79CD\u81EA\u52A8\u5316\u7684\u6784\u5EFA\u4EFB\u52A1\uFF0C\u4F8B\u5982\u81EA\u52A8\u538B\u7F29\u3001\u81EA\u52A8\u53D1\u5E03\u3002",paraId:107,tocIndex:28},{value:"Plugin",paraId:108,tocIndex:28},{value:"\u5B83\u5E76\u4E0D\u4F1A\u5F71\u54CD ",paraId:108,tocIndex:28},{value:"Webpack",paraId:108,tocIndex:28},{value:" \u7684\u6838\u5FC3\u5DE5\u4F5C\u8FC7\u7A0B\uFF0C\u53EA\u662F Webpack \u4E3A\u4E86\u63D0\u4F9B\u4E00\u4E2A\u5F3A\u5927\u7684\u6269\u5C55\u80FD\u529B",paraId:108,tocIndex:28},{value:"\u5B98\u65B9\u7684\u73AF\u5883",paraId:109,tocIndex:29},{value:"process.env.NODE_ENV",paraId:109,tocIndex:29},{value:" \u53EA\u6709 ",paraId:109,tocIndex:29},{value:"development",paraId:109,tocIndex:29},{value:"\u672C\u5730\u5F00\u53D1 \u548C ",paraId:109,tocIndex:29},{value:"production",paraId:109,tocIndex:29},{value:"\u6784\u5EFA\u751F\u4EA7\u4E24\u4E2A\u73AF\u5883\u3002\u800C\u73AF\u5883\u7684\u6269\u5C55\u4E5F\u53EA\u662F\u5206\u522B\u5BF9\u8FD9\u4E24\u4E2A\u73AF\u5883\u5206\u522B\u6269\u5C55\uFF0C\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u6211\u4EEC\u5728\u7EBF\u4E0A\u53D1\u5E03\u591A\u4E2A\u73AF\u5883\u5BF9\u9700\u6C42",paraId:109,tocIndex:29},{value:`npm start: .env.development.local, .env.development, .env.local, .env
npm run build: .env.production.local, .env.production, .env.local, .env
`,paraId:110,tocIndex:29},{value:"\u56E0\u4E3A\u6BCF\u4E2A\u4EBA\u672C\u5730\u5F00\u53D1\u73AF\u5883\u53EF\u80FD\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u7EBF\u4E0A\u73AF\u5883\u5374\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u800C\u4E14\u4E3A\u4E86\u907F\u514D\u7EBF\u4E0A\u73AF\u5883\u88AB\u672C\u5730\u73AF\u5883\u66FF\u6362\uFF0C\u6240\u4EE5\u9700\u8981\u914D\u7F6E",paraId:111,tocIndex:30},{value:"env",paraId:111,tocIndex:30},{value:"\u672C\u5730\u73AF\u5883\uFF0C\u6765\u4FDD\u8BC1\u5F00\u53D1\u7684\u7EDF\u4E00\u6027",paraId:111,tocIndex:30},{value:"package.json",paraId:112,tocIndex:31},{value:"\u91CC\u9762\u914D\u7F6E",paraId:112,tocIndex:31},{value:'"proxy": "https://www.baidu.com"',paraId:112,tocIndex:31},{value:"\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA",paraId:112,tocIndex:31},{value:".env",paraId:112,tocIndex:31},{value:"\u6216\u8005",paraId:112,tocIndex:31},{value:".env.local",paraId:112,tocIndex:31},{value:`#PROXY='http://192.168.1.1:3000/'

PORT=3002
`,paraId:113,tocIndex:31},{value:"\u8FD9\u6837\u9879\u76EE\u4E2D\u5C31\u53EF\u4EE5\u4F7F\u7528\u4EE3\u7406\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u4FDD\u8BC1\u4E0D\u4F1A\u51FA\u73B0\u8DE8\u57DF\u7684\u95EE\u9898",paraId:114,tocIndex:31},{value:`module.export={
  ...
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[hash:8].js',
      minChunks: 3,
      chunks: ['jquery', 'underscore'],
    });
  ]
}
`,paraId:115,tocIndex:33},{value:`module.export={
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: true, //\u5F00\u53D1true \u751F\u4EA7\u6A21\u5F0Ffalse
    }),
  ];
}

const Constant = {
  API_HOST: DEBUG ? '\u5F00\u53D1url' : '\u4E0A\u7EBFurl',
};
`,paraId:116,tocIndex:34},{value:"\u901A\u8FC7\u4EA4\u4E92\u5F0F\u7684\u3001\u53EF\u7F29\u653E\u7684\u6811\u72B6\u56FE\u6765\u53EF\u89C6\u5316 webpack \u8F93\u51FA\u6587\u4EF6\u7684\u5927\u5C0F\u3002",paraId:117,tocIndex:36},{value:"\u8BE5\u63D2\u4EF6\u5C06\u5E2E\u52A9\u4F60\u60A8\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A",paraId:118,tocIndex:36},{value:"\u4E86\u89E3\u4F60\u7684\u5305\u91CC\u771F\u6B63\u6709\u4EC0\u4E48",paraId:119,tocIndex:36},{value:"\u627E\u51FA\u54EA\u4E9B\u6A21\u5757\u6784\u6210\u4E86\u6346\u7ED1\u8F6F\u4EF6\u7684\u6700\u5927\u7EC4\u6210\u90E8\u5206",paraId:119,tocIndex:36},{value:"\u67E5\u627E\u9519\u8BEF\u5230\u8FBE\u7684\u6A21\u5757",paraId:119,tocIndex:36},{value:"\u4F18\u5316\u4F60\u7684 Webpack \u6346\u7ED1\u5305",paraId:119,tocIndex:36},{value:`# NPM
npm install --save-dev webpack-bundle-analyzer
# Yarn
yarn add -D webpack-bundle-analyzer

# \u4F7F\u7528
const BundleAnalyzerPlugin = require('webpack-bundle analyzer');
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
`,paraId:120,tocIndex:36},{value:"webpack-pwa-manifest",paraId:121,tocIndex:37},{value:" \u5C06\u81EA\u5DF1\u63CF\u8FF0\u4E3A\u201C\u7528\u4E8E",paraId:121,tocIndex:37},{value:"Webpack",paraId:121,tocIndex:37},{value:"\u7684\u6E10\u8FDB\u5F0F",paraId:121,tocIndex:37},{value:"Web App",paraId:121,tocIndex:37},{value:"\u6E05\u5355\u751F\u6210\u5668\uFF0C\u5177\u6709\u81EA\u52A8\u56FE\u6807\u5927\u5C0F\u8C03\u6574\u548C\u6307\u7EB9\u8BC6\u522B\u652F\u6301\u3002",paraId:121,tocIndex:37},{value:"\u5982\u679C\u60A8\u5728\u914D\u7F6E\u4E0A\u4F7F\u7528\u6CE8\u5165\uFF0C\u8BF7\u786E\u4FDD ",paraId:122,tocIndex:37},{value:"HtmlWebpackPlugin",paraId:122,tocIndex:37},{value:" \u51FA\u73B0\u5728",paraId:122,tocIndex:37},{value:"plugins",paraId:122,tocIndex:37},{value:" \u6570\u7EC4\u4E2D\u7684 ",paraId:122,tocIndex:37},{value:"WebpackPwaManifest",paraId:122,tocIndex:37},{value:" \u4E4B\u524D",paraId:122,tocIndex:37},{value:"\u7279\u5F81\uFF1A",paraId:123,tocIndex:37},{value:"\u81EA\u52A8\u56FE\u6807\u5927\u5C0F\u8C03\u6574",paraId:124,tocIndex:37},{value:"\u56FE\u6807\u6307\u7EB9",paraId:124,tocIndex:37},{value:"\u6E05\u5355\u6307\u7EB9",paraId:124,tocIndex:37},{value:"HTML \u4E0A\u7684\u81EA\u52A8\u6E05\u5355\u6CE8\u5165",paraId:124,tocIndex:37},{value:"\u70ED\u91CD\u8F7D\u652F\u6301",paraId:124,tocIndex:37},{value:`# npm\u5B89\u88C5
npm install --save-dev webpack-pwa-manifest

# \u4F7F\u7528

import WebpackPwaManifest from 'webpack-pwa-manifest'
...
plugins: [
  new WebpackPwaManifest({
    name: 'My Progressive Web App',
    short_name: 'MyPWA',
    description: 'My awesome Progressive Web App!',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', // \u53EF\u4EE5\u662Fnull\u3001use-credentials\u8FD8\u662Fanonymous
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512] // \u591A\u4E2A\u5927\u5C0F
      },
      {
        src: path.resolve('src/assets/large-icon.png'),
        size: '1024x1024' // \u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528specification\u6A21\u5F0F
      }
    ]
  })
]
`,paraId:125,tocIndex:37},{value:"\u8FD9\u662F\u4E00\u4E2A",paraId:126,tocIndex:38},{value:"webpack",paraId:126,tocIndex:38},{value:"\u63D2\u4EF6\uFF0C\u5F53\u4F60\u7684\u6346\u7ED1\u5305\u5305\u542B\u540C\u4E00\u8F6F\u4EF6\u5305\u7684\u591A\u4E2A\u7248\u672C\u65F6\uFF0C\u4F1A\u53D1\u51FA\u8B66\u544A",paraId:126,tocIndex:38},{value:"\u4E3A\u4EC0\u4E48\u8981\u5B89\u88C5\u8FD9\u4E2A\uFF1F",paraId:127,tocIndex:38},{value:"\u7531\u4E8E\u4E0D\u540C\u7684\u8F6F\u4EF6\u5305\u7248\u672C\uFF0C\u5355\u4E2A\u8F6F\u4EF6\u5305\u53EF\u80FD\u591A\u6B21\u5305\u542B\u5728",paraId:128,tocIndex:38},{value:"webpack",paraId:128,tocIndex:38},{value:"\u6346\u7ED1\u8F6F\u4EF6\u4E2D\u3002\u8FD9\u79CD\u60C5\u51B5\u53EF\u80FD\u4F1A\u5728\u6CA1\u6709\u4EFB\u4F55\u8B66\u544A\u7684\u60C5\u51B5\u4E0B\u53D1\u751F\uFF0C\u4ECE\u800C\u5BFC\u81F4\u6346\u7ED1\u8F6F\u4EF6\u4E2D\u51FA\u73B0\u989D\u5916\u7684\u81A8\u80C0\uFF0C\u5E76\u53EF\u80FD\u5BFC\u81F4\u96BE\u4EE5\u53D1\u73B0\u7684\u9519\u8BEF\u3002",paraId:128,tocIndex:38},{value:"\u8BE5\u63D2\u4EF6\u4F1A\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u8B66\u544A\u4F60\uFF0C\u4EE5\u6700\u5927\u7A0B\u5EA6\u5730\u51CF\u5C11\u6346\u7ED1\u5305\u7684\u5927\u5C0F\uFF0C\u5E76\u907F\u514D\u7531\u4E8E\u610F\u5916\u7684\u91CD\u590D\u5305\u88C5\u800C\u5BFC\u81F4\u7684\u9519\u8BEF\u3002",paraId:129,tocIndex:38},{value:`# npm \u5B89\u88C5
npm install duplicate-package-checker-webpack-plugin --save-dev

# \u4F7F\u7528

const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
module.exports = {
  plugins: [new DuplicatePackageCheckerPlugin()]
};
`,paraId:130,tocIndex:38},{value:"Rollup",paraId:131,tocIndex:40},{value:" \u662F\u4E00\u6B3E ES Modules \u6253\u5305\u5668\uFF0C\u76F8\u6BD4\u4E8E Webpack\uFF0CRollup \u8981\u5C0F\u5DE7\u7684\u591A",paraId:131,tocIndex:40},{value:"\u8DF3\u8F6C\u5730\u5740",paraId:132},{value:"Parcel",paraId:133,tocIndex:41},{value:" \u662F\u4E00\u6B3E\u5B8C\u5168\u96F6\u914D\u7F6E\u7684\u524D\u7AEF\u6253\u5305\u5668\uFF0C\u5B83\u63D0\u4F9B\u4E86 \u201C\u50BB\u74DC\u5F0F\u201D \u7684\u4F7F\u7528\u4F53\u9A8C\uFF0C\u6211\u4EEC\u53EA\u9700\u4E86\u89E3\u5B83\u63D0\u4F9B\u7684\u51E0\u4E2A\u7B80\u5355\u7684\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5B83\u53BB\u6784\u5EFA\u6211\u4EEC\u7684\u524D\u7AEF\u5E94\u7528\u7A0B\u5E8F\u4E86",paraId:133,tocIndex:41},{value:"\u8DF3\u8F6C\u5730\u5740",paraId:134}]}}]);
