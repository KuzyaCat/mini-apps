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
        const QUEUE = 'codingtest'
        channel.assertQueue(QUEUE);
        // Receive Messages
        channel.consume(QUEUE, (msg) => {
          console.log(`Message received: ${msg.content.toString()}`)
        }, {
          noAck: true
        })
    })
})
