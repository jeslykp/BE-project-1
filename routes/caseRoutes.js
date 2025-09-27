import express from 'express';
import { createCase, updateCase,getCases ,getCasesByCustomer, deleteCase } from "../controllers/caseController.js"
import { auth } from '../middlewares/auth.js';


const router = express.Router();

router.post("/", auth, createCase);
router.patch("/:id", auth, updateCase);
router.get("/", auth, getCases);
router.get("/customer/:customerId", auth, getCasesByCustomer);
router.delete("/:id", deleteCase);

export default router;

