# use existing docker image
FROM alpine

# download and install dep
RUN apk add --update redis

# what to do on start
CMD ["redis-server"]
