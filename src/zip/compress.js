import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from "node:stream/promises";
import { createBrotliCompress } from 'node:zlib'
import {parse, resolve} from "node:path";
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const compressFile = async ([filePath, destinationPath]) => {
    try {
        filePath = resolve(filePath);
        const {base} = parse(filePath);
        const fileName = `${base}.br`;
        destinationPath = resolve(destinationPath, fileName)
        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(destinationPath);
        const gzip = createBrotliCompress();
        await pipeline(readStream, gzip, writeStream);
        showCurrentDirectory();
    } catch (err) {
        console.error('Operation failed');
    }
};
