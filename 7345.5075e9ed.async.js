"use strict";(self.webpackChunkwebBlog=self.webpackChunkwebBlog||[]).push([[7345],{77345:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u96C6\u5408\u662F\u4E00\u79CD\u5305\u542B\u4E0D\u540C\u5143\u7D20\u6570\u636E\u7ED3\u6784",paraId:0,tocIndex:0},{value:"\u5F53\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u6765\u4FDD\u5B58\u4E00\u7AEF\u72EC\u4E00\u65E0\u4E8C\u7684\u6587\u5B57\u7684\u65F6\u5019\u96C6\u5408\u5C31\u975E\u5E38\u6709\u7528",paraId:1,tocIndex:0},{value:"\u96C6\u5408\u7684\u6210\u5458\u662F\u65E0\u5E8F\u7684",paraId:2,tocIndex:0},{value:"\u96C6\u5408\u4E0D\u5141\u8BB8\u76F8\u540C\u6210\u5458\u5B58\u5728",paraId:3,tocIndex:0},{value:"\u96C6\u5408\u662F\u4E00\u7EC4\u65E0\u5E8F\u4F46\u5F7C\u6B64\u4E4B\u95F4\u53C8\u6709\u4E00\u5B9A\u76F8\u5173\u6027\u7684\u6210\u5458\u6784\u6210\u7684\uFF0C\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u79F0\u4E3A\u6210\u5458",paraId:4,tocIndex:1},{value:"\u4E0D\u5305\u542B\u4EFB\u4F55\u6210\u5458\u7684\u96C6\u5408\u79F0\u4E3A",paraId:5,tocIndex:1},{value:"\u7A7A\u96C6",paraId:5,tocIndex:1},{value:"\uFF0C",paraId:5,tocIndex:1},{value:"\u5168\u96C6",paraId:5,tocIndex:1},{value:"\u5219\u5305\u542B\u4E00\u5207\u53EF\u80FD\u6210\u5458\u7684\u96C6\u5408",paraId:5,tocIndex:1},{value:"\u5982\u679C\u4E24\u4E2A\u96C6\u5408\u7684\u6210\u5458\u5B8C\u5168\u76F8\u540C\uFF0C\u5219\u79F0\u4E3A\u4E24\u4E2A\u96C6\u5408",paraId:6,tocIndex:1},{value:"\u76F8\u7B49",paraId:6,tocIndex:1},{value:"\u5982\u679C\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u6240\u6709\u6210\u5458\u90FD\u5C5E\u4E8E\u53E6\u5916\u4E00\u4E2A\u96C6\u5408\uFF0C\u5219\u524D\u4E00\u4E2A\u96C6\u5408\u79F0\u4E3A\u540E\u4E00\u4E2A\u96C6\u5408\u7684\u5B50\u96C6",paraId:7,tocIndex:1},{value:"\u5E76\u96C6",paraId:8,tocIndex:1},{value:"\uFF1A\u5C06\u4E24\u4E2A\u96C6\u5408\u7684\u6210\u5458\u8FDB\u884C\u5408\u5E76\uFF0C\u5F97\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408",paraId:8,tocIndex:1},{value:"\u4EA4\u96C6",paraId:9,tocIndex:1},{value:"\uFF1A\u4E24\u4E2A\u96C6\u5408\u5171\u540C\u5B58\u5728\u7684\u6210\u5458\u7EC4\u6210\u4E00\u4E2A\u65B0\u7684\u96C6\u5408",paraId:9,tocIndex:1},{value:"\u8865\u96C6",paraId:10,tocIndex:1},{value:"\uFF1A\u5C5E\u4E8E\u4E00\u4E2A\u96C6\u5408\u4E0D\u5C5E\u4E8E\u53E6\u5916\u4E00\u4E2A\u96C6\u5408\u7684\u6210\u5458\u7EC4\u6210\u7684\u96C6\u5408",paraId:10,tocIndex:1},{value:`function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.show = show;
  this.union = union;
  this.intersect = intersect;
  this.difference = difference;
  this.contains = contains;
  this.size = size;
  this.subset = subset;
}
//\u65B0\u589E
function add(data) {
  if (this.dataStore.indexOf(data) === -1) {
    this.dataStore.push(data);
  } else {
    return false;
  }
}

//\u5220\u9664
function remove(data) {
  var index = this.dataStore.indexOf(data);
  if (index > -1) {
    this.dataStore.splice(index, 1);
  } else {
    return false;
  }
}

//\u663E\u793A
function show() {
  return this.dataStore;
}

//\u5E76\u96C6
function union(set) {
  var tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    tempSet.add(this.dataStore[i]);
  }
  for (let i = 0; i < set.dataStore.length; i++) {
    if (tempSet.contains(set.dataStore[i])) {
      tempSet.add(set.dataStore[i]);
    }
  }
  return tempSet;
}
function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}
//\u4EA4\u96C6
function intersect(set) {
  var tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}
