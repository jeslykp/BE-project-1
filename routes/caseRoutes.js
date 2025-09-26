import express from 'express';
import { createCase, updateCase } from "../controllers/caseController.js"
import { auth } from '../middlewares/auth.js';
const router = express.Router();

router.post("/", auth, createCase);
router.patch("/:id", auth, updateCase);

export default router;