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