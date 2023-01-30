const mqttServer = require("./mqttServer");
const client = mqttServer.client();
const topic = process.env.TOPIC;

/*
The message needs to be published after the MQTT connection is successful, so we write it in the 
callback function after the connection is successful
*/
client.on("connect", () => {
  console.log("Publisher > Connect successfully, trying to publish now...");
  const message = 'msg from node Publisher';

  client.publish(
    topic, 
    message, 
    { qos: 0, retain: false }, 
    ((error, packet) => {
      if (!error)
        console.log('Published Success: ', packet);
      else
        console.error(error);
    })
  );
});
