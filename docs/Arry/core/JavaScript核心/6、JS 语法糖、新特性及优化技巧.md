---
title: "JS 语法糖、新特性及优化技巧"
source: "https://www.arryblog.com/guide/js/js-optimization.html"
category: "JavaScript"
order: 6
---

# JS 语法糖、新特性及优化技巧

TIP

本篇介绍一些新的**语法糖**，JavaScript 最佳实践和其中的新特性，这些都是我们作为一名前端开发人员必须了解的，因为它会给我们的工作和开发带来更高的效率，它可以优化你的 JavaScript 代码，使代码更简洁。

- 代码作为一门现代高级工艺，推动着人类科学技术的发展，同时犹如文字一样承托着人类文化的进步。
- 作为一名优秀的工程师，我们是可以写出让人耳目一新，让人容易理解，让人舒服自然，像是诗一样的代码，成为一名编程艺术家。

接下来，我们就一起来开启代码艺术之旅吧 ^_^

## 1、使用 Array.includes 来处理多重条件的 if 语句

```js
// 普通写法，乍一看，这么写似乎没什么大问题。然而，如果我们想要匹配更多的条件呢？我们是不是得用更多的 “||” 来拓展这条语句
if (x === "abc" || x === "def" || x === "ghi" || x === "jkl") {
  // code logic
}

// 我们可以使用更简洁的语法 Array.includes(Array.includes) 重写以上条件句
if (["abc", "def", "ghi", "jkl"].includes(x)) {
  // code logic
}
```

## 2、If … else 的缩写法

> 当我们的 if-else 条件中的逻辑比较简单时，可以使用这种简洁的方式：三元条件运算符。

```js
// 普通写法
let test;
let x = 20;
if (x > 100) {
  test = true;
} else {
  test = false;
}

// 简洁写法
let test = x > 10 ? true : false;
console.log(test); // true
// 或者我们可以直接使用
let test = x > 10;
console.log(test); // true
```

> 如果包含嵌套的条件，我们也可以这样写。

```js
let x = 300,
  test2 = x > 100 ? "大于100" : x < 50 ? "小于50" : "在50到100之间";
console.log(test2); // "大于100"
```

## 3、定义变量

> 当我们定义两个值相同或类型相同的变量，可以使用这样的缩写法

```js
// 普通写法
let test1;
let test2 = 1;

// 简洁写法
let test1,
  test2 = 1;
```

## 4、对 Null、Undefined、Empty 这些值的检查

> 我们创建一个新变量，有时候需要检查是否为 Null 或 Undefined。JavaScript 本身就有一种缩写法能实现这种功能。

```js
// 普通写法
if (test1 !== null || test1 !== undefined || test1 !== "") {
  let test2 = test1;
  console.log(test2);
}

// 简洁写法
let test2 = test1 || "";

// 对 Null 值的检查以及默认赋值
let test1 = null,
  test2 = test1 || "";
console.log("null检查：", test2); // 输出 ""
// 对 Undefined 值的检查以及默认赋值
let test1 = undefined,
  test2 = test1 || "";
console.log("undefined检查：", test2); // 输出 ""
// 对正常值的检查
let test1 = "test",
  test2 = test1 || "";
console.log(test2); // 输出: 'test'
```

> 如果你认为上述语法还是太复杂，还有更简单的语法：可以使用聚合运算符 “??”

## 聚合运算符

> **??** 是聚合运算符，如果左值为 null 或 undefined，就返回右值。默认返回左值。

```js
let test = null ?? "default";
console.log(test); // default

let test1 = 0 ?? 2;
console.log(test1); // 0
```

## 5、同时为多个变量赋值

> 当我们处理多个变量，并且需要对这些变量赋不同的值，这种缩写法很有用。

```js
// 普通写法
let test1, test2, test3;
test1 = 1;
test2 = 2;
test3 = 3;

// 简洁写法
let [test1, test2, test3] = [1, 2, 3];
```

## 6、赋值运算符缩写法

> 编程中使用算术运算符是很常见的情况，以下是 JavaScript 中赋值运算符的应用。

```js
// 普通写法
test1 = test1 + 1;
test2 = test2 - 1;
test3 = test3 * 20;

// 简洁写法
test1++;
test2--;
test3 *= 20;
```

## 7、判断变量是否存在的缩写法

> 注意：当 test1 为任何值时，程序都会执行 if(test1){ } 内的逻辑，这种写法在判断 NULL 或 undefined 值时普遍使用。

```js
// 普通写法
if (test1 === true)
if (test1 !== "")
if (test1 !== null)

// 简洁写法：它将检查 空字符串''，null和undefined
if (test1)
```