//\u8865\u96C6
function difference(set) {
  var tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

//\u5224\u65AD\u662F\u4E0D\u662F\u5B50\u96C6
function size() {
  return this.dataStore.length;
}

function subset(set) {
  if (set.size() > this.size()) {
    return false;
  } else {
    for (let i = 0; i < set.dataStore.length; i++) {
      if (!this.contains(set.dataStore[i])) {
        return false;
      }
    }
    return true;
  }
}

var names = new Set();
names.add('\u5C0F\u7EA2');
names.add('\u5C0F\u91CC');
names.add('\u5C0F\u84DD');
names.add('\u5C0F\u5F20');
names.add('\u5C0F\u674E');

var cis = new Set();
cis.add('\u5C0F\u5F20');
cis.add('\u5C0F\u674E');
// console.log(cis)

// var newArr=new Set();
console.log('\u5E76\u96C6\uFF1A', names.union(cis).show()); //"\u5C0F\u7EA2", "\u5C0F\u91CC", "\u5C0F\u84DD", "\u5C0F\u5F20", "\u5C0F\u674E"]
console.log('\u4EA4\u96C6\uFF1A', names.intersect(cis).show()); //"\u5C0F\u5F20", "\u5C0F\u674E"
console.log('bu\u96C6\uFF1A', names.difference(cis).show()); //"\u5C0F\u7EA2", "\u5C0F\u91CC", "\u5C0F\u84DD"
console.log('cis\u662F\u4E0D\u662Fnames\u7684\u5B50\u96C6', names.subset(cis)); //true
`,paraId:11,tocIndex:2},{value:"\u65E0\u5E8F\u6811:\u6811\u4E2D\u4EFB\u610F\u8282\u70B9\u7684\u5B50\u7ED3\u70B9\u4E4B\u95F4\u6CA1\u6709\u987A\u5E8F\u5173\u7CFB\uFF0C\u8FD9\u79CD\u6811\u79F0\u4E3A\u65E0\u5E8F\u6811,\u4E5F\u79F0\u4E3A\u81EA\u7531\u6811",paraId:12,tocIndex:3},{value:"\u6709\u5E8F\u6811:\u6811\u4E2D\u4EFB\u610F\u8282\u70B9\u7684\u5B50\u7ED3\u70B9\u4E4B\u95F4\u6709\u987A\u5E8F\u5173\u7CFB",paraId:13,tocIndex:3},{value:"\u4E8C\u53C9\u6811:\u6BCF\u4E2A\u8282\u70B9\u6700\u591A\u542B\u6709\u4E24\u4E2A\u5B50\u6811\u7684\u6811\u79F0\u4E3A\u4E8C\u53C9\u6811",paraId:14,tocIndex:3},{value:"\u5B8C\u5168\u4E8C\u53C9\u6811:\u9664\u4E86\u6700\u540E\u4E00\u5C42\uFF0C\u5176\u5B83\u5404\u5C42\u8282\u70B9\u6570\u90FD\u8FBE\u5230\u6700\u5927",paraId:15,tocIndex:3},{value:"\u6EE1\u4E8C\u53C9\u6811:\u6BCF\u4E00\u5C42\u4E0A\u7684\u7ED3\u70B9\u6570\u90FD\u662F\u6700\u5927\u7ED3\u70B9\u6570",paraId:16,tocIndex:3},{value:"\u970D\u592B\u66FC\u6811:\u5E26\u6743\u8DEF\u5F84\u6700\u77ED\u7684\u4E8C\u53C9\u6811\uFF0C\u4E5F\u53EB\u6700\u4F18\u4E8C\u53C9\u6811",paraId:17,tocIndex:3},{value:"\u6811\u7531\u4E00\u7EC4\u4EE5\u8FB9\u8FDE\u63A5\u7684\u8282\u70B9\u7EC4\u6210",paraId:18,tocIndex:4},{value:"\u5728\u4E00\u4E2A\u6811\u6700\u4E0A\u9762\u7684\u8282\u70B9\u79F0\u4E3A\u6839\u8282\u70B9\uFF0C\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u4E0B\u9762\u8FDE\u63A5\u591A\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u8BE5\u8282\u70B9\u79F0\u4E3A\u7236\u8282\u70B9\uFF0C\u4ED6\u4E0B\u9762\u7684\u8282\u70B9\u88AB\u79F0\u4E3A\u5B50\u8282\u70B9\uFF0C\u4E00\u4E2A\u8282\u70B9\u53EF\u4EE5\u6709 0 \u4E2A\u30011 \u4E2A\u6216\u591A\u4E2A\u5B50\u8282\u70B9\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5B50\u8282\u70B9\u7684\u8282\u70B9\u79F0\u4E3A\u53F6\u5B50\u8282\u70B9",paraId:19,tocIndex:4},{value:"\u4E8C\u53C9\u6811\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6811\uFF0C\u5B50\u8282\u70B9\u4E2A\u6570\u4E0D\u8D85\u8FC7\u4E24\u4E2A",paraId:20,tocIndex:4},{value:"\u4ECE\u4E00\u4E2A\u8282\u70B9\u8D70\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u7684\u8FD9\u4E00\u7EC4\u8FB9\u4E3A\u8DEF\u5F84",paraId:21,tocIndex:4},{value:"\u4EE5\u67D0\u79CD\u7279\u5B9A\u987A\u5E8F\u8BBF\u95EE\u4E66\u4E2D\u7684\u6240\u6709\u8282\u70B9\u79F0\u4E3A\u6811\u7684\u904D\u5386",paraId:22,tocIndex:4},{value:"\u6811\u5206\u4E3A\u51E0\u4E2A\u5C42\u6B21\uFF0C\u6839\u8282\u70B9\u662F\u7B2C 0 \u5C42\uFF0C\u4ED6\u7684\u5B50\u8282\u70B9\u662F\u7B2C\u4E00\u5C42\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u6211\u4EEC\u5B9A\u4E49\u6811\u7684\u5C42\u6811\u5C31\u662F\u6811\u7684\u6DF1\u5EA6",paraId:23,tocIndex:4},{value:"\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A\u4E0E\u4E4B\u76F8\u5173\u7684\u503C\uFF0C\u8BE5\u503C\u6709\u65F6\u88AB\u79F0\u4E3A",paraId:24,tocIndex:4},{value:"\u952E",paraId:24,tocIndex:4},{value:"\u4E00\u4E2A\u7236\u8282\u70B9\u7684\u4E24\u4E2A\u5B50\u8282\u70B9\u5206\u522B\u79F0\u4E3A\u5DE6\u8282\u70B9\u548C\u53F3\u8282\u70B9\uFF0C",paraId:25,tocIndex:4},{value:"*\u4E8C\u53C9\u67E5\u627E\u6811",paraId:25,tocIndex:4},{value:"\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u4E8C\u53C9\u6811\uFF0C\u76F8\u5BF9\u8F83\u5C0F\u7684\u503C\u4FDD\u5B58\u5728\u5DE6\u8282\u70B9\uFF0C\u8F83\u5927\u7684\u503C\u4FDD\u5B58\u5728\u53F3\u8282\u70B9\uFF0C\u8FD9\u4E00\u7279\u6027\u4F7F\u5F97\u67E5\u627E\u6548\u7387\u5F88\u9AD8",paraId:25,tocIndex:4},{value:`const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

//\u5148\u5E8F\u904D\u5386
function preorder(root) {
  if (!root) return;
  console.log('\u5F53\u524D\u904D\u5386\u7684\u7ED3\u70B9\u503C\u662F\uFF1A', root.val);
  preorder(root.left);
  preorder(root.right);
}
//\u4E2D\u5E8F
function preorder(root) {
  if (!root) return;
  preorder(root.left);
  console.log('\u5F53\u524D\u904D\u5386\u7684\u7ED3\u70B9\u503C\u662F\uFF1A', root.val);
  preorder(root.right);
}
//\u540E\u5E8F
function preorder(root) {
  if (!root) return;
  preorder(root.left);
  preorder(root.right);
  console.log('\u5F53\u524D\u904D\u5386\u7684\u7ED3\u70B9\u503C\u662F\uFF1A', root.val);
}

preorder(root);

//\u5148\u5E8F ABDECF
//\u4E2D\u5E8F DBEACF
//\u540E\u5E8F DEBFCA
`,paraId:26,tocIndex:5},{value:"\u524D\u5E8F(\u6DF1\u5EA6\u4F18\u5148)\uFF1A\u6839\u8282\u70B9->\u5DE6\u5B50\u6811->\u53F3\u5B50\u6811",paraId:27,tocIndex:6},{value:"\u4E2D\u5E8F(\u6DF1\u5EA6\u4F18\u5148)\uFF1A\u5DE6\u5B50\u6811->\u6839\u8282\u70B9->\u53F3\u5B50\u6811",paraId:27,tocIndex:6},{value:"\u540E\u5E8F(\u6DF1\u5EA6\u4F18\u5148)\uFF1A\u5DE6\u5B50\u6811->\u53F3\u5B50\u6811->\u6839\u8282\u70B9",paraId:27,tocIndex:6},{value:"\u5C42\u5E8F(\u5E7F\u5EA6\u4F18\u5148)\uFF1A\u6839\u8282\u70B9->\u7B2C\u4E00\u5C42->\u7B2C\u4E8C\u5C42",paraId:27,tocIndex:6},{value:"\u770B\u4E0B\u9762\u7684\u4E00\u4E2A\u4E8C\u53C9\u6811\u7684\u56FE\uFF0C\u5199\u51FA\u524D\u4E2D\u540E\u5E8F\u7684\u6392\u5217",paraId:28,tocIndex:6},{value:`\u6DF1\u5EA6\u4F18\u5148\u904D\u5386
`,paraId:29,tocIndex:6},{value:"\u524D\u5E8F A BDGH CEIF",paraId:30,tocIndex:6},{value:"\u4E2D\u5E8F GDHB A EICF",paraId:30,tocIndex:6},{value:"\u540E\u5E8F GHDB IEFC A",paraId:30,tocIndex:6},{value:`\u5E7F\u5EA6\u4F18\u5148\u904D\u5386
`,paraId:29,tocIndex:6},{value:"\u5C42\u5E8F A BC DEF GHI",paraId:31,tocIndex:6},{value:`function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
//\u663E\u793A
function show() {
  return this.data;
}
//\u5B9A\u4E49\u4E8C\u53C9\u6811
function BST() {
  this.insert = insert;
  this.inOrder = inOrder;
  this.getSmalllest = getSmalllest;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
}
//\u63D2\u5165
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

//\u4E2D\u5E8F\u904D\u5386
function inOrder(node) {
  if (node != null) {
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
  }
}

//\u6700\u5C0F\u503C\u7684\u67E5\u627E
function getSmalllest(root) {
  var current = this.root || root;
  while (current.left != null) {
    current = current.left;
  }
  return current.data;
}

//\u6700\u5927\u503C\u7684\u67E5\u627E
function getMax(root) {
  var current = this.root || root;
  while (current.right != null) {
    current = current.right;
  }
  return current.data;
}

//\u67E5\u627E\u7279\u5B9A\u503C
function find(data) {
  var current = this.root;
  while (current != null) {
    if (current.data == data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

//\u5220\u9664
function remove(data) {
  removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    if (node.left == null && node.right == null) {
      return null;
    } else if ((node.left = null)) {
      return node.right;
    } else if (node.right == null) {
      return node.left;
    }
    var tempNode = getSmalllest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

// nums.inOrder(nums.root)
// console.log('\u6700\u5C0F\u8282\u70B9',nums.getSmalllest())
// console.log('\u6700\u5927\u8282\u70B9',nums.getMax())

console.log('\u5220\u966416', nums.remove(16));
console.log('\u904D\u5386\u8282\u70B9', nums.root);
nums.inOrder(nums.root);
`,paraId:32,tocIndex:7},{value:"\u56FE\u7531\u8FB9\u7684\u96C6\u5408\u53CA\u9876\u70B9\u7684\u96C6\u5408\u7EC4\u6210\uFF0C\u6BCF\u4E00\u4E2A\u57CE\u5E02\u5C31\u662F\u4E00\u4E2A\u9876\u70B9\uFF0C\u6BCF\u4E00\u4E2A\u9053\u8DEF\u5C31\u662F\u4E00\u4E2A\u8FB9",paraId:33,tocIndex:8},{value:"\u9876\u70B9\u4E5F\u6709\u6743\u91CD\uFF0C\u4E5F\u79F0\u4E3A\u6210\u672C\uFF0C\u5982\u679C\u4E00\u4E2A\u56FE\u7684\u9876\u70B9\u5BF9\u662F\u6709\u5E8F\u7684\uFF0C\u5219\u79F0\u4E4B\u4E3A",paraId:34,tocIndex:8},{value:"\u6709\u5411\u56FE",paraId:34,tocIndex:8},{value:"\uFF0C\u5728\u5BF9\u6709\u5411\u56FE\u4E2D\u7684\u9876\u70B9\u6392\u5E8F\u540E\uFF0C\u4FBF\u53EF\u4EE5\u5728\u9876\u70B9\u4E4B\u95F4\u7ED8\u5236\u4E00\u4E2A\u7BAD\u5934\uFF0C\u6709\u5411\u56FE\u8868\u660E\u4E86\u9876\u70B9\u7684\u6D41\u5411\uFF0C\u6D41\u7A0B\u56FE\u5C31\u662F\u4E00\u4E2A\u6709\u5411\u56FE\u7684\u4F8B\u5B50",paraId:34,tocIndex:8},{value:"\u5982\u679C\u56FE\u662F\u65E0\u5E8F\u7684\uFF0C\u5C31\u79F0\u4E3A",paraId:35,tocIndex:8},{value:"\u65E0\u5E8F\u56FE",paraId:35,tocIndex:8},{value:"\u6216",paraId:35,tocIndex:8},{value:"\u65E0\u5411\u56FE",paraId:35,tocIndex:8},{value:"\u4ECE\u4E00\u4E2A\u8282\u70B9\u8D70\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u7684\u8FD9\u4E00\u7EC4\u8FB9\u79F0\u4E3A",paraId:36,tocIndex:8},{value:"\u8DEF\u5F84",paraId:36,tocIndex:8},{value:"\uFF0C\u8DEF\u5F84\u4E2D\u6240\u6709\u7684\u9876\u70B9\u90FD\u7531\u8FB9\u8FDE\u63A5\uFF0C\u8DEF\u5F84\u7684\u957F\u5EA6\u7528\u8DEF\u5F84\u4E2D\u7684\u7B2C\u4E00\u4E2A\u9876\u70B9\u5230\u6700\u540E\u4E00\u4E2A\u9876\u70B9\u4E4B\u95F4\u8FB9\u7684\u6570\u91CF\u8868\u793A\uFF0C\u6307\u5411\u81EA\u8EAB\u7684\u9876\u70B9\u7EC4\u6210\u7684\u8DEF\u5F84\u79F0\u4E3A",paraId:36,tocIndex:8},{value:"\u73AF",paraId:36,tocIndex:8},{value:"\uFF0C\u73AF\u7684\u957F\u5EA6\u4E3A 0",paraId:36,tocIndex:8},{value:"\u5708\u662F\u81F3\u5C11\u6709\u4E00\u6761\u8FB9\u7684\u8DEF\u5F84\uFF0C\u4E14\u8DEF\u5F84\u7684\u7B2C\u4E00\u4E2A\u9876\u70B9\u548C\u6700\u540E\u4E00\u4E2A\u9876\u70B9\u76F8\u540C\uFF0C\u65E0\u8BBA\u6709\u5411\u56FE\u8FD8\u662F\u65E0\u5411\u56FE\u53EA\u8981\u662F\u6CA1\u6709\u91CD\u590D\u7684\u9876\u70B9\u7684\u5708\u5C31\u662F\u4E00\u4E2A",paraId:37,tocIndex:8},{value:"\u7B80\u5355\u5708",paraId:37,tocIndex:8},{value:"\uFF0C\u9664\u4E86\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u9876\u70B9\u5916\uFF0C\u8DEF\u5F84\u7684\u5176\u4ED6\u9876\u70B9\u6709\u91CD\u590D\u7684\u5708\u6210\u4E3A",paraId:37,tocIndex:8},{value:"\u5E73\u51E1\u5708",paraId:37,tocIndex:8},{value:"\u5982\u679C\u4E24\u4E2A\u9876\u70B9\u4E4B\u95F4\u6709\u8DEF\u5F84\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u9876\u70B9\u4E4B\u95F4\u5C31\u662F\u5F3A\u8FDE\u901A\u7684\uFF0C\u5982\u679C\u6709\u5411\u56FE\u7684\u6240\u6709\u9876\u70B9\u90FD\u662F",paraId:38,tocIndex:8},{value:"\u5F3A\u8FDE\u901A",paraId:38,tocIndex:8},{value:"\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6709\u5411\u56FE\u4E5F\u662F\u5F3A\u8FDE\u901A\u7684\u3002",paraId:38,tocIndex:8},{value:`function Graph(v) {
  this.vertices = v;
  this.edges = 0; //\u8868\u793A\u8FB9
  this.adj = []; //\u94FE\u63A5\u7684\u8FB9
  this.marked = []; //\u8868\u793A\u662F\u5426\u8BBF\u95EE\u8FC7
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.marked[i] = false;
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs; //\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22
  this.bfs = bfs; //\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22
  this.edgeTo = [];
  this.hasPathTo = hasPathTo;
  this.pathTo = pathTo;
}
//\u6DFB\u52A0\u70B9
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}
//\u663E\u793A\u56FE
function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    var edges = '';
    for (j = 0; j < this.vertices; j++) {
      if (this.adj[i][j]) {
        edges += this.adj[i][j] + ' ';
      }
    }
    console.log(i + '-> ' + edges);
  }
}

//\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log(v + '\u5DF2\u7ECF\u88AB\u8BBF\u95EE\u4E86');
  }
  for (var w in this.adj[v]) {
    var current = this.adj[v][w];
    if (!this.marked[current]) {
      this.dfs(current);
    }
  }
}
//\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22
function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    var v = queue.shift();
    if (v != undefined) {
      console.log('bfs ' + v + '\u5DF2\u7ECF\u88AB\u8BBF\u95EE');
    }

    for (var w in this.adj[v]) {
      var current = this.adj[v][w];
      if (!this.marked[current]) {
        this.marked[current] = true;
        this.edgeTo[current] = v;
        queue.push(current);
      }
    }
  }
}

