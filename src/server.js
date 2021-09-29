'use strict'
import Express from 'express';
import router from './api/link.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
import loadDb from './loaders/db.js';

dotenv.config();

(async () => {
  const server = new Express();
  server.use(Express.urlencoded());
  server.use(Express.json());
  server.use(morgan(process.env.ENV));

  server.use(router);

  server.listen(process.env.PORT, async () => {
    loadDb();
    console.log('Server listing...');
  });
})();
