# Docker CLI Commands 

---

Frequently used [Docker CLI](https://docs.docker.com/engine/reference/commandline/docker/) commands


## Build an image

```sh
docker build -t counter-culture.app .
```

## Start a container

```sh
docker run -p 8080:8080 --security-opt apparmor=docker-default --name app -d mrtillman/counter-culture.app
```

## Stop a container

```sh
docker stop app
```

## Remove a container

```sh
docker rm app
```

## Remove an image

```sh
docker rmi mrtillman/counter-culture.app
```

## References
https://docs.docker.com/engine/reference/commandline/build/
https://docs.docker.com/engine/reference/commandline/run/
https://docs.docker.com/engine/reference/commandline/stop/
https://docs.docker.com/engine/reference/commandline/rm/
https://docs.docker.com/engine/reference/commandline/rmi/

## See Also
https://docker-curriculum.com/
