import {parse, resolve} from 'node:path'
import {createReadStream, createWriteStream} from 'node:fs'
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";
import { pipeline } from 'node:stream/promises'


export const copyFile = async ([filePath, newDirectoryPath]) => {
    try {
        filePath = resolve(filePath);
        const {base} = parse(filePath);
        newDirectoryPath = resolve(newDirectoryPath, base);
        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(newDirectoryPath);
        await pipeline(readStream, writeStream);
        showCurrentDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
}
