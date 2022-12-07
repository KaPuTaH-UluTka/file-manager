import {showCurrentDirectory} from "../utils/showCurrentDirectory.js";

export const upDirectory = () => {
    try {
        process.chdir('..');
        showCurrentDirectory();
    } catch (error) {
        console.error('Operation failed');
    }
}
