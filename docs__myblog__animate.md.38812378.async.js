"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[1195],{87458:function(o,t,n){n.r(t);var _=n(72269),u=n(93359),m=n(61788),w=n(19977),f=n(25809),s=n(90978),E=n(96057),c=n(83213),i=n(53683),a=n(80936),r=n(67294),d=n(80681),e=n(85893);function l(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(a.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u6C34\u6CE2\u7EB9\u6548\u679C",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6C34\u6CE2\u7EB9\u6548\u679C",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6C34\u6CE2\u7EB9\u6548\u679C"]}),(0,e.jsx)(s.Z,{lang:"vue",children:d.texts[0].value})]})})})})}t.default=l},80681:function(o,t,n){n.r(t),n.d(t,{texts:function(){return _}});const _=[{value:`<!--  -->
<template>
  <view class="liquid-fill" :style="{ borderColor: option.bgColor }">
    <view class="text"> {{ option.number + '%' }}</view>
    <view class="water_waves">
      <view
        class="water-model water_waves1"
        :style="{ background: option.bgColor, top: top }"
      />
      <view
        class="water-model water_waves2"
        :style="{ background: option.bgColor, top: top }"
      />
      <view class="water-under" :style="{ background: option.bgColor }" />
    </view>
  </view>
</template>

<script>
export default {
  name: 'LiquidFill',
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          bgColor: '#29b3f3',
          number: 50,
        };
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    top() {
      return \`\${102 - this.option.number}%\`;
    },
  },
};
<\/script>
<style lang="scss" scoped>
.liquid-fill {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 4rpx;
  border-style: solid;
  border-radius: 50%;
  position: relative;
}
.text {
  position: absolute;
  z-index: 99;
  font-size: 28rpx;
  font-weight: bold;
}
.water_waves {
  width: 95%;
  height: 95%;
  border-radius: 50%;
  position: relative;
  animation: water-waves linear infinite;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
@keyframes water-waves {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.water-under {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  border-radius: 50%;
}
.water-model {
  position: absolute;
  width: 200%;
  height: 200%;
  animation: inherit;
}
.water_waves1 {
  left: -60%;
  opacity: 0.7;
  border-radius: 40%;
  animation-duration: 5s;
}
.water_waves2 {
  left: -40%;
  border-radius: 35%;
  opacity: 0.5;
  animation-duration: 7s;
}
</style>
`,paraId:0,tocIndex:0}]}}]);
