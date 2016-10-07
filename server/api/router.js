import Router from 'express';
import * as postRoutes from './posts/posts.routes';

const router = new Router();

router.route('/api', postRoutes);

module.exports = router;
