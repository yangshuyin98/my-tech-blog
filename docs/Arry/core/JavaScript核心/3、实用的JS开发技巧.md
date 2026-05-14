---
title: "实用的JS开发技巧"
source: "https://www.arryblog.com/guide/js/"
category: "JavaScript"
order: 3
---

# 实用的 JS 开发技巧

TIP

作为一名优秀且有经验的 Web 开发人员，都会有一个实时总结和梳理自己经验的好习惯 ！

- 要一个属于自己的代码小金库 ^_^ 这个非常非常非常重要 ......
- 简单的事情重复做、重复的事情找规律，流程化、体系化，最终总结出可复制的方法论来，沉淀成知识库。

这样，在日常开发中可提升开发效率，对于团队 leader 也能为公司创造更大的收益。

## 一、Number 实用技巧

### 1、取整

> 代替正数的`Math.floor()`，代替负数的`Math.ceil()`

```js
const num1 = ~~3.14;
const num2 = 3.14 | 0;
const num3 = 3.14 >> 0;
console.log(num1, num2, num3); // 3 3 3
```

### 2、补零

```js
const FillZero = (num, len) => num.toString().padStart(len, "0");
const num = FillZero(688, 5);
console.log(num); // 00688
```

### 3、转数值

> 只对`null、""、false、数值字符串`有效

```js
const num1 = +null;
const num2 = +"";
const num3 = +false;
const num4 = +"688";
console.log(num1, num2, num3, num4); // 0 0 0 688
```

### 4、时间戳

```js
const timestamp = +new Date("2022-06-08");
console.log(timestamp); // 1654646400000
```

### 5、精确小数

```js
const RoundNum = (num, decimal) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(3.14, 1);
console.log(num); // 3.1
```

### 6、判断奇偶

```js
const OddEven = (num) => (!!(num & 1) ? "odd" : "even");
const num = OddEven(18);
console.log(num); // even
```

### 7、取最小最大值

```js
const arr = [11, 12, 13];
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min, max); // 11 13
```

### 8、生成范围随机数

```js
const RandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const num = RandomNum(2, 16);
console.log(num); // 9
```

## 二、Boolean 实用技巧

### 1、短路运算符

```js
// 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
const a = m && 5;
// 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
const b = m || 6;
// 取假赋值：单个表达式转换为true则返回false，否则返回true
const c = !m;
```

### 2、判断数据类型

> 可判断类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap

```js
function DataType(tgt, type) {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object (\w+)\]/, "$1")
    .toLowerCase();
  return type ? dataType === type : dataType;
}
DataType("翠花"); // "string"
DataType(20220608); // "number"
DataType(true); // "boolean"
DataType([], "array"); // true
DataType({}, "array"); // false
```

### 3、是否为空数组

```js
const arr = [];
const flag = Array.isArray(arr) && !arr.length;
console.log(flag); // true
```

### 4、是否为空对象

```js
const obj = {};
const flag = DataType(obj, "object") && !Object.keys(obj).length;
console.log(flag); // true
```

### 5、满足条件时执行

> 如下：Func() 为自己定义的函数

```js
const flagA = true; // 条件A
const flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行
```

### 6、为非假值时执行

```js
const flag = false; // undefined、null、""、0、false、NaN
!flag && Func();
```

### 7、数组不为空时执行

```js
const arr = [5, 6, 7];
arr.length && Func();
```

### 8、对象不为空时执行

```js
const obj = { a: 3, b: 5, c: 6 };
Object.keys(obj).length && Func();
```

### 9、函数退出代替条件分支退出

```js
if (flag) {
  Func();
  return false;
}
// 换成
if (flag) {
  return Func();
}
```

### 10、switch/case 使用区间

```js
const age = 36;
switch (true) {
  case isNaN(age):
    console.log("不是数字类型");
    break;
  case age < 18:
    console.log("未成年人");
    break;
  case age >= 18:
    console.log("成年人了");
    break;
  default:
    console.log("请输入您的年龄");
    break;
}
```

## 三、String 实用技巧

### 1、对比时间

> 时间个位数形式需补 0

```js
const time1 = "2022-05-01 18:00:01";
const time2 = "2022-09-01 06:23:00";
const overtime = time1 > time2;
console.log(overtime); // false
```

### 2、格式化 money 货币

```js
const ThousandNum = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(685258980);
console.log(money); // 685,258,980
```

### 3、生成随机 ID

```js
const RandomId = (len) => Math.random().toString(36).substr(3, len);
const id = RandomId(11);
console.log(id); // 输出随机ID way9w9lv2t
```

### 4、生成随机 HEX 色值

```js
const RandomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
const color = RandomColor();
console.log(color); // 输出随机HEX色值 #5b73e0
```

### 5、生成星级评分

```js
const StartScore = (rate) => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(3);
const start2 = StartScore(5);
console.log(start); // ★★★☆☆
console.log(start2); // ★★★★★
```

### 6、操作 URL 查询参数

