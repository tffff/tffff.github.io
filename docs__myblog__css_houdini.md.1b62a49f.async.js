"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[3171],{86150:function(s,a,n){n.r(a);var o=n(72269),u=n(93359),c=n(61788),x=n(19977),h=n(25809),i=n(90978),p=n(96057),m=n(83213),l=n(53683),d=n(80936),r=n(67294),t=n(4691),e=n(85893);function _(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t.texts[0].value}),(0,e.jsx)("p",{children:t.texts[1].value}),(0,e.jsx)("p",{children:t.texts[2].value}),(0,e.jsx)("img",{src:n(45151)}),(0,e.jsxs)("h2",{id:"houdini-api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#houdini-api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Houdini API"]}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:t.texts[3].value})}),(0,e.jsx)("p",{children:t.texts[4].value}),(0,e.jsx)("p",{children:t.texts[5].value}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:t.texts[6].value})}),(0,e.jsx)("p",{children:t.texts[7].value}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:t.texts[8].value})}),(0,e.jsx)("p",{children:t.texts[9].value}),(0,e.jsxs)("h2",{id:"\u5B9E\u9645\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B9E\u9645\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5B9E\u9645\u4F7F\u7528"]}),(0,e.jsxs)("p",{children:[t.texts[10].value,(0,e.jsx)("code",{children:t.texts[11].value}),t.texts[12].value]}),(0,e.jsx)(i.Z,{lang:"html",children:t.texts[13].value}),(0,e.jsx)("p",{children:t.texts[14].value}),(0,e.jsx)(i.Z,{lang:"js",children:t.texts[15].value})]})})})})}a.default=_},4691:function(s,a,n){n.r(a),n.d(a,{texts:function(){return o}});const o=[{value:"\u5728\u73B0\u4ECA\u7684 Web \u5F00\u53D1\u4E2D\uFF0CJavaScript \u51E0\u4E4E\u5360\u636E\u6240\u6709\u7248\u9762\uFF0C\u9664\u4E86\u63A7\u5236\u9875\u9762\u903B\u8F91\u4E0E\u64CD\u4F5C DOM \u5BF9\u8C61\u4EE5 \u5916\uFF0C\u8FDE CSS \u90FD\u76F4\u63A5\u5199\u5728 JavaScript \u91CC\u9762\u4E86\uFF0C\u5C31\u7B97\u6D4F\u89C8\u5668\u90FD\u8FD8\u6C92\u6709\u5B9E\u73B0\u7684\u7279\u6027\uFF0C\u603B\u4F1A\u6709\u4EBA\u505A\u51FA\u5BF9\u5E94 \u7684 Polyfills\uFF0C\u8BA9\u4F60\u5FEB\u901F\u7684\u5C06\u65B0 Feature \u5E94\u7528\u5230 Production \u73AF\u5883\u4E2D\uFF0C\u66F4\u5225\u63D0\u6211\u4EEC\u8FD8\u6709 Babel \u7B49\u5DE5\u5177 \u5E2E\u5FD9\u8F6C\u8BD1\u3002",paraId:0},{value:"\u800C CSS \u5C31\u4E0D\u540C\u4E86\uFF0C\u9664\u4E86\u5236\u5B9A CSS \u6807\u51C6\u89C4\u8303\u6240\u9700\u7684\u65F6\u95F4\u5916\uFF0C\u5404\u5BB6\u6D4F\u89C8\u5668\u7684\u7248\u672C\u3001\u5B9E\u6218\u8FDB\u5EA6\u5DEE\u5F02\u66F4\u662F \u65F7\u65E5\u6301\u4E45\uFF0C\u9876\u591A\u5229\u7528 PostCSS\u3001Sass \u7B49\u5DE5\u5177\u4F86\u5E2E\u6211\u5011\u8F6C\u8BD1\u51FA\u6D4F\u89C8\u5668\u80FD\u63A5\u53D7\u7684 CSS\u3002\u5F00\u53D1\u8005\u4EEC\u80FD\u64CD \u4F5C\u7684\u5C31\u662F\u901A\u8FC7 JS \u53BB\u63A7\u5236 DOM \u4E0E CSSOM \u6765\u5F71\u54CD\u9875\u9762\u7684\u53D8\u5316\uFF0C\u4F46\u662F\u5BF9\u4E8E\u63A5\u4E0B\u4F86\u7684 Layout\u3001Paint \u4E0E Composite \u5C31\u51E0\u4E4E\u6C92\u6709\u63A7\u5236\u6743\u4E86\u3002",paraId:1},{value:`\u4E3A\u4E86\u89E3\u6C7A\u4E0A\u8FF0\u95EE\u9898\uFF0C\u4E3A\u4E86\u8BA9 CSS \u7684\u9B54\u529B\u4E0D\u518D\u6D4F\u89C8\u5668\u628A\u6301\uFF0CHoudini \u5C31\u8BDE\u751F\u4E86!( Houdini \u662F\u7F8E\u56FD\u7684 \u4F1F\u5927\u9B54\u672F\u5E08\uFF0C\u64C5\u957F\u9003\u8131\u672F\uFF0C\u5F88\u9002\u5408\u60F3\u5C06 CSS \u4ECE\u6D4F\u89C8\u5668\u4E2D\u89E3\u653E\u7684\u6982\u5FF5)
CSS Houdini \u662F\u7531\u4E00\u7FA4\u4F86\u81EA Mozilla, Apple, Opera, Microsoft, HP, Intel, IBM, Adobe \u4E0E Google \u7684\u5DE5\u7A0B \u5E08\u6240\u7EC4\u6210\u7684\u5DE5\u4F5C\u5C0F\u7EC4\uFF0C\u5FD7\u5728\u5EFA\u7ACB\u4E00\u7CFB\u5217\u7684 API\uFF0C\u8BA9\u5F00\u53D1\u8005\u80FD\u591F\u4ECB\u5165\u6D4F\u89C8\u5668\u7684 CSS engine`,paraId:2},{value:"1. Parser API",paraId:3,tocIndex:0},{value:"\u8FD8\u6CA1\u6709\u88AB\u5199\u5165 \u89C4\u8303\uFF0C\u6240\u4EE5\u4E0B\u9762\u6211\u8981\u8BF4\u7684\u5185\u5BB9 \u968F\u65F6\u90FD\u4F1A\u6709\u53D8\u5316\uFF0C\u4F46\u662F\u5B83\u7684\u57FA \u672C\u601D\u60F3\u4E0D\u4F1A\u53D8:\u5141\u8BB8\u5F00\u53D1\u8005\u81EA \u7531\u6269\u5C55 CSS \u8BCD\u6CD5\u5206\u6790\u5668\uFF0C\u5F15 \u5165\u65B0\u7684\u7ED3\u6784(constructs)\uFF0C \u6BD4\u5982\u65B0\u7684\u5A92\u4F53\u89C4\u5219\u3001\u65B0\u7684\u4F2A \u7C7B\u3001\u5D4C\u5957\u3001@extends\u3001 @apply \u7B49\u7B49\u3002",paraId:4,tocIndex:0},{value:"\u53EA\u8981\u65B0\u7684\u8BCD\u6CD5\u5206\u6790\u5668\u77E5\u9053\u5982\u4F55 \u89E3\u6790\u8FD9\u4E9B\u65B0\u7ED3\u6784\uFF0CCSSOM \u5C31 \u4E0D\u4F1A\u76F4\u63A5\u5FFD\u7565\u5B83\u4EEC\uFF0C\u800C\u662F\u628A\u8FD9 \u4E9B\u7ED3\u6784\u653E\u5230\u6B63\u786E\u7684\u5730\u65B9",paraId:5,tocIndex:0},{value:"2.CSS Layout API",paraId:6,tocIndex:0},{value:"\u5141\u8BB8\u5F00\u53D1 \u8005\u53EF\u4EE5\u901A\u8FC7 CSS Layout API \u5B9E\u73B0\u81EA\u5DF1\u7684\u5E03\u5C40\u6A21\u5757 (layout module)\uFF0C\u8FD9\u91CC \u7684\u201C\u5E03\u5C40\u6A21\u5757\u201D\u6307\u7684\u662F display \u7684\u5C5E\u6027\u503C\u3002\u4E5F\u5C31\u662F \u8BF4\uFF0C\u8FD9\u4E2A API \u5B9E\u73B0\u4EE5\u540E\uFF0C \u5F00\u53D1\u8005\u9996\u6B21\u62E5\u6709\u4E86\u50CF CSS \u539F\u751F\u4EE3\u7801(\u6BD4\u5982 display:flex\u3001 display:table)\u90A3\u6837\u7684\u5E03 \u5C40\u80FD\u529B\u3002",paraId:7,tocIndex:0},{value:"3.CSS Paint API",paraId:8,tocIndex:0},{value:"\u548C Layout API \u975E\u5E38\u76F8\u4F3C\u3002\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A registerPaint \u65B9\u6CD5\uFF0C\u64CD\u4F5C\u65B9\u5F0F\u548C registerLayout \u65B9\u6CD5\u4E5F\u5F88 Worklet \u76F8\u4F3C\u3002\u5F53\u60F3\u8981\u6784\u5EFA\u4E00\u4E2A CSS \u56FE\u50CF\u7684\u65F6\u5019\uFF0C\u5F00\u53D1\u8005 \u968F\u65F6\u53EF\u4EE5\u8C03\u7528 paint() \u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u521A\u521A\u6CE8\u518C\u597D\u7684\u540D\u5B57",paraId:9,tocIndex:0},{value:"\u7528",paraId:10,tocIndex:1},{value:"css houdini",paraId:10,tocIndex:1},{value:"\u7ED8\u5236\u4E00\u7247\u661F\u7A7A",paraId:10,tocIndex:1},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Houdini\u7ED8\u5236\u661F\u7A7A</title>
    <style type="text/css">
      body {
        margin: 0;
        color: #fff;
        font-size: 24px;
        background: #000;
      }
      body::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        --star-density: 0.8;
        --star-opacity: 1;
        background-image: paint(yd-sky);
        animation: shine 1s linear alternate infinite;
      }
      @keyframes shine {
        from {
          --star-opacity: 1;
        }
        to {
          --star-opacity: 0.4;
        }
      }
    </style>
  </head>
  <body>
    <script>
      if (!CSS in window || !CSS.paintWorklet) {
        console.log('\u4E0D\u652F\u6301paintWorklet');
      } else {
        CSS.paintWorklet.addModule('./sky.js');
      }
    <\/script>
  </body>
</html>
`,paraId:11,tocIndex:1},{value:"sky.js",paraId:12,tocIndex:1},{value:`class StarSky {
  constructor() {}
  static get inputProperties() {
    return ['--star-density', '--star-opacity'];
  }
  paint(ctx, geom, properties) {
    const xMax = geom.width;
    const yMax = geom.height;
    console.log(xMax, yMax);
    ctx.fillRect(0, 0, xMax, yMax);
    let starDensity = properties.get('--star-density').toString() || 1;
    let starOpacity = properties.get('--star-opacity').toString() || 1;
    const stars = Math.round((xMax + yMax) * starDensity);
    for (let i = 0; i <= stars; i++) {
      const x = Math.floor(Math.random() * xMax + 1);
      const y = Math.floor(Math.random() * yMax + 1);
      const size = Math.floor(Math.random() * 2 + 1);
      const opacityOne = Math.floor(Math.random() * 9 + 1);
      const opacityTwo = Math.floor(Math.random() * 9 + 1);
      const opacity = +('.' + (opacityOne + opacityTwo)) * starOpacity;
      const hue = Math.floor(Math.random() * 360 + 1);
      ctx.fillStyle = \`hsla(\${hue},30%,80%,\${opacity})\`;
      ctx.fillRect(x, y, size, size);
    }
  }
}
registerPaint('sky', StarSky);
`,paraId:13,tocIndex:1}]},45151:function(s,a,n){s.exports=n.p+"static/houdini.0c9ebd52.png"}}]);
