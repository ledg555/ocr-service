import express from "express";
import { OCRRouter } from "./ocr/ocr.routes.js";

const app = express();

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

export { app };