```js
const params = new URLSearchParams(location.search.replace(/\?/gi, "")); // location.search = "?name=cuihua&sex=male"
params.has("cuihua"); // true
params.get("sex"); // "male"
```

## 四、Object（对象）实用技巧

### 1、克隆对象

```js
const _obj = { a: 0, b: 1, c: 2 }; // 以下方法任选一种
const obj = { ..._obj }; // 方法一
const obj = JSON.parse(JSON.stringify(_obj)); // 方法二
console.log(obj); // {a: 0, b: 1, c: 2}
```

### 2、合并对象

```js
const obj1 = { a: 0, b: 1, c: 2 };
const obj2 = { c: 3, d: 4, e: 5 };
const obj = { ...obj1, ...obj2 };
console.log(obj); // {a: 0, b: 1, c: 3, d: 4, e: 5}
```

### 3、对象字面量 （获取环境变量时必用此方法）

> 获取环境变量时必用此方法，用它一直爽，一直用它一直爽

```js
const env = "prod";
const link = {
  dev: "开发环境地址 ......",
  test: "测试环境地址 ......",
  prod: "生产环境地址 ......",
}[env];
console.log(link); // 输出 生产环境地址 ......
```

### 4、获取对象变量属性

```js
const flag = false;
const obj = {
  a: 0,
  b: 1,
  [flag ? "c" : "d"]: 2,
};
console.log(obj); // {a: 0, b: 1, d: 2}
```

### 5、创建纯空对象

```js
const obj = Object.create(null);
Object.prototype.a = 0;
console.log(obj); // {}
```

### 6、删除对象无用属性

```js
const obj = { a: 0, b: 1, c: 2 }; // 只想拿b和c
const { a, ...rest } = obj;
console.log(rest); // {b: 1, c: 2}
```

### 7、解构对象属性嵌套

```js
const obj = { a: 0, b: 1, c: { d: 2, e: 3 } };
const {
  c: { d, e },
} = obj;
console.log(d, e); // 2 3
```

### 8、解构对象属性别名

```js
const obj = { a: 0, b: 1, c: 2 };
const { a, b: d, c: e } = obj;
console.log(a, d, e); // 0 1 2
```

### 9、解构对象属性默认值

```js
const obj = { a: 0, b: 1, c: 2 };
const { a, b = 2, d = 3 } = obj;
console.log(a, b, d); // 0 1 3
```

## 五、Function（函数）实用技巧

### 1、函数自执行（立即执行函数）

```js
const Func = (function () {})(); // 常用

(function () {})(); // 常用
(function () {})(); // 常用
[(function () {})()];

// 以下方式，我们平时开发时写的少，在一些开源项目中和格式化插件中经常看到，要能理解和知道
+(function () {})();
-(function () {})();
~(function () {})();
!(function () {})();

new (function () {})();
new (function () {})();
void (function () {})();
typeof (function () {})();
delete (function () {})();

1, (function () {})();
1 ^ (function () {})();
1 > (function () {})();
```

### 2、隐式返回值

> 只能用于 **单语句返回值箭头函数** ，如果返回值是对象必须使用 **`()`** 包住

```js
const Func = function (name) {
  return "Hello " + name;
};
// 换成
const Func = (name) => "Hello " + name;
Func("arry老师"); // 'Hello arry老师'
```

### 3、一次性函数

> 适用于运行一些只需执行一次的初始化代码

```js
function Func() {
  console.log("aa");
  Func = function () {
    console.log("bb");
  };
}
```

### 4、惰性载入函数

> 函数内判断分支较多较复杂时可大大节约资源开销

```js
function Func() {
  if (a === b) {
    console.log("aa");
  } else {
    console.log("bb");
  }
}
// 换成
function Func() {
  if (a === b) {
    Func = function () {
      console.log("aa");
    };
  } else {
    Func = function () {
      console.log("bb");
    };
  }
  return Func();
}
```

### 5、检测非空参数

```js
function IsRequired() {
  throw new Error("必须要传入参数 ！");
}
function Func(name = IsRequired()) {
  console.log("Hello " + name);
}
Func(); // "必须要传入参数 ！"
Func("arry老师"); // Hello arry老师
```

### 6、字符串创建函数

```js
const Func = new Function("name", 'console.log("Hello " + name)');
Func("arry老师"); // Hello arry老师
```

### 7、优雅处理错误信息

```js
try {
  Func();
} catch (e) {
  location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;
}
```

### 8、优雅处理 Async/Await 参数

```js
function AsyncTo(promise) {
  return promise.then((data) => [null, data]).catch((err) => [err]);
}
const [err, res] = await AsyncTo(Func());
```

### 9、优雅处理多个函数返回值

```js
function Func() {
  return Promise.all([fetch("/user"), fetch("/comment")]);
}
const [user, comment] = await Func(); // 需在async包围下使用
```

## 六、Array（数组）实用技巧

### 1、克隆数组

