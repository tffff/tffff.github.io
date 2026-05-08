"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[7528],{60315:function(o,e,_){_.r(e);var s=_(72269),r=_(93359),E=_(61788),m=_(19977),f=_(25809),d=_(90978),h=_(96057),P=_(83213),i=_(53683),l=_(80936),a=_(67294),t=_(27607),n=_(85893);function u(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(l.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u5173\u4E8E-this",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5173\u4E8E-this",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5173\u4E8E this"]}),(0,n.jsx)("p",{children:t.texts[0].value}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[1].value})]})})})})}e.default=u},27607:function(o,e,_){_.r(e),_.d(e,{texts:function(){return s}});const s=[{value:"\u9996\u5148\u770B\u4E0B\u9762\u4E00\u9053\u9898",paraId:0,tocIndex:0},{value:`this.a = 20;
function go() {
  console.log(this.a); //1
  this.a = 30;
}
go.prototype.a = 40;
var test = {
  a: 50,
  init: function(fn) {
    fn();
    console.log(this.a);
    return fn;
  },
};
console.log(new go().a); //2
test.init(go); //3
var p = test.init(go); //4
p(); //5
`,paraId:1,tocIndex:0}]}}]);
