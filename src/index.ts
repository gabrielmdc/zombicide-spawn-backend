import * as Config from './config';
import * as restify from 'restify';

import { setApiRoute } from './graphql';
import { allowCrossOrigin } from './plugins/allow-cross-origin';

// Create server
const server = restify.createServer({
  name: Config.Server.NAME,
  version: Config.Server.VERSION
});

// Set server plugings
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
if (Config.Server.ALLOW_CROSS_ORIGIN) {
  server.use(allowCrossOrigin);
}

// GraphQL
setApiRoute(server, '/graphql');

server.listen(Config.Server.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
