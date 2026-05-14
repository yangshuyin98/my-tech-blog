---
title: "华为云服务器实践与 Nginx 部署完整版"
source: "https://www.arryblog.com/guide/deploy/huawei-cloud-deployment.html"
category: "服务器"
order: 4
---

# 华为云服务器实践与 Nginx 部署，完整版

TIP

快速了解华为云服务器具体实践，Nginx 部署，端口转发，HTTPS 加密协议，域名解析，Nginx 性能优化 Gzip 压缩，最佳实践与多网站多系统部署 等 ...

## 一、华为云服务器

TIP

本次将使用华为云弹性云服务器 ECS ，作为我们项目部署的基础环境。

### 1、注册登录华为云平台

TIP

为了我们可更低成本的学习和使用云服务器相关产品，我们跟官方云厂商合作，关联注册后可享受优惠。

槐里集团官网：[http://www.iis090.cn/(opens new window)](http://www.iis090.cn/)

![image-20220825163606919](https://www.arryblog.com/assets/img/image-20220825163606919.16879a55.png)

注：

只有通过此链接进入关联注册账号，后续使用服务器、域名、备案等才可享受官方合作优惠 及 专属技术支持服务

- [点击进入，华为云官方合作优惠注册入口(opens new window)](https://account.huaweicloud.com/obmgr/invitation/invitation.html?bpName=0000000100000002E9FE165000987B959FFED359C16D4FB05162A18EC18D554C7FAD81A76B8151C42E6A7998824D40CC0F6932757F1902EBA18BC0C8B6CAA06565DA936A6C5D515C&inviteCode=00000001000000024D4659CBCF8488B5B2667E3588E00D46D99DB8467E588AE6AA8AE4719FC23D35&bindType=1&isDefault=1)

注册成功后，即可购买域名和服务器并享受华为云相关优惠政策

![image-20220826171047823](https://www.arryblog.com/assets/img/image-20220826171047823.70426788.png)

产品 -> 弹性云服务器 ECS

![image-20220826171315430](https://www.arryblog.com/assets/img/image-20220826171315430.90d3ac68.png)

立即购买 或 管理控制台（都可购买）

### 2、服务器购买配置选择

TIP

短期测试可选择**按量付费**`1核1G`即可（经济实惠）不需要时，随时可释放；

作为长期学习或将自己的项目长期部署，未来放简历中或部署个人博客使用，可按年购买（相对更划算）；

注：

服务器选择中国香港地区的，就不用备案马上就能用，中国大陆地区的都需要先备案才能用。备案时间根据各地区的要求时间不一样（从 1 周、0.5 个月、1 个月 ... 不等）

如果是需要正式运营的企业或个人项目，都需要走备案流程

![image-20220826192625395](https://www.arryblog.com/assets/img/image-20220826192625395.f4df4b85.png)

### 3、选择公共镜像、操作系统版本

![image-20220826193123063](https://www.arryblog.com/assets/img/image-20220826193123063.597a758a.png)

### 4、网络和安全组

![image-20220826205343216](https://www.arryblog.com/assets/img/image-20220826205343216.29d3b78f.png)

### 5、高级配置

![image-20220826204032220](https://www.arryblog.com/assets/img/image-20220826204032220.649896ad.png)

### 6、确认服务器相关信息无误，立即购买即可

![image-20220826205638780](https://www.arryblog.com/assets/img/image-20220826205638780.10339645.png)

### 7、创建成功后，返回云服务器列表

![image-20220826210002998](https://www.arryblog.com/assets/img/image-20220826210002998.870b0d4a.png)

### 8、IP 地址即为服务器的公网 IP

TIP

进入云服务器列表，即可看到购买成功后的 中国香港服务器，通过 IP 地址即可访问服务器

![image-20220826210628689](https://www.arryblog.com/assets/img/image-20220826210628689.f0e4e05d.png)

## 二、XShell 和 Xftp 远程链接云服务器

TIP

我们每天需要对 linux 服务器进行操作、文件传送等，那就需要一款高效 Secure Shell 软件（简称 SSH 的）

实际上，SSH 是一个网络协议，允许通过网络连接到 Linux 和 Unix 服务器。SSH 使用公钥加密来认证远程的计算机。

**XShell 和 Xftp 是 NetSarang 计算机公司 SSH 客户端软件**

- XShell 是非常强大的 SSH 客户端
- Xftp 通过网络传输文件

**其他常用的 SSH 登录工具**

- SecureCRT
- Putty
- Git Bash
- ... 等

### 1、下载免费版 XShell 和 Xftp

TIP

官方下载地址：[https://www.xshell.com/zh/(opens new window)](https://www.xshell.com/zh/)

当前页面底部，选择 [家庭/学校免费(opens new window)](https://www.xshell.com/zh/free-for-home-school/)

![image-20220820015627367](https://www.arryblog.com/assets/img/image-20220820015627367.e8f776de.png)

> 填写用户名和邮箱 获取下载地址

![image-20220820021506261](https://www.arryblog.com/assets/img/image-20220820021506261.be9cb514.png)

> 注意：需要一个有效的电子邮件地址（不要乱填）！下载链接将发送到您的邮箱。

### 2、XShell 和 Xftp 安装过程直接下一步

注意：选择免费版即可 ！

两个客户端都需要安装好，XShell 用于命令行操作服务器，Xftp 用于对服务器的文件上传和下载

### 3、新建连接服务器

TIP

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

![image-20220826212004949](https://www.arryblog.com/assets/img/image-20220826212004949.cb759128.png)

注：

如无法登录成功，检查用户名和密码是否正确，同时检查云服务器的安全组是否有开启 22 端口

## 三、Nginx Web 服务器安装和启动

TIP

Nginx (engine x) 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。[点击查看，详细介绍(opens new window)](https://www.arryblog.com/guide/deploy/alibaba-cloud-deployment.html#三、nginx-服务器)

Nginx 官网：http://nginx.org/

### 1、通过 yum 方式安装 Nginx

TIP

官方 yum 安装教程：[http://nginx.org/en/linux_packages.html#RHEL-CentOS(opens new window)](http://nginx.org/en/linux_packages.html#RHEL-CentOS)

#### ① 安装先决条件

```shell
# 安装yum依赖
yum install yum-utils
```

#### ② 添加 yum 源文件

```shell
cd /etc/yum.repos.d/
# 添加nginx的yum源码
vim nginx.repo

# 或 直接新建 nginx.repo 文件
vim /etc/yum.repos.d/nginx.repo

# 按下键盘中 “i” 键 进入编辑状态
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

#### ④ 保存并退出

```shell
# 按esc键 退出编辑状态
:wq
```

#### ⑤ 安装 Nginx

```shell
yum install nginx -y
# yun install nginx
# 如果使用yum install xxxx，会找到安装包之后，询问你Is this OK[y/d/N]，需要你手动进行选择。但是如果加上参数-y，就会自动选择y，不需要你再手动选择！
```

#### ⑥ 查看 Nginx 的版本号

```shell
nginx -v
# 显示nginx的版本号和编译信息
nginx -V
```

#### ⑦ 查看安装的所有 Nginx 包

```shell
yum list | grep nginx
```

#### ⑧ 查看 Nginx 常用相关的文件位置信息

```shell
whereis nginx
```

### 2、启动 Nginx 服务

```shell
cd /usr/sbin/
./nginx
# 或
/usr/sbin/nginx
```

> 浏览器输入服务器的公网 ip 地址，访问出现以下界面，则 Nginx 启动成功

![image-20220826220027096](https://www.arryblog.com/assets/img/image-20220826220027096.22662ac9.png)

#### 判断 Nginx 是否运行成功

TIP

- 在 linux 系统中运行的每个应用程序都会产生一个进程，可通过查看 nginx 进程是否存在来判断 nginx 是否运行成功。
- 或者查看 Nginx 是否正在运行中 ！

```shell
ps -ef  | grep nginx
# ps -ef：列出所有进程
# grep nginx：过滤掉和nginx无关的进程
```

![image-20220826215722304](https://www.arryblog.com/assets/img/image-20220826215722304.2bb8e233.png)

**查看 nginx 的进程 id**

```shell
ps -C nginx -o pid
```

![image-20220826215813959](data:image/png;base64,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)

## 四、域名解析

TIP

将域名解析到对应的服务器中，后边所有的内容都会基于域名来进行操作

### 1、域名结构解读

![domain-name](https://www.arryblog.com/assets/img/domain-name.3f9f0437.jpg)

通俗解读

一个完整的域名有三个部分的结构，分别是顶级域名（一级域名）、二级域名、三级域名。

**顶级域名、一级域名、二级域名、三级域名什么区别 ？**

- 从专业的角度解读
  - `.com` 是顶级域名（或一级域名）
  - `baidu.com` 是二级域名
  - `www.baidu.com` 或 `baike.baidu.com` 是三级域名
- 民间域名级别解读
  - `baidu.com` 是顶级域名（或一级域名）
  - `www.baidu.com` 或 `baike.baidu.com` 是二级域名
  - `xx.www.baidu.com` 或 `xx.baike.baidu.com` 是三级域名

注：

从专业的角度来看，虽然解读**是错误的**，但也可以理解（ 说的人多了也就是对的了…… 也就是 “约定俗成” ）

包括国内阿里云、华为云、腾讯云的域名级别都是按此方式（民间级别解读）定义的，建议也用此方式，避免产生额外的沟通问题。对于专业定义知道即可 ！

**我们在购买域名时：**

- 只需要购买一级域名（xxx.com 或 xxx.其他后缀）就好
- 二级、三级 ... 域名是不需要再次花钱购买的，只需购买域名的后台解析即可使用。
- 同时，我们就能理解

### 2、进入域名解析管理界面

![image-20220826223523078](https://www.arryblog.com/assets/img/image-20220826223523078.dd8d9a44.png)

> 进入解析界面

![image-20220826224954472](https://www.arryblog.com/assets/img/image-20220826224954472.608f824d.png)

> 进入管理解析界面

![image-20220826235115115](https://www.arryblog.com/assets/img/image-20220826235115115.d6f72999.png)

### 3、顶级域名解析

![image-20220827004842932](https://www.arryblog.com/assets/img/image-20220827004842932.506d2e5b.png)

> `arryblog.com` 顶级域名解析成功后

![image-20220827005423978](https://www.arryblog.com/assets/img/image-20220827005423978.46afc68d.png)

> 在浏览器中即可通过顶级域名`arryblog.com`直接访问服务器中部署的网站了

![image-20220827005636297](https://www.arryblog.com/assets/img/image-20220827005636297.ee80598e.png)

### 4、二级域名解析

TIP

`www.arryblog.com` 也是二级域名

**注意：**

带 `www` 的域名 它与不带 `www` 的 `arryblog.com` 是完全不同的域名。因此，`www.arryblog.com` 这个域名是需要单独解析才能访问。

#### ① 解析二级域名 `www.arryblog.com`

![image-20220827011748494](https://www.arryblog.com/assets/img/image-20220827011748494.38381904.png)

> `www.arryblog.com` 二级域名解析成功后

![image-20220827011958725](https://www.arryblog.com/assets/img/image-20220827011958725.4429fc57.png)

> 在浏览器中通过 `www.arryblog.com` 访问即可

![image-20220827012404261](https://www.arryblog.com/assets/img/image-20220827012404261.af37f9c2.png)

#### ② 解析二级域名 `web.arryblog.com`

![image-20220827010247055](https://www.arryblog.com/assets/img/image-20220827010247055.f42b9522.png)

> `web.arryblog.com` 二级域名解析成功后

![image-20220827013044996](https://www.arryblog.com/assets/img/image-20220827013044996.f943f3a8.png)

> 在浏览器中通过 `web.arryblog.com` 访问即可

![image-20220827010457036](https://www.arryblog.com/assets/img/image-20220827010457036.aa27d7b4.png)

### 5、三级域名解析

![image-20220827013534940](https://www.arryblog.com/assets/img/image-20220827013534940.e30b2ade.png)

> `pc.web.arryblog.com` 三级域名解析成功后

![image-20220827014004141](https://www.arryblog.com/assets/img/image-20220827014004141.bc5488a8.png)

> 在浏览器中通过 `pc.web.arryblog.com` 访问即可

![image-20220827014134797](https://www.arryblog.com/assets/img/image-20220827014134797.06a491d1.png)

## 五、Nginx 部署静态网站

TIP

将使用我们注册好的域名，实现静态网站的部署和实践

### 1、自定义 Nginx 配置文件

> ① 在 `/etc/nginx/`目录下新建文件夹 `vhosts`

```shell
whereis nginx
cd /etc/nginx/
ls
mkdir vhosts
cd vhosts
ls
```

> ② 新建自定义配置文件 `web.arryblog.com.conf`

```shell
# 与域名保持同名，是为了在部署多个项目时，容易区分和管理
vim web.arryblog.com.conf
```

`web.arryblog.com.conf` 文件内容如下

```shell
server {
    listen 80;
    server_name web.arryblog.com;
	location / {
      # 网站主页路径。此路径仅供参考，具体请您按照实际目录操作。
      # 例如，您的网站运行目录在/workspace/icoding下，则填写/workspace/icoding
      root /workspace/icoding;
	  index index.html index.htm;
    }
}
```

> ③ 保存并退出

```shell
esc
:wq
```

> ④ 查看 `cat web.arryblog.com.conf`

```shell
cat web.arryblog.com.conf
```

> ⑤ 在`/etc/nginx/nginx.conf` 中的 http 模块底部引入以上新建的自定义配置文件 `web.arryblog.com.conf`

注意：在修改默认的 nginx.conf 配置文件时，需要先备份

```shell
cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
```

编辑 `nginx.conf` 配置文件

```shell
cd /etc/nginx/
ll
vim nginx.conf
```

在 nginx.conf 文件中的引入自定义配置文件

```shell
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;

    # 导入自定义配置文件，用于配置我们自己的域名（导入的自定义配置文件是有先后顺序的）
	include /etc/nginx/vhosts/*.conf;
}
# 修改完成后，保存退出即可
esc
:wq
```

> ⑥ 再次查看配置文件信息

```shell
cat nginx.conf
```

> ⑦ 检查配置文件中是否存在语法错误

```shell
nginx -t
```

### 2、新建存放项目的目录

TIP

在 Linux 系统根目录新建 `/workspace/icoding` 目录（作为当前项目部署的目录），和配置文件一一对应

```shell
# 在Linux系统根目录中创建 /workspace/icoding 目录
mkdir -p /workspace/icoding
```

### 3、上传网站源代码至服务器

TIP

先找到刚刚在 Linux 根目录中新建的 `/workspace/icoding` 项目目录 -> 使用 Xftp 上传我们需要部署的静态网站即可

```shell
# 切换到Linux根目录
cd /
# 查看文件目录
ls
# 进入我们自定义的项目目录
cd workspace/icoding/
# 查看文件列表
ll
```

![image-20220827044637179](https://www.arryblog.com/assets/img/image-20220827044637179.2bbcf8b1.png)

> 登录链接 Xftp 成功后，上传项目源文件至 `workspace/icoding/`目录中即可

![image-20220827045116601](https://www.arryblog.com/assets/img/image-20220827045116601.6dc981dc.png)

> 上传完成后，重载 Nginx 服务

```shell
nginx -s reload
```

> 在浏览器中，输入域名`web.arryblog.com`即可访问

![image-20220827045704882](https://www.arryblog.com/assets/img/image-20220827045704882.3093eeb4.png)

## 六、Nginx 配置 HTTPS 加密协议

SSL 证书简介

SSL 证书（SSL Certificates）为网站和移动应用（APP）及小程序提供数据 HTTPS 加密协议访问，保障数据的安全。

装载 SSL 证书产品后自动激活浏览器中显示“锁”型安全标志，地址栏以“https”开头。

### 1、什么是 SSL 证书服务 ?

What is ？

SSL 证书服务（ SSL Certificates Service）是由各大云厂商联合中国及中国以外地域多家数字证书颁发机构（ CA，Certificate Authority），在各大云平台上直接提供的数字证书申请和部署服务。

SSL 证书服务帮助您以最小的成本将服务从 HTTP 转换成 HTTPS，实现网站或移动应用的身份验证和数据加密传输。

### 2、 华为云 SSL 证书和 HTTPS 的关系

TIP

您可以通过华为云 SSL 证书管理购买 SSL 证书，并向 CA 机构提交证书申请，CA 机构审核通过后将会签发证书。

签发后，您需要将 SSL 证书下载并安装到 Web 服务器中或一键部署至华为云其他云产品中，安装或部署完成后，您的 Web 服务器或云产品将会通过 HTTPS 加密协议来传输数据。

### 3、SSL 证书的作用

TIP

- 网站身份验证，确保数据发送到正确的客户端和服务器。
- HTTPS 加密传输协议可激活客户端浏览器到网站服务器之间的 SSL 加密通道（SSL 协议），从而实现高强度双向加密传输，防止传输数据被泄露或篡改。

### 4、为什么网站需要 HTTPS ？

TIP

- 防劫持、防篡改、防监听：使用 SSL 证书实现网站的 HTTPS 化，可以对网站用户与网站间的交互访问全链路数据进行加密，从而实现传输数据的防劫持、防篡改、防监听。
- 提升网站的搜索排名：使用 SSL 证书实现网站的 HTTPS 化后，网站在搜索引擎显示结果中的排名将会更高，有利于提升网站的搜索排名和站点的可信度。
- 提升网站的访问流量：使用 SSL 证书实现网站的 HTTPS 化，可以强化网站在用户侧的身份可信程度，使网站用户能更安心地访问网站，提升网站的访问流量。

### 5、SSL 证书购买

TIP

华为云免费证书申请相关教程 [https://support.huaweicloud.com/ccm_faq/ccm_01_0240.html(opens new window)](https://support.huaweicloud.com/ccm_faq/ccm_01_0240.html)

具体流程如下：

![image-20220827061535312](https://www.arryblog.com/assets/img/image-20220827061535312.96900859.png)

购买流程：产品 -> 安全与合规 -> 云证书管理服务 CCM

![image-20220827061854181](https://www.arryblog.com/assets/img/image-20220827061854181.2bf81496.png)

点击购买SSL证书

![image-20220827062447399](https://www.arryblog.com/assets/img/image-20220827062447399.8760fe7e.png)

选择免费SSL证书

![image-20220827062750361](https://www.arryblog.com/assets/img/image-20220827062750361.9da26df8.png)

去支付

![image-20220827062932385](https://www.arryblog.com/assets/img/image-20220827062932385.1f10c05e.png)

确认0元支付

![image-20220827063126624](https://www.arryblog.com/assets/img/image-20220827063126624.1c43b04e.png)

返回证书管理控制台

### 6、申请免费 SSL 证书

![image-20220827063708099](https://www.arryblog.com/assets/img/image-20220827063708099.d12f242b.png)

点击：申请证书

![image-20220827064255639](https://www.arryblog.com/assets/img/image-20220827064255639.db16a83e.png)

绑定域名

![image-20220827064712762](https://www.arryblog.com/assets/img/image-20220827064712762.9e10f562.png)

输入对应信息，提交申请

![image-20220827064901166](https://www.arryblog.com/assets/img/image-20220827064901166.0f1fd973.png)

证书申请提交成功，去DNS验证

### 7、NDS 验证

![image-20220827065940831](https://www.arryblog.com/assets/img/image-20220827065940831.6589c807.png)

点击验证，提示验证失败 ！

> 根据验证步骤，添加主机记录

![image-20220827071527534](https://www.arryblog.com/assets/img/image-20220827071527534.29645045.png)

> 添加主机记录成功后

![image-20220827071738827](https://www.arryblog.com/assets/img/image-20220827071738827.622017a1.png)

> 再次返回 DNS 验证页面，点击验证按钮重新验证

![image-20220827065940831](https://www.arryblog.com/assets/img/image-20220827065940831.3d7d4fa1.jpg)

> 验证成功，自动跳转下一步

### 8、下载证书

> DNS 验证成功后

![image-20220827072511509](https://www.arryblog.com/assets/img/image-20220827072511509.ff0215e8.png)

点击下载证书

![image-20220827072914572](https://www.arryblog.com/assets/img/image-20220827072914572.b16db70a.png)

> 下载完成后，解压缩文件 -> 找到对应 Nginx 证书即可

![image-20220827073426454](https://www.arryblog.com/assets/img/image-20220827073426454.eb5f4165.png)

> 两个证书文件，文件名可修改为
>
> ```
> web.arryblog.com_server.crt` 和 `web.arryblog.com_server.key
> ```

![image-20220827073739464](https://www.arryblog.com/assets/img/image-20220827073739464.fd29c903.png)

### 9、在 Nginx 服务器上安装 SSL 证书

官方文档参考

- 阿里云：[https://help.aliyun.com/document_detail/98728.htm?spm=a2c4g.11186623.0.0.53cd158eVj35YO#concept-n45-21x-yfb(opens new window)](https://gitee.com/link?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F98728.htm%3Fspm%3Da2c4g.11186623.0.0.53cd158eVj35YO%23concept-n45-21x-yfb)
- 腾讯云：[https://cloud.tencent.com/document/product/400/35244?from=14588(opens new window)](https://gitee.com/link?target=https%3A%2F%2Fcloud.tencent.com%2Fdocument%2Fproduct%2F400%2F35244%3Ffrom%3D14588)
- 华为云：[https://support.huaweicloud.com/usermanual-ccm/ccm_01_0082.html(opens new window)](https://support.huaweicloud.com/usermanual-ccm/ccm_01_0082.html)

> 在 Nginx 安装目录（默认为`/etc/nginx/vhosts/cert`）下创建一个用于存放证书的目录，将其命名为`cert` 。

```text
cd /
whereis nginx
ll
cd vhosts/
mkdir cert
cd cert/
```

> 将本地证书文件和私钥文件上传到 Nginx 服务器的证书目录

![image-20220827074855838](https://www.arryblog.com/assets/img/image-20220827074855838.e97c2cdb.png)

![image-20220827080735153](https://www.arryblog.com/assets/img/image-20220827080735153.a07b8798.png)

> 在服务器查看上传好的 证书文件

![image-20220827080955211](https://www.arryblog.com/assets/img/image-20220827080955211.e892cee1.png)

### 10、修改 Nginx 配置文件

TIP

编辑 `web.arryblog.com.conf` 配置文件，增加 SSL 证书配置 `vim /etc/nginx/vhosts/web.arryblog.com.conf`

```nginx
# 以下属性中，以ssl开头的属性表示与证书配置有关。
server {
    # 配置HTTPS的默认访问端口为443。
    # 如果未在此处配置HTTPS的默认访问端口，可能会造成Nginx无法启动。
    # 如果您使用Nginx 1.15.0及以上版本，请使用listen 443 ssl代替listen 443和ssl on。
    listen 443 ssl;
	# 填写绑定证书的域名
    server_name web.arryblog.com;

    # 证书文件名称
    ssl_certificate vhosts/cert/web.arryblog.com_server.crt;
    # 私钥文件名称
    ssl_certificate_key vhosts/cert/web.arryblog.com_server.key;
    # 指定客户端可以重用会话参数的时间（超时之后不可使用）
    ssl_session_timeout 5m;
    # 表示使用的加密套件的类型
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    # 表示使用的TLS协议的类型，您需要自行评估是否配置TLSv1.1协议。
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    # 设置协商加密算法时，优先使用我们服务端的加密套件，而不是客户端浏览器的加密套件。
    ssl_prefer_server_ciphers on;
    location / {
        # Web网站程序存放目录
        root /workspace/icoding;
	    index index.html index.htm;
    }
}

# 设置HTTP请求自动跳转HTTPS
# 如果您希望所有的HTTP访问自动跳转到HTTPS页面，则可以在需要跳转的HTTP站点下添加以下rewrite语句
server {
    listen 80;
    # 需要将yourdomain替换成证书绑定的域名
    server_name web.arryblog.com;
    # 将所有HTTP请求通过rewrite指令重定向到HTTPS
    rewrite ^(.*) https://$server_name$1 permanent;
    location / {
        root /workspace/icoding;
	    index index.html index.htm;
    }
}
```

> 检测 Nginx 配置文件是否正确

```shell
nginx -t
```

> 重新加载配置文件，立即生效

```shell
nginx -s reload
```

> 在浏览器中输入域名，测试即可：https://web.arryblog.com

![image-20220827084207456](https://www.arryblog.com/assets/img/image-20220827084207456.d43d5a70.png)

注意：

测试 HTTPS 访问前必须在云服务器的安全组中开启 443 端口，否则无法访问

## 七、Nginx 性能优化，Gzip 压缩

Gzip 是一种用于文件压缩与解压缩的文件格式

它基于 Deflate 算法，可将文件压缩地更小，从而实现更快的网络传输。 Web 服务器与现代浏览器普遍地支持 Gzip，这意味着服务器可以在发送文件之前自动使用 Gzip 压缩文件，而浏览器可以在接收文件时自行解压缩文件。

而对于我们而言，开启 Gzip，不仅能提高网站打开速度，还能节约网站流量，如果购买的服务器是按照使用流量付费，开启 Gzip 就是在为自己省钱。

### 1、Nginx 与 Gzip

TIP

Nginx 内置了 ngx_http_gzip_module 模块，该模块会拦截请求，并对需要做 Gzip 压缩的文件做压缩。

因为是内部集成，所以我们只用修改 Nginx 的配置，就可以直接开启。

```shell
# 查看nginx相关目录
whereis nginx
# 进入 Nginx 目录
cd /etc/nginx
# 查看 Nginx 默认配置文件
cat nginx.conf
# 修改 Nginx 配置
vim nginx.conf
```

### 2、Nginx 事件处理模型优化

TIP

nginx 的连接处理机制在于不同的操作系统会采用不同的 I/O 模型。

- Linux 下，nginx 使用 epoll 的 IO 多路复用模型；
- 在 freebsd 使用 kqueue 的 IO 多路复用模型；
- 在 solaris 使用 /dev/pool 方式的 IO 多路复用模型；
- 在 windows 使用的 icop 等等。

要根据系统类型不同选择不同的事务处理模型，我们使用的是 Centos，因此将 nginx 的事件处理模型调整为 epoll 模型即可。

```shell
# 事件模型
events {
    # 使用epoll内核模型
    # 说明：在不指定事件处理模型时，nginx默认会自动的选择最佳的事件处理模型服务。
    use epoll;
    # 每一个进程可以处理多少个连接，如果是多核可以将连接数调高 worker_processes * 1024
    worker_connections 51200;
}
```

### 3、GZIP 压缩性能优化

TIP

在 nginx 的默认主配置文件`nginx.conf`中，添加以下配置即可

```shell
# 开启压缩功能，on 表示开启 off 表示关闭，默认是 off
gzip on;
#表示允许压缩的页面最小字节数，页面字节数从header头的Content-Length中获取。默认值是0，表示不管页面多大都进行压缩，建议设置成大于1K。如果小于1K可能会越压越大。即：小于设置值的文件将不会压缩
gzip_min_length  1k;
# 设置压缩所需要的缓冲区大小
gzip_buffers 4 32k;
# 设置gzip压缩针对的HTTP协议版本
gzip_http_version 1.1;
# gzip 压缩级别，1-9，数字越大压缩的越好（一般选择4-6），也越占用CPU时间
gzip_comp_level 6;
gzip_types text/css text/xml application/javascript;
# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;
```

### 4、nginx.conf 配置修改

```shell
events {
    use epoll;
    worker_connections 51200;
    multi_accept on;
}

http {
    gzip on;
    gzip_min_length  1k;
    gzip_buffers     4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 6;
    gzip_types application/atom+xml application/geo+json application/javascript application/x-javascript application/json application/ld+json application/manifest+json application/rdf+xml application/rss+xml application/xhtml+xml application/xml font/eot font/otf font/ttf image/svg+xml image/jpeg image/gif image/png text/css text/javascript text/plain text/xml;
    gzip_vary on;
    gzip_disable   "MSIE [1-6]\.";
}
```

> 修改完 nginx 配置文件后，记得重载 nginx 服务即可生效

```shell
nginx -s reload
```

### 5、验证 Gzip 是否成功

第一种方式是：

直接查看网络请求，打开浏览器的调试工具，查看 `Network` 请求，如果请求响应头的 `Content-Encoding` 字段为 `gzip`，就表示成功开启了 Gzip

![image-20220827174126730](https://www.arryblog.com/assets/img/image-20220827174126730.db597f5e.png)

第二种方式是：

通过站长工具验证，打开[网页 GZIP 压缩检测 (opens new window)](https://gitee.com/link?target=https%3A%2F%2Ftool.chinaz.com%2Fgzips%2F%3Fq%3Dwww.arryblog.com)，输入网站，进行查询：

![image-20220827174305634](https://www.arryblog.com/assets/img/image-20220827174305634.5bbd209c.png)

### 6、添加 Gzip 压缩前后对比

> 添加 Gzip 前

![image-20220827163128159](https://www.arryblog.com/assets/img/image-20220827163128159.b672e232.png)

> 添加 Gzip 后

![image-20220827163634482](https://www.arryblog.com/assets/img/image-20220827163634482.74012b0a.png)

## 八、企业项目域名跳转的终极解决方案

TIP

以下 Nginx 配置的最佳实践是 SEO 优化的必备技术解决方案

- http: no-www 跳转到 www
- http: www 跳转到 no-www
- https: no-www 跳转到 www
- https: www 跳转到 no-www

具体的 Nginx 配置待大家在正式运营的需要时，再做讲解 ！先把目前讲的内容扎实的掌握好即可。

## 九、多网站、多系统部署

TIP

- 传统方式部署（已经讲过，自行尝试部署）
- 根据企业项目业务需求的变化，架构升级部署方式也会同步升级，参考之前课程中讲到的《互联网技术架构设计 15 次演进全过程》
- 容器化 Docker + Kubernetes 大规划集群分布式架构设计落地实战 + 微服务架构实战落地部署 + CICD + 系统平台监控 + 灰度发布，实现容器弹性扩容完整系统

注：

关于 Nginx 的企业级应用还有非常多的最佳实践，目前这些内容大家要先掌握掉，一步步逐渐深入并达到熟练的程度。

随着课程的深入和大家能力的提升、未来可期 ，一起加油 ！

上
