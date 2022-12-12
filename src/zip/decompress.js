import {createReadStream, createWriteStream} from 'node:fs';
import { createBrotliDecompress} from 'node:zlib';
import {pipeline} from "node:stream/promises";
import {parse, resolve} from "node:path";

export const decompressFile = async ([filePath, destinationPath]) => {
    try {
        filePath = resolve(filePath);
        const { name, ext } = parse(filePath);
        if (!ext.includes('.br')) console.error('invalid file extension');
        destinationPath = resolve(destinationPath, name)
        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(destinationPath);
        const gzip = createBrotliDecompress();
        return pipeline(readStream, gzip, writeStream)
    } catch (err) {
        console.error('Operation failed');
    }
};
