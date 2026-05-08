"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[3883],{56691:function(t,s,a){a.r(s);var l=a(72269),c=a(93359),r=a(61788),x=a(19977),m=a(25809),_=a(90978),h=a(96057),I=a(83213),i=a(53683),d=a(80936),o=a(67294),n=a(45340),e=a(85893);function u(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"gitlab-cicd",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#gitlab-cicd",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"gitlab CI/CD"]}),(0,e.jsxs)("p",{children:[n.texts[0].value,(0,e.jsx)("code",{children:n.texts[1].value}),n.texts[2].value]}),(0,e.jsxs)("h2",{id:"gitlab-ciyml-\u653E\u5728\u54EA\u91CC",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#gitlab-ciyml-\u653E\u5728\u54EA\u91CC",children:(0,e.jsx)("span",{className:"icon icon-link"})}),".gitlab-ci.yml \u653E\u5728\u54EA\u91CC\uFF1F"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n.texts[3].value}),n.texts[4].value]}),(0,e.jsxs)("h2",{id:"gitlab-ciyml-\u5E38\u7528\u7684\u6B65\u9AA4",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#gitlab-ciyml-\u5E38\u7528\u7684\u6B65\u9AA4",children:(0,e.jsx)("span",{className:"icon icon-link"})}),".gitlab-ci.yml \u5E38\u7528\u7684\u6B65\u9AA4"]}),(0,e.jsxs)("p",{children:[n.texts[5].value,(0,e.jsx)("code",{children:n.texts[6].value}),n.texts[7].value]}),(0,e.jsx)(_.Z,{lang:"js",children:n.texts[8].value}),(0,e.jsx)("p",{children:n.texts[9].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[10].value}),n.texts[11].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[12].value}),n.texts[13].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[14].value}),n.texts[15].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[16].value}),n.texts[17].value]})]})]})})})})}s.default=u},45340:function(t,s,a){a.r(s),a.d(s,{texts:function(){return l}});const l=[{value:"gitlab \u7F51\u7AD9\u91CC\u9762\u6211\u4EEC\u770B\u5230\u6709 CI/CD \u7684\u6253\u5305\u6D41\u7A0B\uFF0C\u4F46\u662F\u6211\u4EEC\u90FD\u4E0D\u77E5\u9053\u5230\u5E95\u662F\u600E\u4E48\u914D\u7F6E\u7684\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C31\u6765\u770B\u4E00\u4E0B",paraId:0,tocIndex:0},{value:".gitlab-ci.yml",paraId:0,tocIndex:0},{value:"\u6587\u4EF6\u662F\u600E\u4E48\u7F16\u5199\u7684\u3002",paraId:0,tocIndex:0},{value:".gitlab-ci.yml",paraId:1,tocIndex:1},{value:"\u4E3B\u8981\u662F\u653E\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u9762",paraId:1,tocIndex:1},{value:"\u4E0B\u9762\u662F\u4E00\u4E2A\u9879\u76EE\u91CC\u9762",paraId:2,tocIndex:2},{value:".gitlab-ci.yml",paraId:2,tocIndex:2},{value:"\u7684\u6B65\u9AA4\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u90FD\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",paraId:2,tocIndex:2},{value:`variables:  //\u5B9A\u4E49\u6784\u5EFA\u53D8\u91CF
  TARGET_REPO: ""

before_script: //\u8FD9\u4E2A\u662F\u6267\u884C\u6BCF\u4E2Ajob\u4E4B\u524D\u9700\u8981\u6267\u884C\u7684\u811A\u672C\uFF0C
  - chcp 65001  //\u8BBE\u7F6Ecmd\u683C\u5F0F\uFF0C\u6570\u5B5765001\u4EE3\u8868\u7684\u662Fcmd\u7A97\u53E3\u4E2Dutf-8\u683C\u5F0F\u7684\u7F16\u7801
  - 'git config core.autocrlf false'

stages:  //\u5B9A\u4E49\u811A\u672C\u6709\u591A\u5C11\u9636\u6BB5(\u4E13\u4E1A\u70B9\u53EBjob)\uFF0C\u8FD9\u91CC\u6709\u4E09\u4E2Ajob,\u6BCF\u4E2Ajob\u90FD\u8981\u7528-\u5F00\u5934\u6362\u884C
  - install
  - package
  - push

install: //\u8FD9\u91CC\u5C31\u5F00\u59CB\u5DE5\u4F5C\u4E86
  stage: install  //\u8FD9\u91CC\u5BF9\u5E94\u7684\u662F\u4E0A\u9762\u7684stagets\u7684install\uFF0C\u4E00\u5B9A\u8981\u4E00\u81F4
  script:    //\u6267\u884C\u547D\u4EE4\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u90FD\u662F\u540C\u6B65\u7684
  - npm run init
  cache: //\u91CD\u590D\u8FD0\u884C\u7684\u65F6\u5019\u4E0D\u8981\u91CD\u590D\u5B89\u88C5\u5168\u90E8node_modules\u7684\u5305\uFF0C1\u3001\u5728\u4E0D\u540Cpipeline\u4E4B\u95F4\u91CD\u7528\u8D44\u6E90\uFF0C2\u3001\u5728\u540C\u4E00pipeline\u7684\u4E0D\u540CJob\u4E4B\u95F4\u91CD\u7528\u8D44\u6E90
    key: \${CI_COMMIT_REF_SLUG}
    paths:
    - node_modules/
  only:  //\u8868\u793A\u4EC5\u5728dev/master\u5206\u652F\u4E0A\u6267\u884C
    refs:
      - dev
      - master
    variables:
        - $NPM_INSTALL == "true"
  when: manual   //\u5B9A\u4E49job\u4EC0\u4E48\u65F6\u5019\u80FD\u88AB\u6267\u884C,on_success,on_failure,always\u6216\u8005manual

package:
  stage: package
  script:
  - echo "\${CI_PROJECT_DIR}"
  - npm run build:micro --releasepath=../CivWebPublish2021
  cache:
    key: \${CI_COMMIT_REF_SLUG}
    paths:
    - node_modules/
  only:
    refs:
      - dev
      - master
  when: manual


push:
  variables:
    GIT_STRATEGY: none
  stage: push
  script:
  - 'cd "\${TARGET_REPO}"'
  - 'git reset --hard head'
  - 'git clean -fd'
  - 'git remote set-url origin "https://\${ACCESS_USER}:\${ACCESS_PASSWORD}@g.civnet.cn:8443/CivPublish/CivWebPublish2021.git"'
  - 'git pull origin map'
  - 'git rm -rf "\${TARGET_REPO}/civ_water"'
  - 'git commit -m "chore: clear folder"'
  - 'git push origin map'
  - 'robocopy "\${CI_PROJECT_DIR}/../CivWebPublish2021/civ_water" "\${TARGET_REPO}/civ_water" /S ;
        IF ((\${LASTEXITCODE} -le 8)) {cmd /c "exit /b 0"}'
  - 'git add . ; git reset HEAD Web.config CityInterface/Web.config CityWebFW/Web.config ; git commit -m "auto package civ_water."'
  - 'git push origin map'
  only:
    refs:
      - dev
      - master
  when: manual
`,paraId:3,tocIndex:2},{value:"when \u7684\u51E0\u4E2A\u503C\uFF1A",paraId:4,tocIndex:2},{value:"on_success",paraId:5,tocIndex:2},{value:" \u53EA\u6709\u5728\u4E4B\u524D\u573A\u666F\u6267\u884C\u7684\u6240\u6709\u4F5C\u4E1A\u6210\u529F\u7684\u65F6\u5019\u624D\u6267\u884C\u5F53\u524D job\uFF0C\u8FD9\u4E2A\u5C31\u662F\u9ED8\u8BA4\u503C\uFF0C\u6211\u4EEC\u7528\u6700\u5C0F\u914D\u7F6E\u7684\u65F6\u5019\u4ED6\u9ED8\u8BA4\u5C31\u662F\u8FD9\u4E2A\u503C\uFF0C\u6240\u4EE5\u5931\u8D25\u7684\u65F6\u5019 pipeline \u4F1A\u505C\u6B62\u6267\u884C\u540E\u7EED\u4EFB\u52A1",paraId:5,tocIndex:2},{value:"on_failure",paraId:5,tocIndex:2},{value:" \u53EA\u6709\u5728\u4E4B\u524D\u573A\u666F\u6267\u884C\u7684\u4EFB\u52A1\u4E2D\u81F3\u5C11\u6709\u4E00\u4E2A\u5931\u8D25\u7684\u65F6\u5019\u624D\u6267\u884C",paraId:5,tocIndex:2},{value:"always",paraId:5,tocIndex:2},{value:" \u4E0D\u7BA1\u4E4B\u524D\u573A\u666F\u9636\u6BB5\u7684\u72B6\u6001\uFF0C\u603B\u662F\u6267\u884C",paraId:5,tocIndex:2},{value:"manual",paraId:5,tocIndex:2},{value:" ~\u624B\u52A8\u6267\u884C job \u7684\u65F6\u5019\u89E6\u53D1",paraId:5,tocIndex:2}]}}]);
