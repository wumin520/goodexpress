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