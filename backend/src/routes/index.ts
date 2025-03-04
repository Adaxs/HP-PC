import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
    app.get('/api/products', indexController.getProducts);
    app.post('/api/compare', indexController.compareProducts);
    app.get('/api/user/roles', indexController.getUserRoles);
}