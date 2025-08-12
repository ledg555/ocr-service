import express from "express";
import { OCRRouter } from "./src/ocr/ocr.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server alive and running!",
  });
});

app.use(OCRRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
