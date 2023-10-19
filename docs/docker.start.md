# Docker images run

## minio

- 运行容器

  ```sh
  docker run -p 9000:9000 -p 9090:9090 --name minio -d --restart=always -e "MINIO_ACCESS_KEY=minioadmin" -e "MINIO_SECRET_KEY=minioadmin" -v /Users/care/Desktop/docker/minio/data:/data -v /Users/care/Desktop/docker/minio/config:/root/.minio minio/minio server /data --console-address ":9090" -address ":9000"
  ```

## redis

- 创建 redis.conf 文件
- 运行容器

  ```sh
    docker run -itd -p 6379:6379 --name redis -v /Users/care/Desktop/docker/redis/redis.conf:/etc/redis/redis.conf -v /Users/care/Desktop/docker/redis/data:/data redis redis-server /etc/redis/redis.conf --appendonly yes
  ```

## mongo

- 运行容器

  ```sh
    docker run -itd --name mongo -p 27017:27017 -v /Users/care/Desktop/docker/mongo/data:/data/db -d mongo --auth
  ```

- 添加 root 用户

  ```sh
  docker exec -it mongo mongosh
  db.createUser({ user: 'root', pwd: 'root', roles: [ { role: "userAdminAnyDatabase", db: "cellink" } ] });
  ```

## mysql:5.7

- 运行容器

  ```sh
  docker run --name mysql -p 3306:3306 -v /Users/care/Desktop/docker/mysql/log:/var/log/mysql -v /Users/care/Desktop/docker/mysql/data:/var/lib/mysql -v /Users/care/Desktop/docker/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
  ```
