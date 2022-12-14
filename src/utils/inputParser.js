import {upDirectory} from "../navigation/upDirectory.js";
import {cdDirectory} from "../navigation/cdDirectory.js";
import {list} from "../navigation/lsDirectory.js";
import {copyFile} from "../fs/cp.js";
import {renameFile} from "../fs/rn.js";
import {moveFile} from "../fs/mv.js";
import {decompressFile} from "../zip/decompress.js";
import {compressFile} from "../zip/compress.js";
import {readFile} from "../fs/cat.js";
import {calculateHash} from "../hash/hash.js";
import {createFile} from "../fs/add.js";
import {removeFile} from "../fs/rm.js";
import {osHandler} from "../os/os.js";

export const inputParser = (input) => {
    try {
        input = input.trim();
        let [command, ...args] = input.split(' ');
        if (args.find(arg => arg.includes('"') || arg.includes("'"))) {
            args = args
                .join(' ')
                .split(/["'] | ["']/)
                .map((arg) => arg.replace(/"|'/g, ''))

        }

        const twoArgEvents = ['rn', 'cp', 'mv', 'compress', 'decompress'];
        const oneArgEvents = ['cd', 'cat', 'add', 'rm', 'os', 'hash'];
        const zeroArgEvents = ['up', 'ls'];
        if (twoArgEvents.includes(command) && args.length === 2) {
            if(command === twoArgEvents[0]){
                renameFile(args);
            } else if(command === twoArgEvents[1]) {
                copyFile(args);
            } else if(command === twoArgEvents[2]) {
                moveFile(args);
            } else if(command === twoArgEvents[3]) {
                compressFile(args);
            } else if(command === twoArgEvents[4]) {
                decompressFile(args);
            }
        } else if (oneArgEvents.includes(command) && args.length === 1) {
            if(command === oneArgEvents[0]){
                cdDirectory(args);
            } else if(command === oneArgEvents[1]) {
                readFile(args);
            } else if(command === oneArgEvents[2]) {
                createFile(args);
            } else if(command === oneArgEvents[3]) {
                removeFile(args);
            } else if(command === oneArgEvents[4]) {
                osHandler(args);
            } else if(command === oneArgEvents[5]) {
                calculateHash(args);
            }
        } else if (zeroArgEvents.includes(command)) {
            if(command === zeroArgEvents[0]){
                upDirectory();
            } else {
                list();
            }
        } else {
            throw Error('Invalid input');
        }
    } catch (err) {
        console.error(err)
    }
}