function hasPathTo(v) {
  return this.marked[v];
}
//\u6700\u77ED\u8DEF\u5F84
function pathTo(v) {
  var source = 0;
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  var path = [];
  for (var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(source);
  return path;
}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

// g.dfs(0)
g.bfs(0);
var paths = g.pathTo(4);
var str = '';
while (paths.length > 0) {
  if (paths.length > 1) {
    str += paths.pop() + '->';
  } else {
    str += paths.pop();
  }
}
console.log(str);
`,paraId:39,tocIndex:9},{value:"\u5B57\u5178\u662F\u4E00\u79CD\u952E-\u503C\u961F\u5F62\u5F0F\u5B58\u50A8\u7684",paraId:40,tocIndex:10},{value:"\u5B57\u5178\u5C31\u50CF\u6211\u4EEC\u7684\u7535\u8BDD\u53F7\u7801\u7C3F\u4E00\u6837\uFF0C\u8981\u627E\u4E00\u4E2A\u7535\u8BDD\u65F6\uFF0C\u540D\u5B57\u627E\u5230\u4E86\u7535\u8BDD\u53F7\u7801\u4E5F\u5C31\u627E\u5230\u4E86",paraId:40,tocIndex:10},{value:"javascript",paraId:40,tocIndex:10},{value:"\u7684",paraId:40,tocIndex:10},{value:"object",paraId:40,tocIndex:10},{value:"\u7C7B\u5C31\u662F\u4EE5\u5B57\u5178\u7684\u5F62\u5F0F\u8BBE\u8BA1\u7684\uFF0C\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A",paraId:40,tocIndex:10},{value:"Dictionary",paraId:40,tocIndex:10},{value:"\u7C7B,\u8FD9\u6837\u4F1A\u6BD4 Object \u65B9\u4FBF\u6BD4\u5982\u663E\u793A\u5B57\u5178\u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u5BF9\u5C5E\u6027\u8FDB\u884C\u6392\u5E8F\u7B49",paraId:40,tocIndex:10},{value:`/**
 * \u5B57\u5178
 */
function Dictonary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.count = count;
  this.clear = clear;
  this.remove = remove;
  this.showAll = showAll;
}
function add(key, value) {
  this.dataStore[key] = value;
}
function find(key) {
  return this.dataStore[key];
}
function remove(key) {
  delete this.dataStore[key];
}
function showAll() {
  var dataKeys = Object.keys(this.dataStore);
  for (var keys in dataKeys) {
    console.log(dataKeys[keys] + '----' + this.dataStore[dataKeys[keys]]);
  }
}

