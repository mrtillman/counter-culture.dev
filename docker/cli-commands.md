# Docker CLI Commands 

---

Frequently used [Docker CLI](https://docs.docker.com/engine/reference/commandline/docker/) commands


## Build an image

```sh
docker build -t counter-culture.app .
```

## Start a container

```sh
docker run -p 8080:8080 --name app -d mrtillman/counter-culture.app
```

## Start a container in interactive mode

```sh
cd counter-culture.app/
docker run -it -p 8080:8080 -v $(pwd):/app -w "/app"  node bash
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
https://docs.docker.com/engine/reference/commandline/build/<br/>
https://docs.docker.com/engine/reference/commandline/run/<br/>
https://docs.docker.com/engine/reference/commandline/stop/<br/>
https://docs.docker.com/engine/reference/commandline/rm/<br/>
https://docs.docker.com/engine/reference/commandline/rmi/<br/>

## See Also
https://docker-curriculum.com/<br/>
