import Express from 'express';
import path from 'path';
import Db, {DbEvent} from './Db';
import {MongooseNosqlDriver as NosqlDriver} from './drivers/NosqlDriver';

import 'dotenv/config';

import routes from './routes.js';

const app = new Express();
const db = new Db(new NosqlDriver(process.env.MONGODB_URL));

db.connect();

app.set('views', path.join(__dirname, '/views/templates'));
app.set('view engine', 'ejs');

app.use(Express.json());
app.use(Express.urlencoded());

app.use('/static', Express.static(path.join(__dirname + '/static')));

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('Server is running on ' + process.env.PORT);
  db.listen(DbEvent);
});
