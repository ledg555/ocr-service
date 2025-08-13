export class OCRController {
  #ocrService;
  constructor(ocrService) {
    this.#ocrService = ocrService;
  }

  async extractText(file) {
    const text = await this.#ocrService.extractText([file]);
    res.json({
      message: "OCR service works!",
      data: { text },
    });
  }
}
