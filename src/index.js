import Express from 'express';
import Path from 'path';
import Db, {DbEvents, MongooseDrive as Drive} from './db';

import 'dotenv/config';

import routes from './routes.js';

const app = new Express();
const db = new Db(new Drive(process.env.MONGODB_CONNECTION_STRING));

app.set('views', Path.join(__dirname, '/core/views/templates'));
app.set('view engine', 'ejs');

app.use(Express.json());
app.use(Express.urlencoded());

db.connect();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('Server is running on ' + process.env.PORT);
  db.listen(DbEvents);
});