import { Router } from "express";
import { OCRController } from "./ocr.controller.js";
import { OCRService } from "./ocr.service.js";

const OCRRouter = Router();
const ocrService = new OCRService();
const ocrController = new OCRController(ocrService);

OCRRouter.post("/ocr", (req, res) => ocrController.extractText(req, res));

export { OCRRouter };
