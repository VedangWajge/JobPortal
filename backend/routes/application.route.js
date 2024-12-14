import express from "express";
import {login, register, updateProfile, logout} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, updateCompany , registerCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/apply/:id")

export default router;