## 8、用于多个条件的与(&&)运算符

> 如果需要实现某个变量为 true 时调用一个函数，可以使用 && 运算符

```js
// 普通写法
if (test1) {
  callMethod(); // 调用方法
}

// 简洁写法
test1 && callMethod();
```

## 9、foreach 循环缩写法

> 这是循环结构对应的缩写法

```js
// 普通写法
for (var i = 0; i < testData.length; i++)

// 简洁写法
for (let i in testData)
// 或
for (let i of testData)
```

> 循环遍历数组的每一个值

```js
function testData(element, index, array) {
  console.log("test[" + index + "] = " + element);
}

[11, 24, 32].forEach(testData);
// 输出 test[0] = 11, test[1] = 24, test[2] = 32
```

## 10、比较结果的返回

> 在 return 语句中，我们也可以使用比较的语句。
>
> 这样，原来需要 5 行代码才能实现的功能，现在只需要 1 行，大大减少了代码量。

```js
// 普通写法
let test;
function checkReturn() {
  if (!(test === undefined)) {
    return test;
  } else {
    return callMe("test");
  }
}
function callMe(val) {
  console.log(val);
}
var data = checkReturn();
console.log(data); // output test

// 简洁写法，一行代码搞定
function checkReturn() {
  return test || callMe("test");
}
```

## 11、箭头函数

```js
// 普通写法
function add(a, b) {
  return a + b;
}

// 简洁写法
const add = (a, b) => a + b;

// 再举个栗子，普通写法
function callMe(name) {
  console.log("Hello", name);
}

// 简洁写法
callMe = (name) => console.log("Hello", name);
callMe("arry老师"); // Hello arry老师
```

## 12、简短的函数调用语句

> 我们可以使用三元运算符实现如下功能

```js
// 普通写法
function test1() {
  console.log("test1");
}
function test2() {
  console.log("test2");
}
var test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}

// 简洁写法
(test3 === 1 ? test1 : test2)();
```

## 13、switch 对应的缩写法

> 我们可以把条件值保存在名值对中，基于这个条件使用名值对代替 switch

```js
// 普通写法
switch (data) {
  case 1:
    test1();
    break;
  case 2:
    test2();
    break;
  case 3:
    test();
    break;
  // And so on...
}

// 简洁写法
var data = {
  1: test1,
  2: test2,
  3: test,
};
data[something] && data[something]();
```

## 14、隐式返回缩写法

> 使用箭头函数，我们可以直接得到函数执行结果，不需要写 return 语句。

```js
// 普通写法
function calculate(diameter) {
  return Math.PI * diameter;
}

// 简洁写法
calculate = (diameter) => Math.PI * diameter;
calculate(10); // 31.41592653589793
```

## 15、十进制数的指数形式

```js
// 普通写法
for (var i = 0; i < 10000; i++) { ... }

// 简洁写法
for (var i = 0; i < 1e4; i++) {
```

## 16、默认参数值

```js
// 普通写法
function add(test1, test2) {
  if (test1 === undefined) test1 = 1;
  if (test2 === undefined) test2 = 2;
  return test1 + test2;
}

// 简洁写法
add = (test1 = 1, test2 = 2) => test1 + test2;
add(); // 输出: 3
```

## 17、延展操作符的缩写法

```js
// 普通写法
const data = [1, 2, 3];
const test = [4, 5, 6].concat(data); // 使用concat()连接

// 简洁写法
const data = [1, 2, 3];
const test = [4, 5, 6, ...data];
console.log(test); // [ 4, 5, 6, 1, 2, 3]
```

> 我们也可以使用延展操作符来克隆

```js
// 普通写法
const test1 = [1, 2, 3];
const test2 = test1.slice(); // 克隆数组

// 简洁写法
const test1 = [1, 2, 3];
const test2 = [...test1]; // 克隆数组
```

## 18、模板字符串

> 如果你对使用 + 符号来连接多个变量感到厌烦，这个缩写法可以帮到你

```js
// 普通写法
const welcome = "Hi " + test1 + " " + test2 + ".";

// 简洁写法
const welcome = `Hi ${test1} ${test2}`;
```

## 19、跟多行文本有关的缩写法

> 当我们在代码中处理多行文本时，可以使用这样的技巧

```js
// 普通写法
const data =
  "abc abc abc abc abc abc\n\t" + "test test,test test test test\n\t";

// 简洁写法
const data = `abc abc abc abc abc abc
         test test,test test test test`;
```

## 20、对象属性的赋值

