import { Router } from "express";

import * as producsCtrl from "../controllers/producst.controller";

const router = Router();

router.get('/:productId', producsCtrl.getProductById);
router.get('/', producsCtrl.getProducts);
router.post('/', producsCtrl.createProduct);
router.put('/:productId', producsCtrl.updateProductById);
router.delete('/:productId', producsCtrl.deleteProductById);

export default router;