import {Router} from 'express';
import AboutController from '../controllers/AboutController';

export const routes = new Router();
const aboutController = new AboutController();

routes.get(aboutController.path.get, aboutController.get);
