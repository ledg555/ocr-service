export class OCRService {
  #ocrClient;
  constructor(ocrClient) {
    this.#ocrClient = ocrClient;
  }

  async extractText(multerFile) {
    console.log({ multerFile });
    const text = await this.#ocrClient.extractText(
      [`./uploads/${multerFile.filename}`]
      // ["es", "esp", "sp", "spa", "spanish"]
    );
    console.log("Extracted text:", text);
    return text;
  }
}
