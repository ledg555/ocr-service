import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const fileMiddleware = upload.single("file");

//! TODO: Checar si conviene fields o array
const filesMiddleware = upload.fields([
  {
    name: "file",
    maxCount: 1,
  },
  {
    name: "files",
  },
]);

export { fileMiddleware, filesMiddleware };
