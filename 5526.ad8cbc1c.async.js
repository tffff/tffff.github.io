"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[5526],{95526:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u4EA4\u53C9\u7C7B\u578B\u662F\u4E00\u79CD\u5C06\u591A\u79CD\u7C7B\u578B\u7EC4\u5408\u4E3A\u4E00\u79CD\u7C7B\u578B\u7684\u65B9\u6CD5\u3002\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u5C06\u7ED9\u5B9A\u7684\u7C7B\u578B A \u4E0E\u7C7B\u578B B \u6216\u66F4\u591A\u7C7B\u578B\u5408\u5E76\uFF0C\u5E76\u83B7\u5F97\u5177\u6709\u6240\u6709\u5C5E\u6027\u7684\u5355\u4E2A\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u4F8B\u5B50\uFF1A",paraId:1,tocIndex:1},{value:`//\u63A5\u53E3
type leftType = {
  id: number,
  left: string,
};

type rightType = {
  id: number,
  right: string,
};

type IntersectionType = leftType & rightType;

function showType(args: IntersectionType) {
  console.log(args);
}

showType({ id: 1, left: 'test', right: 'test' });
//{ id: 1, left: 'test', right: 'test' }
`,paraId:2,tocIndex:1},{value:"\u8054\u5408\u7C7B\u578B\u4F7F\u4F60\u53EF\u4EE5\u8D4B\u4E88\u540C\u4E00\u4E2A\u53D8\u91CF\u4E0D\u540C\u7684\u7C7B\u578B",paraId:3,tocIndex:2},{value:`type UnionType = string | number;

function showType(arg: UnionType) {
  console.log(arg);
}

showType('test');
// Output: test

showType(7);
// Output: 7
`,paraId:4,tocIndex:2},{value:"\u51FD\u6570",paraId:5,tocIndex:2},{value:"showType",paraId:5,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u51FD\u6570\uFF0C\u5B83\u63A5\u53D7\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57\u4F5C\u4E3A\u53C2\u6570",paraId:5,tocIndex:2},{value:"\u6CDB\u578B\u7C7B\u578B\u662F\u590D\u7528\u7ED9\u5B9A\u7C7B\u578B\u7684\u4E00\u90E8\u5206\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u5B83\u6709\u52A9\u4E8E\u6355\u83B7\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7684\u7C7B\u578B T",paraId:6,tocIndex:3},{value:"\u4F18\u70B9: \u521B\u5EFA\u53EF\u91CD\u7528\u7684\u51FD\u6570\uFF0C\u4E00\u4E2A\u51FD\u6570\u53EF\u4EE5\u652F\u6301\u591A\u79CD\u7C7B\u578B\u7684\u6570\u636E\u3002\u8FD9\u6837\u5F00\u53D1\u8005\u5C31\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\u6765\u4F7F\u7528\u51FD\u6570",paraId:7,tocIndex:3},{value:"\u6CDB\u578B\u51FD\u6570",paraId:8,tocIndex:3},{value:`function showType<T>(args: T) {
  console.log(args);
}

showType('test');
// Output: "test"

showType(1);
// Output: 1
`,paraId:9,tocIndex:3},{value:"\u5982\u4F55\u521B\u5EFA\u6CDB\u578B\u7C7B\u578B:\u9700\u8981\u4F7F\u7528<>\u5E76\u5C06 T(\u540D\u79F0\u53EF\u81EA\u5B9A\u4E49)\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u3002\u4E0A\u9762\u7684 \u{1F330} \u6817\u5B50\u4E2D\uFF0C \u6211\u4EEC\u7ED9 ",paraId:10,tocIndex:3},{value:"showType",paraId:10,tocIndex:3},{value:" \u6DFB\u52A0\u4E86\u7C7B\u578B\u53D8\u91CF ",paraId:10,tocIndex:3},{value:"T",paraId:10,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"T",paraId:10,tocIndex:3},{value:"\u5E2E\u52A9\u6211\u4EEC\u6355\u83B7\u7528\u6237\u4F20\u5165\u7684\u53C2\u6570\u7684\u7C7B\u578B(\u6BD4\u5982\uFF1Anumber/string)\u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u7C7B\u578B",paraId:10,tocIndex:3},{value:"\u6211\u4EEC\u628A ",paraId:11,tocIndex:3},{value:"showType",paraId:11,tocIndex:3},{value:" \u51FD\u6570\u53EB\u505A\u6CDB\u578B\u51FD\u6570\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u9002\u7528\u4E8E\u591A\u4E2A\u7C7B\u578B",paraId:11,tocIndex:3},{value:"\u6CDB\u578B\u63A5\u53E3",paraId:12,tocIndex:3},{value:`interface GenericType<T> {
  id: number;
  name: T;
}
//\u591A\u53C2\u6570 (args: GenericType<string,string[]>)
function showType(args: GenericType<string>) {
  console.log(args);
}

