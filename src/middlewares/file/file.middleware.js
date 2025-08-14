import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const prefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, prefix + "-" + file.originalname);
  },
});
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
