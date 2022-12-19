import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { env } from 'node:process';
import {showCurrentDirectory} from "./utils/showCurrentDirectory.js";
import {inputParser} from "./utils/inputParser.js";
import * as os from "os";

process.chdir(os.homedir());

let userName;

const rl = readline.createInterface({ input, output });

const keys = Object.keys(env);
const key = keys.find(key => key.slice(-8) === 'username');

if(key) {
    console.log(`Welcome to the File Manager, ${env[key]}`);
    showCurrentDirectory();
    userName = env[key];
} else {
    console.log(`Welcome to the File Manager, anonymous`);
    showCurrentDirectory();
    userName = 'anonymous';
}


rl.on('line', (input) => {
    if(input === '.exit'){
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
        rl.close();
    } else {
        inputParser(input);
    }
}).on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    rl.close();
});