function count() {
  return Object.keys(this.dataStore).length;
}

function clear() {
  var dataKeys = Object.keys(this.dataStore);
  for (var keys in dataKeys) {
    delete this.dataKeys[dataKeys[keys]];
  }
}

var pbook = new Dictonary();
pbook.add('addadis', 200);
pbook.add('niki', 999);
pbook.add('NB', 645);
console.log(pbook.find('niki'));
console.log(pbook.showAll());
console.log('--------');
pbook.remove('niki');
console.log(pbook.showAll());
`,paraId:41,tocIndex:11},{value:"\u6563\u5217\u540E\u7684\u6570\u636E\u53EF\u4EE5\u5FEB\u901F\u63D2\u5165\u53D6\u7528",paraId:42,tocIndex:12},{value:"\u5728\u6563\u5217\u8868\u4E0A\u63D2\u5165\u3001\u5220\u9664\u548C\u53D6\u7528\u6570\u636E\u975E\u5E38\u5FEB\uFF0C",paraId:42,tocIndex:12},{value:"\u67E5\u627E\u6570\u636E\u5374\u6548\u7387\u4F4E\u4E0B",paraId:42,tocIndex:12},{value:"\uFF0C\u6BD4\u5982\u67E5\u627E\u4E00\u7EC4\u6570\u636E\u4E2D\u7684\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C",paraId:42,tocIndex:12},{value:"javascript \u6563\u5217\u8868\u57FA\u4E8E\u6570\u7EC4\u8BBE\u8BA1\uFF0C\u7406\u60F3\u60C5\u51B5\u6563\u5217\u51FD\u6570\u4F1A\u5C06\u6BCF\u4E2A\u952E\u503C\u6620\u5C04\u4E3A\u552F\u4E00\u7684\u6570\u7EC4\u7D22\u5F15\uFF0C\u6570\u7EC4\u957F\u5EA6\u6709\u9650\u5236\uFF0C\u66F4\u73B0\u5B9E\u7684\u7B56\u7565\u662F\u5C06\u952E\u5747\u5300\u5206\u5E03",paraId:42,tocIndex:12},{value:"\u53EF\u4EE5\u7528\u4E8E\u67E5\u627E\u5FEB\u9012",paraId:42,tocIndex:12},{value:`function HashTable() {
  this.table = new Array(137); //\u907F\u514D\u78B0\u649E\u7684\u7B2C\u4E00\u4E2A\u8D28\u6570
  this.simpleHash = simpleHash; //\u8BA1\u7B97\u6563\u5217\u503C\u7684\u65B9\u6CD5 \u78B0\u649E\u6982\u7387\u6BD4\u8F83\u5927
  this.betterHash = betterHash; //\u970D\u7EB3\u7B97\u6CD5
  this.put = put;
  this.get = get;
  this.showDis = showDis;
  this.buildChians = buildChians;
}

