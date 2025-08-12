export class OCRService {
  #ocrClient;
  constructor() {
    this.#ocrClient = null;
  }
  async extractText(
    path = "https://drive.google.com/file/d/1xi3wEkRgY4yzILjKmg1w5tPiHG-QHN1d/view?usp=drive_link"
  ) {
    return path;
  }
}