showType({ id: 1, name: 'test' });
// Output: {id: 1, name: "test"}

function showTypeTwo(args: GenericType<number>) {
  console.log(args);
}

showTypeTwo({ id: 1, name: 4 });
// Output: {id: 1, name: 4}
`,paraId:13,tocIndex:3},{value:"\u5728\u4E0A\u9762\u7684\u6817\u5B50\u4E2D\uFF0C\u58F0\u660E\u4E86\u4E00\u4E2A ",paraId:14,tocIndex:3},{value:"GenericType",paraId:14,tocIndex:3},{value:" \u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u63A5\u6536\u6CDB\u578B\u7C7B\u578B T, \u5E76\u901A\u8FC7\u7C7B\u578B T \u6765\u7EA6\u675F\u63A5\u53E3\u5185 name \u7684\u7C7B\u578B",paraId:14,tocIndex:3},{value:"\u6CE8:\u6CDB\u578B\u53D8\u91CF\u7EA6\u675F\u4E86\u6574\u4E2A\u63A5\u53E3\u540E\uFF0C\u5728\u5B9E\u73B0\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u6307\u5B9A\u4E00\u4E2A\u7C7B\u578B",paraId:15,tocIndex:3},{value:"\u6CDB\u578B\u7C7B\u578B\u53EF\u4EE5\u63A5\u6536\u591A\u4E2A\u53C2\u6570\u3002\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1AT \u548C U\uFF0C\u7136\u540E\u5C06\u5B83\u4EEC\u7528\u4F5C id,name \u7684\u7C7B\u578B\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528\u8BE5\u63A5\u53E3\u5E76\u63D0\u4F9B\u4E0D\u540C\u7684\u7C7B\u578B\u4F5C\u4E3A\u53C2\u6570",paraId:16,tocIndex:3},{value:"Partial<T>",paraId:17,tocIndex:4},{value:"Partial",paraId:18,tocIndex:4},{value:" \u5141\u8BB8\u4F60\u5C06 T \u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u8BBE\u4E3A\u53EF\u9009\u3002\u5B83\u5C06\u5728\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u540E\u9762\u6DFB\u52A0\u4E00\u4E2A",paraId:18,tocIndex:4},{value:"?",paraId:18,tocIndex:4},{value:`interface PartialType {
  id: number;
  firstName: string;
  lastName: string;
}

/*
\u7B49\u6548\u4E8E
interface PartialType {
  id?: number
  firstName?: string
  lastName?: string
}
*/

function showType(args: Partial<PartialType>) {
  console.log(args);
}

showType({ id: 1 });
// Output: {id: 1}

showType({ firstName: 'John', lastName: 'Doe' });
// Output: {firstName: "John", lastName: "Doe"}
`,paraId:19,tocIndex:4},{value:"Required<T>",paraId:20,tocIndex:5},{value:" \u5C06\u67D0\u4E2A\u7C7B\u578B\u91CC\u7684\u5C5E\u6027\u5168\u90E8\u53D8\u4E3A\u5FC5\u9009\u9879",paraId:20,tocIndex:5},{value:`interface RequiredType {
  id: number;
  firstName?: string;
  lastName?: string;
}

function showType(args: Required<RequiredType>) {
  console.log(args);
}

showType({ id: 1, firstName: 'John', lastName: 'Doe' });
// Output: { id: 1, firstName: "John", lastName: "Doe" }

showType({ id: 1 });
// Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName
`,paraId:21,tocIndex:5},{value:"\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u5373\u4F7F\u6211\u4EEC\u5728\u4F7F\u7528\u63A5\u53E3\u4E4B\u524D\u5148\u5C06\u67D0\u4E9B\u5C5E\u6027\u8BBE\u4E3A\u53EF\u9009\uFF0C\u4F46 Required \u88AB\u52A0\u5165\u540E\u4E5F\u4F1A\u4F7F\u6240\u6709\u5C5E\u6027\u6210\u4E3A\u5FC5\u9009\u3002\u5982\u679C\u7701\u7565\u67D0\u4E9B\u5FC5\u9009\u53C2\u6570\uFF0C",paraId:22,tocIndex:5},{value:"TypeScript",paraId:22,tocIndex:5},{value:" \u5C06\u62A5\u9519",paraId:22,tocIndex:5},{value:"Readonly<T>",paraId:23,tocIndex:6},{value:"\u4F1A\u8F6C\u6362\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u4EE5\u4F7F\u5B83\u4EEC\u65E0\u6CD5\u88AB\u4FEE\u6539",paraId:24,tocIndex:6},{value:`interface ReadonlyType {
  id: number;
  name: string;
}

