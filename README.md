
# MQTT with Mosquitto broker (Node.js Platform)

This is a very quick & simple boilerplate where you can develop Node.js app with MQTT protocols for Pub/Sub message exchange module with the help of Mosquitto broker (custom configuration)

## Tech Stack

**Server:** Nodejs, Mosquitto


## Installation

#### You need to install Mosquitto broker server on your machine to run this project locally, to install Mosquitto you can check this link https://mosquitto.org/download/. 
Mosquitto can be installed from the homebrew project

```
  brew install mosquitto
```
 
Install all dependencies 

```
  yarn install OR npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. 
I have already added env-template file in repo which you can use for your .env file setup

`HOST`

`PORT`

`USERNAME`

`PASSWORD`

`TOPIC`


## Run Locally 
#### Open 2 different terminal windows & run following commands on each separately    

first run subscriber code

```bash
  node src/mqttSub.js
```

if you face any error while server starting, just kill all previously running mosquitto servers at your local. to do this just run following command
```bash
killall mosquitto
```

on second terminal window run publisher code 

```bash
  node src/mqttPub.js
```

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Author

- [Satish Wadekar](https://github.com/Satish-A-Wadekar)


## Support

For support, email satish.a.wadekar@gmail.com.
