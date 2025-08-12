export class OCRController {
  #ocrService;
  constructor(ocrService) {
    this.#ocrService = ocrService;
  }

  async extractText(req, res) {
    const text = await this.#ocrService.extractText();
    res.json({
      message: "OCR service works!",
      data: { text },
    });
  }
}