//\u4E00\u7EF4\u6570\u7EC4\u53D8\u6210\u4E8C\u7EF4\u6570\u7EC4
function buildChians() {
  for (var i = 0; i < data.length; i++) {
    this.table[i] = new Array();
  }
}

//\u9664\u7559\u4F59\u6570\u6CD5
function simpleHash(data) {
  var total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

// \u66F4\u597D\u7684\u5206\u914D\u952E\u503C
function betterHash(data) {
  var H = 31;
  var total = 0;
  for (let i = 0; i < data.length; i++) {
    total += H * total + data.charCodeAt(i);
  }
  if (total < 0) {
    total += this.table.length - 1;
  }
  return total % this.table.length;
}

//\u63D2\u5165  \u7EBF\u6027\u63A2\u6D4B\u6CD5
function put(data) {
  var pos = this.simpleHash(data);
  if (this.table[pos] == undefined) {
    this.table[pos] = data;
  } else {
    while (this.table[pos] != undefined) {
      pos++;
    }
    this.table[pos] = data;
  }
  // this.table[pos]=data
}

// \u83B7\u53D6
function get(key) {
  var hash = this.simpleHash(data);
  console.log(hash);
  for (let i = hash; i < this.table.length; i++) {
    if (this.table[i] == key) {
      return i;
    }
  }
  return undefined;
}

//\u663E\u793A
function showDis() {
  var n = 0;
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log('\u952E\u503C\u662F->' + i + ' \u503C\u662F' + this.table[i]);
    }
  }
}

