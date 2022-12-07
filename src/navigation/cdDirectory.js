import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const cdDirectory = (input) => {
    try {
        process.chdir(input.substring(3));
        showCurrentDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
}
