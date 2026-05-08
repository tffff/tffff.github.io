"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[4561],{44561:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"ref",paraId:0,tocIndex:1},{value:":\u7528\u6765\u7ED9\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7ED1\u5B9A\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C",paraId:0,tocIndex:1},{value:"script",paraId:0,tocIndex:1},{value:"\u91CC\u9762\u8BBF\u95EE\u65F6\u9700\u8981\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:".value",paraId:0,tocIndex:1},{value:" \u7684\u5F62\u5F0F\uFF0C ",paraId:0,tocIndex:1},{value:"tamplate",paraId:0,tocIndex:1},{value:"\u91CC\u9762\u4F7F\u7528\u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u89E3\u6790,\u4E0D\u9700\u8981",paraId:0,tocIndex:1},{value:".value",paraId:0,tocIndex:1},{value:"reactive",paraId:0,tocIndex:1},{value:": \u7528\u6765\u7ED9\u590D\u6742\u6570\u636E\u7C7B\u578B\u7ED1\u5B9A\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u76F4\u63A5\u8BBF\u95EE\u5373\u53EF;",paraId:0,tocIndex:1},{value:`  <template>
  <p>{{ count }}</p>
  <a-button @click="handleAdd">\u70B9\u51FB+1</a-button>
  <p>{{ person.age }}</p>
  <a-button @click="handleAddAge">\u5E74\u9F84+1</a-button>
</template>
<script setup lang="ts">
import { ref, Ref, reactive } from "vue";

//\u7528\u63A5\u53E3\u6765\u5B9A\u4E49\u5BF9\u8C61\u7684\u7C7B\u578B
interface Person {
  name: string;
  age: number;
  sex?: string;
}

const count: Ref<number> = ref(0);
const handleAdd = () => {
  count.value++;
};
const person: Person = reactive({
  name: "\u674E\u5B50\u6728",
  age: 18,
});
const handleAddAge = () => {
  person.age++;
  console.log(person); //{name: '\u674E\u5B50\u6728', age: 24}
};
<\/script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
`,paraId:1,tocIndex:1},{value:"ref \u548C reactive \u7684\u533A\u522B",paraId:2,tocIndex:1},{value:`\u4ECE\u5B9A\u4E49\u6570\u636E\u65B9\u9762\uFF1A
`,paraId:3,tocIndex:1},{value:"ref",paraId:4,tocIndex:1},{value:" \u901A\u5E38\u7528\u6765\u5B9A\u4E49\u57FA\u672C\u7C7B\u578B\u6570\u636E",paraId:4,tocIndex:1},{value:"reactive",paraId:4,tocIndex:1},{value:" \u7528\u6765\u5B9A\u4E49\uFF1A\u5BF9\u8C61\uFF08\u6216\u8005\u6570\u7EC4\uFF09\u7C7B\u578B\u6570\u636E",paraId:4,tocIndex:1},{value:"ref",paraId:4,tocIndex:1},{value:" \u4E5F\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5185\u90E8\u4F1A\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"reactive",paraId:4,tocIndex:1},{value:" \u8F6C\u4E3A\u4EE3\u7406\u5BF9\u8C61",paraId:4,tocIndex:1},{value:`\u4ECE\u539F\u7406\u65B9\u9762\uFF1A
`,paraId:3,tocIndex:1},{value:"ref",paraId:5,tocIndex:1},{value:" \u901A\u8FC7 ",paraId:5,tocIndex:1},{value:"Object.defineProperty()",paraId:5,tocIndex:1},{value:"\u7684 ",paraId:5,tocIndex:1},{value:"get",paraId:5,tocIndex:1},{value:" \u548C ",paraId:5,tocIndex:1},{value:"set",paraId:5,tocIndex:1},{value:" \u5B9E\u73B0\u6570\u636E\u4EE3\u7406\u3002",paraId:5,tocIndex:1},{value:"reactive",paraId:5,tocIndex:1},{value:" \u4F7F\u7528 ",paraId:5,tocIndex:1},{value:"Proxy",paraId:5,tocIndex:1},{value:" \u5B9E\u73B0\u6570\u636E\u4EE3\u7406\uFF0C\u5E76\u4E14\u901A\u8FC7 ",paraId:5,tocIndex:1},{value:"Reflect",paraId:5,tocIndex:1},{value:" \u64CD\u4F5C\u6E90\u5BF9\u8C61\u5185\u90E8\u7684\u6570\u636E\u3002",paraId:5,tocIndex:1},{value:`\u4ECE\u4F7F\u7528\u65B9\u9762\uFF1A
`,paraId:3,tocIndex:1},{value:"ref",paraId:6,tocIndex:1},{value:" \u5728",paraId:6,tocIndex:1},{value:"script",paraId:6,tocIndex:1},{value:"\u4E2D\u64CD\u4F5C\u6570\u636E\u9700\u8981",paraId:6,tocIndex:1},{value:".value",paraId:6,tocIndex:1},{value:",\u5728",paraId:6,tocIndex:1},{value:"template",paraId:6,tocIndex:1},{value:" \u6A21\u677F\u4E2D\u4E0D\u9700\u8981\u3002",paraId:6,tocIndex:1},{value:"reactive",paraId:6,tocIndex:1},{value:" \u90FD\u4E0D\u9700\u8981",paraId:6,tocIndex:1},{value:".value",paraId:6,tocIndex:1},{value:"ref",paraId:6,tocIndex:1},{value:"\u51FD\u6570\u53EA\u80FD\u64CD\u4F5C\u6D45\u5C42\u6B21\u7684\u6570\u636E\uFF0C\u628A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u5F53\u4F5C\u81EA\u5DF1\u7684\u5C5E\u6027\u503C\uFF1B\u6DF1\u5C42\u6B21\u4F9D\u8D56\u4E8E ",paraId:6,tocIndex:1},{value:"reactive",paraId:6,tocIndex:1},{value:"toRef",paraId:7,tocIndex:2},{value:": \u5982\u679C\u539F\u59CB\u5BF9\u8C61\u662F\u975E\u54CD\u5E94\u5F0F\u7684,\u6570\u636E\u4F1A\u53D8,\u4F46\u4E0D\u4F1A\u66F4\u65B0\u89C6\u56FE",paraId:7,tocIndex:2},{value:`<template>
  <p>{{ state1 }}</p>
  <a-button @click="handleAddAge1">\u5E74\u9F84+1</a-button>
</template>
<script setup lang="ts">
import { ref, Ref, reactive, toRef } from "vue";

//\u8FD9\u6837\u5199\u662F\u4E0D\u4F1A\u66F4\u65B0\u89C6\u56FE\u7684\uFF0C\u8981\u7528\u4E0B\u9762\u7684\u8FD9\u79CD\u5199\u6CD5
const person = {
  name: "\u674E\u5B50\u6728",
  age: 18,
};
const handleAddAge = () => {
  person.age++;
  console.log(person); //{name: '\u674E\u5B50\u6728', age: 24}
};
// \u4F7F\u7528toRef\u6765\u8FBE\u5230\u6570\u636E\u66F4\u65B0\u7684\u76EE\u7684\uFF0C\u4F46\u662F\u9875\u9762\u89C6\u56FE\u662F\u4E0D\u4F1A\u66F4\u65B0\u7684
const person1 = {
  name: "\u674E\u5B50\u6728",
  age: 18,
};
const state1 = toRef(person1, "age");
const handleAddAge1 = () => {
  state1.value++;
  console.log("person1", person1, "state1", state1);
};
<\/script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>

`,paraId:8,tocIndex:2},{value:"toRef",paraId:9,tocIndex:2},{value:" \u8FD4\u56DE\u7684\u503C\u662F\u5426\u5177\u6709\u54CD\u5E94\u6027\u53D6\u51B3\u4E8E\u88AB\u89E3\u6784\u7684\u5BF9\u8C61\u672C\u8EAB\u662F\u5426\u5177\u6709\u54CD\u5E94\u6027\u3002\u54CD\u5E94\u5F0F\u6570\u636E\u7ECF\u8FC7 ",paraId:9,tocIndex:2},{value:"toRef",paraId:9,tocIndex:2},{value:" \u8FD4\u56DE\u7684\u503C\u4ECD\u5177\u6709\u54CD\u5E94\u6027\uFF0C\u975E\u54CD\u5E94\u5F0F\u6570\u636E\u7ECF\u8FC7 ",paraId:9,tocIndex:2},{value:"toRef",paraId:9,tocIndex:2},{value:" \u8FD4\u56DE\u7684\u503C\u4ECD\u6CA1\u6709\u54CD\u5E94\u6027\u3002",paraId:9,tocIndex:2},{value:"toRefs",paraId:10,tocIndex:2},{value:": \u76F8\u5F53\u4E8E\u5BF9\u5BF9\u8C61\u5185\u6BCF\u4E2A\u5C5E\u6027\u8C03\u7528 ",paraId:10,tocIndex:2},{value:"toRef",paraId:10,tocIndex:2},{value:",",paraId:10,tocIndex:2},{value:"toRefs",paraId:10,tocIndex:2},{value:" \u8FD4\u56DE\u7684\u5BF9\u8C61\u5185\u7684\u5C5E\u6027\u4F7F\u7528\u65F6\u9700\u8981\u52A0",paraId:10,tocIndex:2},{value:".value",paraId:10,tocIndex:2},{value:",\u4E3B\u8981\u662F\u65B9\u4FBF\u6211\u4EEC\u89E3\u6784\u4F7F\u7528",paraId:10,tocIndex:2},{value:`<template>
  <p>{{ name }}---{{ age }}</p>
  <a-button @click="handleAddAge">\u70B9\u51FB+1</a-button>
</template>
<script setup lang="ts">
import { ref, Ref, reactive, toRefs } from "vue";
const person = reactive({
  name: "\u674E\u5B50\u6728",
  age: 18,
});
let { name, age } = toRefs(person);
const handleAddAge = () => {
  name.value = "\u674E\u5B50\u67D2";
  age.value = 19;
};
<\/script>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
`,paraId:11,tocIndex:2},{value:"\u5BF9\u8C61\u5FC5\u987B\u4E5F\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u8981\u4E0D\u7136\u89C6\u56FE\u4E5F\u4E0D\u4F1A\u66F4\u65B0",paraId:12,tocIndex:2},{value:"toRaw",paraId:13,tocIndex:2},{value:":\u5C06\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4FEE\u6539\u4E3A\u666E\u901A\u5BF9\u8C61\uFF0C\u4ECE\u54CD\u5E94\u5F0F\u6570\u636E\u53D8\u6210\u4E0D\u662F\u54CD\u5E94\u5F0F\u6570\u636E",paraId:13,tocIndex:2},{value:`  <template>
    <p>{{ data.name }}---{{ data.age }}</p>
    <a-button @click="handleAddAge">\u70B9\u51FB+1</a-button>
  </template>
  <script setup lang="ts">
  import { ref, Ref, reactive, toRefs, toRaw } from "vue";

  const person = reactive({
    name: "\u674E\u5B50\u6728",
    age: 18,
  });
  let data = toRaw(person);
  const handleAddAge = () => {
    data.name = "\u674E\u5B50\u67D2";
    data.age = 19;
    console.log(data);
  };
  <\/script>
  <style scoped>
  .read-the-docs {
    color: #888;
  }
  </style>
`,paraId:14,tocIndex:2},{value:"computed",paraId:15,tocIndex:3},{value:"\u5C5E\u6027 ",paraId:15,tocIndex:3},{value:"vue2",paraId:15,tocIndex:3},{value:" \u548C ",paraId:15,tocIndex:3},{value:"vue3",paraId:15,tocIndex:3},{value:" \u7684\u7528\u6CD5\u5DEE\u4E0D\u591A",paraId:15,tocIndex:3},{value:`  <template>
    <p>computed:{{ add }}</p>
    <!-- <a-button @click="handleAdd">\u70B9\u51FB+1</a-button> -->
  </template>
  <script setup lang="ts">
  import { ref, Ref, computed } from "vue";

  const count: Ref<number> = ref(0);
  const add = computed(() => {
    count.value++;
    return count;
  });
  <\/script>
  <style scoped>
    .read-the-docs {
      color: #888;
    }
  </style>

`,paraId:16,tocIndex:3},{value:"vue3",paraId:17,tocIndex:4},{value:" ",paraId:17,tocIndex:4},{value:"watch",paraId:17,tocIndex:4},{value:" \u7684\u4F5C\u7528\u548C ",paraId:17,tocIndex:4},{value:"Vue2",paraId:17,tocIndex:4},{value:" \u4E2D\u7684 ",paraId:17,tocIndex:4},{value:"watch",paraId:17,tocIndex:4},{value:" \u4F5C\u7528\u662F\u4E00\u6837\u7684\uFF0C\u4ED6\u4EEC\u90FD\u662F\u7528\u6765\u76D1\u542C\u54CD\u5E94\u5F0F\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\uFF0C\u5F53\u54CD\u5E94\u5F0F\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002",paraId:17,tocIndex:4},{value:"\u5F53 ",paraId:18,tocIndex:4},{value:"watch",paraId:18,tocIndex:4},{value:" \u76D1\u542C\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u9690\u5F0F\u5730\u521B\u5EFA\u4E00\u4E2A\u6DF1\u5C42\u4FA6\u542C\u5668\uFF0C\u5373\u8BE5\u54CD\u5E94\u5F0F\u5BF9\u8C61\u91CC\u9762\u7684\u4EFB\u4F55\u5C5E\u6027\u53D1\u751F\u53D8\u5316\uFF0C\u90FD\u4F1A\u89E6\u53D1\u76D1\u542C\u51FD\u6570\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u3002\u5373\u5F53 ",paraId:18,tocIndex:4},{value:"watch",paraId:18,tocIndex:4},{value:" \u76D1\u542C\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0C\u9ED8\u8BA4\u5F00\u542F ",paraId:18,tocIndex:4},{value:"deep\uFF1Atrue",paraId:18,tocIndex:4},{value:"\u53EF\u4EE5\u76D1\u542C\u67D0\u4E2A ",paraId:19,tocIndex:4},{value:"ref",paraId:19,tocIndex:4},{value:" \u5BF9\u8C61\u3002\u6B64\u65F6 ",paraId:19,tocIndex:4},{value:"watch",paraId:19,tocIndex:4},{value:" \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u76F4\u63A5\u662F ",paraId:19,tocIndex:4},{value:"ref",paraId:19,tocIndex:4},{value:"\u53EF\u4EE5\u76D1\u542C\u67D0\u4E2A ",paraId:19,tocIndex:4},{value:"reactive",paraId:19,tocIndex:4},{value:" \u5BF9\u8C61\u3002\u6B64\u65F6 ",paraId:19,tocIndex:4},{value:"watch",paraId:19,tocIndex:4},{value:" \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570",paraId:19,tocIndex:4},{value:"\u5BF9\u4E8E ",paraId:19,tocIndex:4},{value:"props",paraId:19,tocIndex:4},{value:" \u5BF9\u8C61\u3002\u6211\u4EEC\u8FDB\u884C\u76D1\u542C\u7684\u65F6\u5019\u4E5F\u5FC5\u987B\u91C7\u7528\u51FD\u6570\u7684\u5F62\u5F0F\uFF0C\u54EA\u6015\u76D1\u542C\u7684\u662F ",paraId:19,tocIndex:4},{value:"props",paraId:19,tocIndex:4},{value:" \u4E2D\u67D0\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u3002",paraId:19,tocIndex:4},{value:`  <template>
    <p>\u4EF7\u683C\uFF1A<a-input v-model:value="price" /></p>
    <p>\u6570\u91CF\uFF1A<a-input v-model:value="num" /></p>
    <p>\u603B\u4EF7\uFF1A{{ total }}</p>
    <!-- <a-button @click="handleAdd">\u70B9\u51FB+1</a-button> -->
  </template>
  <script setup lang="ts">
  import { ref, Ref, computed, watch } from "vue";

  const price: Ref<string> = ref("");
  const num: Ref<string> = ref("");
  let total: Ref<number> = ref(0);
  let list=ref([])
  //1\u3001\u5F53\u7528watch\u76D1\u542C\u4E00\u4E2Aref\u5BF9\u8C61\u65F6
  watch(price, (val) => {

  });
  //2\u3001\u5F53\u7528watch\u76D1\u542C\u591A\u4E2Aref\u5BF9\u8C61\u65F6
  //\u53F3\u8FB9\u7684\u5C5E\u6027\u5FC5\u987B\u8F6C\u6362\u6210\u5DE6\u8FB9\u7684\u5C5E\u6027\uFF0C\u8981\u4E0D\u7136ts\u5C31\u4F1A\u62A5\u7EA2\u8272\u8B66\u544A
  watch([price, num], (val) => {
    total.value = +val[0] * +val[1];
  });
  //3\u3001\u5F53\u7528watch\u76D1\u542Creactive\u5BF9\u8C61\u65F6\uFF08\u5F3A\u5236\u5F00\u542F\u6DF1\u5EA6\u76D1\u542C\uFF0C\u5E76\u4E14\u65E7\u7684\u503C\u65E0\u6CD5\u83B7\u53D6\uFF09
  //4\u3001\u5F53\u7528watch\u76D1\u542Creactive\u5BF9\u8C61\u91CC\u7684\u67D0\u4E00\u4E2A\u666E\u901A\u5C5E\u6027\u65F6\uFF0C\u8981\u4EE5\u7BAD\u5934\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u65B9\u5F0F\u544A\u77E5
  //5\u3001\u5F53\u7528watch\u76D1\u542Creactive\u5BF9\u8C61\u91CC\u7684\u591A\u4E2A\u666E\u901A\u5C5E\u6027\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u7528\u6570\u7EC4
  //6\u3001\u5F53\u7528watch\u76D1\u542Creactive\u5BF9\u8C61\u91CC\u7684\u67D0\u4E00\u4E2A\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u624B\u52A8\u5F00\u542F\u6DF1\u5EA6\u76D1\u542C\u624D\u53EF\u4EE5
  <\/script>
  <style scoped>
  .read-the-docs {
    color: #888;
  }
  </style>
`,paraId:20,tocIndex:4},{value:"\u5B83\u4F1A\u76D1\u542C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u4E0D\u9700\u8981\u5177\u4F53\u5230\u67D0\u4E2A\u5C5E\u6027\uFF0C\u4E00\u65E6\u8FD0\u884C\u5C31\u4F1A\u7ACB\u5373\u76D1\u542C\uFF0C\u7EC4\u4EF6\u5378\u8F7D\u7684\u65F6\u5019\u4F1A\u505C\u6B62\u76D1\u542C\u3002\u5B83\u4E0D\u50CF",paraId:21,tocIndex:5},{value:"watch",paraId:21,tocIndex:5},{value:"\u9700\u8981\u4F7F\u7528",paraId:21,tocIndex:5},{value:"immediate:true",paraId:21,tocIndex:5},{value:"\u624D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u5B83\u662F\u4F1A\u9ED8\u8BA4\u6267\u884C\u4E00\u6B21\u7684",paraId:21,tocIndex:5},{value:`const msg: Ref<string> = ref('111');
const handleClick = () => {
  msg.value = \`\${Math.random()}\`;
};
watchEffect(() => {
  console.log('\u503C\u6539\u53D8', msg.value); //\u5FC5\u987B\u5230value,\u624D\u4F1A\u770B\u5230\u6BCF\u4E00\u6B21\u6539\u53D8
});
`,paraId:22,tocIndex:5},{value:`\u505C\u6B62\u76D1\u542C
\u5F53 `,paraId:23,tocIndex:5},{value:"watchEffect",paraId:23,tocIndex:5},{value:" \u5728\u7EC4\u4EF6\u7684 ",paraId:23,tocIndex:5},{value:"setup()",paraId:23,tocIndex:5},{value:" \u51FD\u6570\u6216\u751F\u547D\u5468\u671F\u94A9\u5B50\u88AB\u8C03\u7528\u65F6\uFF0C\u4FA6\u542C\u5668\u4F1A\u88AB\u94FE\u63A5\u5230\u8BE5\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\uFF0C\u5E76\u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\u81EA\u52A8\u505C\u6B62\u3002\u4F46\u662F\u6211\u4EEC\u91C7\u7528\u5F02\u6B65(\u4F8B\u5982\u5728",paraId:23,tocIndex:5},{value:"setTimeout",paraId:23,tocIndex:5},{value:"\u91CC\u9762)\u7684\u65B9\u5F0F\u521B\u5EFA\u4E86\u4E00\u4E2A\u76D1\u542C\u5668\uFF0C\u8FD9\u4E2A\u65F6\u5019\u76D1\u542C\u5668\u6CA1\u6709\u4E0E\u5F53\u524D\u7EC4\u4EF6\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u5373\u4F7F\u7EC4\u4EF6\u9500\u6BC1\u4E86\uFF0C\u76D1\u542C\u5668\u4F9D\u7136\u5B58\u5728\u3002",paraId:23,tocIndex:5},{value:`  <script setup lang="ts">
    import { watchEffect } from 'vue';
    // \u5B83\u4F1A\u81EA\u52A8\u505C\u6B62
    watchEffect(() => {});
    // ...\u8FD9\u4E2A\u5219\u4E0D\u4F1A\uFF01
    setTimeout(() => {
      watchEffect(() => {});
    }, 100);

    const stop = watchEffect(() => {
      /* ... */
    });

    // \u663E\u5F0F\u8C03\u7528
    stop();
    <\/script>
`,paraId:24,tocIndex:5},{value:`\u6E05\u9664\u526F\u4F5C\u7528\uFF08onInvalidate\uFF09
`,paraId:25,tocIndex:5},{value:"watchEffect",paraId:25,tocIndex:5},{value:" \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u2014\u2014",paraId:25,tocIndex:5},{value:"effect",paraId:25,tocIndex:5},{value:" \u51FD\u6570\u2014\u2014\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF1A\u53EB ",paraId:25,tocIndex:5},{value:"onInvalidate",paraId:25,tocIndex:5},{value:"\uFF0C\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u6E05\u9664 ",paraId:25,tocIndex:5},{value:"effect",paraId:25,tocIndex:5},{value:" \u4EA7\u751F\u7684\u526F\u4F5C\u7528\u5C31\u662F\u5728\u89E6\u53D1\u76D1\u542C\u4E4B\u524D\u4F1A\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u53EF\u4EE5\u5904\u7406\u4F60\u7684\u903B\u8F91\uFF0C\u4F8B\u5982\u9632\u6296",paraId:25,tocIndex:5},{value:`//1\u3001\u53EF\u4EE5\u7528\u4F5C\u5B9A\u65F6\u5668
watchEffect(onInvalidate => {
  const timer = setInterval(() => {
    console.log('\u5B9A\u65F6\u5668');
  }, 1000);
  onInvalidate(() => clearInterval(timer));
  console.log('\u65B0\u7684\u503C:', msg, number.value.count);
});
//2\u3001\u5229\u7528watchEffect\u4F5C\u4E00\u4E2A\u9632\u6296\u8282\u6D41\uFF08\u5982\u53D6\u6D88\u8BF7\u6C42\uFF09
const id = ref(13);
watchEffect(onInvalidate => {
  // \u5F02\u6B65\u8BF7\u6C42
  const token = performAsyncOperation(id.value);
  // \u5982\u679Cid\u9891\u7E41\u6539\u53D8\uFF0C\u4F1A\u89E6\u53D1\u5931\u6548\u51FD\u6570\uFF0C\u53D6\u6D88\u4E4B\u524D\u7684\u63A5\u53E3\u8BF7\u6C42
  onInvalidate(() => {
    // id has changed or watcher is stopped.
    // invalidate previously pending async operation
    token.cancel();
  });
});
`,paraId:26,tocIndex:5},{value:`\u914D\u7F6E\u9009\u9879
`,paraId:27,tocIndex:5},{value:"watchEffect",paraId:27,tocIndex:5},{value:" \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u5B9A\u4E49\u526F\u4F5C\u7528\u5237\u65B0\u65F6\u673A\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u8C03\u8BD5\u5668\u6765\u4F7F\u7528",paraId:27,tocIndex:5},{value:"flush(\u66F4\u65B0\u65F6\u673A)\uFF1A",paraId:28,tocIndex:5},{value:"pre",paraId:29,tocIndex:5},{value:"\uFF1A\u7EC4\u4EF6\u66F4\u65B0\u524D\u6267\u884C",paraId:29,tocIndex:5},{value:"sync",paraId:29,tocIndex:5},{value:"\uFF1A\u5F3A\u5236\u6548\u679C\u59CB\u7EC8\u540C\u6B65\u89E6\u53D1",paraId:29,tocIndex:5},{value:"post",paraId:29,tocIndex:5},{value:"\uFF1A\u7EC4\u4EF6\u66F4\u65B0\u540E\u6267\u884C",paraId:29,tocIndex:5},{value:`<script setup lang="ts">
  import { ref, watchEffect } from "vue";
  let num = ref(0)

  //3s\u540E\u6539\u53D8\u503C
  setTimeout(() => {
    num.value++
  }, 3000)

  watchEffect((onInvalidate) => {
    console.log(num.value)
    onInvalidate(() => {
      console.log('\u6267\u884C');
    });
  }, {
    flush: "post", //\u6B64\u65F6\u8FD9\u4E2A\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u540E\u53BB\u6267\u884C
    onTrigger(e) { //\u4F5C\u4E3A\u4E00\u4E2A\u8C03\u8BD5\u5DE5\u5177\uFF0C\u53EF\u5728\u5F00\u53D1\u4E2D\u65B9\u4FBF\u8C03\u8BD5
      console.log('\u89E6\u53D1', e);
    },
  })
  <\/script>
`,paraId:30,tocIndex:5},{value:"defineProps",paraId:31,tocIndex:7},{value:" \u6765\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u503C\uFF0C ",paraId:31,tocIndex:7},{value:"defineProps",paraId:31,tocIndex:7},{value:"\u662F\u65E0\u987B\u5F15\u5165\u7684\u76F4\u63A5\u4F7F\u7528\u5373\u53EF",paraId:31,tocIndex:7},{value:"withDefaults",paraId:31,tocIndex:7},{value:" \u5B9A\u4E49\u9ED8\u8BA4\u503C",paraId:31,tocIndex:7},{value:"defineEmits",paraId:31,tocIndex:7},{value:" \u5B50\u7EC4\u4EF6\u6D3E\u53D1\u4E8B\u4EF6",paraId:31,tocIndex:7},{value:"defineExpose",paraId:31,tocIndex:7},{value:" \u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u548C\u5185\u90E8\u5C5E\u6027\uFF0C\u5FC5\u987B\u5728\u5B50\u7EC4\u4EF6\u7528\u6539\u51FD\u6570\u66B4\u9732\u51FA\u6765",paraId:31,tocIndex:7},{value:`  //\u7236\u7EC4\u4EF6
  <template>
    <HelloWorld
      ref="childRef"
      msg="Vite + Vue"
      :count="0"
      :list="list"
      @callback="hanldeGetParams"
    />
  </template>
  <script setup lang="ts">
  import { ref, onMounted, reactive, nextTick } from "vue";
  import HelloWorld from "./components/HelloWorld.vue";
  const list = reactive<number[]>([1, 2, 3]);
  const hanldeGetParams = (val: string) => {
    console.log(val);
  };
  const childRef = ref<InstanceType<typeof HelloWorld>>();
  onMounted(() => {
    console.log(childRef.value?.num);
  });
  <\/script>

  <style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>


//\u5B50\u7EC4\u4EF6HelloWorld\u63A5\u6536
  <template>
    <div>{{ msg }}--{{ count }}</div>
    {{ list }} {{ num }}
    <a-button @click="handleParent">\u7ED9\u7236\u7EC4\u4EF6\u8FD4\u56DE\u53C2\u6570</a-button>
  </template>
  <script setup lang="ts">
  import { ref, Ref, watchEffect } from "vue";
  //\u83B7\u53D6\u53C2\u6570
  type Props = {
    msg: string;
    count: number;
    list: Array<number>;
  };
  const num: Ref<number> = ref(0);
  //\u9ED8\u8BA4\u53C2\u6570
  withDefaults(defineProps<Props>(), {
    msg: "1222",
  });
  //\u5B50\u7EC4\u4EF6\u4E8B\u4EF6\u6D3E\u53D1
  const emits = defineEmits(["callback"]);
  const handleParent = () => {
    emits("callback", "\u8FD9\u662F\u5B50\u7EC4\u4EF6\u7ED9\u7236\u7EC4\u4EF6\u7684\u53C2\u6570");
  };
  //\u66B4\u9732\u5B50\u7EC4\u4EF6\u65B9\u6CD5
  defineExpose({
    num,
  });
  <\/script>
  <style scoped>
  .read-the-docs {
    color: #888;
  }
  </style>


`,paraId:32,tocIndex:7},{value:`//\u7236\u7EC4\u4EF6
<HelloWorld>
  <template v-slot:content="{ msg }">
    <div>{{ msg }}</div>
  </template>
</HelloWorld>
//\u5B50\u7EC4\u4EF6
<div>
  <slot name="content" msg="hello!"></slot>
</div>
`,paraId:33,tocIndex:8},{value:"\u4F5C\u7528\u548C ",paraId:34,tocIndex:9},{value:"vue2",paraId:34,tocIndex:9},{value:" \u4E00\u81F4\uFF0C\u53EA\u662F\u751F\u547D\u5468\u671F\u540D\u79F0\u6709\u6240\u66F4\u6539",paraId:34,tocIndex:9},{value:"\u521D\u6B21\u8FDB\u5165\u65F6\uFF1A",paraId:34,tocIndex:9},{value:"onMounted> onActivated",paraId:34,tocIndex:9},{value:"\u9000\u51FA\u540E\u89E6\u53D1 ",paraId:34,tocIndex:9},{value:"deactivated",paraId:34,tocIndex:9},{value:"\u518D\u6B21\u8FDB\u5165\uFF1A\u53EA\u4F1A\u89E6\u53D1 ",paraId:34,tocIndex:9},{value:"onActivated",paraId:34,tocIndex:9},{value:"\u4E8B\u4EF6\u6302\u8F7D\u7684\u65B9\u6CD5\u7B49\uFF0C\u53EA\u6267\u884C\u4E00\u6B21\u7684\u653E\u5728 ",paraId:35,tocIndex:9},{value:"onMounted",paraId:35,tocIndex:9},{value:" \u4E2D\uFF1B\u7EC4\u4EF6\u6BCF\u6B21\u8FDB\u53BB\u6267\u884C\u7684\u65B9\u6CD5\u653E\u5728 ",paraId:35,tocIndex:9},{value:"onActivated",paraId:35,tocIndex:9},{value:" \u4E2D",paraId:35,tocIndex:9},{value:"provide",paraId:36,tocIndex:10},{value:" \u53EF\u4EE5\u5728\u7956\u5148\u7EC4\u4EF6\u4E2D\u6307\u5B9A\u6211\u4EEC\u60F3\u8981\u63D0\u4F9B\u7ED9\u540E\u4EE3\u7EC4\u4EF6\u7684\u6570\u636E\u6216\u65B9\u6CD5\uFF0C\u800C\u5728\u4EFB\u4F55\u540E\u4EE3\u7EC4\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u90FD\u53EF\u4EE5\u4F7F\u7528 ",paraId:36,tocIndex:10},{value:"inject",paraId:36,tocIndex:10},{value:" \u6765\u63A5\u6536 ",paraId:36,tocIndex:10},{value:"provide",paraId:36,tocIndex:10},{value:" \u63D0\u4F9B\u7684\u6570\u636E\u6216\u65B9\u6CD5\u3002",paraId:36,tocIndex:10},{value:`//\u7236\u7EC4\u4EF6
  <template>
    <Children></Children>
  </template>

  <script setup lang="ts">
  import { ref, provide } from 'vue'
  import Children from "./Children.vue"

  const msg = ref('hello,\u5C0F\u674E')

  provide('msg', msg)
  <\/script>
//\u5B50\u7EC4\u4EF6
  <template>
    <div>
      <p>msg\uFF1A{{msg}}</p>
      <button @click="onChangeMsg">\u6539\u53D8msg</button>
    </div>
  </template>

  <script setup lang="ts">
  import { inject, Ref, ref } from 'vue'

  const list = inject<Ref<number[]>>("list", ref([]));
  const onChangeMsg = () => {
    msg.value = 'shuge'
  }
  <\/script>
`,paraId:37,tocIndex:10},{value:"v-model \u6539\u52A8\u8FD8\u662F\u4E0D\u5C11\u7684\uFF0C\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C",paraId:38,tocIndex:11},{value:"v-model",paraId:38,tocIndex:11},{value:" \u662F ",paraId:38,tocIndex:11},{value:"props",paraId:38,tocIndex:11},{value:" \u548C ",paraId:38,tocIndex:11},{value:"emit",paraId:38,tocIndex:11},{value:" \u7EC4\u5408\u800C\u6210\u7684\u8BED\u6CD5\u7CD6,",paraId:38,tocIndex:11},{value:"vue3",paraId:38,tocIndex:11},{value:" \u4E2D ",paraId:38,tocIndex:11},{value:"v-model",paraId:38,tocIndex:11},{value:" \u6709\u4EE5\u4E0B\u6539\u52A8",paraId:38,tocIndex:11},{value:"\u53D8\u66F4\uFF1A",paraId:39,tocIndex:11},{value:"value => modelValue",paraId:39,tocIndex:11},{value:"\u53D8\u66F4\uFF1A",paraId:39,tocIndex:11},{value:"update:input => update:modelValue",paraId:39,tocIndex:11},{value:"\u65B0\u589E\uFF1A\u4E00\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A ",paraId:39,tocIndex:11},{value:"v-model",paraId:39,tocIndex:11},{value:"\u65B0\u589E\uFF1A\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u5B9A\u4E49 ",paraId:39,tocIndex:11},{value:"v-model",paraId:39,tocIndex:11},{value:" \u4FEE\u9970\u7B26",paraId:39,tocIndex:11},{value:"v-bind",paraId:39,tocIndex:11},{value:" \u7684 ",paraId:39,tocIndex:11},{value:".sync",paraId:39,tocIndex:11},{value:" \u4FEE\u9970\u7B26\u548C\u7EC4\u4EF6\u7684 ",paraId:39,tocIndex:11},{value:"model",paraId:39,tocIndex:11},{value:" \u9009\u9879\u5DF2\u79FB\u9664",paraId:39,tocIndex:11},{value:"v-model:value",paraId:40,tocIndex:11},{value:"\u7684\u53CC\u5411\u7ED1\u5B9A",paraId:40,tocIndex:11},{value:`//\u7236\u7EC4\u4EF6
<script setup lang="ts">
import { ref, Ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const test = ref('1');
<\/script>

<template>
  <div>
    {{ test }}
    <HelloWorld v-model="test" />
  </div>
</template>

//\u5B50\u7EC4\u4EF6
<template>
  <a-input v-model:value="val" @change="handleChange" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

//\u83B7\u53D6\u53C2\u6570
const props = defineProps({
  modelValue: String,
});
const val = ref(props.modelValue | '');
const emit = defineEmits(['update:modelValue']);
const handleChange = (e) => {
  console.log('e.target.value', e.target.value);
  emit('update:modelValue', e.target.value);
};
<\/script>


`,paraId:41,tocIndex:11},{value:"\u591A\u4E2A v-model \u7684\u53CC\u5411\u7ED1\u5B9A",paraId:42,tocIndex:11},{value:`//\u7236\u7EC4\u4EF6
<script setup lang="ts">
import { ref, Ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const test = ref('1');
const num = ref('2');
<\/script>

<template>
  <div>
    {{ test }} {{ num }}
    <HelloWorld v-model="test" v-model:newValue="num" />
  </div>
</template>
//\u5B50\u7EC4\u4EF6
<template>
  <a-input v-model:value="val" @change="handleChange" />
  <a-input v-model:value="newVal" @change="handleChange1" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

//\u83B7\u53D6\u53C2\u6570
const props = defineProps({
  modelValue: String,
  newValue: String,
});
const val = ref(props.modelValue | '');
const newVal = ref(props.newValue | '');
const emit = defineEmits(['update:modelValue', 'update:newValue']);
const handleChange = (e) => {
  emit('update:modelValue', e.target.value);
};
const handleChange1 = (e) => {
  emit('update:newValue', e.target.value);
};

//\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u4E5F\u53EF\u4EE5
const newVal = computed({
  get: () => props.newValue,
  set: (value) => {
    console.log(value);
    emit('update:newValue', value);
  },
});
<\/script>
`,paraId:43,tocIndex:11},{value:"\u6211\u4EEC\u90FD\u77E5\u9053\u5728 ",paraId:44,tocIndex:13},{value:"vue2",paraId:44,tocIndex:13},{value:" \u4E2D\u6709\u4E2A\u4E1C\u897F\u53EB ",paraId:44,tocIndex:13},{value:"mixins",paraId:44,tocIndex:13},{value:`\uFF0C\u4ED6\u53EF\u4EE5\u5C06\u591A\u4E2A\u7EC4\u4EF6\u4E2D\u76F8\u540C\u7684\u903B\u8F91\u62BD\u79BB\u51FA\u6765\uFF0C\u5B9E\u73B0\u4E00\u6B21\u5199\u4EE3\u7801\uFF0C\u591A\u7EC4\u4EF6\u53D7\u76CA\u7684\u6548\u679C\u3002
\u4F46\u662F `,paraId:44,tocIndex:13},{value:"mixins",paraId:44,tocIndex:13},{value:" \u7684\u526F\u4F5C\u7528\u5C31\u662F\u5F15\u7528\u7684\u591A\u4E86\u53D8\u91CF\u7684\u6765\u6E90\u5C31\u4E0D\u6E05\u6670\u4E86\uFF0C\u800C\u4E14\u8FD8\u4F1A\u6709\u53D8\u91CF\u6765\u6E90\u4E0D\u660E\u786E,\u4E0D\u5229\u4E8E\u9605\u8BFB\uFF0C\u5BB9\u6613\u4F7F\u4EE3\u7801\u53D8\u5F97\u96BE\u4EE5\u7EF4\u62A4\u3002",paraId:44,tocIndex:13},{value:"Vue3",paraId:45,tocIndex:13},{value:" \u7684 ",paraId:45,tocIndex:13},{value:"hook\u51FD\u6570",paraId:45,tocIndex:13},{value:" \u76F8\u5F53\u4E8E ",paraId:45,tocIndex:13},{value:"vue2",paraId:45,tocIndex:13},{value:" \u7684 ",paraId:45,tocIndex:13},{value:"mixin",paraId:45,tocIndex:13},{value:", \u4E0D\u540C\u7684\u662F ",paraId:45,tocIndex:13},{value:"hooks",paraId:45,tocIndex:13},{value:" \u662F\u51FD\u6570",paraId:45,tocIndex:13},{value:"Vue3",paraId:45,tocIndex:13},{value:" \u7684 ",paraId:45,tocIndex:13},{value:"hook\u51FD\u6570",paraId:45,tocIndex:13},{value:" \u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u63D0\u9AD8\u4EE3\u7801\u7684\u590D\u7528\u6027, \u8BA9\u6211\u4EEC\u80FD\u5728\u4E0D\u540C\u7684\u7EC4\u4EF6\u4E2D\u90FD\u5229\u7528 ",paraId:45,tocIndex:13},{value:"hooks",paraId:45,tocIndex:13},{value:" \u51FD\u6570",paraId:45,tocIndex:13},{value:`//useWindowResize.ts
import { onMounted, onUnmounted, ref } from 'vue';

function useWindowResize() {
  const width = ref(0);
  const height = ref(0);
  function onResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  onMounted(() => {
    window.addEventListener('resize', onResize);
    onResize();
  });
  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });
  return {
    width,
    height,
  };
}

export default useWindowResize;

//\u4F7F\u7528
<template>
  <h3>\u5C4F\u5E55\u5C3A\u5BF8</h3>
  <div>\u5BBD\u5EA6\uFF1A{{ width }}</div>
  <div>\u9AD8\u5EA6\uFF1A{{ height }}</div>
</template>

<script setup lang="ts">
import useWindowResize from "./hooks/useWindowResize.ts";
const { width, height } = useWindowResize();
<\/script>
`,paraId:46,tocIndex:13},{value:"\u5728 ",paraId:47,tocIndex:14},{value:"<script setup>",paraId:47,tocIndex:14},{value:" \u4E2D\uFF0C\u4EFB\u4F55\u4EE5",paraId:47,tocIndex:14},{value:"v",paraId:47,tocIndex:14},{value:"\u5F00\u5934\u7684\u9A7C\u5CF0\u5F0F\u547D\u540D\u7684\u53D8\u91CF\u90FD\u53EF\u4EE5\u88AB\u7528\u4F5C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6307\u4EE4\u3002\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C",paraId:47,tocIndex:14},{value:"vFocus",paraId:47,tocIndex:14},{value:" \u5373\u53EF\u4EE5\u5728\u6A21\u677F\u4E2D\u4EE5 ",paraId:47,tocIndex:14},{value:"v-focus",paraId:47,tocIndex:14},{value:" \u7684\u5F62\u5F0F\u4F7F\u7528\u3002",paraId:47,tocIndex:14},{value:"\u5728\u6CA1\u6709\u4F7F\u7528 ",paraId:48,tocIndex:14},{value:"<script setup>",paraId:48,tocIndex:14},{value:" \u7684\u60C5\u51B5\u4E0B\uFF0C\u81EA\u5B9A\u4E49\u6307\u4EE4\u9700\u8981\u901A\u8FC7 ",paraId:48,tocIndex:14},{value:"directives",paraId:48,tocIndex:14},{value:" \u9009\u9879\u6CE8\u518C\uFF1A",paraId:48,tocIndex:14},{value:"\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F",paraId:49,tocIndex:14},{value:"created",paraId:50,tocIndex:14},{value:" \u5143\u7D20\u521D\u59CB\u5316\u7684\u65F6\u5019",paraId:50,tocIndex:14},{value:"beforeMount",paraId:50,tocIndex:14},{value:" \u6307\u4EE4\u7ED1\u5B9A\u5230\u5143\u7D20\u540E\u8C03\u7528 \u53EA\u8C03\u7528\u4E00\u6B21",paraId:50,tocIndex:14},{value:"mounted",paraId:50,tocIndex:14},{value:" \u5143\u7D20\u63D2\u5165\u7236\u7EA7 ",paraId:50,tocIndex:14},{value:"dom",paraId:50,tocIndex:14},{value:" \u8C03\u7528",paraId:50,tocIndex:14},{value:"beforeUpdate",paraId:50,tocIndex:14},{value:" \u5143\u7D20\u88AB\u66F4\u65B0\u4E4B\u524D\u8C03\u7528",paraId:50,tocIndex:14},{value:"update",paraId:50,tocIndex:14},{value:" \u8FD9\u4E2A\u5468\u671F\u65B9\u6CD5\u88AB\u79FB\u9664 \u6539\u7528",paraId:50,tocIndex:14},{value:"updated",paraId:50,tocIndex:14},{value:"beforeUnmount",paraId:50,tocIndex:14},{value:" \u5728\u5143\u7D20\u88AB\u79FB\u9664\u524D\u8C03\u7528",paraId:50,tocIndex:14},{value:"unmounted",paraId:50,tocIndex:14},{value:" \u6307\u4EE4\u88AB\u79FB\u9664\u540E\u8C03\u7528 \u53EA\u8C03\u7528\u4E00\u6B21",paraId:50,tocIndex:14},{value:`<template>
  <div v-move class="box">
    <div class="header"></div>
    <div>\u5185\u5BB9</div>
  </div>
</template>

<script setup lang="ts">
import { Directive } from "vue";
const vMove: Directive = {
  mounted(el: HTMLElement) {
    let moveEl = el.firstElementChild as HTMLElement;
    const mouseDown = (e: MouseEvent) => {
      //\u9F20\u6807\u70B9\u51FB\u7269\u4F53\u90A3\u4E00\u523B\u76F8\u5BF9\u4E8E\u7269\u4F53\u5DE6\u4FA7\u8FB9\u6846\u7684\u8DDD\u79BB=\u70B9\u51FB\u65F6\u7684\u4F4D\u7F6E\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u6700\u5DE6\u8FB9\u7684\u8DDD\u79BB-\u7269\u4F53\u5DE6\u8FB9\u6846\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u6700\u5DE6\u8FB9\u7684\u8DDD\u79BB
      console.log(e.clientX, e.clientY, "\u8D77\u59CB\u4F4D\u7F6E", el.offsetLeft);
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + "px";
        el.style.top = e.clientY - Y + "px";
        console.log(e.clientX, e.clientY, "\u4F4D\u7F6E\u6539\u53D8");
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    };
    moveEl.addEventListener("mousedown", mouseDown);
  },
};

<\/script>

<style>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}

.header {
  height: 20px;
  background: black;
  cursor: move;
}
</style>

`,paraId:51,tocIndex:14},{value:"\u5168\u5C40\u6CE8\u518C",paraId:52,tocIndex:14},{value:`// \u4F7F v-focus \u5728\u6240\u6709\u7EC4\u4EF6\u4E2D\u90FD\u53EF\u7528
app.directive('focus', {
  /* ... */
});
`,paraId:53,tocIndex:14},{value:"\u53EA\u6709\u5F53\u6240\u9700\u529F\u80FD\u53EA\u80FD\u901A\u8FC7\u76F4\u63A5\u7684 ",paraId:54,tocIndex:14},{value:"DOM",paraId:54,tocIndex:14},{value:" \u64CD\u4F5C\u6765\u5B9E\u73B0\u65F6\uFF0C\u624D\u5E94\u8BE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u4EE4\u3002\u5176\u4ED6\u60C5\u51B5\u4E0B\u5E94\u8BE5\u5C3D\u53EF\u80FD\u5730\u4F7F\u7528 ",paraId:54,tocIndex:14},{value:"v-bind",paraId:54,tocIndex:14},{value:" \u8FD9\u6837\u7684\u5185\u7F6E\u6307\u4EE4\u6765\u58F0\u660E\u5F0F\u5730\u4F7F\u7528\u6A21\u677F\uFF0C\u8FD9\u6837\u66F4\u9AD8\u6548\uFF0C\u4E5F\u5BF9\u670D\u52A1\u7AEF\u6E32\u67D3\u66F4\u53CB\u597D\u3002",paraId:54,tocIndex:14},{value:`<template>
  <span> style v-bind CSS\u53D8\u91CF\u6CE8\u5165</span>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const color = ref('f00')
<\/script>
<style scoped>
  span {
    /* \u4F7F\u7528v-bind\u7ED1\u5B9A\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF */
    color: v-bind('color');
  }
</style>
`,paraId:55,tocIndex:15},{value:"type",paraId:56,tocIndex:17},{value:"(\u7C7B\u578B\u522B\u540D)\u4F1A\u7ED9\u4E00\u4E2A\u7C7B\u578B\u8D77\u4E2A\u65B0\u540D\u5B57\u3002 ",paraId:56,tocIndex:17},{value:"type",paraId:56,tocIndex:17},{value:" \u6709\u65F6\u548C ",paraId:56,tocIndex:17},{value:"interface",paraId:56,tocIndex:17},{value:" \u5F88\u50CF\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F5C\u7528\u4E8E\u539F\u59CB\u503C\uFF08\u57FA\u672C\u7C7B\u578B\uFF09\uFF0C\u8054\u5408\u7C7B\u578B\uFF0C\u5143\u7EC4\u4EE5\u53CA\u5176\u5B83\u4EFB\u4F55\u4F60\u9700\u8981\u624B\u5199\u7684\u7C7B\u578B\u3002\u8D77\u522B\u540D\u4E0D\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u7C7B\u578B - \u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u540D\u5B57\u6765\u5F15\u7528\u90A3\u4E2A\u7C7B\u578B\u3002\u7ED9\u57FA\u672C\u7C7B\u578B\u8D77\u522B\u540D\u901A\u5E38\u6CA1\u4EC0\u4E48\u7528\uFF0C\u5C3D\u7BA1\u53EF\u4EE5\u505A\u4E3A\u6587\u6863\u7684\u4E00\u79CD\u5F62\u5F0F\u4F7F\u7528\u3002",paraId:56,tocIndex:17},{value:"\u76F8\u540C\u70B9",paraId:57,tocIndex:17},{value:"\u63A5\u53E3\u548C\u7C7B\u578B\u522B\u540D\u90FD\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u6216\u51FD\u6570\u7684\u7C7B\u578B\uFF0C\u53EA\u662F\u8BED\u6CD5\u4E0D\u540C",paraId:58,tocIndex:17},{value:`type MyTYpe = {
  name: string,
  say(): void,
};

interface MyInterface {
  name: string;
  say(): void;
}
`,paraId:59,tocIndex:17},{value:"\u90FD\u5141\u8BB8\u6269\u5C55,",paraId:60,tocIndex:17},{value:"interface",paraId:60,tocIndex:17},{value:" \u7528 ",paraId:60,tocIndex:17},{value:"extends",paraId:60,tocIndex:17},{value:" \u6765\u5B9E\u73B0\u6269\u5C55,",paraId:60,tocIndex:17},{value:"type",paraId:60,tocIndex:17},{value:" \u4F7F\u7528 ",paraId:60,tocIndex:17},{value:"&",paraId:60,tocIndex:17},{value:" \u5B9E\u73B0\u6269\u5C55",paraId:60,tocIndex:17},{value:`//interface\u7684\u4F7F\u7528
interface MyInterface {
  name: string;
  say(): void;
}

interface MyInterface2 extends MyInterface {
  sex: string;
}

let person: MyInterface2 = {
  name: '\u5C0F\u674E',
  sex: '\u7537',
  say(): void {
    console.log('hello,\u5C0F\u674E\uFF01');
  },
};
\u5C0F\u674E;
//type\u7684\u4F7F\u7528
type MyType = {
  name: string,
  say(): void,
};
type MyType2 = MyType & {
  sex: string,
};
let value: MyType2 = {
  name: '\u5C0F\u674E',
  sex: '\u7537',
  say(): void {
    console.log('hello \u554A\uFF0C\u5C0F\u674E\uFF01');
  },
};
`,paraId:61,tocIndex:17},{value:"\u4E0D\u540C\u70B9",paraId:62,tocIndex:17},{value:"type",paraId:63,tocIndex:17},{value:" \u53EF\u4EE5\u58F0\u660E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u522B\u540D/\u8054\u5408\u7C7B\u578B/\u5143\u7EC4\u7B49\uFF0C\u800C ",paraId:63,tocIndex:17},{value:"interface",paraId:63,tocIndex:17},{value:" \u4E0D\u884C",paraId:63,tocIndex:17},{value:"interface",paraId:63,tocIndex:17},{value:" \u80FD\u591F\u5408\u5E76\u58F0\u660E\uFF0C\u800C ",paraId:63,tocIndex:17},{value:"type",paraId:63,tocIndex:17},{value:" \u4E0D\u884C",paraId:63,tocIndex:17},{value:"",paraId:64,tocIndex:17}]}}]);
