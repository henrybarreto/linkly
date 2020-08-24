import {Router} from 'express';
import LinkController from '../controllers/LinkController';

export const routes = new Router();
const linkController = new LinkController();

routes.get(linkController.path.get, linkController.get);
routes.post(linkController.path.post, linkController.post);
