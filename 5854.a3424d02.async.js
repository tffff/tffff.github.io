"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[5854],{15854:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:".prettierrc.js",paraId:0,tocIndex:0},{value:" \u4EE3\u7801\u98CE\u683C\u683C\u5F0F\u5316\u7EDF\u4E00",paraId:0,tocIndex:0},{value:".nvmrc",paraId:0,tocIndex:0},{value:" node \u7248\u672C\u7BA1\u7406",paraId:0,tocIndex:0},{value:".editorconfig",paraId:0,tocIndex:0},{value:" \u5BF9\u4E0D\u540C\u7684\u4EE3\u7801\u7F16\u8F91\u5668\u6765\u89C4\u8303\uFF0C\u8FD9\u4E2A\u548C",paraId:0,tocIndex:0},{value:".prettierrc.js",paraId:0,tocIndex:0},{value:"\u91CD\u590D\u4E4B\u540E\uFF0C",paraId:0,tocIndex:0},{value:".prettierrc.js",paraId:0,tocIndex:0},{value:"\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8",paraId:0,tocIndex:0},{value:"dangerfile.js",paraId:0,tocIndex:0},{value:" \u6D4B\u8BD5\u4F7F\u7528",paraId:0,tocIndex:0},{value:"appveyor.yml",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"netlify.toml",paraId:0,tocIndex:0},{value:" CI \u5DE5\u5177",paraId:0,tocIndex:0},{value:"script",paraId:0,tocIndex:0},{value:" \u6587\u4EF6\u5939\u4E0B\u9762\u5C31\u662F\u6253\u5305\u914D\u7F6E\u7684\u4E00\u4E9B\u6587\u4EF6",paraId:0,tocIndex:0},{value:"packages",paraId:0,tocIndex:0},{value:" \u6587\u4EF6\u5939\u4E3B\u8981\u662F\u653E\u6E90\u7801",paraId:0,tocIndex:0},{value:"\u901A\u5E38\u6211\u4EEC\u7528",paraId:1,tocIndex:1},{value:"react",paraId:1,tocIndex:1},{value:"\u7684",paraId:1,tocIndex:1},{value:"jsx",paraId:1,tocIndex:1},{value:"\u8BED\u6CD5\u5199\u5B8C\u4E4B\u540E\u90FD\u662F\u7ECF\u8FC7",paraId:1,tocIndex:1},{value:"babel",paraId:1,tocIndex:1},{value:"\u8F6C\u4E49\u7684\u6210",paraId:1,tocIndex:1},{value:"createElement",paraId:1,tocIndex:1},{value:"\u5BF9\u8C61\u5904\u7406\u4E4B\u540E\u6E32\u67D3\u5230",paraId:1,tocIndex:1},{value:"DOM",paraId:1,tocIndex:1},{value:"\u5143\u7D20\u4E0A\u7684\u3002",paraId:1,tocIndex:1},{value:"\u4E0B\u9762\u662F",paraId:2,tocIndex:1},{value:"react",paraId:2,tocIndex:1},{value:"\u6E90\u7801\u91CC\u9762\u7684\u5173\u4E8E\u751F\u4EA7\u73AF\u5883\u4E0B\u7684",paraId:2,tocIndex:1},{value:"createElement",paraId:2,tocIndex:1},{value:"\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC\u6765\u770B\u770B\u4E3B\u8981\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F",paraId:2,tocIndex:1},{value:`// packages/react/src/ReactElement.js

