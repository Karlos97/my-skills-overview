# Overall Description

The folder structure is divided into `frontend` and `backend`. Each folder has its own `README.md` file describing further technical details.
This project is utylizing front and backend technologies and project patterns. The whole app is wrapped in containers with auto ssl included as a part of dev ops.
To fully run and test production version comment out `steveltn/https-portal` container as it needs open ports 80, 443 and external DNS redirection(which was used to host this very project).

# Prerequisites

- Docker + Docker Compose / Docker Desktop
- Fill up env file

Run `docker compose up -d` to start the containers in detached mode.

The app should be accessible on the following ports:

- Backend: **3000**
- Frontend: **4173**

After startup of docker container run:\
`sudo docker-compose run backend yarn migrate:prod`\
If you do need some data on startup run:\
 `sudo docker-compose run backend yarn seed`

### Note

Ensure that you fulfill the prerequisites mentioned in the `frontend/README.md` and `backend/README.md` files to run the app locally.

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)

# Husky

Husky is used as a pre-commit helper to run linting scripts.\
 To add new scripts, modify the `/frontend/.husky/pre-commit` file and add the necessary scripts there.

## Troubleshooting

If you encounter the following error:
ERROR [backend internal] load metadata for docker.io/library....\
To fix the issue, run the following command: `rm ~/.docker/config.json`

Source: [Stackoverflow](https://stackoverflow.com/questions/66912085/why-is-docker-compose-failing-with-error-internal-load-metadata-suddenly)

**Ts-node** was added as a dependency instead of dev dependency. The reason was that it was breaking production build and inside the docker `yarn build` script was not working. The reason to that is broken development / production environment.\
**More info:**

- [Build:Cannot find type definition file for 'node'](https://stackoverflow.com/questions/43542710/buildcannot-find-type-definition-file-for-node)
- [How to compile typescript in Dockerfile](https://stackoverflow.com/questions/51083134/how-to-compile-typescript-in-dockerfile)

# Comments

### Private Hosting #bragging

I used to host apps like this on my private home lab, utilizing [https-portal](https://hub.docker.com/r/steveltn/https-portal/dockerfile), which includes Nginx, making it easy for developers to configure. Alternatively, I used Certbot for SSL management. I also set up GitLab, automated backups, and even created an uninterruptible power supply (UPS) and electrical box for my servers. Feel free to ask if you want more details on this setup.

### Summary

Most of my time was spent configuring the technology stack. However, now that the configuration is in place, it provides a solid foundation for developers to build upon, ensuring the project remains simple, atomic, tested, and well-maintained. Tailwind CSS greatly supports the app's responsiveness, including dark and light themes.

I haven't dedicated extra time to writing tests or Storybook stories. The project serves primarily as a proof of concept (PoC) to demonstrate my approach to building apps and my technology choices, as briefly described above.

I intentionally avoided using components like Tanstack Table to showcase that I know how to build components from scratch. This project leverages my experience with various libraries, allowing it to grow easily while remaining scalable.
