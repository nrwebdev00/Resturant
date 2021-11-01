import express from 'express';
const router = express.Router();

//Controllers
import { login, register, getProfile, updateProfile, createStaff, createAdmin } from '../controllers/userController.js';
//MiddleWare
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/profile').get(protect, getProfile ).put(protect, updateProfile );
router.route('/staff').post(protect, admin, createStaff);
router.route('/admin').post(protect, createAdmin);
export default router;