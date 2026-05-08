"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[3170],{55321:function(a,_,e){e.r(_);var s=e(72269),u=e(93359),m=e(61788),f=e(19977),E=e(25809),t=e(90978),D=e(96057),O=e(83213),d=e(53683),o=e(80936),r=e(67294),l=e(4028),n=e(85893);function i(){return(0,n.jsx)(d.dY,{children:(0,n.jsx)(r.Suspense,{fallback:(0,n.jsx)(o.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u83B7\u53D6\u4E00\u5E74\u6709\u591A\u5C11\u4E2A\u5468",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u83B7\u53D6\u4E00\u5E74\u6709\u591A\u5C11\u4E2A\u5468",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u83B7\u53D6\u4E00\u5E74\u6709\u591A\u5C11\u4E2A\u5468"]}),(0,n.jsx)(t.Z,{lang:"js",children:l.texts[0].value})]})})})})}_.default=i},4028:function(a,_,e){e.r(_),e.d(_,{texts:function(){return s}});const s=[{value:`//\u83B7\u53D6\u4E00\u5E74\u6709\u591A\u5C11\u4E2A\u5468 \u5E76\u4E14\u628A\u6BCF\u4E2A\u5468\u5C55\u793A\u51FA\u6765
function assignWeeks(year) {
  const nowYear = moment(year).year();
  let handleYear = moment(new Date(String(nowYear)));
  const totalWeeks = handleYear.endOf('year').isoWeek();
  const arryWeek = [];
  for (let i = 1; i <= totalWeeks; i++) {
    let startOf = handleYear
      .week(i)
      .startOf('week')
      .format('MM-DD');
    let endOf = handleYear
      .week(i)
      .endOf('week')
      .format('MM-DD');
    let ednyear = handleYear
      .week(i)
      .endOf('week')
      .format('YYYY');
    arryWeek.push({
      value: i,
      name: \`\u7B2C\${i}\u5468 \${
        ednyear > nowYear ? nowYear + '-' + startOf : startOf
      } \u81F3 \${ednyear > nowYear ? ednyear + '-' + endOf : endOf}\`,
      startTime: handleYear
        .week(i)
        .startOf('week')
        .format('YYYY-MM-DD'), // \u8FD9\u5468\u7684\u5F00\u59CB\u65F6\u95F4
      endTime: handleYear
        .week(i)
        .endOf('week')
        .format('YYYY-MM-DD'), // \u8FD9\u5468\u7684\u7ED3\u675F\u65F6\u95F4
    });
  }
}
assignWeeks('2022');
`,paraId:0,tocIndex:0}]}}]);
