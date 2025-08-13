import { Router } from "express";
import scribe from "scribe.js-ocr";
import { OCRController } from "./ocr.controller.js";
import { OCRService } from "./ocr.service.js";
import { fileMiddleware } from "../../middlewares/file/file.middleware.js";

const OCRRouter = Router();
let ocrController;

(async () => {
  try {
    await scribe.init({ pdf: true, ocr: true, font: true });
    const ocrService = new OCRService(scribe);
    ocrController = new OCRController(ocrService);

    OCRRouter.put("/", fileMiddleware, (req, res) => {
      const { file } = req;
      console.log({ file });
      return ocrController.extractText(file);
    });

    console.log("OCR router successfully initialized.");
  } catch (error) {
    console.error("Failed to initialize the OCR router:", error);
  }
})();

export { OCRRouter };
