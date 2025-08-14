import multer from "multer";

export class OCRController {
  #ocrService;
  constructor(ocrService) {
    this.#ocrService = ocrService;
  }

  async extractText(req, res) {
    const { file: multerFile } = req;
    const text = await this.#ocrService.extractText(multerFile);
    res.json({
      message: "OCR service works!",
      data: { text },
    });
  }
}
