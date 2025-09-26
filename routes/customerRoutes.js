import express from "express";
import { createCustomer, getCustomers } from "../controllers/customerController.js";
import {auth} from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, createCustomer);
router.get("/", auth, getCustomers);

export default router;
