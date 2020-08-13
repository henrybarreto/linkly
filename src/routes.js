import {Router} from 'express';

// To Fix
import HomeController from './core/controllers/HomeController';
import AboutController from './core/controllers/AboutController';
import LinkController from './core/controllers/LinkController';

const homeController = new HomeController();
const aboutController = new AboutController();
const linkController = new LinkController();

const routes = new Router();

routes.get(homeController.path.get, homeController.get);
routes.get(aboutController.path.get, aboutController.get);

routes.get(linkController.path.get, linkController.get);
routes.post(linkController.path.post, linkController.post);

/* routes.all(/./, (req, res) => {
  res.redirect('/');
}); */

export default routes;
