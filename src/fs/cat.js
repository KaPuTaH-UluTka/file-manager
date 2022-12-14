import {resolve} from "node:path";
import {createReadStream} from "node:fs";
import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const readFile = async ([filePath]) => {
    try {
        filePath = resolve(filePath);
        const readStream = createReadStream(filePath, {encoding: 'utf-8'});
        readStream.on('readable',() => {
            const data = readStream.read();
            if(data != null) console.log(data);
        }).on('end',()=> {
            showCurrentDirectory();
        })
    } catch (error) {
        console.error('Operation failed');
    }
}
