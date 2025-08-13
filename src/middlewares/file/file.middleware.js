import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const fileMiddleware = upload.fields([
  {
    name: "file",
    maxCount: 1,
  },
  {
    name: "files",
  },
]);

export { fileMiddleware };
