import {createReadStream, createWriteStream} from 'node:fs';
import { createBrotliDecompress} from 'node:zlib';
import {pipeline} from "node:stream/promises";
import {parse, resolve} from "node:path";
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const decompressFile = async ([filePath, destinationPath]) => {
    try {
        filePath = resolve(filePath);
        const { name, ext } = parse(filePath);
        if (!ext.includes('.br')) throw new Error('invalid file extension');
        destinationPath = resolve(destinationPath, name)
        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(destinationPath);
        const gzip = createBrotliDecompress();
        await pipeline(readStream, gzip, writeStream);
        showCurrentDirectory();
    } catch (err) {
        console.error('Operation failed');
    }
};
