---
title: "TypeScript 高级核心知识梳理"
source: "https://www.arryblog.com/guide/ts/typescript-advanced.html"
category: "TypeScript"
order: 20
---

# TypeScript 高级核心知识梳理

## 1、类型守卫

| 名称        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| Type Guards | 也称作类型保护，就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 |

```tsx
// 具体写法
type Square = { size: number };
type Rectangle = { width: number; height: number };
type Shape = Square | Rectangle; //（函数返回值设置为shape is Square）
function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}
```

## 2、函数重载

| 名称                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| Function overloading | ① 在原生 js 中 ，是没有函数重载概念的 ② 多重函数签名的方法实现函数重载 。ts 的重载是编译时而不是运行时进行的 |

```tsx
// 具体写法
function reverse(string: string): string;
function reverse(Array: string[]): string[];
function reverse(stringOrArray: string | string[]) {
  if (typeof stringOrArray == "string") {
    return stringOrArray.split("").reverse().join("");
  } else {
    return stringOrArray.slice().reverse();
  }
}
const c1 = reverse(["h", "e", "l", "l", "o"]);
const c2 = reverse("hello");
```

## 3、调用签名 call signiture

```tsx
// 具体写法
type Add = { (a: number, b: number): number };
const add: Add = (a: number, b: number) => {
  return a + b;
};
/**
    (1)容易扩展，可以改为interface
    (2)可以加入更多属性描述
    (3)可以重载
**/
// new 配合声明构造函数
type Point = { new (x: number, y: number): { x: number; y: number } };
const point: Point = class {
  constructor(public x: number, public y: number) {}
};
```

## 4、索引签名

| 名称           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| index signtrue | ① 通过索引 index 访问数据的处理方法叫做索引签名 ② 写法： const obj = { hello: "world" } const d = obj['hello']; |

## 5、只读 readonly

```tsx
// 举例
function reverseSorted(input: number[]): number[] {
  return input.sort().reverse();
}
const started = [1, 2, 3, 4, 5];
const res = reverseSorted(started);
console.log(started);
console.log(res);
// 直接对input参数进行排序倒置，这样原数组也会改变。
// 在参数中加readonly，只读，不能改写，修改倒序方式
function reverseSorted(input: readonly number[]): number[] {
  return [...input].sort().reverse();
}
const started = [1, 2, 3, 4, 5];
const res = reverseSorted(started);
console.log(started);
console.log(res);
```

## 6、双重断言 Double Assertion

```tsx
// 类型多的可以赋值给类型少的。例如：
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };
type Person = { name: string; email: string };
let point2: Point2D = { x: 0, y: 0 };
let point3: Point3D = { x: 10, y: 10, z: 10 };
let person: Person = { name: "jack", email: "jack@123456.com" };
point2 = point3;
// 如果想类型少的赋值给类型多的，可以断言
point3 = point2 as Point3D;
// 如果两个不相关的赋值，可以用双重断言
point3 = person as any as Point3D;
```

## 7、常量断言

| 名称            | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| const Assertion | 定义常量的值为对象，常量的值不能修改，但是对象的内容是可以修改的。为了不修改，可以用常量断言 const obj = { name: 'jack' } as const; 注意： ① 常量断言，可以用于断言任何一个类型 ② 可以把对象中任何的原始类型成员变量都转换为 readonly，只读属性 ③ 数组复杂数据类型，使用常量断言同样可以完成只读类型转化 |

## 8、this

```tsx
// 给this进行类型定义
function double(this: { value: number }) {
  this.value = this.value * 2;
}
const valid = { value: 20, double };
valid.double();
console.log(valid.value);
// 在函数声明中，this必须是第一个函数参数，this参数在编译过程中会从函数签名中删除掉，编译为js后就不存在了。
```

## 9、类型检测 typeof

| 名称   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| typeof | 检测对象类型。 举例：提取数据类型结构来作为基类 const center = { name: 'jack', age: 18 } type A = typeof center; const unit: A = { name: "mm", age: 19 } A 类型不需要一个个的去设置了 |

## 10、keyof

用法：keyof 获取对象中的属性名。

> 在对象中不存在的属性，编辑器不会有提示，输出结果是 undefined。如果想提示，可以用 keyof 来提取属性名做限制

```tsx
type Person = { name: string; age: number; location: string };
const jack: Person = { name: "jack", age: 18, location: "深圳" };
function getValueByKey(obj: any, key: keyof Person) {
  const value = obj[key];
  return value;
}
const age = getValueByKey(jack, "age");
const email = getValueByKey(jack, "email");
console.log(age);
console.log(email);
```

## 11、类型查找

| 名称         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| lookup types | 从数据中提取类型来做限制 type RequestData = { payment: { creditCartNumber: string } } function getPayment(): RequestData["payment"] { return { creditCartNumber: '1234567890' } } |

## 12、类型映射 Mapped Types

```tsx
// Readonly是内置函数，具体如下：
export type Readonly<T> = { readonly [key in keyof T]: T[key] };
// 使用如下：
type Point = { x: string; y: number; z: number };
const center: Readonly<Point> = { x: "0", y: 0, z: 0 };
center.x = 100;
```

## 13、映射修饰符

| 名称            | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| Mapped Modifier | ① readony 和？都可以看做是修饰符 ② -readonly 会去掉 readonly 修饰符 -？ 会去掉？修饰符 ③ Parttial 是内置函数，具体如下： `export type Partial <T> = { [P in keyof T]?: T[P]; }` |

