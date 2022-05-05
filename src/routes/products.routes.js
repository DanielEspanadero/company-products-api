import { Router } from 'express';

import * as producsCtrl from '../controllers/producst.controller';
import { authJwt } from '../middlewares';

const router = Router();

router.get('/:productId', producsCtrl.getProductById);
router.get('/', producsCtrl.getProducts);
router.post('/', [authJwt.verifyToken, authJwt.isModerator], producsCtrl.createProduct);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], producsCtrl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isModerator], producsCtrl.deleteProductById);

export default router;