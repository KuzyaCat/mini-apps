const amqp = require('amqplib/callback_api');

// Create Connection
amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
      throw connError;
    }
    // Create Channel
    connection.createChannel((channelError, channel) => {
      if (channelError) {
        throw channelError;
      }

      // Assert Queue
      const QUEUE = 'test'
      channel.assertQueue(QUEUE);

      // Send message to queue
      channel.sendToQueue(QUEUE, Buffer.from('hello from its coding time'));
      console.log(`Message send to ${QUEUE}`);
    })
})
