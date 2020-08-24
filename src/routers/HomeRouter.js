import {Router} from 'express';
import HomeController from '../controllers/HomeController';

export const routes = new Router();
const homeController = new HomeController();

routes.get(homeController.path.get, homeController.get);
