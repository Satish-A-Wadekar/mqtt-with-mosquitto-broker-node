const mqttServer = require("./mqttServer");
const client = mqttServer.client();
const topic = process.env.TOPIC;

/*
client() function returns server instance to monitor the connection status. we then use the "on" event handler to "connect" the server, 
once the the connection is successful we call "subscribe" function with "topic" as parameter. 
*/
client.on("connect", () => {
  client.subscribe([topic], (subscribe_error, subscribe_data) => {
    if (!subscribe_error)
      console.log(`Subscription DONE with details: `, subscribe_data);
    else  
      console.error(`subscribe() > error: `, subscribe_error);
  });
});


/*
After subscribing to the topic successfully execute, we then use the "on" event handler to monitor the callback function of 
message receiver. When the message is received, we can get details of topic and message in the callback
*/
client.on("message", (topic, payload) => {
  console.log("Received message details: ", [{topic, message: payload.toString()}]);
  client.end()
});
