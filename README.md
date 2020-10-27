# Node Supper Doggos 

[![NodeJS](https://nodejs.org/static/images/favicons/android-chrome-192x192.png)](https://nodejs.org/en/) [![Express](https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67)](https://expressjs.com/)

[![Actions Status](https://github.com/Nikoltod/node-super-doggos/workflows/node-ci-heroes/badge.svg)](https://github.com/Nikoltod/react-management-app/actions) [![Actions Status](https://github.com/Nikoltod/node-super-doggos/workflows/node-ci-threats/badge.svg)](https://github.com/Nikoltod/react-management-app/actions)

Quick little project which showcases how microservices built in Node can communicate.

  - You're able to send superheroes on a mission.
  - Ability to view all available superheroes.
  - View all threats which the superheroes can face.

### Tech

* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies on each service and then start each services separately.

```sh
$ cd heroes
$ npm install
$ npm start
```

```sh
$ cd threats
$ npm install
$ npm start
```

### Usage

The Heroes service supports the follwing requests :

GET    /heroes      to fetch all heroes
GET    /powers      to fetch all powers
POST   /hero/${id}  gets a specific hero by id

For example if we make a request to `GET: /heroes` we should get :

```
200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 424
Connection: keep-alive
```

On the Threats service you can make calls for :

GET    /threats        to fetch all threats
POST    /assignment    to retrieve a given threat by id

For example if we make a request to `POST: /assignment` with the following body in the request
```
{"heroId": 1, "threatId": 1}
```

we should get :

```
202 Accepted
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 121
Connection: keep-alive
```
