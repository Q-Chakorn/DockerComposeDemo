- create index.js
- npm init -y
- npm i -S fastify
- test "node index.js"

--create images--
- docker build -t dockercomposedemo:1.0 .
- docker run -d -p 91:91 --name composedemo dockercomposedemo:1.0 


--run by dockecompose--
- docker-compose up
- docker-compose up -d (run background)
- docker-compose down (stop and remove)

--add mongodb from dockerhub--
--add mongo-express from dockerhub--



help:
docker image
docker rmi <image_id>
docker ps
docker start
docker stop
docker rm <contrainer_id>
docker service ls
docker service rm <service_id>

docker commit <container_id> chakorn/dockercomposedemo:1.0
docker push chakorn/dockercomposedemo:tagname