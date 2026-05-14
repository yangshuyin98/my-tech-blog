---
title: "选择npm时，应考虑的5个事项"
source: "https://www.arryblog.com/guide/js/npm-selection.html"
category: "npm"
order: 5
---

# 选择 npm 时，应考虑的 5 个事项

为项目选择第三方 npm 包时，应该考虑的 5 个事项：



- 安装 NPM 包是一项非常简单的任务。我们经常会使用 **`npm install`** 安装依赖
- 但是，选择正确的软件包比您想象的要困难得多，截止目前 NPM 平台上已经托管超过 190w+ 个包。
- 面对这么多的 package，我们在企业项目开发中该如何选择适合的第三方 NPM 包呢，应该考虑哪些事项 ？

以下总结了，5 点最佳实践 ！

## 1、检查开源许可证（License）

开源许可证是一种法律许可。通过它，版权拥有人明确允许用户可以免费地使用、修改、共享版权的软件。

版权法默认禁止共享，也就是说，没有许可证的软件，就等同于保留版权，虽然开源了，用户只能看看源码，不能用，一用就会侵犯版权。所以软件开源的话，必须明确地授予用户开源许可证。

![image-20220430031025144](https://www.arryblog.com/assets/img/image-20220430031025144.eb464433.png)

TIP



在 [www.npmjs.com (opens new window)](https://www.npmjs.com/)上查看 npm 包的 LicenseLicense 。通常分两大类："CopyLeft（著佐权）" 和 "Permissive（宽松式）"：

- copy-left：如果你使用了这个包，那么你的代码也必须开源。这对一些商业化的项目不太友好，比如 GPL 和 LGPL 协议。
- permissive：这些 License 对包做了最低限度的使用限制，允许闭源，可以说几乎没有限制，但是各自又有一些区别。

如果我们不确定是否合规，可以用 `license-checker`工具来一次性检查项目中的 npm 包是否都是合规的。
检测工具地址：[https://www.npmjs.com/package/license-checker(opens new window)](https://www.npmjs.com/package/license-checker)

![image-20220430034727766](https://www.arryblog.com/assets/img/image-20220430034727766.4f1b535f.png)

## 2、看贡献频率和下载量

TIP

- 由于有很多类似的包，所以 NPM 和 GitHub 都提供了统计数据，可供我们参考。
- 可以在 NPM 包主页上轻松查看每周下载次数和统计图表。通常数字越大，使用的人元多，你就可以信任该软件包。

![image-20220430035226131](https://www.arryblog.com/assets/img/image-20220430035226131.efbe17f9.png)

除此之外

- 您还可以使用[npm 趋势 (opens new window)](https://www.npmtrends.com/)之类的工具来比较并查看哪个 NPM 包在一段时间内的下载量最多。
- 它可以帮助您一次比较多个 NPM 包，以更好地了解它们的受欢迎程度。

工具链接：[https://www.npmtrends.com/ (opens new window)](https://www.npmtrends.com/)，对比效果如下：

![image-20220430035706364](https://www.arryblog.com/assets/img/image-20220430035706364.9081a3a9.png)

此外

GitHub 存储库中的星数、分叉、提交频率和贡献者的数量表明了库的受欢迎程度和社区贡献。

- 可以使用 GitHub Stats 工具来比较这些统计数据，以选择最好的数字。
- 但是，评估增长趋势也很重要。例如，新库可以更优雅地解决问题，但还处于早期阶段。

## 3、权衡包体积大小

TIP

对于前端来说，优化性能最直接的手段就是降低代码包大小。所以选择第三方包时，也要考虑它的包体积。

- `bundlephobia`可以对包体积进行可视化分析，可以从下图中看出，jQuery 打包后会有将近 87.9 kB，gzip 压缩后会有 30.3kB
- 检测包大小的工具：[https://bundlephobia.com/ (opens new window)](https://bundlephobia.com/)，效果如下：

![image-20220430041217659](https://www.arryblog.com/assets/img/image-20220430041217659.eff8c3de.png)

## 4、是否有大型团队在进行维护

TIP

尽管大部分的 NPM 包都包含较全的文档，但是往往也都存在一些兼容性、JS 异常或性能相关的 issue。
因此如果背后有大型团队在进行维护，我们使用起来会更放心。

> **可以关注以下几个方面：**

### Used By 和 Contributors “使用者”和“贡献者”计数

> 数量越多意味着你不是早期用户，很多开发者已经帮你趟过水了。

![image-20220430042008234](https://www.arryblog.com/assets/img/image-20220430042008234.41460107.png)

### Contributors 贡献者选项卡

查看贡献率

可以直观地看到贡献者的贡献频率，如果其中很多都贡献频繁，意味着仓库受到社区更多的关注和支持。

![image-20220430042200628](https://www.arryblog.com/assets/img/image-20220430042200628.a31a0fba.png)

### Community Standards 社区标准

将仓库与开源社区的规范标准进行比较，达到的标准越多意味着这个仓库越成熟。

![image-20220430042803546](https://www.arryblog.com/assets/img/image-20220430042803546.b77639fd.png)

## 5、评估安全性

包安全性是选择 NPM 包的另一个关键因素，可以在仓库的「**Security**」 tab 下了解它的安全策略。

![image-20220430043614844](https://www.arryblog.com/assets/img/image-20220430043614844.e7dd8567.png)

> 安全策略

如果维护者已经采取了措施来确保安全性，会显示**已激活**。

- 对于项目中已有的 NPM 依赖，可以使用命令 npm audit 来进行安全性检查。
- npmgraph 能够对包进行依赖可视化分析来确保没有安全漏洞，然后再安装到项目当中。

可视化工具链接地址：[https://npm.anvaka.com/(opens new window)](https://npm.anvaka.com/)

![image-20220430044208042](https://www.arryblog.com/assets/img/image-20220430044208042.f3114cac.png)

## 6、总结

> 最佳实践

我们在日常学习中或企业项目开发中选择第三方包 5 点最佳实践

- 检查开源许可证
- 看贡献频率和下载量
- 权衡包体积大小
- 是否有大型开发团队在进行维护
- 评估安全性

在做选择时，我们最好能根据以上的维度产出一份调研文档，并在团队内分享和讨论，最终得出一致的结论。



