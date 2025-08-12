export class OCRService {
  ocrClient;
  constructor(ocrClient) {
    this.ocrClient = ocrClient;
  }

  async extractText(
    path = "https://drive.google.com/file/d/1xi3wEkRgY4yzILjKmg1w5tPiHG-QHN1d/view?usp=drive_link"
  ) {
    const text = await this.ocrClient.extractText([path]);
    console.log("Extracted text:", text);
    return text;
  }
}
