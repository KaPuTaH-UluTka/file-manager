import fs from "fs/promises";
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const removeFile = async ([fileName]) => {
    try {
        await fs.unlink(process.cwd() + fileName);
        showCurrentDirectory();
    } catch (err) {
        console.error(Error('Operation failed'))
    }
};
