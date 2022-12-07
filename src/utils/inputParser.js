export const inputParser = (input) => {
    input = input.trim();
    let [command, ...args] = input.split(' ');

    if (args.find(arg => arg.includes('"') || arg.includes("'"))) {
    }

    const twoArgEvents = ['rn', 'cp', 'mv', 'compress', 'decompress'];
    const oneArgEvents = ['cd', 'cat', 'add', 'rm', 'os', 'hash'];
    const zeroArgEvents = ['up', 'ls'];
}