```js
const _arr = [0, 1, 2];
const arr = [..._arr];

console.log(arr); // [0, 1, 2]
```

### 2、合并数组

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2];

console.log(arr); // [0, 1, 2, 3, 4, 5];
```

### 3、去重数组

```js
const arr = [...new Set([0, 1, 1, null, null])];

console.log(arr); // [0, 1, null]
```

### 4、混淆数组

```js
const arr = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - 0.5);

console.log(arr); // [3, 4, 0, 5, 1, 2]
```

### 5、清空数组

```js
const arr = [0, 1, 2];
arr.length = 0;

console.log(arr); // []
```

### 6、截断数组

```js
const arr = [0, 1, 2];
arr.length = 2;

console.log(arr); // [0, 1]
```

### 7、交换赋值

```js
let a = 0;
let b = 1;
[a, b] = [b, a];

console.log(a, b); // 1 0
```

### 8、过滤空值

> 空值：undefined、null、""、0、false、NaN

```js
const arr = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);

console.log(arr); // [1, 2]
```

### 9、异步累计

```js
async function Func(deps) {
  return deps.reduce(async (t, v) => {
    const dep = await t;
    const version = await Todo(v);
    dep[v] = version;
    return dep;
  }, Promise.resolve({}));
}
const result = await Func(); // 需在async包围下使用
```

### 10、数组首部插入成员

```js
let arr = [1, 2]; // 以下方法任选一种
arr.unshift(0); // [0, 1, 2]
arr = [0].concat(arr); // [0, 1, 2]
arr = [0, ...arr]; // [0, 1, 2]

console.log(arr); // [0, 1, 2]
```

### 11、数组尾部插入成员

```js
let arr = [0, 1]; // 以下方法任选一种
arr.push(2);
arr.concat(2);
arr[arr.length] = 2;
arr = [...arr, 2];

console.log(arr); // [0, 1, 2]
```

### 12、统计数组成员个数

```js
const arr = [0, 1, 1, 2, 2, 2];
const count = arr.reduce((t, v) => {
  t[v] = t[v] ? ++t[v] : 1;
  return t;
}, {});

console.log(count); // { 0: 1, 1: 2, 2: 3 }
```

### 13、解构数组成员嵌套

```js
const arr = [0, 1, [2, 3, [4, 5]]];
const [a, b, [c, d, [e, f]]] = arr;

console.log(a, b, c, d, e, f); // 0 1 2 3 4 5
```

### 14、解构数组成员别名

```js
const arr = [0, 1, 2];
const { 0: a, 1: b, 2: c } = arr;

console.log(a, b, c); // 0 1 2
```

### 15、解构数组成员默认值

```js
const arr = [0, 1, 2];
const [a, b, c = 3, d = 4] = arr;

console.log(a, b, c, d); // 0 1 2 4
```

### 16、获取随机数组成员

```js
const arr = [0, 1, 2, 3, 4, 5];
const randomItem = arr[Math.floor(Math.random() * arr.length)];

console.log(randomItem); // 输出随机数
```

### 17、创建指定长度数组

```js
const arr = [...new Array(3).keys()];

console.log(arr); // [0, 1, 2]
```

### 18、创建指定长度且值相等的数组

```js
const arr = new Array(3).fill(0);

console.log(arr); // [0, 0, 0]
```

### 19、reduce 代替 map 和 filter

```js
const _arr = [0, 1, 2];

// map
const arr = _arr.map((v) => v * 2); // [0, 2, 4]
const arr = _arr.reduce((t, v) => {
  t.push(v * 2);
  return t;
}, []);
// [0, 2, 4]

// filter
const arr = _arr.filter((v) => v > 0); // [1, 2]
const arr = _arr.reduce((t, v) => {
  v > 0 && t.push(v);
  return t;
}, []);
// [1, 2]

// map 和 filter
const arr = _arr.map((v) => v * 2).filter((v) => v > 2); // [4]
const arr = _arr.reduce((t, v) => {
  v = v * 2;
  v > 2 && t.push(v);
  return t;
}, []);
// [4]
```

## 七、DOM 实用技巧

### 1、显示全部 DOM 边框

> 调试页面元素边界时使用

```js
[].forEach.call($$("*"), (dom) => {
  dom.style.outline =
    "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});
```

### 2、自适应页面

> 页面基于一张设计图但需做多款机型自适应，元素尺寸使用`rem`进行设置

```js
function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600
    ? (target.style.fontSize = "80px")
    : (target.style.fontSize = (target.clientWidth / width) * 100 + "px");
}
```

### 3、过滤 XSS

```js
function FilterXss(content) {
  let elem = document.createElement("div");
  elem.innerText = content;
  const result = elem.innerHTML;
  elem = null;
  return result;
}
```

### 4、存取 LocalStorage

> 反序列化取，序列化存

```js
const love = JSON.parse(localStorage.getItem("icoding"));
localStorage.setItem("icoding", JSON.stringify("I'm writing code"));
```

上
