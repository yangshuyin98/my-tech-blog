---
title: "Git 项目管理快速入门"
source: "https://www.arryblog.com/guide/html5/git-introduction.html"
category: "guide/html5"
---

# Git-项目管理快速入门

> TIP
>
> 快速了解 Git 的基础操作，在学习中先让自己用起来 ！
>
> 由于企业日常开发中，每天都会用到 Git 进行项目代码管理 和 团队协作开发。所以，我们在学习阶段一开始就先把 Git 用起来，每天提交作业到自己的仓库中，用所学 MarkDown 记录学习笔记，同时通过 Git 提交。
>
> > 做到先入为主，提前进入工作状态，熟能生巧。未来进入企业无需适应，直接上手。

##  一、git 是什么

> Git 的理解
>
> **Git 是目前世界上最先进的分布式版本控制系统（没有之一），用于敏捷高效地处理任何或小或大的项目。**
>
> 简单理解就是代码管理工具。使用 Git 一般处于以下 3 中原因：
>
> **1、代码管理**
>
> 在本地写完代码后需要将代码备份到一个地方，Git 就给我们提供了一个仓库来进行存储和管理；
>
> **2、版本控制**
>
> 如：我们开发一个项目，发布了很多个版本，想要查看之前某一个版本都更新了哪些内容 或 做版本回滚，就会非常的方便和快捷；
>
> **3、团队协作**
>
> 当项目达到一定规模，会有多个人一起开发同一个项目（UI，前端，后端，运维），文件或代码都是放到同一个仓库的，这么多人同时操作仓库里的文件很容易造成混乱，Git 也提供了团队协作的支持
>
> > Git 官网中文版教程：[https://www.progit.cn](https://www.progit.cn)





## 二、git-的安装配置

> TIP
>
> 在使用 Git 前我们得需要先安装 Git，Git 目前支持 Linux/Unix、Solaris、Mac 和 Windows 平台上运行。
>
>  - Git 各平台安装包下载地址为：[http://git-scm.com/downloads](http://git-scm.com/downloads)
>  - 完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。
> - 在开始菜单里找到`Git -> Git Bash`，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。
>   



## 三、git-配置

> TIP
>
> 当安装完 Git 后：
>
> 应该做的第一件事就是设置你的用户名称与邮件地址。这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改。

```bash
# 设置提交代码时的用户信息，开始前我们需要先设置提交的用户信息，包括用户名和邮箱：
# 如果去掉 --global 参数只对当前仓库有效。

git config --global user.name "你的名字（一定要是英文的）"
git config --global user.email "你的邮箱"

# 查看用用户名和邮箱信息是否配置成功
git config --global --list
```

> 因为
>
> - Git 是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和 Email 地址。
> - 你也许会担心，如果有人故意冒充别人怎么办？这个不必担心，首先我们相信大家都是善良无知的群众，其次，真的有冒充的也是有办法可查的。
>
> **注意：**
>
> `git config`命令的`--global`参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。



## 四、创建版本库

> TIP
>
> 深入浅出 版本库的本质，创建版本库，获取 Git 版本库。

### 1、什么是版本库呢

> TIP
>
> - 版本库又名仓库，英文名
> - 你可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。

### 2、创建一个版本库

> 所以
>
> 创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：

```bash
# 新建 works 文件夹，作为项目（或作业）的目录
mkdir works
# 进入 works 目录
cd works
# 显示当前目录
pwd
/d/30/works

# pwd命令用于显示当前目录。在我的电脑上，这个仓库位于/d/30/works

# 返回上一级目录
cd ..
pwd
/d/30
# 使用命令行打开 vscode 开发工具
code works
```

> 注意：
>
> 如果是 Windows 系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文

![image-20220709183311467](https://www.arryblog.com/assets/img/image-20220709183311467.2157dc71.png)

### 3、获取-git-仓库

> TIP
>
> 有两种取得 Git 项目仓库的方法
>
> - 第一种是在现有项目或目录下导入所有文件到 Git 中；
> - 第二种是从一个服务器克隆一个现有的 Git 仓库。

**在现有目录中初始化仓库**

使用 Git 来对现有的项目进行管理，你只需要进入该项目目录并输入：

```bash
# 通过 git init 命令把这个目录变成 Git 可以管理的仓库：
git init
```

> 注：
>
> 生成 `.git` 隐藏文件夹，即：Git 本地仓库
>
> - 瞬间 Git 就把仓库建好了，而且告诉你是一个空的仓库（empty Git repository），细心的你可以发现当前目录下多了一个`.git`的目录
> - 这个目录是 Git 来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把 Git 仓库给破坏了
> - 如果你没有看到`.git`目录，那是因为这个目录默认是隐藏的，用`ls -ah`命令就可以看见。

![image-20220709185134904](https://www.arryblog.com/assets/img/image-20220709185134904.90590f23.png)

## 五、初始化项目

> TIP
>
> 深入浅出 Git 初始化项目，建立必备文件，新建远程仓库，添加远程仓库提交地址 等

### 1、在-vscode-新建-gitignore-文件

> TIP
>
> 新建`.gitignore` 文件的作用是告诉 Git 哪些文件不需要添加到版本管理中或哪些文件不上传（必备）



### 2、创建-readme-文件

> TIP
>
> 创建`README.md` 用于编写项目说明文档（必备）

### 3、新建远程仓库，使用Gitee

![image-20220709184422205](https://www.arryblog.com/assets/img/image-20220709184422205.38db8c2a.png)

创建远程仓库，成功后

![image-20220709184724100](https://www.arryblog.com/assets/img/image-20220709184724100.f583e6ac.png)

### 4、添加远程仓库提交地址

```bash
# 在vscode的控制台输入以上复制的命令：运行命令，即可添加远程仓库提交地址
git remote add origin https://gitee.com/aicodingedu/my-works.git
```

![image-20220709185255157](https://www.arryblog.com/assets/img/image-20220709185255157.9f00d2c1.png)

## 六、Git 本地提交，推送项目至远程仓库



下面以 Gitee 为例，从头开始演示完整操作流程。

---

### 在 Gitee 上从头操作 Git 分支的完整案例

#### 第一步：在 Gitee 上创建新仓库

1. 打开 [https://gitee.com](https://gitee.com)，登录你的账号
2. 点击右上角的 **"+"** → **"新建仓库"**
3. 填写信息：
   - **仓库名称**：`demo-project`
   - **仓库介绍**：`Git 分支操作演示项目`
   - **是否开源**：选择"私有"（或"公开"均可）
   - **初始化仓库**：❌ **不要勾选**（保持空仓库，方便后续推送）
4. 点击 **"创建"**，完成仓库创建

创建完成后，Gitee 会显示一个空仓库页面，上面有推送指引。

---

#### 第二步：本地初始化项目并推送 master

打开终端，执行以下命令：

```bash
# 1. 创建项目文件夹并进入
mkdir demo-project
cd demo-project

# 2. 初始化 Git 仓库
git init

# 3. 创建初始文件
echo "# 演示项目" > README.md
echo "node_modules/" > .gitignore

# 4. 添加文件到暂存区
git add .

# 5. 提交（创建第一个 commit）
git commit -m "初始提交：创建项目骨架"

# 6. 添加远程仓库地址（替换为你的 Gitee 仓库地址）
git remote add origin https://gitee.com/你的用户名/demo-project.git

# 7. 推送 master 分支到远程
git push -u origin master
```

执行完成后，刷新 Gitee 页面，可以看到 `master` 分支和 `README.md` 文件已经出现在仓库中。

---

#### 第三步：创建分支1，添加备注，推送

```bash
# 1. 创建并切换到分支1
git checkout -b feature-login

# 2. 添加分支备注（Git 原生方式）
git branch --edit-description

# 在弹出的编辑器中输入备注内容，例如：
# 开发用户登录功能，包括账号密码登录和短信验证码登录
# 保存并退出编辑器（vim 中按 :wq）

# 3. 在分支1上做一些改动（模拟开发）
echo "## 登录模块" >> README.md
git add .
git commit -m "添加登录模块说明"

# 4. 推送分支1到远程，并设置上游跟踪
git push -u origin feature-login
```

> **查看分支备注**：`git config branch.feature-login.description`

---

#### 第四步：切换回 master，创建分支2

```bash
# 1. 切换回 master 分支
git checkout master

# 2. 确认当前在 master（查看 README.md 内容，确认没有"登录模块"字样）
cat README.md

# 3. 从 master 创建并切换到分支2
git checkout -b feature-payment

# 4. 添加分支备注
git branch --edit-description
# 输入：开发支付模块，对接微信支付和支付宝支付

# 5. 在分支2上做一些改动
echo "## 支付模块" >> README.md
git add .
git commit -m "添加支付模块说明"

# 6. 推送分支2到远程
git push -u origin feature-payment
```

---

#### 第五步：切换回 master，创建分支3

```bash
# 1. 切换回 master 分支
git checkout master

# 2. 确认 README.md 中既没有"登录模块"也没有"支付模块"
cat README.md
# 输出应该只有：
# # 演示项目

# 3. 从 master 创建并切换到分支3
git checkout -b fix-bug-001

# 4. 添加分支备注
git branch --edit-description
# 输入：修复首页加载速度慢的问题

# 5. 在分支3上做一些改动
echo "## 性能优化记录" >> README.md
git add .
git commit -m "记录性能优化方案"

# 6. 推送分支3到远程
git push -u origin fix-bug-001
```

---

#### 第六步：查看最终结果

#### 本地查看所有分支

```bash
# 查看本地分支（当前所在分支前有 * 号）
git branch

# 查看所有分支（包括远程）
git branch -a

# 查看每个分支的备注
git config branch.feature-login.description
git config branch.feature-payment.description
git config branch.fix-bug-001.description
```

输出示例：
```
* fix-bug-001
  feature-login
  feature-payment
  master
```

#### Gitee 网页查看

打开你的仓库页面 `https://gitee.com/你的用户名/demo-project`：

- 点击左上角的 **分支下拉框**，可以看到：
  - `master`（主分支）
  - `feature-login`（分支1）
  - `feature-payment`（分支2）
  - `fix-bug-001`（分支3）

- 切换到不同分支，会发现每个分支的 `README.md` 内容不同：
  - `master`：只有 `# 演示项目`
  - `feature-login`：包含 `## 登录模块`
  - `feature-payment`：包含 `## 支付模块`
  - `fix-bug-001`：包含 `## 性能优化记录`

---

#### 最终结构图

```
远程仓库 (Gitee)
├── master ───────────────── 初始代码（干净的主线）
│
├── feature-login ───────── 从 master 分出，开发登录功能
│
├── feature-payment ─────── 从 master 分出，开发支付功能
│
└── fix-bug-001 ─────────── 从 master 分出，修复性能 Bug
```

---

#### 这样操作的核心意义

| 操作                     | 作用                                       |
| ------------------------ | ------------------------------------------ |
| 每次从 `master` 创建分支 | 确保每个分支基于**同一稳定基线**，互不污染 |
| 各分支独立开发           | 登录、支付、Bug 修复**并行推进**，互不阻塞 |
| 分支备注                 | 方便团队成员快速了解每个分支的用途         |
| 推送所有分支到远程       | 便于协作、代码审查和备份                   |

后续你可以将 `feature-login`、`feature-payment`、`fix-bug-001` 分别通过 **Pull Request** 合并回 `master`，完成功能上线。







### 问题一：分支代码不合并到主分支，项目可以运行吗？

**可以运行，完全没问题。**

#### 关键理解：每个分支都是一套完整的独立代码

分支不是"补丁"或"片段"，而是**整个项目的完整快照**。你在 `feature-login` 分支上：

```bash
# 切换到分支
git checkout feature-login

# 直接运行项目
npm install
npm run dev
```

项目会正常启动，包含该分支上的所有代码（登录功能等），与 `master` 分支完全无关。

#### 类比理解

```
把 Git 仓库想象成一个文件夹的多个副本：

  桌面/
  ├── 项目-master版/        ← 只有基础功能
  ├── 项目-加了登录/        ← 完整项目 + 登录功能（可以独立运行）
  ├── 项目-加了支付/        ← 完整项目 + 支付功能（可以独立运行）
  └── 项目-修了Bug/         ← 完整项目 + Bug修复（可以独立运行）

每个文件夹都是一个完整的项目，互不影响，各自都能跑起来。
```

#### 实际开发流程

```
开发登录功能：
  git checkout feature-login  →  npm run dev  →  浏览器看效果  →  调试验证

开发支付功能：
  git checkout feature-payment  →  npm run dev  →  浏览器看效果  →  调试验证
```

**不需要合并到 master 就能运行和测试。** 合并到 master 的目的是"上线发布"，不是"让代码能跑"。

---

### 问题二：合并到主分支后，分支会消失吗？

**不会自动消失，分支依然存在，除非你手动删除。**

#### 合并操作的实际效果

```bash
# 当前在 master 分支
git checkout master

# 合并 feature-login 分支
git merge feature-login
```

合并后发生的变化：

| 对象                      | 合并前         | 合并后                  |
| ------------------------- | -------------- | ----------------------- |
| `master` 分支             | 只有基础代码   | 基础代码 + 登录功能代码 |
| `feature-login` 分支      | 有登录功能代码 | **依然存在**，代码不变  |
| 远程 `feature-login` 分支 | 存在           | **依然存在**            |

#### 分支的生命周期由你控制

```bash
# 合并后，分支还在，可以继续在上面开发
git checkout feature-login
echo "## 登录功能v2" >> README.md
git commit -m "登录功能升级"
git push

# 如果确认分支不再需要，手动删除
git branch -d feature-login        # 删除本地分支
git push origin --delete feature-login  # 删除远程分支
```

#### 常见做法

```
feature-login 分支的生命周期：

  创建 ──→ 开发 ──→ 测试 ──→ 合并到 master ──→ 删除分支（可选）
                                                    │
                                    保留也可以，方便后续维护和追溯
```

---

#### 总结

| 问题                     | 答案                                      |
| ------------------------ | ----------------------------------------- |
| 分支代码不合并能运行吗？ | ✅ 能，每个分支是独立完整的项目副本        |
| 合并后分支会消失吗？     | ❌ 不会，分支依然存在，需手动删除          |
| 合并的真正作用是什么？   | 把分支的改动"复制"到 master，用于发布上线 |
| 分支什么时候删除？       | 功能上线且确认不再需要该分支时，手动删除  |



### 问题分析

你说"master 和 feature-login 都没有变化"，最可能的情况是合并时出现了 **"Already up to date"**，也就是实际上什么都没合并进去。我们来一步步排查。

---

#### 为什么合并后"没有变化"？

##### 情况一：feature-login 分支没有新提交

如果你之前的操作是：

```bash
git checkout -b feature-login    # 从 master 创建分支
# 然后什么也没改，或者改完后又切回去了
git checkout master
git merge feature-login          # 此时两个分支完全一样
```

终端会显示：

```
Already up to date.
```

**这意味着 feature-login 上没有任何 master 没有的提交，合并操作实际上什么都没做。**

##### 情况二：合并确实发生了，但你没注意到变化

如果合并成功，终端会显示类似：

```
Updating abc1234..def5678
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
```

此时 master 已经包含了 feature-login 的代码，你可以验证：

```bash
cat README.md    # 看看有没有 feature-login 上添加的内容
git log --oneline -3   # 看看最新的提交记录
```

---

#### 核心解答

##### feature-login 的代码跑哪去了？

**代码从来没有"跑掉"，它一直在 feature-login 分支上。**

合并的本质是**复制**，不是**移动**：

```
合并前：
  master:        [提交A]──[提交B]
  feature-login: [提交A]──[提交B]──[提交C]──[提交D]

合并后：
  master:        [提交A]──[提交B]──[提交C]──[提交D]  ← 复制过来了
  feature-login: [提交A]──[提交B]──[提交C]──[提交D]  ← 依然还在
```

**feature-login 的代码现在同时存在于两个地方：master 和 feature-login。**

---

##### 可以删除 feature-login 分支吗？

**可以，但有前提条件。**

| 条件                             | 能否删除 | 说明                                    |
| -------------------------------- | -------- | --------------------------------------- |
| 合并成功，master 已包含所有代码  | ✅ 可以   | 代码已安全转移到 master                 |
| 合并失败 / Already up to date    | ⚠️ 先确认 | 检查 feature-login 上是否有未合并的提交 |
| feature-login 上还有未推送的提交 | ⚠️ 谨慎   | 删除后这些提交可能丢失                  |

##### 安全删除前先确认

```bash
# 1. 查看 feature-login 有哪些 master 没有的提交
git log master..feature-login --oneline

# 如果输出为空 → feature-login 的所有代码已在 master 中，可以安全删除
# 如果有输出 → 说明还有未合并的提交，先合并再删除
```

##### 删除分支

```bash
# 删除本地分支
git branch -d feature-login

# 删除远程分支
git push origin --delete feature-login
```

---

#### 用图来理解整个过程

```
时间线：

1. 创建分支
   master ────────●
                  └── feature-login ●  ← 和 master 一模一样

2. 在 feature-login 上开发
   master ────────●
                  └── feature-login ●──●──●  ← 多了3个提交

3. 合并到 master
   master ────────●──────────●──●──●  ← 代码复制过来了
                  └── feature-login ●──●──●  ← 分支还在，代码也还在

4. 删除 feature-login（可选）
   master ────────●──────────●──●──●  ← 代码安全保留
                  └── feature-login ✕  ← 分支删了，但代码已在 master 中
```

---

#### 一句话总结

> **合并 = 复制，不是剪切。** feature-login 的代码被复制到了 master，同时 feature-login 上还保留着原样。确认 master 已包含所有代码后，可以放心删除 feature-login 分支。



### VSCode 操作Git 分支

> TIP
>
> 深入浅出 Git 在 VSCode 中 如何提交项目文件到本地仓库，推送 Git 主分支 master 至远程仓库，创建 Git 分支，添加 Git 分支备注信息，推送 Git 分支至远程仓库。







#### 1、在 VSCode 中提交项目文件到本地仓库)

![image-20220727192710456](https://www.arryblog.com/assets/img/image-20220727192710456.9a58823d.png)

#### 2、推送-git-主分支-master-至远程仓库

![image-20220727135244139](https://www.arryblog.com/assets/img/image-20220727135244139.914fc3e2.png)

#### 3、第一次提交-需要输入-gitee-的用户名和密码)

![image-20220709191838273](https://www.arryblog.com/assets/img/image-20220709191838273.eb2392c9.png)

#### 4、创建-git-分支)

![image-20220727031030288](https://www.arryblog.com/assets/img/image-20220727031030288.94db3ef1.png)

#### 5、添加-git-分支备注信息

![image-20220727031236794](https://www.arryblog.com/assets/img/image-20220727031236794.cddfb024.png)

#### 6、推送-git-分支至远程仓库

![image-20220727031506579](https://www.arryblog.com/assets/img/image-20220727031506579-16589041084391.2c91440a.png)

#### 7、远程仓库推送成功后-查看效果

![image-20220727174949998](https://www.arryblog.com/assets/img/image-20220727174949998.9b1c975e.png)

#### 8、查看远程仓库的分支

![image-20220727175303121](https://www.arryblog.com/assets/img/image-20220727175303121.38bf3d25.png)

## 七、克隆远程仓库-项目

> TIP
>
> 深入浅出 Git 克隆自己现有项目到本地，克隆开源项目到本地，使用 GitHub 传送门一键直达。

### 1、克隆自己现有的项目

> TIP
>
> 在自己的远程仓库中（Gitee、GitHub、GitLab）找到自己的项目，进入项目主页选择 “克隆/下载” 复制项目 HTTPS 地址，使用以下命令将项目克隆到本地

![image-20220727142517992](https://www.arryblog.com/assets/img/image-20220727142517992.9d892977.png)

克隆仓库的命令格式是`git clone [url]` 。 比如，要克隆 Git 的可链接库 my-works，可以用下面的命令：

```bash
git clone https://gitee.com/aicodingedu/my-works.git
```

![image-20220709195428545](https://www.arryblog.com/assets/img/image-20220709195428545.17c65387.png)

如果你想在克隆远程仓库的时候，需要自定义本地仓库的名字，你可以使用如下命令：

```bash
git clone https://gitee.com/aicodingedu/my-works.git myworks2
```

### 2、克隆开源项目到本地

![image-20220727171059252](https://www.arryblog.com/assets/img/image-20220727171059252.8d63259b.png)

```bash
# 在vscode的控制台输入以上复制的命令：运行命令，即可将项目拉取到本地
git clone https://github.com/vuejs/vue.git
```

### 3、使用-github-自带的传送门-一键直达

> TIP
>
> 选择 GitHub 上任意开源项目，按下键盘上的`.` 这个键，即可自动跳转至网页版的 VSCode 中，可快速学习和阅读源代码 ！

![image-20220727173117963](https://www.arryblog.com/assets/img/image-20220727173117963.089a94dd.png)
**按下****`.` 这个键后，等待挑战中 ...**

![image-20220727173805066](https://www.arryblog.com/assets/img/image-20220727173805066.777e038d.png)
**通过 GitHub 传送门跳转至网页版后的效果**
![image-20220727173956600](https://www.arryblog.com/assets/img/image-20220727173956600.eebbfc0b.png)

> 学习要求：
>
> - 结合钉钉群直播回放第七（Markdown 语法和笔记文档书写技巧）、第八节（Git 具体操作）内容同步操作，效果更佳
> - 从学阶段开始，使用 Markdown 开始记录自己的学习笔记，同时使用 Git 管理自己代码，提前进入工作状态（企业项目开发必备技能）
>
> **课后学习标准动作：**
>
> 倍数观看直播回放视频 + 课堂案例练习 + 课后针对性项目案例训练 + MDN 官方文档 + MarkDown 笔记记录总结 + 博客面试题 + 结合博客图文教程查缺补漏 + Git 版作业提交
>
> 一起加油 ！每天进步一点点，优秀的同学都已跟上来，看得见的成长 ...





这个问题需要先澄清一个容易混淆的概念。

---

## Git 分支 ≠ 前后端分离

你问的"创建分隔开的两个分支"和"前后端项目分离"是**两个不同层面的事情**。

---

## 方式一：用分支分开前后端（不推荐）

理论上可以这样做：

```
master
├── frontend-branch    ← 只放前端代码（Vue/React）
└── backend-branch     ← 只放后端代码（Java/Go/Node）
```

### 为什么不推荐？

| 问题             | 说明                                                   |
| ---------------- | ------------------------------------------------------ |
| 无法同时运行     | 你只能在一个分支上工作，前后端不能同时启动联调         |
| 代码不完整       | 每个分支都只有一半代码，单独跑不起来                   |
| 合并冲突噩梦     | 两个分支的文件结构完全不同，永远无法合并               |
| 违背分支设计初衷 | 分支是用来做"并行开发同一项目"的，不是用来"拆分项目"的 |

**分支的正确用途是：同一个项目的不同开发线（新功能、Bug修复等），而不是把项目拆成两半。**

---

## 方式二：前后端分成两个独立仓库（推荐）

这才是前后端分离的正确做法：

```
Gitee 上两个独立的仓库：

  demo-frontend/          ← 纯前端项目（Vue/React）
  ├── src/
  ├── package.json
  └── ...

  demo-backend/           ← 纯后端项目（Java/Go/Node）
  ├── src/
  ├── pom.xml / go.mod
  └── ...
```

### 各自内部再用分支开发

```
demo-frontend 仓库：
  master ──────────── 稳定版本
  ├── feature-login-page    ← 开发登录页面
  ├── feature-payment-page  ← 开发支付页面
  └── fix-style-bug         ← 修复样式问题

demo-backend 仓库：
  master ──────────── 稳定版本
  ├── feature-login-api     ← 开发登录接口
  ├── feature-payment-api   ← 开发支付接口
  └── fix-slow-query        ← 修复慢查询
```

---

## 方式三：一个仓库，两个文件夹（单体仓库 Monorepo）

如果项目较小，也可以放在同一个仓库的不同文件夹里：

```
demo-project/              ← 一个 Git 仓库
├── frontend/              ← 前端代码
│   ├── src/
│   └── package.json
├── backend/               ← 后端代码
│   ├── src/
│   └── pom.xml
└── README.md
```

然后用**同一个 master 分支**管理整个项目：

```
master
├── feature-login    ← 同时改 frontend/ 和 backend/ 的登录相关代码
├── feature-payment  ← 同时改前后端的支付相关代码
└── fix-bug-001      ← 修复某个 Bug
```

---

## 对比总结

| 方式               | 结构                                   | 适用场景                 | 分支用途                     |
| ------------------ | -------------------------------------- | ------------------------ | ---------------------------- |
| 分支拆分前后端     | 同一仓库，不同分支放不同代码           | ❌ 不推荐                 | 滥用分支                     |
| 两个独立仓库       | 前端一个仓库，后端一个仓库             | ✅ 大型项目、团队分工明确 | 各自内部并行开发             |
| 一个仓库两个文件夹 | 同一仓库，frontend/ 和 backend/ 文件夹 | ✅ 小型项目、个人开发     | 按功能创建分支，同时改前后端 |

---

## 一句话总结

> **不要用 Git 分支来拆分前后端代码。** 分支是用来并行开发同一套代码的。前后端分离应该用**两个独立仓库**，或者**同一仓库的两个文件夹**，然后在各自的代码基础上再按功能创建分支。







## 不可以！这样做会出大问题。

---

## 分支不是"只放你改的文件"

分支是**整个项目的完整副本**，不是只包含你修改的那几个文件。

### 你的理解（错误）

```
你以为分支是这样的：
  master：    完整的项目（所有文件）
  login分支：  只有 login.js（只放自己改的文件）
```

### 实际情况

```
分支的真相：
  master：     完整的项目快照（所有文件）
  login分支：  完整的项目快照（所有文件），只是 login.js 被修改了
```

---

## 如果你在 login 分支上删掉其他文件

```bash
git checkout -b feature-login

# 你删掉了"不需要的"文件
rm README.md
rm config.js
rm src/payment.js

git add .
git commit -m "开发登录功能"
git push
```

### 合并到 master 时会发生什么？

```bash
git checkout master
git merge feature-login
```

**结果：master 上的 README.md、config.js、payment.js 全部被删除！**

因为 Git 认为：你在 feature-login 分支上删除了这些文件，合并时就会在 master 上也删除它们。

---

## 正确的分支应该长什么样？

### master 分支

```
demo-project/
├── README.md          ← "版本1"
├── src/
│   ├── login.js       ← "版本1"
│   └── payment.js     ← "版本1"
└── config.js          ← "版本1"
```

### feature-login 分支（正确做法）

```
demo-project/
├── README.md          ← "版本1"（没动，保持原样）
├── src/
│   ├── login.js       ← "版本2"（只改这个文件）
│   └── payment.js     ← "版本1"（没动，保持原样）
└── config.js          ← "版本1"（没动，保持原样）
```

**你只改 login.js，其他文件原封不动地保留。**

---

## 实际操作演示

```bash
# 1. 从 master 创建登录分支
git checkout master
git checkout -b feature-login

# 2. 此时分支上的文件结构和 master 完全一样
ls
# 输出：README.md  src/  config.js

ls src/
# 输出：login.js  payment.js

# 3. 只修改 login.js（其他文件不动）
vim src/login.js    # 添加登录逻辑

# 4. 提交
git add src/login.js
git commit -m "完成登录功能开发"

# 5. 推送
git push -u origin feature-login
```

### 合并时 Git 做了什么

```
对比三个版本：

共同的祖先（Base）：          feature-login：
  login.js → "版本1"           login.js → "版本2"（改了）
  payment.js → "版本1"         payment.js → "版本1"（没动）
  config.js → "版本1"          config.js → "版本1"（没动）
  README.md → "版本1"          README.md → "版本1"（没动）

master：
  login.js → "版本1"（没动）
  payment.js → "版本1"（没动）
  config.js → "版本1"（没动）
  README.md → "版本1"（没动）

Git 的判断：
  login.js：  只有 feature-login 改了 → 采用 feature-login 的版本 ✅
  payment.js：两边都没改 → 保持原样 ✅
  config.js： 两边都没改 → 保持原样 ✅
  README.md： 两边都没改 → 保持原样 ✅

结果：只有 login.js 被更新，其他文件完好无损。
```

---

## 对比总结

| 做法                          | 分支上的文件               | 合并结果                           |
| ----------------------------- | -------------------------- | ---------------------------------- |
| ❌ 只保留 login.js，删掉其他   | 只有 login.js              | **其他文件全被删除，项目崩溃**     |
| ✅ 保留全部文件，只改 login.js | 完整项目 + 修改的 login.js | **只有 login.js 被更新，完美合并** |

---

## 一句话总结

> **分支 = 完整项目 + 你的修改。** 不要删除任何"你觉得不需要"的文件。Git 会自动识别你改了哪些，合并时只更新改动部分，其他文件原封不动。你删了什么，合并时 master 就会丢什么。





## 不用复制！Git 的存储机制非常聪明

你担心的这个问题，正是 Git 设计得最精妙的地方。

---

## 分支只是一个"指针"，不是一份"副本"

### 错误理解

```
你以为 Git 是这样存的：

  master 分支：    [完整代码 100MB]
  feature-login：  [完整代码 100MB]  ← 又复制了一份
  feature-payment：[完整代码 100MB]  ← 又复制了一份
  总计：300MB
```

### 实际情况

```
Git 实际是这样存的：

  文件对象仓库（只存一份）：
  ├── README.md 的内容  ← 存一次
  ├── login.js 的内容   ← 存一次
  ├── payment.js 的内容 ← 存一次
  └── config.js 的内容  ← 存一次

  分支只是指针：
  master ──────────→ 指向提交 abc123
  feature-login ───→ 指向提交 def456
  feature-payment ─→ 指向提交 ghi789
```

**分支本身只是一个标签，指向某个提交，不占什么空间。**

---

## 只有"变化的部分"才会占用新空间

### 用图来理解

```
Git 仓库的存储：

提交1（初始）：
  存储了：README.md(v1) + login.js(v1) + payment.js(v1) + config.js(v1)
  占用：100MB

提交2（改了 login.js）：
  存储了：login.js(v2)  ← 只存变化的部分
  占用：+2MB

提交3（改了 payment.js）：
  存储了：payment.js(v2)  ← 只存变化的部分
  占用：+3MB

总占用：100MB + 2MB + 3MB = 105MB（而不是 300MB）
```

---

## 用生活例子类比

```
把 Git 想象成一个图书馆：

  图书馆的书库（文件对象仓库）：
    所有书只有一本，放在书库里

  分支 = 书签：
    master 书签 → 夹在《项目》这本书的第10页
    feature-login 书签 → 夹在第15页
    feature-payment 书签 → 夹在第20页

  你切换分支 = 把书翻到对应书签的位置
  不需要为每个书签买一本新书！
```

---

## 实际验证

你可以自己看看 Git 仓库有多省空间：

```bash
# 查看仓库大小
du -sh .git

# 通常 .git 文件夹比你的项目文件还小
# 因为 Git 会压缩存储，而且只存差异
```

---

## 其他分支提交代码，需要同步吗？

### 场景：feature-payment 分支提交了新代码

```
时间线：

  提交1 ──── 提交2 ──── 提交3(master)
                │
                ├── 提交4(feature-login)
                │
                └── 提交5(feature-payment) ← 刚提交的
```

**feature-login 分支不会自动获得 feature-payment 的代码，也不需要。**

### 如果你想让 feature-login 获得最新代码

```bash
# 方式一：把 master 合并到 feature-login
git checkout feature-login
git merge master          # 把 master 的最新代码拉进来

# 方式二：变基（让历史更干净）
git checkout feature-login
git rebase master
```

### 如果你不需要，就不用管

```
feature-login 继续基于原来的 master 开发，完全没问题。
等 feature-login 开发完，合并回 master 时，
Git 会自动处理两边各自的改动。
```

---

## 总结

| 你的担心                   | 实际情况                     |
| -------------------------- | ---------------------------- |
| 每个分支要复制一份完整代码 | ❌ 分支只是指针，不复制代码   |
| 多个分支占用多倍空间       | ❌ 相同文件只存一份，只存差异 |
| 其他分支提交了，我要同步   | ⚠️ 看需要，不需要就不用管     |

---

## 一句话总结

> **Git 分支不是复制粘贴，而是"书签"。** 创建分支几乎不占空间，切换分支只是把工作目录指向不同的提交。只有真正修改的文件才会占用新的存储空间。





## 先理清一个关键概念

**Git 是分布式的，本地和远程是两套独立的仓库，不是实时同步的。**

```
你的电脑（本地仓库）               Gitee/GitHub（远程仓库）
┌─────────────────┐               ┌─────────────────┐
│ 完整的项目代码    │               │ 完整的项目代码    │
│ 完整的提交历史    │               │ 完整的提交历史    │
│ 所有分支        │               │ 所有分支        │
└─────────────────┘               └─────────────────┘
        │                                  │
        └──── pull（拉取）/ push（推送）────┘
              手动操作，不会自动同步
```

---

## 问题一：线下修改前一定要先拉取吗？

### 不一定，但强烈建议先拉取。

```bash
# 不拉取直接改，可以吗？
git checkout master
vim login.js          # 直接改
git commit -m "改了登录"
# 本地提交成功，没问题
```

**可以改，可以提交，因为本地仓库是独立完整的。**

### 但为什么不建议？

```
场景：你和同事同时改一个文件

  远程 master：login.js（版本1）
  
  你本地：                 同事：
  login.js（版本1）        login.js（版本1）
       │                      │
  改成了版本2              改成了版本3
       │                      │
  提交，push ──→ ✅ 成功    提交，push ──→ ❌ 被拒绝！
  （因为同事先push了）
```

**先拉取的好处：拿到最新代码，减少冲突。**

---

## 问题二：拉取完，线上又被改了，还能提交吗？

### 这就是经典场景，分两种情况：

---

### 情况一：线上改了，但你还没开始 push

```
时间线：

  1. 你 pull（拉取）     → 本地和远程一致
  2. 同事 push（推送）   → 远程更新了
  3. 你改代码，commit    → 本地有你的改动
  4. 你 push             → ❌ 被拒绝！
```

**push 时 Git 会检查：你的本地历史是否包含远程的所有提交？**

```
远程： 提交1 → 提交2 → 提交3（同事的）
本地： 提交1 → 提交2 → 提交4（你的）

你本地没有提交3，所以 push 被拒绝。
Git 怕你把同事的提交覆盖掉。
```

### 解决方法

```bash
# push 被拒绝后
git pull                    # 拉取同事的提交3

# 此时 Git 会自动合并：
# 本地：提交1 → 提交2 → 提交4（你的）
#                       ↘
# 远程：提交1 → 提交2 → 提交3（同事的）
#                       ↙
# 合并：提交1 → 提交2 → 提交3 → 提交4 → 合并提交

# 如果有冲突，解决冲突后：
git add .
git commit -m "合并远程更新"

# 再次推送
git push                    # ✅ 成功
```

---

### 情况二：你 pull 的同时线上被改了（几乎不会）

```
pull 操作通常就几秒钟，这个时间窗口极小。
即使真的发生了，处理方式和情况一完全一样。
```

---

## 完整的安全工作流程

```bash
# 1. 开始工作前，拉取最新代码
git checkout master
git pull

# 2. 创建分支开发
git checkout -b feature-login

# 3. 开发，提交（可以多次）
vim src/login.js
git add .
git commit -m "登录功能开发中"

vim src/login.js
git add .
git commit -m "登录功能完成"

# 4. 推送前，再次拉取 master 最新代码
git checkout master
git pull                    # 获取同事的最新提交

git checkout feature-login
git merge master            # 把最新代码合并到自己的分支

# 5. 解决可能的冲突后，推送
git push -u origin feature-login

# 6. 发起合并请求（PR/MR），等审核合并到 master
```

---

## 用图总结整个流程

```
                         远程仓库
                            │
  开始工作                  │
    ↓                      │
  git pull ←──────────── 拉取最新 ──────────→ 远程：[提交1, 提交2]
    ↓                      │
  本地开发                  │
    ↓                      │
  commit1, commit2         │                 同事 push 了提交3
    ↓                      │                 ↓
  准备推送                  │              远程：[提交1, 提交2, 提交3]
    ↓                      │
  git pull ←──────────── 再次拉取 ──────────→ 获取提交3
    ↓                      │
  合并/解决冲突              │
    ↓                      │
  git push ────────────→ 推送成功 ──────────→ 远程：[提交1, 提交2, 提交3, 你的提交]
```

---

## 一句话总结

> **push 被拒不是因为"线上被改了"，而是因为"你本地缺少线上的提交"。** 解决方法很简单：`git pull` → 合并 → `git push`。养成"开工前 pull，推送前再 pull"的习惯，就能避免大部分问题。









## 是的，Git 只传输变化的部分

Git 非常聪明，**它只拉取你本地没有的东西，已经有的不会重复传输。**

---

## Git 的增量传输机制

### 不是按"文件有没有修改"来判断

而是按**"这个内容你本地有没有"**来判断。

```
远程仓库里有什么：
  提交对象：abc123, def456, ghi789
  文件对象：README.md, login.js(v1), login.js(v2), payment.js(v1)

你本地已经有了：
  提交对象：abc123
  文件对象：README.md, login.js(v1), payment.js(v1)

git pull 时：
  只传输：def456, ghi789（两个提交对象）+ login.js(v2)（一个新版本文件）
  不传输：README.md, login.js(v1), payment.js(v1)（本地已有）
```

---

## 用生活例子类比

```
把 Git 想象成你和朋友共享一个工具箱：

  远程（朋友的工具箱）：
    螺丝刀、扳手、锤子、电钻

  你本地（你的工具箱）：
    螺丝刀、扳手、锤子

  git pull（朋友给你送工具）：
    只送：电钻 ← 你缺的
    不送：螺丝刀、扳手、锤子 ← 你已经有了，再送一份干嘛？
```

---

## 实际验证

你可以自己观察 pull 时传输了多少数据：

```bash
# 第一次 clone（全量下载）
git clone https://gitee.com/xxx/project.git
# 传输：100MB

# 过几天，pull 更新
git pull
# 传输：可能只有几百KB ← 只传了变化的部分
```

---

## 但有一点要澄清

### pull 拉取的是"提交"，不是"文件"

```
git pull 的逻辑：

  远程有 5 个新提交，涉及 3 个文件改动
  ↓
  Git 检查：这 5 个提交里包含的文件对象，哪些你本地没有？
  ↓
  只传输你没有的文件对象
  ↓
  本地已有的文件对象，跳过
```

**所以即使某个文件在远程被改了，但如果你本地已经有那个版本的内容，也不会重复传输。**

---

## 总结

| 你的理解               | 对不对 |
| ---------------------- | ------ |
| 只拉取修改的代码       | ✅ 对   |
| 没修改的代码不拉取     | ✅ 对   |
| 已经有的内容不重复传输 | ✅ 对   |

---

## 一句话总结

> **git pull 只传输你本地缺少的提交和文件对象，已经有的内容不会重复下载。** 这就是为什么第一次 clone 很慢，但之后每次 pull 都很快的原因。