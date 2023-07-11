import multer from "multer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = {
  storage: multer.diskStorage({
    destination: join(__dirname, "..", "uploads"),
    filename: (request, file, callback) => {
      const fileName = `${file.originalname.trim()}-${Date.now()}`;

      callback(null, fileName);
    },
  }),
};

export default multer(storage);
