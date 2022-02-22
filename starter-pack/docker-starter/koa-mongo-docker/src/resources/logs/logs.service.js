const connectionString = `mongodb://alexander_mongo/docker`;
const db = require('@paralect/node-mongo').connect(connectionString);

const schema = require('./logs.schema')
const usersService = db.createService('logs', schema);

module.exports = usersService;
