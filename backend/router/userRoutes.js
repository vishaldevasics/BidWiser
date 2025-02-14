import express from 'express';
import { register, login, getProfile, logout, fetchLeaderboard,verifyAccount} from "../controllers/userController.js";
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getProfile);
router.get("/logout", isAuthenticated, logout);
router.get("/leaderboard", fetchLeaderboard);
router.post("/verify", isAuthenticated ,verifyAccount);

export default router;