var hTable = new HashTable();
hTable.put('china');
hTable.put('Japan');
hTable.put('America');
hTable.put('nicha');
console.log(hTable);
hTable.showDis();
`,paraId:43,tocIndex:13},{value:"\u6570\u7EC4\u4E0D\u662F\u8BF4\u7EC4\u7EC7\u6570\u636E\u6700\u4F73\u7ED3\u6784",paraId:44,tocIndex:14},{value:"javascript \u7684\u6570\u7EC4\u88AB\u5B9E\u73B0\u6210\u4E86\u5BF9\u8C61\uFF0C\u4E0E\u5176\u4ED6\u8BED\u8A00\u6570\u7EC4\u76F8\u6BD4\uFF0C\u6548\u7387\u4F4E\u4E86\u5F88\u591A",paraId:44,tocIndex:14},{value:"\u5982\u679C\u4F60\u53D1\u73B0\u6570\u7EC4\u65F6\u95F4\u4F7F\u7528\u65F6\u5F88\u6162\uFF0C\u5C31\u53EF\u4EE5\u8003\u8651\u7528\u94FE\u8868\u4EE3\u66FF\u4ED6\uFF0C\u9664\u4E86\u5BF9\u6570\u636E\u7684\u968F\u673A\u8BBF\u95EE\uFF0C\u94FE\u63A5\u51E0\u4E4E\u53EF\u4EE5\u7528\u5B50\u554A\u4EFB\u4F55\u53EF\u4EE5\u4F7F\u7528\u4E00\u7EF4\u6570\u7EC4\u7684\u5730\u65B9",paraId:44,tocIndex:14},{value:"\u5982\u679C\u662F\u60F3\u7701\u7A7A\u95F4\u7684\u8BDD\u53EF\u4EE5\u4F7F\u7528\u94FE\u8868",paraId:44,tocIndex:14},{value:"\u94FE\u8868\u662F\u7531\u4E00\u7CFB\u5217\u8282\u70B9\u7EC4\u6210\u7684\u96C6\u5408,\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F7F\u7528\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u6307\u5411\u5B83\u7684\u540E\u7EE7\uFF0C\u6307\u5411\u53E6\u4E00\u4E2A\u8282\u70B9\u7684\u5F15\u7528\u53EB\u94FE",paraId:45,tocIndex:15},{value:"\u94FE\u8868\u5143\u7D20\u9760\u76F8\u4E92\u4E4B\u95F4\u7684\u5173\u7CFB\u8FDB\u884C\u5F15\u7528 A->B->C,B \u5E76\u4E0D\u662F\u94FE\u8868\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u800C\u662F B \u8DDF\u5728 A \u540E\u9762\uFF0C\u904D\u5386\u94FE\u8868\u5C31\u662F\u8DDF\u7740\u94FE\u63A5\uFF0C\u4ECE\u94FE\u63A5\u7684\u9996\u5143\u7D20\u4E00\u76F4\u5230\u5C3E\u5143\u7D20\uFF0C\u4F46\u662F\u4E0D\u5305\u542B",paraId:46,tocIndex:15},{value:"\u5934\u8282\u70B9",paraId:46,tocIndex:15},{value:"\uFF0C\u5934\u5143\u7D20\u5E38\u5E38\u88AB\u79F0\u4E3A\u94FE\u8868\u7684\u63A5\u5165\u70B9\uFF08\u94FE\u8868\u7684\u5C3E\u5143\u7D20\u6307\u5411\u4E00\u4E2A null \u8282\u70B9\uFF09",paraId:46,tocIndex:15},{value:"\u5411\u5355\u5411\u94FE\u8868\u63D2\u5165\u4E00\u4E2A\u8282\u70B9\uFF0C\u9700\u8981\u4FEE\u6539\u5B83\u524D\u9762\u7684\u8282\u70B9(\u524D\u9A71)\u4F7F\u5176\u6307\u5411\u65B0\u52A0\u5165\u7684\u8282\u70B9\uFF0C\u800C\u65B0\u52A0\u5165\u7684\u8282\u70B9\u5219\u6307\u5411\u539F\u6765\u524D\u9A71\u6307\u5411\u7684\u8282\u70B9",paraId:47,tocIndex:15},{value:"\u4ECE\u5355\u5411\u94FE\u8868\u5220\u9664\u4E00\u4E2A\u5143\u7D20\uFF0C\u9700\u8981\u5C06\u5F85\u5220\u9664\u7684\u5143\u7D20\u7684\u524D\u9A71\u8282\u70B9\u6307\u5411\u5F85\u5220\u9664\u5143\u7D20\u7684\u540E\u7EE7\u8282\u70B9\uFF0C\u540C\u65F6\u5220\u9664\u5143\u7D20\u6307\u5411 null",paraId:48,tocIndex:15},{value:"\u53CC\u5411\u94FE\u8868",paraId:49,tocIndex:15},{value:`function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(1);
node.next = new ListNode(2);
const node3 = new ListNode(3);
node3.next = node.next;
node.next = node3;
console.log(node);
`,paraId:50,tocIndex:16},{value:"\u5355\u5411\u94FE\u8868",paraId:51,tocIndex:17},{value:`function Node(element) {
  this.element = element;
  this.next = null; //\u94FE\u8868\u540E\u7EE7
}
function LList() {
  this.head = new Node('head'); //\u5934\u7ED3\u70B9
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

//\u627E\u5230\u8282\u70B9
function find(item) {
  var currentNode = this.head;
  while (currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

//\u63D2\u5165\u8282\u70B9
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var currNode = this.find(item);
  newNode.next = currNode.next;
  currNode.next = newNode;
}

//\u904D\u5386\u8282\u70B9
function display() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

//\u627E\u5230\u524D\u9A71
function findPrevious(item) {
  var currNode = this.head;
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}
function remove(item) {
  var preNode = this.findPrevious(item);
  var currNode = this.find(item);
  if (preNode.next != null) {
    preNode.next = currNode.next;
    currNode.next = null;
  }
}

var cities = new LList();
cities.insert('first', 'head');
cities.insert('second', 'first');
cities.insert('thrid', 'second');
cities.display();
console.log('=========');
cities.remove('second');
cities.display();
`,paraId:52,tocIndex:17},{value:"\u53CC\u5411\u94FE\u8868",paraId:53,tocIndex:17},{value:`/**
 * \u53CC\u5411\u94FE\u8868
 */

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}
//\u67E5\u627E
function find(item) {
  var currNode = this.head;
  console.log(currNode);
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

//\u63D2\u5165
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
  if (!(newNode.next == null)) {
    newNode.next.previous = newNode;
  }
}
function display() {
  var currNode = this.head;
  while (currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next === null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.previous = null;
    currNode.next = null;
  } else {
    currNode.previous.next = null;
    currNode.previous = null;
  }
}
//\u67E5\u627E\u6700\u540E\u4E00\u4E2A\u8282\u70B9
function findLast() {
  var currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}
//\u53CD\u5E8F
function dispReverse() {
  var currNode = this.findLast();
  while (currNode.previous !== null) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}
var cities = new LList();
cities.insert('first', 'head');
cities.insert('second', 'first');
cities.insert('thrid', 'second');
cities.display();
console.log('=====');
cities.remove('second');
cities.display();
console.log('=====');

cities.dispReverse();
`,paraId:54,tocIndex:17},{value:"\u5BF9\u4E8E\u6570\u7EC4 ",paraId:55,tocIndex:18},{value:"for",paraId:55,tocIndex:18},{value:"\u5FAA\u73AF\u7684\u901F\u5EA6\u5FEB\u4E8E",paraId:55,tocIndex:18},{value:"forEach",paraId:55,tocIndex:18},{value:"\u548C",paraId:55,tocIndex:18},{value:"map",paraId:55,tocIndex:18},{value:`
\u94FE\u8868\u7684`,paraId:55,tocIndex:18},{value:"\u63D2\u5165/\u5220\u9664",paraId:55,tocIndex:18},{value:"\u6548\u7387\u8F83\u9AD8\uFF0C\u800C",paraId:55,tocIndex:18},{value:"\u8BBF\u95EE",paraId:55,tocIndex:18},{value:"\u6548\u7387\u8F83\u4F4E\uFF1B\u6570\u7EC4\u7684",paraId:55,tocIndex:18},{value:"\u8BBF\u95EE",paraId:55,tocIndex:18},{value:"\u6548\u7387\u8F83\u9AD8\uFF0C\u800C",paraId:55,tocIndex:18},{value:"\u63D2\u5165",paraId:55,tocIndex:18},{value:"\u6548\u7387\u8F83\u4F4E",paraId:55,tocIndex:18},{value:"\u961F\u5217\u5C31\u50CF\u94F6\u884C\u6392\u961F\u529E\u7406\u4E1A\u52A1\u7684\u4EBA\u7FA4\uFF0C\u6392\u5728\u6700\u524D\u9762\u7684\u7B2C\u4E00\u4E2A\u529E\u7406\u4E1A\u52A1\uFF0C\u65B0\u6765\u7684\u6392\u5728\u540E\u9762\uFF0C\u77E5\u9053\u8F6E\u5230\u4ED6\u4EEC\u4E3A\u6B62\uFF0C",paraId:56,tocIndex:19},{value:"\u7528\u9014",paraId:57,tocIndex:19},{value:"\u6D88\u606F\u961F\u5217\u3001\u89C6\u9891\u5F39\u5E55",paraId:58,tocIndex:19},{value:"\u7EF4\u62A4\u6253\u5370\u673A\u4EFB\u52A1",paraId:58,tocIndex:19},{value:"\u603B\u7ED3",paraId:59,tocIndex:19},{value:"\u961F\u5217\u5C31\u662F",paraId:60,tocIndex:19},{value:"\u5148\u8FDB\u5148\u51FA",paraId:60,tocIndex:19},{value:"\u7684\u6570\u636E\u7ED3\u6784",paraId:60,tocIndex:19},{value:"\u961F\u5217\u53EA\u80FD\u5728\u961F\u5C3E\u63D2\u5165\u5143\u7D20\uFF0C\u5728\u961F\u9996\u5220\u9664\u5143\u7D20",paraId:60,tocIndex:19},{value:"\u63D2\u5165\u65B0\u5143\u7D20\u53EB\u5165\u961F\uFF0C\u5220\u9664\u64CD\u4F5C\u53EB\u51FA\u961F",paraId:60,tocIndex:19},{value:"\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u60C5\u51B5\uFF0C\u5728\u5220\u9664\u7684\u65F6\u5019\u4E0D\u5FC5\u8981\u9075\u5B88\u5148\u8FDB\u5148\u51FA\u7684\u7EA6\u5B9A\uFF0C\u8FD9\u79CD\u53EB\u505A\u4F18\u5148\u961F\u5217\u7684\u6570\u636E\u7ED3\u6784",paraId:60,tocIndex:19},{value:`var queue = [];
queue.push('\u4E1C\u5317\u5927\u677F');
queue.push('\u53EF\u7231\u591A');
queue.push('\u5DE7\u4E50\u5179');
queue.push('\u5149\u660E\u5976\u7816');

let i = 0;
while (queue.length) {
  console.log('\u73B0\u5728\u53D6\u51FA\u7684\u662F', queue[0]);
  queue.shift();
  console.log(queue);
}
`,paraId:61,tocIndex:20},{value:"\u51FA\u73B0\u7684\u7ED3\u679C\u5982\u4E0B\u56FE\uFF1A",paraId:62,tocIndex:20},{value:`function Queue() {
  this.dataStore = []; //\u6570\u636E\u6E90
  this.enqueue = enqueue; //\u961F\u5C3E\u589E\u52A0\u4E00\u4E2A
  this.dequeue = dequeue; //\u5220\u9664\u961F\u9996
  this.front = front; //\u8BFB\u53D6\u961F\u9996
  this.back = back; //\u8BFB\u53D6\u961F\u5C3E
  this.toString = toString; //\u663E\u793A\u961F\u5217\u6240\u6709\u5143\u7D20
  this.isEmpty = isEmpty; //\u5224\u65AD\u961F\u5217\u662F\u5426\u4E3A\u7A7A
}
//\u5165\u961F
function enqueue(value) {
  this.dataStore.push(value);
}
//\u51FA\u961F
function dequeue() {
  return this.dataStore.shift();
}
//\u961F\u9996
function front() {
  return this.dataStore[0];
}
//\u961F\u5C3E
function back() {
  return this.dataStore[this.dataStore.length - 1];
}
// \u662F\u5426\u4E3A\u7A7A\u961F\u5217
function isEmpty() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
}
// \u67E5\u770B\u6574\u4E2A\u961F\u5217
function toString() {
  let str = '';
  for (let i = 0; i < this.dataStore.length; i++) {
    str += this.dataStore[i] + '\\n';
  }
  return str;
}

