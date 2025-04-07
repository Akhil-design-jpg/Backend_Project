import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.route('/register').post(
  upload.fields([
    {
      name: 'avatar', // name should be same in front end too
      maxCount: 1, // how many maximum accounts you want to store
    },
    {
      name: 'coverImage',
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
