const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = new Router();

const app = new Koa();

const userService = require('./resources/users/user.service');
const logsService = require('./resources/logs/logs.service');

app.use(bodyParser());

async function getMeHandler(ctx) {
  const { results } = await userService.find()
  ctx.body = results;
}

async function getLogsHandler(ctx) {
  const { results } = await logsService.find()
  ctx.body = results;
}

async function postLogsHandler(ctx) {
  console.log(ctx.request.body);
  ctx.body = await logsService.create(ctx.request.body);
}

router.get('/me', getMeHandler);

router
  .get('/logs', getLogsHandler)
  .post('/logs', postLogsHandler);

app.use(router.routes());
app.listen(3189, () => {
  console.log('Server was started');
});
