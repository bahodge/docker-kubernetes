### create image

-   `docker create <image>`

### start image

-   `docker start <containerid> <override command>`

### runs docker create and start all in 1

-   `docker run <container> <override command>`
-   Open a docker container w/ shell - `docker run -it busybox sh`

### list containers

-   `docker ps`

### list all containers(dead)

-   `docker ps -a`

### kill containers

-   `docker kill <containerid>`

### exec

-   `docker run <image>`
-   `docker exec -it <containerid> <command>`
-   Shell Access - `docker exec -it <containerid> sh`

### build

-   build from docker file
-   `docker build .`
