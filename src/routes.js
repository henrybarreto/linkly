import {Router} from 'express';

import {routes as homeRouter} from './routers/HomeRouter';
import {routes as aboutRouter} from './routers/AboutRouter';
import {routes as linkRouter} from './routers/LinkRouter';

const routes = new Router();
routes.use(homeRouter);
routes.use(aboutRouter);
routes.use(linkRouter);

export default routes;
