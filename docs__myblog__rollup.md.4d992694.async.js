"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[5362],{6728:function(d,_,n){n.r(_);var o=n(72269),i=n(93359),x=n(61788),c=n(19977),m=n(25809),l=n(90978),j=n(96057),p=n(83213),a=n(53683),t=n(80936),r=n(67294),s=n(38123),e=n(85893);function u(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(t.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"rollup-\u57FA\u672C\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#rollup-\u57FA\u672C\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"rollup \u57FA\u672C\u4F7F\u7528"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:s.texts[0].value}),s.texts[1].value]}),(0,e.jsxs)("h2",{id:"\u57FA\u672C\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u4F7F\u7528"]}),(0,e.jsx)("p",{children:s.texts[2].value}),(0,e.jsx)(l.Z,{lang:"bash",children:s.texts[3].value}),(0,e.jsx)("p",{children:s.texts[4].value}),(0,e.jsx)(l.Z,{lang:"js",children:s.texts[5].value}),(0,e.jsx)("p",{children:s.texts[6].value}),(0,e.jsx)(l.Z,{lang:"bash",children:s.texts[7].value}),(0,e.jsxs)("p",{children:[s.texts[8].value,(0,e.jsx)("code",{children:s.texts[9].value})]}),(0,e.jsx)(l.Z,{lang:"js",children:s.texts[10].value}),(0,e.jsx)("p",{children:s.texts[11].value}),(0,e.jsx)(l.Z,{lang:"bash",children:s.texts[12].value})]})})})})}_.default=u},38123:function(d,_,n){n.r(_),n.d(_,{texts:function(){return o}});const o=[{value:"rollup",paraId:0,tocIndex:0},{value:"\u5B83\u7684\u521D\u8877\u53EA\u662F\u5E0C\u671B\u80FD\u591F\u63D0\u4F9B\u4E00\u4E2A\u9AD8\u6548\u7684 ES Modules \u6253\u5305\u5668\uFF0C\u5145\u5206\u5229\u7528 ES Modules \u7684\u5404\u9879\u7279\u6027\uFF0C\u6784\u5EFA\u51FA\u7ED3\u6784\u6241\u5E73\uFF0C\u6027\u80FD\u51FA\u4F17\u7684\u7C7B\u5E93",paraId:0,tocIndex:0},{value:"\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE",paraId:1,tocIndex:1},{value:` \u251C\u2500\u2500 src

 \u2502   \u251C\u2500\u2500 index.js

 \u2502   \u251C\u2500\u2500 logger.js

 \u2502   \u2514\u2500\u2500 messages.js

 \u2514\u2500\u2500 package.json

`,paraId:2,tocIndex:1},{value:"\u6587\u4EF6\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:3,tocIndex:1},{value:`// ./src/messages.js
export default {
  hi: 'Hey Guys, I am zce~',
};

// ./src/logger.js
export const log = msg => {
  console.log('---------- INFO ----------');
  console.log(msg);
  console.log('--------------------------');
};

export const error = msg => {
  console.error('---------- ERROR ----------');
  console.error(msg);
  console.error('---------------------------');
};

// ./src/index.js
import { log } from './logger';
import messages from './messages';
log(messages.hi);
`,paraId:4,tocIndex:1},{value:"\u5B89\u88C5 rollup\uFF0C\u5E76\u6267\u884C",paraId:5,tocIndex:1},{value:`# \u5B89\u88C5
$ npm i rollup --save-dev
# \u6267\u884C \u5982\u679C\u4E0D\u6307\u5B9A\u6253\u5305\u8DEF\u5F84\u5C31\u4F1A\u62A5\u9519 \u8FD9\u4E2A\u6267\u884C\u4E4B\u540E\u4E0D\u4F1A\u751F\u6210\u6587\u4EF6
$ npx rollup ./src/index.js
# \u6267\u884C\u4E4B\u540E\u4F1A\u751F\u6210bundle.js\u6587\u4EF6
$ npx rollup ./src/index.js --file ./dist/bundle.js
`,paraId:6,tocIndex:1},{value:"\u521B\u5EFA",paraId:7,tocIndex:1},{value:"rollup.config.js",paraId:7,tocIndex:1},{value:`// ./rollup.config.js
// \u652F\u6301\u7684\u683C\u5F0F\u6709 ['es', 'amd', 'cjs', 'iife', 'umd', 'system']
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es', // \u8F93\u51FA\u683C\u5F0F
  },
};
`,paraId:8,tocIndex:1},{value:"\u914D\u7F6E\u4E86 config \u6587\u4EF6\u4E4B\u540E\u6267\u884C\u547D\u4EE4",paraId:9,tocIndex:1},{value:`$ npx rollup --config # \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6
$ npx rollup --config rollup.prod.js # \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84
`,paraId:10,tocIndex:1}]}}]);