function showType(args: Readonly<ReadonlyType>) {
  args.id = 4;
  console.log(args);
}

showType({ id: 1, name: 'Doe' });
// Error: Cannot assign to 'id' because it is a read-only property.
`,paraId:25,tocIndex:6},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5728\u6307\u5B9A\u7684\u5C5E\u6027\u524D\u9762\u4F7F\u7528\u5173\u952E\u5B57 readonly \u4F7F\u5176\u65E0\u6CD5\u88AB\u91CD\u65B0\u8D4B\u503C",paraId:26,tocIndex:6},{value:`interface ReadonlyType {
  readonly id: number;
  name: string;
}
`,paraId:27,tocIndex:6},{value:"Pick<T, K>",paraId:28,tocIndex:7},{value:`
\u6B64\u65B9\u6CD5\u5141\u8BB8\u4F60\u4ECE\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u7C7B\u578B T \u4E2D\u9009\u62E9\u4E00\u4E9B\u5C5E\u6027\u4F5C\u4E3A K, \u4ECE\u800C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7C7B\u578B
\u5373 \u62BD\u53D6\u4E00\u4E2A\u7C7B\u578B/\u63A5\u53E3\u4E2D\u7684\u4E00\u4E9B\u5B50\u96C6\u4F5C\u4E3A\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B`,paraId:28,tocIndex:7},{value:"T \u4EE3\u8868\u8981\u62BD\u53D6\u7684\u5BF9\u8C61 K \u6709\u4E00\u4E2A\u7EA6\u675F: \u4E00\u5B9A\u662F\u6765\u81EA T \u6240\u6709\u5C5E\u6027\u5B57\u9762\u91CF\u7684\u8054\u5408\u7C7B\u578B \u65B0\u7684\u7C7B\u578B/\u5C5E\u6027\u4E00\u5B9A\u8981\u4ECE K \u4E2D\u9009\u53D6",paraId:29,tocIndex:7},{value:`interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

function showType(args: Pick<PickType, 'firstName' | 'lastName'>) {
  console.log(args);
}

showType({ firstName: 'John', lastName: 'Doe' });
// Output: {firstName: "John"}

showType({ id: 3 });
// Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'
`,paraId:30,tocIndex:7},{value:"Pick",paraId:31,tocIndex:7},{value:" \u4E0E\u6211\u4EEC\u524D\u9762\u8BA8\u8BBA\u7684\u5DE5\u5177\u6709\u4E00\u4E9B\u4E0D\u540C\uFF0C\u5B83\u9700\u8981\u4E24\u4E2A\u53C2\u6570:",paraId:31,tocIndex:7},{value:"T",paraId:32,tocIndex:7},{value:"\u662F\u8981\u4ECE\u4E2D\u9009\u62E9\u5143\u7D20\u7684\u7C7B\u578B",paraId:32,tocIndex:7},{value:"K",paraId:32,tocIndex:7},{value:"\u662F\u8981\u9009\u62E9\u7684\u5C5E\u6027(\u53EF\u4EE5\u4F7F\u4F7F\u7528\u8054\u5408\u7C7B\u578B\u6765\u9009\u62E9\u591A\u4E2A\u5B57\u6BB5)",paraId:32,tocIndex:7},{value:"Omit<T, K>",paraId:33,tocIndex:8},{value:" Omit \u7684\u4F5C\u7528\u4E0E Pick \u7C7B\u578B\u6B63\u597D\u76F8\u53CD\u3002\u4E0D\u662F\u9009\u62E9\u5143\u7D20\uFF0C\u800C\u662F\u4ECE\u7C7B\u578B T \u4E2D\u5220\u9664 K \u4E2A\u5C5E\u6027\u3002",paraId:33,tocIndex:8},{value:`interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

function showType(args: Omit<PickType, 'firstName' | 'lastName'>) {
  console.log(args);
}

showType({ id: 7 });
// Output: {id: 7}

