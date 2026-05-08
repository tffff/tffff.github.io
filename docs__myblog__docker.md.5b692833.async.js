"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[5634],{68882:function(s,e,o){o.r(e);var n=o(72269),c=o(93359),u=o(61788),m=o(19977),E=o(25809),d=o(90978),h=o(96057),f=o(83213),r=o(53683),t=o(80936),l=o(67294),a=o(15975),_=o(85893);function i(){return(0,_.jsx)(r.dY,{children:(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(t.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"docker-\u7684\u547D\u4EE4\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker-\u7684\u547D\u4EE4\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"docker \u7684\u547D\u4EE4\u4F7F\u7528"]}),(0,_.jsx)(d.Z,{lang:"bash",children:a.texts[0].value})]})})})})}e.default=i},15975:function(s,e,o){o.r(e),o.d(e,{texts:function(){return n}});const n=[{value:`# \u67E5\u770Bdocker\u5BB9\u5668\u955C\u50CF
[root@localhost] docker images

# \u67E5\u770B\u6240\u4EE5\u670D\u52A1\u542F\u52A8\u72B6\u6001
[root@localhost] docker ps

# \u5BFC\u5165\u955C\u50CF
[root@localhost] docker load -i [\u955C\u50CF\u540D]

# \u542F\u52A8 \u505C\u6B62 \u91CD\u542F\u67D0\u4E2A\u670D\u52A1
[root@localhost] docker start/stop/restart  [\u5BB9\u5668id]

# docker-compose up \u547D\u4EE4\u6765\u542F\u52A8\u5E76\u8FD0\u884C\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F,\u5FC5\u987B\u6709docker-compose.yml\u6587\u4EF6
# -d\u662F\u540E\u53F0\u8FD0\u884C
[root@localhost] docker-compose up -d

# \u505C\u6B62\u6240\u6709\u5BB9\u5668
[root@localhost] docker stop $(docker ps -a -q)

# \u5220\u9664\u67D0\u4E2A\u5BB9\u5668\u670D\u52A1
[root@localhost] docker rm  1e560fca3906

# \u5220\u9664\u6240\u6709\u5BB9\u5668\u670D\u52A1
[root@localhost] docker rm $(docker ps -a -q)

# \u5220\u9664\u6240\u6709\u5BB9\u5668\u955C\u50CF
[root@localhost] docker rmi $(docker images -q)

# \u67E5\u770B\u67D0\u4E2A\u670D\u52A1\u65E5\u5FD7
# --tail :\u4EC5\u5217\u51FA\u6700\u65B0N\u6761\u5BB9\u5668\u65E5\u5FD7
# -f : \u8DDF\u8E2A\u65E5\u5FD7\u8F93\u51FA
[root@localhost] docker logs -f --tail=100 [\u5BB9\u5668id]

# \u4FEE\u6539docker\u955C\u50CF\u7684\u9ED8\u8BA4\u5B58\u50A8\u4F4D\u7F6E
# 1.\u5148\u5B89\u88C5 vim /etc/docker/daemon.json,\u6DFB\u52A0\u4E0B\u9762\u7684\u4EE3\u7801
{
 "exec-opts": [
    "native.cgroupdriver=systemd"
  ],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2",
  "registry-mirrors": [
    "https://ot2k4d59.mirror.aliyuncs.com/"
  ],
  "data-root": "/workspace/docker", //\u6DFB\u52A0\u8FD9\u4E00\u884C
  "insecure-registries": ["10.10.102.75"]
}
# 2.\u7136\u540E\u91CD\u542Fdocker\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230docker\u6302\u8F7D\u7684\u8DEF\u5F84\u53D8\u4E86

`,paraId:0,tocIndex:0}]}}]);
