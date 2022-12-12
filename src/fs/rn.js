import {parse, resolve} from 'node:path'
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";
import * as fs from "fs";


export const renameFile = ([filePath, newFileName]) => {
    try {
        filePath = resolve(filePath);
        const {dir} = parse(filePath);
        newFileName = resolve(dir, newFileName);
        fs.rename(filePath, newFileName,()=>{})
        showCurrentDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
}