showType({ firstName: 'John' });
// Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'
`,paraId:34,tocIndex:8},{value:"Extract<T, U>",paraId:35,tocIndex:9},{value:"\u63D0\u53D6 T \u4E2D\u53EF\u4EE5\u8D4B\u503C\u7ED9 U \u7684\u7C7B\u578B--\u53D6\u4EA4\u96C6",paraId:36,tocIndex:9},{value:"Extract",paraId:37,tocIndex:9},{value:"\u5141\u8BB8\u4F60\u901A\u8FC7\u9009\u62E9\u4E24\u79CD\u4E0D\u540C\u7C7B\u578B\u4E2D\u7684\u5171\u6709\u5C5E\u6027\u6765\u6784\u9020\u65B0\u7684\u7C7B\u578B\u3002\u4E5F\u5C31\u662F\u4ECE",paraId:37,tocIndex:9},{value:"T",paraId:37,tocIndex:9},{value:"\u4E2D\u63D0\u53D6\u6240\u6709\u53EF\u5206\u914D\u7ED9",paraId:37,tocIndex:9},{value:"U",paraId:37,tocIndex:9},{value:"\u7684\u5C5E\u6027",paraId:37,tocIndex:9},{value:`interface FirstType {
    id: number;
    firstName: string;
    lastName: string;
}

interface SecondType {
    id: number;
    address: string;
    city: string;
}

type ExtractType = Extract<keyof FirstType, keyof SecondType>;
// Output: "id"
`,paraId:38,tocIndex:9},{value:"\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C",paraId:39,tocIndex:9},{value:"FirstType",paraId:39,tocIndex:9},{value:"\u63A5\u53E3\u548C",paraId:39,tocIndex:9},{value:"SecondType",paraId:39,tocIndex:9},{value:"\u63A5\u53E3\uFF0C\u90FD\u5B58\u5728 ",paraId:39,tocIndex:9},{value:"id:number",paraId:39,tocIndex:9},{value:"\u5C5E\u6027\u3002\u56E0\u6B64\uFF0C\u901A\u8FC7\u4F7F\u7528",paraId:39,tocIndex:9},{value:"Extract",paraId:39,tocIndex:9},{value:"\uFF0C\u5373\u63D0\u53D6\u51FA\u4E86\u65B0\u7684\u7C7B\u578B ",paraId:39,tocIndex:9},{value:"{id:number}",paraId:39,tocIndex:9},{value:"Exclude<T, U>",paraId:40,tocIndex:10},{value:" --\u4ECE T \u4E2D\u5254\u9664\u53EF\u4EE5\u8D4B\u503C\u7ED9 U \u7684\u7C7B\u578B\u3002",paraId:40,tocIndex:10},{value:"\u4E0E",paraId:41,tocIndex:10},{value:"Extract",paraId:41,tocIndex:10},{value:"\u4E0D\u540C\uFF0C",paraId:41,tocIndex:10},{value:"Exclude",paraId:41,tocIndex:10},{value:"\u901A\u8FC7\u6392\u9664\u4E24\u4E2A\u4E0D\u540C\u7C7B\u578B\u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u5171\u6709\u5C5E\u6027\u6765\u6784\u9020\u65B0\u7684\u7C7B\u578B\u3002\u5B83\u4F1A\u4ECE",paraId:41,tocIndex:10},{value:"T",paraId:41,tocIndex:10},{value:"\u4E2D\u6392\u9664\u6240\u6709\u53EF\u5206\u914D\u7ED9",paraId:41,tocIndex:10},{value:"U",paraId:41,tocIndex:10},{value:"\u7684\u5B57\u6BB5",paraId:41,tocIndex:10},{value:`interface FirstType {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: number;
  address: string;
  city: string;
}

type ExcludeType = Exclude<keyof FirstType, keyof SecondType>;

