import fs from "fs/promises";
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";
import {resolve} from "node:path";

export const removeFile = async ([filePath]) => {
    try {
        filePath = resolve(filePath);
        await fs.unlink(filePath);
        showCurrentDirectory();
    } catch (err) {
        console.error(Error('Operation failed'))
    }
};
