import express from "express";
import {
  createUser,
  loginUser,
  logOut,
  requestRefreshToken,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

//Create
router.post("/register", createUser);

//Login
router.post("/login", loginUser);

router.post("/refresh", requestRefreshToken);

//Refresh

//Logout
router.post("/logout", verifyToken, logOut);

export default router;