// Output; "firstName" | "lastName"
`,paraId:42,tocIndex:10},{value:"\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C\u5C5E\u6027",paraId:43,tocIndex:10},{value:"firstName",paraId:43,tocIndex:10},{value:"\u548C",paraId:43,tocIndex:10},{value:"lastName",paraId:43,tocIndex:10},{value:" \u5728",paraId:43,tocIndex:10},{value:"SecondType",paraId:43,tocIndex:10},{value:"\u7C7B\u578B\u4E2D\u4E0D\u5B58\u5728\u3002\u901A\u8FC7\u4F7F\u7528",paraId:43,tocIndex:10},{value:"Extract",paraId:43,tocIndex:10},{value:"\u5173\u952E\u5B57\uFF0C\u6211\u4EEC\u53EF\u4EE5\u83B7\u5F97",paraId:43,tocIndex:10},{value:"T",paraId:43,tocIndex:10},{value:"\u4E2D\u5B58\u5728\u800C",paraId:43,tocIndex:10},{value:"U",paraId:43,tocIndex:10},{value:"\u4E2D\u4E0D\u5B58\u5728\u7684\u5B57\u6BB5",paraId:43,tocIndex:10},{value:"Record<K,T>",paraId:44,tocIndex:11},{value:"\u6B64\u5DE5\u5177\u53EF\u5E2E\u52A9\u4F60\u6784\u9020\u5177\u6709\u7ED9\u5B9A\u7C7B\u578B T \u7684\u4E00\u7EC4\u5C5E\u6027 K \u7684\u7C7B\u578B\u3002\u5C06\u4E00\u4E2A\u7C7B\u578B\u7684\u5C5E\u6027\u6620\u5C04\u5230\u53E6\u4E00\u4E2A\u7C7B\u578B\u7684\u5C5E\u6027\u65F6\uFF0CRecord \u975E\u5E38\u65B9\u4FBF",paraId:45,tocIndex:11},{value:`interface EmployeeType {
  id: number;
  fullname: string;
  role: string;
}

let employees: Record<number, EmployeeType> = {
  0: { id: 1, fullname: 'John Doe', role: 'Designer' },
  1: { id: 2, fullname: 'Ibrahima Fall', role: 'Developer' },
  2: { id: 3, fullname: 'Sara Duckson', role: 'Developer' },
};

// 0: { id: 1, fullname: "John Doe", role: "Designer" },
// 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
// 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }
`,paraId:46,tocIndex:11},{value:"Record",paraId:47,tocIndex:11},{value:"\u7684\u5DE5\u4F5C\u65B9\u5F0F\u76F8\u5BF9\u7B80\u5355\u3002\u5728\u4EE3\u7801\u4E2D\uFF0C\u5B83\u671F\u671B\u4E00\u4E2A",paraId:47,tocIndex:11},{value:"number",paraId:47,tocIndex:11},{value:"\u4F5C\u4E3A\u7C7B\u578B\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u5C06 0\u30011 \u548C 2 \u4F5C\u4E3A employees \u53D8\u91CF\u7684\u952E\u7684\u539F\u56E0\u3002\u5982\u679C\u4F60\u5C1D\u8BD5\u4F7F\u7528\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5C5E\u6027\uFF0C\u5219\u4F1A\u5F15\u53D1\u9519\u8BEF,\u56E0\u4E3A\u5C5E\u6027\u662F\u7531",paraId:47,tocIndex:11},{value:"EmployeeType",paraId:47,tocIndex:11},{value:"\u7ED9\u51FA\u7684\u5177\u6709 ID\uFF0CfullName \u548C role \u5B57\u6BB5\u7684\u5BF9\u8C61",paraId:47,tocIndex:11},{value:"NonNullable<T>",paraId:48,tocIndex:12},{value:" \u4ECE ",paraId:48,tocIndex:12},{value:"T",paraId:48,tocIndex:12},{value:" \u4E2D\u5254\u9664 ",paraId:48,tocIndex:12},{value:"null",paraId:48,tocIndex:12},{value:" \u548C ",paraId:48,tocIndex:12},{value:"undefined",paraId:48,tocIndex:12},{value:`type NonNullableType = string | number | null | undefined;

function showType(args: NonNullable<NonNullableType>) {
  console.log(args);
}

showType('test');
// Output: "test"

showType(1);
// Output: 1

showType(null);
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

