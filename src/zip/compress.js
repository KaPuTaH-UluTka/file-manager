import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from "node:stream/promises";
import { createBrotliCompress } from 'node:zlib'
import {parse, resolve} from "node:path";

export const compressFile = async ([filePath, destinationPath]) => {
    try {
        filePath = resolve(filePath);
        const {base} = parse(filePath);
        const fileName = `${base}.br`;
        destinationPath = resolve(destinationPath, fileName)
        const writeStream = createWriteStream(filePath);
        const readStream = createReadStream(destinationPath);
        const gzip = createBrotliCompress();
        return pipeline(readStream, gzip, writeStream)
    } catch (err) {
        console.error('Operation failed');
    }
};
