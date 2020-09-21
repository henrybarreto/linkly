/* eslint-disable require-jsdoc */
import Express from 'express';
import path from 'path';
import Db, {DbEvent} from './database';
import {MongooseNosqlDriver as NosqlDriver} from './drivers/NosqlDriver';
import routes from './routes.js';
import 'dotenv/config';

function log(msg) {
  console.log(`[server] ${msg}`);
}

export class ServerExpress {
  constructor() {
    this.server = new Express();
  }
  configure() {
    try {
      this.server.set('views', path.join(__dirname, '/views/templates'));
      this.server.set('view engine', 'ejs');

      this.server.use(Express.json());
      this.server.use(Express.urlencoded());
    } catch (error) {
      log('Configuration error');
      log(error);
    }
  }
  routes() {
    try {
      this.server.use(
          '/static', Express.static(path.join(__dirname + '/static')));

      this.server.use(routes);
    } catch (error) {
      log('Routes error');
      log(error);
    }
  }
  database() {
    try {
      this.db = new Db(new NosqlDriver(process.env.MONGODB_URL));
      this.db.connect();
    } catch (error) {
      log('Database error');
      log(error);
    }
  }
  listen(port) {
    try {
      this.db.listen(DbEvent);
      this.server.listen(port);
      log(`Server is up on port ${port}`);
    } catch (error) {
      log('Listen error');
      log(error);
    }
  }
}
