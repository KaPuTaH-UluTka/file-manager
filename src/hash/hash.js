import fs from 'fs/promises';
import {resolve} from 'node:path'
import {createHash} from 'crypto'
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const calculateHash = async ([filePath]) => {
    try {
        filePath = resolve(filePath);
        const hash = createHash('sha256');
        const file = await fs.readFile(filePath);
        hash.update(file);
        console.log(hash.digest('hex'));
        showCurrentDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
};
