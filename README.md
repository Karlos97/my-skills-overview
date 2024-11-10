# Introduction

This project is a full-stack application that serves as a personal "About Me" showcase, highlighting my expertise in web development, backend engineering, and DevOps.

The application provides users with an interactive way to explore database records, supported by a clean, well-documented codebase that adheres to best practices. It demonstrates my skills in:

- **Frontend Development**: Built to deliver an engaging, user-friendly experience.
- **Backend Engineering**: Structured for efficient data handling and smooth database integration.
- **DevOps Practices**: Deployed on a personal server with Docker containers and automated SSL certificates for secure, stable access.

With a strong emphasis on performance optimization and comprehensive documentation, this project acts as both a technical portfolio and a practical example of my work.

# Overall Description

The folder structure is divided into `frontend` and `backend`. Each folder has its own `README.md` file describing further technical details.
This project is utylizing front and backend technologies and project patterns. The whole app is wrapped in containers with auto ssl included as a part of dev ops.
To fully run and test production version comment out `steveltn/https-portal` container as it needs open ports 80, 443 and external DNS redirection(which was used to host this very project).

# Prerequisites

- Docker + Docker Compose / Docker Desktop
- Fill up env file

Run `docker compose up -d` to start the containers in detached mode.

The app should be accessible on the following ports(if you keep .env.example):

- Backend: **3000**
- Frontend: **4173**

After startup of docker container run:\
`sudo docker-compose run backend yarn migrate:prod`\
If you do need some data on startup run:\
 `sudo docker-compose run backend yarn seed`

### Note

Ensure that you fulfill the prerequisites mentioned in the `frontend/README.md` and `backend/README.md` files to run the app locally. Also comment aut frontend/backend cotnainers from .yml file so ports wouldn't overlap.

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)

# Husky

Husky is used as a pre-commit helper to run linting/testing scripts.\
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

I used to host apps like this in my private home lab, utilizing [https-portal](https://hub.docker.com/r/steveltn/https-portal/dockerfile), which provides auto ssl, making it easy for developers to configure. Alternatively, I used Certbot and open lts. I also used to set different apps like own GitLab, private VPNs, own clouds and I've always took care of automated backups, keeping in mind security and even created an uninterruptible power supply (UPS) and electrical box for my servers(to be safe not only from virtual threats, but also physical ones). Feel free to ask if you want more details on this setup.

### Summary

Most of my time was spent configuring the technology stack. However, now that the configuration is in place, it provides a solid foundation for developers to build upon, ensuring the project remains simple, atomic, tested, and well-maintained. Tailwind CSS greatly supports the app's responsiveness, including dark and light themes.

I haven't dedicated extra time to writing tests or Storybook stories. The project serves primarily as a proof of concept (PoC) to demonstrate my approach to building apps, my technology choice and shortly describe me and my career.

I intentionally avoided using components like Tanstack Table etc., to showcase that I know how to build components from scratch. This project leverages my experience with various libraries, allowing it to grow easily while remaining scalable.
