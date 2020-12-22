import {Router} from 'express';
import controller from '../controllers/link.js';

const router = new Router();

router.get('/:link', controller.get);
router.post('/link', controller.post);
router.delete('/link', controller.del);

export default router;