// let queue=new Queue();
// queue.enqueue('\u5C0F\u738B')
// queue.enqueue('\u5C0F\u540D')
// queue.enqueue('\u5C0F\u53EB')
// console.log(queue.toString())
// queue.dequeue()
// console.log(queue.toString())
// queue.dequeue()
// console.log(queue.toString())
`,paraId:63,tocIndex:21},{value:"\u5FAA\u73AF\u961F\u5217\u662F\u4E00\u79CD\u7EBF\u6027\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u64CD\u4F5C\u8868\u73B0\u57FA\u4E8E FIFO\uFF08\u5148\u8FDB\u5148\u51FA\uFF09\u539F\u5219\u5E76\u4E14\u961F\u5C3E\u88AB\u8FDE\u63A5\u5728\u961F\u9996\u4E4B\u540E\u4EE5\u5F62\u6210\u4E00\u4E2A\u5FAA\u73AF\u3002\u5B83\u4E5F\u88AB\u79F0\u4E3A\u201C\u73AF\u5F62\u7F13\u51B2\u5668\u201D",paraId:64,tocIndex:22},{value:"\u5FAA\u73AF\u961F\u5217\u7684\u4E00\u4E2A\u597D\u5904\u662F\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u961F\u5217\u4E4B\u524D\u7528\u8FC7\u7684\u7A7A\u95F4\u3002\u5728\u4E00\u4E2A\u666E\u901A\u961F\u5217\u91CC\uFF0C\u4E00\u65E6\u4E00\u4E2A\u961F\u5217\u6EE1\u4E86\uFF0C\u6211\u4EEC\u5C31\u4E0D\u80FD\u63D2\u5165\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5373\u4F7F\u5728\u961F\u5217\u524D\u9762\u4ECD\u6709\u7A7A\u95F4\u3002\u4F46\u662F\u4F7F\u7528\u5FAA\u73AF\u961F\u5217\uFF0C\u6211\u4EEC\u80FD\u4F7F\u7528\u8FD9\u4E9B\u7A7A\u95F4\u53BB\u5B58\u50A8\u65B0\u7684\u503C",paraId:65,tocIndex:22},{value:`class MyCircularQueue {
  constructor(k) {
    this.list = Array(k); // \u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3Ak\u7684\u7A7A\u6570\u7EC4
    this.front = 0; // \u4FDD\u5B58\u5934\u90E8\u6307\u9488\u4F4D\u7F6E
    this.real = 0; // \u4FDD\u5B58\u5C3E\u90E8\u6307\u9488\u4F4D\u7F6E
    this.max = k; // \u4FDD\u5B58\u8BE5\u6570\u7EC4\u6700\u5927\u957F\u5EA6\uFF0C\u4E5F\u5C31\u662Fk
  }
  Front() {
    //\u53D6\u961F\u9996\u7684\u5143\u7D20
    if (this.isEmpty()) {
      return -1;
    }
    return this.list[this.front];
  }
  Rear() {
    //\u53BB\u961F\u5C3E\u7684\u5143\u7D20 \u5982\u679C\u662F\u6EE1\u961F\u7684\u60C5\u51B5 \u5C31\u53D6\u6700\u5927\u503C\u7684\u6700\u540E\u4E00\u4F4D\uFF0C\u5426\u5219\u5C31\u53D6\u5F53\u524D\u6240\u6709\u5143\u7D20\u6700\u5927\u7684\u4E00\u4F4D
    if (this.isEmpty()) {
      return -1;
    }
    let val = this.real - 1 >= 0 ? this.real - 1 : this.max - 1;
    return this.list[val];
  }
  enQueue(value) {
    //\u5165\u6808
    if (!this.isFull()) {
      this.list[this.real] = value;
      this.real = (this.real + 1) % this.max;
      return true;
    } else {
      return false;
    }
  }
  deQueue() {
    //\u51FA\u6808
    if (!this.isEmpty()) {
      this.list[this.front] = '';
      this.front = (this.front + 1) % this.max;
      return true;
    } else {
      return false;
    }
  }
  isEmpty() {
    //\u662F\u5426\u4E3A\u7A7A \u5224\u65AD\u6761\u4EF6\u662F\u9996\u5C3E\u6307\u9488\u76F8\u7B49\uFF0C\u5E76\u4E14\u5934\u90E8\u6307\u9488\u6240\u6307\u7684\u5143\u7D20\u4E3A\u7A7A
    if (this.real === this.front && !this.list[this.front]) {
      return true;
    } else {
      return false;
    }
  }
  isFull() {
    //\u5224\u65AD\u662F\u5426\u662F\u6EE1\u6808 \u5224\u65AD\u6761\u4EF6\u662F\u9996\u5C3E\u6307\u9488\u76F8\u7B49\uFF0C\u5E76\u4E14\u5934\u90E8\u6307\u9488\u6240\u6307\u7684\u5143\u7D20\u4E0D\u4E3A\u7A7A
    if (this.real === this.front && !!this.list[this.front]) {
      return true;
    } else {
      return false;
    }
  }
}
`,paraId:66,tocIndex:22},{value:"\u6808\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5217\u8868",paraId:67,tocIndex:23},{value:"\u6808\u662F\u4E00\u79CD\u9AD8\u6548\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u56E0\u4E3A\u6570\u636E\u53EA\u80FD\u5728\u6808\u9876\u5220\u9664\u6216\u589E\u52A0\uFF0C\u64CD\u4F5C\u5F88\u5FEB",paraId:67,tocIndex:23},{value:"\u6808\u7684\u4F7F\u7528\u904D\u5E03\u7A0B\u5E8F\u8BED\u8A00\u5B9E\u73B0\u65B9\u65B9\u9762\u9762\uFF0C\u4ECE\u8868\u8FBE\u503C\u5230\u5904\u7406\u51FD\u6570\u8C03\u7528",paraId:67,tocIndex:23},{value:"\u89E3\u51B3\u62EC\u53F7\u5339\u914D\u68C0\u67E5\u3001\u56DE\u6587",paraId:67,tocIndex:23},{value:"\u6D4F\u89C8\u5668\u7684\u540E\u9000\u6216\u7F16\u8F91\u5668\u7684 undo \u529F\u80FD",paraId:67,tocIndex:23},{value:"\u6808\u5185\u5143\u7D20\u53EA\u80FD\u901A\u8FC7\u5217\u8868\u7684\u4E00\u7AEF\u8BBF\u95EE\uFF0C\u8FD9\u4E00\u7AEF\u79F0\u4E3A\u6808\u9876(\u53CD\u4E4B\u6808\u5E95)",paraId:68,tocIndex:24},{value:"\u6808\u88AB\u79F0\u4E3A\u4E00\u79CD ",paraId:68,tocIndex:24},{value:"\u540E\u5165\u5148\u51FA",paraId:68,tocIndex:24},{value:" \u7684\u6570\u636E\u7ED3\u6784",paraId:68,tocIndex:24},{value:"\u63D2\u5165\u65B0\u5143\u7D20\u53C8\u79F0\u505A\u8FDB\u6808\u3001\u5165\u6808\u548C\u538B\u6808\uFF0C\u5220\u9664\u6808\u5143\u7D20\u53EB\u51FA\u6808\u6216\u9000\u6808",paraId:68,tocIndex:24},{value:"\u6BD4\u5982\u4E00\u4E2A\u6D17\u76D8\u5B50\u548C\u62FF\u76D8\u5B50\u7684\u64CD\u4F5C\u5C31\u662F\u4E00\u4E2A\u5165\u6808\u548C\u51FA\u6808\u7684\u4F8B\u5B50(LIFO)",paraId:69,tocIndex:24},{value:`var stack = [];
stack.push('\u4E1C\u5317\u5927\u677F');
stack.push('\u53EF\u7231\u591A');
stack.push('\u5DE7\u4E50\u5179');
stack.push('\u5149\u660E\u5976\u7816');
console.log(stack);

