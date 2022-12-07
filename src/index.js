import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { env } from 'node:process';
import {showCurrentDirectory} from "./utils/showCurrentDirectory.js";
import {upDirectory} from "./navigation/upDirectory.js";
import {cdDirectory} from "./navigation/cdDirectory.js";

let userName;

const rl = readline.createInterface({ input, output });

const keys = Object.keys(env);
const key = keys.find(key => key.slice(-8) === 'username');

if(key) {
    console.log(`Welcome to the File Manager, ${env[key]}`);
    showCurrentDirectory();
    userName = env[key];
} else {
    console.log(`Welcome to the File Manager, 'anonymous'`);
    showCurrentDirectory();
    userName = 'anonymous';
}


rl.on('line', (input) => {
    showCurrentDirectory();
    console.log(`Received: ${input}`);
    if(input === 'up'){upDirectory()}
    else if(input.slice(0,2) === 'cd'){cdDirectory(input)}
    else if(input === '.exit'){
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
        rl.close();
    }
}).on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    rl.close();
});


