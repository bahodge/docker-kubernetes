### Creating Images

-  `docker create <image>`

### start image

-  `docker start <containerid>`

### runs docker create and start all in 1

-  `docker run <container> <override command>`
-  Open a docker container w/ shell - `docker run -it busybox sh`

### list containers

-  `docker ps`
-  `docker ps -a`

### Killing Containers

-   `docker kill <containerid>`

### Executing Commands in containers

- `docker exec -it <containerid> <command>`

#### Shell Access

- `docker exec -it <containerid> sh`
- `docker exec -it <containerid> bash`
- `docker exec -it <containerid> zsh`

### Building Images 

`docker build <path/to/dir>`

#### build from docker file

- `docker build .`

#### build docker file with tag

- `docker build <repo>/<image>:<tag>`

