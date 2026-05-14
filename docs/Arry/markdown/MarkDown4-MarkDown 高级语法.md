---
title: "MarkDown4-MarkDown 高级语法"
source: "https://www.arryblog.com/guide/html5/markdown.html"
category: "guide/html5"
---

## 四、MarkDown 高级语法

TIP

深入浅出 LaTeX 公式，应用场景，表情符号

### 1、LaTeX 公式

TIP

LaTeX 是一种用于高质量排版的技术和科学文档的排版系统。在 Markdown 中嵌入 LaTeX 公式，可以极大地提升文档的专业性和可读性。涵盖了数学、物理、化学等多个学科领域。

> 官网文档：

- **LaTeX 的官网：** [https://www.latex-project.org/ (opens new window)](https://www.latex-project.org/)。LaTeX 作为一种高质量的排版系统，尤其擅长于技术和科学文档的排版，它包含了许多为此类文档制作而设计的功能，并且 LaTeX 本身是免费软件，用户无需支付使用费用。
- **在线学习平台**：如 Overleaf（https://www.overleaf.com/）等平台提供了LaTeX的在线编辑和学习环境，用户可以在这些平台上学习LaTeX语法、编辑LaTeX文档，并与其他LaTeX用户交流和分享经验。
- 格式化数学公式的教程和快速参考指南：访问 [MathJax (opens new window)](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)参考更多使用方法

### 1.1、行内公式

TIP

使用 `$...$` 将公式包围起来

```markdown
// 这是一个行内公式示例
$E = mc^2$
```

> 渲染效果：



### 1.2、行间公式

TIP

使用 `$$...$$` 或

`

...

`

（某些 Markdown 解析器支持）将公式包围起来

```markdown
这是一个行间公式：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

> 渲染效果：

这是一个行间公式：





### 1.3、常用符号与命令

TIP

- **上标与下标**：`^` 表示上标，`_` 表示下标。例如：`$x_i^2$` 渲染为 。
- **分数**：`\frac{分子}{分母}`。例如：`$\frac{a}{b}$` 渲染为 
- **根号**：`\sqrt{表达式}`。例如：`$\sqrt{x^2 + y^2}$` 渲染为 
- **求和与积分**：`\sum` 和 `\int` 分别表示求和与积分。例如：`$\sum_{i=1}^{n} i$` 和 `$\int_{a}^{b} f(x) \, dx$`。
- **矩阵**：使用 `\begin{matrix}...\end{matrix}` 或 `\begin{bmatrix}...\end{bmatrix}` 等环境来创建矩阵。
- **希腊字母**：`\alpha`，`\beta`，`\gamma`，`\delta` 等表示希腊字母。

### 2、LaTeX 应用场景

TIP

可用于数学、物理、化学等多个学科领域

### 2.1、学术论文

TIP

LaTeX 是学术界广泛使用的排版系统，特别适合编写包含复杂数学公式的学术论文

```markdown
在量子力学中，波函数的归一化条件可以表示为：

$$
\int_{-\infty}^{\infty} |\psi(x)|^2 \, dx = 1
$$
```

> 渲染效果：

在量子力学中，波函数的归一化条件可以表示为：





### 2.2、技术文档

TIP

技术文档通常包含大量的数学和物理公式，使用 LaTeX 可以使这些公式更加清晰和易于理解

```markdown
在电路分析中，欧姆定律可以表示为：

$$
V = IR
$$

其中，$V$ 是电压，$I$ 是电流，$R$ 是电阻。
```

> 渲染效果：

在电路分析中，欧姆定律可以表示为：





> 其中， 是电压， 是电流， 是电阻。

### 2.3、博客与网站

TIP

许多博客平台和网站支持 Markdown 和 LaTeX，使得在网页上展示数学公式变得简单而优雅

```markdown
在经济学中，边际效用递减规律可以表示为：

$$
MU_x = \frac{\Delta U}{\Delta x}
$$

其中，$MU_x$ 是商品 $x$ 的边际效用，$\Delta U$ 是总效用的变化量，$\Delta x$ 是商品 $x$ 的消费量的变化量。
```

> 渲染效果：

在经济学中，边际效用递减规律可以表示为：





> 其中， 是商品 的边际效用， 是总效用的变化量， 是商品 的消费量的变化量。

### 2.4、教育材料

TIP

LaTeX 是制作教育材料的理想工具，特别是那些需要精确表示数学概念的教材、讲义 和 课件

```markdown
在微积分中，导数的定义可以表示为：

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$
```

> 渲染效果：

在微积分中，导数的定义可以表示为：





### 3、基础数学表达式

TIP

涵盖了从基础到稍复杂的各种数学表达式和符号

### 3.1、分数

TIP

- LaTeX 公式：`\frac{a}{b}`
- 渲染效果：

### 3.2、根号

TIP

- LaTeX 公式：`\sqrt{x}` 或 `\sqrt[n]{x}`（n 次根号）
- 渲染效果： 或 

### 3.3、上标 与 下标

TIP

- LaTeX 公式：`x^2`，`x_i`
- 渲染效果：x^2^，

### 3.4、求和 与 积分

TIP

- LaTeX 公式：`\sum_{i=1}^{n} i`，`\int_{a}^{b} f(x) \, dx`
- 渲染效果： ， 

### 4、复杂数学公式

TIP

极限，偏导数，积分中的复杂表达式，多重求和与积分

### 4.1、极限

TIP

- LaTeX 公式：`\lim_{x \to \infty} f(x)`
- 渲染效果：

### 4.2、偏导数

TIP

- LaTeX 公式：`\frac{\partial f}{\partial x}`
- 渲染效果：

### 4.3、积分中的复杂表达式

LaTeX 公式

```latex
\int_{0}^{\frac{\pi}{2}} \sin^2(x) \, dx = \frac{\pi}{4}
```

> 渲染效果：



### 4.4、多重求和与积分

LaTeX 公式

```latex
\sum_{i=1}^{n} \sum_{j=1}^{m} \int_{a}^{b} f(i, j, x) \, dx
```

渲染效果：



### 5、特定数学领域公式

TIP

概率论中的期望、线性代数中的向量点积、线性代数中的向量点积

### 5.1、概率论中的期望

TIP

- LaTeX 公式：`E[X] = \sum_{x} x \cdot P(X=x)`
- 渲染效果：

### 5.2、线性代数中的向量点积

TIP

- LaTeX 公式：`\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta`
- 渲染效果：

### 5.3、微积分中的链式法则

TIP

- LaTeX 公式：`\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}`
- 渲染效果：

### 6、常用 LaTeX 公式符号

TIP

LaTeX 公式中的符号非常丰富，涵盖了数学、物理、化学等多个学科领域。

> 以下是一个 LaTeX 公式符号的大全，按照不同的分类进行整理。

### 6.1、基本数学符号

| 符号     | LaTeX 命令            | 示例                          | 渲染效果 |
| :------- | :-------------------- | :---------------------------- | :------- |
| 加号     | `+`                   | `a + b`                       |          |
| 减号     | `-`                   | `a - b`                       |          |
| 乘号     | `\times` 或 `\cdot`   | `a \times b` 或 `a \cdot b`   | 或       |
| 除号     | `\div` 或 `/`         | `a \div b` 或 `a / b`         | 或       |
| 等于     | `=`                   | `a = b`                       |          |
| 不等于   | `\neq`                | `a \neq b`                    |          |
| 大于     | `>`                   | `a > b`                       |          |
| 小于     | `<`                   | `a < b`                       |          |
| 大于等于 | `\geq` 或 `\geqslant` | `a \geq b` 或 `a \geqslant b` | 或       |
| 小于等于 | `\leq` 或 `\leqslant` | `a \leq b` 或 `a \leqslant b` | 或       |
| 约等于   | `\approx`             | `a \approx b`                 |          |
| 正负     | `\pm`                 | `a \pm b`                     |          |
| 无穷大   | `\infty`              | `\infty`                      |          |

### 6.2、集合符号

| 符号   | LaTeX 命令                   | 示例                         | 渲染效果                                                     |
| :----- | :--------------------------- | :--------------------------- | :----------------------------------------------------------- |
| 属于   | `\in`                        | `a \in A`                    |                                                              |
| 不属于 | `\notin`                     | `a \notin A`                 |                                                              |
| 包含   | `\subset`                    | `A \subset B`                |                                                              |
| 包含于 | `\subseteq`                  | `A \subseteq B`              |                                                              |
| 并集   | `\cup`                       | `A \cup B`                   |                                                              |
| 交集   | `\cap`                       | `A \cap B`                   |                                                              |
| 空集   | `\emptyset` 或 `\varnothing` | `\emptyset` 或 `\varnothing` | ![image-20241218013901539](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAeCAIAAAD7DzolAAAEsElEQVRYhe2Xf1AUZRjHn91b/COBrNGsScdkctDcC3VER8Pd/DXOlXZ7J5g2/phK5TD+UFGGGuUmKseUP3JiRkGaZNBoVLgI4SYYo8P8QaIhmz8wu2SE4DxEOXG4vX33fftj0/hx7wHVBI5+5/7Y993nee4z33v2eW8ZQgg8nGIHG+Cf6zH6YOgx+mDo0UBHCA2ksqco1ZIpA3idG0RLpjxQsL7VBzrGWEVIUdSOjo4p8xMGSK9rWoZrX1S+xbjvP8bnQtzTMC7/4VT+kdILVy4zmJkXNwNphAuV0VPuRg8YR48EsO5yWP8tak+FAvHeaiv8tnzbxnUTJ7yQufdAcWml+3rDS9Evdg9ybojPOUErUW0z7uy6Nh10rY+hxCKkYaxhQgwGA8OwnIHVNznOEDyBUIQQSv806/PcQ/o1L0o7PstNse9GCNFSeqh2r5RU1tLPYL+imJYn8oJ5smCeLEjvpWV0dvqrTtfMs65V1eDfSHUdaVrdpaubbKsBwB8IAAOzp7+c/MGObZsTR0RGdI+VM8X0vK4bKzJkm5FWubcuX3UvW5eyKXHV6uUSAKAA2rM/f/qi5QCkpuIwzXXqY0owufFHC0MAAA58XRwbw7OsAQB8vo5g4dEfHnXILofsclSmRetbz4+LPtFwU79udaYZxZwLwTIDATX5/R1Llyx85y0rx7Icyw4bFjY7duqkCeMZIAaWSki90XzT61cCLMtqGv6y4Jv1K+NZliEAvrt3aSk9NHJMFLgbWwEAPFWV9XPSzEG7/LjrdEvrLXtKkr7UMC53ncrNL/xq766J48cVOMoGjN7U7GUYgjHBGCuKMn0KjzFmGGi93d5PdHh27JzqG00AIBfbq02JptFBo1w/nTcvEBmGAQCEUHbeYdfJs1/syQgL4xa/Nv/360208tReHxE5nBCGZZnTNbVPPRnJsgzLsgDAsUE7r94eb7E/WK0AAIBRY6LA9ZtXrkh2rsly0AZLp/+eceIknXv7zqyxY5/7KC1Z7+/rDc3hEU/QCKmuR4SHM0AQ1gqPVVhfn69zAwFMcLDwIL0O8EzUzHp7fHreiowt9IdWnDXzUGGJqiJb6sfC7FjbqgSO4wAAY3yk9DvT3DhqJm1atd1p50Wp8sfqmLnWZo+XEHLwaMm0hctut/v6Oe/0+cgL2bV/rep2C9Luup4xSiDAC9LazdsLiso0jB/sX6y/NlmUVFWlFae6Hhk+fNGrrxz7/qSG8aiRTwPAr+6GGVMmRQyn/YJypmgx3v9scHou7LOsLAAAZ4X+D8Db6AbTwl72V5+TAciZ8/Idnw9pmqZpqqYVlR5/c92WvD2fcCFO7xCeXbxyLW7xqi3puxBCZ3/+hRfMJ86c6xl0syxJkHihq7uEkJbCrfd36rJ53ey6bH5rmbd7tqqqvCCVlFf5lUDCuxt50cwLEi9KvCDV1F4KwUYIYQj9tdofUJe+vVFR/c3eNnHm1AVxs5aY5oUZKMfy3/IUpdrsUV1OJTnHmOwEgDVZjt5NjxB60NyKqhoYBoBhOQNHn+h9u64oCi+8cc/vVxRFCQQ0TQttw/+sUK53tWQIqg/0oaxH4wVvqOkx+mDoIUb/E/qGF0c2I+ozAAAAAElFTkSuQmCC) |

### 6.3、函数和运算符

| 符号   | LaTeX 命令                 | 示例                            | 渲染效果 |
| :----- | :------------------------- | :------------------------------ | :------- |
| 求和   | `\sum`                     | `\sum_{i=1}^n a_i`              |          |
| 积分   | `\int`                     | `\int_a^b f(x) \, dx`           |          |
| 极限   | `\lim`                     | `\lim_{x \to \infty} f(x)`      |          |
| 导数   | `f'(x)` 或 `\frac{df}{dx}` | `f'(x)` 或 `\frac{df}{dx}`      | 或       |
| 偏导数 | `\partial`                 | `\frac{\partial f}{\partial x}` |          |

### 6.4、矩阵与行列式

| 符号   | LaTeX 命令                        | 示例                                         | 渲染效果                                                     |
| :----- | :-------------------------------- | :------------------------------------------- | :----------------------------------------------------------- |
| 矩阵   | `\begin{matrix} ... \end{matrix}` | `\begin{matrix} a & b \\ c & d \end{matrix}` | ![image-20241218013653083](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA1CAIAAABqceQaAAAE1ElEQVRoge2YaUybZRzA/+/RMjZB51YoIOxCrpZVChljI3UbM2G4GGAajZos6gcTjfHAT5tiSNh0YcTMQFwgLu4WBpqNbYGyCCq7OAflGCArrJyFsqHj6vscfmiyeBT6tDSASX/fnjfP/3l/z31wlFJY9vBLLcCEx9J9eCzdh7iYP0MIWa1IEHkvudypwMWzRAjHJL1MOS42OrIwN0sul7HHLl6Pi6JQry8KXR8SqPQTZc61zqKOyyHzWI/xvr9iLc9xTgU6tsQYE0JcFfsHt+qbKcBuXQIhFGMnypzPEiF8qaI6Kyc/t+Ds5PR06WX9QrZTQkh9U9tmVbi+6oZmV1reibOSJC3UUpLQZ199c+XaL6+m7olTR8SnvJ7/XRFCaCGWhrvdhvbOQKWiXl/8u9H0Rc5xjDFLrP1RjAk5daGso8uY9+WB4CBl6Kw1NCRYowoXRdfXhL7+ocGR0Q/f3f9aWjIABAcFVNfUYUIEQXAYa78tHzz841zpFV1CbKBSAQDdRlN3rykmOpJzctT/nfrmduBo8s5tAIAQ6R8YfjQ1yTiC7FvWNraYxyxxGpWtotdvN/IAW7Rql6cRIaTJ0LbmqdVKxRoAAKCtd3tCggIZK23f0jRgBoAtWjUAYEJu1jerw0NX+/q+/VEmQkwj6d+WlP45OR2gVNh6o9HQPmqxpKckMa7t9i3DQ9cB0Lo7bYSQq/pfG1rbNqvCamqbJqemed6VThd4PmzjujHLQ4xR/8DQ8e9LUpJ0LyXvYAzn7C4uhJCiSxWll6t6e/sy3tvv7b3i8yPHKPANFUVeXs5twY+ZnZVOnLtQXl13r9f4RvreT99/SxQdz5v5LAEAY0KAAqGCKAClGGMAXiZjLdcuCGOCKceBKApOTcQ5LZcV/4/zpcfSfXgs3YfH0n14LN3H0lhSSq1WaXJqur2rhyX/0uyQCJGYF/YBBaDQUFns8Py2NG0pinxdeZE2WqXbGstyMlqycTk8OtZoaNNqVDzv2IHptkUIwRgLoujsbd9uUYgQjuNaWjuBgibqWZYoB5aShPJOnP+5ps5oMr24c3v2wY9lzEfX/zIza80++u0901Bi/HOTMzN+iqc1qgiWwPla2ypJWTn5gsAXFR7NzcwYHh039t13WXFqeuaTzCMadfjJ/EM+T6wqr/xNExVG2fpmTkuEcEZmzp22rjf37V25Qj7xaGrFSm9fnyddU5Qk6YMDh8ceTKSm7JYJQvKuRPP4uEYdKWe84NM50FfdUOtSTxZftCUxxgihuTI7pLL6pvr51ENfF9iSP129ptalGtq7GMPtV4VSOmgeBQBtdJTtC8tMnKchBkfMQCEuRmVL1tQ2bVwfHLZpPSGEpeQ5cwQpFQDwTIDf4y81t5o6uowuWBJCZDIRAHTxsQCAMb5V16yNjhi2WHamvYMYnorsW3IclxivDfT3v367EWEsIVRwuvTwsQLLxIQLloIghG4IAYCWjk6EUEzSK3KZzGeVz5kfynRbtSLDO9E8N108OGI+VVLWYujieV6XEJuekuTvt9YFSwCwStKPZfrC8xfN5tE9O7Zv2hB8pqRsW1x09sEMGcO7sIN93CohoJQXeJYazw8hhBDgOMrzvG1OAADLg5tjy2WC53zpPjyW7sNj6T48lu7jL+ytp71lzeMGAAAAAElFTkSuQmCC) |
| 行列式 | `\det`                            | `\det(A)`                                    |                                                              |

### 6.5、其他符号

| 符号   | LaTeX 命令                                                   | 示例                                                   | 渲染效果 |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------- | :------- |
| 角度   | `\angle`                                                     | `\angle ABC`                                           |          |
| 垂直   | `\perp`                                                      | `AB \perp CD`                                          |          |
| 平行   | `\parallel`                                                  | `AB \parallel CD`                                      |          |
| 弧     | `\overarc`                                                   | `\overarc{AB}`                                         |          |
| 点积   | `\cdot`                                                      | `\vec{a} \cdot \vec{b}`                                |          |
| 叉积   | `\times`                                                     | `\vec{a} \times \vec{b}`                               |          |
| 整除   | `\mid`                                                       | `a \mid b`                                             |          |
| 向量模 | `\vert\vert` 或 `\lVert \rVert`                              | `\vert\vert\vec{a}\vert\vert` 或 `\lVert\vec{a}\rVert` | 或       |
| 范数   | `\lVert \rVert` （可加下标表示不同范数，如 `\lVert\vec{x}\rVert_p` 表示 - 范数） | `\lVert\vec{x}\rVert_2` （示例为 2 - 范数）            |          |
| 逻辑与 | `\land`                                                      | `p \land q`                                            |          |
| 逻辑或 | `\lor`                                                       | `p \lor q`                                             |          |
| 逻辑非 | `\neg` 或 `\lnot`                                            | `\neg p` 或 `\lnot p`                                  | 或       |
| 存在   | `\exists`                                                    | `\exists x`                                            |          |
| 任意   | `\forall`                                                    | `\forall x`                                            |          |
| 右箭头 | `\rightarrow` 或 `\to`                                       | `a \rightarrow b` 或 `a \to b`                         | 或       |
| 左箭头 | `\leftarrow` 或 `\gets`                                      | `a \leftarrow b` 或 `a \gets b`                        | 或       |
| 双箭头 | `\leftrightarrow`                                            | `a \leftrightarrow b`                                  |          |
| 映射   | `\mapsto`                                                    | `a \mapsto b`                                          |          |

### 6.6、希腊字母

| 小写字母 | LaTeX 命令 | 大写字母 | LaTeX 命令 |
| :------- | :--------- | :------- | :--------- |
| α        | `\alpha`   | Α        | `\Alpha`   |
| β        | `\beta`    | Β        | `\Beta`    |
| γ        | `\gamma`   | Γ        | `\Gamma`   |
| δ        | `\delta`   | Δ        | `\Delta`   |
| ε        | `\epsilon` | Ε        | `\Epsilon` |
| ζ        | `\zeta`    | Ζ        | `\Zeta`    |
| η        | `\eta`     | Η        | `\Eta`     |
| θ        | `\theta`   | Θ        | `\Theta`   |
| ι        | `\iota`    | Ι        | `\Iota`    |
| κ        | `\kappa`   | Κ        | `\Kappa`   |
| λ        | `\lambda`  | Λ        | `\Lambda`  |
| μ        | `\mu`      | Μ        | `\Mu`      |
| ν        | `\nu`      | Ν        | `\Nu`      |
| ξ        | `\xi`      | Ξ        | `\Xi`      |
| ο        | `\omicron` | Ο        | `\Omicron` |
| π        | `\pi`      | Π        | `\Pi`      |
| ρ        | `\rho`     | Ρ        | `\Rho`     |
| σ        | `\sigma`   | Σ        | `\Sigma`   |
| τ        | `\tau`     | Τ        | `\Tau`     |
| υ        | `\upsilon` | Υ        | `\Upsilon` |
| φ        | `\phi`     | Φ        | `\Phi`     |
| χ        | `\chi`     | Χ        | `\Chi`     |
| ψ        | `\psi`     | Ψ        | `\Psi`     |
| ω        | `\omega`   | Ω        | `\Omega`   |

### 7、表情符号

TIP

将表情符号添加到 Markdown 文件有两种方法

- 将表情符号复制并粘贴到 Markdown 格式的文本中
- 键入 emoji 短代码

```markdown
:stuck_out_tongue_winking_eye:
:smile:
:smiley:
```

> 渲染效果

😜 😄 😃

更多表情包：

- Typora 中有自带的表情包：只需要输入 `:a` 就会自动出来（替换 a，b，c ... 即可）
- 也可以在 GitHub 上复制：[https://github.com/zhouie/markdown-emoji(opens new window)](https://github.com/zhouie/markdown-emoji)