export function createElement(type, config, children) {
  let propName;

  // Reserved names are extracted
  const props = {};

  let key = null;
  let ref = null;
  let self = null;
  let source = null;

  if (config != null) {
    // ref\u548Ckey\u662F\u4E24\u4E2A\u7279\u6B8A\u7684\u5C5E\u6027\uFF0C\u8981\u5355\u72EC\u5904\u7406
    if (hasValidRef(config)) {
      ref = config.ref; //\u5F97\u5230\u7EC4\u4EF6\u7684\u5F15\u7528\uFF0C\u5F97\u5230\u6700\u7EC8\u7684Dom\u5143\u7D20

      if (__DEV__) {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    // \u904D\u5386config\u5F97\u5230props \u5982\u679C\u5BF9\u8C61\u672C\u8EAB\u5B58\u5728\u8BE5\u5C5E\u6027\u5C31\u590D\u5236
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  //\u4E0B\u9762\u8FD9\u4E2A\u5730\u65B9\u662F\u5904\u7406\u5B50\u5143\u7D20\u7684
  // createElement\u53EF\u4EE5\u4F20\u9012N\u4E2A\u53C2\u6570\uFF0CN-2\u5C31\u662F\u5B50\u5143\u7D20\u7684\u4E2A\u6570
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  // \u8D4B\u503C\u4E3Adefault
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (__DEV__) {
    if (key || ref) {
      const displayName =
        typeof type === 'function'
          ? type.displayName || type.name || 'Unknown'
          : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  // \u521B\u5EFA\u4E00\u4E2AReactElement
  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}
`,paraId:3,tocIndex:1},{value:"\u4E0A\u9762\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\u4E3B\u8981\u662F\u8FD4\u56DE\u4E86\u4E00\u4E2A",paraId:4,tocIndex:1},{value:"element",paraId:4,tocIndex:1},{value:"\u5BF9\u8C61,",paraId:4,tocIndex:1},{value:"createElement",paraId:4,tocIndex:1},{value:"\u4F20\u5165\u4E86\u4E09\u4E2A\u53C2\u6570\uFF1A",paraId:4,tocIndex:1},{value:"type",paraId:5,tocIndex:1},{value:" \u8868\u793A\u4F60\u8981\u6E32\u67D3\u7684 DOM \u5143\u7D20\u7C7B\u578B",paraId:5,tocIndex:1},{value:"config",paraId:5,tocIndex:1},{value:" \u521B\u5EFA",paraId:5,tocIndex:1},{value:"React",paraId:5,tocIndex:1},{value:"\u5143\u7D20\u6240\u9700\u8981\u7684",paraId:5,tocIndex:1},{value:"props",paraId:5,tocIndex:1},{value:"\u3002\u5305\u542B ",paraId:5,tocIndex:1},{value:"style\uFF0CclassName",paraId:5,tocIndex:1},{value:" \u7B49,",paraId:5,tocIndex:1},{value:"ref",paraId:5,tocIndex:1},{value:"\u548C",paraId:5,tocIndex:1},{value:"key",paraId:5,tocIndex:1},{value:"\u662F\u4E0D\u4F1A\u6302\u8F7D\u5230 DOM \u5143\u7D20\u4E0A,",paraId:5,tocIndex:1},{value:"ref",paraId:5,tocIndex:1},{value:"\u53EF\u4EE5\u627E DOM \u5143\u7D20\uFF0C\u4E5F\u53EF\u4EE5\u8C03\u7528\u7EC4\u4EF6\u7684\u5B9E\u4F8B,",paraId:5,tocIndex:1},{value:"key",paraId:5,tocIndex:1},{value:"\u662F\u53EF\u4EE5\u7528\u4F5C",paraId:5,tocIndex:1},{value:"diff",paraId:5,tocIndex:1},{value:"\u7B97\u6CD5\u5224\u65AD\u5DEE\u5F02",paraId:5,tocIndex:1},{value:"children",paraId:5,tocIndex:1},{value:" \u8981\u6E32\u67D3\u5143\u7D20\u7684\u5B50\u5143\u7D20\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u5411\u540E\u4F20\u5165 n \u4E2A\u53C2\u6570\u3002\u53C2\u6570\u7C7B\u578B\u7686\u4E3A",paraId:5,tocIndex:1},{value:"React.createElement",paraId:5,tocIndex:1},{value:" \u8FD4\u56DE\u7684",paraId:5,tocIndex:1},{value:"React",paraId:5,tocIndex:1},{value:"\u5143\u7D20\u5BF9\u8C61",paraId:5,tocIndex:1},{value:"ReactElement",paraId:6,tocIndex:1},{value:"\u53EA\u662F\u4E00\u4E2A\u7528\u6765\u627F\u8F7D\u4FE1\u606F\u7684\u5BB9\u5668\uFF0C\u5B83\u4F1A\u544A\u8BC9\u540E\u7EED\u7684\u64CD\u4F5C\u8FD9\u4E2A\u8282\u70B9\u7684\u4EE5\u4E0B\u4FE1\u606F\uFF1A",paraId:6,tocIndex:1},{value:"type",paraId:7,tocIndex:1},{value:"\u7C7B\u578B\uFF0C\u7528\u4E8E\u5224\u65AD\u5982\u4F55\u521B\u5EFA\u8282\u70B9\uFF1B",paraId:7,tocIndex:1},{value:"key",paraId:7,tocIndex:1},{value:"\u548C",paraId:7,tocIndex:1},{value:"ref",paraId:7,tocIndex:1},{value:"\u8FD9\u4E9B\u7279\u6B8A\u4FE1\u606F\uFF1B",paraId:7,tocIndex:1},{value:"props",paraId:7,tocIndex:1},{value:"\u65B0\u7684\u5C5E\u6027\u5185\u5BB9\uFF1B",paraId:7,tocIndex:1},{value:"$$typeof",paraId:7,tocIndex:1},{value:"\u7528\u4E8E\u786E\u5B9A\u662F\u5426\u5C5E\u4E8E",paraId:7,tocIndex:1},{value:"ReactElement",paraId:7,tocIndex:1},{value:"\uFF1B",paraId:7,tocIndex:1},{value:"\u5728\u67D0\u79CD\u60C5\u51B5\u4E0B\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",paraId:8,tocIndex:1},{value:"React.createElement()",paraId:8,tocIndex:1},{value:",\u4F8B\u5982\uFF1A\u6279\u91CF\u5316\u751F\u4EA7\u8868\u5355\u7CFB\u7EDF\uFF0C\u5728\u4F7F\u7528",paraId:8,tocIndex:1},{value:"antd",paraId:8,tocIndex:1},{value:"\u7684",paraId:8,tocIndex:1},{value:"Input",paraId:8,tocIndex:1},{value:"\u7EC4\u4EF6\u7684\u65F6\u5019,",paraId:8,tocIndex:1},{value:"createElement",paraId:8,tocIndex:1},{value:"\u6709\u65F6\u5019\u8FD8\u662F\u5177\u6709\u7075\u6D3B\u6027\u7684",paraId:8,tocIndex:1},{value:"\u4E00\u822C\u5728",paraId:9,tocIndex:2},{value:"React",paraId:9,tocIndex:2},{value:"\u91CC\u9762\u6E32\u67D3\u6570\u7EC4\u90FD\u662F\u901A\u8FC7",paraId:9,tocIndex:2},{value:"map",paraId:9,tocIndex:2},{value:"\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0",paraId:9,tocIndex:2},{value:`render(){
  return <div>
    {
      ['a','b','c'].map((item)=>{
        return <span key={item}>{{item}}</span>
      })
    }
  </div>
}
`,paraId:10,tocIndex:2},{value:"React.Children",paraId:11,tocIndex:2},{value:" \u63D0\u4F9B\u4E86\u7528\u4E8E\u5904\u7406 ",paraId:11,tocIndex:2},{value:"this.props.children",paraId:11,tocIndex:2},{value:" \u4E0D\u900F\u660E\u6570\u636E\u7ED3\u6784\u7684\u5B9E\u7528\u65B9\u6CD5\u3002",paraId:11,tocIndex:2},{value:"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 React.Children.map\uFF0C \u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528 this.props.children.map?",paraId:12,tocIndex:2},{value:"React.Children.map \u662F\u4E00\u79CD\u5B89\u5168\u7684\u7528\u6CD5\uFF0C\u4F1A\u9ED8\u8BA4\u5224\u65AD null,undefined\uFF0C\u5BF9\u8C61\uFF0C\u5B57\u7B26\u4E32\u7B49\u60C5\u51B5\uFF0C\u5373\u4F7F\u7C7B\u578B\u4E0D\u662F Array\uFF0C\u4E5F\u4E0D\u4F1A\u62A5\u9519",paraId:13,tocIndex:2},{value:"React.Children.map \u4F1A\u9ED8\u8BA4\u5C55\u5E73\u591A\u7EF4\u6570\u7EC4",paraId:14,tocIndex:2},{value:"\u8FED\u4EE3\u5668\u4E5F\u53EF\u4EE5\u652F\u6301\u8F93\u51FA",paraId:15,tocIndex:2},{value:"React.Children.map \u7528\u6CD5",paraId:16,tocIndex:2},{value:`//\u7236\u7EC4\u4EF6
<Parent>
  <h1>Welcome.</h1>
  <h1>Welcome.</h1>
</Parent>
// Parent.js
render(){
  return <div>
    {
      React.children.map(result,(item)=>{
        return <span key={item}>{{item}}</span>
      })
    }
  </div>
}

//\u6B63\u786E\u5199\u6CD5
render(){
  return <div>
    {React.Children.map(['a'], () => {
        return <p>11</p>
    })}
  </div>
}

//\u9519\u8BEF\u5199\u6CD5 \u4F1A\u62A5\u9519
render(){
  return <div>
    {React.Children.map([{a:1}], () => {
        return <p>11</p>
    })}
  </div>
}
`,paraId:17,tocIndex:2},{value:"React.children.map \u6E90\u7801\u89E3\u6790",paraId:18,tocIndex:2},{value:"react/src/ReactChildren.js",paraId:19,tocIndex:2},{value:"\u4E3B\u8981\u662F\u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC\u9762",paraId:19,tocIndex:2},{value:`function mapChildren(children, func, context) {
  //\u5982\u679C\u4F20\u5165\u7684\u662Fnull \u76F4\u63A5\u8FD4\u56DEnull
  if (children == null) {
    return children;
  }
  const result = [];
  //\u5904\u7406\u6570\u7EC4
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  let escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  const traverseContext = getPooledTraverseContext(
    array,
    escapedPrefix,
    func,
    context,
  );
  // \u5C06\u5D4C\u5957\u7684\u6570\u7EC4\u5C55\u5E73
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
`,paraId:20,tocIndex:2},{value:"\u4E3A\u4EC0\u4E48\u8981\u7528 fiber \u8C03\u5EA6\uFF0C \u5B83\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F",paraId:21,tocIndex:3},{value:"react16",paraId:22,tocIndex:3},{value:"\u4EE5\u524D\u7684\u8C03\u5EA6\u7B97\u6CD5, \u91C7\u7528\u81EA\u9876\u5411\u4E0B\u9012\u5F52\uFF0C\u66F4\u65B0\u6574\u4E2A\u5B50\u6811\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4E0D\u53EF\u6253\u65AD\uFF0C\u4E0D\u53EF\u53D6\u6D88\uFF0C\u5982\u679C\u5B50\u6811\u7279\u522B\u5927\u7684\u8BDD\uFF0C\u4E3B\u7EBF\u7A0B\u5C31\u4F1A\u4E00\u76F4\u88AB\u5360\u7528\uFF0C\u4F1A\u9020\u6210\u9875\u9762\u7684\u6389\u5E27\uFF0C\u51FA\u73B0\u5361\u987F\u3002",paraId:22,tocIndex:3},{value:"react16",paraId:23,tocIndex:3},{value:"\u63A8\u51FA\u7684",paraId:23,tocIndex:3},{value:"fiber",paraId:23,tocIndex:3},{value:"\u8C03\u5EA6\uFF0C \u5206\u4E3A\u4E24\u4E2A\u9636\u6BB5\uFF0C\u4E00\u4E2A\u662F",paraId:23,tocIndex:3},{value:"reconciliation",paraId:23,tocIndex:3},{value:"\u9636\u6BB5\uFF0C\u4E8C\u662F",paraId:23,tocIndex:3},{value:"commit",paraId:23,tocIndex:3},{value:"\u9636\u6BB5\uFF0C\u5728",paraId:23,tocIndex:3},{value:"reconciliation",paraId:23,tocIndex:3},{value:"\u9636\u6BB5\uFF1Afiber \u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u4EE5",paraId:23,tocIndex:3},{value:"fiber",paraId:23,tocIndex:3},{value:"\u4E3A\u57FA\u672C\u5355\u4F4D\uFF0C\u6BCF\u6267\u884C\u5B8C\u4E00\u4E2A",paraId:23,tocIndex:3},{value:"fiber",paraId:23,tocIndex:3},{value:"\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u8BE2\u95EE\u662F\u5426\u6709\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u4EFB\u52A1\u7684\u4E00\u4E2A\u5224\u65AD\uFF0C\u5982\u679C\u6709\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u4EFB\u52A1\u8FDB\u6765\uFF0C\u5C31\u4E2D\u65AD\u5F53\u524D\u6267\u884C\uFF0C\u5148\u6267\u884C\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u4EFB\u52A1\u3002\u8FD9\u4E2A\u9636\u6BB5\u4F1A\u8FDB\u884C",paraId:23,tocIndex:3},{value:"dom diff",paraId:23,tocIndex:3},{value:"\uFF0C \u751F\u6210",paraId:23,tocIndex:3},{value:"workInProgressTree",paraId:23,tocIndex:3},{value:",\u5E76\u6807\u8BB0\u597D\u6240\u6709\u7684",paraId:23,tocIndex:3},{value:"side effect",paraId:23,tocIndex:3},{value:"\u3002",paraId:23,tocIndex:3},{value:"\u6570\u503C\u7ED3\u6784\u53D8\u6210\u4E86\u94FE\u8868\u7ED3\u6784",paraId:24,tocIndex:3},{value:"\u4EFB\u52A1+\u8FC7\u671F\u65F6\u95F4/\u4F18\u5148\u7EA7",paraId:24,tocIndex:3},{value:"reconciliation",paraId:24,tocIndex:3},{value:"\u53EF\u4EE5\u88AB\u6253\u65AD\uFF0C\u4E0D\u4F1A\u6E32\u67D3\u5230\u9875\u9762\u4E0A\u7684\uFF1B",paraId:24,tocIndex:3},{value:"commit",paraId:24,tocIndex:3},{value:"\u9636\u6BB5\uFF0C\u4E00\u6B21\u6267\u884C\u5B8C\u3002side effect",paraId:24,tocIndex:3},{value:"commit \u9636\u6BB5\uFF0C\u5904\u7406\u6240\u6709\u7684 side effect \uFF0C \u6267\u884C\u66F4\u65B0\u64CD\u4F5C\u3002\u6B64\u9636\u6BB5\u4E0D\u53EF\u4E2D\u65AD",paraId:25,tocIndex:3},{value:"\u521B\u5EFA Root\uFF0C ReactRoot, FiberRoot , FiberNode,\u4ED6\u4EEC\u4E4B\u95F4\u7684\u5C5E\u6027\u662F\uFF1A",paraId:26,tocIndex:4},{value:`  Root: {
    _reactRootContainer: RootType
  }

  RootType: {
    _internalRoot: FiberRoot
  }

  FiberRoot: {
      // \u5F53\u524D\u5E94\u7528\u5BF9\u5E94\u7684Fiber\u5BF9\u8C61
    current: uninitializedFiber, FiberNode
    // root\u8282\u70B9
    containerInfo: containerInfo,
    // \u6307\u5411\u5F53\u524D\u5DF2\u7ECF\u5B8C\u6210\u51C6\u5907\u5DE5\u4F5C\u7684Fiber Tree Root\uFF0C \u5728commit\u9636\u6BB5\u5904\u7406
    finishedWork: null, // Fiber, \u94FE\u8868\u7ED3\u6784
    // \u8FC7\u671F\u65F6\u95F4
    expirationTime: NoWork,
  }

  FiberNode : {
    // FiberNode\u7684\u7C7B\u578B
    this.tag = tag;
    this.key = key;
    this.elementType = null;
    // Function|String|Symbol|Number|Object
    this.type = null;
    this.stateNode = null;
    // \u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u7684
    // Fiber  \u8868\u793A\u7236\u7EA7 FiberNode
    this.return = null;
    // \u8868\u793A\u7B2C\u4E00\u4E2A\u5B50 FiberNode
    this.child = null;
    // \u8868\u793A\u7D27\u7D27\u76F8\u90BB\u7684\u4E0B\u4E00\u4E2A\u5144\u5F1F FiberNode
    this.sibling = null;
    this.index = 0;
    // \u62FF\u5230\u771F\u5B9E\u7684dom\u5B9E\u4F8B
    this.ref = null;
    // \u8868\u793A\u65B0\u7684props
    this.pendingProps = pendingProps;
    // \u5F53\u524Dfiber\u7684\u65E7props
    this.memoizedProps = null;
    // \u66F4\u65B0\u961F\u5217\uFF0C\u961F\u5217\u5185\u653E\u7740\u5373\u5C06\u8981\u53D1\u751F\u7684\u53D8\u66F4\u72B6\u6001
    this.updateQueue = null; // \u6700\u7EC8\u4F1A\u904D\u5386\u8FD9\u4E2Aupdate\u94FE\u8868
    // \u8868\u793A\u7ECF\u8FC7\u6240\u6709\u6D41\u7A0B\u5904\u7406\u540E\u7684\u5F53\u524D\u7684state
    this.memoizedState = null;
    this.contextDependencies = null;

    this.mode = mode;

    // effectTag \u66F4\u65B0\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF0C replace\uFF0C delete\uFF0C update
    this.effectTag = NoEffect;
    // \u4E0B\u4E00\u4E2A\u5C06\u8981\u5904\u7406\u7684\u526F\u4F5C\u7528F
    this.nextEffect = null;
    // \u7B2C\u4E00\u4E2A\u9700\u8981\u5904\u7406\u7684\u526F\u4F5C\u7528
    this.firstEffect = null;
    // \u6700\u540E\u4E00\u4E2A\u5C06\u8981\u5904\u7406\u7684\u526F\u4F5C\u7528F
    this.lastEffect = null;
    // \u8FC7\u671F\u65F6\u95F4\u662F\u548C\u4F18\u5148\u7EA7\u6709\u5173
    this.expirationTime = NoWork;
    // \u5B50fiber\u4E2D\u4F18\u5148\u7EA7\u6700\u9AD8\u7684filber
    this.childExpirationTime = NoWork;
    // \u8FDE\u63A5\u4E0A\u4E00\u4E2A\u72B6\u6001\u7684fiber\uFF0C\u50A8\u5B58\u4E86\u4E4B\u524D\u7684\u955C\u50CF
    this.alternate = null; // \u4E0A\u4E00\u6B21\u66F4\u65B0\u65F6\u7684\u65E7Fiber = WorkInProgress.alternate
  }
`,paraId:27,tocIndex:4},{value:"\u5C01\u88C5\u4E86",paraId:28,tocIndex:4},{value:"callBack",paraId:28,tocIndex:4},{value:"\u51FD\u6570",paraId:28,tocIndex:4},{value:"\u6267\u884C\u4E86",paraId:29,tocIndex:4},{value:"unbatchedUpdates",paraId:29,tocIndex:4},{value:"\uFF0C \u8C03\u7528",paraId:29,tocIndex:4},{value:"updateContainer",paraId:29,tocIndex:4},{value:"\uFF08\u4EE5\u975E\u6279\u5904\u7406\u7684\u5F62\u5F0F\u8FD0\u884C\uFF09",paraId:29,tocIndex:4},{value:"updateContainer",paraId:30,tocIndex:4},{value:"\u8BBE\u7F6E",paraId:31,tocIndex:4},{value:"expirationTime",paraId:31,tocIndex:4},{value:"\u5C01\u88C5",paraId:32,tocIndex:4},{value:"callback",paraId:32,tocIndex:4},{value:"\u65B0\u5EFA\u4E00\u4E2A",paraId:33,tocIndex:4},{value:"update",paraId:33,tocIndex:4},{value:"\uFF0C\u6DFB\u52A0\u5230",paraId:33,tocIndex:4},{value:"fiber",paraId:33,tocIndex:4},{value:"\u7684",paraId:33,tocIndex:4},{value:"updateQuene",paraId:33,tocIndex:4},{value:"\u91CC",paraId:33,tocIndex:4},{value:`{
  expirationTime: expirationTime,
  tag: UpdateState,
  payload: null,   // element
  callback: null,  // callback

  next: null,  // \u4E0B\u4E00\u4E2Aupdate
  nextEffect: null,  // \u4E0B\u4E00\u4E2A\u526F\u4F5C\u7528
}
`,paraId:34,tocIndex:4},{value:"\u8C03\u7528 ",paraId:35,tocIndex:5},{value:"scheduleWork",paraId:35,tocIndex:5},{value:" (\u53EA\u8981\u6D89\u53CA\u5230\u66F4\u65B0\uFF0C\u90FD\u4F1A\u4ECE\u8FD9\u91CC\u5F00\u59CB\u8D70, ",paraId:35,tocIndex:5},{value:"this.setState",paraId:35,tocIndex:5},{value:")",paraId:35,tocIndex:5},{value:"\u627E\u5230",paraId:36,tocIndex:5},{value:"FiberRoot",paraId:36,tocIndex:5},{value:"\u5224\u65AD\u662F\u5426\u6709\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u6253\u65AD\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1",paraId:37,tocIndex:5},{value:"\u5982\u679C\u6709\u6700\u9AD8\u4F18\u5148\u7EA7\u800C\u4E14\u5904\u4E8E",paraId:38,tocIndex:5},{value:"unbatchUpdate",paraId:38,tocIndex:5},{value:"\u4E0B\u6267\u884C",paraId:38,tocIndex:5},{value:"performSyncWorkOnRoot",paraId:38,tocIndex:5},{value:"\u5176\u5B83\u8C03\u7528",paraId:39,tocIndex:5},{value:"ensureRootIsScheduled",paraId:39,tocIndex:5},{value:"\u8FDB\u5165\u5F02\u6B65\u8C03\u5EA6\u6D41\u7A0B",paraId:39,tocIndex:5},{value:"\u6B64\u5904\u4F1A\u5224\u65AD\u662F\u5426\u6709\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u4EFB\u52A1\u8FDB\u6765\uFF0C\u5982\u679C\u6709\uFF0C\u4F1A\u4E2D\u65AD\u73B0\u5728\u7684\u4EFB\u52A1\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u7EE7\u7EED\u6267\u884C",paraId:40,tocIndex:6},{value:"\u533A\u5206\u5EF6\u65F6\u4EFB\u52A1(",paraId:41,tocIndex:7},{value:"timeQuene",paraId:41,tocIndex:7},{value:")\u548C\u53CA\u65F6\u4EFB\u52A1(",paraId:41,tocIndex:7},{value:"taskQuene",paraId:41,tocIndex:7},{value:")\uFF0C\u521B\u5EFA\u4EFB\u52A1",paraId:41,tocIndex:7},{value:"\u5B58\u5728\u53CA\u65F6\u4EFB\u52A1\uFF0C\u8C03\u7528",paraId:41,tocIndex:7},{value:"requestHostCallback",paraId:41,tocIndex:7},{value:"\u521B\u5EFA ",paraId:42,tocIndex:8},{value:"MessageChannel",paraId:42,tocIndex:8},{value:"\u8C03\u7528",paraId:43,tocIndex:8},{value:"port.postMessage",paraId:43,tocIndex:8},{value:",\u6839\u636E ",paraId:43,tocIndex:8},{value:"MessageChannel",paraId:43,tocIndex:8},{value:"\u7684\u7279\u6027\uFF0C\u8C03\u7528",paraId:43,tocIndex:8},{value:"port.postMessage",paraId:43,tocIndex:8},{value:"\u540E\uFF0C\u4F1A\u5728\u5B8F\u4EFB\u52A1\u91CC\u6267\u884C",paraId:43,tocIndex:8},{value:"performWorkUntileDeadLine",paraId:43,tocIndex:8},{value:"\u5728",paraId:44,tocIndex:8},{value:"performWorkUntileDeadLine",paraId:44,tocIndex:8},{value:"\u4F1A\u9010\u6B65\u6839\u636E\u5F53\u524D\u65F6\u95F4\u5427\u5EF6\u65F6\u4EFB\u52A1\u6DFB\u52A0\u5230\u53CA\u65F6\u4EFB\u52A1",paraId:44,tocIndex:8},{value:"\u5728\u5B8F\u4EFB\u52A1\u4E2D\u6267\u884C",paraId:45,tocIndex:8},{value:"callback",paraId:45,tocIndex:8},{value:",\u4E5F\u5C31\u662F",paraId:45,tocIndex:8},{value:"performSyncWorkOnRoot",paraId:45,tocIndex:8},{value:"\u5982\u679C\u5B58\u5728\u5B50\u4EFB\u52A1\uFF0C\u5219\u9012\u5F52\u6267\u884C",paraId:46,tocIndex:8},{value:"performWorkUntileDeadLine",paraId:46,tocIndex:8},{value:"\u6B64\u5904\u53EA\u8981\u6267\u884C\u529B\u4E09\u4E2A\u64CD\u4F5C\uFF1A",paraId:47,tocIndex:10},{value:"\u6807\u8BB0\u4E0A\u4E0B\u6587\u4E3A",paraId:48,tocIndex:10},{value:"RenderContext",paraId:48,tocIndex:10},{value:"\u6267\u884C",paraId:48,tocIndex:10},{value:"workLoopSync",paraId:48,tocIndex:10},{value:"\u9012\u5F52\u521B\u5EFA",paraId:48,tocIndex:10},{value:"fiber tree",paraId:48,tocIndex:10},{value:"\u6807\u8BB0\u526F\u4F5C\u7528\uFF0C",paraId:48,tocIndex:10},{value:"render",paraId:48,tocIndex:10},{value:"\u4EE5\u53CA\u4E4B\u524D\u7684\u751F\u547D\u5468\u671F\u90FD\u5C06\u5728\u6B64\u9636\u6BB5\u6267\u884C",paraId:48,tocIndex:10},{value:"\u8C03\u7528",paraId:48,tocIndex:10},{value:"finishSyncRender",paraId:48,tocIndex:10},{value:",\u6E32\u67D3\u9875\u9762\uFF0C\u6267\u884C\u5269\u4E0B\u7684\u751F\u547D\u5468\u671F",paraId:48,tocIndex:10},{value:"\u8C03\u7528",paraId:49,tocIndex:10},{value:"beginWork",paraId:49,tocIndex:10},{value:"\uFF0C\u5728",paraId:49,tocIndex:10},{value:"beginWork",paraId:49,tocIndex:10},{value:"\u521B\u5EFA",paraId:49,tocIndex:10},{value:"Fiber",paraId:49,tocIndex:10},{value:"\u8282\u70B9\uFF0C\u5982\u679C",paraId:49,tocIndex:10},{value:"Next",paraId:49,tocIndex:10},{value:"\u8282\u70B9\u4E0D\u4E3A\u7A7A\uFF0C\u7EE7\u7EED\u5904\u7406",paraId:49,tocIndex:10},{value:"next",paraId:49,tocIndex:10},{value:"\u8282\u70B9\uFF0C\u76F4\u5230",paraId:49,tocIndex:10},{value:"next",paraId:49,tocIndex:10},{value:"\u4E3A null \u8BF4\u660E\u5DF2\u7ECF\u521B\u5EFA\u5B8C\u6574\u4E2A",paraId:49,tocIndex:10},{value:"Fiber tree",paraId:49,tocIndex:10},{value:"\u4E86\uFF0C\u4E4B\u540E\u8C03\u7528",paraId:49,tocIndex:10},{value:"completeUnitOfWork",paraId:49,tocIndex:10},{value:"\uFF0C\u521B\u5EFA Dom \u5BF9\u8C61\u7B49\u3002\u6CE8\u610F\uFF1A ",paraId:49,tocIndex:10},{value:"completeUnitOfWork",paraId:49,tocIndex:10},{value:"\u9636\u6BB5\u867D\u7136\u521B\u5EFA\u4E86 dom \u5BF9\u8C61\uFF0C\u4F46\u662F\u8FD8\u4E0D\u4F1A\u6E32\u67D3\u5230\u9875\u9762\u4E0A\uFF0C\u53EA\u662F\u4FDD\u5B58\u7740\u3002",paraId:49,tocIndex:10},{value:"beginWork",paraId:50,tocIndex:10},{value:"\u521D\u6B21\u5219\u521B\u5EFA",paraId:51,tocIndex:10},{value:"fiber",paraId:51,tocIndex:10},{value:"\u8282\u70B9",paraId:51,tocIndex:10},{value:"\u975E\u521D\u6B21\u5219\u8FDB\u884C",paraId:51,tocIndex:10},{value:"diff",paraId:51,tocIndex:10},{value:",\u6253\u4E0A",paraId:51,tocIndex:10},{value:"Effect",paraId:51,tocIndex:10},{value:"\u66F4\u65B0\u6807\u8BB0",paraId:51,tocIndex:10},{value:"\u6267\u884C",paraId:51,tocIndex:10},{value:"render",paraId:51,tocIndex:10},{value:"\u4E4B\u524D\u7684\u751F\u547D\u5468\u671F\uFF0C\u4EE5\u53CA\u6267\u884C",paraId:51,tocIndex:10},{value:"render",paraId:51,tocIndex:10},{value:"\u751F\u547D\u5468\u671F\uFF0C\u83B7\u5F97\u5B50\u8282\u70B9\uFF0C\u7EE7\u7EED\u5FAA\u73AF\u6267\u884C",paraId:51,tocIndex:10},{value:"beginWork",paraId:51,tocIndex:10},{value:"\u94FE\u63A5\u4E0A\u7236\u7EA7\u8282\u70B9\uFF0C\u5F62\u6210",paraId:51,tocIndex:10},{value:"FiBer tree",paraId:51,tocIndex:10},{value:"\u53C2\u8003\u8D44\u6599",paraId:52,tocIndex:10},{value:"react \u5B98\u7F51",paraId:53,tocIndex:10}]}}]);
