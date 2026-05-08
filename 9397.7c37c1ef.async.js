"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[9397],{9397:function(n,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C",paraId:0,tocIndex:0},{value:"\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u4F20\u503C\u662F\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"props",paraId:1,tocIndex:0},{value:" \u6765\u4F20\u503C\u7684",paraId:1,tocIndex:0},{value:`//\u7236\u7EC4\u4EF6
const Parent = () => {
  return <Child name="\u4F60\u597D" />;
};
//\u5B50\u7EC4\u4EF6child
const Child = props => {
  return <p>{props.name}</p>;
};
`,paraId:2,tocIndex:0},{value:"\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u503C",paraId:3,tocIndex:0},{value:"\u5B50\u7EC4\u4EF6\u7ED9\u7236\u7EC4\u4EF6\u4F20\u503C\u662F\u901A\u8FC7 ",paraId:4,tocIndex:0},{value:"props+callback",paraId:4,tocIndex:0},{value:" \u56DE\u8C03\u6765\u5B9E\u73B0\u7684",paraId:4,tocIndex:0},{value:`class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '\u6211\u662F\u7236\u7EC4\u4EF6',
    };
  }
  callback = msg => {
    console.log(msg);
    this.setState({ msg });
  };
  render() {
    let { msg } = this.state;
    return (
      <div>
        {msg}
        <Child callback={this.callback} />
      </div>
    );
  }
}
//\u5B50\u7EC4\u4EF6child
const Child = props => {
  const cb = msg => {
    return () => {
      //\u4E0D\u5199\u8FD9\u4E00\u53E5 \u4F1A\u9020\u6210\u7ACB\u5373\u6267\u884C\u51FD\u6570\u53D8\u6210\u6B7B\u5FAA\u73AF
      props.callback(msg);
    };
  };
  return <button onclick={cb('\u8FD9\u662F\u4E00\u4E2A\u70B9\u51FB\u4E8B\u4EF6')}>{props.name}</button>;
};
`,paraId:5,tocIndex:0},{value:`\u8DE8\u7EA7\u7EC4\u4EF6\u901A\u4FE1
\u7236\u7EC4\u4EF6\u5411\u66F4\u6DF1\u5C42\u6B21\u7684\u5B50\u7EC4\u4EF6\u4F20\u503C\uFF0C`,paraId:6,tocIndex:0},{value:"\u7B2C\u4E00\u79CD\u662F\u4F7F\u7528 ",paraId:7,tocIndex:0},{value:"props",paraId:7,tocIndex:0},{value:",\u5229\u7528\u4E2D\u95F4\u5C42\u5C42\u4F20\u9012\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u8FD9\u6837\u4E0D\u597D\u7EF4\u62A4\uFF0C\u4E00\u65E6\u4E00\u4E2A\u5C42\u7EA7\u65AD\u5F00\u4E86\u5C31\u4F1A\u51FA\u73B0\u95EE\u9898\uFF0C\u627E\u95EE\u9898\u4E5F\u4E0D\u597D\u5B9A\u4F4D",paraId:7,tocIndex:0},{value:"\u7B2C\u4E8C\u79CD\u662F\u4F7F\u7528 ",paraId:7,tocIndex:0},{value:"context",paraId:7,tocIndex:0},{value:",",paraId:7,tocIndex:0},{value:"context",paraId:7,tocIndex:0},{value:" \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5927\u5BB9\u5668\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u8981\u901A\u4FE1\u7684\u5185\u5BB9\u653E\u8FDB\u53BB\uFF0C\u8FD9\u6837\u4E0D\u7BA1\u5D4C\u5957\u591A\u6DF1\uFF0C\u90FD\u53EF\u4EE5\u968F\u610F\u53D6\u7528\uFF0C\u5BF9\u8DE8\u8D8A\u591A\u5C42\u7684\u53EF\u4EE5\u7528 context",paraId:7,tocIndex:0},{value:`\u975E\u5D4C\u5957\u5173\u7CFB\u7EC4\u4EF6\u901A\u4FE1
\u975E\u5D4C\u5957\u5173\u7CFB\u7EC4\u4EF6\uFF0C\u5C31\u662F\u6CA1\u6709\u5305\u542B\u4EFB\u4F55\u5173\u7CFB\u7684\u7EC4\u4EF6\uFF0C\u5305\u62EC\u5144\u5F1F\u7EC4\u4EF6\u4EE5\u53CA\u4E0D\u5728\u540C\u4E00\u4E2A\u7236\u7EC4\u4EF6\u7684\u975E\u5144\u5F1F\u7EC4\u4EF6`,paraId:8,tocIndex:0},{value:"\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u901A\u4FE1(",paraId:9,tocIndex:0},{value:"emmit",paraId:9,tocIndex:0},{value:")",paraId:9,tocIndex:0},{value:"\u53EF\u4EE5\u4F7F\u7528 ",paraId:9,tocIndex:0},{value:"redux",paraId:9,tocIndex:0},{value:" \u8FDB\u884C\u5168\u5C40\u72B6\u6001\u7BA1\u7406",paraId:9,tocIndex:0},{value:"\u5982\u679C\u662F\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u53EF\u4EE5\u627E\u5230\u8FD9\u4E24\u4E2A\u5144\u5F1F\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u901A\u8FC7\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F\u8FDB\u884C\u4F20\u9012",paraId:9,tocIndex:0},{value:"\u80CC\u666F\uFF1A",paraId:10,tocIndex:1},{value:"react \u8FDB\u884C\u7EC4\u4EF6\u6E32\u67D3\u65F6\uFF0C\u4ECE setState \u5F00\u59CB\u5230\u6E32\u67D3\u6574\u4E2A\u8FC7\u7A0B\u662F\u540C\u6B65\u7684\uFF0C\u5982\u679C\u9700\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6\u6BD4\u8F83\u5E9E\u5927\uFF0Cjs \u5C31\u4F1A\u5360\u636E\u4E3B\u7EBF\u7A0B\u65F6\u95F4\u8F83\u957F\uFF0C\u4F1A\u5BFC\u81F4\u9875\u9762\u54CD\u5E94\u7684\u6027\u80FD\u53D8\u5DEE\uFF0C\u4F7F\u5F97 react \u5728\u52A8\u753B\u3001\u624B\u52BF\u7B49\u5E94\u7528\u4E2D\u6548\u679C\u6BD4\u8F83\u5DEE\u3002",paraId:11,tocIndex:1},{value:"\u9875\u9762\u5361\u987F\uFF1AStack reconciler \u7684\u5DE5\u4F5C\u6D41\u7A0B\u5F88\u60F3\u51FD\u6570\u7684\u8C03\u7528\u8FC7\u7A0B\u3002\u7236\u7EC4\u4EF6\u91CC\u9762\u8C03\u7528\u5B50\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u7C7B\u6BD4\u4E3A\u51FD\u6570\u7684\u9012\u5F52\uFF0C\u5BF9\u4E8E\u7279\u522B\u5E9E\u5927\u7684 DOM \u6811\u6765\u8BF4\uFF0Creconciliation \u8FC7\u7A0B\u4F1A\u5F88\u957F\uFF0C\u8D85\u8FC7 16ms\uFF0C\u5728\u8FD9\u671F\u95F4\uFF0C\u4E3B\u7EBF\u7A0B\u90FD\u662F\u88AB js \u5360\u7528\u7684\uFF0C\u56E0\u6B64\u4EFB\u4F55\u4EA4\u4E92\u3001\u5E03\u5C40\u3001\u6E32\u67D3\u90FD\u4F1A\u505C\u6B62\uFF0C\u7ED9\u7528\u6237\u7684\u611F\u89C9\u5C31\u662F\u9875\u9762\u88AB\u5361\u4F4F\u4E86",paraId:12,tocIndex:1},{value:"\u5B9E\u73B0\u539F\u7406\uFF1A",paraId:13,tocIndex:1},{value:"\u65E7\u7248 React \u91C7\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u8FDB\u884C\u6E32\u67D3\uFF0C\u4F7F\u7528\u7684\u662F js \u5F15\u64CE\u81EA\u8EAB\u7684\u51FD\u6570\u8C03\u7528\u6808\uFF0C\u4ED6\u4F1A\u4E00\u76F4\u6267\u884C\u5230\u6808\u7A7A\u4E3A\u6B62\uFF0C\u800C Fiber \u5B9E\u73B0\u4E86\u81EA\u5DF1\u7684\u7EC4\u4EF6\u8C03\u7528\u6808\uFF0C\u4ED6\u4EE5\u94FE\u8868\u7684\u5F62\u5F0F\u904D\u5386\u7EC4\u4EF6\u6811\uFF0C\u53EF\u4EE5\u7075\u6D3B\u7684\u6682\u505C\u3001\u7EE7\u7EED\u548C\u4E22\u5F03\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u5B9E\u73B0\u65B9\u5F0F\u662F\u4F7F\u7528\u4E86\u6D4F\u89C8\u5668\u7684 requestldleCallback \u8FD9\u4E00 api\u3002Fiber \u5176\u5B9E\u6307\u7684\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u4ED6\u53EF\u4EE5\u7528\u4E00\u4E2A\u7EAF js \u5BF9\u8C61\u6765\u8868\u793A\uFF1A",paraId:14,tocIndex:1},{value:`const fiber = {
  stateNode, //\u8282\u70B9\u5B9E\u4F8B
  child, //\u5B50\u8282\u70B9
  sibling, //\u5144\u5F1F\u8282\u70B9
  return, //\u7236\u8282\u70B9
};
`,paraId:15,tocIndex:1},{value:`react \u5185\u90E8\u8FD0\u8F6C\u5206\u4E09\u5C42
`,paraId:16,tocIndex:1},{value:"virtual dom",paraId:17,tocIndex:1},{value:"\u5C42\uFF0C\u63CF\u8FF0\u9875\u9762\u957F\u4EC0\u4E48\u6837",paraId:17,tocIndex:1},{value:"Reconciler",paraId:17,tocIndex:1},{value:"\u5C42\uFF0C\u8D1F\u8D23\u8C03\u7528\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u65B9\u6CD5\uFF0C\u8FD0\u7528 diff \u7B97\u6CD5",paraId:17,tocIndex:1},{value:"Renderer",paraId:17,tocIndex:1},{value:"\u5C42\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u5E73\u53F0\uFF0C\u6E32\u67D3\u51FA\u5BF9\u5E94\u7684\u9875\u9762\uFF0C\u6BD4\u8F83\u5E38\u89C1\u7684\u662F ",paraId:17,tocIndex:1},{value:"ReactDOM",paraId:17,tocIndex:1},{value:" \u548C ",paraId:17,tocIndex:1},{value:"ReactNative",paraId:17,tocIndex:1},{value:"\u4E3A\u4E86\u5B9E\u73B0\u4E0D\u5361\u987F\uFF0C\u5C31\u9700\u8981\u4E00\u4E2A\u8C03\u5EA6\u5668(",paraId:16,tocIndex:1},{value:"Scheduler",paraId:16,tocIndex:1},{value:") \u6765\u8FDB\u884C\u4EFB\u52A1\u7684\u5206\u914D\uFF0C\u4F18\u5148\u7EA7\u9AD8\u7684\u4EFB\u52A1\uFF08\u6BD4\u5982\u952E\u76D8\u8F93\u5165\uFF09\u53EF\u4EE5\u6253\u65AD\u4F18\u5148\u7EA7\u4F4E\u7684\u4EFB\u52A1\uFF08\u5982",paraId:16,tocIndex:1},{value:"diff",paraId:16,tocIndex:1},{value:`\uFF09\u7684\u6267\u884C\uFF0C\u4ECE\u800C\u66F4\u5FEB\u7684\u751F\u6548\uFF0C\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u6709\u516D\u79CD\uFF1A
`,paraId:16,tocIndex:1},{value:"synchronous",paraId:18,tocIndex:1},{value:"\uFF0C\u4E0E\u4E4B\u524D\u7684",paraId:18,tocIndex:1},{value:"Stack Reconciler",paraId:18,tocIndex:1},{value:"\u64CD\u4F5C\u4E00\u6837\uFF0C\u540C\u6B65\u6267\u884C",paraId:18,tocIndex:1},{value:"task",paraId:18,tocIndex:1},{value:" ,\u5728",paraId:18,tocIndex:1},{value:"next tick",paraId:18,tocIndex:1},{value:"\u4E4B\u524D\u6267\u884C",paraId:18,tocIndex:1},{value:"animation",paraId:18,tocIndex:1},{value:"\uFF0C\u4E0B\u4E00\u5E27\u4E4B\u524D\u6267\u884C",paraId:18,tocIndex:1},{value:"high",paraId:18,tocIndex:1},{value:",\u5728\u4E0D\u4E45\u7684\u5C06\u6765\u7ACB\u5373\u6267\u884C",paraId:18,tocIndex:1},{value:"low",paraId:18,tocIndex:1},{value:",\u7A0D\u5FAE\u8FDF\u4E9B\u4E5F\u6CA1\u5173\u7CFB",paraId:18,tocIndex:1},{value:"offscreen",paraId:18,tocIndex:1},{value:"\uFF0C\u4E0B\u4E00\u6B21",paraId:18,tocIndex:1},{value:"render",paraId:18,tocIndex:1},{value:"\u65F6\u6216",paraId:18,tocIndex:1},{value:"scroll",paraId:18,tocIndex:1},{value:"\u65F6\u624D\u6267\u884C",paraId:18,tocIndex:1},{value:"Fiber Reconciler(react)",paraId:16,tocIndex:1},{value:`\u6267\u884C\u9636\u6BB5
`,paraId:16,tocIndex:1},{value:"\u9636\u6BB5\u4E00\uFF0C\u751F\u6210 ",paraId:19,tocIndex:1},{value:"Fiber",paraId:19,tocIndex:1},{value:" \u6811\uFF0C\u5F97\u51FA\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u4FE1\u606F\uFF0C\u8FD9\u4E00\u6B65\u662F\u4E00\u4E2A\u6E10\u8FDB\u7684\u8FC7\u7A0B\uFF0C\u53EF\u4EE5\u88AB\u6253\u65AD",paraId:19,tocIndex:1},{value:"\u9636\u6BB5\u4E8C\uFF0C\u5C06\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u4E00\u6B21\u6279\u91CF\u66F4\u65B0\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4E0D\u80FD\u88AB\u6253\u65AD",paraId:19,tocIndex:1},{value:"Fiber",paraId:16,tocIndex:1},{value:"\u6811\uFF1A",paraId:16,tocIndex:1},{value:"Fiver Reconciler",paraId:16,tocIndex:1},{value:"\u5728\u9636\u6BB5\u4E00\u8FDB\u884C",paraId:16,tocIndex:1},{value:"diff",paraId:16,tocIndex:1},{value:"\u8BA1\u7B97\u7684\u65F6\u5019\uFF0C\u4F1A\u57FA\u4E8E",paraId:16,tocIndex:1},{value:"Virtual DOM",paraId:16,tocIndex:1},{value:"\u6811\u751F\u6210\u4E00\u9897",paraId:16,tocIndex:1},{value:"Fiber",paraId:16,tocIndex:1},{value:"\u6811\uFF0C\u5B83\u7684\u672C\u8D28\u662F\u94FE\u8868",paraId:16,tocIndex:1},{value:"\u4ECE ",paraId:16,tocIndex:1},{value:"Stack Reconciler",paraId:16,tocIndex:1},{value:"\u5230",paraId:16,tocIndex:1},{value:"FiberReconciler",paraId:16,tocIndex:1},{value:"\uFF0C\u6E90\u7801\u5C42\u9762\u5176\u5B9E\u5C31\u662F\u5E72\u4E86\u4E00\u4EF6\u9012\u5F52\u5FAA\u73AF\u7684\u4E8B\u60C5",paraId:16,tocIndex:1},{value:"\u4E3B\u8981\u662F\u6D89\u53CA\u5230\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u3001\u4E0A\u7EBF\u4E4B\u540E\u7684\u9996\u5C4F\u3001\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u7684\u4F18\u5316",paraId:20,tocIndex:2},{value:"\u9996\u5C4F\u4F18\u5316\u4E00\u822C\u6D89\u53CA\u5230\u7684\u6307\u6807\u6709 ",paraId:21,tocIndex:2},{value:"FP\u3001FCP\u3001FMP",paraId:21,tocIndex:2},{value:"\uFF0C\u8981\u6709\u4E00\u4E2A\u826F\u597D\u7684\u4F53\u9A8C\u662F\u5C3D\u53EF\u80FD\u7684\u628A ",paraId:21,tocIndex:2},{value:"FCP",paraId:21,tocIndex:2},{value:" \u63D0\u524D\uFF0C\u9700\u8981\u505A\u4E00\u4E9B\u5DE5\u7A0B\u5316\u7684\u5904\u7406\uFF0C\u53BB\u4F18\u5316\u8D44\u6E90\u7684\u52A0\u8F7D\u65B9\u5F0F\u4EE5\u53CA\u5206\u5305\u7B56\u7565\uFF0C\u8D44\u6E90\u7684\u51CF\u5C11\u662F\u6700\u6709\u6548\u7684\u52A0\u5FEB\u9996\u5C4F\u6253\u5F00\u7684\u65B9\u5F0F",paraId:21,tocIndex:2},{value:"\u5BF9\u4E8E ",paraId:21,tocIndex:2},{value:"CSR",paraId:21,tocIndex:2},{value:" \u7684\u5E94\u7528\uFF0C",paraId:21,tocIndex:2},{value:"FCP",paraId:21,tocIndex:2},{value:" \u7684\u8FC7\u7A0B\u4E00\u822C\u662F\u9996\u5148\u52A0\u8F7D js \u548C css,js \u5728\u672C\u5730\u6267\u884C\u5B8C\u6210\uFF0C\u7136\u540E\u52A0\u8F7D\u6570\u636E\u56DE\u6765\u505A\u5185\u5BB9\u6E32\u67D3\uFF0C\u6240\u4EE5 ",paraId:21,tocIndex:2},{value:"CSR",paraId:21,tocIndex:2},{value:" \u53EF\u4EE5\u8003\u8651\u9AA8\u67B6\u5C4F\u548C\u9884\u6E32\u67D3(\u90E8\u5206\u7ED3\u6784\u6E32\u67D3)\u3001",paraId:21,tocIndex:2},{value:"suspence",paraId:21,tocIndex:2},{value:" \u4E0E ",paraId:21,tocIndex:2},{value:"lazy",paraId:21,tocIndex:2},{value:" \u505A\u61D2\u52A0\u8F7D\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F",paraId:21,tocIndex:2},{value:"\u4E0D\u7BA1\u5BF9\u4E8E ",paraId:21,tocIndex:2},{value:"CSR",paraId:21,tocIndex:2},{value:" \u6216\u8005 ",paraId:21,tocIndex:2},{value:"SSR",paraId:21,tocIndex:2},{value:"\u3001\u90FD\u5EFA\u8BAE\u914D\u5408\u4F7F\u7528 ",paraId:21,tocIndex:2},{value:"Service worker",paraId:21,tocIndex:2},{value:" \u6765\u63A7\u5236\u8D44\u6E90\u7684\u8C03\u914D\u53CA\u9AA8\u67B6\u5C4F\u79D2\u5F00\u7684\u4F53\u9A8C",paraId:21,tocIndex:2},{value:"react \u9879\u76EE\u4E0A\u7EBF\u4E4B\u540E\uFF0C\u9996\u5148\u4FDD\u969C\u7684\u662F\u53EF\u7528\u6027\uFF0C\u6240\u4EE5\u901A\u8FC7 ",paraId:21,tocIndex:2},{value:"React.Profiler",paraId:21,tocIndex:2},{value:" \u5206\u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3\u6B21\u6570\u53CA\u8017\u65F6\u7684\u4EFB\u52A1\uFF0C\u4F46\u662F Profile \u8BB0\u5F55\u7684\u662F commit \u9636\u6BB5\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u5BF9\u4E8E react \u8C03\u548C\u9636\u6BB5\u5C31\u9700\u8981\u7ED3\u5408 performanceAPI \u4E00\u8D77\u5206\u6790",paraId:21,tocIndex:2},{value:"\u7531\u4E8E React \u7236\u7EC4\u4EF6 props \u6539\u53D8\u4E4B\u540E\uFF0C\u6240\u6709\u4E0E props \u76F8\u5173\u5B50\u7EC4\u4EF6\u5728\u6CA1\u6709\u6DFB\u52A0\u6761\u4EF6\u63A7\u5236\u7684\u60C5\u51B5\u4E0B\u4E5F\u4F1A\u89E6\u53D1 render \u6E32\u67D3\uFF0C\u8FD9\u662F\u6CA1\u6709\u5FC5\u8981\u7684\uFF0C\u53EF\u4EE5\u7ED3\u5408 react \u7684 ",paraId:21,tocIndex:2},{value:"PureComponent",paraId:21,tocIndex:2},{value:" \u4EE5\u53CA ",paraId:21,tocIndex:2},{value:"React.memo",paraId:21,tocIndex:2},{value:" \u7B49\u6D45\u6BD4\u8F83\u5904\u7406\uFF0C\u8FD9\u4E2D\u95F4\u6D89\u53CA\u5230\u4E0D\u53EF\u53D8\u6570\u636E\u7684\u5904\u7406\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u7ED3\u5408 ",paraId:21,tocIndex:2},{value:"shouldComponentUpdate",paraId:21,tocIndex:2},{value:" \u505A\u6DF1\u6BD4\u8F83\u5904\u7406",paraId:21,tocIndex:2},{value:"\u6240\u4EE5\u8FD0\u884C\u72B6\u6001\u7684\u4F18\u5316\uFF0C\u90FD\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684 render,",paraId:21,tocIndex:2},{value:"React.useMemo",paraId:21,tocIndex:2},{value:" \u548C ",paraId:21,tocIndex:2},{value:"React.useCallback",paraId:21,tocIndex:2},{value:" \u4E5F\u53EF\u4EE5\u505A\u5F88\u591A\u4F18\u5316\u7684\u5730\u65B9",paraId:21,tocIndex:2},{value:"\u4FDD\u969C\u5E94\u7528\u7684\u53EF\u7528\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:21,tocIndex:2},{value:"componentDidCatch",paraId:21,tocIndex:2},{value:" \u5904\u7406",paraId:21,tocIndex:2},{value:"\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7684\u4F18\u5316\u70B9",paraId:22,tocIndex:2},{value:"\u4FDD\u8BC1\u6570\u636E\u7684\u4E0D\u53EF\u53D8\u6027",paraId:23,tocIndex:2},{value:"\u4F7F\u7528\u552F\u4E00\u7684\u952E\u503C\u8FED\u4EE3",paraId:23,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:23,tocIndex:2},{value:"webworker",paraId:23,tocIndex:2},{value:" \u505A\u5BC6\u96C6\u578B\u7684\u4EFB\u52A1\u5904\u7406",paraId:23,tocIndex:2},{value:"\u4E0D\u5728 ",paraId:23,tocIndex:2},{value:"render",paraId:23,tocIndex:2},{value:" \u4E2D\u5904\u7406\u6570\u636E",paraId:23,tocIndex:2},{value:"\u4E0D\u5FC5\u8981\u7684\u6807\u7B7E,\u4F7F\u7528 ",paraId:23,tocIndex:2},{value:"React.Fragments",paraId:23,tocIndex:2},{value:'\u4E00\u4E2A list \u9875\u9762\u4E0A\uFF0C\u542B\u6709 1000 \u4E2A\u6761\u76EE\u7684\u5F85\u529E\u5217\u8868\uFF0C\u73B0\u5728\u5176\u4E2D 100 \u9879\u5728\u540C\u4E00\u65F6\u95F4\u8FBE\u5230\u4E86\u8FC7\u671F\u65F6\u95F4\uFF0C\u9700\u8981\u5728\u5BF9\u5E94\u9879\u7684 text-node \u91CC\u9762\u6DFB\u52A0"\u5DF2\u8FC7\u671F"\u7684\u6587\u5B57\uFF0C\u9700\u8981\u5C3D\u53EF\u80FD\u7684\u51CF\u5C11 dom \u91CD\u7ED8\u6B21\u6570\u4EE5\u63D0\u5347\u6027\u80FD',paraId:24,tocIndex:3},{value:"\u5C1D\u8BD5\u4F7F\u7528 vue \u6216 react \u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898",paraId:24,tocIndex:3},{value:"\u539F\u751F\u5B9E\u73B0",paraId:25,tocIndex:3},{value:"createdocumentfragment()",paraId:25,tocIndex:3},{value:`\u65B9\u6CD5\u521B\u5EFA\u4E86\u4E00\u865A\u62DF\u7684\u8282\u70B9\u5BF9\u8C61\uFF0C\u8282\u70B9\u5BF9\u8C61\u5305\u542B\u6240\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\u3002
\u5F53\u4F60\u60F3\u63D0\u53D6\u6587\u6863\u7684\u4E00\u90E8\u5206\uFF0C\u6539\u53D8\uFF0C\u589E\u52A0\uFF0C\u6216\u5220\u9664\u67D0\u4E9B\u5185\u5BB9\u53CA\u63D2\u5165\u5230\u6587\u6863\u672B\u5C3E\u53EF\u4EE5\u4F7F\u7528 `,paraId:25,tocIndex:3},{value:"createDocumentFragment()",paraId:25,tocIndex:3},{value:` \u65B9\u6CD5\u3002
\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6587\u6863\u7684\u6587\u6863\u5BF9\u8C61\u6765\u6267\u884C\u8FD9\u4E9B\u53D8\u5316\uFF0C\u4F46\u8981\u9632\u6B62\u6587\u4EF6\u7ED3\u6784\u88AB\u7834\u574F\uFF0CcreateDocumentFragment() \u65B9\u6CD5\u53EF\u4EE5\u66F4\u5B89\u5168\u6539\u53D8\u6587\u6863\u7684\u7ED3\u6784\u53CA\u8282\u70B9`,paraId:25,tocIndex:3},{value:`<body>
  <button id="expire1">\u8FC7\u671F\u8BBE\u7F6E\uFF08\u66B4\u529B\u6CD5\uFF09</button>
  <button id="expire2">\u8FC7\u671F\u8BBE\u7F6E\uFF08innerHtml)</button>
  <ul id="wrap"></ul>
  <script type="text/javascript">
    //\u751F\u6210\u5927\u91CFdom
    let start = new Date().getTime();
    let $ul = document.getElementById('wrap');
    let el = document.createDocumentFragment(); //\u5173\u952E\u662F\u8FD9\u4E00\u53E5

    let allKeys = [];
    for (let i = 0; i < 1000; i++) {
      let li = document.createElement('li');
      li.dataset.key = i;
      li.innerHTML = i;
      el.appendChild(li);
      allKeys.push(i);
    }
    // $ul.appendChild(el)

    //\u751F\u6210\u8FC7\u671F\u9879
    function getExpireKeys() {
      let keys = [];
      while (keys.length < 100) {
        let randomKey = Math.floor(Math.random() * 1000);
        if (keys.indexOf(randomKey) === -1) {
          keys.push(randomKey);
        } else {
          continue;
        }
      }
      return keys;
    }

    //\u66B4\u529B\u6CD5
    document.getElementById('expire1').onclick = function() {
      let expireKeys = getExpireKeys();
      let children = $ul.children;
      let start = Date.now();
      for (let i = 0; i < expireKeys.length; i++) {
        const element = document.querySelector(
          \`li[data-key="\${expireKeys[i]}"]\`,
        );
        element.innerHTML = element.innerHTML + '\u5DF2\u8FC7\u671F';
      }
    };
    //\u6A21\u677F\u5B57\u7B26\u4E32\uFF08\u6709\u95EE\u9898 \u663E\u793A\u4E0D\u51FA\u6765\uFF09
    document.getElementById('expire2').onclick = function() {
      let expireKeys = getExpireKeys();
      const item = [];
      for (let i = 0; i < allKeys.length; i++) {
        $ul.append(
          \`<li>\${allKeys[i]} \${
            expireKeys.indexOf(allKeys[i]) !== -1 ? '\u5DF2\u8FC7\u671F' : ''
          }</li>\`,
        );
        // item.push(\`<li>\${allKeys[i]} \${expireKeys.indexOf(allKeys[i])!==-1?'\u5DF2\u8FC7\u671F':''}</li>\`)
      }
      // $ul.append(item[0])
      console.log($ul);
    };

    //react\u7684\u65B9\u5F0F
    class APP1 extends Component {
      constructor(props) {
        super(props);
        this.state = {
          allKeys: [],
          expireKeys: [],
        };
      }
      componentDidMount() {
        let allKeys = [];
        for (let i = 0; i < 1000; i++) {
          allKeys.push(i);
        }
        this.setState({ allKeys, expireKeys: this.getExpireKeys() });
      }
      getExpireKeys() {
        let keys = [];
        while (keys.length < 100) {
          let randomKey = Math.floor(Math.random() * 1000);
          if (keys.indexOf(randomKey) === -1) {
            keys.push(randomKey);
          } else {
            continue;
          }
        }
        return keys;
      }
      render() {
        let { allKeys, expireKeys } = this.state;
        return (
          <div>
            <ul>
              {allKeys.map(item => {
                return (
                  <li key={item}>
                    {item}
                    {expireKeys.indexOf(item) === -1 ? '' : '\u5DF2\u8FC7\u671F'}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
  <\/script>
</body>
`,paraId:26,tocIndex:3},{value:"\u865A\u62DF DOM \u662F\u4EC0\u4E48\uFF1F",paraId:27,tocIndex:4},{value:"\u672C\u8D28\u4E0A\u6765\u8BF4\uFF1A\u865A\u62DF ",paraId:28,tocIndex:4},{value:"DOM",paraId:28,tocIndex:4},{value:" \u662F\u4E00\u4E2A ",paraId:28,tocIndex:4},{value:"javascript",paraId:28,tocIndex:4},{value:" \u5BF9\u8C61\uFF0C\u901A\u8FC7\u5BF9\u8C61\u7684\u65B9\u5F0F\u6765\u8868\u793A DOM \u7ED3\u6784\uFF0C\u5C06\u9875\u9762\u7684\u72B6\u6001\u62BD\u8C61\u4E3A js \u5BF9\u8C61\u7684\u5F62\u5F0F\uFF0C\u914D\u5408\u4E0D\u540C\u60F3\u6E32\u67D3\u5DE5\u5177\uFF0C\u662F\u8DE8\u5E73\u53F0\u6E32\u67D3\u6210\u4E3A\u53EF\u80FD\u3002\u901A\u8FC7\u4E8B\u52A1\u5904\u7406\u673A\u5236\uFF0C\u5C06\u591A\u6B21 DOM \u4FEE\u6539\u7684\u7ED3\u679C\u4E00\u6B21\u6027\u66F4\u65B0\u5230\u9875\u9762\u4E0A\uFF0C\u4ECE\u800C",paraId:28,tocIndex:4},{value:"\u6709\u6548\u7684\u51CF\u5C11\u9875\u9762\u6E32\u67D3\u7684\u6B21\u6570\uFF0C\u51CF\u5C11\u4FEE\u6539 DOM \u91CD\u7ED8\u548C\u91CD\u6392\u6B21\u6570\uFF0C\u63D0\u9AD8\u6E32\u67D3\u6027\u80FD",paraId:28,tocIndex:4},{value:"\u4E3A\u4EC0\u4E48\u8981\u7528\u865A\u62DF DOM\uFF1F",paraId:29,tocIndex:4},{value:"\u4FDD\u8BC1\u6027\u80FD\u4E0B\u9650\uFF0C\u5728\u4E0D\u8FDB\u884C\u624B\u52A8\u4F18\u5316\u7684\u60C5\u51B5\u4E0B\uFF0C\u63D0\u4F9B\u8FC7\u5F97\u53BB\u7684\u6027\u80FD",paraId:30,tocIndex:4},{value:"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u865A\u62DF DOM?\u662F\u56E0\u4E3A\u5FEB\u5417\uFF1F\uFF0C\u5B9E\u9645\u4E0A\u4E0D\u4E00\u5B9A\u662F\u5FEB\u3002\u9996\u6B21\u6E32\u67D3\u5927\u91CF DOM\uFF0C\u7531\u4E8E\u591A\u4E86\u4E00\u5C42\u865A\u62DF DOM \u7684\u8BA1\u7B97\uFF0C\u6BD4 innerHtml \u63D2\u5165\u7684\u6162\uFF0C\u4F46\u662F\u5728\u771F\u5B9E DOM \u64CD\u4F5C\u7684\u65F6\u5019\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u4F18\u5316\u65F6\uFF0C\u8FD8\u662F\u66F4\u5FEB\u7684",paraId:31,tocIndex:4},{value:"\u8DE8\u5E73\u53F0",paraId:32,tocIndex:4},{value:"\u5BF9\u4E8E\u8DE8\u5E73\u53F0\u6280\u672F\u6765\u8BF4\uFF0C\u91CD\u8981\u7684\u610F\u4E49\u5728\u4E8E\uFF1A",paraId:33,tocIndex:4},{value:"\u865A\u62DF DOM \u662F DOM \u5728\u5185\u5B58\u4E2D\u7684\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u8868\u8FBE\u65B9\u5F0F\uFF0C\u662F\u4E00\u79CD\u540C\u610F\u7EA6\u5B9A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u7684\u6E32\u67D3\u5F15\u64CE\u751F\u6210\u4E0D\u540C\u5E73\u53F0\u7684\u7684 UI",paraId:34,tocIndex:4},{value:"\u865A\u62DF DOM \u7684\u53EF\u79FB\u690D\u6027\u975E\u5E38\u597D\uFF0C\u8FD9\u610F\u5473\u7740\u53EF\u4EE5\u6E32\u67D3\u5230 DOM \u4EE5\u5916\u7684\u4EFB\u4F55\u7AEF\uFF0C\u53EF\u4EE5\u505A\u5F88\u591A\u4E8B\u60C5",paraId:35,tocIndex:4},{value:`\u6CE8\u610F
\u865A\u62DF DOM \u771F\u6B63\u7684\u4EF7\u503C\u4ECE\u6765\u90FD\u4E0D\u662F\u6027\u80FD\uFF0C\u800C\u662F\u4E0D\u7BA1\u6570\u636E\u600E\u4E48\u53D8\u5316\u90FD\u53EF\u4EE5\u7528\u6700\u5C0F\u7684\u4EE3\u4EF7\u6765\u66F4\u65B0 DOM\uFF0C\u800C\u4E14\u63A9\u76D6\u4E86\u5E95\u5C42\u7684 DOM \u64CD\u4F5C\uFF0C\u8BA9\u4F60\u7528\u58F0\u660E\u5F0F\u7684\u65B9\u5F0F\u6765\u63CF\u8FF0\u4F60\u7684\u76EE\u7684\uFF0C\u4ECE\u6765\u8BA9\u6765\u5F85\u66F4\u5BB9\u6613\u7EF4\u62A4`,paraId:36,tocIndex:4},{value:"setSate()",paraId:37,tocIndex:5},{value:`\u65B9\u6CD5\u7684\u8C03\u7528
\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0CsetState \u89E6\u53D1\u4F1A\u89E6\u53D1 render,\u4F46\u662F setState \u89E6\u53D1\u4E00\u5B9A\u4F1A\u91CD\u65B0\u6E32\u67D3\u5417\uFF1F\u7B54\u6848\u662F\u4E0D\u4E00\u5B9A\uFF0C\u5F53`,paraId:37,tocIndex:5},{value:"setState(null)",paraId:37,tocIndex:5},{value:"\u7684\u65F6\u5019\u4E0D\u4F1A\u89E6\u53D1 render \u91CD\u65B0\u6E32\u67D3",paraId:37,tocIndex:5},{value:"\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u4E86,\u5373\u4F7F\u5B50\u7EC4\u4EF6\u7684 props \u6CA1\u6709\u6539\u53D8\uFF0C\u5B50\u7EC4\u4EF6\u4E5F\u4F1A\u91CD\u65B0 render",paraId:38,tocIndex:5},{value:"\u91CD\u65B0\u6E32\u67D3\u505A\u4E86\u4EC0\u4E48",paraId:39,tocIndex:5},{value:"\u4F1A\u5BF9\u6BD4\u65B0\u65E7 ",paraId:40,tocIndex:5},{value:"Vnode",paraId:40,tocIndex:5},{value:" \u8FDB\u884C\u5BF9\u6BD4\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684 ",paraId:40,tocIndex:5},{value:"DOMdiff",paraId:40,tocIndex:5},{value:"\u5BF9\u65B0\u65E7\u4E24\u68F5\u6811\u8FDB\u884C\u4E00\u4E2A\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\uFF0C\u8FD9\u6837\u6BCF\u4E00\u4E2A\u8282\u70B9\u90FD\u4F1A\u6709\u4E00\u4E2A\u6807\u8BB0\uFF0C\u5728\u904D\u5386\u7684\u65F6\u5019\uFF0C\u6BCF\u904D\u5386\u4E00\u4E2A\u8282\u70B9\uFF0C\u5C31\u4F1A\u5BF9\u6BD4\u8FD9\u4E2A\u8282\u70B9\u6811\uFF0C\u5982\u679C\u6709\u5DEE\u5F02\u5C31\u653E\u5230\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762",paraId:40,tocIndex:5},{value:"\u904D\u5386\u5DEE\u5F02\u5BF9\u8C61\uFF0C\u6839\u636E\u5DEE\u5F02\u7684\u7C7B\u578B\uFF0C\u6839\u636E\u5BF9\u5E94\u89C4\u5219\u66F4\u65B0 VNode",paraId:40,tocIndex:5},{value:"react \u7684\u5904\u7406 render \u7684\u57FA\u672C\u601D\u60F3\u5C31\u662F\u6BCF\u4E00\u6B21\u6709\u53D8\u52A8\u5C31\u4F1A\u91CD\u65B0\u6E32\u67D3\u6574\u4E2A\u5E94\u7528\uFF0C\u5728 Virtual DOM \u6CA1\u6709\u51FA\u73B0\u4E4B\u524D\uFF0C\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u8C03\u7528 innerHtml \u76F4\u63A5\u66FF\u6362\u91CC\u9762\u7684\u5185\u5BB9\uFF0CVirtual DOM \u5389\u5BB3\u7684\u5730\u65B9\u5E76\u4E0D\u662F\u8BF4\u4ED6\u6BD4\u76F4\u63A5\u64CD\u4F5C DOM \u5FEB\uFF0C\u800C\u662F\u8BF4\u4E0D\u7BA1\u6570\u636E\u600E\u4E48\u53D8\uFF0C\u90FD\u4F1A\u5C3D\u91CF\u4EE5\u6700\u5C0F\u7684\u4EE3\u4EF7\u53BB\u66F4\u65B0 DOM\u3002react \u5C06 render \u51FD\u6570\u8FD4\u56DE\u7684\u865A\u62DF DOM \u6811\u4E0E\u8001\u7684\u6BD4\u8F83\u4ECE\u800C\u786E\u5B9A DOM \u8981\u4E0D\u8981\u66F4\u65B0\uFF0C\u5E94\u8BE5\u600E\u4E48\u66F4\u65B0\uFF0C\u5F53 DOM \u6811\u5F88\u5927\u7684\u65F6\u5019\uFF0C\u904D\u5386\u4E24\u9897\u6811\u8FDB\u884C\u5BF9\u6BD4\u5DEE\u5F02\u8FD8\u662F\u5F88\u8017\u6027\u80FD\u7684\uFF0C\u7279\u522B\u662F\u9876\u5C42\u7684 setState \u6709\u4E00\u4E2A\u5FAE\u5C0F\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u9ED8\u8BA4\u53BB\u904D\u5386\u6574\u68F5\u6811\uFF0C\u5C3D\u7BA1 react \u4F7F\u7528\u9AD8\u5EA6\u4F18\u5316\u7684 Diff \u7B97\u6CD5\uFF0C\u4F46\u5176\u5B9E\u8FD8\u662F\u5F88\u8017\u6027\u80FD\u7684",paraId:41,tocIndex:5},{value:"\u603B\u7ED3",paraId:42,tocIndex:5},{value:`\u867D\u7136 react \u57FA\u4E8E\u865A\u62DF Dom \u548C diff \u7B97\u6CD5\u5B9E\u73B0\u4E86\u5BF9 DOM \u6700\u5C0F\u7C92\u5EA6\u7684\u66F4\u65B0\uFF0C\u4F46\u662F\u9047\u5230\u590D\u6742\u7684\u573A\u666F\uFF0C\u6027\u80FD\u95EE\u9898\u8FD8\u662F\u4E00\u5927\u96BE\u9898\u3002
\u6240\u4EE5\u4E0B\u9762\u662F\u53EF\u4EE5\u4F18\u5316\u7684\u70B9\uFF1A`,paraId:43,tocIndex:5},{value:"shouldComponentUpdate",paraId:44,tocIndex:5},{value:"\u548C",paraId:44,tocIndex:5},{value:"PureComponent",paraId:44,tocIndex:5},{value:`
PureComponent \u901A\u8FC7\u51CF\u5C11\u7236\u7EC4\u4EF6\u7684\u66F4\u65B0\u6765\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u66F4\u65B0\uFF0C\u5229\u7528\u4E86\u6D45\u5BF9\u6BD4\u7684\u624B\u6CD5`,paraId:44,tocIndex:5},{value:"shouldComponentUpdate",paraId:45,tocIndex:5},{value:"\u662F\u51B3\u7EC4\u4EF6\u662F\u5426\u91CD\u65B0\u6E32\u67D3",paraId:45,tocIndex:5},{value:`\u5229\u7528\u9AD8\u9636\u7EC4\u4EF6
\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6CA1\u6709`,paraId:46,tocIndex:5},{value:"shouldComponentUpdate",paraId:46,tocIndex:5},{value:"\u751F\u547D\u5468\u671F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6\u6765\u8FBE\u5230\u8FD9\u4E2A\u6548\u679C",paraId:46,tocIndex:5},{value:"React.useMemo",paraId:47,tocIndex:5},{value:`
\u7528\u6765\u7F13\u5B58\u7EC4\u4EF6\u7684\u6E32\u67D3\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u66F4\u65B0\uFF0C\u5176\u5B9E\u4E5F\u5C31\u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u4E0E `,paraId:47,tocIndex:5},{value:"PureComponent",paraId:47,tocIndex:5},{value:" \u7C7B\u4F3C\uFF0C\u4F46\u662F ",paraId:47,tocIndex:5},{value:"React.useMemo",paraId:47,tocIndex:5},{value:" \u53EA\u7528\u4E8E\u51FD\u6570\u7EC4\u4EF6",paraId:47,tocIndex:5},{value:`\u5408\u7406\u62C6\u5206\u7EC4\u4EF6
\u4EE5\u66F4\u8F7B\uFF0C\u66F4\u5C0F\u7684\u7C92\u5EA6\u6765\u7EB5\u5411\u62C6\u5206\u7EC4\u4EF6`,paraId:48,tocIndex:5},{value:"setState",paraId:49,tocIndex:6},{value:" \u9ED8\u8BA4\u662F\u5F02\u6B65\u7684\uFF0C\u56E0\u4E3A\u5F02\u6B65\u5C31\u53EF\u4EE5\u628A\u4E00\u4E2A\u540C\u6B65\u4EE3\u7801\u4E2D\u7684\u591A\u4E2A setState \u5408\u5E76\u6210\u4E00\u4E2A\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u800C\u4E0D\u662F setState \u6267\u884C\u4E00\u6B21\u5C31\u66F4\u65B0\u4E00\u6B21\uFF0C\u4F18\u5316\u4E86\u6027\u80FD",paraId:49,tocIndex:6},{value:"setState",paraId:50,tocIndex:6},{value:" \u5728 setTimeout\u3001\u539F\u751F\u4E8B\u4EF6\u91CC\u9762\u662F\u540C\u6B65\u7684",paraId:50,tocIndex:6},{value:"\u4F18\u70B9",paraId:51,tocIndex:7},{value:"react \u901F\u5EA6\u5FEB",paraId:52,tocIndex:7},{value:"\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9",paraId:53,tocIndex:7},{value:"\u6A21\u5757\u5316",paraId:54,tocIndex:7},{value:"\u5355\u5411\u6570\u636E\u6D41",paraId:55,tocIndex:7},{value:`\u540C\u6784\u7684 javascript
\u5355\u9875\u9762\u5E94\u7528\u6700\u5927\u7684\u7F3A\u9677\u5C31\u662F\u5BF9 SEO \u4E0D\u53CB\u597D\uFF0C\u6240\u4EE5 react \u6709\u4E86\u89E3\u51B3\u65B9\u6848\uFF0Creact \u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u9884\u6E32\u67D3\u518D\u53D1\u9001\u5230\u5BA2\u6237\u7AEF\uFF0C\u53EF\u4EE5\u4ECE\u9884\u6E32\u67D3\u7684\u9759\u6001\u5185\u5BB9\u4E2D\u6062\u590D\u4E00\u6837\u7684\u8BB0\u5F55\u5230\u52A8\u6001\u5E94\u7528\u4E2D\uFF0C`,paraId:56,tocIndex:7},{value:"\u641C\u7D22\u5F15\u64CE\u722C\u866B\u7A0B\u5E8F\u4F9D\u8D56\u7684\u662F\u670D\u52A1\u7AEF\u54CD\u5E94\u800C\u4E0D\u662F javascript \u7684\u6267\u884C\uFF0C\u9884\u6E32\u67D3\u6709\u52A9\u4E8E\u641C\u7D22\u5F15\u64CE\u7684\u4F18\u5316",paraId:57,tocIndex:7},{value:"\u7F3A\u70B9",paraId:58,tocIndex:7},{value:`\u53EA\u662F view \u5C42
react \u672C\u8EAB\u53EA\u662F\u4E00\u4E2A view \u5C42\uFF0C\u4E0D\u662F\u5B8C\u6574\u7684 mvc \u6846\u67B6\uFF0C\u5927\u578B\u9879\u76EE\u9700\u8981\u52A0\u4E0A reactRouter\u3001redux \u624D\u884C`,paraId:59,tocIndex:7},{value:`\u72B6\u6001\u4E0D\u540C\u6B65
\u51FD\u6570\u7684\u8FD0\u884C\u65F6\u72EC\u7ACB\u7684\uFF0C\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4EFD\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\uFF0C`,paraId:60,tocIndex:7},{value:"\u51FD\u6570\u7684\u53D8\u91CF\u662F\u4FDD\u5B58\u5728\u8FD0\u884C\u65F6\u7684\u4F5C\u7528\u57DF\u91CC\u9762",paraId:60,tocIndex:7},{value:"\uFF0C\u5F53\u6211\u4EEC\u6709\u5F02\u6B65\u64CD\u4F5C\u7684\u65F6\u5019\u4EAC\u5439\u9047\u5230\u5F02\u6B65\u56DE\u8C03\u7684\u53D8\u91CF\u5F15\u7528\u662F\u4E4B\u524D\u7684\uFF0C\u4E5F\u5C31\u662F\u65E7\u7684\u6CA1\u6709\u66F4\u65B0\u8FC7\u7684(\u53EF\u4EE5\u7406\u89E3\u4E3A\u95ED\u5305)",paraId:60,tocIndex:7},{value:`import React, { useState } from 'react';

const App1 = () => {
  const [counter, setCounter] = useState(0);
  const add1 = () => {
    setTimeout(() => {
      console.log(counter);
    }, 3000);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>\u70B9\u51FB\u52A01</button>
      <button onClick={add1}>\u70B9\u51FB</button>
    </div>
  );
};

export default App1;
`,paraId:61,tocIndex:7},{value:"\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u5F53\u70B9\u51FB\u7B2C\u4E8C\u4E2A\u6309\u94AE\u4E4B\u540E\u7ACB\u9A6C\u70B9\u51FB\u7B2C\u4E00\u4E2A\u6309\u94AE\uFF0C\u867D\u7136\u6267\u884C\u52A0\u4E00\u7684\u64CD\u4F5C\uFF0C\u4F46\u662F 3 \u79D2\u540E\u6253\u5370\u7684\u8FD8\u662F 0\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F\u4E3A\u4EC0\u4E48\u4E0D\u662F 1 \u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u7B2C\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u7684\u662F counter \u662F 0\uFF0C",paraId:62,tocIndex:7},{value:"add1",paraId:62,tocIndex:7},{value:"\u6267\u884C\u7684\u65F6\u5019 counter \u662F 0\uFF0C\u867D\u7136\u662F 3 \u79D2\u540E\u6267\u884C\u7684\uFF0C\u4F46\u662F\u521D\u59CB\u7684\u503C\u5DF2\u7ECF\u4FDD\u5B58\u5728\u8FD9\u4E2A\u95ED\u5305\u91CC\u9762\u4E86\uFF0C",paraId:62,tocIndex:7},{value:"\u8FD9\u4E2A\u95EE\u9898 class component \u4E0D\u4F1A\u6709\uFF0C\u56E0\u4E3A class component \u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u5B58\u5728\u4E0D\u53D8\u7684",paraId:63,tocIndex:7},{value:"instance",paraId:63,tocIndex:7},{value:"\u4E0A\u53D6\u503C\uFF0C\u6240\u4EE5\u4E0D\u5B58\u5728\u5F15\u7528\u662F\u65E7\u7684\u95EE\u9898",paraId:63,tocIndex:7},{value:"\u89E3\u51B3\u65B9\u6CD5",paraId:64,tocIndex:7},{value:"\u89E3\u51B3\u8FD9\u4E2A hooks \u7684\u95EE\u9898\u5C31\u662F\u53C2\u7167\u7C7B\u7684 instance,\u7528 ",paraId:65,tocIndex:7},{value:"useRef",paraId:65,tocIndex:7},{value:" \u8FD4\u56DE\u7684 immutable RefObject(",paraId:65,tocIndex:7},{value:"current",paraId:65,tocIndex:7},{value:" \u5C5E\u6027\u662F\u53EF\u53D8\u7684)\u6765\u4FDD\u5B58 state",paraId:65,tocIndex:7},{value:`import React, { useState, useRef, useEffect } from 'react';

const App1 = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);
  const add1 = () => {
    setTimeout(() => {
      console.log(counterRef.current);
    }, 3000);
  };
  useEffect(() => {
    counterRef.current = counter;
  });
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>\u70B9\u51FB\u52A01</button>
      <button onClick={add1}>\u70B9\u51FB</button>
    </div>
  );
};

export default App1;
`,paraId:66,tocIndex:7},{value:"hooks \u5E38\u89C1\u95EE\u9898",paraId:67,tocIndex:7},{value:"\u4E0D\u8981\u5728",paraId:68,tocIndex:7},{value:"useEffect",paraId:68,tocIndex:7},{value:"\u91CC\u9762\u5199\u592A\u591A\u7684\u4F9D\u8D56\uFF0C\u53EF\u4EE5\u5212\u5206\u6210\u591A\u4E2A\u5355\u4E00\u7684",paraId:68,tocIndex:7},{value:"useEffect",paraId:68,tocIndex:7},{value:"\u91CD\u89C6",paraId:68,tocIndex:7},{value:"eslint-plugin-react-hooks",paraId:68,tocIndex:7},{value:"\u7684\u8B66\u544A",paraId:68,tocIndex:7},{value:"\u590D\u6742\u4E1A\u52A1\u4F7F\u7528",paraId:68,tocIndex:7},{value:"Component",paraId:68,tocIndex:7},{value:"\u4EE3\u66FF",paraId:68,tocIndex:7},{value:"hooks",paraId:68,tocIndex:7},{value:"\u9AD8\u9636\u7EC4\u4EF6(HOC)",paraId:69,tocIndex:8},{value:"\u662F React \u4E2D\u590D\u7528\u7EC4\u4EF6\u903B\u8F91\u7684\u4E00\u79CD\u9AD8\u7EA7\u6280\u5DE7\uFF0CHOC \u81EA\u8EAB\u4E0D\u662F React API \u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u662F\u4E00\u79CD\u57FA\u4E8E React \u7684\u7EC4\u5408\u7279\u6027\u800C\u5F62\u6210\u7684\u8BBE\u8BA1\u6A21\u5F0F",paraId:69,tocIndex:8},{value:"\u9AD8\u9636\u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4ED6\u662F\u63A5\u53D7\u4E00\u4E2A\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\uFF0C\u4ED6\u53EA\u662F\u4E00\u79CD\u7EC4\u4EF6\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u8FD9\u79CD\u8BBE\u8BA1\u6A21\u5F0F\u662F\u7531 react \u81EA\u8EAB\u7684\u7EC4\u5408\u6027\u8D28\u5FC5\u7136\u4EA7\u751F\u7684\uFF0C\u6211\u4EEC\u5C06\u4ED6\u4EEC\u79F0\u4E3A\u7EAF\u7EC4\u4EF6\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u63A5\u53D7\u4EFB\u4F55\u52A8\u6001\u63D0\u4F9B\u7684\u5B50\u7EC4\u4EF6\uFF0C\u4F46\u662F\u4ED6\u4EEC\u4E0D\u4F1A\u4FEE\u6539\u548C\u590D\u5236\u5176\u8F93\u5165\u7EC4\u4EF6\u7684\u4EFB\u4F55\u884C\u4E3A",paraId:70,tocIndex:8},{value:`//HOC
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData,
      };
    }
    //\u4E00\u4E9B\u903B\u8F91\u5904\u7406
    render() {
      //\u4F7F\u7528\u65B0\u6570\u636E\u6E32\u67D3\u5305\u88C5\u7684\u7EC4\u4EF6
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

//\u4F7F\u7528
const BlogSubscription = withSubscription(BlogPost, (DataSource, props) =>
  DataSource.getBlogPost(props.id),
);
`,paraId:71,tocIndex:8},{value:"HOC \u4F18\u7F3A\u70B9\uFF1A",paraId:72,tocIndex:8},{value:"\u4F18\u70B9\uFF1A\u903B\u8F91\u590D\u7528\uFF0C\u4E0D\u5F71\u54CD\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684\u5185\u90E8\u903B\u8F91",paraId:73,tocIndex:8},{value:"\u7F3A\u70B9\uFF1Ahoc \u4F20\u9012\u7ED9\u88AB\u5305\u88F9\u7EC4\u4EF6\u7684 props \u5BB9\u6613\u548C\u88AB\u5305\u88F9\u540E\u7684\u7EC4\u4EF6\u91CD\u540D\uFF0C\u8FDB\u800C\u88AB\u8986\u76D6",paraId:73,tocIndex:8},{value:"\u5177\u4F53\u5C0F\u4F8B\u5B50",paraId:74,tocIndex:8},{value:`\u6743\u9650\u63A7\u5236
\u5229\u7528\u9AD8\u9636\u7EC4\u4EF6\u7684\u6761\u4EF6\u6E32\u67D3\u7279\u6027\u53EF\u4EE5\u591A\u9875\u9762\u8FDB\u884C\u6743\u9650\u63A7\u5236\uFF0C\u6743\u9650\u63A7\u5236\u4E00\u822C\u5206\u4E3A\u4E24\u4E2A\u7EF4\u5EA6\uFF1A\u9875\u9762\u7EA7\u522B\u548C\u9875\u9762\u5143\u7D20\u7EA7\u522B`,paraId:75,tocIndex:8},{value:`function withAdminAuth(WrappedComponent) {
  return class extends React.Component {
    stat = {
      isAdmin: false,
    };
    async UNSAFE_componentWillMount() {
      const currentRole = await getCurrentUserRole();
      this.setState({
        isAdmin: currentRole === 'Admin',
      });
    }
    render() {
      if (this.state.isAdmin) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <div>\u4F60\u6CA1\u6709\u6743\u9650\u67E5\u770B\u8BE5\u9875\u9762</div>;
      }
    }
  };
}

//\u4F7F\u7528
class PageA extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {}
  render() {}
}
export default withAdminAuth(PageA);
`,paraId:76,tocIndex:8},{value:"\u7EC4\u4EF6\u6E32\u67D3\u6027\u80FD\u8FFD\u8E2A",paraId:77,tocIndex:8},{value:"\u9875\u9762\u590D\u7528",paraId:77,tocIndex:8},{value:`\u5E03\u5C40
RN \u91CC\u9762\u662F\u4E0D\u9700\u8981\u5199\u5355\u4F4D\u7684\uFF0C\u9ED8\u8BA4\u662F\u50CF\u7D20\u70B9 dp,\u4F46\u662F\u8BBE\u8BA1\u5E08\u4E00\u822C\u7528 px,\u6240\u4EE5\u9700\u8981\u6362\u7B97\uFF0C`,paraId:78,tocIndex:9},{value:"\u6362\u7B97\u516C\u5F0F\u4E3A\uFF1Apx*screenWidth/uiwidth",paraId:78,tocIndex:9},{value:",uiwidth \u4E3A\u8BBE\u8BA1\u5E08\u7684 ui \u8BBE\u8BA1\u57FA\u51C6\u5BBD\u5EA6\uFF0C\u6BD4\u5982 640\uFF0C750\uFF0C1024\uFF0CscreenWidth \u4E3A\u8BBE\u5907\u903B\u8F91\u5206\u8FA8\u7387\uFF0C\u6BD4\u5982 iphone6 \u5C31\u662F 375",paraId:78,tocIndex:9},{value:`\u56FE\u7247
\u4E3A\u4E86\u9002\u914D\u4E0D\u540C\u5206\u8FA8\u7387\u7684\u5C4F\u5E55\uFF0C\u9700\u8981\u51C6\u5907 1x\u30012x\u30013x \u4E09\u79CD\u5927\u5C0F\u7684\u5C3A\u5BF8\uFF0C\u5047\u5982\u6709\u4E00\u4E2A btn.png\u3001`,paraId:78,tocIndex:9},{value:"btn@2x.png",paraId:78,tocIndex:9},{value:"\u3001",paraId:78,tocIndex:9},{value:"btn@3x.png",paraId:78,tocIndex:9},{value:" \u5728\u4EE3\u7801\u79CD\u4E0D\u8981\u6307\u5B9A\u500D\u56FE\uFF0C\u9700\u8981\u4F7F\u7528",paraId:78,tocIndex:9},{value:"<Image src={require('btn.png')}/>",paraId:78,tocIndex:9},{value:"\u7EC4\u4EF6\u5206\u4E3A ios\u3001android\u3001\u548C\u4E24\u7AEF\u90FD\u9002\u7528\u7684\uFF0C\u4E0D\u540C\u7684\u5E73\u53F0\u4F7F\u7528\u4E0D\u540C\u7684\u7EC4\u4EF6",paraId:78,tocIndex:9},{value:"\u5355\u5411\u6570\u636E\u6D41\u4F7F\u5F97\u6570\u636E\u6D41\u52A8\u65B9\u5411\u53EF\u4EE5\u8FFD\u8E2A\uFF0C\u6D41\u52A8\u5355\u4E00\uFF0C\u8FFD\u67E5\u95EE\u9898\u7684\u65F6\u5019\u66F4\u5FEB\u6377",paraId:79,tocIndex:10},{value:"view \u53D1\u51FA action \u4E4B\u540E\u4E0D\u662F\u4FEE\u6539\u539F\u6765\u7684 state,\u800C\u662F\u8FD4\u56DE\u4E86\u4E00\u4E2A\u65B0\u7684\uFF0C\u53EF\u4EE5\u4FDD\u5B58 state \u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u53EF\u4EE5\u590D\u73B0\u573A\u666F\uFF0C\u6613\u6D4B\u8BD5",paraId:80,tocIndex:10},{value:"\u5BF9\u4E8E\u57FA\u672C\u7C7B\u578B\uFF0C\u6D45\u62F7\u8D1D\u53EA\u662F\u68C0\u67E5\u503C\u662F\u5426\u76F8\u540C",paraId:81,tocIndex:11},{value:"\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\uFF0C\u6D45\u62F7\u8D1D\u53EA\u662F\u68C0\u67E5\u5F15\u7528\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u8FD9\u610F\u5473\u7740\u4FEE\u6539\u4E86\u4E00\u4E2A\u5BF9\u8C61\u91CC\u9762\u7684\u67D0\u4E00\u4E2A\u4F4D\u7F6E\u7684\u503C\uFF0C\u90A3\u4E48\u66F4\u65B0\u524D\u540E\u7684\u5BF9\u8C61\u4ECD\u7136\u76F8\u7B49",paraId:82,tocIndex:11},{value:"\u603B\u7ED3",paraId:83,tocIndex:11},{value:"React.Component",paraId:84,tocIndex:11},{value:"\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0",paraId:84,tocIndex:11},{value:"shouldComponentUpdate()",paraId:84,tocIndex:11},{value:"React.PureComponent",paraId:84,tocIndex:11},{value:"\u901A\u8FC7 props \u548C state \u7684\u6D45\u5BF9\u6BD4\u6765\u5B9E\u73B0",paraId:84,tocIndex:11},{value:"shouldComponentUpdate()",paraId:84,tocIndex:11},{value:"\u5982\u679C\u7EC4\u4EF6\u5B9A\u4E49\u4E86",paraId:84,tocIndex:11},{value:"shouldComponentUpdate",paraId:84,tocIndex:11},{value:"\uFF0C\u65E0\u8BBA\u7EC4\u4EF6\u662F\u5426\u662F",paraId:84,tocIndex:11},{value:"PureComponent",paraId:84,tocIndex:11},{value:"\u90FD\u4F1A\u6267\u884C",paraId:84,tocIndex:11},{value:"shouldComponentUpdate",paraId:84,tocIndex:11},{value:"\u7ED3\u679C\u6765\u5224\u65AD\u662F\u5426\u6267\u884C",paraId:84,tocIndex:11},{value:"update",paraId:84,tocIndex:11},{value:",\u5982\u679C\u7EC4\u4EF6\u6CA1\u6709\u5B9E\u73B0",paraId:84,tocIndex:11},{value:"shouldComponentUpdate",paraId:84,tocIndex:11},{value:"\uFF0C\u5219\u4F1A\u5224\u65AD\u7EC4\u4EF6\u662F\u5426\u662F",paraId:84,tocIndex:11},{value:"PureComponent",paraId:84,tocIndex:11},{value:"\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u5219\u4F1A\u65B0\u65E7 props\u3001state \u8FDB\u884C\u6BD4\u8F83\uFF0C\u4E00\u65E6\u5FC3\u5C31\u4E0D\u4E00\u81F4\u5C31\u4F1A\u89E6\u53D1\u66F4\u65B0",paraId:84,tocIndex:11},{value:"React.PureComponent",paraId:84,tocIndex:11},{value:`\u4F18\u7F3A\u70B9\uFF1A
`,paraId:84,tocIndex:11},{value:"\u4F18\u70B9\uFF1A\u4E0D\u9700\u8981\u5F00\u53D1\u8005\u81EA\u5DF1\u5B9E\u73B0",paraId:85,tocIndex:11},{value:"shouldComponentUpdate",paraId:85,tocIndex:11},{value:"\u7F3A\u70B9\uFF1A\u53EF\u80FD\u4F1A\u56E0\u4E3A\u6DF1\u5C42\u7684\u6570\u636E\u4E0D\u4E00\u81F4\u800C\u4EA7\u751F\u9519\u8BEF\u7684\u5426\u5B9A\u5224\u65AD\uFF0C\u4ECE\u800C\u4E0D\u66F4\u65B0",paraId:85,tocIndex:11},{value:"\u76F8\u4F3C\u4E4B\u5904",paraId:86,tocIndex:12},{value:"\u90FD\u5C06\u6CE8\u610F\u529B\u96C6\u4E2D\u4FDD\u6301\u5728\u6838\u5FC3\u5E93\uFF0C\u5176\u4ED6\u529F\u80FD\u5982\u8DEF\u7531\uFF0C\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u5219\u4EA4\u7ED9\u76F8\u5173\u7684\u5E93",paraId:87,tocIndex:12},{value:"\u90FD\u6709\u81EA\u5DF1\u7684\u6784\u5EFA\u5DE5\u5177\uFF0C\u80FD\u5F97\u5230\u4E00\u4E2A\u6700\u4F73\u7684\u9879\u76EE\u6A21\u677F",paraId:87,tocIndex:12},{value:"\u90FD\u662F\u7528\u4E86\u865A\u62DF DOM \u63D0\u9AD8\u91CD\u7ED8\u6027\u80FD",paraId:87,tocIndex:12},{value:"\u90FD\u6709 props \u5141\u8BB8\u7EC4\u4EF6\u6570\u636E\u4F20\u9012",paraId:87,tocIndex:12},{value:"\u90FD\u9F13\u52B1\u62C6\u5206\u7EC4\u4EF6\u6210\u4E00\u4E2A\u4E2A\u529F\u80FD\u660E\u786E\u7684\u5C0F\u7EC4\u4EF6",paraId:87,tocIndex:12},{value:"\u4E0D\u540C\u4E4B\u5904",paraId:88,tocIndex:12},{value:"\u6570\u636E\u6D41",paraId:89,tocIndex:12},{value:" vue \u9ED8\u8BA4\u662F\u53CC\u5411\u7ED1\u5B9A\uFF0Creact \u662F\u5355\u5411\u6570\u636E\u6D41",paraId:89,tocIndex:12},{value:"\u865A\u62DF DOM",paraId:90,tocIndex:12},{value:`
vue \u5BA3\u79F0\u53EF\u4EE5\u66F4\u5FEB\u7684\u8BA1\u7B97\u51FA\u865A\u62DF DOM \u7684\u5DEE\u5F02\uFF0C\u8FD9\u662F\u7531\u4E8E\u4ED6\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u8DDF\u8E2A\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u6574\u4E2A DOM \u6811`,paraId:90,tocIndex:12},{value:"react \u5219\u4E0D\u662F\uFF0C\u53EA\u8981\u6709\u72B6\u6001\u6539\u53D8\uFF0C\u5168\u90E8\u7684\u5B50\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u5F53\u7136\u8FD9\u662F\u53EF\u4EE5\u901A\u8FC7",paraId:91,tocIndex:12},{value:"shouldComponentUpdate",paraId:91,tocIndex:12},{value:"\u548C",paraId:91,tocIndex:12},{value:"PureComponent",paraId:91,tocIndex:12},{value:"\u6765\u63A7\u5236",paraId:91,tocIndex:12},{value:"\u7EC4\u4EF6\u5316",paraId:92,tocIndex:12},{value:`
vue \u662F\u7C7B\u4F3C html \u7684\u6A21\u677F\uFF0C\u5199\u8D77\u6765\u548C H5 \u5DEE\u4E0D\u591A\uFF0C`,paraId:92,tocIndex:12},{value:"react \u662F jsx \u7684\u5199\u6CD5",paraId:93,tocIndex:12},{value:"\u5177\u4F53\u6765\u8BF4\uFF0Cvue \u5F15\u7528\u7EC4\u4EF6",paraId:94,tocIndex:12},{value:"import",paraId:94,tocIndex:12},{value:"\u4E4B\u540E\u8FD8\u9700\u8981\u5728",paraId:94,tocIndex:12},{value:"componets",paraId:94,tocIndex:12},{value:"\u6CE8\u518C,\u4F46\u662F react \u662F\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\u7684",paraId:94,tocIndex:12},{value:"\u76D1\u542C\u539F\u7406\u4E0D\u540C",paraId:95,tocIndex:12},{value:`
vue2 \u901A\u8FC7`,paraId:95,tocIndex:12},{value:"getter/setter",paraId:95,tocIndex:12},{value:"\u4EE5\u53CA\u4E00\u4E9B\u51FD\u6570\u7684\u52AB\u6301\uFF0C\u80FD\u7CBE\u786E\u77E5\u9053\u6570\u636E\u53D8\u5316\uFF0C\u4E0D\u9700\u8981\u7279\u522B\u7684\u4F18\u5316\u5C31\u80FD\u8FBE\u5230\u5F88\u597D\u7684\u6027\u80FD,vue3 \u662F\u901A\u8FC7",paraId:95,tocIndex:12},{value:"proxy",paraId:95,tocIndex:12},{value:"\u6765\u76D1\u542C\u7684",paraId:95,tocIndex:12},{value:"react \u9ED8\u8BA4\u662F\u901A\u8FC7\u6BD4\u8F83\u5F15\u7528\u7684\u65B9\u5F0F\u8FDB\u884C\u7684\uFF0C\u5982\u679C\u4E0D\u4F18\u5316\u5C31\u4F1A\u5BFC\u81F4\u5927\u91CF\u7684\u4E0D\u5FC5\u8981\u7684 VDOM \u6E32\u67D3\uFF0C\u9020\u6210\u6027\u80FD\u4E0D\u597D",paraId:96,tocIndex:12},{value:"\u9AD8\u9636\u7EC4\u4EF6",paraId:97,tocIndex:12},{value:"react",paraId:97,tocIndex:12},{value:" \u53EF\u4EE5\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6\u6765\u6269\u5C55\uFF0C",paraId:97,tocIndex:12},{value:"vue",paraId:97,tocIndex:12},{value:" \u5219\u662F\u901A\u8FC7 ",paraId:97,tocIndex:12},{value:"mixins",paraId:97,tocIndex:12},{value:" \u6765\u6269\u5C55",paraId:97,tocIndex:12},{value:"\u6784\u5EFA\u5DE5\u5177",paraId:98,tocIndex:12},{value:"react => create-react-app",paraId:99,tocIndex:12},{value:"vue => vue-cli",paraId:100,tocIndex:12},{value:"\u8DE8\u5E73\u53F0",paraId:101,tocIndex:12},{value:"React => React Native",paraId:102,tocIndex:12},{value:"Vue => weex",paraId:103,tocIndex:12},{value:"key",paraId:104,tocIndex:13},{value:"\u4E3B\u8981\u662F",paraId:104,tocIndex:13},{value:"react",paraId:104,tocIndex:13},{value:"\u8FFD\u8E2A\u54EA\u4E9B\u5217\u8868\u4E2D\u5143\u7D20\u88AB\u4FEE\u6539\u3001\u88AB\u6DFB\u52A0\u6216\u8005\u88AB\u79FB\u9664\u7684\u8F85\u52A9\u6807\u5FD7",paraId:104,tocIndex:13},{value:"\u5728",paraId:105,tocIndex:13},{value:"react diff",paraId:105,tocIndex:13},{value:"\u7B97\u6CD5\u4E2D\uFF0Creact \u4F1A\u501F\u52A9\u5143\u7D20\u7684 key \u503C\u6765\u5224\u65AD\u5143\u7D20\u662F\u65B0\u5EFA\u521B\u5EFA\u8FD8\u662F\u88AB\u79FB\u52A8\u800C\u6765\u7684\u5143\u7D20\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3",paraId:105,tocIndex:13},{value:"key \u503C\u4E00\u5B9A\u8981\u548C\u5177\u4F53\u7684\u5143\u7D20\u4E00\u4E00\u5BF9\u5E94",paraId:106,tocIndex:13},{value:"\u5C3D\u91CF\u4E0D\u8981\u7528\u6570\u7EC4\u7684 index \u6765\u4F5C\u4E3A\u552F\u4E00\u7684 key \u503C",paraId:106,tocIndex:13},{value:"\u6C38\u8FDC\u4E0D\u8981\u5728 render \u7684\u65F6\u5019\u7528\u968F\u673A\u6570\u6216\u8005\u5176\u4ED6\u64CD\u4F5C\u7ED9\u5143\u7D20\u52A0\u4E0A\u4E0D\u7A33\u5B9A\u7684 key,\u8FD9\u6837\u4F1A\u9020\u6210\u6027\u80FD\u5F00\u9500\u6BD4\u4E0D\u52A0 key \u7684\u60C5\u51B5\u4E0B\u66F4\u7CDF\u7CD5",paraId:106,tocIndex:13},{value:"\u4F5C\u4E3A\u7EC4\u4EF6\u800C\u8A00\uFF0C\u7C7B\u7EC4\u4EF6\u4E0E\u51FD\u6570\u7EC4\u4EF6\u5728\u4F7F\u7528\u4E0E\u5448\u73B0\u4E0A\u6CA1\u6709\u4EFB\u4F55\u4E0D\u540C\uFF0C\u6027\u80FD\u4E0A\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u4E5F\u4E0D\u4F1A\u6709\u660E\u663E\u5DEE\u5F02",paraId:107,tocIndex:14},{value:"\u51FD\u6570\u7EC4\u4EF6\u662F\u65E0\u72B6\u6001\u7EC4\u4EF6\uFF0C\u76F8\u6BD4\u7C7B\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528\u8BB8\u591A\u7279\u6027\uFF0C\u4F8B\u5982\u751F\u547D\u5468\u671F\u94A9\u5B50\u3001\u72B6\u6001 state \u7B49\uFF0C\u968F\u7740 hooks \u51FA\u73B0\uFF0C\u7C7B\u7EC4\u4EF6\u4E5F\u540C\u6837\u53EF\u4EE5\u5B9E\u73B0\u76F8\u5E94\u7684\u529F\u80FD",paraId:108,tocIndex:14},{value:"\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6CA1\u6709 this\u3002\u6240\u4EE5\u4F60\u518D\u4E5F\u4E0D\u9700\u8981\u8003\u8651 this\u3002",paraId:109,tocIndex:14},{value:"\u51FD\u6570\u7EC4\u4EF6\u7684\u6027\u80FD\u6BD4\u7C7B\u7EC4\u4EF6\u7684\u6027\u80FD\u8981\u9AD8\uFF0C\u56E0\u4E3A\u7C7B\u7EC4\u4EF6\u4F7F\u7528\u7684\u65F6\u5019\u8981\u5B9E\u4F8B\u5316\uFF0C\u800C\u51FD\u6570\u7EC4\u4EF6\u76F4\u63A5\u6267\u884C\u51FD\u6570\u53D6\u8FD4\u56DE\u7ED3\u679C\u5373\u53EF",paraId:110,tocIndex:14},{value:`\u5C55\u793A\u7EC4\u4EF6
`,paraId:111,tocIndex:15},{value:"\u5173\u6CE8\u9875\u9762\u7684\u5C55\u793A\u6548\u679C\uFF08\u5916\u89C2\uFF09",paraId:112,tocIndex:15},{value:"\u5185\u90E8\u53EF\u4EE5\u5305\u542B\u5C55\u793A\u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u901A\u5E38\u4F1A\u5305\u542B\u4E00\u4E9B\u81EA\u5DF1\u7684 DOM \u6807\u8BB0\u548C\u6837\u5F0F(style)",paraId:112,tocIndex:15},{value:"\u901A\u5E38\u5141\u8BB8\u901A\u8FC7",paraId:112,tocIndex:15},{value:"this.props.children",paraId:112,tocIndex:15},{value:"\u65B9\u5F0F\u6765\u5305\u542B\u5176\u4ED6\u7EC4\u4EF6\u3002",paraId:112,tocIndex:15},{value:"\u5BF9\u5E94\u7528\u7A0B\u5E8F\u7684\u5176\u4ED6\u90E8\u5206\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4F8B\u5982 Flux \u64CD\u4F5C\u6216 store\u3002",paraId:112,tocIndex:15},{value:"\u4E0D\u7528\u5173\u5FC3\u6570\u636E\u662F\u600E\u4E48\u52A0\u8F7D\u548C\u53D8\u52A8\u7684\u3002",paraId:112,tocIndex:15},{value:"\u53EA\u80FD\u901A\u8FC7",paraId:112,tocIndex:15},{value:"props",paraId:112,tocIndex:15},{value:"\u7684\u65B9\u5F0F\u63A5\u6536\u6570\u636E\u548C\u8FDB\u884C\u56DE\u8C03",paraId:112,tocIndex:15},{value:"(callback)",paraId:112,tocIndex:15},{value:"\u64CD\u4F5C\u3002",paraId:112,tocIndex:15},{value:"\u5F88\u5C11\u62E5\u6709\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u5373\u4F7F\u6709\u4E5F\u662F\u7528\u4E8E\u5C55\u793A",paraId:112,tocIndex:15},{value:"UI",paraId:112,tocIndex:15},{value:"\u72B6\u6001\u7684\u3002",paraId:112,tocIndex:15},{value:"\u4F1A\u88AB\u5199\u6210\u51FD\u6570\u5F0F\u7EC4\u4EF6\u9664\u975E\u8BE5\u7EC4\u4EF6\u9700\u8981\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u751F\u547D\u5468\u671F\u6216\u8005\u505A\u4E00\u4E9B\u6027\u80FD\u4F18\u5316",paraId:112,tocIndex:15},{value:`\u5BB9\u5668\u7EC4\u4EF6
`,paraId:111,tocIndex:15},{value:"\u5173\u6CE8\u5E94\u7528\u7684\u662F\u5982\u4F55\u5DE5\u4F5C\u7684",paraId:113,tocIndex:15},{value:"\u5185\u90E8\u53EF\u4EE5\u5305\u542B\u5BB9\u5668\u7EC4\u4EF6\u548C\u5C55\u793A\u7EC4\u4EF6\uFF0C\u4F46\u901A\u5E38\u6CA1\u6709\u4EFB\u4F55\u81EA\u5DF1\u7684 DOM \u6807\u8BB0\uFF0C\u9664\u4E86\u4E00\u4E9B\u5305\u88C5 divs\uFF0C\u5E76\u4E14\u4ECE\u4E0D\u5177\u6709\u4EFB\u4F55\u6837\u5F0F\u3002",paraId:113,tocIndex:15},{value:"\u63D0\u4F9B\u6570\u636E\u548C\u884C\u4E3A\u7ED9\u5176\u4ED6\u7684\u5C55\u793A\u7EC4\u4EF6\u6216\u5BB9\u5668\u7EC4\u4EF6\u3002",paraId:113,tocIndex:15},{value:"\u8C03\u7528 Flux \u64CD\u4F5C\u5E76\u5C06\u5B83\u4EEC\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u63D0\u4F9B\u7ED9\u5C55\u793A\u7EC4\u4EF6\u3002",paraId:113,tocIndex:15},{value:"\u5F80\u5F80\u662F\u6709\u72B6\u6001\u7684\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u503E\u5411\u4E8E\u4F5C\u4E3A\u6570\u636E\u6E90",paraId:113,tocIndex:15},{value:"\u901A\u5E38\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6\u751F\u6210\uFF0C\u4F8B\u5982",paraId:113,tocIndex:15},{value:"React Redux\u7684connect()",paraId:113,tocIndex:15},{value:"\uFF0C",paraId:113,tocIndex:15},{value:"Relay\u7684createContainer()",paraId:113,tocIndex:15},{value:"\u6216",paraId:113,tocIndex:15},{value:"Flux Utils\u7684Container.create()",paraId:113,tocIndex:15},{value:"\uFF0C\u800C\u4E0D\u662F\u624B\u5DE5\u7F16\u5199\u3002",paraId:113,tocIndex:15},{value:"\u793A\u4F8B\uFF1A",paraId:114,tocIndex:15},{value:`  //\u5C55\u793A\u7EC4\u4EF6
  class TodoList extends React.Component{
      constructor(props){
        super(props);
      }
      render(){
        const {todos} = this.props;
        return (<div>
          <ul>
              {todos.map((item,index)=>{
                  return <li key={item.id}>{item.name}</li>
              })}
          </ul>
        </div>)
      }

  //\u5BB9\u5668\u7EC4\u4EF6
  class TodoListContainer extends React.Component{
      constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
        this.fetchData = this.fetchData.bind(this);
      }
      componentDidMount(){
        this.fetchData();
      }
      fetchData(){
        fetch('/api/todos').then(data =>{
          this.setState({
            todos:data
          })
        })
      }
      render(){
        return (<div>
            <TodoList todos={this.state.todos} />
        </div>)
      }
  }
`,paraId:115,tocIndex:15},{value:"\u53D7\u63A7\u7EC4\u4EF6",paraId:116,tocIndex:16},{value:"HTML",paraId:117,tocIndex:16},{value:"\u4E2D\u7684\u8868\u5355\u5143\u7D20\u662F\u53EF\u8F93\u5165\u7684\uFF0C\u4E5F\u5C31\u662F\u6709\u81EA\u5DF1\u7684\u53EF\u53D8\u72B6\u6001",paraId:117,tocIndex:16},{value:"\u800C",paraId:117,tocIndex:16},{value:"React",paraId:117,tocIndex:16},{value:"\u4E2D\u53EF\u53D8\u72B6\u6001\u901A\u5E38\u4FDD\u5B58\u5728",paraId:117,tocIndex:16},{value:"state",paraId:117,tocIndex:16},{value:"\u4E2D\uFF0C\u5E76\u4E14\u53EA\u80FD\u901A\u8FC7",paraId:117,tocIndex:16},{value:"setState()",paraId:117,tocIndex:16},{value:" \u65B9\u6CD5\u6765\u4FEE\u6539",paraId:117,tocIndex:16},{value:"React",paraId:117,tocIndex:16},{value:"\u5C06",paraId:117,tocIndex:16},{value:"state",paraId:117,tocIndex:16},{value:"\u4E0E\u8868\u5355\u5143\u7D20\u503C",paraId:117,tocIndex:16},{value:"value",paraId:117,tocIndex:16},{value:"\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u6709",paraId:117,tocIndex:16},{value:"state",paraId:117,tocIndex:16},{value:"\u7684\u503C\u6765\u63A7\u5236\u8868\u5355\u5143\u7D20\u7684\u503C",paraId:117,tocIndex:16},{value:"\u53D7\u63A7\u7EC4\u4EF6\uFF1A\u503C\u53D7\u5230",paraId:117,tocIndex:16},{value:"react",paraId:117,tocIndex:16},{value:"\u63A7\u5236\u7684\u8868\u5355\u5143\u7D20",paraId:117,tocIndex:16},{value:`<input type="text" value={this.state.txt} onChange={this.inputChange} />
`,paraId:118,tocIndex:16},{value:"\u975E\u53D7\u63A7\u7EC4\u4EF6",paraId:119,tocIndex:16},{value:"\u8C03\u7528 ",paraId:120,tocIndex:16},{value:"React.createRef()",paraId:120,tocIndex:16},{value:" \u65B9\u6CD5\u521B\u5EFA ref \u5BF9\u8C61",paraId:120,tocIndex:16},{value:"\u5C06\u521B\u5EFA\u597D\u7684 ",paraId:120,tocIndex:16},{value:"ref",paraId:120,tocIndex:16},{value:" \u5BF9\u8C61\u6DFB\u52A0\u5230\u6587\u672C\u6846\u4E2D",paraId:120,tocIndex:16},{value:"\u901A\u8FC7",paraId:120,tocIndex:16},{value:"ref",paraId:120,tocIndex:16},{value:"\u5BF9\u8C61\u83B7\u53D6\u5230\u6587\u672C\u6846\u7684\u503C",paraId:120,tocIndex:16},{value:"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A \u8868\u5355\u7EC4\u4EF6\u6CA1\u6709",paraId:120,tocIndex:16},{value:"value prop",paraId:120,tocIndex:16},{value:"\u5C31\u53EF\u4EE5\u79F0\u4E3A\u975E\u53D7\u63A7\u7EC4\u4EF6",paraId:120,tocIndex:16},{value:`class App extends React.Component {
  constructor() {
    super();
    //\u521B\u5EFA ref
    this.txtRef = React.createRef();
  }
  // \u83B7\u53D6\u6587\u672C\u6846\u7684\u503C
  getTxt = () => {
    console.log(this.txtRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef} />
        <button onClick={this.getTxt}>\u83B7\u53D6\u503C</button>
      </div>
    );
  }
}
`,paraId:121,tocIndex:16},{value:"React \u901A\u8FC7\u5F15\u5165",paraId:122,tocIndex:17},{value:"Virtual DOM",paraId:122,tocIndex:17},{value:"\u7684\u6982\u5FF5\uFF0C\u6781\u5927\u7684\u907F\u514D\u65E0\u6548\u7684 DOM \u64CD\u4F5C\uFF0C\u4F7F\u6211\u4EEC\u7684\u9875\u9762\u7684\u6784\u5EFA\u6548\u7387\u5F97\u5230\u4E86\u6781\u5927\u7684\u63D0\u5347\uFF0C\u4F46\u662F\u5982\u4F55\u9AD8\u6548\u7684\u901A\u8FC7\u5BF9\u6BD4\u65B0\u65E7",paraId:122,tocIndex:17},{value:"Virtual DOM",paraId:122,tocIndex:17},{value:"\u6765\u627E\u5230\u771F\u6B63\u7684 DOM \u53D8\u5316\u4E4B\u5904\u540C\u6837\u4E5F\u51B3\u5B9A\u7740\u9875\u9762\u7684\u6027\u80FD\u3002",paraId:122,tocIndex:17},{value:"React DOM-diff \u7684\u7B56\u7565",paraId:123,tocIndex:17},{value:"web ui",paraId:124,tocIndex:17},{value:"\u4E2D",paraId:124,tocIndex:17},{value:"DOM",paraId:124,tocIndex:17},{value:"\u8282\u70B9\u8DE8\u5C42\u7EA7\u7684\u79FB\u52A8\u64CD\u4F5C\u7279\u522B\u5C11\uFF0C\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1",paraId:124,tocIndex:17},{value:"\u62E5\u6709\u76F8\u540C\u7C7B\u7684\u4E24\u4E2A\u7EC4\u4EF6\u5C06\u4F1A\u751F\u6210\u76F8\u4F3C\u7684\u6811\u5F62\u7ED3\u6784\uFF0C\u62E5\u6709\u4E0D\u540C\u7C7B\u7684\u4E24\u4E2A\u7EC4\u4EF6\u5C06\u4F1A\u751F\u6210\u4E0D\u540C\u7684\u6811\u5F62\u7ED3\u6784",paraId:125,tocIndex:17},{value:"\u5BF9\u4E8E\u540C\u4E00\u5C42\u7EA7\u7684\u4E00\u7EC4\u5B50\u8282\u70B9\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00 ",paraId:126,tocIndex:17},{value:"id",paraId:126,tocIndex:17},{value:" \u8FDB\u884C\u533A\u5206",paraId:126,tocIndex:17},{value:"\u57FA\u4E8E\u4EE5\u4E0A\u4E09\u4E2A\u524D\u63D0\u7B56\u7565\uFF0C",paraId:127,tocIndex:17},{value:"React",paraId:127,tocIndex:17},{value:"\u5206\u522B\u5BF9",paraId:127,tocIndex:17},{value:"tree diff",paraId:127,tocIndex:17},{value:"\u3001",paraId:127,tocIndex:17},{value:"component diff",paraId:127,tocIndex:17},{value:"\u4EE5\u53CA",paraId:127,tocIndex:17},{value:"element diff",paraId:127,tocIndex:17},{value:"\u8FDB\u884C\u7B97\u6CD5\u4F18\u5316",paraId:127,tocIndex:17},{value:"tree diff",paraId:128,tocIndex:17},{value:`
\u57FA\u4E8E\u7B56\u7565 1\uFF0Creact \u5BF9\u6811\u7684\u7B97\u6CD5\u91D1\u9879\u94FE\u7B80\u6D01\u660E\u4E86\u7684\u4F18\u5316\uFF0C\u5BF9\u6811\u8FDB\u884C\u5206\u5C42\u6BD4\u8F83\uFF0C\u4E24\u68F5\u6811\u53EA\u4F1A\u5BF9\u540C\u4E00\u5C42\u6B21\u7684\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5F53\u53D1\u73B0\u8282\u70B9\u4EE5\u53CA\u4E0D\u900A\u5728\uFF0C\u5219\u8BE5\u8282\u70B9\u53CA\u5176\u5B50\u8282\u70B9\u540E\u4F1A\u88AB\u5B8C\u5168\u5220\u9664\uFF0C\u4E0D\u4F1A\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u6BD4\u8F83\uFF0C\u8FD9\u6837\u53EA\u9700\u8981\u5BF9\u6811\u8FDB\u884C\u4E00\u6B21\u904D\u5386\uFF0C\u4FBF\u80FD\u5B8C\u6210\u6574\u4E2A DOM \u6811\u7684\u6BD4\u8F83`,paraId:128,tocIndex:17},{value:"component diff",paraId:128,tocIndex:17},{value:"\u5982\u679C\u662F\u540C\u4E00\u7C7B\u578B\u7684\u7EC4\u4EF6\uFF0C\u6309\u7167\u539F\u7B56\u7565\u7EE7\u7EED\u6BD4\u8F83 ",paraId:129,tocIndex:17},{value:"virtual DOM tree",paraId:129,tocIndex:17},{value:"\uFF0C\u5982\u679C\u4E0D\u662F\u5219\u5C06\u8BE5\u7EC4\u4EF6\u4E0B\u7684\u6240\u6709\u5B50\u8282\u70B9\u90FD\u66FF\u6362",paraId:129,tocIndex:17},{value:"\u5BF9\u4E8E\u540C\u7C7B\u7684\u7EC4\u4EF6\uFF0C\u6709\u53EF\u80FD\u5176",paraId:129,tocIndex:17},{value:"virtual DOM",paraId:129,tocIndex:17},{value:"\u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\uFF0C\u5982\u679C\u80FD\u591F\u786E\u5207\u7684\u77E5\u9053\u8FD9\u70B9\u90A3\u53EF\u4EE5\u8282\u7701\u5927\u91CF\u7684 diff \u8FD0\u7B97\u4E8B\u4EF6\uFF0C\u56E0\u6B64",paraId:129,tocIndex:17},{value:"react",paraId:129,tocIndex:17},{value:"\u8FD0\u884C\u7528\u6237\u901A\u8FC7",paraId:129,tocIndex:17},{value:"shouldComponentUpdate()",paraId:129,tocIndex:17},{value:"\u6765\u5224\u65AD\u8BE5\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u8FDB\u884C",paraId:129,tocIndex:17},{value:"diff",paraId:129,tocIndex:17},{value:"element diff",paraId:130,tocIndex:17},{value:`
\u901A\u8FC7\u552F\u4E00\u7684`,paraId:130,tocIndex:17},{value:"key",paraId:130,tocIndex:17},{value:"\u503C\u8FDB\u884C\u589E\u5220\u6539",paraId:130,tocIndex:17},{value:"MVVM",paraId:131,tocIndex:18},{value:"\u662F ",paraId:131,tocIndex:18},{value:"Model-View-ViewModel",paraId:131,tocIndex:18},{value:"\u7684\u7F29\u5199\uFF0C\u5373\u6A21\u578B-\u89C6\u56FE-\u89C6\u56FE\u6A21\u578B\u3002",paraId:131,tocIndex:18},{value:"MVVM",paraId:131,tocIndex:18},{value:" \u662F\u4E00\u79CD\u8BBE\u8BA1\u601D\u60F3\u3002",paraId:131,tocIndex:18},{value:"\u6A21\u578B",paraId:132,tocIndex:18},{value:"\uFF08Model\uFF09",paraId:132,tocIndex:18},{value:`\uFF1A \u6570\u636E\u4FDD\u5B58\u2014\u5B58\u653E\u7740\u5404\u79CD\u6570\u636E\uFF0C\u6709\u7684\u662F\u56FA\u5B9A\u5199\u6B7B\u7684\uFF0C\u5927\u591A\u6570\u662F\u4ECE\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E
\u89C6\u56FE `,paraId:132,tocIndex:18},{value:"\uFF08View\uFF09",paraId:132,tocIndex:18},{value:`\uFF1A\u7528\u6237\u754C\u9762\uFF0C\u4E5F\u5C31\u662F DOM
\u89C6\u56FE\u6A21\u578B`,paraId:132,tocIndex:18},{value:"\uFF08View-Model\uFF09",paraId:132,tocIndex:18},{value:":\u8FDE\u63A5",paraId:132,tocIndex:18},{value:"View",paraId:132,tocIndex:18},{value:"\u548C",paraId:132,tocIndex:18},{value:"Model",paraId:132,tocIndex:18},{value:"\u7684\u6865\u6881\uFF0C\u5F53\u6570\u636E\u53D8\u5316\u65F6\uFF0C",paraId:132,tocIndex:18},{value:"ViewModel",paraId:132,tocIndex:18},{value:"\u591F\u76D1\u542C\u5230\u6570\u636E\u7684\u53D8\u5316\uFF08\u901A\u8FC7",paraId:132,tocIndex:18},{value:"Data Bindings",paraId:132,tocIndex:18},{value:"\uFF09\uFF0C\u81EA\u52A8\u66F4\u65B0\u89C6\u56FE\uFF0C\u800C\u5F53\u7528\u6237\u64CD\u4F5C\u89C6\u56FE\uFF0C",paraId:132,tocIndex:18},{value:"ViewModel",paraId:132,tocIndex:18},{value:"\u4E5F\u80FD\u76D1\u542C\u5230\u89C6\u56FE\u7684\u53D8\u5316\uFF08\u901A\u8FC7",paraId:132,tocIndex:18},{value:"DOM Listeners",paraId:132,tocIndex:18},{value:"\uFF09\uFF0C\u7136\u540E\u901A\u77E5\u6570\u636E\u505A\u6539\u52A8\uFF0C\u8FD9\u5C31\u5B9E\u73B0\u4E86\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A",paraId:132,tocIndex:18},{value:"MVVM \u548C MVC \u533A\u522B\uFF1F",paraId:133,tocIndex:18},{value:`\u90FD\u662F\u4E00\u79CD\u8BBE\u8BA1\u601D\u60F3
`,paraId:134,tocIndex:18},{value:"MVC",paraId:134,tocIndex:18},{value:" \u540E\u53F0\u7528\u7684\u591A\uFF0C",paraId:134,tocIndex:18},{value:"MVC",paraId:134,tocIndex:18},{value:"\u662F",paraId:134,tocIndex:18},{value:"Model-View-Controller",paraId:134,tocIndex:18},{value:`\u7684\u7B80\u5199\uFF0C\u5373\u6A21\u578B-\u89C6\u56FE-\u63A7\u5236\u5668\u3002
`,paraId:134,tocIndex:18},{value:"MVC",paraId:134,tocIndex:18},{value:"\u7684\u76EE\u7684\u5C31\u662F\u5C06",paraId:134,tocIndex:18},{value:"M",paraId:134,tocIndex:18},{value:"\u548C",paraId:134,tocIndex:18},{value:"V",paraId:134,tocIndex:18},{value:`\u7684\u4EE3\u7801\u5206\u79BB
`,paraId:134,tocIndex:18},{value:"MVC",paraId:134,tocIndex:18},{value:"\u662F\u5355\u5411\u901A\u4FE1\uFF0C\u4E5F\u5C31\u662F",paraId:134,tocIndex:18},{value:"View",paraId:134,tocIndex:18},{value:"\u548C",paraId:134,tocIndex:18},{value:"Model",paraId:134,tocIndex:18},{value:"\uFF0C\u5FC5\u987B\u901A\u8FC7",paraId:134,tocIndex:18},{value:"Controller",paraId:134,tocIndex:18},{value:`\u6765\u627F\u4E0A\u542F\u4E0B
`,paraId:134,tocIndex:18},{value:"MVVM",paraId:134,tocIndex:18},{value:"\u5B9E\u73B0\u4E86",paraId:134,tocIndex:18},{value:"View",paraId:134,tocIndex:18},{value:"\u548C",paraId:134,tocIndex:18},{value:"Model",paraId:134,tocIndex:18},{value:"\u7684\u81EA\u52A8\u540C\u6B65\uFF0C\u5F53",paraId:134,tocIndex:18},{value:"Model",paraId:134,tocIndex:18},{value:"\u7684\u5C5E\u6027\u6539\u53D8\u65F6\uFF0C\u4E0D\u7528\u518D\u81EA\u5DF1\u624B\u52A8\u64CD\u4F5C",paraId:134,tocIndex:18},{value:"DOM",paraId:134,tocIndex:18},{value:"\u5143\u7D20\uFF0C\u63D0\u9AD8\u4E86\u9875\u9762\u6E32\u67D3\u6027\u80FD",paraId:134,tocIndex:18},{value:"useMemo",paraId:135,tocIndex:19},{value:" \u548C ",paraId:135,tocIndex:19},{value:"React.mome",paraId:135,tocIndex:19},{value:" \u7684\u533A\u522B\uFF1F",paraId:135,tocIndex:19},{value:"react hooks",paraId:136,tocIndex:19},{value:"\u63D0\u4F9B\u7684\u4E24\u4E2A API\uFF0C\u7528\u4E8E\u7F13\u5B58\u6570\u636E\uFF0C\u4F18\u5316\u6027\u80FD",paraId:136,tocIndex:19},{value:"React.mome",paraId:137,tocIndex:19},{value:"\u4F7F\u7528 ",paraId:138,tocIndex:19},{value:"React.mome",paraId:138,tocIndex:19},{value:" \u6765\u7F13\u5B58\u7EC4\u4EF6\uFF0C\u9632\u6B62\u7236\u7EC4\u4EF6 state \u7684\u6539\u53D8\u5F71\u54CD\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3",paraId:138,tocIndex:19},{value:"useMemo",paraId:139,tocIndex:19},{value:"\u7528\u6765\u7F13\u5B58\u6570\u636E\uFF0C\u5F53\u7EC4\u4EF6\u5185\u90E8\u67D0\u4E00\u4E2A\u6E32\u67D3\u7684\u6570\u636E\uFF0C\u9700\u8981\u901A\u8FC7\u8BA1\u7B97\u800C\u6765\uFF0C\u8FD9\u4E2A\u8BA1\u7B97\u662F\u4F9D\u8D56\u4E0E\u7279\u5B9A\u7684",paraId:140,tocIndex:19},{value:"state\u3001props",paraId:140,tocIndex:19},{value:"\u6570\u636E\uFF0C\u6211\u4EEC\u5C31\u7528",paraId:140,tocIndex:19},{value:"useMemo",paraId:140,tocIndex:19},{value:"\u6765\u7F13\u5B58\u8FD9\u4E2A\u6570\u636E\uFF0C\u4EE5\u81F3\u4E8E\u6211\u4EEC\u5728\u4FEE\u6539\u5979\u4EEC\u6CA1\u6709\u4F9D\u8D56\u7684\u6570\u636E\u6E90\u7684\u60C5\u51B5\u4E0B\uFF0C\u591A\u6B21\u8C03\u7528\u8FD9\u4E2A\u8BA1\u7B97\u51FD\u6570\uFF0C\u6D6A\u8D39\u8BA1\u7B97\u8D44\u6E90",paraId:140,tocIndex:19},{value:"\u4E5F\u53EF\u4EE5\u628A",paraId:141,tocIndex:19},{value:"useMemo",paraId:141,tocIndex:19},{value:"\u66FF\u6362\u6210",paraId:141,tocIndex:19},{value:"useCallback",paraId:141,tocIndex:19},{value:",\u4F7F\u7528",paraId:141,tocIndex:19},{value:"useCallback",paraId:141,tocIndex:19},{value:"\u5C31\u4E0D\u7528\u5199",paraId:141,tocIndex:19},{value:"return",paraId:141,tocIndex:19},{value:"\u51FD\u6570\u4E86",paraId:141,tocIndex:19},{value:`import React, { useState, useMemo } from 'react';
import './style.css';

//\u7236\u7EC4\u4EF6\u7684state\u6539\u53D8\u7684\u65F6\u5019 \u5B50\u7EC4\u4EF6\u4E5F\u4F1A\u968F\u7740\u91CD\u65B0render,\u4F7F\u7528React.memo\u53EF\u4EE5\u7F13\u5B58\u7EC4\u4EF6
const ChildComponent = React.memo(() => {
  console.log('\u8FD9\u662F\u5B50\u7EC4\u4EF6');
  return <div>\u8FD9\u662F\u5B50\u7EC4\u4EF6</div>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState('');
  //\u4E0D\u4F7F\u7528useMemo\u7684\u8BDD\uFF0C\u6BCF\u6B21\u521B\u5EFA\u51FA\u6765\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u51FD\u6570
  //\u4F7F\u7528useMemo\u7684\u8BDD\u6BCF\u6B21\u51FD\u6570\u5BF9\u8C61\u53EA\u521B\u5EFA\u4E00\u6B21\uFF0C\u6240\u4EE5\u5F53count\u6539\u53D8\u7684\u65F6\u5019\uFF0CChild\u4E0D\u4F1Arender
  const sumFunction = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 10; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  //\u7B49\u4EF7\u4E8E
  // useCallback\u540C\u7406\uFF0C\u5F53count\u6539\u53D8\u65F6\uFF0C\u4EE3\u7801\u6267\u884C\u5230\u8FD9\u91CC\u65F6\uFF0C\u4F1A\u518D\u6B21\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684sumFunction\u51FD\u6570\uFF0C\u6240\u4EE5Child\u7EC4\u4EF6\u4E5F\u4F1A\u518D\u6B21render
  const sumFunction = useCallback(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 10; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  return (
    <div>
      <div>
        {count}-{val}-{sumFunction}
      </div>
      <button onClick={() => setCount(count + 1)}>\u70B9\u51FB+1</button>
      <p>
        <input value={val} onChange={e => setVal(e.target.value)} />
      </p>
      <ChildComponent />
    </div>
  );
}
`,paraId:142,tocIndex:19},{value:"useMemo",paraId:143,tocIndex:19},{value:" \u548C ",paraId:143,tocIndex:19},{value:"useCallback",paraId:143,tocIndex:19},{value:" \u7684\u533A\u522B\u53CA\u4F7F\u7528\u573A\u666F",paraId:143,tocIndex:19},{value:"\u5171\u540C\u4F5C\u7528\uFF1A",paraId:144,tocIndex:19},{value:"useMemo",paraId:145,tocIndex:19},{value:" \u548C ",paraId:145,tocIndex:19},{value:"useCallback",paraId:145,tocIndex:19},{value:" \u63A5\u6536\u7684\u53C2\u6570\u90FD\u662F\u4E00\u6837,\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u56DE\u8C03 \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u8981\u4F9D\u8D56\u7684\u6570\u636E",paraId:145,tocIndex:19},{value:"\u4E24\u8005\u533A\u522B\uFF1A",paraId:146,tocIndex:19},{value:"useMemo",paraId:147,tocIndex:19},{value:" \u8FD4\u56DE\u7ED3\u679C\u662F ",paraId:147,tocIndex:19},{value:"return",paraId:147,tocIndex:19},{value:" \u56DE\u6765\u7684\u503C, \u4E3B\u8981\u7528\u4E8E\u7F13\u5B58\u8BA1\u7B97\u7ED3\u679C\u7684\u503C \uFF0C\u5E94\u7528\u573A\u666F\u5982\uFF1A \u9700\u8981\u8BA1\u7B97\u7684\u72B6\u6001\uFF08\u9632\u6B62\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u591A\u6B21\uFF09",paraId:147,tocIndex:19},{value:"useCallback",paraId:147,tocIndex:19},{value:" \u8FD4\u56DE\u7ED3\u679C\u662F\u51FD\u6570, \u4E3B\u8981\u7528\u4E8E\u7F13\u5B58\u51FD\u6570\u7684\u5F15\u7528\uFF0C\u5E94\u7528\u573A\u666F\u5982: \u9700\u8981\u7F13\u5B58\u7684\u51FD\u6570\uFF0C\u56E0\u4E3A\u51FD\u6570\u5F0F\u7EC4\u4EF6\u6BCF\u6B21\u4EFB\u4F55\u4E00\u4E2A ",paraId:147,tocIndex:19},{value:"state",paraId:147,tocIndex:19},{value:" \u7684\u53D8\u5316\u6574\u4E2A\u7EC4\u4EF6\u90FD\u4F1A\u88AB\u91CD\u65B0\u5237\u65B0\uFF0C\u4E00\u4E9B\u51FD\u6570\u662F\u6CA1\u6709\u5FC5\u8981\u88AB\u91CD\u65B0\u5237\u65B0\u7684\uFF0C\u6B64\u65F6\u5C31\u5E94\u8BE5\u7F13\u5B58\u8D77\u6765\uFF0C\u63D0\u9AD8\u6027\u80FD\uFF0C\u548C\u51CF\u5C11\u8D44\u6E90\u6D6A\u8D39",paraId:147,tocIndex:19},{value:"\u4F7F\u7528\u573A\u666F",paraId:148,tocIndex:19},{value:"useMemo",paraId:149,tocIndex:19},{value:`
\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7EF4\u62A4\u4E86\u4E24\u4E2A`,paraId:149,tocIndex:19},{value:"state",paraId:149,tocIndex:19},{value:"\uFF0C\u53EF\u4EE5\u770B\u5230",paraId:149,tocIndex:19},{value:"sumFunction",paraId:149,tocIndex:19},{value:"\u7684\u8BA1\u7B97\u4EC5\u4EC5\u8DDF",paraId:149,tocIndex:19},{value:"count",paraId:149,tocIndex:19},{value:"\u6709\u5173\uFF0C\u4F46\u662F\u73B0\u5728\u65E0\u8BBA\u662F",paraId:149,tocIndex:19},{value:"count",paraId:149,tocIndex:19},{value:"\u8FD8\u662F",paraId:149,tocIndex:19},{value:"val",paraId:149,tocIndex:19},{value:"\u53D8\u5316\uFF0C\u90FD\u4F1A\u5BFC\u81F4",paraId:149,tocIndex:19},{value:"sumFunction",paraId:149,tocIndex:19},{value:"\u91CD\u65B0\u8BA1\u7B97\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6211\u4EEC\u5E0C\u671B",paraId:149,tocIndex:19},{value:"val",paraId:149,tocIndex:19},{value:"\u4FEE\u6539\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981\u518D\u6B21\u8BA1\u7B97\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:149,tocIndex:19},{value:"useMemo",paraId:149,tocIndex:19},{value:"useCallback",paraId:149,tocIndex:19},{value:`
\u6709\u4E00\u4E2A\u7236\u7EC4\u4EF6\uFF0C\u5176\u4E2D\u5305\u542B\u5B50\u7EC4\u4EF6\uFF0C\u5B50\u7EC4\u4EF6\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A`,paraId:149,tocIndex:19},{value:"props",paraId:149,tocIndex:19},{value:"\uFF1B\u901A\u5E38\u800C\u8A00\uFF0C\u5982\u679C\u7236\u7EC4\u4EF6\u66F4\u65B0\u4E86\uFF0C\u5B50\u7EC4\u4EF6\u4E5F\u4F1A\u6267\u884C\u66F4\u65B0\uFF1B\u4F46\u662F\u5927\u591A\u6570\u573A\u666F\u4E0B\uFF0C\u66F4\u65B0\u662F\u6CA1\u6709\u5FC5\u8981\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9",paraId:149,tocIndex:19},{value:"useCallback",paraId:149,tocIndex:19},{value:"\u6765\u8FD4\u56DE\u51FD\u6570\uFF0C\u7136\u540E\u628A\u8FD9\u4E2A\u51FD\u6570\u4F5C\u4E3A",paraId:149,tocIndex:19},{value:"props",paraId:149,tocIndex:19},{value:"\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\uFF1B\u8FD9\u6837\uFF0C\u5B50\u7EC4\u4EF6\u5C31\u80FD\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u66F4\u65B0",paraId:149,tocIndex:19},{value:"PureComponent",paraId:150,tocIndex:19},{value:"React.PureComponent",paraId:151,tocIndex:19},{value:" \u4E0E ",paraId:151,tocIndex:19},{value:"React.Component",paraId:151,tocIndex:19},{value:" \u51E0\u4E4E\u5B8C\u5168\u76F8\u540C\uFF0C\u4F46",paraId:151,tocIndex:19},{value:"React.PureComponent",paraId:151,tocIndex:19},{value:" \u901A\u8FC7 ",paraId:151,tocIndex:19},{value:"props",paraId:151,tocIndex:19},{value:" \u548C ",paraId:151,tocIndex:19},{value:"state",paraId:151,tocIndex:19},{value:" \u7684\u6D45\u5BF9\u6BD4\u6765\u5B9E\u73B0 ",paraId:151,tocIndex:19},{value:"shouldComponentUpate()",paraId:151,tocIndex:19},{value:"\uFF0C\u5982\u679C\u5B9A\u4E49\u4E86 ",paraId:151,tocIndex:19},{value:"shouldComponentUpdate()",paraId:151,tocIndex:19},{value:"\uFF0C\u65E0\u8BBA\u7EC4\u4EF6\u662F\u5426\u662F ",paraId:151,tocIndex:19},{value:"PureComponent",paraId:151,tocIndex:19},{value:"\uFF0C\u5B83\u90FD\u4F1A\u6267\u884C",paraId:151,tocIndex:19},{value:"shouldComponentUpdate",paraId:151,tocIndex:19},{value:"\u7ED3\u679C\u6765\u5224\u65AD\u662F\u5426 ",paraId:151,tocIndex:19},{value:"update",paraId:151,tocIndex:19},{value:"\u3002\u5982\u679C\u7EC4\u4EF6\u672A\u5B9E\u73B0 ",paraId:151,tocIndex:19},{value:"shouldComponentUpdate()",paraId:151,tocIndex:19},{value:" \uFF0C\u5219\u4F1A\u5224\u65AD\u8BE5\u7EC4\u4EF6\u662F\u5426\u662F ",paraId:151,tocIndex:19},{value:"PureComponent",paraId:151,tocIndex:19},{value:"\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u4F1A\u5BF9\u65B0\u65E7",paraId:151,tocIndex:19},{value:"props\u3001state",paraId:151,tocIndex:19},{value:" \u8FDB\u884C ",paraId:151,tocIndex:19},{value:"shallowEqual",paraId:151,tocIndex:19},{value:" \u6BD4\u8F83\uFF0C\u4E00\u65E6\u65B0\u65E7\u4E0D\u4E00\u81F4\uFF0C\u4F1A\u89E6\u53D1 ",paraId:151,tocIndex:19},{value:"update",paraId:151,tocIndex:19},{value:"\u4F18\u70B9",paraId:152,tocIndex:19},{value:" \u4E0D\u9700\u8981\u5F00\u53D1\u8005\u81EA\u5DF1\u5B9E\u73B0`shouldComponentUpdate`\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u7B80\u5355\u7684\u5224\u65AD\u6765\u63D0\u5347\u6027\u80FD\n",paraId:153,tocIndex:19},{value:"\u7F3A\u70B9",paraId:154,tocIndex:19},{value:" \u53EF\u80FD\u4F1A\u56E0\u6DF1\u5C42\u7684\u6570\u636E\u4E0D\u4E00\u81F4\u800C\u4EA7\u751F\u9519\u8BEF\u7684\u5426\u5B9A\u5224\u65AD\uFF0C\u4ECE\u800C`shouldComponentUpdate`\u7ED3\u679C\u8FD4\u56DE`false`\uFF0C\u754C\u9762\u5F97\u4E0D\u5230\u66F4\u65B0\n",paraId:155,tocIndex:19},{value:"Refs",paraId:156,tocIndex:20},{value:" \u63D0\u4F9B\u4E86\u4E00\u79CD\u8BBF\u95EE\u5728",paraId:156,tocIndex:20},{value:"render",paraId:156,tocIndex:20},{value:"\u65B9\u6CD5\u4E2D\u521B\u5EFA\u7684 ",paraId:156,tocIndex:20},{value:"DOM",paraId:156,tocIndex:20},{value:" \u8282\u70B9\u6216\u8005 ",paraId:156,tocIndex:20},{value:"React",paraId:156,tocIndex:20},{value:" \u5143\u7D20\u7684\u65B9\u6CD5\u3002\u5728\u5178\u578B\u7684\u6570\u636E\u6D41\u4E2D\uFF0C",paraId:156,tocIndex:20},{value:"props",paraId:156,tocIndex:20},{value:" \u662F\u7236\u5B50\u7EC4\u4EF6\u4EA4\u4E92\u7684\u552F\u4E00\u65B9\u5F0F\uFF0C\u60F3\u8981\u4FEE\u6539\u5B50\u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528\u65B0\u7684",paraId:156,tocIndex:20},{value:"props",paraId:156,tocIndex:20},{value:"\u91CD\u65B0\u6E32\u67D3\u5B83\u3002\u51E1\u4E8B\u6709\u4F8B\u5916\uFF0C\u67D0\u4E9B\u60C5\u51B5\u4E0B\u54B1\u4EEC\u9700\u8981\u5728\u5178\u578B\u6570\u636E\u6D41\u5916\uFF0C\u5F3A\u5236\u4FEE\u6539\u5B50\u4EE3\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528 ",paraId:156,tocIndex:20},{value:"Refs",paraId:156,tocIndex:20},{value:"\u5728\u8C03\u7528 ",paraId:157,tocIndex:21},{value:"super()",paraId:157,tocIndex:21},{value:" \u65B9\u6CD5\u4E4B\u524D\uFF0C\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u65E0\u6CD5\u4F7F\u7528",paraId:157,tocIndex:21},{value:"this",paraId:157,tocIndex:21},{value:"\u5F15\u7528\uFF0CES6 \u5B50\u7C7B\u4E5F\u662F\u5982\u6B64\u3002\u5C06 ",paraId:157,tocIndex:21},{value:"props",paraId:157,tocIndex:21},{value:" \u53C2\u6570\u4F20\u9012\u7ED9 ",paraId:157,tocIndex:21},{value:"super()",paraId:157,tocIndex:21},{value:"\u8C03\u7528\u7684\u4E3B\u8981\u539F\u56E0\u662F\u5728\u5B50\u6784\u9020\u51FD\u6570\u4E2D\u80FD\u591F\u901A\u8FC7",paraId:157,tocIndex:21},{value:"this.props",paraId:157,tocIndex:21},{value:"\u6765\u83B7\u53D6\u4F20\u5165\u7684 ",paraId:157,tocIndex:21},{value:"props",paraId:157,tocIndex:21}]}}]);
