# Novogradko

Novogradko is a simple web app that displays new residential buildings in Slovenia on a map or on a list.

## Installation

Clone the Novogradko GitHub repository to your machine.

```bash
git clone https://github.com/robiworks/novogradko.git
```

Make sure you are currently in the directory containing the cloned GitHub repository.
Run the following command to bring up the application stack. `sudo` is optional depending on your configuration.

```bash
sudo docker-compose up
```

## The application

After the application stack has been brought up and all the containers are running (`ng-database`, `ng-backend`, `ng-frontend`) you can access the web application on the following address:

```
http://localhost:8080/
```

You will be greeted with the Novogradko homepage. The application is in Slovenian as it is meant to be used for the Slovenian market.

![Novogradko homepage](https://i.imgur.com/fFS8Fl8.png)

You can navigate through the pages by clicking on `Domov`, `Zemljevid` or `Seznam`. To look at the map of new residential buildings with their locations as map markers, click on `Zemljevid`.

![Novogradko map](https://i.imgur.com/KJiIZ5t.png)

A Leaflet map will show up with two types of map markers: one for apartment complexes and one for houses/villas. You can zoom in, zoom out and click on markers to bring up a popup with more information regarding the new residential building.

![Novogradko map marker popup](https://i.imgur.com/gVscLDY.png)

To access the list of new residential buildings, click on `Seznam`. You will be presented with a list of all new developments currently in the database.

![Novogradko list](https://i.imgur.com/OO53SFs.png)

Filtering is not implemented currently as this is just a prototype of the web application and not the final finished product. This can also be seen on the *unpolished* homepage, a relatively small database (34 entries)...

## Under the hood

### Application components

The application is composed of a database container, a backend container and a frontend container.

- **PostgreSQL** was chosen as the (SQL) database of choice due to its speed and reliability. I have worked with MySQL in the past but decided to try something new for this project.
- **Node.js** was chosen as the backend/API part of the application due to its widespread use, quick prototyping and some positive personal experience with it.
- **Bulma** was chosen as the frontend CSS framework as the application prototype does not need an extensive library like Bootstrap. It also needs almost no JavaScript files to function properly.
- **NGINX** was chosen as the frontend web server due to its speed and personal experience with it.

### Which images?

I used Alpine images for everything as the image size is much smaller (e.g. according to Docker Hub, the `latest` Node.js image is 351.68 MB compressed at the time of writing, and the `alpine` Node.js image is 48.75 MB compressed at the time of writing).

### Image size

I used multi-stage builds to reduce the size of the backend image from 178 MB to 174 MB. The Node.js Alpine image is 170 MB and I believe I couldn't have gone any smaller without completely deleting my application :). I could have built a custom image from the base Alpine image but decided against it as this is just a prototype. Here is a list of sizes next to their base image companions:

```
REPOSITORY               TAG             IMAGE ID       CREATED          SIZE
novogradko_backend       latest          db630d216186   16 minutes ago   174MB
novogradko_frontend      latest          da4088624b69   16 minutes ago   23.2MB
novogradko_database      latest          185b2cabda58   16 minutes ago   209MB
node                     alpine          e32df7d6c22c   10 days ago      170MB
postgres                 alpine          2302d5724f71   4 weeks ago      209MB
nginx                    stable-alpine   373f8d4d4c60   6 weeks ago      23.2MB
```

As you can see, the database and frontend images are practically the same size, only a few kB larger at most. The frontend image is exactly the same size as the NGINX base image because it uses Docker Volumes to get the static files it needs to serve.

### Use of Volumes

Docker Volumes were used for the frontend image/container. NGINX serves files from the directory `/usr/share/nginx/html` by default, and I mounted the `frontend/site-content` directory into it inside the `docker-compose.yml` file. This also allows me to make changes to the static files without having to rebuild the container.

## Possible improvements & additions

As this is just a prototype of the application a lot more could be added to the final product. Here are just a few that came to my mind:

1. Add the ability to add a new residential building through the web UI instead of having to fiddle with the database (add `POST` method to API, validation, ...).
2. List filtering: as you can see this was planned for the prototype but I did not implement it (yet) because it would take a significant amount of time.
3. Map filtering: same as list filtering but for the map UI.
4. A better homepage: self-explanatory.
5. An English version of the web application: the application is currently only available in Slovenian, an English variant would be a nice addon.
6. Smaller backend image size: as explained above, making a custom image would drastically reduce the size (install Node only, remove NPM ...).
7. Building descriptions: add descriptions for each building, add them to the database and display them in the app.