import express, { IRouter } from 'express';
import { Controller } from '../../interface/controllers/store.controller';

export function getRouter(controller: Controller): IRouter {
  const router = express.Router();
  router.post('/product', controller.addNewProduct.bind(controller));
  router.get('/product', controller.getAllProduct.bind(controller));
  return router;
}