showType(undefined);
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.
`,paraId:49,tocIndex:12},{value:"\u6211\u4EEC\u5C06\u7C7B\u578B",paraId:50,tocIndex:12},{value:"NonNullableType",paraId:50,tocIndex:12},{value:"\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9",paraId:50,tocIndex:12},{value:"NonNullable",paraId:50,tocIndex:12},{value:"\uFF0C",paraId:50,tocIndex:12},{value:"NonNullable",paraId:50,tocIndex:12},{value:"\u901A\u8FC7\u6392\u9664",paraId:50,tocIndex:12},{value:"null",paraId:50,tocIndex:12},{value:"\u548C",paraId:50,tocIndex:12},{value:"undefined",paraId:50,tocIndex:12},{value:"\u6765\u6784\u9020\u65B0\u7C7B\u578B\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4F60\u4F20\u9012\u53EF\u4E3A\u7A7A\u7684\u503C\uFF0C",paraId:50,tocIndex:12},{value:"TypeScript",paraId:50,tocIndex:12},{value:` \u5C06\u5F15\u53D1\u9519\u8BEF\u3002
\u987A\u4FBF\u8BF4\u4E00\u53E5\uFF0C\u5982\u679C\u5C06`,paraId:50,tocIndex:12},{value:"--strictNullChecks",paraId:50,tocIndex:12},{value:"\u6807\u5FD7\u6DFB\u52A0\u5230",paraId:50,tocIndex:12},{value:"tsconfig",paraId:50,tocIndex:12},{value:"\u6587\u4EF6\uFF0C",paraId:50,tocIndex:12},{value:"TypeScript",paraId:50,tocIndex:12},{value:" \u5C06\u5E94\u7528\u975E\u7A7A\u6027\u89C4\u5219",paraId:50,tocIndex:12},{value:"\u6620\u5C04\u7C7B\u578B\u5141\u8BB8\u4F60\u4ECE\u4E00\u4E2A\u65E7\u7684\u7C7B\u578B\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B",paraId:51,tocIndex:13},{value:`type StringMap<T> = {
  [P in keyof T]: string;
};

function showType(arg: StringMap<{ id: number; name: string }>) {
  console.log(arg);
}

showType({ id: 1, name: 'Test' });
// Error: Type 'number' is not assignable to type 'string'.

