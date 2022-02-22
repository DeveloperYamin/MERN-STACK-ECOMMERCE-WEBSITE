import { Router } from "express";
import { forgetPassword, loginUser, logoutUser, registerUser, resetPassword, getUserDetails } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js"

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forget").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticated, getUserDetails);

export default router;