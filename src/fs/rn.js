import {parse, resolve} from 'node:path'
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";
import fs from "fs/promises";


export const renameFile = async ([filePath, newFileName]) => {
    try {
        filePath = resolve(filePath);
        await fs.stat(filePath);
        const {dir} = parse(filePath);
        newFileName = resolve(dir, newFileName);
        await fs.rename(filePath, newFileName);
        showCurrentDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
}
