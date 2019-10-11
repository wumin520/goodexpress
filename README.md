# goodexpress
try express
Docker 安装 Redis
### 创建目录redis,用于存放后面的相关东西。
mkdir -p ~/redis ~/redis/data

### 进入创建的redis目录
### 拉取官方的镜像，可以带标签,eg: redis:3.2

docker pull redis

### 等待下载完成后，我们就可以在本地镜像列表里查到REPOSITORY为redis的镜像。

### 使用redis镜像启动redis:

docker run -p 6379:6379 -v $PWD/data:/data  -d redis redis-server --appendonly yes

### 命令说明：
    -p 6379:6379 :将容器的6379端口映射到主机的6379端口
    -v $PWD/data:/data :将主机中当前目录下的data挂载到容器的/data
    redis-server --appendonly yes :在容器执行redis-server启动命令，并打开redis持久化配置

### 使用redis镜像执行redis-cli命令连接到刚启动的容器,主机IP为172.16.3.152

docker run -it redis:3.2 redis-cli -h 172.16.3.152

### Process Manager
npm install -g strongloop

### Follow your logs live in the console
slc ctl log-dump myapp1 --follow

### Process Manager
npm install -g pm2

### start app
* pm2 start src/app.js
* pm2 list
* pm2 logs 0

### docker 根据Dockerfile生成镜像
``` bash
docker build -t username/repository:tag .
```

### docker 运行容器
``` # bash
* docker run -i -t -p 5001:5001 --name=wumin-e01 wumin/express:0.1 /bin/bash
# i:打开容器的标准输入。

# t:告诉docker为容器建立一个命令行终端。
# name:指定容器名称，可以不填(随机)，建议根据具体使用功能命名，便于管理。
# centos:告诉我们使用什么镜像来启动容器。
# /bin/bash:告诉docker要在容器里面执行此命令。
```

### docker 删除容器
``` # bash
* docker rm $(docker ps -a -q)  # 删除所有停止的容器
* docker ps -n=2 # -n=x选项，会列出最后创建的x个容器。
```

### docker 镜像管理
```
* docker rmi image
```

### docker 启动容器
```
* docker start containerName
```
### eslintrc configuration
* "off" or 0 - turn the rule off
* "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
* "error" or 2 - turn the rule on as an error (exit code will be 1)


```bash
#检测后台进程是否存在
ps -ef |grep redis

#检测6379端口是否在监听
netstat -lntp | grep 6379
```

### 版本格式：主版号.次版号.修订号，版号递增规则如下：
* 主版号：当你做了不相容的 API 修改，
* 次版号：当你做了向下相容的功能性新增，
* 修订号：当你做了向下相容的问题修正。
* 先行版号及版本编译资讯可以加到「主版号.次版号.修订号」的后面，作为延伸。


### npm淘宝镜像设置
* npm config set registry https://registry.npm.taobao.org