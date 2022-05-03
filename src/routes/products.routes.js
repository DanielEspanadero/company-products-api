import { Router } from "express";

import * as producsCtrl from "../controllers/producst.controller";

const router = Router();

router.get('/:productId', producsCtrl.getProductById);
router.get('/', producsCtrl.getProducts);
router.post('/', producsCtrl.updateProductById);
router.put('/', producsCtrl.updateProductById);
router.delete('/', producsCtrl.deleteProductById);

export default router;