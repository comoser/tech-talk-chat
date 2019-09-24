# Tech Talk - Docker beginner hands-on

This a demo app for virtualisation with docker, part of the xgeeks Tech Talks.

The app consists in a simple chat that has memory persistence with Redis.
The chat has real-time communication with other rooms through sockets.

### Environments

```bash
npm run dev - responsible for launching the dev environment.
// This corresponds to a docker-compose that will spin 1 container for redis, 1 container for the API and 1 container for the client (chat window).
// In dev the client app is setup to have HMR working. 

npm run prod - responsible for launching the prod environemnt.
// It spins the same containers as dev
// It doesn't have HMR support the client application
```

Feel free to use the code on this repo or to contribute to it in any way.

### License: [MIT](LICENSE) 
