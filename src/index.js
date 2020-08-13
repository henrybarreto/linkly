import Express from 'express';
import Path from 'path';
import Db, {DbEvent} from './db/db';
import {LinklMongooseDriver as Driver} from './db/driver';

import 'dotenv/config';

import routes from './routes.js';

const app = new Express();
const db = new Db(new Driver(process.env.MONGODB_CONNECTION_STRING));

db.connect();

app.set('views', Path.join(__dirname, '/core/views/templates'));
app.set('view engine', 'ejs');

app.use(Express.json());
app.use(Express.urlencoded());

app.use('/static', Express.static(Path.join(__dirname + '/static')));

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('Server is running on ' + process.env.PORT);
  db.listen(DbEvent);
});
