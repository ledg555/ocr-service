export class OCRService {
  #ocrClient;
  constructor(ocrClient) {
    this.#ocrClient = ocrClient;
  }

  async extractText(multerFile) {
    const buffer = multerFile.buffer;
    const blob = new Blob([buffer], { type: multerFile.mimetype });
    const file = new File([blob], multerFile.originalname, {
      type: multerFile.mimetype,
    });
    const fileWithFileData = { ...file, fileData: buffer };

    const text = await this.#ocrClient.extractText(
      [fileWithFileData],
      ["es", "esp", "sp", "spa", "spanish"]
    );
    console.log("Extracted text:", text);
    return text;
  }
}