```js
let test1 = "a";
let test2 = "b";
// 普通写法
let obj = { test1: test1, test2: test2 };

// 简洁写法
let obj = { test1, test2 };
```

## 21、字符串转换为数字

```js
// 普通写法
let test1 = parseInt("123");
let test2 = parseFloat("12.3");

// 简洁写法
let test1 = +"123";
let test2 = +"12.3";
```

## 22、解构赋值缩写法

```js
// 普通写法
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;

// 简洁写法
const { test1, test2, test3 } = this.data;
```

## 23、Array.find 缩写法

> 当我们需要在一个对象数组中按属性值查找特定对象时，find 方法很有用

```js
const data = [
  {
    type: "test1",
    name: "abc",
  },
  {
    type: "test2",
    name: "cde",
  },
  {
    type: "test1",
    name: "fgh",
  },
];
// 普通写法
function findtest1(name) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].type === "test1" && data[i].name === name) {
      return data[i];
    }
  }
}

// 简洁写法
filteredData = data.find(
  (data) => data.type === "test1" && data.name === "fgh"
);
console.log(filteredData); // { type: 'test1', name: 'fgh' }
```

## 24、查询条件缩写法

> 如果我们要检查类型，并根据类型调用不同的函数，我们既可以使用多个 else if 语句，也可以使用 switch，除此之外，如果有缩写法，代码会是怎么样呢？

```js
// 普通写法
if (type === "test1") {
  test1();
} else if (type === "test2") {
  test2();
} else if (type === "test3") {
  test3();
} else if (type === "test4") {
  test4();
} else {
  throw new Error("Invalid value " + type);
}

// 简洁写法
var types = {
  test1: test1,
  test2: test2,
  test3: test3,
  test4: test4,
};
var func = types[type];
!func && throw new Error("Invalid value " + type);
func();
```

## 25、按位非和 indexOf 缩写法

> 我们以查找特定值为目的迭代一个数组，通常用到 **indexOf()** 方法

```js
// 普通写法
if (arr.indexOf(item) > -1) {
  // 找到 item
}
if (arr.indexOf(item) === -1) {
  // 没找到 item
}

// 简洁写法
if (~arr.indexOf(item)) {
  // 找到 item
}
if (!~arr.indexOf(item)) {
  // 没找到 item
}
```

> 对除 **`-1`** 外的任何数进行 **`按位非(~)`** 运算都会返回真值
>
> 把按位非的结果再次进行逻辑取反就是 **`!~`**，这非常简单，或者我们也可以使用 **`includes()`** 函数：

```js
if (arr.includes(item)) {
  // 如果找到该项，则为 true
}
```

## 26、Object.entries()

> 该特性可以把对象转换成一个由若干对象组成的数组

```js
const data = { test1: "abc", test2: "cde", test3: "efg" };
const arr = Object.entries(data);
console.log(arr);
/** 
    [ 
        [ 'test1', 'abc' ],
        [ 'test2', 'cde' ],
        [ 'test3', 'efg' ]
    ]
**/
```

## 27、Object.values()

> 这也是 ES8 中介绍的一个新特性，它的功能与 `Object.entries()` 类似，但没有其核心功能：

```js
const data = { test1: "abc", test2: "cde" };
const arr = Object.values(data);
console.log(arr); // 输出 [ 'abc', 'cde']
```

## 28、两个位运算符缩写

> 两个按位非运算符只适用于 32 位整型

```js
// 普通写法
Math.floor(1.9) === 1; // true

// 简洁写法
~~1.9 === 1; // true
```

## 29、把一个字符串重复多次

> 我们可以使用 for 循环把一个字符串反复输出多次，那这种功能有没有缩写法呢？

```js
// 普通写法
let test = "";
for (let i = 0; i < 5; i++) {
  test += "test ";
}
console.log(str); // test test test test test

// 简洁写法
"test ".repeat(5); // test test test test test
```

## 30、找出一个数组中最大和最小的值

```js
const arr = [1, 2, 3];
Math.max(...arr); // 3
Math.min(...arr); // 1
```

## 31、获取字符串中的字符

```js
let str = "abc";
// 普通写法
str.charAt(2); // c

// 简洁写法
// 注意：如果事先知道目标字符在字符串中的索引，我们可以直接使用该索引值。如果索引值不确定，运行时就有可能抛出 undefined
str[2]; // c
```

## 32、幂运算的缩写法

```js
// 普通写法
Math.pow(2, 3); // 8

// 简洁写法
2 ** 3; // 8
```

## 33、数组去重

```js
[...new Set([1, 2, 8, 3, 6, 4, 5, 6, 7, 8, 2, 3, 4, 5, 9])];
```

