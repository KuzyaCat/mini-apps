const connectionString = `mongodb://alexander_mongo/docker`;
const db = require('@paralect/node-mongo').connect(connectionString);

const schema = require('./user.schema')
const usersService = db.createService('users', schema);

module.exports = usersService;
