'use strict'
import Express from 'express';
import router from './api/link'
import morgan from 'morgan';
import dotenv from 'dotenv';
import * as Db from './database/db_moogose_connection';

dotenv.config();

(async () => {
  const server = new Express();
  server.use(Express.urlencoded());
  server.use(Express.json());
  server.use(morgan('dev'));

  server.use(router);

  server.listen(process.env.PORT, () => {
    console.log("Server is listening...");
    try {
      Db.dbConnect(process.env.MONGODB_URL);
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
  });
})();