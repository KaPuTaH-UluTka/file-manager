import * as fs from "fs";
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const createFile = async ([fileName]) => {
    await fs.writeFile(fileName, '', {flag: 'wx'}, (async err => {
        showCurrentDirectory();
        if (err) console.error(Error('Operation failed'))
    }));

}