showType({ id: 'testId', name: 'This is a Test' });
// Output: {id: "testId", name: "This is a Test"}
`,paraId:52,tocIndex:13},{value:"StringMap<>",paraId:53,tocIndex:13},{value:"\u4F1A\u5C06\u4F20\u5165\u7684\u4EFB\u4F55\u7C7B\u578B\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u51FD\u6570",paraId:53,tocIndex:13},{value:"showType()",paraId:53,tocIndex:13},{value:"\u4E2D\u4F7F\u7528\u5B83\uFF0C\u5219\u63A5\u6536\u5230\u7684\u53C2\u6570\u5FC5\u987B\u662F\u5B57\u7B26\u4E32-\u5426\u5219\uFF0C",paraId:53,tocIndex:13},{value:"TypeScript",paraId:53,tocIndex:13},{value:" \u5C06\u5F15\u53D1\u9519\u8BEF",paraId:53,tocIndex:13},{value:"\u7C7B\u578B\u4FDD\u62A4\u4F7F\u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD0\u7B97\u7B26\u68C0\u67E5\u53D8\u91CF\u6216\u5BF9\u8C61\u7684\u7C7B\u578B\u3002\u8FD9\u662F\u4E00\u4E2A\u6761\u4EF6\u5757\uFF0C\u5B83\u4F7F\u7528",paraId:54,tocIndex:14},{value:"typeof",paraId:54,tocIndex:14},{value:"\uFF0C",paraId:54,tocIndex:14},{value:"instanceof",paraId:54,tocIndex:14},{value:"\u6216",paraId:54,tocIndex:14},{value:"in",paraId:54,tocIndex:14},{value:"\u8FD4\u56DE\u7C7B\u578B\u3002",paraId:54,tocIndex:14},{value:"typescript \u80FD\u591F\u5728\u7279\u5B9A\u533A\u5757\u4E2D\u4FDD\u8BC1\u53D8\u91CF\u5C5E\u4E8E\u67D0\u79CD\u786E\u5B9A\u7C7B\u578B\u3002\u53EF\u4EE5\u5728\u6B64\u533A\u5757\u4E2D\u653E\u5FC3\u5730\u5F15\u7528\u6B64\u7C7B\u578B\u7684\u5C5E\u6027\uFF0C\u6216\u8005\u8C03\u7528\u6B64\u7C7B\u578B\u7684\u65B9\u6CD5",paraId:55,tocIndex:14},{value:`function showType(x: number | string) {
  if (typeof x === 'number') {
    return \`The result is \${x + x}\`;
  }
  throw new Error(\`This operation can't be done on a \${typeof x}\`);
}

showType("I'm not a number");
// Error: This operation can't be done on a string

showType(7);
// Output: The result is 14
`,paraId:56,tocIndex:15},{value:`class Foo {
  bar() {
    return 'Hello World';
  }
}

class Bar {
  baz = '123';
}

function showType(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.bar());
    return arg.bar();
  }

  throw new Error('The type is not supported');
}

showType(new Foo());
// Output: Hello World

showType(new Bar());
// Error: The type is not supported
`,paraId:57,tocIndex:16},{value:`interface FirstType {
  x: number;
}
interface SecondType {
  y: string;
}

function showType(arg: FirstType | SecondType) {
  if ('x' in arg) {
    console.log(\`The property \${arg.x} exists\`);
    return \`The property \${arg.x} exists\`;
  }
  throw new Error('This type is not expected');
}

showType({ x: 7 });
// Output: The property 7 exists

showType({ y: 'ccc' });
// Error: This type is not expected
`,paraId:58,tocIndex:17},{value:"\u6761\u4EF6\u7C7B\u578B\u6D4B\u8BD5\u4E24\u79CD\u7C7B\u578B\uFF0C\u7136\u540E\u6839\u636E\u8BE5\u6D4B\u8BD5\u7684\u7ED3\u679C\u9009\u62E9\u5176\u4E2D\u4E00\u79CD\u3002",paraId:59,tocIndex:18},{value:"\u4E00\u79CD\u7531\u6761\u4EF6\u8868\u8FBE\u5F0F\u6240\u51B3\u5B9A\u7684\u7C7B\u578B\uFF0C \u8868\u73B0\u5F62\u5F0F\u4E3A ",paraId:60,tocIndex:18},{value:"T extends U ? X : Y",paraId:60,tocIndex:18},{value:" , \u5373\u5982\u679C\u7C7B\u578B",paraId:60,tocIndex:18},{value:"T",paraId:60,tocIndex:18},{value:"\u53EF\u4EE5\u88AB\u8D4B\u503C\u7ED9\u7C7B\u578B",paraId:60,tocIndex:18},{value:"U",paraId:60,tocIndex:18},{value:"\uFF0C\u90A3\u4E48\u7ED3\u679C\u7C7B\u578B\u5C31\u662F",paraId:60,tocIndex:18},{value:"X",paraId:60,tocIndex:18},{value:"\u7C7B\u578B\uFF0C\u5426\u5219\u4E3A",paraId:60,tocIndex:18},{value:"Y",paraId:60,tocIndex:18},{value:`\u7C7B\u578B\u3002
\u6761\u4EF6\u7C7B\u578B\u4F7F\u7C7B\u578B\u5177\u6709\u4E86\u4E0D\u552F\u4E00\u6027\uFF0C\u589E\u52A0\u4E86\u8BED\u8A00\u7684\u7075\u6D3B\u6027\uFF0C`,paraId:60,tocIndex:18},{value:`// \u6E90\u7801\u5B9E\u73B0
type NonNullable<T> = T extends null | undefined ? never : T;

// NotNull<T> \u7B49\u4EF7\u4E8E NoneNullable<T,U>

// \u7528\u6CD5\u793A\u4F8B
type resType = NonNullable<string | number | null | undefined>; // string|number
`,paraId:61,tocIndex:18},{value:"\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C ",paraId:62,tocIndex:18},{value:"NonNullable",paraId:62,tocIndex:18},{value:"\u68C0\u67E5\u7C7B\u578B\u662F\u5426\u4E3A ",paraId:62,tocIndex:18},{value:"null",paraId:62,tocIndex:18},{value:"\uFF0C\u5E76\u6839\u636E\u8BE5\u7C7B\u578B\u8FDB\u884C\u5904\u7406\u3002\u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0C\u5B83\u4F7F\u7528\u4E86 ",paraId:62,tocIndex:18},{value:"JavaScript",paraId:62,tocIndex:18},{value:" \u4E09\u5143\u8FD0\u7B97\u7B26",paraId:62,tocIndex:18},{value:".d",paraId:63,tocIndex:19},{value:"\u662F\u58F0\u660E\u6587\u4EF6\uFF0C",paraId:63,tocIndex:19},{value:"index.d.ts",paraId:63,tocIndex:19},{value:"\u662F",paraId:63,tocIndex:19},{value:"index.js",paraId:63,tocIndex:19},{value:"\u7684\u8F85\u52A9\u6587\u4EF6",paraId:63,tocIndex:19},{value:"\u8981\u770B ",paraId:64,tocIndex:19},{value:"typescript/lib/lib.dom.ts",paraId:64,tocIndex:19},{value:"\u6587\u4EF6",paraId:64,tocIndex:19},{value:"typescript/lib/lib.es5.ts",paraId:64,tocIndex:19},{value:"\u9879\u76EE\u5F00\u53D1\u7684\u66F4\u8212\u670D",paraId:65,tocIndex:20},{value:`{
  "complilerOptions":{
    "lib":["ES2015","DOM"],
    "strict":true,
    "noImplicitThis":true,
    "strictNullChecks":true,
    "noImplicitAny":true
  },
  "include":["src/*.ts"]
}
`,paraId:66,tocIndex:21},{value:"\u8F93\u5165\u548C\u8F93\u51FA\u4E00\u5B9A\u8981\u517B\u6210\u597D\u4E60\u60EF",paraId:67,tocIndex:21},{value:`function alertName(something: string | number): void {
  console.log('something', something.toString());
}
`,paraId:68,tocIndex:21},{value:"interface \u63A5\u53E3\u4EC0\u4E48\u65F6\u5019\u5199\uFF0C",paraId:69,tocIndex:23},{value:"\u7B2C\u4E00\u79CD\u662F\u4E0D\u77E5\u9053\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u65F6\u5019\uFF0Csdk \u7684\u65F6\u5019",paraId:70,tocIndex:23},{value:"type \u4E1A\u52A1\u4E2D",paraId:70,tocIndex:23},{value:"class \u7C7B\u578B",paraId:70,tocIndex:23},{value:"\u62BD\u8C61\u7C7B",paraId:70,tocIndex:23},{value:"\u5F53\u6211\u4EEC\u5728\u4E00\u4E2A\u6570\u7EC4\u91CC\u9762\u65E2\u5199\u4E86\u5B57\u7B26\u4E32\u7C7B\u578B\u53C8\u5199\u4E86\u6570\u5B57\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u7ED3\u6784\u51FA\u6765\u662F\u65E0\u6CD5\u4F7F\u7528\u5B83\u672C\u8EAB\u81EA\u5E26\u7684\u51FD\u6570\u7684\uFF0C\u90A3\u6211\u4EEC\u9700\u8981\u600E\u4E48\u505A\u5462\uFF1F",paraId:71,tocIndex:24},{value:"\u7B2C\u4E00\u79CD\uFF1A",paraId:72,tocIndex:24},{value:`function test() {
  const text: string = '\u6D4B\u8BD5';
  const num: number = 1;
  return [text, num] as const;
}
const items = test();
const [a] = items;
`,paraId:73,tocIndex:24},{value:"\u7B2C\u4E8C\u79CD\uFF1A",paraId:74,tocIndex:24},{value:`function test(){
  const text:string='\u6D4B\u8BD5';
  const num:number=1;
  return tuplity(text,num)
}
const items=test()
const [a]=items;

//\u81EA\u5B9A\u4E49
function tuplity<T extends unknown[]>(...elements: T):T{
  return elements
}
`,paraId:75,tocIndex:24},{value:"node",paraId:76,tocIndex:25},{value:"\u7528",paraId:76,tocIndex:25},{value:"ts",paraId:76,tocIndex:25},{value:"\u5199\uFF0C\u76F4\u63A5\u7528",paraId:76,tocIndex:25},{value:"pm2",paraId:76,tocIndex:25},{value:"\u542F\u52A8",paraId:76,tocIndex:25},{value:"esbuild",paraId:76,tocIndex:25},{value:" \u6253\u5305\u901F\u5EA6\u6781\u5FEB",paraId:76,tocIndex:25},{value:"vite",paraId:76,tocIndex:25},{value:"snowpack",paraId:76,tocIndex:25},{value:"\u5F00\u53D1 vue\uFF1Avue3+ts+vite \u5F00\u53D1\u5FEB",paraId:76,tocIndex:25},{value:"\u5F00\u53D1 sdk\uFF1Arollup + parcel/snowpack + rome(ts \u5408\u96C6)",paraId:76,tocIndex:25},{value:"webpack(\u751F\u6001\u5B8C\u5584) v8-compile-cahche + SparkPlug + commonjs + \u63D2\u4EF6\u4EE3\u7801",paraId:76,tocIndex:25},{value:"quicktype\uFF1A\u76F4\u63A5\u751F\u6210 ts \u5BF9\u5E94\u7684\u53C2\u6570\u7C7B\u578B",paraId:76,tocIndex:25},{value:"\u968F\u65F6\u7F16\u8BD1\uFF1A",paraId:77,tocIndex:25},{value:"quokka",paraId:78,tocIndex:25},{value:"ts-node",paraId:78,tocIndex:25}]}}]);
