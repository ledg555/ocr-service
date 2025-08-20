export class OCRController {
  #ocrService;
  constructor(ocrService) {
    this.#ocrService = ocrService;
  }

  async extractText(req, res) {
    const { file: multerFile } = req;
    const text = await this.#ocrService.extractText(multerFile);
    return res.json({
      message: "Text extracted successfully!",
      data: { text },
    });
  }
}
