import {upDirectory} from "../navigation/upDirectory.js";
import {cdDirectory} from "../navigation/cdDirectory.js";
import {list} from "../navigation/lsDirectory.js";

export const inputParser = (input) => {
    try {
        input = input.trim();
        let [command, ...args] = input.split(' ');

        if (args.find(arg => arg.includes('"') || arg.includes("'"))) {
        }

        const twoArgEvents = ['rn', 'cp', 'mv', 'compress', 'decompress'];
        const oneArgEvents = ['cd', 'cat', 'add', 'rm', 'os', 'hash'];
        const zeroArgEvents = ['up', 'ls'];
        if (twoArgEvents.includes(command) && args.length === 2) {

        } else if (oneArgEvents.includes(command) && args.length === 1) {
            if(command === oneArgEvents[0]){
                cdDirectory(input)
            } else {

            }
        } else if (zeroArgEvents.includes(command)) {
            if(command === zeroArgEvents[0]){
                upDirectory();
            } else {
                list();
            }
        } else {
            throw new Error('Invalid input');
        }
    } catch (err) {
        console.error(err);
    }
}