while (stack.length > 0) {
  console.log('\u73B0\u5728\u53D6\u51FA\u7684\u662F', stack[stack.length - 1]);
  stack.pop();
  console.log(stack);
}
`,paraId:70,tocIndex:25},{value:"\u51FA\u73B0\u7684\u7ED3\u679C\u5982\u4E0B\u56FE\uFF1A",paraId:71,tocIndex:25},{value:`function Stack() {
  this.dataStore = []; //\u4FDD\u5B58\u6808\u5185\u5143\u7D20
  this.top = 0; //\u6807\u8BB0\u53EF\u4EE5\u63D2\u5165\u65B0\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5165\u6808\u8BE5\u5143\u7D20\u53D8\u5927\uFF0C\u51FA\u6808\u8BE5\u5143\u7D20\u53D8\u5C0F
  this.push = push; //\u5165\u6808\u64CD\u4F5C
  this.pop = pop; //\u51FA\u6808\u64CD\u4F5C
  this.peek = peek; //\u8FD4\u56DE\u6808\u9876\u5143\u7D20
  this.clear = clear; //\u6E05\u7A7A\u6808
  this.length = length; //\u6808\u7684\u957F\u5EA6
}

//\u5411\u6808\u4E2D\u52A0\u5143\u7D20\uFF0C\u540C\u65F6\u8BA9\u6307\u9488top+1 \u4E00\u5B9A\u6CE8\u610F
function push(element) {
  this.dataStore[this.top++] = element;
  console.log(this.dataStore);
}

//\u51FA\u6808\u64CD\u4F5C \u6307\u9488top-1
function pop() {
  return this.dataStore[--this.top];
}

//\u8FD4\u56DE\u6808\u9876\u5143\u7D20  top\u503C\u51CF1\u8FD4\u56DE\u4E0D\u5220\u9664
function peek() {
  return this.dataStore[this.top - 1];
}
//\u8FD4\u56DE\u6808\u5185\u5143\u7D20\u7684\u5143\u7D20\u4E2A\u6570
function length() {
  return this.top;
}

//\u6E05\u7A7A\u6808
function clear() {
  this.top = 0;
}

var stack = new Stack();
stack.push('\u5C0F\u7EA2');
stack.push('\u5C0F\u7EA21');
stack.push('\u5C0F\u7EA22');
stack.push('\u5C0F\u7EA23');
console.log('\u6808\u7684\u957F\u5EA6', stack.length());
console.log('\u6808\u9876', stack.peek());
`,paraId:72,tocIndex:26},{value:"\u56DE\u6587\u5B57\u7B26\u4E32",paraId:73,tocIndex:27},{value:`function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var rword = '';
  console.log(s);
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (rword === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('racecar')); //true
`,paraId:74,tocIndex:27}]}}]);
