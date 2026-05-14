---
title: "阿里云服务器实践与Nginx部署"
source: "https://www.arryblog.com/guide/deploy/alibaba-cloud-deployment.html"
category: "服务器"
order:  2
---

# 阿里云服务器实践 与 Nginx 部署



快速了解阿里云服务器和具体操作，远程链接，Linux 下常用命令，Nginx 服务器安装卸载、常用命令、相关配置，最佳实践与简单部署。 华为云的实践与部署

## 一、阿里云服务器



为了保证环境的统一性，我们直接购买阿里云的服务器作为实战基础环境。

### 1、注册登录阿里云平台



阿里云官网： [https://www.aliyun.com/(opens new window)](https://www.aliyun.com/)

### 2、选择云服务器 ECS

![image-20220819223948703](https://www.arryblog.com/assets/img/image-20220819223948703.5c4a9ca6.png)

产品 -> 云服务器 ECS

![image-20220819224128409](https://www.arryblog.com/assets/img/image-20220819224128409.e11a245a.png)

进入管理控制台

### 3、选择按量付费



共享型即可，学习测试阶段可选择`1 核 1G`即可（经济实惠）

![image-20211009035919575](https://www.arryblog.com/assets/img/image-20211009035919575.7f007d18.png)

### 4、选择公共镜像和存储大小

![image-20211009040409904](https://www.arryblog.com/assets/img/image-20211009040409904.9ad1cb60.png)

### 5、网络和安全组

![image-20211009040746073](https://www.arryblog.com/assets/img/image-20211009040746073.0f617ce4.png)

默认即可

### 6、系统配置



选择自定义密码 -> 输入服务器密码（一定要记录下来，否则无法登录）

![image-20211009041235587](https://www.arryblog.com/assets/img/image-20211009041235587.4f52aabb.png)

### 7、分组设置



可默认不动，直接下一步

![image-20211009041348062](https://www.arryblog.com/assets/img/image-20211009041348062.ebbd9d39.png)

### 8、确认服务器相关信息无误，创建实例即可

![image-20211009041659841](https://www.arryblog.com/assets/img/image-20211009041659841.3a8dd553.png)

### 9、创建成功，进入管理控制台

![image-20211009041753105](https://www.arryblog.com/assets/img/image-20211009041753105.653519ca.png)

### 10、IP 地址即为 服务器 IP

![image-20211009041858922](https://www.arryblog.com/assets/img/image-20211009041858922.5b19148d.png)

## 二、XShell 和 Xftp 远程链接云服务器



我们每天需要对 linux 服务器进行操作、文件传送等，那就需要一款高效 Secure Shell 软件（简称 SSH 的）

- 实际上，SSH 是一个网络协议，允许通过网络连接到 Linux 和 Unix 服务器。SSH 使用公钥加密来认证远程的计算机。

**XShell 和 Xftp 是 NetSarang 计算机公司 SSH 客户端软件**

- XShell 是非常强大的 SSH 客户端
- Xftp 通过网络传输文件

**其他常用的 SSH 登录工具**

- SecureCRT
- Putty
- Git Bash
- ... 等

### 1、下载免费版 XShell 和 Xftp



官方下载地址：[https://www.xshell.com/zh/(opens new window)](https://www.xshell.com/zh/)

当前页面底部，选择 [家庭/学校免费(opens new window)](https://www.xshell.com/zh/free-for-home-school/)

![image-20220820015627367](https://www.arryblog.com/assets/img/image-20220820015627367.e8f776de.png)

**注意：需要一个有效的电子邮件地址。下载链接将发送到您的邮箱。**

![image-20220820021506261](https://www.arryblog.com/assets/img/image-20220820021506261.be9cb514.png)

### 2、XShell 和 Xftp 安装过程直接下一步

注意：选择免费版即可 ！

两个客户端都需要安装好，XShell 用于命令行操作服务器，Xftp 用于对服务器的文件上传和下载

### 3、新建连接服务器



新建会话链接 -> 输入服务器名称（可自定义） -> 输入主机 ip 地址（服务器公网 ip）-> 端口号 22 -> 其他默认，点击确认即可

![image-20211009044101172](https://www.arryblog.com/assets/img/image-20211009044101172.5f4acfd6.png)

> 选择 “接受并保存”

![image-20211009044153023](https://www.arryblog.com/assets/img/image-20211009044153023.c7b3b77f.png)

> 双击选择我们的服务器名称 -> 输入登录服务器的用户名（默认用户名为 root）-> 勾选记住用户名

![image-20211009044410257](https://www.arryblog.com/assets/img/image-20211009044410257.7dc49b16.png)

> 输入服务器密码 - > 确认

![image-20211009044506328](https://www.arryblog.com/assets/img/image-20211009044506328.fd63a941.png)

### 4、输入命令连接测试

```shell
ls /  或 cd /
ll
或
ping baidu.com

都可以访问，即连接成功 !
```

![image-20220820153910648](https://www.arryblog.com/assets/img/image-20220820153910648.4ae5b526.png)

注：

如无法登录成功，检查用户名和密码是否正确，同时检查云服务器的安全组是否有开启 22 端口

### 5、Linux 系统目录结构

> 登录系统后，在当前命令窗口下输入命令：

```shell
ls /
或
cd /
ll
```

你会看到如下图：

![image-20220820155033234](https://www.arryblog.com/assets/img/image-20220820155033234.782ea74a.png)

树状目录结构：

![img](https://www.arryblog.com/assets/img/Untitled.f520a049.png)

关于 Linux 或 Unix 操作系统中目录结构的简介

在 Linux 或 Unix 操作系统中，所有的文件和目录都被组织成以一个根节点开始的倒置的树状结构。

文件系统的最顶层是由根目录开始的，系统使用 `/` 来表示根目录。在根目录之下的既可以是目录，也可以是文件，而每一个目录中又可以包含子目录文件。如此反复就可以构成一个庞大的文件系统。

在 Linux 文件系统中有两个特殊的目录，一个用户所在的工作目录，也叫当前目录，可以使用一个点 `.` 来表示；另一个是当前目录的上一级目录，也叫父目录，可以使用两个点 `..` 来表示。

- `.` 代表当前的目录，也可以使用`./`来表示；
- `..` 代表上一层目录，也可以`../`来代表。

如果一个目录或文件名以一个点 `.` 开始，表示这个目录或文件是一个隐藏目录或文件（如：`.bashrc`）即以默认方式查找时，不显示该目录或文件。

**系统启动必须**

| 目录    | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| `/boot` | 存放的启动 Linux 时使用的内核文件，包括连接文件以及镜像文件。 |
| `/etc`  | 存放**所有**的系统需要的**配置文件**和 **子目录列表** ，更改目录下的文件可能会导致系统不能启动。 |
| `/lib`  | 存放基本代码库（比如 c++库），其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。 |
| `/sys`  | 这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。 sysfs 文件系统集成了下面 3 种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。 该文件系统是内核设备树的一个直观反映。 当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。 |

**指令集合**

| 目录    | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| `/bin`  | bin 是 Binaries（二进制文件） 的缩写，存放着最常用的程序和指令 |
| `/sbin` | s 就是 Super User 的意思，是 Superuser Binaries（超级用户的二进制文件）的缩写，这里存放的是系统管理员使用的系统管理程序。 |

**外部文件管理**

| 目录     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| `/dev`   | Device（设备）的缩写， 存放的是 Linux 的外部设备。 **注意：** 在 Linux 中访问设备的方式和访问文件的方式是相同的。 |
| `/media` | linux 系统会自动识别一些设备，例如 U 盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。 |
| `/mnt`   | 临时挂载别的文件系统的，我们可以将光驱挂载在`/mnt/`上，然后进入该目录就可以查看光驱里的内容了。 |

**临时文件**

| 目录          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| `/run`        | 是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 `/var/run` 目录，应该让它指向 run |
| `/lost+found` | 这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。 |
| `/tmp`        | tmp 是 temporary(临时) 的缩写，这个目录是用来存放一些临时文件的。 |

**账户**

| 目录        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| `/root`     | 系统管理员的用户主目录。 该目录为系统管理员，也称作超级权限者的用户主目录。 |
| `/home`     | 用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。 |
| `/usr`      | usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。 |
| `/usr/bin`  | 系统用户使用的应用程序与指令。                               |
| `/usr/sbin` | 超级用户使用的比较高级的管理程序和系统守护程序。             |
| `/usr/src`  | 内核源代码默认的放置目录。                                   |

**运行过程中要用**

| 目录    | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| `/var`  | var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西。 存放经常修改的数据，比如程序运行的日志文件（`/var/log` 目录下）。 |
| `/proc` | proc 是 Processes(进程) 的缩写，管理**内存空间**虚拟的目录，是系统内存的映射，我们可以直接访问这个目录来，获取系统信息。这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件来做修改。 |

**扩展用的**

| 目录   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| `/opt` | opt 是 optional(可选) 的缩写，默认是空的。 这是给主机额外安装软件所摆放的目录。比如你安装一个 ORACLE 数据库则就可以放到这个目录下。 |
| `/srv` | 存放服务启动后需要提取的数据 **（不用服务器就是空）**        |

注意：

在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件。

- `/etc`： 上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。
- `/bin, /sbin, /usr/bin, /usr/sbin`: 这是系统预设的执行文件的放置目录，比如 ls 就是在 /bin/ls 目录下的。
- 值得提出的是`/bin、/usr/bin`是给系统用户使用的指令（除 root 外的通用用户），而`/sbin, /usr/sbin` 则是给 root 使用的指令。
- `/var`： 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在 `/var/log` 目录下，另外 mail 的预设放置也是在这里。

### 6、通过 Xftp 链接服务器，用于文件上传



首先，需要先安装 Xftp 客户端 -> 在 XShell 的工具栏中，点击 Xftp 图标即可打开 Xftp 客户端 - 无需在输入任何用户名和密码验证（非常方便）

![image-20220820031925579](https://www.arryblog.com/assets/img/image-20220820031925579.065395be.png)

> 打开 Xftp 客户端 - > 即可向服务器上传文件或下载文件

![image-20220820032657942](https://www.arryblog.com/assets/img/image-20220820032657942.d161d27f.png)

## 三、Nginx 服务器



Nginx (engine x) 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。

Nginx 官网：[http://nginx.org/(opens new window)](http://nginx.org/)

### 1、Nginx 简介



Nginx 是由伊戈尔·赛索耶夫为俄罗斯访问量第二的 Rambler.ru 站点（俄文：Рамблер）开发的，第一个公开版本 0.1.0 发布于 2004 年 10 月 4 日。

- 其将源代码以类 BSD 许可证的形式发布，因它的稳定性、丰富的功能集、简单的配置文件和低系统资源的消耗而闻名。2011 年 6 月 1 日，nginx 1.0.4 发布。
- Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在 BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上 nginx 的并发能力在同类型的网页服务器中表现较好
- 中国大陆使用 nginx 网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。

![img](https://www.arryblog.com/assets/img/nginx-banner.bc7264c1.jpg)

### 2、Nginx 官网学习



深入阅读 nginx 官方网站相关文档

![image-20211009051300634](https://www.arryblog.com/assets/img/image-20211009051300634.b1c733ec.png)

### 3、下载 Nginx



进入下载地址：[http://nginx.org/en/download.html(opens new window)](http://nginx.org/en/download.html)

![image-20211009051838683](https://www.arryblog.com/assets/img/image-20211009051838683.4c360112.png)

注

**查看所有历史版本，地址：** [http://nginx.org/download/(opens new window)](http://nginx.org/download/)

### 4、通过 yum 方式安装 Nginx



官方 yum 安装教程：[http://nginx.org/en/linux_packages.html#RHEL-CentOS(opens new window)](http://nginx.org/en/linux_packages.html#RHEL-CentOS)

#### ① 安装先决条件

```nginx
# 升级所有包同时也升级软件和系统内核
yum update
# 安装yum依赖
yum install yum-utils
```

#### ② 添加 yum 源文件

```nginx
cd /etc/yum.repos.d/
# 添加nginx的yum源码
vim nginx.repo

# 或 直接新建 nginx.repo 文件
vim /etc/yum.repos.d/nginx.repo
```

#### ③ 添加配置信息到 nginx.repo 文件中

```nginx
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

保存退出 esc

```nginx
:wq
```

注：阿里云服务器安装快速版

- 在阿里云服务器中可以省略 ①、②、③ 步骤
- 从步骤 4 开始，阿里云已经具备相关依赖并默认已经指定 yum 源，可直接执行 `yum install nginx` 一键安装即可

#### ④ 安装 Nginx

```nginx
yum install -y nginx
# yum install nginx
# 如果使用yum install xxxx，会找到安装包之后，询问你Is this OK[y/d/N]，需要你手动进行选择。但是如果加上参数-y，就会自动选择y，不需要你再手动选择！
```

#### ⑤ 查看 Nginx 的版本号

```nginx
nginx -v
# 显示nginx的版本号和编译信息
nginx -V
```

#### ⑥ 查看安装的所有 Nginx 包

```nginx
yum list | grep nginx
```

#### ⑦ 查看 Nginx 安装相关的文件位置信息

```nginx
whereis nginx
```

![image-20220820182224601](data:image/png;base64,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)

> Nginx 目录结构

```nginx
# Nginx终端管理理命令
/usr/sbin/
# 启动 Nginx
/usr/sbin/nginx

# Nginx 配置
/etc/nginx
/etc/nginx/nginx.conf
/etc/nginx/conf.d
/etc/nginx/conf.d/default.conf

# Nginx模块⽬录
/usr/lib64/nginx

# 默认站点目录
/usr/share/nginx
```

| 路径                                                         | 类型     | 作用                              |
| :----------------------------------------------------------- | :------- | :-------------------------------- |
| /etc/nginx /etc/nginx/nginx.conf /etc/nginx/conf.d /etc/nginx/conf.d/default.conf | 配置文件 | Nginx 主配置文件                  |
| /etc/nginx/fastcgi_params /etc/nginx/scgi_params /etc/nginx/uwsgi_params | 配置文件 | Cgi、Fastcgi、Uwcgi 配置⽂文件    |
| /etc/nginx/win-utf /etc/nginx/koi-utf /etc/nginx/koi-win     | 配置文件 | Nginx 编码转换映射文件            |
| /etc/nginx/mime.types                                        | 配置文件 | http 协议的 Content-Type 与扩展名 |
| /usr/lib/systemd/system/nginx.service                        | 配置文件 | 配置系统守护进程管理器            |
| /etc/logrotate.d/nginx                                       | 配置文件 | Nginx ⽇志轮询,⽇志切割           |
| /usr/sbin/nginx /usr/sbin/nginx-debug                        | 命令     | Nginx 终端管理理命令              |
| /etc/nginx/modules /usr/lib64/nginx /usr/lib64/nginx/modules | 目录     | Nginx 模块⽬录                    |
| /usr/share/nginx /usr/share/nginx/html /usr/share/nginx/html/50x.html /usr/share/nginx/html/index.html | 目录     | 默认站点目录                      |
| /usr/share/doc/nginx-1.12.2 /usr/share/man/man8/nginx.8.gz   | 目录     | Nginx 的帮助手册                  |
| /var/cache/nginx                                             | 目录     | Nginx 的缓存目录                  |
| /var/log/nginx                                               | 目录     | Nginx 的日志目录                  |

### 5、启动 Nginx

```nginx
cd /usr/sbin/
./nginx
或
/usr/sbin/nginx
```

**访问出现以下界面，则 Nginx 启动成功**

![image-20211009060801563](https://www.arryblog.com/assets/img/image-20211009060801563.9c923926.png)

#### ① 判断 Nginx 是否运行成功



- 在 linux 系统中运行的每个应用程序都会产生一个进程，可通过查看 nginx 进程是否存在来判断 nginx 是否运行成功。
- 或者查看 Nginx 是否正在运行中 ！

```nginx
ps -ef  | grep nginx
# ps -ef：列出所有进程
# grep nginx：过滤掉和nginx无关的进程
```

![image-20211009064511234](data:image/png;base64,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)

**查看 nginx 的进程 id**

```nginx
ps -C nginx -o pid
```

![image-20211009064807130](data:image/png;base64,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)

#### ② 检查 nginx 配置文件的正确性



配置文件中是否存在语法错误，以及可查看 nginx 的配置文件所在路径

```nginx
nginx -t
```

### 6、Nginx 常用命令

```nginx
# 修改配置文件后重新加载生效
nginx -s reload
# 快速停止或关闭Nginx服务
nginx -s stop  # 或 杀掉Nginx进程
# 完整有序的停止Nginx
nginx -s quit
# 查询运行文件所在路径
which nginx
```

### 7、vim 模式编辑文件

```nginx
# 进入默认站点目录
cd /usr/share/nginx/
ll
cd html/
ls
# 编辑 index.html 页面
vim index.html
# 按下 “i” 键编辑即可

# 不保存强制退出
:q!
# 保存
:w
# 保存并退出
:wq

# 只查看，不编辑
cat index.html
```

### 8、完全卸载 Nginx



卸载 Nginx 前，需要先停止 Nginx 服务器

#### ① 停止 Nginx 服务

```nginx
# 查看 nginx 的运行进程
ps -ef  | grep nginx
# 方式一：直接停止或关闭 nginx
nginx -s stop
# 再次查看 nginx 的运行进程
ps -ef  | grep nginx
```

![image-20220821003133687](https://www.arryblog.com/assets/img/image-20220821003133687.d090db0c.png)

```nginx
# 查看nginx的文件位置
whereis nginx
# 再次启动 nginx
/usr/sbin/nginx
# 查看 nginx 的运行进程
ps -ef | grep nginx
# 方式二：杀掉 nginx的进程 注：19175 19176 进程的PID值 每次启动都会不一样
kill -9 19175 19176
# 再次查看 nginx 的运行进程
ps -ef | grep nginx
```

![image-20220821003951987](https://www.arryblog.com/assets/img/image-20220821003951987.7b38cc42.png)

#### ② 查找根下所有名字包含 nginx 的文件

```nginx
find / -name nginx
```

![image-20211009064731267](data:image/png;base64,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)

#### ③ 执行命令 `rm -rf *` 删除 nignx 安装的相关文件



说明：全局查找往往会查出很多相关文件，但是前缀基本都是相同，后面不同的部分可以用 `*` 代替，以便快速删除

```nginx
rm -rf 文件路径*

# 为保证准确无误的删除每一个目录和文件，建议逐个删除
```

#### ④ 其他设置



如果设置了 Nginx 开机自启动的话，可能还需要下面两步

```nginx
chkconfig nginx off
rm -rf /etc/init.d/nginx
```

#### ⑤ 再使用 yum 清理相关依赖和软件包

```nginx
yum remove nginx
```

> 删除之后，便可重新安装新的 nginx 了

## 四、Nginx 静态网站部署



使用 Nginx 的简单部署和企业级项目部署两种方式

### 1、简单部署（初体验）



直接进入 Nginx 的默认站点静态文件目录 `/usr/share/nginx/html` 将自己的项目文件上传上来即可完成基础的测试部署，作为 Nginx 部署的初体验

```nginx
# 查看nginx的文件位置
whereis nginx
# 进入nginx 默认站点静态文件目录
cd /usr/share/nginx/
ll
cd html
ll
```

![image-20220821010502191](https://www.arryblog.com/assets/img/image-20220821010502191.c8e43e2c.png)

> 登录链接 Xftp

![image-20220821022545902](https://www.arryblog.com/assets/img/image-20220821022545902.c8e1c2a7.png)

> 上传项目源文件

![image-20220821015018559](https://www.arryblog.com/assets/img/image-20220821015018559.1476e765.png)

> 上传网站源文件后，在浏览器中输入服务器 ip 即可访问

![image-20220821022334789](https://www.arryblog.com/assets/img/image-20220821022334789.3a6221e9.png)
