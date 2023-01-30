require('dotenv').config();

var mqtt = require("mqtt");
const HostURL = `mqtt://${process.env.HOST}:${process.env.PORT}`;

exports.client = () => {
  return mqtt.connect(HostURL, {
    clientId: 'NodeJs_platform',
    clean: true,
    connectTimeout: 4000,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    reconnectPeriod: 1000,
  });
};

exports.HostURL = HostURL;
