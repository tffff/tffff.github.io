(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{"3QJl":function(e,t,a){e.exports=a.p+"static/hooks2.62f9a3da.png"},OR2v:function(e,t,a){e.exports=a.p+"static/hooks6.456615ee.png"},SY3v:function(e,t,a){e.exports=a.p+"static/hooks3.75a0ec4a.png"},SbTV:function(e,t,a){e.exports=a.p+"static/hooks7.0789a1ad.png"},c2rQ:function(e,t,a){e.exports=a.p+"static/hooks1.9a39bb26.png"},"h/dA":function(e,t,a){e.exports=a.p+"static/hooks5.f979a4f2.png"},"v6j/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("dEAq"),o=a("H1Ra"),r=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"usestate-\u7684-3-\u4e2a\u9636\u6bb5"},l.a.createElement(c["AnchorLink"],{to:"#usestate-\u7684-3-\u4e2a\u9636\u6bb5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useState \u7684 3 \u4e2a\u9636\u6bb5"),l.a.createElement("h3",{id:"mountstate"},l.a.createElement(c["AnchorLink"],{to:"#mountstate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"mountState"),l.a.createElement("p",null,"\u7b2c\u4e00\u6b21\u6267\u884c\u51fd\u6570\u4f53\u7684\u65f6\u5019\uff0c\u8c03\u7528",l.a.createElement("code",null,"useState"),"\u4f1a\u6267\u884c",l.a.createElement("code",null,"mountState"),"\uff0c\u5b83\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u51e0\u4ef6\u4e8b\u60c5\uff1a"),l.a.createElement("img",{src:a("c2rQ")}),l.a.createElement("ol",null,l.a.createElement("li",null,"\u9ed8\u8ba4\u503c\u662f",l.a.createElement("code",null,"function"),"\uff0c\u6267\u884c",l.a.createElement("code",null,"function"),"\uff0c\u5f97\u5230\u521d\u59cb",l.a.createElement("code",null,"state")),l.a.createElement("li",null,l.a.createElement("code",null,"state"),"\u662f\u5b58\u653e\u5728",l.a.createElement("code",null,"memoizedState"),"\u5c5e\u6027\u4e2d"),l.a.createElement("li",null,"\u65b0\u5efa\u4e00\u4e2a",l.a.createElement("code",null,"quene")),l.a.createElement("li",null,"\u628a",l.a.createElement("code",null,"queue"),"\u4f20\u9012\u7ed9",l.a.createElement("code",null,"dispatch")),l.a.createElement("li",null,"\u8fd4\u56de\u9ed8\u8ba4\u503c\u548c",l.a.createElement("code",null,"dispatch"))),l.a.createElement("p",null,"\u6211\u4eec\u5728\u5199\u4ee3\u7801\u521d\u59cb\u5316",l.a.createElement("code",null,"state"),"\u7684\u65f6\u5019,\u4e5f\u53ef\u4ee5\u7528\u5982\u4e0b\u65b9\u6cd5\u5199\uff1a"),l.a.createElement(o["a"],{code:"//\u4ee5function\u7684\u5f62\u5f0f\u5199\uff0c\u4f46\u662f\u4e00\u822c\u6211\u4eec\u53ef\u80fd\u4e0d\u4f1a\u7528\u5230\u8fd9\u79cd\u5199\u6cd5\nconst [name, setName] = useState(() => 'yyyy');",lang:"js"}),l.a.createElement("h3",{id:"dispatchaction"},l.a.createElement(c["AnchorLink"],{to:"#dispatchaction","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"dispatchAction"),l.a.createElement("img",{src:a("3QJl")}),l.a.createElement("ol",null,l.a.createElement("li",null,"\u521b\u5efa\u4e00\u4e2a",l.a.createElement("code",null,"update")),l.a.createElement("li",null,l.a.createElement("code",null,"update"),"\u6dfb\u52a0\u5230",l.a.createElement("code",null,"quene"),"\u91cc"),l.a.createElement("li",null,"\u5982\u679c\u5f53\u524d\u6709\u65f6\u95f4\uff0c\u63d0\u524d\u8ba1\u7b97\u51fa\u6700\u65b0\u7684",l.a.createElement("code",null,"state"),"\uff0c\u4fdd\u5b58\u5728",l.a.createElement("code",null,"eagerState")),l.a.createElement("li",null,"\u8c03\u7528\u4e00\u6b21",l.a.createElement("code",null,"scheduleWork"))),l.a.createElement(o["a"],{code:"// \u6bcf\u8c03\u7528\u4e00\u6b21 setCount(2);setCount((count) => count++)\n// \u5c31\u4f1a\u521b\u5efa\u4e00\u4e2aupdate\uff0c\u6dfb\u52a0\u5230queue.pending\u94fe\u8868\u4e2d",lang:"js"}),l.a.createElement("h3",{id:"updatestate"},l.a.createElement(c["AnchorLink"],{to:"#updatestate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"updateState"),l.a.createElement("img",{src:a("SY3v")}),l.a.createElement("ol",null,l.a.createElement("li",null,"\u9012\u5f52\u6267\u884c",l.a.createElement("code",null,"quene"),"\u91cc\u7684",l.a.createElement("code",null,"update")),l.a.createElement("li",null,"\u8ba1\u7b97\u6700\u65b0\u7684",l.a.createElement("code",null,"state"),"\uff0c\u8d4b\u503c\u7ed9",l.a.createElement("code",null,"memoizedState"))),l.a.createElement("h2",{id:"useeffect-\u7684-2-\u4e2a\u9636\u6bb5"},l.a.createElement(c["AnchorLink"],{to:"#useeffect-\u7684-2-\u4e2a\u9636\u6bb5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useEffect \u7684 2 \u4e2a\u9636\u6bb5"),l.a.createElement("h3",{id:"mounteffect"},l.a.createElement(c["AnchorLink"],{to:"#mounteffect","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"MountEffect"),l.a.createElement("img",{src:a("wB3j")}),"1. \u5904\u7406\u4f9d\u8d56\u6570\u7ec4 2. \u8bbe\u7f6e`effectTag` 3. \u65b0\u589e\u4e00\u4e2a`Effect`\u5230`currentlyRenderingFiber.updateQueue` \u4e2d\u53c2\u4e0e`\u5230compleleRoot`\u4e2d",l.a.createElement("p",null,l.a.createElement("strong",null,"MountEffect \u6267\u884c\u65f6\u673a")),l.a.createElement("p",null,"\u5728 commitRoot => commitLayoutEffects => commitLifeCycles => commitHookEffectListMount \u91cc\u6267\u884c MountEffect"),l.a.createElement("img",{src:a("h/dA")}),l.a.createElement("h3",{id:"updateeffect"},l.a.createElement(c["AnchorLink"],{to:"#updateeffect","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"UpdateEffect"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u8bbe\u7f6e",l.a.createElement("code",null,"EffectTag")),l.a.createElement("li",null,"\u5bf9\u6bd4\u4f9d\u8d56\u662f\u5426\u53d1\u751f\u53d8\u5316\uff0c\u2028 \u5982\u4e0d\u4e00\u6837\uff0c\u5219\u91cd\u65b0 push \u4e00\u4e2a\u65b0\u7684",l.a.createElement("code",null,"Effect"))),l.a.createElement("h3",{id:"updateeffect-1"},l.a.createElement(c["AnchorLink"],{to:"#updateeffect-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"UpdateEffect"),l.a.createElement("img",{src:a("OR2v")}),l.a.createElement("h3",{id:"destroy"},l.a.createElement(c["AnchorLink"],{to:"#destroy","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"destroy"),l.a.createElement("p",null,"\u5728",l.a.createElement("code",null,"commitUnmount"),"\u9636\u6bb5\u5378\u8f7d\u7ec4\u4ef6\uff0c\u8fd9\u65f6",l.a.createElement("code",null,"distory"),"\u65b9\u6cd5\u4f1a\u88ab\u8c03\u7528"),l.a.createElement("img",{src:a("SbTV")})))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(r,{demos:a})}},wB3j:function(e,t,a){e.exports=a.p+"static/hooks4.37c1cf77.png"}}]);