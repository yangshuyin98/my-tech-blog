---
title: "Nginx 部署的核心配置、优化、域名服务器备案"
source: "https://www.arryblog.com/guide/deploy/nginx-configure.html"
category: "服务器"
order: 3
---

# Nginx 部署的核心配置、优化、域名服务器备案

TIP

本次先从静态项目部署开始入门，按照企业级的标准部署和优化、域名注册、服务器备案等 ...

## 一、Nginx 配置文件

TIP

深入浅出 Nginx 核心配置文件相关内容

### 1、查找 nginx.conf 核心配置文件

```shell
# 查看Nginx安装相关的文件位置信息
whereis nginx
# 进入配置文件目录
cd /etc/nginx/
# 查看当前目录 文件列表
ll
# 查看 nginx.conf 核心配置文件
cat nginx.conf
```

![image-20220823173813805](https://www.arryblog.com/assets/img/image-20220823173813805.6fc33949.png)

### 2、Nginx 核心配置文件解读

TIP

查看 nginx.conf 核心配置文件 `cat /etc/nginx/nginx.conf`

```nginx
# Nginx 全局块，配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。
# 每个指令必须有分号结束

# Nginx的worker进程运行用户以及用户组
user  nginx;
# Nginx开启的进程数，通常应该为当前主机的CPU物理核数;
# auto 表示 和 CPU内核相关，有几个内核，就会开启几个进程
worker_processes  auto;

# 制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg
error_log  /var/log/nginx/error.log notice;
# 指定nginx进程运行文件存放地址
pid        /var/run/nginx.pid;

# events块（事件配置）
# 配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。
events {
    # 每一个进程可以处理多少个连接，如果是多核可以将连接数调高 worker_processes * 1024
    worker_connections  1024;

    # 设置网路连接序列化，防止惊群现象发生，默认为 on
    # accept_mutex on;
    # 设置一个进程是否同时接受多个网络连接，默认为 off
    # multi_accept on;
    # 事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport
    # use epoll;
}

# http块
http {
    # 文件扩展名与文件类型映射表
    include       /etc/nginx/mime.types;
    # 默认文件类型，默认为text/plain
    default_type  application/octet-stream;
    # 自定义日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    # 用了log_format 指令设置了日志格式之后，需要用access_log指令指定日志文件的存放路径；
    access_log  /var/log/nginx/access.log  main;

    # 允许sendfile方式传输文件，默认为off，可以在http块，server块，location块
    sendfile        on;
    # 防止网络阻塞
    #tcp_nopush     on;

    # 连接超时时间，可以在http，server，location块
    keepalive_timeout  65;

    # gzip模块设置
    #gzip  on;

    # 引入系统默认的配置文件
    include /etc/nginx/conf.d/*.conf;
}
```

### 3、Nginx 日志格式 log_format 详细解读

TIP

Nginx 的 log_format 有很多可选的参数用于标示服务器的活动状态，默认的是：

```
'$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for"';
```

如果要记录更详细的信息需要自己修改 log_format，具体可设置的参数格式及说明如下：

```shell
# 切换到日志目录
cd /var/log/nginx/
ll
# 查看日志文件
cat access.log
```

| 参数                    | 描述                                           | 示例                                                         |
| :---------------------- | :--------------------------------------------- | :----------------------------------------------------------- |
| $remote_addr            | 客户端地址                                     | 117.132.65.236                                               |
| $remote_user            | 客户端用户名称                                 | - -                                                          |
| $time_local             | 访问时间和时区                                 | 24/Aug/2022:09:46:53 +0800                                   |
| $request                | 请求的 URI 和 HTTP 协议                        | "GET /./assets/js/48.e1244895.js HTTP/1.1"                   |
| $http_host              | 请求地址，即浏览器中你输入的地址（IP 或域名）  | https://www.arryblog.com/guide/css3/css-30-case.html         |
| $status                 | HTTP 请求状态                                  | 200                                                          |
| $upstream_status        | upstream 状态                                  | 200                                                          |
| $body_bytes_sent        | 发送给客户端文件内容大小                       | 3618                                                         |
| $http_referer           | url 跳转来源                                   | https://www.baidu.com/                                       |
| $http_user_agent        | 用户终端浏览器等信息                           | "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36" |
| $ssl_protocol           | SSL 协议版本                                   | TLSv1                                                        |
| $ssl_cipher             | 交换数据中的算法                               | RC4-SHA                                                      |
| $upstream_addr          | 后台 upstream 的地址，即真正提供服务的主机地址 | 13.28.68.36:80                                               |
| $request_time           | 整个请求的总时间                               | 0.165                                                        |
| $upstream_response_time | 请求过程中，upstream 响应时间                  | 0.002                                                        |

### 4、自定义 Nginx 配置文件

> ① 在 `/etc/nginx/`目录下新建文件夹 `vhosts`

```shell
whereis nginx
cd /etc/nginx/
ls
mkdir vhosts
cd vhosts
ls
```

> ② 新建自定义配置文件 `47.100.86.253.conf`
>
> 注：现阶段如果还没有域名就可以先使用自己服务器的 IP 代替即可

```shell
# 与域名保持同名，是为了在部署多个项目时，容易区分和管理
vim 47.100.86.253.conf
```

文件内容如下

```nginx
server {
    listen 80;
    server_name 47.100.86.253;
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

> ④ 查看 `cat 47.100.86.253.conf` 文件

```shell
cat 106.15.250.68.conf
```

> ⑤ 在`/etc/nginx/nginx.conf` 中的 http 模块底部引入以上新建的自定义配置文件 `47.100.86.253.conf`

注意：在修改默认的 nginx.conf 配置文件时，需要先备份

```shell
cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
```

编辑 nginx.conf 配置文件

```shell
cd /etc/nginx/
ll
vim nginx.conf
```

在 nginx.conf 文件中的引入自定义配置文件

```nginx
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

    # 添加自定义配置文件，用于配置我们自己的域名（导入的自定义配置文件是有先后顺序的）
	include /etc/nginx/vhosts/*.conf;

    include /etc/nginx/conf.d/*.conf;
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

### 5、新建存放项目的目录，上传并测试

> ① 在 Linux 系统根目录新建 `/workspace/icoding` 目录（作为当前项目部署的目录），和配置文件一一对应

```shell
# 在Linux系统根目录中创建 /workspace/icoding 目录
mkdir -p /workspace/icoding
cd workspace/
cd icoding/
```

> ② 先通过`rz`的方式直接上传一个`index.html`文件做测试

```shell
# 如果没有 rz 上传命令，就先安装即可
yum install lrzsz -y

rz 回车 -> 选择需要上传的文件即可
```

> ③ 修改配置文件后重新加载生效

```shell
nginx -s reload
```

> ④ 浏览器查看效果

![image-20220824214743124](https://www.arryblog.com/assets/img/image-20220824214743124.b7665fd1.png)

## 二、Nginx 静态网站部署

TIP

由于大家目前还没有购买域名和备案，因此暂时与域名相关的配置（如：HTTPS 加密协议、域名解析 ... 等功能）还无法操作。后续将会讲解 ！

### 1、静态网站的服务器上传部署

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

![image-20220824232548478](https://www.arryblog.com/assets/img/image-20220824232548478.c3d0f9a1.png)

> 登录链接 Xftp 成功后，上传项目源文件至 `workspace/icoding/`目录中即可

![image-20220824233243841](https://www.arryblog.com/assets/img/image-20220824233243841.ce8d0e46.png)

> 上传完成后，在浏览器中输入服务器 ip 即可访问

![image-20220825014153527](https://www.arryblog.com/assets/img/image-20220825014153527.4e132f52.png)

### 2、部署多个网站（在没有域名情况下）

方式一：

独立配置，通过不同端口号的方式部署

```shell
# 移动端项目：流体布局
server {
    listen 81;
    server_name 47.100.86.253;
	location / {
      root /workspace/mobile-fluid;
	  index index.html index.htm;
    }
}
# 移动端项目：rem,vw 布局
server {
    listen 82;
    server_name 47.100.86.253;
	location / {
      root /workspace/mobile-rem-vw;
	  index index.html index.htm;
    }
}
# 响应式布局项目
server {
    listen 83;
    server_name 47.100.86.253;
	location / {
      root /workspace/mobile-responsive;
	  index index.html index.htm;
    }
}
```

在浏览器中访问不同的项目：

- PC 端项目：http://47.100.86.253/
- 移动端项目-流体布局：http://47.100.86.253:81/
- 移动端项目-rem、vw 布局：http://47.100.86.253:82/
- 响应式布局项目：http://47.100.86.253:83/

方式二：

按不同目录单独存放静态网站源文件

```shell
# 将 /workspace 项目目录中的三个项目源文件复制到80端口对应的目录中
# cp -r 源文件夹路径 新文件夹路径
cp -r /workspace/mobile-fluid /workspace/icoding
cp -r /workspace/mobile-rem-vw /workspace/icoding
cp -r /workspace/mobile-responsive /workspace/icoding
```

在浏览器中访问不同的项目：

- PC 端项目：http://47.100.86.253/
- 移动端项目-流体布局：http://47.100.86.253/mobile-fluid/
- 移动端项目-rem、vw 布局：http://47.100.86.253/mobile-rem-vw/
- 响应式布局项目：http://47.100.86.253/mobile-responsive/

**注：**

由于大家目前还没有购买域名和备案，因此暂时与域名相关的配置（如：HTTPS 加密协议、域名解析 ... 等功能）还无法操作。后续将会讲解 ！

## 三、Nginx 性能优化，Gzip 压缩

TIP

Gzip 是一种用于文件压缩与解压缩的文件格式。

- 它基于 Deflate 算法，可将文件压缩地更小，从而实现更快的网络传输。
- Web 服务器与现代浏览器普遍地支持 Gzip，这意味着服务器可以在发送文件之前自动使用 Gzip 压缩文件，而浏览器可以在接收文件时自行解压缩文件。

而对于我们而言，开启 Gzip，不仅能提高网站打开速度，还能节约网站流量，如果购买的服务器是按照使用流量付费，开启 Gzip 就是在为自己省钱。

### 1、Nginx 与 Gzip

TIP

Nginx 内置了 ngx_http_gzip_module 模块，该模块会拦截请求，并对需要做 Gzip 压缩的文件做压缩。因为是内部集成，所以我们只用修改 Nginx 的配置，就可以直接开启。

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
- 在 solaris 使用/dev/pool 方式的 IO 多路复用模型；
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

![image-20220825051149208](https://www.arryblog.com/assets/img/image-20220825051149208.e80db515.png)

第二种方式是：

通过站长工具验证，打开[网页 GZIP 压缩检测 (opens new window)](https://gitee.com/link?target=https%3A%2F%2Ftool.chinaz.com%2Fgzips%2F%3Fq%3Dwww.arryblog.com)，输入网站，进行查询：

![image-20220825051253781](https://www.arryblog.com/assets/img/image-20220825051253781.606a5ed1.png)

## 四、域名服务器备案

TIP

目前国内阿里云、华为云、腾讯云 等各大云厂商都可以使用。在我们学习阶段就货比三家，性价比优先原则选择就好。

### 1、合作云厂商



槐里集团官网：[http://www.iis090.cn/(opens new window)](http://www.iis090.cn/)

![image-20220825163606919](https://www.arryblog.com/assets/img/image-20220825163606919.16879a55.png)

注：

只有通过以上链接进入注册账号，后续使用服务器、域名、备案等才可享受官方合作优惠 及 专属技术支持服务

- [点击进入，华为云官方合作优惠注册入口(opens new window)](https://account.huaweicloud.com/obmgr/invitation/invitation.html?bpName=0000000100000002E9FE165000987B959FFED359C16D4FB05162A18EC18D554C7FAD81A76B8151C42E6A7998824D40CC0F6932757F1902EBA18BC0C8B6CAA06565DA936A6C5D515C&inviteCode=00000001000000024D4659CBCF8488B5B2667E3588E00D46D99DB8467E588AE6AA8AE4719FC23D35&bindType=1&isDefault=1)
- [点击进入，腾讯云官方合作优惠注册入口(opens new window)](https://partner.cloud.tencent.com/invitation/1000131975265e5cbfe045b1e)

阿里云暂时优惠力度不大，本次就没合作了。

### 2、华为云域名注册、服务器



- 域名注册专享优惠链接：[https://activity.huaweicloud.com/domain1.html(opens new window)](https://activity.huaweicloud.com/domain1.html)
- 华为云服务器（中国香港）：[https://activity.huaweicloud.com/global/index.html(opens new window)](https://activity.huaweicloud.com/global/index.html)

### 3、腾讯云域名注册、服务器



- 域名注册专享优惠链接：[https://cloud.tencent.com/act/pro/domain-sales?from=dnspodqcloud(opens new window)](https://cloud.tencent.com/act/pro/domain-sales?from=dnspodqcloud)
- 腾讯云服务器优惠专场：[https://cloud.tencent.com/act/pro/seckill_season?from=18068(opens new window)](https://cloud.tencent.com/act/pro/seckill_season?from=18068)

