import * as os from "os";

export const osHandler = ([args]) => {
    try {
        const commands = ['--EOL', '--cpus', '--homedir', '--username', '--architecture'];
        if (args === commands[0]) {
            console.log(JSON.stringify(os.EOL));
        } else if (args === commands[1]) {
            console.table(os.cpus().map(({ model, speed }) => {
                speed = speed / 1000 + 'GHz';
                return { model, speed }}))
        } else if (args === commands[2]) {
            console.log(os.homedir());
        } else if (args === commands[3]) {
            console.log(os.userInfo().username);
        } else if (args === commands[4]) {
            console.log(os.arch());
        } else {
            throw Error();
        }
    } catch (err) {
        console.error('Operation failed');
    }
}
