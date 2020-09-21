import {ServerExpress} from './server';

const server = new ServerExpress();

server.configure();
server.routes();
server.database();

server.listen(3000);
