import express from 'express';
import { convertMarkdown } from '../controller/markdownController.js';

export const router=express.Router();
router.post('/convert',convertMarkdown)

