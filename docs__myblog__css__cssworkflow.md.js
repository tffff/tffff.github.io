(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{xcwD:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),s=t("dEAq"),c=t("H1Ra"),r=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"css-\u9884\u5904\u7406\u5668"},a.a.createElement(s["AnchorLink"],{to:"#css-\u9884\u5904\u7406\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"css \u9884\u5904\u7406\u5668"),a.a.createElement("p",null,"\u5904\u7406\u7279\u5b9a\u683c\u5f0f\u6e90\u6587\u4ef6\u5230\u76ee\u6807 css \u7684\u5904\u7406\u7a0b\u5e8f"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"\u53d8\u91cf")),a.a.createElement("li",null,a.a.createElement("p",null,"\u6df7\u5408(Mixin) Extend")),a.a.createElement("li",null,a.a.createElement("p",null,"\u5d4c\u5957\u89c4\u5219")),a.a.createElement("li",null,a.a.createElement("p",null,"\u8fd0\u7b97")),a.a.createElement("li",null,a.a.createElement("p",null,"\u51fd\u6570")),a.a.createElement("li",null,a.a.createElement("p",null,"Namespaces & Accessors")),a.a.createElement("li",null,a.a.createElement("p",null,"Scope")),a.a.createElement("li",null,a.a.createElement("p",null,"\u6ce8\u91ca"))),a.a.createElement("h2",{id:"css-\u540e\u5904\u7406\u5668"},a.a.createElement(s["AnchorLink"],{to:"#css-\u540e\u5904\u7406\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"css \u540e\u5904\u7406\u5668"),a.a.createElement("ul",null,a.a.createElement("li",null,"css \u538b\u7f29 clean-css"),a.a.createElement("li",null,"\u81ea\u52a8\u6dfb\u52a0\u6d4f\u89c8\u5668\u524d\u7f00 Autoprefixer"),a.a.createElement("li",null,"css \u66f4\u52a0\u7f8e\u89c2\u6392\u5e8f csscomb"),a.a.createElement("li",null,"Rework \u53d6\u4ee3 stylus \u540e\u5904\u7406\u5668\u53d1\u70ed"),a.a.createElement("li",null,"\u524d\u540e\u901a\u5403 PostCSS")),a.a.createElement("h3",{id:"postcss-\u503c\u5f97\u6536\u85cf\u7684\u63d2\u4ef6"},a.a.createElement(s["AnchorLink"],{to:"#postcss-\u503c\u5f97\u6536\u85cf\u7684\u63d2\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"PostCss \u503c\u5f97\u6536\u85cf\u7684\u63d2\u4ef6"),a.a.createElement("ul",null,a.a.createElement("li",null,"postcss-custom-properties \u8fd0\u884c\u65f6\u53d8\u91cf"),a.a.createElement("li",null,"postcss-simple-vars \u4e0e scss \u4e00\u81f4\u7684\u53d8\u91cf\u5b9e\u73b0"),a.a.createElement("li",null,"postcss-mixins \u5b9e\u73b0\u7c7b\u4f3c sass \u7684@mixin \u7684\u529f\u80fd"),a.a.createElement("li",null,"postcss-extend \u5b9e\u73b0\u7c7b\u4f3c sass \u7684\u7ee7\u627f\u529f\u80fd"),a.a.createElement("li",null,"cssnext \u5df2\u88ab",a.a.createElement(s["Link"],{to:"http://preset-env.cssdb.org/features"},"postcss-preset-env"),"\u53d6\u4ee3"),a.a.createElement("li",null,"css Grace \u9762\u5411\u672a\u6765")),a.a.createElement("p",null,a.a.createElement("strong",null,"css \u91cc\u9762\u53ef\u4ee5\u76f4\u63a5\u5199\u53d8\u91cf")),a.a.createElement(c["a"],{code:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n    <style type="text/css">\n      :root {\n        --ydcolor: red;\n        --mainBg: #f5f5f5;\n      }\n      body {\n        background: var(--mainBg);\n      }\n    </style>\n  </head>\n  <body></body>\n</html>\n\x3c!-- \u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528js\u64cd\u4f5ccss --\x3e\n<script>\n  document.documentElement.style.setProperty(\'--mainBg\', \'#f00\');\n<\/script>',lang:"html"}),a.a.createElement("p",null,a.a.createElement("strong",null,"gulp \u914d\u7f6e cssnext")),a.a.createElement(c["a"],{code:"var gulp = require('gulp');\nvar postcss = require('gulp-postcss');\nvar autoprefixer = require('autoprefixer');\nvar cssgrace = require('cssgrace');\nvar cssnext = require('cssnext');\ngulp.task('css', function() {\n  var processors = [\n    autoprefixer({\n      browsers: ['last 3 version'],\n      cascade: false,\n      remove: false,\n    }),\n    cssnext(),\n    cssgrace,\n  ];\n  return gulp\n    .src('./src/css/*.css')\n    .pipe(postcss(processors))\n    .pipe(gulp.dest('./dist'));\n});\ngulp.task('watch', function() {\n  gulp.watch('./src/css/*.css', ['css']);\n});\ngulp.task('default', ['watch', 'css']);",lang:"js"}),a.a.createElement("h2",{id:"css-\u6548\u679c"},a.a.createElement(s["AnchorLink"],{to:"#css-\u6548\u679c","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"css \u6548\u679c"),a.a.createElement("p",null,"\u53ef\u4ee5\u770b",a.a.createElement(s["Link"],{to:"https://css-doodle.com/"},"css doodle"),"\u8fd9\u4e2a\u7f51\u7ad9")))}));n["default"]=e=>{var n=a.a.useContext(s["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(r,{demos:t})}}}]);