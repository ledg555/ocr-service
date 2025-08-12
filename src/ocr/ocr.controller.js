export class OCRController {
  constructor(ocrService) {
    this.ocrService = ocrService;
  }

  async extractText(req, res) {
    const path =
      "https://drive.google.com/file/d/1xi3wEkRgY4yzILjKmg1w5tPiHG-QHN1d/view?usp=drive_link";
    res.json({
      message: "OCR service works!",
      data: path,
    });

    // const text = await this.ocrService.extractText(path);
    // return { text };
  }
}
