import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";
import {resolve} from 'node:path';

export const cdDirectory = ([input]) => {
    try {
        process.chdir(resolve(input));
        showCurrentDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
}
