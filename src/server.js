'use strict'
import Express from 'express';
import router from './api/link';
import morgan from 'morgan';
import dotenv from 'dotenv';
import loadDb from './loader/db';

dotenv.config();

(async () => {
  const server = new Express();
  server.use(Express.urlencoded());
  server.use(Express.json());
  server.use(morgan(process.env.ENV));

  server.use(router);

  server.listen(process.env.PORT, async () => {
    console.log('Server listing...');
    loadDb();
  });
})();
